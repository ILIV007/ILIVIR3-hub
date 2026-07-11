import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Wormhole — a cute animated black hole that "eats everything".
 *
 * Composition:
 *  - Central black sphere (the singularity)
 *  - Soft glowing halo around the event horizon
 *  - Two accretion-disk rings rotating at different speeds (pastel cyan + purple)
 *  - Particle field (~400 particles) spiraling inward; each particle resets to the
 *    outer edge when it gets too close to the center, giving the "eating" effect.
 *  - Distant star field in the background for depth.
 *
 * The whole thing uses additive emissive materials so it glows softly against
 * the dark page background. Colors are deliberately pastel/cute.
 */
export function Wormhole() {
  const groupRef = useRef<THREE.Group>(null);
  const disk1Ref = useRef<THREE.Mesh>(null);
  const disk2Ref = useRef<THREE.Mesh>(null);
  const haloRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // === Particles spiraling inward ===========================================
  const PARTICLE_COUNT = 420;

  const particleData = useMemo(() => {
    const data: { angle: number; radius: number; fallSpeed: number; spinSpeed: number; y: number; size: number; colorIdx: number }[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      data.push({
        angle: Math.random() * Math.PI * 2,
        radius: 1.2 + Math.random() * 4.5,
        fallSpeed: 0.15 + Math.random() * 0.45,
        spinSpeed: 0.4 + Math.random() * 1.2,
        y: (Math.random() - 0.5) * 0.6,
        size: 0.04 + Math.random() * 0.07,
        colorIdx: Math.floor(Math.random() * 3),
      });
    }
    return data;
  }, []);

  const particleGeo = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);

    // Pastel palette: cyan, purple, pink
    const palette = [
      new THREE.Color("#67e8f9"), // cyan
      new THREE.Color("#c084fc"), // purple
      new THREE.Color("#f9a8d4"), // pink
    ];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const d = particleData[i];
      positions[i * 3] = Math.cos(d.angle) * d.radius;
      positions[i * 3 + 1] = d.y;
      positions[i * 3 + 2] = Math.sin(d.angle) * d.radius;
      const c = palette[d.colorIdx];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
      sizes[i] = d.size;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    return geo;
  }, [particleData]);

  // === Background stars =====================================================
  const starsGeo = useMemo(() => {
    const count = 300;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Spherical shell far away
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const r = 12 + Math.random() * 8;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.cos(phi);
      positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  // === Animation ============================================================
  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    // Cap delta so a long pause (e.g. tab backgrounded) doesn't fling particles across the scene.
    const dt = Math.min(delta, 0.05);

    // Disk rotations
    if (disk1Ref.current) {
      disk1Ref.current.rotation.z = t * 0.6;
      disk1Ref.current.rotation.x = Math.sin(t * 0.3) * 0.05 + 0.15;
    }
    if (disk2Ref.current) {
      disk2Ref.current.rotation.z = -t * 0.4;
      disk2Ref.current.rotation.x = Math.cos(t * 0.4) * 0.05 - 0.15;
    }

    // Halo pulse
    if (haloRef.current) {
      const s = 1 + Math.sin(t * 2) * 0.08;
      haloRef.current.scale.set(s, s, s);
      const mat = haloRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.35 + Math.sin(t * 2) * 0.1;
    }

    // Particle spiral inward
    if (particlesRef.current) {
      const posAttr = particlesRef.current.geometry.getAttribute("position") as THREE.BufferAttribute;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const d = particleData[i];
        d.angle += d.spinSpeed * dt;
        d.radius -= d.fallSpeed * dt;

        // Reset when consumed by the hole
        if (d.radius < 0.35) {
          d.radius = 4 + Math.random() * 2;
          d.angle = Math.random() * Math.PI * 2;
          d.y = (Math.random() - 0.5) * 0.6;
        }

        posAttr.setX(i, Math.cos(d.angle) * d.radius);
        posAttr.setY(i, d.y * (d.radius / 4)); // squash toward plane as it falls in)
        posAttr.setZ(i, Math.sin(d.angle) * d.radius);
      }
      posAttr.needsUpdate = true;
      particlesRef.current.rotation.y = t * 0.05;
    }

    // Whole scene gentle drift
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.15) * 0.15;
      groupRef.current.rotation.x = Math.cos(t * 0.2) * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Lights — emissive materials don't strictly need lights, but a soft point light helps the rings pop */}
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 0, 0]} intensity={2} color="#c084fc" distance={6} decay={2} />
      <pointLight position={[5, 3, 5]} intensity={0.6} color="#67e8f9" />

      {/* Singularity — pure black sphere */}
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="#000000" />
      </mesh>

      {/* Event horizon glow — soft halo */}
      <mesh ref={haloRef}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.35} side={THREE.BackSide} />
      </mesh>

      {/* Outer glow */}
      <mesh>
        <sphereGeometry args={[0.95, 32, 32]} />
        <meshBasicMaterial color="#67e8f9" transparent opacity={0.12} side={THREE.BackSide} />
      </mesh>

      {/* Accretion disk — ring 1 (cyan, inner) */}
      <mesh ref={disk1Ref} rotation={[0.15, 0, 0]}>
        <torusGeometry args={[1.4, 0.06, 16, 120]} />
        <meshStandardMaterial
          color="#67e8f9"
          emissive="#22d3ee"
          emissiveIntensity={2}
          transparent
          opacity={0.75}
          roughness={0.3}
          metalness={0.6}
        />
      </mesh>

      {/* Accretion disk — ring 2 (purple, outer) */}
      <mesh ref={disk2Ref} rotation={[-0.15, 0, 0]}>
        <torusGeometry args={[2.2, 0.04, 16, 120]} />
        <meshStandardMaterial
          color="#c084fc"
          emissive="#a855f7"
          emissiveIntensity={1.5}
          transparent
          opacity={0.55}
          roughness={0.3}
          metalness={0.6}
        />
      </mesh>

      {/* Tiny sparkles ring — pink accents */}
      <mesh rotation={[0.5, 0, 0]}>
        <torusGeometry args={[1.8, 0.015, 8, 80]} />
        <meshStandardMaterial
          color="#f9a8d4"
          emissive="#ec4899"
          emissiveIntensity={2}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Spiraling particles getting eaten */}
      <points ref={particlesRef} geometry={particleGeo}>
        <pointsMaterial
          size={0.08}
          vertexColors
          transparent
          opacity={0.95}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Background stars */}
      <points geometry={starsGeo}>
        <pointsMaterial
          size={0.05}
          color="#ffffff"
          transparent
          opacity={0.5}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
    </group>
  );
}
