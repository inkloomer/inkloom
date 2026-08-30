import type {CSSProperties, ReactNode} from 'react';
import {Ban, Building2, FileCheck, Hourglass, IdCard, Landmark} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  notary: '#2F3340',
  notaryDeep: '#242835',
  panel: '#F0EBDA',
  panelDim: '#E1DCC7',
  edge: '#5F6A7A',
  ink: '#232736',
  inkSoft: '#525D6E',
  notarySeal: '#7C5AA6',
  audit: '#4E7D74',
  remove: '#B04834',
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
      backgroundColor: C.notary,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `radial-gradient(1100px 460px at 50% -8%, rgba(124, 90, 166, 0.13), transparent 72%), repeating-linear-gradient(0deg, transparent 0 114px, rgba(36, 40, 53, 0.55) 114px 117px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.notarySeal}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.notaryDeep, borderLeft: `8px solid ${C.remove}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 79 · {code}</span>
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
        borderBottom: `2px solid ${C.notarySeal}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.notarySeal, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone, watermark}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string; readonly watermark?: ReactNode}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.audit}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.audit}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.audit}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.audit}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

const NotaryTab = ({children, bar = C.remove, icon}: {readonly children: ReactNode; readonly bar?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.notaryDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

const NotaryStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(36, 40, 53, 0.94)', border: `2px solid ${C.notarySeal}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Mark = ({children, color = C.remove}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

const SealStampN = ({children, tone = C.notarySeal, delay = 0}: {readonly children: ReactNode; readonly tone?: string; readonly delay?: number}) => {
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

export const ConditionsScene = () => {
  /* data-final-knowledge="notary-conditions" */
  const conditions = [
    {title: '国籍：', body: '具有中华人民共和国国籍', tone: C.audit, icon: <IdCard size={28} color={C.paper} strokeWidth={2.2} />},
    {title: '年龄：', body: '25 周岁以上 65 周岁以下（双重限制）', tone: C.notarySeal, icon: <Hourglass size={28} color={C.paper} strokeWidth={2.2} />},
    {title: '品行：', body: '公道正派，遵纪守法，品行良好', tone: C.audit, icon: <IdCard size={28} color={C.paper} strokeWidth={2.2} />},
    {title: '资格：', body: '通过国家统一法律职业资格考试取得法律职业资格', tone: C.notarySeal, icon: <FileCheck size={28} color={C.paper} strokeWidth={2.2} />},
    {title: '实习：', body: '在公证机构实习 2 年以上，或具有 3 年以上其他法律职业经历并在公证机构实习 1 年以上，经考核合格', tone: C.audit, icon: <Hourglass size={28} color={C.paper} strokeWidth={2.2} />},
  ] as const;
  const bans = ['无民事行为能力或者限制民事行为能力', '因故意犯罪或者职务过失犯罪受过刑事处罚', '被开除公职', '被吊销公证员·律师执业证书'];
  const removals = ['丧失国籍', '年满 65 周岁或健康原因不能继续履行职务', '辞职', '吊销公证员执业证书'];
  return (
    <Shell code="01" kicker="条件 · 任职禁止 · 免职" title="公证员的条件与免职">
      <div
        data-layout="conditions-plus-bans"
        data-visual-anchor="main center"
        data-text-treatments="condition-rows,ban-seals"
        data-visual-grammar="conditions-panel,bans-panel,removals-panel"
        data-focal-rule="age-double-limit-and-duty-negligence-extra-ban"
        data-focal-channels="age-range,duty-negligence-ban"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="notary-conditions" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 600}}>
          <Panel tone={C.audit} watermark={<IdCard size={190} color={C.audit} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <NotaryTab bar={C.audit} icon={<IdCard size={26} color={C.paper} strokeWidth={2.2} />}>公证员的条件（五条）</NotaryTab>
            {conditions.map((row) => (
              <IconChip key={row.title} icon={row.icon} tone={row.tone} title={row.title}>
                {row.body}
              </IconChip>
            ))}
          </Panel>
        </Enter>
        <Enter delay={30} from="right" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 600}}>
          <Panel tone={C.remove} watermark={<Ban size={190} color={C.remove} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <NotaryTab bar={C.remove} icon={<Ban size={26} color={C.paper} strokeWidth={2.2} />}>不得担任公证员（四情形）</NotaryTab>
            {bans.map((line, index) => (
              <div key={line} style={{fontSize: 22, fontWeight: 870, color: C.ink, lineHeight: 1.5, backgroundColor: `${C.remove}12`, borderLeft: `6px solid ${C.remove}`, padding: '9px 12px'}}>
                <span style={{color: C.remove, fontWeight: 950, marginRight: 6}}>{index + 1}.</span>
                {line}
                {index === 1 ? <span style={{marginLeft: 8}}><Mark color={C.notarySeal}>比律师多一层「职务过失犯罪」</Mark></span> : null}
              </div>
            ))}
            <NotaryTab bar={C.notarySeal} icon={<Hourglass size={26} color={C.paper} strokeWidth={2.2} />}>免职（四情形）</NotaryTab>
            {removals.map((line, index) => (
              <div key={line} style={{fontSize: 21, fontWeight: 860, color: C.ink, lineHeight: 1.4, backgroundColor: C.panelDim, borderLeft: `5px solid ${C.notarySeal}`, padding: '6px 10px'}}>
                <span style={{color: C.notarySeal, fontWeight: 950, marginRight: 5}}>{index + 1}.</span>
                {line}
              </div>
            ))}
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const ProcedureScene = () => {
  /* data-final-knowledge="notary-procedure" */
  const steps = [
    {name: '推荐', tone: C.audit, icon: <Building2 size={34} color={C.paper} strokeWidth={2.2} />, body: '经公证机构推荐'},
    {name: '审核', tone: C.notarySeal, icon: <FileCheck size={34} color={C.paper} strokeWidth={2.2} />, body: '由所在地的司法行政部门报省级司法行政部门审核'},
    {name: '任命', tone: C.remove, icon: <Landmark size={34} color={C.paper} strokeWidth={2.2} />, body: '报请国务院司法行政部门任命'},
    {name: '颁证', tone: C.audit, icon: <FileCheck size={34} color={C.paper} strokeWidth={2.2} />, body: '由省级司法行政部门颁发公证员执业证书'},
  ] as const;
  return (
    <Shell code="02" kicker="申请程序" title="公证员的申请程序">
      <div
        data-layout="seal-relay-chain"
        data-visual-anchor="main center"
        data-text-treatments="relay-chips,chain-arrows"
        data-visual-grammar="relay-steps"
        data-focal-rule="recommend-review-appoint-issue-relay"
        data-focal-channels="four-relay-steps,closing-strip"
        style={{position: 'absolute', inset: 0}}
      >
        {steps.map((step, index) => (
          <Enter key={step.name} delay={6 + index * 18} from="up" marker={index === 0 ? 'notary-procedure' : undefined} style={{position: 'absolute', left: 20 + index * 448, top: 80, width: 424}}>
            <Panel tone={step.tone} style={{height: 372, padding: '18px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12}}>
              <span style={{width: 84, height: 84, borderRadius: 42, backgroundColor: step.tone, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `4px solid ${C.notarySeal}`}}>{step.icon}</span>
              <span style={{fontSize: 30, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>{['壹', '贰', '叁', '肆'][index]} · {step.name}</span>
              <div style={{width: 90, height: 3, backgroundColor: step.tone}} />
              <div style={{fontSize: 22, fontWeight: 870, color: C.ink, lineHeight: 1.55, textAlign: 'center'}}>{step.body}</div>
            </Panel>
          </Enter>
        ))}
        <Enter delay={120} from="up" style={{position: 'absolute', left: 138, top: 496, width: 1500}}>
          <NotaryStrip style={{height: 148}}>
            <Landmark size={44} color={C.notarySeal} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.remove, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>点睛</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper, lineHeight: 1.7}}>
              任职禁止区别：公证员比律师增加<Mark color={C.paper}>职务过失犯罪</Mark>的禁止条件
              <br />
              年龄双重限制：<SealStampN tone={C.notarySeal} delay={180}>25 周岁以上</SealStampN> <SealStampN tone={C.remove} delay={192}>65 周岁以下</SealStampN>
            </span>
          </NotaryStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const NotaryQualifications = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-conditions" {...SCENES.conditions}>
      <ConditionsScene />
    </TimelineSequence>
    <TimelineSequence name="02-procedure" {...SCENES.procedure}>
      <ProcedureScene />
    </TimelineSequence>
  </AbsoluteFill>
);
