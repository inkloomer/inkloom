import type {ReactNode} from 'react';
import {Users, Crown, ShieldCheck, Gavel, Landmark, TrendingUp, Building2, FileText, Scale, Ban, ScrollText, Stamp, Briefcase, Banknote} from 'lucide-react';
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

export const CreditorsMeeting01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="10.2" title="三机构：类比公司三会">
    <div data-layout="organ-mirror-1" data-visual-anchor="comparison-axis" data-visual-grammar="three-organ-mirror,worker-union-seat" data-text-treatments="label-block,soft-highlight,thin-underline" data-focal-rule="creditors-meeting-scene-01-rule" data-focal-channels="contrast,spatial,icon" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:14}}>
      <div data-final-knowledge="creditors-meeting-knowledge-1" style={{flexShrink:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#6E6757',opacity:enter(12,36)}}>债权人会议 = 股东会 · 管理人 = 董事会 · 债委会 = 监事会</div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="creditors-meeting-scene-01-meeting" style={{position:'relative',padding:'16px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.purple,background:COLORS.purple+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54),translate:slide(28,54,'0px 22px')}}>
          <Watermark icon={<Users size={130} color={COLORS.purple} strokeWidth={1.2}/>} color={COLORS.purple}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:24,fontWeight:900,marginBottom:6,flexShrink:0}}><Users size={30} color={COLORS.purple}/>债权人会议</div>
          <div style={{fontSize:20,fontWeight:900,color:COLORS.purple,marginBottom:6,flexShrink:0}}>＝ 决议机构（类比股东会）</div>
          <div style={{display:'flex',flexDirection:'column',gap:8,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Users size={22} color={COLORS.purple}/>} delay={40} color={COLORS.purple} pad="7px 12px">依法申报债权的<span style={{fontWeight:900}}>债权人</span>组成</Row>
            <Row icon={<Briefcase size={22} color={COLORS.purple}/>} delay={52} color={COLORS.purple} pad="7px 12px">应有<span style={{fontWeight:900}}>债务人职工和工会代表</span>参加</Row>
          </div>
        </div>
        <div data-final-knowledge="creditors-meeting-scene-01-manager" style={{position:'relative',padding:'16px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.green,background:COLORS.green+'4D',display:'flex',flexDirection:'column',opacity:enter(44,70),translate:slide(44,70,'0px 22px')}}>
          <Watermark icon={<Crown size={130} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:24,fontWeight:900,marginBottom:6,flexShrink:0}}><Crown size={30} color={COLORS.green}/>破产管理人</div>
          <div style={{fontSize:20,fontWeight:900,color:COLORS.green,marginBottom:6,flexShrink:0}}>＝ 执行机构·日常决策（类比董事会）</div>
          <div style={{display:'flex',flexDirection:'column',gap:8,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<FileText size={22} color={COLORS.green}/>} delay={56} color={COLORS.green} pad="7px 12px">向债权人会议提交<span style={{fontWeight:900}}>重大方案</span>表决</Row>
            <Row icon={<Crown size={22} color={COLORS.green}/>} delay={68} color={COLORS.green} pad="7px 12px">表决后<span style={{fontWeight:900}}>交付执行</span>，并向其<span style={{fontWeight:900,color:COLORS.green}}>报告</span></Row>
          </div>
        </div>
        <div data-final-knowledge="creditors-meeting-scene-01-committee" style={{position:'relative',padding:'16px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.gold,background:COLORS.gold+'4D',display:'flex',flexDirection:'column',opacity:enter(60,86),translate:slide(60,86,'0px 22px')}}>
          <Watermark icon={<ShieldCheck size={130} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:24,fontWeight:900,marginBottom:6,flexShrink:0}}><ShieldCheck size={30} color={COLORS.gold}/>债权人委员会</div>
          <div style={{fontSize:20,fontWeight:900,color:'#7A5B12',marginBottom:6,flexShrink:0}}>＝ 监督机构（类比监事会）</div>
          <div style={{display:'flex',flexDirection:'column',gap:8,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Users size={22} color={COLORS.gold}/>} delay={72} color={COLORS.gold} pad="7px 12px">债权人代表＋<span style={{fontWeight:900,color:COLORS.gold}}>1名职工或工会代表</span>，成员<span style={{fontWeight:900}}>≤9人</span></Row>
            <Row icon={<ShieldCheck size={22} color={COLORS.gold}/>} delay={84} color={COLORS.gold} pad="7px 12px">对管理人的<span style={{fontWeight:900,color:COLORS.gold }}>处分行为监督</span></Row>
          </div>
        </div>
      </div>
      <div style={{flexShrink:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.red,background:COLORS.red+'4D',padding:'13px 24px',opacity:enter(98,124)}}>
        <Ban size={34} color={COLORS.red}/>
        <div style={{fontSize:21,fontWeight:800,lineHeight:1.45}}>易错：债委会<span style={{fontWeight:900,color:COLORS.red }}>必须</span>有一名债务人的<span style={{fontWeight:900 }}>职工代表或工会代表</span>——不设职工代表的说法错误</div>
      </div>
    </div>
  </Shell>;
};

export const CreditorsMeeting02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="10.2" title="债权人会议的职权与表决">
    <div data-layout="meeting-powers-2" data-visual-anchor="boundary" data-visual-grammar="meeting-powers,voting-threshold" data-text-treatments="stamp,soft-highlight,label-block" data-focal-rule="creditors-meeting-scene-02-rule" data-focal-channels="enclosure,annotation,contrast" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:16}}>
      <div data-final-knowledge="creditors-meeting-knowledge-2" style={{flexShrink:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#6E6757',opacity:enter(12,36)}}>申报期满后 <span style={{color:COLORS.purple}}>15日内</span> 召开第一次债权人会议</div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'1.2fr 1fr',gap:20}}>
        <div data-final-knowledge="creditors-meeting-scene-02-powers" style={{position:'relative',padding:'16px 24px',border:'5px solid '+COLORS.purple,background:COLORS.purple+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54),translate:slide(28,54,'-24px 0px')}}>
          <Watermark icon={<Gavel size={150} color={COLORS.purple} strokeWidth={1.2}/>} color={COLORS.purple}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8,flexShrink:0}}>
            <Gavel size={32} color={COLORS.purple}/>
            <div style={{fontSize:24,fontWeight:900}}>债权人会议职权</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:8,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Scale size={22} color={COLORS.purple}/>} delay={40} color={COLORS.purple} pad="8px 12px"><span style={{fontWeight:900,color:COLORS.purple}}>核查债权</span></Row>
            <Row icon={<Users size={22} color={COLORS.purple}/>} delay={50} color={COLORS.purple} pad="8px 12px">选任和更换<span style={{fontWeight:900}}>债委会成员</span></Row>
            <Row icon={<FileText size={22} color={COLORS.purple}/>} delay={60} color={COLORS.purple} pad="8px 12px">通过重大方案（<span style={{fontWeight:900}}>重整计划、和解协议</span>等）</Row>
            <Row icon={<ShieldCheck size={22} color={COLORS.purple}/>} delay={70} color={COLORS.purple} pad="8px 12px">监督管理人、申请法院<span style={{fontWeight:900 }}>更换管理人</span>、审查其费用</Row>
            <Row icon={<TrendingUp size={22} color={COLORS.purple}/>} delay={80} color={COLORS.purple} pad="8px 12px">决定<span style={{fontWeight:900}}>继续或停止营业</span>——必要时可授权债委会</Row>
          </div>
        </div>
        <div data-final-knowledge="creditors-meeting-scene-02-vote" style={{position:'relative',padding:'16px 24px',border:'5px solid '+COLORS.green,background:COLORS.green+'4D',display:'flex',flexDirection:'column',opacity:enter(46,72),translate:slide(46,72,'24px 0px')}}>
          <Watermark icon={<Stamp size={150} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8,flexShrink:0}}>
            <Stamp size={32} color={COLORS.green}/>
            <div style={{fontSize:24,fontWeight:900}}>决议规则（一般事项）</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Users size={24} color={COLORS.green}/>} delay={58} color={COLORS.green} pad="10px 13px">出席<span style={{background:COLORS.green+'28',padding:'1px 8px',fontWeight:900}}>过半数</span>同意</Row>
            <Row icon={<Banknote size={24} color={COLORS.green}/>} delay={72} color={COLORS.green} pad="10px 13px">且占<span style={{fontWeight:900}}>无财产担保债权总额</span>的<span style={{background:COLORS.green+'28',padding:'1px 8px',fontWeight:900}}>1/2以上</span></Row>
            <Row icon={<FileText size={24} color={COLORS.green}/>} delay={86} color={COLORS.green} pad="10px 13px"><span style={{fontWeight:900}}>特殊事项</span>（重整计划等）——详见重整专题</Row>
          </div>
        </div>
      </div>
    </div>
  </Shell>;
};

export const CreditorsMeeting03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const orderProgress=interpolate(frame,[110,230],[0,1],CLAMP);
  return <Shell code="10.2" title="重大财产处分的流程">
    <div data-layout="disposal-pipeline-3" data-visual-anchor="flow-path" data-visual-grammar="disposal-four-steps,pre-meeting-court-license" data-text-treatments="thin-underline,stamp,soft-highlight" data-focal-rule="creditors-meeting-scene-03-rule" data-focal-channels="connector,motion,enclosure" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:14}}>
      <div data-final-knowledge="creditors-meeting-knowledge-3" style={{flexShrink:0,fontSize:26,fontWeight:900,letterSpacing:4,color:'#6E6757',opacity:enter(12,36)}}>管理人拟订 → 债权人会议表决 → 报告债委会 → 执行</div>
      <div style={{flex:'1 1 0',minHeight:0,display:'flex',flexDirection:'column',gap:12,paddingLeft:60,position:'relative'}}>
        <div data-final-knowledge="creditors-meeting-scene-03-step-0" style={{position:'relative',flex:'1 1 0',minHeight:0,display:'flex',alignItems:'center',gap:16,padding:'10px 20px',border:'4px solid '+COLORS.ink,background:COLORS.purple+'4D',opacity:enter(28,54)}}>
          <Watermark icon={<FileText size={110} color={COLORS.purple} strokeWidth={1.2}/>} color={COLORS.purple}/>
          <div style={{width:56,height:56,flexShrink:0,border:'4px solid '+COLORS.ink,background:COLORS.purple,color:COLORS.paper,display:'grid',placeItems:'center'}}><FileText size={28} color={COLORS.paper}/></div>
          <div style={{display:'flex',flexDirection:'column',gap:6,flex:1,justifyContent:'center'}}>
            <div style={{fontSize:23,fontWeight:900}}>① 管理人拟订<span style={{fontWeight:900,color:COLORS.purple }}>财产管理或变价方案</span></div>
            <Row icon={<FileText size={22} color={COLORS.purple}/>} delay={40} color={COLORS.purple} pad="6px 12px">提交<span style={{fontWeight:900}}>债权人会议表决</span></Row>
          </div>
        </div>
        <div data-final-knowledge="creditors-meeting-scene-03-step-1" style={{position:'relative',flex:'1.15 1 0',minHeight:0,display:'flex',alignItems:'center',gap:16,padding:'10px 20px',border:'4px solid '+COLORS.ink,background:COLORS.green+'4D',opacity:enter(48,74)}}>
          <Watermark icon={<Stamp size={110} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
          <div style={{width:56,height:56,flexShrink:0,border:'4px solid '+COLORS.ink,background:COLORS.green,color:COLORS.paper,display:'grid',placeItems:'center'}}><Stamp size={28} color={COLORS.paper}/></div>
          <div style={{display:'flex',flexDirection:'column',gap:6,flex:1,justifyContent:'center'}}>
            <div style={{fontSize:23,fontWeight:900}}>② 表决通过 → 提前<span style={{fontWeight:900,color:COLORS.green}}>10日书面报告债委会</span>后处分</div>
            <div style={{display:'grid',gap:6}}>
              <Row icon={<Ban size={22} color={COLORS.red}/>} delay={62} color={COLORS.red} pad="6px 12px"><span style={{fontWeight:900,color:COLORS.red}}>未通过</span> → <span style={{fontWeight:900}}>不得处分</span>；未设立债委会 → 报告<span style={{fontWeight:900}}>法院</span></Row>
              <Row icon={<ShieldCheck size={22} color={COLORS.green}/>} delay={74} color={COLORS.green} pad="6px 12px">债委会认为不符合方案 → 要求<span style={{fontWeight:900}}>纠正</span>；拒不纠正 → 请求<span style={{fontWeight:900}}>法院决定</span></Row>
            </div>
          </div>
        </div>
        <div data-final-knowledge="creditors-meeting-scene-03-note" style={{position:'relative',flex:'1 1 0',minHeight:0,display:'flex',alignItems:'center',gap:16,padding:'10px 20px',border:'4px dashed '+COLORS.gold,background:COLORS.gold+'4D',opacity:enter(80,106)}}>
          <Watermark icon={<Gavel size={110} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
          <div style={{width:56,height:56,flexShrink:0,border:'4px solid '+COLORS.ink,background:COLORS.gold,color:COLORS.paper,display:'grid',placeItems:'center'}}><Gavel size={28} color={COLORS.paper}/></div>
          <div style={{display:'flex',flexDirection:'column',gap:6,flex:1,justifyContent:'center'}}>
            <div style={{fontSize:23,fontWeight:900,color:'#7A5B12'}}>第一次债权人会议前处分 → 须经<span style={{fontWeight:900,color:COLORS.gold }}>法院许可</span></div>
            <Row icon={<Landmark size={22} color={COLORS.gold}/>} delay={96} color={COLORS.gold} pad="6px 12px">法院认为不符合方案 → <span style={{fontWeight:900,color:COLORS.red}}>责令停止</span>，纠正或提交<span style={{fontWeight:900}}>重新表决</span></Row>
          </div>
        </div>
      </div>
      <div style={{flexShrink:0,position:'relative',height:8,opacity:enter(104,126)}}>
        <div style={{position:'absolute',left:0,top:0,width:interpolate(orderProgress,[0,1],[0,1768],CLAMP),height:8,background:COLORS.purple}}/>
      </div>
      <div data-stateful-source="creditors-meeting-disposal-order" style={{position:'absolute',left:10,top:interpolate(orderProgress,[0,1],[160,620],CLAMP),width:36,height:36,borderRadius:'50%',background:COLORS.green,border:'5px solid '+COLORS.ink,opacity:orderProgress>0.92?0:1,zIndex:4}}/>
      <div data-stateful-terminal="creditors-meeting-disposal-order" style={{position:'absolute',left:6,top:676,padding:'6px 10px',border:'3px solid '+COLORS.ink,background:COLORS.green,color:COLORS.paper,fontSize:16,fontWeight:900,opacity:enter(150,172)}}>走完</div>
    </div>
  </Shell>;
};

export const CreditorsMeeting=()=> <AbsoluteFill>
  <TimelineSequence name="01-creditors-meeting-scene-01" start={SCENES['creditors-meeting-scene-01'].start} duration={SCENES['creditors-meeting-scene-01'].duration}><CreditorsMeeting01Scene/></TimelineSequence>
  <TimelineSequence name="02-creditors-meeting-scene-02" start={SCENES['creditors-meeting-scene-02'].start} duration={SCENES['creditors-meeting-scene-02'].duration}><CreditorsMeeting02Scene/></TimelineSequence>
  <TimelineSequence name="03-creditors-meeting-scene-03" start={SCENES['creditors-meeting-scene-03'].start} duration={SCENES['creditors-meeting-scene-03'].duration}><CreditorsMeeting03Scene/></TimelineSequence>
</AbsoluteFill>;
