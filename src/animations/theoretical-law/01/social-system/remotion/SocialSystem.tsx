import type {CSSProperties, ReactNode} from 'react';
import {BookOpen, Briefcase, Globe, HeartPulse, Landmark, Layers, ListChecks, Scale, Umbrella} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  dusk: '#2E3D47',
  duskDeep: '#232F37',
  canopy: '#EFE8D2',
  canopyDim: '#E0D9BE',
  canopyEdge: '#5F6A62',
  ink: '#2B2721',
  inkSoft: '#4F5450',
  amber: '#B08A38',
  amberPale: '#EADBB2',
  rain: '#8FA9B0',
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
      backgroundColor: C.dusk,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(90deg, transparent 0 150px, ${C.rain}12 150px 151px), repeating-linear-gradient(90deg, transparent 0 152px, ${C.rain}10 152px 153px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.amber}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.amberPale}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.duskDeep, borderLeft: `8px solid ${C.amber}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 32 · {code}</span>
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
        borderBottom: `2px solid ${C.amber}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.amberPale, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Canopy = ({children, marker, style, tone}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.canopy, border: `2px solid ${C.canopyEdge}`, color: C.ink, position: 'relative', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.amber}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.amber}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.amber}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.amber}} />
    {children}
  </div>
);

const LabelTab = ({children, bar = C.amber}: {readonly children: ReactNode; readonly bar?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', padding: '5px 14px', backgroundColor: C.duskDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{children}</span>
);

const AmberChip = ({tone = C.amber, children, solid = false}: {readonly tone?: string; readonly children: ReactNode; readonly solid?: boolean}) => (
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

const InkUnderline = ({children, color = C.amber, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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
  <div style={{backgroundColor: 'rgba(35, 47, 55, 0.92)', border: `2px solid ${C.amber}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

export const ConceptScopeScene = () => {
  /* data-final-knowledge="concept-heading" data-final-knowledge="scope-row" data-final-knowledge="traits-row" data-final-knowledge="core-note" */
  return (
    <Shell code="01" kicker="概念与特征" title="社会制度：三义三特征">
      <div
        data-layout="scope-triangle-canopy-bench"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="three-scope-row,three-traits-row,core-note"
        data-focal-rule="exam-scope-is-the-middle-definition-centered-on-social-security"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="concept-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.canopy, border: `3px solid ${C.canopyEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              以基本<InkUnderline delay={36}>生活保障</InkUnderline>和社会<InkUnderline color={C.amber} delay={48}>秩序维护</InkUnderline>为核心
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="scope-row" style={{position: 'absolute', left: 40, top: 104, width: 1736, height: 240}}>
          <div style={{display: 'flex', gap: 16, height: '100%'}}>
            {[
              {name: '广义', text: '包含一国所有的制度体系'},
              {name: '中义', text: '除政治、经济、文化、生态制度以外的所有制度'},
              {name: '狭义', text: '单指社会保障制度'},
            ].map((scope, index) => (
              <Canopy key={scope.name} tone={index === 1 ? C.amber : C.canopyEdge} style={{flex: 1, padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 10}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                  {index === 0 ? <Globe size={34} color={C.inkSoft} strokeWidth={2.3} /> : index === 1 ? <Layers size={34} color={C.amber} strokeWidth={2.3} /> : <Umbrella size={34} color={C.inkSoft} strokeWidth={2.3} />}
                  <span style={{fontSize: 26, fontWeight: 950, color: C.ink}}>{scope.name}</span>
                </div>
                <div style={{fontSize: 22, fontWeight: 870, color: C.ink, lineHeight: 1.5}}>{scope.text}</div>
              </Canopy>
            ))}
          </div>
        </Enter>
        <Enter delay={70} from="right" marker="traits-row" style={{position: 'absolute', left: 40, top: 376, width: 1736, height: 190}}>
          <Canopy tone={C.canopyEdge} style={{height: '100%', padding: '16px 24px', display: 'flex', alignItems: 'center', gap: 16}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: 10, flex: 1}}>
              <LabelTab bar={C.rain}>三个特征</LabelTab>
              <div style={{display: 'flex', gap: 12, flexWrap: 'wrap'}}>
                <AmberChip tone={C.inkSoft} solid>以维护平等为基础</AmberChip>
                <AmberChip tone={C.inkSoft} solid>以保障公平为核心</AmberChip>
                <AmberChip tone={C.inkSoft} solid>以捍卫和谐稳定的法治秩序为关键</AmberChip>
              </div>
            </div>
          </Canopy>
        </Enter>
        <Enter delay={140} from="up" marker="core-note" style={{position: 'absolute', left: 40, top: 602, width: 1736}}>
          <DarkStrip style={{height: 96}}>
            <Umbrella size={34} color={C.amberPale} strokeWidth={2.2} />
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              考试一般特指<InkUnderline color={C.amberPale} delay={160}>中义</InkUnderline>的社会制度
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const ConstitutionItemsScene = () => {
  /* data-final-knowledge="items-heading" data-final-knowledge="items-rail" data-final-knowledge="family-note" */
  const items = [
    {name: '社会保障制度', tone: C.amber, articles: '第14条第4款 · 第45条第1款', text: '建立健全同经济发展水平相适应的社保制度；年老疾病丧失劳动能力有物质帮助权'},
    {name: '医疗卫生制度', tone: C.amber, articles: '第21条第1款', text: '国家发展医疗卫生事业 · 现代医药与传统医药 · 保护人民健康'},
    {name: '劳动保障制度', tone: C.canopyEdge, articles: '第42条第2-4款', text: '创造就业 · 加强劳动保护 · 提高报酬福利 · 劳动就业训练'},
    {name: '社会人才培养', tone: C.canopyEdge, articles: '第23条', text: '培养专业人才 · 扩大知识分子队伍'},
    {name: '计划生育制度', tone: C.canopyEdge, articles: '第25条', text: '人口增长同经济和社会发展计划相适应'},
    {name: '社会秩序与安全', tone: C.canopyEdge, articles: '第28条 · 第29条', text: '维护社会秩序制裁犯罪 · 武装力量属于人民'},
  ] as const;
  return (
    <Shell code="02" kicker="宪法体现" title="七类制度，各有条文">
      <div
        data-layout="seven-item-canopy-row"
        data-visual-anchor="typographic-sequence"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="social-security-items,labor-talent-items,order-family-items"
        data-focal-rule="every-social-institution-lands-on-a-constitutional-article"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="items-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.canopy, border: `3px solid ${C.canopyEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              我国宪法的<InkUnderline delay={36}>七类体现</InkUnderline>
            </span>
          </div>
        </Enter>
        {items.map((item, index) => (
          <Enter key={item.name} delay={26 + index * 18} from="left" style={{position: 'absolute', left: 40, top: 104 + index * 94, width: 1736, height: 84}}>
            <Canopy tone={item.tone} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '0 22px'}}>
              <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, backgroundColor: C.duskDeep, color: C.paper, fontSize: 21, fontWeight: 950, flexShrink: 0}}>{String(index + 1).padStart(2, '0')}</span>
              {index === 0 ? <Umbrella size={32} color={item.tone} strokeWidth={2.3} /> : index === 1 ? <HeartPulse size={32} color={item.tone} strokeWidth={2.3} /> : index === 3 ? <BookOpen size={32} color={item.tone} strokeWidth={2.3} /> : index === 4 ? <Scale size={32} color={item.tone} strokeWidth={2.3} /> : index === 5 ? <Landmark size={32} color={item.tone} strokeWidth={2.3} /> : <Briefcase size={32} color={item.tone} strokeWidth={2.3} />}
              <span style={{fontSize: 24, fontWeight: 950, color: C.ink, width: 300}}>{item.name}</span>
              <AmberChip tone={C.amber} solid>
                {item.articles}
              </AmberChip>
              <span style={{fontSize: 21, fontWeight: 860, color: C.inkSoft, flex: 1, lineHeight: 1.4}}>{item.text}</span>
            </Canopy>
          </Enter>
        ))}
      </div>
    </Shell>
  );
};

export const ExamFocusScene = () => {
  /* data-final-knowledge="focus-heading" data-final-knowledge="scope-verdict" data-final-knowledge="core-2004-note" data-final-knowledge="contents-rail" */
  return (
    <Shell code="03" kicker="点睛聚焦" title="考试怎么考">
      <div
        data-layout="focus-core-with-contents-rail"
        data-visual-anchor="boundary"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="scope-verdict,core-2004-note,contents-rail"
        data-focal-rule="social-security-is-the-core-added-by-the-2004-amendment"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="focus-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.canopy, border: `3px solid ${C.canopyEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              特指中义 · <InkUnderline delay={36}>社保为核心</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="scope-verdict" style={{position: 'absolute', left: 40, top: 104, width: 830, height: 240}}>
          <Canopy tone={C.canopyEdge} style={{height: '100%', padding: '18px 24px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <LabelTab bar={C.rain}>判词 · 三义怎么用</LabelTab>
            <div style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.6}}>
              广义＝所有制度体系 ｜ 中义＝<Soft color={C.amber}>除政治、经济、文化、生态之外</Soft> ｜ 狭义＝单指社会保障
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft}}>看到「社会制度」默认按中义理解</div>
          </Canopy>
        </Enter>
        <Enter delay={56} from="right" marker="core-2004-note" style={{position: 'absolute', left: 930, top: 104, width: 886, height: 240}}>
          <Canopy tone={C.amber} style={{height: '100%', padding: '18px 24px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Umbrella size={40} color={C.amber} strokeWidth={2.3} />
              <LabelTab>核心＝社会保障制度</LabelTab>
            </div>
            <div style={{fontSize: 23, fontWeight: 900, color: C.ink, lineHeight: 1.6}}>
              <Soft color={C.amber}>2004 年修宪</Soft>增加「国家建立健全同经济发展水平相适应的社会保障制度」（第14条第4款）
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft}}>社会经济文化权利入宪之源：1919《魏玛宪法》</div>
          </Canopy>
        </Enter>
        <Enter delay={130} from="up" marker="contents-rail" style={{position: 'absolute', left: 40, top: 380, width: 1736, height: 160}}>
          <Canopy tone={C.amber} style={{height: '100%', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <ListChecks size={34} color={C.amber} strokeWidth={2.3} />
              <LabelTab>主要内容四组</LabelTab>
            </div>
            <div style={{display: 'flex', gap: 12, flexWrap: 'wrap'}}>
              <AmberChip tone={C.inkSoft} solid>社保医疗</AmberChip>
              <AmberChip tone={C.inkSoft} solid>劳保人才</AmberChip>
              <AmberChip tone={C.inkSoft} solid>生育秩序</AmberChip>
              <AmberChip tone={C.inkSoft} solid>婚姻家庭</AmberChip>
            </div>
            <div style={{fontSize: 21, fontWeight: 870, color: C.inkSoft}}>婚姻家庭受国家保护——配套《妇女权益保障法》《未成年人保护法》《老年人权益保障法》《反家庭暴力法》等</div>
          </Canopy>
        </Enter>
        <Enter delay={190} from="up" style={{position: 'absolute', left: 40, top: 576, width: 1736}}>
          <DarkStrip style={{height: 96}}>
            <span style={{padding: '4px 13px', backgroundColor: C.amber, color: C.duskDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>一句记</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              中义口径四组内容——<Soft color={C.amberPale}>社保医疗 · 劳保人才 · 生育秩序 · 婚姻家庭</Soft>
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const SocialSystem = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-concept-scope" {...SCENES.conceptScope}>
      <ConceptScopeScene />
    </TimelineSequence>
    <TimelineSequence name="02-constitution-items" {...SCENES.constitutionItems}>
      <ConstitutionItemsScene />
    </TimelineSequence>
    <TimelineSequence name="03-exam-focus" {...SCENES.examFocus}>
      <ExamFocusScene />
    </TimelineSequence>
  </AbsoluteFill>
);
