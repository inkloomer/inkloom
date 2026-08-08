import type {ReactNode} from 'react';
import {ArrowRightFromLine,BellOff,ChevronsUp,DoorClosed,FileText,FileX,Gavel,Handshake,Merge,PackageX,PenLine,RotateCcw,Scale,Swords,Undo2,User,UserPlus,UserRound,Users,X} from 'lucide-react';
import {AbsoluteFill,interpolate,useCurrentFrame} from 'remotion';
import {CLAMP,TimelineSequence,createMotionPrimitives} from '../../../../shared/remotion-runtime';
import {SCENES,toSourceFrame} from './storyboard';

const C={bg:'#f4efe5',ink:'#18242b',red:'#b43b35',teal:'#176b73',gold:'#d89b2b',paper:'#fffdf7'};
const PLAYER_CONTROL_SAFE_BOTTOM = 160;
const {Enter,ImpactReveal,MaskedReveal}=createMotionPrimitives(toSourceFrame);

const Shell=({code,title,children}:{code:string;title:string;children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{backgroundColor:C.bg,color:C.ink,overflow:'hidden'}}>
    <div style={{position:'absolute',inset:0,backgroundImage:'repeating-linear-gradient(0deg,transparent 0 78px,#18242b0c 79px 80px)',backgroundSize:'100% 80px'}}/>
    <div style={{position:'absolute',left:72,top:22,width:160,height:66,display:'grid',placeItems:'center',backgroundColor:C.red,color:C.paper,fontSize:30,fontWeight:900,border:'4px solid '+C.ink}}>{code}</div>
    <MaskedReveal style={{position:'absolute',left:264,top:24,right:330,fontSize:46,fontWeight:900,lineHeight:1.2}}>{title}</MaskedReveal>
    <div style={{position:'absolute',right:76,top:42,fontSize:17,fontWeight:700,color:C.teal}}>专题二十 · 背诵卷 · 民诉</div>
    <div style={{position:'absolute',left:72,right:72,top:114,height:5,background:`linear-gradient(90deg,${C.red},${C.gold} 48%,${C.teal})`}}/>
    <div style={{position:'absolute',left:72,right:72,top:146,bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>
      <div style={{position:'absolute',left:-72,top:-146,width:1920,height:1080}}>{children}</div>
    </div>
  </AbsoluteFill>
);

const RequestRow=({delay,role,roleIcon,action,actionIcon}:{delay:number;role:string;roleIcon:ReactNode;action:string;actionIcon:ReactNode})=>(
  <Enter delay={delay} from="left" style={{width:'100%'}}>
    <div style={{display:'flex',alignItems:'center',gap:18,border:'3px solid '+C.ink,backgroundColor:C.paper,padding:'4px 16px'}}>
      <div style={{display:'flex',alignItems:'center',gap:8,border:'3px solid '+C.ink,backgroundColor:C.ink,color:C.paper,padding:'2px 12px',fontSize:24,fontWeight:900}}>{roleIcon}{role}</div>
      <div style={{display:'flex',alignItems:'center',gap:10}}>{actionIcon}<div style={{fontSize:30,fontWeight:900}}>{action}</div></div>
    </div>
  </Enter>
);

const DropArrow=({left,delay}:{left:number;delay:number})=>{
  const frame=toSourceFrame(useCurrentFrame());
  const p=interpolate(frame,[delay,delay+26],[0,1],CLAMP);
  return <div style={{position:'absolute',left:left-5,top:584,width:10,height:56}}>
    <div style={{position:'absolute',left:4,top:0,width:2,height:44,backgroundColor:C.red,scale:'1 '+p,transformOrigin:'top center'}}/>
    <div style={{position:'absolute',left:0,top:42,width:10,height:12,backgroundColor:C.red,clipPath:'polygon(0 0,100% 0,50% 100%)',opacity:interpolate(p,[0.7,1],[0,1],CLAMP)}}/>
  </div>;
};

const HArrow=({left,top,width,delay}:{left:number;top:number;width:number;delay:number})=>{
  const frame=toSourceFrame(useCurrentFrame());
  const p=interpolate(frame,[delay,delay+22],[0,1],CLAMP);
  return <div style={{position:'absolute',left,top,width,height:22}}>
    <div style={{position:'absolute',left:0,top:8,width,height:6,backgroundColor:C.gold,scale:p+' 1',transformOrigin:'left center'}}/>
    <div style={{position:'absolute',left:width-2,top:2,width:0,height:0,borderTop:'9px solid transparent',borderBottom:'9px solid transparent',borderLeft:'16px solid '+C.gold,opacity:interpolate(p,[0.75,1],[0,1],CLAMP)}}/>
  </div>;
};

const ExceptionChip=({delay,icon,label,sub}:{delay:number;icon:ReactNode;label:string;sub?:string})=>(
  <Enter delay={delay} from="up" style={{width:'100%',height:'100%'}}>
    <div style={{width:'100%',height:'100%',border:'3px solid '+C.teal,backgroundColor:C.teal+'0a',padding:'16px 18px',display:'flex',flexDirection:'column',gap:10}}>
      <div style={{display:'flex',alignItems:'center',gap:12}}>{icon}<div style={{fontSize:24,fontWeight:900}}>{label}</div></div>
      {sub?<div style={{fontSize:22,fontWeight:700,color:C.ink}}>{sub}</div>:null}
    </div>
  </Enter>
);

const BandShell=({left}:{left:number})=><>
  <div style={{position:'absolute',left,top:172,width:26,height:628,backgroundColor:C.teal+'22',border:'3px solid '+C.teal,display:'flex',flexDirection:'column',alignItems:'center',gap:20,paddingTop:24}}>
    {[0,1,2].map((i)=><div key={i} style={{width:14,height:14,borderRadius:'50%',border:'3px solid '+C.ink,backgroundColor:C.bg}}/>)}
  </div>
  <div style={{position:'absolute',left:left+40,top:788,fontSize:16,fontWeight:700,color:C.gold}}>卷宗页 · 20-{left===92?'A':left===668?'B':'C'} · 比较归纳</div>
</>;

const BandTab=({left,delay,stamp,icon}:{left:number;delay:number;stamp:string;icon:ReactNode})=>(
  <Enter delay={delay} from="left" style={{position:'absolute',left:left+40,top:172,width:300,height:56}}>
    <div style={{width:'100%',height:'100%',border:'4px solid '+C.ink,backgroundColor:C.paper,display:'flex',alignItems:'center',gap:10,padding:'0 14px'}}>
      {icon}
      <div style={{fontSize:28,fontWeight:900}}>{stamp}</div>
    </div>
  </Enter>
);

export const ThreeInstanceOverviewScene=()=> <Shell code="20.1" title="三审级并置：各自考量原则"><div data-layout="three-instance-bands-parallel-shelf-diagram" data-visual-anchor="comparison-axis" data-visual-grammar="instance-bands,principle-per-band,claim-doc-sweep,shared-ground" data-text-treatments="label-block,stamp,soft-highlight" data-focal-rule="instance-principle-contrast-rule" data-focal-channels="icon,contrast,motion" style={{position:'absolute',inset:0}}>
    <BandShell left={92}/>
    <BandTab left={92} delay={24} stamp="一审 · 审判" icon={<Scale size={28}/>}/>
    <div data-final-knowledge="first-instance-convenience" style={{position:'absolute',left:132,top:244,width:496,height:484,border:'4px solid '+C.ink,backgroundColor:C.paper,boxShadow:'10px 10px 0 #18242b20',padding:'24px 24px 20px',display:'flex',flexDirection:'column'}}>
      <ImpactReveal delay={52} style={{alignSelf:'flex-start'}}>
        <div style={{fontSize:32,fontWeight:900,color:C.red,border:'4px solid '+C.red,backgroundColor:C.red+'0f',padding:'8px 18px 14px'}}>法院审理便捷性</div>
      </ImpactReveal>
      <div style={{fontSize:23,fontWeight:650,lineHeight:1.6,paddingTop:22}}>受理后至法庭辩论结束前：原告增加诉讼请求、被告提出反诉、第三人提出与本案有关的请求</div>
      <div style={{marginTop:'auto',display:'flex',flexWrap:'wrap',gap:12}}>
        <div style={{fontSize:24,fontWeight:900,border:'3px solid '+C.teal,color:C.teal,backgroundColor:C.teal+'0d',padding:'6px 14px'}}>法庭辩论终结前</div>
        <div style={{fontSize:24,fontWeight:900,border:'3px solid '+C.teal,color:C.teal,backgroundColor:C.teal+'0d',padding:'6px 14px'}}>应当合并审理</div>
      </div>
    </div>
    <BandShell left={668}/>
    <BandTab left={668} delay={42} stamp="二审 · 上诉审" icon={<ChevronsUp size={28}/>}/>
    <div data-final-knowledge="second-instance-finality" style={{position:'absolute',left:708,top:244,width:496,height:484,border:'4px solid '+C.ink,backgroundColor:C.paper,boxShadow:'10px 10px 0 #18242b20',padding:'24px 24px 20px',display:'flex',flexDirection:'column'}}>
      <ImpactReveal delay={70} style={{alignSelf:'flex-start'}}>
        <div style={{fontSize:32,fontWeight:900,color:C.red,border:'4px solid '+C.red,backgroundColor:C.red+'0f',padding:'8px 18px 14px'}}>两审终审制度</div>
      </ImpactReveal>
      <div style={{fontSize:23,fontWeight:650,lineHeight:1.6,paddingTop:22}}>调解不成 → 告知另诉；同意一并审理 → 一并裁判；发回重审按一审程序重审</div>
      <div style={{marginTop:'auto',display:'flex',flexWrap:'wrap',gap:12}}>
        <div style={{fontSize:24,fontWeight:900,border:'3px solid '+C.teal,color:C.teal,backgroundColor:C.teal+'0d',padding:'6px 14px'}}>调解 → 另诉</div>
        <div style={{fontSize:24,fontWeight:900,border:'3px solid '+C.teal,color:C.teal,backgroundColor:C.teal+'0d',padding:'6px 14px'}}>同意 → 一并裁判</div>
        <div style={{fontSize:24,fontWeight:900,border:'3px solid '+C.teal,color:C.teal,backgroundColor:C.teal+'0d',padding:'6px 14px'}}>发回重审 → 合并审理</div>
      </div>
    </div>
    <BandShell left={1244}/>
    <BandTab left={1244} delay={60} stamp="再审 · 审判监督" icon={<RotateCcw size={28}/>}/>
    <div data-final-knowledge="retrial-limited-scope" style={{position:'absolute',left:1284,top:244,width:496,height:484,border:'4px solid '+C.ink,backgroundColor:C.paper,boxShadow:'10px 10px 0 #18242b20',padding:'24px 24px 20px',display:'flex',flexDirection:'column'}}>
      <ImpactReveal delay={88} style={{alignSelf:'flex-start'}}>
        <div style={{fontSize:32,fontWeight:900,color:C.red,border:'4px solid '+C.red,backgroundColor:C.red+'0f',padding:'8px 18px 14px'}}>再审范围有限原则</div>
      </ImpactReveal>
      <div style={{fontSize:23,fontWeight:650,lineHeight:1.6,paddingTop:22}}>以原审范围为限；超出范围增加、变更、反诉 → 不予审理</div>
      <div style={{marginTop:'auto',display:'flex',flexWrap:'wrap',gap:12}}>
        <div style={{fontSize:24,fontWeight:900,border:'3px solid '+C.teal,color:C.teal,backgroundColor:C.teal+'0d',padding:'6px 14px'}}>不予审理</div>
        <div style={{fontSize:24,fontWeight:900,border:'3px solid '+C.teal,color:C.teal,backgroundColor:C.teal+'0d',padding:'6px 14px'}}>四情形例外 → 应当准许</div>
      </div>
    </div>
    <div style={{position:'absolute',left:92,right:92,top:818,height:102,border:'4px solid '+C.ink,backgroundColor:C.paper}}>
      <div style={{position:'absolute',left:0,top:0,bottom:0,width:170,borderRight:'3px dashed '+C.teal,display:'grid',placeItems:'center'}}>
        <div style={{fontSize:22,fontWeight:900}}>审级移送槽</div>
      </div>
      <div style={{position:'absolute',left:20,right:36,top:'50%',height:8,backgroundColor:C.gold,translate:'0 -50%'}}/>
      <div data-stateful-source="claim-doc" data-stateful-terminal="claim-doc" data-final-knowledge="claim-doc-travel" style={{position:'absolute',left:interpolate(toSourceFrame(useCurrentFrame()),[96,158],[140,1380],CLAMP),top:8,width:340,height:86,display:'flex',alignItems:'center',gap:12,border:'4px solid '+C.ink,backgroundColor:C.paper,boxShadow:'8px 8px 0 #18242b20',padding:'0 16px',opacity:interpolate(toSourceFrame(useCurrentFrame()),[96,104,144,158],[0,1,1,1],CLAMP)}}>
        <FileText size={34} color={C.red}/>
        <div>
          <div style={{fontSize:26,fontWeight:900,lineHeight:1.25}}>请求文书</div>
          <div style={{fontSize:22,fontWeight:700,color:C.teal,lineHeight:1.25}}>增加 / 变更 · 反诉</div>
        </div>
      </div>
    </div>
  </div></Shell>;

export const FirstInstanceRequestWindowScene=()=> <Shell code="20.2" title="一审：法庭辩论终结前的请求窗口"><div data-layout="first-instance-request-window-merge-lane-diagram" data-visual-anchor="timeline-gate" data-visual-grammar="acceptance-window,debate-end-gate,three-request-slots,merged-hearing-lane" data-text-treatments="thin-underline,label-block,soft-highlight" data-focal-rule="first-instance-merge-rule" data-focal-channels="icon,locator,connector" style={{position:'absolute',inset:0}}>
    <Enter delay={10} from="left" style={{position:'absolute',left:100,top:168,width:360,height:84,border:'4px solid '+C.ink,backgroundColor:C.paper,display:'flex',alignItems:'center',gap:12,padding:'0 18px'}}>
      <FileText size={30} color={C.teal}/>
      <div style={{fontSize:30,fontWeight:900}}>案件受理</div>
    </Enter>
    <Enter delay={20} from="right" style={{position:'absolute',right:100,top:168,width:360,height:84,border:'4px solid '+C.ink,backgroundColor:C.paper,display:'flex',alignItems:'center',gap:12,padding:'0 18px'}}>
      <DoorClosed size={30} color={C.red}/>
      <div style={{fontSize:30,fontWeight:900}}>法庭辩论终结</div>
    </Enter>
    <div style={{position:'absolute',left:470,right:470,top:196,height:8,backgroundColor:C.gold,scale:interpolate(toSourceFrame(useCurrentFrame()),[16,44],[0,1],CLAMP)+' 1',transformOrigin:'left center'}}/>
    <Enter delay={36} from="up" style={{position:'absolute',left:360,top:272,width:1200,height:76,border:'4px solid '+C.gold,backgroundColor:C.gold+'14',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div data-final-knowledge="change-before-debate-end" style={{fontSize:28,fontWeight:900}}>增加、变更诉讼请求<span style={{textDecoration:'underline',textDecorationThickness:3,textUnderlineOffset:6}}>应当在法庭辩论终结前</span></div>
    </Enter>
    <Enter delay={52} from="up" style={{position:'absolute',left:360,top:372,width:1200,height:212,border:'4px solid '+C.teal,backgroundColor:C.teal+'0c',padding:'14px 20px'}}>
      <div data-final-knowledge="three-request-window" data-stateful-source="merged-claims" style={{width:'100%',height:'100%'}}>
        <div style={{fontSize:24,fontWeight:900,color:C.ink,paddingBottom:12}}>案件受理后 → 法庭辩论结束前 · 三类请求可提出</div>
        <div style={{display:'flex',flexDirection:'column',gap:10}}>
          <RequestRow delay={64} role="原告" roleIcon={<User size={24}/>} action="增加诉讼请求" actionIcon={<PenLine size={26} color={C.red}/>}/>
          <RequestRow delay={80} role="被告" roleIcon={<UserRound size={24}/>} action="提出反诉" actionIcon={<Swords size={26} color={C.red}/>}/>
          <RequestRow delay={96} role="第三人" roleIcon={<Users size={24}/>} action="提出与本案有关的诉讼请求" actionIcon={<PenLine size={26} color={C.red}/>}/>
        </div>
      </div>
    </Enter>
    <DropArrow left={640} delay={118}/>
    <DropArrow left={960} delay={124}/>
    <DropArrow left={1280} delay={130}/>
    <ImpactReveal delay={128} style={{position:'absolute',left:360,top:640,width:1200,height:270,border:'4px solid '+C.ink,backgroundColor:C.paper,boxShadow:'10px 10px 0 #18242b20',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:18}}>
      <Merge size={56} color={C.red}/>
      <div data-final-knowledge="merge-if-possible" style={{fontSize:34,fontWeight:900,textAlign:'center',lineHeight:1.3}}>可以合并审理的 → <span style={{color:C.red}}>法院应当合并审理</span></div>
      <Enter delay={152} from="up">
        <div data-stateful-terminal="merged-claims" style={{fontSize:24,fontWeight:900,border:'3px solid '+C.teal,color:C.teal,backgroundColor:C.teal+'0d',padding:'6px 16px'}}>请求文书 · 并案审理</div>
      </Enter>
    </ImpactReveal>
  </div></Shell>;

export const SecondInstanceMediationForkScene=()=> <Shell code="20.3" title="二审：调解、另诉与一并裁判"><div data-layout="second-instance-mediation-fork-remand-track-diagram" data-visual-anchor="document-fork" data-visual-grammar="mediation-fork,separate-suit-exit,consent-joint-path,remand-first-instance-track" data-text-treatments="label-block,external-negation,stamp" data-focal-rule="second-instance-mediation-fork-rule" data-focal-channels="icon,connector,motion" style={{position:'absolute',inset:0}}>
    <Enter delay={10} from="left" style={{position:'absolute',left:100,top:228,width:330,height:96,border:'4px solid '+C.ink,backgroundColor:C.paper,boxShadow:'8px 8px 0 #18242b20',display:'flex',alignItems:'center',gap:12,padding:'0 16px'}}>
      <div data-stateful-source="claim-doc" style={{display:'flex',alignItems:'center',gap:12}}>
        <FileText size={32} color={C.red}/>
        <div>
          <div style={{fontSize:26,fontWeight:900}}>请求文书</div>
          <div style={{fontSize:22,fontWeight:700,color:C.teal}}>增加独立请求 · 反诉</div>
        </div>
      </div>
    </Enter>
    <div style={{position:'absolute',left:430,top:273,width:1190,height:6,backgroundColor:C.ink,scale:interpolate(toSourceFrame(useCurrentFrame()),[40,86],[0,1],CLAMP)+' 1',transformOrigin:'left center'}}/>
    <div style={{position:'absolute',left:795,top:210,width:6,height:66,backgroundColor:C.teal,scale:'1 '+interpolate(toSourceFrame(useCurrentFrame()),[46,80],[0,1],CLAMP),transformOrigin:'bottom center'}}/>
    <div style={{position:'absolute',left:1515,top:210,width:6,height:66,backgroundColor:C.teal,scale:'1 '+interpolate(toSourceFrame(useCurrentFrame()),[52,86],[0,1],CLAMP),transformOrigin:'bottom center'}}/>
    <Enter delay={56} from="up" style={{position:'absolute',left:520,top:200,width:560,height:360,border:'4px solid '+C.ink,backgroundColor:C.paper,padding:'16px 18px',display:'flex',flexDirection:'column',gap:14}}>
      <div style={{display:'flex',alignItems:'center',gap:10,border:'3px solid '+C.teal,color:C.teal,backgroundColor:C.teal+'0d',alignSelf:'flex-start',padding:'4px 14px',fontSize:26,fontWeight:900}}><Handshake size={26}/>组织调解</div>
      <div data-final-knowledge="mediation-first" style={{fontSize:30,fontWeight:900,paddingTop:6}}>法院可以组织调解</div>
      <div data-final-knowledge="mediation-fail-separate-suit" style={{display:'flex',alignItems:'center',gap:10,paddingTop:6}}>
        <div style={{width:40,height:40,border:'3px solid '+C.red,color:C.red,display:'grid',placeItems:'center'}}><X size={24}/></div>
        <div style={{fontSize:28,fontWeight:900}}>调解不成</div>
        <ArrowRightFromLine size={30} color={C.gold}/>
        <div style={{fontSize:28,fontWeight:900,color:C.teal}}>告知另诉</div>
      </div>
    </Enter>
    <Enter delay={92} from="up" style={{position:'absolute',left:1240,top:200,width:560,height:360,border:'4px solid '+C.ink,backgroundColor:C.paper,padding:'16px 18px',display:'flex',flexDirection:'column',gap:14}}>
      <div style={{display:'flex',alignItems:'center',gap:10,border:'3px solid '+C.teal,color:C.teal,backgroundColor:C.teal+'0d',alignSelf:'flex-start',padding:'4px 14px',fontSize:26,fontWeight:900}}><Gavel size={26}/>一并审理</div>
      <div style={{fontSize:28,fontWeight:900,paddingTop:6}}>当事人同意由二审法院一并审理</div>
      <div data-final-knowledge="consent-joint-adjudication" style={{fontSize:34,fontWeight:900,color:C.red,border:'4px solid '+C.red,backgroundColor:C.red+'0f',alignSelf:'flex-start',padding:'6px 18px',marginTop:2}}>可以一并裁判</div>
      <div style={{display:'flex',alignItems:'center',gap:8,marginTop:'auto'}}>
        <FileText size={24} color={C.teal}/>
        <div data-stateful-terminal="claim-doc" style={{fontSize:22,fontWeight:900,border:'3px solid '+C.teal,color:C.teal,backgroundColor:C.teal+'0d',padding:'5px 12px'}}>请求文书 · 并入一并裁判</div>
      </div>
    </Enter>
    <div style={{position:'absolute',left:100,top:620,right:100,height:260,border:'4px solid '+C.ink,backgroundColor:C.paper,padding:'14px 22px'}}>
      <div style={{fontSize:22,fontWeight:900,color:C.teal}}>发回重审侧轨</div>
      <div style={{position:'absolute',left:22,top:110,width:380,height:110,border:'3px solid '+C.ink,backgroundColor:C.gold+'14',display:'flex',alignItems:'center',gap:12,padding:'0 16px'}}>
        <Undo2 size={30} color={C.gold}/>
        <div style={{fontSize:30,fontWeight:900}}>二审发回重审</div>
      </div>
      <HArrow left={478} top={148} width={50} delay={186}/>
      <div data-final-knowledge="remand-rehearsed-first-instance" style={{position:'absolute',left:530,top:110,width:440,height:110,border:'3px solid '+C.ink,backgroundColor:C.paper,display:'flex',alignItems:'center',gap:12,padding:'0 16px'}}>
        <Scale size={30} color={C.teal}/>
        <div style={{fontSize:28,fontWeight:900}}>按一审程序重新审理</div>
      </div>
      <HArrow left={968} top={148} width={128} delay={206}/>
      <div data-final-knowledge="remand-merge-ok" style={{position:'absolute',left:1098,top:110,width:560,height:110,border:'3px solid '+C.ink,backgroundColor:C.paper,display:'flex',alignItems:'center',gap:12,padding:'0 16px'}}>
        <div style={{display:'flex',flexDirection:'column',gap:4}}>
          <div style={{display:'flex',alignItems:'center',gap:8,fontSize:24,fontWeight:900}}><User size={24}/><UserRound size={24}/>重审中增加、变更请求 · 反诉</div>
          <div style={{fontSize:26,fontWeight:900,color:C.red}}>法院合并审理即可</div>
        </div>
      </div>
    </div>
  </div></Shell>;

export const RetrialScopeBoundaryExceptionsScene=()=> <Shell code="20.4" title="再审：范围有限原则与四例外"><div data-layout="retrial-scope-boundary-exception-rack-diagram" data-visual-anchor="boundary" data-visual-grammar="original-scope-boundary,reject-beyond-scope,remand-exception-rack,four-permission-grounds" data-text-treatments="stamp,external-negation,thin-underline" data-focal-rule="retrial-scope-boundary-rule" data-focal-channels="icon,enclosure,contrast" style={{position:'absolute',inset:0}}>
    <div data-final-knowledge="scope-limited" style={{position:'absolute',left:100,top:164,width:760,height:748,border:'5px solid '+C.teal,backgroundColor:C.teal+'0a'}}>
      <div style={{position:'absolute',left:20,top:20,right:20,height:66,backgroundColor:C.teal,color:C.paper,display:'flex',alignItems:'center',justifyContent:'center',gap:12,fontSize:30,fontWeight:900}}>
        <RotateCcw size={30}/>
        <span>再审以<span style={{textDecoration:'underline',textDecorationThickness:3,textUnderlineOffset:6}}>原审范围</span>为限</span>
      </div>
      <div data-stateful-source="claim-doc" style={{position:'absolute',left:interpolate(toSourceFrame(useCurrentFrame()),[28,104],[140,400],CLAMP),top:300,width:300,height:88,display:'flex',alignItems:'center',gap:12,border:'4px solid '+C.ink,backgroundColor:C.paper,boxShadow:'8px 8px 0 #18242b20',padding:'0 14px'}}>
        <FileText size={30} color={C.red}/>
        <div>
          <div style={{fontSize:24,fontWeight:900}}>请求文书</div>
          <div style={{fontSize:22,fontWeight:700,color:C.teal}}>超出原审范围</div>
        </div>
      </div>
      <div style={{position:'absolute',left:540,top:392,width:10,height:26}}>
        <div style={{position:'absolute',left:4,top:0,width:2,height:16,backgroundColor:C.red,opacity:interpolate(toSourceFrame(useCurrentFrame()),[118,126],[0,1],CLAMP)}}/>
        <div style={{position:'absolute',left:0,top:14,width:10,height:12,backgroundColor:C.red,clipPath:'polygon(0 0,100% 0,50% 100%)',opacity:interpolate(toSourceFrame(useCurrentFrame()),[124,132],[0,1],CLAMP)}}/>
      </div>
      <div data-final-knowledge="reject-beyond-scope" style={{position:'absolute',left:20,top:420,right:20,height:196,border:'4px solid '+C.red,backgroundColor:C.red+'0a',padding:'18px 20px',display:'flex',flexDirection:'column',gap:16}}>
        <div style={{display:'flex',alignItems:'center',gap:14}}>
          <div style={{width:44,height:44,border:'3px solid '+C.red,color:C.red,display:'grid',placeItems:'center',flexShrink:0}}><X size={26}/></div>
          <div style={{fontSize:24,fontWeight:900,lineHeight:1.4}}>超出原审范围：增加、变更诉讼请求 / 提出反诉</div>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <FileX size={34} color={C.red}/>
          <div style={{fontSize:38,fontWeight:900,color:C.red,border:'4px solid '+C.red,backgroundColor:C.red+'0f',padding:'6px 20px'}}>不予审理</div>
        </div>
      </div>
      <div style={{position:'absolute',left:20,top:660,right:20,height:72,display:'flex',alignItems:'center',justifyContent:'center',gap:24}}>
        <div style={{fontSize:30,fontWeight:900,border:'4px solid '+C.ink,backgroundColor:C.paper,padding:'8px 20px'}}>原审范围</div>
        <div style={{fontSize:34,fontWeight:900,color:C.gold}}>＝</div>
        <div style={{fontSize:30,fontWeight:900,border:'4px solid '+C.teal,color:C.teal,backgroundColor:C.teal+'0d',padding:'8px 20px'}}>再审审理范围</div>
      </div>
    </div>
    <Enter delay={74} from="right" style={{position:'absolute',left:920,top:164,width:860,height:96,border:'4px solid '+C.gold,backgroundColor:C.gold+'28',display:'flex',alignItems:'center',gap:14,padding:'0 20px'}}>
      <RotateCcw size={30} color={C.gold}/>
      <div data-final-knowledge="remand-still-retrial" style={{fontSize:26,fontWeight:900,color:C.ink}}>撤销原判 · 发回重审 —— 仍属再审程序，原则上不允许</div>
    </Enter>
    <div data-final-knowledge="four-grounds-permitted" style={{position:'absolute',left:920,top:280,width:860,height:632,border:'4px solid '+C.ink,backgroundColor:C.paper,boxShadow:'10px 10px 0 #18242b20'}}>
      <div style={{position:'absolute',left:20,top:20,right:20,height:62,display:'flex',alignItems:'center',gap:16}}>
        <div style={{fontSize:26,fontWeight:900,color:C.red,border:'4px solid '+C.red,backgroundColor:C.red+'0f',padding:'6px 16px',whiteSpace:'nowrap'}}>符合下列情形之一 → 法院应当准许</div>
        <div style={{display:'flex',alignItems:'center',gap:8}}>
          <FileText size={22} color={C.teal}/>
          <div data-stateful-terminal="claim-doc" style={{fontSize:22,fontWeight:900,border:'3px solid '+C.teal,color:C.teal,backgroundColor:C.teal+'0d',padding:'4px 12px',whiteSpace:'nowrap'}}>请求文书 · 经准许</div>
        </div>
      </div>
      <div style={{position:'absolute',left:20,top:104,right:20,bottom:20,display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gridTemplateRows:'repeat(2,minmax(0,1fr))',gap:24}}>
        <ExceptionChip delay={120} icon={<BellOff size={30} color={C.red}/>} label="原审未合法传唤 · 缺席判决" sub="影响当事人行使诉讼权利"/>
        <ExceptionChip delay={140} icon={<UserPlus size={30} color={C.red}/>} label="追加新的当事人"/>
        <ExceptionChip delay={160} icon={<PackageX size={30} color={C.red}/>} label="诉讼标的物灭失或变化" sub="原诉讼请求无法实现"/>
        <ExceptionChip delay={180} icon={<DoorClosed size={30} color={C.red}/>} label="无法通过另诉解决"/>
      </div>
    </div>
  </div></Shell>;

export const InstanceClaimCounterclaimMap=()=> <AbsoluteFill>
    <TimelineSequence name="01-overview" start={SCENES.overview.start} duration={SCENES.overview.duration}><ThreeInstanceOverviewScene/></TimelineSequence>
    <TimelineSequence name="02-first-instance" start={SCENES.firstInstance.start} duration={SCENES.firstInstance.duration}><FirstInstanceRequestWindowScene/></TimelineSequence>
    <TimelineSequence name="03-second-instance" start={SCENES.secondInstance.start} duration={SCENES.secondInstance.duration}><SecondInstanceMediationForkScene/></TimelineSequence>
    <TimelineSequence name="04-retrial" start={SCENES.retrial.start} duration={SCENES.retrial.duration}><RetrialScopeBoundaryExceptionsScene/></TimelineSequence>
  </AbsoluteFill>;
