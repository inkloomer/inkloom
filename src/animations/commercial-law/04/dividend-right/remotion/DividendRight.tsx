import type {ReactNode} from 'react';
import {Coins, PieChart, CalendarClock, TrendingDown, PiggyBank, Gavel, AlertTriangle} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#F4F0E6', ink:'#20232B', red:'#B23A30', teal:'#15677E', gold:'#D9A62E', paper:'#FBF8EF'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.teal,color:COLORS.paper}}>{code}</div>
    <div style={{position:'absolute',left:190,right:76,top:46,fontSize:46,fontWeight:900,lineHeight:1.12,borderBottom:'5px solid '+COLORS.gold,paddingBottom:12}}>{title}</div>
    <div style={{position:'absolute',left:76,right:76,top:150,bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

export const DividendRight01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="04.2" title="分配依据">
    <div data-layout="allocation-basis-1" data-visual-anchor="comparison-axis" data-visual-grammar="allocation-basis-split,six-month-deadline" data-text-treatments="label-block,thin-underline,soft-highlight" data-focal-rule="dividend-right-scene-01-rule" data-focal-channels="contrast,spatial,icon" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="dividend-right-knowledge-1" style={{position:'absolute',left:0,right:0,top:0,textAlign:'center',fontSize:26,fontWeight:800,letterSpacing:6,color:'#6E6757',opacity:enter(12,36)}}>按什么比例分？</div>
      <div data-final-knowledge="dividend-right-scene-01-llc" style={{position:'absolute',left:24,top:70,width:840,padding:26,border:'5px solid '+COLORS.teal,background:COLORS.paper,opacity:enter(28,54),translate:slide(28,54,'-26px 0px')}}>
        <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:14}}>
          <Coins size={46} color={COLORS.teal}/>
          <div style={{padding:'8px 18px',background:COLORS.ink,color:COLORS.paper,fontSize:28,fontWeight:900}}>有限公司</div>
        </div>
        <div style={{fontSize:25,fontWeight:800,lineHeight:1.5,padding:'12px 16px',background:COLORS.teal+'10'}}>按<span style={{background:COLORS.teal+'2E',padding:'2px 8px',fontWeight:900}}>实缴出资比例</span>分配，但全体股东另有约定的除外</div>
      </div>
      <div data-final-knowledge="dividend-right-scene-01-jsc" style={{position:'absolute',right:24,top:70,width:840,padding:26,border:'5px solid '+COLORS.gold,background:COLORS.paper,opacity:enter(46,72),translate:slide(46,72,'26px 0px')}}>
        <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:14}}>
          <PieChart size={46} color={COLORS.gold}/>
          <div style={{padding:'8px 18px',background:COLORS.ink,color:COLORS.paper,fontSize:28,fontWeight:900}}>股份公司</div>
        </div>
        <div style={{fontSize:25,fontWeight:800,lineHeight:1.5,padding:'12px 16px',background:COLORS.gold+'14'}}>按<span style={{background:COLORS.gold+'40',padding:'2px 8px',fontWeight:900}}>所持股份比例</span>分配，但章程另有规定的除外</div>
      </div>
      <div data-final-knowledge="dividend-right-scene-01-deadline" style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:18,border:'4px solid '+COLORS.ink,background:COLORS.paper,padding:'16px 26px',opacity:enter(74,102)}}>
        <CalendarClock size={42} color={COLORS.red}/>
        <div style={{fontSize:24,fontWeight:800,lineHeight:1.5}}>股东会作出分红决议的，董事会应当在决议作出之日起<span style={{background:COLORS.red+'20',padding:'2px 8px',fontWeight:900}}>6个月内</span>进行分配；<span style={{fontWeight:900}}>公司持有的本公司股份不得分配利润</span></div>
      </div>
    </div>
  </Shell>;
};

export const DividendRight02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const flowProgress=interpolate(frame,[96,216],[0,1],CLAMP);
  const Step=({title,caption,delay,color}:{readonly title:string;readonly caption:string;readonly delay:number;readonly color:string})=>(
    <div style={{padding:'14px 24px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(delay,delay+26),minHeight:96}}>
      <div style={{fontSize:26,fontWeight:900,marginBottom:4}}>{title}</div>
      <div style={{fontSize:21,fontWeight:700,color:'#5A564C',lineHeight:1.4}}>{caption}</div>
    </div>
  );
  return <Shell code="04.2" title="利润瀑布与公积金">
    <div data-layout="profit-waterfall-2" data-visual-anchor="flow-path" data-visual-grammar="waterfall-steps,reserve-numbers" data-text-treatments="soft-highlight,stamp,label-block" data-focal-rule="dividend-right-scene-02-rule" data-focal-channels="connector,motion,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="dividend-right-knowledge-2" style={{position:'absolute',left:0,top:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <TrendingDown size={42} color={COLORS.teal}/>
        <div style={{fontSize:28,fontWeight:900}}>税后利润 → 公积金 → 分红</div>
      </div>
      <div style={{position:'absolute',left:0,top:80,width:880,display:'grid',gap:14}}>
        <div data-final-knowledge="dividend-right-scene-02-step-0">
          <Step title="① 提取法定公积金 10%" caption="税后利润的10%（法定比例）" delay={26} color={COLORS.teal}/>
        </div>
        <div data-final-knowledge="dividend-right-scene-02-step-1">
          <Step title="② 提取任意公积金" caption="防过度分红、提高抗风险能力" delay={48} color={COLORS.teal}/>
        </div>
        <div data-final-knowledge="dividend-right-scene-02-step-2">
          <Step title="③ 公积金用途 → 股东分红" caption="弥补亏损（先任意+法定，再资本公积金）、扩大生产经营、转增注册资本" delay={70} color={COLORS.teal}/>
        </div>
      </div>
      <div style={{position:'absolute',left:900,top:100,width:60,height:interpolate(flowProgress,[0,1],[0,300],CLAMP),background:COLORS.teal,opacity:enter(96,118)}}/>
      <div data-stateful-source="dividend-right-profit-flow" style={{position:'absolute',left:886,top:interpolate(flowProgress,[0,1],[96,392],CLAMP),width:88,height:26,clipPath:'polygon(0 0, 78% 0, 100% 50%, 78% 100%, 0 100%)',background:COLORS.gold,opacity:flowProgress>0.9?0:1,zIndex:4}}/>
      <div data-final-knowledge="dividend-right-scene-02-numbers" style={{position:'absolute',right:0,top:96,width:760,padding:'20px 26px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(104,130)}}>
        <div style={{fontSize:26,fontWeight:900,marginBottom:12}}>三个数字</div>
        <div style={{display:'grid',gap:10}}>
          <div style={{fontSize:23,fontWeight:800,lineHeight:1.45}}><span style={{background:COLORS.teal+'28',padding:'2px 10px',fontWeight:900}}>10%</span> 提取法定公积金的比例</div>
          <div style={{fontSize:23,fontWeight:800,lineHeight:1.45}}><span style={{background:COLORS.gold+'40',padding:'2px 10px',fontWeight:900}}>50%</span> 累计达注册资本50%以上可不再提取</div>
          <div style={{fontSize:23,fontWeight:800,lineHeight:1.45}}><span style={{background:COLORS.red+'20',padding:'2px 10px',fontWeight:900}}>25%</span> 转增注册资本时留存≥转增前注册资本的25%</div>
        </div>
        <div data-stateful-terminal="dividend-right-profit-flow" style={{display:'inline-block',marginTop:14,padding:'8px 18px',border:'3px solid '+COLORS.ink,background:COLORS.gold,color:COLORS.paper,fontSize:21,fontWeight:900,opacity:enter(140,162)}}>利润走完瀑布</div>
      </div>
      <div style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:14,border:'3px dashed '+COLORS.gold,background:COLORS.paper,padding:'13px 22px',opacity:enter(122,148)}}>
        <PiggyBank size={36} color={COLORS.gold}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.4}}>资本公积金系资本投入，主要包括未计入注册资本的无面额股股款及股本溢价</div>
      </div>
    </div>
  </Shell>;
};

export const DividendRight03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="04.2" title="分红诉讼与违法分配">
    <div data-layout="resolution-gate-3" data-visual-anchor="boundary" data-visual-grammar="resolution-threshold,abuse-exception" data-text-treatments="external-negation,stamp,soft-highlight" data-focal-rule="dividend-right-scene-03-rule" data-focal-channels="enclosure,contrast,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="dividend-right-knowledge-3" style={{position:'absolute',left:0,right:0,top:0,fontSize:26,fontWeight:900,letterSpacing:4,color:'#6E6757',opacity:enter(12,36)}}>诉讼以股东会决议为门槛</div>
      <div data-final-knowledge="dividend-right-scene-03-rule" style={{position:'absolute',left:24,top:76,width:880,padding:'22px 28px',border:'5px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(28,54)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
          <Gavel size={42} color={COLORS.ink}/>
          <div style={{fontSize:27,fontWeight:900}}>原则：先有决议</div>
        </div>
        <div style={{fontSize:24,fontWeight:800,lineHeight:1.5}}>未提交载明具体分配方案的<span style={{background:COLORS.teal+'26',padding:'2px 8px',fontWeight:900}}>股东会决议</span>的，法院应驳回诉讼请求</div>
      </div>
      <div data-final-knowledge="dividend-right-scene-03-exception" style={{position:'absolute',left:24,top:330,width:880,padding:'22px 28px',border:'5px solid '+COLORS.gold,background:COLORS.paper,opacity:enter(46,72)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
          <AlertTriangle size={42} color={COLORS.gold}/>
          <div style={{fontSize:27,fontWeight:900}}>例外：滥用股东权利</div>
        </div>
        <div style={{fontSize:24,fontWeight:800,lineHeight:1.5}}>违反法律滥用股东权利导致公司不分配利润，给其他股东造成损失的除外；控股股东不能与公司列为共同被告——<span style={{fontWeight:900}}>被告只有公司</span></div>
      </div>
      <div data-final-knowledge="dividend-right-scene-03-illegal" style={{position:'absolute',right:24,top:76,width:840,padding:'22px 28px',border:'5px solid '+COLORS.red,background:COLORS.paper,opacity:enter(64,90)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
          <AlertTriangle size={42} color={COLORS.red}/>
          <div style={{fontSize:27,fontWeight:900,color:COLORS.red}}>违法分配的后果</div>
        </div>
        <div style={{fontSize:24,fontWeight:800,lineHeight:1.55}}>股东应当<span style={{background:COLORS.red+'20',padding:'2px 8px',fontWeight:900}}>退还</span>其收到的资金；给公司造成损失的，股东及负有责任的董监高承担赔偿责任</div>
      </div>
      <div style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.teal,background:COLORS.paper,padding:'14px 24px',opacity:enter(92,118)}}>
        <div style={{width:36,height:36,border:'3px solid '+COLORS.teal,position:'relative',flexShrink:0}}>
          <div style={{position:'absolute',left:14,top:4,width:4,height:22,background:COLORS.teal,transform:'rotate(45deg)'}}/>
          <div style={{position:'absolute',left:14,top:4,width:4,height:22,background:COLORS.teal,transform:'rotate(-45deg)'}}/>
        </div>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}>对照：全体股东<span style={{fontWeight:900}}>自愿约定</span>某股东不参加分红，约定有效；<span style={{fontWeight:900,color:COLORS.red}}>章程剥夺分红权</span>的条款才无效</div>
      </div>
    </div>
  </Shell>;
};

export const DividendRight=()=> <AbsoluteFill>
  <TimelineSequence name="01-dividend-right-scene-01" start={SCENES['dividend-right-scene-01'].start} duration={SCENES['dividend-right-scene-01'].duration}><DividendRight01Scene/></TimelineSequence>
  <TimelineSequence name="02-dividend-right-scene-02" start={SCENES['dividend-right-scene-02'].start} duration={SCENES['dividend-right-scene-02'].duration}><DividendRight02Scene/></TimelineSequence>
  <TimelineSequence name="03-dividend-right-scene-03" start={SCENES['dividend-right-scene-03'].start} duration={SCENES['dividend-right-scene-03'].duration}><DividendRight03Scene/></TimelineSequence>
</AbsoluteFill>;
