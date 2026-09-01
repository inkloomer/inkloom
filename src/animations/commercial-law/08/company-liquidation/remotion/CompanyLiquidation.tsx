import type {ReactNode} from 'react';
import {Users, Landmark, FileCheck2, FileX2, Coins, HeartPulse, ReceiptText, Banknote, UserRound, Timer, Scale, Ban, CalendarClock} from 'lucide-react';
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

export const CompanyLiquidation01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="08.2" title="自行清算 与 指定清算">
    <div data-layout="liquidation-types-1" data-visual-anchor="comparison-axis" data-visual-grammar="self-liquidation,court-appointed" data-text-treatments="label-block,thin-underline,soft-highlight" data-focal-rule="company-liquidation-scene-01-rule" data-focal-channels="contrast,spatial,icon" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:16}}>
      <div data-final-knowledge="company-liquidation-knowledge-1" style={{flexShrink:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#6E6757',opacity:enter(12,36)}}>记忆口诀：<span style={{color:COLORS.green}}>自行清算看董事</span></div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="company-liquidation-scene-01-self" style={{position:'relative',padding:'18px 24px',border:'5px solid '+COLORS.green,background:COLORS.green+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54),translate:slide(28,54,'-26px 0px')}}>
          <Watermark icon={<Users size={150} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
          <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:10,flexShrink:0}}>
            <Users size={40} color={COLORS.green}/>
            <div style={{padding:'7px 18px',background:COLORS.ink,color:COLORS.paper,fontSize:26,fontWeight:900}}>自行清算</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<CalendarClock size={24} color={COLORS.green}/>} delay={40} color={COLORS.green} pad="10px 13px">自解散事由出现之日起<span style={{background:COLORS.green+'28',padding:'1px 8px',fontWeight:900}}>15日内</span>成立清算组</Row>
            <Row icon={<UserRound size={24} color={COLORS.green}/>} delay={54} color={COLORS.green} pad="10px 13px"><span style={{fontWeight:900,color:COLORS.green}}>董事为清算义务人</span>（章程另有规定或股东会决议另选除外）</Row>
            <Row icon={<Scale size={24} color={COLORS.green}/>} delay={68} color={COLORS.green} pad="10px 13px">未及时履行清算义务，给公司或<span style={{fontWeight:900}}>债权人</span>造成损失 → <span style={{fontWeight:900,color:COLORS.green}}>赔偿责任</span></Row>
          </div>
        </div>
        <div data-final-knowledge="company-liquidation-scene-01-court" style={{position:'relative',padding:'18px 24px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'4D',display:'flex',flexDirection:'column',opacity:enter(46,72),translate:slide(46,72,'26px 0px')}}>
          <Watermark icon={<Landmark size={150} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
          <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:10,flexShrink:0}}>
            <Landmark size={40} color={COLORS.gold}/>
            <div style={{padding:'7px 18px',background:COLORS.ink,color:COLORS.paper,fontSize:26,fontWeight:900}}>指定清算</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<CalendarClock size={24} color={COLORS.gold}/>} delay={58} color={COLORS.gold} pad="10px 13px">逾期（<span style={{fontWeight:900}}>超15日</span>）不成立清算组 / 成立后不清算 → 申请<span style={{background:COLORS.gold+'40',padding:'1px 8px',fontWeight:900}}>法院指定</span></Row>
            <Row icon={<Users size={24} color={COLORS.gold}/>} delay={72} color={COLORS.gold} pad="10px 13px">申请主体：利害关系人——<span style={{fontWeight:900}}>债权人、股东、董事</span>等</Row>
            <Row icon={<Landmark size={24} color={COLORS.gold}/>} delay={80} color={COLORS.gold} pad="10px 13px">或<span style={{fontWeight:900}}>行政解散决定部门</span>、公司<span style={{fontWeight:900}}>登记机关</span></Row>
            <Row icon={<FileCheck2 size={24} color={COLORS.gold}/>} delay={86} color={COLORS.gold} pad="10px 13px">组成：股东/董监高/<span style={{fontWeight:900}}>律所、会计所</span>等中介机构及执业人员</Row>
          </div>
        </div>
      </div>
      <div style={{flexShrink:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.gold,background:COLORS.gold+'4D',padding:'13px 24px',opacity:enter(98,124)}}>
        <FileCheck2 size={36} color={COLORS.gold}/>
        <div style={{fontSize:21,fontWeight:800,lineHeight:1.45}}>清算义务人是<span style={{fontWeight:900,color:COLORS.green}}>董事</span>，<span style={{fontWeight:900,color:COLORS.red}}>不是监事</span>；清算期间诉讼由<span style={{fontWeight:900}}>清算组负责人</span>应诉</div>
      </div>
    </div>
  </Shell>;
};

export const CompanyLiquidation02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="08.2" title="简易注销 与 强制注销">
    <div data-layout="deregistration-gates-2" data-visual-anchor="timeline-gate" data-visual-grammar="simple-deregistration,forced-deregistration" data-text-treatments="label-block,stamp,external-negation" data-focal-rule="company-liquidation-scene-02-rule" data-focal-channels="connector,motion,annotation" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:16}}>
      <div data-final-knowledge="company-liquidation-knowledge-2" style={{flexShrink:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#6E6757',opacity:enter(12,36)}}>两条注销路径</div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="company-liquidation-scene-02-simple" style={{position:'relative',padding:'18px 24px',border:'5px solid '+COLORS.green,background:COLORS.green+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54),translate:slide(28,54,'0px 22px')}}>
          <Watermark icon={<FileCheck2 size={150} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
          <div style={{padding:'7px 18px',background:COLORS.green,color:COLORS.paper,fontSize:25,fontWeight:900,width:'fit-content',marginBottom:10,flexShrink:0}}>简易注销</div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Scale size={24} color={COLORS.green}/>} delay={40} color={COLORS.green} pad="10px 13px">前提：<span style={{fontWeight:900}}>未产生债务/已清偿全部债务</span>＋<span style={{fontWeight:900,color:COLORS.green}}>全体股东承诺</span></Row>
            <Row icon={<CalendarClock size={24} color={COLORS.green}/>} delay={54} color={COLORS.green} pad="10px 13px">程序：公告<span style={{background:COLORS.green+'28',padding:'1px 8px',fontWeight:900}}>≥20日</span>，期满无异议 → <span style={{fontWeight:900}}>20日内</span>申请注销登记</Row>
            <Row icon={<Ban size={24} color={COLORS.red}/>} delay={68} color={COLORS.red} pad="10px 13px">承诺不实 → 对注销前债务承担<span style={{fontWeight:900,color:COLORS.red}}>连带责任</span></Row>
          </div>
        </div>
        <div data-final-knowledge="company-liquidation-scene-02-forced" style={{position:'relative',padding:'18px 24px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(46,72),translate:slide(46,72,'0px 22px')}}>
          <Watermark icon={<FileX2 size={150} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
          <div style={{padding:'7px 18px',background:COLORS.red,color:COLORS.paper,fontSize:25,fontWeight:900,width:'fit-content',marginBottom:10,flexShrink:0}}>强制注销</div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<CalendarClock size={24} color={COLORS.red}/>} delay={58} color={COLORS.red} pad="10px 13px">前提：被<span style={{fontWeight:900}}>行政解散</span>＋满<span style={{background:COLORS.red+'20',padding:'1px 8px',fontWeight:900}}>3年</span>未申请注销登记</Row>
            <Row icon={<Landmark size={24} color={COLORS.red}/>} delay={72} color={COLORS.red} pad="10px 13px">程序：登记机关公告<span style={{fontWeight:900}}>≥60日</span>，期满无异议 → 注销公司登记</Row>
            <Row icon={<Users size={24} color={COLORS.red}/>} delay={86} color={COLORS.red} pad="10px 13px">责任：注销后原股东、清算义务人的责任<span style={{fontWeight:900,color:COLORS.red}}>不受影响</span>（责任存续）</Row>
          </div>
        </div>
      </div>
      <div style={{flexShrink:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.red,background:COLORS.red+'4D',padding:'13px 24px',opacity:enter(98,124)}}>
        <FileX2 size={36} color={COLORS.red}/>
        <div style={{fontSize:21,fontWeight:800,lineHeight:1.45}}>债务未清的公司<span style={{fontWeight:900,color:COLORS.red}}>不能简易注销</span>——须走清算程序</div>
      </div>
    </div>
  </Shell>;
};

export const CompanyLiquidation03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const flowProgress=interpolate(frame,[120,240],[0,1],CLAMP);
  return <Shell code="08.2" title="清算财产的分配顺序">
    <div data-layout="distribution-order-3" data-visual-anchor="flow-path" data-visual-grammar="distribution-cascade,contribution-acceleration" data-text-treatments="soft-highlight,stamp,thin-underline" data-focal-rule="company-liquidation-scene-03-rule" data-focal-channels="connector,motion,enclosure" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:14}}>
      <div data-final-knowledge="company-liquidation-knowledge-3" style={{flexShrink:0,fontSize:25,fontWeight:900,letterSpacing:4,color:'#6E6757',opacity:enter(12,36)}}>清偿顺序：费用 → 职工 → 税款 → 普通 → 股东</div>
      <div style={{flex:'1 1 0',minHeight:0,display:'flex',gap:20}}>
        <div style={{flex:'1.35 1 0',minWidth:0,display:'flex',flexDirection:'column',gap:12,paddingRight:320}}>
          <div data-final-knowledge="company-liquidation-scene-03-step-0" style={{position:'relative',flex:'1 1 0',minHeight:0,display:'flex',alignItems:'center',gap:16,padding:'10px 20px',border:'4px solid '+COLORS.ink,background:COLORS.ink+'4D',opacity:enter(26,52)}}>
            <Watermark icon={<Coins size={110} color={COLORS.ink} strokeWidth={1.2}/>} color={COLORS.ink}/>
            <div style={{width:56,height:56,flexShrink:0,border:'4px solid '+COLORS.ink,background:COLORS.ink,color:COLORS.paper,display:'grid',placeItems:'center'}}><Coins size={28} color={COLORS.paper}/></div>
            <div style={{display:'flex',flexDirection:'column',gap:6,flex:1,justifyContent:'center'}}>
              <div style={{fontSize:23,fontWeight:900}}>① 清算费用</div>
              <Row icon={<Coins size={22} color={COLORS.ink}/>} delay={40} color={COLORS.ink} pad="6px 12px"><span style={{fontWeight:900}}>费用优先</span>——最先清偿</Row>
            </div>
          </div>
          <div data-final-knowledge="company-liquidation-scene-03-step-1" style={{position:'relative',flex:'1 1 0',minHeight:0,display:'flex',alignItems:'center',gap:16,padding:'10px 20px',border:'4px solid '+COLORS.ink,background:COLORS.green+'4D',opacity:enter(42,68)}}>
            <Watermark icon={<HeartPulse size={110} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
            <div style={{width:56,height:56,flexShrink:0,border:'4px solid '+COLORS.ink,background:COLORS.green,color:COLORS.paper,display:'grid',placeItems:'center'}}><HeartPulse size={28} color={COLORS.paper}/></div>
            <div style={{display:'flex',flexDirection:'column',gap:6,flex:1,justifyContent:'center'}}>
              <div style={{fontSize:23,fontWeight:900}}>② 职工债权</div>
              <Row icon={<HeartPulse size={22} color={COLORS.green}/>} delay={56} color={COLORS.green} pad="6px 12px">职工<span style={{fontWeight:900}}>工资、社保费用、法定补偿金</span></Row>
            </div>
          </div>
          <div data-final-knowledge="company-liquidation-scene-03-step-2" style={{position:'relative',flex:'1 1 0',minHeight:0,display:'flex',alignItems:'center',gap:16,padding:'10px 20px',border:'4px solid '+COLORS.ink,background:COLORS.gold+'4D',opacity:enter(58,84)}}>
            <Watermark icon={<ReceiptText size={110} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
            <div style={{width:56,height:56,flexShrink:0,border:'4px solid '+COLORS.ink,background:COLORS.gold,color:COLORS.paper,display:'grid',placeItems:'center'}}><ReceiptText size={28} color={COLORS.paper}/></div>
            <div style={{display:'flex',flexDirection:'column',gap:6,flex:1,justifyContent:'center'}}>
              <div style={{fontSize:23,fontWeight:900}}>③ 税款</div>
              <Row icon={<ReceiptText size={22} color={COLORS.gold}/>} delay={72} color={COLORS.gold} pad="6px 12px"><span style={{fontWeight:900}}>税款顺位</span>——先于普通债权</Row>
            </div>
          </div>
          <div data-final-knowledge="company-liquidation-scene-03-step-3" style={{position:'relative',flex:'1 1 0',minHeight:0,display:'flex',alignItems:'center',gap:16,padding:'10px 20px',border:'4px solid '+COLORS.ink,background:COLORS.red+'4D',opacity:enter(74,100)}}>
            <Watermark icon={<Banknote size={110} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
            <div style={{width:56,height:56,flexShrink:0,border:'4px solid '+COLORS.ink,background:COLORS.red,color:COLORS.paper,display:'grid',placeItems:'center'}}><Banknote size={28} color={COLORS.paper}/></div>
            <div style={{display:'flex',flexDirection:'column',gap:6,flex:1,justifyContent:'center'}}>
              <div style={{fontSize:23,fontWeight:900}}>④ 普通债权 → ⑤ 向股东分配</div>
              <Row icon={<UserRound size={22} color={COLORS.red}/>} delay={88} color={COLORS.red} pad="6px 12px">股东按<span style={{fontWeight:900}}>出资比例或持股比例</span>，<span style={{fontWeight:900,color:COLORS.red}}>最后顺位</span></Row>
            </div>
          </div>
        </div>
        <div data-final-knowledge="company-liquidation-scene-03-acceleration" style={{flex:'1 1 0',minWidth:0,position:'relative',padding:'18px 24px',border:'4px solid '+COLORS.ink,background:COLORS.green+'4D',display:'flex',flexDirection:'column',opacity:enter(96,122)}}>
          <Watermark icon={<Timer size={140} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8,flexShrink:0}}>
            <Timer size={34} color={COLORS.green}/>
            <div style={{fontSize:25,fontWeight:900}}>出资加速到期</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Timer size={24} color={COLORS.green}/>} delay={108} color={COLORS.green} pad="10px 13px">股东<span style={{fontWeight:900}}>尚未缴纳的出资</span>，清算中应<span style={{background:COLORS.green+'28',padding:'1px 8px',fontWeight:900}}>加速到期</span></Row>
            <Row icon={<Coins size={24} color={COLORS.green}/>} delay={122} color={COLORS.green} pad="10px 13px">作为<span style={{fontWeight:900,color:COLORS.green}}>清算财产</span>纳入分配</Row>
          </div>
        </div>
      </div>
      <div style={{position:'absolute',left:920,top:206,width:8,height:interpolate(flowProgress,[0,1],[0,300],CLAMP),background:COLORS.green,opacity:enter(120,142)}}/>
      <div data-stateful-source="company-liquidation-distribution" style={{position:'absolute',left:884,top:interpolate(flowProgress,[0,1],[196,496],CLAMP),width:80,height:26,clipPath:'polygon(0 0, 78% 0, 100% 50%, 78% 100%, 0 100%)',background:COLORS.gold,opacity:flowProgress>0.9?0:1,zIndex:4}}/>
      <div data-stateful-terminal="company-liquidation-distribution" style={{position:'absolute',left:860,top:540,padding:'8px 16px',border:'3px solid '+COLORS.ink,background:COLORS.green,color:COLORS.paper,fontSize:20,fontWeight:900,opacity:enter(150,172)}}>分配顺序走完</div>
    </div>
  </Shell>;
};

export const CompanyLiquidation=()=> <AbsoluteFill>
  <TimelineSequence name="01-company-liquidation-scene-01" start={SCENES['company-liquidation-scene-01'].start} duration={SCENES['company-liquidation-scene-01'].duration}><CompanyLiquidation01Scene/></TimelineSequence>
  <TimelineSequence name="02-company-liquidation-scene-02" start={SCENES['company-liquidation-scene-02'].start} duration={SCENES['company-liquidation-scene-02'].duration}><CompanyLiquidation02Scene/></TimelineSequence>
  <TimelineSequence name="03-company-liquidation-scene-03" start={SCENES['company-liquidation-scene-03'].start} duration={SCENES['company-liquidation-scene-03'].duration}><CompanyLiquidation03Scene/></TimelineSequence>
</AbsoluteFill>;
