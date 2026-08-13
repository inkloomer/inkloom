import type {ReactNode} from 'react';
import {TrendingUp, TrendingDown, Merge, Split, BellRing, Landmark, AlertTriangle} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#EFF2EC', ink:'#232B26', green:'#2E6D4F', orange:'#C2542B', gold:'#C08A2D', paper:'#F8FAF5'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.green,color:COLORS.paper}}>{code}</div>
    <div style={{position:'absolute',left:190,right:76,top:46,fontSize:46,fontWeight:900,lineHeight:1.12,borderBottom:'5px solid '+COLORS.orange,paddingBottom:12}}>{title}</div>
    <div style={{position:'absolute',left:76,right:76,top:150,bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

export const CompanyRestructuring01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="07.3" title="增资 与 减资">
    <div data-layout="capital-change-lanes-1" data-visual-anchor="comparison-axis" data-visual-grammar="increase-lane,simple-reduction" data-text-treatments="label-block,thin-underline,soft-highlight" data-focal-rule="company-restructuring-scene-01-rule" data-focal-channels="contrast,spatial,icon" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="company-restructuring-knowledge-1" style={{position:'absolute',left:0,right:0,top:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#5C6B64',opacity:enter(12,36)}}>股东会决议：2/3以上表决权</div>
      <div data-final-knowledge="company-restructuring-scene-01-increase" style={{position:'absolute',left:24,top:70,width:840,padding:24,border:'5px solid '+COLORS.green,background:COLORS.paper,opacity:enter(28,54),translate:slide(28,54,'-26px 0px')}}>
        <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:12}}>
          <TrendingUp size={42} color={COLORS.green}/>
          <div style={{padding:'8px 18px',background:COLORS.ink,color:COLORS.paper,fontSize:27,fontWeight:900}}>增资</div>
        </div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55}}>原股东新股优先认购权：有限按<span style={{background:COLORS.green+'26',padding:'2px 6px',fontWeight:900}}>实缴出资比例</span>（全体股东另有约定除外），其他股东放弃的部分不当然归属主张者；股份公司<span style={{fontWeight:900}}>不享有</span>优先认购权（章程或决议赋权除外）。程序：修改章程＋变更登记后，增资生效</div>
      </div>
      <div data-final-knowledge="company-restructuring-scene-01-reduce" style={{position:'absolute',right:24,top:70,width:840,padding:24,border:'5px solid '+COLORS.orange,background:COLORS.paper,opacity:enter(46,72),translate:slide(46,72,'26px 0px')}}>
        <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:12}}>
          <TrendingDown size={42} color={COLORS.orange}/>
          <div style={{padding:'8px 18px',background:COLORS.ink,color:COLORS.paper,fontSize:27,fontWeight:900}}>减资</div>
        </div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55}}>普通减资：资本过剩或回购股权——退还股东资金或减免未缴出资义务；须<span style={{fontWeight:900}}>10日内通知＋30日内公告</span>债权人，债权人自接到通知之日起30日内（未接到通知的自公告之日起45日内）有权要求清偿或提供担保；等比例减资（有限全体股东另有约定或股份公司章程另有规定除外）</div>
      </div>
      <div data-final-knowledge="company-restructuring-scene-01-simple" style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:18,border:'5px solid '+COLORS.gold,background:COLORS.paper,padding:'16px 26px',opacity:enter(74,102)}}>
        <AlertTriangle size={40} color={COLORS.gold}/>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.5}}>简易减资（形式减资）：用三大公积金弥补亏损后仍有亏损的，可减资补亏——<span style={{fontWeight:900}}>只能补亏</span>，不得向股东分配、不得免除出资义务；仅需<span style={{fontWeight:900}}>公告</span>而无需通知债权人；减资后法定与任意公积金累计额达注册资本<span style={{background:COLORS.gold+'40',padding:'2px 6px',fontWeight:900}}>50%</span>前不得分红</div>
      </div>
    </div>
  </Shell>;
};

export const CompanyRestructuring02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="07.3" title="合并 与 分立">
    <div data-layout="merge-split-duel-2" data-visual-anchor="role-pair" data-visual-grammar="merge-creditor-remedy,split-joint-debt" data-text-treatments="label-block,stamp,external-negation" data-focal-rule="company-restructuring-scene-02-rule" data-focal-channels="contrast,connector,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="company-restructuring-knowledge-2" style={{position:'absolute',left:0,right:0,top:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#5C6B64',opacity:enter(12,36)}}>分类：吸收A+B=A / 新设A+B=C；存续A=A+B / 新设A=B+C</div>
      <div data-final-knowledge="company-restructuring-scene-02-merge" style={{position:'absolute',left:24,top:80,width:850,padding:24,border:'5px solid '+COLORS.green,background:COLORS.paper,opacity:enter(28,54)}}>
        <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:12}}>
          <Merge size={40} color={COLORS.green}/>
          <div style={{padding:'8px 18px',background:COLORS.green,color:COLORS.paper,fontSize:27,fontWeight:900}}>合并</div>
          <div style={{fontSize:22,fontWeight:900,color:COLORS.green}}>债权人救济：同减资</div>
        </div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55}}>签订合并协议；10日内通知＋30日内公告；债权人30日/45日内有权要求<span style={{fontWeight:900}}>清偿或担保</span>；债务由合并后存续或新设的公司<span style={{background:COLORS.green+'26',padding:'2px 6px',fontWeight:900}}>承继</span></div>
      </div>
      <div data-final-knowledge="company-restructuring-scene-02-split" style={{position:'absolute',right:24,top:80,width:850,padding:24,border:'5px solid '+COLORS.orange,background:COLORS.paper,opacity:enter(46,72)}}>
        <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:12}}>
          <Split size={40} color={COLORS.orange}/>
          <div style={{padding:'8px 18px',background:COLORS.orange,color:COLORS.paper,fontSize:27,fontWeight:900}}>分立</div>
          <div style={{fontSize:22,fontWeight:900,color:COLORS.orange}}>债权人救济：同增资——无</div>
        </div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55}}>分立前债务由分立后的公司承担<span style={{background:COLORS.orange+'24',padding:'2px 6px',fontWeight:900}}>连带责任</span>；例外：分立前与债权人就还债达成<span style={{fontWeight:900}}>书面协议</span>；债权人不能要求清偿或担保</div>
      </div>
      <div data-final-knowledge="company-restructuring-scene-02-simple-merge" style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:18,border:'4px solid '+COLORS.ink,background:COLORS.paper,padding:'16px 26px',opacity:enter(74,102)}}>
        <Landmark size={40} color={COLORS.gold}/>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.5}}>简易合并：<span style={{fontWeight:900}}>母子合并</span>（持股90%以上）——子公司只需董事会决议，但应通知其他股东，其他股东有权请求回购股权；母公司仍需股东会决议。<span style={{fontWeight:900}}>小规模合并</span>（合并价款不超过公司净资产10%）——合并公司只需董事会决议（章程另有规定除外）</div>
        <div style={{marginLeft:'auto',padding:'8px 18px',border:'3px solid '+COLORS.ink,background:COLORS.gold,color:COLORS.paper,fontSize:21,fontWeight:900,transform:'rotate(-2deg)'}}>注销登记·无需清算</div>
      </div>
    </div>
  </Shell>;
};

export const CompanyRestructuring03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const orderProgress=interpolate(frame,[110,230],[0,1],CLAMP);
  return <Shell code="07.3" title="减资程序与违法减资">
    <div data-layout="reduction-pipeline-3" data-visual-anchor="flow-path" data-visual-grammar="reduction-five-steps,illegal-reduction" data-text-treatments="thin-underline,stamp,soft-highlight" data-focal-rule="company-restructuring-scene-03-rule" data-focal-channels="connector,motion,enclosure" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="company-restructuring-knowledge-3" style={{position:'absolute',left:0,right:0,top:0,fontSize:26,fontWeight:900,letterSpacing:4,color:'#5C6B64',opacity:enter(12,36)}}>普通减资五步</div>
      <div style={{position:'absolute',left:0,right:0,top:70,display:'grid',gap:16}}>
        <div data-final-knowledge="company-restructuring-scene-03-step-0" style={{display:'grid',gridTemplateColumns:'70px 1fr',gap:18,alignItems:'center',padding:'14px 22px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(28,54)}}>
          <div style={{width:70,height:70,border:'4px solid '+COLORS.ink,background:COLORS.green,color:COLORS.paper,display:'grid',placeItems:'center',fontSize:30,fontWeight:900}}>1</div>
          <div><div style={{fontSize:26,fontWeight:900,marginBottom:4}}>股东会决议（2/3以上表决权）</div><div style={{fontSize:21,fontWeight:700,color:'#5A645C'}}>同增资</div></div>
        </div>
        <div data-final-knowledge="company-restructuring-scene-03-step-1" style={{display:'grid',gridTemplateColumns:'70px 1fr',gap:18,alignItems:'center',padding:'14px 22px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(44,70)}}>
          <div style={{width:70,height:70,border:'4px solid '+COLORS.ink,background:COLORS.green,color:COLORS.paper,display:'grid',placeItems:'center',fontSize:30,fontWeight:900}}>2</div>
          <div><div style={{fontSize:26,fontWeight:900,marginBottom:4}}>编制资产负债表和财产清单</div></div>
        </div>
        <div data-final-knowledge="company-restructuring-scene-03-step-2" style={{display:'grid',gridTemplateColumns:'70px 1fr',gap:18,alignItems:'center',padding:'14px 22px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(60,86)}}>
          <div style={{width:70,height:70,border:'4px solid '+COLORS.ink,background:COLORS.orange,color:COLORS.paper,display:'grid',placeItems:'center',fontSize:30,fontWeight:900}}>3</div>
          <div><div style={{fontSize:26,fontWeight:900,marginBottom:4}}>通知公告债权人</div><div style={{fontSize:21,fontWeight:700,color:'#5A645C'}}>10日内通知＋30日内公告；债权人30日/45日内可要求清偿或担保</div></div>
        </div>
        <div data-final-knowledge="company-restructuring-scene-03-illegal" style={{display:'grid',gridTemplateColumns:'70px 1fr',gap:18,alignItems:'center',padding:'14px 22px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(76,102)}}>
          <div style={{width:70,height:70,border:'4px solid '+COLORS.ink,background:COLORS.gold,color:COLORS.paper,display:'grid',placeItems:'center',fontSize:30,fontWeight:900}}>4-5</div>
          <div><div style={{fontSize:26,fontWeight:900,marginBottom:4}}>等比例减资 → 修改章程＋变更登记</div><div style={{fontSize:21,fontWeight:700,color:'#5A645C'}}>登记后减资生效</div></div>
        </div>
      </div>
      <div style={{position:'absolute',left:40,top:0,height:0,opacity:0}}/>
      <div data-stateful-source="company-restructuring-reduction-order" style={{position:'absolute',left:24,top:interpolate(orderProgress,[0,1],[90,470],CLAMP),width:36,height:36,borderRadius:'50%',background:COLORS.orange,border:'5px solid '+COLORS.ink,opacity:orderProgress>0.9?0:1,zIndex:4}}/>
      <div style={{position:'absolute',right:0,top:96,width:620,padding:'20px 26px',border:'5px dashed '+COLORS.orange,background:COLORS.paper,opacity:enter(88,116)}}>
        <div style={{fontSize:26,fontWeight:900,marginBottom:10,color:COLORS.orange}}>违法减资的后果</div>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.5}}>股东应当退还其收到的资金，减免出资的应当恢复原状；给公司造成损失的，股东及负有责任的董监高承担赔偿责任</div>
        <div data-stateful-terminal="company-restructuring-reduction-order" style={{display:'inline-block',marginTop:12,padding:'8px 16px',border:'3px solid '+COLORS.ink,background:COLORS.green,color:COLORS.paper,fontSize:20,fontWeight:900,opacity:enter(150,172)}}>减资流程走完</div>
      </div>
    </div>
  </Shell>;
};

export const CompanyRestructuring=()=> <AbsoluteFill>
  <TimelineSequence name="01-company-restructuring-scene-01" start={SCENES['company-restructuring-scene-01'].start} duration={SCENES['company-restructuring-scene-01'].duration}><CompanyRestructuring01Scene/></TimelineSequence>
  <TimelineSequence name="02-company-restructuring-scene-02" start={SCENES['company-restructuring-scene-02'].start} duration={SCENES['company-restructuring-scene-02'].duration}><CompanyRestructuring02Scene/></TimelineSequence>
  <TimelineSequence name="03-company-restructuring-scene-03" start={SCENES['company-restructuring-scene-03'].start} duration={SCENES['company-restructuring-scene-03'].duration}><CompanyRestructuring03Scene/></TimelineSequence>
</AbsoluteFill>;
