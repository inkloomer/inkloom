import type {ReactNode} from 'react';
import {Vault, Handshake, ArrowLeftRight, ArrowRightFromLine, Mail, Ban, Check, UserCheck, Users, KeyRound, FileSignature, CircleDollarSign, TrendingUp, TrendingDown, Smile, Frown, Scale, AlertTriangle, Split, Undo2} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#EDE7DB', ink:'#26262E', copper:'#8A4B2F', teal:'#15725F', red:'#B23A30', gold:'#B98A2F', blue:'#3E5F8A', paper:'#FAF6EC'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.blue,color:COLORS.paper}}>{code}</div>
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

export const PartnershipPropertyDistribution01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const reqX=interpolate(frame,[96,146,160,214],[560,780,780,1400],CLAMP);
  return <Shell code="14.1" title="财产共有 与 份额转让">
    <div data-layout="shared-pool-transfer-matrix-1" data-visual-anchor="comparison-axis" data-visual-grammar="transfer-fork,consent-gate" data-text-treatments="chip,soft-highlight,thin-underline" data-focal-rule="partnership-property-distribution-scene-01-rule" data-focal-channels="contrast,connector,icon" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="partnership-property-distribution-knowledge-1" style={{position:'absolute',left:0,top:0,right:0,height:104,padding:'12px 22px',border:'4px solid '+COLORS.blue,background:COLORS.blue+'66',display:'flex',alignItems:'center',gap:16,opacity:enter(12,38)}}>
        <Vault size={110} color={COLORS.blue} strokeWidth={1.2} style={{position:'absolute',right:10,top:0,opacity:0.1,pointerEvents:'none'}}/>
        <Vault size={36} color={COLORS.blue}/>
        <div style={{fontSize:23,fontWeight:900}}>合伙企业财产：全体合伙人<span style={{fontWeight:900,background:COLORS.blue+'33',padding:'1px 6px'}}>共有</span></div>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(26,48)}>清算前<span style={{fontWeight:900,color:COLORS.red,borderBottom:'3px solid '+COLORS.red,paddingBottom:1}}>不得私自转移或处分</span>合伙企业财产</FactRow>
        <div style={{marginLeft:'auto'}}><Chip color={COLORS.teal} icon={<Handshake size={24} color={COLORS.teal}/>} text="第三人可善意取得"/></div>
      </div>
      <div data-final-knowledge="partnership-property-distribution-scene-01-axis" style={{position:'absolute',left:0,top:126,width:212,height:444,display:'flex',flexDirection:'column',justifyContent:'center',gap:60,opacity:enter(22,46)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,padding:'10px 14px',background:COLORS.copper,color:COLORS.paper,fontSize:22,fontWeight:900}}><ArrowLeftRight size={26} color={COLORS.paper}/>对内转让</div>
        <div style={{display:'flex',alignItems:'center',gap:10,padding:'10px 14px',background:COLORS.teal,color:COLORS.paper,fontSize:22,fontWeight:900}}><ArrowRightFromLine size={26} color={COLORS.paper}/>对外转让</div>
      </div>
      <div style={{position:'absolute',left:224,top:168,width:interpolate(frame,[40,72],[0,100],CLAMP),height:5,background:COLORS.ink}}/>
      <div style={{position:'absolute',left:224,top:402,width:interpolate(frame,[54,86],[0,100],CLAMP),height:5,background:COLORS.ink}}/>
      <div style={{position:'absolute',left:314,top:158,width:0,height:0,borderTop:'14px solid transparent',borderBottom:'14px solid transparent',borderLeft:'18px solid '+COLORS.ink,opacity:enter(68,80)}}/>
      <div style={{position:'absolute',left:314,top:392,width:0,height:0,borderTop:'14px solid transparent',borderBottom:'14px solid transparent',borderLeft:'18px solid '+COLORS.ink,opacity:enter(82,94)}}/>
      <div data-final-knowledge="partnership-property-distribution-scene-01-gp-col" style={{position:'absolute',left:340,top:130,width:690,height:190,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(40,66),translate:interpolate(frame,[40,66],['0px 24px','0px 0px'],CLAMP)}}>
        <Undo2 size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:23,fontWeight:900,color:COLORS.copper}}><Users size={28} color={COLORS.copper}/>普通合伙企业 · 对内</div>
        <FactRow color={COLORS.copper} icon={<ArrowLeftRight size={24} color={COLORS.copper}/>} enter={enter(52,74)}><span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>要通知</span>、<span style={{fontWeight:900}}>不需同意</span>、<span style={{fontWeight:900,borderBottom:'3px solid '+COLORS.copper,paddingBottom:1}}>无优先购买权</span></FactRow>
      </div>
      <div data-final-knowledge="partnership-property-distribution-scene-01-gp-out" style={{position:'absolute',left:340,top:370,width:690,height:200,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(56,82),translate:interpolate(frame,[56,82],['0px 24px','0px 0px'],CLAMP)}}>
        <UserCheck size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:23,fontWeight:900,color:COLORS.copper}}><Users size={28} color={COLORS.copper}/>普通合伙企业 · 对外</div>
        <FactRow color={COLORS.red} icon={<UserCheck size={24} color={COLORS.red}/>} enter={enter(68,90)}>除合伙协议另有约定：须其他合伙人<span style={{fontWeight:900,color:COLORS.red,background:COLORS.red+'20',padding:'1px 6px'}}>一致同意</span></FactRow>
        <FactRow color={COLORS.gold} icon={<Scale size={24} color={COLORS.gold}/>} enter={enter(78,100)}>同等条件下有<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>优先购买权</span></FactRow>
      </div>
      <div data-final-knowledge="partnership-property-distribution-scene-01-lp-col" style={{position:'absolute',left:1056,top:130,width:712,height:190,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(48,74),translate:interpolate(frame,[48,74],['0px 24px','0px 0px'],CLAMP)}}>
        <ArrowLeftRight size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:23,fontWeight:900,color:COLORS.teal}}><Users size={28} color={COLORS.teal}/>有限合伙企业 · 有限合伙人对内</div>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(60,82)}>转让规则<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>同普通合伙人</span></FactRow>
      </div>
      <div data-final-knowledge="partnership-property-distribution-scene-01-lp-out" data-stateful-terminal="external-transfer-request" style={{position:'absolute',left:1056,top:370,width:712,height:200,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(64,90),translate:interpolate(frame,[64,90],['0px 24px','0px 0px'],CLAMP)}}>
        <Mail size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:23,fontWeight:900,color:COLORS.teal}}><Users size={28} color={COLORS.teal}/>有限合伙企业 · 有限合伙人对外</div>
        <FactRow color={COLORS.teal} icon={<Mail size={24} color={COLORS.teal}/>} enter={enter(76,98)}>按合伙协议约定，<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>提前30日通知</span>即可</FactRow>
        <FactRow color={COLORS.teal} icon={<Ban size={24} color={COLORS.teal}/>} enter={enter(86,108)}><span style={{fontWeight:900}}>无需同意</span>、<span style={{fontWeight:900,borderBottom:'3px solid '+COLORS.teal,paddingBottom:1}}>无优先购买权</span></FactRow>
      </div>
      <div data-stateful-source="external-transfer-request" style={{position:'absolute',left:reqX,top:322,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.blue,fontSize:20,fontWeight:900,color:COLORS.blue,opacity:enter(92,110),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <ArrowRightFromLine size={24} color={COLORS.blue}/>对外转让申请
      </div>
      <div data-final-knowledge="partnership-property-distribution-scene-01-rule" style={{position:'absolute',left:0,right:0,top:592,bottom:0,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.ink,background:COLORS.gold+'40',padding:'12px 24px',opacity:enter(118,144)}}>
        <Scale size={34} color={COLORS.gold}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.5}}>对内转让只须<span style={{fontWeight:900,color:COLORS.copper}}>通知</span>；对外转让普通合伙须<span style={{fontWeight:900,color:COLORS.red}}>一致同意</span>，有限合伙只须<span style={{fontWeight:900,color:COLORS.teal}}>提前30日通知</span></div>
      </div>
    </div>
  </Shell>;
};

export const PartnershipPropertyDistribution02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const reqX=interpolate(frame,[64,116],[430,860],CLAMP);
  return <Shell code="14.2" title="份额出质 与 资格继承">
    <div data-layout="pledge-inherit-gate-2" data-visual-anchor="boundary" data-visual-grammar="pledge-invalid-chain,inherit-fork" data-text-treatments="external-negation,stamp,label-block" data-focal-rule="partnership-property-distribution-scene-02-rule" data-focal-channels="contrast,motion,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="partnership-property-distribution-scene-02-pledge-gp" style={{position:'absolute',left:0,top:0,width:1030,height:330,padding:'16px 22px',border:'5px solid '+COLORS.red,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:10,opacity:enter(16,42),translate:interpolate(frame,[16,42],['-200px 0px','0px 0px'],CLAMP)}}>
        <Ban size={130} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.09,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:12,fontSize:25,fontWeight:900}}>
          <FileSignature size={32} color={COLORS.copper}/>
          <span style={{color:COLORS.copper}}>普通合伙人</span> · 财产份额出质
          <span data-stateful-terminal="pledge-consent-request" style={{marginLeft:'auto',padding:'7px 16px',background:COLORS.red,color:COLORS.paper,fontSize:22,fontWeight:900,transform:'rotate(-2deg)'}}>一致同意</span>
        </div>
        <FactRow color={COLORS.red} icon={<UserCheck size={24} color={COLORS.red}/>} enter={enter(30,52)}>须经全体合伙人<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>一致同意</span>——否则<span style={{fontWeight:900,color:COLORS.red}}>无效</span></FactRow>
        <FactRow color={COLORS.red} icon={<AlertTriangle size={24} color={COLORS.red}/>} enter={enter(40,62)}>给善意第三人造成损失的，由<span style={{fontWeight:900,borderBottom:'3px solid '+COLORS.red,paddingBottom:1}}>行为人赔偿</span>（没有例外）</FactRow>
        <FactRow color={COLORS.blue} icon={<Handshake size={24} color={COLORS.blue}/>} enter={enter(50,72)}>例：谎称已获同意、戊不知情——<span style={{fontWeight:900,color:COLORS.red}}>× 不适用善意取得</span></FactRow>
      </div>
      <div data-stateful-source="pledge-consent-request" style={{position:'absolute',left:reqX,top:96,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.copper,fontSize:20,fontWeight:900,color:COLORS.copper,opacity:enter(56,76),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <FileSignature size={24} color={COLORS.copper}/>出质请求
      </div>
      <div data-final-knowledge="partnership-property-distribution-scene-02-pledge-lp" style={{position:'absolute',left:1060,top:0,width:708,height:330,padding:'16px 22px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:10,opacity:enter(30,56),translate:interpolate(frame,[30,56],['200px 0px','0px 0px'],CLAMP)}}>
        <Check size={130} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.09,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:12,fontSize:25,fontWeight:900,color:COLORS.teal}}>
          <Check size={32} color={COLORS.teal}/><span>有限合伙人 · 出质</span>
        </div>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(44,66)}>有限合伙人<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>可以出质</span>份额</FactRow>
        <FactRow color={COLORS.gold} icon={<FileSignature size={24} color={COLORS.gold}/>} enter={enter(54,76)}>合伙协议<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>可另约定</span></FactRow>
      </div>
      <div style={{position:'absolute',left:60,top:368,padding:'9px 22px',background:COLORS.paper,border:'4px solid '+COLORS.ink,fontSize:23,fontWeight:900,opacity:enter(62,86),display:'flex',alignItems:'center',gap:10}}>
        <KeyRound size={28} color={COLORS.ink}/>合伙人资格的继承
      </div>
      <div style={{position:'absolute',left:866,top:352,width:8,height:interpolate(frame,[78,108],[0,46],CLAMP),background:COLORS.ink}}/>
      <div style={{position:'absolute',left:300,top:398,width:576,height:6,background:COLORS.ink,transformOrigin:'left center',transform:'scaleX('+interpolate(frame,[104,134],[0,1],CLAMP)+')'}}/>
      <div style={{position:'absolute',left:900,top:398,width:576,height:6,background:COLORS.ink,transformOrigin:'left center',transform:'scaleX('+interpolate(frame,[104,134],[0,1],CLAMP)+')'}}/>
      <div style={{position:'absolute',left:868,top:436,width:0,height:0,borderTop:'15px solid transparent',borderBottom:'15px solid transparent',borderLeft:'19px solid '+COLORS.red,opacity:enter(130,144)}}/>
      <div style={{position:'absolute',left:1468,top:436,width:0,height:0,borderTop:'15px solid transparent',borderBottom:'15px solid transparent',borderLeft:'19px solid '+COLORS.teal,opacity:enter(130,144)}}/>
      <div data-final-knowledge="partnership-property-distribution-scene-02-inherit-gp" style={{position:'absolute',left:0,top:452,width:864,height:196,padding:'14px 22px',border:'5px solid '+COLORS.red,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(126,152),translate:interpolate(frame,[126,152],['-220px 0px','0px 0px'],CLAMP)}}>
        <Undo2 size={110} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.red}}>
          <Ban size={30} color={COLORS.red}/>普通合伙人资格：<span style={{fontWeight:900}}>不可直接继承</span>
        </div>
        <FactRow color={COLORS.gold} icon={<FileSignature size={24} color={COLORS.gold}/>} enter={enter(140,162)}>例外：合伙协议约定 / <span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>全体同意</span></FactRow>
      </div>
      <div data-final-knowledge="partnership-property-distribution-scene-02-inherit-lp" style={{position:'absolute',right:0,top:452,width:864,height:196,padding:'14px 22px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(138,164),translate:interpolate(frame,[138,164],['220px 0px','0px 0px'],CLAMP)}}>
        <KeyRound size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.teal}}>
          <Check size={30} color={COLORS.teal}/>有限合伙人资格：<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>可以直接继承</span>
        </div>
        <FactRow color={COLORS.teal} icon={<Users size={24} color={COLORS.teal}/>} enter={enter(152,174)}>资格随<span style={{fontWeight:900}}>合法继承人</span>当然取得，无须经同意</FactRow>
      </div>
      <div data-final-knowledge="partnership-property-distribution-knowledge-2" style={{position:'absolute',left:0,right:0,top:668,bottom:0,display:'flex',alignItems:'center',gap:18,border:'4px solid '+COLORS.gold,background:COLORS.gold+'66',padding:'12px 24px',opacity:enter(166,192)}}>
        <FileSignature size={34} color={COLORS.ink}/>
        <div style={{fontSize:23,fontWeight:900,letterSpacing:2}}>口诀：内转<span style={{color:COLORS.copper}}>通</span>，外转<span style={{color:COLORS.blue}}>同</span>，出质必须<span style={{color:COLORS.red}}>一致同</span></div>
      </div>
    </div>
  </Shell>;
};

export const PartnershipPropertyDistribution03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const coinY=interpolate(frame,[36,72,108,144,180],[70,150,230,290,290],CLAMP);
  return <Shell code="14.3" title="损益分配的顺序与边界">
    <div data-layout="profit-ladder-stairs-3" data-visual-anchor="flow-path" data-visual-grammar="order-ladder-descent,distribution-split" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="partnership-property-distribution-scene-03-rule" data-focal-channels="spatial,connector,motion" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="partnership-property-distribution-knowledge-3" style={{position:'absolute',left:0,top:0,width:560,height:560,padding:'16px 20px',border:'5px solid '+COLORS.blue,background:COLORS.blue+'66',opacity:enter(12,38)}}>
        <CircleDollarSign size={120} color={COLORS.blue} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.blue,marginBottom:12}}>
          <TrendingUp size={30} color={COLORS.blue}/>损益分配的顺序
        </div>
        <div style={{position:'relative',height:440}}>
          <div data-final-knowledge="partnership-property-distribution-scene-03-order-0" style={{position:'absolute',left:70,top:50,width:360,padding:'9px 14px',background:COLORS.paper,border:'3px solid '+COLORS.blue,fontSize:20,fontWeight:900,color:COLORS.blue,opacity:enter(28,50)}}>1 合伙协议约定优先</div>
          <div data-final-knowledge="partnership-property-distribution-scene-03-order-1" style={{position:'absolute',left:100,top:130,width:330,padding:'9px 14px',background:COLORS.paper,border:'3px solid '+COLORS.blue,fontSize:20,fontWeight:900,color:COLORS.blue,opacity:enter(40,62)}}>2 协商确定</div>
          <div data-final-knowledge="partnership-property-distribution-scene-03-order-2" style={{position:'absolute',left:130,top:210,width:300,padding:'9px 14px',background:COLORS.paper,border:'3px solid '+COLORS.blue,fontSize:20,fontWeight:900,color:COLORS.blue,opacity:enter(52,74)}}>3 实缴出资比例</div>
          <div data-final-knowledge="partnership-property-distribution-scene-03-order-3" data-stateful-terminal="profit-distribution-travel" style={{position:'absolute',left:160,top:290,width:270,padding:'9px 14px',background:COLORS.paper,border:'3px solid '+COLORS.blue,fontSize:20,fontWeight:900,color:COLORS.blue,opacity:enter(64,86)}}>4 平均分担</div>
          <div data-stateful-source="profit-distribution-travel" style={{position:'absolute',left:36,top:coinY,padding:'7px 13px',background:COLORS.gold,color:COLORS.paper,fontSize:19,fontWeight:900,opacity:enter(30,48),boxShadow:'4px 4px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:7}}>
            <CircleDollarSign size={22} color={COLORS.paper}/>利润·亏损
          </div>
          <div style={{position:'absolute',left:44,top:92,width:5,height:interpolate(frame,[44,180],[0,400],CLAMP),background:COLORS.ink,opacity:0.35}}/>
        </div>
        <div style={{fontSize:19,fontWeight:800,color:COLORS.blue,marginTop:6,opacity:enter(88,110)}}>有约定从约定，没有约定才逐级后退</div>
      </div>
      <div data-final-knowledge="partnership-property-distribution-scene-03-gp-rule" style={{position:'absolute',left:590,top:0,width:1178,height:270,padding:'16px 22px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:10,opacity:enter(26,52),translate:interpolate(frame,[26,52],['240px 0px','0px 0px'],CLAMP)}}>
        <Smile size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:12,fontSize:24,fontWeight:900}}>
          <Users size={30} color={COLORS.copper}/><span style={{color:COLORS.copper}}>普通合伙企业</span>
          <span style={{padding:'6px 14px',background:COLORS.copper,color:COLORS.paper,fontSize:20,fontWeight:900,transform:'rotate(-2deg)'}}>有福必同享</span>
          <span style={{padding:'6px 14px',background:COLORS.red,color:COLORS.paper,fontSize:20,fontWeight:900,transform:'rotate(2deg)'}}>有难必同当</span>
        </div>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(42,64)}>不得约定将<span style={{fontWeight:900,color:COLORS.red}}>全部利润</span>分配给部分合伙人</FactRow>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(52,74)}>不得约定由部分合伙人承担<span style={{fontWeight:900,color:COLORS.red}}>全部亏损</span></FactRow>
      </div>
      <div data-final-knowledge="partnership-property-distribution-scene-03-lp-rule" style={{position:'absolute',left:590,top:290,width:1178,height:270,padding:'16px 22px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:10,opacity:enter(42,68),translate:interpolate(frame,[42,68],['240px 0px','0px 0px'],CLAMP)}}>
        <TrendingDown size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:12,fontSize:24,fontWeight:900}}>
          <Users size={30} color={COLORS.teal}/><span style={{color:COLORS.teal}}>有限合伙企业</span>
          <span style={{padding:'6px 14px',background:COLORS.teal,color:COLORS.paper,fontSize:20,fontWeight:900,transform:'rotate(-2deg)'}}>有福可不同享</span>
          <span style={{padding:'6px 14px',background:COLORS.red,color:COLORS.paper,fontSize:20,fontWeight:900,transform:'rotate(2deg)'}}>有难必同当</span>
        </div>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(58,80)}><span style={{fontWeight:900,color:COLORS.teal}}>可以</span>约定将全部利润分配给部分合伙人</FactRow>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(68,90)}>但不得约定由部分合伙人承担<span style={{fontWeight:900,color:COLORS.red}}>全部亏损</span></FactRow>
      </div>
      <div data-final-knowledge="partnership-property-distribution-scene-03-recap" style={{position:'absolute',left:0,right:0,top:582,bottom:0,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.ink,background:COLORS.paper,padding:'12px 24px',opacity:enter(96,122)}}>
        <Smile size={32} color={COLORS.gold}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.5}}>利润分配：<span style={{fontWeight:900,color:COLORS.copper}}>普通合伙必同享</span>，<span style={{fontWeight:900,color:COLORS.teal}}>有限合伙可不同享</span>；亏损分担：两种合伙都<span style={{fontWeight:900,color:COLORS.red}}>必同当</span></div>
      </div>
    </div>
  </Shell>;
};

export const PartnershipPropertyDistribution=()=> <AbsoluteFill>
  <TimelineSequence name="01-partnership-property-distribution-scene-01" start={SCENES['partnership-property-distribution-scene-01'].start} duration={SCENES['partnership-property-distribution-scene-01'].duration}><PartnershipPropertyDistribution01Scene/></TimelineSequence>
  <TimelineSequence name="02-partnership-property-distribution-scene-02" start={SCENES['partnership-property-distribution-scene-02'].start} duration={SCENES['partnership-property-distribution-scene-02'].duration}><PartnershipPropertyDistribution02Scene/></TimelineSequence>
  <TimelineSequence name="03-partnership-property-distribution-scene-03" start={SCENES['partnership-property-distribution-scene-03'].start} duration={SCENES['partnership-property-distribution-scene-03'].duration}><PartnershipPropertyDistribution03Scene/></TimelineSequence>
</AbsoluteFill>;
