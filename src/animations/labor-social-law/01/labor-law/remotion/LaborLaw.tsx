import type {ReactNode} from 'react';
import {Scale, Ban, Check, Users, Coins, AlertTriangle, Megaphone, Eye, Stamp, GitBranch, Split, Shield, Handshake, FileText, Landmark, Undo2, BadgeCheck, Store, Send, Baby} from 'lucide-react';
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

export const LaborLaw01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const leaveX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="劳1.1" title="工时制度 与 带薪年休假">
    <div data-layout="worktime-leave-board-1" data-visual-anchor="comparison-axis" data-visual-grammar="worktime-trio,leave-stairs" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="labor-law-scene-01-rule" data-focal-channels="contrast,motion,icon" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="labor-law-scene-01-worktime" style={{position:'absolute',left:0,top:0,width:864,height:290,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <Coins size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Coins size={28} color={COLORS.copper}/>三种工时制</div>
        <FactRow color={COLORS.copper} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(26,48)}><span style={{fontWeight:900 }}>标准</span>：每日 <span style={{fontWeight:900 }}>8小时</span>、每周 <span style={{fontWeight:900 }}>40/44小时</span>，每周至少休息 <span style={{fontWeight:900 }}>1天</span></FactRow>
        <FactRow color={COLORS.teal} icon={<Undo2 size={24} color={COLORS.teal}/>} enter={enter(36,58)}><span style={{fontWeight:900 }}>缩短</span>（少于8小时）：矿山井下、高山、有毒有害、特别繁重作业 / <span style={{fontWeight:900 }}>夜班</span> / <span style={{fontWeight:900 }}>哺乳期女职工</span></FactRow>
        <FactRow color={COLORS.red} icon={<AlertTriangle size={24} color={COLORS.red}/>} enter={enter(46,68)}><span style={{fontWeight:900,color:COLORS.red }}>延长</span>：必须符合法律规定（见加班）</FactRow>
      </div>
      <div data-stateful-source="annual-leave-travel" style={{position:'absolute',left:leaveX,top:310,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.gold,fontSize:20,fontWeight:900,color:COLORS.copper,opacity:enter(46,66),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <BadgeCheck size={24} color={COLORS.copper}/>累计工作年限
      </div>
      <div data-final-knowledge="labor-law-knowledge-1" data-stateful-terminal="annual-leave-travel" style={{position:'absolute',left:904,top:0,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <BadgeCheck size={120} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.09,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><BadgeCheck size={28} color={COLORS.copper}/>带薪年休假——按累计工作时间</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:10}}>
          <div style={{padding:'10px 12px',background:COLORS.paper,border:'3px solid '+COLORS.copper,fontSize:20,fontWeight:900,color:COLORS.copper,textAlign:'center'}}>1年≤x&lt;10年<br/><span style={{fontSize:26,fontWeight:900,color:COLORS.red }}>5天</span></div>
          <div style={{padding:'10px 12px',background:COLORS.paper,border:'3px solid '+COLORS.copper,fontSize:20,fontWeight:900,color:COLORS.copper,textAlign:'center'}}>10年≤x&lt;20年<br/><span style={{fontSize:26,fontWeight:900,color:COLORS.red }}>10天</span></div>
          <div style={{padding:'10px 12px',background:COLORS.paper,border:'3px solid '+COLORS.copper,fontSize:20,fontWeight:900,color:COLORS.copper,textAlign:'center'}}>x≥20年<br/><span style={{fontSize:26,fontWeight:900,color:COLORS.red }}>15天</span></div>
        </div>
        <FactRow color={COLORS.copper} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(70,92)}>连续工作<span style={{fontWeight:900 }}>1年以上</span>即享有；休假期间<span style={{fontWeight:900,color:COLORS.teal }}>工资照发</span></FactRow>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(80,102)}><span style={{fontWeight:900 }}>法定休假日、休息日</span><span style={{fontWeight:900,color:COLORS.red }}>不计入</span>年休假</FactRow>
      </div>
    </div>
  </Shell>;
};

export const LaborLaw02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const payX=interpolate(frame,[52,112],[260,1140],CLAMP);
  return <Shell code="劳1.2" title="加班：时间限制 与 报酬倍率">
    <div data-layout="overtime-pay-ladder-2" data-visual-anchor="flow-path" data-visual-grammar="overtime-limit-band,pay-ladder" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="labor-law-scene-02-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="labor-law-scene-02-limit" style={{position:'absolute',left:0,top:0,width:864,height:330,padding:'14px 20px',border:'5px solid '+COLORS.navy,background:COLORS.navy+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <AlertTriangle size={110} color={COLORS.navy} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.navy}}><AlertTriangle size={28} color={COLORS.navy}/>加班时间限制</div>
        <FactRow color={COLORS.navy} icon={<Check size={24} color={COLORS.navy}/>} enter={enter(26,48)}><span style={{fontWeight:900 }}>一般</span>：与工会和劳动者协商，每日≤<span style={{fontWeight:900 }}>1小时</span>；<span style={{fontWeight:900 }}>特殊原因</span>：保障健康前提下每日≤<span style={{fontWeight:900 }}>3小时</span>、每月≤<span style={{fontWeight:900 }}>36小时</span></FactRow>
        <FactRow color={COLORS.teal} icon={<Undo2 size={24} color={COLORS.teal}/>} enter={enter(36,58)}><span style={{fontWeight:900,color:COLORS.red }}>不受限制</span>：自然灾害事故<span style={{fontWeight:900 }}>紧急处理</span>（地震抢修 12小时 <span style={{fontWeight:900 }}>(√)</span>）/ 设施故障<span style={{fontWeight:900 }}>及时抢修</span> / 法律行政法规规定的其他情形</FactRow>
        <FactRow color={COLORS.copper} icon={<Eye size={24} color={COLORS.copper}/>} enter={enter(46,68)}><span style={{fontWeight:900 }}>举证</span>：劳动者就<span style={{fontWeight:900 }}>加班事实</span>举证；单位掌握证据<span style={{fontWeight:900,color:COLORS.red }}>拒不提供</span> → 单位担不利后果</FactRow>
      </div>
      <div data-final-knowledge="labor-law-scene-02-pay" style={{position:'absolute',left:904,top:0,width:864,height:330,padding:'14px 20px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <Coins size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Coins size={28} color={COLORS.copper}/>加班报酬三级倍率</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:10}}>
          <div style={{padding:'10px 10px',background:COLORS.paper,border:'3px solid '+COLORS.copper,fontSize:19,fontWeight:900,color:COLORS.copper,textAlign:'center'}}>延时加班<br/><span style={{fontSize:26,fontWeight:900,color:COLORS.red }}>150%</span></div>
          <div style={{padding:'10px 10px',background:COLORS.paper,border:'3px solid '+COLORS.copper,fontSize:19,fontWeight:900,color:COLORS.copper,textAlign:'center'}}>休息日<br/><span style={{fontSize:26,fontWeight:900,color:COLORS.red }}>200%</span></div>
          <div style={{padding:'10px 10px',background:COLORS.paper,border:'3px solid '+COLORS.copper,fontSize:19,fontWeight:900,color:COLORS.copper,textAlign:'center'}}>法定节假日<br/><span style={{fontSize:26,fontWeight:900,color:COLORS.red }}>300%</span></div>
        </div>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(76,98)}><span style={{fontWeight:900 }}>休息日</span>加班<span style={{fontWeight:900,color:COLORS.teal }}>可补休</span>——补休后无须支付加班工资 <span style={{fontWeight:900 }}>(√)</span>；不能补休才付 200%</FactRow>
      </div>
      <div data-final-knowledge="labor-law-knowledge-2" data-stateful-source="overtime-pay-travel" style={{position:'absolute',left:0,top:354,width:1768,height:340,padding:'14px 22px',border:'5px dashed '+COLORS.gold,background:COLORS.teal+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(64,90),translate:interpolate(frame,[64,90],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Coins size={30} color={COLORS.copper}/>工资规则</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Coins size={24} color={COLORS.copper}/>} enter={enter(78,100)}>以<span style={{fontWeight:900 }}>货币</span>形式<span style={{fontWeight:900 }}>按月支付</span>，<span style={{fontWeight:900,color:COLORS.red }}>不得克扣或无故拖欠</span>；<span style={{fontWeight:900 }}>同工同酬</span>；法定休假日、婚丧假、社会活动期间照付</FactRow>
          <FactRow color={COLORS.red} bg={COLORS.teal+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(88,110)}><span style={{fontWeight:900 }}>最低工资</span>：省级政府规定，报国务院备案；<span style={{fontWeight:900,color:COLORS.red }}>不包括</span>：延长工时工资、<span style={{fontWeight:900 }}>特殊环境津贴</span>、法定福利待遇</FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const LaborLaw03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const shieldX=interpolate(frame,[52,112],[260,1140],CLAMP);
  return <Shell code="劳1.3" title="女职工 与 未成年工特殊保护">
    <div data-layout="protection-shield-columns-3" data-visual-anchor="role-pair" data-visual-grammar="protection-stage-band,minor-guard-band" data-text-treatments="chip,external-negation,soft-highlight" data-focal-rule="labor-law-scene-03-rule" data-focal-channels="contrast,icon,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="labor-law-scene-03-female" style={{position:'absolute',left:0,top:0,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <Shield size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Shield size={28} color={COLORS.copper}/>女职工·五个阶段</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Ban size={24} color={COLORS.copper}/>} enter={enter(26,48)}><span style={{fontWeight:900 }}>一般</span>：禁矿山井下、<span style={{fontWeight:900 }}>第四级体力劳动强度</span></FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Ban size={24} color={COLORS.copper}/>} enter={enter(36,58)}><span style={{fontWeight:900 }}>经期</span>：禁<span style={{fontWeight:900 }}>高处、低温、冷水</span>和<span style={{fontWeight:900 }}>第三级</span>——有毒有害不禁 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Baby size={24} color={COLORS.red}/>} enter={enter(46,68)}><span style={{fontWeight:900 }}>孕期</span>：禁第三级；怀孕<span style={{fontWeight:900 }}>7个月以上</span> → <span style={{fontWeight:900,color:COLORS.red }}>禁加班、禁夜班</span></FactRow>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(56,78)}><span style={{fontWeight:900 }}>产假</span>：生育享受不少于 <span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>98天</span></FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Baby size={24} color={COLORS.red}/>} enter={enter(66,88)}><span style={{fontWeight:900 }}>哺乳期</span>（未满1周岁）：禁第三级 + <span style={{fontWeight:900,color:COLORS.red }}>禁加班、禁夜班</span>——安排夜班 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
      </div>
      <div data-final-knowledge="labor-law-knowledge-3" data-stateful-terminal="minor-guard-travel" style={{position:'absolute',left:904,top:0,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <Users size={120} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.09,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.teal}}><Users size={28} color={COLORS.teal}/>未成年工（16-18周岁）</div>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(40,62)}><span style={{fontWeight:900 }}>禁止</span>：矿山井下、<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>有毒有害</span>、第四级体力劳动强度——化工厂安排16周岁有毒有害 <span style={{fontWeight:900,color:COLORS.red }}>(×定期体检也不行)</span></FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<FileText size={24} color={COLORS.copper}/>} enter={enter(50,72)}><span style={{fontWeight:900 }}>培训</span>：<span style={{fontWeight:900 }}>上岗前培训</span></FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Eye size={24} color={COLORS.copper}/>} enter={enter(60,82)}><span style={{fontWeight:900 }}>体检</span>：用人单位<span style={{fontWeight:900 }}>定期健康检查</span></FactRow>
      </div>
      <div data-stateful-source="minor-guard-travel" style={{position:'absolute',left:shieldX,top:250,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.teal,fontSize:20,fontWeight:900,color:COLORS.teal,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Users size={24} color={COLORS.teal}/>特殊保护令
      </div>
    </div>
  </Shell>;
};

export const LaborLaw=()=> <AbsoluteFill>
  <TimelineSequence name="01-labor-law-scene-01" start={SCENES['labor-law-scene-01'].start} duration={SCENES['labor-law-scene-01'].duration}><LaborLaw01Scene/></TimelineSequence>
  <TimelineSequence name="02-labor-law-scene-02" start={SCENES['labor-law-scene-02'].start} duration={SCENES['labor-law-scene-02'].duration}><LaborLaw02Scene/></TimelineSequence>
  <TimelineSequence name="03-labor-law-scene-03" start={SCENES['labor-law-scene-03'].start} duration={SCENES['labor-law-scene-03'].duration}><LaborLaw03Scene/></TimelineSequence>
</AbsoluteFill>;
