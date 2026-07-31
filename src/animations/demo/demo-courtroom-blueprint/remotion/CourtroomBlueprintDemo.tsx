import {Landmark, Scale, ShieldCheck} from 'lucide-react';
import {AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame} from 'remotion';

export const CourtroomBlueprintDemo = () => {
  const frame = useCurrentFrame();
  const nodes = [
    {label: '事实', detail: '争议进入', icon: Landmark, left: 180},
    {label: '规范', detail: '要件校准', icon: Scale, left: 730},
    {label: '结论', detail: '效果输出', icon: ShieldCheck, left: 1280},
  ];

  return (
    <AbsoluteFill style={{backgroundColor: '#071923', overflow: 'hidden', color: '#d9f7ff', fontFamily: 'Bahnschrift, Microsoft YaHei, sans-serif'}}>
      {[160, 320, 480, 640, 800, 960, 1120, 1280, 1440, 1600, 1760].map((left) => (
        <div key={left} style={{position: 'absolute', left, top: 0, width: 1, height: 1080, backgroundColor: 'rgba(76, 201, 240, 0.13)'}} />
      ))}
      {[140, 280, 420, 560, 700, 840, 980].map((top) => (
        <div key={top} style={{position: 'absolute', left: 0, top, width: 1920, height: 1, backgroundColor: 'rgba(76, 201, 240, 0.13)'}} />
      ))}
      <Interactive.Div name="Blueprint heading" style={{position: 'absolute', left: 110, top: 70, fontSize: 24, color: '#4cc9f0', letterSpacing: 0, fontWeight: 800}}>
        COURT ROUTING / A-01
      </Interactive.Div>
      <Interactive.Div
        name="Blueprint title"
        style={{
          position: 'absolute', left: 110, top: 118, fontSize: 76, fontWeight: 900, letterSpacing: 0,
          opacity: interpolate(frame, [0, 30], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)}),
          translate: interpolate(frame, [0, 30], ['-48px 0px', '0px 0px'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)}),
        }}
      >
        法律推理坐标图
      </Interactive.Div>
      <div style={{position: 'absolute', left: 350, top: 552, width: 1120, height: 6, backgroundColor: '#183a48'}}>
        <div style={{width: `${interpolate(frame, [42, 156], [0, 100], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)})}%`, height: '100%', backgroundColor: '#4cc9f0'}} />
      </div>
      {nodes.map(({label, detail, icon: Icon, left}, index) => (
        <Interactive.Div
          key={label}
          name={`Blueprint node ${label}`}
          style={{
            position: 'absolute', left, top: 430, width: 360, height: 250, boxSizing: 'border-box',
            border: '2px solid #4cc9f0', backgroundColor: '#0b2531', padding: 28,
            opacity: interpolate(frame, [28 + index * 38, 58 + index * 38], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
            translate: interpolate(frame, [28 + index * 38, 58 + index * 38], ['0px 42px', '0px 0px'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)}),
          }}
        >
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Icon size={58} strokeWidth={1.7} color={index === 1 ? '#ff5d73' : '#4cc9f0'} />
            <span style={{fontFamily: 'Consolas, monospace', fontSize: 22, color: '#7da7b5'}}>0{index + 1}</span>
          </div>
          <div style={{marginTop: 28, fontSize: 44, fontWeight: 900}}>{label}</div>
          <div style={{marginTop: 10, fontSize: 24, color: '#9bc6d3'}}>{detail}</div>
        </Interactive.Div>
      ))}
      <div style={{position: 'absolute', left: 110, bottom: 78, display: 'flex', gap: 28, color: '#7da7b5', fontFamily: 'Consolas, monospace', fontSize: 18}}>
        <span>X 1920</span><span>Y 1080</span><span style={{color: '#ff5d73'}}>CHECKPOINT ACTIVE</span>
      </div>
    </AbsoluteFill>
  );
};
