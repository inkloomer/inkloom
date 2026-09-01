import type {ReactNode} from 'react';
import {Ban, BookOpen, CalendarClock, Coins, Factory, FileX2, Gavel, HandCoins, Layers, Percent, PieChart, PiggyBank, RefreshCw, Scale, ScrollText, TrendingDown, Users, AlertTriangle} from 'lucide-react';
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

const Watermark=({icon,size=170,color}:{readonly icon:ReactNode;readonly size?:number;readonly color:string})=>(
  <div style={{position:'absolute',right:6,bottom:-4,opacity:0.09,pointerEvents:'none'}}>
    {icon}
  </div>
);

const Row=({icon,children,delay,color,from='0px 20px',pad='11px 14px'}:{readonly icon:ReactNode;readonly children:ReactNode;readonly delay:number;readonly color:string;readonly from?:string;readonly pad?:string})=>{
  const frame=useCurrentFrame();
  return <div style={{display:'flex',alignItems:'center',gap:12,padding:pad,background:COLORS.paper,borderLeft:'6px solid '+color,fontSize:22,fontWeight:800,lineHeight:1.45,opacity:interpolate(frame,[delay,delay+22],[0,1],CLAMP),translate:interpolate(frame,[delay,delay+22],[from,'0px 0px'],CLAMP)}}>
    <span style={{flexShrink:0,display:'flex'}}>{icon}</span>
    <span>{children}</span>
  </div>;
};

export const DividendRight01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="04.2" title="分配依据">
    <div data-layout="allocation-basis-1" data-visual-anchor="comparison-axis" data-visual-grammar="allocation-basis-split,six-month-deadline" data-text-treatments="label-block,thin-underline,soft-highlight" data-focal-rule="dividend-right-scene-01-rule" data-focal-channels="contrast,spatial,icon" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:18}}>
      <div data-final-knowledge="dividend-right-knowledge-1" style={{flexShrink:0,textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center',gap:12,fontSize:26,fontWeight:800,letterSpacing:6,color:'#6E6757',opacity:enter(10,32)}}>
        <Percent size={30} color={COLORS.gold}/>
        <span>按什么比例分？</span>
      </div>
      <div style={{display:'flex',gap:20,flex:'1.1 1 0',minHeight:0}}>
      <div data-final-knowledge="dividend-right-scene-01-llc" style={{flex:1,padding:'22px 26px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'4D',display:'flex',flexDirection:'column',opacity:enter(26,52),translate:slide(26,52,'-60px 0px')}}>
        <Watermark icon={<Coins size={160} color={COLORS.teal} strokeWidth={1.2}/>} color={COLORS.teal}/>
        <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:14,flexShrink:0}}>
          <Coins size={40} color={COLORS.teal}/>
          <div style={{padding:'7px 18px',background:COLORS.ink,color:COLORS.paper,fontSize:26,fontWeight:900}}>有限公司</div>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:12,flex:1,justifyContent:'space-evenly'}}>
          <Row icon={<Percent size={26} color={COLORS.teal}/>} delay={40} color={COLORS.teal} pad="14px 16px">按<span style={{background:COLORS.teal+'2E',padding:'1px 8px',fontWeight:900}}>实缴出资比例</span>分配</Row>
          <Row icon={<Users size={26} color={COLORS.teal}/>} delay={56} color={COLORS.teal} pad="14px 16px">但<span style={{fontWeight:900}}>全体股东另有约定</span>的除外 —— <span style={{background:COLORS.teal+'20',padding:'1px 8px',fontWeight:900}}>约定优先</span></Row>
        </div>
      </div>
      <div data-final-knowledge="dividend-right-scene-01-jsc" style={{flex:1,padding:'22px 26px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'4D',display:'flex',flexDirection:'column',opacity:enter(44,70),translate:slide(44,70,'60px 0px')}}>
        <Watermark icon={<PieChart size={160} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
        <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:14,flexShrink:0}}>
          <PieChart size={40} color={COLORS.gold}/>
          <div style={{padding:'7px 18px',background:COLORS.ink,color:COLORS.paper,fontSize:26,fontWeight:900}}>股份公司</div>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:12,flex:1,justifyContent:'space-evenly'}}>
          <Row icon={<Percent size={26} color={COLORS.gold}/>} delay={58} color={COLORS.gold} pad="14px 16px">按<span style={{background:COLORS.gold+'40',padding:'1px 8px',fontWeight:900}}>所持股份比例</span>分配</Row>
          <Row icon={<BookOpen size={26} color={COLORS.gold}/>} delay={74} color={COLORS.gold} pad="14px 16px">但<span style={{fontWeight:900}}>章程另有规定</span>的除外</Row>
        </div>
      </div>
      </div>
      <div data-final-knowledge="dividend-right-scene-01-deadline" style={{flex:'1.05 1 0',minHeight:0,padding:'18px 26px',border:'5px solid '+COLORS.ink,background:COLORS.teal+'4D',display:'flex',flexDirection:'column',opacity:enter(88,114),translate:slide(88,114,'0px 26px')}}>
        <Watermark icon={<CalendarClock size={130} color={COLORS.teal} strokeWidth={1.2}/>} color={COLORS.teal}/>
        <div style={{display:'flex',alignItems:'center',gap:12,fontSize:25,fontWeight:900,color:COLORS.teal,marginBottom:10,flexShrink:0}}>
          <CalendarClock size={32} color={COLORS.teal}/>
          <span>分配时间</span>
        </div>
        <div style={{display:'flex',flexDirection:'column',flex:1,justifyContent:'space-evenly',minHeight:0}}>
          <div style={{display:'flex',alignItems:'center',gap:14}}>
            <span style={{display:'inline-flex',alignItems:'center',gap:10,padding:'12px 24px',border:'3px solid '+COLORS.teal,background:COLORS.paper,fontSize:22,fontWeight:900,opacity:enter(96,116)}}><ScrollText size={24} color={COLORS.teal}/>股东会 · 作出分红决议</span>
            <span style={{fontSize:30,fontWeight:900,color:COLORS.gold,opacity:enter(108,124)}}>→</span>
            <span style={{display:'inline-flex',alignItems:'center',gap:8,padding:'12px 22px',background:COLORS.gold,color:COLORS.ink,fontSize:22,fontWeight:900,opacity:enter(114,130)}}><CalendarClock size={22}/>6个月内</span>
            <span style={{fontSize:30,fontWeight:900,color:COLORS.gold,opacity:enter(126,140)}}>→</span>
            <span style={{display:'inline-flex',alignItems:'center',gap:10,padding:'12px 24px',border:'3px solid '+COLORS.ink,background:COLORS.paper,fontSize:22,fontWeight:900,opacity:enter(132,148)}}><Users size={24} color={COLORS.ink}/>董事会 · 进行分配</span>
          </div>
          <Row icon={<CalendarClock size={26} color={COLORS.teal}/>} delay={140} color={COLORS.teal} pad="10px 16px">期限起算：<span style={{background:COLORS.teal+'28',padding:'1px 8px',fontWeight:900}}>股东会决议作出之日</span></Row>
          <Row icon={<Users size={26} color={COLORS.teal}/>} delay={154} color={COLORS.teal} pad="10px 16px">义务主体：<span style={{fontWeight:900}}>董事会</span> —— 决议作出后由董事会完成分配</Row>
        </div>
      </div>
      <div style={{flexShrink:0,display:'flex',alignItems:'center',gap:20,padding:'18px 26px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',opacity:enter(150,176),translate:slide(150,176,'0px 26px')}}>
        <Watermark icon={<Ban size={120} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:8,flexShrink:0,paddingRight:18,borderRight:'4px solid '+COLORS.red}}>
          <Ban size={32} color={COLORS.red}/>
          <span style={{fontSize:24,fontWeight:900,color:COLORS.red}}>禁止分配</span>
        </div>
        <div style={{display:'grid',gap:10,flex:1}}>
          <Row icon={<Coins size={26} color={COLORS.red}/>} delay={166} color={COLORS.red} pad="11px 16px"><span style={{fontWeight:900}}>公司持有的本公司股份</span>，<span style={{fontWeight:900,color:COLORS.red}}>不得</span>分配利润</Row>
          <Row icon={<FileX2 size={26} color={COLORS.red}/>} delay={180} color={COLORS.red} pad="11px 16px">股东会决议分配时，须将该部分股份<span style={{fontWeight:900}}>剔除</span>后再按比例分配</Row>
        </div>
      </div>
    </div>
  </Shell>;
};

export const DividendRight02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const flowProgress=interpolate(frame,[110,280],[0,1],CLAMP);
  const Step=({title,sub,delay,color,icon}:{readonly title:string;readonly sub:ReactNode;readonly delay:number;readonly color:string;readonly icon:ReactNode})=>(
    <div style={{display:'flex',alignItems:'center',gap:14,padding:'16px 22px',border:'4px solid '+COLORS.ink,background:COLORS.teal+'3D',opacity:enter(delay,delay+26)}}>
      <span style={{flexShrink:0}}>{icon}</span>
      <div>
        <div style={{fontSize:26,fontWeight:900,color:COLORS.ink,marginBottom:4}}>{title}</div>
        <div style={{fontSize:21,fontWeight:700,color:'#5A564C',lineHeight:1.4}}>{sub}</div>
      </div>
    </div>
  );
  return <Shell code="04.2" title="利润瀑布与公积金">
    <div data-layout="profit-waterfall-2" data-visual-anchor="flow-path" data-visual-grammar="waterfall-steps,reserve-numbers" data-text-treatments="soft-highlight,stamp,label-block" data-focal-rule="dividend-right-scene-02-rule" data-focal-channels="connector,motion,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="dividend-right-knowledge-2" style={{position:'absolute',left:0,top:0,display:'flex',alignItems:'center',gap:14,opacity:enter(10,32)}}>
        <TrendingDown size={42} color={COLORS.teal}/>
        <div style={{fontSize:28,fontWeight:900}}>税后利润 → 公积金 → 分红</div>
      </div>
      <div style={{position:'absolute',left:0,top:54,width:840,display:'grid',gap:16}}>
        <div data-final-knowledge="dividend-right-scene-02-step-0">
          <Step title="① 提取法定公积金 10%" sub={<>税后利润的<span style={{fontWeight:900}}>10%</span>（法定比例）</>} delay={24} color={COLORS.teal} icon={<Percent size={34} color={COLORS.teal}/>}/>
        </div>
        <div data-final-knowledge="dividend-right-scene-02-step-1">
          <Step title="② 提取任意公积金" sub={<>防止股东过度分红、提高公司抗风险能力</>} delay={44} color={COLORS.teal} icon={<PiggyBank size={34} color={COLORS.teal}/>}/>
        </div>
        <div data-final-knowledge="dividend-right-scene-02-step-2">
          <Step title="③ 公积金用途 → 股东分红" sub={<span style={{display:'inline-flex',gap:8,flexWrap:'wrap',marginTop:6}}><span style={{display:'inline-flex',alignItems:'center',gap:6,padding:'3px 12px',border:'3px solid '+COLORS.teal,fontWeight:900,color:COLORS.teal}}><RefreshCw size={20}/>弥补亏损</span><span style={{display:'inline-flex',alignItems:'center',gap:6,padding:'3px 12px',border:'3px solid '+COLORS.teal,fontWeight:900,color:COLORS.teal}}><Factory size={20}/>扩大生产经营</span><span style={{display:'inline-flex',alignItems:'center',gap:6,padding:'3px 12px',border:'3px solid '+COLORS.teal,fontWeight:900,color:COLORS.teal}}><Layers size={20}/>转增注册资本</span></span>} delay={64} color={COLORS.teal} icon={<Coins size={34} color={COLORS.teal}/>}/>
        </div>
      </div>
      <div style={{position:'absolute',left:396,top:220,width:8,height:interpolate(flowProgress,[0,1],[0,352],CLAMP),background:COLORS.teal,opacity:enter(110,132)}}/>
      <div data-stateful-source="dividend-right-profit-flow" style={{position:'absolute',left:372,top:interpolate(flowProgress,[0,1],[208,548],CLAMP),width:64,height:26,borderRadius:13,background:COLORS.gold,boxShadow:'0 0 0 3px '+COLORS.paper,opacity:flowProgress>0.94?0:1,zIndex:4}}/>
      <div data-final-knowledge="dividend-right-scene-02-numbers" style={{position:'absolute',right:0,top:54,width:884,padding:'22px 28px',border:'5px solid '+COLORS.ink,background:COLORS.gold+'42',opacity:enter(78,104)}}>
        <Watermark icon={<Percent size={170} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
        <div style={{display:'flex',alignItems:'center',gap:12,fontSize:27,fontWeight:900,marginBottom:14}}><Percent size={32} color={COLORS.gold}/>三个数字</div>
        <div style={{display:'grid',gap:10}}>
          <Row icon={<Percent size={26} color={COLORS.gold}/>} delay={92} color={COLORS.gold}><span style={{background:COLORS.teal+'28',padding:'1px 10px',fontWeight:900}}>10%</span> 提取法定公积金的比例</Row>
          <Row icon={<PiggyBank size={26} color={COLORS.gold}/>} delay={106} color={COLORS.gold}><span style={{background:COLORS.teal+'28',padding:'1px 10px',fontWeight:900}}>50%</span> 累计达注册资本50%以上可<span style={{fontWeight:900}}>不再提取</span>（上限）</Row>
          <Row icon={<Layers size={26} color={COLORS.gold}/>} delay={120} color={COLORS.gold}><span style={{background:COLORS.red+'20',padding:'1px 10px',fontWeight:900}}>25%</span> 转增注册资本时留存须≥转增前注册资本的25%（底线）</Row>
        </div>
        <div data-stateful-terminal="dividend-right-profit-flow" style={{display:'inline-flex',alignItems:'center',gap:10,marginTop:16,padding:'8px 18px',border:'3px solid '+COLORS.ink,background:COLORS.teal,color:COLORS.paper,fontSize:21,fontWeight:900,opacity:enter(140,164)}}><Coins size={22}/>利润走完瀑布 → 股东分红</div>
      </div>
      <div style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:14,border:'4px solid '+COLORS.gold,background:COLORS.paper,padding:'13px 22px',opacity:enter(126,152)}}>
        <PiggyBank size={36} color={COLORS.gold}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.4}}><span style={{fontWeight:900,color:COLORS.teal}}>资本公积金系资本投入</span>：主要包括未计入注册资本的无面额股股款及股本溢价；<span style={{fontWeight:900}}>补亏顺序</span>：先任意+法定，仍不能弥补的，再使用资本公积金</div>
      </div>
    </div>
  </Shell>;
};

export const DividendRight03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="04.2" title="分红诉讼与违法分配">
    <div data-layout="resolution-gate-3" data-visual-anchor="boundary" data-visual-grammar="resolution-threshold,abuse-exception" data-text-treatments="external-negation,stamp,soft-highlight" data-focal-rule="dividend-right-scene-03-rule" data-focal-channels="enclosure,contrast,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="dividend-right-knowledge-3" style={{position:'absolute',left:0,right:0,top:0,display:'flex',alignItems:'center',justifyContent:'center',gap:12,fontSize:26,fontWeight:900,letterSpacing:4,color:'#6E6757',opacity:enter(10,32)}}>
        <Scale size={30} color={COLORS.red}/>
        <span>诉讼以股东会决议为门槛</span>
      </div>
      <div data-final-knowledge="dividend-right-scene-03-rule" style={{position:'absolute',left:0,top:56,width:900,padding:'24px 26px',border:'5px solid '+COLORS.ink,background:COLORS.teal+'42',opacity:enter(24,50),translate:slide(24,50,'-40px 0px')}}>
        <Watermark icon={<Gavel size={150} color={COLORS.teal} strokeWidth={1.2}/>} color={COLORS.teal}/>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:14}}>
          <Gavel size={38} color={COLORS.teal}/>
          <div style={{fontSize:27,fontWeight:900}}>原则：先有决议</div>
        </div>
        <div style={{display:'grid',gap:12}}>
          <Row icon={<ScrollText size={26} color={COLORS.teal}/>} delay={38} color={COLORS.teal} pad="15px 16px">未提交载明<span style={{background:COLORS.teal+'28',padding:'1px 8px',fontWeight:900}}>具体分配方案的股东会决议</span>的</Row>
          <Row icon={<FileX2 size={26} color={COLORS.red}/>} delay={54} color={COLORS.red} pad="15px 16px">法院应<span style={{fontWeight:900,color:COLORS.red}}>驳回</span>其诉讼请求</Row>
        </div>
      </div>
      <div data-final-knowledge="dividend-right-scene-03-exception" style={{position:'absolute',right:0,top:56,width:884,padding:'24px 26px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'42',opacity:enter(52,78),translate:slide(52,78,'40px 0px')}}>
        <Watermark icon={<AlertTriangle size={150} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:14}}>
          <AlertTriangle size={38} color={COLORS.gold}/>
          <div style={{fontSize:27,fontWeight:900}}>例外：滥用股东权利</div>
        </div>
        <div style={{display:'grid',gap:12}}>
          <Row icon={<Users size={26} color={COLORS.gold}/>} delay={66} color={COLORS.gold} pad="15px 16px">违反法律滥用股东权利导致公司不分配利润、给其他股东造成损失的<span style={{fontWeight:900,color:COLORS.gold}}>除外</span></Row>
          <Row icon={<Ban size={26} color={COLORS.red}/>} delay={82} color={COLORS.red} pad="15px 16px"><span style={{fontWeight:900}}>控股股东不能列为共同被告</span>——被告只有公司</Row>
        </div>
      </div>
      <div data-final-knowledge="dividend-right-scene-03-illegal" style={{position:'absolute',left:0,right:0,top:330,padding:'24px 28px',border:'5px solid '+COLORS.red,background:COLORS.red+'42',opacity:enter(84,110),translate:slide(84,110,'0px 30px')}}>
        <Watermark icon={<HandCoins size={150} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:16}}>
          <HandCoins size={38} color={COLORS.red}/>
          <div style={{fontSize:27,fontWeight:900,color:COLORS.red}}>违法分配的后果</div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
          <div style={{display:'flex',alignItems:'center',gap:14,padding:'18px 20px',background:COLORS.paper,borderLeft:'6px solid '+COLORS.red,opacity:enter(100,124)}}>
            <Coins size={30} color={COLORS.red} style={{flexShrink:0}}/>
            <div style={{fontSize:22,fontWeight:800,lineHeight:1.5}}>股东应当<span style={{background:COLORS.red+'20',padding:'1px 8px',fontWeight:900}}>退还</span>其收到的<span style={{fontWeight:900}}>资金</span></div>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:14,padding:'18px 20px',background:COLORS.paper,borderLeft:'6px solid '+COLORS.red,opacity:enter(114,138)}}>
            <Users size={30} color={COLORS.red} style={{flexShrink:0}}/>
            <div style={{fontSize:22,fontWeight:800,lineHeight:1.5}}>给公司造成损失的，股东及<span style={{fontWeight:900}}>负有责任的董监高</span>承担<span style={{fontWeight:900,color:COLORS.red}}>赔偿责任</span></div>
          </div>
        </div>
      </div>
      <div style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',gap:18,border:'4px solid '+COLORS.ink,background:COLORS.paper,padding:'16px 24px',opacity:enter(128,154)}}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:6,flexShrink:0,padding:'0 10px',borderRight:'4px solid '+COLORS.gold}}>
          <ScrollText size={30} color={COLORS.gold}/>
          <span style={{fontSize:22,fontWeight:900,color:COLORS.gold}}>对照</span>
        </div>
        <div style={{display:'grid',gap:10,flex:1}}>
          <div style={{display:'flex',alignItems:'center',gap:14,padding:'9px 14px',background:COLORS.teal+'1A',borderLeft:'6px solid '+COLORS.teal,fontSize:22,fontWeight:800,opacity:enter(140,162)}}>
            <span style={{display:'inline-flex',padding:'3px 14px',background:COLORS.teal,color:COLORS.paper,fontSize:20,fontWeight:900,flexShrink:0}}>有效</span>
            <span>全体股东<span style={{fontWeight:900,color:COLORS.teal}}>自愿约定</span>某股东不参加分红 —— 意思自治优先</span>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:14,padding:'9px 14px',background:COLORS.red+'1A',borderLeft:'6px solid '+COLORS.red,fontSize:22,fontWeight:800,opacity:enter(152,174)}}>
            <span style={{display:'inline-flex',padding:'3px 14px',background:COLORS.red,color:COLORS.paper,fontSize:20,fontWeight:900,flexShrink:0}}>无效</span>
            <span><span style={{fontWeight:900,color:COLORS.red}}>章程剥夺分红权</span>的条款 → <span style={{fontWeight:900,color:COLORS.red}}>无效</span></span>
          </div>
        </div>
      </div>
    </div>
  </Shell>;
};

export const DividendRight=()=> <AbsoluteFill>
  <TimelineSequence name="01-dividend-right-scene-01" start={SCENES['dividend-right-scene-01'].start} duration={SCENES['dividend-right-scene-01'].duration}><DividendRight01Scene/></TimelineSequence>
  <TimelineSequence name="02-dividend-right-scene-02" start={SCENES['dividend-right-scene-02'].start} duration={SCENES['dividend-right-scene-02'].duration}><DividendRight02Scene/></TimelineSequence>
  <TimelineSequence name="03-dividend-right-scene-03" start={SCENES['dividend-right-scene-03'].start} duration={SCENES['dividend-right-scene-03'].duration}><DividendRight03Scene/></TimelineSequence>
</AbsoluteFill>;
