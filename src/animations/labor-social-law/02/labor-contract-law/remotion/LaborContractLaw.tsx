import type {ReactNode} from 'react';
import {Scale, Ban, Check, Users, Coins, AlertTriangle, Megaphone, Eye, Stamp, GitBranch, Split, Shield, Handshake, FileText, Landmark, Undo2, BadgeCheck, Store, Send, Baby, Clock} from 'lucide-react';
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

export const LaborContractLaw01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const doubleX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="劳2.1" title="订立 与 无固定期限合同">
    <div data-layout="openended-doubleten-gate-1" data-visual-anchor="timeline-gate" data-visual-grammar="doubleten-gate,doublewage-clock" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="labor-contract-law-scene-01-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="openended-claim-travel" style={{position:'absolute',left:doubleX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.navy,fontSize:20,fontWeight:900,color:COLORS.navy,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <FileText size={24} color={COLORS.navy}/>无固定期限合同主张
      </div>
      <div data-final-knowledge="labor-contract-law-scene-01-openended" style={{position:'absolute',left:0,top:90,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.navy,background:COLORS.navy+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <FileText size={110} color={COLORS.navy} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.navy}}><FileText size={28} color={COLORS.navy}/>应当订立无固定期限合同</div>
        <FactRow color={COLORS.navy} bg={COLORS.navy+"3D"} icon={<Check size={24} color={COLORS.navy}/>} enter={enter(58,80)}><span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>双十规则</span>：连续工作满<span style={{fontWeight:900 }}>10年</span>且距退休<span style={{fontWeight:900 }}>不足10年</span>（国企改制重订）——张三距退休12年 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
        <FactRow color={COLORS.navy} bg={COLORS.navy+"3D"} icon={<Check size={24} color={COLORS.navy}/>} enter={enter(68,90)}><span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>2+1规则</span>：连续<span style={{fontWeight:900 }}>2次</span>固定期限 + 劳动者无过错、能胜任、<span style={{fontWeight:900 }}>续订</span></FactRow>
        <FactRow color={COLORS.copper} icon={<Coins size={24} color={COLORS.copper}/>} enter={enter(78,100)}>违规后果：自应订立之日起每月支付<span style={{fontWeight:900,color:COLORS.red }}>2倍工资</span>；<span style={{fontWeight:900 }}>公益性岗位</span>不适用</FactRow>
      </div>
      <div data-final-knowledge="labor-contract-law-scene-01-doublewage" data-stateful-terminal="openended-claim-travel" style={{position:'absolute',left:904,top:90,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <Coins size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Coins size={28} color={COLORS.copper}/>未订书面合同的二倍工资钟</div>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(68,90)}>用工≤<span style={{fontWeight:900 }}>1个月</span>：补签<span style={{fontWeight:900,color:COLORS.teal }}>无责</span>（小李两周不签被终止仅付报酬 <span style={{fontWeight:900 }}>(√)</span>）</FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<AlertTriangle size={24} color={COLORS.red}/>} enter={enter(78,100)}>用工<span style={{fontWeight:900 }}>2-12个月</span>：每月<span style={{fontWeight:900,color:COLORS.red }}>2倍工资</span>，最多<span style={{fontWeight:900 }}>11个月</span>（2024年2月至12月）；<span style={{fontWeight:900 }}>满1年</span> → 视为已订<span style={{fontWeight:900 }}>无固定期限</span>（<span style={{fontWeight:900,color:COLORS.red }}>无二倍工资</span>）</FactRow>
        <FactRow color={COLORS.copper} icon={<Ban size={24} color={COLORS.copper}/>} enter={enter(88,110)}>劳动者<span style={{fontWeight:900,color:COLORS.red }}>自身原因</span>未订 → 单位<span style={{fontWeight:900,color:COLORS.teal }}>无需支付</span>（小王第3个月才签 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span>）</FactRow>
      </div>
      <div data-final-knowledge="labor-contract-law-knowledge-1" style={{position:'absolute',left:0,top:454,width:1768,height:240,padding:'14px 22px',border:'5px dashed '+COLORS.gold,background:COLORS.teal+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(88,114),translate:interpolate(frame,[88,114],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Stamp size={30} color={COLORS.copper}/>订立要求 与 无效</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(102,124)}><span style={{fontWeight:900 }}>书面形式</span>；<span style={{fontWeight:900 }}>用工之日</span>建立劳动关系，签字后成立生效；招用未解除合同劳动者 → <span style={{fontWeight:900,color:COLORS.red }}>连带赔偿</span>；口头变更履行超1个月且合法 → <span style={{fontWeight:900 }}>有效</span></FactRow>
          <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(112,134)}><span style={{fontWeight:900,color:COLORS.red }}>无效</span>：欺诈胁迫乘人之危（隐瞒学历造假 <span style={{fontWeight:900 }}>(√)</span>）/ 免责排权 / 违反强制性规定；已付出劳动 → <span style={{fontWeight:900 }}>报酬+补偿</span></FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const LaborContractLaw02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const probX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="劳2.2" title="试用期 与 服务期">
    <div data-layout="probation-service-split-2" data-visual-anchor="comparison-axis" data-visual-grammar="probation-stairs,service-fee-gate" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="labor-contract-law-scene-02-rule" data-focal-channels="contrast,motion,icon" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="probation-term-travel" style={{position:'absolute',left:probX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.copper,fontSize:20,fontWeight:900,color:COLORS.copper,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Clock size={24} color={COLORS.copper}/>试用期约定
      </div>
      <div data-final-knowledge="labor-contract-law-scene-02-probation" style={{position:'absolute',left:0,top:90,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <Clock size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Clock size={28} color={COLORS.copper}/>试用期四档阶梯</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Ban size={24} color={COLORS.copper}/>} enter={enter(58,80)}>合同≤<span style={{fontWeight:900 }}>3个月</span>或以完成任务为期限 → <span style={{fontWeight:900,color:COLORS.red }}>不得约定</span>（2个月合同约3天试用 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span>）；3个月-1年 → ≤<span style={{fontWeight:900 }}>1个月</span></FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(68,90)}>1-3年 → ≤<span style={{fontWeight:900 }}>2个月</span>；≥3年或无固定 → ≤<span style={{fontWeight:900,color:COLORS.red }}>6个月</span>；同一单位同一劳动者<span style={{fontWeight:900 }}>仅一次</span></FactRow>
        <FactRow color={COLORS.gold} icon={<Coins size={24} color={COLORS.gold}/>} enter={enter(78,100)}>试用期<span style={{fontWeight:900 }}>包含在合同期内</span>；仅约定试用 → <span style={{fontWeight:900,color:COLORS.red }}>不成立</span>，为合同期限；工资 ≥同岗最低档<span style={{fontWeight:900 }}>80%</span> 且 ≥最低工资；劳动者解除提前<span style={{fontWeight:900 }}>3天</span></FactRow>
      </div>
      <div data-final-knowledge="labor-contract-law-knowledge-2" data-stateful-terminal="probation-term-travel" style={{position:'absolute',left:904,top:90,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <Handshake size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.teal}}><Handshake size={28} color={COLORS.teal}/>服务期与违约金</div>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>前提</span>：单位提供<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>专项培训费用</span>+专业技术培训；违约金 ≤ 服务期未履行部分<span style={{fontWeight:900 }}>应分摊培训费</span></FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(78,100)}>仅<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>服务期、竞业限制</span>可约定<span style={{fontWeight:900,color:COLORS.red }}>劳动者违约金</span>——高管泄密索违约金 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
        <FactRow color={COLORS.copper} icon={<Undo2 size={24} color={COLORS.copper}/>} enter={enter(88,110)}>劳动者主动解除或有过错 → 付违约金；<span style={{fontWeight:900 }}>单位过错、预告解除、经济性裁员</span> → <span style={{fontWeight:900,color:COLORS.teal }}>无须支付</span></FactRow>
      </div>
    </div>
  </Shell>;
};

export const LaborContractLaw03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const noncompeteX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="劳2.3" title="竞业限制 与 劳务派遣">
    <div data-layout="noncompete-dispatch-board-3" data-visual-anchor="role-pair" data-visual-grammar="noncompete-gate,dispatch-dual-duty" data-text-treatments="chip,external-negation,soft-highlight" data-focal-rule="labor-contract-law-scene-03-rule" data-focal-channels="contrast,motion,annotation" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="noncompete-notice-travel" style={{position:'absolute',left:noncompeteX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.violet ?? '#5B4A8A',fontSize:20,fontWeight:900,color:'#5B4A8A',opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Shield size={24} color={'#5B4A8A'}/>竞业限制通知
      </div>
      <div data-final-knowledge="labor-contract-law-scene-03-noncompete" style={{position:'absolute',left:0,top:90,width:864,height:560,padding:'14px 20px',border:'5px solid #5B4A8A',background:'#5B4A8A'+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <Shield size={110} color={'#5B4A8A'} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:'#5B4A8A'}}><Shield size={28} color={'#5B4A8A'}/>竞业限制</div>
        <FactRow color={'#5B4A8A'} bg={'#5B4A8A'+"3D"} icon={<Users size={24} color={'#5B4A8A'}/>} enter={enter(58,80)}><span style={{fontWeight:900 }}>主体两高一保</span>：高管、高级技术人员、<span style={{fontWeight:900 }}>负有保密义务人员</span>；保密义务≠竞业限制义务</FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(68,90)}>期限<span style={{fontWeight:900,color:COLORS.red }}>不得超过2年</span>——离职后3年 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span>；未约定补偿 → 按前12个月平均工资<span style={{fontWeight:900 }}>30%</span>（≥最低工资）按月付</FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Coins size={24} color={COLORS.copper}/>} enter={enter(78,100)}>单位<span style={{fontWeight:900 }}>3个月未付</span> → 劳动者可请求解除；单位主动解除 → <span style={{fontWeight:900 }}>额外3个月补偿</span>；劳动者违约 → <span style={{fontWeight:900,color:COLORS.red }}>返还+违约金+继续履行</span></FactRow>
      </div>
      <div data-final-knowledge="labor-contract-law-knowledge-3" data-stateful-terminal="noncompete-notice-travel" style={{position:'absolute',left:904,top:90,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <Store size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.teal}}><Store size={28} color={COLORS.teal}/>劳务派遣</div>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Users size={24} color={COLORS.teal}/>} enter={enter(68,90)}>数量≤用工总量<span style={{fontWeight:900 }}>10%</span>；岗位<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>三性满足其一</span>：临时（≤6月）/辅助/替代——车间主任 <span style={{fontWeight:900,color:COLORS.red }}>(×须同时)</span></FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>派遣单位</span>：订2年以上固定合同、按<span style={{fontWeight:900,color:COLORS.red }}>用工单位所在地</span>标准缴社保（用工单位缴 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span>）、担工伤保险责任；<span style={{fontWeight:900,color:COLORS.red }}>不得再派遣</span></FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<AlertTriangle size={24} color={COLORS.red}/>} enter={enter(88,110)}>派遣工致他人损害 → <span style={{fontWeight:900 }}>用工单位</span>担侵权责任（连带 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span>），派遣单位有过错才担相应责任；同工同酬；无工作期间按<span style={{fontWeight:900 }}>当地最低工资</span>月付</FactRow>
      </div>
    </div>
  </Shell>;
};

export const LaborContractLaw04Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="劳2.4" title="非全日制 与 解除限制">
    <div data-layout="parttime-terminate-split-4" data-visual-anchor="comparison-axis" data-visual-grammar="parttime-band,terminate-guard-band" data-text-treatments="chip,external-negation,soft-highlight" data-focal-rule="labor-contract-law-scene-04-rule" data-focal-channels="contrast,icon,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="labor-contract-law-scene-04-parttime" style={{position:'absolute',left:0,top:0,width:864,height:640,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <Clock size={120} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.teal}}><Clock size={28} color={COLORS.teal}/>非全日制用工</div>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(26,48)}>每日≤<span style={{fontWeight:900 }}>4小时</span>、每周累计≤<span style={{fontWeight:900 }}>24小时</span>；可<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>口头协议</span>（口头用工 <span style={{fontWeight:900 }}>(√)</span>）；可与多单位订立互不影响（上午甲下午乙 <span style={{fontWeight:900 }}>(√)</span>）</FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(36,58)}><span style={{fontWeight:900,color:COLORS.red }}>禁止约定试用期</span>——兼职约一周试用 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Coins size={24} color={COLORS.copper}/>} enter={enter(46,68)}>结算周期<span style={{fontWeight:900 }}>最长15日</span>；任何一方<span style={{fontWeight:900 }}>随时通知终止</span>，<span style={{fontWeight:900,color:COLORS.teal }}>不支付经济补偿</span></FactRow>
      </div>
      <div data-final-knowledge="labor-contract-law-knowledge-4" style={{position:'absolute',left:904,top:0,width:864,height:640,padding:'14px 20px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <Ban size={120} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.red}}><Ban size={28} color={COLORS.red}/>不得预告解除或裁员的情形</div>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(40,62)}>口诀：<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>工伤医疗155、职业病中孕产哺</span>——职业病工伤 / 医疗期、孕期、产期、哺乳期 / 连续<span style={{fontWeight:900 }}>15年</span>且距退休<span style={{fontWeight:900 }}>不足5年</span></FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(50,72)}><span style={{fontWeight:900 }}>过失性辞退不受此限</span>；单位迫使劳动者解除 → 报酬+<span style={{fontWeight:900 }}>经济补偿</span>+赔偿金</FactRow>
      </div>
    </div>
  </Shell>;
};

export const LaborContractLaw05Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const compX=interpolate(frame,[52,116],[260,1160],CLAMP);
  return <Shell code="劳2.5" title="解除方式 与 经济补偿">
    <div data-layout="termination-compensation-board-5" data-visual-anchor="flow-target" data-visual-grammar="termination-routing,compensation-stairs" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="labor-contract-law-scene-05-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="termination-claim-travel" style={{position:'absolute',left:compX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.navy,fontSize:20,fontWeight:900,color:COLORS.navy,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <GitBranch size={24} color={COLORS.navy}/>解除分流
      </div>
      <div data-final-knowledge="labor-contract-law-scene-05-routing" style={{position:'absolute',left:0,top:90,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.navy,background:COLORS.navy+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <GitBranch size={110} color={COLORS.navy} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.navy}}><GitBranch size={28} color={COLORS.navy}/>解除方式路由</div>
        <FactRow color={COLORS.navy} bg={COLORS.navy+"3D"} icon={<Check size={24} color={COLORS.navy}/>} enter={enter(58,80)}><span style={{fontWeight:900 }}>协商解除</span>：劳动者提出<span style={{fontWeight:900,color:COLORS.teal }}>无补偿</span>；单位提出 → <span style={{fontWeight:900,color:COLORS.red }}>有补偿</span></FactRow>
        <FactRow color={COLORS.navy} bg={COLORS.navy+"3D"} icon={<Undo2 size={24} color={COLORS.navy}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>预告解除</span>：提前<span style={{fontWeight:900 }}>30日</span>书面（试用期<span style={{fontWeight:900 }}>3日</span>）→ 无补偿；患病医疗期满<span style={{fontWeight:900,color:COLORS.red }}>不能直接解除</span>——须30日或额外1个月工资 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>过失性辞退</span>：<span style={{fontWeight:900,color:COLORS.red }}>无须补偿金</span>；经济性裁员：裁<span style={{fontWeight:900 }}>20人</span>或<span style={{fontWeight:900 }}>10%</span>以上，提前30日说明+听取意见+报告方案，6个月内优先招用</FactRow>
      </div>
      <div data-final-knowledge="labor-contract-law-knowledge-5" data-stateful-terminal="termination-claim-travel" style={{position:'absolute',left:904,top:90,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <Coins size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Coins size={28} color={COLORS.copper}/>经济补偿金阶梯</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:10}}>
          <div style={{padding:'10px 10px',background:COLORS.paper,border:'3px solid '+COLORS.copper,fontSize:19,fontWeight:900,color:COLORS.copper,textAlign:'center'}}>不满6个月<br/><span style={{fontSize:24,fontWeight:900,color:COLORS.red }}>半个月</span></div>
          <div style={{padding:'10px 10px',background:COLORS.paper,border:'3px solid '+COLORS.copper,fontSize:19,fontWeight:900,color:COLORS.copper,textAlign:'center'}}>6月-1年<br/><span style={{fontSize:24,fontWeight:900,color:COLORS.red }}>1个月</span></div>
          <div style={{padding:'10px 10px',background:COLORS.paper,border:'3px solid '+COLORS.copper,fontSize:19,fontWeight:900,color:COLORS.copper,textAlign:'center'}}>每满1年<br/><span style={{fontSize:24,fontWeight:900,color:COLORS.red }}>1个月</span></div>
        </div>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<AlertTriangle size={24} color={COLORS.red}/>} enter={enter(78,100)}>1年8个月 → <span style={{fontWeight:900,color:COLORS.red }}>2个月</span>（1个半月 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span>）；违法解除 → <span style={{fontWeight:900,color:COLORS.red }}>2倍赔偿金</span>；<span style={{fontWeight:900 }}>赔偿金、补偿金与继续履行不能并存</span> <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
      </div>
      <div data-final-knowledge="labor-contract-law-knowledge-6" style={{position:'absolute',left:0,top:444,width:1768,height:250,padding:'14px 22px',border:'5px dashed '+COLORS.gold,background:COLORS.teal+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(88,114),translate:interpolate(frame,[88,114],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Stamp size={30} color={COLORS.copper}/>合同终止 与 口诀</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(102,124)}>期满：单位维持或提高待遇而<span style={{fontWeight:900 }}>劳动者不续</span> → 无补偿；单位原因不续 → <span style={{fontWeight:900,color:COLORS.red }}>有补偿</span>；未续签继续用工 → <span style={{fontWeight:900 }}>视为按原条件履行</span></FactRow>
          <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<BadgeCheck size={24} color={COLORS.teal}/>} enter={enter(112,134)}>口诀：<span style={{fontWeight:900 }}>双十、2+1续订无固定</span>；<span style={{fontWeight:900 }}>竞业两高一保、期限不过2年</span>；<span style={{fontWeight:900 }}>解除限制：工伤医疗155、职业病中孕产哺</span></FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const LaborContractLaw=()=> <AbsoluteFill>
  <TimelineSequence name="01-labor-contract-law-scene-01" start={SCENES['labor-contract-law-scene-01'].start} duration={SCENES['labor-contract-law-scene-01'].duration}><LaborContractLaw01Scene/></TimelineSequence>
  <TimelineSequence name="02-labor-contract-law-scene-02" start={SCENES['labor-contract-law-scene-02'].start} duration={SCENES['labor-contract-law-scene-02'].duration}><LaborContractLaw02Scene/></TimelineSequence>
  <TimelineSequence name="03-labor-contract-law-scene-03" start={SCENES['labor-contract-law-scene-03'].start} duration={SCENES['labor-contract-law-scene-03'].duration}><LaborContractLaw03Scene/></TimelineSequence>
  <TimelineSequence name="04-labor-contract-law-scene-04" start={SCENES['labor-contract-law-scene-04'].start} duration={SCENES['labor-contract-law-scene-04'].duration}><LaborContractLaw04Scene/></TimelineSequence>
  <TimelineSequence name="05-labor-contract-law-scene-05" start={SCENES['labor-contract-law-scene-05'].start} duration={SCENES['labor-contract-law-scene-05'].duration}><LaborContractLaw05Scene/></TimelineSequence>
</AbsoluteFill>;
