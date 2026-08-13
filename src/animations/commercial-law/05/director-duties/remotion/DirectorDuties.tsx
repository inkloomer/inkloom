import type {ReactNode} from 'react';
import {ShieldX, Ban, AlertOctagon, Clock3, Handshake, Scale, Coins, Briefcase} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#F2ECE1', ink:'#26222E', purple:'#7A3E65', green:'#3E6B4F', gold:'#C08A2D', paper:'#FAF4E9'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.purple,color:COLORS.paper}}>{code}</div>
    <div style={{position:'absolute',left:190,right:76,top:46,fontSize:46,fontWeight:900,lineHeight:1.12,borderBottom:'5px solid '+COLORS.green,paddingBottom:12}}>{title}</div>
    <div style={{position:'absolute',left:76,right:76,top:150,bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

export const DirectorDuties01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="05.1" title="不能担任董监高的情形">
    <div data-layout="qualification-gate-1" data-visual-anchor="boundary" data-visual-grammar="disqualification-gates,role-election" data-text-treatments="label-block,external-negation,soft-highlight" data-focal-rule="director-duties-scene-01-rule" data-focal-channels="enclosure,contrast,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="director-duties-knowledge-1" style={{position:'absolute',left:0,right:0,top:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <ShieldX size={42} color={COLORS.purple}/>
        <div style={{fontSize:28,fontWeight:900}}>记忆口诀：无限失信人 · 52经政犯 · 3年烂领导</div>
      </div>
      <div style={{position:'absolute',left:0,right:0,top:80,display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:18}}>
        <div data-final-knowledge="director-duties-scene-01-gate-0" style={{padding:'18px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.purple,background:COLORS.paper,minHeight:150,opacity:enter(30,56)}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8}}>
            <Ban size={36} color={COLORS.purple}/>
            <div style={{fontSize:26,fontWeight:900}}>① 无限</div>
          </div>
          <div style={{fontSize:23,fontWeight:700,lineHeight:1.5}}>无民事行为能力人或限制民事行为能力人</div>
        </div>
        <div data-final-knowledge="director-duties-scene-01-gate-1" style={{padding:'18px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.purple,background:COLORS.paper,minHeight:150,opacity:enter(46,72)}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8}}>
            <AlertOctagon size={36} color={COLORS.purple}/>
            <div style={{fontSize:26,fontWeight:900}}>② 52经政犯</div>
          </div>
          <div style={{fontSize:23,fontWeight:700,lineHeight:1.5}}>因<span style={{fontWeight:900}}>经济犯罪</span>被判刑，或因任一犯罪被剥夺政治权利：执行期满未逾<span style={{fontWeight:900,color:COLORS.purple}}>5年</span>；缓刑考验期满未逾<span style={{fontWeight:900,color:COLORS.purple}}>2年</span></div>
        </div>
        <div data-final-knowledge="director-duties-scene-01-gate-2" style={{padding:'18px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.purple,background:COLORS.paper,minHeight:150,opacity:enter(62,88)}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8}}>
            <AlertOctagon size={36} color={COLORS.purple}/>
            <div style={{fontSize:26,fontWeight:900}}>③ 失信人</div>
          </div>
          <div style={{fontSize:23,fontWeight:700,lineHeight:1.5}}>大额债务<span style={{fontWeight:900}}>到期未清偿</span>＋被法院列为失信被执行人——仅有债务未清偿还不够</div>
        </div>
        <div data-final-knowledge="director-duties-scene-01-gate-3" style={{padding:'18px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.purple,background:COLORS.paper,minHeight:150,opacity:enter(78,104)}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8}}>
            <Clock3 size={36} color={COLORS.purple}/>
            <div style={{fontSize:26,fontWeight:900}}>④ 3年烂领导</div>
          </div>
          <div style={{fontSize:23,fontWeight:700,lineHeight:1.5}}>对破产负有个人责任的经理、董事、厂长，或对吊销、责令关闭负个人责任的法代：未逾<span style={{fontWeight:900,color:COLORS.purple}}>3年</span></div>
        </div>
      </div>
      <div data-final-knowledge="director-duties-scene-01-note" style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:18,border:'4px solid '+COLORS.green,background:COLORS.paper,padding:'14px 26px',opacity:enter(104,130)}}>
        <Briefcase size={40} color={COLORS.green}/>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.5}}>董事由股东会选举、监事由股东会或职工代表大会选举、高管由董事会聘任——<span style={{fontWeight:900,color:COLORS.purple}}>董事、高管不得兼任监事</span>；担任法定代表人的董事或经理辞任的，视为同时辞去法定代表人</div>
      </div>
    </div>
  </Shell>;
};

export const DirectorDuties02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="05.1" title="绝对禁止 与 相对禁止">
    <div data-layout="duty-tiers-2" data-visual-anchor="comparison-axis" data-visual-grammar="absolute-vs-relative,recusal-quorum" data-text-treatments="stamp,thin-underline,soft-highlight" data-focal-rule="director-duties-scene-02-rule" data-focal-channels="contrast,enclosure,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="director-duties-knowledge-2" style={{position:'absolute',left:0,right:0,top:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#6E5C72',opacity:enter(12,36)}}>含实质董事：不担任董事但实际执行公司事务的控股股东、实际控制人</div>
      <div data-final-knowledge="director-duties-scene-02-absolute" style={{position:'absolute',left:24,top:76,width:830,padding:24,border:'5px solid '+COLORS.purple,background:COLORS.paper,opacity:enter(28,54),translate:slide(28,54,'-24px 0px')}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
          <Ban size={40} color={COLORS.purple}/>
          <div style={{padding:'8px 18px',background:COLORS.purple,color:COLORS.paper,fontSize:27,fontWeight:900}}>绝对禁止</div>
        </div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.5,padding:'12px 16px',background:COLORS.purple+'12'}}>利用职权牟取不正当利益：侵占、挪用公司财产，公款私存，利用职权贿赂或收受非法收入，将公司佣金据为己有，擅自披露公司秘密</div>
      </div>
      <div data-final-knowledge="director-duties-scene-02-relative" style={{position:'absolute',right:24,top:76,width:830,padding:24,border:'5px solid '+COLORS.green,background:COLORS.paper,opacity:enter(46,72),translate:slide(46,72,'24px 0px')}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
          <Handshake size={40} color={COLORS.green}/>
          <div style={{padding:'8px 18px',background:COLORS.green,color:COLORS.paper,fontSize:27,fontWeight:900}}>相对禁止</div>
        </div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.5,padding:'12px 16px',background:COLORS.green+'10'}}>自我交易（含近亲属、关联企业）、竞业（经营同类业务）、谋取公司商业机会——<span style={{background:COLORS.green+'28',padding:'2px 6px',fontWeight:900}}>报告＋董事会或股东会决议通过</span>方可为；公司不能利用该机会的除外</div>
      </div>
      <div data-final-knowledge="director-duties-scene-02-recusal" style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:18,border:'4px solid '+COLORS.ink,background:COLORS.paper,padding:'16px 26px',opacity:enter(76,104)}}>
        <Scale size={40} color={COLORS.gold}/>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.5}}>关联董事<span style={{fontWeight:900,color:COLORS.purple}}>不得参与表决</span>，表决权不计入总数；出席董事会的无关联董事<span style={{fontWeight:900}}>不足3人</span>的，应将该事项提交<span style={{background:COLORS.gold+'40',padding:'2px 6px',fontWeight:900}}>股东会审议</span></div>
        <div style={{marginLeft:'auto',padding:'8px 18px',border:'3px solid '+COLORS.ink,background:COLORS.gold,color:COLORS.paper,fontSize:21,fontWeight:900,transform:'rotate(-2deg)'}}>报告＋决议双门槛</div>
      </div>
    </div>
  </Shell>;
};

export const DirectorDuties03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const flowProgress=interpolate(frame,[120,210],[0,1],CLAMP);
  return <Shell code="05.1" title="董监高的四条责任线">
    <div data-layout="liability-lines-3" data-visual-anchor="flow-path" data-visual-grammar="disgorgement-line,shadow-director-chain" data-text-treatments="label-block,stamp,soft-highlight" data-focal-rule="director-duties-scene-03-rule" data-focal-channels="connector,motion,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="director-duties-knowledge-3" style={{position:'absolute',left:0,right:0,top:0,fontSize:26,fontWeight:900,letterSpacing:4,color:'#6E5C72',opacity:enter(12,36)}}>违反义务 → 四线追责</div>
      <div style={{position:'absolute',left:0,right:0,top:70,display:'grid',gap:16}}>
        <div data-final-knowledge="director-duties-scene-03-line-0" style={{display:'grid',gridTemplateColumns:'70px 1fr',gap:18,alignItems:'center',padding:'16px 24px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(28,54)}}>
          <div style={{width:70,height:70,border:'4px solid '+COLORS.ink,background:COLORS.gold,color:COLORS.paper,display:'grid',placeItems:'center'}}><Coins size={36} color={COLORS.paper}/></div>
          <div><div style={{fontSize:26,fontWeight:900,marginBottom:6}}>非法收入的归入权</div><div style={{fontSize:22,fontWeight:700,lineHeight:1.4}}>违反规定所得的全部收入应当归公司所有</div></div>
        </div>
        <div data-final-knowledge="director-duties-scene-03-line-1" style={{display:'grid',gridTemplateColumns:'70px 1fr',gap:18,alignItems:'center',padding:'16px 24px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(44,70)}}>
          <div style={{width:70,height:70,border:'4px solid '+COLORS.ink,background:COLORS.green,color:COLORS.paper,display:'grid',placeItems:'center'}}><Scale size={36} color={COLORS.paper}/></div>
          <div><div style={{fontSize:26,fontWeight:900,marginBottom:6}}>对公司的赔偿责任</div><div style={{fontSize:22,fontWeight:700,lineHeight:1.4}}>执行职务违反法律、行政法规或章程，给公司造成损失的，应当赔偿</div></div>
        </div>
        <div data-final-knowledge="director-duties-scene-03-line-2" style={{display:'grid',gridTemplateColumns:'70px 1fr',gap:18,alignItems:'center',padding:'16px 24px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(60,86)}}>
          <div style={{width:70,height:70,border:'4px solid '+COLORS.ink,background:COLORS.purple,color:COLORS.paper,display:'grid',placeItems:'center'}}><Briefcase size={36} color={COLORS.paper}/></div>
          <div><div style={{fontSize:26,fontWeight:900,marginBottom:6}}>董高对外责任</div><div style={{fontSize:22,fontWeight:700,lineHeight:1.4}}>执行职务给他人造成损害的，公司应当赔偿；董高存在故意或重大过失的，也应当赔偿</div></div>
        </div>
        <div data-final-knowledge="director-duties-scene-03-line-3" style={{display:'grid',gridTemplateColumns:'70px 1fr',gap:18,alignItems:'center',padding:'16px 24px',border:'5px solid '+COLORS.purple,background:COLORS.paper,opacity:enter(76,102)}}>
          <div style={{width:70,height:70,border:'4px solid '+COLORS.ink,background:COLORS.ink,color:COLORS.paper,display:'grid',placeItems:'center'}}><AlertOctagon size={36} color={COLORS.paper}/></div>
          <div><div style={{fontSize:26,fontWeight:900,marginBottom:6}}>影子董事、高管连带</div><div style={{fontSize:22,fontWeight:700,lineHeight:1.4}}>控股股东、实际控制人指示董事、高管从事损害公司或股东利益的行为——与该董事、高管承担<span style={{fontWeight:900,color:COLORS.purple}}>连带责任</span></div></div>
        </div>
      </div>
      <div data-stateful-source="director-duties-gains" style={{position:'absolute',left:1500,top:interpolate(flowProgress,[0,1],[110,130],CLAMP),padding:'8px 16px',border:'3px solid '+COLORS.gold,background:COLORS.paper,color:'#7A5B12',fontSize:21,fontWeight:900,opacity:flowProgress>0.85?0:1,zIndex:4}}>收入</div>
      <div data-stateful-terminal="director-duties-gains" style={{position:'absolute',left:1520,top:116,padding:'8px 16px',border:'3px solid '+COLORS.ink,background:COLORS.gold,color:COLORS.paper,fontSize:20,fontWeight:900,opacity:enter(150,172)}}>归公司</div>
    </div>
  </Shell>;
};

export const DirectorDuties=()=> <AbsoluteFill>
  <TimelineSequence name="01-director-duties-scene-01" start={SCENES['director-duties-scene-01'].start} duration={SCENES['director-duties-scene-01'].duration}><DirectorDuties01Scene/></TimelineSequence>
  <TimelineSequence name="02-director-duties-scene-02" start={SCENES['director-duties-scene-02'].start} duration={SCENES['director-duties-scene-02'].duration}><DirectorDuties02Scene/></TimelineSequence>
  <TimelineSequence name="03-director-duties-scene-03" start={SCENES['director-duties-scene-03'].start} duration={SCENES['director-duties-scene-03'].duration}><DirectorDuties03Scene/></TimelineSequence>
</AbsoluteFill>;
