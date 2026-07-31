import {Check, Shield, ToggleLeft, ToggleRight, User, X} from 'lucide-react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';

const AuthSwitch = ({
  x, y, label, isOn, delay,
}: {
  x: number; y: number; label: string; isOn: boolean; delay: number;
}) => {
  const frame = useCurrentFrame();
  const switchOpacity = interpolate(frame, [delay, delay + 25], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const toggleX = interpolate(frame, [delay + 10, delay + 35], [0, isOn ? 24 : 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)});

  return (
    <div
      style={{
        position: 'absolute',
        left: x - 80,
        top: y - 50,
        width: 160,
        opacity: switchOpacity,
      }}
    >
      <div style={{fontSize: 24, fontWeight: 700, color: '#9ca3af', marginBottom: 12, textAlign: 'center'}}>{label}</div>
      <div style={{position: 'relative', width: 80, height: 40, backgroundColor: isOn ? '#10b981' : '#374151', borderRadius: 20, margin: '0 auto', border: '2px solid ' + (isOn ? '#10b981' : '#6b7280')}}>
        <div style={{position: 'absolute', left: 4, top: 4, width: 28, height: 28, borderRadius: '50%', backgroundColor: '#ffffff', transform: `translateX(${toggleX}px)`}} />
      </div>
      <div style={{marginTop: 10, fontSize: 18, fontFamily: 'Consolas, monospace', color: isOn ? '#10b981' : '#ef4444', textAlign: 'center', fontWeight: 800}}>
        {isOn ? 'ON' : 'OFF'}
      </div>
    </div>
  );
};

export const DelegatedAgentCircuit = () => {
  const frame = useCurrentFrame();

  const powers = [
    {label: '程序性权利', sublabel: 'PROCEDURAL', isOn: true, delay: 50},
    {label: '承认请求', sublabel: 'ADMIT', isOn: false, delay: 65},
    {label: '和解', sublabel: 'SETTLE', isOn: true, delay: 80},
    {label: '上诉', sublabel: 'APPEAL', isOn: false, delay: 95},
  ];

  return (
    <AbsoluteFill style={{backgroundColor: '#0a0e15', overflow: 'hidden', color: '#e0e7f1', fontFamily: 'Consolas, Monaco, monospace'}}>
      <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, rgba(251,191,36,0.03) 0px, transparent 1px, transparent 20px, rgba(251,191,36,0.03) 21px), repeating-linear-gradient(90deg, rgba(251,191,36,0.03) 0px, transparent 1px, transparent 20px, rgba(251,191,36,0.03) 21px)', pointerEvents: 'none'}} />

      <div style={{position: 'absolute', left: 100, top: 80, fontSize: 68, fontWeight: 900, fontFamily: 'Arial, sans-serif', color: '#fbbf24', textTransform: 'uppercase', letterSpacing: 4, opacity: interpolate(frame, [0, 25], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}}>
        委托代理 <span style={{color: '#ef4444'}}>/ AUTH SWITCH</span>
      </div>

      <div style={{position: 'absolute', right: 120, top: 95, fontFamily: 'Consolas, monospace', fontSize: 22, color: '#6b7280', letterSpacing: 1}}>
        CIRCUIT-08B
      </div>

      <div
        style={{
          position: 'absolute',
          left: 240,
          top: 280,
          width: 180,
          height: 180,
          borderRadius: '50%',
          backgroundColor: '#1a1f2e',
          border: '4px solid #3b82f6',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          boxShadow: '0 0 30px #3b82f640',
          opacity: interpolate(frame, [10, 35], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
          scale: interpolate(frame, [10, 40], [0.85, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)}),
        }}
      >
        <User size={56} strokeWidth={2} color="#3b82f6" />
        <div style={{fontSize: 32, fontWeight: 900, fontFamily: 'Arial, sans-serif', color: '#ffffff'}}>当事人</div>
      </div>
      <div style={{position: 'absolute', left: 280, top: 480, fontSize: 18, fontFamily: 'Consolas, monospace', color: '#6b7280', letterSpacing: 1}}>PRINCIPAL</div>

      <svg viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0}}>
        <line x1={420} y1={370} x2={720} y2={370} stroke="#6b7280" strokeWidth="6" strokeDasharray="10,5" />
      </svg>

      <div
        style={{
          position: 'absolute',
          left: 720,
          top: 240,
          width: 480,
          height: 260,
          backgroundColor: '#1a1f2e',
          border: '3px solid #fbbf24',
          borderRadius: 12,
          padding: 30,
          opacity: interpolate(frame, [30, 55], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
        }}
      >
        <div style={{fontSize: 36, fontWeight: 900, fontFamily: 'Arial, sans-serif', color: '#fbbf24', marginBottom: 20, textAlign: 'center'}}>授权开关</div>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20}}>
          {powers.map(({label, isOn, delay}, index) => (
            <AuthSwitch key={label} x={120 + (index % 2) * 240} y={100 + Math.floor(index / 2) * 100} label={label} isOn={isOn} delay={delay} />
          ))}
        </div>
      </div>

      <svg viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0}}>
        <line x1={1200} y1={370} x2={1500} y2={370} stroke="#6b7280" strokeWidth="6" strokeDasharray="10,5" />
      </svg>

      <div
        style={{
          position: 'absolute',
          left: 1500,
          top: 280,
          width: 180,
          height: 180,
          borderRadius: '50%',
          backgroundColor: '#1a1f2e',
          border: '4px solid #8b5cf6',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          boxShadow: '0 0 30px #8b5cf640',
          opacity: interpolate(frame, [110, 135], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
          scale: interpolate(frame, [110, 140], [0.85, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)}),
        }}
      >
        <Shield size={56} strokeWidth={2} color="#8b5cf6" />
        <div style={{fontSize: 28, fontWeight: 900, fontFamily: 'Arial, sans-serif', color: '#ffffff', textAlign: 'center', lineHeight: 1.2}}>委托<br/>代理人</div>
      </div>
      <div style={{position: 'absolute', left: 1500, top: 480, fontSize: 18, fontFamily: 'Consolas, monospace', color: '#6b7280', letterSpacing: 1}}>DELEGATED AGENT</div>

      <div
        style={{
          position: 'absolute',
          left: 460,
          bottom: 160,
          width: 1000,
          padding: '28px 40px',
          backgroundColor: '#1a1f2e',
          border: '2px solid #ef4444',
          borderRadius: 8,
          fontSize: 34,
          fontFamily: 'Arial, sans-serif',
          color: '#e0e7f1',
          textAlign: 'center',
          opacity: interpolate(frame, [150, 180], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
        }}
      >
        <ToggleRight size={38} strokeWidth={2} style={{display: 'inline-block', verticalAlign: 'middle', marginRight: 16, color: '#ef4444'}} />
        权限取决于授权书的开关配置
      </div>

      <div style={{position: 'absolute', right: 100, bottom: 100, fontSize: 20, fontFamily: 'Consolas, monospace', color: '#374151', letterSpacing: 1}}>
        AUTH-CONFIG / SWITCH REQUIRED
      </div>
    </AbsoluteFill>
  );
};
