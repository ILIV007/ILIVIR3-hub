import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function GalaxyField() {
  const mesh = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const count = 5000;
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);

    const color1 = new THREE.Color("#00f0ff");
    const color2 = new THREE.Color("#b829dd");
    const color3 = new THREE.Color("#4f46e5");

    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 15;
      const spinAngle = radius * 0.5;
      const branchAngle = ((i % 3) / 3) * Math.PI * 2;
      const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.5;
      const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.5;
      const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.5;

      pos[i * 3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      pos[i * 3 + 1] = randomY;
      pos[i * 3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

      const mixedColor = color1.clone();
      mixedColor.lerp(color2, Math.random());
      mixedColor.lerp(color3, Math.random());

      cols[i * 3] = mixedColor.r;
      cols[i * 3 + 1] = mixedColor.g;
      cols[i * 3 + 2] = mixedColor.b;
    }

    return { positions: pos, colors: cols };
  }, []);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
        vertexColors
      />
    </points>
  );
}

export function Galaxy() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 4, 12], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: "transparent" }}
      >
        <GalaxyField />
      </Canvas>
    </div>
  );
}
