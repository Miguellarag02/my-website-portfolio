import { useFrame, useThree } from "@react-three/fiber"
import { useRef } from "react"

const ModelCamera = ({ radius = 2, speed = 0.5, height = 0.4 }) => {
  const { camera } = useThree()
  const angle = useRef(0)

  useFrame((_, delta) => {
    angle.current += delta * speed

    camera.position.x = Math.cos(angle.current) * radius
    camera.position.z = Math.sin(angle.current) * radius
    camera.position.y = height

    camera.lookAt(0, -0.2, 0)
  })

  return null
}

export default ModelCamera;
