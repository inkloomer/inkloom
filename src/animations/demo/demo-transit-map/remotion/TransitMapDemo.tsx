import {MapPin, Route} from 'lucide-react';
import {AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame} from 'remotion';

export const TransitMapDemo = () => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [24, 170], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)});
  const stations = [
    {x: 235, y: 650, name: '事实站', color: '#27c499', delay: 32},
    {x: 650, y: 650, name: '请求站', color: '#27c499', delay: 70},
    {x: 960, y: 420, name: '规范换乘', color: '#ffcc43', delay: 108},
    {x: 1320, y: 420, name: '要件站', color: '#ef5b64', delay: 136},
    {x: 1660, y: 650, name: '结论站', color: '#5ab0f2', delay: 164},
  ];
  return (
    <AbsoluteFill style={{backgroundColor: '#111318', overflow: 'hidden', color: '#f4f7fa', fontFamily: 'Arial, Microsoft YaHei, sans-serif'}}>
      <Interactive.Div name="Transit title" style={{position: 'absolute', left: 94, top: 76, fontSize: 74, fontWeight: 900, letterSpacing: 0, opacity: interpolate(frame, [0, 28], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}}>
        法律推理线路图
      </Interactive.Div>
      <div style={{position: 'absolute', right: 96, top: 90, display: 'flex', alignItems: 'center', gap: 16, color: '#8d98a5', fontFamily: 'Consolas, monospace', fontSize: 20}}><Route size={34} /> LINE R-03</div>
      <svg viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0}}>
        <path d="M 235 650 H 650 L 880 420 H 1320 L 1550 650 H 1660" fill="none" stroke="#303740" strokeWidth="34" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 235 650 H 650 L 880 420 H 1320 L 1550 650 H 1660" fill="none" stroke="#27c499" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - progress} />
        <path d="M 880 420 H 1320" fill="none" stroke="#ffcc43" strokeWidth="16" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - interpolate(frame, [94, 142], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})} />
        <path d="M 1320 420 L 1550 650 H 1660" fill="none" stroke="#5ab0f2" strokeWidth="16" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - interpolate(frame, [136, 178], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})} />
      </svg>
      {stations.map(({x, y, name, color, delay}, index) => (
        <Interactive.Div key={name} name={`Transit station ${name}`} style={{position: 'absolute', left: x - 36, top: y - 36, opacity: interpolate(frame, [delay, delay + 18], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}), scale: interpolate(frame, [delay, delay + 22], [0.45, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', output: 'perceptual-scale'})}}>
          <div style={{width: 72, height: 72, boxSizing: 'border-box', borderRadius: '50%', border: `14px solid ${color}`, backgroundColor: '#111318'}} />
          <div style={{position: 'absolute', left: index < 3 ? -18 : 'auto', right: index >= 3 ? -28 : 'auto', top: index % 2 === 0 ? 92 : -72, width: 180, fontSize: 25, fontWeight: 800, color}}>{name}</div>
        </Interactive.Div>
      ))}
      <div style={{position: 'absolute', left: 94, bottom: 70, display: 'flex', gap: 48, color: '#8d98a5', fontFamily: 'Consolas, monospace', fontSize: 19}}><span>● ENTRY</span><span>● TRANSFER</span><span>● EFFECT</span></div>
      <MapPin size={42} color="#ef5b64" style={{position: 'absolute', left: 1299, top: 321, opacity: interpolate(frame, [130, 148], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}} />
    </AbsoluteFill>
  );
};
