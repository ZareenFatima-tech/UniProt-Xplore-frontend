import React from 'react';

interface WebGLFallbackProps {
  title?: string;
  description?: string;
}

export const WebGLFallback: React.FC<WebGLFallbackProps> = ({
  title = "Ecosystem Model",
  description = "A static representation of the molecular intelligence network."
}) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #05080A 0%, #0B1014 50%, #10161B 100%)',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid rgba(255, 255, 255, 0.03)',
        borderRadius: '8px',
        padding: '2rem',
        textAlign: 'center'
      }}
    >
      {/* CSS-Animated background glowing aura */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34, 211, 238, 0.12) 0%, transparent 70%)',
          filter: 'blur(30px)',
          animation: 'pulseGlow 8s infinite alternate ease-in-out'
        }}
      />

      {/* Styled inline keyframe rules */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulseGlow {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
          100% { transform: translate(-50%, -50%) scale(1.3); opacity: 1; }
        }
      `}} />

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <h4 style={{
          fontSize: '0.95rem',
          fontFamily: 'var(--font-display)',
          color: 'var(--color-accent-primary)',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          {title}
        </h4>
        <p style={{
          fontSize: '0.8rem',
          color: 'var(--color-text-secondary)',
          maxWidth: '320px',
          margin: '0 auto',
          lineHeight: 1.4
        }}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default WebGLFallback;
