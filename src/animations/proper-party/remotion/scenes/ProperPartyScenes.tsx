import {Building2, Eye, FileQuestion, Globe, Scale, Shield, TreePine, User, Users} from 'lucide-react';
import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {PALETTE, toSourceFrame} from '../storyboard';
import {
  baseTextStyle,
  ENTER_EASING,
  FlowArrow,
  IconNode,
  ImpactReveal,
  Keyword,
  MaskedReveal,
  SceneHeading,
} from '../visual-system';

export const PrincipleScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const progress = interpolate(frame, [14, 54], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: ENTER_EASING,
  });
  const entityProgress = interpolate(frame, [64, 114], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: ENTER_EASING,
  });

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="01" eyebrow="原则" title="谁是适格当事人？" accent="blue" />

      <MaskedReveal delay={8} duration={28} style={{position: 'absolute', left: 110, top: 280}}>
        <div style={{...baseTextStyle, fontSize: 56, fontWeight: 900, lineHeight: 1.2}}>
          本案所争议的<br />
          <Keyword accent="blue">民事实体法律关系</Keyword> 的 <Keyword accent="blue">主体</Keyword>
        </div>
      </MaskedReveal>

      <div style={{position: 'absolute', left: 110, top: 520, opacity: progress, translate: `${(1 - progress) * -40}px 0px`}}>
        <div
          style={{
            width: 800,
            height: 200,
            boxSizing: 'border-box',
            padding: '28px 32px',
            backgroundColor: PALETTE.paper,
            border: `3px solid ${PALETTE.blue}`,
            borderRadius: 8,
            boxShadow: '0 14px 34px rgba(23, 32, 29, 0.09)',
          }}
        >
          <div style={{...baseTextStyle, fontSize: 26, fontWeight: 800, color: PALETTE.blue}}>判断标准</div>
          <div style={{...baseTextStyle, marginTop: 14, fontSize: 28, fontWeight: 850}}>
            即本案 <Keyword accent="teal">诉讼标的</Keyword> 的主体，就是 <Keyword accent="blue">适格当事人</Keyword>
          </div>
        </div>
      </div>

      <div style={{position: 'absolute', left: 1020, top: 260, width: 860, height: 560}}>
        {[
          {icon: Scale, label: '侵权纠纷', detail: '行为人 + 受害人', accent: 'red' as const},
          {icon: FileQuestion, label: '合同纠纷', detail: '合同双方当事人', accent: 'teal' as const},
          {icon: Building2, label: '物权纠纷', detail: '物权归属主体', accent: 'gold' as const},
        ].map((item, index) => {
          const p = interpolate(entityProgress, [index * 0.33, (index + 1) * 0.33], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          });
          return (
            <div
              key={item.label}
              style={{
                position: 'absolute',
                top: index * 180,
                opacity: p,
                translate: `${(1 - p) * 50}px 0px`,
              }}
            >
              <IconNode icon={item.icon} label={item.label} detail={item.detail} accent={item.accent} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Exception1Scene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const progress = interpolate(frame, [14, 54], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: ENTER_EASING,
  });

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="02" eyebrow="例外一" title="确认之诉的确认利益" accent="teal" />

      <MaskedReveal delay={8} duration={28} style={{position: 'absolute', left: 110, top: 260}}>
        <div style={{...baseTextStyle, fontSize: 30, fontWeight: 800, lineHeight: 1.4}}>
          甲公司起诉乙公司，要求确认<br />
          <Keyword accent="teal">不存在专利侵权关系</Keyword>。
        </div>
      </MaskedReveal>

      <div style={{position: 'absolute', left: 110, top: 460, opacity: progress, translate: `${(1 - progress) * -40}px 0px`}}>
        <IconNode icon={Building2} label="甲公司" detail="不是侵权关系主体" accent="blue" />
      </div>

      <FlowArrow left={450} top={500} width={395} progress={progress} accent="teal" label="但有确认利益" />

      <div style={{position: 'absolute', left: 860, top: 460, opacity: progress, translate: `${(1 - progress) * 40}px 0px`}}>
        <IconNode icon={Eye} label="适格原告" detail="对诉讼标的有确认利益" accent="teal" />
      </div>

      <ImpactReveal delay={70} style={{position: 'absolute', left: 110, top: 720}}>
        <div
          style={{
            ...baseTextStyle,
            padding: '18px 28px',
            color: PALETTE.paper,
            backgroundColor: PALETTE.teal,
            borderRadius: 6,
            fontSize: 30,
            fontWeight: 900,
          }}
        >
          常见于 <Keyword accent="gold">消极的确认之诉</Keyword>：确认不存在某法律关系
        </div>
      </ImpactReveal>
    </div>
  );
};

export const Exception2Scene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const progress = interpolate(frame, [14, 54], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: ENTER_EASING,
  });

  const items = [
    {icon: User, label: '失踪人财产代管人', accent: 'blue' as const},
    {icon: Shield, label: '遗产管理人 / 遗嘱执行人', accent: 'blue' as const},
    {icon: Users, label: '股东代表诉讼中的股东', accent: 'blue' as const},
    {icon: Scale, label: '著作权集体管理组织', accent: 'blue' as const},
    {icon: Eye, label: '保护死者名誉的近亲属', accent: 'blue' as const},
  ];

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="03" eyebrow="例外二" title="对他人民事法律关系享有管理权" accent="gold" />

      <MaskedReveal delay={8} duration={28} style={{position: 'absolute', left: 110, top: 260}}>
        <div style={{...baseTextStyle, fontSize: 30, fontWeight: 800, lineHeight: 1.4}}>
          依法或依授权对他人法律关系享有 <Keyword accent="gold">管理权</Keyword> 的主体
        </div>
      </MaskedReveal>

      <div style={{position: 'absolute', left: 110, top: 400, width: 1700}}>
        {items.map((item, index) => {
          const p = interpolate(progress, [index * 0.18, (index + 1) * 0.18], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          });
          return (
            <div
              key={item.label}
              style={{
                position: 'absolute',
                left: index * 340,
                opacity: p,
                translate: `0px ${(1 - p) * 40}px`,
              }}
            >
              <IconNode icon={item.icon} label={item.label} accent={item.accent} compact />
            </div>
          );
        })}
      </div>

      <ImpactReveal delay={80} style={{position: 'absolute', left: 110, top: 620}}>
        <div
          style={{
            ...baseTextStyle,
            padding: '18px 28px',
            color: PALETTE.paper,
            backgroundColor: PALETTE.gold,
            borderRadius: 6,
            fontSize: 28,
            fontWeight: 900,
          }}
        >
          例：李四作为失踪人张三的财产代管人，可以起诉王五归还张三的借款
        </div>
      </ImpactReveal>
    </div>
  );
};

export const Exception3Scene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const progress = interpolate(frame, [14, 54], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: ENTER_EASING,
  });

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="04" eyebrow="例外三" title="公益诉讼的适格原告" accent="red" />

      <MaskedReveal delay={8} duration={28} style={{position: 'absolute', left: 110, top: 260}}>
        <div style={{...baseTextStyle, fontSize: 30, fontWeight: 800, lineHeight: 1.4}}>
          化工厂排污导致河流污染，<br />
          符合法定条件的 <Keyword accent="red">环保组织</Keyword> 提起公益诉讼。
        </div>
      </MaskedReveal>

      <div style={{position: 'absolute', left: 110, top: 460, opacity: progress, translate: `${(1 - progress) * -40}px 0px`}}>
        <IconNode icon={TreePine} label="环保组织" detail="不是侵权关系主体" accent="teal" />
      </div>

      <FlowArrow left={420} top={500} width={425} progress={progress} accent="red" label="法律特殊规定" />

      <div style={{position: 'absolute', left: 860, top: 460, opacity: progress, translate: `${(1 - progress) * 40}px 0px`}}>
        <IconNode icon={Globe} label="适格原告" detail="公益诉讼的适格原告" accent="red" />
      </div>

      <ImpactReveal delay={70} style={{position: 'absolute', left: 110, top: 720}}>
        <div
          style={{
            ...baseTextStyle,
            padding: '18px 28px',
            color: PALETTE.paper,
            backgroundColor: PALETTE.red,
            borderRadius: 6,
            fontSize: 30,
            fontWeight: 900,
          }}
        >
          基于法律特殊规定，有权对损害公共利益的行为提起公益诉讼
        </div>
      </ImpactReveal>
    </div>
  );
};

export const RecapScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const row1 = interpolate(frame, [14, 54], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const row2 = interpolate(frame, [54, 94], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="05" eyebrow="结论" title="适格当事人 vs 诉讼权利能力" accent="blue" />

      <div style={{position: 'absolute', left: 140, top: 280, width: 1640}}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 30,
            padding: '32px 40px',
            backgroundColor: PALETTE.paper,
            border: `3px solid ${PALETTE.blue}`,
            borderRadius: 8,
            opacity: row1,
            translate: `${(1 - row1) * -50}px 0px`,
          }}
        >
          <Scale size={56} color={PALETTE.blue} strokeWidth={2.2} />
          <div style={{...baseTextStyle, fontSize: 34, fontWeight: 900}}>
            <Keyword accent="blue">适格当事人</Keyword> 一定具有 <Keyword accent="blue">诉讼权利能力</Keyword>
          </div>
        </div>

        <div
          style={{
            marginTop: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 30,
            padding: '32px 40px',
            backgroundColor: PALETTE.paper,
            border: `3px solid ${PALETTE.red}`,
            borderRadius: 8,
            opacity: row2,
            translate: `${(1 - row2) * -50}px 0px`,
          }}
        >
          <FileQuestion size={56} color={PALETTE.red} strokeWidth={2.2} />
          <div style={{...baseTextStyle, fontSize: 34, fontWeight: 900}}>
            具有 <Keyword accent="red">诉讼权利能力</Keyword> 的人 <Keyword accent="red">不一定</Keyword> 就是适格当事人
          </div>
        </div>
      </div>

      <ImpactReveal delay={110} style={{position: 'absolute', left: 140, top: 780}}>
        <div style={{...baseTextStyle, fontSize: 28, fontWeight: 800, color: PALETTE.muted}}>
          诉讼权利能力是适格当事人的基础和前提
        </div>
      </ImpactReveal>
    </div>
  );
};
