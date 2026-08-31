import type {ReactNode} from 'react';
import {BookUser, BadgeCheck, Users, Landmark, UserCheck, Globe, Hourglass, Scale, Ban} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#F4EFE3', ink:'#232735', blue:'#2B6E8F', red:'#A8442E', gold:'#C8A03A', paper:'#FAF5EA'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.blue,color:COLORS.paper}}>{code}</div>
    <div style={{position:'absolute',left:190,right:76,top:46,fontSize:46,fontWeight:900,lineHeight:1.12,borderBottom:'5px solid '+COLORS.gold,paddingBottom:12}}>{title}</div>
    <div style={{position:'absolute',left:76,right:76,top:150,bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

const FactRow=({icon,tone,delay,children}:{readonly icon:ReactNode;readonly tone:string;readonly delay:number;readonly children:ReactNode})=>{
  const frame=useCurrentFrame();
  return (
    <div style={{display:'flex',alignItems:'flex-start',gap:12,fontSize:23,fontWeight:800,lineHeight:1.45,padding:'11px 14px',background:COLORS.paper,borderLeft:'6px solid '+tone,opacity:interpolate(frame,[delay,delay+24],[0,1],CLAMP),translate:interpolate(frame,[delay,delay+24],['0px 18px','0px 0px'],CLAMP)}}>
      <span style={{flexShrink:0,marginTop:2}}>{icon}</span>
      <span>{children}</span>
    </div>
  );
};

export const ShareholderQualification01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="03.1" title="名册对内 · 登记对外">
    <div data-layout="roster-ledger-split-1" data-visual-anchor="comparison-axis" data-visual-grammar="roster-vs-registry,inner-outer-rule" data-text-treatments="label-block,thin-underline,soft-highlight" data-focal-rule="shareholder-qualification-scene-01-rule" data-focal-channels="contrast,spatial,icon" style={{position:'absolute',inset:0}}>
      <div style={{position:'absolute',left:'50%',top:70,bottom:0,width:6,background:COLORS.ink,opacity:enter(40,60)}}/>
      <div data-final-knowledge="shareholder-qualification-knowledge-1" style={{position:'absolute',left:0,right:0,top:0,textAlign:'center',fontSize:27,fontWeight:900,letterSpacing:4,opacity:enter(12,36)}}>记忆口诀：<span style={{background:COLORS.blue+'30',padding:'2px 12px'}}>对内看名册</span> · <span style={{background:COLORS.gold+'40',padding:'2px 12px'}}>对外看登记</span>（内查外信）</div>
      <div data-final-knowledge="shareholder-qualification-scene-01-roster" style={{position:'absolute',left:24,top:70,bottom:0,width:830,padding:'20px 26px',border:'5px solid '+COLORS.blue,background:COLORS.blue+'4D',opacity:enter(28,54),translate:slide(28,54,'-26px 0px'),display:'flex',flexDirection:'column',justifyContent:'center',gap:12}}>
        <BookUser size={130} color={COLORS.blue} strokeWidth={1.2} style={{position:'absolute',right:2,bottom:-2,opacity:0.09,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:14}}>
          <BookUser size={44} color={COLORS.blue}/>
          <div style={{padding:'8px 18px',background:COLORS.ink,color:COLORS.paper,fontSize:28,fontWeight:900}}>股东名册</div>
          <div style={{fontSize:24,fontWeight:900,color:COLORS.blue,background:COLORS.paper,padding:'4px 12px'}}>对内 · 法定证明文件</div>
        </div>
        <FactRow icon={<Users size={28} color={COLORS.blue}/>} tone={COLORS.blue} delay={40}>记载<span style={{fontWeight:900}}>全体股东</span>身份信息＋出资信息</FactRow>
        <FactRow icon={<BadgeCheck size={28} color={COLORS.blue}/>} tone={COLORS.blue} delay={54}>是<span style={{fontWeight:900,background:COLORS.blue+'22',padding:'2px 6px'}}>股东身份的法定证明文件</span></FactRow>
        <FactRow icon={<UserCheck size={28} color={COLORS.blue}/>} tone={COLORS.blue} delay={68}>记载于名册的股东，可<span style={{fontWeight:900,background:COLORS.blue+'22',padding:'2px 6px'}}>依名册向公司主张</span>行使股东权利</FactRow>
        <FactRow icon={<Scale size={28} color={COLORS.blue}/>} tone={COLORS.blue} delay={82}>股权转让的，受让人<span style={{fontWeight:900,borderBottom:'3px solid '+COLORS.blue,paddingBottom:1}}>自记载于名册时起</span>可向公司主张权利</FactRow>
      </div>
      <div data-final-knowledge="shareholder-qualification-scene-01-registry" style={{position:'absolute',right:24,top:70,bottom:0,width:830,padding:'20px 26px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'4D',opacity:enter(46,72),translate:slide(46,72,'26px 0px'),display:'flex',flexDirection:'column',justifyContent:'center',gap:12}}>
        <Landmark size={130} color={COLORS.gold} strokeWidth={1.2} style={{position:'absolute',right:2,bottom:-2,opacity:0.09,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:14}}>
          <Landmark size={44} color={COLORS.gold}/>
          <div style={{padding:'8px 18px',background:COLORS.ink,color:COLORS.paper,fontSize:28,fontWeight:900}}>工商登记</div>
          <div style={{fontSize:24,fontWeight:900,color:'#7A5B12',background:COLORS.paper,padding:'4px 12px'}}>对外 · 公信力</div>
        </div>
        <FactRow icon={<Globe size={28} color={COLORS.gold}/>} tone={COLORS.gold} delay={58}>仅具有<span style={{fontWeight:900,background:COLORS.gold+'3A',padding:'2px 6px'}}>程序性意义</span></FactRow>
        <FactRow icon={<UserCheck size={28} color={COLORS.gold}/>} tone={COLORS.gold} delay={72}>未经登记<span style={{fontWeight:900,borderBottom:'3px solid '+COLORS.gold,paddingBottom:1}}>不影响股东资格</span></FactRow>
        <FactRow icon={<BadgeCheck size={28} color={COLORS.gold}/>} tone={COLORS.gold} delay={86}>登记才产生<span style={{fontWeight:900,background:COLORS.gold+'3A',padding:'2px 6px'}}>对外公信力</span></FactRow>
        <FactRow icon={<Ban size={28} color={COLORS.gold}/>} tone={COLORS.gold} delay={100}>未经登记或变更登记，<span style={{fontWeight:900,color:COLORS.red,background:COLORS.paper,padding:'1px 6px'}}>不得对抗善意相对人</span></FactRow>
      </div>
    </div>
  </Shell>;
};

export const ShareholderQualification02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="03.1" title="身份冲突：名册三金 · 登记四金">
    <div data-layout="identity-clash-2" data-visual-anchor="role-pair" data-visual-grammar="internal-roster-side,external-trust-side" data-text-treatments="soft-highlight,external-negation,label-block" data-focal-rule="shareholder-qualification-scene-02-rule" data-focal-channels="contrast,locator,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="shareholder-qualification-knowledge-2" style={{position:'absolute',left:0,right:0,top:0,display:'flex',alignItems:'center',gap:16,opacity:enter(12,36)}}>
        <Users size={42} color={COLORS.blue}/>
        <div style={{fontSize:27,fontWeight:900,lineHeight:1.4}}>三金出资后<span style={{background:COLORS.blue+'26',padding:'2px 8px'}}>记载于名册</span>，但工商登记上只有<span style={{background:COLORS.gold+'3A',padding:'2px 8px'}}>股东四金</span></div>
      </div>
      <div data-final-knowledge="shareholder-qualification-scene-02-inside" style={{position:'absolute',left:24,top:110,bottom:170,width:830,padding:'20px 26px',border:'5px solid '+COLORS.blue,background:COLORS.blue+'4D',opacity:enter(28,54),translate:interpolate(frame,[28,54],['-170px 0px','0px 0px'],CLAMP),display:'flex',flexDirection:'column',justifyContent:'center',gap:12}}>
        <BookUser size={130} color={COLORS.blue} strokeWidth={1.2} style={{position:'absolute',right:2,bottom:-2,opacity:0.09,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <BookUser size={38} color={COLORS.blue}/>
          <div style={{padding:'8px 18px',background:COLORS.blue,color:COLORS.paper,fontSize:26,fontWeight:900}}>公司内部 → 看名册</div>
        </div>
        <FactRow icon={<UserCheck size={28} color={COLORS.blue}/>} tone={COLORS.blue} delay={44}><span style={{background:COLORS.blue+'26',padding:'2px 6px',fontWeight:900}}>三金</span>可依股东名册的记载，<span style={{fontWeight:900,background:COLORS.blue+'22',padding:'2px 6px'}}>主张自己就是公司股东</span></FactRow>
        <FactRow icon={<Scale size={28} color={COLORS.blue}/>} tone={COLORS.blue} delay={60}>依据：名册是<span style={{fontWeight:900}}>股东身份的法定证明文件</span></FactRow>
      </div>
      <div data-final-knowledge="shareholder-qualification-scene-02-outside" style={{position:'absolute',right:24,top:110,bottom:170,width:830,padding:'20px 26px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'4D',opacity:enter(46,72),translate:interpolate(frame,[46,72],['170px 0px','0px 0px'],CLAMP),display:'flex',flexDirection:'column',justifyContent:'center',gap:12}}>
        <Landmark size={130} color={COLORS.gold} strokeWidth={1.2} style={{position:'absolute',right:2,bottom:-2,opacity:0.09,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <Landmark size={38} color={COLORS.gold}/>
          <div style={{padding:'8px 18px',background:'#7A5B12',color:COLORS.paper,fontSize:26,fontWeight:900}}>公司外部 → 信登记</div>
        </div>
        <FactRow icon={<Globe size={28} color={COLORS.gold}/>} tone={COLORS.gold} delay={62}>善意第三人有权相信<span style={{background:COLORS.gold+'3A',padding:'2px 6px',fontWeight:900}}>四金</span>是公司<span style={{fontWeight:900}}>唯一股东</span></FactRow>
        <FactRow icon={<Ban size={28} color={COLORS.gold}/>} tone={COLORS.gold} delay={78}>三金<span style={{fontWeight:900,color:COLORS.red,borderBottom:'3px solid '+COLORS.red,paddingBottom:1}}>不得以名册记载对抗</span>善意相对人</FactRow>
      </div>
      <div data-final-knowledge="shareholder-qualification-scene-02-conclusion" style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.red,background:COLORS.red+'30',padding:'16px 26px',opacity:enter(92,120)}}>
        <Scale size={38} color={COLORS.red}/>
        <div style={{fontSize:25,fontWeight:900,lineHeight:1.45}}>三金<span style={{color:COLORS.red,borderBottom:'4px solid '+COLORS.red,paddingBottom:2}}>不得以名册记载对抗善意相对人</span>——名册对内、登记对外</div>
        <div style={{marginLeft:'auto',padding:'8px 18px',border:'3px solid '+COLORS.ink,background:COLORS.red,color:COLORS.paper,fontSize:22,fontWeight:900,transform:'rotate(-2deg)',opacity:enter(116,136)}}>对外看登记</div>
      </div>
    </div>
  </Shell>;
};

export const ShareholderQualification03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const gateProgress=interpolate(frame,[120,210],[0,1],CLAMP);
  return <Shell code="03.1" title="受让人的权利起点">
    <div data-layout="roster-time-gate-3" data-visual-anchor="timeline-gate" data-visual-grammar="registry-time-gate,public-trust-effect" data-text-treatments="stamp,soft-highlight,thin-underline" data-focal-rule="shareholder-qualification-scene-03-rule" data-focal-channels="connector,motion,enclosure" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="shareholder-qualification-knowledge-3" style={{position:'absolute',left:0,right:0,top:0,fontSize:26,fontWeight:900,letterSpacing:4,color:'#7A715F',opacity:enter(12,36)}}>股权转让 → 记载于名册 → 行使股东权利</div>
      <div data-final-knowledge="shareholder-qualification-scene-03-before" style={{position:'absolute',left:0,top:96,bottom:150,width:800,padding:'20px 26px',border:'4px solid '+COLORS.ink,background:COLORS.ink+'3D',opacity:enter(28,54),display:'flex',flexDirection:'column',justifyContent:'center',gap:12}}>
        <Hourglass size={120} color={COLORS.ink} strokeWidth={1.2} style={{position:'absolute',right:2,bottom:-2,opacity:0.08,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:12,fontSize:27,fontWeight:900}}>
          <Hourglass size={34} color={COLORS.ink}/>
          <span>转让完成后 · 记载名册前</span>
        </div>
        <FactRow icon={<Ban size={28} color={COLORS.ink}/>} tone={COLORS.ink} delay={44}>受让人<span style={{fontWeight:900}}>尚未记载于名册</span></FactRow>
        <FactRow icon={<Ban size={28} color={COLORS.ink}/>} tone={COLORS.ink} delay={58}><span style={{fontWeight:900,color:COLORS.red,background:COLORS.paper,padding:'1px 6px'}}>不能向公司主张</span>行使股东权利</FactRow>
      </div>
      <div style={{position:'absolute',left:830,top:130,width:interpolate(gateProgress,[0,1],[0,260],CLAMP),height:8,background:COLORS.blue,opacity:enter(120,142)}}/>
      <div style={{position:'absolute',left:1050,top:112,width:48,height:48,border:'5px solid '+COLORS.blue,background:COLORS.paper,opacity:enter(130,152),zIndex:2}}/>
      <div data-stateful-source="shareholder-qualification-registry-record" style={{position:'absolute',left:interpolate(gateProgress,[0,1],[40,1040],CLAMP),top:170,padding:'10px 20px',border:'4px solid '+COLORS.blue,background:COLORS.paper,color:COLORS.blue,fontSize:23,fontWeight:900,opacity:gateProgress>0.88?0:1,zIndex:3}}>记载于名册</div>
      <div data-final-knowledge="shareholder-qualification-scene-03-after" style={{position:'absolute',right:0,top:96,bottom:150,width:700,padding:'20px 26px',border:'5px solid '+COLORS.blue,background:COLORS.blue+'4D',opacity:enter(150,178),display:'flex',flexDirection:'column',justifyContent:'center',gap:12}}>
        <BadgeCheck size={120} color={COLORS.blue} strokeWidth={1.2} style={{position:'absolute',right:2,bottom:-2,opacity:0.09,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:12,fontSize:27,fontWeight:900,color:COLORS.blue}}>
          <BadgeCheck size={34} color={COLORS.blue}/>
          <span>记载于名册时起</span>
        </div>
        <FactRow icon={<UserCheck size={28} color={COLORS.blue}/>} tone={COLORS.blue} delay={164}>受让人<span style={{fontWeight:900,background:COLORS.paper,padding:'2px 6px'}}>可以向公司主张行使股东权利</span></FactRow>
        <div data-stateful-terminal="shareholder-qualification-registry-record" style={{display:'inline-block',width:'fit-content',marginTop:4,padding:'8px 16px',border:'3px solid '+COLORS.ink,background:COLORS.blue,color:COLORS.paper,fontSize:21,fontWeight:900,opacity:enter(184,204)}}>名册记载完成</div>
      </div>
      <div data-final-knowledge="shareholder-qualification-scene-03-note" style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.gold,background:COLORS.gold+'30',padding:'14px 24px',opacity:enter(104,130)}}>
        <BadgeCheck size={38} color={COLORS.gold}/>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.45}}>对照：<span style={{fontWeight:900}}>工商变更登记</span>仅具程序性意义——未经登记不影响资格，但<span style={{borderBottom:'4px solid '+COLORS.gold,paddingBottom:2,fontWeight:900}}>不得对抗善意相对人</span></div>
      </div>
    </div>
  </Shell>;
};

export const ShareholderQualification=()=> <AbsoluteFill>
  <TimelineSequence name="01-shareholder-qualification-scene-01" start={SCENES['shareholder-qualification-scene-01'].start} duration={SCENES['shareholder-qualification-scene-01'].duration}><ShareholderQualification01Scene/></TimelineSequence>
  <TimelineSequence name="02-shareholder-qualification-scene-02" start={SCENES['shareholder-qualification-scene-02'].start} duration={SCENES['shareholder-qualification-scene-02'].duration}><ShareholderQualification02Scene/></TimelineSequence>
  <TimelineSequence name="03-shareholder-qualification-scene-03" start={SCENES['shareholder-qualification-scene-03'].start} duration={SCENES['shareholder-qualification-scene-03'].duration}><ShareholderQualification03Scene/></TimelineSequence>
</AbsoluteFill>;
