import type {CSSProperties, ReactNode} from 'react';
import {Ban, Bus, Check, Ear, Eye, FileWarning, Landmark, MessageSquareText, Mic, ReceiptText, Route, ShieldX, UserCheck, Users, X} from 'lucide-react';
import {interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../../shared/remotion-runtime';

const P = {paper: '#e9f1f3', navy: '#17354f', cyan: '#19a9b5', orange: '#ed7042', ink: '#1d2a31', white: '#ffffff', line: '#7fa3ad'};
const Reveal = ({children, delay, style}: {children: ReactNode; delay: number; style?: CSSProperties}) => {const frame = useCurrentFrame(); const p = interpolate(frame, [delay, delay + 15], [0, 1], CLAMP); return <div style={{opacity: p, translate: `${30 * (1 - p)}px 0`, ...style}}>{children}</div>;};
const Blueprint = ({code, title, children}: {code: string; title: string; children: ReactNode}) => <div style={{position:'absolute',inset:0,overflow:'hidden',backgroundColor:P.paper,color:P.ink,fontFamily: 'var(--inkloom-animation-body)'}}><div style={{position:'absolute',left:0,top:0,bottom:0,width:190,backgroundColor:P.navy}}/><div style={{position:'absolute',left:42,top:54,color:P.white,fontSize:18,fontWeight:850}}>HEARING<br/>PLAN {code}</div><div style={{position:'absolute',left:232,top:50,fontSize:18,fontWeight:850,color:P.cyan}}>WITNESS TESTIMONY / 10</div><h1 style={{fontFamily: 'var(--inkloom-animation-title)', position:'absolute',left:232,top:88,margin:0,fontSize:56,fontWeight:850}}>{title}</h1><div style={{position:'absolute',left:232,right:70,top:170,height:3,backgroundColor:P.navy}}/>{children}<div style={{position:'absolute',left:232,bottom:30,fontSize:17,fontWeight:750,color:P.line}}>证人证言 · 听证路径</div></div>;

export const QualificationScene = () => <Blueprint code="01" title="证人资格：资格不等于证明力">
  <div data-layout="witness-qualification-and-probative-strength" data-visual-anchor="role-pair" data-text-treatments="label-block,soft-highlight,external-negation" data-visual-grammar="qualification,conjunction,comparison,reinforcement" data-focal-rule="witness-qualification-is-separate-from-probative-strength" data-focal-channels="icon,enclosure,connector,annotation" style={{position:'absolute',left:232,right:70,top:210,bottom:72}}>
    <div data-final-knowledge="probative-standard" style={{position:'absolute',left:0,top:0,right:0,height:76,backgroundColor:P.navy,color:P.white,display:'flex',alignItems:'center',justifyContent:'center',fontSize:29,fontWeight:900,letterSpacing:1}}>证明力大小：依生活经验、常识判断</div>
    <Reveal delay={4} style={{position:'absolute',left:0,top:100,width:330,height:220,backgroundColor:P.white,border:`4px solid ${P.cyan}`,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',gap:12}}><Eye size={68} color={P.cyan}/><div style={{fontSize:32,fontWeight:900}}>知晓案件事实</div><div style={{fontSize:23,color:P.line}}>知道发生了什么</div></Reveal>
    <div style={{position:'absolute',left:350,top:165,fontSize:58,fontWeight:900,color:P.orange}}>＋</div>
    <Reveal delay={20} style={{position:'absolute',left:420,top:100,width:330,height:220,backgroundColor:P.white,border:`4px solid ${P.orange}`,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',gap:12}}><MessageSquareText size={68} color={P.orange}/><div style={{fontSize:32,fontWeight:900}}>能够正确表达</div><div style={{fontSize:23,color:P.line}}>能把所知清楚说出</div></Reveal>
    <div style={{position:'absolute',left:770,top:205,width:95,height:6,backgroundColor:P.navy}}/>
    <Reveal delay={38} style={{position:'absolute',left:880,top:100,width:650,height:220,backgroundColor:P.navy,color:P.white,display:'flex',alignItems:'center',justifyContent:'center',gap:24,textAlign:'center'}}><UserCheck size={74} color={P.cyan}/><div data-final-knowledge="qualification-test"><div style={{fontSize:38,fontWeight:900}}>具有证人资格</div><div style={{marginTop:14,fontSize:25,color:'#d7e5ec'}}>资格审查看“能否作证”</div></div></Reveal>
    <Reveal delay={58} style={{position:'absolute',left:0,top:350,width:750,height:360,backgroundColor:P.white,border:`4px solid ${P.cyan}`,padding:'24px 30px'}}>
      <div data-final-knowledge="capacity-branch" style={{fontSize:30,fontWeight:900,color:P.navy}}>无、限制民事行为能力人</div>
      <div style={{marginTop:14,fontSize:25,lineHeight:1.38}}>知晓事实且能正确表达 → <span style={{color:P.cyan,fontWeight:900}}>可以作证</span></div>
      <div style={{marginTop:14,paddingTop:14,borderTop:`2px solid ${P.line}`,fontSize:24,lineHeight:1.38}}><span style={{color:P.orange,fontWeight:900}}>证明力条件：</span>证言与年龄、智力或精神健康状况不相当</div>
      <div style={{marginTop:14,display:'flex',alignItems:'center',gap:12,fontSize:25,fontWeight:900,color:P.orange}}><ShieldX size={34}/>证明力较小，不能单独定案</div>
      <div style={{marginTop:8,fontSize:23,color:P.navy,fontWeight:800}}>→ 需要其他证据补强</div>
    </Reveal>
    <Reveal delay={72} style={{position:'absolute',right:0,top:350,width:750,height:360,backgroundColor:P.white,border:`4px solid ${P.orange}`,padding:'24px 30px'}}>
      <div data-final-knowledge="interest-branch" style={{fontSize:30,fontWeight:900,color:P.navy}}>利害关系证人</div>
      <div style={{marginTop:14,fontSize:25,lineHeight:1.38}}>与案件有利害关系 → <span style={{color:P.cyan,fontWeight:900}}>可以作证</span>，<span style={{color:P.orange,fontWeight:900}}>不适用回避</span></div>
      <div style={{marginTop:14,paddingTop:14,borderTop:`2px solid ${P.line}`,fontSize:24,lineHeight:1.38}}><span style={{color:P.orange,fontWeight:900}}>证明力条件：</span>与一方当事人或代理人有利害关系</div>
      <div style={{marginTop:14,display:'flex',alignItems:'center',gap:12,fontSize:25,fontWeight:900,color:P.orange}}><ShieldX size={34}/>证明力较小，不能单独定案</div>
      <div style={{marginTop:8,fontSize:23,color:P.navy,fontWeight:800}}>→ 需要其他证据补强</div>
    </Reveal>
  </div>
</Blueprint>;

export const AppearanceScene = () => <Blueprint code="02" title="出庭是主轨，例外必须经过许可">
  <div data-layout="appearance-mainline-with-exception-spurs" data-visual-anchor="timeline-gate" data-text-treatments="label-block,thin-underline,stamp" data-visual-grammar="timeline,exception,authorization,consequence" data-focal-rule="witnesses-appear-unless-deemed-or-permitted-otherwise" data-focal-channels="icon,connector,spatial,contrast" style={{position:'absolute',left:232,right:70,top:210,bottom:72}}>
    <div style={{position:'absolute',left:50,right:50,top:185,height:12,backgroundColor:P.line}}/><div style={{position:'absolute',left:50,top:185,width:980,height:12,backgroundColor:P.cyan}}/>
    {[[Users,'通知证人',60],[Landmark,'应当出庭',520],[Mic,'接受询问',980]].map(([Icon,title,left],i)=><Reveal key={title as string} delay={4+i*16} style={{position:'absolute',left:left as number,top:70,width:320,height:260,backgroundColor:P.white,borderTop:`8px solid ${i===1?P.orange:P.cyan}`,display:'grid',placeItems:'center',textAlign:'center'}}><Icon size={70} color={i===1?P.orange:P.cyan}/><div style={{fontSize:34,fontWeight:900,marginTop:-48}}>{title as string}</div></Reveal>)}
    <Reveal delay={58} style={{position:'absolute',right:0,top:40,width:360,height:330,backgroundColor:P.navy,color:P.white,padding:'34px 38px'}}><FileWarning size={62} color={P.orange}/><div style={{marginTop:24,fontSize:30,fontWeight:900}}>无正当理由未出庭</div><div style={{marginTop:22,fontSize:26,lineHeight:1.5,color:'#d7e5ec'}}>书面证言不得作为定案根据</div></Reveal>
    <Reveal delay={78} style={{position:'absolute',left:120,bottom:0,width:620,height:220,backgroundColor:P.white,border:`3px solid ${P.cyan}`,padding:'28px 32px'}}><Check size={50} color={P.cyan}/><div style={{fontSize:29,fontWeight:900}}>视为出庭</div><div style={{marginTop:14,fontSize:23,lineHeight:1.45}}>准备阶段或法院调查、询问时<br/>双方在场陈述</div></Reveal>
    <Reveal delay={94} style={{position:'absolute',left:800,bottom:0,width:650,height:220,backgroundColor:P.white,border:`3px solid ${P.orange}`,padding:'28px 32px'}}><Bus size={50} color={P.orange}/><div style={{fontSize:29,fontWeight:900}}>可以不出庭</div><div style={{marginTop:14,fontSize:23,lineHeight:1.45}}>健康、路途、不可抗力等＋法院许可<br/>或双方同意＋法院准许</div></Reveal>
  </div>
</Blueprint>;

export const TestimonyConductScene = () => <Blueprint code="03" title="作证要亲历、连续；费用最终归败诉方">
  <div data-layout="testimony-conduct-and-cost-rails" data-visual-anchor="typographic-sequence" data-text-treatments="soft-highlight,external-negation,stamp" data-visual-grammar="sequence,prohibition,cost-transfer" data-focal-rule="testimony-must-be-personal-objective-continuous-and-costs-follow-loss" data-focal-channels="icon,annotation,connector,contrast" style={{position:'absolute',left:232,right:70,top:210,bottom:72}}>
    <Reveal delay={4} style={{position:'absolute',left:0,top:0,width:960,height:690,backgroundColor:P.navy,color:P.white,padding:'38px 44px'}}><Ear size={68} color={P.cyan}/><div style={{marginTop:20,fontSize:38,fontWeight:900}}>如何陈述</div>{['客观陈述亲身感受','不得猜测、推断、评论','不得旁听庭审','不得宣读预先准备材料','应当连续陈述'].map((item,i)=><div key={item} style={{marginTop:18,display:'flex',alignItems:'center',gap:18,fontSize:27,fontWeight:760}}>{i===0||i===4?<Check size={32} color={P.cyan}/>:<X size={32} color={P.orange}/>}<span>{item}</span></div>)}</Reveal>
    <Reveal delay={46} style={{position:'absolute',right:0,top:0,width:610,height:690,backgroundColor:P.white,border:`4px solid ${P.orange}`,padding:'38px 44px'}}><ReceiptText size={68} color={P.orange}/><div style={{marginTop:20,fontSize:38,fontWeight:900}}>费用路线</div><div style={{marginTop:34,fontSize:27,lineHeight:1.5}}>当事人申请<br/><b style={{color:P.cyan}}>申请人先行垫付</b></div><div style={{marginTop:28,fontSize:27,lineHeight:1.5}}>法院通知<br/><b style={{color:P.cyan}}>法院先行垫付</b></div><div style={{position:'absolute',left:44,right:44,bottom:46,padding:'20px 24px',backgroundColor:P.orange,color:P.white,fontSize:31,fontWeight:900,textAlign:'center'}}>最终由败诉方承担</div></Reveal>
  </div>
</Blueprint>;
