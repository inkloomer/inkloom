import type {ReactNode} from 'react';
import {Building2, Users, ClipboardList, Crown, Lock, PauseCircle, Landmark, MapPin} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#EEF1F2', ink:'#232A33', blue:'#245E8F', red:'#B23A30', gold:'#C9A23C', paper:'#FAFCFC'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.blue,color:COLORS.paper}}>{code}</div>
    <div style={{position:'absolute',left:190,right:76,top:46,fontSize:46,fontWeight:900,lineHeight:1.12,borderBottom:'5px solid '+COLORS.red,paddingBottom:12}}>{title}</div>
    <div style={{position:'absolute',left:76,right:76,top:150,bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

export const BankruptcyApplication01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="09.2" title="谁可以申请什么">
    <div data-layout="application-switch-1" data-visual-anchor="role-pair" data-visual-grammar="applicant-switch,program-restriction" data-text-treatments="label-block,external-negation,soft-highlight" data-focal-rule="bankruptcy-application-scene-01-rule" data-focal-channels="contrast,connector,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="bankruptcy-application-knowledge-1" style={{position:'absolute',left:0,right:0,top:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#5C6B75',opacity:enter(12,36)}}>申请者 × 程序</div>
      <div style={{position:'absolute',left:0,right:0,top:70,display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:18}}>
        <div data-final-knowledge="bankruptcy-application-scene-01-applicant-0" style={{padding:'18px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.blue,background:COLORS.paper,minHeight:170,opacity:enter(28,54)}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8}}>
            <Building2 size={36} color={COLORS.blue}/>
            <div style={{fontSize:26,fontWeight:900}}>债务人</div>
          </div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>自己发生破产原因 → 可提<span style={{background:COLORS.blue+'26',padding:'2px 8px',fontWeight:900}}>重整 / 和解 / 清算</span>（三类均可）</div>
        </div>
        <div data-final-knowledge="bankruptcy-application-scene-01-applicant-1" style={{padding:'18px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.gold,background:COLORS.paper,minHeight:170,opacity:enter(44,70)}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8}}>
            <Users size={36} color={COLORS.gold}/>
            <div style={{fontSize:26,fontWeight:900}}>债权人</div>
          </div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>债权到期＋债务人还不了 → 可提<span style={{fontWeight:900}}>重整 / 清算</span>；<span style={{fontWeight:900,color:COLORS.red}}>不可申请和解</span></div>
        </div>
        <div data-final-knowledge="bankruptcy-application-scene-01-applicant-2" style={{padding:'18px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.red,background:COLORS.paper,minHeight:170,opacity:enter(60,86)}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8}}>
            <ClipboardList size={36} color={COLORS.red}/>
            <div style={{fontSize:26,fontWeight:900}}>清算人</div>
          </div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>清算时资不抵债 → <span style={{background:COLORS.red+'20',padding:'2px 8px',fontWeight:900}}>仅可提清算</span></div>
        </div>
        <div data-final-knowledge="bankruptcy-application-scene-01-applicant-3" style={{padding:'18px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.green,background:COLORS.paper,minHeight:170,opacity:enter(76,102)}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8}}>
            <Crown size={36} color={COLORS.green}/>
            <div style={{fontSize:26,fontWeight:900}}>债务人大股东</div>
          </div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>持股<span style={{fontWeight:900}}>10%以上</span>：债权人提清算＋法院受理后、宣告破产前 → 可提<span style={{fontWeight:900}}>重整</span></div>
        </div>
      </div>
      <div style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.gold,background:COLORS.paper,padding:'14px 24px',opacity:enter(100,126)}}>
        <Landmark size={38} color={COLORS.gold}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}>口诀：<span style={{fontWeight:900}}>债务人三类全可、债权人不可和解、清算人仅清算</span></div>
      </div>
    </div>
  </Shell>;
};

export const BankruptcyApplication02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="09.2" title="受理后的三重效果">
    <div data-layout="acceptance-gates-2" data-visual-anchor="boundary" data-visual-grammar="preservation-halt,centralized-jurisdiction" data-text-treatments="stamp,soft-highlight,label-block" data-focal-rule="bankruptcy-application-scene-02-rule" data-focal-channels="enclosure,motion,contrast" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="bankruptcy-application-knowledge-2" style={{position:'absolute',left:0,right:0,top:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#5C6B75',opacity:enter(12,36)}}>生死由法院定</div>
      <div style={{position:'absolute',left:0,right:0,top:70,display:'grid',gap:18}}>
        <div data-final-knowledge="bankruptcy-application-scene-02-gate-0" style={{display:'grid',gridTemplateColumns:'64px 1fr',gap:18,alignItems:'center',padding:'16px 24px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(28,54)}}>
          <div style={{width:64,height:64,border:'4px solid '+COLORS.ink,background:COLORS.blue,color:COLORS.paper,display:'grid',placeItems:'center'}}><Lock size={32} color={COLORS.paper}/></div>
          <div><div style={{fontSize:26,fontWeight:900,marginBottom:6}}>保全解除 · 执行中止</div><div style={{fontSize:22,fontWeight:700,lineHeight:1.4}}>债务人财产保全解除，执行程序中止</div></div>
        </div>
        <div data-final-knowledge="bankruptcy-application-scene-02-gate-1" style={{display:'grid',gridTemplateColumns:'64px 1fr',gap:18,alignItems:'center',padding:'16px 24px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(44,70)}}>
          <div style={{width:64,height:64,border:'4px solid '+COLORS.ink,background:COLORS.gold,color:COLORS.paper,display:'grid',placeItems:'center'}}><PauseCircle size={32} color={COLORS.paper}/></div>
          <div><div style={{fontSize:26,fontWeight:900,marginBottom:6}}>其他程序中止</div><div style={{fontSize:22,fontWeight:700,lineHeight:1.4}}>受理前发生的诉讼、仲裁中止，待管理人接管后由原法院继续审理</div></div>
        </div>
        <div data-final-knowledge="bankruptcy-application-scene-02-gate-2" style={{display:'grid',gridTemplateColumns:'64px 1fr',gap:18,alignItems:'center',padding:'16px 24px',border:'4px solid '+COLORS.red,background:COLORS.paper,opacity:enter(60,86)}}>
          <div style={{width:64,height:64,border:'4px solid '+COLORS.ink,background:COLORS.red,color:COLORS.paper,display:'grid',placeItems:'center'}}><MapPin size={32} color={COLORS.paper}/></div>
          <div><div style={{fontSize:26,fontWeight:900,marginBottom:6}}>集中管辖</div><div style={{fontSize:22,fontWeight:700,lineHeight:1.4}}>受理后发生的有关债务人的民事诉讼，只能向<span style={{background:COLORS.red+'20',padding:'2px 6px',fontWeight:900}}>受理破产的法院</span>提起——有仲裁的仍去仲裁</div></div>
        </div>
      </div>
    </div>
  </Shell>;
};

export const BankruptcyApplication03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const gateProgress=interpolate(frame,[110,210],[0,1],CLAMP);
  return <Shell code="09.2" title="集中管辖：受理前后">
    <div data-layout="jurisdiction-clock-3" data-visual-anchor="timeline-gate" data-visual-grammar="pre-acceptance-court,post-acceptance-court" data-text-treatments="thin-underline,label-block,stamp" data-focal-rule="bankruptcy-application-scene-03-rule" data-focal-channels="connector,motion,locator" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="bankruptcy-application-knowledge-3" style={{position:'absolute',left:0,right:0,top:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <MapPin size={42} color={COLORS.blue}/>
        <div style={{fontSize:28,fontWeight:900}}>例：B区法院受理破产 → 追索租金只能向B区法院起诉</div>
      </div>
      <div style={{position:'absolute',left:120,top:150,width:interpolate(gateProgress,[0,1],[0,1520],CLAMP),height:8,background:COLORS.ink}}/>
      <div style={{position:'absolute',left:120,top:130,width:8,height:48,background:COLORS.ink}}/>
      <div style={{position:'absolute',left:1640,top:130,width:8,height:48,background:COLORS.ink}}/>
      <div data-final-knowledge="bankruptcy-application-scene-03-before" style={{position:'absolute',left:120,top:220,width:700,padding:'20px 26px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(28,54)}}>
        <div style={{fontSize:26,fontWeight:900,marginBottom:8}}>受理前</div>
        <div style={{fontSize:23,fontWeight:700,lineHeight:1.5}}>已发生的诉讼、仲裁<span style={{fontWeight:900}}>中止</span>，待管理人接管后由原法院继续审理</div>
      </div>
      <div data-final-knowledge="bankruptcy-application-scene-03-after" style={{position:'absolute',left:1020,top:220,width:640,padding:'20px 26px',border:'5px solid '+COLORS.red,background:COLORS.paper,opacity:enter(150,178)}}>
        <div style={{fontSize:26,fontWeight:900,marginBottom:8,color:COLORS.red}}>受理后</div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.5}}>只能向<span style={{background:COLORS.red+'20',padding:'2px 8px',fontWeight:900}}>受理破产的法院</span>提起——管理人追索租金，应向B区法院起诉，而不是A区法院</div>
        <div data-stateful-terminal="bankruptcy-application-jurisdiction" style={{display:'inline-block',marginTop:10,padding:'8px 16px',border:'3px solid '+COLORS.ink,background:COLORS.blue,color:COLORS.paper,fontSize:21,fontWeight:900,opacity:enter(168,190)}}>受理日生效</div>
      </div>
      <div data-stateful-source="bankruptcy-application-jurisdiction" style={{position:'absolute',left:interpolate(gateProgress,[0,1],[130,1620],CLAMP),top:132,width:0,height:0,borderLeft:'14px solid transparent',borderRight:'14px solid transparent',borderBottom:'30px solid '+COLORS.blue,opacity:gateProgress>0.9?0:1,zIndex:4}}/>
      <div style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.gold,background:COLORS.paper,padding:'14px 24px',opacity:enter(104,130)}}>
        <Landmark size={38} color={COLORS.gold}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}>集中管辖是<span style={{fontWeight:900}}>唯一</span>选择——受理破产的法院统一管辖债务人的民事诉讼</div>
      </div>
    </div>
  </Shell>;
};

export const BankruptcyApplication=()=> <AbsoluteFill>
  <TimelineSequence name="01-bankruptcy-application-scene-01" start={SCENES['bankruptcy-application-scene-01'].start} duration={SCENES['bankruptcy-application-scene-01'].duration}><BankruptcyApplication01Scene/></TimelineSequence>
  <TimelineSequence name="02-bankruptcy-application-scene-02" start={SCENES['bankruptcy-application-scene-02'].start} duration={SCENES['bankruptcy-application-scene-02'].duration}><BankruptcyApplication02Scene/></TimelineSequence>
  <TimelineSequence name="03-bankruptcy-application-scene-03" start={SCENES['bankruptcy-application-scene-03'].start} duration={SCENES['bankruptcy-application-scene-03'].duration}><BankruptcyApplication03Scene/></TimelineSequence>
</AbsoluteFill>;
