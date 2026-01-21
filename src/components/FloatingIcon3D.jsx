import { useEffect, useRef } from "react";

const FloatingIcon3D = ({ boxRef, iconSrc, isRandomMovement, currentScale, opacity }) => {
  const iconRef = useRef(null);
  const scaleRef = useRef(currentScale);
  const isLg = window.matchMedia("(min-width: 1224px)").matches;

  useEffect(() => {
    scaleRef.current = currentScale;
  }, [currentScale]);

  useEffect(() => {
    const box = boxRef.current;
    const icon = iconRef.current;
    if (!box || !icon) return;

    let raf = 0;
    let W = 0, H = 0, size = 64;

    // Medimos contenedor y ajustamos tamaño del icono
    const measure = () => {
      const r = box.getBoundingClientRect();
      W = r.width * scaleRef.current;
      H = r.height * scaleRef.current;

      size = Math.max(40, Math.min(96, Math.min(W, H) * 0.14));
      icon.style.width = `${size}px`;
      icon.style.height = `${size}px`;
    };

    measure();


    if (!isRandomMovement) {
      let rafStatic = 0;
      const target = { x: 0, y: 0 };
      const pos = { x: 0, y: 0 };
      const smooth = (current, goal, k) => current + (goal - current) * k;

      const readTranslate = () => {
        const t = getComputedStyle(icon).transform;
        if (!t || t === "none") return { x: 0, y: 0 };
        const m = new DOMMatrixReadOnly(t);
        return { x: m.m41, y: m.m42 };
      };

      const updateStatic = () => {
        // Recalculate container and icon size on each layout update
        measure();
        // Collect all static icons to compute grid placement
        const icons = box.querySelectorAll('[data-floating-icon="false"]');
        // Determine this icon's index in the grid
        const index = Array.prototype.indexOf.call(icons, icon);
        // Bail out if the icon isn't part of the static set
        if (index === -1) return;

        // Compute a consistent gap and max columns that fit horizontally
        const gap = Math.max(16, Math.round(size * 0.8));

        // Map the index to grid coordinates and center the grid
        const col = index;
        const startX = W - ((size + gap) * icons.length - gap) / 2;
        const startY = H;
        const x = startX + col * (size + gap);
        const y = startY;
        // Apply a fixed transform for static positioning
        target.x = x;
        target.y = y;
      };

      const startPos = readTranslate();
      pos.x = startPos.x;
      pos.y = startPos.y;

      const tickStatic = () => {
        pos.x = smooth(pos.x, target.x, 0.05);
        pos.y = smooth(pos.y, target.y, 0.05);
        icon.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 120px) scale(${isLg ? 1.8 : 1.5})`;
        rafStatic = requestAnimationFrame(tickStatic);
      };

      // Initial layout and resize handling for static mode
      updateStatic();
      window.addEventListener("resize", updateStatic);
      rafStatic = requestAnimationFrame(tickStatic);

      // Cleanup resize listener when exiting static mode
      return () => {
        cancelAnimationFrame(rafStatic);
        window.removeEventListener("resize", updateStatic);
      };
    } 

    window.addEventListener("resize", measure);

    // Centro base (para que use TODO el div sin salirse)
    const base = { x: (W - size), y: (H - size/2)};

    // Fases aleatorias para que no parezca “robot”
    const phase = {
      x: Math.random() * Math.PI * 2,
      y: Math.random() * Math.PI * 2,
      z: Math.random() * Math.PI * 2,
    };

    // Estado para suavizado (lerp)
    const pos = { x: base.x, y: base.y, z: 0 };
    const smooth = (current, target, k) => current + (target - current) * k;

    const start = performance.now();

    const tick = (now) => {
      const t = (now - start) / 1000;
      measure();

      // Recalcular base por si resize cambió W/H
      base.x = (W - size);
      base.y = (H - size/2);
      console.log(`FloatingIcon3D Random Movement: BASE x=${base.x}, y=${base.y}`);

      // Amplitud: ocupa gran parte del contenedor -> “todo el div”
      // (icono siempre dentro porque usamos W-size y H-size)
      const ax = Math.max(0, (W - size) * 0.7);
      const ay = Math.max(0, (H - size) * 0.7); // menos en vertical para sensación “flotar”
      const az = 120; // profundidad

      // Objetivo: sinusoidal suave (sin saltos)
      const targetX = base.x + ax * Math.sin(t * 0.35 + phase.x);
      const targetY = base.y + ay * Math.sin(t * 0.55 + phase.y);
      const targetZ = az * Math.sin(t * 0.45 + phase.z);

      // Suavizado (cuanto más bajo, más “flota”)
      pos.x = smooth(pos.x, targetX, 0.03);
      pos.y = smooth(pos.y, targetY, 0.03);
      pos.z = smooth(pos.z, targetZ, 0.03);

      icon.style.transform = `
        translate3d(${pos.x}px, ${pos.y}px, ${pos.z}px)
      `;

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
    };
  }, [isRandomMovement]);

  return (
    <img
      ref={iconRef}
      src={iconSrc}
      alt="icon"
      data-floating-icon={`${isRandomMovement}`}
      className="absolute left-0 top-0 rounded-xl select-none pointer-events-none will-change-transform"
      draggable={false}
      style={{ opacity }}
    />
  );
}

export default FloatingIcon3D;
