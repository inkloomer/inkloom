import type {ReactNode} from 'react';
import {Fish, Banknote, Users, Timer, Scale, ShieldAlert, Briefcase, Coins, Undo2, BadgePercent, Landmark, Handshake} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#EFF1ED', ink:'#232A26', red:'#B23A30', green:'#2E6D4F', gold:'#C08A2D', paper:'#F8FAF6'} as const;
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

export const RecoveryRight01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="11.2" title="追回权：两张网">
    <div data-layout="clawback-net-1" data-visual-anchor="flow-path" data-visual-grammar="clawback-targets,debtor-property-return" data-text-treatments="label-block,thin-underline,soft-highlight" data-focal-rule="recovery-right-scene-01-rule" data-focal-channels="connector,motion,enclosure" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:16}}>
      <div data-final-knowledge="recovery-right-knowledge-1" style={{flexShrink:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <Fish size={40} color={COLORS.red}/>
        <div style={{fontSize:27,fontWeight:900}}>管理人可<span style={{color:COLORS.red}}>追回</span>——非法转移、处分或侵占的债务人财产</div>
      </div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="recovery-right-scene-01-target-0" style={{position:'relative',padding:'18px 24px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54),translate:slide(28,54,'-24px 0px')}}>
          <Watermark icon={<ShieldAlert size={150} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10,flexShrink:0}}>
            <ShieldAlert size={34} color={COLORS.red}/>
            <div style={{padding:'8px 18px',background:COLORS.red,color:COLORS.paper,fontSize:25,fontWeight:900 }}>对董监高追回</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<ShieldAlert size={24} color={COLORS.red}/>} delay={40} color={COLORS.red} pad="10px 13px">董监高<span style={{fontWeight:900,color:COLORS.red}}>侵占</span>的债务人财产</Row>
            <Row icon={<Briefcase size={24} color={COLORS.red}/>} delay={54} color={COLORS.red} pad="10px 13px">存在<span style={{fontWeight:900}}>破产原因</span>时，利用职权获取的<span style={{fontWeight:900,color:COLORS.red}}>非正常收入</span></Row>
          </div>
        </div>
        <div data-final-knowledge="recovery-right-scene-01-target-1" style={{position:'relative',padding:'18px 24px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'4D',display:'flex',flexDirection:'column',opacity:enter(46,72),translate:slide(46,72,'24px 0px')}}>
          <Watermark icon={<Coins size={150} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10,flexShrink:0}}>
            <Coins size={34} color={COLORS.gold}/>
            <div style={{padding:'8px 18px',background:COLORS.gold,color:COLORS.paper,fontSize:25,fontWeight:900 }}>对出资人追回</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Coins size={24} color={COLORS.gold}/>} delay={58} color={COLORS.gold} pad="10px 13px">出资人<span style={{fontWeight:900,color:COLORS.gold}}>未缴出资 / 抽逃出资</span></Row>
            <Row icon={<Timer size={24} color={COLORS.gold}/>} delay={72} color={COLORS.gold} pad="10px 13px"><span style={{fontWeight:900,color:COLORS.gold}}>不受出资期限的限制</span>——未届期也要缴</Row>
          </div>
        </div>
      </div>
      <div data-final-knowledge="recovery-right-scene-01-effect" style={{flexShrink:0,display:'flex',alignItems:'center',gap:18,border:'5px solid '+COLORS.green,background:COLORS.green+'4D',padding:'15px 26px',opacity:enter(90,116)}}>
        <Undo2 size={36} color={COLORS.green}/>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.5}}>追回效果：财产<span style={{fontWeight:900,color:COLORS.green}}>归入债务人财产</span> → 用来<span style={{fontWeight:900,color:COLORS.green}}>清偿给全体债权人</span></div>
        <Landmark size={34} color={COLORS.green}/>
      </div>
    </div>
  </Shell>;
};

export const RecoveryRight02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="11.2" title="非正常收入与退还">
    <div data-layout="abnormal-income-2" data-visual-anchor="role-pair" data-visual-grammar="abnormal-income-tiers,wage-vs-ordinary" data-text-treatments="soft-highlight,stamp,external-negation" data-focal-rule="recovery-right-scene-02-rule" data-focal-channels="contrast,connector,annotation" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:16}}>
      <div data-final-knowledge="recovery-right-knowledge-2" style={{flexShrink:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <BadgePercent size={40} color={COLORS.red}/>
        <div style={{fontSize:27,fontWeight:900}}>破产原因下的<span style={{color:COLORS.red}}>非正常收入</span>——有违公平，应当追回</div>
      </div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="recovery-right-scene-02-income" style={{position:'relative',padding:'16px 24px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54),translate:slide(28,54,'-24px 0px')}}>
          <Watermark icon={<BadgePercent size={140} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8,flexShrink:0}}>
            <BadgePercent size={32} color={COLORS.red}/>
            <div style={{fontSize:24,fontWeight:900}}>非正常收入三类</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Users size={22} color={COLORS.red}/>} delay={40} color={COLORS.red} pad="9px 13px"><span style={{fontWeight:900,color:COLORS.red}}>普遍拖欠职工工资</span>情况下获取的工资性收入</Row>
            <Row icon={<BadgePercent size={22} color={COLORS.red}/>} delay={52} color={COLORS.red} pad="9px 13px"><span style={{fontWeight:900,color:COLORS.red}}>绩效奖金</span></Row>
            <Row icon={<Coins size={22} color={COLORS.red}/>} delay={64} color={COLORS.red} pad="9px 13px">其他<span style={{fontWeight:900,color:COLORS.red}}>非正常收入</span></Row>
            <Row icon={<Scale size={22} color={COLORS.green}/>} delay={76} color={COLORS.green} pad="9px 13px">原理：企业已有破产原因，董监高还借职务便利<span style={{fontWeight:900}}>额外获利</span>，有违公平——但不违法，追回后可向债权人<span style={{fontWeight:900,color:COLORS.green}}>申报债权</span></Row>
          </div>
        </div>
        <div data-final-knowledge="recovery-right-scene-02-return" style={{position:'relative',padding:'16px 24px',border:'5px solid '+COLORS.green,background:COLORS.green+'4D',display:'flex',flexDirection:'column',opacity:enter(46,72),translate:slide(46,72,'24px 0px')}}>
          <Watermark icon={<Banknote size={140} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8,flexShrink:0}}>
            <Banknote size={32} color={COLORS.green}/>
            <div style={{fontSize:24,fontWeight:900}}>退还后的定性</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Users size={22} color={COLORS.green}/>} delay={58} color={COLORS.green} pad="9px 13px">①工资性收入：未超出企业职工<span style={{fontWeight:900,color:COLORS.green}}>平均工资</span>的部分 → <span style={{fontWeight:900,color:COLORS.green}}>职工债权</span></Row>
            <Row icon={<Coins size={22} color={COLORS.green}/>} delay={70} color={COLORS.green} pad="9px 13px">①超出平均工资的部分 → <span style={{fontWeight:900,color:COLORS.gold }}>普通破产债权</span></Row>
            <Row icon={<Banknote size={22} color={COLORS.green}/>} delay={82} color={COLORS.green} pad="9px 13px">②绩效奖金 ③其他非正常收入 → <span style={{fontWeight:900,color:COLORS.gold}}>普通破产债权</span></Row>
          </div>
        </div>
      </div>
    </div>
  </Shell>;
};

export const RecoveryRight03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="11.2" title="出资追回与责任主体">
    <div data-layout="contribution-clawback-3" data-visual-anchor="boundary" data-visual-grammar="unpaid-contribution,withdrawn-contribution" data-text-treatments="external-negation,label-block,stamp" data-focal-rule="recovery-right-scene-03-rule" data-focal-channels="enclosure,contrast,annotation" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:16}}>
      <div data-final-knowledge="recovery-right-knowledge-3" style={{flexShrink:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#6E6757',opacity:enter(12,36)}}>追缴出资——<span style={{color:COLORS.gold }}>不受出资期限限制</span></div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="recovery-right-scene-03-contribution" style={{position:'relative',padding:'18px 24px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54),translate:slide(28,54,'-24px 0px')}}>
          <Watermark icon={<Coins size={150} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10,flexShrink:0}}>
            <Coins size={34} color={COLORS.gold}/>
            <div style={{padding:'8px 18px',background:COLORS.gold,color:COLORS.paper,fontSize:25,fontWeight:900 }}>对出资人追回</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Coins size={24} color={COLORS.gold}/>} delay={40} color={COLORS.gold} pad="10px 13px"><span style={{fontWeight:900 }}>未缴出资</span>（含未届期）——加速缴纳</Row>
            <Row icon={<Undo2 size={24} color={COLORS.gold}/>} delay={54} color={COLORS.gold} pad="10px 13px"><span style={{fontWeight:900,color:COLORS.red}}>抽逃出资</span>——追回</Row>
            <Row icon={<Timer size={24} color={COLORS.gold}/>} delay={68} color={COLORS.gold} pad="10px 13px">判断：管理人追回出资<span style={{fontWeight:900,color:COLORS.gold }}>不受出资期限限制</span></Row>
          </div>
        </div>
        <div data-final-knowledge="recovery-right-scene-03-parties" style={{position:'relative',padding:'18px 24px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(46,72),translate:slide(46,72,'24px 0px')}}>
          <Watermark icon={<Users size={150} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10,flexShrink:0}}>
            <Users size={34} color={COLORS.red}/>
            <div style={{padding:'8px 18px',background:COLORS.red,color:COLORS.paper,fontSize:25,fontWeight:900 }}>可追的其他责任主体</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Users size={24} color={COLORS.red}/>} delay={58} color={COLORS.red} pad="10px 13px">其他<span style={{fontWeight:900,color:COLORS.red }}>发起人</span>（出资连带责任）</Row>
            <Row icon={<Briefcase size={24} color={COLORS.red}/>} delay={72} color={COLORS.red} pad="10px 13px"><span style={{fontWeight:900,color:COLORS.red }}>负有责任的董监高</span></Row>
            <Row icon={<Handshake size={24} color={COLORS.red}/>} delay={86} color={COLORS.red} pad="10px 13px"><span style={{fontWeight:900,color:COLORS.red }}>协助抽逃</span>出资的人员等</Row>
          </div>
        </div>
      </div>
    </div>
  </Shell>;
};

export const RecoveryRight=()=> <AbsoluteFill>
  <TimelineSequence name="01-recovery-right-scene-01" start={SCENES['recovery-right-scene-01'].start} duration={SCENES['recovery-right-scene-01'].duration}><RecoveryRight01Scene/></TimelineSequence>
  <TimelineSequence name="02-recovery-right-scene-02" start={SCENES['recovery-right-scene-02'].start} duration={SCENES['recovery-right-scene-02'].duration}><RecoveryRight02Scene/></TimelineSequence>
  <TimelineSequence name="03-recovery-right-scene-03" start={SCENES['recovery-right-scene-03'].start} duration={SCENES['recovery-right-scene-03'].duration}><RecoveryRight03Scene/></TimelineSequence>
</AbsoluteFill>;
