import { Canvas } from "@react-three/fiber";
import { Wormhole } from "@components/three/Wormhole";
import { usePrefersReducedMotion } from "@hooks/usePrefersReducedMotion";

/**
 * Wormhole scene wrapper — handles the Canvas lifecycle safely.
 *
 * Notes on WebGL "Context Lost" warnings:
 *  - The warning is emitted by three.js when a WebGL context is lost, which can
 *    happen when the browser reclaims GPU memory (e.g. tab backgrounded, too many
 *    contexts, driver crash). It's benign in our case because R3F remounts the
 *    canvas cleanly when needed.
 *  - We set `frameloop="demand"` for reduced-motion users so no rendering happens
 *    unless the scene changes — this avoids GPU wakeups in the background.
 *  - We cap dpr at 1.5 to limit GPU memory pressure.
 *  - We use `powerPreference: "low-power"` since this is decorative, not
 *    performance-critical.
 */
export function WormholeScene() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <Canvas
      camera={{ position: [0, 1.2, 7], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "low-power",
        preserveDrawingBuffer: false,
      }}
      frameloop={prefersReducedMotion ? "demand" : "always"}
      onCreated={({ gl }) => {
        // Gracefully handle context loss — three.js will pause rendering and
        // R3F will restore the scene when the context is restored.
        const canvas = gl.domElement;
        canvas.addEventListener("webglcontextlost", (e) => {
          e.preventDefault();
        }, { once: false });
      }}
    >
      <Wormhole />
    </Canvas>
  );
}
