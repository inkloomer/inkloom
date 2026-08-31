import type {ReactNode} from 'react';
import {Landmark, Coins, Wallet, Scale, Ban, Check, Undo2, Gavel, UserCheck, Users, AlertTriangle, ShieldCheck, Handshake, FileSignature, Stamp, Percent, TrendingDown, Split, ArrowLeftRight} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#ECE9E2', ink:'#2B2B33', indigo:'#3B4A6B', copper:'#8A4B2F', teal:'#15725F', red:'#B23A30', gold:'#B98A2F', paper:'#FAF6EC'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.indigo,color:COLORS.paper}}>{code}</div>
    <div style={{position:'absolute',left:190,right:76,top:46,fontSize:46,fontWeight:900,lineHeight:1.12,borderBottom:'5px solid '+COLORS.indigo,paddingBottom:12}}>{title}</div>
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

export const PartnershipThirdParties01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const debtY=interpolate(frame,[40,84,108,158],[86,176,286,286],CLAMP);
  return <Shell code="16.1" title="合伙企业欠债：清偿链">
    <div data-layout="debt-repay-chain-1" data-visual-anchor="flow-path" data-visual-grammar="repay-chain-descent,fault-fork" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="partnership-third-parties-scene-01-rule" data-focal-channels="connector,motion,contrast" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="partnership-third-parties-scene-01-pool" style={{position:'absolute',left:604,top:0,width:560,height:120,padding:'12px 20px',border:'5px solid '+COLORS.indigo,background:COLORS.indigo+'59',display:'flex',alignItems:'center',gap:12,opacity:enter(12,38)}}>
        <Landmark size={34} color={COLORS.indigo}/>
        <div style={{fontSize:23,fontWeight:900}}>第一顺位：合伙企业<span style={{fontWeight:900,background:COLORS.indigo+'26',padding:'1px 6px'}}>全部财产</span></div>
      </div>
      <div data-stateful-source="partnership-debt-repay-travel" style={{position:'absolute',left:820,top:debtY,padding:'8px 16px',background:COLORS.red,color:COLORS.paper,fontSize:20,fontWeight:900,opacity:enter(34,54),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Coins size={22} color={COLORS.paper}/>债务
      </div>
      <div style={{position:'absolute',left:880,top:120,width:8,height:interpolate(frame,[64,94],[0,42],CLAMP),background:COLORS.ink}}/>
      <div style={{position:'absolute',left:870,top:158,width:0,height:0,borderTop:'15px solid transparent',borderBottom:'15px solid transparent',borderLeft:'19px solid '+COLORS.ink,opacity:enter(90,104)}}/>
      <div data-final-knowledge="partnership-third-parties-scene-01-partners" style={{position:'absolute',left:0,top:186,width:1768,height:210,padding:'14px 22px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(52,78),translate:interpolate(frame,[52,78],['0px 24px','0px 0px'],CLAMP)}}>
        <Users size={120} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}>
          <Users size={30} color={COLORS.copper}/>第二顺位：不足部分
          <span style={{padding:'6px 14px',background:COLORS.copper,color:COLORS.paper,fontSize:20,fontWeight:900,transform:'rotate(-2deg)'}}>普通合伙：合伙人无限连带</span>
          <span style={{padding:'6px 14px',background:COLORS.teal,color:COLORS.paper,fontSize:20,fontWeight:900,transform:'rotate(2deg)'}}>有限合伙：普合无限+有限以认缴额为限</span>
        </div>
        <FactRow color={COLORS.copper} icon={<Undo2 size={24} color={COLORS.copper}/>} enter={enter(66,88)}>清偿完毕后可<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>内部追偿</span>——多担者向少担者要回</FactRow>
      </div>
      <div style={{position:'absolute',left:880,top:396,width:8,height:interpolate(frame,[96,126],[0,42],CLAMP),background:COLORS.ink}}/>
      <div style={{position:'absolute',left:870,top:434,width:0,height:0,borderTop:'15px solid transparent',borderBottom:'15px solid transparent',borderLeft:'19px solid '+COLORS.ink,opacity:enter(122,136)}}/>
      <div data-final-knowledge="partnership-third-parties-scene-01-llp" data-stateful-terminal="partnership-debt-repay-travel" style={{position:'absolute',left:0,top:462,width:1768,height:190,padding:'14px 22px',border:'5px dashed '+COLORS.red,background:COLORS.teal+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(100,126),translate:interpolate(frame,[100,126],['0px 24px','0px 0px'],CLAMP)}}>
        <Scale size={110} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.red}}>
          <Scale size={30} color={COLORS.red}/>特殊普通合伙企业：故意或重大过失造成的债务
          <span style={{padding:'6px 14px',background:COLORS.red,color:COLORS.paper,fontSize:20,fontWeight:900,transform:'rotate(-2deg)'}}>过错者无限</span>
          <span style={{padding:'6px 14px',background:COLORS.teal,color:COLORS.paper,fontSize:20,fontWeight:900,transform:'rotate(2deg)'}}>无辜者有限</span>
        </div>
        <FactRow color={COLORS.indigo} icon={<Handshake size={24} color={COLORS.indigo}/>} enter={enter(114,136)}>例：律所甲主办、乙辅办重大过失泄密 → 甲乙对该笔债务<span style={{fontWeight:900,color:COLORS.red}}>无限连带</span>，其他合伙人以<span style={{fontWeight:900}}>财产份额为限</span> <span style={{fontWeight:900}}>(√)</span></FactRow>
      </div>
      <div data-final-knowledge="partnership-third-parties-knowledge-1" style={{position:'absolute',left:0,right:0,top:672,bottom:0,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.gold,background:COLORS.gold+'66',padding:'12px 24px',opacity:enter(130,156)}}>
        <Stamp size={32} color={COLORS.ink}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.5}}>解题大招：<span style={{fontWeight:900,color:COLORS.red}}>过错者无限</span>，<span style={{fontWeight:900,color:COLORS.teal}}>无辜者有限</span>——特殊普通合伙的债务承担</div>
      </div>
    </div>
  </Shell>;
};

export const PartnershipThirdParties02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const askY=interpolate(frame,[40,86,110,156],[80,178,296,296],CLAMP);
  return <Shell code="16.2" title="合伙人欠债：四手段与强执份额">
    <div data-layout="personal-debt-means-2" data-visual-anchor="timeline-gate" data-visual-grammar="means-gate-pair,foreclose-procedure" data-text-treatments="chip,external-negation,thin-underline" data-focal-rule="partnership-third-parties-scene-02-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="partnership-third-parties-scene-02-chain" style={{position:'absolute',left:0,top:0,width:864,height:360,padding:'14px 20px',border:'5px solid '+COLORS.indigo,background:COLORS.indigo+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(14,40),translate:interpolate(frame,[14,40],['-200px 0px','0px 0px'],CLAMP)}}>
        <Wallet size={120} color={COLORS.indigo} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.indigo}}><Wallet size={30} color={COLORS.indigo}/>个人债权人的三级路径</div>
        <FactRow color={COLORS.indigo} icon={<Wallet size={24} color={COLORS.indigo}/>} enter={enter(28,50)}>1 先用合伙人<span style={{fontWeight:900,background:COLORS.indigo+'26',padding:'1px 6px'}}>自有财产</span>清偿</FactRow>
        <FactRow color={COLORS.indigo} icon={<Coins size={24} color={COLORS.indigo}/>} enter={enter(38,60)}>2 不足部分：从<span style={{fontWeight:900}}>合伙企业分取的收益</span>清偿——<span style={{fontWeight:900,color:COLORS.teal}}>可收益</span></FactRow>
        <FactRow color={COLORS.indigo} icon={<Landmark size={24} color={COLORS.indigo}/>} enter={enter(48,70)}>3 申请<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>法院强制执行</span>该合伙人的份额——<span style={{fontWeight:900,color:COLORS.teal}}>可强执</span></FactRow>
      </div>
      <div data-stateful-source="personal-debt-means-travel" style={{position:'absolute',left:392,top:askY,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.indigo,fontSize:20,fontWeight:900,color:COLORS.indigo,opacity:enter(34,54),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Handshake size={24} color={COLORS.indigo}/>个人债权
      </div>
      <div data-final-knowledge="partnership-third-parties-scene-02-bans" style={{position:'absolute',left:904,top:0,width:864,height:200,padding:'14px 20px',border:'5px solid '+COLORS.red,background:COLORS.red+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(24,50),translate:interpolate(frame,[24,50],['200px 0px','0px 0px'],CLAMP)}}>
        <Ban size={110} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:12,fontSize:23,fontWeight:900,color:COLORS.red}}>
          <Ban size={28} color={COLORS.red}/>两禁
          <Chip color={COLORS.red} text="禁止抵销"/>
          <Chip color={COLORS.red} text="禁止代位"/>
        </div>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(38,60)}>债权人<span style={{fontWeight:900,color:COLORS.red}}>不得</span>以对合伙人的债权抵销合伙企业债务，<span style={{fontWeight:900,color:COLORS.red}}>不得</span>代位行使合伙人权利</FactRow>
      </div>
      <div data-final-knowledge="partnership-third-parties-scene-02-allows" style={{position:'absolute',left:904,top:224,width:864,height:136,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',alignItems:'center',gap:14,opacity:enter(38,64),translate:interpolate(frame,[38,64],['200px 0px','0px 0px'],CLAMP)}}>
        <Check size={100} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:12,fontSize:23,fontWeight:900,color:COLORS.teal}}>
          <Check size={28} color={COLORS.teal}/>两可
          <Chip color={COLORS.teal} text="可收益"/>
          <Chip color={COLORS.teal} text="可强执"/>
        </div>
        <div style={{fontSize:20,fontWeight:800,opacity:enter(52,74)}}>四手段实现合伙人个人债权</div>
      </div>
      <div data-final-knowledge="partnership-third-parties-scene-02-foreclose" style={{position:'absolute',left:0,top:384,width:1768,height:230,padding:'14px 22px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(52,78),translate:interpolate(frame,[52,78],['0px 24px','0px 0px'],CLAMP)}}>
        <Gavel size={120} color={COLORS.gold} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}>
          <Gavel size={30} color={COLORS.gold}/><span data-stateful-terminal="personal-debt-means-travel">强制执行份额的程序</span>
          <span style={{padding:'6px 14px',background:COLORS.copper,color:COLORS.paper,fontSize:20,fontWeight:900,transform:'rotate(-2deg)'}}>法院通知全体</span>
          <span style={{padding:'6px 14px',background:COLORS.gold,color:COLORS.paper,fontSize:20,fontWeight:900,transform:'rotate(2deg)'}}>优先购买权</span>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.red} icon={<Undo2 size={24} color={COLORS.red}/>} enter={enter(66,88)}>普通合伙人：<span style={{fontWeight:900}}>不同意转让也不购买</span> → 办理<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>退伙结算或削减份额结算</span>（不视为同意对外转让 ×）</FactRow>
          <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(76,98)}>有限合伙人：<span style={{fontWeight:900,color:COLORS.teal}}>无结算要求</span></FactRow>
        </div>
      </div>
      <div data-final-knowledge="partnership-third-parties-knowledge-2" style={{position:'absolute',left:0,right:0,top:634,bottom:0,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.ink,background:COLORS.paper,padding:'12px 24px',opacity:enter(94,120)}}>
        <Stamp size={32} color={COLORS.ink}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.5}}>口诀四手段：<span style={{fontWeight:900,color:COLORS.red}}>禁抵销、禁代位</span>，<span style={{fontWeight:900,color:COLORS.teal}}>可收益、可强执</span></div>
      </div>
    </div>
  </Shell>;
};

export const PartnershipThirdParties03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="16.3" title="双重优先原则">
    <div data-layout="dual-priority-pools-3" data-visual-anchor="comparison-axis" data-visual-grammar="dual-priority-routing,case-verdicts" data-text-treatments="chip,soft-highlight,external-negation" data-focal-rule="partnership-third-parties-scene-03-rule" data-focal-channels="contrast,connector,motion" style={{position:'absolute',inset:0}}>
      <div style={{position:'absolute',left:872,top:40,width:24,height:interpolate(frame,[30,64],[0,120],CLAMP),background:COLORS.ink,opacity:0.3}}/>
      <div style={{position:'absolute',left:864,top:156,width:0,height:0,borderTop:'16px solid transparent',borderBottom:'16px solid transparent',borderLeft:'20px solid '+COLORS.teal,opacity:enter(60,74)}}/>
      <div style={{position:'absolute',left:928,top:156,width:0,height:0,borderTop:'16px solid transparent',borderBottom:'16px solid transparent',borderRight:'20px solid '+COLORS.copper,opacity:enter(60,74)}}/>
      <div data-final-knowledge="partnership-third-parties-scene-03-pool-p" style={{position:'absolute',left:0,top:0,width:840,height:200,padding:'14px 22px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:10,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <Landmark size={120} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Landmark size={30} color={COLORS.copper}/>合伙财产</div>
        <FactRow color={COLORS.copper} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(26,48)}>优先清偿<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>合伙债务</span></FactRow>
      </div>
      <div data-final-knowledge="partnership-third-parties-scene-03-pool-i" style={{position:'absolute',left:928,top:0,width:840,height:200,padding:'14px 22px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:10,opacity:enter(24,50),translate:interpolate(frame,[24,50],['200px 0px','0px 0px'],CLAMP)}}>
        <Wallet size={120} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.teal}}><Wallet size={30} color={COLORS.teal}/>个人财产</div>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(38,60)}>优先清偿<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>个人债务</span></FactRow>
      </div>
      <div data-final-knowledge="partnership-third-parties-knowledge-3" style={{position:'absolute',left:0,right:0,top:222,display:'flex',alignItems:'center',justifyContent:'center',gap:12,fontSize:24,fontWeight:900,opacity:enter(56,80)}}>
        <Split size={30} color={COLORS.indigo}/>各自归池、互不越线——偿债时两类债务并存的处理规则
      </div>
      <div data-final-knowledge="partnership-third-parties-scene-03-case-1" style={{position:'absolute',left:0,top:286,width:1768,height:190,padding:'14px 22px',border:'5px solid '+COLORS.indigo,background:COLORS.indigo+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(64,90),translate:interpolate(frame,[64,90],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:23,fontWeight:900,color:COLORS.indigo}}><Users size={28} color={COLORS.indigo}/>判例一：甲为出资向乙借款，到期无力偿还</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(78,100)}>乙<span style={{fontWeight:900,color:COLORS.red}}>不能</span>要求丙、丁对甲的个人借款承担连带责任——乙只是<span style={{fontWeight:900}}>甲的债权人</span>，不是合伙企业的债权人 <span style={{fontWeight:900}}>(×)</span></FactRow>
          <FactRow color={COLORS.copper} icon={<Scale size={24} color={COLORS.copper}/>} enter={enter(88,110)}>合伙人个人债务与合伙企业债务<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>各自分别清偿</span></FactRow>
        </div>
      </div>
      <div data-final-knowledge="partnership-third-parties-scene-03-case-2" style={{position:'absolute',left:0,top:496,width:1768,height:190,padding:'14px 22px',border:'5px dashed '+COLORS.copper,background:COLORS.copper+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(78,104),translate:interpolate(frame,[78,104],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:23,fontWeight:900,color:COLORS.copper}}><FileSignature size={28} color={COLORS.copper}/>判例二：甲以合伙企业名义擅自订购货物</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.copper} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(92,114)}>对外关系中，普通合伙企业的<span style={{fontWeight:900}}>所有合伙人</span>均承担<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>无限连带责任</span>——丙不能免责 <span style={{fontWeight:900}}>(×)</span></FactRow>
          <FactRow color={COLORS.red} icon={<AlertTriangle size={24} color={COLORS.red}/>} enter={enter(102,124)}>内部限制<span style={{fontWeight:900,color:COLORS.red}}>不得对抗善意第三人</span></FactRow>
        </div>
      </div>
      <div data-final-knowledge="partnership-third-parties-scene-03-recap" style={{position:'absolute',left:0,right:0,top:706,bottom:0,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.gold,background:COLORS.gold+'66',padding:'12px 24px',opacity:enter(112,138)}}>
        <Stamp size={32} color={COLORS.ink}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.5}}>双重优先：<span style={{fontWeight:900,color:COLORS.copper}}>合伙财产清偿合伙债</span>，<span style={{fontWeight:900,color:COLORS.teal}}>个人财产清偿个人债</span></div>
      </div>
    </div>
  </Shell>;
};

export const PartnershipThirdParties=()=> <AbsoluteFill>
  <TimelineSequence name="01-partnership-third-parties-scene-01" start={SCENES['partnership-third-parties-scene-01'].start} duration={SCENES['partnership-third-parties-scene-01'].duration}><PartnershipThirdParties01Scene/></TimelineSequence>
  <TimelineSequence name="02-partnership-third-parties-scene-02" start={SCENES['partnership-third-parties-scene-02'].start} duration={SCENES['partnership-third-parties-scene-02'].duration}><PartnershipThirdParties02Scene/></TimelineSequence>
  <TimelineSequence name="03-partnership-third-parties-scene-03" start={SCENES['partnership-third-parties-scene-03'].start} duration={SCENES['partnership-third-parties-scene-03'].duration}><PartnershipThirdParties03Scene/></TimelineSequence>
</AbsoluteFill>;
