import type {CSSProperties, ReactNode} from 'react';
import {Archive, Ban, Clock, FileSignature, FileX, Lock, MessageSquareWarning, RefreshCw, UserCheck} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  bureau: '#30343A',
  bureauDeep: '#252930',
  panel: '#F0EBDA',
  panelDim: '#E1DCC7',
  edge: '#5F6A72',
  ink: '#232930',
  inkSoft: '#535F68',
  covenant: '#C0983E',
  conflict: '#B04834',
  waive: '#4E7D74',
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
      backgroundColor: C.bureau,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `radial-gradient(1100px 460px at 50% -8%, rgba(192, 152, 62, 0.12), transparent 72%), repeating-linear-gradient(90deg, transparent 0 164px, rgba(37, 41, 48, 0.55) 164px 167px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.covenant}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.bureauDeep, borderLeft: `8px solid ${C.conflict}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 74 · {code}</span>
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
        borderBottom: `2px solid ${C.covenant}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.covenant, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone, watermark}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string; readonly watermark?: ReactNode}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.waive}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.waive}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.waive}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.waive}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

const BureauTab = ({children, bar = C.conflict, icon}: {readonly children: ReactNode; readonly bar?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.bureauDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

const BureauStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(37, 41, 48, 0.94)', border: `2px solid ${C.covenant}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Mark = ({children, color = C.conflict}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

const GoldSeal = ({children, tone = C.covenant, delay = 0}: {readonly children: ReactNode; readonly tone?: string; readonly delay?: number}) => {
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

export const RequirementsScene = () => {
  /* data-final-knowledge="basic-requirements" */
  const requirements = [
    '应当在授权范围内从事代理；如需特别授权，应事先取得委托人的书面确认',
    '应当严格按照法律规定的期间、时效以及与委托人约定时间，办理委托事项',
    '应当建立律师业务档案，保存完整的业务工作记录',
    '不得泄露委托人的商业秘密、个人隐私',
  ] as const;
  const authorities = [
    '只能在委托权限内开展执业活动',
    '接受委托时必须与委托人明确权限',
    '未征得委托人同意，不得同时接受有利益冲突的他方当事人委托，为其办理法律事务',
    '无正当理由不得拒绝履行协议约定的职责，不得无故拒绝辩护或代理',
  ] as const;
  return (
    <Shell code="01" kicker="基本要求 · 接受委托的权限" title="委托代理关系的基本要求">
      <div
        data-layout="twin-requirement-columns"
        data-visual-anchor="main center"
        data-text-treatments="requirement-rows,authority-chips"
        data-visual-grammar="requirement-column,authority-column"
        data-focal-rule="act-within-authorization-and-no-conflicting-acceptance"
        data-focal-channels="requirement-columns,authority-rows"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="basic-requirements" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 560}}>
          <Panel tone={C.covenant} watermark={<FileSignature size={190} color={C.covenant} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <BureauTab bar={C.covenant} icon={<FileSignature size={26} color={C.paper} strokeWidth={2.2} />}>委托代理关系的基本要求</BureauTab>
            {requirements.map((line, index) => (
              <IconChip key={line} icon={index === 3 ? <Ban size={26} color={C.paper} strokeWidth={2.2} /> : index === 1 ? <Clock size={26} color={C.paper} strokeWidth={2.2} /> : index === 2 ? <Archive size={26} color={C.paper} strokeWidth={2.2} /> : <FileSignature size={26} color={C.paper} strokeWidth={2.2} />} tone={index === 3 ? C.conflict : C.covenant} title={`${index + 1}.`}>
                {line}
              </IconChip>
            ))}
          </Panel>
        </Enter>
        <Enter delay={30} from="right" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 560}}>
          <Panel tone={C.waive} watermark={<UserCheck size={190} color={C.waive} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <BureauTab bar={C.waive} icon={<UserCheck size={26} color={C.paper} strokeWidth={2.2} />}>接受委托的权限</BureauTab>
            {authorities.map((line, index) => (
              <IconChip key={line} icon={index === 2 ? <Ban size={26} color={C.paper} strokeWidth={2.2} /> : index === 3 ? <Ban size={26} color={C.paper} strokeWidth={2.2} /> : <UserCheck size={26} color={C.paper} strokeWidth={2.2} />} tone={index >= 2 ? C.conflict : C.waive} title={`${index + 1}.`}>
                {line}
              </IconChip>
            ))}
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const ConflictScene = () => {
  /* data-final-knowledge="conflict-review" */
  const lock51 = ['同一案件为双方当事人担任代理人，或代理与本人·近亲属有利益冲突的法律事务', '近亲属是对方当事人的法定代表人或代理人', '曾亲自处理·审理该事项的公务·审判·检察·仲裁人员，转律师后又办理该事项', '同一律所不同律师同时担任同一刑事案件被害人的代理人和嫌疑人·被告人的辩护人（县内唯一所且事先征得同意除外）', '同一律所不同律师同时担任争议双方代理人，或本所为一方当事人而本所律师代理对方', '非诉业务中除共同委托外，同所律师同时担任彼此有利害关系各方当事人的代理人', '委托关系终止后，同一律所或同一律师在同一案件后续处理中又接受对方当事人委托', '其他相似且依执业经验和行业常识应主动回避的情形'];
  const lock52 = ['接受一方委托，而同所其他律师是该案对方当事人的近亲属', '担任刑事辩护人，而同所其他律师是该案被害人的近亲属', '同所接受正在代理案件的对方当事人所委托的其他法律业务', '律所与委托人存在法律服务关系，该委托人未要求代理，而本所律师担任其对方当事人的代理人', '委托关系终止后 1 年内，又就同一法律事务接受与原委托人有利害关系的对方当事人的委托'];
  return (
    <Shell code="02" kicker="利益冲突审查（绝对重点）" title="利益冲突审查">
      <div
        data-layout="two-lock-conflict-review"
        data-visual-anchor="main center"
        data-text-treatments="lock-rows,waiver-seals"
        data-visual-grammar="review-row,lock-51,lock-52,waiver-row"
        data-focal-rule="written-waiver-required-otherwise-no-representation"
        data-focal-channels="two-locks,waiver-consent"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="conflict-review" style={{position: 'absolute', left: 0, top: 0, width: 1776}}>
          <Panel tone={C.waive} watermark={<Lock size={170} color={C.waive} strokeWidth={1.6} />} style={{height: 96, padding: '10px 22px', display: 'flex', flexDirection: 'column', gap: 6, justifyContent: 'center'}}>
            <div style={{fontSize: 23, fontWeight: 900, color: C.ink}}>
              律所应当建立<Mark color={C.waive}>利益冲突审查制度</Mark>：接受委托<Mark color={C.waive}>之前</Mark>进行审查并决定是否接受；办理委托事务的律师与委托人存在利害关系或利益冲突的，<Mark color={C.conflict}>不得承办并应当主动提出回避</Mark>
            </div>
          </Panel>
        </Enter>
        <Enter delay={40} from="left" style={{position: 'absolute', left: 0, top: 120, width: 866, height: 336}}>
          <Panel tone={C.conflict} watermark={<Ban size={170} color={C.conflict} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <BureauTab bar={C.conflict} icon={<Lock size={26} color={C.paper} strokeWidth={2.2} />}>第一锁 · 不得建立或维持委托关系（第 51 条）</BureauTab>
            {lock51.map((line, index) => (
              <div key={line} style={{fontSize: 20, fontWeight: 860, color: C.ink, lineHeight: 1.4, backgroundColor: `${C.conflict}12`, borderLeft: `5px solid ${C.conflict}`, padding: '6px 10px'}}>
                <span style={{color: C.conflict, fontWeight: 950, marginRight: 5}}>{index + 1}.</span>
                {line}
              </div>
            ))}
          </Panel>
        </Enter>
        <Enter delay={60} from="right" style={{position: 'absolute', left: 910, top: 120, width: 866, height: 336}}>
          <Panel tone={C.covenant} watermark={<FileSignature size={170} color={C.covenant} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <BureauTab bar={C.covenant} icon={<UserCheck size={26} color={C.paper} strokeWidth={2.2} />}>第二锁 · 告知并主动提出回避，委托人同意的除外（第 52 条）</BureauTab>
            {lock52.map((line, index) => (
              <div key={line} style={{fontSize: 20, fontWeight: 860, color: C.ink, lineHeight: 1.42, backgroundColor: `${C.covenant}14`, borderLeft: `5px solid ${C.covenant}`, padding: '6px 10px'}}>
                <span style={{color: C.covenant, fontWeight: 950, marginRight: 5}}>{index + 1}.</span>
                {line}
              </div>
            ))}
          </Panel>
        </Enter>
        <Enter delay={130} from="up" style={{position: 'absolute', left: 0, top: 480, width: 1776}}>
          <BureauStrip style={{height: 108}}>
            <FileSignature size={44} color={C.waive} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.waive, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>豁免</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper, lineHeight: 1.6}}>
              告知利益冲突事实和后果，由委托人决定是否建立或维持委托关系；决定建立或维持的应签署<GoldSeal tone={C.waive} delay={180}>知情同意书</GoldSeal>
              <br />
              知情同意豁免后，承办律师对各委托人案件信息<Mark color={C.paper}>各自保密</Mark>，不得向相对方承办律师披露
            </span>
          </BureauStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const MiscTerminationScene = () => {
  /* data-final-knowledge="misc-termination" */
  const shallTerminate = ['委托人提出终止委托协议', '律师受吊销执业证书或停止执业处罚，协商后委托人不同意更换律师', '发现有不可克服的利益冲突', '律师健康原因不适合继续履行，协商后委托人不同意更换律师', '继续代理将违反法律法规·规章或律师执业行为规范'];
  const mayRescind = ['委托人利用法律服务从事违法犯罪活动', '委托人要求完成无法实现或不合理的目标', '委托人没有履行委托合同义务', '无法预见的前提下代理将带来不合理费用负担或难以承受的困难', '其他合法理由'];
  return (
    <Shell code="03" kicker="虚假承诺 · 保管 · 转委托 · 终止" title="其他规范与委托代理关系的终止">
      <div
        data-layout="quad-misc-termination"
        data-visual-anchor="main center"
        data-text-treatments="misc-chips,termination-rows"
        data-visual-grammar="promise-row,custody-row,reassignment-row,termination-panel"
        data-focal-rule="termination-summary-unlawful-unrealistic-dishonest-nonpaying"
        data-focal-channels="no-false-promises,termination-summary"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{position: 'absolute', left: 0, top: 0, width: 1776, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10}}>
          <Enter delay={6} from="left" marker="misc-termination" style={{}}>
            <Panel tone={C.covenant} watermark={<MessageSquareWarning size={150} color={C.covenant} strokeWidth={1.6} />} style={{height: 128, padding: '10px 18px', display: 'flex', flexDirection: 'column', gap: 6}}>
              <BureauTab bar={C.covenant} icon={<MessageSquareWarning size={24} color={C.paper} strokeWidth={2.2} />}>禁止虚假承诺</BureauTab>
              <div style={{fontSize: 21, fontWeight: 870, color: C.ink, lineHeight: 1.5}}>
                根据事实和证据·依法律分析后提出<Mark color={C.covenant}>预见性·分析性的结论意见</Mark>，注意避免虚假承诺；代理意见未被法庭采纳<Mark color={C.waive}>不属于虚假承诺</Mark>，属正常诉讼风险
              </div>
            </Panel>
          </Enter>
          <Enter delay={20} from="right" style={{}}>
            <Panel tone={C.waive} watermark={<Archive size={150} color={C.waive} strokeWidth={1.6} />} style={{height: 128, padding: '10px 18px', display: 'flex', flexDirection: 'column', gap: 6}}>
              <BureauTab bar={C.waive} icon={<Archive size={24} color={C.paper} strokeWidth={2.2} />}>保管委托人财产</BureauTab>
              <div style={{fontSize: 21, fontWeight: 870, color: C.ink, lineHeight: 1.5}}>
                妥善保管义务 · 严格分离义务 · 交还委托人财物的手续 · 及时告知义务
              </div>
            </Panel>
          </Enter>
        </div>
        <Enter delay={50} from="up" style={{position: 'absolute', left: 0, top: 152, width: 1776}}>
          <Panel tone={C.conflict} watermark={<RefreshCw size={160} color={C.conflict} strokeWidth={1.6} />} style={{height: 128, padding: '10px 20px', display: 'flex', flexDirection: 'column', gap: 6}}>
            <BureauTab bar={C.conflict} icon={<RefreshCw size={24} color={C.paper} strokeWidth={2.2} />}>转委托</BureauTab>
            <div style={{fontSize: 21, fontWeight: 870, color: C.ink, lineHeight: 1.55}}>
              未经委托人同意，律所<Mark color={C.conflict}>不得</Mark>将委托事务转委托其他律所办理；<Mark color={C.waive}>紧急情况下</Mark>为维护委托人利益可以转委托，但应<Mark color={C.waive}>及时告知</Mark>；非经委托人同意，不能因转委托<Mark color={C.conflict}>增加费用支出</Mark>
            </div>
          </Panel>
        </Enter>
        <Enter delay={90} from="up" style={{position: 'absolute', left: 0, top: 300, width: 1776}}>
          <Panel tone={C.bureauDeep} watermark={<FileX size={170} color={C.conflict} strokeWidth={1.6} />} style={{height: 240, padding: '12px 22px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18}}>
            <div>
              <BureauTab bar={C.conflict} icon={<FileX size={24} color={C.paper} strokeWidth={2.2} />}>律所应终止其代理工作（五情形）</BureauTab>
              {shallTerminate.map((line, index) => (
                <div key={line} style={{fontSize: 20, fontWeight: 850, color: C.ink, lineHeight: 1.4, backgroundColor: `${C.conflict}10`, borderLeft: `4px solid ${C.conflict}`, padding: '4px 9px', marginTop: 5}}>
                  {index + 1}. {line}
                </div>
              ))}
            </div>
            <div style={{borderLeft: `2px dashed ${C.edge}`, paddingLeft: 16}}>
              <BureauTab bar={C.waive} icon={<RefreshCw size={24} color={C.paper} strokeWidth={2.2} />}>经提示不纠正，可解除委托协议（五情形）</BureauTab>
              {mayRescind.map((line, index) => (
                <div key={line} style={{fontSize: 20, fontWeight: 850, color: C.ink, lineHeight: 1.4, backgroundColor: `${C.waive}12`, borderLeft: `4px solid ${C.waive}`, padding: '4px 9px', marginTop: 5}}>
                  {index + 1}. {line}
                </div>
              ))}
            </div>
          </Panel>
        </Enter>
        <Enter delay={150} from="up" style={{position: 'absolute', left: 0, top: 564, width: 1776}}>
          <BureauStrip style={{height: 84}}>
            <FileX size={40} color={C.conflict} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.conflict, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>终止情形概括</span>
            <span style={{fontSize: 24, fontWeight: 950, color: C.paper}}>
              不守法 · 不现实 · 不老实 · 不给钱或预期不给钱
            </span>
          </BureauStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const ClientAttorneyRelations = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-requirements" {...SCENES.requirements}>
      <RequirementsScene />
    </TimelineSequence>
    <TimelineSequence name="02-conflict" {...SCENES.conflict}>
      <ConflictScene />
    </TimelineSequence>
    <TimelineSequence name="03-misc-termination" {...SCENES.miscTermination}>
      <MiscTerminationScene />
    </TimelineSequence>
  </AbsoluteFill>
);
