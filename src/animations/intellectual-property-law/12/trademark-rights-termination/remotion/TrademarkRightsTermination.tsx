import type {ReactNode} from 'react';
import {Scale, Ban, Check, Users, Coins, AlertTriangle, Megaphone, Eye, Stamp, GitBranch, Split, Shield, Handshake, FileText, Landmark, Undo2, BadgeCheck, Store, Send, UserCheck, Hourglass} from 'lucide-react';
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

export const TrademarkRightsTermination01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const renewX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="知12.1" title="商标权内容：10年 与 续展宽展">
    <div data-layout="renewal-clock-lane-1" data-visual-anchor="timeline-gate" data-visual-grammar="renewal-clock,transfer-license-band" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="trademark-rights-termination-scene-01-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="renewal-clock-travel" style={{position:'absolute',left:renewX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.navy,fontSize:20,fontWeight:900,color:COLORS.navy,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Hourglass size={24} color={COLORS.navy}/>10年保护期
      </div>
      <div data-final-knowledge="trademark-rights-termination-scene-01-renewal" style={{position:'absolute',left:0,top:90,width:864,height:330,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <Hourglass size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Hourglass size={28} color={COLORS.copper}/>续展权——12月+6月宽展</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(58,80)}>核准注册之日起保护<span style={{fontWeight:900 }}>10年</span>；期满前<span style={{fontWeight:900 }}>12个月内</span>办理续展</FactRow>
        <FactRow color={COLORS.gold} bg={COLORS.gold+"4D"} icon={<Coins size={24} color={COLORS.gold}/>} enter={enter(68,90)}>未办 → 给<span style={{fontWeight:900 }}>6个月宽展期</span>，<span style={{fontWeight:900,color:COLORS.teal }}>宽展期内仍享有商标权</span>；宽展期也没办 → <span style={{fontWeight:900,color:COLORS.red }}>注销商标</span></FactRow>
      </div>
      <div data-final-knowledge="trademark-rights-termination-law-knowledge-1" data-stateful-terminal="renewal-clock-travel" style={{position:'absolute',left:904,top:90,width:864,height:330,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <Handshake size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.teal}}><Handshake size={28} color={COLORS.teal}/>转让 与 许可</div>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>转让</span>：双方共同向商标局申请；同种近似、类似相同近似商标<span style={{fontWeight:900,color:COLORS.red }}>应一并转让</span></FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Stamp size={24} color={COLORS.copper}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>许可</span>：需<span style={{fontWeight:900 }}>备案</span>，<span style={{fontWeight:900,color:COLORS.teal }}>未备案不影响合同效力</span>——“备案后生效” <span style={{fontWeight:900,color:COLORS.red }}>(×)</span>；被许可人标明<span style={{fontWeight:900 }}>名称和产地</span></FactRow>
      </div>
      <div data-final-knowledge="trademark-rights-termination-knowledge-1" style={{position:'absolute',left:0,top:444,width:1768,height:250,padding:'14px 22px',border:'5px dashed '+COLORS.gold,background:COLORS.teal+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(88,114),translate:interpolate(frame,[88,114],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Stamp size={30} color={COLORS.copper}/>一线记</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<BadgeCheck size={24} color={COLORS.copper}/>} enter={enter(102,124)}>口诀：<span style={{fontWeight:900 }}>保护期10年、续展期12个月加6个月宽展</span>；转让须<span style={{fontWeight:900 }}>共同申请、近似一并转</span>；许可<span style={{fontWeight:900 }}>备案非生效要件</span></FactRow>
      </div>
    </div>
  </Shell>;
};

export const TrademarkRightsTermination02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const cancelX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="知12.2" title="撤销 与 无效宣告">
    <div data-layout="cancel-invalid-gates-2" data-visual-anchor="comparison-axis" data-visual-grammar="cancel-invalid-gates,mnemonic-band" data-text-treatments="chip,external-negation,soft-highlight" data-focal-rule="trademark-rights-termination-scene-02-rule" data-focal-channels="contrast,motion,annotation" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="cancel-claim-travel" style={{position:'absolute',left:cancelX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.copper,fontSize:20,fontWeight:900,color:COLORS.copper,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <AlertTriangle size={24} color={COLORS.copper}/>撤销事由（使用过程中）
      </div>
      <div data-final-knowledge="trademark-rights-termination-scene-02-cancel" style={{position:'absolute',left:0,top:90,width:864,height:340,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <Ban size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Ban size={28} color={COLORS.copper}/>撤销三种事由</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<AlertTriangle size={24} color={COLORS.copper}/>} enter={enter(58,80)}><span style={{fontWeight:900 }}>擅自改变注册事项</span>（标识、地址）→ 地方工商局责令限期改，不改 → <span style={{fontWeight:900,color:COLORS.red }}>商标局撤销</span></FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Coins size={24} color={COLORS.red}/>} enter={enter(68,90)}>无正当理由<span style={{fontWeight:900,color:COLORS.red }}>连续3年不用</span>——任何人可向商标局申请撤销（“狂飙”不使用是<span style={{fontWeight:900,color:COLORS.teal }}>无效</span>事由 <span style={{fontWeight:900 }}>(×撤销)</span>）</FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(78,100)}>成为<span style={{fontWeight:900,color:COLORS.red }}>通用名称</span>——浪费公共资源、防垄断；“通畅”表明功能是<span style={{fontWeight:900,color:COLORS.teal }}>无效</span>事由 <span style={{fontWeight:900 }}>(×撤销)</span></FactRow>
      </div>
      <div data-final-knowledge="trademark-rights-termination-law-knowledge-1" data-stateful-terminal="cancel-claim-travel" style={{position:'absolute',left:904,top:90,width:864,height:340,padding:'14px 20px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <Ban size={110} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.red}}><Ban size={28} color={COLORS.red}/>无效宣告（注册时有问题）</div>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>商标违法</span>：禁注禁用标志、<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>不以使用为目的恶意注册</span>、代理机构注册非自用 → <span style={{fontWeight:900 }}>商标局可直接宣告</span>；<span style={{fontWeight:900 }}>任何人</span>申请、<span style={{fontWeight:900,color:COLORS.red }}>不受时间限制</span>（“狂飙” <span style={{fontWeight:900 }}>(√随时)</span>）</FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<UserCheck size={24} color={COLORS.copper}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>商标侵权</span>：恶意抢注、侵犯在先权利、含虚假<span style={{fontWeight:900 }}>地理标志</span>、侵犯驰名商标权益 → <span style={{fontWeight:900,color:COLORS.red }}>5年内</span>（恶意抢注驰名持有人<span style={{fontWeight:900,color:COLORS.red }}>不受限</span>——乙抢注甲店铺 <span style={{fontWeight:900,color:COLORS.red }}>(×随时)</span>）</FactRow>
        <FactRow color={COLORS.gold} bg={COLORS.gold+"4D"} icon={<Undo2 size={24} color={COLORS.gold}/>} enter={enter(88,110)}>后果：<span style={{fontWeight:900 }}>自始不存在</span>，已履行合同<span style={{fontWeight:900,color:COLORS.teal }}>原则无溯及力</span>（已付使用费不返还 <span style={{fontWeight:900 }}>(√)</span>）；明显不公平应返还；恶意致损应赔偿</FactRow>
      </div>
      <div data-final-knowledge="trademark-rights-termination-knowledge-2" style={{position:'absolute',left:0,top:454,width:1768,height:240,padding:'14px 22px',border:'5px dashed '+COLORS.gold,background:COLORS.teal+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(88,114),translate:interpolate(frame,[88,114],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Stamp size={30} color={COLORS.copper}/>口诀与补充</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<BadgeCheck size={24} color={COLORS.copper}/>} enter={enter(102,124)}>口诀：<span style={{fontWeight:900 }}>撤销3种：改标识、3年不用、通用名称</span>；<span style={{fontWeight:900 }}>无效2种：商标违法不受限、商标侵权5年内</span></FactRow>
          <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Ban size={24} color={COLORS.teal}/>} enter={enter(112,134)}>撤销/无效/期满不续展后<span style={{fontWeight:900 }}>1年内</span>相同近似商标申请<span style={{fontWeight:900,color:COLORS.red }}>不予核准</span>；<span style={{fontWeight:900 }}>超出经营范围</span>非无效事由 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const TrademarkRightsTermination=()=> <AbsoluteFill>
  <TimelineSequence name="01-trademark-rights-termination-scene-01" start={SCENES['trademark-rights-termination-scene-01'].start} duration={SCENES['trademark-rights-termination-scene-01'].duration}><TrademarkRightsTermination01Scene/></TimelineSequence>
  <TimelineSequence name="02-trademark-rights-termination-scene-02" start={SCENES['trademark-rights-termination-scene-02'].start} duration={SCENES['trademark-rights-termination-scene-02'].duration}><TrademarkRightsTermination02Scene/></TimelineSequence>
</AbsoluteFill>;
