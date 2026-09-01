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

export const SocialSecurityLaw01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const acctX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="劳4.1" title="缴费模式 与 基本养老">
    <div data-layout="pension-account-split-1" data-visual-anchor="comparison-axis" data-visual-grammar="mode-split-band,pension-account-split" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="social-security-law-scene-01-rule" data-focal-channels="contrast,motion,icon" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="social-security-law-scene-01-mode" style={{position:'absolute',left:0,top:0,width:1768,height:150,padding:'12px 22px',border:'5px solid '+COLORS.navy,background:COLORS.navy+'59',display:'flex',alignItems:'center',gap:16,opacity:enter(10,36)}}>
        <Split size={32} color={COLORS.navy}/>
        <div style={{fontSize:22,fontWeight:900}}>缴费模式：<span style={{fontWeight:900,color:COLORS.red }}>单缴制</span>（<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>工伤、生育</span>仅用人单位缴）/<span style={{fontWeight:900,color:COLORS.teal }}>双缴制</span>（其余险种单位+个人共同缴）</div>
        <div style={{marginLeft:'auto',display:'flex',gap:10}}>
          <Chip color={COLORS.red} text="工伤·单缴"/>
          <Chip color={COLORS.red} text="生育·单缴"/>
        </div>
      </div>
      <div data-stateful-source="pension-account-travel" style={{position:'absolute',left:acctX,top:174,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.copper,fontSize:20,fontWeight:900,color:COLORS.copper,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Coins size={24} color={COLORS.copper}/>个人缴费
      </div>
      <div data-final-knowledge="social-security-law-scene-01-pension" data-stateful-terminal="pension-account-travel" style={{position:'absolute',left:0,top:240,width:864,height:280,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <Coins size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Coins size={28} color={COLORS.copper}/>基本养老保险两本账</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Landmark size={24} color={COLORS.copper}/>} enter={enter(58,80)}>单位缴纳 → 记入<span style={{fontWeight:900 }}>统筹基金</span>；个人缴纳 → 记入<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>个人账户</span></FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(68,90)}>个人账户<span style={{fontWeight:900,color:COLORS.red }}>不得提前支取</span>（购房 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span>）；余额<span style={{fontWeight:900,color:COLORS.teal }}>可继承</span></FactRow>
      </div>
      <div data-final-knowledge="social-security-law-knowledge-1" style={{position:'absolute',left:904,top:240,width:864,height:280,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <Coins size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.teal}}><Coins size={28} color={COLORS.teal}/>领取条件 与 遗属待遇</div>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>2030年前</span>：法定退休年龄+累计缴费<span style={{fontWeight:900 }}>15年</span>；<span style={{fontWeight:900 }}>2030年后</span>最低缴费年限逐步提至<span style={{fontWeight:900,color:COLORS.red }}>20年</span>（每年提高<span style={{fontWeight:900 }}>6个月</span>）——2035年缴15年 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Users size={24} color={COLORS.copper}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>遗属</span>：因病非因工死亡 → <span style={{fontWeight:900 }}>丧葬补助金、抚恤金</span>；未达退休年龄完全丧失劳动能力 → <span style={{fontWeight:900 }}>病残津贴</span></FactRow>
      </div>
    </div>
  </Shell>;
};

export const SocialSecurityLaw02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const injX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="劳4.2" title="医保排除 与 工伤认定">
    <div data-layout="medical-injury-split-2" data-visual-anchor="boundary" data-visual-grammar="medical-exclude-band,injury-gate" data-text-treatments="chip,external-negation,soft-highlight" data-focal-rule="social-security-law-scene-02-rule" data-focal-channels="contrast,motion,annotation" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="injury-claim-travel" style={{position:'absolute',left:injX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.red,fontSize:20,fontWeight:900,color:COLORS.red,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <AlertTriangle size={24} color={COLORS.red}/>车间事故
      </div>
      <div data-final-knowledge="social-security-law-scene-02-medical" style={{position:'absolute',left:0,top:90,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <Ban size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.teal}}><Ban size={28} color={COLORS.teal}/>医保不支付四情形</div>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Ban size={24} color={COLORS.teal}/>} enter={enter(58,80)}>① <span style={{fontWeight:900 }}>工伤保险基金</span>支付的　② <span style={{fontWeight:900 }}>第三人</span>负担的　③ <span style={{fontWeight:900 }}>公共卫生</span>负担的　④ <span style={{fontWeight:900 }}>境外就医</span></FactRow>
      </div>
      <div data-final-knowledge="social-security-law-scene-02-injury" data-stateful-terminal="injury-claim-travel" style={{position:'absolute',left:904,top:90,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <Shield size={110} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.red}}><Shield size={28} color={COLORS.red}/>工伤认定闸</div>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Check size={24} color={COLORS.red}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>认定</span>：<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>三工</span>（工作时间+场所+原因）/ <span style={{fontWeight:900 }}>职业病</span> / <span style={{fontWeight:900 }}>上下班途中</span>非本人主要责任</FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(78,100)}><span style={{fontWeight:900,color:COLORS.red }}>不认定</span>：故意犯罪、醉酒、吸毒、自残、自杀、个人活动受伤</FactRow>
      </div>
      <div data-final-knowledge="social-security-law-knowledge-2" style={{position:'absolute',left:0,top:444,width:1768,height:250,padding:'14px 22px',border:'5px dashed '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(88,114),translate:interpolate(frame,[88,114],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Coins size={30} color={COLORS.copper}/>参保与未参保的支付分工</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(102,124)}><span style={{fontWeight:900 }}>已参保</span>：<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>单位</span>付工资福利+<span style={{fontWeight:900 }}>5/6级伤残津贴</span>+一次性伤残就业补助金（5级由基金付 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span>）；基金付其他项目</FactRow>
          <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<AlertTriangle size={24} color={COLORS.red}/>} enter={enter(112,134)}><span style={{fontWeight:900 }}>未参保</span>：单位付全部<span style={{fontWeight:900 }}>工伤保险待遇</span>；不付时基金<span style={{fontWeight:900,color:COLORS.teal }}>先行支付</span>后<span style={{fontWeight:900,color:COLORS.red }}>追偿</span></FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const SocialSecurityLaw03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const claimX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="劳4.3" title="失业保险：三条件 与 期限阶梯">
    <div data-layout="unemployment-stairs-3" data-visual-anchor="flow-path" data-visual-grammar="unemployment-gate,term-stairs" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="social-security-law-scene-03-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="unemployment-claim-travel" style={{position:'absolute',left:claimX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.teal,fontSize:20,fontWeight:900,color:COLORS.teal,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Coins size={24} color={COLORS.teal}/>失业金申领
      </div>
      <div data-final-knowledge="social-security-law-scene-03-conditions" style={{position:'absolute',left:0,top:90,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <Coins size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.teal}}><Coins size={28} color={COLORS.teal}/>领取三条件（同时满足）</div>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(58,80)}>① 缴费满<span style={{fontWeight:900 }}>1年</span>　② <span style={{fontWeight:900,color:COLORS.red }}>非自愿</span>中断就业——主动辞职 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span>　③ 已办<span style={{fontWeight:900 }}>失业登记</span>且有求职要求</FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(68,90)}><span style={{fontWeight:900,color:COLORS.red }}>停止领取</span>：就业、征兵、境外、退休、<span style={{fontWeight:900 }}>拒不接受指定工作或培训</span></FactRow>
      </div>
      <div data-final-knowledge="social-security-law-knowledge-3" data-stateful-terminal="unemployment-claim-travel" style={{position:'absolute',left:904,top:90,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <Coins size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Coins size={28} color={COLORS.copper}/>领取期限阶梯（按累计缴费）</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:10}}>
          <div style={{padding:'10px 10px',background:COLORS.paper,border:'3px solid '+COLORS.copper,fontSize:19,fontWeight:900,color:COLORS.copper,textAlign:'center'}}>1-5年<br/><span style={{fontSize:26,fontWeight:900,color:COLORS.red }}>12个月</span></div>
          <div style={{padding:'10px 10px',background:COLORS.paper,border:'3px solid '+COLORS.copper,fontSize:19,fontWeight:900,color:COLORS.copper,textAlign:'center'}}>5-10年<br/><span style={{fontSize:26,fontWeight:900,color:COLORS.red }}>18个月</span></div>
          <div style={{padding:'10px 10px',background:COLORS.paper,border:'3px solid '+COLORS.copper,fontSize:19,fontWeight:900,color:COLORS.copper,textAlign:'center'}}>≥10年<br/><span style={{fontSize:26,fontWeight:900,color:COLORS.red }}>24个月</span></div>
        </div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Undo2 size={24} color={COLORS.copper}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>再次失业</span>：缴费时间<span style={{fontWeight:900 }}>重新计算</span>，领取期限<span style={{fontWeight:900,color:COLORS.teal }}>可合并计算</span></FactRow>
      </div>
    </div>
  </Shell>;
};

export const SocialSecurityLaw04Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="劳4.4" title="军人保险 与 口诀">
    <div data-layout="military-insurance-band-4" data-visual-anchor="role-pair" data-visual-grammar="military-band,mnemonic-band" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="social-security-law-scene-04-rule" data-focal-channels="contrast,icon,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="social-security-law-scene-04-military" style={{position:'absolute',left:0,top:0,width:864,height:640,padding:'14px 20px',border:'5px solid '+COLORS.navy,background:COLORS.navy+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <Shield size={120} color={COLORS.navy} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.navy}}><Shield size={28} color={COLORS.navy}/>军人保险法</div>
        <FactRow color={COLORS.navy} bg={COLORS.navy+"3D"} icon={<Coins size={24} color={COLORS.navy}/>} enter={enter(26,48)}><span style={{fontWeight:900 }}>基金来源</span>：个人缴费 + 中央财政负担资金 + 利息收入，纳入<span style={{fontWeight:900,background:COLORS.navy+'26',padding:'1px 6px'}}>年度国防费预算</span></FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(36,58)}><span style={{fontWeight:900 }}>伤亡保险</span>：国家承担，<span style={{fontWeight:900,color:COLORS.red }}>个人不缴纳</span></FactRow>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<GitBranch size={24} color={COLORS.teal}/>} enter={enter(46,68)}><span style={{fontWeight:900 }}>退役养老、医疗</span>：入伍前+服现役+退伍后<span style={{fontWeight:900 }}>三阶段合并计算</span></FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Users size={24} color={COLORS.copper}/>} enter={enter(56,78)}><span style={{fontWeight:900 }}>随军未就业配偶</span>：无正当理由<span style={{fontWeight:900,color:COLORS.red }}>拒不接受就业安置</span> → <span style={{fontWeight:900,color:COLORS.red }}>停止补助</span></FactRow>
      </div>
      <div data-final-knowledge="social-security-law-knowledge-4" style={{position:'absolute',left:904,top:0,width:864,height:640,padding:'14px 20px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <BadgeCheck size={120} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.09,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><BadgeCheck size={28} color={COLORS.copper}/>全科目记忆口诀</div>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(40,62)}><span style={{fontWeight:900 }}>工伤、生育单缴</span>；其余险种<span style={{fontWeight:900,color:COLORS.teal }}>双缴</span></FactRow>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(50,72)}>失业领取：<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>满1年 + 非自愿 + 登记求职</span>（三者同时满足）</FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Coins size={24} color={COLORS.copper}/>} enter={enter(60,82)}>养老两本账：<span style={{fontWeight:900 }}>单位进统筹、个人进账户</span>，不得提前支取、余额可继承</FactRow>
      </div>
    </div>
  </Shell>;
};

export const SocialSecurityLaw=()=> <AbsoluteFill>
  <TimelineSequence name="01-social-security-law-scene-01" start={SCENES['social-security-law-scene-01'].start} duration={SCENES['social-security-law-scene-01'].duration}><SocialSecurityLaw01Scene/></TimelineSequence>
  <TimelineSequence name="02-social-security-law-scene-02" start={SCENES['social-security-law-scene-02'].start} duration={SCENES['social-security-law-scene-02'].duration}><SocialSecurityLaw02Scene/></TimelineSequence>
  <TimelineSequence name="03-social-security-law-scene-03" start={SCENES['social-security-law-scene-03'].start} duration={SCENES['social-security-law-scene-03'].duration}><SocialSecurityLaw03Scene/></TimelineSequence>
  <TimelineSequence name="04-social-security-law-scene-04" start={SCENES['social-security-law-scene-04'].start} duration={SCENES['social-security-law-scene-04'].duration}><SocialSecurityLaw04Scene/></TimelineSequence>
</AbsoluteFill>;
