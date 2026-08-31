import type {ReactNode} from 'react';
import {UserCheck, Handshake, Briefcase, Edit3, Send, Split, Heart, FileText, Hourglass, RefreshCw, Ban, Skull, FileSignature, Coins, Users, Scale, Landmark, AlertTriangle, Check, Baby, Stamp, BadgeCheck, GitBranch} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#EFEAE1', ink:'#2B2B33', indigo:'#3B4A6B', copper:'#8A4B2F', teal:'#15725F', red:'#B23A30', gold:'#B98A2F', paper:'#FAF6EC'} as const;
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

export const LifeInsurance01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const ackX=interpolate(frame,[52,104],[240,860],CLAMP);
  return <Shell code="25.1" title="受益人的指定与变更">
    <div data-layout="designation-approval-board-1" data-visual-anchor="role-pair" data-visual-grammar="designation-approval-wires,change-notice-chain" data-text-treatments="chip,stamp,thin-underline" data-focal-rule="life-insurance-scene-01-rule" data-focal-channels="contrast,connector,motion" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="life-insurance-scene-01-designation" style={{position:'absolute',left:0,top:0,width:864,height:400,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <UserCheck size={130} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><UserCheck size={30} color={COLORS.copper}/>受益人的指定</div>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(26,48)}>① 被保险人<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>可以单独指定</span> <span style={{fontWeight:900}}>(√)</span></FactRow>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(36,58)}>② 投保人指定：须<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>经被保险人同意</span>——甲单独指定 <span style={{fontWeight:900,color:COLORS.red}}>(×)</span></FactRow>
        <FactRow color={COLORS.red} icon={<Briefcase size={24} color={COLORS.red}/>} enter={enter(46,68)}>③ 为<span style={{fontWeight:900}}>有劳动关系的劳动者</span>投保：只能指定<span style={{fontWeight:900}}>被保险人及其近亲属</span>为受益人——公司指定自己 <span style={{fontWeight:900,color:COLORS.red}}>(×)</span></FactRow>
      </div>
      <div data-final-knowledge="life-insurance-scene-01-change" style={{position:'absolute',left:904,top:0,width:864,height:400,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <Edit3 size={130} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.teal}}><Edit3 size={30} color={COLORS.teal}/>受益人的变更</div>
        <FactRow color={COLORS.teal} icon={<Users size={24} color={COLORS.teal}/>} enter={enter(40,62)}><span style={{fontWeight:900}}>主体</span>：被保险人有权变更；投保人<span style={{fontWeight:900 }}>经被保险人同意</span>也可变更</FactRow>
        <FactRow color={COLORS.teal} icon={<Hourglass size={24} color={COLORS.teal}/>} enter={enter(50,72)}><span style={{fontWeight:900}}>时间</span>：保险事故发生<span style={{fontWeight:900 }}>之前</span></FactRow>
        <FactRow color={COLORS.gold} icon={<Send size={24} color={COLORS.gold}/>} enter={enter(60,82)}><span style={{fontWeight:900 }}>通知</span>：应通知保险人，未通知对保险人<span style={{fontWeight:900,color:COLORS.red }}>不发生效力</span></FactRow>
        <FactRow color={COLORS.gold} icon={<Stamp size={24} color={COLORS.gold}/>} enter={enter(70,92)}><span style={{fontWeight:900 }}>生效</span>：自变更<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>意思表示发出时</span>生效</FactRow>
      </div>
      <div data-final-knowledge="life-insurance-knowledge-1" data-stateful-source="designation-approval-travel" style={{position:'absolute',left:0,top:424,width:1768,height:270,padding:'14px 22px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:10,opacity:enter(64,90),translate:interpolate(frame,[64,90],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Handshake size={30} color={COLORS.copper}/>同意，是指定受益人的钥匙</div>
        <div style={{display:'flex',alignItems:'center',gap:14,opacity:enter(78,100)}}>
          <Chip color={COLORS.teal} icon={<UserCheck size={24} color={COLORS.teal}/>} text="被保险人指定"/>
          <div style={{fontSize:24,fontWeight:900,color:COLORS.copper}}>→</div>
          <Chip color={COLORS.copper} icon={<Handshake size={24} color={COLORS.copper}/>} text="投保人指定 + 被保险人同意"/>
          <div style={{fontSize:24,fontWeight:900,color:COLORS.copper}}>→</div>
          <div data-stateful-terminal="designation-approval-travel" style={{padding:'7px 13px',background:COLORS.paper,border:'3px solid '+COLORS.red,fontSize:20,fontWeight:900,color:COLORS.red}}>受益人落定</div>
        </div>
      </div>
    </div>
  </Shell>;
};

export const LifeInsurance02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const selfX=interpolate(frame,[64,116],[420,1000],CLAMP);
  return <Shell code="25.2" title="受益人的确定：只写身份听谁的">
    <div data-layout="identity-determination-split-2" data-visual-anchor="boundary" data-visual-grammar="self-other-timefork,nameplus-nullify" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="life-insurance-scene-02-rule" data-focal-channels="contrast,motion,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="life-insurance-scene-02-identity" style={{position:'absolute',left:0,top:0,width:1768,height:140,padding:'12px 22px',border:'5px solid '+COLORS.indigo,background:COLORS.indigo+'59',display:'flex',alignItems:'center',gap:14,opacity:enter(10,36)}}>
        <Split size={32} color={COLORS.indigo}/>
        <div style={{fontSize:23,fontWeight:900}}>受益人=人身保险中享有<span style={{fontWeight:900,background:COLORS.indigo+'26',padding:'1px 6px'}}>保险金请求权</span>的人——<span style={{fontWeight:900 }}>无行为能力</span>和<span style={{fontWeight:900 }}>保险利益</span>要求</div>
      </div>
      <div data-stateful-source="identity-timing-travel" style={{position:'absolute',left:selfX,top:150,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.copper,fontSize:20,fontWeight:900,color:COLORS.copper,opacity:enter(34,54),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Heart size={24} color={COLORS.copper}/>仅约定“配偶”
      </div>
      <div data-final-knowledge="life-insurance-scene-02-self" style={{position:'absolute',left:0,top:210,width:864,height:240,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(48,74),translate:interpolate(frame,[48,74],['-220px 0px','0px 0px'],CLAMP)}}>
        <UserCheck size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}>
          <UserCheck size={30} color={COLORS.copper}/>保自己
          <span style={{padding:'6px 14px',background:COLORS.copper,color:COLORS.paper,fontSize:20,fontWeight:900,transform:'rotate(-2deg)'}}>看发生时</span>
        </div>
        <FactRow color={COLORS.copper} icon={<Heart size={24} color={COLORS.copper}/>} enter={enter(62,84)}>按<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>事故发生时</span>身份关系确定——甲离婚改娶丙后身亡 → <span style={{fontWeight:900 }}>丙</span>是受益人，前妻乙不是 <span style={{fontWeight:900,color:COLORS.red }}>(乙 ×)</span></FactRow>
      </div>
      <div data-final-knowledge="life-insurance-scene-02-other" style={{position:'absolute',left:904,top:210,width:864,height:240,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(58,84),translate:interpolate(frame,[58,84],['220px 0px','0px 0px'],CLAMP)}}>
        <Users size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.teal}}>
          <Users size={30} color={COLORS.teal}/>保他人
          <span style={{padding:'6px 14px',background:COLORS.teal,color:COLORS.paper,fontSize:20,fontWeight:900,transform:'rotate(2deg)'}}>看成立时</span>
        </div>
        <FactRow color={COLORS.teal} icon={<Users size={24} color={COLORS.teal}/>} enter={enter(72,94)}>按<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>合同成立时</span>身份关系确定——A为妻子B投保，B后来改嫁C → <span style={{fontWeight:900 }}>A</span>仍是受益人，现任C不是</FactRow>
      </div>
      <div data-final-knowledge="life-insurance-knowledge-2" style={{position:'absolute',left:0,top:474,width:1768,height:220,padding:'14px 22px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(84,110),translate:interpolate(frame,[84,110],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Stamp size={30} color={COLORS.copper}/>两种特殊约定</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(98,120)}>约定<span style={{fontWeight:900 }}>"姓名+身份"</span>：事故时身份已变化 → 认定为<span style={{fontWeight:900,color:COLORS.red }}>未指定受益人</span>——"配偶小甜甜"换了人</FactRow>
          <FactRow color={COLORS.teal} icon={<FileText size={24} color={COLORS.teal}/>} enter={enter(106,128)}>约定<span style={{fontWeight:900 }}>"法定"或"法定继承人"</span>：按民法规定，以<span style={{fontWeight:900 }}>被保险人的法定继承人</span>为受益人</FactRow>
        </div>
      </div>
      <div style={{position:'absolute',left:0,right:0,top:714,bottom:0,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.ink,background:COLORS.paper,padding:'10px 24px',opacity:enter(118,142)}}>
        <Scale size={30} color={COLORS.ink}/>
        <div style={{fontSize:21,fontWeight:900,letterSpacing:1}}>大招：保自己看发生，保他人看成立</div>
      </div>
    </div>
  </Shell>;
};

export const LifeInsurance03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const payX=interpolate(frame,[48,100,116,168],[110,560,560,1010],CLAMP);
  return <Shell code="25.3" title="中止 与 复效">
    <div data-layout="suspension-revival-track-3" data-visual-anchor="flow-path" data-visual-grammar="premium-lapse-track,revival-gate" data-text-treatments="chip,soft-highlight,thin-underline" data-focal-rule="life-insurance-scene-03-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div style={{position:'absolute',left:60,top:196,width:1610,height:6,background:COLORS.ink,transformOrigin:'left center',transform:'scaleX('+interpolate(frame,[26,60],[0,1],CLAMP)+')'}}/>
      <div data-final-knowledge="life-insurance-scene-03-lapse" style={{position:'absolute',left:0,top:220,width:420,height:170,padding:'12px 16px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(38,62)}}>
        <Hourglass size={100} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:2,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:22,fontWeight:900,color:COLORS.copper}}><Hourglass size={26} color={COLORS.copper}/>催告后30日</div>
        <div style={{fontSize:19,fontWeight:800,lineHeight:1.4}}>分期缴费未付后续保费，保险人<span style={{fontWeight:900 }}>催告后 30日内</span>仍未支付 → 合同<span style={{fontWeight:900,color:COLORS.red }}>中止</span></div>
      </div>
      <div data-final-knowledge="life-insurance-scene-03-accident" style={{position:'absolute',left:460,top:220,width:420,height:170,padding:'12px 16px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(50,74)}}>
        <Ban size={100} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:2,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:22,fontWeight:900,color:COLORS.red}}><Ban size={26} color={COLORS.red}/>中止期间出险</div>
        <div style={{fontSize:19,fontWeight:800,lineHeight:1.4}}>保险公司<span style={{fontWeight:900,color:COLORS.red }}>不赔</span>——中止后发生的事故无赔付义务；催告 30日<span style={{fontWeight:900 }}>内</span>出险应赔<span style={{fontWeight:900 }}>扣应交保费</span></div>
      </div>
      <div data-final-knowledge="life-insurance-scene-03-revival" style={{position:'absolute',left:920,top:220,width:420,height:170,padding:'12px 16px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(62,86)}}>
        <RefreshCw size={100} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:2,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:22,fontWeight:900,color:COLORS.teal}}><RefreshCw size={26} color={COLORS.teal}/>复效申请</div>
        <div style={{fontSize:19,fontWeight:800,lineHeight:1.4}}>投保人申请 + <span style={{fontWeight:900 }}>同意补交保费</span> → 保险人<span style={{fontWeight:900,color:COLORS.red }}>不得拒绝</span>；<span style={{fontWeight:900 }}>30日内</span>未明确拒绝视为同意，自<span style={{fontWeight:900 }}>补交之日</span>复效</div>
      </div>
      <div data-final-knowledge="life-insurance-scene-03-terminate" style={{position:'absolute',left:1380,top:220,width:388,height:170,padding:'12px 16px',border:'5px dashed '+COLORS.red,background:COLORS.red+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(74,98)}}>
        <Ban size={100} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:2,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:22,fontWeight:900,color:COLORS.red}}><Hourglass size={26} color={COLORS.red}/>2年未复效</div>
        <div style={{fontSize:19,fontWeight:800,lineHeight:1.4}}>保险人可<span style={{fontWeight:900,color:COLORS.red }}>解除合同</span>，退还保单<span style={{fontWeight:900 }}>现金价值</span></div>
      </div>
      <div data-stateful-source="revival-request-travel" style={{position:'absolute',left:payX,top:150,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.teal,fontSize:20,fontWeight:900,color:COLORS.teal,opacity:enter(34,54),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <RefreshCw size={24} color={COLORS.teal}/>补交保费·申请复效
      </div>
      <div data-final-knowledge="life-insurance-knowledge-3" style={{position:'absolute',left:0,top:414,width:1768,height:280,padding:'14px 22px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(88,114),translate:interpolate(frame,[88,114],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><AlertTriangle size={30} color={COLORS.copper}/>唯一的拒绝理由：中止期间危险显著增加</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(102,124)}>中止期间被保险人查出<span style={{fontWeight:900 }}>恶性疾病</span>（危险显著增加）→ 保险人<span style={{fontWeight:900,color:COLORS.red }}>可以拒绝复效</span> <span style={{fontWeight:900 }}>(√)</span>——出险后补交也拒绝</FactRow>
          <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(112,134)}>无危险增加 → <span style={{fontWeight:900,color:COLORS.teal }}>必须恢复效力</span>；催告后 30日内出险 → 照赔但<span style={{fontWeight:900 }}>扣应交保费</span></FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const LifeInsurance04Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const agreeX=interpolate(frame,[52,108],[360,1020],CLAMP);
  return <Shell code="25.4" title="死亡险：同意与限制">
    <div data-layout="death-cover-consent-gate-4" data-visual-anchor="flow-path" data-visual-grammar="consent-gate-line,minor-exception-branch" data-text-treatments="chip,external-negation,soft-highlight" data-focal-rule="life-insurance-scene-04-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="life-insurance-scene-04-apply" style={{position:'absolute',left:0,top:0,width:864,height:250,padding:'14px 20px',border:'5px solid '+COLORS.indigo,background:COLORS.indigo+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <Skull size={120} color={COLORS.indigo} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.indigo}}><Skull size={30} color={COLORS.indigo}/>死亡险的适用</div>
        <FactRow color={COLORS.indigo} icon={<Skull size={24} color={COLORS.indigo}/>} enter={enter(26,48)}>以被保险人<span style={{fontWeight:900,background:COLORS.indigo+'26',padding:'1px 6px'}}>死亡为给付条件</span>——含事实死亡与<span style={{fontWeight:900 }}>宣告死亡</span></FactRow>
        <FactRow color={COLORS.teal} icon={<Landmark size={24} color={COLORS.teal}/>} enter={enter(36,58)}>宣告死亡之日在责任期间外，但<span style={{fontWeight:900 }}>下落不明之日</span>在期间内 → 保险人<span style={{fontWeight:900,color:COLORS.teal }}>应赔</span> <span style={{fontWeight:900 }}>(√)</span></FactRow>
      </div>
      <div data-final-knowledge="life-insurance-scene-04-consent" style={{position:'absolute',left:904,top:0,width:864,height:250,padding:'14px 20px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <FileSignature size={120} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.red}}><FileSignature size={30} color={COLORS.red}/>被保险人同意</div>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(40,62)}>须经被保险人<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>同意并认可保险金额</span>，否则<span style={{fontWeight:900,color:COLORS.red }}>无效</span>；可<span style={{fontWeight:900 }}>授权他人代签</span> <span style={{fontWeight:900 }}>(√)</span></FactRow>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(50,72)}>保单<span style={{fontWeight:900 }}>转让或质押</span>必须经被保险人<span style={{fontWeight:900,color:COLORS.red }}>书面同意</span>——口头同意质押 <span style={{fontWeight:900,color:COLORS.red}}>(×)</span></FactRow>
      </div>
      <div data-stateful-source="death-cover-consent-travel" style={{position:'absolute',left:agreeX,top:264,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.red,fontSize:20,fontWeight:900,color:COLORS.red,opacity:enter(56,76),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <FileSignature size={24} color={COLORS.red}/>死亡险合同
      </div>
      <div data-final-knowledge="life-insurance-knowledge-4" style={{position:'absolute',left:0,top:330,width:1768,height:390,padding:'14px 22px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:10,opacity:enter(64,90),translate:interpolate(frame,[64,90],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Baby size={30} color={COLORS.copper}/>投保限制与父母例外</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(78,100)}>原则：投保人<span style={{fontWeight:900,color:COLORS.red }}>不得为无民事行为能力人投保死亡险</span>——王某现为无行为能力人仍须经同意 <span style={{fontWeight:900}}>(×)</span></FactRow>
          <FactRow color={COLORS.teal} icon={<Baby size={24} color={COLORS.teal}/>} enter={enter(88,110)}>例外：<span style={{fontWeight:900 }}>父母为未成年子女</span>投保（或经父母同意的监护人）——<span style={{fontWeight:900,color:COLORS.red }}>无须同意和认可金额</span>，但<span style={{fontWeight:900 }}>不得超过规定限额</span></FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const LifeInsurance05Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="25.5" title="保险金的支付与特殊事故">
    <div data-layout="payout-special-events-5" data-visual-anchor="comparison-axis" data-visual-grammar="payout-split-rules,dual-recovery-band" data-text-treatments="chip,stamp,external-negation" data-focal-rule="life-insurance-scene-05-rule" data-focal-channels="contrast,icon,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="life-insurance-scene-05-payout" style={{position:'absolute',left:0,top:0,width:864,height:430,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <Coins size={130} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.teal}}><Coins size={30} color={COLORS.teal}/>保险金的支付</div>
        <FactRow color={COLORS.teal} icon={<Coins size={24} color={COLORS.teal}/>} enter={enter(26,48)}>有合格受益人 → 支付给<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>受益人</span>；指定了受益人就不是<span style={{fontWeight:900,color:COLORS.red }}>遗产</span>——"由乙丙共同继承" <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
        <FactRow color={COLORS.teal} icon={<Split size={24} color={COLORS.teal}/>} enter={enter(36,58)}>数受益人中有人死亡/放弃/丧失 → 该份额按<span style={{fontWeight:900 }}>合同约定</span>处理；无约定：<span style={{fontWeight:900 }}>无顺序无比例平均分、有顺序同序内分</span></FactRow>
        <FactRow color={COLORS.teal} icon={<GitBranch size={24} color={COLORS.teal}/>} enter={enter(46,68)}>事故发生后受益人可将<span style={{fontWeight:900 }}>保险金请求权转让第三人</span>；法定继承三情形：<span style={{fontWeight:900 }}>未指定/丧失放弃无他人/先于被保险人死亡无他人</span></FactRow>
      </div>
      <div data-final-knowledge="life-insurance-scene-05-thirdparty" style={{position:'absolute',left:904,top:0,width:864,height:430,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <Scale size={130} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Scale size={30} color={COLORS.copper}/>第三人造成保险事故</div>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(40,62)}>可<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>双份获偿</span>：保险金 + 赔偿金都可主张 <span style={{fontWeight:900 }}>(√)</span>——不必二选一</FactRow>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(50,72)}>保险人<span style={{fontWeight:900,color:COLORS.red }}>无代位求偿权</span>——医疗事故致死，乙公司赔付后<span style={{fontWeight:900,color:COLORS.red }}>不能</span>向医院追偿 <span style={{fontWeight:900 }}>(×)</span></FactRow>
        <FactRow color={COLORS.copper} icon={<Stamp size={24} color={COLORS.copper}/>} enter={enter(60,82)}>人身险标的是<span style={{fontWeight:900 }}>生命或身体</span>，属<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>定额给付</span>，不适用损失填补原则</FactRow>
      </div>
      <div data-final-knowledge="life-insurance-knowledge-5" style={{position:'absolute',left:0,top:454,width:1768,height:240,padding:'14px 22px',border:'5px dashed '+COLORS.indigo,background:COLORS.indigo+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(58,84),translate:interpolate(frame,[58,84],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.indigo}}><Users size={30} color={COLORS.indigo}/>同时死亡的推定 与 特殊事故</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:14}}>
          <FactRow color={COLORS.indigo} icon={<Users size={24} color={COLORS.indigo}/>} enter={enter(72,94)}>受益人与被保险人<span style={{fontWeight:900 }}>同一事件死亡</span>且不能确定先后 → 推定<span style={{fontWeight:900,background:COLORS.indigo+'26',padding:'1px 6px'}}>受益人先死</span></FactRow>
          <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(80,102)}>投保人<span style={{fontWeight:900 }}>故意</span>造成死亡/伤残/疾病、被保险人<span style={{fontWeight:900 }}>故意犯罪</span>致死伤 → <span style={{fontWeight:900,color:COLORS.red }}>不赔</span>，交足 <span style={{fontWeight:900 }}>2年</span>应退</FactRow>
          <FactRow color={COLORS.gold} icon={<Hourglass size={24} color={COLORS.gold}/>} enter={enter(88,110)}>自杀：<span style={{fontWeight:900 }}>2年内不赔应退</span>（无行为能力人例外），<span style={{fontWeight:900,color:COLORS.teal }}>2年后应赔</span></FactRow>
        </div>
      </div>
      <div style={{position:'absolute',left:0,right:0,top:714,bottom:0,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.gold,background:COLORS.paper,padding:'10px 24px',opacity:enter(104,128)}}>
        <BadgeCheck size={30} color={COLORS.ink}/>
        <div style={{fontSize:21,fontWeight:900,letterSpacing:1}}>口诀：受益人先死推定；双份获偿、无代位求偿</div>
      </div>
    </div>
  </Shell>;
};

export const LifeInsurance=()=> <AbsoluteFill>
  <TimelineSequence name="01-life-insurance-scene-01" start={SCENES['life-insurance-scene-01'].start} duration={SCENES['life-insurance-scene-01'].duration}><LifeInsurance01Scene/></TimelineSequence>
  <TimelineSequence name="02-life-insurance-scene-02" start={SCENES['life-insurance-scene-02'].start} duration={SCENES['life-insurance-scene-02'].duration}><LifeInsurance02Scene/></TimelineSequence>
  <TimelineSequence name="03-life-insurance-scene-03" start={SCENES['life-insurance-scene-03'].start} duration={SCENES['life-insurance-scene-03'].duration}><LifeInsurance03Scene/></TimelineSequence>
  <TimelineSequence name="04-life-insurance-scene-04" start={SCENES['life-insurance-scene-04'].start} duration={SCENES['life-insurance-scene-04'].duration}><LifeInsurance04Scene/></TimelineSequence>
  <TimelineSequence name="05-life-insurance-scene-05" start={SCENES['life-insurance-scene-05'].start} duration={SCENES['life-insurance-scene-05'].duration}><LifeInsurance05Scene/></TimelineSequence>
</AbsoluteFill>;
