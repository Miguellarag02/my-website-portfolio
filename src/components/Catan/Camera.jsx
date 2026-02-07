import { useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useRef, useState } from "react"
import { CAMERA_STATES } from "../../constants/CatanStates.js"
import { easing } from "maath"
import * as THREE from "three"

const EPSILON = 0.01

const CatanCamera = ({ children, cameraState, cameraPos, cameraTarget }) => {
  const controls = useRef()

  const movingRef = useRef(false)
  const lastStateRef = useRef(cameraState)
  const [cameraIsMoving, setCameraIsMoving] = useState(false)
  const desiredPos = useRef(new THREE.Vector3())
  const desiredTarget = useRef(new THREE.Vector3())

  useFrame((state, delta) => {
    const cam = state.camera
    const ctrls = controls.current
    if (!ctrls) return
    desiredPos.current.set(...cameraPos)
    desiredTarget.current.set(...cameraTarget)

    // Detecta cambio de estado
    if (lastStateRef.current !== cameraState) {
      movingRef.current = true
    }

    // Distancias de convergencia
    const posDone = cam.position.distanceTo(desiredPos.current) < EPSILON

    const targetDone = ctrls.target.distanceTo(desiredTarget.current) < EPSILON

    if (posDone && targetDone) {
      movingRef.current = false
    }

    // Refleja solo cuando cambia
    if (cameraIsMoving !== movingRef.current) {
      setCameraIsMoving(movingRef.current)
    }

    // Animación
    if (movingRef.current) {
      easing.damp3(cam.position, cameraPos, 0.4, delta)
      easing.damp3(ctrls.target, cameraTarget, 0.2, delta)
      ctrls.update()
    }

    lastStateRef.current = cameraState
  })

  return (
    <>
      <OrbitControls
        ref={controls}
        enablePan={false}
        enableZoom={false}
        enableRotate={
          (cameraState === CAMERA_STATES.NORMAL ||
            cameraState === CAMERA_STATES.MOVED) &&
          !cameraIsMoving
        }
        rotateSpeed={0.8}
      />

      <group scale={0.8}>{children}</group>
    </>
  )
}

export default CatanCamera
