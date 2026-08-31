import type {CSSProperties, ReactNode} from 'react';
import {ArrowRight, Ban, Gavel, Handshake, Hourglass, MailCheck, Scale, ScrollText, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  frost: '#5C6B78',
  frostMid: '#6E7D8A',
  frostPale: '#DEE5EA',
  cream: '#F4F1E6',
  creamDim: '#E9E4D3',
  edge: '#C6BFAA',
  cut: '#A6493E',
  cutPale: '#F0DEDA',
  sever: '#4E9A8E',
  severPale: '#DFEBE6',
  ink: '#28303A',
  inkSoft: '#72808C',
  gilt2: '#8C6D2F',
  indigoLike: '#3A5578',
  flameOrange: '#C2453C',
  slateLike: '#48525C',
} as const;

export const prog = (frame: number, delay: number, span = 18) => interpolate(frame, [delay, delay + span], [0, 1], CLAMP);

export const Enter = ({
  children,
  delay = 0,
  distance = 26,
  from = 'up',
  marker,
  span = 18,
  style,
}: {
  readonly children: ReactNode;
  readonly delay?: number;
  readonly distance?: number;
  readonly from?: 'down' | 'left' | 'none' | 'right' | 'up';
  readonly marker?: string;
  readonly span?: number;
  readonly style?: CSSProperties;
}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, span);
  const origin =
    from === 'left'
      ? `-${distance}px 0px`
      : from === 'right'
        ? `${distance}px 0px`
        : from === 'down'
          ? `0px -${distance}px`
          : from === 'none'
            ? '0px 0px'
            : `0px ${distance}px`;
  return (
    <div
      data-final-knowledge={marker}
      style={{
        ...style,
        opacity: p,
        translate: interpolate(frame, [delay, delay + span], [origin, '0px 0px'], CLAMP),
      }}
    >
      {children}
    </div>
  );
};

export const Path = ({color = C.cut, delay = 0, span = 20, style}: {readonly color?: string; readonly delay?: number; readonly span?: number; readonly style?: CSSProperties}) => {
  const frame = useCurrentFrame();
  return (
    <div
      style={{
        ...style,
        backgroundColor: color,
        scale: `${prog(frame, delay, span)} 1`,
        transformOrigin: 'left center',
      }}
    />
  );
};

export const Shell = ({children, code, kicker, title}: {readonly children: ReactNode; readonly code: string; readonly kicker: string; readonly title: string}) => {
  const sceneIndex = Math.max(0, Math.min(3, Number(code) - 1));
  return (
    <AbsoluteFill
      data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
      style={{
        backgroundColor: C.frost,
        color: C.cream,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `repeating-linear-gradient(0deg, transparent 0 134px, rgba(222, 229, 234, 0.05) 134px 137px), repeating-linear-gradient(90deg, transparent 0 134px, rgba(0, 0, 0, 0.12) 134px 137px)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 12, background: `linear-gradient(90deg, ${C.cut}, ${C.sever}, ${C.frostPale})`, opacity: 0.92}} />
      <div style={{position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: '2px solid rgba(222, 229, 234, 0.32)'}} />
      <div style={{position: 'absolute', left: 60, top: 44, padding: '10px 16px', backgroundColor: C.frostMid, borderLeft: `8px solid ${C.cut}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.frostPale, letterSpacing: 2}}>民法 · 第11讲 · {code}</span>
      </div>
      <header
        style={{
          position: 'absolute',
          left: 290,
          right: 72,
          top: 34,
          height: 88,
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          alignItems: 'center',
          gap: 22,
          borderBottom: `2px solid ${C.cut}`,
        }}
      >
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.frostPale}}>{title}</h1>
        <span style={{fontSize: 22, fontWeight: 850, color: C.severPale, textAlign: 'right'}}>{kicker}</span>
      </header>
      <div style={{position: 'absolute', right: 64, bottom: 44, display: 'flex', alignItems: 'center', gap: 10, opacity: 0.85}}>
        {[0, 1, 2, 3].map((dot) => (
          <span
            key={dot}
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: dot === sceneIndex ? C.cut : 'transparent',
              border: `2px solid ${C.cut}`,
            }}
          />
        ))}
      </div>
      <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    </AbsoluteFill>
  );
};

export const Panel = ({children, marker, tone = C.frostMid, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.cream, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${tone}`, borderTop: `8px solid ${tone}`, color: C.ink, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(40, 48, 58, 0.35)', ...style}}
  >
    <span style={{position: 'absolute', right: 10, top: 14, width: 26, height: 26, borderTop: `3px solid ${tone}`, borderRight: `3px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 14, bottom: 10, width: 26, height: 26, borderBottom: `3px solid ${tone}`, borderLeft: `3px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.frostMid, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.frostMid, borderLeft: `6px solid ${tone}`, color: C.frostPale, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.creamDim, borderLeft: `5px solid ${tone}`, padding: '5px 12px'}}>
    <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 10, backgroundColor: tone, border: `2px solid ${C.cream}`, boxShadow: `0 0 0 2px rgba(166, 73, 62, 0.4)`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.42}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Seal = ({children, delay = 0, size = 22, tone = C.cut}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '6px 14px',
        border: `4px double ${tone}`,
        color: tone,
        backgroundColor: `${tone}12`,
        fontSize: size,
        fontWeight: 950,
        letterSpacing: 2,
        opacity: p,
        scale: 0.85 + p * 0.15,
        rotate: '-2deg',
      }}
    >
      {children}
    </span>
  );
};

export const Under = ({children, color = C.cut, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
  const frame = useCurrentFrame();
  return (
    <span style={{position: 'relative', display: 'inline-block'}}>
      {children}
      <span
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: -6,
          height: 4,
          backgroundColor: color,
          scale: `${prog(frame, delay, 22)} 1`,
          transformOrigin: 'left center',
        }}
      />
    </span>
  );
};

export const Soft = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2b`, padding: '2px 9px'}}>{children}</span>
);

export const Chip = ({children, tone = C.edge, toneBg = C.creamDim, ink = C.ink}: {readonly children: ReactNode; readonly tone?: string; readonly toneBg?: string; readonly ink?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${tone}`, backgroundColor: toneBg, padding: '5px 12px', fontSize: 22, fontWeight: 900, color: ink, whiteSpace: 'nowrap'}}>{children}</span>
);

export const RescissionFamilyScene = () => {
  /* data-final-knowledge="rescission-concept" data-final-knowledge="five-family-fork" data-final-knowledge="auto-split" data-final-knowledge="single-exercise-split" */
  return (
    <Shell code="01" kicker="解除家族 · 五条支线" title="合同解除的家族谱">
      <div
        data-layout="five-family-fork-with-auto-split"
        data-visual-anchor="document-fork"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="rescission-only-applies-to-valid-contracts-and-ends-their-force,agreed-conditions-and-deadlines-dissolve-the-contract-automatically,mutual-agreement-dissolves-by-both-parties,agreed-rights-and-statutory-rights-dissolve-by-single-exercise"
        data-focal-rule="five-family-threads-fork-from-one-cloth-and-split-by-who-pulls-the-cut"
        data-focal-channels="connector,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="rescission-concept" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 118}}>
          <Panel tone={C.frostMid} watermark={<ScrollText size={110} color={C.frostMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 18px'}}>
            <PanelTab tone={C.frostMid} icon={<ScrollText size={24} color={C.frostPale} strokeWidth={2.2} />}>概念 · 适用前提</PanelTab>
            <div style={{fontSize: 22, fontWeight: 900, color: C.ink }}>基于当事人<Soft color={C.cut}>终止交易关系</Soft>的意思表示，使合同效力<Under color={C.cut} delay={120}>归于消灭</Under>——适用前提：只针对<Soft color={C.seal}>有效</Soft>合同（无效合同无解除问题）</div>
          </Panel>
        </Enter>
        {(
          [
            {left: 0, top: 134, w: 866, h: 150, tone: C.sever, icon: <Scale size={22} color={C.cream} strokeWidth={2.2} />, name: '① 约定解除条件·解除期限', how: '条件成就·期限届满', who: '自动解除', delay: 30, mark: 'auto-split'},
            {left: 910, top: 134, w: 866, h: 150, tone: C.gilt2, icon: <Handshake size={22} color={C.cream} strokeWidth={2.2} />, name: '② 协议解除', how: '解除协议达成', who: '双方解除', delay: 60, mark: undefined},
            {left: 0, top: 300, w: 866, h: 150, tone: C.indigoLike, icon: <Gavel size={22} color={C.cream} strokeWidth={2.2} />, name: '③ 约定解除权', how: '行使解除权', who: '单方解除（解除权解除）', delay: 90, mark: 'single-exercise-split'},
            {left: 910, top: 300, w: 866, h: 150, tone: C.cut, icon: <ScrollText size={22} color={C.cream} strokeWidth={2.2} />, name: '④⑤ 一般·特别法定解除权', how: '行使解除权', who: '单方解除（解除权解除）', delay: 120, mark: undefined},
          ] as const
        ).map((fam) => (
          <Enter key={fam.name} delay={fam.delay} from="left" marker={fam.mark} style={{position: 'absolute', left: fam.left, top: fam.top, width: fam.w, height: fam.h}}>
            <Panel tone={fam.tone} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 18px'}}>
              <PanelTab tone={fam.tone} icon={fam.icon}>{fam.name}</PanelTab>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, fontSize: 21, fontWeight: 900, color: C.ink }}>
                <span>解除方法：<Soft color={fam.tone}>{fam.how}</Soft></span>
                <span style={{fontSize: 22, fontWeight: 950, color: C.inkSoft }}>→</span>
                <Seal delay={fam.delay + 120} size={19} tone={fam.tone}>{fam.who}</Seal>
              </div>
            </Panel>
          </Enter>
        ))}
        <Enter delay={150} from="up" style={{position: 'absolute', left: 0, top: 466, width: 1776, height: 302}}>
          <Panel tone={C.cut} watermark={<Gavel size={140} color={C.cut} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.cut} icon={<Gavel size={24} color={C.frostPale} strokeWidth={2.2} />}>家族谱总览 · 谁拉剪刀</PanelTab>
            <div style={{display: 'flex', gap: 12, flexWrap: 'wrap', fontSize: 20, fontWeight: 900, color: C.ink }}>
              <Chip tone={C.sever} toneBg={C.severPale}><span style={{fontSize: 19, fontWeight: 950, color: C.sever }}>约定条件·期限 → 事实自己成就 → 自动解除（无人拉剪）</span></Chip>
              <Chip tone={C.gilt2} toneBg={C.creamDim}><span style={{fontSize: 19, fontWeight: 950, color: C.gilt2 }}>协议解除 → 双方合力拉剪（双方解除）</span></Chip>
              <Chip tone={C.indigoLike} toneBg={C.severPale}><span style={{fontSize: 19, fontWeight: 950, color: C.indigoLike }}>约定解除权·法定解除权 → 一方行使拉剪（单方解除）</span></Chip>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft }}>口诀：条件<Soft color={C.sever}>自断</Soft>·协议<Soft color={C.gilt2}>合断</Soft>·权利<Soft color={C.cut}>单断</Soft>——无效合同进不了这家裁缝铺</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const SituationForceScene = () => {
  /* data-final-knowledge="rights-vs-conditions" data-final-knowledge="situation-force-scales" data-final-knowledge="normal-risk-ledger" data-final-knowledge="raw-material-cases" */
  return (
    <Shell code="02" kicker="约定权vs条件 · 情势变更 vs 不可抗力" title="权属分野与情势对照">
      <div
        data-layout="situation-force-scales-with-risk-ledger"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="changed-circumstances-make-performance-unfair-and-need-court,force-majeure-makes-performance-impossible-and-needs-notice-only,foreseeable-market-swings-are-normal-risk-and-never-rescind,court-mediates-when-one-sues-change-and-the-other-rescission"
        data-focal-rule="situation-and-force-scale-pans-tip-toward-unfair-versus-impossible-with-different-activation-modes"
        data-focal-channels="contrast,connector,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="rights-vs-conditions" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 196}}>
          <Panel tone={C.indigoLike} watermark={<Gavel size={120} color={C.indigoLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 18px'}}>
            <PanelTab tone={C.indigoLike} icon={<Gavel size={24} color={C.frostPale} strokeWidth={2.2} />}>约定解除权 vs 约定解除条件</PanelTab>
            <IconChip icon={<Gavel size={24} color={C.frostPale} strokeWidth={2.2} />} tone={C.indigoLike} title="约定解除权：">
              A 事实发生 → <Soft color={C.indigoLike}>产生解除权</Soft>；行使之 → 合同解除
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.frostPale} strokeWidth={2.2} />} tone={C.sever} title="约定解除条件：">
              A 事实发生 → <Soft color={C.sever}>自动解除</Soft>（无需行使解除权）
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={34} from="right" marker="situation-force-scales" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 196}}>
          <Panel tone={C.cut} watermark={<Scale size={120} color={C.cut} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 18px'}}>
            <PanelTab tone={C.cut} icon={<Scale size={24} color={C.frostPale} strokeWidth={2.2} />}>情势变更 vs 不可抗力</PanelTab>
            <IconChip icon={<Scale size={24} color={C.frostPale} strokeWidth={2.2} />} tone={C.indigoLike} title="情势变更：">
              履行<Soft color={C.indigoLike}>不公平</Soft>→ 变更·解除权——须以<Soft color={C.indigoLike}>诉讼·仲裁</Soft>主张
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.frostPale} strokeWidth={2.2} />} tone={C.sever} title="不可抗力：">
              履行<Soft color={C.sever}>不能</Soft>→ 双方均得解除——<Soft color={C.sever}>单方通知</Soft>即可
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={70} from="up" marker="normal-risk-ledger" style={{position: 'absolute', left: 0, top: 212, width: 1776, height: 130}}>
          <Panel tone={C.sever} watermark={<Ban size={110} color={C.sever} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '9px 18px'}}>
            <PanelTab tone={C.sever} icon={<Ban size={24} color={C.frostPale} strokeWidth={2.2} />}>正常风险 · 不得主张</PanelTab>
            <span style={{fontSize: 21, fontWeight: 900, color: C.ink }}>情势变更＝缔约时<Soft color={C.indigoLike}>不可预见</Soft>的市场异动；正常风险＝<Soft color={C.seal}>可以预见</Soft>的正常波动（大宗商品·金融产品）→ <Seal delay={160} size={18} tone={C.seal}>不得主张</Seal>变更或解除</span>
          </Panel>
        </Enter>
        <Enter delay={110} from="up" marker="raw-material-cases" style={{position: 'absolute', left: 0, top: 358, width: 1776, height: 410}}>
          <Panel tone={C.cut} watermark={<Scale size={150} color={C.cut} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 20px'}}>
            <PanelTab tone={C.cut} icon={<Scale size={24} color={C.frostPale} strokeWidth={2.2} />}>原材料涨价双案 · 谁能主张涨价</PanelTab>
            <div style={{display: 'flex', gap: 14}}>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 6, backgroundColor: C.creamDim, borderLeft: `6px solid ${C.slateLike}`, padding: '10px 14px'}}>
                <span style={{fontSize: 21, fontWeight: 950, color: C.slateLike }}>案① 普通涨价</span>
                <span style={{fontSize: 20, fontWeight: 900, color: C.ink }}>原材料上涨＝<Soft color={C.slateLike}>正常风险</Soft>（可预见）→ 甲的主张<Seal delay={180} size={17}>不能成立</Seal></span>
              </div>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 6, backgroundColor: C.creamDim, borderLeft: `6px solid ${C.indigoLike}`, padding: '10px 14px'}}>
                <span style={{fontSize: 21, fontWeight: 950, color: C.indigoLike }}>案② 疫情暴涨至 150%</span>
                <span style={{fontSize: 20, fontWeight: 900, color: C.ink }}>构成<Soft color={C.indigoLike}>情势变更</Soft>（不可预见）→ 甲的主张<Seal delay={210} size={17} tone={C.indigoLike}>能成立</Seal></span>
              </div>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft }}>口诀：权与条件差<Soft color={C.indigoLike}>一道行使</Soft>·情势对不可抗力差<Soft color={C.seal}>不公平 vs 不能</Soft>——可预见＝<Soft color={C.slateLike}>风险自担</Soft></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const BreachTrioScene = () => {
  /* data-final-knowledge="early-refusal-march" data-final-knowledge="delay-cure-march" data-final-knowledge="fundamental-march" data-final-knowledge="non-money-blocks" */
  return (
    <Shell code="03" kicker="债务人违约 · 三情形行进" title="债务人违约的解除权">
      <div
        data-layout="breach-trio-march-past-cure-gates"
        data-visual-anchor="timeline-gate"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="early-refusal-lets-the-creditor-rescue-at-once-with-expected-breach,delayed-main-debt-needs-cure-and-reasonable-time-unless-fatal,fundamental-breach-empties-the-purpose-and-needs-no-cure,non-money-duties-with-four-blocks-let-both-sides-rescue"
        data-focal-rule="the-breach-trio-marches-left-to-right-past-warning-gates-where-delay-must-stop-for-cure"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="up" marker="early-refusal-march" style={{position: 'absolute', left: 0, top: 0, width: 566, height: 300}}>
          <Panel tone={C.indigoLike} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '12px 16px'}}>
            <PanelTab tone={C.indigoLike} icon={<Ban size={22} color={C.frostPale} strokeWidth={2.2} />}>① 期前拒绝履行</PanelTab>
            <span style={{fontSize: 20, fontWeight: 950, color: C.indigoLike }}>到期前明示或默示拒绝履行</span>
            <div style={{marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 4}}>
              <Seal delay={130} size={18} tone={C.indigoLike}>立即解除＋预期违约责任</Seal>
              <span style={{fontSize: 19, fontWeight: 900, color: C.inkSoft }}>既可明示也可默示</span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={40} from="up" marker="delay-cure-march" style={{position: 'absolute', left: 605, top: 0, width: 566, height: 300}}>
          <Panel tone={C.seal} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '12px 16px'}}>
            <PanelTab tone={C.seal} icon={<Hourglass size={22} color={C.frostPale} strokeWidth={2.2} />}>② 迟延履行主要债务</PanelTab>
            <span style={{fontSize: 20, fontWeight: 950, color: C.seal }}>主要债务＋催告＋合理期限仍不履行</span>
            <div style={{marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 4}}>
              <Seal delay={170} size={18}>催告后可解除</Seal>
              <span style={{fontSize: 19, fontWeight: 900, color: C.inkSoft }}>金钱债务迟延＝迟延履行·非根本违约</span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={76} from="up" marker="fundamental-march" style={{position: 'absolute', left: 1210, top: 0, width: 566, height: 300}}>
          <Panel tone={C.cut} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '12px 16px'}}>
            <PanelTab tone={C.cut} icon={<Gavel size={22} color={C.frostPale} strokeWidth={2.2} />}>③ 根本违约</PanelTab>
            <span style={{fontSize: 20, fontWeight: 950, color: C.cut }}>缔约目的落空·利益不能实现</span>
            <div style={{marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 4}}>
              <Seal delay={210} size={18}>无需催告即可解除</Seal>
              <span style={{fontSize: 19, fontWeight: 900, color: C.inkSoft }}>酒店未供客房案 → 无需催告</span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={110} from="down" marker="non-money-blocks" style={{position: 'absolute', left: 0, top: 316, width: 1776, height: 180}}>
          <Panel tone={C.slateLike} watermark={<Ban size={120} color={C.slateLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 18px'}}>
            <PanelTab tone={C.slateLike} icon={<Ban size={24} color={C.frostPale} strokeWidth={2.2} />}>非金钱之债 · 无需继续履行的四情形 → 双方均有权诉请解除</PanelTab>
            <div style={{display: 'flex', gap: 10, flexWrap: 'wrap', fontSize: 20, fontWeight: 900, color: C.ink }}>
              <Chip tone={C.slateLike} toneBg={C.frostPale}><span style={{fontSize: 19, fontWeight: 950, color: C.slateLike }}>① 法律·事实不能</span></Chip>
              <Chip tone={C.slateLike} toneBg={C.frostPale}><span style={{fontSize: 19, fontWeight: 950, color: C.slateLike }}>② 不适于强制履行</span></Chip>
              <Chip tone={C.slateLike} toneBg={C.frostPale}><span style={{fontSize: 19, fontWeight: 950, color: C.slateLike }}>③ 费用过高</span></Chip>
              <Chip tone={C.slateLike} toneBg={C.frostPale}><span style={{fontSize: 19, fontWeight: 950, color: C.slateLike }}>④ 合理期限内未请求</span></Chip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={150} from="up" style={{position: 'absolute', left: 0, top: 512, width: 1776, height: 256}}>
          <Panel tone={C.indigoLike} watermark={<Hourglass size={140} color={C.indigoLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.indigoLike} icon={<Hourglass size={24} color={C.frostPale} strokeWidth={2.2} />}>发票双案 · 汽车买卖（乙已付款）</PanelTab>
            <div style={{display: 'flex', gap: 12, flexWrap: 'wrap', fontSize: 20, fontWeight: 900, color: C.ink }}>
              <Chip tone={C.slateLike} toneBg={C.frostPale}><span style={{fontSize: 19, fontWeight: 950, color: C.slateLike }}>未交发票+催告→不能解（次要债务）</span></Chip>
              <Chip tone={C.coral} toneBg={C.coralPale}><span style={{fontSize: 19, fontWeight: 950, color: C.coral }}>未交发票致无法用车+催告→能解（主要债务）</span></Chip>
              <Chip tone={C.coral} toneBg={C.coralPale}><span style={{fontSize: 19, fontWeight: 950, color: C.coral }}>未交车·次日或半年→均不能解（未经催告）</span></Chip>
              <Chip tone={C.indigoLike} toneBg={C.severPale}><span style={{fontSize: 19, fontWeight: 950, color: C.indigoLike }}>酒店未供房→能解（根本违约·无需催告）</span></Chip>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft }}>口诀：<Soft color={C.indigoLike}>期前拒绝立马来</Soft>·迟延主债<Soft color={C.seal}>催告开</Soft>·根本违约<Soft color={C.coral}>直通快</Soft></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const ExerciseTimeScene = () => {
  /* data-final-knowledge="exercise-mode" data-final-knowledge="objection-window" data-final-knowledge="snap-time-rules" data-final-knowledge="consequence-rules" */
  return (
    <Shell code="04" kicker="行使 · 时间 · 后果" title="解除权的行使与后果">
      <div
        data-layout="notice-chain-with-time-snap-and-consequence"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="rescission-is-formative-and-usually-a-single-notice,objection-windows-run-three-months-from-the-notice,litigated-rescissions-snap-back-to-the-copy-service-date,guarantees-survive-rescission-and-courts-must-remind-on-penalties"
        data-focal-rule="the-cut-line-snaps-at-notice-arrival-or-copy-service-with-guarantees-surviving-the-snap"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="exercise-mode" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 236}}>
          <Panel tone={C.indigoLike} watermark={<MailCheck size={130} color={C.indigoLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.indigoLike} icon={<MailCheck size={24} color={C.frostPale} strokeWidth={2.2} />}>行使方式 · 形成权</PanelTab>
            <IconChip icon={<MailCheck size={24} color={C.frostPale} strokeWidth={2.2} />} tone={C.indigoLike} title="原则＝单方通知：">
              解除权为<Soft color={C.indigoLike}>形成权</Soft>——通知到达即解除
            </IconChip>
            <IconChip icon={<Gavel size={24} color={C.frostPale} strokeWidth={2.2} />} tone={C.seal} title="两例外须诉讼·仲裁：">
              ① 情势变更解除权 ② 无需继续履行的非金钱之债解除权
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={34} from="right" marker="objection-window" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 236}}>
          <Panel tone={C.cut} watermark={<Hourglass size={130} color={C.cut} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.cut} icon={<Hourglass size={24} color={C.frostPale} strokeWidth={2.2} />}>相对人异议权</PanelTab>
            <IconChip icon={<Hourglass size={24} color={C.frostPale} strokeWidth={2.2} />} tone={C.cut} title="异议期限：">
              有约定从约定；无约定 → 接到通知之日起<Soft color={C.cut}>3 个月</Soft>
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 900, color: C.inkSoft }}>关键：<Soft color={C.seal}>无解除权</Soft>者发通知，对方即便未异议 → <Seal delay={170} size={17}>不发生</Seal>解除效果</div>
          </Panel>
        </Enter>
        <Enter delay={70} from="up" marker="snap-time-rules" style={{position: 'absolute', left: 0, top: 252, width: 1776, height: 224}}>
          <Panel tone={C.slateLike} watermark={<MailCheck size={130} color={C.slateLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.slateLike} icon={<MailCheck size={24} color={C.frostPale} strokeWidth={2.2} />}>解除时间 · 剪刀何时落下</PanelTab>
            <div style={{display: 'flex', gap: 12, flexWrap: 'wrap', fontSize: 20, fontWeight: 900, color: C.ink }}>
              <Chip tone={C.sever} toneBg={C.severPale}><span style={{fontSize: 19, fontWeight: 950, color: C.sever }}>通知解除 → 到达时（或通知载明的期限）</span></Chip>
              <Chip tone={C.indigoLike} toneBg={C.severPale}><span style={{fontSize: 19, fontWeight: 950, color: C.indigoLike }}>诉请解除 → 起诉状副本送达时（拉弹弓：2/15 起诉·2/20 副本送达 → 2/20 解除）</span></Chip>
              <Chip tone={C.slateInk} toneBg={C.frostPale}><span style={{fontSize: 19, fontWeight: 950, color: C.slateInk }}>撤诉再诉 → 之前已通知则以通知到达·否则二次副本送达时</span></Chip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={110} from="up" marker="consequence-rules" style={{position: 'absolute', left: 0, top: 492, width: 1776, height: 276}}>
          <Panel tone={C.teal2} watermark={<Coins size={140} color={C.teal2} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.teal2} icon={<Coins size={24} color={C.frostPale} strokeWidth={2.2} />}>解除后果 · 效力终止（非无效）</PanelTab>
            <div style={{display: 'flex', gap: 12, flexWrap: 'wrap', fontSize: 20, fontWeight: 900, color: C.ink }}>
              <Chip tone={C.teal2} toneBg={C.severPale}><span style={{fontSize: 19, fontWeight: 950, color: C.teal2 }}>尚未履行的到期债务 → 终止履行</span></Chip>
              <Chip tone={C.indigoLike} toneBg={C.severPale}><span style={{fontSize: 19, fontWeight: 950, color: C.indigoLike }}>解除前已违约 → 违约责任请求权不受影响</span></Chip>
              <Chip tone={C.seal} toneBg={C.coralPale}><span style={{fontSize: 19, fontWeight: 950, color: C.seal }}>担保合同依然有效 → 担保人继续担保赔偿·违约金请求权</span></Chip>
              <Chip tone={C.slateInk} toneBg={C.frostPale}><span style={{fontSize: 19, fontWeight: 950, color: C.slateInk }}>解约未主张违约金 → 法院应予释明</span></Chip>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft }}>对照：主合同<Soft color={C.seal}>无效</Soft>→担保无效·过错赔偿；主合同<Soft color={C.indigoLike}>解除</Soft>→担保有效·担保责任</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
