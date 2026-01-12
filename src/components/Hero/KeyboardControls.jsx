import { useEffect, useRef } from "react";
import { STATES } from "../../constants/HeroRoutes.js"

export function useKeyboardControls({ stateSection, setStateSection, setOutlineEnable, delayMs = 3000 }) {
  const stateRef = useRef(stateSection);

  useEffect(() => {
    stateRef.current = stateSection;
  }, [stateSection]);

  useEffect(() => {
    let timeoutId;

    const onKeyDown = (e) => {
      if (e.key !== "Escape") return;

      setStateSection(STATES.HOME);

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (stateRef.current === STATES.HOME) {
          setOutlineEnable(true);
        }
      }, delayMs);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      clearTimeout(timeoutId);
    };
  }, [setStateSection, setOutlineEnable, delayMs]);
}
