import type {CSSProperties, ReactNode} from 'react';
import {BookOpen, Coins, HeartHandshake, Landmark, Leaf, RefreshCw, Scale, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  field: '#33352C',
  fieldDeep: '#262820',
  panel: '#F0EBDA',
  panelDim: '#E1DCC7',
  edge: '#666B5B',
  ink: '#262921',
  inkSoft: '#575C4E',
  harvest: '#C0983E',
  relation: '#B04834',
  guard: '#4E7D74',
  paper: '#F6F1E0',
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
      backgroundColor: C.field,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `radial-gradient(1100px 460px at 50% -8%, rgba(192, 152, 62, 0.12), transparent 72%), repeating-linear-gradient(90deg, transparent 0 148px, rgba(38, 40, 32, 0.55) 148px 151px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.harvest}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.fieldDeep, borderLeft: `8px solid #B04834`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 88 · {code}</span>
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
        borderBottom: `2px solid ${C.harvest}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.harvest, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone, watermark}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string; readonly watermark?: ReactNode}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.guard}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.guard}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.guard}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.guard}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

const FieldTab = ({children, bar = C.relation, icon}: {readonly children: ReactNode; readonly bar?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.fieldDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

const FieldStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(38, 40, 32, 0.94)', border: `2px solid ${C.harvest}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Mark = ({children, color = C.relation}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

const HarvestSeal = ({children, tone = C.harvest, delay = 0}: {readonly children: ReactNode; readonly tone?: string; readonly delay?: number}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span style={{display: 'inline-block', padding: '4px 12px', border: `5px solid ${tone}`, color: tone, backgroundColor: `${tone}12`, fontSize: 22, fontWeight: 950, letterSpacing: 2, opacity: p, rotate: '-2deg'}}>{children}</span>
  );
};

const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.panelDim, borderLeft: `6px solid ${tone}`, padding: '8px 12px'}}>
    <span style={{flexShrink: 0, width: 50, height: 50, borderRadius: 10, backgroundColor: tone, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 0 rgba(0,0,0,0.18)'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.45}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const FiveGuaranteesScene = () => {
  /* data-final-knowledge="five-guarantees" */
  const furrows = [
    {name: '以法治保障经济发展', tone: C.harvest, icon: <Coins size={30} color={C.paper} strokeWidth={2.2} />, body: '法治是最好的营商环境；社会主义市场经济本质上是法治经济；构建全国统一大市场；完善产权制度·健全依法甄别纠正涉企冤错案件机制；制定民营经济促进法'},
    {name: '以法治保障政治稳定', tone: C.guard, icon: <Landmark size={30} color={C.paper} strokeWidth={2.2} />, body: '保障政治安全·政治稳定是法律的重要功能；通过法治保障党的路线方针政策有效实施；以法治方式巩固党的执政地位'},
    {name: '以法治保障文化繁荣', tone: C.harvest, icon: <BookOpen size={30} color={C.paper} strokeWidth={2.2} />, body: '文化是民族血脉和人民的精神家园；坚持用社会主义核心价值观引领文化立法；推进公共文化设施所有权和使用权分置改革'},
    {name: '以法治保障社会和谐', tone: C.guard, icon: <Users size={30} color={C.paper} strokeWidth={2.2} />, body: '从根本上要靠法律·靠制度；社会保障体系是人民生活的安全网和社会运行的稳定器；完善党委领导·政府负责·社会协同·公众参与·法治保障的社会治理体制'},
    {name: '以法治保障生态良好', tone: C.harvest, icon: <Leaf size={30} color={C.paper} strokeWidth={2.2} />, body: '只有实行最严格的制度·最严密的法治，才能为生态文明建设提供可靠保障；编纂生态环境法典；大幅度提高破坏环境违法犯罪的成本'},
  ] as const;
  return (
    <Shell code="01" kicker="保障作用" title="充分发挥法治对经济社会发展的保障作用">
      <div
        data-layout="five-furrow-columns"
        data-visual-anchor="main center"
        data-text-treatments="furrow-columns,guarantee-chips"
        data-visual-grammar="economy-furrow,politics-furrow,culture-furrow,society-furrow,ecology-furrow"
        data-focal-rule="rule-of-law-safeguards-five-development-fields"
        data-focal-channels="five-furrows"
        style={{position: 'absolute', inset: 0}}
      >
        {furrows.map((furrow, index) => (
          <Enter key={furrow.name} delay={6 + index * 14} from="up" marker={index === 0 ? 'five-guarantees' : undefined} style={{position: 'absolute', left: 10 + index * 356, top: 0, width: 336}}>
            <Panel tone={furrow.tone} style={{height: 560, padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 9}}>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8}}>
                <span style={{width: 62, height: 62, borderRadius: 31, backgroundColor: furrow.tone, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `3px solid ${C.harvest}`}}>{furrow.icon}</span>
                <span style={{fontSize: 22, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)', textAlign: 'center'}}>{furrow.name}</span>
                <div style={{width: 70, height: 3, backgroundColor: furrow.tone}} />
              </div>
              <div style={{fontSize: 21, fontWeight: 860, color: C.ink, lineHeight: 1.5}}>{furrow.body}</div>
            </Panel>
          </Enter>
        ))}
      </div>
    </Shell>
  );
};

export const RelationsScene = () => {
  /* data-final-knowledge="major-relations" */
  return (
    <Shell code="02" kicker="重大关系" title="正确认识和处理好全面依法治国若干重大关系">
      <div
        data-layout="three-relation-ridges"
        data-visual-anchor="main center"
        data-text-treatments="relation-rows,couplet-seals"
        data-visual-grammar="politics-reform-ridge,change-law-ridge,virtue-ridge"
        data-focal-rule="pairwise-relations-unified-not-opposed"
        data-focal-channels="three-relations,couplet-phrases"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="major-relations" style={{position: 'absolute', left: 0, top: 0, width: 1776}}>
          <Panel tone={C.relation} watermark={<Scale size={180} color={C.relation} strokeWidth={1.6} />} style={{height: 148, padding: '12px 22px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <FieldTab bar={C.relation} icon={<Scale size={26} color={C.paper} strokeWidth={2.2} />}>政治和法治</FieldTab>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              法治当中有政治，<Mark color={C.relation}>没有脱离政治的法治</Mark>；「党大还是法大」是一个<Mark color={C.relation}>伪命题</Mark>，「权大还是法大」对各级领导干部来说是<Mark color={C.guard}>真命题</Mark>；党的领导和依法治国不是对立的，而是<Mark color={C.guard}>统一的</Mark>
            </div>
          </Panel>
        </Enter>
        <Enter delay={40} from="up" style={{position: 'absolute', left: 0, top: 172, width: 1776}}>
          <Panel tone={C.harvest} watermark={<RefreshCw size={180} color={C.harvest} strokeWidth={1.6} />} style={{height: 148, padding: '12px 22px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <FieldTab bar={C.harvest} icon={<RefreshCw size={26} color={C.paper} strokeWidth={2.2} />}>改革和法治</FieldTab>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              法治和改革如<HarvestSeal tone={C.harvest} delay={140}>鸟之两翼·车之两轮</HarvestSeal>；做到<Mark color={C.relation}>重大改革于法有据</Mark>；及时把改革成果上升为法律制度；坚决纠正「发展要上·法治要让」的认识误区；决不能把改革变成「对标」西方法治体系·「追捧」西方法治实践
            </div>
          </Panel>
        </Enter>
        <Enter delay={80} from="right" style={{position: 'absolute', left: 0, top: 344, width: 1776}}>
          <Panel tone={C.guard} watermark={<HeartHandshake size={180} color={C.guard} strokeWidth={1.6} />} style={{height: 148, padding: '12px 22px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <FieldTab bar={C.guard} icon={<HeartHandshake size={26} color={C.paper} strokeWidth={2.2} />}>依法治国和以德治国</FieldTab>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              <HarvestSeal tone={C.guard} delay={160}>法律是成文的道德，道德是内心的法律</HarvestSeal>；<Mark color={C.guard}>法安天下，德润人心</Mark>；以法治体现道德理念·强化法律对道德的促进作用，以道德滋养法治精神·强化道德对法治的支撑作用；把社会主义核心价值观融入法治建设·社会发展·日常生活
            </div>
          </Panel>
        </Enter>
        <Enter delay={140} from="up" style={{position: 'absolute', left: 0, top: 516, width: 1776}}>
          <FieldStrip style={{height: 72}}>
            <Scale size={38} color={C.harvest} strokeWidth={2.2} />
            <span style={{padding: '3px 12px', backgroundColor: C.harvest, color: C.fieldDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>收束</span>
            <span style={{fontSize: 23, fontWeight: 950, color: C.paper}}>
              五谷保障：经济·政治·文化·社会·生态 ｜ 三组关系：不是对立，而是统一
            </span>
          </FieldStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const XiRuleOfLawPractice = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-five-guarantees" {...SCENES.fiveGuarantees}>
      <FiveGuaranteesScene />
    </TimelineSequence>
    <TimelineSequence name="02-relations" {...SCENES.relations}>
      <RelationsScene />
    </TimelineSequence>
  </AbsoluteFill>
);
