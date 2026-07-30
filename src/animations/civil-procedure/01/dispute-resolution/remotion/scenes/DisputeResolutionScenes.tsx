import {
  Ban,
  CheckCircle2,
  FileCheck2,
  Gavel,
  Handshake,
  Landmark,
  Scale,
  ScrollText,
  Users,
  Zap,
} from 'lucide-react';
import {interpolate, useCurrentFrame} from 'remotion';
import {PALETTE, accentColor, accentSoftColor, toSourceFrame, type Accent} from '../storyboard';
import {
  ENTER_EASING,
  FadeIn,
  FlowArrow,
  IconNode,
  ImpactReveal,
  Keyword,
  MaskedReveal,
  SceneHeading,
  baseTextStyle,
} from '../visual-system';

const METHODS: {
  key: string;
  label: string;
  icon: typeof Handshake;
  accent: Accent;
  detail: string;
  force: string;
  x: number;
}[] = [
  {key: 'settlement', label: '和解', icon: Handshake, accent: 'gold', detail: '自行协商', force: '无强制力', x: 280},
  {key: 'mediation', label: '调解', icon: Users, accent: 'teal', detail: '第三方主持', force: '合同效力', x: 640},
  {key: 'arbitration', label: '仲裁', icon: Scale, accent: 'blue', detail: '民间裁决', force: '可强制执行', x: 1000},
  {key: 'litigation', label: '诉讼', icon: Landmark, accent: 'red', detail: '国家审判权', force: '可强制执行', x: 1360},
];

const DisputeToken = ({size = 72}: {size?: number}) => (
  <div
    style={{
      display: 'grid',
      width: size,
      height: size,
      placeItems: 'center',
      borderRadius: '50%',
      backgroundColor: PALETTE.redSoft,
      color: PALETTE.red,
      border: `3px solid ${PALETTE.red}`,
    }}
  >
    <Zap size={size * 0.5} strokeWidth={2.4} />
  </div>
);

/* ========== 01 光谱：四种路径 ========== */
export const SpectrumScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const axis = interpolate(frame, [28, 90], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: ENTER_EASING,
  });

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="01" eyebrow="多元纠纷解决机制" title="四条路径 · 非正式到正式" accent="blue" />

      <FadeIn delay={12} duration={26} style={{position: 'absolute', left: 90, top: 360}}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12}}>
          <DisputeToken size={96} />
          <div style={{...baseTextStyle, fontSize: 26, fontWeight: 900, color: PALETTE.red}}>民事纠纷</div>
        </div>
      </FadeIn>

      <FlowArrow
        left={210}
        top={400}
        width={160}
        progress={interpolate(frame, [30, 70], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}
        accent="ink"
        label="解决路径"
      />

      {/* 主光谱轴 */}
      <div style={{position: 'absolute', left: 380, top: 720, width: 1400, height: 8, backgroundColor: PALETTE.line, borderRadius: 4}}>
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: `${axis * 100}%`,
            backgroundColor: PALETTE.ink,
            borderRadius: 4,
            transformOrigin: 'left center',
          }}
        />
      </div>
      <div style={{...baseTextStyle, position: 'absolute', left: 380, top: 744, fontSize: 22, fontWeight: 800, color: PALETTE.muted}}>
        非正式
      </div>
      <div style={{...baseTextStyle, position: 'absolute', right: 120, top: 744, fontSize: 22, fontWeight: 800, color: PALETTE.muted}}>
        正式 / 国家强制
      </div>

      {METHODS.map((method, index) => {
        const delay = 55 + index * 28;
        const p = interpolate(frame, [delay, delay + 36], [0, 1], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
          easing: ENTER_EASING,
        });
        return (
          <div
            key={method.key}
            style={{
              position: 'absolute',
              left: method.x,
              top: 340,
              opacity: p,
              translate: `0px ${interpolate(p, [0, 1], [36, 0])}px`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <IconNode icon={method.icon} label={method.label} detail={method.detail} accent={method.accent} style={{width: 300, minHeight: 120}} />
            <div
              style={{
                width: 4,
                height: 80,
                backgroundColor: accentColor(method.accent),
                opacity: p,
                scale: `1 ${p}`,
                transformOrigin: 'top center',
              }}
            />
            <div
              style={{
                ...baseTextStyle,
                padding: '10px 16px',
                borderRadius: 8,
                backgroundColor: accentSoftColor(method.accent),
                color: accentColor(method.accent),
                fontSize: 22,
                fontWeight: 850,
                border: `2px solid ${accentColor(method.accent)}`,
              }}
            >
              {method.force}
            </div>
          </div>
        );
      })}

      <ImpactReveal delay={180} style={{position: 'absolute', left: 420, top: 830}}>
        <div style={{...baseTextStyle, fontSize: 32, fontWeight: 850}}>
          纠纷发生后，当事人可在 <Keyword accent="blue">四条路径</Keyword> 中选择
        </div>
      </ImpactReveal>
    </div>
  );
};

/* ========== 02 非正式：和解 vs 调解 ========== */
export const InformalScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const p1 = interpolate(frame, [18, 60], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p2 = interpolate(frame, [70, 115], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p3 = interpolate(frame, [140, 190], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="02" eyebrow="非正式路径" title="和解 · 调解" accent="gold" />

      <MaskedReveal delay={10} duration={22} style={{position: 'absolute', left: 120, top: 236}}>
        <div style={{...baseTextStyle, fontSize: 36, fontWeight: 900}}>
          共同点：靠自愿履行 · 自身 <Keyword accent="red">无强制执行力</Keyword>
        </div>
      </MaskedReveal>

      {/* 和解轨 */}
      <div
        style={{
          position: 'absolute',
          left: 100,
          top: 340,
          width: 1720,
          height: 200,
          boxSizing: 'border-box',
          padding: '24px 28px',
          backgroundColor: PALETTE.paper,
          border: `3px solid ${PALETTE.gold}`,
          borderRadius: 14,
          display: 'flex',
          alignItems: 'center',
          gap: 22,
          opacity: p1,
          translate: `0px ${interpolate(frame, [18, 60], [28, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}px`,
        }}
      >
        <IconNode icon={Handshake} label="和解" detail="当事人自行协商" accent="gold" style={{width: 320}} />
        <div style={{position: 'relative', width: 200, height: 70}}>
          <FlowArrow
            left={0}
            top={10}
            width={180}
            progress={interpolate(frame, [40, 80], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}
            accent="gold"
            label="达成协议"
          />
        </div>
        <IconNode icon={CheckCircle2} label="消灭争议" detail="协议约束双方" accent="gold" style={{width: 300}} />
        <div style={{width: 40, height: 4, backgroundColor: PALETTE.line}} />
        <div
          style={{
            ...baseTextStyle,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '18px 22px',
            backgroundColor: PALETTE.goldSoft,
            border: `2px solid ${PALETTE.gold}`,
            borderRadius: 10,
            fontSize: 26,
            fontWeight: 900,
            color: PALETTE.gold,
          }}
        >
          <Ban size={32} strokeWidth={2.4} />
          无强制执行力
        </div>
      </div>

      {/* 调解轨 */}
      <div
        style={{
          position: 'absolute',
          left: 100,
          top: 580,
          width: 1720,
          height: 200,
          boxSizing: 'border-box',
          padding: '24px 28px',
          backgroundColor: PALETTE.paper,
          border: `3px solid ${PALETTE.teal}`,
          borderRadius: 14,
          display: 'flex',
          alignItems: 'center',
          gap: 22,
          opacity: p2,
          translate: `0px ${interpolate(frame, [70, 115], [28, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}px`,
        }}
      >
        <IconNode icon={Users} label="调解" detail="调解组织主持" accent="teal" style={{width: 320}} />
        <div style={{position: 'relative', width: 200, height: 70}}>
          <FlowArrow
            left={0}
            top={10}
            width={180}
            progress={interpolate(frame, [95, 135], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}
            accent="teal"
            label="调解协议"
          />
        </div>
        <IconNode icon={ScrollText} label="合同效力" detail="有约束力" accent="teal" style={{width: 300}} />
        <div style={{width: 40, height: 4, backgroundColor: PALETTE.line}} />
        <div
          style={{
            ...baseTextStyle,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '18px 22px',
            backgroundColor: PALETTE.redSoft,
            border: `2px solid ${PALETTE.red}`,
            borderRadius: 10,
            fontSize: 26,
            fontWeight: 900,
            color: PALETTE.red,
          }}
        >
          <Ban size={32} strokeWidth={2.4} />
          仍无强制执行力
        </div>
      </div>

      <ImpactReveal delay={165} style={{position: 'absolute', left: 180, top: 830}}>
        <div style={{...baseTextStyle, fontSize: 30, fontWeight: 850, opacity: p3}}>
          记忆点：调解协议 ≈ <Keyword accent="teal">合同</Keyword> · 不等于可直接申请执行
        </div>
      </ImpactReveal>
    </div>
  );
};

/* ========== 03 正式：仲裁 vs 诉讼 ========== */
export const FormalScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const p1 = interpolate(frame, [16, 55], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p2 = interpolate(frame, [70, 115], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const gate = interpolate(frame, [40, 85], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p3 = interpolate(frame, [140, 185], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="03" eyebrow="正式路径" title="仲裁 · 诉讼" accent="blue" />

      <MaskedReveal delay={8} duration={20} style={{position: 'absolute', left: 120, top: 236}}>
        <div style={{...baseTextStyle, fontSize: 34, fontWeight: 900}}>
          二者均可强制执行 · 权力来源不同
        </div>
      </MaskedReveal>

      {/* 仲裁列 */}
      <div
        style={{
          position: 'absolute',
          left: 100,
          top: 340,
          width: 840,
          minHeight: 430,
          boxSizing: 'border-box',
          padding: '28px 30px',
          backgroundColor: PALETTE.paper,
          border: `3px solid ${PALETTE.blue}`,
          borderRadius: 14,
          opacity: p1,
          translate: `0px ${interpolate(frame, [16, 55], [30, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}px`,
        }}
      >
        <div style={{display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22}}>
          <Scale size={42} color={PALETTE.blue} strokeWidth={2.2} />
          <div style={{...baseTextStyle, fontSize: 36, fontWeight: 900, color: PALETTE.blue}}>仲裁</div>
        </div>
        <div style={{display: 'grid', gap: 16}}>
          <IconNode icon={Users} label="民间组织裁决" detail="非国家审判机关" accent="blue" style={{width: '100%'}} />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              padding: '16px 18px',
              backgroundColor: PALETTE.goldSoft,
              border: `3px solid ${PALETTE.gold}`,
              borderRadius: 10,
              opacity: gate,
              scale: interpolate(gate, [0, 1], [0.94, 1]),
            }}
          >
            <FileCheck2 size={36} color={PALETTE.gold} strokeWidth={2.3} />
            <div style={{...baseTextStyle}}>
              <div style={{fontSize: 26, fontWeight: 900, color: PALETTE.gold}}>前置门闩</div>
              <div style={{marginTop: 4, fontSize: 22, fontWeight: 750}}>
                必须有 <Keyword accent="gold">有效仲裁协议</Keyword>
              </div>
            </div>
          </div>
          <IconNode icon={Gavel} label="裁决书" detail="法律约束力 + 强制执行力" accent="blue" style={{width: '100%'}} />
        </div>
      </div>

      {/* 诉讼列 */}
      <div
        style={{
          position: 'absolute',
          left: 980,
          top: 340,
          width: 840,
          minHeight: 430,
          boxSizing: 'border-box',
          padding: '28px 30px',
          backgroundColor: PALETTE.paper,
          border: `3px solid ${PALETTE.red}`,
          borderRadius: 14,
          opacity: p2,
          translate: `0px ${interpolate(frame, [70, 115], [30, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}px`,
        }}
      >
        <div style={{display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22}}>
          <Landmark size={42} color={PALETTE.red} strokeWidth={2.2} />
          <div style={{...baseTextStyle, fontSize: 36, fontWeight: 900, color: PALETTE.red}}>民事诉讼</div>
        </div>
        <div style={{display: 'grid', gap: 16}}>
          <IconNode icon={Landmark} label="人民法院" detail="行使国家审判权" accent="red" style={{width: '100%'}} />
          <IconNode icon={ScrollText} label="无需仲裁协议" detail="起诉即启动公力救济" accent="red" style={{width: '100%'}} />
          <IconNode icon={Gavel} label="判决 / 裁定" detail="国家强制力保障" accent="red" style={{width: '100%'}} />
        </div>
      </div>

      <ImpactReveal delay={165} style={{position: 'absolute', left: 220, top: 830}}>
        <div style={{...baseTextStyle, fontSize: 30, fontWeight: 850, opacity: p3}}>
          仲裁 = 民间裁决 + 协议门闩 · 诉讼 = <Keyword accent="red">国家审判权</Keyword>
        </div>
      </ImpactReveal>
    </div>
  );
};

/* ========== 04 执行力：阶梯 + 司法确认转化 ========== */
export const EnforceabilityScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const ladder = interpolate(frame, [20, 100], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const transform = interpolate(frame, [120, 180], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const result = interpolate(frame, [175, 220], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});

  const steps = [
    {label: '和解', accent: 'gold' as const, outcome: '无强制执行力', icon: Handshake},
    {label: '调解', accent: 'teal' as const, outcome: '仅合同效力', icon: Users},
    {label: '仲裁', accent: 'blue' as const, outcome: '可强制执行', icon: Scale},
    {label: '诉讼', accent: 'red' as const, outcome: '可强制执行', icon: Landmark},
  ];

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="04" eyebrow="效力难点" title="执行力阶梯 · 司法确认" accent="red" />

      <MaskedReveal delay={8} duration={20} style={{position: 'absolute', left: 120, top: 236}}>
        <div style={{...baseTextStyle, fontSize: 34, fontWeight: 900}}>
          从无强制力 → 有强制力 · 调解可被“升级”
        </div>
      </MaskedReveal>

      {/* 四阶梯 */}
      <div style={{position: 'absolute', left: 100, top: 330, display: 'flex', gap: 24, width: 1720}}>
        {steps.map((step, index) => {
          const delay = 24 + index * 22;
          const p = interpolate(frame, [delay, delay + 34], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: ENTER_EASING,
          });
          const Icon = step.icon;
          return (
            <div
              key={step.label}
              style={{
                flex: 1,
                minHeight: 230,
                boxSizing: 'border-box',
                padding: '24px 18px',
                backgroundColor: PALETTE.paper,
                border: `3px solid ${accentColor(step.accent)}`,
                borderRadius: 14,
                opacity: p * ladder,
                translate: `0px ${interpolate(p, [0, 1], [28, 0])}px`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 14,
                ...baseTextStyle,
              }}
            >
              <div
                style={{
                  width: 68,
                  height: 68,
                  display: 'grid',
                  placeItems: 'center',
                  borderRadius: 10,
                  backgroundColor: accentSoftColor(step.accent),
                  color: accentColor(step.accent),
                }}
              >
                <Icon size={38} strokeWidth={2.2} />
              </div>
              <div style={{fontSize: 32, fontWeight: 900}}>{step.label}</div>
              <div
                style={{
                  padding: '10px 16px',
                  borderRadius: 8,
                  backgroundColor: accentSoftColor(step.accent),
                  color: accentColor(step.accent),
                  fontSize: 22,
                  fontWeight: 850,
                  textAlign: 'center',
                }}
              >
                {step.outcome}
              </div>
            </div>
          );
        })}
      </div>

      {/* 司法确认转化带 */}
      <div
        style={{
          position: 'absolute',
          left: 100,
          top: 620,
          width: 1720,
          height: 180,
          boxSizing: 'border-box',
          padding: '24px 28px',
          backgroundColor: PALETTE.paper,
          border: `3px solid ${PALETTE.teal}`,
          borderRadius: 14,
          display: 'flex',
          alignItems: 'center',
          gap: 18,
          opacity: transform,
          translate: `0px ${interpolate(transform, [0, 1], [24, 0])}px`,
        }}
      >
        <IconNode icon={ScrollText} label="调解协议" detail="合同效力" accent="teal" compact style={{width: 280}} />
        <div style={{position: 'relative', width: 180, height: 70}}>
          <FlowArrow left={0} top={10} width={160} progress={transform} accent="gold" label="法院" />
        </div>
        <IconNode icon={FileCheck2} label="司法确认" detail="裁定确认" accent="gold" compact style={{width: 280}} />
        <div style={{position: 'relative', width: 180, height: 70}}>
          <FlowArrow left={0} top={10} width={160} progress={result} accent="red" label="升级" />
        </div>
        <div
          style={{
            opacity: result,
            ...baseTextStyle,
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            padding: '18px 24px',
            backgroundColor: PALETTE.redSoft,
            border: `3px solid ${PALETTE.red}`,
            borderRadius: 12,
            fontSize: 28,
            fontWeight: 900,
            color: PALETTE.red,
          }}
        >
          <Gavel size={36} strokeWidth={2.3} />
          可申请强制执行
        </div>
      </div>

      <ImpactReveal delay={220} style={{position: 'absolute', left: 280, top: 840}}>
        <div style={{...baseTextStyle, fontSize: 30, fontWeight: 850}}>
          难点：调解本身不可执行 · 经 <Keyword accent="gold">司法确认</Keyword> 后方可执行
        </div>
      </ImpactReveal>
    </div>
  );
};

/* ========== 05 收束 ========== */
export const RecapScene = () => {
  const frame = toSourceFrame(useCurrentFrame());

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="05" eyebrow="总结" title="四路径对照总表" accent="red" />

      <MaskedReveal delay={8} duration={20} style={{position: 'absolute', left: 120, top: 236}}>
        <div style={{...baseTextStyle, fontSize: 34, fontWeight: 900}}>
          选路径的核心：是否需要 <Keyword accent="red">国家强制力</Keyword>
        </div>
      </MaskedReveal>

      <div
        style={{
          position: 'absolute',
          left: 100,
          top: 340,
          width: 1720,
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 22,
        }}
      >
        {METHODS.map((method, index) => {
          const delay = 20 + index * 26;
          const p = interpolate(frame, [delay, delay + 36], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: ENTER_EASING,
          });
          const Icon = method.icon;
          const tags =
            method.key === 'settlement'
              ? ['自行协商', '无强制力']
              : method.key === 'mediation'
                ? ['第三人主持', '合同效力', '确认后可执行']
                : method.key === 'arbitration'
                  ? ['有效协议', '民间裁决', '可强制执行']
                  : ['国家审判权', '可强制执行'];
          return (
            <div
              key={method.key}
              style={{
                minHeight: 380,
                boxSizing: 'border-box',
                padding: '26px 22px',
                backgroundColor: PALETTE.paper,
                border: `3px solid ${accentColor(method.accent)}`,
                borderRadius: 14,
                opacity: p,
                translate: `0px ${interpolate(p, [0, 1], [30, 0])}px`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 16,
                ...baseTextStyle,
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  display: 'grid',
                  placeItems: 'center',
                  borderRadius: 12,
                  backgroundColor: accentSoftColor(method.accent),
                  color: accentColor(method.accent),
                }}
              >
                <Icon size={40} strokeWidth={2.2} />
              </div>
              <div style={{fontSize: 34, fontWeight: 900, color: accentColor(method.accent)}}>{method.label}</div>
              <div style={{fontSize: 20, color: PALETTE.muted, fontWeight: 700}}>{method.detail}</div>
              <div style={{width: '100%', height: 2, backgroundColor: PALETTE.line, margin: '4px 0'}} />
              {tags.map((tag) => (
                <div
                  key={tag}
                  style={{
                    width: '100%',
                    textAlign: 'center',
                    padding: '10px 8px',
                    borderRadius: 8,
                    backgroundColor: accentSoftColor(method.accent),
                    color: accentColor(method.accent),
                    fontSize: 22,
                    fontWeight: 850,
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>
          );
        })}
      </div>

      <ImpactReveal delay={160} style={{position: 'absolute', left: 240, top: 800}}>
        <div
          style={{
            ...baseTextStyle,
            fontSize: 28,
            fontWeight: 850,
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            padding: '16px 24px',
            backgroundColor: PALETTE.goldSoft,
            border: `2px solid ${PALETTE.gold}`,
            borderRadius: 10,
          }}
        >
          <FileCheck2 size={32} color={PALETTE.gold} />
          调解例外通道：协议 → 司法确认 → 强制执行
        </div>
      </ImpactReveal>
    </div>
  );
};
