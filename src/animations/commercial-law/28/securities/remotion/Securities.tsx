import type {ReactNode} from 'react';
import {TrendingUp, Coins, Users, Ban, Handshake, Percent, Landmark, Scale, AlertTriangle, Eye, Gavel, FileText, Megaphone, Undo2, Shield, Stamp, Check, ArrowRight, GitBranch, BadgeCheck, Split, Receipt} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#EDEAE2', ink:'#2B2B33', indigo:'#3B4A6B', copper:'#8A4B2F', teal:'#15725F', red:'#B23A30', gold:'#B98A2F', paper:'#FAF6EC'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.copper,color:COLORS.paper}}>{code}</div>
    <div style={{position:'absolute',left:190,right:76,top:46,fontSize:46,fontWeight:900,lineHeight:1.12,borderBottom:'5px solid '+COLORS.copper,paddingBottom:12}}>{title}</div>
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

export const Securities01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const issueX=interpolate(frame,[48,102],[340,1180],CLAMP);
  return <Shell code="28.1" title="证券发行：公开与非公开">
    <div data-layout="issuance-register-gate-1" data-visual-anchor="flow-path" data-visual-grammar="price-band,register-gate" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="securities-scene-01-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="securities-scene-01-price" style={{position:'absolute',left:0,top:0,width:864,height:280,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <Coins size={120} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Coins size={30} color={COLORS.copper}/>发行价格</div>
        <FactRow color={COLORS.copper} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(26,48)}>可<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>平价</span>或<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>溢价</span>发行，<span style={{fontWeight:900,color:COLORS.red }}>不能折价</span>；无面额股灵活定价无此限制</FactRow>
        <FactRow color={COLORS.copper} icon={<Handshake size={24} color={COLORS.copper}/>} enter={enter(36,58)}>溢价价格：发行人与承销<span style={{fontWeight:900 }}>证券公司协商</span>确定，<span style={{fontWeight:900,color:COLORS.teal }}>无须证监会审批</span>；溢价款计入<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>资本公积金</span></FactRow>
      </div>
      <div data-final-knowledge="securities-scene-01-public" style={{position:'absolute',left:904,top:0,width:864,height:280,padding:'14px 20px',border:'5px solid '+COLORS.indigo,background:COLORS.indigo+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <Users size={120} color={COLORS.indigo} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.indigo}}><Users size={30} color={COLORS.indigo}/>公开发行</div>
        <FactRow color={COLORS.indigo} icon={<Users size={24} color={COLORS.indigo}/>} enter={enter(40,62)}>向不特定对象发行；或向特定对象累计<span style={{fontWeight:900,background:COLORS.indigo+'26',padding:'1px 6px'}}>超过200人</span>（员工持股计划人数不算）</FactRow>
        <FactRow color={COLORS.teal} icon={<Landmark size={24} color={COLORS.teal}/>} enter={enter(50,72)}>须经<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>证监会注册</span>：交易所审核 → 证监会注册；未注册<span style={{fontWeight:900,color:COLORS.red }}>不得公开发行</span></FactRow>
      </div>
      <div data-stateful-source="issue-registration-travel" style={{position:'absolute',left:issueX,top:296,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.indigo,fontSize:20,fontWeight:900,color:COLORS.indigo,opacity:enter(58,78),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <FileText size={24} color={COLORS.indigo}/>公开发行申请
      </div>
      <div data-final-knowledge="securities-knowledge-1" data-stateful-terminal="issue-registration-travel" style={{position:'absolute',left:0,top:366,width:1768,height:330,padding:'14px 22px',border:'5px solid '+COLORS.red,background:COLORS.red+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(64,90),translate:interpolate(frame,[64,90],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.red}}><Ban size={30} color={COLORS.red}/>非公开发行的红线</div>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(78,100)}><span style={{fontWeight:900,color:COLORS.red }}>不得</span>采用<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>广告、公开劝诱、变相公开</span>方式——报纸上宣传 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(88,110)}>“不能溢价发行” <span style={{fontWeight:900,color:COLORS.red }}>(×)</span>——股票完全可以溢价发行</FactRow>
      </div>
    </div>
  </Shell>;
};

export const Securities02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="28.2" title="承销：代销与包销">
    <div data-layout="underwriting-twin-column-2" data-visual-anchor="comparison-axis" data-visual-grammar="agency-firm-contrast,failure-line" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="securities-scene-02-rule" data-focal-channels="contrast,icon,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="securities-scene-02-agency" style={{position:'absolute',left:0,top:0,width:864,height:400,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <Handshake size={120} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.teal}}>
          <Handshake size={30} color={COLORS.teal}/>代销
          <span style={{padding:'6px 14px',background:COLORS.red,color:COLORS.paper,fontSize:20,fontWeight:900,transform:'rotate(-2deg)'}}>有发行失败</span>
        </div>
        <FactRow color={COLORS.teal} icon={<ArrowRight size={24} color={COLORS.teal}/>} enter={enter(26,48)}>证券公司<span style={{fontWeight:900 }}>代发行人发售</span>，承销期结束将<span style={{fontWeight:900 }}>未售出的全部退还</span>发行人</FactRow>
        <FactRow color={COLORS.red} icon={<Percent size={24} color={COLORS.red}/>} enter={enter(36,58)}>期限届满售出<span style={{fontWeight:900 }}>未达拟公开发行总量70%</span> → <span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>发行失败</span>：按发行价+银行同期存款利息<span style={{fontWeight:900 }}>返还认购人</span></FactRow>
      </div>
      <div data-final-knowledge="securities-scene-02-firm" style={{position:'absolute',left:904,top:0,width:864,height:400,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <Receipt size={120} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}>
          <Receipt size={30} color={COLORS.copper}/>包销
          <span style={{padding:'6px 14px',background:COLORS.teal,color:COLORS.paper,fontSize:20,fontWeight:900,transform:'rotate(2deg)'}}>无发行失败</span>
        </div>
        <FactRow color={COLORS.copper} icon={<Coins size={24} color={COLORS.copper}/>} enter={enter(40,62)}>证券公司<span style={{fontWeight:900 }}>全部购入</span>发行人的证券，或期满将<span style={{fontWeight:900 }}>售后剩余全部自行购入</span></FactRow>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(50,72)}>“包销未达70%也失败” <span style={{fontWeight:900,color:COLORS.red }}>(×)</span>——包销方式<span style={{fontWeight:900,color:COLORS.teal }}>不存在发行失败</span></FactRow>
      </div>
      <div data-final-knowledge="securities-knowledge-2" style={{position:'absolute',left:0,top:424,width:1768,height:270,padding:'14px 22px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(58,84),translate:interpolate(frame,[58,84],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Stamp size={30} color={COLORS.copper}/>两种方式的相同点</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.copper} icon={<HourglassIcon />} enter={enter(72,94)}>代销、包销期限均<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>不超过90日</span></FactRow>
          <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(82,104)}>应<span style={{fontWeight:900 }}>保证先行出售给认购人</span>，不得为本公司<span style={{fontWeight:900,color:COLORS.red }}>预留或预先购入留存</span></FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

const HourglassIcon=()=> <Split size={24} color="#B98A2F"/>;

export const Securities03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const shortX=interpolate(frame,[56,116],[360,1240],CLAMP);
  return <Shell code="28.3" title="证券交易：禁持与短线">
    <div data-layout="trading-restriction-band-3" data-visual-anchor="boundary" data-visual-grammar="holder-ban-band,shortswing-lane" data-text-treatments="chip,external-negation,soft-highlight" data-focal-rule="securities-scene-03-rule" data-focal-channels="contrast,connector,motion" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="securities-scene-03-ban" style={{position:'absolute',left:0,top:0,width:1768,height:230,padding:'14px 22px',border:'5px solid '+COLORS.red,background:COLORS.red+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(10,36)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.red}}><Ban size={30} color={COLORS.red}/>禁止持有、买卖、收受证券（已持有的要转让）——借他人名义也不行 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:12}}>
          <FactRow color={COLORS.red} icon={<Users size={24} color={COLORS.red}/>} enter={enter(24,46)}>① 交易所、证券公司、登记结算机构<span style={{fontWeight:900 }}>从业人员</span></FactRow>
          <FactRow color={COLORS.red} icon={<FileText size={24} color={COLORS.red}/>} enter={enter(32,54)}>② 出具审计、评估、法律意见书的<span style={{fontWeight:900 }}>服务机构及人员</span></FactRow>
          <FactRow color={COLORS.red} icon={<Coins size={24} color={COLORS.red}/>} enter={enter(40,62)}>③ 持股<span style={{fontWeight:900 }}>5%以上股东/董监高</span>——含配偶父母子女及借用他人账户</FactRow>
        </div>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(48,70)}>例外：实施<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>股权激励或员工持股计划</span>的证券公司从业人员可持有、卖出本公司股票</FactRow>
      </div>
      <div data-stateful-source="shortswing-profit-travel" style={{position:'absolute',left:shortX,top:252,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.gold,fontSize:20,fontWeight:900,color:COLORS.copper,opacity:enter(58,78),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Coins size={24} color={COLORS.copper}/>短线收益
      </div>
      <div data-final-knowledge="securities-knowledge-3" data-stateful-terminal="shortswing-profit-travel" style={{position:'absolute',left:0,top:322,width:1768,height:370,padding:'14px 22px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(64,90),translate:interpolate(frame,[64,90],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><AlertTriangle size={30} color={COLORS.copper}/>短线交易与各环节限制</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
          <FactRow color={COLORS.copper} icon={<Split size={24} color={COLORS.copper}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>禁止6个月内倒买倒卖</span>（持股5%以上）；行为<span style={{fontWeight:900,color:COLORS.teal }}>有效</span>，但收益<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>归公司所有</span>，不得拒绝交付——第3个月卖出获利600万 <span style={{fontWeight:900 }}>(√)</span></FactRow>
          <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(86,108)}>例外：证券公司因<span style={{fontWeight:900 }}>包销售后剩余股票</span>持股5%以上，不受6个月限制</FactRow>
          <FactRow color={COLORS.indigo} icon={<HourglassIcon />} enter={enter(94,116)}>为<span style={{fontWeight:900 }}>发行服务</span>：承销期内及期满后 <span style={{fontWeight:900 }}>6个月内</span>不得买卖该证券</FactRow>
          <FactRow color={COLORS.indigo} icon={<FileText size={24} color={COLORS.indigo}/>} enter={enter(102,124)}>为<span style={{fontWeight:900 }}>发行以外环节</span>服务：接受委托日至文件公开后 <span style={{fontWeight:900 }}>5日内</span>不得买卖（实际工作日早于此的从实际日起算）</FactRow>
        </div>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(110,132)}><span style={{fontWeight:900 }}>内幕交易</span>：知悉人在信息公开前不得买卖、建议买卖、泄露；<span style={{fontWeight:900 }}>未公开信息交易、操纵市场、虚假陈述</span>一律禁止</FactRow>
      </div>
    </div>
  </Shell>;
};

export const Securities04Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const climbX=interpolate(frame,[52,116],[300,1140],CLAMP);
  return <Shell code="28.4" title="上市收购：披露阶梯与强制要约">
    <div data-layout="takeover-disclosure-stairs-4" data-visual-anchor="flow-path" data-visual-grammar="disclosure-stairs,mandatory-tender-gate" data-text-treatments="chip,stamp,thin-underline" data-focal-rule="securities-scene-04-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div style={{position:'absolute',left:200,top:170,width:900,height:6,background:COLORS.ink,transformOrigin:'left center',transform:'scaleX('+interpolate(frame,[30,66],[0,1],CLAMP)+')'}}/>
      <div data-stateful-source="takeover-stake-travel" style={{position:'absolute',left:climbX,top:96,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.copper,fontSize:20,fontWeight:900,color:COLORS.copper,opacity:enter(34,54),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <TrendingUp size={24} color={COLORS.copper}/>增持甲公司股份
      </div>
      <div data-final-knowledge="securities-scene-04-disclosure" style={{position:'absolute',left:0,top:194,width:1100,height:260,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(48,74)}}>
        <div style={{fontSize:22,fontWeight:900,color:COLORS.copper}}><Megaphone size={26} color={COLORS.copper}/>权益披露三级台阶</div>
        <div style={{fontSize:19,fontWeight:800,lineHeight:1.5}}>① 达到<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>5%</span>：3日内报告+公告，期限内<span style={{fontWeight:900,color:COLORS.red }}>禁止买卖</span>（4.5%想增持2% → 先到5%暂停）</div>
        <div style={{fontSize:19,fontWeight:800,lineHeight:1.5}}>② 5%后每<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>增减1%</span>：事实发生<span style={{fontWeight:900 }}>次日</span>通知+公告（5%→6.5%越过6%）</div>
        <div style={{fontSize:19,fontWeight:800,lineHeight:1.5}}>③ 5%后每<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>增减5%</span>：3日内报告+公告，公告后3日内<span style={{fontWeight:900,color:COLORS.red }}>禁止买卖</span>（6.5%→10%暂停）</div>
        <div style={{fontSize:19,fontWeight:800,lineHeight:1.5}}>违规：<span style={{fontWeight:900,color:COLORS.red }}>36个月内</span>超过部分<span style={{fontWeight:900,color:COLORS.red }}>不得行使表决权</span></div>
      </div>
      <div data-final-knowledge="securities-scene-04-tender" data-stateful-terminal="takeover-stake-travel" style={{position:'absolute',left:1130,top:60,width:638,height:394,padding:'14px 20px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(62,88),translate:interpolate(frame,[62,88],['220px 0px','0px 0px'],CLAMP)}}>
        <Gavel size={110} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.red}}><Gavel size={28} color={COLORS.red}/>达到30%：强制要约</div>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(76,98)}>继续收购须向<span style={{fontWeight:900 }}>所有股东</span>发出全部/部分要约——<span style={{fontWeight:900,color:COLORS.red }}>禁止协议收购</span>（与大股东协议买 <span style={{fontWeight:900 }}>(×)</span>）</FactRow>
        <FactRow color={COLORS.gold} icon={<HourglassIcon />} enter={enter(86,108)}>期限<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>30-60日</span>——"15日内收购" <span style={{fontWeight:900,color:COLORS.red }}>(×)</span>；不得撤销要约、不得卖出、不得要约外形式买入</FactRow>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(96,118)}>变更要约须公告，<span style={{fontWeight:900,color:COLORS.red }}>不得降价、减量、缩期</span>；收购后<span style={{fontWeight:900 }}>不符合上市要求才终止上市</span>（如持股达75%以上）</FactRow>
      </div>
      <div data-final-knowledge="securities-knowledge-4" style={{position:'absolute',left:0,top:478,width:1768,height:220,padding:'14px 22px',border:'5px solid '+COLORS.gold,background:COLORS.paper,display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(92,118),translate:interpolate(frame,[92,118],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:23,fontWeight:900}}><Split size={28} color={COLORS.copper}/>两种收购方式</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.copper} icon={<Megaphone size={24} color={COLORS.copper}/>} enter={enter(106,128)}><span style={{fontWeight:900 }}>要约收购</span>：公开面向全体股东，全部/部分收购</FactRow>
          <FactRow color={COLORS.copper} icon={<Handshake size={24} color={COLORS.copper}/>} enter={enter(114,136)}><span style={{fontWeight:900 }}>协议收购</span>：与股东私下协商（30%前可用）</FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const Securities05Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="28.5" title="信息公开：虚假陈述的责任">
    <div data-layout="misrepresentation-liability-ladder-5" data-visual-anchor="typographic-sequence" data-visual-grammar="liability-ladder,culpa-contrast-band" data-text-treatments="chip,soft-highlight,stamp" data-focal-rule="securities-scene-05-rule" data-focal-channels="contrast,icon,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="securities-scene-05-scenario" style={{position:'absolute',left:0,top:0,width:1768,height:130,padding:'12px 22px',border:'5px solid '+COLORS.indigo,background:COLORS.indigo+'59',display:'flex',alignItems:'center',gap:14,opacity:enter(10,36)}}>
        <AlertTriangle size={32} color={COLORS.indigo}/>
        <div style={{fontSize:23,fontWeight:900}}>未按规定披露，或公告文件有<span style={{fontWeight:900,background:COLORS.indigo+'26',padding:'1px 6px'}}>虚假记载、误导性陈述、重大遗漏</span>致投资者损失</div>
      </div>
      <div data-final-knowledge="securities-scene-05-liability" style={{position:'absolute',left:0,top:154,width:1768,height:330,padding:'14px 22px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(26,52),translate:interpolate(frame,[26,52],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{fontSize:22,fontWeight:900,color:COLORS.copper}}><Scale size={26} color={COLORS.copper}/>责任主体阶梯</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
          <FactRow color={COLORS.red} icon={<Stamp size={24} color={COLORS.red}/>} enter={enter(40,62)}><span style={{fontWeight:900 }}>发行人（信息披露义务人）</span>：赔偿——<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>无过错责任</span></FactRow>
          <FactRow color={COLORS.copper} icon={<Users size={24} color={COLORS.copper}/>} enter={enter(48,70)}><span style={{fontWeight:900 }}>控股股东、实际控制人</span>：应承担赔偿责任——广告商不是责任主体 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
          <FactRow color={COLORS.copper} icon={<Users size={24} color={COLORS.copper}/>} enter={enter(56,78)}><span style={{fontWeight:900 }}>董监高和其他责任人员</span>：应承担赔偿责任</FactRow>
          <FactRow color={COLORS.gold} icon={<Undo2 size={24} color={COLORS.gold}/>} enter={enter(64,86)}><span style={{fontWeight:900 }}>保荐人、承销证券公司及直接责任人员</span>：与发行人<span style={{fontWeight:900 }}>连带</span>——能证明自己<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>没有过错</span>的除外</FactRow>
        </div>
      </div>
      <div data-final-knowledge="securities-knowledge-5" style={{position:'absolute',left:0,top:508,width:1768,height:186,padding:'14px 22px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(70,96),translate:interpolate(frame,[70,96],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Stamp size={30} color={COLORS.copper}/>归责原则对比</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(84,106)}>发行人：<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>无过错责任</span>——不能以无过错免责</FactRow>
          <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(92,114)}>保荐人、承销商：<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>过错推定责任</span>——能证明无过错即免责</FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const Securities06Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="28.6" title="投资者保护：征集、调解与集体诉讼">
    <div data-layout="investor-protection-triad-6" data-visual-anchor="role-pair" data-visual-grammar="solicit-scope-split,mediation-litigation-pair" data-text-treatments="chip,external-negation,soft-highlight" data-focal-rule="securities-scene-06-rule" data-focal-channels="contrast,icon,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="securities-scene-06-solicit" style={{position:'absolute',left:0,top:0,width:1100,height:300,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <Users size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Users size={30} color={COLORS.copper}/>征集（表决权等）</div>
        <FactRow color={COLORS.copper} icon={<Users size={24} color={COLORS.copper}/>} enter={enter(26,48)}>征集人：董事会 / 独立董事 / 持股<span style={{fontWeight:900 }}>1%以上股东</span> / <span style={{fontWeight:900 }}>投资者保护机构</span></FactRow>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(36,58)}>限于<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>提案权、表决权等共益权</span>——分红权等自益权<span style={{fontWeight:900,color:COLORS.red }}>不被征集</span></FactRow>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(46,68)}><span style={{fontWeight:900,color:COLORS.red }}>禁止有偿或变相有偿</span>方式征集</FactRow>
      </div>
      <div data-final-knowledge="securities-scene-06-mediation" style={{position:'absolute',left:1124,top:0,width:644,height:300,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <Handshake size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.teal}}><Handshake size={30} color={COLORS.teal}/>调解</div>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(40,62)}>普通投资者请求调解 → 证券公司<span style={{fontWeight:900,color:COLORS.red }}>不得拒绝</span></FactRow>
        <FactRow color={COLORS.teal} icon={<Scale size={24} color={COLORS.teal}/>} enter={enter(50,72)}>普通投资者与证券公司纠纷 → <span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>证券公司举证</span>——"由甲举证" <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
      </div>
      <div data-final-knowledge="securities-knowledge-6" style={{position:'absolute',left:0,top:324,width:1768,height:370,padding:'14px 22px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(64,90),translate:interpolate(frame,[64,90],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Gavel size={30} color={COLORS.copper}/>集体诉讼（代表人诉讼）</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
          <FactRow color={COLORS.copper} icon={<Users size={24} color={COLORS.copper}/>} enter={enter(78,100)}>虚假陈述等证券民事赔偿诉讼，<span style={{fontWeight:900 }}>标的同一种类 + 人数众多</span> → 可<span style={{fontWeight:900 }}>推选代表人</span>诉讼</FactRow>
          <FactRow color={COLORS.copper} icon={<Landmark size={24} color={COLORS.copper}/>} enter={enter(86,108)}>法院公告通知<span style={{fontWeight:900 }}>登记</span>；投资者保护机构帮投资者登记（明示不参加的除外）</FactRow>
          <FactRow color={COLORS.teal} icon={<BadgeCheck size={24} color={COLORS.teal}/>} enter={enter(94,116)}>受 <span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>50名以上投资者委托</span>，投资者保护机构可作<span style={{fontWeight:900 }}>诉讼代表人</span></FactRow>
          <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(102,124)}>判决对<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>参加登记</span>的投资者有效——"对未登记投资者也有效" <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const Securities=()=> <AbsoluteFill>
  <TimelineSequence name="01-securities-scene-01" start={SCENES['securities-scene-01'].start} duration={SCENES['securities-scene-01'].duration}><Securities01Scene/></TimelineSequence>
  <TimelineSequence name="02-securities-scene-02" start={SCENES['securities-scene-02'].start} duration={SCENES['securities-scene-02'].duration}><Securities02Scene/></TimelineSequence>
  <TimelineSequence name="03-securities-scene-03" start={SCENES['securities-scene-03'].start} duration={SCENES['securities-scene-03'].duration}><Securities03Scene/></TimelineSequence>
  <TimelineSequence name="04-securities-scene-04" start={SCENES['securities-scene-04'].start} duration={SCENES['securities-scene-04'].duration}><Securities04Scene/></TimelineSequence>
  <TimelineSequence name="05-securities-scene-05" start={SCENES['securities-scene-05'].start} duration={SCENES['securities-scene-05'].duration}><Securities05Scene/></TimelineSequence>
  <TimelineSequence name="06-securities-scene-06" start={SCENES['securities-scene-06'].start} duration={SCENES['securities-scene-06'].duration}><Securities06Scene/></TimelineSequence>
</AbsoluteFill>;
