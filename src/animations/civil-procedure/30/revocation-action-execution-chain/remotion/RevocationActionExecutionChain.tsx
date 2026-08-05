import type {CSSProperties,ReactNode} from 'react';
import {KeyRound, PackageOpen, Warehouse} from 'lucide-react';
import {AbsoluteFill,interpolate,useCurrentFrame} from 'remotion';
import {CLAMP,TimelineSequence,createMotionPrimitives} from '../../../../shared/remotion-runtime';
import {SCENES,toSourceFrame} from './storyboard';

const C={bg:'#f1f2ed',ink:'#24323a',red:'#c24c35',teal:'#1a7b72',gold:'#dfa526',paper:'#fffdf7'};
const STYLE={"backgroundImage":"linear-gradient(0deg,#c24c350c 0 24%,transparent 24% 76%,#1a7b720c 76%)","backgroundSize":"100% 100%","codeLeft":74,"codeTop":44,"codeWidth":150,"codeHeight":72,"codeRadius":2,"codeRotate":"0deg","titleLeft":258,"titleTop":44,"titleRight":74,"titleSize":48,"titleAlign":"left","ruleLeft":74,"ruleRight":320,"ruleTop":138,"contentTop":168,"nodeRadius":2,"nodeBorderWidth":4,"nodeShadow":"10px 10px 0 #24323a24","nodeClip":"polygon(0 0,94% 0,100% 18%,100% 100%,0 100%)","nodePadding":"24px 27px","iconRadius":2} as const;
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

export const PartiesJurisdictionPreservationScene=()=> <Shell code="30.1" title="共同被告、管辖与保全入口"><div data-layout="parties-jurisdiction-preservation-direct-boundary-diagram" data-visual-anchor="boundary" data-visual-grammar="creditor-plaintiff,co-defendants,consolidation,defendant-domicile,exclusive-forum,preservation" data-text-treatments="label-block,thin-underline,stamp" data-focal-rule="parties-jurisdiction-preservation-rule" data-focal-channels="enclosure,icon,contrast" style={{position:'absolute',inset:0}}>
      <Diagram anchor="boundary" count={6}>
        <Knowledge data-final-knowledge="creditor-revocation-plaintiff" index={0} icon={<Warehouse size={34}/>} label="债权人" detail="原告"/>
        <Knowledge data-final-knowledge="debtor-relative-codefendants" index={1} icon={<Warehouse size={34}/>} label="债务人 + 相对人" detail="共同被告"/>
        <Knowledge data-final-knowledge="multiple-creditors-consolidate" index={2} icon={<Warehouse size={34}/>} label="多个债权人" detail="针对同一处分行为可合并审理"/>
        <Knowledge data-final-knowledge="defendant-domicile-forum" index={3} icon={<Warehouse size={34}/>} label="通常管辖" detail="被告住所地法院"/>
        <Knowledge data-final-knowledge="exclusive-forum-boundary" index={4} icon={<Warehouse size={34}/>} label="专属管辖" detail="基础关系触发专属管辖时优先"/>
        <Knowledge data-final-knowledge="relative-property-preservation" index={5} icon={<Warehouse size={34}/>} label="财产保全" detail="可申请保全相对人财产"/>
      </Diagram>
    </div></Shell>;

export const AssetReturnRuleScene=()=> <Shell code="30.2" title="撤销后财产入库，不直接清偿债权人"><div data-layout="asset-return-rule-direct-flow-path-diagram" data-visual-anchor="flow-path" data-visual-grammar="disposition-revoked,retroactive-invalidity,return-or-compensation,debtor-estate,no-direct-payment" data-text-treatments="label-block,soft-highlight,external-negation" data-focal-rule="asset-return-rule-rule" data-focal-channels="connector,motion,contrast" style={{position:'absolute',inset:0}}>
      <Diagram anchor="flow-path" count={5}>
        <Knowledge data-final-knowledge="disposition-revoked" index={0} icon={<PackageOpen size={34}/>} label="撤销处分" detail="影响债权实现的行为被撤销"/>
        <Knowledge data-final-knowledge="retroactive-no-effect" index={1} icon={<PackageOpen size={34}/>} label="溯及效果" detail="自始没有法律约束力"/>
        <Knowledge data-final-knowledge="return-or-compensate" index={2} icon={<PackageOpen size={34}/>} label="相对人责任" detail="返还财产或折价补偿"/>
        <Knowledge data-final-knowledge="debtor-estate-entry" index={3} icon={<PackageOpen size={34}/>} label="入库规则" detail="财产回到债务人责任财产"/>
        <Knowledge data-final-knowledge="no-direct-creditor-payment" index={4} icon={<PackageOpen size={34}/>} label="不是代位权" detail="相对人不直接向债权人清偿"/>
      </Diagram>
    </div></Shell>;

export const TwoJudgmentExecutionScene=()=> <Shell code="30.3" title="两份生效文书组成执行钥匙"><div data-layout="two-judgment-execution-direct-flow-target-diagram" data-visual-anchor="flow-target" data-visual-grammar="revocation-judgment,debt-judgment,two-effective-instruments,enforce-debtor-right,creditor-realization" data-text-treatments="stamp,label-block,thin-underline" data-focal-rule="two-judgment-execution-rule" data-focal-channels="connector,enclosure,icon" style={{position:'absolute',inset:0}}>
      <Diagram anchor="flow-target" count={5}>
        <Knowledge data-final-knowledge="revocation-effective-judgment" index={0} icon={<KeyRound size={34}/>} label="文书一" detail="撤销权诉讼生效文书：完成入库"/>
        <Knowledge data-final-knowledge="debt-effective-judgment" index={1} icon={<KeyRound size={34}/>} label="文书二" detail="债权人与债务人诉讼生效文书：确认可执行债权"/>
        <Knowledge data-final-knowledge="two-document-key" index={2} icon={<KeyRound size={34}/>} label="共同条件" detail="通常需要两份生效文书"/>
        <Knowledge data-final-knowledge="enforce-returned-right" index={3} icon={<KeyRound size={34}/>} label="执行对象" detail="法院对债务人对相对人享有的权利采取措施"/>
        <Knowledge data-final-knowledge="creditor-realizes-claim" index={4} icon={<KeyRound size={34}/>} label="最终效果" detail="通过执行链实现债权，而非撤销判决直接受偿"/>
      </Diagram>
    </div></Shell>;

export const RevocationActionExecutionChain=()=> <AbsoluteFill>    <TimelineSequence name="01-parties-jurisdiction-preservation" start={SCENES.partiesJurisdictionPreservation.start} duration={SCENES.partiesJurisdictionPreservation.duration}><PartiesJurisdictionPreservationScene/></TimelineSequence>
    <TimelineSequence name="02-asset-return-rule" start={SCENES.assetReturnRule.start} duration={SCENES.assetReturnRule.duration}><AssetReturnRuleScene/></TimelineSequence>
    <TimelineSequence name="03-two-judgment-execution" start={SCENES.twoJudgmentExecution.start} duration={SCENES.twoJudgmentExecution.duration}><TwoJudgmentExecutionScene/></TimelineSequence>
  </AbsoluteFill>;
