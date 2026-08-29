import type {CSSProperties, ReactNode} from 'react';
import {
  ArrowDown,
  ArrowUp,
  Ban,
  BookMarked,
  BookOpen,
  Building2,
  Clock,
  Gavel,
  GitBranch,
  Handshake,
  Landmark,
  Scale,
  ScrollText,
  ShieldCheck,
} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  quarry: '#8A867C',
  stele: '#EAE3CF',
  steleDim: '#DFD7C0',
  steleEdge: '#56524A',
  ink: '#2B2620',
  inkSoft: '#4C463B',
  vermilion: '#AE3A28',
  vermilionDeep: '#8A2C1E',
  moss: '#5E7245',
  bronze: '#8F7434',
  seam: '#3E3A32',
  paper: '#F4EFE0',
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

const RubbingTab = ({children}: {readonly children: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.seam, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2, borderLeft: `6px solid ${C.bronze}`}}>
    {children}
  </span>
);

const Soft = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}26`, padding: '2px 9px'}}>{children}</span>
);

const StoneChip = ({accent = C.bronze, children, solid = false}: {readonly accent?: string; readonly children: ReactNode; readonly solid?: boolean}) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '4px 12px',
      border: `2px solid ${accent}`,
      backgroundColor: solid ? accent : `${accent}12`,
      fontSize: 23,
      fontWeight: 870,
      color: solid ? C.paper : C.ink,
    }}
  >
    {children}
  </span>
);

const Seal = ({children, color = C.vermilion, delay = 0, size = 30}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number; readonly size?: number}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '10px 20px',
        border: `5px solid ${color}`,
        color,
        fontSize: size,
        fontWeight: 950,
        letterSpacing: 3,
        opacity: p,
        scale: 0.86 + p * 0.14,
        rotate: '-2deg',
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
          height: 5,
          backgroundColor: color,
          scale: `${prog(frame, delay, 22)} 1`,
          transformOrigin: 'left center',
        }}
      />
    </span>
  );
};

const Stele = ({
  accent = C.vermilion,
  children,
  marker,
  style,
}: {
  readonly accent?: string;
  readonly children: ReactNode;
  readonly marker?: string;
  readonly style?: CSSProperties;
}) => (
  <div
    data-final-knowledge={marker}
    style={{
      position: 'absolute',
      backgroundColor: C.stele,
      border: `2px solid ${C.steleEdge}`,
      ...style,
    }}
  >
    <span style={{position: 'absolute', left: 0, top: 0, width: 12, height: '100%', backgroundColor: accent}} />
    <span style={{position: 'absolute', right: 8, top: 8, width: 46, height: 46, border: `2px solid ${C.steleEdge}55`}} />
    {children}
  </div>
);

const Stake = ({index}: {readonly index: number}) => (
  <span
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      width: 44,
      height: 44,
      backgroundColor: C.bronze,
      color: C.paper,
      fontSize: 24,
      fontWeight: 950,
    }}
  >
    {String(index).padStart(2, '0')}
  </span>
);

const Crosshair = ({x, y, tone = C.bronze}: {readonly x: number; readonly y: number; readonly tone?: string}) => (
  <div style={{position: 'absolute', left: x - 11, top: y - 11, width: 22, height: 22}}>
    <span style={{position: 'absolute', left: 0, right: 0, top: 10, height: 2, backgroundColor: tone}} />
    <span style={{position: 'absolute', top: 0, bottom: 0, left: 10, width: 2, backgroundColor: tone}} />
    <span style={{position: 'absolute', left: 7, top: 7, width: 8, height: 8, border: `2px solid ${tone}`, borderRadius: 11}} />
  </div>
);

const Shell = ({children, code, kicker, title}: {readonly children: ReactNode; readonly code: string; readonly kicker: string; readonly title: string}) => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{
      backgroundColor: C.quarry,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(0deg, transparent 0 95px, #00000012 95px 96px), repeating-linear-gradient(90deg, transparent 0 95px, #00000012 95px 96px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `2px solid ${C.bronze}`}} />
    <Crosshair x={62} y={62} />
    <Crosshair x={1858} y={62} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.seam, borderLeft: `8px solid ${C.vermilion}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 09 · {code}</span>
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
        borderBottom: `2px solid ${C.bronze}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.bronze, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

export const MeaningSplitScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="meaning-heading" data-final-knowledge="formal-stele" data-final-knowledge="informal-stele" data-final-knowledge="consider-duty-chips" data-final-knowledge="dual-function-note" */
  return (
    <Shell code="含义" kicker="正式与非正式" title="法律渊源：效力的来源">
      <div
        data-layout="twin-stele-definition-with-duty-split"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="formal-source-claim,informal-source-claim,dual-function-note"
        data-focal-rule="the-line-between-formal-and-informal-is-explicit-written-law"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="none" style={{position: 'absolute', left: 0, top: 10}}>
          <RubbingTab>渊源含义 · 两大类</RubbingTab>
        </Enter>
        <Enter delay={14} from="down" marker="meaning-heading" style={{position: 'absolute', left: 340, top: 0, width: 1096}}>
          <div style={{backgroundColor: C.stele, border: `3px solid ${C.steleEdge}`, padding: '12px 26px'}}>
            <div style={{fontSize: 36, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              法律渊源 = <InkUnderline delay={38}>效力与意义的来源</InkUnderline>
            </div>
            <div style={{marginTop: 6, fontSize: 24, fontWeight: 860, color: C.inkSoft}}>
              被承认具有法的效力或法律意义 · 能作为法官审理案件之依据的规范或准则来源
            </div>
          </div>
        </Enter>
        <Enter delay={40} from="up" marker="formal-stele" style={{position: 'absolute', left: 40, top: 136, width: 820, height: 348}}>
          <Stele accent={C.vermilion} style={{left: 0, top: 0, width: 820, height: 348}}>
            <div style={{padding: '22px 26px 18px 42px', display: 'flex', flexDirection: 'column', gap: 12}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
                <BookMarked size={42} color={C.vermilion} strokeWidth={2.2} />
                <span style={{fontSize: 34, fontWeight: 950, color: C.ink}}>正式渊源</span>
                <span style={{marginLeft: 'auto', fontSize: 20, fontWeight: 870, color: C.vermilion, letterSpacing: 2}}>明文法定</span>
              </div>
              <div style={{fontSize: 24, fontWeight: 870, color: C.ink, lineHeight: 1.45}}>
                具有<Soft color={C.vermilion}>明文规定</Soft>的法律效力
              </div>
              <div style={{fontSize: 24, fontWeight: 870, color: C.ink, lineHeight: 1.45}}>可直接作为法律决定的<Soft color={C.bronze}>大前提</Soft></div>
              <div style={{fontSize: 24, fontWeight: 870, color: C.ink, lineHeight: 1.45}}>法律人有义务适用它们</div>
            </div>
          </Stele>
        </Enter>
        <Enter delay={64} from="up" marker="informal-stele" style={{position: 'absolute', left: 916, top: 136, width: 820, height: 348}}>
          <Stele accent={C.moss} style={{left: 0, top: 0, width: 820, height: 348}}>
            <div style={{padding: '22px 26px 18px 42px', display: 'flex', flexDirection: 'column', gap: 12}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
                <BookOpen size={42} color={C.moss} strokeWidth={2.2} />
                <span style={{fontSize: 34, fontWeight: 950, color: C.ink}}>非正式渊源</span>
                <span style={{marginLeft: 'auto', fontSize: 20, fontWeight: 870, color: C.moss, letterSpacing: 2}}>有说服力</span>
              </div>
              <div style={{fontSize: 24, fontWeight: 870, color: C.ink, lineHeight: 1.45}}>
                不具有<Soft color={C.moss}>明文规定</Soft>的法律效力
              </div>
              <div style={{fontSize: 24, fontWeight: 870, color: C.ink, lineHeight: 1.45}}>有法律意义与说服力 · 亦可构成大前提</div>
              <div style={{fontSize: 24, fontWeight: 870, color: C.ink, lineHeight: 1.45}}>法官可以考虑</div>
            </div>
          </Stele>
        </Enter>
        <div style={{position: 'absolute', left: 874, top: 142, width: 0, height: 336, borderLeft: `3px dashed ${C.bronze}`, opacity: prog(frame, 96, 20)}} />
        <div style={{position: 'absolute', left: 846, top: 250, opacity: prog(frame, 104, 20)}}>
          <span style={{display: 'inline-block', writingMode: 'vertical-rl', backgroundColor: C.seam, color: C.paper, fontSize: 20, fontWeight: 900, letterSpacing: 4, padding: '12px 8px'}}>分界 · 是否明文规定</span>
        </div>
        <Enter delay={124} from="none" marker="consider-duty-chips" style={{position: 'absolute', left: 40, top: 508, width: 1736, height: 96}}>
          <div style={{backgroundColor: C.steleDim, border: `2px solid ${C.steleEdge}`, height: 96, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18, padding: '0 24px'}}>
            <StoneChip accent={C.vermilion} solid>必须考虑</StoneChip>
            <StoneChip accent={C.vermilion} solid>必须适用</StoneChip>
            <span style={{fontSize: 26, fontWeight: 950, color: C.ink}}>＝ 正式渊源</span>
            <span style={{fontSize: 30, fontWeight: 900, color: C.bronze}}>｜</span>
            <StoneChip accent={C.bronze}>可以考虑</StoneChip>
            <StoneChip accent={C.bronze}>可以适用</StoneChip>
            <span style={{fontSize: 26, fontWeight: 950, color: C.ink}}>＝ 非正式渊源</span>
            <Seal delay={150} size={26}>是否明文规定</Seal>
          </div>
        </Enter>
        <Enter delay={168} marker="dual-function-note" style={{position: 'absolute', left: 40, top: 628, width: 1736, height: 112}}>
          <div style={{border: `2px solid ${C.bronze}`, backgroundColor: '#3E3A3218', height: 112, display: 'flex', alignItems: 'center', gap: 16, padding: '0 26px'}}>
            <Ban size={36} color={C.vermilion} strokeWidth={2.2} />
            <span style={{fontSize: 26, fontWeight: 900, color: C.paper}}>
              非正式渊源的两种作用：<Soft color={C.bronze}>填补正式渊源漏洞</Soft>
            </span>
            <StoneChip accent={C.vermilion}>刑法除外 · 罪刑法定</StoneChip>
            <span style={{fontSize: 26, fontWeight: 900, color: C.paper}}>＋ <Soft color={C.moss}>辅助正式渊源理解</Soft></span>
            <StoneChip accent={C.moss}>无领域限制</StoneChip>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

const ladderLanes = [
  {
    marker: 'constitution-lane',
    name: '宪法',
    note: '',
    noteUnderline: '效力最高',
    maker: '人民制定 · 全人大修改监督 · 全人常解释 · 主席团公布',
    icon: Landmark,
    accent: C.vermilion,
  },
  {
    marker: 'law-lane',
    name: '法律',
    note: '基本法律与普通法律效力相当 · 冲突由全人常裁决',
    noteUnderline: '',
    maker: '基本法律：全国人大 ｜ 普通法律：全人常',
    icon: null,
    accent: C.vermilion,
  },
  {
    marker: 'regulation-lanes',
    name: '行政法规',
    note: '执行性 · 自主性 · 授权性立法（不得突破绝对保留）',
    noteUnderline: '',
    maker: '国务院 · 总理签署国务院令公布',
    icon: null,
    accent: C.bronze,
  },
  {
    marker: undefined,
    name: '监察法规',
    note: '效力相当于行政法规 · 公布后 30 日内报全人常备案',
    noteUnderline: '',
    maker: '国家监委 · 全体会议决定 · 公告公布',
    icon: ShieldCheck,
    accent: C.bronze,
  },
  {
    marker: 'local-lanes',
    name: '地方性法规',
    note: '设区的市限于：城乡建设管理、生态文明、历史文化、基层治理',
    noteUnderline: '',
    maker: '省级／设区的市 人大及常委会',
    icon: Building2,
    accent: C.moss,
  },
  {
    marker: undefined,
    name: '规章',
    note: '不得擅自减损权利、增加义务 · 满两年须提请制定地方性法规',
    noteUnderline: '',
    maker: '部门：部委行署 ｜ 地方：省／设区的市政府',
    icon: null,
    accent: C.moss,
  },
  {
    marker: undefined,
    name: '自治条例 · 单行条例',
    note: '依据当地民族特点变通并优先适用（只有人大，没有人常）',
    noteUnderline: '',
    maker: '自治区、自治州、自治县的人大',
    icon: null,
    accent: C.moss,
  },
] as const;

export const LegislativeLadderScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="ladder-heading" data-final-knowledge="constitution-lane" data-final-knowledge="law-lane" data-final-knowledge="regulation-lanes" data-final-knowledge="local-lanes" data-final-knowledge="special-zone-chip" data-final-knowledge="ladder-mnemonic" */
  return (
    <Shell code="立法体制" kicker="正式法源 · 效力阶梯" title="当代中国的正式法律渊源">
      <div
        data-layout="source-ladder-with-maker-tags"
        data-visual-anchor="typographic-sequence"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="source-hierarchy-lanes,maker-annotation,special-zone-chip"
        data-focal-rule="constitution-to-local-ladder-descends-by-making-authority"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="none" style={{position: 'absolute', left: 0, top: 10}}>
          <RubbingTab>正式法源 · 七级碑阶</RubbingTab>
        </Enter>
        <Enter delay={14} from="down" marker="ladder-heading" style={{position: 'absolute', left: 340, top: 0, width: 900}}>
          <div style={{backgroundColor: C.stele, border: `3px solid ${C.steleEdge}`, padding: '10px 26px', textAlign: 'center'}}>
            <span style={{fontSize: 33, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              立法体制：从<InkUnderline delay={40}>宪法</InkUnderline>到地方，制定主体逐级下沉
            </span>
          </div>
        </Enter>
        {ladderLanes.map((lane, index) => (
          <Enter
            key={lane.name}
            delay={36 + index * 22}
            from="left"
            marker={lane.marker}
            style={{position: 'absolute', left: 40, top: 104 + index * 84, width: 1300, height: 76}}
          >
            <Stele accent={lane.accent} style={{left: 0, top: 0, width: 1300, height: 76}}>
              <div style={{height: '100%', display: 'flex', alignItems: 'center', gap: 14, padding: '0 20px 0 38px'}}>
                <Stake index={index + 1} />
                <div style={{flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 3}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                    <span style={{fontSize: 28, fontWeight: 950, color: C.ink, whiteSpace: 'nowrap'}}>{lane.name}</span>
                    {lane.icon ? <lane.icon size={30} color={lane.accent} strokeWidth={2.2} /> : null}
                    <span style={{marginLeft: 'auto', fontSize: 22, fontWeight: 880, color: C.ink, backgroundColor: `${C.bronze}1E`, border: `2px solid ${C.bronze}`, padding: '2px 10px', whiteSpace: 'nowrap'}}>
                      {lane.maker}
                    </span>
                  </div>
                  <div style={{fontSize: 22, fontWeight: 860, color: C.inkSoft, whiteSpace: 'nowrap'}}>
                    {lane.noteUnderline ? <InkUnderline delay={80 + index * 22} color={lane.accent}>{lane.noteUnderline}</InkUnderline> : lane.note}
                  </div>
                </div>
              </div>
            </Stele>
          </Enter>
        ))}
        <Enter delay={120} from="right" marker="special-zone-chip" style={{position: 'absolute', left: 1360, top: 104, width: 416, height: 252}}>
          <Stele accent={C.vermilion} style={{left: 0, top: 0, width: 416, height: 252}}>
            <div style={{padding: '16px 20px 12px 34px', display: 'flex', flexDirection: 'column', gap: 10}}>
              <div style={{fontSize: 30, fontWeight: 950, color: C.ink}}>“三区”法规授权</div>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: 8}}>
                <StoneChip accent={C.vermilion}>经济特区法规</StoneChip>
                <StoneChip accent={C.vermilion}>浦东新区法规</StoneChip>
                <StoneChip accent={C.vermilion}>海南自贸港法规</StoneChip>
              </div>
              <div style={{fontSize: 23, fontWeight: 870, color: C.ink, lineHeight: 1.45}}>
                效力<Soft color={C.vermilion}>相当于法律</Soft> · 变通后<Soft color={C.vermilion}>优先适用</Soft>
              </div>
            </div>
          </Stele>
        </Enter>
        <Enter delay={146} from="right" style={{position: 'absolute', left: 1360, top: 368, width: 416, height: 210}}>
          <Stele accent={C.bronze} style={{left: 0, top: 0, width: 416, height: 210}}>
            <div style={{padding: '14px 20px 10px 34px', display: 'flex', flexDirection: 'column', gap: 7}}>
              <div style={{fontSize: 24, fontWeight: 950, color: C.ink}}>特别行政区法律</div>
              <div style={{fontSize: 22, fontWeight: 850, color: C.inkSoft}}>立法会制定 · 报全人常备案</div>
              <div style={{fontSize: 22, fontWeight: 850, color: C.inkSoft}}>备案不影响生效</div>
              <div style={{fontSize: 24, fontWeight: 950, color: C.ink}}>国际条约与国际惯例</div>
              <div style={{fontSize: 22, fontWeight: 850, color: C.inkSoft}}>条约以缔结加入为前提 · 惯例作补充</div>
            </div>
          </Stele>
        </Enter>
        <Enter delay={172} from="right" marker="ladder-mnemonic" style={{position: 'absolute', left: 1360, top: 590, width: 416, height: 108}}>
          <div style={{border: `2px solid ${C.bronze}`, backgroundColor: '#3E3A3218', height: 108, padding: '10px 20px', display: 'flex', flexDirection: 'column', gap: 6}}>
            <span style={{fontSize: 22, fontWeight: 950, color: '#D9B36A', letterSpacing: 2}}>命名判断渊源</span>
            <span style={{fontSize: 22, fontWeight: 880, color: C.paper, lineHeight: 1.45}}>
              “某某法”＝法律 ·“某某条例”＝法规 ·“某某规定／办法”＝规章
            </span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const HierarchyConflictsScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="hierarchy-heading" data-final-knowledge="upper-lower-rule" data-final-knowledge="grid-mnemonic" data-final-knowledge="autonomy-exception" data-final-knowledge="three-zone-exception" */
  const flow = interpolate(frame, [70, 130], [0, 1], CLAMP);
  return (
    <Shell code="不同位阶" kicker="冲突解决 · 上位法优先" title="不同位阶的冲突">
      <div
        data-layout="upper-lower-rule-with-two-exceptions"
        data-visual-anchor="boundary"
        data-text-treatments="label-block,chip,soft-highlight,external-negation"
        data-visual-grammar="upper-precedes-lower,grid-orientation-mnemonic,two-exceptions"
        data-focal-rule="lower-must-yield-to-upper-unless-variation-power-applies"
        data-focal-channels="icon,contrast,enclosure,motion,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="none" style={{position: 'absolute', left: 0, top: 10}}>
          <RubbingTab>冲突裁决 · 位阶差</RubbingTab>
        </Enter>
        <Enter delay={14} from="down" marker="hierarchy-heading" style={{position: 'absolute', left: 340, top: 0, width: 1000}}>
          <div style={{backgroundColor: C.stele, border: `3px solid ${C.steleEdge}`, padding: '10px 26px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              上位法 ＞ 下位法：<InkUnderline delay={40}>下位法必须遵从上位法</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={36} from="up" marker="upper-lower-rule" style={{position: 'absolute', left: 60, top: 108, width: 640, height: 600}}>
          <div style={{position: 'absolute', left: 0, top: 0, width: 640, height: 600}}>
            <div style={{position: 'absolute', left: 0, top: 0, width: 640, height: 170, backgroundColor: C.stele, border: `3px solid ${C.steleEdge}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
                <ArrowUp size={38} color={C.vermilion} strokeWidth={2.4} />
                <span style={{fontSize: 34, fontWeight: 950, color: C.ink}}>上位法</span>
              </div>
              <span style={{fontSize: 22, fontWeight: 860, color: C.inkSoft}}>例：全国人大制定的法律</span>
            </div>
            <div style={{position: 'absolute', left: 318, top: 170, width: 4, height: 80 * flow, backgroundColor: C.bronze}} />
            <div style={{position: 'absolute', left: 80, top: 250, width: 480, height: 72, border: `4px solid ${C.vermilion}`, backgroundColor: C.stele, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: prog(frame, 60, 16)}}>
              <span style={{fontSize: 30, fontWeight: 950, color: C.vermilionDeep, letterSpacing: 2}}>下位法必须遵从上位法</span>
            </div>
            <div style={{position: 'absolute', left: 318, top: 322, width: 4, height: 88 * flow, backgroundColor: C.bronze}} />
            <div style={{position: 'absolute', left: 0, top: 410, width: 640, height: 170, backgroundColor: C.steleDim, border: `3px solid ${C.steleEdge}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
                <ArrowDown size={38} color={C.bronze} strokeWidth={2.4} />
                <span style={{fontSize: 34, fontWeight: 950, color: C.ink}}>下位法</span>
              </div>
              <span style={{fontSize: 22, fontWeight: 860, color: C.inkSoft}}>例：国务院制定的行政法规</span>
            </div>
          </div>
        </Enter>
        <Enter delay={56} from="right" marker="grid-mnemonic" style={{position: 'absolute', left: 760, top: 108, width: 1016, height: 140}}>
          <Stele accent={C.bronze} style={{left: 0, top: 0, width: 1016, height: 140}}>
            <div style={{height: '100%', display: 'flex', alignItems: 'center', gap: 20, padding: '0 26px 0 40px'}}>
              <Scale size={44} color={C.bronze} strokeWidth={2.2} />
              <div>
                <div style={{fontSize: 22, fontWeight: 950, color: C.bronze, letterSpacing: 3}}>判断方法 · 一横一纵</div>
                <div style={{marginTop: 6, fontSize: 29, fontWeight: 950, color: C.ink}}>
                  同一<Soft color={C.bronze}>等级</Soft>看系统 · 同一<Soft color={C.bronze}>系统</Soft>看等级
                </div>
              </div>
            </div>
          </Stele>
        </Enter>
        <Enter delay={92} from="right" marker="autonomy-exception" style={{position: 'absolute', left: 760, top: 268, width: 1016, height: 196}}>
          <Stele accent={C.moss} style={{left: 0, top: 0, width: 1016, height: 196}}>
            <div style={{padding: '18px 24px 14px 40px', display: 'flex', flexDirection: 'column', gap: 10}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
                <StoneChip accent={C.moss} solid>例外一</StoneChip>
                <span style={{fontSize: 30, fontWeight: 950, color: C.ink}}>自治条例 · 单行条例</span>
              </div>
              <div style={{fontSize: 25, fontWeight: 880, color: C.ink}}>
                立法机关有一定<Soft color={C.moss}>变通权限</Soft> —— 与上位法矛盾
                <span style={{display: 'inline-block', margin: '0 6px', backgroundColor: C.vermilion, color: C.paper, fontSize: 22, fontWeight: 950, padding: '2px 10px'}}>不必然</span>
                丧失法律效力
              </div>
              <div style={{fontSize: 22, fontWeight: 850, color: C.inkSoft}}>在变通权限内不受“下位法遵从上位法”原则约束</div>
            </div>
          </Stele>
        </Enter>
        <Enter delay={118} from="right" marker="three-zone-exception" style={{position: 'absolute', left: 760, top: 484, width: 1016, height: 196}}>
          <Stele accent={C.vermilion} style={{left: 0, top: 0, width: 1016, height: 196}}>
            <div style={{padding: '18px 24px 14px 40px', display: 'flex', flexDirection: 'column', gap: 12}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
                <StoneChip accent={C.vermilion} solid>例外二</StoneChip>
                <span style={{fontSize: 30, fontWeight: 950, color: C.ink}}>“三区”法规（授权立法）</span>
              </div>
              <div style={{fontSize: 25, fontWeight: 880, color: C.ink}}>
                与法律（狭义）发生矛盾 → 由<Soft color={C.vermilion}>全国人大常委会</Soft>裁决
              </div>
              <div>
                <Seal delay={144} size={26}>裁决</Seal>
              </div>
            </div>
          </Stele>
        </Enter>
      </div>
    </Shell>
  );
};

export const SameLevelConflictsScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="same-heading" data-final-knowledge="twin-principles" data-final-knowledge="cross-cut-exception" data-final-knowledge="local-vs-ministry-route" data-final-knowledge="ministerial-routes-note" */
  const fork = interpolate(frame, [120, 176], [0, 1], CLAMP);
  return (
    <Shell code="同一位阶" kicker="冲突解决 · 原则与裁决" title="同一位阶的冲突">
      <div
        data-layout="same-level-principles-with-routed-exceptions"
        data-visual-anchor="document-fork"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="special-over-general,new-over-old,routed-adjudication"
        data-focal-rule="same-rank-conflicts-follow-principles-then-routed-adjudication"
        data-focal-channels="icon,contrast,enclosure,motion,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="none" style={{position: 'absolute', left: 0, top: 10}}>
          <RubbingTab>冲突裁决 · 同位阶</RubbingTab>
        </Enter>
        <Enter delay={14} from="down" marker="same-heading" style={{position: 'absolute', left: 340, top: 0, width: 1100}}>
          <div style={{backgroundColor: C.stele, border: `3px solid ${C.steleEdge}`, padding: '10px 26px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              同一主体或无上下级：<InkUnderline delay={40}>先原则，后裁决</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={36} from="up" marker="twin-principles" style={{position: 'absolute', left: 40, top: 104, width: 1736, height: 150}}>
          <div style={{position: 'absolute', left: 0, top: 0, width: 1736, height: 150}}>
            <div style={{position: 'absolute', left: 0, top: 0, width: 600, height: 150, backgroundColor: C.stele, border: `3px solid ${C.steleEdge}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
                <GitBranch size={40} color={C.bronze} strokeWidth={2.2} />
                <span style={{fontSize: 32, fontWeight: 950, color: C.ink}}>特别法 ＞ 普通法</span>
              </div>
              <StoneChip accent={C.bronze}>同一制定主体</StoneChip>
            </div>
            <div style={{position: 'absolute', left: 660, top: 0, width: 600, height: 150, backgroundColor: C.stele, border: `3px solid ${C.steleEdge}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
                <Clock size={40} color={C.bronze} strokeWidth={2.2} />
                <span style={{fontSize: 32, fontWeight: 950, color: C.ink}}>新法 ＞ 旧法</span>
              </div>
              <StoneChip accent={C.bronze}>同一制定主体</StoneChip>
            </div>
            <div style={{position: 'absolute', left: 1320, top: 0, width: 416, height: 150, backgroundColor: C.steleDim, border: `3px solid ${C.steleEdge}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8}}>
              <span style={{fontSize: 22, fontWeight: 950, color: C.bronze, letterSpacing: 3}}>适用前提</span>
              <span style={{fontSize: 30, fontWeight: 950, color: C.vermilionDeep}}>同一制定主体</span>
              <span style={{fontSize: 21, fontWeight: 850, color: C.inkSoft}}>不同主体 → 看位阶</span>
            </div>
          </div>
        </Enter>
        <Enter delay={78} from="none" marker="cross-cut-exception" style={{position: 'absolute', left: 40, top: 274, width: 1736, height: 116}}>
          <Stele accent={C.vermilion} style={{left: 0, top: 0, width: 1736, height: 116}}>
            <div style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '0 26px 0 40px'}}>
              <StoneChip accent={C.vermilion} solid>特例一</StoneChip>
              <span style={{fontSize: 26, fontWeight: 900, color: C.ink}}>
                特别法与新法<Soft color={C.vermilion}>交叉适用出现不同结果</Soft> → 由制定机关裁决
              </span>
              <span style={{marginLeft: 'auto', display: 'flex', gap: 10}}>
                <StoneChip accent={C.bronze}>法律 → 全人常裁决</StoneChip>
                <StoneChip accent={C.bronze}>行政法规 → 国务院裁决</StoneChip>
              </span>
            </div>
          </Stele>
        </Enter>
        <Enter delay={104} from="up" marker="local-vs-ministry-route" style={{position: 'absolute', left: 40, top: 410, width: 1020, height: 298}}>
          <Stele accent={C.moss} style={{left: 0, top: 0, width: 1020, height: 298}}>
            <div style={{position: 'absolute', left: 0, top: 16, width: '100%', display: 'flex', alignItems: 'center', gap: 14, padding: '0 24px 0 40px'}}>
              <StoneChip accent={C.moss} solid>特例二</StoneChip>
              <span style={{fontSize: 29, fontWeight: 950, color: C.ink}}>地方性法规 vs 部门规章</span>
            </div>
            <div style={{position: 'absolute', left: 330, top: 86, width: 360, height: 56, border: `3px solid ${C.bronze}`, backgroundColor: C.steleDim, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: prog(frame, 116, 16)}}>
              <span style={{fontSize: 25, fontWeight: 950, color: C.ink}}>国务院提出意见</span>
            </div>
            <div style={{position: 'absolute', left: 508, top: 142, width: 4, height: 24 * fork, backgroundColor: C.bronze}} />
            <div style={{position: 'absolute', left: 256, top: 166, width: 508, height: 4, backgroundColor: C.bronze, opacity: fork}} />
            <div style={{position: 'absolute', left: 256, top: 166, width: 4, height: 26 * fork, backgroundColor: C.bronze}} />
            <div style={{position: 'absolute', left: 760, top: 166, width: 4, height: 26 * fork, backgroundColor: C.bronze}} />
            <div style={{position: 'absolute', left: 36, top: 192, width: 440, height: 82, border: `3px solid ${C.moss}`, backgroundColor: C.stele, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4, opacity: prog(frame, 176, 16)}}>
              <span style={{fontSize: 24, fontWeight: 950, color: C.ink}}>认为应适用地方性法规</span>
              <span style={{fontSize: 22, fontWeight: 880, color: C.moss}}>→ 就地适用地方性法规</span>
            </div>
            <div style={{position: 'absolute', left: 536, top: 192, width: 440, height: 82, border: `3px solid ${C.vermilion}`, backgroundColor: C.stele, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4, opacity: prog(frame, 190, 16)}}>
              <span style={{fontSize: 24, fontWeight: 950, color: C.ink}}>认为应适用部门规章</span>
              <span style={{fontSize: 22, fontWeight: 880, color: C.vermilionDeep}}>→ 提请全国人大常委会裁决</span>
            </div>
          </Stele>
        </Enter>
        <Enter delay={130} from="right" marker="ministerial-routes-note" style={{position: 'absolute', left: 1100, top: 410, width: 676, height: 298}}>
          <Stele accent={C.vermilion} style={{left: 0, top: 0, width: 676, height: 298}}>
            <div style={{padding: '18px 24px 14px 40px', display: 'flex', flexDirection: 'column', gap: 12}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
                <StoneChip accent={C.vermilion} solid>特例三</StoneChip>
                <span style={{fontSize: 28, fontWeight: 950, color: C.ink}}>规章之间的矛盾</span>
              </div>
              <div style={{fontSize: 24, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
                部门规章之间 ／ 部门规章与地方政府规章
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
                <Landmark size={38} color={C.vermilion} strokeWidth={2.2} />
                <span style={{fontSize: 29, fontWeight: 950, color: C.vermilionDeep}}>统一由国务院裁决</span>
              </div>
              <div>
                <Seal delay={156} size={26}>裁决</Seal>
              </div>
            </div>
          </Stele>
        </Enter>
      </div>
    </Shell>
  );
};

export const InformalSourcesScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="informal-heading" data-final-knowledge="custom-card" data-final-knowledge="policy-card" data-final-knowledge="precedent-card" data-final-knowledge="unify-strip" data-final-knowledge="open-concept-chip" */
  const relics = [
    {
      marker: 'custom-card',
      icon: Handshake,
      accent: C.moss,
      name: '习惯',
      rows: [
        <>社会习惯 · <Soft color={C.moss}>非个人习惯</Soft></>,
        <>效力源自社会成员的<Soft color={C.bronze}>共同理性</Soft></>,
      ],
      chip: '约定俗成',
      stamp: '',
    },
    {
      marker: 'policy-card',
      icon: ScrollText,
      accent: C.bronze,
      name: '政策',
      rows: [
        <>国家政策 ＋ 党的政策</>,
        <>多以<Soft color={C.bronze}>红头文件</Soft>形式表现</>,
      ],
      chip: '法官重要参考资料',
      stamp: '',
    },
    {
      marker: 'precedent-card',
      icon: Gavel,
      accent: C.vermilion,
      name: '判例',
      rows: [
        <>最高司法机关 · <Soft color={C.vermilion}>指导性案例</Soft></>,
        <>避免司法审判标准不统一</>,
      ],
      chip: '',
      stamp: '同案同判',
    },
  ] as const;

  return (
    <Shell code="非正式法源" kicker="可以考虑的准则来源" title="常见的非正式法源">
      <div
        data-layout="three-relic-cards-with-unify-strip"
        data-visual-anchor="concept-icon"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="custom-card,policy-card,precedent-card"
        data-focal-rule="informal-sources-guide-discretion-without-binding-force"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="none" style={{position: 'absolute', left: 0, top: 10}}>
          <RubbingTab>非正式法源 · 三块碑材</RubbingTab>
        </Enter>
        <Enter delay={14} from="down" marker="informal-heading" style={{position: 'absolute', left: 340, top: 0, width: 1220}}>
          <div style={{backgroundColor: C.stele, border: `3px solid ${C.steleEdge}`, padding: '10px 26px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              习惯 · 政策 · 判例 —— <InkUnderline delay={40}>法官可以考虑</InkUnderline>
            </span>
          </div>
        </Enter>
        {relics.map((relic, index) => (
          <Enter
            key={relic.marker}
            delay={36 + index * 26}
            from="up"
            marker={relic.marker}
            style={{position: 'absolute', left: 40 + index * 608, top: 108, width: 520, height: 310}}
          >
            <Stele accent={relic.accent} style={{left: 0, top: 0, width: 520, height: 310}}>
              <div style={{padding: '20px 22px 16px 38px', display: 'flex', flexDirection: 'column', gap: 12}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
                  <relic.icon size={44} color={relic.accent} strokeWidth={2.2} />
                  <span style={{fontSize: 34, fontWeight: 950, color: C.ink}}>{relic.name}</span>
                </div>
                {relic.rows.map((row, rowIndex) => (
                  <div key={rowIndex} style={{fontSize: 23, fontWeight: 870, color: C.ink, lineHeight: 1.45}}>
                    {row}
                  </div>
                ))}
                {relic.chip ? <div><StoneChip accent={relic.accent}>{relic.chip}</StoneChip></div> : null}
                {relic.stamp ? (
                  <div style={{marginTop: 4}}>
                    <Seal delay={120 + index * 20} size={26}>{relic.stamp}</Seal>
                  </div>
                ) : null}
              </div>
            </Stele>
          </Enter>
        ))}
        <Enter delay={130} from="none" marker="unify-strip" style={{position: 'absolute', left: 40, top: 442, width: 1736, height: 140}}>
          <div style={{border: `2px solid ${C.bronze}`, backgroundColor: '#3E3A3218', height: 140, padding: '12px 26px', display: 'flex', alignItems: 'center', gap: 22}}>
            <StoneChip accent={C.bronze} solid>统一法律适用标准</StoneChip>
            <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 10}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
                <StoneChip accent={C.bronze}>司法解释</StoneChip>
                <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>→ 由<Soft color={C.bronze}>审判委员会</Soft>通过</span>
                <span style={{fontSize: 26, fontWeight: 900, color: C.bronze}}>｜</span>
                <StoneChip accent={C.vermilion}>指导性案例</StoneChip>
                <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>→ 可由<Soft color={C.vermilion}>专业委员会</Soft>讨论通过</span>
              </div>
              <div style={{fontSize: 22, fontWeight: 880, color: C.paper, letterSpacing: 1}}>
                口诀：<span style={{color: '#D9B36A'}}>司法解释审委会，指导案例可专委</span> —— 最高人民法院发布
              </div>
            </div>
          </div>
        </Enter>
        <Enter delay={160} from="up" marker="open-concept-chip" style={{position: 'absolute', left: 40, top: 606, width: 1736, height: 110}}>
          <div style={{backgroundColor: C.steleDim, border: `2px solid ${C.steleEdge}`, height: 110, display: 'flex', alignItems: 'center', gap: 18, padding: '0 26px'}}>
            <StoneChip accent={C.moss} solid>开放性概念</StoneChip>
            <span style={{fontSize: 26, fontWeight: 900, color: C.ink}}>
              非正式渊源不止三种：法学理论 · 村规民约 · 居民公约等
            </span>
            <span style={{marginLeft: 'auto', fontSize: 21, fontWeight: 850, color: C.inkSoft}}>均可构成法律决定的大前提材料</span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const SourcesOfLaw = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-meaning-split" {...SCENES.meaningSplit}>
      <MeaningSplitScene />
    </TimelineSequence>
    <TimelineSequence name="02-legislative-ladder" {...SCENES.legislativeLadder}>
      <LegislativeLadderScene />
    </TimelineSequence>
    <TimelineSequence name="03-hierarchy-conflicts" {...SCENES.hierarchyConflicts}>
      <HierarchyConflictsScene />
    </TimelineSequence>
    <TimelineSequence name="04-same-level-conflicts" {...SCENES.sameLevelConflicts}>
      <SameLevelConflictsScene />
    </TimelineSequence>
    <TimelineSequence name="05-informal-sources" {...SCENES.informalSources}>
      <InformalSourcesScene />
    </TimelineSequence>
  </AbsoluteFill>
);
