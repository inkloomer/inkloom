import {Circle, Cpu, Power, Zap} from 'lucide-react';
import {AbsoluteFill, Easing, interpolate, Sequence, useCurrentFrame} from 'remotion';

const CircuitTrace = ({
  x1, y1, x2, y2, delay, color = '#00d9ff',
}: {
  x1: number; y1: number; x2: number; y2: number; delay: number; color?: string;
}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(
    frame,
    [delay, delay + 40],
    [0, 1],
    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)}
  );

  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={color}
      strokeWidth="6"
      strokeLinecap="round"
      pathLength={1}
      strokeDasharray={1}
      strokeDashoffset={1 - progress}
    />
  );
};

export const StatutoryAgentCircuit = () => {
  const frame = useCurrentFrame();

  const nodes = [
    {x: 280, y: 540, label: '法律', sublabel: 'LAW SOURCE', icon: Zap, delay: 0, color: '#10b981'},
    {x: 960, y: 540, label: '法定代理人', sublabel: 'STATUTORY AGENT', icon: Cpu, delay: 50, color: '#00d9ff'},
    {x: 1640, y: 540, label: '当事人', sublabel: 'PARTY', icon: Circle, delay: 100, color: '#fbbf24'},
  ];

  return (
    <AbsoluteFill style={{backgroundColor: '#0a0e15', overflow: 'hidden', color: '#e0e7f1', fontFamily: 'Consolas, Monaco, monospace'}}>
      <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, rgba(16,185,129,0.03) 0px, transparent 1px, transparent 20px, rgba(16,185,129,0.03) 21px), repeating-linear-gradient(90deg, rgba(16,185,129,0.03) 0px, transparent 1px, transparent 20px, rgba(16,185,129,0.03) 21px)', pointerEvents: 'none'}} />

      <div style={{position: 'absolute', left: 100, top: 80, fontSize: 68, fontWeight: 900, fontFamily: 'Arial, sans-serif', color: '#00d9ff', textTransform: 'uppercase', letterSpacing: 4, opacity: interpolate(frame, [0, 25], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}}>
        法定代理 <span style={{color: '#10b981'}}>/ DIRECT LINK</span>
      </div>

      <div style={{position: 'absolute', right: 120, top: 95, fontFamily: 'Consolas, monospace', fontSize: 22, color: '#6b7280', letterSpacing: 1}}>
        CIRCUIT-08A
      </div>

      <svg viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0}}>
        <CircuitTrace x1={380} y1={540} x2={860} y2={540} delay={30} color="#10b981" />
        <CircuitTrace x1={1060} y1={540} x2={1540} y2={540} delay={80} color="#00d9ff" />

        <circle cx={620} cy={540} r={8} fill="#10b981" opacity={interpolate(frame, [50, 70], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})} />
        <circle cx={1300} cy={540} r={8} fill="#00d9ff" opacity={interpolate(frame, [100, 120], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})} />
      </svg>

      {nodes.map(({x, y, label, sublabel, icon: Icon, delay, color}, index) => {
        const nodeOpacity = interpolate(frame, [delay, delay + 30], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
        const nodeScale = interpolate(frame, [delay, delay + 35], [0.85, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)});
        const glowOpacity = interpolate(frame, [delay + 20, delay + 25, delay + 35, delay + 40], [0, 0.6, 0.6, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

        return (
          <div
            key={label}
            style={{
              position: 'absolute',
              left: x - 100,
              top: y - 100,
              width: 200,
              height: 200,
              opacity: nodeOpacity,
              scale: nodeScale,
            }}
          >
            <div style={{position: 'absolute', inset: 0, borderRadius: '50%', backgroundColor: color, opacity: glowOpacity, filter: 'blur(40px)'}} />

            <div style={{position: 'relative', width: '100%', height: '100%', borderRadius: '50%', backgroundColor: '#1a1f2e', border: `4px solid ${color}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, boxShadow: `0 0 30px ${color}40`}}>
              <Icon size={52} strokeWidth={2} color={color} />
              <div style={{fontSize: 32, fontWeight: 900, fontFamily: 'Arial, sans-serif', color: '#ffffff', textAlign: 'center', lineHeight: 1.2}}>{label}</div>
            </div>

            <div style={{position: 'absolute', left: '50%', top: 220, transform: 'translateX(-50%)', fontSize: 18, fontFamily: 'Consolas, monospace', color: '#6b7280', whiteSpace: 'nowrap', letterSpacing: 1}}>
              {sublabel}
            </div>
          </div>
        );
      })}

      <div
        style={{
          position: 'absolute',
          left: 560,
          bottom: 180,
          width: 800,
          padding: '28px 40px',
          backgroundColor: '#1a1f2e',
          border: '2px solid #10b981',
          borderRadius: 8,
          fontSize: 34,
          fontFamily: 'Arial, sans-serif',
          color: '#e0e7f1',
          textAlign: 'center',
          opacity: interpolate(frame, [130, 165], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
        }}
      >
        <Power size={38} strokeWidth={2} style={{display: 'inline-block', verticalAlign: 'middle', marginRight: 16, color: '#10b981'}} />
        法律直接赋权，无需授权环节
      </div>

      <div style={{position: 'absolute', right: 100, bottom: 100, fontSize: 20, fontFamily: 'Consolas, monospace', color: '#374151', letterSpacing: 1}}>
        PWR-DIRECT / NO AUTH REQUIRED
      </div>
    </AbsoluteFill>
  );
};
