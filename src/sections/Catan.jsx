import { useState, Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../components/CanvasLoader.jsx";
import { PerspectiveCamera } from "@react-three/drei";
import { useResponsiveFlags } from "../constants/index.js";
import CatanCamera from "../components/Catan/Camera.jsx"
import CatanMap from "../components/Catan/Map.jsx";
import { calculateSizes } from "../constants/index.js";
import { useAuth } from "../context/AuthContext.jsx"

export default function Hero() {
    const [cameraIsMoving, setCameraIsMoving] = useState(false)
    const { isLoggedIn, username, userImage } = useAuth()

    // Sizing
    const { isSmall, isMobile, isTablet, isUltraWide } = useResponsiveFlags();
    const sizes = calculateSizes(isSmall, isMobile, isTablet, isUltraWide);
    const cameraState ={
        pos: [1, 6, 20],
        rot: [-0.5, 0, 0]
    };

    return (
        <section className="min-h-screen w-full flex flex-col">
            <div className="w-full h-full absolute inset-0">
                <a href="/games" className="absolute top-4 left-4 z-20 px-4 py-2 rounded-full border border-white/30 bg-black/50 text-white text-sm font-semibold backdrop-blur-sm hover:border-white/70 hover:bg-black/70 transition" >
                    Exit ({username ? username : "Guest"})
                </a>
                <Canvas className="w-full h-full flex-grow">
                    <Suspense fallback={<CanvasLoader />}>
                    <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                    <CatanCamera freeMovement={true} cameraState={cameraState} setCameraIsMoving={setCameraIsMoving}>
                        <CatanMap
                            scale={sizes.catanMapScale}
                            position={sizes.catanMapPos}
                            rotation={sizes.catanMapRot}
                        />
                    </CatanCamera>
                    <ambientLight intensity={1.0} />
                    <directionalLight position={[-9, 7, 1]} intensity={3.0} />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    );
}
