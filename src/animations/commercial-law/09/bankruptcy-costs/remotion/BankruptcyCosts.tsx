import type {ReactNode} from 'react';
import {Coins, Users, Handshake, TrendingUp, Scale, FileX2, Landmark, Banknote, ReceiptText, Briefcase, Gavel, ScrollText, Ban} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#EFF1ED', ink:'#232A26', green:'#2E6D4F', red:'#B23A30', gold:'#C08A2D', paper:'#F8FAF6'} as const;
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

export const BankruptcyCosts01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="09.4" title="破产费用 与 共益债务">
    <div data-layout="cost-pool-split-1" data-visual-anchor="comparison-axis" data-visual-grammar="procedural-expense,common-interest-debt" data-text-treatments="label-block,thin-underline,soft-highlight" data-focal-rule="bankruptcy-costs-scene-01-rule" data-focal-channels="contrast,spatial,icon" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:16}}>
      <div data-final-knowledge="bankruptcy-costs-knowledge-1" style={{flexShrink:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#6E6757',opacity:enter(12,36)}}>受理后发生——<span style={{color:COLORS.green}}>程序性支出</span> vs <span style={{color:COLORS.red }}>全体债权人利益之债</span></div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="bankruptcy-costs-scene-01-cost" style={{position:'relative',padding:'16px 24px',border:'5px solid '+COLORS.green,background:COLORS.green+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54),translate:slide(28,54,'-24px 0px')}}>
          <Watermark icon={<ReceiptText size={150} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8,flexShrink:0}}>
            <ReceiptText size={34} color={COLORS.green}/>
            <div style={{padding:'8px 18px',background:COLORS.green,color:COLORS.paper,fontSize:25,fontWeight:900}}>破产费用</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:9,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Gavel size={22} color={COLORS.green}/>} delay={40} color={COLORS.green} pad="8px 12px">① 破产<span style={{fontWeight:900}}>诉讼费</span></Row>
            <Row icon={<Coins size={22} color={COLORS.green}/>} delay={50} color={COLORS.green} pad="8px 12px">② 管理、变价和分配<span style={{fontWeight:900}}>债务人财产</span>的费用</Row>
            <Row icon={<Briefcase size={22} color={COLORS.green}/>} delay={60} color={COLORS.green} pad="8px 12px">③ <span style={{fontWeight:900}}>管理人</span>执行职务的费用、报酬和聘用人员费用</Row>
            <Row icon={<Landmark size={22} color={COLORS.green}/>} delay={70} color={COLORS.green} pad="8px 12px">④ 受理前的<span style={{fontWeight:900}}>强制清算费用</span>（清算转破产）</Row>
            <Row icon={<Scale size={22} color={COLORS.green}/>} delay={80} color={COLORS.green} pad="8px 12px">⑤ 未终结执行程序的<span style={{fontWeight:900 }}>评估/公告/保管费</span>（执行转破产）</Row>
          </div>
        </div>
        <div data-final-knowledge="bankruptcy-costs-scene-01-common" style={{position:'relative',padding:'16px 24px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(46,72),translate:slide(46,72,'24px 0px')}}>
          <Watermark icon={<Handshake size={150} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8,flexShrink:0}}>
            <Handshake size={34} color={COLORS.red}/>
            <div style={{padding:'8px 18px',background:COLORS.red,color:COLORS.paper,fontSize:25,fontWeight:900}}>共益债务</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:9,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<ScrollText size={22} color={COLORS.red}/>} delay={58} color={COLORS.red} pad="8px 12px">合同类：履行<span style={{fontWeight:900}}>未完毕合同</span>所生之债</Row>
            <Row icon={<Coins size={22} color={COLORS.red}/>} delay={68} color={COLORS.red} pad="8px 12px"><span style={{fontWeight:900}}>无因管理</span>、<span style={{fontWeight:900}}>不当得利</span>所生之债</Row>
            <Row icon={<TrendingUp size={22} color={COLORS.red}/>} delay={78} color={COLORS.red} pad="8px 12px">经营类：<span style={{fontWeight:900}}>继续营业</span>的劳动报酬、社保（含<span style={{fontWeight:900}}>新增借款</span>）</Row>
            <Row icon={<Users size={22} color={COLORS.red}/>} delay={88} color={COLORS.red} pad="8px 12px">管理人/相关人员<span style={{fontWeight:900}}>执行职务致损</span>、债务人<span style={{fontWeight:900}}>财产致损</span>之债</Row>
          </div>
        </div>
      </div>
    </div>
  </Shell>;
};

export const BankruptcyCosts02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="09.4" title="共益债务的具体项目">
    <div data-layout="common-debt-list-2" data-visual-anchor="typographic-sequence" data-visual-grammar="contract-type-debts,operation-type-debts" data-text-treatments="soft-highlight,stamp,external-negation" data-focal-rule="bankruptcy-costs-scene-02-rule" data-focal-channels="enclosure,motion,annotation" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:14}}>
      <div data-final-knowledge="bankruptcy-costs-knowledge-2" style={{flexShrink:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#6E6757',opacity:enter(12,36)}}>为<span style={{color:COLORS.red}}>全体债权人利益</span>而生——两类六项</div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gridTemplateRows:'repeat(2,minmax(0,1fr))',gap:16}}>
        <div data-final-knowledge="bankruptcy-costs-scene-02-item-0" style={{position:'relative',padding:'14px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54),translate:slide(28,54,'0px 22px')}}>
          <Watermark icon={<ScrollText size={120} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:24,fontWeight:900,marginBottom:6,flexShrink:0}}><ScrollText size={28} color={COLORS.red}/>合同类</div>
          <div style={{display:'flex',flexDirection:'column',gap:8,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<ScrollText size={22} color={COLORS.red}/>} delay={40} color={COLORS.red} pad="7px 12px">请求履行<span style={{fontWeight:900}}>未履行完毕合同</span>所生之债</Row>
            <Row icon={<Coins size={22} color={COLORS.red}/>} delay={50} color={COLORS.red} pad="7px 12px"><span style={{fontWeight:900}}>无因管理</span> / <span style={{fontWeight:900}}>不当得利</span>所生之债</Row>
          </div>
        </div>
        <div data-final-knowledge="bankruptcy-costs-scene-02-item-1" style={{position:'relative',padding:'14px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(44,70),translate:slide(44,70,'0px 22px')}}>
          <Watermark icon={<TrendingUp size={120} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:24,fontWeight:900,marginBottom:6,flexShrink:0}}><TrendingUp size={28} color={COLORS.red}/>经营类</div>
          <div style={{display:'flex',flexDirection:'column',gap:8,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Users size={22} color={COLORS.red}/>} delay={58} color={COLORS.red} pad="7px 12px">继续营业的<span style={{fontWeight:900}}>劳动报酬、社保</span>及其他债务</Row>
          </div>
        </div>
        <div data-final-knowledge="bankruptcy-costs-scene-02-item-2" style={{position:'relative',padding:'14px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(60,86),translate:slide(60,86,'0px 22px')}}>
          <Watermark icon={<Briefcase size={120} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:24,fontWeight:900,marginBottom:6,flexShrink:0}}><Briefcase size={28} color={COLORS.red}/>损害类</div>
          <div style={{display:'flex',flexDirection:'column',gap:8,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Briefcase size={22} color={COLORS.red}/>} delay={76} color={COLORS.red} pad="7px 12px">管理人或相关人员<span style={{fontWeight:900}}>执行职务致人损害</span></Row>
            <Row icon={<Landmark size={22} color={COLORS.red}/>} delay={86} color={COLORS.red} pad="7px 12px">债务人<span style={{fontWeight:900}}>财产致人损害</span></Row>
          </div>
        </div>
        <div data-final-knowledge="bankruptcy-costs-scene-02-item-3" style={{position:'relative',padding:'14px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(76,102),translate:slide(76,102,'0px 22px')}}>
          <Watermark icon={<Coins size={120} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:24,fontWeight:900,marginBottom:6,flexShrink:0}}><Coins size={28} color={COLORS.red}/>新增借款</div>
          <div style={{display:'flex',flexDirection:'column',gap:8,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Coins size={22} color={COLORS.red}/>} delay={94} color={COLORS.red} pad="7px 12px">为<span style={{fontWeight:900,color:COLORS.red }}>继续营业</span>而借款 → 属共益债务</Row>
          </div>
        </div>
      </div>
      <div data-final-knowledge="bankruptcy-costs-scene-02-note" style={{flexShrink:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.gold,background:COLORS.gold+'4D',padding:'13px 24px',opacity:enter(100,126)}}>
        <FileX2 size={34} color={COLORS.gold}/>
        <div style={{fontSize:21,fontWeight:800,lineHeight:1.45}}>易错：对方因<span style={{fontWeight:900}}>解除合同</span>遭受的损失 → <span style={{fontWeight:900,color:COLORS.green}}>破产债权</span>，<span style={{fontWeight:900,color:COLORS.red}}>不是共益债务</span></div>
      </div>
    </div>
  </Shell>;
};

export const BankruptcyCosts03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  const flowProgress=interpolate(frame,[120,240],[0,1],CLAMP);
  return <Shell code="09.4" title="清偿规则与比例">
    <div data-layout="payment-order-3" data-visual-anchor="flow-path" data-visual-grammar="order-rule,proportional-rule" data-text-treatments="stamp,label-block,soft-highlight" data-focal-rule="bankruptcy-costs-scene-03-rule" data-focal-channels="connector,motion,enclosure" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:14}}>
      <div data-final-knowledge="bankruptcy-costs-knowledge-3" style={{flexShrink:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <Banknote size={40} color={COLORS.green}/>
        <div style={{fontSize:27,fontWeight:900}}>债务人财产<span style={{color:COLORS.green}}>随时清偿</span> · 对外<span style={{color:COLORS.green}}>费用＞共益</span> · 对内按比例</div>
      </div>
      <div style={{flex:'1 1 0',minHeight:0,display:'flex',flexDirection:'column',gap:14}}>
        <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:20}}>
          <div data-final-knowledge="bankruptcy-costs-scene-03-rule" style={{position:'relative',padding:'16px 24px',border:'5px solid '+COLORS.green,background:COLORS.green+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54),translate:slide(28,54,'-24px 0px')}}>
            <Watermark icon={<Scale size={140} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
            <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8,flexShrink:0}}>
              <Scale size={32} color={COLORS.green}/>
              <div style={{fontSize:24,fontWeight:900}}>顺序规则</div>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:9,flex:1,justifyContent:'space-evenly'}}>
              <Row icon={<Banknote size={22} color={COLORS.green}/>} delay={40} color={COLORS.green} pad="8px 12px">由债务人财产<span style={{fontWeight:900,color:COLORS.green}}>随时清偿</span></Row>
              <Row icon={<Scale size={22} color={COLORS.green}/>} delay={52} color={COLORS.green} pad="8px 12px">对外按顺序（<span style={{fontWeight:900}}>费用＞共益</span>），对内<span style={{fontWeight:900}}>按比例</span></Row>
            </div>
          </div>
          <div data-final-knowledge="bankruptcy-costs-scene-03-example" style={{position:'relative',padding:'16px 24px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'4D',display:'flex',flexDirection:'column',opacity:enter(46,72),translate:slide(46,72,'24px 0px')}}>
            <Watermark icon={<Coins size={140} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
            <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8,flexShrink:0}}>
              <Coins size={32} color={COLORS.gold}/>
              <div style={{fontSize:24,fontWeight:900}}>例：债务人财产 50 万</div>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:9,flex:1,justifyContent:'space-evenly'}}>
              <Row icon={<FileX2 size={22} color={COLORS.gold}/>} delay={58} color={COLORS.gold} pad="8px 12px">破产费用100万 → <span style={{fontWeight:900,color:COLORS.red}}>终结程序</span>，各项费用按比例（20万/30万）</Row>
              <Row icon={<Handshake size={22} color={COLORS.gold}/>} delay={70} color={COLORS.gold} pad="8px 12px">费30万＋共益40万 → 先清<span style={{fontWeight:900}}>全部费用</span>，共益按比例（15万/5万）</Row>
            </div>
          </div>
        </div>
        <div style={{flexShrink:0,position:'relative',height:64}}>
          <div style={{position:'absolute',left:40,top:26,width:interpolate(flowProgress,[0,1],[0,1600],CLAMP),height:10,background:COLORS.green}}/>
          <div style={{position:'absolute',left:40,top:12,width:10,height:38,background:COLORS.ink}}/>
          <div data-stateful-source="bankruptcy-costs-payment-flow" style={{position:'absolute',left:interpolate(flowProgress,[0,1],[40,1380],CLAMP),top:16,width:0,height:0,borderLeft:'14px solid transparent',borderRight:'14px solid transparent',borderBottom:'30px solid '+COLORS.gold,opacity:flowProgress>0.94?0:1,zIndex:4}}/>
          <div data-stateful-terminal="bankruptcy-costs-payment-flow" style={{position:'absolute',right:0,top:12,padding:'6px 16px',border:'3px solid '+COLORS.ink,background:COLORS.green,color:COLORS.paper,fontSize:20,fontWeight:900,opacity:enter(140,164)}}>随时清偿·顺序优先</div>
        </div>
      </div>
    </div>
  </Shell>;
};

export const BankruptcyCosts=()=> <AbsoluteFill>
  <TimelineSequence name="01-bankruptcy-costs-scene-01" start={SCENES['bankruptcy-costs-scene-01'].start} duration={SCENES['bankruptcy-costs-scene-01'].duration}><BankruptcyCosts01Scene/></TimelineSequence>
  <TimelineSequence name="02-bankruptcy-costs-scene-02" start={SCENES['bankruptcy-costs-scene-02'].start} duration={SCENES['bankruptcy-costs-scene-02'].duration}><BankruptcyCosts02Scene/></TimelineSequence>
  <TimelineSequence name="03-bankruptcy-costs-scene-03" start={SCENES['bankruptcy-costs-scene-03'].start} duration={SCENES['bankruptcy-costs-scene-03'].duration}><BankruptcyCosts03Scene/></TimelineSequence>
</AbsoluteFill>;
