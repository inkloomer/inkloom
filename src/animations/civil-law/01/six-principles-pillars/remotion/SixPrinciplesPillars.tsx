import type {CSSProperties, ReactNode} from 'react';
import {Ban, Bird, Compass, Gavel, Handshake, Heart, Landmark, Leaf, Scale} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const C = {
  granite: '#5A6672',
  graniteMid: '#6E7A86',
  graniteDeep: '#2F353D',
  paper: '#F1EBDC',
  paperDim: '#E4DCC8',
  paperEdge: '#BFB49A',
  cinnabar: '#B33A2E',
  cinnabarPale: '#F0D6CE',
  brass: '#A98634',
  brassPale: '#E3CF9E',
  moss: '#5E7D54',
  mossPale: '#DCE5D2',
  slate: '#44536E',
  slatePale: '#D5DCE8',
  ink: '#272B30',
  inkSoft: '#666D74',
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
      backgroundColor: C.graniteDeep,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(90deg, transparent 0 176px, rgba(0, 0, 0, 0.14) 176px 179px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.brass}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.brassPale}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.graniteMid, borderLeft: `8px solid ${C.brass}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>民法 · 第1讲 · {code}</span>
    </div>
    <header
      style={{
        position: 'absolute',
        left: 290,
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

const Plaque = ({children, tone = C.slate}: {readonly children: ReactNode; readonly tone?: string}) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '5px 14px',
      backgroundColor: tone,
      border: `2px solid ${C.brass}`,
      boxShadow: `0 2px 0 ${C.graniteDeep}`,
      color: C.paper,
      fontSize: 22,
      fontWeight: 900,
      letterSpacing: 2,
    }}
  >
    {children}
  </span>
);

const Seal = ({children, delay = 0, size = 24, tone = C.cinnabar}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '7px 15px',
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

const Under = ({children, color = C.cinnabar, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

const Chip = ({children, tone = C.paperEdge, toneBg = C.paperDim, ink = C.ink}: {readonly children: ReactNode; readonly tone?: string; readonly toneBg?: string; readonly ink?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${tone}`, backgroundColor: toneBg, padding: '5px 12px', fontSize: 22, fontWeight: 900, color: ink, whiteSpace: 'nowrap'}}>{children}</span>
);

export const PrincipleFunctionsScene = () => {
  /* data-final-knowledge="concept-banner" data-final-knowledge="legislation-zone" data-final-knowledge="adjudication-zone" data-final-knowledge="activity-zone" */
  return (
    <Shell code="01" kicker="概述与功能" title="民法基本原则：一部民法的总纲">
      <div
        data-layout="tripartite-function-arena"
        data-visual-anchor="boundary"
        data-text-treatments="label-block,soft-highlight,stamp,thin-underline"
        data-visual-grammar="principles-bind-legislation-adjudication-and-conduct-alike,legislation-builds-norms-on-the-principle-foundation,adjudication-fills-loopholes-and-points-interpretation,civil-activity-is-guided-by-the-civil-value-orientation"
        data-focal-rule="one-principle-body-binding-all-three-civil-arenas"
        data-focal-channels="icon,enclosure,connector,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="concept-banner" style={{position: 'absolute', left: 238, top: 0, width: 1300}}>
          <div style={{backgroundColor: C.paper, border: `3px solid ${C.paperEdge}`, padding: '10px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 33, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              效力<Under delay={34}>贯穿民法始终</Under>的根本准则
            </span>
          </div>
        </Enter>
        <Enter delay={26} from="up" marker="legislation-zone" style={{position: 'absolute', left: 40, top: 100, width: 552, height: 544}}>
          <div style={{height: '100%', backgroundColor: C.paper, border: `3px solid ${C.slate}`, display: 'flex', flexDirection: 'column', gap: 14, padding: '18px 22px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Landmark size={40} color={C.slate} strokeWidth={2.3} />
              <Plaque tone={C.slate}>立法之中</Plaque>
            </div>
            <div style={{fontSize: 26, fontWeight: 950, color: C.ink}}>
              是民事法律规范的<Soft color={C.slate}>构建基础</Soft>
            </div>
            <div style={{marginTop: 6, display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center'}}>
              <Chip>规范 · 总则编</Chip>
              <Chip>规范 · 物权编</Chip>
              <Chip>规范 · 合同编</Chip>
              <div style={{width: 470, height: 14, backgroundColor: C.granite, border: `2px solid ${C.graniteDeep}`}} />
              <span style={{fontSize: 22, fontWeight: 900, color: C.inkSoft}}>基本原则＝地基</span>
            </div>
            <div style={{marginTop: 'auto', border: `2px solid ${C.paperEdge}`, backgroundColor: C.paperDim, padding: '8px 12px', fontSize: 22, fontWeight: 850, color: C.inkSoft}}>一切民事法律规范都立在其上</div>
          </div>
        </Enter>
        <Enter delay={44} from="up" marker="adjudication-zone" style={{position: 'absolute', left: 612, top: 100, width: 552, height: 544}}>
          <div style={{height: '100%', backgroundColor: C.paper, border: `3px solid ${C.cinnabar}`, display: 'flex', flexDirection: 'column', gap: 12, padding: '18px 22px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Gavel size={40} color={C.cinnabar} strokeWidth={2.3} />
              <Plaque tone={C.cinnabar}>司法之中</Plaque>
            </div>
            <div style={{border: `2px solid ${C.cinnabar}`, backgroundColor: C.cinnabarPale, padding: '10px 14px'}}>
              <div style={{fontSize: 24, fontWeight: 950, color: C.ink}}>填补漏洞</div>
              <div style={{fontSize: 22, fontWeight: 880, color: C.inkSoft, marginTop: 4, lineHeight: 1.45}}>法律或行为存在漏洞 → 以原则填补</div>
            </div>
            <div style={{border: `2px solid ${C.slate}`, backgroundColor: C.slatePale, padding: '10px 14px'}}>
              <div style={{fontSize: 24, fontWeight: 950, color: C.ink}}>解释方向</div>
              <div style={{fontSize: 22, fontWeight: 880, color: C.inkSoft, marginTop: 4, lineHeight: 1.45}}>解释存在疑问 → 提供正确方向</div>
            </div>
            <div style={{marginTop: 'auto', display: 'flex'}}>
              <Seal delay={150} size={22}>对法律与法律行为双适用</Seal>
            </div>
          </div>
        </Enter>
        <Enter delay={62} from="up" marker="activity-zone" style={{position: 'absolute', left: 1184, top: 100, width: 552, height: 544}}>
          <div style={{height: '100%', backgroundColor: C.paper, border: `3px solid ${C.moss}`, display: 'flex', flexDirection: 'column', gap: 10, padding: '18px 22px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Compass size={40} color={C.moss} strokeWidth={2.3} />
              <Plaque tone={C.moss}>民事活动之中</Plaque>
            </div>
            <div style={{fontSize: 26, fontWeight: 950, color: C.ink}}>主要性质：<Soft color={C.moss}>引导功能</Soft></div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 8, marginTop: 4}}>
              {['引导民事主体', '按照民法的价值观', '从事民事活动'].map((step, stepIndex) => (
                <div key={step} style={{display: 'flex', alignItems: 'center', gap: 8}}>
                  <span style={{width: 34, height: 34, borderRadius: 17, backgroundColor: C.moss, color: C.paper, fontSize: 20, fontWeight: 950, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--inkloom-animation-mono)'}}>{stepIndex + 1}</span>
                  <Chip tone={C.moss} toneBg={C.mossPale}>{step}</Chip>
                </div>
              ))}
            </div>
            <div style={{marginTop: 'auto', border: `2px solid ${C.paperEdge}`, backgroundColor: C.paperDim, padding: '8px 12px', fontSize: 22, fontWeight: 850, color: C.inkSoft}}>像罗盘一样，为民事活动定价值方向</div>
          </div>
        </Enter>
        <Enter delay={130} from="up" style={{position: 'absolute', left: 40, top: 668, width: 1696, height: 92}}>
          <div style={{height: '100%', backgroundColor: C.graniteMid, border: `2px solid ${C.brass}`, display: 'flex', alignItems: 'center', gap: 18, padding: '0 26px'}}>
            <span style={{padding: '4px 13px', backgroundColor: C.brass, color: C.graniteDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>功能口诀</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              立法<Soft color={C.brassPale}>建基础</Soft> · 司法<Soft color={C.brassPale}>填漏洞</Soft>、<Soft color={C.brassPale}>指方向</Soft> · 活动<Soft color={C.brassPale}>强引导</Soft>
            </span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const EqualityVolitionScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="equality-fork" data-final-knowledge="volition-fork" data-final-knowledge="public-interest-exemption" data-final-knowledge="no-manifestation-rule"
     data-stateful-source="intent-manifestation" data-stateful-terminal="intent-manifestation" */
  const tokenDrop = prog(frame, 150, 40);
  const tokenY = interpolate(tokenDrop, [0, 1], [92, 252]);
  return (
    <Shell code="02" kicker="平等 · 自愿" title="平等与自愿：两根支柱上的分叉">
      <div
        data-layout="twin-pillar-fork-bench"
        data-visual-anchor="document-fork"
        data-text-treatments="label-block,stamp,external-negation"
        data-visual-grammar="equal-personality-is-the-core-of-civil-relations,privilege-and-discrimination-breach-equality,public-interest-purpose-legitimises-differentiation,fraud-duress-necessity-unfairness-distort-will,silence-is-no-manifestation-so-no-volition-issue"
        data-focal-rule="purpose-or-manifestation-decides-whether-the-principle-is-breached"
        data-focal-channels="connector,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="equality-fork" style={{position: 'absolute', left: 40, top: 0, width: 820, height: 64}}>
          <div style={{height: '100%', backgroundColor: C.slate, border: `2px solid ${C.brass}`, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12}}>
            <Scale size={30} color={C.paper} strokeWidth={2.4} />
            <span style={{fontSize: 26, fontWeight: 950, color: C.paper}}>平等原则 · 人格平等</span>
          </div>
        </Enter>
        <Enter delay={20} from="down" style={{position: 'absolute', left: 40, top: 80, width: 820, height: 52}}>
          <div style={{height: '100%', display: 'flex', justifyContent: 'center'}}>
            <Chip tone={C.slate} toneBg={C.slatePale}>民事关系中出现 区别对待</Chip>
          </div>
        </Enter>
        <Enter delay={34} from="none" style={{position: 'absolute', left: 448, top: 132, width: 4, height: 22}}>
          <div style={{width: '100%', height: '100%', backgroundColor: C.brass}} />
        </Enter>
        <Enter delay={38} from="none" style={{position: 'absolute', left: 220, top: 154, width: 460, height: 4}}>
          <div style={{width: '100%', height: '100%', backgroundColor: C.brass}} />
        </Enter>
        <Enter delay={42} from="none" style={{position: 'absolute', left: 220, top: 158, width: 4, height: 22}}>
          <div style={{width: '100%', height: '100%', backgroundColor: C.brass}} />
        </Enter>
        <Enter delay={42} from="none" style={{position: 'absolute', left: 676, top: 158, width: 4, height: 22}}>
          <div style={{width: '100%', height: '100%', backgroundColor: C.brass}} />
        </Enter>
        <Enter delay={54} from="up" style={{position: 'absolute', left: 40, top: 184, width: 400, height: 224}}>
          <div style={{height: '100%', backgroundColor: C.cinnabarPale, border: `3px solid ${C.cinnabar}`, display: 'flex', flexDirection: 'column', gap: 10, padding: '14px 18px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <Ban size={30} color={C.cinnabar} strokeWidth={2.5} />
              <span style={{fontSize: 24, fontWeight: 950, color: C.ink}}>设立特权 · 歧视</span>
            </div>
            <div style={{fontSize: 22, fontWeight: 900, color: C.inkSoft, lineHeight: 1.5}}>无正当目的的区别对待 → <Seal delay={120} size={20}>违反平等</Seal></div>
            <div style={{marginTop: 'auto', border: `2px solid ${C.paperEdge}`, backgroundColor: C.paper, padding: '8px 12px', fontSize: 22, fontWeight: 850, color: C.inkSoft}}>例：仅处级以上干部可购茅台</div>
          </div>
        </Enter>
        <Enter delay={70} from="up" marker="public-interest-exemption" style={{position: 'absolute', left: 460, top: 184, width: 400, height: 224}}>
          <div style={{height: '100%', backgroundColor: C.mossPale, border: `3px solid ${C.moss}`, display: 'flex', flexDirection: 'column', gap: 10, padding: '14px 18px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <Landmark size={30} color={C.moss} strokeWidth={2.5} />
              <span style={{fontSize: 24, fontWeight: 950, color: C.ink}}>目的＝公共利益 / 公序良俗</span>
            </div>
            <div style={{fontSize: 22, fontWeight: 900, color: C.inkSoft, lineHeight: 1.5}}>性质：不构成特权歧视 → <Seal delay={150} size={20} tone={C.moss}>不违反</Seal></div>
            <div style={{marginTop: 'auto', border: `2px solid ${C.paperEdge}`, backgroundColor: C.paper, padding: '8px 12px', fontSize: 22, fontWeight: 850, color: C.inkSoft}}>例：军人优先登机 ✈ 否</div>
          </div>
        </Enter>
        <Enter delay={110} from="up" style={{position: 'absolute', left: 40, top: 428, width: 820, height: 56}}>
          <div style={{height: '100%', backgroundColor: C.graniteMid, border: `2px solid ${C.brass}`, display: 'flex', alignItems: 'center', gap: 14, padding: '0 20px'}}>
            <span style={{padding: '3px 11px', backgroundColor: C.brass, color: C.graniteDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>适用边界</span>
            <span style={{fontSize: 23, fontWeight: 900, color: C.paper}}>严格以<Soft color={C.brassPale}>民事领域</Soft>为限 · 绝对不涉及国家<Soft color={C.brassPale}>公共领域</Soft></span>
          </div>
        </Enter>
        <Enter delay={16} from="down" marker="volition-fork" style={{position: 'absolute', left: 916, top: 0, width: 820, height: 64}}>
          <div style={{height: '100%', backgroundColor: C.cinnabar, border: `2px solid ${C.brass}`, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12}}>
            <Bird size={30} color={C.paper} strokeWidth={2.4} />
            <span style={{fontSize: 26, fontWeight: 950, color: C.paper}}>自愿原则 · 意思表示自愿</span>
          </div>
        </Enter>
        <div data-stateful-source="intent-manifestation" style={{position: 'absolute', left: 1266, top: tokenY, opacity: 1 - prog(frame, 196, 16)}}>
          <Chip tone={C.cinnabar} toneBg={C.paper}><Bird size={22} color={C.cinnabar} strokeWidth={2.5} /> 意思表示</Chip>
        </div>
        <Enter delay={60} from="up" style={{position: 'absolute', left: 916, top: 184, width: 500, height: 300}}>
          <div style={{height: '100%', backgroundColor: C.paper, border: `3px solid ${C.cinnabar}`, display: 'flex', flexDirection: 'column', gap: 10, padding: '14px 18px'}}>
            <span style={{fontSize: 23, fontWeight: 950, color: C.ink}}>四类扭曲事由 → 意思表示与内心意愿不符</span>
            <div style={{display: 'flex', gap: 8, flexWrap: 'wrap'}}>
              <Chip tone={C.cinnabar} toneBg={C.cinnabarPale}>欺诈</Chip>
              <Chip tone={C.cinnabar} toneBg={C.cinnabarPale}>胁迫</Chip>
              <Chip tone={C.cinnabar} toneBg={C.cinnabarPale}>乘人之危</Chip>
              <Chip tone={C.cinnabar} toneBg={C.cinnabarPale}>显失公平</Chip>
            </div>
            <div style={{marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 12}}>
              <Seal delay={170} size={22}>违反自愿</Seal>
              <span style={{fontSize: 22, fontWeight: 880, color: C.inkSoft}}>并须承受自己选择的结果</span>
            </div>
          </div>
        </Enter>
        <Enter delay={90} from="up" marker="no-manifestation-rule" style={{position: 'absolute', left: 1436, top: 184, width: 300, height: 300}}>
          <div style={{height: '100%', border: `3px dashed ${C.moss}`, backgroundColor: C.mossPale, display: 'flex', flexDirection: 'column', gap: 10, padding: '14px 16px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
              <Ban size={28} color={C.moss} strokeWidth={2.5} />
              <span style={{fontSize: 23, fontWeight: 950, color: C.ink}}>未经同意</span>
            </div>
            <span data-stateful-terminal="intent-manifestation" style={{border: `2px dashed ${C.moss}`, backgroundColor: C.paper, padding: '6px 10px', fontSize: 22, fontWeight: 950, color: C.ink, textAlign: 'center'}}>未作意思表示</span>
            <div style={{fontSize: 22, fontWeight: 900, color: C.inkSoft, lineHeight: 1.5}}>没有表达 → 无自愿问题 → <Seal delay={190} size={20} tone={C.moss}>不违反</Seal></div>
            <div style={{marginTop: 'auto', border: `2px solid ${C.paperEdge}`, backgroundColor: C.paper, padding: '8px 10px', fontSize: 22, fontWeight: 850, color: C.inkSoft}}>例：乙擅自出卖甲的电脑</div>
          </div>
        </Enter>
        <Enter delay={140} from="up" style={{position: 'absolute', left: 916, top: 508, width: 820, height: 56}}>
          <div style={{height: '100%', backgroundColor: C.graniteMid, border: `2px solid ${C.brass}`, display: 'flex', alignItems: 'center', gap: 14, padding: '0 20px'}}>
            <span style={{padding: '3px 11px', backgroundColor: C.brass, color: C.graniteDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>逻辑关联</span>
            <span style={{fontSize: 23, fontWeight: 900, color: C.paper}}>自愿原则＝<Soft color={C.brassPale}>平等原则的延伸</Soft> · 适用领域＝民事法律关系</span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const FairnessGoodfaithScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="fairness-bench" data-final-knowledge="goodfaith-bench" data-final-knowledge="substantive-review-trigger" data-final-knowledge="springtime-verdict"
     data-stateful-source="balance-weight" data-stateful-terminal="balance-weight" */
  const weightDrop = prog(frame, 120, 36);
  const weightY = interpolate(weightDrop, [0, 1], [110, 214]);
  return (
    <Shell code="03" kicker="公平 · 诚信" title="公平与诚信：两座台前的天平">
      <div
        data-layout="dual-bench-comparison"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,soft-highlight,stamp,thin-underline"
        data-visual-grammar="voluntariness-presumes-formal-fairness-without-substantive-review,advantage-distress-or-standard-terms-trigger-fairness-review,good-faith-requires-keeping-words-and-well-wishing,breach-and-malice-harm-are-the-two-faithlessness-modes"
        data-focal-rule="formal-fairness-defaults-until-advantage-distress-or-standard-terms-trigger-review"
        data-focal-channels="contrast,enclosure,annotation,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="fairness-bench" style={{position: 'absolute', left: 40, top: 0, width: 820, height: 64}}>
          <div style={{height: '100%', backgroundColor: C.slate, border: `2px solid ${C.brass}`, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12}}>
            <Scale size={30} color={C.paper} strokeWidth={2.4} />
            <span style={{fontSize: 26, fontWeight: 950, color: C.paper}}>公平原则 · 利益均衡</span>
          </div>
        </Enter>
        <div data-stateful-source="balance-weight" style={{position: 'absolute', left: 428, top: weightY, opacity: 1 - prog(frame, 160, 16)}}>
          <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 20, backgroundColor: C.brass, border: `3px solid ${C.graniteDeep}`, color: C.paper, fontSize: 20, fontWeight: 950}}>衡</span>
        </div>
        <Enter delay={24} from="up" style={{position: 'absolute', left: 40, top: 84, width: 820, height: 150}}>
          <div style={{height: '100%', backgroundColor: C.paper, border: `3px solid ${C.slate}`, display: 'flex', alignItems: 'center', gap: 20, padding: '0 22px'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4}}>
              <div style={{display: 'flex', gap: 90}}>
                <Chip tone={C.slate} toneBg={C.slatePale}>权利</Chip>
                <Chip tone={C.slate} toneBg={C.slatePale}>义务</Chip>
              </div>
              <div style={{width: 300, height: 6, backgroundColor: C.slate}} />
              <span data-stateful-terminal="balance-weight" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 20, backgroundColor: C.brass, border: `3px solid ${C.graniteDeep}`, color: C.paper, fontSize: 20, fontWeight: 950, opacity: prog(frame, 164, 14)}}>衡</span>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 8, flex: 1}}>
              <span style={{fontSize: 24, fontWeight: 950, color: C.ink}}>交易结果的利益配置应当<Under delay={60} color={C.slate}>均衡</Under></span>
              <span style={{fontSize: 22, fontWeight: 900, color: C.inkSoft}}>原则：<Soft color={C.slate}>自愿即公平</Soft>（形式公平观），一般不做实质性审查</span>
            </div>
          </div>
        </Enter>
        <Enter delay={60} from="up" marker="substantive-review-trigger" style={{position: 'absolute', left: 40, top: 252, width: 820, height: 232}}>
          <div style={{height: '100%', backgroundColor: C.cinnabarPale, border: `3px solid ${C.cinnabar}`, display: 'flex', flexDirection: 'column', gap: 10, padding: '14px 20px'}}>
            <span style={{fontSize: 24, fontWeight: 950, color: C.ink}}>个别情况：才对交易公平加以<Under delay={110} color={C.cinnabar}>实质审查</Under></span>
            <div style={{display: 'flex', gap: 8, flexWrap: 'wrap'}}>
              <Chip tone={C.cinnabar} toneBg={C.paper}>利用自己的优势</Chip>
              <Chip tone={C.cinnabar} toneBg={C.paper}>利用对方危难</Chip>
              <Chip tone={C.cinnabar} toneBg={C.paper}>利用格式条款</Chip>
            </div>
            <div style={{fontSize: 22, fontWeight: 900, color: C.inkSoft, lineHeight: 1.5}}>对方处于<Soft color={C.cinnabar}>被动境地</Soft> · 选择余地较小 → 此时才有违反公平原则之问题</div>
            <div style={{marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 12}}>
              <Seal delay={190} size={22}>实质公平观</Seal>
              <span style={{fontSize: 22, fontWeight: 880, color: C.inkSoft}}>例外审查，不是普遍体检</span>
            </div>
          </div>
        </Enter>
        <Enter delay={120} from="up" marker="springtime-verdict" style={{position: 'absolute', left: 40, top: 504, width: 820, height: 88}}>
          <div style={{height: '100%', backgroundColor: C.paper, border: `3px solid ${C.cinnabar}`, display: 'flex', alignItems: 'center', gap: 16, padding: '0 20px'}}>
            <span style={{padding: '4px 12px', backgroundColor: C.cinnabar, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2, flexShrink: 0, whiteSpace: 'nowrap'}}>案例判决</span>
            <span style={{fontSize: 23, fontWeight: 900, color: C.ink}}>春运坐票价格卖站票——乘客<Soft color={C.cinnabar}>别无选择</Soft>且利益<Soft color={C.cinnabar}>失衡</Soft></span>
            <span style={{marginLeft: 'auto', flexShrink: 0}}><Seal delay={220} size={22}>违反公平</Seal></span>
          </div>
        </Enter>
        <Enter delay={16} from="down" marker="goodfaith-bench" style={{position: 'absolute', left: 916, top: 0, width: 820, height: 64}}>
          <div style={{height: '100%', backgroundColor: C.moss, border: `2px solid ${C.brass}`, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12}}>
            <Handshake size={30} color={C.paper} strokeWidth={2.4} />
            <span style={{fontSize: 26, fontWeight: 950, color: C.paper}}>诚信原则 · 诚实信用</span>
          </div>
        </Enter>
        <Enter delay={40} from="up" style={{position: 'absolute', left: 916, top: 84, width: 820, height: 128}}>
          <div style={{height: '100%', backgroundColor: C.paper, border: `3px solid ${C.moss}`, display: 'flex', alignItems: 'center', gap: 18, padding: '0 22px'}}>
            <span style={{fontSize: 23, fontWeight: 950, color: C.ink, flexShrink: 0}}>两大要求</span>
            <Chip tone={C.moss} toneBg={C.mossPale}>遵约守信</Chip>
            <Chip tone={C.moss} toneBg={C.mossPale}>与人为善</Chip>
            <span style={{fontSize: 22, fontWeight: 880, color: C.inkSoft}}>本着这两种心态与对方交往</span>
          </div>
        </Enter>
        <Enter delay={70} from="up" style={{position: 'absolute', left: 916, top: 232, width: 400, height: 252}}>
          <div style={{height: '100%', backgroundColor: C.cinnabarPale, border: `3px solid ${C.cinnabar}`, display: 'flex', flexDirection: 'column', gap: 10, padding: '14px 18px'}}>
            <div style={{fontSize: 23, fontWeight: 950, color: C.ink}}>违反其一 · 行为上</div>
            <div style={{fontSize: 22, fontWeight: 900, color: C.inkSoft, lineHeight: 1.55}}><Soft color={C.cinnabar}>违反约定</Soft>，未向对方履行自己的义务</div>
            <div style={{marginTop: 'auto'}}><Seal delay={170} size={20}>背 · 遵约守信</Seal></div>
          </div>
        </Enter>
        <Enter delay={90} from="up" style={{position: 'absolute', left: 1336, top: 232, width: 400, height: 252}}>
          <div style={{height: '100%', backgroundColor: C.cinnabarPale, border: `3px solid ${C.cinnabar}`, display: 'flex', flexDirection: 'column', gap: 10, padding: '14px 18px'}}>
            <div style={{fontSize: 23, fontWeight: 950, color: C.ink, display: 'flex', alignItems: 'center', gap: 8}}><Ban size={26} color={C.cinnabar} strokeWidth={2.5} />违反其二 · 主观上</div>
            <div style={{fontSize: 22, fontWeight: 900, color: C.inkSoft, lineHeight: 1.55}}><Soft color={C.cinnabar}>恶意加害</Soft>对方——损人不利己</div>
            <div style={{marginTop: 'auto'}}><Seal delay={190} size={20}>背 · 与人为善</Seal></div>
          </div>
        </Enter>
        <Enter delay={140} from="up" style={{position: 'absolute', left: 916, top: 504, width: 820, height: 88}}>
          <div style={{height: '100%', backgroundColor: C.paper, border: `3px solid ${C.moss}`, display: 'flex', alignItems: 'center', gap: 14, padding: '0 20px'}}>
            <span style={{padding: '4px 12px', backgroundColor: C.moss, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2, flexShrink: 0, whiteSpace: 'nowrap'}}>案例判决</span>
            <span style={{fontSize: 22, fontWeight: 900, color: C.ink, lineHeight: 1.45}}>沿宅基地边界建5米高墙恶心邻居——不违反平等/自愿/公平，<Soft color={C.cinnabar}>违反诚信（与人为善）</Soft></span>
            <span style={{marginLeft: 'auto', flexShrink: 0}}><Seal delay={230} size={22}>违反诚信</Seal></span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const OrderMoralsGreenScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="public-order-zone" data-final-knowledge="good-morals-zone" data-final-knowledge="faithful-purpose-gift-rule" data-final-knowledge="green-ring"
     data-stateful-source="antelope-contract" data-stateful-terminal="antelope-contract" */
  const contractTravel = prog(frame, 180, 46);
  const contractY = interpolate(contractTravel, [0, 1], [96, 170]);
  return (
    <Shell code="04" kicker="公序良俗 · 绿色" title="公序良俗与绿色原则：两条红线">
      <div
        data-layout="twin-boundary-green-ring"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,soft-highlight,stamp,external-negation"
        data-visual-grammar="mandatory-rules-protect-public-interest-so-breach-harms-public-order,public-morals-cover-social-ethics-family-and-dignity,unfaithful-purpose-gifts-of-common-property-are-void-against-morals,green-principle-forbids-waste-and-ecological-damage-for-gain"
        data-focal-rule="content-of-civil-relations-must-pass-public-order-good-morals-and-green-lines"
        data-focal-channels="icon,enclosure,contrast,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="public-order-zone" style={{position: 'absolute', left: 40, top: 0, width: 820, height: 468}}>
          <div style={{height: '100%', backgroundColor: C.slatePale, border: `3px solid ${C.slate}`, display: 'flex', flexDirection: 'column', gap: 12, padding: '16px 22px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Landmark size={38} color={C.slate} strokeWidth={2.4} />
              <Plaque tone={C.slate}>公共秩序（公序）</Plaque>
            </div>
            <div style={{fontSize: 23, fontWeight: 950, color: C.ink}}>民事法律关系的内容须符合社会的公共秩序</div>
            <div style={{display: 'flex', gap: 8, flexWrap: 'wrap'}}>
              <Chip tone={C.slate} toneBg={C.paper}>政治安全</Chip>
              <Chip tone={C.slate} toneBg={C.paper}>经济安全</Chip>
              <Chip tone={C.slate} toneBg={C.paper}>军事安全</Chip>
              <Chip tone={C.slate} toneBg={C.paper}>市场秩序</Chip>
              <Chip tone={C.slate} toneBg={C.paper}>公共利益</Chip>
            </div>
            <div style={{border: `2px solid ${C.slate}`, backgroundColor: C.paper, padding: '10px 14px', fontSize: 22, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
              强制性规定的立法目的＝维护<Soft color={C.slate}>公共利益</Soft> → 违反强制性规定的交易＝<Soft color={C.cinnabar}>损害公共秩序</Soft>
            </div>
            <div style={{marginTop: 'auto'}}><Seal delay={150} size={22}>向法律负责</Seal></div>
          </div>
        </Enter>
        <Enter delay={26} from="right" marker="good-morals-zone" style={{position: 'absolute', left: 916, top: 0, width: 820, height: 468}}>
          <div style={{height: '100%', backgroundColor: C.cinnabarPale, border: `3px solid ${C.cinnabar}`, display: 'flex', flexDirection: 'column', gap: 12, padding: '16px 22px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Heart size={38} color={C.cinnabar} strokeWidth={2.4} />
              <Plaque tone={C.cinnabar}>善良风俗（良俗）</Plaque>
            </div>
            <div style={{fontSize: 23, fontWeight: 950, color: C.ink}}>背离社会公德 · 家庭伦理 · 有损人格尊严</div>
            <div style={{border: `2px solid ${C.cinnabar}`, backgroundColor: C.paper, padding: '10px 14px'}}>
              <div data-final-knowledge="faithful-purpose-gift-rule" style={{display: 'flex', flexDirection: 'column', gap: 6}}>
                <span style={{fontSize: 22, fontWeight: 950, color: C.ink}}>以<Soft color={C.cinnabar}>重婚、同居、违反忠实义务</Soft>为目的</span>
                <span style={{fontSize: 22, fontWeight: 900, color: C.inkSoft}}>赠与共同财产 / 明显不合理价格处分 → 违背善良风俗</span>
              </div>
            </div>
            <div style={{fontSize: 22, fontWeight: 880, color: C.inkSoft}}>典型：代孕合同 · 不得生育或必须生育的约定 · 情人获赠10万元</div>
            <div style={{marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 12}}>
              <Seal delay={180} size={22}>亦向道德负责</Seal>
              <span style={{fontSize: 22, fontWeight: 880, color: C.inkSoft}}>对比例：报恩赠与 → 不违反</span>
            </div>
          </div>
        </Enter>
        <Enter delay={60} from="up" marker="green-ring" style={{position: 'absolute', left: 40, top: 492, width: 1696, height: 268}}>
          <div style={{height: '100%', backgroundColor: C.mossPale, border: `3px solid ${C.moss}`, display: 'flex', alignItems: 'center', gap: 20, padding: '0 24px'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: 8, width: 620, flexShrink: 0}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <Leaf size={38} color={C.moss} strokeWidth={2.4} />
                <Plaque tone={C.moss}>绿色原则</Plaque>
                <span style={{fontSize: 22, fontWeight: 900, color: C.inkSoft}}>节约资源 · 保护生态环境</span>
              </div>
              <div style={{fontSize: 23, fontWeight: 950, color: C.ink, lineHeight: 1.5}}>人与自然<Soft color={C.moss}>和谐相处</Soft>：不得以浪费资源、破坏生态为代价获取民事利益</div>
              <div style={{marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 12}}>
                <span data-stateful-terminal="antelope-contract" style={{display: 'inline-flex', alignItems: 'center', gap: 10, border: `2px solid ${C.moss}`, backgroundColor: C.paper, padding: '6px 12px', fontSize: 22, fontWeight: 950, color: C.ink, opacity: prog(frame, 226, 14)}}>
                  <Ban size={24} color={C.cinnabar} strokeWidth={2.5} /> 藏羚羊买卖合同
                  <Seal delay={250} size={19} tone={C.slate}>违反公序良俗</Seal>
                  <Seal delay={268} size={19} tone={C.moss}>违反绿色原则</Seal>
                </span>
              </div>
            </div>
            <div style={{flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8}}>
              <div data-stateful-source="antelope-contract" style={{opacity: 1 - contractTravel, display: contractTravel >= 1 ? 'none' : 'inline-flex', position: 'absolute', left: 760, top: contractY}}>
                <Chip tone={C.brass} toneBg={C.paper}>甲乙订约：买卖藏羚羊</Chip>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <Chip tone={C.cinnabar} toneBg={C.paper}>① 违反强制性规定（严禁买卖）</Chip>
                <span style={{fontSize: 24, fontWeight: 950, color: C.cinnabar}}>→</span>
                <Chip tone={C.slate} toneBg={C.paper}>损害公序</Chip>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <Chip tone={C.cinnabar} toneBg={C.paper}>② 禁止目的＝保护生态</Chip>
                <span style={{fontSize: 24, fontWeight: 950, color: C.cinnabar}}>→</span>
                <Chip tone={C.moss} toneBg={C.paper}>违反绿色原则</Chip>
              </div>
            </div>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const SixPrinciplesPillars = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-principle-functions-map" {...SCENES['principle-functions-map']}>
      <PrincipleFunctionsScene />
    </TimelineSequence>
    <TimelineSequence name="02-equality-volition-forks" {...SCENES['equality-volition-forks']}>
      <EqualityVolitionScene />
    </TimelineSequence>
    <TimelineSequence name="03-fairness-goodfaith-benches" {...SCENES['fairness-goodfaith-benches']}>
      <FairnessGoodfaithScene />
    </TimelineSequence>
    <TimelineSequence name="04-order-morals-green-court" {...SCENES['order-morals-green-court']}>
      <OrderMoralsGreenScene />
    </TimelineSequence>
  </AbsoluteFill>
);
