import { Easing, interpolate, useCurrentFrame } from 'remotion';
import { PALETTE, toSourceFrame } from '../storyboard';
import {
  baseTextStyle,
  ENTER_EASING,
  ImpactReveal,
  Keyword,
  MaskedReveal,
  SceneHeading,
} from '../visual-system';
import { Scale, FileText, BookOpen, Landmark } from 'lucide-react';

// 场景1: 四重属性概览
// 布局：中心大标题，四个属性卡片2x2网格分布
export const OverviewScene = () => {
  const frame = toSourceFrame(useCurrentFrame());

  const attributes = [
    { icon: Scale, label: '基本法', accent: 'red' as const, detail: '法律地位', top: 240, left: 200 },
    { icon: FileText, label: '部门法', accent: 'teal' as const, detail: '社会关系', top: 240, left: 1050 },
    { icon: BookOpen, label: '程序法', accent: 'blue' as const, detail: '内容', top: 560, left: 200 },
    { icon: Landmark, label: '公法', accent: 'gold' as const, detail: '适用主体', top: 560, left: 1050 },
  ];

  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      <SceneHeading
        index="01"
        eyebrow="民事诉讼法的属性"
        title="四重属性，四个角度"
        accent="blue"
      />

      {/* 四个属性卡片 */}
      {attributes.map((attr, index) => {
        const delay = 30 + index * 20;
        const progress = interpolate(frame, [delay, delay + 30], [0, 1], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
          easing: ENTER_EASING,
        });

        return (
          <div
            key={attr.label}
            style={{
              position: 'absolute',
              left: attr.left,
              top: attr.top,
              opacity: progress,
              transform: `scale(${interpolate(progress, [0, 1], [0.9, 1])})`,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 20,
                padding: '20px 32px',
                backgroundColor: PALETTE.paper,
                border: `3px solid ${PALETTE[attr.accent]}`,
                borderRadius: 12,
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                minWidth: 320,
              }}
            >
              <attr.icon size={64} color={PALETTE[attr.accent]} strokeWidth={2.2} />
              <div>
                <div style={{ ...baseTextStyle, fontSize: 36, fontWeight: 900, color: PALETTE[attr.accent] }}>
                  {attr.label}
                </div>
                <div style={{ ...baseTextStyle, fontSize: 20, fontWeight: 600, color: PALETTE.gray, marginTop: 4 }}>
                  区分标准：{attr.detail}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* 底部总结 */}
      <ImpactReveal delay={60} style={{ position: 'absolute', left: 300, top: 900 }}>
        <div style={{ ...baseTextStyle, fontSize: 32, fontWeight: 800 }}>
          同一部法律，从
          <Keyword accent="red">四个不同角度</Keyword>
          观察，得出不同属性
        </div>
      </ImpactReveal>
    </div>
  );
};

// 场景2: 详细区分标准
// 布局：四行，每行 属性名 | 区分标准 | 结论
export const DetailScene = () => {
  const frame = toSourceFrame(useCurrentFrame());

  const rows = [
    { label: '基本法', standard: '法律体系中的地位', conclusion: '仅次于宪法', accent: 'red' as const },
    { label: '部门法', standard: '调整的社会关系', conclusion: '民事诉讼关系', accent: 'teal' as const },
    { label: '程序法', standard: '内容', conclusion: '规定程序问题', accent: 'blue' as const },
    { label: '公法', standard: '适用的主体', conclusion: '涉及国家审判权', accent: 'gold' as const },
  ];

  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      <SceneHeading
        index="02"
        eyebrow="区分标准"
        title="四重属性的判断依据"
        accent="teal"
      />

      {rows.map((row, index) => {
        const delay = 20 + index * 22;
        const progress = interpolate(frame, [delay, delay + 30], [0, 1], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
          easing: ENTER_EASING,
        });

        return (
          <div key={row.label}>
            {/* 属性名 */}
            <div
              style={{
                position: 'absolute',
                left: 150,
                top: 240 + index * 160,
                opacity: progress,
              }}
            >
              <div
                style={{
                  ...baseTextStyle,
                  fontSize: 32,
                  fontWeight: 900,
                  color: PALETTE[row.accent],
                  padding: '12px 24px',
                  backgroundColor: PALETTE.paper,
                  border: `3px solid ${PALETTE[row.accent]}`,
                  borderRadius: 8,
                  minWidth: 160,
                  textAlign: 'center',
                }}
              >
                {row.label}
              </div>
            </div>

            {/* 箭头 */}
            <div
              style={{
                position: 'absolute',
                left: 360,
                top: 260 + index * 160,
                width: 60,
                height: 3,
                backgroundColor: PALETTE[row.accent],
                opacity: progress,
              }}
            />

            {/* 区分标准 */}
            <div
              style={{
                position: 'absolute',
                left: 450,
                top: 254 + index * 160,
                ...baseTextStyle,
                fontSize: 26,
                fontWeight: 700,
                color: PALETTE.ink,
                opacity: progress,
              }}
            >
              {row.standard}
            </div>

            {/* 结论 */}
            <MaskedReveal delay={delay + 10} duration={25} style={{ position: 'absolute', left: 850, top: 240 + index * 160 }}>
              <div
                style={{
                  ...baseTextStyle,
                  fontSize: 28,
                  fontWeight: 800,
                  color: PALETTE[row.accent],
                  padding: '10px 20px',
                  backgroundColor: PALETTE.paper,
                  border: `2px solid ${PALETTE[row.accent]}`,
                  borderRadius: 8,
                }}
              >
                {row.conclusion}
              </div>
            </MaskedReveal>
          </div>
        );
      })}
    </div>
  );
};

// 场景3: 总结记忆
// 布局：四行对比表格样式，底部记忆口诀
export const SummaryScene = () => {
  const frame = toSourceFrame(useCurrentFrame());

  const rows = [
    { label: '基本法', standard: '地位', accent: 'red' as const },
    { label: '部门法', standard: '关系', accent: 'teal' as const },
    { label: '程序法', standard: '内容', accent: 'blue' as const },
    { label: '公法', standard: '主体', accent: 'gold' as const },
  ];

  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      <SceneHeading
        index="03"
        eyebrow="总结记忆"
        title="四重属性速记"
        accent="red"
      />

      {/* 四行属性 */}
      {rows.map((row, index) => {
        const delay = 20 + index * 18;
        const progress = interpolate(frame, [delay, delay + 25], [0, 1], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
          easing: ENTER_EASING,
        });

        return (
          <div
            key={row.label}
            style={{
              position: 'absolute',
              left: 200,
              top: 260 + index * 130,
              opacity: progress,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 40,
                padding: '16px 40px',
                backgroundColor: PALETTE.paper,
                border: `3px solid ${PALETTE[row.accent]}`,
                borderRadius: 10,
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
              }}
            >
              <div style={{ ...baseTextStyle, fontSize: 32, fontWeight: 900, color: PALETTE[row.accent], minWidth: 140 }}>
                {row.label}
              </div>
              <div style={{ width: 40, height: 3, backgroundColor: PALETTE[row.accent] }} />
              <div style={{ ...baseTextStyle, fontSize: 28, fontWeight: 700, color: PALETTE.ink }}>
                区分标准：
                <span style={{ color: PALETTE[row.accent], fontWeight: 900 }}>{row.standard}</span>
              </div>
            </div>
          </div>
        );
      })}

      {/* 记忆口诀 */}
      <ImpactReveal delay={60} style={{ position: 'absolute', left: 250, top: 860 }}>
        <div style={{ ...baseTextStyle, fontSize: 30, fontWeight: 800 }}>
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
