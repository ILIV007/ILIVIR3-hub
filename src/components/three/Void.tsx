import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { useMouseParallax } from '../../hooks/useMouseParallax'

function VoidParticles({ count = 2000 }) {
  const ref = useRef<THREE.Points>(null)
  const { x, y } = useMouseParallax()

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const color1 = new THREE.Color('#7c3aed')
    const color2 = new THREE.Color('#06b6d4')
    const color3 = new THREE.Color('#ec4899')

    for (let i = 0; i < count; i++) {
      const r = 1.5 + Math.random() * 1
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)

      const rand = Math.random()
      const c = rand < 0.33 ? color1 : rand < 0.66 ? color2 : color3
      col[i * 3] = c.r
      col[i * 3 + 1] = c.g
      col[i * 3 + 2] = c.b
    }
    return [pos, col]
  }, [count])

  useFrame(() => {
    if (!ref.current) return
    ref.current.rotation.y += 0.001
    ref.current.rotation.x += 0.0005

    const mouseDist = Math.sqrt(x * x + y * y)
    const glowIntensity = 1 + mouseDist * 0.5
    const material = ref.current.material as THREE.PointsMaterial
    if (material) {
      material.size = 0.03 * glowIntensity
      material.opacity = 0.6 + mouseDist * 0.2
    }
  })

  return (
    <Points ref={ref} positions={positions} colors={colors}>
      <PointMaterial
        vertexColors
        size={0.03}
        sizeAttenuation
        depthWrite={false}
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

function Singularity() {
  const meshRef = useRef<THREE.Mesh>(null)
  const { x, y } = useMouseParallax()

  useFrame(() => {
    if (!meshRef.current) return
    const distortion = 1 + (x * x + y * y) * 0.1
    meshRef.current.scale.setScalar(1 + Math.sin(Date.now() * 0.002) * 0.05 * distortion)
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshBasicMaterial color="#7c3aed" transparent opacity={0.8} />
    </mesh>
  )
}

function DistortionRings() {
  const groupRef = useRef<THREE.Group>(null)
  const { x, y } = useMouseParallax()

  useFrame(() => {
    if (!groupRef.current) return
    groupRef.current.rotation.z += 0.002
    const mouseFactor = (x * x + y * y) * 0.3
    groupRef.current.children.forEach((child, i) => {
      const mesh = child as THREE.Mesh
      const scale = 1 + mouseFactor * (i + 1) * 0.1
      mesh.scale.setScalar(scale)
    })
  })

  return (
    <group ref={groupRef}>
      {[1.2, 1.8].map((radius, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[radius, 0.008, 16, 100]} />
          <meshBasicMaterial color="#06b6d4" transparent opacity={0.3} />
        </mesh>
      ))}
    </group>
  )
}

export function Void() {
  const { parallax } = useMouseParallax()

  return (
    <group
      position={[
        parallax.x * 0.5 - 0.3,
        parallax.y * 0.5,
        0
      ]}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[2, 2, 2]} intensity={1} color="#7c3aed" />
      <pointLight position={[-2, -2, 2]} intensity={0.5} color="#06b6d4" />
      <Singularity />
      <DistortionRings />
      <VoidParticles />
    </group>
  )
}
