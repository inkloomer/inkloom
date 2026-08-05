import type {CSSProperties,ReactNode} from 'react';
import {Banknote, Clock3, GitBranch} from 'lucide-react';
import {AbsoluteFill,interpolate,useCurrentFrame} from 'remotion';
import {CLAMP,TimelineSequence,createMotionPrimitives} from '../../../../shared/remotion-runtime';
import {SCENES,toSourceFrame} from './storyboard';

const C={bg:'#f7f1df',ink:'#171717',red:'#d83a2e',teal:'#087f8c',gold:'#efb629',paper:'#fffdf7'};
const STYLE={"backgroundImage":"linear-gradient(135deg,#d83a2e12 0 18%,transparent 18% 82%,#087f8c12 82%)","backgroundSize":"100% 100%","codeLeft":78,"codeTop":42,"codeWidth":142,"codeHeight":78,"codeRadius":0,"codeRotate":"-3deg","titleLeft":255,"titleTop":44,"titleRight":72,"titleSize":50,"titleAlign":"left","ruleLeft":72,"ruleRight":430,"ruleTop":143,"contentTop":170,"nodeRadius":0,"nodeBorderWidth":5,"nodeShadow":"12px 12px 0 #171717","nodeClip":"polygon(0 0,96% 0,100% 16%,100% 100%,4% 100%,0 84%)","nodePadding":"24px 30px","iconRadius":0} as const;
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

export const PaymentOrderEntryScene=()=> <Shell code="22.1" title="支付令必须同时通过的申请要件"><div data-layout="payment-order-entry-direct-flow-target-diagram" data-visual-anchor="flow-target" data-visual-grammar="due-certain-payment,no-other-debt,no-counter-performance,no-preservation,serviceable" data-text-treatments="label-block,thin-underline,external-negation" data-focal-rule="payment-order-entry-rule" data-focal-channels="icon,connector,enclosure" style={{position:'absolute',inset:0}}>
      <Diagram anchor="flow-target" count={5}>
        <Knowledge data-final-knowledge="due-certain-claim" index={0} icon={<Banknote size={34}/>} label="给付内容" detail="到期且数额确定的金钱或有价证券"/>
        <Knowledge data-final-knowledge="no-other-dispute" index={1} icon={<Banknote size={34}/>} label="关系纯净" detail="双方无其他债务纠纷"/>
        <Knowledge data-final-knowledge="no-counter-performance" index={2} icon={<Banknote size={34}/>} label="无对待给付" detail="债权人无对待给付义务"/>
        <Knowledge data-final-knowledge="no-pre-suit-preservation" index={3} icon={<Banknote size={34}/>} label="未诉前保全" detail="已申请诉前保全不得进入督促程序"/>
        <Knowledge data-final-knowledge="serviceable-to-debtor" index={4} icon={<Banknote size={34}/>} label="能够送达" detail="可留置送达，不得公告送达"/>
      </Diagram>
    </div></Shell>;

export const JurisdictionAndObjectionScene=()=> <Shell code="22.2" title="基层专属入口与 15 日书面异议"><div data-layout="jurisdiction-and-objection-direct-timeline-gate-diagram" data-visual-anchor="timeline-gate" data-visual-grammar="debtor-domicile-basic-court,order-effective,fifteen-day-window,written-objection,invalid-objection" data-text-treatments="thin-underline,label-block,external-negation" data-focal-rule="jurisdiction-and-objection-rule" data-focal-channels="locator,motion,contrast" style={{position:'absolute',inset:0}}>
      <Diagram anchor="timeline-gate" count={5}>
        <Knowledge data-final-knowledge="basic-court-only" index={0} icon={<Clock3 size={34}/>} label="法定管辖" detail="债务人住所地基层法院"/>
        <Knowledge data-final-knowledge="order-effective-on-issue" index={1} icon={<Clock3 size={34}/>} label="支付令生效" detail="自作出之日起生效"/>
        <Knowledge data-final-knowledge="fifteen-day-response" index={2} icon={<Clock3 size={34}/>} label="收到后 15 日" detail="清偿或提出书面异议"/>
        <Knowledge data-final-knowledge="valid-written-objection" index={3} icon={<Clock3 size={34}/>} label="有效异议" detail="否认债权债务；法院仅形式审查"/>
        <Knowledge data-final-knowledge="invalid-payment-difficulty" index={4} icon={<Clock3 size={34}/>} label="无效异议" detail="仅称无力清偿、要求延期或改变履行方式"/>
      </Diagram>
    </div></Shell>;

export const OrderEffectsAndLawsuitsScene=()=> <Shell code="22.3" title="异议、起诉与担保人的效力分流"><div data-layout="order-effects-and-lawsuits-direct-document-fork-diagram" data-visual-anchor="document-fork" data-visual-grammar="valid-objection-termination,automatic-litigation,creditor-opt-out,debtor-lawsuit-location,guarantor-boundary" data-text-treatments="stamp,label-block,external-negation" data-focal-rule="order-effects-and-lawsuits-rule" data-focal-channels="connector,icon,contrast" style={{position:'absolute',inset:0}}>
      <Diagram anchor="document-fork" count={5}>
        <Knowledge data-final-knowledge="objection-terminates-order" index={0} icon={<GitBranch size={34}/>} label="异议成立" detail="裁定终结督促程序，支付令失效并转诉讼"/>
        <Knowledge data-final-knowledge="creditor-seven-day-opt-out" index={1} icon={<GitBranch size={34}/>} label="债权人不同意起诉" detail="收到裁定后 7 日内提出"/>
        <Knowledge data-final-knowledge="debtor-suit-as-objection" index={2} icon={<GitBranch size={34}/>} label="债务人起诉" detail="向发令法院起诉视为异议；向其他法院起诉不影响支付令"/>
        <Knowledge data-final-knowledge="creditor-lawsuit-effect" index={3} icon={<GitBranch size={34}/>} label="债权人起诉" detail="对债务人或担保人起诉，同一债权督促程序终结"/>
        <Knowledge data-final-knowledge="guarantor-not-bound" index={4} icon={<GitBranch size={34}/>} label="担保人边界" detail="支付令只约束债务人，不约束担保人"/>
      </Diagram>
    </div></Shell>;

export const PaymentOrderGate=()=> <AbsoluteFill>    <TimelineSequence name="01-payment-order-entry" start={SCENES.paymentOrderEntry.start} duration={SCENES.paymentOrderEntry.duration}><PaymentOrderEntryScene/></TimelineSequence>
    <TimelineSequence name="02-jurisdiction-and-objection" start={SCENES.jurisdictionAndObjection.start} duration={SCENES.jurisdictionAndObjection.duration}><JurisdictionAndObjectionScene/></TimelineSequence>
    <TimelineSequence name="03-order-effects-and-lawsuits" start={SCENES.orderEffectsAndLawsuits.start} duration={SCENES.orderEffectsAndLawsuits.duration}><OrderEffectsAndLawsuitsScene/></TimelineSequence>
  </AbsoluteFill>;
