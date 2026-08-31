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

export const ProductQualityLaw01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const flawX=interpolate(frame,[52,112],[260,1120],CLAMP);
  return <Shell code="经4.1" title="质量监督 与 瑕疵违约责任">
    <div data-layout="supervision-flaw-lane-1" data-visual-anchor="flow-path" data-visual-grammar="spotcheck-rule-band,flaw-claim-lane" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="product-quality-law-scene-01-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="product-quality-law-scene-01-supervision" style={{position:'absolute',left:0,top:0,width:1768,height:170,padding:'12px 22px',border:'5px solid '+COLORS.navy,background:COLORS.navy+'59',display:'flex',alignItems:'center',gap:16,opacity:enter(10,36)}}>
        <Eye size={110} color={COLORS.navy} strokeWidth={1.2} style={{position:'absolute',right:8,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <Eye size={32} color={COLORS.navy}/>
        <div style={{fontSize:23,fontWeight:900}}>监督检查以<span style={{fontWeight:900,background:COLORS.navy+'26',padding:'1px 6px'}}>抽查</span>为主要方式</div>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(24,46)}><span style={{fontWeight:900,color:COLORS.red }}>禁止重复抽查</span>：上级抽过的，下级不得另行重复</FactRow>
        <FactRow color={COLORS.red} icon={<Coins size={24} color={COLORS.red}/>} enter={enter(34,56)}><span style={{fontWeight:900,color:COLORS.red }}>不得收取检验费用</span>——“收取适当检验费” <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
      </div>
      <div data-stateful-source="flaw-claim-travel" style={{position:'absolute',left:flawX,top:196,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.copper,fontSize:20,fontWeight:900,color:COLORS.copper,opacity:enter(48,68),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Coins size={24} color={COLORS.copper}/>少一片拼图的索赔
      </div>
      <div data-final-knowledge="product-quality-law-scene-01-flaw" style={{position:'absolute',left:0,top:262,width:864,height:420,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(52,78),translate:interpolate(frame,[52,78],['-200px 0px','0px 0px'],CLAMP)}}>
        <Undo2 size={120} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}>
          <Undo2 size={30} color={COLORS.copper}/>产品瑕疵
          <span style={{padding:'6px 14px',background:COLORS.copper,color:COLORS.paper,fontSize:20,fontWeight:900,transform:'rotate(-2deg)'}}>违约责任</span>
        </div>
        <FactRow color={COLORS.copper} icon={<Store size={24} color={COLORS.copper}/>} enter={enter(66,88)}><span style={{fontWeight:900 }}>销售者赔偿</span>；属生产者责任的，赔后可向生产者<span style={{fontWeight:900 }}>追偿</span></FactRow>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(76,98)}><span style={{fontWeight:900 }}>免责</span>：事先<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>明确告知瑕疵</span></FactRow>
      </div>
      <div data-final-knowledge="product-quality-law-knowledge-1" data-stateful-terminal="flaw-claim-travel" style={{position:'absolute',left:904,top:262,width:864,height:420,padding:'14px 20px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(62,88),translate:interpolate(frame,[62,88],['200px 0px','0px 0px'],CLAMP)}}>
        <Landmark size={120} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.red}}><Landmark size={28} color={COLORS.red}/>展销会判例（借照+租柜）</div>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(76,98)}>少一片 = <span style={{fontWeight:900 }}>瑕疵（违约）</span>；王某与生产者丁公司<span style={{fontWeight:900,color:COLORS.red }}>无合同关系</span>，不能直接找丁 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(86,108)}>只能找：销售者甲 / 营业执照所有人乙 / 玩具协会与柜台出租者丙</FactRow>
      </div>
    </div>
  </Shell>;
};

export const ProductQualityLaw02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const blastX=interpolate(frame,[52,112],[240,1120],CLAMP);
  return <Shell code="经4.2" title="缺陷责任：对外无过错，对内看过错">
    <div data-layout="defect-double-track-2" data-visual-anchor="boundary" data-visual-grammar="strict-fault-double-track,victim-lane" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="product-quality-law-scene-02-rule" data-focal-channels="contrast,motion,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="product-quality-law-scene-02-external" style={{position:'absolute',left:0,top:0,width:1768,height:364,padding:'14px 22px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <AlertTriangle size={120} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.red}}>
          <AlertTriangle size={30} color={COLORS.red}/>产品缺陷
          <span style={{padding:'6px 14px',background:COLORS.red,color:COLORS.paper,fontSize:20,fontWeight:900,transform:'rotate(2deg)'}}>侵权责任</span>
        </div>
        <FactRow color={COLORS.red} icon={<Scale size={24} color={COLORS.red}/>} enter={enter(26,48)}><span style={{fontWeight:900 }}>对外</span>：生产者与销售者均承担<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>无过错责任（严格责任）</span>——销售者/生产者都可赔</FactRow>
        <FactRow color={COLORS.copper} icon={<Undo2 size={24} color={COLORS.copper}/>} enter={enter(36,58)}><span style={{fontWeight:900 }}>对内</span>：销售者承担<span style={{fontWeight:900 }}>过错责任</span>，可相互追偿</FactRow>
      </div>
      <div data-stateful-source="victim-claim-travel" style={{position:'absolute',left:blastX,top:382,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.teal,fontSize:20,fontWeight:900,color:COLORS.teal,opacity:enter(48,68),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Users size={24} color={COLORS.teal}/>受害人三金索赔
      </div>
      <div data-final-knowledge="product-quality-law-knowledge-2" data-stateful-terminal="victim-claim-travel" style={{position:'absolute',left:0,top:432,width:1768,height:338,padding:'14px 22px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(62,88),translate:interpolate(frame,[62,88],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Users size={30} color={COLORS.copper}/>受害人判例</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(76,98)}>三金在五金家看电视被炸伤——<span style={{fontWeight:900 }}>不是消费者也能赔</span>：<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px' }}>受害人</span>可向生产者或销售者要求赔偿 <span style={{fontWeight:900 }}>(×)</span></FactRow>
          <FactRow color={COLORS.copper} icon={<Split size={24} color={COLORS.copper}/>} enter={enter(86,108)}>瑕疵 vs 缺陷口诀：<span style={{fontWeight:900 }}>瑕疵违约找销售者</span>；<span style={{fontWeight:900 }}>缺陷侵权两边都可找</span></FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const ProductQualityLaw03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="经4.3" title="生产者免责 与 时效期限">
    <div data-layout="exemption-clock-board-3" data-visual-anchor="timeline-gate" data-visual-grammar="exemption-trio,tenyear-clock" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="product-quality-law-scene-03-rule" data-focal-channels="contrast,icon,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="product-quality-law-scene-03-exemption" style={{position:'absolute',left:0,top:0,width:864,height:400,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <Shield size={120} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.teal}}><Shield size={30} color={COLORS.teal}/>生产者免责三事由</div>
        <FactRow color={COLORS.teal} icon={<Ban size={24} color={COLORS.teal}/>} enter={enter(26,48)}>① 未将产品<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>投入流通</span></FactRow>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(36,58)}>② 投入流通时引起损害的缺陷<span style={{fontWeight:900 }}>尚不存在</span></FactRow>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(46,68)}>③ 投入流通时的<span style={{fontWeight:900 }}>科学技术水平</span>尚不能发现缺陷</FactRow>
      </div>
      <div data-final-knowledge="product-quality-law-knowledge-3" style={{position:'absolute',left:904,top:0,width:864,height:400,padding:'14px 20px',border:'5px solid '+COLORS.indigo,background:COLORS.indigo+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <Hourglass size={120} color={COLORS.indigo} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:24,fontWeight:900,color:COLORS.indigo}}><Hourglass size={30} color={COLORS.indigo}/>时效与请求权期限</div>
        <FactRow color={COLORS.indigo} icon={<Hourglass size={24} color={COLORS.indigo}/>} enter={enter(40,62)}><span style={{fontWeight:900 }}>诉讼时效</span>：<span style={{fontWeight:900,background:COLORS.indigo+'26',padding:'1px 6px'}}>3年</span>，自知道或应当知道权益受损害时起算</FactRow>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(50,72)}><span style={{fontWeight:900 }}>赔偿请求权</span>：缺陷产品<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>交付最初消费者满10年</span>丧失——"生产日期满十年" <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(60,82)}>例外：未超过<span style={{fontWeight:900 }}>明示的安全使用期</span></FactRow>
      </div>
      <div data-final-knowledge="product-quality-law-knowledge-4" style={{position:'absolute',left:0,top:424,width:1768,height:270,padding:'14px 22px',border:'5px dashed '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(64,90),translate:interpolate(frame,[64,90],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Stamp size={30} color={COLORS.copper}/>责任一线记</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.copper} icon={<Undo2 size={24} color={COLORS.copper}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>瑕疵·违约</span>：销售者赔偿，内部追偿，事先告知免责</FactRow>
          <FactRow color={COLORS.red} icon={<AlertTriangle size={24} color={COLORS.red}/>} enter={enter(88,110)}><span style={{fontWeight:900 }}>缺陷·侵权</span>：两边都可赔，对外无过错、对内看过错，3年时效、10年消灭</FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const ProductQualityLaw=()=> <AbsoluteFill>
  <TimelineSequence name="01-product-quality-law-scene-01" start={SCENES['product-quality-law-scene-01'].start} duration={SCENES['product-quality-law-scene-01'].duration}><ProductQualityLaw01Scene/></TimelineSequence>
  <TimelineSequence name="02-product-quality-law-scene-02" start={SCENES['product-quality-law-scene-02'].start} duration={SCENES['product-quality-law-scene-02'].duration}><ProductQualityLaw02Scene/></TimelineSequence>
  <TimelineSequence name="03-product-quality-law-scene-03" start={SCENES['product-quality-law-scene-03'].start} duration={SCENES['product-quality-law-scene-03'].duration}><ProductQualityLaw03Scene/></TimelineSequence>
</AbsoluteFill>;
