import {Shield, ShieldAlert, Sword, XCircle} from 'lucide-react';
import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {PALETTE, toSourceFrame} from '../storyboard';
import {
  CaseCard,
  DecisionNode,
  FlowArrow,
  ImpactReveal,
  Keyword,
  MaskedReveal,
  SceneHeading,
  baseTextStyle,
} from '../visual-system';

export const ConceptScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const progress1 = interpolate(frame, [20, 80], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.5, 0, 0.2, 1),
  });
  const progress2 = interpolate(frame, [100, 160], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.5, 0, 0.2, 1),
  });

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="01" eyebrow="概念" title="反诉 vs 反驳" accent="red" />

      <div
        style={{
          position: 'absolute',
          left: 140,
          top: 280,
          opacity: progress1,
          translate: `${interpolate(progress1, [0, 1], [-50, 0])}px 0px`,
        }}
      >
        <DecisionNode label="反诉" detail="独立的诉" accent="red" style={{width: 320, height: 180}} />
      </div>

      <div
        style={{
          position: 'absolute',
          left: 540,
          top: 300,
          opacity: progress1,
        }}
      >
        <div style={{...baseTextStyle, fontSize: 28, fontWeight: 800, color: PALETTE.muted}}>
          可独立于本诉存在
          <br />
          本诉撤诉，反诉继续
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 140,
          top: 540,
          opacity: progress2,
          translate: `${interpolate(progress2, [0, 1], [-50, 0])}px 0px`,
        }}
      >
        <DecisionNode label="反驳" detail="防御主张" accent="teal" style={{width: 320, height: 180}} />
      </div>

      <div
        style={{
          position: 'absolute',
          left: 540,
          top: 560,
          opacity: progress2,
        }}
      >
        <div style={{...baseTextStyle, fontSize: 28, fontWeight: 800, color: PALETTE.muted}}>
          不能独立存在
          <br />
          仅针对原告主张进行防御
        </div>
      </div>

      <ImpactReveal delay={180} style={{position: 'absolute', left: 140, top: 780}}>
        <div style={{...baseTextStyle, fontSize: 34, fontWeight: 800}}>
          核心区别：能否 <Keyword accent="red">独立起诉</Keyword>
        </div>
      </ImpactReveal>
    </div>
  );
};

export const TechniqueScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const progress1 = interpolate(frame, [20, 80], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.5, 0, 0.2, 1),
  });
  const progress2 = interpolate(frame, [100, 160], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.5, 0, 0.2, 1),
  });

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="02" eyebrow="技术流" title="去掉原告主张测试法" accent="gold" />

      <MaskedReveal delay={20} duration={30} style={{position: 'absolute', left: 120, top: 286}}>
        <div style={{...baseTextStyle, fontSize: 60, fontWeight: 900, lineHeight: 1.3}}>
          假设没有原告的主张
          <br />
          被告能否 <Keyword accent="gold">单独起诉</Keyword>？
        </div>
      </MaskedReveal>

      <div
        style={{
          position: 'absolute',
          left: 160,
          top: 520,
          opacity: progress1,
        }}
      >
        <DecisionNode label="能单独起诉" detail="独立的诉" accent="red" style={{width: 360, height: 150}} />
      </div>

      <FlowArrow left={540} top={570} width={300} progress={progress1} accent="red" label="构成" />

      <div
        style={{
          position: 'absolute',
          left: 860,
          top: 520,
          opacity: progress1,
          translate: `${interpolate(progress1, [0, 1], [50, 0])}px 0px`,
        }}
      >
        <DecisionNode label="反诉" detail="✓" accent="red" style={{width: 280, height: 150}} />
      </div>

      <div
        style={{
          position: 'absolute',
          left: 160,
          top: 720,
          opacity: progress2,
        }}
      >
        <DecisionNode label="不能单独起诉" detail="非独立主张" accent="teal" style={{width: 360, height: 150}} />
      </div>

      <FlowArrow left={540} top={770} width={300} progress={progress2} accent="teal" label="构成" />

      <div
        style={{
          position: 'absolute',
          left: 860,
          top: 720,
          opacity: progress2,
          translate: `${interpolate(progress2, [0, 1], [50, 0])}px 0px`,
        }}
      >
        <DecisionNode label="反驳" detail="✗" accent="teal" style={{width: 280, height: 150}} />
      </div>
    </div>
  );
};

export const CasesScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const progress1 = interpolate(frame, [20, 70], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.5, 0, 0.2, 1),
  });
  const progress2 = interpolate(frame, [90, 140], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.5, 0, 0.2, 1),
  });
  const progress3 = interpolate(frame, [160, 210], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.5, 0, 0.2, 1),
  });
  const progress4 = interpolate(frame, [230, 280], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.5, 0, 0.2, 1),
  });

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="03" eyebrow="案例" title="四组典型对照" accent="blue" />

      <div
        style={{
          position: 'absolute',
          left: 100,
          top: 260,
          opacity: progress1,
          translate: `${interpolate(progress1, [0, 1], [-40, 0])}px 0px`,
        }}
      >
        <CaseCard
          title="例1：主张借款已归还"
          result="反驳"
          reason="不能单独起诉主张已归还"
          accent="teal"
        />
      </div>

      <div
        style={{
          position: 'absolute',
          left: 100,
          top: 540,
          opacity: progress2,
          translate: `${interpolate(progress2, [0, 1], [-40, 0])}px 0px`,
        }}
      >
        <CaseCard
          title="例2：主张已过诉讼时效"
          result="反驳"
          reason="不能单独起诉主张时效已过"
          accent="teal"
        />
      </div>

      <div
        style={{
          position: 'absolute',
          left: 560,
          top: 260,
          opacity: progress3,
          translate: `${interpolate(progress3, [0, 1], [40, 0])}px 0px`,
        }}
      >
        <CaseCard
          title="例3：主张合同无效+缔约过失"
          result="反诉"
          reason="可单独起诉确认无效并索赔"
          accent="red"
        />
      </div>

      <div
        style={{
          position: 'absolute',
          left: 560,
          top: 540,
          opacity: progress4,
          translate: `${interpolate(progress4, [0, 1], [40, 0])}px 0px`,
        }}
      >
        <CaseCard
          title="例4：主张玉石价款折抵借款"
          result="反诉"
          reason="可单独起诉支付玉石价款"
          accent="red"
        />
      </div>
    </div>
  );
};

export const RecapScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const progress = interpolate(frame, [20, 100], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.5, 0, 0.2, 1),
  });

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="04" eyebrow="总结" title="判断流程图" accent="purple" />

      <div
        style={{
          position: 'absolute',
          left: 140,
          top: 280,
          opacity: progress,
        }}
      >
        <DecisionNode label="被告的主张" detail="是什么？" accent="blue" style={{width: 280, height: 130}} />
      </div>

      <FlowArrow left={430} top={340} width={200} progress={progress} accent="blue" />

      <div
        style={{
          position: 'absolute',
          left: 660,
          top: 280,
          opacity: progress,
        }}
      >
        <DecisionNode label="去掉原告主张" detail="能否单独起诉？" accent="gold" style={{width: 320, height: 130}} />
      </div>

      <div
        style={{
          position: 'absolute',
          left: 720,
          top: 440,
          opacity: progress,
        }}
      >
        <div style={{...baseTextStyle, fontSize: 24, fontWeight: 800, color: PALETTE.muted, textAlign: 'center'}}>
          ↓ 能
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 720,
          top: 490,
          opacity: progress,
        }}
      >
        <DecisionNode label="反诉" detail="独立的诉" accent="red" style={{width: 280, height: 120}} />
      </div>

      <div
        style={{
          position: 'absolute',
          left: 1050,
          top: 340,
          opacity: progress,
        }}
      >
        <div style={{...baseTextStyle, fontSize: 24, fontWeight: 800, color: PALETTE.muted, textAlign: 'center'}}>
          ↓ 不能
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 1020,
          top: 280,
          opacity: progress,
          translate: `${interpolate(progress, [0, 1], [60, 0])}px 0px`,
        }}
      >
        <DecisionNode label="反驳" detail="防御主张" accent="teal" style={{width: 280, height: 130}} />
      </div>

      <ImpactReveal delay={120} style={{position: 'absolute', left: 140, top: 720}}>
        <div style={{...baseTextStyle, fontSize: 32, fontWeight: 800}}>
          不要看法律效果（抵销、折抵），要看 <Keyword accent="red">主张能否独立存在</Keyword>
        </div>
      </ImpactReveal>
    </div>
  );
};
