import type {ReactNode} from 'react';
import {Landmark, Users, Building2, Handshake, FileX2, AlarmClock, KeyRound, Scale, Coins, Gavel, Briefcase, ScrollText, Ban} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#EDF0F2', ink:'#1E2A33', blue:'#245E8F', red:'#B23A30', gold:'#C9A23C', paper:'#F8FAFB'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.blue,color:COLORS.paper}}>{code}</div>
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

export const BankruptcyAdministrator01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="09.3" title="管理人的指定与人选">
    <div data-layout="administrator-source-1" data-visual-anchor="role-pair" data-visual-grammar="court-appointment,candidate-pool" data-text-treatments="label-block,external-negation,soft-highlight" data-focal-rule="bankruptcy-administrator-scene-01-rule" data-focal-channels="contrast,connector,annotation" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:16}}>
      <div data-final-knowledge="bankruptcy-administrator-knowledge-1" style={{flexShrink:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#6E6757',opacity:enter(12,36)}}>受理时指定——生死由<span style={{color:COLORS.blue}}>法院</span>定</div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="bankruptcy-administrator-scene-01-court" style={{position:'relative',padding:'18px 24px',border:'5px solid '+COLORS.blue,background:COLORS.blue+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54),translate:slide(28,54,'-24px 0px')}}>
          <Watermark icon={<Landmark size={150} color={COLORS.blue} strokeWidth={1.2}/>} color={COLORS.blue}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10,flexShrink:0}}>
            <Landmark size={34} color={COLORS.blue}/>
            <div style={{padding:'8px 18px',background:COLORS.blue,color:COLORS.paper,fontSize:25,fontWeight:900}}>法院决定一切</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Landmark size={24} color={COLORS.blue}/>} delay={40} color={COLORS.blue} pad="10px 13px">管理人的<span style={{fontWeight:900,color:COLORS.blue}}>产生、更换、报酬和辞职</span>均由法院决定</Row>
            <Row icon={<Users size={24} color={COLORS.red}/>} delay={54} color={COLORS.red} pad="10px 13px">债权人会议<span style={{fontWeight:900,color:COLORS.red}}>不能直接选聘</span>——仅可<span style={{fontWeight:900}}>申请更换</span></Row>
            <Row icon={<Handshake size={24} color={COLORS.blue}/>} delay={68} color={COLORS.blue} pad="10px 13px">经<span style={{fontWeight:900}}>法院许可</span>，可聘用必要工作人员协助（不可自行决定）</Row>
          </div>
        </div>
        <div data-final-knowledge="bankruptcy-administrator-scene-01-pool" style={{position:'relative',padding:'18px 24px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'4D',display:'flex',flexDirection:'column',opacity:enter(46,72),translate:slide(46,72,'24px 0px')}}>
          <Watermark icon={<Users size={150} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10,flexShrink:0}}>
            <Users size={34} color={COLORS.gold}/>
            <div style={{padding:'8px 18px',background:COLORS.gold,color:COLORS.paper,fontSize:25,fontWeight:900 }}>可以担任的人选</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Building2 size={24} color={COLORS.gold}/>} delay={58} color={COLORS.gold} pad="10px 13px">① <span style={{fontWeight:900}}>清算组</span></Row>
            <Row icon={<Briefcase size={24} color={COLORS.gold}/>} delay={72} color={COLORS.gold} pad="10px 13px">② <span style={{fontWeight:900}}>律所、会计所</span>等中介机构</Row>
            <Row icon={<UserIcon size={24} color={COLORS.gold}/>} delay={86} color={COLORS.gold} pad="10px 13px">③ 具备专业知识并取得<span style={{fontWeight:900}}>执业资格的个人</span>——个人管理人</Row>
          </div>
        </div>
      </div>
      <div style={{flexShrink:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.red,background:COLORS.red+'4D',padding:'13px 24px',opacity:enter(96,122)}}>
        <Gavel size={34} color={COLORS.red}/>
        <div style={{fontSize:21,fontWeight:800,lineHeight:1.45}}>易错：管理人由<span style={{fontWeight:900,color:COLORS.blue}}>法院指定</span>——债权人会议只能<span style={{fontWeight:900,color:COLORS.red}}>申请更换</span>，不能选择或聘任（如不能直接选总经理乙担任管理人）</div>
      </div>
    </div>
  </Shell>;
};

const UserIcon=({size,color}:{readonly size:number;readonly color:string})=> <Users size={size} color={color}/>;

export const BankruptcyAdministrator02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="09.3" title="待履行合同的选择权">
    <div data-layout="contract-choice-2" data-visual-anchor="flow-path" data-visual-grammar="continue-or-rescind,deemed-rescission" data-text-treatments="thin-underline,stamp,soft-highlight" data-focal-rule="bankruptcy-administrator-scene-02-rule" data-focal-channels="connector,contrast,motion" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:16}}>
      <div data-final-knowledge="bankruptcy-administrator-knowledge-2" style={{flexShrink:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <Handshake size={40} color={COLORS.blue}/>
        <div style={{fontSize:27,fontWeight:900}}>双方均未履行完毕的合同——管理人<span style={{color:COLORS.blue}}>决定解除或履行</span></div>
      </div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="bankruptcy-administrator-scene-02-branch-0" style={{position:'relative',padding:'18px 24px',border:'5px solid '+COLORS.blue,background:COLORS.blue+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54),translate:slide(28,54,'-24px 0px')}}>
          <Watermark icon={<Coins size={150} color={COLORS.blue} strokeWidth={1.2}/>} color={COLORS.blue}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10,flexShrink:0}}>
            <Coins size={34} color={COLORS.blue}/>
            <div style={{padding:'8px 18px',background:COLORS.blue,color:COLORS.paper,fontSize:25,fontWeight:900}}>通知继续履行</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Coins size={24} color={COLORS.blue}/>} delay={40} color={COLORS.blue} pad="10px 13px">对方<span style={{fontWeight:900}}>应当履行</span></Row>
            <Row icon={<Scale size={24} color={COLORS.blue}/>} delay={54} color={COLORS.blue} pad="10px 13px">对方可<span style={{fontWeight:900}}>要求提供担保</span></Row>
            <Row icon={<AlarmClock size={24} color={COLORS.blue}/>} delay={68} color={COLORS.blue} pad="10px 13px">要求担保被<span style={{fontWeight:900}}>拒绝</span> → 视为解除</Row>
          </div>
        </div>
        <div data-final-knowledge="bankruptcy-administrator-scene-02-branch-1" style={{position:'relative',padding:'18px 24px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(46,72),translate:slide(46,72,'24px 0px')}}>
          <Watermark icon={<FileX2 size={150} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10,flexShrink:0}}>
            <FileX2 size={34} color={COLORS.red}/>
            <div style={{padding:'8px 18px',background:COLORS.red,color:COLORS.paper,fontSize:25,fontWeight:900}}>通知解除</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<FileX2 size={24} color={COLORS.red}/>} delay={58} color={COLORS.red} pad="10px 13px">通知到达 → 合同<span style={{fontWeight:900,color:COLORS.red }}>自然解除</span></Row>
            <Row icon={<Scale size={24} color={COLORS.red}/>} delay={72} color={COLORS.red} pad="10px 13px">对方因解除的<span style={{fontWeight:900}}>损失 → 破产债权</span>（非共益债务）</Row>
          </div>
        </div>
      </div>
      <div data-final-knowledge="bankruptcy-administrator-scene-02-deemed" style={{flexShrink:0,position:'relative',display:'grid',gap:9,border:'4px solid '+COLORS.gold,background:COLORS.gold+'4D',padding:'13px 24px',opacity:enter(88,114)}}>
        <Watermark icon={<AlarmClock size={110} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
        <div style={{fontSize:23,fontWeight:900,color:'#7A5B12',marginBottom:2}}>视为解除（拟制解除）三情形</div>
        <div style={{display:'flex',alignItems:'center',gap:12,flexWrap:'wrap'}}>
          <span style={{display:'inline-flex',alignItems:'center',gap:8,padding:'8px 16px',border:'3px solid '+COLORS.gold,background:COLORS.paper,fontSize:21,fontWeight:900,opacity:enter(100,122)}}><AlarmClock size={22} color={COLORS.gold}/>受理起<span style={{color:COLORS.red}}>2个月</span>未通知</span>
          <span style={{display:'inline-flex',alignItems:'center',gap:8,padding:'8px 16px',border:'3px solid '+COLORS.gold,background:COLORS.paper,fontSize:21,fontWeight:900,opacity:enter(110,132)}}><ScrollText size={22} color={COLORS.gold}/>收到催告起<span style={{color:COLORS.red}}>30日</span>未答复</span>
          <span style={{display:'inline-flex',alignItems:'center',gap:8,padding:'8px 16px',border:'3px solid '+COLORS.gold,background:COLORS.paper,fontSize:21,fontWeight:900,opacity:enter(120,142)}}><Ban size={22} color={COLORS.gold}/>要求履行但<span style={{color:COLORS.red}}>拒绝担保</span></span>
        </div>
      </div>
    </div>
  </Shell>;
};

export const BankruptcyAdministrator03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="09.3" title="管理人的职权">
    <div data-layout="power-cabinet-3" data-visual-anchor="concept-icon" data-visual-grammar="takeover-power,litigation-representation" data-text-treatments="label-block,soft-highlight,stamp" data-focal-rule="bankruptcy-administrator-scene-03-rule" data-focal-channels="enclosure,icon,spatial" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:14}}>
      <div data-final-knowledge="bankruptcy-administrator-knowledge-3" style={{flexShrink:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <KeyRound size={40} color={COLORS.blue}/>
        <div style={{fontSize:27,fontWeight:900}}>接管 → 执行 → 营业 → 诉讼</div>
      </div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gridTemplateRows:'repeat(2,minmax(0,1fr))',gap:16}}>
        <div data-final-knowledge="bankruptcy-administrator-scene-03-power-0" style={{position:'relative',padding:'14px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.blue,background:COLORS.blue+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54),translate:slide(28,54,'0px 22px')}}>
          <Watermark icon={<KeyRound size={120} color={COLORS.blue} strokeWidth={1.2}/>} color={COLORS.blue}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:24,fontWeight:900,marginBottom:6,flexShrink:0}}><KeyRound size={30} color={COLORS.blue}/>① 财产接管权</div>
          <div style={{display:'flex',flexDirection:'column',gap:8,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<KeyRound size={22} color={COLORS.blue}/>} delay={40} color={COLORS.blue} pad="7px 12px">接管<span style={{fontWeight:900}}>债务人的财产</span></Row>
          </div>
        </div>
        <div data-final-knowledge="bankruptcy-administrator-scene-03-power-1" style={{position:'relative',padding:'14px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.gold,background:COLORS.gold+'4D',display:'flex',flexDirection:'column',opacity:enter(44,70),translate:slide(44,70,'0px 22px')}}>
          <Watermark icon={<Briefcase size={120} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:24,fontWeight:900,marginBottom:6,flexShrink:0}}><Briefcase size={30} color={COLORS.gold}/>② 事务执行权</div>
          <div style={{display:'flex',flexDirection:'column',gap:8,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Briefcase size={22} color={COLORS.gold}/>} delay={54} color={COLORS.gold} pad="7px 12px">决定<span style={{fontWeight:900}}>内部管理事务</span>、日常和其他必要开支</Row>
          </div>
        </div>
        <div data-final-knowledge="bankruptcy-administrator-scene-03-power-2" style={{position:'relative',padding:'14px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.gold,background:COLORS.gold+'4D',display:'flex',flexDirection:'column',opacity:enter(60,86),translate:slide(60,86,'0px 22px')}}>
          <Watermark icon={<Coins size={120} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:24,fontWeight:900,marginBottom:6,flexShrink:0}}><Coins size={30} color={COLORS.gold}/>③ 营业决定权</div>
          <div style={{display:'flex',flexDirection:'column',gap:8,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Coins size={22} color={COLORS.gold}/>} delay={68} color={COLORS.gold} pad="7px 12px">第一次债权人会议前决定<span style={{fontWeight:900}}>继续或停止营业</span></Row>
            <Row icon={<Landmark size={22} color={COLORS.red}/>} delay={80} color={COLORS.red} pad="7px 12px">需经<span style={{fontWeight:900,color:COLORS.red}}>法院许可</span></Row>
          </div>
        </div>
        <div data-final-knowledge="bankruptcy-administrator-scene-03-power-3" style={{position:'relative',padding:'14px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.blue,background:COLORS.blue+'4D',display:'flex',flexDirection:'column',opacity:enter(76,102),translate:slide(76,102,'0px 22px')}}>
          <Watermark icon={<Scale size={120} color={COLORS.blue} strokeWidth={1.2}/>} color={COLORS.blue}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:24,fontWeight:900,marginBottom:6,flexShrink:0}}><Scale size={30} color={COLORS.blue}/>④ 诉讼代表权</div>
          <div style={{display:'flex',flexDirection:'column',gap:8,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Scale size={22} color={COLORS.blue}/>} delay={94} color={COLORS.blue} pad="7px 12px">代表债务人<span style={{fontWeight:900}}>参加诉讼和仲裁</span></Row>
          </div>
        </div>
      </div>
    </div>
  </Shell>;
};

export const BankruptcyAdministrator=()=> <AbsoluteFill>
  <TimelineSequence name="01-bankruptcy-administrator-scene-01" start={SCENES['bankruptcy-administrator-scene-01'].start} duration={SCENES['bankruptcy-administrator-scene-01'].duration}><BankruptcyAdministrator01Scene/></TimelineSequence>
  <TimelineSequence name="02-bankruptcy-administrator-scene-02" start={SCENES['bankruptcy-administrator-scene-02'].start} duration={SCENES['bankruptcy-administrator-scene-02'].duration}><BankruptcyAdministrator02Scene/></TimelineSequence>
  <TimelineSequence name="03-bankruptcy-administrator-scene-03" start={SCENES['bankruptcy-administrator-scene-03'].start} duration={SCENES['bankruptcy-administrator-scene-03'].duration}><BankruptcyAdministrator03Scene/></TimelineSequence>
</AbsoluteFill>;
