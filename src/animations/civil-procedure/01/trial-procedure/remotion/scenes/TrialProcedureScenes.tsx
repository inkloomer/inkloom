import {
  Ban,
  BookOpen,
  Building2,
  FileWarning,
  Gavel,
  Landmark,
  MessageSquareWarning,
  Scale,
  Split,
  Users,
  Vote,
} from 'lucide-react';
import {interpolate, useCurrentFrame} from 'remotion';
import {PALETTE, accentColor, accentSoftColor, toSourceFrame} from '../storyboard';
import {
  ENTER_EASING,
  BranchConnector,
  FlowArrow,
  IconNode,
  Enter,
  ImpactReveal,
  Keyword,
  KeywordFocus,
  MaskedReveal,
  SceneHeading,
  StaggerEnter,
  baseTextStyle,
} from '../visual-system';

const LITIGATION = [
  {label: '一审程序', detail: '初次审理', icon: Gavel},
  {label: '二审程序', detail: '上诉审理', icon: Scale},
  {label: '再审程序', detail: '纠错审理', icon: BookOpen},
];

const NON_LITIGATION = [
  {label: '特别程序', detail: '除选民资格外 · 宣告失踪等', icon: Landmark, note: '确认法律事实'},
  {label: '督促程序', detail: '支付令催收 · 无实体争讼', icon: MessageSquareWarning, note: '快速实现债权'},
  {label: '公示催告', detail: '宣告票据无效', icon: Building2, note: '权利外观清理'},
];

/* ========== 01 分类标准 ========== */
export const CriterionScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const trunk = interpolate(frame, [20, 65], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const branch = interpolate(frame, [65, 115], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p3 = interpolate(frame, [130, 175], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="01" eyebrow="民事审判程序" title="先问：是否解决民事纠纷？" accent="red" />

      <MaskedReveal delay={8} duration={20} style={{position: 'absolute', left: 120, top: 230}}>
        <div style={{...baseTextStyle, fontSize: 36, fontWeight: 900}}>
          分类唯一标尺：是否 <KeywordFocus accent="red" delay={30}>解决民事权利义务纠纷</KeywordFocus>
        </div>
      </MaskedReveal>

      {/* 根节点 — 加大占满中轴 */}
      <div
        style={{
          position: 'absolute',
          left: 660,
          top: 320,
          opacity: trunk,
          scale: interpolate(trunk, [0, 1], [0.92, 1]),
        }}
      >
        <div
          style={{
            width: 600,
            height: 150,
            boxSizing: 'border-box',
            display: 'grid',
            placeItems: 'center',
            backgroundColor: PALETTE.paper,
            border: `4px solid ${PALETTE.ink}`,
            borderRadius: 16,
            boxShadow: '0 16px 40px rgba(23, 32, 29, 0.1)',
            ...baseTextStyle,
          }}
        >
          <div style={{textAlign: 'center'}}>
            <div style={{fontSize: 36, fontWeight: 900}}>民事审判程序</div>
            <div style={{marginTop: 8, fontSize: 22, color: PALETTE.muted, fontWeight: 750}}>两大分支 + 一类例外</div>
          </div>
        </div>
      </div>

      <BranchConnector fromX={820} fromY={470} toX={380} toY={560} progress={branch} accent="blue" />
      <BranchConnector fromX={1100} fromY={470} toX={1540} toY={560} progress={branch} accent="teal" />

      <div style={{position: 'absolute', left: 140, top: 560, opacity: branch}}>
        <div
          style={{
            width: 560,
            minHeight: 200,
            boxSizing: 'border-box',
            padding: '28px 30px',
            backgroundColor: PALETTE.paper,
            border: `3px solid ${PALETTE.blue}`,
            borderRadius: 14,
            display: 'flex',
            alignItems: 'center',
            gap: 22,
            ...baseTextStyle,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              display: 'grid',
              placeItems: 'center',
              borderRadius: 12,
              backgroundColor: PALETTE.blueSoft,
              color: PALETTE.blue,
              flex: '0 0 auto',
            }}
          >
            <Scale size={44} strokeWidth={2.2} />
          </div>
          <div>
            <div style={{fontSize: 34, fontWeight: 900, color: PALETTE.blue}}>诉讼程序</div>
            <div style={{marginTop: 10, fontSize: 24, fontWeight: 750, color: PALETTE.ink}}>解决民事权利义务纠纷</div>
            <div style={{marginTop: 8, fontSize: 20, color: PALETTE.muted, fontWeight: 700}}>存在对立双方当事人</div>
          </div>
        </div>
      </div>

      <div style={{position: 'absolute', left: 1220, top: 560, opacity: branch}}>
        <div
          style={{
            width: 560,
            minHeight: 200,
            boxSizing: 'border-box',
            padding: '28px 30px',
            backgroundColor: PALETTE.paper,
            border: `3px solid ${PALETTE.teal}`,
            borderRadius: 14,
            display: 'flex',
            alignItems: 'center',
            gap: 22,
            ...baseTextStyle,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              display: 'grid',
              placeItems: 'center',
              borderRadius: 12,
              backgroundColor: PALETTE.tealSoft,
              color: PALETTE.teal,
              flex: '0 0 auto',
            }}
          >
            <BookOpen size={44} strokeWidth={2.2} />
          </div>
          <div>
            <div style={{fontSize: 34, fontWeight: 900, color: PALETTE.teal}}>非讼程序</div>
            <div style={{marginTop: 10, fontSize: 24, fontWeight: 750, color: PALETTE.ink}}>不解决民事权利义务纠纷</div>
            <div style={{marginTop: 8, fontSize: 20, color: PALETTE.muted, fontWeight: 700}}>无对立争讼结构</div>
          </div>
        </div>
      </div>

      <ImpactReveal delay={145} style={{position: 'absolute', left: 420, top: 820}}>
        <div
          style={{
            ...baseTextStyle,
            fontSize: 30,
            fontWeight: 850,
            opacity: p3,
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            padding: '16px 26px',
            backgroundColor: PALETTE.goldSoft,
            border: `2px solid ${PALETTE.gold}`,
            borderRadius: 10,
          }}
        >
          <Split size={34} color={PALETTE.gold} />
          另有例外：选民资格 · 既非诉讼也非非讼
        </div>
      </ImpactReveal>
    </div>
  );
};

/* ========== 02 诉讼程序 ========== */
export const LitigationScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const p1 = interpolate(frame, [16, 55], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const line = interpolate(frame, [50, 95], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="02" eyebrow="诉讼程序" title="解决民事权利义务纠纷" accent="blue" />

      <MaskedReveal delay={8} duration={20} style={{position: 'absolute', left: 120, top: 230}}>
        <div style={{...baseTextStyle, fontSize: 34, fontWeight: 900}}>
          存在对立双方 · 用裁判解决 <Keyword accent="blue">实体争议</Keyword>
        </div>
      </MaskedReveal>

      <div
        style={{
          position: 'absolute',
          left: 100,
          top: 340,
          width: 1720,
          height: 210,
          boxSizing: 'border-box',
          padding: '28px 32px',
          backgroundColor: PALETTE.paper,
          border: `3px solid ${PALETTE.blue}`,
          borderRadius: 14,
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          opacity: p1,
        }}
      >
        <IconNode icon={Users} label="对立当事人" detail="原被告 / 上诉双方" accent="blue" style={{width: 360, minHeight: 140}} />
        <div style={{position: 'relative', width: 160, height: 70}}>
          <FlowArrow left={0} top={10} width={140} progress={line} accent="blue" label="进入" />
        </div>
        <IconNode icon={Landmark} label="人民法院" detail="行使审判权" accent="blue" style={{width: 340, minHeight: 140}} />
        <div style={{position: 'relative', width: 160, height: 70}}>
          <FlowArrow left={0} top={10} width={140} progress={line} accent="red" label="作出" />
        </div>
        <IconNode icon={Gavel} label="实体裁判" detail="解决权利义务" accent="red" style={{width: 340, minHeight: 140}} />
      </div>

      <div style={{position: 'absolute', left: 100, top: 600, display: 'flex', gap: 28, width: 1720}}>
        {LITIGATION.map((item, index) => {
          const delay = 90 + index * 28;
          const p = interpolate(frame, [delay, delay + 34], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: ENTER_EASING,
          });
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              style={{
                flex: 1,
                minHeight: 180,
                boxSizing: 'border-box',
                padding: '26px 28px',
                backgroundColor: PALETTE.paper,
                border: `3px solid ${PALETTE.blue}`,
                borderRadius: 14,
                opacity: p,
                translate: `0px ${interpolate(p, [0, 1], [24, 0])}px`,
                display: 'flex',
                alignItems: 'center',
                gap: 20,
                ...baseTextStyle,
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  display: 'grid',
                  placeItems: 'center',
                  borderRadius: 12,
                  backgroundColor: PALETTE.blueSoft,
                  color: PALETTE.blue,
                  flex: '0 0 auto',
                }}
              >
                <Icon size={40} strokeWidth={2.2} />
              </div>
              <div>
                <div style={{fontSize: 32, fontWeight: 900, color: PALETTE.blue}}>{item.label}</div>
                <div style={{marginTop: 8, fontSize: 22, color: PALETTE.muted, fontWeight: 700}}>{item.detail}</div>
              </div>
            </div>
          );
        })}
      </div>

      <ImpactReveal delay={185} style={{position: 'absolute', left: 420, top: 840}}>
        <div style={{...baseTextStyle, fontSize: 30, fontWeight: 850}}>
          诉讼程序 = 一审 · 二审 · 再审（均解决纠纷）
        </div>
      </ImpactReveal>
    </div>
  );
};

/* ========== 03 非讼程序 ========== */
export const NonLitigationScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const p1 = interpolate(frame, [16, 55], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="03" eyebrow="非讼程序" title="不解决民事权利义务纠纷" accent="teal" />

      <MaskedReveal delay={8} duration={20} style={{position: 'absolute', left: 120, top: 230}}>
        <div style={{...baseTextStyle, fontSize: 34, fontWeight: 900}}>
          确认法律事实 / 实现非争议性权利 · <Keyword accent="teal">无对立争讼</Keyword>
        </div>
      </MaskedReveal>

      <div
        style={{
          position: 'absolute',
          left: 100,
          top: 320,
          width: 1720,
          height: 120,
          boxSizing: 'border-box',
          padding: '0 32px',
          backgroundColor: PALETTE.tealSoft,
          borderLeft: `10px solid ${PALETTE.teal}`,
          borderRadius: 12,
          display: 'flex',
          alignItems: 'center',
          gap: 24,
          opacity: p1,
          ...baseTextStyle,
        }}
      >
        <Ban size={44} color={PALETTE.teal} strokeWidth={2.3} />
        <div style={{fontSize: 32, fontWeight: 900}}>不存在对立双方当事人 · 不解决民事权利义务纠纷</div>
      </div>

      <div style={{position: 'absolute', left: 100, top: 490, display: 'flex', gap: 28, width: 1720}}>
        {NON_LITIGATION.map((item, index) => {
          const delay = 65 + index * 28;
          const p = interpolate(frame, [delay, delay + 34], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: ENTER_EASING,
          });
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              style={{
                flex: 1,
                minHeight: 280,
                boxSizing: 'border-box',
                padding: '30px 28px',
                backgroundColor: PALETTE.paper,
                border: `3px solid ${PALETTE.teal}`,
                borderRadius: 14,
                opacity: p,
                translate: `0px ${interpolate(p, [0, 1], [24, 0])}px`,
                display: 'flex',
                flexDirection: 'column',
                gap: 18,
                ...baseTextStyle,
              }}
            >
              <div style={{display: 'flex', alignItems: 'center', gap: 18}}>
                <div
                  style={{
                    width: 72,
                    height: 72,
                    display: 'grid',
                    placeItems: 'center',
                    borderRadius: 12,
                    backgroundColor: PALETTE.tealSoft,
                    color: PALETTE.teal,
                  }}
                >
                  <Icon size={40} strokeWidth={2.2} />
                </div>
                <div style={{fontSize: 32, fontWeight: 900, color: PALETTE.teal}}>{item.label}</div>
              </div>
              <div style={{fontSize: 24, fontWeight: 750, lineHeight: 1.4}}>{item.detail}</div>
              <div
                style={{
                  marginTop: 'auto',
                  padding: '12px 16px',
                  borderRadius: 8,
                  backgroundColor: PALETTE.tealSoft,
                  color: PALETTE.teal,
                  fontSize: 22,
                  fontWeight: 850,
                }}
              >
                {item.note}
              </div>
            </div>
          );
        })}
      </div>

      <ImpactReveal delay={165} style={{position: 'absolute', left: 280, top: 830}}>
        <div style={{...baseTextStyle, fontSize: 28, fontWeight: 850}}>
          注意：特别程序中的 <Keyword accent="gold">选民资格</Keyword> 要单独拎出
        </div>
      </ImpactReveal>
    </div>
  );
};

/* ========== 04 选民资格例外 ========== */
export const VoterExceptionScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const p1 = interpolate(frame, [16, 55], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p2 = interpolate(frame, [65, 115], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p3 = interpolate(frame, [135, 180], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const ban = interpolate(frame, [95, 140], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="04" eyebrow="高频例外" title="选民资格：双否定性" accent="gold" />

      <MaskedReveal delay={8} duration={20} style={{position: 'absolute', left: 120, top: 230}}>
        <div style={{...baseTextStyle, fontSize: 34, fontWeight: 900}}>
          既不是诉讼程序 · 也不是非讼程序
        </div>
      </MaskedReveal>

      {/* 中心大节点 */}
      <div
        style={{
          position: 'absolute',
          left: 460,
          top: 310,
          width: 1000,
          minHeight: 160,
          boxSizing: 'border-box',
          padding: '28px 36px',
          backgroundColor: PALETTE.paper,
          border: `4px solid ${PALETTE.gold}`,
          borderRadius: 16,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 28,
          opacity: p1,
          scale: interpolate(p1, [0, 1], [0.94, 1]),
          boxShadow: '0 16px 40px rgba(168, 121, 29, 0.16)',
          ...baseTextStyle,
        }}
      >
        <div
          style={{
            width: 88,
            height: 88,
            display: 'grid',
            placeItems: 'center',
            borderRadius: 14,
            backgroundColor: PALETTE.goldSoft,
            color: PALETTE.gold,
          }}
        >
          <Vote size={48} strokeWidth={2.2} />
        </div>
        <div>
          <div style={{fontSize: 40, fontWeight: 900, color: PALETTE.gold}}>选民资格案件</div>
          <div style={{marginTop: 10, fontSize: 26, fontWeight: 750, color: PALETTE.muted}}>解决的是政治权利问题 · 不进民事分类</div>
        </div>
      </div>

      {/* 双否支 — 加宽填满 */}
      <div
        style={{
          position: 'absolute',
          left: 100,
          top: 530,
          width: 820,
          minHeight: 200,
          boxSizing: 'border-box',
          padding: '28px 30px',
          backgroundColor: PALETTE.paper,
          border: `3px solid ${PALETTE.blue}`,
          borderRadius: 14,
          opacity: p2,
          display: 'flex',
          flexDirection: 'column',
          gap: 18,
          ...baseTextStyle,
        }}
      >
        <div style={{display: 'flex', alignItems: 'center', gap: 18}}>
          <IconNode icon={Scale} label="诉讼程序？" accent="blue" compact style={{width: 300}} />
          <div style={{opacity: ban, color: PALETTE.red, display: 'flex', alignItems: 'center', gap: 12}}>
            <Ban size={44} strokeWidth={2.6} />
            <span style={{fontSize: 40, fontWeight: 950}}>否</span>
          </div>
        </div>
        <div style={{fontSize: 24, fontWeight: 750, color: PALETTE.muted, paddingLeft: 8}}>
          争的不是民事权利义务 · 不能归入诉讼分支
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 1000,
          top: 530,
          width: 820,
          minHeight: 200,
          boxSizing: 'border-box',
          padding: '28px 30px',
          backgroundColor: PALETTE.paper,
          border: `3px solid ${PALETTE.teal}`,
          borderRadius: 14,
          opacity: p2,
          display: 'flex',
          flexDirection: 'column',
          gap: 18,
          ...baseTextStyle,
        }}
      >
        <div style={{display: 'flex', alignItems: 'center', gap: 18}}>
          <IconNode icon={BookOpen} label="非讼程序？" accent="teal" compact style={{width: 300}} />
          <div style={{opacity: ban, color: PALETTE.red, display: 'flex', alignItems: 'center', gap: 12}}>
            <Ban size={44} strokeWidth={2.6} />
            <span style={{fontSize: 40, fontWeight: 950}}>否</span>
          </div>
        </div>
        <div style={{fontSize: 24, fontWeight: 750, color: PALETTE.muted, paddingLeft: 8}}>
          虽在特别程序章 · 但不在民事非讼分类内
        </div>
      </div>

      <ImpactReveal delay={160} style={{position: 'absolute', left: 280, top: 800}}>
        <div
          style={{
            ...baseTextStyle,
            fontSize: 30,
            fontWeight: 850,
            opacity: p3,
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            padding: '16px 26px',
            backgroundColor: PALETTE.redSoft,
            border: `2px solid ${PALETTE.red}`,
            borderRadius: 10,
          }}
        >
          <FileWarning size={34} color={PALETTE.red} />
          原因：解决的是 <KeywordFocus accent="red" delay={40}>政治权利</KeywordFocus>，不是民事权利义务
        </div>
      </ImpactReveal>
    </div>
  );
};

/* ========== 05 三向对比收束 ========== */
export const ComparisonScene = () => {
  const frame = toSourceFrame(useCurrentFrame());

  const columns = [
    {
      title: '诉讼程序',
      accent: 'blue' as const,
      icon: Scale,
      points: ['解决民事纠纷', '对立双方当事人', '一审 / 二审 / 再审'],
    },
    {
      title: '非讼程序',
      accent: 'teal' as const,
      icon: BookOpen,
      points: ['不解决民事纠纷', '无对立争讼结构', '特别 / 督促 / 公示催告'],
    },
    {
      title: '选民资格',
      accent: 'gold' as const,
      icon: Vote,
      points: ['政治权利争议', '非诉讼 · 非非讼', '单列例外'],
    },
  ];

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="05" eyebrow="对比收束" title="三类定位一眼看清" accent="red" />

      <MaskedReveal delay={8} duration={20} style={{position: 'absolute', left: 120, top: 230}}>
        <div style={{...baseTextStyle, fontSize: 34, fontWeight: 900}}>
          判断口诀：先看是否 <Keyword accent="red">民事权利义务纠纷</Keyword>
        </div>
      </MaskedReveal>

      <div style={{position: 'absolute', left: 100, top: 330, display: 'flex', gap: 28, width: 1720}}>
        {columns.map((col, index) => {
          const delay = 22 + index * 30;
          const p = interpolate(frame, [delay, delay + 40], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: ENTER_EASING,
          });
          const Icon = col.icon;
          return (
            <div
              key={col.title}
              style={{
                flex: 1,
                minHeight: 420,
                boxSizing: 'border-box',
                padding: '30px 28px',
                backgroundColor: PALETTE.paper,
                border: `3px solid ${accentColor(col.accent)}`,
                borderRadius: 14,
                opacity: p,
                translate: `0px ${interpolate(p, [0, 1], [28, 0])}px`,
                ...baseTextStyle,
              }}
            >
              <div style={{display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28}}>
                <div
                  style={{
                    width: 74,
                    height: 74,
                    display: 'grid',
                    placeItems: 'center',
                    borderRadius: 12,
                    backgroundColor: accentSoftColor(col.accent),
                    color: accentColor(col.accent),
                  }}
                >
                  <Icon size={40} strokeWidth={2.2} />
                </div>
                <div style={{fontSize: 34, fontWeight: 900, color: accentColor(col.accent)}}>{col.title}</div>
              </div>
              <div style={{display: 'grid', gap: 18}}>
                {col.points.map((point) => (
                  <div
                    key={point}
                    style={{
                      padding: '16px 18px',
                      borderRadius: 10,
                      backgroundColor: accentSoftColor(col.accent),
                      border: `2px solid ${accentColor(col.accent)}`,
                      fontSize: 26,
                      fontWeight: 850,
                      color: accentColor(col.accent),
                    }}
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <ImpactReveal delay={150} style={{position: 'absolute', left: 300, top: 820}}>
        <div style={{...baseTextStyle, fontSize: 30, fontWeight: 850}}>
          民事审判程序分类边界 · 以 <Keyword accent="red">纠纷性质</Keyword> 定归属
        </div>
      </ImpactReveal>
    </div>
  );
};

export const OverviewScene = CriterionScene;
export const TaxonomyScene = CriterionScene;
