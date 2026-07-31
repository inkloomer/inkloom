import {Crown, Drama, Hand, User} from 'lucide-react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';

export const StatutoryAgentStage = () => {
  const frame = useCurrentFrame();

  const stringPositions = [
    {x1: 960, y1: 280, x2: 880, y2: 480},
    {x1: 960, y1: 280, x2: 1040, y2: 480},
  ];

  return (
    <AbsoluteFill style={{backgroundColor: '#1a1412', overflow: 'hidden', color: '#f5f1e8', fontFamily: 'Garamond, Georgia, serif'}}>
      <div style={{position: 'absolute', left: 0, right: 0, top: 0, height: 200, background: 'linear-gradient(180deg, #3d1e1e 0%, #1a1412 100%)', borderBottom: '4px solid #8b4513'}} />

      <div style={{position: 'absolute', left: 0, right: 0, bottom: 0, height: 140, backgroundColor: '#2d1810', borderTop: '6px solid #654321', boxShadow: '0 -4px 20px rgba(0,0,0,0.6)'}} />

      <div
        style={{
          position: 'absolute',
          left: 120,
          top: 70,
          fontSize: 76,
          fontWeight: 700,
          color: '#d4af37',
          letterSpacing: 3,
          opacity: interpolate(frame, [0, 30], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
        }}
      >
        <Drama size={72} strokeWidth={2} style={{display: 'inline-block', verticalAlign: 'middle', marginRight: 20}} />
        法定代理 / 幕后操控
      </div>

      <div
        style={{
          position: 'absolute',
          right: 130,
          top: 85,
          fontSize: 26,
          fontFamily: 'Courier New, monospace',
          color: '#8b7355',
          letterSpacing: 2,
        }}
      >
        ACT I · SCENE A
      </div>

      <div
        style={{
          position: 'absolute',
          left: 860,
          top: 180,
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 30%, #ffd700, #d4af37)',
          opacity: interpolate(frame, [20, 50], [0, 0.15], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
          filter: 'blur(60px)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: 810,
          top: 130,
          width: 300,
          padding: '32px 40px',
          backgroundColor: '#2d1810',
          border: '3px solid #8b4513',
          borderRadius: 8,
          textAlign: 'center',
          opacity: interpolate(frame, [35, 60], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
          scale: interpolate(frame, [35, 65], [0.9, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)}),
        }}
      >
        <Crown size={64} strokeWidth={2} color="#d4af37" style={{margin: '0 auto 16px'}} />
        <div style={{fontSize: 42, fontWeight: 700, color: '#d4af37', marginBottom: 8}}>法定代理人</div>
        <div style={{fontSize: 22, color: '#a0826d', fontFamily: 'Courier New, monospace', letterSpacing: 1}}>PUPPET MASTER</div>
      </div>

      <svg viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0}}>
        {stringPositions.map(({x1, y1, x2, y2}, index) => {
          const stringProgress = interpolate(
            frame,
            [65 + index * 5, 90 + index * 5],
            [0, 1],
            {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)}
          );
          return (
            <line
              key={index}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#c0c0c0"
              strokeWidth="3"
              strokeDasharray="8,4"
              pathLength={1}
              strokeDashoffset={1 - stringProgress}
              opacity={0.7}
            />
          );
        })}
      </svg>

      <div
        style={{
          position: 'absolute',
          left: 810,
          top: 480,
          width: 300,
          height: 320,
          backgroundColor: '#3d2a20',
          border: '4px solid #654321',
          borderRadius: 12,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 16,
          boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
          opacity: interpolate(frame, [95, 125], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
          scale: interpolate(frame, [95, 130], [0.85, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)}),
        }}
      >
        <User size={80} strokeWidth={1.8} color="#e8d4b8" />
        <div style={{fontSize: 48, fontWeight: 700, color: '#e8d4b8'}}>当事人</div>
        <div style={{fontSize: 24, color: '#a0826d', fontFamily: 'Courier New, monospace', letterSpacing: 1}}>THE PUPPET</div>
        <div style={{marginTop: 8, fontSize: 26, color: '#8b7355', textAlign: 'center', lineHeight: 1.4}}>
          被代理出庭<br/>无独立行为
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 420,
          bottom: 200,
          width: 1080,
          padding: '32px 45px',
          backgroundColor: '#2d1810',
          border: '3px solid #d4af37',
          borderRadius: 10,
          fontSize: 38,
          fontWeight: 600,
          color: '#f5f1e8',
          textAlign: 'center',
          opacity: interpolate(frame, [140, 175], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
        }}
      >
        <Hand size={42} strokeWidth={2} style={{display: 'inline-block', verticalAlign: 'middle', marginRight: 18, color: '#d4af37'}} />
        法定代理人在幕后操控全部诉讼行为
      </div>

      <div
        style={{
          position: 'absolute',
          right: 110,
          bottom: 165,
          fontSize: 22,
          fontFamily: 'Courier New, monospace',
          color: '#654321',
          letterSpacing: 1,
        }}
      >
        FULL CONTROL / NO AUTH
      </div>
    </AbsoluteFill>
  );
};
