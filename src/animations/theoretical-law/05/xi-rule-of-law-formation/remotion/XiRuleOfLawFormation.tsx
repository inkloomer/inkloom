import type {CSSProperties, ReactNode} from 'react';
import {BookOpen, Flag, Lightbulb, Scale, Star, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  camp: '#33302E',
  campDeep: '#262422',
  panel: '#F0EBDA',
  panelDim: '#E1DCC7',
  edge: '#6B6459',
  ink: '#282421',
  inkSoft: '#5B5449',
  banner: '#B04834',
  star: '#C0983E',
  thought: '#4E7D74',
  paper: '#F6F1E0',
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
      backgroundColor: C.camp,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `radial-gradient(1100px 460px at 50% -8%, rgba(176, 72, 52, 0.13), transparent 72%), repeating-linear-gradient(0deg, transparent 0 118px, rgba(38, 36, 34, 0.55) 118px 121px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.star}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.campDeep, borderLeft: `8px solid ${C.banner}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 86 · {code}</span>
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
        borderBottom: `2px solid ${C.star}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.star, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone, watermark}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string; readonly watermark?: ReactNode}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.thought}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.thought}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.thought}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.thought}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

const CampTab = ({children, bar = C.banner, icon}: {readonly children: ReactNode; readonly bar?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.campDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

const CampStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(38, 36, 34, 0.94)', border: `2px solid ${C.star}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Mark = ({children, color = C.banner}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

const StarSeal = ({children, tone = C.star, delay = 0}: {readonly children: ReactNode; readonly tone?: string; readonly delay?: number}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span style={{display: 'inline-block', padding: '4px 12px', border: `5px solid ${tone}`, color: tone, backgroundColor: `${tone}12`, fontSize: 22, fontWeight: 950, letterSpacing: 2, opacity: p, rotate: '-2deg'}}>{children}</span>
  );
};

const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.panelDim, borderLeft: `6px solid ${tone}`, padding: '8px 12px'}}>
    <span style={{flexShrink: 0, width: 50, height: 50, borderRadius: 10, backgroundColor: tone, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 0 rgba(0,0,0,0.18)'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.45}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const FormationLogicScene = () => {
  /* data-final-knowledge="formation-logic" */
  const statuses = [
    '马克思主义法治理论中国化时代化的最新成果',
    '习近平新时代中国特色社会主义思想的重要组成部分',
    '新时代推进全面依法治国必须长期坚持的指导思想',
  ] as const;
  const logics = [
    {name: '历史逻辑', tone: C.banner, icon: <Flag size={30} color={C.paper} strokeWidth={2.2} />, body: '对共产党执政规律·社会主义建设规律·人类社会发展规律的认识达到新高度；开辟法治理论和实践的新境界'},
    {name: '理论逻辑', tone: C.star, icon: <BookOpen size={30} color={C.paper} strokeWidth={2.2} />, body: '马克思主义法治理论中国化时代化的新发展新飞跃'},
    {name: '实践逻辑', tone: C.thought, icon: <Lightbulb size={30} color={C.paper} strokeWidth={2.2} />, body: '在推进伟大斗争·伟大工程·伟大事业·伟大梦想的实践中完善形成'},
  ] as const;
  return (
    <Shell code="01" kicker="形成发展 · 三逻辑" title="习近平法治思想的形成发展">
      <div
        data-layout="banner-plus-three-logic"
        data-visual-anchor="main center"
        data-text-treatments="banner-plaque,logic-columns"
        data-visual-grammar="banner-panel,logic-columns"
        data-focal-rule="november-2020-establishment-and-three-logics"
        data-focal-channels="banner-date,three-logics"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="formation-logic" style={{position: 'absolute', left: 0, top: 0, width: 1776}}>
          <Panel tone={C.banner} watermark={<Flag size={190} color={C.banner} strokeWidth={1.6} />} style={{height: 200, padding: '14px 26px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <CampTab bar={C.banner} icon={<Flag size={26} color={C.paper} strokeWidth={2.2} />}>时代背景 · 确立指导地位</CampTab>
            <div style={{fontSize: 24, fontWeight: 900, color: C.ink, lineHeight: 1.55}}>
              <StarSeal tone={C.banner} delay={130}>2020 年 11 月</StarSeal> 中央全面依法治国工作会议确立指导地位 —— 第一次以<Mark color={C.banner}>党中央工作会议形式</Mark>研究部署全面依法治国工作
            </div>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8}}>
              {statuses.map((line, index) => (
                <div key={line} style={{fontSize: 21, fontWeight: 870, color: C.ink, lineHeight: 1.45, backgroundColor: `${C.banner}12`, borderLeft: `5px solid ${C.banner}`, padding: '7px 11px'}}>
                  <span style={{color: C.banner, fontWeight: 950, marginRight: 5}}>{index + 1}.</span>
                  {line}
                </div>
              ))}
            </div>
          </Panel>
        </Enter>
        <div style={{position: 'absolute', left: 0, top: 224, width: 1776, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12}}>
          {logics.map((logic, index) => (
            <Enter key={logic.name} delay={50 + index * 18} from="up" style={{}}>
              <Panel tone={logic.tone} style={{height: 356, padding: '16px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12}}>
                <span style={{width: 84, height: 84, borderRadius: 42, backgroundColor: logic.tone, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `4px solid ${C.star}`}}>{logic.icon}</span>
                <span style={{fontSize: 29, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>{logic.name}</span>
                <div style={{width: 100, height: 3, backgroundColor: logic.tone}} />
                <div style={{fontSize: 22, fontWeight: 870, color: C.ink, lineHeight: 1.6, textAlign: 'center'}}>{logic.body}</div>
              </Panel>
            </Enter>
          ))}
        </div>
      </div>
    </Shell>
  );
};

export const FeaturesSignificanceScene = () => {
  /* data-final-knowledge="features-significance" */
  const features = [
    {name: '原创性', body: '拓展新视野·提出新命题·作出新论断', tone: C.banner},
    {name: '系统性', body: '系统完备·逻辑严密·内在统一', tone: C.star},
    {name: '时代性', body: '回答向哪里走·走什么路·实现什么目标', tone: C.thought},
    {name: '人民性', body: '体现人民利益·反映人民愿望·维护人民权益', tone: C.banner},
    {name: '实践性', body: '以破解法治实践难题为着力点', tone: C.star},
  ] as const;
  const significances = [
    {title: '马克思主义法治理论中国化时代化的最新成果：', body: '坚持马克思主义立场观点方法，植根中华优秀传统法律文化；同长期形成的法治理论既一脉相承又与时俱进'},
    {title: '对党领导法治建设丰富实践和宝贵经验的科学总结：', body: '实现了中国特色社会主义法治理论的历史性飞跃'},
    {title: '在法治轨道上全面建设社会主义现代化国家的根本遵循：', body: '贯穿经济·政治·文化·社会·生态文明建设各个领域；更好发挥法治固根本·稳预期·利长远的保障作用'},
    {title: '引领法治中国建设实现高质量发展的思想旗帜：', body: '认真贯彻「一规划两纲要」；中国特色社会主义法治道路必将越走越宽广'},
  ] as const;
  return (
    <Shell code="02" kicker="鲜明特色 · 重大意义" title="鲜明特色与重大意义">
      <div
        data-layout="five-flags-plus-significance"
        data-visual-anchor="main center"
        data-text-treatments="flag-chips,significance-rows"
        data-visual-grammar="five-flags,significance-rows"
        data-focal-rule="five-features-and-four-significances"
        data-focal-channels="five-flags,four-significances"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{position: 'absolute', left: 0, top: 0, width: 1776, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10}}>
          {features.map((feature, index) => (
            <Enter key={feature.name} delay={6 + index * 12} from="up" marker={index === 0 ? 'features-significance' : undefined} style={{}}>
              <Panel tone={feature.tone} style={{height: 168, padding: '12px 14px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8}}>
                <span style={{width: 60, height: 60, borderRadius: 30, backgroundColor: feature.tone, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `3px solid ${C.star}`}}>
                  <Star size={30} color={C.paper} strokeWidth={2.2} />
                </span>
                <span style={{fontSize: 25, fontWeight: 950, color: C.ink}}>{feature.name}</span>
                <span style={{fontSize: 20, fontWeight: 850, color: C.inkSoft, lineHeight: 1.4, textAlign: 'center'}}>{feature.body}</span>
              </Panel>
            </Enter>
          ))}
        </div>
        <Enter delay={80} from="up" style={{position: 'absolute', left: 0, top: 200, width: 1776}}>
          <Panel tone={C.banner} watermark={<Users size={190} color={C.banner} strokeWidth={1.6} />} style={{height: 352, padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <CampTab bar={C.banner} icon={<Scale size={26} color={C.paper} strokeWidth={2.2} />}>重大意义（四个定位）</CampTab>
            {significances.map((row, index) => (
              <IconChip key={row.title} icon={<Star size={26} color={C.paper} strokeWidth={2.2} />} tone={index % 2 === 0 ? C.banner : C.star} title={row.title}>
                {row.body}
              </IconChip>
            ))}
          </Panel>
        </Enter>
        <Enter delay={150} from="up" style={{position: 'absolute', left: 0, top: 576, width: 1776}}>
          <CampStrip style={{height: 72}}>
            <Star size={40} color={C.star} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.banner, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>口诀</span>
            <span style={{fontSize: 24, fontWeight: 950, color: C.paper}}>
              <Mark color={C.paper}>原系时民实</Mark> —— 原创性·系统性·时代性·人民性·实践性
            </span>
          </CampStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const XiRuleOfLawFormation = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-formation-logic" {...SCENES.formationLogic}>
      <FormationLogicScene />
    </TimelineSequence>
    <TimelineSequence name="02-features-significance" {...SCENES.featuresSignificance}>
      <FeaturesSignificanceScene />
    </TimelineSequence>
  </AbsoluteFill>
);
