import {BookOpen, BookText, Bookmark, Highlighter} from 'lucide-react';
import {AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame} from 'remotion';

export const StatuteCommentaryDemo = () => {
  const frame = useCurrentFrame();

  const annotations = [
    {top: 280, side: 'left', label: '构成要件', color: '#b8860b'},
    {top: 480, side: 'right', label: '例外情形', color: '#8b4513'},
    {top: 680, side: 'left', label: '法律后果', color: '#6b5d47'},
  ];

  return (
    <AbsoluteFill style={{backgroundColor: '#faf8f3', overflow: 'hidden', color: '#2b2621', fontFamily: 'var(--inkloom-animation-body)'}}>
      <div style={{position: 'absolute', left: 40, top: 0, width: 140, height: 1080, backgroundColor: '#f0ebe0', borderRight: '2px solid #d4c5a9'}} />
      <div style={{position: 'absolute', right: 40, top: 0, width: 140, height: 1080, backgroundColor: '#f0ebe0', borderLeft: '2px solid #d4c5a9'}} />

      <Interactive.Div name="Statute header" style={{position: 'absolute', left: 220, top: 70, display: 'flex', alignItems: 'center', gap: 20, fontSize: 68, fontWeight: 700, opacity: interpolate(frame, [0, 28], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}}>
        <BookOpen size={72} strokeWidth={1.8} />
        第108条
      </Interactive.Div>

      <div style={{position: 'absolute', left: 220, top: 160, width: 80, height: 4, backgroundColor: '#8b4513'}} />

      <Interactive.Div
        name="Statute body"
        style={{
          position: 'absolute',
          left: 220,
          top: 240,
          width: 1000,
          fontSize: 42,
          lineHeight: 1.8,
          color: '#2b2621',
          opacity: interpolate(frame, [20, 50], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
        }}
      >
        起诉必须符合下列条件：
        <div style={{marginTop: 24, paddingLeft: 40}}>
          <div style={{position: 'relative'}}>
            （一）原告是与本案有直接利害关系的公民
            <div style={{position: 'absolute', left: 320, top: 8, width: 180, height: 8, backgroundColor: '#daa520', opacity: interpolate(frame, [60, 85], [0, 0.5], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}} />
          </div>
        </div>
      </Interactive.Div>

      {annotations.map(({top, side, label, color}, index) => {
        const isLeft = side === 'left';
        const annotationOpacity = interpolate(frame, [70 + index * 35, 100 + index * 35], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
        const annotationX = interpolate(frame, [70 + index * 35, 105 + index * 35], [isLeft ? 30 : -30, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)});

        return (
          <Interactive.Div
            key={label}
            name={`Annotation ${label}`}
            style={{
              position: 'absolute',
              [isLeft ? 'left' : 'right']: isLeft ? 1300 : 220,
              top,
              width: 380,
              padding: '22px 28px',
              backgroundColor: color,
              color: '#faf8f3',
              fontSize: 28,
              fontWeight: 600,
              borderRadius: 6,
              boxShadow: '4px 6px 12px rgba(0,0,0,0.15)',
              opacity: annotationOpacity,
              translate: `${annotationX}px 0`,
            }}
          >
            <Bookmark size={32} strokeWidth={2} style={{display: 'inline-block', verticalAlign: 'middle', marginRight: 12}} />
            {label}
          </Interactive.Div>
        );
      })}

      <svg viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0}}>
        <path d="M 1280 315 L 1250 315" stroke="#b8860b" strokeWidth="3" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - interpolate(frame, [95, 115], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})} />
        <path d="M 1280 515 L 1310 515" stroke="#8b4513" strokeWidth="3" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - interpolate(frame, [130, 150], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})} />
        <path d="M 1280 715 L 1250 715" stroke="#6b5d47" strokeWidth="3" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - interpolate(frame, [165, 185], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})} />
      </svg>

      <Interactive.Div
        name="Commentary note"
        style={{
          position: 'absolute',
          left: 480,
          bottom: 100,
          fontSize: 34,
          color: '#6b5d47',
          opacity: interpolate(frame, [190, 220], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
        }}
      >
        <BookText size={44} strokeWidth={1.8} style={{display: 'inline-block', verticalAlign: 'middle', marginRight: 16}} />
        注释揭示法条的内在结构
      </Interactive.Div>

      <Highlighter size={48} strokeWidth={1.6} style={{position: 'absolute', right: 90, bottom: 85, color: '#daa520', opacity: 0.7}} />
    </AbsoluteFill>
  );
};
