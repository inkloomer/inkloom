import type {ReactNode} from 'react';
import {Landmark, Ban, ShieldCheck, Users, HeartPulse, ReceiptText, Banknote, Lock, Coins} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#F1EFE6', ink:'#22262E', red:'#B23A30', green:'#2E6D4F', gold:'#C08A2D', paper:'#FAF7EE'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.red,color:COLORS.paper}}>{code}</div>
    <div style={{position:'absolute',left:190,right:76,top:46,fontSize:46,fontWeight:900,lineHeight:1.12,borderBottom:'5px solid '+COLORS.green,paddingBottom:12}}>{title}</div>
    <div style={{position:'absolute',left:76,right:76,top:150,bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

export const BankruptcyLiquidation01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="12.2" title="宣告破产">
    <div data-layout="declaration-gate-1" data-visual-anchor="boundary" data-visual-grammar="declaration-effects,no-return-to-reorganization" data-text-treatments="stamp,external-negation,label-block" data-focal-rule="bankruptcy-liquidation-scene-01-rule" data-focal-channels="enclosure,contrast,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="bankruptcy-liquidation-scene-01-effects" style={{position:'absolute',left:24,top:20,width:850,padding:'26px 30px',border:'5px solid '+COLORS.red,background:COLORS.paper,opacity:enter(28,54)}}>
        <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:12}}>
          <Landmark size={46} color={COLORS.red}/>
          <div style={{fontSize:30,fontWeight:900}}>宣告破产的效果</div>
        </div>
        <div style={{fontSize:24,fontWeight:800,lineHeight:1.55}}>债务人彻底进入破产清算程序——债务人变为<span style={{background:COLORS.red+'20',padding:'2px 8px',fontWeight:900}}>破产人</span>，债务人财产变为<span style={{fontWeight:900}}>破产财产</span>，用以集体清偿</div>
      </div>
      <div data-final-knowledge="bankruptcy-liquidation-scene-01-noreturn" style={{position:'absolute',right:24,top:20,width:850,padding:'26px 30px',border:'5px dashed '+COLORS.gold,background:COLORS.paper,opacity:enter(46,72)}}>
        <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:12}}>
          <Ban size={46} color={COLORS.gold}/>
          <div style={{fontSize:30,fontWeight:900,color:'#7A5B12'}}>不可逆转</div>
        </div>
        <div style={{fontSize:24,fontWeight:800,lineHeight:1.55}}>被宣告破产的，<span style={{fontWeight:900,color:COLORS.red}}>不可能再进入重整或和解程序</span>——不能再转为重整或者和解</div>
      </div>
      <div data-final-knowledge="bankruptcy-liquidation-knowledge-1" style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.red,background:COLORS.paper,padding:'14px 24px',opacity:enter(74,102)}}>
        <Lock size={38} color={COLORS.red}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}>宣告破产是破产清算的<span style={{fontWeight:900}}>单向闸口</span>——进入清算后不再回头</div>
      </div>
    </div>
  </Shell>;
};

export const BankruptcyLiquidation02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="12.2" title="别除权：有担保的债权">
    <div data-layout="secured-priority-2" data-visual-anchor="role-pair" data-visual-grammar="secured-creditor-priority,unsecured-collective" data-text-treatments="label-block,soft-highlight,thin-underline" data-focal-rule="bankruptcy-liquidation-scene-02-rule" data-focal-channels="contrast,connector,spatial" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="bankruptcy-liquidation-knowledge-2" style={{position:'absolute',left:0,right:0,top:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#6E6757',opacity:enter(12,36)}}>担保债权 ←→ 无担保债权</div>
      <div data-final-knowledge="bankruptcy-liquidation-scene-02-secured" style={{position:'absolute',left:24,top:76,width:850,padding:26,height:340,border:'5px solid '+COLORS.red,background:COLORS.paper,opacity:enter(28,54),translate:slide(28,54,'-24px 0px')}}>
        <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:14}}>
          <ShieldCheck size={44} color={COLORS.red}/>
          <div style={{padding:'8px 18px',background:COLORS.ink,color:COLORS.paper,fontSize:28,fontWeight:900}}>有担保债权人</div>
        </div>
        <div style={{fontSize:24,fontWeight:800,lineHeight:1.55,padding:'12px 16px',background:COLORS.red+'10',marginBottom:10}}>在<span style={{background:COLORS.red+'20',padding:'2px 8px',fontWeight:900}}>担保物价值范围内</span>有优先受偿权——<span style={{fontWeight:900}}>别除权</span>，不参与集体清偿</div>
        <div style={{fontSize:24,fontWeight:800,lineHeight:1.55,padding:'12px 16px',background:COLORS.red+'10'}}>别除权标的物属于债务人财产，但<span style={{fontWeight:900}}>不计入破产财产</span>；放弃别除权或行使后未获清偿的部分 → <span style={{fontWeight:900}}>普通破产债权</span>，参与集体清偿</div>
      </div>
      <div data-final-knowledge="bankruptcy-liquidation-scene-02-unsecured" style={{position:'absolute',right:24,top:76,width:850,padding:26,height:340,border:'5px solid '+COLORS.green,background:COLORS.paper,opacity:enter(46,72),translate:slide(46,72,'24px 0px')}}>
        <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:14}}>
          <Users size={44} color={COLORS.green}/>
          <div style={{padding:'8px 18px',background:COLORS.ink,color:COLORS.paper,fontSize:28,fontWeight:900}}>无担保债权人</div>
        </div>
        <div style={{fontSize:24,fontWeight:800,lineHeight:1.55,padding:'12px 16px',background:COLORS.green+'10',marginBottom:10}}>在破产财产优先清偿完<span style={{fontWeight:900}}>破产费用和共益债务</span>后，参与<span style={{background:COLORS.green+'26',padding:'2px 8px',fontWeight:900}}>集体清偿</span></div>
      </div>
      <div style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.gold,background:COLORS.paper,padding:'14px 24px',opacity:enter(74,102)}}>
        <Landmark size={38} color={COLORS.gold}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}>例：债权有汽车抵押——抵押权属于别除权，对该汽车<span style={{fontWeight:900}}>享有优先受偿权</span></div>
      </div>
    </div>
  </Shell>;
};

export const BankruptcyLiquidation03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const flowProgress=interpolate(frame,[120,250],[0,1],CLAMP);
  return <Shell code="12.2" title="清偿顺序瀑布">
    <div data-layout="distribution-waterfall-3" data-visual-anchor="flow-path" data-visual-grammar="payment-waterfall,worker-priority" data-text-treatments="soft-highlight,stamp,label-block" data-focal-rule="bankruptcy-liquidation-scene-03-rule" data-focal-channels="connector,motion,enclosure" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="bankruptcy-liquidation-knowledge-3" style={{position:'absolute',left:0,right:0,top:0,fontSize:26,fontWeight:900,letterSpacing:4,color:'#6E6757',opacity:enter(12,36)}}>优先清偿 → 随时清偿 → 集体清偿</div>
      <div style={{position:'absolute',left:0,top:70,width:1120,display:'grid',gap:12}}>
        <div data-final-knowledge="bankruptcy-liquidation-scene-03-step-0" style={{display:'grid',gridTemplateColumns:'64px 1fr',gap:16,alignItems:'center',padding:'14px 22px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(26,52)}}>
          <div style={{width:64,height:64,border:'4px solid '+COLORS.ink,background:COLORS.gold,color:COLORS.paper,display:'grid',placeItems:'center'}}><Landmark size={30} color={COLORS.paper}/></div>
          <div><div style={{fontSize:25,fontWeight:900,marginBottom:4}}>优先清偿</div><div style={{fontSize:21,fontWeight:700,lineHeight:1.4}}>建设工程价款；有担保的债权（别除权）</div></div>
        </div>
        <div data-final-knowledge="bankruptcy-liquidation-scene-03-step-1" style={{display:'grid',gridTemplateColumns:'64px 1fr',gap:16,alignItems:'center',padding:'14px 22px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(42,68)}}>
          <div style={{width:64,height:64,border:'4px solid '+COLORS.ink,background:COLORS.green,color:COLORS.paper,display:'grid',placeItems:'center'}}><Coins size={30} color={COLORS.paper}/></div>
          <div><div style={{fontSize:25,fontWeight:900,marginBottom:4}}>随时清偿</div><div style={{fontSize:21,fontWeight:700,lineHeight:1.4}}>破产费用 ＞ 共益债务（对外按顺序，对内按比例）</div></div>
        </div>
        <div data-final-knowledge="bankruptcy-liquidation-scene-03-step-2" style={{display:'grid',gridTemplateColumns:'64px 1fr',gap:16,alignItems:'center',padding:'14px 22px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(58,84)}}>
          <div style={{width:64,height:64,border:'4px solid '+COLORS.ink,background:COLORS.red,color:COLORS.paper,display:'grid',placeItems:'center'}}><HeartPulse size={30} color={COLORS.paper}/></div>
          <div><div style={{fontSize:25,fontWeight:900,marginBottom:4}}>① 职工债权</div><div style={{fontSize:21,fontWeight:700,lineHeight:1.4}}>工资和医疗、伤残补助、抚恤费用，划入个人账户的基本养老、医疗保险费，补偿金——董监高的工资按职工平均工资计算</div></div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'64px 1fr',gap:16,alignItems:'center',padding:'14px 22px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(74,100)}}>
          <div style={{width:64,height:64,border:'4px solid '+COLORS.ink,background:'#7A5B12',color:COLORS.paper,display:'grid',placeItems:'center'}}><ReceiptText size={30} color={COLORS.paper}/></div>
          <div><div style={{fontSize:25,fontWeight:900,marginBottom:4}}>② 社会保险费用＋税款 → ③ 普通破产债权</div><div style={{fontSize:21,fontWeight:700,lineHeight:1.4}}>划入统筹账户的社会保险费用和税款在前，普通破产债权最后（外部按顺序，内部按比例）</div></div>
        </div>
      </div>
      <div style={{position:'absolute',left:1160,top:96,width:60,height:interpolate(flowProgress,[0,1],[0,430],CLAMP),background:COLORS.green,opacity:enter(120,142)}}/>
      <div data-stateful-source="bankruptcy-liquidation-waterfall" style={{position:'absolute',left:1146,top:interpolate(flowProgress,[0,1],[96,520],CLAMP),width:88,height:26,clipPath:'polygon(0 0, 78% 0, 100% 50%, 78% 100%, 0 100%)',background:COLORS.gold,opacity:flowProgress>0.9?0:1,zIndex:4}}/>
      <div style={{position:'absolute',right:0,top:96,width:470,padding:'20px 24px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(92,118)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10}}>
          <Banknote size={36} color={COLORS.red}/>
          <div style={{fontSize:25,fontWeight:900}}>易错</div>
        </div>
        <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>职工工资是<span style={{fontWeight:900}}>职工债权</span>，劣后于破产费用和共益债务清偿——<span style={{fontWeight:900,color:COLORS.red}}>不列入破产费用</span>先行清偿</div>
        <div data-stateful-terminal="bankruptcy-liquidation-waterfall" style={{display:'inline-block',marginTop:12,padding:'8px 16px',border:'3px solid '+COLORS.ink,background:COLORS.green,color:COLORS.paper,fontSize:20,fontWeight:900,opacity:enter(150,172)}}>瀑布走完</div>
      </div>
    </div>
  </Shell>;
};

export const BankruptcyLiquidation=()=> <AbsoluteFill>
  <TimelineSequence name="01-bankruptcy-liquidation-scene-01" start={SCENES['bankruptcy-liquidation-scene-01'].start} duration={SCENES['bankruptcy-liquidation-scene-01'].duration}><BankruptcyLiquidation01Scene/></TimelineSequence>
  <TimelineSequence name="02-bankruptcy-liquidation-scene-02" start={SCENES['bankruptcy-liquidation-scene-02'].start} duration={SCENES['bankruptcy-liquidation-scene-02'].duration}><BankruptcyLiquidation02Scene/></TimelineSequence>
  <TimelineSequence name="03-bankruptcy-liquidation-scene-03" start={SCENES['bankruptcy-liquidation-scene-03'].start} duration={SCENES['bankruptcy-liquidation-scene-03'].duration}><BankruptcyLiquidation03Scene/></TimelineSequence>
</AbsoluteFill>;
