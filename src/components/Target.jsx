import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Target = (props) => {
  const targetRef = useRef();
  const { nodes, materials } = useGLTF("/models/tank.glb");

  useGSAP(
    () => {
      if (!targetRef.current) return;

      gsap.to(targetRef.current.position, {
        y: targetRef.current.position.y + 0.5,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    },
    { scope: targetRef }
  );

  return (
    <group ref={targetRef} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Material__26}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.Material__27}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Material__28}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.Material__25}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/models/tank.glb");

export default Target;
