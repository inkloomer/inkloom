import type {CSSProperties, ReactNode} from 'react';
import {Building2, Flag, GitBranch, Home, Landmark, Map, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  sepia: '#D8C49A',
  sepiaDeep: '#C6B083',
  block: '#F1E7CC',
  blockDim: '#E2D5B2',
  blockEdge: '#6E6250',
  ink: '#2B2721',
  inkSoft: '#57503F',
  vermilion: '#B0452F',
  vermilionPale: '#F0D2C4',
  brass: '#A9822F',
  brassPale: '#E5D3A4',
  stone: '#8A8578',
  paper: '#F6F1E2',
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
      backgroundColor: C.sepia,
      color: C.ink,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(0deg, transparent 0 126px, ${C.vermilion}0C 126px 128px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.vermilion}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.brass}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.inkSoft, borderLeft: `8px solid ${C.vermilion}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 34 · {code}</span>
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
        borderBottom: `2px solid ${C.vermilion}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.ink}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.vermilion, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Block = ({children, marker, style, tone}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.block, border: `2px solid ${C.blockEdge}`, color: C.ink, position: 'relative', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.brass}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.brass}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.brass}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.brass}} />
    {children}
  </div>
);

const LabelTab = ({children, bar = C.vermilion}: {readonly children: ReactNode; readonly bar?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', padding: '5px 14px', backgroundColor: C.inkSoft, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{children}</span>
);

const AtlasChip = ({tone = C.brass, children, solid = false}: {readonly tone?: string; readonly children: ReactNode; readonly solid?: boolean}) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '4px 12px',
      border: `2px solid ${tone}`,
      backgroundColor: solid ? tone : `${tone}14`,
      fontSize: 23,
      fontWeight: 880,
      color: solid ? C.paper : C.ink,
    }}
  >
    {children}
  </span>
);

const Stamp = ({children, delay = 0, size = 26, tone = C.vermilion}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '8px 16px',
        border: `5px solid ${tone}`,
        color: tone,
        backgroundColor: `${tone}10`,
        fontSize: size,
        fontWeight: 950,
        letterSpacing: 2,
        opacity: p,
        scale: 0.86 + p * 0.14,
        rotate: '-3deg',
      }}
    >
      {children}
    </span>
  );
};

const InkUnderline = ({children, color = C.vermilion, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

const Soft = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2b`, padding: '2px 9px'}}>{children}</span>
);

const DarkStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(87, 80, 63, 0.92)', border: `2px solid ${C.vermilion}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

export const StructureFormScene = () => {
  /* data-final-knowledge="structure-heading" data-final-knowledge="unitary-plate" data-final-knowledge="institution-pair" */
  return (
    <Shell code="01" kicker="结构形式" title="单一制：一版地图两个特区">
      <div
        data-layout="single-state-plate-with-institution-pair"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="unitary-form-plate,autonomy-institution,sar-institution"
        data-focal-rule="china-is-a-unitary-state-with-two-special-local-institutions"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="structure-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.block, border: `3px solid ${C.blockEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              中国——<InkUnderline delay={36}>单一制</InkUnderline>国家
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="unitary-plate" style={{position: 'absolute', left: 40, top: 104, width: 850, height: 330}}>
          <Block tone={C.vermilion} style={{height: '100%', padding: '20px 26px 22px', display: 'flex', flexDirection: 'column', gap: 14}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Flag size={40} color={C.vermilion} strokeWidth={2.3} />
              <LabelTab bar={C.vermilion}>单一制的成因</LabelTab>
            </div>
            <div style={{fontSize: 24, fontWeight: 880, color: C.ink, lineHeight: 1.6, marginTop: 6}}>
              决定性要素：统治阶级的<Soft color={C.vermilion}>统治需要</Soft>
            </div>
            <div style={{fontSize: 24, fontWeight: 880, color: C.ink, lineHeight: 1.6}}>
              最主要的其他因素：<Soft color={C.gold}>历史因素</Soft>和<Soft color={C.gold}>民族因素</Soft>
            </div>
            <div style={{marginTop: 'auto', fontSize: 23, fontWeight: 900, color: C.ink}}>
              <Landmark size={32} color={C.inkSoft} strokeWidth={2.3} style={{verticalAlign: '-6px', marginRight: 6}} />
              中央统一领导，发挥地方的<Soft color={C.vermilion}>主动性和积极性</Soft>
            </div>
          </Block>
        </Enter>
        <Enter delay={64} from="right" marker="institution-pair" style={{position: 'absolute', left: 930, top: 104, width: 886, height: 390}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: 16, height: '100%'}}>
            <Block tone={C.brass} style={{flex: 1, padding: '16px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <Users size={34} color={C.brass} strokeWidth={2.3} />
                <span style={{fontSize: 25, fontWeight: 950, color: C.ink}}>民族区域自治制度</span>
              </div>
              <div style={{fontSize: 22, fontWeight: 880, color: C.inkSoft}}>解决<Soft color={C.brass}>多民族</Soft>问题</div>
            </Block>
            <Block tone={C.vermilion} style={{flex: 1, padding: '16px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <Flag size={34} color={C.vermilion} strokeWidth={2.3} />
                <span style={{fontSize: 25, fontWeight: 950, color: C.ink}}>特别行政区制度</span>
              </div>
              <div style={{fontSize: 22, fontWeight: 880, color: C.inkSoft}}>解决<Soft color={C.vermilion}>历史遗留</Soft>问题</div>
            </Block>
          </div>
        </Enter>
        <Enter delay={170} from="up" style={{position: 'absolute', left: 40, top: 534, width: 1736}}>
          <DarkStrip style={{height: 90}}>
            <span style={{padding: '4px 13px', backgroundColor: C.brass, color: C.inkSoft, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>三种地方制度</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              普通地方 · <Soft color={C.brassPale}>民族自治地方</Soft> · <Soft color={C.brassPale}>特别行政区</Soft>
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const DivisionLadderScene = () => {
  /* data-final-knowledge="ladder-heading" data-final-knowledge="tier-ladder" data-final-knowledge="three-tier-note" data-final-knowledge="local-kinds-note" */
  const tiers = [
    {tier: '省级', items: '省 · 自治区 · 直辖市 · 特别行政区', tone: C.vermilion},
    {tier: '市级', items: '地级市 · 自治州', tone: C.brass},
    {tier: '县级', items: '县级市 · 县 · 自治县 · 市辖区', tone: C.brass},
    {tier: '乡级', items: '乡 · 民族乡 · 镇', tone: C.inkSoft},
  ] as const;
  return (
    <Shell code="02" kicker="行政区划" title="四级实存，宪法三级">
      <div
        data-layout="four-tier-block-ladder"
        data-visual-anchor="typographic-sequence"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="province-tier,city-county-tiers,township-tier"
        data-focal-rule="the-constitution-names-three-tiers-while-cities-exist-in-practice"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="ladder-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.block, border: `3px solid ${C.blockEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              省级 → 市级 → 县级 → 乡级
            </span>
          </div>
        </Enter>
        {tiers.map((tier, index) => (
          <Enter key={tier.tier} delay={28 + index * 24} from="left" style={{position: 'absolute', left: 40 + index * 30, top: 104 + index * 104, width: 1736 - index * 60, height: 90}}>
            <Block tone={tier.tone} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '0 22px'}}>
              <span style={{display: 'inline-flex', padding: '5px 14px', backgroundColor: tier.tone, color: C.paper, fontSize: 24, fontWeight: 950, letterSpacing: 2, flexShrink: 0}}>{tier.tier}</span>
              <span style={{width: 2, height: 46, backgroundColor: C.blockEdge}} />
              <span style={{fontSize: 24, fontWeight: 900, color: C.ink, flex: 1}}>{tier.items}</span>
            </Block>
          </Enter>
        ))}
        <Enter delay={140} from="up" marker="three-tier-note" style={{position: 'absolute', left: 40, top: 554, width: 1736}}>
          <DarkStrip style={{height: 84}}>
            <span style={{padding: '4px 13px', backgroundColor: C.brass, color: C.inkSoft, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>易错</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              宪法只规定<Soft color={C.brassPale}>省 · 县 · 乡三级</Soft>——地级市是实践存在（可能但不必然）
            </span>
          </DarkStrip>
        </Enter>
        <Enter delay={190} from="up" marker="local-kinds-note" style={{position: 'absolute', left: 40, top: 662, width: 1736}}>
          <DarkStrip style={{height: 46, opacity: 0}} />
        </Enter>
      </div>
    </Shell>
  );
};

export const ChangeApprovalScene = () => {
  /* data-final-knowledge="approval-heading" data-final-knowledge="approval-fork" data-final-knowledge="dispute-flow-strip" data-final-knowledge="rule-mnemonic" */
  return (
    <Shell code="03" kicker="变更批准" title="谁来批：人大管省建，其余国务院">
      <div
        data-layout="approval-fork-with-dispute-flow"
        data-visual-anchor="document-fork"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="congress-approval-lane,council-approval-lane,dispute-flow-strip"
        data-focal-rule="the-congress-builds-provinces-and-the-council-handles-the-rest"
        data-focal-channels="icon,contrast,connector,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="approval-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.block, border: `3px solid ${C.blockEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              区划变动三规模：<InkUnderline delay={36}>整体 · 重大 · 局部</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="approval-fork" style={{position: 'absolute', left: 40, top: 104, width: 1736, height: 300}}>
          <div style={{display: 'flex', gap: 16, height: '100%'}}>
            <Block tone={C.vermilion} style={{flex: 1, padding: '16px 22px', display: 'flex', flexDirection: 'column', gap: 12}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <Landmark size={36} color={C.vermilion} strokeWidth={2.3} />
                <LabelTab bar={C.vermilion}>全国人大审批</LabelTab>
              </div>
              <div style={{fontSize: 23, fontWeight: 900, color: C.ink, lineHeight: 1.6}}>
                ① 省 · 自治区 · 直辖市的<Soft color={C.vermilion}>设立、撤销、更名</Soft>
                <br />
                ② 特别行政区的<Soft color={C.vermilion}>成立</Soft>
              </div>
              <div style={{marginTop: 'auto'}}>
                <Stamp delay={130} size={24}>省级建撤，只此一家</Stamp>
              </div>
            </Block>
            <Block tone={C.brass} style={{flex: 1.2, padding: '16px 22px', display: 'flex', flexDirection: 'column', gap: 12}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <Building2 size={36} color={C.brass} strokeWidth={2.3} />
                <LabelTab bar={C.brass}>国务院审批</LabelTab>
              </div>
              <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.6}}>
                ① 省·自治区·直辖市的<Soft color={C.brass}>区域界线变更</Soft>
                <br />
                ② 自治州·县·自治县·市·市辖区的<Soft color={C.brass}>设撤更名及隶属变更</Soft>
                <br />
                ③ 自治州·自治县<Soft color={C.brass}>界线变更</Soft>
                <br />
                ④ 普通县·市·市辖区界线的<Soft color={C.brass}>重大变更</Soft>
              </div>
            </Block>
          </div>
        </Enter>
        <Enter delay={90} from="up" marker="dispute-flow-strip" style={{position: 'absolute', left: 40, top: 428, width: 1736, height: 130}}>
          <Block tone={C.inkSoft} style={{height: '100%', padding: '14px 24px', display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'center'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <GitBranch size={32} color={C.inkSoft} strokeWidth={2.3} />
              <LabelTab bar={C.inkSoft}>边界争议 · 主管部门＝民政机关</LabelTab>
            </div>
            <div style={{fontSize: 22, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
              <Soft color={C.gold}>协商</Soft> → 报告上级 → <Soft color={C.gold}>民政部门调解</Soft> → 调解不成提出方案，由<Soft color={C.vermilion}>本级政府决定</Soft>
            </div>
          </Block>
        </Enter>
        <Enter delay={150} from="up" marker="rule-mnemonic" style={{position: 'absolute', left: 40, top: 586, width: 1736}}>
          <DarkStrip style={{height: 92}}>
            <span style={{padding: '4px 13px', backgroundColor: C.brass, color: C.inkSoft, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>口诀</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              <InkUnderline color={C.brassPale} delay={180}>省政府管乡，全国人大管省建，其余全归国务院</InkUnderline>
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const StateStructureDivisions = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-structure-form" {...SCENES.structureForm}>
      <StructureFormScene />
    </TimelineSequence>
    <TimelineSequence name="02-division-ladder" {...SCENES.divisionLadder}>
      <DivisionLadderScene />
    </TimelineSequence>
    <TimelineSequence name="03-change-approval" {...SCENES.changeApproval}>
      <ChangeApprovalScene />
    </TimelineSequence>
  </AbsoluteFill>
);
