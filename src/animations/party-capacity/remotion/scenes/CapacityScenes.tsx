import {Baby, Brain, Building2, CircleCheck, CircleX, Crown, ShieldAlert, User, Users} from 'lucide-react';
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

export const DefinitionScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const boxProgress = interpolate(frame, [18, 58], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: ENTER_EASING,
  });
  const rowProgress = interpolate(frame, [68, 118], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: ENTER_EASING,
  });

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="01" eyebrow="概念" title="诉讼权利能力是什么？" accent="red" />

      <MaskedReveal delay={14} duration={28} style={{position: 'absolute', left: 110, top: 286}}>
        <div style={{...baseTextStyle, fontSize: 64, fontWeight: 900, lineHeight: 1.18}}>
          成为民事诉讼<br />
          <Keyword accent="red">当事人</Keyword> 的资格
        </div>
      </MaskedReveal>

      <div
        style={{
          position: 'absolute',
          left: 110,
          top: 520,
          width: 780,
          height: 220,
          boxSizing: 'border-box',
          padding: '28px 32px',
          backgroundColor: PALETTE.paper,
          border: `3px solid ${PALETTE.red}`,
          borderRadius: 8,
          boxShadow: '0 14px 34px rgba(23, 32, 29, 0.09)',
          opacity: boxProgress,
          translate: `${(1 - boxProgress) * -40}px 0px`,
        }}
      >
        <div style={{...baseTextStyle, fontSize: 26, fontWeight: 800, color: PALETTE.red}}>核心内涵</div>
        <div style={{...baseTextStyle, marginTop: 18, fontSize: 30, fontWeight: 850}}>
          享有 <Keyword accent="teal">诉讼权利</Keyword> 并承担 <Keyword accent="teal">诉讼义务</Keyword>
        </div>
      </div>

      <div style={{position: 'absolute', left: 980, top: 260, width: 860, height: 560}}>
        {[
          {icon: User, label: '自然人', detail: '始于出生，终于死亡', accent: 'blue' as const, delay: 0},
          {icon: Building2, label: '法人', detail: '始于成立，终于终止', accent: 'teal' as const, delay: 22},
          {icon: Users, label: '其他组织', detail: '符合条件的组织', accent: 'gold' as const, delay: 44},
        ].map((item, index) => {
          const p = interpolate(rowProgress, [index * 0.33, (index + 1) * 0.33], [0, 1], {
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

export const ComparisonScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const leftProgress = interpolate(frame, [14, 54], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: ENTER_EASING,
  });
  const rightProgress = interpolate(frame, [54, 94], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: ENTER_EASING,
  });
  const arrowProgress = interpolate(frame, [100, 140], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: ENTER_EASING,
  });

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="02" eyebrow="对比" title="权利能力 vs 行为能力" accent="teal" />

      <div style={{position: 'absolute', left: 100, top: 280, width: 780, height: 580, opacity: leftProgress, translate: `${(1 - leftProgress) * -60}px 0px`}}>
        <div
          style={{
            width: '100%',
            height: '100%',
            boxSizing: 'border-box',
            padding: '32px 36px',
            backgroundColor: PALETTE.paper,
            border: `4px solid ${PALETTE.blue}`,
            borderRadius: 8,
          }}
        >
          <div style={{...baseTextStyle, fontSize: 36, fontWeight: 900, color: PALETTE.blue}}>诉讼权利能力</div>
          <div style={{...baseTextStyle, marginTop: 14, fontSize: 24, color: PALETTE.muted}}>成为当事人的「资格」</div>
          <div style={{marginTop: 28, height: 2, backgroundColor: PALETTE.line}} />
          <div style={{marginTop: 28, display: 'flex', flexDirection: 'column', gap: 20}}>
            <IconNode icon={User} label="自然人" detail="出生即有，死亡即无" accent="blue" compact />
            <IconNode icon={Building2} label="法人" detail="成立即有，终止即无" accent="blue" compact />
            <IconNode icon={Users} label="其他组织" detail="依法设立并领照" accent="blue" compact />
          </div>
        </div>
      </div>

      <div style={{position: 'absolute', left: 1040, top: 280, width: 780, height: 580, opacity: rightProgress, translate: `${(1 - rightProgress) * 60}px 0px`}}>
        <div
          style={{
            width: '100%',
            height: '100%',
            boxSizing: 'border-box',
            padding: '32px 36px',
            backgroundColor: PALETTE.paper,
            border: `4px solid ${PALETTE.teal}`,
            borderRadius: 8,
          }}
        >
          <div style={{...baseTextStyle, fontSize: 36, fontWeight: 900, color: PALETTE.teal}}>诉讼行为能力</div>
          <div style={{...baseTextStyle, marginTop: 14, fontSize: 24, color: PALETTE.muted}}>亲自实施诉讼的「资格」</div>
          <div style={{marginTop: 28, height: 2, backgroundColor: PALETTE.line}} />
          <div style={{marginTop: 28, display: 'flex', flexDirection: 'column', gap: 20}}>
            <IconNode icon={Brain} label="完全民事行为能力人" detail="有诉讼行为能力" accent="teal" compact />
            <IconNode icon={Baby} label="无/限制民事行为能力人" detail="无诉讼行为能力" accent="red" compact />
            <IconNode icon={Building2} label="法人和其他组织" detail="与权利能力同时产生、消灭" accent="teal" compact />
          </div>
        </div>
      </div>

      <div style={{position: 'absolute', left: 860, top: 480, opacity: arrowProgress}}>
        <div style={{...baseTextStyle, fontSize: 28, fontWeight: 900, color: PALETTE.ink, textAlign: 'center'}}>
          区别
          <div style={{marginTop: 8, color: PALETTE.muted, fontSize: 22}}>有无 vs 能否</div>
        </div>
      </div>
    </div>
  );
};

export const CaseScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const plaintiffProgress = interpolate(frame, [14, 54], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: ENTER_EASING,
  });
  const defendantProgress = interpolate(frame, [54, 94], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: ENTER_EASING,
  });
  const agentProgress = interpolate(frame, [100, 140], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: ENTER_EASING,
  });

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="03" eyebrow="案例" title="无诉讼行为能力人如何诉讼？" accent="gold" />

      <MaskedReveal delay={8} duration={26} style={{position: 'absolute', left: 110, top: 260}}>
        <div style={{...baseTextStyle, fontSize: 28, fontWeight: 800, lineHeight: 1.4}}>
          张三（19岁）殴打 <Keyword accent="blue">李小四（9岁）</Keyword>，<br />
          李小四起诉主张医疗费。
        </div>
      </MaskedReveal>

      <div style={{position: 'absolute', left: 110, top: 430, opacity: plaintiffProgress, translate: `${(1 - plaintiffProgress) * -40}px 0px`}}>
        <IconNode icon={User} label="李小四" detail="原告：有诉讼权利能力" accent="blue" />
      </div>
      <div style={{position: 'absolute', left: 520, top: 430, opacity: agentProgress, translate: `${(1 - agentProgress) * -40}px 0px`}}>
        <IconNode icon={Crown} label="李四" detail="法定代理人" accent="gold" />
      </div>
      <div style={{position: 'absolute', left: 1400, top: 430, opacity: defendantProgress, translate: `${(1 - defendantProgress) * 40}px 0px`}}>
        <IconNode icon={ShieldAlert} label="张三" detail="被告" accent="red" />
      </div>

      <FlowArrow left={450} top={480} width={340} progress={agentProgress} accent="gold" label="代理" />
      <FlowArrow left={950} top={480} width={400} progress={defendantProgress} accent="red" />

      <ImpactReveal delay={150} style={{position: 'absolute', left: 110, top: 720}}>
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
          李小四无诉讼行为能力，需由法定代理人李四代为诉讼
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
      <SceneHeading index="04" eyebrow="结论" title="核心结论速记" accent="blue" />

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
          <CircleCheck size={56} color={PALETTE.blue} strokeWidth={2.2} />
          <div style={{...baseTextStyle, fontSize: 34, fontWeight: 900}}>
            无/限制民事行为能力人 <Keyword accent="blue">具有诉讼权利能力</Keyword>，可以作为 <Keyword accent="blue">当事人</Keyword>
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
          <CircleX size={56} color={PALETTE.red} strokeWidth={2.2} />
          <div style={{...baseTextStyle, fontSize: 34, fontWeight: 900}}>
            但因其 <Keyword accent="red">没有诉讼行为能力</Keyword>，故 <Keyword accent="red">不能亲自参加诉讼</Keyword>，需由法定代理人代为参加
          </div>
        </div>
      </div>

      <ImpactReveal delay={110} style={{position: 'absolute', left: 140, top: 780}}>
        <div style={{...baseTextStyle, fontSize: 28, fontWeight: 800, color: PALETTE.muted}}>
          诉讼权利能力是适格当事人的基础和前提，但不等于适格当事人
        </div>
      </ImpactReveal>
    </div>
  );
};
