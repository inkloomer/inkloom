import type {ReactNode} from 'react';
import {
  BadgeCheck,
  BookOpen,
  Brackets,
  FileSignature,
  Handshake,
  RefreshCw,
  Route,
  Scissors,
  Send,
  Shield,
  Wrench,
} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence, createMotionPrimitives} from '../../../../shared/remotion-runtime';
import {SCENES, toSourceFrame} from './storyboard';

const C = {
  canvas: '#f4f1e8',
  paper: '#fffdf7',
  ink: '#1e2925',
  green: '#1f6f5c',
  red: '#c34835',
  blue: '#2b5f93',
  brass: '#d2a739',
  pale: '#e6e0cf',
};
const PLAYER_CONTROL_SAFE_BOTTOM = 160;
const {Enter, MaskedReveal} = createMotionPrimitives(toSourceFrame);

const Shell = ({code, title, subtitle, children}: {code: string; title: string; subtitle: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{backgroundColor: C.canvas, color: C.ink, overflow: 'hidden'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: `linear-gradient(90deg,${C.ink}0b 1px,transparent 1px),linear-gradient(${C.ink}0b 1px,transparent 1px)`, backgroundSize: '64px 64px'}} />
    <div style={{position: 'absolute', left: 78, top: 44, width: 116, height: 74, display: 'grid', placeItems: 'center', background: C.ink, color: C.paper, fontSize: 27, fontWeight: 900, clipPath: 'polygon(0 0,88% 0,100% 20%,100% 100%,0 100%)'}}>{code}</div>
    <MaskedReveal style={{position: 'absolute', left: 226, right: 76, top: 38, fontSize: 52, fontWeight: 900, lineHeight: 1.15}}>{title}</MaskedReveal>
    <div style={{position: 'absolute', left: 228, top: 108, fontSize: 23, fontWeight: 700, color: C.green, borderBottom: `3px solid ${C.brass}`, paddingBottom: 5}}>{subtitle}</div>
    <div style={{position: 'absolute', left: 76, right: 76, top: 154, height: 6, background: `linear-gradient(90deg,${C.green},${C.brass} 45%,${C.red} 72%,${C.blue})`}} />
    <div style={{position: 'absolute', left: 76, right: 76, top: 184, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

const Folio = ({index, article, title, detail, icon, tone = 'green', ...data}: {index: number; article: string; title: string; detail: string; icon: ReactNode; tone?: 'green' | 'red' | 'blue' | 'brass'; 'data-final-knowledge': string}) => {
  const color = C[tone];
  return (
    <Enter delay={18 + index * 16} from={index % 2 === 0 ? 'left' : 'right'} style={{height: '100%'}}>
    <div {...data} data-audit-boundary="true" style={{height: '100%', background: C.paper, border: `3px solid ${color}`, boxShadow: `10px 12px 0 ${color}1f`, display: 'grid', gridTemplateRows: '46px auto 1fr', padding: '20px 23px 24px', clipPath: index % 2 === 0 ? 'polygon(0 0,96% 0,100% 8%,100% 100%,0 100%)' : 'polygon(4% 0,100% 0,100% 100%,0 100%,0 8%)'}}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', color, fontSize: 21, fontWeight: 900}}><span>{article}</span><span style={{width: 42, height: 42, display: 'grid', placeItems: 'center', background: color, color: C.paper}}>{icon}</span></div>
        <div style={{fontSize: 31, lineHeight: 1.18, fontWeight: 900, paddingTop: 13, paddingBottom: 10, borderBottom: `3px solid ${C.brass}`}}>{title}</div>
        <div style={{fontSize: 23, lineHeight: 1.48, fontWeight: 650, paddingTop: 12}}>{detail}</div>
      </div>
    </Enter>
  );
};

const Binding = ({progress}: {progress: number}) => (
  <div data-stateful-source="contract-codex-spine" data-stateful-terminal="contract-codex-spine" style={{position: 'absolute', left: '50%', top: 18, bottom: 18, width: 12, translate: '-50% 0', background: C.ink, scale: `1 ${progress}`, transformOrigin: 'center top'}}>
    {[0, 1, 2, 3, 4, 5].map((index) => <div key={index} style={{position: 'absolute', left: -10, top: 48 + index * 100, width: 32, height: 8, background: index % 2 ? C.red : C.brass}} />)}
  </div>
);

export const ScopeAndChapterSpineScene = () => {
  const progress = interpolate(toSourceFrame(useCurrentFrame()), [10, 92], [0, 1], CLAMP);
  const chapters = ['订立', '效力', '履行', '保全', '变更转让', '终止', '违约责任'];
  return <Shell code="C.463" title="合同编通则：一部完整的合同生命周期" subtitle="第 463—594 条 · 从合同边界到违约救济">
    <div data-layout="scope-and-chapter-spine-codex-panorama" data-visual-anchor="boundary" data-visual-grammar="contract-scope,contract-definition,party-relativity,unnamed-contract,eight-chapter-spine" data-text-treatments="label-block,soft-highlight,thin-underline" data-focal-rule="contract-general-provisions-scope" data-focal-channels="enclosure,icon,spatial" style={{position: 'absolute', inset: 0}}>
      <Binding progress={progress} />
      <div style={{position: 'absolute', inset: '18px 52% 18px 18px', display: 'grid', gridTemplateRows: 'repeat(4,minmax(0,1fr))', gap: 14}}>
        <Folio index={0} data-final-knowledge="contract-generated-relations" article="463" title="调整范围" detail="调整因合同产生的民事关系" icon={<Brackets size={28}/>} />
        <Folio index={1} data-final-knowledge="agreement-definition" article="464" title="合同定义" detail="民事主体设立、变更、终止民事法律关系的协议" icon={<BookOpen size={28}/>} tone="blue" />
        <Folio index={2} data-final-knowledge="relative-binding-force" article="465" title="相对性" detail="依法成立的合同原则上仅约束当事人" icon={<Shield size={28}/>} tone="red" />
        <Folio index={3} data-final-knowledge="unnamed-contract-application" article="467—468" title="补充适用" detail="无名合同先用通则，可参照最相类似合同；非合同之债亦可补充适用" icon={<Route size={28}/>} tone="brass" />
      </div>
      <div data-final-knowledge="eight-general-provisions-chapters" style={{position: 'absolute', inset: '34px 18px 34px 53%', display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', gap: 14, alignContent: 'center'}}>
        <div style={{gridColumn: '1 / 3', fontSize: 29, fontWeight: 900, color: C.red, borderLeft: `9px solid ${C.red}`, paddingLeft: 18}}>第一章：一般规定</div>
        {chapters.map((chapter, index) => <Enter key={chapter} delay={42 + index * 12} from="right"><div style={{minHeight: 84, display: 'grid', placeItems: 'center', background: index % 3 === 0 ? C.green : index % 3 === 1 ? C.blue : C.red, color: C.paper, fontSize: 27, fontWeight: 900, borderBottom: `8px solid ${C.brass}`}}>{index + 2}. {chapter}</div></Enter>)}
      </div>
    </div>
  </Shell>;
};

export const FormationAndEffectScene = () => {
  const progress = interpolate(toSourceFrame(useCurrentFrame()), [14, 110], [0, 1], CLAMP);
  return <Shell code="C.469" title="订立与效力：意思合致后还要通过效力门" subtitle="第 469—508 条 · 要约承诺、格式条款、报批与权限">
    <div data-layout="formation-and-effect-folded-route" data-visual-anchor="flow-path" data-visual-grammar="offer,acceptance,formation,format-terms,effect-gates,dispute-clause-survival" data-text-treatments="thin-underline,label-block,stamp" data-focal-rule="formation-effect-route" data-focal-channels="connector,icon,motion" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', left: 76, right: 76, top: '47%', height: 10, background: C.pale}}><div style={{height: '100%', width: `${progress * 100}%`, background: `linear-gradient(90deg,${C.green},${C.brass},${C.red})`}} /></div>
      <div style={{position: 'absolute', inset: '34px 20px', display: 'grid', gridTemplateColumns: 'repeat(6,minmax(0,1fr))', gap: 18, alignItems: 'center'}}>
        <Folio index={0} data-final-knowledge="offer-and-acceptance" article="471—478" title="要约" detail="内容具体确定，表明承诺即受约束；区分要约邀请、撤回、撤销与失效" icon={<Send size={27}/>} />
        <Folio index={1} data-final-knowledge="contract-formation" article="479—489" title="承诺" detail="在期限内到达，内容一致；实质变更构成新要约" icon={<BadgeCheck size={27}/>} tone="blue" />
        <Folio index={2} data-final-knowledge="form-and-standard-terms" article="490—495" title="成立" detail="签名盖章按印、履行治愈、数据电文、预约合同共同定位成立时地" icon={<FileSignature size={27}/>} tone="brass" />
        <Folio index={3} data-final-knowledge="effectiveness-gate" article="496—501" title="订立责任" detail="格式条款提示说明、不利解释；缔约过失与保密义务" icon={<Shield size={27}/>} tone="red" />
        <Folio index={4} data-final-knowledge="ratification-and-authority" article="502—506" title="效力门" detail="依法成立原则生效；报批义务独立，无权代理可追认，越权代表保护善意相对人" icon={<Brackets size={27}/>} tone="green" />
        <Folio index={5} data-final-knowledge="dispute-clause-independence" article="507—508" title="条款存续" detail="合同不生效、无效、被撤销或终止，不影响解决争议条款" icon={<Route size={27}/>} tone="blue" />
      </div>
      <div data-stateful-source="contract-document" data-stateful-terminal="contract-document" style={{position: 'absolute', left: '44.7%', top: '43.2%', width: 118, height: 66, display: 'grid', placeItems: 'center', background: C.ink, color: C.paper, fontSize: 25, fontWeight: 900, border: `5px solid ${C.brass}`}}>合同</div>
    </div>
  </Shell>;
};

export const PerformanceAndPreservationScene = () => {
  const progress = interpolate(toSourceFrame(useCurrentFrame()), [14, 118], [0, 1], CLAMP);
  return <Shell code="C.509" title="履行与保全：让债的流动不中断、不被排空" subtitle="第 509—542 条 · 履行规则、抗辩、第三人清偿、代位与撤销">
    <div data-layout="performance-and-preservation-obligation-current" data-visual-anchor="flow-target" data-visual-grammar="full-performance,gap-filling,performance-defenses,third-party-performance,subrogation,revocation" data-text-treatments="label-block,soft-highlight,external-negation" data-focal-rule="performance-preservation-current" data-focal-channels="connector,icon,contrast" style={{position: 'absolute', inset: 0}}>
      <div data-stateful-source="obligation-current" data-stateful-terminal="obligation-current" style={{position: 'absolute', left: 110, right: 110, top: '47%', height: 18, background: C.pale, border: `3px solid ${C.ink}`}}><div style={{height: '100%', width: `${progress * 100}%`, background: `linear-gradient(90deg,${C.blue},${C.green} 55%,${C.brass})`}} /></div>
      <div style={{position: 'absolute', inset: '26px 34px', display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gridTemplateRows: 'repeat(2,minmax(0,1fr))', gap: 26}}>
        <Folio index={0} data-final-knowledge="full-and-good-faith-performance" article="509" title="全面履行" detail="按约定全面履行，依诚信履行通知、协助、保密等附随义务" icon={<Handshake size={28}/>} />
        <Folio index={1} data-final-knowledge="unclear-term-gap-filling" article="510—521" title="履行补缺" detail="先协议补充，再依相关条款、交易习惯与法定顺序确定" icon={<Route size={28}/>} tone="blue" />
        <Folio index={2} data-final-knowledge="third-party-performance-system" article="522—524" title="涉他履行" detail="向第三人履行、由第三人履行，以及有合法利益的第三人代为清偿" icon={<Handshake size={28}/>} tone="brass" />
        <Folio index={3} data-final-knowledge="performance-defense-system" article="525—528" title="履行抗辩" detail="同时履行、先履行与不安抗辩，维持双务合同的交换平衡" icon={<Shield size={28}/>} tone="red" />
        <Folio index={4} data-final-knowledge="creditor-subrogation" article="535—537" title="代位权" detail="债务人怠于行权影响债权实现时，债权人以自己名义代位行使" icon={<Route size={28}/>} tone="green" />
        <Folio index={5} data-final-knowledge="creditor-revocation" article="538—542" title="撤销权" detail="无偿处分或恶意不合理交易影响债权时，在责任财产范围内撤销" icon={<Scissors size={28}/>} tone="red" />
      </div>
    </div>
  </Shell>;
};

export const ChangeTerminationAndBreachScene = () => (
  <Shell code="C.543" title="变更、终止与违约：合同退出时仍要清算风险" subtitle="第 543—594 条 · 转让边界、解除事由、后合同义务与违约救济">
    <div data-layout="change-termination-and-breach-lifecycle-fan" data-visual-anchor="document-fork" data-visual-grammar="contract-change,claim-transfer,debt-transfer,termination-causes,settlement-cleanup,breach-remedies" data-text-treatments="label-block,stamp,external-negation" data-focal-rule="contract-exit-risk-cleanup" data-focal-channels="connector,enclosure,contrast" style={{position: 'absolute', inset: 0}}>
      <div data-stateful-source="contract-document" data-stateful-terminal="contract-document" style={{position: 'absolute', left: '50%', top: '50%', translate: '-50% -50%', width: 260, height: 154, background: C.ink, color: C.paper, display: 'grid', placeItems: 'center', fontSize: 37, fontWeight: 900, border: `8px solid ${C.brass}`, zIndex: 2}}>合同关系</div>
      <div style={{position: 'absolute', left: '50%', top: 36, bottom: 36, width: 8, translate: '-50% 0', background: C.brass}} />
      <div style={{position: 'absolute', left: 36, right: 36, top: '50%', height: 8, translate: '0 -50%', background: C.brass}} />
      <div style={{position: 'absolute', inset: '22px 30px', display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gridTemplateRows: 'repeat(2,minmax(0,1fr))', gap: '168px 120px'}}>
        <Folio index={0} data-final-knowledge="contract-change" article="543—544" title="合同变更" detail="协商一致可变更；变更内容约定不明的，推定未变更" icon={<RefreshCw size={27}/>} />
        <Folio index={1} data-final-knowledge="claim-and-debt-transfer" article="545—556" title="债权债务转让" detail="区分债权转让通知、债务转移同意与合同权利义务一并转让" icon={<Route size={27}/>} tone="blue" />
        <Folio index={2} data-final-knowledge="termination-causes" article="557—565" title="终止事由" detail="履行、抵销、提存、免除、混同、协议解除与法定解除" icon={<Scissors size={27}/>} tone="red" />
        <Folio index={3} data-final-knowledge="termination-cleanup" article="566—576" title="终止清理" detail="解除后恢复原状、采取补救、赔偿损失，结算和清理条款继续有效" icon={<Wrench size={27}/>} tone="brass" />
        <Folio index={4} data-final-knowledge="breach-remedy-system" article="577—588" title="基本违约救济" detail="继续履行、补救、赔偿损失；可预见规则、减损义务与双方违约" icon={<Wrench size={27}/>} tone="green" />
        <Folio index={5} data-final-knowledge="penalty-deposit-risk" article="585—594" title="金钱化担保与风险" detail="违约金可依请求调整，定金与违约金竞合时择一，风险分配不得违反诚信" icon={<Shield size={27}/>} tone="red" />
      </div>
    </div>
  </Shell>
);

export const ContractGeneralProvisionsAtlas = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-scope-and-chapter-spine" start={SCENES.scopeAndChapterSpine.start} duration={SCENES.scopeAndChapterSpine.duration}><ScopeAndChapterSpineScene /></TimelineSequence>
    <TimelineSequence name="02-formation-and-effect" start={SCENES.formationAndEffect.start} duration={SCENES.formationAndEffect.duration}><FormationAndEffectScene /></TimelineSequence>
    <TimelineSequence name="03-performance-and-preservation" start={SCENES.performanceAndPreservation.start} duration={SCENES.performanceAndPreservation.duration}><PerformanceAndPreservationScene /></TimelineSequence>
    <TimelineSequence name="04-change-termination-and-breach" start={SCENES.changeTerminationAndBreach.start} duration={SCENES.changeTerminationAndBreach.duration}><ChangeTerminationAndBreachScene /></TimelineSequence>
  </AbsoluteFill>
);
