import type {ReactNode} from 'react';
import {FileText, CheckCircle2, XCircle, Handshake, Banknote, Users, CalendarClock, Ban, ScrollText, Scale, Undo2, Landmark} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#F3EEE2', ink:'#24262E', green:'#2E6D4F', red:'#B23A30', gold:'#C9A23C', paper:'#FAF5E9'} as const;
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

export const ClaimFiling01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="10.1" title="申报门槛 与 未按期申报">
    <div data-layout="claim-gate-1" data-visual-anchor="boundary" data-visual-grammar="old-equal-money-test,file-vs-nofile" data-text-treatments="label-block,stamp,external-negation" data-focal-rule="claim-filing-scene-01-rule" data-focal-channels="enclosure,contrast,annotation" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:14}}>
      <div data-final-knowledge="claim-filing-knowledge-1" style={{flexShrink:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <FileText size={40} color={COLORS.green}/>
        <div style={{fontSize:26,fontWeight:900}}>申报范围口诀：<span style={{color:COLORS.green }}>老 · 平 · 钱</span>——法院限期 <span style={{color:COLORS.green}}>30日至3个月</span> 向管理人申报</div>
      </div>
      <div data-final-knowledge="claim-filing-scene-01-gate" style={{position:'relative',flexShrink:0,display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:16,padding:'14px 20px',border:'4px solid '+COLORS.green,background:COLORS.green+'4D',opacity:enter(24,50)}}>
        <Watermark icon={<Scale size={110} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
        <Row icon={<CalendarClock size={24} color={COLORS.green}/>} delay={36} color={COLORS.green} pad="10px 13px"><span style={{fontWeight:900,color:COLORS.green}}>老</span>——受理<span style={{fontWeight:900}}>前</span>产生的债权</Row>
        <Row icon={<Users size={24} color={COLORS.green}/>} delay={48} color={COLORS.green} pad="10px 13px"><span style={{fontWeight:900,color:COLORS.green}}>平</span>——<span style={{fontWeight:900}}>平等民事主体</span>之间</Row>
        <Row icon={<Banknote size={24} color={COLORS.green}/>} delay={60} color={COLORS.green} pad="10px 13px"><span style={{fontWeight:900,color:COLORS.green }}>钱</span>——合法有效的<span style={{fontWeight:900}}>金钱债权</span></Row>
      </div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="claim-filing-scene-01-file" style={{position:'relative',padding:'16px 24px',border:'5px solid '+COLORS.green,background:COLORS.green+'4D',display:'flex',flexDirection:'column',opacity:enter(66,92),translate:slide(66,92,'-24px 0px')}}>
          <Watermark icon={<CheckCircle2 size={140} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8,flexShrink:0}}>
            <CheckCircle2 size={32} color={COLORS.green}/>
            <div style={{padding:'7px 18px',background:COLORS.green,color:COLORS.paper,fontSize:24,fontWeight:900}}>可以申报</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:8,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<CalendarClock size={22} color={COLORS.green}/>} delay={78} color={COLORS.green} pad="7px 12px"><span style={{fontWeight:900}}>未到期</span>债权——受理时视为到期，<span style={{fontWeight:900,color:COLORS.green }}>停止计息</span></Row>
            <Row icon={<ScrollText size={22} color={COLORS.green}/>} delay={88} color={COLORS.green} pad="7px 12px"><span style={{fontWeight:900}}>不确定</span>债权——附条件/附期限/诉讼仲裁未决</Row>
            <Row icon={<Scale size={22} color={COLORS.green}/>} delay={98} color={COLORS.green} pad="7px 12px"><span style={{fontWeight:900}}>有担保或无担保</span>的债权</Row>
            <Row icon={<Handshake size={22} color={COLORS.green}/>} delay={108} color={COLORS.green} pad="7px 12px">管理人解除待履行合同 → <span style={{fontWeight:900 }}>相对人的赔偿请求权</span></Row>
          </div>
        </div>
        <div data-final-knowledge="claim-filing-scene-01-nofile" style={{position:'relative',padding:'16px 24px',border:'5px dashed '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(80,106),translate:slide(80,106,'24px 0px')}}>
          <Watermark icon={<XCircle size={140} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8,flexShrink:0}}>
            <XCircle size={32} color={COLORS.red}/>
            <div style={{padding:'7px 18px',background:COLORS.red,color:COLORS.paper,fontSize:24,fontWeight:900}}>不可申报</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:8,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Ban size={22} color={COLORS.red}/>} delay={90} color={COLORS.red} pad="7px 12px">受理后产生的<span style={{fontWeight:900}}>新债</span>（破产费用、共益债务）</Row>
            <Row icon={<XCircle size={22} color={COLORS.red}/>} delay={100} color={COLORS.red} pad="7px 12px"><span style={{fontWeight:900}}>无效</span>的 / <span style={{fontWeight:900 }}>超过诉讼时效</span>的债权</Row>
            <Row icon={<Ban size={22} color={COLORS.red}/>} delay={110} color={COLORS.red} pad="7px 12px">不是债权——<span style={{fontWeight:900}}>罚款罚金、取回权</span>、参加债权人会议的费用</Row>
            <Row icon={<Users size={22} color={COLORS.red}/>} delay={120} color={COLORS.red} pad="7px 12px"><span style={{fontWeight:900,color:COLORS.red}}>职工债权免报</span>——管理人调查后列清单公示</Row>
          </div>
        </div>
      </div>
    </div>
  </Shell>;
};

export const ClaimFiling02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="10.1" title="保证人清偿前后的申报">
    <div data-layout="surety-filing-2" data-visual-anchor="flow-path" data-visual-grammar="paid-vs-unpaid,future-recourse" data-text-treatments="thin-underline,soft-highlight,label-block" data-focal-rule="claim-filing-scene-02-rule" data-focal-channels="connector,contrast,motion" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:16}}>
      <div data-final-knowledge="claim-filing-knowledge-2" style={{flexShrink:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <Handshake size={40} color={COLORS.green}/>
        <div style={{fontSize:27,fontWeight:900}}>债务人破产——保证人怎么报？</div>
      </div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="claim-filing-scene-02-branch-0" style={{position:'relative',padding:'18px 24px',border:'5px solid '+COLORS.green,background:COLORS.green+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54),translate:slide(28,54,'-24px 0px')}}>
          <Watermark icon={<Banknote size={150} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10,flexShrink:0}}>
            <Banknote size={34} color={COLORS.green}/>
            <div style={{padding:'8px 18px',background:COLORS.green,color:COLORS.paper,fontSize:25,fontWeight:900}}>保证人已还债</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Banknote size={24} color={COLORS.green}/>} delay={40} color={COLORS.green} pad="10px 13px">申报<span style={{background:COLORS.green+'28',padding:'1px 8px',fontWeight:900}}>现实求偿权</span>——以实际清偿数额为限</Row>
          </div>
        </div>
        <div data-final-knowledge="claim-filing-scene-02-branch-1" style={{position:'relative',padding:'18px 24px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'4D',display:'flex',flexDirection:'column',opacity:enter(46,72),translate:slide(46,72,'24px 0px')}}>
          <Watermark icon={<CalendarClock size={150} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10,flexShrink:0}}>
            <CalendarClock size={34} color={COLORS.gold}/>
            <div style={{padding:'8px 18px',background:COLORS.gold,color:COLORS.paper,fontSize:25,fontWeight:900}}>保证人未还债</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<CalendarClock size={24} color={COLORS.gold}/>} delay={58} color={COLORS.gold} pad="10px 13px">申报<span style={{background:COLORS.gold+'40',padding:'1px 8px',fontWeight:900}}>将来求偿权</span></Row>
            <Row icon={<Ban size={24} color={COLORS.red}/>} delay={72} color={COLORS.red} pad="10px 13px">例外：债权人<span style={{fontWeight:900,color:COLORS.red}}>已申报全部债权</span>的除外</Row>
          </div>
        </div>
      </div>
      <div data-final-knowledge="claim-filing-scene-02-note" style={{flexShrink:0,position:'relative',display:'grid',gap:9,border:'4px solid '+COLORS.ink,background:COLORS.ink+'4D',padding:'13px 24px',opacity:enter(88,114)}}>
        <Watermark icon={<Undo2 size={110} color={COLORS.ink} strokeWidth={1.2}/>} color={COLORS.ink}/>
        <Row icon={<CalendarClock size={24} color={COLORS.ink}/>} delay={100} color={COLORS.ink} pad="8px 13px"><span style={{fontWeight:900}}>未按期申报</span>：最后分配前可<span style={{fontWeight:900,color:COLORS.green}}>补充申报</span>；已进行的分配<span style={{fontWeight:900,color:COLORS.red}}>不再补充分配</span></Row>
        <Row icon={<Banknote size={24} color={COLORS.ink}/>} delay={114} color={COLORS.ink} pad="8px 13px">审查确认补充申报债权的<span style={{fontWeight:900}}>费用</span>，由<span style={{fontWeight:900,color:COLORS.red}}>补充申报人</span>承担</Row>
      </div>
    </div>
  </Shell>;
};

export const ClaimFiling03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="10.1" title="保证人破产 与 双双破产">
    <div data-layout="dual-filing-3" data-visual-anchor="comparison-axis" data-visual-grammar="surety-bankruptcy,double-bankruptcy" data-text-treatments="label-block,stamp,external-negation" data-focal-rule="claim-filing-scene-03-rule" data-focal-channels="contrast,spatial,annotation" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:16}}>
      <div data-final-knowledge="claim-filing-knowledge-3" style={{flexShrink:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#6E6757',opacity:enter(12,36)}}>保证人破产 / 债务人保证人均破产</div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="claim-filing-scene-03-surety" style={{position:'relative',padding:'18px 24px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54),translate:slide(28,54,'-24px 0px')}}>
          <Watermark icon={<Landmark size={150} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10,flexShrink:0}}>
            <Landmark size={34} color={COLORS.gold}/>
            <div style={{padding:'8px 18px',background:COLORS.gold,color:COLORS.paper,fontSize:25,fontWeight:900}}>保证人破产</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<CalendarClock size={24} color={COLORS.gold}/>} delay={40} color={COLORS.gold} pad="10px 13px">保证债权<span style={{fontWeight:900,color:COLORS.gold}}>加速到期</span>——债权人可申报</Row>
            <Row icon={<Scale size={24} color={COLORS.gold}/>} delay={54} color={COLORS.gold} pad="10px 13px">一般保证人<span style={{fontWeight:900}}>无先诉抗辩权</span>；债权人获偿应<span style={{fontWeight:900,color:COLORS.gold}}>提存</span>，待责任确定后按清偿比例定数</Row>
            <Row icon={<Undo2 size={24} color={COLORS.gold}/>} delay={68} color={COLORS.gold} pad="10px 13px">保证人可就实际清偿数额向债务人行使<span style={{fontWeight:900}}>求偿权</span>（丙承担20万×10%＝2万，可向甲追偿2万）</Row>
          </div>
        </div>
        <div data-final-knowledge="claim-filing-scene-03-both" style={{position:'relative',padding:'18px 24px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(46,72),translate:slide(46,72,'24px 0px')}}>
          <Watermark icon={<Users size={150} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10,flexShrink:0}}>
            <Users size={34} color={COLORS.red}/>
            <div style={{padding:'8px 18px',background:COLORS.red,color:COLORS.paper,fontSize:25,fontWeight:900}}>债务人、保证人均破产</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Users size={24} color={COLORS.red}/>} delay={58} color={COLORS.red} pad="10px 13px">债权人可向<span style={{fontWeight:900 }}>双方分别申报</span>全部债权，分别受偿互不影响</Row>
            <Row icon={<Scale size={24} color={COLORS.red}/>} delay={72} color={COLORS.red} pad="10px 13px">受偿总额<span style={{fontWeight:900,color:COLORS.red}}>不得超出债权总额</span>——受偿上限</Row>
            <Row icon={<Ban size={24} color={COLORS.red}/>} delay={86} color={COLORS.red} pad="10px 13px">保证人履行保证责任后<span style={{fontWeight:900,color:COLORS.red}}>无求偿权</span>——否则重复申报</Row>
          </div>
        </div>
      </div>
    </div>
  </Shell>;
};

export const ClaimFiling=()=> <AbsoluteFill>
  <TimelineSequence name="01-claim-filing-scene-01" start={SCENES['claim-filing-scene-01'].start} duration={SCENES['claim-filing-scene-01'].duration}><ClaimFiling01Scene/></TimelineSequence>
  <TimelineSequence name="02-claim-filing-scene-02" start={SCENES['claim-filing-scene-02'].start} duration={SCENES['claim-filing-scene-02'].duration}><ClaimFiling02Scene/></TimelineSequence>
  <TimelineSequence name="03-claim-filing-scene-03" start={SCENES['claim-filing-scene-03'].start} duration={SCENES['claim-filing-scene-03'].duration}><ClaimFiling03Scene/></TimelineSequence>
</AbsoluteFill>;
