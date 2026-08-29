import type {CSSProperties, ReactNode} from 'react';
import {
  BookOpen,
  Check,
  CircleQuestionMark,
  Eraser,
  FileStack,
  Footprints,
  Gavel,
  Info,
  KeyRound,
  Lock,
  LockOpen,
  Milestone,
  MoveHorizontal,
  PenLine,
} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  ledger: '#F5EFDF',
  ledgerRule: '#C9D4E2',
  entry: '#FBF7EA',
  ink: '#33302A',
  inkDim: '#6E6A60',
  red: '#B4453A',
  blue: '#3A5F8A',
  brass: '#96854F',
  amber: '#C99C3F',
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

const PostTab = ({children, tone = C.red}: {readonly children: ReactNode; readonly tone?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 15px', backgroundColor: tone, color: C.entry, fontSize: 22, fontWeight: 900, letterSpacing: 2, border: `2px solid ${C.ink}`}}>
    {children}
  </span>
);

const Soft = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}26`, padding: '2px 9px'}}>{children}</span>
);

const PostChip = ({accent = C.blue, children, solid = false}: {readonly accent?: string; readonly children: ReactNode; readonly solid?: boolean}) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '4px 13px',
      border: `2px solid ${accent}`,
      backgroundColor: solid ? accent : `${accent}14`,
      fontSize: 23,
      fontWeight: 880,
      color: solid ? C.entry : C.ink,
    }}
  >
    {children}
  </span>
);

const Stamp = ({children, color = C.red, delay = 0, size = 30}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number; readonly size?: number}) => {
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

const InkUnderline = ({children, color = C.red, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

const Shell = ({children, code, kicker, title}: {readonly children: ReactNode; readonly code: string; readonly kicker: string; readonly title: string}) => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{
      backgroundColor: C.ledger,
      color: C.ink,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(0deg, transparent 0 55px, ${C.ledgerRule}55 55px 56px), linear-gradient(90deg, transparent 0 96px, ${C.red}30 96px 99px, transparent 99px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `2px solid ${C.brass}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 18px', backgroundColor: C.red, border: `3px solid ${C.ink}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.entry, letterSpacing: 2}}>考点 07 · {code}</span>
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
        borderBottom: `3px double ${C.ink}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.ink}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.blue, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

export const ThreeElementsFlowScene = () => {
  /* data-final-knowledge="structure-heading" data-final-knowledge="assumption-gate-card" data-final-knowledge="mode-triplet-card" data-final-knowledge="consequence-split-card" data-final-knowledge="structure-mnemonic" */
  return (
    <Shell code="01" kicker="逻辑结构" title="一条规则，三段记账">
      <div
        data-layout="element-flow-with-mode-triplet"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="assumption-gate,mode-triplet,consequence-split"
        data-focal-rule="every-rule-logs-assumption-mode-and-consequence"
        data-focal-channels="icon,motion,enclosure,contrast,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="structure-heading" style={{position: 'absolute', left: 400, top: 0, width: 980}}>
          <div style={{backgroundColor: C.entry, border: `3px solid ${C.ink}`, padding: '12px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 33, fontWeight: 950, color: C.ink}}>
              假定条件 → 行为模式 → <InkUnderline delay={26}>法律后果</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={34} from="left" marker="assumption-gate-card" style={{position: 'absolute', left: 40, top: 130, width: 470, height: 430}}>
          <div style={{backgroundColor: C.entry, border: `4px solid ${C.blue}`, height: '100%', padding: '22px 26px', display: 'flex', flexDirection: 'column', gap: 14}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Milestone size={42} color={C.blue} strokeWidth={2.3} />
              <span style={{fontSize: 30, fontWeight: 950, color: C.ink}}>假定条件</span>
            </div>
            <div style={{fontSize: 23, fontWeight: 860, color: C.ink, lineHeight: 1.55}}>
              规则适用的<Soft color={C.blue}>时间、空间、对什么人</Soft>、何种情境
            </div>
            <div style={{marginTop: 'auto'}}>
              <PostChip accent={C.blue} solid>
                标志：「如果」可引导
              </PostChip>
            </div>
          </div>
        </Enter>
        <Enter delay={58} from="none" marker="mode-triplet-card" style={{position: 'absolute', left: 560, top: 130, width: 620, height: 430}}>
          <div style={{backgroundColor: C.entry, border: `4px solid ${C.ink}`, height: '100%', padding: '22px 26px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Footprints size={42} color={C.ink} strokeWidth={2.3} />
              <span style={{fontSize: 30, fontWeight: 950, color: C.ink}}>行为模式 · 三种</span>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 9, fontSize: 23, fontWeight: 870, color: C.ink}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <PostChip accent={C.blue} solid>可为</PostChip> 以权利为内容——「可以」「有权」
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <PostChip accent={C.red} solid>应为</PostChip> 积极义务——「应当」「必须」
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <PostChip accent={C.red} solid>勿为</PostChip> 消极义务——「不得」「禁止」
              </div>
            </div>
          </div>
        </Enter>
        <Enter delay={86} from="right" marker="consequence-split-card" style={{position: 'absolute', left: 1230, top: 130, width: 506, height: 430}}>
          <div style={{backgroundColor: C.entry, border: `4px solid ${C.red}`, height: '100%', padding: '22px 26px', display: 'flex', flexDirection: 'column', gap: 14}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Gavel size={42} color={C.red} strokeWidth={2.3} />
              <span style={{fontSize: 30, fontWeight: 950, color: C.ink}}>法律后果</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, fontSize: 23, fontWeight: 880, color: C.ink}}>
              <Check size={26} color={C.blue} strokeWidth={3} /> 肯定性后果：与模式要求一致
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, fontSize: 23, fontWeight: 880, color: C.ink}}>
              <span style={{color: C.red, fontWeight: 950}}>✕</span> 否定性后果：与模式要求不一致
            </div>
          </div>
        </Enter>
        <Enter delay={150} from="up" marker="structure-mnemonic" style={{position: 'absolute', left: 200, top: 640, width: 1376}}>
          <div style={{backgroundColor: C.ink, border: `3px solid ${C.brass}`, padding: '13px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 24, fontWeight: 920, color: C.entry}}>假定条件是闸口，行为模式是科目，法律后果是结算——三段合一才算一条规则</span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const RuleVsTextLedgerScene = () => {
  /* data-final-knowledge="ledger-heading" data-final-knowledge="content-form-relation" data-final-knowledge="four-cases-note" data-final-knowledge="normative-card" data-final-knowledge="non-normative-card" */
  return (
    <Shell code="02" kicker="规则与条文" title="内容与形式：一账两栏">
      <div
        data-layout="content-form-ledger-with-cases"
        data-visual-anchor="concept-icon"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="content-form-relation,four-cases-row,normative-split"
        data-focal-rule="rule-is-the-content-and-text-is-its-form"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="ledger-heading" style={{position: 'absolute', left: 380, top: 0, width: 1020}}>
          <div style={{backgroundColor: C.entry, border: `3px solid ${C.ink}`, padding: '12px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 33, fontWeight: 950, color: C.ink}}>
              规则是<InkUnderline delay={26}>内容</InkUnderline>，条文是<InkUnderline color={C.blue} delay={38}>形式</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={32} marker="content-form-relation" style={{position: 'absolute', left: 80, top: 110, width: 800, height: 300}}>
          <div style={{backgroundColor: C.entry, border: `4px solid ${C.blue}`, height: '100%', padding: '20px 26px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <BookOpen size={40} color={C.blue} strokeWidth={2.3} />
              <span style={{fontSize: 27, fontWeight: 950, color: C.ink}}>对应情形 · 四种</span>
            </div>
            <div data-final-knowledge="four-cases-note" style={{marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12, fontSize: 23, fontWeight: 860, color: C.ink}}>
              <span>① 一个规则由数个条文表述</span>
              <span>② 规则内容分散在不同文件</span>
              <span>③ 一个条文表述不同规则及要素</span>
              <span>④ 条文仅规定规则的某个要素</span>
            </div>
          </div>
        </Enter>
        <Enter delay={60} from="right" marker="normative-card" style={{position: 'absolute', left: 920, top: 110, width: 816, height: 300}}>
          <div style={{backgroundColor: C.entry, border: `4px solid ${C.ink}`, height: '100%', padding: '20px 26px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <FileStack size={40} color={C.ink} strokeWidth={2.3} />
              <span style={{fontSize: 27, fontWeight: 950, color: C.ink}}>规范性条文</span>
              <span style={{marginLeft: 'auto'}}>
                <Stamp delay={100} size={24}>直接规定规范</Stamp>
              </span>
            </div>
            <div style={{marginTop: 12, fontSize: 22, fontWeight: 860, color: C.ink}}>直接表述法律规则和法律原则的条文</div>
          </div>
        </Enter>
        <Enter delay={92} from="right" marker="non-normative-card" style={{position: 'absolute', left: 920, top: 450, width: 816, height: 240}}>
          <div style={{backgroundColor: C.entry, border: `4px solid ${C.brass}`, height: '100%', padding: '20px 26px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Info size={40} color={C.brass} strokeWidth={2.3} />
              <span style={{fontSize: 27, fontWeight: 950, color: C.ink}}>非规范性条文 · 两类</span>
            </div>
            <div style={{marginTop: 12, display: 'flex', gap: 12, flexWrap: 'wrap'}}>
              <PostChip accent={C.blue}>定义性 · 解释术语含义</PostChip>
              <PostChip accent={C.blue}>辅助性 · 公布机关与生效日期</PostChip>
            </div>
          </div>
        </Enter>
        <Enter delay={150} from="up" style={{position: 'absolute', left: 80, top: 470, width: 800}}>
          <div style={{backgroundColor: C.entry, border: `3px solid ${C.brass}`, padding: '14px 22px'}}>
            <span style={{fontSize: 24, fontWeight: 920, color: C.ink}}>口诀：一内容，二形式，三随便——对应关系不固定</span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

const DichotomyRail = ({
  delay,
  iconL,
  iconR,
  marker,
  axis,
  left,
  leftNote,
  right,
  rightNote,
}: {
  readonly delay: number;
  readonly iconL: ReactNode;
  readonly iconR: ReactNode;
  readonly marker: string;
  readonly axis: string;
  readonly left: string;
  readonly leftNote: string;
  readonly right: string;
  readonly rightNote: string;
}) => (
  <Enter delay={delay} from="none" marker={marker} style={{marginTop: 26}}>
    <div style={{backgroundColor: C.entry, border: `2px solid ${C.ink}`, padding: '20px 22px', display: 'flex', alignItems: 'center', gap: 14}}>
      <span style={{fontSize: 23, fontWeight: 950, color: C.inkDim, width: 60}}>{axis}</span>
      <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, flex: 1}}>
        <span style={{fontSize: 26, fontWeight: 950, color: C.blue}}>{left}</span>
        <span style={{fontSize: 21, fontWeight: 850, color: C.inkDim}}>{leftNote}</span>
      </span>
      <span style={{width: 90, textAlign: 'center'}}><MoveHorizontal size={30} color={C.brass} strokeWidth={2.6} /></span>
      <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, flex: 1}}>
        <span style={{fontSize: 26, fontWeight: 950, color: C.red}}>{right}</span>
        <span style={{fontSize: 21, fontWeight: 850, color: C.inkDim}}>{rightNote}</span>
      </span>
      <span style={{display: 'inline-flex', gap: 8}}>
        {iconL}
        {iconR}
      </span>
    </div>
  </Enter>
);

export const ClassificationAxesScene = () => {
  /* data-final-knowledge="classify-heading" data-final-knowledge="authorization-duty-rail" data-final-knowledge="certainty-rail" data-final-knowledge="mandatory-optional-rail" data-final-knowledge="duty-split-note" data-final-knowledge="classify-mnemonic" */
  return (
    <Shell code="03" kicker="分类" title="三对轨道，各归各栏">
      <div
        data-layout="three-dichotomy-rails"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="authorization-duty-axis,certainty-axis,mandatory-optional-axis"
        data-focal-rule="each-rule-posts-to-one-pole-on-every-rail"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="classify-heading" style={{position: 'absolute', left: 470, top: 0, width: 840}}>
          <div style={{backgroundColor: C.entry, border: `3px solid ${C.ink}`, padding: '12px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 33, fontWeight: 950, color: C.ink}}>
              按内容、按确定性、按<InkUnderline delay={26}>效力刚性</InkUnderline>
            </span>
          </div>
        </Enter>
        <DichotomyRail
          delay={30}
          iconL={<KeyRound size={30} color={C.blue} strokeWidth={2.4} />}
          iconR={<Gavel size={30} color={C.red} strokeWidth={2.4} />}
          marker="authorization-duty-rail"
          axis="内容"
          left="授权性规则"
          leftNote="权利内容 · 可为模式"
          right="义务性规则"
          rightNote="命令性 + 禁止性"
        />
        <DichotomyRail
          delay={62}
          iconL={<Check size={30} color={C.blue} strokeWidth={2.6} />}
          iconR={<CircleQuestionMark size={30} color={C.red} strokeWidth={2.4} />}
          marker="certainty-rail"
          axis="确定性"
          left="确定性规则"
          leftNote="内容明确 · 绝大多数"
          right="委任性 / 准用性"
          rightNote="概括指示 / 援引参照"
        />
        <DichotomyRail
          delay={94}
          iconL={<Lock size={30} color={C.blue} strokeWidth={2.4} />}
          iconR={<LockOpen size={30} color={C.red} strokeWidth={2.4} />}
          marker="mandatory-optional-rail"
          axis="刚性"
          left="强行性规则"
          leftNote="义务性、职权性属于此类"
          right="任意性规则"
          rightNote="允许自行选择或协商"
        />
        <Enter delay={140} marker="duty-split-note" style={{position: 'absolute', left: 90, top: 540, width: 1596}}>
          <div style={{border: `3px solid ${C.blue}`, backgroundColor: '#3A5F8A10', padding: '12px 22px', display: 'flex', alignItems: 'center', gap: 14}}>
            <span style={{fontSize: 24, fontWeight: 900, color: C.ink}}>
              义务性规则一分为二：命令性（应为）＋ 禁止性（勿为）；<Soft color={C.blue}>职权性规则归入强行性</Soft>
            </span>
          </div>
        </Enter>
        <Enter delay={180} from="up" marker="classify-mnemonic" style={{position: 'absolute', left: 90, top: 650, width: 1596}}>
          <div style={{backgroundColor: C.ink, border: `3px solid ${C.brass}`, padding: '13px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 24, fontWeight: 920, color: C.entry}}>一条规则在每条轨道上各占一格——答题先定轨道，再定红蓝</span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const OmissionMnemonicScene = () => {
  /* data-final-knowledge="omission-heading" data-final-knowledge="logic-complete-card" data-final-knowledge="wording-omissible-card" data-final-knowledge="exam-default-chip" data-final-knowledge="omission-mnemonic-strip" */
  return (
    <Shell code="04" kicker="点睛" title="省略是常态，逻辑不缺席">
      <div
        data-layout="logic-vs-wording-verdict-pair"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,chip,soft-highlight,stamp,external-negation"
        data-visual-grammar="logic-complete-claim,wording-omissible-claim,exam-default-note"
        data-focal-rule="omission-in-wording-never-removes-a-logical-element"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="omission-heading" style={{position: 'absolute', left: 430, top: 0, width: 920}}>
          <div style={{backgroundColor: C.entry, border: `3px solid ${C.ink}`, padding: '12px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 33, fontWeight: 950, color: C.ink}}>
              逻辑上<InkUnderline delay={26}>缺一不可</InkUnderline>，条文中<InkUnderline color={C.blue} delay={38}>均可省略</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={34} from="left" marker="logic-complete-card" style={{position: 'absolute', left: 90, top: 130, width: 780, height: 300}}>
          <div style={{backgroundColor: C.entry, border: `5px solid ${C.blue}`, height: '100%', padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: 14}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <Check size={44} color={C.blue} strokeWidth={3} />
              <span style={{fontSize: 30, fontWeight: 950, color: C.ink}}>逻辑层面</span>
            </div>
            <div style={{fontSize: 25, fontWeight: 900, color: C.ink, lineHeight: 1.55}}>
              任何规则逻辑上均由<Soft color={C.blue}>三要素</Soft>组成
            </div>
            <div style={{marginTop: 'auto'}}>
              <PostChip accent={C.blue} solid>
                缺一不可
              </PostChip>
            </div>
          </div>
        </Enter>
        <Enter delay={58} from="right" marker="wording-omissible-card" style={{position: 'absolute', left: 910, top: 130, width: 780, height: 300}}>
          <div style={{backgroundColor: C.entry, border: `5px solid ${C.red}`, height: '100%', padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: 14}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <Eraser size={44} color={C.red} strokeWidth={2.4} />
              <span style={{fontSize: 30, fontWeight: 950, color: C.ink}}>表述层面</span>
            </div>
            <div style={{fontSize: 25, fontWeight: 900, color: C.ink, lineHeight: 1.55}}>
              任何部分均可能被省略——省略只是<Soft color={C.red}>不表达</Soft>，不等于逻辑上不存在
            </div>
            <div style={{marginTop: 'auto'}}>
              <PostChip accent={C.red} solid>
                省略为常态
              </PostChip>
            </div>
          </div>
        </Enter>
        <Enter delay={110} style={{position: 'absolute', left: 300, top: 470, width: 1180}}>
          <div data-final-knowledge="exam-default-chip" style={{border: `3px solid ${C.ink}`, backgroundColor: C.entry, padding: '14px 22px', textAlign: 'center'}}>
            <span style={{fontSize: 25, fontWeight: 930, color: C.ink}}>
              答题默认：<PenLine size={26} color={C.red} strokeWidth={2.6} style={{verticalAlign: '-4px', margin: '0 6px'}} />
              题目问「条文」则可省略，问「规则」则三要素俱全
            </span>
          </div>
        </Enter>
        <Enter delay={160} from="up" marker="omission-mnemonic-strip" style={{position: 'absolute', left: 200, top: 590, width: 1376}}>
          <div style={{backgroundColor: C.ink, border: `3px solid ${C.brass}`, padding: '14px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 25, fontWeight: 930, color: C.entry}}>
              口诀：条文中均可省略，逻辑上缺一不可
            </span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const LegalRules = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-three-elements-flow" {...SCENES.threeElementsFlow}>
      <ThreeElementsFlowScene />
    </TimelineSequence>
    <TimelineSequence name="02-rule-vs-text-ledger" {...SCENES.ruleVsTextLedger}>
      <RuleVsTextLedgerScene />
    </TimelineSequence>
    <TimelineSequence name="03-classification-axes" {...SCENES.classificationAxes}>
      <ClassificationAxesScene />
    </TimelineSequence>
    <TimelineSequence name="04-omission-mnemonic" {...SCENES.omissionMnemonic}>
      <OmissionMnemonicScene />
    </TimelineSequence>
  </AbsoluteFill>
);
