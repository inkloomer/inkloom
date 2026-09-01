import type {ReactNode} from 'react';
import {Scale, Landmark, Wallet, Boxes, FileX2, Gem, Coins, ShieldCheck, Users, Ban, Undo2} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#EFF1ED', ink:'#232A26', green:'#2E6D4F', red:'#B23A30', gold:'#C9A23C', paper:'#F8FAF6'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.green,color:COLORS.paper}}>{code}</div>
    <div style={{position:'absolute',left:190,right:76,top:46,fontSize:46,fontWeight:900,lineHeight:1.12,borderBottom:'5px solid '+COLORS.gold,paddingBottom:12}}>{title}</div>
    <div style={{position:'absolute',left:76,right:76,top:150,bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

const Watermark=({icon,size=170,color}:{readonly icon:ReactNode;readonly size?:number;readonly color:string})=>(
  <div style={{position:'absolute',right:6,bottom:-4,opacity:0.09,pointerEvents:'none'}}>
    {icon}
  </div>
);

const Row=({icon,children,delay,color,pad='10px 14px'}:{readonly icon:ReactNode;readonly children:ReactNode;readonly delay:number;readonly color:string;readonly pad?:string})=>{
  const frame=useCurrentFrame();
  return <div style={{display:'flex',alignItems:'center',gap:12,padding:pad,background:COLORS.paper,borderLeft:'6px solid '+color,fontSize:22,fontWeight:800,lineHeight:1.45,opacity:interpolate(frame,[delay,delay+22],[0,1],CLAMP),translate:interpolate(frame,[delay,delay+22],['0px 18px','0px 0px'],CLAMP)}}>
    <span style={{flexShrink:0,display:'flex'}}>{icon}</span>
    <span>{children}</span>
  </div>;
};

export const DebtorPropertyScope01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="11.1" title="唯一判断标准：所有权">
    <div data-layout="title-test-1" data-visual-anchor="boundary" data-visual-grammar="title-ownership-test,registry-possession-ignored" data-text-treatments="label-block,thin-underline,soft-highlight" data-focal-rule="debtor-property-scope-scene-01-rule" data-focal-channels="enclosure,spatial,icon" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:20}}>
      <div data-final-knowledge="debtor-property-scope-knowledge-1" style={{flexShrink:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <Scale size={42} color={COLORS.green}/>
        <div style={{fontSize:28,fontWeight:900}}>债务人财产范围——只看一件事</div>
      </div>
      <div data-final-knowledge="debtor-property-scope-scene-01-test" style={{flex:'1 1 0',minHeight:0,position:'relative',padding:'24px 28px',border:'6px solid '+COLORS.green,background:COLORS.green+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:20,opacity:enter(28,54)}}>
        <Watermark icon={<Scale size={180} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
        <div style={{textAlign:'center',fontSize:34,fontWeight:900}}><span style={{background:COLORS.green+'28',padding:'4px 16px'}}>所有权</span> 是否属于 <span style={{background:COLORS.green+'28',padding:'4px 16px'}}>债务人</span></div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:20}}>
          <Row icon={<ShieldCheck size={26} color={COLORS.green}/>} delay={46} color={COLORS.green} pad="16px 18px">属于 → <span style={{fontWeight:900,color:COLORS.green}}>债务人财产</span>（含已设担保物权的财产）</Row>
          <Row icon={<Ban size={26} color={COLORS.red}/>} delay={62} color={COLORS.red} pad="16px 18px">不属于 → <span style={{fontWeight:900,color:COLORS.red}}>他人可取回</span>（保管/租赁物等）</Row>
        </div>
        <Row icon={<Landmark size={26} color={COLORS.green}/>} delay={78} color={COLORS.green} pad="12px 16px">担保物权<span style={{fontWeight:900}}>不转移所有权</span> → 已设担保的财产<span style={{fontWeight:900,color:COLORS.green}}>仍属债务人财产</span>，但担保权人享有<span style={{fontWeight:900}}>别除权</span>，担保物在债权范围内不得用于集体清偿</Row>
      </div>
    </div>
  </Shell>;
};

export const DebtorPropertyScope02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="11.1" title="属于债务人财产">
    <div data-layout="in-scope-2" data-visual-anchor="typographic-sequence" data-visual-grammar="secured-assets-included,co-owned-assets-included" data-text-treatments="stamp,soft-highlight,label-block" data-focal-rule="debtor-property-scope-scene-02-rule" data-focal-channels="enclosure,motion,annotation" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:16}}>
      <div data-final-knowledge="debtor-property-scope-knowledge-2" style={{flexShrink:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <Wallet size={40} color={COLORS.green}/>
        <div style={{fontSize:27,fontWeight:900}}>三类：<span style={{color:COLORS.green}}>自有财产 · 已设担保财产 · 共有财产</span></div>
      </div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="debtor-property-scope-scene-02-item-0" style={{position:'relative',padding:'18px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.green,background:COLORS.green+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54),translate:slide(28,54,'0px 22px')}}>
          <Watermark icon={<Coins size={140} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:24,fontWeight:900,marginBottom:8,flexShrink:0}}><Coins size={30} color={COLORS.green}/>① 自有财产</div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Coins size={22} color={COLORS.green}/>} delay={40} color={COLORS.green} pad="9px 12px">债务人所有的<span style={{fontWeight:900 }}>货币、实物</span></Row>
            <Row icon={<Gem size={22} color={COLORS.green}/>} delay={52} color={COLORS.green} pad="9px 12px"><span style={{fontWeight:900}}>股权、知识产权</span>等财产权利</Row>
          </div>
        </div>
        <div data-final-knowledge="debtor-property-scope-scene-02-item-1" style={{position:'relative',padding:'18px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.green,background:COLORS.green+'4D',display:'flex',flexDirection:'column',opacity:enter(44,70),translate:slide(44,70,'0px 22px')}}>
          <Watermark icon={<Scale size={140} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:24,fontWeight:900,marginBottom:8,flexShrink:0}}><Scale size={30} color={COLORS.green}/>② 已设担保物权的特定财产</div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Scale size={22} color={COLORS.green}/>} delay={56} color={COLORS.green} pad="9px 12px">担保物权<span style={{fontWeight:900}}>不转移所有权</span></Row>
            <Row icon={<ShieldCheck size={22} color={COLORS.green}/>} delay={68} color={COLORS.green} pad="9px 12px">仍属债务人财产——担保权人行使<span style={{fontWeight:900,color:COLORS.gold}}>别除权</span></Row>
          </div>
        </div>
        <div data-final-knowledge="debtor-property-scope-scene-02-item-2" style={{position:'relative',padding:'18px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.green,background:COLORS.green+'4D',display:'flex',flexDirection:'column',opacity:enter(60,86),translate:slide(60,86,'0px 22px')}}>
          <Watermark icon={<Users size={140} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:24,fontWeight:900,marginBottom:8,flexShrink:0}}><Users size={30} color={COLORS.green}/>③ 共有财产</div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Users size={22} color={COLORS.green}/>} delay={72} color={COLORS.green} pad="9px 12px">与他人<span style={{fontWeight:900}}>共有</span>的财产份额等</Row>
          </div>
        </div>
      </div>
    </div>
  </Shell>;
};

export const DebtorPropertyScope03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="11.1" title="不属于债务人财产">
    <div data-layout="out-scope-3" data-visual-anchor="comparison-axis" data-visual-grammar="bailment-borrow-lease,title-retention" data-text-treatments="external-negation,label-block,soft-highlight" data-focal-rule="debtor-property-scope-scene-03-rule" data-focal-channels="contrast,spatial,annotation" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:16}}>
      <div data-final-knowledge="debtor-property-scope-knowledge-3" style={{flexShrink:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <FileX2 size={40} color={COLORS.red}/>
        <div style={{fontSize:27,fontWeight:900}}>所有权不属于债务人——<span style={{color:COLORS.red }}>权利人可取回</span></div>
      </div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="debtor-property-scope-scene-03-item-0" style={{position:'relative',padding:'18px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54),translate:slide(28,54,'0px 22px')}}>
          <Watermark icon={<Boxes size={140} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:24,fontWeight:900,marginBottom:8,flexShrink:0}}><Boxes size={30} color={COLORS.red}/>① 占有他人的财产</div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Boxes size={22} color={COLORS.red}/>} delay={40} color={COLORS.red} pad="9px 12px"><span style={{fontWeight:900}}>保管、借用、租赁</span>的他人财产</Row>
            <Row icon={<Undo2 size={22} color={COLORS.red}/>} delay={52} color={COLORS.red} pad="9px 12px">所有权人可通过管理人<span style={{fontWeight:900,color:COLORS.red}}>取回</span></Row>
          </div>
        </div>
        <div data-final-knowledge="debtor-property-scope-scene-03-item-1" style={{position:'relative',padding:'18px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(44,70),translate:slide(44,70,'0px 22px')}}>
          <Watermark icon={<FileX2 size={140} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:24,fontWeight:900,marginBottom:8,flexShrink:0}}><FileX2 size={30} color={COLORS.red}/>② 所有权保留买卖</div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<FileX2 size={22} color={COLORS.red}/>} delay={56} color={COLORS.red} pad="9px 12px"><span style={{fontWeight:900}}>尚未取得所有权</span>的财产</Row>
            <Row icon={<Ban size={22} color={COLORS.red}/>} delay={68} color={COLORS.red} pad="9px 12px">出卖人保留所有权 → <span style={{fontWeight:900,color:COLORS.red}}>不属于</span>债务人财产</Row>
          </div>
        </div>
        <div data-final-knowledge="debtor-property-scope-scene-03-item-2" style={{position:'relative',padding:'18px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(60,86),translate:slide(60,86,'0px 22px')}}>
          <Watermark icon={<Landmark size={140} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:24,fontWeight:900,marginBottom:8,flexShrink:0}}><Landmark size={30} color={COLORS.red}/>③ 专属国家财产</div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Landmark size={22} color={COLORS.red}/>} delay={72} color={COLORS.red} pad="9px 12px"><span style={{fontWeight:900}}>专属于国家</span>且不得转让的财产等</Row>
          </div>
        </div>
      </div>
    </div>
  </Shell>;
};

export const DebtorPropertyScope=()=> <AbsoluteFill>
  <TimelineSequence name="01-debtor-property-scope-scene-01" start={SCENES['debtor-property-scope-scene-01'].start} duration={SCENES['debtor-property-scope-scene-01'].duration}><DebtorPropertyScope01Scene/></TimelineSequence>
  <TimelineSequence name="02-debtor-property-scope-scene-02" start={SCENES['debtor-property-scope-scene-02'].start} duration={SCENES['debtor-property-scope-scene-02'].duration}><DebtorPropertyScope02Scene/></TimelineSequence>
  <TimelineSequence name="03-debtor-property-scope-scene-03" start={SCENES['debtor-property-scope-scene-03'].start} duration={SCENES['debtor-property-scope-scene-03'].duration}><DebtorPropertyScope03Scene/></TimelineSequence>
</AbsoluteFill>;
