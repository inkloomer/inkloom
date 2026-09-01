import type {ReactNode} from 'react';
import {Landmark, Ban, ShieldCheck, Users, HeartPulse, ReceiptText, Banknote, Lock, Coins, Scale, Gavel, HandCoins, Undo2} from 'lucide-react';
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

export const BankruptcyLiquidation01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="12.2" title="宣告破产的效果">
    <div data-layout="declaration-gate-1" data-visual-anchor="boundary" data-visual-grammar="declaration-effects,no-return-to-reorganization" data-text-treatments="stamp,external-negation,label-block" data-focal-rule="bankruptcy-liquidation-scene-01-rule" data-focal-channels="enclosure,contrast,annotation" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:16}}>
      <div data-final-knowledge="bankruptcy-liquidation-knowledge-1" style={{flexShrink:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <Gavel size={42} color={COLORS.red}/>
        <div style={{fontSize:28,fontWeight:900 }}>宣告破产——彻底进入<span style={{color:COLORS.red }}>破产清算程序</span></div>
      </div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="bankruptcy-liquidation-scene-01-effects" style={{position:'relative',padding:'18px 24px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54),translate:slide(28,54,'-24px 0px')}}>
          <Watermark icon={<Gavel size={150} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10,flexShrink:0}}>
            <Gavel size={34} color={COLORS.red}/>
            <div style={{padding:'8px 18px',background:COLORS.red,color:COLORS.paper,fontSize:25,fontWeight:900 }}>三个转变</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Scale size={24} color={COLORS.red}/>} delay={40} color={COLORS.red} pad="10px 13px">债务人变为<span style={{fontWeight:900,color:COLORS.red }}>破产人</span></Row>
            <Row icon={<Coins size={24} color={COLORS.red}/>} delay={54} color={COLORS.red} pad="10px 13px">债务人财产变为<span style={{fontWeight:900,color:COLORS.red }}>破产财产</span></Row>
            <Row icon={<Users size={24} color={COLORS.red}/>} delay={68} color={COLORS.red} pad="10px 13px">用以<span style={{fontWeight:900,color:COLORS.red }}>集体清偿</span></Row>
          </div>
        </div>
        <div data-final-knowledge="bankruptcy-liquidation-scene-01-noreturn" style={{position:'relative',padding:'18px 24px',border:'5px dashed '+COLORS.green,background:COLORS.green+'4D',display:'flex',flexDirection:'column',opacity:enter(46,72),translate:slide(46,72,'24px 0px')}}>
          <Watermark icon={<Ban size={150} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10,flexShrink:0}}>
            <Ban size={34} color={COLORS.green}/>
            <div style={{padding:'8px 18px',background:COLORS.green,color:COLORS.paper,fontSize:25,fontWeight:900 }}>不归路</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Ban size={24} color={COLORS.green}/>} delay={58} color={COLORS.green} pad="10px 13px">不能再转为<span style={{fontWeight:900,color:COLORS.green }}>重整</span>或<span style={{fontWeight:900,color:COLORS.green }}>和解</span></Row>
            <Row icon={<Scale size={24} color={COLORS.green}/>} delay={72} color={COLORS.green} pad="10px 13px">判断：宣告破产后<span style={{fontWeight:900,color:COLORS.green }}>不可能</span>再进入重整或和解程序</Row>
          </div>
        </div>
      </div>
      <div style={{flexShrink:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.gold,background:COLORS.gold+'4D',padding:'13px 24px',opacity:enter(90,116)}}>
        <HandCoins size={34} color={COLORS.gold}/>
        <div style={{fontSize:21,fontWeight:800,lineHeight:1.45 }}>对照：受理（（受理只是程序开始）≠ 宣告——<span style={{fontWeight:900 }}>受理后宣告前</span>仍可转重整（大股东申请）或和解</div>
      </div>
    </div>
  </Shell>;
};

export const BankruptcyLiquidation02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="12.2" title="有担保 与 无担保债权人">
    <div data-layout="secured-priority-2" data-visual-anchor="role-pair" data-visual-grammar="secured-creditor-priority,unsecured-collective" data-text-treatments="label-block,soft-highlight,thin-underline" data-focal-rule="bankruptcy-liquidation-scene-02-rule" data-focal-channels="contrast,connector,spatial" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:16}}>
      <div data-final-knowledge="bankruptcy-liquidation-knowledge-2" style={{flexShrink:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#6E6757',opacity:enter(12,36)}}>别除权人走<span style={{color:COLORS.red }}>个别优先</span> · 普通债权人走<span style={{color:COLORS.green }}>集体清偿</span></div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="bankruptcy-liquidation-scene-02-secured" style={{position:'relative',padding:'18px 24px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54),translate:slide(28,54,'-24px 0px')}}>
          <Watermark icon={<Lock size={150} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10,flexShrink:0}}>
            <Lock size={34} color={COLORS.red}/>
            <div style={{padding:'8px 18px',background:COLORS.red,color:COLORS.paper,fontSize:25,fontWeight:900 }}>有担保债权人（别除权）</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Lock size={24} color={COLORS.red}/>} delay={40} color={COLORS.red} pad="10px 13px">在<span style={{fontWeight:900,color:COLORS.red }}>担保物价值范围内优先受偿</span>——不参与集体清偿</Row>
            <Row icon={<Coins size={24} color={COLORS.red}/>} delay={54} color={COLORS.red} pad="10px 13px">别除权标的物<span style={{fontWeight:900 }}>不计入破产财产</span></Row>
            <Row icon={<Undo2 size={24} color={COLORS.red}/>} delay={68} color={COLORS.red} pad="10px 13px">放弃别除权 / 行使后<span style={{fontWeight:900 }}>未获清偿部分</span> → <span style={{fontWeight:900,color:COLORS.green }}>普通破产债权</span>（判断：汽车抵押的乙就该车享优先受偿）</Row>
          </div>
        </div>
        <div data-final-knowledge="bankruptcy-liquidation-scene-02-unsecured" style={{position:'relative',padding:'18px 24px',border:'5px solid '+COLORS.green,background:COLORS.green+'4D',display:'flex',flexDirection:'column',opacity:enter(46,72),translate:slide(46,72,'24px 0px')}}>
          <Watermark icon={<Users size={150} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10,flexShrink:0}}>
            <Users size={34} color={COLORS.green}/>
            <div style={{padding:'8px 18px',background:COLORS.green,color:COLORS.paper,fontSize:25,fontWeight:900 }}>无担保债权人</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Coins size={24} color={COLORS.green}/>} delay={58} color={COLORS.green} pad="10px 13px">破产财产<span style={{fontWeight:900,color:COLORS.green }}>优先清偿破产费用和共益债务后</span>，参与集体清偿</Row>
            <Row icon={<Users size={24} color={COLORS.green}/>} delay={72} color={COLORS.green} pad="10px 13px">外部<span style={{fontWeight:900 }}>按顺序</span>、内部<span style={{fontWeight:900 }}>按比例</span></Row>
            <Row icon={<Ban size={24} color={COLORS.red}/>} delay={86} color={COLORS.red} pad="10px 13px">易错：员工工资是<span style={{fontWeight:900,color:COLORS.red }}>职工债权</span>，<span style={{fontWeight:900 }}>劣后于</span>破产费用和共益债务——<span style={{fontWeight:900,color:COLORS.red }}>不是</span>破产费用先行清偿</Row>
          </div>
        </div>
      </div>
    </div>
  </Shell>;
};

export const BankruptcyLiquidation03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const waterfallProgress=interpolate(frame,[130,250],[0,1],CLAMP);
  return <Shell code="12.2" title="清偿顺序：三级瀑布">
    <div data-layout="distribution-waterfall-3" data-visual-anchor="flow-path" data-visual-grammar="payment-waterfall,worker-priority" data-text-treatments="soft-highlight,stamp,label-block" data-focal-rule="bankruptcy-liquidation-scene-03-rule" data-focal-channels="connector,motion,enclosure" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:14}}>
      <div data-final-knowledge="bankruptcy-liquidation-knowledge-3" style={{flexShrink:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <Banknote size={40} color={COLORS.red}/>
        <div style={{fontSize:26,fontWeight:900 }}>优先清偿 → 随时清偿 → 集体清偿</div>
      </div>
      <div style={{flex:'1 1 0',minHeight:0,display:'flex',flexDirection:'column',gap:12,paddingRight:330}}>
        <div data-final-knowledge="bankruptcy-liquidation-scene-03-step-0" style={{position:'relative',flex:'1 1 0',minHeight:0,display:'flex',alignItems:'center',gap:16,padding:'10px 20px',border:'4px solid '+COLORS.ink,background:COLORS.gold+'4D',opacity:enter(28,54)}}>
          <Watermark icon={<Landmark size={110} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
          <div style={{width:56,height:56,flexShrink:0,border:'4px solid '+COLORS.ink,background:COLORS.gold,color:COLORS.paper,display:'grid',placeItems:'center',fontSize:22,fontWeight:900 }}>优先</div>
          <div style={{display:'flex',flexDirection:'column',gap:6,flex:1,justifyContent:'center'}}>
            <div style={{fontSize:23,fontWeight:900 }}>① 建设工程价款 → ② 有担保债权（别除权）</div>
            <Row icon={<Lock size={22} color={COLORS.gold}/>} delay={40} color={COLORS.gold} pad="6px 12px">别除权标的物不计入破产财产；未获清偿部分转<span style={{fontWeight:900 }}>普通破产债权</span></Row>
          </div>
        </div>
        <div data-final-knowledge="bankruptcy-liquidation-scene-03-step-1" style={{position:'relative',flex:'0.85 1 0',minHeight:0,display:'flex',alignItems:'center',gap:16,padding:'10px 20px',border:'4px solid '+COLORS.ink,background:COLORS.green+'4D',opacity:enter(44,70)}}>
          <Watermark icon={<ReceiptText size={110} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
          <div style={{width:56,height:56,flexShrink:0,border:'4px solid '+COLORS.ink,background:COLORS.green,color:COLORS.paper,display:'grid',placeItems:'center',fontSize:22,fontWeight:900 }}>随时</div>
          <div style={{display:'flex',flexDirection:'column',gap:6,flex:1,justifyContent:'center'}}>
            <div style={{fontSize:23,fontWeight:900 }}>③ 随时清偿：<span style={{fontWeight:900,color:COLORS.green }}>破产费用＞共益债务</span></div>
            <Row icon={<ReceiptText size={22} color={COLORS.green}/>} delay={54} color={COLORS.green} pad="6px 12px">对外按顺序，对内<span style={{fontWeight:900 }}>按比例</span></Row>
          </div>
        </div>
        <div data-final-knowledge="bankruptcy-liquidation-scene-03-step-2" style={{position:'relative',flex:'1.3 1 0',minHeight:0,display:'flex',alignItems:'center',gap:16,padding:'10px 20px',border:'4px solid '+COLORS.ink,background:COLORS.red+'4D',opacity:enter(60,86)}}>
          <Watermark icon={<Users size={110} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
          <div style={{width:56,height:56,flexShrink:0,border:'4px solid '+COLORS.ink,background:COLORS.red,color:COLORS.paper,display:'grid',placeItems:'center',fontSize:22,fontWeight:900 }}>集体</div>
          <div style={{display:'flex',flexDirection:'column',gap:6,flex:1,justifyContent:'center'}}>
            <div style={{fontSize:23,fontWeight:900 }}>④ 职工债权 → ⑤ 社保（统筹）＋税款 → ⑥ 普通破产债权</div>
            <Row icon={<HeartPulse size={22} color={COLORS.red}/>} delay={68} color={COLORS.red} pad="6px 12px">职工：<span style={{fontWeight:900 }}>工资、医疗伤残补助、抚恤费</span>、划入个人账户的<span style={{fontWeight:900 }}>养老/医疗保险</span>、<span style={{fontWeight:900 }}>补偿金</span></Row>
            <Row icon={<Scale size={22} color={COLORS.red}/>} delay={80} color={COLORS.red} pad="6px 12px"><span style={{fontWeight:900,color:COLORS.red }}>董监高工资按职工平均工资计算</span>；外部按顺序、内部按比例</Row>
          </div>
        </div>
      </div>
      <div style={{position:'absolute',right:352,top:180,width:8,height:interpolate(waterfallProgress,[0,1],[0,420],CLAMP),background:COLORS.green,opacity:enter(120,142)}}/>
      <div data-stateful-source="bankruptcy-liquidation-waterfall" style={{position:'absolute',right:338,top:interpolate(waterfallProgress,[0,1],[170,590],CLAMP),width:76,height:26,clipPath:'polygon(0 0, 78% 0, 100% 50%, 78% 100%, 0 100%)',background:COLORS.gold,opacity:waterfallProgress>0.9?0:1,zIndex:4}}/>
      <div data-stateful-terminal="bankruptcy-liquidation-waterfall" style={{position:'absolute',right:330,top:620,padding:'8px 14px',border:'3px solid '+COLORS.ink,background:COLORS.green,color:COLORS.paper,fontSize:19,fontWeight:900,opacity:enter(150,172)}}>瀑布走完</div>
    </div>
  </Shell>;
};

export const BankruptcyLiquidation=()=> <AbsoluteFill>
  <TimelineSequence name="01-bankruptcy-liquidation-scene-01" start={SCENES['bankruptcy-liquidation-scene-01'].start} duration={SCENES['bankruptcy-liquidation-scene-01'].duration}><BankruptcyLiquidation01Scene/></TimelineSequence>
  <TimelineSequence name="02-bankruptcy-liquidation-scene-02" start={SCENES['bankruptcy-liquidation-scene-02'].start} duration={SCENES['bankruptcy-liquidation-scene-02'].duration}><BankruptcyLiquidation02Scene/></TimelineSequence>
  <TimelineSequence name="03-bankruptcy-liquidation-scene-03" start={SCENES['bankruptcy-liquidation-scene-03'].start} duration={SCENES['bankruptcy-liquidation-scene-03'].duration}><BankruptcyLiquidation03Scene/></TimelineSequence>
</AbsoluteFill>;
