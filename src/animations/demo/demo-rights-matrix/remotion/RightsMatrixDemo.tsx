import {Check, Grid3x3, Minus, X} from 'lucide-react';
import {AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame} from 'remotion';

export const RightsMatrixDemo = () => {
  const frame = useCurrentFrame();

  const subjects = ['原告', '被告', '第三人'];
  const scenarios = ['起诉权', '反诉权', '上诉权', '撤诉权'];

  const matrix = [
    [true, true, true, true],
    [false, true, true, false],
    [false, false, true, false],
  ];

  return (
    <AbsoluteFill style={{backgroundColor: '#0a1929', overflow: 'hidden', color: '#e3f2fd', fontFamily: 'var(--inkloom-animation-body)'}}>
      <div style={{position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(180deg, rgba(13,27,42,0.8) 0%, rgba(10,25,41,1) 100%)', pointerEvents: 'none'}} />

      <Interactive.Div name="Matrix title" style={{position: 'absolute', left: 110, top: 70, display: 'flex', alignItems: 'center', gap: 24, fontSize: 74, fontWeight: 900, opacity: interpolate(frame, [0, 28], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}}>
        <Grid3x3 size={78} strokeWidth={2} />
        权利分布矩阵
      </Interactive.Div>

      <div style={{position: 'absolute', left: 110, top: 240, display: 'flex', gap: 0}}>
        <div style={{width: 220, height: 80}} />
        {scenarios.map((scenario, colIndex) => {
          const translateY = interpolate(frame, [20 + colIndex * 10, 45 + colIndex * 10], [-20, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)});
          return (
            <Interactive.Div
              key={scenario}
              name={`Column header ${scenario}`}
              style={{
                width: 300,
                height: 80,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#d4af37',
                color: '#0a1929',
                fontSize: 38,
                fontWeight: 800,
                borderRight: colIndex < scenarios.length - 1 ? '2px solid #0a1929' : 'none',
                opacity: interpolate(frame, [20 + colIndex * 10, 40 + colIndex * 10], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
                transform: `translateY(${translateY}px)`,
              }}
            >
              {scenario}
            </Interactive.Div>
          );
        })}
      </div>

      {subjects.map((subject, rowIndex) => {
        const translateX = interpolate(frame, [60 + rowIndex * 15, 85 + rowIndex * 15], [-20, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)});
        return (
          <div key={subject} style={{position: 'absolute', left: 110, top: 320 + rowIndex * 160, display: 'flex', gap: 0}}>
            <Interactive.Div
              name={`Row header ${subject}`}
              style={{
                width: 220,
                height: 160,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#1e3a5f',
                color: '#e3f2fd',
                fontSize: 42,
                fontWeight: 800,
                borderBottom: rowIndex < subjects.length - 1 ? '2px solid #0a1929' : 'none',
                opacity: interpolate(frame, [60 + rowIndex * 15, 80 + rowIndex * 15], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
                transform: `translateX(${translateX}px)`,
              }}
            >
              {subject}
            </Interactive.Div>

          {matrix[rowIndex].map((hasRight, colIndex) => {
            const cellDelay = 100 + rowIndex * 40 + colIndex * 12;
            const Icon = hasRight ? Check : X;
            const bgColor = hasRight ? '#14b8a6' : '#334155';
            const iconColor = hasRight ? '#ffffff' : '#64748b';

            return (
              <Interactive.Div
                key={colIndex}
                name={`Cell ${subject}-${scenarios[colIndex]}`}
                style={{
                  width: 300,
                  height: 160,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: bgColor,
                  borderRight: colIndex < scenarios.length - 1 ? '2px solid #0a1929' : 'none',
                  borderBottom: rowIndex < subjects.length - 1 ? '2px solid #0a1929' : 'none',
                  opacity: interpolate(frame, [cellDelay, cellDelay + 20], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
                  scale: interpolate(frame, [cellDelay, cellDelay + 25], [0.85, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)}),
                }}
              >
                <Icon size={68} strokeWidth={3} color={iconColor} />
              </Interactive.Div>
            );
          })}
        </div>
        );
      })}

      <Interactive.Div
        name="Matrix note"
        style={{
          position: 'absolute',
          left: 500,
          bottom: 100,
          fontSize: 36,
          color: '#90caf9',
          opacity: interpolate(frame, [200, 230], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
        }}
      >
        矩阵清晰展示权利的主体与场景分布
      </Interactive.Div>

      <Grid3x3 size={56} strokeWidth={1.6} style={{position: 'absolute', right: 100, bottom: 95, color: '#1e3a5f', opacity: 0.6}} />
    </AbsoluteFill>
  );
};
