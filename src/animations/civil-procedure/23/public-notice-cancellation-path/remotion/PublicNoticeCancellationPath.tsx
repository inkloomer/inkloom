import type {CSSProperties,ReactNode} from 'react';
import {FileWarning, Gavel, Megaphone} from 'lucide-react';
import {AbsoluteFill,interpolate,useCurrentFrame} from 'remotion';
import {CLAMP,TimelineSequence,createMotionPrimitives} from '../../../../shared/remotion-runtime';
import {SCENES,toSourceFrame} from './storyboard';

const C={bg:'#fff8e8',ink:'#152330',red:'#cf3151',teal:'#007f89',gold:'#e4a620',paper:'#fffdf7'};
const STYLE={"backgroundImage":"linear-gradient(90deg,transparent 0 31%,#15233012 31% 31.3%,transparent 31.3% 66%,#15233012 66% 66.3%,transparent 66.3%)","backgroundSize":"100% 100%","codeLeft":1690,"codeTop":42,"codeWidth":126,"codeHeight":76,"codeRadius":0,"codeRotate":"0deg","titleLeft":74,"titleTop":42,"titleRight":250,"titleSize":54,"titleAlign":"left","ruleLeft":74,"ruleRight":250,"ruleTop":132,"contentTop":164,"nodeRadius":2,"nodeBorderWidth":2,"nodeShadow":"0 8px 0 #cf315122","nodeClip":"none","nodePadding":"22px 26px","iconRadius":23} as const;
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

export const NoticeEntryAndPeriodScene=()=> <Shell code="23.1" title="票据遗失后：止付与不少于 60 日公告"><div data-layout="notice-entry-and-period-direct-timeline-gate-diagram" data-visual-anchor="timeline-gate" data-visual-grammar="eligible-instrument,last-holder,payment-place-court,stop-payment,sixty-day-notice" data-text-treatments="label-block,thin-underline,stamp" data-focal-rule="notice-entry-and-period-rule" data-focal-channels="icon,locator,motion" style={{position:'absolute',inset:0}}>
      <Diagram anchor="timeline-gate" count={5}>
        <Knowledge data-final-knowledge="eligible-lost-instrument" index={0} icon={<Megaphone size={34}/>} label="适用对象" detail="可背书转让票据被盗、遗失、灭失等法定事项"/>
        <Knowledge data-final-knowledge="last-holder-applicant" index={1} icon={<Megaphone size={34}/>} label="申请人" detail="票据最后持有人"/>
        <Knowledge data-final-knowledge="payment-place-forum" index={2} icon={<Megaphone size={34}/>} label="管辖法院" detail="票据支付地基层法院"/>
        <Knowledge data-final-knowledge="stop-payment-and-three-days" index={3} icon={<Megaphone size={34}/>} label="受理后动作" detail="通知支付人止付，并在 3 日内公告"/>
        <Knowledge data-final-knowledge="notice-at-least-sixty" index={4} icon={<Megaphone size={34}/>} label="公示期间" detail="不得少于 60 日；期间转让票据无效"/>
      </Diagram>
    </div></Shell>;

export const ClaimFilingWindowScene=()=> <Shell code="23.2" title="权利申报使非讼程序退出"><div data-layout="claim-filing-window-direct-boundary-diagram" data-visual-anchor="boundary" data-visual-grammar="filing-window,formal-review,substantive-dispute,termination,separate-action" data-text-treatments="soft-highlight,external-negation,label-block" data-focal-rule="claim-filing-window-rule" data-focal-channels="enclosure,icon,contrast" style={{position:'absolute',inset:0}}>
      <Diagram anchor="boundary" count={5}>
        <Knowledge data-final-knowledge="claim-until-judgment" index={0} icon={<FileWarning size={34}/>} label="申报窗口" detail="公示期满至除权判决作出前"/>
        <Knowledge data-final-knowledge="formal-review-only" index={1} icon={<FileWarning size={34}/>} label="法院审查" detail="只作形式审查，不审实体权利"/>
        <Knowledge data-final-knowledge="claim-means-dispute" index={2} icon={<FileWarning size={34}/>} label="出现争议" detail="申报表明存在实体争议"/>
        <Knowledge data-final-knowledge="notice-procedure-ends" index={3} icon={<FileWarning size={34}/>} label="程序结果" detail="裁定终结公示催告程序"/>
        <Knowledge data-final-knowledge="parties-sue-separately" index={4} icon={<FileWarning size={34}/>} label="后续路径" detail="当事人另行起诉解决票据权利"/>
      </Diagram>
    </div></Shell>;

export const CancellationAndReliefScene=()=> <Shell code="23.3" title="除权判决、付款请求与 1 年救济"><div data-layout="cancellation-and-relief-direct-flow-path-diagram" data-visual-anchor="flow-path" data-visual-grammar="no-claim,judgment-cancels,payment-request,no-direct-enforcement,one-year-action" data-text-treatments="stamp,label-block,external-negation" data-focal-rule="cancellation-and-relief-rule" data-focal-channels="connector,icon,contrast" style={{position:'absolute',inset:0}}>
      <Diagram anchor="flow-path" count={5}>
        <Knowledge data-final-knowledge="no-valid-claim" index={0} icon={<Gavel size={34}/>} label="作出前提" detail="无人申报或申报被驳回"/>
        <Knowledge data-final-knowledge="collegiate-cancellation" index={1} icon={<Gavel size={34}/>} label="除权判决" detail="依申请组成合议庭，宣告票据无效"/>
        <Knowledge data-final-knowledge="not-direct-enforcement" index={2} icon={<Gavel size={34}/>} label="执行边界" detail="除权判决不能直接作为执行依据"/>
        <Knowledge data-final-knowledge="payment-then-action" index={3} icon={<Gavel size={34}/>} label="实现权利" detail="向支付人请求付款；拒付再起诉"/>
        <Knowledge data-final-knowledge="one-year-late-relief" index={4} icon={<Gavel size={34}/>} label="迟延申报救济" detail="正当理由未申报者，自知道或应知公告起 1 年内起诉"/>
      </Diagram>
    </div></Shell>;

export const PublicNoticeCancellationPath=()=> <AbsoluteFill>    <TimelineSequence name="01-notice-entry-and-period" start={SCENES.noticeEntryAndPeriod.start} duration={SCENES.noticeEntryAndPeriod.duration}><NoticeEntryAndPeriodScene/></TimelineSequence>
    <TimelineSequence name="02-claim-filing-window" start={SCENES.claimFilingWindow.start} duration={SCENES.claimFilingWindow.duration}><ClaimFilingWindowScene/></TimelineSequence>
    <TimelineSequence name="03-cancellation-and-relief" start={SCENES.cancellationAndRelief.start} duration={SCENES.cancellationAndRelief.duration}><CancellationAndReliefScene/></TimelineSequence>
  </AbsoluteFill>;
