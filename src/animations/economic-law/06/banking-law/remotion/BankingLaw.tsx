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

export const BankingLaw01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const fundX=interpolate(frame,[52,112],[260,1140],CLAMP);
  return <Shell code="经6.1" title="商业银行设立 与 贷款拆借">
    <div data-layout="lending-interbank-lane-1" data-visual-anchor="flow-path" data-visual-grammar="establishment-gate,interbank-two-lane" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="banking-law-scene-01-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="banking-law-scene-01-setup" style={{position:'absolute',left:0,top:0,width:1768,height:180,padding:'12px 22px',border:'5px solid '+COLORS.navy,background:COLORS.navy+'59',display:'flex',alignItems:'center',gap:16,opacity:enter(10,36)}}>
        <Landmark size={110} color={COLORS.navy} strokeWidth={1.2} style={{position:'absolute',right:8,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <Landmark size={32} color={COLORS.navy}/>
        <div style={{fontSize:22,fontWeight:900}}>设立由<span style={{fontWeight:900,background:COLORS.navy+'26',padding:'1px 6px'}}>国务院银行业监督管理机构</span>（国家金融监督管理总局）审批，<span style={{fontWeight:900 }}>实缴注册资本制</span></div>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(24,46)}><span style={{fontWeight:900 }}>分支机构</span>：须经银监<span style={{fontWeight:900 }}>审查批准</span>，<span style={{fontWeight:900,color:COLORS.red }}>不按行政区划</span>；营运资金总和≤总行资本金<span style={{fontWeight:900 }}>60%</span>——地方政府批准 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
      </div>
      <div data-stateful-source="interbank-fund-travel" style={{position:'absolute',left:fundX,top:206,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.copper,fontSize:20,fontWeight:900,color:COLORS.copper,opacity:enter(42,62),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Coins size={24} color={COLORS.copper}/>拆借资金
      </div>
      <div data-final-knowledge="banking-law-scene-01-loan" style={{position:'absolute',left:0,top:272,width:864,height:270,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(52,78),translate:interpolate(frame,[52,78],['-200px 0px','0px 0px'],CLAMP)}}>
        <Handshake size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Handshake size={28} color={COLORS.copper}/>贷款业务</div>
        <FactRow color={COLORS.copper} icon={<Coins size={24} color={COLORS.copper}/>} enter={enter(66,88)}>类型：<span style={{fontWeight:900 }}>信用贷款</span> 和 <span style={{fontWeight:900 }}>担保贷款</span>；向<span style={{fontWeight:900 }}>关系人</span>发放<span style={{fontWeight:900 }}>担保贷款</span>条件<span style={{fontWeight:900,color:COLORS.red }}>不得优于</span>其他借款人同类贷款</FactRow>
        <FactRow color={COLORS.gold} icon={<AlertTriangle size={24} color={COLORS.gold}/>} enter={enter(76,98)}>关系人<span style={{fontWeight:900 }}>信用贷款</span>被禁止——但属<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>管理性规定</span>，合同<span style={{fontWeight:900,color:COLORS.teal }}>仍有效</span> <span style={{fontWeight:900 }}>(×无效)</span></FactRow>
      </div>
      <div data-final-knowledge="banking-law-knowledge-1" data-stateful-terminal="interbank-fund-travel" style={{position:'absolute',left:904,top:272,width:864,height:270,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(62,88),translate:interpolate(frame,[62,88],['200px 0px','0px 0px'],CLAMP)}}>
        <GitBranch size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.teal}}><GitBranch size={28} color={COLORS.teal}/>同业拆借两条道</div>
        <FactRow color={COLORS.teal} icon={<Send size={24} color={COLORS.teal}/>} enter={enter(76,98)}><span style={{fontWeight:900 }}>拆出</span>：交足准备金、留足备付金、归还央行到期贷款后的<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>闲置资金</span></FactRow>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(86,108)}><span style={{fontWeight:900 }}>拆入</span>：仅应急（票据结算、联行汇差头寸、临时周转）；<span style={{fontWeight:900,color:COLORS.red }}>禁止</span>发放<span style={{fontWeight:900,color:COLORS.red }}>固定资产贷款</span>或<span style={{fontWeight:900,color:COLORS.red }}>投资</span></FactRow>
      </div>
      <div data-final-knowledge="banking-law-knowledge-5" style={{position:'absolute',left:0,right:0,top:566,bottom:0,display:'flex',alignItems:'center',gap:18,border:'4px solid '+COLORS.gold,background:COLORS.gold+'66',padding:'12px 24px',opacity:enter(94,120)}}>
        <Stamp size={34} color={COLORS.ink}/>
        <div style={{fontSize:23,fontWeight:900,letterSpacing:2}}>口诀：<span style={{color:COLORS.teal}}>闲钱可拆出</span>，<span style={{color:COLORS.red}}>拆入只应急</span>——用拆入资金发放固定资产贷款并投资 <span style={{color:COLORS.red}}>(×)</span></div>
      </div>
    </div>
  </Shell>;
};

export const BankingLaw02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="经6.2" title="业务禁止 与 监管分工">
    <div data-layout="prohibition-supervision-split-2" data-visual-anchor="comparison-axis" data-visual-grammar="prohibition-band,supervision-duo" data-text-treatments="chip,external-negation,stamp" data-focal-rule="banking-law-scene-02-rule" data-focal-channels="contrast,icon,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="banking-law-scene-02-prohibition" style={{position:'absolute',left:0,top:0,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <Ban size={120} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.red}}><Ban size={30} color={COLORS.red}/>境内业务禁止</div>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(26,48)}><span style={{fontWeight:900,color:COLORS.red }}>禁信托、禁证券</span>：不得从事信托投资和证券经营业务</FactRow>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(36,58)}><span style={{fontWeight:900,color:COLORS.red }}>禁非自用、禁非银行</span>：不得向非自用不动产投资，不得向<span style={{fontWeight:900 }}>非银行金融机构和企业</span>投资</FactRow>
      </div>
      <div data-final-knowledge="banking-law-knowledge-2" style={{position:'absolute',left:904,top:0,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.indigo,background:COLORS.indigo+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <Split size={120} color={COLORS.indigo} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.indigo}}><Split size={30} color={COLORS.indigo}/>监管分工</div>
        <FactRow color={COLORS.indigo} icon={<Landmark size={24} color={COLORS.indigo}/>} enter={enter(40,62)}><span style={{fontWeight:900 }}>国务院银行业监督管理机构</span>：<span style={{fontWeight:900,background:COLORS.indigo+'26',padding:'1px 6px'}}>管银行</span></FactRow>
        <FactRow color={COLORS.copper} icon={<Coins size={24} color={COLORS.copper}/>} enter={enter(50,72)}><span style={{fontWeight:900 }}>中国人民银行</span>：<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>管钱</span>——口诀 <span style={{fontWeight:900 }}>存债借汇</span></FactRow>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(60,82)}><span style={{fontWeight:900 }}>现场检查</span>：询问工作人员、查阅复制文件资料、检查<span style={{fontWeight:900 }}>业务系统</span></FactRow>
      </div>
      <div data-final-knowledge="banking-law-knowledge-2" style={{position:'absolute',left:0,right:0,top:584,bottom:0,display:'flex',alignItems:'center',gap:18,border:'4px solid '+COLORS.gold,background:COLORS.gold+'66',padding:'12px 24px',opacity:enter(70,96)}}>
        <Stamp size={34} color={COLORS.ink}/>
        <div style={{fontSize:23,fontWeight:900,letterSpacing:2}}>口诀：<span style={{color:COLORS.red}}>禁信托禁证券，非自用非银行</span>；监管分工——银监<span style={{color:COLORS.indigo}}>管银行</span>，央行<span style={{color:COLORS.copper}}>管钱（存债借汇）</span></div>
      </div>
    </div>
  </Shell>;
};

export const BankingLaw03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const takeX=interpolate(frame,[52,116],[280,1180],CLAMP);
  return <Shell code="经6.3" title="强制披露 与 接管">
    <div data-layout="takeover-clock-lane-3" data-visual-anchor="flow-path" data-visual-grammar="measures-band,takeover-track" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="banking-law-scene-03-rule" data-focal-channels="contrast,connector,motion" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="banking-law-scene-03-measures" style={{position:'absolute',left:0,top:0,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <Megaphone size={120} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:24,fontWeight:900,color:COLORS.copper}}><Megaphone size={30} color={COLORS.copper}/>强制信息披露</div>
        <FactRow color={COLORS.copper} icon={<AlertTriangle size={24} color={COLORS.copper}/>} enter={enter(26,48)}><span style={{fontWeight:900 }}>前提</span>：违反<span style={{fontWeight:900,color:COLORS.red }}>审慎经营规则</span>——严重损害存款人权益可<span style={{fontWeight:900 }}>限制分配红利</span> <span style={{fontWeight:900 }}>(√)</span></FactRow>
        <FactRow color={COLORS.copper} icon={<Ban size={24} color={COLORS.copper}/>} enter={enter(36,58)}><span style={{fontWeight:900 }}>两停</span>：暂停业务、暂停增设分支机构</FactRow>
        <FactRow color={COLORS.copper} icon={<Coins size={24} color={COLORS.copper}/>} enter={enter(46,68)}><span style={{fontWeight:900 }}>两限</span>：限制红利分配、限制资产转让</FactRow>
        <FactRow color={COLORS.copper} icon={<Undo2 size={24} color={COLORS.copper}/>} enter={enter(56,78)}><span style={{fontWeight:900 }}>两责令</span>：责令转让股权、责令调整董事高管</FactRow>
      </div>
      <div data-stateful-source="takeover-decision-travel" style={{position:'absolute',left:takeX,top:70,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.navy,fontSize:20,fontWeight:900,color:COLORS.navy,opacity:enter(34,54),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Stamp size={24} color={COLORS.navy}/>接管决定
      </div>
      <div data-final-knowledge="banking-law-knowledge-3" data-stateful-terminal="takeover-decision-travel" style={{position:'absolute',left:904,top:0,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <Hourglass size={120} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.teal}}><Hourglass size={30} color={COLORS.teal}/>接管</div>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(40,62)}><span style={{fontWeight:900 }}>前提</span>：已经或可能发生<span style={{fontWeight:900,color:COLORS.red }}>信用危机</span> + 严重影响存款人权益 + <span style={{fontWeight:900 }}>银监机构决定</span>——央行决定 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
        <FactRow color={COLORS.copper} icon={<Users size={24} color={COLORS.copper}/>} enter={enter(50,72)}>接管组织行使<span style={{fontWeight:900 }}>经营管理权</span>；<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>债权债务关系不变</span>——“一并转移” <span style={{fontWeight:900,color:COLORS.red }}>(×)</span>；期限<span style={{fontWeight:900 }}>最长2年</span></FactRow>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(60,82)}><span style={{fontWeight:900 }}>账户</span>：<span style={{fontWeight:900,color:COLORS.teal }}>查询可直接</span>；<span style={{fontWeight:900,color:COLORS.red }}>冻结须申请司法机关</span>——直接冻结 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
      </div>
      <div data-final-knowledge="banking-law-knowledge-4" style={{position:'absolute',left:0,right:0,top:584,bottom:0,display:'flex',alignItems:'center',gap:18,border:'4px solid '+COLORS.gold,background:COLORS.gold+'66',padding:'12px 24px',opacity:enter(70,96)}}>
        <Stamp size={34} color={COLORS.ink}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.5}}>口诀：<span style={{fontWeight:900 }}>可查询，冻结需要司法帮</span>；接管期限<span style={{fontWeight:900 }}>最长不超过2年</span>；对责任人员可通知<span style={{fontWeight:900 }}>阻止出境</span>、申请司法<span style={{fontWeight:900 }}>禁止转移财产</span></div>
      </div>
    </div>
  </Shell>;
};

export const BankingLaw=()=> <AbsoluteFill>
  <TimelineSequence name="01-banking-law-scene-01" start={SCENES['banking-law-scene-01'].start} duration={SCENES['banking-law-scene-01'].duration}><BankingLaw01Scene/></TimelineSequence>
  <TimelineSequence name="02-banking-law-scene-02" start={SCENES['banking-law-scene-02'].start} duration={SCENES['banking-law-scene-02'].duration}><BankingLaw02Scene/></TimelineSequence>
  <TimelineSequence name="03-banking-law-scene-03" start={SCENES['banking-law-scene-03'].start} duration={SCENES['banking-law-scene-03'].duration}><BankingLaw03Scene/></TimelineSequence>
</AbsoluteFill>;
