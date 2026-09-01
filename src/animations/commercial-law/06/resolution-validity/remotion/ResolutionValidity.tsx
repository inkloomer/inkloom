import type {ReactNode} from 'react';
import {GitBranch, FileX2, FileWarning, PencilLine, Clock3, Landmark, CheckCircle2, Users, Scale, FileText, Hourglass, Bell, Ban} from 'lucide-react';
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

const Watermark=({icon,size=170,color}:{readonly icon:ReactNode;readonly size?:number;readonly color:string})=>(
  <div style={{position:'absolute',right:6,bottom:-4,opacity:0.09,pointerEvents:'none'}}>
    {icon}
  </div>
);

const Row=({icon,children,delay,color,pad='10px 14px'}:{readonly icon:ReactNode;readonly children:ReactNode;readonly delay:number;readonly color:string;readonly pad?:string})=>{
  const frame=useCurrentFrame();
  return <div style={{display:'flex',alignItems:'center',gap:12,padding:pad,background:COLORS.paper,borderLeft:'6px solid '+color,fontSize:22,fontWeight:800,lineHeight:1.45,opacity:interpolate(frame,[delay,delay+22],[0,1],CLAMP),translate:interpolate(frame,[delay,delay+22],['0px 18px','0px 0px'],CLAMP)}}>
    <span style={{flexShrink:0,display:'flex'}}>{icon}</span>
    <span>{children}</span>
  </div>;
};

export const ResolutionValidity01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="06.2" title="瑕疵三分支">
    <div data-layout="validity-fork-1" data-visual-anchor="flow-path" data-visual-grammar="defect-fork,void-vs-voidable" data-text-treatments="label-block,soft-highlight,stamp" data-focal-rule="resolution-validity-scene-01-rule" data-focal-channels="connector,contrast,motion" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:16}}>
      <div data-final-knowledge="resolution-validity-knowledge-1" style={{flexShrink:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <GitBranch size={42} color={COLORS.red}/>
        <div style={{fontSize:28,fontWeight:900}}>公司决议有瑕疵——属于哪一种？</div>
      </div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="resolution-validity-scene-01-branch-0" style={{position:'relative',padding:'16px 22px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(38,64),translate:interpolate(frame,[38,64],['0px 24px','0px 0px'],CLAMP)}}>
          <Watermark icon={<FileX2 size={140} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10,flexShrink:0}}>
            <FileX2 size={36} color={COLORS.red}/>
            <div style={{fontSize:26,fontWeight:900,color:COLORS.red}}>决议不成立</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Ban size={24} color={COLORS.red}/>} delay={52} color={COLORS.red}><span style={{fontWeight:900}}>未开会、未表决</span></Row>
            <Row icon={<Users size={24} color={COLORS.red}/>} delay={66} color={COLORS.red}><span style={{fontWeight:900}}>出席未达标</span>——董事会须<span style={{fontWeight:900}}>过半数董事出席</span>方可举行</Row>
            <Row icon={<Scale size={24} color={COLORS.red}/>} delay={80} color={COLORS.red}><span style={{fontWeight:900}}>表决未达标</span></Row>
            <Row icon={<FileX2 size={24} color={COLORS.red}/>} delay={94} color={COLORS.red}><span style={{fontWeight:900,color:COLORS.red}}>成立要件缺失</span>——对照：依法召开才成立</Row>
          </div>
        </div>
        <div data-final-knowledge="resolution-validity-scene-01-branch-1" style={{position:'relative',padding:'16px 22px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(56,82),translate:interpolate(frame,[56,82],['0px 24px','0px 0px'],CLAMP)}}>
          <Watermark icon={<FileWarning size={140} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10,flexShrink:0}}>
            <FileWarning size={36} color={COLORS.red}/>
            <div style={{fontSize:26,fontWeight:900,color:COLORS.red}}>决议无效</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<FileWarning size={24} color={COLORS.red}/>} delay={70} color={COLORS.red}>决议内容<span style={{background:COLORS.red+'20',padding:'1px 8px',fontWeight:900}}>违反法律、行政法规</span></Row>
            <Row icon={<Ban size={24} color={COLORS.red}/>} delay={84} color={COLORS.red}><span style={{fontWeight:900,color:COLORS.red}}>不能因程序补救</span></Row>
            <Row icon={<Landmark size={24} color={COLORS.red}/>} delay={98} color={COLORS.red}>例：<span style={{fontWeight:900}}>关联担保</span>，董事会越权作出决议——越权无效</Row>
          </div>
        </div>
        <div data-final-knowledge="resolution-validity-scene-01-branch-2" style={{position:'relative',padding:'16px 22px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'4D',display:'flex',flexDirection:'column',opacity:enter(72,98),translate:interpolate(frame,[72,98],['0px 24px','0px 0px'],CLAMP)}}>
          <Watermark icon={<PencilLine size={140} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10,flexShrink:0}}>
            <PencilLine size={36} color={COLORS.gold}/>
            <div style={{fontSize:26,fontWeight:900,color:'#7A5B12'}}>决议可撤销</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<PencilLine size={24} color={COLORS.gold}/>} delay={86} color={COLORS.gold}>决议内容<span style={{fontWeight:900}}>违反章程</span></Row>
            <Row icon={<FileText size={24} color={COLORS.gold}/>} delay={100} color={COLORS.gold}><span style={{fontWeight:900}}>召集程序、表决方式</span>违反法律、行政法规或公司章程——<span style={{fontWeight:900,color:'#7A5B12'}}>程序瑕疵</span></Row>
            <Row icon={<GitBranch size={24} color={COLORS.gold}/>} delay={114} color={COLORS.gold}>例：<span style={{fontWeight:900,color:'#7A5B12'}}>越权召集</span>——未经董事会、监事会召集</Row>
            <Row icon={<Bell size={24} color={COLORS.gold}/>} delay={126} color={COLORS.gold}>例：<span style={{fontWeight:900,color:'#7A5B12'}}>漏通知</span>——未通知全体股东参会</Row>
          </div>
        </div>
      </div>
      <div data-final-knowledge="resolution-validity-scene-01-note" style={{flexShrink:0,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.green,background:COLORS.green+'4D',padding:'14px 24px',opacity:enter(100,126)}}>
        <div style={{padding:'8px 18px',border:'3px solid '+COLORS.ink,background:COLORS.green,color:COLORS.paper,fontSize:21,fontWeight:900,transform:'rotate(-2deg)',flexShrink:0}}>谁能诉</div>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}>不成立/无效 → <span style={{fontWeight:900}}>股东、董事、监事等均可诉</span>；可撤销 → <span style={{background:COLORS.green+'28',padding:'1px 8px',fontWeight:900}}>起诉时是股东</span>（60日＋1年）</div>
      </div>
    </div>
  </Shell>;
};

export const ResolutionValidity02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="06.2" title="轻微瑕疵 与 重大瑕疵">
    <div data-layout="minority-defect-2" data-visual-anchor="comparison-axis" data-visual-grammar="minor-defect,major-defect" data-text-treatments="external-negation,thin-underline,soft-highlight" data-focal-rule="resolution-validity-scene-02-rule" data-focal-channels="contrast,enclosure,annotation" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:16}}>
      <div data-final-knowledge="resolution-validity-knowledge-2" style={{flexShrink:0,textAlign:'center',fontSize:25,fontWeight:900,letterSpacing:3,color:'#6E6757',opacity:enter(12,36)}}>例：未提前15天通知张三，但张三正常出席且决议通过</div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="resolution-validity-scene-02-minor" style={{position:'relative',padding:'18px 24px',border:'5px solid '+COLORS.green,background:COLORS.green+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54),translate:slide(28,54,'-24px 0px')}}>
          <Watermark icon={<CheckCircle2 size={150} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12,flexShrink:0}}>
            <CheckCircle2 size={38} color={COLORS.green}/>
            <div style={{padding:'8px 18px',background:COLORS.green,color:COLORS.paper,fontSize:26,fontWeight:900}}>轻微瑕疵 → 不可撤销</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:12,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<CheckCircle2 size={24} color={COLORS.green}/>} delay={42} color={COLORS.green} pad="12px 14px">程序<span style={{fontWeight:900}}>轻微瑕疵</span>＋对决议<span style={{fontWeight:900}}>无实质影响</span> → <span style={{fontWeight:900,color:COLORS.green}}>不可撤销</span></Row>
            <Row icon={<Users size={24} color={COLORS.green}/>} delay={56} color={COLORS.green} pad="12px 14px">张三<span style={{fontWeight:900}}>正常出席表决</span>且决议通过 → 决议<span style={{background:COLORS.green+'28',padding:'1px 8px',fontWeight:900}}>有效</span></Row>
            <Row icon={<Bell size={24} color={COLORS.green}/>} delay={70} color={COLORS.green} pad="12px 14px">例：3月20日开会、3月8日通知全体股东（不足15天），全体到会通过 → 程序轻微瑕疵，不可撤销</Row>
          </div>
        </div>
        <div data-final-knowledge="resolution-validity-scene-02-major" style={{position:'relative',padding:'18px 24px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(46,72),translate:slide(46,72,'24px 0px')}}>
          <Watermark icon={<FileWarning size={150} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12,flexShrink:0}}>
            <FileWarning size={38} color={COLORS.red}/>
            <div style={{padding:'8px 18px',background:COLORS.red,color:COLORS.paper,fontSize:26,fontWeight:900}}>重大瑕疵 → 可撤销</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:12,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<FileX2 size={24} color={COLORS.red}/>} delay={60} color={COLORS.red} pad="12px 14px">因此导致张三<span style={{background:COLORS.red+'20',padding:'1px 8px',fontWeight:900}}>未出席表决</span> → 程序<span style={{fontWeight:900,color:COLORS.red}}>重大瑕疵</span>，<span style={{fontWeight:900,color:COLORS.red}}>可以撤销</span></Row>
            <Row icon={<Users size={24} color={COLORS.red}/>} delay={74} color={COLORS.red} pad="12px 14px">召开股东会<span style={{fontWeight:900}}>未通知全体股东</span>（漏通知）→ 可撤销</Row>
            <Row icon={<GitBranch size={24} color={COLORS.red}/>} delay={88} color={COLORS.red} pad="12px 14px">未经董事会、监事会召集，1/10以上表决权股东<span style={{fontWeight:900}}>自行召集主持</span>（越权召集）→ 可撤销</Row>
          </div>
        </div>
      </div>
      <div style={{flexShrink:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.gold,background:COLORS.gold+'4D',padding:'14px 24px',opacity:enter(96,122)}}>
        <Scale size={34} color={COLORS.gold}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}>对照记忆：<span style={{fontWeight:900,color:COLORS.green}}>轻微瑕疵＋无实质影响 → 有效不可撤销</span>；<span style={{fontWeight:900,color:COLORS.red}}>影响表决（未出席）→ 重大瑕疵可撤销</span></div>
      </div>
    </div>
  </Shell>;
};

export const ResolutionValidity03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const clockProgress=interpolate(frame,[130,230],[0,1],CLAMP);
  return <Shell code="06.2" title="撤销之诉的期限与效果">
    <div data-layout="revocation-clock-3" data-visual-anchor="timeline-gate" data-visual-grammar="sixty-day-clock,one-year-cutoff" data-text-treatments="thin-underline,label-block,stamp" data-focal-rule="resolution-validity-scene-03-rule" data-focal-channels="connector,motion,locator" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:14}}>
      <div data-final-knowledge="resolution-validity-knowledge-3" style={{flexShrink:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <Clock3 size={42} color={COLORS.red}/>
        <div style={{fontSize:27,fontWeight:900}}>起诉时须有<span style={{color:COLORS.red}}>股东资格</span> · 被告是<span style={{color:COLORS.red}}>公司</span></div>
      </div>
      <div style={{flexShrink:0,position:'relative',height:44}}>
        <div style={{position:'absolute',left:40,width:interpolate(clockProgress,[0,1],[0,1600],CLAMP),top:17,height:10,background:COLORS.ink}}/>
        <div style={{position:'absolute',left:40,top:3,width:10,height:38,background:COLORS.ink}}/>
        <div style={{position:'absolute',left:1640,top:3,width:10,height:38,background:COLORS.ink}}/>
        <div data-stateful-source="resolution-validity-clock-hand" style={{position:'absolute',left:interpolate(clockProgress,[0,1],[40,1620],CLAMP),top:-6,width:0,height:0,borderLeft:'14px solid transparent',borderRight:'14px solid transparent',borderBottom:'30px solid '+COLORS.red,opacity:clockProgress>0.94?0:1,zIndex:4}}/>
      </div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="resolution-validity-scene-03-clock-0" style={{position:'relative',padding:'16px 22px',border:'4px solid '+COLORS.ink,background:COLORS.green+'4D',display:'flex',flexDirection:'column',opacity:enter(46,72)}}>
          <Watermark icon={<Clock3 size={130} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
          <div style={{fontSize:25,fontWeight:900,marginBottom:8,flexShrink:0}}>① 普通期限</div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Clock3 size={24} color={COLORS.green}/>} delay={60} color={COLORS.green} pad="9px 13px">自决议作出之日起<span style={{background:COLORS.green+'28',padding:'1px 8px',fontWeight:900}}>60日内</span>有权主张撤销</Row>
          </div>
        </div>
        <div data-final-knowledge="resolution-validity-scene-03-clock-1" style={{position:'relative',padding:'16px 22px',border:'4px solid '+COLORS.ink,background:COLORS.gold+'4D',display:'flex',flexDirection:'column',opacity:enter(62,88)}}>
          <Watermark icon={<Bell size={130} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
          <div style={{fontSize:25,fontWeight:900,marginBottom:8,flexShrink:0}}>② 未被通知参会</div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Bell size={24} color={COLORS.gold}/>} delay={76} color={COLORS.gold} pad="9px 13px">自<span style={{fontWeight:900}}>知道或应当知道</span>决议作出之日起<span style={{background:COLORS.gold+'40',padding:'1px 8px',fontWeight:900}}>60日内</span>主张撤销——起算点不同</Row>
          </div>
        </div>
        <div data-final-knowledge="resolution-validity-scene-03-clock-2" style={{position:'relative',padding:'16px 22px',border:'4px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(78,104)}}>
          <Watermark icon={<Hourglass size={130} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
          <div style={{fontSize:25,fontWeight:900,marginBottom:8,flexShrink:0,color:COLORS.red}}>③ 除斥期间</div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Hourglass size={24} color={COLORS.red}/>} delay={92} color={COLORS.red} pad="9px 13px">自决议作出之日起<span style={{background:COLORS.red+'20',padding:'1px 8px',fontWeight:900}}>1年内</span>没有行使的，撤销权<span style={{fontWeight:900,color:COLORS.red}}>消灭</span></Row>
          </div>
        </div>
      </div>
      <div data-final-knowledge="resolution-validity-scene-03-effect" style={{flexShrink:0,display:'flex',alignItems:'center',gap:18,border:'5px solid '+COLORS.green,background:COLORS.green+'4D',padding:'14px 26px',opacity:enter(104,132)}}>
        <Landmark size={40} color={COLORS.green}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.5}}>决议效力被否认的，<span style={{fontWeight:900,color:COLORS.green}}>不影响与善意相对人的民事法律关系</span>——章程限制采购超100万须经股东会，董事会越权决议采购200万、后被撤销：善意相对人的合同关系不受影响；变更登记的，可申请<span style={{fontWeight:900}}>撤销变更登记</span></div>
        <div data-stateful-terminal="resolution-validity-clock-hand" style={{marginLeft:'auto',flexShrink:0,padding:'8px 18px',border:'3px solid '+COLORS.ink,background:COLORS.red,color:COLORS.paper,fontSize:21,fontWeight:900,opacity:enter(150,172)}}>期限届满·消灭</div>
      </div>
    </div>
  </Shell>;
};

export const ResolutionValidity=()=> <AbsoluteFill>
  <TimelineSequence name="01-resolution-validity-scene-01" start={SCENES['resolution-validity-scene-01'].start} duration={SCENES['resolution-validity-scene-01'].duration}><ResolutionValidity01Scene/></TimelineSequence>
  <TimelineSequence name="02-resolution-validity-scene-02" start={SCENES['resolution-validity-scene-02'].start} duration={SCENES['resolution-validity-scene-02'].duration}><ResolutionValidity02Scene/></TimelineSequence>
  <TimelineSequence name="03-resolution-validity-scene-03" start={SCENES['resolution-validity-scene-03'].start} duration={SCENES['resolution-validity-scene-03'].duration}><ResolutionValidity03Scene/></TimelineSequence>
</AbsoluteFill>;
