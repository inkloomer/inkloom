import type {ReactNode} from 'react';
import {Scale, Ban, Check, Users, Coins, AlertTriangle, Megaphone, Eye, Stamp, GitBranch, Split, Shield, Handshake, FileText, Landmark, Undo2, BadgeCheck, Store, Send, Hourglass, UserCheck} from 'lucide-react';
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

export const TrademarkAcquisition01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const applyX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="知11.1" title="注册申请原则 与 代理">
    <div data-layout="application-agent-board-1" data-visual-anchor="comparison-axis" data-visual-grammar="application-principles-band,agent-rule-band" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="trademark-acquisition-scene-01-rule" data-focal-channels="contrast,motion,icon" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="application-form-travel" style={{position:'absolute',left:applyX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.navy,fontSize:20,fontWeight:900,color:COLORS.navy,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <FileText size={24} color={COLORS.navy}/>商标注册申请
      </div>
      <div data-final-knowledge="trademark-acquisition-scene-01-principles" style={{position:'absolute',left:0,top:90,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <Stamp size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Stamp size={28} color={COLORS.copper}/>三大原则</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(58,80)}><span style={{fontWeight:900 }}>申请在先</span>＞使用在先；同日 → <span style={{fontWeight:900 }}>30日内自行协商</span>+书面报商标局，协商不成<span style={{fontWeight:900,color:COLORS.red }}>抽签确定</span></FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>一申多类</span>：<span style={{fontWeight:900 }}>1份申请</span>就多个类别商品申请同一商标——“一份一类” <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Coins size={24} color={COLORS.teal}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>优先权</span>：<span style={{fontWeight:900 }}>国际</span>——外国首次申请起<span style={{fontWeight:900 }}>6个月内</span>；<span style={{fontWeight:900 }}>展览</span>——中国政府主办展会<span style={{fontWeight:900 }}>首次使用</span>起6个月内（冰雪商标2月展7月申 <span style={{fontWeight:900 }}>(√)</span>，乙3月申请应公告<span style={{fontWeight:900,color:COLORS.red }}>甲</span>）</FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<AlertTriangle size={24} color={COLORS.red}/>} enter={enter(88,110)}>注意：展会上首展<span style={{fontWeight:900 }}>专利技术</span>是<span style={{fontWeight:900,color:COLORS.red }}>不丧失新颖性</span>，非优先权</FactRow>
      </div>
      <div data-final-knowledge="copyright-authorship-law-knowledge-1" data-stateful-terminal="application-form-travel" style={{position:'absolute',left:904,top:90,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <Handshake size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.teal}}><Handshake size={28} color={COLORS.teal}/>代理规则</div>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Users size={24} color={COLORS.teal}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>外国人/企业</span> → <span style={{fontWeight:900,color:COLORS.red }}>必须委托代理机构</span>；中国人 → 自行办理或委托</FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(78,100)}>标志可能不得注册 → 代理人<span style={{fontWeight:900 }}>明确告知</span>后<span style={{fontWeight:900,color:COLORS.teal }}>可接受委托</span></FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(88,110)}><span style={{fontWeight:900,color:COLORS.red }}>不得接受委托</span>：知道委托人<span style={{fontWeight:900,color:COLORS.red }}>恶意抢注</span>或侵害在先权利（“大力”商标 B公司委托 <span style={{fontWeight:900 }}>(√不得接受)</span>）；除<span style={{fontWeight:900 }}>自己的代理服务</span>外<span style={{fontWeight:900,color:COLORS.red }}>不得注册其他商标</span>（“飞驰”转卖 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span>；换自己为申请人 <span style={{fontWeight:900 }}>(√不予注册并禁止使用)</span>）</FactRow>
      </div>
    </div>
  </Shell>;
};

export const TrademarkAcquisition02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const objX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="知11.2" title="商标异议制度">
    <div data-layout="opposition-gate-track-2" data-visual-anchor="flow-path" data-visual-grammar="opposition-gate,reason-split-band" data-text-treatments="chip,stamp,thin-underline" data-focal-rule="trademark-acquisition-scene-02-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="opposition-claim-travel" style={{position:'absolute',left:objX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.navy,fontSize:20,fontWeight:900,color:COLORS.navy,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Undo2 size={24} color={COLORS.navy}/>异议申请
      </div>
      <div data-final-knowledge="trademark-acquisition-scene-02-flow" style={{position:'absolute',left:0,top:90,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <Stamp size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Stamp size={28} color={COLORS.copper}/>异议期三流程</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Hourglass size={24} color={COLORS.copper}/>} enter={enter(58,80)}>初审公告之日起<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>3个月内</span>可提异议</FactRow>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>无人异议</span> → 异议期满<span style={{fontWeight:900,color:COLORS.teal }}>核准注册</span></FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>有人异议</span> + 异议<span style={{fontWeight:900,color:COLORS.red }}>成立</span> → <span style={{fontWeight:900,color:COLORS.red }}>不予注册</span></FactRow>
      </div>
      <div data-final-knowledge="trademark-acquisition-law-knowledge-1" data-stateful-terminal="opposition-claim-travel" style={{position:'absolute',left:904,top:90,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.indigo,background:'#3B4A6B'+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <Split size={110} color={'#3B4A6B'} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:'#3B4A6B'}}><Split size={28} color={'#3B4A6B'}/>异议理由分两类</div>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Users size={24} color={COLORS.red}/>} enter={enter(68,90)}>商标违法损害<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>公共利益</span> → <span style={{fontWeight:900 }}>任何人</span>可提</FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<UserCheck size={24} color={COLORS.copper}/>} enter={enter(78,100)}>商标侵权损害<span style={{fontWeight:900 }}>私人利益</span> → <span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>在先权利人/利害关系人</span>可提（情形同商标无效）</FactRow>
      </div>
      <div data-final-knowledge="trademark-acquisition-knowledge-1" style={{position:'absolute',left:0,top:454,width:1768,height:240,padding:'14px 22px',border:'5px dashed '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(88,114),translate:interpolate(frame,[88,114],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Stamp size={30} color={COLORS.copper}/>一线记</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<BadgeCheck size={24} color={COLORS.copper}/>} enter={enter(102,124)}>口诀：<span style={{fontWeight:900 }}>申请在先、同日协商、不成抽签</span>；<span style={{fontWeight:900 }}>外国人必委托、代理机构不得抢注</span>；<span style={{fontWeight:900 }}>异议3个月、公益任何人可提</span></FactRow>
      </div>
    </div>
  </Shell>;
};

export const TrademarkAcquisition=()=> <AbsoluteFill>
  <TimelineSequence name="01-trademark-acquisition-scene-01" start={SCENES['trademark-acquisition-scene-01'].start} duration={SCENES['trademark-acquisition-scene-01'].duration}><TrademarkAcquisition01Scene/></TimelineSequence>
  <TimelineSequence name="02-trademark-acquisition-scene-02" start={SCENES['trademark-acquisition-scene-02'].start} duration={SCENES['trademark-acquisition-scene-02'].duration}><TrademarkAcquisition02Scene/></TimelineSequence>
</AbsoluteFill>;
