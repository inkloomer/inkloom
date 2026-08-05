import type {CSSProperties,ReactNode} from 'react';
import {Handshake, MapPin, PlayCircle, Scale, Wrench} from 'lucide-react';
import {AbsoluteFill,interpolate,useCurrentFrame} from 'remotion';
import {CLAMP,TimelineSequence,createMotionPrimitives} from '../../../../shared/remotion-runtime';
import {SCENES,toSourceFrame} from './storyboard';

const C={bg:'#e8edf0',ink:'#172129',red:'#0a7a73',teal:'#c54135',gold:'#d89b21',paper:'#fffdf7'};
const STYLE={"backgroundImage":"linear-gradient(90deg,#0a7a7312 1px,transparent 1px),linear-gradient(#17212912 1px,transparent 1px)","backgroundSize":"38px 38px","codeLeft":72,"codeTop":46,"codeWidth":154,"codeHeight":68,"codeRadius":4,"codeRotate":"0deg","titleLeft":260,"titleTop":42,"titleRight":72,"titleSize":48,"titleAlign":"left","ruleLeft":72,"ruleRight":72,"ruleTop":136,"contentTop":166,"nodeRadius":4,"nodeBorderWidth":4,"nodeShadow":"6px 6px 0 #d89b2140,-6px -6px 0 #0a7a7320","nodeClip":"polygon(0 0,94% 0,100% 12%,100% 100%,6% 100%,0 88%)","nodePadding":"24px 26px","iconRadius":4} as const;
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

export const EnforcementLaunchClockScene=()=> <Shell code="24.1" title="生效文书与 2 年申请执行时效"><div data-layout="enforcement-launch-clock-direct-timeline-gate-diagram" data-visual-anchor="timeline-gate" data-visual-grammar="enforceable-title,clear-obligation,two-year-period,starting-points,suspension-interruption" data-text-treatments="thin-underline,label-block,stamp" data-focal-rule="enforcement-launch-clock-rule" data-focal-channels="motion,locator,icon" style={{position:'absolute',inset:0}}>
      <Diagram anchor="timeline-gate" count={5}>
        <Knowledge data-final-knowledge="enforceable-title" index={0} icon={<PlayCircle size={34}/>} label="执行依据" detail="生效法律文书"/>
        <Knowledge data-final-knowledge="clear-parties-performance" index={1} icon={<PlayCircle size={34}/>} label="可执行内容" detail="权利义务主体明确，给付内容明确"/>
        <Knowledge data-final-knowledge="two-year-limitation" index={2} icon={<PlayCircle size={34}/>} label="申请时效" detail="2 年"/>
        <Knowledge data-final-knowledge="limitation-starts" index={3} icon={<PlayCircle size={34}/>} label="分别起算" detail="履行期届满；分期最后一期；不作为义务违反时"/>
        <Knowledge data-final-knowledge="limitation-rules" index={4} icon={<PlayCircle size={34}/>} label="时效规则" detail="适用中止、中断"/>
      </Diagram>
    </div></Shell>;

export const StatutoryJurisdictionScene=()=> <Shell code="24.2" title="法定执行管辖与 10 日异议"><div data-layout="statutory-jurisdiction-direct-boundary-diagram" data-visual-anchor="boundary" data-visual-grammar="litigation-title-forum,arbitration-notary-forum,no-agreement,ten-day-objection,review-remedy" data-text-treatments="external-negation,label-block,thin-underline" data-focal-rule="statutory-jurisdiction-rule" data-focal-channels="enclosure,locator,contrast" style={{position:'absolute',inset:0}}>
      <Diagram anchor="boundary" count={5}>
        <Knowledge data-final-knowledge="litigation-title-jurisdiction" index={0} icon={<MapPin size={34}/>} label="诉讼文书" detail="一审法院或同级被执行财产所在地法院"/>
        <Knowledge data-final-knowledge="arbitration-notary-jurisdiction" index={1} icon={<MapPin size={34}/>} label="仲裁/公证文书" detail="被执行人住所地或财产所在地法院"/>
        <Knowledge data-final-knowledge="no-consensual-jurisdiction" index={2} icon={<MapPin size={34}/>} label="禁止协议扩张" detail="无协议管辖、应诉管辖"/>
        <Knowledge data-final-knowledge="ten-day-jurisdiction-objection" index={3} icon={<MapPin size={34}/>} label="异议期限" detail="收到执行通知书后 10 日内"/>
        <Knowledge data-final-knowledge="jurisdiction-review" index={4} icon={<MapPin size={34}/>} label="救济" detail="对异议裁定向上一级法院复议"/>
      </Diagram>
    </div></Shell>;

export const SecurityAndSettlementScene=()=> <Shell code="24.3" title="执行担保与执行和解不能混用"><div data-layout="security-and-settlement-direct-comparison-axis-diagram" data-visual-anchor="comparison-axis" data-visual-grammar="security-deferral,security-property,no-automatic-addition,settlement-completion,breach-election" data-text-treatments="label-block,soft-highlight,external-negation" data-focal-rule="security-and-settlement-rule" data-focal-channels="contrast,icon,spatial" style={{position:'absolute',inset:0}}>
      <Diagram anchor="comparison-axis" count={5}>
        <Knowledge data-final-knowledge="enforcement-security" index={0} icon={<Handshake size={34}/>} label="执行担保" detail="法院可决定暂缓执行"/>
        <Knowledge data-final-knowledge="security-property-direct" index={1} icon={<Handshake size={34}/>} label="担保财产" detail="期满后可直接执行担保财产"/>
        <Knowledge data-final-knowledge="no-guarantor-addition" index={2} icon={<Handshake size={34}/>} label="担保人身份" detail="不得当然追加为被执行人"/>
        <Knowledge data-final-knowledge="settlement-completed" index={3} icon={<Handshake size={34}/>} label="和解履行完毕" detail="执行程序终结"/>
        <Knowledge data-final-knowledge="settlement-breach-election" index={4} icon={<Handshake size={34}/>} label="和解不履行" detail="恢复原文书执行 或 就和解协议起诉，二选一"/>
      </Diagram>
    </div></Shell>;

export const ObjectionsAndActionsScene=()=> <Shell code="24.4" title="执行行为异议、案外人异议与异议之诉"><div data-layout="objections-and-actions-direct-document-fork-diagram" data-visual-anchor="document-fork" data-visual-grammar="conduct-legality,outsider-title,conduct-review,action-plaintiff-direction,third-party-status" data-text-treatments="label-block,stamp,external-negation" data-focal-rule="objections-and-actions-rule" data-focal-channels="connector,icon,contrast" style={{position:'absolute',inset:0}}>
      <Diagram anchor="document-fork" count={5}>
        <Knowledge data-final-knowledge="conduct-objection" index={0} icon={<Scale size={34}/>} label="执行行为异议" detail="审查执行行为是否合法"/>
        <Knowledge data-final-knowledge="outsider-objection" index={1} icon={<Scale size={34}/>} label="案外人异议" detail="审查执行标的权利归属并先作执行程序判断"/>
        <Knowledge data-final-knowledge="conduct-review-remedy" index={2} icon={<Scale size={34}/>} label="行为异议救济" detail="裁定后向上一级法院复议"/>
        <Knowledge data-final-knowledge="objection-action-direction" index={3} icon={<Scale size={34}/>} label="异议之诉原告方向" detail="案外人异议被驳回→案外人起诉；异议被支持→申请执行人起诉"/>
        <Knowledge data-final-knowledge="debtor-third-party" index={4} icon={<Scale size={34}/>} label="被执行人地位" detail="依其是否反对异议，列共同被告或无独立请求权第三人"/>
      </Diagram>
    </div></Shell>;

export const SpecialEnforcementMeasuresScene=()=> <Shell code="24.5" title="特殊执行措施的对象与边界"><div data-layout="special-enforcement-measures-direct-flow-target-diagram" data-visual-anchor="flow-target" data-visual-grammar="party-change,distribution,mature-claim,co-owned-property,specific-property,personal-remedies,delay-liability" data-text-treatments="label-block,thin-underline,stamp" data-focal-rule="special-enforcement-measures-rule" data-focal-channels="icon,spatial,connector" style={{position:'absolute',inset:0}}>
      <Diagram anchor="flow-target" count={6}>
        <Knowledge data-final-knowledge="party-change-addition" index={0} icon={<Wrench size={34}/>} label="主体变更追加" detail="仅依法定情形变更、追加当事人"/>
        <Knowledge data-final-knowledge="participation-distribution" index={1} icon={<Wrench size={34}/>} label="参与分配" detail="多个债权人依法进入同一财产分配"/>
        <Knowledge data-final-knowledge="mature-claim-execution" index={2} icon={<Wrench size={34}/>} label="到期债权" detail="向次债务人发出履行通知并处理异议"/>
        <Knowledge data-final-knowledge="coowned-specific-property" index={3} icon={<Wrench size={34}/>} label="共有/特定物" detail="依法分割或交付；不能交付时处理替代责任"/>
        <Knowledge data-final-knowledge="retained-title-property" index={4} icon={<Wrench size={34}/>} label="保留所有权标的" detail="按所有权与占有状态选择执行措施"/>
        <Knowledge data-final-knowledge="personal-and-delay-relief" index={5} icon={<Wrench size={34}/>} label="特殊履行责任" detail="赔礼道歉、恢复名誉；迟延履行利息或迟延履行金"/>
      </Diagram>
    </div></Shell>;

export const EnforcementControlNetwork=()=> <AbsoluteFill>    <TimelineSequence name="01-enforcement-launch-clock" start={SCENES.enforcementLaunchClock.start} duration={SCENES.enforcementLaunchClock.duration}><EnforcementLaunchClockScene/></TimelineSequence>
    <TimelineSequence name="02-statutory-jurisdiction" start={SCENES.statutoryJurisdiction.start} duration={SCENES.statutoryJurisdiction.duration}><StatutoryJurisdictionScene/></TimelineSequence>
    <TimelineSequence name="03-security-and-settlement" start={SCENES.securityAndSettlement.start} duration={SCENES.securityAndSettlement.duration}><SecurityAndSettlementScene/></TimelineSequence>
    <TimelineSequence name="04-objections-and-actions" start={SCENES.objectionsAndActions.start} duration={SCENES.objectionsAndActions.duration}><ObjectionsAndActionsScene/></TimelineSequence>
    <TimelineSequence name="05-special-enforcement-measures" start={SCENES.specialEnforcementMeasures.start} duration={SCENES.specialEnforcementMeasures.duration}><SpecialEnforcementMeasuresScene/></TimelineSequence>
  </AbsoluteFill>;
