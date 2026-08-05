import type {CSSProperties,ReactNode} from 'react';
import {BellRing, MailCheck, Undo2} from 'lucide-react';
import {AbsoluteFill,interpolate,useCurrentFrame} from 'remotion';
import {CLAMP,TimelineSequence,createMotionPrimitives} from '../../../../shared/remotion-runtime';
import {SCENES,toSourceFrame} from './storyboard';

const C={bg:'#f8f7f2',ink:'#1f2c32',red:'#c53f36',teal:'#187864',gold:'#d5a12c',paper:'#fffdf7'};
const STYLE={"backgroundImage":"repeating-linear-gradient(0deg,transparent 0 58px,#1f2c3210 59px 60px)","backgroundSize":"100% 60px","codeLeft":82,"codeTop":44,"codeWidth":104,"codeHeight":70,"codeRadius":0,"codeRotate":"0deg","titleLeft":220,"titleTop":44,"titleRight":82,"titleSize":50,"titleAlign":"left","ruleLeft":82,"ruleRight":82,"ruleTop":138,"contentTop":170,"nodeRadius":0,"nodeBorderWidth":2,"nodeShadow":"0 10px 0 #c53f3622","nodeClip":"polygon(0 0,98% 0,100% 8%,100% 92%,98% 100%,0 100%)","nodePadding":"24px 28px","iconRadius":0} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;
const COMPACT_CARD_HEIGHT = 220;
const {Enter,MaskedReveal}=createMotionPrimitives(toSourceFrame);
type Anchor='boundary'|'comparison-axis'|'concept-icon'|'document-fork'|'flow-path'|'flow-target'|'role-pair'|'timeline-gate'|'typographic-sequence';

const Shell=({code,title,children}:{code:string;title:string;children:ReactNode})=><AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{backgroundColor:C.bg,color:C.ink,overflow:'hidden'}}>
  <div style={{position:'absolute',inset:0,backgroundImage:STYLE.backgroundImage,backgroundSize:STYLE.backgroundSize}}/>
  <div style={{position:'absolute',left:STYLE.codeLeft,top:STYLE.codeTop,width:STYLE.codeWidth,height:STYLE.codeHeight,display:'grid',placeItems:'center',backgroundColor:C.ink,color:C.paper,fontSize:26,fontWeight:900,borderRadius:STYLE.codeRadius,rotate:STYLE.codeRotate}}>{code}</div>
  <MaskedReveal style={{position:'absolute',left:STYLE.titleLeft,top:STYLE.titleTop,right:STYLE.titleRight,fontSize:STYLE.titleSize,fontWeight:900,lineHeight:1.2,textAlign:STYLE.titleAlign}}>{title}</MaskedReveal>
  <div style={{position:'absolute',left:STYLE.ruleLeft,right:STYLE.ruleRight,top:STYLE.ruleTop,height:6,background:`linear-gradient(90deg,${C.red},${C.gold} 48%,${C.teal})`}}/>
  <div style={{position:'absolute',left:72,right:72,top:STYLE.contentTop,bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
</AbsoluteFill>;

const anchorStyle=(anchor:Anchor,count:number,compact=false):CSSProperties=>({
  position:'absolute',inset:0,display:'grid',gap:24,alignContent:compact?'center':undefined,alignItems:compact?'center':'stretch',
  gridTemplateColumns:anchor==='typographic-sequence'?'1fr':anchor==='comparison-axis'||anchor==='role-pair'||anchor==='document-fork'?'repeat(2,minmax(0,1fr))':count>4?'repeat(3,minmax(0,1fr))':'repeat('+Math.min(count,4)+',minmax(0,1fr))',
  gridTemplateRows:compact?`${COMPACT_CARD_HEIGHT}px`:undefined,gridAutoRows:compact?`${COMPACT_CARD_HEIGHT}px`:'minmax(0,1fr)',padding:anchor==='boundary'?'40px 52px':'32px 28px',
});

const Diagram=({anchor,compact=false,count,children}:{anchor:Anchor;compact?:boolean;count:number;children:ReactNode})=>{const frame=toSourceFrame(useCurrentFrame());const p=interpolate(frame,[12,92],[0,1],CLAMP);return <div style={{position:'absolute',inset:0}}>
  <div style={{position:'absolute',left:anchor==='timeline-gate'||anchor==='flow-path'?40:'50%',right:anchor==='timeline-gate'||anchor==='flow-path'?40:undefined,top:anchor==='timeline-gate'||anchor==='flow-path'?'50%':34,bottom:anchor==='boundary'?34:undefined,width:anchor==='boundary'?'calc(100% - 100px)':anchor==='comparison-axis'?'6px':undefined,height:anchor==='boundary'?'calc(100% - 68px)':anchor==='timeline-gate'||anchor==='flow-path'?'6px':anchor==='comparison-axis'?'calc(100% - 68px)':'8px',border:anchor==='boundary'?'5px solid '+C.teal:undefined,backgroundColor:anchor==='boundary'?undefined:C.gold,borderRadius:STYLE.nodeRadius,scale:anchor==='timeline-gate'||anchor==='flow-path'?p+' 1':'1 '+p,transformOrigin:'left center',opacity:.8}}/>
  {anchor==='document-fork'?<><div style={{position:'absolute',left:'24%',right:'24%',top:'50%',height:5,backgroundColor:C.red,scale:p+' 1',transformOrigin:'center'}}/><div style={{position:'absolute',left:'50%',top:'24%',bottom:'24%',width:5,backgroundColor:C.teal,scale:'1 '+p,transformOrigin:'center'}}/></>:null}
  {anchor==='flow-target'?<><div style={{position:'absolute',left:'18%',top:'25%',width:'64%',height:5,backgroundColor:C.red,rotate:'18deg',scale:p+' 1'}}/><div style={{position:'absolute',left:'18%',bottom:'25%',width:'64%',height:5,backgroundColor:C.teal,rotate:'-18deg',scale:p+' 1'}}/></>:null}
  <div data-compact-layout={compact?'true':undefined} style={anchorStyle(anchor,count,compact)}>{children}</div>
  </div>};

const Knowledge=({compact=false,index,icon,label,detail,...data}:{compact?:boolean;index:number;icon:ReactNode;label:string;detail:string;'data-final-knowledge':string})=><Enter delay={24+index*18} from={index%2===0?'left':'right'} style={{height:compact?COMPACT_CARD_HEIGHT:'100%',maxHeight:compact?COMPACT_CARD_HEIGHT:undefined,alignSelf:compact?'center':undefined}}><div {...data} data-audit-boundary="true" data-compact-card={compact?'true':undefined} style={{height:compact?COMPACT_CARD_HEIGHT:'100%',maxHeight:compact?COMPACT_CARD_HEIGHT:undefined,minHeight:112,alignSelf:compact?'center':undefined,backgroundColor:index%3===0?C.paper:index%3===1?C.teal+'12':C.gold+'18',border:STYLE.nodeBorderWidth+'px solid '+(index%3===0?C.ink:index%3===1?C.teal:C.gold),boxShadow:STYLE.nodeShadow,padding:STYLE.nodePadding,borderRadius:STYLE.nodeRadius,clipPath:STYLE.nodeClip,display:'grid',gridTemplateColumns:'48px minmax(0,1fr)',gridTemplateRows:'auto auto',columnGap:16,alignContent:compact?'center':'start'}}>
  <div style={{gridRow:'1 / 3',width:46,height:46,display:'grid',placeItems:'center',backgroundColor:index%2===0?C.red:C.teal,color:C.paper,borderRadius:STYLE.iconRadius}}>{icon}</div>
  <div style={{fontSize:30,fontWeight:900,lineHeight:1.18,borderBottom:'3px solid '+(index%2===0?C.gold:C.red),paddingBottom:8}}>{label}</div>
  <div style={{fontSize:23,fontWeight:650,lineHeight:1.5,paddingTop:10,whiteSpace:'pre-wrap'}}>{detail.replaceAll('｜',' · ')}</div>
  </div></Enter>;

export const FirstActionWithdrawalScene=()=> <Shell code="31.1" title="首次起诉后撤诉：解除效力不保留"><div data-layout="first-action-withdrawal-direct-timeline-gate-diagram" data-visual-anchor="timeline-gate" data-visual-grammar="no-prior-notice,first-action,withdrawal,no-termination-effect" data-text-treatments="label-block,external-negation,thin-underline" data-focal-rule="first-action-withdrawal-rule" data-focal-channels="motion,locator,contrast" style={{position:'absolute',inset:0}}>
      <Diagram anchor="timeline-gate" compact count={4}>
        <Knowledge compact data-final-knowledge="no-prior-termination-notice" index={0} icon={<Undo2 size={34}/>} label="前提" detail="起诉前未通知对方解除合同"/>
        <Knowledge compact data-final-knowledge="first-termination-action" index={1} icon={<Undo2 size={34}/>} label="首次起诉" detail="直接以诉讼主张解除"/>
        <Knowledge compact data-final-knowledge="first-action-withdrawn" index={2} icon={<Undo2 size={34}/>} label="程序节点" detail="原告撤诉"/>
        <Knowledge compact data-final-knowledge="withdrawal-no-termination" index={3} icon={<Undo2 size={34}/>} label="法律效果" detail="撤诉本身不当然产生合同解除效果"/>
      </Diagram>
    </div></Shell>;

export const SecondActionServiceScene=()=> <Shell code="31.2" title="再次起诉被支持：以第二次送达定解除时间"><div data-layout="second-action-service-direct-flow-path-diagram" data-visual-anchor="flow-path" data-visual-grammar="second-action,court-support,complaint-copy-service,termination-time" data-text-treatments="label-block,stamp,soft-highlight" data-focal-rule="second-action-service-rule" data-focal-channels="connector,icon,enclosure" style={{position:'absolute',inset:0}}>
      <Diagram anchor="flow-path" compact count={4}>
        <Knowledge compact data-final-knowledge="second-termination-action" index={0} icon={<MailCheck size={34}/>} label="再次起诉" detail="撤诉后重新主张解除合同"/>
        <Knowledge compact data-final-knowledge="second-action-supported" index={1} icon={<MailCheck size={34}/>} label="裁判结果" detail="法院经审理支持解除主张"/>
        <Knowledge compact data-final-knowledge="second-complaint-served" index={2} icon={<MailCheck size={34}/>} label="关键时点" detail="第二次起诉状副本送达对方"/>
        <Knowledge compact data-final-knowledge="termination-on-second-service" index={3} icon={<MailCheck size={34}/>} label="通常解除时间" detail="合同自该次送达时解除"/>
      </Diagram>
    </div></Shell>;

export const NoticeArrivalExceptionScene=()=> <Shell code="31.3" title="撤诉后另行通知到达：改写解除时点"><div data-layout="notice-arrival-exception-direct-document-fork-diagram" data-visual-anchor="document-fork" data-visual-grammar="post-withdrawal-notice,notice-arrival,effective-notice,exception-time,second-service-displaced" data-text-treatments="thin-underline,label-block,stamp" data-focal-rule="notice-arrival-exception-rule" data-focal-channels="connector,contrast,icon" style={{position:'absolute',inset:0}}>
      <Diagram anchor="document-fork" count={5}>
        <Knowledge data-final-knowledge="post-withdrawal-notice" index={0} icon={<BellRing size={34}/>} label="例外动作" detail="撤诉后另行通知对方解除合同"/>
        <Knowledge data-final-knowledge="notice-reaches-party" index={1} icon={<BellRing size={34}/>} label="到达要件" detail="解除通知已经到达对方"/>
        <Knowledge data-final-knowledge="effective-notice-check" index={2} icon={<BellRing size={34}/>} label="效力前提" detail="通知依法产生解除效力"/>
        <Knowledge data-final-knowledge="termination-on-notice-arrival" index={3} icon={<BellRing size={34}/>} label="例外解除时间" detail="按有效通知到达时确定"/>
        <Knowledge data-final-knowledge="second-service-not-used" index={4} icon={<BellRing size={34}/>} label="排除默认点" detail="不再以第二次起诉状副本送达为准"/>
      </Diagram>
    </div></Shell>;

export const TerminationWithdrawalTimeline=()=> <AbsoluteFill>    <TimelineSequence name="01-first-action-withdrawal" start={SCENES.firstActionWithdrawal.start} duration={SCENES.firstActionWithdrawal.duration}><FirstActionWithdrawalScene/></TimelineSequence>
    <TimelineSequence name="02-second-action-service" start={SCENES.secondActionService.start} duration={SCENES.secondActionService.duration}><SecondActionServiceScene/></TimelineSequence>
    <TimelineSequence name="03-notice-arrival-exception" start={SCENES.noticeArrivalException.start} duration={SCENES.noticeArrivalException.duration}><NoticeArrivalExceptionScene/></TimelineSequence>
  </AbsoluteFill>;
