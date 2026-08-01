import {CheckCircle2, FileSignature, Handshake, MessageSquare, Plus, Shield, XCircle} from 'lucide-react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';

export const DelegatedAgentBadge = () => {
  const frame = useCurrentFrame();

  const modules = [
    {icon: MessageSquare, label: '程序性', granted: true, angle: 45, color: '#10b981', delay: 70},
    {icon: CheckCircle2, label: '承认请求', granted: false, angle: 135, color: '#6b7280', delay: 90},
    {icon: Handshake, label: '和解权', granted: true, angle: 225, color: '#10b981', delay: 110},
    {icon: Plus, label: '上诉权', granted: false, angle: 315, color: '#6b7280', delay: 130},
  ];

  return (
    <AbsoluteFill style={{backgroundColor: '#0f1419', overflow: 'hidden', color: '#f4f1e8', fontFamily: 'var(--inkloom-animation-body)'}}>
      <div style={{position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(16,185,129,0.08) 0%, transparent 60%)', pointerEvents: 'none'}} />

      <div
        style={{
          position: 'absolute',
          left: 120,
          top: 70,
          fontSize: 76,
          fontWeight: 700,
          color: '#10b981',
          letterSpacing: 4,
          opacity: interpolate(frame, [0, 30], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
        }}
      >
        <Shield size={74} strokeWidth={2} style={{display: 'inline-block', verticalAlign: 'middle', marginRight: 20}} />
        委托代理 / 模块印章
      </div>

      <div
        style={{
          position: 'absolute',
          right: 130,
          top: 85,
          fontSize: 26,
          fontFamily: 'var(--inkloom-animation-meta)',
          color: '#8b7355',
          letterSpacing: 2,
        }}
      >
        MODULAR · SEAL
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
          <circle cx="250" cy="250" r="180" fill="#1a1f2e" stroke="#3b82f6" strokeWidth="6" strokeDasharray="20,10" filter="drop-shadow(0 0 30px rgba(59,130,246,0.3))" />

          <path d="M 250 70 L 430 250 L 250 430 L 70 250 Z" fill="none" stroke="#475569" strokeWidth="2" strokeDasharray="8,4" opacity="0.4" />
        </svg>

        <div style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Shield size={120} strokeWidth={2.5} color="#3b82f6" />
        </div>

        <div style={{position: 'absolute', left: '50%', top: 360, transform: 'translateX(-50%)', fontSize: 44, fontWeight: 900, color: '#3b82f6', textAlign: 'center', whiteSpace: 'nowrap'}}>
          委托代理人
        </div>
        <div style={{position: 'absolute', left: '50%', top: 415, transform: 'translateX(-50%)', fontSize: 22, fontFamily: 'var(--inkloom-animation-mono)', color: '#8b7355', letterSpacing: 2}}>
          DELEGATED AGENT
        </div>
      </div>

      {modules.map(({icon: Icon, label, granted, angle, color, delay}, index) => {
        const rad = angle * Math.PI / 180;
        const startX = 960 + Math.cos(rad) * 700;
        const startY = 540 + Math.sin(rad) * 700;
        const endX = 960 + Math.cos(rad) * 320;
        const endY = 540 + Math.sin(rad) * 320;

        const moduleX = interpolate(
          frame,
          [delay, delay + 30],
          [startX, endX],
          {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)}
        );
        const moduleY = interpolate(
          frame,
          [delay, delay + 30],
          [startY, endY],
          {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)}
        );

        const moduleOpacity = granted
          ? interpolate(frame, [delay, delay + 30], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})
          : interpolate(frame, [delay, delay + 20, delay + 50], [0, 0.5, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

        const moduleScale = interpolate(
          frame,
          [delay, delay + 35],
          [0.7, 1],
          {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)}
        );

        return (
          <div
            key={label}
            style={{
              position: 'absolute',
              left: moduleX - 80,
              top: moduleY - 80,
              width: 160,
              height: 160,
              borderRadius: 16,
              backgroundColor: granted ? color : '#2d3748',
              border: `4px solid ${granted ? color : '#4a5568'}`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              opacity: moduleOpacity,
              scale: moduleScale,
              boxShadow: granted ? `0 0 20px ${color}40` : 'none',
            }}
          >
            <Icon size={56} strokeWidth={2.5} color={granted ? '#ffffff' : '#6b7280'} />
            <div style={{fontSize: 24, fontWeight: 800, color: granted ? '#ffffff' : '#6b7280', textAlign: 'center', lineHeight: 1.2}}>{label}</div>
            <div style={{position: 'absolute', top: -16, right: -16, width: 40, height: 40, borderRadius: '50%', backgroundColor: granted ? '#10b981' : '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              {granted ? <CheckCircle2 size={24} strokeWidth={3} color="#ffffff" /> : <XCircle size={24} strokeWidth={3} color="#ffffff" />}
            </div>
          </div>
        );
      })}

      <div
        style={{
          position: 'absolute',
          left: 360,
          bottom: 180,
          width: 1200,
          padding: '32px 45px',
          backgroundColor: '#1a1f2e',
          border: '3px solid #10b981',
          borderRadius: 10,
          fontSize: 38,
          fontWeight: 600,
          color: '#f4f1e8',
          textAlign: 'center',
          opacity: interpolate(frame, [150, 180], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
        }}
      >
        <FileSignature size={42} strokeWidth={2} style={{display: 'inline-block', verticalAlign: 'middle', marginRight: 18, color: '#10b981'}} />
        模块印章可拆分组装，授权哪些就装配哪些
      </div>

      <div
        style={{
          position: 'absolute',
          right: 110,
          bottom: 165,
          fontSize: 22,
          fontFamily: 'var(--inkloom-animation-meta)',
          color: '#4a3f2e',
          letterSpacing: 1,
        }}
      >
        MODULAR · CONFIGURABLE
      </div>
    </AbsoluteFill>
  );
};
