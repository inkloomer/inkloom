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
import { Handshake, Users, Scale, Landmark } from 'lucide-react';

// 场景1: 四种纠纷解决方式概览
// 布局：左侧4个IconNode纵向均匀分布(覆盖200-800)，箭头居中，人民法院右侧居中
export const OverviewScene = () => {
  const frame = toSourceFrame(useCurrentFrame());

  const methods = [
    { icon: Handshake, label: '和解', accent: 'gold' as const, top: 200 },
    { icon: Users, label: '调解', accent: 'teal' as const, top: 370 },
    { icon: Scale, label: '仲裁', accent: 'blue' as const, top: 540 },
    { icon: Landmark, label: '诉讼', accent: 'red' as const, top: 710 },
  ];

  const arrowProgress = interpolate(frame, [50, 90], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.45, 0, 0.2, 1),
  });

  const courtScale = interpolate(frame, [10, 36, 80, 90], [0.92, 1, 1, 1.04], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: ENTER_EASING,
  });

  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      <SceneHeading
        index="01"
        eyebrow="多元纠纷解决机制"
        title="四种方式，层层递进"
        accent="blue"
      />

      {/* 左侧：四种方式 - 纵向均匀分布 */}
      {methods.map((method, index) => {
        const delay = 20 + index * 15;
        const progress = interpolate(frame, [delay, delay + 30], [0, 1], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
          easing: ENTER_EASING,
        });

        return (
          <div
            key={method.label}
            style={{
              position: 'absolute',
              left: 120,
              top: method.top,
              translate: `${interpolate(progress, [0, 1], [-60, 0])}px 0px`,
              opacity: progress,
            }}
          >
            <IconNode
              icon={method.icon}
              label={method.label}
              accent={method.accent}
            />
          </div>
        );
      })}

      {/* 中间：汇聚箭头 - 居中 */}
      <FlowArrow
        left={380}
        top={460}
        width={560}
        progress={arrowProgress}
        accent="blue"
        label="纠纷解决路径"
      />

      {/* 右侧：人民法院节点 - 垂直居中 */}
      <div
        style={{
          position: 'absolute',
          left: 1000,
          top: 410,
          scale: courtScale,
        }}
      >
        <IconNode icon={Landmark} label="人民法院" accent="red" />
      </div>

      {/* 底部总结 */}
      <ImpactReveal delay={60} style={{ position: 'absolute', left: 300, top: 920 }}>
        <div style={{ ...baseTextStyle, fontSize: 32, fontWeight: 800 }}>
          民事纠纷发生后，当事人可以选择
          <Keyword accent="blue">四种方式</Keyword>
          予以解决
        </div>
      </ImpactReveal>
    </div>
  );
};

// 场景2: 和解与调解的对比
// 布局：上下两行居中分布，底部总结
export const MediationScene = () => {
  const frame = toSourceFrame(useCurrentFrame());

  const settlementProgress = interpolate(frame, [20, 60], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: ENTER_EASING,
  });

  const mediationProgress = interpolate(frame, [70, 110], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: ENTER_EASING,
  });

  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      <SceneHeading
        index="02"
        eyebrow="非正式解决方式"
        title="和解 vs 调解"
        accent="gold"
      />

      {/* 和解行 - 上半区 */}
      <div
        style={{
          position: 'absolute',
          left: 120,
          top: 280,
          opacity: settlementProgress,
        }}
      >
        <IconNode icon={Handshake} label="和解" accent="gold" />
      </div>
      <FlowArrow
        left={380}
        top={320}
        width={400}
        progress={settlementProgress}
        accent="gold"
        label="自行协商"
      />
      <MaskedReveal delay={40} duration={30} style={{ position: 'absolute', left: 820, top: 290 }}>
        <div style={{
          ...baseTextStyle,
          fontSize: 28,
          fontWeight: 700,
          color: PALETTE.gold,
          padding: '12px 20px',
          backgroundColor: PALETTE.paper,
          border: `2px solid ${PALETTE.gold}`,
          borderRadius: 8,
        }}>
          达成协议，消灭争议
        </div>
      </MaskedReveal>

      {/* 调解行 - 下半区 */}
      <div
        style={{
          position: 'absolute',
          left: 120,
          top: 520,
          opacity: mediationProgress,
        }}
      >
        <IconNode icon={Users} label="调解" accent="teal" />
      </div>
      <FlowArrow
        left={380}
        top={560}
        width={400}
        progress={mediationProgress}
        accent="teal"
        label="第三方主持"
      />
      <MaskedReveal delay={90} duration={30} style={{ position: 'absolute', left: 820, top: 530 }}>
        <div style={{
          ...baseTextStyle,
          fontSize: 28,
          fontWeight: 700,
          color: PALETTE.teal,
          padding: '12px 20px',
          backgroundColor: PALETTE.paper,
          border: `2px solid ${PALETTE.teal}`,
          borderRadius: 8,
        }}>
          有法律效力，但
          <Keyword accent="red">无强制执行力</Keyword>
        </div>
      </MaskedReveal>

      {/* 底部总结 */}
      <ImpactReveal delay={60} style={{ position: 'absolute', left: 350, top: 860 }}>
        <div style={{ ...baseTextStyle, fontSize: 30, fontWeight: 800 }}>
          调解协议效力类似于
          <Keyword accent="teal">合同</Keyword>
          ，对双方有约束力
        </div>
      </ImpactReveal>
    </div>
  );
};

// 场景3: 仲裁与诉讼的对比
// 布局：上下两行居中分布，底部总结
export const ArbitrationScene = () => {
  const frame = toSourceFrame(useCurrentFrame());

  const arbitrationProgress = interpolate(frame, [20, 60], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: ENTER_EASING,
  });

  const litigationProgress = interpolate(frame, [70, 110], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: ENTER_EASING,
  });

  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      <SceneHeading
        index="03"
        eyebrow="正式解决方式"
        title="仲裁 vs 诉讼"
        accent="blue"
      />

      {/* 仲裁行 - 上半区 */}
      <div
        style={{
          position: 'absolute',
          left: 120,
          top: 280,
          opacity: arbitrationProgress,
        }}
      >
        <IconNode icon={Scale} label="仲裁" accent="blue" />
      </div>
      <FlowArrow
        left={380}
        top={320}
        width={400}
        progress={arbitrationProgress}
        accent="blue"
        label="民间组织裁决"
      />
      <MaskedReveal delay={40} duration={30} style={{ position: 'absolute', left: 820, top: 290 }}>
        <div style={{
          ...baseTextStyle,
          fontSize: 28,
          fontWeight: 700,
          color: PALETTE.blue,
          padding: '12px 20px',
          backgroundColor: PALETTE.paper,
          border: `2px solid ${PALETTE.blue}`,
          borderRadius: 8,
        }}>
          裁决书具有
          <Keyword accent="blue">法律约束力</Keyword>
          和
          <Keyword accent="blue">强制执行力</Keyword>
        </div>
      </MaskedReveal>

      {/* 诉讼行 - 下半区 */}
      <div
        style={{
          position: 'absolute',
          left: 120,
          top: 520,
          opacity: litigationProgress,
        }}
      >
        <IconNode icon={Landmark} label="诉讼" accent="red" />
      </div>
      <FlowArrow
        left={380}
        top={560}
        width={400}
        progress={litigationProgress}
        accent="red"
        label="国家审判权"
      />
      <MaskedReveal delay={90} duration={30} style={{ position: 'absolute', left: 820, top: 530 }}>
        <div style={{
          ...baseTextStyle,
          fontSize: 28,
          fontWeight: 700,
          color: PALETTE.red,
          padding: '12px 20px',
          backgroundColor: PALETTE.paper,
          border: `2px solid ${PALETTE.red}`,
          borderRadius: 8,
        }}>
          法院代表国家行使
          <Keyword accent="red">审判权</Keyword>
        </div>
      </MaskedReveal>

      {/* 底部总结 */}
      <ImpactReveal delay={60} style={{ position: 'absolute', left: 300, top: 820 }}>
        <div style={{ ...baseTextStyle, fontSize: 30, fontWeight: 800 }}>
          <Keyword accent="blue">仲裁</Keyword>
          是民间组织，
          <Keyword accent="red">诉讼</Keyword>
          是国家审判机关
        </div>
      </ImpactReveal>
    </div>
  );
};

// 场景4: 总结对比
// 布局：4行纵向均匀分布(覆盖200-780)，底部结论
export const ComparisonScene = () => {
  const frame = toSourceFrame(useCurrentFrame());

  const rows = [
    { label: '和解', nature: '自行协商', enforceability: '无', icon: Handshake, accent: 'gold' as const },
    { label: '调解', nature: '第三方主持', enforceability: '有法律效力', icon: Users, accent: 'teal' as const },
    { label: '仲裁', nature: '民间裁决', enforceability: '有强制执行力', icon: Scale, accent: 'blue' as const },
    { label: '诉讼', nature: '国家审判', enforceability: '有强制执行力', icon: Landmark, accent: 'red' as const },
  ];

  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      <SceneHeading
        index="04"
        eyebrow="总结对比"
        title="四种方式的核心差异"
        accent="red"
      />

      {rows.map((row, index) => {
        const delay = 20 + index * 18;
        const progress = interpolate(frame, [delay, delay + 30], [0, 1], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
          easing: ENTER_EASING,
        });

        return (
          <div key={row.label}>
            {/* 图标节点 */}
            <div
              style={{
                position: 'absolute',
                left: 120,
                top: 200 + index * 160,
                opacity: progress,
              }}
            >
              <IconNode icon={row.icon} label={row.label} accent={row.accent} compact />
            </div>
            {/* 性质 */}
            <div
              style={{
                position: 'absolute',
                left: 460,
                top: 214 + index * 160,
                ...baseTextStyle,
                fontSize: 28,
                fontWeight: 800,
                color: PALETTE[row.accent],
                opacity: progress,
              }}
            >
              {row.nature}
            </div>
            {/* 箭头 */}
            <div
              style={{
                position: 'absolute',
                left: 680,
                top: 222 + index * 160,
                width: 60,
                height: 3,
                backgroundColor: PALETTE[row.accent],
                opacity: progress,
              }}
            />
            {/* 执行力 */}
            <div
              style={{
                position: 'absolute',
                left: 770,
                top: 214 + index * 160,
                ...baseTextStyle,
                fontSize: 26,
                fontWeight: 700,
                opacity: progress,
              }}
            >
              执行力：
              <span style={{ color: PALETTE[row.accent], fontWeight: 900 }}>
                {row.enforceability}
              </span>
            </div>
          </div>
        );
      })}

      <ImpactReveal delay={60} style={{ position: 'absolute', left: 350, top: 880 }}>
        <div style={{ ...baseTextStyle, fontSize: 32, fontWeight: 800 }}>
          从
          <span style={{ color: PALETTE.gold, fontWeight: 900 }}>非正式</span>
          到
          <span style={{ color: PALETTE.red, fontWeight: 900 }}>正式</span>
          ，效力逐步增强
        </div>
      </ImpactReveal>
    </div>
  );
};
