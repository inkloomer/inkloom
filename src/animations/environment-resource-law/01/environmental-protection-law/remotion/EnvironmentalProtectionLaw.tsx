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

export const EnvironmentalProtectionLaw01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const reportX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="环1.1" title="环境影响评价：规划 与 建设项目">
    <div data-layout="evaluation-classify-gate-1" data-visual-anchor="timeline-gate" data-visual-grammar="planning-eval-pair,classify-gate" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="environmental-protection-law-scene-01-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="evaluation-report-travel" style={{position:'absolute',left:reportX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.navy,fontSize:20,fontWeight:900,color:COLORS.navy,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <FileText size={24} color={COLORS.navy}/>环评文件
      </div>
      <div data-final-knowledge="environmental-protection-law-scene-01-planning" style={{position:'absolute',left:0,top:90,width:864,height:250,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <FileText size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><FileText size={28} color={COLORS.copper}/>规划环评——先环评后开工</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(58,80)}><span style={{fontWeight:900 }}>总体规划</span>（土地利用、区域、流域、海域）：规划<span style={{fontWeight:900 }}>编制过程中</span>组织环评</FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>专项规划</span>（工业农业能源水利交通等）：上报审批<span style={{fontWeight:900 }}>前</span>组织环评并<span style={{fontWeight:900 }}>附送报告书</span></FactRow>
      </div>
      <div data-final-knowledge="environmental-protection-law-scene-01-classify" data-stateful-terminal="evaluation-report-travel" style={{position:'absolute',left:904,top:90,width:864,height:250,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <Split size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.teal}}><Split size={28} color={COLORS.teal}/>建设项目分类管理</div>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>重大</span>→<span style={{fontWeight:900 }}>报告书</span>全面环评；<span style={{fontWeight:900 }}>轻度</span>→<span style={{fontWeight:900 }}>报告表</span>分析/专项环评——轻度不环评就开工 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span>；<span style={{fontWeight:900 }}>影响很小</span>→登记表备案<span style={{fontWeight:900,color:COLORS.teal }}>无须环评</span></FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(78,100)}>环评应<span style={{fontWeight:900,color:COLORS.red }}>避免与规划环评重复</span>——采石场与规划完全相同 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span>；受托单位<span style={{fontWeight:900 }}>不得与审批部门有利益关系</span></FactRow>
      </div>
      <div data-final-knowledge="environmental-protection-law-knowledge-1" style={{position:'absolute',left:0,top:364,width:1768,height:330,padding:'14px 22px',border:'5px dashed '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(88,114),translate:interpolate(frame,[88,114],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Landmark size={30} color={COLORS.copper}/>审批 与 变动后处理</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Landmark size={24} color={COLORS.copper}/>} enter={enter(102,124)}><span style={{fontWeight:900 }}>国务院生态环境主管部门审批</span>：核设施绝密工程 / <span style={{fontWeight:900 }}>跨行政区域</span>（跨省高速）/ 国务院审批的项目；跨区争议 → <span style={{fontWeight:900 }}>共同上一级</span>审批；审批<span style={{fontWeight:900,color:COLORS.red }}>不得收费</span>；登记表<span style={{fontWeight:900,color:COLORS.teal }}>备案管理</span></FactRow>
          <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<AlertTriangle size={24} color={COLORS.red}/>} enter={enter(112,134)}><span style={{fontWeight:900,color:COLORS.red }}>重新报批</span>：性质、规模、<span style={{fontWeight:900 }}>地点</span>、工艺、环保措施重大变动——高速延长至丙省 <span style={{fontWeight:900,color:COLORS.red }}>(×直接开工)</span>；批准超<span style={{fontWeight:900 }}>5年</span>才开工 → <span style={{fontWeight:900 }}>重新审核</span>；<span style={{fontWeight:900 }}>后评价</span>：主动组织 / 原审批部门<span style={{fontWeight:900 }}>责成</span></FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const EnvironmentalProtectionLaw02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const taxX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="环1.2" title="环保制度群：三同时 与 环保税">
    <div data-layout="regime-band-house-2" data-visual-anchor="comparison-axis" data-visual-grammar="three-simultaneous-band,tax-standard-band" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="environmental-protection-law-scene-02-rule" data-focal-channels="contrast,icon,motion" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="environmental-protection-law-scene-02-simultaneous" style={{position:'absolute',left:0,top:0,width:864,height:340,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <GitBranch size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><GitBranch size={28} color={COLORS.copper}/>三同时 与 排污许可</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(26,48)}><span style={{fontWeight:900 }}>三同时</span>：环保设施与主体工程<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>同时设计、同时施工、同时投产使用</span>——延后3个月 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<BadgeCheck size={24} color={COLORS.teal}/>} enter={enter(36,58)}><span style={{fontWeight:900 }}>排污许可</span>：新建项目须在<span style={{fontWeight:900 }}>实际排污前</span>申领排污许可证；总量超标 → <span style={{fontWeight:900 }}>省级以上</span>暂停审批新增环评</FactRow>
        <FactRow color={COLORS.gold} icon={<Stamp size={24} color={COLORS.gold}/>} enter={enter(46,68)}><span style={{fontWeight:900 }}>生态红线</span>：重点生态功能区、敏感区、脆弱区；<span style={{fontWeight:900 }}>限制引进外来物种</span></FactRow>
      </div>
      <div data-final-knowledge="environmental-protection-law-scene-02-tax" data-stateful-source="pollution-tax-travel" style={{position:'absolute',left:904,top:0,width:864,height:340,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <Coins size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.teal}}><Coins size={28} color={COLORS.teal}/>环境保护税</div>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Users size={24} color={COLORS.teal}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>纳税人</span>：直接向环境排放应税污染物的企业事业单位和生产经营者</FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<AlertTriangle size={24} color={COLORS.red}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>应缴纳</span>：向污水垃圾集中处理场所排放<span style={{fontWeight:900,color:COLORS.red }}>超过排放标准</span>；<span style={{fontWeight:900 }}>贮存处置固废</span>不符合环保标准</FactRow>
        <FactRow color={COLORS.gold} bg={COLORS.gold+"4D"} icon={<Stamp size={24} color={COLORS.gold}/>} enter={enter(88,110)}>标准口诀：<span style={{fontWeight:900 }}>国无地有，国有地严</span>——省级可制定<span style={{fontWeight:900 }}>严于国标</span>的地方标准，报国务院生态环境主管部门<span style={{fontWeight:900 }}>备案</span></FactRow>
      </div>
      <div data-final-knowledge="environmental-protection-law-knowledge-2" style={{position:'absolute',left:0,top:364,width:1768,height:330,padding:'14px 22px',border:'5px dashed '+COLORS.gold,background:COLORS.paper,display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(88,114),translate:interpolate(frame,[88,114],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Megaphone size={30} color={COLORS.copper}/>信息公开 与 公益诉讼</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Megaphone size={24} color={COLORS.copper}/>} enter={enter(102,124)}><span style={{fontWeight:900 }}>环境状况公报</span>：<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>省级以上</span>生态环境主管部门发布——市级发布 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
          <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Users size={24} color={COLORS.red}/>} enter={enter(112,134)}><span style={{fontWeight:900 }}>公益诉讼主体</span>：市级以上民政部门登记 + 专门从事环保公益<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>连续5年以上</span> + 无违法记录；不得<span style={{fontWeight:900,color:COLORS.red }}>牟取经济利益</span>——绿芽协会3年 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const EnvironmentalProtectionLaw03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const fineX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="环1.3" title="法律责任：超标排放 与 按日计罚">
    <div data-layout="daily-penalty-lane-3" data-visual-anchor="flow-path" data-visual-grammar="penalty-clock-lane,close-gate" data-text-treatments="chip,stamp,external-negation" data-focal-rule="environmental-protection-law-scene-03-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="daily-penalty-travel" style={{position:'absolute',left:fineX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.red,fontSize:20,fontWeight:900,color:COLORS.red,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Coins size={24} color={COLORS.red}/>原处罚数额
      </div>
      <div data-final-knowledge="environmental-protection-law-scene-03-exceed" style={{position:'absolute',left:0,top:90,width:864,height:330,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <Ban size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Ban size={28} color={COLORS.copper}/>超标排放</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(58,80)}><span style={{fontWeight:900 }}>县级以上</span>生态环境主管部门：<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>限制生产、停产整治</span></FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<AlertTriangle size={24} color={COLORS.red}/>} enter={enter(68,90)}>情节严重 → 报经<span style={{fontWeight:900 }}>有批准权的政府</span>批准，责令<span style={{fontWeight:900,color:COLORS.red }}>停业、关闭</span></FactRow>
      </div>
      <div data-final-knowledge="environmental-protection-law-knowledge-3" data-stateful-terminal="daily-penalty-travel" style={{position:'absolute',left:904,top:90,width:864,height:330,padding:'14px 20px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <Coins size={110} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.red}}><Coins size={28} color={COLORS.red}/>按日连续处罚</div>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<AlertTriangle size={24} color={COLORS.red}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>三要件</span>：违法排放 + 罚款处罚 + <span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>拒不改正</span></FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Coins size={24} color={COLORS.red}/>} enter={enter(78,100)}>自<span style={{fontWeight:900 }}>责令改正之日的<span style={{fontWeight:900 }}>次日</span></span>起，按<span style={{fontWeight:900 }}>原处罚数额按日连续处罚</span></FactRow>
      </div>
      <div data-final-knowledge="environmental-protection-law-knowledge-4" style={{position:'absolute',left:0,top:444,width:1768,height:250,padding:'14px 22px',border:'5px dashed '+COLORS.gold,background:COLORS.teal+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(88,114),translate:interpolate(frame,[88,114],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><BadgeCheck size={30} color={COLORS.copper}/>一线记</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(102,124)}>评价：<span style={{fontWeight:900 }}>先环评后开工</span>，分类三档（报告书/报告表/登记表备案）；制度：<span style={{fontWeight:900 }}>三同时</span> + <span style={{fontWeight:900 }}>排污前领证</span> + <span style={{fontWeight:900 }}>按日计罚</span>；诉讼：<span style={{fontWeight:900 }}>市级登记+公益5年+无违法记录</span></FactRow>
      </div>
    </div>
  </Shell>;
};

export const EnvironmentalProtectionLaw=()=> <AbsoluteFill>
  <TimelineSequence name="01-environmental-protection-law-scene-01" start={SCENES['environmental-protection-law-scene-01'].start} duration={SCENES['environmental-protection-law-scene-01'].duration}><EnvironmentalProtectionLaw01Scene/></TimelineSequence>
  <TimelineSequence name="02-environmental-protection-law-scene-02" start={SCENES['environmental-protection-law-scene-02'].start} duration={SCENES['environmental-protection-law-scene-02'].duration}><EnvironmentalProtectionLaw02Scene/></TimelineSequence>
  <TimelineSequence name="03-environmental-protection-law-scene-03" start={SCENES['environmental-protection-law-scene-03'].start} duration={SCENES['environmental-protection-law-scene-03'].duration}><EnvironmentalProtectionLaw03Scene/></TimelineSequence>
</AbsoluteFill>;
