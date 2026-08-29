import type {CSSProperties, ReactNode} from 'react';
import {
  ArrowLeftRight,
  BadgeCheck,
  Ban,
  BookMarked,
  Compass,
  FileText,
  Gavel,
  Landmark,
  Layers,
  Lightbulb,
  Scale,
} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  night: '#223231',
  graticule: '#2C403E',
  brass: '#B08D46',
  brassDeep: '#8A6C30',
  chart: '#EFE6CF',
  chartDim: '#E3D8BC',
  ink: '#2E2A22',
  inkSoft: '#5A5240',
  teal: '#4E8A7C',
  tealDeep: '#376357',
  coral: '#C96A4E',
  coralDeep: '#A04E36',
  paper: '#F2EFE4',
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

const ChartTab = ({children}: {readonly children: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.brassDeep, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2, borderLeft: `6px solid ${C.coral}`}}>
    {children}
  </span>
);

const Soft = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}26`, padding: '2px 9px'}}>{children}</span>
);

const ChartChip = ({accent = C.teal, children, solid = false}: {readonly accent?: string; readonly children: ReactNode; readonly solid?: boolean}) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '4px 12px',
      border: `2px solid ${accent}`,
      backgroundColor: solid ? accent : `${accent}14`,
      fontSize: 23,
      fontWeight: 870,
      color: solid ? C.paper : C.ink,
    }}
  >
    {children}
  </span>
);

const SealMark = ({children, color = C.coralDeep, delay = 0, size = 30}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number; readonly size?: number}) => {
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

const InkUnderline = ({children, color = C.coralDeep, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

const Chart = ({
  accent = C.teal,
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
      backgroundColor: C.chart,
      border: `2px solid ${C.brass}`,
      ...style,
    }}
  >
    <span style={{position: 'absolute', left: 0, top: 0, width: 12, height: '100%', backgroundColor: accent}} />
    <span style={{position: 'absolute', right: 10, top: 10, width: 14, height: 14, borderRadius: 7, backgroundColor: `${C.brass}55`}} />
    {children}
  </div>
);

const StarOrdinal = ({index}: {readonly index: number}) => (
  <span
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      width: 44,
      height: 44,
      backgroundColor: C.brass,
      color: C.night,
      fontSize: 24,
      fontWeight: 950,
      borderRadius: 22,
    }}
  >
    {String(index).padStart(2, '0')}
  </span>
);

const Shell = ({children, code, kicker, title}: {readonly children: ReactNode; readonly code: string; readonly kicker: string; readonly title: string}) => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{
      backgroundColor: C.night,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(0deg, transparent 0 95px, ${C.graticule} 95px 96px), repeating-linear-gradient(90deg, transparent 0 95px, ${C.graticule} 95px 96px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `2px solid ${C.brass}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.brassDeep, borderLeft: `8px solid ${C.coral}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 16 · {code}</span>
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

export const ConceptFeaturesScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="concept-heading" data-final-knowledge="feature-basis" data-final-knowledge="feature-bound" data-final-knowledge="feature-justify" data-final-knowledge="modality-note" */
  const features = [
    {marker: 'feature-basis', icon: BookMarked, accent: C.teal, name: '原理为基', note: '以法律以及法学中的原理或理由为基础', chip: '推理有依据'},
    {marker: 'feature-bound', icon: Landmark, accent: C.brass, name: '受法律约束', note: '法律推理要受现行法律的约束', chip: '依法而推'},
    {marker: 'feature-justify', icon: BadgeCheck, accent: C.coral, name: '正当性证明', note: '一种寻求正当性证明的推理', chip: '结论须证成'},
  ];
  return (
    <Shell code="概念" kicker="定义 · 三个特点" title="法律推理的概念">
      <div
        data-layout="definition-plaque-with-feature-panels"
        data-visual-anchor="concept-icon"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="definition-claim,three-features,modality-note"
        data-focal-rule="reasoning-derives-decisions-from-premises-by-logical-rules"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="none" style={{position: 'absolute', left: 0, top: 10}}>
          <ChartTab>概念特点 · 推理法则</ChartTab>
        </Enter>
        <Enter delay={14} from="down" marker="concept-heading" style={{position: 'absolute', left: 40, top: 0, width: 1736, height: 112}}>
          <div style={{backgroundColor: C.chart, border: `3px solid ${C.brass}`, height: 112, display: 'flex', alignItems: 'center', gap: 24, padding: '0 30px'}}>
            <span style={{fontSize: 36, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)', whiteSpace: 'nowrap'}}>法律推理</span>
            <span style={{fontSize: 26, fontWeight: 900, color: C.ink}}>
              = <InkUnderline delay={44} color={C.tealDeep}>逻辑法则</InkUnderline>：法律人从一定的前提<Soft color={C.teal}>推导出法律决定</Soft>的过程中所必须遵循的
            </span>
          </div>
        </Enter>
        {features.map((feature, index) => (
          <Enter
            key={feature.marker}
            delay={40 + index * 24}
            from="up"
            marker={feature.marker}
            style={{position: 'absolute', left: 40 + index * 592, top: 136, width: 552, height: 300}}
          >
            <Chart accent={feature.accent} style={{left: 0, top: 0, width: 552, height: 300}}>
              <div style={{padding: '28px 24px 20px 40px', display: 'flex', flexDirection: 'column', gap: 16}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
                  <StarOrdinal index={index + 1} />
                  <feature.icon size={44} color={feature.accent} strokeWidth={2.2} />
                  <span style={{fontSize: 34, fontWeight: 950, color: C.ink}}>{feature.name}</span>
                </div>
                <div style={{fontSize: 25, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>{feature.note}</div>
                <div><ChartChip accent={feature.accent}>{feature.chip}</ChartChip></div>
              </div>
            </Chart>
          </Enter>
        ))}
        <Enter delay={128} marker="modality-note" style={{position: 'absolute', left: 40, top: 470, width: 1736, height: 130}}>
          <div style={{border: `2px solid ${C.brass}`, backgroundColor: '#2C403E', height: 130, display: 'flex', alignItems: 'center', gap: 18, padding: '0 28px'}}>
            <SealMark delay={156} size={28}>必然？</SealMark>
            <span style={{fontSize: 27, fontWeight: 900, color: C.paper}}>
              <Soft color={C.coral}>除演绎推理外</Soft>，其余均为<Soft color={C.brass}>或然性推理</Soft>
            </span>
            <ChartChip accent={C.teal} solid>演绎 ＝ 唯一的必然性推理</ChartChip>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const SyllogismDeductionScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="syllogism-heading" data-final-knowledge="major-premise" data-final-knowledge="minor-premise" data-final-knowledge="conclusion" data-final-knowledge="deduction-chips" data-final-knowledge="deduction-example" */
  const descent = interpolate(frame, [90, 150], [0, 1], CLAMP);
  const steps = [
    {marker: 'major-premise', icon: Landmark, accent: C.brass, label: '大前提', text: '法律规定（T → R）', sub: '所有 T 情形适用 R 效果'},
    {marker: 'minor-premise', icon: FileText, accent: C.teal, label: '小前提', text: '案件事实（S ＝ T）', sub: '认定 S 属于 T 情形'},
    {marker: 'conclusion', icon: Gavel, accent: C.coral, label: '结论', text: '法律决定（S → R）', sub: 'S 案件适用 R 效果'},
  ];
  return (
    <Shell code="演绎" kicker="一般 → 个别" title="演绎推理：司法三段论">
      <div
        data-layout="three-step-syllogism-descent"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="major-premise,minor-premise,conclusion"
        data-focal-rule="deduction-descends-from-general-rule-to-individual-case"
        data-focal-channels="icon,motion,enclosure,contrast,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="none" style={{position: 'absolute', left: 0, top: 10}}>
          <ChartTab>演绎 · 必然性推理</ChartTab>
        </Enter>
        <Enter delay={14} from="down" marker="syllogism-heading" style={{position: 'absolute', left: 340, top: 0, width: 1000}}>
          <div style={{backgroundColor: C.chart, border: `3px solid ${C.brass}`, padding: '10px 26px', textAlign: 'center'}}>
            <span style={{fontSize: 33, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              唯一的<InkUnderline delay={40}>必然性推理</InkUnderline> · 经典方法＝司法三段论
            </span>
          </div>
        </Enter>
        {steps.map((step, index) => (
          <Enter
            key={step.marker}
            delay={36 + index * 26}
            from="left"
            marker={step.marker}
            style={{position: 'absolute', left: 40, top: 108 + index * 162, width: 620, height: 118}}
          >
            <Chart accent={step.accent} style={{left: 0, top: 0, width: 620, height: 118}}>
              <div style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '0 22px 0 38px'}}>
                <step.icon size={40} color={step.accent} strokeWidth={2.2} />
                <div>
                  <div style={{fontSize: 28, fontWeight: 950, color: C.ink}}>{step.label} · {step.text}</div>
                  <div style={{marginTop: 4, fontSize: 22, fontWeight: 860, color: C.inkSoft}}>{step.sub}</div>
                </div>
              </div>
            </Chart>
          </Enter>
        ))}
        <div style={{position: 'absolute', left: 346, top: 226, width: 4, height: 44 * descent, backgroundColor: C.brass}} />
        <div style={{position: 'absolute', left: 346, top: 388, width: 4, height: 44 * descent, backgroundColor: C.brass}} />
        <Enter delay={118} from="right" marker="deduction-chips" style={{position: 'absolute', left: 760, top: 108, width: 976, height: 380}}>
          <div style={{backgroundColor: '#2C403E', border: `2px solid ${C.brass}`, height: 380, padding: '26px 30px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 22}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
              <ChartChip accent={C.brass} solid>一般</ChartChip>
              <span style={{fontSize: 30, fontWeight: 950, color: C.brass}}>→</span>
              <ChartChip accent={C.brass} solid>个别</ChartChip>
              <span style={{fontSize: 23, fontWeight: 870, color: C.paper}}>从一般到个别的推论</span>
            </div>
            <div style={{fontSize: 25, fontWeight: 900, color: C.paper, lineHeight: 1.5}}>
              结论<Soft color={C.teal}>必然地蕴含在前提之中</Soft> —— 前提真则结论必真
            </div>
            <div style={{display: 'flex', gap: 12, flexWrap: 'wrap'}}>
              <ChartChip accent={C.teal}>大前提 ＋ 小前提</ChartChip>
              <ChartChip accent={C.teal}>必然推导出结论</ChartChip>
              <ChartChip accent={C.coral}>其余推理皆属或然</ChartChip>
            </div>
          </div>
        </Enter>
        <Enter delay={150} marker="deduction-example" style={{position: 'absolute', left: 40, top: 604, width: 1736, height: 96}}>
          <div style={{border: `2px solid ${C.brass}`, backgroundColor: '#2C403E', height: 96, display: 'flex', alignItems: 'center', gap: 16, padding: '0 26px'}}>
            <Gavel size={34} color={C.brass} strokeWidth={2.2} />
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              例：交通肇事 <span style={{color: C.brass}}>→</span> 依《刑法》定罪 <span style={{color: C.brass}}>→</span> 构成犯罪 —— 这是<Soft color={C.teal}>演绎推理</Soft>，不是类比推理
            </span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const InductiveAnalogyScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="modes-heading" data-final-knowledge="induction-plate" data-final-knowledge="analogy-plate" data-final-knowledge="contrast-note" */
  return (
    <Shell code="归纳·类比" kicker="或然性推理" title="归纳推理与类比推理">
      <div
        data-layout="twin-mode-plates-with-contrast-note"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="induction-rules,analogy-formula,contrast-note"
        data-focal-rule="induction-gathers-cases-analogy-extends-by-shared-attributes"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="none" style={{position: 'absolute', left: 0, top: 10}}>
          <ChartTab>或然 · 归纳与类比</ChartTab>
        </Enter>
        <Enter delay={14} from="down" marker="modes-heading" style={{position: 'absolute', left: 340, top: 0, width: 1100}}>
          <div style={{backgroundColor: C.chart, border: `3px solid ${C.brass}`, padding: '10px 26px', textAlign: 'center'}}>
            <span style={{fontSize: 33, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              归纳：<InkUnderline delay={40} color={C.tealDeep}>个别 → 一般</InkUnderline> ｜ 类比：个别 → 个别
            </span>
          </div>
        </Enter>
        <Enter delay={36} from="left" marker="induction-plate" style={{position: 'absolute', left: 40, top: 104, width: 852, height: 392}}>
          <Chart accent={C.teal} style={{left: 0, top: 0, width: 852, height: 392}}>
            <div style={{padding: '22px 24px 16px 40px', display: 'flex', flexDirection: 'column', gap: 12}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
                <Layers size={40} color={C.teal} strokeWidth={2.2} />
                <span style={{fontSize: 32, fontWeight: 950, color: C.ink}}>归纳推理</span>
                <ChartChip accent={C.teal} solid>个别 → 一般</ChartChip>
              </div>
              <div style={{fontSize: 23, fontWeight: 900, color: C.inkSoft, letterSpacing: 2}}>推论规则 · 三尽可能</div>
              <div style={{fontSize: 24, fontWeight: 880, color: C.ink}}>① 被考察对象的<Soft color={C.teal}>数量</Soft>尽可能多</div>
              <div style={{fontSize: 24, fontWeight: 880, color: C.ink}}>② 被考察对象的<Soft color={C.teal}>范围</Soft>尽可能广</div>
              <div style={{fontSize: 24, fontWeight: 880, color: C.ink}}>③ 被考察对象之间的<Soft color={C.teal}>差异</Soft>尽可能大</div>
              <div><ChartChip accent={C.brass}>口诀：总结个案叫归纳</ChartChip></div>
            </div>
          </Chart>
        </Enter>
        <Enter delay={64} from="right" marker="analogy-plate" style={{position: 'absolute', left: 924, top: 104, width: 852, height: 392}}>
          <Chart accent={C.brass} style={{left: 0, top: 0, width: 852, height: 392}}>
            <div style={{padding: '22px 24px 16px 40px', display: 'flex', flexDirection: 'column', gap: 12}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
                <ArrowLeftRight size={40} color={C.brass} strokeWidth={2.2} />
                <span style={{fontSize: 32, fontWeight: 950, color: C.ink}}>类比推理</span>
                <ChartChip accent={C.brass} solid>个别 → 个别</ChartChip>
              </div>
              <div style={{fontSize: 24, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
                A 具有 a·b·c·d 属性 ｜ B 具有 a·b·c 属性 <span style={{color: C.brass}}>→</span> <Soft color={C.brass}>B 也具有 d 属性</Soft>
              </div>
              <div style={{fontSize: 23, fontWeight: 900, color: C.inkSoft, letterSpacing: 2}}>结论说服力标准</div>
              <div style={{fontSize: 24, fontWeight: 880, color: C.ink}}>① 相同属性<Soft color={C.brass}>越多</Soft>，可靠性越高</div>
              <div style={{fontSize: 24, fontWeight: 880, color: C.ink}}>② 相同属性与类推属性关系<Soft color={C.brass}>越密切</Soft>，越可靠</div>
              <div><ChartChip accent={C.teal}>目标：同案同判</ChartChip></div>
            </div>
          </Chart>
        </Enter>
        <Enter delay={140} marker="contrast-note" style={{position: 'absolute', left: 40, top: 520, width: 1736, height: 104}}>
          <div style={{border: `2px solid ${C.brass}`, backgroundColor: '#2C403E', height: 104, display: 'flex', alignItems: 'center', gap: 18, padding: '0 28px'}}>
            <span style={{fontSize: 26, fontWeight: 900, color: C.paper}}>
              类比看<Soft color={C.brass}>“事实上”的共同点</Soft> ｜ 当然推理看<Soft color={C.teal}>“性质上”的轻重</Soft>
            </span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const AbductiveReverseAFortioriScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="trio-heading" data-final-knowledge="abduction-plate" data-final-knowledge="reverse-plate" data-final-knowledge="a-fortiori-plate" */
  const columns = [
    {
      marker: 'abduction-plate',
      icon: Lightbulb,
      accent: C.coral,
      name: '设证推理',
      flag: '由果推因',
      rows: [
        <>出现现象 C → 若满足 H 则 C → <Soft color={C.coral}>C 出现，故 H 满足</Soft></>,
        <>开放、可修正 · 或然性较强</>,
        <>依赖“法感”与法的前理解 · 经验依赖性强</>,
      ],
      chips: ['领域：立法 · 案件侦查'],
    },
    {
      marker: 'reverse-plate',
      icon: Ban,
      accent: C.brass,
      name: '反向推理',
      flag: '明示其一即否定其余',
      rows: [
        <>A → R；<Soft color={C.brass}>B 不同于 A</Soft> → R 不适用于 B</>,
        <>把规范理解为只适用于明确规定情形</>,
        <>与类比相反的“消极推理” · 限制规范后果</>,
      ],
      chips: ['用于安定性规范：职权 · 义务 · 刑事', '例外条款严格满足方可适用'],
    },
    {
      marker: 'a-fortiori-plate',
      icon: Scale,
      accent: C.teal,
      name: '当然推理',
      flag: '举重以明轻',
      rows: [
        <>举轻以明重：合法征收都要补偿 → <Soft color={C.teal}>违法征收更应赔偿</Soft></>,
        <>举重以明轻：故意协助自杀不罚 → <Soft color={C.teal}>过失协助更不罚</Soft></>,
      ],
      chips: ['罪刑法定下刑事领域“举轻以明重”严格限制'],
    },
  ];
  return (
    <Shell code="设证·反向·当然" kicker="或然性推理" title="设证 · 反向 · 当然推理">
      <div
        data-layout="three-instrument-columns"
        data-visual-anchor="concept-icon"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="abduction-form,reverse-form,a-fortiori-cases"
        data-focal-rule="conjectural-modes-extend-reasoning-beyond-deduction"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="none" style={{position: 'absolute', left: 0, top: 10}}>
          <ChartTab>或然 · 三种进阶</ChartTab>
        </Enter>
        <Enter delay={14} from="down" marker="trio-heading" style={{position: 'absolute', left: 340, top: 0, width: 1100}}>
          <div style={{backgroundColor: C.chart, border: `3px solid ${C.brass}`, padding: '10px 26px', textAlign: 'center'}}>
            <span style={{fontSize: 33, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              三种或然推理：<InkUnderline delay={40} color={C.tealDeep}>由果推因 · 否定其余 · 轻重权衡</InkUnderline>
            </span>
          </div>
        </Enter>
        {columns.map((column, index) => (
          <Enter
            key={column.marker}
            delay={36 + index * 26}
            from="up"
            marker={column.marker}
            style={{position: 'absolute', left: 40 + index * 592, top: 108, width: 552, height: 500}}
          >
            <Chart accent={column.accent} style={{left: 0, top: 0, width: 552, height: 500}}>
              <div style={{padding: '20px 20px 16px 36px', display: 'flex', flexDirection: 'column', gap: 11}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                  <column.icon size={38} color={column.accent} strokeWidth={2.2} />
                  <span style={{fontSize: 30, fontWeight: 950, color: C.ink}}>{column.name}</span>
                </div>
                <div><ChartChip accent={column.accent} solid>{column.flag}</ChartChip></div>
                {column.rows.map((row, rowIndex) => (
                  <div key={rowIndex} style={{fontSize: 22, fontWeight: 870, color: C.ink, lineHeight: 1.5}}>
                    {row}
                  </div>
                ))}
                <div style={{marginTop: 'auto', display: 'flex', flexWrap: 'wrap', gap: 8}}>
                  {column.chips.map((chip, chipIndex) => (
                    <ChartChip key={chipIndex} accent={column.accent}>{chip}</ChartChip>
                  ))}
                </div>
              </div>
            </Chart>
          </Enter>
        ))}
      </div>
    </Shell>
  );
};

export const VerdictMapScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="map-heading" data-final-knowledge="mode-map" data-final-knowledge="summary-note" */
  const flags = [
    {name: '演绎', flag: '一般到个别 · 司法三段论'},
    {name: '归纳', flag: '个别到一般 · 总结个案'},
    {name: '类比', flag: '个别到个别 · 同案同判'},
    {name: '设证', flag: '由果推因 · 立法侦查'},
    {name: '反向', flag: '明示其一即否定其余'},
    {name: '当然', flag: '举重以明轻 · 轻重权衡'},
  ];
  return (
    <Shell code="判断标志" kicker="六种推理 · 速记" title="不同推理的判断标志">
      <div
        data-layout="six-flag-grid-with-summary"
        data-visual-anchor="typographic-sequence"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="six-flags,modality-summary"
        data-focal-rule="each-reasoning-mode-is-recognized-by-its-direction-flag"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="none" style={{position: 'absolute', left: 0, top: 10}}>
          <ChartTab>判断标志 · 速记表</ChartTab>
        </Enter>
        <Enter delay={14} from="down" marker="map-heading" style={{position: 'absolute', left: 340, top: 0, width: 1000}}>
          <div style={{backgroundColor: C.chart, border: `3px solid ${C.brass}`, padding: '10px 26px', textAlign: 'center'}}>
            <span style={{fontSize: 33, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              <Compass size={34} color={C.brassDeep} strokeWidth={2.2} className="inline" /> 六种推理 · 一句话判断标志
            </span>
          </div>
        </Enter>
        <Enter delay={40} from="up" marker="mode-map" style={{position: 'absolute', left: 40, top: 104, width: 1736, height: 396}}>
          <div style={{position: 'absolute', left: 0, top: 0, width: 1736, height: 396, display: 'flex', flexWrap: 'wrap', gap: 16}}>
            {flags.map((flag, index) => (
              <div key={flag.name} style={{width: 860, height: 121, backgroundColor: C.chart, border: `2px solid ${C.brass}`, display: 'flex', alignItems: 'center', gap: 18, padding: '0 22px 0 30px'}}>
                <StarOrdinal index={index + 1} />
                <span style={{fontSize: 31, fontWeight: 950, color: C.ink, width: 120}}>{flag.name}</span>
                <span style={{fontSize: 24, fontWeight: 880, color: C.inkSoft}}>{flag.flag}</span>
              </div>
            ))}
          </div>
        </Enter>
        <Enter delay={130} marker="summary-note" style={{position: 'absolute', left: 40, top: 524, width: 1736, height: 116}}>
          <div style={{border: `2px solid ${C.brass}`, backgroundColor: '#2C403E', height: 116, display: 'flex', alignItems: 'center', gap: 18, padding: '0 28px'}}>
            <span style={{fontSize: 26, fontWeight: 900, color: C.paper}}>必然性：</span>
            <ChartChip accent={C.teal} solid>演绎</ChartChip>
            <span style={{fontSize: 26, fontWeight: 900, color: C.paper, marginLeft: 12}}>或然性：</span>
            <ChartChip accent={C.brass}>归纳</ChartChip>
            <ChartChip accent={C.brass}>类比</ChartChip>
            <ChartChip accent={C.brass}>设证</ChartChip>
            <ChartChip accent={C.brass}>反向</ChartChip>
            <ChartChip accent={C.brass}>当然</ChartChip>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const LegalReasoning = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-concept-features" {...SCENES.conceptFeatures}>
      <ConceptFeaturesScene />
    </TimelineSequence>
    <TimelineSequence name="02-syllogism-deduction" {...SCENES.syllogismDeduction}>
      <SyllogismDeductionScene />
    </TimelineSequence>
    <TimelineSequence name="03-inductive-analogy" {...SCENES.inductiveAnalogy}>
      <InductiveAnalogyScene />
    </TimelineSequence>
    <TimelineSequence name="04-abductive-reverse-a-fortiori" {...SCENES.abductiveReverseAFortiori}>
      <AbductiveReverseAFortioriScene />
    </TimelineSequence>
    <TimelineSequence name="05-verdict-map" {...SCENES.verdictMap}>
      <VerdictMapScene />
    </TimelineSequence>
  </AbsoluteFill>
);
