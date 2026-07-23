'use client';

import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { AdaptiveDpr } from '@react-three/drei';
import * as THREE from 'three';
import SceneLighting from './shared/SceneLighting';
import ParticleField from './shared/ParticleField';
import ProteinRibbon from './shared/ProteinRibbon';
import WebGLFallback from '../shared/WebGLFallback';
import useWebGL from '../../hooks/useWebGL';
import useInView from '../../hooks/useInView';
import useReducedMotion from '../../hooks/useReducedMotion';

const CameraController: React.FC = () => {
  const reducedMotion = useReducedMotion();
  
  useFrame((state) => {
    if (reducedMotion) return;
    const time = state.clock.getElapsedTime();
    // Slow camera drift
    state.camera.position.x = Math.sin(time * 0.25) * 0.6;
    state.camera.position.y = Math.cos(time * 0.2) * 0.4;
    state.camera.lookAt(0, 0, 0);
  });

  return null;
};

export const HeroScene: React.FC = () => {
  const isWebGLSupported = useWebGL();
  const [containerRef, isInView] = useInView({ threshold: 0.1 });

  if (!isWebGLSupported) {
    return <WebGLFallback title="Ecosystem Model" description="A high-performance static rendering of the protein universe." />;
  }

  return (
    <div ref={containerRef} className="w-full h-full min-h-[450px] relative">
      <Canvas
        camera={{ position: [0, 0, 14], fov: 45 }}
        frameloop={isInView ? 'always' : 'never'}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: true
        }}
        style={{ pointerEvents: 'none' }}
      >
        <color attach="background" args={['#E0F2F1']} />
        
        {/* soft fog */}
        <fog attach="fog" args={['#E0F2F1', 8, 22]} />

        <SceneLighting />
        <CameraController />
        
        {/* Core elements */}
        <ProteinRibbon radius={2.2} height={5.5} loops={2.5} speed={0.03} />
        <ParticleField baseColor="#22D3EE" speedMultiplier={0.8} />

        <AdaptiveDpr />
      </Canvas>
    </div>
  );
};

export default HeroScene;
