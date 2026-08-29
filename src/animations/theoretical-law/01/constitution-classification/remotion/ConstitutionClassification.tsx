import type {CSSProperties, ReactNode} from 'react';
import {Crown, Feather, FileStack, Handshake, Lock, ScrollText, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  archive: '#37414A',
  archiveDeep: '#2B333B',
  manila: '#EFE3C4',
  manilaDim: '#E2D5B2',
  manilaEdge: '#6E6450',
  ink: '#2B2721',
  inkSoft: '#57503F',
  brass: '#A9822F',
  brassPale: '#E5D3A4',
  tab: '#B0452F',
  tabPale: '#F0D2C4',
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
      backgroundColor: C.archive,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(0deg, transparent 0 130px, ${C.brass}0D 130px 132px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.brass}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.brassPale}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.archiveDeep, borderLeft: `8px solid ${C.brass}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 26 · {code}</span>
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

const Folder = ({children, marker, style, tone}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.manila, border: `2px solid ${C.manilaEdge}`, color: C.ink, position: 'relative', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.brass}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.brass}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.brass}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.brass}} />
    {children}
  </div>
);

const LabelTab = ({children, bar = C.brass}: {readonly children: ReactNode; readonly bar?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', padding: '5px 14px', backgroundColor: C.archiveDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{children}</span>
);

const YearTab = ({children, tone = C.tab, solid = false}: {readonly children: ReactNode; readonly tone?: string; readonly solid?: boolean}) => (
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

const InkUnderline = ({children, color = C.tab, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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
  <div style={{backgroundColor: 'rgba(43, 51, 59, 0.92)', border: `2px solid ${C.brass}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Stamp = ({children, delay = 0, size = 26, tone = C.tab}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

export const WrittenUnwrittenScene = () => {
  /* data-final-knowledge="written-heading" data-final-knowledge="written-folder" data-final-knowledge="unwritten-folder" data-final-knowledge="criterion-note" */
  return (
    <Shell code="01" kicker="成文与不成文" title="有没有统一法典">
      <div
        data-layout="criterion-pair-with-file-lists"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="codified-claim,uncodified-claim,criterion-note"
        data-focal-rule="one-unified-code-makes-a-constitution-written"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="written-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.manila, border: `3px solid ${C.manilaEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              分类标准（蒲莱士）：是否具有<InkUnderline delay={36}>统一法典形式</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="written-folder" style={{position: 'absolute', left: 40, top: 104, width: 850, height: 330}}>
          <Folder tone={C.brass} style={{height: '100%', padding: '18px 24px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <ScrollText size={38} color={C.brass} strokeWidth={2.3} />
              <LabelTab bar={C.brass}>成文宪法</LabelTab>
            </div>
            <div style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
              统一法典 · 法律文件多<Soft color={C.brass}>直接表述为宪法</Soft>并冠以国名
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 'auto'}}>
              <YearTab tone={C.tab} solid>
                1787《美国宪法》· 世界第一
              </YearTab>
              <YearTab tone={C.tab} solid>
                1791《法国宪法》· 欧洲第一
              </YearTab>
            </div>
          </Folder>
        </Enter>
        <Enter delay={56} from="right" marker="unwritten-folder" style={{position: 'absolute', left: 930, top: 104, width: 886, height: 330}}>
          <Folder tone={C.manilaEdge} style={{height: '100%', padding: '18px 24px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <FileStack size={38} color={C.inkSoft} strokeWidth={2.3} />
              <LabelTab bar={C.manilaEdge}>不成文宪法</LabelTab>
            </div>
            <div style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
              无统一法典，实质上<Soft color={C.inkSoft}>发挥宪法作用</Soft>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 'auto'}}>
              <YearTab tone={C.tab}>1628《权利请愿书》</YearTab>
              <YearTab tone={C.tab}>1679《人身保护法》</YearTab>
              <YearTab tone={C.tab}>1689《权利法案》</YearTab>
            </div>
          </Folder>
        </Enter>
        <Enter delay={150} from="up" marker="criterion-note" style={{position: 'absolute', left: 40, top: 470, width: 1736}}>
          <DarkStrip style={{height: 90}}>
            <span style={{padding: '4px 13px', backgroundColor: C.brass, color: C.archiveDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>易错</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              第一部<Soft color={C.tabPale}>成文</Soft>宪法才是美国宪法——别漏「成文」二字
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const RigidFlexibleScene = () => {
  /* data-final-knowledge="rigid-heading" data-final-knowledge="rigid-folder" data-final-knowledge="flexible-folder" data-final-knowledge="correspondence-note" */
  return (
    <Shell code="02" kicker="刚性与柔性" title="制修程序有无特殊">
      <div
        data-layout="flexibility-criterion-bench"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="rigid-claim,flexible-claim,correspondence-note"
        data-focal-rule="special-amendment-procedure-makes-a-constitution-rigid"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="rigid-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.manila, border: `3px solid ${C.manilaEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              分类标准（蒲莱士）：制定修改程序与普通法律<InkUnderline delay={36}>有无差异</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="rigid-folder" style={{position: 'absolute', left: 40, top: 104, width: 850, height: 300}}>
          <Folder tone={C.brass} style={{height: '100%', padding: '18px 24px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Lock size={38} color={C.brass} strokeWidth={2.3} />
              <LabelTab bar={C.brass}>刚性宪法</LabelTab>
            </div>
            <div style={{fontSize: 24, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              制定和修改的<Soft color={C.brass}>机关及程序</Soft>不同于一般法律
            </div>
            <div style={{marginTop: 'auto'}}>
              <YearTab tone={C.tab} solid>
                成文宪法国家一般都是刚性宪法国家
              </YearTab>
            </div>
          </Folder>
        </Enter>
        <Enter delay={56} from="right" marker="flexible-folder" style={{position: 'absolute', left: 930, top: 104, width: 886, height: 300}}>
          <Folder tone={C.manilaEdge} style={{height: '100%', padding: '18px 24px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Feather size={38} color={C.inkSoft} strokeWidth={2.3} />
              <LabelTab bar={C.manilaEdge}>柔性宪法</LabelTab>
            </div>
            <div style={{fontSize: 24, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              制定和修改的机关及程序<Soft color={C.inkSoft}>与一般法律相同</Soft>
            </div>
            <div style={{marginTop: 'auto'}}>
              <YearTab tone={C.tab}>
                不成文宪法国家一般都是柔性宪法国家
              </YearTab>
            </div>
          </Folder>
        </Enter>
        <Enter delay={150} from="up" marker="correspondence-note" style={{position: 'absolute', left: 40, top: 440, width: 1736}}>
          <DarkStrip style={{height: 90}}>
            <span style={{padding: '4px 13px', backgroundColor: C.brass, color: C.archiveDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>对应</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              成文→刚性 · 不成文→柔性——两把尺子<Soft color={C.brassPale}>常常同框</Soft>
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const SovereignFormsScene = () => {
  /* data-final-knowledge="sovereign-heading" data-final-knowledge="sovereign-row" data-final-knowledge="memorize-verdict" */
  const forms = [
    {name: '钦定宪法', tone: C.tab, docs: '1889 日本《明治宪法》 · 1908 中国《钦定宪法大纲》', gloss: '君主自上而下颁布'},
    {name: '民定宪法', tone: C.brass, docs: '《美国宪法》 · 《魏玛宪法》', gloss: '民意机关·人民制定'},
    {name: '协定宪法', tone: C.inkSoft, docs: '1215 英国《自由大宪章》 · 1830《法国宪法》', gloss: '君主与国民协商'},
  ] as const;
  return (
    <Shell code="03" kicker="钦定民定协定" title="看制定主体是谁">
      <div
        data-layout="three-sovereign-folder-row"
        data-visual-anchor="typographic-sequence"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="imposed-folder,popular-folder,agreed-folder"
        data-focal-rule="the-making-subject-names-the-constitutional-form"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="sovereign-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.manila, border: `3px solid ${C.manilaEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              分类标准：制定宪法的<InkUnderline delay={36}>主体</InkUnderline>不同
            </span>
          </div>
        </Enter>
        {forms.map((form, index) => (
          <Enter key={form.name} delay={28 + index * 24} from="up" style={{position: 'absolute', left: 40 + index * 590, top: 104, width: 556, height: 380}}>
            <Folder tone={form.tone} style={{height: '100%', padding: '18px 22px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                {index === 0 ? <Crown size={38} color={form.tone} strokeWidth={2.3} /> : index === 1 ? <Users size={38} color={form.tone} strokeWidth={2.3} /> : <Handshake size={38} color={form.tone} strokeWidth={2.3} />}
                <span style={{fontSize: 20, fontWeight: 950, color: C.brass, letterSpacing: 3}}>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div style={{fontSize: 28, fontWeight: 950, color: C.ink}}>{form.name}</div>
              <div style={{fontSize: 21, fontWeight: 850, color: C.inkSoft}}>{form.gloss}</div>
              <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.ink, lineHeight: 1.5, border: `2px solid ${C.manilaEdge}`, backgroundColor: C.manilaDim, padding: '10px 12px'}}>{form.docs}</div>
            </Folder>
          </Enter>
        ))}
        <Enter delay={170} from="up" marker="memorize-verdict" style={{position: 'absolute', left: 40, top: 520, width: 1736}}>
          <DarkStrip style={{height: 110}}>
            <span style={{padding: '4px 13px', backgroundColor: C.brass, color: C.archiveDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>必背</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper, lineHeight: 1.5}}>
              成文·钦定·协定的代表文件必须记住——<Soft color={C.tabPale}>1830《法国宪法》是协定不是钦定</Soft>
            </span>
            <span style={{marginLeft: 'auto'}}>
              <Stamp delay={190} size={24}>考试高频</Stamp>
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const ConstitutionClassification = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-written-unwritten" {...SCENES.writtenUnwritten}>
      <WrittenUnwrittenScene />
    </TimelineSequence>
    <TimelineSequence name="02-rigid-flexible" {...SCENES.rigidFlexible}>
      <RigidFlexibleScene />
    </TimelineSequence>
    <TimelineSequence name="03-sovereign-forms" {...SCENES.sovereignForms}>
      <SovereignFormsScene />
    </TimelineSequence>
  </AbsoluteFill>
);
