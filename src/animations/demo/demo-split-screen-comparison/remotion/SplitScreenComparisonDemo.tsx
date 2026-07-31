import {GitCompareArrows, Scale, ShieldCheck, UserRound} from 'lucide-react';
import {AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame} from 'remotion';

export const SplitScreenComparisonDemo = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{backgroundColor: '#f5f5f2', overflow: 'hidden', color: '#15191c', fontFamily: 'Arial, Microsoft YaHei, sans-serif'}}>
      <div style={{position: 'absolute', left: 0, top: 0, width: 960, height: 1080, backgroundColor: '#e8f1f7'}} />
      <div style={{position: 'absolute', right: 0, top: 0, width: 960, height: 1080, backgroundColor: '#f8e9e9'}} />
      <div style={{position: 'absolute', left: 956, top: 0, width: 8, height: 1080, backgroundColor: '#15191c'}} />
      <Interactive.Div name="Comparison title" style={{position: 'absolute', left: 0, right: 0, top: 60, textAlign: 'center', fontSize: 68, fontWeight: 900, opacity: interpolate(frame, [0, 28], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}}>
        相同事实，不同规范路径
      </Interactive.Div>
      {[
        {side: 'A 路径', left: 115, color: '#286b9b', icon: UserRound, rule: '一般规则', result: '通常效果', from: '-100px 0px'},
        {side: 'B 路径', left: 1075, color: '#b84343', icon: Scale, rule: '特别规则', result: '特别效果', from: '100px 0px'},
      ].map(({side, left, color, icon: Icon, rule, result, from}, index) => (
        <Interactive.Div
          key={side}
          name={`Comparison lane ${side}`}
          style={{
            position: 'absolute', left, top: 230, width: 730, height: 600,
            opacity: interpolate(frame, [24 + index * 18, 54 + index * 18], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
            translate: interpolate(frame, [24 + index * 18, 62 + index * 18], [from, '0px 0px'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)}),
          }}
        >
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `6px solid ${color}`, paddingBottom: 24}}>
            <span style={{fontSize: 48, fontWeight: 900, color}}>{side}</span><Icon size={64} strokeWidth={1.8} color={color} />
          </div>
          {[{label: '事实', value: '同一争议'}, {label: '规范', value: rule}, {label: '结论', value: result}].map(({label, value}, row) => (
            <div key={label} style={{display: 'grid', gridTemplateColumns: '150px 1fr', alignItems: 'center', minHeight: 138, borderBottom: '2px solid rgba(21,25,28,0.18)', opacity: interpolate(frame, [72 + row * 26, 96 + row * 26], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}}>
              <span style={{fontFamily: 'Consolas, monospace', fontSize: 22, color}}>{label}</span><strong style={{fontSize: 38}}>{value}</strong>
            </div>
          ))}
        </Interactive.Div>
      ))}
      <Interactive.Div
        name="Comparison convergence"
        style={{
          position: 'absolute', left: 710, bottom: 76, width: 500, height: 118, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20,
          backgroundColor: '#15191c', color: '#ffffff', fontSize: 32, fontWeight: 900,
          opacity: interpolate(frame, [150, 174], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
          scale: interpolate(frame, [150, 184], [0.9, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', output: 'perceptual-scale'}),
        }}
      >
        <GitCompareArrows size={48} color="#f2c94c" /> 先分轨，再比较 <ShieldCheck size={48} color="#f2c94c" />
      </Interactive.Div>
    </AbsoluteFill>
  );
};
