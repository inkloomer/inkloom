import type {CSSProperties,ReactNode} from 'react';
import {Handshake, Landmark, ShieldCheck, UsersRound} from 'lucide-react';
import {AbsoluteFill,interpolate,useCurrentFrame} from 'remotion';
import {CLAMP,TimelineSequence,createMotionPrimitives} from '../../../../shared/remotion-runtime';
import {SCENES,toSourceFrame} from './storyboard';

const C={bg:'#eef3f0',ink:'#17324d',red:'#0d7c66',teal:'#d04b3e',gold:'#e2a72e',paper:'#fffdf7'};
const STYLE={"backgroundImage":"linear-gradient(#17324d10 2px,transparent 2px),linear-gradient(90deg,#17324d10 2px,transparent 2px)","backgroundSize":"52px 52px","codeLeft":82,"codeTop":40,"codeWidth":84,"codeHeight":84,"codeRadius":42,"codeRotate":"0deg","titleLeft":198,"titleTop":50,"titleRight":90,"titleSize":46,"titleAlign":"left","ruleLeft":198,"ruleRight":90,"ruleTop":132,"contentTop":166,"nodeRadius":6,"nodeBorderWidth":3,"nodeShadow":"0 0 0 6px #0d7c6614","nodeClip":"none","nodePadding":"24px 26px","iconRadius":23} as const;
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

export const NonContentiousBoundaryScene=()=> <Shell code="21.1" title="特别程序：非讼边界与错误纠正"><div data-layout="non-contentious-boundary-direct-boundary-diagram" data-visual-anchor="boundary" data-visual-grammar="noncontentious-nature,procedure-exclusions,finality,objection-correction" data-text-treatments="external-negation,label-block,stamp" data-focal-rule="non-contentious-boundary-rule" data-focal-channels="enclosure,icon,contrast" style={{position:'absolute',inset:0}}>
      <Diagram anchor="boundary" count={4}>
        <Knowledge data-final-knowledge="noncontentious-matters" index={0} icon={<Landmark size={34}/>} label="事项范围" detail="选民资格、失踪死亡、遗产管理、行为能力、无主财产、司法确认、担保物权"/>
        <Knowledge data-final-knowledge="noncontentious-attributes" index={1} icon={<Landmark size={34}/>} label="非讼属性" detail="不辩论、不调解、无陪审员；一审终审，裁判即生效"/>
        <Knowledge data-final-knowledge="no-retrial-revocation" index={2} icon={<Landmark size={34}/>} label="排除路径" detail="不适用第三人撤销之诉和再审"/>
        <Knowledge data-final-knowledge="interest-objection" index={3} icon={<Landmark size={34}/>} label="纠错路径" detail="利害关系人提出异议，由法院作新裁判纠正"/>
      </Diagram>
    </div></Shell>;

export const CustodianAndEstateManagerScene=()=> <Shell code="21.2" title="代管人变更与遗产管理人指定"><div data-layout="custodian-and-estate-manager-direct-role-pair-diagram" data-visual-anchor="role-pair" data-visual-grammar="custodian-applicant,interested-party-defendant,estate-jurisdiction,replacement-removal" data-text-treatments="label-block,soft-highlight,thin-underline" data-focal-rule="custodian-and-estate-manager-rule" data-focal-channels="icon,connector,contrast" style={{position:'absolute',inset:0}}>
      <Diagram anchor="role-pair" count={4}>
        <Knowledge data-final-knowledge="custodian-self-change" index={0} icon={<UsersRound size={34}/>} label="原代管人申请" detail="特别程序直接变更财产代管人"/>
        <Knowledge data-final-knowledge="other-interested-change" index={1} icon={<UsersRound size={34}/>} label="其他利害关系人申请" detail="以原代管人为被告，转普通程序"/>
        <Knowledge data-final-knowledge="estate-manager-forum" index={2} icon={<UsersRound size={34}/>} label="遗产管理管辖" detail="死亡时住所地或主要遗产所在地基层法院"/>
        <Knowledge data-final-knowledge="estate-manager-remedy" index={3} icon={<UsersRound size={34}/>} label="另行指定/撤销" detail="不能履职或严重侵害权益时，利害关系人可申请"/>
      </Diagram>
    </div></Shell>;

export const MediationConfirmationScene=()=> <Shell code="21.3" title="司法确认调解协议的入口与异议"><div data-layout="mediation-confirmation-direct-timeline-gate-diagram" data-visual-anchor="timeline-gate" data-visual-grammar="joint-application,thirty-day-window,excluded-matters,confirmation-effect,objection-periods" data-text-treatments="thin-underline,external-negation,stamp" data-focal-rule="mediation-confirmation-rule" data-focal-channels="motion,locator,contrast" style={{position:'absolute',inset:0}}>
      <Diagram anchor="timeline-gate" count={5}>
        <Knowledge data-final-knowledge="joint-thirty-day-application" index={0} icon={<Handshake size={34}/>} label="共同申请" detail="双方自协议生效后 30 日内共同申请"/>
        <Knowledge data-final-knowledge="excluded-confirmation" index={1} icon={<Handshake size={34}/>} label="不予受理" detail="身份关系、物权或知识产权确权等事项"/>
        <Knowledge data-final-knowledge="confirmed-enforceable" index={2} icon={<Handshake size={34}/>} label="确认有效" detail="裁定可以申请执行"/>
        <Knowledge data-final-knowledge="party-objection-fifteen" index={3} icon={<Handshake size={34}/>} label="当事人异议" detail="收到裁定后 15 日内"/>
        <Knowledge data-final-knowledge="interested-objection-six-months" index={4} icon={<Handshake size={34}/>} label="利害关系人异议" detail="知道权益受损后 6 个月内"/>
      </Diagram>
    </div></Shell>;

export const SecurityInterestRealizationScene=()=> <Shell code="21.4" title="实现担保物权：准许执行或转实体争议"><div data-layout="security-interest-realization-direct-flow-path-diagram" data-visual-anchor="flow-path" data-visual-grammar="local-basic-court,review-bench,allow-enforcement,dispute-exit" data-text-treatments="label-block,stamp,external-negation" data-focal-rule="security-interest-realization-rule" data-focal-channels="connector,icon,enclosure" style={{position:'absolute',inset:0}}>
      <Diagram anchor="flow-path" count={4}>
        <Knowledge data-final-knowledge="security-forum" index={0} icon={<ShieldCheck size={34}/>} label="法定管辖" detail="担保财产所在地或登记地基层法院"/>
        <Knowledge data-final-knowledge="security-bench" index={1} icon={<ShieldCheck size={34}/>} label="审查组织" detail="通常独任；超基层级别管辖标的额则合议庭"/>
        <Knowledge data-final-knowledge="allow-security-realization" index={2} icon={<ShieldCheck size={34}/>} label="准许实现" detail="裁定可作为执行依据"/>
        <Knowledge data-final-knowledge="reject-security-realization" index={3} icon={<ShieldCheck size={34}/>} label="存在实体争议" detail="驳回申请后走调解、诉讼或仲裁"/>
      </Diagram>
    </div></Shell>;

export const SpecialProcedureRemedyMap=()=> <AbsoluteFill>    <TimelineSequence name="01-non-contentious-boundary" start={SCENES.nonContentiousBoundary.start} duration={SCENES.nonContentiousBoundary.duration}><NonContentiousBoundaryScene/></TimelineSequence>
    <TimelineSequence name="02-custodian-and-estate-manager" start={SCENES.custodianAndEstateManager.start} duration={SCENES.custodianAndEstateManager.duration}><CustodianAndEstateManagerScene/></TimelineSequence>
    <TimelineSequence name="03-mediation-confirmation" start={SCENES.mediationConfirmation.start} duration={SCENES.mediationConfirmation.duration}><MediationConfirmationScene/></TimelineSequence>
    <TimelineSequence name="04-security-interest-realization" start={SCENES.securityInterestRealization.start} duration={SCENES.securityInterestRealization.duration}><SecurityInterestRealizationScene/></TimelineSequence>
  </AbsoluteFill>;
