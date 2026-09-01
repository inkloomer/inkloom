import type {ReactNode} from 'react';
import {TrainFront, Landmark, FileText, CalendarClock, Users, PauseCircle, Ban, Banknote, Crown, HandCoins, Scale, Gavel, Truck, Lock} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#EDF0EE', ink:'#1D2420', blue:'#245E8F', orange:'#C2542B', gold:'#B08A2E', paper:'#F8FAF7'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.blue,color:COLORS.paper}}>{code}</div>
    <div style={{position:'absolute',left:190,right:76,top:46,fontSize:46,fontWeight:900,lineHeight:1.12,borderBottom:'5px solid '+COLORS.orange,paddingBottom:12}}>{title}</div>
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

export const BankruptcyReorganization01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const trainProgress=interpolate(frame,[110,260],[0,1],CLAMP);
  return <Shell code="12.1" title="重整程序的流程">
    <div data-layout="reorganization-rail-1" data-visual-anchor="flow-path" data-visual-grammar="six-station-rail,failure-branch" data-text-treatments="label-block,thin-underline,soft-highlight" data-focal-rule="bankruptcy-reorganization-scene-01-rule" data-focal-channels="connector,motion,enclosure" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:14}}>
      <div data-final-knowledge="bankruptcy-reorganization-knowledge-1" style={{flexShrink:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <TrainFront size={40} color={COLORS.blue}/>
        <div style={{fontSize:26,fontWeight:900 }}>启动 → 制定提交 → 表决批准 → 执行（失败则宣告破产）</div>
      </div>
      <div style={{flexShrink:0,position:'relative',height:40}}>
        <div style={{position:'absolute',left:40,width:interpolate(trainProgress,[0,1],[0,1600],CLAMP),top:15,height:8,background:COLORS.blue}}/>
        <div style={{position:'absolute',left:40,top:1,width:10,height:38,background:COLORS.ink}}/>
        <div style={{position:'absolute',left:1680,top:1,width:10,height:38,background:COLORS.ink}}/>
        <div data-stateful-source="bankruptcy-reorganization-train" style={{position:'absolute',left:interpolate(trainProgress,[0,1],[40,1590],CLAMP),top:0,width:56,height:26,clipPath:'polygon(0 0, 78% 0, 100% 50%, 78% 100%, 0 100%)',background:COLORS.orange,opacity:trainProgress>0.94?0:1,zIndex:4}}/>
        <div data-stateful-terminal="bankruptcy-reorganization-train" style={{position:'absolute',left:1596,top:44,padding:'4px 12px',border:'3px solid '+COLORS.ink,background:COLORS.blue,color:COLORS.paper,fontSize:17,fontWeight:900,opacity:enter(150,172)}}>程序终点</div>
      </div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(4,minmax(0,1fr))',gap:16}}>
        <div data-final-knowledge="bankruptcy-reorganization-scene-01-station-0" style={{position:'relative',padding:'14px 20px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.blue,background:COLORS.blue+'4D',display:'flex',flexDirection:'column',opacity:enter(30,56)}}>
          <Watermark icon={<Gavel size={110} color={COLORS.blue} strokeWidth={1.2}/>} color={COLORS.blue}/>
          <div style={{fontSize:22,fontWeight:900,marginBottom:6,flexShrink:0 }}>① 启动</div>
          <div style={{display:'flex',flexDirection:'column',gap:8,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Users size={22} color={COLORS.blue}/>} delay={44} color={COLORS.blue} pad="7px 11px">债权人/债务人<span style={{fontWeight:900 }}>直接申请</span>重整</Row>
            <Row icon={<Scale size={22} color={COLORS.blue}/>} delay={56} color={COLORS.blue} pad="7px 11px">清算转重整：债务人或持股<span style={{fontWeight:900,color:COLORS.blue }}>10%以上</span>大股东申请</Row>
          </div>
        </div>
        <div data-final-knowledge="bankruptcy-reorganization-scene-01-station-1" style={{position:'relative',padding:'14px 20px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.blue,background:COLORS.blue+'4D',display:'flex',flexDirection:'column',opacity:enter(44,70)}}>
          <Watermark icon={<FileText size={110} color={COLORS.blue} strokeWidth={1.2}/>} color={COLORS.blue}/>
          <div style={{fontSize:22,fontWeight:900,marginBottom:6,flexShrink:0 }}>② 制定与提交</div>
          <div style={{display:'flex',flexDirection:'column',gap:8,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<FileText size={22} color={COLORS.blue}/>} delay={58} color={COLORS.blue} pad="7px 11px"><span style={{fontWeight:900 }}>谁管理，谁制定</span>——债务人或管理人</Row>
            <Row icon={<CalendarClock size={22} color={COLORS.blue}/>} delay={70} color={COLORS.blue} pad="7px 11px"><span style={{background:COLORS.blue+'26',padding:'1px 8px',fontWeight:900 }}>6个月内</span>提交，可延期<span style={{fontWeight:900,color:COLORS.blue }}>3个月</span></Row>
          </div>
        </div>
        <div data-final-knowledge="bankruptcy-reorganization-scene-01-station-2" style={{position:'relative',padding:'14px 20px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.gold,background:COLORS.gold+'4D',display:'flex',flexDirection:'column',opacity:enter(58,84)}}>
          <Watermark icon={<Users size={110} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
          <div style={{fontSize:22,fontWeight:900,marginBottom:6,flexShrink:0 }}>③ 表决与批准</div>
          <div style={{display:'flex',flexDirection:'column',gap:8,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Users size={22} color={COLORS.gold}/>} delay={72} color={COLORS.gold} pad="7px 11px">债权人会议<span style={{fontWeight:900 }}>分组表决</span></Row>
            <Row icon={<Landmark size={22} color={COLORS.gold}/>} delay={84} color={COLORS.gold} pad="7px 11px">法院<span style={{fontWeight:900,color:COLORS.gold }}>批准</span> → <span style={{fontWeight:900 }}>债务人执行</span>，管理人<span style={{fontWeight:900 }}>监督</span></Row>
          </div>
        </div>
        <div data-final-knowledge="bankruptcy-reorganization-scene-01-failure" style={{position:'relative',padding:'14px 20px',border:'4px dashed '+COLORS.orange,background:COLORS.orange+'4D',display:'flex',flexDirection:'column',opacity:enter(72,98)}}>
          <Watermark icon={<Ban size={110} color={COLORS.orange} strokeWidth={1.2}/>} color={COLORS.orange}/>
          <div style={{fontSize:22,fontWeight:900,marginBottom:6,flexShrink:0,color:COLORS.orange }}>④ 失败分支</div>
          <div style={{display:'flex',flexDirection:'column',gap:8,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Ban size={22} color={COLORS.orange}/>} delay={86} color={COLORS.orange} pad="7px 11px"><span style={{fontWeight:900,color:COLORS.orange }}>终止重整并宣告破产</span>的情形出现时</Row>
          </div>
        </div>
      </div>
    </div>
  </Shell>;
};

export const BankruptcyReorganization02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="12.1" title="分组表决：双门槛">
    <div data-layout="voting-groups-2" data-visual-anchor="boundary" data-visual-grammar="five-voting-groups,dual-threshold" data-text-treatments="stamp,soft-highlight,label-block" data-focal-rule="bankruptcy-reorganization-scene-02-rule" data-focal-channels="enclosure,contrast,annotation" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:16}}>
      <div data-final-knowledge="bankruptcy-reorganization-knowledge-2" style={{flexShrink:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#6E6757',opacity:enter(12,36)}}>重整计划——债权人会议<span style={{color:COLORS.blue }}>分组表决</span></div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'1.2fr 1fr',gap:20}}>
        <div data-final-knowledge="bankruptcy-reorganization-scene-02-groups" style={{position:'relative',padding:'16px 24px',border:'5px solid '+COLORS.blue,background:COLORS.blue+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54),translate:slide(28,54,'-24px 0px')}}>
          <Watermark icon={<Users size={150} color={COLORS.blue} strokeWidth={1.2}/>} color={COLORS.blue}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8,flexShrink:0}}>
            <Users size={32} color={COLORS.blue}/>
            <div style={{fontSize:24,fontWeight:900 }}>五个表决组</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:9,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Lock size={22} color={COLORS.blue}/>} delay={40} color={COLORS.blue} pad="8px 12px"><span style={{fontWeight:900 }}>担保债权组</span>（别除权人）</Row>
            <Row icon={<Users size={22} color={COLORS.blue}/>} delay={50} color={COLORS.blue} pad="8px 12px"><span style={{fontWeight:900 }}>职工债权组</span> · <span style={{fontWeight:900 }}>税款组</span></Row>
            <Row icon={<Banknote size={22} color={COLORS.blue}/>} delay={60} color={COLORS.blue} pad="8px 12px"><span style={{fontWeight:900 }}>普通债权组</span></Row>
            <Row icon={<Crown size={22} color={COLORS.blue}/>} delay={70} color={COLORS.blue} pad="8px 12px"><span style={{fontWeight:900 }}>出资人组</span>（股东）</Row>
          </div>
        </div>
        <div data-final-knowledge="bankruptcy-reorganization-scene-02-threshold" style={{position:'relative',padding:'16px 24px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'4D',display:'flex',flexDirection:'column',opacity:enter(46,72),translate:slide(46,72,'24px 0px')}}>
          <Watermark icon={<Scale size={150} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8,flexShrink:0}}>
            <Scale size={32} color={COLORS.gold}/>
            <div style={{fontSize:24,fontWeight:900 }}>组内通过＝双门槛同时满足</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:9,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Users size={22} color={COLORS.gold}/>} delay={56} color={COLORS.gold} pad="8px 12px">人数：出席会议<span style={{fontWeight:900,color:COLORS.gold }}>过半数</span>同意</Row>
            <Row icon={<Banknote size={22} color={COLORS.gold}/>} delay={68} color={COLORS.gold} pad="8px 12px">债权额：所代表债权额占该组总额<span style={{background:COLORS.gold+'40',padding:'1px 8px',fontWeight:900 }}>2/3以上</span></Row>
            <Row icon={<Gavel size={22} color={COLORS.green}/>} delay={80} color={COLORS.green} pad="8px 12px">整体：<span style={{fontWeight:900,color:COLORS.green }}>各组均通过</span> → 重整计划通过</Row>
          </div>
        </div>
      </div>
      <div style={{flexShrink:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.blue,background:COLORS.blue+'4D',padding:'13px 24px',opacity:enter(92,118)}}>
        <Gavel size={34} color={COLORS.blue}/>
        <div style={{fontSize:21,fontWeight:800,lineHeight:1.45 }}>判断：债权额比例的基数＝<span style={{fontWeight:900 }}>该组债权总额</span>（不是全部债权），人数按<span style={{fontWeight:900 }}>出席</span>算</div>
      </div>
    </div>
  </Shell>;
};

export const BankruptcyReorganization03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="12.1" title="重整期间的营业保护">
    <div data-layout="protection-lanes-3" data-visual-anchor="comparison-axis" data-visual-grammar="secured-right-pause,dividend-ban" data-text-treatments="external-negation,label-block,soft-highlight" data-focal-rule="bankruptcy-reorganization-scene-03-rule" data-focal-channels="contrast,spatial,annotation" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:16}}>
      <div data-final-knowledge="bankruptcy-reorganization-knowledge-3" style={{flexShrink:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#6E6757',opacity:enter(12,36)}}>裁定重整之日起至程序终止——<span style={{color:COLORS.blue }}>不含执行期间</span></div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="bankruptcy-reorganization-scene-03-pause" style={{position:'relative',padding:'16px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.blue,background:COLORS.blue+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54),translate:slide(28,54,'0px 22px')}}>
          <Watermark icon={<PauseCircle size={130} color={COLORS.blue} strokeWidth={1.2}/>} color={COLORS.blue}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:24,fontWeight:900,marginBottom:6,flexShrink:0}}><PauseCircle size={30} color={COLORS.blue}/>① 暂停行使</div>
          <div style={{display:'flex',flexDirection:'column',gap:8,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<PauseCircle size={22} color={COLORS.blue}/>} delay={40} color={COLORS.blue} pad="7px 11px"><span style={{fontWeight:900,color:COLORS.blue }}>担保权</span>暂停——担保物有损坏/价值明显减少危害担保权人的<span style={{fontWeight:900 }}>除外</span></Row>
            <Row icon={<Truck size={22} color={COLORS.blue}/>} delay={52} color={COLORS.blue} pad="7px 11px"><span style={{fontWeight:900,color:COLORS.blue }}>取回权</span>暂停——符合<span style={{fontWeight:900 }}>事先约定条件</span>除外（租期1年内不得取回；1个月已届满可取回）</Row>
            <Row icon={<Crown size={22} color={COLORS.blue}/>} delay={64} color={COLORS.blue} pad="7px 11px">债务人自行管理<span style={{fontWeight:900 }}>或</span>管理人负责管理</Row>
          </div>
        </div>
        <div data-final-knowledge="bankruptcy-reorganization-scene-03-ban" style={{position:'relative',padding:'16px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.orange,background:COLORS.orange+'4D',display:'flex',flexDirection:'column',opacity:enter(44,70),translate:slide(44,70,'0px 22px')}}>
          <Watermark icon={<Ban size={130} color={COLORS.orange} strokeWidth={1.2}/>} color={COLORS.orange}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:24,fontWeight:900,marginBottom:6,flexShrink:0}}><Ban size={30} color={COLORS.orange}/>② 绝对禁止</div>
          <div style={{display:'flex',flexDirection:'column',gap:8,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Ban size={22} color={COLORS.orange}/>} delay={56} color={COLORS.orange} pad="7px 11px">出资人<span style={{fontWeight:900,color:COLORS.orange }}>不得请求分红</span></Row>
            <Row icon={<Ban size={22} color={COLORS.orange}/>} delay={68} color={COLORS.orange} pad="7px 11px">董监高<span style={{fontWeight:900,color:COLORS.orange }}>不得向第三人转让股权</span>——除非<span style={{fontWeight:900 }}>法院同意</span></Row>
          </div>
        </div>
        <div data-final-knowledge="bankruptcy-reorganization-scene-03-loan" style={{position:'relative',padding:'16px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.gold,background:COLORS.gold+'4D',display:'flex',flexDirection:'column',opacity:enter(60,86),translate:slide(60,86,'0px 22px')}}>
          <Watermark icon={<Banknote size={130} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:24,fontWeight:900,marginBottom:6,flexShrink:0}}><Banknote size={30} color={COLORS.gold}/>③ 继续营业借款</div>
          <div style={{display:'flex',flexDirection:'column',gap:8,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Banknote size={22} color={COLORS.gold}/>} delay={72} color={COLORS.gold} pad="7px 11px">为继续营业而借款 → 属<span style={{fontWeight:900,color:COLORS.gold }}>共益债务</span></Row>
            <Row icon={<HandCoins size={22} color={COLORS.gold}/>} delay={84} color={COLORS.gold} pad="7px 11px">可以<span style={{fontWeight:900 }}>为该借款设定担保</span></Row>
          </div>
        </div>
      </div>
    </div>
  </Shell>;
};

export const BankruptcyReorganization=()=> <AbsoluteFill>
  <TimelineSequence name="01-bankruptcy-reorganization-scene-01" start={SCENES['bankruptcy-reorganization-scene-01'].start} duration={SCENES['bankruptcy-reorganization-scene-01'].duration}><BankruptcyReorganization01Scene/></TimelineSequence>
  <TimelineSequence name="02-bankruptcy-reorganization-scene-02" start={SCENES['bankruptcy-reorganization-scene-02'].start} duration={SCENES['bankruptcy-reorganization-scene-02'].duration}><BankruptcyReorganization02Scene/></TimelineSequence>
  <TimelineSequence name="03-bankruptcy-reorganization-scene-03" start={SCENES['bankruptcy-reorganization-scene-03'].start} duration={SCENES['bankruptcy-reorganization-scene-03'].duration}><BankruptcyReorganization03Scene/></TimelineSequence>
</AbsoluteFill>;
