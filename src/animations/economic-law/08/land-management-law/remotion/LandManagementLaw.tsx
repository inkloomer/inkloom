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

export const LandManagementLaw01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const deedX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="经8.1" title="建设用地：国有 与 集体">
    <div data-layout="land-use-dual-deed-1" data-visual-anchor="comparison-axis" data-visual-grammar="state-collective-deeds,reuse-band" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="land-management-law-scene-01-rule" data-focal-channels="contrast,icon,motion" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="collective-deed-travel" style={{position:'absolute',left:deedX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.teal,fontSize:20,fontWeight:900,color:COLORS.teal,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <FileText size={24} color={COLORS.teal}/>集体经营性建设用地
      </div>
      <div data-final-knowledge="land-management-law-scene-01-state" style={{position:'absolute',left:0,top:90,width:864,height:320,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <Landmark size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Landmark size={28} color={COLORS.copper}/>国有建设用地</div>
        <FactRow color={COLORS.copper} icon={<Coins size={24} color={COLORS.copper}/>} enter={enter(58,80)}><span style={{fontWeight:900 }}>取得</span>：<span style={{fontWeight:900 }}>出让</span>（有偿）/ <span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>划拨</span>（无偿，用于公益）——划拨地直接转让给开发商 <span style={{fontWeight:900,color:COLORS.red }}>(×不得随意流转)</span></FactRow>
        <FactRow color={COLORS.red} icon={<Undo2 size={24} color={COLORS.red}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>收回</span>：公共利益需要（<span style={{fontWeight:900 }}>应补偿</span>）/ 期限届满未续 / 停止使用 / 经核准报废</FactRow>
      </div>
      <div data-final-knowledge="land-management-law-scene-01-collective" data-stateful-terminal="collective-deed-travel" style={{position:'absolute',left:904,top:90,width:864,height:320,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <Store size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.teal}}><Store size={28} color={COLORS.teal}/>集体经营性建设用地</div>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>取得</span>：出让或出租——<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>经营性用途</span> + 依法登记 + 村民会议 <span style={{fontWeight:900 }}>2/3</span>以上成员或村民代表同意</FactRow>
        <FactRow color={COLORS.copper} icon={<GitBranch size={24} color={COLORS.copper}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>再流转</span>：转让、互换、出资、赠与、<span style={{fontWeight:900 }}>抵押</span>——未登记抵押合同<span style={{fontWeight:900,color:COLORS.teal }}>仍有效</span>（登记是物权变动要件）<span style={{fontWeight:900,color:COLORS.red }}>(×无效)</span></FactRow>
      </div>
      <div data-final-knowledge="land-management-law-knowledge-1" style={{position:'absolute',left:0,top:434,width:1768,height:260,padding:'14px 22px',border:'5px dashed '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(88,114),translate:interpolate(frame,[88,114],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Users size={30} color={COLORS.copper}/>农用地与宅基地</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.copper} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(102,124)}><span style={{fontWeight:900 }}>家庭承包</span>：耕地<span style={{fontWeight:900 }}>30年</span>、草地<span style={{fontWeight:900 }}>30-50年</span>、林地<span style={{fontWeight:900 }}>30-70年</span>，期满可续；<span style={{fontWeight:900 }}>四荒地</span>可招标、拍卖、<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>公开协商</span>承包（荒山发包给李铁蛋 <span style={{fontWeight:900 }}>(√)</span>）</FactRow>
          <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(112,134)}><span style={{fontWeight:900 }}>宅基地</span>：<span style={{fontWeight:900,color:COLORS.red }}>一户一宅</span>，<span style={{fontWeight:900,color:COLORS.red }}>不得占用永久基本农田</span>——赵六再申请 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span>；出卖出租赠与后再申请<span style={{fontWeight:900,color:COLORS.red }}>不予批准</span>；可<span style={{fontWeight:900 }}>自愿有偿退出</span></FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const LandManagementLaw02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const fieldX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="经8.2" title="永久基本农田 与 土地规划">
    <div data-layout="farmland-plan-lane-2" data-visual-anchor="flow-path" data-visual-grammar="farmland-lane,plan-band" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="land-management-law-scene-02-rule" data-focal-channels="contrast,motion,icon" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="farmland-approval-travel" style={{position:'absolute',left:fieldX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.red,fontSize:20,fontWeight:900,color:COLORS.red,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Shield size={24} color={COLORS.red}/>占用永久基本农田审批
      </div>
      <div data-final-knowledge="land-management-law-scene-02-farmland" style={{position:'absolute',left:0,top:90,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <Shield size={110} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.red}}><Shield size={28} color={COLORS.red}/>永久基本农田</div>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Check size={24} color={COLORS.red}/>} enter={enter(58,80)}><span style={{fontWeight:900 }}>范围</span>：粮棉油糖菜、科教试验田、<span style={{fontWeight:900 }}>高标准农田</span>；划定≥耕地<span style={{fontWeight:900 }}>80%</span>（比例由<span style={{fontWeight:900 }}>国务院</span>确定）；<span style={{fontWeight:900 }}>乡镇政府</span>组织实施落实到地块</FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(68,90)}><span style={{fontWeight:900,color:COLORS.red }}>禁止</span>占用永久基本农田发展<span style={{fontWeight:900,color:COLORS.red }}>林果业</span>和<span style={{fontWeight:900,color:COLORS.red }}>挖塘养鱼</span>；转用或征收须<span style={{fontWeight:900 }}>国务院批准</span></FactRow>
        <FactRow color={COLORS.gold} bg={COLORS.gold+"4D"} icon={<Coins size={24} color={COLORS.gold}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>占用补偿</span>：口诀 <span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>有占有补，总量不减质量不降，省级监督验收</span></FactRow>
      </div>
      <div data-final-knowledge="land-management-law-knowledge-2" data-stateful-terminal="farmland-approval-travel" style={{position:'absolute',left:904,top:90,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.indigo,background:COLORS.indigo+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <FileText size={110} color={COLORS.indigo} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.indigo}}><FileText size={28} color={COLORS.indigo}/>土地利用规划</div>
        <FactRow color={COLORS.indigo} bg={COLORS.indigo+"3D"} icon={<Check size={24} color={COLORS.indigo}/>} enter={enter(68,90)}>建设用地<span style={{fontWeight:900,color:COLORS.red }}>总量≤</span>上级控制指标；耕地保有量<span style={{fontWeight:900,color:COLORS.teal }}>≥</span>上级指标，确保<span style={{fontWeight:900 }}>耕地总量不减少</span></FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<GitBranch size={24} color={COLORS.copper}/>} enter={enter(78,100)}>已编制<span style={{fontWeight:900 }}>国土空间规划</span>的，不再编土地利用总体规划和城乡规划</FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<AlertTriangle size={24} color={COLORS.red}/>} enter={enter(88,110)}>耕地转用后<span style={{fontWeight:900 }}>满1年</span>未动工才可征<span style={{fontWeight:900 }}>闲置费</span>——大半年征闲置费 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
      </div>
    </div>
  </Shell>;
};

export const LandManagementLaw03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const decreeX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="经8.3" title="土地征收 与 争议解决">
    <div data-layout="expropriation-decree-lane-3" data-visual-anchor="timeline-gate" data-visual-grammar="expropriation-gate,dispute-first-track" data-text-treatments="chip,stamp,thin-underline" data-focal-rule="land-management-law-scene-03-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="expropriation-decree-travel" style={{position:'absolute',left:decreeX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.navy,fontSize:20,fontWeight:900,color:COLORS.navy,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Stamp size={24} color={COLORS.navy}/>征收决定
      </div>
      <div data-final-knowledge="land-management-law-scene-03-expropriation" style={{position:'absolute',left:0,top:90,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.navy,background:COLORS.navy+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <Landmark size={110} color={COLORS.navy} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.navy}}><Landmark size={28} color={COLORS.navy}/>土地征收</div>
        <FactRow color={COLORS.navy} icon={<Check size={24} color={COLORS.navy}/>} enter={enter(58,80)}><span style={{fontWeight:900 }}>前提</span>：必须基于<span style={{fontWeight:900,background:COLORS.navy+'26',padding:'1px 6px'}}>公共利益</span>——商业综合体征收 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span>；决定权在<span style={{fontWeight:900 }}>省级以上政府</span>，县政府无权</FactRow>
        <FactRow color={COLORS.red} icon={<AlertTriangle size={24} color={COLORS.red}/>} enter={enter(68,90)}>征收其他土地<span style={{fontWeight:900 }}>超过70公顷</span> → 须经<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>国务院批准</span>——设区市自批75公顷林地 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
        <FactRow color={COLORS.copper} icon={<Coins size={24} color={COLORS.copper}/>} enter={enter(78,100)}>应当<span style={{fontWeight:900 }}>依法补偿</span></FactRow>
      </div>
      <div data-final-knowledge="land-management-law-knowledge-3" data-stateful-terminal="expropriation-decree-travel" style={{position:'absolute',left:904,top:90,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <Split size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.teal}}><Split size={28} color={COLORS.teal}/>临时用地 与 争议解决</div>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>临时用地</span>：<span style={{fontWeight:900,color:COLORS.red }}>不得修建永久性建筑物</span>——地质勘查建永久办公用房 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>单位间土地争议</span>：先由<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>县级以上政府</span>处理，不服再<span style={{fontWeight:900 }}>起诉</span>——协商不成直接起诉 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span>；争议解决前<span style={{fontWeight:900,color:COLORS.red }}>不得改变土地利用现状</span></FactRow>
      </div>
      <div data-final-knowledge="land-management-law-knowledge-4" style={{position:'absolute',left:0,top:444,width:1768,height:250,padding:'14px 22px',border:'5px dashed '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(88,114),translate:interpolate(frame,[88,114],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Stamp size={30} color={COLORS.copper}/>规划许可与优先项目</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.copper} icon={<FileText size={24} color={COLORS.copper}/>} enter={enter(102,124)}><span style={{fontWeight:900 }}>出让合同内置规划条件</span>；取得批准核准备案文件 → 签订出让合同 → 向<span style={{fontWeight:900 }}>城乡规划主管部门</span>领取<span style={{fontWeight:900 }}>建设用地规划许可证</span></FactRow>
          <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(112,134)}>优先安排：<span style={{fontWeight:900 }}>城市</span>——基础设施 + 公共服务设施；<span style={{fontWeight:900 }}>镇</span>——公共服务设施</FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const LandManagementLaw=()=> <AbsoluteFill>
  <TimelineSequence name="01-land-management-law-scene-01" start={SCENES['land-management-law-scene-01'].start} duration={SCENES['land-management-law-scene-01'].duration}><LandManagementLaw01Scene/></TimelineSequence>
  <TimelineSequence name="02-land-management-law-scene-02" start={SCENES['land-management-law-scene-02'].start} duration={SCENES['land-management-law-scene-02'].duration}><LandManagementLaw02Scene/></TimelineSequence>
  <TimelineSequence name="03-land-management-law-scene-03" start={SCENES['land-management-law-scene-03'].start} duration={SCENES['land-management-law-scene-03'].duration}><LandManagementLaw03Scene/></TimelineSequence>
</AbsoluteFill>;
