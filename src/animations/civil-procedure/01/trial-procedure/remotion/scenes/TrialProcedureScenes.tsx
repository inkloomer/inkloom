import { Easing, interpolate, useCurrentFrame } from 'remotion';
import { PALETTE, toSourceFrame } from '../storyboard';
import {
  baseTextStyle,
  ENTER_EASING,
  IconNode,
  ImpactReveal,
  Keyword,
  MaskedReveal,
  SceneHeading,
  FlowArrow,
} from '../visual-system';
import { Scale, FileText, Users } from 'lucide-react';

// 场景1: 民事诉讼概念
// 布局：定义居中偏上，箭头+审判权节点居中，本质总结底部
export const ConceptScene = () => {
  const frame = toSourceFrame(useCurrentFrame());

  const courtProgress = interpolate(frame, [30, 70], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: ENTER_EASING,
  });

  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      <SceneHeading
        index="01"
        eyebrow="民事诉讼"
        title="什么是民事诉讼？"
        accent="blue"
      />

      {/* 定义文字 - 居中偏上 */}
      <MaskedReveal delay={20} duration={30} style={{ position: 'absolute', left: 160, top: 220 }}>
        <div style={{ ...baseTextStyle, fontSize: 38, fontWeight: 800, lineHeight: 1.7, maxWidth: 1100 }}>
          法院在当事人和其他诉讼参与人的参与下，
          <br />
          按照法律规定的程序，审理和解决民事案件
        </div>
      </MaskedReveal>

      {/* 箭头 - 居中 */}
      <FlowArrow
        left={200}
        top={460}
        width={800}
        progress={courtProgress}
        accent="blue"
        label="行使国家审判权"
      />

      {/* 审判权节点 - 箭头末端 */}
      <ImpactReveal delay={80} style={{ position: 'absolute', left: 1050, top: 420 }}>
        <IconNode icon={Scale} label="审判权" accent="blue" />
      </ImpactReveal>

      {/* 本质总结 - 底部居中 */}
      <ImpactReveal delay={80} style={{ position: 'absolute', left: 250, top: 780 }}>
        <div style={{ ...baseTextStyle, fontSize: 36, fontWeight: 800 }}>
          本质：运用
          <span style={{ color: PALETTE.blue, fontWeight: 900 }}>国家审判权</span>
          解决民事纠纷
        </div>
      </ImpactReveal>
    </div>
  );
};

// 场景2: 诉讼程序
// 布局：标题下方居中放诉讼程序节点，三个子程序横向展开，底部总结
export const LitigationScene = () => {
  const frame = toSourceFrame(useCurrentFrame());

  const progress = interpolate(frame, [20, 60], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: ENTER_EASING,
  });

  const procedures = ['一审', '二审', '再审'];

  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      <SceneHeading
        index="02"
        eyebrow="诉讼程序"
        title="解决民事权利义务纠纷"
        accent="blue"
      />

      {/* 诉讼程序节点 - 居中偏左 */}
      <div style={{ position: 'absolute', left: 120, top: 340 }}>
        <IconNode icon={Scale} label="诉讼程序" accent="blue" />
      </div>

      {/* 三个子程序 - 横向展开 */}
      {procedures.map((proc, index) => {
        const delay = 40 + index * 20;
        const procProgress = interpolate(frame, [delay, delay + 25], [0, 1], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
          easing: ENTER_EASING,
        });

        return (
          <div
            key={proc}
            style={{
              position: 'absolute',
              left: 500 + index * 300,
              top: 340,
              opacity: procProgress,
            }}
          >
            <div
              style={{
                ...baseTextStyle,
                fontSize: 34,
                fontWeight: 800,
                color: PALETTE.blue,
                padding: '18px 36px',
                backgroundColor: PALETTE.paper,
                border: `3px solid ${PALETTE.blue}`,
                borderRadius: 8,
              }}
            >
              {proc}
            </div>
          </div>
        );
      })}

      {/* 连接箭头 */}
      <FlowArrow
        left={370}
        top={390}
        width={780}
        progress={progress}
        accent="blue"
      />

      {/* 底部总结 - 居中 */}
      <ImpactReveal delay={70} style={{ position: 'absolute', left: 200, top: 720 }}>
        <div style={{ ...baseTextStyle, fontSize: 36, fontWeight: 800 }}>
          共同特点：
          <span style={{ color: PALETTE.blue, fontWeight: 900 }}>解决</span>
          民事权利义务纠纷
        </div>
      </ImpactReveal>
    </div>
  );
};

// 场景3: 非讼程序
// 布局：同诉讼程序，但用teal色系
export const NonLitigationScene = () => {
  const frame = toSourceFrame(useCurrentFrame());

  const progress = interpolate(frame, [20, 60], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: ENTER_EASING,
  });

  const procedures = ['特别程序', '督促程序', '公示催告'];

  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      <SceneHeading
        index="03"
        eyebrow="非讼程序"
        title="不解决民事权利义务纠纷"
        accent="teal"
      />

      {/* 非讼程序节点 */}
      <div style={{ position: 'absolute', left: 120, top: 340 }}>
        <IconNode icon={FileText} label="非讼程序" accent="teal" />
      </div>

      {/* 三个子程序 */}
      {procedures.map((proc, index) => {
        const delay = 40 + index * 20;
        const procProgress = interpolate(frame, [delay, delay + 25], [0, 1], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
          easing: ENTER_EASING,
        });

        return (
          <div
            key={proc}
            style={{
              position: 'absolute',
              left: 500 + index * 300,
              top: 340,
              opacity: procProgress,
            }}
          >
            <div
              style={{
                ...baseTextStyle,
                fontSize: 34,
                fontWeight: 800,
                color: PALETTE.teal,
                padding: '18px 36px',
                backgroundColor: PALETTE.paper,
                border: `3px solid ${PALETTE.teal}`,
                borderRadius: 8,
              }}
            >
              {proc}
            </div>
          </div>
        );
      })}

      {/* 连接箭头 */}
      <FlowArrow
        left={370}
        top={390}
        width={780}
        progress={progress}
        accent="teal"
      />

      {/* 底部总结 */}
      <ImpactReveal delay={60} style={{ position: 'absolute', left: 200, top: 720 }}>
        <div style={{ ...baseTextStyle, fontSize: 36, fontWeight: 800 }}>
          共同特点：
          <span style={{ color: PALETTE.teal, fontWeight: 900 }}>不解决</span>
          民事权利义务纠纷
        </div>
      </ImpactReveal>
    </div>
  );
};

// 场景4: 对比总结
// 布局：两行对比，诉讼在上，非讼在下，底部结论
export const ComparisonScene = () => {
  const frame = toSourceFrame(useCurrentFrame());

  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      <SceneHeading
        index="04"
        eyebrow="对比总结"
        title="两类程序的核心区别"
        accent="red"
      />

      {/* 诉讼程序行 */}
      {(() => {
        const progress = interpolate(frame, [20, 50], [0, 1], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
          easing: ENTER_EASING,
        });
        return (
          <div>
            <div style={{ position: 'absolute', left: 120, top: 300, opacity: progress }}>
              <IconNode icon={Scale} label="诉讼程序" accent="blue" />
            </div>
            <div
              style={{
                position: 'absolute',
                left: 480,
                top: 314,
                ...baseTextStyle,
                fontSize: 30,
                fontWeight: 800,
                color: PALETTE.blue,
                opacity: progress,
              }}
            >
              解决民事权利义务纠纷
            </div>
            <div
              style={{
                position: 'absolute',
                left: 480,
                top: 365,
                ...baseTextStyle,
                fontSize: 24,
                fontWeight: 600,
                color: PALETTE.gray,
                opacity: progress,
              }}
            >
              一审、二审、再审
            </div>
          </div>
        );
      })()}

      {/* 非讼程序行 */}
      {(() => {
        const progress = interpolate(frame, [60, 90], [0, 1], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
          easing: ENTER_EASING,
        });
        return (
          <div>
            <div style={{ position: 'absolute', left: 120, top: 500, opacity: progress }}>
              <IconNode icon={FileText} label="非讼程序" accent="teal" />
            </div>
            <div
              style={{
                position: 'absolute',
                left: 480,
                top: 514,
                ...baseTextStyle,
                fontSize: 30,
                fontWeight: 800,
                color: PALETTE.teal,
                opacity: progress,
              }}
            >
              不解决民事权利义务纠纷
            </div>
            <div
              style={{
                position: 'absolute',
                left: 480,
                top: 565,
                ...baseTextStyle,
                fontSize: 24,
                fontWeight: 600,
                color: PALETTE.gray,
                opacity: progress,
              }}
            >
              特别程序、督促程序、公示催告程序
            </div>
          </div>
        );
      })()}

      {/* 底部结论 */}
      <ImpactReveal delay={80} style={{ position: 'absolute', left: 250, top: 820 }}>
        <div style={{ ...baseTextStyle, fontSize: 34, fontWeight: 800 }}>
          是否
          <span style={{ color: PALETTE.red, fontWeight: 900 }}>解决纠纷</span>
          是两类程序的根本区别
        </div>
      </ImpactReveal>
    </div>
  );
};
