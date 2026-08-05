import type {CSSProperties,ReactNode} from 'react';
import {FileCheck2, GitFork, Globe2, Send} from 'lucide-react';
import {AbsoluteFill,interpolate,useCurrentFrame} from 'remotion';
import {CLAMP,TimelineSequence,createMotionPrimitives} from '../../../../shared/remotion-runtime';
import {SCENES,toSourceFrame} from './storyboard';

const C={bg:'#f2f5f1',ink:'#17314b',red:'#c63e35',teal:'#147d75',gold:'#dba329',paper:'#fffdf7'};
const STYLE={"backgroundImage":"radial-gradient(circle at 16% 76%,transparent 0 110px,#17314b12 112px 114px,transparent 116px),radial-gradient(circle at 82% 22%,transparent 0 150px,#c63e3512 152px 154px,transparent 156px)","backgroundSize":"100% 100%","codeLeft":84,"codeTop":38,"codeWidth":92,"codeHeight":92,"codeRadius":46,"codeRotate":"0deg","titleLeft":210,"titleTop":48,"titleRight":84,"titleSize":46,"titleAlign":"left","ruleLeft":210,"ruleRight":84,"ruleTop":132,"contentTop":164,"nodeRadius":6,"nodeBorderWidth":3,"nodeShadow":"0 10px 0 #17314b18","nodeClip":"none","nodePadding":"23px 25px","iconRadius":23} as const;
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

export const JurisdictionAgreementBoundaryScene=()=> <Shell code="25.1" title="涉外协议管辖的三道中国边界"><div data-layout="jurisdiction-agreement-boundary-direct-boundary-diagram" data-visual-anchor="boundary" data-visual-grammar="written-choice,foreign-exclusive-choice,china-exclusive-jurisdiction,sovereignty-security,public-interest" data-text-treatments="label-block,external-negation,thin-underline" data-focal-rule="jurisdiction-agreement-boundary-rule" data-focal-channels="enclosure,locator,contrast" style={{position:'absolute',inset:0}}>
      <Diagram anchor="boundary" count={5}>
        <Knowledge data-final-knowledge="written-choice-china" index={0} icon={<Globe2 size={34}/>} label="选择中国法院" detail="当事人可书面协议选择"/>
        <Knowledge data-final-knowledge="foreign-exclusive-choice" index={1} icon={<Globe2 size={34}/>} label="排他选择外国法院" detail="符合条件时中国法院可不受理或驳回"/>
        <Knowledge data-final-knowledge="china-exclusive-limit" index={2} icon={<Globe2 size={34}/>} label="专属管辖保留" detail="不得突破中国专属管辖"/>
        <Knowledge data-final-knowledge="sovereignty-security-limit" index={3} icon={<Globe2 size={34}/>} label="主权安全保留" detail="不得涉及中国主权、安全"/>
        <Knowledge data-final-knowledge="public-interest-limit" index={4} icon={<Globe2 size={34}/>} label="公共利益保留" detail="不得损害社会公共利益"/>
      </Diagram>
    </div></Shell>;

export const ParallelLitigationRouterScene=()=> <Shell code="25.2" title="平行诉讼不是当然排除中国法院"><div data-layout="parallel-litigation-router-direct-flow-path-diagram" data-visual-anchor="flow-path" data-visual-grammar="filing-order,exclusive-jurisdiction,choice-of-court,public-interest,foreign-judgment" data-text-treatments="label-block,soft-highlight,stamp" data-focal-rule="parallel-litigation-router-rule" data-focal-channels="connector,icon,contrast" style={{position:'absolute',inset:0}}>
      <Diagram anchor="flow-path" count={5}>
        <Knowledge data-final-knowledge="filing-sequence" index={0} icon={<GitFork size={34}/>} label="受理先后" detail="只是判断因素之一"/>
        <Knowledge data-final-knowledge="exclusive-jurisdiction-check" index={1} icon={<GitFork size={34}/>} label="专属管辖" detail="中国专属事项不能让位"/>
        <Knowledge data-final-knowledge="jurisdiction-agreement-check" index={2} icon={<GitFork size={34}/>} label="协议管辖" detail="核验协议的排他性与有效边界"/>
        <Knowledge data-final-knowledge="public-interest-check" index={3} icon={<GitFork size={34}/>} label="公共利益" detail="主权、安全、社会公共利益保留"/>
        <Knowledge data-final-knowledge="foreign-judgment-check" index={4} icon={<GitFork size={34}/>} label="外国裁判状态" detail="结合是否已有外国裁判及承认可能处理"/>
      </Diagram>
    </div></Shell>;

export const ServiceAndEvidenceCorridorsScene=()=> <Shell code="25.3" title="涉外送达与取证先看住所和协助路径"><div data-layout="service-and-evidence-corridors-direct-role-pair-diagram" data-visual-anchor="role-pair" data-visual-grammar="domicile,nationality,service-route,evidence-route,judicial-assistance" data-text-treatments="label-block,thin-underline,external-negation" data-focal-rule="service-and-evidence-corridors-rule" data-focal-channels="icon,spatial,contrast" style={{position:'absolute',inset:0}}>
      <Diagram anchor="role-pair" count={5}>
        <Knowledge data-final-knowledge="domicile-first" index={0} icon={<Send size={34}/>} label="住所连接点" detail="同在中国有住所，不因国籍不同当然适用涉外送达"/>
        <Knowledge data-final-knowledge="nationality-separate" index={1} icon={<Send size={34}/>} label="国籍连接点" detail="国籍不能替代住所判断"/>
        <Knowledge data-final-knowledge="service-corridors" index={2} icon={<Send size={34}/>} label="送达路径" detail="按住所、条约、外交、邮寄等法定路径选择"/>
        <Knowledge data-final-knowledge="evidence-corridors" index={3} icon={<Send size={34}/>} label="调查取证" detail="区分境内取证与需境外司法协助"/>
        <Knowledge data-final-knowledge="assistance-boundary" index={4} icon={<Send size={34}/>} label="司法协助" detail="未经许可不得在境内实施外国司法取证行为"/>
      </Diagram>
    </div></Shell>;

export const ForeignJudgmentRecognitionScene=()=> <Shell code="25.4" title="外国裁判承认执行与复议终点"><div data-layout="foreign-judgment-recognition-direct-flow-target-diagram" data-visual-anchor="flow-target" data-visual-grammar="application-or-request,treaty-reciprocity,refusal-boundaries,recognition-enforcement,reconsideration" data-text-treatments="stamp,label-block,external-negation" data-focal-rule="foreign-judgment-recognition-rule" data-focal-channels="connector,icon,enclosure" style={{position:'absolute',inset:0}}>
      <Diagram anchor="flow-target" count={5}>
        <Knowledge data-final-knowledge="recognition-entry" index={0} icon={<FileCheck2 size={34}/>} label="程序入口" detail="当事人申请或外国法院依法请求"/>
        <Knowledge data-final-knowledge="treaty-reciprocity" index={1} icon={<FileCheck2 size={34}/>} label="审查依据" detail="国际条约或互惠原则"/>
        <Knowledge data-final-knowledge="recognition-refusal" index={2} icon={<FileCheck2 size={34}/>} label="拒绝边界" detail="违反基本原则、主权安全、公共利益等不予承认执行"/>
        <Knowledge data-final-knowledge="recognition-enforcement-order" index={3} icon={<FileCheck2 size={34}/>} label="法院裁定" detail="作出承认并执行或不予承认执行裁定"/>
        <Knowledge data-final-knowledge="recognition-reconsideration" index={4} icon={<FileCheck2 size={34}/>} label="救济" detail="当事人可向上一级法院申请复议"/>
      </Diagram>
    </div></Shell>;

export const CrossBorderProcedureCompass=()=> <AbsoluteFill>    <TimelineSequence name="01-jurisdiction-agreement-boundary" start={SCENES.jurisdictionAgreementBoundary.start} duration={SCENES.jurisdictionAgreementBoundary.duration}><JurisdictionAgreementBoundaryScene/></TimelineSequence>
    <TimelineSequence name="02-parallel-litigation-router" start={SCENES.parallelLitigationRouter.start} duration={SCENES.parallelLitigationRouter.duration}><ParallelLitigationRouterScene/></TimelineSequence>
    <TimelineSequence name="03-service-and-evidence-corridors" start={SCENES.serviceAndEvidenceCorridors.start} duration={SCENES.serviceAndEvidenceCorridors.duration}><ServiceAndEvidenceCorridorsScene/></TimelineSequence>
    <TimelineSequence name="04-foreign-judgment-recognition" start={SCENES.foreignJudgmentRecognition.start} duration={SCENES.foreignJudgmentRecognition.duration}><ForeignJudgmentRecognitionScene/></TimelineSequence>
  </AbsoluteFill>;
