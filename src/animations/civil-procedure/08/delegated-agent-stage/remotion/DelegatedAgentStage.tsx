import {Drama, FileText, Handshake, Sparkles, Theater, UserRound} from 'lucide-react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';

export const DelegatedAgentStage = () => {
  const frame = useCurrentFrame();

  const scriptItems = [
    {label: '程序性权利', granted: true, delay: 80},
    {label: '承认请求', granted: false, delay: 95},
    {label: '和解权', granted: true, delay: 110},
    {label: '上诉权', granted: false, delay: 125},
  ];

  return (
    <AbsoluteFill style={{backgroundColor: '#1a1412', overflow: 'hidden', color: '#f5f1e8', fontFamily: 'Garamond, Georgia, serif'}}>
      <div style={{position: 'absolute', left: 0, right: 0, top: 0, height: 200, background: 'linear-gradient(180deg, #3d1e1e 0%, #1a1412 100%)', borderBottom: '4px solid #8b4513'}} />

      <div style={{position: 'absolute', left: 0, right: 0, bottom: 0, height: 140, backgroundColor: '#2d1810', borderTop: '6px solid #654321', boxShadow: '0 -4px 20px rgba(0,0,0,0.6)'}} />

      <div
        style={{
          position: 'absolute',
          left: 120,
          top: 70,
          fontSize: 76,
          fontWeight: 700,
          color: '#10b981',
          letterSpacing: 3,
          opacity: interpolate(frame, [0, 30], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
        }}
      >
        <Theater size={72} strokeWidth={2} style={{display: 'inline-block', verticalAlign: 'middle', marginRight: 20}} />
        委托代理 / 聘用演员
      </div>

      <div
        style={{
          position: 'absolute',
          right: 130,
          top: 85,
          fontSize: 26,
          fontFamily: 'Courier New, monospace',
          color: '#8b7355',
          letterSpacing: 2,
        }}
      >
        ACT I · SCENE B
      </div>

      <div
        style={{
          position: 'absolute',
          left: 240,
          top: 350,
          width: 280,
          padding: '28px 36px',
          backgroundColor: '#2d1810',
          border: '3px solid #3b82f6',
          borderRadius: 10,
          textAlign: 'center',
          opacity: interpolate(frame, [30, 55], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
          scale: interpolate(frame, [30, 60], [0.9, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)}),
        }}
      >
        <UserRound size={60} strokeWidth={2} color="#3b82f6" style={{margin: '0 auto 14px'}} />
        <div style={{fontSize: 40, fontWeight: 700, color: '#3b82f6', marginBottom: 8}}>当事人</div>
        <div style={{fontSize: 20, color: '#a0826d', fontFamily: 'Courier New, monospace'}}>CLIENT</div>
        <div style={{marginTop: 12, fontSize: 24, color: '#8b7355'}}>台侧观众</div>
      </div>

      <svg viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0}}>
        <path
          d="M 520 450 Q 720 420, 860 450"
          fill="none"
          stroke="#d4af37"
          strokeWidth="4"
          strokeDasharray="10,5"
          pathLength={1}
          strokeDashoffset={1 - interpolate(frame, [60, 85], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}
        />
      </svg>

      <div
        style={{
          position: 'absolute',
          left: 860,
          top: 240,
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 30%, #ffd700, #d4af37)',
          opacity: interpolate(frame, [40, 70], [0, 0.2], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
          filter: 'blur(70px)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: 810,
          top: 330,
          width: 300,
          height: 360,
          backgroundColor: '#1e3a2e',
          border: '4px solid #10b981',
          borderRadius: 12,
          padding: '32px 28px',
          textAlign: 'center',
          opacity: interpolate(frame, [90, 120], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
          scale: interpolate(frame, [90, 125], [0.85, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)}),
        }}
      >
        <Sparkles size={56} strokeWidth={2} color="#10b981" style={{margin: '0 auto 16px'}} />
        <div style={{fontSize: 42, fontWeight: 700, color: '#10b981', marginBottom: 8}}>委托代理人</div>
        <div style={{fontSize: 20, color: '#86a992', fontFamily: 'Courier New, monospace', marginBottom: 20}}>HIRED ACTOR</div>

        <div style={{fontSize: 24, fontWeight: 600, color: '#d4af37', marginBottom: 14}}>剧本权限:</div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
          {scriptItems.map(({label, granted}, index) => (
            <div
              key={label}
              style={{
                fontSize: 22,
                color: granted ? '#10b981' : '#6b7280',
                textDecoration: granted ? 'none' : 'line-through',
                opacity: interpolate(frame, [scriptItems[index].delay, scriptItems[index].delay + 20], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
              }}
            >
              {granted ? '✓' : '✗'} {label}
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 1320,
          top: 420,
          width: 360,
          padding: '28px 34px',
          backgroundColor: '#2d1810',
          border: '3px solid #d4af37',
          borderRadius: 8,
          opacity: interpolate(frame, [70, 100], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
        }}
      >
        <FileText size={48} strokeWidth={2} color="#d4af37" style={{margin: '0 auto 12px', display: 'block'}} />
        <div style={{fontSize: 36, fontWeight: 700, color: '#d4af37', textAlign: 'center', marginBottom: 8}}>授权剧本</div>
        <div style={{fontSize: 22, color: '#a0826d', textAlign: 'center', lineHeight: 1.5}}>
          限定演员<br/>可表演的台词
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 420,
          bottom: 200,
          width: 1080,
          padding: '32px 45px',
          backgroundColor: '#2d1810',
          border: '3px solid #10b981',
          borderRadius: 10,
          fontSize: 38,
          fontWeight: 600,
          color: '#f5f1e8',
          textAlign: 'center',
          opacity: interpolate(frame, [150, 180], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
        }}
      >
        <Handshake size={42} strokeWidth={2} style={{display: 'inline-block', verticalAlign: 'middle', marginRight: 18, color: '#10b981'}} />
        代理人只能表演剧本授权的台词
      </div>

      <div
        style={{
          position: 'absolute',
          right: 110,
          bottom: 165,
          fontSize: 22,
          fontFamily: 'Courier New, monospace',
          color: '#654321',
          letterSpacing: 1,
        }}
      >
        SCRIPT LIMIT / AUTH REQUIRED
      </div>
    </AbsoluteFill>
  );
};
