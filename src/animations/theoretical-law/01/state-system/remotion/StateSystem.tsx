import type {CSSProperties, ReactNode} from 'react';
import {Ban, Flag, Handshake, Landmark, Megaphone, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  linen: '#DAD2BE',
  linenDeep: '#C9BFA5',
  silk: '#F2EBD6',
  silkDim: '#E5DCC2',
  silkEdge: '#6E6552',
  ink: '#2B2721',
  inkSoft: '#57503F',
  crimson: '#A93B32',
  crimsonPale: '#EFD0C8',
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
      backgroundColor: C.linen,
      color: C.ink,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(90deg, transparent 0 138px, ${C.crimson}0B 138px 139px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.crimson}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.gold}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.inkSoft, borderLeft: `8px solid ${C.crimson}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 30 · {code}</span>
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
        borderBottom: `2px solid ${C.crimson}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.ink}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.crimson, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Silk = ({children, marker, style, tone}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.silk, border: `2px solid ${C.silkEdge}`, color: C.ink, position: 'relative', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gold}} />
    {children}
  </div>
);

const LabelTab = ({children, bar = C.crimson}: {readonly children: ReactNode; readonly bar?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', padding: '5px 14px', backgroundColor: C.inkSoft, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{children}</span>
);

const GoldChip = ({tone = C.gold, children, solid = false}: {readonly tone?: string; readonly children: ReactNode; readonly solid?: boolean}) => (
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
  <div style={{backgroundColor: 'rgba(87, 80, 63, 0.92)', border: `2px solid ${C.crimson}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

export const StateDefinitionScene = () => {
  /* data-final-knowledge="state-heading" data-final-knowledge="definition-banner" data-final-knowledge="essence-banner" data-final-knowledge="feature-pair" */
  return (
    <Shell code="01" kicker="国体定义" title="人民民主专政的社会主义国家">
      <div
        data-layout="central-banner-with-feature-pair"
        data-visual-anchor="concept-icon"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="state-definition-banner,essence-banner,feature-pair"
        data-focal-rule="peoples-democratic-dictatorship-unites-democracy-and-dictatorship"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="state-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.silk, border: `3px solid ${C.silkEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              国体＝国家的<InkUnderline delay={36}>阶级本质</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="up" marker="definition-banner" style={{position: 'absolute', left: 40, top: 104, width: 1736, height: 170}}>
          <Silk tone={C.crimson} style={{height: '100%', padding: '18px 26px', display: 'flex', alignItems: 'center', gap: 20}}>
            <Users size={52} color={C.crimson} strokeWidth={2.2} />
            <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
              <LabelTab>宪法表述</LabelTab>
              <span style={{fontSize: 25, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
                我国是<Soft color={C.crimson}>工人阶级领导的</Soft>、以<Soft color={C.crimson}>工农联盟为基础的</Soft>人民民主专政的社会主义国家
              </span>
            </div>
          </Silk>
        </Enter>
        <Enter delay={60} from="left" marker="essence-banner" style={{position: 'absolute', left: 40, top: 298, width: 1736, height: 140}}>
          <Silk tone={C.gold} style={{height: '100%', padding: '16px 26px', display: 'flex', alignItems: 'center', gap: 18}}>
            <Landmark size={40} color={C.gold} strokeWidth={2.3} />
            <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
              <LabelTab bar={C.gold}>人民民主专政的本质</LabelTab>
              <span style={{fontSize: 24, fontWeight: 900, color: C.ink}}>
                对人民的<Soft color={C.gold}>民主</Soft> ＋ 对少数敌对分子的<Soft color={C.crimson}>专政</Soft> 的有机统一
              </span>
            </div>
          </Silk>
        </Enter>
        <Enter delay={110} from="up" marker="feature-pair" style={{position: 'absolute', left: 40, top: 462, width: 1736, height: 150}}>
          <Silk tone={C.inkSoft} style={{height: '100%', padding: '16px 26px', display: 'flex', alignItems: 'center', gap: 20}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: 10, flex: 1}}>
              <LabelTab bar={C.inkSoft}>两大特色</LabelTab>
              <div style={{display: 'flex', gap: 12, flexWrap: 'wrap'}}>
                <GoldChip tone={C.crimson} solid>中共领导的多党合作和政治协商制度</GoldChip>
                <GoldChip tone={C.gold} solid>爱国统一战线</GoldChip>
              </div>
            </div>
            <span style={{marginLeft: 'auto'}}>
              <Stamp delay={140} size={24}>国体答「阶级本质」</Stamp>
            </span>
          </Silk>
        </Enter>
        <Enter delay={180} from="up" style={{position: 'absolute', left: 40, top: 644, width: 1736}}>
          <DarkStrip style={{height: 64}}>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>
              对照：政体（人民代表大会制度）答「政权组织形式」
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const MultipartyScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="multiparty-heading" data-final-knowledge="cooperation-table" data-final-knowledge="leadership-boundary-note" */
  return (
    <Shell code="02" kicker="多党合作" title="执政党与参政党">
      <div
        data-layout="cooperation-table-with-flag-pair"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="ruling-party-flag,participating-party-flag,leadership-boundary-note"
        data-focal-rule="the-party-leads-politically-while-parties-keep-independence"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="multiparty-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.silk, border: `3px solid ${C.silkEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              中共领导的多党合作和政治协商制度——<InkUnderline delay={36}>1993 入宪</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="cooperation-table" style={{position: 'absolute', left: 40, top: 104, width: 1736, height: 330}}>
          <div style={{position: 'absolute', left: 0, top: 0, width: 1736, height: 330}}>
            <Silk tone={C.crimson} style={{position: 'absolute', left: 0, top: 20, width: 640, height: 240, padding: '18px 24px', display: 'flex', flexDirection: 'column', gap: 12}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <Flag size={38} color={C.crimson} strokeWidth={2.3} />
                <span style={{fontSize: 28, fontWeight: 950, color: C.ink}}>共产党</span>
                <GoldChip tone={C.crimson} solid>执政党</GoldChip>
              </div>
              <div style={{fontSize: 22, fontWeight: 870, color: C.ink, lineHeight: 1.5}}>
                政治基础：<Soft color={C.crimson}>坚持共产党的领导</Soft> · 坚持<Soft color={C.crimson}>四项基本原则</Soft>
              </div>
            </Silk>
            <span style={{position: 'absolute', left: 700, top: 130, width: 300, height: 6, backgroundColor: C.gold, scaleX: prog(frame, 90, 22), transformOrigin: 'left center'}} />
            <span style={{position: 'absolute', left: 780, top: 84, opacity: prog(frame, 100, 16)}}>
              <GoldChip tone={C.gold} solid>
                长期共存 · 互相监督 · 肝胆相照 · 荣辱与共
              </GoldChip>
            </span>
            <Silk tone={C.gold} style={{position: 'absolute', left: 1096, top: 20, width: 640, height: 240, padding: '18px 24px', display: 'flex', flexDirection: 'column', gap: 12}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <Handshake size={38} color={C.gold} strokeWidth={2.3} />
                <span style={{fontSize: 28, fontWeight: 950, color: C.ink}}>民主党派</span>
                <GoldChip tone={C.gold} solid>参政党</GoldChip>
              </div>
              <div style={{fontSize: 22, fontWeight: 870, color: C.ink, lineHeight: 1.5}}>
                享有宪法范围内的<Soft color={C.gold}>政治自由 · 组织独立 · 法律地位平等</Soft>
              </div>
            </Silk>
          </div>
        </Enter>
        <Enter delay={120} from="up" marker="leadership-boundary-note" style={{position: 'absolute', left: 40, top: 470, width: 1736, height: 150}}>
          <Silk tone={C.inkSoft} style={{height: '100%', padding: '16px 26px', display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'center'}}>
            <LabelTab bar={C.inkSoft}>党对民主党派的领导——边界</LabelTab>
            <div style={{fontSize: 23, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
              仅限<Soft color={C.gold}>政治原则 · 政治方向 · 重大方针政策</Soft>的领导——<span style={{color: C.crimson, fontWeight: 950}}>不包括组织领导和人事领导</span>
            </div>
          </Silk>
        </Enter>
      </div>
    </Shell>
  );
};

export const FrontCppccScene = () => {
  /* data-final-knowledge="front-heading" data-final-knowledge="member-banner-row" data-final-knowledge="task-strip" data-final-knowledge="cppcc-verdict-strip" */
  return (
    <Shell code="03" kicker="统一战线与政协" title="四面旗帜，一座桥">
      <div
        data-layout="member-banner-row-with-verdict-strips"
        data-visual-anchor="boundary"
        data-text-treatments="label-block,chip,external-negation,stamp"
        data-visual-grammar="member-banner-row,task-strip,cppcc-verdict-strip"
        data-focal-rule="the-cppcc-is-a-consultative-body-without-state-power"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="front-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.silk, border: `3px solid ${C.silkEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              爱国统一战线：<InkUnderline delay={36}>党领导 · 工农联盟为基础</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="member-banner-row" style={{position: 'absolute', left: 40, top: 104, width: 1736, height: 150}}>
          <div style={{display: 'flex', gap: 14, height: '100%'}}>
            {[
              {name: '全体社会主义劳动者', year: ''},
              {name: '社会主义事业建设者', year: '04 增加'},
              {name: '拥护社会主义的爱国者', year: ''},
              {name: '拥护祖国统一·致力复兴的爱国者', year: '18 增加'},
            ].map((member) => (
              <div key={member.name} style={{flex: 1, border: `2px solid ${C.silkEdge}`, backgroundColor: C.silkDim, padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 8}}>
                <span style={{fontSize: 21, fontWeight: 850, color: C.gold, letterSpacing: 2}}>成员</span>
                <span style={{fontSize: 22, fontWeight: 900, color: C.ink, lineHeight: 1.4}}>{member.name}</span>
                {member.year ? <span style={{marginTop: 'auto'}}><GoldChip tone={C.crimson} solid>{member.year}</GoldChip></span> : null}
              </div>
            ))}
          </div>
        </Enter>
        <Enter delay={90} from="up" marker="task-strip" style={{position: 'absolute', left: 40, top: 278, width: 1736, height: 110}}>
          <Silk tone={C.gold} style={{height: '100%', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 16}}>
            <LabelTab bar={C.gold}>三大任务</LabelTab>
            <div style={{display: 'flex', gap: 12, flex: 1, flexWrap: 'wrap'}}>
              <GoldChip tone={C.gold} solid>社会主义现代化建设</GoldChip>
              <GoldChip tone={C.gold} solid>祖国统一</GoldChip>
              <GoldChip tone={C.gold} solid>维护世界和平</GoldChip>
            </div>
            <span style={{fontSize: 22, fontWeight: 900, color: C.inkSoft}}>基本组织形式＝政协</span>
          </Silk>
        </Enter>
        <Enter delay={140} from="up" marker="cppcc-verdict-strip" style={{position: 'absolute', left: 40, top: 412, width: 1736, height: 210}}>
          <Silk tone={C.crimson} style={{height: '100%', padding: '16px 26px 18px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <Megaphone size={36} color={C.crimson} strokeWidth={2.3} />
              <LabelTab>政协的性质与功能 · 高频考点</LabelTab>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', fontSize: 23, fontWeight: 900, color: C.ink}}>
              <span style={{display: 'inline-flex', alignItems: 'center', gap: 6}}>
                <Ban size={28} color={C.crimson} strokeWidth={2.4} /> 不是国家机关
              </span>
              <span style={{color: C.inkSoft}}>｜</span>
              有政治影响力但<span style={{color: C.crimson, fontWeight: 950}}>没有公权力</span>
              <span style={{color: C.inkSoft}}>｜</span>
              委员产生＝推荐＋协商
            </div>
            <div style={{fontSize: 23, fontWeight: 900, color: C.ink}}>
              功能：<Soft color={C.crimson}>政治协商 · 民主监督 · 参政议政</Soft>
            </div>
          </Silk>
        </Enter>
      </div>
    </Shell>
  );
};

export const StateSystem = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-state-definition" {...SCENES.stateDefinition}>
      <StateDefinitionScene />
    </TimelineSequence>
    <TimelineSequence name="02-multiparty" {...SCENES.multiparty}>
      <MultipartyScene />
    </TimelineSequence>
    <TimelineSequence name="03-front-cppcc" {...SCENES.frontCppcc}>
      <FrontCppccScene />
    </TimelineSequence>
  </AbsoluteFill>
);
