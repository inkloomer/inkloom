import type {CSSProperties, ReactNode} from 'react';
import {Ban, Check, FileCheck2, FileQuestion, Gavel, MessageSquareText, PenLine, Shield, UserRound, UserRoundCheck, X} from 'lucide-react';
import {interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../../shared/remotion-runtime';

const N={page:'#f7fafc',ink:'#26333a',line:'#bdd0d8',blue:'#287aa1',red:'#d8504d',yellow:'#f2cd58',white:'#ffffff'};
const Write=({children,delay,style}:{children:ReactNode;delay:number;style?:CSSProperties})=>{const f=useCurrentFrame();const p=interpolate(f,[delay,delay+14],[0,1],CLAMP);return <div style={{opacity:p,translate:`${-28*(1-p)}px 0`,...style}}>{children}</div>};
const Notebook=({code,title,children}:{code:string;title:string;children:ReactNode})=><div style={{position:'absolute',inset:0,overflow:'hidden',backgroundColor:N.page,color:N.ink,fontFamily: 'var(--inkloom-animation-body)'}}>{[220,340,460,580,700,820,940].map(y=><div key={y} style={{position:'absolute',left:0,right:0,top:y,height:2,backgroundColor:N.line,opacity:.55}}/>)}<div style={{position:'absolute',left:130,top:0,bottom:0,width:4,backgroundColor:N.red,opacity:.55}}/><div style={{position:'absolute',left:174,top:50,fontSize:18,fontWeight:850,color:N.blue}}>COURT NOTE / {code}</div><h1 style={{fontFamily: 'var(--inkloom-animation-title)', position:'absolute',left:174,top:86,margin:0,fontSize:56,fontWeight:850}}>{title}</h1><div style={{position:'absolute',left:174,right:70,top:174,height:4,backgroundColor:N.ink}}/>{children}<div style={{position:'absolute',left:174,bottom:28,fontSize:17,fontWeight:750,color:N.blue}}>当事人陈述 · 证明与程序边界</div></div>;

export const CorroborationScene=()=> <Notebook code="01" title="当事人陈述：可以证明，但不能单独定案">
  <div data-layout="statement-corroboration-equation" data-visual-anchor="comparison-axis" data-text-treatments="soft-highlight,thin-underline,stamp" data-visual-grammar="combination,corroboration,result" data-focal-rule="party-statements-require-corroborating-evidence" data-focal-channels="icon,connector,enclosure,contrast" style={{position:'absolute',left:174,right:70,top:220,bottom:72}}>
    <Write delay={4} style={{position:'absolute',left:40,top:100,width:520,height:450,backgroundColor:N.blue,color:N.white,display:'grid',placeItems:'center',textAlign:'center'}}><MessageSquareText size={100}/><div style={{fontSize:42,fontWeight:900,marginTop:-70}}>当事人陈述</div><div style={{fontSize:25,marginTop:-80}}>属于证据材料</div></Write>
    <div style={{position:'absolute',left:610,top:290,fontSize:86,fontWeight:900,color:N.red}}>＋</div>
    <Write delay={28} style={{position:'absolute',left:760,top:100,width:520,height:450,backgroundColor:N.white,border:`5px solid ${N.blue}`,display:'grid',placeItems:'center',textAlign:'center'}}><FileCheck2 size={100} color={N.blue}/><div style={{fontSize:42,fontWeight:900,marginTop:-70}}>其他证据补强</div><div style={{fontSize:25,marginTop:-80}}>形成相互印证</div></Write>
    <div style={{position:'absolute',left:1300,top:310,width:160,height:8,backgroundColor:N.ink}}/>
    <Write delay={56} style={{position:'absolute',right:0,top:160,width:330,height:330,backgroundColor:N.yellow,display:'grid',placeItems:'center',textAlign:'center'}}><Gavel size={78}/><div style={{fontSize:36,fontWeight:900,marginTop:-50}}>可作为<br/>定案根据</div></Write>
    <Write delay={78} style={{position:'absolute',left:540,bottom:0,width:760,height:96,border:`4px solid ${N.red}`,backgroundColor:N.page,display:'grid',placeItems:'center',fontSize:30,fontWeight:900,color:N.red}}>只有陈述本身 → 不得单独作为定案根据</Write>
  </div>
</Notebook>;

export const RefusalConditionsScene=()=> <Notebook code="02" title="拒绝陈述的不利后果，需要四个条件同时到位">
  <div data-layout="four-condition-recognition-stop" data-visual-anchor="flow-path" data-text-treatments="label-block,soft-highlight,external-negation" data-visual-grammar="sequence,conjunction,consequence,exclusion" data-focal-rule="only-a-burdened-party-without-other-proof-loses-recognition-after-refusal" data-focal-channels="icon,connector,spatial,annotation" style={{position:'absolute',left:174,right:70,top:220,bottom:72}}>
    {[
      [Shield,'负有举证证明责任',N.blue],[UserRound,'拒绝到庭或接受询问',N.red],[PenLine,'拒绝签署保证书',N.red],[FileQuestion,'待证事实欠缺其他证据',N.blue],
    ].map(([Icon,text,color],i)=><Write key={text as string} delay={4+i*18} style={{position:'absolute',left:20+i*410,top:120,width:350,height:300,backgroundColor:i%2?N.white:N.ink,color:i%2?N.ink:N.white,borderTop:`10px solid ${color as string}`,padding:'34px 30px'}}><Icon size={64} color={color as string}/><div style={{marginTop:28,fontSize:29,lineHeight:1.35,fontWeight:900}}>{text as string}</div><div style={{position:'absolute',right:-58,top:125,fontSize:58,fontWeight:900,color:N.red}}>{i<3?'＋':''}</div></Write>)}
    <div style={{position:'absolute',left:170,right:170,top:470,height:6,backgroundColor:N.red}}/>
    <Write delay={88} style={{position:'absolute',left:440,bottom:30,width:900,height:170,backgroundColor:N.red,color:N.white,display:'flex',alignItems:'center',justifyContent:'center',gap:28,fontSize:42,fontWeight:900}}><X size={72}/>法院对该方主张的事实不予认定</Write>
  </div>
</Notebook>;

export const ProceduralBoundaryScene=()=> <Notebook code="03" title="已委托代理人出庭：拒绝本人陈述，不等于程序退场">
  <div data-layout="agent-presence-procedure-boundary" data-visual-anchor="boundary" data-text-treatments="stamp,external-negation,thin-underline" data-visual-grammar="representation,boundary,prohibition" data-focal-rule="represented-parties-are-not-summoned-defaulted-or-withdrawn-merely-for-refusing-statements" data-focal-channels="icon,enclosure,annotation,contrast" style={{position:'absolute',left:174,right:70,top:220,bottom:72}}>
    <Write delay={4} style={{position:'absolute',left:40,top:80,width:610,height:500,backgroundColor:N.ink,color:N.white,display:'grid',placeItems:'center',textAlign:'center'}}><UserRoundCheck size={110} color={N.yellow}/><div style={{fontSize:40,fontWeight:900,marginTop:-80}}>代理人已经出庭<br/>行使诉讼权利</div></Write>
    <div style={{position:'absolute',left:650,top:310,width:260,height:10,backgroundColor:N.blue}}/>
    <Write delay={34} style={{position:'absolute',left:900,top:130,width:420,height:400,backgroundColor:N.white,border:`5px solid ${N.blue}`,display:'grid',placeItems:'center',textAlign:'center'}}><Ban size={94} color={N.red}/><div style={{fontSize:36,fontWeight:900,marginTop:-65}}>本人仅拒绝到庭陈述</div></Write>
    <Write delay={62} style={{position:'absolute',right:0,top:20,width:390,height:620,backgroundColor:N.red,color:N.white,padding:'40px 34px'}}><div style={{fontSize:30,fontWeight:900}}>不因此产生</div>{['拘传','缺席判决','按撤诉处理'].map(item=><div key={item} style={{marginTop:34,display:'flex',alignItems:'center',gap:18,fontSize:32,fontWeight:900}}><X size={40}/>{item}</div>)}</Write>
  </div>
</Notebook>;
