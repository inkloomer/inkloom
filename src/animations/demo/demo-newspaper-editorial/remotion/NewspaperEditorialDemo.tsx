import {BookOpenText, CircleEqual, Quote} from 'lucide-react';
import {AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame} from 'remotion';

export const NewspaperEditorialDemo = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{backgroundColor: '#f3f1ea', overflow: 'hidden', color: '#111111', fontFamily: 'Arial, Microsoft YaHei, sans-serif'}}>
      <div style={{position: 'absolute', left: 82, right: 82, top: 72, height: 8, backgroundColor: '#111111'}} />
      <div style={{position: 'absolute', left: 82, top: 95, fontFamily: 'Georgia, serif', fontSize: 22, fontWeight: 700}}>THE RULE REVIEW</div>
      <div style={{position: 'absolute', right: 82, top: 98, fontFamily: 'Consolas, monospace', fontSize: 18}}>NO. 010 / DEMO EDITION</div>
      <Interactive.Div
        name="Editorial headline"
        style={{
          position: 'absolute', left: 82, top: 150, width: 1480, fontFamily: 'Impact, Arial Black, Microsoft YaHei, sans-serif',
          fontSize: 118, lineHeight: 0.92, letterSpacing: 0, textTransform: 'uppercase',
          clipPath: `inset(0 ${interpolate(frame, [0, 42], [100, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)})}% 0 0)`,
        }}
      >
        事实不是结论
      </Interactive.Div>
      <div style={{position: 'absolute', left: 82, top: 395, width: 1760, height: 2, backgroundColor: '#111111'}} />
      {[
        {left: 82, width: 470, color: '#00a6a6', icon: BookOpenText, title: 'FACT', zh: '先识别事实'},
        {left: 615, width: 470, color: '#f2c500', icon: CircleEqual, title: 'RULE', zh: '再匹配规范'},
        {left: 1148, width: 694, color: '#e63b52', icon: Quote, title: 'RESULT', zh: '最后给出结论'},
      ].map(({left, width, color, icon: Icon, title, zh}, index) => (
        <Interactive.Div
          key={title}
          name={`Editorial column ${title}`}
          style={{
            position: 'absolute', left, top: 445, width, height: 460, boxSizing: 'border-box', borderTop: `18px solid ${color}`,
            opacity: interpolate(frame, [44 + index * 30, 72 + index * 30], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
            translate: interpolate(frame, [44 + index * 30, 72 + index * 30], ['0px 60px', '0px 0px'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)}),
          }}
        >
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 24}}>
            <span style={{fontFamily: 'Impact, Arial Black, sans-serif', fontSize: 66}}>{title}</span><Icon size={52} strokeWidth={1.7} />
          </div>
          <div style={{marginTop: 30, fontSize: 38, fontWeight: 900}}>{zh}</div>
          <div style={{marginTop: 30, columnCount: width > 600 ? 2 : 1, columnGap: 30, fontFamily: 'Georgia, SimSun, serif', fontSize: 24, lineHeight: 1.65}}>
            请求权基础　构成要件　法律效果　把判断拆成可检验的步骤，避免从材料直接跳到答案。
          </div>
        </Interactive.Div>
      ))}
      <div style={{position: 'absolute', left: 82, right: 82, bottom: 66, display: 'flex', justifyContent: 'space-between', borderTop: '2px solid #111111', paddingTop: 16, fontFamily: 'Consolas, monospace', fontSize: 18}}>
        <span>INKLOOM STYLE DESK</span><span>FACT / RULE / RESULT</span>
      </div>
    </AbsoluteFill>
  );
};
