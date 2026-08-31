import type {ReactNode} from 'react';
import {Car, Send, FileSignature, TrendingUp, Gavel, Users, Handshake, Coins, Undo2, Ban, Scale, Landmark, AlertTriangle, Check, Heart, Split, Receipt, BadgeCheck, Stamp} from 'lucide-react';
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

export const PropertyInsurance01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const carX=interpolate(frame,[46,104],[120,1180],CLAMP);
  return <Shell code="26.1" title="保险标的的转让">
    <div data-layout="subject-transfer-track-1" data-visual-anchor="flow-path" data-visual-grammar="transfer-track,notice-gate" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="property-insurance-scene-01-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div style={{position:'absolute',left:80,top:210,width:1610,height:6,background:COLORS.ink,transformOrigin:'left center',transform:'scaleX('+interpolate(frame,[30,66],[0,1],CLAMP)+')'}}/>
      <div data-stateful-source="insured-subject-transfer" style={{position:'absolute',left:carX,top:150,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.copper,fontSize:20,fontWeight:900,color:COLORS.copper,opacity:enter(36,56),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Car size={24} color={COLORS.copper}/>保险标的（被保险车）
      </div>
      <div data-final-knowledge="property-insurance-scene-01-notice" style={{position:'absolute',left:0,top:234,width:500,height:190,padding:'12px 16px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(48,72)}}>
        <Send size={90} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:2,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:22,fontWeight:900,color:COLORS.teal}}><Send size={26} color={COLORS.teal}/>及时通知</div>
        <div style={{fontSize:19,fontWeight:800,lineHeight:1.4}}>被保险人/受让人通知保险人；<span style={{fontWeight:900 }}>通知后答复前出险 → 应赔</span></div>
      </div>
      <div data-final-knowledge="property-insurance-scene-01-succession" data-stateful-terminal="insured-subject-transfer" style={{position:'absolute',left:530,top:234,width:500,height:190,padding:'12px 16px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(58,82)}}>
        <FileSignature size={90} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:2,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:22,fontWeight:900,color:COLORS.copper}}><FileSignature size={26} color={COLORS.copper}/>权利义务继受</div>
        <div style={{fontSize:19,fontWeight:800,lineHeight:1.4}}>受让人承继被保险人的权利义务；保险人已向投保人<span style={{fontWeight:900 }}>提示和明确说明</span>的，<span style={{fontWeight:900,color:COLORS.red }}>无义务</span>向受让人再次提示——免责条款抗辩 <span style={{fontWeight:900 }}>(×)</span></div>
      </div>
      <div data-final-knowledge="property-insurance-scene-01-risk" style={{position:'absolute',left:1060,top:234,width:708,height:190,padding:'12px 16px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(68,92)}}>
        <TrendingUp size={90} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:2,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:22,fontWeight:900,color:COLORS.red}}><TrendingUp size={26} color={COLORS.red}/>危险程度显著增加</div>
        <div style={{fontSize:19,fontWeight:800,lineHeight:1.4}}>未通知 → <span style={{fontWeight:900,color:COLORS.red }}>不赔</span>；保险人收到通知 <span style={{fontWeight:900 }}>30日内</span>可<span style={{fontWeight:900 }}>增加保费或解除</span>，解除的退部分保费</div>
      </div>
      <div data-final-knowledge="property-insurance-knowledge-1" style={{position:'absolute',left:0,top:452,width:1768,height:240,padding:'14px 22px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(86,112),translate:interpolate(frame,[86,112],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Stamp size={30} color={COLORS.copper}/>转让三站一线记</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(100,122)}>通知义务在<span style={{fontWeight:900 }}>被保险人与受让人</span>——答复前出险照样赔</FactRow>
          <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(110,132)}>危险显著增加<span style={{fontWeight:900 }}>未通知</span>出险 → 保险人<span style={{fontWeight:900,color:COLORS.red }}>不赔</span></FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const PropertyInsurance02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const claimX=interpolate(frame,[56,110],[520,1180],CLAMP);
  return <Shell code="26.2" title="责任保险：赔第三者不赔自己">
    <div data-layout="liability-payout-routing-2" data-visual-anchor="flow-target" data-visual-grammar="thirdparty-routing,joinguilt-priority" data-text-treatments="chip,external-negation,soft-highlight" data-focal-rule="property-insurance-scene-02-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="property-insurance-scene-02-concept" style={{position:'absolute',left:0,top:0,width:864,height:240,padding:'14px 20px',border:'5px solid '+COLORS.indigo,background:COLORS.indigo+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <Gavel size={120} color={COLORS.indigo} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.indigo}}><Gavel size={30} color={COLORS.indigo}/>责任保险</div>
        <FactRow color={COLORS.indigo} icon={<Users size={24} color={COLORS.indigo}/>} enter={enter(26,48)}>以被保险人依法对<span style={{fontWeight:900,background:COLORS.indigo+'26',padding:'1px 6px'}}>第三者应负的赔偿责任</span>为标的——交强险、第三者责任险</FactRow>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(36,58)}>小张撞护栏伤行人又自己车毁人伤：自己的看病修车费<span style={{fontWeight:900,color:COLORS.red }}>无权主张</span>，只赔<span style={{fontWeight:900 }}>护栏维修费与小帅的损失</span></FactRow>
      </div>
      <div data-final-knowledge="property-insurance-scene-02-joinguilt" style={{position:'absolute',left:904,top:0,width:864,height:240,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <Users size={120} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Users size={30} color={COLORS.copper}/>共同侵权的连带责任</div>
        <FactRow color={COLORS.copper} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(40,62)}>保险人<span style={{fontWeight:900,color:COLORS.red }}>不得以超出其份额为由拒绝赔付</span>——有优先支付义务</FactRow>
        <FactRow color={COLORS.copper} icon={<Undo2 size={24} color={COLORS.copper}/>} enter={enter(50,72)}>担责后，可就<span style={{fontWeight:900 }}>超出被保险人责任份额</span>的部分向其他连带责任人<span style={{fontWeight:900 }}>追偿</span></FactRow>
      </div>
      <div data-stateful-source="thirdparty-claim-routing" style={{position:'absolute',left:claimX,top:262,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.teal,fontSize:20,fontWeight:900,color:COLORS.teal,opacity:enter(58,78),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Receipt size={24} color={COLORS.teal}/>第三者索赔
      </div>
      <div data-final-knowledge="property-insurance-knowledge-2" data-stateful-terminal="thirdparty-claim-routing" style={{position:'absolute',left:0,top:322,width:1768,height:370,padding:'14px 22px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(66,92),translate:interpolate(frame,[66,92],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.teal}}><Handshake size={30} color={COLORS.teal}/>赔付路由——谁请求、赔给谁</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
          <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(80,102)}>经<span style={{fontWeight:900 }}>被保险人请求</span> → 保险人应当<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>直接向第三者赔偿</span></FactRow>
          <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(88,110)}>被保险人<span style={{fontWeight:900 }}>怠于请求</span> → 第三者<span style={{fontWeight:900 }}>有权直接</span>向保险人请求——"乙可直接找保险公司"须以怠于请求为前提 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
          <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(96,118)}>被保险人<span style={{fontWeight:900 }}>未向第三者赔偿</span> → 保险人<span style={{fontWeight:900,color:COLORS.red }}>不得向被保险人赔偿</span>；已赔的<span style={{fontWeight:900,color:COLORS.red }}>不得拒绝第三者</span>，并可请求被保险人<span style={{fontWeight:900 }}>返还</span></FactRow>
          <FactRow color={COLORS.gold} icon={<Handshake size={24} color={COLORS.gold}/>} enter={enter(104,126)}>和解：经保险人<span style={{fontWeight:900 }}>认可</span>按协议赔；<span style={{fontWeight:900,color:COLORS.red }}>未认可</span> → 保险人可<span style={{fontWeight:900 }}>重新核定</span>必要合理费用</FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const PropertyInsurance03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const subX=interpolate(frame,[52,110],[420,1120],CLAMP);
  return <Shell code="26.3" title="代位求偿权：以自己的名义">
    <div data-layout="subrogation-lane-3" data-visual-anchor="flow-path" data-visual-grammar="subrogation-lane,waive-window-split" data-text-treatments="chip,stamp,thin-underline" data-focal-rule="property-insurance-scene-03-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="property-insurance-scene-03-concept" style={{position:'absolute',left:0,top:0,width:864,height:230,padding:'14px 20px',border:'5px solid '+COLORS.indigo,background:COLORS.indigo+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <Undo2 size={120} color={COLORS.indigo} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.indigo}}><Undo2 size={30} color={COLORS.indigo}/>什么是代位求偿权</div>
        <FactRow color={COLORS.indigo} icon={<Coins size={24} color={COLORS.indigo}/>} enter={enter(26,48)}>财产险中，保险人<span style={{fontWeight:900 }}>赔偿被保险人损失后</span>，在赔付限度内以<span style={{fontWeight:900,background:COLORS.indigo+'26',padding:'1px 6px'}}>自己的名义</span>向侵权第三者追偿——"也可用甲的名义" <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
      </div>
      <div data-final-knowledge="property-insurance-scene-03-requirements" style={{position:'absolute',left:904,top:0,width:864,height:230,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <Scale size={120} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.teal}}><Scale size={30} color={COLORS.teal}/>行使要求</div>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(40,62)}>被保险人<span style={{fontWeight:900 }}>已从第三者获赔</span> → 赔保险金时可<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>相应扣减</span>——乙全额赔过，丙可拒赔 <span style={{fontWeight:900 }}>(√)</span></FactRow>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(50,72)}>代位<span style={{fontWeight:900 }}>不影响</span>被保险人就<span style={{fontWeight:900 }}>未获赔部分</span>继续向第三者请求</FactRow>
      </div>
      <div data-stateful-source="subrogation-claim-travel" style={{position:'absolute',left:subX,top:248,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.indigo,fontSize:20,fontWeight:900,color:COLORS.indigo,opacity:enter(58,78),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Undo2 size={24} color={COLORS.indigo}/>保险人代位追偿
      </div>
      <div data-final-knowledge="property-insurance-knowledge-3" data-stateful-terminal="subrogation-claim-travel" style={{position:'absolute',left:0,top:308,width:1768,height:384,padding:'14px 22px',border:'5px solid '+COLORS.red,background:COLORS.red+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(66,92),translate:interpolate(frame,[66,92],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.red}}><AlertTriangle size={30} color={COLORS.red}/>被保险人放弃权利 与 重复赔偿</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
          <FactRow color={COLORS.gold} icon={<FileSignature size={24} color={COLORS.gold}/>} enter={enter(80,102)}><span style={{fontWeight:900 }}>合同订立前</span>放弃：弃权<span style={{fontWeight:900,color:COLORS.teal }}>有效</span>，保险人不能就放弃部分代位；被询问须<span style={{fontWeight:900 }}>如实告知</span>，隐瞒致不能代位 → 请求<span style={{fontWeight:900 }}>返还相应保险金</span></FactRow>
          <FactRow color={COLORS.red} icon={<Split size={24} color={COLORS.red}/>} enter={enter(88,110)}><span style={{fontWeight:900 }}>事故发生后</span>：<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>赔付前放弃 → 保险人不担责</span>；<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>赔付后放弃 → 放弃无效</span>——赔付前甲放弃，丙仍需赔 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
          <FactRow color={COLORS.copper} icon={<Coins size={24} color={COLORS.copper}/>} enter={enter(96,118)}><span style={{fontWeight:900 }}>未通知</span>第三者又获赔：保险人<span style={{fontWeight:900,color:COLORS.red }}>不可再代位</span>，可请求被保险人<span style={{fontWeight:900 }}>返还保险金</span></FactRow>
          <FactRow color={COLORS.copper} icon={<Send size={24} color={COLORS.copper}/>} enter={enter(104,126)}><span style={{fontWeight:900 }}>已通知</span>第三者：第三者仍赔被保险人的，保险人<span style={{fontWeight:900,color:COLORS.teal }}>可主张代位</span>，第三者可要求被保险人<span style={{fontWeight:900 }}>返还赔偿金</span></FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const PropertyInsurance04Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="26.4" title="适用除外：家庭共同体不可追">
    <div data-layout="family-exclusion-hall-4" data-visual-anchor="concept-icon" data-visual-grammar="exclusion-gate,principle-anchor" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="property-insurance-scene-04-rule" data-focal-channels="contrast,icon,annotation" style={{position:'absolute',inset:0}}>
      <Heart size={170} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',left:'50%',top:250,translate:'-50% 0',opacity:0.06,pointerEvents:'none'}}/>
      <div data-final-knowledge="property-insurance-scene-04-exclusion" style={{position:'absolute',left:0,top:0,width:1768,height:300,padding:'16px 24px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:10,opacity:enter(10,36)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.teal}}><Heart size={30} color={COLORS.teal}/>代位求偿的适用除外</div>
        <FactRow color={COLORS.teal} icon={<Users size={24} color={COLORS.teal}/>} enter={enter(24,46)}>第三者是<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>被保险人的家庭成员或组成人员</span> + <span style={{fontWeight:900 }}>非故意</span> → <span style={{fontWeight:900,color:COLORS.red }}>不可代位求偿</span></FactRow>
        <FactRow color={COLORS.copper} icon={<Scale size={24} color={COLORS.copper}/>} enter={enter(34,56)}>原理：成员之间是<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>利益共同体</span>——追偿等于把赔偿取回，保险目的<span style={{fontWeight:900,color:COLORS.red }}>落空</span></FactRow>
      </div>
      <div data-final-knowledge="insurance-property-knowledge-4" style={{position:'absolute',left:0,top:324,width:1768,height:300,padding:'16px 24px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:10,opacity:enter(46,72),translate:interpolate(frame,[46,72],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><BadgeCheck size={30} color={COLORS.copper}/>解题大招四连</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
          <FactRow color={COLORS.indigo} icon={<Undo2 size={24} color={COLORS.indigo}/>} enter={enter(60,82)}><span style={{fontWeight:900 }}>以自己名义</span>行使代位求偿权</FactRow>
          <FactRow color={COLORS.red} icon={<Heart size={24} color={COLORS.red}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>家庭成员非故意，不可追</span></FactRow>
          <FactRow color={COLORS.gold} icon={<Split size={24} color={COLORS.gold}/>} enter={enter(76,98)}><span style={{fontWeight:900 }}>赔付前放弃</span> → 保险人不担责</FactRow>
          <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(84,106)}><span style={{fontWeight:900 }}>赔付后放弃</span> → 放弃<span style={{fontWeight:900,color:COLORS.red }}>无效</span></FactRow>
        </div>
      </div>
      <div style={{position:'absolute',left:0,right:0,top:648,bottom:0,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.ink,background:COLORS.paper,padding:'12px 24px',opacity:enter(96,122)}}>
        <Landmark size={32} color={COLORS.ink}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.5}}>判例复盘：乙摔毁甲的藏画——丙赔甲后<span style={{fontWeight:900,color:COLORS.red }}>不能以甲的名义</span>追乙；赔付前甲弃权则<span style={{fontWeight:900,color:COLORS.red }}>丙不担责</span>；乙已全额赔甲则<span style={{fontWeight:900,color:COLORS.teal }}>丙可拒赔</span></div>
      </div>
    </div>
  </Shell>;
};

export const PropertyInsurance=()=> <AbsoluteFill>
  <TimelineSequence name="01-property-insurance-scene-01" start={SCENES['property-insurance-scene-01'].start} duration={SCENES['property-insurance-scene-01'].duration}><PropertyInsurance01Scene/></TimelineSequence>
  <TimelineSequence name="02-property-insurance-scene-02" start={SCENES['property-insurance-scene-02'].start} duration={SCENES['property-insurance-scene-02'].duration}><PropertyInsurance02Scene/></TimelineSequence>
  <TimelineSequence name="03-property-insurance-scene-03" start={SCENES['property-insurance-scene-03'].start} duration={SCENES['property-insurance-scene-03'].duration}><PropertyInsurance03Scene/></TimelineSequence>
  <TimelineSequence name="04-property-insurance-scene-04" start={SCENES['property-insurance-scene-04'].start} duration={SCENES['property-insurance-scene-04'].duration}><PropertyInsurance04Scene/></TimelineSequence>
</AbsoluteFill>;
