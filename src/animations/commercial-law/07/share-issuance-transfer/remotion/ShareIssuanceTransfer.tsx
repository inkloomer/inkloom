import type {ReactNode} from 'react';
import {BookOpen, ChartNoAxesColumn, Ticket, Lock, Clock3, CalendarClock, Landmark, PiggyBank, Scale, HandCoins, ScrollText, Users, Ban} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#EEF1F2', ink:'#232A33', blue:'#2B5F8F', orange:'#C2542B', gold:'#C9A23C', paper:'#FAFCFC'} as const;
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

export const ShareIssuanceTransfer01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="07.2" title="资本制 与 票面">
    <div data-layout="capital-system-duel-1" data-visual-anchor="comparison-axis" data-visual-grammar="statutory-vs-authorized,par-vs-nopar" data-text-treatments="label-block,thin-underline,soft-highlight" data-focal-rule="share-issuance-transfer-scene-01-rule" data-focal-channels="contrast,spatial,icon" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:14}}>
      <div data-final-knowledge="share-issuance-transfer-knowledge-1" style={{flexShrink:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <BookOpen size={40} color={COLORS.blue}/>
        <div style={{fontSize:27,fontWeight:900}}>股份发行：<span style={{color:COLORS.blue}}>法定资本制 / 授权资本制</span></div>
      </div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="share-issuance-transfer-scene-01-capital" style={{position:'relative',padding:'16px 24px',border:'4px solid '+COLORS.ink,background:COLORS.blue+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54)}}>
          <Watermark icon={<BookOpen size={150} color={COLORS.blue} strokeWidth={1.2}/>} color={COLORS.blue}/>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Landmark size={24} color={COLORS.blue}/>} delay={40} color={COLORS.blue} pad="10px 14px"><span style={{fontWeight:900,color:COLORS.blue}}>法定资本制</span>：设立时所有股份<span style={{fontWeight:900}}>一次性发行完毕</span></Row>
            <Row icon={<Scale size={24} color={COLORS.blue}/>} delay={52} color={COLORS.blue} pad="10px 14px">后续增资须召开<span style={{fontWeight:900}}>股东会</span>，履行增资程序</Row>
            <Row icon={<CalendarClock size={24} color={COLORS.blue}/>} delay={64} color={COLORS.blue} pad="10px 14px"><span style={{fontWeight:900,color:COLORS.blue}}>授权资本制</span>：章程或股东会授权，<span style={{fontWeight:900}}>董事会</span>分期发行</Row>
            <Row icon={<Scale size={24} color={COLORS.blue}/>} delay={74} color={COLORS.blue} pad="10px 14px"><span style={{background:COLORS.blue+'26',padding:'1px 8px',fontWeight:900}}>3年内</span>发行 ≤ 已发行股份的<span style={{background:COLORS.blue+'26',padding:'1px 8px',fontWeight:900}}>50%</span></Row>
            <Row icon={<Users size={24} color={COLORS.blue}/>} delay={84} color={COLORS.blue} pad="10px 14px">非货币出资须经<span style={{fontWeight:900}}>股东会决议</span>；董事会发行新股须全体董事<span style={{fontWeight:900}}>2/3以上</span></Row>
            <Row icon={<ScrollText size={24} color={COLORS.blue}/>} delay={94} color={COLORS.blue} pad="10px 14px">发行后注册资本变化 → 修改章程<span style={{fontWeight:900}}>无须股东会表决</span></Row>
          </div>
        </div>
        <div data-final-knowledge="share-issuance-transfer-scene-01-par" style={{position:'relative',padding:'16px 24px',border:'4px solid '+COLORS.ink,background:COLORS.gold+'4D',display:'flex',flexDirection:'column',opacity:enter(46,72)}}>
          <Watermark icon={<Ticket size={150} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:6,flexShrink:0}}>
            <Ticket size={34} color={COLORS.gold}/>
            <div style={{fontSize:25,fontWeight:900}}>面额股 / 无面额股</div>
            <div style={{fontSize:20,fontWeight:900,color:COLORS.orange}}>择一，可相互转换</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Ticket size={24} color={COLORS.gold}/>} delay={58} color={COLORS.gold} pad="10px 14px"><span style={{fontWeight:900,color:'#7A5B12'}}>面额股</span>：标明票面金额，一般<span style={{fontWeight:900}}>1元/股</span></Row>
            <Row icon={<HandCoins size={24} color={COLORS.gold}/>} delay={68} color={COLORS.gold} pad="10px 14px">可平价、溢价发行，溢价款计入<span style={{fontWeight:900,color:COLORS.blue}}>资本公积金</span></Row>
            <Row icon={<Ban size={24} color={COLORS.gold}/>} delay={78} color={COLORS.gold} pad="10px 14px"><span style={{fontWeight:900,color:COLORS.orange}}>不可折价发行</span>——发行价不得低于票面金额</Row>
            <Row icon={<Scale size={24} color={COLORS.gold}/>} delay={82} color={COLORS.gold} pad="10px 14px"><span style={{fontWeight:900,color:'#7A5B12'}}>无面额股</span>：只记载股份数量或比例；<span style={{fontWeight:900}}>灵活定价</span>，无平价折价溢价之分</Row>
            <Row icon={<PiggyBank size={24} color={COLORS.gold}/>} delay={94} color={COLORS.gold} pad="10px 14px">发行收入的<span style={{background:COLORS.blue+'26',padding:'1px 8px',fontWeight:900}}>1/2以上</span>计入注册资本，其余计入<span style={{fontWeight:900}}>资本公积金</span></Row>
          </div>
        </div>
      </div>
      <div style={{flexShrink:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.orange,background:COLORS.orange+'4D',padding:'13px 24px',opacity:enter(100,126)}}>
        <ChartNoAxesColumn size={36} color={COLORS.orange}/>
        <div style={{fontSize:21,fontWeight:800,lineHeight:1.45}}><span style={{fontWeight:900,color:COLORS.orange}}>类别股四类</span>：优先/劣后分配、表决权差异、转让受限、监督同权——<span style={{fontWeight:900,color:COLORS.orange}}>上市公司不得发行</span>；影响类别股股东权利的，须股东会＋类别股股东会<span style={{fontWeight:900}}>双重表决 2/3以上</span></div>
      </div>
    </div>
  </Shell>;
};

export const ShareIssuanceTransfer02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const clockProgress=interpolate(frame,[120,220],[0,1],CLAMP);
  return <Shell code="07.2" title="董监高与原始股东的转让限制">
    <div data-layout="restriction-clock-2" data-visual-anchor="timeline-gate" data-visual-grammar="one-year-lockup,quarter-annual-cap" data-text-treatments="label-block,stamp,external-negation" data-focal-rule="share-issuance-transfer-scene-02-rule" data-focal-channels="connector,motion,locator" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:14}}>
      <div data-final-knowledge="share-issuance-transfer-knowledge-2" style={{flexShrink:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <Clock3 size={40} color={COLORS.orange}/>
        <div style={{fontSize:27,fontWeight:900}}>三限口诀：<span style={{color:COLORS.orange}}>上市1年 · 离任半年 · 每年≤25%</span></div>
      </div>
      <div style={{flexShrink:0,position:'relative',height:40}}>
        <div style={{position:'absolute',left:40,width:interpolate(clockProgress,[0,1],[0,1680],CLAMP),top:15,height:8,background:COLORS.ink}}/>
        <div style={{position:'absolute',left:40,top:1,width:10,height:38,background:COLORS.ink}}/>
        <div style={{position:'absolute',left:1680,top:1,width:10,height:38,background:COLORS.ink}}/>
        <div data-stateful-source="share-issuance-transfer-restriction" style={{position:'absolute',left:interpolate(clockProgress,[0,1],[40,1670],CLAMP),top:-8,width:0,height:0,borderLeft:'14px solid transparent',borderRight:'14px solid transparent',borderBottom:'30px solid '+COLORS.orange,opacity:clockProgress>0.94?0:1,zIndex:4}}/>
      </div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="share-issuance-transfer-scene-02-gate-0" style={{position:'relative',padding:'16px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.blue,background:COLORS.blue+'4D',display:'flex',flexDirection:'column',opacity:enter(46,72)}}>
          <Watermark icon={<Lock size={130} color={COLORS.blue} strokeWidth={1.2}/>} color={COLORS.blue}/>
          <div style={{fontSize:25,fontWeight:900,marginBottom:8,flexShrink:0}}>① 上市之日起1年</div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Lock size={24} color={COLORS.blue}/>} delay={60} color={COLORS.blue} pad="9px 13px"><span style={{fontWeight:900}}>原始股东</span>（公开发行前已发行）不得转让</Row>
            <Row icon={<Users size={24} color={COLORS.blue}/>} delay={74} color={COLORS.blue} pad="9px 13px"><span style={{fontWeight:900}}>董监高</span>所持股份同样不得转让</Row>
          </div>
        </div>
        <div data-final-knowledge="share-issuance-transfer-scene-02-gate-1" style={{position:'relative',padding:'16px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.gold,background:COLORS.gold+'4D',display:'flex',flexDirection:'column',opacity:enter(62,88)}}>
          <Watermark icon={<CalendarClock size={130} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
          <div style={{fontSize:25,fontWeight:900,marginBottom:8,flexShrink:0}}>② 任职期间每年≤25%</div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<CalendarClock size={24} color={COLORS.gold}/>} delay={78} color={COLORS.gold} pad="9px 13px">每年转让 ≤ 所持本公司股份总数的<span style={{background:COLORS.blue+'26',padding:'1px 8px',fontWeight:900}}>25%</span></Row>
            <Row icon={<ScrollText size={24} color={COLORS.gold}/>} delay={92} color={COLORS.gold} pad="9px 13px">应向公司<span style={{fontWeight:900}}>申报</span>持股及变动情况</Row>
          </div>
        </div>
        <div data-final-knowledge="share-issuance-transfer-scene-02-gate-2" style={{position:'relative',padding:'16px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.orange,background:COLORS.orange+'4D',display:'flex',flexDirection:'column',opacity:enter(78,104)}}>
          <Watermark icon={<Clock3 size={130} color={COLORS.orange} strokeWidth={1.2}/>} color={COLORS.orange}/>
          <div style={{fontSize:25,fontWeight:900,marginBottom:8,flexShrink:0}}>③ 离职后半年内</div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Clock3 size={24} color={COLORS.orange}/>} delay={94} color={COLORS.orange} pad="9px 13px">不得转让所持本公司股份</Row>
            <Row icon={<Scale size={24} color={COLORS.orange}/>} delay={108} color={COLORS.orange} pad="9px 13px">章程可作其他限制——只能<span style={{fontWeight:900,color:COLORS.orange}}>严于</span>法律规定</Row>
          </div>
        </div>
      </div>
      <div data-final-knowledge="share-issuance-transfer-scene-02-pledge" style={{flexShrink:0,display:'flex',alignItems:'center',gap:18,border:'5px solid '+COLORS.orange,background:COLORS.orange+'4D',padding:'14px 26px',opacity:enter(112,138)}}>
        <Lock size={38} color={COLORS.orange}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.5}}>股份在限制转让期限内<span style={{fontWeight:900}}>出质</span>的，质权人<span style={{background:COLORS.orange+'24',padding:'1px 8px',fontWeight:900}}>不得在限制期内行使质权</span>——行使质权会<span style={{fontWeight:900}}>变相导致股份转让</span></div>
        <div data-stateful-terminal="share-issuance-transfer-restriction" style={{marginLeft:'auto',flexShrink:0,padding:'8px 18px',border:'3px solid '+COLORS.ink,background:COLORS.orange,color:COLORS.paper,fontSize:21,fontWeight:900,opacity:enter(150,172)}}>三限走完</div>
      </div>
    </div>
  </Shell>;
};

export const ShareIssuanceTransfer03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="07.2" title="回购限制 与 财务资助">
    <div data-layout="buyback-gates-3" data-visual-anchor="boundary" data-visual-grammar="buyback-exceptions,financial-aid-ban" data-text-treatments="soft-highlight,stamp,external-negation" data-focal-rule="share-issuance-transfer-scene-03-rule" data-focal-channels="enclosure,contrast,annotation" data-final-knowledge="share-issuance-transfer-knowledge-3" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:14}}>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'1.15fr 1fr',gap:20}}>
        <div data-final-knowledge="share-issuance-transfer-scene-03-buyback" style={{position:'relative',padding:'16px 24px',border:'5px solid '+COLORS.blue,background:COLORS.blue+'4D',display:'flex',flexDirection:'column',opacity:enter(26,52),translate:slide(26,52,'-24px 0px')}}>
          <Watermark icon={<Landmark size={150} color={COLORS.blue} strokeWidth={1.2}/>} color={COLORS.blue}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10,flexShrink:0}}>
            <Landmark size={36} color={COLORS.blue}/>
            <div style={{fontSize:25,fontWeight:900}}>回购限制：原则<span style={{color:COLORS.blue}}>禁止</span>＋六类例外</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:9,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Scale size={22} color={COLORS.blue}/>} delay={40} color={COLORS.blue} pad="7px 12px">① <span style={{fontWeight:900}}>减资</span>：股东会决议 → <span style={{fontWeight:900}}>10日内</span>注销</Row>
            <Row icon={<HandCoins size={22} color={COLORS.blue}/>} delay={52} color={COLORS.blue} pad="7px 12px">② 与<span style={{fontWeight:900}}>持有本公司股份的公司合并</span>：股东会 → 6个月内转让或注销</Row>
            <Row icon={<Users size={22} color={COLORS.blue}/>} delay={64} color={COLORS.blue} pad="7px 12px">③ <span style={{fontWeight:900}}>异议股东</span>要求回购：无需决议 → 6个月内</Row>
            <Row icon={<PiggyBank size={22} color={COLORS.blue}/>} delay={76} color={COLORS.blue} pad="7px 12px">④ <span style={{fontWeight:900}}>员工持股/股权激励</span>：章程或股东会授权，<span style={{fontWeight:900}}>2/3以上董事出席</span>的董事会决议</Row>
            <Row icon={<CalendarClock size={22} color={COLORS.blue}/>} delay={88} color={COLORS.blue} pad="7px 12px">④三项合计 ≤ 已发行股份<span style={{background:COLORS.blue+'26',padding:'1px 8px',fontWeight:900}}>10%</span>，<span style={{fontWeight:900}}>3年内</span>转让或注销；⑤债转股 ⑥维护公司价值——同④</Row>
          </div>
        </div>
        <div data-final-knowledge="share-issuance-transfer-scene-03-aid" style={{position:'relative',padding:'16px 24px',border:'5px solid '+COLORS.orange,background:COLORS.orange+'4D',display:'flex',flexDirection:'column',opacity:enter(44,70),translate:slide(44,70,'24px 0px')}}>
          <Watermark icon={<PiggyBank size={150} color={COLORS.orange} strokeWidth={1.2}/>} color={COLORS.orange}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10,flexShrink:0}}>
            <PiggyBank size={36} color={COLORS.orange}/>
            <div style={{fontSize:25,fontWeight:900}}>财务资助：禁止＋例外</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:9,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Ban size={22} color={COLORS.orange}/>} delay={58} color={COLORS.orange} pad="7px 12px">不得为他人取得本公司/母公司股份提供<span style={{fontWeight:900}}>赠与、借款、担保</span>等资助</Row>
            <Row icon={<Users size={22} color={COLORS.orange}/>} delay={70} color={COLORS.orange} pad="7px 12px">例外①：用于实施<span style={{fontWeight:900}}>员工持股计划</span></Row>
            <Row icon={<Scale size={22} color={COLORS.orange}/>} delay={82} color={COLORS.orange} pad="7px 12px">例外②：为公司利益，经<span style={{fontWeight:900}}>股东会/董事会</span>决议</Row>
            <Row icon={<HandCoins size={22} color={COLORS.orange}/>} delay={92} color={COLORS.orange} pad="7px 12px">需章程或股东会授权；累计 ≤ 已发行股本<span style={{background:COLORS.orange+'24',padding:'1px 8px',fontWeight:900}}>10%</span></Row>
            <Row icon={<HandCoins size={22} color={COLORS.orange}/>} delay={94} color={COLORS.orange} pad="7px 12px">董事会决议须全体董事<span style={{fontWeight:900}}>2/3以上</span>；违规致损 → 负有责任的董监高<span style={{fontWeight:900,color:COLORS.orange}}>赔偿</span></Row>
          </div>
        </div>
      </div>
      <div style={{flexShrink:0,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.ink,background:COLORS.gold+'4D',padding:'13px 24px',opacity:enter(100,126)}}>
        <div style={{padding:'8px 18px',border:'3px solid '+COLORS.orange,color:COLORS.orange,fontSize:21,fontWeight:900,transform:'rotate(-2deg)',background:COLORS.paper,flexShrink:0}}>自由转让原则</div>
        <div style={{fontSize:21,fontWeight:800,lineHeight:1.45}}>除章程另有规定外，股东转让股份以<span style={{fontWeight:900}}>自由转让</span>为原则——<span style={{fontWeight:900}}>无须通知</span>其他股东，其他股东也<span style={{fontWeight:900}}>没有优先购买权</span></div>
      </div>
    </div>
  </Shell>;
};

export const ShareIssuanceTransfer=()=> <AbsoluteFill>
  <TimelineSequence name="01-share-issuance-transfer-scene-01" start={SCENES['share-issuance-transfer-scene-01'].start} duration={SCENES['share-issuance-transfer-scene-01'].duration}><ShareIssuanceTransfer01Scene/></TimelineSequence>
  <TimelineSequence name="02-share-issuance-transfer-scene-02" start={SCENES['share-issuance-transfer-scene-02'].start} duration={SCENES['share-issuance-transfer-scene-02'].duration}><ShareIssuanceTransfer02Scene/></TimelineSequence>
  <TimelineSequence name="03-share-issuance-transfer-scene-03" start={SCENES['share-issuance-transfer-scene-03'].start} duration={SCENES['share-issuance-transfer-scene-03'].duration}><ShareIssuanceTransfer03Scene/></TimelineSequence>
</AbsoluteFill>;
