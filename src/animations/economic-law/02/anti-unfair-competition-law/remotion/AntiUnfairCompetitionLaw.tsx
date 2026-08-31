import type {ReactNode} from 'react';
import {Scale, Ban, Check, Users, Coins, AlertTriangle, Megaphone, Eye, Stamp, GitBranch, Split, Shield, Handshake, FileText, Landmark, Undo2, BadgeCheck, Search, Store} from 'lucide-react';
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

export const AntiUnfairCompetitionLaw01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const copyX=interpolate(frame,[52,112],[240,1060],CLAMP);
  return <Shell code="经2.1" title="商业混淆行为">
    <div data-layout="confusion-copylane-1" data-visual-anchor="flow-path" data-visual-grammar="mark-copy-lane,three-actor-band" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="anti-unfair-competition-law-scene-01-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="anti-unfair-competition-law-scene-01-marks" style={{position:'absolute',left:0,top:0,width:864,height:330,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <Store size={120} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Store size={30} color={COLORS.copper}/>擅自使用他人有一定影响的——</div>
        <FactRow color={COLORS.copper} icon={<Search size={24} color={COLORS.copper}/>} enter={enter(26,48)}><span style={{fontWeight:900 }}>标识与名称</span>：商品名称、包装、装潢；企业名称、姓名</FactRow>
        <FactRow color={COLORS.copper} icon={<GitBranch size={24} color={COLORS.copper}/>} enter={enter(36,58)}><span style={{fontWeight:900 }}>网络载体</span>：域名主体、网站名称、网页、<span style={{fontWeight:900 }}>新媒体账号名称</span>、应用程序名称或图标</FactRow>
        <FactRow color={COLORS.red} icon={<AlertTriangle size={24} color={COLORS.red}/>} enter={enter(46,68)}><span style={{fontWeight:900 }}>字号与关键词</span>：注册商标、未注册驰名商标作字号；商品名等设为<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>搜索关键词</span></FactRow>
      </div>
      <div data-final-knowledge="anti-unfair-competition-law-scene-01-effect" style={{position:'absolute',left:904,top:0,width:864,height:330,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <Eye size={120} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.teal}}><Eye size={30} color={COLORS.teal}/>混淆后果</div>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(40,62)}>引人<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>误认为是他人商品</span>或与他人存在<span style={{fontWeight:900 }}>特定联系</span></FactRow>
        <FactRow color={COLORS.gold} icon={<Users size={24} color={COLORS.gold}/>} enter={enter(50,72)}>判断标准：<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>一般消费者</span>——长期消费者能辨别 <span style={{fontWeight:900,color:COLORS.red }}>仍是混淆 (×)</span></FactRow>
      </div>
      <div data-final-knowledge="anti-unfair-competition-law-knowledge-1" data-stateful-source="confusion-actor-travel" style={{position:'absolute',left:0,top:354,width:1768,height:340,padding:'14px 22px',border:'5px dashed '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(64,90),translate:interpolate(frame,[64,90],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Split size={30} color={COLORS.copper}/>三种主体都可入罪</div>
        <div style={{display:'flex',alignItems:'center',gap:14,opacity:enter(78,100)}}>
          <Chip color={COLORS.copper} icon={<Store size={24} color={COLORS.copper}/>} text="实施混淆的经营行为"/>
          <div style={{fontSize:24,fontWeight:900,color:COLORS.copper}}>→</div>
          <Chip color={COLORS.copper} icon={<Store size={24} color={COLORS.copper}/>} text="销售带混淆标识的商品"/>
          <div style={{fontSize:24,fontWeight:900,color:COLORS.copper}}>→</div>
          <div data-stateful-terminal="confusion-actor-travel" style={{padding:'7px 13px',background:COLORS.paper,border:'3px solid '+COLORS.red,fontSize:20,fontWeight:900,color:COLORS.red}}>帮助他人实施混淆</div>
        </div>
        <FactRow color={COLORS.red} icon={<AlertTriangle size={24} color={COLORS.red}/>} enter={enter(96,118)}>甲酒厂摹仿乙知名白酒包装——长期消费者留意能辨别 ≠ 不构成混淆：仍以<span style={{fontWeight:900 }}>一般消费者</span>衡量，<span style={{fontWeight:900,color:COLORS.red }}>构成混淆 (×)</span></FactRow>
      </div>
    </div>
  </Shell>;
};

export const AntiUnfairCompetitionLaw02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const bribeX=interpolate(frame,[56,114],[300,1160],CLAMP);
  return <Shell code="经2.2" title="虚假宣传 与 商业贿赂">
    <div data-layout="hype-bribe-split-2" data-visual-anchor="role-pair" data-visual-grammar="hype-band,bribe-gate" data-text-treatments="chip,external-negation,soft-highlight" data-focal-rule="anti-unfair-competition-law-scene-02-rule" data-focal-channels="contrast,motion,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="anti-unfair-competition-law-scene-02-hype" style={{position:'absolute',left:0,top:0,width:864,height:400,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <Megaphone size={120} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Megaphone size={30} color={COLORS.copper}/>虚假宣传——虚假说自己“好”</div>
        <FactRow color={COLORS.copper} icon={<Megaphone size={24} color={COLORS.copper}/>} enter={enter(26,48)}>对<span style={{fontWeight:900 }}>性能、功能、质量、销售状况、用户评价、曾获荣誉</span>作虚假或引人误解的商业宣传</FactRow>
        <FactRow color={COLORS.red} icon={<Users size={24} color={COLORS.red}/>} enter={enter(36,58)}>组织<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>虚假交易、虚假评价</span>帮助他人宣传——雇人排队抢购造火爆假象 <span style={{fontWeight:900,color:COLORS.red }}>(×正当营销)</span></FactRow>
      </div>
      <div data-final-knowledge="anti-unfair-competition-law-scene-02-bribe" style={{position:'absolute',left:904,top:0,width:864,height:400,padding:'14px 20px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <Coins size={120} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.red}}><Coins size={30} color={COLORS.red}/>商业贿赂——暗中给予</div>
        <FactRow color={COLORS.red} icon={<Coins size={24} color={COLORS.red}/>} enter={enter(40,62)}>为谋取<span style={{fontWeight:900 }}>交易机会或竞争优势</span>，暗中给予交易对方有关人员或<span style={{fontWeight:900 }}>其他能影响交易的人员</span>财物或其他好处</FactRow>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(50,72)}><span style={{fontWeight:900 }}>除外</span>：<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>明示 + 双方均如实入账</span> → 不构成商业贿赂——年度推广支持费入账 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
      </div>
      <div data-final-knowledge="anti-unfair-competition-law-knowledge-2" style={{position:'absolute',left:0,top:424,width:1768,height:270,padding:'14px 22px',border:'5px dashed '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(64,90),translate:interpolate(frame,[64,90],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Scale size={30} color={COLORS.copper}/>解题大招：好与坏的分辨线</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.copper} icon={<Megaphone size={24} color={COLORS.copper}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>虚假宣传</span>＝虚假地说<span style={{fontWeight:900,color:COLORS.teal }}>自己“好”</span>——对象：自己的商品</FactRow>
          <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(88,110)}><span style={{fontWeight:900 }}>诋毁商誉</span>＝虚假地说<span style={{fontWeight:900,color:COLORS.red }}>别人“不好”</span>——对象：企业或整个行业</FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const AntiUnfairCompetitionLaw03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const keyX=interpolate(frame,[56,116],[240,1000],CLAMP);
  return <Shell code="经2.3" title="商业秘密 与 诋毁商誉">
    <div data-layout="secret-defame-split-3" data-visual-anchor="boundary" data-visual-grammar="secret-definition-gate,reverse-engineering-branch" data-text-treatments="chip,external-negation,soft-highlight" data-focal-rule="anti-unfair-competition-law-scene-03-rule" data-focal-channels="contrast,connector,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="anti-unfair-competition-law-scene-03-secret" style={{position:'absolute',left:0,top:0,width:864,height:340,padding:'14px 20px',border:'5px solid '+COLORS.indigo,background:COLORS.indigo+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <Shield size={120} color={COLORS.indigo} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.indigo}}><Shield size={30} color={COLORS.indigo}/>商业秘密三要件</div>
        <FactRow color={COLORS.indigo} icon={<Check size={24} color={COLORS.indigo}/>} enter={enter(26,48)}><span style={{fontWeight:900,background:COLORS.indigo+'26',padding:'1px 6px'}}>不为公众所知悉</span> + 具有<span style={{fontWeight:900 }}>商业价值</span> + 权利人采取<span style={{fontWeight:900 }}>相应保密措施</span>的技术信息和经营信息</FactRow>
        <FactRow color={COLORS.teal} icon={<Undo2 size={24} color={COLORS.teal}/>} enter={enter(36,58)}><span style={{fontWeight:900 }}>除外</span>：自行开发研制 / <span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>反向工程</span>——公开购买拆解测绘逆向分析算法 <span style={{fontWeight:900,color:COLORS.red }}>(×侵犯)</span></FactRow>
        <FactRow color={COLORS.teal} icon={<Users size={24} color={COLORS.teal}/>} enter={enter(46,68)}><span style={{fontWeight:900 }}>除外</span>：基于信赖，客户<span style={{fontWeight:900 }}>自愿跟随离职员工</span>去新单位交易</FactRow>
      </div>
      <div data-final-knowledge="anti-unfair-competition-law-scene-03-defame" style={{position:'absolute',left:904,top:0,width:864,height:340,padding:'14px 20px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <Ban size={120} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.red}}><Ban size={30} color={COLORS.red}/>诋毁商誉——虚假说别人“不好”</div>
        <FactRow color={COLORS.red} icon={<Megaphone size={24} color={COLORS.red}/>} enter={enter(40,62)}><span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>编造、传播</span>虚假或误导性信息；<span style={{fontWeight:900 }}>指使他人</span>编造传播</FactRow>
        <FactRow color={COLORS.copper} icon={<Users size={24} color={COLORS.copper}/>} enter={enter(50,72)}><span style={{fontWeight:900 }}>对象</span>：特定企业<span style={{fontWeight:900,color:COLORS.red }}>或整个行业</span>，不限于竞争对手——甲醛超标的行业报告 <span style={{fontWeight:900,color:COLORS.red }}>(×不构成？构成!)</span></FactRow>
      </div>
      <div data-final-knowledge="anti-unfair-competition-law-knowledge-3" data-stateful-source="secret-key-travel" style={{position:'absolute',left:0,top:364,width:1768,height:330,padding:'14px 22px',border:'5px dashed '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(64,90),translate:interpolate(frame,[64,90],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><KeyIcon />两案对照定分辨</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(78,100)}>智洁公司<span style={{fontWeight:900 }}>反向工程</span>竞争对手扫地机器人算法 → <span style={{fontWeight:900,color:COLORS.teal }}>不构成侵犯商业秘密</span></FactRow>
          <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(88,110)}>乔森地板发布<span style={{fontWeight:900 }}>数据来源不明</span>的行业甲醛报告 → 编造虚假信息侵害整个行业，<span style={{fontWeight:900,color:COLORS.red }}>构成诋毁商誉</span>——未指名道姓不构成 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

const KeyIcon=()=> <BadgeCheck size={30} color="#8A4B2F"/>;

export const AntiUnfairCompetitionLaw04Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="经2.4" title="有奖销售、网络竞争 与 法律责任">
    <div data-layout="lottery-network-liability-4" data-visual-anchor="comparison-axis" data-visual-grammar="lottery-rule-band,network-difference-band" data-text-treatments="chip,external-negation,soft-highlight" data-focal-rule="anti-unfair-competition-law-scene-04-rule" data-focal-channels="contrast,icon,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="anti-unfair-competition-law-scene-04-lottery" style={{position:'absolute',left:0,top:0,width:864,height:330,padding:'14px 20px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <GiftIcon />
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Stamp size={30} color={COLORS.copper}/>不正当有奖销售四情形</div>
        <FactRow color={COLORS.copper} icon={<Ban size={24} color={COLORS.copper}/>} enter={enter(26,48)}>① 信息<span style={{fontWeight:900 }}>不明确影响兑奖</span>　② 活动后<span style={{fontWeight:900,color:COLORS.red }}>无正当理由变更</span>——旅行社倒闭改奖属<span style={{fontWeight:900,color:COLORS.teal }}>正当理由</span> <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(36,58)}>③ <span style={{fontWeight:900 }}>谎称有奖或内定</span>的欺骗方式　④ 抽奖式最高奖金额<span style={{fontWeight:900 }}>超过5万元</span></FactRow>
      </div>
      <div data-final-knowledge="anti-unfair-competition-law-scene-04-network" style={{position:'absolute',left:904,top:0,width:864,height:330,padding:'14px 20px',border:'5px solid '+COLORS.indigo,background:COLORS.indigo+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <GitBranch size={120} color={COLORS.indigo} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.indigo}}><GitBranch size={30} color={COLORS.indigo}/>网络不正当竞争</div>
        <FactRow color={COLORS.copper} icon={<Ban size={24} color={COLORS.copper}/>} enter={enter(40,62)}><span style={{fontWeight:900 }}>妨碍破坏</span>他人网络产品 / <span style={{fontWeight:900 }}>数据侵权</span>：不正当获取使用他人合法持有数据 / <span style={{fontWeight:900 }}>滥用平台规则</span></FactRow>
        <FactRow color={COLORS.red} icon={<AlertTriangle size={24} color={COLORS.red}/>} enter={enter(50,72)}><span style={{fontWeight:900,color:COLORS.red }}>以大欺小（新增）</span>：平台强制按其规则<span style={{fontWeight:900,color:COLORS.red }}>低于成本销售</span>；要求中小企业接受<span style={{fontWeight:900,color:COLORS.red }}>明显不合理付款条件</span>——货到180天付款 <span style={{fontWeight:900 }}>(√)</span></FactRow>
      </div>
      <div data-final-knowledge="anti-unfair-competition-law-knowledge-4" style={{position:'absolute',left:0,top:354,width:1768,height:340,padding:'14px 22px',border:'5px solid '+COLORS.gold,background:COLORS.teal+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(64,90),translate:interpolate(frame,[64,90],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Coins size={30} color={COLORS.copper}/>法律责任（新修）</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
          <FactRow color={COLORS.copper} icon={<Coins size={24} color={COLORS.copper}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>计算</span>：实际损失 / 所获利益 + <span style={{fontWeight:900 }}>制止侵权的合理开支</span></FactRow>
          <FactRow color={COLORS.red} icon={<AlertTriangle size={24} color={COLORS.red}/>} enter={enter(88,110)}><span style={{fontWeight:900,color:COLORS.red }}>故意且情节严重 → 加倍赔偿</span>；混淆、商业秘密赔偿难定 → <span style={{fontWeight:900 }}>500万元以下</span>酌定</FactRow>
          <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(98,120)}><span style={{fontWeight:900 }}>责任竞合</span>：财产不足以同时承担 → <span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>优先承担民事责任</span></FactRow>
          <FactRow color={COLORS.copper} icon={<Scale size={24} color={COLORS.copper}/>} enter={enter(108,130)}>有奖销售信息明确、变更确属客观风险 → 不构成不正当有奖销售</FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

const GiftIcon=()=> <Coins size={110} color="#B98A2F" strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>;

export const AntiUnfairCompetitionLaw=()=> <AbsoluteFill>
  <TimelineSequence name="01-anti-unfair-competition-law-scene-01" start={SCENES['anti-unfair-competition-law-scene-01'].start} duration={SCENES['anti-unfair-competition-law-scene-01'].duration}><AntiUnfairCompetitionLaw01Scene/></TimelineSequence>
  <TimelineSequence name="02-anti-unfair-competition-law-scene-02" start={SCENES['anti-unfair-competition-law-scene-02'].start} duration={SCENES['anti-unfair-competition-law-scene-02'].duration}><AntiUnfairCompetitionLaw02Scene/></TimelineSequence>
  <TimelineSequence name="03-anti-unfair-competition-law-scene-03" start={SCENES['anti-unfair-competition-law-scene-03'].start} duration={SCENES['anti-unfair-competition-law-scene-03'].duration}><AntiUnfairCompetitionLaw03Scene/></TimelineSequence>
  <TimelineSequence name="04-anti-unfair-competition-law-scene-04" start={SCENES['anti-unfair-competition-law-scene-04'].start} duration={SCENES['anti-unfair-competition-law-scene-04'].duration}><AntiUnfairCompetitionLaw04Scene/></TimelineSequence>
</AbsoluteFill>;
