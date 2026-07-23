'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, AdaptiveDpr } from '@react-three/drei';
import SceneLighting from './shared/SceneLighting';
import ProteinRibbon from './shared/ProteinRibbon';
import ParticleField from './shared/ParticleField';
import WebGLFallback from '../shared/WebGLFallback';
import useWebGL from '../../hooks/useWebGL';
import useInView from '../../hooks/useInView';

interface ProteinVisualizerProps {
  proteinId?: string;
  showControls?: boolean;
}

export const ProteinVisualizer: React.FC<ProteinVisualizerProps> = ({
  proteinId = 'P53_HUMAN',
  showControls = true
}) => {
  const isWebGLSupported = useWebGL();
  const [containerRef, isInView] = useInView({ threshold: 0.1 });

  if (!isWebGLSupported) {
    return <WebGLFallback title={`Visualizer fallback: ${proteinId}`} description="Procedural 3D structure visualization model." />;
  }

  return (
    <div ref={containerRef} className="w-full h-full min-h-[450px] relative">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        frameloop={isInView ? 'always' : 'never'}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: true
        }}
      >
        <color attach="background" args={['#F4FBFB']} />
        <fog attach="fog" args={['#F4FBFB', 6, 18]} />

        <SceneLighting />

        {/* Central visualizer protein */}
        <ProteinRibbon radius={1.8} height={4.8} loops={3.0} speed={0.06} color="#00796B" thickness={0.08} />
        
        {/* Orbiting molecular dust */}
        <ParticleField baseColor="#00796B" speedMultiplier={0.35} />

        {showControls && (
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            maxDistance={15}
            minDistance={5}
            makeDefault
          />
        )}

        <AdaptiveDpr />
      </Canvas>
    </div>
  );
};

export default ProteinVisualizer;
