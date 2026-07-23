'use client';

import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { AdaptiveDpr } from '@react-three/drei';
import * as THREE from 'three';
import { useScrollStore } from '../../store/scrollStore';
import SceneLighting from './shared/SceneLighting';
import WebGLFallback from '../shared/WebGLFallback';
import useWebGL from '../../hooks/useWebGL';
import useInView from '../../hooks/useInView';
import useReducedMotion from '../../hooks/useReducedMotion';

interface PipelineNodeProps {
  index: number;
  position: [number, number, number];
  color: string;
}

const PipelineNode: React.FC<PipelineNodeProps> = ({ index, position, color }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);
  const { activeStage } = useScrollStore();
  const reducedMotion = useReducedMotion();

  const isActive = activeStage === index;

  useFrame((state) => {
    if (!meshRef.current || !materialRef.current) return;
    const time = state.clock.getElapsedTime();

    // 1. Hover/Active size scaling
    const targetScale = isActive ? 1.4 : 0.95;
    const currentScale = meshRef.current.scale.x;
    const lerpedScale = THREE.MathUtils.lerp(currentScale, targetScale, 0.08);
    meshRef.current.scale.set(lerpedScale, lerpedScale, lerpedScale);

    // 2. Glowing pulse effect
    if (!reducedMotion) {
      const pulse = isActive ? 0.8 + Math.sin(time * 3.5) * 0.15 : 0.3;
      materialRef.current.opacity = pulse;
    } else {
      materialRef.current.opacity = isActive ? 0.95 : 0.35;
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.55, 12, 12]} />
        <meshBasicMaterial
          ref={materialRef}
          color={isActive ? color : '#1E2A2E'}
          transparent
          opacity={0.3}
        />
      </mesh>
      
      {/* Outer Halo wireframe ring */}
      <mesh scale={1.22}>
        <sphereGeometry args={[0.55, 6, 6]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={isActive ? 0.12 : 0.015} />
      </mesh>
    </group>
  );
};

const WorkflowCamera: React.FC = () => {
  const { scrollYProgress } = useScrollStore();
  const reducedMotion = useReducedMotion();

  useFrame((state) => {
    // Zoom path: camera moves from Z=16 down to Z=10 as scrollYProgress goes from 0 to 1
    const baseZ = THREE.MathUtils.lerp(16, 10.5, scrollYProgress);
    const baseY = Math.sin(scrollYProgress * Math.PI) * 1.5;
    
    state.camera.position.set(0, baseY, baseZ);
    state.camera.lookAt(0, 0, 0);
  });

  return null;
};

export const WorkflowScene: React.FC = () => {
  const isWebGLSupported = useWebGL();
  const [containerRef, isInView] = useInView({ threshold: 0.1 });

  // Map 8 nodes vertically/circularly in space
  const nodes = useMemo(() => {
    const list = [];
    const colors = [
      '#00796B', // Deep Teal
      '#004D40', // Dark Teal
      '#4A6572', // Slate Gray
      '#263238', // Charcoal
      '#00796B',
      '#004D40',
      '#4A6572',
      '#263238'
    ];

    for (let i = 0; i < 8; i++) {
      // Helix coordinates configuration
      const angle = (i / 8) * Math.PI * 2 * 1.2;
      const x = Math.cos(angle) * 3.5;
      const y = (i / 8 - 0.5) * 8.5;
      const z = Math.sin(angle) * 3.5;
      
      list.push({
        position: [x, y, z] as [number, number, number],
        color: colors[i]
      });
    }
    return list;
  }, []);

  // Precompute lines linking nodes
  const connectionLine = useMemo(() => {
    const pts = nodes.map(n => new THREE.Vector3(...n.position));
    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    const mat = new THREE.LineBasicMaterial({ color: '#1E2A2E', transparent: true, opacity: 0.35 });
    return new THREE.Line(geo, mat);
  }, [nodes]);

  // Clean up WebGL resources on unmount
  useEffect(() => {
    return () => {
      connectionLine.geometry.dispose();
      (connectionLine.material as THREE.Material).dispose();
    };
  }, [connectionLine]);

  if (!isWebGLSupported) {
    return <WebGLFallback title="Workflow Pipeline" description="Dynamic data-flow sequence showing AI agent reasoning steps." />;
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
        <fog attach="fog" args={['#E0F2F1', 8, 20]} />

        <SceneLighting />
        <WorkflowCamera />

        {/* Neural Network path links */}
        <primitive object={connectionLine} />

        {nodes.map((n, idx) => (
          <PipelineNode
            key={idx}
            index={idx}
            position={n.position}
            color={n.color}
          />
        ))}

        <AdaptiveDpr />
      </Canvas>
    </div>
  );
};

export default WorkflowScene;
