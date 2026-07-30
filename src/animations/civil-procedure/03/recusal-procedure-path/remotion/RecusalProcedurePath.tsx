import React, {type CSSProperties, type ReactNode} from 'react';
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

const Card = ({title, children, tone = 'teal', style, delay}: {readonly title: string; readonly children: ReactNode; readonly tone?: keyof Pick<typeof colors, 'teal' | 'gold' | 'red' | 'blue'>; readonly style?: CSSProperties; readonly delay: number}) => (
  <Enter delay={delay} style={{...style, boxSizing: 'border-box'}}>
    <section style={{height: '100%', boxSizing: 'border-box', padding: '27px 31px', backgroundColor: colors.paper, border: `2px solid ${colors[tone]}`, borderRadius: 12, boxShadow: '0 16px 38px rgba(23, 34, 30, 0.08)'}}>
      <div style={{color: colors[tone], fontSize: 25, fontWeight: 900, lineHeight: 1.2}}>{title}</div>
      <div style={{marginTop: 15, color: colors.ink, fontSize: 27, fontWeight: 700, lineHeight: 1.43}}>{children}</div>
    </section>
  </Enter>
);

const Rule = ({children, tone = 'teal'}: {readonly children: ReactNode; readonly tone?: keyof Pick<typeof colors, 'teal' | 'gold' | 'red' | 'blue'>}) => <span style={{display: 'inline-block', padding: '2px 9px 4px', color: colors[tone], backgroundColor: colors[`${tone}Soft`], borderBottom: `4px solid ${colors[tone]}`, fontWeight: 900}}>{children}</span>;

const Scope = () => (
  <Page number="01" eyebrow="第一步：看对象" title="谁需要回避？关键是中立期待" accent="teal">
    <Enter delay={25} style={{position: 'absolute', left: 112, right: 112, top: 282, padding: '30px 42px', backgroundColor: colors.tealSoft, borderLeft: `10px solid ${colors.teal}`, fontSize: 32, fontWeight: 850}}>
      期待其在本案中保持 <Rule>中立</Rule> 的人员，才进入回避制度的判断。
    </Enter>
    <Card title="适用回避" tone="teal" delay={48} style={{position: 'absolute', left: 112, top: 478, width: 1090, height: 286}}><Rule>审判人员</Rule>（含陪审员）、法官助理、书记员、司法技术人员、翻译人员、鉴定人、勘验人</Card>
    <Card title="不适用回避" tone="gold" delay={68} style={{position: 'absolute', left: 1260, top: 478, width: 544, height: 286}}>诉讼代理人、专家辅助人；证人虽被期待中立，但因具有 <Rule tone="gold">不可替代性</Rule>，也不适用回避。</Card>
  </Page>
);

const Grounds = () => (
  <Page number="02" eyebrow="第二步：看事由" title="三组法定原因，外加一项例外" accent="red">
    <div style={{position: 'absolute', left: 112, right: 112, top: 294, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24}}>
      <Card title="01 利害关系" tone="red" delay={25} style={{height: 355}}>本人、近亲属与案件有利害关系；曾担任本案证人、鉴定人、代理人等；其他可能影响公正审理的关系。</Card>
      <Card title="02 不当行为" tone="gold" delay={45} style={{height: 355}}>请客送礼、推荐代理人或律师、违反规定会见当事人或代理人等。</Card>
      <Card title="03 前序程序" tone="blue" delay={65} style={{height: 355}}>在一个审判程序中参与过本案审判工作的审判人员，<Rule tone="blue">不得再参与</Rule>该案其他程序。</Card>
    </div>
    <Enter delay={96} style={{position: 'absolute', left: 206, right: 206, top: 764, padding: '28px 38px', backgroundColor: colors.blueSoft, border: `2px solid ${colors.blue}`, borderRadius: 12, fontSize: 29, fontWeight: 850}}>
      例外：发回重审案件再次进入二审时，原二审程序中审判人员 <Rule tone="blue">不受前序程序限制</Rule>。
    </Enter>
  </Page>
);

const Application = () => (
  <Page number="03" eyebrow="第三步：提出申请" title="有理由，且不晚于法庭辩论终结" accent="blue">
    <div style={{position: 'absolute', left: 112, right: 112, top: 326, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 26}}>
      <Card title="形式" tone="blue" delay={24} style={{height: 300}}>口头或书面均可，但申请必须 <Rule tone="blue">说明理由</Rule></Card>
      <Card title="通常时间" tone="teal" delay={44} style={{height: 300}}>案件 <Rule>开始审理时</Rule> 提出</Card>
      <Card title="事后得知原因" tone="red" delay={64} style={{height: 300}}>开始审理后才知道回避事由 → 可在 <Rule tone="red">法庭辩论终结前</Rule> 提出</Card>
    </div>
    <Enter delay={92} style={{position: 'absolute', left: 355, right: 355, top: 774, textAlign: 'center', color: colors.red, fontSize: 35, fontWeight: 900}}>最迟时间点：法庭辩论终结前</Enter>
  </Page>
);

const PendingEffect = () => (
  <Page number="04" eyebrow="第四步：等待决定" title="审查期间暂停，复议期间不停" accent="gold">
    <Card title="申请提出后 → 回避决定作出前" tone="red" delay={25} style={{position: 'absolute', left: 112, top: 320, width: 806, height: 330}}><Rule tone="red">暂停</Rule>本案工作。例外：案件需要采取 <Rule tone="gold">紧急措施</Rule> 时，不暂停。</Card>
    <Card title="对驳回申请提出复议后" tone="blue" delay={48} style={{position: 'absolute', left: 1002, top: 320, width: 806, height: 330}}>复议期间，被申请回避人员 <Rule tone="blue">不停止工作</Rule>。</Card>
    <Enter delay={78} style={{position: 'absolute', left: 326, right: 326, top: 774, padding: '24px 36px', textAlign: 'center', backgroundColor: colors.goldSoft, borderBottom: `7px solid ${colors.gold}`, fontSize: 31, fontWeight: 900}}>区分两个阶段，答案恰好相反。</Enter>
  </Page>
);

const Decision = () => (
  <Page number="05" eyebrow="第五步：谁来决定" title="先看被申请回避人的身份" accent="teal">
    <div style={{position: 'absolute', left: 112, right: 112, top: 292, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 25}}>
      <Card title="审判人员" tone="teal" delay={24} style={{height: 342}}>含人民陪审员；以及适用审判人员规则的书记员、执行员<br /><br />→ <Rule>院长决定</Rule></Card>
      <Card title="其他人员" tone="gold" delay={46} style={{height: 342}}>法官助理、司法技术人员、翻译人员、鉴定人、勘验人<br /><br />→ <Rule tone="gold">审判长或独任审判员</Rule>决定</Card>
      <Card title="院长本人" tone="red" delay={68} style={{height: 342}}>院长担任审判长或独任审判员时<br /><br />→ <Rule tone="red">审判委员会</Rule>决定</Card>
    </div>
    <Enter delay={98} style={{position: 'absolute', left: 400, right: 400, top: 808, textAlign: 'center', color: colors.muted, fontSize: 27, fontWeight: 850}}>记忆锚点：合议庭成员 + 书记员，优先记“院长”。</Enter>
  </Page>
);

const Remedy = () => (
  <Page number="06" eyebrow="第六步：救济与后果" title="可复议一次，不上诉；程序继续" accent="red">
    <Card title="对“驳回回避申请”不服" tone="red" delay={24} style={{position: 'absolute', left: 112, top: 292, width: 806, height: 318}}>申请人可 <Rule tone="red">复议一次</Rule>。被决定回避的人，对回避决定不能申请复议。</Card>
    <Card title="回避导致更换审判人员" tone="teal" delay={46} style={{position: 'absolute', left: 1002, top: 292, width: 806, height: 318}}>诉讼程序 <Rule>继续进行</Rule>；已经完成的诉讼程序 <Rule>依然有效</Rule>，无需重新进行。</Card>
    <Enter delay={78} style={{position: 'absolute', left: 312, right: 312, top: 752, padding: '30px 40px', textAlign: 'center', backgroundColor: colors.redSoft, border: `2px solid ${colors.red}`, borderRadius: 12, fontSize: 35, fontWeight: 900}}>文书与救济陷阱：对驳回决定不服 → 复议，不是上诉。</Enter>
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
