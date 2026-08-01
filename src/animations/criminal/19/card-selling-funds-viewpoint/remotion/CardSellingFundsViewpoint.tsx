import type {CSSProperties,ReactNode} from 'react';
import {ArrowRightLeft,Banknote,CreditCard,GitFork,Landmark,LockKeyhole,RadioTower,ShieldOff,UserRound} from 'lucide-react';
import {AbsoluteFill,interpolate,useCurrentFrame} from 'remotion';
import {CLAMP,TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const C={bg:'#111514',panel:'#1b2220',grid:'#30403b',mint:'#75f0bd',coral:'#ff5964',cyan:'#45c9e8',white:'#f2f7f4',muted:'#98aaa3',amber:'#ffd166'};
const prog=(f:number,d:number,n=18)=>interpolate(f,[d,d+n],[0,1],CLAMP);
const Enter=({children,delay=0,from='down',style}:{children:ReactNode;delay?:number;from?:'down'|'left'|'right';style?:CSSProperties})=>{const f=useCurrentFrame();const p=prog(f,delay);const x=from==='left'?-32:from==='right'?32:0;return <div style={{opacity:p,translate:`${x*(1-p)}px ${(from==='down'?28:0)*(1-p)}px`,...style}}>{children}</div>};
const Chip=({children,color=C.mint}:{children:ReactNode;color?:string})=><span style={{display:'inline-block',padding:'7px 13px',backgroundColor:color,color:C.bg,fontFamily: 'var(--inkloom-animation-mono)',fontSize:21,fontWeight:900}}>{children}</span>;
const Signal=({left,top,width,delay,color=C.mint}:{left:number;top:number;width:number;delay:number;color?:string})=>{const f=useCurrentFrame();const p=prog(f,delay);return <div style={{position:'absolute',left,top,width,height:8,backgroundColor:color,scale:`${p} 1`,transformOrigin:'left',boxShadow:`0 0 18px ${color}`}}/>};
const Stamp=({children,delay=0,color=C.coral}:{children:ReactNode;delay?:number;color?:string})=>{const f=useCurrentFrame();const p=prog(f,delay,12);return <span style={{display:'inline-block',border:`3px solid ${color}`,color,padding:'7px 15px',fontSize:27,fontWeight:950,opacity:p,scale:p}}>{children}</span>};
const Canvas=({code,title,children}:{code:string;title:string;children:ReactNode})=><AbsoluteFill style={{overflow:'hidden',backgroundColor:C.bg,color:C.white,fontFamily: 'var(--inkloom-animation-body)'}}>
  <div style={{position:'absolute',inset:0,backgroundImage:`linear-gradient(${C.grid} 1px,transparent 1px),linear-gradient(90deg,${C.grid} 1px,transparent 1px)`,backgroundSize:'72px 72px',opacity:.45}}/>
  <div style={{position:'absolute',left:64,top:42,fontFamily: 'var(--inkloom-animation-mono)',fontSize:18,fontWeight:800,color:C.mint}}>ACCOUNT SIGNAL / {code}</div>
  <h1 style={{fontFamily: 'var(--inkloom-animation-title)', position:'absolute',left:64,top:74,margin:0,fontSize:56,lineHeight:1.05,fontWeight:850}}>{title}</h1>
  <div style={{position:'absolute',left:64,right:64,top:158,height:3,backgroundColor:C.grid}}/>{children}
  <div style={{position:'absolute',left:64,right:64,bottom:28,display:'flex',justifyContent:'space-between',fontFamily: 'var(--inkloom-animation-meta)',fontSize:17,color:C.muted}}><span>CRIMINAL / TOPIC 19</span><span>TRACE WHO CONTROLS THE FUNDS</span></div>
</AbsoluteFill>;

export const PossessionModelsScene=()=>{const f=useCurrentFrame();return <Canvas code="01" title="同一张卡，先判断谁占有卡内资金">
  <div data-layout="dual-channel-possession-router" data-visual-anchor="comparison-axis" data-text-treatments="label-block,soft-highlight,thin-underline" data-visual-grammar="attribution,comparison,routing" data-focal-rule="possession-model-controls-the-offense-label" data-focal-channels="icon,connector,contrast,spatial" style={{position:'absolute',inset:'190px 70px 72px'}}>
    <Enter delay={4} style={{position:'absolute',left:40,top:230,width:380,height:290,border:`3px solid ${C.cyan}`,backgroundColor:C.panel,display:'grid',placeItems:'center',textAlign:'center'}}><CreditCard size={96} color={C.cyan}/><div style={{fontSize:32,fontWeight:900,marginTop:-70}}>甲把银行卡卖给乙</div><div style={{fontSize:23,color:C.muted,marginTop:-74}}>名义卡主：甲 · 实际控制：乙</div></Enter>
    <Signal left={420} top={372} width={250} delay={28} color={C.cyan}/><GitFork size={82} color={C.cyan} style={{position:'absolute',left:650,top:332,opacity:prog(f,42)}}/>
    <Signal left={726} top={272} width={230} delay={52}/><Signal left={726} top={482} width={230} delay={62} color={C.coral}/>
    <Enter delay={68} style={{position:'absolute',left:960,top:90,width:770,height:250,border:`4px solid ${C.mint}`,backgroundColor:C.panel,padding:34}}><div style={{display:'flex',alignItems:'center',gap:24}}><RadioTower size={72} color={C.mint}/><Chip>事实占有说 · 多数说</Chip></div><div style={{fontSize:36,fontWeight:900,marginTop:26}}>乙在事实上控制资金</div><div style={{fontSize:26,color:C.muted,marginTop:12}}>甲掐卡夺回排他控制 → 盗窃罪</div></Enter>
    <Enter delay={82} style={{position:'absolute',left:960,top:420,width:770,height:250,border:`4px solid ${C.coral}`,backgroundColor:C.panel,padding:34}}><div style={{display:'flex',alignItems:'center',gap:24}}><UserRound size={72} color={C.coral}/><Chip color={C.coral}>法律占有说 · 少数说</Chip></div><div style={{fontSize:36,fontWeight:900,marginTop:26}}>甲作为名义卡主法律占有</div><div style={{fontSize:26,color:C.muted,marginTop:12}}>将乙所有、自己占有的资金变为己有 → 侵占罪</div></Enter>
  </div></Canvas>};

export const LawfulFundsScene=()=>{const f=useCurrentFrame();const steps=[{x:70,icon:LockKeyhole,title:'掐卡',result:'盗窃既遂',color:C.coral},{x:620,icon:ArrowRightLeft,title:'转账',result:'不再定罪',color:C.mint},{x:1170,icon:Banknote,title:'取款',result:'另看银行',color:C.cyan}];return <Canvas code="02" title="合法资金：事实占有说沿行为顺序定性">
  <div data-layout="three-packet-terminal-chain" data-visual-anchor="flow-path" data-text-treatments="label-block,thin-underline,stamp" data-visual-grammar="sequence,absorption,secondary-victim" data-focal-rule="card-lock-completes-theft-before-later-transfer" data-focal-channels="icon,motion,connector,annotation" style={{position:'absolute',inset:'190px 70px 72px'}}>
    {steps.map((s,i)=><Enter key={s.title} delay={8+i*34} style={{position:'absolute',left:s.x,top:170,width:440,height:390,border:`4px solid ${s.color}`,backgroundColor:C.panel,padding:38}}>{i===0?<LockKeyhole size={82} color={s.color}/>:null}{i===1?<ArrowRightLeft size={82} color={s.color}/>:null}{i===2?<Banknote size={82} color={s.color}/>:null}<div style={{fontFamily: 'var(--inkloom-animation-mono)',fontSize:19,color:C.muted,marginTop:32}}>PACKET 0{i+1}</div><div style={{fontSize:48,fontWeight:900,marginTop:8}}>{s.title}</div><div style={{fontSize:29,fontWeight:850,marginTop:34,color:s.color}}>{s.result}</div><div style={{fontSize:23,color:C.muted,marginTop:18,lineHeight:1.45}}>{['乙失去控制，甲建立排他控制','左口袋转到右口袋，被前行为吸收','柜台多数说诈骗；ATM 多数说盗窃'][i]}</div></Enter>)}
    <Signal left={510} top={365} width={110} delay={42}/><Signal left={1060} top={365} width={110} delay={82} color={C.cyan}/>
    <Enter delay={120} style={{position:'absolute',left:500,bottom:16,width:820,textAlign:'center',fontSize:29,fontWeight:850}}><Stamp delay={132}>关键节点：掐卡已经改变事实占有</Stamp></Enter>
  </div></Canvas>};

export const IllicitFundsScene=()=>{const f=useCurrentFrame();return <Canvas code="03" title="赃款：三种观点在同一行为包上给出不同终点">
  <div data-layout="three-theory-verdict-fan" data-visual-anchor="boundary" data-text-treatments="soft-highlight,external-negation,stamp" data-visual-grammar="comparison,classification,exception" data-focal-rule="illegal-possession-and-legal-possession-theories-diverge" data-focal-channels="icon,contrast,annotation,spatial" style={{position:'absolute',inset:'190px 70px 72px'}}>
    <Enter delay={5} style={{position:'absolute',left:40,top:210,width:390,height:330,backgroundColor:C.panel,border:`4px solid ${C.amber}`,padding:34}}><ShieldOff size={76} color={C.amber}/><div style={{fontSize:32,fontWeight:900,marginTop:26}}>行为包</div><div style={{fontSize:29,lineHeight:1.6,marginTop:18}}>掐卡 → 转账 → 取款</div><div style={{fontSize:23,color:C.muted,marginTop:22}}>卡内为电诈赃款</div></Enter>
    <GitFork size={92} color={C.amber} style={{position:'absolute',left:470,top:322,opacity:prog(f,34)}}/>
    {[{y:30,c:C.mint,name:'事实占有说',verdict:'整体盗窃罪',note:'保护乙对赃款的非法占有事实'},{y:285,c:C.coral,name:'法律占有说',verdict:'整体侵占罪',note:'甲是法律占有人'},{y:540,c:C.cyan,name:'具体判断说',verdict:'掐卡、转账不定罪',note:'取款再判断对银行犯罪'}].map((x,i)=><Enter key={x.name} delay={48+i*28} from="right" style={{position:'absolute',left:650,top:x.y,width:1080,height:205,borderLeft:`12px solid ${x.c}`,backgroundColor:C.panel,padding:'28px 38px'}}><div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}><Chip color={x.c}>{x.name}</Chip><span style={{fontSize:35,fontWeight:950,color:x.c}}>{x.verdict}</span></div><div style={{fontSize:25,color:C.muted,marginTop:30}}>{x.note}</div>{i===2?<Landmark size={58} color={C.cyan} style={{position:'absolute',right:36,bottom:22}}/>:null}</Enter>)}
    <div style={{position:'absolute',left:500,top:390,width:140,height:5,backgroundColor:C.amber,scale:`${prog(f,48)} 1`,transformOrigin:'left'}}/>
  </div></Canvas>};

export const CardSellingFundsViewpoint=()=> <AbsoluteFill>
  <TimelineSequence name="01-possession-models" {...SCENES.possessionModels}><PossessionModelsScene/></TimelineSequence>
  <TimelineSequence name="02-lawful-funds" {...SCENES.lawfulFunds}><LawfulFundsScene/></TimelineSequence>
  <TimelineSequence name="03-illicit-funds" {...SCENES.illicitFunds}><IllicitFundsScene/></TimelineSequence>
</AbsoluteFill>;
