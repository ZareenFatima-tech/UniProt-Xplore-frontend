import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useReducedMotion } from '../../../hooks/useReducedMotion';

interface ProteinRibbonProps {
  radius?: number;
  height?: number;
  loops?: number;
  color?: string;
  speed?: number;
  thickness?: number;
}

export const ProteinRibbon: React.FC<ProteinRibbonProps> = ({
  radius = 3.2,
  height = 8.5,
  loops = 3.5,
  color = '#00796B', // deep teal scientific glow
  speed = 0.02,
  thickness = 0.06
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  const reducedMotion = useReducedMotion();

  // 1. Generate helical fold coordinates
  const curve = useMemo(() => {
    const points = [];
    const segments = 120;

    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2 * loops;
      const x = Math.cos(angle) * radius;
      const y = (i / segments - 0.5) * height;
      const z = Math.sin(angle) * radius;
      points.push(new THREE.Vector3(x, y, z));
    }
    return new THREE.CatmullRomCurve3(points);
  }, [radius, height, loops]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // 2. Slow continuous rotation
    if (meshRef.current && !reducedMotion) {
      meshRef.current.rotation.y = time * speed;
      meshRef.current.rotation.x = Math.sin(time * 0.15) * 0.08;
    }

    // 3. Emissive breathing pulse animation
    if (materialRef.current && !reducedMotion) {
      materialRef.current.emissiveIntensity = 0.35 + Math.sin(time * 1.5) * 0.15;
    }
  });

  return (
    <mesh ref={meshRef}>
      <tubeGeometry args={[curve, 120, thickness, 8, false]} />
      <meshStandardMaterial
        ref={materialRef}
        color="#004D40"
        emissive={color}
        emissiveIntensity={0.4}
        roughness={0.2}
        metalness={0.5}
        transparent
        opacity={0.9}
        depthWrite={true}
      />
    </mesh>
  );
};

export default ProteinRibbon;
