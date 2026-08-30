import type {CSSProperties, ReactNode} from 'react';
import {Crown, Gavel, Heart, Landmark, Scale, ScrollText, SplitSquareHorizontal} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  patina: '#4A4132',
  patinaDeep: '#3A3327',
  bronze: '#E8DDBE',
  bronzeDim: '#D8CDA8',
  bronzeEdge: '#6E6250',
  ink: '#2B2119',
  inkSoft: '#5C4F3E',
  ochre: '#C08A2E',
  ochrePale: '#EDDDB4',
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
      backgroundColor: C.patina,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(0deg, transparent 0 130px, ${C.ochre}12 130px 132px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.seal}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.ochre}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.patinaDeep, borderLeft: `8px solid ${C.seal}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 47 · {code}</span>
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
      <span style={{fontSize: 21, fontWeight: 850, color: C.ochrePale, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Bronze = ({children, marker, style, tone}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.bronze, border: `2px solid ${C.bronzeEdge}`, color: C.ink, position: 'relative', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.ochre}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.ochre}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.ochre}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.ochre}} />
    {children}
  </div>
);

const LabelTab = ({children, bar = C.seal}: {readonly children: ReactNode; readonly bar?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', padding: '5px 14px', backgroundColor: C.patinaDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{children}</span>
);

const OchreChip = ({tone = C.ochre, children, solid = false}: {readonly tone?: string; readonly children: ReactNode; readonly solid?: boolean}) => (
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

const SealStamp = ({children, delay = 0, size = 26, tone = C.seal}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

const InkUnderline = ({children, color = C.seal, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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
  <div style={{backgroundColor: 'rgba(58, 51, 39, 0.92)', border: `2px solid ${C.seal}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

export const IdeologyScene = () => {
  /* data-final-knowledge="ideology-heading" data-final-knowledge="virtue-plaque" data-final-knowledge="rite-plaque" data-final-knowledge="han-inheritance-note" */
  return (
    <Shell code="01" kicker="立法思想" title="以德配天，明德慎罚">
      <div
        data-layout="twin-bronze-ideology-plaques"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="virtue-heaven-plaque,rite-punishment-plaque,han-inheritance-note"
        data-focal-rule="virtue-first-punishment-second-and-rites-enter-punishment"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="ideology-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.bronze, border: `3px solid ${C.bronzeEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              西周立法思想 · 两块铜版
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="virtue-plaque" style={{position: 'absolute', left: 40, top: 104, width: 850, height: 380}}>
          <Bronze tone={C.ochre} style={{height: '100%', padding: '18px 26px 20px', display: 'flex', flexDirection: 'column', gap: 13}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Landmark size={38} color={C.ochre} strokeWidth={2.3} />
              <LabelTab bar={C.ochre}>以德配天 · 明德慎罚</LabelTab>
            </div>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.6}}>
              继承发展夏商神权思想——回答统治<Soft color={C.ochre}>合法性</Soft>：上天只眷顾<Soft color={C.ochre}>有德者</Soft>
            </div>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.6}}>
              德的基本要求：<Soft color={C.seal}>敬天 · 尊祖 · 保民</Soft>
            </div>
            <div style={{fontSize: 22, fontWeight: 900, color: C.ink, lineHeight: 1.55}}>
              明德慎罚＝实施德教，用刑宽缓——<Soft color={C.ochre}>德教第一</Soft>，刑罚第二
            </div>
          </Bronze>
        </Enter>
        <Enter delay={64} from="right" marker="rite-plaque" style={{position: 'absolute', left: 930, top: 104, width: 886, height: 380}}>
          <Bronze tone={C.seal} style={{height: '100%', padding: '18px 26px 20px', display: 'flex', flexDirection: 'column', gap: 13}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Scale size={38} color={C.seal} strokeWidth={2.3} />
              <LabelTab bar={C.seal}>礼刑关系 · 出礼入刑</LabelTab>
            </div>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              礼两义：<Soft color={C.seal}>抽象精神</Soft>（亲亲尊尊）＋具体礼仪形式 ｜ 五礼：吉凶军宾嘉 ｜ 五刑：<Soft color={C.seal}>墨劓刱宫大辟</Soft>
            </div>
            <div style={{fontSize: 22, fontWeight: 900, color: C.ink, lineHeight: 1.55}}>
              「礼不下庶人，刑不上大夫」——反映<Soft color={C.seal}>等级制度</Soft>
            </div>
            <div style={{fontSize: 22, fontWeight: 900, color: C.ink, lineHeight: 1.55}}>
              <InkUnderline delay={140}>出礼入刑</InkUnderline>：行为超出礼即落入刑的处罚范围
            </div>
          </Bronze>
        </Enter>
        <Enter delay={170} from="up" marker="han-inheritance-note" style={{position: 'absolute', left: 40, top: 520, width: 1736}}>
          <DarkStrip style={{height: 92}}>
            <span style={{padding: '4px 13px', backgroundColor: C.seal, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>流传</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              汉代发挥为「<Soft color={C.ochrePale}>德主刑辅，礼刑并用</Soft>」
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const MarriageScene = () => {
  /* data-final-knowledge="marriage-heading" data-final-knowledge="principles-rites-rows" data-final-knowledge="divorce-rows" data-final-knowledge="inheritance-row" */
  return (
    <Shell code="02" kicker="婚姻继承" title="三原则 · 六礼 · 七出三不去">
      <div
        data-layout="marriage-rubbing-paper-bench"
        data-visual-anchor="typographic-sequence"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="principle-rites-rows,divorce-rows,inheritance-row"
        data-focal-rule="marriage-follows-rites-and-primogeniture-inherits-status"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="marriage-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.bronze, border: `3px solid ${C.bronzeEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              西周婚姻继承 · 拓片三张
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="principles-rites-rows" style={{position: 'absolute', left: 40, top: 104, width: 1736, height: 210}}>
          <div style={{display: 'flex', gap: 16, height: '100%'}}>
            <Bronze tone={C.ochre} style={{flex: 1, padding: '14px 20px', display: 'flex', flexDirection: 'column', gap: 10}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <Heart size={32} color={C.ochre} strokeWidth={2.3} />
                <LabelTab bar={C.ochre}>婚姻三原则</LabelTab>
              </div>
              <div style={{fontSize: 22, fontWeight: 900, color: C.ink, lineHeight: 1.6}}>
                <Soft color={C.ochre}>一夫一妻</Soft> ｜ <Soft color={C.ochre}>同姓不婚</Soft> ｜ 父母之命 · 媒妁之言
              </div>
            </Bronze>
            <Bronze tone={C.seal} style={{flex: 1.2, padding: '14px 20px', display: 'flex', flexDirection: 'column', gap: 10}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <ScrollText size={32} color={C.seal} strokeWidth={2.3} />
                <LabelTab bar={C.seal}>六礼程序</LabelTab>
              </div>
              <div style={{fontSize: 21, fontWeight: 900, color: C.ink, lineHeight: 1.6, letterSpacing: 1}}>
                纳采 → 问名 → 纳吉 → <Soft color={C.seal}>纳征（纳币）</Soft> → 请期 → 亲迎
              </div>
            </Bronze>
          </div>
        </Enter>
        <Enter delay={70} from="left" marker="divorce-rows" style={{position: 'absolute', left: 40, top: 340, width: 1736, height: 170}}>
          <div style={{display: 'flex', gap: 16, height: '100%'}}>
            <Bronze tone={C.seal} style={{flex: 1, padding: '14px 20px', display: 'flex', flexDirection: 'column', gap: 9}}>
              <LabelTab bar={C.seal}>七出 · 解除婚姻</LabelTab>
              <div style={{fontSize: 21, fontWeight: 880, color: C.ink, lineHeight: 1.6}}>
                不顺公婆去 · 无子去 · 淫去 · <Soft color={C.seal}>妒去</Soft> · 恶疾去 · <Soft color={C.seal}>多言去</Soft> · 窃盗去
              </div>
            </Bronze>
            <Bronze tone={C.ochre} style={{flex: 1, padding: '14px 20px', display: 'flex', flexDirection: 'column', gap: 9}}>
              <LabelTab bar={C.ochre}>三不去 · 限制解除</LabelTab>
              <div style={{fontSize: 21, fontWeight: 880, color: C.ink, lineHeight: 1.6}}>
                前贫贱后富贵<Soft color={C.ochre}>不去</Soft> · 与更三年丧<Soft color={C.ochre}>不去</Soft> · 有所娶而无所归<Soft color={C.ochre}>不去</Soft>
              </div>
            </Bronze>
          </div>
        </Enter>
        <Enter delay={140} from="up" marker="inheritance-row" style={{position: 'absolute', left: 40, top: 534, width: 1736, height: 120}}>
          <Bronze tone={C.ochre} style={{height: '100%', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 18}}>
            <Crown size={38} color={C.seal} strokeWidth={2.3} />
            <div style={{display: 'flex', flexDirection: 'column', gap: 6, flex: 1}}>
              <LabelTab bar={C.seal}>嫡长子继承制</LabelTab>
              <div style={{fontSize: 22, fontWeight: 900, color: C.ink, lineHeight: 1.45}}>
                「立嫡以<Soft color={C.seal}>长</Soft>不以贤，立子以<Soft color={C.seal}>贵</Soft>不以长」——主要继承<Soft color={C.ochre}>身份</Soft>，其次财产
              </div>
            </div>
          </Bronze>
        </Enter>
      </div>
    </Shell>
  );
};

export const JudicatureScene = () => {
  /* data-final-knowledge="judicature-heading" data-final-knowledge="judge-hierarchy-strip" data-final-knowledge="case-split-strip" data-final-knowledge="listen-ask-strip" */
  return (
    <Shell code="03" kicker="司法制度" title="狱讼两分 · 五听三刺">
      <div
        data-layout="judicature-inscription-plaque"
        data-visual-anchor="boundary"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="judge-hierarchy-strip,case-split-strip,listen-ask-strip"
        data-focal-rule="the-king-judges-with-ministers-listening-and-asking-before-verdicts"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="judicature-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.bronze, border: `3px solid ${C.bronzeEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              周天子最高裁判 · 大小司寇辅佐
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="judge-hierarchy-strip" style={{position: 'absolute', left: 40, top: 104, width: 1736, height: 110}}>
          <Bronze tone={C.ochre} style={{height: '100%', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 16}}>
            <Gavel size={36} color={C.ochre} strokeWidth={2.3} />
            <div style={{fontSize: 23, fontWeight: 900, color: C.ink, lineHeight: 1.5, flex: 1}}>
              裁判体系：<Soft color={C.ochre}>周天子</Soft>为最高裁判者，中央设<Soft color={C.ochre}>大司寇 · 小司寇</Soft>辅佐
            </div>
          </Bronze>
        </Enter>
        <Enter delay={70} from="left" marker="case-split-strip" style={{position: 'absolute', left: 40, top: 238, width: 1736, height: 120}}>
          <Bronze tone={C.seal} style={{height: '100%', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 16}}>
            <SplitSquareHorizontal size={36} color={C.seal} strokeWidth={2.3} />
            <div style={{display: 'flex', gap: 16, flex: 1}}>
              <div style={{flex: 1, border: `2px solid ${C.bronzeEdge}`, backgroundColor: C.bronzeDim, padding: '10px 16px', textAlign: 'center'}}>
                <div style={{fontSize: 26, fontWeight: 950, color: C.ink}}>狱</div>
                <div style={{fontSize: 21, fontWeight: 870, color: C.inkSoft, marginTop: 2}}>刑事案件</div>
              </div>
              <div style={{flex: 1, border: `2px solid ${C.bronzeEdge}`, backgroundColor: C.bronzeDim, padding: '10px 16px', textAlign: 'center'}}>
                <div style={{fontSize: 26, fontWeight: 950, color: C.ink}}>讼</div>
                <div style={{fontSize: 21, fontWeight: 870, color: C.inkSoft, marginTop: 2}}>民事案件</div>
              </div>
            </div>
          </Bronze>
        </Enter>
        <Enter delay={130} from="up" marker="listen-ask-strip" style={{position: 'absolute', left: 40, top: 382, width: 1736, height: 230}}>
          <div style={{display: 'flex', gap: 16, height: '100%'}}>
            <Bronze tone={C.ochre} style={{flex: 1, padding: '16px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
              <LabelTab bar={C.ochre}>五听 · 审理技术</LabelTab>
              <div style={{fontSize: 23, fontWeight: 900, color: C.ink, lineHeight: 1.7, letterSpacing: 2}}>
                辞听 · 色听 · 气听 · 耳听 · 目听
              </div>
              <div style={{fontSize: 20, fontWeight: 850, color: C.inkSoft, lineHeight: 1.5}}>观察当事人表情与反应断案</div>
            </Bronze>
            <Bronze tone={C.seal} style={{flex: 1, padding: '16px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
              <LabelTab bar={C.seal}>三刺 · 疑难重大</LabelTab>
              <div style={{fontSize: 23, fontWeight: 900, color: C.ink, lineHeight: 1.7, letterSpacing: 1}}>
                一刺群臣 · 二刺官吏 · 三刺国人
              </div>
              <div style={{marginTop: 'auto'}}>
                <SealStamp delay={140} size={22}>广泛征求意见</SealStamp>
              </div>
            </Bronze>
          </div>
        </Enter>
        <Enter delay={190} from="up" style={{position: 'absolute', left: 40, top: 636, width: 1736}}>
          <DarkStrip style={{height: 60, opacity: 0}} />
        </Enter>
      </div>
    </Shell>
  );
};

export const ZhouLegalHistory = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-ideology" {...SCENES.ideology}>
      <IdeologyScene />
    </TimelineSequence>
    <TimelineSequence name="02-marriage" {...SCENES.marriage}>
      <MarriageScene />
    </TimelineSequence>
    <TimelineSequence name="03-judicature" {...SCENES.judicature}>
      <JudicatureScene />
    </TimelineSequence>
  </AbsoluteFill>
);