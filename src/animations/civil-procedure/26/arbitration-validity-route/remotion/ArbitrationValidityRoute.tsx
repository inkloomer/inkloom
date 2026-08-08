import type {CSSProperties,ReactNode} from 'react';
import {Clock3, FileSignature, GitCompare, Gavel, Landmark, Network, Scale, ShieldAlert, Workflow} from 'lucide-react';
import {AbsoluteFill,interpolate,useCurrentFrame} from 'remotion';
import {CLAMP,TimelineSequence,createMotionPrimitives} from '../../../../shared/remotion-runtime';
import {SCENES,toSourceFrame} from './storyboard';

const C={bg:'#202a2c',ink:'#f3efe2',red:'#e3a72f',teal:'#18a08b',gold:'#d95043',paper:'#fffdf7'};
const STYLE={"backgroundImage":"linear-gradient(90deg,#18a08b14 1px,transparent 1px),linear-gradient(#e3a72f12 1px,transparent 1px)","backgroundSize":"44px 44px","codeLeft":72,"codeTop":46,"codeWidth":118,"codeHeight":70,"codeRadius":6,"codeRotate":"0deg","titleLeft":224,"titleTop":44,"titleRight":72,"titleSize":48,"titleAlign":"left","ruleLeft":224,"ruleRight":72,"ruleTop":134,"contentTop":164,"nodeRadius":6,"nodeBorderWidth":3,"nodeShadow":"0 0 0 5px #18a08b18","nodeClip":"polygon(0 0,96% 0,100% 14%,100% 100%,0 100%)","nodePadding":"23px 25px","iconRadius":6} as const;
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

const Knowledge=({index,icon,label,detail,...data}:{index:number;icon:ReactNode;label:string;detail:string;'data-final-knowledge':string})=>{const textColor=index%3===0?C.bg:C.ink;return <Enter delay={24+index*18} from={index%2===0?'left':'right'} style={{height:'100%'}}><div {...data} data-audit-boundary="true" style={{height:'100%',minHeight:112,color:textColor,backgroundColor:index%3===0?C.paper:index%3===1?C.teal+'12':C.gold+'18',border:STYLE.nodeBorderWidth+'px solid '+(index%3===0?C.ink:index%3===1?C.teal:C.gold),boxShadow:STYLE.nodeShadow,padding:STYLE.nodePadding,borderRadius:STYLE.nodeRadius,clipPath:STYLE.nodeClip,display:'grid',gridTemplateColumns:'48px minmax(0,1fr)',gridTemplateRows:'auto 1fr',columnGap:16,alignContent:'start'}}>
  <div style={{gridRow:'1 / 3',width:46,height:46,display:'grid',placeItems:'center',backgroundColor:index%2===0?C.red:C.teal,color:C.paper,borderRadius:STYLE.iconRadius}}>{icon}</div>
  <div style={{color:textColor,fontSize:30,fontWeight:900,lineHeight:1.18,borderBottom:'3px solid '+(index%2===0?C.gold:C.red),paddingBottom:8}}>{label}</div>
  <div style={{color:textColor,fontSize:23,fontWeight:650,lineHeight:1.5,paddingTop:10,whiteSpace:'pre-wrap'}}>{detail.replaceAll('｜',' · ')}</div>
  </div></Enter>};

export const ArbitrableScopeScene=()=> <Shell code="26.1" title="哪些纠纷能进入仲裁"><div data-layout="arbitrable-scope-direct-boundary-diagram" data-visual-anchor="boundary" data-visual-grammar="property-disputes,status-exclusions,labor-exclusion,statutory-arbitration" data-text-treatments="label-block,external-negation,soft-highlight" data-focal-rule="arbitrable-scope-rule" data-focal-channels="enclosure,icon,contrast" style={{position:'absolute',inset:0}}>
      <Diagram anchor="boundary" count={4}>
        <Knowledge data-final-knowledge="property-disputes" index={0} icon={<Scale size={34}/>} label="可仲裁" detail="平等主体之间合同和其他财产权益纠纷"/>
        <Knowledge data-final-knowledge="status-disputes-excluded" index={1} icon={<Scale size={34}/>} label="身份关系排除" detail="婚姻、收养、监护、扶养、继承"/>
        <Knowledge data-final-knowledge="labor-disputes-excluded" index={2} icon={<Scale size={34}/>} label="劳动争议排除" detail="不适用《仲裁法》仲裁"/>
        <Knowledge data-final-knowledge="special-statutes" index={3} icon={<Scale size={34}/>} label="特别法路径" detail="依法应由行政机关处理等事项不进入民商事仲裁"/>
      </Diagram>
    </div></Shell>;

export const AgreementValidityScene=()=> <Shell code="26.2" title="仲裁协议有效要件与独立性"><div data-layout="agreement-validity-direct-flow-target-diagram" data-visual-anchor="flow-target" data-visual-grammar="written-form,intent,arbitrable-matter,unique-institution,separability" data-text-treatments="label-block,thin-underline,stamp" data-focal-rule="agreement-validity-rule" data-focal-channels="connector,icon,enclosure" style={{position:'absolute',inset:0}}>
      <Diagram anchor="flow-target" count={5}>
        <Knowledge data-final-knowledge="written-arbitration-form" index={0} icon={<FileSignature size={34}/>} label="书面形式" detail="仲裁条款或其他书面仲裁协议"/>
        <Knowledge data-final-knowledge="clear-arbitration-intent" index={1} icon={<FileSignature size={34}/>} label="仲裁意思" detail="存在明确提交仲裁的合意"/>
        <Knowledge data-final-knowledge="arbitrable-subject" index={2} icon={<FileSignature size={34}/>} label="可仲裁事项" detail="约定争议属于法定仲裁范围"/>
        <Knowledge data-final-knowledge="unique-institution" index={3} icon={<FileSignature size={34}/>} label="明确机构" detail="须能确定唯一仲裁机构"/>
        <Knowledge data-final-knowledge="agreement-separability" index={4} icon={<FileSignature size={34}/>} label="协议独立性" detail="合同不成立、无效、变更、终止、撤销不当然影响仲裁协议"/>
      </Diagram>
    </div></Shell>;

export const ChoiceAndMultipleInstitutionsScene=()=> <Shell code="26.3" title="“或裁或审”与多机构约定"><div data-layout="choice-and-multiple-institutions-direct-comparison-axis-diagram" data-visual-anchor="comparison-axis" data-visual-grammar="arbitration-or-litigation,multiple-institutions,selection-agreement,no-selection,partial-validity" data-text-treatments="external-negation,label-block,stamp" data-focal-rule="choice-and-multiple-institutions-rule" data-focal-channels="contrast,spatial,icon" style={{position:'absolute',inset:0}}>
      <Diagram anchor="comparison-axis" count={4}>
        <Knowledge data-final-knowledge="arbitrate-or-litigate-invalid" index={0} icon={<GitCompare size={34}/>} label="或裁或审" detail="原则上无效"/>
        <Knowledge data-final-knowledge="multiple-institutions-choice" index={1} icon={<GitCompare size={34}/>} label="多个机构" detail="当事人可以协议选择其一"/>
        <Knowledge data-final-knowledge="no-institution-choice" index={2} icon={<GitCompare size={34}/>} label="不能协商" detail="约定因机构不确定而无效"/>
        <Knowledge data-final-knowledge="independent-valid-part" index={3} icon={<GitCompare size={34}/>} label="部分可分" detail="可确定的仲裁合意与无效部分依法区分"/>
      </Diagram>
    </div></Shell>;

export const TimingAndAuthorityScene=()=> <Shell code="26.4" title="首次开庭前异议与确认效力机关"><div data-layout="timing-and-authority-direct-timeline-gate-diagram" data-visual-anchor="timeline-gate" data-visual-grammar="court-filing,first-hearing-deadline,waiver,arbitration-authority,court-priority" data-text-treatments="thin-underline,label-block,stamp" data-focal-rule="timing-and-authority-rule" data-focal-channels="motion,locator,contrast" style={{position:'absolute',inset:0}}>
      <Diagram anchor="timeline-gate" count={5}>
        <Knowledge data-final-knowledge="court-dismissal-on-agreement" index={0} icon={<Clock3 size={34}/>} label="法院受案" detail="发现有效协议不予受理或驳回起诉"/>
        <Knowledge data-final-knowledge="before-first-hearing" index={1} icon={<Clock3 size={34}/>} label="首次开庭前" detail="被告提出有效协议→驳回起诉；仲裁效力异议也原则上此时提出"/>
        <Knowledge data-final-knowledge="late-objection-waiver" index={2} icon={<Clock3 size={34}/>} label="逾期提出" detail="视为放弃仲裁协议"/>
        <Knowledge data-final-knowledge="validity-authorities" index={3} icon={<Clock3 size={34}/>} label="确认机关" detail="约定仲裁机构、仲裁庭或有连接点的中级法院"/>
        <Knowledge data-final-knowledge="court-priority-rule" index={4} icon={<Clock3 size={34}/>} label="冲突处理" detail="一方找法院一方找仲裁机构，法院优先；仲裁机构已先决定除外"/>
      </Diagram>
    </div></Shell>;

export const RelativityAndReviewScene=()=> <Shell code="26.5" title="仲裁协议相对性与裁决司法审查"><div data-layout="relativity-and-review-direct-document-fork-diagram" data-visual-anchor="document-fork" data-visual-grammar="party-relativity,statutory-extension,third-party-boundary,set-aside,non-enforcement" data-text-treatments="label-block,external-negation,stamp" data-focal-rule="relativity-and-review-rule" data-focal-channels="connector,icon,contrast" style={{position:'absolute',inset:0}}>
      <Diagram anchor="document-fork" count={5}>
        <Knowledge data-final-knowledge="agreement-relativity" index={0} icon={<ShieldAlert size={34}/>} label="相对性原则" detail="原则上只约束协议当事人"/>
        <Knowledge data-final-knowledge="statutory-extension" index={1} icon={<ShieldAlert size={34}/>} label="法定扩张" detail="合并分立、继承、债权债务转让等依法扩张"/>
        <Knowledge data-final-knowledge="third-party-boundary" index={2} icon={<ShieldAlert size={34}/>} label="第三人边界" detail="代位权、担保、股东代表等逐一判断当前争议双方"/>
        <Knowledge data-final-knowledge="award-set-aside" index={3} icon={<ShieldAlert size={34}/>} label="撤销裁决" detail="由有管辖权法院依审查事由监督"/>
        <Knowledge data-final-knowledge="award-non-enforcement" index={4} icon={<ShieldAlert size={34}/>} label="不予执行" detail="执行阶段依法定事由审查，区别于仲裁内部程序"/>
      </Diagram>
    </div></Shell>;

export const ArbitrationProcedureScene=()=> <Shell code="26.6" title="仲裁程序：从保全到裁决的闭环"><div data-layout="arbitration-procedure-direct-flow-path-diagram" data-visual-anchor="flow-path" data-visual-grammar="pre-arbitration-preservation,in-arbitration-preservation,tribunal-formation,recusal,hearing-confidentiality,settlement-mediation-award" data-text-treatments="label-block,thin-underline,stamp" data-focal-rule="arbitration-procedure-rule" data-focal-channels="connector,icon,motion" style={{position:'absolute',inset:0}}>
      <Diagram anchor="flow-path" count={6}>
        <Knowledge data-final-knowledge="pre-arbitration-preservation" index={0} icon={<Workflow size={34}/>} label="仲裁前保全" detail="直接向有管辖权的法院申请诉前保全或证据保全"/>
        <Knowledge data-final-knowledge="in-arbitration-preservation" index={1} icon={<Workflow size={34}/>} label="仲裁中保全" detail="向仲裁机构申请，由仲裁机构将申请提交法院处理"/>
        <Knowledge data-final-knowledge="tribunal-formation" index={2} icon={<Workflow size={34}/>} label="仲裁庭组成" detail="独任或合议先由当事人约定；未按期选定时由主任依规则指定"/>
        <Knowledge data-final-knowledge="arbitrator-recusal" index={3} icon={<Workflow size={34}/>} label="仲裁员回避" detail="按原程序重新选定或指定；程序是否重新进行由仲裁庭决定"/>
        <Knowledge data-final-knowledge="hearing-and-confidentiality" index={4} icon={<Workflow size={34}/>} label="审理方式" detail="开庭为原则，协议可书面审理；不公开为原则，法定秘密不得公开"/>
        <Knowledge data-final-knowledge="settlement-mediation-award" index={5} icon={<Workflow size={34}/>} label="结案通道" detail="和解、调解可转化为裁决书；撤回后仍按原仲裁协议重新申请"/>
      </Diagram>
    </div></Shell>;

export const AwardSetAsideScene=()=> <Shell code="26.7" title="撤销仲裁裁决：三个月、中院、法定事由"><div data-layout="award-set-aside-direct-boundary-diagram" data-visual-anchor="boundary" data-visual-grammar="three-month-limit,seat-intermediate-court,statutory-review-grounds,re-arbitration-window,no-further-remedy" data-text-treatments="thin-underline,label-block,stamp" data-focal-rule="award-set-aside-rule" data-focal-channels="enclosure,icon,contrast" style={{position:'absolute',inset:0}}>
      <Diagram anchor="boundary" count={5}>
        <Knowledge data-final-knowledge="three-month-set-aside-limit" index={0} icon={<Gavel size={34}/>} label="申请期限" detail="自收到裁决书之日起 3 个月内"/>
        <Knowledge data-final-knowledge="seat-intermediate-court" index={1} icon={<Gavel size={34}/>} label="审查法院" detail="仲裁机构所在地中级人民法院"/>
        <Knowledge data-final-knowledge="statutory-set-aside-grounds" index={2} icon={<Gavel size={34}/>} label="法定事由" detail="协议、权限、程序错误；伪造或隐瞒证据；仲裁员徇私枉法"/>
        <Knowledge data-final-knowledge="limited-rearbitration" index={3} icon={<Gavel size={34}/>} label="重新仲裁" detail="仅伪造证据或隐瞒重要证据时可通知重新仲裁"/>
        <Knowledge data-final-knowledge="set-aside-consequence" index={4} icon={<Gavel size={34}/>} label="后续路径" detail="裁决被撤销后可起诉，或重新达成仲裁协议后申请仲裁"/>
      </Diagram>
    </div></Shell>;

export const EnforcementReviewScene=()=> <Shell code="26.8" title="执行与不予执行：执行阶段的司法阀门"><div data-layout="enforcement-review-direct-flow-target-diagram" data-visual-anchor="flow-target" data-visual-grammar="enforcement-court,non-enforcement-application,shared-review-grounds,barred-repeat-ground,post-nonenforcement-route" data-text-treatments="label-block,external-negation,stamp" data-focal-rule="enforcement-review-rule" data-focal-channels="connector,icon,enclosure" style={{position:'absolute',inset:0}}>
      <Diagram anchor="flow-target" count={5}>
        <Knowledge data-final-knowledge="award-enforcement-court" index={0} icon={<Landmark size={34}/>} label="执行管辖" detail="被执行人住所地或财产所在地中院"/>
        <Knowledge data-final-knowledge="non-enforcement-in-execution" index={1} icon={<Landmark size={34}/>} label="申请时点" detail="被申请人在裁决执行程序中申请不予执行"/>
        <Knowledge data-final-knowledge="shared-review-grounds" index={2} icon={<Landmark size={34}/>} label="审查事由" detail="与撤销裁决的程序性事由基本同构"/>
        <Knowledge data-final-knowledge="barred-repeat-ground" index={3} icon={<Landmark size={34}/>} label="不予支持" detail="调解书、依和解作出的裁决，或撤销申请被驳后重复同一理由"/>
        <Knowledge data-final-knowledge="post-nonenforcement-route" index={4} icon={<Landmark size={34}/>} label="不予执行后" detail="可起诉，或重新达成仲裁协议后申请仲裁"/>
      </Diagram>
    </div></Shell>;

export const ArbitrationReportingScene=()=> <Shell code="26.9" title="仲裁司法审查报核：否定性裁定逐级上报"><div data-layout="arbitration-reporting-direct-timeline-gate-diagram" data-visual-anchor="timeline-gate" data-visual-grammar="negative-rulings,intermediate-court-plan,high-court-review,foreign-public-interest-exception,supreme-court-review" data-text-treatments="label-block,thin-underline,stamp" data-focal-rule="arbitration-reporting-rule" data-focal-channels="motion,locator,connector" style={{position:'absolute',inset:0}}>
      <Diagram anchor="timeline-gate" count={5}>
        <Knowledge data-final-knowledge="reportable-negative-rulings" index={0} icon={<Network size={34}/>} label="需报核裁定" detail="拟确认仲裁协议无效、撤销裁决或不予执行"/>
        <Knowledge data-final-knowledge="intermediate-court-proposal" index={1} icon={<Network size={34}/>} label="中院拟作否定裁定" detail="不得直接作出，先启动内部报核程序"/>
        <Knowledge data-final-knowledge="high-court-review" index={2} icon={<Network size={34}/>} label="一般路径" detail="报高院审核，按高院审核意见作出裁定"/>
        <Knowledge data-final-knowledge="foreign-public-interest-exception" index={3} icon={<Network size={34}/>} label="特殊情形" detail="涉外涉港澳台，或拟以违背社会公共利益否定裁决"/>
        <Knowledge data-final-knowledge="supreme-court-review" index={4} icon={<Network size={34}/>} label="最高法报核" detail="特殊情形中高院拟同意的，继续报最高法审核"/>
      </Diagram>
    </div></Shell>;

export const ArbitrationValidityRoute=()=> <AbsoluteFill>    <TimelineSequence name="01-arbitrable-scope" start={SCENES.arbitrableScope.start} duration={SCENES.arbitrableScope.duration}><ArbitrableScopeScene/></TimelineSequence>
    <TimelineSequence name="02-agreement-validity" start={SCENES.agreementValidity.start} duration={SCENES.agreementValidity.duration}><AgreementValidityScene/></TimelineSequence>
    <TimelineSequence name="03-choice-and-multiple-institutions" start={SCENES.choiceAndMultipleInstitutions.start} duration={SCENES.choiceAndMultipleInstitutions.duration}><ChoiceAndMultipleInstitutionsScene/></TimelineSequence>
    <TimelineSequence name="04-timing-and-authority" start={SCENES.timingAndAuthority.start} duration={SCENES.timingAndAuthority.duration}><TimingAndAuthorityScene/></TimelineSequence>
    <TimelineSequence name="05-relativity-and-review" start={SCENES.relativityAndReview.start} duration={SCENES.relativityAndReview.duration}><RelativityAndReviewScene/></TimelineSequence>
    <TimelineSequence name="06-arbitration-procedure" start={SCENES.arbitrationProcedure.start} duration={SCENES.arbitrationProcedure.duration}><ArbitrationProcedureScene/></TimelineSequence>
    <TimelineSequence name="07-award-set-aside" start={SCENES.awardSetAside.start} duration={SCENES.awardSetAside.duration}><AwardSetAsideScene/></TimelineSequence>
    <TimelineSequence name="08-enforcement-review" start={SCENES.enforcementReview.start} duration={SCENES.enforcementReview.duration}><EnforcementReviewScene/></TimelineSequence>
    <TimelineSequence name="09-arbitration-reporting" start={SCENES.arbitrationReporting.start} duration={SCENES.arbitrationReporting.duration}><ArbitrationReportingScene/></TimelineSequence>
  </AbsoluteFill>;
