import type {CSSProperties, ReactNode} from 'react';
import {BadgeCheck, Boxes, Cog, CornerDownRight, HardHat, KeyRound, Landmark, ShieldCheck, Warehouse} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const C = {concrete:'#d9d8d2', black:'#171817', yellow:'#ffd52a', blue:'#1956d1', green:'#1f9d62', rust:'#ce3d2d', steel:'#70746f', white:'#f7f7f2'};
const p = (f:number,d:number,n=16)=>interpolate(f,[d,d+n],[0,1],CLAMP);
const Enter=({children,delay=0,style}:{children:ReactNode;delay?:number;style?:CSSProperties})=>{const f=useCurrentFrame();const q=p(f,delay);return <div style={{opacity:q,translate:`${(1-q)*34}px 0px`,...style}}>{children}</div>};
const Plate=({children,tone='yellow'}:{children:ReactNode;tone?:'yellow'|'blue'|'green'|'rust'})=><span style={{display:'inline-block',backgroundColor:C[tone],color:tone==='yellow'?C.black:C.white,padding:'7px 14px',fontSize:22,fontWeight:950}}>{children}</span>;
const Line=({left,top,width,delay,color=C.yellow,vertical=false}:{left:number;top:number;width:number;delay:number;color?:string;vertical?:boolean})=>{const f=useCurrentFrame();return <div style={{position:'absolute',left,top,width:vertical?8:width,height:vertical?width:8,backgroundColor:color,scale:vertical?`1 ${p(f,delay)}`:`${p(f,delay)} 1`,transformOrigin:vertical?'top':'left'}}/>};
const Canvas=({code,title,children}:{code:string;title:string;children:ReactNode})=><AbsoluteFill style={{overflow:'hidden',backgroundColor:C.concrete,color:C.black,fontFamily:'"Arial Narrow", "Microsoft YaHei", sans-serif'}}>
  <div style={{position:'absolute',inset:0,backgroundImage:`repeating-linear-gradient(0deg, transparent 0 47px, rgba(23,24,23,.08) 48px 49px)`}}/>
  <div style={{position:'absolute',left:0,top:0,bottom:0,width:32,backgroundColor:C.yellow,backgroundImage:`repeating-linear-gradient(135deg, ${C.black} 0 18px, transparent 18px 36px)`}}/>
  <div style={{position:'absolute',left:72,top:42,fontSize:18,fontWeight:950}}>ELEMENT INSPECTION / {code}</div>
  <h1 style={{position:'absolute',left:72,top:70,margin:0,fontSize:58,lineHeight:1.05,fontWeight:950}}>{title}</h1>
  <div style={{position:'absolute',left:72,right:72,top:158,height:8,backgroundColor:C.black}}/>{children}
  <div style={{position:'absolute',left:72,right:72,bottom:28,display:'flex',justifyContent:'space-between',fontSize:17,fontWeight:900}}><span>刑法 · 专题十九</span><span>NO GATE, NO SPECIAL OFFENSE</span></div>
</AbsoluteFill>;
const Conveyor=()=>{const f=useCurrentFrame();return <div style={{position:'absolute',left:70,right:70,top:626,height:120,border:`8px solid ${C.black}`,backgroundColor:C.steel,overflow:'hidden'}}>{Array.from({length:20},(_,i)=><div key={i} style={{position:'absolute',left:i*105-((f*3)%105),top:42,width:70,height:20,backgroundColor:C.black}}/>)}</div>};

export const FormulaAssemblyScene=()=>{const f=useCurrentFrame();const parts=[{x:110,l:'A',s:'基础行为',c:C.blue},{x:520,l:'B1',s:'特殊主体',c:C.yellow},{x:930,l:'B2',s:'单位财物',c:C.yellow},{x:1340,l:'B3',s:'职务便利',c:C.yellow}];return <Canvas code="01" title="职务侵占罪，是基础罪名经过三道特殊检验">
  <div data-layout="parts-on-conveyor" data-visual-anchor="typographic-sequence" data-text-treatments="label-block,soft-highlight,stamp" data-visual-grammar="assembly,sequence,completion" data-focal-rule="base-offense-plus-three-special-elements" data-focal-channels="icon,motion,spatial,contrast" style={{position:'absolute',inset:'190px 70px 70px'}}>
    <Conveyor/>{parts.map((x,i)=><Enter key={x.l} delay={8+i*22} style={{position:'absolute',left:x.x,top:150,width:330,height:300,backgroundColor:x.c,color:x.c===C.yellow?C.black:C.white,border:`7px solid ${C.black}`,padding:30}}><div style={{display:'flex',justifyContent:'space-between'}}>{i===0?<Boxes size={62}/>:<Cog size={62}/>}<span style={{fontSize:52,fontWeight:950}}>{x.l}</span></div><div style={{fontSize:35,fontWeight:950,marginTop:58}}>{x.s}</div><div style={{fontSize:23,fontWeight:800,marginTop:18}}>{['侵占／盗窃／诈骗','非国家工作人员','本单位财物','实质利用权限'][i]}</div></Enter>)}
    <Enter delay={108} style={{position:'absolute',left:590,top:530,width:700,height:110,backgroundColor:C.green,color:C.white,display:'flex',alignItems:'center',justifyContent:'center',gap:24,fontSize:38,fontWeight:950}}><BadgeCheck size={58}/>A + B1 + B2 + B3 = 职务侵占罪</Enter>
  </div></Canvas>};

export const SubjectGateScene=()=>{const f=useCurrentFrame();return <Canvas code="02" title="第一道闸门：行为主体是谁">
  <div data-layout="identity-inspection-gate" data-visual-anchor="boundary" data-text-treatments="thin-underline,external-negation,label-block" data-visual-grammar="classification,gate,diversion" data-focal-rule="non-state-worker-is-required-special-subject" data-focal-channels="icon,connector,annotation,contrast" style={{position:'absolute',inset:'190px 80px 70px'}}>
    <Enter delay={5} style={{position:'absolute',left:40,top:220,width:400,height:270,backgroundColor:C.blue,color:C.white,display:'grid',placeItems:'center',textAlign:'center'}}><HardHat size={92}/><div style={{fontSize:36,fontWeight:950,marginTop:-70}}>实施基础行为 A</div></Enter>
    <Line left={440} top={350} width={300} delay={28} color={C.blue}/>
    <div style={{position:'absolute',left:740,top:80,width:360,height:560,border:`16px solid ${C.black}`,borderTopColor:C.yellow,borderBottomColor:C.yellow,display:'grid',placeItems:'center',backgroundColor:C.white}}><Landmark size={100} color={C.black}/><div style={{fontSize:35,fontWeight:950,textAlign:'center',marginTop:-130}}>B1<br/>非国家工作人员？</div></div>
    <Line left={1100} top={350} width={280} delay={62} color={C.green}/><Enter delay={78} style={{position:'absolute',right:30,top:245,width:390,height:230,backgroundColor:C.green,color:C.white,display:'grid',placeItems:'center',fontSize:36,fontWeight:950,textAlign:'center'}}><Plate tone="green">是</Plate><div>继续检查 B2</div></Enter>
    <Line left={920} top={640} width={120} delay={82} color={C.rust} vertical/><CornerDownRight size={74} color={C.rust} style={{position:'absolute',left:910,top:676,opacity:p(f,96)}}/><Enter delay={104} style={{position:'absolute',left:520,bottom:0,width:800,height:105,backgroundColor:C.rust,color:C.white,display:'flex',alignItems:'center',justifyContent:'center',gap:28,fontSize:32,fontWeight:950}}><Plate tone="rust">否</Plate>转向贪污罪判断，不成立职务侵占罪</Enter>
  </div></Canvas>};

export const PropertyDutyGatesScene=()=>{const f=useCurrentFrame();return <Canvas code="03" title="对象与职务便利：任一失败，就退回基础罪名">
  <div data-layout="double-gate-routing-line" data-visual-anchor="flow-path" data-text-treatments="label-block,thin-underline,stamp" data-visual-grammar="sequence,fallback,convergence" data-focal-rule="unit-property-and-substantive-duty-use-are-both-required" data-focal-channels="icon,connector,motion,spatial" style={{position:'absolute',inset:'190px 70px 70px'}}>
    <Conveyor/>
    <Enter delay={4} style={{position:'absolute',left:60,top:180,width:300,height:280,backgroundColor:C.blue,color:C.white,padding:32}}><HardHat size={70}/><div style={{fontSize:31,fontWeight:950,marginTop:28}}>B1 已通过</div><div style={{fontSize:24,marginTop:14}}>非国家工作人员</div></Enter>
    <Line left={360} top={322} width={150} delay={24} color={C.blue}/>
    <Enter delay={32} style={{position:'absolute',left:510,top:120,width:390,height:400,border:`12px solid ${C.black}`,borderTopColor:C.yellow,backgroundColor:C.white,padding:38}}><Warehouse size={78}/><div style={{fontSize:42,fontWeight:950,marginTop:34}}>B2</div><div style={{fontSize:31,fontWeight:900,marginTop:10}}>本单位财物？</div><div style={{fontSize:23,marginTop:24}}>财物或财产性利益</div></Enter>
    <Line left={900} top={322} width={150} delay={58} color={C.blue}/>
    <Enter delay={66} style={{position:'absolute',left:1050,top:120,width:390,height:400,border:`12px solid ${C.black}`,borderTopColor:C.yellow,backgroundColor:C.white,padding:38}}><KeyRound size={78}/><div style={{fontSize:42,fontWeight:950,marginTop:34}}>B3</div><div style={{fontSize:31,fontWeight:900,marginTop:10}}>利用职务便利？</div><div style={{fontSize:23,marginTop:24}}>实质利用主管、管理、经手权限</div></Enter>
    <Line left={1440} top={322} width={150} delay={92} color={C.green}/>
    <Enter delay={104} style={{position:'absolute',right:40,top:180,width:300,height:280,backgroundColor:C.green,color:C.white,display:'grid',placeItems:'center',textAlign:'center'}}><ShieldCheck size={78}/><div style={{fontSize:31,fontWeight:950,marginTop:-70}}>全部通过</div><Plate tone="green">职务侵占罪</Plate></Enter>
    <Line left={704} top={520} width={120} delay={100} color={C.rust} vertical/><Line left={1244} top={520} width={120} delay={112} color={C.rust} vertical/>
    <Enter delay={124} style={{position:'absolute',left:520,bottom:0,width:920,height:104,backgroundColor:C.rust,color:C.white,display:'flex',alignItems:'center',justifyContent:'center',fontSize:31,fontWeight:950}}>B2 或 B3 不通过 → 退回侵占／盗窃／诈骗</Enter>
  </div></Canvas>};

export const OccupationalEmbezzlementFlowchart=()=> <AbsoluteFill>
  <TimelineSequence name="01-formula-assembly" {...SCENES.formulaAssembly}><FormulaAssemblyScene/></TimelineSequence>
  <TimelineSequence name="02-subject-gate" {...SCENES.subjectGate}><SubjectGateScene/></TimelineSequence>
  <TimelineSequence name="03-property-duty-gates" {...SCENES.propertyDutyGates}><PropertyDutyGatesScene/></TimelineSequence>
</AbsoluteFill>;
