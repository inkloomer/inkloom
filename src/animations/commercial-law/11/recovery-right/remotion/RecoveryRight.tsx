import type {ReactNode} from 'react';
import {Fish, Banknote, Users, Timer, Scale, ShieldAlert} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#EFF1ED', ink:'#232A26', red:'#B23A30', green:'#2E6D4F', gold:'#C08A2D', paper:'#F8FAF6'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.red,color:COLORS.paper}}>{code}</div>
    <div style={{position:'absolute',left:190,right:76,top:46,fontSize:46,fontWeight:900,lineHeight:1.12,borderBottom:'5px solid '+COLORS.green,paddingBottom:12}}>{title}</div>
    <div style={{position:'absolute',left:76,right:76,top:150,bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

export const RecoveryRight01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="11.2" title="追回权：三类对象">
    <div data-layout="clawback-net-1" data-visual-anchor="flow-path" data-visual-grammar="clawback-targets,debtor-property-return" data-text-treatments="label-block,thin-underline,soft-highlight" data-focal-rule="recovery-right-scene-01-rule" data-focal-channels="connector,motion,enclosure" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="recovery-right-knowledge-1" style={{position:'absolute',left:0,right:0,top:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <Fish size={42} color={COLORS.red}/>
        <div style={{fontSize:28,fontWeight:900}}>破产程序中，管理人<span style={{background:COLORS.red+'20',padding:'2px 10px'}}>可以追回</span></div>
      </div>
      <div style={{position:'absolute',left:0,right:0,top:80,display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:18}}>
        <div data-final-knowledge="recovery-right-scene-01-target-0" style={{padding:'18px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.red,background:COLORS.paper,minHeight:170,opacity:enter(28,54)}}>
          <div style={{fontSize:26,fontWeight:900,marginBottom:8}}>非法转移、处分或侵占的财产</div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>债务人财产被非法转移、处分或侵占的</div>
        </div>
        <div data-final-knowledge="recovery-right-scene-01-target-1" style={{padding:'18px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.gold,background:COLORS.paper,minHeight:170,opacity:enter(44,70)}}>
          <div style={{fontSize:26,fontWeight:900,marginBottom:8}}>未缴 / 抽逃的出资</div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>出资人未缴或抽逃的出资——<span style={{background:COLORS.gold+'40',padding:'2px 6px',fontWeight:900}}>不受出资期限的限制</span></div>
        </div>
      </div>
      <div data-final-knowledge="recovery-right-scene-01-effect" style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:18,border:'5px solid '+COLORS.green,background:COLORS.paper,padding:'16px 26px',opacity:enter(72,100)}}>
        <Banknote size={40} color={COLORS.green}/>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.5}}>追回效果：财产<span style={{fontWeight:900}}>归入债务人财产</span>，用来清偿给全体债权人——对接出资责任，可追其他发起人、负有责任的董监高、协助抽逃人员等责任主体</div>
      </div>
    </div>
  </Shell>;
};

export const RecoveryRight02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="11.2" title="董监高的非正常收入">
    <div data-layout="abnormal-income-2" data-visual-anchor="role-pair" data-visual-grammar="abnormal-income-tiers,wage-vs-ordinary" data-text-treatments="soft-highlight,stamp,external-negation" data-focal-rule="recovery-right-scene-02-rule" data-focal-channels="contrast,connector,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="recovery-right-knowledge-2" style={{position:'absolute',left:0,right:0,top:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <ShieldAlert size={42} color={COLORS.red}/>
        <div style={{fontSize:27,fontWeight:900}}>企业存在破产原因时，董监高利用职权获取的<span style={{background:COLORS.red+'20',padding:'2px 8px'}}>非正常收入</span></div>
      </div>
      <div data-final-knowledge="recovery-right-scene-02-income" style={{position:'absolute',left:24,top:80,width:850,padding:'24px 28px',border:'5px solid '+COLORS.red,background:COLORS.paper,opacity:enter(28,54)}}>
        <div style={{fontSize:26,fontWeight:900,marginBottom:12}}>三档非正常收入</div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55}}>① 普遍拖欠职工工资情况下获取的<span style={{fontWeight:900}}>工资性收入</span></div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55}}>② <span style={{fontWeight:900}}>绩效奖金</span></div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55}}>③ 其他<span style={{fontWeight:900}}>非正常收入</span>——并不违法，被追回后董监高可以向债权人申报债权</div>
      </div>
      <div data-final-knowledge="recovery-right-scene-02-return" style={{position:'absolute',right:24,top:80,width:850,padding:'24px 28px',border:'5px solid '+COLORS.green,background:COLORS.paper,opacity:enter(46,72)}}>
        <div style={{fontSize:26,fontWeight:900,marginBottom:12}}>退还收入后的债性分流</div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55,padding:'10px 14px',background:COLORS.green+'10',marginBottom:8}}>工资性收入未超出企业职工<span style={{background:COLORS.green+'28',padding:'2px 6px',fontWeight:900}}>平均工资</span>的部分 → <span style={{fontWeight:900}}>职工债权</span></div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55,padding:'10px 14px',background:COLORS.gold+'14'}}>超出平均工资的部分、绩效奖金、其他非正常收入 → <span style={{background:COLORS.gold+'40',padding:'2px 6px',fontWeight:900}}>普通破产债权</span></div>
      </div>
      <div style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.gold,background:COLORS.paper,padding:'14px 24px',opacity:enter(76,104)}}>
        <Scale size={38} color={COLORS.gold}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}>原理：企业已不能足额保障职工、债权人利益时，董监高利用职务便利获取额外收益有违<span style={{fontWeight:900}}>公平原则</span>——认定为非正常收入，但<span style={{fontWeight:900}}>并不违法</span></div>
      </div>
    </div>
  </Shell>;
};

export const RecoveryRight03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="11.2" title="出资追回：不受期限限制">
    <div data-layout="contribution-clawback-3" data-visual-anchor="boundary" data-visual-grammar="unpaid-contribution,withdrawn-contribution" data-text-treatments="external-negation,label-block,stamp" data-focal-rule="recovery-right-scene-03-rule" data-focal-channels="enclosure,contrast,annotation" data-final-knowledge="recovery-right-knowledge-3" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="recovery-right-scene-03-contribution" style={{position:'absolute',left:24,top:20,width:850,padding:'24px 28px',border:'5px solid '+COLORS.green,background:COLORS.paper,opacity:enter(28,54)}}>
        <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:12}}>
          <Timer size={42} color={COLORS.green}/>
          <div style={{fontSize:28,fontWeight:900}}>未缴 / 抽逃出资</div>
        </div>
        <div style={{fontSize:24,fontWeight:800,lineHeight:1.55}}>管理人追回出资，<span style={{background:COLORS.green+'28',padding:'2px 8px',fontWeight:900}}>不受出资期限的限制</span>——出资人不能以出资未到期为由抗辩</div>
      </div>
      <div data-final-knowledge="recovery-right-scene-03-parties" style={{position:'absolute',right:24,top:20,width:850,padding:'24px 28px',border:'5px solid '+COLORS.gold,background:COLORS.paper,opacity:enter(46,72)}}>
        <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:12}}>
          <Users size={42} color={COLORS.gold}/>
          <div style={{fontSize:28,fontWeight:900}}>可追的责任主体</div>
        </div>
        <div style={{fontSize:24,fontWeight:800,lineHeight:1.55}}>管理人可追其他责任主体：<span style={{fontWeight:900}}>其他发起人</span>、负有责任的<span style={{fontWeight:900}}>董监高</span>、<span style={{fontWeight:900}}>协助抽逃</span>的人员等</div>
      </div>
      <div style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.red,background:COLORS.paper,padding:'14px 24px',opacity:enter(74,102)}}>
        <div style={{width:36,height:36,border:'3px solid '+COLORS.red,position:'relative',flexShrink:0}}>
          <div style={{position:'absolute',left:14,top:4,width:4,height:22,background:COLORS.red,transform:'rotate(45deg)'}}/>
          <div style={{position:'absolute',left:14,top:4,width:4,height:22,background:COLORS.red,transform:'rotate(-45deg)'}}/>
        </div>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}>例：乙有100万出资未缴纳，<span style={{fontWeight:900,color:COLORS.red}}>不能以出资未到期为由抗辩</span>——管理人有权追回全部未缴出资</div>
      </div>
    </div>
  </Shell>;
};

export const RecoveryRight=()=> <AbsoluteFill>
  <TimelineSequence name="01-recovery-right-scene-01" start={SCENES['recovery-right-scene-01'].start} duration={SCENES['recovery-right-scene-01'].duration}><RecoveryRight01Scene/></TimelineSequence>
  <TimelineSequence name="02-recovery-right-scene-02" start={SCENES['recovery-right-scene-02'].start} duration={SCENES['recovery-right-scene-02'].duration}><RecoveryRight02Scene/></TimelineSequence>
  <TimelineSequence name="03-recovery-right-scene-03" start={SCENES['recovery-right-scene-03'].start} duration={SCENES['recovery-right-scene-03'].duration}><RecoveryRight03Scene/></TimelineSequence>
</AbsoluteFill>;
