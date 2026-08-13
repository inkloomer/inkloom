import type {ReactNode} from 'react';
import {Users, Landmark, FileCheck2, FileX2, Coins, HeartPulse, ReceiptText, Banknote, UserRound, Timer} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#F1EFE6', ink:'#22262E', green:'#2E6D4F', red:'#B23A30', gold:'#C08A2D', paper:'#FAF7EE'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.green,color:COLORS.paper}}>{code}</div>
    <div style={{position:'absolute',left:190,right:76,top:46,fontSize:46,fontWeight:900,lineHeight:1.12,borderBottom:'5px solid '+COLORS.gold,paddingBottom:12}}>{title}</div>
    <div style={{position:'absolute',left:76,right:76,top:150,bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

export const CompanyLiquidation01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="08.2" title="自行清算 与 指定清算">
    <div data-layout="liquidation-types-1" data-visual-anchor="comparison-axis" data-visual-grammar="self-liquidation,court-appointed" data-text-treatments="label-block,thin-underline,soft-highlight" data-focal-rule="company-liquidation-scene-01-rule" data-focal-channels="contrast,spatial,icon" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="company-liquidation-knowledge-1" style={{position:'absolute',left:0,right:0,top:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#6E6757',opacity:enter(12,36)}}>记忆口诀：自行清算看董事</div>
      <div data-final-knowledge="company-liquidation-scene-01-self" style={{position:'absolute',left:24,top:76,width:850,padding:26,border:'5px solid '+COLORS.green,background:COLORS.paper,opacity:enter(28,54),translate:slide(28,54,'-26px 0px')}}>
        <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:14}}>
          <Users size={44} color={COLORS.green}/>
          <div style={{padding:'8px 18px',background:COLORS.ink,color:COLORS.paper,fontSize:28,fontWeight:900}}>自行清算</div>
        </div>
        <div style={{fontSize:24,fontWeight:800,lineHeight:1.55,padding:'12px 16px',background:COLORS.green+'10',marginBottom:8}}>自解散事由出现之日起<span style={{background:COLORS.green+'28',padding:'2px 8px',fontWeight:900}}>15日内</span>成立清算组</div>
        <div style={{fontSize:24,fontWeight:800,lineHeight:1.55,padding:'12px 16px',background:COLORS.green+'10'}}><span style={{fontWeight:900}}>董事为清算义务人</span>（章程另有规定或股东会决议另选他人的除外）；未及时履行清算义务给公司或债权人造成损失的，承担赔偿责任</div>
      </div>
      <div data-final-knowledge="company-liquidation-scene-01-court" style={{position:'absolute',right:24,top:76,width:850,padding:26,border:'5px solid '+COLORS.gold,background:COLORS.paper,opacity:enter(46,72),translate:slide(46,72,'26px 0px')}}>
        <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:14}}>
          <Landmark size={44} color={COLORS.gold}/>
          <div style={{padding:'8px 18px',background:COLORS.ink,color:COLORS.paper,fontSize:28,fontWeight:900}}>指定清算</div>
        </div>
        <div style={{fontSize:24,fontWeight:800,lineHeight:1.55,padding:'12px 16px',background:COLORS.gold+'16',marginBottom:8}}>逾期（超过15日）不成立清算组，或成立清算组后不清算的，可申请<span style={{background:COLORS.gold+'40',padding:'2px 8px',fontWeight:900}}>法院指定</span>人员清算</div>
        <div style={{fontSize:24,fontWeight:800,lineHeight:1.55,padding:'12px 16px',background:COLORS.gold+'16'}}>申请主体：利害关系人（债权人、股东、董事等）、作出行政解散决定的部门或公司登记机关；组成：股东、董监高、律所、会计所等中介机构及执业人员</div>
      </div>
      <div style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.gold,background:COLORS.paper,padding:'14px 24px',opacity:enter(74,102)}}>
        <FileCheck2 size={38} color={COLORS.gold}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}>清算义务人是<span style={{fontWeight:900}}>董事</span>，不是监事；清算期间诉讼由<span style={{fontWeight:900}}>清算组负责人</span>应诉</div>
      </div>
    </div>
  </Shell>;
};

export const CompanyLiquidation02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="08.2" title="简易注销 与 强制注销">
    <div data-layout="deregistration-gates-2" data-visual-anchor="timeline-gate" data-visual-grammar="simple-deregistration,forced-deregistration" data-text-treatments="label-block,stamp,external-negation" data-focal-rule="company-liquidation-scene-02-rule" data-focal-channels="connector,motion,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="company-liquidation-knowledge-2" style={{position:'absolute',left:0,right:0,top:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#6E6757',opacity:enter(12,36)}}>两条注销路径</div>
      <div data-final-knowledge="company-liquidation-scene-02-simple" style={{position:'absolute',left:24,top:76,width:850,padding:24,border:'5px solid '+COLORS.green,background:COLORS.paper,opacity:enter(28,54)}}>
        <div style={{padding:'8px 18px',background:COLORS.green,color:COLORS.paper,fontSize:27,fontWeight:900,width:'fit-content',marginBottom:12}}>简易注销</div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55}}>前提：存续期间未产生债务/已清偿全部债务＋<span style={{fontWeight:900}}>全体股东承诺</span></div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55}}>程序：公告≥<span style={{background:COLORS.green+'26',padding:'2px 8px',fontWeight:900}}>20日</span>，期满无异议的，公司可在<span style={{fontWeight:900}}>20日内</span>申请注销</div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55}}>责任：股东承诺不实的，对注销前的债务承担<span style={{fontWeight:900,color:COLORS.red}}>连带责任</span></div>
      </div>
      <div data-final-knowledge="company-liquidation-scene-02-forced" style={{position:'absolute',right:24,top:76,width:850,padding:24,border:'5px solid '+COLORS.red,background:COLORS.paper,opacity:enter(46,72)}}>
        <div style={{padding:'8px 18px',background:COLORS.red,color:COLORS.paper,fontSize:27,fontWeight:900,width:'fit-content',marginBottom:12}}>强制注销</div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55}}>前提：公司被<span style={{fontWeight:900}}>行政解散</span>＋满<span style={{background:COLORS.red+'20',padding:'2px 8px',fontWeight:900}}>3年</span>未申请注销登记</div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55}}>程序：登记机关公告≥<span style={{fontWeight:900}}>60日</span>，期满无异议的，可以注销公司登记</div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55}}>责任：注销后原公司股东、清算义务人的责任<span style={{fontWeight:900}}>不受影响</span></div>
      </div>
      <div style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.red,background:COLORS.paper,padding:'14px 24px',opacity:enter(74,102)}}>
        <FileX2 size={38} color={COLORS.red}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}>债务未清的公司<span style={{fontWeight:900,color:COLORS.red}}>不能简易注销</span>——须走清算程序</div>
      </div>
    </div>
  </Shell>;
};

export const CompanyLiquidation03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const flowProgress=interpolate(frame,[120,240],[0,1],CLAMP);
  const Step=({icon,title,caption,delay,color}:{readonly icon:ReactNode;readonly title:string;readonly caption:string;readonly delay:number;readonly color:string})=>(
    <div style={{display:'grid',gridTemplateColumns:'64px 1fr',gap:16,alignItems:'center',padding:'12px 20px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(delay,delay+26)}}>
      <div style={{width:64,height:64,border:'4px solid '+COLORS.ink,background:color,color:COLORS.paper,display:'grid',placeItems:'center'}}>{icon}</div>
      <div><div style={{fontSize:25,fontWeight:900,marginBottom:4}}>{title}</div><div style={{fontSize:21,fontWeight:700,color:'#5A564C',lineHeight:1.4}}>{caption}</div></div>
    </div>
  );
  return <Shell code="08.2" title="清算财产的分配顺序">
    <div data-layout="distribution-order-3" data-visual-anchor="flow-path" data-visual-grammar="distribution-cascade,contribution-acceleration" data-text-treatments="soft-highlight,stamp,thin-underline" data-focal-rule="company-liquidation-scene-03-rule" data-focal-channels="connector,motion,enclosure" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="company-liquidation-knowledge-3" style={{position:'absolute',left:0,right:0,top:0,fontSize:26,fontWeight:900,letterSpacing:4,color:'#6E6757',opacity:enter(12,36)}}>清偿顺序：费用 → 职工 → 税款 → 普通 → 股东</div>
      <div style={{position:'absolute',left:0,top:70,width:1150,display:'grid',gap:12}}>
        <div data-final-knowledge="company-liquidation-scene-03-step-0">
          <Step icon={<Coins size={32} color={COLORS.paper}/>} title="① 清算费用" caption="费用优先" delay={26} color={COLORS.ink}/>
        </div>
        <div data-final-knowledge="company-liquidation-scene-03-step-1">
          <Step icon={<HeartPulse size={32} color={COLORS.paper}/>} title="② 职工债权" caption="职工工资、社保费用、法定补偿金" delay={42} color={COLORS.green}/>
        </div>
        <div data-final-knowledge="company-liquidation-scene-03-step-2">
          <Step icon={<ReceiptText size={32} color={COLORS.paper}/>} title="③ 税款" caption="税款顺位" delay={58} color={COLORS.gold}/>
        </div>
        <div data-final-knowledge="company-liquidation-scene-03-step-3">
          <Step icon={<Banknote size={32} color={COLORS.paper}/>} title="④ 普通债权 → ⑤ 向股东分配" caption="股东按出资比例或持股比例，最后顺位" delay={74} color={COLORS.red}/>
        </div>
      </div>
      <div style={{position:'absolute',left:1180,top:96,width:60,height:interpolate(flowProgress,[0,1],[0,420],CLAMP),background:COLORS.green,opacity:enter(120,142)}}/>
      <div data-stateful-source="company-liquidation-distribution" style={{position:'absolute',left:1166,top:interpolate(flowProgress,[0,1],[96,510],CLAMP),width:88,height:26,clipPath:'polygon(0 0, 78% 0, 100% 50%, 78% 100%, 0 100%)',background:COLORS.gold,opacity:flowProgress>0.9?0:1,zIndex:4}}/>
      <div data-final-knowledge="company-liquidation-scene-03-acceleration" style={{position:'absolute',right:0,top:96,width:470,padding:'20px 24px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(96,122)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10}}>
          <Timer size={36} color={COLORS.green}/>
          <div style={{fontSize:25,fontWeight:900}}>出资加速到期</div>
        </div>
        <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>股东尚未缴纳的出资，应<span style={{background:COLORS.green+'26',padding:'2px 6px',fontWeight:900}}>加速到期</span>，作为清算财产</div>
        <div data-stateful-terminal="company-liquidation-distribution" style={{display:'inline-block',marginTop:12,padding:'8px 16px',border:'3px solid '+COLORS.ink,background:COLORS.green,color:COLORS.paper,fontSize:20,fontWeight:900,opacity:enter(150,172)}}>分配顺序走完</div>
      </div>
    </div>
  </Shell>;
};

export const CompanyLiquidation=()=> <AbsoluteFill>
  <TimelineSequence name="01-company-liquidation-scene-01" start={SCENES['company-liquidation-scene-01'].start} duration={SCENES['company-liquidation-scene-01'].duration}><CompanyLiquidation01Scene/></TimelineSequence>
  <TimelineSequence name="02-company-liquidation-scene-02" start={SCENES['company-liquidation-scene-02'].start} duration={SCENES['company-liquidation-scene-02'].duration}><CompanyLiquidation02Scene/></TimelineSequence>
  <TimelineSequence name="03-company-liquidation-scene-03" start={SCENES['company-liquidation-scene-03'].start} duration={SCENES['company-liquidation-scene-03'].duration}><CompanyLiquidation03Scene/></TimelineSequence>
</AbsoluteFill>;
