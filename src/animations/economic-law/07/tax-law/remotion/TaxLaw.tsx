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

export const TaxLaw01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const boxX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="经7.1" title="增值税、消费税 与 车船税">
    <div data-layout="vat-consumption-board-1" data-visual-anchor="comparison-axis" data-visual-grammar="vat-deemed-lane,tax-object-band" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="tax-law-scene-01-rule" data-focal-channels="contrast,icon,motion" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="deemed-transaction-travel" style={{position:'absolute',left:boxX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.copper,fontSize:20,fontWeight:900,color:COLORS.copper,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <GitBranch size={24} color={COLORS.copper}/>自产面包送员工
      </div>
      <div data-final-knowledge="tax-law-scene-01-vat" style={{position:'absolute',left:0,top:90,width:864,height:330,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <Coins size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Coins size={28} color={COLORS.copper}/>增值税</div>
        <FactRow color={COLORS.copper} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(58,80)}><span style={{fontWeight:900 }}>视同应税</span>：自产/委托加工货物用于<span style={{fontWeight:900 }}>集体福利、个人消费</span>；<span style={{fontWeight:900 }}>无偿转让</span>——卖还是送都是<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>终点消费，一视同仁</span>（送员工面包 <span style={{fontWeight:900,color:COLORS.red }}>(×无须缴)</span>）</FactRow>
        <FactRow color={COLORS.teal} icon={<Ban size={24} color={COLORS.teal}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>不属于应税</span>：员工工资服务 / 行政事业性收费与政府性基金 / <span style={{fontWeight:900 }}>征收征用补偿</span>（500万征收款 <span style={{fontWeight:900,color:COLORS.red }}>(×缴税)</span>）/ 存款利息</FactRow>
        <FactRow color={COLORS.gold} icon={<Percent size={24} color={COLORS.gold}/>} enter={enter(78,100)}>税率：一般纳税人 <span style={{fontWeight:900 }}>13%、9%、6%</span>；小规模 <span style={{fontWeight:900 }}>3%</span>（国务院另有规定除外）；出口 <span style={{fontWeight:900 }}>0</span>；年销售额≤<span style={{fontWeight:900 }}>500万</span>可简易计税</FactRow>
      </div>
      <div data-final-knowledge="tax-law-scene-01-consumption" style={{position:'absolute',left:904,top:90,width:864,height:330,padding:'14px 20px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <Coins size={110} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.red}}><Coins size={28} color={COLORS.red}/>消费税 与 车船税</div>
        <FactRow color={COLORS.red} icon={<AlertTriangle size={24} color={COLORS.red}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>消费税对象</span>：<span style={{fontWeight:900 }}>高档污染不再生</span>——烟酒化妆品珠宝、鞭炮电池涂料、<span style={{fontWeight:900 }}>木制一次性筷子、实木地板</span>（竹筷复合地板 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span>）；出口应税消费品免征</FactRow>
        <FactRow color={COLORS.teal} icon={<Coins size={24} color={COLORS.teal}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>车船税</span>：所有人或管理人；免：捕捞养殖渔船、军警专用、<span style={{fontWeight:900 }}>消防车救援船</span>；减免：<span style={{fontWeight:900 }}>新能源</span>、纳税困难、部分公交农村车船</FactRow>
      </div>
      <div data-final-knowledge="tax-law-knowledge-1" data-stateful-terminal="deemed-transaction-travel" style={{position:'absolute',left:0,top:444,width:1768,height:250,padding:'14px 22px',border:'5px dashed '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(88,114),translate:interpolate(frame,[88,114],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Stamp size={30} color={COLORS.copper}/>增值税免税口诀</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.copper} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(102,124)}><span style={{fontWeight:900 }}>科学援农医，旧残民生票</span>：农业相关、医疗服务、旧书旧物、科研设备、援助物资、残疾人专用、育养婚姻殡葬、<span style={{fontWeight:900 }}>学历教育</span>、文化宗教门票</FactRow>
          <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(112,134)}>网上销售<span style={{fontWeight:900 }}>收购</span>的山核桃免增值税？<span style={{fontWeight:900,color:COLORS.red }}>(×)</span>——非<span style={{fontWeight:900 }}>自产</span>农产品不符免征</FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

const Percent=({size,color}:{readonly size:number;readonly color:string})=> <span style={{fontSize:size/2,fontWeight:900,color,lineHeight:1}}>%</span>;

export const TaxLaw02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const stayX=interpolate(frame,[52,112],[300,1100],CLAMP);
  return <Shell code="经7.2" title="个人所得税：居民与综合所得">
    <div data-layout="income-tax-resident-gate-2" data-visual-anchor="timeline-gate" data-visual-grammar="resident-gate,comprehensive-band" data-text-treatments="chip,soft-highlight,thin-underline" data-focal-rule="tax-law-scene-02-rule" data-focal-channels="contrast,motion,annotation" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="resident-status-travel" style={{position:'absolute',left:stayX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.navy,fontSize:20,fontWeight:900,color:COLORS.navy,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Users size={24} color={COLORS.navy}/>Tom 的纳税身份
      </div>
      <div data-final-knowledge="tax-law-scene-02-resident" style={{position:'absolute',left:0,top:90,width:864,height:300,padding:'14px 20px',border:'5px solid '+COLORS.indigo,background:COLORS.indigo+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <Split size={110} color={COLORS.indigo} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.indigo}}><Split size={28} color={COLORS.indigo}/>居民 vs 非居民——按住所和居住时间，非国籍</div>
        <FactRow color={COLORS.indigo} icon={<Check size={24} color={COLORS.indigo}/>} enter={enter(58,80)}><span style={{fontWeight:900 }}>居民</span>：境内有住所 或 居住满<span style={{fontWeight:900 }}>183天</span> → <span style={{fontWeight:900 }}>境内外所得都纳税</span></FactRow>
        <FactRow color={COLORS.copper} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>非居民</span>（Tom 无住所工作5个月）：仅<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>境内所得</span>纳税——境内薪金4万<span style={{fontWeight:900 }}>仍须缴</span> <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
      </div>
      <div data-final-knowledge="tax-law-scene-02-income" style={{position:'absolute',left:904,top:90,width:864,height:300,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <Coins size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Coins size={28} color={COLORS.copper}/>所得分类</div>
        <FactRow color={COLORS.copper} icon={<Coins size={24} color={COLORS.copper}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>综合所得（劳工特稿）</span>：工资薪金、劳务报酬、<span style={{fontWeight:900 }}>稿酬</span>（8000元 <span style={{fontWeight:900,color:COLORS.red }}>(×无须缴)</span>）、特许权使用费</FactRow>
        <FactRow color={COLORS.gold} icon={<Percent size={24} color={COLORS.gold}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>经营所得</span>：超额累进 5%~35%；<span style={{fontWeight:900 }}>其他所得</span>（利息股息红利租赁转让偶然）：比例税率 <span style={{fontWeight:900 }}>20%</span></FactRow>
      </div>
      <div data-final-knowledge="tax-law-knowledge-2" style={{position:'absolute',left:0,top:414,width:1768,height:280,padding:'14px 22px',border:'5px dashed '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(88,114),translate:interpolate(frame,[88,114],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><BadgeCheck size={30} color={COLORS.copper}/>免税 与 减征</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.copper} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(102,124)}>口诀：<span style={{fontWeight:900 }}>国奖国债各种金，保险军工各种费，还有外交与两贴</span>——国债金融债利息、补贴津贴、福利救济、保险赔款、军转复退安退离、养老金离休、外交领事</FactRow>
          <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(112,134)}>校级科研奖金<span style={{fontWeight:900,color:COLORS.red }}>不免税</span>——只有<span style={{fontWeight:900 }}>省级、国家级</span>等高级别公益奖金免税 <span style={{fontWeight:900 }}>(×)</span>；可减征：<span style={{fontWeight:900 }}>残疾孤老烈属</span>所得、自然灾害重大损失所得</FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const TaxLaw03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const freezeX=interpolate(frame,[52,116],[240,1120],CLAMP);
  return <Shell code="经7.3" title="企业所得税 与 税收保全">
    <div data-layout="corporate-preservation-split-3" data-visual-anchor="boundary" data-visual-grammar="corporate-formula-band,preservation-track" data-text-treatments="chip,soft-highlight,external-negation" data-focal-rule="tax-law-scene-03-rule" data-focal-channels="contrast,motion,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="tax-law-scene-03-corporate" style={{position:'absolute',left:0,top:0,width:864,height:330,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <Landmark size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Landmark size={28} color={COLORS.copper}/>企业所得税</div>
        <FactRow color={COLORS.copper} icon={<Users size={24} color={COLORS.copper}/>} enter={enter(26,48)}><span style={{fontWeight:900 }}>居民企业</span>：境内成立或<span style={{fontWeight:900 }}>实际管理机构在境内</span>→境内外都缴；苹果公司境外成立+管理在美 = <span style={{fontWeight:900,color:COLORS.teal }}>非居民 (√)</span></FactRow>
        <FactRow color={COLORS.copper} icon={<Coins size={24} color={COLORS.copper}/>} enter={enter(36,58)}><span style={{fontWeight:900 }}>公式</span>：收入总额－不征税（<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>三政</span>：财政拨款/行政收费/政府性基金）－免税（国债利息、<span style={{fontWeight:900 }}>居民企业间股息红利</span>、非营利组织收入）－扣除－弥补亏损</FactRow>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(46,68)}><span style={{fontWeight:900 }}>减免</span>：农公环技；<span style={{fontWeight:900 }}>扣除</span>：合理支出 + 公益捐赠≤利润<span style={{fontWeight:900 }}>12%</span>（100万≤120万 √）；<span style={{fontWeight:900 }}>加计扣除</span>：研发费用、残疾职工工资（口诀：<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>研发残工资</span>）——B公司持股超12个月分红500万属免税 <span style={{fontWeight:900 }}>(√)</span></FactRow>
      </div>
      <div data-final-knowledge="tax-law-scene-03-preservation" style={{position:'absolute',left:904,top:0,width:864,height:330,padding:'14px 20px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <Ban size={110} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.red}}><AlertTriangle size={28} color={COLORS.red}/>税收保全（未到期+转移迹象+不能担保）</div>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(40,62)}>措施：<span style={{fontWeight:900 }}>冻结存款、扣押查封</span>——B公司转移设备迹象应<span style={{fontWeight:900,color:COLORS.red }}>保全</span>而非直接扣缴 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
        <FactRow color={COLORS.gold} icon={<GitBranch size={24} color={COLORS.gold}/>} enter={enter(50,72)}>限期内缴纳 → <span style={{fontWeight:900 }}>立即解除</span>；期满未缴 → 经<span style={{fontWeight:900 }}>县以上税务局局长批准</span>可<span style={{fontWeight:900,color:COLORS.red }}>强制执行</span></FactRow>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(60,82)}><span style={{fontWeight:900 }}>强执</span>：划拨存款、拍卖变卖，滞纳金一并执行；<span style={{fontWeight:900,color:COLORS.red }}>不可保全强执</span>：维持生活必需住房用品 + 单价<span style={{fontWeight:900 }}>5000元以下</span>生活用品</FactRow>
      </div>
      <div data-final-knowledge="tax-law-knowledge-3" data-stateful-source="preservation-freeze-travel" style={{position:'absolute',left:0,top:354,width:1768,height:340,padding:'14px 22px',border:'5px dashed '+COLORS.navy,background:COLORS.navy+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(66,92),translate:interpolate(frame,[66,92],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.navy}}><Scale size={30} color={COLORS.navy}/>税收法定 与 核定调整权</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.navy} icon={<Scale size={24} color={COLORS.navy}/>} enter={enter(80,102)}><span style={{fontWeight:900 }}>税收法定</span>：税种设立、税率确定、征收管理基本制度<span style={{fontWeight:900,background:COLORS.navy+'26',padding:'1px 6px'}}>只能制定法律</span>；征收原则上按<span style={{fontWeight:900 }}>纳税申报</span>确定</FactRow>
          <FactRow color={COLORS.red} icon={<AlertTriangle size={24} color={COLORS.red}/>} enter={enter(90,112)}>例外：申报不实/不申报 → <span style={{fontWeight:900 }}>核定权、调整权</span>——厂房200万申报100万且无正当理由 → <span style={{fontWeight:900,color:COLORS.teal }}>重新核定 (√)</span></FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const TaxLaw04Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const rankX=interpolate(frame,[52,112],[260,1080],CLAMP);
  return <Shell code="经7.4" title="优先权、代位撤销 与 审计">
    <div data-layout="priority-audit-columns-4" data-visual-anchor="role-pair" data-visual-grammar="priority-rank-lane,audit-process-track" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="tax-law-scene-04-rule" data-focal-channels="contrast,connector,annotation" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="priority-rank-travel" style={{position:'absolute',left:rankX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.gold,fontSize:20,fontWeight:900,color:COLORS.copper,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Coins size={24} color={COLORS.copper}/>变卖款分配
      </div>
      <div data-final-knowledge="tax-law-scene-04-priority" style={{position:'absolute',left:0,top:90,width:864,height:330,padding:'14px 20px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <Split size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Split size={28} color={COLORS.copper}/>税收优先权——谁在先谁优先</div>
        <FactRow color={COLORS.copper} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(58,80)}>税收 <span style={{fontWeight:900 }}>优先于无担保债权</span>；也优先于<span style={{fontWeight:900 }}>罚款、没收违法所得</span></FactRow>
        <FactRow color={COLORS.red} icon={<GitBranch size={24} color={COLORS.red}/>} enter={enter(68,90)}>vs 担保债权：欠税发生在担保物权设立<span style={{fontWeight:900,color:COLORS.red }}>之前</span> → 税收优先；<span style={{fontWeight:900 }}>之后</span> → 担保优先——抵押给银行后欠税，变卖款<span style={{fontWeight:900,color:COLORS.teal }}>先偿银行</span> <span style={{fontWeight:900 }}>(√)</span></FactRow>
        <FactRow color={COLORS.red} icon={<Undo2 size={24} color={COLORS.red}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>代位权/撤销权</span>：债务人<span style={{fontWeight:900 }}>怠于行使、放弃到期债权、无偿转让</span>或明显低价转让且受让人明知——仅欠税不够 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span>；税务局以<span style={{fontWeight:900 }}>自己名义</span>代位，或请求<span style={{fontWeight:900 }}>法院撤销</span></FactRow>
      </div>
      <div data-final-knowledge="tax-law-knowledge-4" data-stateful-terminal="priority-rank-travel" style={{position:'absolute',left:904,top:90,width:864,height:330,padding:'14px 20px',border:'5px solid '+COLORS.navy,background:COLORS.navy+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <FileText size={110} color={COLORS.navy} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.navy}}><FileText size={28} color={COLORS.navy}/>审计法（必考）</div>
        <FactRow color={COLORS.navy} icon={<Users size={24} color={COLORS.navy}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>双重领导</span>：对本级政府和<span style={{fontWeight:900 }}>上一级审计机关</span>负责，业务以上级为主；负责人任免<span style={{fontWeight:900 }}>征求上一级意见</span></FactRow>
        <FactRow color={COLORS.copper} icon={<Eye size={24} color={COLORS.copper}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>对象</span>：预算执行决算、央行财务收支、事业组织、国企国有金融机构、政府投资项目、重大公共工程；<span style={{fontWeight:900,color:COLORS.red }}>民企仅就接受财政补贴等特定事项</span>被审计 <span style={{fontWeight:900,color:COLORS.red }}>(×全面审计)</span></FactRow>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(88,110)}><span style={{fontWeight:900 }}>管辖争议</span>：由<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>共同上级审计机关</span>确定——协商确定 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
      </div>
      <div data-final-knowledge="tax-law-knowledge-5" style={{position:'absolute',left:0,top:444,width:1768,height:250,padding:'14px 22px',border:'5px dashed '+COLORS.teal,background:COLORS.teal+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(88,114),translate:interpolate(frame,[88,114],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.teal}}><GitBranch size={30} color={COLORS.teal}/>审计流程四步</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
          <FactRow color={COLORS.teal} icon={<Send size={24} color={COLORS.teal}/>} enter={enter(102,124)}>组成审计组 → 实施<span style={{fontWeight:900 }}>3日前</span>送达通知书（特殊情况经<span style={{fontWeight:900 }}>县级以上审计机关负责人批准</span>可<span style={{fontWeight:900,color:COLORS.red }}>直接持通知书审计</span>）→ 调查时<span style={{fontWeight:900 }}>不少于2人</span>出示证件和通知书副本</FactRow>
          <FactRow color={COLORS.copper} icon={<Stamp size={24} color={COLORS.copper}/>} enter={enter(112,134)}>报告前<span style={{fontWeight:900 }}>征求被审计单位意见</span> → 审计决定<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>自送达之日起生效</span>；上级可责成<span style={{fontWeight:900 }}>变更或撤销</span>，必要时直接变更撤销</FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const TaxLaw=()=> <AbsoluteFill>
  <TimelineSequence name="01-tax-law-scene-01" start={SCENES['tax-law-scene-01'].start} duration={SCENES['tax-law-scene-01'].duration}><TaxLaw01Scene/></TimelineSequence>
  <TimelineSequence name="02-tax-law-scene-02" start={SCENES['tax-law-scene-02'].start} duration={SCENES['tax-law-scene-02'].duration}><TaxLaw02Scene/></TimelineSequence>
  <TimelineSequence name="03-tax-law-scene-03" start={SCENES['tax-law-scene-03'].start} duration={SCENES['tax-law-scene-03'].duration}><TaxLaw03Scene/></TimelineSequence>
  <TimelineSequence name="04-tax-law-scene-04" start={SCENES['tax-law-scene-04'].start} duration={SCENES['tax-law-scene-04'].duration}><TaxLaw04Scene/></TimelineSequence>
</AbsoluteFill>;
