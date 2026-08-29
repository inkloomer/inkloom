import type {CSSProperties, ReactNode} from 'react';
import {BookMarked, Compass, FileSearch, Quote, Ruler, Scale, Search, Waypoints} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  birch: '#DCCFAF',
  birchDeep: '#C9BA95',
  panel: '#F4EEDA',
  panelDim: '#E9E1C8',
  panelEdge: '#6E6350',
  ink: '#2B2721',
  inkSoft: '#59503F',
  cinnabar: '#A93B32',
  cinnabarPale: '#F0D4CB',
  teal: '#2F7A72',
  tealPale: '#D2E0DA',
  ochre: '#B98A2E',
  ochrePale: '#EDDDB4',
  graphite: '#3A362E',
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
      backgroundColor: C.birch,
      color: C.ink,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(0deg, transparent 0 124px, ${C.graphite}0A 124px 125px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.graphite}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.ochre}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.graphite, borderLeft: `8px solid ${C.ochre}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 15 · {code}</span>
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
        borderBottom: `2px solid ${C.graphite}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.ink}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.ochre, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.panelEdge}`, color: C.ink, position: 'relative', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.ochre}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.ochre}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.ochre}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.ochre}} />
    {children}
  </div>
);

const LabelTab = ({children, bar = C.ochre}: {readonly children: ReactNode; readonly bar?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', padding: '5px 14px', backgroundColor: C.graphite, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{children}</span>
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

const Stamp = ({children, delay = 0, size = 26, tone = C.cinnabar}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

const InkUnderline = ({children, color = C.cinnabar, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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
  <div style={{backgroundColor: 'rgba(58, 54, 46, 0.92)', border: `2px solid ${C.ochre}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

export const GoalStepsScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="goal-heading" data-final-knowledge="syllogism-bench" data-final-knowledge="fixed-correspondence-note" data-final-knowledge="goal-pair" data-final-knowledge="priority-verdict" */
  const lineP = prog(frame, 60, 22);
  return (
    <Shell code="01" kicker="目标与步骤" title="法适用：三段论通向合理决定">
      <div
        data-layout="syllogism-bench-with-goal-pair"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="premise-stations,verdict-gate,goal-contrast-pair"
        data-focal-rule="norms-and-facts-enter-fixed-premise-slots-toward-one-verdict"
        data-focal-channels="icon,connector,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="goal-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.panel, border: `3px solid ${C.panelEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              目标＝<InkUnderline delay={36}>合理的法律决定</InkUnderline>：可预测 ＋ 正当
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="syllogism-bench" style={{position: 'absolute', left: 40, top: 104, width: 1000, height: 420}}>
          <div style={{position: 'absolute', left: 0, top: 0, width: 1000, height: 420}}>
            <span style={{position: 'absolute', left: 30, top: 60, width: 900 * lineP, height: 4, backgroundColor: C.graphite, opacity: 0.55}} />
            <Panel tone={C.teal} style={{position: 'absolute', left: 20, top: 20, width: 280, height: 130, padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 8}}>
              <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 25, fontWeight: 950, color: C.ink}}>
                <Ruler size={32} color={C.teal} strokeWidth={2.3} />
                大前提
              </span>
              <span style={{fontSize: 22, fontWeight: 880, color: C.inkSoft}}>法律规范</span>
            </Panel>
            <Panel tone={C.cinnabar} style={{position: 'absolute', left: 360, top: 20, width: 280, height: 130, padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 8}}>
              <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 25, fontWeight: 950, color: C.ink}}>
                <FileSearch size={32} color={C.cinnabar} strokeWidth={2.3} />
                小前提
              </span>
              <span style={{fontSize: 22, fontWeight: 880, color: C.inkSoft}}>法律事实</span>
            </Panel>
            <div style={{position: 'absolute', left: 700, top: 10, width: 280, height: 150, border: `4px solid ${C.graphite}`, backgroundColor: C.graphite, color: C.paper, padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: 8}}>
              <span style={{fontSize: 27, fontWeight: 950}}>司法三段论</span>
              <span style={{fontSize: 22, fontWeight: 880, opacity: 0.85}}>涵摄推理的闸口</span>
            </div>
            <div style={{position: 'absolute', left: 250, top: 220, width: 500, height: 96, border: `4px solid ${C.ochre}`, backgroundColor: C.panelDim, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: prog(frame, 110, 18)}}>
              <span style={{fontSize: 30, fontWeight: 950, color: C.ink, letterSpacing: 2}}>结论 · 案件裁判</span>
            </div>
            <div data-final-knowledge="fixed-correspondence-note" style={{position: 'absolute', left: 60, top: 344, opacity: prog(frame, 140, 18)}}>
              <Stamp delay={146} size={24}>规范只当大前提 · 事实只当小前提 · 结论只站第三步</Stamp>
            </div>
          </div>
        </Enter>
        <div data-final-knowledge="goal-pair" style={{position: 'absolute', left: 0, top: 0, width: '100%', height: '100%'}}>
          <Enter delay={54} from="right" style={{position: 'absolute', left: 1040, top: 104, width: 736, height: 150}}>
            <Panel tone={C.teal} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 8}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <LabelTab bar={C.teal}>可预测性</LabelTab>
                <BenchChip tone={C.teal} solid>
                  形式法治
                </BenchChip>
              </div>
              <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.45}}>
                立足<Soft color={C.teal}>既存一般性规范</Soft> · 避免武断恣意
              </div>
            </Panel>
          </Enter>
          <Enter delay={78} from="right" style={{position: 'absolute', left: 1040, top: 274, width: 736, height: 150}}>
            <Panel tone={C.cinnabar} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 8}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <LabelTab bar={C.cinnabar}>正当性</LabelTab>
                <BenchChip tone={C.cinnabar} solid>
                  实质法治
                </BenchChip>
              </div>
              <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.45}}>
                按<Soft color={C.cinnabar}>实质价值或道德</Soft>考量 · 法学方法保证一致
              </div>
            </Panel>
          </Enter>
          <Enter delay={130} marker="priority-verdict" from="right" style={{position: 'absolute', left: 1040, top: 444, width: 736, height: 80}}>
            <div style={{height: 80, display: 'flex', alignItems: 'center', gap: 14}}>
              <Scale size={34} color={C.ochre} strokeWidth={2.3} />
              <span style={{fontSize: 23, fontWeight: 900, color: C.ink}}>二者冲突时——</span>
              <Stamp delay={150} size={24}>可预测性通常优先</Stamp>
            </div>
          </Enter>
        </div>
        <Enter delay={190} from="up" style={{position: 'absolute', left: 40, top: 560, width: 1736}}>
          <DarkStrip style={{height: 104}}>
            <span style={{padding: '4px 13px', backgroundColor: C.ochre, color: C.graphite, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>实质过程</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>
              案件事实是<Soft color={C.tealPale}>规范性事实</Soft> · 规范选择以整个体系为基础——<Soft color={C.ochrePale}>适用一个法条就是适用整个法典</Soft>
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const DiscoveryArgumentScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="versus-heading" data-final-knowledge="discovery-plaque" data-final-knowledge="argument-plaque" data-final-knowledge="same-process-bridge" data-final-knowledge="textbook-verdict" */
  return (
    <Shell code="02" kicker="发现与论证" title="实际怎么判 vs 应当怎么判">
      <div
        data-layout="discovery-argument-versus-row"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="discovery-claims,argument-claims,same-process-bridge"
        data-focal-rule="reasons-precede-conclusions-in-justified-decisions"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="versus-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.panel, border: `3px solid ${C.panelEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              法律发现＝<InkUnderline color={C.ochre} delay={36}>实际怎么判</InkUnderline> · 法律论证＝<InkUnderline delay={48}>应当怎么判</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="discovery-plaque" style={{position: 'absolute', left: 40, top: 104, width: 800, height: 384}}>
          <Panel tone={C.ochre} style={{height: '100%', padding: '18px 24px 20px', display: 'flex', flexDirection: 'column', gap: 11}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Search size={38} color={C.ochre} strokeWidth={2.3} />
              <LabelTab>法律发现 · 事实性角度</LabelTab>
            </div>
            <div style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
              获得决定的事实过程，受<Soft color={C.ochre}>直觉、偏见、情感、利益立场</Soft>等主导
            </div>
            <div style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
              <Soft color={C.cinnabar}>结论先行</Soft>的事后包装——先有结论，再为它找规范
            </div>
            <div style={{marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 10}}>
              <BenchChip tone={C.ochre} solid>
                代表：弗兰克 · 卢埃林
              </BenchChip>
              <span style={{fontSize: 21, fontWeight: 850, color: C.inkSoft}}>法律现实主义</span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={56} from="right" marker="argument-plaque" style={{position: 'absolute', left: 976, top: 104, width: 800, height: 384}}>
          <Panel tone={C.teal} style={{height: '100%', padding: '18px 24px 20px', display: 'flex', flexDirection: 'column', gap: 11}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Quote size={38} color={C.teal} strokeWidth={2.3} />
              <LabelTab bar={C.teal}>法律论证 · 规范性角度</LabelTab>
            </div>
            <div style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
              为决定提供<Soft color={C.teal}>尽可能充足的理由</Soft>支持，结论须是推理的结果
            </div>
            <div style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
              <Soft color={C.teal}>理由优先于结论 · 过程优先于结果</Soft>——规范起决定作用
            </div>
            <div style={{marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 10}}>
              <BenchChip tone={C.teal} solid>
                代表：阿列克西
              </BenchChip>
              <span style={{fontSize: 21, fontWeight: 850, color: C.inkSoft}}>法律论证理论</span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={110} marker="same-process-bridge" style={{position: 'absolute', left: 740, top: 250, width: 440}}>
          <div style={{border: `2px solid ${C.panelEdge}`, backgroundColor: C.panelDim, padding: '10px 16px', textAlign: 'center', opacity: prog(frame, 116, 18)}}>
            <span style={{fontSize: 22, fontWeight: 950, color: C.ink}}>同一司法过程 · 两种描述角度</span>
          </div>
        </Enter>
        <Enter delay={170} from="up" marker="textbook-verdict" style={{position: 'absolute', left: 40, top: 524, width: 1736}}>
          <DarkStrip style={{height: 128}}>
            <BookMarked size={36} color={C.ochre} strokeWidth={2.2} />
            <span style={{fontSize: 23, fontWeight: 900, color: C.paper, lineHeight: 1.5}}>
              教材站论证：心理社会因素<Soft color={C.cinnabarPale}>不公开、无法规范检验</Soft>；若强调其决定作用——专业性丧失、可预测性彻底丧失
            </span>
            <span style={{marginLeft: 'auto'}}>
              <Stamp delay={190} size={24}>规范控制 · 理由公开</Stamp>
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const JustificationScene = () => {
  /* data-final-knowledge="justification-heading" data-final-knowledge="internal-bench" data-final-knowledge="external-bench" data-final-knowledge="mnemonic-strip" */
  return (
    <Shell code="03" kicker="内外部证成" title="内部搞逻辑，外部搞前提">
      <div
        data-layout="twin-justification-benches"
        data-visual-anchor="boundary"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="internal-derivation,external-premise-check,mnemonic-strip"
        data-focal-rule="internal-secures-predictability-external-secures-justifiability"
        data-focal-channels="icon,enclosure,contrast,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="justification-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.panel, border: `3px solid ${C.panelEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              证成＝给决定提供<InkUnderline delay={36}>充足理由</InkUnderline>的过程
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="internal-bench" style={{position: 'absolute', left: 40, top: 104, width: 850, height: 420}}>
          <Panel tone={C.teal} style={{height: '100%', padding: '18px 24px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Waypoints size={38} color={C.teal} strokeWidth={2.3} />
              <LabelTab bar={C.teal}>内部证成 · 管结论</LabelTab>
            </div>
            <div style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
              前提到结论按<Soft color={C.teal}>推理规则</Soft>有逻辑地推导——<BenchChip tone={C.teal}>不质疑前提</BenchChip>
            </div>
            <div style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
              只看推论是否<BenchChip tone={C.ochre} solid>有效</BenchChip>——就是法律推理的过程
            </div>
            <div style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
              实现<Soft color={C.teal}>可预测性</Soft>；对前提正当与否<Soft color={C.cinnabar}>无保障</Soft>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.ink, border: `2px solid ${C.panelEdge}`, backgroundColor: C.panelDim, padding: '10px 14px', lineHeight: 1.45}}>
              展开越细→问题越凸显、说服力越强；步骤越少跨度越大，规范性内涵越模糊（不影响成立）
            </div>
          </Panel>
        </Enter>
        <Enter delay={56} from="right" marker="external-bench" style={{position: 'absolute', left: 930, top: 104, width: 886, height: 420}}>
          <Panel tone={C.cinnabar} style={{height: '100%', padding: '18px 24px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Compass size={38} color={C.cinnabar} strokeWidth={2.3} />
              <LabelTab bar={C.cinnabar}>外部证成 · 管前提</LabelTab>
            </div>
            <div style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
              关涉<Soft color={C.cinnabar}>前提本身</Soft>是否合理、正当
            </div>
            <div style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
              包括：法律解释 · 案件事实的形成 · 法律渊源上的判断
            </div>
            <div style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
              实现<Soft color={C.cinnabar}>正当性</Soft>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.ink, border: `2px solid ${C.panelEdge}`, backgroundColor: C.panelDim, padding: '10px 14px', lineHeight: 1.45}}>
              外部证成的过程必然涉及内部证成——对前提的证成同样是推理
            </div>
          </Panel>
        </Enter>
        <Enter delay={160} from="up" marker="mnemonic-strip" style={{position: 'absolute', left: 40, top: 560, width: 1736}}>
          <DarkStrip style={{height: 108}}>
            <span style={{padding: '4px 13px', backgroundColor: C.ochre, color: C.graphite, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>口诀</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              <InkUnderline color={C.ochrePale} delay={180}>内部搞逻辑，外部搞前提</InkUnderline>——内部可预测 · 外部正当 · 外部必然包含内部
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const ApplicationOfLaw = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-goal-steps" {...SCENES.goalSteps}>
      <GoalStepsScene />
    </TimelineSequence>
    <TimelineSequence name="02-discovery-argument" {...SCENES.discoveryArgument}>
      <DiscoveryArgumentScene />
    </TimelineSequence>
    <TimelineSequence name="03-justification" {...SCENES.justification}>
      <JustificationScene />
    </TimelineSequence>
  </AbsoluteFill>
);
