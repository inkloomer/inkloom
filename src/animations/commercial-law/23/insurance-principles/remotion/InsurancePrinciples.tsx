import type {ReactNode} from 'react';
import {Shield, Ban, Car, Heart, Scale, Users, Briefcase, Handshake, Eye, AlertTriangle, HelpCircle, Coins, Megaphone, FileSignature, BadgeCheck, Split, Check, Stamp, Baby, Landmark} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#F0ECE4', ink:'#2B2B33', indigo:'#2C4A6E', copper:'#8A4B2F', teal:'#15725F', red:'#B23A30', gold:'#B98A2F', paper:'#FAF6EC'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.indigo,color:COLORS.paper}}>{code}</div>
    <div style={{position:'absolute',left:190,right:76,top:46,fontSize:46,fontWeight:900,lineHeight:1.12,borderBottom:'5px solid '+COLORS.indigo,paddingBottom:12}}>{title}</div>
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

export const InsurancePrinciples01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="23.1" title="保险利益：财保看发生，人保看订立">
    <div data-layout="interest-time-fork-1" data-visual-anchor="document-fork" data-visual-grammar="time-fork-split,three-quality-badges" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="insurance-principles-scene-01-rule" data-focal-channels="contrast,connector,icon" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="insurance-principles-scene-01-concept" style={{position:'absolute',left:0,top:0,width:1768,height:130,padding:'12px 22px',border:'5px solid '+COLORS.indigo,background:COLORS.indigo+'59',display:'flex',alignItems:'center',gap:14,opacity:enter(10,36)}}>
        <Shield size={120} color={COLORS.indigo} strokeWidth={1.2} style={{position:'absolute',right:6,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <Shield size={32} color={COLORS.indigo}/>
        <div style={{fontSize:23,fontWeight:900}}>投保人或被保险人对保险标的有<span style={{fontWeight:900,background:COLORS.indigo+'26',padding:'1px 6px'}}>法律承认的利益</span>，否则保险合同<span style={{fontWeight:900,color:COLORS.red}}>无效</span></div>
        <div style={{marginLeft:'auto',display:'flex',gap:10}}>
          <Chip color={COLORS.teal} text="合法性"/>
          <Chip color={COLORS.teal} text="经济性"/>
          <Chip color={COLORS.teal} text="确定性"/>
        </div>
      </div>
      <div data-final-knowledge="insurance-principles-scene-01-fork" style={{position:'absolute',left:860,top:130,width:8,height:interpolate(frame,[28,58],[0,44],CLAMP),background:COLORS.ink}}/>
      <div style={{position:'absolute',left:290,top:174,width:1200,height:6,background:COLORS.ink,transformOrigin:'left center',transform:'scaleX('+interpolate(frame,[54,86],[0,1],CLAMP)+')'}}/>
      <div style={{position:'absolute',left:282,top:164,width:0,height:0,borderTop:'15px solid transparent',borderBottom:'15px solid transparent',borderLeft:'19px solid '+COLORS.copper,opacity:enter(82,96)}}/>
      <div style={{position:'absolute',left:1478,top:164,width:0,height:0,borderTop:'15px solid transparent',borderBottom:'15px solid transparent',borderLeft:'19px solid '+COLORS.teal,opacity:enter(82,96)}}/>
      <div data-final-knowledge="insurance-principles-scene-01-property" style={{position:'absolute',left:0,top:198,width:864,height:250,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(76,102),translate:interpolate(frame,[76,102],['-220px 0px','0px 0px'],CLAMP)}}>
        <Car size={120} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}>
          <Car size={30} color={COLORS.copper}/>财产险
          <span style={{padding:'6px 14px',background:COLORS.copper,color:COLORS.paper,fontSize:20,fontWeight:900,transform:'rotate(-2deg)'}}>财保看发生</span>
        </div>
        <FactRow color={COLORS.copper} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(90,112)}>被保险人对保险标的在<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>保险事故发生时</span>具有保险利益（所有权人、经营人、保管人等）</FactRow>
        <FactRow color={COLORS.indigo} icon={<Car size={24} color={COLORS.indigo}/>} enter={enter(100,122)}>例：甲买车投保后转卖乙，行车出事故——发生时甲<span style={{fontWeight:900,color:COLORS.red}}>无</span>保险利益、乙<span style={{fontWeight:900,color:COLORS.teal}}>有</span></FactRow>
      </div>
      <div data-final-knowledge="insurance-principles-scene-01-personal" style={{position:'absolute',left:904,top:198,width:864,height:250,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(88,114),translate:interpolate(frame,[88,114],['220px 0px','0px 0px'],CLAMP)}}>
        <Heart size={120} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.teal}}>
          <Heart size={30} color={COLORS.teal}/>人身险
          <span style={{padding:'6px 14px',background:COLORS.teal,color:COLORS.paper,fontSize:20,fontWeight:900,transform:'rotate(2deg)'}}>人保看订立</span>
        </div>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(102,124)}>投保人对被保险人在<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>合同订立时</span>应当具有保险利益</FactRow>
        <FactRow color={COLORS.indigo} icon={<Heart size={24} color={COLORS.indigo}/>} enter={enter(112,134)}>例：给丈夫投保后离婚出险——订立时有利益，合同<span style={{fontWeight:900,color:COLORS.teal}}>有效</span>；给前夫投保——订立时无利益，<span style={{fontWeight:900,color:COLORS.red}}>无效</span></FactRow>
      </div>
      <div data-final-knowledge="insurance-principles-knowledge-1" style={{position:'absolute',left:0,right:0,top:468,bottom:0,display:'flex',alignItems:'center',gap:18,border:'4px solid '+COLORS.gold,background:COLORS.gold+'66',padding:'12px 24px',opacity:enter(120,146)}}>
        <Stamp size={34} color={COLORS.ink}/>
        <div>
          <div style={{fontSize:23,fontWeight:900,letterSpacing:2}}>大招：财保看发生，人保看订立</div>
          <div style={{fontSize:20,fontWeight:800,marginTop:4,opacity:enter(130,152)}}>彩票不确定、毒品非法、恋爱无法用金钱评估——<span style={{fontWeight:900,color:COLORS.red}}>保险利益欠缺</span>，不得投保 <span style={{fontWeight:900}}>(×)</span></div>
        </div>
      </div>
    </div>
  </Shell>;
};

export const InsurancePrinciples02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="23.2" title="可为哪些人投保">
    <div data-layout="insurable-persons-ladder-2" data-visual-anchor="typographic-sequence" data-visual-grammar="person-ladder,consent-seal" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="insurance-principles-scene-02-rule" data-focal-channels="icon,spatial,contrast" style={{position:'absolute',inset:0}}>
      <Users size={170} color={COLORS.indigo} strokeWidth={1.2} style={{position:'absolute',left:'50%',top:300,translate:'-50% 0',opacity:0.06,pointerEvents:'none'}}/>
      <div data-final-knowledge="insurance-principles-scene-02-list" style={{position:'absolute',left:0,top:0,width:1120,height:560,padding:'16px 22px',border:'5px solid '+COLORS.indigo,background:COLORS.indigo+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:10,opacity:enter(10,36)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.indigo}}><Users size={30} color={COLORS.indigo}/>法定利益主义 + 同意主义</div>
        <FactRow color={COLORS.indigo} icon={<BadgeCheck size={24} color={COLORS.indigo}/>} enter={enter(24,46)}>① <span style={{fontWeight:900}}>本人</span></FactRow>
        <FactRow color={COLORS.indigo} icon={<Baby size={24} color={COLORS.indigo}/>} enter={enter(32,54)}>② <span style={{fontWeight:900}}>配偶、子女、父母</span></FactRow>
        <FactRow color={COLORS.indigo} icon={<Users size={24} color={COLORS.indigo}/>} enter={enter(40,62)}>③ 其他与投保人有<span style={{fontWeight:900,background:COLORS.indigo+'26',padding:'1px 6px'}}>抚养、赡养或扶养关系</span>的家庭成员、近亲属</FactRow>
        <FactRow color={COLORS.copper} icon={<Briefcase size={24} color={COLORS.copper}/>} enter={enter(48,70)}>④ 与投保人有<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>劳动关系</span>的劳动者</FactRow>
        <FactRow color={COLORS.teal} icon={<Handshake size={24} color={COLORS.teal}/>} enter={enter(56,78)}>⑤ <span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>经被保险人同意</span>——同意即可为任何人投保</FactRow>
      </div>
      <div data-final-knowledge="insurance-principles-knowledge-2" style={{position:'absolute',left:1144,top:0,width:624,height:560,padding:'16px 22px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:10,opacity:enter(30,56),translate:interpolate(frame,[30,56],['220px 0px','0px 0px'],CLAMP)}}>
        <Stamp size={120} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Stamp size={30} color={COLORS.copper}/>记忆锚</div>
        <div style={{fontSize:26,fontWeight:900,letterSpacing:3,background:COLORS.paper,border:'4px solid '+COLORS.copper,padding:'14px 18px',textAlign:'center'}}>亲属 · 劳动 · 加同意</div>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(66,88)}>为前夫投保意外险——订立时<span style={{fontWeight:900,color:COLORS.red}}>无保险利益</span>，合同无效</FactRow>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(76,98)}>离婚后妻子主张保险利益——订立时是夫妻，<span style={{fontWeight:900,color:COLORS.teal}}>有权主张</span> <span style={{fontWeight:900}}>(×)</span></FactRow>
      </div>
      <div style={{position:'absolute',left:0,right:0,top:584,bottom:0,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.ink,background:COLORS.paper,padding:'12px 24px',opacity:enter(104,130)}}>
        <Scale size={32} color={COLORS.ink}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.5}}>亲属靠<span style={{fontWeight:900}}>身份</span>，劳动者靠<span style={{fontWeight:900}}>劳动关系</span>，其他任何人靠<span style={{fontWeight:900}}>被保险人同意</span>——法定利益与同意双轨并行</div>
      </div>
    </div>
  </Shell>;
};

export const InsurancePrinciples03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="23.3" title="最大诚信：告知 与 提示说明">
    <div data-layout="goodfaith-dual-duty-3" data-visual-anchor="role-pair" data-visual-grammar="disclosure-severity-ladder,warning-duty-band" data-text-treatments="chip,external-negation,soft-highlight" data-focal-rule="insurance-principles-scene-03-rule" data-focal-channels="contrast,icon,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="insurance-principles-scene-03-disclosure" style={{position:'absolute',left:0,top:0,width:864,height:600,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <Eye size={130} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Eye size={30} color={COLORS.copper}/>投保人如实告知义务</div>
        <FactRow color={COLORS.copper} icon={<Scale size={24} color={COLORS.copper}/>} enter={enter(26,48)}>范围<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>限于保险人询问</span>——概括性条款不算问，除非有具体内容；体检<span style={{fontWeight:900}}>不免除</span>告知义务</FactRow>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(36,58)}><span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>故意</span>不如实告知 → 解除 + <span style={{fontWeight:900,color:COLORS.red}}>不赔偿 + 不退费</span></FactRow>
        <FactRow color={COLORS.gold} icon={<HelpCircle size={24} color={COLORS.gold}/>} enter={enter(46,68)}><span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>重大过失</span>且足以影响承保或保费 → 解除 + 不赔偿 + <span style={{fontWeight:900,color:COLORS.teal}}>要退费</span>——例：不知孩子刚做完大手术</FactRow>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(56,78)}>保险人<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>明知仍收保费</span> → <span style={{fontWeight:900,color:COLORS.red}}>不能解除</span>，应当赔偿——隐瞒心脏病史仍收费 <span style={{fontWeight:900}}>(×)</span></FactRow>
        <div style={{display:'flex',alignItems:'center',gap:12,opacity:enter(66,88)}}>
          <Chip color={COLORS.red} text="故意：不赔不退"/>
          <Chip color={COLORS.gold} text="重大过失：不赔应退"/>
        </div>
      </div>
      <div data-final-knowledge="insurance-principles-scene-03-warning" style={{position:'absolute',left:904,top:0,width:864,height:600,padding:'14px 20px',border:'5px solid '+COLORS.indigo,background:COLORS.indigo+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <Megaphone size={130} color={COLORS.indigo} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.indigo}}><Megaphone size={30} color={COLORS.indigo}/>保险公司提示说明义务</div>
        <FactRow color={COLORS.indigo} icon={<FileSignature size={24} color={COLORS.indigo}/>} enter={enter(40,62)}>免责条款应<span style={{fontWeight:900,background:COLORS.indigo+'26',padding:'1px 6px'}}>提示 + 说明</span>，否则该条款<span style={{fontWeight:900,color:COLORS.red}}>不产生效力</span>（保险人负举证责任）</FactRow>
        <FactRow color={COLORS.gold} icon={<AlertTriangle size={24} color={COLORS.gold}/>} enter={enter(50,72)}>法律法规<span style={{fontWeight:900}}>禁止性规定</span>（酒驾、醉驾）作为免责事由：作出<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>提示后无须再明确说明</span></FactRow>
        <FactRow color={COLORS.teal} icon={<Eye size={24} color={COLORS.teal}/>} enter={enter(60,82)}><span style={{fontWeight:900}}>提示方式</span>：足以引起注意的文字、字体、符号等明显标志</FactRow>
        <FactRow color={COLORS.teal} icon={<Megaphone size={24} color={COLORS.teal}/>} enter={enter(70,92)}><span style={{fontWeight:900}}>说明方式</span>：网络、电话订立时以<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>网页、音频、视频</span>提示和说明</FactRow>
      </div>
      <div data-final-knowledge="insurance-principles-knowledge-3" style={{position:'absolute',left:0,right:0,top:620,bottom:0,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.gold,background:COLORS.paper,padding:'12px 24px',opacity:enter(102,128)}}>
        <BadgeCheck size={32} color={COLORS.ink}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.5}}>双向诚信：投保人<span style={{fontWeight:900,color:COLORS.copper }}>如实告知</span>（问才答、故意重罚），保险人<span style={{fontWeight:900,color:COLORS.indigo }}>免责条款先提示</span>——法定禁止事由提示即可</div>
      </div>
    </div>
  </Shell>;
};

export const InsurancePrinciples=()=> <AbsoluteFill>
  <TimelineSequence name="01-insurance-principles-scene-01" start={SCENES['insurance-principles-scene-01'].start} duration={SCENES['insurance-principles-scene-01'].duration}><InsurancePrinciples01Scene/></TimelineSequence>
  <TimelineSequence name="02-insurance-principles-scene-02" start={SCENES['insurance-principles-scene-02'].start} duration={SCENES['insurance-principles-scene-02'].duration}><InsurancePrinciples02Scene/></TimelineSequence>
  <TimelineSequence name="03-insurance-principles-scene-03" start={SCENES['insurance-principles-scene-03'].start} duration={SCENES['insurance-principles-scene-03'].duration}><InsurancePrinciples03Scene/></TimelineSequence>
</AbsoluteFill>;
