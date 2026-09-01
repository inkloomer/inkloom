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

const FactRow=({color,icon,enter,children}:{readonly color:string;readonly icon:ReactNode;readonly enter:number;readonly children:ReactNode})=>(
  <div style={{display:'flex',alignItems:'center',gap:12,padding:'9px 14px',background:COLORS.paper,borderLeft:'6px solid '+color,opacity:enter}}>
    <span style={{display:'flex',flexShrink:0}}>{icon}</span>
    <span style={{fontSize:21,fontWeight:800,lineHeight:1.45}}>{children}</span>
  </div>
);

const Chip=({color,icon,text}:{readonly color:string;readonly icon?:ReactNode;readonly text:string})=>(
  <div style={{display:'flex',alignItems:'center',gap:8,padding:'7px 13px',background:COLORS.paper,border:'3px solid '+color,fontSize:20,fontWeight:900,color}}>
    {icon}{text}
  </div>
);

export const UrbanRuralPlanningLaw01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const formX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="经9.1" title="建设用地规划许可三条路">
    <div data-layout="permit-three-lanes-1" data-visual-anchor="flow-path" data-visual-grammar="permit-lane-triad,mnemonic-band" data-text-treatments="chip,stamp,thin-underline" data-focal-rule="urban-rural-planning-law-scene-01-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="permit-form-travel" style={{position:'absolute',left:formX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.navy,fontSize:20,fontWeight:900,color:COLORS.navy,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <FileText size={24} color={COLORS.navy}/>规划许可申请
      </div>
      <div data-final-knowledge="urban-rural-planning-law-scene-01-alloc" style={{position:'absolute',left:0,top:90,width:560,height:330,padding:'14px 18px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <Landmark size={100} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:2,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:22,fontWeight:900,color:COLORS.copper}}><Landmark size={26} color={COLORS.copper}/>① 划拨地</div>
        <FactRow color={COLORS.copper} icon={<Send size={24} color={COLORS.copper}/>} enter={enter(58,80)}>向<span style={{fontWeight:900 }}>县级以上政府土地主管部门</span>申请 → 县级以上政府<span style={{fontWeight:900 }}>审批划拨</span> → 取得<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>建设用地规划许可证</span></FactRow>
      </div>
      <div data-final-knowledge="urban-rural-planning-law-scene-01-grant" style={{position:'absolute',left:604,top:90,width:560,height:330,padding:'14px 18px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(54,80),translate:interpolate(frame,[54,80],['0px 26px','0px 0px'],CLAMP)}}>
        <FileText size={100} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:2,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:22,fontWeight:900,color:COLORS.teal}}><FileText size={26} color={COLORS.teal}/>② 出让地</div>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>先许可，后用地</span>：先取得<span style={{fontWeight:900 }}>批准、核准、备案文件</span> → 提出许可申请 → <span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>城乡规划部门</span>核发许可证</FactRow>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(78,100)}>未取得批准文件直接签出让合同领证 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
      </div>
      <div data-final-knowledge="urban-rural-planning-law-scene-01-rural" style={{position:'absolute',left:1208,top:90,width:560,height:330,padding:'14px 18px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(64,90),translate:interpolate(frame,[64,90],['200px 0px','0px 0px'],CLAMP)}}>
        <Store size={100} color={COLORS.gold} strokeWidth={1.2} style={{position:'absolute',right:2,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:22,fontWeight:900,color:COLORS.copper}}><Store size={26} color={COLORS.copper}/>③ 乡村建设</div>
        <FactRow color={COLORS.copper} icon={<Send size={24} color={COLORS.copper}/>} enter={enter(78,100)}>向<span style={{fontWeight:900 }}>乡镇政府</span>申请 → <span style={{fontWeight:900 }}>城市、县规划主管部门</span>核发<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>乡村建设规划许可证</span> → 再办用地审批</FactRow>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(88,110)}><span style={{fontWeight:900,color:COLORS.red }}>不得占用农用地</span>——确需占用先办<span style={{fontWeight:900 }}>农用地转用审批</span>；板材厂占永久基本农田建厂房 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
      </div>
      <div data-final-knowledge="urban-rural-planning-law-knowledge-1" data-stateful-terminal="permit-form-travel" style={{position:'absolute',left:0,top:444,width:1768,height:250,padding:'14px 22px',border:'5px dashed '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(88,114),translate:interpolate(frame,[88,114],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Stamp size={30} color={COLORS.copper}/>三条路记忆口诀 与 优先项目</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.copper} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(102,124)}><span style={{fontWeight:900 }}>划拨先申请，出让先立项，乡村报乡镇</span></FactRow>
          <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(112,134)}><span style={{fontWeight:900 }}>镇建设用地</span>应优先安排<span style={{fontWeight:900,color:COLORS.teal }}>公共服务设施</span>——商业综合体和高端住宅 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const UrbanRuralPlanningLaw02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const tentX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="经9.2" title="临时建设 与 房地产开发用地">
    <div data-layout="temporary-development-lane-2" data-visual-anchor="boundary" data-visual-grammar="temporary-demolish-gate,mnemonic-contrast" data-text-treatments="chip,external-negation,soft-highlight" data-focal-rule="urban-rural-planning-law-scene-02-rule" data-focal-channels="contrast,motion,annotation" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="temporary-build-travel" style={{position:'absolute',left:tentX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.gold,fontSize:20,fontWeight:900,color:COLORS.copper,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Stamp size={24} color={COLORS.copper}/>临时展棚
      </div>
      <div data-final-knowledge="urban-rural-planning-law-scene-02-temporary" style={{position:'absolute',left:0,top:90,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <Undo2 size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Undo2 size={28} color={COLORS.copper}/>临时建设两规则</div>
        <FactRow color={COLORS.copper} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(58,80)}><span style={{fontWeight:900 }}>批准</span>：经<span style={{fontWeight:900 }}>城市、县政府城乡规划主管部门</span>批准</FactRow>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(68,90)}>在批准的使用期限内<span style={{fontWeight:900,color:COLORS.red }}>自行拆除</span>，<span style={{fontWeight:900,color:COLORS.red }}>不得转为永久性建筑</span>——届满改造为长期商铺 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
      </div>
      <div data-final-knowledge="urban-rural-planning-law-knowledge-2" data-stateful-terminal="temporary-build-travel" style={{position:'absolute',left:904,top:90,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <Check size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.teal}}><Check size={28} color={COLORS.teal}/>口诀与对照</div>
        <FactRow color={COLORS.copper} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(68,90)}>划拨<span style={{fontWeight:900 }}>先申请</span>、出让<span style={{fontWeight:900 }}>先立项</span>、乡村<span style={{fontWeight:900 }}>报乡镇</span>；镇优先安排<span style={{fontWeight:900,color:COLORS.teal }}>公共服务设施</span>（商业综合体 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span>）</FactRow>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>房地产开发</span>须<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>限期动工</span>——土地闲置<span style={{fontWeight:900 }}>满1年</span>可征闲置费</FactRow>
      </div>
    </div>
  </Shell>;
};

export const UrbanRuralPlanningLaw03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="经9.3" title="房地产开发用地：出让 与 划拨">
    <div data-layout="grant-alloc-comparison-3" data-visual-anchor="comparison-axis" data-visual-grammar="grant-alloc-band,deadline-gate" data-text-treatments="chip,soft-highlight,thin-underline" data-focal-rule="urban-rural-planning-law-scene-03-rule" data-focal-channels="contrast,icon,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="urban-rural-planning-law-scene-03-grant" style={{position:'absolute',left:0,top:0,width:864,height:400,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <Coins size={120} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Coins size={30} color={COLORS.copper}/>出让</div>
        <FactRow color={COLORS.copper} icon={<Coins size={24} color={COLORS.copper}/>} enter={enter(26,48)}><span style={{fontWeight:900,color:COLORS.red }}>有期限限制</span> + 支付<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>土地出让金</span></FactRow>
        <FactRow color={COLORS.copper} icon={<GitBranch size={24} color={COLORS.copper}/>} enter={enter(36,58)}>具体方式：<span style={{fontWeight:900 }}>拍卖、招标、协议</span></FactRow>
      </div>
      <div data-final-knowledge="urban-rural-planning-law-scene-03-alloc" style={{position:'absolute',left:904,top:0,width:864,height:400,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <Landmark size={120} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.teal}}><Landmark size={30} color={COLORS.teal}/>划拨</div>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(40,62)}><span style={{fontWeight:900,color:COLORS.teal }}>无期限限制</span> + <span style={{fontWeight:900,color:COLORS.teal }}>无土地出让金</span></FactRow>
        <FactRow color={COLORS.gold} icon={<AlertTriangle size={24} color={COLORS.gold}/>} enter={enter(50,72)}>房地产开发须<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>限期动工</span>——闲置<span style={{fontWeight:900 }}>满1年</span>可征闲置费</FactRow>
      </div>
      <div data-final-knowledge="urban-rural-planning-law-knowledge-3" style={{position:'absolute',left:0,right:0,top:424,bottom:0,display:'flex',alignItems:'center',gap:18,border:'4px solid '+COLORS.gold,background:COLORS.gold+'66',padding:'12px 24px',opacity:enter(64,90)}}>
        <Stamp size={34} color={COLORS.ink}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.5}}>出让 vs 划拨一线记：<span style={{fontWeight:900,color:COLORS.copper }}>有偿有期限</span> 对 <span style={{fontWeight:900,color:COLORS.teal }}>无偿无期限</span>；乡村建设<span style={{fontWeight:900 }}>先领乡村建设规划许可证</span>再办用地审批</div>
      </div>
    </div>
  </Shell>;
};

export const UrbanRuralPlanningLaw=()=> <AbsoluteFill>
  <TimelineSequence name="01-urban-rural-planning-law-scene-01" start={SCENES['urban-rural-planning-law-scene-01'].start} duration={SCENES['urban-rural-planning-law-scene-01'].duration}><UrbanRuralPlanningLaw01Scene/></TimelineSequence>
  <TimelineSequence name="02-urban-rural-planning-law-scene-02" start={SCENES['urban-rural-planning-law-scene-02'].start} duration={SCENES['urban-rural-planning-law-scene-02'].duration}><UrbanRuralPlanningLaw02Scene/></TimelineSequence>
  <TimelineSequence name="03-urban-rural-planning-law-scene-03" start={SCENES['urban-rural-planning-law-scene-03'].start} duration={SCENES['urban-rural-planning-law-scene-03'].duration}><UrbanRuralPlanningLaw03Scene/></TimelineSequence>
</AbsoluteFill>;
