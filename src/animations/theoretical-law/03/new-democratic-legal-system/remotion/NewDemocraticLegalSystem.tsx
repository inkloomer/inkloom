import type {CSSProperties, ReactNode} from 'react';
import {Gavel, Landmark, Scale, ScrollText, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  rev: '#7A2525',
  revDeep: '#5C1D1D',
  parch: '#F0E6CE',
  parchDim: '#E2D5B8',
  parchEdge: '#6E5A48',
  ink: '#2B2119',
  inkSoft: '#5C4F3E',
  gold: '#B08A38',
  goldPale: '#EADBB2',
  seal: '#A3412F',
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
      backgroundColor: C.rev,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(0deg, transparent 0 128px, ${C.gold}0E 128px 130px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.gold}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.goldPale}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.revDeep, borderLeft: `8px solid ${C.gold}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 54 · {code}</span>
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
        borderBottom: `2px solid ${C.gold}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.goldPale, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Parch = ({children, marker, style, tone}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.parch, border: `2px solid ${C.parchEdge}`, color: C.ink, position: 'relative', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    {children}
  </div>
);

const LabelTab = ({children, bar = C.gold}: {readonly children: ReactNode; readonly bar?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', padding: '5px 14px', backgroundColor: C.revDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{children}</span>
);

const GoldChip = ({tone = C.gold, children, solid = false}: {readonly tone?: string; readonly children: ReactNode; readonly solid?: boolean}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 7, padding: '4px 12px', border: `2px solid ${tone}`, backgroundColor: solid ? tone : `${tone}14`, fontSize: 23, fontWeight: 880, color: solid ? C.paper : C.ink}}>{children}</span>
);

const SealStamp = ({children, delay = 0, size = 26, tone = C.seal}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span style={{display: 'inline-block', padding: '8px 16px', border: `5px solid ${tone}`, color: tone, backgroundColor: `${tone}10`, fontSize: size, fontWeight: 950, letterSpacing: 2, opacity: p, scale: 0.86 + p * 0.14, rotate: '-3deg'}}>{children}</span>
  );
};

const InkUnderline = ({children, color = C.seal, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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
  <div style={{backgroundColor: 'rgba(92, 29, 29, 0.92)', border: `2px solid ${C.gold}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

export const ConstitutionalDocsScene = () => {
  /* data-final-knowledge="docs-heading" data-final-knowledge="docs-row" data-final-knowledge="abolish-note" */
  const docs = [
    {year: '1931', name: '《中华苏维埃共和国宪法大纲》', items: '工农民主专政 · 苏维埃代表大会制 · 1934年修改加中农联合', tag: '第一部劳动人民宪法性文件', tone: C.seal},
    {year: '1941', name: '《陕甘宁边区施政纲领》', items: '三三制 · 直接平等无记名选举 · 废肉刑重证据', tag: '抗日民族统一战线代表', tone: C.gold},
    {year: '1946', name: '《陕甘宁边区宪法原则》', items: '人民代表会议制 · 民族区域自治权', tag: '为新中国政治制度奠基', tone: C.gold},
    {year: '1948', name: '《华北人民政府施政方针》', items: '解放战争后期代表性宪法文件', tag: '', tone: C.inkSoft},
  ] as const;
  return (
    <Shell code="01" kicker="宪法性文件" title="四部宪法性文件 + 废除伪法统">
      <div
        data-layout="four-document-chronological-banner-row"
        data-visual-anchor="timeline-gate"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="suweiai-document,shaangan-document-pair,huabei-abolish-document"
        data-focal-rule="constitutional-documents-chronicle-the-revolutionary-progress"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="docs-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.parch, border: `3px solid ${C.parchEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              新民主主义革命时期 · <InkUnderline delay={36}>宪法性文件</InkUnderline>
            </span>
          </div>
        </Enter>
        <div style={{position: 'absolute', left: 40, top: 104, width: 1736, display: 'flex', flexDirection: 'column', gap: 12}} data-final-knowledge="docs-row">
          {docs.map((doc, index) => (
            <Enter key={doc.year} delay={28 + index * 24} from="left" style={{position: 'relative'}}>
              <Parch tone={doc.tone} style={{padding: '12px 22px', display: 'flex', alignItems: 'center', gap: 16}}>
                <span style={{display: 'inline-flex', padding: '4px 14px', backgroundColor: doc.tone, color: C.paper, fontSize: 23, fontWeight: 950, flexShrink: 0}}>{doc.year}</span>
                <span style={{fontSize: 23, fontWeight: 950, color: C.ink, width: 400}}>{doc.name}</span>
                <span style={{fontSize: 21, fontWeight: 860, color: C.inkSoft, flex: 1, lineHeight: 1.4}}>{doc.items}</span>
                {doc.tag ? <SealStamp delay={120 + index * 20} size={20}>{doc.tag}</SealStamp> : null}
              </Parch>
            </Enter>
          ))}
        </div>
        <Enter delay={170} from="up" marker="abolish-note" style={{position: 'absolute', left: 40, top: 504, width: 1736}}>
          <DarkStrip style={{height: 96}}>
            <span style={{padding: '4px 13px', backgroundColor: C.gold, color: C.revDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>1949</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper, lineHeight: 1.5}}>
              废除国民党<Soft color={C.goldPale}>六法全书</Soft>与伪法统——《共同纲领》重申此精神
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const JudicialSystemScene = () => {
  /* data-final-knowledge="judicial-heading" data-final-knowledge="maxiwu-pillar" data-final-knowledge="mediation-pillar" data-final-knowledge="mediation-principle-note" */
  return (
    <Shell code="02" kicker="司法制度" title="马锡五审判 + 人民调解">
      <div
        data-layout="twin-pillar-judicial-bench"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="maxiwu-pillar,mediation-pillar,mediation-principle-note"
        data-focal-rule="mass-line-judicial-method-and-people-mediation-defined-the-era"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="judicial-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.parch, border: `3px solid ${C.parchEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              司法制度 · <InkUnderline delay={36}>两根支柱</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="maxiwu-pillar" style={{position: 'absolute', left: 40, top: 104, width: 850, height: 300}}>
          <Parch tone={C.seal} style={{height: '100%', padding: '18px 26px 20px', display: 'flex', flexDirection: 'column', gap: 13}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Gavel size={38} color={C.seal} strokeWidth={2.3} />
              <LabelTab bar={C.seal}>马锡五审判方式</LabelTab>
            </div>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.65}}>
              ① <Soft color={C.seal}>深入农村调查研究</Soft>，实事求是了解案情
              <br />
              ② <Soft color={C.gold}>依靠群众</Soft>，教育群众，尊重群众意见
              <br />
              ③ <Soft color={C.gold}>方便群众诉讼</Soft>，手续简单，不拘形式
            </div>
            <div style={{marginTop: 'auto', fontSize: 21, fontWeight: 870, color: C.inkSoft}}>延安整风运动奠定思想基础</div>
          </Parch>
        </Enter>
        <Enter delay={64} from="right" marker="mediation-pillar" style={{position: 'absolute', left: 930, top: 104, width: 886, height: 300}}>
          <Parch tone={C.gold} style={{height: '100%', padding: '18px 26px 20px', display: 'flex', flexDirection: 'column', gap: 13}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Users size={38} color={C.gold} strokeWidth={2.3} />
              <LabelTab>人民调解制度</LabelTab>
            </div>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.6}}>
              原则：<Soft color={C.gold}>双方自愿</Soft> · 遵守法律政策 · 非诉讼必经程序
              <br />
              范围：民事均可调解 · 轻微刑事案件可调解
            </div>
            <div style={{marginTop: 'auto', fontSize: 21, fontWeight: 870, color: C.inkSoft}}>
              类型：民间（最受提倡）· 群众团体 · 政府 · 司法调解
            </div>
          </Parch>
        </Enter>
        <Enter delay={170} from="up" marker="mediation-principle-note" style={{position: 'absolute', left: 40, top: 434, width: 1736}}>
          <DarkStrip style={{height: 100}}>
            <span style={{padding: '4px 13px', backgroundColor: C.gold, color: C.revDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>一句记</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper, lineHeight: 1.5}}>
              马锡五＝群众路线＋方便群众 ｜ 调解＝<Soft color={C.goldPale}>自愿＋合法＋非必经</Soft>
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const NewDemocraticLegalSystem = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-constitutional-docs" {...SCENES.constitutionalDocs}>
      <ConstitutionalDocsScene />
    </TimelineSequence>
    <TimelineSequence name="02-judicial-system" {...SCENES.judicialSystem}>
      <JudicialSystemScene />
    </TimelineSequence>
  </AbsoluteFill>
);
