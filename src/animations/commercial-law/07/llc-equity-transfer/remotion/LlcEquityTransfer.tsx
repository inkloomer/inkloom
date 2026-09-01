import type {ReactNode} from 'react';
import {ArrowRightLeft, Users, BellRing, Undo2, ScrollText, Gavel, Handshake, Crown, Scale, FileX2, HandCoins, CalendarClock} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#F4EFE3', ink:'#25242B', red:'#B23A30', green:'#2E6D4F', gold:'#C08A2D', paper:'#FBF7EC'} as const;
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

export const LlcEquityTransfer01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="07.1" title="对内 与 对外转让">
    <div data-layout="transfer-inner-outer-1" data-visual-anchor="comparison-axis" data-visual-grammar="inner-free-stall,outer-notice-stall" data-text-treatments="label-block,thin-underline,soft-highlight" data-focal-rule="llc-equity-transfer-scene-01-rule" data-focal-channels="contrast,spatial,icon" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:16}}>
      <div data-final-knowledge="llc-equity-transfer-knowledge-1" style={{flexShrink:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#6E6757',opacity:enter(12,36)}}><span style={{color:COLORS.green}}>章程规定</span> 优先于 自由转让</div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="llc-equity-transfer-scene-01-inner" style={{position:'relative',padding:'18px 24px',border:'5px solid '+COLORS.green,background:COLORS.green+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54),translate:slide(28,54,'-26px 0px')}}>
          <Watermark icon={<ArrowRightLeft size={150} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
          <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:12,flexShrink:0}}>
            <ArrowRightLeft size={44} color={COLORS.green}/>
            <div style={{padding:'7px 18px',background:COLORS.ink,color:COLORS.paper,fontSize:27,fontWeight:900}}>对内转让</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:12,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<ScrollText size={24} color={COLORS.green}/>} delay={40} color={COLORS.green} pad="12px 14px"><span style={{fontWeight:900,color:COLORS.green}}>章程规定优先</span>，其余按规则处理</Row>
            <Row icon={<Scale size={24} color={COLORS.green}/>} delay={54} color={COLORS.green} pad="12px 14px"><span style={{background:COLORS.green+'28',padding:'1px 8px',fontWeight:900}}>自由转让</span>——无比例、程序限制</Row>
            <Row icon={<FileX2 size={24} color={COLORS.green}/>} delay={68} color={COLORS.green} pad="12px 14px">其他股东<span style={{fontWeight:900}}>无优先购买权</span></Row>
          </div>
        </div>
        <div data-final-knowledge="llc-equity-transfer-scene-01-outer" style={{position:'relative',padding:'18px 24px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'4D',display:'flex',flexDirection:'column',opacity:enter(46,72),translate:slide(46,72,'26px 0px')}}>
          <Watermark icon={<BellRing size={150} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
          <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:12,flexShrink:0}}>
            <BellRing size={44} color={COLORS.gold}/>
            <div style={{padding:'7px 18px',background:COLORS.ink,color:COLORS.paper,fontSize:27,fontWeight:900}}>对外转让</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:12,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<ScrollText size={24} color={COLORS.gold}/>} delay={58} color={COLORS.gold} pad="12px 14px">章程未规定的：<span style={{fontWeight:900}}>书面通知</span>其他股东<span style={{fontWeight:900,color:COLORS.gold}}>转让条件</span></Row>
            <Row icon={<CalendarClock size={24} color={COLORS.gold}/>} delay={72} color={COLORS.gold} pad="12px 14px"><span style={{background:COLORS.gold+'40',padding:'1px 8px',fontWeight:900}}>30日内</span>其他股东可主张<span style={{fontWeight:900}}>优先购买权</span></Row>
            <Row icon={<Undo2 size={24} color={COLORS.gold}/>} delay={86} color={COLORS.gold} pad="12px 14px">转让前甲<span style={{fontWeight:900}}>可以反悔</span>（反悔权）</Row>
          </div>
        </div>
      </div>
      <div data-final-knowledge="llc-equity-transfer-scene-01-charter" style={{flexShrink:0,position:'relative',display:'grid',gap:10,border:'4px solid '+COLORS.red,background:COLORS.red+'4D',padding:'14px 24px',opacity:enter(88,114)}}>
        <Watermark icon={<ScrollText size={110} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
        <Row icon={<ScrollText size={24} color={COLORS.red}/>} delay={100} color={COLORS.red} pad="8px 14px">章程<span style={{fontWeight:900}}>可限制但不可禁止</span>股权转让——规定须经全体董事一致同意＝变相禁止，<span style={{fontWeight:900,color:COLORS.red}}>无效</span></Row>
        <Row icon={<Scale size={24} color={COLORS.red}/>} delay={114} color={COLORS.red} pad="8px 14px">修改章程限制转让：除 <span style={{fontWeight:900}}>2/3以上表决权</span> 通过外，还须<span style={{background:COLORS.red+'20',padding:'1px 8px',fontWeight:900}}>被限制者同意</span>，否则决议无效</Row>
      </div>
    </div>
  </Shell>;
};

export const LlcEquityTransfer02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="07.1" title="侵害优先购买权之后">
    <div data-layout="preemption-branches-2" data-visual-anchor="flow-path" data-visual-grammar="equal-terms-test,buyer-renounce-branch" data-text-treatments="soft-highlight,stamp,external-negation" data-focal-rule="llc-equity-transfer-scene-02-rule" data-focal-channels="connector,contrast,motion" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:14}}>
      <div data-final-knowledge="llc-equity-transfer-knowledge-2" style={{flexShrink:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <Users size={40} color={COLORS.red}/>
        <div style={{fontSize:26,fontWeight:900}}><span style={{color:COLORS.red}}>未通知 / 谎报条件 / 非同等条件</span>——乙的优先购买权被侵害</div>
      </div>
      <div style={{flex:'1 1 0',minHeight:0,display:'flex',flexDirection:'column',gap:14}}>
        <div style={{flex:'0.9 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:20}}>
          <div data-final-knowledge="llc-equity-transfer-scene-02-fork" style={{position:'relative',padding:'14px 22px',border:'4px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54)}}>
            <Watermark icon={<Scale size={120} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
            <div style={{fontSize:24,fontWeight:900,marginBottom:6,flexShrink:0}}>同等条件</div>
            <div style={{display:'flex',flexDirection:'column',gap:8,flex:1,justifyContent:'space-evenly'}}>
              <Row icon={<Scale size={24} color={COLORS.red}/>} delay={40} color={COLORS.red} pad="8px 13px">综合考虑转让<span style={{fontWeight:900}}>数量、价格、支付方式、付款期限</span>等</Row>
            </div>
          </div>
          <div data-final-knowledge="llc-equity-transfer-scene-02-proportion" style={{position:'relative',padding:'14px 22px',border:'4px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(44,70)}}>
            <Watermark icon={<Users size={120} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
            <div style={{fontSize:24,fontWeight:900,marginBottom:6,flexShrink:0}}>两人以上均主张</div>
            <div style={{display:'flex',flexDirection:'column',gap:8,flex:1,justifyContent:'space-evenly'}}>
              <Row icon={<Users size={24} color={COLORS.red}/>} delay={56} color={COLORS.red} pad="8px 13px">先<span style={{fontWeight:900}}>协商</span>，协商不成 → 按<span style={{background:COLORS.green+'28',padding:'1px 8px',fontWeight:900}}>转让时各自的出资比例</span>购买</Row>
            </div>
          </div>
        </div>
        <div style={{flex:'1.1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:20}}>
          <div data-final-knowledge="llc-equity-transfer-scene-02-regret" style={{position:'relative',padding:'14px 22px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'4D',display:'flex',flexDirection:'column',opacity:enter(60,86)}}>
            <Watermark icon={<Undo2 size={130} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
            <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:6,flexShrink:0}}>
              <Undo2 size={34} color={COLORS.gold}/>
              <div style={{fontSize:24,fontWeight:900}}>甲反悔</div>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:8,flex:1,justifyContent:'space-evenly'}}>
              <Row icon={<HandCoins size={24} color={COLORS.gold}/>} delay={72} color={COLORS.gold} pad="8px 13px">乙买不到股权，但可请求甲<span style={{fontWeight:900}}>赔偿</span></Row>
              <Row icon={<CalendarClock size={24} color={COLORS.gold}/>} delay={86} color={COLORS.gold} pad="8px 13px">乙可重新主张优先购买权：知道同等条件起<span style={{fontWeight:900}}>30日内</span>＋变更登记起<span style={{fontWeight:900}}>1年内</span>（期限双算）</Row>
            </div>
          </div>
          <div data-final-knowledge="llc-equity-transfer-scene-02-renounce" style={{position:'relative',padding:'14px 22px',border:'5px dashed '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(76,102)}}>
            <Watermark icon={<Handshake size={130} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
            <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:6,flexShrink:0}}>
              <Handshake size={34} color={COLORS.red}/>
              <div style={{fontSize:24,fontWeight:900}}>乙买 / 乙不买</div>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:8,flex:1,justifyContent:'space-evenly'}}>
              <Row icon={<Handshake size={24} color={COLORS.red}/>} delay={90} color={COLORS.red} pad="8px 13px">乙买：丙需把股权转让给乙，丙可请求甲承担<span style={{fontWeight:900}}>违约责任</span></Row>
              <Row icon={<FileX2 size={24} color={COLORS.red}/>} delay={104} color={COLORS.red} pad="8px 13px">乙不买：仅主张无效的法院<span style={{fontWeight:900}}>不保护</span>——丙可取得股权（<span style={{fontWeight:900,color:COLORS.red}}>不买不保护</span>）</Row>
              <Row icon={<HandCoins size={24} color={COLORS.red}/>} delay={118} color={COLORS.red} pad="8px 13px">非因自身原因无法行使 → 可请求甲<span style={{fontWeight:900}}>赔偿</span></Row>
            </div>
          </div>
        </div>
      </div>
      <div style={{flexShrink:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.gold,background:COLORS.gold+'4D',padding:'13px 22px',opacity:enter(112,138)}}>
        <Gavel size={34} color={COLORS.gold}/>
        <div style={{fontSize:21,fontWeight:800,lineHeight:1.45}}>股权转让后：股东应<span style={{fontWeight:900}}>书面通知公司</span>请求变更股东名册、办理工商变更登记；公司拒绝或合理期间未答复 → 转让人、受让人可<span style={{fontWeight:900}}>起诉要求办理</span>；受让人自<span style={{fontWeight:900}}>记载于股东名册</span>时起可行使股东权利</div>
      </div>
    </div>
  </Shell>;
};

export const LlcEquityTransfer03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="07.1" title="特殊转让与异议回购">
    <div data-layout="transfer-specials-3" data-visual-anchor="role-pair" data-visual-grammar="special-transfer-cards,dissent-repurchase-gate" data-text-treatments="label-block,stamp,thin-underline" data-focal-rule="llc-equity-transfer-scene-03-rule" data-focal-channels="contrast,annotation,locator" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:14}}>
      <div data-final-knowledge="llc-equity-transfer-knowledge-3" style={{flexShrink:0,fontSize:26,fontWeight:900,letterSpacing:4,color:'#6E6757',opacity:enter(12,36)}}>三种特殊情形</div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="llc-equity-transfer-scene-03-special-0" style={{position:'relative',padding:'16px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54),translate:slide(28,54,'0px 22px')}}>
          <Watermark icon={<Gavel size={130} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:8,flexShrink:0}}>
            <Gavel size={32} color={COLORS.red}/>
            <div style={{fontSize:24,fontWeight:900}}>股权强制执行</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:8,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Gavel size={22} color={COLORS.red}/>} delay={40} color={COLORS.red} pad="7px 12px">法院<span style={{fontWeight:900}}>通知公司＋全体股东</span></Row>
            <Row icon={<Users size={22} color={COLORS.red}/>} delay={52} color={COLORS.red} pad="7px 12px">其他股东有<span style={{fontWeight:900}}>优先购买权</span></Row>
            <Row icon={<CalendarClock size={22} color={COLORS.red}/>} delay={64} color={COLORS.red} pad="7px 12px">通知满<span style={{background:COLORS.red+'20',padding:'1px 8px',fontWeight:900}}>20日</span>不行使 → 视为放弃</Row>
          </div>
        </div>
        <div data-final-knowledge="llc-equity-transfer-scene-03-special-1" style={{position:'relative',padding:'16px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.green,background:COLORS.green+'4D',display:'flex',flexDirection:'column',opacity:enter(44,70),translate:slide(44,70,'0px 22px')}}>
          <Watermark icon={<Crown size={130} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:8,flexShrink:0}}>
            <Crown size={32} color={COLORS.green}/>
            <div style={{fontSize:24,fontWeight:900}}>股东资格继承</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:8,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Crown size={22} color={COLORS.green}/>} delay={56} color={COLORS.green} pad="7px 12px">合法继承人<span style={{fontWeight:900}}>可继承股东资格</span>，章程另有规定除外</Row>
            <Row icon={<FileX2 size={22} color={COLORS.green}/>} delay={68} color={COLORS.green} pad="7px 12px">其他股东<span style={{fontWeight:900}}>无优先购买权</span>（章程或全体股东另有约定的除外）</Row>
          </div>
        </div>
        <div data-final-knowledge="llc-equity-transfer-scene-03-special-2" style={{position:'relative',padding:'16px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.gold,background:COLORS.gold+'4D',display:'flex',flexDirection:'column',opacity:enter(60,86),translate:slide(60,86,'0px 22px')}}>
          <Watermark icon={<Handshake size={130} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:8,flexShrink:0}}>
            <Handshake size={32} color={COLORS.gold}/>
            <div style={{fontSize:24,fontWeight:900}}>股权让与担保</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:8,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Handshake size={22} color={COLORS.gold}/>} delay={72} color={COLORS.gold} pad="7px 12px">转让至债权人名下的担保合同<span style={{fontWeight:900}}>有效</span>；"到期不还钱股权归债权人"<span style={{fontWeight:900,color:COLORS.red}}>无效</span></Row>
            <Row icon={<Scale size={22} color={COLORS.gold}/>} delay={84} color={COLORS.gold} pad="7px 12px">只产生<span style={{fontWeight:900}}>担保效力</span>，不产生股权转让效力</Row>
            <Row icon={<FileX2 size={22} color={COLORS.gold}/>} delay={96} color={COLORS.gold} pad="7px 12px">其他股东无优先购买权；债权人<span style={{fontWeight:900}}>不负出资责任</span></Row>
          </div>
        </div>
      </div>
      <div data-final-knowledge="llc-equity-transfer-scene-03-repurchase" style={{flexShrink:0,position:'relative',display:'grid',gap:10,border:'5px solid '+COLORS.green,background:COLORS.green+'4D',padding:'14px 24px',opacity:enter(100,126)}}>
        <Watermark icon={<Undo2 size={110} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
        <Row icon={<Undo2 size={24} color={COLORS.green}/>} delay={112} color={COLORS.green} pad="8px 14px">异议股东回购（对决议投<span style={{fontWeight:900}}>反对票</span>）：①连续<span style={{fontWeight:900}}>五年不分红</span>且连续盈利 ②合并、分立、<span style={{fontWeight:900}}>转让主要财产</span> ③期满修改章程使公司存续</Row>
        <Row icon={<CalendarClock size={24} color={COLORS.green}/>} delay={126} color={COLORS.green} pad="8px 14px">先协商<span style={{fontWeight:900}}>60日</span>（必经）→ 不成再起诉<span style={{fontWeight:900}}>90日</span>；受压迫股东回购<span style={{fontWeight:900}}>限于有限公司</span>；收购的股权应在<span style={{background:COLORS.green+'28',padding:'1px 8px',fontWeight:900}}>6个月内</span>转让或注销</Row>
      </div>
    </div>
  </Shell>;
};

export const LlcEquityTransfer=()=> <AbsoluteFill>
  <TimelineSequence name="01-llc-equity-transfer-scene-01" start={SCENES['llc-equity-transfer-scene-01'].start} duration={SCENES['llc-equity-transfer-scene-01'].duration}><LlcEquityTransfer01Scene/></TimelineSequence>
  <TimelineSequence name="02-llc-equity-transfer-scene-02" start={SCENES['llc-equity-transfer-scene-02'].start} duration={SCENES['llc-equity-transfer-scene-02'].duration}><LlcEquityTransfer02Scene/></TimelineSequence>
  <TimelineSequence name="03-llc-equity-transfer-scene-03" start={SCENES['llc-equity-transfer-scene-03'].start} duration={SCENES['llc-equity-transfer-scene-03'].duration}><LlcEquityTransfer03Scene/></TimelineSequence>
</AbsoluteFill>;
