import React, {type CSSProperties, type ReactNode} from 'react';
import {ArrowDown, ArrowRight, Ban, Briefcase, CheckCircle2, Clock, Eye, FileText, FileWarning, FileX, Gift, Gavel, History, Landmark, Languages, Link, MessageSquare, Pause, Play, RefreshCcw, RotateCcw, Scale, Search, ShieldCheck, Siren, User, UserCheck, UserX, Users, type LucideIcon} from 'lucide-react';
import {AbsoluteFill, Easing, Sequence, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {DURATION_FRAMES, SCENES} from './storyboard';

const colors = {
  canvas: '#F4F6F3',
  ink: '#17221E',
  muted: '#5C6862',
  line: '#D1D8D3',
  paper: '#FFFFFF',
  teal: '#087C73',
  tealSoft: '#DDF0EC',
  gold: '#A56D16',
  goldSoft: '#F8ECCA',
  red: '#C8463B',
  redSoft: '#F9E3E0',
  blue: '#356BA8',
  blueSoft: '#E3ECF8',
} as const;

const font = '"Microsoft YaHei", "PingFang SC", sans-serif';
const sequenceEntries = Object.entries(SCENES) as Array<[keyof typeof SCENES, (typeof SCENES)[keyof typeof SCENES]]>;

const Enter = ({children, delay = 0, style}: {readonly children: ReactNode; readonly delay?: number; readonly style?: CSSProperties}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  return (
    <div
      style={{
        ...style,
        opacity: interpolate(frame, [delay, delay + 12], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)}),
        translate: `0 ${interpolate(frame, [delay, delay + 16], [34, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)})}px`,
        scale: spring({frame: frame - delay, fps, config: {damping: 18, mass: 0.6, stiffness: 150}, durationInFrames: 22}),
      }}
    >
      {children}
    </div>
  );
};

const Page = ({number, eyebrow, title, accent, children}: {readonly number: string; readonly eyebrow: string; readonly title: string; readonly accent: keyof Pick<typeof colors, 'teal' | 'gold' | 'red' | 'blue'>; readonly children: ReactNode}) => (
  <AbsoluteFill style={{fontFamily: font, color: colors.ink}}>
    <div style={{position: 'absolute', inset: 0, backgroundColor: colors.canvas}} />
    {[320, 640, 960, 1280, 1600].map((left) => <div key={left} style={{position: 'absolute', left, top: 0, width: 1, height: 1080, backgroundColor: 'rgba(167, 181, 173, 0.20)'}} />)}
    <Enter delay={2} style={{position: 'absolute', left: 92, top: 68, display: 'flex', alignItems: 'center', gap: 20}}>
      <div style={{display: 'grid', width: 54, height: 54, placeItems: 'center', color: colors[accent], border: `2px solid ${colors[accent]}`, fontSize: 20, fontWeight: 900}}>{number}</div>
      <div><div style={{color: colors[accent], fontSize: 20, fontWeight: 900, letterSpacing: 1.5}}>{eyebrow}</div><div style={{marginTop: 5, fontSize: 50, fontWeight: 900, lineHeight: 1.04}}>{title}</div></div>
    </Enter>
    <div style={{position: 'absolute', right: 92, top: 84, color: colors.muted, fontSize: 18, fontWeight: 800, letterSpacing: 1}}>CIVIL PROCEDURE / 03</div>
    <div style={{position: 'absolute', left: 92, right: 92, top: 201, height: 1, backgroundColor: colors.line}} />
    {children}
  </AbsoluteFill>
);

const Card = ({title, children, tone = 'teal', style, delay}: {readonly title: ReactNode; readonly children: ReactNode; readonly tone?: keyof Pick<typeof colors, 'teal' | 'gold' | 'red' | 'blue'>; readonly style?: CSSProperties; readonly delay: number}) => (
  <Enter delay={delay} style={{...style, boxSizing: 'border-box'}}>
    <section style={{height: '100%', boxSizing: 'border-box', padding: '27px 31px', backgroundColor: colors.paper, border: `2px solid ${colors[tone]}`, borderRadius: 12, boxShadow: '0 16px 38px rgba(23, 34, 30, 0.08)'}}>
      <div style={{color: colors[tone], fontSize: 25, fontWeight: 900, lineHeight: 1.2}}>{title}</div>
      <div style={{marginTop: 15, color: colors.ink, fontSize: 27, fontWeight: 700, lineHeight: 1.43}}>{children}</div>
    </section>
  </Enter>
);

const ConceptNode = ({icon: Icon, label, note, tone}: {readonly icon: LucideIcon; readonly label: string; readonly note?: string; readonly tone: keyof Pick<typeof colors, 'teal' | 'gold' | 'red' | 'blue'>}) => (
  <div style={{display: 'flex', minWidth: 0, height: 104, flex: '1 1 0', boxSizing: 'border-box', alignItems: 'center', gap: 15, padding: '15px 18px', backgroundColor: colors[`${tone}Soft`], border: `2px solid ${colors[tone]}`, borderRadius: 10}}>
    <div style={{display: 'grid', width: 54, height: 54, flex: '0 0 auto', placeItems: 'center', color: colors[tone], backgroundColor: colors.paper, border: `2px solid ${colors[tone]}`, borderRadius: 8}}>
      <Icon size={34} strokeWidth={2.4} />
    </div>
    <div>
      <div style={{fontSize: 24, fontWeight: 900, lineHeight: 1.12}}>{label}</div>
      {note ? <div style={{marginTop: 6, color: colors.muted, fontSize: 18, fontWeight: 750, lineHeight: 1.15}}>{note}</div> : null}
    </div>
  </div>
);

const FlowArrow = ({tone}: {readonly tone: keyof Pick<typeof colors, 'teal' | 'gold' | 'red' | 'blue'>}) => (
  <div style={{display: 'grid', width: 52, placeItems: 'center', color: colors[tone]}}>
    <ArrowRight size={42} strokeWidth={2.7} />
  </div>
);

const IconPill = ({icon: Icon, label, tone = 'teal'}: {readonly icon: LucideIcon; readonly label: string; readonly tone?: keyof Pick<typeof colors, 'teal' | 'gold' | 'red' | 'blue'>}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 10, padding: '11px 15px', color: colors[tone], backgroundColor: colors[`${tone}Soft`], border: `1.5px solid ${colors[tone]}`, borderRadius: 8, fontSize: 20, fontWeight: 850, lineHeight: 1.1}}>
    <Icon size={26} strokeWidth={2.4} />
    <span>{label}</span>
  </div>
);

const MappingLane = ({fromIcon: FromIcon, from, detail, toIcon: ToIcon, to, tone, delay}: {readonly fromIcon: LucideIcon; readonly from: string; readonly detail: string; readonly toIcon: LucideIcon; readonly to: string; readonly tone: keyof Pick<typeof colors, 'teal' | 'gold' | 'red' | 'blue'>; readonly delay: number}) => (
  <Enter delay={delay} style={{height: 154, display: 'grid', gridTemplateColumns: '1fr 88px 0.72fr', alignItems: 'center', padding: '0 28px', backgroundColor: colors.paper, border: `2px solid ${colors[tone]}`, borderRadius: 12, boxShadow: '0 14px 32px rgba(23, 34, 30, 0.07)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: 20}}>
      <div style={{display: 'grid', width: 64, height: 64, flex: '0 0 auto', placeItems: 'center', color: colors[tone], backgroundColor: colors[`${tone}Soft`], borderRadius: 10}}><FromIcon size={40} strokeWidth={2.4} /></div>
      <div><div style={{fontSize: 28, fontWeight: 900}}>{from}</div><div style={{marginTop: 8, color: colors.muted, fontSize: 19, fontWeight: 750}}>{detail}</div></div>
    </div>
    <ArrowRight size={44} color={colors[tone]} strokeWidth={2.6} />
    <div style={{display: 'flex', alignItems: 'center', gap: 17, color: colors[tone]}}><ToIcon size={44} strokeWidth={2.5} /><span style={{fontSize: 29, fontWeight: 950}}>{to}</span></div>
  </Enter>
);

const Scope = () => (
  <Page number="01" eyebrow="第一步：看对象" title="谁需要回避？关键是中立期待" accent="teal">
    <Enter delay={25} style={{position: 'absolute', left: 540, right: 540, top: 264, height: 104, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, color: colors.teal, backgroundColor: colors.tealSoft, border: `2px solid ${colors.teal}`, borderRadius: 12}}>
      <ShieldCheck size={52} strokeWidth={2.4} />
      <div><div style={{fontSize: 31, fontWeight: 950}}>中立期待</div><div style={{marginTop: 4, color: colors.muted, fontSize: 19, fontWeight: 750}}>判断是否进入回避制度</div></div>
    </Enter>
    <Enter delay={40} style={{position: 'absolute', left: 938, top: 368, color: colors.teal}}><ArrowDown size={44} strokeWidth={2.6} /></Enter>
    <Card title={<span style={{display: 'flex', alignItems: 'center', gap: 12}}><UserCheck size={30} /> 进入回避判断</span>} tone="teal" delay={50} style={{position: 'absolute', left: 112, top: 438, width: 1046, height: 334}}>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 15}}>
        <IconPill icon={Gavel} label="审判人员（含陪审员）" />
        <IconPill icon={FileText} label="法官助理、书记员、技术人员" />
        <IconPill icon={Languages} label="翻译人员" />
        <IconPill icon={Search} label="鉴定人、勘验人" />
      </div>
    </Card>
    <Card title={<span style={{display: 'flex', alignItems: 'center', gap: 12}}><UserX size={30} /> 不进入回避判断</span>} tone="gold" delay={68} style={{position: 'absolute', left: 1212, top: 438, width: 596, height: 334}}>
      <div style={{display: 'grid', gap: 15}}>
        <IconPill icon={Briefcase} label="诉讼代理人、专家辅助人" tone="gold" />
        <IconPill icon={Eye} label="证人：具有不可替代性" tone="gold" />
      </div>
    </Card>
  </Page>
);

const Grounds = () => (
  <Page number="02" eyebrow="第二步：看事由" title="三组法定原因，外加一项例外" accent="red">
    <Enter delay={22} style={{position: 'absolute', left: 760, right: 760, top: 260, height: 86, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, color: colors.red, backgroundColor: colors.redSoft, borderRadius: 10}}><Scale size={40} strokeWidth={2.5} /><span style={{fontSize: 29, fontWeight: 950}}>回避事由</span></Enter>
    <Enter delay={34} style={{position: 'absolute', left: 938, top: 344, color: colors.red}}><ArrowDown size={44} strokeWidth={2.6} /></Enter>
    <div style={{position: 'absolute', left: 112, right: 112, top: 414, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24}}>
      <Card title={<span style={{display: 'flex', alignItems: 'center', gap: 12}}><Link size={30} /> 01 利害关系</span>} tone="red" delay={45} style={{height: 282}}><div style={{display: 'grid', gap: 13}}><IconPill icon={Users} label="本人、近亲属" tone="red" /><IconPill icon={Eye} label="曾任证人、鉴定人、代理人" tone="red" /><IconPill icon={Scale} label="其他影响公正的关系" tone="red" /></div></Card>
      <Card title={<span style={{display: 'flex', alignItems: 'center', gap: 12}}><Gift size={30} /> 02 不当行为</span>} tone="gold" delay={58} style={{height: 282}}><div style={{display: 'grid', gap: 13}}><IconPill icon={Gift} label="请客送礼" tone="gold" /><IconPill icon={Briefcase} label="推荐代理人或律师" tone="gold" /><IconPill icon={MessageSquare} label="违规会见当事人或代理人" tone="gold" /></div></Card>
      <Card title={<span style={{display: 'flex', alignItems: 'center', gap: 12}}><History size={30} /> 03 前序程序</span>} tone="blue" delay={71} style={{height: 282}}><div style={{display: 'grid', gap: 13}}><IconPill icon={Gavel} label="已参与本案审判" tone="blue" /><IconPill icon={Ban} label="不得再参与其他程序" tone="blue" /></div></Card>
    </div>
    <Enter delay={96} style={{position: 'absolute', left: 250, right: 250, top: 758, height: 112, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 22, backgroundColor: colors.blueSoft, border: `2px solid ${colors.blue}`, borderRadius: 12}}>
      <RotateCcw size={42} color={colors.blue} strokeWidth={2.5} /><span style={{fontSize: 25, fontWeight: 850}}>发回重审后再次二审</span><ArrowRight size={34} color={colors.blue} /><span style={{color: colors.blue, fontSize: 27, fontWeight: 950}}>原二审人员不受限</span>
    </Enter>
  </Page>
);

const Application = () => (
  <Page number="03" eyebrow="第三步：提出申请" title="有理由，且不晚于法庭辩论终结" accent="blue">
    <Enter delay={24} style={{position: 'absolute', left: 112, top: 286, width: 530, height: 164, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 26, backgroundColor: colors.blueSoft, border: `2px solid ${colors.blue}`, borderRadius: 12}}>
      <MessageSquare size={48} color={colors.blue} strokeWidth={2.4} /><span style={{fontSize: 28, fontWeight: 900}}>口头</span><span style={{color: colors.muted, fontSize: 24, fontWeight: 800}}>或</span><FileText size={48} color={colors.blue} strokeWidth={2.4} /><span style={{fontSize: 28, fontWeight: 900}}>书面</span>
    </Enter>
    <Enter delay={38} style={{position: 'absolute', left: 706, right: 112, top: 286, height: 164, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, backgroundColor: colors.paper, border: `2px solid ${colors.blue}`, borderRadius: 12}}><FileWarning size={48} color={colors.blue} strokeWidth={2.4} /><span style={{fontSize: 31, fontWeight: 900}}>申请必须说明理由</span></Enter>
    <Enter delay={52} style={{position: 'absolute', left: 190, right: 190, top: 560, height: 10, backgroundColor: colors.line}}><div style={{width: '100%', height: '100%', background: `linear-gradient(90deg, ${colors.teal}, ${colors.red})`}} /></Enter>
    <Enter delay={60} style={{position: 'absolute', left: 160, top: 500, display: 'grid', placeItems: 'center', gap: 12}}><Clock size={52} color={colors.teal} strokeWidth={2.5} /><span style={{fontSize: 26, fontWeight: 950}}>开始审理</span><span style={{color: colors.teal, fontSize: 20, fontWeight: 850}}>通常提出</span></Enter>
    <Enter delay={74} style={{position: 'absolute', left: 744, top: 630, display: 'flex', alignItems: 'center', gap: 17, padding: '20px 28px', color: colors.blue, backgroundColor: colors.blueSoft, borderRadius: 10}}><Eye size={38} strokeWidth={2.4} /><span style={{fontSize: 24, fontWeight: 900}}>事后才知道回避事由</span><ArrowRight size={34} /></Enter>
    <Enter delay={84} style={{position: 'absolute', right: 126, top: 500, display: 'grid', placeItems: 'center', gap: 12}}><Gavel size={52} color={colors.red} strokeWidth={2.5} /><span style={{fontSize: 26, fontWeight: 950}}>辩论终结</span><span style={{color: colors.red, fontSize: 20, fontWeight: 850}}>最迟界限</span></Enter>
  </Page>
);

const PendingEffect = () => (
  <Page number="04" eyebrow="第四步：等待决定" title="审查期间暂停，复议期间不停" accent="gold">
    <Card title={<span style={{display: 'flex', alignItems: 'center', gap: 12}}><FileText size={30} /> 回避申请提出</span>} tone="red" delay={25} style={{position: 'absolute', left: 112, top: 292, width: 806, height: 358}}>
      <div style={{display: 'flex', alignItems: 'center'}}><ConceptNode icon={FileText} label="等待决定" note="申请后 → 决定前" tone="red" /><FlowArrow tone="red" /><ConceptNode icon={Pause} label="暂停工作" note="审查期间" tone="red" /></div>
      <div style={{display: 'flex', alignItems: 'center', gap: 16, marginTop: 24, color: colors.gold, fontSize: 22, fontWeight: 900}}><Siren size={36} strokeWidth={2.5} />紧急措施<ArrowRight size={30} /><span>例外：不暂停</span></div>
    </Card>
    <Card title={<span style={{display: 'flex', alignItems: 'center', gap: 12}}><RotateCcw size={30} /> 驳回后申请复议</span>} tone="blue" delay={48} style={{position: 'absolute', left: 1002, top: 292, width: 806, height: 358}}>
      <div style={{display: 'flex', alignItems: 'center'}}><ConceptNode icon={RotateCcw} label="复议期间" note="救济程序进行中" tone="blue" /><FlowArrow tone="blue" /><ConceptNode icon={Play} label="不停止工作" note="被申请回避人员" tone="blue" /></div>
      <div style={{display: 'flex', alignItems: 'center', gap: 16, marginTop: 24, color: colors.blue, fontSize: 22, fontWeight: 900}}><User size={36} strokeWidth={2.5} />人员继续履职<CheckCircle2 size={30} /></div>
    </Card>
    <Enter delay={78} style={{position: 'absolute', left: 430, right: 430, top: 746, height: 118, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 28, backgroundColor: colors.goldSoft, borderBottom: `7px solid ${colors.gold}`}}><Pause size={40} color={colors.red} /><span style={{color: colors.red, fontSize: 29, fontWeight: 950}}>审查期暂停</span><span style={{fontSize: 38, fontWeight: 900}}>≠</span><Play size={40} color={colors.blue} /><span style={{color: colors.blue, fontSize: 29, fontWeight: 950}}>复议期不停</span></Enter>
  </Page>
);

const Decision = () => (
  <Page number="05" eyebrow="第五步：谁来决定" title="先看被申请回避人的身份" accent="teal">
    <div style={{position: 'absolute', left: 210, right: 210, top: 270, display: 'grid', gap: 18}}>
      <MappingLane fromIcon={Gavel} from="审判人员" detail="陪审员、书记员、执行员" toIcon={Landmark} to="院长决定" tone="teal" delay={24} />
      <MappingLane fromIcon={Users} from="其他人员" detail="法助、技术、翻译、鉴定、勘验" toIcon={UserCheck} to="审判长或独任审判员" tone="gold" delay={46} />
      <MappingLane fromIcon={Landmark} from="院长本人" detail="担任审判长或独任审判员" toIcon={Users} to="审判委员会" tone="red" delay={68} />
    </div>
    <Enter delay={98} style={{position: 'absolute', left: 510, right: 510, top: 828, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18, color: colors.muted}}><ShieldCheck size={36} color={colors.teal} /><span style={{fontSize: 24, fontWeight: 850}}>合议庭成员 + 书记员</span><ArrowRight size={30} /><span style={{color: colors.teal, fontSize: 26, fontWeight: 950}}>优先记“院长”</span></Enter>
  </Page>
);

const Remedy = () => (
  <Page number="06" eyebrow="第六步：救济与后果" title="可复议一次，不上诉；程序继续" accent="red">
    <Card
      title={<span style={{display: 'flex', alignItems: 'center', gap: 12}}><FileX size={30} strokeWidth={2.5} /> 驳回回避申请</span>}
      tone="red"
      delay={24}
      style={{position: 'absolute', left: 112, top: 274, width: 806, height: 330}}
    >
      <div style={{display: 'flex', alignItems: 'center'}}>
        <ConceptNode icon={User} label="申请人" note="对驳回决定不服" tone="red" />
        <FlowArrow tone="red" />
        <ConceptNode icon={RotateCcw} label="复议" note="仅可 1 次" tone="red" />
      </div>
      <div style={{display: 'flex', alignItems: 'center', gap: 15, marginTop: 25, paddingTop: 20, borderTop: `1px solid ${colors.line}`}}>
        <Ban size={34} color={colors.red} strokeWidth={2.5} />
        <span style={{fontSize: 22, fontWeight: 850}}>被决定回避的人</span>
        <ArrowRight size={30} color={colors.red} strokeWidth={2.5} />
        <span style={{color: colors.red, fontSize: 24, fontWeight: 900}}>不得申请复议</span>
      </div>
    </Card>
    <Card
      title={<span style={{display: 'flex', alignItems: 'center', gap: 12}}><Users size={30} strokeWidth={2.5} /> 更换审判人员</span>}
      tone="teal"
      delay={46}
      style={{position: 'absolute', left: 1002, top: 274, width: 806, height: 330}}
    >
      <div style={{display: 'flex', alignItems: 'center'}}>
        <ConceptNode icon={Users} label="人员更换" note="回避决定生效" tone="teal" />
        <FlowArrow tone="teal" />
        <ConceptNode icon={Play} label="程序继续" note="不因更换而重启" tone="teal" />
      </div>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginTop: 25}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 13, color: colors.teal, fontSize: 22, fontWeight: 900}}><CheckCircle2 size={34} strokeWidth={2.5} />既有程序有效</div>
        <div style={{display: 'flex', alignItems: 'center', gap: 13, color: colors.teal, fontSize: 22, fontWeight: 900}}><RefreshCcw size={34} strokeWidth={2.5} />无需重新进行</div>
      </div>
    </Card>
    <Enter delay={78} style={{position: 'absolute', left: 312, right: 312, top: 700, height: 128, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 26, backgroundColor: colors.redSoft, border: `2px solid ${colors.red}`, borderRadius: 12}}>
      <FileWarning size={42} color={colors.red} strokeWidth={2.5} />
      <span style={{color: colors.muted, fontSize: 24, fontWeight: 850}}>救济辨析</span>
      <span style={{display: 'flex', alignItems: 'center', gap: 10, color: colors.red, fontSize: 32, fontWeight: 950}}><RotateCcw size={38} strokeWidth={2.7} />复议</span>
      <span style={{fontSize: 40, fontWeight: 900}}>≠</span>
      <span style={{display: 'flex', alignItems: 'center', gap: 10, color: colors.ink, fontSize: 32, fontWeight: 950}}><Scale size={38} strokeWidth={2.7} />上诉</span>
    </Enter>
  </Page>
);

const scenes = {scope: <Scope />, grounds: <Grounds />, application: <Application />, pendingEffect: <PendingEffect />, decision: <Decision />, remedy: <Remedy />};

export const RecusalProcedurePath = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{backgroundColor: colors.canvas, overflow: 'hidden'}}>
      {sequenceEntries.map(([name, scene]) => <Sequence key={name} from={scene.start} durationInFrames={scene.duration} name={name} layout="none">{scenes[name]}</Sequence>)}
      <div style={{position: 'absolute', left: 92, right: 92, bottom: 50, height: 3, backgroundColor: colors.line}}><div style={{width: `${interpolate(frame, [0, DURATION_FRAMES - 1], [0, 100], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}%`, height: '100%', backgroundColor: colors.ink}} /></div>
    </AbsoluteFill>
  );
};
