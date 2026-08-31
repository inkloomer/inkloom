import type {ReactNode} from 'react';
import {Scale, Ban, Check, Users, Coins, AlertTriangle, Megaphone, Eye, Stamp, GitBranch, Split, Shield, Handshake, FileText, Landmark, Undo2, BadgeCheck, Store, Send} from 'lucide-react';
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

export const FoodSafetyLaw01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const sampleX=interpolate(frame,[52,112],[260,1120],CLAMP);
  return <Shell code="经5.1" title="适用范围 与 监测评估">
    <div data-layout="scope-monitoring-split-1" data-visual-anchor="role-pair" data-visual-grammar="scope-split-band,monitoring-evaluate-pair" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="food-safety-law-scene-01-rule" data-focal-channels="contrast,icon,motion" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="food-safety-law-scene-01-scope" style={{position:'absolute',left:0,top:0,width:864,height:340,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <Store size={120} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Store size={30} color={COLORS.copper}/>适用范围</div>
        <FactRow color={COLORS.copper} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(26,48)}><span style={{fontWeight:900 }}>一般食品及食品相关产品</span> → 适用《食品安全法》</FactRow>
        <FactRow color={COLORS.gold} icon={<GitBranch size={24} color={COLORS.gold}/>} enter={enter(36,58)}><span style={{fontWeight:900 }}>食用农产品</span>（大米、大豆、蔬菜、水果）：<span style={{fontWeight:900 }}>质量安全管理</span> → 《农产品质量安全法》；<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>标准制定、市场销售</span>等 → 《食品安全法》——大豆质量安全标准制定适用农安法 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
      </div>
      <div data-final-knowledge="food-safety-law-scene-01-monitoring" style={{position:'absolute',left:904,top:0,width:864,height:340,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <Eye size={120} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.teal}}><Eye size={30} color={COLORS.teal}/>风险监测</div>
        <FactRow color={COLORS.teal} icon={<Landmark size={24} color={COLORS.teal}/>} enter={enter(40,62)}><span style={{fontWeight:900 }}>国家计划</span>：国务院卫生行政部门 + 食品安全监督管理部门；<span style={{fontWeight:900 }}>地方方案</span>：省级同级制定调整</FactRow>
        <FactRow color={COLORS.copper} icon={<Megaphone size={24} color={COLORS.copper}/>} enter={enter(50,72)}><span style={{fontWeight:900 }}>隐患通报</span>：县级以上卫生行政部门通报同级部门 + 报告本级政府和上级卫生部门</FactRow>
      </div>
      <div data-final-knowledge="food-safety-law-knowledge-1" data-stateful-source="sample-fee-travel" style={{position:'absolute',left:0,top:364,width:1768,height:330,padding:'14px 22px',border:'5px dashed '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(64,90),translate:interpolate(frame,[64,90],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Coins size={30} color={COLORS.copper}/>风险评估——不收费 + 科学依据</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(78,100)}>由<span style={{fontWeight:900 }}>国务院卫生行政部门</span>组织；评估<span style={{fontWeight:900,color:COLORS.red }}>不得收费</span>，采集样品<span style={{fontWeight:900 }}>按市场价格</span>支付——样品费徽章一路有偿 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
          <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(88,110)}><span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>评估结果</span>才是制定修订标准与监督管理的<span style={{fontWeight:900 }}>科学依据</span>——"监测信息" <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const FoodSafetyLaw02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const stdX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="经5.2" title="食品安全标准 三级体系">
    <div data-layout="standard-hierarchy-gate-2" data-visual-anchor="typographic-sequence" data-visual-grammar="standard-hierarchy,supersede-line" data-text-treatments="chip,stamp,thin-underline" data-focal-rule="food-safety-law-scene-02-rule" data-focal-channels="contrast,icon,motion" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="local-standard-supersede" style={{position:'absolute',left:stdX,top:80,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.teal,fontSize:20,fontWeight:900,color:COLORS.teal,opacity:enter(34,54),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <FileText size={24} color={COLORS.teal}/>地标（无国标时）
      </div>
      <div data-final-knowledge="food-safety-law-scene-02-hierarchy" style={{position:'absolute',left:0,top:150,width:1768,height:300,display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:14}}>
        <div style={{padding:'14px 18px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(48,72)}}>
          <div style={{fontSize:23,fontWeight:900,color:COLORS.red}}><Landmark size={28} color={COLORS.red}/>国家标准</div>
          <FactRow color={COLORS.red} icon={<Users size={24} color={COLORS.red}/>} enter={enter(62,84)}>国务院<span style={{fontWeight:900 }}>卫生行政部门</span> + 食品安全监督管理部门<span style={{fontWeight:900 }}>制定、公布</span></FactRow>
        </div>
        <div data-final-knowledge="food-safety-law-scene-02-local" data-stateful-terminal="local-standard-supersede" style={{padding:'14px 18px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(58,82)}}>
          <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Stamp size={28} color={COLORS.copper}/>地方标准</div>
          <FactRow color={COLORS.copper} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(72,94)}>地方特色食品<span style={{fontWeight:900 }}>无国标</span> → <span style={{fontWeight:900 }}>省级卫生行政部门</span>制定公布；国标出台后地标<span style={{fontWeight:900,color:COLORS.red }}>即行废止</span>——“酌情存废” <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
        </div>
        <div style={{padding:'14px 18px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(68,92)}}>
          <div style={{fontSize:23,fontWeight:900,color:COLORS.teal}}><BadgeCheck size={28} color={COLORS.teal}/>企业标准</div>
          <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(82,104)}>国家鼓励制定<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>严于</span>国标或地标的企业标准</FactRow>
        </div>
      </div>
      <div data-final-knowledge="food-safety-law-knowledge-2" style={{position:'absolute',left:0,top:474,width:1768,height:220,padding:'14px 22px',border:'5px dashed '+COLORS.red,background:COLORS.red+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(84,110),translate:interpolate(frame,[84,110],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.red}}><Megaphone size={30} color={COLORS.red}/>新增：重点液态食品散装运输</div>
        <FactRow color={COLORS.red} icon={<Split size={24} color={COLORS.red}/>} enter={enter(98,120)}>实行<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>许可制度</span>：道路运输经营者应取得<span style={{fontWeight:900 }}>县级以上</span>食品安全监督管理部门核发的<span style={{fontWeight:900 }}>准运证</span></FactRow>
        <FactRow color={COLORS.gold} icon={<Stamp size={24} color={COLORS.gold}/>} enter={enter(108,130)}>口诀：<span style={{fontWeight:900 }}>国无地有，国有地废，企业可严</span></FactRow>
      </div>
    </div>
  </Shell>;
};

export const FoodSafetyLaw03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const recallX=interpolate(frame,[52,112],[220,900],CLAMP);
  return <Shell code="经5.3" title="食品召回：首要与附属">
    <div data-layout="recall-dual-lane-3" data-visual-anchor="comparison-axis" data-visual-grammar="recall-dual-lane,force-recall-gate" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="food-safety-law-scene-03-rule" data-focal-channels="contrast,motion,annotation" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="recall-order-travel" style={{position:'absolute',left:recallX,top:30,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.red,fontSize:20,fontWeight:900,color:COLORS.red,opacity:enter(28,48),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Undo2 size={24} color={COLORS.red}/>问题食品召回令
      </div>
      <div data-final-knowledge="food-safety-law-scene-03-producer" style={{position:'absolute',left:0,top:96,width:864,height:280,padding:'14px 20px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(42,68),translate:interpolate(frame,[42,68],['-200px 0px','0px 0px'],CLAMP)}}>
        <Store size={110} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.red}}>
          <Store size={30} color={COLORS.red}/>生产者召回
          <span style={{padding:'6px 14px',background:COLORS.red,color:COLORS.paper,fontSize:20,fontWeight:900,transform:'rotate(-2deg)'}}>有条件·首要</span>
        </div>
        <FactRow color={COLORS.red} icon={<Check size={24} color={COLORS.red}/>} enter={enter(56,78)}>立即<span style={{fontWeight:900 }}>停止生产</span>，召回已上市销售的食品；通知相关经营者消费者并<span style={{fontWeight:900 }}>记录召回和通知情况</span></FactRow>
        <FactRow color={COLORS.red} icon={<AlertTriangle size={24} color={COLORS.red}/>} enter={enter(66,88)}>超市发现土豆泥不合格——未说明原因默认<span style={{fontWeight:900 }}>生产者召回</span>，超市直接召回 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
      </div>
      <div data-final-knowledge="food-safety-law-scene-03-seller" style={{position:'absolute',left:904,top:96,width:864,height:280,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(52,78),translate:interpolate(frame,[52,78],['200px 0px','0px 0px'],CLAMP)}}>
        <Handshake size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.teal}}>
          <Handshake size={30} color={COLORS.teal}/>经营者召回
          <span style={{padding:'6px 14px',background:COLORS.teal,color:COLORS.paper,fontSize:20,fontWeight:900,transform:'rotate(2deg)'}}>有条件·附属</span>
        </div>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(66,88)}>因<span style={{fontWeight:900 }}>经营者原因</span>造成不符合标准或可能危害健康 → 经营者召回</FactRow>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(76,98)}><span style={{fontWeight:900 }}>强制召回</span>：未依法召回或停止经营 → 县级以上监管部门<span style={{fontWeight:900,color:COLORS.red }}>责令召回或停止经营</span></FactRow>
      </div>
      <div data-final-knowledge="food-safety-law-knowledge-3" data-stateful-terminal="recall-order-travel" style={{position:'absolute',left:0,top:400,width:1768,height:290,padding:'14px 22px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(84,110),translate:interpolate(frame,[84,110],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Undo2 size={30} color={COLORS.copper}/>召回后怎么处理</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
          <FactRow color={COLORS.copper} icon={<Ban size={24} color={COLORS.copper}/>} enter={enter(98,120)}><span style={{fontWeight:900 }}>无害化处理、销毁</span>防止再流入；向所在地县级监管部门<span style={{fontWeight:900 }}>报告</span>；销毁前<span style={{fontWeight:900 }}>报告时间地点</span>，必要时<span style={{fontWeight:900 }}>现场监督</span></FactRow>
          <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(108,130)}>因<span style={{fontWeight:900 }}>标签、标志、说明书</span>不符被召回：补救后能保证安全可<span style={{fontWeight:900,color:COLORS.teal }}>继续销售</span></FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const FoodSafetyLaw04Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const payX=interpolate(frame,[52,116],[300,1180],CLAMP);
  return <Shell code="经5.4" title="首负责任制 与 惩罚性赔偿">
    <div data-layout="firstpay-punish-band-4" data-visual-anchor="comparison-axis" data-visual-grammar="firstpay-lane,punish-multiplier-band" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="food-safety-law-scene-04-rule" data-focal-channels="contrast,motion,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="food-safety-law-scene-04-firstpay" style={{position:'absolute',left:0,top:0,width:864,height:340,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <Handshake size={120} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Handshake size={30} color={COLORS.copper}/>首负责任制</div>
        <FactRow color={COLORS.copper} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(26,48)}>被要求赔偿的经营者/生产者<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>先行赔付，不得推诿</span></FactRow>
        <FactRow color={COLORS.copper} icon={<Undo2 size={24} color={COLORS.copper}/>} enter={enter(36,58)}>属生产者责任的，经营者赔后<span style={{fontWeight:900 }}>追偿</span>；反之亦然</FactRow>
      </div>
      <div data-final-knowledge="food-safety-law-scene-04-punish" style={{position:'absolute',left:904,top:0,width:864,height:340,padding:'14px 20px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <Coins size={120} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:24,fontWeight:900,color:COLORS.red}}><Coins size={30} color={COLORS.red}/>惩罚性赔偿</div>
        <FactRow color={COLORS.red} icon={<Coins size={24} color={COLORS.red}/>} enter={enter(40,62)}>明知不符合标准仍生产经营：<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>价款10倍 或 损失3倍</span>赔偿金，<span style={{fontWeight:900 }}>不足1000元为1000元</span></FactRow>
        <FactRow color={COLORS.gold} icon={<Users size={24} color={COLORS.gold}/>} enter={enter(50,72)}><span style={{fontWeight:900 }}>知假买假</span>：<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>合理生活消费需要</span>范围内支持；法院按保质期、通常消费习惯认定数量</FactRow>
      </div>
      <div data-final-knowledge="food-safety-law-knowledge-4" data-stateful-source="punish-claim-travel" style={{position:'absolute',left:0,top:364,width:1768,height:330,padding:'14px 22px',border:'5px dashed '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(64,90),translate:interpolate(frame,[64,90],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Scale size={30} color={COLORS.copper}/>椰汁案：两种算法取其高</div>
        <div style={{display:'flex',alignItems:'center',gap:14,opacity:enter(78,100)}}>
          <Chip color={COLORS.copper} text="价款100元 × 10倍 = 1000元"/>
          <div style={{fontSize:24,fontWeight:900,color:COLORS.copper}}>vs</div>
          <Chip color={COLORS.red} text="损失1000元 × 3倍 = 3000元"/>
          <div style={{fontSize:24,fontWeight:900,color:COLORS.copper}}>→</div>
          <div data-stateful-terminal="punish-claim-travel" style={{padding:'7px 13px',background:COLORS.paper,border:'3px solid '+COLORS.red,fontSize:20,fontWeight:900,color:COLORS.red}}>按损失3倍 = 3000元 (√)</div>
        </div>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(96,118)}><span style={{fontWeight:900 }}>不承担</span>：<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>标签、说明书瑕疵</span>不影响食品安全且不会误导</FactRow>
      </div>
    </div>
  </Shell>;
};

export const FoodSafetyLaw=()=> <AbsoluteFill>
  <TimelineSequence name="01-food-safety-law-scene-01" start={SCENES['food-safety-law-scene-01'].start} duration={SCENES['food-safety-law-scene-01'].duration}><FoodSafetyLaw01Scene/></TimelineSequence>
  <TimelineSequence name="02-food-safety-law-scene-02" start={SCENES['food-safety-law-scene-02'].start} duration={SCENES['food-safety-law-scene-02'].duration}><FoodSafetyLaw02Scene/></TimelineSequence>
  <TimelineSequence name="03-food-safety-law-scene-03" start={SCENES['food-safety-law-scene-03'].start} duration={SCENES['food-safety-law-scene-03'].duration}><FoodSafetyLaw03Scene/></TimelineSequence>
  <TimelineSequence name="04-food-safety-law-scene-04" start={SCENES['food-safety-law-scene-04'].start} duration={SCENES['food-safety-law-scene-04'].duration}><FoodSafetyLaw04Scene/></TimelineSequence>
</AbsoluteFill>;
