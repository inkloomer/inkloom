import type {ReactNode} from 'react';
import {Building2, Users, ClipboardList, Crown, Lock, PauseCircle, Landmark, MapPin, Ban, Scale, ScrollText, Gavel} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#EEF1F2', ink:'#232A33', blue:'#245E8F', red:'#B23A30', gold:'#C9A23C', paper:'#FAFCFC'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.blue,color:COLORS.paper}}>{code}</div>
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

export const BankruptcyApplication01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="09.2" title="谁申请、申请什么">
    <div data-layout="application-switch-1" data-visual-anchor="role-pair" data-visual-grammar="applicant-switch,program-restriction" data-text-treatments="label-block,external-negation,soft-highlight" data-focal-rule="bankruptcy-application-scene-01-rule" data-focal-channels="contrast,connector,annotation" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:14}}>
      <div data-final-knowledge="bankruptcy-application-knowledge-1" style={{flexShrink:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <ClipboardList size={40} color={COLORS.blue}/>
        <div style={{fontSize:27,fontWeight:900}}>四类申请人 × 可选程序</div>
      </div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gridTemplateRows:'repeat(2,minmax(0,1fr))',gap:16}}>
        <div data-final-knowledge="bankruptcy-application-scene-01-applicant-0" style={{position:'relative',padding:'14px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.blue,background:COLORS.blue+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54),translate:slide(28,54,'0px 22px')}}>
          <Watermark icon={<Building2 size={120} color={COLORS.blue} strokeWidth={1.2}/>} color={COLORS.blue}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:24,fontWeight:900,marginBottom:6,flexShrink:0}}><Building2 size={30} color={COLORS.blue}/>债务人（自己发生破产原因）</div>
          <div style={{display:'flex',flexDirection:'column',gap:8,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Scale size={22} color={COLORS.blue}/>} delay={40} color={COLORS.blue} pad="7px 12px">可提：<span style={{background:COLORS.blue+'26',padding:'1px 8px',fontWeight:900}}>重整/和解/清算</span>——三类均可</Row>
          </div>
        </div>
        <div data-final-knowledge="bankruptcy-application-scene-01-applicant-1" style={{position:'relative',padding:'14px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.gold,background:COLORS.gold+'4D',display:'flex',flexDirection:'column',opacity:enter(44,70),translate:slide(44,70,'0px 22px')}}>
          <Watermark icon={<Users size={120} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:24,fontWeight:900,marginBottom:6,flexShrink:0}}><Users size={30} color={COLORS.gold}/>债权人（债权到期＋还不了）</div>
          <div style={{display:'flex',flexDirection:'column',gap:8,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Scale size={22} color={COLORS.gold}/>} delay={54} color={COLORS.gold} pad="7px 12px">可提：<span style={{background:COLORS.gold+'40',padding:'1px 8px',fontWeight:900}}>重整/清算</span></Row>
            <Row icon={<Ban size={22} color={COLORS.red}/>} delay={66} color={COLORS.red} pad="7px 12px"><span style={{fontWeight:900,color:COLORS.red}}>不可申请和解</span></Row>
          </div>
        </div>
        <div data-final-knowledge="bankruptcy-application-scene-01-applicant-2" style={{position:'relative',padding:'14px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(60,86),translate:slide(60,86,'0px 22px')}}>
          <Watermark icon={<Landmark size={120} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:24,fontWeight:900,marginBottom:6,flexShrink:0}}><Landmark size={30} color={COLORS.red}/>清算人（清算时资不抵债）</div>
          <div style={{display:'flex',flexDirection:'column',gap:8,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Gavel size={22} color={COLORS.red}/>} delay={70} color={COLORS.red} pad="7px 12px">仅可提：<span style={{background:COLORS.red+'20',padding:'1px 8px',fontWeight:900}}>清算</span></Row>
          </div>
        </div>
        <div data-final-knowledge="bankruptcy-application-scene-01-applicant-3" style={{position:'relative',padding:'14px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.blue,background:COLORS.blue+'4D',display:'flex',flexDirection:'column',opacity:enter(76,102),translate:slide(76,102,'0px 22px')}}>
          <Watermark icon={<Crown size={120} color={COLORS.blue} strokeWidth={1.2}/>} color={COLORS.blue}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:24,fontWeight:900,marginBottom:6,flexShrink:0}}><Crown size={30} color={COLORS.blue}/>债务人/大股东（持股10%以上）</div>
          <div style={{display:'flex',flexDirection:'column',gap:8,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<ScrollText size={22} color={COLORS.blue}/>} delay={82} color={COLORS.blue} pad="7px 12px">条件：债权人提<span style={{fontWeight:900}}>清算</span>＋法院<span style={{fontWeight:900}}>受理后、宣告破产前</span></Row>
            <Row icon={<Scale size={22} color={COLORS.blue}/>} delay={94} color={COLORS.blue} pad="7px 12px">可提：<span style={{background:COLORS.blue+'26',padding:'1px 8px',fontWeight:900}}>重整</span></Row>
          </div>
        </div>
      </div>
    </div>
  </Shell>;
};

export const BankruptcyApplication02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="09.2" title="受理后的三大效果">
    <div data-layout="acceptance-gates-2" data-visual-anchor="boundary" data-visual-grammar="preservation-halt,centralized-jurisdiction" data-text-treatments="stamp,soft-highlight,label-block" data-focal-rule="bankruptcy-application-scene-02-rule" data-focal-channels="enclosure,motion,contrast" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:16}}>
      <div data-final-knowledge="bankruptcy-application-knowledge-2" style={{flexShrink:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#6E6757',opacity:enter(12,36)}}>生死由<span style={{color:COLORS.blue}}>法院</span>定——受理后三件事</div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="bankruptcy-application-scene-02-gate-0" style={{position:'relative',padding:'16px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.blue,background:COLORS.blue+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54),translate:slide(28,54,'0px 22px')}}>
          <Watermark icon={<Lock size={130} color={COLORS.blue} strokeWidth={1.2}/>} color={COLORS.blue}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:24,fontWeight:900,marginBottom:6,flexShrink:0}}><Lock size={30} color={COLORS.blue}/>① 保全解除·执行中止</div>
          <div style={{display:'flex',flexDirection:'column',gap:9,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Lock size={22} color={COLORS.blue}/>} delay={40} color={COLORS.blue} pad="8px 12px">债务人财产<span style={{fontWeight:900,color:COLORS.blue}}>保全解除</span></Row>
            <Row icon={<PauseCircle size={22} color={COLORS.blue}/>} delay={52} color={COLORS.blue} pad="8px 12px">执行程序<span style={{fontWeight:900,color:COLORS.blue}}>中止</span></Row>
          </div>
        </div>
        <div data-final-knowledge="bankruptcy-application-scene-02-gate-1" style={{position:'relative',padding:'16px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.gold,background:COLORS.gold+'4D',display:'flex',flexDirection:'column',opacity:enter(44,70),translate:slide(44,70,'0px 22px')}}>
          <Watermark icon={<PauseCircle size={130} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:24,fontWeight:900,marginBottom:6,flexShrink:0}}><PauseCircle size={30} color={COLORS.gold}/>② 其他程序中止</div>
          <div style={{display:'flex',flexDirection:'column',gap:9,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<ScrollText size={22} color={COLORS.gold}/>} delay={56} color={COLORS.gold} pad="8px 12px">受理前已发生的<span style={{fontWeight:900}}>诉讼/仲裁</span>中止</Row>
            <Row icon={<Users size={22} color={COLORS.gold}/>} delay={68} color={COLORS.gold} pad="8px 12px"><span style={{fontWeight:900}}>管理人接管后</span>，原法院继续审理</Row>
          </div>
        </div>
        <div data-final-knowledge="bankruptcy-application-scene-02-gate-2" style={{position:'relative',padding:'16px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(60,86),translate:slide(60,86,'0px 22px')}}>
          <Watermark icon={<MapPin size={130} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:24,fontWeight:900,marginBottom:6,flexShrink:0}}><MapPin size={30} color={COLORS.red}/>③ 集中管辖</div>
          <div style={{display:'flex',flexDirection:'column',gap:9,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<MapPin size={22} color={COLORS.red}/>} delay={72} color={COLORS.red} pad="8px 12px">受理后有关债务人的诉讼 → 只能向<span style={{fontWeight:900,color:COLORS.red}}>受理破产的法院</span>提</Row>
            <Row icon={<Scale size={22} color={COLORS.red}/>} delay={84} color={COLORS.red} pad="8px 12px"><span style={{fontWeight:900}}>有仲裁条款的仍去仲裁</span></Row>
          </div>
        </div>
      </div>
      <div style={{flexShrink:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.blue,background:COLORS.blue+'4D',padding:'13px 24px',opacity:enter(100,126)}}>
        <Gavel size={34} color={COLORS.blue}/>
        <div style={{fontSize:21,fontWeight:800,lineHeight:1.45}}>判断：B区法院受理甲公司破产申请后，管理人追索租金应向 <span style={{fontWeight:900,color:COLORS.blue}}>B区法院（受理法院）</span>起诉——不是A区（房屋所在地）</div>
      </div>
    </div>
  </Shell>;
};

export const BankruptcyApplication03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="09.2" title="受理前后的诉讼管辖">
    <div data-layout="jurisdiction-clock-3" data-visual-anchor="timeline-gate" data-visual-grammar="pre-acceptance-court,post-acceptance-court" data-text-treatments="thin-underline,label-block,stamp" data-focal-rule="bankruptcy-application-scene-03-rule" data-focal-channels="connector,motion,locator" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:16}}>
      <div data-final-knowledge="bankruptcy-application-knowledge-3" style={{flexShrink:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <Gavel size={40} color={COLORS.blue}/>
        <div style={{fontSize:27,fontWeight:900}}>以<span style={{color:COLORS.blue}}>受理</span>为分界：管辖规则切换</div>
      </div>
      <div style={{flex:'1 1 0',minHeight:0,display:'flex',gap:16}}>
        <div data-final-knowledge="bankruptcy-application-scene-03-before" style={{flex:'1 1 0',minWidth:0,position:'relative',padding:'18px 24px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54),translate:slide(28,54,'-24px 0px')}}>
          <Watermark icon={<PauseCircle size={150} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10,flexShrink:0}}>
            <PauseCircle size={34} color={COLORS.gold}/>
            <div style={{padding:'8px 18px',background:COLORS.gold,color:COLORS.paper,fontSize:24,fontWeight:900}}>受理前已发生的诉讼</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<PauseCircle size={24} color={COLORS.gold}/>} delay={40} color={COLORS.gold} pad="10px 13px"><span style={{fontWeight:900,color:COLORS.gold }}>中止</span>——等待管理人接管</Row>
            <Row icon={<Landmark size={24} color={COLORS.gold}/>} delay={54} color={COLORS.gold} pad="10px 13px">接管后 → <span style={{fontWeight:900}}>原法院继续审理</span></Row>
            <Row icon={<Scale size={24} color={COLORS.gold}/>} delay={68} color={COLORS.gold} pad="10px 13px"><span style={{fontWeight:900}}>仲裁</span>不中止——照常进行</Row>
          </div>
          <div data-stateful-source="bankruptcy-application-jurisdiction" style={{position:'absolute',right:14,top:14,padding:'6px 14px',border:'3px solid '+COLORS.gold,background:COLORS.paper,color:'#7A5B12',fontSize:20,fontWeight:900}}>原法院</div>
        </div>
        <div style={{flexShrink:0,width:150,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:10}}>
          <div style={{fontSize:26,fontWeight:900,color:COLORS.blue,opacity:enter(80,104)}}>受理</div>
          <div style={{width:6,flex:1,background:COLORS.blue,opacity:enter(80,104),borderRadius:3}}/>
          <div style={{fontSize:30,fontWeight:900,color:COLORS.blue,opacity:enter(96,120)}}>↓</div>
        </div>
        <div data-final-knowledge="bankruptcy-application-scene-03-after" style={{flex:'1 1 0',minWidth:0,position:'relative',padding:'18px 24px',border:'5px solid '+COLORS.blue,background:COLORS.blue+'4D',display:'flex',flexDirection:'column',opacity:enter(58,84),translate:slide(58,84,'24px 0px')}}>
          <Watermark icon={<MapPin size={150} color={COLORS.blue} strokeWidth={1.2}/>} color={COLORS.blue}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10,flexShrink:0}}>
            <MapPin size={34} color={COLORS.blue}/>
            <div style={{padding:'8px 18px',background:COLORS.blue,color:COLORS.paper,fontSize:24,fontWeight:900}}>受理后新提的诉讼</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<MapPin size={24} color={COLORS.blue}/>} delay={72} color={COLORS.blue} pad="10px 13px">只能向<span style={{background:COLORS.blue+'26',padding:'1px 8px',fontWeight:900}}>受理破产的法院</span>提起——集中管辖</Row>
            <Row icon={<Ban size={24} color={COLORS.red}/>} delay={86} color={COLORS.red} pad="10px 13px">向其他法院起诉的 → <span style={{fontWeight:900,color:COLORS.red }}>不予受理</span>（仲裁除外）</Row>
          </div>
          <div data-stateful-terminal="bankruptcy-application-jurisdiction" style={{position:'absolute',right:14,top:14,padding:'6px 14px',border:'3px solid '+COLORS.ink,background:COLORS.blue,color:COLORS.paper,fontSize:20,fontWeight:900,opacity:enter(140,164)}}>破产法院</div>
        </div>
      </div>
      <div style={{flexShrink:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.blue,background:COLORS.blue+'4D',padding:'13px 24px',opacity:enter(100,126)}}>
        <ScrollText size={34} color={COLORS.blue}/>
        <div style={{fontSize:21,fontWeight:800,lineHeight:1.45}}>记忆：受理＝分水岭——<span style={{fontWeight:900,color:COLORS.gold}}>前：中止→原法院续审</span>；<span style={{fontWeight:900,color:COLORS.blue}}>后：集中到破产法院</span>；仲裁两条线都照旧</div>
      </div>
    </div>
  </Shell>;
};

export const BankruptcyApplication=()=> <AbsoluteFill>
  <TimelineSequence name="01-bankruptcy-application-scene-01" start={SCENES['bankruptcy-application-scene-01'].start} duration={SCENES['bankruptcy-application-scene-01'].duration}><BankruptcyApplication01Scene/></TimelineSequence>
  <TimelineSequence name="02-bankruptcy-application-scene-02" start={SCENES['bankruptcy-application-scene-02'].start} duration={SCENES['bankruptcy-application-scene-02'].duration}><BankruptcyApplication02Scene/></TimelineSequence>
  <TimelineSequence name="03-bankruptcy-application-scene-03" start={SCENES['bankruptcy-application-scene-03'].start} duration={SCENES['bankruptcy-application-scene-03'].duration}><BankruptcyApplication03Scene/></TimelineSequence>
</AbsoluteFill>;
