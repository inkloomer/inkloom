import type {CSSProperties,ReactNode} from 'react';
import {BadgeCheck, GitMerge, MapPinned, UsersRound} from 'lucide-react';
import {AbsoluteFill,interpolate,useCurrentFrame} from 'remotion';
import {CLAMP,TimelineSequence,createMotionPrimitives} from '../../../../shared/remotion-runtime';
import {SCENES,toSourceFrame} from './storyboard';

const C={bg:'#edf1ed',ink:'#263134',red:'#c9473d',teal:'#147a72',gold:'#d5a12b',paper:'#fffdf7'};
const STYLE={"backgroundImage":"radial-gradient(circle,#26313418 2px,transparent 3px)","backgroundSize":"34px 34px","codeLeft":72,"codeTop":44,"codeWidth":124,"codeHeight":76,"codeRadius":38,"codeRotate":"0deg","titleLeft":228,"titleTop":46,"titleRight":72,"titleSize":48,"titleAlign":"left","ruleLeft":228,"ruleRight":72,"ruleTop":136,"contentTop":168,"nodeRadius":4,"nodeBorderWidth":3,"nodeShadow":"8px 8px 0 #c9473d26","nodeClip":"none","nodePadding":"23px 25px","iconRadius":23} as const;
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

export const ThreePartyRolesScene=()=> <Shell code="29.1" title="代位权诉讼的三方诉讼地位"><div data-layout="three-party-roles-direct-role-pair-diagram" data-visual-anchor="role-pair" data-visual-grammar="creditor-plaintiff,relative-party-defendant,debtor-third-party,multiple-creditors,proportional-shares" data-text-treatments="label-block,soft-highlight,thin-underline" data-focal-rule="three-party-roles-rule" data-focal-channels="icon,connector,spatial" style={{position:'absolute',inset:0}}>
      <Diagram anchor="role-pair" count={5}>
        <Knowledge data-final-knowledge="creditor-as-plaintiff" index={0} icon={<UsersRound size={34}/>} label="债权人" detail="原告"/>
        <Knowledge data-final-knowledge="relative-as-defendant" index={1} icon={<UsersRound size={34}/>} label="相对人" detail="被告"/>
        <Knowledge data-final-knowledge="debtor-as-third-party" index={2} icon={<UsersRound size={34}/>} label="债务人" detail="无独立请求权第三人"/>
        <Knowledge data-final-knowledge="multiple-creditors-merge" index={3} icon={<UsersRound size={34}/>} label="多个债权人" detail="针对同一相对人可合并审理"/>
        <Knowledge data-final-knowledge="proportional-performance" index={4} icon={<UsersRound size={34}/>} label="债权不足" detail="按各债权比例确定相对人履行份额"/>
      </Diagram>
    </div></Shell>;

export const JurisdictionAndArbitrationScene=()=> <Shell code="29.2" title="法定管辖不受基础协议外推"><div data-layout="jurisdiction-and-arbitration-direct-boundary-diagram" data-visual-anchor="boundary" data-visual-grammar="relative-domicile,exclusive-jurisdiction,no-prorogation-effect,arbitration-relativity,prehearing-arbitration-stay" data-text-treatments="external-negation,label-block,stamp" data-focal-rule="jurisdiction-and-arbitration-rule" data-focal-channels="enclosure,contrast,icon" style={{position:'absolute',inset:0}}>
      <Diagram anchor="boundary" count={5}>
        <Knowledge data-final-knowledge="relative-domicile-forum" index={0} icon={<MapPinned size={34}/>} label="通常管辖" detail="相对人住所地法院"/>
        <Knowledge data-final-knowledge="exclusive-jurisdiction-exception" index={1} icon={<MapPinned size={34}/>} label="例外" detail="依法适用专属管辖"/>
        <Knowledge data-final-knowledge="private-jurisdiction-no-effect" index={2} icon={<MapPinned size={34}/>} label="基础管辖协议" detail="债务人与相对人的约定不影响代位诉讼"/>
        <Knowledge data-final-knowledge="arbitration-relativity" index={3} icon={<MapPinned size={34}/>} label="仲裁相对性" detail="基础仲裁协议不妨碍债权人起诉"/>
        <Knowledge data-final-knowledge="prehearing-arbitration-stay" index={4} icon={<MapPinned size={34}/>} label="首次开庭前仲裁" detail="债务人或相对人申请仲裁，法院可中止代位诉讼"/>
      </Diagram>
    </div></Shell>;

export const RelatedActionsRoutingScene=()=> <Shell code="29.3" title="与相关诉讼的合并、中止顺序"><div data-layout="related-actions-routing-direct-flow-path-diagram" data-visual-anchor="flow-path" data-visual-grammar="creditor-v-debtor,same-court-merge,different-court-stay,debtor-v-relative,excess-only" data-text-treatments="label-block,thin-underline,stamp" data-focal-rule="related-actions-routing-rule" data-focal-channels="connector,motion,contrast" style={{position:'absolute',inset:0}}>
      <Diagram anchor="flow-path" count={5}>
        <Knowledge data-final-knowledge="creditor-debtor-action" index={0} icon={<GitMerge size={34}/>} label="债权人先诉债务人" detail="基础债权诉讼与代位诉讼并存"/>
        <Knowledge data-final-knowledge="same-court-consolidation" index={1} icon={<GitMerge size={34}/>} label="同一法院有管辖" detail="可以合并审理"/>
        <Knowledge data-final-knowledge="different-court-suspension" index={2} icon={<GitMerge size={34}/>} label="不同法院" detail="基础债权诉讼终结前，中止代位诉讼"/>
        <Knowledge data-final-knowledge="debtor-relative-action" index={3} icon={<GitMerge size={34}/>} label="债务人再诉相对人" detail="不得起诉被代位部分"/>
        <Knowledge data-final-knowledge="debtor-excess-action" index={4} icon={<GitMerge size={34}/>} label="超过代位部分" detail="可另诉；代位诉讼终结前依法中止"/>
      </Diagram>
    </div></Shell>;

export const DirectPaymentAndDismissalScene=()=> <Shell code="29.4" title="成立直接清偿；不成立驳回诉请"><div data-layout="direct-payment-and-dismissal-direct-flow-target-diagram" data-visual-anchor="flow-target" data-visual-grammar="subrogation-established,direct-payment,relations-terminate,conditions-fail,dismiss-merits,new-facts" data-text-treatments="label-block,stamp,external-negation" data-focal-rule="direct-payment-and-dismissal-rule" data-focal-channels="connector,icon,enclosure" style={{position:'absolute',inset:0}}>
      <Diagram anchor="flow-target" count={6}>
        <Knowledge data-final-knowledge="subrogation-established" index={0} icon={<BadgeCheck size={34}/>} label="代位权成立" detail="相对人向债权人直接履行"/>
        <Knowledge data-final-knowledge="direct-payment-rule" index={1} icon={<BadgeCheck size={34}/>} label="直接清偿" detail="不是先回到债务人责任财产"/>
        <Knowledge data-final-knowledge="corresponding-relations-end" index={2} icon={<BadgeCheck size={34}/>} label="履行效果" detail="两层对应权利义务终止"/>
        <Knowledge data-final-knowledge="conditions-not-met" index={3} icon={<BadgeCheck size={34}/>} label="不符合条件" detail="实体判断代位权不成立"/>
        <Knowledge data-final-knowledge="dismiss-claim-not-action" index={4} icon={<BadgeCheck size={34}/>} label="裁判形式" detail="判决驳回诉讼请求，不是裁定驳回起诉"/>
        <Knowledge data-final-knowledge="new-fact-refiling" index={5} icon={<BadgeCheck size={34}/>} label="后续" detail="不影响依新事实再次起诉"/>
      </Diagram>
    </div></Shell>;

export const SubrogationLitigationNetwork=()=> <AbsoluteFill>    <TimelineSequence name="01-three-party-roles" start={SCENES.threePartyRoles.start} duration={SCENES.threePartyRoles.duration}><ThreePartyRolesScene/></TimelineSequence>
    <TimelineSequence name="02-jurisdiction-and-arbitration" start={SCENES.jurisdictionAndArbitration.start} duration={SCENES.jurisdictionAndArbitration.duration}><JurisdictionAndArbitrationScene/></TimelineSequence>
    <TimelineSequence name="03-related-actions-routing" start={SCENES.relatedActionsRouting.start} duration={SCENES.relatedActionsRouting.duration}><RelatedActionsRoutingScene/></TimelineSequence>
    <TimelineSequence name="04-direct-payment-and-dismissal" start={SCENES.directPaymentAndDismissal.start} duration={SCENES.directPaymentAndDismissal.duration}><DirectPaymentAndDismissalScene/></TimelineSequence>
  </AbsoluteFill>;
