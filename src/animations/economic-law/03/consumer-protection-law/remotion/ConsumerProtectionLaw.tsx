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

export const ConsumerProtectionLaw01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="经3.1" title="消费者的权利 与 经营者的义务">
    <div data-layout="rights-duty-ledger-1" data-visual-anchor="comparison-axis" data-visual-grammar="rights-group-band,duty-pipeline" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="consumer-protection-law-scene-01-rule" data-focal-channels="contrast,icon,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="consumer-protection-law-scene-01-rights" style={{position:'absolute',left:0,top:0,width:760,height:560,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:10,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <Users size={120} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.teal}}><Users size={30} color={COLORS.teal}/>消费者九权·四组</div>
        <FactRow color={COLORS.teal} icon={<Handshake size={24} color={COLORS.teal}/>} enter={enter(26,48)}><span style={{fontWeight:900 }}>交易类</span>：知情权、自主选择权、<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>公平交易权</span>——单方改道具属性拒退款即侵犯 <span style={{fontWeight:900 }}>(√)</span></FactRow>
        <FactRow color={COLORS.red} icon={<Shield size={24} color={COLORS.red}/>} enter={enter(36,58)}><span style={{fontWeight:900 }}>安全类</span>：安全保障权、获取赔偿权</FactRow>
        <FactRow color={COLORS.copper} icon={<FileText size={24} color={COLORS.copper}/>} enter={enter(46,68)}><span style={{fontWeight:900 }}>知识类</span>：获得相关知识权、结社权</FactRow>
        <FactRow color={COLORS.gold} icon={<Eye size={24} color={COLORS.gold}/>} enter={enter(56,78)}><span style={{fontWeight:900 }}>人格与监督</span>：受尊重权、监督批评权</FactRow>
      </div>
      <div data-final-knowledge="consumer-protection-law-scene-01-duties" style={{position:'absolute',left:800,top:0,width:968,height:560,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <Store size={120} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.09,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Store size={30} color={COLORS.copper}/>经营者义务要点</div>
        <FactRow color={COLORS.copper} icon={<Shield size={24} color={COLORS.copper}/>} enter={enter(40,62)}><span style={{fontWeight:900 }}>安全保障</span>（含免费商品服务）；<span style={{fontWeight:900 }}>召回</span>自担必要费用；耐用商品 6个月内瑕疵<span style={{fontWeight:900 }}>经营者举证</span></FactRow>
        <FactRow color={COLORS.copper} icon={<Undo2 size={24} color={COLORS.copper}/>} enter={enter(50,72)}><span style={{fontWeight:900 }}>三包</span>：无规定/约定 → <span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>7日内退货</span>；不符合解除条件 → 更换、修理</FactRow>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(60,82)}><span style={{fontWeight:900 }}>信息真实</span> + <span style={{fontWeight:900 }}>明码标价</span> + <span style={{fontWeight:900,color:COLORS.red }}>禁止大数据杀熟</span>；标明真实名称；出具发票单据</FactRow>
        <FactRow color={COLORS.indigo ?? COLORS.navy} icon={<LockIcon />} enter={enter(70,92)}><span style={{fontWeight:900 }}>保护消费者信息</span>：合法、正当、必要原则 + 经消费者同意，<span style={{fontWeight:900,color:COLORS.red }}>不得过度收集</span></FactRow>
      </div>
    </div>
  </Shell>;
};

const LockIcon=()=> <Eye size={24} color="#3B4A6B"/>;

export const ConsumerProtectionLaw02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const boxX=interpolate(frame,[52,112],[220,1080],CLAMP);
  return <Shell code="经3.2" title="7天无理由退货 与 格式条款">
    <div data-layout="noreason-return-lane-2" data-visual-anchor="flow-path" data-visual-grammar="return-gate-lane,clause-void-band" data-text-treatments="chip,stamp,external-negation" data-focal-rule="consumer-protection-law-scene-02-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="return-request-travel" style={{position:'absolute',left:boxX,top:36,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.copper,fontSize:20,fontWeight:900,color:COLORS.copper,opacity:enter(34,54),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Send size={24} color={COLORS.copper}/>退货申请
      </div>
      <div data-final-knowledge="consumer-protection-law-scene-02-return" style={{position:'absolute',left:0,top:104,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(48,74)}}>
        <Undo2 size={120} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.teal}}><Undo2 size={28} color={COLORS.teal}/>7天无理由退货（网络·电视·电话·邮购）</div>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(62,84)}><span style={{fontWeight:900,color:COLORS.red }}>不适用</span>：定作、<span style={{fontWeight:900 }}>鲜活易腐</span>（不想要了退猕猴桃 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span>）、在线下载或<span style={{fontWeight:900 }}>拆封的数字化商品</span>、报纸期刊、确认不宜退货</FactRow>
        <FactRow color={COLORS.teal} icon={<Coins size={24} color={COLORS.teal}/>} enter={enter(72,94)}><span style={{fontWeight:900 }}>运费</span>由<span style={{fontWeight:900 }}>消费者</span>承担，另有约定按约定；不喜欢花色 → 无理由退货可行，"拆封概不退货"格式条款<span style={{fontWeight:900,color:COLORS.red }}>无效</span> <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
      </div>
      <div data-final-knowledge="consumer-protection-law-knowledge-2" data-stateful-terminal="return-request-travel" style={{position:'absolute',left:904,top:104,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(62,88),translate:interpolate(frame,[62,88],['200px 0px','0px 0px'],CLAMP)}}>
        <FileText size={120} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><FileText size={28} color={COLORS.copper}/>格式条款 与 预收款</div>
        <FactRow color={COLORS.copper} icon={<Eye size={24} color={COLORS.copper}/>} enter={enter(76,98)}>以<span style={{fontWeight:900 }}>显著方式</span>提请注意 + 说明<span style={{fontWeight:900 }}>重大利害关系</span>内容；排除限制消费者权利、减轻免除经营者责任、加重消费者责任的<span style={{fontWeight:900,color:COLORS.red }}>条款无效</span></FactRow>
        <FactRow color={COLORS.gold} icon={<Coins size={24} color={COLORS.gold}/>} enter={enter(86,108)}><span style={{fontWeight:900 }}>预收款</span>：重大经营风险 → <span style={{fontWeight:900,color:COLORS.red }}>停止收取预付款</span>，消费者可要求继续履行或退余额；解除计价：消费者原因按<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>优惠前</span>，非消费者原因按<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>优惠后</span></FactRow>
      </div>
    </div>
  </Shell>;
};

export const ConsumerProtectionLaw03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const claimX=interpolate(frame,[52,112],[260,1120],CLAMP);
  return <Shell code="经3.3" title="消费纠纷：对外连带，内部可追">
    <div data-layout="dispute-routing-desk-3" data-visual-anchor="flow-target" data-visual-grammar="defect-flaw-split,platform-liability-band" data-text-treatments="chip,soft-highlight,thin-underline" data-focal-rule="consumer-protection-law-scene-03-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="consumer-claim-travel" style={{position:'absolute',left:claimX,top:20,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.navy,fontSize:20,fontWeight:900,color:COLORS.navy,opacity:enter(28,48),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Users size={24} color={COLORS.navy}/>消费者索赔
      </div>
      <div data-final-knowledge="consumer-protection-law-scene-03-split" style={{position:'absolute',left:0,top:86,width:864,height:280,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(34,60),translate:interpolate(frame,[34,60],['-200px 0px','0px 0px'],CLAMP)}}>
        <Split size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:22,fontWeight:900,color:COLORS.copper}}><Split size={26} color={COLORS.copper}/>违约（瑕疵）vs 侵权（缺陷）</div>
        <FactRow color={COLORS.copper} icon={<Coins size={24} color={COLORS.copper}/>} enter={enter(48,70)}><span style={{fontWeight:900 }}>瑕疵</span>：向<span style={{fontWeight:900 }}>销售者</span>索赔，其赔后向生产者/上游销售者<span style={{fontWeight:900 }}>追偿</span></FactRow>
        <FactRow color={COLORS.red} icon={<AlertTriangle size={24} color={COLORS.red}/>} enter={enter(58,80)}><span style={{fontWeight:900 }}>缺陷</span>：向销售者<span style={{fontWeight:900 }}>或</span>生产者索赔，内部<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>相互追偿</span>——口诀：对外连带，内部可追</FactRow>
      </div>
      <div data-final-knowledge="consumer-protection-law-scene-03-expo" style={{position:'absolute',left:904,top:86,width:864,height:280,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(46,72),translate:interpolate(frame,[46,72],['200px 0px','0px 0px'],CLAMP)}}>
        <Landmark size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:22,fontWeight:900,color:COLORS.teal}}><Landmark size={26} color={COLORS.teal}/>展销会·柜台·平台</div>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(60,82)}>展销/租赁<span style={{fontWeight:900 }}>期间</span>找销售者；<span style={{fontWeight:900,color:COLORS.red }}>结束后</span>可向<span style={{fontWeight:900 }}>举办者/出租者</span>索赔（其赔后追偿）——结束半年后仍可找举办者 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
        <FactRow color={COLORS.gold} icon={<GitBranch size={24} color={COLORS.gold}/>} enter={enter(70,92)}><span style={{fontWeight:900 }}>网络平台</span>：不能提供销售者必要信息 → <span style={{fontWeight:900 }}>赔偿</span>；更有利承诺应履行；<span style={{fontWeight:900,color:COLORS.red }}>明知未采取措施 → 连带</span></FactRow>
      </div>
      <div data-final-knowledge="consumer-protection-law-knowledge-3" style={{position:'absolute',left:0,top:386,width:1768,height:310,padding:'14px 22px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(84,110),translate:interpolate(frame,[84,110],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Megaphone size={30} color={COLORS.copper}/>虚假广告 与 公益诉讼</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
          <FactRow color={COLORS.red} icon={<Megaphone size={24} color={COLORS.red}/>} enter={enter(98,120)}><span style={{fontWeight:900 }}>虚假广告</span>：不能提供必要信息 → <span style={{fontWeight:900 }}>赔偿</span>；<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>关系生命健康 + 造成损害 → 连带责任</span>——明星不知情代言保健品也担责 <span style={{fontWeight:900 }}>(√)</span></FactRow>
          <FactRow color={COLORS.copper} icon={<Scale size={24} color={COLORS.copper}/>} enter={enter(108,130)}><span style={{fontWeight:900 }}>公益诉讼</span>：<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>中国消协及省级消协</span>可就侵害众多消费者权益的行为起诉</FactRow>
          <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(118,140)}><span style={{fontWeight:900 }}>合并分立</span> → 变更后承受权利义务的企业赔偿；<span style={{fontWeight:900 }}>借用营业执照</span> → 使用者/持有人赔偿</FactRow>
          <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(128,150)}>展销会结束只能找销售者？<span style={{fontWeight:900,color:COLORS.red }}>(×)</span>——仍可向举办者索赔</FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const ConsumerProtectionLaw04Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const tripleX=interpolate(frame,[52,116],[300,1180],CLAMP);
  return <Shell code="经3.4" title="法律责任：两倍与三倍">
    <div data-layout="liability-multiplier-band-4" data-visual-anchor="comparison-axis" data-visual-grammar="multiplier-duo,punish-gate" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="consumer-protection-law-scene-04-rule" data-focal-channels="contrast,motion,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="consumer-protection-law-scene-04-body" style={{position:'absolute',left:0,top:0,width:864,height:340,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <AlertTriangle size={120} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:24,fontWeight:900,color:COLORS.copper}}><AlertTriangle size={30} color={COLORS.copper}/>人身伤害</div>
        <FactRow color={COLORS.copper} icon={<FileText size={24} color={COLORS.copper}/>} enter={enter(26,48)}><span style={{fontWeight:900 }}>赔偿范围</span>：医疗费、康复费、误工费、残疾赔偿金、丧葬费、死亡赔偿金等</FactRow>
        <FactRow color={COLORS.red} icon={<Coins size={24} color={COLORS.red}/>} enter={enter(36,58)}><span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>惩罚性赔偿</span>：<span style={{fontWeight:900 }}>明知缺陷仍提供</span> + 死亡/健康严重损害 → 损失<span style={{fontWeight:900 }}>2倍以下</span>——电动车多次爆炸致残 <span style={{fontWeight:900 }}>(√)</span></FactRow>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(46,68)}><span style={{fontWeight:900 }}>精神损害</span>：侵害人身权益 + 造成<span style={{fontWeight:900 }}>严重损害</span>可要求</FactRow>
      </div>
      <div data-final-knowledge="consumer-protection-law-scene-04-property" style={{position:'absolute',left:904,top:0,width:864,height:340,padding:'14px 20px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <Coins size={120} color={COLORS.gold} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:24,fontWeight:900,color:COLORS.copper}}><Coins size={30} color={COLORS.copper}/>财产损害</div>
        <FactRow color={COLORS.copper} icon={<Undo2 size={24} color={COLORS.copper}/>} enter={enter(40,62)}><span style={{fontWeight:900 }}>一般</span>：修理、重作、退货、补足、退款、赔偿损失</FactRow>
        <FactRow color={COLORS.red} icon={<Stamp size={24} color={COLORS.red}/>} enter={enter(50,72)}><span style={{fontWeight:900 }}>欺诈</span>：增加赔偿 = 价款<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>3倍</span>，不足<span style={{fontWeight:900 }}>500元按500元</span>——"一律三倍"漏了保底 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(60,82)}>例外：<span style={{fontWeight:900 }}>不影响质量且不误导</span>的瑕疵不赔</FactRow>
      </div>
      <div data-final-knowledge="consumer-protection-law-knowledge-4" style={{position:'absolute',left:0,top:364,width:1768,height:330,padding:'14px 22px',border:'5px dashed '+COLORS.indigo,background:COLORS.navy+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(64,90),translate:interpolate(frame,[64,90],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.navy}}><Scale size={30} color={COLORS.navy}/>数字对照表</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
          <FactRow color={COLORS.copper} icon={<HourglassIcon />} enter={enter(78,100)}><span style={{fontWeight:900 }}>6个月</span>：耐用商品瑕疵举证责任倒置</FactRow>
          <FactRow color={COLORS.copper} icon={<FileText size={24} color={COLORS.copper}/>} enter={enter(86,108)}><span style={{fontWeight:900 }}>7日</span>：三包无约定时退货</FactRow>
          <FactRow color={COLORS.red} icon={<Coins size={24} color={COLORS.red}/>} enter={enter(94,116)}><span style={{fontWeight:900 }}>2倍以下</span>：明知缺陷致死亡/健康严重损害</FactRow>
          <FactRow color={COLORS.gold} icon={<Stamp size={24} color={COLORS.gold}/>} enter={enter(102,124)}><span style={{fontWeight:900 }}>3倍 + 500元保底</span>：欺诈的财产损害</FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

const HourglassIcon=()=> <Coins size={24} color="#8A4B2F"/>;

export const ConsumerProtectionLaw=()=> <AbsoluteFill>
  <TimelineSequence name="01-consumer-protection-law-scene-01" start={SCENES['consumer-protection-law-scene-01'].start} duration={SCENES['consumer-protection-law-scene-01'].duration}><ConsumerProtectionLaw01Scene/></TimelineSequence>
  <TimelineSequence name="02-consumer-protection-law-scene-02" start={SCENES['consumer-protection-law-scene-02'].start} duration={SCENES['consumer-protection-law-scene-02'].duration}><ConsumerProtectionLaw02Scene/></TimelineSequence>
  <TimelineSequence name="03-consumer-protection-law-scene-03" start={SCENES['consumer-protection-law-scene-03'].start} duration={SCENES['consumer-protection-law-scene-03'].duration}><ConsumerProtectionLaw03Scene/></TimelineSequence>
  <TimelineSequence name="04-consumer-protection-law-scene-04" start={SCENES['consumer-protection-law-scene-04'].start} duration={SCENES['consumer-protection-law-scene-04'].duration}><ConsumerProtectionLaw04Scene/></TimelineSequence>
</AbsoluteFill>;
