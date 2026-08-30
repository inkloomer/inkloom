import type {CSSProperties, ReactNode} from 'react';
import {Ban, FileCheck, Flag, GraduationCap, IdCard, Landmark, UserX} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  counsel: '#2F3A33',
  counselDeep: '#242D27',
  panel: '#F0EBDA',
  panelDim: '#E1DCC7',
  edge: '#5E7064',
  ink: '#222E27',
  inkSoft: '#51625A',
  ribbon: '#5E8A7C',
  qualifyGold: '#C0983E',
  restrict: '#B04834',
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
      backgroundColor: C.counsel,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `radial-gradient(1100px 460px at 50% -8%, rgba(192, 152, 62, 0.12), transparent 72%), repeating-linear-gradient(0deg, transparent 0 106px, rgba(36, 45, 39, 0.55) 106px 109px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.qualifyGold}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.counselDeep, borderLeft: `8px solid ${C.restrict}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 71 · {code}</span>
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
        borderBottom: `2px solid ${C.qualifyGold}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.qualifyGold, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone, watermark}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string; readonly watermark?: ReactNode}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.ribbon}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.ribbon}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.ribbon}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.ribbon}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

const CounselTab = ({children, bar = C.restrict, icon}: {readonly children: ReactNode; readonly bar?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.counselDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

const CounselStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(36, 45, 39, 0.94)', border: `2px solid ${C.qualifyGold}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Mark = ({children, color = C.restrict}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

const GoldSeal = ({children, tone = C.qualifyGold, delay = 0}: {readonly children: ReactNode; readonly tone?: string; readonly delay?: number}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span style={{display: 'inline-block', padding: '5px 13px', border: `5px solid ${tone}`, color: tone, backgroundColor: `${tone}12`, fontSize: 22, fontWeight: 950, letterSpacing: 2, opacity: p, rotate: '-2deg'}}>{children}</span>
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

export const ConceptQualificationScene = () => {
  /* data-final-knowledge="concept-qualification" */
  const quals = [
    {name: '国籍条件', icon: <IdCard size={28} color={C.paper} strokeWidth={2.2} />, tone: C.ribbon, body: '必须是中国公民；外国人和无国籍人目前尚不能在我国取得律师资格'},
    {name: '政治条件', icon: <Flag size={28} color={C.paper} strokeWidth={2.2} />, tone: C.restrict, body: '必须拥护中华人民共和国宪法，享有选举权和被选举权'},
    {name: '业务条件', icon: <GraduationCap size={28} color={C.paper} strokeWidth={2.2} />, tone: C.qualifyGold, body: '必须经过国家统一法律职业资格考试'},
    {name: '特许条件', icon: <Landmark size={28} color={C.paper} strokeWidth={2.2} />, tone: C.ribbon, body: '本科以上学历＋法律服务人员紧缺领域专业工作满 15 年＋高级职称或同等专业水平并具有相应专业法律知识，申请专职律师执业，经国务院司法行政部门考核合格，准予执业'},
  ] as const;
  return (
    <Shell code="01" kicker="概念 · 资格 · 管理体制" title="律师的概念与执业资格">
      <div
        data-layout="concept-plus-qualification"
        data-visual-anchor="main center"
        data-text-treatments="concept-plaque,qualification-rows"
        data-visual-grammar="concept-plaque,qualification-rows,dual-track"
        data-focal-rule="four-qualification-conditions-and-dual-management"
        data-focal-channels="concept-plaque,qualification-rows"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="concept-qualification" style={{position: 'absolute', left: 138, top: 0, width: 1500}}>
          <Panel tone={C.ribbon} watermark={<IdCard size={170} color={C.ribbon} strokeWidth={1.6} />} style={{height: 148, padding: '14px 26px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10}}>
            <CounselTab bar={C.ribbon} icon={<IdCard size={26} color={C.paper} strokeWidth={2.2} />}>律师的概念</CounselTab>
            <div style={{fontSize: 25, fontWeight: 950, color: C.ink, lineHeight: 1.55, textAlign: 'center'}}>
              依法取得<Mark color={C.ribbon}>律师执业证书</Mark>，接受<Mark color={C.qualifyGold}>委托或者指定</Mark>，为当事人提供法律服务的<Mark color={C.restrict}>执业人员</Mark>
            </div>
          </Panel>
        </Enter>
        <div style={{position: 'absolute', left: 0, top: 172, width: 1776, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10}}>
          {quals.map((q, index) => (
            <Enter key={q.name} delay={24 + index * 12} from="up" style={{}}>
              <div style={{backgroundColor: C.panelDim, borderLeft: `6px solid ${q.tone}`, padding: '10px 14px', display: 'flex', alignItems: 'flex-start', gap: 12, minHeight: 96}}>
                <span style={{flexShrink: 0, width: 48, height: 48, borderRadius: 10, backgroundColor: q.tone, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{q.icon}</span>
                <span style={{fontSize: 22, fontWeight: 870, color: C.ink, lineHeight: 1.45}}>
                  <span style={{fontWeight: 950, color: q.tone}}>{q.name}：</span>
                  {q.body}
                </span>
              </div>
            </Enter>
          ))}
        </div>
        <Enter delay={90} from="up" style={{position: 'absolute', left: 0, top: 428, width: 1776}}>
          <Panel tone={C.qualifyGold} watermark={<Landmark size={170} color={C.qualifyGold} strokeWidth={1.6} />} style={{height: 168, padding: '12px 22px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <CounselTab bar={C.qualifyGold} icon={<Landmark size={26} color={C.paper} strokeWidth={2.2} />}>律师的管理体制 · 双轨</CounselTab>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10}}>
              <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.5, backgroundColor: `${C.ribbon}16`, borderLeft: `5px solid ${C.ribbon}`, padding: '8px 12px'}}>
                <Mark color={C.ribbon}>行政管理</Mark>：司法行政机关共四级 —— 司法部 → 司法厅（局）→ 司法局（处）→ 司法局
              </div>
              <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.5, backgroundColor: `${C.qualifyGold}16`, borderLeft: `5px solid ${C.qualifyGold}`, padding: '8px 12px'}}>
                <Mark color={C.qualifyGold}>行业管理</Mark>：律协是社会团体法人·自律性组织；全国设中华全国律师协会，省级设地方律协，设区的市根据需要可以设立；律师·律所应当加入所在地的地方律协
              </div>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const LicenseScene = () => {
  /* data-final-knowledge="license-columns" */
  const positive = ['拥护中华人民共和国宪法', '通过国家统一法律职业资格考试取得法律职业资格证', '在律师事务所实习满 1 年', '品行良好'];
  const negative = ['无民事行为能力或者限制民事行为能力', '受过刑事处罚（过失犯罪的除外）', '被开除公职或者被吊销律师·公证员执业证书'];
  const limits = ['只能在一个律师事务所执业', '公务员不得兼任执业律师；担任人大常委会组成人员的，任职期间不得从事诉讼代理或辩护业务', '曾担任法官·检察官的律师，离任后 2 年内不得担任诉讼代理人或辩护人'];
  return (
    <Shell code="02" kicker="申请领取律师执业证书" title="申请领取律师执业证书">
      <div
        data-layout="license-three-columns"
        data-visual-anchor="main center"
        data-text-treatments="license-columns,number-seals"
        data-visual-grammar="positive-column,negative-column,limit-column"
        data-focal-rule="positive-negative-and-limiting-conditions"
        data-focal-channels="three-columns,negligent-crime-note"
        style={{position: 'absolute', inset: 0}}
      >
        {[
          {name: '肯定条件', tone: C.ribbon, icon: <FileCheck size={28} color={C.paper} strokeWidth={2.2} />, rows: positive},
          {name: '否定性条件', tone: C.restrict, icon: <Ban size={28} color={C.paper} strokeWidth={2.2} />, rows: negative},
          {name: '限制条件', tone: C.qualifyGold, icon: <UserX size={28} color={C.paper} strokeWidth={2.2} />, rows: limits},
        ].map((column, index) => (
          <Enter key={column.name} delay={6 + index * 20} from="up" marker={index === 0 ? 'license-columns' : undefined} style={{position: 'absolute', left: 20 + index * 592, top: 0, width: 568}}>
            <Panel tone={column.tone} style={{height: 344, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 8}}>
              <CounselTab bar={column.tone} icon={column.icon}>{column.name}</CounselTab>
              {column.rows.map((row) => (
                <div key={row} style={{fontSize: 21, fontWeight: 860, color: C.ink, lineHeight: 1.45, backgroundColor: C.panelDim, borderLeft: `5px solid ${column.tone}`, padding: '7px 11px'}}>{row}</div>
              ))}
            </Panel>
          </Enter>
        ))}
        <Enter delay={110} from="up" style={{position: 'absolute', left: 0, top: 368, width: 1776}}>
          <CounselStrip style={{height: 184}}>
            <FileCheck size={44} color={C.qualifyGold} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.restrict, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>点睛</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper, lineHeight: 1.7}}>
              律协设立：全国和省一级<Mark color={C.paper}>必须</Mark>设立，地级市<Mark color={C.paper}>可以</Mark>设立；律师和律所<Mark color={C.paper}>必须加入</Mark>律协方可开展业务
              <br />
              过失犯罪的区别：因过失犯罪受过刑事处罚<Mark color={C.paper}>不可担任</Mark>法官·检察官，但<Mark color={C.paper}>可以担任律师</Mark>（过失犯罪可当）
              <br />
              兼任人大常委会：法官·检察官<Mark color={C.paper}>不得兼任</Mark>；律师可以兼任，任职期间<Mark color={C.paper}>不得从事诉讼业务</Mark>
            </span>
          </CounselStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const LawyerSystem = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-concept-qualification" {...SCENES.conceptQualification}>
      <ConceptQualificationScene />
    </TimelineSequence>
    <TimelineSequence name="02-license" {...SCENES.license}>
      <LicenseScene />
    </TimelineSequence>
  </AbsoluteFill>
);
