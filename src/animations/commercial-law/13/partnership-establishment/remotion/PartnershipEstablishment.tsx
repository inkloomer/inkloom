import type {ReactNode} from 'react';
import {Users, UserCheck, User, Ban, Check, Landmark, Building2, TrendingUp, HeartHandshake, DoorClosed, DoorOpen, Coins, Briefcase, AlertTriangle, PieChart, Scale, Gavel, Wallet, FileSignature, Tag, Stamp, ScrollText, FileCheck2, Split} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#F0EAE0', ink:'#2B2B33', copper:'#8A4B2F', teal:'#2F6B5E', gold:'#B98A2F', red:'#B23A30', green:'#15725F', paper:'#FAF6EC'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.copper,color:COLORS.paper}}>{code}</div>
    <div style={{position:'absolute',left:190,right:76,top:46,fontSize:46,fontWeight:900,lineHeight:1.12,borderBottom:'5px solid '+COLORS.gold,paddingBottom:12}}>{title}</div>
    <div style={{position:'absolute',left:76,right:76,top:150,bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

const FactRow=({color,icon,enter,children}:{readonly color:string;readonly icon:ReactNode;readonly enter:number;readonly children:ReactNode})=>(
  <div style={{display:'flex',alignItems:'center',gap:12,padding:'10px 14px',background:COLORS.paper,borderLeft:'6px solid '+color,opacity:enter}}>
    <span style={{display:'flex',flexShrink:0}}>{icon}</span>
    <span style={{fontSize:22,fontWeight:800,lineHeight:1.45}}>{children}</span>
  </div>
);

const Chip=({color,icon,text}:{readonly color:string;readonly icon?:ReactNode;readonly text:string})=>(
  <div style={{display:'flex',alignItems:'center',gap:8,padding:'8px 14px',background:COLORS.paper,border:'3px solid '+color,fontSize:21,fontWeight:900,color}}>
    {icon}{text}
  </div>
);

export const PartnershipEstablishment01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const carryX=interpolate(frame,[190,258],[472,1250],CLAMP);
  return <Shell code="13.1" title="普通合伙 与 有限合伙">
    <div data-layout="dual-form-liability-1" data-visual-anchor="comparison-axis" data-visual-grammar="liability-fork,form-definition-cards" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="partnership-establishment-scene-01-rule" data-focal-channels="contrast,connector,motion" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="partnership-establishment-knowledge-1" data-stateful-source="unlimited-liability-carry" style={{position:'absolute',left:carryX,top:224,padding:'8px 18px',background:COLORS.red,color:COLORS.paper,fontSize:22,fontWeight:900,transform:'rotate(-3deg)',opacity:enter(184,206),boxShadow:'6px 6px 0 '+COLORS.ink+'33'}}>无限连带</div>
      <div style={{position:'absolute',left:472,top:262,width:interpolate(frame,[206,248],[0,720],CLAMP),height:5,background:COLORS.red}}/>
      <div data-final-knowledge="partnership-establishment-scene-01-gp-def" style={{position:'absolute',left:0,top:0,width:864,height:196,padding:'18px 24px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'4D',opacity:enter(20,48),translate:interpolate(frame,[20,48],['-220px 0px','0px 0px'],CLAMP)}}>
        <Scale size={132} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:6,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
          <Users size={40} color={COLORS.copper}/>
          <div style={{fontSize:29,fontWeight:900}}>普通合伙企业</div>
          <div style={{padding:'4px 12px',background:COLORS.copper,color:COLORS.paper,fontSize:19,fontWeight:900,transform:'rotate(-2deg)'}}>营利性组织</div>
        </div>
        <div style={{display:'flex',flexWrap:'wrap',gap:10}}>
          <Chip color={COLORS.copper} icon={<Coins size={24} color={COLORS.copper}/>} text="共同出资"/>
          <Chip color={COLORS.copper} icon={<Briefcase size={24} color={COLORS.copper}/>} text="共同经营"/>
          <Chip color={COLORS.copper} icon={<AlertTriangle size={24} color={COLORS.copper}/>} text="共担风险"/>
          <Chip color={COLORS.copper} icon={<PieChart size={24} color={COLORS.copper}/>} text="共享收益"/>
        </div>
      </div>
      <div data-final-knowledge="partnership-establishment-scene-01-lp-def" style={{position:'absolute',right:0,top:0,width:864,height:196,padding:'18px 24px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'4D',opacity:enter(36,64),translate:interpolate(frame,[36,64],['220px 0px','0px 0px'],CLAMP)}}>
        <Split size={132} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:6,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10}}>
          <Split size={40} color={COLORS.teal}/>
          <div style={{fontSize:29,fontWeight:900}}>有限合伙企业</div>
          <div style={{fontSize:21,fontWeight:800,color:COLORS.teal}}>由普通合伙人和有限合伙人组成</div>
        </div>
        <div style={{display:'flex',flexWrap:'wrap',gap:10}}>
          <Chip color={COLORS.copper} icon={<UserCheck size={24} color={COLORS.copper}/>} text="普通合伙人 至少1人"/>
          <Chip color={COLORS.teal} icon={<User size={24} color={COLORS.teal}/>} text="有限合伙人 至少1人"/>
          <Chip color={COLORS.gold} icon={<Users size={24} color={COLORS.gold}/>} text="人数 2-50人"/>
        </div>
      </div>
      <div style={{position:'absolute',left:428,top:196,width:8,height:interpolate(frame,[52,84],[0,58],CLAMP),background:COLORS.copper}}/>
      <div style={{position:'absolute',left:418,top:242,width:0,height:0,borderTop:'18px solid '+COLORS.copper,borderLeft:'13px solid transparent',borderRight:'13px solid transparent',opacity:enter(82,94)}}/>
      <div style={{position:'absolute',right:428,top:196,width:8,height:interpolate(frame,[66,98],[0,58],CLAMP),background:COLORS.teal}}/>
      <div style={{position:'absolute',right:418,top:242,width:0,height:0,borderTop:'18px solid '+COLORS.teal,borderLeft:'13px solid transparent',borderRight:'13px solid transparent',opacity:enter(96,108)}}/>
      <div data-final-knowledge="partnership-establishment-scene-01-gp-liability" style={{position:'absolute',left:0,top:268,width:864,height:282,padding:'18px 24px',border:'5px solid '+COLORS.red,background:COLORS.copper+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:12,opacity:enter(78,104),translate:interpolate(frame,[78,104],['0px 26px','0px 0px'],CLAMP)}}>
        <Gavel size={140} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.09,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:12,fontSize:25,fontWeight:900}}>
          <Gavel size={32} color={COLORS.red}/>
          普通合伙人 · 对企业债务
          <span style={{marginLeft:'auto',padding:'8px 18px',background:COLORS.red,color:COLORS.paper,fontSize:24,fontWeight:900,transform:'rotate(-2deg)'}}>无限连带责任</span>
        </div>
        <FactRow color={COLORS.red} icon={<Scale size={26} color={COLORS.red}/>} enter={enter(94,116)}>对<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>合伙企业债务</span>承担无限连带责任，不因出资额而封顶</FactRow>
        <div style={{display:'flex',alignItems:'flex-end',gap:14,marginTop:4}}>
          <div style={{width:12,height:interpolate(frame,[104,170],[0,86],CLAMP),background:COLORS.red}}/>
          <div style={{fontSize:20,fontWeight:900,color:COLORS.red,opacity:enter(150,172)}}>清偿责任沿个人财产继续延伸</div>
        </div>
      </div>
      <div data-final-knowledge="partnership-establishment-scene-01-lp-liability" data-stateful-terminal="unlimited-liability-carry" style={{position:'absolute',right:0,top:268,width:864,height:282,padding:'18px 24px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:12,opacity:enter(92,118),translate:interpolate(frame,[92,118],['0px 26px','0px 0px'],CLAMP)}}>
        <Wallet size={140} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.09,pointerEvents:'none'}}/>
        <FactRow color={COLORS.red} icon={<UserCheck size={26} color={COLORS.red}/>} enter={enter(104,126)}>其中<span style={{fontWeight:900,color:COLORS.red}}>普通合伙人</span>：仍然承担<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>无限连带责任</span></FactRow>
        <FactRow color={COLORS.teal} icon={<Wallet size={26} color={COLORS.teal}/>} enter={enter(116,138)}><span style={{fontWeight:900,color:COLORS.teal}}>有限合伙人</span>：以<span style={{fontWeight:900,borderBottom:'3px solid '+COLORS.teal,paddingBottom:1}}>认缴出资额为限</span>承担责任</FactRow>
        <div style={{display:'flex',alignItems:'flex-end',gap:14,marginTop:4}}>
          <div style={{position:'relative',width:12,height:86,display:'flex',flexDirection:'column',justifyContent:'flex-end'}}>
            <div style={{width:12,height:44,background:COLORS.teal}}/>
            <div style={{width:44,height:8,background:COLORS.gold,opacity:enter(130,150)}}/>
          </div>
          <div style={{fontSize:20,fontWeight:900,color:COLORS.teal,opacity:enter(136,158)}}>清偿到认缴额即被截断</div>
        </div>
      </div>
      <div data-final-knowledge="partnership-establishment-scene-01-recap" style={{position:'absolute',left:0,right:0,top:574,bottom:0,display:'flex',alignItems:'center',gap:18,border:'4px solid '+COLORS.ink,background:COLORS.teal+'26',padding:'14px 24px',opacity:enter(128,154)}}>
        <Scale size={38} color={COLORS.gold}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.5}}>普通合伙：<span style={{fontWeight:900,color:COLORS.copper}}>共同出资 · 共同经营 · 共担风险 · 共享收益</span>，债务<span style={{fontWeight:900,color:COLORS.red}}>无限连带</span>；有限合伙：<span style={{fontWeight:900,color:COLORS.red}}>普通合伙人无限连带</span>，<span style={{fontWeight:900,color:COLORS.teal}}>有限合伙人以认缴出资额为限</span></div>
      </div>
    </div>
  </Shell>;
};

export const PartnershipEstablishment02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const chipX=interpolate(frame,[84,132,148,190,204,258],[0,-452,0,0,0,452],CLAMP);
  const shake=interpolate(frame,[132,140,148],[0,-9,0],CLAMP);
  const reject=enter(132,144)*(1-enter(160,178));
  return <Shell code="13.2" title="合伙人资格：谁不能当普通合伙人">
    <div data-layout="subject-gate-pair-2" data-visual-anchor="timeline-gate" data-visual-grammar="gate-pass-reject,restricted-subject-travel" data-text-treatments="label-block,chip,external-negation" data-focal-rule="partnership-establishment-scene-02-rule" data-focal-channels="motion,connector,icon" style={{position:'absolute',inset:0}}>
      <div style={{position:'absolute',left:0,right:0,top:0,display:'flex',alignItems:'center',gap:14,opacity:enter(10,34)}}>
        <Ban size={38} color={COLORS.red}/>
        <div style={{fontSize:25,fontWeight:900}}>四类主体（<span style={{background:COLORS.gold+'42',padding:'2px 10px'}}>国市公社</span>）在两种合伙中的资格完全相反</div>
      </div>
      <div style={{position:'absolute',left:508,top:56,width:752,display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,opacity:enter(20,44)}}>
        <Chip color={COLORS.ink} icon={<Landmark size={26} color={COLORS.ink}/>} text="国有独资公司"/>
        <Chip color={COLORS.ink} icon={<Building2 size={26} color={COLORS.ink}/>} text="国有企业"/>
        <Chip color={COLORS.ink} icon={<TrendingUp size={26} color={COLORS.ink}/>} text="上市公司"/>
        <Chip color={COLORS.ink} icon={<HeartHandshake size={26} color={COLORS.ink}/>} text="公益性的事业单位、社会团体"/>
      </div>
      <div data-stateful-source="restricted-subject-gate-travel" style={{position:'absolute',left:884,top:238,translate:'-50% 0',transform:'translate('+chipX+'px, '+shake+'px)',padding:'10px 22px',border:'4px solid '+COLORS.copper,background:COLORS.paper,fontSize:23,fontWeight:900,color:COLORS.copper,opacity:enter(72,88),boxShadow:'6px 6px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:10}}>
        <Landmark size={28} color={COLORS.copper}/>国有独资公司
      </div>
      <div data-final-knowledge="partnership-establishment-scene-02-gp-gate" style={{position:'absolute',left:0,top:120,width:700,height:250,border:'5px solid '+COLORS.copper,background:COLORS.copper+'4D',opacity:enter(28,54),translate:interpolate(frame,[28,54],['-200px 0px','0px 0px'],CLAMP),display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:10}}>
        <Users size={120} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:6,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:12,fontSize:26,fontWeight:900,color:COLORS.copper}}>
          <DoorClosed size={44} color={COLORS.copper}/>普通合伙企业
        </div>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:23,fontWeight:900,color:COLORS.red}}>
          <Ban size={30} color={COLORS.red}/>禁止
        </div>
        <div style={{padding:'6px 16px',background:COLORS.paper,border:'3px solid '+COLORS.red,fontSize:20,fontWeight:900,color:COLORS.red,opacity:reject}}>不得担任 · 弹回</div>
      </div>
      <div data-final-knowledge="partnership-establishment-scene-02-lp-gate" style={{position:'absolute',right:0,top:120,width:700,height:250,border:'5px solid '+COLORS.teal,background:COLORS.teal+'4D',opacity:enter(46,72),translate:interpolate(frame,[46,72],['200px 0px','0px 0px'],CLAMP),display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:10}}>
        <Users size={120} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',left:6,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:12,fontSize:26,fontWeight:900,color:COLORS.teal}}>
          <DoorOpen size={44} color={COLORS.teal}/>有限合伙企业
        </div>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:23,fontWeight:900,color:COLORS.teal}}>
          <Check size={30} color={COLORS.teal}/>可以
        </div>
        <div data-stateful-terminal="restricted-subject-gate-travel" style={{padding:'6px 16px',background:COLORS.paper,border:'3px solid '+COLORS.teal,fontSize:20,fontWeight:900,color:COLORS.teal,opacity:enter(252,278)}}>作为有限合伙人进入</div>
      </div>
      <div style={{position:'absolute',left:700,top:245,width:interpolate(frame,[196,244],[0,368],CLAMP),height:5,background:COLORS.teal}}/>
      <div data-final-knowledge="partnership-establishment-scene-02-gp-facts" style={{position:'absolute',left:0,top:394,width:864,height:250,padding:'16px 22px',border:'4px solid '+COLORS.copper,background:COLORS.copper+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:10,opacity:enter(112,138)}}>
        <Users size={120} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:6,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper,marginBottom:2}}>普通合伙人的门槛</div>
        <FactRow color={COLORS.copper} icon={<Users size={26} color={COLORS.copper}/>} enter={enter(122,144)}>人数 <span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>≥2人</span></FactRow>
        <FactRow color={COLORS.copper} icon={<UserCheck size={26} color={COLORS.copper}/>} enter={enter(132,154)}>自然人须<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>完全民事行为能力</span></FactRow>
        <FactRow color={COLORS.red} icon={<User size={26} color={COLORS.red}/>} enter={enter(142,164)}>例：甲14周岁 <span style={{fontWeight:900,color:COLORS.red}}>× 不能选普通合伙</span>——限制民事行为能力</FactRow>
      </div>
      <div data-final-knowledge="partnership-establishment-scene-02-lp-facts" style={{position:'absolute',right:0,top:394,width:864,height:250,padding:'16px 22px',border:'4px solid '+COLORS.teal,background:COLORS.teal+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:10,opacity:enter(126,152)}}>
        <UserCheck size={120} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',left:6,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.teal,marginBottom:2}}>有限合伙人的门槛</div>
        <FactRow color={COLORS.teal} icon={<Users size={26} color={COLORS.teal}/>} enter={enter(136,158)}>人数 <span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>2-50人</span>，普通与有限<span style={{fontWeight:900}}>至少各1人</span></FactRow>
        <FactRow color={COLORS.teal} icon={<User size={26} color={COLORS.teal}/>} enter={enter(146,168)}>有限合伙人<span style={{fontWeight:900,borderBottom:'3px solid '+COLORS.teal,paddingBottom:1}}>不要求行为能力</span></FactRow>
        <FactRow color={COLORS.red} icon={<Ban size={26} color={COLORS.red}/>} enter={enter(156,178)}><span style={{fontWeight:900,color:COLORS.red}}>禁止</span>从事营利性活动的人担任有限合伙人</FactRow>
      </div>
      <div data-final-knowledge="partnership-establishment-knowledge-2" style={{position:'absolute',left:0,right:0,top:668,bottom:0,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.ink,background:COLORS.gold+'3D',padding:'12px 24px',opacity:enter(168,194)}}>
        <DoorOpen size={34} color={COLORS.gold}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}>同一批主体：<span style={{fontWeight:900,color:COLORS.red}}>禁止</span>当<span style={{fontWeight:900,color:COLORS.copper}}>普通合伙人</span>，<span style={{fontWeight:900,color:COLORS.teal}}>可以</span>当<span style={{fontWeight:900,color:COLORS.teal}}>有限合伙人</span>——因为普通合伙人要承担无限连带责任</div>
      </div>
    </div>
  </Shell>;
};

export const PartnershipEstablishment03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const spineX=interpolate(frame,[40,110,124,196],[240,884,884,1528],CLAMP);
  return <Shell code="13.3" title="设立：合伙协议 → 名称 → 登记">
    <div data-layout="founding-chain-fork-3" data-visual-anchor="flow-path" data-visual-grammar="founding-spine-travel,labor-contribution-fork" data-text-treatments="soft-highlight,thin-underline,stamp" data-focal-rule="partnership-establishment-scene-03-rule" data-focal-channels="connector,motion,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="partnership-establishment-knowledge-3" data-stateful-source="founding-spine-travel" style={{position:'absolute',left:spineX,top:118,translate:'-50% 0',padding:'9px 18px',background:COLORS.copper,color:COLORS.paper,fontSize:21,fontWeight:900,opacity:enter(34,54),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <FileSignature size={26} color={COLORS.paper}/>签名 · 盖章
      </div>
      <div style={{position:'absolute',left:0,right:0,top:0,height:196}}>
        <div data-final-knowledge="partnership-establishment-scene-03-station-agreement" style={{position:'absolute',left:0,top:0,width:480,height:172,padding:'16px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'4D',opacity:enter(14,40),translate:interpolate(frame,[14,40],['0px 22px','0px 0px'],CLAMP)}}>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:8}}>
            <FileSignature size={38} color={COLORS.copper}/>
            <div style={{fontSize:26,fontWeight:900}}>合伙协议</div>
          </div>
          <div style={{fontSize:21,fontWeight:800,lineHeight:1.5}}>协商一致 + 书面；<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>全体签名、盖章</span>生效</div>
        </div>
        <div style={{position:'absolute',left:480,top:84,width:interpolate(frame,[26,58],[0,164],CLAMP),height:6,background:COLORS.ink}}/>
        <div style={{position:'absolute',left:632,top:72,width:0,height:0,borderTop:'15px solid '+COLORS.ink,borderLeft:'12px solid transparent',borderRight:'12px solid transparent',opacity:enter(56,68)}}/>
        <div data-final-knowledge="partnership-establishment-scene-03-station-name" style={{position:'absolute',left:644,top:0,width:480,height:172,padding:'16px 20px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'4D',opacity:enter(44,70),translate:interpolate(frame,[44,70],['0px 22px','0px 0px'],CLAMP)}}>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:8}}>
            <Tag size={38} color={COLORS.gold}/>
            <div style={{fontSize:26,fontWeight:900}}>名称</div>
          </div>
          <div style={{fontSize:21,fontWeight:800,lineHeight:1.5}}>应标明<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>"普通合伙"或"有限合伙"</span></div>
        </div>
        <div style={{position:'absolute',left:1124,top:84,width:interpolate(frame,[58,90],[0,164],CLAMP),height:6,background:COLORS.ink}}/>
        <div style={{position:'absolute',left:1276,top:72,width:0,height:0,borderTop:'15px solid '+COLORS.ink,borderLeft:'12px solid transparent',borderRight:'12px solid transparent',opacity:enter(88,100)}}/>
        <div data-final-knowledge="partnership-establishment-scene-03-station-register" data-stateful-terminal="founding-spine-travel" style={{position:'absolute',right:0,top:0,width:480,height:172,padding:'16px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'4D',opacity:enter(74,100),translate:interpolate(frame,[74,100],['0px 22px','0px 0px'],CLAMP)}}>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:8}}>
            <Stamp size={38} color={COLORS.teal}/>
            <div style={{fontSize:26,fontWeight:900}}>登记</div>
            <div style={{padding:'4px 12px',background:COLORS.teal,color:COLORS.paper,fontSize:18,fontWeight:900,transform:'rotate(-2deg)'}}>成立</div>
          </div>
          <div style={{fontSize:21,fontWeight:800,lineHeight:1.5}}><span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>营业执照签发日</span> = 合伙企业成立日</div>
        </div>
      </div>
      <div style={{position:'absolute',left:880,top:196,width:8,height:interpolate(frame,[104,134],[0,40],CLAMP),background:COLORS.ink}}/>
      <div style={{position:'absolute',left:640,top:232,width:488,height:6,background:COLORS.ink,transformOrigin:'left center',transform:'scaleX('+interpolate(frame,[128,156],[0,1],CLAMP)+')'}}/>
      <div style={{position:'absolute',left:1128,top:232,width:488,height:6,background:COLORS.ink,transformOrigin:'left center',transform:'scaleX('+interpolate(frame,[128,156],[0,1],CLAMP)+')'}}/>
      <div style={{position:'absolute',left:1120,top:222,width:0,height:0,borderTop:'16px solid '+COLORS.green,borderLeft:'12px solid transparent',borderRight:'12px solid transparent',opacity:enter(150,164)}}/>
      <div style={{position:'absolute',left:1608,top:222,width:0,height:0,borderTop:'16px solid '+COLORS.red,borderLeft:'12px solid transparent',borderRight:'12px solid transparent',opacity:enter(150,164)}}/>
      <div data-final-knowledge="partnership-establishment-scene-03-labor-gp" style={{position:'absolute',left:0,top:248,width:820,height:210,padding:'16px 22px',border:'5px solid '+COLORS.green,background:COLORS.green+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:10,opacity:enter(148,174),translate:interpolate(frame,[148,174],['-240px 0px','0px 0px'],CLAMP)}}>
        <FileCheck2 size={120} color={COLORS.green} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.green}}>
          <Check size={30} color={COLORS.green}/>普通合伙人：劳务出资<span style={{fontWeight:900}}>可以</span>
        </div>
        <FactRow color={COLORS.green} icon={<ScrollText size={26} color={COLORS.green}/>} enter={enter(162,184)}>协商确定评估办法 + 在<span style={{fontWeight:900,background:COLORS.green+'26',padding:'1px 6px'}}>合伙协议中载明</span></FactRow>
        <FactRow color={COLORS.green} icon={<UserCheck size={26} color={COLORS.green}/>} enter={enter(172,194)}>例：四金可以其<span style={{fontWeight:900,borderBottom:'3px solid '+COLORS.green,paddingBottom:1}}>授课</span>出资</FactRow>
      </div>
      <div data-final-knowledge="partnership-establishment-scene-03-labor-lp" style={{position:'absolute',right:0,top:248,width:820,height:210,padding:'16px 22px',border:'5px dashed '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:10,opacity:enter(160,186),translate:interpolate(frame,[160,186],['240px 0px','0px 0px'],CLAMP)}}>
        <Ban size={120} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',left:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.red}}>
          <Ban size={30} color={COLORS.red}/>有限合伙人：<span style={{fontWeight:900}}>不得以劳务出资</span>
        </div>
        <FactRow color={COLORS.teal} icon={<Coins size={26} color={COLORS.teal}/>} enter={enter(174,196)}>可用<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>货币、实物、知识产权、土地使用权</span>等作价出资</FactRow>
        <FactRow color={COLORS.red} icon={<AlertTriangle size={26} color={COLORS.red}/>} enter={enter(184,206)}>未按期缴纳：<span style={{fontWeight:900,color:COLORS.red}}>补缴</span> + 对其他合伙人承担<span style={{fontWeight:900,color:COLORS.red,borderBottom:'3px solid '+COLORS.red,paddingBottom:1}}>违约责任</span></FactRow>
      </div>
      <div style={{position:'absolute',left:604,top:158,padding:'8px 20px',background:COLORS.paper,border:'4px solid '+COLORS.ink,fontSize:23,fontWeight:900,opacity:enter(116,140),display:'flex',alignItems:'center',gap:10}}>
        <Split size={28} color={COLORS.ink}/>劳务出资
      </div>
      <div data-final-knowledge="partnership-establishment-scene-03-agreement-rules" style={{position:'absolute',left:0,right:0,top:478,display:'grid',gridTemplateColumns:'1fr 1fr',gap:18}}>
        <FactRow color={COLORS.gold} icon={<ScrollText size={28} color={COLORS.gold}/>} enter={enter(200,224)}>修改/补充合伙协议：<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>全体一致同意</span>（合伙协议可另约定）</FactRow>
        <FactRow color={COLORS.copper} icon={<FileCheck2 size={28} color={COLORS.copper}/>} enter={enter(210,234)}>出资的<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>金额、形式、期限无要求</span>；需评估作价的全体协商或委托机构</FactRow>
      </div>
      <div data-final-knowledge="partnership-establishment-scene-03-warning" style={{position:'absolute',left:0,right:0,top:560,bottom:0,display:'flex',alignItems:'center',gap:18,border:'4px solid '+COLORS.red,background:COLORS.red+'33',padding:'12px 24px',opacity:enter(220,248)}}>
        <AlertTriangle size={36} color={COLORS.red}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}>领取<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>营业执照前</span>，合伙人<span style={{fontWeight:900,color:COLORS.red,borderBottom:'3px solid '+COLORS.red,paddingBottom:1}}>不得以合伙企业名义</span>从事合伙业务</div>
      </div>
    </div>
  </Shell>;
};

export const PartnershipEstablishment=()=> <AbsoluteFill>
  <TimelineSequence name="01-partnership-establishment-scene-01" start={SCENES['partnership-establishment-scene-01'].start} duration={SCENES['partnership-establishment-scene-01'].duration}><PartnershipEstablishment01Scene/></TimelineSequence>
  <TimelineSequence name="02-partnership-establishment-scene-02" start={SCENES['partnership-establishment-scene-02'].start} duration={SCENES['partnership-establishment-scene-02'].duration}><PartnershipEstablishment02Scene/></TimelineSequence>
  <TimelineSequence name="03-partnership-establishment-scene-03" start={SCENES['partnership-establishment-scene-03'].start} duration={SCENES['partnership-establishment-scene-03'].duration}><PartnershipEstablishment03Scene/></TimelineSequence>
</AbsoluteFill>;
