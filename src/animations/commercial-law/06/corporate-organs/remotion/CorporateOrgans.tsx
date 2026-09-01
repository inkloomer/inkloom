import type {ReactNode} from 'react';
import {Crown, Briefcase, UserRound, ShieldCheck, CalendarDays, Stamp, Megaphone, Users, Landmark, Handshake, ScrollText, Bell, Scale, Ban} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#E9EDE9', ink:'#232A26', green:'#3E6B4F', orange:'#C2542B', gold:'#C9A23C', paper:'#F6F9F6'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.green,color:COLORS.paper}}>{code}</div>
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

export const CorporateOrgans01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="06.1" title="四层机构与人事权">
    <div data-layout="organ-tower-1" data-visual-anchor="concept-icon" data-visual-grammar="organ-tower,personnel-transmission" data-text-treatments="label-block,thin-underline,soft-highlight" data-focal-rule="corporate-organs-scene-01-rule" data-focal-channels="spatial,connector,icon" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:16}}>
      <div data-final-knowledge="corporate-organs-knowledge-1" style={{flexShrink:0,fontSize:26,fontWeight:900,letterSpacing:4,color:'#5A6A63',opacity:enter(12,36)}}>权力 → 执行 → 经营 → 监督</div>
      <div style={{flex:'1 1 0',minHeight:0,display:'flex',gap:20}}>
        <div style={{flex:'1.25 1 0',minWidth:0,display:'flex',flexDirection:'column',gap:14}}>
          <div data-final-knowledge="corporate-organs-scene-01-organ-0" style={{position:'relative',flex:'1 1 0',minHeight:0,display:'flex',alignItems:'center',gap:16,padding:'12px 22px',border:'4px solid '+COLORS.ink,background:COLORS.gold+'4D',opacity:enter(28,54),translate:interpolate(frame,[28,54],['-30px 0px','0px 0px'],CLAMP)}}>
            <Watermark icon={<Crown size={110} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
            <Crown size={44} color={COLORS.gold} style={{flexShrink:0}}/>
            <div style={{width:190,flexShrink:0}}><div style={{fontSize:26,fontWeight:900}}>股东会</div><div style={{fontSize:21,fontWeight:800,color:'#7A5B12'}}>权力机构</div></div>
            <div style={{display:'flex',flexDirection:'column',gap:8,flex:1,justifyContent:'center'}}>
              <Row icon={<Users size={22} color={COLORS.gold}/>} delay={40} color={COLORS.gold} pad="7px 12px">决定<span style={{fontWeight:900}}>非职工董事、监事</span></Row>
              <Row icon={<Ban size={22} color={COLORS.gold}/>} delay={52} color={COLORS.gold} pad="7px 12px"><span style={{fontWeight:900}}>一人公司</span> → 无股东会</Row>
            </div>
          </div>
          <div data-final-knowledge="corporate-organs-scene-01-organ-1" style={{position:'relative',flex:'1 1 0',minHeight:0,display:'flex',alignItems:'center',gap:16,padding:'12px 22px',border:'4px solid '+COLORS.ink,background:COLORS.green+'4D',opacity:enter(44,70),translate:interpolate(frame,[44,70],['-30px 0px','0px 0px'],CLAMP)}}>
            <Watermark icon={<Users size={110} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
            <Users size={44} color={COLORS.green} style={{flexShrink:0}}/>
            <div style={{width:190,flexShrink:0}}><div style={{fontSize:26,fontWeight:900}}>董事会</div><div style={{fontSize:21,fontWeight:800,color:COLORS.green}}>执行机构·经营决策</div></div>
            <div style={{display:'flex',flexDirection:'column',gap:8,flex:1,justifyContent:'center'}}>
              <Row icon={<Briefcase size={22} color={COLORS.green}/>} delay={56} color={COLORS.green} pad="7px 12px">决定<span style={{fontWeight:900}}>经理和其他高管</span></Row>
              <Row icon={<Users size={22} color={COLORS.green}/>} delay={68} color={COLORS.green} pad="7px 12px">人少规模小 → 可不设，只设<span style={{fontWeight:900}}>1名董事</span>（可兼经理）</Row>
            </div>
          </div>
          <div data-final-knowledge="corporate-organs-scene-01-organ-2" style={{position:'relative',flex:'1 1 0',minHeight:0,display:'flex',alignItems:'center',gap:16,padding:'12px 22px',border:'4px solid '+COLORS.ink,background:COLORS.orange+'4D',opacity:enter(60,86),translate:interpolate(frame,[60,86],['-30px 0px','0px 0px'],CLAMP)}}>
            <Watermark icon={<Briefcase size={110} color={COLORS.orange} strokeWidth={1.2}/>} color={COLORS.orange}/>
            <Briefcase size={44} color={COLORS.orange} style={{flexShrink:0}}/>
            <div style={{width:190,flexShrink:0}}><div style={{fontSize:26,fontWeight:900}}>经理</div><div style={{fontSize:21,fontWeight:800,color:COLORS.orange}}>主持生产经营管理</div></div>
            <div style={{display:'flex',flexDirection:'column',gap:8,flex:1,justifyContent:'center'}}>
              <Row icon={<UserRound size={22} color={COLORS.orange}/>} delay={72} color={COLORS.orange} pad="7px 12px">向董事会<span style={{fontWeight:900}}>提名</span>其他高管</Row>
              <Row icon={<Scale size={22} color={COLORS.orange}/>} delay={84} color={COLORS.orange} pad="7px 12px">有限 → <span style={{fontWeight:900}}>非必设</span>；股份 → <span style={{fontWeight:900,color:COLORS.orange}}>必设</span></Row>
            </div>
          </div>
          <div data-final-knowledge="corporate-organs-scene-01-organ-3" style={{position:'relative',flex:'1 1 0',minHeight:0,display:'flex',alignItems:'center',gap:16,padding:'12px 22px',border:'4px solid '+COLORS.ink,background:COLORS.gold+'4D',opacity:enter(76,102),translate:interpolate(frame,[76,102],['-30px 0px','0px 0px'],CLAMP)}}>
            <Watermark icon={<ShieldCheck size={110} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
            <ShieldCheck size={44} color={COLORS.gold} style={{flexShrink:0}}/>
            <div style={{width:190,flexShrink:0}}><div style={{fontSize:26,fontWeight:900}}>监事会</div><div style={{fontSize:21,fontWeight:800,color:'#7A5B12'}}>监督机构</div></div>
            <div style={{display:'flex',flexDirection:'column',gap:8,flex:1,justifyContent:'center'}}>
              <Row icon={<ShieldCheck size={22} color={COLORS.gold}/>} delay={88} color={COLORS.gold} pad="7px 12px"><span style={{fontWeight:900}}>建议解任</span>董事、高管；可只设<span style={{fontWeight:900}}>1名监事</span></Row>
              <Row icon={<Landmark size={22} color={COLORS.gold}/>} delay={100} color={COLORS.gold} pad="7px 12px">董事会设<span style={{fontWeight:900}}>审计委员会</span>行使监事会职权 → 可不设监事会/监事</Row>
            </div>
          </div>
        </div>
        <div style={{flex:'1 1 0',minWidth:0,position:'relative',padding:'18px 24px',border:'5px solid '+COLORS.orange,background:COLORS.orange+'4D',display:'flex',flexDirection:'column',opacity:enter(92,120)}}>
          <Watermark icon={<Handshake size={140} color={COLORS.orange} strokeWidth={1.2}/>} color={COLORS.orange}/>
          <div style={{fontSize:26,fontWeight:900,marginBottom:12,color:COLORS.orange,flexShrink:0}}>人事权传动</div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Crown size={24} color={COLORS.orange}/>} delay={104} color={COLORS.orange} pad="9px 14px">股东会 → 决定<span style={{fontWeight:900}}>非职工董事、监事</span></Row>
            <Row icon={<Users size={24} color={COLORS.orange}/>} delay={116} color={COLORS.orange} pad="9px 14px">董事会 → 决定<span style={{fontWeight:900}}>经理和其他高管</span></Row>
            <Row icon={<Briefcase size={24} color={COLORS.orange}/>} delay={128} color={COLORS.orange} pad="9px 14px">经理 → 向董事会<span style={{fontWeight:900}}>提名</span>其他高管</Row>
            <Row icon={<ShieldCheck size={24} color={COLORS.orange}/>} delay={140} color={COLORS.orange} pad="9px 14px">监事会 → <span style={{fontWeight:900}}>建议解任</span>董事、高管</Row>
          </div>
          <div style={{fontSize:23,fontWeight:900,color:COLORS.orange,marginTop:10,borderTop:'3px solid '+COLORS.orange,paddingTop:10,flexShrink:0}}>董事、高管不得兼任监事</div>
        </div>
      </div>
    </div>
  </Shell>;
};

export const CorporateOrgans02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="06.1" title="组成 · 任期 · 解任辞任">
    <div data-layout="organ-clauses-2" data-visual-anchor="comparison-axis" data-visual-grammar="board-term-clause,recall-resign-clause" data-text-treatments="label-block,stamp,external-negation" data-focal-rule="corporate-organs-scene-02-rule" data-focal-channels="contrast,locator,annotation" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:16}}>
      <div data-final-knowledge="corporate-organs-knowledge-2" style={{flexShrink:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#5A6A63',opacity:enter(12,36)}}>董事会 / 监事会 人数均 <span style={{color:COLORS.orange}}>≥ 3</span></div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="corporate-organs-scene-02-board" style={{position:'relative',padding:'16px 24px',border:'5px solid '+COLORS.green,background:COLORS.green+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54),translate:slide(28,54,'-24px 0px')}}>
          <Watermark icon={<Users size={150} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
          <div style={{padding:'7px 18px',background:COLORS.green,color:COLORS.paper,fontSize:26,fontWeight:900,width:'fit-content',marginBottom:12,flexShrink:0}}>董事会</div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Users size={24} color={COLORS.green}/>} delay={40} color={COLORS.green} pad="10px 14px">职工代表：一般公司<span style={{fontWeight:900,color:COLORS.orange}}>不要求</span>；职工<span style={{fontWeight:900}}>≥300人</span>且无监事会职工代表的公司<span style={{fontWeight:900,color:COLORS.green}}>必须有</span></Row>
            <Row icon={<CalendarDays size={24} color={COLORS.green}/>} delay={54} color={COLORS.green} pad="10px 14px">任期：章定＋<span style={{background:COLORS.green+'28',padding:'1px 8px',fontWeight:900}}>≤3年</span></Row>
            <Row icon={<Handshake size={24} color={COLORS.green}/>} delay={68} color={COLORS.green} pad="10px 14px">会议：<span style={{fontWeight:900}}>全体董事过半数出席</span>＋一人一票＋<span style={{fontWeight:900}}>全体董事过半数通过</span></Row>
            <Row icon={<ScrollText size={24} color={COLORS.green}/>} delay={82} color={COLORS.green} pad="10px 14px">股份公司董事因故不能出席 → 可<span style={{fontWeight:900}}>委托其他董事</span>代为出席</Row>
          </div>
        </div>
        <div data-final-knowledge="corporate-organs-scene-02-supervisor" style={{position:'relative',padding:'16px 24px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'4D',display:'flex',flexDirection:'column',opacity:enter(46,72),translate:slide(46,72,'24px 0px')}}>
          <Watermark icon={<ShieldCheck size={150} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
          <div style={{padding:'7px 18px',background:'#7A5B12',color:COLORS.paper,fontSize:26,fontWeight:900,width:'fit-content',marginBottom:12,flexShrink:0}}>监事会</div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Users size={24} color={COLORS.gold}/>} delay={58} color={COLORS.gold} pad="10px 14px">职工代表：章定＋比例<span style={{background:COLORS.gold+'40',padding:'1px 8px',fontWeight:900}}>≥1/3</span></Row>
            <Row icon={<CalendarDays size={24} color={COLORS.gold}/>} delay={72} color={COLORS.gold} pad="10px 14px">任期：<span style={{fontWeight:900}}>固定3年</span></Row>
            <Row icon={<Handshake size={24} color={COLORS.gold}/>} delay={86} color={COLORS.gold} pad="10px 14px">会议：一人一票＋<span style={{fontWeight:900}}>全体监事过半数通过</span></Row>
          </div>
        </div>
      </div>
      <div data-final-knowledge="corporate-organs-scene-02-recall" style={{flexShrink:0,position:'relative',display:'grid',gap:10,border:'4px solid '+COLORS.orange,background:COLORS.orange+'4D',padding:'14px 24px',opacity:enter(90,116)}}>
        <Watermark icon={<Stamp size={110} color={COLORS.orange} strokeWidth={1.2}/>} color={COLORS.orange}/>
        <Row icon={<Stamp size={24} color={COLORS.orange}/>} delay={102} color={COLORS.orange} pad="8px 14px">解任：股东会<span style={{fontWeight:900}}>无因解除</span>，<span style={{fontWeight:900}}>决议作出之日</span>生效；无正当理由提前解任 → 可要求<span style={{fontWeight:900,color:COLORS.orange}}>公司赔偿</span></Row>
        <Row icon={<UserRound size={24} color={COLORS.orange}/>} delay={116} color={COLORS.orange} pad="8px 14px">辞任：可<span style={{fontWeight:900}}>单方辞职</span>，自公司<span style={{background:COLORS.orange+'24',padding:'1px 8px',fontWeight:900}}>收到通知之日</span>起生效；低于法定人数（不足3人）→ 新人就任前<span style={{fontWeight:900,color:COLORS.orange}}>应当继续履职</span>（任期届满未改选同）</Row>
      </div>
    </div>
  </Shell>;
};

export const CorporateOrgans03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const orderProgress=interpolate(frame,[110,230],[0,1],CLAMP);
  return <Shell code="06.1" title="股东会的召集与表决">
    <div data-layout="meeting-order-3" data-visual-anchor="flow-path" data-visual-grammar="convene-chain,special-two-thirds" data-text-treatments="thin-underline,soft-highlight,label-block" data-focal-rule="corporate-organs-scene-03-rule" data-focal-channels="connector,motion,enclosure" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:14}}>
      <div data-final-knowledge="corporate-organs-knowledge-3" style={{flexShrink:0,fontSize:26,fontWeight:900,letterSpacing:4,color:'#5A6A63',opacity:enter(12,36)}}>召集和主持（有先后）</div>
      <div style={{flex:'1.2 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="corporate-organs-scene-03-step-0" style={{position:'relative',padding:'16px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.green,background:COLORS.green+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54)}}>
          <Watermark icon={<Users size={130} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
          <div style={{fontSize:25,fontWeight:900,marginBottom:8,flexShrink:0}}>第一步：董事会召集</div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Users size={24} color={COLORS.green}/>} delay={42} color={COLORS.green} pad="9px 13px">主持顺序：<span style={{fontWeight:900}}>董事长 → 副董事长 → 过半数董事推举1名董事</span></Row>
          </div>
        </div>
        <div data-final-knowledge="corporate-organs-scene-03-step-1" style={{position:'relative',padding:'16px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.gold,background:COLORS.gold+'4D',display:'flex',flexDirection:'column',opacity:enter(44,70)}}>
          <Watermark icon={<ShieldCheck size={130} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
          <div style={{fontSize:25,fontWeight:900,marginBottom:8,flexShrink:0}}>第二步：监事会</div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<ShieldCheck size={24} color={COLORS.gold}/>} delay={58} color={COLORS.gold} pad="9px 13px">监事会<span style={{fontWeight:900}}>召集和主持</span></Row>
            <Row icon={<Bell size={24} color={COLORS.gold}/>} delay={70} color={COLORS.gold} pad="9px 13px">董事会<span style={{fontWeight:900}}>不召集</span>时才轮到</Row>
          </div>
        </div>
        <div data-final-knowledge="corporate-organs-scene-03-step-2" style={{position:'relative',padding:'16px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.orange,background:COLORS.orange+'4D',display:'flex',flexDirection:'column',opacity:enter(60,86)}}>
          <Watermark icon={<UserRound size={130} color={COLORS.orange} strokeWidth={1.2}/>} color={COLORS.orange}/>
          <div style={{fontSize:25,fontWeight:900,marginBottom:8,flexShrink:0}}>第三步：股东</div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<UserRound size={24} color={COLORS.orange}/>} delay={72} color={COLORS.orange} pad="9px 13px">有限：代表<span style={{fontWeight:900}}>1/10以上表决权</span>的股东</Row>
            <Row icon={<Users size={24} color={COLORS.orange}/>} delay={84} color={COLORS.orange} pad="9px 13px">股份：连续<span style={{fontWeight:900}}>90日</span>以上＋合计持股<span style={{fontWeight:900}}>10%以上</span></Row>
          </div>
        </div>
      </div>
      <div style={{flexShrink:0,position:'relative',height:34}}>
        <div style={{position:'absolute',left:0,right:0,top:14,height:6,background:COLORS.orange,opacity:enter(96,118)}}/>
        <div data-stateful-source="corporate-organs-convene-order" style={{position:'absolute',left:interpolate(orderProgress,[0,1],[0,1726],CLAMP),top:0,width:34,height:34,borderRadius:'50%',background:COLORS.green,border:'5px solid '+COLORS.ink,opacity:orderProgress>0.92?0:1,zIndex:4}}/>
      </div>
      <div style={{flexShrink:0,position:'relative',display:'grid',gap:10,border:'4px solid '+COLORS.gold,background:COLORS.gold+'4D',padding:'12px 24px',opacity:enter(98,124)}}>
        <Watermark icon={<CalendarDays size={100} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
        <Row icon={<CalendarDays size={24} color={COLORS.gold}/>} delay={104} color={COLORS.gold} pad="7px 13px">通知：有限＝章程/全体股东约定，至少提前<span style={{background:COLORS.gold+'40',padding:'1px 8px',fontWeight:900}}>15天</span>；股份＝年会提前<span style={{fontWeight:900}}>20天</span>·临时会提前<span style={{fontWeight:900}}>15天</span></Row>
        <Row icon={<Megaphone size={24} color={COLORS.gold}/>} delay={116} color={COLORS.gold} pad="7px 13px">临时会议（股份·<span style={{fontWeight:900}}>2个月内</span>召开）：董事人数不足、未弥补亏损达股本<span style={{fontWeight:900}}>1/3</span>、<span style={{fontWeight:900}}>10%</span>股东请求、董事会认为必要、监事会提议</Row>
      </div>
      <div data-final-knowledge="corporate-organs-scene-03-special" style={{flexShrink:0,display:'flex',alignItems:'center',gap:18,border:'5px solid '+COLORS.green,background:COLORS.green+'4D',padding:'14px 26px',opacity:enter(112,138)}}>
        <Megaphone size={38} color={COLORS.green}/>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.5}}>表决：一般事项<span style={{fontWeight:900}}>过半数</span>；<span style={{background:COLORS.green+'28',padding:'2px 8px',fontWeight:900}}>特殊事项2/3以上</span>——修改章程、增资、减资、合并、分立、解散、变更公司形式（章程资本合分散，变更形式2杠3）</div>
        <div data-stateful-terminal="corporate-organs-convene-order" style={{marginLeft:'auto',flexShrink:0,padding:'8px 18px',border:'3px solid '+COLORS.ink,background:COLORS.orange,color:COLORS.paper,fontSize:21,fontWeight:900,opacity:enter(150,172)}}>召集顺序走完</div>
      </div>
    </div>
  </Shell>;
};

export const CorporateOrgans=()=> <AbsoluteFill>
  <TimelineSequence name="01-corporate-organs-scene-01" start={SCENES['corporate-organs-scene-01'].start} duration={SCENES['corporate-organs-scene-01'].duration}><CorporateOrgans01Scene/></TimelineSequence>
  <TimelineSequence name="02-corporate-organs-scene-02" start={SCENES['corporate-organs-scene-02'].start} duration={SCENES['corporate-organs-scene-02'].duration}><CorporateOrgans02Scene/></TimelineSequence>
  <TimelineSequence name="03-corporate-organs-scene-03" start={SCENES['corporate-organs-scene-03'].start} duration={SCENES['corporate-organs-scene-03'].duration}><CorporateOrgans03Scene/></TimelineSequence>
</AbsoluteFill>;
