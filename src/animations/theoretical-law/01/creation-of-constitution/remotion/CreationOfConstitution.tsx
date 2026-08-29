import type {CSSProperties, ReactNode} from 'react';
import {Gavel, Landmark, Link, Lock, Megaphone, PenTool, Users, Vote} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  bronze: '#3E5F55',
  bronzeDeep: '#31493F',
  plate: '#E8DFC4',
  plateDim: '#D8CFAF',
  plateEdge: '#5F5A46',
  ink: '#2B2721',
  inkSoft: '#55503E',
  brass: '#A9822F',
  brassPale: '#E5D3A4',
  oxide: '#4E7A5A',
  oxidePale: '#D2E0D2',
  rust: '#A05538',
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
      backgroundColor: C.bronze,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(0deg, transparent 0 134px, ${C.brass}12 134px 136px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.brass}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.brassPale}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.bronzeDeep, borderLeft: `8px solid ${C.brass}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 25 · {code}</span>
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

const Copper = ({children, marker, style, tone}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.plate, border: `2px solid ${C.plateEdge}`, color: C.ink, position: 'relative', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.brass}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.brass}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.brass}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.brass}} />
    {children}
  </div>
);

const LabelTab = ({children, bar = C.brass}: {readonly children: ReactNode; readonly bar?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', padding: '5px 14px', backgroundColor: C.bronzeDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{children}</span>
);

const ChiselChip = ({tone = C.oxide, children, solid = false}: {readonly tone?: string; readonly children: ReactNode; readonly solid?: boolean}) => (
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

const Stamp = ({children, delay = 0, size = 26, tone = C.rust}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

const InkUnderline = ({children, color = C.rust, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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
  <div style={{backgroundColor: 'rgba(49, 73, 63, 0.92)', border: `2px solid ${C.brass}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

export const FourSubjectsScene = () => {
  /* data-final-knowledge="subjects-heading" data-final-knowledge="subject-row" data-final-knowledge="year-stamps" */
  const subjects = [
    {name: '制宪主体', who: '人民', year: '西耶士系统阐述', tone: C.rust, note: '人民主权原则'},
    {name: '修宪主体', who: '全国人民代表大会', year: '54 宪法', tone: C.brass, note: ''},
    {name: '释宪主体', who: '全国人大常委会', year: '78 宪法', tone: C.oxide, note: ''},
    {name: '监督宪法实施', who: '全国人大及其常委会', year: '82 宪法增加常委会', tone: C.brass, note: ''},
  ] as const;
  return (
    <Shell code="01" kicker="四主体对照" title="制宪·修宪·释宪·监督">
      <div
        data-layout="engraved-plate-subject-row"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="constituent-power-plate,amendment-interpretation-plates,supervision-plate"
        data-focal-rule="the-people-hold-constituent-power-organs-exercise-later-powers"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="subjects-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.plate, border: `3px solid ${C.plateEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              四块铜版，四种<InkUnderline delay={36}>主体</InkUnderline>
            </span>
          </div>
        </Enter>
        <div data-final-knowledge="subject-row" style={{position: 'absolute', left: 0, top: 0, width: '100%', height: '100%'}}>
          {subjects.map((subject, index) => (
            <Enter key={subject.name} delay={28 + index * 22} from="up" style={{position: 'absolute', left: 40 + index * 442, top: 104, width: 410, height: 330}}>
              <Copper tone={subject.tone} style={{height: '100%', padding: '18px 20px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  {index === 0 ? <Users size={38} color={subject.tone} strokeWidth={2.3} /> : index === 1 || index === 3 ? <Landmark size={38} color={subject.tone} strokeWidth={2.3} /> : <Gavel size={38} color={subject.tone} strokeWidth={2.3} />}
                  <span style={{fontSize: 20, fontWeight: 950, color: C.brass, letterSpacing: 3}}>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div style={{fontSize: 26, fontWeight: 950, color: C.ink}}>{subject.name}</div>
                <div style={{fontSize: 25, fontWeight: 950, color: C.ink, lineHeight: 1.4}}>{subject.who}</div>
                {subject.note ? <div style={{fontSize: 21, fontWeight: 850, color: C.inkSoft}}>{subject.note}</div> : null}
                <div data-final-knowledge="year-stamps" style={{marginTop: 'auto'}}>
                  <ChiselChip tone={subject.tone} solid>
                    {subject.year}
                  </ChiselChip>
                </div>
              </Copper>
            </Enter>
          ))}
        </div>
        <Enter delay={180} from="up" style={{position: 'absolute', left: 40, top: 470, width: 1736}}>
          <DarkStrip style={{height: 100}}>
            <span style={{padding: '4px 13px', backgroundColor: C.brass, color: C.bronzeDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>年份线</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              54 修宪归人大 · 78 释宪归人常 · 82 监督<Soft color={C.brassPale}>增加人常</Soft>——权力逐年细化
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const CreationProcedureScene = () => {
  /* data-final-knowledge="procedure-heading" data-final-knowledge="creation-line" data-final-knowledge="enumeration-example" */
  const steps = [
    {name: '设立制宪机关', text: <>起草机关（宪法起草委员会 · 美国制宪会议）＋通过机关（54宪法＝一届人大一次会议）</>, icon: Landmark},
    {name: '提出宪法草案', text: <>广泛代表性·科学性 · 遵循指导思想和原则 · <Soft color={C.rust}>54宪法采用全民讨论</Soft></>, icon: PenTool},
    {name: '通过宪法草案', text: <>通过机关<Soft color={C.rust}>绝对多数</Soft> 或 全民公决</>, icon: Vote},
    {name: '公布宪法', text: <>由国家元首或代表机关公布——54宪法以<Soft color={C.rust}>全国人大公告</Soft>形式公布</>, icon: Megaphone},
  ] as const;
  return (
    <Shell code="02" kicker="制宪程序" title="制宪四步，一步步铸">
      <div
        data-layout="four-step-engraving-line"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="drafting-body-step,draft-proposal-step,passage-promulgation-steps"
        data-focal-rule="the-people-delegate-drafting-then-adopt-and-promulgate"
        data-focal-channels="icon,connector,contrast,motion,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="procedure-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.plate, border: `3px solid ${C.plateEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              人民不直接动手——<InkUnderline delay={36}>制宪机关</InkUnderline>四步走
            </span>
          </div>
        </Enter>
        {steps.map((step, index) => (
          <Enter key={step.name} delay={28 + index * 26} from="left" style={{position: 'absolute', left: 40, top: 104 + index * 116, width: 1736, height: 102}}>
            <Copper tone={index % 2 === 0 ? C.brass : C.oxide} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '0 22px'}}>
              <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, backgroundColor: C.brass, color: C.paper, fontSize: 24, fontWeight: 950, flexShrink: 0}}>{String(index + 1).padStart(2, '0')}</span>
              {index === 0 ? <Landmark size={36} color={C.brass} strokeWidth={2.3} /> : index === 1 ? <PenTool size={36} color={C.oxide} strokeWidth={2.3} /> : index === 2 ? <Vote size={36} color={C.brass} strokeWidth={2.3} /> : <Megaphone size={36} color={C.oxide} strokeWidth={2.3} />}
              <span style={{fontSize: 26, fontWeight: 950, color: C.ink, width: 320}}>{step.name}</span>
              <span style={{width: 2, height: 54, backgroundColor: C.plateEdge}} />
              <span style={{fontSize: 22, fontWeight: 880, color: C.ink, flex: 1, lineHeight: 1.45}}>{step.text}</span>
            </Copper>
          </Enter>
        ))}
        <Enter delay={180} from="up" marker="enumeration-example" style={{position: 'absolute', left: 40, top: 586, width: 1736}}>
          <DarkStrip style={{height: 88}}>
            <span style={{padding: '4px 13px', backgroundColor: C.brass, color: C.bronzeDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>易错</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>
              通过方式：<Soft color={C.brassPale}>绝对多数或全民公决</Soft>——全民公决不是唯一路径
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const DelegationPowerScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="delegation-heading" data-final-knowledge="commission-pair" data-final-knowledge="power-boundary-plate" */
  return (
    <Shell code="03" kicker="委托与权界" title="制宪权归属，修宪权受限">
      <div
        data-layout="commission-pair-with-power-boundary"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="people-commission-link,no-own-power-note,power-boundary-plate"
        data-focal-rule="constituent-power-belongs-to-the-people-and-knows-no-bound"
        data-focal-channels="icon,contrast,enclosure,connector,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="delegation-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.plate, border: `3px solid ${C.plateEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              制宪权在<InkUnderline delay={36}>人民</InkUnderline>——机关只是受托人
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="commission-pair" style={{position: 'absolute', left: 40, top: 104, width: 1020, height: 280}}>
          <div style={{position: 'absolute', left: 0, top: 0, width: 1020, height: 280}}>
            <Copper tone={C.rust} style={{position: 'absolute', left: 0, top: 40, width: 360, height: 200, padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 10}}>
              <Users size={40} color={C.rust} strokeWidth={2.3} />
              <span style={{fontSize: 30, fontWeight: 950, color: C.ink}}>人民</span>
              <span style={{fontSize: 22, fontWeight: 880, color: C.inkSoft}}>制宪权主体 · 最早由西耶士阐述（《第三等级是什么?》）</span>
            </Copper>
            <span style={{position: 'absolute', left: 366, top: 132, width: 130, height: 6, backgroundColor: C.brass, scaleX: prog(frame, 140, 20), transformOrigin: 'left center'}} />
            <span style={{position: 'absolute', left: 388, top: 96, opacity: prog(frame, 150, 16)}}>
              <ChiselChip tone={C.brass} solid>
                委托关系
              </ChiselChip>
            </span>
            <Copper tone={C.brass} style={{position: 'absolute', left: 504, top: 40, width: 400, height: 200, padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 10}}>
              <Landmark size={40} color={C.brass} strokeWidth={2.3} />
              <span style={{fontSize: 30, fontWeight: 950, color: C.ink}}>制宪机关</span>
              <span style={{fontSize: 22, fontWeight: 880, color: C.inkSoft, lineHeight: 1.5}}>临时组织 · 本身<Soft color={C.rust}>无制宪权力</Soft>——按人民意愿、为人民利益负责制宪</span>
            </Copper>
          </div>
        </Enter>
        <Enter delay={70} from="right" marker="power-boundary-plate" style={{position: 'absolute', left: 1100, top: 104, width: 716, height: 280}}>
          <Copper tone={C.oxide} style={{height: '100%', padding: '18px 24px 20px', display: 'flex', flexDirection: 'column', gap: 14}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Lock size={38} color={C.oxide} strokeWidth={2.3} />
              <LabelTab bar={C.oxide}>权界对照</LabelTab>
            </div>
            <div style={{fontSize: 24, fontWeight: 950, color: C.ink, lineHeight: 1.55}}>
              制宪权：理论上<Soft color={C.rust}>不受任何限制</Soft>
            </div>
            <div style={{fontSize: 24, fontWeight: 950, color: C.ink, lineHeight: 1.55}}>
              修宪权：行使要<Soft color={C.oxide}>受到宪法约束</Soft>
            </div>
          </Copper>
        </Enter>
        <Enter delay={180} from="up" style={{position: 'absolute', left: 40, top: 424, width: 1736}}>
          <DarkStrip style={{height: 110}}>
            <Link size={34} color={C.brassPale} strokeWidth={2.2} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper, lineHeight: 1.5}}>
              受托人没有自己的权——<Soft color={C.brassPale}>权源永远在人民</Soft>；制宪权无界，修宪权有界
            </span>
            <span style={{marginLeft: 'auto'}}>
              <Stamp delay={200} size={24}>委托 · 非授权终局</Stamp>
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const CreationOfConstitution = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-four-subjects" {...SCENES.fourSubjects}>
      <FourSubjectsScene />
    </TimelineSequence>
    <TimelineSequence name="02-creation-procedure" {...SCENES.creationProcedure}>
      <CreationProcedureScene />
    </TimelineSequence>
    <TimelineSequence name="03-delegation-power" {...SCENES.delegationPower}>
      <DelegationPowerScene />
    </TimelineSequence>
  </AbsoluteFill>
);
