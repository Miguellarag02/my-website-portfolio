import React, { useEffect, useState } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { TRADE_PORTS_MODELS, HEXAGON_TEXTURES_MODELS, PLAYER_COLORS } from '../../constants/CatanStates.js'

const CatanMap = (props) => {
  const { nodes, materials } = useGLTF('/models/catan_tablero.glb')
  const [hexagons, setHexagons] = useState([])
  const [towns, setTowns] = useState([])
  const [paths, setPaths] = useState([])

  useEffect(() => {
    const loadHexMap = async () => {
      try {
        const response = await fetch('/api/catan/hex_map.php')
        if (!response.ok) {
          throw new Error(`Failed to load map: ${response.status}`)
        }
        const data = await response.json()
        setHexagons(Array.isArray(data) ? data : [])
      } catch (error) {
        console.error(error)
        setHexagons([])
      }
    }

    const loadTownMap = async () => {
      try {
        const response = await fetch('/api/catan/town_map.php')
        if (!response.ok) {
          throw new Error(`Failed to load map: ${response.status}`)
        }

        const data = await response.json()

        setTowns(Array.isArray(data.towns) ? data.towns : [])
        setPaths(Array.isArray(data.paths) ? data.paths : [])

      } catch (error) {
        console.error(error)
        setTowns([])
        setPaths([])
      }
    }

    loadHexMap()
    loadTownMap()
  }, []);

  // useEffect(() => {
  //   console.log("TOWNS:", towns)
  //   console.log("PATHS:", paths)
  // }, [towns, paths])


  return (
    <group {...props} dispose={null}>
      {hexagons.map((hex) => (
        <React.Fragment key={hex.letter}>

          {/* Render hexagon models  */}
          <group
            name={`hexagon_${hex.letter}`}
            position={[hex.pos_x, hex.pos_y, hex.pos_z]}
            rotation={[-Math.PI, -1.048, 0]}
            scale={[0.043, 0.034, 0.043]}>
            <mesh
              name={`hexagon_${hex.letter}_1`}
              castShadow
              receiveShadow
              geometry={nodes.hexagono001.geometry}
              material={materials['Material.007']}
            />
            <mesh
              name={`hexagon_${hex.letter}_2`}
              castShadow
              receiveShadow
              geometry={nodes.hexagono001_1.geometry}
              material={materials[HEXAGON_TEXTURES_MODELS[hex.resource_id]]}
            />
          </group>

          {/* Render letters models  */}
          {hex.resource_id < 6 ? (
            <mesh
              name={`letter_${hex.letter}`}
              castShadow
              receiveShadow
              geometry={nodes[`letra_${hex.letter}`].geometry}
              material={materials['Material.061']}
              position={[hex.letter_pos_x, hex.letter_pos_y, hex.letter_pos_z]}
              rotation={[-Math.PI, 1.554, -Math.PI]}
              scale={[0.507, 0.107, 0.507]}>
              <group name={`letter__cil_${hex.letter}`} position={[0.341, -0.355, -0.294]} scale={[0.905, 0.311, 0.905]}>
                <mesh
                  name={`letter__cil_${hex.letter}_1`}
                  castShadow
                  receiveShadow
                  geometry={nodes.Cilindro003_1.geometry}
                  material={materials['Material.059']}
                />
                <mesh
                  name={`letter__cil_${hex.letter}_2`}
                  castShadow
                  receiveShadow
                  geometry={nodes.Cilindro003_2.geometry}
                  material={materials['Material.060']}
                />
              </group>
            </mesh>
          ): null}

          {/* Render thiefs models  */}
          {hex.is_thief ? (
            <group
              name={`thief_${hex.letter}`}
              position={[hex.thief_pos_x, hex.thief_pos_y, hex.thief_pos_z]}
              rotation={[-Math.PI / 2, 0, hex.thief_rot_z]}
              scale={25}
            >
              <mesh
                name={`thief_${hex.letter}_1`}
                castShadow
                receiveShadow
                geometry={nodes.Object_2001.geometry}
                material={materials["None.001"]}
              />
              <mesh
                name={`thief_${hex.letter}_2`}
                castShadow
                receiveShadow
                geometry={nodes.Object_3001.geometry}
                material={materials["None.001"]}
              />
              <mesh
                name={`thief_${hex.letter}_3`}
                castShadow
                receiveShadow
                geometry={nodes.Object_4001.geometry}
                material={materials["None.001"]}
              />
              <mesh
                name={`thief_${hex.letter}_4`}
                castShadow
                receiveShadow
                geometry={nodes.Object_5001.geometry}
                material={materials["None.001"]}
              />
              <mesh
                name={`thief_${hex.letter}_5`}
                castShadow
                receiveShadow
                geometry={nodes.Object_6001.geometry}
                material={materials["None.001"]}
              />
            </group>
          ) : null}
        </React.Fragment>
      ))}

      {/* Render towns models  */}
      {towns.map((town) => (
        <group
          key={`town_${town.id}`}
          name={`town_${town.id}`}
          position={[town.pos_x, town.pos_y, town.pos_z]}
          rotation={[-Math.PI / 2, 0, 1.048]}
          scale={0.2}
        >
          <group
            name="2fe4cec76b0042e7a31248fb0ad97abafbx001"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <mesh
              name="Island__0001"
              castShadow
              receiveShadow
              geometry={nodes.Island__0001.geometry}
              material={materials["Scene_-_Root.001"]}
              position={[0, -0.167, 0]}
              rotation={[0, -0.772, 0]}
              scale={1.3}
            >
              <meshStandardMaterial 
                color={PLAYER_COLORS[town.color]}
                roughness={0.6}
                metalness={0.1}
              />
            </mesh>
          </group>
        </group>
      ))}

      {/* Render path models  */}
      {paths.map((path) => (
        <mesh
          key={`path_${path.from_town_id}_${path.to_town_id}`}
          name={`path_${path.from_town_id}_${path.to_town_id}`}
          castShadow
          receiveShadow
          geometry={nodes.camino_45_54.geometry}
          material={nodes.camino_45_54.material}
          position={[path.pos_x, path.pos_y, path.pos_z]}
          rotation={[path.rot_x, path.rot_y, path.rot_z]}
          scale={[-0.09, -0.05, -0.627]}
        >
          <meshStandardMaterial 
            color={PLAYER_COLORS[path.color]}
            roughness={0.6}
            metalness={0.1}
          />
        </mesh>
      ))}

      {/* Render trade ports models  */}
      {TRADE_PORTS_MODELS.map((trade_port) => (
        <group
          key={`trade_port_${trade_port.id}`}
          name={`trade_port_${trade_port.id}`}
          position={trade_port.pos}
          rotation={trade_port.rot}
          scale={[0.044, 0.034, 0.044]}>
          <mesh
            name={`trade_port_${trade_port.id}_1`}
            castShadow
            receiveShadow
            geometry={nodes.puerto007.geometry}
            material={materials['Material.043']}
          />
          <mesh
            name={`trade_port_${trade_port.id}_2`}
            castShadow
            receiveShadow
            geometry={nodes.puerto007_1.geometry}
            material={materials[trade_port.tex]}
          />
          <mesh
            name={`trade_port_${trade_port.id}_3`}
            castShadow
            receiveShadow
            geometry={nodes.puerto007_2.geometry}
            material={materials['Material.045']}
          />
          <mesh
            name={`trade_port_${trade_port.id}_4`}
            castShadow
            receiveShadow
            geometry={nodes.puerto007_3.geometry}
            material={materials['Material.046']}
          />
          <mesh
            name={`trade_port_${trade_port.id}_5`}
            castShadow
            receiveShadow
            geometry={nodes.puerto007_4.geometry}
            material={materials['Material.002']}
          />
        </group>
      ))}

    </group>
  )
}

useGLTF.preload('/models/catan_tablero.glb')

export default CatanMap
