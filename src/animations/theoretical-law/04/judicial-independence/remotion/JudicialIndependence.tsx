import type {CSSProperties, ReactNode} from 'react';
import {Ban, FileSignature, Gavel, ScrollText, Shield, UserCheck} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  slate: '#363B3E',
  slateDeep: '#282D30',
  panel: '#F0EBDA',
  panelDim: '#E1DCC7',
  edge: '#666E70',
  ink: '#252A2D',
  inkSoft: '#565F62',
  steleBronze: '#C0913E',
  rebuffRed: '#B0432C',
  guardPine: '#567960',
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
      backgroundColor: C.slate,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `radial-gradient(1100px 460px at 50% -8%, rgba(192, 145, 62, 0.12), transparent 72%), repeating-linear-gradient(0deg, transparent 0 120px, rgba(40, 45, 48, 0.55) 120px 123px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.steleBronze}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.slateDeep, borderLeft: `8px solid ${C.rebuffRed}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 60 · {code}</span>
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
        borderBottom: `2px solid ${C.steleBronze}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.steleBronze, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone, watermark}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string; readonly watermark?: ReactNode}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.steleBronze}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.steleBronze}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.steleBronze}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.steleBronze}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

const SteleTab = ({children, bar = C.rebuffRed, icon}: {readonly children: ReactNode; readonly bar?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.slateDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

const SteleStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(40, 45, 48, 0.94)', border: `2px solid ${C.steleBronze}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Mark = ({children, color = C.rebuffRed}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

const BronzeSeal = ({children, tone = C.steleBronze, delay = 0}: {readonly children: ReactNode; readonly tone?: string; readonly delay?: number}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span style={{display: 'inline-block', padding: '5px 13px', border: `5px solid ${tone}`, color: tone, backgroundColor: `${tone}12`, fontSize: 22, fontWeight: 950, letterSpacing: 2, opacity: p, rotate: '-2deg'}}>{children}</span>
  );
};

const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.panelDim, borderLeft: `6px solid ${tone}`, padding: '7px 12px'}}>
    <span style={{flexShrink: 0, width: 50, height: 50, borderRadius: 10, backgroundColor: tone, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 0 rgba(0,0,0,0.18)'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.45}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const ThreeStelesScene = () => {
  /* data-final-knowledge="three-mechanisms" */
  const steles = [
    {
      name: '干预司法 · 记录通报追责',
      tone: C.rebuffRed,
      icon: <ScrollText size={32} color={C.paper} strokeWidth={2.2} />,
      body: (
        <>
          十八届四中全会《决定》：建立领导干部<Mark color={C.rebuffRed}>干预司法活动·插手具体案件处理</Mark>的记录·通报和责任追究制度
          <br />
          2015 年中央政法委《司法机关内部人员过问案件规定》：<Mark color={C.rebuffRed}>不得违反规定过问干预</Mark>他人办理案件·<Mark color={C.rebuffRed}>不得转递涉案材料或打探案情</Mark>·<Mark color={C.rebuffRed}>不得说情打招呼</Mark>；干预说情打探的，办案人员<Mark color={C.guardPine}>应当拒绝</Mark>
        </>
      ),
    },
    {
      name: '维护司法权威',
      tone: C.steleBronze,
      icon: <Gavel size={32} color={C.paper} strokeWidth={2.2} />,
      body: (
        <>
          健全行政机关<Mark color={C.steleBronze}>依法出庭应诉</Mark>·支持法院受理行政案件·<Mark color={C.steleBronze}>尊重并执行法院生效裁判</Mark>的制度
          <br />
          完善惩戒<Mark color={C.rebuffRed}>妨碍司法机关依法行使职权·拒不执行生效裁判和决定·藐视法庭权威</Mark>等违法犯罪行为的法律规定
        </>
      ),
    },
    {
      name: '履职保护机制',
      tone: C.guardPine,
      icon: <Shield size={32} color={C.paper} strokeWidth={2.2} />,
      body: (
        <>
          建立健全司法人员履行法定职责保护机制
          <br />
          <Mark color={C.guardPine}>非因法定事由，非经法定程序</Mark>，不得将法官·检察官<Mark color={C.guardPine}>调离·辞退或者作出免职·降级等处分</Mark>
        </>
      ),
    },
  ] as const;
  return (
    <Shell code="01" kicker="三个制度机制" title="三个制度机制">
      <div
        data-layout="three-stele-row"
        data-visual-anchor="main center"
        data-text-treatments="stele-plaques,engraved-clauses"
        data-visual-grammar="intervention-stele,authority-stele,protection-stele"
        data-focal-rule="record-report-accountability-for-interference"
        data-focal-channels="stele-headings,engraved-clauses"
        style={{position: 'absolute', inset: 0}}
      >
        {steles.map((stele, index) => (
          <Enter key={stele.name} delay={6 + index * 20} from="up" marker={index === 0 ? 'three-mechanisms' : undefined} style={{position: 'absolute', left: 20 + index * 592, top: 0, width: 568}}>
            <Panel tone={stele.tone} style={{height: 424, padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <span style={{flexShrink: 0, width: 58, height: 58, borderRadius: 12, backgroundColor: stele.tone, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `3px solid ${C.steleBronze}`, boxShadow: '0 3px 0 rgba(0,0,0,0.22)'}}>{stele.icon}</span>
                <span style={{fontSize: 25, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>{['第一', '第二', '第三'][index]}</span>
              </div>
              <div style={{fontSize: 24, fontWeight: 950, color: stele.tone}}>{stele.name}</div>
              <div style={{fontSize: 22, fontWeight: 870, color: C.ink, lineHeight: 1.6}}>{stele.body}</div>
            </Panel>
          </Enter>
        ))}
        <Enter delay={120} from="up" style={{position: 'absolute', left: 0, top: 460, width: 1776}}>
          <SteleStrip style={{height: 140}}>
            <ScrollText size={42} color={C.steleBronze} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.rebuffRed, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>点睛</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper, lineHeight: 1.55}}>
              领导干部<Mark color={C.paper}>非因正常履职</Mark>的打探·过问·说情·转递材料，均属<Mark color={C.paper}>不当干预</Mark> —— 办案人员<Mark color={C.paper}>有权拒绝</Mark>
            </span>
          </SteleStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const RebuffDutyScene = () => {
  /* data-final-knowledge="rebuff-versus-duty" */
  const acts = ['打探案情', '过问案件', '说情打招呼', '转递涉案材料'];
  return (
    <Shell code="02" kicker="不当干预 VS 正常履职" title="不当干预与正常履职">
      <div
        data-layout="twin-column-rebuff"
        data-visual-anchor="main center"
        data-text-treatments="rebuff-seals,duty-chips"
        data-visual-grammar="improper-column,proper-column"
        data-focal-rule="refuse-improper-intervention-duties-in-writing"
        data-focal-channels="four-improper-acts,written-principle"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="rebuff-versus-duty" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 400}}>
          <Panel tone={C.rebuffRed} watermark={<Ban size={180} color={C.rebuffRed} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <SteleTab bar={C.rebuffRed} icon={<Ban size={26} color={C.paper} strokeWidth={2.2} />}>不当干预 → 办案人员有权拒绝</SteleTab>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10}}>
              {acts.map((act, index) => (
                <div key={act} style={{backgroundColor: `${C.rebuffRed}14`, border: `2px solid ${C.rebuffRed}`, padding: '10px 14px', fontSize: 23, fontWeight: 950, color: C.ink, display: 'flex', alignItems: 'center', gap: 10}}>
                  <Ban size={26} color={C.rebuffRed} strokeWidth={2.2} />
                  {['壹', '贰', '叁', '肆'][index]} · {act}
                </div>
              ))}
            </div>
            <div style={{fontSize: 22, fontWeight: 880, color: C.inkSoft, lineHeight: 1.5}}>
              不依正当程序转递材料或提出其他要求的，告知其<Mark color={C.rebuffRed}>依照程序办理</Mark>
            </div>
          </Panel>
        </Enter>
        <Enter delay={30} from="right" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 400}}>
          <Panel tone={C.guardPine} watermark={<FileSignature size={180} color={C.guardPine} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <SteleTab bar={C.guardPine} icon={<UserCheck size={26} color={C.paper} strokeWidth={2.2} />}>正常履职意见</SteleTab>
            <IconChip icon={<FileSignature size={28} color={C.paper} strokeWidth={2.2} />} tone={C.guardPine} title="书面原则：">
              领导干部和上级司法机关因履行领导·监督职责需对在办案件提指导性意见的，<Mark color={C.guardPine}>应当依照程序以书面形式提出</Mark>
            </IconChip>
            <IconChip icon={<ScrollText size={28} color={C.paper} strokeWidth={2.2} />} tone={C.steleBronze} title="口头记录：">
              口头提出的，由办案人员<Mark color={C.steleBronze}>记录在案</Mark>
            </IconChip>
            <IconChip icon={<UserCheck size={28} color={C.paper} strokeWidth={2.2} />} tone={C.guardPine} title="其他机关：">
              因履行法定职责需要了解在办案件情况的，应当<Mark color={C.guardPine}>依照法律程序或工作程序</Mark>进行
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={110} from="up" style={{position: 'absolute', left: 0, top: 436, width: 1776}}>
          <SteleStrip style={{height: 160}}>
            <Ban size={42} color={C.rebuffRed} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.rebuffRed, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>一句记</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper, lineHeight: 1.6}}>
              非正常履职的过问 → <BronzeSeal tone={C.rebuffRed} delay={170}>拒绝</BronzeSeal>；正常履职的意见 → <BronzeSeal tone={C.guardPine} delay={182}>书面</BronzeSeal>，口头<BronzeSeal tone={C.steleBronze} delay={194}>记录在案</BronzeSeal>
              <br />
              三碑连记：干预要追责 · 权威要维护 · 履职要保护
            </span>
          </SteleStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const JudicialIndependence = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-three-steles" {...SCENES.threeSteles}>
      <ThreeStelesScene />
    </TimelineSequence>
    <TimelineSequence name="02-rebuff-duty" {...SCENES.rebuffDuty}>
      <RebuffDutyScene />
    </TimelineSequence>
  </AbsoluteFill>
);
