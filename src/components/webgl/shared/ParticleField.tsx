import React, { useRef, useMemo, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useReducedMotion } from '../../../hooks/useReducedMotion';

interface ParticleFieldProps {
  baseColor?: string;
  speedMultiplier?: number;
}

export const ParticleField: React.FC<ParticleFieldProps> = ({
  baseColor = '#00796B', // deep teal accent
  speedMultiplier = 1.0
}) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const reducedMotion = useReducedMotion();
  const [particleCount, setParticleCount] = useState<number>(800);

  // 1. Adaptive particle count matching device limits
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setParticleCount(450); // Mobile: 300-600
      } else if (w < 1024) {
        setParticleCount(950); // Tablet: 800-1200
      } else {
        setParticleCount(1800); // Desktop: 1500-2500
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  // 2. Precompute particle coordinates spread across depth layers
  const particles = useMemo(() => {
    const pts = [];
    const colorChoices = [baseColor, '#004D40', '#4A6572']; // deep teal, dark teal, slate gray

    for (let i = 0; i < 2500; i++) { // pre-generate max allocation coordinates
      const x = (Math.random() - 0.5) * 35;
      const y = (Math.random() - 0.5) * 28;
      const z = (Math.random() - 0.5) * 32 - 4;

      const size = 0.015 + Math.random() * 0.04;
      const speed = (0.05 + Math.random() * 0.1) * speedMultiplier;
      const noiseSeed = Math.random() * 100;
      
      const randColor = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      const col = new THREE.Color(randColor);

      pts.push({ x, y, z, size, speed, noiseSeed, color: col });
    }
    return pts;
  }, [baseColor, speedMultiplier]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();

    for (let i = 0; i < particleCount; i++) {
      const p = particles[i];
      let cy = p.y;
      let cx = p.x;

      if (!reducedMotion) {
        // Slow sinusoidal vertical drift
        cy += Math.sin(time * p.speed + p.noiseSeed) * 0.2;
        cx += Math.cos(time * (p.speed * 0.8) + p.noiseSeed) * 0.1;
      }

      dummy.position.set(cx, cy, p.z);
      dummy.scale.set(p.size, p.size, p.size);
      dummy.updateMatrix();

      meshRef.current.setMatrixAt(i, dummy.matrix);
      meshRef.current.setColorAt(i, p.color);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) {
      meshRef.current.instanceColor.needsUpdate = true;
    }
  });

  return (
    <instancedMesh
      ref={meshRef}
      args={[new THREE.SphereGeometry(1, 4, 4), new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.65 }), particleCount]}
    />
  );
};

export default ParticleField;
