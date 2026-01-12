import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../components/CanvasLoader.jsx";
import { PerspectiveCamera } from "@react-three/drei";
import { useResponsiveFlags } from "../constants/index.js";
import { STATES } from "../constants/HeroRoutes.js"
import HeroCamera from "../components/Hero/Camera.jsx"
import MyDesktop from "../components/Hero/MyDesktop.jsx";
import Button from "../components/Button.jsx";
import WorkSection from "./Work.jsx";
import ProjectsSection from "./Projects.jsx";
import MonitorScreen from "./MonitorScreen.jsx";
import { useKeyboardControls } from "../components/Hero/KeyboardControls.jsx";
import { useStateSectionControl } from "../components/Hero/StateSectionControl.jsx";
import { calculateSizes, calculateCameraPositions } from "../constants/index.js";

export default function Hero() {
    const { stateSection, setStateSection } = useStateSectionControl();
    const [outlineEnable, setOutlineEnable] = useState(true);
    const [cameraIsMoving, setCameraIsMoving] = useState(false)

    // Sizing
    const { isSmall, isMobile, isTablet, isUltraWide } = useResponsiveFlags();
    const sizes = calculateSizes(isSmall, isMobile, isTablet, isUltraWide);
    const cameraState = calculateCameraPositions(stateSection, isSmall, isMobile, isTablet, isUltraWide);

    // ESC -> IDLE; si sigue IDLE 3s -> outline true
    useKeyboardControls({ stateSection, setStateSection, setOutlineEnable, delayMs: 3000 });

    const onLaptopClick = () => {
        setStateSection(STATES.WORK);
        setOutlineEnable(false);
    };

    const onMonitorClick = () => {
        setStateSection(STATES.ABOUT);
        setOutlineEnable(false);
    };

    const onKeyboardClick = () => {
        setStateSection(STATES.PROJECTS);
        setOutlineEnable(false);
    };

    return (
        <section className="min-h-screen w-full flex flex-col">
            {/* IDLE */}
            {stateSection === STATES.HOME && (
                <div className="w-full mx-auto flex flex-col sm:mt-36 mt-32 c-space gap-3">
                    <p className={`sm:text-3xl text-2xl font-medium text-white text-center font-generalsans ${stateSection === STATES.HOME ? "fade-in-delay-2" : "fade-out"}`}>
                        Hi I am Miguel Angel <span className="waving-hand">👋</span>
                    </p>
                    <p className={`hero_tag text-gray_gradient ${stateSection === STATES.HOME ? "fade-in-delay-3" : "fade-out"}`}>
                        Software Engineer
                    </p>
                </div>
            )}

            {!cameraIsMoving  && (
                <>
                    {/* WORK SECTION (LAPTOP) */}
                    {stateSection === STATES.WORK && (
                        <WorkSection stateSection={stateSection} />
                    )}

                    {/* ABOUT SECTION (MONITOR) */}
                    {stateSection === STATES.ABOUT && (
                        <MonitorScreen stateSection={stateSection} />
                    )}

                    {/* PROJECTS SECTION (KEYBOARD) */}
                    {stateSection === STATES.PROJECTS && (
                        <ProjectsSection stateSection={stateSection} />
                    )}
                </>
            )}

            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full flex-grow">
                    <Suspense fallback={<CanvasLoader />}>
                    <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                    <HeroCamera freeMovement={stateSection === STATES.HOME ? !isMobile : false} cameraState={cameraState} setCameraIsMoving={setCameraIsMoving}>
                        <MyDesktop
                            scale={sizes.deskScale}
                            position={sizes.deskPos}
                            rotation={[0.39, 4.34, 0.0]}
                            onLaptopClick={onLaptopClick}
                            onMonitorClick={onMonitorClick}
                            onKeyboardClick={onKeyboardClick}
                            outlineEnable={outlineEnable}
                        />
                    </HeroCamera>

                    <ambientLight intensity={1.0} />
                    <directionalLight position={[-15, 7, 1]} intensity={3.0} />
                    </Suspense>
                </Canvas>
            </div>

            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#contact" className="w-fit">
                <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>
        </section>
    );
}
