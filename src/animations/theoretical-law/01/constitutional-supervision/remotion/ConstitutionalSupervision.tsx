import type {CSSProperties, ReactNode} from 'react';
import {Ban, Building2, FileSignature, Gavel, Globe, Handshake, Landmark, Scale, ScrollText, SearchCheck, UserCheck} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  bronze: '#4A4238',
  bronzeDeep: '#35302A',
  panel: '#F1EAD5',
  panelDim: '#E2DAC1',
  edge: '#6E6552',
  ink: '#2A251E',
  inkSoft: '#5C5344',
  gilded: '#C49A3A',
  verdigris: '#5E8577',
  sealRed: '#AE4530',
  paper: '#F6F0DE',
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
      backgroundImage: `radial-gradient(1100px 460px at 50% -8%, rgba(196, 154, 58, 0.14), transparent 72%), repeating-linear-gradient(0deg, transparent 0 104px, rgba(53, 48, 42, 0.55) 104px 107px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.gilded}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.bronzeDeep, borderLeft: `8px solid ${C.sealRed}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 46 · {code}</span>
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
        borderBottom: `2px solid ${C.gilded}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.gilded, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone, watermark}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string; readonly watermark?: ReactNode}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gilded}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gilded}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gilded}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.gilded}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

const DingTab = ({children, bar = C.sealRed, icon}: {readonly children: ReactNode; readonly bar?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.bronzeDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

const DingStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(53, 48, 42, 0.94)', border: `2px solid ${C.gilded}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Mark = ({children, color = C.sealRed}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

const BronzeSeal = ({children, tone = C.sealRed, delay = 0}: {readonly children: ReactNode; readonly tone?: string; readonly delay?: number}) => {
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

export const InterpretationScene = () => {
  /* data-final-knowledge="interpretation-systems" */
  const legs = [
    {name: '立法机关解释', tone: C.verdigris, icon: <Landmark size={30} color={C.paper} strokeWidth={2.2} />, body: '源自英国，我国亦是'},
    {name: '司法机关解释', tone: C.gilded, icon: <Gavel size={30} color={C.paper} strokeWidth={2.2} />, body: '源自美国：法院在审理案件过程中附带审查所适用法律是否违宪（1803 年马伯里诉麦迪逊案确立）'},
    {name: '专门机关解释', tone: C.sealRed, icon: <Building2 size={30} color={C.paper} strokeWidth={2.2} />, body: '宪法法院与宪法委员会等特设机关：法国为宪法委员会；奥·西·意·德·俄·韩为宪法法院（最早依凯尔森建议设于奥地利）'},
  ] as const;
  return (
    <Shell code="01" kicker="解释体制 · 监督对象" title="三足鼎立：宪法解释与保障">
      <div
        data-layout="tripod-three-legs"
        data-visual-anchor="main center"
        data-text-treatments="leg-plaques,origin-stamps"
        data-visual-grammar="legislative-leg,judicial-leg,special-leg"
        data-focal-rule="three-interpretation-systems-and-two-review-objects"
        data-focal-channels="three-legs,objects-strip"
        style={{position: 'absolute', inset: 0}}
      >
        {legs.map((leg, index) => (
          <Enter key={leg.name} delay={6 + index * 20} from="up" marker={index === 0 ? 'interpretation-systems' : undefined} style={{position: 'absolute', left: 20 + index * 592, top: 0, width: 568}}>
            <Panel tone={leg.tone} style={{height: 340, padding: '14px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12}}>
              <span style={{width: 76, height: 76, borderRadius: 38, backgroundColor: leg.tone, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `4px solid ${C.gilded}`}}>{leg.icon}</span>
              <span style={{fontSize: 28, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>{leg.name}</span>
              <div style={{width: 100, height: 3, backgroundColor: leg.tone}} />
              <div style={{fontSize: 22, fontWeight: 870, color: C.ink, lineHeight: 1.55, textAlign: 'center'}}>{leg.body}</div>
            </Panel>
          </Enter>
        ))}
        <Enter delay={100} from="up" style={{position: 'absolute', left: 0, top: 364, width: 1776}}>
          <Panel tone={C.gilded} watermark={<Scale size={170} color={C.gilded} strokeWidth={1.6} />} style={{height: 300, padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <DingTab bar={C.gilded} icon={<Scale size={26} color={C.paper} strokeWidth={2.2} />}>宪法实施的监督对象（两类合宪性审查）</DingTab>
            <IconChip icon={<ScrollText size={28} color={C.paper} strokeWidth={2.2} />} tone={C.verdigris} title="规范性文件：">
              对下位法的合宪性审查 —— 保障下位法不违反上位法，一切法律文件<Mark color={C.verdigris}>不违反宪法</Mark>
            </IconChip>
            <IconChip icon={<UserCheck size={28} color={C.paper} strokeWidth={2.2} />} tone={C.sealRed} title="行为：">
              一切国家机关及其工作人员 · 各政党 · 武装力量 · 社会团体 · 企业事业单位 · 全体公民 —— 追究<Mark color={C.sealRed}>宪法责任</Mark>·维护宪法权威
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const ProcedureScene = () => {
  /* data-final-knowledge="review-procedure" */
  return (
    <Shell code="02" kicker="合宪性审查流程" title="鼎腹铭文：审查机关·范围·程序·结果">
      <div
        data-layout="inscription-flow"
        data-visual-anchor="main center"
        data-text-treatments="inscription-rows,red-seals"
        data-visual-grammar="organ-row,scope-row,procedure-row,result-row"
        data-focal-rule="sc-holds-main-review-power-over-norms-below-law-except-rules"
        data-focal-channels="inscription-rows,no-incidental-note"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="review-procedure" style={{position: 'absolute', left: 0, top: 0, width: 1776}}>
          <Panel tone={C.verdigris} watermark={<SearchCheck size={170} color={C.verdigris} strokeWidth={1.6} />} style={{height: 466, padding: '12px 22px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <DingTab bar={C.verdigris} icon={<SearchCheck size={26} color={C.paper} strokeWidth={2.2} />}>合宪性审查 · 鼎腹四铭</DingTab>
            <IconChip icon={<Landmark size={28} color={C.paper} strokeWidth={2.2} />} tone={C.verdigris} title="机关：">
              全国人大 ＋ 全国人大常委会（1954 人大监督·1982 增加人常；人大非常设，主要由<Mark color={C.verdigris}>全人常</Mark>集中行使）；地方各级人大及其常委会保证宪法在本区域实施
            </IconChip>
            <IconChip icon={<ScrollText size={28} color={C.paper} strokeWidth={2.2} />} tone={C.gilded} title="范围：">
              <Mark color={C.gilded}>法律以下，除规章</Mark> —— 行政法规·监察法规·地方性法规·自治条例单行条例；经济特区法规·浦东新区法规·海南自贸港法规；两高司法解释报送备案
            </IconChip>
            <IconChip icon={<FileSignature size={28} color={C.paper} strokeWidth={2.2} />} tone={C.sealRed} title="程序：">
              <Mark color={C.sealRed}>主动</Mark>（专委会·工作机构可主动审查·专项审查）· <Mark color={C.sealRed}>被动</Mark>（两央两高监省常提<Mark color={C.sealRed}>要求</Mark>，其他主体和公民提<Mark color={C.sealRed}>建议</Mark>）· <Mark color={C.sealRed}>联动</Mark>（移送有权机关）· <Mark color={C.sealRed}>处理</Mark>（书面审查意见·联合审查会议·制定机关 <BronzeSeal tone={C.sealRed} delay={150}>2 个月内</BronzeSeal>反馈是否修改废止）
            </IconChip>
            <IconChip icon={<Gavel size={28} color={C.paper} strokeWidth={2.2} />} tone={C.bronzeDeep} title="结果：">
              制定机关修改废止 → <Mark color={C.bronzeDeep}>审查终止</Mark>；拒绝 → 向<Mark color={C.bronzeDeep}>委员长会议</Mark>提出撤销议案·建议，提请常委会审议决定；应当<Mark color={C.bronzeDeep}>反馈</Mark>并可以向社会公开
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={120} from="up" style={{position: 'absolute', left: 0, top: 490, width: 1776}}>
          <DingStrip style={{height: 118}}>
            <Ban size={42} color={C.sealRed} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.sealRed, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>朱印批注</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper, lineHeight: 1.6}}>
              我国<Mark color={C.paper}>没有附带性审查和宪法控诉</Mark>：法院没有合宪审查权，也无专门监督机关
              <br />
              事前·事后审查分类照旧；宪法第 5 条：一切法律法规<Mark color={C.paper}>不得同宪法相抵触</Mark>，无超越宪法法律的特权
            </span>
          </DingStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const OathScene = () => {
  /* data-final-knowledge="oath-system" */
  const organizers = [
    {who: '全国人大选举或决定产生', by: '全国人大主席团组织', icon: <Landmark size={26} color={C.paper} strokeWidth={2.2} />, tone: C.sealRed},
    {who: '全人常决定任命或任命', by: '全人常委员长会议组织', icon: <ScrollText size={26} color={C.paper} strokeWidth={2.2} />, tone: C.gilded},
    {who: '一府两院一委（含工作部门）任命', by: '任命机关自己组织', icon: <Building2 size={26} color={C.paper} strokeWidth={2.2} />, tone: C.verdigris},
    {who: '全人常任命的两院一委除正职外', by: '两院一委自行组织', icon: <Handshake size={26} color={C.paper} strokeWidth={2.2} />, tone: C.gilded},
    {who: '驻外全权代表', by: '外交部组织', icon: <Globe size={26} color={C.paper} strokeWidth={2.2} />, tone: C.sealRed},
  ] as const;
  return (
    <Shell code="03" kicker="宪法宣誓制度" title="鎏金誓版：谁宣誓 · 谁组织">
      <div
        data-layout="gilded-oath-tablet"
        data-visual-anchor="main center"
        data-text-treatments="oath-plaques,organizer-tablets"
        data-visual-grammar="who-row,organizer-row,ceremony-row"
        data-focal-rule="swear-when-taking-office-organized-by-sending-body"
        data-focal-channels="organizer-tablets,closing-strip"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.panel, border: `3px solid ${C.edge}`, padding: '9px 22px', textAlign: 'center'}}>
            <span style={{fontSize: 24, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              谁宣誓：人大及人常选举或决定产生的国家工作人员 ＋ 一府两院一委任命的国家工作人员 —— <Mark color={C.sealRed}>就职时公开宣誓</Mark>
            </span>
          </div>
        </Enter>
        <Enter delay={30} from="up" marker="oath-system" style={{position: 'absolute', left: 0, top: 78, width: 1776}}>
          <Panel tone={C.gilded} watermark={<Handshake size={160} color={C.gilded} strokeWidth={1.6} />} style={{height: 300, padding: '12px 22px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <DingTab bar={C.gilded} icon={<ScrollText size={26} color={C.paper} strokeWidth={2.2} />}>谁组织（五牍）</DingTab>
            {organizers.map((item, index) => (
              <div key={item.who} style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.panelDim, borderLeft: `5px solid ${item.tone}`, padding: '6px 12px'}}>
                <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 9, backgroundColor: item.tone, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{item.icon}</span>
                <span style={{fontSize: 22, fontWeight: 880, color: C.ink}}>
                  <span style={{fontWeight: 950, color: item.tone}}>{['壹', '贰', '叁', '肆', '伍'][index]}</span> {item.who} —— <span style={{fontWeight: 950}}>{item.by}</span>
                </span>
              </div>
            ))}
            <div style={{fontSize: 21, fontWeight: 880, color: C.inkSoft}}>地方人大人常·地方一府两院一委的宣誓办法：由省级人大常委会具体规定，报全人常备案</div>
          </Panel>
        </Enter>
        <Enter delay={120} from="up" style={{position: 'absolute', left: 0, top: 402, width: 1776}}>
          <Panel tone={C.sealRed} style={{height: 110, padding: '10px 22px'}}>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              <Mark color={C.sealRed}>单独宣誓</Mark>：左手抚按《中华人民共和国宪法》·右手举拳·诵读誓词；<Mark color={C.sealRed}>集体宣誓</Mark>：一人领誓（左手抚宪法·右手举拳·领诵），其他宣誓人整齐排列·右手举拳·跟诵
              <br />
              誓词要点：忠于中华人民共和国宪法 · 维护宪法权威 · 履行法定职责 · 忠于祖国忠于人民 · 恪尽职守廉洁奉公 · 接受人民监督
            </div>
          </Panel>
        </Enter>
        <Enter delay={160} from="up" style={{position: 'absolute', left: 0, top: 536, width: 1776}}>
          <DingStrip style={{height: 88}}>
            <ScrollText size={38} color={C.gilded} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.gilded, color: C.bronzeDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>口诀</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>
              谁宣誓「人人常产生 · 一府两院一委任命」· 谁组织「主席团 · 委员长会议 · 任命机关 · 外交部」
            </span>
          </DingStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const ConstitutionalSupervision = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-interpretation" {...SCENES.interpretation}>
      <InterpretationScene />
    </TimelineSequence>
    <TimelineSequence name="02-procedure" {...SCENES.procedure}>
      <ProcedureScene />
    </TimelineSequence>
    <TimelineSequence name="03-oath" {...SCENES.oath}>
      <OathScene />
    </TimelineSequence>
  </AbsoluteFill>
);

