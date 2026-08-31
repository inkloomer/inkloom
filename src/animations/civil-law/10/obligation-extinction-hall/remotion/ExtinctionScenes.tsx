import type {CSSProperties, ReactNode} from 'react';
import {Archive, ArrowDown, Ban, CircleEqual, Coins, Gavel, GitFork, Handshake, Merge, Scale, ScrollText} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  ember: '#26221E',
  emberMid: '#3A332C',
  flame: '#D07836',
  flamePale: '#F4E3D2',
  wax: '#F2EDE0',
  waxDim: '#E7E0D0',
  edge: '#C6BFAA',
  smoke: '#6B6458',
  teal2: '#4E7A6E',
  teal2Pale: '#DFEBE6',
  ink: '#262019',
  inkSoft: '#756D60',
  jadeLike2: '#3E7A64',
  crimsonLike: '#B03A2A',
  indigoLike: '#3A5578',
  slateLike: '#48525C',
  goldLike: '#8C6D2F',
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

export const Mover = ({children, delay = 0, span = 30, fromX = 0, toX = 0, fromY = 0, toY = 0, fadeAt, style}: {
  readonly children: ReactNode;
  readonly delay?: number;
  readonly fadeAt?: number;
  readonly fromX?: number;
  readonly fromY?: number;
  readonly span?: number;
  readonly toX?: number;
  readonly toY?: number;
  readonly style?: CSSProperties;
}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, span);
  return (
    <div
      style={{
        ...style,
        opacity: fadeAt === undefined ? p : interpolate(frame, [delay, delay + 6, fadeAt, fadeAt + 10], [0, 1, 1, 0], CLAMP),
        translate: `${interpolate(frame, [delay, delay + span], [fromX, toX], CLAMP)}px ${interpolate(frame, [delay, delay + span], [fromY, toY], CLAMP)}px`,
      }}
    >
      {children}
    </div>
  );
};

export const Path = ({color = C.flame, delay = 0, span = 20, style}: {readonly color?: string; readonly delay?: number; readonly span?: number; readonly style?: CSSProperties}) => {
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
        backgroundColor: C.ember,
        color: C.wax,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `repeating-linear-gradient(0deg, transparent 0 140px, rgba(208, 120, 54, 0.045) 140px 143px), repeating-linear-gradient(90deg, transparent 0 140px, rgba(0, 0, 0, 0.14) 140px 143px)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 12, background: `linear-gradient(90deg, ${C.flame}, ${C.teal2}, ${C.wax})`, opacity: 0.92}} />
      <div style={{position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: '2px solid rgba(242, 237, 224, 0.3)'}} />
      <div style={{position: 'absolute', left: 60, top: 44, padding: '10px 16px', backgroundColor: C.emberMid, borderLeft: `8px solid ${C.flame}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.flamePale, letterSpacing: 2}}>民法 · 第10讲 · {code}</span>
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
          borderBottom: `2px solid ${C.flame}`,
        }}
      >
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.flamePale}}>{title}</h1>
        <span style={{fontSize: 22, fontWeight: 850, color: C.flamePale, textAlign: 'right'}}>{kicker}</span>
      </header>
      <div style={{position: 'absolute', right: 64, bottom: 44, display: 'flex', alignItems: 'center', gap: 10, opacity: 0.85}}>
        {[0, 1, 2, 3].map((dot) => (
          <span
            key={dot}
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: dot === sceneIndex ? C.flame : 'transparent',
              border: `2px solid ${C.flame}`,
            }}
          />
        ))}
      </div>
      <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    </AbsoluteFill>
  );
};

export const Panel = ({children, marker, tone = C.emberMid, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.wax, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${tone}`, borderTop: `8px solid ${tone}`, color: C.ink, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(38, 34, 25, 0.4)', ...style}}
  >
    <span style={{position: 'absolute', right: 10, top: 14, width: 26, height: 26, borderTop: `3px solid ${tone}`, borderRight: `3px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 14, bottom: 10, width: 26, height: 26, borderBottom: `3px solid ${tone}`, borderLeft: `3px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.emberMid, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.emberMid, borderLeft: `6px solid ${tone}`, color: C.flamePale, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.waxDim, borderLeft: `5px solid ${tone}`, padding: '5px 12px'}}>
    <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 10, backgroundColor: tone, border: `2px solid ${C.wax}`, boxShadow: `0 0 0 2px rgba(208, 120, 54, 0.4)`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.42}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Seal = ({children, delay = 0, size = 22, tone = C.flame}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

export const Under = ({children, color = C.flame, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

export const Chip = ({children, tone = C.edge, toneBg = C.waxDim, ink = C.ink}: {readonly children: ReactNode; readonly tone?: string; readonly toneBg?: string; readonly ink?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${tone}`, backgroundColor: toneBg, padding: '5px 12px', fontSize: 22, fontWeight: 900, color: ink, whiteSpace: 'nowrap'}}>{children}</span>
);

export const OffsetFulfilmentScene = () => {
  /* data-final-knowledge="offset-rung-ladder" data-final-knowledge="composite-burn-order" data-final-knowledge="pre-deadline-rule" data-final-knowledge="post-deadline-rule" */
  return (
    <Shell code="01" kicker="履行 · 抵充与以物抵债" title="履行的抵充与以物抵债">
      <div
        data-layout="priority-ladder-with-thing-for-owed-split"
        data-visual-anchor="timeline-gate"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="offset-rungs-clip-agreement-maturity-security-weight-order-and-ratio,composite-debts-burn-fee-interest-principal-from-outside-in,pre-deadline-thing-for-owed-acts-as-security-for-the-debt,post-deadline-agreements-offer-the-choice-between-thing-and-money"
        data-focal-rule="offset-rungs-light-in-priority-order-and-the-composite-candle-burns-outside-in"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="offset-rung-ladder" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 330}}>
          <Panel tone={C.flame} watermark={<Coins size={140} color={C.flame} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '12px 18px'}}>
            <PanelTab tone={C.flame} icon={<Coins size={24} color={C.flamePale} strokeWidth={2.2} />}>数笔同种类债务 · 抵充顺位</PanelTab>
            {(
              [
                {t: '① 有约定 → 按约定', d: 60},
                {t: '② 无约定 → 优先抵充已到期债务', d: 90},
                {t: '③ 均到期 → 优先抵充缺乏担保或担保最少的', d: 120},
                {t: '④ 担保相同 → 优先抵充债务负担较重的', d: 150},
                {t: '⑤ 债额相同 → 按到期先后顺序', d: 180},
                {t: '⑥ 到期时间相同 → 按比例抵充', d: 210},
              ] as const
            ).map((rung) => (
              <div key={rung.t} style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <Path color={C.flame} delay={rung.d} span={16} style={{width: 26, height: 3}} />
                <span style={{fontSize: 20, fontWeight: 900, color: C.ink }}>{rung.t}</span>
              </div>
            ))}
            <div style={{marginTop: 'auto', fontSize: 21, fontWeight: 950, color: C.flame }}>口诀：「约期保重序比」——约定＞到期＞担保少＞负担重＞先到期＞比例</div>
          </Panel>
        </Enter>
        <Enter delay={40} from="right" marker="composite-burn-order" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 330}}>
          <Panel tone={C.teal2} watermark={<ArrowDown size={130} color={C.teal2} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.teal2} icon={<ArrowDown size={24} color={C.wax} strokeWidth={2.2} />}>一笔复合债务 · 由外而内烧</PanelTab>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6}}>
              <Chip tone={C.flame} toneBg={C.flamePale}><span style={{fontSize: 22, fontWeight: 950, color: C.flame }}>费用</span></Chip>
              <ArrowDown size={22} color={C.teal2} strokeWidth={2.6} />
              <Chip tone={C.teal2} toneBg={C.teal2Pale}><span style={{fontSize: 22, fontWeight: 950, color: C.teal2 }}>利息</span></Chip>
              <ArrowDown size={22} color={C.teal2} strokeWidth={2.6} />
              <Chip tone={C.slateLike} toneBg={C.waxDim}><span style={{fontSize: 22, fontWeight: 950, color: C.slateLike }}>本金</span></Chip>
            </div>
            <div style={{marginTop: 'auto', display: 'flex', gap: 12, flexWrap: 'wrap', fontSize: 20, fontWeight: 900, color: C.ink }}>
              <Chip tone={C.jadeLike2} toneBg={C.waxDim}><span style={{fontSize: 19, fontWeight: 950, color: C.jadeLike2 }}>有约定 → 从约定</span></Chip>
              <span>法定顺序防债务人逃避<Soft color={C.flame}>利息</Soft></span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={90} from="up" marker="pre-deadline-rule" style={{position: 'absolute', left: 0, top: 346, width: 866, height: 422}}>
          <Panel tone={C.slateLike} watermark={<Archive size={140} color={C.slateLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 20px'}}>
            <PanelTab tone={C.slateLike} icon={<ScrollText size={24} color={C.wax} strokeWidth={2.2} />}>以物抵债 · 期前达成＝担保</PanelTab>
            <IconChip icon={<ScrollText size={24} color={C.wax} strokeWidth={2.2} />} tone={C.slateLike} title="性质与效力：">
              为未来到期债务提供<Soft color={C.slateLike}>担保</Soft>——协议<Soft color={C.jadeLike2}>有效</Soft>，可诉请确认效力
            </IconChip>
            <IconChip icon={<Coins size={24} color={C.wax} strokeWidth={2.2} />} tone={C.goldLike} title="到期不履行：">
              请求就抵债物<Soft color={C.goldLike}>变价受偿</Soft>——能否<Under color={C.goldLike} delay={170}>优先受偿</Under>看是否完成交付或登记
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.wax} strokeWidth={2.2} />} tone={C.crimsonLike} title="流质约款禁止：">
              约定「到期不履行抵债物直接归债权人」→ <Seal delay={200} size={18} tone={C.crimsonLike}>该约定无效</Seal>（不影响协议其他部分）
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={120} from="right" marker="post-deadline-rule" style={{position: 'absolute', left: 910, top: 346, width: 866, height: 422}}>
          <Panel tone={C.indigoLike} watermark={<Scale size={140} color={C.indigoLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 20px'}}>
            <PanelTab tone={C.indigoLike} icon={<Scale size={24} color={C.wax} strokeWidth={2.2} />}>以物抵债 · 期后达成＝抵债</PanelTab>
            <IconChip icon={<ScrollText size={24} color={C.wax} strokeWidth={2.2} />} tone={C.indigoLike} title="行使顺位：">
              <Soft color={C.indigoLike}>先</Soft>请求履行<Soft color={C.indigoLike}>以物抵债协议</Soft>——协议履行则相应债务消灭
            </IconChip>
            <IconChip icon={<GitFork size={24} color={C.wax} strokeWidth={2.2} />} tone={C.flame} title="催告仍不履行 → 择一：">
              ① 让债务人履行<Soft color={C.indigoLike}>以物抵债协议</Soft> ② 让债务人履行<Soft color={C.flame}>原来的债务</Soft>
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 21, fontWeight: 900, color: C.inkSoft }}>200 万代位案：乙对丙的以物抵债协议 → 甲<Soft color={C.indigoLike}>代位</Soft>诉请丙履行；丙不抵债 → 甲<Soft color={C.flame}>择一</Soft>主张抵债或货款</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const DepositTallyScene = () => {
  /* data-final-knowledge="deposit-definition" data-final-knowledge="three-transfer-rule" data-final-knowledge="five-year-fuse" data-final-knowledge="debtor-takeback" */
  return (
    <Shell code="02" kicker="提存 · 一提三转" title="提存">
      <div
        data-layout="deposit-tally-with-five-year-fuse"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="delayed-acceptance-lets-the-debtor-deposit-with-the-notary-office,ownership-fruit-and-risk-transfer-to-the-creditor-once-deposited,five-years-of-claim-then-state-ownership-unless-the-creditor-owes,written-waiver-returns-the-deposit-to-the-debtor-within-five-years"
        data-focal-rule="depositing-lights-three-transfer-flames-then-burns-a-five-year-fuse"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="deposit-definition" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 118}}>
          <Panel tone={C.flame} watermark={<Archive size={110} color={C.flame} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 18px'}}>
            <PanelTab tone={C.flame} icon={<Archive size={24} color={C.flamePale} strokeWidth={2.2} />}>提存 · 定义</PanelTab>
            <div style={{fontSize: 22, fontWeight: 900, color: C.ink }}>债权人<Soft color={C.crimsonLike}>迟延受领</Soft> → 债务人向法定提存机关履行债务，以<Under color={C.flame} delay={120}>消灭</Under>负债——法定提存机关＝债务履行地的<Soft color={C.indigoLike}>公证机关</Soft></div>
          </Panel>
        </Enter>
        <Enter delay={40} from="left" marker="three-transfer-rule" style={{position: 'absolute', left: 0, top: 134, width: 866, height: 260}}>
          <Panel tone={C.teal2} watermark={<Coins size={140} color={C.teal2} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.teal2} icon={<Coins size={24} color={C.wax} strokeWidth={2.2} />}>一提三转 · 火苗全交给债权人</PanelTab>
            {(
              [
                {t: '① 提存物所有权 → 债权人', d: 90},
                {t: '② 提存期间孳息所有权 → 债权人', d: 120},
                {t: '③ 提存物上风险 → 债权人承担', d: 150},
              ] as const
            ).map((f) => (
              <div key={f.t} style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <Path color={C.flame} delay={f.d} span={16} style={{width: 24, height: 3}} />
                <span style={{fontSize: 22, fontWeight: 900, color: C.ink }}>{f.t}</span>
              </div>
            ))}
            <div style={{marginTop: 'auto', fontSize: 21, fontWeight: 900, color: C.inkSoft }}>触发条件＝债权人<Soft color={C.crimsonLike}>无正当理由不接受履行</Soft></div>
          </Panel>
        </Enter>
        <Enter delay={70} from="right" marker="five-year-fuse" style={{position: 'absolute', left: 910, top: 134, width: 866, height: 260}}>
          <Panel tone={C.crimsonLike} watermark={<Ban size={140} color={C.crimsonLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.crimsonLike} icon={<Ban size={24} color={C.wax} strokeWidth={2.2} />}>五年引信 · 领取权燃烧表</PanelTab>
            <IconChip icon={<Coins size={24} color={C.wax} strokeWidth={2.2} />} tone={C.jadeLike2} title="5 年内：">
              债权人<Soft color={C.jadeLike2}>随时领取</Soft>（承担提存费用）
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.wax} strokeWidth={2.2} />} tone={C.flame} title="满 5 年：">
              领取权<Seal delay={190} size={18}>消灭</Seal>——扣除费用后归<Soft color={C.flame}>国家所有</Soft>
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 21, fontWeight: 900, color: C.inkSoft }}>例外：债权人对债务人有<Soft color={C.crimsonLike}>到期债务未履行</Soft> → 债务人承担费用后<Under color={C.crimsonLike} delay={220}>取回抵债</Under></div>
          </Panel>
        </Enter>
        <Enter delay={110} from="up" marker="debtor-takeback" style={{position: 'absolute', left: 0, top: 410, width: 1776, height: 358}}>
          <Panel tone={C.slateLike} watermark={<Archive size={140} color={C.slateLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 20px'}}>
            <PanelTab tone={C.slateLike} icon={<Archive size={24} color={C.wax} strokeWidth={2.2} />}>债务人取回提存物 · 两种情形</PanelTab>
            <div style={{display: 'flex', gap: 14}}>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 6, backgroundColor: C.waxDim, borderLeft: `6px solid ${C.teal2}`, padding: '10px 14px'}}>
                <span style={{fontSize: 22, fontWeight: 950, color: C.teal2 }}>情形① 5 年内书面放弃</span>
                <span style={{fontSize: 20, fontWeight: 900, color: C.ink }}>债权人向提存部门<Soft color={C.teal2}>书面表示放弃</Soft>领取权 → 债务人承担提存费用后，提存物向<Soft color={C.teal2}>债务人返还</Soft></span>
              </div>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 6, backgroundColor: C.waxDim, borderLeft: `6px solid ${C.flame}`, padding: '10px 14px'}}>
                <span style={{fontSize: 22, fontWeight: 950, color: C.flame }}>情形② 5 年后债权人有到期债务未还</span>
                <span style={{fontSize: 20, fontWeight: 900, color: C.ink }}>互负债务场景：乙欠甲钱不还 → 甲交费后<Soft color={C.flame}>取回当年提存的货</Soft>抵债（国家也别收）</span>
              </div>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft }}>口诀：一提<Soft color={C.flame}>三转</Soft>（所有权·孳息·风险）·五年<Soft color={C.teal2}>可领</Soft>·期满<Soft color={C.crimsonLike}>归国</Soft>——欠债不还·原物<Soft color={C.teal2}>取回</Soft></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const OffsetPairScene = () => {
  /* data-final-knowledge="setoff-conditions" data-final-knowledge="who-acts-rule" data-final-knowledge="limit-cards" data-final-knowledge="notice-consequence" */
  return (
    <Shell code="03" kicker="抵销 · 法定与约定" title="抵销">
      <div
        data-layout="statutory-setoff-scales-with-limits"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="setoff-needs-two-relations-same-kind-and-matured-claim,whoever-acts-weighs-by-their-own-matured-claim-only,defence-holders-and-tortfeasors-cannot-lead-the-setoff,notice-arrives-settles-both-debts-at-once-into-any-balance"
        data-focal-rule="the-setoff-scale-tips-by-whose-claim-matured-first-never-by-whose-debt-pressed-first"
        data-focal-channels="contrast,connector,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="setoff-conditions" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 250}}>
          <Panel tone={C.flame} watermark={<CircleEqual size={130} color={C.flame} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.flame} icon={<CircleEqual size={24} color={C.flamePale} strokeWidth={2.2} />}>法定抵销 · 三条件</PanelTab>
            <IconChip icon={<CircleEqual size={24} color={C.flamePale} strokeWidth={2.2} />} tone={C.flame} title="① 两个法律关系：">
              一组当事人互享债权互负债务（<Soft color={C.flame}>一个</Soft>关系＝双务合同·<Soft color={C.indigoLike}>两个</Soft>关系＝抵销结构）
            </IconChip>
            <IconChip icon={<Scale size={24} color={C.wax} strokeWidth={2.2} />} tone={C.jadeLike2} title="② 标的种类相同：">
              电脑 vs 手机<Seal delay={150} size={17}>不可抵</Seal>；两笔价金<Seal delay={180} size={17} tone={C.jadeLike2}>可抵</Seal>（同为金钱债）
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={34} from="right" marker="who-acts-rule" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 250}}>
          <Panel tone={C.indigoLike} watermark={<Scale size={130} color={C.indigoLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.indigoLike} icon={<Scale size={24} color={C.wax} strokeWidth={2.2} />}>③ 债权到期 · 谁主动看谁的债权</PanelTab>
            <IconChip icon={<Scale size={24} color={C.wax} strokeWidth={2.2} />} tone={C.indigoLike} title="到期方享有抵销权：">
              强行抵销＝剥夺对方<Soft color={C.crimsonLike}>期限利益</Soft>——乙债权 5/1 到期·甲债权 6/1 到期 → 5/15 时<Seal delay={170} size={17} tone={C.indigoLike}>乙可主动抵销</Seal>（自愿放弃自己期限利益）
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 21, fontWeight: 900, color: C.inkSoft }}>时间轴：4/20 均＜未到期 → 均无权｜5/20 甲债权到期 → 甲有权｜6/20 双到期 → 均有权</div>
          </Panel>
        </Enter>
        <Enter delay={80} from="up" marker="limit-cards" style={{position: 'absolute', left: 0, top: 266, width: 1776, height: 232}}>
          <Panel tone={C.crimsonLike} watermark={<Ban size={140} color={C.crimsonLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.crimsonLike} icon={<Ban size={24} color={C.flamePale} strokeWidth={2.2} />}>法定抵销权限制 · 三卡（谁能抢先发动）</PanelTab>
            <div style={{display: 'flex', gap: 12}}>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 5, backgroundColor: C.waxDim, borderLeft: `6px solid ${C.indigoLike}`, padding: '9px 13px'}}>
                <span style={{fontSize: 21, fontWeight: 950, color: C.indigoLike }}>有抗辩权的债务人</span>
                <span style={{fontSize: 19, fontWeight: 900, color: C.ink }}>债权人可主张抵销——但债务人提出<Soft color={C.indigoLike}>抗辩</Soft>的除外；有抗辩权者自己主张抵销<Soft color={C.jadeLike2}>不受限制</Soft>（时效债权案）</span>
              </div>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 5, backgroundColor: C.waxDim, borderLeft: `6px solid ${C.crimsonLike}`, padding: '9px 13px'}}>
                <span style={{fontSize: 21, fontWeight: 950, color: C.crimsonLike }}>人身侵权·故意重大过失财产侵权</span>
                <span style={{fontSize: 19, fontWeight: 900, color: C.ink }}>侵权人<Soft color={C.crimsonLike}>不得主张</Soft>抵销（砸车案）；被侵权人主张<Soft color={C.jadeLike2}>不受限制</Soft></span>
              </div>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 5, backgroundColor: C.waxDim, borderLeft: `6px solid ${C.flame}`, padding: '9px 13px'}}>
                <span style={{fontSize: 21, fontWeight: 950, color: C.flame }}>约定不得抵销</span>
                <span style={{fontSize: 19, fontWeight: 900, color: C.ink }}>当事人约定<Soft color={C.flame}>不得抵销</Soft>的债务 → 不得抵销</span>
              </div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={120} from="up" marker="notice-consequence" style={{position: 'absolute', left: 0, top: 514, width: 1776, height: 254}}>
          <Panel tone={C.teal2} watermark={<CircleEqual size={140} color={C.teal2} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.teal2} icon={<CircleEqual size={24} color={C.wax} strokeWidth={2.2} />}>行使与后果 · 通知到达即抵</PanelTab>
            <IconChip icon={<ScrollText size={24} color={C.wax} strokeWidth={2.2} />} tone={C.indigoLike} title="行使方式：">
              <Soft color={C.indigoLike}>通知</Soft>·抗辩·诉讼仲裁均可；<Seal delay={160} size={17}>不得附条件·附期限</Seal>
            </IconChip>
            <IconChip icon={<Coins size={24} color={C.wax} strokeWidth={2.2} />} tone={C.flame} title="后果（50 万借款案）：">
              通知<Under color={C.flame} delay={200}>到达</Under>即生效——两债在抵销范围内<Soft color={C.flame}>同时消灭</Soft>；余额单独履行（15 万价款按费 5→息 5→本 5 抵充 → 乙仍享 45 万本金）
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 21, fontWeight: 900, color: C.inkSoft }}>约定抵销：合意打破全部限制（种类·到期·时效·人身专属性）——合意<Soft color={C.indigoLike}>达成之时</Soft>消灭</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const ConfusionWaiverScene = () => {
  /* data-final-knowledge="confusion-facts" data-final-knowledge="third-party-exception" data-final-knowledge="joint-share-confusion" data-final-knowledge="waiver-layers" */
  return (
    <Shell code="04" kicker="混同 · 免除" title="混同与免除">
      <div
        data-layout="confusion-waiver-fork-with-joint-share-strip"
        data-visual-anchor="document-fork"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="confusion-merges-creditor-and-debtor-into-one-person,third-party-interests-keep-the-merged-claim-alive,joint-share-confusion-deducts-the-share-and-others-continue,waiver-is-a-unilateral-act-aimed-at-the-debtor-who-may-refuse"
        data-focal-rule="two-wicks-merge-into-one-on-confusion-unless-a-third-party-holds-the-flame"
        data-focal-channels="contrast,connector,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="confusion-facts" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 260}}>
          <Panel tone={C.flame} watermark={<Merge size={130} color={C.flame} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.flame} icon={<Merge size={24} color={C.flamePale} strokeWidth={2.2} />}>混同 · 债权债务归于一身</PanelTab>
            <IconChip icon={<Merge size={24} color={C.wax} strokeWidth={2.2} />} tone={C.flame} title="三种事实：">
              <Soft color={C.flame}>转让</Soft>（向债务人转让债权·向债权人转移债务）·<Soft color={C.indigoLike}>继承</Soft>·<Soft color={C.indigoLike}>法人合并</Soft>
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 21, fontWeight: 900, color: C.inkSoft }}>原则：混同的债权债务<Soft color={C.flame}>归于消灭</Soft>（本票案：甲乙合并为丁 → 债权债务集于丁之一身）</div>
          </Panel>
        </Enter>
        <Enter delay={34} from="right" marker="third-party-exception" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 260}}>
          <Panel tone={C.crimsonLike} watermark={<Shield size={130} color={C.crimsonLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.crimsonLike} icon={<Shield size={24} color={C.flamePale} strokeWidth={2.2} />}>例外 · 涉第三人利益</PanelTab>
            <IconChip icon={<Shield size={24} color={C.flamePale} strokeWidth={2.2} />} tone={C.crimsonLike} title="本票出质案：">
              本票债权已是丙公司<Soft color={C.crimsonLike}>质权的客体</Soft> → 混同<Seal delay={170} size={18}>并不消灭</Seal>——丙的质权仍在，可请求丁履行
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 21, fontWeight: 900, color: C.inkSoft }}>逻辑：烧的是「甲乙两根烛」——但<Soft color={C.crimsonLike}>烛台押在丙手里</Soft>，火不能灭</div>
          </Panel>
        </Enter>
        <Enter delay={80} from="up" marker="joint-share-confusion" style={{position: 'absolute', left: 0, top: 276, width: 1776, height: 212}}>
          <Panel tone={C.indigoLike} watermark={<Users size={130} color={C.indigoLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.indigoLike} icon={<Users size={24} color={C.wax} strokeWidth={2.2} />}>连带之债的混同 · 扣份额其余继续（3:3:4 继承案）</PanelTab>
            <div style={{display: 'flex', gap: 14}}>
              <IconChip icon={<Users size={24} color={C.wax} strokeWidth={2.2} />} tone={C.indigoLike} title="连带债务混同：">
                张三的债权由甲继承 → 扣除甲的 30 万份额 → 乙丙对甲负连带债务 <Chip tone={C.indigoLike} toneBg={C.waxDim}><span style={{fontSize: 20, fontWeight: 950, color: C.indigoLike }}>70 万</span></Chip>
              </IconChip>
              <IconChip icon={<Coins size={24} color={C.wax} strokeWidth={2.2} />} tone={C.jadeLike2} title="连带债权混同：">
                张三的债务由甲继承 → 扣除甲的份额 → 乙丙对甲享连带债权 <Chip tone={C.jadeLike2} toneBg={C.waxDim}><span style={{fontSize: 20, fontWeight: 950, color: C.jadeLike2 }}>70 万</span></Chip>
              </IconChip>
            </div>
            <div style={{marginTop: 'auto', fontSize: 21, fontWeight: 900, color: C.inkSoft }}>两步法：① 混同于谁身上 ② 扣除多少钱</div>
          </Panel>
        </Enter>
        <Enter delay={120} from="up" marker="waiver-layers" style={{position: 'absolute', left: 0, top: 504, width: 1776, height: 264}}>
          <Panel tone={C.teal2} watermark={<Handshake size={130} color={C.teal2} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.teal2} icon={<Handshake size={24} color={C.wax} strokeWidth={2.2} />}>免除 · 三层定性</PanelTab>
            <div style={{display: 'flex', gap: 12}}>
              <IconChip icon={<Scale size={24} color={C.wax} strokeWidth={2.2} />} tone={C.jadeLike2} title="法律行为：">
                需相应的<Soft color={C.jadeLike2}>民事行为能力</Soft>
              </IconChip>
              <IconChip icon={<Handshake size={24} color={C.wax} strokeWidth={2.2} />} tone={C.indigoLike} title="单方行为：">
                债权人<Soft color={C.indigoLike}>单方意思表示</Soft>即生效·不以债务人同意为条件——但债务人合理期间内<Soft color={C.seal}>有权拒绝</Soft>
              </IconChip>
              <IconChip icon={<Users size={24} color={C.wax} strokeWidth={2.2} />} tone={C.flame} title="特定相对人：">
                意思表示须向<Soft color={C.flame}>债务人或其代理人</Soft>作出——权利有特定对象的，放弃表示<Under color={C.flame} delay={190}>向该对象作出</Under>
              </IconChip>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft }}>口诀：混同<Soft color={C.flame}>合烛</Soft>·第三人<Soft color={C.crimsonLike}>护火</Soft>·连带<Soft color={C.indigoLike}>扣份</Soft>·免除<Soft color={C.teal2}>单方但可拒</Soft></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
