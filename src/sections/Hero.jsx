import { useState } from "react";
import { useResponsiveFlags } from "../constants/index.js";
import { STATES } from "../constants/HeroRoutes.js"
import Button from "../components/Button.jsx";
import LaptopScreen from "../components/Hero/LaptopScreen.jsx";
import MonitorScreen from "../components/Hero/MonitorScreen.jsx";
import { useKeyboardControls } from "../components/Hero/KeyboardControls.jsx";
import HeroScene from "../components/Hero/Scene.jsx";
import { useStateSectionControl } from "../components/Hero/StateSectionControl.jsx";

export default function Hero() {
  const responsiveFlags = useResponsiveFlags();
  const { isMobile } = responsiveFlags;

  const { stateSection, setStateSection } = useStateSectionControl();
  const [outlineEnable, setOutlineEnable] = useState(true);

  // ESC -> IDLE; si sigue IDLE 3s -> outline true
  useKeyboardControls({ stateSection, setStateSection, setOutlineEnable, delayMs: 3000 });

  const onLaptopClick = () => {
    setStateSection(STATES.LAPTOP);
    setOutlineEnable(false);
  };

  const onMonitorClick = () => {
    setStateSection(STATES.MONITOR);
    setOutlineEnable(false);
  };

  return (
    <section className="min-h-screen w-full flex flex-col">
        {/* IDLE */}
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-32 c-space gap-3">
            <p className={`sm:text-3xl text-2xl font-medium text-white text-center font-generalsans ${stateSection === STATES.IDLE ? "fade-in-delay-2" : "fade-out"}`}>
                Hi I am Miguel Angel <span className="waving-hand">👋</span>
            </p>
            <p className={`hero_tag text-gray_gradient ${stateSection === STATES.IDLE ? "fade-in-delay-3" : "fade-out"}`}>
                Software Engineer
            </p>
        </div>

        <LaptopScreen stateSection={stateSection} />
        <MonitorScreen stateSection={stateSection} />

        <HeroScene
            stateSection={stateSection}
            isMobile={isMobile}
            responsiveFlags={responsiveFlags}
            outlineEnable={outlineEnable}
            onLaptopClick={onLaptopClick}
            onMonitorClick={onMonitorClick}
        />

        <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
            <a href="#about" className="w-fit">
            <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
            </a>
        </div>
    </section>
  );
}
