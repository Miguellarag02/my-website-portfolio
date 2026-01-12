import { STATES } from "../../constants/HeroRoutes.js"

export default function HeroOverlay({ stateSection }) {
  return (
    <div className={`relative z-10 w-full mx-auto flex flex-col sm:mt-36 mt-32 c-space gap-3 ${stateSection === STATES.LAPTOP ? "fade-in-delay-3" : "fade-out"}`}>
      <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">My Work</p>
    </div>
  );
}
