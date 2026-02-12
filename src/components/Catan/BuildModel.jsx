import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { PLAYER_COLORS } from '../../constants/CatanStates.js'


export function BuildModel({color, model_id, ...props}) {
  const { nodes, materials } = useGLTF('/models/build_models.glb')
  return (
    <group {...props} dispose={null}>
      { model_id == 3 &&
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.city.geometry}
          position={[0, 0.328, 0]}
          rotation={[-1.575, 0, 0]}
          scale={0.03}
        >
          <meshStandardMaterial 
                        color={PLAYER_COLORS[color]}
                        roughness={0.6}
                        metalness={0.1}
                      />
        </mesh>
      }
      { model_id == 1 &&
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.path.geometry}
          material={nodes.path.material}
          position={[-0.032, 0.403, -0.027]}
          rotation={[0, -1.56, -Math.PI]}
          scale={[-0.09, -0.05, -0.627]}
        >
          <meshStandardMaterial 
                        color={PLAYER_COLORS[color]}
                        roughness={0.6}
                        metalness={0.1}
                      />
        </mesh>
      }
      { model_id == 2 &&
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.town.geometry}
          position={[-0.066, 0.544, -0.068]}
          rotation={[0, -0.981, 0]}
          scale={[0.241, 0.226, 0.241]}
        >
          <meshStandardMaterial 
                        color={PLAYER_COLORS[color]}
                        roughness={0.6}
                        metalness={0.1}
                      />
        </mesh>
      }
      <group
        position={[-0.026, 0.01, -0.006]}
        rotation={[0.003, -1.048, 0]}
        scale={[0.043, 0.034, 0.043]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ground_1.geometry}
          material={materials['Material.049']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/build_models.glb')
