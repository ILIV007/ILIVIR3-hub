import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { AICore } from "@components/three/AICore";
import { Void } from "@components/three/Void";
import { usePrefersReducedMotion } from "@hooks/usePrefersReducedMotion";

/**
 * Combined Hero scene — single Canvas, two models positioned on opposite sides.
 * Replaces the previous two-Canvas setup which doubled WebGL context cost.
 *
 * Hidden on small screens (the parent hides the wrapper with `hidden lg:block`)
 * to keep mobile performance smooth.
 */
export function HeroScene() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      frameloop={prefersReducedMotion ? "demand" : "always"}
      onPointerMove={(e) => {
        // Normalized -1..1 coords; we don't pass them down (kept light) but could.
        mouseRef.current = {
          x: (e.clientX / window.innerWidth) * 2 - 1,
          y: -(e.clientY / window.innerHeight) * 2 + 1,
        };
      }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#40e0d0" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />

      {/* Void — left side */}
      <group position={[-3.2, 0, 0]} scale={0.9}>
        <Void />
      </group>

      {/* AICore — right side */}
      <group position={[3, 0, 0]} scale={0.9}>
        <AICore />
      </group>
    </Canvas>
  );
}
