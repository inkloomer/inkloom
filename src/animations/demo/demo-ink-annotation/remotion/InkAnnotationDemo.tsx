import {PenLine, SearchCheck} from 'lucide-react';
import {AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame} from 'remotion';

export const InkAnnotationDemo = () => {
  const frame = useCurrentFrame();
  const trace = interpolate(frame, [48, 138], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)});
  return (
    <AbsoluteFill style={{backgroundColor: '#fbfaf6', overflow: 'hidden', color: '#252525', fontFamily: 'var(--inkloom-animation-body)'}}>
      {[185, 285, 385, 485, 585, 685, 785, 885].map((top) => <div key={top} style={{position: 'absolute', left: 70, right: 70, top, height: 1, backgroundColor: '#cfd8df'}} />)}
      <div style={{position: 'absolute', left: 150, top: 0, width: 2, height: 1080, backgroundColor: '#e7a8a2'}} />
      <Interactive.Div name="Annotation title" style={{position: 'absolute', left: 210, top: 70, fontSize: 82, fontWeight: 900, opacity: interpolate(frame, [0, 30], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}}>
        圈出真正的判断链
      </Interactive.Div>
      <div style={{position: 'absolute', left: 215, top: 250, display: 'flex', alignItems: 'center', gap: 42, fontSize: 64, fontWeight: 800}}>
        {['事实', '规范', '结论'].map((label, index) => (
          <Interactive.Div
            key={label}
            name={`Handwritten term ${label}`}
            style={{
              position: 'relative', padding: '18px 34px',
              opacity: interpolate(frame, [24 + index * 34, 48 + index * 34], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
              translate: interpolate(frame, [24 + index * 34, 48 + index * 34], ['0px 24px', '0px 0px'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
            }}
          >
            {label}
            {index === 1 ? <div style={{position: 'absolute', left: 14, right: 14, bottom: 4, height: 10, backgroundColor: '#ffd33d', opacity: 0.72}} /> : null}
          </Interactive.Div>
        ))}
      </div>
      <svg viewBox="0 0 1500 430" style={{position: 'absolute', left: 205, top: 390, width: 1510, height: 430, overflow: 'visible'}}>
        <path d="M 20 90 C 260 10, 410 180, 650 92 S 1080 20, 1450 100" fill="none" stroke="#2f6f61" strokeWidth="12" strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - trace} />
        <path d="M 1400 65 L 1455 100 L 1398 132" fill="none" stroke="#2f6f61" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" opacity={trace} />
        <ellipse cx="745" cy="250" rx="330" ry="105" fill="none" stroke="#d94343" strokeWidth="10" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - interpolate(frame, [118, 176], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})} />
      </svg>
      <Interactive.Div name="Annotation note" style={{position: 'absolute', left: 555, top: 650, width: 650, fontSize: 44, lineHeight: 1.4, rotate: '-2deg', opacity: interpolate(frame, [126, 162], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}}>
        <SearchCheck size={58} strokeWidth={1.8} style={{verticalAlign: 'middle', marginRight: 20}} />
        规范必须回应事实
      </Interactive.Div>
      <PenLine size={64} strokeWidth={1.6} style={{position: 'absolute', right: 105, bottom: 82, color: '#2f6f61'}} />
    </AbsoluteFill>
  );
};
