import { useState  } from 'react'
import { useGLTF, Outlines } from '@react-three/drei'

const MyDesktop = ({ onLaptopClick, onMonitorClick, onKeyboardClick, outlineEnable, ...props }) => {
  const { nodes, materials } = useGLTF('/models/my_desktop.glb')
  const [hoverLaptop, setHoverLaptop] = useState(false)
  const [hoverMonitor, setHoverMonitor] = useState(false)
  const [hoverKeyboard, setHoverKeyboard] = useState(false)

  const handleLaptopClick = (e) => {
    e.stopPropagation()
    onLaptopClick?.()
  }

  const handleMonitorClick = (e) => {
    e.stopPropagation()
    onMonitorClick?.()
  }

  const handleKeyboardClick = (e) => {
    e.stopPropagation()
    onKeyboardClick?.()
  }


  return (
    <group {...props} dispose={null}>

      {/* Meshes from Laptop*/}
      <group 
          position={[-0.332, 3.144, -2.707]} 
          rotation={[-1.443, 0.185, 0.954]} 
          scale={4} 
          onClick={handleLaptopClick}
          onPointerOver={(e) => {
            e.stopPropagation()
            setHoverLaptop(true)
            document.body.style.cursor = "pointer"
          }}
          onPointerOut={(e) => {
            e.stopPropagation()
            setHoverLaptop(false)
            document.body.style.cursor = "default"
          }}
        >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0, 0.008]} rotation={[-Math.PI / 2, 0, 0]} scale={0.001}>
            <group position={[0.008, 7.546, -0.537]}>
              <group position={[0.008, -0.118, -0.537]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_18.geometry}
                  material={materials.Rubber}
                  position={[0.008, -0.118, -0.537]}
                />
              </group>
              <group position={[0.008, -0.118, -0.537]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials.Display_Rim}
                  position={[0.008, -0.118, -0.537]}
                />
              </group>
              <group position={[0.008, -0.118, -0.537]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials.Body}
                  position={[0.008, -0.118, -0.537]}
                >
                { outlineEnable && hoverLaptop && <Outlines thickness={2.05} color="white"/>}
                </mesh>
              </group>
              <group position={[0.008, -0.118, -0.537]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials.Connector}
                  position={[0.008, -0.118, -0.537]}
                />
              </group>
              <group position={[0.008, -0.118, -0.537]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_20.geometry}
                  material={materials.Connectors}
                  position={[0.008, -0.118, -0.537]}
                />
              </group>
              <group position={[0.008, -0.118, -0.537]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials.Keyboard}
                  position={[0.008, -0.118, -0.537]}
                />
              </group>
              <group position={[0.008, -0.118, -0.537]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.Incognito}
                  position={[0.008, -0.118, -0.537]}
                >
                  <meshBasicMaterial color="black" />
                </mesh>
              </group>
              <group position={[0.008, -0.118, -0.537]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_26.geometry}
                  material={materials.Bottom_Screws}
                  position={[0.008, -0.118, -0.537]}
                />
              </group>
              <group position={[0.008, -0.118, -0.537]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_28.geometry}
                  material={materials.Speaker}
                  position={[0.008, -0.118, -0.537]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_29.geometry}
                  material={materials.Speaker}
                  position={[0.008, -0.118, -0.537]}
                />
              </group>
              <group position={[0.008, -0.118, -0.537]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_24.geometry}
                  material={materials.Rubber}
                  position={[0.008, -0.118, -0.537]}
                />
              </group>
              <group position={[0.008, -0.118, -0.537]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials.Body}
                  position={[0.008, -0.118, -0.537]}
                >
                { outlineEnable && hoverLaptop && <Outlines thickness={2.05} color="white"/>}
                </mesh>
              </group>
              <group position={[0.008, -0.118, -0.537]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_22.geometry}
                  material={materials.Touchpad}
                  position={[0.008, -0.118, -0.537]}
                />
              </group>
            </group>
          </group>
        </group>
      </group>

      {/* Mesh from Monitor */}
      <group 
          position={[-0.907, 2.592, 0.485]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.5}
          onClick={handleMonitorClick}
          onPointerOver={(e) => {
            e.stopPropagation()
            setHoverMonitor(true)
            document.body.style.cursor = "pointer"
          }}
          onPointerOut={(e) => {
            e.stopPropagation()
            setHoverMonitor(false)
            document.body.style.cursor = "default"
          }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.실린더001.geometry}
          material={materials['매테리얼.005']}
        >
          { outlineEnable && hoverMonitor && <Outlines thickness={3.05} color="white"/>}
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.실린더001_1.geometry}
          material={materials.monitor}
        >
          <meshBasicMaterial color="black" />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.실린더001_2.geometry}
          material={materials['매테리얼.006']}
        />
      </group>

      {/* Mesh from floor */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor.geometry}
        material={materials.ground_mat}
        position={[-1.553, -0.001, -0.028]}
        scale={[0.086, 1, 0.086]}
      />

      {/* Meshes from Keyboard */}
      <group 
          position={[0, 0, 13.419]} 
          rotation={[-Math.PI / 2, 0, 0]}
          onClick={handleKeyboardClick}
          onPointerOver={(e) => {
            e.stopPropagation()
            setHoverKeyboard(true)
            document.body.style.cursor = "pointer"
          }}
          onPointerOut={(e) => {
            e.stopPropagation()
            setHoverKeyboard(false)
            document.body.style.cursor = "default"
          }}
      >
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[0, 4.009, 0]}>
            <group
              position={[412.461, -0.219, -1444.942]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane_Material001_0.geometry}
                material={materials['Material.009']}
                position={[-3.318, -1.593, 2.633]}
                rotation={[0, 0.023, Math.PI / 2]}
                scale={0.35}
              >
                { outlineEnable && hoverKeyboard && <Outlines thickness={3.05} color="white"/>}
              </mesh>
            </group>
          </group>
        </group>
      </group>

      {/* Mesh from Mug*/}
      <group
        position={[0.622, 2.769, -1.799]}
        rotation={[-Math.PI / 2, 0, 1.136]}
        scale={[0.17, 0.17, 0.21]}>
        <group position={[0, 0, -0.003]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[0, -1.048, 0]}>
            <group position={[110.563, 3.792, 0]} scale={57.663}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.mango_de_la_taza__0.geometry}
                material={materials.mango_de_la_taza__0}
                position={[0, -0.012, 0]}
              />
            </group>
            <group position={[0, -1.048, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.taza_de_cafe_Material001_0.geometry}
                material={materials['Material.015']}
                position={[0, 0, -0.003]}
              />
            </group>
          </group>
        </group>
      </group>

      {/* Meshes from Desktop Plant */}
      <group position={[0, 0, -4.721]} rotation={[-Math.PI / 2, 0, -0.215]} scale={10}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[0, -0.012, 0]}>
            <group
              position={[0, 18.624, 0]}
              rotation={[-Math.PI / 2, 0, -2.443]}
              scale={[1.432, 1.432, 1.076]}>
              <group position={[0, 0, -2.315]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder011_base_for_plant_0.geometry}
                  material={materials.base_for_plant}
                  position={[0, 0, -0.008]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder011_ear_0.geometry}
                  material={materials.material}
                  position={[0, 0, -0.008]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder011_fl_pot_0.geometry}
                  material={materials.fl_pot}
                  position={[0, 0, -0.008]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder011_leaf_0.geometry}
                  material={materials.leaf}
                  position={[0, 0, -0.008]}
                />
              </group>
            </group>
            <group
              position={[-5.575, -0.296, -0.999]}
              rotation={[-1.554, 0.186, 1.482]}
              scale={[1, 1.002, 1.072]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder016_white_ch_0.geometry}
                material={materials.white_ch}
                position={[0, -0.002, -0.009]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder016_wood_ch_0.geometry}
                material={materials.wood_ch}
                position={[0, -0.002, -0.009]}
              />
            </group>
          </group>
        </group>
      </group>

      {/* Meshes from Mouse Computer */}
      <group 
          position={[-0.081, 0.032, -0.342]} 
          rotation={[0, -0.394, 0]}
          onClick={handleKeyboardClick}
          onPointerOver={(e) => {
            e.stopPropagation()
            setHoverKeyboard(true)
            document.body.style.cursor = "pointer"
          }}
          onPointerOut={(e) => {
            e.stopPropagation()
            setHoverKeyboard(false)
            document.body.style.cursor = "default"
          }}
      >
        <group position={[0.001, 2.898, -0.5]} rotation={[-1.684, 0.295, -1.199]} scale={4}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[0, -0.018, -0.189]} rotation={[-1.257, 0, 0]}>
              <group rotation={[Math.PI / 2, 0, 0]} scale={0.001}>
                <group position={[0, -0.55, -0.001]}>
                  <group position={[0, 18.408, -0.193]} rotation={[-Math.PI / 2, 0, 0]}>
                    <group position={[0, 0.001, -0.55]}>
                      <group position={[0, 0.001, -0.55]}>
                        <mesh
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_53.geometry}
                          material={materials['g305_bottom.003']}
                          position={[0, 0.001, -0.55]}
                        />
                      </group>
                    </group>
                  </group>
                  <group position={[-0.002, 33.481, 8.885]} rotation={[-Math.PI / 2, 0, 0]}>
                    <group position={[0, 0.001, -0.55]}>
                      <group position={[0, 0.001, -0.55]}>
                        <mesh
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_45.geometry}
                          material={materials['g305_top_other.003']}
                          position={[0, 0.001, -0.55]}
                        />
                      </group>
                    </group>
                  </group>
                  <group position={[0, 2.381, -4.292]} rotation={[-Math.PI / 2, 0, 0]}>
                    <group position={[0, 0.001, -0.55]}>
                      <group position={[0, 0.001, -0.55]}>
                        <mesh
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_21.geometry}
                          material={materials['g305_top_other.003']}
                          position={[0, 0.001, -0.55]}
                        />
                      </group>
                    </group>
                  </group>
                  <group position={[0, 33.211, 16.54]} rotation={[-Math.PI / 2, 0, 0]}>
                    <group position={[0, 0.001, -0.55]}>
                      <group position={[0, 0.001, -0.55]}>
                        <mesh
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_17.geometry}
                          material={materials['g305_top_other.003']}
                          position={[0, 0.001, -0.55]}
                        />
                      </group>
                    </group>
                  </group>
                  <group position={[0, 18.432, -0.564]} rotation={[-Math.PI / 2, 0, 0]}>
                    <group position={[0, 0.001, -0.55]}>
                      <group position={[0, 0.001, -0.55]}>
                        <mesh
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_13.geometry}
                          material={materials['g305_top_other.003']}
                          position={[0, 0.001, -0.55]}
                        />
                      </group>
                    </group>
                  </group>
                  <group position={[0, 2.381, -4.292]} rotation={[-Math.PI / 2, 0, 0]}>
                    <group position={[0, 0.001, -0.55]}>
                      <group position={[0, 0.001, -0.55]}>
                        <mesh
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_25.geometry}
                          material={materials['g305_top_other.003']}
                          position={[0, 0.001, -0.55]}
                        />
                      </group>
                    </group>
                  </group>
                  <group position={[0.508, 1.425, -28.944]} rotation={[Math.PI / 2, 0, 0]}>
                    <group position={[0, -0.001, 0.55]}>
                      <group position={[0, -0.001, 0.55]}>
                        <mesh
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_49.geometry}
                          material={materials['g305_top_other.003']}
                          position={[0, -0.001, 0.55]}
                        />
                      </group>
                    </group>
                  </group>
                  <group position={[0.588, 18.432, -0.564]} rotation={[-Math.PI / 2, 0, 0]}>
                    <group position={[0, 0.001, -0.55]}>
                      <group position={[0, 0.001, -0.55]}>
                        <mesh
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_9.geometry}
                          material={materials['g305_top_other.003']}
                          position={[0, 0.001, -0.55]}
                        />
                      </group>
                    </group>
                  </group>
                  <group position={[0, 18.408, -0.193]} rotation={[-Math.PI / 2, 0, 0]}>
                    <group position={[0, 0.001, -0.55]}>
                      <group position={[0, 0.001, -0.55]}>
                        <mesh
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_37.geometry}
                          material={materials['g305_top_other.003']}
                          position={[0, 0.001, -0.55]}
                        >
                          { outlineEnable && hoverKeyboard && <Outlines thickness={3.05} color="white"/>}
                        </mesh>
                      </group>
                    </group>
                  </group>
                  <group position={[0, 18.408, -0.193]} rotation={[-Math.PI / 2, 0, 0]}>
                    <group position={[0, 0.001, -0.55]}>
                      <group position={[0, 0.001, -0.55]}>
                        <mesh
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_29001.geometry}
                          material={materials['g305_top_other.003']}
                          position={[0, 0.001, -0.55]}
                        />
                      </group>
                    </group>
                  </group>
                  <group position={[0, 18.408, -0.193]} rotation={[-Math.PI / 2, 0, 0]}>
                    <group position={[0, 0.001, -0.55]}>
                      <group position={[0, 0.001, -0.55]}>
                        <mesh
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_33.geometry}
                          material={materials['g305_top_other.003']}
                          position={[0, 0.001, -0.55]}
                        />
                      </group>
                    </group>
                  </group>
                  <group position={[0.18, 16.711, 32.946]} rotation={[-Math.PI / 2, 0, 0]}>
                    <group position={[0, 0.001, -0.55]}>
                      <group position={[0, 0.001, -0.55]}>
                        <mesh
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_41.geometry}
                          material={materials['g305_top_other.003']}
                          position={[0, 0.001, -0.55]}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>

      {/* Mesh from Laptop Support */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials['Scene_-_Root.003']}
        position={[-0.268, 2.649, -3.182]}
        rotation={[0.003, -0.606, 0]}
        scale={[0.003, 0.002, 0.003]}
      />

      {/* Mesh from desktop table */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials['Material.001']}
        position={[0, -0.002, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />

      {/* Mesh from table supports */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials['Material.002']}
        position={[0, -0.002, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />

      {/* Mesh from desk mat */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials.Material}
        position={[0.778, 2.595, 0.436]}
        scale={[0.582, 1, 1.832]}
      />

      {/* Mesh from gaming chair */}
      <group position={[2.93, -0.041, 2.294]} rotation={[Math.PI / 2, 0, -2.372]} scale={0.82}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_Cube001_1.geometry}
          material={materials['Material.012']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_Cube001_2.geometry}
          material={materials['Material.013']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/my_desktop.glb');

export default MyDesktop
