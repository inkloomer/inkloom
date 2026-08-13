import type {ReactNode} from 'react';
import {Crown, Briefcase, UserRound, ShieldCheck, CalendarDays, Stamp, Megaphone, Users} from 'lucide-react';
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

export const CorporateOrgans01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="06.1" title="四层机构与人事权">
    <div data-layout="organ-tower-1" data-visual-anchor="concept-icon" data-visual-grammar="organ-tower,personnel-transmission" data-text-treatments="label-block,thin-underline,soft-highlight" data-focal-rule="corporate-organs-scene-01-rule" data-focal-channels="spatial,connector,icon" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="corporate-organs-knowledge-1" style={{position:'absolute',left:0,top:0,fontSize:26,fontWeight:900,letterSpacing:4,color:'#5A6A63',opacity:enter(12,36)}}>权力 → 执行 → 经营 → 监督</div>
      <div style={{position:'absolute',left:0,top:70,width:920,display:'grid',gap:14}}>
        <div data-final-knowledge="corporate-organs-scene-01-organ-0" style={{display:'grid',gridTemplateColumns:'64px 300px 1fr',gap:16,alignItems:'center',padding:'16px 24px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(28,54)}}>
          <Crown size={44} color={COLORS.gold}/>
          <div><div style={{fontSize:27,fontWeight:900}}>股东会</div><div style={{fontSize:21,fontWeight:800,color:COLORS.gold}}>权力机构</div></div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>决定非职工董事、监事；一人公司→无股东会</div>
        </div>
        <div data-final-knowledge="corporate-organs-scene-01-organ-1" style={{display:'grid',gridTemplateColumns:'64px 300px 1fr',gap:16,alignItems:'center',padding:'16px 24px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(44,70)}}>
          <Users size={44} color={COLORS.green}/>
          <div><div style={{fontSize:27,fontWeight:900}}>董事会</div><div style={{fontSize:21,fontWeight:800,color:COLORS.green}}>执行机构·日常经营决策</div></div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>决定经理和其他高管；股东人少规模小→可不设，只设1名董事（可兼经理）</div>
        </div>
        <div data-final-knowledge="corporate-organs-scene-01-organ-2" style={{display:'grid',gridTemplateColumns:'64px 300px 1fr',gap:16,alignItems:'center',padding:'16px 24px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(60,86)}}>
          <Briefcase size={44} color={COLORS.orange}/>
          <div><div style={{fontSize:27,fontWeight:900}}>经理</div><div style={{fontSize:21,fontWeight:800,color:COLORS.orange}}>主持生产经营管理</div></div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>向董事会提名其他高管；有限→非必设，股份→必设</div>
        </div>
        <div data-final-knowledge="corporate-organs-scene-01-organ-3" style={{display:'grid',gridTemplateColumns:'64px 300px 1fr',gap:16,alignItems:'center',padding:'16px 24px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(76,102)}}>
          <ShieldCheck size={44} color={COLORS.gold}/>
          <div><div style={{fontSize:27,fontWeight:900}}>监事会</div><div style={{fontSize:21,fontWeight:800,color:'#7A5B12'}}>监督机构</div></div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>建议解任董事、高管；可只设1名监事；设审计委员会行使监事会职权的可不设</div>
        </div>
      </div>
      <div style={{position:'absolute',right:0,top:70,width:760,padding:'20px 26px',border:'4px solid '+COLORS.orange,background:COLORS.paper,opacity:enter(92,120)}}>
        <div style={{fontSize:26,fontWeight:900,marginBottom:12,color:COLORS.orange}}>人事权传动</div>
        <div style={{display:'grid',gap:10}}>
          <div style={{fontSize:22,fontWeight:800,lineHeight:1.5}}>股东会 → 决定非职工董事、监事</div>
          <div style={{fontSize:22,fontWeight:800,lineHeight:1.5}}>董事会 → 决定经理和其他高管</div>
          <div style={{fontSize:22,fontWeight:800,lineHeight:1.5}}>经理 → 向董事会提名其他高管</div>
          <div style={{fontSize:22,fontWeight:800,lineHeight:1.5}}>监事会 → 建议解任董事、高管</div>
        </div>
        <div style={{fontSize:22,fontWeight:900,color:COLORS.orange,marginTop:12,borderTop:'3px solid '+COLORS.orange,paddingTop:10}}>董事、高管不得兼任监事</div>
      </div>
    </div>
  </Shell>;
};

export const CorporateOrgans02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="06.1" title="组成 · 任期 · 解任辞任">
    <div data-layout="organ-clauses-2" data-visual-anchor="comparison-axis" data-visual-grammar="board-term-clause,recall-resign-clause" data-text-treatments="label-block,stamp,external-negation" data-focal-rule="corporate-organs-scene-02-rule" data-focal-channels="contrast,locator,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="corporate-organs-knowledge-2" style={{position:'absolute',left:0,right:0,top:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#5A6A63',opacity:enter(12,36)}}>人数均 ≥ 3</div>
      <div data-final-knowledge="corporate-organs-scene-02-board" style={{position:'absolute',left:24,top:70,width:850,padding:24,border:'5px solid '+COLORS.green,background:COLORS.paper,opacity:enter(28,54),translate:slide(28,54,'-24px 0px')}}>
        <div style={{padding:'8px 18px',background:COLORS.green,color:COLORS.paper,fontSize:27,fontWeight:900,width:'fit-content',marginBottom:12}}>董事会</div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55,display:'flex',alignItems:'center',gap:10}}>
          <div style={{width:26,height:26,border:'3px solid '+COLORS.orange,position:'relative',flexShrink:0}}>
            <div style={{position:'absolute',left:10,top:3,width:3,height:16,background:COLORS.orange,transform:'rotate(45deg)'}}/>
            <div style={{position:'absolute',left:10,top:3,width:3,height:16,background:COLORS.orange,transform:'rotate(-45deg)'}}/>
          </div>
          <div>职工代表：一般公司<span style={{fontWeight:900,color:COLORS.orange}}>不要求</span>；职工≥300人且无监事会职工代表的公司<span style={{fontWeight:900}}>必须有</span></div>
        </div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55}}>任期：章定＋<span style={{background:COLORS.green+'26',padding:'2px 6px',fontWeight:900}}>≤3年</span></div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55}}>会议：全体董事过半数出席＋一人一票＋全体董事过半数通过；股份公司董事可委托其他董事代为出席</div>
      </div>
      <div data-final-knowledge="corporate-organs-scene-02-supervisor" style={{position:'absolute',right:24,top:70,width:850,padding:24,border:'5px solid '+COLORS.gold,background:COLORS.paper,opacity:enter(46,72),translate:slide(46,72,'24px 0px')}}>
        <div style={{padding:'8px 18px',background:'#7A5B12',color:COLORS.paper,fontSize:27,fontWeight:900,width:'fit-content',marginBottom:12}}>监事会</div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55}}>职工代表：章定＋比例<span style={{background:COLORS.gold+'40',padding:'2px 6px',fontWeight:900}}>≥1/3</span></div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55}}>任期：固定<span style={{fontWeight:900}}>3年</span></div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55}}>会议：一人一票＋全体监事过半数通过</div>
      </div>
      <div data-final-knowledge="corporate-organs-scene-02-recall" style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:18,border:'4px solid '+COLORS.orange,background:COLORS.paper,padding:'16px 26px',opacity:enter(76,104)}}>
        <Stamp size={40} color={COLORS.orange}/>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.5}}>解任：股东会<span style={{fontWeight:900}}>无因解除</span>，决议作出之日生效；无正当理由提前解任的，可要求公司赔偿。辞任：可单方辞职，自公司<span style={{background:COLORS.orange+'24',padding:'2px 6px',fontWeight:900}}>收到通知之日</span>起生效——低于法定人数（不足3人）的，在新人就任前<span style={{fontWeight:900}}>应当继续履职</span></div>
      </div>
    </div>
  </Shell>;
};

export const CorporateOrgans03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const orderProgress=interpolate(frame,[110,230],[0,1],CLAMP);
  return <Shell code="06.1" title="股东会的召集与表决">
    <div data-layout="meeting-order-3" data-visual-anchor="flow-path" data-visual-grammar="convene-chain,special-two-thirds" data-text-treatments="thin-underline,soft-highlight,label-block" data-focal-rule="corporate-organs-scene-03-rule" data-focal-channels="connector,motion,enclosure" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="corporate-organs-knowledge-3" style={{position:'absolute',left:0,right:0,top:0,fontSize:26,fontWeight:900,letterSpacing:4,color:'#5A6A63',opacity:enter(12,36)}}>召集和主持（有先后）</div>
      <div style={{position:'absolute',left:0,right:0,top:70,display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="corporate-organs-scene-03-step-0" style={{padding:'18px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.green,background:COLORS.paper,minHeight:180,opacity:enter(28,54)}}>
          <div style={{fontSize:26,fontWeight:900,marginBottom:8}}>第一步：董事会召集</div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>主持顺序：董事长→副董事长→过半数董事推举1名董事</div>
        </div>
        <div data-final-knowledge="corporate-organs-scene-03-step-1" style={{padding:'18px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.gold,background:COLORS.paper,minHeight:180,opacity:enter(44,70)}}>
          <div style={{fontSize:26,fontWeight:900,marginBottom:8}}>第二步：监事会</div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>监事会召集和主持</div>
        </div>
        <div data-final-knowledge="corporate-organs-scene-03-step-2" style={{padding:'18px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.orange,background:COLORS.paper,minHeight:180,opacity:enter(60,86)}}>
          <div style={{fontSize:26,fontWeight:900,marginBottom:8}}>第三步：股东</div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>有限：代表<span style={{fontWeight:900}}>1/10以上表决权</span>的股东；股份：连续<span style={{fontWeight:900}}>90日</span>以上单独或合计持股<span style={{fontWeight:900}}>10%以上</span>的股东</div>
        </div>
      </div>
      <div style={{position:'absolute',left:0,top:300,width:interpolate(orderProgress,[0,1],[0,1768],CLAMP),height:6,background:COLORS.orange,opacity:enter(110,132)}}/>
      <div data-stateful-source="corporate-organs-convene-order" style={{position:'absolute',left:interpolate(orderProgress,[0,1],[0,1730],CLAMP),top:283,width:42,height:42,borderRadius:'50%',background:COLORS.green,border:'5px solid '+COLORS.ink,opacity:orderProgress>0.92?0:1,zIndex:4}}/>
      <div data-final-knowledge="corporate-organs-scene-03-special" style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:18,border:'5px solid '+COLORS.green,background:COLORS.paper,padding:'16px 26px',opacity:enter(100,128)}}>
        <Megaphone size={40} color={COLORS.green}/>
        <div style={{fontSize:24,fontWeight:800,lineHeight:1.5}}>表决：一般事项<span style={{fontWeight:900}}>过半数</span>；<span style={{background:COLORS.green+'26',padding:'2px 8px',fontWeight:900}}>特殊事项2/3以上</span>——修改章程、增资、减资、合并、分立、解散、变更公司形式（章程资本合分散，变更形式2杠3）</div>
        <div data-stateful-terminal="corporate-organs-convene-order" style={{marginLeft:'auto',padding:'8px 18px',border:'3px solid '+COLORS.ink,background:COLORS.orange,color:COLORS.paper,fontSize:21,fontWeight:900,opacity:enter(150,172)}}>召集顺序走完</div>
      </div>
      <div style={{position:'absolute',left:0,top:340,width:0,height:0,opacity:0}}/>
    </div>
  </Shell>;
};

export const CorporateOrgans=()=> <AbsoluteFill>
  <TimelineSequence name="01-corporate-organs-scene-01" start={SCENES['corporate-organs-scene-01'].start} duration={SCENES['corporate-organs-scene-01'].duration}><CorporateOrgans01Scene/></TimelineSequence>
  <TimelineSequence name="02-corporate-organs-scene-02" start={SCENES['corporate-organs-scene-02'].start} duration={SCENES['corporate-organs-scene-02'].duration}><CorporateOrgans02Scene/></TimelineSequence>
  <TimelineSequence name="03-corporate-organs-scene-03" start={SCENES['corporate-organs-scene-03'].start} duration={SCENES['corporate-organs-scene-03'].duration}><CorporateOrgans03Scene/></TimelineSequence>
</AbsoluteFill>;
