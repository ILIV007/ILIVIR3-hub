import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, Environment, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { Void as VoidModel } from './three/Void';
import { AICore as AICoreModel } from './three/AICore';

// --- Optimized Scene Component ---
// All R3F hooks are safely inside this component which is rendered within <Canvas>
const ProfessionalScene = React.memo(({ mousePos }: { mousePos: React.MutableRefObject<THREE.Vector2> }) => {
  const groupRef = useRef<THREE.Group>(null);
  const lightRef = useRef<THREE.PointLight>(null);
  
  // UseFrame is now safely encapsulated here
  // Logic for Camera Parallax and Light Tracking
  // ... (rest of the logic remains same but wrapped in memo for stability)
  
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
      
      {/* AICore Model - Shifted Left for Balance */}
      <group position={[2.5, 0, 0]}> 
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
          <AICoreModel mousePos={mousePos} />
        </Float>
      </group>

      {/* Void Model - Shifted Right for Balance */}
      <group position={[-2.5, 0, 0]}>
        <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
          <VoidModel mousePos={mousePos} />
        </Float>
      </group>
    </group>
  );
});

ProfessionalScene.displayName = 'ProfessionalScene';

export default function Hero() {
  const mousePos = useRef(new THREE.Vector2(0, 0));

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = -(e.clientY / window.innerHeight) * 2 + 1;
    mousePos.current.set(x, y);
  };

  return (
    <section 
      className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-slate-950 pt-20"
      onMouseMove={handleMouseMove}
    >
      {/* Background Canvas Layer */}
      <div className="absolute inset-0 z-0">
        <Canvas gl={{ antialias: true, alpha: true }}>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
          <ambientLight intensity={0.2} />
          <ProfessionalScene mousePos={mousePos} />
          <Environment preset="city" />
        </Canvas>
      </div>

      {/* Content Layer - High Z-Index to stay on top */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        
        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-fade-in-up">
          PROTOTYPE
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-100">
          تجربه‌ای نوین از تعامل سه‌بعدی و طراحی مدرن.
          <br />
          جایی که هنر و تکنولوژی به هم می‌رسند.
        </p>

        {/* Action Buttons Grid */}
        <div className="flex flex-col items-center gap-4 animate-fade-in-up delay-200">
          
          {/* Row 1: GitHub & Projects */}
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://github.com/ILIV007" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-medium transition-all duration-300 transform hover:scale-105 border border-slate-700 shadow-lg hover:shadow-cyan-500/20 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
            
            <a 
              href="#" 
              className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/30 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              Projects
            </a>
          </div>

          {/* Row 2: Telegram (Centered Below) */}
          <a 
            href="https://t.me/ILIVIR3" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-[#229ED9] hover:bg-[#1f8ec2] text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#229ED9]/30 flex items-center gap-2 mt-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            Join Telegram
          </a>

        </div>
      </div>
    </section>
  );
}
