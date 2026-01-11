import React from "react";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { easing } from "maath";

const HeroCamera = ({children, freeMovement, cameraState}) => {

    const groupRef = useRef();

    useFrame((state, delta) => {
        easing.damp3(state.camera.position, cameraState.pos, 0.5, delta);
        easing.damp3(state.camera.rotation, cameraState.rot, 0.8, delta);

        if(freeMovement && groupRef.current) {
            easing.dampE(groupRef.current.rotation, [-state.pointer.y/12, -state.pointer.x/20, 0], 0.25, delta);
        } 
    });

    return (
        <group ref={groupRef} scale={0.8}>{children}</group>
    )
}

export default HeroCamera;
