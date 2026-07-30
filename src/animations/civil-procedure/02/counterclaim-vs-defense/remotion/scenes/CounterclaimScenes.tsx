import {
  ArrowLeftRight,
  Ban,
  CheckCircle2,
  Clock,
  FileWarning,
  Gavel,
  Link2,
  Scale,
  Shield,
  ShieldAlert,
  Swords,
  UserRound,
  XCircle,
} from 'lucide-react';
import {interpolate, useCurrentFrame} from 'remotion';
import {PALETTE, toSourceFrame} from '../storyboard';
import {
  ENTER_EASING,
  FlowArrow,
  IconNode,
  ImpactReveal,
  Keyword,
  MaskedReveal,
  SceneHeading,
  baseTextStyle,
} from '../visual-system';

/* ========== 01 概念：反诉 vs 反驳 ========== */
export const ConceptScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const p1 = interpolate(frame, [18, 65], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p2 = interpolate(frame, [75, 120], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p3 = interpolate(frame, [140, 180], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="01" eyebrow="概念" title="反诉是独立的诉" accent="red" />

      <MaskedReveal delay={12} duration={24} style={{position: 'absolute', left: 120, top: 236}}>
        <div style={{...baseTextStyle, fontSize: 40, fontWeight: 900, lineHeight: 1.22}}>
          本诉被告 → 对本诉原告 · 提出 <Keyword accent="red">独立反请求</Keyword>
        </div>
      </MaskedReveal>

      <div style={{position: 'absolute', left: 100, top: 380, display: 'flex', gap: 28}}>
        <div
          style={{
            width: 860,
            minHeight: 400,
            boxSizing: 'border-box',
            padding: '30px 32px',
            backgroundColor: PALETTE.paper,
            border: `3px solid ${PALETTE.red}`,
            borderRadius: 14,
            boxShadow: '0 14px 34px rgba(23, 32, 29, 0.09)',
            opacity: p1,
            translate: `0px ${interpolate(frame, [18, 65], [30, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}px`,
            ...baseTextStyle,
          }}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 14, marginBottom: 26}}>
            <Swords size={42} color={PALETTE.red} strokeWidth={2.2} />
            <div style={{fontSize: 36, fontWeight: 900, color: PALETTE.red}}>反诉</div>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18}}>
            <IconNode icon={UserRound} label="主体同一" detail="被告 → 原告" accent="red" compact style={{width: '100%'}} />
            <IconNode icon={Gavel} label="独立之诉" detail="可单独起诉" accent="red" compact style={{width: '100%'}} />
            <IconNode icon={Link2} label="须有牵连" detail="事实 / 关系 / 因果" accent="gold" compact style={{width: '100%'}} />
            <IconNode icon={CheckCircle2} label="本诉撤后" detail="反诉继续" accent="red" compact style={{width: '100%'}} />
          </div>
        </div>

        <div
          style={{
            width: 860,
            minHeight: 400,
            boxSizing: 'border-box',
            padding: '30px 32px',
            backgroundColor: PALETTE.paper,
            border: `3px solid ${PALETTE.teal}`,
            borderRadius: 14,
            boxShadow: '0 14px 34px rgba(23, 32, 29, 0.09)',
            opacity: p2,
            translate: `0px ${interpolate(frame, [75, 120], [30, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}px`,
            ...baseTextStyle,
          }}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 14, marginBottom: 26}}>
            <Shield size={42} color={PALETTE.teal} strokeWidth={2.2} />
            <div style={{fontSize: 36, fontWeight: 900, color: PALETTE.teal}}>反驳</div>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18}}>
            <IconNode icon={ShieldAlert} label="防御主张" detail="依附本诉" accent="teal" compact style={{width: '100%'}} />
            <IconNode icon={Ban} label="不能独立" detail="无法单独起诉" accent="teal" compact style={{width: '100%'}} />
            <IconNode icon={XCircle} label="非独立之诉" detail="仅抗辩" accent="teal" compact style={{width: '100%'}} />
            <IconNode icon={FileWarning} label="本诉一撤" detail="抗辩一并消失" accent="teal" compact style={{width: '100%'}} />
          </div>
        </div>
      </div>

      <ImpactReveal delay={155} style={{position: 'absolute', left: 120, top: 850}}>
        <div
          style={{
            opacity: p3,
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
          <ArrowLeftRight size={34} color={PALETTE.gold} />
          主体同一 ≠ 诉讼地位相同：本诉原被告在反诉中
          <Keyword accent="gold">地位互换</Keyword>
        </div>
      </ImpactReveal>
    </div>
  );
};

/* ========== 02 技术流：去掉原告主张 ========== */
export const TechniqueScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const p1 = interpolate(frame, [16, 55], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p2 = interpolate(frame, [70, 115], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p3 = interpolate(frame, [130, 180], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const line = interpolate(frame, [50, 100], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="02" eyebrow="技术流" title="去掉原告主张测试法" accent="gold" />

      <MaskedReveal delay={10} duration={22} style={{position: 'absolute', left: 120, top: 236}}>
        <div style={{...baseTextStyle, fontSize: 42, fontWeight: 900, lineHeight: 1.22}}>
          假设没有原告起诉 · 被告能否 <Keyword accent="gold">单独起诉</Keyword>？
        </div>
      </MaskedReveal>

      {/* 主干决策带 */}
      <div
        style={{
          position: 'absolute',
          left: 100,
          top: 380,
          width: 1720,
          height: 220,
          boxSizing: 'border-box',
          padding: '30px 36px',
          backgroundColor: PALETTE.paper,
          border: `2px solid ${PALETTE.line}`,
          borderRadius: 14,
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          opacity: p1,
        }}
      >
        <IconNode icon={Scale} label="被告的主张" detail="待判断" accent="blue" style={{width: 320, minHeight: 130}} />
        <div style={{width: 220, position: 'relative', height: 80}}>
          <FlowArrow left={10} top={18} width={180} progress={line} accent="gold" label="剥离本诉" />
        </div>
        <div style={{opacity: p2}}>
          <IconNode icon={FileWarning} label="单独起诉？" detail="能不能成立" accent="gold" style={{width: 320, minHeight: 130}} />
        </div>
        <div style={{width: 48, height: 4, backgroundColor: PALETTE.line, opacity: p2}} />
        <div style={{opacity: p3, display: 'flex', flexDirection: 'column', gap: 14}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
            <div style={{...baseTextStyle, width: 88, height: 52, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.redSoft, color: PALETTE.red, borderRadius: 8, fontWeight: 900, fontSize: 22}}>
              能
            </div>
            <IconNode icon={Swords} label="构成反诉" detail="独立的诉" accent="red" compact style={{width: 340}} />
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
            <div style={{...baseTextStyle, width: 88, height: 52, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.tealSoft, color: PALETTE.teal, borderRadius: 8, fontWeight: 900, fontSize: 22}}>
              不能
            </div>
            <IconNode icon={Shield} label="构成反驳" detail="防御主张" accent="teal" compact style={{width: 340}} />
          </div>
        </div>
      </div>

      {/* 底部警示 + 示例提示 */}
      <div
        style={{
          position: 'absolute',
          left: 100,
          top: 660,
          display: 'flex',
          gap: 28,
          opacity: p3,
          translate: `0px ${interpolate(frame, [130, 180], [24, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}px`,
        }}
      >
        <div
          style={{
            width: 840,
            minHeight: 220,
            boxSizing: 'border-box',
            padding: '28px 30px',
            backgroundColor: PALETTE.paper,
            border: `3px solid ${PALETTE.gold}`,
            borderRadius: 14,
            ...baseTextStyle,
          }}
        >
          <div style={{fontSize: 26, fontWeight: 900, color: PALETTE.gold, marginBottom: 16}}>判断口诀</div>
          <div style={{fontSize: 28, fontWeight: 850, lineHeight: 1.55}}>
            能单独起诉 → <Keyword accent="red">反诉</Keyword>
            <br />
            不能单独起诉 → <Keyword accent="teal">反驳</Keyword>
          </div>
        </div>
        <div
          style={{
            width: 840,
            minHeight: 220,
            boxSizing: 'border-box',
            padding: '28px 30px',
            backgroundColor: PALETTE.paper,
            border: `3px solid ${PALETTE.muted}`,
            borderRadius: 14,
            ...baseTextStyle,
          }}
        >
          <div style={{fontSize: 26, fontWeight: 900, color: PALETTE.ink, marginBottom: 16}}>别被效果骗</div>
          <div style={{fontSize: 26, fontWeight: 750, lineHeight: 1.55, color: PALETTE.muted}}>
            不要看“抵销 / 折抵”等法律效果
            <br />
            效果相同，定性也可能不同
          </div>
        </div>
      </div>
    </div>
  );
};

/* ========== 03 案例对照 ========== */
export const CasesScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const items = [
    {delay: 18, title: '主张借款已归还', result: '反驳', reason: '不能单独起诉“已还”', accent: 'teal' as const, icon: Shield},
    {delay: 70, title: '主张已过诉讼时效', result: '反驳', reason: '不能单独起诉“时效届满”', accent: 'teal' as const, icon: Clock},
    {delay: 120, title: '确认合同无效 + 缔约过失', result: '反诉', reason: '可单独起诉确认无效并索赔', accent: 'red' as const, icon: Swords},
    {delay: 170, title: '玉石价款折抵借款', result: '反诉', reason: '可单独主张玉石买卖价款', accent: 'red' as const, icon: Swords},
  ];

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="03" eyebrow="案例" title="四组典型对照" accent="blue" />

      <MaskedReveal delay={10} duration={20} style={{position: 'absolute', left: 120, top: 236}}>
        <div style={{...baseTextStyle, fontSize: 34, fontWeight: 900}}>
          本诉：原告请求归还借款 / 履行合同
        </div>
      </MaskedReveal>

      <div
        style={{
          position: 'absolute',
          left: 100,
          top: 360,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 28,
          width: 1720,
        }}
      >
        {items.map((item, index) => {
          const p = interpolate(frame, [item.delay, item.delay + 42], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: ENTER_EASING,
          });
          const Icon = item.icon;
          const color = item.accent === 'red' ? PALETTE.red : PALETTE.teal;
          const soft = item.accent === 'red' ? PALETTE.redSoft : PALETTE.tealSoft;
          return (
            <div
              key={item.title}
              style={{
                opacity: p,
                translate: `0px ${interpolate(frame, [item.delay, item.delay + 42], [28, 0], {
                  extrapolateLeft: 'clamp',
                  extrapolateRight: 'clamp',
                  easing: ENTER_EASING,
                })}px`,
                display: 'flex',
                gap: 22,
                alignItems: 'stretch',
                minHeight: 230,
                boxSizing: 'border-box',
                padding: '28px 30px',
                backgroundColor: PALETTE.paper,
                border: `3px solid ${color}`,
                borderRadius: 14,
                boxShadow: '0 14px 34px rgba(23, 32, 29, 0.09)',
                ...baseTextStyle,
              }}
            >
              <div
                style={{
                  width: 96,
                  display: 'grid',
                  placeItems: 'center',
                  backgroundColor: soft,
                  borderRadius: 12,
                  color,
                  flex: '0 0 auto',
                }}
              >
                <Icon size={48} strokeWidth={2.2} />
              </div>
              <div style={{flex: 1}}>
                <div style={{fontSize: 20, fontWeight: 800, color: PALETTE.muted, marginBottom: 10}}>例 {index + 1}</div>
                <div style={{fontSize: 30, fontWeight: 900, marginBottom: 12}}>{item.title}</div>
                <div style={{fontSize: 24, color: PALETTE.ink, fontWeight: 700, lineHeight: 1.4}}>{item.reason}</div>
              </div>
              <div
                style={{
                  alignSelf: 'center',
                  minWidth: 120,
                  padding: '16px 20px',
                  borderRadius: 10,
                  textAlign: 'center',
                  backgroundColor: soft,
                  color,
                  fontSize: 30,
                  fontWeight: 900,
                }}
              >
                {item.result}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ========== 04 独立性：本诉撤诉反诉继续 ========== */
export const IndependenceScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const p1 = interpolate(frame, [16, 60], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p2 = interpolate(frame, [80, 125], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p3 = interpolate(frame, [145, 195], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const path = interpolate(frame, [60, 110], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="04" eyebrow="独立性" title="本诉撤 · 反诉仍在" accent="purple" />

      <MaskedReveal delay={10} duration={22} style={{position: 'absolute', left: 120, top: 236}}>
        <div style={{...baseTextStyle, fontSize: 40, fontWeight: 900, lineHeight: 1.22}}>
          反诉虽以本诉为前提，但 <Keyword accent="purple">独立存在</Keyword>
        </div>
      </MaskedReveal>

      {/* 双轨流程图 */}
      <div
        style={{
          position: 'absolute',
          left: 100,
          top: 380,
          width: 1720,
          height: 260,
          boxSizing: 'border-box',
          padding: '28px 32px',
          backgroundColor: PALETTE.paper,
          border: `2px solid ${PALETTE.line}`,
          borderRadius: 14,
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          opacity: p1,
        }}
      >
        <IconNode icon={FileWarning} label="本诉" detail="原告起诉" accent="blue" style={{width: 280, minHeight: 140}} />
        <IconNode icon={Swords} label="反诉" detail="被告反请求" accent="red" style={{width: 280, minHeight: 140}} />
        <div style={{width: 180, position: 'relative', height: 80}}>
          <FlowArrow left={8} top={18} width={150} progress={path} accent="gold" label="原告撤诉" />
        </div>
        <div style={{opacity: p2}}>
          <IconNode icon={XCircle} label="本诉消灭" detail="撤诉 / 按撤诉处理" accent="gold" style={{width: 340, minHeight: 140}} />
        </div>
        <div style={{width: 48, height: 4, backgroundColor: PALETTE.line, opacity: p2}} />
        <div style={{opacity: p3}}>
          <IconNode icon={CheckCircle2} label="反诉继续进行" detail="可缺席判决" accent="red" style={{width: 340, minHeight: 140}} />
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 100,
          top: 700,
          display: 'flex',
          gap: 28,
          opacity: p3,
          translate: `0px ${interpolate(frame, [145, 195], [24, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}px`,
        }}
      >
        <IconNode icon={UserRound} label="本诉中 = 被告" detail="可按撤诉处理" accent="blue" style={{width: 520, minHeight: 140}} />
        <IconNode icon={UserRound} label="反诉中 = 原告" detail="不到庭可缺席判决" accent="red" style={{width: 560, minHeight: 140}} />
        <IconNode icon={CheckCircle2} label="两诉相互独立" detail="本诉消 ≠ 反诉消" accent="purple" style={{width: 560, minHeight: 140}} />
      </div>
    </div>
  );
};

/* ========== 05 总结流程图 + 要件 ========== */
export const RecapScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const p1 = interpolate(frame, [16, 60], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p2 = interpolate(frame, [75, 120], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p3 = interpolate(frame, [145, 200], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const line = interpolate(frame, [55, 105], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="05" eyebrow="总结" title="判断流 + 要件口诀" accent="blue" />

      <div
        style={{
          position: 'absolute',
          left: 100,
          top: 270,
          width: 1720,
          height: 220,
          boxSizing: 'border-box',
          padding: '26px 30px',
          backgroundColor: PALETTE.paper,
          border: `2px solid ${PALETTE.line}`,
          borderRadius: 14,
          display: 'flex',
          alignItems: 'center',
          gap: 18,
          opacity: p1,
        }}
      >
        <IconNode icon={Scale} label="被告主张" detail="是什么？" accent="blue" style={{width: 300, minHeight: 130}} />
        <div style={{width: 150, position: 'relative', height: 80}}>
          <FlowArrow left={8} top={20} width={120} progress={line} accent="gold" />
        </div>
        <IconNode icon={FileWarning} label="去掉原告主张" detail="能否单独起诉？" accent="gold" style={{width: 340, minHeight: 130}} />
        <div style={{width: 36, height: 4, backgroundColor: PALETTE.line, opacity: p2}} />
        <div style={{opacity: p2, display: 'flex', flexDirection: 'column', gap: 12}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <div style={{...baseTextStyle, width: 84, height: 48, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.redSoft, color: PALETTE.red, borderRadius: 8, fontWeight: 900, fontSize: 20}}>
              能
            </div>
            <IconNode icon={Swords} label="反诉" detail="独立之诉" accent="red" compact style={{width: 320}} />
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <div style={{...baseTextStyle, width: 84, height: 48, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.tealSoft, color: PALETTE.teal, borderRadius: 8, fontWeight: 900, fontSize: 20}}>
              不能
            </div>
            <IconNode icon={Shield} label="反驳" detail="防御主张" accent="teal" compact style={{width: 320}} />
          </div>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 100,
          top: 540,
          width: 1720,
          minHeight: 340,
          opacity: p3,
          translate: `0px ${interpolate(frame, [145, 200], [26, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}px`,
          boxSizing: 'border-box',
          padding: '32px 34px',
          backgroundColor: PALETTE.paper,
          border: `3px solid ${PALETTE.purple}`,
          borderRadius: 14,
          boxShadow: '0 14px 34px rgba(23, 32, 29, 0.09)',
          ...baseTextStyle,
        }}
      >
        <div style={{fontSize: 30, fontWeight: 900, color: PALETTE.purple, marginBottom: 26}}>反诉要件 · 主时牵管程</div>
        <div style={{display: 'flex', gap: 20, flexWrap: 'wrap'}}>
          <IconNode icon={UserRound} label="主" detail="被告 → 原告" accent="purple" style={{width: 300, minHeight: 130}} />
          <IconNode icon={Clock} label="时" detail="一审辩论终结前" accent="purple" style={{width: 320, minHeight: 130}} />
          <IconNode icon={Link2} label="牵" detail="事实 / 关系 / 因果" accent="purple" style={{width: 340, minHeight: 130}} />
          <IconNode icon={Gavel} label="管" detail="牵连管辖 · 专属除外" accent="purple" style={{width: 340, minHeight: 130}} />
          <IconNode icon={Scale} label="程" detail="同一程序" accent="purple" style={{width: 280, minHeight: 130}} />
        </div>
      </div>
    </div>
  );
};
