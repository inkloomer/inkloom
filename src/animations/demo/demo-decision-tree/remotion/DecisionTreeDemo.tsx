import {CheckCircle2, GitBranch, HelpCircle, XCircle} from 'lucide-react';
import {AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame} from 'remotion';

export const DecisionTreeDemo = () => {
  const frame = useCurrentFrame();

  const branches = [
    {x1: 960, y1: 260, x2: 640, y2: 480, delay: 50},
    {x1: 960, y1: 260, x2: 1280, y2: 480, delay: 50},
    {x1: 640, y1: 480, x2: 420, y2: 720, delay: 90},
    {x1: 640, y1: 480, x2: 860, y2: 720, delay: 90},
  ];

  const outcomes = [
    {left: 320, top: 720, label: '驳回', icon: XCircle, color: '#dc2626'},
    {left: 760, top: 720, label: '受理', icon: CheckCircle2, color: '#16a34a'},
    {left: 1180, top: 480, label: '补正', icon: HelpCircle, color: '#ca8a04'},
  ];

  return (
    <AbsoluteFill style={{backgroundColor: '#0f172a', overflow: 'hidden', color: '#f1f5f9', fontFamily: 'Arial, Microsoft YaHei, sans-serif'}}>
      <div style={{position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 50% 20%, rgba(59,130,246,0.05) 0%, transparent 60%)', pointerEvents: 'none'}} />

      <Interactive.Div name="Tree title" style={{position: 'absolute', left: 120, top: 80, fontSize: 72, fontWeight: 900, opacity: interpolate(frame, [0, 28], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}}>
        判断决策树
      </Interactive.Div>

      <Interactive.Div
        name="Root node"
        style={{
          position: 'absolute',
          left: 810,
          top: 110,
          width: 300,
          padding: '32px 40px',
          backgroundColor: '#1e293b',
          border: '3px solid #475569',
          borderRadius: 12,
          fontSize: 40,
          fontWeight: 700,
          textAlign: 'center',
          boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
          opacity: interpolate(frame, [15, 40], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
          scale: interpolate(frame, [15, 45], [0.85, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)}),
        }}
      >
        <GitBranch size={48} strokeWidth={2} style={{display: 'block', margin: '0 auto 12px'}} />
        起诉条件
      </Interactive.Div>

      <svg viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0}}>
        {branches.map(({x1, y1, x2, y2, delay}, index) => (
          <line
            key={index}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#64748b"
            strokeWidth="5"
            pathLength={1}
            strokeDasharray={1}
            strokeDashoffset={1 - interpolate(frame, [delay, delay + 35], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}
          />
        ))}
      </svg>

      <Interactive.Div
        name="Left decision"
        style={{
          position: 'absolute',
          left: 490,
          top: 380,
          width: 300,
          padding: '26px 32px',
          backgroundColor: '#334155',
          borderRadius: 8,
          fontSize: 34,
          fontWeight: 600,
          textAlign: 'center',
          opacity: interpolate(frame, [60, 85], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
        }}
      >
        有利害关系?
      </Interactive.Div>

      <Interactive.Div
        name="Right decision"
        style={{
          position: 'absolute',
          left: 1130,
          top: 380,
          width: 300,
          padding: '26px 32px',
          backgroundColor: '#334155',
          borderRadius: 8,
          fontSize: 34,
          fontWeight: 600,
          textAlign: 'center',
          opacity: interpolate(frame, [60, 85], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
        }}
      >
        材料齐全?
      </Interactive.Div>

      {outcomes.map(({left, top, label, icon: Icon, color}, index) => {
        const outcomeOpacity = interpolate(frame, [110 + index * 25, 140 + index * 25], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
        const outcomeScale = interpolate(frame, [110 + index * 25, 145 + index * 25], [0.8, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)});

        return (
          <Interactive.Div
            key={label}
            name={`Outcome ${label}`}
            style={{
              position: 'absolute',
              left,
              top,
              width: 240,
              padding: '28px 36px',
              backgroundColor: color,
              color: '#ffffff',
              borderRadius: 10,
              fontSize: 38,
              fontWeight: 800,
              textAlign: 'center',
              boxShadow: '0 8px 24px rgba(0,0,0,0.35)',
              opacity: outcomeOpacity,
              scale: outcomeScale,
            }}
          >
            <Icon size={52} strokeWidth={2.5} style={{display: 'block', margin: '0 auto 14px'}} />
            {label}
          </Interactive.Div>
        );
      })}

      <Interactive.Div
        name="Tree note"
        style={{
          position: 'absolute',
          left: 650,
          bottom: 110,
          fontSize: 36,
          color: '#94a3b8',
          opacity: interpolate(frame, [180, 210], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
        }}
      >
        每条路径通向确定的法律后果
      </Interactive.Div>

      <GitBranch size={56} strokeWidth={1.6} style={{position: 'absolute', right: 100, bottom: 95, color: '#64748b', opacity: 0.5}} />
    </AbsoluteFill>
  );
};
