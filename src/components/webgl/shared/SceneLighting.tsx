import React from 'react';

export const SceneLighting: React.FC = () => {
  return (
    <>
      {/* Ambient base - bright, warm seafoam tone */}
      <ambientLight color="#E0F2F1" intensity={0.8} />

      {/* Directional Key - clean white key light */}
      <directionalLight
        position={[10, 15, 10]}
        color="#FFFFFF"
        intensity={1.0}
      />

      {/* rim Light - dark teal contour glow */}
      <pointLight
        position={[-12, -8, -10]}
        color="#004D40"
        intensity={1.9}
        distance={40}
      />
    </>
  );
};

export default SceneLighting;
