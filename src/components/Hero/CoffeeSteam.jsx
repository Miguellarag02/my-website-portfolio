import * as THREE from 'three'
import { useFrame, useLoader } from '@react-three/fiber'
import { Billboard } from '@react-three/drei'
import { useMemo, useRef } from 'react'

function SmokeParticle({ texture, x, y, z, size, speed, offset }) {
  const ref = useRef()

  useFrame((state) => {
    if (!ref.current) return

    const t = state.clock.elapsedTime * speed + offset
    const loop = t % 1

    ref.current.position.x = x + Math.sin(t * 2.2) * 0.3
    ref.current.position.y = y + Math.sin(t * 2.2) * 0.3
    ref.current.position.z = z + Math.cos(t * 1.7) * 0.3

    const s = size * (0.75 + loop * 0.8)
    ref.current.scale.set(s, s, s)

    if (ref.current.material) {
      ref.current.material.opacity = Math.max(0, 0.22 * (1 - loop))
    }
  })

  return (
    <Billboard ref={ref}>
      <mesh>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial
          map={texture}
          color="white"
          transparent
          depthWrite={false}
          opacity={0.12}
        />
      </mesh>
    </Billboard>
  )
}

export default function CoffeeSteam({size, ...props}) {
  const texture = useLoader(THREE.TextureLoader, '/textures/smoke.png')

  const particles = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 0.52,
        y: (Math.random() - 0.5) * 0.52,
        z: (Math.random() - 0.0) * 0.92,
        size: size + Math.random() * size,
        speed: 0.22 + Math.random() * 0.18,
        offset: Math.random(),
      })),
    []
  )

  return (
    <group {...props}>
      {particles.map((p) => (
        <SmokeParticle
          key={p.id}
          texture={texture}
          x={p.x}
          y={p.y}
          z={p.z}
          size={p.size}
          speed={p.speed}
          offset={p.offset}
        />
      ))}
    </group>
  )
}