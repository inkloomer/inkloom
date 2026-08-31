import type {ReactNode} from 'react';
import {FileSignature, PenLine, Edit3, Hourglass, Split, FileText, CalendarDays, Handshake, Undo2, Ban, AlertTriangle, TrendingUp, Cake, UserX, Scale, Coins, Check, Stamp, BadgeCheck, Users, Landmark, Eye} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#EFE9E0', ink:'#2B2B33', indigo:'#3B4A6B', copper:'#8A4B2F', teal:'#15725F', red:'#B23A30', gold:'#B98A2F', paper:'#FAF6EC'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.teal,color:COLORS.paper}}>{code}</div>
    <div style={{position:'absolute',left:190,right:76,top:46,fontSize:46,fontWeight:900,lineHeight:1.12,borderBottom:'5px solid '+COLORS.teal,paddingBottom:12}}>{title}</div>
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

export const InsuranceContract01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="24.1" title="合同成立与代签章">
    <div data-layout="formation-signing-board-1" data-visual-anchor="concept-icon" data-visual-grammar="signing-principle-exception,review-period-split" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="insurance-contract-scene-01-rule" data-focal-channels="contrast,icon,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="insurance-contract-scene-01-formation" style={{position:'absolute',left:0,top:0,width:1768,height:120,padding:'12px 22px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',alignItems:'center',gap:14,opacity:enter(10,36)}}>
        <FileSignature size={120} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:6,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <FileSignature size={32} color={COLORS.teal}/>
        <div style={{fontSize:23,fontWeight:900}}>合同成立：投保人<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>提出保险要求</span> + 保险人<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>同意承保</span></div>
        <div style={{marginLeft:'auto',fontSize:20,fontWeight:800,color:COLORS.red}}>与保险单是否<span style={{fontWeight:900,color:COLORS.red}}>送达无关</span> <span style={{fontWeight:900}}>(×)</span></div>
      </div>
      <div data-final-knowledge="insurance-contract-scene-01-signing" style={{position:'absolute',left:0,top:142,width:864,height:250,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(24,50),translate:interpolate(frame,[24,50],['-200px 0px','0px 0px'],CLAMP)}}>
        <PenLine size={120} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><PenLine size={30} color={COLORS.copper}/>代签章</div>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(38,60)}>原则：保险人或其代理人代投保人签字盖章，对投保人<span style={{fontWeight:900,color:COLORS.red}}>不生效</span></FactRow>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(48,70)}>例外：投保人<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>已交纳保险费 → 视为追认</span>——代签+缴费，合同成立 <span style={{fontWeight:900}}>(√)</span></FactRow>
      </div>
      <div data-final-knowledge="insurance-contract-scene-01-formfilling" style={{position:'absolute',left:904,top:142,width:864,height:250,padding:'14px 20px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(36,62),translate:interpolate(frame,[36,62],['200px 0px','0px 0px'],CLAMP)}}>
        <Edit3 size={120} color={COLORS.gold} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Edit3 size={30} color={COLORS.copper}/>代填单</div>
        <FactRow color={COLORS.copper} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(50,72)}>保险人代填单证后，经投保人<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>签字或盖章确认</span> → 视为投保人的<span style={{fontWeight:900}}>真实意思表示</span></FactRow>
      </div>
      <div data-final-knowledge="insurance-contract-knowledge-1" style={{position:'absolute',left:0,top:414,width:1768,height:280,padding:'14px 22px',border:'5px dashed '+COLORS.red,background:COLORS.red+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:10,opacity:enter(62,88),translate:interpolate(frame,[62,88],['0px 24px','0px 0px'],CLAMP)}}>
        <Hourglass size={130} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.09,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.red}}><Hourglass size={30} color={COLORS.red}/>审查期间出险：收了投保单和保费，还没承保</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(76,98)}>符合<span style={{fontWeight:900}}>承保条件</span> → 保险人应当承担<span style={{fontWeight:900,color:COLORS.teal }}>赔偿责任</span></FactRow>
          <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(86,108)}>不符合承保条件 → <span style={{fontWeight:900,color:COLORS.red}}>不承担赔偿责任</span> + 退还保险费</FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const InsuranceContract02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="24.2" title="保险凭证内容冲突的解释">
    <div data-layout="conflict-rules-ladder-2" data-visual-anchor="typographic-sequence" data-visual-grammar="conflict-rule-ladder,exception-branch" data-text-treatments="chip,soft-highlight,thin-underline" data-focal-rule="insurance-contract-scene-02-rule" data-focal-channels="icon,spatial,contrast" style={{position:'absolute',inset:0}}>
      <FileText size={170} color={COLORS.indigo} strokeWidth={1.2} style={{position:'absolute',left:'50%',top:290,translate:'-50% 0',opacity:0.06,pointerEvents:'none'}}/>
      <div data-final-knowledge="insurance-contract-scene-02-rules" style={{position:'absolute',left:0,top:0,width:1768,height:520,padding:'16px 22px',border:'5px solid '+COLORS.indigo,background:COLORS.indigo+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:10,opacity:enter(10,36)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.indigo}}><Split size={30} color={COLORS.indigo}/>保险凭证内容冲突，听谁的</div>
        <FactRow color={COLORS.indigo} icon={<FileText size={24} color={COLORS.indigo}/>} enter={enter(24,46)}>① 投保单与保险单不一致：以<span style={{fontWeight:900,background:COLORS.indigo+'26',padding:'1px 6px'}}>投保单为准</span>——例外：保险人<span style={{fontWeight:900}}>说明</span>+投保人<span style={{fontWeight:900}}>同意</span>，以投保人<span style={{fontWeight:900,borderBottom:'3px solid '+COLORS.indigo,paddingBottom:1}}>签收的保险单</span>为准</FactRow>
        <FactRow color={COLORS.indigo} icon={<CalendarDays size={24} color={COLORS.indigo}/>} enter={enter(32,54)}>② 凭证<span style={{fontWeight:900}}>记载时间不同</span>：以形成时间<span style={{fontWeight:900,background:COLORS.indigo+'26',padding:'1px 6px'}}>在后</span>的为准</FactRow>
        <FactRow color={COLORS.copper} icon={<PenLine size={24} color={COLORS.copper}/>} enter={enter(40,62)}>③ <span style={{fontWeight:900}}>手写与打印</span>并存：以双方签字盖章的<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>手写内容</span>为准</FactRow>
        <FactRow color={COLORS.teal} icon={<BadgeCheck size={24} color={COLORS.teal}/>} enter={enter(48,70)}>④ 以更贴近<span style={{fontWeight:900}}>投保人真实想法</span>的文件为准</FactRow>
      </div>
      <div data-final-knowledge="insurance-contract-knowledge-2" style={{position:'absolute',left:0,top:540,width:1768,height:230,padding:'14px 22px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:10,opacity:enter(58,84),translate:interpolate(frame,[58,84],['0px 24px','0px 0px'],CLAMP)}}>
        <Stamp size={120} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.09,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Stamp size={30} color={COLORS.copper}/>解题大招与判例</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.copper} icon={<Scale size={24} color={COLORS.copper}/>} enter={enter(72,94)}><span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>投保单优先</span>：说明同意则按保单；<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>时间在后、手写优先</span></FactRow>
          <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(82,104)}>"内容不一致就以投保单为准"——<span style={{fontWeight:900,color:COLORS.red}}>(×)</span> 过于绝对，有说明同意例外</FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const InsuranceContract03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const cashY=interpolate(frame,[60,110,134,190],[120,240,240,360],CLAMP);
  return <Shell code="24.3" title="投保人的任意解除权">
    <div data-layout="policyholder-free-rescission-3" data-visual-anchor="flow-path" data-visual-grammar="free-rescission-line,cashvalue-refund-chain" data-text-treatments="chip,stamp,thin-underline" data-focal-rule="insurance-contract-scene-03-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="insurance-contract-scene-03-free" style={{position:'absolute',left:0,top:0,width:864,height:440,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:10,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <Handshake size={130} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.teal}}>
          <Handshake size={30} color={COLORS.teal}/>投保人
          <span style={{padding:'6px 14px',background:COLORS.teal,color:COLORS.paper,fontSize:20,fontWeight:900,transform:'rotate(-2deg)'}}>任意解除权</span>
        </div>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(26,48)}>人身+财产保险中，投保人随时可<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>解除合同</span></FactRow>
        <FactRow color={COLORS.teal} icon={<Users size={24} color={COLORS.teal}/>} enter={enter(36,58)}>人身保险：解除<span style={{fontWeight:900,borderBottom:'3px solid '+COLORS.teal,paddingBottom:1}}>无须被保险人或受益人同意</span></FactRow>
        <FactRow color={COLORS.indigo} icon={<Users size={24} color={COLORS.indigo}/>} enter={enter(46,68)}>判例：妻子和儿子都不同意退保——甲<span style={{fontWeight:900,color:COLORS.teal }}>仍可解除</span>，"不能解除"的说法 <span style={{fontWeight:900,color:COLORS.red}}>(×)</span></FactRow>
      </div>
      <div data-final-knowledge="insurance-contract-scene-03-buyout" style={{position:'absolute',left:904,top:0,width:864,height:440,padding:'14px 20px',border:'5px solid '+COLORS.red,background:COLORS.red+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:10,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <Ban size={130} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.red}}><Ban size={30} color={COLORS.red}/>唯一的刹车：买断</div>
        <FactRow color={COLORS.red} icon={<Coins size={24} color={COLORS.red}/>} enter={enter(40,62)}>被保险人或受益人<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>已支付相当于保单现金价值</span>的款项 + <span style={{fontWeight:900}}>通知保险人</span></FactRow>
        <FactRow color={COLORS.copper} icon={<Undo2 size={24} color={COLORS.copper}/>} enter={enter(50,72)}>此时投保人不得再解除——<span style={{fontWeight:900}}>买断除外</span></FactRow>
      </div>
      <div data-final-knowledge="insurance-contract-knowledge-3" data-stateful-source="cashvalue-refund-travel" style={{position:'absolute',left:0,top:464,width:1768,height:230,padding:'14px 22px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:10,opacity:enter(64,90),translate:interpolate(frame,[64,90],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Undo2 size={30} color={COLORS.copper}/>解除后的钱怎么退</div>
        <div style={{display:'flex',alignItems:'center',gap:14,opacity:enter(78,100)}}>
          <Chip color={COLORS.teal} icon={<Handshake size={24} color={COLORS.teal}/>} text="投保人通知解除"/>
          <div style={{fontSize:24,fontWeight:900,color:COLORS.copper}}>→</div>
          <Chip color={COLORS.copper} icon={<Hourglass size={24} color={COLORS.copper}/>} text="保险人收到通知之日起30日内"/>
          <div style={{fontSize:24,fontWeight:900,color:COLORS.copper}}>→</div>
          <div data-stateful-terminal="cashvalue-refund-travel" style={{padding:'7px 13px',background:COLORS.paper,border:'3px solid '+COLORS.red,fontSize:20,fontWeight:900,color:COLORS.red}}>退还保单现金价值</div>
        </div>
      </div>
    </div>
  </Shell>;
};

export const InsuranceContract04Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="24.4" title="保险公司的解除（人身）">
    <div data-layout="insurer-rescission-personal-4" data-visual-anchor="comparison-axis" data-visual-grammar="fraud-severity-ladder,suicide-timeline-split" data-text-treatments="chip,external-negation,soft-highlight" data-focal-rule="insurance-contract-scene-04-rule" data-focal-channels="contrast,icon,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="insurance-contract-scene-04-fraud" style={{position:'absolute',left:0,top:0,width:864,height:400,padding:'14px 20px',border:'5px solid '+COLORS.red,background:COLORS.red+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <Ban size={130} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.red}}><Ban size={30} color={COLORS.red}/>骗保与故意制造事故</div>
        <FactRow color={COLORS.red} icon={<AlertTriangle size={24} color={COLORS.red}/>} enter={enter(26,48)}><span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>谎称发生保险事故</span> → 解除 + 不赔偿 + <span style={{fontWeight:900,color:COLORS.red}}>不退费</span></FactRow>
        <FactRow color={COLORS.red} icon={<AlertTriangle size={24} color={COLORS.red}/>} enter={enter(36,58)}><span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>故意制造保险事故</span> → 解除 + 不赔偿 + 不退费</FactRow>
        <FactRow color={COLORS.gold} icon={<Coins size={24} color={COLORS.gold}/>} enter={enter(46,68)}>已交足 <span style={{fontWeight:900}}>2年以上</span>保险费的，退还保单<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>现金价值</span>（限于人身）</FactRow>
        <FactRow color={COLORS.copper} icon={<Scale size={24} color={COLORS.copper}/>} enter={enter(56,78)}>未如实告知：故意<span style={{fontWeight:900,color:COLORS.red }}>不赔不退</span>；重大过失<span style={{fontWeight:900,color:COLORS.gold }}>不赔应退</span></FactRow>
      </div>
      <div data-final-knowledge="insurance-contract-scene-04-age-suicide" style={{position:'absolute',left:904,top:0,width:864,height:400,padding:'14px 20px',border:'5px solid '+COLORS.indigo,background:COLORS.indigo+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <Cake size={130} color={COLORS.indigo} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.indigo}}><Cake size={30} color={COLORS.indigo}/>谎报年龄</div>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(40,62)}>真实年龄<span style={{fontWeight:900,color:COLORS.teal }}>可保</span>：<span style={{fontWeight:900,color:COLORS.red }}>不能解除</span> + <span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>多退少补</span></FactRow>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(50,72)}>真实年龄<span style={{fontWeight:900,color:COLORS.red }}>不可保</span>：可解除 + <span style={{fontWeight:900,color:COLORS.red }}>不赔</span> + 应退现金价值</FactRow>
      </div>
      <div data-final-knowledge="insurance-contract-knowledge-4" style={{position:'absolute',left:0,top:424,width:1768,height:270,padding:'14px 22px',border:'5px dashed '+COLORS.indigo,background:COLORS.indigo+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(58,84),translate:interpolate(frame,[58,84],['0px 24px','0px 0px'],CLAMP)}}>
        <UserX size={130} color={COLORS.indigo} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.09,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.indigo}}><UserX size={30} color={COLORS.indigo}/>被保险人自杀——两年分水岭</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:14}}>
          <FactRow color={COLORS.red} icon={<Hourglass size={24} color={COLORS.red}/>} enter={enter(72,94)}><span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>2年内</span>：解除 + 不赔偿 + 退还现金价值</FactRow>
          <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(80,102)}><span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>2年后</span>：正常赔付</FactRow>
          <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(88,110)}>无民事行为能力人自杀：<span style={{fontWeight:900,color:COLORS.teal }}>不区分时间，均正常赔付</span></FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const InsuranceContract05Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
    return <Shell code="24.5" title="财产险解除 与 解除权的行使条件">
    <div data-layout="property-risk-window-5" data-visual-anchor="flow-path" data-visual-grammar="risk-notice-chain,expiration-lock" data-text-treatments="chip,external-negation,soft-highlight" data-focal-rule="insurance-contract-scene-05-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="insurance-contract-scene-05-property" style={{position:'absolute',left:0,top:0,width:864,height:460,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <TrendingUp size={130} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><TrendingUp size={30} color={COLORS.copper}/>财产险的解除事由</div>
        <FactRow color={COLORS.copper} icon={<Ban size={24} color={COLORS.copper}/>} enter={enter(26,48)}>对保险标的<span style={{fontWeight:900 }}>安全没有尽到应尽责任</span> → 保险人可<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>增加保费或解除</span></FactRow>
        <FactRow color={COLORS.red} icon={<AlertTriangle size={24} color={COLORS.red}/>} enter={enter(36,58)}><span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>危险程度显著增加</span>：应及时通知；保险人可按约定增加保费或解除，解除应<span style={{fontWeight:900 }}>退还保费</span></FactRow>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(46,68)}>未及时通知，因危险增加发生事故 → <span style={{fontWeight:900,color:COLORS.red }}>不赔</span>——房屋危险显著增加可解除 <span style={{fontWeight:900 }}>(√)</span></FactRow>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(56,78)}>事故后<span style={{fontWeight:900 }}>不积极施救</span>并<span style={{fontWeight:900,color:COLORS.red }}>不是</span>保险人可解除合同的情形 <span style={{fontWeight:900 }}>(×)</span></FactRow>
      </div>
      <div data-final-knowledge="insurance-contract-scene-05-window" style={{position:'absolute',left:904,top:0,width:864,height:460,padding:'14px 20px',border:'5px solid '+COLORS.indigo,background:COLORS.indigo+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:10,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <Hourglass size={130} color={COLORS.indigo} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.indigo}}><Hourglass size={30} color={COLORS.indigo}/>解除权的行使条件——双期限</div>
        <FactRow color={COLORS.indigo} icon={<Eye size={24} color={COLORS.indigo}/>} enter={enter(40,62)}>自保险人<span style={{fontWeight:900,background:COLORS.indigo+'26',padding:'1px 6px'}}>知道解除事由之日起 30日内</span></FactRow>
        <FactRow color={COLORS.indigo} icon={<CalendarDays size={24} color={COLORS.indigo}/>} enter={enter(50,72)}>自<span style={{fontWeight:900,background:COLORS.indigo+'26',padding:'1px 6px'}}>合同成立之日起 2年内</span></FactRow>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(60,82)}>逾期 → 解除权<span style={{fontWeight:900,color:COLORS.red }}>消灭</span>；成立3个月后才发现年龄不实——仍在双期限内，<span style={{fontWeight:900,color:COLORS.teal }}>有解除权</span> <span style={{fontWeight:900 }}>(√)</span></FactRow>
      </div>
      <div data-final-knowledge="insurance-contract-knowledge-5" data-stateful-source="rescission-clock-travel" style={{position:'absolute',left:0,top:484,width:1768,height:220,padding:'14px 22px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:10,opacity:enter(64,90),translate:interpolate(frame,[64,90],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Scale size={30} color={COLORS.copper}/>解除一线记</div>
        <div style={{display:'flex',alignItems:'center',gap:14,opacity:enter(78,100)}}>
          <Chip color={COLORS.red} text="骗保、故意制造事故：不赔不退"/>
          <Chip color={COLORS.gold} icon={<Hourglass size={24} color={COLORS.gold}/>} text="自杀两年分水岭"/>
          <div data-stateful-terminal="rescission-clock-travel" style={{display:'contents'}}><Chip color={COLORS.indigo} text="30日 + 2年，逾期消灭"/></div>
        </div>
      </div>
    </div>
  </Shell>;
};

export const InsuranceContract=()=> <AbsoluteFill>
  <TimelineSequence name="01-insurance-contract-scene-01" start={SCENES['insurance-contract-scene-01'].start} duration={SCENES['insurance-contract-scene-01'].duration}><InsuranceContract01Scene/></TimelineSequence>
  <TimelineSequence name="02-insurance-contract-scene-02" start={SCENES['insurance-contract-scene-02'].start} duration={SCENES['insurance-contract-scene-02'].duration}><InsuranceContract02Scene/></TimelineSequence>
  <TimelineSequence name="03-insurance-contract-scene-03" start={SCENES['insurance-contract-scene-03'].start} duration={SCENES['insurance-contract-scene-03'].duration}><InsuranceContract03Scene/></TimelineSequence>
  <TimelineSequence name="04-insurance-contract-scene-04" start={SCENES['insurance-contract-scene-04'].start} duration={SCENES['insurance-contract-scene-04'].duration}><InsuranceContract04Scene/></TimelineSequence>
  <TimelineSequence name="05-insurance-contract-scene-05" start={SCENES['insurance-contract-scene-05'].start} duration={SCENES['insurance-contract-scene-05'].duration}><InsuranceContract05Scene/></TimelineSequence>
</AbsoluteFill>;
