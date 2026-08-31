import type {ReactNode} from 'react';
import {UserPlus, FileSignature, UserCheck, Users, Check, Ban, LogOut, Scale, Coins, AlertTriangle, Skull, TrendingDown, UserX, Mail, Gavel, ArrowLeftRight, Stamp, Hourglass, DoorOpen} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#EDEAE1', ink:'#2B2B33', indigo:'#3B4A6B', copper:'#8A4B2F', teal:'#15725F', red:'#B23A30', gold:'#B98A2F', paper:'#FAF6EC'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.indigo,color:COLORS.paper}}>{code}</div>
    <div style={{position:'absolute',left:190,right:76,top:46,fontSize:46,fontWeight:900,lineHeight:1.12,borderBottom:'5px solid '+COLORS.gold,paddingBottom:12}}>{title}</div>
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

export const PartnershipAdmissionWithdrawal01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const joinX=interpolate(frame,[40,92,106,158],[60,700,700,1180],CLAMP);
  return <Shell code="17.1" title="入伙：两道门与入伙前债务">
    <div data-layout="admission-gate-chain-1" data-visual-anchor="flow-path" data-visual-grammar="admission-gate-chain,prior-debt-contrast" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="partnership-admission-withdrawal-scene-01-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="admission-request-travel" style={{position:'absolute',left:joinX,top:24,padding:'9px 18px',background:COLORS.paper,border:'4px solid '+COLORS.indigo,fontSize:21,fontWeight:900,color:COLORS.indigo,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:9}}>
        <UserPlus size={26} color={COLORS.indigo}/>新合伙人甲
      </div>
      <div data-final-knowledge="partnership-admission-withdrawal-scene-01-procedure" style={{position:'absolute',left:0,top:90,width:1768,height:150,padding:'12px 22px',border:'5px solid '+COLORS.indigo,background:COLORS.indigo+'59',display:'flex',alignItems:'center',gap:14,opacity:enter(50,76)}}>
        <FileSignature size={110} color={COLORS.indigo} strokeWidth={1.2} style={{position:'absolute',right:6,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <Chip color={COLORS.copper} text="合伙协议约定优先"/>
        <div style={{fontSize:24,fontWeight:900,color:COLORS.indigo}}>→</div>
        <Chip color={COLORS.red} icon={<Users size={24} color={COLORS.red}/>} text="全体合伙人同意"/>
        <div style={{fontSize:24,fontWeight:900,color:COLORS.indigo}}>→</div>
        <div data-stateful-terminal="admission-request-travel" style={{display:'contents'}}><Chip color={COLORS.teal} icon={<FileSignature size={24} color={COLORS.teal}/>} text="书面入伙协议"/></div>
        <div style={{fontSize:20,fontWeight:800,color:COLORS.indigo,marginLeft:8}}>入伙程序缺一不可</div>
      </div>
      <div style={{position:'absolute',left:880,top:240,width:8,height:interpolate(frame,[96,126],[0,42],CLAMP),background:COLORS.ink}}/>
      <div style={{position:'absolute',left:870,top:278,width:0,height:0,borderTop:'15px solid transparent',borderBottom:'15px solid transparent',borderLeft:'19px solid '+COLORS.ink,opacity:enter(122,136)}}/>
      <div data-final-knowledge="partnership-admission-withdrawal-scene-01-prior-debt" style={{position:'absolute',left:0,top:306,width:1768,height:200,padding:'14px 22px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:10,opacity:enter(88,114),translate:interpolate(frame,[88,114],['0px 24px','0px 0px'],CLAMP)}}>
        <Scale size={120} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:12,fontSize:24,fontWeight:900,color:COLORS.copper}}>
          <Scale size={30} color={COLORS.copper}/>对入伙前的企业债务
          <span style={{padding:'6px 14px',background:COLORS.red,color:COLORS.paper,fontSize:20,fontWeight:900,transform:'rotate(-2deg)'}}>新普通合伙人：无限连带</span>
          <span style={{padding:'6px 14px',background:COLORS.teal,color:COLORS.paper,fontSize:20,fontWeight:900,transform:'rotate(2deg)'}}>新有限合伙人：以认缴出资额为限</span>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(102,124)}>“普通合伙人无须对入伙前债务担责” <span style={{fontWeight:900,color:COLORS.red}}>(×)</span>——入伙即背全部旧债</FactRow>
          <FactRow color={COLORS.indigo} icon={<Users size={24} color={COLORS.indigo}/>} enter={enter(112,134)}>“经全体普通合伙人同意即可” <span style={{fontWeight:900,color:COLORS.red}}>(×)</span>——无特别约定须<span style={{fontWeight:900}}>全体合伙人</span>同意</FactRow>
        </div>
      </div>
      <div data-final-knowledge="partnership-admission-withdrawal-knowledge-1" style={{position:'absolute',left:0,right:0,top:526,bottom:0,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.gold,background:COLORS.gold+'66',padding:'12px 24px',opacity:enter(122,148)}}>
        <Stamp size={32} color={COLORS.ink}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.5}}>小结：入伙须<span style={{fontWeight:900,color:COLORS.red}}>全体同意</span>+<span style={{fontWeight:900,color:COLORS.teal}}>书面协议</span>；新普通合伙人<span style={{fontWeight:900,color:COLORS.red}}>无限连带</span>，新有限合伙人<span style={{fontWeight:900,color:COLORS.teal}}>以认缴出资为限</span></div>
      </div>
    </div>
  </Shell>;
};

export const PartnershipAdmissionWithdrawal02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="17.2" title="退伙（上）：自愿退伙 与 除名退伙">
    <div data-layout="withdrawal-fork-two-2" data-visual-anchor="document-fork" data-visual-grammar="withdrawal-fork,expulsion-procedure" data-text-treatments="chip,external-negation,stamp" data-focal-rule="partnership-admission-withdrawal-scene-02-rule" data-focal-channels="contrast,connector,icon" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="partnership-admission-withdrawal-scene-02-root" style={{position:'absolute',left:604,top:0,width:560,height:86,padding:'12px 20px',border:'5px solid '+COLORS.ink,background:COLORS.paper,display:'flex',alignItems:'center',justifyContent:'center',gap:10,fontSize:24,fontWeight:900,opacity:enter(10,34)}}>
        <LogOut size={30} color={COLORS.ink}/>普通合伙人的退伙
      </div>
      <div style={{position:'absolute',left:880,top:86,width:8,height:interpolate(frame,[26,56],[0,40],CLAMP),background:COLORS.ink}}/>
      <div style={{position:'absolute',left:210,top:122,width:1376,height:6,background:COLORS.ink,transformOrigin:'left center',transform:'scaleX('+interpolate(frame,[52,84],[0,1],CLAMP)+')'}}/>
      <div style={{position:'absolute',left:202,top:112,width:0,height:0,borderTop:'15px solid transparent',borderBottom:'15px solid transparent',borderLeft:'19px solid '+COLORS.copper,opacity:enter(80,94)}}/>
      <div style={{position:'absolute',left:1578,top:112,width:0,height:0,borderTop:'15px solid transparent',borderBottom:'15px solid transparent',borderLeft:'19px solid '+COLORS.red,opacity:enter(80,94)}}/>
      <div data-final-knowledge="partnership-admission-withdrawal-scene-02-voluntary" style={{position:'absolute',left:0,top:148,width:864,height:330,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(76,102),translate:interpolate(frame,[76,102],['-220px 0px','0px 0px'],CLAMP)}}>
        <DoorOpen size={120} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><DoorOpen size={30} color={COLORS.copper}/>1 自愿退伙（声明退伙）</div>
        <FactRow color={COLORS.copper} icon={<FileSignature size={24} color={COLORS.copper}/>} enter={enter(90,112)}>约定合伙期限：<span style={{fontWeight:900}}>退伙事由出现 / 全体合伙人同意 / 难以继续参加合伙 / 其他合伙人严重违反约定义务</span></FactRow>
        <FactRow color={COLORS.copper} icon={<Hourglass size={24} color={COLORS.copper}/>} enter={enter(100,122)}>未约定合伙期限：<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>提前30日通知</span> + 不给企业事务造成不利影响——“随时退伙” <span style={{fontWeight:900,color:COLORS.red}}>(×)</span></FactRow>
      </div>
      <div data-final-knowledge="partnership-admission-withdrawal-scene-02-expulsion" style={{position:'absolute',left:904,top:148,width:864,height:330,padding:'14px 20px',border:'5px solid '+COLORS.red,background:COLORS.red+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(88,114),translate:interpolate(frame,[88,114],['220px 0px','0px 0px'],CLAMP)}}>
        <Ban size={120} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.red}}><Ban size={30} color={COLORS.red}/>2 除名退伙（开除退伙）</div>
        <div style={{display:'flex',flexWrap:'wrap',gap:8,opacity:enter(100,122)}}>
          <Chip color={COLORS.red} text="不出资"/>
          <Chip color={COLORS.red} text="大过错"/>
          <Chip color={COLORS.red} text="不正当"/>
          <Chip color={COLORS.red} text="约定事由"/>
        </div>
        <FactRow color={COLORS.red} icon={<Gavel size={24} color={COLORS.red}/>} enter={enter(110,132)}>程序：其他合伙人<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>一致同意</span> → 除名决议 + <span style={{fontWeight:900}}><Mail size={22} color={COLORS.red}/> 书面通知</span>；<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>接到通知之日生效</span>，异议 <span style={{fontWeight:900}}>30日内起诉</span></FactRow>
      </div>
      <div data-final-knowledge="partnership-admission-withdrawal-knowledge-2" style={{position:'absolute',left:0,right:0,top:498,bottom:0,display:'flex',alignItems:'center',gap:18,border:'4px solid '+COLORS.gold,background:COLORS.gold+'66',padding:'12px 24px',opacity:enter(126,152)}}>
        <Stamp size={34} color={COLORS.ink}/>
        <div>
          <div style={{fontSize:22,fontWeight:900}}>口诀：除名四情形——不出资、大过错、不正当、约定事由</div>
          <div style={{fontSize:20,fontWeight:800,marginTop:4,opacity:enter(136,158)}}>有限合伙人：<span style={{fontWeight:900,color:COLORS.red}}>自愿退伙、除名退伙均不适用</span></div>
        </div>
      </div>
    </div>
  </Shell>;
};

export const PartnershipAdmissionWithdrawal03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="17.3" title="退伙（下）：当然退伙 与 退伙效力">
    <div data-layout="automatic-withdrawal-events-3" data-visual-anchor="timeline-gate" data-visual-grammar="event-gate-row,capacity-conversion" data-text-treatments="chip,soft-highlight,stamp" data-focal-rule="partnership-admission-withdrawal-scene-03-rule" data-focal-channels="icon,contrast,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="partnership-admission-withdrawal-scene-03-events" style={{position:'absolute',left:0,top:0,width:1768,height:130,padding:'12px 22px',border:'5px solid '+COLORS.red,background:COLORS.red+'40',display:'flex',alignItems:'center',gap:16,opacity:enter(10,36)}}>
        <Skull size={34} color={COLORS.red}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.red}}>3 当然退伙——三情形自动触发</div>
        <Chip color={COLORS.red} icon={<Skull size={24} color={COLORS.red}/>} text="身死：死亡/宣告死亡，法人被吊销、关闭、撤销"/>
        <Chip color={COLORS.red} icon={<TrendingDown size={24} color={COLORS.red}/>} text="财灭：丧失偿债能力 / 全部份额被强执"/>
        <Chip color={COLORS.red} icon={<UserX size={24} color={COLORS.red}/>} text="无资格：丧失法定资格"/>
      </div>
      <div data-final-knowledge="partnership-admission-withdrawal-scene-03-conversion" style={{position:'absolute',left:0,top:154,width:1768,height:250,padding:'14px 22px',border:'5px solid '+COLORS.indigo,background:COLORS.indigo+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:10,opacity:enter(26,52),translate:interpolate(frame,[26,52],['0px 24px','0px 0px'],CLAMP)}}>
        <ArrowLeftRight size={120} color={COLORS.indigo} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.indigo}}><ArrowLeftRight size={30} color={COLORS.indigo}/>丧失民事行为能力与偿债能力的差别对待</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.copper} icon={<UserCheck size={24} color={COLORS.copper}/>} enter={enter(40,62)}>普通合伙人丧失行为能力：经其他合伙人<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>一致同意转为有限合伙人</span>，否则退伙——<span style={{fontWeight:900}}>先转后退</span></FactRow>
          <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(50,72)}>有限合伙人丧失行为能力：<span style={{fontWeight:900,color:COLORS.teal}}>不退伙</span>——丙丧失行为能力应退伙 <span style={{fontWeight:900,color:COLORS.red}}>(×)</span></FactRow>
          <FactRow color={COLORS.copper} icon={<AlertTriangle size={24} color={COLORS.copper}/>} enter={enter(60,82)}>普通合伙人<span style={{fontWeight:900}}>丧失偿债能力</span>：当然退伙</FactRow>
          <FactRow color={COLORS.teal} icon={<Coins size={24} color={COLORS.teal}/>} enter={enter(70,92)}>有限合伙人丧失偿债能力：<span style={{fontWeight:900,color:COLORS.teal}}>不退</span>；但<span style={{fontWeight:900,color:COLORS.red}}>全部份额被强执 → 退伙</span></FactRow>
        </div>
      </div>
      <div data-final-knowledge="partnership-admission-withdrawal-scene-03-effect" style={{position:'absolute',left:0,top:428,width:1768,height:170,padding:'14px 22px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:10,opacity:enter(60,86),translate:interpolate(frame,[60,86],['0px 24px','0px 0px'],CLAMP)}}>
        <Scale size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Scale size={30} color={COLORS.copper}/>4 退伙效力：退伙前原因发生的企业债务</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.red} icon={<UserCheck size={24} color={COLORS.red}/>} enter={enter(74,96)}>退伙的普通合伙人：<span style={{fontWeight:900,color:COLORS.red}}>无限连带责任</span></FactRow>
          <FactRow color={COLORS.teal} icon={<Coins size={24} color={COLORS.teal}/>} enter={enter(84,106)}>退伙的有限合伙人：<span style={{fontWeight:900,color:COLORS.teal}}>以取回的财产为限</span></FactRow>
        </div>
      </div>
      <div data-final-knowledge="partnership-admission-withdrawal-knowledge-3" style={{position:'absolute',left:0,right:0,top:618,bottom:0,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.gold,background:COLORS.gold+'66',padding:'12px 24px',opacity:enter(98,124)}}>
        <Stamp size={32} color={COLORS.ink}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.5}}>口诀：当然退伙三情形——<span style={{fontWeight:900,color:COLORS.red}}>身死、财灭、无资格</span>；退伙人对退伙前债务<span style={{fontWeight:900,color:COLORS.red}}>普通无限连带</span>、<span style={{fontWeight:900,color:COLORS.teal}}>有限以取回财产为限</span></div>
      </div>
    </div>
  </Shell>;
};

export const PartnershipAdmissionWithdrawal=()=> <AbsoluteFill>
  <TimelineSequence name="01-partnership-admission-withdrawal-scene-01" start={SCENES['partnership-admission-withdrawal-scene-01'].start} duration={SCENES['partnership-admission-withdrawal-scene-01'].duration}><PartnershipAdmissionWithdrawal01Scene/></TimelineSequence>
  <TimelineSequence name="02-partnership-admission-withdrawal-scene-02" start={SCENES['partnership-admission-withdrawal-scene-02'].start} duration={SCENES['partnership-admission-withdrawal-scene-02'].duration}><PartnershipAdmissionWithdrawal02Scene/></TimelineSequence>
  <TimelineSequence name="03-partnership-admission-withdrawal-scene-03" start={SCENES['partnership-admission-withdrawal-scene-03'].start} duration={SCENES['partnership-admission-withdrawal-scene-03'].duration}><PartnershipAdmissionWithdrawal03Scene/></TimelineSequence>
</AbsoluteFill>;
