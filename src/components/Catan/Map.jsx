import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const CatanMap = (props) => {
  const { nodes, materials } = useGLTF('/models/catan_tablero.glb')
  return (
    <group {...props} dispose={null}>
      <group
        name="hexagono_s"
        position={[0.001, 0.404, -0.021]}
        rotation={[-Math.PI, -1.048, 0]}
        scale={[0.043, 0.034, 0.043]}>
        <mesh
          name="hexagono001"
          castShadow
          receiveShadow
          geometry={nodes.hexagono001.geometry}
          material={materials.Material}
        />
        <mesh
          name="hexagono001_1"
          castShadow
          receiveShadow
          geometry={nodes.hexagono001_1.geometry}
          material={materials.Terreno}
        />
      </group>
      <group
        name="hexagono_n"
        position={[-2.623, 0.404, -1.534]}
        rotation={[-Math.PI, -1.048, 0]}
        scale={[0.043, 0.034, 0.043]}>
        <mesh
          name="hexagono003"
          castShadow
          receiveShadow
          geometry={nodes.hexagono003.geometry}
          material={materials['Material.007']}
        />
        <mesh
          name="hexagono003_1"
          castShadow
          receiveShadow
          geometry={nodes.hexagono003_1.geometry}
          material={materials['Terreno.001']}
        />
      </group>
      <group
        name="hexagono_o"
        position={[-0.004, 0.404, -3.055]}
        rotation={[-Math.PI, -1.048, 0]}
        scale={[0.043, 0.034, 0.043]}>
        <mesh
          name="hexagono005"
          castShadow
          receiveShadow
          geometry={nodes.hexagono005.geometry}
          material={materials['Material.006']}
        />
        <mesh
          name="hexagono005_1"
          castShadow
          receiveShadow
          geometry={nodes.hexagono005_1.geometry}
          material={materials['Terreno.002']}
        />
      </group>
      <group
        name="hexagono_p"
        position={[2.628, 0.404, -1.539]}
        rotation={[-Math.PI, -1.048, 0]}
        scale={[0.043, 0.034, 0.043]}>
        <mesh
          name="hexagono008"
          castShadow
          receiveShadow
          geometry={nodes.hexagono008.geometry}
          material={materials['Material.007']}
        />
        <mesh
          name="hexagono008_1"
          castShadow
          receiveShadow
          geometry={nodes.hexagono008_1.geometry}
          material={materials['Terreno.003']}
        />
      </group>
      <group
        name="hexagono_q"
        position={[2.642, 0.404, 1.499]}
        rotation={[-Math.PI, -1.048, 0]}
        scale={[0.043, 0.034, 0.043]}>
        <mesh
          name="hexagono009"
          castShadow
          receiveShadow
          geometry={nodes.hexagono009.geometry}
          material={materials['Material.008']}
        />
        <mesh
          name="hexagono009_1"
          castShadow
          receiveShadow
          geometry={nodes.hexagono009_1.geometry}
          material={materials['Terreno.004']}
        />
      </group>
      <group
        name="hexagono_r"
        position={[0.003, 0.404, 3.019]}
        rotation={[-Math.PI, -1.048, 0]}
        scale={[0.043, 0.034, 0.043]}>
        <mesh
          name="hexagono010"
          castShadow
          receiveShadow
          geometry={nodes.hexagono010.geometry}
          material={materials['Material.009']}
        />
        <mesh
          name="hexagono010_1"
          castShadow
          receiveShadow
          geometry={nodes.hexagono010_1.geometry}
          material={materials['Terreno.005']}
        />
      </group>
      <group
        name="hexagono_m"
        position={[-2.63, 0.404, 1.503]}
        rotation={[-Math.PI, -1.048, 0]}
        scale={[0.043, 0.034, 0.043]}>
        <mesh
          name="hexagono011"
          castShadow
          receiveShadow
          geometry={nodes.hexagono011.geometry}
          material={materials['Material.010']}
        />
        <mesh
          name="hexagono011_1"
          castShadow
          receiveShadow
          geometry={nodes.hexagono011_1.geometry}
          material={materials['Terreno.006']}
        />
      </group>
      <group
        name="hexagono_f"
        position={[2.624, 0.404, -4.575]}
        rotation={[-Math.PI, -1.048, 0]}
        scale={[0.043, 0.034, 0.043]}>
        <mesh
          name="hexagono013"
          castShadow
          receiveShadow
          geometry={nodes.hexagono013.geometry}
          material={materials['Material.012']}
        />
        <mesh
          name="hexagono013_1"
          castShadow
          receiveShadow
          geometry={nodes.hexagono013_1.geometry}
          material={materials['Terreno.008']}
        />
      </group>
      <group
        name="hexagono_j"
        position={[2.648, 0.404, 4.543]}
        rotation={[-Math.PI, -1.048, 0]}
        scale={[0.043, 0.034, 0.043]}>
        <mesh
          name="hexagono014"
          castShadow
          receiveShadow
          geometry={nodes.hexagono014.geometry}
          material={materials['Material.013']}
        />
        <mesh
          name="hexagono014_1"
          castShadow
          receiveShadow
          geometry={nodes.hexagono014_1.geometry}
          material={materials['Terreno.009']}
        />
      </group>
      <group
        name="hexagono_h"
        position={[5.278, 0.404, -0.023]}
        rotation={[-Math.PI, -1.048, 0]}
        scale={[0.043, 0.034, 0.043]}>
        <mesh
          name="hexagono015"
          castShadow
          receiveShadow
          geometry={nodes.hexagono015.geometry}
          material={materials['Material.014']}
        />
        <mesh
          name="hexagono015_1"
          castShadow
          receiveShadow
          geometry={nodes.hexagono015_1.geometry}
          material={materials['Terreno.010']}
        />
      </group>
      <group
        name="hexagono_i"
        position={[5.29, 0.404, 3.025]}
        rotation={[-Math.PI, -1.048, 0]}
        scale={[0.043, 0.034, 0.043]}>
        <mesh
          name="hexagono016"
          castShadow
          receiveShadow
          geometry={nodes.hexagono016.geometry}
          material={materials['Material.015']}
        />
        <mesh
          name="hexagono016_1"
          castShadow
          receiveShadow
          geometry={nodes.hexagono016_1.geometry}
          material={materials['Terreno.011']}
        />
      </group>
      <group
        name="hexagono_g"
        position={[5.286, 0.404, -3.069]}
        rotation={[-Math.PI, -1.048, 0]}
        scale={[0.043, 0.034, 0.043]}>
        <mesh
          name="hexagono017"
          castShadow
          receiveShadow
          geometry={nodes.hexagono017.geometry}
          material={materials['Material.016']}
        />
        <mesh
          name="hexagono017_1"
          castShadow
          receiveShadow
          geometry={nodes.hexagono017_1.geometry}
          material={materials['Terreno.012']}
        />
      </group>
      <group
        name="hexagono_e"
        position={[-0.005, 0.404, -6.09]}
        rotation={[-Math.PI, -1.048, 0]}
        scale={[0.043, 0.034, 0.043]}>
        <mesh
          name="hexagono018"
          castShadow
          receiveShadow
          geometry={nodes.hexagono018.geometry}
          material={materials['Material.017']}
        />
        <mesh
          name="hexagono018_1"
          castShadow
          receiveShadow
          geometry={nodes.hexagono018_1.geometry}
          material={materials['Terreno.013']}
        />
      </group>
      <group
        name="hexagono_k"
        position={[0.017, 0.404, 6.056]}
        rotation={[-Math.PI, -1.048, 0]}
        scale={[0.043, 0.034, 0.043]}>
        <mesh
          name="hexagono019"
          castShadow
          receiveShadow
          geometry={nodes.hexagono019.geometry}
          material={materials['Material.018']}
        />
        <mesh
          name="hexagono019_1"
          castShadow
          receiveShadow
          geometry={nodes.hexagono019_1.geometry}
          material={materials['Terreno.014']}
        />
      </group>
      <group
        name="hexagono_l"
        position={[-2.631, 0.404, 4.547]}
        rotation={[-Math.PI, -1.048, 0]}
        scale={[0.043, 0.034, 0.043]}>
        <mesh
          name="hexagono020"
          castShadow
          receiveShadow
          geometry={nodes.hexagono020.geometry}
          material={materials['Material.019']}
        />
        <mesh
          name="hexagono020_1"
          castShadow
          receiveShadow
          geometry={nodes.hexagono020_1.geometry}
          material={materials['Terreno.015']}
        />
      </group>
      <group
        name="hexagono_a"
        position={[-5.26, 0.404, 3.032]}
        rotation={[-Math.PI, -1.048, 0]}
        scale={[0.043, 0.034, 0.043]}>
        <mesh
          name="hexagono021"
          castShadow
          receiveShadow
          geometry={nodes.hexagono021.geometry}
          material={materials['Material.020']}
        />
        <mesh
          name="hexagono021_1"
          castShadow
          receiveShadow
          geometry={nodes.hexagono021_1.geometry}
          material={materials['Terreno.016']}
        />
      </group>
      <group
        name="hexagono_b"
        position={[-5.268, 0.404, -0.017]}
        rotation={[-Math.PI, -1.048, 0]}
        scale={[0.043, 0.034, 0.043]}>
        <mesh
          name="hexagono022"
          castShadow
          receiveShadow
          geometry={nodes.hexagono022.geometry}
          material={materials['Material.021']}
        />
        <mesh
          name="hexagono022_1"
          castShadow
          receiveShadow
          geometry={nodes.hexagono022_1.geometry}
          material={materials['Terreno.017']}
        />
      </group>
      <group
        name="hexagono_d"
        position={[-2.636, 0.404, -4.586]}
        rotation={[-Math.PI, -1.048, 0]}
        scale={[0.043, 0.034, 0.043]}>
        <mesh
          name="hexagono023"
          castShadow
          receiveShadow
          geometry={nodes.hexagono023.geometry}
          material={materials['Material.022']}
        />
        <mesh
          name="hexagono023_1"
          castShadow
          receiveShadow
          geometry={nodes.hexagono023_1.geometry}
          material={materials['Terreno.018']}
        />
      </group>
      <group
        name="hexagono_c"
        position={[-5.249, 0.404, -3.046]}
        rotation={[-Math.PI, -1.048, 0]}
        scale={[0.043, 0.034, 0.043]}>
        <mesh
          name="hexagono024"
          castShadow
          receiveShadow
          geometry={nodes.hexagono024.geometry}
          material={materials['Material.023']}
        />
        <mesh
          name="hexagono024_1"
          castShadow
          receiveShadow
          geometry={nodes.hexagono024_1.geometry}
          material={materials['Terreno.019']}
        />
      </group>
      <group
        name="puerto_4"
        position={[5.321, -0.273, 3.026]}
        rotation={[0, 1.048, 0]}
        scale={[0.044, 0.034, 0.044]}>
        <mesh
          name="puerto003"
          castShadow
          receiveShadow
          geometry={nodes.puerto003.geometry}
          material={materials['Material.027']}
        />
        <mesh
          name="puerto003_1"
          castShadow
          receiveShadow
          geometry={nodes.puerto003_1.geometry}
          material={materials['Material.024']}
        />
        <mesh
          name="puerto003_2"
          castShadow
          receiveShadow
          geometry={nodes.puerto003_2.geometry}
          material={materials['Material.029']}
        />
        <mesh
          name="puerto003_3"
          castShadow
          receiveShadow
          geometry={nodes.puerto003_3.geometry}
          material={materials['Material.030']}
        />
        <mesh
          name="puerto003_4"
          castShadow
          receiveShadow
          geometry={nodes.puerto003_4.geometry}
          material={materials['Material.047']}
        />
      </group>
      <group
        name="puerto_5"
        position={[0.024, -0.273, 6.116]}
        rotation={[0, 0.003, 0]}
        scale={[0.044, 0.034, 0.044]}>
        <mesh
          name="puerto003"
          castShadow
          receiveShadow
          geometry={nodes.puerto003.geometry}
          material={materials['Material.027']}
        />
        <mesh
          name="puerto003_1"
          castShadow
          receiveShadow
          geometry={nodes.puerto003_1.geometry}
          material={materials['Material.028']}
        />
        <mesh
          name="puerto003_2"
          castShadow
          receiveShadow
          geometry={nodes.puerto003_2.geometry}
          material={materials['Material.029']}
        />
        <mesh
          name="puerto003_3"
          castShadow
          receiveShadow
          geometry={nodes.puerto003_3.geometry}
          material={materials['Material.030']}
        />
        <mesh
          name="puerto003_4"
          castShadow
          receiveShadow
          geometry={nodes.puerto003_4.geometry}
          material={materials['Material.047']}
        />
      </group>
      <group
        name="puerto_6"
        position={[-5.307, -0.273, 3.07]}
        rotation={[0, -1.042, 0]}
        scale={[0.044, 0.034, 0.044]}>
        <mesh
          name="puerto004"
          castShadow
          receiveShadow
          geometry={nodes.puerto004.geometry}
          material={materials['Material.031']}
        />
        <mesh
          name="puerto004_1"
          castShadow
          receiveShadow
          geometry={nodes.puerto004_1.geometry}
          material={materials['Material.032']}
        />
        <mesh
          name="puerto004_2"
          castShadow
          receiveShadow
          geometry={nodes.puerto004_2.geometry}
          material={materials['Material.033']}
        />
        <mesh
          name="puerto004_3"
          castShadow
          receiveShadow
          geometry={nodes.puerto004_3.geometry}
          material={materials['Material.034']}
        />
        <mesh
          name="puerto004_4"
          castShadow
          receiveShadow
          geometry={nodes.puerto004_4.geometry}
          material={materials['Material.048']}
        />
      </group>
      <group
        name="puerto_1"
        position={[-5.324, -0.273, -3.071]}
        rotation={[Math.PI, -1.052, Math.PI]}
        scale={[0.044, 0.034, 0.044]}>
        <mesh
          name="puerto005"
          castShadow
          receiveShadow
          geometry={nodes.puerto005.geometry}
          material={materials['Material.035']}
        />
        <mesh
          name="puerto005_1"
          castShadow
          receiveShadow
          geometry={nodes.puerto005_1.geometry}
          material={materials['Material.036']}
        />
        <mesh
          name="puerto005_2"
          castShadow
          receiveShadow
          geometry={nodes.puerto005_2.geometry}
          material={materials['Material.037']}
        />
        <mesh
          name="puerto005_3"
          castShadow
          receiveShadow
          geometry={nodes.puerto005_3.geometry}
          material={materials['Material.038']}
        />
        <mesh
          name="puerto005_4"
          castShadow
          receiveShadow
          geometry={nodes.puerto005_4.geometry}
          material={materials['Material.001']}
        />
      </group>
      <group
        name="puerto_3"
        position={[5.292, -0.273, -3.111]}
        rotation={[-Math.PI, 1.046, -Math.PI]}
        scale={[0.044, 0.034, 0.044]}>
        <mesh
          name="puerto006"
          castShadow
          receiveShadow
          geometry={nodes.puerto006.geometry}
          material={materials['Material.039']}
        />
        <mesh
          name="puerto006_1"
          castShadow
          receiveShadow
          geometry={nodes.puerto006_1.geometry}
          material={materials['Material.040']}
        />
        <mesh
          name="puerto006_2"
          castShadow
          receiveShadow
          geometry={nodes.puerto006_2.geometry}
          material={materials['Material.041']}
        />
        <mesh
          name="puerto006_3"
          castShadow
          receiveShadow
          geometry={nodes.puerto006_3.geometry}
          material={materials['Material.042']}
        />
        <mesh
          name="puerto006_4"
          castShadow
          receiveShadow
          geometry={nodes.puerto006_4.geometry}
          material={materials['Material.003']}
        />
      </group>
      <group
        name="puerto_2"
        position={[-0.017, -0.273, -6.167]}
        rotation={[Math.PI, -0.004, Math.PI]}
        scale={[0.044, 0.034, 0.044]}>
        <mesh
          name="puerto007"
          castShadow
          receiveShadow
          geometry={nodes.puerto007.geometry}
          material={materials['Material.043']}
        />
        <mesh
          name="puerto007_1"
          castShadow
          receiveShadow
          geometry={nodes.puerto007_1.geometry}
          material={materials['Material.044']}
        />
        <mesh
          name="puerto007_2"
          castShadow
          receiveShadow
          geometry={nodes.puerto007_2.geometry}
          material={materials['Material.045']}
        />
        <mesh
          name="puerto007_3"
          castShadow
          receiveShadow
          geometry={nodes.puerto007_3.geometry}
          material={materials['Material.046']}
        />
        <mesh
          name="puerto007_4"
          castShadow
          receiveShadow
          geometry={nodes.puerto007_4.geometry}
          material={materials['Material.002']}
        />
      </group>
      <mesh
        name="letra_c"
        castShadow
        receiveShadow
        geometry={nodes.letra_c.geometry}
        material={materials['Material.061']}
        position={[-5.288, 0.515, -2.919]}
        rotation={[-Math.PI, 1.554, -Math.PI]}
        scale={[0.507, 0.107, 0.507]}>
        <group name="Cilindro003" position={[0.341, -0.355, -0.294]} scale={[0.905, 0.311, 0.905]}>
          <mesh
            name="Cilindro003_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro003_1.geometry}
            material={materials['Material.059']}
          />
          <mesh
            name="Cilindro003_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro003_2.geometry}
            material={materials['Material.060']}
          />
        </group>
      </mesh>
      <mesh
        name="letra_b"
        castShadow
        receiveShadow
        geometry={nodes.letra_b.geometry}
        material={materials['Material.062']}
        position={[-5.367, 0.515, 0.058]}
        rotation={[0, 1.545, 0]}
        scale={[0.507, 0.107, 0.507]}>
        <group name="Cilindro004" position={[0.341, -0.355, -0.294]} scale={[0.905, 0.311, 0.905]}>
          <mesh
            name="Cilindro004_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro004_1.geometry}
            material={materials['Material.064']}
          />
          <mesh
            name="Cilindro004_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro004_2.geometry}
            material={materials['Material.063']}
          />
        </group>
      </mesh>
      <mesh
        name="letra_a"
        castShadow
        receiveShadow
        geometry={nodes.letra_a.geometry}
        material={materials['Material.067']}
        position={[-5.208, 0.515, 2.973]}
        rotation={[0, 1.554, 0]}
        scale={[0.507, 0.107, 0.507]}>
        <group name="Cilindro005" position={[0.341, -0.355, -0.294]} scale={[0.905, 0.311, 0.905]}>
          <mesh
            name="Cilindro005_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro005_1.geometry}
            material={materials['Material.065']}
          />
          <mesh
            name="Cilindro005_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro005_2.geometry}
            material={materials['Material.066']}
          />
        </group>
      </mesh>
      <mesh
        name="letra_d"
        castShadow
        receiveShadow
        geometry={nodes.letra_d.geometry}
        material={materials['Material.070']}
        position={[-2.534, 0.515, -4.549]}
        rotation={[-Math.PI, 1.548, -Math.PI]}
        scale={[0.507, 0.107, 0.507]}>
        <group name="Cilindro006" position={[0.341, -0.355, -0.294]} scale={[0.905, 0.311, 0.905]}>
          <mesh
            name="Cilindro006_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro006_1.geometry}
            material={materials['Material.068']}
          />
          <mesh
            name="Cilindro006_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro006_2.geometry}
            material={materials['Material.069']}
          />
        </group>
      </mesh>
      <mesh
        name="letra_e"
        castShadow
        receiveShadow
        geometry={nodes.letra_e.geometry}
        material={materials['Material.073']}
        position={[0.079, 0.515, -5.983]}
        rotation={[-Math.PI, 1.552, -Math.PI]}
        scale={[0.507, 0.107, 0.507]}>
        <group name="Cilindro007" position={[0.341, -0.355, -0.294]} scale={[0.905, 0.311, 0.905]}>
          <mesh
            name="Cilindro007_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro007_1.geometry}
            material={materials['Material.071']}
          />
          <mesh
            name="Cilindro007_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro007_2.geometry}
            material={materials['Material.072']}
          />
        </group>
      </mesh>
      <mesh
        name="letra_f"
        castShadow
        receiveShadow
        geometry={nodes.letra_f.geometry}
        material={materials['Material.076']}
        position={[2.715, 0.515, -4.418]}
        rotation={[0, 1.569, 0]}
        scale={[0.507, 0.107, 0.507]}>
        <group name="Cilindro008" position={[0.341, -0.355, -0.294]} scale={[0.905, 0.311, 0.905]}>
          <mesh
            name="Cilindro008_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro008_1.geometry}
            material={materials['Material.074']}
          />
          <mesh
            name="Cilindro008_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro008_2.geometry}
            material={materials['Material.075']}
          />
        </group>
      </mesh>
      <mesh
        name="letra_g"
        castShadow
        receiveShadow
        geometry={nodes.letra_g.geometry}
        material={materials['Material.079']}
        position={[5.278, 0.515, -3.004]}
        rotation={[-Math.PI, 1.57, -Math.PI]}
        scale={[0.507, 0.107, 0.507]}>
        <group name="Cilindro001" position={[0.341, -0.355, -0.294]} scale={[0.905, 0.311, 0.905]}>
          <mesh
            name="Cilindro009_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro009_1.geometry}
            material={materials['Material.077']}
          />
          <mesh
            name="Cilindro009_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro009_2.geometry}
            material={materials['Material.078']}
          />
        </group>
      </mesh>
      <mesh
        name="letra_h"
        castShadow
        receiveShadow
        geometry={nodes.letra_h.geometry}
        material={materials['Material.082']}
        position={[5.307, 0.515, 0.138]}
        rotation={[-Math.PI, 1.552, -Math.PI]}
        scale={[0.507, 0.107, 0.507]}>
        <group name="Cilindro002" position={[0.341, -0.355, -0.294]} scale={[0.905, 0.311, 0.905]}>
          <mesh
            name="Cilindro010_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro010_1.geometry}
            material={materials['Material.080']}
          />
          <mesh
            name="Cilindro010_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro010_2.geometry}
            material={materials['Material.081']}
          />
        </group>
      </mesh>
      <mesh
        name="letra_i"
        castShadow
        receiveShadow
        geometry={nodes.letra_i.geometry}
        material={materials['Material.085']}
        position={[5.33, 0.515, 3.197]}
        rotation={[-Math.PI, 1.566, -Math.PI]}
        scale={[0.507, 0.107, 0.507]}>
        <group name="Cilindro009" position={[0.341, -0.355, -0.294]} scale={[0.905, 0.311, 0.905]}>
          <mesh
            name="Cilindro011_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro011_1.geometry}
            material={materials['Material.083']}
          />
          <mesh
            name="Cilindro011_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro011_2.geometry}
            material={materials['Material.084']}
          />
        </group>
      </mesh>
      <mesh
        name="letra_j"
        castShadow
        receiveShadow
        geometry={nodes.letra_j.geometry}
        material={materials['Material.088']}
        position={[2.646, 0.515, 4.802]}
        rotation={[-Math.PI, 1.556, -Math.PI]}
        scale={[0.507, 0.107, 0.507]}>
        <group
          name="Cilindro010"
          position={[0.341, -0.355, -0.294]}
          rotation={[0, 0.951, 0]}
          scale={[0.905, 0.311, 0.905]}>
          <mesh
            name="Cilindro012_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro012_1.geometry}
            material={materials['Material.086']}
          />
          <mesh
            name="Cilindro012_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro012_2.geometry}
            material={materials['Material.087']}
          />
        </group>
      </mesh>
      <mesh
        name="letra_k"
        castShadow
        receiveShadow
        geometry={nodes.letra_k.geometry}
        material={materials['Material.091']}
        position={[0.064, 0.515, 6.322]}
        rotation={[-Math.PI, 1.535, -Math.PI]}
        scale={[0.507, 0.107, 0.507]}>
        <group name="Cilindro011" position={[0.341, -0.355, -0.294]} scale={[0.905, 0.311, 0.905]}>
          <mesh
            name="Cilindro013_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro013_1.geometry}
            material={materials['Material.089']}
          />
          <mesh
            name="Cilindro013_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro013_2.geometry}
            material={materials['Material.090']}
          />
        </group>
      </mesh>
      <mesh
        name="letra_l"
        castShadow
        receiveShadow
        geometry={nodes.letra_l.geometry}
        material={materials['Material.094']}
        position={[-2.598, 0.515, 4.788]}
        rotation={[-Math.PI, 1.461, -Math.PI]}
        scale={[0.507, 0.107, 0.507]}>
        <group name="Cilindro012" position={[0.341, -0.355, -0.294]} scale={[0.905, 0.311, 0.905]}>
          <mesh
            name="Cilindro014_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro014_1.geometry}
            material={materials['Material.092']}
          />
          <mesh
            name="Cilindro014_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro014_2.geometry}
            material={materials['Material.093']}
          />
        </group>
      </mesh>
      <mesh
        name="letra_m"
        castShadow
        receiveShadow
        geometry={nodes.letra_m.geometry}
        material={materials['Material.097']}
        position={[-2.6, 0.515, 1.715]}
        rotation={[-Math.PI, 1.495, -Math.PI]}
        scale={[0.507, 0.107, 0.507]}>
        <group name="Cilindro013" position={[0.341, -0.355, -0.294]} scale={[0.905, 0.311, 0.905]}>
          <mesh
            name="Cilindro015_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro015_1.geometry}
            material={materials['Material.095']}
          />
          <mesh
            name="Cilindro015_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro015_2.geometry}
            material={materials['Material.096']}
          />
        </group>
      </mesh>
      <mesh
        name="letra_o"
        castShadow
        receiveShadow
        geometry={nodes.letra_o.geometry}
        material={materials['Material.100']}
        position={[0.011, 0.515, -3.085]}
        rotation={[-Math.PI, 0.52, -Math.PI]}
        scale={[0.507, 0.107, 0.507]}>
        <group name="Cilindro014" position={[0.341, -0.355, -0.294]} scale={[0.905, 0.311, 0.905]}>
          <mesh
            name="Cilindro016_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro016_1.geometry}
            material={materials['Material.098']}
          />
          <mesh
            name="Cilindro016_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro016_2.geometry}
            material={materials['Material.099']}
          />
        </group>
      </mesh>
      <mesh
        name="letra_p"
        castShadow
        receiveShadow
        geometry={nodes.letra_p.geometry}
        material={materials['Material.103']}
        position={[2.662, 0.515, -1.582]}
        rotation={[-Math.PI, 1.508, -Math.PI]}
        scale={[0.507, 0.107, 0.507]}>
        <group name="Cilindro015" position={[0.341, -0.355, -0.294]} scale={[0.905, 0.311, 0.905]}>
          <mesh
            name="Cilindro017_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro017_1.geometry}
            material={materials['Material.101']}
          />
          <mesh
            name="Cilindro017_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro017_2.geometry}
            material={materials['Material.102']}
          />
        </group>
      </mesh>
      <mesh
        name="letra_q"
        castShadow
        receiveShadow
        geometry={nodes.letra_q.geometry}
        material={materials['Material.106']}
        position={[2.792, 0.515, 1.653]}
        rotation={[-Math.PI, 1.355, -Math.PI]}
        scale={[0.507, 0.107, 0.507]}>
        <group name="Cilindro016" position={[0.341, -0.355, -0.294]} scale={[0.905, 0.311, 0.905]}>
          <mesh
            name="Cilindro018_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro018_1.geometry}
            material={materials['Material.104']}
          />
          <mesh
            name="Cilindro018_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro018_2.geometry}
            material={materials['Material.105']}
          />
        </group>
      </mesh>
      <mesh
        name="letra_r"
        castShadow
        receiveShadow
        geometry={nodes.letra_r.geometry}
        material={materials['Material.109']}
        position={[-0.092, 0.515, 3.173]}
        rotation={[0, 1.564, 0]}
        scale={[0.507, 0.107, 0.507]}>
        <group name="Cilindro017" position={[0.341, -0.355, -0.294]} scale={[0.905, 0.311, 0.905]}>
          <mesh
            name="Cilindro019_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro019_1.geometry}
            material={materials['Material.107']}
          />
          <mesh
            name="Cilindro019_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro019_2.geometry}
            material={materials['Material.108']}
          />
        </group>
      </mesh>
      <mesh
        name="letra_n"
        castShadow
        receiveShadow
        geometry={nodes.letra_n.geometry}
        material={materials['Material.112']}
        position={[-2.567, 0.515, -1.576]}
        rotation={[-Math.PI, 1.523, -Math.PI]}
        scale={[0.507, 0.107, 0.507]}>
        <group name="Cilindro018" position={[0.341, -0.355, -0.294]} scale={[0.905, 0.311, 0.905]}>
          <mesh
            name="Cilindro020"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro020.geometry}
            material={materials['Material.110']}
          />
          <mesh
            name="Cilindro020_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro020_1.geometry}
            material={materials['Material.111']}
          />
        </group>
      </mesh>
      <mesh
        name="letra_s"
        castShadow
        receiveShadow
        geometry={nodes.letra_s.geometry}
        material={materials['Material.115']}
        position={[0.066, 0.515, 0.165]}
        rotation={[-Math.PI, 1.57, -Math.PI]}
        scale={[0.507, 0.107, 0.507]}>
        <group name="Cilindro019" position={[0.341, -0.355, -0.294]} scale={[0.905, 0.311, 0.905]}>
          <mesh
            name="Cilindro021"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro021.geometry}
            material={materials['Material.113']}
          />
          <mesh
            name="Cilindro021_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro021_1.geometry}
            material={materials['Material.114']}
          />
        </group>
      </mesh>
      <group
        name="ladron_o"
        position={[1.039, 0.436, -3.096]}
        rotation={[-Math.PI / 2, 0, 0.584]}
        scale={25}>
        <mesh
          name="Object_2001"
          castShadow
          receiveShadow
          geometry={nodes.Object_2001.geometry}
          material={materials['None.001']}
        />
        <mesh
          name="Object_3001"
          castShadow
          receiveShadow
          geometry={nodes.Object_3001.geometry}
          material={materials['None.001']}
        />
        <mesh
          name="Object_4001"
          castShadow
          receiveShadow
          geometry={nodes.Object_4001.geometry}
          material={materials['None.001']}
        />
        <mesh
          name="Object_5001"
          castShadow
          receiveShadow
          geometry={nodes.Object_5001.geometry}
          material={materials['None.001']}
        />
        <mesh
          name="Object_6001"
          castShadow
          receiveShadow
          geometry={nodes.Object_6001.geometry}
          material={materials['None.001']}
        />
      </group>
      <group
        name="ladron_p"
        position={[2.365, 0.436, -0.99]}
        rotation={[-Math.PI / 2, 0, 1.34]}
        scale={25}>
        <mesh
          name="Object_2002"
          castShadow
          receiveShadow
          geometry={nodes.Object_2002.geometry}
          material={materials['None.002']}
        />
        <mesh
          name="Object_3002"
          castShadow
          receiveShadow
          geometry={nodes.Object_3002.geometry}
          material={materials['None.002']}
        />
        <mesh
          name="Object_4002"
          castShadow
          receiveShadow
          geometry={nodes.Object_4002.geometry}
          material={materials['None.002']}
        />
        <mesh
          name="Object_5002"
          castShadow
          receiveShadow
          geometry={nodes.Object_5002.geometry}
          material={materials['None.002']}
        />
        <mesh
          name="Object_6002"
          castShadow
          receiveShadow
          geometry={nodes.Object_6002.geometry}
          material={materials['None.002']}
        />
      </group>
      <group
        name="ladron_q"
        position={[2.236, 0.436, 0.821]}
        rotation={[-Math.PI / 2, 0, 0.584]}
        scale={25}>
        <mesh
          name="Object_2003"
          castShadow
          receiveShadow
          geometry={nodes.Object_2003.geometry}
          material={materials['None.003']}
        />
        <mesh
          name="Object_3003"
          castShadow
          receiveShadow
          geometry={nodes.Object_3003.geometry}
          material={materials['None.003']}
        />
        <mesh
          name="Object_4003"
          castShadow
          receiveShadow
          geometry={nodes.Object_4003.geometry}
          material={materials['None.003']}
        />
        <mesh
          name="Object_5003"
          castShadow
          receiveShadow
          geometry={nodes.Object_5003.geometry}
          material={materials['None.003']}
        />
        <mesh
          name="Object_6003"
          castShadow
          receiveShadow
          geometry={nodes.Object_6003.geometry}
          material={materials['None.003']}
        />
      </group>
      <group
        name="ladron_r"
        position={[-0.679, 0.436, 3.425]}
        rotation={[-Math.PI / 2, 0, 1.669]}
        scale={25}>
        <mesh
          name="Object_2004"
          castShadow
          receiveShadow
          geometry={nodes.Object_2004.geometry}
          material={materials['None.004']}
        />
        <mesh
          name="Object_3004"
          castShadow
          receiveShadow
          geometry={nodes.Object_3004.geometry}
          material={materials['None.004']}
        />
        <mesh
          name="Object_4004"
          castShadow
          receiveShadow
          geometry={nodes.Object_4004.geometry}
          material={materials['None.004']}
        />
        <mesh
          name="Object_5004"
          castShadow
          receiveShadow
          geometry={nodes.Object_5004.geometry}
          material={materials['None.004']}
        />
        <mesh
          name="Object_6004"
          castShadow
          receiveShadow
          geometry={nodes.Object_6004.geometry}
          material={materials['None.004']}
        />
      </group>
      <group
        name="ladron_l"
        position={[-2.172, 0.436, 5.229]}
        rotation={[-Math.PI / 2, 0, 1.444]}
        scale={25}>
        <mesh
          name="Object_2005"
          castShadow
          receiveShadow
          geometry={nodes.Object_2005.geometry}
          material={materials['None.005']}
        />
        <mesh
          name="Object_3005"
          castShadow
          receiveShadow
          geometry={nodes.Object_3005.geometry}
          material={materials['None.005']}
        />
        <mesh
          name="Object_4005"
          castShadow
          receiveShadow
          geometry={nodes.Object_4005.geometry}
          material={materials['None.005']}
        />
        <mesh
          name="Object_5005"
          castShadow
          receiveShadow
          geometry={nodes.Object_5005.geometry}
          material={materials['None.005']}
        />
        <mesh
          name="Object_6005"
          castShadow
          receiveShadow
          geometry={nodes.Object_6005.geometry}
          material={materials['None.005']}
        />
      </group>
      <group
        name="ladron_m"
        position={[-3.016, 0.436, 0.817]}
        rotation={[-Math.PI / 2, 0, 2.228]}
        scale={25}>
        <mesh
          name="Object_2006"
          castShadow
          receiveShadow
          geometry={nodes.Object_2006.geometry}
          material={materials['None.006']}
        />
        <mesh
          name="Object_3006"
          castShadow
          receiveShadow
          geometry={nodes.Object_3006.geometry}
          material={materials['None.006']}
        />
        <mesh
          name="Object_4006"
          castShadow
          receiveShadow
          geometry={nodes.Object_4006.geometry}
          material={materials['None.006']}
        />
        <mesh
          name="Object_5006"
          castShadow
          receiveShadow
          geometry={nodes.Object_5006.geometry}
          material={materials['None.006']}
        />
        <mesh
          name="Object_6006"
          castShadow
          receiveShadow
          geometry={nodes.Object_6006.geometry}
          material={materials['None.006']}
        />
      </group>
      <group
        name="ladron_k"
        position={[-0.023, 0.436, 7.096]}
        rotation={[-Math.PI / 2, 0, 2.982]}
        scale={25}>
        <mesh
          name="Object_2007"
          castShadow
          receiveShadow
          geometry={nodes.Object_2007.geometry}
          material={materials['None.007']}
        />
        <mesh
          name="Object_3007"
          castShadow
          receiveShadow
          geometry={nodes.Object_3007.geometry}
          material={materials['None.007']}
        />
        <mesh
          name="Object_4007"
          castShadow
          receiveShadow
          geometry={nodes.Object_4007.geometry}
          material={materials['None.007']}
        />
        <mesh
          name="Object_5007"
          castShadow
          receiveShadow
          geometry={nodes.Object_5007.geometry}
          material={materials['None.007']}
        />
        <mesh
          name="Object_6007"
          castShadow
          receiveShadow
          geometry={nodes.Object_6007.geometry}
          material={materials['None.007']}
        />
      </group>
      <group
        name="ladron_j"
        position={[3.421, 0.436, 4.997]}
        rotation={[-Math.PI / 2, 0, 3.031]}
        scale={25}>
        <mesh
          name="Object_2008"
          castShadow
          receiveShadow
          geometry={nodes.Object_2008.geometry}
          material={materials['None.008']}
        />
        <mesh
          name="Object_3008"
          castShadow
          receiveShadow
          geometry={nodes.Object_3008.geometry}
          material={materials['None.008']}
        />
        <mesh
          name="Object_4008"
          castShadow
          receiveShadow
          geometry={nodes.Object_4008.geometry}
          material={materials['None.008']}
        />
        <mesh
          name="Object_5008"
          castShadow
          receiveShadow
          geometry={nodes.Object_5008.geometry}
          material={materials['None.008']}
        />
        <mesh
          name="Object_6008"
          castShadow
          receiveShadow
          geometry={nodes.Object_6008.geometry}
          material={materials['None.008']}
        />
      </group>
      <group
        name="ladron_b"
        position={[-5.01, 0.436, 0.752]}
        rotation={[-Math.PI / 2, 0, 0.584]}
        scale={25}>
        <mesh
          name="Object_2009"
          castShadow
          receiveShadow
          geometry={nodes.Object_2009.geometry}
          material={materials['None.009']}
        />
        <mesh
          name="Object_3009"
          castShadow
          receiveShadow
          geometry={nodes.Object_3009.geometry}
          material={materials['None.009']}
        />
        <mesh
          name="Object_4009"
          castShadow
          receiveShadow
          geometry={nodes.Object_4009.geometry}
          material={materials['None.009']}
        />
        <mesh
          name="Object_5009"
          castShadow
          receiveShadow
          geometry={nodes.Object_5009.geometry}
          material={materials['None.009']}
        />
        <mesh
          name="Object_6009"
          castShadow
          receiveShadow
          geometry={nodes.Object_6009.geometry}
          material={materials['None.009']}
        />
      </group>
      <group
        name="ladron_a"
        position={[-5.627, 0.436, 3.57]}
        rotation={[-Math.PI / 2, 0, 0.584]}
        scale={25}>
        <mesh
          name="Object_2010"
          castShadow
          receiveShadow
          geometry={nodes.Object_2010.geometry}
          material={materials['None.010']}
        />
        <mesh
          name="Object_3010"
          castShadow
          receiveShadow
          geometry={nodes.Object_3010.geometry}
          material={materials['None.010']}
        />
        <mesh
          name="Object_4010"
          castShadow
          receiveShadow
          geometry={nodes.Object_4010.geometry}
          material={materials['None.010']}
        />
        <mesh
          name="Object_5010"
          castShadow
          receiveShadow
          geometry={nodes.Object_5010.geometry}
          material={materials['None.010']}
        />
        <mesh
          name="Object_6010"
          castShadow
          receiveShadow
          geometry={nodes.Object_6010.geometry}
          material={materials['None.010']}
        />
      </group>
      <group
        name="ladron_f"
        position={[2.404, 0.436, -5.342]}
        rotation={[-Math.PI / 2, 0, 2.599]}
        scale={25}>
        <mesh
          name="Object_2011"
          castShadow
          receiveShadow
          geometry={nodes.Object_2011.geometry}
          material={materials['None.011']}
        />
        <mesh
          name="Object_3011"
          castShadow
          receiveShadow
          geometry={nodes.Object_3011.geometry}
          material={materials['None.011']}
        />
        <mesh
          name="Object_4011"
          castShadow
          receiveShadow
          geometry={nodes.Object_4011.geometry}
          material={materials['None.011']}
        />
        <mesh
          name="Object_5011"
          castShadow
          receiveShadow
          geometry={nodes.Object_5011.geometry}
          material={materials['None.011']}
        />
        <mesh
          name="Object_6011"
          castShadow
          receiveShadow
          geometry={nodes.Object_6011.geometry}
          material={materials['None.011']}
        />
      </group>
      <group
        name="ladron_c"
        position={[-5.251, 0.436, -3.825]}
        rotation={[-Math.PI / 2, 0, 1.853]}
        scale={25}>
        <mesh
          name="Object_2012"
          castShadow
          receiveShadow
          geometry={nodes.Object_2012.geometry}
          material={materials['None.012']}
        />
        <mesh
          name="Object_3012"
          castShadow
          receiveShadow
          geometry={nodes.Object_3012.geometry}
          material={materials['None.012']}
        />
        <mesh
          name="Object_4012"
          castShadow
          receiveShadow
          geometry={nodes.Object_4012.geometry}
          material={materials['None.012']}
        />
        <mesh
          name="Object_5012"
          castShadow
          receiveShadow
          geometry={nodes.Object_5012.geometry}
          material={materials['None.012']}
        />
        <mesh
          name="Object_6012"
          castShadow
          receiveShadow
          geometry={nodes.Object_6012.geometry}
          material={materials['None.012']}
        />
      </group>
      <group
        name="ladron_n"
        position={[-3.14, 0.436, -1.083]}
        rotation={[-Math.PI / 2, 0, 2.18]}
        scale={25}>
        <mesh
          name="Object_2013"
          castShadow
          receiveShadow
          geometry={nodes.Object_2013.geometry}
          material={materials['None.013']}
        />
        <mesh
          name="Object_3013"
          castShadow
          receiveShadow
          geometry={nodes.Object_3013.geometry}
          material={materials['None.013']}
        />
        <mesh
          name="Object_4013"
          castShadow
          receiveShadow
          geometry={nodes.Object_4013.geometry}
          material={materials['None.013']}
        />
        <mesh
          name="Object_5013"
          castShadow
          receiveShadow
          geometry={nodes.Object_5013.geometry}
          material={materials['None.013']}
        />
        <mesh
          name="Object_6013"
          castShadow
          receiveShadow
          geometry={nodes.Object_6013.geometry}
          material={materials['None.013']}
        />
      </group>
      <group
        name="ladron_i"
        position={[6.001, 0.436, 3.511]}
        rotation={[-Math.PI / 2, 0, -2.58]}
        scale={25}>
        <mesh
          name="Object_2014"
          castShadow
          receiveShadow
          geometry={nodes.Object_2014.geometry}
          material={materials['None.014']}
        />
        <mesh
          name="Object_3014"
          castShadow
          receiveShadow
          geometry={nodes.Object_3014.geometry}
          material={materials['None.014']}
        />
        <mesh
          name="Object_4014"
          castShadow
          receiveShadow
          geometry={nodes.Object_4014.geometry}
          material={materials['None.014']}
        />
        <mesh
          name="Object_5014"
          castShadow
          receiveShadow
          geometry={nodes.Object_5014.geometry}
          material={materials['None.014']}
        />
        <mesh
          name="Object_6014"
          castShadow
          receiveShadow
          geometry={nodes.Object_6014.geometry}
          material={materials['None.014']}
        />
      </group>
      <group
        name="ladron_e"
        position={[-0.834, 0.436, -5.576]}
        rotation={[-Math.PI / 2, 0, 1.955]}
        scale={25}>
        <mesh
          name="Object_2015"
          castShadow
          receiveShadow
          geometry={nodes.Object_2015.geometry}
          material={materials['None.015']}
        />
        <mesh
          name="Object_3015"
          castShadow
          receiveShadow
          geometry={nodes.Object_3015.geometry}
          material={materials['None.015']}
        />
        <mesh
          name="Object_4015"
          castShadow
          receiveShadow
          geometry={nodes.Object_4015.geometry}
          material={materials['None.015']}
        />
        <mesh
          name="Object_5015"
          castShadow
          receiveShadow
          geometry={nodes.Object_5015.geometry}
          material={materials['None.015']}
        />
        <mesh
          name="Object_6015"
          castShadow
          receiveShadow
          geometry={nodes.Object_6015.geometry}
          material={materials['None.015']}
        />
      </group>
      <group
        name="ladron_d"
        position={[-2.569, 0.436, -3.827]}
        rotation={[-Math.PI / 2, 0, 0.584]}
        scale={25}>
        <mesh
          name="Object_2016"
          castShadow
          receiveShadow
          geometry={nodes.Object_2016.geometry}
          material={materials['None.016']}
        />
        <mesh
          name="Object_3016"
          castShadow
          receiveShadow
          geometry={nodes.Object_3016.geometry}
          material={materials['None.016']}
        />
        <mesh
          name="Object_4016"
          castShadow
          receiveShadow
          geometry={nodes.Object_4016.geometry}
          material={materials['None.016']}
        />
        <mesh
          name="Object_5016"
          castShadow
          receiveShadow
          geometry={nodes.Object_5016.geometry}
          material={materials['None.016']}
        />
        <mesh
          name="Object_6016"
          castShadow
          receiveShadow
          geometry={nodes.Object_6016.geometry}
          material={materials['None.016']}
        />
      </group>
      <group
        name="ladron_h"
        position={[5.884, 0.436, 0.547]}
        rotation={[-Math.PI / 2, 0, 2.909]}
        scale={25}>
        <mesh
          name="Object_2017"
          castShadow
          receiveShadow
          geometry={nodes.Object_2017.geometry}
          material={materials['None.017']}
        />
        <mesh
          name="Object_3017"
          castShadow
          receiveShadow
          geometry={nodes.Object_3017.geometry}
          material={materials['None.017']}
        />
        <mesh
          name="Object_4017"
          castShadow
          receiveShadow
          geometry={nodes.Object_4017.geometry}
          material={materials['None.017']}
        />
        <mesh
          name="Object_5017"
          castShadow
          receiveShadow
          geometry={nodes.Object_5017.geometry}
          material={materials['None.017']}
        />
        <mesh
          name="Object_6017"
          castShadow
          receiveShadow
          geometry={nodes.Object_6017.geometry}
          material={materials['None.017']}
        />
      </group>
      <group
        name="ladron_g"
        position={[5.965, 0.436, -3.817]}
        rotation={[-Math.PI / 2, 0, -0.243]}
        scale={25}>
        <mesh
          name="Object_2018"
          castShadow
          receiveShadow
          geometry={nodes.Object_2018.geometry}
          material={materials['None.018']}
        />
        <mesh
          name="Object_3018"
          castShadow
          receiveShadow
          geometry={nodes.Object_3018.geometry}
          material={materials['None.018']}
        />
        <mesh
          name="Object_4018"
          castShadow
          receiveShadow
          geometry={nodes.Object_4018.geometry}
          material={materials['None.018']}
        />
        <mesh
          name="Object_5018"
          castShadow
          receiveShadow
          geometry={nodes.Object_5018.geometry}
          material={materials['None.018']}
        />
        <mesh
          name="Object_6018"
          castShadow
          receiveShadow
          geometry={nodes.Object_6018.geometry}
          material={materials['None.018']}
        />
      </group>
      <group
        name="town_52"
        position={[0.903, 0.626, -1.471]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx001" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0001"
            castShadow
            receiveShadow
            geometry={nodes.Island__0001.geometry}
            material={materials['Scene_-_Root.001']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="ladron_s"
        position={[-0.524, 0.436, -0.666]}
        rotation={[-Math.PI / 2, 0, -0.243]}
        scale={25}>
        <mesh
          name="Object_2019"
          castShadow
          receiveShadow
          geometry={nodes.Object_2019.geometry}
          material={materials['None.019']}
        />
        <mesh
          name="Object_3019"
          castShadow
          receiveShadow
          geometry={nodes.Object_3019.geometry}
          material={materials['None.019']}
        />
        <mesh
          name="Object_4019"
          castShadow
          receiveShadow
          geometry={nodes.Object_4019.geometry}
          material={materials['None.019']}
        />
        <mesh
          name="Object_5019"
          castShadow
          receiveShadow
          geometry={nodes.Object_5019.geometry}
          material={materials['None.019']}
        />
        <mesh
          name="Object_6019"
          castShadow
          receiveShadow
          geometry={nodes.Object_6019.geometry}
          material={materials['None.019']}
        />
      </group>
      <group
        name="town_39"
        position={[1.79, 0.626, -3.01]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx002" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0002"
            castShadow
            receiveShadow
            geometry={nodes.Island__0002.geometry}
            material={materials['Scene_-_Root.002']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_53"
        position={[1.763, 0.626, -0.027]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx003" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0003"
            castShadow
            receiveShadow
            geometry={nodes.Island__0003.geometry}
            material={materials['Scene_-_Root.003']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_42"
        position={[3.626, 0.626, 0.098]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx004" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0004"
            castShadow
            receiveShadow
            geometry={nodes.Island__0004.geometry}
            material={materials['Scene_-_Root.004']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_41"
        position={[4.436, 0.626, -1.515]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx005" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0005"
            castShadow
            receiveShadow
            geometry={nodes.Island__0005.geometry}
            material={materials['Scene_-_Root.005']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_51"
        position={[-0.836, 0.626, -1.585]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx006" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0006"
            castShadow
            receiveShadow
            geometry={nodes.Island__0006.geometry}
            material={materials['Scene_-_Root.006']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_36"
        position={[-1.785, 0.626, -3.02]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx007" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0007"
            castShadow
            receiveShadow
            geometry={nodes.Island__0007.geometry}
            material={materials['Scene_-_Root.007']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_49"
        position={[-0.812, 0.626, 1.507]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx008" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0008"
            castShadow
            receiveShadow
            geometry={nodes.Island__0008.geometry}
            material={materials['Scene_-_Root.008']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_50"
        position={[-1.785, 0.626, 0.03]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx009" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0009"
            castShadow
            receiveShadow
            geometry={nodes.Island__0009.geometry}
            material={materials['Scene_-_Root.009']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_54"
        position={[0.838, 0.626, 1.609]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx010" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0010"
            castShadow
            receiveShadow
            geometry={nodes.Island__0010.geometry}
            material={materials['Scene_-_Root.010']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_48"
        position={[-1.805, 0.626, 3.146]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx011" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0011"
            castShadow
            receiveShadow
            geometry={nodes.Island__0011.geometry}
            material={materials['Scene_-_Root.011']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_47"
        position={[-0.864, 0.626, 4.547]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx012" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0012"
            castShadow
            receiveShadow
            geometry={nodes.Island__0012.geometry}
            material={materials['Scene_-_Root.012']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_31"
        position={[-3.478, 0.626, 3.002]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx013" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0013"
            castShadow
            receiveShadow
            geometry={nodes.Island__0013.geometry}
            material={materials['Scene_-_Root.013']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_46"
        position={[0.852, 0.626, 4.599]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx014" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0014"
            castShadow
            receiveShadow
            geometry={nodes.Island__0014.geometry}
            material={materials['Scene_-_Root.014']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_45"
        position={[1.792, 0.626, 3.018]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx015" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0015"
            castShadow
            receiveShadow
            geometry={nodes.Island__0015.geometry}
            material={materials['Scene_-_Root.015']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_14"
        position={[3.462, 0.626, -5.913]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx016" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0016"
            castShadow
            receiveShadow
            geometry={nodes.Island__0016.geometry}
            material={materials['Scene_-_Root.016']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_38"
        position={[0.886, 0.626, -4.54]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx017" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0017"
            castShadow
            receiveShadow
            geometry={nodes.Island__0017.geometry}
            material={materials['Scene_-_Root.017']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_40"
        position={[3.506, 0.626, -3.04]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx018" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0018"
            castShadow
            receiveShadow
            geometry={nodes.Island__0018.geometry}
            material={materials['Scene_-_Root.018']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_29"
        position={[-3.502, 0.626, 6.077]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx019" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0019"
            castShadow
            receiveShadow
            geometry={nodes.Island__0019.geometry}
            material={materials['Scene_-_Root.019']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_30"
        position={[-4.452, 0.626, 4.642]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx020" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0020"
            castShadow
            receiveShadow
            geometry={nodes.Island__0020.geometry}
            material={materials['Scene_-_Root.020']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_32"
        position={[-4.452, 0.626, 1.66]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx021" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0021"
            castShadow
            receiveShadow
            geometry={nodes.Island__0021.geometry}
            material={materials['Scene_-_Root.021']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_1"
        position={[-6.175, 0.626, 4.518]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx022" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0022"
            castShadow
            receiveShadow
            geometry={nodes.Island__0022.geometry}
            material={materials['Scene_-_Root.022']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_28"
        position={[-1.82, 0.626, 6.206]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx023" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0023"
            castShadow
            receiveShadow
            geometry={nodes.Island__0023.geometry}
            material={materials['Scene_-_Root.023']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_37"
        position={[-0.839, 0.626, -4.578]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx024" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0024"
            castShadow
            receiveShadow
            geometry={nodes.Island__0024.geometry}
            material={materials['Scene_-_Root.024']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_33"
        position={[-3.542, 0.626, 0.031]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx025" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0025"
            castShadow
            receiveShadow
            geometry={nodes.Island__0025.geometry}
            material={materials['Scene_-_Root.025']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_12"
        position={[0.833, 0.626, -7.514]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx026" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0026"
            castShadow
            receiveShadow
            geometry={nodes.Island__0026.geometry}
            material={materials['Scene_-_Root.026']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_13"
        position={[1.796, 0.626, -6.12]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx027" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0027"
            castShadow
            receiveShadow
            geometry={nodes.Island__0027.geometry}
            material={materials['Scene_-_Root.027']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_35"
        position={[-3.472, 0.626, -3.007]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx028" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0028"
            castShadow
            receiveShadow
            geometry={nodes.Island__0028.geometry}
            material={materials['Scene_-_Root.028']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_34"
        position={[-4.356, 0.626, -1.489]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx029" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0029"
            castShadow
            receiveShadow
            geometry={nodes.Island__0029.geometry}
            material={materials['Scene_-_Root.029']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_3"
        position={[-6.179, 0.626, 1.543]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx030" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0030"
            castShadow
            receiveShadow
            geometry={nodes.Island__0030.geometry}
            material={materials['Scene_-_Root.030']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_2"
        position={[-6.89, 0.626, 3.044]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx031" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0031"
            castShadow
            receiveShadow
            geometry={nodes.Island__0031.geometry}
            material={materials['Scene_-_Root.031']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_43"
        position={[4.348, 0.626, 1.5]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx032" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0032"
            castShadow
            receiveShadow
            geometry={nodes.Island__0032.geometry}
            material={materials['Scene_-_Root.032']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_44"
        position={[3.509, 0.626, 3.004]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx033" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0033"
            castShadow
            receiveShadow
            geometry={nodes.Island__0033.geometry}
            material={materials['Scene_-_Root.033']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_20"
        position={[6.163, 0.626, 1.559]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx034" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0034"
            castShadow
            receiveShadow
            geometry={nodes.Island__0034.geometry}
            material={materials['Scene_-_Root.034']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_19"
        position={[7.037, 0.626, 0.089]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx035" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0035"
            castShadow
            receiveShadow
            geometry={nodes.Island__0035.geometry}
            material={materials['Scene_-_Root.035']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_18"
        position={[6.125, 0.626, -1.465]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx036" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0036"
            castShadow
            receiveShadow
            geometry={nodes.Island__0036.geometry}
            material={materials['Scene_-_Root.036']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_17"
        position={[6.855, 0.626, -3.045]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx037" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0037"
            castShadow
            receiveShadow
            geometry={nodes.Island__0037.geometry}
            material={materials['Scene_-_Root.037']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_16"
        position={[6.094, 0.626, -4.401]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx038" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0038"
            castShadow
            receiveShadow
            geometry={nodes.Island__0038.geometry}
            material={materials['Scene_-_Root.038']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_15"
        position={[4.349, 0.626, -4.628]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx039" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0039"
            castShadow
            receiveShadow
            geometry={nodes.Island__0039.geometry}
            material={materials['Scene_-_Root.039']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_23"
        position={[4.297, 0.626, 4.556]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx040" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0040"
            castShadow
            receiveShadow
            geometry={nodes.Island__0040.geometry}
            material={materials['Scene_-_Root.040']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_25"
        position={[1.709, 0.626, 6.178]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx041" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0041"
            castShadow
            receiveShadow
            geometry={nodes.Island__0041.geometry}
            material={materials['Scene_-_Root.041']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_24"
        position={[3.422, 0.626, 6.026]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx042" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0042"
            castShadow
            receiveShadow
            geometry={nodes.Island__0042.geometry}
            material={materials['Scene_-_Root.042']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_27"
        position={[-0.819, 0.626, 7.405]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx043" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0043"
            castShadow
            receiveShadow
            geometry={nodes.Island__0043.geometry}
            material={materials['Scene_-_Root.043']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_26"
        position={[0.747, 0.626, 7.389]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx044" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0044"
            castShadow
            receiveShadow
            geometry={nodes.Island__0044.geometry}
            material={materials['Scene_-_Root.044']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_10"
        position={[-1.777, 0.626, -6.058]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx045" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0045"
            castShadow
            receiveShadow
            geometry={nodes.Island__0045.geometry}
            material={materials['Scene_-_Root.045']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_8"
        position={[-4.39, 0.626, -4.52]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx046" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0046"
            castShadow
            receiveShadow
            geometry={nodes.Island__0046.geometry}
            material={materials['Scene_-_Root.046']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_11"
        position={[-0.741, 0.626, -7.519]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx047" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0047"
            castShadow
            receiveShadow
            geometry={nodes.Island__0047.geometry}
            material={materials['Scene_-_Root.047']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_5"
        position={[-6.159, 0.626, -1.467]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx048" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0048"
            castShadow
            receiveShadow
            geometry={nodes.Island__0048.geometry}
            material={materials['Scene_-_Root.048']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_4"
        position={[-6.903, 0.626, -0.103]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx049" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0049"
            castShadow
            receiveShadow
            geometry={nodes.Island__0049.geometry}
            material={materials['Scene_-_Root.049']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_21"
        position={[6.906, 0.626, 3.105]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx050" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0050"
            castShadow
            receiveShadow
            geometry={nodes.Island__0050.geometry}
            material={materials['Scene_-_Root.050']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_22"
        position={[5.988, 0.626, 4.41]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx051" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0051"
            castShadow
            receiveShadow
            geometry={nodes.Island__0051.geometry}
            material={materials['Scene_-_Root.051']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_7"
        position={[-6.037, 0.626, -4.419]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx052" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0052"
            castShadow
            receiveShadow
            geometry={nodes.Island__0052.geometry}
            material={materials['Scene_-_Root.052']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <group
        name="town_6"
        position={[-6.894, 0.626, -2.961]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx053" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0053"
            castShadow
            receiveShadow
            geometry={nodes.Island__0053.geometry}
            material={materials['Scene_-_Root.053']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <mesh
        name="camino_45_54"
        castShadow
        receiveShadow
        geometry={nodes.camino_45_54.geometry}
        material={nodes.camino_45_54.material}
        position={[1.3, 0.457, 2.239]}
        rotation={[Math.PI, -0.53, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_40_41"
        castShadow
        receiveShadow
        geometry={nodes.camino_40_41.geometry}
        material={nodes.camino_40_41.material}
        position={[3.927, 0.457, -2.321]}
        rotation={[Math.PI, -0.53, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_27_28"
        castShadow
        receiveShadow
        geometry={nodes.camino_27_28.geometry}
        material={nodes.camino_27_28.material}
        position={[-1.336, 0.457, 6.815]}
        rotation={[Math.PI, -0.53, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_49_50"
        castShadow
        receiveShadow
        geometry={nodes.camino_49_50.geometry}
        material={nodes.camino_49_50.material}
        position={[-1.373, 0.457, 0.699]}
        rotation={[Math.PI, -0.53, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_33_34"
        castShadow
        receiveShadow
        geometry={nodes.camino_33_34.geometry}
        material={nodes.camino_33_34.material}
        position={[-3.931, 0.457, -0.775]}
        rotation={[Math.PI, -0.53, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_23_44"
        castShadow
        receiveShadow
        geometry={nodes.camino_23_44.geometry}
        material={nodes.camino_23_44.material}
        position={[3.925, 0.457, 3.751]}
        rotation={[Math.PI, -0.53, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_5_6"
        castShadow
        receiveShadow
        geometry={nodes.camino_5_6.geometry}
        material={nodes.camino_5_6.material}
        position={[-6.627, 0.457, -2.328]}
        rotation={[Math.PI, -0.53, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_15_40"
        castShadow
        receiveShadow
        geometry={nodes.camino_15_40.geometry}
        material={nodes.camino_15_40.material}
        position={[3.938, 0.457, -3.841]}
        rotation={[-Math.PI, 0.509, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_50_51"
        castShadow
        receiveShadow
        geometry={nodes.camino_50_51.geometry}
        material={nodes.camino_50_51.material}
        position={[-1.319, 0.457, -0.772]}
        rotation={[-Math.PI, 0.509, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_34_35"
        castShadow
        receiveShadow
        geometry={nodes.camino_34_35.geometry}
        material={nodes.camino_34_35.material}
        position={[-3.973, 0.457, -2.301]}
        rotation={[-Math.PI, 0.509, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_6_7"
        castShadow
        receiveShadow
        geometry={nodes.camino_6_7.geometry}
        material={nodes.camino_6_7.material}
        position={[-6.61, 0.457, -3.82]}
        rotation={[-Math.PI, 0.509, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_21_22"
        castShadow
        receiveShadow
        geometry={nodes.camino_21_22.geometry}
        material={nodes.camino_21_22.material}
        position={[6.59, 0.457, 3.784]}
        rotation={[-Math.PI, 0.509, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_43_44"
        castShadow
        receiveShadow
        geometry={nodes.camino_43_44.geometry}
        material={nodes.camino_43_44.material}
        position={[3.939, 0.457, 2.257]}
        rotation={[-Math.PI, 0.509, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_53_54"
        castShadow
        receiveShadow
        geometry={nodes.camino_53_54.geometry}
        material={nodes.camino_53_54.material}
        position={[1.301, 0.457, 0.737]}
        rotation={[-Math.PI, 0.509, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_28_47"
        castShadow
        receiveShadow
        geometry={nodes.camino_28_47.geometry}
        material={nodes.camino_28_47.material}
        position={[-1.368, 0.457, 5.371]}
        rotation={[-Math.PI, 0.509, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_48_49"
        castShadow
        receiveShadow
        geometry={nodes.camino_48_49.geometry}
        material={nodes.camino_48_49.material}
        position={[-1.366, 0.457, 2.332]}
        rotation={[-Math.PI, 0.509, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_32_33"
        castShadow
        receiveShadow
        geometry={nodes.camino_32_33.geometry}
        material={nodes.camino_32_33.material}
        position={[-4.011, 0.457, 0.826]}
        rotation={[-Math.PI, 0.509, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_2_3"
        castShadow
        receiveShadow
        geometry={nodes.camino_2_3.geometry}
        material={nodes.camino_2_3.material}
        position={[-6.597, 0.457, 2.249]}
        rotation={[-Math.PI, 0.509, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_13_38"
        castShadow
        receiveShadow
        geometry={nodes.camino_13_38.geometry}
        material={nodes.camino_13_38.material}
        position={[1.342, 0.457, -5.337]}
        rotation={[-Math.PI, 0.509, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_45_46"
        castShadow
        receiveShadow
        geometry={nodes.camino_45_46.geometry}
        material={nodes.camino_45_46.material}
        position={[1.312, 0.457, 3.783]}
        rotation={[-Math.PI, 0.509, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_4_5"
        castShadow
        receiveShadow
        geometry={nodes.camino_4_5.geometry}
        material={nodes.camino_4_5.material}
        position={[-6.594, 0.457, -0.789]}
        rotation={[-Math.PI, 0.509, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_23_24"
        castShadow
        receiveShadow
        geometry={nodes.camino_23_24.geometry}
        material={nodes.camino_23_24.material}
        position={[3.949, 0.457, 5.303]}
        rotation={[-Math.PI, 0.509, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_30_31"
        castShadow
        receiveShadow
        geometry={nodes.camino_30_31.geometry}
        material={nodes.camino_30_31.material}
        position={[-3.993, 0.457, 3.859]}
        rotation={[-Math.PI, 0.509, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_36_37"
        castShadow
        receiveShadow
        geometry={nodes.camino_36_37.geometry}
        material={nodes.camino_36_37.material}
        position={[-1.326, 0.457, -3.834]}
        rotation={[-Math.PI, 0.509, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_10_11"
        castShadow
        receiveShadow
        geometry={nodes.camino_10_11.geometry}
        material={nodes.camino_10_11.material}
        position={[-1.324, 0.457, -6.873]}
        rotation={[-Math.PI, 0.509, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_17_18"
        castShadow
        receiveShadow
        geometry={nodes.camino_17_18.geometry}
        material={nodes.camino_17_18.material}
        position={[6.604, 0.457, -2.306]}
        rotation={[-Math.PI, 0.509, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_39_52"
        castShadow
        receiveShadow
        geometry={nodes.camino_39_52.geometry}
        material={nodes.camino_39_52.material}
        position={[1.341, 0.457, -2.334]}
        rotation={[-Math.PI, 0.509, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_41_42"
        castShadow
        receiveShadow
        geometry={nodes.camino_41_42.geometry}
        material={nodes.camino_41_42.material}
        position={[3.977, 0.457, -0.779]}
        rotation={[-Math.PI, 0.509, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_19_20"
        castShadow
        receiveShadow
        geometry={nodes.camino_19_20.geometry}
        material={nodes.camino_19_20.material}
        position={[6.614, 0.457, 0.74]}
        rotation={[-Math.PI, 0.509, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_8_9"
        castShadow
        receiveShadow
        geometry={nodes.camino_8_9.geometry}
        material={nodes.camino_8_9.material}
        position={[-3.964, 0.457, -5.354]}
        rotation={[-Math.PI, 0.509, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <group
        name="town_9"
        position={[-3.479, 0.626, -6.074]}
        rotation={[-Math.PI / 2, 0, 1.048]}
        scale={0.2}>
        <group name="2fe4cec76b0042e7a31248fb0ad97abafbx054" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Island__0054"
            castShadow
            receiveShadow
            geometry={nodes.Island__0054.geometry}
            material={materials['Scene_-_Root.054']}
            position={[0, -0.167, 0]}
            rotation={[0, -0.772, 0]}
            scale={1.3}
          />
        </group>
      </group>
      <mesh
        name="camino_25_26"
        castShadow
        receiveShadow
        geometry={nodes.camino_25_26.geometry}
        material={nodes.camino_25_26.material}
        position={[1.33, 0.457, 6.816]}
        rotation={[-Math.PI, 0.509, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_25_46"
        castShadow
        receiveShadow
        geometry={nodes.camino_25_46.geometry}
        material={nodes.camino_25_46.material}
        position={[1.338, 0.457, 5.41]}
        rotation={[Math.PI, -0.53, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_16_17"
        castShadow
        receiveShadow
        geometry={nodes.camino_16_17.geometry}
        material={nodes.camino_16_17.material}
        position={[6.613, 0.457, -3.748]}
        rotation={[Math.PI, -0.53, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_47_48"
        castShadow
        receiveShadow
        geometry={nodes.camino_47_48.geometry}
        material={nodes.camino_47_48.material}
        position={[-1.286, 0.457, 3.898]}
        rotation={[Math.PI, -0.53, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_31_32"
        castShadow
        receiveShadow
        geometry={nodes.camino_31_32.geometry}
        material={nodes.camino_31_32.material}
        position={[-3.856, 0.457, 2.418]}
        rotation={[Math.PI, -0.53, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_3_4"
        castShadow
        receiveShadow
        geometry={nodes.camino_3_4.geometry}
        material={nodes.camino_3_4.material}
        position={[-6.575, 0.457, 0.724]}
        rotation={[Math.PI, -0.53, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_8_35"
        castShadow
        receiveShadow
        geometry={nodes.camino_8_35.geometry}
        material={nodes.camino_8_35.material}
        position={[-3.953, 0.457, -3.828]}
        rotation={[Math.PI, -0.53, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_36_51"
        castShadow
        receiveShadow
        geometry={nodes.camino_36_51.geometry}
        material={nodes.camino_36_51.material}
        position={[-1.302, 0.457, -2.3]}
        rotation={[Math.PI, -0.53, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_52_53"
        castShadow
        receiveShadow
        geometry={nodes.camino_52_53.geometry}
        material={nodes.camino_52_53.material}
        position={[1.295, 0.457, -0.804]}
        rotation={[Math.PI, -0.53, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_42_43"
        castShadow
        receiveShadow
        geometry={nodes.camino_42_43.geometry}
        material={nodes.camino_42_43.material}
        position={[3.987, 0.457, 0.747]}
        rotation={[Math.PI, -0.53, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_20_21"
        castShadow
        receiveShadow
        geometry={nodes.camino_20_21.geometry}
        material={nodes.camino_20_21.material}
        position={[6.584, 0.457, 2.243]}
        rotation={[Math.PI, -0.53, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_10_37"
        castShadow
        receiveShadow
        geometry={nodes.camino_10_37.geometry}
        material={nodes.camino_10_37.material}
        position={[-1.315, 0.457, -5.311]}
        rotation={[Math.PI, -0.53, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_38_39"
        castShadow
        receiveShadow
        geometry={nodes.camino_38_39.geometry}
        material={nodes.camino_38_39.material}
        position={[1.364, 0.457, -3.768]}
        rotation={[Math.PI, -0.53, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_18_19"
        castShadow
        receiveShadow
        geometry={nodes.camino_18_19.geometry}
        material={nodes.camino_18_19.material}
        position={[6.571, 0.457, -0.768]}
        rotation={[Math.PI, -0.53, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_1_2"
        castShadow
        receiveShadow
        geometry={nodes.camino_1_2.geometry}
        material={nodes.camino_1_2.material}
        position={[-6.566, 0.457, 3.805]}
        rotation={[Math.PI, -0.53, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_29_30"
        castShadow
        receiveShadow
        geometry={nodes.camino_29_30.geometry}
        material={nodes.camino_29_30.material}
        position={[-3.983, 0.457, 5.293]}
        rotation={[Math.PI, -0.53, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_14_15"
        castShadow
        receiveShadow
        geometry={nodes.camino_14_15.geometry}
        material={nodes.camino_14_15.material}
        position={[3.942, 0.457, -5.304]}
        rotation={[Math.PI, -0.53, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_12_13"
        castShadow
        receiveShadow
        geometry={nodes.camino_12_13.geometry}
        material={nodes.camino_12_13.material}
        position={[1.304, 0.457, -6.824]}
        rotation={[Math.PI, -0.53, 0]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_22_23"
        castShadow
        receiveShadow
        geometry={nodes.camino_22_23.geometry}
        material={nodes.camino_22_23.material}
        position={[5.226, 0.457, 4.537]}
        rotation={[0, -1.56, -Math.PI]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_44_45"
        castShadow
        receiveShadow
        geometry={nodes.camino_44_45.geometry}
        material={nodes.camino_44_45.material}
        position={[2.547, 0.457, 2.994]}
        rotation={[0, -1.56, -Math.PI]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_49_54"
        castShadow
        receiveShadow
        geometry={nodes.camino_49_54.geometry}
        material={nodes.camino_49_54.material}
        position={[0.019, 0.457, 1.537]}
        rotation={[0, -1.56, -Math.PI]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_33_50"
        castShadow
        receiveShadow
        geometry={nodes.camino_33_50.geometry}
        material={nodes.camino_33_50.material}
        position={[-2.673, 0.457, -0.014]}
        rotation={[0, -1.56, -Math.PI]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_5_34"
        castShadow
        receiveShadow
        geometry={nodes.camino_5_34.geometry}
        material={nodes.camino_5_34.material}
        position={[-5.284, 0.457, -1.518]}
        rotation={[0, -1.56, -Math.PI]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_7_8"
        castShadow
        receiveShadow
        geometry={nodes.camino_7_8.geometry}
        material={nodes.camino_7_8.material}
        position={[-5.185, 0.457, -4.628]}
        rotation={[0, -1.56, -Math.PI]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_35_36"
        castShadow
        receiveShadow
        geometry={nodes.camino_35_36.geometry}
        material={nodes.camino_35_36.material}
        position={[-2.628, 0.457, -3.064]}
        rotation={[0, -1.56, -Math.PI]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_51_52"
        castShadow
        receiveShadow
        geometry={nodes.camino_51_52.geometry}
        material={nodes.camino_51_52.material}
        position={[-0.003, 0.457, -1.552]}
        rotation={[0, -1.56, -Math.PI]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_42_53"
        castShadow
        receiveShadow
        geometry={nodes.camino_42_53.geometry}
        material={nodes.camino_42_53.material}
        position={[2.648, 0.457, -0.025]}
        rotation={[0, -1.56, -Math.PI]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_20_43"
        castShadow
        receiveShadow
        geometry={nodes.camino_20_43.geometry}
        material={nodes.camino_20_43.material}
        position={[5.3, 0.457, 1.503]}
        rotation={[0, -1.56, -Math.PI]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_24_25"
        castShadow
        receiveShadow
        geometry={nodes.camino_24_25.geometry}
        material={nodes.camino_24_25.material}
        position={[2.638, 0.457, 6.122]}
        rotation={[0, -1.56, -Math.PI]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_46_47"
        castShadow
        receiveShadow
        geometry={nodes.camino_46_47.geometry}
        material={nodes.camino_46_47.material}
        position={[-0.041, 0.457, 4.579]}
        rotation={[0, -1.56, -Math.PI]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_31_48"
        castShadow
        receiveShadow
        geometry={nodes.camino_31_48.geometry}
        material={nodes.camino_31_48.material}
        position={[-2.692, 0.457, 3.052]}
        rotation={[0, -1.56, -Math.PI]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_3_32"
        castShadow
        receiveShadow
        geometry={nodes.camino_3_32.geometry}
        material={nodes.camino_3_32.material}
        position={[-5.398, 0.457, 1.493]}
        rotation={[0, -1.56, -Math.PI]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_11_12"
        castShadow
        receiveShadow
        geometry={nodes.camino_11_12.geometry}
        material={nodes.camino_11_12.material}
        position={[-0.027, 0.457, -7.609]}
        rotation={[0, -1.56, -Math.PI]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_13_14"
        castShadow
        receiveShadow
        geometry={nodes.camino_13_14.geometry}
        material={nodes.camino_13_14.material}
        position={[2.624, 0.457, -6.082]}
        rotation={[0, -1.56, -Math.PI]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_15_16"
        castShadow
        receiveShadow
        geometry={nodes.camino_15_16.geometry}
        material={nodes.camino_15_16.material}
        position={[5.276, 0.457, -4.554]}
        rotation={[0, -1.56, -Math.PI]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_26_27"
        castShadow
        receiveShadow
        geometry={nodes.camino_26_27.geometry}
        material={nodes.camino_26_27.material}
        position={[-0.026, 0.457, 7.555]}
        rotation={[0, -1.56, -Math.PI]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_28_29"
        castShadow
        receiveShadow
        geometry={nodes.camino_28_29.geometry}
        material={nodes.camino_28_29.material}
        position={[-2.677, 0.457, 6.027]}
        rotation={[0, -1.56, -Math.PI]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_1_30"
        castShadow
        receiveShadow
        geometry={nodes.camino_1_30.geometry}
        material={nodes.camino_1_30.material}
        position={[-5.287, 0.457, 4.524]}
        rotation={[0, -1.56, -Math.PI]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_37_38"
        castShadow
        receiveShadow
        geometry={nodes.camino_37_38.geometry}
        material={nodes.camino_37_38.material}
        position={[0.011, 0.457, -4.547]}
        rotation={[0, -1.56, -Math.PI]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_9_10"
        castShadow
        receiveShadow
        geometry={nodes.camino_9_10.geometry}
        material={nodes.camino_9_10.material}
        position={[-2.695, 0.457, -6.106]}
        rotation={[0, -1.56, -Math.PI]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_39_40"
        castShadow
        receiveShadow
        geometry={nodes.camino_39_40.geometry}
        material={nodes.camino_39_40.material}
        position={[2.713, 0.457, -3.045]}
        rotation={[0, -1.56, -Math.PI]}
        scale={[-0.09, -0.05, -0.627]}
      />
      <mesh
        name="camino_18_41"
        castShadow
        receiveShadow
        geometry={nodes.camino_18_41.geometry}
        material={nodes.camino_18_41.material}
        position={[5.283, 0.457, -1.565]}
        rotation={[0, -1.56, -Math.PI]}
        scale={[-0.09, -0.05, -0.627]}
      />
    </group>
  )
}

useGLTF.preload('/models/catan_tablero.glb')

export default CatanMap
