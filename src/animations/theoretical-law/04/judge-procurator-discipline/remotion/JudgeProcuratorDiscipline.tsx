import type {CSSProperties, ReactNode} from 'react';
import {Ban, FileCheck, Gavel, Landmark, Scale, ScrollText, Shield, UserCheck, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  discipline: '#35312C',
  disciplineDeep: '#292521',
  panel: '#F1ECDA',
  panelDim: '#E2DDC7',
  edge: '#6C6459',
  ink: '#292420',
  inkSoft: '#5B5449',
  ruler: '#C0983E',
  punish: '#B04834',
  remedyTeal: '#4E7D74',
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
      backgroundColor: C.discipline,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `radial-gradient(1100px 460px at 50% -8%, rgba(192, 152, 62, 0.12), transparent 72%), repeating-linear-gradient(0deg, transparent 0 114px, rgba(41, 37, 33, 0.55) 114px 117px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.ruler}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.disciplineDeep, borderLeft: `8px solid ${C.punish}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 70 · {code}</span>
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
        borderBottom: `2px solid ${C.ruler}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.ruler, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone, watermark}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string; readonly watermark?: ReactNode}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.remedyTeal}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.remedyTeal}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.remedyTeal}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.remedyTeal}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

const RulerTab = ({children, bar = C.punish, icon}: {readonly children: ReactNode; readonly bar?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.disciplineDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

const RulerStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(41, 37, 33, 0.94)', border: `2px solid ${C.ruler}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Mark = ({children, color = C.punish}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

const RulerSeal = ({children, tone = C.ruler, delay = 0}: {readonly children: ReactNode; readonly tone?: string; readonly delay?: number}) => {
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

export const SetupMembersScene = () => {
  /* data-final-knowledge="setup-members" */
  const members = ['人大代表', '政协委员', '法学专家', '律师的代表', '法官·检察官代表'];
  return (
    <Shell code="01" kicker="设置 · 组成" title="惩戒委员会的设置与组成">
      <div
        data-layout="twin-register-panels"
        data-visual-anchor="main center"
        data-text-treatments="register-rows,ratio-seals"
        data-visual-grammar="setup-panel,members-panel"
        data-focal-rule="supreme-and-provincial-courts-procuratorates-50-percent"
        data-focal-channels="office-placement,fifty-percent"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="setup-members" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 464}}>
          <Panel tone={C.ruler} watermark={<Landmark size={190} color={C.ruler} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 11}}>
            <RulerTab bar={C.ruler} icon={<Landmark size={26} color={C.paper} strokeWidth={2.2} />}>设置</RulerTab>
            <IconChip icon={<Landmark size={28} color={C.paper} strokeWidth={2.2} />} tone={C.ruler} title="层级：">
              <Mark color={C.ruler}>最高</Mark>和<Mark color={C.ruler}>省（自治区·直辖市）</Mark>一级法检设立法官·检察官惩戒委员会
            </IconChip>
            <IconChip icon={<FileCheck size={28} color={C.paper} strokeWidth={2.2} />} tone={C.remedyTeal} title="惩戒工作办公室：">
              省级法官惩戒工作办公室设在<Mark color={C.remedyTeal}>高级人民法院</Mark>；省级检察官惩戒工作办公室设在<Mark color={C.remedyTeal}>省级人民检察院</Mark>
            </IconChip>
            <IconChip icon={<UserCheck size={28} color={C.paper} strokeWidth={2.2} />} tone={C.punish} title="主任产生：">
              全体委员从实践经验丰富·德高望重的资深法律界人士中<Mark color={C.punish}>推选</Mark>，经省级党委<Mark color={C.punish}>把关</Mark>后产生
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={30} from="right" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 464}}>
          <Panel tone={C.punish} watermark={<Users size={190} color={C.punish} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <RulerTab bar={C.punish} icon={<Users size={26} color={C.paper} strokeWidth={2.2} />}>组成</RulerTab>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
              由政治素质高·专业能力强·职业操守好的人员组成：
            </div>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8}}>
              {members.map((line) => (
                <div key={line} style={{fontSize: 21, fontWeight: 900, color: C.ink, backgroundColor: C.panelDim, borderLeft: `5px solid ${C.punish}`, padding: '8px 10px', textAlign: 'center'}}>{line}</div>
              ))}
            </div>
            <IconChip icon={<Users size={28} color={C.paper} strokeWidth={2.2} />} tone={C.punish} title="比例：">
              法官·检察官代表应<RulerSeal tone={C.punish} delay={150}>不低于全体委员的 50%</RulerSeal>，从辖区内不同层级法院·检察院选任
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const DutiesSourceScene = () => {
  /* data-final-knowledge="duties-source" */
  const duties = ['制定和修订惩戒委员会章程', '根据法检调查的情况，依照程序审查认定法官·检察官是否违反审判·检察职责，提出构成故意违反职责·存在重大过失·存在一般过失或者没有违反职责的意见', '受理法官·检察官对审查意见的异议申请，作出决定', '审议决定法官·检察官惩戒工作的其他相关事项'];
  return (
    <Shell code="02" kicker="职责 · 案件来源" title="惩戒委员会的职责与案件来源">
      <div
        data-layout="duties-plus-source"
        data-visual-anchor="main center"
        data-text-treatments="duty-rows,transfer-seals"
        data-visual-grammar="duties-panel,source-panel"
        data-focal-rule="no-direct-complaints-internal-transfer-only"
        data-focal-channels="no-direct-complaints,internal-transfer"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="duties-source" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 508}}>
          <Panel tone={C.ruler} watermark={<ScrollText size={190} color={C.ruler} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <RulerTab bar={C.ruler} icon={<ScrollText size={26} color={C.paper} strokeWidth={2.2} />}>工作职责（四项）</RulerTab>
            {duties.map((line, index) => (
              <div key={line} style={{fontSize: 21, fontWeight: 860, color: C.ink, lineHeight: 1.45, backgroundColor: C.panelDim, borderLeft: `5px solid ${C.ruler}`, padding: '7px 11px'}}>
                <span style={{color: C.ruler, fontWeight: 950, marginRight: 6}}>{index + 1}.</span>
                {line}
              </div>
            ))}
          </Panel>
        </Enter>
        <Enter delay={30} from="right" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 508}}>
          <Panel tone={C.punish} watermark={<Ban size={190} color={C.punish} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <RulerTab bar={C.punish} icon={<Ban size={26} color={C.paper} strokeWidth={2.2} />}>不直接受理举报·投诉</RulerTab>
            <div style={{fontSize: 23, fontWeight: 900, color: C.ink, lineHeight: 1.6, backgroundColor: `${C.punish}12`, borderLeft: `6px solid ${C.punish}`, padding: '10px 14px'}}>
              惩戒委员会<Mark color={C.punish}>不直接受理</Mark>对法官·检察官的举报·投诉；收到材料的，根据受理权限<Mark color={C.punish}>转交有关部门</Mark>按规定处理
            </div>
            <RulerTab bar={C.remedyTeal} icon={<FileCheck size={26} color={C.paper} strokeWidth={2.2} />}>案件来源（内部移送）</RulerTab>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.6}}>
              法院·检察院在司法管理·诉讼监督和司法监督工作中，发现法官·检察官<Mark color={C.remedyTeal}>涉嫌违反审判·检察职责</Mark>，需要认定是否构成故意或者重大过失的，应当在<Mark color={C.remedyTeal}>查明事实的基础上提请</Mark>惩戒委员会审议
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const DecideRemedyScene = () => {
  /* data-final-knowledge="decide-remedy" */
  const punishments = ['停职·延期晋升·免职·责令辞职·辞退：按干部管理权限和程序依法办理', '纪律处分：依照有关规定和程序办理', '涉嫌犯罪：违法线索移送有关司法机关处理', '免除法官·检察官职务：按法定程序提请人大常委会决定'];
  return (
    <Shell code="03" kicker="审议 · 决定 · 救济" title="审议·表决·惩戒决定与救济">
      <div
        data-layout="verdict-remedy-rows"
        data-visual-anchor="main center"
        data-text-treatments="verdict-rows,ratio-seals"
        data-visual-grammar="hearing-panel,punish-panel,remedy-strip"
        data-focal-rule="committee-opines-courts-decide-two-thirds-passage"
        data-focal-channels="two-thirds-passage,remedy-row"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="decide-remedy" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 420}}>
          <Panel tone={C.ruler} watermark={<Scale size={190} color={C.ruler} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <RulerTab bar={C.ruler} icon={<Scale size={26} color={C.paper} strokeWidth={2.2} />}>审议与表决</RulerTab>
            <IconChip icon={<Scale size={28} color={C.paper} strokeWidth={2.2} />} tone={C.ruler} title="审议：">
              法检应提供当事法官·检察官涉嫌违反审判·检察职责的<Mark color={C.ruler}>事实和证据</Mark>并<Mark color={C.ruler}>举证</Mark>；当事法官·检察官有权<Mark color={C.remedyTeal}>陈述·举证·辩解</Mark>
            </IconChip>
            <IconChip icon={<Gavel size={28} color={C.paper} strokeWidth={2.2} />} tone={C.punish} title="表决：">
              经全体委员<RulerSeal tone={C.punish} delay={150}>2/3 以上多数</RulerSeal>通过，对构成故意违反职责·存在重大过失·存在一般过失或没有违反职责提出<Mark color={C.punish}>审查意见</Mark>
            </IconChip>
            <IconChip icon={<ScrollText size={28} color={C.paper} strokeWidth={2.2} />} tone={C.remedyTeal} title="异议：">
              当事法官·检察官或法检对审查意见有异议的，可向惩戒委员会提出；委员会审查后<Mark color={C.remedyTeal}>作出决定并回复</Mark>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={30} from="right" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 420}}>
          <Panel tone={C.punish} watermark={<Gavel size={190} color={C.punish} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <RulerTab bar={C.punish} icon={<Gavel size={26} color={C.paper} strokeWidth={2.2} />}>惩戒决定（由法院·检察院作出）</RulerTab>
            <div style={{fontSize: 21, fontWeight: 860, color: C.ink, lineHeight: 1.4}}>行为属实且构成故意或因重大过失导致案件错误并造成严重后果的，法检依规作出惩戒决定并给予处理：</div>
            {punishments.map((line, index) => (
              <div key={line} style={{fontSize: 21, fontWeight: 860, color: C.ink, lineHeight: 1.42, backgroundColor: `${C.punish}12`, borderLeft: `5px solid ${C.punish}`, padding: '6px 11px'}}>
                <span style={{color: C.punish, fontWeight: 950, marginRight: 6}}>{index + 1}.</span>
                {line}
              </div>
            ))}
          </Panel>
        </Enter>
        <Enter delay={120} from="up" style={{position: 'absolute', left: 0, top: 444, width: 1776}}>
          <RulerStrip style={{height: 156}}>
            <Shield size={44} color={C.remedyTeal} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.punish, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>点睛</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper, lineHeight: 1.65}}>
              惩戒委员会只提出<Mark color={C.paper}>审查意见</Mark>，惩戒<Mark color={C.paper}>决定权在法检</Mark>；不服惩戒决定可申请<Mark color={C.paper}>复核</Mark>，并有权向<Mark color={C.paper}>上一级</Mark>申诉
              <br />
              口诀：一上一下自己人 —— 遴选<Mark color={C.paper}>1/3</Mark>，惩戒最少<Mark color={C.paper}>一半（50%）</Mark>，通过<Mark color={C.paper}>2/3</Mark>
            </span>
          </RulerStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const JudgeProcuratorDiscipline = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-setup-members" {...SCENES.setupMembers}>
      <SetupMembersScene />
    </TimelineSequence>
    <TimelineSequence name="02-duties-source" {...SCENES.dutiesSource}>
      <DutiesSourceScene />
    </TimelineSequence>
    <TimelineSequence name="03-decide-remedy" {...SCENES.decideRemedy}>
      <DecideRemedyScene />
    </TimelineSequence>
  </AbsoluteFill>
);
