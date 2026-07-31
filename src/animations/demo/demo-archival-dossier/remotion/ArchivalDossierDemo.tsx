import {FileSearch, FolderOpen, Stamp} from 'lucide-react';
import {AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame} from 'remotion';

export const ArchivalDossierDemo = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{backgroundColor: '#d7d3ca', overflow: 'hidden', color: '#211f1b', fontFamily: 'Georgia, SimSun, serif'}}>
      <div style={{position: 'absolute', left: 88, top: 70, width: 1744, height: 940, backgroundColor: '#ebe9e2', border: '1px solid #aaa59a'}} />
      <div style={{position: 'absolute', left: 104, top: 88, fontFamily: 'Consolas, monospace', fontSize: 19, color: '#6b665d'}}>ARCHIVE / CASE 024</div>
      <Interactive.Div name="Dossier title" style={{position: 'absolute', left: 104, top: 132, fontSize: 74, fontWeight: 800, opacity: interpolate(frame, [0, 28], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}}>
        事实审查卷宗
      </Interactive.Div>
      <Interactive.Div
        name="Dossier folder"
        style={{
          position: 'absolute', left: 170, top: 350, width: 780, height: 490, backgroundColor: '#b59662', border: '2px solid #806a48',
          translate: interpolate(frame, [18, 58], ['-120px 30px', '0px 0px'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)}),
          rotate: interpolate(frame, [18, 58], ['-4deg', '-1deg'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
        }}
      >
        <div style={{position: 'absolute', left: 38, top: -48, width: 280, height: 48, backgroundColor: '#b59662', border: '2px solid #806a48', borderBottom: 0}} />
        <FolderOpen size={82} strokeWidth={1.6} style={{position: 'absolute', left: 54, bottom: 46}} />
      </Interactive.Div>
      {[
        {left: 430, top: 300, rotate: '-3deg', label: '01 事实材料', icon: FileSearch},
        {left: 710, top: 330, rotate: '2deg', label: '02 规范依据', icon: Stamp},
      ].map(({left, top, rotate, label, icon: Icon}, index) => (
        <Interactive.Div
          key={label}
          name={label}
          style={{
            position: 'absolute', left, top, width: 520, height: 600, boxSizing: 'border-box', padding: 48,
            backgroundColor: '#fffef9', border: '1px solid #aaa59a', boxShadow: '8px 12px 0 rgba(50,45,38,0.12)', rotate,
            opacity: interpolate(frame, [48 + index * 36, 78 + index * 36], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
            translate: interpolate(frame, [48 + index * 36, 78 + index * 36], ['0px 90px', '0px 0px'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)}),
          }}
        >
          <Icon size={56} strokeWidth={1.5} color="#8f2f2a" />
          <div style={{marginTop: 30, fontFamily: 'Consolas, monospace', fontSize: 20, color: '#716b61'}}>{label}</div>
          <div style={{marginTop: 40, fontSize: 44, fontWeight: 800}}>{index === 0 ? '争议事实' : '构成要件'}</div>
          {[0, 1, 2, 3].map((line) => <div key={line} style={{marginTop: 26, width: `${92 - line * 9}%`, height: 3, backgroundColor: '#bdb8ae'}} />)}
        </Interactive.Div>
      ))}
      <Interactive.Div
        name="Approved stamp"
        style={{
          position: 'absolute', right: 155, bottom: 118, display: 'grid', width: 300, height: 150, placeItems: 'center',
          border: '10px double #a72e2a', color: '#a72e2a', fontFamily: 'Microsoft YaHei, sans-serif', fontSize: 42, fontWeight: 900,
          rotate: '-8deg', opacity: interpolate(frame, [136, 146], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
          scale: interpolate(frame, [136, 154], [1.5, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1), output: 'perceptual-scale'}),
        }}
      >
        审查完成
      </Interactive.Div>
    </AbsoluteFill>
  );
};
