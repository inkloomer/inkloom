import {BookOpen, FileText, Gavel, Layers, Scale, Shuffle, Target} from 'lucide-react';
import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {PALETTE, toSourceFrame} from '../storyboard';
import {
  ConnectorLine,
  FlowArrow,
  ImpactReveal,
  Keyword,
  MaskedReveal,
  RelationshipNode,
  SceneHeading,
  baseTextStyle,
} from '../visual-system';

export const ConceptScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const pathProgress = interpolate(frame, [40, 112], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.5, 0, 0.2, 1),
  });

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="01" eyebrow="要素" title="诉的两大核心" accent="red" />

      <MaskedReveal delay={20} duration={30} style={{position: 'absolute', left: 120, top: 286}}>
        <div style={{...baseTextStyle, fontSize: 68, fontWeight: 900, lineHeight: 1.2}}>
          买卖合同纠纷
          <br />
          起诉 <Keyword accent="red">支付5万元</Keyword>
        </div>
      </MaskedReveal>

      <FlowArrow left={160} top={520} width={800} progress={pathProgress} accent="blue" label="争议基础" />

      <div
        style={{
          position: 'absolute',
          left: 160,
          top: 580,
          opacity: pathProgress,
          translate: `${interpolate(pathProgress, [0, 1], [-40, 0])}px 0px`,
        }}
      >
        <RelationshipNode label="买卖合同关系" detail="诉讼标的" accent="blue" />
      </div>

      <div
        style={{
          position: 'absolute',
          left: 560,
          top: 580,
          opacity: pathProgress,
          translate: `${interpolate(pathProgress, [0, 1], [40, 0])}px 0px`,
        }}
      >
        <RelationshipNode label="支付5万元" detail="诉讼请求" accent="red" />
      </div>

      <ImpactReveal delay={130} style={{position: 'absolute', left: 120, top: 780}}>
        <div style={{...baseTextStyle, fontSize: 34, fontWeight: 800}}>
          诉讼标的是 <Keyword accent="blue">法律关系</Keyword>，诉讼请求是 <Keyword accent="red">具体裁判</Keyword>
        </div>
      </ImpactReveal>
    </div>
  );
};

export const DistinctionScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const progress1 = interpolate(frame, [20, 80], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.5, 0, 0.2, 1),
  });
  const progress2 = interpolate(frame, [90, 150], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.5, 0, 0.2, 1),
  });
  const progress3 = interpolate(frame, [160, 220], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.5, 0, 0.2, 1),
  });

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="02" eyebrow="辨析" title="标的是关系，请求是主张" accent="teal" />

      <div
        style={{
          position: 'absolute',
          left: 140,
          top: 280,
          opacity: progress1,
          translate: `${interpolate(progress1, [0, 1], [-50, 0])}px 0px`,
        }}
      >
        <RelationshipNode label="借款合同关系" detail="一个诉讼标的" accent="blue" style={{width: 280, height: 140}} />
      </div>

      <ConnectorLine left={420} top={340} width={200} progress={progress2} accent="teal" />

      <div
        style={{
          position: 'absolute',
          left: 640,
          top: 260,
          opacity: progress2,
          translate: `${interpolate(progress2, [0, 1], [50, 0])}px 0px`,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <RelationshipNode label="返还本金100万" detail="诉讼请求1" accent="red" style={{width: 260, height: 100}} />
        <RelationshipNode label="支付利息2万" detail="诉讼请求2" accent="red" style={{width: 260, height: 100}} />
        <RelationshipNode label="支付罚息10万" detail="诉讼请求3" accent="red" style={{width: 260, height: 100}} />
      </div>

      <ImpactReveal delay={240} style={{position: 'absolute', left: 140, top: 720}}>
        <div style={{...baseTextStyle, fontSize: 32, fontWeight: 800}}>
          同一诉讼标的可以产生 <Keyword accent="red">多个</Keyword> 诉讼请求
        </div>
      </ImpactReveal>
    </div>
  );
};

export const TransformationScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const stage1 = interpolate(frame, [20, 80], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.5, 0, 0.2, 1),
  });
  const stage2 = interpolate(frame, [140, 200], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.5, 0, 0.2, 1),
  });
  const stage3 = interpolate(frame, [260, 320], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.5, 0, 0.2, 1),
  });

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="03" eyebrow="变化" title="请求变，标的可不变" accent="gold" />

      <div
        style={{
          position: 'absolute',
          left: 160,
          top: 280,
          opacity: stage1,
        }}
      >
        <RelationshipNode label="租赁合同关系" detail="诉讼标的（不变）" accent="blue" style={{width: 300, height: 130}} />
      </div>

      <div
        style={{
          position: 'absolute',
          left: 580,
          top: 280,
          opacity: stage1,
          translate: `${interpolate(stage1, [0, 1], [60, 0])}px 0px`,
        }}
      >
        <RelationshipNode label="支付租金5000元" detail="诉讼请求" accent="red" style={{width: 280, height: 130}} />
      </div>

      <div
        style={{
          position: 'absolute',
          left: 920,
          top: 310,
          opacity: stage1,
        }}
      >
        <div
          style={{
            ...baseTextStyle,
            padding: '10px 20px',
            backgroundColor: PALETTE.tealSoft,
            color: PALETTE.teal,
            borderRadius: 6,
            fontSize: 24,
            fontWeight: 800,
          }}
        >
          给付之诉
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 500,
          top: 460,
          opacity: stage2,
          scale: `${interpolate(stage2, [0, 1], [0.8, 1])}`,
        }}
      >
        <div style={{...baseTextStyle, fontSize: 40, fontWeight: 900, color: PALETTE.gold, textAlign: 'center'}}>
          <Shuffle size={48} style={{marginBottom: 10}} />
          <br />
          变更诉讼请求
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 160,
          top: 580,
          opacity: stage3,
        }}
      >
        <RelationshipNode label="租赁合同关系" detail="诉讼标的（仍不变）" accent="blue" style={{width: 300, height: 130}} />
      </div>

      <div
        style={{
          position: 'absolute',
          left: 580,
          top: 580,
          opacity: stage3,
          translate: `${interpolate(stage3, [0, 1], [60, 0])}px 0px`,
        }}
      >
        <RelationshipNode label="解除租赁合同" detail="新诉讼请求" accent="purple" style={{width: 280, height: 130}} />
      </div>

      <div
        style={{
          position: 'absolute',
          left: 920,
          top: 610,
          opacity: stage3,
        }}
      >
        <div
          style={{
            ...baseTextStyle,
            padding: '10px 20px',
            backgroundColor: PALETTE.purpleSoft,
            color: PALETTE.purple,
            borderRadius: 6,
            fontSize: 24,
            fontWeight: 800,
          }}
        >
          形成之诉
        </div>
      </div>

      <ImpactReveal delay={340} style={{position: 'absolute', left: 140, top: 780}}>
        <div style={{...baseTextStyle, fontSize: 32, fontWeight: 800}}>
          诉讼标的 <Keyword accent="blue">不变</Keyword>，诉讼请求 <Keyword accent="red">变</Keyword>，诉的分类 <Keyword accent="purple">也变</Keyword>
        </div>
      </ImpactReveal>
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
      <SceneHeading index="04" eyebrow="总结" title="三者关系总图" accent="blue" />

      <div
        style={{
          position: 'absolute',
          left: 140,
          top: 280,
          opacity: progress,
          translate: `${interpolate(progress, [0, 1], [-40, 0])}px 0px`,
        }}
      >
        <RelationshipNode label="诉讼标的" detail="民事实体法律关系" accent="blue" style={{width: 280, height: 140}} />
      </div>

      <FlowArrow left={430} top={340} width={200} progress={progress} accent="teal" label="基于" />

      <div
        style={{
          position: 'absolute',
          left: 660,
          top: 280,
          opacity: progress,
        }}
      >
        <RelationshipNode label="诉讼请求" detail="具体裁判主张" accent="red" style={{width: 280, height: 140}} />
      </div>

      <FlowArrow left={950} top={340} width={200} progress={progress} accent="gold" label="决定" />

      <div
        style={{
          position: 'absolute',
          left: 1180,
          top: 280,
          opacity: progress,
          translate: `${interpolate(progress, [0, 1], [40, 0])}px 0px`,
        }}
      >
        <RelationshipNode label="诉的分类" detail="确认/给付/形成" accent="purple" style={{width: 280, height: 140}} />
      </div>

      <ImpactReveal delay={120} style={{position: 'absolute', left: 200, top: 560}}>
        <div style={{display: 'flex', gap: 40}}>
          <div style={{...baseTextStyle, display: 'flex', alignItems: 'center', gap: 12, fontSize: 26, fontWeight: 700}}>
            <BookOpen size={32} color={PALETTE.blue} />
            标的是基础
          </div>
          <div style={{...baseTextStyle, display: 'flex', alignItems: 'center', gap: 12, fontSize: 26, fontWeight: 700}}>
            <Target size={32} color={PALETTE.red} />
            请求是主张
          </div>
          <div style={{...baseTextStyle, display: 'flex', alignItems: 'center', gap: 12, fontSize: 26, fontWeight: 700}}>
            <Gavel size={32} color={PALETTE.purple} />
            分类看请求
          </div>
        </div>
      </ImpactReveal>
    </div>
  );
};
