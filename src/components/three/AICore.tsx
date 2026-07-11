import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function AICore() {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const innerShellRef = useRef<THREE.Mesh>(null);
  const outerShellRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const nodesRef = useRef<THREE.Group>(null);
  const streamsRef = useRef<THREE.LineSegments>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  const nodesData = useMemo(() => {
    const nodes: { angle: number; radius: number; speed: number; y: number }[] = [];
    const rings = [
      { r: 1.2, y: 0, speed: 0.8 },
      { r: 1.5, y: 0.2, speed: -0.5 },
      { r: 1.8, y: -0.15, speed: 0.3 },
    ];
    rings.forEach((ring) => {
      for (let i = 0; i < 4; i++) {
        nodes.push({
          angle: (i / 4) * Math.PI * 2,
          radius: ring.r,
          speed: ring.speed,
          y: ring.y,
        });
      }
    });
    return nodes;
  }, []);

  const streamGeo = useMemo(() => {
    const positions: number[] = [];
    for (let i = 0; i < nodesData.length; i++) {
      for (let j = i + 1; j < nodesData.length; j++) {
        if (Math.random() > 0.7) {
          const n1 = nodesData[i];
          const n2 = nodesData[j];
          positions.push(
            Math.cos(n1.angle) * n1.radius, n1.y, Math.sin(n1.angle) * n1.radius,
            Math.cos(n2.angle) * n2.radius, n2.y, Math.sin(n2.angle) * n2.radius
          );
        }
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    return geo;
  }, [nodesData]);

  const particleGeo = useMemo(() => {
    const count = 200;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = 0.8 + Math.random() * 1.0;
      const y = (Math.random() - 0.5) * 0.6;
      pos[i * 3] = Math.cos(angle) * r;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = Math.sin(angle) * r;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return geo;
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.3;
      coreRef.current.rotation.x = Math.sin(t * 0.2) * 0.05;
      const pulse = 1 + Math.sin(t * 2) * 0.03;
      coreRef.current.scale.set(pulse, pulse, pulse);
    }

    if (innerShellRef.current) {
      innerShellRef.current.rotation.y = -t * 0.15;
      innerShellRef.current.rotation.x = Math.sin(t * 0.1) * 0.02;
    }
    if (outerShellRef.current) {
      outerShellRef.current.rotation.y = t * 0.08;
      outerShellRef.current.rotation.z = Math.cos(t * 0.12) * 0.03;
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = t * 0.5;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = t * 0.35;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.y = t * 0.25;
    }

    if (nodesRef.current) {
      nodesRef.current.children.forEach((child, i) => {
        const node = nodesData[i];
        const angle = node.angle + t * node.speed;
        child.position.x = Math.cos(angle) * node.radius;
        child.position.z = Math.sin(angle) * node.radius;
        child.position.y = node.y + Math.sin(t * 1.5 + i) * 0.08;
      });
    }

    if (streamsRef.current) {
      const mat = streamsRef.current.material as THREE.LineBasicMaterial;
      mat.opacity = 0.15 + Math.sin(t * 3) * 0.1;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Dynamic Light that follows mouse */}
      <pointLight 
        ref={lightRef} 
        position={[0, 2, 5]} 
        intensity={1.5} 
        color="#40e0d0" 
        distance={10}
        decay={2}
      />
      
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.9, 3]} />
        <meshStandardMaterial
          color="#00e5ff"
          emissive="#00e5ff"
          emissiveIntensity={2.5}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      <mesh ref={innerShellRef}>
        <icosahedronGeometry args={[1.15, 2]} />
        <meshStandardMaterial
          color="#00e5ff"
          emissive="#00e5ff"
          emissiveIntensity={0.8}
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>

      <mesh ref={outerShellRef}>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#22d3ee"
          emissiveIntensity={0.5}
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>

      <mesh ref={ring1Ref} rotation={[0, 0, 0]}>
        <torusGeometry args={[1.1, 0.025, 16, 100]} />
        <meshStandardMaterial
          color="#00e5ff"
          emissive="#00e5ff"
          emissiveIntensity={2}
          transparent
          opacity={0.6}
        />
      </mesh>

      <mesh ref={ring2Ref} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.3, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#22d3ee"
          emissiveIntensity={1.5}
          transparent
          opacity={0.45}
        />
      </mesh>

      <mesh ref={ring3Ref} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[1.45, 0.015, 16, 100]} />
        <meshStandardMaterial
          color="#67e8f9"
          emissive="#67e8f9"
          emissiveIntensity={1}
          transparent
          opacity={0.3}
        />
      </mesh>

      <group ref={nodesRef}>
        {nodesData.map((_, i) => (
          <mesh key={i}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive="#00e5ff"
              emissiveIntensity={3}
            />
          </mesh>
        ))}
      </group>

      <lineSegments ref={streamsRef} geometry={streamGeo}>
        <lineBasicMaterial color="#00e5ff" transparent opacity={0.15} />
      </lineSegments>

      <points ref={particlesRef} geometry={particleGeo}>
        <pointsMaterial size={0.025} color="#67e8f9" transparent opacity={0.6} sizeAttenuation />
      </points>
    </group>
  );
}
