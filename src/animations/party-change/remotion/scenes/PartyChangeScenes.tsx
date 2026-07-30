import {ArrowLeftRight, CircleCheck, CircleX, Divide, Merge, ShieldCheck, User, Users} from 'lucide-react';
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

export const ConceptScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const progress = interpolate(frame, [14, 54], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: ENTER_EASING,
  });

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="01" eyebrow="概念" title="当事人变更有哪些情形？" accent="blue" />

      <MaskedReveal delay={8} duration={28} style={{position: 'absolute', left: 110, top: 280}}>
        <div style={{...baseTextStyle, fontSize: 30, fontWeight: 800, lineHeight: 1.4}}>
          诉讼中，原当事人被变更为新的当事人
        </div>
      </MaskedReveal>

      <div style={{position: 'absolute', left: 110, top: 420, opacity: progress, translate: `${(1 - progress) * -40}px 0px`}}>
        <IconNode icon={User} label="自然人死亡" detail="继承人继承诉讼" accent="red" />
      </div>

      <div style={{position: 'absolute', left: 520, top: 420, opacity: progress, translate: `${(1 - progress) * -20}px 0px`}}>
        <IconNode icon={Merge} label="法人合并" detail="合并后的法人承担" accent="teal" />
      </div>

      <div style={{position: 'absolute', left: 930, top: 420, opacity: progress, translate: `${(1 - progress) * 20}px 0px`}}>
        <IconNode icon={Divide} label="法人分立" detail="分立后的法人承担" accent="teal" />
      </div>

      <div style={{position: 'absolute', left: 1340, top: 420, opacity: progress, translate: `${(1 - progress) * 40}px 0px`}}>
        <IconNode icon={ArrowLeftRight} label="实体权利义务转移" detail="当事人恒定主义" accent="gold" />
      </div>

      <ImpactReveal delay={70} style={{position: 'absolute', left: 110, top: 680}}>
        <div
          style={{
            ...baseTextStyle,
            padding: '18px 28px',
            color: PALETTE.paper,
            backgroundColor: PALETTE.blue,
            borderRadius: 6,
            fontSize: 28,
            fontWeight: 900,
          }}
        >
          前三种为 <Keyword accent="gold">法定变更</Keyword>；最后一种为 <Keyword accent="gold">基于当事人意思的变更</Keyword>
        </div>
      </ImpactReveal>
    </div>
  );
};

export const DeathScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const progress = interpolate(frame, [14, 54], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: ENTER_EASING,
  });

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="02" eyebrow="法定变更" title="自然人死亡与法人合并分立" accent="red" />

      <MaskedReveal delay={8} duration={28} style={{position: 'absolute', left: 110, top: 260}}>
        <div style={{...baseTextStyle, fontSize: 30, fontWeight: 800, lineHeight: 1.4}}>
          自然人当事人死亡，其民事权利义务发生 <Keyword accent="red">继承</Keyword>，<br />
          由 <Keyword accent="red">继承人</Keyword> 继承诉讼权利义务进行诉讼。
        </div>
      </MaskedReveal>

      <div style={{position: 'absolute', left: 110, top: 460, opacity: progress, translate: `${(1 - progress) * -40}px 0px`}}>
        <IconNode icon={User} label="原当事人（死亡）" detail="诉讼权利义务转移" accent="blue" />
      </div>

      <FlowArrow left={450} top={500} width={360} progress={progress} accent="red" label="继承" />

      <div style={{position: 'absolute', left: 860, top: 460, opacity: progress, translate: `${(1 - progress) * 40}px 0px`}}>
        <IconNode icon={Users} label="继承人" detail="新的当事人" accent="red" />
      </div>

      <ImpactReveal delay={70} style={{position: 'absolute', left: 110, top: 720}}>
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
          例外：民事权利义务具有 <Keyword accent="gold">人身专属性</Keyword> 的除外（如离婚诉讼一方死亡，诉讼终结）
        </div>
      </ImpactReveal>
    </div>
  );
};

export const TransferScene = () => {
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
  const progress3 = interpolate(frame, [114, 154], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: ENTER_EASING,
  });

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="03" eyebrow="当事人恒定主义" title="实体权利义务转移怎么办？" accent="gold" />

      <MaskedReveal delay={8} duration={28} style={{position: 'absolute', left: 110, top: 240}}>
        <div style={{...baseTextStyle, fontSize: 28, fontWeight: 800, lineHeight: 1.4}}>
          诉讼中，争议的民事权利义务 <Keyword accent="gold">转移</Keyword> 的，<br />
          <Keyword accent="gold">不影响</Keyword> 当事人的诉讼主体资格和诉讼地位。
        </div>
      </MaskedReveal>

      <div style={{position: 'absolute', left: 110, top: 430, opacity: progress1, translate: `${(1 - progress1) * -40}px 0px`}}>
        <IconNode icon={User} label="原当事人" detail="继续诉讼" accent="blue" />
      </div>

      <div style={{position: 'absolute', left: 530, top: 430, opacity: progress2, translate: `${(1 - progress2) * -20}px 0px`}}>
        <IconNode icon={ShieldCheck} label="判决对受让人" detail="具有拘束力" accent="teal" />
      </div>

      <div style={{position: 'absolute', left: 950, top: 430, opacity: progress2, translate: `${(1 - progress2) * 20}px 0px`}}>
        <IconNode icon={Users} label="受让人" detail="可申请以无独三参加" accent="gold" />
      </div>

      <div style={{position: 'absolute', left: 1370, top: 430, opacity: progress3, translate: `${(1 - progress3) * 40}px 0px`}}>
        <IconNode icon={ArrowLeftRight} label="替代当事人" detail="由法院决定是否准许" accent="red" />
      </div>

      <FlowArrow left={450} top={480} width={340} progress={progress2} accent="teal" />
      <FlowArrow left={870} top={480} width={340} progress={progress2} accent="gold" />
      <FlowArrow left={1290} top={480} width={340} progress={progress3} accent="red" />

      <ImpactReveal delay={110} style={{position: 'absolute', left: 110, top: 680}}>
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
          法院不予准许替代申请的，可以追加受让人为 <Keyword accent="red">无独立请求权第三人</Keyword>
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
      <SceneHeading index="04" eyebrow="结论" title="当事人恒定主义速记" accent="blue" />

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
          <div style={{...baseTextStyle, fontSize: 32, fontWeight: 900}}>
            实体权利义务转移 <Keyword accent="blue">不影响</Keyword> 原当事人的诉讼地位
          </div>
        </div>

        <div
          style={{
            marginTop: 30,
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
          <ShieldCheck size={56} color={PALETTE.teal} strokeWidth={2.2} />
          <div style={{...baseTextStyle, fontSize: 32, fontWeight: 900}}>
            判决对 <Keyword accent="teal">受让人</Keyword> 有拘束力；受让人可申请以 <Keyword accent="teal">无独三</Keyword> 参加
          </div>
        </div>

        <div
          style={{
            marginTop: 30,
            display: 'flex',
            alignItems: 'center',
            gap: 30,
            padding: '32px 40px',
            backgroundColor: PALETTE.paper,
            border: `3px solid ${PALETTE.red}`,
            borderRadius: 8,
            opacity: row2,
            translate: `${(1 - row2) * 50}px 0px`,
          }}
        >
          <CircleX size={56} color={PALETTE.red} strokeWidth={2.2} />
          <div style={{...baseTextStyle, fontSize: 32, fontWeight: 900}}>
            申请 <Keyword accent="red">替代当事人</Keyword> 的，由 <Keyword accent="red">法院决定</Keyword> 是否准许
          </div>
        </div>
      </div>
    </div>
  );
};
