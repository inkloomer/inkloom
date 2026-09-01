import type {ReactNode} from 'react';
import {PackageSearch, CalendarClock, Lock, Leaf, Truck, FileText, Banknote, Scale, Coins, Ban, ShieldCheck, Landmark} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#EFF2EC', ink:'#232B26', green:'#2E6D4F', orange:'#C2542B', gold:'#C08A2D', paper:'#F8FAF5'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.orange,color:COLORS.paper}}>{code}</div>
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

export const ReclaimRight01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="11.3" title="取回权的一般规则">
    <div data-layout="retrieval-rules-1" data-visual-anchor="boundary" data-visual-grammar="retrieval-deadline,unpaid-fee-lien" data-text-treatments="label-block,thin-underline,soft-highlight" data-focal-rule="reclaim-right-scene-01-rule" data-focal-channels="enclosure,locator,annotation" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:16}}>
      <div data-final-knowledge="reclaim-right-knowledge-1" style={{flexShrink:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <PackageSearch size={40} color={COLORS.orange}/>
        <div style={{fontSize:27,fontWeight:900}}>不属于债务人的财产——权利人经<span style={{color:COLORS.orange}}>管理人</span>取回（保管/借用/租赁等）</div>
      </div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="reclaim-right-scene-01-deadline" style={{position:'relative',padding:'16px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.orange,background:COLORS.orange+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54),translate:slide(28,54,'0px 22px')}}>
          <Watermark icon={<CalendarClock size={130} color={COLORS.orange} strokeWidth={1.2}/>} color={COLORS.orange}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:24,fontWeight:900,marginBottom:6,flexShrink:0}}><CalendarClock size={30} color={COLORS.orange}/>① 取回时点</div>
          <div style={{display:'flex',flexDirection:'column',gap:9,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<CalendarClock size={22} color={COLORS.orange}/>} delay={40} color={COLORS.orange} pad="8px 12px">变价方案/和解协议/重整计划草案<span style={{fontWeight:900,color:COLORS.orange}}>提交表决前</span>取回</Row>
            <Row icon={<Coins size={22} color={COLORS.orange}/>} delay={52} color={COLORS.orange} pad="8px 12px">过期仍可取回，但需<span style={{fontWeight:900,color:COLORS.orange}}>加钱</span>——支付迟延行使增加的费用</Row>
          </div>
        </div>
        <div data-final-knowledge="reclaim-right-scene-01-fee" style={{position:'relative',padding:'16px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.orange,background:COLORS.orange+'4D',display:'flex',flexDirection:'column',opacity:enter(44,70),translate:slide(44,70,'0px 22px')}}>
          <Watermark icon={<Lock size={130} color={COLORS.orange} strokeWidth={1.2}/>} color={COLORS.orange}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:24,fontWeight:900,marginBottom:6,flexShrink:0}}><Lock size={30} color={COLORS.orange}/>② 费用未付</div>
          <div style={{display:'flex',flexDirection:'column',gap:9,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Banknote size={22} color={COLORS.orange}/>} delay={56} color={COLORS.orange} pad="8px 12px">未付<span style={{fontWeight:900}}>加工费/保管费/委托费</span>等</Row>
            <Row icon={<Lock size={22} color={COLORS.orange}/>} delay={68} color={COLORS.orange} pad="8px 12px">管理人可<span style={{fontWeight:900,color:COLORS.orange }}>拒绝取回</span>，并行使<span style={{fontWeight:900,color:COLORS.orange}}>留置权</span></Row>
          </div>
        </div>
        <div data-final-knowledge="reclaim-right-scene-01-perishable" style={{position:'relative',padding:'16px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.orange,background:COLORS.orange+'4D',display:'flex',flexDirection:'column',opacity:enter(60,86),translate:slide(60,86,'0px 22px')}}>
          <Watermark icon={<Leaf size={130} color={COLORS.orange} strokeWidth={1.2}/>} color={COLORS.orange}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:24,fontWeight:900,marginBottom:6,flexShrink:0}}><Leaf size={30} color={COLORS.orange}/>③ 鲜活易腐</div>
          <div style={{display:'flex',flexDirection:'column',gap:9,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Leaf size={22} color={COLORS.orange}/>} delay={72} color={COLORS.orange} pad="8px 12px">不易保管 / 不及时变现<span style={{fontWeight:900 }}>价值严重贬损</span></Row>
            <Row icon={<Coins size={22} color={COLORS.orange}/>} delay={84} color={COLORS.orange} pad="8px 12px">管理人及时<span style={{fontWeight:900,color:COLORS.orange }}>变价并提存变价款</span>，权利人取回变价款</Row>
          </div>
        </div>
      </div>
    </div>
  </Shell>;
};

export const ReclaimRight02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="11.3" title="违法转让 与 毁损灭失">
    <div data-layout="loss-split-2" data-visual-anchor="comparison-axis" data-visual-grammar="pre-acceptance-ordinary,post-acceptance-common" data-text-treatments="soft-highlight,stamp,external-negation" data-focal-rule="reclaim-right-scene-02-rule" data-focal-channels="contrast,connector,annotation" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:14}}>
      <div data-final-knowledge="reclaim-right-knowledge-2" style={{flexShrink:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <Scale size={40} color={COLORS.orange}/>
        <div style={{fontSize:27,fontWeight:900 }}>债务人<span style={{color:COLORS.orange }}>违法转让</span>取回标的物——能否取回看第三人</div>
      </div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="reclaim-right-scene-02-branch-0" style={{position:'relative',padding:'16px 24px',border:'5px dashed '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54),translate:slide(28,54,'-24px 0px')}}>
          <Watermark icon={<Ban size={140} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8,flexShrink:0}}>
            <Ban size={32} color={COLORS.red}/>
            <div style={{padding:'8px 18px',background:COLORS.red,color:COLORS.paper,fontSize:24,fontWeight:900 }}>第三人善意取得 → 无法取回</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:9,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Scale size={22} color={COLORS.red}/>} delay={40} color={COLORS.red} pad="8px 12px">权利人损失：受理前转让 → <span style={{fontWeight:900 }}>普通债权</span></Row>
            <Row icon={<Coins size={22} color={COLORS.red}/>} delay={52} color={COLORS.red} pad="8px 12px">受理后转让 → <span style={{fontWeight:900,color:COLORS.green }}>共益债务</span></Row>
          </div>
        </div>
        <div data-final-knowledge="reclaim-right-scene-02-branch-1" style={{position:'relative',padding:'16px 24px',border:'5px solid '+COLORS.green,background:COLORS.green+'4D',display:'flex',flexDirection:'column',opacity:enter(46,72),translate:slide(46,72,'24px 0px')}}>
          <Watermark icon={<ShieldCheck size={140} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8,flexShrink:0}}>
            <ShieldCheck size={32} color={COLORS.green}/>
            <div style={{padding:'8px 18px',background:COLORS.green,color:COLORS.paper,fontSize:24,fontWeight:900 }}>未善意取得 → 可以取回</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:9,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Scale size={22} color={COLORS.green}/>} delay={58} color={COLORS.green} pad="8px 12px">第三人损失：受理前转让 → <span style={{fontWeight:900 }}>普通债权</span></Row>
            <Row icon={<Coins size={22} color={COLORS.green}/>} delay={70} color={COLORS.green} pad="8px 12px">受理后转让 → <span style={{fontWeight:900,color:COLORS.green }}>共益债务</span></Row>
          </div>
        </div>
      </div>
      <div style={{flexShrink:0,display:'grid',gap:9,border:'3px dashed '+COLORS.orange,background:COLORS.orange+'4D',padding:'13px 24px',opacity:enter(86,112)}}>
        <div style={{fontSize:22,fontWeight:900,color:'#7A5B12',flexShrink:0}}>毁损灭失（如火灾烧毁保管物）</div>
        <div style={{display:'flex',alignItems:'center',gap:14,flexWrap:'wrap'}}>
          <span style={{display:'inline-flex',alignItems:'center',gap:8,padding:'7px 14px',border:'3px solid '+COLORS.green,background:COLORS.paper,fontSize:20,fontWeight:800,opacity:enter(96,118)}}><ShieldCheck size={22} color={COLORS.green}/>可取回：保险金/赔偿金/代偿物<span style={{fontWeight:900}}>尚未交付</span>或<span style={{fontWeight:900}}>能与债务人财产区分</span></span>
          <span style={{display:'inline-flex',alignItems:'center',gap:8,padding:'7px 14px',border:'3px solid '+COLORS.red,background:COLORS.paper,fontSize:20,fontWeight:800,opacity:enter(104,126)}}><Ban size={22} color={COLORS.red}/>不可取回：已交付且<span style={{fontWeight:900}}>无法区分</span></span>
          <span style={{display:'inline-flex',alignItems:'center',gap:8,padding:'7px 14px',border:'3px solid '+COLORS.gold,background:COLORS.paper,fontSize:20,fontWeight:800,opacity:enter(112,134)}}><Coins size={22} color={COLORS.gold}/>损失：受理前毁损→普通债权；受理后→<span style={{fontWeight:900,color:COLORS.green }}>共益债务</span></span>
        </div>
      </div>
    </div>
  </Shell>;
};

export const ReclaimRight03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="11.3" title="在途货物的取回">
    <div data-layout="in-transit-3" data-visual-anchor="flow-path" data-visual-grammar="in-transit-claim,arrival-report-only" data-text-treatments="thin-underline,stamp,soft-highlight" data-focal-rule="reclaim-right-scene-03-rule" data-focal-channels="connector,motion,contrast" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:16}}>
      <div data-final-knowledge="reclaim-right-knowledge-3" style={{flexShrink:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <Truck size={40} color={COLORS.orange}/>
        <div style={{fontSize:26,fontWeight:900 }}>前提：受理时债务人<span style={{color:COLORS.orange }}>尚未收货</span>＋<span style={{color:COLORS.orange }}>未付清全部价款</span></div>
      </div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="reclaim-right-scene-03-claimed" style={{position:'relative',padding:'16px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.green,background:COLORS.green+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54),translate:slide(28,54,'0px 22px')}}>
          <Watermark icon={<Truck size={130} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:24,fontWeight:900,marginBottom:6,flexShrink:0}}><Truck size={30} color={COLORS.green}/>① 途中已主张取回</div>
          <div style={{display:'flex',flexDirection:'column',gap:9,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Truck size={22} color={COLORS.green}/>} delay={40} color={COLORS.green} pad="8px 12px">出卖人<span style={{fontWeight:900,color:COLORS.green }}>解除合同＋主张取回</span></Row>
            <Row icon={<ShieldCheck size={22} color={COLORS.green}/>} delay={52} color={COLORS.green} pad="8px 12px">未实现的 → 货到管理人后<span style={{fontWeight:900,color:COLORS.green }}>仍可取回</span></Row>
          </div>
        </div>
        <div data-final-knowledge="reclaim-right-scene-03-unclaimed" style={{position:'relative',padding:'16px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(44,70),translate:slide(44,70,'0px 22px')}}>
          <Watermark icon={<Ban size={130} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:24,fontWeight:900,marginBottom:6,flexShrink:0}}><Ban size={30} color={COLORS.red}/>② 途中未主张取回</div>
          <div style={{display:'flex',flexDirection:'column',gap:9,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Ban size={22} color={COLORS.red}/>} delay={56} color={COLORS.red} pad="8px 12px">货到管理人后<span style={{fontWeight:900,color:COLORS.red }}>无权取回</span></Row>
            <Row icon={<FileText size={22} color={COLORS.red}/>} delay={68} color={COLORS.red} pad="8px 12px">但可<span style={{fontWeight:900,color:COLORS.red }}>申报债权</span></Row>
          </div>
        </div>
        <div data-final-knowledge="reclaim-right-scene-03-pay" style={{position:'relative',padding:'16px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.gold,background:COLORS.gold+'4D',display:'flex',flexDirection:'column',opacity:enter(60,86),translate:slide(60,86,'0px 22px')}}>
          <Watermark icon={<Banknote size={130} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:24,fontWeight:900,marginBottom:6,flexShrink:0}}><Banknote size={30} color={COLORS.gold}/>③ 管理人的选择权</div>
          <div style={{display:'flex',flexDirection:'column',gap:9,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Banknote size={22} color={COLORS.gold}/>} delay={72} color={COLORS.gold} pad="8px 12px">管理人可<span style={{fontWeight:900,color:COLORS.gold }}>支付全部价款</span></Row>
            <Row icon={<Truck size={22} color={COLORS.gold}/>} delay={84} color={COLORS.gold} pad="8px 12px">＋<span style={{fontWeight:900 }}>请求交付</span>——对抗取回主张</Row>
          </div>
        </div>
      </div>
      <div style={{flexShrink:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.orange,background:COLORS.orange+'4D',padding:'13px 24px',opacity:enter(98,124)}}>
        <Landmark size={34} color={COLORS.orange}/>
        <div style={{fontSize:21,fontWeight:800,lineHeight:1.45 }}>判断：受理时乙公司<span style={{fontWeight:900 }}>既未收货也未付清全款</span> → 出卖人甲<span style={{fontWeight:900,color:COLORS.orange }}>仍可行使取回权</span></div>
      </div>
    </div>
  </Shell>;
};

export const ReclaimRight=()=> <AbsoluteFill>
  <TimelineSequence name="01-reclaim-right-scene-01" start={SCENES['reclaim-right-scene-01'].start} duration={SCENES['reclaim-right-scene-01'].duration}><ReclaimRight01Scene/></TimelineSequence>
  <TimelineSequence name="02-reclaim-right-scene-02" start={SCENES['reclaim-right-scene-02'].start} duration={SCENES['reclaim-right-scene-02'].duration}><ReclaimRight02Scene/></TimelineSequence>
  <TimelineSequence name="03-reclaim-right-scene-03" start={SCENES['reclaim-right-scene-03'].start} duration={SCENES['reclaim-right-scene-03'].duration}><ReclaimRight03Scene/></TimelineSequence>
</AbsoluteFill>;
