import type {ReactNode} from 'react';
import {Scale, ArrowRight, Undo2, Hourglass, Ban, Check, Shield, Coins, FileSignature, Edit3, PenLine, Landmark, Megaphone, Gavel, AlertTriangle, Users, GitBranch, Receipt, Split, BadgeCheck} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#ECE7DE', ink:'#2B2B33', indigo:'#3B4A6B', copper:'#8A4B2F', teal:'#15725F', red:'#B23A30', gold:'#B98A2F', paper:'#FAF6EC'} as const;
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

export const BillRights01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const claimX=interpolate(frame,[46,96],[420,900],CLAMP);
  return <Shell code="22.1" title="票据权利：两顺序与追索">
    <div data-layout="two-order-rights-1" data-visual-anchor="flow-path" data-visual-grammar="order-arrow-chain,recourse-target-band" data-text-treatments="chip,stamp,thin-underline" data-focal-rule="bill-rights-scene-01-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="bill-rights-scene-01-first" style={{position:'absolute',left:0,top:0,width:864,height:230,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <Coins size={120} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.teal}}>
          <Coins size={30} color={COLORS.teal}/>付款请求权
          <span style={{padding:'6px 14px',background:COLORS.teal,color:COLORS.paper,fontSize:20,fontWeight:900,transform:'rotate(-2deg)'}}>第一顺序</span>
        </div>
        <FactRow color={COLORS.teal} icon={<Receipt size={24} color={COLORS.teal}/>} enter={enter(26,48)}>持票人向<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>承兑人或付款人</span>出示票据要求付款</FactRow>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(36,58)}>到期后<span style={{fontWeight:900,color:COLORS.red}}>直接追索</span>？<span style={{fontWeight:900,color:COLORS.red}}>(×)</span>——先请求付款，不行使再追索</FactRow>
      </div>
      <div data-final-knowledge="bill-rights-scene-01-second" style={{position:'absolute',left:904,top:0,width:864,height:230,padding:'14px 20px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(24,50),translate:interpolate(frame,[24,50],['200px 0px','0px 0px'],CLAMP)}}>
        <Undo2 size={120} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.red}}>
          <Undo2 size={30} color={COLORS.red}/>追索权
          <span style={{padding:'6px 14px',background:COLORS.red,color:COLORS.paper,fontSize:20,fontWeight:900,transform:'rotate(2deg)'}}>第二顺序</span>
        </div>
        <FactRow color={COLORS.red} icon={<ArrowRight size={24} color={COLORS.red}/>} enter={enter(38,60)}>付款请求权<span style={{fontWeight:900,color:COLORS.red}}>未能实现时</span>，向<span style={{fontWeight:900}}>前手</span>（背书人、出票人及其他债务人）请求支付票据金额</FactRow>
      </div>
      <div data-stateful-source="recourse-claim-travel" style={{position:'absolute',left:claimX,top:250,padding:'8px 16px',background:COLORS.red,color:COLORS.paper,fontSize:20,fontWeight:900,opacity:enter(56,76),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Undo2 size={24} color={COLORS.paper}/>追索请求
      </div>
      <div data-final-knowledge="bill-rights-scene-01-targets" style={{position:'absolute',left:0,top:312,width:1768,height:170,padding:'12px 22px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(64,90)}}>
        <div data-stateful-terminal="recourse-claim-travel" style={{display:'flex',alignItems:'center',gap:10,fontSize:23,fontWeight:900,color:COLORS.copper}}><Users size={28} color={COLORS.copper}/>追索对象：出票人、背书人、保证人、承兑人——各对象为<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>连带债务人，无顺序要求</span></div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.copper} icon={<Hourglass size={24} color={COLORS.copper}/>} enter={enter(78,100)}><span style={{fontWeight:900}}>期后追索</span>：到期后被拒绝付款，可向前追索</FactRow>
          <FactRow color={COLORS.copper} icon={<Hourglass size={24} color={COLORS.copper}/>} enter={enter(86,108)}><span style={{fontWeight:900}}>期前追索</span>：到期前付款请求权已无法实现——被拒绝承兑；承兑人/付款人死亡、逃匿、被宣告破产或被责令终止业务</FactRow>
        </div>
      </div>
      <div data-final-knowledge="bill-rights-scene-01-return" style={{position:'absolute',left:0,top:502,width:1768,height:170,padding:'12px 22px',border:'5px dashed '+COLORS.indigo,background:COLORS.indigo+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(94,120),translate:interpolate(frame,[94,120],['0px 24px','0px 0px'],CLAMP)}}>
        <GitBranch size={110} color={COLORS.indigo} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:23,fontWeight:900,color:COLORS.indigo}}><GitBranch size={28} color={COLORS.indigo}/>回头背书对追索权的限制</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.indigo} icon={<Ban size={24} color={COLORS.indigo}/>} enter={enter(108,130)}>持票人为<span style={{fontWeight:900}}>出票人</span>的，对其<span style={{fontWeight:900,color:COLORS.red}}>前手无追索权</span>——乙背书回丙(出票人)，丙只可请求丁银行付款 <span style={{fontWeight:900}}>(√)</span></FactRow>
          <FactRow color={COLORS.indigo} icon={<Ban size={24} color={COLORS.indigo}/>} enter={enter(116,138)}>持票人为<span style={{fontWeight:900}}>背书人</span>的，对其<span style={{fontWeight:900,color:COLORS.red}}>后手无追索权</span>——<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>夹在中间的人不被追</span></FactRow>
        </div>
      </div>
      <div data-final-knowledge="bill-rights-knowledge-1" style={{position:'absolute',left:0,right:0,top:692,bottom:0,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.gold,background:COLORS.paper,padding:'10px 24px',opacity:enter(126,150)}}>
        <Scale size={30} color={COLORS.ink}/>
        <div style={{fontSize:21,fontWeight:800,lineHeight:1.45}}>尚未到期且无期前追索情形就追索？<span style={{fontWeight:900,color:COLORS.red}}>(×)</span>——两顺序权利<span style={{fontWeight:900}}>先付款请求、后追索</span></div>
      </div>
    </div>
  </Shell>;
};

export const BillRights02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const chainX=interpolate(frame,[72,132],[520,1420],CLAMP);
  return <Shell code="22.2" title="票据权利的取得：善意与对价">
    <div data-layout="acquisition-principle-pair-2" data-visual-anchor="role-pair" data-visual-grammar="principle-pair-rows,theft-gift-chain" data-text-treatments="chip,external-negation,soft-highlight" data-focal-rule="bill-rights-scene-02-rule" data-focal-channels="contrast,connector,motion" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="bill-rights-scene-02-goodfaith" style={{position:'absolute',left:0,top:0,width:864,height:210,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <Shield size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.teal}}><Shield size={30} color={COLORS.teal}/>善意原则</div>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(26,48)}>以<span style={{fontWeight:900,color:COLORS.red}}>欺诈、偷盗、胁迫</span>取得，或明知前列情形<span style={{fontWeight:900,color:COLORS.red}}>出于恶意</span>取得 → <span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>不享有票据权利</span></FactRow>
      </div>
      <div data-final-knowledge="bill-rights-scene-02-consideration" style={{position:'absolute',left:904,top:0,width:864,height:210,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(24,50),translate:interpolate(frame,[24,50],['200px 0px','0px 0px'],CLAMP)}}>
        <Coins size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Coins size={30} color={COLORS.copper}/>对价原则</div>
        <FactRow color={COLORS.copper} icon={<Coins size={24} color={COLORS.copper}/>} enter={enter(38,60)}>无代价或不以相当代价取得（<span style={{fontWeight:900}}>赠与、继承、税收</span>）→ 票据权利<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>不得优于其前手</span></FactRow>
      </div>
      <div data-final-knowledge="bill-rights-scene-02-chain" style={{position:'absolute',left:0,top:234,width:1768,height:280,padding:'14px 22px',border:'5px solid '+COLORS.red,background:COLORS.red+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:10,opacity:enter(52,78),translate:interpolate(frame,[52,78],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:23,fontWeight:900,color:COLORS.red}}><AlertTriangle size={28} color={COLORS.red}/>例：偷来的再送人，权利归零</div>
        <div style={{display:'flex',alignItems:'center',gap:14,opacity:enter(66,88)}}>
          <Chip color={COLORS.copper} text="A 背书转让 → B"/>
          <div style={{fontSize:24,fontWeight:900,color:COLORS.red}}>→</div>
          <Chip color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} text="C 自 B 处偷得"/>
          <div style={{fontSize:24,fontWeight:900,color:COLORS.red}}>→</div>
          <Chip color={COLORS.gold} text="C 赠与 → D"/>
        </div>
        <div data-stateful-source="tainted-bill-travel" style={{position:'absolute',left:chainX,top:150,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.red,fontSize:20,fontWeight:900,color:COLORS.red,opacity:enter(80,100),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
          <Receipt size={24} color={COLORS.red}/>被污染的票据
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(90,112)}>C 偷来票据 → <span style={{fontWeight:900,color:COLORS.red}}>不享有票据权利</span></FactRow>
          <FactRow color={COLORS.gold} icon={<Coins size={24} color={COLORS.gold}/>} enter={enter(98,120)}>D 未付对价受赠 → 权利与 C 相同，<span style={{fontWeight:900,color:COLORS.red}}>也没有票据权利</span></FactRow>
        </div>
      </div>
      <div data-final-knowledge="bill-rights-knowledge-2" style={{position:'absolute',left:0,right:0,top:534,bottom:0,display:'flex',alignItems:'center',gap:18,border:'4px solid '+COLORS.gold,background:COLORS.gold+'66',padding:'12px 24px',opacity:enter(108,134)}}>
        <BadgeCheck size={34} color={COLORS.ink}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.5}}>取得两原则：<span style={{fontWeight:900,color:COLORS.red}}>恶意取得零权利</span>；<span style={{fontWeight:900,color:COLORS.copper}}>无对价不超前手</span>——前手有瑕疵，后手跟着瑕疵走</div>
      </div>
    </div>
  </Shell>;
};

export const BillRights03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="22.3" title="票据效力：伪造、变造、更改">
    <div data-layout="forgery-alteration-triad-3" data-visual-anchor="comparison-axis" data-visual-grammar="forgery-chain,alteration-cutline" data-text-treatments="chip,external-negation,stamp" data-focal-rule="bill-rights-scene-03-rule" data-focal-channels="contrast,connector,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="bill-rights-scene-03-forgery" style={{position:'absolute',left:0,top:0,width:864,height:410,padding:'14px 20px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <PenLine size={120} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.red}}><PenLine size={30} color={COLORS.red}/>伪造——专指签章</div>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(26,48)}>无权限人<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>假冒他人名义签章</span>；不影响票据上<span style={{fontWeight:900}}>其他真实签章</span>的效力</FactRow>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(36,58)}><span style={{fontWeight:900}}>伪造人</span>（签章不在票上）与<span style={{fontWeight:900}}>被伪造人</span>（不知情）都<span style={{fontWeight:900,color:COLORS.red}}>不承担票据责任</span>，但伪造人可能担刑事、行政、民事赔偿</FactRow>
        <FactRow color={COLORS.indigo} icon={<GitBranch size={24} color={COLORS.indigo}/>} enter={enter(46,68)}>例：C 伪造 B 签章背书给 D → D 只可向 <span style={{fontWeight:900}}>A 行使追索权</span>，<span style={{fontWeight:900,color:COLORS.red}}>不能向 B、C 追索</span></FactRow>
      </div>
      <div data-final-knowledge="bill-rights-scene-03-alteration" style={{position:'absolute',left:904,top:0,width:864,height:410,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <Edit3 size={120} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Edit3 size={30} color={COLORS.copper}/>变造——签章以外事项</div>
        <FactRow color={COLORS.copper} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(40,62)}>变造<span style={{fontWeight:900,color:COLORS.red}}>不会导致票据无效</span>；变造<span style={{fontWeight:900}}>之前</span>签章者对<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>原记载</span>负责，<span style={{fontWeight:900}}>之后</span>签章者对<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>变造后记载</span>负责</FactRow>
        <FactRow color={COLORS.copper} icon={<AlertTriangle size={24} color={COLORS.copper}/>} enter={enter(50,72)}>不能辨别前后 → <span style={{fontWeight:900,borderBottom:'3px solid '+COLORS.copper,paddingBottom:1}}>视为变造之前</span></FactRow>
        <FactRow color={COLORS.indigo} icon={<GitBranch size={24} color={COLORS.indigo}/>} enter={enter(60,82)}>例：甲→乙→丙(10万改20万)→丁→戊：甲乙担 <span style={{fontWeight:900}}>10万</span>，丁担 <span style={{fontWeight:900,color:COLORS.red}}>20万</span>；丙签章前后不明 → 视为变造前，只担 <span style={{fontWeight:900}}>10万</span></FactRow>
      </div>
      <div data-final-knowledge="bill-rights-knowledge-3" style={{position:'absolute',left:0,top:434,width:1768,height:240,padding:'14px 22px',border:'5px solid '+COLORS.red,background:COLORS.red+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(64,90),translate:interpolate(frame,[64,90],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.red}}><Ban size={30} color={COLORS.red}/>更改与无能力签章</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(78,100)}><span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>金日收款</span>：金额、日期、收款人名称<span style={{fontWeight:900,color:COLORS.red}}>不得更改</span>，更改的票据<span style={{fontWeight:900,color:COLORS.red}}>无效</span>——改出票日期并盖章 <span style={{fontWeight:900}}>(×)</span></FactRow>
          <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(88,110)}>其它记载事项<span style={{fontWeight:900}}>原记载人</span>可更改，须<span style={{fontWeight:900}}>签章证明</span>；非完全民事行为能力人<span style={{fontWeight:900,color:COLORS.red}}>签章无效</span>但不影响其他签章</FactRow>
        </div>
      </div>
      <div style={{position:'absolute',left:0,right:0,top:694,bottom:0,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.gold,background:COLORS.gold+'66',padding:'10px 24px',opacity:enter(108,132)}}>
        <Scale size={30} color={COLORS.ink}/>
        <div style={{fontSize:21,fontWeight:800,lineHeight:1.45}}>有权限才叫<span style={{fontWeight:900,color:COLORS.teal }}>更改</span>，无权限就是<span style={{fontWeight:900,color:COLORS.red }}>变造/伪造</span>——签章真、变造分前后、更改守三禁</div>
      </div>
    </div>
  </Shell>;
};

export const BillRights04Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const noticeY=interpolate(frame,[48,96],[86,210],CLAMP);
  return <Shell code="22.4" title="票据抗辩与丧失补救">
    <div data-layout="defense-remedy-split-4" data-visual-anchor="boundary" data-visual-grammar="defense-boundary-line,remedy-fork" data-text-treatments="chip,external-negation,thin-underline" data-focal-rule="bill-rights-scene-04-rule" data-focal-channels="contrast,connector,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="bill-rights-scene-04-defense" style={{position:'absolute',left:0,top:0,width:864,height:610,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <Scale size={130} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Scale size={30} color={COLORS.copper}/>票据抗辩——票据有效，可抗问题人</div>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(26,48)}><span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>允许直接抗辩</span>：不履行约定义务且与自己有<span style={{fontWeight:900}}>直接债权债务关系</span>的持票人——A 可拒绝向不发货的 B 付 10万 <span style={{fontWeight:900}}>(√)</span></FactRow>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(36,58)}><span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>禁止隔山打牛</span>：不得以自己与出票人或持票人<span style={{fontWeight:900,color:COLORS.red}}>前手</span>之间的抗辩事由对抗持票人——B 转让给 C 后，A<span style={{fontWeight:900,color:COLORS.red}}>不得</span>拒绝 C <span style={{fontWeight:900}}>(×)</span></FactRow>
        <FactRow color={COLORS.gold} icon={<AlertTriangle size={24} color={COLORS.gold}/>} enter={enter(46,68)}>例外：持票人<span style={{fontWeight:900}}>明知</span>存在抗辩事由，或<span style={{fontWeight:900}}>无代价/不以相当代价</span>取得票据</FactRow>
        <FactRow color={COLORS.copper} icon={<Users size={24} color={COLORS.copper}/>} enter={enter(56,78)}>例：乙欠丙银行贷款——丙可拒绝向乙付款 <span style={{fontWeight:900}}>(√)</span>；乙背书给丁后，丙<span style={{fontWeight:900,color:COLORS.red}}>不得</span>以对乙的债权拒绝丁 <span style={{fontWeight:900}}>(×)</span></FactRow>
      </div>
      <div data-final-knowledge="bill-rights-scene-04-remedies" style={{position:'absolute',left:904,top:0,width:864,height:610,padding:'14px 20px',border:'5px solid '+COLORS.indigo,background:COLORS.indigo+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <Megaphone size={130} color={COLORS.indigo} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.indigo}}><Megaphone size={30} color={COLORS.indigo}/>票据丧失的三种补救</div>
        <FactRow color={COLORS.indigo} icon={<Gavel size={24} color={COLORS.indigo}/>} enter={enter(40,62)}>① <span style={{fontWeight:900}}>挂失止付</span>：通知付款人停止支付，否则担<span style={{fontWeight:900,color:COLORS.red}}>赔偿责任</span>；票据<span style={{fontWeight:900}}>不因此无效</span>；<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>非必经程序</span>，只有<span style={{fontWeight:900}}>失票人</span>有权提起 <span style={{fontWeight:900}}>(×)</span></FactRow>
        <FactRow color={COLORS.indigo} icon={<Megaphone size={24} color={COLORS.indigo}/>} enter={enter(50,72)}>② <span style={{fontWeight:900}}>公示催告</span>：向<span style={{fontWeight:900}}>票据支付地基层法院</span>申请，受理后 <span style={{fontWeight:900}}>3日内</span>发出公告+止付通知；公告期间转让、质押<span style={{fontWeight:900,color:COLORS.red}}>无效</span></FactRow>
        <FactRow color={COLORS.indigo} icon={<Split size={24} color={COLORS.indigo}/>} enter={enter(60,82)}>利害关系人申报：有 → 裁定<span style={{fontWeight:900}}>终结</span>另行起诉；无 → <span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>除权判决</span>（宣告票据无效），失票人持判决请求付款</FactRow>
        <FactRow color={COLORS.indigo} icon={<Landmark size={24} color={COLORS.indigo}/>} enter={enter(70,92)}>③ <span style={{fontWeight:900}}>提起诉讼</span>：起诉<span style={{fontWeight:900}}>付款人或承兑人</span>支付款项；已知现实持有人的，可起诉请求<span style={{fontWeight:900}}>返还票据</span></FactRow>
      </div>
      <div data-final-knowledge="bill-rights-knowledge-4" style={{position:'absolute',left:0,right:0,top:630,bottom:0,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.gold,background:COLORS.gold+'66',padding:'12px 24px',opacity:enter(102,128)}}>
        <BadgeCheck size={32} color={COLORS.ink}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.5}}>补救三路<span style={{fontWeight:900,color:COLORS.indigo }}>平行独立</span>；抗辩一线：<span style={{fontWeight:900,color:COLORS.teal }}>对直接当事人可抗</span>，<span style={{fontWeight:900,color:COLORS.red }}>对后手隔山不可打</span></div>
      </div>
    </div>
  </Shell>;
};

export const BillRights=()=> <AbsoluteFill>
  <TimelineSequence name="01-bill-rights-scene-01" start={SCENES['bill-rights-scene-01'].start} duration={SCENES['bill-rights-scene-01'].duration}><BillRights01Scene/></TimelineSequence>
  <TimelineSequence name="02-bill-rights-scene-02" start={SCENES['bill-rights-scene-02'].start} duration={SCENES['bill-rights-scene-02'].duration}><BillRights02Scene/></TimelineSequence>
  <TimelineSequence name="03-bill-rights-scene-03" start={SCENES['bill-rights-scene-03'].start} duration={SCENES['bill-rights-scene-03'].duration}><BillRights03Scene/></TimelineSequence>
  <TimelineSequence name="04-bill-rights-scene-04" start={SCENES['bill-rights-scene-04'].start} duration={SCENES['bill-rights-scene-04'].duration}><BillRights04Scene/></TimelineSequence>
</AbsoluteFill>;
