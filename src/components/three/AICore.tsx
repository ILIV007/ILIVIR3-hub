import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useMouseParallax } from '../../hooks/useMouseParallax'

function CoreRings() {
  const groupRef = useRef<THREE.Group>(null)
  const { mouse } = useMouseParallax()

  // FIX #5: torus args adjusted for better fit
  const rings = useMemo(() => [
    { radius: 1.8, tube: 0.012, color: '#7c3aed', speed: 0.3, axis: [0, 1, 0] as [number, number, number] },
    { radius: 1.5, tube: 0.01, color: '#06b6d4', speed: -0.5, axis: [1, 0, 0] as [number, number, number] },
    { radius: 1.2, tube: 0.008, color: '#ec4899', speed: 0.4, axis: [0, 0, 1] as [number, number, number] },
    { radius: 0.9, tube: 0.006, color: '#7c3aed', speed: -0.6, axis: [1, 1, 0] as [number, number, number] },
  ], [])

  useFrame((state, delta) => {
    if (!groupRef.current) return
    groupRef.current.children.forEach((child, i) => {
      const mesh = child as THREE.Mesh
      mesh.rotation.x += delta * rings[i].speed * 0.5
      mesh.rotation.y += delta * rings[i].speed * 0.3
    })
  })

  return (
    <group ref={groupRef}>
      {rings.map((ring, i) => (
        <mesh key={i} rotation={ring.axis.map(a => a * Math.PI / 4) as [number, number, number]}>
          <torusGeometry args={[ring.radius, ring.tube, 16, 100]} />
          <meshBasicMaterial color={ring.color} transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  )
}

function CoreSphere() {
  const meshRef = useRef<THREE.Mesh>(null)
  const { mouse } = useMouseParallax()

  useFrame((state, delta) => {
    if (!meshRef.current) return
    // Idle: gentle pulse
    const pulse = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.08
    meshRef.current.scale.setScalar(pulse)

    // FIX: Camera follow effect via subtle position shift (not model rotation)
    // The model stays fixed, only position shifts slightly with mouse
    meshRef.current.position.x = mouse.x * 0.05
    meshRef.current.position.y = mouse.y * 0.05
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.4, 32, 32]} />
      <meshBasicMaterial color="#7c3aed" transparent opacity={0.9} />
    </mesh>
  )
}

function LightTracker() {
  const lightRef = useRef<THREE.PointLight>(null)
  const { mouseWorld } = useMouseParallax()

  useFrame((state, delta) => {
    if (!lightRef.current) return
    // FIX: Light follows mouse with smooth damping (virtual light tracking)
    lightRef.current.position.x += (mouseWorld.x * 3 - lightRef.current.position.x) * 0.05
    lightRef.current.position.y += (mouseWorld.y * 3 - lightRef.current.position.y) * 0.05
    lightRef.current.position.z = 2 + Math.sin(state.clock.elapsedTime) * 0.5
  })

  return (
    <pointLight
      ref={lightRef}
      color="#06b6d4"
      intensity={2}
      distance={8}
      decay={2}
    />
  )
}

export function AICore() {
  const { parallax } = useMouseParallax()

  return (
    <group
      position={[
        parallax.x * 0.3 + 0.3, // FIX: Shift 20px (~0.3 units) to the right
        parallax.y * 0.3,
        0
      ]}
    >
      <ambientLight intensity={0.15} />
      <LightTracker />
      <pointLight position={[-2, 2, 3]} intensity={0.5} color="#ec4899" />
      <CoreSphere />
      <CoreRings />
    </group>
  )
}
