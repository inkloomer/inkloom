import type {CSSProperties, ReactNode} from 'react';
import {BookMarked, BookOpen, Gavel, Globe, HeartPulse, Landmark, ScrollText} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  brown: '#5C4A32',
  brownDeep: '#473825',
  panel: '#F0E8D2',
  panelDim: '#E0D8BE',
  panelEdge: '#6E6250',
  ink: '#2B2119',
  inkSoft: '#5C4F3E',
  gold: '#B08A38',
  goldPale: '#EADBB2',
  seal: '#A3412F',
  sealPale: '#EFD0C4',
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
      backgroundColor: C.brown,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(0deg, transparent 0 128px, ${C.gold}0E 128px 130px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.seal}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.gold}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.brownDeep, borderLeft: `8px solid ${C.seal}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 55 · {code}</span>
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
        borderBottom: `2px solid ${C.seal}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.goldPale, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.panelEdge}`, color: C.ink, position: 'relative', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    {children}
  </div>
);

const LabelTab = ({children, bar = C.gold}: {readonly children: ReactNode; readonly bar?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', padding: '5px 14px', backgroundColor: C.brownDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{children}</span>
);

const SealStamp = ({children, delay = 0, size = 26, tone = C.seal}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span style={{display: 'inline-block', padding: '8px 16px', border: `5px solid ${tone}`, color: tone, backgroundColor: `${tone}10`, fontSize: size, fontWeight: 950, letterSpacing: 2, opacity: p, scale: 0.86 + p * 0.14, rotate: '-3deg'}}>{children}</span>
  );
};

const Soft = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2b`, padding: '2px 9px'}}>{children}</span>
);

const DarkStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(71, 56, 37, 0.92)', border: `2px solid ${C.gold}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const InkUnderline = ({children, color = C.seal, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
  const frame = useCurrentFrame();
  return (
    <span style={{position: 'relative', display: 'inline-block'}}>
      {children}
      <span style={{position: 'absolute', left: 0, right: 0, bottom: -6, height: 4, backgroundColor: color, scale: `${prog(frame, delay, 22)} 1`, transformOrigin: 'left center'}} />
    </span>
  );
};

export const ChinaCodesScene = () => {
  /* data-final-knowledge="codes-heading" data-final-knowledge="codes-row" */
  const codes = [
    {name: '《法经》', desc: '第一部比较系统的封建成文法典', icon: ScrollText},
    {name: '《永徽律疏》', desc: '保存最完整·最早·最有影响力的古代成文法典', icon: BookOpen},
    {name: '《宋刑统》', desc: '第一部刊印颁行的法典', icon: Landmark},
    {name: '《大清律例》', desc: '最后一部封建成文法典', icon: BookMarked},
  ] as const;
  return (
    <Shell code="01" kicker="中国法典之最" title="中国法典的四个「最」">
      <div
        data-layout="china-codes-display-row"
        data-visual-anchor="typographic-sequence"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="fajing-item,yonghui-item,song-qing-items"
        data-focal-rule="four-codes-define-chinas-legal-text-history"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="codes-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.panel, border: `3px solid ${C.panelEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              中国法典之最 · <InkUnderline delay={36}>四个里程碑</InkUnderline>
            </span>
          </div>
        </Enter>
        {codes.map((code, index) => (
          <Enter key={code.name} delay={28 + index * 24} from="left" style={{position: 'absolute', left: 40 + index * 442, top: 104, width: 410, height: 260}}>
            <Panel tone={index % 2 === 0 ? C.gold : C.seal} style={{height: '100%', padding: '16px 18px 18px', display: 'flex', flexDirection: 'column', gap: 10}}>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                {index === 0 ? <ScrollText size={34} color={C.gold} strokeWidth={2.3} /> : index === 1 ? <BookOpen size={34} color={C.seal} strokeWidth={2.3} /> : index === 2 ? <Landmark size={34} color={C.gold} strokeWidth={2.3} /> : <BookOpen size={34} color={C.seal} strokeWidth={2.3} />}
                <span style={{fontSize: 20, fontWeight: 950, color: C.gold, letterSpacing: 3}}>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div style={{fontSize: 24, fontWeight: 950, color: C.ink}}>{code.name}</div>
              <div style={{fontSize: 20, fontWeight: 870, color: C.inkSoft, lineHeight: 1.5}}>{code.desc}</div>
            </Panel>
          </Enter>
        ))}
        <Enter delay={170} from="up" marker="codes-row" style={{position: 'absolute', left: 40, top: 396, width: 1736}}>
          <DarkStrip style={{height: 88}}>
            <span style={{padding: '4px 13px', backgroundColor: C.gold, color: C.brownDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>时间线</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>
              战国《法经》→ 唐《永徽律疏》→ 宋《宋刑统》→ 清《大清律例》
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const InstitutionsScene = () => {
  /* data-final-knowledge="institutions-heading" data-final-knowledge="institution-row" */
  return (
    <Shell code="02" kicker="制度首创" title="中国制度的世界之最">
      <div
        data-layout="institution-firsts-bench"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="tang-liudian-item,xiyuan-item,ming-gao-item"
        data-focal-rule="chinese-institutions-achieved-world-firsts-in-law-and-forensics"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="institutions-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.panel, border: `3px solid ${C.panelEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              制度首创 · <InkUnderline delay={36}>三个世界第一</InkUnderline>
            </span>
          </div>
        </Enter>
        <div style={{position: 'absolute', left: 40, top: 104, width: 1736, display: 'flex', flexDirection: 'column', gap: 14}} data-final-knowledge="institution-row">
          <Enter delay={26} from="left">
            <Panel tone={C.gold} style={{padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 18}}>
              <Gavel size={36} color={C.gold} strokeWidth={2.3} />
              <div style={{flex: 1}}>
                <span style={{fontSize: 24, fontWeight: 950, color: C.ink}}>《唐六典》</span>
                <span style={{fontSize: 21, fontWeight: 870, color: C.inkSoft, marginLeft: 16}}>第一次以法典形式规定法官回避制度</span>
              </div>
            </Panel>
          </Enter>
          <Enter delay={54} from="left">
            <Panel tone={C.seal} style={{padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 18}}>
              <HeartPulse size={36} color={C.seal} strokeWidth={2.3} />
              <div style={{flex: 1}}>
                <span style={{fontSize: 24, fontWeight: 950, color: C.ink}}>《洗冤集录》</span>
                <span style={{fontSize: 21, fontWeight: 870, color: C.inkSoft, marginLeft: 16}}>世界上最早的法医学著作</span>
              </div>
            </Panel>
          </Enter>
          <Enter delay={82} from="left">
            <Panel tone={C.inkSoft} style={{padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 18}}>
              <BookOpen size={36} color={C.inkSoft} strokeWidth={2.3} />
              <div style={{flex: 1}}>
                <span style={{fontSize: 24, fontWeight: 950, color: C.ink}}>《明大诰》</span>
                <span style={{fontSize: 21, fontWeight: 870, color: C.inkSoft, marginLeft: 16}}>最普及的法规</span>
              </div>
            </Panel>
          </Enter>
        </div>
        <Enter delay={140} from='up' style={{position: 'absolute', left: 40, top: 480, width: 1736}}>
          <DarkStrip style={{height: 96}}>
            <span style={{padding: '4px 13px', backgroundColor: C.gold, color: C.brownDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>一句记</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              唐六典·法官回避 | 洗冤集录·法医学之祖 | 明大诰·最普及
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const ModernForeignScene = () => {
  /* data-final-knowledge="modern-heading" data-final-knowledge="modern-china-panel" data-final-knowledge="foreign-panel" data-final-knowledge="foreign-institutions-panel" */
  return (
    <Shell code="03" kicker="近代与外国" title="近代中国与外国法制之最">
      <div
        data-layout="modern-foreign-split-bench"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="modern-china-panel,foreign-panel,foreign-institutions-panel"
        data-focal-rule="modern-china-and-foreign-nations-each-set-milestone-firsts"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="modern-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.panel, border: `3px solid ${C.panelEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              近代中国 · 外国法制之最
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="modern-china-panel" style={{position: 'absolute', left: 40, top: 104, width: 850, height: 260}}>
          <Panel tone={C.gold} style={{height: '100%', padding: '16px 22px 18px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <LabelTab>近代中国之最</LabelTab>
            <div style={{fontSize: 21, fontWeight: 880, color: C.ink, lineHeight: 1.7}}>
              《钦定宪法大纲》——近代第一个宪法性文件
              <br />
              《大清新刑律》——第一部近代专门刑法典
              <br />
              《临时约法》——最早资产阶级宪法性文件
              <br />
              1923「贿选宪法」——首部正式颁行的宪法
            </div>
          </Panel>
        </Enter>
        <Enter delay={56} from="right" marker="foreign-panel" style={{position: 'absolute', left: 930, top: 104, width: 886, height: 260}}>
          <Panel tone={C.seal} style={{height: '100%', padding: '16px 22px 18px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <LabelTab bar={C.seal}>外国法典之最</LabelTab>
            <div style={{fontSize: 21, fontWeight: 880, color: C.ink, lineHeight: 1.7}}>
              <Globe size={26} color={C.gold} strokeWidth={2.3} style={{verticalAlign: '-4px', marginRight: 4}} />
              《国法大全》——罗马法最完备阶段标志
              <br />
              <Landmark size={26} color={C.seal} strokeWidth={2.3} style={{verticalAlign: '-4px', marginRight: 4}} />
              1787《美国宪法》——第一部资产阶级成文宪法
              <br />
              <BookMarked size={26} color={C.brass} strokeWidth={2.3} style={{verticalAlign: '-4px', marginRight: 4}} />
              1804《法国民法典》——资本主义首部民法典
              <br />
              1900《德国民法典》——首次全面规定法人制度
            </div>
          </Panel>
        </Enter>
        <Enter delay={120} from="up" marker="foreign-institutions-panel" style={{position: 'absolute', left: 40, top: 390, width: 1736, height: 110}}>
          <Panel tone={C.inkSoft} style={{height: '100%', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 18}}>
            <div style={{fontSize: 22, fontWeight: 900, color: C.ink, lineHeight: 1.55, flex: 1}}>
              外国制度首创：美国率先创造<Soft color={C.seal}>缓刑</Soft>制度 · 第一部反托拉斯法 · 魏玛德国<Soft color={C.gold}>经济劳工立法先导</Soft>
            </div>
          </Panel>
        </Enter>
        <Enter delay={190} from="up" style={{position: 'absolute', left: 40, top: 524, width: 1736}}>
          <DarkStrip style={{height: 88}}>
            <span style={{padding: '4px 13px', backgroundColor: C.gold, color: C.brownDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>一句记</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper, lineHeight: 1.5}}>
              中国四典之最 · 制度三首创 · 近代四文件 · <Soft color={C.goldPale}>外国四法典三制度</Soft>
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const LegalHistoryFirsts = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-china-codes" {...SCENES.chinaCodes}>
      <ChinaCodesScene />
    </TimelineSequence>
    <TimelineSequence name="02-institutions" {...SCENES.institutions}>
      <InstitutionsScene />
    </TimelineSequence>
    <TimelineSequence name="03-modern-foreign" {...SCENES.modernForeign}>
      <ModernForeignScene />
    </TimelineSequence>
  </AbsoluteFill>
);
