import type {ReactNode} from 'react';
import {Globe, Flag, Building2, TrendingUp, ScrollText, DoorClosed, Scale, Landmark, Stamp, FileCheck2, Handshake, Vote, ShoppingCart, ShieldCheck, Coins, Lightbulb, Ban, FileSignature, Gavel, Lock, Check, AlertTriangle, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#EFECE3', ink:'#2B2B33', navy:'#2C4A6E', copper:'#8A4B2F', teal:'#15725F', red:'#B23A30', gold:'#B98A2F', paper:'#FAF6EC'} as const;
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

export const ForeignInvestment01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const invX=interpolate(frame,[44,96],[80,760],CLAMP);
  return <Shell code="19.1" title="外商投资 与 负面清单">
    <div data-layout="negative-list-sorter-1" data-visual-anchor="flow-path" data-visual-grammar="list-sorter-fork,ban-limit-split" data-text-treatments="chip,stamp,external-negation" data-focal-rule="foreign-investment-scene-01-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="investment-listing-travel" style={{position:'absolute',left:invX,top:8,padding:'9px 18px',background:COLORS.paper,border:'4px solid '+COLORS.navy,fontSize:21,fontWeight:900,color:COLORS.navy,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:9}}>
        <Globe size={26} color={COLORS.navy}/>外商投资活动
      </div>
      <div data-final-knowledge="foreign-investment-scene-01-list" style={{position:'absolute',left:900,top:0,width:868,height:220,padding:'14px 20px',border:'5px solid '+COLORS.red,background:COLORS.red+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(58,84),translate:interpolate(frame,[58,84],['240px 0px','0px 0px'],CLAMP)}}>
        <ScrollText size={120} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.red}}>
          <ScrollText size={30} color={COLORS.red}/>负面清单之内
          <span style={{marginLeft:'auto',padding:'5px 14px',background:COLORS.navy,color:COLORS.paper,fontSize:18,fontWeight:900,transform:'rotate(-2deg)'}}>国务院发布或批准发布</span>
        </div>
        <FactRow color={COLORS.red} icon={<DoorClosed size={24} color={COLORS.red}/>} enter={enter(72,94)}><span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>禁止类</span> → <span style={{fontWeight:900,color:COLORS.red}}>不得投资</span></FactRow>
        <FactRow color={COLORS.gold} icon={<Scale size={24} color={COLORS.gold}/>} enter={enter(82,104)}><span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>限制类</span> → 进行投资应当<span style={{fontWeight:900}}>符合负面清单规定的条件</span></FactRow>
      </div>
      <div data-final-knowledge="foreign-investment-scene-01-outside" data-stateful-terminal="investment-listing-travel" style={{position:'absolute',left:900,top:244,width:868,height:180,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(72,98),translate:interpolate(frame,[72,98],['240px 0px','0px 0px'],CLAMP)}}>
        <Stamp size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.teal}}><Stamp size={30} color={COLORS.teal}/>清单之外</div>
        <FactRow color={COLORS.teal} icon={<Stamp size={24} color={COLORS.teal}/>} enter={enter(86,108)}><span style={{fontWeight:900,color:COLORS.red}}>无须审批</span>——向主管部门申请<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>设立登记、登记备案</span>即可</FactRow>
      </div>
      <div data-final-knowledge="foreign-investment-knowledge-1" style={{position:'absolute',left:0,top:64,width:680,height:360,padding:'14px 20px',border:'5px solid '+COLORS.navy,background:COLORS.navy+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(14,40),translate:interpolate(frame,[14,40],['-200px 0px','0px 0px'],CLAMP)}}>
        <Globe size={120} color={COLORS.navy} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.navy}}><Globe size={30} color={COLORS.navy}/>什么是外商投资</div>
        <FactRow color={COLORS.navy} icon={<Flag size={24} color={COLORS.navy}/>} enter={enter(28,50)}>外国投资者（外国的<span style={{fontWeight:900}}>自然人、企业或其他组织</span>）直接或间接在境内投资</FactRow>
        <FactRow color={COLORS.navy} icon={<Building2 size={24} color={COLORS.navy}/>} enter={enter(38,60)}>① 境内设立<span style={{fontWeight:900}}>外商投资企业</span></FactRow>
        <FactRow color={COLORS.navy} icon={<Handshake size={24} color={COLORS.navy}/>} enter={enter(48,70)}>② 取得境内企业的<span style={{fontWeight:900,background:COLORS.navy+'26',padding:'1px 6px'}}>股份、股权、财产份额</span></FactRow>
        <FactRow color={COLORS.navy} icon={<TrendingUp size={24} color={COLORS.navy}/>} enter={enter(58,80)}>③ 境内投资<span style={{fontWeight:900}}>新建项目</span>等</FactRow>
      </div>
      <div style={{position:'absolute',left:0,right:0,top:448,bottom:0,display:'flex',alignItems:'center',gap:18,border:'4px solid '+COLORS.gold,background:COLORS.gold+'66',padding:'12px 24px',opacity:enter(96,122)}}>
        <ScrollText size={34} color={COLORS.ink}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.5}}>口诀：<span style={{fontWeight:900,color:COLORS.teal}}>清单之外登记备案</span>，<span style={{fontWeight:900,color:COLORS.red}}>清单之内审批许可</span>——禁止类不得投资，限制类符合条件</div>
      </div>
    </div>
  </Shell>;
};

export const ForeignInvestment02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const spread=interpolate(frame,[64,110],[0,1],CLAMP);
  return <Shell code="19.2" title="国民待遇：从准入后扩大到准入前">
    <div data-layout="national-treatment-band-2" data-visual-anchor="boundary" data-visual-grammar="treatment-expansion-band,equal-inclusion-list" data-text-treatments="chip,soft-highlight,thin-underline" data-focal-rule="foreign-investment-scene-02-rule" data-focal-channels="contrast,motion,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="foreign-investment-scene-02-definition" style={{position:'absolute',left:0,top:0,width:1768,height:150,padding:'14px 22px',border:'5px solid '+COLORS.navy,background:COLORS.navy+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(10,36)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,fontSize:24,fontWeight:900,color:COLORS.navy}}>
          <Scale size={30} color={COLORS.navy}/>国民待遇：准入阶段给予外国投资者及其投资<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>不低于</span>本国投资者及其投资的待遇
        </div>
        <div style={{fontSize:21,fontWeight:800}}>将国民待遇从<span style={{fontWeight:900,color:COLORS.copper}}>准入后</span>扩大到<span style={{fontWeight:900,color:COLORS.red}}>准入前</span></div>
      </div>
      <div style={{position:'absolute',left:0,top:180,width:1768,height:14}}>
        <div style={{position:'absolute',left:120,top:0,width:1520,height:10,background:COLORS.red,transformOrigin:'left center',transform:'scaleX('+spread+')',opacity:enter(60,80)}}/>
        <div style={{position:'absolute',left:60,top:-8,padding:'5px 14px',background:COLORS.copper,color:COLORS.paper,fontSize:19,fontWeight:900}}>准入后</div>
        <div style={{position:'absolute',left:1560,top:-8,padding:'5px 14px',background:COLORS.red,color:COLORS.paper,fontSize:19,fontWeight:900,opacity:enter(92,112)}}>准入前</div>
      </div>
      <div data-final-knowledge="foreign-investment-scene-02-includes" style={{position:'absolute',left:0,top:230,width:1768,height:250,padding:'14px 22px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(80,106),translate:interpolate(frame,[80,106],['0px 24px','0px 0px'],CLAMP)}}>
        <Users size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.teal}}>包括：</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
          <FactRow color={COLORS.teal} icon={<Scale size={24} color={COLORS.teal}/>} enter={enter(94,116)}>① 平等适用<span style={{fontWeight:900}}>各项政策</span></FactRow>
          <FactRow color={COLORS.teal} icon={<Vote size={24} color={COLORS.teal}/>} enter={enter(102,124)}>② 平等参与<span style={{fontWeight:900}}>标准制定</span>工作</FactRow>
          <FactRow color={COLORS.teal} icon={<ShoppingCart size={24} color={COLORS.teal}/>} enter={enter(110,132)}>③ 公平参与<span style={{fontWeight:900}}>政府采购</span></FactRow>
          <FactRow color={COLORS.teal} icon={<TrendingUp size={24} color={COLORS.teal}/>} enter={enter(118,140)}>④ 通过公开发行<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>股票、债券等证券</span>进行融资等</FactRow>
        </div>
      </div>
      <div data-final-knowledge="foreign-investment-knowledge-2" style={{position:'absolute',left:0,top:504,width:1768,height:130,padding:'12px 22px',border:'5px solid '+COLORS.red,background:COLORS.red+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(112,138)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:23,fontWeight:900,color:COLORS.red}}><Ban size={28} color={COLORS.red}/>判例：清单之外以股权转让入股——国家应给予“最惠国待遇”？</div>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(126,148)}><span style={{fontWeight:900,color:COLORS.red}}>(×)</span> 负面清单之外给予的是<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>国民待遇</span>，而非最惠国待遇</FactRow>
      </div>
      <div style={{position:'absolute',left:0,right:0,top:654,bottom:0,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.gold,background:COLORS.paper,padding:'12px 24px',opacity:enter(130,156)}}>
        <Scale size={32} color={COLORS.ink}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.5}}>待遇关键词：<span style={{fontWeight:900,color:COLORS.red}}>不低于</span>——政策、标准、采购、融资四个平等</div>
      </div>
    </div>
  </Shell>;
};

export const ForeignInvestment03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="19.3" title="投资保护 与 两道审查">
    <div data-layout="protection-review-split-3" data-visual-anchor="role-pair" data-visual-grammar="protection-redline-list,final-review-lock" data-text-treatments="chip,external-negation,soft-highlight" data-focal-rule="foreign-investment-scene-03-rule" data-focal-channels="contrast,icon,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="foreign-investment-scene-03-protection" style={{position:'absolute',left:0,top:0,width:864,height:520,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <ShieldCheck size={120} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.teal}}><ShieldCheck size={30} color={COLORS.teal}/>投资保护五件套</div>
        <FactRow color={COLORS.teal} icon={<Landmark size={24} color={COLORS.teal}/>} enter={enter(26,48)}>① <span style={{fontWeight:900}}>审慎征收</span>：不为公共利益、法定程序不征收征用；征收须<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>及时公平合理补偿</span>——疫情征用仓库建方舱 <span style={{fontWeight:900}}>(√)</span></FactRow>
        <FactRow color={COLORS.teal} icon={<Coins size={24} color={COLORS.teal}/>} enter={enter(36,58)}>② <span style={{fontWeight:900}}>资金自由</span>：出资、利润、资本收益可自由<span style={{fontWeight:900}}>汇入、汇出</span></FactRow>
        <FactRow color={COLORS.teal} icon={<Lightbulb size={24} color={COLORS.teal}/>} enter={enter(46,68)}>③ <span style={{fontWeight:900}}>知产保护</span>：行政机关对知悉的商业秘密<span style={{fontWeight:900}}>保密</span>，<span style={{fontWeight:900,color:COLORS.red}}>不得强制转让技术</span></FactRow>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(56,78)}>④ <span style={{fontWeight:900}}>权益保障红线</span>：无法律行政法规依据，<span style={{fontWeight:900,color:COLORS.red}}>不得减损权益、增加义务</span>，不得设准入退出条件、不得干预正常经营</FactRow>
        <FactRow color={COLORS.teal} icon={<FileSignature size={24} color={COLORS.teal}/>} enter={enter(66,88)}>⑤ <span style={{fontWeight:900}}>守信重诺</span>：政府应履行<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>政策承诺与依法订立的各类合同</span></FactRow>
      </div>
      <div data-final-knowledge="foreign-investment-scene-03-concentration" style={{position:'absolute',left:904,top:0,width:864,height:240,padding:'14px 20px',border:'5px solid '+COLORS.navy,background:COLORS.navy+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <Gavel size={110} color={COLORS.navy} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.navy}}><Gavel size={30} color={COLORS.navy}/>经营者集中审查</div>
        <FactRow color={COLORS.navy} icon={<Gavel size={24} color={COLORS.navy}/>} enter={enter(40,62)}>并购境内企业或参与经营者集中——依照<span style={{fontWeight:900,background:COLORS.navy+'26',padding:'1px 6px'}}>《反垄断法》</span>接受审查</FactRow>
      </div>
      <div data-final-knowledge="foreign-investment-scene-03-security" style={{position:'absolute',left:904,top:264,width:864,height:256,padding:'14px 20px',border:'5px solid '+COLORS.red,background:COLORS.red+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(40,66),translate:interpolate(frame,[40,66],['200px 0px','0px 0px'],CLAMP)}}>
        <Lock size={110} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.red}}><Lock size={30} color={COLORS.red}/>安全审查——一锤定音</div>
        <FactRow color={COLORS.red} icon={<Lock size={24} color={COLORS.red}/>} enter={enter(54,76)}>影响或可能影响<span style={{fontWeight:900}}>国家安全</span>的外商投资进行安全审查</FactRow>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(64,86)}>审查决定为<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>最终决定</span>：<span style={{fontWeight:900,color:COLORS.red}}>不可诉</span>——不能行政复议、行政诉讼</FactRow>
      </div>
      <div data-final-knowledge="foreign-investment-knowledge-3" style={{position:'absolute',left:0,right:0,top:544,bottom:0,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.gold,background:COLORS.gold+'66',padding:'12px 24px',opacity:enter(94,120)}}>
        <Stamp size={32} color={COLORS.ink}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.5}}>保护是<span style={{fontWeight:900,color:COLORS.teal }}>平等待遇</span>不是豁免——公共利益仍可<span style={{fontWeight:900,color:COLORS.red }}>依法征收征用</span>；安全审查<span style={{fontWeight:900,color:COLORS.red }}>终局不可诉</span></div>
      </div>
    </div>
  </Shell>;
};

export const ForeignInvestment=()=> <AbsoluteFill>
  <TimelineSequence name="01-foreign-investment-scene-01" start={SCENES['foreign-investment-scene-01'].start} duration={SCENES['foreign-investment-scene-01'].duration}><ForeignInvestment01Scene/></TimelineSequence>
  <TimelineSequence name="02-foreign-investment-scene-02" start={SCENES['foreign-investment-scene-02'].start} duration={SCENES['foreign-investment-scene-02'].duration}><ForeignInvestment02Scene/></TimelineSequence>
  <TimelineSequence name="03-foreign-investment-scene-03" start={SCENES['foreign-investment-scene-03'].start} duration={SCENES['foreign-investment-scene-03'].duration}><ForeignInvestment03Scene/></TimelineSequence>
</AbsoluteFill>;
