import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface VoidProps {
  mousePos?: React.MutableRefObject<THREE.Vector2>;
}

export function Void({ mousePos }: VoidProps) {
  const groupRef = useRef<THREE.Group>(null);
  const knotRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const swarmRef = useRef<THREE.Points>(null);
  const dustRef = useRef<THREE.Points>(null);
  
  const swarmGeo = useMemo(() => {
    const count = 1500;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = 0.25 + Math.random() * 0.5;
      const y = (Math.random() - 0.5) * 0.35;
      pos[i * 3] = Math.cos(angle) * r;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = Math.sin(angle) * r;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return geo;
  }, []);

  const dustGeo = useMemo(() => {
    const count = 400;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const r = 0.9 + Math.random() * 0.35;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.cos(phi);
      pos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return geo;
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    // Mouse Reaction: Distortion & Glow
    if (mousePos && groupRef.current) {
       const dist = Math.sqrt(
         Math.pow(mousePos.current.x, 2) + Math.pow(mousePos.current.y, 2)
       );
       // Subtle reaction to mouse proximity
       const intensity = Math.max(0, 1 - dist * 0.5); 
       groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, mousePos.current.x * 0.1, delta * 2);
       groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mousePos.current.y * 0.1, delta * 2);
       
       if(swarmRef.current) {
         const mat = swarmRef.current.material as THREE.PointsMaterial;
         mat.size = 0.02 + intensity * 0.03;
         mat.opacity = 0.4 + Math.sin(t * 2) * 0.2 + intensity * 0.3;
       }
    }

    if (knotRef.current) {
      knotRef.current.rotation.x = t * 0.15;
      knotRef.current.rotation.y = t * 0.25;
      const scale = 1 + Math.sin(t * 1.5) * 0.08;
      knotRef.current.scale.set(scale, scale, scale);
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = t * 0.3;
      ring1Ref.current.rotation.x = Math.sin(t * 0.5) * 0.15;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = -t * 0.2;
      ring2Ref.current.rotation.y = Math.cos(t * 0.4) * 0.2;
    }

    if (swarmRef.current && !mousePos) {
      // Fallback animation if no mouse prop
      swarmRef.current.rotation.y = t * 0.03;
      const mat = swarmRef.current.material as THREE.PointsMaterial;
      mat.opacity = 0.4 + Math.sin(t * 2) * 0.2;
    }

    if (dustRef.current) {
      dustRef.current.rotation.x = t * 0.01;
      dustRef.current.rotation.y = t * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={knotRef}>
        <torusKnotGeometry args={[0.65, 0.17, 128, 16, 2, 3]} />
        <meshStandardMaterial
          color="#1a0b2e"
          emissive="#4c1d95"
          emissiveIntensity={1.5}
          wireframe
          transparent
          opacity={0.6}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshBasicMaterial color="#4c1d95" transparent opacity={0.08} side={THREE.BackSide} />
      </mesh>

      <mesh ref={ring1Ref}>
        <torusGeometry args={[1, 0.035, 16, 100]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={2}
          transparent
          opacity={0.5}
        />
      </mesh>

      <mesh ref={ring2Ref} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.0, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#c084fc"
          emissive="#c084fc"
          emissiveIntensity={1.5}
          transparent
          opacity={0.35}
        />
      </mesh>

      <points ref={swarmRef} geometry={swarmGeo}>
        <pointsMaterial size={0.02} color="#a855f7" transparent opacity={0.4} sizeAttenuation />
      </points>

      <points ref={dustRef} geometry={dustGeo}>
        <pointsMaterial size={0.015} color="#6366f1" transparent opacity={0.25} sizeAttenuation />
      </points>
    </group>
  );
}
