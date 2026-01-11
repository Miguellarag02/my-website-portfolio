import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense, useState, useEffect } from "react"
import { Leva, useControls } from "leva"
import { useMediaQuery } from "react-responsive"
import { STATES, calculateSizes, calculateCameraPositions } from "../constants/index.js"
import MyDesktop from "../components/MyDesktop.jsx"
import CanvasLoader from "../components/CanvasLoader.jsx"
import HeroCamera from "../components/HeroCamera.jsx"
import Button from "../components/Button.jsx"

const Hero = () => {
    // const controls = useControls('MyDesktop', {
    //     posX: {
    //         value: 0.,
    //         min: -5.0,
    //         max: 5.0
    //     },
    //     posY: {
    //         value: 0.,
    //         min: -15.0,
    //         max: 15.0
    //     },
    //     posZ: {
    //         value: 0.0,
    //         min: -5.0,
    //         max: 5.0
    //     },
    //     scale: {
    //         value: 1.00,
    //         min: 0.01,
    //         max: 5.0,
    //         step: 0.001
    //     },
    //     rotX: {
    //         value: Math.PI/8,
    //         min: 0.0,
    //         max: 2*Math.PI
    //     },
    //     rotY: {
    //         value: Math.PI,
    //         min: 0.0,
    //         max: 2*Math.PI
    //     },
    //     rotZ: {
    //         value: 0.0,
    //         min: 0.0,
    //         max: 2*Math.PI
    //     }
    // })

    // Const for resizing
    const isSmall = useMediaQuery({maxWidth: 480});
    const isMobile = useMediaQuery({minWidth: 481, maxWidth: 768});
    const isTablet = useMediaQuery({minWidth: 769, maxWidth: 1024});
    const isUltraWide = useMediaQuery({minWidth: 1920});
    const sizes = calculateSizes(isSmall, isMobile, isTablet, isUltraWide);

    // Const for state machine for sections
    const [stateSection, setStateSection] = useState(STATES.IDLE)
    const [outlineEnable, setOutlineEnable] = useState(true)
    const cameraState = calculateCameraPositions(stateSection, isSmall, isMobile, isTablet, isUltraWide)


    // Click Events
    const onLaptopClick = () => {
        setStateSection(STATES.LAPTOP);
        setOutlineEnable(false)
    }
    const onMonitorClick = () => {
        setStateSection(STATES.MONITOR);
        setOutlineEnable(false)
    }

    // Keyboard Events
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setStateSection(STATES.IDLE);
                setTimeout(() => setOutlineEnable(true), 3000)
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [])

    return (
        <section className="min-h-screen w-full flex flex-col">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-32 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans"> Hi I am Miguel Angel 
                    <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient"> Software Engineer</p>
            </div>
            <div className="w-full h-full absolute inset-0">
                {/* <Leva /> */}
                <Canvas className="w-full h-full flex-grow">
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 20 ]} />
                        <HeroCamera freeMovement={ stateSection == STATES.IDLE ? !isMobile : false} cameraState={cameraState}>
                            <MyDesktop 
                                scale={sizes.deskScale} 
                                position={sizes.deskPos} 
                                rotation={[0.39, 4.34, 0.00]}
                                onLaptopClick={onLaptopClick}
                                onMonitorClick={onMonitorClick}
                                outlineEnable={outlineEnable}
                                // scale={[controls.scale, controls.scale, controls.scale]}
                                // position={[controls.posX, controls.posY, controls.posZ]}
                                // rotation={[controls.rotX, controls.rotY, controls.rotZ]}
                            />
                        </HeroCamera>
                        <ambientLight intensity={1.0} />
                        <directionalLight position={[-15, 7, 1]} intensity={3.0} />
                    </Suspense>
                </Canvas>
            </div>

            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit">
                    <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
                </a>
            </div>
        </section>  // Para ver bordes añadir border-2 border-blue-500
    )
}

export default Hero