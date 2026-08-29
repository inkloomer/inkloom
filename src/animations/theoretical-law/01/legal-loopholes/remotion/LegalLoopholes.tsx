import type {CSSProperties, ReactNode} from 'react';
import {BookOpen, Eye, EyeClosed, FileWarning, FileX, Gavel, Landmark, Maximize2, Minimize2, Scale} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  scroll: '#E8DFC8',
  scrollDeep: '#D9CDB0',
  panel: '#F5EFE0',
  panelDim: '#EAE2CC',
  panelEdge: '#6E6552',
  ink: '#2B2721',
  inkSoft: '#5A5142',
  void: '#4A453B',
  madder: '#A34A3C',
  madderPale: '#EFD2C8',
  pine: '#3E6252',
  pinePale: '#D3DFD5',
  ochre: '#B08A38',
  ochrePale: '#EDDDB4',
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
      backgroundColor: C.scroll,
      color: C.ink,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(90deg, transparent 0 126px, ${C.void}0A 126px 128px), repeating-linear-gradient(0deg, transparent 0 126px, ${C.void}07 126px 127px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.void}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.ochre}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.void, borderLeft: `8px solid ${C.madder}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 18 · {code}</span>
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
        borderBottom: `2px solid ${C.void}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.ink}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.ochre, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Hemp = ({children, marker, style, tone}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string}) => (
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

const LabelTab = ({children, bar = C.madder}: {readonly children: ReactNode; readonly bar?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', padding: '5px 14px', backgroundColor: C.void, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{children}</span>
);

const PineChip = ({tone = C.pine, children, solid = false}: {readonly tone?: string; readonly children: ReactNode; readonly solid?: boolean}) => (
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

const Stamp = ({children, delay = 0, size = 26, tone = C.madder}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

const InkUnderline = ({children, color = C.madder, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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
  <div style={{backgroundColor: 'rgba(74, 69, 59, 0.92)', border: `2px solid ${C.ochre}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

export const ConceptPreconditionScene = () => {
  /* data-final-knowledge="concept-heading" data-final-knowledge="loophole-definition" data-final-knowledge="no-refusal-gate" data-final-knowledge="silence-versus-defect" data-final-knowledge="system-check-note" */
  return (
    <Shell code="01" kicker="含义与判断" title="法律漏洞：违反立法计划的不圆满">
      <div
        data-layout="torn-scroll-definition-board"
        data-visual-anchor="concept-icon"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="loophole-definition,no-refusal-gate,silence-versus-defect"
        data-focal-rule="only-breaches-of-legislative-purpose-count-as-loopholes"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="concept-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.panel, border: `3px solid ${C.panelEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              法律漏洞＝<InkUnderline delay={36}>违反立法计划（目的）</InkUnderline>的不圆满性
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="loophole-definition" style={{position: 'absolute', left: 40, top: 104, width: 850, height: 230}}>
          <Hemp tone={C.void} style={{height: '100%', padding: '18px 24px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <FileWarning size={38} color={C.madder} strokeWidth={2.3} />
              <LabelTab>成因 · 为什么会有漏洞</LabelTab>
            </div>
            <div style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              立法者<Soft color={C.madder}>理性有限</Soft>——无法对未来一切情形事无巨细地规定
            </div>
            <div style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              于是应调整的事项可能<Soft color={C.madder}>未作明文规定</Soft>
            </div>
          </Hemp>
        </Enter>
        <Enter delay={56} from="right" marker="no-refusal-gate" style={{position: 'absolute', left: 930, top: 104, width: 886, height: 230}}>
          <Hemp tone={C.pine} style={{height: '100%', padding: '18px 24px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Gavel size={38} color={C.pine} strokeWidth={2.3} />
              <LabelTab bar={C.pine}>前提 · 禁止拒绝裁判</LabelTab>
            </div>
            <div style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              法官<Soft color={C.pine}>不得以法律没有规定或规定不清</Soft>为由拒绝裁判
            </div>
            <div style={{marginTop: 'auto'}}>
              <PineChip tone={C.pine} solid>
                有漏洞必须裁判——所以必须填补
              </PineChip>
            </div>
          </Hemp>
        </Enter>
        <Enter delay={90} from="up" marker="silence-versus-defect" style={{position: 'absolute', left: 40, top: 360, width: 1736, height: 160}}>
          <Hemp tone={C.ochre} style={{height: '100%', padding: '18px 24px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Landmark size={38} color={C.ochre} strokeWidth={2.3} />
              <LabelTab bar={C.ochre}>判断 · 先明确立法目的</LabelTab>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap'}}>
              <span style={{fontSize: 23, fontWeight: 880, color: C.ink}}>对「法外空间」的有意沉默——</span>
              <PineChip tone={C.pine}>不构成漏洞</PineChip>
              <span style={{fontSize: 26, fontWeight: 900, color: C.inkSoft}}>｜</span>
              <span style={{fontSize: 23, fontWeight: 880, color: C.ink}}>违反立法目的的缺陷——</span>
              <span data-final-knowledge="system-check-note">
                <Stamp delay={140} size={24}>才是真漏洞</Stamp>
              </span>
              <span style={{fontSize: 22, fontWeight: 850, color: C.inkSoft, marginLeft: 'auto'}}>他条已有规定 → 整个体系看·不构成漏洞</span>
            </div>
          </Hemp>
        </Enter>
        <Enter delay={170} from="up" style={{position: 'absolute', left: 40, top: 556, width: 1736}}>
          <DarkStrip style={{height: 100}}>
            <span style={{padding: '4px 13px', backgroundColor: C.ochre, color: C.void, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>一句记</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              漏洞是<Soft color={C.ochrePale}>立法缺陷</Soft>——沉默不是漏洞，违反计划才是漏洞
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const ClassificationLatticeScene = () => {
  /* data-final-knowledge="classification-heading" data-final-knowledge="whole-part-pair" data-final-knowledge="manifest-hidden-pair" data-final-knowledge="original-supervenient-pair" */
  return (
    <Shell code="02" kicker="三组分类" title="法律漏洞的六副面孔">
      <div
        data-layout="three-pair-fault-lattice"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="whole-part-pair,manifest-hidden-pair,original-supervenient-pair"
        data-focal-rule="every-loophole-is-either-manifest-or-hidden"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="classification-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.panel, border: `3px solid ${C.panelEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              按范围 · 按可见 · 按时间——<InkUnderline delay={36}>三组六种</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={26} from="left" marker="whole-part-pair" style={{position: 'absolute', left: 40, top: 104, width: 1736, height: 140}}>
          <Hemp tone={C.void} style={{height: '100%', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 18}}>
            <LabelTab bar={C.void}>按范围</LabelTab>
            <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 24, fontWeight: 950, color: C.ink, width: 300}}>
              <FileX size={34} color={C.madder} strokeWidth={2.3} />
              全部漏洞
            </span>
            <span style={{fontSize: 23, fontWeight: 880, color: C.ink, width: 430}}>完全未作规定＝<Soft color={C.madder}>立法空白</Soft></span>
            <span style={{width: 2, height: 60, backgroundColor: C.panelEdge}} />
            <span style={{fontSize: 24, fontWeight: 950, color: C.ink, width: 300}}>部分漏洞</span>
            <span style={{fontSize: 23, fontWeight: 880, color: C.ink, flex: 1}}>有规定但<Soft color={C.ochre}>不够全面完整</Soft></span>
          </Hemp>
        </Enter>
        <Enter delay={56} from="left" marker="manifest-hidden-pair" style={{position: 'absolute', left: 40, top: 268, width: 1736, height: 140}}>
          <Hemp tone={C.madder} style={{height: '100%', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 18}}>
            <LabelTab>按可见</LabelTab>
            <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 24, fontWeight: 950, color: C.ink, width: 300}}>
              <Eye size={34} color={C.madder} strokeWidth={2.3} />
              明显漏洞
            </span>
            <span style={{fontSize: 23, fontWeight: 880, color: C.ink, width: 430}}>应当<Soft color={C.madder}>积极规定</Soft>却未规定</span>
            <span style={{width: 2, height: 60, backgroundColor: C.panelEdge}} />
            <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 24, fontWeight: 950, color: C.ink, width: 300}}>
              <EyeClosed size={34} color={C.void} strokeWidth={2.3} />
              隐藏漏洞
            </span>
            <span style={{fontSize: 23, fontWeight: 880, color: C.ink, flex: 1}}>应规定<Soft color={C.madder}>例外</Soft>情形却未规定</span>
          </Hemp>
        </Enter>
        <Enter delay={86} from="left" marker="original-supervenient-pair" style={{position: 'absolute', left: 40, top: 432, width: 1736, height: 176}}>
          <Hemp tone={C.pine} style={{height: '100%', padding: '14px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 18}}>
              <LabelTab bar={C.pine}>按时间</LabelTab>
              <span style={{fontSize: 24, fontWeight: 950, color: C.ink, width: 300}}>自始漏洞 · 制定时已有</span>
              <span style={{fontSize: 23, fontWeight: 880, color: C.ink, flex: 1}}>
                明知漏洞＝<Soft color={C.pine}>有意沉默</Soft>「法政策漏洞」典型如<PineChip tone={C.pine}>委任性规则</PineChip>；不明知＝疏忽或认知局限
              </span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 18}}>
              <span style={{fontSize: 24, fontWeight: 950, color: C.ink, width: 300, marginLeft: 174}}>嗣后漏洞 · 实施后出现</span>
              <span style={{fontSize: 23, fontWeight: 880, color: C.ink, flex: 1}}>
                社会形势变化出现<Soft color={C.ochre}>新情况新问题</Soft>，立法者未预见
              </span>
            </div>
          </Hemp>
        </Enter>
        <Enter delay={150} from="up" style={{position: 'absolute', left: 40, top: 636, width: 1736}}>
          <DarkStrip style={{height: 88}}>
            <span style={{padding: '4px 13px', backgroundColor: C.ochre, color: C.void, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>收束</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>
              千变万化归两条：一切漏洞，要么<Soft color={C.madderPale}>明显</Soft>，要么<Soft color={C.pinePale}>隐藏</Soft>
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const FillingMethodsScene = () => {
  /* data-final-knowledge="filling-heading" data-final-knowledge="expansion-press" data-final-knowledge="restriction-press" data-final-knowledge="similarity-principle-note" */
  return (
    <Shell code="03" kicker="填补两法" title="目的论扩张与目的论限缩">
      <div
        data-layout="expansion-limitation-range-pair"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="teleological-expansion,teleological-restriction,similarity-principle-note"
        data-focal-rule="manifest-gaps-expand-and-hidden-gaps-restrict-by-purpose"
        data-focal-channels="icon,connector,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="filling-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.panel, border: `3px solid ${C.panelEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              明显漏洞→扩张 ｜ 隐藏漏洞→<InkUnderline delay={36}>限缩</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="expansion-press" style={{position: 'absolute', left: 40, top: 104, width: 850, height: 424}}>
          <Hemp tone={C.pine} style={{height: '100%', padding: '18px 24px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Maximize2 size={38} color={C.pine} strokeWidth={2.3} />
              <LabelTab bar={C.pine}>目的论扩张 · 针对明显漏洞</LabelTab>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Stamp delay={90} size={24}>词不达意 · 当说不说</Stamp>
              <PineChip tone={C.madder}>说少了</PineChip>
            </div>
            <div style={{marginTop: 6}}>
              <div style={{position: 'relative', height: 66, border: `2px solid ${C.panelEdge}`, backgroundColor: C.panelDim}}>
                <span style={{position: 'absolute', left: 8, top: 8, bottom: 8, width: 200, backgroundColor: `${C.pine}30`, border: `2px solid ${C.pine}`}} />
                <span style={{position: 'absolute', left: 8, top: 16, width: 200, textAlign: 'center', fontSize: 21, fontWeight: 900, color: C.ink}}>文义所载</span>
                <span style={{position: 'absolute', left: 380, top: 16, fontSize: 21, fontWeight: 900, color: C.pine}}>→ 扩张纳入「潜在包含」情形</span>
              </div>
            </div>
            <div style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
              规定范围<Soft color={C.pine}>小于</Soft>规范目的——把本该包含的情形包含进来
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.ink, border: `2px solid ${C.panelEdge}`, backgroundColor: C.panelDim, padding: '10px 14px', lineHeight: 1.45}}>
              两步要求：① 确定规范目的 ② 证明所欲包含情形为规范目的之必须
            </div>
          </Hemp>
        </Enter>
        <Enter delay={56} from="right" marker="restriction-press" style={{position: 'absolute', left: 930, top: 104, width: 886, height: 424}}>
          <Hemp tone={C.madder} style={{height: '100%', padding: '18px 24px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Minimize2 size={38} color={C.madder} strokeWidth={2.3} />
              <LabelTab>目的论限缩 · 针对隐藏漏洞</LabelTab>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Stamp delay={110} size={24}>言过其实 · 不当说却说了</Stamp>
              <PineChip tone={C.madder} solid>
                说过了
              </PineChip>
            </div>
            <div style={{marginTop: 6}}>
              <div style={{position: 'relative', height: 66, border: `2px solid ${C.panelEdge}`, backgroundColor: C.panelDim}}>
                <span style={{position: 'absolute', left: 8, top: 8, bottom: 8, width: 420, backgroundColor: `${C.madder}22`, border: `2px solid ${C.madder}`}} />
                <span style={{position: 'absolute', left: 8, top: 16, width: 420, textAlign: 'center', fontSize: 21, fontWeight: 900, color: C.ink}}>文义所载（过宽）</span>
                <span style={{position: 'absolute', left: 456, top: 16, fontSize: 21, fontWeight: 900, color: C.madder}}>→ 创设例外排除在外</span>
              </div>
            </div>
            <div style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
              规定范围<Soft color={C.madder}>大于</Soft>规范目的——依目的创设例外，把不该包含的排除
            </div>
            <div data-final-knowledge="similarity-principle-note" style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.ink, border: `2px solid ${C.panelEdge}`, backgroundColor: C.panelDim, padding: '10px 14px', lineHeight: 1.45}}>
              基本原理：<Soft color={C.pine}>相似案件相似处理</Soft>——不相似的案件，理应区别对待
            </div>
          </Hemp>
        </Enter>
        <Enter delay={170} from="up" style={{position: 'absolute', left: 40, top: 560, width: 1736}}>
          <DarkStrip style={{height: 100}}>
            <span style={{padding: '4px 13px', backgroundColor: C.ochre, color: C.void, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>一句记</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              说少了就<Soft color={C.pinePale}>扩进来</Soft>，说过了就<Soft color={C.madderPale}>缩出去</Soft>——都以规范目的为尺
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const InterpretationBoundaryScene = () => {
  /* data-final-knowledge="boundary-heading" data-final-knowledge="ordinary-sense-zone" data-final-knowledge="ultra-sense-zone" data-final-knowledge="restriction-condition-note" */
  return (
    <Shell code="04" kicker="与解释之辨" title="目的论填补 ≠ 扩张与限制解释">
      <div
        data-layout="meaning-scope-boundary-board"
        data-visual-anchor="boundary"
        data-text-treatments="label-block,chip,external-negation,stamp"
        data-visual-grammar="ordinary-sense-zone,ultra-sense-zone,restriction-condition-note"
        data-focal-rule="interpretations-stay-in-ordinary-sense-teleology-crosses-it"
        data-focal-channels="icon,enclosure,contrast,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="boundary-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.panel, border: `3px solid ${C.panelEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              分界线＝<InkUnderline delay={36}>文义的通常含义</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="up" marker="ordinary-sense-zone" style={{position: 'absolute', left: 40, top: 104, width: 900, height: 300}}>
          <Hemp tone={C.pine} style={{height: '100%', padding: '18px 24px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <BookOpen size={38} color={C.pine} strokeWidth={2.3} />
              <LabelTab bar={C.pine}>通常文义范围之内 · 解释</LabelTab>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
              <PineChip tone={C.pine} solid>
                扩张解释
              </PineChip>
              <span style={{fontSize: 22, fontWeight: 880, color: C.inkSoft}}>文义内从宽</span>
              <span style={{width: 2, height: 44, backgroundColor: C.panelEdge}} />
              <PineChip tone={C.pine} solid>
                限制解释
              </PineChip>
              <span style={{fontSize: 22, fontWeight: 880, color: C.inkSoft}}>文义内从窄</span>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.ink, border: `2px solid ${C.panelEdge}`, backgroundColor: C.panelDim, padding: '10px 14px'}}>
              二者都在<Soft color={C.pine}>通常文义范围内</Soft>活动——属于法律解释
            </div>
          </Hemp>
        </Enter>
        <Enter delay={56} from="up" marker="ultra-sense-zone" style={{position: 'absolute', left: 980, top: 104, width: 836, height: 300}}>
          <Hemp tone={C.madder} style={{height: '100%', padding: '18px 24px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Scale size={38} color={C.madder} strokeWidth={2.3} />
              <LabelTab>已越文义 · 目的论填补</LabelTab>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
              <PineChip tone={C.madder} solid>
                目的论扩张
              </PineChip>
              <span style={{fontSize: 22, fontWeight: 880, color: C.inkSoft}}>已<Soft color={C.madder}>逾越</Soft>文义通常含义</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
              <PineChip tone={C.madder} solid>
                目的论限缩
              </PineChip>
              <span style={{fontSize: 22, fontWeight: 880, color: C.inkSoft}}>为文义<Soft color={C.madder}>添加限制条件</Soft></span>
            </div>
            <div style={{marginTop: 'auto'}}>
              <Stamp delay={140} size={24}>这是漏洞填补 · 不是解释</Stamp>
            </div>
          </Hemp>
        </Enter>
        <Enter delay={150} from="up" marker="restriction-condition-note" style={{position: 'absolute', left: 40, top: 440, width: 1736}}>
          <DarkStrip style={{height: 116}}>
            <span style={{padding: '4px 13px', backgroundColor: C.ochre, color: C.void, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>易错辨析</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper, lineHeight: 1.5}}>
              扩张／限制解释＝<Soft color={C.pinePale}>文义内</Soft>的宽窄 ｜ 目的论扩张＝<Soft color={C.madderPale}>越过文义</Soft>纳入 ｜ 目的论限缩＝给文义<Soft color={C.madderPale}>加限制条件</Soft>
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const LegalLoopholes = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-concept-precondition" {...SCENES.conceptPrecondition}>
      <ConceptPreconditionScene />
    </TimelineSequence>
    <TimelineSequence name="02-classification-lattice" {...SCENES.classificationLattice}>
      <ClassificationLatticeScene />
    </TimelineSequence>
    <TimelineSequence name="03-filling-methods" {...SCENES.fillingMethods}>
      <FillingMethodsScene />
    </TimelineSequence>
    <TimelineSequence name="04-interpretation-boundary" {...SCENES.interpretationBoundary}>
      <InterpretationBoundaryScene />
    </TimelineSequence>
  </AbsoluteFill>
);
