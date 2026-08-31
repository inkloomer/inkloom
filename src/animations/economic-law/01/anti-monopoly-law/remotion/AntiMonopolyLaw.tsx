import type {ReactNode} from 'react';
import {Scale, Ban, Check, Landmark, Users, TrendingUp, Gavel, Split, Percent, Coins, Eye, FileText, Megaphone, Undo2, AlertTriangle, GitBranch, Stamp, BadgeCheck, HeartHandshake, Building2, ScrollText, Hourglass} from 'lucide-react';
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

export const AntiMonopolyLaw01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="经1.1" title="反垄断法概述：适用与审查">
    <div data-layout="scope-review-board-1" data-visual-anchor="comparison-axis" data-visual-grammar="scope-inout-split,review-pipeline" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="anti-monopoly-law-scene-01-rule" data-focal-channels="contrast,icon,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="anti-monopoly-law-scene-01-scope" style={{position:'absolute',left:0,top:0,width:864,height:300,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <Scale size={120} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.teal}}><Scale size={30} color={COLORS.teal}/>适用范围</div>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(26,48)}><span style={{fontWeight:900 }}>适用</span>：境内经济活动中的垄断行为；境外垄断行为<span style={{fontWeight:900 }}>对境内市场竞争产生排除、限制影响</span>的</FactRow>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(36,58)}><span style={{fontWeight:900,color:COLORS.red }}>不适用</span>：依法<span style={{fontWeight:900 }}>行使知识产权</span>的行为；农业生产者及农村经济组织的<span style={{fontWeight:900 }}>联合或协同行为</span></FactRow>
        <FactRow color={COLORS.red} icon={<AlertTriangle size={24} color={COLORS.red}/>} enter={enter(46,68)}>但<span style={{fontWeight:900,color:COLORS.red }}>滥用知识产权</span>排除、限制竞争的，<span style={{fontWeight:900 }}>适用</span>反垄断法——“行使即不适用” <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
      </div>
      <div data-final-knowledge="anti-monopoly-law-scene-01-review" style={{position:'absolute',left:904,top:0,width:864,height:300,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <ScrollText size={120} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><ScrollText size={30} color={COLORS.copper}/>公平竞争审查制度</div>
        <FactRow color={COLORS.copper} icon={<FileText size={24} color={COLORS.copper}/>} enter={enter(40,62)}><span style={{fontWeight:900 }}>对象</span>：涉及经营者经济活动的法规、规章、规范性文件、<span style={{fontWeight:900 }}>具体政策措施</span>——充电桩补贴办法 <span style={{fontWeight:900 }}>(√)</span></FactRow>
        <FactRow color={COLORS.copper} icon={<Eye size={24} color={COLORS.copper}/>} enter={enter(50,72)}><span style={{fontWeight:900 }}>机制</span>：<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>自我审查</span>为主 + 听取利害关系人意见；涉公众利益的听公众意见</FactRow>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(60,82)}><span style={{fontWeight:900 }}>结果</span>：未经审查或违反标准 → <span style={{fontWeight:900,color:COLORS.red }}>不得出台</span></FactRow>
      </div>
      <div data-final-knowledge="anti-monopoly-law-knowledge-1" style={{position:'absolute',left:0,top:324,width:1768,height:200,padding:'14px 22px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(64,90),translate:interpolate(frame,[64,90],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><TrendingUp size={30} color={COLORS.copper}/>数字经济反垄断原则</div>
        <FactRow color={COLORS.copper} icon={<GitBranch size={24} color={COLORS.copper}/>} enter={enter(78,100)}>经营者<span style={{fontWeight:900 }}>不得利用数据和算法、技术、资本优势以及平台规则</span>，从事反垄断法<span style={{fontWeight:900,color:COLORS.red }}>禁止</span>的垄断行为</FactRow>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(88,110)}>农业联合协同行为属于垄断行为？<span style={{fontWeight:900,color:COLORS.red }}>(×)</span>——农产品生产经营中的联合协同<span style={{fontWeight:900,color:COLORS.teal }}>不适用</span>反垄断法</FactRow>
      </div>
    </div>
  </Shell>;
};

export const AntiMonopolyLaw02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const pactX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="经1.2" title="垄断协议：类型、豁免与责任">
    <div data-layout="agreement-exemption-board-2" data-visual-anchor="comparison-axis" data-visual-grammar="agreement-type-triad,exemption-gate" data-text-treatments="chip,stamp,external-negation" data-focal-rule="anti-monopoly-law-scene-02-rule" data-focal-channels="contrast,connector,motion" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="anti-monopoly-law-scene-02-types" style={{position:'absolute',left:0,top:0,width:864,height:330,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <Users size={120} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Users size={30} color={COLORS.copper}/>垄断协议类型</div>
        <FactRow color={COLORS.copper} icon={<Split size={24} color={COLORS.copper}/>} enter={enter(26,48)}><span style={{fontWeight:900 }}>横向</span>（同业竞争者）：固定价格、限制数量、限制新技术、分割市场、联合抵制——旅游协会统一定价 <span style={{fontWeight:900 }}>(√)</span></FactRow>
        <FactRow color={COLORS.copper} icon={<GitBranch size={24} color={COLORS.copper}/>} enter={enter(36,58)}><span style={{fontWeight:900 }}>纵向</span>（上下游）：固定价格、限定最低价格</FactRow>
        <FactRow color={COLORS.red} icon={<GitBranch size={24} color={COLORS.red}/>} enter={enter(46,68)}><span style={{fontWeight:900 }}>轴辐协议</span>：<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>组织型</span>（组织他人达成）+ <span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>帮助型</span>（提供实质性帮助）</FactRow>
      </div>
      <div data-final-knowledge="anti-monopoly-law-scene-02-exempt" style={{position:'absolute',left:904,top:0,width:864,height:330,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <BadgeCheck size={120} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.teal}}><BadgeCheck size={30} color={COLORS.teal}/>豁免情形（目的正当）</div>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(40,62)}><span style={{fontWeight:900 }}>创新提效类</span>：改进技术、研发新产品；提高质量、降低成本、增进效率</FactRow>
        <FactRow color={COLORS.teal} icon={<HeartHandshake size={24} color={COLORS.teal}/>} enter={enter(50,72)}><span style={{fontWeight:900 }}>竞争公益类</span>：增强中小经营者竞争力；节能环保、救灾救助</FactRow>
        <FactRow color={COLORS.gold} icon={<TrendingUp size={24} color={COLORS.gold}/>} enter={enter(60,82)}><span style={{fontWeight:900 }}>不景气类</span>：缓解销售量严重下降或生产明显过剩；<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>对外贸易正当行为直接豁免</span></FactRow>
        <FactRow color={COLORS.red} icon={<AlertTriangle size={24} color={COLORS.red}/>} enter={enter(70,92)}>还需证明：<span style={{fontWeight:900 }}>不严重限制竞争 + 消费者分享利益</span>——有利于提高质量就不构成？<span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
      </div>
      <div data-final-knowledge="anti-monopoly-law-knowledge-2" style={{position:'absolute',left:0,top:354,width:1768,height:340,padding:'14px 22px',border:'5px solid '+COLORS.red,background:COLORS.red+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(66,92),translate:interpolate(frame,[66,92],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.red}}><Gavel size={30} color={COLORS.red}/>法律责任——达成即可处罚</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
          <FactRow color={COLORS.red} icon={<Building2 size={24} color={COLORS.red}/>} enter={enter(80,102)}><span style={{fontWeight:900 }}>经营者</span>：达成<span style={{fontWeight:900,color:COLORS.red }}>或</span>实施垄断协议<span style={{fontWeight:900,color:COLORS.red }}>都要处罚</span>；主动报告并提供重要证据可<span style={{fontWeight:900,color:COLORS.teal }}>酌情减轻或免除</span>——举报即应免除 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
          <FactRow color={COLORS.copper} icon={<Coins size={24} color={COLORS.copper}/>} enter={enter(88,110)}><span style={{fontWeight:900 }}>个人</span>：负有个人责任的，可处 <span style={{fontWeight:900 }}>100万元</span>以下罚款</FactRow>
          <FactRow color={COLORS.copper} icon={<Users size={24} color={COLORS.copper}/>} enter={enter(96,118)}><span style={{fontWeight:900 }}>行业协会</span>：责令改正，可处 <span style={{fontWeight:900 }}>300万元</span>以下罚款</FactRow>
          <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(104,126)}>撤销登记由<span style={{fontWeight:900 }}>社会团体登记管理机关</span>（民政部门）作出——执法机构直接撤销 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const AntiMonopolyLaw03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const coinX=interpolate(frame,[56,116,132,190],[140,560,560,980],CLAMP);
  return <Shell code="经1.3" title="市场支配地位：推定与滥用">
    <div data-layout="dominance-presumption-stairs-3" data-visual-anchor="flow-path" data-visual-grammar="presumption-stairs,abuse-band" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="anti-monopoly-law-scene-03-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div style={{position:'absolute',left:120,top:186,width:760,height:6,background:COLORS.ink,transformOrigin:'left center',transform:'scaleX('+interpolate(frame,[30,66],[0,1],CLAMP)+')'}}/>
      <div data-stateful-source="dominance-share-travel" style={{position:'absolute',left:coinX,top:118,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.copper,fontSize:20,fontWeight:900,color:COLORS.copper,opacity:enter(34,54),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Percent size={24} color={COLORS.copper}/>市场份额
      </div>
      <div data-final-knowledge="anti-monopoly-law-scene-03-stairs" style={{position:'absolute',left:80,top:208,width:1000,height:220,padding:'12px 18px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(48,72)}}>
        <div style={{fontSize:22,fontWeight:900,color:COLORS.copper}}><TrendingUp size={26} color={COLORS.copper}/>推定阶梯（其中份额不足1/10的不推定）</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:10}}>
          <div style={{padding:'9px 12px',background:COLORS.paper,border:'3px solid '+COLORS.copper,fontSize:20,fontWeight:900,color:COLORS.copper}}>1个 ≥<span style={{fontWeight:900 }}>1/2</span></div>
          <div style={{padding:'9px 12px',background:COLORS.paper,border:'3px solid '+COLORS.copper,fontSize:20,fontWeight:900,color:COLORS.copper}}>2个合计 ≥<span style={{fontWeight:900 }}>2/3</span></div>
          <div style={{padding:'9px 12px',background:COLORS.paper,border:'3px solid '+COLORS.copper,fontSize:20,fontWeight:900,color:COLORS.copper}}>3个合计 ≥<span style={{fontWeight:900 }}>3/4</span></div>
        </div>
        <FactRow color={COLORS.red} icon={<AlertTriangle size={24} color={COLORS.red}/>} enter={enter(64,86)}>A、B合计2/3、A不足1/10 → 不推定A <span style={{fontWeight:900 }}>(√)</span>；A、B合计3/4中一足一缺 → 足者<span style={{fontWeight:900,color:COLORS.red }}>仍推定</span></FactRow>
      </div>
      <div data-final-knowledge="anti-monopoly-law-scene-03-abuse" style={{position:'absolute',left:1130,top:60,width:638,height:368,padding:'14px 20px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(58,84),translate:interpolate(frame,[58,84],['220px 0px','0px 0px'],CLAMP)}}>
        <Gavel size={110} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.red}}><Gavel size={28} color={COLORS.red}/>滥用行为类型</div>
        <FactRow color={COLORS.red} icon={<Coins size={24} color={COLORS.red}/>} enter={enter(72,94)}><span style={{fontWeight:900 }}>价格类</span>：垄断价格、低价倾销；<span style={{fontWeight:900 }}>交易类</span>：拒绝交易、限定交易、搭售——外卖平台“二选一” <span style={{fontWeight:900 }}>(√)</span></FactRow>
        <FactRow color={COLORS.red} icon={<Users size={24} color={COLORS.red}/>} enter={enter(82,104)}><span style={{fontWeight:900 }}>差别待遇</span>：条件相同的交易对象不同待遇 + <span style={{fontWeight:900 }}>兜底</span></FactRow>
        <FactRow color={COLORS.gold} icon={<Stamp size={24} color={COLORS.gold}/>} enter={enter(92,114)}><span style={{fontWeight:900 }}>构成要件</span>：市场支配地位 + 滥用；仅具支配地位<span style={{fontWeight:900,color:COLORS.red }}>不予处罚</span></FactRow>
      </div>
      <div data-final-knowledge="anti-monopoly-law-knowledge-3" style={{position:'absolute',left:0,top:452,width:1768,height:240,padding:'14px 22px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(88,114),translate:interpolate(frame,[88,114],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Eye size={30} color={COLORS.copper}/>认定因素（综合）与解题大招</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
          <FactRow color={COLORS.copper} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(102,124)}>市场份额与竞争状况 / 控制销售与<span style={{fontWeight:900 }}>原材料采购市场</span>的能力 / 财力技术 / <span style={{fontWeight:900 }}>依赖程度</span> / 进入相关市场的难易</FactRow>
          <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(110,132)}><span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>独家经营 ≠ 具有市场支配地位</span>——被推定者能证明不具有的，不应当认定</FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const AntiMonopolyLaw04Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const fileX=interpolate(frame,[52,110],[300,900],CLAMP);
  return <Shell code="经1.4" title="经营者集中 与 行政垄断">
    <div data-layout="concentration-adminism-split-4" data-visual-anchor="role-pair" data-visual-grammar="concentration-review-fork,adminism-difference-band" data-text-treatments="chip,stamp,external-negation" data-focal-rule="anti-monopoly-law-scene-04-rule" data-focal-channels="contrast,motion,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="anti-monopoly-law-scene-04-concentration" style={{position:'absolute',left:0,top:0,width:864,height:400,padding:'14px 20px',border:'5px solid '+COLORS.indigo,background:COLORS.indigo+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <GitBranch size={120} color={COLORS.indigo} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.indigo}}><GitBranch size={30} color={COLORS.indigo}/>经营者集中</div>
        <FactRow color={COLORS.indigo} icon={<Check size={24} color={COLORS.indigo}/>} enter={enter(26,48)}><span style={{fontWeight:900 }}>事先申报</span>，<span style={{fontWeight:900,color:COLORS.red }}>不得事后补报</span>；未达标准但有排除限制竞争效果的也可<span style={{fontWeight:900 }}>要求申报</span></FactRow>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(36,58)}><span style={{fontWeight:900 }}>豁免申报</span>：母子公司、兄弟公司整合——甲乙丙集团内合并 <span style={{fontWeight:900,color:COLORS.red }}>(×应申报)</span></FactRow>
        <FactRow color={COLORS.copper} icon={<Split size={24} color={COLORS.copper}/>} enter={enter(46,68)}><span style={{fontWeight:900 }}>审查决定三种</span>：不予禁止 / 不予禁止+<span style={{fontWeight:900 }}>附加限制性条件</span> / <span style={{fontWeight:900,color:COLORS.red }}>禁止</span>——决定应当<span style={{fontWeight:900 }}>公布</span></FactRow>
        <FactRow color={COLORS.red} icon={<AlertTriangle size={24} color={COLORS.red}/>} enter={enter(56,78)}>违法实施集中<span style={{fontWeight:900,color:COLORS.red }}>都要处罚</span>——即使无排除限制竞争效果 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
      </div>
      <div data-final-knowledge="anti-monopoly-law-scene-04-adminism" style={{position:'absolute',left:904,top:0,width:864,height:400,padding:'14px 20px',border:'5px solid '+COLORS.red,background:COLORS.red+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <Landmark size={120} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.red}}><Landmark size={30} color={COLORS.red}/>行政垄断（滥用行政权力）</div>
        <FactRow color={COLORS.copper} icon={<Ban size={24} color={COLORS.copper}/>} enter={enter(40,62)}><span style={{fontWeight:900 }}>强制类</span>：强制交易、强制从事垄断行为；<span style={{fontWeight:900 }}>限制类</span>：限制商品地区间流通、限制招投标</FactRow>
        <FactRow color={COLORS.copper} icon={<Users size={24} color={COLORS.copper}/>} enter={enter(50,72)}><span style={{fontWeight:900 }}>歧视类</span>：不平等待遇、限制外地投资设点；<span style={{fontWeight:900 }}>制定规定</span>：网约车必须装指定终端 <span style={{fontWeight:900 }}>(√)</span></FactRow>
        <FactRow color={COLORS.gold} icon={<Undo2 size={24} color={COLORS.gold}/>} enter={enter(60,82)}><span style={{fontWeight:900 }}>责任</span>：<span style={{fontWeight:900 }}>上级机关</span>责令改正+处分；执法机构只能<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>提出建议</span>——<span style={{fontWeight:900,color:COLORS.red }}>反垄断执法机构无处罚权</span></FactRow>
      </div>
      <div data-final-knowledge="anti-monopoly-law-knowledge-4" data-stateful-source="concentration-filing-travel" style={{position:'absolute',left:0,top:424,width:1768,height:270,padding:'14px 22px',border:'5px dashed '+COLORS.gold,background:COLORS.teal+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(64,90),translate:interpolate(frame,[64,90],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:23,fontWeight:900}}><AlertTriangle size={28} color={COLORS.red}/>判例：指定办公文具与商品混凝土</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(78,100)}>市教育局发文只能用<span style={{fontWeight:900 }}>晓光牌文具</span> → 限定交易，<span style={{fontWeight:900,color:COLORS.red }}>行政垄断</span>；执法机构直接处罚处分？<span style={{fontWeight:900,color:COLORS.red }}>(×)</span> 只能建议上级处理</FactRow>
          <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(88,110)}>县政府规定只能用<span style={{fontWeight:900 }}>预拌商品混凝土</span>（未限定特定经营者）→ <span style={{fontWeight:900,color:COLORS.teal }}>不属于行政垄断</span> <span style={{fontWeight:900 }}>(×)</span></FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const AntiMonopolyLaw05Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const probeX=interpolate(frame,[52,112],[300,1160],CLAMP);
  return <Shell code="经1.5" title="调查程序 与 救济">
    <div data-layout="investigation-relief-track-5" data-visual-anchor="flow-path" data-visual-grammar="probe-state-track,relief-channel-pair" data-text-treatments="chip,soft-highlight,thin-underline" data-focal-rule="anti-monopoly-law-scene-05-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div style={{position:'absolute',left:110,top:186,width:1570,height:6,background:COLORS.ink,transformOrigin:'left center',transform:'scaleX('+interpolate(frame,[30,66],[0,1],CLAMP)+')'}}/>
      <div data-stateful-source="investigation-state-travel" style={{position:'absolute',left:probeX,top:124,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.navy,fontSize:20,fontWeight:900,color:COLORS.navy,opacity:enter(34,54),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Eye size={24} color={COLORS.navy}/>调查状态
      </div>
      <div data-final-knowledge="anti-monopoly-law-scene-05-track" style={{position:'absolute',left:0,top:208,width:1768,height:200,display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr',gap:14}}>
        <div style={{padding:'12px 16px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:6,opacity:enter(48,72)}}>
          <div style={{fontSize:22,fontWeight:900,color:COLORS.copper}}><Hourglass size={26} color={COLORS.copper}/>中止调查</div>
          <div style={{fontSize:19,fontWeight:800,lineHeight:1.4}}>经营者<span style={{fontWeight:900 }}>承诺消除</span>行为后果</div>
        </div>
        <div style={{padding:'12px 16px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:6,opacity:enter(56,80)}}>
          <div style={{fontSize:22,fontWeight:900,color:COLORS.teal}}><Check size={26} color={COLORS.teal}/>终止调查</div>
          <div style={{fontSize:19,fontWeight:800,lineHeight:1.4}}>承诺后<span style={{fontWeight:900 }}>履行完毕</span>才终止——“承诺即终止” <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></div>
        </div>
        <div style={{padding:'12px 16px',border:'5px dashed '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:6,opacity:enter(64,88)}}>
          <div style={{fontSize:22,fontWeight:900,color:COLORS.red}}><Undo2 size={26} color={COLORS.red}/>恢复调查</div>
          <div style={{fontSize:19,fontWeight:800,lineHeight:1.4}}>未履行承诺 / 事实<span style={{fontWeight:900 }}>重大变化</span> / 信息不完整不真实</div>
        </div>
        <div style={{padding:'12px 16px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:6,opacity:enter(72,96)}}>
          <div style={{fontSize:22,fontWeight:900,color:COLORS.copper}}><Megaphone size={26} color={COLORS.copper}/>约谈</div>
          <div style={{fontSize:19,fontWeight:800,lineHeight:1.4}}>对<span style={{fontWeight:900 }}>法定代表人或负责人</span>约谈，要求提出改进措施</div>
        </div>
      </div>
      <div data-final-knowledge="anti-monopoly-law-knowledge-5" data-stateful-terminal="investigation-state-travel" style={{position:'absolute',left:0,top:432,width:1768,height:260,padding:'14px 22px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(84,110),translate:interpolate(frame,[84,110],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Scale size={30} color={COLORS.copper}/>机构与救济双轨</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
          <FactRow color={COLORS.copper} icon={<Landmark size={24} color={COLORS.copper}/>} enter={enter(98,120)}><span style={{fontWeight:900 }}>反垄断委员会（虚）</span>组织协调指导；<span style={{fontWeight:900 }}>执法机构（实）</span>统一执法，<span style={{fontWeight:900 }}>最低授权省一级</span>——授权市级 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
          <FactRow color={COLORS.copper} icon={<Gavel size={24} color={COLORS.copper}/>} enter={enter(106,128)}><span style={{fontWeight:900 }}>民事诉讼</span>：可<span style={{fontWeight:900,color:COLORS.teal }}>直接起诉</span>，不以执法认定为前提；仅请求确认垄断不索赔的<span style={{fontWeight:900,color:COLORS.red }}>不予受理</span>；<span style={{fontWeight:900 }}>仲裁协议不影响法院受理</span></FactRow>
          <FactRow color={COLORS.red} icon={<Users size={24} color={COLORS.red}/>} enter={enter(114,136)}><span style={{fontWeight:900 }}>公益诉讼</span>：<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>设区的市级以上人民检察院</span>对损害社会公共利益的垄断行为提起</FactRow>
          <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(122,144)}>承诺消除后果 → 执法机构可决定<span style={{fontWeight:900,color:COLORS.red }}>中止</span>而非终止调查 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const AntiMonopolyLaw=()=> <AbsoluteFill>
  <TimelineSequence name="01-anti-monopoly-law-scene-01" start={SCENES['anti-monopoly-law-scene-01'].start} duration={SCENES['anti-monopoly-law-scene-01'].duration}><AntiMonopolyLaw01Scene/></TimelineSequence>
  <TimelineSequence name="02-anti-monopoly-law-scene-02" start={SCENES['anti-monopoly-law-scene-02'].start} duration={SCENES['anti-monopoly-law-scene-02'].duration}><AntiMonopolyLaw02Scene/></TimelineSequence>
  <TimelineSequence name="03-anti-monopoly-law-scene-03" start={SCENES['anti-monopoly-law-scene-03'].start} duration={SCENES['anti-monopoly-law-scene-03'].duration}><AntiMonopolyLaw03Scene/></TimelineSequence>
  <TimelineSequence name="04-anti-monopoly-law-scene-04" start={SCENES['anti-monopoly-law-scene-04'].start} duration={SCENES['anti-monopoly-law-scene-04'].duration}><AntiMonopolyLaw04Scene/></TimelineSequence>
  <TimelineSequence name="05-anti-monopoly-law-scene-05" start={SCENES['anti-monopoly-law-scene-05'].start} duration={SCENES['anti-monopoly-law-scene-05'].duration}><AntiMonopolyLaw05Scene/></TimelineSequence>
</AbsoluteFill>;
