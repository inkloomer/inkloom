import type {CSSProperties,ReactNode} from 'react';
import {Clock3, FileSearch, Gavel, GitMerge, ListChecks, PauseCircle} from 'lucide-react';
import {AbsoluteFill,interpolate,useCurrentFrame} from 'remotion';
import {CLAMP,TimelineSequence,createMotionPrimitives} from '../../../../shared/remotion-runtime';
import {SCENES,toSourceFrame} from './storyboard';

const C={bg:'#f4efe5',ink:'#18242b',red:'#b43b35',teal:'#176b73',gold:'#d89b2b',paper:'#fffdf7'};
const STYLE={"backgroundImage":"repeating-linear-gradient(0deg,transparent 0 78px,#18242b0c 79px 80px)","backgroundSize":"100% 80px","codeLeft":72,"codeTop":44,"codeWidth":126,"codeHeight":76,"codeRadius":0,"codeRotate":"0deg","titleLeft":230,"titleTop":48,"titleRight":72,"titleSize":48,"titleAlign":"left","ruleLeft":72,"ruleRight":72,"ruleTop":142,"contentTop":174,"nodeRadius":0,"nodeBorderWidth":4,"nodeShadow":"10px 10px 0 #18242b20","nodeClip":"none","nodePadding":"22px 24px","iconRadius":0} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;
const {Enter,MaskedReveal}=createMotionPrimitives(toSourceFrame);
type Anchor='boundary'|'comparison-axis'|'concept-icon'|'document-fork'|'flow-path'|'flow-target'|'role-pair'|'timeline-gate'|'typographic-sequence';

const Shell=({code,title,children}:{code:string;title:string;children:ReactNode})=><AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{backgroundColor:C.bg,color:C.ink,overflow:'hidden'}}>
  <div style={{position:'absolute',inset:0,backgroundImage:STYLE.backgroundImage,backgroundSize:STYLE.backgroundSize}}/>
  <div style={{position:'absolute',left:STYLE.codeLeft,top:STYLE.codeTop,width:STYLE.codeWidth,height:STYLE.codeHeight,display:'grid',placeItems:'center',backgroundColor:C.ink,color:C.paper,fontSize:26,fontWeight:900,borderRadius:STYLE.codeRadius,rotate:STYLE.codeRotate}}>{code}</div>
  <MaskedReveal style={{position:'absolute',left:STYLE.titleLeft,top:STYLE.titleTop,right:STYLE.titleRight,fontSize:STYLE.titleSize,fontWeight:900,lineHeight:1.2,textAlign:STYLE.titleAlign}}>{title}</MaskedReveal>
  <div style={{position:'absolute',left:STYLE.ruleLeft,right:STYLE.ruleRight,top:STYLE.ruleTop,height:6,background:`linear-gradient(90deg,${C.red},${C.gold} 48%,${C.teal})`}}/>
  <div style={{position:'absolute',left:72,right:72,top:STYLE.contentTop,bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
</AbsoluteFill>;

const anchorStyle=(anchor:Anchor,count:number):CSSProperties=>({
  position:'absolute',inset:0,display:'grid',gap:24,alignItems:'stretch',
  gridTemplateColumns:anchor==='typographic-sequence'?'1fr':anchor==='comparison-axis'||anchor==='role-pair'||anchor==='document-fork'?'repeat(2,minmax(0,1fr))':count>4?'repeat(3,minmax(0,1fr))':'repeat('+Math.min(count,4)+',minmax(0,1fr))',
  gridAutoRows:'minmax(0,1fr)',padding:anchor==='boundary'?'40px 52px':'32px 28px',
});

const Diagram=({anchor,count,children}:{anchor:Anchor;count:number;children:ReactNode})=>{const frame=toSourceFrame(useCurrentFrame());const p=interpolate(frame,[12,92],[0,1],CLAMP);return <div style={{position:'absolute',inset:0}}>
  <div style={{position:'absolute',left:anchor==='timeline-gate'||anchor==='flow-path'?40:'50%',right:anchor==='timeline-gate'||anchor==='flow-path'?40:undefined,top:anchor==='timeline-gate'||anchor==='flow-path'?'50%':34,bottom:anchor==='boundary'?34:undefined,width:anchor==='boundary'?'calc(100% - 100px)':anchor==='comparison-axis'?'6px':undefined,height:anchor==='boundary'?'calc(100% - 68px)':anchor==='timeline-gate'||anchor==='flow-path'?'6px':anchor==='comparison-axis'?'calc(100% - 68px)':'8px',border:anchor==='boundary'?'5px solid '+C.teal:undefined,backgroundColor:anchor==='boundary'?undefined:C.gold,borderRadius:STYLE.nodeRadius,scale:anchor==='timeline-gate'||anchor==='flow-path'?p+' 1':'1 '+p,transformOrigin:'left center',opacity:.8}}/>
  {anchor==='document-fork'?<><div style={{position:'absolute',left:'24%',right:'24%',top:'50%',height:5,backgroundColor:C.red,scale:p+' 1',transformOrigin:'center'}}/><div style={{position:'absolute',left:'50%',top:'24%',bottom:'24%',width:5,backgroundColor:C.teal,scale:'1 '+p,transformOrigin:'center'}}/></>:null}
  {anchor==='flow-target'?<><div style={{position:'absolute',left:'18%',top:'25%',width:'64%',height:5,backgroundColor:C.red,rotate:'18deg',scale:p+' 1'}}/><div style={{position:'absolute',left:'18%',bottom:'25%',width:'64%',height:5,backgroundColor:C.teal,rotate:'-18deg',scale:p+' 1'}}/></>:null}
  <div style={anchorStyle(anchor,count)}>{children}</div>
  </div>};

const Knowledge=({index,icon,label,detail,...data}:{index:number;icon:ReactNode;label:string;detail:string;'data-final-knowledge':string})=><Enter delay={24+index*18} from={index%2===0?'left':'right'} style={{height:'100%'}}><div {...data} data-audit-boundary="true" style={{height:'100%',minHeight:112,backgroundColor:index%3===0?C.paper:index%3===1?C.teal+'12':C.gold+'18',border:STYLE.nodeBorderWidth+'px solid '+(index%3===0?C.ink:index%3===1?C.teal:C.gold),boxShadow:STYLE.nodeShadow,padding:STYLE.nodePadding,borderRadius:STYLE.nodeRadius,clipPath:STYLE.nodeClip,display:'grid',gridTemplateColumns:'48px minmax(0,1fr)',gridTemplateRows:'auto 1fr',columnGap:16,alignContent:'start'}}>
  <div style={{gridRow:'1 / 3',width:46,height:46,display:'grid',placeItems:'center',backgroundColor:index%2===0?C.red:C.teal,color:C.paper,borderRadius:STYLE.iconRadius}}>{icon}</div>
  <div style={{fontSize:30,fontWeight:900,lineHeight:1.18,borderBottom:'3px solid '+(index%2===0?C.gold:C.red),paddingBottom:8}}>{label}</div>
  <div style={{fontSize:23,fontWeight:650,lineHeight:1.5,paddingTop:10,whiteSpace:'pre-wrap'}}>{detail.replaceAll('｜',' · ')}</div>
  </div></Enter>;

export const RetrialScopeAndTriggersScene=()=> <Shell code="20.1" title="再审对象与三类启动主体"><div data-layout="retrial-scope-and-triggers-direct-boundary-diagram" data-visual-anchor="boundary" data-visual-grammar="eligible-objects,excluded-matters,court-trigger,procuratorate-trigger,party-application" data-text-treatments="label-block,external-negation,stamp" data-focal-rule="retrial-scope-and-triggers-rule" data-focal-channels="icon,enclosure,contrast" style={{position:'absolute',inset:0}}>
      <Diagram anchor="boundary" count={5}>
        <Knowledge data-final-knowledge="effective-instruments" index={0} icon={<Gavel size={34}/>} label="再审对象" detail="生效判决｜特定裁定｜调解书"/>
        <Knowledge data-final-knowledge="excluded-proceedings" index={1} icon={<Gavel size={34}/>} label="程序排除" detail="特别程序、督促、公示催告等非讼程序不适用"/>
        <Knowledge data-final-knowledge="marriage-boundary" index={2} icon={<Gavel size={34}/>} label="婚姻边界" detail="解除婚姻关系不得申请；财产、抚养部分可再审"/>
        <Knowledge data-final-knowledge="court-and-procuratorate" index={3} icon={<Gavel size={34}/>} label="公权启动" detail="本院审委会 / 上级法院；抗诉“上抗下”、检察建议同级"/>
        <Knowledge data-final-knowledge="party-application" index={4} icon={<Gavel size={34}/>} label="当事人申请" detail="原则向上一级法院；人数众多或双方公民可选原审法院"/>
      </Diagram>
    </div></Shell>;

export const ThirteenStatutoryGroundsScene=()=> <Shell code="20.2" title="13 项再审事由的四组检索"><div data-layout="thirteen-statutory-grounds-direct-comparison-axis-diagram" data-visual-anchor="comparison-axis" data-visual-grammar="evidence-facts,law-error,procedure-error,judicial-misconduct" data-text-treatments="soft-highlight,label-block,thin-underline" data-focal-rule="thirteen-statutory-grounds-rule" data-focal-channels="icon,spatial,contrast" style={{position:'absolute',inset:0}}>
      <Diagram anchor="comparison-axis" count={5}>
        <Knowledge data-final-knowledge="grounds-one-five" index={0} icon={<ListChecks size={34}/>} label="1—5 证据与事实" detail="新证据；基本事实无证；主证伪造；主证未质证；法院未依申请调查"/>
        <Knowledge data-final-knowledge="ground-six" index={1} icon={<ListChecks size={34}/>} label="6 法律错误" detail="原判决、裁定适用法律确有错误"/>
        <Knowledge data-final-knowledge="grounds-seven-twelve" index={2} icon={<ListChecks size={34}/>} label="7—12 程序违法" detail="组织/回避；代理/参加；辩论权；违法缺席；漏超请求；依据文书撤变"/>
        <Knowledge data-final-knowledge="ground-thirteen" index={3} icon={<ListChecks size={34}/>} label="13 审判人员行为" detail="贪污受贿｜徇私舞弊｜枉法裁判"/>
        <Knowledge data-final-knowledge="protest-effect" index={4} icon={<ListChecks size={34}/>} label="抗诉效果" detail="接受抗诉法院 30 日内裁定再审"/>
      </Diagram>
    </div></Shell>;

export const SixMonthApplicationClockScene=()=> <Shell code="20.3" title="6 个月申请时钟与四例外"><div data-layout="six-month-application-clock-direct-timeline-gate-diagram" data-visual-anchor="timeline-gate" data-visual-grammar="default-clock,knowledge-clock,four-exceptions,filing-forum" data-text-treatments="thin-underline,soft-highlight,label-block" data-focal-rule="six-month-application-clock-rule" data-focal-channels="icon,locator,motion" style={{position:'absolute',inset:0}}>
      <Diagram anchor="timeline-gate" count={4}>
        <Knowledge data-final-knowledge="six-month-default" index={0} icon={<Clock3 size={34}/>} label="通常起算" detail="生效之日起 6 个月内"/>
        <Knowledge data-final-knowledge="four-late-discovery" index={1} icon={<Clock3 size={34}/>} label="知道/应知起算" detail="新证据｜主证伪造｜依据文书撤变｜审判人员枉法"/>
        <Knowledge data-final-knowledge="application-forum" index={2} icon={<Clock3 size={34}/>} label="申请法院" detail="原则上一级；法定两类案件可选择原审法院"/>
        <Knowledge data-final-knowledge="application-does-not-stay" index={3} icon={<Clock3 size={34}/>} label="申请效力" detail="提出申请不停止原裁判执行"/>
      </Diagram>
    </div></Shell>;

export const ExecutionStateSwitchScene=()=> <Shell code="20.4" title="申请、裁定再审与执行状态切换"><div data-layout="execution-state-switch-direct-flow-path-diagram" data-visual-anchor="flow-path" data-visual-grammar="application-stage,retrial-order,suspension-exceptions,new-judgment" data-text-treatments="label-block,stamp,external-negation" data-focal-rule="execution-state-switch-rule" data-focal-channels="connector,motion,contrast" style={{position:'absolute',inset:0}}>
      <Diagram anchor="flow-path" count={4}>
        <Knowledge data-final-knowledge="application-stage-execution" index={0} icon={<PauseCircle size={34}/>} label="申请阶段" detail="原裁判有效并继续执行"/>
        <Knowledge data-final-knowledge="retrial-order-suspension" index={1} icon={<PauseCircle size={34}/>} label="裁定再审" detail="原裁判仍有效，原则上裁定中止执行"/>
        <Knowledge data-final-knowledge="support-payment-exception" index={2} icon={<PauseCircle size={34}/>} label="可不中止" detail="赡养、扶养、抚养、抚恤、医疗、劳动报酬等"/>
        <Knowledge data-final-knowledge="new-judgment-change" index={3} icon={<PauseCircle size={34}/>} label="新裁判节点" detail="新判决作出时才撤销、改变或维持原裁判"/>
      </Diagram>
    </div></Shell>;

export const ThreeMonthReviewGateScene=()=> <Shell code="20.5" title="3 个月再审审查只看事由"><div data-layout="three-month-review-gate-direct-document-fork-diagram" data-visual-anchor="document-fork" data-visual-grammar="collegiate-deadline,allowed-review-methods,forbidden-merits-methods,result-fork" data-text-treatments="stamp,label-block,external-negation" data-focal-rule="three-month-review-gate-rule" data-focal-channels="icon,enclosure,connector" style={{position:'absolute',inset:0}}>
      <Diagram anchor="document-fork" count={4}>
        <Knowledge data-final-knowledge="review-deadline" index={0} icon={<FileSearch size={34}/>} label="审查主体与期限" detail="合议庭自收到申请书起 3 个月内审查；院长可批准延长"/>
        <Knowledge data-final-knowledge="allowed-review" index={1} icon={<FileSearch size={34}/>} label="可用方式" detail="书面材料｜阅卷｜询问｜听证"/>
        <Knowledge data-final-knowledge="forbidden-review" index={2} icon={<FileSearch size={34}/>} label="不是实体审理" detail="不开庭；不准许鉴定、勘验"/>
        <Knowledge data-final-knowledge="review-results" index={3} icon={<FileSearch size={34}/>} label="结果分岔" detail="事由成立→裁定再审；不成立→裁定驳回申请"/>
      </Diagram>
    </div></Shell>;

export const RetrialHearingAndExitsScene=()=> <Shell code="20.6" title="再审审理范围与退出效果"><div data-layout="retrial-hearing-and-exits-direct-flow-target-diagram" data-visual-anchor="flow-target" data-visual-grammar="applicable-instance,review-scope,new-adjudication,withdrawal-effect,mediation-settlement" data-text-treatments="label-block,thin-underline,stamp" data-focal-rule="retrial-hearing-and-exits-rule" data-focal-channels="connector,icon,spatial" style={{position:'absolute',inset:0}}>
      <Diagram anchor="flow-target" count={5}>
        <Knowledge data-final-knowledge="instance-procedure" index={0} icon={<GitMerge size={34}/>} label="适用程序" detail="提审适用二审程序；未提审按原生效裁判审级程序"/>
        <Knowledge data-final-knowledge="limited-review-scope" index={1} icon={<GitMerge size={34}/>} label="再审范围" detail="原则受原审范围限制；新增请求、反诉原则不审"/>
        <Knowledge data-final-knowledge="new-adjudication" index={2} icon={<GitMerge size={34}/>} label="裁判出口" detail="新判决确定撤销、改变或维持"/>
        <Knowledge data-final-knowledge="withdrawal-effect" index={3} icon={<GitMerge size={34}/>} label="撤回起诉" detail="须其他当事人同意且不损公益；一并撤销原判；不得再诉"/>
        <Knowledge data-final-knowledge="mediation-settlement-effect" index={4} icon={<GitMerge size={34}/>} label="调解与和解" detail="调解书送达原判视为撤销；和解履行完毕终结审查或再审程序"/>
      </Diagram>
    </div></Shell>;

export const RetrialSupervisionControlMap=()=> <AbsoluteFill>    <TimelineSequence name="01-retrial-scope-and-triggers" start={SCENES.retrialScopeAndTriggers.start} duration={SCENES.retrialScopeAndTriggers.duration}><RetrialScopeAndTriggersScene/></TimelineSequence>
    <TimelineSequence name="02-thirteen-statutory-grounds" start={SCENES.thirteenStatutoryGrounds.start} duration={SCENES.thirteenStatutoryGrounds.duration}><ThirteenStatutoryGroundsScene/></TimelineSequence>
    <TimelineSequence name="03-six-month-application-clock" start={SCENES.sixMonthApplicationClock.start} duration={SCENES.sixMonthApplicationClock.duration}><SixMonthApplicationClockScene/></TimelineSequence>
    <TimelineSequence name="04-execution-state-switch" start={SCENES.executionStateSwitch.start} duration={SCENES.executionStateSwitch.duration}><ExecutionStateSwitchScene/></TimelineSequence>
    <TimelineSequence name="05-three-month-review-gate" start={SCENES.threeMonthReviewGate.start} duration={SCENES.threeMonthReviewGate.duration}><ThreeMonthReviewGateScene/></TimelineSequence>
    <TimelineSequence name="06-retrial-hearing-and-exits" start={SCENES.retrialHearingAndExits.start} duration={SCENES.retrialHearingAndExits.duration}><RetrialHearingAndExitsScene/></TimelineSequence>
  </AbsoluteFill>;
