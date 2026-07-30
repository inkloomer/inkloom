import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {PALETTE, accentColor, accentSoftColor, toSourceFrame, type Accent} from '../storyboard';
import {FadeIn, FlowArrow, IconNode, ImpactReveal, Keyword, MaskedReveal, SceneHeading, baseTextStyle} from '../visual-system';
import {BookOpen, Crown, FileText, Landmark, Scale} from 'lucide-react';

const ATTRIBUTES: {key: string; label: string; icon: typeof Scale; accent: Accent; standard: string; conclusion: string; keyword: string}[] = [
  {key: 'basic', label: '基本法', icon: Crown, accent: 'red', standard: '法律体系中的地位', conclusion: '仅次于宪法', keyword: '地位'},
  {key: 'department', label: '部门法', icon: FileText, accent: 'teal', standard: '调整的社会关系', conclusion: '民事诉讼关系', keyword: '关系'},
  {key: 'procedure', label: '程序法', icon: BookOpen, accent: 'blue', standard: '规定的内容', conclusion: '程序问题', keyword: '内容'},
  {key: 'public', label: '公法', icon: Landmark, accent: 'gold', standard: '适用的主体', conclusion: '国家审判权', keyword: '主体'},
];

const CenterNode = ({progress}: {progress: number}) => (
  <div
    style={{
      width: 220,
      height: 220,
      borderRadius: '50%',
      backgroundColor: PALETTE.paper,
      border: `4px solid ${PALETTE.ink}`,
      display: 'grid',
      placeItems: 'center',
      boxShadow: '0 14px 34px rgba(23, 32, 29, 0.09)',
      opacity: progress,
      transform: `scale(${interpolate(progress, [0, 1], [0.85, 1])})`,
    }}
  >
    <div style={{textAlign: 'center'}}>
      <Scale size={56} color={PALETTE.ink} strokeWidth={2} />
      <div style={{...baseTextStyle, fontSize: 28, fontWeight: 900, marginTop: 10}}>民事诉讼法</div>
    </div>
  </div>
);

const AttributeConnector = ({
  fromX,
  fromY,
  toX,
  toY,
  progress,
  accent,
}: {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  progress: number;
  accent: Accent;
}) => {
  const length = Math.sqrt((toX - fromX) ** 2 + (toY - fromY) ** 2);
  const angle = (Math.atan2(toY - fromY, toX - fromX) * 180) / Math.PI;
  return (
    <div
      style={{
        position: 'absolute',
        left: fromX,
        top: fromY,
        width: length,
        height: 4,
        backgroundColor: accentColor(accent),
        transformOrigin: 'left center',
        transform: `rotate(${angle}deg) scaleX(${progress})`,
        opacity: progress,
      }}
    />
  );
};

// 场景1：四重属性概览
export const OverviewScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const centerProgress = interpolate(frame, [20, 60], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)});

  const positions = [
    {x: 280, y: 300},
    {x: 1330, y: 300},
    {x: 280, y: 600},
    {x: 1330, y: 600},
  ];

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="01" eyebrow="民事诉讼法的属性" title="四重属性，四个角度" accent="blue" />

      {/* 中心节点 */}
      <div style={{position: 'absolute', left: 850, top: 430}}>
        <CenterNode progress={centerProgress} />
      </div>

      {/* 四个属性节点 */}
      {ATTRIBUTES.map((attr, index) => {
        const delay = 60 + index * 24;
        const progress = interpolate(frame, [delay, delay + 36], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)});
        const pos = positions[index];
        const centerX = 960;
        const centerY = 540;
        const nodeWidth = 310;
        const nodeHeight = 122;
        const fromX = centerX + (pos.x + nodeWidth / 2 - centerX) * 0.35;
        const fromY = centerY + (pos.y + nodeHeight / 2 - centerY) * 0.35;
        return (
          <div key={attr.key}>
            <AttributeConnector
              fromX={fromX}
              fromY={fromY}
              toX={pos.x + (pos.x < centerX ? nodeWidth : 0)}
              toY={pos.y + nodeHeight / 2}
              progress={interpolate(frame, [delay + 20, delay + 44], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}
              accent={attr.accent}
            />
            <div
              style={{
                position: 'absolute',
                left: pos.x,
                top: pos.y,
                opacity: progress,
                transform: `scale(${interpolate(progress, [0, 1], [0.9, 1])})`,
              }}
            >
              <IconNode icon={attr.icon} label={attr.label} detail={`区分标准：${attr.standard}`} accent={attr.accent} />
            </div>
          </div>
        );
      })}

      <ImpactReveal delay={160} style={{position: 'absolute', left: 420, top: 820}}>
        <div style={{...baseTextStyle, fontSize: 30, fontWeight: 800}}>
          同一部法律，从 <Keyword accent="red">四个不同角度</Keyword> 观察，得出不同属性
        </div>
      </ImpactReveal>
    </div>
  );
};

// 场景2：区分标准详解
export const StandardScene = () => {
  const frame = toSourceFrame(useCurrentFrame());

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="02" eyebrow="区分标准" title="四重属性的判断依据" accent="teal" />

      {ATTRIBUTES.map((attr, index) => {
        const delay = 20 + index * 40;
        const progress = interpolate(frame, [delay, delay + 34], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)});
        const y = 270 + index * 160;
        return (
          <div key={attr.key}>
            {/* 属性节点 */}
            <div
              style={{
                position: 'absolute',
                left: 120,
                top: y,
                opacity: progress,
                transform: `translateX(${interpolate(progress, [0, 1], [-40, 0])}px)`,
              }}
            >
              <IconNode icon={attr.icon} label={attr.label} accent={attr.accent} compact />
            </div>

            {/* 区分标准箭头 */}
            <FlowArrow
              left={400}
              top={y + 50}
              width={180}
              progress={interpolate(frame, [delay + 20, delay + 44], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}
              accent={attr.accent}
              label={attr.standard}
              thickness={4}
            />

            {/* 结论 */}
            <MaskedReveal delay={delay + 40} duration={28} style={{position: 'absolute', left: 610, top: y + 8}}>
              <div
                style={{
                  ...baseTextStyle,
                  fontSize: 28,
                  fontWeight: 800,
                  color: accentColor(attr.accent),
                  padding: '18px 26px',
                  backgroundColor: accentSoftColor(attr.accent),
                  border: `2px solid ${accentColor(attr.accent)}`,
                  borderRadius: 8,
                }}
              >
                {attr.conclusion}
              </div>
            </MaskedReveal>

            {/* 关键词标签 */}
            <FadeIn delay={delay + 60} duration={24} style={{position: 'absolute', left: 1020, top: y + 28}}>
              <div
                style={{
                  ...baseTextStyle,
                  fontSize: 26,
                  fontWeight: 800,
                  color: PALETTE.paper,
                  backgroundColor: accentColor(attr.accent),
                  padding: '10px 20px',
                  borderRadius: 6,
                }}
              >
                {attr.keyword}
              </div>
            </FadeIn>
          </div>
        );
      })}
    </div>
  );
};

// 场景3：记忆口诀
export const RecapScene = () => {
  const frame = toSourceFrame(useCurrentFrame());

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="03" eyebrow="总结记忆" title="四重属性速记" accent="red" />

      {/* 中心法律节点 */}
      <FadeIn delay={10} duration={30} style={{position: 'absolute', left: 120, top: 420}}>
        <div
          style={{
            width: 180,
            height: 180,
            borderRadius: '50%',
            backgroundColor: PALETTE.paper,
            border: `4px solid ${PALETTE.ink}`,
            display: 'grid',
            placeItems: 'center',
            boxShadow: '0 14px 34px rgba(23, 32, 29, 0.09)',
          }}
        >
          <div style={{textAlign: 'center'}}>
            <Scale size={48} color={PALETTE.ink} strokeWidth={2} />
            <div style={{...baseTextStyle, fontSize: 22, fontWeight: 900, marginTop: 8}}>民诉法</div>
          </div>
        </div>
      </FadeIn>

      {/* 四个记忆卡片 */}
      {ATTRIBUTES.map((attr, index) => {
        const delay = 40 + index * 30;
        const progress = interpolate(frame, [delay, delay + 34], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)});
        const positions = [
          {x: 500, y: 300},
          {x: 1160, y: 300},
          {x: 500, y: 580},
          {x: 1160, y: 580},
        ];
        const pos = positions[index];
        return (
          <div key={attr.key}>
            <div
              style={{
                position: 'absolute',
                left: pos.x,
                top: pos.y,
                opacity: progress,
                transform: `translateY(${interpolate(progress, [0, 1], [30, 0])}px)`,
              }}
            >
              <div
                style={{
                  width: 360,
                  padding: '28px 32px',
                  backgroundColor: PALETTE.paper,
                  border: `3px solid ${accentColor(attr.accent)}`,
                  borderRadius: 10,
                  boxShadow: '0 8px 24px rgba(23, 32, 29, 0.08)',
                }}
              >
                <div style={{display: 'flex', alignItems: 'center', gap: 18, marginBottom: 14}}>
                  <div
                    style={{
                      display: 'grid',
                      width: 54,
                      height: 54,
                      placeItems: 'center',
                      color: accentColor(attr.accent),
                      backgroundColor: accentSoftColor(attr.accent),
                      borderRadius: 6,
                    }}
                  >
                    <attr.icon size={32} strokeWidth={2.2} />
                  </div>
                  <div style={{...baseTextStyle, fontSize: 34, fontWeight: 900, color: accentColor(attr.accent)}}>{attr.label}</div>
                </div>
                <div style={{...baseTextStyle, fontSize: 24, fontWeight: 700, color: PALETTE.muted, marginBottom: 8}}>
                  区分标准：{attr.standard}
                </div>
                <div style={{...baseTextStyle, fontSize: 28, fontWeight: 800, color: accentColor(attr.accent)}}>
                  记忆关键词：<Keyword accent={attr.accent}>{attr.keyword}</Keyword>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <ImpactReveal delay={170} style={{position: 'absolute', left: 380, top: 860}}>
        <div style={{...baseTextStyle, fontSize: 32, fontWeight: 800}}>
          记忆口诀：
          <Keyword accent="red">地位</Keyword>
          <Keyword accent="teal">关系</Keyword>
          <Keyword accent="blue">内容</Keyword>
          <Keyword accent="gold">主体</Keyword>
        </div>
      </ImpactReveal>
    </div>
  );
};
