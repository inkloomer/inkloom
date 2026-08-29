import type {CSSProperties, ReactNode} from 'react';
import {BookOpen, Building2, Clock, Coins, Feather, Heart, History, Home, Landmark, ListChecks, PenLine, Scale, ScrollText, Store} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  olive: '#39402C',
  oliveDeep: '#2C3222',
  leaf: '#F1E8CE',
  leafDim: '#E2D8B8',
  leafEdge: '#6E6750',
  ink: '#2B2721',
  inkSoft: '#57503F',
  thread: '#A93B32',
  threadPale: '#EFD0C8',
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
      backgroundColor: C.olive,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(90deg, transparent 0 140px, ${C.thread}10 140px 142px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.gold}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.goldPale}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.oliveDeep, borderLeft: `8px solid ${C.thread}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 27 · {code}</span>
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

const Leaf = ({children, marker, style, tone}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.leaf, border: `2px solid ${C.leafEdge}`, color: C.ink, position: 'relative', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    {children}
  </div>
);

const LabelTab = ({children, bar = C.gold}: {readonly children: ReactNode; readonly bar?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', padding: '5px 14px', backgroundColor: C.oliveDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{children}</span>
);

const ThreadChip = ({tone = C.thread, children, solid = false}: {readonly tone?: string; readonly children: ReactNode; readonly solid?: boolean}) => (
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

const Stamp = ({children, delay = 0, size = 26, tone = C.thread}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

const InkUnderline = ({children, color = C.thread, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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
  <div style={{backgroundColor: 'rgba(44, 50, 34, 0.92)', border: `2px solid ${C.gold}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const YearRow = ({year, tone, title, text}: {readonly year: string; readonly tone: string; readonly title: ReactNode; readonly text: ReactNode}) => (
  <div style={{border: `2px solid ${C.leafEdge}`, backgroundColor: C.leafDim, padding: '12px 18px', display: 'flex', alignItems: 'center', gap: 16}}>
    <span style={{display: 'inline-flex', padding: '5px 14px', backgroundColor: tone, color: C.paper, fontSize: 25, fontWeight: 950, letterSpacing: 2, flexShrink: 0}}>{year}</span>
    <span style={{fontSize: 23, fontWeight: 950, color: C.ink, width: 300, flexShrink: 0}}>{title}</span>
    <span style={{fontSize: 22, fontWeight: 870, color: C.ink, flex: 1, lineHeight: 1.45}}>{text}</span>
  </div>
);

export const DocumentsTimelineScene = () => {
  /* data-final-knowledge="timeline-heading" data-final-knowledge="spine-band" data-final-knowledge="provisional-note" data-final-knowledge="amendment-count-note" */
  return (
    <Shell code="01" kicker="发展脉络" title="一部制定，三次全面修改，五次修正">
      <div
        data-layout="founding-spine-timeline"
        data-visual-anchor="timeline-gate"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="provisional-leaf,four-constitutions-spine,five-amendment-band"
        data-focal-rule="only-one-constitution-was-made-and-amendments-accumulate"
        data-focal-channels="icon,connector,contrast,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="timeline-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.leaf, border: `3px solid ${C.leafEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              《共同纲领》→ 四部宪法 → <InkUnderline delay={36}>五次修正</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="spine-band" style={{position: 'absolute', left: 40, top: 104, width: 1736, height: 200}}>
          <Leaf tone={C.gold} style={{height: '100%', padding: '16px 24px', display: 'flex', alignItems: 'center', gap: 12}}>
            {[
              {year: '1949', name: '《共同纲领》', note: '新民主主义性质', tone: C.inkSoft},
              {year: '1954', name: '第一部宪法', note: '制定', tone: C.thread},
              {year: '1975', name: '全面修改', note: '', tone: C.gold},
              {year: '1978', name: '全面修改', note: '', tone: C.gold},
              {year: '1982', name: '全面修改 · 现行宪法', note: '', tone: C.thread},
            ].map((item, index) => (
              <div key={item.year} style={{flex: 1, border: `2px solid ${C.leafEdge}`, backgroundColor: C.leafDim, padding: '12px 12px', display: 'flex', flexDirection: 'column', gap: 8, height: 150}}>
                <span style={{display: 'inline-flex', alignSelf: 'flex-start', padding: '4px 12px', backgroundColor: item.tone, color: C.paper, fontSize: 24, fontWeight: 950}}>{item.year}</span>
                <span style={{fontSize: 23, fontWeight: 950, color: C.ink, lineHeight: 1.35}}>{item.name}</span>
                {item.note ? <span style={{fontSize: 21, fontWeight: 850, color: C.inkSoft}}>{item.note}</span> : null}
              </div>
            ))}
          </Leaf>
        </Enter>
        <Enter delay={80} from="right" marker="provisional-note" style={{position: 'absolute', left: 40, top: 328, width: 1736, height: 130}}>
          <Leaf tone={C.inkSoft} style={{height: '100%', padding: '16px 24px', display: 'flex', alignItems: 'center', gap: 18}}>
            <ScrollText size={38} color={C.inkSoft} strokeWidth={2.3} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
              《共同纲领》：1949—1954 年发挥<Soft color={C.thread}>临时宪法</Soft>作用——1954 年宪法制定后其使命终结
            </span>
          </Leaf>
        </Enter>
        <Enter delay={120} from="right" marker="amendment-count-note" style={{position: 'absolute', left: 40, top: 482, width: 1736, height: 130}}>
          <Leaf tone={C.thread} style={{height: '100%', padding: '16px 24px', display: 'flex', alignItems: 'center', gap: 18}}>
            <History size={38} color={C.thread} strokeWidth={2.3} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
              现行 1982 年宪法历经<Soft color={C.thread}>五次修改</Soft>（1988 · 1993 · 1999 · 2004 · 2018），共<Soft color={C.thread}>52 条修正案</Soft>
            </span>
          </Leaf>
        </Enter>
        <Enter delay={190} from="up" style={{position: 'absolute', left: 40, top: 640, width: 1736}}>
          <DarkStrip style={{height: 64}}>
            <Landmark size={32} color={C.brassPale} strokeWidth={2.2} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>
              制宪机关只有<Soft color={C.goldPale}>一个</Soft>：1954 年一届人大一次会议
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const AmendmentsEarlyScene = () => {
  /* data-final-knowledge="early-heading" data-final-knowledge="amendment-1988-bench" data-final-knowledge="amendment-1993-bench" */
  return (
    <Shell code="02" kicker="1988 · 1993" title="市场经济入宪，县人大改五年">
      <div
        data-layout="amendment-year-bench-1988-1993"
        data-visual-anchor="typographic-sequence"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="amendment-1988-rows,amendment-1993-groups,tenure-row"
        data-focal-rule="amendments-track-the-economy-from-supplement-to-market"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="early-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.leaf, border: `3px solid ${C.leafEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              1988 两条起步 · 1993 十条铺开
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="amendment-1988-bench" style={{position: 'absolute', left: 40, top: 104, width: 1736}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <LabelTab>1988 · 第 1—2 修正案</LabelTab>
            </div>
            <YearRow
              year="第1条"
              tone={C.thread}
              title={<>私营经济</>}
              text={<>社会主义公有制经济的<Soft color={C.thread}>补充</Soft>——引导、监督、管理</>}
            />
            <YearRow
              year="第2条"
              tone={C.thread}
              title={<><Home size={28} color={C.thread} strokeWidth={2.3} style={{verticalAlign: '-5px', marginRight: 4}} />土地使用权</>}
              text={<>「允许转让」土地的使用权</>}
            />
          </div>
        </Enter>
        <Enter delay={80} from="left" marker="amendment-1993-bench" style={{position: 'absolute', left: 40, top: 340, width: 1736}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <LabelTab bar={C.gold}>1993 · 第 3—11 修正案</LabelTab>
            </div>
            <YearRow
              year="第3-4条"
              tone={C.gold}
              title={<>路线与政党制度</>}
              text={<>社会主义<Soft color={C.gold}>初级阶段</Soft> · 坚持改革开放 · 富强民主文明 ｜ 多党合作和政治协商制度</>}
            />
            <YearRow
              year="第5-7条"
              tone={C.gold}
              title={<><Store size={28} color={C.gold} strokeWidth={2.3} style={{verticalAlign: '-5px', marginRight: 4}} />经济体制</>}
              text={<>「国营经济」改「<Soft color={C.gold}>国有经济</Soft>」 ｜ 家庭联产承包为主的责任制 ｜ 实行社会主义<Soft color={C.gold}>市场经济</Soft></>}
            />
            <YearRow
              year="第8-11条"
              tone={C.gold}
              title={<>微观调整</>}
              text={<>「国营企业」改「国有企业」（两处） ｜ 废除集体经济受国家计划指导 ｜ <Clock size={26} color={C.thread} strokeWidth={2.3} style={{verticalAlign: '-4px', marginRight: 4}} />县级人大任期<Soft color={C.thread}>3年改5年</Soft></>}
            />
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const AmendmentsModernScene = () => {
  /* data-final-knowledge="modern-heading" data-final-knowledge="amendment-1999-bench" data-final-knowledge="amendment-2004-bench" data-final-knowledge="rights-insertion-note" */
  return (
    <Shell code="03" kicker="1999 · 2004" title="依法治国与人权保障">
      <div
        data-layout="amendment-year-bench-1999-2004"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="amendment-1999-groups,amendment-2004-groups,rights-insertion"
        data-focal-rule="rule-of-law-and-rights-enter-the-constitution-in-these-two-readings"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="modern-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.leaf, border: `3px solid ${C.leafEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              1999 六条 · 2004 十四条
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="amendment-1999-bench" style={{position: 'absolute', left: 40, top: 104, width: 1736}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <LabelTab>1999 · 第 12—17 修正案</LabelTab>
            </div>
            <YearRow
              year="第12-14条"
              tone={C.thread}
              title={<>路线与制度</>}
              text={<>长期处于初级阶段 · <Soft color={C.thread}>邓小平理论</Soft>指引 ｜ <BookOpen size={28} color={C.thread} strokeWidth={2.3} style={{verticalAlign: '-5px', marginRight: 4}} /><Soft color={C.thread}>依法治国</Soft>，建设社会主义法治国家 ｜ 公有制为主体多种所有制共同发展·按劳分配为主体多种分配并存</>}
            />
            <YearRow
              year="第15-17条"
              tone={C.thread}
              title={<>经济与罪名</>}
              text={<>家庭承包为基础、<Soft color={C.gold}>统分结合双层经营</Soft> ｜ 非公有制经济是社会主义市场经济的<Soft color={C.thread}>重要组成部分</Soft>（保护·引导·监督管理） ｜ 「反革命活动」改「危害国家安全的犯罪」</>}
            />
          </div>
        </Enter>
        <Enter delay={90} from="left" marker="amendment-2004-bench" style={{position: 'absolute', left: 40, top: 356, width: 1736}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <LabelTab bar={C.gold}>2004 · 第 18—31 修正案</LabelTab>
            </div>
            <YearRow
              year="第18-23条"
              tone={C.gold}
              title={<>指导与财产</>}
              text={<>「三个代表」·三个文明 ｜ 统一战线加「社会主义事业的建设者」 ｜ 征收征用<Coins size={26} color={C.gold} strokeWidth={2.3} style={{verticalAlign: '-4px', marginRight: 4}} />土地并补偿 ｜ 非公经济<Soft color={C.gold}>鼓励、支持</Soft> ｜ <Soft color={C.thread}>合法私有财产不受侵犯</Soft>·保护私有财产权和继承权 ｜ 社会保障制度</>}
            />
            <YearRow
              year="第24-31条"
              tone={C.gold}
              title={<>人权与机构</>}
              text={<><Heart size={26} color={C.thread} strokeWidth={2.3} style={{verticalAlign: '-4px', marginRight: 4}} /><Soft color={C.thread}>国家尊重和保障人权</Soft> ｜ 特区人大代表 ｜ 「戒严」改「紧急状态」（三处） ｜ 主席进行国事活动 ｜ 乡级人大任期3年改5年 ｜ 增加国歌</>}
            />
          </div>
        </Enter>
        <Enter delay={170} from="up" marker="rights-insertion-note" style={{position: 'absolute', left: 40, top: 632, width: 1736}}>
          <DarkStrip style={{height: 62}}>
            <span style={{padding: '4px 13px', backgroundColor: C.thread, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>必背</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>
              1999 依法治国入宪 · 2004 <Soft color={C.goldPale}>人权与私产入宪</Soft>
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const Amendment2018Scene = () => {
  /* data-final-knowledge="y2018-heading" data-final-knowledge="guidance-cluster" data-final-knowledge="supervision-cluster" data-final-knowledge="local-cluster" */
  return (
    <Shell code="04" kicker="2018 修正案" title="监察入宪，史上最大规模">
      <div
        data-layout="amendment-2018-cluster-board"
        data-visual-anchor="document-fork"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="guidance-cluster,supervision-cluster,tenure-local-cluster"
        data-focal-rule="the-2018-reading-rewires-guidance-supervision-and-tenure"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="y2018-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.leaf, border: `3px solid ${C.leafEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              第 32—52 修正案 · 二十一条
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="guidance-cluster" style={{position: 'absolute', left: 40, top: 104, width: 850, height: 280}}>
          <Leaf tone={C.thread} style={{height: '100%', padding: '16px 22px 18px', display: 'flex', flexDirection: 'column', gap: 11}}>
            <LabelTab>指导思想与总纲（32—39）</LabelTab>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              指导思想加<Soft color={C.thread}>科学发展观、习近平新时代思想</Soft> ｜ <Soft color={C.thread}>五大文明</Soft>（物质·政治·精神·社会·生态） ｜ 富强民主文明<Soft color={C.thread}>和谐美丽</Soft>·伟大复兴
            </div>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              统一战线加「致力于中华民族伟大复兴的爱国者」 ｜ <Soft color={C.thread}>党领导是中国特色社会主义最本质的特征</Soft> ｜ 核心价值观 · 命运共同体 · 和平发展
            </div>
          </Leaf>
        </Enter>
        <Enter delay={64} from="right" marker="supervision-cluster" style={{position: 'absolute', left: 930, top: 104, width: 886, height: 280}}>
          <Leaf tone={C.gold} style={{height: '100%', padding: '16px 22px 18px', display: 'flex', flexDirection: 'column', gap: 11}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Building2 size={34} color={C.gold} strokeWidth={2.3} />
              <LabelTab bar={C.gold}>监察委一节（40—52）</LabelTab>
            </div>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              <PenLine size={26} color={C.thread} strokeWidth={2.3} style={{verticalAlign: '-4px', marginRight: 4}} />
              <Soft color={C.thread}>宪法宣誓</Soft>入宪 ｜ 人大选举罢免<Soft color={C.gold}>监委主任</Soft> ｜ 法律委员会更名<Soft color={C.gold}>宪法和法律委员会</Soft>
            </div>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              新增第123—127条：各级监委是<Soft color={C.gold}>国家监察机关</Soft>；国家监委<Soft color={C.thread}>领导</Soft>地方监委；对产生它的国家权力机关和<Soft color={C.thread}>上一级监委</Soft>负责；依法<Soft color={C.gold}>独立行使监察权</Soft>（主任连任不超两届）
            </div>
          </Leaf>
        </Enter>
        <Enter delay={110} from="up" marker="local-cluster" style={{position: 'absolute', left: 40, top: 412, width: 1736, height: 180}}>
          <Leaf tone={C.inkSoft} style={{height: '100%', padding: '16px 22px 18px', display: 'flex', flexDirection: 'column', gap: 11}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Scale size={34} color={C.inkSoft} strokeWidth={2.3} />
              <LabelTab bar={C.inkSoft}>任期与地方（45—49 等）</LabelTab>
            </div>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              主席·副主席<Soft color={C.thread}>取消连任限制</Soft> ｜ 国务院「领导和管理生态文明建设」、删「监察」 ｜ <Soft color={C.gold}>设区的市</Soft>人大及人常可制定地方性法规（报省人常批准）
            </div>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              县级以上地方人大选举罢免本级监委主任 ｜ 地方人常组成人员不得担任行政·监察·审判·检察职务 ｜ 地方政府删去「监察」管理权
            </div>
          </Leaf>
        </Enter>
        <Enter delay={180} from="up" style={{position: 'absolute', left: 40, top: 620, width: 1736}}>
          <DarkStrip style={{height: 76}}>
            <span style={{padding: '4px 13px', backgroundColor: C.thread, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>一句记</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>
              2018 一句话：<Soft color={C.goldPale}>监察委入宪 + 领导入宪 + 宣誓入宪</Soft>
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const MnemonicsScene = () => {
  /* data-final-knowledge="mnemonics-heading" data-final-knowledge="recurrence-rhymes" data-final-knowledge="y2018-new-words" data-final-knowledge="provisional-verdict" */
  return (
    <Shell code="05" kicker="口诀串烧" title="连续变化，一句记牢">
      <div
        data-layout="mnemonic-rhyme-board"
        data-visual-anchor="concept-icon"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="recurrence-rhymes,y2018-new-words,provisional-verdict"
        data-focal-rule="recurring-themes-rhyme-across-amendment-years"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="mnemonics-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.leaf, border: `3px solid ${C.leafEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              四条<InkUnderline delay={36}>连续变化</InkUnderline>口诀
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="recurrence-rhymes" style={{position: 'absolute', left: 40, top: 104, width: 1020, height: 360}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
            {[
              {label: '非公经济', rhyme: '88 补充 · 93 市场 · 99 重要 · 04 鼓支'},
              {label: '土地政策', rhyme: '88 转 · 93 分 · 99 统 · 04 征'},
              {label: '人大任期', rhyme: '93 县 · 04 乡 —— 3 改 5'},
              {label: '统一战线', rhyme: '04 建设 · 18 复兴'},
            ].map((row) => (
              <div key={row.label} style={{border: `2px solid ${C.leafEdge}`, backgroundColor: C.leafDim, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 16}}>
                <span style={{fontSize: 25, fontWeight: 950, color: C.ink, width: 170}}>{row.label}</span>
                <span style={{width: 2, height: 44, backgroundColor: C.leafEdge}} />
                <span style={{fontSize: 25, fontWeight: 900, color: C.thread, letterSpacing: 1}}>{row.rhyme}</span>
              </div>
            ))}
          </div>
        </Enter>
        <Enter delay={80} from="right" marker="y2018-new-words" style={{position: 'absolute', left: 1100, top: 104, width: 716, height: 360}}>
          <Leaf tone={C.gold} style={{height: '100%', padding: '16px 22px 18px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <LabelTab bar={C.gold}>2018 新词速记</LabelTab>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.65}}>
              社会生态 · 和谐美丽 · 伟大复兴 ｜ 科学发展观·习近平思想 ｜ 核心价值观 · 命运共同体
            </div>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.65}}>
              <Soft color={C.thread}>宪法宣誓</Soft> · 设区的市 · 党的领导是本质 ｜ 监察委员会 · 主席可连任
            </div>
          </Leaf>
        </Enter>
        <Enter delay={160} from="up" marker="provisional-verdict" style={{position: 'absolute', left: 40, top: 500, width: 1736, height: 140}}>
          <Leaf tone={C.thread} style={{height: '100%', padding: '16px 24px', display: 'flex', alignItems: 'center', gap: 18}}>
            <ListChecks size={38} color={C.thread} strokeWidth={2.3} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
              易错：邓小平理论<Soft color={C.thread}>1999</Soft>年入宪（非1993）——「三个代表」2004 年入宪
            </span>
          </Leaf>
        </Enter>
      </div>
    </Shell>
  );
};

export const ConstitutionDevelopment = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-documents-timeline" {...SCENES.documentsTimeline}>
      <DocumentsTimelineScene />
    </TimelineSequence>
    <TimelineSequence name="02-amendments-early" {...SCENES.amendmentsEarly}>
      <AmendmentsEarlyScene />
    </TimelineSequence>
    <TimelineSequence name="03-amendments-modern" {...SCENES.amendmentsModern}>
      <AmendmentsModernScene />
    </TimelineSequence>
    <TimelineSequence name="04-amendment-2018" {...SCENES.amendment2018}>
      <Amendment2018Scene />
    </TimelineSequence>
    <TimelineSequence name="05-mnemonics" {...SCENES.mnemonics}>
      <MnemonicsScene />
    </TimelineSequence>
  </AbsoluteFill>
);
