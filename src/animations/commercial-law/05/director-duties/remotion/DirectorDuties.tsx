import type {ReactNode} from 'react';
import {ShieldX, Ban, AlertOctagon, Clock3, Handshake, Scale, Coins, Briefcase, UserX, Gavel, HandCoins, FileX2, Factory, Building2, Users, Landmark} from 'lucide-react';
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

export const DirectorDuties01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="05.1" title="不能担任董监高的情形">
    <div data-layout="qualification-gate-1" data-visual-anchor="boundary" data-visual-grammar="disqualification-gates,role-election" data-text-treatments="label-block,external-negation,soft-highlight" data-focal-rule="director-duties-scene-01-rule" data-focal-channels="enclosure,contrast,annotation" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:16}}>
      <div data-final-knowledge="director-duties-knowledge-1" style={{flexShrink:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <ShieldX size={42} color={COLORS.purple}/>
        <div style={{fontSize:27,fontWeight:900}}>记忆口诀：<span style={{color:COLORS.purple}}>无限失信人</span> · <span style={{color:COLORS.purple}}>52经政犯</span> · <span style={{color:COLORS.purple}}>3年烂领导</span></div>
      </div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gridTemplateRows:'repeat(2,minmax(0,1fr))',gap:16}}>
        <div data-final-knowledge="director-duties-scene-01-gate-0" style={{position:'relative',padding:'14px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.purple,background:COLORS.purple+'4D',display:'flex',flexDirection:'column',opacity:enter(30,56),translate:slide(30,56,'0px 22px')}}>
          <Watermark icon={<UserX size={130} color={COLORS.purple} strokeWidth={1.2}/>} color={COLORS.purple}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:25,fontWeight:900,marginBottom:6,flexShrink:0}}><Ban size={32} color={COLORS.purple}/>① 无限</div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<UserX size={24} color={COLORS.purple}/>} delay={44} color={COLORS.purple}><span style={{fontWeight:900}}>无民事行为能力</span>人</Row>
            <Row icon={<UserX size={24} color={COLORS.purple}/>} delay={56} color={COLORS.purple}><span style={{fontWeight:900}}>限制民事行为能力</span>人</Row>
          </div>
        </div>
        <div data-final-knowledge="director-duties-scene-01-gate-1" style={{position:'relative',padding:'14px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.purple,background:COLORS.purple+'4D',display:'flex',flexDirection:'column',opacity:enter(46,72),translate:slide(46,72,'0px 22px')}}>
          <Watermark icon={<Gavel size={130} color={COLORS.purple} strokeWidth={1.2}/>} color={COLORS.purple}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:25,fontWeight:900,marginBottom:6,flexShrink:0}}><AlertOctagon size={32} color={COLORS.purple}/>② 52经政犯</div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Gavel size={24} color={COLORS.purple}/>} delay={60} color={COLORS.purple}>因<span style={{fontWeight:900,color:COLORS.purple}}>经济犯罪</span>被判刑，或因任一犯罪被<span style={{fontWeight:900,color:COLORS.purple}}>剥夺政治权利</span></Row>
            <Row icon={<Clock3 size={24} color={COLORS.purple}/>} delay={74} color={COLORS.purple}>执行期满未逾<span style={{background:COLORS.purple+'28',padding:'1px 8px',fontWeight:900}}>5年</span>；缓刑考验期满未逾<span style={{background:COLORS.purple+'28',padding:'1px 8px',fontWeight:900}}>2年</span></Row>
            <Row icon={<Clock3 size={24} color={COLORS.purple}/>} delay={88} color={COLORS.purple}>期限<span style={{fontWeight:900}}>从期满起算</span></Row>
          </div>
        </div>
        <div data-final-knowledge="director-duties-scene-01-gate-2" style={{position:'relative',padding:'14px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.purple,background:COLORS.purple+'4D',display:'flex',flexDirection:'column',opacity:enter(62,88),translate:slide(62,88,'0px 22px')}}>
          <Watermark icon={<Coins size={130} color={COLORS.purple} strokeWidth={1.2}/>} color={COLORS.purple}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:25,fontWeight:900,marginBottom:6,flexShrink:0}}><HandCoins size={32} color={COLORS.purple}/>③ 失信人</div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<HandCoins size={24} color={COLORS.purple}/>} delay={76} color={COLORS.purple}>大额债务<span style={{fontWeight:900}}>到期未清偿</span></Row>
            <Row icon={<Scale size={24} color={COLORS.purple}/>} delay={90} color={COLORS.purple}>被法院列为<span style={{background:COLORS.purple+'28',padding:'1px 8px',fontWeight:900}}>失信被执行人</span></Row>
            <Row icon={<FileX2 size={24} color={COLORS.purple}/>} delay={104} color={COLORS.purple}>仅有债务未清偿、<span style={{fontWeight:900}}>未被列为失信</span> → 仍可任职</Row>
          </div>
        </div>
        <div data-final-knowledge="director-duties-scene-01-gate-3" style={{position:'relative',padding:'14px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.purple,background:COLORS.purple+'4D',display:'flex',flexDirection:'column',opacity:enter(78,104),translate:slide(78,104,'0px 22px')}}>
          <Watermark icon={<Clock3 size={130} color={COLORS.purple} strokeWidth={1.2}/>} color={COLORS.purple}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:25,fontWeight:900,marginBottom:6,flexShrink:0}}><Clock3 size={32} color={COLORS.purple}/>④ 3年烂领导</div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Factory size={24} color={COLORS.purple}/>} delay={92} color={COLORS.purple}>经理、董事、厂长对公司<span style={{fontWeight:900}}>破产</span>负个人责任</Row>
            <Row icon={<Building2 size={24} color={COLORS.purple}/>} delay={106} color={COLORS.purple}>法代对公司<span style={{fontWeight:900}}>吊销、责令关闭</span>负个人责任</Row>
            <Row icon={<Clock3 size={24} color={COLORS.purple}/>} delay={120} color={COLORS.purple}>清算完结/吊销关闭未逾<span style={{background:COLORS.purple+'28',padding:'1px 8px',fontWeight:900}}>3年</span>——禁入</Row>
          </div>
        </div>
      </div>
      <div data-final-knowledge="director-duties-scene-01-note" style={{flexShrink:0,position:'relative',display:'grid',gap:10,border:'4px solid '+COLORS.green,background:COLORS.green+'4D',padding:'14px 24px',opacity:enter(108,134)}}>
        <Watermark icon={<Landmark size={110} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
        <Row icon={<Users size={24} color={COLORS.green}/>} delay={120} color={COLORS.green} pad="8px 14px">董事＝<span style={{fontWeight:900}}>股东会选举</span> · 监事＝<span style={{fontWeight:900}}>股东会或职工代表大会选举</span> · 高管＝<span style={{fontWeight:900}}>董事会聘任</span>；<span style={{fontWeight:900,color:COLORS.purple}}>董事、高管不得兼任监事</span></Row>
        <Row icon={<Landmark size={24} color={COLORS.green}/>} delay={134} color={COLORS.green} pad="8px 14px">法代辞任 → <span style={{fontWeight:900}}>视为同时辞去法定代表人</span>，公司应于<span style={{background:COLORS.green+'28',padding:'1px 8px',fontWeight:900}}>30日内</span>确定新法代；章程/股东会对其职权的限制<span style={{fontWeight:900,color:COLORS.purple}}>不得对抗善意相对人</span></Row>
      </div>
    </div>
  </Shell>;
};

export const DirectorDuties02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="05.1" title="绝对禁止 与 相对禁止">
    <div data-layout="duty-tiers-2" data-visual-anchor="comparison-axis" data-visual-grammar="absolute-vs-relative,recusal-quorum" data-text-treatments="stamp,thin-underline,soft-highlight" data-focal-rule="director-duties-scene-02-rule" data-focal-channels="contrast,enclosure,annotation" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:16}}>
      <div data-final-knowledge="director-duties-knowledge-2" style={{flexShrink:0,textAlign:'center',fontSize:25,fontWeight:900,letterSpacing:3,color:'#6E5C72',opacity:enter(12,36)}}><span style={{background:COLORS.gold+'40',padding:'2px 10px',color:COLORS.ink}}>实质董事</span>：不担任董事但实际执行公司事务的控股股东、实际控制人</div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="director-duties-scene-02-absolute" style={{position:'relative',padding:'18px 24px',border:'5px solid '+COLORS.purple,background:COLORS.purple+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54),translate:slide(28,54,'-24px 0px')}}>
          <Watermark icon={<Ban size={150} color={COLORS.purple} strokeWidth={1.2}/>} color={COLORS.purple}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12,flexShrink:0}}>
            <Ban size={38} color={COLORS.purple}/>
            <div style={{padding:'7px 18px',background:COLORS.purple,color:COLORS.paper,fontSize:26,fontWeight:900}}>绝对禁止</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:12,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Coins size={25} color={COLORS.purple}/>} delay={42} color={COLORS.purple} pad="12px 14px"><span style={{fontWeight:900}}>侵占、挪用</span>公司财产</Row>
            <Row icon={<HandCoins size={25} color={COLORS.purple}/>} delay={56} color={COLORS.purple} pad="12px 14px">公款私存、利用职权<span style={{fontWeight:900}}>贿赂或收受非法收入</span></Row>
            <Row icon={<FileX2 size={25} color={COLORS.purple}/>} delay={70} color={COLORS.purple} pad="12px 14px">将公司<span style={{fontWeight:900}}>佣金</span>据为己有、擅自披露<span style={{fontWeight:900}}>公司秘密</span></Row>
            <Row icon={<ShieldX size={25} color={COLORS.purple}/>} delay={84} color={COLORS.purple} pad="12px 14px">共同点：利用职权<span style={{fontWeight:900,color:COLORS.purple}}>牟取不正当利益</span></Row>
          </div>
        </div>
        <div data-final-knowledge="director-duties-scene-02-relative" style={{position:'relative',padding:'18px 24px',border:'5px solid '+COLORS.green,background:COLORS.green+'4D',display:'flex',flexDirection:'column',opacity:enter(46,72),translate:slide(46,72,'24px 0px')}}>
          <Watermark icon={<Handshake size={150} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12,flexShrink:0}}>
            <Handshake size={38} color={COLORS.green}/>
            <div style={{padding:'7px 18px',background:COLORS.green,color:COLORS.paper,fontSize:26,fontWeight:900}}>相对禁止</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:12,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Handshake size={25} color={COLORS.green}/>} delay={60} color={COLORS.green} pad="12px 14px"><span style={{fontWeight:900}}>自我交易</span>——董监高或其<span style={{fontWeight:900}}>关联方</span>（近亲属、控制企业等）与公司交易</Row>
            <Row icon={<Factory size={25} color={COLORS.green}/>} delay={74} color={COLORS.green} pad="12px 14px"><span style={{fontWeight:900}}>竞业禁止</span>——与公司经营<span style={{fontWeight:900}}>同类业务</span></Row>
            <Row icon={<Gavel size={25} color={COLORS.green}/>} delay={88} color={COLORS.green} pad="12px 14px">谋取<span style={{fontWeight:900}}>公司商业机会</span>——须<span style={{background:COLORS.green+'28',padding:'1px 8px',fontWeight:900}}>报告＋决议</span>双门槛</Row>
            <Row icon={<Scale size={25} color={COLORS.green}/>} delay={102} color={COLORS.green} pad="12px 14px">例外：<span style={{fontWeight:900}}>公司不能利用</span>该商业机会（如公司无建设资质）</Row>
          </div>
        </div>
      </div>
      <div data-final-knowledge="director-duties-scene-02-recusal" style={{flexShrink:0,position:'relative',display:'grid',gap:10,border:'4px solid '+COLORS.gold,background:COLORS.gold+'4D',padding:'14px 24px',opacity:enter(88,114)}}>
        <Watermark icon={<Scale size={110} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
        <Row icon={<Ban size={24} color={COLORS.gold}/>} delay={102} color={COLORS.gold} pad="8px 14px">关联董事<span style={{fontWeight:900,color:COLORS.purple}}>不得参与表决</span>，其表决权<span style={{fontWeight:900}}>不计入</span>表决权总数</Row>
        <Row icon={<Users size={24} color={COLORS.gold}/>} delay={116} color={COLORS.gold} pad="8px 14px">出席董事会的无关联关系董事<span style={{background:COLORS.gold+'40',padding:'1px 8px',fontWeight:900}}>不足3人</span> → 应将该事项提交<span style={{fontWeight:900,color:COLORS.purple}}>股东会审议</span>（股东会兜底）</Row>
      </div>
    </div>
  </Shell>;
};

export const DirectorDuties03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const flowProgress=interpolate(frame,[120,210],[0,1],CLAMP);
  return <Shell code="05.1" title="董监高的四条责任线">
    <div data-layout="liability-lines-3" data-visual-anchor="flow-path" data-visual-grammar="disgorgement-line,shadow-director-chain" data-text-treatments="label-block,stamp,soft-highlight" data-focal-rule="director-duties-scene-03-rule" data-focal-channels="connector,motion,annotation" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:14}}>
      <div data-final-knowledge="director-duties-knowledge-3" style={{flexShrink:0,fontSize:25,fontWeight:900,letterSpacing:4,color:'#6E5C72',opacity:enter(12,36)}}>违反义务 → <span style={{color:COLORS.purple}}>四线追责</span></div>
      <div style={{flex:'1 1 0',minHeight:0,display:'flex',flexDirection:'column',gap:14,paddingRight:330}}>
        <div data-final-knowledge="director-duties-scene-03-line-0" style={{position:'relative',flex:'1 1 0',minHeight:0,display:'flex',alignItems:'center',gap:18,padding:'12px 24px',border:'4px solid '+COLORS.ink,background:COLORS.gold+'4D',opacity:enter(28,54),translate:interpolate(frame,[28,54],['0px 20px','0px 0px'],CLAMP)}}>
          <Watermark icon={<Coins size={130} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
          <div style={{width:64,height:64,flexShrink:0,border:'4px solid '+COLORS.ink,background:COLORS.gold,color:COLORS.paper,display:'grid',placeItems:'center',opacity:enter(36,60)}}><Coins size={34} color={COLORS.paper}/></div>
          <div style={{display:'flex',flexDirection:'column',gap:8,flex:1,justifyContent:'center'}}>
            <div style={{fontSize:25,fontWeight:900}}>① 非法收入的归入权</div>
            <Row icon={<Coins size={24} color={COLORS.gold}/>} delay={42} color={COLORS.gold} pad="8px 14px">违反规定所得的<span style={{fontWeight:900}}>全部收入</span>应当<span style={{fontWeight:900,color:COLORS.purple}}>归公司所有</span></Row>
          </div>
        </div>
        <div data-final-knowledge="director-duties-scene-03-line-1" style={{position:'relative',flex:'1 1 0',minHeight:0,display:'flex',alignItems:'center',gap:18,padding:'12px 24px',border:'4px solid '+COLORS.ink,background:COLORS.green+'4D',opacity:enter(44,70),translate:interpolate(frame,[44,70],['0px 20px','0px 0px'],CLAMP)}}>
          <Watermark icon={<Scale size={130} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
          <div style={{width:64,height:64,flexShrink:0,border:'4px solid '+COLORS.ink,background:COLORS.green,color:COLORS.paper,display:'grid',placeItems:'center',opacity:enter(52,76)}}><Scale size={34} color={COLORS.paper}/></div>
          <div style={{display:'flex',flexDirection:'column',gap:8,flex:1,justifyContent:'center'}}>
            <div style={{fontSize:25,fontWeight:900}}>② 对公司的赔偿责任</div>
            <Row icon={<Scale size={24} color={COLORS.green}/>} delay={58} color={COLORS.green} pad="8px 14px">执行职务违反<span style={{fontWeight:900}}>法律、行政法规或章程</span>，给公司造成损失的，应当<span style={{fontWeight:900,color:COLORS.purple}}>赔偿</span></Row>
          </div>
        </div>
        <div data-final-knowledge="director-duties-scene-03-line-2" style={{position:'relative',flex:'1 1 0',minHeight:0,display:'flex',alignItems:'center',gap:18,padding:'12px 24px',border:'4px solid '+COLORS.ink,background:COLORS.purple+'4D',opacity:enter(60,86),translate:interpolate(frame,[60,86],['0px 20px','0px 0px'],CLAMP)}}>
          <Watermark icon={<Briefcase size={130} color={COLORS.purple} strokeWidth={1.2}/>} color={COLORS.purple}/>
          <div style={{width:64,height:64,flexShrink:0,border:'4px solid '+COLORS.ink,background:COLORS.purple,color:COLORS.paper,display:'grid',placeItems:'center',opacity:enter(68,92)}}><Briefcase size={34} color={COLORS.paper}/></div>
          <div style={{display:'flex',flexDirection:'column',gap:8,flex:1,justifyContent:'center'}}>
            <div style={{fontSize:25,fontWeight:900}}>③ 董高对外责任</div>
            <Row icon={<Users size={24} color={COLORS.purple}/>} delay={74} color={COLORS.purple} pad="8px 14px">执行职务给<span style={{fontWeight:900}}>他人</span>造成损害 → <span style={{fontWeight:900}}>公司</span>应当赔偿；董高存在<span style={{fontWeight:900,color:COLORS.purple}}>故意或重大过失</span>的，也应当赔偿</Row>
          </div>
        </div>
        <div data-final-knowledge="director-duties-scene-03-line-3" style={{position:'relative',flex:'1 1 0',minHeight:0,display:'flex',alignItems:'center',gap:18,padding:'12px 24px',border:'4px solid '+COLORS.ink,background:COLORS.purple+'4D',opacity:enter(76,102),translate:interpolate(frame,[76,102],['0px 20px','0px 0px'],CLAMP)}}>
          <Watermark icon={<AlertOctagon size={130} color={COLORS.purple} strokeWidth={1.2}/>} color={COLORS.purple}/>
          <div style={{width:64,height:64,flexShrink:0,border:'4px solid '+COLORS.ink,background:COLORS.ink,color:COLORS.paper,display:'grid',placeItems:'center',opacity:enter(84,108)}}><AlertOctagon size={34} color={COLORS.paper}/></div>
          <div style={{display:'flex',flexDirection:'column',gap:8,flex:1,justifyContent:'center'}}>
            <div style={{fontSize:25,fontWeight:900}}>④ 影子董事、高管连带</div>
            <Row icon={<AlertOctagon size={24} color={COLORS.purple}/>} delay={90} color={COLORS.purple} pad="8px 14px">控股股东、实际控制人<span style={{fontWeight:900}}>指示</span>董事、高管损害公司或股东利益 → 与该董事、高管承担<span style={{fontWeight:900,color:COLORS.purple}}>连带责任</span>（指使者担责）</Row>
          </div>
        </div>
      </div>
      <div data-stateful-source="director-duties-gains" style={{position:'absolute',left:interpolate(flowProgress,[0,1],[1450,1560],CLAMP),top:114,padding:'8px 16px',border:'3px solid '+COLORS.gold,background:COLORS.paper,color:'#7A5B12',fontSize:21,fontWeight:900,opacity:flowProgress>0.88?0:1,zIndex:4}}>收入</div>
      <div data-stateful-terminal="director-duties-gains" style={{position:'absolute',left:1600,top:114,padding:'8px 16px',border:'3px solid '+COLORS.ink,background:COLORS.gold,color:COLORS.paper,fontSize:20,fontWeight:900,opacity:enter(150,172)}}>归公司</div>
    </div>
  </Shell>;
};

export const DirectorDuties=()=> <AbsoluteFill>
  <TimelineSequence name="01-director-duties-scene-01" start={SCENES['director-duties-scene-01'].start} duration={SCENES['director-duties-scene-01'].duration}><DirectorDuties01Scene/></TimelineSequence>
  <TimelineSequence name="02-director-duties-scene-02" start={SCENES['director-duties-scene-02'].start} duration={SCENES['director-duties-scene-02'].duration}><DirectorDuties02Scene/></TimelineSequence>
  <TimelineSequence name="03-director-duties-scene-03" start={SCENES['director-duties-scene-03'].start} duration={SCENES['director-duties-scene-03'].duration}><DirectorDuties03Scene/></TimelineSequence>
</AbsoluteFill>;
