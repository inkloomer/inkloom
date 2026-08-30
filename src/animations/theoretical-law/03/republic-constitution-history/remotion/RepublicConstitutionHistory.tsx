import type {CSSProperties, ReactNode} from 'react';
import {BookOpen, Landmark, Scale, ScrollText, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  sepia: '#C4A96A',
  sepiaDeep: '#A88F52',
  newsprint: '#F0E8D0',
  newsprintDim: '#E0D5B8',
  newsprintEdge: '#6E5F48',
  ink: '#2B2119',
  inkSoft: '#5C4F3E',
  vermillion: '#B0452F',
  vermillionPale: '#F0D2C4',
  gold: '#B08A38',
  goldPale: '#EADBB2',
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
      backgroundColor: C.sepia,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(0deg, transparent 0 128px, ${C.vermillion}0C 128px 130px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.vermillion}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.gold}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.sepiaDeep, borderLeft: `8px solid ${C.vermillion}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 53 · {code}</span>
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
        borderBottom: `2px solid ${C.vermillion}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.goldPale, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Newsprint = ({children, marker, style, tone}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.newsprint, border: `2px solid ${C.newsprintEdge}`, color: C.ink, position: 'relative', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.vermillion}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.vermillion}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.vermillion}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.vermillion}} />
    {children}
  </div>
);

const LabelTab = ({children, bar = C.vermillion}: {readonly children: ReactNode; readonly bar?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', padding: '5px 14px', backgroundColor: C.sepiaDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{children}</span>
);

const InkChip = ({tone = C.vermillion, children, solid = false}: {readonly tone?: string; readonly children: ReactNode; readonly solid?: boolean}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 7, padding: '4px 12px', border: `2px solid ${tone}`, backgroundColor: solid ? tone : `${tone}14`, fontSize: 23, fontWeight: 880, color: solid ? C.paper : C.ink}}>{children}</span>
);

const SealStamp = ({children, delay = 0, size = 26, tone = C.vermillion}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span style={{display: 'inline-block', padding: '8px 16px', border: `5px solid ${tone}`, color: tone, backgroundColor: `${tone}10`, fontSize: size, fontWeight: 950, letterSpacing: 2, opacity: p, scale: 0.86 + p * 0.14, rotate: '-3deg'}}>{children}</span>
  );
};

const InkUnderline = ({children, color = C.vermillion, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
  const frame = useCurrentFrame();
  return (
    <span style={{position: 'relative', display: 'inline-block'}}>
      {children}
      <span style={{position: 'absolute', left: 0, right: 0, bottom: -6, height: 4, backgroundColor: color, scale: `${prog(frame, delay, 22)} 1`, transformOrigin: 'left center'}} />
    </span>
  );
};

const Soft = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2b`, padding: '2px 9px'}}>{children}</span>
);

const DarkStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(168, 143, 82, 0.92)', border: `2px solid ${C.vermillion}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

export const LinshiYuefaScene = () => {
  /* data-final-knowledge="linshi-heading" data-final-knowledge="linshi-panel" data-final-knowledge="first-status-stamp" */
  return (
    <Shell code="01" kicker="《临时约法》" title="中国第一部资产阶级共和国宪法">
      <div
        data-layout="first-constitution-headline-panel"
        data-visual-anchor="concept-icon"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="linshi-definition,anti-yuan-strategy,first-status-stamp"
        data-focal-rule="linshi-yuefa-was-chinas-first-bourgeois-republic-constitution"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="linshi-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.newsprint, border: `3px solid ${C.newsprintEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              《临时约法》· <InkUnderline delay={36}>1912 年</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="linshi-panel" style={{position: 'absolute', left: 40, top: 104, width: 1736, height: 300}}>
          <Newsprint tone={C.vermillion} style={{height: '100%', padding: '20px 28px 22px', display: 'flex', flexDirection: 'column', gap: 14}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <Landmark size={40} color={C.vermillion} strokeWidth={2.3} />
              <Users size={30} color={C.vermillion} strokeWidth={2.3} style={{marginLeft: 12}} />
              <LabelTab bar={C.vermillion}>孙中山民权主义指导</LabelTab>
            </div>
            <div style={{fontSize: 24, fontWeight: 900, color: C.ink, lineHeight: 1.6, marginTop: 6}}>
              为限制袁世凯——改总统制为<Soft color={C.vermillion}>责任内阁制</Soft>，扩大参议院权力
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 870, color: C.inkSoft}}>
              中国历史上<Soft color={C.vermillion}>第一部</Soft>资产阶级共和国性质的宪法文件
            </div>
          </Newsprint>
        </Enter>
        <Enter delay={170} from="up" marker="first-status-stamp" style={{position: 'absolute', left: 40, top: 434, width: 1736}}>
          <DarkStrip style={{height: 90}}>
            <span style={{padding: '4px 13px', backgroundColor: C.vermillion, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>地位</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              第一部资产阶<InkUnderline color={C.goldPale} delay={190}>级共和国宪法文件</InkUnderline>
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const TiantanYuanjiScene = () => {
  /* data-final-knowledge="conflict-heading" data-final-knowledge="tiantan-panel" data-final-knowledge="yuanji-panel" data-final-knowledge="conflict-note" */
  return (
    <Shell code="02" kicker="宪草与约法" title="天坛宪草 vs 袁记约法">
      <div
        data-layout="dual-era-conflict-panel"
        data-visual-anchor="document-fork"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="tiantan-panel,yuanji-panel,conflict-note"
        data-focal-rule="yuan-shikai-suppressed-the-draft-and-established-dictatorship"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="conflict-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.newsprint, border: `3px solid ${C.newsprintEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              北洋时期的<InkUnderline delay={36}>制宪博弈</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="tiantan-panel" style={{position: 'absolute', left: 40, top: 104, width: 850, height: 330}}>
          <Newsprint tone={C.vermillion} style={{height: '100%', padding: '18px 26px 20px', display: 'flex', flexDirection: 'column', gap: 14}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <ScrollText size={38} color={C.vermillion} strokeWidth={2.3} />
              <LabelTab bar={C.vermillion}>「天坛宪草」· 1913</LabelTab>
            </div>
            <div style={{fontSize: 23, fontWeight: 900, color: C.ink, lineHeight: 1.6}}>
              北洋时期<Soft color={C.vermillion}>第一部宪法草案</Soft>
            </div>
            <div style={{fontSize: 22, fontWeight: 870, color: C.inkSoft, lineHeight: 1.5}}>
              国民党企图限制袁世凯——但袁世凯<Soft color={C.vermillion}>解散国会</Soft>，废除该草案
            </div>
          </Newsprint>
        </Enter>
        <Enter delay={64} from="right" marker="yuanji-panel" style={{position: 'absolute', left: 930, top: 104, width: 886, height: 330}}>
          <Newsprint tone={C.inkSoft} style={{height: '100%', padding: '18px 26px 20px', display: 'flex', flexDirection: 'column', gap: 14}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Landmark size={38} color={C.inkSoft} strokeWidth={2.3} />
              <LabelTab bar={C.inkSoft}>「袁记约法」· 1914</LabelTab>
            </div>
            <div style={{fontSize: 23, fontWeight: 900, color: C.ink, lineHeight: 1.6}}>
              全面规定<Soft color={C.vermillion}>总统独裁</Soft>
            </div>
            <div style={{fontSize: 22, fontWeight: 870, color: C.inkSoft, lineHeight: 1.5}}>
              用有名无实的立法院取代国会——<Soft color={C.vermillion}>军阀专制全面确立的标志</Soft>
            </div>
          </Newsprint>
        </Enter>
        <Enter delay={170} from="up" marker="conflict-note" style={{position: 'absolute', left: 40, top: 460, width: 1736}}>
          <DarkStrip style={{height: 90}}>
            <span style={{padding: '4px 13px', backgroundColor: C.vermillion, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>博弈</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              限袁<Soft color={C.vermillionPale}>失败</Soft> → 独裁<Soft color={C.vermillionPale}>确立</Soft>——宪政倒退
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const Huixuan1947Scene = () => {
  /* data-final-knowledge="huixuan-heading" data-final-knowledge="huixuan-panel" data-final-knowledge="constitution-1947-panel" data-final-knowledge="era-summary-note" */
  return (
    <Shell code="03" kicker="两部宪法" title="贿选宪法 · 1947宪法">
      <div
        data-layout="before-after-comparison-columns"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="huixuan-panel,constitution-1947-panel,era-summary-note"
        data-focal-rule="two-constitutions-two-eras-two-failures-of-genuine-democracy"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="huixuan-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.newsprint, border: `3px solid ${C.newsprintEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              首部正式宪法 · 末代旧宪法
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="huixuan-panel" style={{position: 'absolute', left: 40, top: 104, width: 850, height: 320}}>
          <Newsprint tone={C.gold} style={{height: '100%', padding: '18px 26px 20px', display: 'flex', flexDirection: 'column', gap: 14}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <BookOpen size={38} color={C.gold} strokeWidth={2.3} />
              <LabelTab>「贿选宪法」· 1923</LabelTab>
            </div>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.6}}>
              漂亮辞藻和虚伪民主形式<Soft color={C.gold}>掩盖军阀专制</Soft>本质
            </div>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.6}}>
              为平衡各派军阀——对「国权」和「地方制度」作专门规定
            </div>
            <div style={{marginTop: 'auto'}}>
              <SealStamp delay={130} size={24}>首部正式颁行宪法</SealStamp>
            </div>
          </Newsprint>
        </Enter>
        <Enter delay={64} from="right" marker="constitution-1947-panel" style={{position: 'absolute', left: 930, top: 104, width: 886, height: 320}}>
          <Newsprint tone={C.inkSoft} style={{height: '100%', padding: '18px 26px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Scale size={38} color={C.inkSoft} strokeWidth={2.3} />
              <LabelTab bar={C.inkSoft}>《中华民国宪法》· 1947</LabelTab>
            </div>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.6}}>
              <Soft color={C.vermillion}>总统独裁</Soft> · 政治体制<Soft color={C.vermillion}>不伦不类</Soft>
            </div>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.6}}>
              罗列人民民主自由权利——但<Soft color={C.vermillion}>以特别法全面否定</Soft>
            </div>
          </Newsprint>
        </Enter>
        <Enter delay={170} from="up" marker="era-summary-note" style={{position: 'absolute', left: 40, top: 456, width: 1736}}>
          <DarkStrip style={{height: 110}}>
            <span style={{padding: '4px 13px', backgroundColor: C.vermillion, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>五部总结</span>
            <span style={{fontSize: 23, fontWeight: 900, color: C.paper, lineHeight: 1.5}}>
              临时约法（首部资产阶级共和宪法）→ 天坛宪草（首部宪草）→ 袁记约法（独裁标志）→ <Soft color={C.goldPale}>贿选宪法（首部正式颁行）</Soft> → 1947宪法（不伦不类）
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const RepublicConstitutionHistory = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-linshi-yuefa" {...SCENES.linshiYuefa}>
      <LinshiYuefaScene />
    </TimelineSequence>
    <TimelineSequence name="02-tiantan-yuanji" {...SCENES.tiantanYuanji}>
      <TiantanYuanjiScene />
    </TimelineSequence>
    <TimelineSequence name="03-huixuan-1947" {...SCENES.huixuan1947}>
      <Huixuan1947Scene />
    </TimelineSequence>
  </AbsoluteFill>
);
