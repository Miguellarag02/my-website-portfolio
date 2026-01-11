import React, { useRef } from 'react'
import { useGLTF, useAnimations, useVideoTexture } from '@react-three/drei'
import { useEffect } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const DemoComputer = (props) => {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/models/Laptop.glb')
    const { actions } = useAnimations(animations, group)
    const txt = useVideoTexture(props.texture ? props.texture : '/videos/demo.mp4');
  
    // Girar PC
    useGSAP(() => {
        gsap.from(group.current.rotation, {
            y: Math.PI / 2,
            duration: 1,
            ease: "power3.out"
        });
    }, [txt]);

    // Abrir PC
    useEffect(() => {
        const action = actions["AbrirPc"];
        if (!action) return;

        action.enabled = true;
        action.setLoop(THREE.LoopOnce, 1);
        action.clampWhenFinished = true;

        // Arranca desde el frame 1 (tiempo 0) y reproduce hasta el final
        action.reset().play();

        // Opcional: por si el GLB trae fade por defecto
        action.fadeIn(0.0);

        return () => action.stop();
    }, [actions]);

    // Rotar video en la pantalla del portátil
    useEffect(() => {
        if (txt) {
            txt.flipY = false;
        }
    }, [txt]);


    return (
        <group ref={group} {...props} dispose={null}>
        <group name="Scene">
            <group name="Pantalla" position={[-1.199, 0.096, 0]} rotation={[0, 0, -1.785]}>
            <mesh
                name="Cube001"
                castShadow
                receiveShadow
                geometry={nodes.Cube001.geometry}
                material={materials['Material.001']}
            />
            <mesh
                name="Cube001_1"
                castShadow
                receiveShadow
                geometry={nodes.Cube001_1.geometry}
                material={materials['Material.002']}
            />
            <mesh
                name="Cube001_2"
                castShadow
                receiveShadow
                geometry={nodes.Cube001_2.geometry}
                material={materials.Screen}
            />
            <mesh
                name="Cube001_3"
                castShadow
                receiveShadow
                geometry={nodes.Cube001_3.geometry}
                material={materials['Material.004']}
            >
                <meshBasicMaterial map={txt} />
            </mesh>
            <mesh
                name="Cube001_4"
                castShadow
                receiveShadow
                geometry={nodes.Cube001_4.geometry}
                material={materials['Material.005']}
            />
            <mesh
                name="Cube001_5"
                castShadow
                receiveShadow
                geometry={nodes.Cube001_5.geometry}
                material={materials['Material.006']}
            />
            <mesh
                name="Cube001_6"
                castShadow
                receiveShadow
                geometry={nodes.Cube001_6.geometry}
                material={materials['Material.007']}
            />
            <mesh
                name="Cube001_7"
                castShadow
                receiveShadow
                geometry={nodes.Cube001_7.geometry}
                material={materials['Material.013']}
            />
            </group>
            <group name="teclado">
            <mesh
                name="Cube003"
                castShadow
                receiveShadow
                geometry={nodes.Cube003.geometry}
                material={materials.Material}
            />
            <mesh
                name="Cube003_1"
                castShadow
                receiveShadow
                geometry={nodes.Cube003_1.geometry}
                material={materials['Material.009']}
            />
            <mesh
                name="Cube003_2"
                castShadow
                receiveShadow
                geometry={nodes.Cube003_2.geometry}
                material={materials['Material.010']}
            />
            <mesh
                name="Cube003_3"
                castShadow
                receiveShadow
                geometry={nodes.Cube003_3.geometry}
                material={materials['Material.008']}
            />
            <mesh
                name="Cube003_4"
                castShadow
                receiveShadow
                geometry={nodes.Cube003_4.geometry}
                material={materials['Material.011']}
            />
            <mesh
                name="Cube003_5"
                castShadow
                receiveShadow
                geometry={nodes.Cube003_5.geometry}
                material={materials['Material.012']}
            />
            </group>
        </group>
        </group>
    )
}

useGLTF.preload('/models/Laptop.glb')

export default DemoComputer;