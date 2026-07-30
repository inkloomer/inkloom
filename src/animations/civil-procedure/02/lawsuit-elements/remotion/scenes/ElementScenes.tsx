import {
  Ban,
  BookOpen,
  CheckCircle2,
  CircleHelp,
  FileText,
  Gavel,
  Handshake,
  Layers,
  Link2,
  Scale,
  Shuffle,
  Target,
  Users,
} from 'lucide-react';
import {interpolate, useCurrentFrame} from 'remotion';
import {PALETTE, toSourceFrame} from '../storyboard';
import {
  ConnectorLine,
  ENTER_EASING,
  FlowArrow,
  IconNode,
  ImpactReveal,
  Keyword,
  MaskedReveal,
  SceneHeading,
  baseTextStyle,
} from '../visual-system';

/* ========== 01 概念：诉讼标的 vs 诉讼请求 ========== */
export const ConceptScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const p1 = interpolate(frame, [20, 65], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p2 = interpolate(frame, [70, 120], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const path = interpolate(frame, [100, 155], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="01" eyebrow="要素" title="诉讼标的 ≠ 诉讼请求" accent="red" />

      <MaskedReveal delay={14} duration={26} style={{position: 'absolute', left: 120, top: 240}}>
        <div style={{...baseTextStyle, fontSize: 44, fontWeight: 900, lineHeight: 1.2}}>
          大江公司起诉张三
          <br />
          要求 <Keyword accent="red">支付价款 5 万 + 违约金</Keyword>
        </div>
      </MaskedReveal>

      {/* 三大要素横铺 */}
      <div
        style={{
          position: 'absolute',
          left: 120,
          top: 420,
          display: 'flex',
          gap: 28,
          opacity: p1,
          translate: `0px ${interpolate(frame, [20, 65], [30, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}px`,
        }}
      >
        <IconNode icon={Users} label="诉的主体" detail="当事人" accent="gold" style={{width: 360}} />
        <IconNode icon={Link2} label="诉讼标的" detail="民事实体法律关系" accent="blue" style={{width: 400}} />
        <IconNode icon={BookOpen} label="诉的理由" detail="事实 + 法律" accent="teal" style={{width: 360}} />
        <IconNode icon={Gavel} label="法院裁判" detail="围绕标的展开" accent="purple" style={{width: 360}} />
      </div>

      {/* 标的 → 请求 → 证据 对照带 */}
      <div style={{position: 'absolute', left: 120, top: 600, width: 1680, height: 300, opacity: p2}}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: PALETTE.paper,
            border: `2px solid ${PALETTE.line}`,
            borderRadius: 14,
            boxShadow: '0 14px 34px rgba(23, 32, 29, 0.06)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 40,
            top: 28,
            right: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
          }}
        >
          <IconNode icon={Handshake} label="买卖合同关系" detail="诉讼标的 · 裁判对象" accent="blue" style={{width: 400, minHeight: 140}} />
          <div style={{width: 200, position: 'relative', height: 80, flex: '0 0 auto'}}>
            <FlowArrow left={0} top={18} width={180} progress={path} accent="red" label="基于标的提出" />
          </div>
          <IconNode icon={Target} label="支付 5 万 + 违约金" detail="诉讼请求 · 特定裁判" accent="red" style={{width: 400, minHeight: 140}} />
          <div style={{opacity: path}}>
            <IconNode icon={FileText} label="买卖合同文本" detail="证据 · 不是标的" accent="gold" style={{width: 360, minHeight: 140}} />
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            left: 40,
            right: 40,
            bottom: 24,
            ...baseTextStyle,
            fontSize: 24,
            fontWeight: 800,
            color: PALETTE.muted,
            opacity: path,
            textAlign: 'center',
          }}
        >
          标的是 <Keyword accent="blue">法律关系</Keyword>
          {' · '}
          请求是 <Keyword accent="red">具体主张</Keyword>
          {' · '}
          合同文本只是 <Keyword accent="gold">证据</Keyword>
        </div>
      </div>
    </div>
  );
};

/* ========== 02 辨析：一标的多请求 ========== */
export const DistinctionScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const p1 = interpolate(frame, [18, 60], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p2 = interpolate(frame, [70, 115], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p3 = interpolate(frame, [125, 170], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p4 = interpolate(frame, [180, 220], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const line = interpolate(frame, [55, 100], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="02" eyebrow="辨析" title="一个标的 · 多个请求" accent="teal" />

      <MaskedReveal delay={12} duration={24} style={{position: 'absolute', left: 120, top: 240}}>
        <div style={{...baseTextStyle, fontSize: 40, fontWeight: 900, lineHeight: 1.25}}>
          张三诉李四：本金 100 万 + 利息 2 万 + 罚息 10 万
        </div>
      </MaskedReveal>

      {/* 左：唯一标的 */}
      <div
        style={{
          position: 'absolute',
          left: 120,
          top: 400,
          opacity: p1,
          translate: `${interpolate(frame, [18, 60], [-36, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}px 0px`,
        }}
      >
        <div
          style={{
            width: 460,
            minHeight: 420,
            boxSizing: 'border-box',
            padding: '32px 30px',
            backgroundColor: PALETTE.paper,
            border: `3px solid ${PALETTE.blue}`,
            borderRadius: 14,
            boxShadow: '0 14px 34px rgba(23, 32, 29, 0.09)',
            ...baseTextStyle,
          }}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28}}>
            <Link2 size={40} color={PALETTE.blue} strokeWidth={2.2} />
            <div style={{fontSize: 32, fontWeight: 900, color: PALETTE.blue}}>唯一诉讼标的</div>
          </div>
          <IconNode icon={Handshake} label="借款合同关系" detail="民事实体法律关系" accent="blue" style={{width: 380, minHeight: 130}} />
          <div style={{marginTop: 28, fontSize: 24, fontWeight: 800, lineHeight: 1.5, color: PALETTE.muted}}>
            数的是 <Keyword accent="blue">法律关系</Keyword>
            <br />
            不是金额项目
          </div>
        </div>
      </div>

      <ConnectorLine left={600} top={580} width={140} progress={line} accent="teal" />

      {/* 中：三项请求 */}
      <div style={{position: 'absolute', left: 780, top: 400, display: 'flex', flexDirection: 'column', gap: 22}}>
        <div style={{opacity: p2, translate: `${interpolate(frame, [70, 115], [40, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}px 0px`}}>
          <IconNode icon={Target} label="返还本金 100 万" detail="诉讼请求 ①" accent="red" style={{width: 480, minHeight: 110}} />
        </div>
        <div style={{opacity: p3, translate: `${interpolate(frame, [125, 170], [40, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}px 0px`}}>
          <IconNode icon={Target} label="支付利息 2 万" detail="诉讼请求 ②" accent="red" style={{width: 480, minHeight: 110}} />
        </div>
        <div style={{opacity: p4, translate: `${interpolate(frame, [180, 220], [40, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}px 0px`}}>
          <IconNode icon={Target} label="支付罚息 10 万" detail="诉讼请求 ③" accent="red" style={{width: 480, minHeight: 110}} />
        </div>
      </div>

      {/* 右：计数结论 */}
      <div
        style={{
          position: 'absolute',
          left: 1320,
          top: 400,
          opacity: p4,
          translate: `0px ${interpolate(frame, [180, 220], [30, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}px`,
        }}
      >
        <div
          style={{
            width: 420,
            minHeight: 420,
            boxSizing: 'border-box',
            padding: '32px 30px',
            backgroundColor: PALETTE.paper,
            border: `3px solid ${PALETTE.teal}`,
            borderRadius: 14,
            boxShadow: '0 14px 34px rgba(23, 32, 29, 0.09)',
            ...baseTextStyle,
          }}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28}}>
            <Layers size={40} color={PALETTE.teal} strokeWidth={2.2} />
            <div style={{fontSize: 32, fontWeight: 900, color: PALETTE.teal}}>计数规则</div>
          </div>
          <div style={{fontSize: 42, fontWeight: 900, lineHeight: 1.45, marginBottom: 24}}>
            请求 <Keyword accent="red">3</Keyword>
            <br />
            标的 <Keyword accent="blue">1</Keyword>
          </div>
          <div style={{fontSize: 24, fontWeight: 750, color: PALETTE.muted, lineHeight: 1.5}}>
            同一借款合同关系上
            <br />
            可并列多个具体主张
          </div>
        </div>
      </div>
    </div>
  );
};

/* ========== 03 分类：确认 / 给付 / 形成 ========== */
export const ClassificationScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const p1 = interpolate(frame, [18, 65], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p2 = interpolate(frame, [75, 120], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p3 = interpolate(frame, [130, 175], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p4 = interpolate(frame, [200, 250], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="03" eyebrow="分类" title="唯一依据：原告诉讼请求" accent="gold" />

      <MaskedReveal delay={12} duration={24} style={{position: 'absolute', left: 120, top: 236}}>
        <div style={{...baseTextStyle, fontSize: 38, fontWeight: 900, lineHeight: 1.25}}>
          看请求要什么 · 不看被告怎么辩
        </div>
      </MaskedReveal>

      <div style={{position: 'absolute', left: 100, top: 370, display: 'flex', gap: 24}}>
        {[
          {
            opacity: p1,
            delay: [18, 65] as const,
            color: PALETTE.blue,
            soft: PALETTE.blueSoft,
            icon: CheckCircle2,
            title: '确认之诉',
            lead: (
              <>
                确认法律关系 <Keyword accent="blue">是否存在 / 有效</Keyword>
              </>
            ),
            tags: ['积极：存在/有效', '消极：不存在/无效'],
            foot: (
              <div style={{display: 'flex', alignItems: 'center', gap: 10, color: PALETTE.muted, fontSize: 20, fontWeight: 700}}>
                <Ban size={22} color={PALETTE.red} />
                对象是关系，不是事实/行为
              </div>
            ),
          },
          {
            opacity: p2,
            delay: [75, 120] as const,
            color: PALETTE.red,
            soft: PALETTE.redSoft,
            icon: Scale,
            title: '给付之诉',
            lead: (
              <>
                判令被告 <Keyword accent="red">履行义务</Keyword>
              </>
            ),
            tags: ['财物给付', '作为', '不作为'],
            foot: <div style={{fontSize: 20, color: PALETTE.muted, fontWeight: 700}}>含确认内容，仍定性为给付</div>,
          },
          {
            opacity: p3,
            delay: [130, 175] as const,
            color: PALETTE.purple,
            soft: PALETTE.purpleSoft,
            icon: Shuffle,
            title: '形成之诉',
            lead: (
              <>
                <Keyword accent="purple">改变 / 消灭</Keyword> 既存关系
              </>
            ),
            tags: ['离婚', '撤销合同', '变更抚养'],
            foot: <div style={{fontSize: 20, color: PALETTE.muted, fontWeight: 700}}>关系本身既存且有效</div>,
          },
        ].map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              style={{
                opacity: card.opacity,
                translate: `0px ${interpolate(frame, card.delay, [36, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}px`,
                width: 560,
                minHeight: 380,
                boxSizing: 'border-box',
                padding: '28px 30px',
                backgroundColor: PALETTE.paper,
                border: `3px solid ${card.color}`,
                borderRadius: 14,
                boxShadow: '0 14px 34px rgba(23, 32, 29, 0.09)',
                ...baseTextStyle,
              }}
            >
              <div style={{display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20}}>
                <Icon size={42} color={card.color} strokeWidth={2.2} />
                <div style={{fontSize: 34, fontWeight: 900, color: card.color}}>{card.title}</div>
              </div>
              <div style={{fontSize: 26, fontWeight: 800, lineHeight: 1.45, marginBottom: 20}}>{card.lead}</div>
              <div style={{display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 22}}>
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: '10px 16px',
                      backgroundColor: card.soft,
                      color: card.color,
                      borderRadius: 8,
                      fontSize: 20,
                      fontWeight: 800,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {card.foot}
            </div>
          );
        })}
      </div>

      <ImpactReveal delay={230} style={{position: 'absolute', left: 120, top: 820}}>
        <div
          style={{
            opacity: p4,
            display: 'flex',
            alignItems: 'center',
            gap: 18,
            ...baseTextStyle,
            fontSize: 28,
            fontWeight: 800,
            padding: '18px 24px',
            backgroundColor: PALETTE.goldSoft,
            borderRadius: 10,
            border: `2px solid ${PALETTE.gold}`,
          }}
        >
          <CircleHelp size={34} color={PALETTE.gold} />
          <span>
            陷阱：确认时效届满 / 确认违约操作 —— 对象是事实或行为，
            <Keyword accent="gold">不是确认之诉</Keyword>
          </span>
        </div>
      </ImpactReveal>
    </div>
  );
};

/* ========== 04 变化：请求变 · 标的可不变 · 分类可变 ========== */
export const TransformationScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const stage1 = interpolate(frame, [16, 65], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const stage2 = interpolate(frame, [100, 150], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const stage3 = interpolate(frame, [180, 240], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const hold = interpolate(frame, [260, 310], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="04" eyebrow="变化" title="请求变 · 标的可不变" accent="purple" />

      <MaskedReveal delay={10} duration={22} style={{position: 'absolute', left: 120, top: 236}}>
        <div style={{...baseTextStyle, fontSize: 36, fontWeight: 900, lineHeight: 1.25}}>
          租赁纠纷：先要租金，后改主张解除合同
        </div>
      </MaskedReveal>

      {/* 变更前整行面板 */}
      <div
        style={{
          position: 'absolute',
          left: 100,
          top: 360,
          width: 1720,
          height: 200,
          opacity: stage1,
          boxSizing: 'border-box',
          padding: '28px 36px',
          backgroundColor: PALETTE.paper,
          border: `3px solid ${PALETTE.red}`,
          borderRadius: 14,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 20,
          boxShadow: '0 14px 34px rgba(23, 32, 29, 0.08)',
        }}
      >
        <div style={{...baseTextStyle, width: 90, fontSize: 24, fontWeight: 900, color: PALETTE.red, flex: '0 0 auto'}}>变更前</div>
        <IconNode icon={Link2} label="租赁合同关系" detail="诉讼标的" accent="blue" style={{width: 380, minHeight: 120}} />
        <div style={{width: 56, height: 4, backgroundColor: PALETTE.line, flex: '0 0 auto'}} />
        <IconNode icon={Target} label="支付租金 5000" detail="诉讼请求" accent="red" style={{width: 380, minHeight: 120}} />
        <div style={{width: 56, height: 4, backgroundColor: PALETTE.line, flex: '0 0 auto'}} />
        <IconNode icon={Gavel} label="给付之诉" detail="诉的分类" accent="red" style={{width: 340, minHeight: 120}} />
      </div>

      {/* 中枢变换 */}
      <div
        style={{
          position: 'absolute',
          left: 760,
          top: 580,
          opacity: stage2,
          scale: `${interpolate(stage2, [0, 1], [0.88, 1])}`,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          padding: '14px 28px',
          backgroundColor: PALETTE.goldSoft,
          border: `2px solid ${PALETTE.gold}`,
          borderRadius: 999,
        }}
      >
        <Shuffle size={36} color={PALETTE.gold} strokeWidth={2.4} />
        <div style={{...baseTextStyle, fontSize: 28, fontWeight: 900, color: PALETTE.gold}}>变更诉讼请求</div>
      </div>

      {/* 变更后整行面板 */}
      <div
        style={{
          position: 'absolute',
          left: 100,
          top: 680,
          width: 1720,
          height: 200,
          opacity: stage3,
          boxSizing: 'border-box',
          padding: '28px 36px',
          backgroundColor: PALETTE.paper,
          border: `3px solid ${PALETTE.purple}`,
          borderRadius: 14,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 20,
          boxShadow: '0 14px 34px rgba(23, 32, 29, 0.08)',
        }}
      >
        <div style={{...baseTextStyle, width: 90, fontSize: 24, fontWeight: 900, color: PALETTE.purple, flex: '0 0 auto'}}>变更后</div>
        <IconNode icon={Link2} label="租赁合同关系" detail="标的仍不变" accent="blue" style={{width: 380, minHeight: 120}} />
        <div style={{width: 56, height: 4, backgroundColor: PALETTE.line, flex: '0 0 auto'}} />
        <IconNode icon={Target} label="解除租赁合同" detail="新诉讼请求" accent="purple" style={{width: 380, minHeight: 120}} />
        <div style={{width: 56, height: 4, backgroundColor: PALETTE.line, flex: '0 0 auto'}} />
        <IconNode icon={Gavel} label="确认之诉" detail="分类改变" accent="purple" style={{width: 340, minHeight: 120}} />
      </div>

      <ImpactReveal delay={280} style={{position: 'absolute', left: 0, right: 0, top: 910, display: 'flex', justifyContent: 'center'}}>
        <div
          style={{
            opacity: hold,
            ...baseTextStyle,
            fontSize: 32,
            fontWeight: 850,
            display: 'flex',
            gap: 48,
            alignItems: 'center',
          }}
        >
          <span>
            标的 <Keyword accent="blue">不变</Keyword>
          </span>
          <span>
            请求 <Keyword accent="red">变</Keyword>
          </span>
          <span>
            分类 <Keyword accent="purple">随之变</Keyword>
          </span>
        </div>
      </ImpactReveal>
    </div>
  );
};

/* ========== 05 总结：三者关系 ========== */
export const RecapScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const p1 = interpolate(frame, [16, 65], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p2 = interpolate(frame, [75, 120], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p3 = interpolate(frame, [130, 175], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const line1 = interpolate(frame, [60, 110], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const line2 = interpolate(frame, [120, 170], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p4 = interpolate(frame, [200, 260], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="05" eyebrow="总结" title="标的 → 请求 → 分类" accent="blue" />

      <div style={{position: 'absolute', left: 100, top: 280, display: 'flex', alignItems: 'center'}}>
        <div style={{opacity: p1, translate: `${interpolate(frame, [16, 65], [-30, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}px 0px`}}>
          <IconNode icon={Link2} label="诉讼标的" detail="民事实体法律关系" accent="blue" style={{width: 400, minHeight: 160}} />
        </div>
        <div style={{width: 170, position: 'relative', height: 90}}>
          <FlowArrow left={16} top={24} width={130} progress={line1} accent="teal" label="基于" />
        </div>
        <div style={{opacity: p2}}>
          <IconNode icon={Target} label="诉讼请求" detail="特定裁判主张" accent="red" style={{width: 400, minHeight: 160}} />
        </div>
        <div style={{width: 170, position: 'relative', height: 90}}>
          <FlowArrow left={16} top={24} width={130} progress={line2} accent="gold" label="决定" />
        </div>
        <div style={{opacity: p3, translate: `${interpolate(frame, [130, 175], [30, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}px 0px`}}>
          <IconNode icon={Gavel} label="诉的分类" detail="确认 / 给付 / 形成" accent="purple" style={{width: 400, minHeight: 160}} />
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 100,
          top: 540,
          display: 'flex',
          gap: 28,
          opacity: p4,
          translate: `0px ${interpolate(frame, [200, 260], [28, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}px`,
        }}
      >
        <div
          style={{
            width: 520,
            minHeight: 320,
            boxSizing: 'border-box',
            padding: '30px 32px',
            backgroundColor: PALETTE.paper,
            border: `3px solid ${PALETTE.blue}`,
            borderRadius: 14,
            ...baseTextStyle,
          }}
        >
          <div style={{fontSize: 28, fontWeight: 900, color: PALETTE.blue, marginBottom: 20}}>记什么</div>
          <div style={{fontSize: 30, fontWeight: 850, lineHeight: 1.7}}>
            标的 = 关系
            <br />
            请求 = 主张
            <br />
            分类 = 看请求
          </div>
        </div>

        <div
          style={{
            width: 1120,
            minHeight: 320,
            boxSizing: 'border-box',
            padding: '30px 32px',
            backgroundColor: PALETTE.paper,
            border: `3px solid ${PALETTE.gold}`,
            borderRadius: 14,
            ...baseTextStyle,
          }}
        >
          <div style={{fontSize: 28, fontWeight: 900, color: PALETTE.gold, marginBottom: 24}}>易错点</div>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14, fontSize: 24, fontWeight: 750}}>
              <FileText size={32} color={PALETTE.gold} />
              合同文本是证据，不是标的
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 14, fontSize: 24, fontWeight: 750}}>
              <Layers size={32} color={PALETTE.gold} />
              多项金额请求 ≠ 多个标的
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 14, fontSize: 24, fontWeight: 750}}>
              <Ban size={32} color={PALETTE.gold} />
              确认事实/行为 ≠ 确认之诉
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 14, fontSize: 24, fontWeight: 750}}>
              <Shuffle size={32} color={PALETTE.gold} />
              请求一变，分类可能跟着变
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
