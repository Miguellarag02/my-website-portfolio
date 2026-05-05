import { useState, Suspense, useEffect } from "react";
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
import AboutSection from "./About.jsx";
import { useKeyboardControls } from "../components/Hero/KeyboardControls.jsx";
import { useStateSectionControl } from "../components/Hero/StateSectionControl.jsx";
import { PROFILE_LINKS, calculateSizes, calculateCameraPositions } from "../constants/index.js";
import { useLanguage } from "../context/LanguageContext.jsx";

const DESK_HINT_STORAGE_KEY = "desk_hint_seen_v1";

export default function Hero() {
    const { UI_TEXTS } = useLanguage();
    const { stateSection, setStateSection } = useStateSectionControl();
    const [outlineEnable, setOutlineEnable] = useState(true);
    const [cameraIsMoving, setCameraIsMoving] = useState(false)
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
    const [showDeskHint, setShowDeskHint] = useState(false);
    const [hoveredDeskSection, setHoveredDeskSection] = useState(null);

    // Sizing
    const { isSmall, isMobile, isTablet, isUltraWide } = useResponsiveFlags();
    const sizes = calculateSizes(isSmall, isMobile, isTablet, isUltraWide);
    const cameraState = calculateCameraPositions(stateSection, isSmall, isMobile, isTablet, isUltraWide);

    // ESC -> IDLE; if it stays IDLE for 3s -> outline true
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

    const onGameClick = () => {
        window.location.href = "/games";
        setOutlineEnable(false);
    }

    // Enable outliners
    useEffect(() => {
        const checkHash = () => {
            if (window.location.hash === "#home" || window.location.hash === "#contact") {
                setOutlineEnable(true);
            } else {
                setOutlineEnable(false);
            }
        };

        // Initial check
        checkHash();

        // Listen for hash changes
        window.addEventListener("hashchange", checkHash);

        return () => {
            window.removeEventListener("hashchange", checkHash);
        };
    }, []);

    useEffect(() => {
        const hintSeen = window.localStorage.getItem(DESK_HINT_STORAGE_KEY);

        if (hintSeen) {
            return;
        }

        setShowDeskHint(true);
    }, []);

    return (
        <section className="min-h-screen w-full flex flex-col">
            {hoveredDeskSection && (
                <div
                    className="desk-hover-tooltip"
                    style={{
                        left: `${hoveredDeskSection.clientX + 18}px`,
                        top: `${hoveredDeskSection.clientY - 18}px`,
                    }}
                >
                    {hoveredDeskSection.label}
                </div>
            )}
            {showDeskHint && (
                <div className="language-hint-card language-hint-card-secondary fixed bottom-28 right-4 z-[65] w-[min(20rem,calc(100vw-2rem))] sm:bottom-10 sm:right-6">
                    <div className="language-hint-glow" />
                    <button
                        type="button"
                        onClick={() => {
                            setShowDeskHint(false);
                            window.localStorage.setItem(DESK_HINT_STORAGE_KEY, "true");
                        }}
                        aria-label={UI_TEXTS.hero.closeDeskHintAria}
                        className="language-hint-close"
                    >
                        ×
                    </button>
                    <div className="language-hint-badge">{UI_TEXTS.hero.deskHintBadge}</div>
                    <p className="language-hint-text pr-6">{UI_TEXTS.hero.deskHint}</p>
                </div>
            )}
            {/* IDLE */}
            {stateSection === STATES.HOME && (
                <div className="w-full mx-auto flex flex-col sm:mt-36 mt-32 c-space gap-3">
                    <p className={`sm:text-3xl text-2xl font-medium text-white text-center font-generalsans ${stateSection === STATES.HOME ? "fade-in-delay-2" : "fade-out"}`}>
                        {UI_TEXTS.hero.greeting} <span className="waving-hand">👋</span>
                    </p>
                    <p className={`hero_tag text-gray_gradient ${stateSection === STATES.HOME ? "fade-in-delay-3" : "fade-out"}`}>
                        {UI_TEXTS.hero.role}
                    </p>
                    <div className={`hero-actions ${stateSection === STATES.HOME ? "fade-in-delay-3" : "fade-out"}`}>
                        <a href={PROFILE_LINKS.cv} download className="hero-action hero-action_primary">
                            {UI_TEXTS.hero.downloadCv}
                        </a>
                        <a href={PROFILE_LINKS.linkedin} target="_blank" rel="noreferrer" className="hero-action">
                            {UI_TEXTS.hero.linkedin}
                        </a>
                        <a href={PROFILE_LINKS.github} target="_blank" rel="noreferrer" className="hero-action">
                            {UI_TEXTS.hero.github}
                        </a>
                    </div>
                </div>
            )}

            {!cameraIsMoving  && (
                <>
                    {/* WORK SECTION (LAPTOP) */}
                    {stateSection === STATES.WORK && (
                        <WorkSection />
                    )}

                    {/* ABOUT SECTION (MONITOR) */}
                    {stateSection === STATES.ABOUT && (
                        <AboutSection />
                    )}

                    {/* PROJECTS SECTION (KEYBOARD) */}
                    {stateSection === STATES.PROJECTS && (
                        <ProjectsSection selectedProjectIndex={selectedProjectIndex} setSelectedProjectIndex={setSelectedProjectIndex} />
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
                            rotation={sizes.deskRot}
                            stateSection={stateSection}
                            onLaptopClick={onLaptopClick}
                            onMonitorClick={onMonitorClick}
                            onKeyboardClick={onKeyboardClick}
                            onGameClick={onGameClick}
                            onHoverChange={setHoveredDeskSection}
                            outlineEnable={outlineEnable}
                            selectedProjectIndex={selectedProjectIndex}
                        />
                    </HeroCamera>

                    <ambientLight intensity={1.0} />
                    <directionalLight position={[-15, 7, 1]} intensity={3.0} />
                    </Suspense>
                </Canvas>
            </div>

            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#contact" className="w-fit">
                <Button name={UI_TEXTS.hero.cta} isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>
        </section>
    );
}
