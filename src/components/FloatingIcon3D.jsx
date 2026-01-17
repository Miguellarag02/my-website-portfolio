import { useEffect, useRef } from "react";

const FloatingIcon3D = ({ boxRef, iconSrc }) => {
  const iconRef = useRef(null);

  useEffect(() => {
    const box = boxRef.current;
    const icon = iconRef.current;
    if (!box || !icon) return;

    let raf = 0;
    let W = 0, H = 0, size = 64;

    // Medimos contenedor y ajustamos tamaño del icono
    const measure = () => {
      const r = box.getBoundingClientRect();
      W = r.width;
      H = r.height;

      size = Math.max(40, Math.min(96, Math.min(W, H) * 0.14));
      icon.style.width = `${size}px`;
      icon.style.height = `${size}px`;
    };

    measure();
    window.addEventListener("resize", measure);

    // Centro base (para que use TODO el div sin salirse)
    const base = { x: (W - size) / 2, y: (H - size) / 2 };

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

      // Recalcular base por si resize cambió W/H
      base.x = (W - size);
      base.y = (H - size/2);

      // Amplitud: ocupa gran parte del contenedor -> “todo el div”
      // (icono siempre dentro porque usamos W-size y H-size)
      const ax = Math.max(0, (W - size) * 0.8);
      const ay = Math.max(0, (H - size) * 0.8); // menos en vertical para sensación “flotar”
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
  }, []);

  return (
    <img
      ref={iconRef}
      src={iconSrc}
      alt="icon"
      className="absolute left-0 top-0 rounded-xl select-none pointer-events-none will-change-transform"
      draggable={false}
    />
  );
}

export default FloatingIcon3D;
