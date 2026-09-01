import type {ReactNode} from 'react';
import {Scale, Ban, Check, Users, Coins, AlertTriangle, Megaphone, Eye, Stamp, GitBranch, Split, Shield, Handshake, FileText, Landmark, Undo2, BadgeCheck, Store, Send, Hourglass} from 'lucide-react';
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

export const PatentInfringement01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const chianX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="知9.1" title="构成侵权：制造销用进 与 善意侵权">
    <div data-layout="infringe-lane-goodfaith-1" data-visual-anchor="flow-path" data-visual-grammar="infringe-lane,goodfaith-gate" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="patent-infringement-scene-01-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="infringe-act-travel" style={{position:'absolute',left:chianX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.navy,fontSize:20,fontWeight:900,color:COLORS.navy,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Store size={24} color={COLORS.navy}/>实施专利技术的行为
      </div>
      <div data-final-knowledge="patent-infringement-scene-01-elements" style={{position:'absolute',left:0,top:90,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <Split size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Split size={28} color={COLORS.copper}/>独占实施权两分法</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(58,80)}><span style={{fontWeight:900 }}>产品/方法专利</span>：制造、<span style={{fontWeight:900 }}>许诺销售</span>、销售、进口、<span style={{fontWeight:900 }}>使用</span>——网店挂售电脑膜 <span style={{fontWeight:900 }}>(√许诺+销售)</span>；丙销乙按方法造的药 <span style={{fontWeight:900 }}>(√)</span></FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Ban size={24} color={COLORS.copper}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>外观设计</span>：制造、许诺销售、销售、进口——<span style={{fontWeight:900,color:COLORS.red }}>没有使用行为</span></FactRow>
        <FactRow color={COLORS.gold} bg={COLORS.gold+"4D"} icon={<BadgeCheck size={24} color={COLORS.gold}/>} enter={enter(78,100)}>解题大招：<span style={{fontWeight:900 }}>不考虑主观意愿</span>，干了就侵权；后续产品（用方法专利的后续产品）<span style={{fontWeight:900,color:COLORS.teal }}>不侵权</span></FactRow>
      </div>
      <div data-final-knowledge="patent-infringement-law-knowledge-1" data-stateful-terminal="infringe-act-travel" style={{position:'absolute',left:904,top:90,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <Shield size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.teal}}><Shield size={28} color={COLORS.teal}/>善意侵权——停侵不赔偿</div>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>三要件</span>：使用/许诺销售/销售 + <span style={{fontWeight:900 }}>不知道</span>是侵权产品 + 能证明<span style={{fontWeight:900 }}>合法来源</span></FactRow>
        <FactRow color={COLORS.gold} bg={COLORS.gold+"4D"} icon={<Coins size={24} color={COLORS.gold}/>} enter={enter(78,100)}>后果：<span style={{fontWeight:900 }}>构成侵权应停止</span>，但<span style={{fontWeight:900,color:COLORS.teal }}>不承担赔偿责任</span>；已付<span style={{fontWeight:900 }}>合理对价</span>的使用人<span style={{fontWeight:900,color:COLORS.teal }}>可继续使用</span>（E公司买车装音响 <span style={{fontWeight:900 }}>(√)</span>）</FactRow>
      </div>
    </div>
  </Shell>;
};

export const PatentInfringement02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const shieldX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="知9.2" title="不侵权的七道盾">
    <div data-layout="exemption-shield-hall-2" data-visual-anchor="concept-icon" data-visual-grammar="exemption-shield-hall,case-verdict-band" data-text-treatments="chip,external-negation,soft-highlight" data-focal-rule="patent-infringement-scene-02-rule" data-focal-channels="contrast,icon,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="patent-infringement-scene-02-exemptions" data-stateful-source="exemption-shield-travel" style={{position:'absolute',left:0,top:0,width:864,height:640,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <Shield size={120} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.teal}}><Shield size={28} color={COLORS.teal}/>七道免责盾</div>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Hourglass size={24} color={COLORS.teal}/>} enter={enter(26,48)}><span style={{fontWeight:900 }}>临时保护期</span>（仅发明）：公布日→授权日；期内使用 → 向<span style={{fontWeight:900 }}>申请人付费</span>，<span style={{fontWeight:900,color:COLORS.teal }}>不是侵权</span>（乙专利生效前生产销售 <span style={{fontWeight:900 }}>(√)</span>）</FactRow>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Undo2 size={24} color={COLORS.teal}/>} enter={enter(36,58)}><span style={{fontWeight:900 }}>先用权</span>：申请日前已制造/已准备 → <span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>原有范围内</span>继续（乙5月先于甲6月申请 <span style={{fontWeight:900 }}>(√)</span>）</FactRow>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<FileText size={24} color={COLORS.teal}/>} enter={enter(46,68)}><span style={{fontWeight:900 }}>现有技术/设计抗辩</span>：申请日前已公开（刘某花瓶 <span style={{fontWeight:900 }}>(√)</span>）；<span style={{fontWeight:900 }}>科研使用</span>：作<span style={{fontWeight:900 }}>研究对象</span>不侵权（乙研究发动机 <span style={{fontWeight:900 }}>(√)</span>），作<span style={{fontWeight:900,color:COLORS.red }}>实验工具</span>侵权（丙装车测防撞 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span>）</FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Coins size={24} color={COLORS.copper}/>} enter={enter(56,78)}><span style={{fontWeight:900 }}>专利权用尽</span>：首次合法入市后流通<span style={{fontWeight:900,color:COLORS.teal }}>不侵权</span>；<span style={{fontWeight:900 }}>临时过境</span>：外国运输工具+有协议互惠；<span style={{fontWeight:900 }}>行政审批</span>：为审批提供信息制造进口药品器械</FactRow>
      </div>
      <div data-final-knowledge="patent-infringement-law-knowledge-2" data-stateful-terminal="exemption-shield-travel" style={{position:'absolute',left:904,top:0,width:864,height:640,padding:'14px 20px',border:'5px solid '+COLORS.navy,background:COLORS.navy+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <GitBranch size={110} color={COLORS.navy} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.navy}}><GitBranch size={28} color={COLORS.navy}/>解题路由</div>
        <FactRow color={COLORS.navy} bg={COLORS.navy+"3D"} icon={<Check size={24} color={COLORS.navy}/>} enter={enter(40,62)}><span style={{fontWeight:900 }}>第一步</span>：未经许可 + <span style={{fontWeight:900 }}>生产经营目的</span> + 干了独占实施权控制的行为？</FactRow>
        <FactRow color={COLORS.navy} bg={COLORS.navy+"3D"} icon={<Check size={24} color={COLORS.navy}/>} enter={enter(50,72)}><span style={{fontWeight:900 }}>第二步</span>：有<span style={{fontWeight:900,background:COLORS.navy+'26',padding:'1px 6px'}}>七道免责盾</span>之一？→ 有则<span style={{fontWeight:900,color:COLORS.teal }}>不侵权</span></FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<AlertTriangle size={24} color={COLORS.red}/>} enter={enter(60,82)}><span style={{fontWeight:900 }}>第三步</span>：无盾 → <span style={{fontWeight:900,color:COLORS.red }}>善意侵权？</span>停侵不赔偿 / 否则<span style={{fontWeight:900,color:COLORS.red }}>侵权并赔偿</span></FactRow>
        <FactRow color={COLORS.gold} bg={COLORS.gold+"4D"} icon={<BadgeCheck size={24} color={COLORS.gold}/>} enter={enter(70,92)}>口诀：<span style={{fontWeight:900 }}>制造许诺销售销售进口使用</span>（外观无使用）；<span style={{fontWeight:900 }}>善意侵权停侵不赔偿、合理对价可续用</span></FactRow>
      </div>
    </div>
  </Shell>;
};

export const PatentInfringement=()=> <AbsoluteFill>
  <TimelineSequence name="01-patent-infringement-scene-01" start={SCENES['patent-infringement-scene-01'].start} duration={SCENES['patent-infringement-scene-01'].duration}><PatentInfringement01Scene/></TimelineSequence>
  <TimelineSequence name="02-patent-infringement-scene-02" start={SCENES['patent-infringement-scene-02'].start} duration={SCENES['patent-infringement-scene-02'].duration}><PatentInfringement02Scene/></TimelineSequence>
</AbsoluteFill>;
