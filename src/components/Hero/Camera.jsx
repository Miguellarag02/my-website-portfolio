import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { easing } from "maath"
import * as THREE from "three"

const EPSILON = 0.01

const HeroCamera = ({ children, freeMovement, cameraState, setCameraIsMoving }) => {
  const groupRef = useRef()
  const target = useRef(new THREE.Vector3())

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, cameraState.pos, 0.5, delta)
    easing.damp3(state.camera.rotation, cameraState.rot, 0.8, delta)

    if (groupRef.current) {
      easing.dampE(
        groupRef.current.rotation,
        freeMovement
          ? [-state.pointer.y / 12, -state.pointer.x / 20, 0]
          : [0, 0, 0],
        0.25,
        delta
      )
    }

    target.current.set(...cameraState.pos)
    const isMoving = state.camera.position.distanceTo(target.current) > EPSILON

    setCameraIsMoving(prev => (prev !== isMoving ? isMoving : prev))
  })

  return <group ref={groupRef} scale={0.8}>{children}</group>
}

export default HeroCamera
