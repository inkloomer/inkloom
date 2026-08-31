import type {CSSProperties, ReactNode} from 'react';
import {Ban, Building2, Coins, Gavel, Hammer, Home, Landmark, Link2, Scale, ScrollText, Tractor, Users, Vote, Waypoints} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  paperGround: '#E2D9C3',
  panel: '#F8F4E9',
  panelDim: '#EFE8D4',
  edge: '#8F8468',
  ink: '#2B2A24',
  inkSoft: '#6E6A58',
  cinnabar: '#B03A2A',
  cinnabarPale: '#F0DEDA',
  indigo: '#2F5D8A',
  indigoPale: '#DEE6F0',
  jade: '#3E7A64',
  jadePale: '#DEEBE4',
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

export const Path = ({color = C.indigo, delay = 0, span = 20, style}: {readonly color?: string; readonly delay?: number; readonly span?: number; readonly style?: CSSProperties}) => {
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
        backgroundColor: C.paperGround,
        color: C.ink,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `repeating-linear-gradient(0deg, transparent 0 156px, rgba(43, 42, 36, 0.05) 156px 159px), repeating-linear-gradient(90deg, transparent 0 156px, rgba(43, 42, 36, 0.04) 156px 159px)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 12, background: `linear-gradient(90deg, ${C.cinnabar}, ${C.jade}, ${C.indigo})`, opacity: 0.92}} />
      <div style={{position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: `2px solid rgba(143, 132, 104, 0.55)`}} />
      <div style={{position: 'absolute', left: 60, top: 44, padding: '10px 16px', backgroundColor: C.ink, borderLeft: `8px solid ${C.cinnabar}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.panel, letterSpacing: 2}}>民法 · 第8讲 · {code}</span>
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
          borderBottom: `2px solid ${C.indigo}`,
        }}
      >
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.ink}}>{title}</h1>
        <span style={{fontSize: 22, fontWeight: 850, color: C.indigo, textAlign: 'right'}}>{kicker}</span>
      </header>
      <div style={{position: 'absolute', right: 64, bottom: 44, display: 'flex', alignItems: 'center', gap: 10, opacity: 0.85}}>
        {[0, 1, 2, 3].map((dot) => (
          <span
            key={dot}
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: dot === sceneIndex ? C.cinnabar : 'transparent',
              border: `2px solid ${C.cinnabar}`,
            }}
          />
        ))}
      </div>
      <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    </AbsoluteFill>
  );
};

export const Panel = ({children, marker, tone = C.indigo, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${tone}`, color: C.ink, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(43, 42, 36, 0.25)', ...style}}
  >
    <span style={{position: 'absolute', right: 10, top: 10, width: 26, height: 26, borderTop: `3px solid ${tone}`, borderRight: `3px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 14, bottom: 10, width: 26, height: 26, borderBottom: `3px solid ${tone}`, borderLeft: `3px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.indigo, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.ink, borderLeft: `6px solid ${tone}`, color: C.panel, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.panelDim, borderLeft: `5px solid ${tone}`, padding: '5px 12px'}}>
    <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 10, backgroundColor: tone, border: `2px solid ${C.panel}`, boxShadow: `0 0 0 2px rgba(47, 93, 138, 0.4)`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.42}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Seal = ({children, delay = 0, size = 22, tone = C.cinnabar}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

export const Under = ({children, color = C.indigo, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

export const Chip = ({children, tone = C.edge, toneBg = C.panelDim, ink = C.ink}: {readonly children: ReactNode; readonly tone?: string; readonly toneBg?: string; readonly ink?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${tone}`, backgroundColor: toneBg, padding: '5px 12px', fontSize: 22, fontWeight: 900, color: ink, whiteSpace: 'nowrap'}}>{children}</span>
);

export const LandContractScene = () => {
  /* data-final-knowledge="establishment-limb" data-final-knowledge="three-mode-table" data-final-knowledge="adjust-recover-rules" data-final-knowledge="flow-limits" */
  return (
    <Shell code="01" kicker="土地承包经营权 · 三种变动模式" title="土地承包经营权">
      <div
        data-layout="three-mode-gate-lanes-with-limits-strip"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="establishment-takes-effect-on-contract-with-defence-and-no-certificate-needed,exchange-transfer-and-five-year-operation-run-registration-opposition,mortgage-runs-registration-formation-contract-only-binds,flow-limits-cap-remaining-term-and-forbid-non-farm-use"
        data-focal-rule="three-change-modes-take-three-different-gate-routes-through-contract-and-registration"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="establishment-limb" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 100}}>
          <Panel tone={C.jade} watermark={<Tractor size={110} color={C.jade} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '9px 18px'}}>
            <PanelTab tone={C.jade} icon={<Tractor size={24} color={C.panel} strokeWidth={2.2} />}>土地承包经营权 · 用益物权</PanelTab>
            <span style={{fontSize: 22, fontWeight: 900, color: C.ink }}>客体：耕地·林地·草地及其他农用地；设立依据＝<Soft color={C.jade}>承包合同</Soft>（发包人集体经济组织 · 承包人农户）</span>
          </Panel>
        </Enter>
        <div data-final-knowledge="three-mode-table" style={{position: 'absolute', left: 0, top: 116, width: 1776, height: 306}}>
        {(
          [
            {top: 0, tone: C.jade, name: '① 设立（特殊情形）', tag: '承包合同生效', mid: '物权变动 ＋ 对抗效力 同时到手', gate: '登记发证＝纯行政管理（既非设立要件·也非对抗要件）', delay: 30},
            {top: 106, tone: C.indigo, name: '② 互换·转让＋5年以上经营权流转', tag: '合同生效', mid: '即产生物权变动 → 变更登记后获得对抗第三人效力', gate: '公示对抗', delay: 90},
            {top: 212, tone: C.cinnabar, name: '③ 抵押', tag: '合同生效', mid: '仅产生债权效力 → 办理抵押登记时才产生物权变动', gate: '公示成立', delay: 150},
          ] as const
        ).map((lane) => (
          <Enter key={lane.name} delay={lane.delay} from="left" style={{position: 'absolute', left: 0, top: lane.top, width: 1776, height: 94}}>
            <Panel tone={lane.tone} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 14, padding: '0 16px', position: 'relative', overflow: 'hidden'}}>
              <Chip tone={lane.tone} toneBg={C.panelDim}><Tractor size={22} color={lane.tone} strokeWidth={2.4} /><span style={{fontSize: 21, fontWeight: 950, color: lane.tone }}>{lane.name}</span></Chip>
              <Path color={lane.tone} delay={lane.delay + 30} span={20} style={{position: 'absolute', left: 480, top: 45, width: 240, height: 4}} />
              <Mover delay={lane.delay + 36} span={22} fromX={0} toX={240} fadeAt={lane.delay + 96} style={{position: 'absolute', left: 486, top: 22, zIndex: 2}}>
                <Chip tone={lane.tone} toneBg={C.panelDim}><span style={{fontSize: 21, fontWeight: 950, color: lane.tone }}>{lane.tag}</span></Chip>
              </Mover>
              <span style={{position: 'absolute', left: 740, top: 26, width: 560, fontSize: 21, fontWeight: 900, color: C.ink }}>{lane.mid}</span>
              <span style={{position: 'absolute', right: 16, top: 28}}><Seal delay={lane.delay + 70} size={18} tone={lane.tone}>{lane.gate}</Seal></span>
            </Panel>
          </Enter>
        ))}
        </div>
        <Enter delay={120} from="up" marker="adjust-recover-rules" style={{position: 'absolute', left: 0, top: 438, width: 1776, height: 196}}>
          <Panel tone={C.indigo} watermark={<Users size={130} color={C.indigo} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.indigo} icon={<Users size={24} color={C.panel} strokeWidth={2.2} />}>承包地的调整与收回 · 承包期内原则禁止</PanelTab>
            <div style={{display: 'flex', gap: 14}}>
              <IconChip icon={<Scale size={24} color={C.panel} strokeWidth={2.2} />} tone={C.indigo} title="调整三程序（自然灾害等特殊情形）：">
                ① 本集体成员会议<Soft color={C.indigo}>2/3 以上</Soft>成员或村民代表同意 ② 报乡镇及县级主管部门<Soft color={C.indigo}>批准</Soft> ③ 承包合同<Soft color={C.cinnabar}>没有</Soft>不得调整的约定
              </IconChip>
            </div>
            <div style={{display: 'flex', gap: 14}}>
              <IconChip icon={<Ban size={24} color={C.panel} strokeWidth={2.2} />} tone={C.cinnabar} title="进城落户红线：">
                <Seal delay={190} size={17}>绝对禁止</Seal>以退出承包权作为进城落户条件——可<Soft color={C.jade}>自愿有偿</Soft>交回或流转；交回·收回时对提高生产能力投入有权获<Soft color={C.jade}>相应补偿</Soft>
              </IconChip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={150} from="up" marker="flow-limits" style={{position: 'absolute', left: 0, top: 650, width: 1776, height: 118}}>
          <Panel tone={C.cinnabar} watermark={<Ban size={110} color={C.cinnabar} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '9px 18px'}}>
            <PanelTab tone={C.cinnabar} icon={<Ban size={24} color={C.panel} strokeWidth={2.2} />}>流转两大核心限制</PanelTab>
            <Chip tone={C.cinnabar} toneBg={C.cinnabarPale}><span style={{fontSize: 22, fontWeight: 950, color: C.cinnabar }}>① 期限：不得超过承包期的剩余期限</span></Chip>
            <Chip tone={C.cinnabar} toneBg={C.cinnabarPale}><span style={{fontSize: 22, fontWeight: 950, color: C.cinnabar }}>② 用途：未经批准不得用于非农建设</span></Chip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const ConstructionUseScene = () => {
  /* data-final-knowledge="layered-limb" data-final-knowledge="no-harm-rule" data-final-knowledge="allocation-limb" data-final-knowledge="grant-limb" */
  return (
    <Shell code="02" kicker="建设用地使用权 · 分层与一级市场" title="建设用地使用权">
      <div
        data-layout="layered-bands-with-allocation-split"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="surface-sky-and-underground-are-separate-state-lands,new-layers-must-not-harm-established-use-rights,allocation-is-administrative-approval-for-public-interest,grant-is-a-civil-contract-paid-by-transfer-fee"
        data-focal-rule="three-land-layers-stack-as-separate-lots-while-allocation-and-grant-split-the-first-market"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="layered-limb" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 236}}>
          <Panel tone={C.jade} watermark={<Building2 size={130} color={C.jade} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.jade} icon={<Building2 size={24} color={C.panel} strokeWidth={2.2} />}>分层设立 · 同一地块三层国有之物</PanelTab>
            <div style={{display: 'flex', flexDirection: 'column', gap: 6}}>
              <Chip tone={C.indigo} toneBg={C.indigoPale}><span style={{fontSize: 21, fontWeight: 950, color: C.indigo }}>地上层 · 空中利用</span></Chip>
              <Chip tone={C.jade} toneBg={C.jadePale}><span style={{fontSize: 21, fontWeight: 950, color: C.jade }}>地表层 · 建造建筑物构筑物</span></Chip>
              <Chip tone={C.cinnabar} toneBg={C.cinnabarPale}><span style={{fontSize: 21, fontWeight: 950, color: C.cinnabar }}>地下层 · 地下利用</span></Chip>
            </div>
            <div data-final-knowledge="no-harm-rule" style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.ink }}>可为不同主体<Soft color={C.jade}>分层设立</Soft>——新设立的建设用地使用权，<Under color={C.cinnabar} delay={130}>不得损害</Under>已设立的用地使用权</div>
          </Panel>
        </Enter>
        <Enter delay={40} from="left" marker="allocation-limb" style={{position: 'absolute', left: 0, top: 252, width: 866, height: 516}}>
          <Panel tone={C.slateLike} watermark={<Landmark size={150} color={C.slateLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 20px'}}>
            <PanelTab tone={C.slateLike} icon={<Landmark size={24} color={C.panel} strokeWidth={2.2} />}>划拨 · 行政审批取得</PanelTab>
            <IconChip icon={<Landmark size={24} color={C.panel} strokeWidth={2.2} />} tone={C.slateLike} title="行为性质：">
              通过<Soft color={C.slateLike}>行政审批</Soft>设立——「优惠取得」方式
            </IconChip>
            <IconChip icon={<Scale size={24} color={C.panel} strokeWidth={2.2} />} tone={C.indigo} title="适用条件：">
              必须为<Soft color={C.indigo}>公共利益</Soft>的用地需要，经<Soft color={C.indigo}>县级以上</Soft>政府依法批准
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft }}>权利取得标志：办理<Under color={C.slateLike} delay={160}>使用权登记</Under></div>
          </Panel>
        </Enter>
        <Enter delay={70} from="right" marker="grant-limb" style={{position: 'absolute', left: 910, top: 252, width: 866, height: 516}}>
          <Panel tone={C.cinnabar} watermark={<Coins size={150} color={C.cinnabar} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 20px'}}>
            <PanelTab tone={C.cinnabar} icon={<Coins size={24} color={C.panel} strokeWidth={2.2} />}>出让 · 民事合同取得</PanelTab>
            <IconChip icon={<FileSignature size={24} color={C.panel} strokeWidth={2.2} />} tone={C.cinnabar} title="行为性质：">
              通过<Soft color={C.cinnabar}>民事合同</Soft>设立建设用地使用权
            </IconChip>
            <IconChip icon={<Coins size={24} color={C.panel} strokeWidth={2.2} />} tone={C.jade} title="核心对价：">
              使用权人向国家支付<Soft color={C.jade}>土地出让金</Soft>
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft }}>划拨与出让共同构成建设用地使用权的<Soft color={C.indigo}>一级市场</Soft>取得</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const ResidenceRightScene = () => {
  /* data-final-knowledge="residence-definition" data-final-knowledge="formation-gate" data-final-knowledge="will-reference" data-final-knowledge="disposal-walls" */
  return (
    <Shell code="03" kicker="居住权 · 公示成立" title="居住权">
      <div
        data-layout="birth-gate-with-bounce-wall"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="residence-right-is-possession-and-use-for-living-needs,contract-gives-claim-while-registration-establishes-the-right,will-based-establishment-follows-the-contract-rules,transfer-inheritance-and-letting-are-void-unless-agreed"
        data-focal-rule="the-residence-chip-is-born-only-at-the-registration-gate-while-transfer-chips-bounce-off-its-wall"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="residence-definition" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 104}}>
          <Panel tone={C.jade} watermark={<Home size={110} color={C.jade} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '9px 18px'}}>
            <PanelTab tone={C.jade} icon={<Home size={24} color={C.panel} strokeWidth={2.2} />}>居住权 · 定义</PanelTab>
            <span style={{fontSize: 23, fontWeight: 900, color: C.ink }}>一方对他人所有的住宅享有<Soft color={C.jade}>占有·使用</Soft>，旨在满足<Soft color={C.indigo}>生活居住</Soft>需要的<Under color={C.jade} delay={120}>用益物权</Under></span>
          </Panel>
        </Enter>
        <Enter delay={36} from="left" marker="formation-gate" style={{position: 'absolute', left: 0, top: 120, width: 1776, height: 224}}>
          <Panel tone={C.indigo} watermark={<ScrollText size={130} color={C.indigo} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.indigo} icon={<ScrollText size={24} color={C.panel} strokeWidth={2.2} />}>设立 · 公示成立（依合同·依遗嘱）</PanelTab>
            <div style={{position: 'relative', height: 104}}>
              <div style={{position: 'absolute', left: 0, top: 26}}>
                <Chip tone={C.indigo} toneBg={C.indigoPale}><span style={{fontSize: 22, fontWeight: 950, color: C.indigo }}>居住权合同生效</span></Chip>
              </div>
              <span style={{position: 'absolute', left: 230, top: 10, width: 330, fontSize: 20, fontWeight: 900, color: C.inkSoft }}>仅生债权效力：请求交付住宅＋办理登记手续</span>
              <Path color={C.indigo} delay={110} span={20} style={{position: 'absolute', left: 240, top: 58, width: 240, height: 4}} />
              <Mover delay={116} span={22} fromX={0} toX={240} fadeAt={182} style={{position: 'absolute', left: 20, top: 26, zIndex: 2}}>
                <Chip tone={C.indigo} toneBg={C.indigoPale}><span style={{fontSize: 22, fontWeight: 950, color: C.indigo }}>居住权合同生效</span></Chip>
              </Mover>
              <div style={{position: 'absolute', left: 490, top: 12, border: `3px solid ${C.jade}`, borderRadius: 12, padding: '9px 16px', backgroundColor: C.panel, boxShadow: '0 0 16px rgba(62, 122, 100, 0.35)'}}>
                <span style={{fontSize: 22, fontWeight: 950, color: C.jade }}>登记完成 → 居住权正式设立</span>
              </div>
              <div style={{position: 'absolute', left: 940, top: 16}}><Seal delay={180} size={20} tone={C.jade}>物权变动 ✓</Seal></div>
              <div style={{position: 'absolute', right: 0, top: 6, width: 360}}>
                <IconChip icon={<ScrollText size={24} color={C.panel} strokeWidth={2.2} />} tone={C.slateLike} title="遗嘱设立：">
                  <Soft color={C.slateLike}>参照适用</Soft>合同设立规则
                </IconChip>
              </div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={80} from="up" marker="disposal-walls" style={{position: 'absolute', left: 0, top: 360, width: 1776, height: 408}}>
          <Panel tone={C.cinnabar} watermark={<Ban size={150} color={C.cinnabar} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 20px'}}>
            <PanelTab tone={C.cinnabar} icon={<Ban size={24} color={C.panel} strokeWidth={2.2} />}>处分限制 · 三堵墙（人役权）</PanelTab>
            <div style={{display: 'flex', gap: 14}}>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 8, backgroundColor: C.panelDim, borderLeft: `6px solid ${C.cinnabar}`, padding: '10px 14px'}}>
                <span style={{fontSize: 22, fontWeight: 950, color: C.cinnabar }}>墙① 转让 · 墙② 继承</span>
                <span style={{fontSize: 21, fontWeight: 900, color: C.ink }}>居住权<Soft color={C.cinnabar}>不得转让·不得继承</Soft>；擅自转让·继承的 → <Seal delay={180} size={17}>无效</Seal></span>
              </div>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 8, backgroundColor: C.panelDim, borderLeft: `6px solid ${C.indigo}`, padding: '10px 14px'}}>
                <span style={{fontSize: 22, fontWeight: 950, color: C.indigo }}>墙③ 出租（原则禁止）</span>
                <span style={{fontSize: 21, fontWeight: 900, color: C.ink }}>设立居住权的住宅<Soft color={C.cinnabar}>不得出租</Soft>，否则租赁<Seal delay={210} size={17}>无效</Seal>；<Soft color={C.jade}>当事人另有约定</Soft>的除外</span>
              </div>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft }}>口诀：登记<Soft color={C.jade}>才出生</Soft>·转让继承<Soft color={C.cinnabar}>必无效</Soft>·出租原则上<Soft color={C.cinnabar}>关门</Soft>——约定可开门</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const ServitudeForkScene = () => {
  /* data-final-knowledge="servitude-meaning" data-final-knowledge="opposition-formation" data-final-knowledge="transfer-rules" data-final-knowledge="neighbouring-distinction" */
  return (
    <Shell code="04" kicker="地役权 · 需役地与供役地" title="地役权">
      <div
        data-layout="need-serving-fork-with-distinction-strip"
        data-visual-anchor="document-fork"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="servitude-is-a-use-right-on-anothers-land-for-ones-land-convenience,contract-effect-moves-the-right-while-registration-defends-it,need-land-transfer-carries-servitude-registered-or-not,basic-needs-are-neighbouring-while-high-needs-need-a-servitude"
        data-focal-rule="the-servitude-claim-follows-the-need-land-wherever-it-goes-but-binds-serving-buyers-only-when-registered"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="servitude-meaning" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 108}}>
          <Panel tone={C.jade} watermark={<Waypoints size={110} color={C.jade} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '9px 18px'}}>
            <PanelTab tone={C.jade} icon={<Waypoints size={24} color={C.panel} strokeWidth={2.2} />}>地役权 · 概念（双重身份）</PanelTab>
            <span style={{fontSize: 22, fontWeight: 900, color: C.ink }}>一方为土地支配之<Soft color={C.jade}>便利</Soft>而支配对方土地的<Under color={C.jade} delay={110}>用益物权</Under>——自己的地＝<Soft color={C.indigo}>需役地</Soft>·对方的地＝<Soft color={C.cinnabar}>供役地</Soft></span>
          </Panel>
        </Enter>
        <Enter delay={36} from="left" marker="opposition-formation" style={{position: 'absolute', left: 0, top: 124, width: 866, height: 196}}>
          <Panel tone={C.indigo} watermark={<ScrollText size={130} color={C.indigo} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.indigo} icon={<ScrollText size={24} color={C.panel} strokeWidth={2.2} />}>设立 · 公示对抗</PanelTab>
            <IconChip icon={<FileSignature size={24} color={C.panel} strokeWidth={2.2} />} tone={C.indigo} title="合同效力：">
              合同<Soft color={C.indigo}>生效时</Soft>即产生地役权设立的<Soft color={C.indigo}>物权变动</Soft>效力
            </IconChip>
            <IconChip icon={<ScrollText size={24} color={C.panel} strokeWidth={2.2} />} tone={C.jade} title="登记效力：">
              获得对抗<Soft color={C.jade}>第三人</Soft>的效力
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={66} from="right" style={{position: 'absolute', left: 910, top: 124, width: 866, height: 196}}>
          <Panel tone={C.slateLike} watermark={<Link2 size={130} color={C.slateLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.slateLike} icon={<Link2 size={24} color={C.panel} strokeWidth={2.2} />}>从属性 · 不可分性</PanelTab>
            <IconChip icon={<Link2 size={24} color={C.panel} strokeWidth={2.2} />} tone={C.indigo} title="从属性：">
              需役地物权＝<Soft color={C.indigo}>主权利</Soft>·地役权＝<Soft color={C.indigo}>从权利</Soft>——跟随转移
            </IconChip>
            <IconChip icon={<Users size={24} color={C.panel} strokeWidth={2.2} />} tone={C.jade} title="不可分性：">
              需役地为多人<Soft color={C.jade}>共有</Soft>时，每人享有<Soft color={C.jade}>完整</Soft>的地役权
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={100} from="up" marker="transfer-rules" style={{position: 'absolute', left: 0, top: 336, width: 1776, height: 220}}>
          <Panel tone={C.cinnabar} watermark={<Waypoints size={140} color={C.cinnabar} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.cinnabar} icon={<Waypoints size={24} color={C.panel} strokeWidth={2.2} />}>合同订立后的土地处分 · A 地甲／B 地乙通车案</PanelTab>
            <div style={{display: 'flex', gap: 14}}>
              <IconChip icon={<Waypoints size={24} color={C.panel} strokeWidth={2.2} />} tone={C.indigo} title="需役地（A）转让给丙：">
                地役权<Soft color={C.indigo}>随之转移</Soft>——且<Seal delay={170} size={17} tone={C.indigo}>不问是否登记</Seal>（丙可在 B 地通车）
              </IconChip>
              <IconChip icon={<Ban size={24} color={C.panel} strokeWidth={2.2} />} tone={C.cinnabar} title="供役地（B）转让给丁：">
                已<Soft color={C.jade}>登记</Soft>→ 义务<Soft color={C.jade}>随之转让</Soft>，甲可继续通车；<Soft color={C.cinnabar}>未登记</Soft>→ 善意受让人丁<Seal delay={210} size={17}>无需承受</Seal>
              </IconChip>
            </div>
            <div style={{marginTop: 'auto', fontSize: 21, fontWeight: 900, color: C.inkSoft }}>对照：需役地走「从权利随主」·供役地看「登记对抗善意第三人」</div>
          </Panel>
        </Enter>
        <Enter delay={140} from="up" marker="neighbouring-distinction" style={{position: 'absolute', left: 0, top: 572, width: 1776, height: 196}}>
          <Panel tone={C.slateLike} watermark={<Scale size={120} color={C.slateLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 14, padding: '9px 18px'}}>
            <PanelTab tone={C.slateLike} icon={<Scale size={24} color={C.panel} strokeWidth={2.2} />}>与相邻关系的区别 · 三问定性地</PanelTab>
            <div style={{display: 'flex', flexDirection: 'column', gap: 5, fontSize: 21, fontWeight: 900, color: C.ink }}>
              <span>① 不过 B 地就<Soft color={C.jade}>无法进出</Soft> A 地 → <Soft color={C.jade}>相邻关系</Soft>直接通行，但须对乙<Soft color={C.jade}>影响最小</Soft></span>
              <span>② 只是<Soft color={C.cinnabar}>不方便</Soft> → 高级需求，需与乙订立<Soft color={C.indigo}>地役权合同</Soft>　③ 在 B 地<Soft color={C.cinnabar}>修路</Soft>修固定设施 → 认定为<Soft color={C.indigo}>地役权</Soft></span>
              <span style={{color: C.inkSoft }}>定性：地役权＝「<Soft color={C.indigo}>他人土地上的用益物权</Soft>」（合意·高级需求）·相邻关系＝「<Soft color={C.jade}>自己土地上权利的适当扩张</Soft>」（法定·基本需求）</span>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
