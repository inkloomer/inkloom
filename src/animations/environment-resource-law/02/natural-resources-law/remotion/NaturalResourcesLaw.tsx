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

export const NaturalResourcesLaw01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const claimX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="环2.1" title="森林法：权属 与 权属争议">
    <div data-layout="forest-dispute-split-1" data-visual-anchor="flow-target" data-visual-grammar="forest-ownership-band,dispute-first-track" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="natural-resources-law-scene-01-rule" data-focal-channels="contrast,motion,icon" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="forest-claim-travel" style={{position:'absolute',left:claimX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.navy,fontSize:20,fontWeight:900,color:COLORS.navy,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <GitBranch size={24} color={COLORS.navy}/>林地权属争议
      </div>
      <div data-final-knowledge="natural-resources-law-scene-01-ownership" style={{position:'absolute',left:0,top:90,width:864,height:340,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <Store size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Store size={28} color={COLORS.copper}/>森林权属</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(58,80)}><span style={{fontWeight:900 }}>归属</span>：<span style={{fontWeight:900 }}>国家</span>所有（法律规<span style={{fontWeight:900 }}>集体</span>所有除外）；登记：一般→不动产登记机构，重点林区→<span style={{fontWeight:900 }}>国务院自然资源主管部门</span></FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Coins size={24} color={COLORS.copper}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>使用权</span>：国有→确定给经营者，经批准可<span style={{fontWeight:900 }}>转让、出租、作价出资</span>；集体→流转签<span style={{fontWeight:900 }}>书面合同</span>，受让方<span style={{fontWeight:900,color:COLORS.red }}>严重毁坏</span> → 发包或承包方<span style={{fontWeight:900,color:COLORS.red }}>收回经营权</span></FactRow>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Coins size={24} color={COLORS.teal}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>林木</span>：房前屋后、自留地、自留山 → <span style={{fontWeight:900 }}>个人</span>；荒山造林 → <span style={{fontWeight:900 }}>营造者</span></FactRow>
      </div>
      <div data-final-knowledge="natural-resources-law-knowledge-1" data-stateful-terminal="forest-claim-travel" style={{position:'absolute',left:904,top:90,width:864,height:340,padding:'14px 20px',border:'5px solid '+COLORS.navy,background:COLORS.navy+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <Users size={110} color={COLORS.navy} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.navy}}><Users size={28} color={COLORS.navy}/>权属争议——先政府处理再诉讼</div>
        <FactRow color={COLORS.navy} bg={COLORS.navy+"3D"} icon={<Check size={24} color={COLORS.navy}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>单位之间</span> → <span style={{fontWeight:900 }}>县级以上政府</span>处理；<span style={{fontWeight:900 }}>一方是个人</span> → <span style={{fontWeight:900 }}>乡或县级以上政府</span>处理</FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(78,100)}>直接把对方<span style={{fontWeight:900,color:COLORS.red }}>诉至法院 (×)</span>——不服处理决定才能起诉，且是<span style={{fontWeight:900,color:COLORS.red }}>行政诉讼</span>；争议解决前<span style={{fontWeight:900,color:COLORS.red }}>不得砍伐、不得改变林地现状</span></FactRow>
      </div>
      <div data-final-knowledge="natural-resources-law-knowledge-2" style={{position:'absolute',left:0,top:454,width:1768,height:240,padding:'14px 22px',border:'5px dashed '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(88,114),translate:interpolate(frame,[88,114],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Split size={30} color={COLORS.copper}/>森林分类</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Shield size={24} color={COLORS.copper}/>} enter={enter(102,124)}><span style={{fontWeight:900 }}>公益林</span>：涉及非国有林地应与权利人签<span style={{fontWeight:900 }}>书面协议</span>并合理补偿；调整经<span style={{fontWeight:900 }}>原划定机关同意</span></FactRow>
          <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Coins size={24} color={COLORS.teal}/>} enter={enter(112,134)}><span style={{fontWeight:900 }}>商品林</span>：以发挥<span style={{fontWeight:900,color:COLORS.teal }}>经济效益</span>为主要目的</FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const NaturalResourcesLaw02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const axeX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="环2.2" title="林地占用 与 采伐管理">
    <div data-layout="felling-penalty-lane-2" data-visual-anchor="flow-path" data-visual-grammar="occupy-lane,penalty-scale-band" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="natural-resources-law-scene-02-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="temporary-occupy-travel" style={{position:'absolute',left:axeX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.copper,fontSize:20,fontWeight:900,color:COLORS.copper,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <FileText size={24} color={COLORS.copper}/>占用林地审批
      </div>
      <div data-final-knowledge="natural-resources-law-scene-02-occupy" style={{position:'absolute',left:0,top:90,width:864,height:340,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <FileText size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><FileText size={28} color={COLORS.copper}/>林地占用与审批</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(58,80)}><span style={{fontWeight:900 }}>林业项目</span>超标准 → 办理<span style={{fontWeight:900 }}>建设用地审批</span>；<span style={{fontWeight:900 }}>非林业项目</span> → <span style={{fontWeight:900 }}>林业主管部门</span>审核同意 + 缴<span style={{fontWeight:900 }}>森林植被恢复费</span></FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<AlertTriangle size={24} color={COLORS.red}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>临时占用</span>：<span style={{fontWeight:900 }}>县级以上林业主管部门</span>批准，≤<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>2年</span>，<span style={{fontWeight:900,color:COLORS.red }}>不得修建永久性建筑</span>（办公楼5年 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span>），期满后<span style={{fontWeight:900 }}>1年内恢复</span></FactRow>
      </div>
      <div data-final-knowledge="natural-resources-law-knowledge-2" data-stateful-terminal="temporary-occupy-travel" style={{position:'absolute',left:904,top:90,width:864,height:340,padding:'14px 20px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <Ban size={110} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.red}}><Ban size={28} color={COLORS.red}/>采伐管理 与 罚则刻度</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>无需许可证</span>：房屋自留地零星林木、<span style={{fontWeight:900 }}>保护区以外竹林</span></FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(78,100)}><span style={{fontWeight:900,color:COLORS.red }}>盗伐</span>：补种株数<span style={{fontWeight:900 }}>1-5倍</span> + 罚林木价值<span style={{fontWeight:900 }}>5-10倍</span>；<span style={{fontWeight:900,color:COLORS.red }}>滥伐</span>：补种<span style={{fontWeight:900 }}>1-3倍</span> + 罚<span style={{fontWeight:900 }}>3-5倍</span></FactRow>
        <FactRow color={COLORS.gold} bg={COLORS.gold+"4D"} icon={<BadgeCheck size={24} color={COLORS.gold}/>} enter={enter(88,110)}>口诀：<span style={{fontWeight:900 }}>盗伐一五五十，滥伐一三三五</span></FactRow>
      </div>
      <div data-final-knowledge="natural-resources-law-knowledge-3" style={{position:'absolute',left:0,top:454,width:1768,height:240,padding:'14px 22px',border:'5px dashed '+COLORS.teal,background:COLORS.teal+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(88,114),translate:interpolate(frame,[88,114],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Stamp size={30} color={COLORS.copper}/>森林法一线记</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(102,124)}>争议<span style={{fontWeight:900 }}>先政府处理再行政诉讼</span>；临时占用<span style={{fontWeight:900 }}>≤2年</span>不建永久建筑；采伐零星林木竹林<span style={{fontWeight:900,color:COLORS.teal }}>无需许可证</span>；盗滥伐按<span style={{fontWeight:900 }}>倍数补种+罚款</span></FactRow>
      </div>
    </div>
  </Shell>;
};

export const NaturalResourcesLaw03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const pickX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="环2.3" title="矿产资源法：矿业权全流程">
    <div data-layout="mining-right-lane-3" data-visual-anchor="flow-path" data-visual-grammar="mining-right-lane,repair-duty-band" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="natural-resources-law-scene-03-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="mining-permit-travel" style={{position:'absolute',left:pickX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.navy,fontSize:20,fontWeight:900,color:COLORS.navy,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Stamp size={24} color={COLORS.navy}/>勘查·采矿许可证
      </div>
      <div data-final-knowledge="natural-resources-law-scene-03-ownership" style={{position:'absolute',left:0,top:90,width:864,height:330,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <Coins size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Coins size={28} color={COLORS.copper}/>权属 与 矿业权取得</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Ban size={24} color={COLORS.copper}/>} enter={enter(58,80)}><span style={{fontWeight:900 }}>矿产资源一律归国家所有</span>——“一般可集体所有” <span style={{fontWeight:900,color:COLORS.red }}>(×)</span>；开采必须缴<span style={{fontWeight:900 }}>资源税</span></FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>取得</span>：探矿权采矿权<span style={{fontWeight:900 }}>有偿取得</span>，通过<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>招标、拍卖、挂牌</span>出让；<span style={{fontWeight:900 }}>经依法登记发生效力</span></FactRow>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Eye size={24} color={COLORS.teal}/>} enter={enter(78,100)}>矿业权人<span style={{fontWeight:900,color:COLORS.teal }}>优先取得</span>区域内新发现其他矿产；已登记区域<span style={{fontWeight:900,color:COLORS.red }}>不得设立</span>其他矿业权</FactRow>
      </div>
      <div data-final-knowledge="natural-resources-law-scene-03-terms" style={{position:'absolute',left:904,top:90,width:864,height:330,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <Hourglass size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.teal}}><Hourglass size={28} color={COLORS.teal}/>期限 与 探转采</div>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Hourglass size={24} color={COLORS.teal}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>探矿权</span>：<span style={{fontWeight:900 }}>5年</span>，可续<span style={{fontWeight:900 }}>最多3次</span>每次5年；<span style={{fontWeight:900 }}>采矿权</span>：最长<span style={{fontWeight:900,color:COLORS.red }}>不超过30年</span>（20年 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span>）</FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<GitBranch size={24} color={COLORS.copper}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>探转采</span>：探明可供开采资源可在期限内申请，原出让部门<span style={{fontWeight:900 }}>签订采矿权出让合同</span>；暂不能转可<span style={{fontWeight:900 }}>保留</span>，保留期间期限<span style={{fontWeight:900,color:COLORS.teal }}>中止计算</span></FactRow>
        <FactRow color={COLORS.violet ?? COLORS.navy} bg={COLORS.navy+"3D"} icon={<Undo2 size={24} color={COLORS.navy}/>} enter={enter(88,110)}>矿业权可依法<span style={{fontWeight:900 }}>转让、出资、抵押</span>；无需矿业权：<span style={{fontWeight:900 }}>国家出资勘查</span>、个人生活自用采挖<span style={{fontWeight:900 }}>砂石黏土</span>、施工单位批准区域内施工采挖</FactRow>
      </div>
      <div data-final-knowledge="natural-resources-law-knowledge-4" data-stateful-terminal="mining-permit-travel" style={{position:'absolute',left:0,top:444,width:1768,height:250,padding:'14px 22px',border:'5px dashed '+COLORS.gold,background:COLORS.teal+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(88,114),translate:interpolate(frame,[88,114],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Shield size={30} color={COLORS.copper}/>行政许可 与 矿区生态修复</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Stamp size={24} color={COLORS.copper}/>} enter={enter(102,124)}>作业前取得<span style={{fontWeight:900 }}>勘查许可证、采矿许可证</span>；方案<span style={{fontWeight:900,color:COLORS.red }}>重大调整报原出让部门批准</span>——发现新矿脉调整后直接作业 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
          <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(112,134)}><span style={{fontWeight:900 }}>修复义务人=采矿权人</span>，不因采矿权消灭<span style={{fontWeight:900,color:COLORS.red }}>免除</span>；转让由<span style={{fontWeight:900 }}>受让人</span>履行；灭失 → <span style={{fontWeight:900 }}>县级以上政府</span>组织；开采前编<span style={{fontWeight:900 }}>修复方案</span>随开采方案报批</FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const NaturalResourcesLaw=()=> <AbsoluteFill>
  <TimelineSequence name="01-natural-resources-law-scene-01" start={SCENES['natural-resources-law-scene-01'].start} duration={SCENES['natural-resources-law-scene-01'].duration}><NaturalResourcesLaw01Scene/></TimelineSequence>
  <TimelineSequence name="02-natural-resources-law-scene-02" start={SCENES['natural-resources-law-scene-02'].start} duration={SCENES['natural-resources-law-scene-02'].duration}><NaturalResourcesLaw02Scene/></TimelineSequence>
  <TimelineSequence name="03-natural-resources-law-scene-03" start={SCENES['natural-resources-law-scene-03'].start} duration={SCENES['natural-resources-law-scene-03'].duration}><NaturalResourcesLaw03Scene/></TimelineSequence>
</AbsoluteFill>;
