import {ArrowRight} from 'lucide-react';
import {AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame} from 'remotion';

export const KineticTypographyDemo = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{backgroundColor: '#f7f7f4', overflow: 'hidden', color: '#101010', fontFamily: 'var(--inkloom-animation-body)'}}>
      <div style={{position: 'absolute', left: 0, top: 0, width: 36, height: 1080, backgroundColor: '#ffd428'}} />
      <Interactive.Div name="Kinetic eyebrow" style={{position: 'absolute', left: 98, top: 74, fontFamily: 'var(--inkloom-animation-meta)', fontSize: 22, color: '#2456d6'}}>TYPE / REASON / 08</Interactive.Div>
      {[
        {text: '事实', top: 170, size: 172, color: '#101010', from: '-620px 0px', delay: 0},
        {text: '不是', top: 355, size: 118, color: '#2456d6', from: '620px 0px', delay: 36},
        {text: '结论', top: 490, size: 220, color: '#e83f4f', from: '-760px 0px', delay: 72},
      ].map(({text, top, size, color, from, delay}) => (
        <Interactive.Div
          key={text}
          name={`Kinetic word ${text}`}
          style={{
            position: 'absolute', left: 100, top, fontSize: size, lineHeight: 0.9, color, letterSpacing: 0,
            translate: interpolate(frame, [delay, delay + 42], [from, '0px 0px'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)}),
            opacity: interpolate(frame, [delay, delay + 18], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
          }}
        >
          {text}
        </Interactive.Div>
      ))}
      <Interactive.Div
        name="Kinetic rule assembly"
        style={{
          position: 'absolute', right: 105, top: 210, width: 690, height: 610, boxSizing: 'border-box', padding: '70px 64px',
          backgroundColor: '#101010', color: '#ffffff',
          opacity: interpolate(frame, [98, 128], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
          scale: interpolate(frame, [98, 136], [0.9, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1), output: 'perceptual-scale'}),
        }}
      >
        <div style={{fontSize: 34, color: '#ffd428'}}>RULE ASSEMBLY</div>
        <div style={{marginTop: 44, fontSize: 74, lineHeight: 1.2}}>事实</div>
        <ArrowRight size={70} color="#ffd428" style={{margin: '20px 0'}} />
        <div style={{fontSize: 74, lineHeight: 1.2}}>规范</div>
        <ArrowRight size={70} color="#ffd428" style={{margin: '20px 0'}} />
        <div style={{fontSize: 74, lineHeight: 1.2}}>结论</div>
      </Interactive.Div>
      <div style={{position: 'absolute', left: 100, bottom: 68, fontFamily: 'var(--inkloom-animation-meta)', fontSize: 20}}>WORDS MOVE / MEANING STAYS</div>
    </AbsoluteFill>
  );
};
