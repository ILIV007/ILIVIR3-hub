import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function VoidMesh() {
  const voidRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (voidRef.current) {
      voidRef.current.rotation.y = t * 0.2;
      voidRef.current.rotation.z = Math.sin(t * 0.3) * 0.2;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = t * 0.4;
      ringRef.current.rotation.y = t * 0.2;
    }
  });

  return (
    <group>
      <mesh ref={voidRef}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial color="#1a0b2e" emissive="#4c1d95" emissiveIntensity={0.5} wireframe />
      </mesh>
      <mesh ref={ringRef}>
        <torusGeometry args={[1.8, 0.02, 16, 100]} />
        <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={2} />
      </mesh>
    </group>
  );
}

function CoreMesh() {
  const coreRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  const particleGeo = useMemo(() => {
    const count = 200;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 1.5 + Math.random() * 2;
      const y = (Math.random() - 0.5) * 0.5;
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = Math.sin(angle) * radius;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return geo;
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.3;
      coreRef.current.rotation.x = Math.sin(t * 0.2) * 0.1;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = t * 0.5;
      ring1Ref.current.rotation.x = Math.PI * 0.3;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -t * 0.3;
      ring2Ref.current.rotation.x = Math.PI * 0.5;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z = t * 0.15;
      ring3Ref.current.rotation.x = Math.PI * 0.7;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.1;
    }
  });

  return (
    <group>
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={1.5} />
      </mesh>
      <mesh ref={ring1Ref}>
        <torusGeometry args={[1.0, 0.02, 16, 100]} />
        <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={2} transparent opacity={0.6} />
      </mesh>
      <mesh ref={ring2Ref}>
        <torusGeometry args={[1.3, 0.02, 16, 100]} />
        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={1.5} transparent opacity={0.4} />
      </mesh>
      <mesh ref={ring3Ref}>
        <torusGeometry args={[1.6, 0.02, 16, 100]} />
        <meshStandardMaterial color="#67e8f9" emissive="#67e8f9" emissiveIntensity={1} transparent opacity={0.3} />
      </mesh>
      <points ref={particlesRef} geometry={particleGeo}>
        <pointsMaterial size={0.03} color="#00e5ff" transparent opacity={0.8} />
      </points>
    </group>
  );
}

export function LeftEnergyCore() {
  return (
    <div className="w-full h-full min-h-[300px]">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <CoreMesh />
      </Canvas>
    </div>
  );
}

export function RightVoidCore() {
  return (
    <div className="w-full h-full min-h-[300px]">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#a855f7" />
        <VoidMesh />
      </Canvas>
    </div>
  );
}
