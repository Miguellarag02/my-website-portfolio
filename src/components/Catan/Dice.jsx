import React, { useRef, useEffect } from "react"
import * as THREE from "three"
import { useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import { RigidBody, Physics, CuboidCollider } from "@react-three/rapier"
import { DICE_FACES } from "../../constants/CatanStates.js"

const WORLD_UP = new THREE.Vector3(0, 1, 0)
const FACE_NORMAL_TEMP = new THREE.Vector3()
const RB_QUATERNION_TEMP = new THREE.Quaternion()

function getDiceValueFromRB(rb) {
  if (!rb) return null

  const q = rb.rotation()
  RB_QUATERNION_TEMP.set(q.x, q.y, q.z, q.w)

  let bestFaceValue = null
  let bestDot = -Infinity

  for (const face of DICE_FACES) {
    FACE_NORMAL_TEMP.copy(face.normal).applyQuaternion(RB_QUATERNION_TEMP)
    const dot = FACE_NORMAL_TEMP.dot(WORLD_UP)
    if (dot > bestDot) {
      bestDot = dot
      bestFaceValue = face.value
    }
  }

  return bestFaceValue
}

const isSleepingEnough = (rb) => {
  if (rb.isSleeping()) return true
  const lv = rb.linvel()
  const av = rb.angvel()
  return (
    Math.hypot(lv.x, lv.y, lv.z) < 0.0005 &&
    Math.hypot(av.x, av.y, av.z) < 0.0005
  )
}

function Ground({ size = 20 }) {
  return (
    <RigidBody type="fixed">
        <CuboidCollider args={[size, 0.05, size]} position={[0, 0.4, 0]} />
    </RigidBody>
  )
}

function DiceBody({ position = [6, 4, 3], scale = 0.5, onRotationChange }) {
  const { nodes, materials } = useGLTF("/models/Dice.glb")
  const rb = useRef(null)
  const hasReportedResultRef = useRef(false)
  const stableFramesRef = useRef(0)
  const [px, py, pz] = position

  const launchDice = () => {
    if (!rb.current) return
    hasReportedResultRef.current = false
    stableFramesRef.current = 0
    const randomTorque = () => Math.random() * 3 - 2
    const randomSpin = () => (Math.random() * 4 + 4) * (Math.random() > 0.5 ? 1 : -1)
    const qx = Math.random() * 0.4 - 0.2
    const qy = Math.random() * 0.4 - 0.2
    const qz = Math.random() * 0.4 - 0.2
    const qw = Math.sqrt(Math.max(0, 1 - qx * qx - qy * qy - qz * qz))

    rb.current.wakeUp()
    rb.current.setTranslation({ x: px, y: py, z: pz }, true)
    rb.current.setRotation(
      {
        x: qx,
        y: qy,
        z: qz,
        w: qw,
      },
      true
    )
    rb.current.setLinvel({ x: 0, y: 0, z: 0 }, true)
    rb.current.setAngvel({ x: 0, y: 0, z: 0 }, true)

    // Menos empuje lineal y más giro para que no parezca un simple deslizamiento.
    rb.current.setLinvel({ x: -7.5, y: -0.8, z: -3.5 }, true)
    rb.current.setAngvel({ x: randomSpin(), y: randomSpin(), z: randomSpin() }, true)
    rb.current.applyTorqueImpulse(
      { x: randomTorque(), y: randomTorque(), z: randomTorque() },
      true
    )
  }

  useEffect(() => {
    let id2 = null
    const id1 = requestAnimationFrame(() => {
      id2 = requestAnimationFrame(() => {
        launchDice()
      })
    })
    return () => {
      cancelAnimationFrame(id1)
      if (id2 !== null) cancelAnimationFrame(id2)
    }
  }, [px, py, pz])

  useFrame(() => {
    if (!rb.current || !onRotationChange) return

    const isStable = isSleepingEnough(rb.current)

    if (!isStable) {
      stableFramesRef.current = 0
      hasReportedResultRef.current = false
      return
    }

    stableFramesRef.current += 1
    if (stableFramesRef.current < 8 || hasReportedResultRef.current) return

    hasReportedResultRef.current = true
    onRotationChange(getDiceValueFromRB(rb.current))
  })

  return (
    <RigidBody
      ref={rb}
      type="dynamic"
      position={position}
      canSleep
      colliders="cuboid"
      restitution={0.4}
      friction={0.55}
      linearDamping={0.2}
      angularDamping={0.05}
    >
      <group scale={scale}>
        <mesh geometry={nodes.Cube.geometry} material={materials.White} castShadow receiveShadow />
        <mesh geometry={nodes.Cube_1.geometry} material={materials.Points} castShadow receiveShadow />
      </group>
    </RigidBody>
  )
}



export default function DiceWorld({
  gravity = [0, -9.81, 0],
  renderDice,
  dicePosition = [6, 4, 3],
  withGround = true,
  diceKeyNumber = 0,
  onRotationChange,
}) {

  return (
    <Physics gravity={gravity}>
      {withGround && <Ground />}
      
      {renderDice && (
        <DiceBody position={dicePosition} key={`"dado_${diceKeyNumber}"`} onRotationChange={onRotationChange} />
      )}

    </Physics>
  )
}



useGLTF.preload("/models/Dice.glb")
