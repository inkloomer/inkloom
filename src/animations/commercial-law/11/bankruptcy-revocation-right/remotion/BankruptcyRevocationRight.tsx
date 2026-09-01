import type {ReactNode} from 'react';
import {CalendarDays, ShieldCheck, AlertOctagon, Ban, Gift, Percent, HandCoins, Wallet, Scale, Users, Landmark, Lock, TrendingUp, Coins} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#F3EFE4', ink:'#23242B', red:'#B23A30', green:'#2E6D4F', gold:'#C9A23C', paper:'#FBF7EC'} as const;
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

export const BankruptcyRevocationRight01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const clockProgress=interpolate(frame,[110,230],[0,1],CLAMP);
  return <Shell code="11.4" title="撤销权的时间轴">
    <div data-layout="critical-calendar-1" data-visual-anchor="timeline-gate" data-visual-grammar="critical-period-axis,four-stage-zones" data-text-treatments="label-block,thin-underline,soft-highlight" data-focal-rule="bankruptcy-revocation-right-scene-01-rule" data-focal-channels="connector,motion,locator" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:14}}>
      <div data-final-knowledge="bankruptcy-revocation-right-knowledge-1" style={{flexShrink:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <CalendarDays size={40} color={COLORS.red}/>
        <div style={{fontSize:26,fontWeight:900 }}>受理前<span style={{color:COLORS.red }}>临界期</span>内有害于全体债权人利益的行为 → 管理人请求法院<span style={{color:COLORS.red }}>撤销</span></div>
      </div>
      <div style={{flexShrink:0,position:'relative',height:40}}>
        <div style={{position:'absolute',left:40,width:interpolate(clockProgress,[0,1],[0,1600],CLAMP),top:15,height:8,background:COLORS.ink}}/>
        <div style={{position:'absolute',left:40,top:1,width:10,height:38,background:COLORS.ink}}/>
        <div style={{position:'absolute',left:1680,top:1,width:10,height:38,background:COLORS.ink}}/>
        <div data-stateful-source="bankruptcy-revocation-right-calendar" style={{position:'absolute',left:interpolate(clockProgress,[0,1],[40,1590],CLAMP),top:-8,width:0,height:0,borderLeft:'14px solid transparent',borderRight:'14px solid transparent',borderBottom:'30px solid '+COLORS.red,opacity:clockProgress>0.94?0:1,zIndex:4}}/>
        <div data-stateful-terminal="bankruptcy-revocation-right-calendar" style={{position:'absolute',left:1600,top:44,padding:'4px 12px',border:'3px solid '+COLORS.ink,background:COLORS.red,color:COLORS.paper,fontSize:17,fontWeight:900,opacity:enter(150,172)}}>受理日</div>
      </div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(4,minmax(0,1fr))',gap:16}}>
        <div data-final-knowledge="bankruptcy-revocation-right-scene-01-stage-0" style={{position:'relative',padding:'14px 20px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.green,background:COLORS.green+'4D',display:'flex',flexDirection:'column',opacity:enter(40,66)}}>
          <Watermark icon={<ShieldCheck size={110} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
          <div style={{fontSize:23,fontWeight:900,marginBottom:6,flexShrink:0,color:COLORS.green }}>A 安全阶段</div>
          <Row icon={<ShieldCheck size={22} color={COLORS.green}/>} delay={52} color={COLORS.green} pad="8px 12px"><span style={{fontWeight:900 }}>1年前</span>——任何行为均<span style={{fontWeight:900,color:COLORS.green }}>不可撤</span></Row>
        </div>
        <div data-final-knowledge="bankruptcy-revocation-right-scene-01-stage-1" style={{position:'relative',padding:'14px 20px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.gold,background:COLORS.gold+'4D',display:'flex',flexDirection:'column',opacity:enter(54,80)}}>
          <Watermark icon={<AlertOctagon size={110} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
          <div style={{fontSize:23,fontWeight:900,marginBottom:6,flexShrink:0,color:'#7A5B12'}}>B 重病阶段</div>
          <Row icon={<AlertOctagon size={22} color={COLORS.gold}/>} delay={66} color={COLORS.gold} pad="8px 12px">受理前<span style={{fontWeight:900,color:COLORS.gold }}>1年内</span>——<span style={{fontWeight:900 }}>欺诈行为</span>可撤</Row>
        </div>
        <div data-final-knowledge="bankruptcy-revocation-right-scene-01-stage-2" style={{position:'relative',padding:'14px 20px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(68,94)}}>
          <Watermark icon={<HandCoins size={110} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
          <div style={{fontSize:23,fontWeight:900,marginBottom:6,flexShrink:0,color:COLORS.red }}>C 垂死阶段</div>
          <Row icon={<HandCoins size={22} color={COLORS.red}/>} delay={80} color={COLORS.red} pad="8px 12px">已有<span style={{fontWeight:900 }}>破产原因</span>，受理前<span style={{fontWeight:900,color:COLORS.red }}>6个月内</span>——<span style={{fontWeight:900 }}>个别清偿</span>可撤</Row>
        </div>
        <div data-final-knowledge="bankruptcy-revocation-right-scene-01-stage-3" style={{position:'relative',padding:'14px 20px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.ink,background:COLORS.ink+'4D',display:'flex',flexDirection:'column',opacity:enter(82,108)}}>
          <Watermark icon={<Ban size={110} color={COLORS.ink} strokeWidth={1.2}/>} color={COLORS.ink}/>
          <div style={{fontSize:23,fontWeight:900,marginBottom:6,flexShrink:0}}>D 破产阶段</div>
          <Row icon={<Ban size={22} color={COLORS.ink}/>} delay={94} color={COLORS.ink} pad="8px 12px">受理后——<span style={{fontWeight:900,color:COLORS.red }}>禁止个别清偿</span></Row>
        </div>
      </div>
      <div style={{flexShrink:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.red,background:COLORS.red+'4D',padding:'13px 24px',opacity:enter(112,138)}}>
        <CalendarDays size={34} color={COLORS.red}/>
        <div style={{fontSize:22,fontWeight:900}}>口诀：<span style={{color:COLORS.red}}>欺诈看一年，个别看半年，一年之外全不撤</span></div>
      </div>
    </div>
  </Shell>;
};

export const BankruptcyRevocationRight02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  const Act=({id,title,delay,icon,children}:{readonly id:string;readonly title:string;readonly delay:number;readonly icon:ReactNode;readonly children:ReactNode})=>(
    <div data-final-knowledge={id} style={{position:'relative',padding:'12px 20px',border:'4px solid '+COLORS.ink,borderTop:'10px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(delay,delay+26),translate:slide(delay,delay+26,'0px 20px')}}>
      <div style={{display:'flex',alignItems:'center',gap:12,fontSize:23,fontWeight:900,marginBottom:4,flexShrink:0}}>{icon}{title}</div>
      <div style={{display:'flex',flexDirection:'column',gap:7,flex:1,justifyContent:'space-evenly'}}>{children}</div>
    </div>
  );
  return <Shell code="11.4" title="欺诈破产行为（第一类）">
    <div data-layout="fraud-five-2" data-visual-anchor="typographic-sequence" data-visual-grammar="fraudulent-acts,one-year-window" data-text-treatments="stamp,soft-highlight,label-block" data-focal-rule="bankruptcy-revocation-right-scene-02-rule" data-focal-channels="enclosure,motion,annotation" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:14}}>
      <div data-final-knowledge="bankruptcy-revocation-right-knowledge-2" style={{flexShrink:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#6E6757',opacity:enter(12,36)}}>受理前<span style={{color:COLORS.red }}>1年内</span>的下列行为——<span style={{color:COLORS.red }}>均可撤销</span></div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gridTemplateRows:'repeat(2,minmax(0,1fr))',gap:14}}>
        <div data-final-knowledge="bankruptcy-revocation-right-scene-02-act-0" style={{position:'relative',padding:'12px 20px',border:'4px solid '+COLORS.ink,borderTop:'10px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(26,52),translate:slide(26,52,'0px 20px')}}>
          <Row icon={<Gift size={22} color={COLORS.red}/>} delay={38} color={COLORS.red} pad="6px 12px">无对价送人——纯减损</Row>
        </div>
        <div data-final-knowledge="bankruptcy-revocation-right-scene-02-act-1" style={{position:'relative',padding:'12px 20px',border:'4px solid '+COLORS.ink,borderTop:'10px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(40,66),translate:slide(40,66,'0px 20px')}}>
          <Row icon={<Percent size={22} color={COLORS.red}/>} delay={50} color={COLORS.red} pad="6px 12px">低价卖 / 高价买</Row>
        </div>
        <div data-final-knowledge="bankruptcy-revocation-right-scene-02-act-2" style={{position:'relative',padding:'12px 20px',border:'4px solid '+COLORS.ink,borderTop:'10px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(54,80),translate:slide(54,80,'0px 20px')}}>
          <Row icon={<Lock size={22} color={COLORS.red}/>} delay={62} color={COLORS.red} pad="6px 12px">原本无担保 → 事后补担保</Row>
        </div>
        <div data-final-knowledge="bankruptcy-revocation-right-scene-02-act-3" style={{position:'relative',padding:'12px 20px',border:'4px solid '+COLORS.ink,borderTop:'10px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(68,94),translate:slide(68,94,'0px 20px')}}>
          <Row icon={<Ban size={22} color={COLORS.red}/>} delay={74} color={COLORS.red} pad="6px 12px">自扔债权——损害全体债权人</Row>
        </div>
        <div data-final-knowledge="bankruptcy-revocation-right-scene-02-act-4" style={{position:'relative',padding:'12px 20px',border:'4px solid '+COLORS.ink,borderTop:'10px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(82,108),translate:slide(82,108,'0px 20px')}}>
          <Row icon={<Wallet size={22} color={COLORS.red}/>} delay={86} color={COLORS.red} pad="6px 12px">例外：受理日<span style={{fontWeight:900 }}>前已到期</span> → <span style={{fontWeight:900,color:COLORS.green }}>不可撤</span>（除非属可撤的个别清偿）</Row>
        </div>
        <div style={{position:'relative',padding:'12px 20px',border:'4px dashed '+COLORS.green,background:COLORS.green+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(96,122)}}>
          <Watermark icon={<Scale size={110} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
          <div style={{fontSize:22,fontWeight:900,color:COLORS.green,flexShrink:0 }}>共同本质</div>
          <div style={{fontSize:20,fontWeight:800,lineHeight:1.45 }}>五种行为都是<span style={{fontWeight:900,color:COLORS.green }}>减损债务人财产</span>、损害全体债权人公平受偿的行为——管理人请求法院撤销后，财产<span style={{fontWeight:900,color:COLORS.green }}>归入债务人财产</span></div>
        </div>
      </div>
    </div>
  </Shell>;
};

export const BankruptcyRevocationRight03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="11.4" title="个别清偿：原则与例外">
    <div data-layout="repayment-exceptions-3" data-visual-anchor="boundary" data-visual-grammar="individual-repayment,exception-gates" data-text-treatments="external-negation,soft-highlight,stamp" data-focal-rule="bankruptcy-revocation-right-scene-03-rule" data-focal-channels="enclosure,contrast,annotation" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:16}}>
      <div data-final-knowledge="bankruptcy-revocation-right-knowledge-3" style={{flexShrink:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#6E6757',opacity:enter(12,36)}}>第二类：受理前<span style={{color:COLORS.red }}>6个月内</span>＋有破产原因的<span style={{color:COLORS.red }}>个别清偿</span></div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'1fr 1.3fr',gap:20}}>
        <div data-final-knowledge="bankruptcy-revocation-right-scene-03-rule" style={{position:'relative',padding:'16px 24px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54),translate:slide(28,54,'-24px 0px')}}>
          <Watermark icon={<HandCoins size={150} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8,flexShrink:0}}>
            <HandCoins size={32} color={COLORS.red}/>
            <div style={{padding:'8px 18px',background:COLORS.red,color:COLORS.paper,fontSize:24,fontWeight:900 }}>原则：可撤销</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<HandCoins size={22} color={COLORS.red}/>} delay={40} color={COLORS.red} pad="9px 13px">受理前<span style={{fontWeight:900,color:COLORS.red }}>6个月内</span></Row>
            <Row icon={<Scale size={22} color={COLORS.red}/>} delay={52} color={COLORS.red} pad="9px 13px">已有<span style={{fontWeight:900 }}>破产原因</span></Row>
            <Row icon={<Users size={22} color={COLORS.red}/>} delay={64} color={COLORS.red} pad="9px 13px">对<span style={{fontWeight:900 }}>个别债权人</span>清偿——偏颇清偿</Row>
          </div>
        </div>
        <div data-final-knowledge="bankruptcy-revocation-right-scene-03-exceptions" style={{position:'relative',padding:'16px 24px',border:'5px solid '+COLORS.green,background:COLORS.green+'4D',display:'flex',flexDirection:'column',opacity:enter(46,72),translate:slide(46,72,'24px 0px')}}>
          <Watermark icon={<ShieldCheck size={150} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8,flexShrink:0}}>
            <ShieldCheck size={32} color={COLORS.green}/>
            <div style={{padding:'8px 18px',background:COLORS.green,color:COLORS.paper,fontSize:24,fontWeight:900 }}>例外：不可撤（五项）</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:8,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Landmark size={22} color={COLORS.green}/>} delay={54} color={COLORS.green} pad="7px 12px">① 经<span style={{fontWeight:900 }}>司法程序</span>清偿</Row>
            <Row icon={<Coins size={22} color={COLORS.green}/>} delay={64} color={COLORS.green} pad="7px 12px">② <span style={{fontWeight:900 }}>水电费</span></Row>
            <Row icon={<Scale size={22} color={COLORS.green}/>} delay={74} color={COLORS.green} pad="7px 12px">③ <span style={{fontWeight:900 }}>有担保</span>且担保财产价值<span style={{fontWeight:900 }}>≥债权额</span></Row>
            <Row icon={<Users size={22} color={COLORS.green}/>} delay={84} color={COLORS.green} pad="7px 12px">④ <span style={{fontWeight:900 }}>劳动报酬</span>或<span style={{fontWeight:900 }}>人身损害赔偿金</span></Row>
            <Row icon={<TrendingUp size={22} color={COLORS.green}/>} delay={94} color={COLORS.green} pad="7px 12px">⑤ 使债务人财产<span style={{fontWeight:900,color:COLORS.green }}>受益</span>的个别清偿</Row>
          </div>
        </div>
      </div>
      <div style={{flexShrink:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.red,background:COLORS.red+'4D',padding:'13px 24px',opacity:enter(100,126)}}>
        <CalendarDays size={34} color={COLORS.red}/>
        <div style={{fontSize:22,fontWeight:900 }}>口诀：<span style={{color:COLORS.red }}>欺诈看一年，个别看半年，一年之外全不撤</span></div>
      </div>
    </div>
  </Shell>;
};

export const BankruptcyRevocationRight=()=> <AbsoluteFill>
  <TimelineSequence name="01-bankruptcy-revocation-right-scene-01" start={SCENES['bankruptcy-revocation-right-scene-01'].start} duration={SCENES['bankruptcy-revocation-right-scene-01'].duration}><BankruptcyRevocationRight01Scene/></TimelineSequence>
  <TimelineSequence name="02-bankruptcy-revocation-right-scene-02" start={SCENES['bankruptcy-revocation-right-scene-02'].start} duration={SCENES['bankruptcy-revocation-right-scene-02'].duration}><BankruptcyRevocationRight02Scene/></TimelineSequence>
  <TimelineSequence name="03-bankruptcy-revocation-right-scene-03" start={SCENES['bankruptcy-revocation-right-scene-03'].start} duration={SCENES['bankruptcy-revocation-right-scene-03'].duration}><BankruptcyRevocationRight03Scene/></TimelineSequence>
</AbsoluteFill>;
