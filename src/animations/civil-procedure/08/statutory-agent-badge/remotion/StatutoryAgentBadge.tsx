import {Award, Crown, Scale, ShieldCheck, Sparkles, Stamp} from 'lucide-react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';

export const StatutoryAgentBadge = () => {
  const frame = useCurrentFrame();

  const rays = Array.from({length: 12}, (_, i) => ({
    angle: (i * 30) * Math.PI / 180,
    delay: 100 + i * 3,
  }));

  const powers = [
    {icon: Scale, label: '诉讼权利', angle: 0},
    {icon: ShieldCheck, label: '实体权利', angle: 90},
    {icon: Award, label: '处分权利', angle: 180},
    {icon: Sparkles, label: '程序权利', angle: 270},
  ];

  return (
    <AbsoluteFill style={{backgroundColor: '#0f1419', overflow: 'hidden', color: '#f4f1e8', fontFamily: 'Garamond, Georgia, serif'}}>
      <div style={{position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(212,175,55,0.08) 0%, transparent 60%)', pointerEvents: 'none'}} />

      <div
        style={{
          position: 'absolute',
          left: 120,
          top: 70,
          fontSize: 76,
          fontWeight: 700,
          color: '#d4af37',
          letterSpacing: 4,
          opacity: interpolate(frame, [0, 30], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
        }}
      >
        <Crown size={74} strokeWidth={2} style={{display: 'inline-block', verticalAlign: 'middle', marginRight: 20}} />
        法定代理 / 完整皇冠
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
        SOVEREIGN · SEAL
      </div>

      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: 500,
          height: 500,
          marginLeft: -250,
          marginTop: -250,
          opacity: interpolate(frame, [30, 60], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
          scale: interpolate(frame, [30, 70], [0.7, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)}),
        }}
      >
        <svg viewBox="0 0 500 500" style={{position: 'absolute', inset: 0}}>
          <circle cx="250" cy="250" r="240" fill="none" stroke="#d4af37" strokeWidth="8" opacity="0.3" />
          <circle cx="250" cy="250" r="200" fill="none" stroke="#d4af37" strokeWidth="4" opacity="0.5" />

          <circle
            cx="250"
            cy="250"
            r="180"
            fill="#1a1f2e"
            stroke="#d4af37"
            strokeWidth="6"
            filter="drop-shadow(0 0 30px rgba(212,175,55,0.4))"
          />
        </svg>

        <div style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Crown size={140} strokeWidth={2.5} color="#d4af37" />
        </div>

        <div style={{position: 'absolute', left: '50%', top: 360, transform: 'translateX(-50%)', fontSize: 48, fontWeight: 900, color: '#d4af37', textAlign: 'center', whiteSpace: 'nowrap'}}>
          法定代理人
        </div>
        <div style={{position: 'absolute', left: '50%', top: 420, transform: 'translateX(-50%)', fontSize: 24, fontFamily: 'Courier New, monospace', color: '#8b7355', letterSpacing: 2}}>
          STATUTORY AGENT
        </div>
      </div>

      <svg viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0, pointerEvents: 'none'}}>
        {rays.map(({angle, delay}, index) => {
          const rayOpacity = interpolate(frame, [delay, delay + 20], [0, 0.6], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
          const x1 = 960 + Math.cos(angle) * 280;
          const y1 = 540 + Math.sin(angle) * 280;
          const x2 = 960 + Math.cos(angle) * 450;
          const y2 = 540 + Math.sin(angle) * 450;

          return (
            <line
              key={index}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#d4af37"
              strokeWidth="3"
              opacity={rayOpacity}
            />
          );
        })}
      </svg>

      {powers.map(({icon: Icon, label, angle}, index) => {
        const rad = angle * Math.PI / 180;
        const x = 960 + Math.cos(rad) * 520 - 60;
        const y = 540 + Math.sin(rad) * 520 - 40;
        const powerOpacity = interpolate(frame, [70 + index * 15, 95 + index * 15], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

        return (
          <div
            key={label}
            style={{
              position: 'absolute',
              left: x,
              top: y,
              width: 120,
              opacity: powerOpacity,
              textAlign: 'center',
            }}
          >
            <Icon size={48} strokeWidth={2} color="#d4af37" style={{margin: '0 auto 8px', display: 'block'}} />
            <div style={{fontSize: 26, fontWeight: 700, color: '#d4af37'}}>{label}</div>
          </div>
        );
      })}

      <div
        style={{
          position: 'absolute',
          left: 460,
          bottom: 180,
          width: 1000,
          padding: '32px 45px',
          backgroundColor: '#1a1f2e',
          border: '3px solid #d4af37',
          borderRadius: 10,
          fontSize: 38,
          fontWeight: 600,
          color: '#f4f1e8',
          textAlign: 'center',
          opacity: interpolate(frame, [140, 175], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
        }}
      >
        <Stamp size={42} strokeWidth={2} style={{display: 'inline-block', verticalAlign: 'middle', marginRight: 18, color: '#d4af37'}} />
        完整皇冠代表全部权力，无需拆分授权
      </div>

      <div
        style={{
          position: 'absolute',
          right: 110,
          bottom: 165,
          fontSize: 22,
          fontFamily: 'Courier New, monospace',
          color: '#4a3f2e',
          letterSpacing: 1,
        }}
      >
        COMPLETE · INDIVISIBLE
      </div>
    </AbsoluteFill>
  );
};
