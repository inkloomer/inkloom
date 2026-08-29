import type {CSSProperties, ReactNode} from 'react';
import {BookCheck, BookX, Gavel, Heart, History, Link, Scale, Sparkles} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  hall: '#274238',
  hallDeep: '#1E332C',
  plate: '#F1E9D2',
  plateDim: '#E2D8BC',
  plateEdge: '#6E6550',
  ink: '#2B2721',
  inkSoft: '#57503F',
  brass: '#A9822F',
  brassPale: '#E3D2A0',
  copper: '#A5603C',
  copperPale: '#EFD6C4',
  crimson: '#A93B32',
  crimsonPale: '#EFD0C8',
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
      backgroundColor: C.hall,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(0deg, transparent 0 136px, ${C.brass}0E 136px 138px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.brass}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.brassPale}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.hallDeep, borderLeft: `8px solid ${C.brass}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 21 · {code}</span>
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

const Plate = ({children, marker, style, tone}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.plate, border: `2px solid ${C.plateEdge}`, color: C.ink, position: 'relative', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.brass}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.brass}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.brass}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.brass}} />
    {children}
  </div>
);

const LabelTab = ({children, bar = C.brass}: {readonly children: ReactNode; readonly bar?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', padding: '5px 14px', backgroundColor: C.hallDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{children}</span>
);

const WeightChip = ({tone = C.brass, children, solid = false}: {readonly tone?: string; readonly children: ReactNode; readonly solid?: boolean}) => (
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

const Stamp = ({children, delay = 0, size = 26, tone = C.crimson}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

const InkUnderline = ({children, color = C.crimson, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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
  <div style={{backgroundColor: 'rgba(30, 51, 44, 0.92)', border: `2px solid ${C.brass}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

export const ConnectionsScene = () => {
  /* data-final-knowledge="connections-heading" data-final-knowledge="bond-ladder" data-final-knowledge="bond-recap" */
  const bonds = [
    {name: '发生学', text: <>都由<Soft color={C.crimson}>原始习惯</Soft>脱胎而来 · 发生发展中相互演化</>},
    {name: '形式归属', text: <>都是<Soft color={C.crimson}>社会规范</Soft>——规范·概括·连续·稳定·效率（程度有别）</>},
    {name: '内容', text: <>都蕴含<Soft color={C.crimson}>社会价值</Soft>——精神和内容相互重叠渗透</>},
    {name: '功能', text: <>都是<Soft color={C.crimson}>社会调控手段</Soft>——维护社会秩序和正义</>},
    {name: '发展水平', text: <>都是<Soft color={C.crimson}>文明进步的标尺</Soft>——互为标志和说明</>},
  ] as const;
  return (
    <Shell code="01" kicker="联系五维" title="法与道德：五重联系">
      <div
        data-layout="five-bond-plate-ladder"
        data-visual-anchor="typographic-sequence"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="origin-bond,norm-bond,value-function-bonds"
        data-focal-rule="law-and-morality-share-origin-norms-values-and-control"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="connections-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.plate, border: `3px solid ${C.plateEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              五个维度上，法与道德<InkUnderline delay={36}>同源同向</InkUnderline>
            </span>
          </div>
        </Enter>
        <div data-final-knowledge="bond-ladder" style={{position: 'absolute', left: 0, top: 0, width: '100%', height: '100%'}}>
          {bonds.map((bond, index) => (
            <Enter key={bond.name} delay={26 + index * 20} from="left" style={{position: 'absolute', left: 40, top: 104 + index * 92, width: 1736, height: 82}}>
              <Plate style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '0 22px'}}>
                <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, backgroundColor: C.brass, color: C.paper, fontSize: 21, fontWeight: 950, flexShrink: 0}}>{String(index + 1).padStart(2, '0')}</span>
                <span style={{fontSize: 26, fontWeight: 950, color: C.ink, width: 190}}>{bond.name}</span>
                <span style={{width: 2, height: 46, backgroundColor: C.plateEdge}} />
                <span style={{fontSize: 23, fontWeight: 880, color: C.ink, flex: 1}}>{bond.text}</span>
              </Plate>
            </Enter>
          ))}
        </div>
        <Enter delay={170} from="up" marker="bond-recap" style={{position: 'absolute', left: 40, top: 592, width: 1736}}>
          <DarkStrip style={{height: 96}}>
            <Link size={34} color={C.brassPale} strokeWidth={2.2} />
            <Scale size={34} color={C.brassPale} strokeWidth={2.2} />
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              同源 · 同类 · 同值 · 同责 · 同尺——<InkUnderline color={C.brassPale} delay={190}>联系五维一体</InkUnderline>
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const DifferencesScene = () => {
  /* data-final-knowledge="differences-heading" data-final-knowledge="norm-attribute-lane" data-final-knowledge="operation-lane" data-final-knowledge="dispute-lane" */
  const lanes = [
    {marker: 'norm-attribute-lane', group: '规范属性', pairs: [['建构性', '非建构性'], ['确定性', '模糊性'], ['一元性', '多元性']], gloss: '生成方式 · 行为标准 · 存在形态'},
    {marker: 'operation-lane', group: '调控运作', pairs: [['外在侧重', '内在关注'], ['程序性', '非程序性'], ['外在强制', '内在约束']], gloss: '调整机制 · 运作机制 · 强制方式'},
    {marker: 'dispute-lane', group: '纠纷解决', pairs: [['可诉性', '不可诉性']], gloss: '解决方式'},
  ] as const;
  return (
    <Shell code="02" kicker="区别七对" title="法与道德：七对反义">
      <div
        data-layout="seven-difference-split-lanes"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="norm-attribute-pairs,operation-pairs,dispute-pair"
        data-focal-rule="law-is-constructed-certain-and-coercive-where-morality-grows-and-inwardly-binds"
        data-focal-channels="icon,contrast,connector,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="differences-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.plate, border: `3px solid ${C.plateEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              左秤是<InkUnderline color={C.brass} delay={36}>法</InkUnderline>，右秤是<InkUnderline color={C.copper} delay={48}>道德</InkUnderline>
            </span>
          </div>
        </Enter>
        {lanes.map((lane, index) => (
          <Enter key={lane.group} delay={28 + index * 26} from="left" marker={lane.marker} style={{position: 'absolute', left: 40, top: 104 + index * 168, width: 1736, height: 150}}>
            <Plate style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
                <LabelTab bar={index === 0 ? C.brass : index === 1 ? C.copper : C.crimson}>{lane.group}</LabelTab>
                <span style={{fontSize: 21, fontWeight: 850, color: C.inkSoft}}>{lane.gloss}</span>
                <span style={{marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 10}}>
                  {index === 0 ? <Gavel size={30} color={C.brass} strokeWidth={2.3} /> : <span style={{width: 30}} />}
                  {index === 0 ? <Heart size={30} color={C.copper} strokeWidth={2.3} /> : <span style={{width: 30}} />}
                </span>
              </div>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center'}}>
                {lane.pairs.map(([law, moral]) => (
                  <span key={law} style={{display: 'inline-flex', alignItems: 'center', gap: 8}}>
                    <WeightChip tone={C.brass} solid>
                      {law}
                    </WeightChip>
                    <span style={{fontSize: 22, fontWeight: 900, color: C.inkSoft}}>对</span>
                    <WeightChip tone={C.copper} solid>
                      {moral}
                    </WeightChip>
                    <span style={{width: 18}} />
                  </span>
                ))}
              </div>
            </Plate>
          </Enter>
        ))}
        <Enter delay={190} from="up" style={{position: 'absolute', left: 40, top: 616, width: 1736}}>
          <DarkStrip style={{height: 72}}>
            <span style={{padding: '4px 13px', backgroundColor: C.brass, color: C.hallDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>读法</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>
              每对前词属<Soft color={C.brassPale}>法</Soft>，后词属<Soft color={C.copperPale}>道德</Soft>——七对反义一网打尽
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const NatureDebateScene = () => {
  /* data-final-knowledge="debate-heading" data-final-knowledge="natural-law-plate" data-final-knowledge="positivist-plate" data-final-knowledge="essence-dispute-note" */
  return (
    <Shell code="03" kicker="本质之争" title="恶法非法，还是恶法亦法">
      <div
        data-layout="bad-law-verdict-duel"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="natural-law-claim,positivist-claim,essence-dispute-note"
        data-focal-rule="schools-split-on-whether-morality-enters-the-essence-of-law"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="debate-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.plate, border: `3px solid ${C.plateEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              争点一：法与道德在<InkUnderline delay={36}>本质</InkUnderline>上有无必然联系
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="natural-law-plate" style={{position: 'absolute', left: 40, top: 104, width: 800, height: 380}}>
          <Plate tone={C.crimson} style={{height: '100%', padding: '20px 26px 22px', display: 'flex', flexDirection: 'column', gap: 14}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <BookX size={40} color={C.crimson} strokeWidth={2.3} />
              <LabelTab bar={C.crimson}>肯定说 · 自然法学派</LabelTab>
            </div>
            <div style={{fontSize: 24, fontWeight: 880, color: C.ink, lineHeight: 1.55, marginTop: 4}}>
              肯定法与道德存在<Soft color={C.crimson}>本质上的必然联系</Soft>
            </div>
            <div style={{fontSize: 24, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              法在本质上是<Soft color={C.crimson}>内涵道德因素</Soft>的概念
            </div>
            <div style={{marginTop: 'auto', textAlign: 'center'}}>
              <Stamp delay={110} size={32}>恶法非法</Stamp>
            </div>
          </Plate>
        </Enter>
        <Enter delay={56} from="right" marker="positivist-plate" style={{position: 'absolute', left: 976, top: 104, width: 800, height: 380}}>
          <Plate tone={C.brass} style={{height: '100%', padding: '20px 26px 22px', display: 'flex', flexDirection: 'column', gap: 14}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <BookCheck size={40} color={C.brass} strokeWidth={2.3} />
              <LabelTab>否定说 · 分析实证主义</LabelTab>
            </div>
            <div style={{fontSize: 24, fontWeight: 880, color: C.ink, lineHeight: 1.55, marginTop: 4}}>
              否定法与道德存在<Soft color={C.brass}>本质上的必然联系</Soft>
            </div>
            <div style={{fontSize: 24, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              法律的效力<Soft color={C.brass}>不系于道德</Soft>
            </div>
            <div style={{marginTop: 'auto', textAlign: 'center'}}>
              <Stamp delay={130} size={32} tone={C.brass}>恶法亦法</Stamp>
            </div>
          </Plate>
        </Enter>
        <Enter delay={150} from="none" marker="essence-dispute-note" style={{position: 'absolute', left: 740, top: 510, width: 520}}>
          <div style={{border: `2px solid ${C.plateEdge}`, backgroundColor: C.plateDim, padding: '10px 16px', textAlign: 'center'}}>
            <span style={{fontSize: 22, fontWeight: 950, color: C.ink}}>唯此一争在「本质」——内容与功能之争在下一碑</span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const EvolutionScene = () => {
  /* data-final-knowledge="evolution-heading" data-final-knowledge="before-column" data-final-knowledge="after-column" data-final-knowledge="rule-of-law-verdict" */
  return (
    <Shell code="04" kicker="古今之变" title="内容与功能的近代转向">
      <div
        data-layout="before-after-evolution-board"
        data-visual-anchor="boundary"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="content-overlap-shift,function-emphasis-shift,rule-of-law-verdict"
        data-focal-rule="modern-law-limits-moral-overlap-and-takes-the-lead-in-control"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="evolution-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.plate, border: `3px solid ${C.plateEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              争点二·三：内容上的<InkUnderline delay={36}>重合限度</InkUnderline>与功能上的<InkUnderline color={C.brass} delay={48}>主次</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="before-column" style={{position: 'absolute', left: 40, top: 104, width: 850, height: 384}}>
          <Plate tone={C.copper} style={{height: '100%', padding: '18px 24px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <History size={36} color={C.copper} strokeWidth={2.3} />
              <LabelTab bar={C.copper}>近代以前</LabelTab>
            </div>
            <div style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              <span style={{fontWeight: 950, color: C.copper}}>内容：</span>法与道德<Soft color={C.copper}>重合度极高</Soft>，甚至浑然一体——道德义务尽量转为法律义务
            </div>
            <div style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              <span style={{fontWeight: 950, color: C.copper}}>功能：</span>强调道德的<Soft color={C.copper}>首要地位</Soft>，法重在其<Soft color={C.crimson}>惩治功能</Soft>
            </div>
          </Plate>
        </Enter>
        <Enter delay={56} from="right" marker="after-column" style={{position: 'absolute', left: 930, top: 104, width: 886, height: 384}}>
          <Plate tone={C.brass} style={{height: '100%', padding: '18px 24px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Sparkles size={36} color={C.brass} strokeWidth={2.3} />
              <LabelTab>近现代</LabelTab>
            </div>
            <div style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              <span style={{fontWeight: 950, color: C.brass}}>内容：</span>只将<Soft color={C.brass}>最低限度的道德</Soft>转为法律义务，注意明确<Soft color={C.brass}>调整界限</Soft>
            </div>
            <div style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              <span style={{fontWeight: 950, color: C.brass}}>功能：</span>强调法律调整的<Soft color={C.brass}>突出作用</Soft>
            </div>
          </Plate>
        </Enter>
        <Enter delay={150} from="up" marker="rule-of-law-verdict" style={{position: 'absolute', left: 40, top: 520, width: 1736}}>
          <DarkStrip style={{height: 110}}>
            <span style={{padding: '4px 13px', backgroundColor: C.brass, color: C.hallDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>转向</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>
              依法治国成为<Soft color={C.brassPale}>普遍政治主张</Soft>——但社会治理主要靠法，不等于二者作用相同
            </span>
            <span style={{marginLeft: 'auto'}}>
              <Stamp delay={180} size={24}>作用并不相同</Stamp>
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const LawAndMorality = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-connections" {...SCENES.connections}>
      <ConnectionsScene />
    </TimelineSequence>
    <TimelineSequence name="02-differences" {...SCENES.differences}>
      <DifferencesScene />
    </TimelineSequence>
    <TimelineSequence name="03-nature-debate" {...SCENES.natureDebate}>
      <NatureDebateScene />
    </TimelineSequence>
    <TimelineSequence name="04-content-function-evolution" {...SCENES.evolution}>
      <EvolutionScene />
    </TimelineSequence>
  </AbsoluteFill>
);
