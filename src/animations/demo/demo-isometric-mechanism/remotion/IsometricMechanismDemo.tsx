import {Cog, LockKeyhole, PackageCheck} from 'lucide-react';
import {AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame} from 'remotion';

export const IsometricMechanismDemo = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{backgroundColor: '#e9eef0', overflow: 'hidden', color: '#172126', fontFamily: 'var(--inkloom-animation-body)'}}>
      <div style={{position: 'absolute', left: 92, right: 92, top: 76, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div style={{fontSize: 72, fontWeight: 900}}>法律效果机械室</div>
        <div style={{fontFamily: 'var(--inkloom-animation-meta)', fontSize: 20, color: '#596970'}}>MECHANISM / 09</div>
      </div>
      <div style={{position: 'absolute', left: 105, top: 260, width: 1710, height: 650, border: '3px solid #63737a', backgroundColor: '#cad4d8'}} />
      {[
        {left: 170, label: '事实输入', icon: LockKeyhole, color: '#f26b38', delay: 20},
        {left: 745, label: '规范传动', icon: Cog, color: '#246a83', delay: 65},
        {left: 1320, label: '效果输出', icon: PackageCheck, color: '#2d8b68', delay: 120},
      ].map(({left, label, icon: Icon, color, delay}, index) => (
        <Interactive.Div
          key={label}
          name={`Mechanism chamber ${label}`}
          style={{
            position: 'absolute', left, top: 390, width: 430, height: 350, boxSizing: 'border-box', padding: 42,
            backgroundColor: '#f7fafb', border: `5px solid ${color}`, boxShadow: '14px 18px 0 #8b999e',
            opacity: interpolate(frame, [delay, delay + 24], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
            translate: interpolate(frame, [delay, delay + 36], ['0px 70px', '0px 0px'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)}),
          }}
        >
          <Icon size={84} strokeWidth={1.7} color={color} style={{rotate: index === 1 ? interpolate(frame, [72, 156], ['0deg', '180deg'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}) : '0deg'}} />
          <div style={{marginTop: 48, fontSize: 42, fontWeight: 900}}>{label}</div>
          <div style={{marginTop: 14, fontFamily: 'var(--inkloom-animation-mono)', fontSize: 18, color: '#65757b'}}>CHAMBER 0{index + 1}</div>
        </Interactive.Div>
      ))}
      {[620, 1195].map((left, index) => (
        <div key={left} style={{position: 'absolute', left, top: 540, width: 100, height: 52}}>
          <div style={{position: 'absolute', left: 0, top: 21, width: 100, height: 10, backgroundColor: '#f26b38', scale: `${interpolate(frame, [58 + index * 55, 102 + index * 55], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})} 1`, transformOrigin: 'left center'}} />
          <div style={{position: 'absolute', right: -4, top: 7, width: 0, height: 0, borderTop: '19px solid transparent', borderBottom: '19px solid transparent', borderLeft: '30px solid #f26b38', opacity: interpolate(frame, [92 + index * 55, 104 + index * 55], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}} />
        </div>
      ))}
      <Interactive.Div name="Mechanism latch" style={{position: 'absolute', left: 920, top: 790, width: 90, height: 180, backgroundColor: '#f2bd38', border: '5px solid #172126', transformOrigin: 'center top', rotate: interpolate(frame, [94, 132], ['-48deg', '0deg'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)})}} />
    </AbsoluteFill>
  );
};
