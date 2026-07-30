import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {PALETTE, accentColor, accentSoftColor, toSourceFrame} from '../storyboard';
import {
  BranchConnector,
  FadeIn,
  FlowArrow,
  IconNode,
  ImpactReveal,
  Keyword,
  MaskedReveal,
  SceneHeading,
  baseTextStyle,
} from '../visual-system';
import {BookOpen, Building2, Gavel, Landmark, MessageSquareWarning, Scale, Users} from 'lucide-react';

const LITIGATION_ITEMS = [
  {key: 'first', label: '一审程序', detail: '初次审理', icon: Gavel},
  {key: 'second', label: '二审程序', detail: '上诉审理', icon: Scale},
  {key: 'retrial', label: '再审程序', detail: '纠错审理', icon: BookOpen},
];

const NON_LITIGATION_ITEMS = [
  {key: 'special', label: '特别程序', detail: '选民资格等', icon: Landmark},
  {key: 'payment', label: '督促程序', detail: '支付令', icon: MessageSquareWarning},
  {key: 'public', label: '公示催告', detail: '宣告票据无效', icon: Building2},
];

// 场景1：民事诉讼概览
export const OverviewScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const courtProgress = interpolate(frame, [30, 80], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="01" eyebrow="民事诉讼" title="什么是民事诉讼？" accent="blue" />

      <div style={{position: 'absolute', left: 120, top: 360}}>
        <FadeIn delay={20} duration={30}>
          <IconNode icon={Users} label="当事人与其他诉讼参与人" accent="teal" />
        </FadeIn>
      </div>

      <FlowArrow
        left={430}
        top={410}
        width={220}
        progress={courtProgress}
        accent="ink"
        label="依法定程序"
      />

      <div style={{position: 'absolute', left: 690, top: 360}}>
        <ImpactReveal delay={80}>
          <div
            style={{
              width: 220,
              height: 220,
              borderRadius: '50%',
              backgroundColor: PALETTE.paper,
              border: `4px solid ${PALETTE.blue}`,
              display: 'grid',
              placeItems: 'center',
              boxShadow: '0 14px 34px rgba(23, 32, 29, 0.09)',
            }}
          >
            <div style={{textAlign: 'center'}}>
              <Landmark size={56} color={PALETTE.blue} strokeWidth={2} />
              <div style={{...baseTextStyle, fontSize: 28, fontWeight: 900, marginTop: 10, color: PALETTE.blue}}>人民法院</div>
            </div>
          </div>
        </ImpactReveal>
      </div>

      <FlowArrow
        left={930}
        top={410}
        width={280}
        progress={courtProgress}
        accent="blue"
        label="行使国家审判权"
      />

      <div style={{position: 'absolute', left: 1240, top: 360}}>
        <ImpactReveal delay={110}>
          <IconNode icon={Scale} label="审理和解决民事案件" accent="blue" />
        </ImpactReveal>
      </div>

      <ImpactReveal delay={150} style={{position: 'absolute', left: 460, top: 780}}>
        <div style={{...baseTextStyle, fontSize: 34, fontWeight: 800}}>
          本质：运用 <Keyword accent="blue">国家审判权</Keyword> 解决 <Keyword accent="teal">民事纠纷</Keyword>
        </div>
      </ImpactReveal>
    </div>
  );
};

// 场景2：审判程序的两大分支
export const TaxonomyScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const topProgress = interpolate(frame, [20, 70], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const branchProgress = interpolate(frame, [70, 120], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const topX = 960;
  const topY = 300;
  const leftX = 540;
  const leftY = 560;
  const rightX = 1380;
  const rightY = 560;
  const nodeHalfWidth = 155;
  const nodeHalfHeight = 61;

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="02" eyebrow="审判程序" title="诉讼程序与非讼程序" accent="red" />

      <div
        style={{
          position: 'absolute',
          left: topX - 110,
          top: topY - 70,
          opacity: topProgress,
          transform: `scale(${interpolate(topProgress, [0, 1], [0.9, 1])})`,
        }}
      >
        <div
          style={{
            width: 220,
            height: 140,
            borderRadius: 12,
            backgroundColor: PALETTE.paper,
            border: `3px solid ${PALETTE.ink}`,
            display: 'grid',
            placeItems: 'center',
            boxShadow: '0 14px 34px rgba(23, 32, 29, 0.09)',
          }}
        >
          <div style={{textAlign: 'center'}}>
            <div style={{...baseTextStyle, fontSize: 28, fontWeight: 900}}>民事审判程序</div>
            <div style={{...baseTextStyle, fontSize: 18, color: PALETTE.muted, marginTop: 6}}>两大分支</div>
          </div>
        </div>
      </div>

      <BranchConnector fromX={topX} fromY={topY + 70} toX={leftX + nodeHalfWidth} toY={leftY - nodeHalfHeight} progress={branchProgress} accent="blue" />
      <BranchConnector fromX={topX} fromY={topY + 70} toX={rightX + nodeHalfWidth} toY={rightY - nodeHalfHeight} progress={branchProgress} accent="teal" />

      <div style={{position: 'absolute', left: leftX - 130, top: leftY - 61, opacity: branchProgress}}>
        <IconNode icon={Scale} label="诉讼程序" detail="解决民事权利义务纠纷" accent="blue" />
      </div>

      <div style={{position: 'absolute', left: rightX - 130, top: rightY - 61, opacity: branchProgress}}>
        <IconNode icon={BookOpen} label="非讼程序" detail="不解决民事权利义务纠纷" accent="teal" />
      </div>

      <ImpactReveal delay={130} style={{position: 'absolute', left: 500, top: 820}}>
        <div style={{...baseTextStyle, fontSize: 30, fontWeight: 800}}>
          分类标准：是否 <Keyword accent="red">解决民事权利义务纠纷</Keyword>
        </div>
      </ImpactReveal>
    </div>
  );
};

// 场景3：诉讼程序
export const LitigationScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const arrowProgress = interpolate(frame, [30, 80], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="03" eyebrow="诉讼程序" title="解决民事权利义务纠纷" accent="blue" />

      <div style={{position: 'absolute', left: 120, top: 420}}>
        <FadeIn delay={10} duration={24}>
          <IconNode icon={Scale} label="诉讼程序" detail="存在对立双方当事人" accent="blue" />
        </FadeIn>
      </div>

      <FlowArrow left={430} top={470} width={140} progress={arrowProgress} accent="blue" />

      {LITIGATION_ITEMS.map((item, index) => {
        const delay = 60 + index * 30;
        const progress = interpolate(frame, [delay, delay + 30], [0, 1], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        });
        return (
          <div
            key={item.key}
            style={{
              position: 'absolute',
              left: 600 + index * 360,
              top: 400,
              opacity: progress,
              transform: `translateY(${interpolate(progress, [0, 1], [24, 0])}px)`,
            }}
          >
            <IconNode icon={item.icon} label={item.label} detail={item.detail} accent="blue" />
          </div>
        );
      })}

      <ImpactReveal delay={170} style={{position: 'absolute', left: 520, top: 800}}>
        <div style={{...baseTextStyle, fontSize: 32, fontWeight: 800}}>
          共同特点：通过 <Keyword accent="blue">诉讼程序</Keyword> 解决实体权利义务争议
        </div>
      </ImpactReveal>
    </div>
  );
};

// 场景4：非讼程序
export const NonLitigationScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const arrowProgress = interpolate(frame, [30, 80], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="04" eyebrow="非讼程序" title="不解决民事权利义务纠纷" accent="teal" />

      <div style={{position: 'absolute', left: 120, top: 420}}>
        <FadeIn delay={10} duration={24}>
          <IconNode icon={BookOpen} label="非讼程序" detail="不存在对立双方当事人" accent="teal" />
        </FadeIn>
      </div>

      <FlowArrow left={430} top={470} width={140} progress={arrowProgress} accent="teal" />

      {NON_LITIGATION_ITEMS.map((item, index) => {
        const delay = 60 + index * 30;
        const progress = interpolate(frame, [delay, delay + 30], [0, 1], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        });
        return (
          <div
            key={item.key}
            style={{
              position: 'absolute',
              left: 600 + index * 360,
              top: 400,
              opacity: progress,
              transform: `translateY(${interpolate(progress, [0, 1], [24, 0])}px)`,
            }}
          >
            <IconNode icon={item.icon} label={item.label} detail={item.detail} accent="teal" />
          </div>
        );
      })}

      <ImpactReveal delay={170} style={{position: 'absolute', left: 480, top: 800}}>
        <div style={{...baseTextStyle, fontSize: 32, fontWeight: 800}}>
          共同特点：<Keyword accent="teal">不解决</Keyword> 民事权利义务纠纷，确认某种法律事实
        </div>
      </ImpactReveal>
    </div>
  );
};

// 场景5：对比总结
export const ComparisonScene = () => {
  const frame = toSourceFrame(useCurrentFrame());

  const leftProgress = interpolate(frame, [20, 70], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const rightProgress = interpolate(frame, [80, 130], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const dividerProgress = interpolate(frame, [140, 180], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="05" eyebrow="对比总结" title="是否解决民事权利义务纠纷" accent="red" />

      <div style={{position: 'absolute', left: 120, top: 320, opacity: leftProgress}}>
        <IconNode icon={Scale} label="诉讼程序" detail="一审、二审、再审" accent="blue" />
      </div>

      <MaskedReveal delay={40} duration={28} style={{position: 'absolute', left: 480, top: 340, opacity: leftProgress}}>
        <div
          style={{
            ...baseTextStyle,
            fontSize: 26,
            fontWeight: 800,
            color: PALETTE.blue,
            padding: '18px 26px',
            backgroundColor: accentSoftColor('blue'),
            border: `2px solid ${accentColor('blue')}`,
            borderRadius: 8,
          }}
        >
          解决民事权利义务纠纷
        </div>
      </MaskedReveal>

      <div style={{position: 'absolute', left: 120, top: 540, opacity: rightProgress}}>
        <IconNode icon={BookOpen} label="非讼程序" detail="特别、督促、公示催告" accent="teal" />
      </div>

      <MaskedReveal delay={100} duration={28} style={{position: 'absolute', left: 480, top: 560, opacity: rightProgress}}>
        <div
          style={{
            ...baseTextStyle,
            fontSize: 26,
            fontWeight: 800,
            color: PALETTE.teal,
            padding: '18px 26px',
            backgroundColor: accentSoftColor('teal'),
            border: `2px solid ${accentColor('teal')}`,
            borderRadius: 8,
          }}
        >
          不解决民事权利义务纠纷
        </div>
      </MaskedReveal>

      <div
        style={{
          position: 'absolute',
          left: 980,
          top: 300,
          bottom: 220,
          width: 4,
          backgroundColor: PALETTE.line,
          scale: `1 ${dividerProgress}`,
          transformOrigin: 'top center',
        }}
      />

      <FadeIn delay={160} duration={30} style={{position: 'absolute', left: 1080, top: 360}}>
        <div
          style={{
            width: 380,
            padding: '32px 36px',
            backgroundColor: PALETTE.paper,
            border: `3px solid ${PALETTE.red}`,
            borderRadius: 12,
            boxShadow: '0 14px 34px rgba(23, 32, 29, 0.09)',
          }}
        >
          <div style={{...baseTextStyle, fontSize: 24, fontWeight: 800, color: PALETTE.red, marginBottom: 16}}>核心区别</div>
          <div style={{...baseTextStyle, fontSize: 28, fontWeight: 800, lineHeight: 1.5}}>
            是否 <Keyword accent="red">解决民事权利义务纠纷</Keyword>
          </div>
          <div style={{...baseTextStyle, fontSize: 20, color: PALETTE.muted, marginTop: 16, lineHeight: 1.6}}>
            诉讼程序存在对立双方当事人；非讼程序不存在对立双方当事人
          </div>
        </div>
      </FadeIn>

      <ImpactReveal delay={210} style={{position: 'absolute', left: 500, top: 820}}>
        <div style={{...baseTextStyle, fontSize: 32, fontWeight: 800}}>
          判断程序性质，先看 <Keyword accent="red">是否解决纠纷</Keyword>
        </div>
      </ImpactReveal>
    </div>
  );
};
