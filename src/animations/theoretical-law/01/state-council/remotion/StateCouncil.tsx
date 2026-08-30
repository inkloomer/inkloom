import type {CSSProperties, ReactNode} from 'react';
import {Award, BookOpen, Building2, Crown, GitBranch, Globe, Handshake, Medal, ScrollText, UserCheck, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  rosewood: '#4A2C24',
  rosewoodDeep: '#371F19',
  panel: '#F2E9D8',
  panelDim: '#E4D8C1',
  edge: '#7C5A46',
  ink: '#2B1D16',
  inkSoft: '#63503F',
  cinnabar: '#B03A2A',
  brass: '#C08A2E',
  celadon: '#5E8270',
  paper: '#F6F0E0',
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
      backgroundColor: C.rosewood,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `radial-gradient(1100px 460px at 50% -8%, rgba(192, 138, 46, 0.14), transparent 70%), repeating-linear-gradient(0deg, transparent 0 92px, rgba(55, 31, 25, 0.55) 92px 95px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.brass}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.rosewoodDeep, borderLeft: `8px solid ${C.cinnabar}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 41 · {code}</span>
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
        borderBottom: `2px solid ${C.brass}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.brass, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone, watermark}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string; readonly watermark?: ReactNode}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.brass}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.brass}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.brass}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.brass}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

const DeskTab = ({children, bar = C.cinnabar, icon}: {readonly children: ReactNode; readonly bar?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.rosewoodDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

const DeskStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(55, 31, 25, 0.94)', border: `2px solid ${C.brass}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Mark = ({children, color = C.cinnabar}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

const RedSeal = ({children, tone = C.cinnabar, delay = 0}: {readonly children: ReactNode; readonly tone?: string; readonly delay?: number}) => {
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

export const HonorsScene = () => {
  /* data-final-knowledge="three-honor-types" data-final-knowledge="honor-subjects" */
  const medals = [
    {name: '共和国勋章', tone: C.cinnabar, icon: <Medal size={34} color={C.paper} strokeWidth={2.2} />, body: '授予在中国特色社会主义建设和保卫国家中作出巨大贡献、建立卓越功勋的杰出人士'},
    {name: '友谊勋章', tone: C.brass, icon: <Globe size={34} color={C.paper} strokeWidth={2.2} />, body: '授予在我国社会主义现代化建设和促进中外交流合作、维护世界和平中作出杰出贡献的外国人'},
    {name: '国家荣誉称号', tone: C.celadon, icon: <Award size={34} color={C.paper} strokeWidth={2.2} />, body: '命名一般冠以「人民」，也可有其他方式；授予经济·社会·国防·外交·教育·科技·文化·卫生·体育等领域作出重大贡献、享有崇高声誉的杰出人士'},
  ] as const;
  return (
    <Shell code="01" kicker="国家勋章与主体" title="三枚勋章的授予规矩">
      <div
        data-layout="trio-medal-shelf"
        data-visual-anchor="main center"
        data-text-treatments="medal-plaques,cinnabar-stamps"
        data-visual-grammar="republic-medal,friendship-medal,honorific-title"
        data-focal-rule="three-honor-types-and-decision-proposal-subjects"
        data-focal-channels="medal-headings,subject-strip"
        style={{position: 'absolute', inset: 0}}
      >
        {medals.map((medal, index) => (
          <Enter key={medal.name} delay={6 + index * 20} from="up" marker={index === 0 ? 'three-honor-types' : undefined} style={{position: 'absolute', left: 20 + index * 592, top: 0, width: 568}}>
            <Panel tone={medal.tone} watermark={index === 2 ? <Award size={150} color={C.celadon} strokeWidth={1.6} /> : undefined} style={{height: 320, padding: '16px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14}}>
              <span style={{width: 92, height: 92, borderRadius: 46, backgroundColor: medal.tone, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `4px solid ${C.brass}`, boxShadow: '0 3px 0 rgba(0,0,0,0.22)'}}>{medal.icon}</span>
              <span style={{fontSize: 30, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>{medal.name}</span>
              <div style={{width: 110, height: 3, backgroundColor: medal.tone}} />
              <div style={{fontSize: 22, fontWeight: 870, color: C.ink, lineHeight: 1.55, textAlign: 'center'}}>{medal.body}</div>
            </Panel>
          </Enter>
        ))}
        <Enter delay={90} from="left" marker="honor-subjects" style={{position: 'absolute', left: 0, top: 344, width: 1776}}>
          <Panel tone={C.brass} watermark={<ScrollText size={150} color={C.brass} strokeWidth={1.6} />} style={{height: 168, padding: '12px 22px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <DeskTab bar={C.brass} icon={<ScrollText size={26} color={C.paper} strokeWidth={2.2} />}>谁来定 · 谁来提</DeskTab>
            <IconChip icon={<UserCheck size={28} color={C.paper} strokeWidth={2.2} />} tone={C.cinnabar} title="决定主体：">
              共和国勋章与国家荣誉称号 —— <Mark color={C.cinnabar}>全国人大常委会决定 · 国家主席宣告</Mark>；友谊勋章 —— 国家主席<Mark color={C.brass}>可以直接授予</Mark>
            </IconChip>
            <IconChip icon={<Handshake size={28} color={C.paper} strokeWidth={2.2} />} tone={C.celadon} title="提案主体：">
              <Mark color={C.celadon}>国务院 · 中央军委 · 全国人大常委会委员长会议</Mark>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={140} from="up" style={{position: 'absolute', left: 0, top: 536, width: 1776}}>
          <DeskStrip style={{height: 104}}>
            <Medal size={40} color={C.brass} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.cinnabar, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>口诀</span>
            <span style={{fontSize: 25, fontWeight: 950, color: C.paper, letterSpacing: 2}}>
              两央委员长会议提 · 常委会定 · 友谊勋章主席发
            </span>
          </DeskStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const OrganizationScene = () => {
  /* data-final-knowledge="chief-responsibility" data-final-knowledge="org-law-2024" */
  return (
    <Shell code="02" kicker="首长负责制 · 组织法亮点" title="谁来拍板：首长制与部门线">
      <div
        data-layout="ledger-plus-dual-track"
        data-visual-anchor="main center"
        data-text-treatments="seat-plaques,brass-nameplates"
        data-visual-grammar="chief-seat,collective-seat,org-law-plates,dual-track"
        data-focal-rule="chief-responsibility-system-and-2024-organization-law"
        data-focal-channels="responsibility-seats,dual-track-rows"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="chief-responsibility" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 208}}>
          <Panel tone={C.cinnabar} watermark={<UserCheck size={150} color={C.cinnabar} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <DeskTab bar={C.cinnabar} icon={<UserCheck size={26} color={C.paper} strokeWidth={2.2} />}>首长负责制（老大说了算）</DeskTab>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              <Mark color={C.cinnabar}>行政机关和军事机关</Mark>实行首长负责制；其余机关均为<Mark color={C.celadon}>集体负责制</Mark>
              <br />
              老大提名成员 · 老大对人大人常负责 · 老大最后决定、签字
            </div>
          </Panel>
        </Enter>
        <Enter delay={26} from="right" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 208}}>
          <Panel tone={C.brass} watermark={<BookOpen size={150} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <DeskTab bar={C.brass} icon={<BookOpen size={26} color={C.paper} strokeWidth={2.2} />}>2024《国务院组织法》亮点</DeskTab>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              明确<Mark color={C.brass}>央行行长</Mark>是国务院组成人员
              <br />
              <Mark color={C.celadon}>全体会议报告计划</Mark> · <Mark color={C.cinnabar}>常务会议讨论立法</Mark>
            </div>
          </Panel>
        </Enter>
        <Enter delay={60} from="up" marker="org-law-2024" style={{position: 'absolute', left: 0, top: 232, width: 1776}}>
          <Panel tone={C.celadon} watermark={<Building2 size={170} color={C.celadon} strokeWidth={1.6} />} style={{height: 236, padding: '12px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <DeskTab bar={C.celadon} icon={<Building2 size={26} color={C.paper} strokeWidth={2.2} />}>工作部门调整 · 双轨</DeskTab>
            <IconChip icon={<Building2 size={28} color={C.paper} strokeWidth={2.2} />} tone={C.cinnabar} title="国务院部门：">
              总理提出 → <Mark color={C.cinnabar}>全国人大或全人常决定</Mark>
            </IconChip>
            <IconChip icon={<GitBranch size={28} color={C.paper} strokeWidth={2.2} />} tone={C.celadon} title="地方政府部门：">
              <Mark color={C.celadon}>上一级政府批准</Mark> · <Mark color={C.celadon}>本级人大常委会备案</Mark>
            </IconChip>
            <div style={{fontSize: 22, fontWeight: 900, color: C.inkSoft, lineHeight: 1.5}}>
              双重负责体制：地方政府工作部门既对<Mark color={C.cinnabar}>本级政府</Mark>负责，又对<Mark color={C.celadon}>上一级相关部门</Mark>负责
            </div>
          </Panel>
        </Enter>
        <Enter delay={120} from="up" style={{position: 'absolute', left: 0, top: 492, width: 1776}}>
          <DeskStrip style={{height: 104}}>
            <Crown size={40} color={C.brass} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.brass, color: C.rosewoodDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>一句记</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper, lineHeight: 1.5}}>
              行军首长制 · 其余集体制 · 央行行长入组成 · 部门调整「央级人大定 · 地方上级批」
            </span>
          </DeskStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const StateCouncil = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-honors" {...SCENES.honors}>
      <HonorsScene />
    </TimelineSequence>
    <TimelineSequence name="02-organization" {...SCENES.organization}>
      <OrganizationScene />
    </TimelineSequence>
  </AbsoluteFill>
);
