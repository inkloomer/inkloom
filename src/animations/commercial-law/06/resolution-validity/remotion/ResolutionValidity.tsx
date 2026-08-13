import type {ReactNode} from 'react';
import {GitBranch, FileX2, FileWarning, PencilLine, Clock3, Landmark, CheckCircle2} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#F2EFE6', ink:'#22262E', red:'#B23A30', green:'#2F6B4F', gold:'#C9A23C', paper:'#FAF7EE'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.red,color:COLORS.paper}}>{code}</div>
    <div style={{position:'absolute',left:190,right:76,top:46,fontSize:46,fontWeight:900,lineHeight:1.12,borderBottom:'5px solid '+COLORS.green,paddingBottom:12}}>{title}</div>
    <div style={{position:'absolute',left:76,right:76,top:150,bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

export const ResolutionValidity01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="06.2" title="瑕疵三分支">
    <div data-layout="validity-fork-1" data-visual-anchor="flow-path" data-visual-grammar="defect-fork,void-vs-voidable" data-text-treatments="label-block,soft-highlight,stamp" data-focal-rule="resolution-validity-scene-01-rule" data-focal-channels="connector,contrast,motion" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="resolution-validity-knowledge-1" style={{position:'absolute',left:0,top:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <GitBranch size={42} color={COLORS.red}/>
        <div style={{fontSize:28,fontWeight:900}}>公司决议有瑕疵——属于哪一种？</div>
      </div>
      <div style={{position:'absolute',left:280,top:90,width:6,height:90,background:COLORS.ink,opacity:enter(24,48)}}/>
      <div style={{position:'absolute',left:0,top:110,width:280,height:6,background:COLORS.ink,opacity:enter(20,44)}}/>
      <div style={{position:'absolute',left:0,top:170,width:560,height:6,background:COLORS.ink,opacity:enter(30,54)}}/>
      <div style={{position:'absolute',left:560,top:140,width:6,height:60,background:COLORS.ink,opacity:enter(34,58)}}/>
      <div style={{position:'absolute',left:560,top:230,width:700,height:6,background:COLORS.ink,opacity:enter(40,64)}}/>
      <div data-final-knowledge="resolution-validity-scene-01-branch-0" style={{position:'absolute',left:0,top:200,width:560,padding:'20px 26px',border:'5px solid '+COLORS.red,background:COLORS.paper,opacity:enter(38,64)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8}}>
          <FileX2 size={38} color={COLORS.red}/>
          <div style={{fontSize:27,fontWeight:900,color:COLORS.red}}>决议不成立</div>
        </div>
        <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>未开会 / 未表决 / 出席未达标 / 表决未达标</div>
      </div>
      <div data-final-knowledge="resolution-validity-scene-01-branch-1" style={{position:'absolute',left:600,top:170,width:560,padding:'20px 26px',border:'5px solid '+COLORS.red,background:COLORS.paper,opacity:enter(56,82)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8}}>
          <FileWarning size={38} color={COLORS.red}/>
          <div style={{fontSize:27,fontWeight:900,color:COLORS.red}}>决议无效</div>
        </div>
        <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>决议内容<span style={{background:COLORS.red+'20',padding:'2px 6px',fontWeight:900}}>违反法律、行政法规</span>——不能因程序补救</div>
      </div>
      <div data-final-knowledge="resolution-validity-scene-01-branch-2" style={{position:'absolute',right:24,top:170,width:520,padding:'20px 26px',border:'5px solid '+COLORS.gold,background:COLORS.paper,opacity:enter(72,98)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8}}>
          <PencilLine size={38} color={COLORS.gold}/>
          <div style={{fontSize:27,fontWeight:900,color:'#7A5B12'}}>决议可撤销</div>
        </div>
        <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>内容违反章程；召集程序、表决方式违反法律、行政法规或章程</div>
      </div>
      <div data-final-knowledge="resolution-validity-scene-01-note" style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.ink,background:COLORS.paper,padding:'14px 24px',opacity:enter(92,118)}}>
        <div style={{padding:'8px 18px',border:'3px solid '+COLORS.ink,background:COLORS.green,color:COLORS.paper,fontSize:21,fontWeight:900,transform:'rotate(-2deg)'}}>谁能诉</div>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}>不成立/无效 → 股东、董事、监事等均可诉；可撤销 → <span style={{fontWeight:900}}>起诉时是股东</span>（60日＋1年）</div>
      </div>
    </div>
  </Shell>;
};

export const ResolutionValidity02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="06.2" title="轻微瑕疵 与 重大瑕疵">
    <div data-layout="minority-defect-2" data-visual-anchor="comparison-axis" data-visual-grammar="minor-defect,major-defect" data-text-treatments="external-negation,thin-underline,soft-highlight" data-focal-rule="resolution-validity-scene-02-rule" data-focal-channels="contrast,enclosure,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="resolution-validity-knowledge-2" style={{position:'absolute',left:0,right:0,top:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#6E6757',opacity:enter(12,36)}}>例：未提前15天通知张三，但张三正常出席且决议通过</div>
      <div data-final-knowledge="resolution-validity-scene-02-minor" style={{position:'absolute',left:24,top:90,width:840,padding:24,border:'5px solid '+COLORS.green,background:COLORS.paper,opacity:enter(28,54),translate:slide(28,54,'-24px 0px')}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
          <CheckCircle2 size={40} color={COLORS.green}/>
          <div style={{padding:'8px 18px',background:COLORS.green,color:COLORS.paper,fontSize:27,fontWeight:900}}>轻微瑕疵 → 不可撤销</div>
        </div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55}}>程序轻微瑕疵<span style={{fontWeight:900}}>＋对决议无实质影响</span>的，不可撤销——张三正常出席表决，决议<span style={{background:COLORS.green+'26',padding:'2px 6px',fontWeight:900}}>有效</span></div>
      </div>
      <div data-final-knowledge="resolution-validity-scene-02-major" style={{position:'absolute',right:24,top:90,width:840,padding:24,border:'5px solid '+COLORS.red,background:COLORS.paper,opacity:enter(46,72),translate:slide(46,72,'24px 0px')}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
          <FileWarning size={40} color={COLORS.red}/>
          <div style={{padding:'8px 18px',background:COLORS.red,color:COLORS.paper,fontSize:27,fontWeight:900}}>重大瑕疵 → 可撤销</div>
        </div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55}}>若因此导致张三<span style={{background:COLORS.red+'20',padding:'2px 6px',fontWeight:900}}>未出席表决</span>，则属于程序重大瑕疵，可以撤销</div>
      </div>
      <div style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.gold,background:COLORS.paper,padding:'14px 24px',opacity:enter(72,100)}}>
        <div style={{width:34,height:34,border:'3px solid '+COLORS.gold,position:'relative',flexShrink:0}}>
          <div style={{position:'absolute',left:13,top:3,width:4,height:22,background:COLORS.gold,transform:'rotate(45deg)'}}/>
          <div style={{position:'absolute',left:13,top:3,width:4,height:22,background:COLORS.gold,transform:'rotate(-45deg)'}}/>
        </div>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}>对照：未经董事会和监事会召集，1/10以上表决权的股东自行召集主持股东会，或召开股东会<span style={{fontWeight:900}}>未通知全体股东</span>——越权召集、漏通知，可撤销</div>
      </div>
    </div>
  </Shell>;
};

export const ResolutionValidity03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const clockProgress=interpolate(frame,[130,230],[0,1],CLAMP);
  return <Shell code="06.2" title="撤销之诉的期限与效果">
    <div data-layout="revocation-clock-3" data-visual-anchor="timeline-gate" data-visual-grammar="sixty-day-clock,one-year-cutoff" data-text-treatments="thin-underline,label-block,stamp" data-focal-rule="resolution-validity-scene-03-rule" data-focal-channels="connector,motion,locator" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="resolution-validity-knowledge-3" style={{position:'absolute',left:0,top:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <Clock3 size={42} color={COLORS.red}/>
        <div style={{fontSize:28,fontWeight:900}}>起诉时须有股东资格 · 被告是公司</div>
      </div>
      <div style={{position:'absolute',left:40,top:120,width:interpolate(clockProgress,[0,1],[0,1600],CLAMP),height:10,background:COLORS.ink}}/>
      <div style={{position:'absolute',left:40,top:106,width:10,height:38,background:COLORS.ink}}/>
      <div style={{position:'absolute',left:1640,top:106,width:10,height:38,background:COLORS.ink}}/>
      <div data-final-knowledge="resolution-validity-scene-03-clock-0" style={{position:'absolute',left:80,top:170,width:520,padding:'18px 24px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(46,72)}}>
        <div style={{fontSize:26,fontWeight:900,marginBottom:8}}>① 普通期限</div>
        <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>自决议作出之日起<span style={{background:COLORS.red+'20',padding:'2px 8px',fontWeight:900}}>60日内</span>有权主张撤销</div>
      </div>
      <div data-final-knowledge="resolution-validity-scene-03-clock-1" style={{position:'absolute',left:640,top:170,width:520,padding:'18px 24px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(62,88)}}>
        <div style={{fontSize:26,fontWeight:900,marginBottom:8}}>② 未被通知参会</div>
        <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>自<span style={{fontWeight:900}}>知道或应当知道</span>决议作出之日起60日内主张撤销</div>
      </div>
      <div data-final-knowledge="resolution-validity-scene-03-clock-2" style={{position:'absolute',left:1200,top:170,width:480,padding:'18px 24px',border:'4px solid '+COLORS.red,background:COLORS.paper,opacity:enter(78,104)}}>
        <div style={{fontSize:26,fontWeight:900,marginBottom:8}}>③ 除斥期间</div>
        <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>自决议作出之日起<span style={{background:COLORS.red+'20',padding:'2px 8px',fontWeight:900}}>1年</span>内没有行使的，撤销权消灭</div>
      </div>
      <div data-stateful-source="resolution-validity-clock-hand" style={{position:'absolute',left:interpolate(clockProgress,[0,1],[40,1620],CLAMP),top:88,width:0,height:0,borderLeft:'14px solid transparent',borderRight:'14px solid transparent',borderBottom:'30px solid '+COLORS.red,opacity:clockProgress>0.94?0:1,zIndex:4}}/>
      <div data-final-knowledge="resolution-validity-scene-03-effect" style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:18,border:'5px solid '+COLORS.green,background:COLORS.paper,padding:'16px 26px',opacity:enter(104,132)}}>
        <Landmark size={42} color={COLORS.green}/>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.5}}>决议效力被否认的，<span style={{fontWeight:900}}>不影响与善意相对人的民事法律关系</span>——如越权采购决议被撤销，不影响善意相对人的合同关系；变更登记的，可申请撤销变更登记</div>
        <div data-stateful-terminal="resolution-validity-clock-hand" style={{marginLeft:'auto',padding:'8px 18px',border:'3px solid '+COLORS.ink,background:COLORS.red,color:COLORS.paper,fontSize:21,fontWeight:900,opacity:enter(150,172)}}>期限届满·消灭</div>
      </div>
    </div>
  </Shell>;
};

export const ResolutionValidity=()=> <AbsoluteFill>
  <TimelineSequence name="01-resolution-validity-scene-01" start={SCENES['resolution-validity-scene-01'].start} duration={SCENES['resolution-validity-scene-01'].duration}><ResolutionValidity01Scene/></TimelineSequence>
  <TimelineSequence name="02-resolution-validity-scene-02" start={SCENES['resolution-validity-scene-02'].start} duration={SCENES['resolution-validity-scene-02'].duration}><ResolutionValidity02Scene/></TimelineSequence>
  <TimelineSequence name="03-resolution-validity-scene-03" start={SCENES['resolution-validity-scene-03'].start} duration={SCENES['resolution-validity-scene-03'].duration}><ResolutionValidity03Scene/></TimelineSequence>
</AbsoluteFill>;
