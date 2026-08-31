import type {ReactNode} from 'react';
import {Factory, Megaphone, Handshake, Landmark, Stethoscope, ScrollText, ClipboardCheck, Users, Building2, Ban, CircleDollarSign} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#E9EEF2', ink:'#1C232B', blue:'#2C5F8A', orange:'#D97A2E', teal:'#3E6B5C', paper:'#F7FAFC'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:0,top:0,right:0,height:12,background:'repeating-linear-gradient(90deg,'+COLORS.orange+' 0 22px,'+COLORS.ink+' 22px 44px)'}}/>
    <div style={{position:'absolute',left:76,top:36,padding:'12px 22px',background:COLORS.ink,color:COLORS.orange,fontSize:24,fontWeight:900,letterSpacing:4,border:'3px solid '+COLORS.blue}}>{code}</div>
    <div style={{position:'absolute',left:76,right:76,top:120,fontSize:48,fontWeight:900,lineHeight:1.08,borderLeft:'12px solid '+COLORS.blue,paddingLeft:22}}>{title}</div>
    <div style={{position:'absolute',left:76,right:76,top:206,bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

const Belt=({color,width}:{readonly color:string;readonly width:number})=>(
  <div style={{width,height:14,background:'repeating-linear-gradient(90deg,'+color+' 0 16px,transparent 16px 26px)',borderTop:'3px solid '+COLORS.ink,borderBottom:'3px solid '+COLORS.ink}}/>
);

export const CompanyIncorporation01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="02.1" title="设立方式：发起 与 募集">
    <div data-layout="assembly-dual-line-1" data-visual-anchor="comparison-axis" data-visual-grammar="dual-line-contrast,thirty-five-floor" data-text-treatments="label-block,thin-underline,soft-highlight" data-focal-rule="company-incorporation-scene-01-rule" data-focal-channels="contrast,spatial,icon" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="company-incorporation-knowledge-1" style={{position:'absolute',left:0,right:0,top:0,textAlign:'center',fontSize:24,fontWeight:900,letterSpacing:6,color:COLORS.blue,opacity:enter(12,36)}}>区分关键：发起人是否找外人</div>
      <div data-final-knowledge="company-incorporation-scene-01-mode-0" style={{position:'absolute',left:24,top:56,bottom:160,width:846,border:'5px solid '+COLORS.blue,background:COLORS.blue+'2A',opacity:enter(28,54),translate:slide(28,54,'-26px 0px'),display:'flex',flexDirection:'column'}}>
        <Factory size={170} color={COLORS.blue} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:-4,opacity:0.08,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:16,padding:'14px 22px',background:COLORS.ink,color:COLORS.paper}}>
          <Factory size={38} color={COLORS.orange}/>
          <div style={{fontSize:30,fontWeight:900}}>发起设立</div>
          <div style={{marginLeft:'auto',padding:'5px 14px',border:'2px solid '+COLORS.blue,color:COLORS.blue,fontSize:21,fontWeight:900,background:COLORS.paper}}>不找外人</div>
        </div>
        <div style={{flex:1,padding:'18px 24px',display:'grid',gap:12,alignContent:'center'}}>
          <div style={{fontSize:26,fontWeight:800,lineHeight:1.5,padding:'14px 16px',background:COLORS.blue+'40'}}>发起人认购应发行的<span style={{background:COLORS.blue+'30',padding:'2px 8px',fontWeight:900}}>全部股份</span></div>
          <div style={{fontSize:26,fontWeight:800,lineHeight:1.5,padding:'14px 16px',background:COLORS.blue+'40',display:'flex',alignItems:'center',gap:10}}><Building2 size={28} color={COLORS.blue}/>适用：<span style={{fontWeight:900}}>有限责任公司</span> / <span style={{fontWeight:900}}>股份有限公司</span></div>
        </div>
        <Belt color={COLORS.blue} width={846}/>
      </div>
      <div data-final-knowledge="company-incorporation-scene-01-mode-1" style={{position:'absolute',right:24,top:56,bottom:160,width:846,border:'5px solid '+COLORS.orange,background:COLORS.orange+'2E',opacity:enter(46,72),translate:slide(46,72,'26px 0px'),display:'flex',flexDirection:'column'}}>
        <Megaphone size={170} color={COLORS.orange} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:-4,opacity:0.08,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:16,padding:'14px 22px',background:COLORS.ink,color:COLORS.paper}}>
          <Megaphone size={38} color={COLORS.orange}/>
          <div style={{fontSize:30,fontWeight:900}}>募集设立</div>
          <div style={{marginLeft:'auto',padding:'5px 14px',border:'2px solid '+COLORS.orange,color:COLORS.orange,fontSize:21,fontWeight:900,background:COLORS.paper}}>得找外人</div>
        </div>
        <div style={{flex:1,padding:'18px 24px',display:'grid',gap:12,alignContent:'center'}}>
          <div style={{fontSize:26,fontWeight:800,lineHeight:1.5,padding:'14px 16px',background:COLORS.orange+'40'}}>发起人认购应发行股份的<span style={{background:COLORS.orange+'32',padding:'2px 8px',fontWeight:900}}>35%以上</span>，其余公开或向特定对象募集</div>
          <div style={{fontSize:26,fontWeight:800,lineHeight:1.5,padding:'14px 16px',background:COLORS.orange+'40'}}>适用：<span style={{fontWeight:900}}>仅股份有限公司</span></div>
        </div>
        <Belt color={COLORS.orange} width={846}/>
      </div>
      <div style={{position:'absolute',left:1304,top:614,width:5,height:interpolate(frame,[90,116],[0,58],CLAMP),background:COLORS.orange}}/>
      <div style={{position:'absolute',left:1291,top:668,width:0,height:0,borderTop:'13px solid '+COLORS.orange,borderLeft:'10px solid transparent',borderRight:'10px solid transparent',opacity:enter(114,126)}}/>
      <div style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.ink,background:COLORS.orange+'2A',padding:'13px 24px',opacity:enter(78,106)}}>
        <ClipboardCheck size={36} color={COLORS.orange}/>
        <div style={{fontSize:24,fontWeight:800,lineHeight:1.4}}>募集设立需<span style={{background:COLORS.blue+'24',padding:'2px 8px',fontWeight:900}}>承销 + 代收股款</span>双协议；发起人认购股份<span style={{borderBottom:'4px solid '+COLORS.orange,paddingBottom:2,fontWeight:900}}>缴足前不得向他人募集</span></div>
      </div>
    </div>
  </Shell>;
};

export const CompanyIncorporation02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const progress=interpolate(frame,[110,300],[0,1],CLAMP);
  const Station=({n,title,caption,color,delay,icon}:{readonly n:string;readonly title:string;readonly caption:string;readonly color:string;readonly delay:number;readonly icon:ReactNode})=>(
    <div style={{opacity:enter(delay,delay+26),translate:interpolate(frame,[delay,delay+26],['0px 24px','0px 0px'],CLAMP)}}>
      <div style={{display:'grid',gridTemplateColumns:'56px 1fr',gap:12,alignItems:'center',padding:'16px',border:'4px solid '+COLORS.ink,background:color+'5C',minHeight:170}}>
        <div style={{width:56,height:56,border:'4px solid '+COLORS.ink,background:color,color:COLORS.paper,display:'grid',placeItems:'center',fontSize:26,fontWeight:900}}>{n}</div>
        <div>
          <div style={{display:'flex',alignItems:'center',gap:10,fontSize:25,fontWeight:900,marginBottom:8}}>{icon}{title}</div>
          <div style={{fontSize:24,fontWeight:700,color:COLORS.blue,lineHeight:1.45}}>{caption}</div>
        </div>
      </div>
    </div>
  );
  return <Shell code="02.1" title="募集设立流程与成立大会">
    <div data-layout="raising-conveyor-2" data-visual-anchor="flow-path" data-visual-grammar="conveyor-stations,dual-protocol-fork" data-text-treatments="soft-highlight,stamp,thin-underline" data-focal-rule="company-incorporation-scene-02-rule" data-focal-channels="connector,motion,enclosure" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="company-incorporation-knowledge-2" style={{position:'absolute',left:0,right:0,top:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <Megaphone size={34} color={COLORS.orange}/>
        <div style={{padding:'8px 18px',background:COLORS.orange,color:COLORS.paper,fontSize:23,fontWeight:900}}>前置</div>
        <div style={{fontSize:25,fontWeight:900}}>发起人认购≥35%并<span style={{borderBottom:'4px solid '+COLORS.orange,paddingBottom:2}}>实缴</span>，缴足验资后<span style={{background:COLORS.orange+'28',padding:'2px 8px'}}>30日内</span>召开成立大会</div>
      </div>
      <div style={{position:'absolute',left:0,right:0,top:74,display:'grid',gridTemplateColumns:'repeat(4,minmax(0,1fr))',gap:16}}>
        <div data-final-knowledge="company-incorporation-scene-02-step-0"><Station n="1" title="公告招股说明书" caption="制作认股书 · 向募集对象介绍" color={COLORS.blue} delay={28} icon={<Megaphone size={26} color={COLORS.blue}/>}/></div>
        <div data-final-knowledge="company-incorporation-scene-02-step-1"><Station n="2" title="承销协议" caption="公司同证券公司签订 · 由证券公司募集" color={COLORS.teal} delay={46} icon={<Handshake size={26} color={COLORS.teal}/>}/></div>
        <div data-final-knowledge="company-incorporation-scene-02-step-2"><Station n="3" title="代收股款协议" caption="公司同银行签订 · 募集资金存银行" color={COLORS.teal} delay={64} icon={<Landmark size={26} color={COLORS.teal}/>}/></div>
        <div data-final-knowledge="company-incorporation-scene-02-step-3"><Station n="4" title="验资机构验资" caption="股款缴足后验资 · 出具证明" color={COLORS.orange} delay={82} icon={<Stethoscope size={26} color={COLORS.orange}/>}/></div>
      </div>
      <div style={{position:'absolute',left:0,right:0,top:280,height:0}}/>
      <div style={{position:'absolute',left:0,top:280,width:1768,height:14,background:'repeating-linear-gradient(90deg,'+COLORS.ink+' 0 16px,transparent 16px 26px)',borderTop:'3px solid '+COLORS.blue,borderBottom:'3px solid '+COLORS.blue}}/>
      <div style={{position:'absolute',left:0,top:280,width:interpolate(progress,[0,1],[0,1768],CLAMP),height:14,background:'repeating-linear-gradient(90deg,'+COLORS.orange+' 0 16px,transparent 16px 26px)'}}/>
      <div data-stateful-source="company-incorporation-raising-progress" style={{position:'absolute',left:interpolate(progress,[0,1],[0,1724],CLAMP),top:268,width:44,height:38,background:COLORS.orange,border:'4px solid '+COLORS.ink,opacity:progress>0.95?0:1,zIndex:4}}/>
      <div data-final-knowledge="company-incorporation-scene-02-congress" style={{position:'absolute',left:0,right:0,top:380,bottom:0,display:'flex',alignItems:'center',gap:18,border:'4px solid '+COLORS.blue,background:COLORS.blue+'4D',padding:'16px 26px',opacity:enter(124,152)}}>
        <Users size={150} color={COLORS.blue} strokeWidth={1.2} style={{position:'absolute',right:6,bottom:-6,opacity:0.07,pointerEvents:'none'}}/>
        <Users size={36} color={COLORS.blue}/>
        <div style={{padding:'8px 20px',border:'4px solid '+COLORS.blue,color:COLORS.blue,fontSize:24,fontWeight:900,background:COLORS.paper}}>成立大会</div>
        <div style={{flex:1,display:'grid',gap:9}}>
          <div style={{fontSize:22,fontWeight:800,lineHeight:1.4,padding:'8px 14px',background:COLORS.paper,borderLeft:'5px solid '+COLORS.blue,opacity:enter(136,158)}}>出席：<span style={{fontWeight:900,color:COLORS.blue}}>表决权过半数</span>的认股人</div>
          <div style={{fontSize:22,fontWeight:800,lineHeight:1.4,padding:'8px 14px',background:COLORS.paper,borderLeft:'5px solid '+COLORS.blue,opacity:enter(146,168)}}>通过：出席会议的认股人所持表决权<span style={{fontWeight:900,color:COLORS.blue}}>过半数</span></div>
          <div style={{fontSize:22,fontWeight:800,lineHeight:1.4,padding:'8px 14px',background:COLORS.paper,borderLeft:'5px solid '+COLORS.blue,opacity:enter(156,178)}}>会后30日内：<span style={{fontWeight:900}}>董事会</span>授权代表申请<span style={{fontWeight:900}}>设立登记</span></div>
        </div>
        <div data-stateful-terminal="company-incorporation-raising-progress" style={{marginLeft:'auto',padding:'8px 18px',border:'3px solid '+COLORS.ink,background:COLORS.orange,color:COLORS.paper,fontSize:21,fontWeight:900,opacity:enter(152,172)}}>募集完成</div>
      </div>
    </div>
  </Shell>;
};

export const CompanyIncorporation03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const boundaryProgress=interpolate(frame,[96,160],[0,1],CLAMP);
  return <Shell code="02.1" title="设立条件与章程效力">
    <div data-layout="spec-sheet-boundary-3" data-visual-anchor="boundary" data-visual-grammar="charter-boundary,spec-sheet" data-text-treatments="label-block,external-negation,soft-highlight" data-focal-rule="company-incorporation-scene-03-rule" data-focal-channels="enclosure,annotation,spatial" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="company-incorporation-knowledge-3" style={{position:'absolute',left:0,top:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <ScrollText size={40} color={COLORS.blue}/>
        <div style={{fontSize:29,fontWeight:900}}>章程：必备性 · 法定性 · 自治性</div>
      </div>
      <div style={{position:'absolute',left:0,top:96,width:interpolate(boundaryProgress,[0,1],[0,940],CLAMP),height:6,background:COLORS.orange,opacity:enter(96,118)}}/>
      <div style={{position:'absolute',left:150,top:56,width:5,height:interpolate(frame,[110,130],[0,64],CLAMP),background:COLORS.blue}}/>
      <div style={{position:'absolute',left:137,top:116,width:0,height:0,borderTop:'13px solid '+COLORS.blue,borderLeft:'10px solid transparent',borderRight:'10px solid transparent',opacity:enter(128,140)}}/>
      <div style={{position:'absolute',left:150,top:126,width:5,height:interpolate(frame,[140,168],[0,258],CLAMP),background:COLORS.orange}}/>
      <div style={{position:'absolute',left:137,top:380,width:0,height:0,borderTop:'13px solid '+COLORS.orange,borderLeft:'10px solid transparent',borderRight:'10px solid transparent',opacity:enter(168,180)}}/>
      <div data-final-knowledge="company-incorporation-scene-03-charter-in" style={{position:'absolute',left:0,top:128,bottom:400,width:920,padding:'20px 26px',border:'5px solid '+COLORS.blue,background:COLORS.blue+'38',opacity:enter(48,74),translate:interpolate(frame,[48,74],['0px 20px','0px 0px'],CLAMP),display:'flex',flexDirection:'column',justifyContent:'center',gap:12}}>
        <ScrollText size={140} color={COLORS.blue} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:-2,opacity:0.08,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <Building2 size={34} color={COLORS.blue}/>
          <div style={{padding:'7px 16px',background:COLORS.blue,color:COLORS.paper,fontSize:23,fontWeight:900}}>对内</div>
          <div style={{fontSize:27,fontWeight:900}}>有约束力</div>
        </div>
        <div style={{fontSize:25,fontWeight:800,lineHeight:1.6}}>对<span style={{fontWeight:900,color:COLORS.blue,background:COLORS.blue+'14',padding:'2px 8px'}}>公司、股东、董监高</span>有约束力</div>
      </div>
      <div data-final-knowledge="company-incorporation-scene-03-charter-out" style={{position:'absolute',left:0,top:390,bottom:0,width:920,padding:'20px 26px',border:'5px dashed '+COLORS.orange,background:COLORS.orange+'4D',opacity:enter(66,92),translate:interpolate(frame,[66,92],['0px 20px','0px 0px'],CLAMP),display:'flex',flexDirection:'column',justifyContent:'center',gap:12}}>
        <Ban size={140} color={COLORS.orange} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:-2,opacity:0.08,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <Ban size={34} color={COLORS.orange}/>
          <div style={{fontSize:27,fontWeight:900}}>对外<span style={{color:COLORS.orange}}>不发生约束力</span></div>
        </div>
        <div style={{fontSize:25,fontWeight:800,lineHeight:1.6}}>对公司外部人（如债权人）不约束，<span style={{background:COLORS.orange+'28',padding:'2px 6px',fontWeight:900}}>不得对抗善意相对人</span></div>
      </div>
      <div data-final-knowledge="company-incorporation-scene-03-capital" style={{position:'absolute',right:0,top:96,bottom:430,width:770,padding:'22px 26px',border:'4px solid '+COLORS.ink,background:COLORS.blue+'2E',opacity:enter(40,66),translate:interpolate(frame,[40,66],['0px 20px','0px 0px'],CLAMP),display:'flex',flexDirection:'column',justifyContent:'center',gap:10}}>
        <CircleDollarSign size={140} color={COLORS.blue} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:-2,opacity:0.08,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:12,fontSize:27,fontWeight:900}}>
          <CircleDollarSign size={34} color={COLORS.blue}/>
          <span>注册资本<span style={{background:COLORS.blue+'26',padding:'2px 8px'}}>无最低限额</span></span>
        </div>
        <div style={{fontSize:24,fontWeight:800,lineHeight:1.6}}>理论上<span style={{fontWeight:900,color:COLORS.blue,background:COLORS.blue+'14',padding:'1px 8px'}}>1元也可设立</span>公司（法律、行政法规及国务院另有规定的除外）</div>
      </div>
      <div data-final-knowledge="company-incorporation-scene-03-persons" style={{position:'absolute',right:0,top:350,bottom:0,width:770,padding:'22px 26px',border:'4px solid '+COLORS.ink,background:COLORS.blue+'2E',opacity:enter(58,84),translate:interpolate(frame,[58,84],['0px 20px','0px 0px'],CLAMP),display:'flex',flexDirection:'column',justifyContent:'center',gap:12}}>
        <Users size={140} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:-2,opacity:0.08,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:27,fontWeight:900}}>
          <Users size={34} color={COLORS.teal}/>
          <span>人数与资本</span>
        </div>
        <div style={{fontSize:24,fontWeight:800,lineHeight:1.6}}>有限：股东<span style={{fontWeight:900,color:COLORS.blue}}>1–50人</span>，注册资本＝全体股东认缴出资额</div>
        <div style={{fontSize:24,fontWeight:800,lineHeight:1.6}}>股份：发起人<span style={{fontWeight:900,color:COLORS.blue}}>1–200人</span>＋半数以上境内有住所（无国籍要求）；注册资本＝实收股本总额（<span style={{fontWeight:900}}>实缴制</span>）</div>
      </div>
    </div>
  </Shell>;
};

export const CompanyIncorporation=()=> <AbsoluteFill>
  <TimelineSequence name="01-company-incorporation-scene-01" start={SCENES['company-incorporation-scene-01'].start} duration={SCENES['company-incorporation-scene-01'].duration}><CompanyIncorporation01Scene/></TimelineSequence>
  <TimelineSequence name="02-company-incorporation-scene-02" start={SCENES['company-incorporation-scene-02'].start} duration={SCENES['company-incorporation-scene-02'].duration}><CompanyIncorporation02Scene/></TimelineSequence>
  <TimelineSequence name="03-company-incorporation-scene-03" start={SCENES['company-incorporation-scene-03'].start} duration={SCENES['company-incorporation-scene-03'].duration}><CompanyIncorporation03Scene/></TimelineSequence>
</AbsoluteFill>;