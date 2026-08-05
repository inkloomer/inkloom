import type {CSSProperties,ReactNode} from 'react';
import {CalendarClock, FileQuestion, Focus} from 'lucide-react';
import {AbsoluteFill,interpolate,useCurrentFrame} from 'remotion';
import {CLAMP,TimelineSequence,createMotionPrimitives} from '../../../../shared/remotion-runtime';
import {SCENES,toSourceFrame} from './storyboard';

const C={bg:'#f7f6f1',ink:'#172b36',red:'#d94b3d',teal:'#0b8077',gold:'#e1a326',paper:'#fffdf7'};
const STYLE={"backgroundImage":"linear-gradient(90deg,transparent 0 12%,#d94b3d10 12% 12.4%,transparent 12.4% 88%,#0b807710 88% 88.4%,transparent 88.4%)","backgroundSize":"100% 100%","codeLeft":82,"codeTop":48,"codeWidth":96,"codeHeight":62,"codeRadius":0,"codeRotate":"0deg","titleLeft":0,"titleTop":42,"titleRight":0,"titleSize":52,"titleAlign":"center","ruleLeft":540,"ruleRight":540,"ruleTop":134,"contentTop":166,"nodeRadius":0,"nodeBorderWidth":0,"nodeShadow":"0 10px 0 #172b3620","nodeClip":"none","nodePadding":"28px 34px","iconRadius":0} as const;
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

export const PleadedContractPositionsScene=()=> <Shell code="27.1" title="当事人提出的效力主张不是终点"><div data-layout="pleaded-contract-positions-direct-typographic-sequence-diagram" data-visual-anchor="typographic-sequence" data-visual-grammar="invalidity,rescission,termination,formation-distinction" data-text-treatments="label-block,soft-highlight,external-negation" data-focal-rule="pleaded-contract-positions-rule" data-focal-channels="spatial,contrast,icon" style={{position:'absolute',inset:0}}>
      <Diagram anchor="typographic-sequence" count={4}>
        <Knowledge data-final-knowledge="invalidity-claim" index={0} icon={<FileQuestion size={34}/>} label="主张无效" detail="效力否定不等于合同未成立"/>
        <Knowledge data-final-knowledge="rescission-claim" index={1} icon={<FileQuestion size={34}/>} label="主张撤销" detail="撤销权路径不等于成立判断"/>
        <Knowledge data-final-knowledge="termination-claim" index={2} icon={<FileQuestion size={34}/>} label="主张解除" detail="解除以合同关系存在为前提"/>
        <Knowledge data-final-knowledge="formation-distinction" index={3} icon={<FileQuestion size={34}/>} label="法院发现" detail="事实可能指向合同根本未成立"/>
      </Diagram>
    </div></Shell>;

export const FormationFocusResetScene=()=> <Shell code="27.2" title="法院应把“是否成立”重定为焦点"><div data-layout="formation-focus-reset-direct-flow-target-diagram" data-visual-anchor="flow-target" data-visual-grammar="facts-indicate-no-formation,focus-reset,party-debate,court-reasoning" data-text-treatments="label-block,thin-underline,stamp" data-focal-rule="formation-focus-reset-rule" data-focal-channels="connector,enclosure,icon" style={{position:'absolute',inset:0}}>
      <Diagram anchor="flow-target" count={4}>
        <Knowledge data-final-knowledge="facts-no-formation" index={0} icon={<Focus size={34}/>} label="事实判断" detail="法院依据事实认为合同未成立"/>
        <Knowledge data-final-knowledge="formation-as-focus" index={1} icon={<Focus size={34}/>} label="争点重定" detail="将合同是否成立列为焦点问题"/>
        <Knowledge data-final-knowledge="debate-opportunity" index={2} icon={<Focus size={34}/>} label="程序保障" detail="给予双方充分辩论机会"/>
        <Knowledge data-final-knowledge="reason-and-result" index={3} icon={<Focus size={34}/>} label="裁判关联" detail="合同性质影响裁判理由或结果时必须正面处理"/>
      </Diagram>
    </div></Shell>;

export const ClaimChangeAndEvidenceWindowScene=()=> <Shell code="27.3" title="诉请变更与重新指定举证期限"><div data-layout="claim-change-and-evidence-window-direct-timeline-gate-diagram" data-visual-anchor="timeline-gate" data-visual-grammar="hearing-development,claim-change,debate-sufficiency,new-evidence-period,adjudication" data-text-treatments="thin-underline,label-block,stamp" data-focal-rule="claim-change-and-evidence-window-rule" data-focal-channels="motion,locator,contrast" style={{position:'absolute',inset:0}}>
      <Diagram anchor="timeline-gate" count={5}>
        <Knowledge data-final-knowledge="hearing-development" index={0} icon={<CalendarClock size={34}/>} label="法庭审理推进" detail="当事人根据审理情况识别新的争点"/>
        <Knowledge data-final-knowledge="claim-modification" index={1} icon={<CalendarClock size={34}/>} label="变更诉请" detail="可以依法申请变更诉讼请求"/>
        <Knowledge data-final-knowledge="debate-sufficiency" index={2} icon={<CalendarClock size={34}/>} label="法院判断" detail="是否已充分辩论、性质变化是否影响裁判"/>
        <Knowledge data-final-knowledge="new-evidence-window" index={3} icon={<CalendarClock size={34}/>} label="举证期限" detail="可依案件情况重新指定"/>
        <Knowledge data-final-knowledge="no-surprise-judgment" index={4} icon={<CalendarClock size={34}/>} label="终点" detail="不得未经辩论机会直接按另一法律关系性质裁判"/>
      </Diagram>
    </div></Shell>;

export const ContractIssueReframing=()=> <AbsoluteFill>    <TimelineSequence name="01-pleaded-contract-positions" start={SCENES.pleadedContractPositions.start} duration={SCENES.pleadedContractPositions.duration}><PleadedContractPositionsScene/></TimelineSequence>
    <TimelineSequence name="02-formation-focus-reset" start={SCENES.formationFocusReset.start} duration={SCENES.formationFocusReset.duration}><FormationFocusResetScene/></TimelineSequence>
    <TimelineSequence name="03-claim-change-and-evidence-window" start={SCENES.claimChangeAndEvidenceWindow.start} duration={SCENES.claimChangeAndEvidenceWindow.duration}><ClaimChangeAndEvidenceWindowScene/></TimelineSequence>
  </AbsoluteFill>;
