import {AlertTriangle, CheckCircle2, Scale, Shield, User, Users, XCircle} from 'lucide-react';
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

export const GeneralScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const progress1 = interpolate(frame, [14, 54], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: ENTER_EASING,
  });
  const progress2 = interpolate(frame, [64, 104], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: ENTER_EASING,
  });

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="01" eyebrow="一般保证" title="先诉抗辩权的保护" accent="red" />

      <MaskedReveal delay={8} duration={28} style={{position: 'absolute', left: 110, top: 260}}>
        <div style={{...baseTextStyle, fontSize: 30, fontWeight: 800, lineHeight: 1.4}}>
          一般保证人享有 <Keyword accent="red">先诉抗辩权</Keyword>
        </div>
      </MaskedReveal>

      <div style={{position: 'absolute', left: 110, top: 400, opacity: progress1, translate: `${(1 - progress1) * -40}px 0px`}}>
        <IconNode icon={User} label="仅起诉债务人" detail="债务人为被告" accent="blue" compact />
      </div>
      <div style={{position: 'absolute', left: 460, top: 400, opacity: progress1, translate: `${(1 - progress1) * -20}px 0px`}}>
        <IconNode icon={AlertTriangle} label="仅起诉保证人" detail="法院应追加债务人为共同被告" accent="red" compact />
      </div>
      <div style={{position: 'absolute', left: 810, top: 400, opacity: progress2, translate: `${(1 - progress2) * 20}px 0px`}}>
        <IconNode icon={Users} label="起诉两者" detail="共同被告" accent="teal" compact />
      </div>

      <FlowArrow left={375} top={440} width={70} progress={progress1} accent="red" />
      <FlowArrow left={725} top={440} width={70} progress={progress2} accent="teal" />

      <ImpactReveal delay={90} style={{position: 'absolute', left: 110, top: 600}}>
        <div
          style={{
            ...baseTextStyle,
            padding: '18px 28px',
            color: PALETTE.paper,
            backgroundColor: PALETTE.red,
            borderRadius: 6,
            fontSize: 28,
            fontWeight: 900,
          }}
        >
          判决主文应明确：保证人仅对债务人财产 <Keyword accent="gold">依法强制执行后仍不能履行</Keyword> 的部分承担责任
        </div>
      </ImpactReveal>
    </div>
  );
};

export const JointScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const progress = interpolate(frame, [14, 54], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: ENTER_EASING,
  });

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="02" eyebrow="连带保证" title="债权人享有选择权" accent="teal" />

      <MaskedReveal delay={8} duration={28} style={{position: 'absolute', left: 110, top: 260}}>
        <div style={{...baseTextStyle, fontSize: 30, fontWeight: 800, lineHeight: 1.4}}>
          连带保证中，债权人可以 <Keyword accent="teal">单独或一并起诉</Keyword>
        </div>
      </MaskedReveal>

      <div style={{position: 'absolute', left: 110, top: 420, opacity: progress, translate: `${(1 - progress) * -40}px 0px`}}>
        <IconNode icon={User} label="仅起诉债务人" detail="债务人为被告" accent="blue" />
      </div>
      <div style={{position: 'absolute', left: 520, top: 420, opacity: progress, translate: `${(1 - progress) * -20}px 0px`}}>
        <IconNode icon={Shield} label="仅起诉保证人" detail="保证人为被告" accent="teal" />
      </div>
      <div style={{position: 'absolute', left: 930, top: 420, opacity: progress, translate: `${(1 - progress) * 20}px 0px`}}>
        <IconNode icon={Users} label="起诉两者" detail="共同被告" accent="gold" />
      </div>

      <FlowArrow left={425} top={470} width={80} progress={progress} accent="teal" />
      <FlowArrow left={835} top={470} width={80} progress={progress} accent="gold" />

      <ImpactReveal delay={70} style={{position: 'absolute', left: 110, top: 660}}>
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
          连带保证人 <Keyword accent="gold">无先诉抗辩权</Keyword>，债权人可自由选择被告
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
      <SceneHeading index="03" eyebrow="结论" title="一般保证 vs 连带保证速记" accent="blue" />

      <div style={{position: 'absolute', left: 140, top: 280, width: 1640}}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 30,
            padding: '32px 40px',
            backgroundColor: PALETTE.paper,
            border: `3px solid ${PALETTE.red}`,
            borderRadius: 8,
            opacity: row1,
            translate: `${(1 - row1) * -50}px 0px`,
          }}
        >
          <AlertTriangle size={56} color={PALETTE.red} strokeWidth={2.2} />
          <div style={{...baseTextStyle, fontSize: 32, fontWeight: 900}}>
            <Keyword accent="red">一般保证</Keyword>：保证人有 <Keyword accent="red">先诉抗辩权</Keyword>；仅起诉保证人的，法院应追加债务人
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
            border: `3px solid ${PALETTE.teal}`,
            borderRadius: 8,
            opacity: row2,
            translate: `${(1 - row2) * -50}px 0px`,
          }}
        >
          <CheckCircle2 size={56} color={PALETTE.teal} strokeWidth={2.2} />
          <div style={{...baseTextStyle, fontSize: 32, fontWeight: 900}}>
            <Keyword accent="teal">连带保证</Keyword>：债权人可 <Keyword accent="teal">单独或一并起诉</Keyword>，无先诉抗辩权
          </div>
        </div>
      </div>

      <ImpactReveal delay={110} style={{position: 'absolute', left: 140, top: 780}}>
        <div style={{...baseTextStyle, fontSize: 28, fontWeight: 800, color: PALETTE.muted}}>
          核心区别：一般保证有先诉抗辩权，连带保证无先诉抗辩权
        </div>
      </ImpactReveal>
    </div>
  );
};
