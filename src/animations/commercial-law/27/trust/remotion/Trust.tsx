import type {ReactNode} from 'react';
import {Scale, Users, UserCheck, Coins, FileSignature, Ban, Hourglass, ShieldCheck, Landmark, Split, Gift, GitBranch, Stamp, AlertTriangle, Check, Heart, Undo2, ScrollText, BadgeCheck, Edit3} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#ECE9E0', ink:'#2B2B33', indigo:'#3B4A6B', copper:'#8A4B2F', teal:'#15725F', red:'#B23A30', gold:'#B98A2F', paper:'#FAF6EC'} as const;
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

export const Trust01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const trustX=interpolate(frame,[52,110],[300,1240],CLAMP);
  return <Shell code="27.1" title="信托设立：三确定与书面">
    <div data-layout="establishment-confirmation-board-1" data-visual-anchor="flow-path" data-visual-grammar="three-confirmations,formation-form-split" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="trust-scene-01-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="trust-scene-01-concept" style={{position:'absolute',left:0,top:0,width:1768,height:120,padding:'12px 22px',border:'5px solid '+COLORS.indigo,background:COLORS.indigo+'59',display:'flex',alignItems:'center',gap:14,opacity:enter(10,36)}}>
        <Scale size={120} color={COLORS.indigo} strokeWidth={1.2} style={{position:'absolute',right:6,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <Scale size={32} color={COLORS.indigo}/>
        <div style={{fontSize:23,fontWeight:900}}>委托人将财产权<span style={{fontWeight:900,background:COLORS.indigo+'26',padding:'1px 6px'}}>委托</span>给受托人，受托人以<span style={{fontWeight:900,color:COLORS.copper }}>自己的名义</span>为受益人利益或特定目的管理处分</div>
      </div>
      <div data-stateful-source="trust-formation-confirmation" style={{position:'absolute',left:trustX,top:134,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.copper,fontSize:20,fontWeight:900,color:COLORS.copper,opacity:enter(34,54),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <ScrollText size={24} color={COLORS.copper}/>书面信托文件
      </div>
      <div data-final-knowledge="trust-scene-01-confirmations" style={{position:'absolute',left:0,top:196,width:500,height:230,padding:'12px 16px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(48,72)}}>
        <div style={{fontSize:22,fontWeight:900,color:COLORS.teal}}><BadgeCheck size={26} color={COLORS.teal}/>三确定</div>
        <div style={{fontSize:19,fontWeight:800,lineHeight:1.45}}>① <span style={{fontWeight:900 }}>信托财产</span>确定——"一年后打算买的房"<span style={{fontWeight:900,color:COLORS.red }}>不确定</span>，信托无效</div>
        <div style={{fontSize:19,fontWeight:800,lineHeight:1.45}}>② <span style={{fontWeight:900 }}>受益人</span>或范围确定</div>
        <div style={{fontSize:19,fontWeight:800,lineHeight:1.45}}>③ <span style={{fontWeight:900 }}>信托目的</span>确定</div>
      </div>
      <div data-final-knowledge="trust-scene-01-formation" style={{position:'absolute',left:530,top:196,width:500,height:230,padding:'12px 16px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(58,82)}}>
        <div style={{fontSize:22,fontWeight:900,color:COLORS.copper}}><FileSignature size={26} color={COLORS.copper}/>成立时点</div>
        <div style={{fontSize:19,fontWeight:800,lineHeight:1.45}}>必须<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>书面形式</span>，口头信托无效</div>
        <div style={{fontSize:19,fontWeight:800,lineHeight:1.45}}>信托合同：<span style={{fontWeight:900 }}>签订时</span>成立</div>
        <div style={{fontSize:19,fontWeight:800,lineHeight:1.45}}>其他书面：<span style={{fontWeight:900 }}>受托人承诺时</span>成立；<span style={{fontWeight:900 }}>遗嘱</span>：遗嘱生效（死亡）时成立</div>
      </div>
      <div data-final-knowledge="trust-scene-01-void" style={{position:'absolute',left:1060,top:196,width:708,height:230,padding:'12px 16px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:6,opacity:enter(68,92)}}>
        <div style={{fontSize:22,fontWeight:900,color:COLORS.red}}><Ban size={26} color={COLORS.red}/>无效五情形</div>
        <div style={{fontSize:18,fontWeight:800,lineHeight:1.4}}>目的违法损害公共利益 / 财产不能确定 / <span style={{fontWeight:900 }}>非法财产</span>设立 / 专以<span style={{fontWeight:900,color:COLORS.red }}>诉讼讨债</span>为目的 / 受益人不能确定</div>
      </div>
      <div data-final-knowledge="trust-knowledge-1" data-stateful-terminal="trust-formation-confirmation" style={{position:'absolute',left:0,top:450,width:1768,height:320,padding:'14px 22px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(78,104),translate:interpolate(frame,[78,104],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Undo2 size={30} color={COLORS.copper}/>委托人债权人的撤销权</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.gold} icon={<Hourglass size={24} color={COLORS.gold}/>} enter={enter(92,114)}>前提：设立信托<span style={{fontWeight:900 }}>损害债权人利益</span>；自<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>知道或应当知道撤销原因之日起1年内</span>申请法院撤销——"自设立信托起算" <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
          <FactRow color={COLORS.teal} icon={<Heart size={24} color={COLORS.teal}/>} enter={enter(102,124)}>撤销后<span style={{fontWeight:900,color:COLORS.red }}>不影响善意受益人</span>已取得的信托利益</FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const Trust02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const wallX=interpolate(frame,[44,96],[160,640],CLAMP);
  return <Shell code="27.2" title="信托财产的独立性">
    <div data-layout="independence-vault-walls-2" data-visual-anchor="boundary" data-visual-grammar="independence-walls,enforcement-exception-gate" data-text-treatments="chip,soft-highlight,external-negation" data-focal-rule="trust-scene-02-rule" data-focal-channels="contrast,connector,icon" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="trust-scene-02-core" style={{position:'absolute',left:180,top:60,width:420,height:280,padding:'14px 18px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(12,38)}}>
        <Coins size={120} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:25,fontWeight:900,color:COLORS.copper,textAlign:'center'}}>信托财产</div>
        <div style={{fontSize:20,fontWeight:800,lineHeight:1.5,textAlign:'center'}}>独立于委托人、受托人、<br/>受益人三方的财产与债务</div>
      </div>
      <div data-stateful-source="trust-partition-wall" style={{position:'absolute',left:wallX,top:40,width:8,height:320,background:COLORS.teal,transformOrigin:'top center'}}/>
      <div data-final-knowledge="trust-scene-02-walls" style={{position:'absolute',left:700,top:0,width:1068,height:400,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(40,66),translate:interpolate(frame,[40,66],['240px 0px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.teal}}><ShieldCheck size={30} color={COLORS.teal}/>五道隔离墙</div>
        <FactRow color={COLORS.teal} icon={<Users size={24} color={COLORS.teal}/>} enter={enter(54,76)}><span style={{fontWeight:900 }}>独立于委托人</span>：不属于委托人；其债权人原则上不得强执（<span style={{fontWeight:900,color:COLORS.red }}>×豪车抵押权强执信托房屋</span>）；死亡/破产时非<span style={{fontWeight:900 }}>唯一受益人</span>的信托存续，不作为遗产</FactRow>
        <FactRow color={COLORS.copper} icon={<UserCheck size={24} color={COLORS.copper}/>} enter={enter(64,86)}><span style={{fontWeight:900 }}>独立于受托人</span>：不归入固有财产、不偿其个人债务，反之亦然；其死亡/破产信托存续</FactRow>
        <FactRow color={COLORS.gold} icon={<Gift size={24} color={COLORS.gold}/>} enter={enter(74,96)}><span style={{fontWeight:900 }}>独立于受益人</span>：只能按约定获取<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>受益权</span>，不能直接对信托财产主张权利</FactRow>
      </div>
      <div data-final-knowledge="trust-knowledge-2" style={{position:'absolute',left:0,top:424,width:1768,height:346,padding:'14px 22px',border:'5px dashed '+COLORS.red,background:COLORS.red+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(76,102),translate:interpolate(frame,[76,102],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.red}}><Landmark size={30} color={COLORS.red}/>强制执行的三条例外</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:14}}>
          <FactRow color={COLORS.red} icon={<Coins size={24} color={COLORS.red}/>} enter={enter(90,112)}>① 设立前债权人已享有<span style={{fontWeight:900 }}>优先受偿权</span>并主张行使</FactRow>
          <FactRow color={COLORS.red} icon={<UserCheck size={24} color={COLORS.red}/>} enter={enter(98,120)}>② 受托人<span style={{fontWeight:900 }}>处理信托事务所生债务</span>，债权人要求清偿</FactRow>
          <FactRow color={COLORS.red} icon={<Landmark size={24} color={COLORS.red}/>} enter={enter(106,128)}>③ 信托财产本身应担负的<span style={{fontWeight:900 }}>税款</span></FactRow>
        </div>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(114,136)}>判例：甲为唯一继承人乙设保——甲非唯一受益人，甲去世<span style={{fontWeight:900,color:COLORS.teal }}>信托存续</span>，乙继承的是<span style={{fontWeight:900 }}>信托受益权</span>而非财产 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
      </div>
    </div>
  </Shell>;
};

export const Trust03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const dutyX=interpolate(frame,[52,110],[340,1240],CLAMP);
  return <Shell code="27.3" title="三方当事人：权责一览">
    <div data-layout="tripartite-duty-columns-3" data-visual-anchor="role-pair" data-visual-grammar="duty-column-triad,revocation-clock" data-text-treatments="chip,external-negation,thin-underline" data-focal-rule="trust-scene-03-rule" data-focal-channels="contrast,icon,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="trust-scene-03-settlor" style={{position:'absolute',left:0,top:0,width:560,height:470,padding:'14px 18px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-220px 0px','0px 0px'],CLAMP)}}>
        <Users size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Users size={30} color={COLORS.copper}/>委托人</div>
        <FactRow color={COLORS.copper} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(26,48)}>完全民事行为能力；可作<span style={{fontWeight:900 }}>唯一受益人</span></FactRow>
        <FactRow color={COLORS.red} icon={<Undo2 size={24} color={COLORS.red}/>} enter={enter(36,58)}><span style={{fontWeight:900 }}>撤销权</span>：受托人违反目的处分或不当管理致损 → <span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>知道或应当知道1年内</span>申请法院撤销 + 恢复原状或赔偿</FactRow>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(46,68)}>恶意受让人<span style={{fontWeight:900,color:COLORS.red }}>明知违反目的</span>仍接受 → 应<span style={{fontWeight:900,color:COLORS.red }}>返还或赔偿</span></FactRow>
        <FactRow color={COLORS.copper} icon={<UserCheck size={24} color={COLORS.copper}/>} enter={enter(56,78)}><span style={{fontWeight:900 }}>解任权</span>：重大过失 → 按信托文件解任或<span style={{fontWeight:900 }}>申请法院解任</span></FactRow>
      </div>
      <div data-final-knowledge="trust-scene-03-trustee" style={{position:'absolute',left:604,top:0,width:560,height:470,padding:'14px 18px',border:'5px solid '+COLORS.indigo,background:COLORS.indigo+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(26,52),translate:interpolate(frame,[26,52],['0px 26px','0px 0px'],CLAMP)}}>
        <UserCheck size={110} color={COLORS.indigo} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.indigo}}><UserCheck size={30} color={COLORS.indigo}/>受托人</div>
        <FactRow color={COLORS.indigo} icon={<Split size={24} color={COLORS.indigo}/>} enter={enter(40,62)}><span style={{fontWeight:900 }}>分别管理</span>：信托财产与固有财产、不同委托人的信托财产<span style={{fontWeight:900 }}>分别管理、分别记账</span></FactRow>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(50,72)}><span style={{fontWeight:900,color:COLORS.red }}>禁止自我交易</span>：固有财产与信托财产、不同信托财产间<span style={{fontWeight:900,color:COLORS.red }}>不得互相交易</span></FactRow>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(60,82)}>例外：信托文件另有规定 / 委托人或受益人同意 + <span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>价格公平</span></FactRow>
        <FactRow color={COLORS.copper} icon={<Hourglass size={24} color={COLORS.copper}/>} enter={enter(70,92)}>职责终止：死亡/破产/丧失行为能力/辞任被解任 → 信托<span style={{fontWeight:900 }}>存续</span>，选任新受托人；<span style={{fontWeight:900 }}>辞任须委托人和受益人同时同意</span>，辞任不终止信托 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
      </div>
      <div data-final-knowledge="trust-scene-03-beneficiary" style={{position:'absolute',left:1208,top:0,width:560,height:470,padding:'14px 18px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(40,66),translate:interpolate(frame,[40,66],['220px 0px','0px 0px'],CLAMP)}}>
        <Gift size={110} color={COLORS.gold} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Gift size={30} color={COLORS.gold}/>受益人</div>
        <FactRow color={COLORS.copper} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(54,76)}><span style={{fontWeight:900 }}>无行为能力要求</span>；受托人可为受益人但<span style={{fontWeight:900,color:COLORS.red }}>不能是唯一受益人</span></FactRow>
        <FactRow color={COLORS.copper} icon={<Gift size={24} color={COLORS.copper}/>} enter={enter(64,86)}>共同受益人按文件享受利益，未规定<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>均等比例</span></FactRow>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(74,96)}><span style={{fontWeight:900 }}>放弃</span>：全体放弃 → 信托<span style={{fontWeight:900,color:COLORS.red }}>终止</span>；部分放弃 → 文件规定的人→其他受益人→<span style={{fontWeight:900 }}>委托人或其继承人</span></FactRow>
      </div>
      <div data-final-knowledge="trust-knowledge-3" style={{position:'absolute',left:0,top:494,width:1768,height:200,padding:'14px 22px',border:'5px solid '+COLORS.gold,background:COLORS.paper,display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(84,110),translate:interpolate(frame,[84,110],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:23,fontWeight:900}}><AlertTriangle size={28} color={COLORS.red}/>判例：低价卖侄子</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(98,120)}>小李对信托<span style={{fontWeight:900 }}>知情（恶意）</span> → 应<span style={{fontWeight:900,color:COLORS.red }}>返还文物</span></FactRow>
          <FactRow color={COLORS.gold} icon={<Hourglass size={24} color={COLORS.gold}/>} enter={enter(108,130)}>但撤销须自<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>知道撤销原因之日</span>起1年——"自出售之日起" <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
        </div>
      </div>
      <div data-stateful-source="duty-boundary-travel" style={{position:'absolute',left:dutyX,top:476,padding:'7px 14px',background:COLORS.indigo,color:COLORS.paper,fontSize:19,fontWeight:900,opacity:enter(88,108),boxShadow:'4px 4px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:7}}>
        <GitBranch size={22} color={COLORS.paper}/>权责分界
      </div>
    </div>
  </Shell>;
};

export const Trust04Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="27.4" title="信托的变更与终止">
    <div data-layout="change-termination-board-4" data-visual-anchor="comparison-axis" data-visual-grammar="change-condition-list,nontermination-contrast" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="trust-scene-04-rule" data-focal-channels="contrast,icon,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="trust-scene-04-change" style={{position:'absolute',left:0,top:0,width:864,height:380,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <Edit3 size={120} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Edit3 size={30} color={COLORS.copper}/>变更受益人 / 处分受益权的情形</div>
        <FactRow color={COLORS.copper} icon={<Ban size={24} color={COLORS.copper}/>} enter={enter(26,48)}>① 受益人对委托人<span style={{fontWeight:900 }}>重大侵权</span>　② 对其他共同受益人<span style={{fontWeight:900 }}>重大侵权</span></FactRow>
        <FactRow color={COLORS.copper} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(36,58)}>③ <span style={{fontWeight:900 }}>经受益人同意</span>　④ 信托文件规定的其他情形</FactRow>
        <FactRow color={COLORS.teal} icon={<Undo2 size={24} color={COLORS.teal}/>} enter={enter(46,68)}><span style={{fontWeight:900 }}>解除信托</span>：<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>自益信托的委托人</span>享有解除权（文件另有规定除外）+ 上述 ②③④</FactRow>
      </div>
      <div data-final-knowledge="trust-scene-04-termination" style={{position:'absolute',left:904,top:0,width:864,height:380,padding:'14px 20px',border:'5px solid '+COLORS.red,background:COLORS.red+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <Ban size={120} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.red}}><Ban size={30} color={COLORS.red}/>终止五情形</div>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(40,62)}>① 无受益人 / <span style={{fontWeight:900 }}>全体放弃受益权</span>　② 文件规定的终止事由发生</FactRow>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(50,72)}>③ 存续违反目的 / <span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>目的已实现或不能实现</span>——小甲死亡 <span style={{fontWeight:900 }}>(√)</span></FactRow>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(60,82)}>④ 当事人协商同意　⑤ 信托被撤销或被解除</FactRow>
      </div>
      <div data-final-knowledge="trust-knowledge-4" style={{position:'absolute',left:0,top:404,width:1768,height:290,padding:'14px 22px',border:'5px dashed '+COLORS.indigo,background:COLORS.indigo+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(64,90),translate:interpolate(frame,[64,90],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.indigo}}><Check size={30} color={COLORS.indigo}/>不终止的情形——人换了，信托还在</div>
        <FactRow color={COLORS.indigo} icon={<Users size={24} color={COLORS.indigo}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>委托人或受托人</span>死亡、丧失民事行为能力、被解散撤销宣告破产；<span style={{fontWeight:900 }}>受托人辞任</span>——均<span style={{fontWeight:900,color:COLORS.teal }}>不终止</span>：甲死亡 ×、乙失能 ×、乙辞任 ×（仅职责终止，选任新受托人）</FactRow>
        <FactRow color={COLORS.gold} icon={<GitBranch size={24} color={COLORS.gold}/>} enter={enter(88,110)}><span style={{fontWeight:900 }}>终止后归属顺序</span>：信托文件规定的人 → <span style={{fontWeight:900 }}>受益人或其继承人</span> → <span style={{fontWeight:900 }}>委托人或其继承人</span></FactRow>
      </div>
      <div style={{position:'absolute',left:0,right:0,top:714,bottom:0,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.gold,background:COLORS.paper,padding:'10px 24px',opacity:enter(104,128)}}>
        <Stamp size={30} color={COLORS.ink}/>
        <div style={{fontSize:21,fontWeight:900,letterSpacing:1}}>判例：全体受益人放弃 → 信托终止，由继承人继续享有受益权的说法 (×)</div>
      </div>
    </div>
  </Shell>;
};

export const Trust=()=> <AbsoluteFill>
  <TimelineSequence name="01-trust-scene-01" start={SCENES['trust-scene-01'].start} duration={SCENES['trust-scene-01'].duration}><Trust01Scene/></TimelineSequence>
  <TimelineSequence name="02-trust-scene-02" start={SCENES['trust-scene-02'].start} duration={SCENES['trust-scene-02'].duration}><Trust02Scene/></TimelineSequence>
  <TimelineSequence name="03-trust-scene-03" start={SCENES['trust-scene-03'].start} duration={SCENES['trust-scene-03'].duration}><Trust03Scene/></TimelineSequence>
  <TimelineSequence name="04-trust-scene-04" start={SCENES['trust-scene-04'].start} duration={SCENES['trust-scene-04'].duration}><Trust04Scene/></TimelineSequence>
</AbsoluteFill>;
