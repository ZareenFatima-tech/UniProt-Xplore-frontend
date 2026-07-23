'use client';

import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { AdaptiveDpr } from '@react-three/drei';
import * as THREE from 'three';
import SceneLighting from './shared/SceneLighting';
import ParticleField from './shared/ParticleField';
import ProteinRibbon from './shared/ProteinRibbon';
import WebGLFallback from '../shared/WebGLFallback';
import useWebGL from '../../hooks/useWebGL';
import useInView from '../../hooks/useInView';
import useReducedMotion from '../../hooks/useReducedMotion';

interface MolecularFormProps {
  position: [number, number, number];
  radius: number;
  height: number;
  loops: number;
  color: string;
  speed: number;
  seed: number;
}

const MolecularForm: React.FC<MolecularFormProps> = ({
  position,
  radius,
  height,
  loops,
  color,
  speed,
  seed
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const reducedMotion = useReducedMotion();

  useFrame((state) => {
    if (!groupRef.current || reducedMotion) return;
    const time = state.clock.getElapsedTime();

    // 1. bobbing/orbit drift (sine-wave offset)
    groupRef.current.position.y = position[1] + Math.sin(time * 0.4 + seed) * 0.35;
    groupRef.current.position.x = position[0] + Math.cos(time * 0.3 + seed) * 0.25;

    // 2. Slow rotation
    groupRef.current.rotation.y = time * speed;
    groupRef.current.rotation.x = time * (speed * 0.6);
  });

  return (
    <group ref={groupRef} position={position}>
      <ProteinRibbon radius={radius} height={height} loops={loops} color={color} speed={0} />
    </group>
  );
};

const UniverseCameraRig: React.FC = () => {
  const { camera } = useThree();
  const reducedMotion = useReducedMotion();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (reducedMotion) return;
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [reducedMotion]);

  useFrame((state) => {
    if (reducedMotion) return;
    const time = state.clock.getElapsedTime();

    // 1. Slow background drift
    const targetX = Math.sin(time * 0.12) * 1.5 + mouseRef.current.x * 1.2;
    const targetY = Math.cos(time * 0.1) * 1.2 + mouseRef.current.y * 0.9;
    
    // 2. LERP camera position (< 8% target influence)
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.04);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.04);
    camera.lookAt(0, 0, -4);
  });

  return null;
};

export const UniverseScene: React.FC = () => {
  const isWebGLSupported = useWebGL();
  const [containerRef, isInView] = useInView({ threshold: 0.1 });

  // Generate 12 forms distributed in depth layers
  const forms = useMemo(() => {
    const list = [];
    const colors = ['#00796B', '#004D40', '#4A6572', '#263238'];
    for (let i = 0; i < 12; i++) {
      const z = -4 - i * 3.5;
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 14;
      
      list.push({
        position: [x, y, z] as [number, number, number],
        radius: 0.8 + Math.random() * 1.5,
        height: 2.5 + Math.random() * 4,
        loops: 2.0 + Math.random() * 2,
        color: colors[i % colors.length],
        speed: 0.05 + Math.random() * 0.1,
        seed: Math.random() * 50
      });
    }
    return list;
  }, []);

  if (!isWebGLSupported) {
    return <WebGLFallback title="Ecosystem Workspace" description="Interactive biological intelligence holotank mapping." />;
  }

  return (
    <div ref={containerRef} className="w-full h-full min-h-[500px] relative">
      <Canvas
        camera={{ position: [0, 0, 16], fov: 45 }}
        frameloop={isInView ? 'always' : 'never'}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: true
        }}
      >
        <color attach="background" args={['#E0F2F1']} />
        
        {/* Flagship dense fog mapping */}
        <fog attach="fog" args={['#E0F2F1', 10, 42]} />

        <SceneLighting />
        <UniverseCameraRig />

        {forms.map((f, idx) => (
          <MolecularForm
            key={idx}
            position={f.position}
            radius={f.radius}
            height={f.height}
            loops={f.loops}
            color={f.color}
            speed={f.speed}
            seed={f.seed}
          />
        ))}

        <ParticleField baseColor="#10B981" speedMultiplier={0.5} />

        <AdaptiveDpr />
      </Canvas>
    </div>
  );
};

export default UniverseScene;
