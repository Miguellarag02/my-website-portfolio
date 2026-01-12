import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { calculateCameraPositions, calculateSizes } from "../../constants/index.js";
import { STATES } from "../../constants/HeroRoutes.js"
import CanvasLoader from "../CanvasLoader.jsx";
import HeroCamera from "./Camera.jsx";
import MyDesktop from "./MyDesktop.jsx";

export default function HeroScene({
  stateSection,
  isMobile,
  responsiveFlags,
  outlineEnable,
  onLaptopClick,
  onMonitorClick,
}) {
  const { isSmall, isTablet, isUltraWide } = responsiveFlags;
  const sizes = calculateSizes(isSmall, isMobile, isTablet, isUltraWide);
  const cameraState = calculateCameraPositions(stateSection, isSmall, isMobile, isTablet, isUltraWide);

  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas className="w-full h-full flex-grow">
        <Suspense fallback={<CanvasLoader />}>
          <PerspectiveCamera makeDefault position={[0, 0, 20]} />
          <HeroCamera freeMovement={stateSection === STATES.IDLE ? !isMobile : false} cameraState={cameraState}>
            <MyDesktop
              scale={sizes.deskScale}
              position={sizes.deskPos}
              rotation={[0.39, 4.34, 0.0]}
              onLaptopClick={onLaptopClick}
              onMonitorClick={onMonitorClick}
              outlineEnable={outlineEnable}
            />
          </HeroCamera>

          <ambientLight intensity={1.0} />
          <directionalLight position={[-15, 7, 1]} intensity={3.0} />
        </Suspense>
      </Canvas>
    </div>
  );
}
