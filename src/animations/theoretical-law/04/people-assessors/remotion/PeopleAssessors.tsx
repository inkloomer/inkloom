import type {CSSProperties, ReactNode} from 'react';
import {Ban, Coins, Gavel, Scale, Shield, UserCheck, UserX, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  bench: '#34302B',
  benchDeep: '#272420',
  panel: '#F1ECDA',
  panelDim: '#E2DDC7',
  edge: '#6C655A',
  ink: '#292520',
  inkSoft: '#5B5449',
  benchGold: '#C0983E',
  assessorTeal: '#4E7D74',
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
      backgroundColor: C.bench,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `radial-gradient(1100px 460px at 50% -8%, rgba(192, 152, 62, 0.12), transparent 72%), repeating-linear-gradient(0deg, transparent 0 108px, rgba(39, 36, 32, 0.55) 108px 111px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.benchGold}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.benchDeep, borderLeft: `8px solid ${C.restrict}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 66 · {code}</span>
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
        borderBottom: `2px solid ${C.benchGold}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.benchGold, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone, watermark}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string; readonly watermark?: ReactNode}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.assessorTeal}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.assessorTeal}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.assessorTeal}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.assessorTeal}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

const RosterTab = ({children, bar = C.restrict, icon}: {readonly children: ReactNode; readonly bar?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.benchDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

const RosterStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(39, 36, 32, 0.94)', border: `2px solid ${C.benchGold}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Mark = ({children, color = C.restrict}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

const GoldSeal = ({children, tone = C.benchGold, delay = 0}: {readonly children: ReactNode; readonly tone?: string; readonly delay?: number}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span style={{display: 'inline-block', padding: '4px 12px', border: `5px solid ${tone}`, color: tone, backgroundColor: `${tone}12`, fontSize: 22, fontWeight: 950, letterSpacing: 2, opacity: p, rotate: '-2deg'}}>{children}</span>
  );
};

export const QuotaScene = () => {
  /* data-final-knowledge="assessor-quota" */
  const cannot = ['人大常委会组成人员，监察委·法院·检察院·公安·国家安全机关·司法行政机关工作人员', '律师·公证员·仲裁员·基层法律服务工作者', '其他因职务原因不适宜担任人民陪审员的人员'];
  const forbidden = ['受过刑事处罚', '被开除公职', '被吊销律师·公证员执业证书', '被纳入失信被执行人名单', '因受惩戒被免除人民陪审员职务', '其他严重违法违纪可能影响司法公信'];
  return (
    <Shell code="01" kicker="资格 · 名额 · 产生" title="资格与名额">
      <div
        data-layout="roster-columns"
        data-visual-anchor="main center"
        data-text-treatments="roster-rows,quota-seals"
        data-visual-grammar="quality-column,exclusion-column,forbidden-column"
        data-focal-rule="age-28-and-three-times-judges-quota"
        data-focal-channels="quota-seals,exclusion-columns"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="assessor-quota" style={{position: 'absolute', left: 0, top: 0, width: 580, height: 464}}>
          <Panel tone={C.assessorTeal} watermark={<UserCheck size={170} color={C.assessorTeal} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <RosterTab bar={C.assessorTeal} icon={<UserCheck size={26} color={C.paper} strokeWidth={2.2} />}>担任条件</RosterTab>
            {['拥护中华人民共和国宪法', '年满 28 周岁', '遵纪守法·品行良好·公道正派', '具有正常履行职责的身体条件'].map((line) => (
              <div key={line} style={{fontSize: 22, fontWeight: 870, color: C.ink, lineHeight: 1.4, backgroundColor: C.panelDim, borderLeft: `5px solid ${C.assessorTeal}`, padding: '7px 11px'}}>{line}</div>
            ))}
            <div style={{fontSize: 22, fontWeight: 900, color: C.ink}}>一般应当具有<Mark color={C.assessorTeal}>高中以上文化程度</Mark></div>
          </Panel>
        </Enter>
        <Enter delay={30} from="up" style={{position: 'absolute', left: 600, top: 0, width: 580, height: 464}}>
          <Panel tone={C.benchGold} watermark={<UserX size={170} color={C.benchGold} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <RosterTab bar={C.benchGold} icon={<Ban size={26} color={C.paper} strokeWidth={2.2} />}>不能担任</RosterTab>
            {cannot.map((line) => (
              <div key={line} style={{fontSize: 21, fontWeight: 860, color: C.ink, lineHeight: 1.42, backgroundColor: C.panelDim, borderLeft: `5px solid ${C.benchGold}`, padding: '6px 10px'}}>{line}</div>
            ))}
            <RosterTab bar={C.restrict} icon={<Ban size={26} color={C.paper} strokeWidth={2.2} />}>不得担任（六情形）</RosterTab>
            {forbidden.map((line) => (
              <div key={line} style={{fontSize: 21, fontWeight: 860, color: C.ink, lineHeight: 1.38, backgroundColor: `${C.restrict}12`, borderLeft: `5px solid ${C.restrict}`, padding: '5px 10px'}}>{line}</div>
            ))}
          </Panel>
        </Enter>
        <Enter delay={60} from="right" style={{position: 'absolute', left: 1200, top: 0, width: 576, height: 464}}>
          <Panel tone={C.restrict} watermark={<Users size={170} color={C.restrict} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <RosterTab bar={C.restrict} icon={<Users size={26} color={C.paper} strokeWidth={2.2} />}>名额与产生</RosterTab>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              名额由基层法院提请<Mark color={C.assessorTeal}>同级人大常委会</Mark>确定，不低于本院法官数的<GoldSeal tone={C.restrict} delay={130}>3 倍</GoldSeal>
            </div>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              司法行政机关会同基层法院·公安机关，从常住居民名单<Mark color={C.benchGold}>随机 5 倍以上海选</Mark>→资格审查→<Mark color={C.benchGold}>再次随机抽选</Mark>→院长提请同级人大常委会任命
            </div>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
              个人申请或组织推荐的，不超过名额数的<GoldSeal tone={C.assessorTeal} delay={160}>1/5</GoldSeal>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const BenchScene = () => {
  /* data-final-knowledge="bench-vote-rules" */
  const joinCases = ['涉及群体利益、公共利益的', '人民群众广泛关注或者其他社会影响较大的', '案情复杂或者有其他情形，需要由人民陪审员参加审判的'];
  const sevenCases = ['可能判处十年以上有期徒刑·无期徒刑·死刑，社会影响重大的刑事案件', '根据民事诉讼法·行政诉讼法提起的公益诉讼案件', '涉及征地拆迁·生态环境保护·食品药品安全，社会影响重大的案件', '其他社会影响重大的案件'];
  return (
    <Shell code="02" kicker="参审 · 合议庭 · 表决" title="参审案件与合议庭">
      <div
        data-layout="bench-seat-diagram"
        data-visual-anchor="main center"
        data-text-treatments="seat-diagram,vote-chips"
        data-visual-grammar="three-bench,seven-bench,vote-split"
        data-focal-rule="seven-member-bench-facts-vote-law-no-vote"
        data-focal-channels="seat-diagram,vote-split"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="bench-vote-rules" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 262}}>
          <Panel tone={C.assessorTeal} watermark={<Users size={170} color={C.assessorTeal} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <RosterTab bar={C.assessorTeal} icon={<Users size={26} color={C.paper} strokeWidth={2.2} />}>组成合议庭参审的三情形</RosterTab>
            {joinCases.map((line, index) => (
              <div key={line} style={{fontSize: 22, fontWeight: 870, color: C.ink, lineHeight: 1.45, backgroundColor: C.panelDim, borderLeft: `5px solid ${C.assessorTeal}`, padding: '7px 11px'}}>
                <span style={{color: C.assessorTeal, fontWeight: 950, marginRight: 6}}>{index + 1}.</span>
                {line}
              </div>
            ))}
          </Panel>
        </Enter>
        <Enter delay={30} from="right" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 262}}>
          <Panel tone={C.restrict} watermark={<Gavel size={170} color={C.restrict} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <RosterTab bar={C.restrict} icon={<Gavel size={26} color={C.paper} strokeWidth={2.2} />}>七人合议庭的四类一审案件</RosterTab>
            {sevenCases.map((line, index) => (
              <div key={line} style={{fontSize: 21, fontWeight: 860, color: C.ink, lineHeight: 1.4, backgroundColor: `${C.restrict}12`, borderLeft: `5px solid ${C.restrict}`, padding: '5px 10px'}}>
                <span style={{color: C.restrict, fontWeight: 950, marginRight: 6}}>{index + 1}.</span>
                {line}
              </div>
            ))}
          </Panel>
        </Enter>
        <Enter delay={70} from="up" style={{position: 'absolute', left: 0, top: 286, width: 1776}}>
          <Panel tone={C.benchGold} watermark={<Scale size={170} color={C.benchGold} strokeWidth={1.6} />} style={{height: 186, padding: '12px 22px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <RosterTab bar={C.benchGold} icon={<Scale size={26} color={C.paper} strokeWidth={2.2} />}>合议庭组成与表决</RosterTab>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
              审判长由<Mark color={C.benchGold}>法官担任</Mark>；可组成<Mark color={C.assessorTeal}>三人合议庭</Mark>，也可由<Mark color={C.restrict}>法官 3 人＋人民陪审员 4 人</Mark>组成七人合议庭；基层·中级·高级法院需要陪审员参审的，一律在<Mark color={C.benchGold}>基层法院陪审员名单中随机抽取</Mark>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10}}>
              <div style={{fontSize: 22, fontWeight: 880, color: C.ink, backgroundColor: `${C.assessorTeal}14`, border: `2px solid ${C.assessorTeal}`, padding: '8px 12px'}}>
                三人合议庭：事实认定·法律适用<Mark color={C.assessorTeal}>都独立发表意见·行使表决权</Mark>
              </div>
              <div style={{fontSize: 22, fontWeight: 880, color: C.ink, backgroundColor: `${C.restrict}12`, border: `2px solid ${C.restrict}`, padding: '8px 12px'}}>
                七人合议庭：事实认定<Mark color={C.assessorTeal}>与法官共同表决</Mark>；法律适用<Mark color={C.restrict}>可发表意见但不参加表决</Mark>
              </div>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const DutySafetyScene = () => {
  /* data-final-knowledge="duty-safety" */
  const exemptions = ['本人因正当理由申请辞去人民陪审员职务', '具有《人民陪审员法》第 6 条·第 7 条所列情形之一', '无正当理由拒绝参加审判活动，影响审判工作正常进行', '违反与审判工作有关的法律及相关规定，徇私舞弊，造成错误裁判或严重后果'];
  const safeties = ['人身和住所安全受法律保护；任何单位和个人不得对陪审员及其近亲属打击报复', '参加审判活动期间，所在单位不得克扣或变相克扣工资·奖金·福利待遇', '参加审判活动期间由法院按实际工作日给予补助', '因参加审判活动支出的交通·就餐等费用，由法院给予补助'];
  return (
    <Shell code="03" kicker="免职 · 履职保障" title="免职与履职保障">
      <div
        data-layout="exemption-plus-safety"
        data-visual-anchor="main center"
        data-text-treatments="exemption-rows,safety-chips"
        data-visual-grammar="exemption-panel,safety-panel"
        data-focal-rule="four-exemption-grounds-and-full-duty-protection"
        data-focal-channels="exemption-rows,safety-rows"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="duty-safety" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 464}}>
          <Panel tone={C.restrict} watermark={<UserX size={180} color={C.restrict} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <RosterTab bar={C.restrict} icon={<UserX size={26} color={C.paper} strokeWidth={2.2} />}>免除职务（院长提请同级人大常委会免职）</RosterTab>
            {exemptions.map((line, index) => (
              <div key={line} style={{fontSize: 22, fontWeight: 870, color: C.ink, lineHeight: 1.45, backgroundColor: `${C.restrict}12`, borderLeft: `5px solid ${C.restrict}`, padding: '7px 11px'}}>
                <span style={{color: C.restrict, fontWeight: 950, marginRight: 6}}>{index + 1}.</span>
                {line}
              </div>
            ))}
            <div style={{fontSize: 21, fontWeight: 860, color: C.inkSoft, lineHeight: 1.45}}>第 3·4 项可辖区公开通报惩戒；构成犯罪依法追究刑责</div>
          </Panel>
        </Enter>
        <Enter delay={30} from="right" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 464}}>
          <Panel tone={C.assessorTeal} watermark={<Shield size={180} color={C.assessorTeal} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <RosterTab bar={C.assessorTeal} icon={<Shield size={26} color={C.paper} strokeWidth={2.2} />}>履职保障</RosterTab>
            {safeties.map((line, index) => (
              <div key={line} style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.5, backgroundColor: C.panelDim, borderLeft: `5px solid ${C.assessorTeal}`, padding: '8px 12px', display: 'flex', gap: 10, alignItems: 'flex-start'}}>
                {index < 2 ? <Shield size={24} color={C.assessorTeal} strokeWidth={2.2} /> : <Coins size={24} color={C.assessorTeal} strokeWidth={2.2} />}
                {line}
              </div>
            ))}
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const PeopleAssessors = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-quota" {...SCENES.quota}>
      <QuotaScene />
    </TimelineSequence>
    <TimelineSequence name="02-bench" {...SCENES.bench}>
      <BenchScene />
    </TimelineSequence>
    <TimelineSequence name="03-duty-safety" {...SCENES.dutySafety}>
      <DutySafetyScene />
    </TimelineSequence>
  </AbsoluteFill>
);

