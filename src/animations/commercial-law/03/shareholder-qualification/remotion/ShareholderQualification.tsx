import type {ReactNode} from 'react';
import {BookUser, BadgeCheck, Users, Landmark} from 'lucide-react';
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

export const ShareholderQualification01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="03.1" title="名册对内 · 登记对外">
    <div data-layout="roster-ledger-split-1" data-visual-anchor="comparison-axis" data-visual-grammar="roster-vs-registry,inner-outer-rule" data-text-treatments="label-block,thin-underline,soft-highlight" data-focal-rule="shareholder-qualification-scene-01-rule" data-focal-channels="contrast,spatial,icon" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="shareholder-qualification-knowledge-1" style={{position:'absolute',left:0,right:0,top:0,textAlign:'center',fontSize:26,fontWeight:800,letterSpacing:6,color:'#7A715F',opacity:enter(12,36)}}>记忆口诀：对内看名册 · 对外看登记</div>
      <div data-final-knowledge="shareholder-qualification-scene-01-roster" style={{position:'absolute',left:24,top:70,width:830,padding:26,border:'5px solid '+COLORS.blue,background:COLORS.paper,opacity:enter(28,54),translate:slide(28,54,'-26px 0px')}}>
        <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:14}}>
          <BookUser size={46} color={COLORS.blue}/>
          <div style={{padding:'8px 18px',background:COLORS.ink,color:COLORS.paper,fontSize:28,fontWeight:900}}>股东名册</div>
          <div style={{fontSize:24,fontWeight:900,color:COLORS.blue,borderBottom:'4px solid '+COLORS.blue,paddingBottom:2}}>对内 · 法定证明文件</div>
        </div>
        <div style={{fontSize:24,fontWeight:800,lineHeight:1.55,padding:'12px 16px',background:COLORS.blue+'10',marginBottom:10}}>记载全体股东身份信息＋出资信息，是<span style={{fontWeight:900}}>股东身份的法定证明</span></div>
        <div style={{fontSize:24,fontWeight:800,lineHeight:1.55,padding:'12px 16px',background:COLORS.blue+'10'}}>记载于名册的股东，可依名册向公司主张行使股东权利；股权转让的，<span style={{background:COLORS.blue+'28',padding:'2px 6px',fontWeight:900}}>受让人自记载于名册时起</span>可向公司主张权利</div>
      </div>
      <div data-final-knowledge="shareholder-qualification-scene-01-registry" style={{position:'absolute',right:24,top:70,width:830,padding:26,border:'5px solid '+COLORS.gold,background:COLORS.paper,opacity:enter(46,72),translate:slide(46,72,'26px 0px')}}>
        <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:14}}>
          <Landmark size={46} color={COLORS.gold}/>
          <div style={{padding:'8px 18px',background:COLORS.ink,color:COLORS.paper,fontSize:28,fontWeight:900}}>工商登记</div>
          <div style={{fontSize:24,fontWeight:900,color:'#7A5B12',borderBottom:'4px solid '+COLORS.gold,paddingBottom:2}}>对外 · 公信力</div>
        </div>
        <div style={{fontSize:24,fontWeight:800,lineHeight:1.55,padding:'12px 16px',background:COLORS.gold+'16',marginBottom:10}}>仅具有<span style={{fontWeight:900}}>程序性意义</span>，未经登记<span style={{fontWeight:900,color:COLORS.red}}>不影响股东资格</span></div>
        <div style={{fontSize:24,fontWeight:800,lineHeight:1.55,padding:'12px 16px',background:COLORS.gold+'16'}}>登记才产生对外公信力，未经登记或变更登记<span style={{background:COLORS.gold+'40',padding:'2px 6px',fontWeight:900}}>不得对抗善意相对人</span></div>
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
        <div style={{fontSize:27,fontWeight:900,lineHeight:1.4}}>三金出资后记载于名册，但登记上只有四金</div>
      </div>
      <div data-final-knowledge="shareholder-qualification-scene-02-inside" style={{position:'absolute',left:24,top:110,width:830,padding:24,border:'5px solid '+COLORS.blue,background:COLORS.paper,opacity:enter(28,54)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
          <div style={{padding:'8px 18px',background:COLORS.blue,color:COLORS.paper,fontSize:26,fontWeight:900}}>公司内部</div>
        </div>
        <div style={{fontSize:24,fontWeight:800,lineHeight:1.5}}><span style={{background:COLORS.blue+'26',padding:'2px 6px',fontWeight:900}}>三金</span>可依股东名册的记载，主张自己就是公司股东</div>
      </div>
      <div data-final-knowledge="shareholder-qualification-scene-02-outside" style={{position:'absolute',right:24,top:110,width:830,padding:24,border:'5px solid '+COLORS.gold,background:COLORS.paper,opacity:enter(46,72)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
          <div style={{padding:'8px 18px',background:'#7A5B12',color:COLORS.paper,fontSize:26,fontWeight:900}}>公司外部</div>
        </div>
        <div style={{fontSize:24,fontWeight:800,lineHeight:1.5}}>善意第三人有权相信<span style={{background:COLORS.gold+'40',padding:'2px 6px',fontWeight:900}}>四金</span>是公司唯一股东</div>
      </div>
      <div data-final-knowledge="shareholder-qualification-scene-02-conclusion" style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.red,background:COLORS.paper,padding:'16px 26px',opacity:enter(74,102)}}>
        <div style={{width:38,height:38,border:'3px solid '+COLORS.red,position:'relative',flexShrink:0}}>
          <div style={{position:'absolute',left:15,top:4,width:4,height:24,background:COLORS.red,transform:'rotate(45deg)'}}/>
          <div style={{position:'absolute',left:15,top:4,width:4,height:24,background:COLORS.red,transform:'rotate(-45deg)'}}/>
        </div>
        <div style={{fontSize:25,fontWeight:900,lineHeight:1.45}}>三金<span style={{color:COLORS.red}}>不得以名册记载对抗善意相对人</span>——名册对内、登记对外</div>
        <div style={{marginLeft:'auto',padding:'8px 18px',border:'3px solid '+COLORS.ink,background:COLORS.red,color:COLORS.paper,fontSize:22,fontWeight:900,transform:'rotate(-2deg)'}}>对外看登记</div>
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
      <div data-final-knowledge="shareholder-qualification-scene-03-before" style={{position:'absolute',left:0,top:96,width:800,padding:'20px 26px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(28,54)}}>
        <div style={{fontSize:26,fontWeight:900,marginBottom:8}}>转让完成后 · 记载前</div>
        <div style={{fontSize:23,fontWeight:700,lineHeight:1.5}}>受让人尚未记载于名册，不能向公司主张行使股东权利</div>
      </div>
      <div style={{position:'absolute',left:830,top:130,width:260,height:8,background:COLORS.ink,opacity:enter(120,142)}}/>
      <div style={{position:'absolute',left:1050,top:118,width:44,height:44,border:'5px solid '+COLORS.blue,background:COLORS.paper,opacity:enter(130,152),zIndex:2}}/>
      <div data-stateful-source="shareholder-qualification-registry-record" style={{position:'absolute',left:interpolate(gateProgress,[0,1],[40,1040],CLAMP),top:170,padding:'10px 20px',border:'4px solid '+COLORS.blue,background:COLORS.paper,color:COLORS.blue,fontSize:23,fontWeight:900,opacity:gateProgress>0.88?0:1,zIndex:3}}>记载于名册</div>
      <div data-final-knowledge="shareholder-qualification-scene-03-after" style={{position:'absolute',right:0,top:96,width:700,padding:'20px 26px',border:'5px solid '+COLORS.blue,background:COLORS.paper,opacity:enter(150,178)}}>
        <div style={{fontSize:26,fontWeight:900,marginBottom:8,color:COLORS.blue}}>记载于名册时起</div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.5}}>受让人<span style={{background:COLORS.blue+'26',padding:'2px 6px',fontWeight:900}}>可以向公司主张行使股东权利</span></div>
        <div data-stateful-terminal="shareholder-qualification-registry-record" style={{display:'inline-block',marginTop:10,padding:'8px 16px',border:'3px solid '+COLORS.ink,background:COLORS.blue,color:COLORS.paper,fontSize:21,fontWeight:900,opacity:enter(170,192)}}>名册记载完成</div>
      </div>
      <div data-final-knowledge="shareholder-qualification-scene-03-note" style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.gold,background:COLORS.paper,padding:'14px 24px',opacity:enter(104,130)}}>
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
