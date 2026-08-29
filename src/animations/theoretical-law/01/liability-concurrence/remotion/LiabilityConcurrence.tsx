import type {CSSProperties, ReactNode} from 'react';
import {Baby, FileSignature, Gavel, Hammer, Layers, Scale, ShieldAlert, Split, User} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  kraft: '#6B5A40',
  kraftDeep: '#574834',
  graph: '#F4EDDC',
  graphDim: '#E6DDC6',
  graphEdge: '#6E6250',
  ink: '#2B2721',
  inkSoft: '#59503F',
  teal: '#2F7A72',
  tealPale: '#D2E0DA',
  brass: '#A9822F',
  brassPale: '#E7D5A4',
  carmine: '#A93B32',
  carminePale: '#EFD0C8',
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
      backgroundColor: C.kraft,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(0deg, transparent 0 118px, ${C.paper}08 118px 119px), repeating-linear-gradient(90deg, transparent 0 118px, ${C.paper}08 118px 119px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.brass}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.brassPale}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.kraftDeep, borderLeft: `8px solid ${C.brass}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 13 · {code}</span>
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
      <span style={{fontSize: 21, fontWeight: 850, color: C.brassPale, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Graph = ({children, marker, style, tone}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.graph, border: `2px solid ${C.graphEdge}`, color: C.ink, position: 'relative', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: C.brass}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: C.brass}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: C.brass}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: C.brass}} />
    {children}
  </div>
);

const LabelTab = ({children, bar = C.brass}: {readonly children: ReactNode; readonly bar?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', padding: '5px 14px', backgroundColor: C.kraftDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{children}</span>
);

const BenchChip = ({tone = C.teal, children, solid = false}: {readonly tone?: string; readonly children: ReactNode; readonly solid?: boolean}) => (
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

const Stamp = ({children, delay = 0, size = 26, tone = C.carmine}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

const InkUnderline = ({children, color = C.carmine, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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
  <div style={{backgroundColor: 'rgba(87, 72, 52, 0.85)', border: `2px solid ${C.brass}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

export const DefinitionAnatomyScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="definition-heading" data-final-knowledge="act-clash-stage" data-final-knowledge="trait-checklist" data-final-knowledge="definition-chain" */
  const rayLeft = prog(frame, 84, 20);
  const rayRight = prog(frame, 96, 20);
  return (
    <Shell code="01" kicker="竞合定义" title="一行为，撞上数个责任">
      <div
        data-layout="one-act-two-liability-clash"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="single-actor-ray,liability-zone-landing,trait-checklist"
        data-focal-rule="one-act-of-one-subject-hits-several-conflicting-liabilities"
        data-focal-channels="icon,connector,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="definition-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.graph, border: `3px solid ${C.graphEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              竞合＝一个事实引出数个<InkUnderline delay={36}>冲突的责任</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="up" marker="act-clash-stage" style={{position: 'absolute', left: 40, top: 104, width: 900, height: 430}}>
          <div style={{position: 'absolute', left: 0, top: 0, width: 900, height: 430}}>
            <Graph tone={C.teal} style={{position: 'absolute', left: 230, top: 0, width: 440, height: 108, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16}}>
              <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 26, fontWeight: 950, color: C.ink}}>
                <User size={34} color={C.teal} strokeWidth={2.3} />
                同一法律主体
              </span>
              <span style={{width: 2, height: 48, backgroundColor: C.graphEdge}} />
              <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 26, fontWeight: 950, color: C.ink}}>
                <Hammer size={32} color={C.carmine} strokeWidth={2.3} />
                一个行为
              </span>
            </Graph>
            <span style={{position: 'absolute', left: 210, top: 132, width: 250, height: 5, backgroundColor: C.teal, opacity: rayLeft, scaleX: rayLeft, transformOrigin: 'left center', rotate: '24deg'}} />
            <span style={{position: 'absolute', left: 450, top: 132, width: 250, height: 5, backgroundColor: C.brass, opacity: rayRight, scaleX: rayRight, transformOrigin: 'right center', rotate: '-24deg'}} />
            <Graph tone={C.teal} style={{position: 'absolute', left: 10, top: 268, width: 400, height: 150, padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 8}}>
              <span style={{fontSize: 27, fontWeight: 950, color: C.ink}}>构成要件 · 甲</span>
              <span style={{fontSize: 22, fontWeight: 880, color: C.inkSoft}}>触犯规范甲 → 如：违约责任</span>
              <BenchChip tone={C.teal}>产生责任甲</BenchChip>
            </Graph>
            <Graph tone={C.brass} style={{position: 'absolute', left: 490, top: 268, width: 400, height: 150, padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 8}}>
              <span style={{fontSize: 27, fontWeight: 950, color: C.ink}}>构成要件 · 乙</span>
              <span style={{fontSize: 22, fontWeight: 880, color: C.inkSoft}}>触犯规范乙 → 如：侵权责任</span>
              <BenchChip tone={C.brass} solid>
                产生责任乙
              </BenchChip>
            </Graph>
            <span style={{position: 'absolute', left: 442, top: 262, height: 162, borderLeft: `4px dashed ${C.carmine}`, opacity: prog(frame, 130, 18)}} />
            <div style={{position: 'absolute', left: 350, top: 210, opacity: prog(frame, 130, 18)}}>
              <Stamp delay={136} size={27}>责任冲突</Stamp>
            </div>
          </div>
        </Enter>
        <Enter delay={52} from="right" marker="trait-checklist" style={{position: 'absolute', left: 980, top: 104, width: 836, height: 430}}>
          <Graph tone={C.carmine} style={{height: '100%', padding: '18px 24px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <LabelTab bar={C.carmine}>竞合四特点 · 层层把关</LabelTab>
            {[
              {n: '01', text: <>数个责任的<Soft color={C.carmine}>主体同一</Soft>——不同主体的责任分别追究·无冲突</>},
              {n: '02', text: <>主体实施了<Soft color={C.carmine}>一个行为</Soft>——数行为触犯数规定→分别追究·不按竞合</>},
              {n: '03', text: <>行为符合<Soft color={C.teal}>两个以上构成要件</Soft>——同时触犯数个法律规范</>},
              {n: '04', text: <>数个责任<Soft color={C.carmine}>相互冲突</Soft>——不能吸收·不能并存·同究有悖原则精神</>},
            ].map((row) => (
              <div key={row.n} style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, backgroundColor: C.brass, color: C.paper, fontSize: 21, fontWeight: 950, flexShrink: 0}}>{row.n}</span>
                <span style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.45}}>{row.text}</span>
              </div>
            ))}
          </Graph>
        </Enter>
        <Enter delay={170} from="up" marker="definition-chain" style={{position: 'absolute', left: 40, top: 570, width: 1736}}>
          <DarkStrip style={{height: 108}}>
            <span style={{padding: '4px 13px', backgroundColor: C.brass, color: C.kraftDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>定义链</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>
              某种<Soft color={C.tealPale}>法律事实</Soft>的出现 <span style={{color: C.brassPale}}>→</span> 导致<Soft color={C.tealPale}>两种以上的法律责任</Soft>产生 <span style={{color: C.brassPale}}>→</span> 这些责任<Soft color={C.carminePale}>相互冲突</Soft>
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const CauseChoiceScene = () => {
  /* data-final-knowledge="cause-heading" data-final-knowledge="overlap-mechanism" data-final-knowledge="path-chain" data-final-knowledge="choice-fork" */
  return (
    <Shell code="02" kicker="原因与出路" title="规范为何重合，责任怎么分流">
      <div
        data-layout="overlap-mechanism-with-choice-fork"
        data-visual-anchor="document-fork"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="regulation-overlap-mechanism,concurrence-path-chain,private-public-choice-fork"
        data-focal-rule="regulation-overlap-creates-concurrence-and-fields-split-the-answer"
        data-focal-channels="icon,connector,contrast,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="cause-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.graph, border: `3px solid ${C.graphEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              规范<InkUnderline delay={36}>抽象</InkUnderline>×关系<InkUnderline color={C.teal} delay={48}>复杂</InkUnderline>＝调整重合
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="right" marker="overlap-mechanism" style={{position: 'absolute', left: 40, top: 104, width: 900, height: 420}}>
          <Graph tone={C.teal} style={{height: '100%', padding: '20px 26px 24px', display: 'flex', flexDirection: 'column', gap: 14}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <Layers size={40} color={C.teal} strokeWidth={2.3} />
              <LabelTab bar={C.teal}>机制 · 不同规范的重合</LabelTab>
            </div>
            <div style={{position: 'relative', height: 200, marginTop: 4}}>
              <span style={{position: 'absolute', left: 120, top: 10, width: 280, height: 180, border: `3px solid ${C.teal}`, backgroundColor: `${C.teal}1A`}} />
              <span style={{position: 'absolute', left: 320, top: 10, width: 280, height: 180, border: `3px solid ${C.brass}`, backgroundColor: `${C.brass}1A`}} />
              <span style={{position: 'absolute', left: 130, top: 30, fontSize: 24, fontWeight: 950, color: C.ink}}>规范甲 · 一角度</span>
              <span style={{position: 'absolute', left: 430, top: 30, fontSize: 24, fontWeight: 950, color: C.ink}}>规范乙 · 另一角度</span>
              <span style={{position: 'absolute', left: 320, top: 150, fontSize: 26, fontWeight: 950, color: C.carmine, translate: '-50% 0'}}>重合带</span>
            </div>
            <div style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
              不同规范从<Soft color={C.teal}>不同角度</Soft>调整同一类社会关系——一个行为可能<Soft color={C.carmine}>同时触犯数个规范</Soft>
            </div>
          </Graph>
        </Enter>
        <Enter delay={56} from="left" marker="path-chain" style={{position: 'absolute', left: 980, top: 104, width: 836, height: 140}}>
          <Graph tone={C.brass} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
            <LabelTab>路径 · 竞合如何发生</LabelTab>
            <div style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <BenchChip tone={C.carmine} solid>
                <Hammer size={24} strokeWidth={2.3} /> 一个行为
              </BenchChip>
              <span style={{fontSize: 24, fontWeight: 900, color: C.brass}}>→</span>
              <BenchChip tone={C.brass}>同时触犯数规范</BenchChip>
              <span style={{fontSize: 24, fontWeight: 900, color: C.brass}}>→</span>
              <BenchChip tone={C.carmine}>面临数种责任</BenchChip>
            </div>
          </Graph>
        </Enter>
        <Enter delay={90} from="left" marker="choice-fork" style={{position: 'absolute', left: 980, top: 268, width: 836, height: 256}}>
          <Graph tone={C.carmine} style={{height: '100%', padding: '16px 24px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Split size={36} color={C.carmine} strokeWidth={2.3} />
              <LabelTab bar={C.carmine}>初步解决 · 分流处理</LabelTab>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <span style={{fontSize: 25, fontWeight: 950, color: C.ink, width: 170}}>私法领域</span>
              <span style={{fontSize: 24, fontWeight: 900, color: C.brass}}>→</span>
              <BenchChip tone={C.teal} solid>
                尊重当事人选择
              </BenchChip>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <span style={{fontSize: 25, fontWeight: 950, color: C.ink, width: 170}}>公法领域</span>
              <span style={{fontSize: 24, fontWeight: 900, color: C.brass}}>→</span>
              <BenchChip tone={C.carmine} solid>
                <Gavel size={26} strokeWidth={2.3} /> 从一重
              </BenchChip>
            </div>
          </Graph>
        </Enter>
        <Enter delay={160} from="up" style={{position: 'absolute', left: 40, top: 560, width: 1736}}>
          <DarkStrip style={{height: 104}}>
            <span style={{padding: '4px 13px', backgroundColor: C.brass, color: C.kraftDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>一句话</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              规范重合是<Soft color={C.tealPale}>原因</Soft>，分流处理是<Soft color={C.carminePale}>办法</Soft>——私法听选择，公法从一重
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const BoundaryNotesScene = () => {
  /* data-final-knowledge="boundary-heading" data-final-knowledge="cause-plaques" data-final-knowledge="sanction-scale-note" data-final-knowledge="common-case-rail" data-final-knowledge="civil-criminal-note" */
  return (
  <Shell code="03" kicker="边界辨析" title="责从何来，责任与制裁">
    <div
      data-layout="three-cause-plaques-with-sanction-scale"
      data-visual-anchor="comparison-axis"
      data-text-treatments="label-block,chip,external-negation,stamp"
      data-visual-grammar="cause-plaques,sanction-scale-note,common-case-rail"
      data-focal-rule="responsibility-precedes-sanction-but-does-not-force-it"
      data-focal-channels="icon,enclosure,contrast,spatial,annotation"
      style={{position: 'absolute', inset: 0}}
    >
      <Enter delay={6} from="down" marker="boundary-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
        <div style={{backgroundColor: C.graph, border: `3px solid ${C.graphEdge}`, padding: '11px 24px', textAlign: 'center'}}>
          <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
            责任产生的三原因 ＋ <InkUnderline delay={36}>责任与制裁</InkUnderline>的关系
          </span>
        </div>
      </Enter>
      <Enter delay={26} from="left" marker="cause-plaques" style={{position: 'absolute', left: 40, top: 104, width: 1736, height: 176}}>
        <div style={{display: 'flex', gap: 28, height: '100%'}}>
          <Graph tone={C.carmine} style={{flex: 1, padding: '16px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <span style={{display: 'inline-flex', alignItems: 'center', gap: 12, fontSize: 28, fontWeight: 950, color: C.ink}}>
              <ShieldAlert size={36} color={C.carmine} strokeWidth={2.3} />
              一·违法行为
            </span>
            <span style={{fontSize: 22, fontWeight: 880, color: C.inkSoft}}>侵权即其典型</span>
          </Graph>
          <Graph tone={C.teal} style={{flex: 1, padding: '16px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <span style={{display: 'inline-flex', alignItems: 'center', gap: 12, fontSize: 28, fontWeight: 950, color: C.ink}}>
              <FileSignature size={36} color={C.teal} strokeWidth={2.3} />
              二·违约行为
            </span>
            <span style={{fontSize: 22, fontWeight: 880, color: C.inkSoft}}>坏约即担责</span>
          </Graph>
          <Graph tone={C.brass} style={{flex: 1, padding: '16px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <span style={{display: 'inline-flex', alignItems: 'center', gap: 12, fontSize: 28, fontWeight: 950, color: C.ink}}>
              <Baby size={36} color={C.brass} strokeWidth={2.3} />
              三·法律的特别规定
            </span>
            <span style={{fontSize: 22, fontWeight: 880, color: C.inkSoft}}>如：监护人责任 · 雇主责任</span>
          </Graph>
        </div>
      </Enter>
      <Enter delay={80} from="up" marker="sanction-scale-note" style={{position: 'absolute', left: 40, top: 316, width: 850, height: 236}}>
        <Graph tone={C.teal} style={{height: '100%', padding: '18px 24px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Scale size={38} color={C.teal} strokeWidth={2.3} />
            <LabelTab bar={C.teal}>责任与制裁</LabelTab>
          </div>
          <div style={{fontSize: 24, fontWeight: 900, color: C.ink}}>
            责任是制裁的<Soft color={C.teal}>前提</Soft>
          </div>
          <div style={{fontSize: 23, fontWeight: 880, color: C.ink}}>
            有责任 <span style={{color: C.carmine, fontWeight: 950}}>≠</span> 一定有制裁——可被<BenchChip tone={C.carmine}>免除</BenchChip>
          </div>
          <div style={{fontSize: 23, fontWeight: 880, color: C.ink}}>
            有制裁 <span style={{color: C.teal, fontWeight: 950}}>＝</span> 一定有责任
          </div>
        </Graph>
      </Enter>
      <Enter delay={104} from="right" marker="common-case-rail" style={{position: 'absolute', left: 930, top: 316, width: 886, height: 236}}>
        <Graph tone={C.brass} style={{height: '100%', padding: '18px 24px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
          <LabelTab>常见命题 · 高频举例</LabelTab>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: 10}}>
            <BenchChip tone={C.teal}>侵权与违约</BenchChip>
            <BenchChip tone={C.teal}>定金和违约金</BenchChip>
            <BenchChip tone={C.teal}>想象竞合犯</BenchChip>
          </div>
          <div style={{marginTop: 'auto'}}>
            <Stamp delay={170} size={25}>口诀：一人一行 · 多责不容</Stamp>
          </div>
        </Graph>
      </Enter>
      <Enter delay={160} from="up" marker="civil-criminal-note" style={{position: 'absolute', left: 40, top: 586, width: 1736}}>
        <DarkStrip style={{height: 96}}>
          <span style={{padding: '4px 13px', backgroundColor: C.brass, color: C.kraftDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>附带辨析</span>
          <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>
            刑事附带民事诉讼＝同时追究民事与刑事责任——<span style={{color: C.carminePale, fontWeight: 950}}>不属于竞合</span>
          </span>
        </DarkStrip>
      </Enter>
    </div>
  </Shell>
  );
};

export const LiabilityConcurrence = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-definition-anatomy" {...SCENES.definitionAnatomy}>
      <DefinitionAnatomyScene />
    </TimelineSequence>
    <TimelineSequence name="02-cause-choice" {...SCENES.causeChoice}>
      <CauseChoiceScene />
    </TimelineSequence>
    <TimelineSequence name="03-boundary-notes" {...SCENES.boundaryNotes}>
      <BoundaryNotesScene />
    </TimelineSequence>
  </AbsoluteFill>
);
