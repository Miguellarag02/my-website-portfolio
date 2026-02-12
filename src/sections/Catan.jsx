import { useState, Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../components/CanvasLoader.jsx";
import { PerspectiveCamera} from "@react-three/drei";
import { useResponsiveFlags } from "../constants/index.js";
import CatanCamera from "../components/Catan/Camera.jsx"
import CatanMap from "../components/Catan/Map.jsx";
import PlayersInfo from "../components/Catan/PlayersInfo.jsx";
import UserInfo from "../components/Catan/UserInfo.jsx"
import { CAMERA_STATES, calculateCatanSizes, calculateCatanCameraPositions } from "../constants/CatanStates.js";
import { useAuth } from "../context/AuthContext.jsx"

const Catan = () => {
    const { isLoggedIn, username, userImage } = useAuth()

    // Camera controls
    const [openPlayerInfo, setOpenPlayerInfo] = useState(false);
    const [openBuildInfo, setOpenBuildInfo] = useState(false);
    const [frontCamera, setFrontCamera] = useState(false);
    const [cameraState, setCameraState] = useState(CAMERA_STATES.NORMAL);

    // Sizing
    const { isSmall, isMobile, isTablet, isUltraWide } = useResponsiveFlags();
    const sizes = calculateCatanSizes(isSmall, isMobile, isTablet, isUltraWide);

    // Change camera position
    useEffect(() => {
        if (openPlayerInfo) {
            setCameraState(
            frontCamera
                ? CAMERA_STATES.MOVED_FRONT
                : CAMERA_STATES.MOVED
            );
        } else {
            setCameraState(
            frontCamera
                ? CAMERA_STATES.FRONT
                : CAMERA_STATES.NORMAL
            );
        }
    }, [openPlayerInfo, frontCamera]);


    return (
        <section className="min-h-screen w-full flex flex-col">
            <div className="w-full h-full absolute inset-0">
                <div className="flex flex-col h-1/3 w-1/3">
                    <a href="/games" className="relative w-fit top-2 left-2 z-20 px-4 py-2 rounded-full border border-white/30 bg-black/50 text-white text-sm font-semibold backdrop-blur-sm hover:border-white/70 hover:bg-black/70 transition" >
                        Exit game
                    </a>
                    <button
                        type="button"
                        onClick={() => setFrontCamera((prev) => !prev)}
                        className="relative mt-4 ml-4 w-24 h-fit z-50 rounded-xl border border-black/30 bg-white/10 hover:scale-110 hover:bg-black/10 transition-all duration-300 ease-in-out"
                    >
                        <img
                            src={frontCamera ? "/assets/camera_perspective_icon.png" : "/assets/camera_front_icon.png"}
                            alt="Toggle camera view"
                        />
                    </button>
                </div>
                <div className="absolute inset-0 w-full h-full">
                    <Canvas className="w-full h-full flex-grow">
                        <Suspense fallback={<CanvasLoader />}>
                            <PerspectiveCamera makeDefault position={[8, 11, 12]} />
                            <CatanCamera cameraState={cameraState} cameraPos={calculateCatanCameraPositions(cameraState, isSmall, isMobile, isTablet, isUltraWide).pos} cameraTarget={sizes.cameraTarget}>
                                <CatanMap
                                    scale={sizes.mapScale}
                                    position={sizes.mapPos}
                                    rotation={sizes.mapRot}
                                />
                            </CatanCamera>
                            <ambientLight intensity={1.0} />
                            <directionalLight position={[4000, 1000, 4000]} intensity={2} />
                        </Suspense>
                    </Canvas>
                    <PlayersInfo open={openPlayerInfo} setOpen={setOpenPlayerInfo}/>
                    <UserInfo open={openBuildInfo} setOpen={setOpenBuildInfo}/>
                </div>
            </div>
        </section>
    );
}

export default Catan;
