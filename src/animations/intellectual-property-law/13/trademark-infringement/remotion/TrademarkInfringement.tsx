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

export const TrademarkInfringement01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const trioX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="知13.1" title="侵权四行为：假冒 仿冒 反向假冒">
    <div data-layout="infringe-trio-lane-1" data-visual-anchor="flow-path" data-visual-grammar="infringe-trio-lane,seller-gate" data-text-treatments="chip,stamp,external-negation" data-focal-rule="trademark-infringement-scene-01-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="infringe-trio-travel" style={{position:'absolute',left:trioX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.navy,fontSize:20,fontWeight:900,color:COLORS.navy,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Ban size={24} color={COLORS.navy}/>“小明”商标被侵权
      </div>
      <div data-final-knowledge="trademark-infringement-scene-01-trio" style={{position:'absolute',left:0,top:90,width:1768,height:250,display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:14}}>
        <div style={{padding:'14px 16px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(44,70)}}>
          <div style={{fontSize:22,fontWeight:900,color:COLORS.red}}><Ban size={26} color={COLORS.red}/>假冒</div>
          <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(58,80)}><span style={{fontWeight:900 }}>同品同标</span>——乙自产汽车用A商标是<span style={{fontWeight:900,color:COLORS.red }}>假冒</span>非仿冒 <span style={{fontWeight:900 }}>(×仿冒)</span></FactRow>
        </div>
        <div style={{padding:'14px 16px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(54,80)}}>
          <div style={{fontSize:22,fontWeight:900,color:COLORS.copper}}><Split size={26} color={COLORS.copper}/>仿冒</div>
          <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<AlertTriangle size={24} color={COLORS.copper}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>近似+易混淆</span>：同品类似标 / 类似品同标 / 类似品类似标——护发素用“小明” <span style={{fontWeight:900 }}>(√)</span></FactRow>
        </div>
        <div style={{padding:'14px 16px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(64,90)}}>
          <div style={{fontSize:22,fontWeight:900,color:COLORS.teal}}><Undo2 size={26} color={COLORS.teal}/>反向假冒</div>
          <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Ban size={24} color={COLORS.teal}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>撕标换标再卖</span>——撕“小明”贴“小红”去卖 <span style={{fontWeight:900 }}>(√)</span>；装饰拆标不投入市场 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
        </div>
      </div>
      <div data-final-knowledge="trademark-infringement-scene-01-seller" style={{position:'absolute',left:0,top:364,width:864,height:330,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(88,114),translate:interpolate(frame,[88,114],['0px 24px','0px 0px'],CLAMP)}}>
        <Store size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Store size={28} color={COLORS.copper}/>卖侵权商品 与 伪造标识</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(102,124)}>卖侵权商品：<span style={{fontWeight:900,color:COLORS.red }}>应停止侵权</span>；<span style={{fontWeight:900 }}>善意销售者</span>证明来源及提供者<span style={{fontWeight:900,color:COLORS.teal }}>不用赔</span>——但<span style={{fontWeight:900,color:COLORS.red }}>不可继续售卖</span> <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<AlertTriangle size={24} color={COLORS.red}/>} enter={enter(112,134)}><span style={{fontWeight:900 }}>伪造标识</span>：伪造/擅自制造<span style={{fontWeight:900 }}>注册商标标识</span>并销售</FactRow>
      </div>
      <div data-final-knowledge="trademark-infringement-law-knowledge-1" style={{position:'absolute',left:904,top:364,width:864,height:330,padding:'14px 20px',border:'5px solid '+COLORS.navy,background:COLORS.navy+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(96,122),translate:interpolate(frame,[96,122],['200px 0px','0px 0px'],CLAMP)}}>
        <Scale size={110} color={COLORS.navy} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.navy}}><Scale size={28} color={COLORS.navy}/>停侵与赔偿的门槛差</div>
        <FactRow color={COLORS.navy} bg={COLORS.navy+"3D"} icon={<Check size={24} color={COLORS.navy}/>} enter={enter(110,132)}>停止侵权<span style={{fontWeight:900,color:COLORS.red }}>不要求过错</span>；<span style={{fontWeight:900 }}>赔偿损失要求过错</span>；误以为未注册商标而同品同标 → 仍属<span style={{fontWeight:900,color:COLORS.red }}>假冒</span> <span style={{fontWeight:900 }}>(√)</span></FactRow>
      </div>
    </div>
  </Shell>;
};

export const TrademarkInfringement02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const priorX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="知13.2" title="不侵权：先用权 与 正当使用">
    <div data-layout="prioruse-legitimate-gates-2" data-visual-anchor="comparison-axis" data-visual-grammar="prioruse-gate,legitimate-band" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="trademark-infringement-scene-02-rule" data-focal-channels="contrast,motion,annotation" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="prioruse-claim-travel" style={{position:'absolute',left:priorX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.teal,fontSize:20,fontWeight:900,color:COLORS.teal,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Undo2 size={24} color={COLORS.teal}/>先用权抗辩
      </div>
      <div data-final-knowledge="trademark-infringement-scene-02-prioruse" style={{position:'absolute',left:0,top:90,width:864,height:330,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <Undo2 size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.teal}}><Undo2 size={28} color={COLORS.teal}/>商标先用权</div>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(58,80)}><span style={{fontWeight:900 }}>要件</span>：注册前已先使用 + <span style={{fontWeight:900 }}>有一定影响</span> → <span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>原范围内继续使用</span></FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Coins size={24} color={COLORS.copper}/>} enter={enter(68,90)}>权利人可要求加<span style={{fontWeight:900,color:COLORS.red }}>区分标识</span>——“乙的小明”；甲先用于乙注册前 → <span style={{fontWeight:900,color:COLORS.red }}>不停产销售</span>、丙后用仍<span style={{fontWeight:900,color:COLORS.red }}>假冒</span> <span style={{fontWeight:900 }}>(√)</span></FactRow>
      </div>
      <div data-final-knowledge="trademark-infringement-law-knowledge-1" data-stateful-terminal="prioruse-claim-travel" style={{position:'absolute',left:904,top:90,width:864,height:330,padding:'14px 20px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <Check size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Check size={28} color={COLORS.copper}/>正当使用——防垄断</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(78,100)}>使用<span style={{fontWeight:900 }}>通用名称、地名</span>——苹果手机商标<span style={{fontWeight:900,color:COLORS.teal }}>不能禁我指代水果</span></FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(88,110)}>使用<span style={{fontWeight:900 }}>三维标志中</span>商品自身形状 / 技术效果需要形状 / 实质价值形状——汽车<span style={{fontWeight:900,color:COLORS.teal }}>流线型</span>降阻</FactRow>
      </div>
      <div data-final-knowledge="trademark-infringement-knowledge-2" style={{position:'absolute',left:0,top:444,width:1768,height:250,padding:'14px 22px',border:'5px dashed '+COLORS.gold,background:COLORS.teal+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(88,114),translate:interpolate(frame,[88,114],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Stamp size={30} color={COLORS.copper}/>一线记</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<BadgeCheck size={24} color={COLORS.copper}/>} enter={enter(102,124)}>口诀：<span style={{fontWeight:900 }}>假冒同品同标；仿冒近似+混淆；反向假冒撕标换标再卖</span>；<span style={{fontWeight:900 }}>善意销售停侵不赔、证明来源</span>；<span style={{fontWeight:900 }}>先用权、正当使用不侵权</span></FactRow>
      </div>
    </div>
  </Shell>;
};

export const TrademarkInfringement=()=> <AbsoluteFill>
  <TimelineSequence name="01-trademark-infringement-scene-01" start={SCENES['trademark-infringement-scene-01'].start} duration={SCENES['trademark-infringement-scene-01'].duration}><TrademarkInfringement01Scene/></TimelineSequence>
  <TimelineSequence name="02-trademark-infringement-scene-02" start={SCENES['trademark-infringement-scene-02'].start} duration={SCENES['trademark-infringement-scene-02'].duration}><TrademarkInfringement02Scene/></TimelineSequence>
</AbsoluteFill>;
