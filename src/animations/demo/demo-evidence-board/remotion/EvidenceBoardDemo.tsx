import {FileText, Fingerprint, Scale, UserRound} from 'lucide-react';
import {AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame} from 'remotion';

export const EvidenceBoardDemo = () => {
  const frame = useCurrentFrame();
  const cards = [
    {left: 170, top: 285, rotate: '-3deg', color: '#f0d66b', title: '事实', note: '谁做了什么', icon: UserRound},
    {left: 720, top: 190, rotate: '2deg', color: '#f7f2e7', title: '证据', note: '如何被证明', icon: Fingerprint},
    {left: 1260, top: 345, rotate: '-1deg', color: '#b8d9d0', title: '规范', note: '产生何种效果', icon: Scale},
  ];
  return (
    <AbsoluteFill style={{backgroundColor: '#262726', overflow: 'hidden', color: '#f4f0e8', fontFamily: 'Arial, Microsoft YaHei, sans-serif'}}>
      <div style={{position: 'absolute', inset: 44, border: '16px solid #111211', backgroundColor: '#3a3a36'}} />
      <Interactive.Div name="Evidence title" style={{position: 'absolute', left: 92, top: 72, fontSize: 70, fontWeight: 900, letterSpacing: 0, opacity: interpolate(frame, [0, 28], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}}>
        证据关系板
      </Interactive.Div>
      <div style={{position: 'absolute', right: 96, top: 95, display: 'flex', alignItems: 'center', gap: 14, fontFamily: 'Consolas, monospace', fontSize: 19, color: '#d9c86c'}}><FileText size={30} /> CASE TRACE / 03</div>
      <svg viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0}}>
        <path d="M 470 490 C 650 430, 760 420, 920 410" fill="none" stroke="#d8564f" strokeWidth="8" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - interpolate(frame, [65, 112], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})} />
        <path d="M 1030 455 C 1180 480, 1320 530, 1450 555" fill="none" stroke="#d8564f" strokeWidth="8" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - interpolate(frame, [102, 150], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})} />
      </svg>
      {cards.map(({left, top, rotate, color, title, note, icon: Icon}, index) => (
        <Interactive.Div
          key={title}
          name={`Pinned evidence ${title}`}
          style={{
            position: 'absolute', left, top, width: 440, height: 410, boxSizing: 'border-box', padding: 42,
            backgroundColor: color, color: '#25231e', rotate, boxShadow: '12px 16px 0 rgba(0,0,0,0.26)',
            opacity: interpolate(frame, [24 + index * 32, 52 + index * 32], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
            scale: interpolate(frame, [24 + index * 32, 58 + index * 32], [0.86, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1), output: 'perceptual-scale'}),
          }}
        >
          <div style={{position: 'absolute', left: '50%', top: 18, width: 22, height: 22, borderRadius: '50%', backgroundColor: '#d8564f', boxShadow: '2px 4px 0 rgba(0,0,0,0.25)'}} />
          <Icon size={64} strokeWidth={1.8} />
          <div style={{marginTop: 38, fontSize: 64, fontWeight: 900}}>{title}</div>
          <div style={{marginTop: 18, fontSize: 28, fontWeight: 700}}>{note}</div>
          <div style={{marginTop: 34, width: '82%', height: 4, backgroundColor: '#6e685c'}} />
        </Interactive.Div>
      ))}
      <div style={{position: 'absolute', left: 720, bottom: 85, width: 480, padding: '22px 30px', backgroundColor: '#f7f2e7', color: '#25231e', fontSize: 30, fontWeight: 900, textAlign: 'center', rotate: '1deg'}}>连接必须有证明意义</div>
    </AbsoluteFill>
  );
};
