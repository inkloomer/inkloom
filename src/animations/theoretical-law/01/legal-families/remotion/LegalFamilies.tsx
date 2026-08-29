import type {CSSProperties, ReactNode} from 'react';
import {
  BookCopy,
  BookMarked,
  Brain,
  Flag,
  Gavel,
  Gauge,
  GitMerge,
  Globe,
  Landmark,
  MapPin,
  Scale,
  ScrollText,
} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  walnut: '#3A2E26',
  graining: '#46382E',
  cream: '#EFE6D2',
  creamDim: '#E2D6BD',
  indigo: '#2F4A8A',
  indigoDeep: '#22366A',
  rust: '#9C4E2E',
  rustDeep: '#7C3A20',
  brass: '#A98B4F',
  oxblood: '#6E2B22',
  ink: '#2C241C',
  inkSoft: '#574A3C',
  paper: '#F4EDDD',
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

const HallTab = ({children}: {readonly children: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.oxblood, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2, borderLeft: `6px solid ${C.brass}`}}>
    {children}
  </span>
);

const Soft = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}24`, padding: '2px 9px'}}>{children}</span>
);

const HallChip = ({accent = C.brass, children, solid = false}: {readonly accent?: string; readonly children: ReactNode; readonly solid?: boolean}) => (
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

const OxbloodSeal = ({children, color = C.oxblood, delay = 0, size = 30}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number; readonly size?: number}) => {
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

const InkUnderline = ({children, color = C.oxblood, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

const Panel = ({
  accent = C.indigo,
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
      backgroundColor: C.cream,
      border: `2px solid ${C.brass}`,
      ...style,
    }}
  >
    <span style={{position: 'absolute', left: 0, top: 0, width: 12, height: '100%', backgroundColor: accent}} />
    {children}
  </div>
);

const HallOrdinal = ({index}: {readonly index: number}) => (
  <span
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      width: 44,
      height: 44,
      backgroundColor: C.brass,
      color: C.walnut,
      fontSize: 24,
      fontWeight: 950,
    }}
  >
    {String(index).padStart(2, '0')}
  </span>
);

const Shell = ({children, code, kicker, title}: {readonly children: ReactNode; readonly code: string; readonly kicker: string; readonly title: string}) => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{
      backgroundColor: C.walnut,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(0deg, transparent 0 95px, ${C.graining} 95px 96px), repeating-linear-gradient(90deg, transparent 0 95px, ${C.graining} 95px 96px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `2px solid ${C.brass}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.oxblood, borderLeft: `8px solid ${C.brass}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 19 · {code}</span>
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

export const FamilyGatesScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="families-heading" data-final-knowledge="tradition-note" data-final-knowledge="civil-gate" data-final-knowledge="common-gate" data-final-knowledge="socialist-gate" */
  return (
    <Shell code="法系" kicker="历史传统分家" title="法系与三大法系">
      <div
        data-layout="definition-plaque-with-family-gates"
        data-visual-anchor="concept-icon"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="definition-claim,three-families,tradition-note"
        data-focal-rule="families-classify-law-by-historical-tradition"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="none" style={{position: 'absolute', left: 0, top: 10}}>
          <HallTab>法系 · 三大家族</HallTab>
        </Enter>
        <Enter delay={14} from="down" marker="families-heading" style={{position: 'absolute', left: 40, top: 0, width: 1736, height: 108}}>
          <div style={{backgroundColor: C.cream, border: `3px solid ${C.brass}`, height: 108, display: 'flex', alignItems: 'center', gap: 22, padding: '0 30px'}}>
            <BookMarked size={40} color={C.indigo} strokeWidth={2.2} />
            <span style={{fontSize: 27, fontWeight: 900, color: C.ink}}>
              法系＝按<InkUnderline delay={44} color={C.indigoDeep}>历史传统和外部特征</InkUnderline>对法所作的分类 —— 凡属同一传统的法律就构成一个法系
            </span>
          </div>
        </Enter>
        {[
          {marker: 'civil-gate', icon: Landmark, accent: C.indigo, name: '民法法系', note: '古罗马法 →《法国民法典》传统', alias: '大陆法系 · 罗-德 · 法典法系'},
          {marker: 'common-gate', icon: Gavel, accent: C.rust, name: '普通法法系', note: '英国中世纪法律 → 普通法传统', alias: '英国法系 · 判例法系 · 英美法系'},
          {marker: 'socialist-gate', icon: Flag, accent: C.brass, name: '社会主义法系', note: '以苏联和东欧社会主义国家法律为代表', alias: '当代世界主要法系之一'},
        ].map((gate, index) => (
          <Enter
            key={gate.marker}
            delay={40 + index * 26}
            from="up"
            marker={gate.marker}
            style={{position: 'absolute', left: 40 + index * 592, top: 132, width: 552, height: 300}}
          >
            <Panel accent={gate.accent} style={{left: 0, top: 0, width: 552, height: 300}}>
              <div style={{padding: '26px 24px 20px 40px', display: 'flex', flexDirection: 'column', gap: 14}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
                  <gate.icon size={44} color={gate.accent} strokeWidth={2.2} />
                  <span style={{fontSize: 34, fontWeight: 950, color: C.ink}}>{gate.name}</span>
                </div>
                <div style={{fontSize: 24, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>{gate.note}</div>
                <div style={{marginTop: 'auto', display: 'flex', flexWrap: 'wrap', gap: 8}}>
                  <HallChip accent={gate.accent}>{gate.alias}</HallChip>
                </div>
              </div>
            </Panel>
          </Enter>
        ))}
        <Enter delay={124} marker="tradition-note" style={{position: 'absolute', left: 40, top: 466, width: 1736, height: 116}}>
          <div style={{border: `2px solid ${C.brass}`, backgroundColor: C.graining, height: 116, display: 'flex', alignItems: 'center', gap: 20, padding: '0 28px'}}>
            <HallOrdinal index={3} />
            <span style={{fontSize: 26, fontWeight: 900, color: C.paper}}>
              当代世界主要法系是<Soft color={C.brass}>三个</Soft> —— 民法法系 · 普通法法系 · 社会主义法系
            </span>
            <span style={{marginLeft: 'auto'}}>
              <OxbloodSeal delay={152} size={26}>传统分家</OxbloodSeal>
            </span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const TwinCrestsScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="crests-heading" data-final-knowledge="civil-crest" data-final-knowledge="common-crest" data-final-knowledge="misfit-regions" */
  return (
    <Shell code="两大法系" kicker="面对面的两大家族" title="民法法系与普通法法系">
      <div
        data-layout="twin-crest-plates-with-alias-scrolls"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="civil-crest,common-crest,misfit-regions"
        data-focal-rule="two-traditions-descend-from-rome-and-medieval-england"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="none" style={{position: 'absolute', left: 0, top: 10}}>
          <HallTab>两大法系 · 双 crest</HallTab>
        </Enter>
        <Enter delay={14} from="down" marker="crests-heading" style={{position: 'absolute', left: 340, top: 0, width: 1100}}>
          <div style={{backgroundColor: C.cream, border: `3px solid ${C.brass}`, padding: '10px 26px', textAlign: 'center'}}>
            <span style={{fontSize: 33, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              一个源自<InkUnderline delay={40} color={C.indigoDeep}>罗马</InkUnderline>，一个源自<InkUnderline delay={56} color={C.rustDeep}>中世纪英格兰</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={36} from="left" marker="civil-crest" style={{position: 'absolute', left: 40, top: 108, width: 852, height: 372}}>
          <Panel accent={C.indigo} style={{left: 0, top: 0, width: 852, height: 372}}>
            <div style={{padding: '24px 24px 18px 40px', display: 'flex', flexDirection: 'column', gap: 13}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
                <Landmark size={44} color={C.indigo} strokeWidth={2.2} />
                <span style={{fontSize: 34, fontWeight: 950, color: C.ink}}>民法法系</span>
                <HallChip accent={C.indigo} solid>大陆法系</HallChip>
              </div>
              <div style={{fontSize: 24, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
                以<Soft color={C.indigo}>古罗马法</Soft>、特别是 19 世纪初<Soft color={C.indigo}>《法国民法典》</Soft>为传统
              </div>
              <div style={{fontSize: 23, fontWeight: 900, color: C.inkSoft, letterSpacing: 2}}>别名</div>
              <div style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
                <ScrollText size={30} color={C.brass} strokeWidth={2.2} />
                <HallChip accent={C.indigo}>罗马-德意志法系</HallChip>
                <HallChip accent={C.indigo}>法典法系</HallChip>
              </div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={64} from="right" marker="common-crest" style={{position: 'absolute', left: 924, top: 108, width: 852, height: 372}}>
          <Panel accent={C.rust} style={{left: 0, top: 0, width: 852, height: 372}}>
            <div style={{padding: '24px 24px 18px 40px', display: 'flex', flexDirection: 'column', gap: 13}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
                <Gavel size={44} color={C.rust} strokeWidth={2.2} />
                <span style={{fontSize: 34, fontWeight: 950, color: C.ink}}>普通法法系</span>
                <HallChip accent={C.rust} solid>英美法系</HallChip>
              </div>
              <div style={{fontSize: 24, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
                以<Soft color={C.rust}>英国中世纪的法律</Soft>、特别是以<Soft color={C.rust}>普通法</Soft>为基础和传统
              </div>
              <div style={{fontSize: 23, fontWeight: 900, color: C.inkSoft, letterSpacing: 2}}>别名</div>
              <div style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
                <ScrollText size={30} color={C.brass} strokeWidth={2.2} />
                <HallChip accent={C.rust}>英国法系</HallChip>
                <HallChip accent={C.rust}>判例法系</HallChip>
              </div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={140} marker="misfit-regions" style={{position: 'absolute', left: 40, top: 506, width: 1736, height: 118}}>
          <div style={{border: `2px solid ${C.brass}`, backgroundColor: C.graining, height: 118, display: 'flex', alignItems: 'center', gap: 18, padding: '0 28px'}}>
            <MapPin size={36} color={C.brass} strokeWidth={2.2} />
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              看似英美法系<Soft color={C.brass}>实为大陆法系</Soft>：
            </span>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 8}}>
              <HallChip accent={C.indigo} solid>英国的苏格兰</HallChip>
              <HallChip accent={C.indigo} solid>加拿大的魁北克</HallChip>
              <HallChip accent={C.indigo} solid>美国的路易斯安那</HallChip>
              <HallChip accent={C.indigo} solid>南非</HallChip>
              <HallChip accent={C.indigo} solid>菲律宾</HallChip>
            </div>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const MacroLanesScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="lanes-heading" data-final-knowledge="macro-lanes" data-final-knowledge="degree-note" */
  const lanes = [
    {icon: Brain, dim: '思维方式', civil: '演绎性思维', common: '归纳性思维 · 注重类比推理'},
    {icon: ScrollText, dim: '法的渊源', civil: '正式渊源只是制定法', common: '制定法、判例法都是正式渊源'},
    {icon: GitMerge, dim: '法律分类', civil: '以公法与私法为基础', common: '以普通法与衡平法为基本分类'},
    {icon: Scale, dim: '诉讼程序', civil: '纠问制 · 奉行职权主义', common: '对抗制 · 奉行当事人主义'},
    {icon: BookCopy, dim: '法典编纂', civil: '大规模法典编纂', common: '不倾向系统法典编纂'},
  ];
  return (
    <Shell code="宏观区别" kicker="五个维度" title="两大法系的宏观区别">
      <div
        data-layout="five-comparison-lanes"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="five-dimensions,paired-lanes"
        data-focal-rule="five-dimensions-pair-the-two-traditions-across-the-hall"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="none" style={{position: 'absolute', left: 0, top: 10}}>
          <HallTab>宏观区别 · 五维对照</HallTab>
        </Enter>
        <Enter delay={14} from="down" marker="lanes-heading" style={{position: 'absolute', left: 40, top: 0, width: 1736, height: 92}}>
          <div style={{backgroundColor: C.cream, border: `3px solid ${C.brass}`, height: 92, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 30}}>
            <span style={{fontSize: 30, fontWeight: 950, color: C.indigoDeep, width: 300, textAlign: 'center'}}>民法法系</span>
            <span style={{fontSize: 26, fontWeight: 950, color: C.inkSoft, letterSpacing: 4, fontFamily: 'var(--inkloom-animation-title)'}}>五维对照</span>
            <span style={{fontSize: 30, fontWeight: 950, color: C.rustDeep, width: 300, textAlign: 'center'}}>普通法法系</span>
          </div>
        </Enter>
        <Enter delay={40} from="up" marker="macro-lanes" style={{position: 'absolute', left: 40, top: 112, width: 1736, height: 470}}>
          <div style={{position: 'absolute', left: 0, top: 0, width: 1736, height: 470, display: 'flex', flexDirection: 'column', gap: 10}}>
            {lanes.map((lane, index) => (
              <div key={lane.dim} style={{height: 86, backgroundColor: C.cream, border: `2px solid ${C.brass}`, display: 'flex', alignItems: 'center'}}>
                <div style={{width: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, borderRight: `2px solid ${C.brass}`, height: '100%', backgroundColor: C.creamDim}}>
                  <lane.icon size={30} color={C.indigo} strokeWidth={2.2} />
                  <span style={{fontSize: 25, fontWeight: 950, color: C.ink}}>{lane.dim}</span>
                </div>
                <div style={{flex: 1, textAlign: 'center', fontSize: 24, fontWeight: 880, color: C.indigoDeep}}>{lane.civil}</div>
                <div style={{width: 4, height: '70%', backgroundColor: C.brass}} />
                <div style={{flex: 1, textAlign: 'center', fontSize: 24, fontWeight: 880, color: C.rustDeep}}>{lane.common}</div>
              </div>
            ))}
          </div>
        </Enter>
        <Enter delay={160} marker="degree-note" style={{position: 'absolute', left: 40, top: 606, width: 1736, height: 94}}>
          <div style={{border: `2px solid ${C.brass}`, backgroundColor: C.graining, height: 94, display: 'flex', alignItems: 'center', gap: 16, padding: '0 26px'}}>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              注意：以上区别<Soft color={C.brass}>多为程度上的</Soft>，并非绝对的有或无
            </span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const DegreeFootnotesScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="footnotes-heading" data-final-knowledge="degree-plate" data-final-knowledge="globalization-plate" data-final-knowledge="exam-chips" */
  return (
    <Shell code="点睛" kicker="程度差异 · 全球化" title="点睛：程度差异与融合">
      <div
        data-layout="two-footnote-plates-with-exam-chips"
        data-visual-anchor="concept-icon"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="degree-difference,globalization-note,exam-judgments"
        data-focal-rule="differences-are-of-degree-and-shrinking-under-globalization"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="none" style={{position: 'absolute', left: 0, top: 10}}>
          <HallTab>点睛 · 两条注脚</HallTab>
        </Enter>
        <Enter delay={14} from="down" marker="footnotes-heading" style={{position: 'absolute', left: 340, top: 0, width: 1100}}>
          <div style={{backgroundColor: C.cream, border: `3px solid ${C.brass}`, padding: '10px 26px', textAlign: 'center'}}>
            <span style={{fontSize: 33, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              区别是<InkUnderline delay={40}>程度上的</InkUnderline>，并且正在缩小
            </span>
          </div>
        </Enter>
        <Enter delay={36} from="left" marker="degree-plate" style={{position: 'absolute', left: 40, top: 108, width: 852, height: 322}}>
          <Panel accent={C.indigo} style={{left: 0, top: 0, width: 852, height: 322}}>
            <div style={{padding: '24px 24px 18px 40px', display: 'flex', flexDirection: 'column', gap: 14}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
                <Gauge size={42} color={C.indigo} strokeWidth={2.2} />
                <span style={{fontSize: 32, fontWeight: 950, color: C.ink}}>区别多为程度上的</span>
              </div>
              <div style={{fontSize: 24, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
                并非绝对的有或无：
              </div>
              <div style={{fontSize: 24, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
                民法法系<Soft color={C.indigo}>也采用归纳类比</Soft>
              </div>
              <div style={{fontSize: 24, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
                英美法系也有<Soft color={C.rust}>相当数量的法典编纂</Soft>
              </div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={64} from="right" marker="globalization-plate" style={{position: 'absolute', left: 924, top: 108, width: 852, height: 322}}>
          <Panel accent={C.rust} style={{left: 0, top: 0, width: 852, height: 322}}>
            <div style={{padding: '24px 24px 18px 40px', display: 'flex', flexDirection: 'column', gap: 16}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
                <Globe size={42} color={C.rust} strokeWidth={2.2} />
                <span style={{fontSize: 32, fontWeight: 950, color: C.ink}}>全球化缩小差别</span>
              </div>
              <div style={{fontSize: 25, fontWeight: 880, color: C.ink, lineHeight: 1.6}}>
                两大法系的总体差别正在<Soft color={C.rust}>不断缩小</Soft>
              </div>
              <div style={{marginTop: 'auto'}}>
                <OxbloodSeal delay={120} size={26}>趋同</OxbloodSeal>
              </div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={130} marker="exam-chips" style={{position: 'absolute', left: 40, top: 456, width: 1736, height: 150}}>
          <div style={{border: `2px solid ${C.brass}`, backgroundColor: C.graining, height: 150, padding: '16px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12}}>
            <div style={{fontSize: 23, fontWeight: 900, color: C.brass, letterSpacing: 2}}>易错判断</div>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 10}}>
              <HallChip accent={C.indigo} solid>阶级本质并无不同</HallChip>
              <HallChip accent={C.indigo} solid>两者都有法典编纂</HallChip>
              <HallChip accent={C.indigo} solid>差别在“正式渊源”：制定法＋判例法兼有</HallChip>
              <HallChip accent={C.rust} solid>法的现代化：有内发型也有外源型</HallChip>
            </div>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const LegalFamilies = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-family-gates" {...SCENES.familyGates}>
      <FamilyGatesScene />
    </TimelineSequence>
    <TimelineSequence name="02-twin-crests" {...SCENES.twinCrests}>
      <TwinCrestsScene />
    </TimelineSequence>
    <TimelineSequence name="03-macro-lanes" {...SCENES.macroLanes}>
      <MacroLanesScene />
    </TimelineSequence>
    <TimelineSequence name="04-degree-footnotes" {...SCENES.degreeFootnotes}>
      <DegreeFootnotesScene />
    </TimelineSequence>
  </AbsoluteFill>
);
