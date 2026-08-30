import type {CSSProperties, ReactNode} from 'react';
import {Ban, FileSignature, Gavel, Landmark, Network, ScrollText, Shield, UserCheck, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  azure: '#33566B',
  azureDeep: '#26414F',
  panel: '#EFE9D6',
  panelDim: '#DFD9C2',
  edge: '#5E7080',
  ink: '#233038',
  inkSoft: '#52616D',
  censor: '#B0475A',
  gold: '#C79A3E',
  pine: '#51796B',
  paper: '#F6F1E1',
} as const;

const prog = (frame: number, delay: number, span = 18) => interpolate(frame, [delay, delay + span], [0, 1], CLAMP);

const Enter = ({
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

const Shell = ({children, code, kicker, title}: {readonly children: ReactNode; readonly code: string; readonly kicker: string; readonly title: string}) => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{
      backgroundColor: C.azure,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `radial-gradient(1100px 460px at 50% -8%, rgba(199, 154, 62, 0.13), transparent 72%), repeating-linear-gradient(90deg, transparent 0 176px, rgba(38, 65, 79, 0.55) 176px 179px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.gold}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.azureDeep, borderLeft: `8px solid ${C.censor}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 44 · {code}</span>
    </div>
    <header
      style={{
        position: 'absolute',
        left: 250,
        right: 72,
        top: 34,
        height: 88,
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        alignItems: 'center',
        gap: 22,
        borderBottom: `2px solid ${C.gold}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.gold, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone, watermark}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string; readonly watermark?: ReactNode}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

const BureauTab = ({children, bar = C.censor, icon}: {readonly children: ReactNode; readonly bar?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.azureDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

const BureauStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(38, 65, 79, 0.94)', border: `2px solid ${C.gold}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Mark = ({children, color = C.censor}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

const EmbroidSeal = ({children, tone = C.censor, delay = 0}: {readonly children: ReactNode; readonly tone?: string; readonly delay?: number}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span style={{display: 'inline-block', padding: '5px 13px', border: `5px solid ${tone}`, color: tone, backgroundColor: `${tone}12`, fontSize: 22, fontWeight: 950, letterSpacing: 2, opacity: p, rotate: '-2deg'}}>{children}</span>
  );
};

const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.panelDim, borderLeft: `6px solid ${tone}`, padding: '7px 12px'}}>
    <span style={{flexShrink: 0, width: 50, height: 50, borderRadius: 10, backgroundColor: tone, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 0 rgba(0,0,0,0.18)'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.45}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const ChairScene = () => {
  /* data-final-knowledge="chair-responsibility" */
  const clauses = [
    {icon: <Landmark size={28} color={C.paper} strokeWidth={2.2} />, tone: C.pine, title: '负责对象', body: '中央军委主席对全国人大和全国人大常委会负责'},
    {icon: <UserCheck size={28} color={C.paper} strokeWidth={2.2} />, tone: C.gold, title: '提名', body: '中央军委副主席和委员由中央军委主席提名'},
    {icon: <Users size={28} color={C.paper} strokeWidth={2.2} />, tone: C.censor, title: '最后决定权', body: '中央军委的决定集体讨论作出，但主席拥有决定权'},
    {icon: <Shield size={28} color={C.paper} strokeWidth={2.2} />, tone: C.pine, title: '领导工作', body: '中央军委的其他组成人员在中央军委主席的领导下开展工作'},
    {icon: <FileSignature size={28} color={C.paper} strokeWidth={2.2} />, tone: C.gold, title: '签署生效', body: '中央军委的决定、命令必须由主席签署才能具有法律效力'},
  ] as const;
  return (
    <Shell code="01" kicker="军委主席负责制" title="主席负责制">
      <div
        data-layout="command-clause-stack"
        data-visual-anchor="main center"
        data-text-treatments="clause-chips,numbered-seals"
        data-visual-grammar="responsible-clause,nominate-clause,decide-clause,lead-clause,sign-clause"
        data-focal-rule="chairman-holds-final-say-and-signature-power"
        data-focal-channels="five-clauses,closing-strip"
        style={{position: 'absolute', inset: 0}}
      >
        {clauses.map((clause, index) => (
          <Enter key={clause.title} delay={6 + index * 18} from="left" marker={index === 0 ? 'chair-responsibility' : undefined} style={{position: 'absolute', left: 0, top: index * 74, width: 1776}}>
            <Panel tone={clause.tone} style={{height: 64, padding: '0 16px', display: 'flex', alignItems: 'center', gap: 14}}>
              <span style={{flexShrink: 0, width: 48, height: 48, borderRadius: 10, backgroundColor: clause.tone, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{clause.icon}</span>
              <span style={{flexShrink: 0, width: 150, fontSize: 24, fontWeight: 950, color: clause.tone}}>{['壹', '贰', '叁', '肆', '伍'][index]} · {clause.title}</span>
              <span style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.4}}>{clause.body}</span>
            </Panel>
          </Enter>
        ))}
        <Enter delay={130} from="up" style={{position: 'absolute', left: 0, top: 396, width: 1776}}>
          <BureauStrip style={{height: 108}}>
            <UserCheck size={42} color={C.gold} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.censor, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>一句记</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper, lineHeight: 1.55}}>
              与国务院总理负责制同款：<EmbroidSeal tone={C.gold} delay={170}>提名</EmbroidSeal> <EmbroidSeal tone={C.pine} delay={182}>领导</EmbroidSeal> <EmbroidSeal tone={C.censor} delay={194}>最后决定权</EmbroidSeal> <EmbroidSeal tone={C.gold} delay={206}>签署</EmbroidSeal>，外加「只负责不报告」
            </span>
          </BureauStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const CensorScene = () => {
  /* data-final-knowledge="dual-line-censorship" */
  return (
    <Shell code="02" kicker="监察机关（2018 新增）" title="双领导与双负责">
      <div
        data-layout="dual-line-weave"
        data-visual-anchor="main center"
        data-text-treatments="weave-plaques,cinnabar-notes"
        data-visual-grammar="dual-line-panel,boundary-panel"
        data-focal-rule="censorship-targets-persons-not-organs"
        data-focal-channels="dual-lines,object-boundary"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="dual-line-censorship" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 388}}>
          <Panel tone={C.censor} watermark={<Network size={180} color={C.censor} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 11}}>
            <BureauTab bar={C.censor} icon={<Network size={26} color={C.paper} strokeWidth={2.2} />}>双领导 · 双负责</BureauTab>
            <IconChip icon={<Network size={28} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="双领导：">
              接受<Mark color={C.pine}>最高监察机关（国家监委）</Mark>和<Mark color={C.pine}>上级监察机关</Mark>领导
            </IconChip>
            <IconChip icon={<Landmark size={28} color={C.paper} strokeWidth={2.2} />} tone={C.censor} title="双负责：">
              对<Mark color={C.censor}>同级人大及其常委会</Mark>和<Mark color={C.censor}>上一级监察机关</Mark>负责
            </IconChip>
            <IconChip icon={<UserCheck size={28} color={C.paper} strokeWidth={2.2} />} tone={C.gold} title="产生：">
              各级监察委员会主任由<Mark color={C.gold}>同级人大选举</Mark>产生
            </IconChip>
            <IconChip icon={<Gavel size={28} color={C.paper} strokeWidth={2.2} />} tone={C.azureDeep} title="管辖争议：">
              对同一监察事项有管辖争议的，由<Mark color={C.azureDeep}>国家监察委员会</Mark>确定管辖
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={30} from="right" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 388}}>
          <Panel tone={C.gold} watermark={<Ban size={180} color={C.gold} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 11}}>
            <BureauTab bar={C.gold} icon={<ScrollText size={26} color={C.paper} strokeWidth={2.2} />}>监察对象</BureauTab>
            <IconChip icon={<UserCheck size={28} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="监察人：">
              监察<Mark color={C.pine}>国家公职人员</Mark>，而非作为整体的机关
            </IconChip>
            <IconChip icon={<Ban size={28} color={C.paper} strokeWidth={2.2} />} tone={C.censor} title="可 / 不可：">
              <Mark color={C.pine}>可以</Mark>监察政府工作人员，<Mark color={C.censor}>但不监察</Mark>作为整体的政府
            </IconChip>
            <IconChip icon={<Landmark size={28} color={C.paper} strokeWidth={2.2} />} tone={C.gold} title="人大边界：">
              <Mark color={C.censor}>无权监察人大</Mark>（作为机关），但<Mark color={C.pine}>可以监察人大代表</Mark>（公职人员）
            </IconChip>
            <div style={{fontSize: 22, fontWeight: 900, color: C.inkSoft, lineHeight: 1.5}}>
              2018 年宪法修正案新增机关：重点把握组织权限；程序性问题不在宪法备考范围
            </div>
          </Panel>
        </Enter>
        <Enter delay={110} from="up" style={{position: 'absolute', left: 0, top: 412, width: 1776}}>
          <BureauStrip style={{height: 116}}>
            <Network size={42} color={C.gold} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.gold, color: C.azureDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>口诀</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper, lineHeight: 1.6}}>
              双领导（国家监委＋上级）· 双负责（同级人大人常＋上级监委）
              <br />
              监人不监机关：人大不可 · 人大代表可 · 政府不可 · 政府工作人员可
            </span>
          </BureauStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const SupervisoryOrgans = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-chair" {...SCENES.chair}>
      <ChairScene />
    </TimelineSequence>
    <TimelineSequence name="02-censor" {...SCENES.censor}>
      <CensorScene />
    </TimelineSequence>
  </AbsoluteFill>
);
