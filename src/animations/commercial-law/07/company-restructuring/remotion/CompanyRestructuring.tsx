import type {ReactNode} from 'react';
import {TrendingUp, TrendingDown, Merge, Split, BellRing, Landmark, AlertTriangle, Scale, HandCoins, ScrollText, CalendarClock, Users, FileX2, Ban} from 'lucide-react';
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

export const CompanyRestructuring01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="07.3" title="增资 与 减资">
    <div data-layout="capital-change-lanes-1" data-visual-anchor="comparison-axis" data-visual-grammar="increase-lane,simple-reduction" data-text-treatments="label-block,thin-underline,soft-highlight" data-focal-rule="company-restructuring-scene-01-rule" data-focal-channels="contrast,spatial,icon" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:14}}>
      <div data-final-knowledge="company-restructuring-knowledge-1" style={{flexShrink:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#5C6B64',opacity:enter(12,36)}}>股东会决议：<span style={{color:COLORS.orange}}>2/3以上表决权</span></div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="company-restructuring-scene-01-increase" style={{position:'relative',padding:'16px 24px',border:'5px solid '+COLORS.green,background:COLORS.green+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54),translate:slide(28,54,'-26px 0px')}}>
          <Watermark icon={<TrendingUp size={150} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
          <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:10,flexShrink:0}}>
            <TrendingUp size={38} color={COLORS.green}/>
            <div style={{padding:'7px 18px',background:COLORS.ink,color:COLORS.paper,fontSize:26,fontWeight:900}}>增资</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:9,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<TrendingUp size={22} color={COLORS.green}/>} delay={40} color={COLORS.green} pad="8px 12px">原股东优先认购：有限按<span style={{background:COLORS.green+'28',padding:'1px 8px',fontWeight:900}}>实缴出资比例</span>（全体股东另有约定除外）</Row>
            <Row icon={<Users size={22} color={COLORS.green}/>} delay={52} color={COLORS.green} pad="8px 12px">其他股东<span style={{fontWeight:900}}>放弃</span>的部分 → <span style={{fontWeight:900}}>不当然归属</span>主张优先认购的股东</Row>
            <Row icon={<FileX2 size={22} color={COLORS.green}/>} delay={64} color={COLORS.green} pad="8px 12px">股份公司<span style={{fontWeight:900}}>不享有</span>优先认购权（章程或股东会决议赋权除外）</Row>
            <Row icon={<ScrollText size={22} color={COLORS.green}/>} delay={76} color={COLORS.green} pad="8px 12px">程序：修改章程＋<span style={{fontWeight:900}}>变更登记</span> → 登记后增资生效，增资人负出资义务</Row>
          </div>
        </div>
        <div data-final-knowledge="company-restructuring-scene-01-reduce" style={{position:'relative',padding:'16px 24px',border:'5px solid '+COLORS.orange,background:COLORS.orange+'4D',display:'flex',flexDirection:'column',opacity:enter(46,72),translate:slide(46,72,'26px 0px')}}>
          <Watermark icon={<TrendingDown size={150} color={COLORS.orange} strokeWidth={1.2}/>} color={COLORS.orange}/>
          <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:10,flexShrink:0}}>
            <TrendingDown size={38} color={COLORS.orange}/>
            <div style={{padding:'7px 18px',background:COLORS.ink,color:COLORS.paper,fontSize:26,fontWeight:900}}>减资</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:9,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<TrendingDown size={22} color={COLORS.orange}/>} delay={58} color={COLORS.orange} pad="8px 12px"><span style={{fontWeight:900,color:COLORS.orange}}>普通减资</span>：资本过剩或回购股权——退款或减免未缴出资</Row>
            <Row icon={<BellRing size={22} color={COLORS.orange}/>} delay={70} color={COLORS.orange} pad="8px 12px"><span style={{fontWeight:900}}>10日内通知＋30日内公告</span>债权人</Row>
            <Row icon={<HandCoins size={22} color={COLORS.orange}/>} delay={82} color={COLORS.orange} pad="8px 12px">债权人<span style={{fontWeight:900}}>30日</span>（未接到通知的自公告起<span style={{fontWeight:900}}>45日</span>）内可要求<span style={{fontWeight:900,color:COLORS.orange}}>清偿或担保</span></Row>
            <Row icon={<Scale size={22} color={COLORS.orange}/>} delay={94} color={COLORS.orange} pad="8px 12px"><span style={{fontWeight:900}}>等比例减资</span>（有限全体股东另有约定或股份公司章程另有规定除外）</Row>
          </div>
        </div>
      </div>
      <div data-final-knowledge="company-restructuring-scene-01-simple" style={{flexShrink:0,position:'relative',display:'grid',gap:9,border:'5px solid '+COLORS.gold,background:COLORS.gold+'4D',padding:'13px 24px',opacity:enter(88,114)}}>
        <Watermark icon={<AlertTriangle size={110} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
        <Row icon={<AlertTriangle size={24} color={COLORS.gold}/>} delay={100} color={COLORS.gold} pad="7px 13px"><span style={{fontWeight:900,color:'#7A5B12'}}>简易减资（形式减资）</span>：三大公积金补亏后仍有亏损 → 可减资补亏——<span style={{fontWeight:900}}>只能补亏</span>，不得向股东分配、<span style={{fontWeight:900}}>不得免除出资义务</span></Row>
        <Row icon={<BellRing size={24} color={COLORS.gold}/>} delay={114} color={COLORS.gold} pad="7px 13px">仅需<span style={{fontWeight:900}}>公告</span>，无需通知债权人；减资后法定＋任意公积金<span style={{fontWeight:900}}>累计额</span>达注册资本<span style={{background:COLORS.gold+'40',padding:'1px 8px',fontWeight:900}}>50%</span>前<span style={{fontWeight:900,color:COLORS.orange}}>不得分红</span></Row>
      </div>
    </div>
  </Shell>;
};

export const CompanyRestructuring02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="07.3" title="合并 与 分立">
    <div data-layout="merge-split-duel-2" data-visual-anchor="role-pair" data-visual-grammar="merge-creditor-remedy,split-joint-debt" data-text-treatments="label-block,stamp,external-negation" data-focal-rule="company-restructuring-scene-02-rule" data-focal-channels="contrast,connector,annotation" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:14}}>
      <div data-final-knowledge="company-restructuring-knowledge-2" style={{flexShrink:0,textAlign:'center',fontSize:25,fontWeight:900,letterSpacing:3,color:'#5C6B64',opacity:enter(12,36)}}>合并：吸收 A+B=A / 新设 A+B=C —— 分立：存续 A=A+B / 新设 A=B+C</div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="company-restructuring-scene-02-merge" style={{position:'relative',padding:'16px 24px',border:'5px solid '+COLORS.green,background:COLORS.green+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54),translate:slide(28,54,'-24px 0px')}}>
          <Watermark icon={<Merge size={150} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
          <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:10,flexShrink:0}}>
            <Merge size={36} color={COLORS.green}/>
            <div style={{padding:'7px 18px',background:COLORS.green,color:COLORS.paper,fontSize:26,fontWeight:900}}>合并</div>
            <div style={{fontSize:21,fontWeight:900,color:COLORS.green}}>债权人救济：同减资</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:9,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<ScrollText size={22} color={COLORS.green}/>} delay={40} color={COLORS.green} pad="8px 12px">签订<span style={{fontWeight:900}}>合并协议</span>；编制资产负债表和财产清单</Row>
            <Row icon={<BellRing size={22} color={COLORS.green}/>} delay={52} color={COLORS.green} pad="8px 12px"><span style={{fontWeight:900}}>10日内通知＋30日内公告</span>；债权人30日/45日内可要求<span style={{fontWeight:900,color:COLORS.green}}>清偿或担保</span></Row>
            <Row icon={<Landmark size={22} color={COLORS.green}/>} delay={64} color={COLORS.green} pad="8px 12px">债务由合并后<span style={{fontWeight:900}}>存续或新设的公司承继</span></Row>
          </div>
        </div>
        <div data-final-knowledge="company-restructuring-scene-02-split" style={{position:'relative',padding:'16px 24px',border:'5px solid '+COLORS.orange,background:COLORS.orange+'4D',display:'flex',flexDirection:'column',opacity:enter(46,72),translate:slide(46,72,'24px 0px')}}>
          <Watermark icon={<Split size={150} color={COLORS.orange} strokeWidth={1.2}/>} color={COLORS.orange}/>
          <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:10,flexShrink:0}}>
            <Split size={36} color={COLORS.orange}/>
            <div style={{padding:'7px 18px',background:COLORS.orange,color:COLORS.paper,fontSize:26,fontWeight:900}}>分立</div>
            <div style={{fontSize:21,fontWeight:900,color:COLORS.orange}}>债权人救济：同增资——无</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:9,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Landmark size={22} color={COLORS.orange}/>} delay={58} color={COLORS.orange} pad="8px 12px">分立前债务由分立后的公司承担<span style={{background:COLORS.orange+'24',padding:'1px 8px',fontWeight:900}}>连带责任</span></Row>
            <Row icon={<ScrollText size={22} color={COLORS.orange}/>} delay={70} color={COLORS.orange} pad="8px 12px">例外：分立前与债权人就还债达成<span style={{fontWeight:900}}>书面协议</span></Row>
            <Row icon={<Ban size={22} color={COLORS.orange}/>} delay={82} color={COLORS.orange} pad="8px 12px">债权人<span style={{fontWeight:900,color:COLORS.orange}}>不能</span>要求清偿或担保（也<span style={{fontWeight:900}}>无异议权</span>）</Row>
          </div>
        </div>
      </div>
      <div data-final-knowledge="company-restructuring-scene-02-simple-merge" style={{flexShrink:0,position:'relative',display:'flex',alignItems:'center',gap:18,border:'4px solid '+COLORS.ink,background:COLORS.gold+'4D',padding:'13px 24px',opacity:enter(88,114)}}>
        <Watermark icon={<Landmark size={110} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
        <div style={{display:'grid',gap:8,flex:1}}>
          <Row icon={<Merge size={22} color={COLORS.gold}/>} delay={100} color={COLORS.gold} pad="7px 12px"><span style={{fontWeight:900,color:'#7A5B12'}}>母子合并</span>（持股<span style={{fontWeight:900}}>90%以上</span>）：子公司只需<span style={{fontWeight:900}}>董事会决议</span>＋通知其他股东（可请求回购）；母公司仍需<span style={{fontWeight:900}}>股东会决议</span></Row>
          <Row icon={<Scale size={22} color={COLORS.gold}/>} delay={112} color={COLORS.gold} pad="7px 12px"><span style={{fontWeight:900,color:'#7A5B12'}}>小规模合并</span>（价款≤净资产<span style={{fontWeight:900}}>10%</span>）：合并公司只需董事会决议（章程除外）；被合并公司仍需股东会决议</Row>
        </div>
        <div style={{marginLeft:'auto',flexShrink:0,padding:'8px 18px',border:'3px solid '+COLORS.ink,background:COLORS.gold,color:COLORS.paper,fontSize:21,fontWeight:900,transform:'rotate(-2deg)'}}>注销登记·无需清算</div>
      </div>
    </div>
  </Shell>;
};

export const CompanyRestructuring03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const orderProgress=interpolate(frame,[110,230],[0,1],CLAMP);
  return <Shell code="07.3" title="减资程序与违法减资">
    <div data-layout="reduction-pipeline-3" data-visual-anchor="flow-path" data-visual-grammar="reduction-five-steps,illegal-reduction" data-text-treatments="thin-underline,stamp,soft-highlight" data-focal-rule="company-restructuring-scene-03-rule" data-focal-channels="connector,motion,enclosure" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:14}}>
      <div data-final-knowledge="company-restructuring-knowledge-3" style={{flexShrink:0,fontSize:26,fontWeight:900,letterSpacing:4,color:'#5C6B64',opacity:enter(12,36)}}>普通减资五步</div>
      <div style={{flex:'1 1 0',minHeight:0,display:'flex',gap:20}}>
        <div style={{flex:'1.3 1 0',minWidth:0,display:'flex',flexDirection:'column',gap:12,paddingLeft:60,position:'relative'}}>
          <div data-final-knowledge="company-restructuring-scene-03-step-0" style={{position:'relative',flex:'1 1 0',minHeight:0,display:'flex',alignItems:'center',gap:16,padding:'10px 20px',border:'4px solid '+COLORS.ink,background:COLORS.green+'4D',opacity:enter(28,54)}}>
            <div style={{width:56,height:56,flexShrink:0,border:'4px solid '+COLORS.ink,background:COLORS.green,color:COLORS.paper,display:'grid',placeItems:'center',fontSize:26,fontWeight:900}}>1</div>
            <div style={{display:'flex',flexDirection:'column',gap:6,flex:1,justifyContent:'center'}}>
              <div style={{fontSize:23,fontWeight:900}}>股东会决议</div>
              <Row icon={<Users size={22} color={COLORS.green}/>} delay={42} color={COLORS.green} pad="6px 12px"><span style={{fontWeight:900,color:COLORS.orange}}>2/3以上表决权</span>通过——同增资</Row>
            </div>
          </div>
          <div data-final-knowledge="company-restructuring-scene-03-step-1" style={{position:'relative',flex:'1 1 0',minHeight:0,display:'flex',alignItems:'center',gap:16,padding:'10px 20px',border:'4px solid '+COLORS.ink,background:COLORS.green+'4D',opacity:enter(44,70)}}>
            <div style={{width:56,height:56,flexShrink:0,border:'4px solid '+COLORS.ink,background:COLORS.green,color:COLORS.paper,display:'grid',placeItems:'center',fontSize:26,fontWeight:900}}>2</div>
            <div style={{display:'flex',flexDirection:'column',gap:6,flex:1,justifyContent:'center'}}>
              <div style={{fontSize:23,fontWeight:900}}>编制资产清单</div>
              <Row icon={<ScrollText size={22} color={COLORS.green}/>} delay={58} color={COLORS.green} pad="6px 12px">编制<span style={{fontWeight:900}}>资产负债表和财产清单</span></Row>
            </div>
          </div>
          <div data-final-knowledge="company-restructuring-scene-03-step-2" style={{position:'relative',flex:'1.15 1 0',minHeight:0,display:'flex',alignItems:'center',gap:16,padding:'10px 20px',border:'4px solid '+COLORS.ink,background:COLORS.orange+'4D',opacity:enter(60,86)}}>
            <div style={{width:56,height:56,flexShrink:0,border:'4px solid '+COLORS.ink,background:COLORS.orange,color:COLORS.paper,display:'grid',placeItems:'center',fontSize:26,fontWeight:900}}>3</div>
            <div style={{display:'flex',flexDirection:'column',gap:6,flex:1,justifyContent:'center'}}>
              <div style={{fontSize:23,fontWeight:900}}>通知公告债权人</div>
              <Row icon={<BellRing size={22} color={COLORS.orange}/>} delay={74} color={COLORS.orange} pad="6px 12px"><span style={{fontWeight:900}}>10日内通知＋30日内公告</span>；债权人30日/45日内可要求清偿或担保</Row>
            </div>
          </div>
          <div data-final-knowledge="company-restructuring-scene-03-illegal" style={{position:'relative',flex:'1 1 0',minHeight:0,display:'flex',alignItems:'center',gap:16,padding:'10px 20px',border:'4px solid '+COLORS.ink,background:COLORS.gold+'4D',opacity:enter(76,102)}}>
            <div style={{width:56,height:56,flexShrink:0,border:'4px solid '+COLORS.ink,background:COLORS.gold,color:COLORS.paper,display:'grid',placeItems:'center',fontSize:22,fontWeight:900}}>4-5</div>
            <div style={{fontSize:23,fontWeight:900}}>等比例减资 → 修改章程＋变更登记——<span style={{color:'#7A5B12'}}>登记后减资生效</span></div>
          </div>
        </div>
        <div style={{flex:'1 1 0',minWidth:0,position:'relative',padding:'18px 24px',border:'5px dashed '+COLORS.orange,background:COLORS.orange+'4D',display:'flex',flexDirection:'column',opacity:enter(88,116)}}>
          <Watermark icon={<AlertTriangle size={140} color={COLORS.orange} strokeWidth={1.2}/>} color={COLORS.orange}/>
          <div style={{fontSize:25,fontWeight:900,marginBottom:10,color:COLORS.orange,flexShrink:0}}>违法减资的后果</div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<HandCoins size={22} color={COLORS.orange}/>} delay={102} color={COLORS.orange} pad="8px 12px">股东<span style={{fontWeight:900}}>退还</span>其收到的资金；减免出资的<span style={{fontWeight:900}}>恢复原状</span></Row>
            <Row icon={<Scale size={22} color={COLORS.orange}/>} delay={116} color={COLORS.orange} pad="8px 12px">给公司造成损失 → 股东及<span style={{fontWeight:900}}>负有责任的董监高</span>承担<span style={{fontWeight:900,color:COLORS.orange}}>赔偿责任</span></Row>
          </div>
          <div data-stateful-terminal="company-restructuring-reduction-order" style={{alignSelf:'flex-end',marginTop:8,padding:'8px 16px',border:'3px solid '+COLORS.ink,background:COLORS.green,color:COLORS.paper,fontSize:20,fontWeight:900,opacity:enter(150,172)}}>减资流程走完</div>
        </div>
      </div>
      <div data-stateful-source="company-restructuring-reduction-order" style={{position:'absolute',left:20,top:interpolate(orderProgress,[0,1],[150,660],CLAMP),width:36,height:36,borderRadius:'50%',background:COLORS.orange,border:'5px solid '+COLORS.ink,opacity:orderProgress>0.9?0:1,zIndex:4}}/>
    </div>
  </Shell>;
};

export const CompanyRestructuring=()=> <AbsoluteFill>
  <TimelineSequence name="01-company-restructuring-scene-01" start={SCENES['company-restructuring-scene-01'].start} duration={SCENES['company-restructuring-scene-01'].duration}><CompanyRestructuring01Scene/></TimelineSequence>
  <TimelineSequence name="02-company-restructuring-scene-02" start={SCENES['company-restructuring-scene-02'].start} duration={SCENES['company-restructuring-scene-02'].duration}><CompanyRestructuring02Scene/></TimelineSequence>
  <TimelineSequence name="03-company-restructuring-scene-03" start={SCENES['company-restructuring-scene-03'].start} duration={SCENES['company-restructuring-scene-03'].duration}><CompanyRestructuring03Scene/></TimelineSequence>
</AbsoluteFill>;
