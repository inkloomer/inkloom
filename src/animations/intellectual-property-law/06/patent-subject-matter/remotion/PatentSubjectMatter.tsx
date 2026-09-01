import type {ReactNode} from 'react';
import {Scale, Ban, Check, Users, Coins, AlertTriangle, Megaphone, Eye, Stamp, GitBranch, Split, Shield, Handshake, FileText, Landmark, Undo2, BadgeCheck, Store, Send, FlaskConical} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#EFECE4', ink:'#2B2B33', navy:'#2C4A6E', copper:'#8A4B2F', teal:'#15725F', red:'#B23A30', gold:'#B98A2F', paper:'#FAF6EC'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.navy,color:COLORS.paper}}>{code}</div>
    <div style={{position:'absolute',left:190,right:76,top:46,fontSize:46,fontWeight:900,lineHeight:1.12,borderBottom:'5px solid '+COLORS.navy,paddingBottom:12}}>{title}</div>
    <div style={{position:'absolute',left:76,right:76,top:150,bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

const FactRow=({color,icon,enter,children,bg}:{readonly color:string;readonly icon:ReactNode;readonly enter:number;readonly children:ReactNode;readonly bg?:string})=>(
  <div style={{display:'flex',alignItems:'center',gap:12,padding:'9px 14px',background:bg??COLORS.paper,border:'3px solid '+color,borderLeft:'6px solid '+color,opacity:enter}}>
    <span style={{display:'flex',flexShrink:0}}>{icon}</span>
    <span style={{fontSize:21,fontWeight:800,lineHeight:1.45}}>{children}</span>
  </div>
);

const Chip=({color,icon,text}:{readonly color:string;readonly icon?:ReactNode;readonly text:string})=>(
  <div style={{display:'flex',alignItems:'center',gap:8,padding:'7px 13px',background:COLORS.paper,border:'3px solid '+color,fontSize:20,fontWeight:900,color}}>
    {icon}{text}
  </div>
);

export const PatentSubjectMatter01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const noveltyX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="知6.1" title="专利保护对象 与 新颖性">
    <div data-layout="novelty-gate-lane-1" data-visual-anchor="timeline-gate" data-visual-grammar="novelty-gate,grace-band" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="patent-subject-matter-scene-01-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="novelty-check-travel" style={{position:'absolute',left:noveltyX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.navy,fontSize:20,fontWeight:900,color:COLORS.navy,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Eye size={24} color={COLORS.navy}/>新颖性审查
      </div>
      <div data-final-knowledge="patent-subject-matter-scene-01-objects" style={{position:'absolute',left:0,top:90,width:864,height:330,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <FlaskConical size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><FlaskConical size={28} color={COLORS.copper}/>两类保护对象</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(58,80)}><span style={{fontWeight:900 }}>技术方案</span>（利用自然规律解决技术问题）：发明（产品/方法/改进）+ 实用新型 → <span style={{fontWeight:900 }}>三性：新颖+创造+实用</span></FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>设计方案</span>（外观设计）→ 新颖性+实用性+<span style={{fontWeight:900 }}>富有美感</span>+<span style={{fontWeight:900,color:COLORS.red }}>不侵犯在先权利</span></FactRow>
      </div>
      <div data-final-knowledge="patent-subject-matter-scene-01-novelty" data-stateful-terminal="novelty-check-travel" style={{position:'absolute',left:904,top:90,width:864,height:330,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <Eye size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.teal}}><Eye size={28} color={COLORS.teal}/>新颖性两要件 + 宽限期</div>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(68,90)}>① 非<span style={{fontWeight:900 }}>现有技术</span>；② 无<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>抵触申请</span>：A 1月申请5月公布，B 3月申请 → A是B的抵触申请</FactRow>
        <FactRow color={COLORS.gold} bg={COLORS.gold+"4D"} icon={<Undo2 size={24} color={COLORS.gold}/>} enter={enter(78,100)}>申请日前<span style={{fontWeight:900 }}>6个月内</span>公开<span style={{fontWeight:900,color:COLORS.teal }}>不丧失新颖性</span>：紧急状态<span style={{fontWeight:900 }}>为公共利益公开</span> / 我国主办国际展<span style={{fontWeight:900 }}>首次展出</span> / 规定学术会议<span style={{fontWeight:900 }}>首次发表</span> / <span style={{fontWeight:900 }}>未经同意被泄露</span></FactRow>
      </div>
      <div data-final-knowledge="patent-subject-matter-knowledge-1" style={{position:'absolute',left:0,top:444,width:1768,height:250,padding:'14px 22px',border:'5px dashed '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(88,114),translate:interpolate(frame,[88,114],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Stamp size={30} color={COLORS.copper}/>判例：反向工程与商业秘密</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(102,124)}>甲厂中药配方作为<span style={{fontWeight:900 }}>商业秘密</span>保护 → 乙厂<span style={{fontWeight:900,color:COLORS.teal }}>反向工程</span>破解并申请专利 <span style={{fontWeight:900 }}>(√)</span>：配方未公开不破坏新颖性、无抵触申请</FactRow>
      </div>
    </div>
  </Shell>;
};

export const PatentSubjectMatter02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="知6.2" title="不授予专利的三道排除闸">
    <div data-layout="exclusion-gate-triad-2" data-visual-anchor="flow-target" data-visual-grammar="exclusion-gate-triad,exception-band" data-text-treatments="chip,external-negation,soft-highlight" data-focal-rule="patent-subject-matter-scene-02-rule" data-focal-channels="contrast,icon,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="patent-subject-matter-scene-02-gate1" style={{position:'absolute',left:0,top:0,width:560,height:400,padding:'14px 18px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <Ban size={100} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:2,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:22,fontWeight:900,color:COLORS.red}}><Ban size={26} color={COLORS.red}/>① 违法或违反公益</div>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(26,48)}><span style={{fontWeight:900 }}>违法发明</span>：伪钞机、赌博机</FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(36,58)}><span style={{fontWeight:900,color:COLORS.red }}>疾病诊断和治疗方法</span>（人道主义）——但<span style={{fontWeight:900,color:COLORS.teal }}>药物、仪器</span>（透析机）<span style={{fontWeight:900,color:COLORS.teal }}>可授</span>（中药制品 <span style={{fontWeight:900 }}>(√)</span>）</FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(46,68)}><span style={{fontWeight:900,color:COLORS.red }}>原子核变换方法</span>及物质（国防科技）</FactRow>
      </div>
      <div data-final-knowledge="patent-subject-matter-scene-02-gate2" style={{position:'absolute',left:604,top:0,width:560,height:400,padding:'14px 18px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(26,52),translate:interpolate(frame,[26,52],['0px 26px','0px 0px'],CLAMP)}}>
        <Split size={100} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:2,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:22,fontWeight:900,color:COLORS.copper}}><Split size={26} color={COLORS.copper}/>② 不是技术/设计方案</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Ban size={24} color={COLORS.copper}/>} enter={enter(40,62)}><span style={{fontWeight:900 }}>科学发现</span>：DNA排序、牛顿定律</FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Ban size={24} color={COLORS.copper}/>} enter={enter(50,72)}><span style={{fontWeight:900 }}>智力活动规则</span>：语法、背诵方法</FactRow>
      </div>
      <div data-final-knowledge="patent-subject-matter-scene-02-gate3" style={{position:'absolute',left:1208,top:0,width:560,height:400,padding:'14px 18px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(40,66),translate:interpolate(frame,[40,66],['200px 0px','0px 0px'],CLAMP)}}>
        <Shield size={100} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:2,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:22,fontWeight:900,color:COLORS.teal}}><Shield size={26} color={COLORS.teal}/>③ 由其他法律保护</div>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Ban size={24} color={COLORS.teal}/>} enter={enter(54,76)}><span style={{fontWeight:900 }}>动植物品种</span>不授予——但<span style={{fontWeight:900,color:COLORS.teal }}>生产方法可授</span>；<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>微生物</span>不属于动植物（转基因细菌 <span style={{fontWeight:900 }}>(√可授)</span>）</FactRow>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Ban size={24} color={COLORS.teal}/>} enter={enter(64,86)}><span style={{fontWeight:900 }}>平面印刷品图案色彩</span>（主要起标识作用）：如商标</FactRow>
      </div>
      <div data-final-knowledge="patent-subject-matter-knowledge-2" style={{position:'absolute',left:0,top:424,width:1768,height:270,padding:'14px 22px',border:'5px dashed '+COLORS.gold,background:COLORS.teal+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(78,104),translate:interpolate(frame,[78,104],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Stamp size={30} color={COLORS.copper}/>口诀 与 三闸路由</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<BadgeCheck size={24} color={COLORS.copper}/>} enter={enter(92,114)}>口诀：<span style={{fontWeight:900 }}>不授——违法、诊疗、原子核、发现、规则、动植物、标识设计</span></FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<GitBranch size={24} color={COLORS.copper}/>} enter={enter(102,124)}>路由：<span style={{fontWeight:900 }}>是技术/设计方案？</span>→ 否则排除发现规则 → <span style={{fontWeight:900 }}>违法或违公益？</span>→ <span style={{fontWeight:900 }}>其他法律保护？</span>→ 全过才<span style={{fontWeight:900,color:COLORS.teal }}>可授专利</span></FactRow>
      </div>
    </div>
  </Shell>;
};

export const PatentSubjectMatter=()=> <AbsoluteFill>
  <TimelineSequence name="01-patent-subject-matter-scene-01" start={SCENES['patent-subject-matter-scene-01'].start} duration={SCENES['patent-subject-matter-scene-01'].duration}><PatentSubjectMatter01Scene/></TimelineSequence>
  <TimelineSequence name="02-patent-subject-matter-scene-02" start={SCENES['patent-subject-matter-scene-02'].start} duration={SCENES['patent-subject-matter-scene-02'].duration}><PatentSubjectMatter02Scene/></TimelineSequence>
</AbsoluteFill>;
