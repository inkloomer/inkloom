import type {ReactNode} from 'react';
import {Banknote, Users, Coins, CalendarDays, ShieldCheck, ScrollText, Ban, Check, Lock, Handshake, Split, Undo2, Stamp, Scale, Hourglass, AlertTriangle, BadgeCheck, Landmark, FileSignature, ArrowRight} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#EDE8DF', ink:'#2B2B33', indigo:'#3B4A6B', copper:'#8A4B2F', teal:'#15725F', red:'#B23A30', gold:'#B98A2F', paper:'#FAF6EC'} as const;
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

export const Draft01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const gateX=interpolate(frame,[48,96,120,168],[100,430,470,800],CLAMP);
  return <Shell code="21.1" title="出票：绝对记载事项过关">
    <div data-layout="issuance-gate-row-1" data-visual-anchor="flow-path" data-visual-grammar="requirement-gate-row,record-fallback-rule" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="draft-scene-01-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="issuance-check-travel" style={{position:'absolute',left:gateX,top:26,padding:'8px 16px',background:COLORS.copper,color:COLORS.paper,fontSize:20,fontWeight:900,opacity:enter(38,58),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Banknote size={24} color={COLORS.paper}/>汇票出票
      </div>
      <div data-final-knowledge="draft-scene-01-gates" style={{position:'absolute',left:0,top:86,width:1768,height:270,display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr',gap:14}}>
        <div style={{padding:'12px 14px',border:'4px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(46,70)}}>
          <div style={{display:'flex',alignItems:'center',gap:9,fontSize:22,fontWeight:900,color:COLORS.copper}}><Users size={28} color={COLORS.copper}/>三人</div>
          <FactRow color={COLORS.copper} icon={<FileSignature size={22} color={COLORS.copper}/>} enter={enter(58,80)}>出票人<span style={{fontWeight:900}}>签章</span></FactRow>
          <FactRow color={COLORS.copper} icon={<Users size={22} color={COLORS.copper}/>} enter={enter(64,86)}>收款人名称、付款人名称</FactRow>
        </div>
        <div style={{padding:'12px 14px',border:'4px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(54,78)}}>
          <div style={{display:'flex',alignItems:'center',gap:9,fontSize:22,fontWeight:900,color:COLORS.teal}}><Coins size={28} color={COLORS.teal}/>今·确定金额</div>
          <FactRow color={COLORS.teal} icon={<Coins size={22} color={COLORS.teal}/>} enter={enter(66,88)}>中文大写 + 数码，<span style={{fontWeight:900,borderBottom:'3px solid '+COLORS.teal,paddingBottom:1}}>须保持一致</span></FactRow>
        </div>
        <div style={{padding:'12px 14px',border:'4px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(62,86)}}>
          <div style={{display:'flex',alignItems:'center',gap:9,fontSize:22,fontWeight:900,color:COLORS.copper}}><CalendarDays size={28} color={COLORS.copper}/>日·出票日期</div>
          <FactRow color={COLORS.copper} icon={<CalendarDays size={22} color={COLORS.copper}/>} enter={enter(74,96)}>必须有<span style={{fontWeight:900}}>出票日期</span></FactRow>
        </div>
        <div style={{padding:'12px 14px',border:'4px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(70,94)}}>
          <div style={{display:'flex',alignItems:'center',gap:9,fontSize:22,fontWeight:900,color:COLORS.red}}><ShieldCheck size={28} color={COLORS.red}/>无恙·两无条件</div>
          <FactRow color={COLORS.red} icon={<ShieldCheck size={22} color={COLORS.red}/>} enter={enter(82,104)}><span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>无条件支付的委托</span> + 表明“汇票”字样</FactRow>
        </div>
      </div>
      <div data-final-knowledge="draft-scene-01-invalid" style={{position:'absolute',left:0,top:376,width:864,height:190,padding:'14px 20px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(96,122),translate:interpolate(frame,[96,122],['-200px 0px','0px 0px'],CLAMP)}}>
        <Ban size={110} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:23,fontWeight:900,color:COLORS.red}}><Ban size={28} color={COLORS.red}/>缺一即死</div>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(110,132)}>绝对记载事项<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>欠缺 → 票据无效</span>；出票<span style={{fontWeight:900,color:COLORS.red}}>不得附条件</span>，附条件票据无效</FactRow>
      </div>
      <div data-final-knowledge="draft-scene-01-fallback" style={{position:'absolute',left:904,top:376,width:864,height:190,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(106,132),translate:interpolate(frame,[106,132],['200px 0px','0px 0px'],CLAMP)}}>
        <ScrollText size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:23,fontWeight:900,color:COLORS.teal}}><ScrollText size={28} color={COLORS.teal}/>相对记载事项·可补救</div>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(120,142)}>记载的以<span style={{fontWeight:900}}>记载为准</span>；未记载按法律规定——付款日期未记载 → <span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>见票即付</span></FactRow>
      </div>
      <div data-final-knowledge="draft-knowledge-1" style={{position:'absolute',left:0,right:0,top:586,bottom:0,display:'flex',alignItems:'center',gap:18,border:'4px solid '+COLORS.gold,background:COLORS.gold+'66',padding:'12px 24px',opacity:enter(122,148)}}>
        <Stamp size={34} color={COLORS.ink}/>
        <div>
          <div style={{fontSize:23,fontWeight:900,letterSpacing:2}}>口诀：三人今日无恙——绝对记载四件套</div>
          <div style={{fontSize:20,fontWeight:800,marginTop:4,opacity:enter(132,154)}}>出票人记载“<span style={{fontWeight:900,color:COLORS.red}}>不得转让</span>”→ 票据<span style={{fontWeight:900,color:COLORS.red}}>不得再转让、质押</span>；转了<span style={{fontWeight:900,color:COLORS.red}}>无效</span>，他人无法取得票据权利</div>
        </div>
      </div>
    </div>
  </Shell>;
};

export const Draft02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="21.2" title="背书：连续与五种特殊背书">
    <div data-layout="endorsement-variant-board-2" data-visual-anchor="comparison-axis" data-visual-grammar="variant-grid,who-records-who-frees" data-text-treatments="chip,external-negation,soft-highlight" data-focal-rule="draft-scene-02-rule" data-focal-channels="contrast,icon,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="draft-scene-02-base" style={{position:'absolute',left:0,top:0,width:1768,height:110,padding:'12px 22px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',alignItems:'center',gap:16,opacity:enter(10,36)}}>
        <FileSignature size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:8,top:0,opacity:0.1,pointerEvents:'none'}}/>
        <FileSignature size={30} color={COLORS.copper}/>
        <div style={{fontSize:23,fontWeight:900}}>背书应<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>连续</span>；背书人不退出票据关系，而是转变为<span style={{fontWeight:900,color:COLORS.red}}>票据债务人</span></div>
      </div>
      <div data-final-knowledge="draft-scene-02-variants" style={{position:'absolute',left:0,top:134,width:1768,height:430,display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gridTemplateRows:'1fr 1fr',gap:14}}>
        <div style={{padding:'12px 16px',border:'4px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(24,48)}}>
          <div style={{display:'flex',alignItems:'center',gap:9,fontSize:22,fontWeight:900,color:COLORS.teal}}><Handshake size={27} color={COLORS.teal}/>委托收款背书</div>
          <div style={{fontSize:20,fontWeight:800,lineHeight:1.4}}>“委托收款”字样+背书人签章+被背书人名称；被背书人仅获<span style={{fontWeight:900}}>被委托的汇票权利</span>，<span style={{fontWeight:900,color:COLORS.red}}>不得转让票据</span></div>
        </div>
        <div style={{padding:'12px 16px',border:'4px solid '+COLORS.indigo,background:COLORS.indigo+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(32,56)}}>
          <div style={{display:'flex',alignItems:'center',gap:9,fontSize:22,fontWeight:900,color:COLORS.indigo}}><Lock size={27} color={COLORS.indigo}/>质押背书</div>
          <div style={{fontSize:20,fontWeight:800,lineHeight:1.4}}>“质押”字样+出质人签章+交付质权人<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>缺一不可</span>，否则质押无效；质权人<span style={{fontWeight:900,color:COLORS.red}}>不得再转让</span></div>
        </div>
        <div style={{padding:'12px 16px',border:'4px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(40,64)}}>
          <div style={{display:'flex',alignItems:'center',gap:9,fontSize:22,fontWeight:900,color:COLORS.copper}}><Split size={27} color={COLORS.copper}/>附条件背书</div>
          <div style={{fontSize:20,fontWeight:800,lineHeight:1.4}}>背书<span style={{fontWeight:900,color:COLORS.teal}}>有效</span>，所附条件<span style={{fontWeight:900}}>不具有汇票上的效力</span>——“经验货合格后才付款”，条件仅具民法效力</div>
        </div>
        <div style={{padding:'12px 16px',border:'4px dashed '+COLORS.red,background:COLORS.red+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(48,72)}}>
          <div style={{display:'flex',alignItems:'center',gap:9,fontSize:22,fontWeight:900,color:COLORS.red}}><Ban size={27} color={COLORS.red}/>禁转背书·谁记载谁免责</div>
          <div style={{fontSize:20,fontWeight:800,lineHeight:1.4}}>背书人记载“不得转让”：后续转让<span style={{fontWeight:900,color:COLORS.teal}}>有效</span>，但原背书人对后手的被背书人<span style={{fontWeight:900,color:COLORS.red}}>不担责</span>——B禁转后，D可追索A、C，<span style={{fontWeight:900,color:COLORS.red}}>不可追索B</span></div>
        </div>
        <div style={{padding:'12px 16px',border:'4px dashed '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(56,80)}}>
          <div style={{display:'flex',alignItems:'center',gap:9,fontSize:22,fontWeight:900,color:COLORS.copper}}><Hourglass size={27} color={COLORS.copper}/>期后背书·谁背书谁担责</div>
          <div style={{fontSize:20,fontWeight:800,lineHeight:1.4}}>被拒绝承兑/拒绝付款/超过提示期限后背书：仅<span style={{fontWeight:900}}>期后背书人</span>担责——C被拒付后背书给D，D<span style={{fontWeight:900,color:COLORS.red}}>不能向A、B、银行主张</span>，只能要求<span style={{fontWeight:900}}>C担责</span></div>
        </div>
        <div data-final-knowledge="draft-knowledge-2" style={{padding:'12px 16px',border:'4px solid '+COLORS.ink,background:COLORS.paper,display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(64,88)}}>
          <div style={{display:'flex',alignItems:'center',gap:9,fontSize:22,fontWeight:900}}><AlertTriangle size={27} color={COLORS.red}/>判例对照</div>
          <div style={{fontSize:20,fontWeight:800,lineHeight:1.45}}>乙注明“不得转让”后仍对丁担责？<span style={{fontWeight:900,color:COLORS.red}}> (×)</span> 背书人记载禁转的，<span style={{fontWeight:900}}>不对后续背书担责</span></div>
        </div>
      </div>
      <div style={{position:'absolute',left:0,right:0,top:584,bottom:0,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.gold,background:COLORS.gold+'66',padding:'12px 24px',opacity:enter(96,122)}}>
        <Scale size={32} color={COLORS.ink}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.5}}>委托收款：被背书人<span style={{fontWeight:900,color:COLORS.red }}>不得转让</span>；质押：三要件<span style={{fontWeight:900,color:COLORS.red }}>缺一不可</span>；附条件：背书<span style={{fontWeight:900,color:COLORS.teal }}>有效</span>；禁转：<span style={{fontWeight:900,color:COLORS.red }}>谁记载谁免责</span>；期后：<span style={{fontWeight:900,color:COLORS.red }}>谁背书谁担责</span></div>
      </div>
    </div>
  </Shell>;
};
export const Draft03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="21.3" title="承兑、保证 与 附条件大招">
    <div data-layout="accept-guarantee-pair-3" data-visual-anchor="role-pair" data-visual-grammar="accept-strict-rule,guarantee-checklist" data-text-treatments="chip,stamp,external-negation" data-focal-rule="draft-scene-03-rule" data-focal-channels="contrast,icon,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="draft-scene-03-accept" style={{position:'absolute',left:0,top:0,width:864,height:400,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <Stamp size={120} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Stamp size={30} color={COLORS.copper}/>承兑——远期汇票特有</div>
        <FactRow color={COLORS.copper} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(26,48)}>付款人承诺在<span style={{fontWeight:900}}>到期日兑现汇票金额</span>；承兑后即应承担<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>到期付款责任</span></FactRow>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(36,58)}>承兑<span style={{fontWeight:900,color:COLORS.red}}>附条件 → 视为拒绝承兑</span>，付款人不承担付款责任</FactRow>
        <FactRow color={COLORS.indigo} icon={<ScrollText size={24} color={COLORS.indigo}/>} enter={enter(46,68)}>例：“到期日前收到出票人足额资金则承兑生效”——<span style={{fontWeight:900,color:COLORS.red}}>视为拒绝承兑</span></FactRow>
      </div>
      <div data-final-knowledge="draft-scene-03-guarantee" style={{position:'absolute',left:904,top:0,width:864,height:400,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <Handshake size={120} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.teal}}><Handshake size={30} color={COLORS.teal}/>保证——三件套缺一不可</div>
        <FactRow color={COLORS.red} icon={<FileSignature size={24} color={COLORS.red}/>} enter={enter(40,62)}>绝对记载：<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>“保证”字样 + 保证人签章 + 名称住所</span>，缺一<span style={{fontWeight:900,color:COLORS.red}}>保证无效</span></FactRow>
        <FactRow color={COLORS.teal} icon={<ScrollText size={24} color={COLORS.teal}/>} enter={enter(50,72)}>相对记载：被保证人——已承兑为<span style={{fontWeight:900}}>承兑人</span>、未承兑为<span style={{fontWeight:900}}>出票人</span>；保证日期未记载=出票日期</FactRow>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(60,82)}>附条件：保证<span style={{fontWeight:900,color:COLORS.teal}}>有效</span>，条件<span style={{fontWeight:900,borderBottom:'3px solid '+COLORS.teal,paddingBottom:1}}>视为未记载</span></FactRow>
        <FactRow color={COLORS.copper} icon={<Undo2 size={24} color={COLORS.copper}/>} enter={enter(70,92)}>责任：与被保证人对持票人<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>连带责任</span>；清偿后可向被保证人及其前手<span style={{fontWeight:900}}>追索</span></FactRow>
      </div>
      <div data-final-knowledge="draft-knowledge-3" style={{position:'absolute',left:0,top:424,width:1768,height:200,padding:'14px 22px',border:'5px solid '+COLORS.red,background:COLORS.red+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(58,84),translate:interpolate(frame,[58,84],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.red}}><AlertTriangle size={30} color={COLORS.red}/>解题大招：附条件的效力因行为而异</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:14}}>
          <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(72,94)}>出票附条件 → <span style={{fontWeight:900,color:COLORS.red}}>票据无效</span></FactRow>
          <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(80,102)}>背书、保证附条件 → <span style={{fontWeight:900,color:COLORS.teal}}>行为有效</span></FactRow>
          <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(88,110)}>承兑附条件 → <span style={{fontWeight:900,color:COLORS.red}}>视为拒绝承兑</span></FactRow>
        </div>
      </div>
      <div data-final-knowledge="draft-scene-03-case" style={{position:'absolute',left:0,right:0,top:644,bottom:0,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.ink,background:COLORS.paper,padding:'12px 24px',opacity:enter(100,126)}}>
        <Ban size={30} color={COLORS.red}/>
        <div style={{fontSize:21,fontWeight:800,lineHeight:1.5}}>判例双杀：戊与乙签票据保证合同但<span style={{fontWeight:900,color:COLORS.red}}>未在票据上签章</span> → 无票据保证责任；汇票<span style={{fontWeight:900,color:COLORS.red}}>被拒付后不得背书转让</span></div>
      </div>
    </div>
  </Shell>;
};

export const Draft=()=> <AbsoluteFill>
  <TimelineSequence name="01-draft-scene-01" start={SCENES['draft-scene-01'].start} duration={SCENES['draft-scene-01'].duration}><Draft01Scene/></TimelineSequence>
  <TimelineSequence name="02-draft-scene-02" start={SCENES['draft-scene-02'].start} duration={SCENES['draft-scene-02'].duration}><Draft02Scene/></TimelineSequence>
  <TimelineSequence name="03-draft-scene-03" start={SCENES['draft-scene-03'].start} duration={SCENES['draft-scene-03'].duration}><Draft03Scene/></TimelineSequence>
</AbsoluteFill>;
