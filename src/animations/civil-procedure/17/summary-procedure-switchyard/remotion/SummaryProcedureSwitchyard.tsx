import type {CSSProperties, ReactNode} from 'react';
import {Ban, Banknote, Clock3, FileCheck2, Gavel, GitBranch, Landmark, MapPin, Ship, Timer, UsersRound} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, createMotionPrimitives, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES, toSourceFrame} from './storyboard';

const C={paper:'#f7f5ee',ink:'#171a1d',green:'#19815f',greenSoft:'#dcefe7',amber:'#e5a729',amberSoft:'#f7e9bd',blue:'#2467a7',blueSoft:'#dce9f5',red:'#c9463d',redSoft:'#f5dcda',steel:'#d8dde0',white:'#fffefa'};
const PLAYER_CONTROL_SAFE_BOTTOM = 160;
const {Enter,StaggerEnter,MaskedReveal}=createMotionPrimitives(toSourceFrame);

const Shell=({code,title,children}:{code:string;title:string;children:ReactNode})=><AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{backgroundColor:C.paper,color:C.ink,overflow:'hidden'}}>
  <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(90deg,transparent 0 94px,rgba(23,26,29,.07) 95px)',backgroundSize:'96px 100%'}}/>
  <div style={{position:'absolute',left:76,top:46,width:92,height:92,display:'grid',placeItems:'center',backgroundColor:C.ink,color:C.white,fontSize:28,fontWeight:900}}>{code}</div>
  <MaskedReveal delay={0} style={{position:'absolute',left:198,top:55,fontSize:58,fontWeight:950,lineHeight:1.12}}>{title}</MaskedReveal>
  <div style={{position:'absolute',left:76,right:76,top:160,height:7,backgroundColor:C.ink}}/><div style={{position:'absolute',left:76,right:76,top:175,bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
</AbsoluteFill>;
const Plate=({children,color=C.ink,style}:{children:ReactNode;color?:string;style?:CSSProperties})=><div style={{backgroundColor:C.white,border:`4px solid ${color}`,boxShadow:`10px 10px 0 ${color}`,padding:'24px 28px',...style}}>{children}</div>;
const Lamp=({on,label,color}:{on?:boolean;label:string;color:string})=><div style={{display:'flex',alignItems:'center',gap:13,fontSize:24,fontWeight:850}}><span style={{width:25,height:25,borderRadius:'50%',backgroundColor:on?color:C.steel,border:`4px solid ${C.ink}`}}/>{label}</div>;
const Rail=({left,top,width,progress,color=C.green}:{left:number;top:number;width:number;progress:number;color?:string})=><div style={{position:'absolute',left,top,width,height:10,backgroundColor:C.steel}}><div style={{width:'100%',height:'100%',backgroundColor:color,scale:`${progress} 1`,transformOrigin:'left center'}}/><span style={{position:'absolute',right:-4,top:-10,borderTop:'15px solid transparent',borderBottom:'15px solid transparent',borderLeft:`24px solid ${color}`}}/></div>;

export const EntryAndExclusionsScene=()=>{
  const frame=toSourceFrame(useCurrentFrame()); const travel=interpolate(frame,[18,92],[0,1],CLAMP);
  const exclusions=['起诉时被告下落不明','一方人数众多','发回重审或再审','涉及国家利益、社会公共利益','第三人撤销之诉','其他不宜适用'];
  return <Shell code="17.1" title="简易程序先过两道门，再看负面清单">
    <div data-layout="court-entry-three-signal-gates-with-six-exclusion-sidings" data-visual-anchor="boundary" data-visual-grammar="jurisdiction-gate,instance-gate,exclusion-sidings" data-text-treatments="label-block,external-negation,stamp" data-focal-rule="basic-court-first-instance-only-and-six-exclusions-bind-all-entry-modes" data-focal-channels="icon,enclosure,connector" style={{position:'absolute',inset:0}}>
      <Enter delay={8} style={{position:'absolute',left:18,top:228}}><div data-stateful-source="case-token" style={{width:170,height:110,border:`5px solid ${C.ink}`,backgroundColor:C.amberSoft,display:'grid',placeItems:'center',fontSize:30,fontWeight:950}}><FileCheck2 size={40}/>案件</div></Enter>
      <Rail left={205} top={278} width={235} progress={travel}/>
      <StaggerEnter baseDelay={42} step={24} style={{position:'absolute',left:454,top:92,display:'flex',gap:28}}>
        <Plate color={C.blue} style={{width:250,height:300}}><Landmark size={58} color={C.blue}/><div style={{fontSize:35,fontWeight:950,marginTop:24}}>基层法院</div><div style={{fontSize:25,marginTop:16,lineHeight:1.4}}>及其派出法庭</div><Lamp on label="法院级别" color={C.green}/></Plate>
        <Plate color={C.green} style={{width:250,height:300}}><MapPin size={58} color={C.green}/><div style={{fontSize:35,fontWeight:950,marginTop:24}}>第一审</div><div style={{fontSize:25,marginTop:16,lineHeight:1.4}}>民事案件</div><Lamp on label="审级" color={C.green}/></Plate>
      </StaggerEnter>
      <Rail left={1050} top={278} width={110} progress={travel}/>
      <Enter delay={96} style={{position:'absolute',left:1175,top:30,width:612}}><Plate color={C.red} style={{height:560,boxShadow:'none'}}>
        <div style={{display:'flex',alignItems:'center',gap:16,fontSize:34,fontWeight:950,color:C.red}}><Ban size={48}/>六条禁入侧线</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'15px 18px',marginTop:24}}>{exclusions.map((x,i)=><div key={x} style={{minHeight:91,padding:'14px 15px',backgroundColor:i%2?C.paper:C.redSoft,borderLeft:`8px solid ${C.red}`,fontSize:23,lineHeight:1.35,fontWeight:800}}>{i+1}. {x}</div>)}</div>
      </Plate></Enter>
      <div data-stateful-terminal="case-token" style={{position:'absolute',left:807,top:435,width:335,padding:'18px 20px',backgroundColor:C.greenSoft,border:`4px solid ${C.green}`,fontSize:26,fontWeight:900}}>通过基础门的案件，仍须排除右侧六类</div>
      <div data-final-knowledge="basic-court-and-instance" style={{position:'absolute',left:455,top:430,width:320,fontSize:24,fontWeight:850,borderBottom:`5px solid ${C.blue}`,paddingBottom:9}}>仅基层法院 / 派出法庭的一审</div>
      <div data-final-knowledge="six-exclusions" style={{position:'absolute',left:1175,top:604,width:612,fontSize:23,color:C.red,fontWeight:900}}>任一命中：不得适用简易程序</div>
      <div data-final-knowledge="exclusions-bind-court-and-agreement" style={{position:'absolute',left:455,top:500,width:650,padding:'16px 20px',backgroundColor:C.ink,color:C.white,fontSize:25,fontWeight:900}}>负面清单同时封锁“法院依职权”和“当事人协议”</div>
    </div>
  </Shell>;
};

export const OperationAndConversionScene=()=>{
  const frame=toSourceFrame(useCurrentFrame()); const p=interpolate(frame,[26,102],[0,1],CLAMP);
  return <Shell code="17.2" title="两种入口，一条只能向普通程序切换的转辙线">
    <div data-layout="two-entry-switches-feed-one-way-procedure-turnout" data-visual-anchor="flow-path" data-visual-grammar="ex-officio-entry,agreement-entry,conversion-turnout,retained-facts" data-text-treatments="soft-highlight,thin-underline,stamp" data-focal-rule="summary-may-convert-to-ordinary-but-ordinary-cannot-return-after-hearing" data-focal-channels="connector,motion,contrast" style={{position:'absolute',inset:0}}>
      <StaggerEnter baseDelay={8} step={22} style={{position:'absolute',left:16,top:50,display:'grid',gap:24}}>
        <Plate color={C.green} style={{width:450,height:210}}><Landmark size={46} color={C.green}/><b style={{fontSize:32,marginLeft:18}}>职权适用</b><div style={{fontSize:24,lineHeight:1.45,marginTop:20}}>事实清楚 + 权利义务明确 + 争议不大</div></Plate>
        <Plate color={C.blue} style={{width:450,height:220}}><UsersRound size={46} color={C.blue}/><b style={{fontSize:32,marginLeft:18}}>协议适用</b><div style={{fontSize:24,lineHeight:1.45,marginTop:20}}>双方在开庭前提出；不得突破禁止性规定</div></Plate>
      </StaggerEnter>
      <Rail left={510} top={275} width={210} progress={p} color={C.blue}/>
      <Enter delay={66} style={{position:'absolute',left:735,top:112}}><div data-stateful-source="procedure-docket" data-stateful-terminal="procedure-docket" style={{width:330,height:315,backgroundColor:C.greenSoft,border:`8px solid ${C.green}`,display:'grid',placeItems:'center',textAlign:'center'}}><GitBranch size={76}/><div style={{fontSize:42,fontWeight:950}}>简易程序</div><div style={{fontSize:25}}>独任 · 3+1个月</div></div></Enter>
      <Rail left={1080} top={275} width={185} progress={p} color={C.amber}/>
      <Enter delay={104} style={{position:'absolute',left:1280,top:55,width:500}}><Plate color={C.amber} style={{height:470}}><div style={{fontSize:36,fontWeight:950}}>裁定转普通程序</div><div style={{marginTop:24,display:'grid',gap:18}}><div style={{padding:18,backgroundColor:C.amberSoft,fontSize:25}}>法院认为案情复杂</div><div style={{padding:18,backgroundColor:C.amberSoft,fontSize:25}}>当事人异议经审查成立</div><div style={{padding:18,borderLeft:`8px solid ${C.green}`,fontSize:24}}>此前双方确认的事实，可不再举证、质证</div><div style={{padding:18,borderLeft:`8px solid ${C.red}`,fontSize:24}}>普通程序审限自立案之日起算</div></div></Plate></Enter>
      <div data-final-knowledge="ex-officio-test" style={{position:'absolute',left:18,top:545,fontSize:24,fontWeight:900,color:C.green}}>三项“简单”条件 → 法院适用</div>
      <div data-final-knowledge="agreement-before-hearing" style={{position:'absolute',left:18,top:590,fontSize:24,fontWeight:900,color:C.blue}}>其余基层一审案件 → 双方可在开庭前约定</div>
      <div data-final-knowledge="ordinary-after-hearing-lock" style={{position:'absolute',left:540,top:525,width:650,padding:'18px',border:`4px solid ${C.red}`,fontSize:25,fontWeight:900}}><Ban size={34} style={{verticalAlign:'middle',marginRight:13}}/>普通程序已经开庭：不得再转简易程序</div>
      <div data-final-knowledge="summary-to-ordinary-grounds" style={{position:'absolute',left:1280,top:550,fontSize:23,fontWeight:900}}>复杂 / 异议成立 → 应当裁定转换</div>
      <div data-final-knowledge="confirmed-facts-retained" style={{position:'absolute',left:540,top:595,fontSize:23}}>已确认事实保留，不重复举证质证</div><div data-final-knowledge="time-from-filing" style={{position:'absolute',left:900,top:595,fontSize:23}}>审限仍从立案日计算</div>
    </div>
  </Shell>;
};

export const SmallClaimThresholdsScene=()=>{
  const frame=toSourceFrame(useCurrentFrame()); const p=interpolate(frame,[24,118],[0,1],CLAMP);
  return <Shell code="17.3" title="小额诉讼不是看“钱少”，而是看 W 的比例区间">
    <div data-layout="wage-ratio-gauge-with-authority-zones-and-maritime-branch" data-visual-anchor="comparison-axis" data-visual-grammar="money-claim-gate,ratio-axis,authority-zones,maritime-branch" data-text-treatments="soft-highlight,thin-underline,label-block" data-focal-rule="below-half-w-is-mandatory-and-up-to-double-w-can-be-agreed" data-focal-channels="locator,connector,contrast" style={{position:'absolute',inset:0}}>
      <Enter delay={6} style={{position:'absolute',left:20,top:55,width:385}}><Plate color={C.green} style={{height:430}}><Banknote size={64} color={C.green}/><div style={{fontSize:37,fontWeight:950,marginTop:25}}>先过案件性质门</div><div style={{fontSize:25,lineHeight:1.6,marginTop:25}}>事实清楚<br/>权利义务明确<br/>争议不大<br/><b>简单金钱给付</b></div></Plate></Enter>
      <div style={{position:'absolute',left:480,right:80,top:270,height:20,backgroundColor:C.steel}}><div style={{height:'100%',width:`${p*100}%`,backgroundColor:C.green}}/></div>
      {[{x:480,label:'0'},{x:805,label:'50% W'},{x:1450,label:'2 W'},{x:1760,label:'>'}].map(({x,label})=><div key={label} style={{position:'absolute',left:x,top:245,width:5,height:70,backgroundColor:C.ink}}><span style={{position:'absolute',top:78,left:-38,width:110,textAlign:'center',fontSize:25,fontWeight:900}}>{label}</span></div>)}
      <Enter delay={42} style={{position:'absolute',left:500,top:75,width:285}}><div data-final-knowledge="below-half-ex-officio" style={{height:135,padding:22,backgroundColor:C.greenSoft,borderTop:`10px solid ${C.green}`,fontSize:27,lineHeight:1.4}}><b>50% W 以下</b><br/>法院依职权适用</div></Enter>
      <Enter delay={72} style={{position:'absolute',left:840,top:75,width:575}}><div data-final-knowledge="half-to-double-agreement" style={{height:135,padding:22,backgroundColor:C.blueSoft,borderTop:`10px solid ${C.blue}`,fontSize:27,lineHeight:1.4}}><b>超过 50% W，但在 2 W 以下</b><br/>当事人可以协议适用</div></Enter>
      <div data-final-knowledge="simple-money-claim" style={{position:'absolute',left:490,top:390,width:920,padding:'22px 28px',borderLeft:`12px solid ${C.amber}`,fontSize:27,fontWeight:900}}>W = 本省、自治区、直辖市上年度就业人员年平均工资</div>
      <Enter delay={105} style={{position:'absolute',left:1460,top:390,width:315}}><div data-final-knowledge="maritime-available" style={{height:170,border:`4px solid ${C.blue}`,display:'grid',placeItems:'center',textAlign:'center',fontSize:25,fontWeight:900}}><Ship size={52} color={C.blue}/>海事法院符合条件<br/>也可适用</div></Enter>
    </div>
  </Shell>;
};

export const SmallClaimExitsScene=()=>{
  const negatives=['人身关系 / 财产确权','涉外案件','需评估鉴定或对诉前结果有异议','一方下落不明','提出反诉','其他不宜适用'];
  return <Shell code="17.4" title="小额程序把时间压缩，也把出口锁得更清楚">
    <div data-layout="small-claim-core-surrounded-by-negative-ring-and-two-exit-rails" data-visual-anchor="boundary" data-visual-grammar="negative-ring,compressed-procedure,finality,conversion-exits" data-text-treatments="external-negation,stamp,label-block" data-focal-rule="small-claim-is-fast-and-final-but-must-exit-when-illegal-or-unsuitable" data-focal-channels="enclosure,connector,icon" style={{position:'absolute',inset:0}}>
      <Enter delay={8} style={{position:'absolute',left:575,top:145}}><div style={{width:560,height:310,backgroundColor:C.ink,color:C.white,display:'grid',gridTemplateColumns:'1fr 1fr',gap:2,padding:2}}>
        <div data-final-knowledge="seven-day-evidence" style={{backgroundColor:C.green,padding:25,fontSize:27}}><Timer size={42}/><b>举证一般 ≤ 7日</b></div><div data-final-knowledge="fifteen-day-defense" style={{backgroundColor:C.blue,padding:25,fontSize:27}}><Clock3 size={42}/><b>书面答辩最长 15日</b></div>
        <div data-final-knowledge="one-hearing-and-pronouncement" style={{backgroundColor:C.amber,color:C.ink,padding:25,fontSize:25}}><Gavel size={42}/><b>可一次开庭并当庭宣判</b></div><div data-final-knowledge="two-plus-one-limit" style={{backgroundColor:C.red,padding:25,fontSize:27}}><Clock3 size={42}/><b>审限 2+1个月</b></div>
      </div></Enter>
      <div data-final-knowledge="first-instance-final" style={{position:'absolute',left:650,top:490,width:410,padding:'18px',textAlign:'center',border:`6px double ${C.ink}`,fontSize:31,fontWeight:950}}>一审终审：判决及可上诉三类裁定均终局</div>
      <div data-final-knowledge="document-reasons-omittable" style={{position:'absolute',left:650,top:575,width:410,textAlign:'center',fontSize:23}}>裁判文书可省略认定事实、裁判理由</div>
      <StaggerEnter baseDelay={28} step={12} style={{position:'absolute',left:10,top:30,width:500,display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>{negatives.map((x,i)=><div key={x} style={{height:117,padding:'17px',backgroundColor:i%2?C.redSoft:C.white,borderLeft:`8px solid ${C.red}`,fontSize:23,fontWeight:850,lineHeight:1.3}}><Ban size={30} color={C.red}/><div>{x}</div></div>)}</StaggerEnter>
      <div data-final-knowledge="six-small-claim-exclusions" style={{position:'absolute',left:10,top:430,width:500,fontSize:25,fontWeight:950,color:C.red}}>六项任一出现：不得继续小额诉讼</div>
      <Enter delay={112} style={{position:'absolute',right:10,top:125,width:500}}><Plate color={C.amber} style={{height:390}}><GitBranch size={58} color={C.amber}/><div style={{fontSize:36,fontWeight:950,marginTop:18}}>发现不宜 / 异议成立</div><div style={{fontSize:27,lineHeight:1.6,marginTop:28}}>→ 适用简易程序其他规定<br/>→ 或裁定转普通程序</div><div style={{fontSize:23,marginTop:24,color:C.red}}>异议不成立：裁定驳回</div></Plate></Enter>
      <div data-final-knowledge="conversion-or-objection" style={{position:'absolute',right:10,top:545,width:500,fontSize:24,fontWeight:900}}>法院主动发现或当事人依法异议，都通向同一出口判断</div>
    </div>
  </Shell>;
};

export const SummaryProcedureSwitchyard=()=> <AbsoluteFill>
  <TimelineSequence name="01-entry-and-exclusions" {...SCENES.entryAndExclusions}><EntryAndExclusionsScene/></TimelineSequence>
  <TimelineSequence name="02-operation-and-conversion" {...SCENES.operationAndConversion}><OperationAndConversionScene/></TimelineSequence>
  <TimelineSequence name="03-small-claim-thresholds" {...SCENES.smallClaimThresholds}><SmallClaimThresholdsScene/></TimelineSequence>
  <TimelineSequence name="04-small-claim-exits" {...SCENES.smallClaimExits}><SmallClaimExitsScene/></TimelineSequence>
</AbsoluteFill>;
