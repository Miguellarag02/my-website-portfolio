import React, { useEffect, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { Physics, RigidBody } from "@react-three/rapier"
import { TRADE_PORTS_MODELS, HEXAGON_TEXTURES_MODELS, PLAYER_COLORS, HEXAGON_TEXTURES_GRAYSCALE_MODELS } from '../../constants/CatanStates.js'
import { useAuth } from "../../context/AuthContext.jsx"

const CatanMap = ({ buildId, setBuildId, moveThief, setAllowThief, setMoveThief, gameMatch, ...props }) => {
  const { username } = useAuth();
  const { nodes, materials } = useGLTF('/models/catan_tablero_optimized.glb');
  const [hexagons, setHexagons] = useState([]);
  const [towns, setTowns] = useState([]);
  const [paths, setPaths] = useState([]);
  const [townHovered, setTownHovered] = useState(0);
  const [pathHovered, setPathHovered] = useState(0);
  const [thiefHovered, setThiefHovered] = useState(0);
  const freeBuild = (gameMatch.round == 1 || gameMatch.round == 2);

  const createTown = async (buildId, level) => {
    setBuildId(0);
    setTownHovered(0);
    const response = await fetch("/api/catan/set_town.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, buildId, level }),
    })
  }

  const createPath = async (buildId) => {
    setBuildId(0);
    setPathHovered(0);
    const response = await fetch("/api/catan/set_path.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, buildId }),
    })
  }

  const createThief = async (hexId) => {
    setMoveThief(false)
    setAllowThief(false);
    const response = await fetch("/api/catan/set_thief.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, hexId}),
    })
    const data = await response.json()
    if (!data.ok){
      setAllowThief(true);
    }
  }

  useEffect(() => {
    if (!username) return;
    const loadHexMap = async () => {
      try {
        const response = await fetch(`/api/catan/hex_map.php`);
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
        const response = await fetch(`/api/catan/town_map.php?username=${encodeURIComponent(username)}`);

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

    const interval = setInterval(() => {
      loadHexMap()
      loadTownMap()
    }, 7000)

    return () => clearInterval(interval)
  }, [username, buildId]);

  return (
    <group {...props} dispose={null}>
      {hexagons.map((hex) => (
        <React.Fragment key={hex.letter}>
          {/* Render hexagon models  */}
          <group
            name={`hexagon_${hex.letter}`}
            position={[hex.pos_x, hex.pos_y, hex.pos_z]}
            rotation={[-Math.PI, -1.048, 0]}
            scale={[0.043, 0.034, 0.043]}
            onPointerEnter={(e) => {
              if (moveThief) {
                e.stopPropagation()
                setThiefHovered(hex.id)
              }
            }}

            onPointerLeave={(e) => {
              if (moveThief){
                e.stopPropagation()
                setThiefHovered(0)
              }
            }}
            onClick={() => {
              if (moveThief) createThief(hex.id)
            }}
            raycast={moveThief ? undefined : () => null}
            >
            <mesh
              name={`hexagon_${hex.letter}_1`}
              castShadow
              receiveShadow
              geometry={nodes.hexagono001.geometry}
              material={materials['hex_base']}
            />
            <mesh
              name={`hexagon_${hex.letter}_2`}
              castShadow
              receiveShadow
              geometry={nodes.hexagono001_1.geometry}
              material={materials[`${hex.is_thief ? HEXAGON_TEXTURES_GRAYSCALE_MODELS[hex.resource_id] : HEXAGON_TEXTURES_MODELS[hex.resource_id]}`]}
            />
          </group>

          {/* Render letters models  */}
          {hex.resource_id < 6 ? (
            <mesh
              name={`letter_${hex.letter}`}
              castShadow
              receiveShadow
              geometry={nodes[`letra_${hex.letter}`].geometry}
              material={materials['letter']}
              position={[hex.letter_pos_x, hex.letter_pos_y, hex.letter_pos_z]}
              rotation={[-Math.PI, 1.554, -Math.PI]}
              scale={[0.507, 0.107, 0.507]}>
              <group name={`letter__cil_${hex.letter}`} position={[0.341, -0.355, -0.294]} scale={[0.905, 0.311, 0.905]}>
                <mesh
                  name={`letter__cil_${hex.letter}_1`}
                  castShadow
                  receiveShadow
                  geometry={nodes.Cilindro003_1.geometry}
                  material={materials[`${hex.is_thief ? 'letter_border_thief' : gameMatch.last_dice == hex.dice_number ? "letter_border_dice" : 'letter_border'}`]}
                />
                <mesh
                  name={`letter__cil_${hex.letter}_2`}
                  castShadow
                  receiveShadow
                  geometry={nodes.Cilindro003_2.geometry}
                  material={materials[`${hex.is_thief ? 'letter_base_thief' : gameMatch.last_dice == hex.dice_number ? "letter_base_dice" : 'letter_base'}`]}
                />
              </group>
            </mesh>
          ): null}

          {/* Render thiefs models  */}
            <group
              name={`thief_${hex.letter}`}
              position={[hex.thief_pos_x, hex.thief_pos_y, hex.thief_pos_z]}
              rotation={[-Math.PI / 2, 0, hex.thief_rot_z]}
              scale={25}
              visible={hex.is_thief ? true : moveThief ? true : false}
            >
              <mesh
                name={`thief_${hex.letter}_1`}
                castShadow
                receiveShadow
                geometry={nodes.Object_2001.geometry}
                material={materials["thief"]}
              >
                <meshStandardMaterial
                  color={"#353535"}
                  roughness={0.6}
                  metalness={0.1}
                  transparent
                  visible={hex.is_thief ? true : moveThief ? true : false}
                  opacity={ hex.is_thief ? 1.0 : thiefHovered == hex.id ? 0.8 : 0.0 }
                />
              </mesh>
              <mesh
                name={`thief_${hex.letter}_2`}
                castShadow
                receiveShadow
                geometry={nodes.Object_3001.geometry}
                material={materials["thief"]}
              >
                <meshStandardMaterial
                  color={"#353535"}
                  roughness={0.6}
                  metalness={0.1}
                  transparent
                  visible={hex.is_thief ? true : moveThief ? true : false}
                  opacity={ hex.is_thief ? 1.0 : thiefHovered == hex.id ? 0.8 : 0.0 }
                />
              </mesh>
              <mesh
                name={`thief_${hex.letter}_3`}
                castShadow
                receiveShadow
                geometry={nodes.Object_4001.geometry}
                material={materials["thief"]}
              >
                <meshStandardMaterial
                  color={"#353535"}
                  roughness={0.6}
                  metalness={0.1}
                  transparent
                  visible={hex.is_thief ? true : moveThief ? true : false}
                  opacity={ hex.is_thief ? 1.0 : thiefHovered == hex.id ? 0.8 : 0.0 }
                />
              </mesh>
              <mesh
                name={`thief_${hex.letter}_4`}
                castShadow
                receiveShadow
                geometry={nodes.Object_5001.geometry}
                material={materials["thief"]}
              >
                <meshStandardMaterial
                  color={"#353535"}
                  roughness={0.6}
                  metalness={0.1}
                  transparent
                  visible={hex.is_thief ? true : moveThief ? true : false}
                  opacity={ hex.is_thief ? 1.0 : thiefHovered == hex.id ? 0.8 : 0.0 }
                />
              </mesh>
              <mesh
                name={`thief_${hex.letter}_5`}
                castShadow
                receiveShadow
                geometry={nodes.Object_6001.geometry}
                material={materials["thief"]}
              >
                <meshStandardMaterial
                  color={"#353535"}
                  roughness={0.6}
                  metalness={0.1}
                  transparent
                  visible={hex.is_thief ? true : moveThief ? true : false}
                  opacity={ hex.is_thief ? 1.0 : thiefHovered == hex.id ? 0.8 : 0.0 }
                />
              </mesh>
            </group>
        </React.Fragment>
      ))}

      {/* Render towns models  */}
      {towns.map((town) => (
        (() => {
        const canBuildTown = (!town.is_builded && buildId == 2 && !town.near_to_town && (freeBuild || town.near_to_path) ) || (town.is_builded && buildId == 3 && town.username === username)
        return (
        <group
          key={`town_${town.id}`}
          name={`town_${town.id}`}
          position={[town.pos_x, town.pos_y, town.pos_z]}
          visible={town.is_builded ? true : buildId > 1 ? true : false}
        >
          {/* HITBOX (más grande) */}
          {canBuildTown && (
            <mesh
              onPointerEnter={(e) => (e.stopPropagation(), setTownHovered(town.id))}
              onPointerLeave={(e) => (e.stopPropagation(), setTownHovered(0))}
              onClick={() => createTown(town.id, buildId - 1)}
              raycast={canBuildTown ? undefined : () => null}
            >
              {/* Elige una geometría sencilla que cubra el camino */}
              <boxGeometry args={[0.9, 0.9, 0.9]} />
              <meshBasicMaterial transparent opacity={0} depthWrite={false} />
            </mesh>
          )}

          {/* MESH REAL (visual) */}
          <mesh
            geometry={nodes.Island__0001.geometry}
            rotation={[0, -0.772, 0]}
            scale={0.26}
          >
            <meshStandardMaterial
              color={PLAYER_COLORS[town.color]}
              roughness={0.6}
              metalness={0.1}
              transparent
              visible={
                town.is_builded && town.level === 1
                  ? true
                  : townHovered == town.id && buildId == 2
                    ? true
                  : false
              }
              opacity={
                town.is_builded && town.level === 1
                  ? 1.0
                  : townHovered == town.id && buildId == 2
                    ? 0.9
                  : 0.0
              }
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.city.geometry}
            position={[0, -0.2, 0]}
            rotation={[-1.575, 0, 0]}
            scale={0.03}
          >
            <meshStandardMaterial
              color={PLAYER_COLORS[town.color]}
              roughness={0.6}
              metalness={0.1}
              transparent
              opacity={
                town.is_builded && town.level === 2
                  ? 1.0
                  : townHovered == town.id && buildId == 3
                    ? 0.9
                  : 0.0
              }
            />
          </mesh>
        </group>
      )})()
      ))}

      {/* Render path models  */}
      {paths.map((path) => (
        (() => {
        const canBuildPath = !path.is_builded && buildId == 1 && (path.near_to_path || path.near_to_town)
        return (
        <group
          key={`path_${path.id}`}
          position={[path.pos_x, path.pos_y, path.pos_z]}
          rotation={[path.rot_x, path.rot_y, path.rot_z]}
          visible={path.is_builded ? true : buildId == 1 ? true : false}
        >
          {/* HITBOX (más grande) */}
          {canBuildPath && (
            <mesh
              onPointerEnter={(e) => (e.stopPropagation(), setPathHovered(path.id))}
              onPointerLeave={(e) => (e.stopPropagation(), setPathHovered(0))}
              onClick={() => createPath(path.id)}
              raycast={canBuildPath ? undefined : () => null}
            >
              {/* Elige una geometría sencilla que cubra el camino */}
              <boxGeometry args={[1.0, 1.0, 1.2]} />
              <meshBasicMaterial transparent opacity={0} depthWrite={false} />
            </mesh>
          )}

          {/* MESH REAL (visual) */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.camino_45_54.geometry}
            scale={[-0.09, -0.05, -0.8]}
          >
            <meshStandardMaterial
              color={PLAYER_COLORS[path.color]}
              roughness={0.6}
              metalness={0.1}
              transparent
              opacity={
                path.is_builded
                  ? 1.0
                  : pathHovered == path.id
                    ? 0.9
                  : 0.0
              }
            />
          </mesh>
        </group>
      )})()
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
            material={materials['port_base_1']}
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
            material={materials['water_1']}
          />
          <mesh
            name={`trade_port_${trade_port.id}_4`}
            castShadow
            receiveShadow
            geometry={nodes.puerto007_3.geometry}
            material={materials['water_2']}
          />
          <mesh
            name={`trade_port_${trade_port.id}_5`}
            castShadow
            receiveShadow
            geometry={nodes.puerto007_4.geometry}
            material={materials['port_base_2']}
          />
        </group>
      ))}

    </group>
  )
}

useGLTF.preload('/models/catan_tablero_optimized.glb')

export default CatanMap
