import type {ReactNode} from 'react';
import {Users, Crown, ShieldCheck, Gavel, Landmark, TrendingUp, Building2, FileText} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#F2ECE1', ink:'#26222E', purple:'#7A3E65', green:'#3E6B4F', gold:'#C08A2D', paper:'#FAF4E9'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.purple,color:COLORS.paper}}>{code}</div>
    <div style={{position:'absolute',left:190,right:76,top:46,fontSize:46,fontWeight:900,lineHeight:1.12,borderBottom:'5px solid '+COLORS.green,paddingBottom:12}}>{title}</div>
    <div style={{position:'absolute',left:76,right:76,top:150,bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

export const CreditorsMeeting01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="10.2" title="三会类比">
    <div data-layout="organ-mirror-1" data-visual-anchor="comparison-axis" data-visual-grammar="three-organ-mirror,worker-union-seat" data-text-treatments="label-block,soft-highlight,thin-underline" data-focal-rule="creditors-meeting-scene-01-rule" data-focal-channels="contrast,spatial,icon" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="creditors-meeting-knowledge-1" style={{position:'absolute',left:0,right:0,top:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#6E5C72',opacity:enter(12,36)}}>破产程序三机构 ←→ 公司三会</div>
      <div style={{position:'absolute',left:0,right:0,top:76,display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="creditors-meeting-scene-01-meeting" style={{padding:'20px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.purple,background:COLORS.paper,minHeight:300,opacity:enter(28,54)}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10}}>
            <Users size={38} color={COLORS.purple}/>
            <div style={{fontSize:26,fontWeight:900}}>债权人会议</div>
          </div>
          <div style={{fontSize:22,fontWeight:900,color:COLORS.purple,marginBottom:8}}>类比股东会 → 决议机构</div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>由申报债权的债权人＋债务人职工和工会代表组成；可授权管理人营业事项、表决设立债委会</div>
        </div>
        <div data-final-knowledge="creditors-meeting-scene-01-manager" style={{padding:'20px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.green,background:COLORS.paper,minHeight:300,opacity:enter(44,70)}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10}}>
            <Crown size={38} color={COLORS.green}/>
            <div style={{fontSize:26,fontWeight:900}}>破产管理人</div>
          </div>
          <div style={{fontSize:22,fontWeight:900,color:COLORS.green,marginBottom:8}}>类比董事会 → 执行机构</div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>向债权人会议提交表决重大方案，表决后交付执行，并向其报告</div>
        </div>
        <div data-final-knowledge="creditors-meeting-scene-01-committee" style={{padding:'20px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.gold,background:COLORS.paper,minHeight:300,opacity:enter(60,86)}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10}}>
            <ShieldCheck size={38} color={COLORS.gold}/>
            <div style={{fontSize:26,fontWeight:900}}>债权人委员会</div>
          </div>
          <div style={{fontSize:22,fontWeight:900,color:'#7A5B12',marginBottom:8}}>类比监事会 → 监督机构</div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>债权人代表＋<span style={{fontWeight:900}}>1名职工或工会代表</span>，成员≤9人；对管理人的处分行为进行监督</div>
        </div>
      </div>
      <div style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.purple,background:COLORS.paper,padding:'14px 24px',opacity:enter(86,112)}}>
        <FileText size={38} color={COLORS.purple}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}>易错：债委会应有一名债务人<span style={{fontWeight:900}}>职工代表或工会代表</span>——不设职工代表是错误的</div>
      </div>
    </div>
  </Shell>;
};

export const CreditorsMeeting02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="10.2" title="职权 与 决议规则">
    <div data-layout="meeting-powers-2" data-visual-anchor="boundary" data-visual-grammar="meeting-powers,voting-threshold" data-text-treatments="stamp,soft-highlight,label-block" data-focal-rule="creditors-meeting-scene-02-rule" data-focal-channels="enclosure,annotation,contrast" data-final-knowledge="creditors-meeting-knowledge-2" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="creditors-meeting-scene-02-powers" style={{position:'absolute',left:24,top:0,width:850,padding:'22px 26px',border:'5px solid '+COLORS.purple,background:COLORS.paper,opacity:enter(28,54)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
          <Gavel size={40} color={COLORS.purple}/>
          <div style={{fontSize:27,fontWeight:900}}>债权人会议的职权</div>
        </div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55}}>①核查债权 ②选任和更换债权人委员会成员 ③通过重大方案（重整计划、和解协议等）④监督管理人、申请法院更换管理人、审查管理人费用（可授权债委会）⑤决定继续或停止营业（必要时可授权债委会）</div>
      </div>
      <div data-final-knowledge="creditors-meeting-scene-02-vote" style={{position:'absolute',right:24,top:0,width:850,padding:'22px 26px',border:'5px solid '+COLORS.green,background:COLORS.paper,opacity:enter(46,72)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
          <Users size={40} color={COLORS.green}/>
          <div style={{fontSize:27,fontWeight:900}}>会议与决议规则</div>
        </div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55}}>申报期满后<span style={{fontWeight:900}}>15日内</span>召开第一次债权人会议；一般事项：出席<span style={{background:COLORS.green+'26',padding:'2px 6px',fontWeight:900}}>过半数</span>＋占无财产担保债权总额的<span style={{fontWeight:900}}>1/2以上</span>；特殊事项：重整计划等（详见重整专题）</div>
      </div>
      <div style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.gold,background:COLORS.paper,padding:'14px 24px',opacity:enter(74,102)}}>
        <Landmark size={38} color={COLORS.gold}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}>决议门槛：<span style={{background:COLORS.gold+'40',padding:'2px 8px',fontWeight:900}}>人头过半 ＋ 债权额1/2以上</span>（无财产担保债权总额口径）</div>
      </div>
    </div>
  </Shell>;
};

export const CreditorsMeeting03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const orderProgress=interpolate(frame,[120,230],[0,1],CLAMP);
  return <Shell code="10.2" title="重大财产处分的流程">
    <div data-layout="disposal-pipeline-3" data-visual-anchor="flow-path" data-visual-grammar="disposal-four-steps,pre-meeting-court-license" data-text-treatments="thin-underline,stamp,soft-highlight" data-focal-rule="creditors-meeting-scene-03-rule" data-focal-channels="connector,motion,enclosure" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="creditors-meeting-knowledge-3" style={{position:'absolute',left:0,right:0,top:0,fontSize:26,fontWeight:900,letterSpacing:4,color:'#6E5C72',opacity:enter(12,36)}}>处分类型：不动产权益、探矿权采矿权、知识产权、全部库存或营业、债权和有价证券、放弃权利；新增借款、新增财产担保、履行双务合同、担保物取回</div>
      <div style={{position:'absolute',left:0,right:0,top:80,display:'grid',gridTemplateColumns:'repeat(4,minmax(0,1fr))',gap:16}}>
        <div data-final-knowledge="creditors-meeting-scene-03-step-0" style={{padding:'16px 20px',border:'4px solid '+COLORS.ink,borderTop:'10px solid '+COLORS.purple,background:COLORS.paper,minHeight:150,opacity:enter(28,54)}}>
          <div style={{fontSize:25,fontWeight:900,marginBottom:8}}>① 管理人拟订</div>
          <div style={{fontSize:21,fontWeight:700,lineHeight:1.5}}>制作财产管理或变价方案</div>
        </div>
        <div data-final-knowledge="creditors-meeting-scene-03-step-1" style={{padding:'16px 20px',border:'4px solid '+COLORS.ink,borderTop:'10px solid '+COLORS.green,background:COLORS.paper,minHeight:150,opacity:enter(44,70)}}>
          <div style={{fontSize:25,fontWeight:900,marginBottom:8}}>② 债权人会议表决</div>
          <div style={{fontSize:21,fontWeight:700,lineHeight:1.5}}>表决通过后方可处分</div>
        </div>
        <div data-final-knowledge="creditors-meeting-scene-03-note" style={{padding:'16px 20px',border:'4px solid '+COLORS.ink,borderTop:'10px solid '+COLORS.gold,background:COLORS.paper,minHeight:150,opacity:enter(60,86)}}>
          <div style={{fontSize:25,fontWeight:900,marginBottom:8}}>③ 报告债委会 → ④ 执行</div>
          <div style={{fontSize:21,fontWeight:700,lineHeight:1.5}}>通过：提前10日书面报告债委会后处分；未通过：不得处分；未设债委会：报告法院</div>
        </div>
        <div style={{padding:'16px 20px',border:'4px solid '+COLORS.red,background:COLORS.paper,minHeight:150,opacity:enter(76,102)}}>
          <div style={{fontSize:25,fontWeight:900,marginBottom:8,color:COLORS.red}}>第一次会议前</div>
          <div style={{fontSize:21,fontWeight:700,lineHeight:1.5}}>管理人进行重大处分应经<span style={{fontWeight:900}}>法院许可</span></div>
        </div>
      </div>
      <div style={{position:'absolute',left:0,right:0,top:300,height:6,background:COLORS.ink,opacity:enter(120,142)}}/>
      <div style={{position:'absolute',left:0,top:300,width:interpolate(orderProgress,[0,1],[0,1768],CLAMP),height:6,background:COLORS.green}}/>
      <div data-stateful-source="creditors-meeting-disposal-order" style={{position:'absolute',left:interpolate(orderProgress,[0,1],[0,1720],CLAMP),top:283,width:42,height:42,borderRadius:'50%',background:COLORS.gold,border:'5px solid '+COLORS.ink,opacity:orderProgress>0.92?0:1,zIndex:4}}/>
      <div style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.ink,background:COLORS.paper,padding:'14px 24px',opacity:enter(100,126)}}>
        <Building2 size={38} color={COLORS.purple}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}>债委会认为处分不符合方案的：可要求管理人<span style={{fontWeight:900}}>纠正</span>；管理人拒不纠正的，请求法院决定。法院认为不符合方案的：<span style={{background:COLORS.red+'20',padding:'2px 6px',fontWeight:900}}>责令停止处分</span></div>
        <div data-stateful-terminal="creditors-meeting-disposal-order" style={{marginLeft:'auto',padding:'8px 18px',border:'3px solid '+COLORS.ink,background:COLORS.green,color:COLORS.paper,fontSize:21,fontWeight:900,opacity:enter(150,172)}}>处分流程走完</div>
      </div>
    </div>
  </Shell>;
};

export const CreditorsMeeting=()=> <AbsoluteFill>
  <TimelineSequence name="01-creditors-meeting-scene-01" start={SCENES['creditors-meeting-scene-01'].start} duration={SCENES['creditors-meeting-scene-01'].duration}><CreditorsMeeting01Scene/></TimelineSequence>
  <TimelineSequence name="02-creditors-meeting-scene-02" start={SCENES['creditors-meeting-scene-02'].start} duration={SCENES['creditors-meeting-scene-02'].duration}><CreditorsMeeting02Scene/></TimelineSequence>
  <TimelineSequence name="03-creditors-meeting-scene-03" start={SCENES['creditors-meeting-scene-03'].start} duration={SCENES['creditors-meeting-scene-03'].duration}><CreditorsMeeting03Scene/></TimelineSequence>
</AbsoluteFill>;
