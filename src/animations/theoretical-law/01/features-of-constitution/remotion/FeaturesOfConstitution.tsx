import type {CSSProperties, ReactNode} from 'react';
import {Blocks, BookOpen, Feather, Landmark, Lock, Scale, ScrollText} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  lime: '#CDC3A8',
  limeDeep: '#B9AE8F',
  stone: '#F0E9D4',
  stoneDim: '#E1D8BC',
  stoneEdge: '#6E6752',
  ink: '#2B2721',
  inkSoft: '#59503F',
  gold: '#B08A38',
  goldPale: '#EADBB2',
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
      backgroundColor: C.lime,
      color: C.ink,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(0deg, transparent 0 122px, ${C.inkSoft}12 122px 123px), repeating-linear-gradient(90deg, transparent 0 152px, ${C.inkSoft}0C 152px 153px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.inkSoft}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.gold}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.inkSoft, borderLeft: `8px solid ${C.gold}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 24 · {code}</span>
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
        borderBottom: `2px solid ${C.inkSoft}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.ink}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.gold, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Stone = ({children, marker, style, tone}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.stone, border: `2px solid ${C.stoneEdge}`, color: C.ink, position: 'relative', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    {children}
  </div>
);

const LabelTab = ({children, bar = C.gold}: {readonly children: ReactNode; readonly bar?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', padding: '5px 14px', backgroundColor: C.inkSoft, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{children}</span>
);

const StoneChip = ({tone = C.gold, children, solid = false}: {readonly tone?: string; readonly children: ReactNode; readonly solid?: boolean}) => (
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
  <div style={{backgroundColor: 'rgba(89, 80, 63, 0.92)', border: `2px solid ${C.gold}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

export const FundamentalLawScene = () => {
  /* data-final-knowledge="fundamental-heading" data-final-knowledge="content-block" data-final-knowledge="effect-block" data-final-knowledge="procedure-block" data-final-knowledge="amendment-comparison" */
  return (
    <Shell code="01" kicker="国家根本法" title="根本法：三个「最」">
      <div
        data-layout="three-superlatives-stone-bench"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="content-block,effect-block,procedure-block"
        data-focal-rule="constitution-leads-in-content-effect-and-procedure"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="fundamental-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.stone, border: `3px solid ${C.stoneEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              内容最<InkUnderline delay={36}>重要</InkUnderline> · 效力最<InkUnderline color={C.gold} delay={48}>高</InkUnderline> · 程序最<InkUnderline delay={60}>严</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="content-block" style={{position: 'absolute', left: 40, top: 104, width: 560, height: 300}}>
          <Stone tone={C.crimson} style={{height: '100%', padding: '18px 22px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Landmark size={38} color={C.crimson} strokeWidth={2.3} />
              <LabelTab bar={C.crimson}>一 · 内容最重要</LabelTab>
            </div>
            <div style={{fontSize: 24, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              规定国家<Soft color={C.crimson}>最根本、最核心</Soft>的问题
            </div>
            <div style={{marginTop: 'auto'}}>
              <Stamp delay={120} size={22}>国本所在</Stamp>
            </div>
          </Stone>
        </Enter>
        <Enter delay={56} from="up" marker="effect-block" style={{position: 'absolute', left: 632, top: 104, width: 560, height: 300}}>
          <Stone tone={C.gold} style={{height: '100%', padding: '18px 22px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Scale size={38} color={C.gold} strokeWidth={2.3} />
              <LabelTab>二 · 效力最高</LabelTab>
            </div>
            <div style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.6}}>
              ① 普通法的<Soft color={C.gold}>立法基础</Soft>
              <br />
              ② 普通法<Soft color={C.crimson}>不得与宪法相违背</Soft>
              <br />
              ③ 守法主体的<Soft color={C.gold}>最高行为准则</Soft>
            </div>
          </Stone>
        </Enter>
        <Enter delay={84} from="right" marker="procedure-block" style={{position: 'absolute', left: 1224, top: 104, width: 592, height: 300}}>
          <Stone tone={C.inkSoft} style={{height: '100%', padding: '18px 22px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Lock size={38} color={C.inkSoft} strokeWidth={2.3} />
              <LabelTab bar={C.inkSoft}>三 · 制修程序最严</LabelTab>
            </div>
            <div style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.6}}>
              提议：<Soft color={C.gold}>1/5以上</Soft>全国人大代表 或 全国人大常委会
            </div>
            <div data-final-knowledge="amendment-comparison" style={{marginTop: 'auto', border: `2px solid ${C.stoneEdge}`, backgroundColor: C.stoneDim, padding: '10px 14px', fontSize: 22, fontWeight: 900, lineHeight: 1.5}}>
              通过：全体代表<Soft color={C.crimson}>2/3以上</Soft>（普通法律<Soft color={C.gold}>过半数</Soft>）
            </div>
          </Stone>
        </Enter>
        <Enter delay={170} from="up" style={{position: 'absolute', left: 40, top: 444, width: 1736}}>
          <DarkStrip style={{height: 92}}>
            <span style={{padding: '4px 13px', backgroundColor: C.gold, color: C.inkSoft, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>口诀</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              五一全人常，临时开会提修宪——<Soft color={C.goldPale}>法律过半，宪法三分之二</Soft>
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const CharterQuoteScene = () => {
  /* data-final-knowledge="charter-heading" data-final-knowledge="declaration-plaque" data-final-knowledge="lenin-plaque" data-final-knowledge="democratization-note" */
  return (
    <Shell code="02" kicker="保障书与民主" title="公民权利的保障书">
      <div
        data-layout="quotation-plinth-board"
        data-visual-anchor="concept-icon"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="declaration-quote,lenin-quote,democratization-note"
        data-focal-rule="the-constitution-exists-to-guarantee-rights-and-codify-democracy"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="charter-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.stone, border: `3px solid ${C.stoneEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              宪法是<InkUnderline delay={36}>公民权利的保障书</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="declaration-plaque" style={{position: 'absolute', left: 40, top: 104, width: 850, height: 260}}>
          <Stone tone={C.crimson} style={{height: '100%', padding: '20px 26px 22px', display: 'flex', flexDirection: 'column', gap: 14}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <ScrollText size={40} color={C.crimson} strokeWidth={2.3} />
              <LabelTab bar={C.crimson}>1789 · 法国《人权宣言》</LabelTab>
            </div>
            <div style={{fontSize: 26, fontWeight: 950, color: C.ink, lineHeight: 1.6, marginTop: 6}}>
              凡<Soft color={C.crimson}>权利无保障</Soft>和<Soft color={C.crimson}>分权未确立</Soft>的社会，就没有宪法
            </div>
          </Stone>
        </Enter>
        <Enter delay={56} from="right" marker="lenin-plaque" style={{position: 'absolute', left: 930, top: 104, width: 886, height: 260}}>
          <Stone tone={C.gold} style={{height: '100%', padding: '20px 26px 22px', display: 'flex', flexDirection: 'column', gap: 14}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Feather size={40} color={C.gold} strokeWidth={2.3} />
              <LabelTab>列宁</LabelTab>
            </div>
            <div style={{fontSize: 26, fontWeight: 950, color: C.ink, lineHeight: 1.6, marginTop: 6}}>
              宪法就是一张写着人民<InkUnderline color={C.gold} delay={110}>权利</InkUnderline>的纸
            </div>
          </Stone>
        </Enter>
        <Enter delay={120} from="up" marker="democratization-note" style={{position: 'absolute', left: 40, top: 400, width: 1736, height: 170}}>
          <Stone tone={C.inkSoft} style={{height: '100%', padding: '18px 26px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <LabelTab bar={C.inkSoft}>第三个特征 · 民主事实法律化的基本形式</LabelTab>
            <div style={{fontSize: 24, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              民主是近代宪法的<Soft color={C.gold}>应有之义</Soft>——伴随<Soft color={C.crimson}>资产阶级革命</Soft>民主事实的出现而产生
            </div>
          </Stone>
        </Enter>
        <Enter delay={190} from="up" style={{position: 'absolute', left: 40, top: 606, width: 1736}}>
          <DarkStrip style={{height: 82}}>
            <span style={{padding: '4px 13px', backgroundColor: C.gold, color: C.inkSoft, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>一句记</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              权利无保障、分权未确立——<Soft color={C.goldPale}>就没有宪法</Soft>
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const BoundaryFundamentalsScene = () => {
  /* data-final-knowledge="boundary-heading" data-final-knowledge="written-unwritten-divide" data-final-knowledge="means-end-note" data-final-knowledge="fundamentals-rail" */
  return (
    <Shell code="03" kicker="边界与根本" title="效力分界与三个最根本">
      <div
        data-layout="written-unwritten-divide-with-fundamentals-rail"
        data-visual-anchor="boundary"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="written-unwritten-divide,means-end-note,fundamentals-rail"
        data-focal-rule="supreme-effect-belongs-to-written-constitutions-and-rights-are-the-end"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="boundary-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.stone, border: `3px solid ${C.stoneEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              最高效力，只属于<InkUnderline delay={36}>成文宪法</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="written-unwritten-divide" style={{position: 'absolute', left: 40, top: 104, width: 1736, height: 200}}>
          <Stone tone={C.gold} style={{height: '100%', padding: '16px 24px', display: 'flex', alignItems: 'center', gap: 18}}>
            <BookOpen size={38} color={C.gold} strokeWidth={2.3} />
            <div style={{display: 'flex', gap: 16, flex: 1}}>
              <div style={{flex: 1, border: `2px solid ${C.stoneEdge}`, backgroundColor: C.stoneDim, padding: '12px 16px'}}>
                <div style={{fontSize: 24, fontWeight: 950, color: C.ink}}>成文宪法国家</div>
                <div style={{fontSize: 22, fontWeight: 870, color: C.inkSoft, marginTop: 4}}>宪法典<Soft color={C.gold}>具有最高法律效力</Soft></div>
              </div>
              <div style={{flex: 1, border: `2px solid ${C.stoneEdge}`, backgroundColor: C.stoneDim, padding: '12px 16px'}}>
                <div style={{fontSize: 24, fontWeight: 950, color: C.ink}}>不成文宪法国家</div>
                <div style={{fontSize: 22, fontWeight: 870, color: C.inkSoft, marginTop: 4}}>宪法效力<Soft color={C.crimson}>与普通法律相当</Soft>——但仍有保障书·确认民主的功能</div>
              </div>
            </div>
          </Stone>
        </Enter>
        <Enter delay={70} from="up" marker="means-end-note" style={{position: 'absolute', left: 40, top: 330, width: 1736, height: 120}}>
          <Stone tone={C.crimson} style={{height: '100%', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 18}}>
            <Blocks size={36} color={C.crimson} strokeWidth={2.3} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.ink}}>最重要的功能：通过<Soft color={C.crimson}>分权</Soft>来保障<Soft color={C.gold}>人权</Soft></span>
            <span style={{marginLeft: 'auto'}}>
              <Stamp delay={130} size={24}>分权是手段 · 保障人权是目的</Stamp>
            </span>
          </Stone>
        </Enter>
        <Enter delay={130} from="up" marker="fundamentals-rail" style={{position: 'absolute', left: 40, top: 486, width: 1736, height: 170}}>
          <Stone tone={C.inkSoft} style={{height: '100%', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <LabelTab bar={C.inkSoft}>「根本」与「基本」——三个最根本</LabelTab>
            <div style={{display: 'flex', gap: 14, flexWrap: 'wrap'}}>
              <StoneChip tone={C.crimson} solid>
                最根本的制度：社会主义制度
              </StoneChip>
              <StoneChip tone={C.gold} solid>
                最根本的国家任务：社会主义现代化建设
              </StoneChip>
              <StoneChip tone={C.inkSoft} solid>
                最根本的政治制度：人民代表大会制度
              </StoneChip>
            </div>
          </Stone>
        </Enter>
      </div>
    </Shell>
  );
};

export const FeaturesOfConstitution = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-fundamental-law" {...SCENES.fundamentalLaw}>
      <FundamentalLawScene />
    </TimelineSequence>
    <TimelineSequence name="02-charter-quote" {...SCENES.charterQuote}>
      <CharterQuoteScene />
    </TimelineSequence>
    <TimelineSequence name="03-boundaries-fundamentals" {...SCENES.boundaryFundamentals}>
      <BoundaryFundamentalsScene />
    </TimelineSequence>
  </AbsoluteFill>
);
