import type {CSSProperties, ReactNode} from 'react';
import {Ban, CalendarClock, FileText, Gavel, GitFork, Hourglass, Lock, Play, RefreshCw, Scale, ScrollText, Stamp} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  iron: '#232830',
  ironMid: '#333A45',
  gilt: '#B48A2F',
  giltPale: '#EAD9A8',
  moon: '#F1F2EE',
  moonDim: '#E2E4DC',
  moonEdge: '#B4B8AC',
  teal: '#2E6E6A',
  tealPale: '#D3E4E2',
  indigo: '#3F568C',
  moss: '#5E7D54',
  rust: '#A65134',
  rustPale: '#EDD3C4',
  wine: '#8E3049',
  winePale: '#EDD0D8',
  ink: '#262A30',
  inkSoft: '#6D747E',
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

export const Shell = ({children, code, kicker, title}: {readonly children: ReactNode; readonly code: string; readonly kicker: string; readonly title: string}) => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{
      backgroundColor: C.iron,
      color: C.moon,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(90deg, transparent 0 172px, rgba(0, 0, 0, 0.13) 172px 175px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.gilt}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.giltPale}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.ironMid, borderLeft: `8px solid ${C.gilt}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.moon, letterSpacing: 2}}>民法 · 第3讲 · {code}</span>
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
        borderBottom: `2px solid ${C.gilt}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.moon}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.giltPale, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

export const Panel = ({children, marker, tone = C.gilt, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.moon, border: `2px solid ${C.moonEdge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: `8px solid ${tone}`, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.1, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.gilt, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '4px 14px', backgroundColor: C.ironMid, borderLeft: `6px solid ${tone}`, color: C.moon, fontSize: 21, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.moonDim, borderLeft: `6px solid ${tone}`, padding: '5px 12px'}}>
    <span style={{flexShrink: 0, width: 46, height: 46, borderRadius: 9, backgroundColor: tone, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 0 rgba(0,0,0,0.18)'}}>{icon}</span>
    <span style={{fontSize: 21, fontWeight: 880, color: C.ink, lineHeight: 1.42}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Seal = ({children, delay = 0, size = 24, tone = C.wine}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '7px 15px',
        border: `5px solid ${tone}`,
        color: tone,
        backgroundColor: `${tone}12`,
        fontSize: size,
        fontWeight: 950,
        letterSpacing: 2,
        opacity: p,
        scale: 0.86 + p * 0.14,
        rotate: '-2deg',
      }}
    >
      {children}
    </span>
  );
};

export const Under = ({children, color = C.rust, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

export const Chip = ({children, tone = C.moonEdge, toneBg = C.moonDim, ink = C.ink}: {readonly children: ReactNode; readonly tone?: string; readonly toneBg?: string; readonly ink?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${tone}`, backgroundColor: toneBg, padding: '5px 12px', fontSize: 21, fontWeight: 900, color: ink, whiteSpace: 'nowrap'}}>{children}</span>
);

export const ValidEffectiveScene = () => {
  /* data-final-knowledge="validity-vs-effectiveness" data-final-knowledge="formation-effect-rule" data-final-knowledge="four-exceptions" data-final-knowledge="unformed-binding-rule" */
  return (
    <Shell code="01" kicker="有效 · 生效" title="有效与生效">
      <div
        data-layout="dual-lamp-activation-frame"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="validity-means-lawful-and-effectiveness-means-claimable-and-performable,effective-acts-take-effect-at-formation-as-the-principle,four-situations-delay-effectiveness-conditions-initial-term-approval-and-will,unformed-acts-still-bind-and-forbid-arbitrary-retraction"
        data-focal-rule="lawful-valid-then-claimable-performable-unless-four-delays-intervene"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="validity-vs-effectiveness" style={{position: 'absolute', left: 40, top: 0, width: 1696, height: 190}}>
          <Panel tone={C.gilt} watermark={<Scale size={150} color={C.gilt} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 20px'}}>
            <PanelTab tone={C.gilt} icon={<Scale size={24} color={C.giltPale} strokeWidth={2.2} />}>有效与生效的关系</PanelTab>
            <IconChip icon={<Scale size={28} color={C.moon} strokeWidth={2.2} />} tone={C.teal} title="有效：">
              民事法律行为<Soft color={C.teal}>合法</Soft>——即「合法有效」（true / false）
            </IconChip>
            <IconChip icon={<Play size={28} color={C.moon} strokeWidth={2.2} />} tone={C.rust} title="生效：">
              有效的民事法律行为——权利可以<Under color={C.rust} delay={90}>主张</Under>，义务需要<Under color={C.rust} delay={120}>履行</Under>（on / off）
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={36} from="left" marker="formation-effect-rule" style={{position: 'absolute', left: 40, top: 206, width: 832, height: 290}}>
          <Panel tone={C.teal} watermark={<Play size={160} color={C.teal} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.teal} icon={<Play size={24} color={C.giltPale} strokeWidth={2.2} />}>生效原则 · 排除法</PanelTab>
            <IconChip icon={<Play size={26} color={C.moon} strokeWidth={2.2} />} tone={C.teal} title="原则：">
              有效的民事法律行为，<Under color={C.teal} delay={80}>成立时</Under>即告<Soft color={C.teal}>生效</Soft>
            </IconChip>
            <IconChip icon={<FileText size={26} color={C.moon} strokeWidth={2.2} />} tone={C.teal} title="房屋买卖案：">
              签字但未交付·未过户 → 不属四种情形 → <Seal delay={140} size={18} tone={C.teal}>仍生效 ✓</Seal>
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.moon} strokeWidth={2.2} />} tone={C.gilt} title="排除法记忆：">
              有四情形 → 「未生效」；无四情形 → 一概「成立即生效」
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={60} from="right" marker="four-exceptions" style={{position: 'absolute', left: 904, top: 206, width: 832, height: 312}}>
          <Panel tone={C.rust} watermark={<Hourglass size={160} color={C.rust} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.rust} icon={<Hourglass size={24} color={C.giltPale} strokeWidth={2.2} />}>生效例外 · 四种「未生效」情形</PanelTab>
            <IconChip icon={<GitFork size={26} color={C.moon} strokeWidth={2.2} />} tone={C.rust} title="① 附延缓条件：">
              条件成就前，行为<Soft color={C.rust}>未生效</Soft>
            </IconChip>
            <IconChip icon={<CalendarClock size={26} color={C.moon} strokeWidth={2.2} />} tone={C.rust} title="② 附始期：">
              期限届至前，行为<Soft color={C.rust}>未生效</Soft>
            </IconChip>
            <IconChip icon={<Stamp size={26} color={C.moon} strokeWidth={2.2} />} tone={C.rust} title="③ 依法需审批：">
              批准前，合同<Soft color={C.rust}>未生效</Soft>
            </IconChip>
            <IconChip icon={<ScrollText size={26} color={C.moon} strokeWidth={2.2} />} tone={C.rust} title="④ 遗嘱行为：">
              遗嘱人死亡时才生效
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={110} from="up" marker="unformed-binding-rule" style={{position: 'absolute', left: 40, top: 528, width: 1696, height: 240}}>
          <Panel tone={C.wine} watermark={<Lock size={150} color={C.wine} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 20px'}}>
            <PanelTab tone={C.wine} icon={<Lock size={24} color={C.giltPale} strokeWidth={2.2} />}>「未生效」的法律意义 · 逻辑链条</PanelTab>
            <IconChip icon={<Ban size={26} color={C.moon} strokeWidth={2.2} />} tone={C.rust} title="履约意义：">
              权利不能<Soft color={C.rust}>主张</Soft> · 义务无需<Soft color={C.rust}>履行</Soft>
            </IconChip>
            <IconChip icon={<Lock size={26} color={C.moon} strokeWidth={2.2} />} tone={C.wine} title="约束力：">
              已<Soft color={C.indigo}>成立</Soft>仍有法律约束力 → 不得随意<Under color={C.wine} delay={120}>反悔</Under>（不得擅自撤销·解除）
            </IconChip>
            <IconChip icon={<GitFork size={26} color={C.moon} strokeWidth={2.2} />} tone={C.teal} title="逻辑链条：">
              合法 → 有效 → 生效（权利可主张·义务需履行）／ 未生效（不得主张·无需履行）
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const ApprovalContractScene = () => {
  /* data-final-knowledge="approval-pending-rule" data-final-knowledge="standalone-approval-clause" data-final-knowledge="final-refusal-forks" data-final-knowledge="election-of-claims" */
  return (
    <Shell code="02" kicker="依法需要审批的合同" title="依法需要审批的合同">
      <div
        data-layout="approval-desk-with-culprit-lanes"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,stamp,soft-highlight,thin-underline"
        data-visual-grammar="approval-pending-contracts-forbid-performance-and-arbitrary-exit,the-approval-clause-takes-effect-alone-with-its-own-liability,final-refusal-opens-rescission-or-culprit-contracting-claims,improper-approval-performance-lets-the-counterparty-elect-claims"
        data-focal-rule="approval-pending-binds-hands-but-the-approval-clause-runs-alone"
        data-focal-channels="connector,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="approval-pending-rule" style={{position: 'absolute', left: 40, top: 0, width: 832, height: 254}}>
          <Panel tone={C.rust} watermark={<Stamp size={150} color={C.rust} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.rust} icon={<Stamp size={24} color={C.giltPale} strokeWidth={2.2} />}>批准前 · 未生效</PanelTab>
            <IconChip icon={<Hourglass size={26} color={C.moon} strokeWidth={2.2} />} tone={C.rust} title="状态：">
              批准前，依法需审批的合同处于<Soft color={C.rust}>未生效</Soft>状态
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.moon} strokeWidth={2.2} />} tone={C.wine} title="限制①：">
              不得请求履行合同约定的<Under color={C.wine} delay={90}>主要义务</Under>
            </IconChip>
            <IconChip icon={<Lock size={26} color={C.moon} strokeWidth={2.2} />} tone={C.wine} title="限制②：">
              不得随意<Under color={C.wine} delay={120}>解除</Under>或<Under color={C.wine} delay={140}>撤销</Under>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={28} from="right" marker="standalone-approval-clause" style={{position: 'absolute', left: 904, top: 0, width: 832, height: 254}}>
          <Panel tone={C.teal} watermark={<RefreshCw size={150} color={C.teal} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.teal} icon={<RefreshCw size={24} color={C.giltPale} strokeWidth={2.2} />}>报批条款的独立性</PanelTab>
            <IconChip icon={<FileText size={26} color={C.moon} strokeWidth={2.2} />} tone={C.teal} title="单独生效：">
              合同未生效，但<Under color={C.teal} delay={90}>报批义务</Under>及其<Soft color={C.teal}>违约责任条款</Soft>单独生效
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.moon} strokeWidth={2.2} />} tone={C.indigo} title="不履行报批义务：">
              对方可追究「报批义务条款」的<Soft color={C.indigo}>违约责任</Soft>
            </IconChip>
            <IconChip icon={<Gavel size={26} color={C.moon} strokeWidth={2.2} />} tone={C.wine} title="判决履行仍不履行：">
              追究其「合同」上的<Seal delay={140} size={18}>违约责任</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={80} from="up" marker="final-refusal-forks" style={{position: 'absolute', left: 40, top: 270, width: 1696, height: 300}}>
          <Panel tone={C.gilt} watermark={<Ban size={160} color={C.gilt} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 20px'}}>
            <PanelTab tone={C.gilt} icon={<Ban size={24} color={C.giltPale} strokeWidth={2.2} />}>批准机关最终未予批准</PanelTab>
            <div style={{flex: 1, display: 'flex', gap: 14}}>
              <IconChip icon={<FileText size={28} color={C.moon} strokeWidth={2.2} />} tone={C.rust} title="一般情况下：">
                「合同」构成<Under color={C.rust} delay={120}>履行不能</Under> → 当事人有权<Seal delay={170} size={18} tone={C.rust}>解除合同</Seal>
              </IconChip>
              <div data-final-knowledge="election-of-claims" style={{flex: 1}}>
                <IconChip icon={<Scale size={28} color={C.moon} strokeWidth={2.2} />} tone={C.indigo} title="报批义务履行不当所致：">
                  对方权利<Soft color={C.indigo}>竞合</Soft>——①「报批义务条款」上的违约责任 ②「合同」上的<Under color={C.indigo} delay={170}>缔约过失责任</Under>
                </IconChip>
              </div>
            </div>
            <div style={{marginTop: 'auto', fontSize: 19.5, fontWeight: 900, color: C.inkSoft}}>记忆：不批＝履行不能可解除；履行不当＝违约与缔约过失二选一</div>
          </Panel>
        </Enter>
        <Enter delay={140} from="up" style={{position: 'absolute', left: 40, top: 586, width: 1696, height: 182}}>
          <Panel tone={C.teal} watermark={<Stamp size={140} color={C.teal} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 20px'}}>
            <PanelTab tone={C.teal} icon={<Stamp size={22} color={C.giltPale} strokeWidth={2.2} />}>总结</PanelTab>
            <IconChip icon={<Lock size={26} color={C.moon} strokeWidth={2.2} />} tone={C.rust} title="未生效 ≠ 没约束：">
              不得请求履行主要义务 · 不得随意解除撤销 —— 但报批条款<Soft color={C.rust}>单独生效</Soft>
            </IconChip>
            <IconChip icon={<RefreshCw size={26} color={C.moon} strokeWidth={2.2} />} tone={C.indigo} title="不批准两种去向：">
              一般＝<Soft color={C.indigo}>履行不能可解除</Soft> · 履行不当＝<Soft color={C.indigo}>违约责任 / 缔约过失责任</Soft> 竞合
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
