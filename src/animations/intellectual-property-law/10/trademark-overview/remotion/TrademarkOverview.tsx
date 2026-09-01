import type {ReactNode} from 'react';
import {Scale, Ban, Check, Users, Coins, AlertTriangle, Megaphone, Eye, Stamp, GitBranch, Split, Shield, Handshake, FileText, Landmark, Undo2, BadgeCheck, Store, Send} from 'lucide-react';
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

export const TrademarkOverview01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const markX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="知10.1" title="禁用 与 禁注：两道闸">
    <div data-layout="forbid-register-gates-1" data-visual-anchor="flow-path" data-visual-grammar="forbid-gate-pair,distinctive-band" data-text-treatments="chip,external-negation,soft-highlight" data-focal-rule="trademark-overview-scene-01-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="mark-application-travel" style={{position:'absolute',left:markX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.navy,fontSize:20,fontWeight:900,color:COLORS.navy,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Stamp size={24} color={COLORS.navy}/>标志注册申请
      </div>
      <div data-final-knowledge="trademark-overview-scene-01-forbid" style={{position:'absolute',left:0,top:90,width:864,height:340,padding:'14px 20px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <Ban size={110} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.red}}><Ban size={28} color={COLORS.red}/>禁用闸（禁注册+禁使用）</div>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(58,80)}><span style={{fontWeight:900 }}>官方挂钩</span>：中国标志<span style={{fontWeight:900,color:COLORS.red }}>绝对不能用</span>；外国、政府间组织标志<span style={{fontWeight:900,color:COLORS.teal }}>经其同意可用</span>；官方标志检验印记</FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<AlertTriangle size={24} color={COLORS.red}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>违反道德公益</span>：民族歧视性、欺骗性；<span style={{fontWeight:900,color:COLORS.red }}>县级以上地名</span>——地名有<span style={{fontWeight:900,color:COLORS.teal }}>其他含义除外</span>、<span style={{fontWeight:900 }}>已注册继续有效</span>、可作<span style={{fontWeight:900 }}>集体/证明商标</span>组成部分（河川集体商标 <span style={{fontWeight:900 }}>(√)</span>）</FactRow>
      </div>
      <div data-final-knowledge="trademark-overview-law-knowledge-1" data-stateful-terminal="mark-application-travel" style={{position:'absolute',left:904,top:90,width:864,height:340,padding:'14px 20px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <Coins size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Coins size={28} color={COLORS.copper}/>禁注闸（禁注册+可使用）</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Ban size={24} color={COLORS.copper}/>} enter={enter(68,90)}><span style={{fontWeight:900,color:COLORS.red }}>缺乏显著性</span>：通用名称、主要原料、功能等</FactRow>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Undo2 size={24} color={COLORS.teal}/>} enter={enter(78,100)}>经使用<span style={{fontWeight:900,color:COLORS.teal }}>获得显著性后可注册</span>——两面针、五粮液、薰衣草枕 <span style={{fontWeight:900 }}>(√)</span></FactRow>
        <FactRow color={COLORS.gold} bg={COLORS.gold+"4D"} icon={<BadgeCheck size={24} color={COLORS.gold}/>} enter={enter(88,110)}>核心：<span style={{fontWeight:900 }}>显著性</span>=让消费者识别出<span style={{fontWeight:900 }}>商品来源</span>（光明 vs 蒙牛）</FactRow>
      </div>
      <div data-final-knowledge="trademark-overview-knowledge-1" style={{position:'absolute',left:0,top:454,width:1768,height:240,padding:'14px 22px',border:'5px dashed '+COLORS.gold,background:COLORS.teal+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(88,114),translate:interpolate(frame,[88,114],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Stamp size={30} color={COLORS.copper}/>两道闸路由</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<GitBranch size={24} color={COLORS.copper}/>} enter={enter(102,124)}><span style={{fontWeight:900 }}>违反公益/与官方挂钩？</span>→ 是则<span style={{fontWeight:900,color:COLORS.red }}>禁注+禁用</span> → <span style={{fontWeight:900 }}>缺乏显著性？</span>→ 是则<span style={{fontWeight:900 }}>禁注可用，获显著性后可注册</span> → 否则<span style={{fontWeight:900,color:COLORS.teal }}>可注册</span></FactRow>
      </div>
    </div>
  </Shell>;
};

export const TrademarkOverview02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const famousX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="知10.2" title="分类 与 驰名商标">
    <div data-layout="classification-famous-board-2" data-visual-anchor="comparison-axis" data-visual-grammar="classification-duo,famous-scale" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="trademark-overview-scene-02-rule" data-focal-channels="contrast,motion,annotation" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="famous-claim-travel" style={{position:'absolute',left:famousX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.gold,fontSize:20,fontWeight:900,color:COLORS.copper,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <BadgeCheck size={24} color={COLORS.copper}/>驰名商标认定请求
      </div>
      <div data-final-knowledge="trademark-overview-scene-02-classification" style={{position:'absolute',left:0,top:90,width:864,height:330,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <Users size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Users size={28} color={COLORS.copper}/>集体商标 与 证明商标</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Users size={24} color={COLORS.copper}/>} enter={enter(58,80)}><span style={{fontWeight:900 }}>集体商标</span>：组织注册、<span style={{fontWeight:900 }}>组织内成员</span>使用，表明<span style={{fontWeight:900 }}>成员资格</span>——潼关肉夹馍协会会员</FactRow>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<BadgeCheck size={24} color={COLORS.teal}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>证明商标</span>：有监督能力的组织注册，<span style={{fontWeight:900 }}>组织外</span>成员证明质量——绿色食品标志，<span style={{fontWeight:900,color:COLORS.teal }}>满足质量要求即可申请使用</span></FactRow>
      </div>
      <div data-final-knowledge="trademark-overview-scene-02-famous" data-stateful-terminal="famous-claim-travel" style={{position:'absolute',left:904,top:90,width:864,height:330,padding:'14px 20px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <BadgeCheck size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><BadgeCheck size={28} color={COLORS.copper}/>驰名商标——被动·个案</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>被动认定、个案认定</span>；认定<span style={{fontWeight:900,color:COLORS.red }}>不得写入判决主文</span>；<span style={{fontWeight:900,color:COLORS.red }}>“驰名商标”字样不得用于包装广告</span></FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Split size={24} color={COLORS.red}/>} enter={enter(88,110)}><span style={{fontWeight:900 }}>已注册</span>：全品类禁注禁用 + <span style={{fontWeight:900,color:COLORS.teal }}>有损害赔偿请求权</span>；<span style={{fontWeight:900 }}>未注册</span>：相同类似品类禁注禁用 + <span style={{fontWeight:900,color:COLORS.red }}>无损害赔偿请求权</span>（可禁甲公司注册 <span style={{fontWeight:900 }}>(√)</span>，不能让丙公司赔 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span>）</FactRow>
      </div>
      <div data-final-knowledge="trademark-overview-knowledge-2" style={{position:'absolute',left:0,top:444,width:1768,height:250,padding:'14px 22px',border:'5px dashed '+COLORS.gold,background:COLORS.teal+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(88,114),translate:interpolate(frame,[88,114],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Stamp size={30} color={COLORS.copper}/>一线记</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(102,124)}>口诀：<span style={{fontWeight:900 }}>禁用——官方挂钩、违反道德公益</span>；<span style={{fontWeight:900 }}>禁注——缺乏显著性、经使用获显著性可注册</span>；<span style={{fontWeight:900 }}>驰名——被动、个案、已注册全品类保护</span></FactRow>
      </div>
    </div>
  </Shell>;
};

export const TrademarkOverview=()=> <AbsoluteFill>
  <TimelineSequence name="01-trademark-overview-scene-01" start={SCENES['trademark-overview-scene-01'].start} duration={SCENES['trademark-overview-scene-01'].duration}><TrademarkOverview01Scene/></TimelineSequence>
  <TimelineSequence name="02-trademark-overview-scene-02" start={SCENES['trademark-overview-scene-02'].start} duration={SCENES['trademark-overview-scene-02'].duration}><TrademarkOverview02Scene/></TimelineSequence>
</AbsoluteFill>;
