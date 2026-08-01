import {ArrowUpRight, Circle, Triangle} from 'lucide-react';
import {AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame} from 'remotion';

export const ConstructivistGeometryDemo = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{backgroundColor: '#f1eee5', overflow: 'hidden', color: '#0a0a0a', fontFamily: 'var(--inkloom-animation-body)'}}>
      <div style={{position: 'absolute', left: -120, top: 560, width: 900, height: 250, backgroundColor: '#e3322a', rotate: '-18deg'}} />
      <div style={{position: 'absolute', right: -80, top: 70, width: 760, height: 210, backgroundColor: '#2148c0', rotate: '12deg'}} />
      <Interactive.Div
        name="Constructivist black axis"
        style={{
          position: 'absolute', left: 875, top: -100, width: 150, height: 1300, backgroundColor: '#0a0a0a', rotate: '28deg',
          translate: interpolate(frame, [0, 36], ['0px -1250px', '0px 0px'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)}),
        }}
      />
      <Interactive.Div name="Constructivist title" style={{position: 'absolute', left: 94, top: 80, width: 720, fontSize: 96, lineHeight: 0.92, letterSpacing: 0, opacity: interpolate(frame, [18, 44], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}}>
        法律判断<br />三段构成
      </Interactive.Div>
      {[
        {left: 150, top: 515, bg: '#f1eee5', color: '#0a0a0a', label: '事实', icon: Circle},
        {left: 720, top: 390, bg: '#e3322a', color: '#ffffff', label: '规范', icon: Triangle},
        {left: 1260, top: 570, bg: '#2148c0', color: '#ffffff', label: '结论', icon: ArrowUpRight},
      ].map(({left, top, bg, color, label, icon: Icon}, index) => (
        <Interactive.Div
          key={label}
          name={`Constructivist block ${label}`}
          style={{
            position: 'absolute', left, top, width: 420, height: 300, boxSizing: 'border-box', padding: 38,
            backgroundColor: bg, color, border: '8px solid #0a0a0a',
            opacity: interpolate(frame, [42 + index * 34, 60 + index * 34], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
            translate: interpolate(frame, [42 + index * 34, 74 + index * 34], [index % 2 === 0 ? '-120px 0px' : '0px 120px', '0px 0px'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)}),
          }}
        >
          <Icon size={70} strokeWidth={2.4} />
          <div style={{marginTop: 48, fontSize: 70, fontWeight: 900}}>{label}</div>
          <div style={{fontFamily: 'var(--inkloom-animation-mono)', fontSize: 19, marginTop: 12}}>0{index + 1} / STRUCTURE</div>
        </Interactive.Div>
      ))}
      <div style={{position: 'absolute', right: 92, bottom: 58, fontFamily: 'var(--inkloom-animation-mono)', fontSize: 22, fontWeight: 800}}>FORM FOLLOWS REASON</div>
    </AbsoluteFill>
  );
};
