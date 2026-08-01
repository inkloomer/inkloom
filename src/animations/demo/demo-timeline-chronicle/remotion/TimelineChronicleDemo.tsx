import {Calendar, CheckCircle2, CircleDot, FileCheck} from 'lucide-react';
import {AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame} from 'remotion';

export const TimelineChronicleDemo = () => {
  const frame = useCurrentFrame();
  const timelinePath = interpolate(frame, [40, 120], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)});

  const milestones = [
    {left: 280, label: '起诉', date: 'D+0', icon: FileCheck},
    {left: 680, label: '立案', date: 'D+7', icon: CheckCircle2},
    {left: 1080, label: '开庭', date: 'D+30', icon: CircleDot},
    {left: 1480, label: '判决', date: 'D+90', icon: Calendar},
  ];

  return (
    <AbsoluteFill style={{backgroundColor: '#f5f1e8', overflow: 'hidden', color: '#3d3526', fontFamily: 'var(--inkloom-animation-body)'}}>
      <div style={{position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(139,117,90,0.03) 0%, transparent 50%)', pointerEvents: 'none'}} />

      <Interactive.Div name="Chronicle title" style={{position: 'absolute', left: 120, top: 80, fontSize: 76, fontWeight: 700, letterSpacing: 2, opacity: interpolate(frame, [0, 30], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}}>
        程序时间轴
      </Interactive.Div>

      <div style={{position: 'absolute', left: 240, top: 520, width: 1440, height: 6, backgroundColor: '#d4c5a9', opacity: 0.4}} />

      <svg viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0}}>
        <path
          d="M 280 520 L 1520 520"
          fill="none"
          stroke="#8b755a"
          strokeWidth="10"
          strokeLinecap="round"
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={1 - timelinePath}
        />
      </svg>

      {milestones.map(({left, label, date, icon: Icon}, index) => {
        const nodeOpacity = interpolate(frame, [40 + index * 24, 64 + index * 24], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
        const nodeScale = interpolate(frame, [40 + index * 24, 70 + index * 24], [0.7, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)});

        return (
          <Interactive.Div
            key={label}
            name={`Milestone ${label}`}
            style={{
              position: 'absolute',
              left: left - 70,
              top: 450,
              opacity: nodeOpacity,
              scale: nodeScale,
            }}
          >
            <div style={{position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18}}>
              <div style={{width: 140, height: 140, borderRadius: '50%', backgroundColor: '#c9985f', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(139,117,90,0.25)'}}>
                <Icon size={64} strokeWidth={2} color="#f5f1e8" />
              </div>
              <div style={{fontSize: 48, fontWeight: 700, color: '#3d3526'}}>{label}</div>
              <div style={{fontSize: 28, fontFamily: 'var(--inkloom-animation-meta)', color: '#8b755a', letterSpacing: 1}}>{date}</div>
            </div>
          </Interactive.Div>
        );
      })}

      <Interactive.Div
        name="Chronicle note"
        style={{
          position: 'absolute',
          left: 520,
          top: 760,
          fontSize: 36,
          color: '#6b5d47',
          opacity: interpolate(frame, [130, 170], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
        }}
      >
        每个节点承载程序性后果
      </Interactive.Div>

      <Calendar size={52} strokeWidth={1.6} style={{position: 'absolute', right: 110, bottom: 90, color: '#c9985f', opacity: 0.6}} />
    </AbsoluteFill>
  );
};
