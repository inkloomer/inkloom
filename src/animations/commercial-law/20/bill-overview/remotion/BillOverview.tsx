import type {ReactNode} from 'react';
import {Banknote, Landmark, User, Users, ScrollText, Scale, Repeat, FileText, Unlink, Receipt, ArrowRight, Check, Ban, Stamp, Handshake, GitBranch, Coins, BadgeCheck, Split, Undo2} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#EFEAE2', ink:'#2B2B33', teal:'#0F6B5C', copper:'#8A4B2F', red:'#B23A30', gold:'#B98A2F', navy:'#2C4A6E', paper:'#FAF6EC'} as const;
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

export const BillOverview01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="20.1" title="三种票据：委托 还是 承诺">
    <div data-layout="trio-bill-wires-1" data-visual-anchor="comparison-axis" data-visual-grammar="delegation-promise-wires,tenor-split" data-text-treatments="chip,soft-highlight,thin-underline" data-focal-rule="bill-overview-scene-01-rule" data-focal-channels="contrast,connector,icon" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="bill-overview-scene-01-check" style={{position:'absolute',left:0,top:0,width:560,height:330,padding:'14px 18px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-240px 0px','0px 0px'],CLAMP)}}>
        <Landmark size={120} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.teal}}><Receipt size={28} color={COLORS.teal}/>支票</div>
        <FactRow color={COLORS.teal} icon={<ArrowRight size={24} color={COLORS.teal}/>} enter={enter(26,48)}><span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>委托</span>办理支票存款业务的<span style={{fontWeight:900}}>银行或金融机构</span></FactRow>
        <FactRow color={COLORS.teal} icon={<Stamp size={24} color={COLORS.teal}/>} enter={enter(36,58)}>见票时<span style={{fontWeight:900}}>无条件支付</span>确定金额给收款人或持票人</FactRow>
      </div>
      <div data-final-knowledge="bill-overview-scene-01-promissory" style={{position:'absolute',left:604,top:0,width:560,height:330,padding:'14px 18px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(26,52),translate:interpolate(frame,[26,52],['0px 26px','0px 0px'],CLAMP)}}>
        <User size={120} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><User size={28} color={COLORS.copper}/>本票</div>
        <FactRow color={COLORS.copper} icon={<Undo2 size={24} color={COLORS.copper}/>} enter={enter(40,62)}><span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>承诺自己</span>见票时无条件支付确定金额</FactRow>
        <FactRow color={COLORS.copper} icon={<BadgeCheck size={24} color={COLORS.copper}/>} enter={enter(50,72)}>出票人<span style={{fontWeight:900}}>自付</span>——付给收款人或持票人</FactRow>
      </div>
      <div data-final-knowledge="bill-overview-scene-01-draft" style={{position:'absolute',left:1208,top:0,width:560,height:330,padding:'14px 18px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(40,66),translate:interpolate(frame,[40,66],['240px 0px','0px 0px'],CLAMP)}}>
        <Banknote size={120} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.red}}><Banknote size={28} color={COLORS.red}/>汇票</div>
        <FactRow color={COLORS.red} icon={<ArrowRight size={24} color={COLORS.red}/>} enter={enter(54,76)}><span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>委托付款人</span>——见票时或<span style={{fontWeight:900}}>指定日期</span>无条件支付</FactRow>
        <FactRow color={COLORS.red} icon={<Split size={24} color={COLORS.red}/>} enter={enter(64,86)}>按付款期限：<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>即期=见票即付</span>；远期=出票后一定期间后付款</FactRow>
      </div>
      <div data-final-knowledge="bill-overview-knowledge-1" style={{position:'absolute',left:0,top:354,width:1768,height:180,padding:'14px 22px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:10,opacity:enter(68,94),translate:interpolate(frame,[68,94],['0px 24px','0px 0px'],CLAMP)}}>
        <Coins size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Coins size={30} color={COLORS.copper}/>一句话分辨</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(82,104)}>支票、汇票是<span style={{fontWeight:900,color:COLORS.teal}}>「委托他人付款」</span>；本票是<span style={{fontWeight:900,color:COLORS.copper}}>「自己承诺付款」</span></FactRow>
          <FactRow color={COLORS.red} icon={<Banknote size={24} color={COLORS.red}/>} enter={enter(92,114)}>商业汇票（<span style={{fontWeight:900}}>银行承兑汇票、商业承兑汇票</span>）都是<span style={{fontWeight:900,color:COLORS.red}}>远期汇票</span></FactRow>
        </div>
      </div>
      <div style={{position:'absolute',left:0,right:0,top:558,bottom:0,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.ink,background:COLORS.paper,padding:'12px 24px',opacity:enter(104,130)}}>
        <Scale size={32} color={COLORS.ink}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.5}}>三方角色：<span style={{fontWeight:900,color:COLORS.copper}}>出票人</span>签发 → <span style={{fontWeight:900,color:COLORS.teal}}>付款人/银行</span>支付 → <span style={{fontWeight:900,color:COLORS.red}}>收款人/持票人</span>受款</div>
      </div>
    </div>
  </Shell>;
};

export const BillOverview02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const billX=interpolate(frame,[40,86,100,152,166,222],[180,600,600,1010,1010,1430],CLAMP);
  return <Shell code="20.2" title="票据关系：一张票的旅程">
    <div data-layout="bill-journey-spine-2" data-visual-anchor="flow-path" data-visual-grammar="endorsement-spine-travel,recourse-forkback" data-text-treatments="chip,stamp,thin-underline" data-focal-rule="bill-overview-scene-02-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="bill-overview-scene-02-spine" style={{position:'absolute',left:0,top:36,width:1768,height:6,background:COLORS.ink,transformOrigin:'left center',transform:'scaleX('+interpolate(frame,[26,70],[0,1],CLAMP)+')'}}/>
      <div data-final-knowledge="bill-overview-scene-02-person-a" style={{position:'absolute',left:80,top:70,width:200,padding:'9px 0',textAlign:'center',background:COLORS.copper,color:COLORS.paper,fontSize:22,fontWeight:900,opacity:enter(20,44)}}>甲·出票人</div>
      <div data-final-knowledge="bill-overview-scene-02-person-b" style={{position:'absolute',left:500,top:70,width:200,padding:'9px 0',textAlign:'center',background:COLORS.copper+'59',border:'4px solid '+COLORS.copper,fontSize:22,fontWeight:900,opacity:enter(30,54)}}>乙·背书人</div>
      <div data-final-knowledge="bill-overview-scene-02-person-c" style={{position:'absolute',left:920,top:70,width:200,padding:'9px 0',textAlign:'center',background:COLORS.copper+'59',border:'4px solid '+COLORS.copper,fontSize:22,fontWeight:900,opacity:enter(40,64)}}>丙·背书人</div>
      <div data-final-knowledge="bill-overview-scene-02-person-d" data-stateful-terminal="bill-holding-travel" style={{position:'absolute',left:1340,top:70,width:220,padding:'9px 0',textAlign:'center',background:COLORS.red,color:COLORS.paper,fontSize:22,fontWeight:900,opacity:enter(50,74)}}>丁·持票人</div>
      <div data-stateful-source="bill-holding-travel" style={{position:'absolute',left:billX,top:-6,padding:'7px 14px',background:COLORS.gold,color:COLORS.paper,fontSize:19,fontWeight:900,opacity:enter(34,54),boxShadow:'4px 4px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:7}}>
        <Banknote size={22} color={COLORS.paper}/>票据
      </div>
      <div data-final-knowledge="bill-overview-scene-02-payer" style={{position:'absolute',left:660,top:190,width:420,height:130,padding:'12px 18px',border:'5px solid '+COLORS.navy,background:COLORS.navy+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(66,92)}}>
        <Landmark size={100} color={COLORS.navy} strokeWidth={1.2} style={{position:'absolute',right:2,bottom:0,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:22,fontWeight:900,color:COLORS.navy}}><Landmark size={26} color={COLORS.navy}/> A公司·承兑人/付款人　B银行·付款人</div>
        <div style={{fontSize:20,fontWeight:800}}>另有保证人；在票据上<span style={{fontWeight:900,borderBottom:'3px solid '+COLORS.navy,paddingBottom:1}}>签章</span>者均为票据义务人</div>
      </div>
      <div data-final-knowledge="bill-overview-scene-02-rights" style={{position:'absolute',left:1130,top:170,width:638,height:310,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(76,102),translate:interpolate(frame,[76,102],['0px 24px','0px 0px'],CLAMP)}}>
        <Scale size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.teal}}><Scale size={30} color={COLORS.teal}/>持票人丁的两项权利</div>
        <FactRow color={COLORS.teal} icon={<Coins size={24} color={COLORS.teal}/>} enter={enter(90,112)}><span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>付款请求权</span>：向 B银行 主张付款</FactRow>
        <FactRow color={COLORS.red} icon={<Undo2 size={24} color={COLORS.red}/>} enter={enter(100,122)}><span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>追索权</span>：付款请求权实现不了时，向甲、乙、丙、A公司、已承兑的B银行主张</FactRow>
      </div>
      <div style={{position:'absolute',left:220,top:170,width:8,height:interpolate(frame,[96,126],[0,70],CLAMP),background:COLORS.red,opacity:enter(110,128)}}/>
      <div style={{position:'absolute',left:214,top:236,width:0,height:0,borderTop:'15px solid transparent',borderBottom:'15px solid transparent',borderRight:'19px solid '+COLORS.red,opacity:enter(122,136)}}/>
      <div data-final-knowledge="bill-overview-knowledge-2" style={{position:'absolute',left:0,top:290,width:1050,height:280,padding:'14px 20px',border:'5px dashed '+COLORS.red,background:COLORS.red+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(90,116),translate:interpolate(frame,[90,116],['-220px 0px','0px 0px'],CLAMP)}}>
        <GitBranch size={110} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.red}}><Undo2 size={28} color={COLORS.red}/>追索是回头看——箭头从持票人指回前手</div>
        <FactRow color={COLORS.copper} icon={<Handshake size={24} color={COLORS.copper}/>} enter={enter(104,126)}>票据义务人：甲、乙、丙、A公司、B银行——<span style={{fontWeight:900}}>在票据上签章</span>，被主张权利时应<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>支付票面金额</span></FactRow>
        <FactRow color={COLORS.teal} icon={<BadgeCheck size={24} color={COLORS.teal}/>} enter={enter(114,136)}>票据权利人：丁合法持有票据——两项权利<span style={{fontWeight:900}}>先后有序</span>：先请求付款，不行使再追索</FactRow>
      </div>
      <div style={{position:'absolute',left:0,right:0,top:594,bottom:0,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.gold,background:COLORS.gold+'66',padding:'12px 24px',opacity:enter(126,152)}}>
        <ScrollText size={32} color={COLORS.ink}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.5}}>一行记牢：票据沿<span style={{fontWeight:900,color:COLORS.copper }}>出票→背书→背书→持票</span>流转；权利只有两项——<span style={{fontWeight:900,color:COLORS.teal }}>付款请求权</span>在前，<span style={{fontWeight:900,color:COLORS.red }}>追索权</span>在后</div>
      </div>
    </div>
  </Shell>;
};

export const BillOverview03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="20.3" title="票据行为的六大特征">
    <div data-layout="six-feature-matrix-3" data-visual-anchor="typographic-sequence" data-visual-grammar="feature-grid,example-contrast-rows" data-text-treatments="chip,soft-highlight,external-negation" data-focal-rule="bill-overview-scene-03-rule" data-focal-channels="contrast,icon,spatial" style={{position:'absolute',inset:0}}>
      <Banknote size={150} color={COLORS.gold} strokeWidth={1.2} style={{position:'absolute',left:'50%',top:150,translate:'-50% 0',opacity:0.07,pointerEvents:'none'}}/>
      <div data-final-knowledge="bill-overview-scene-03-grid" style={{position:'absolute',left:0,top:0,width:1768,height:360,display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gridTemplateRows:'1fr 1fr',gap:14}}>
        <div style={{padding:'12px 16px',border:'4px solid '+COLORS.teal,background:COLORS.teal+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:6,opacity:enter(12,34)}}>
          <div style={{display:'flex',alignItems:'center',gap:9,fontSize:23,fontWeight:900,color:COLORS.teal}}><FileText size={28} color={COLORS.teal}/>要式性</div>
          <div style={{fontSize:20,fontWeight:800,lineHeight:1.4}}>票面记载或票据行为<span style={{fontWeight:900,borderBottom:'3px solid '+COLORS.teal,paddingBottom:1}}>必须按规定进行</span>，否则影响效力</div>
        </div>
        <div style={{padding:'12px 16px',border:'4px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:6,opacity:enter(20,42)}}>
          <div style={{display:'flex',alignItems:'center',gap:9,fontSize:23,fontWeight:900,color:COLORS.copper}}><Stamp size={28} color={COLORS.copper}/>设权性</div>
          <div style={{fontSize:20,fontWeight:800,lineHeight:1.4}}><span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>先有票据，再有票据权利</span></div>
        </div>
        <div style={{padding:'12px 16px',border:'4px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:6,opacity:enter(28,50)}}>
          <div style={{display:'flex',alignItems:'center',gap:9,fontSize:23,fontWeight:900,color:COLORS.copper}}><Repeat size={28} color={COLORS.copper}/>流通性</div>
          <div style={{fontSize:20,fontWeight:800,lineHeight:1.4}}>票据可以<span style={{fontWeight:900}}>流通转让</span>——背书即流转</div>
        </div>
        <div style={{padding:'12px 16px',border:'4px solid '+COLORS.navy,background:COLORS.navy+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:6,opacity:enter(36,58)}}>
          <div style={{display:'flex',alignItems:'center',gap:9,fontSize:23,fontWeight:900,color:COLORS.navy}}><ScrollText size={28} color={COLORS.navy}/>文义性</div>
          <div style={{fontSize:20,fontWeight:800,lineHeight:1.4}}>权利义务<span style={{fontWeight:900,borderBottom:'3px solid '+COLORS.navy,paddingBottom:1}}>以记载为准</span>——记载与真实不符，以记载为准</div>
        </div>
        <div style={{padding:'12px 16px',border:'4px dashed '+COLORS.red,background:COLORS.red+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:6,opacity:enter(44,66)}}>
          <div style={{display:'flex',alignItems:'center',gap:9,fontSize:23,fontWeight:900,color:COLORS.red}}><Unlink size={28} color={COLORS.red}/>独立性</div>
          <div style={{fontSize:20,fontWeight:800,lineHeight:1.4}}>某票据行为<span style={{fontWeight:900,color:COLORS.red}}>无效不影响其他</span>——乙背书时无行为能力，背书无效，<span style={{fontWeight:900}}>不影响甲的出票</span></div>
        </div>
        <div style={{padding:'12px 16px',border:'4px dashed '+COLORS.teal,background:COLORS.teal+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:6,opacity:enter(52,74)}}>
          <div style={{display:'flex',alignItems:'center',gap:9,fontSize:23,fontWeight:900,color:COLORS.teal}}><Unlink size={28} color={COLORS.teal}/>无因性</div>
          <div style={{fontSize:20,fontWeight:800,lineHeight:1.4}}>票据效力与<span style={{fontWeight:900}}>取得原因分离</span>——买卖合同被撤销，票据<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>依然有效</span></div>
        </div>
      </div>
      <div data-final-knowledge="bill-overview-knowledge-3" style={{position:'absolute',left:0,top:384,width:1768,height:200,padding:'14px 22px',border:'5px solid '+COLORS.ink,background:COLORS.paper,display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(84,110),translate:interpolate(frame,[84,110],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:23,fontWeight:900}}><Ban size={28} color={COLORS.red}/>判例：无背书签章的转手</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(98,120)}>刘某未在票据上<span style={{fontWeight:900}}>签章、未背书</span>就交付红酒公司 → 票据被拒付，刘某<span style={{fontWeight:900,color:COLORS.red}}>无票据责任</span> <span style={{fontWeight:900}}>(×)</span></FactRow>
          <FactRow color={COLORS.copper} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(108,130)}>但刘某应承担<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>合同责任</span>——红酒公司只能向刘某主张合同责任</FactRow>
        </div>
      </div>
      <div style={{position:'absolute',left:0,right:0,top:604,bottom:0,display:'flex',alignItems:'center',gap:18,border:'4px solid '+COLORS.gold,background:COLORS.gold+'66',padding:'12px 24px',opacity:enter(118,144)}}>
        <BadgeCheck size={32} color={COLORS.ink}/>
        <div style={{fontSize:22,fontWeight:900,letterSpacing:1}}>口诀：先有票据再有权利（设权）；原因不影响票据效力（无因）</div>
      </div>
    </div>
  </Shell>;
};

export const BillOverview=()=> <AbsoluteFill>
  <TimelineSequence name="01-bill-overview-scene-01" start={SCENES['bill-overview-scene-01'].start} duration={SCENES['bill-overview-scene-01'].duration}><BillOverview01Scene/></TimelineSequence>
  <TimelineSequence name="02-bill-overview-scene-02" start={SCENES['bill-overview-scene-02'].start} duration={SCENES['bill-overview-scene-02'].duration}><BillOverview02Scene/></TimelineSequence>
  <TimelineSequence name="03-bill-overview-scene-03" start={SCENES['bill-overview-scene-03'].start} duration={SCENES['bill-overview-scene-03'].duration}><BillOverview03Scene/></TimelineSequence>
</AbsoluteFill>;
