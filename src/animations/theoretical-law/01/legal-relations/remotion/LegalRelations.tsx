import type {CSSProperties, ReactNode} from 'react';
import {
  Anchor,
  ArrowDownUp,
  ArrowLeftRight,
  Gavel,
  Gift,
  Hammer,
  Hand,
  Landmark,
  Lightbulb,
  Link,
  Package,
  ScrollText,
  Users,
  User,
  Zap,
} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  glaze: '#F1F3EC',
  wash: '#E3EAF4',
  washDim: '#D7E0EE',
  crackle: '#C9CFC4',
  cobalt: '#24509E',
  cobaltDeep: '#1A3A78',
  celadon: '#5E8A72',
  ironbrown: '#7A4E26',
  gilt: '#B08D3E',
  body: '#2C3A55',
  paper: '#F6F8F2',
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

const RimTab = ({children}: {readonly children: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.cobalt, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2, borderLeft: `6px solid ${C.gilt}`}}>
    {children}
  </span>
);

const Soft = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}24`, padding: '2px 9px'}}>{children}</span>
);

const GlazeChip = ({accent = C.celadon, children, solid = false}: {readonly accent?: string; readonly children: ReactNode; readonly solid?: boolean}) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '4px 12px',
      border: `2px solid ${accent}`,
      backgroundColor: solid ? accent : `${accent}14`,
      fontSize: 23,
      fontWeight: 870,
      color: solid ? C.paper : C.cobaltDeep,
    }}
  >
    {children}
  </span>
);

const SealMark = ({children, color = C.ironbrown, delay = 0, size = 30}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number; readonly size?: number}) => {
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

const GiltUnderline = ({children, color = C.cobalt, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

const Plate = ({
  accent = C.cobalt,
  children,
  marker,
  style,
}: {
  readonly accent?: string;
  readonly children: ReactNode;
  readonly marker?: string;
  readonly style?: CSSProperties;
}) => (
  <div
    data-final-knowledge={marker}
    style={{
      position: 'absolute',
      backgroundColor: C.wash,
      border: `2px solid ${C.gilt}`,
      ...style,
    }}
  >
    <span style={{position: 'absolute', left: 0, top: 0, width: 12, height: '100%', backgroundColor: accent}} />
    {children}
  </div>
);

const Medallion = ({index}: {readonly index: number}) => (
  <span
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      width: 44,
      height: 44,
      borderRadius: 22,
      backgroundColor: C.cobalt,
      color: C.paper,
      fontSize: 24,
      fontWeight: 950,
    }}
  >
    {String(index).padStart(2, '0')}
  </span>
);

const Shell = ({children, code, kicker, title}: {readonly children: ReactNode; readonly code: string; readonly kicker: string; readonly title: string}) => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{
      backgroundColor: C.glaze,
      color: C.body,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(0deg, transparent 0 95px, #1A3A780D 95px 96px), repeating-linear-gradient(90deg, transparent 0 95px, #1A3A780D 95px 96px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `2px solid ${C.gilt}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.cobalt, borderLeft: `8px solid ${C.gilt}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 12 · {code}</span>
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
        borderBottom: `2px solid ${C.gilt}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.cobaltDeep}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.gilt, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

export const ConceptFeaturesScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="concept-heading" data-final-knowledge="feature-legality" data-final-knowledge="feature-will" data-final-knowledge="feature-reality" data-final-knowledge="legality-note" data-final-knowledge="axis-chip" */
  return (
    <Shell code="概念" kicker="概念 · 特征 · 公私走向" title="法律关系的概念与特征">
      <div
        data-layout="definition-plaque-with-feature-medallions"
        data-visual-anchor="concept-icon"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="definition-claim,three-features,legality-note,axis-chip"
        data-focal-rule="legal-relations-bind-persons-through-rights-and-duties"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="none" style={{position: 'absolute', left: 0, top: 10}}>
          <RimTab>概念特征 · 权利义务</RimTab>
        </Enter>
        <Enter delay={14} from="down" marker="concept-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176, height: 118}}>
          <div style={{backgroundColor: C.wash, border: `3px solid ${C.gilt}`, padding: '14px 26px', height: 118, display: 'flex', alignItems: 'center', gap: 24}}>
            <div>
              <div style={{fontSize: 36, fontWeight: 950, color: C.cobaltDeep, fontFamily: 'var(--inkloom-animation-title)'}}>
                法律关系 = <GiltUnderline delay={40}>人与人的权利义务关系</GiltUnderline>
              </div>
              <div style={{marginTop: 6, fontSize: 24, fontWeight: 860, color: C.body}}>
                法律规范在<Soft color={C.cobalt}>调整社会关系的过程中</Soft>所形成
              </div>
            </div>
            <SealMark delay={48} size={26}>权利义务</SealMark>
          </div>
        </Enter>
        {[
          {marker: 'feature-legality', icon: Gavel, accent: C.cobalt, name: '合法性', note: '根据法律规范建立的社会关系', chip: '依规范建立'},
          {marker: 'feature-will', icon: Landmark, accent: C.celadon, name: '国家意志性', note: '体现意志性的特殊社会关系', chip: '有的兼含当事人意志'},
          {marker: 'feature-reality', icon: Link, accent: C.ironbrown, name: '现实性', note: '特定主体之间的权利和义务关系', chip: '主体特定'},
        ].map((feature, index) => (
          <Enter
            key={feature.marker}
            delay={40 + index * 24}
            from="up"
            marker={feature.marker}
            style={{position: 'absolute', left: 40 + index * 592, top: 142, width: 552, height: 188}}
          >
            <Plate accent={feature.accent} style={{left: 0, top: 0, width: 552, height: 188}}>
              <div style={{padding: '20px 22px 16px 38px', display: 'flex', flexDirection: 'column', gap: 10}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
                  <Medallion index={index + 1} />
                  <feature.icon size={38} color={feature.accent} strokeWidth={2.2} />
                  <span style={{fontSize: 32, fontWeight: 950, color: C.cobaltDeep}}>{feature.name}</span>
                </div>
                <div style={{fontSize: 23, fontWeight: 870, color: C.body, lineHeight: 1.45}}>{feature.note}</div>
                <div><GlazeChip accent={feature.accent}>{feature.chip}</GlazeChip></div>
              </div>
            </Plate>
          </Enter>
        ))}
        <Enter delay={128} marker="legality-note" style={{position: 'absolute', left: 40, top: 356, width: 1736, height: 118}}>
          <div style={{border: `2px solid ${C.gilt}`, backgroundColor: C.washDim, height: 118, display: 'flex', alignItems: 'center', gap: 16, padding: '0 26px'}}>
            <Gavel size={36} color={C.ironbrown} strokeWidth={2.2} />
            <span style={{fontSize: 26, fontWeight: 900, color: C.cobaltDeep}}>
              合法性与违法产生<Soft color={C.ironbrown}>不矛盾</Soft>：违法行为同样可产生合法的法律关系
            </span>
            <GlazeChip accent={C.ironbrown}>犯罪行为 → 刑事法律关系（合法）</GlazeChip>
          </div>
        </Enter>
        <Enter delay={156} from="none" marker="axis-chip" style={{position: 'absolute', left: 40, top: 500, width: 1736, height: 110}}>
          <div style={{backgroundColor: C.wash, border: `2px solid ${C.gilt}`, height: 110, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 22, padding: '0 24px'}}>
            <GlazeChip accent={C.cobalt} solid>公法</GlazeChip>
            <span style={{fontSize: 26, fontWeight: 900, color: C.cobaltDeep}}>一般为 <Soft color={C.cobalt}>纵向（隶属）</Soft></span>
            <span style={{fontSize: 30, fontWeight: 900, color: C.gilt}}>｜</span>
            <GlazeChip accent={C.celadon} solid>私法</GlazeChip>
            <span style={{fontSize: 26, fontWeight: 900, color: C.cobaltDeep}}>一般为 <Soft color={C.celadon}>横向（平权）</Soft></span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const KindPairsScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="kinds-heading" data-final-knowledge="adjust-protect-pair" data-final-knowledge="horizontal-vertical-pair" data-final-knowledge="cardinality-plates" data-final-knowledge="primary-secondary-pair" */
  return (
    <Shell code="种类" kicker="四组分法" title="法律关系的种类">
      <div
        data-layout="paired-doctrine-plates-on-rails"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="adjust-protect-pair,horizontal-vertical-pair,single-double-multi,primary-secondary-pair"
        data-focal-rule="doctrine-kinds-pair-by-conduct-equality-count-and-rank"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="none" style={{position: 'absolute', left: 0, top: 10}}>
          <RimTab>种类 · 四组分法</RimTab>
        </Enter>
        <Enter delay={14} from="down" marker="kinds-heading" style={{position: 'absolute', left: 340, top: 0, width: 1000}}>
          <div style={{backgroundColor: C.wash, border: `3px solid ${C.gilt}`, padding: '10px 26px', textAlign: 'center'}}>
            <span style={{fontSize: 33, fontWeight: 950, color: C.cobaltDeep, fontFamily: 'var(--inkloom-animation-title)'}}>
              按<GiltUnderline delay={40}>行为 · 地位 · 数量 · 作用</GiltUnderline>依次四分
            </span>
          </div>
        </Enter>
        <Enter delay={36} from="left" marker="adjust-protect-pair" style={{position: 'absolute', left: 40, top: 104, width: 1736, height: 130}}>
          <div style={{position: 'absolute', left: 0, top: 0, width: 1736, height: 130, display: 'flex', gap: 18}}>
            <div style={{width: 810, backgroundColor: C.wash, border: `3px solid ${C.celadon}`, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14}}>
              <span style={{fontSize: 31, fontWeight: 950, color: C.celadon}}>调整性法律关系</span>
              <GlazeChip accent={C.celadon}>合法行为产生</GlazeChip>
            </div>
            <div style={{width: 80, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <span style={{fontSize: 26, fontWeight: 950, color: C.ironbrown, textAlign: 'center', lineHeight: 1.3}}>合法<br/>／违法</span>
            </div>
            <div style={{width: 810, backgroundColor: C.wash, border: `3px solid ${C.ironbrown}`, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14}}>
              <GlazeChip accent={C.ironbrown}>违法行为产生</GlazeChip>
              <span style={{fontSize: 31, fontWeight: 950, color: C.ironbrown}}>保护性法律关系</span>
            </div>
          </div>
        </Enter>
        <Enter delay={64} from="left" marker="horizontal-vertical-pair" style={{position: 'absolute', left: 40, top: 246, width: 1736, height: 130}}>
          <div style={{position: 'absolute', left: 0, top: 0, width: 1736, height: 130, display: 'flex', gap: 18}}>
            <div style={{width: 810, backgroundColor: C.wash, border: `3px solid ${C.cobalt}`, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14}}>
              <ArrowLeftRight size={36} color={C.cobalt} strokeWidth={2.2} />
              <div>
                <div style={{fontSize: 31, fontWeight: 950, color: C.cobaltDeep}}>横向（平权）法律关系</div>
                <div style={{fontSize: 22, fontWeight: 860, color: C.body}}>平等主体之间形成 · 如买卖</div>
              </div>
            </div>
            <div style={{width: 80, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <ArrowDownUp size={40} color={C.gilt} strokeWidth={2.2} />
            </div>
            <div style={{width: 810, backgroundColor: C.wash, border: `3px solid ${C.ironbrown}`, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14}}>
              <div style={{textAlign: 'right'}}>
                <div style={{fontSize: 31, fontWeight: 950, color: C.ironbrown}}>纵向（隶属）法律关系</div>
                <div style={{fontSize: 22, fontWeight: 860, color: C.body}}>不平等主体之间形成 · 如管理</div>
              </div>
            </div>
          </div>
        </Enter>
        <Enter delay={92} from="up" marker="cardinality-plates" style={{position: 'absolute', left: 40, top: 388, width: 1736, height: 150}}>
          <div style={{position: 'absolute', left: 0, top: 0, width: 1736, height: 150, display: 'flex', gap: 18}}>
            <div style={{width: 470, backgroundColor: C.wash, border: `3px solid ${C.celadon}`, padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 6}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <Gift size={32} color={C.celadon} strokeWidth={2.2} />
                <span style={{fontSize: 27, fontWeight: 950, color: C.cobaltDeep}}>单向（单务）</span>
              </div>
              <div style={{fontSize: 22, fontWeight: 860, color: C.body}}>权利人只享权利 · 义务人只履义务</div>
              <div><GlazeChip accent={C.celadon}>典型：赠与</GlazeChip></div>
            </div>
            <div style={{width: 470, backgroundColor: C.wash, border: `3px solid ${C.cobalt}`, padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 6}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <ArrowLeftRight size={32} color={C.cobalt} strokeWidth={2.2} />
                <span style={{fontSize: 27, fontWeight: 950, color: C.cobaltDeep}}>双向（双边）</span>
              </div>
              <div style={{fontSize: 22, fontWeight: 860, color: C.body}}>两个密不可分的单向权利义务关系</div>
              <div><GlazeChip accent={C.cobalt}>典型：买卖合同</GlazeChip></div>
            </div>
            <div style={{flex: 1, backgroundColor: C.wash, border: `3px solid ${C.ironbrown}`, padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 6}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <Users size={32} color={C.ironbrown} strokeWidth={2.2} />
                <span style={{fontSize: 27, fontWeight: 950, color: C.cobaltDeep}}>多向（多边）· 复合</span>
              </div>
              <div style={{fontSize: 22, fontWeight: 860, color: C.body, lineHeight: 1.4}}>三个以上关系的复合体：调出单位 ↔ 调入单位 ↔ 被调动者</div>
              <div><GlazeChip accent={C.ironbrown}>典型：人事调动</GlazeChip></div>
            </div>
          </div>
        </Enter>
        <Enter delay={120} from="left" marker="primary-secondary-pair" style={{position: 'absolute', left: 40, top: 550, width: 1736, height: 140}}>
          <div style={{position: 'absolute', left: 0, top: 0, width: 1736, height: 140, display: 'flex', gap: 18}}>
            <div style={{width: 810, backgroundColor: C.wash, border: `3px solid ${C.cobalt}`, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16}}>
              <Anchor size={36} color={C.cobalt} strokeWidth={2.2} />
              <div>
                <div style={{fontSize: 29, fontWeight: 950, color: C.cobaltDeep}}>第一性法律关系（主）</div>
                <div style={{fontSize: 22, fontWeight: 860, color: C.body}}>可独立存在：调整性 · 实体性</div>
              </div>
            </div>
            <div style={{width: 80, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <SealMark delay={150} size={24}>主从</SealMark>
            </div>
            <div style={{width: 810, backgroundColor: C.washDim, border: `3px solid ${C.celadon}`, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16}}>
              <div style={{textAlign: 'right'}}>
                <div style={{fontSize: 29, fontWeight: 950, color: C.celadon}}>第二性法律关系（从）</div>
                <div style={{fontSize: 22, fontWeight: 860, color: C.body}}>以第一性为前提：保护性 · 程序性</div>
              </div>
            </div>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const ObjectDishesScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="objects-heading" data-final-knowledge="dish-thing" data-final-knowledge="dish-person" data-final-knowledge="dish-spirit" data-final-knowledge="dish-conduct" data-final-knowledge="object-note" */
  const objectDishes = [
    {
      marker: 'dish-thing',
      icon: Package,
      accent: C.cobalt,
      name: '物',
      rows: [
        <>成为客体四条件：法律认可 · 认识控制 · 有价值 · <Soft color={C.cobalt}>独立性</Soft></>,
        <>私人不得为客体：海洋水流空气 · 文物 · 军事设施武器 · <Soft color={C.ironbrown}>毒品</Soft></>,
      ],
      chip: '国家专有仍属客体',
    },
    {
      marker: 'dish-person',
      icon: User,
      accent: C.celadon,
      name: '人身',
      rows: [
        <>活人<Soft color={C.celadon}>整体身体</Soft>不得视为“物”</>,
        <>不得滥用 · 自贱人身人格 · 依法行使</>,
        <>分离部分 → 可视为物；<Soft color={C.ironbrown}>植入他人 → 他人人身</Soft></>,
      ],
      chip: '',
    },
    {
      marker: 'dish-spirit',
      icon: Lightbulb,
      accent: C.ironbrown,
      name: '精神产品',
      rows: [
        <>物质载体消灭 · <Soft color={C.ironbrown}>权利不消灭</Soft></>,
        <>例：著作 · 专利 · 图纸</>,
      ],
      chip: '即知识产权',
    },
    {
      marker: 'dish-conduct',
      icon: Hammer,
      accent: C.cobalt,
      name: '行为结果',
      rows: [
        <>物化：凝结于物体（房屋 · 道路 · 桥梁）</>,
        <>非物化：行为过程直至终了 · 达到期望效果</>,
      ],
      chip: '买房是物 · 盖房是物化行为结果',
    },
  ];

  return (
    <Shell code="客体" kicker="四类客体" title="法律关系的客体">
      <div
        data-layout="four-object-dishes-on-rail"
        data-visual-anchor="concept-icon"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="thing-dish,person-dish,spirit-dish,conduct-dish"
        data-focal-rule="objects-carry-the-rights-and-duties-of-relations"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="none" style={{position: 'absolute', left: 0, top: 10}}>
          <RimTab>客体 · 四碟</RimTab>
        </Enter>
        <Enter delay={14} from="down" marker="objects-heading" style={{position: 'absolute', left: 340, top: 0, width: 1220}}>
          <div style={{backgroundColor: C.wash, border: `3px solid ${C.gilt}`, padding: '10px 26px', textAlign: 'center'}}>
            <span style={{fontSize: 33, fontWeight: 950, color: C.cobaltDeep, fontFamily: 'var(--inkloom-animation-title)'}}>
              物 · 人身 · 精神产品 · <GiltUnderline delay={40}>行为结果</GiltUnderline>
            </span>
          </div>
        </Enter>
        {objectDishes.map((dish, index) => (
          <Enter
            key={dish.marker}
            delay={36 + index * 24}
            from="up"
            marker={dish.marker}
            style={{position: 'absolute', left: 40 + index * 454, top: 120, width: 414, height: 340}}
          >
            <Plate accent={dish.accent} style={{left: 0, top: 0, width: 414, height: 340}}>
              <div style={{padding: '18px 18px 14px 32px', display: 'flex', flexDirection: 'column', gap: 12}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                  <dish.icon size={40} color={dish.accent} strokeWidth={2.2} />
                  <span style={{fontSize: 32, fontWeight: 950, color: C.cobaltDeep}}>{dish.name}</span>
                </div>
                {dish.rows.map((row, rowIndex) => (
                  <div key={rowIndex} style={{fontSize: 22, fontWeight: 860, color: C.body, lineHeight: 1.5}}>
                    {row}
                  </div>
                ))}
                {dish.chip ? <div style={{marginTop: 'auto'}}><GlazeChip accent={dish.accent}>{dish.chip}</GlazeChip></div> : null}
              </div>
            </Plate>
          </Enter>
        ))}
        <Enter delay={140} marker="object-note" style={{position: 'absolute', left: 40, top: 486, width: 1736, height: 164}}>
          <div style={{border: `2px solid ${C.gilt}`, backgroundColor: C.washDim, height: 164, padding: '14px 26px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <Hammer size={32} color={C.ironbrown} strokeWidth={2.2} />
              <span style={{fontSize: 25, fontWeight: 900, color: C.cobaltDeep}}>
                <GiltUnderline delay={170} color={C.ironbrown}>物化行为结果 ≠ 物</GiltUnderline>：前者包含行为与物化结果两部分，物只含一部分
              </span>
            </div>
            <div style={{fontSize: 23, fontWeight: 870, color: C.body}}>
              点睛 · 物的公有与私有：水流、矿藏<Soft color={C.cobalt}>私人无法占有</Soft>，但可为国家所有
            </div>
            <div style={{fontSize: 23, fontWeight: 870, color: C.body}}>
              点睛 · 人身行使受限制：既包括对他人的限制，<Soft color={C.celadon}>也包括对权利人自身的限制</Soft>
            </div>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const LifecycleFactsScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="lifecycle-heading" data-final-knowledge="condition-strip" data-final-knowledge="event-gate" data-final-knowledge="act-gate" data-final-knowledge="constitution-note" */
  const branch = interpolate(frame, [96, 148], [0, 1], CLAMP);
  return (
    <Shell code="变动" kicker="产生 · 变更 · 消灭" title="法律关系的产生、变更和消灭">
      <div
        data-layout="conditions-strip-with-fact-fork"
        data-visual-anchor="document-fork"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="two-conditions,event-versus-act,constitution-note"
        data-focal-rule="facts-trigger-change-according-to-the-will-criterion"
        data-focal-channels="icon,contrast,enclosure,motion,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="none" style={{position: 'absolute', left: 0, top: 10}}>
          <RimTab>变动 · 法律事实</RimTab>
        </Enter>
        <Enter delay={14} from="down" marker="lifecycle-heading" style={{position: 'absolute', left: 340, top: 0, width: 1100}}>
          <div style={{backgroundColor: C.wash, border: `3px solid ${C.gilt}`, padding: '10px 26px', textAlign: 'center'}}>
            <span style={{fontSize: 33, fontWeight: 950, color: C.cobaltDeep, fontFamily: 'var(--inkloom-animation-title)'}}>
              两条件：<GiltUnderline delay={40}>法律规范 ＋ 法律事实</GiltUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={36} from="none" marker="condition-strip" style={{position: 'absolute', left: 40, top: 104, width: 1736, height: 96}}>
          <div style={{backgroundColor: C.wash, border: `2px solid ${C.gilt}`, height: 96, display: 'flex', alignItems: 'center', gap: 16, padding: '0 26px'}}>
            <ScrollText size={36} color={C.cobalt} strokeWidth={2.2} />
            <span style={{fontSize: 25, fontWeight: 900, color: C.cobaltDeep}}>
              法律规范（规则 ＋ 原则）＋ 法律事实 = 规范规定的、<Soft color={C.cobalt}>能引起法律关系产生、变更和消灭</Soft>的情况与现象
            </span>
          </div>
        </Enter>
        <Enter delay={64} from="up" style={{position: 'absolute', left: 40, top: 220, width: 1736, height: 344}}>
          <div style={{position: 'absolute', left: 0, top: 0, width: 1736, height: 344}}>
            <div style={{position: 'absolute', left: 718, top: 0, width: 300, height: 64, backgroundColor: C.cobalt, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <span style={{fontSize: 28, fontWeight: 950, color: C.paper, letterSpacing: 4}}>法律事实</span>
            </div>
            <div style={{position: 'absolute', left: 866, top: 64, width: 4, height: 40 * branch, backgroundColor: C.gilt}} />
            <div style={{position: 'absolute', left: 468, top: 104, width: 800, height: 4, backgroundColor: C.gilt, opacity: branch}} />
            <div style={{position: 'absolute', left: 468, top: 104, width: 4, height: 34 * branch, backgroundColor: C.gilt}} />
            <div style={{position: 'absolute', left: 1264, top: 104, width: 4, height: 34 * branch, backgroundColor: C.gilt}} />
            <div style={{position: 'absolute', left: 40, top: 138, width: 810, height: 206, backgroundColor: C.wash, border: `3px solid ${C.ironbrown}`, opacity: prog(frame, 148, 16)}}>
              <div style={{padding: '18px 22px 14px 36px', display: 'flex', flexDirection: 'column', gap: 10}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
                  <Zap size={36} color={C.ironbrown} strokeWidth={2.2} />
                  <span style={{fontSize: 29, fontWeight: 950, color: C.ironbrown}}>法律事件</span>
                  <GlazeChip accent={C.ironbrown} solid>不以当事人意志为转移</GlazeChip>
                </div>
                <div style={{fontSize: 23, fontWeight: 860, color: C.body, lineHeight: 1.5}}>
                  客观事实：自然事件 ／ 社会事件
                </div>
                <div style={{fontSize: 22, fontWeight: 860, color: C.ironbrown}}>
                  战争 · 革命 · 罢工 —— 同样不以当事人意志为转移
                </div>
              </div>
            </div>
            <div style={{position: 'absolute', left: 886, top: 138, width: 810, height: 206, backgroundColor: C.wash, border: `3px solid ${C.cobalt}`, opacity: prog(frame, 162, 16)}}>
              <div style={{padding: '18px 22px 14px 36px', display: 'flex', flexDirection: 'column', gap: 10}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
                  <Hand size={36} color={C.cobalt} strokeWidth={2.2} />
                  <span style={{fontSize: 29, fontWeight: 950, color: C.cobaltDeep}}>法律行为</span>
                  <GlazeChip accent={C.cobalt} solid>以当事人意志为转移</GlazeChip>
                </div>
                <div style={{fontSize: 23, fontWeight: 860, color: C.body, lineHeight: 1.5}}>
                  人的行为：引起关系产生、变更或消灭
                </div>
                <div style={{fontSize: 22, fontWeight: 860, color: C.cobaltDeep}}>
                  典型：签订十万元购车合同 —— 关系因行为而生
                </div>
              </div>
            </div>
          </div>
        </Enter>
        <Enter delay={190} marker="constitution-note" style={{position: 'absolute', left: 40, top: 588, width: 1736, height: 100}}>
          <div style={{border: `2px solid ${C.gilt}`, backgroundColor: C.washDim, height: 100, display: 'flex', alignItems: 'center', gap: 16, padding: '0 26px'}}>
            <span style={{fontSize: 25, fontWeight: 900, color: C.cobaltDeep}}>
              <GiltUnderline delay={220} color={C.ironbrown}>单一事实</GiltUnderline>：一个事实影响一个或两个以上关系（如自然人死亡）
            </span>
            <span style={{fontSize: 28, fontWeight: 900, color: C.gilt}}>｜</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.cobaltDeep}}>
              <GiltUnderline delay={232} color={C.cobalt}>事实构成</GiltUnderline>：两个以上事实共同影响一个关系
            </span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const LegalRelations = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-concept-features" {...SCENES.conceptFeatures}>
      <ConceptFeaturesScene />
    </TimelineSequence>
    <TimelineSequence name="02-kind-pairs" {...SCENES.kindPairs}>
      <KindPairsScene />
    </TimelineSequence>
    <TimelineSequence name="03-object-dishes" {...SCENES.objectDishes}>
      <ObjectDishesScene />
    </TimelineSequence>
    <TimelineSequence name="04-lifecycle-facts" {...SCENES.lifecycleFacts}>
      <LifecycleFactsScene />
    </TimelineSequence>
  </AbsoluteFill>
);
