import type {CSSProperties,ReactNode} from 'react';
import {ArrowLeftRight, RotateCcw, Scale} from 'lucide-react';
import {AbsoluteFill,interpolate,useCurrentFrame} from 'remotion';
import {CLAMP,TimelineSequence,createMotionPrimitives} from '../../../../shared/remotion-runtime';
import {SCENES,toSourceFrame} from './storyboard';

const C={bg:'#eef4ef',ink:'#17302d',red:'#9f3150',teal:'#167d74',gold:'#dda928',paper:'#fffdf7'};
const STYLE={"backgroundImage":"linear-gradient(90deg,#9f315010 0 49.8%,#17302d24 49.8% 50.2%,#167d7410 50.2%)","backgroundSize":"100% 100%","codeLeft":78,"codeTop":44,"codeWidth":118,"codeHeight":74,"codeRadius":4,"codeRotate":"0deg","titleLeft":230,"titleTop":46,"titleRight":78,"titleSize":48,"titleAlign":"left","ruleLeft":72,"ruleRight":72,"ruleTop":140,"contentTop":170,"nodeRadius":6,"nodeBorderWidth":4,"nodeShadow":"0 8px 0 #17302d24","nodeClip":"none","nodePadding":"23px 25px","iconRadius":23} as const;
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

export const DefenseWithoutCounterclaimScene=()=> <Shell code="28.1" title="同时履行抗辩成立但未反诉"><div data-layout="defense-without-counterclaim-direct-role-pair-diagram" data-visual-anchor="role-pair" data-visual-grammar="plaintiff-performance-condition,defendant-performance-order,application-for-enforcement,enforcement-action,no-res-judicata" data-text-treatments="label-block,thin-underline,external-negation" data-focal-rule="defense-without-counterclaim-rule" data-focal-channels="contrast,icon,spatial" style={{position:'absolute',inset:0}}>
      <Diagram anchor="role-pair" count={5}>
        <Knowledge data-final-knowledge="plaintiff-performance-condition" index={0} icon={<ArrowLeftRight size={34}/>} label="原告义务" detail="只是被告履行的条件，不进入判决主文"/>
        <Knowledge data-final-knowledge="defendant-ordered-performance" index={1} icon={<ArrowLeftRight size={34}/>} label="被告义务" detail="法院作对待给付判决"/>
        <Knowledge data-final-knowledge="application-not-conditioned" index={2} icon={<ArrowLeftRight size={34}/>} label="申请执行" detail="原告未履行也可申请执行"/>
        <Knowledge data-final-knowledge="enforcement-action-conditioned" index={3} icon={<ArrowLeftRight size={34}/>} label="执行行为" detail="原告先履行后，法院才对被告采取执行行为"/>
        <Knowledge data-final-knowledge="plaintiff-duty-no-preclusion" index={4} icon={<ArrowLeftRight size={34}/>} label="既判力" detail="原告义务不在主文，不受该判决既判力约束"/>
      </Diagram>
    </div></Shell>;

export const CounterclaimChangesJudgmentScene=()=> <Shell code="28.2" title="反诉把双方义务都写入判决主文"><div data-layout="counterclaim-changes-judgment-direct-comparison-axis-diagram" data-visual-anchor="comparison-axis" data-visual-grammar="counterclaim,simultaneous-judgment,both-enforce,both-perform,mutual-preclusion" data-text-treatments="soft-highlight,label-block,stamp" data-focal-rule="counterclaim-changes-judgment-rule" data-focal-channels="contrast,enclosure,icon" style={{position:'absolute',inset:0}}>
      <Diagram anchor="comparison-axis" count={5}>
        <Knowledge data-final-knowledge="defendant-counterclaim" index={0} icon={<Scale size={34}/>} label="关键开关" detail="被告提出要求原告履行的反诉"/>
        <Knowledge data-final-knowledge="simultaneous-performance-order" index={1} icon={<Scale size={34}/>} label="判决形式" detail="法院作同时履行判决"/>
        <Knowledge data-final-knowledge="either-side-enforcement" index={2} icon={<Scale size={34}/>} label="申请执行" detail="任何一方均可申请"/>
        <Knowledge data-final-knowledge="own-performance-before-action" index={3} icon={<Scale size={34}/>} label="采取执行行为" detail="申请方先履行自己的义务"/>
        <Knowledge data-final-knowledge="both-duties-precluded" index={4} icon={<Scale size={34}/>} label="既判力" detail="双方义务均进入主文并受既判力约束"/>
      </Diagram>
    </div></Shell>;

export const PriorPerformanceDefenseScene=()=> <Shell code="28.3" title="先履行抗辩成立后的驳回与再诉"><div data-layout="prior-performance-defense-direct-flow-path-diagram" data-visual-anchor="flow-path" data-visual-grammar="prior-duty-unperformed,dismiss-claim,later-performance,new-fact,new-action" data-text-treatments="label-block,external-negation,stamp" data-focal-rule="prior-performance-defense-rule" data-focal-channels="connector,motion,contrast" style={{position:'absolute',inset:0}}>
      <Diagram anchor="flow-path" count={5}>
        <Knowledge data-final-knowledge="prior-duty-unperformed" index={0} icon={<RotateCcw size={34}/>} label="抗辩成立" detail="原告尚未履行先给付义务"/>
        <Knowledge data-final-knowledge="claim-dismissed" index={1} icon={<RotateCcw size={34}/>} label="裁判方式" detail="判决驳回原告诉讼请求"/>
        <Knowledge data-final-knowledge="later-prior-performance" index={2} icon={<RotateCcw size={34}/>} label="判后履行" detail="原告完成先给付义务"/>
        <Knowledge data-final-knowledge="later-performance-new-fact" index={3} icon={<RotateCcw size={34}/>} label="新事实" detail="履行发生于裁判标准时之后"/>
        <Knowledge data-final-knowledge="new-action-allowed" index={4} icon={<RotateCcw size={34}/>} label="再次起诉" detail="不受原判既判力阻却，可依新事实再诉"/>
      </Diagram>
    </div></Shell>;

export const ReciprocalPerformanceJudgments=()=> <AbsoluteFill>    <TimelineSequence name="01-defense-without-counterclaim" start={SCENES.defenseWithoutCounterclaim.start} duration={SCENES.defenseWithoutCounterclaim.duration}><DefenseWithoutCounterclaimScene/></TimelineSequence>
    <TimelineSequence name="02-counterclaim-changes-judgment" start={SCENES.counterclaimChangesJudgment.start} duration={SCENES.counterclaimChangesJudgment.duration}><CounterclaimChangesJudgmentScene/></TimelineSequence>
    <TimelineSequence name="03-prior-performance-defense" start={SCENES.priorPerformanceDefense.start} duration={SCENES.priorPerformanceDefense.duration}><PriorPerformanceDefenseScene/></TimelineSequence>
  </AbsoluteFill>;
