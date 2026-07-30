import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {PALETTE, accentColor, toSourceFrame, type Accent} from '../storyboard';
import {
  FadeIn,
  FlowArrow,
  IconNode,
  ImpactReveal,
  Keyword,
  MaskedReveal,
  SceneHeading,
  VerticalArrow,
  baseTextStyle,
} from '../visual-system';
import {Handshake, Landmark, Scale, Users, Zap} from 'lucide-react';

const METHODS: {key: string; label: string; icon: typeof Handshake; accent: Accent; detail: string; x: number}[] = [
  {key: 'settlement', label: '和解', icon: Handshake, accent: 'gold', detail: '自行协商', x: 340},
  {key: 'mediation', label: '调解', icon: Users, accent: 'teal', detail: '第三方主持', x: 700},
  {key: 'arbitration', label: '仲裁', icon: Scale, accent: 'blue', detail: '民间组织裁决', x: 1060},
  {key: 'litigation', label: '诉讼', icon: Landmark, accent: 'red', detail: '国家审判权', x: 1420},
];

const DisputeIcon = ({size = 64}: {size?: number}) => (
  <div
    style={{
      display: 'grid',
      width: size,
      height: size,
      placeItems: 'center',
      borderRadius: '50%',
      backgroundColor: PALETTE.redSoft,
      color: PALETTE.red,
    }}
  >
    <Zap size={size * 0.55} strokeWidth={2.4} />
  </div>
);

// 场景1：纠纷解决方式光谱
export const SpectrumScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const axisProgress = interpolate(frame, [30, 90], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.45, 0, 0.2, 1)});

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="01" eyebrow="多元纠纷解决机制" title="从非正式到正式" accent="blue" />

      {/* 纠纷起点 - 左侧 */}
      <FadeIn delay={10} duration={30} style={{position: 'absolute', left: 92, top: 440}}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14}}>
          <DisputeIcon size={80} />
          <div style={{...baseTextStyle, fontSize: 24, fontWeight: 800, color: PALETTE.red}}>民事纠纷</div>
        </div>
      </FadeIn>

      {/* 主连接箭头：从纠纷指向解决路径 */}
      <FlowArrow
        left={200}
        top={490}
        width={300}
        progress={interpolate(frame, [40, 80], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}
        accent="ink"
        thickness={5}
        label="解决路径"
      />

      {/* 效力光谱轴 */}
      <div style={{position: 'absolute', left: 500, top: 640, width: 1260, height: 8, backgroundColor: PALETTE.line, borderRadius: 4}}>
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: `${axisProgress * 100}%`,
            backgroundColor: PALETTE.ink,
            borderRadius: 4,
            transformOrigin: 'left center',
          }}
        />
      </div>
      <div style={{...baseTextStyle, position: 'absolute', left: 500, top: 670, fontSize: 20, fontWeight: 700, color: PALETTE.muted}}>
        非正式
      </div>
      <div style={{...baseTextStyle, position: 'absolute', right: 160, top: 670, fontSize: 20, fontWeight: 700, color: PALETTE.muted}}>
        正式 / 强制
      </div>

      {/* 四种方式节点 - 沿光谱轴上方排列 */}
      {METHODS.map((method, index) => {
        const delay = 60 + index * 22;
        const progress = interpolate(frame, [delay, delay + 34], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)});
        return (
          <div
            key={method.key}
            style={{
              position: 'absolute',
              left: method.x,
              top: 470,
              opacity: progress,
              transform: `translateY(${interpolate(progress, [0, 1], [40, 0])}px) scale(${interpolate(progress, [0, 1], [0.92, 1])})`,
            }}
          >
            <IconNode icon={method.icon} label={method.label} detail={method.detail} accent={method.accent} compact />
          </div>
        );
      })}

      {/* 节点与轴的垂直连线 */}
      {METHODS.map((method, index) => {
        const delay = 100 + index * 16;
        const progress = interpolate(frame, [delay, delay + 24], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
        return (
          <div
            key={`drop-${method.key}`}
            style={{
              position: 'absolute',
              left: method.x + 130,
              top: 564,
              width: 3,
              height: 76,
              backgroundColor: accentColor(method.accent),
              opacity: progress,
              scale: `1 ${progress}`,
              transformOrigin: 'center top',
            }}
          />
        );
      })}

      <ImpactReveal delay={160} style={{position: 'absolute', left: 420, top: 770}}>
        <div style={{...baseTextStyle, fontSize: 32, fontWeight: 800}}>
          民事纠纷发生后，当事人有 <Keyword accent="blue">四种解决路径</Keyword>
        </div>
      </ImpactReveal>
    </div>
  );
};

// 场景2：和解 vs 调解
export const SettlementMediationScene = () => {
  const frame = toSourceFrame(useCurrentFrame());

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="02" eyebrow="非正式解决方式" title="和解 · 调解" accent="gold" />

      {/* 共享纠纷节点 */}
      <FadeIn delay={10} duration={28} style={{position: 'absolute', left: 92, top: 360}}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12}}>
          <DisputeIcon size={72} />
          <div style={{...baseTextStyle, fontSize: 22, fontWeight: 800, color: PALETTE.red}}>民事纠纷</div>
        </div>
      </FadeIn>

      {/* 和解分支 */}
      <div style={{position: 'absolute', left: 280, top: 300, opacity: interpolate(frame, [30, 60], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}}>
        <IconNode icon={Handshake} label="和解" detail="双方当事人自行协商" accent="gold" />
      </div>
      <FlowArrow left={590} top={370} width={220} progress={interpolate(frame, [50, 80], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})} accent="gold" label="达成协议" />
      <MaskedReveal delay={80} duration={28} style={{position: 'absolute', left: 830, top: 320}}>
        <div
          style={{
            ...baseTextStyle,
            fontSize: 28,
            fontWeight: 800,
            color: PALETTE.gold,
            padding: '18px 26px',
            backgroundColor: PALETTE.goldSoft,
            border: `2px solid ${PALETTE.gold}`,
            borderRadius: 8,
          }}
        >
          消灭争议
        </div>
      </MaskedReveal>

      {/* 调解分支 */}
      <div style={{position: 'absolute', left: 280, top: 560, opacity: interpolate(frame, [90, 120], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}}>
        <IconNode icon={Users} label="调解" detail="第三人主持调停" accent="teal" />
      </div>
      <FlowArrow left={590} top={630} width={220} progress={interpolate(frame, [110, 140], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})} accent="teal" label="调解协议" />
      <MaskedReveal delay={140} duration={28} style={{position: 'absolute', left: 830, top: 580}}>
        <div
          style={{
            ...baseTextStyle,
            fontSize: 26,
            fontWeight: 800,
            color: PALETTE.teal,
            padding: '18px 26px',
            backgroundColor: PALETTE.tealSoft,
            border: `2px solid ${PALETTE.teal}`,
            borderRadius: 8,
          }}
        >
          有法律效力，<span style={{color: PALETTE.red}}>无强制执行力</span>
        </div>
      </MaskedReveal>

      <ImpactReveal delay={180} style={{position: 'absolute', left: 320, top: 820}}>
        <div style={{...baseTextStyle, fontSize: 30, fontWeight: 800}}>
          调解协议效力类似 <Keyword accent="teal">合同</Keyword>，对双方有约束力
        </div>
      </ImpactReveal>
    </div>
  );
};

// 场景3：仲裁 vs 诉讼
export const ArbitrationLitigationScene = () => {
  const frame = toSourceFrame(useCurrentFrame());

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="03" eyebrow="正式解决方式" title="仲裁 · 诉讼" accent="blue" />

      {/* 共享纠纷节点 */}
      <FadeIn delay={10} duration={28} style={{position: 'absolute', left: 92, top: 360}}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12}}>
          <DisputeIcon size={72} />
          <div style={{...baseTextStyle, fontSize: 22, fontWeight: 800, color: PALETTE.red}}>民事纠纷</div>
        </div>
      </FadeIn>

      {/* 仲裁分支 */}
      <div style={{position: 'absolute', left: 280, top: 300, opacity: interpolate(frame, [30, 60], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}}>
        <IconNode icon={Scale} label="仲裁" detail="仲裁机构裁决" accent="blue" />
      </div>
      <FlowArrow left={590} top={370} width={220} progress={interpolate(frame, [50, 80], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})} accent="blue" label="民间组织" />
      <MaskedReveal delay={80} duration={28} style={{position: 'absolute', left: 830, top: 320}}>
        <div
          style={{
            ...baseTextStyle,
            fontSize: 26,
            fontWeight: 800,
            color: PALETTE.blue,
            padding: '18px 26px',
            backgroundColor: PALETTE.blueSoft,
            border: `2px solid ${PALETTE.blue}`,
            borderRadius: 8,
          }}
        >
          裁决书有法律约束力 + 强制执行力
        </div>
      </MaskedReveal>

      {/* 诉讼分支 */}
      <div style={{position: 'absolute', left: 280, top: 560, opacity: interpolate(frame, [90, 120], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}}>
        <IconNode icon={Landmark} label="诉讼" detail="人民法院审理" accent="red" />
      </div>
      <FlowArrow left={590} top={630} width={220} progress={interpolate(frame, [110, 140], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})} accent="red" label="国家审判权" />
      <MaskedReveal delay={140} duration={28} style={{position: 'absolute', left: 830, top: 580}}>
        <div
          style={{
            ...baseTextStyle,
            fontSize: 26,
            fontWeight: 800,
            color: PALETTE.red,
            padding: '18px 26px',
            backgroundColor: PALETTE.redSoft,
            border: `2px solid ${PALETTE.red}`,
            borderRadius: 8,
          }}
        >
          法院判决代表国家行使审判权
        </div>
      </MaskedReveal>

      <ImpactReveal delay={180} style={{position: 'absolute', left: 340, top: 820}}>
        <div style={{...baseTextStyle, fontSize: 30, fontWeight: 800}}>
          <Keyword accent="blue">仲裁</Keyword> 是民间组织，<Keyword accent="red">诉讼</Keyword> 是国家审判机关
        </div>
      </ImpactReveal>
    </div>
  );
};

// 场景4：执行力阶梯
export const EnforceabilityScene = () => {
  const frame = toSourceFrame(useCurrentFrame());

  const levels = [
    {label: '和解', icon: Handshake, accent: 'gold' as const, outcome: '无强制执行力', detail: '靠自觉履行'},
    {label: '调解', icon: Users, accent: 'teal' as const, outcome: '无强制执行力', detail: '类似合同效力'},
    {label: '仲裁', icon: Scale, accent: 'blue' as const, outcome: '有强制执行力', detail: '可申请法院执行'},
    {label: '诉讼', icon: Landmark, accent: 'red' as const, outcome: '有强制执行力', detail: '法院判决/裁定'},
  ];

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="04" eyebrow="效力阶梯" title="四种方式的执行力" accent="red" />

      {/* 阶梯轴 */}
      <VerticalArrow left={92} top={240} height={520} progress={interpolate(frame, [20, 80], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})} accent="ink" label="强制执行力" />

      {levels.map((level, index) => {
        const delay = 40 + index * 30;
        const progress = interpolate(frame, [delay, delay + 34], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)});
        const y = 700 - index * 130;
        return (
          <div key={level.label}>
            <div
              style={{
                position: 'absolute',
                left: 200,
                top: y,
                opacity: progress,
                transform: `translateX(${interpolate(progress, [0, 1], [-40, 0])}px)`,
              }}
            >
              <IconNode icon={level.icon} label={level.label} accent={level.accent} compact />
            </div>
            <div
              style={{
                position: 'absolute',
                left: 520,
                top: y + 20,
                opacity: progress,
                ...baseTextStyle,
                fontSize: 26,
                fontWeight: 800,
                color: PALETTE[level.accent],
              }}
            >
              {level.outcome}
            </div>
            <div
              style={{
                position: 'absolute',
                left: 520,
                top: y + 58,
                opacity: progress,
                ...baseTextStyle,
                fontSize: 20,
                fontWeight: 600,
                color: PALETTE.muted,
              }}
            >
              {level.detail}
            </div>
          </div>
        );
      })}

      <ImpactReveal delay={180} style={{position: 'absolute', left: 320, top: 860}}>
        <div style={{...baseTextStyle, fontSize: 30, fontWeight: 800}}>
          从 <Keyword accent="gold">非正式</Keyword> 到 <Keyword accent="red">正式</Keyword>，强制执行力逐步增强
        </div>
      </ImpactReveal>
    </div>
  );
};

// 场景5：总结
export const RecapScene = () => {
  const frame = toSourceFrame(useCurrentFrame());

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="05" eyebrow="总结" title="四种纠纷解决方式" accent="red" />

      {/* 横向光谱 */}
      <div style={{position: 'absolute', left: 150, top: 580, width: 1620, height: 8, backgroundColor: PALETTE.line, borderRadius: 4}}>
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: `${interpolate(frame, [20, 80], [0, 100], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}%`,
            backgroundColor: PALETTE.ink,
            borderRadius: 4,
            transformOrigin: 'left center',
          }}
        />
      </div>
      <div style={{...baseTextStyle, position: 'absolute', left: 150, top: 610, fontSize: 20, fontWeight: 700, color: PALETTE.muted}}>非正式</div>
      <div style={{...baseTextStyle, position: 'absolute', right: 150, top: 610, fontSize: 20, fontWeight: 700, color: PALETTE.muted}}>正式 / 国家强制</div>

      {METHODS.map((method, index) => {
        const delay = 30 + index * 22;
        const progress = interpolate(frame, [delay, delay + 34], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)});
        return (
          <div
            key={method.key}
            style={{
              position: 'absolute',
              left: method.x,
              top: 420,
              opacity: progress,
              transform: `translateY(${interpolate(progress, [0, 1], [30, 0])}px)`,
            }}
          >
            <IconNode icon={method.icon} label={method.label} detail={method.detail} accent={method.accent} compact />
          </div>
        );
      })}

      <ImpactReveal delay={140} style={{position: 'absolute', left: 260, top: 760}}>
        <div style={{...baseTextStyle, fontSize: 30, fontWeight: 800}}>
          选择路径的关键：是否需要 <Keyword accent="red">国家强制力</Keyword> 保障实现权利
        </div>
      </ImpactReveal>
    </div>
  );
};
