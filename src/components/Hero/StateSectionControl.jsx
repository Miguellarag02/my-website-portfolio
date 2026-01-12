import { useEffect, useState } from "react";
import { DEFAULT_HASH, hashToState, stateToHash, STATES } from "../../constants/HeroRoutes.js";

export function useStateSectionControl() {
  const [stateSection, setStateSection] = useState(STATES.IDLE);

  // Inicializa hash si no existe
  useEffect(() => {
    if (!window.location.hash) window.location.hash = DEFAULT_HASH;
  }, []);

  // Hash -> state
  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash;
      const next = hashToState[hash];
      if (next) setStateSection(next);
    };

    window.addEventListener("hashchange", onHashChange);
    onHashChange(); // sync inicial
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // state -> hash
  useEffect(() => {
    const hash = stateToHash[stateSection];
    if (hash && window.location.hash !== hash) {
      window.location.hash = hash;
    }
  }, [stateSection]);

  return { stateSection, setStateSection };
}
