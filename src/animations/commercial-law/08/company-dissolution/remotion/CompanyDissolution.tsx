import type {ReactNode} from 'react';
import {CalendarClock, Gavel, Landmark, Building2, ShieldX, UserRound, Handshake, CheckCircle2, Users, Ban, Scale, ScrollText, FileX2, TrendingDown, Merge} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#F1EFE6', ink:'#22262E', red:'#B23A30', green:'#2E6D4F', gold:'#C08A2D', paper:'#FAF7EE'} as const;
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

export const CompanyDissolution01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="08.1" title="解散的三种原因">
    <div data-layout="dissolution-causes-1" data-visual-anchor="flow-path" data-visual-grammar="dissolution-triad,continuation-threshold" data-text-treatments="label-block,soft-highlight,thin-underline" data-focal-rule="company-dissolution-scene-01-rule" data-focal-channels="connector,contrast,motion" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:14}}>
      <div data-final-knowledge="company-dissolution-knowledge-1" style={{flexShrink:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#6E6757',opacity:enter(12,36)}}>公司解散 ← 三种原因</div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="company-dissolution-scene-01-cause-0" style={{position:'relative',padding:'16px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.green,background:COLORS.green+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54),translate:slide(28,54,'0px 22px')}}>
          <Watermark icon={<CalendarClock size={130} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8,flexShrink:0}}>
            <CalendarClock size={34} color={COLORS.green}/>
            <div style={{fontSize:25,fontWeight:900}}>一般解散</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:9,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<CalendarClock size={22} color={COLORS.green}/>} delay={40} color={COLORS.green} pad="8px 12px">营业<span style={{fontWeight:900}}>期限届满</span>或章程规定解散事由出现</Row>
            <Row icon={<Users size={22} color={COLORS.green}/>} delay={52} color={COLORS.green} pad="8px 12px"><span style={{fontWeight:900}}>股东会决议</span>解散（<span style={{fontWeight:900,color:COLORS.green}}>2/3以上</span>表决权）</Row>
            <Row icon={<ScrollText size={22} color={COLORS.green}/>} delay={64} color={COLORS.green} pad="8px 12px">未分配财产的 → 修章或决议<span style={{fontWeight:900}}>存续</span>（2/3以上通过）</Row>
            <Row icon={<Merge size={22} color={COLORS.green}/>} delay={76} color={COLORS.green} pad="8px 12px">因<span style={{fontWeight:900}}>合并或分立</span>需要解散</Row>
          </div>
        </div>
        <div data-final-knowledge="company-dissolution-scene-01-cause-1" style={{position:'relative',padding:'16px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.gold,background:COLORS.gold+'4D',display:'flex',flexDirection:'column',opacity:enter(44,70),translate:slide(44,70,'0px 22px')}}>
          <Watermark icon={<ShieldX size={130} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8,flexShrink:0}}>
            <ShieldX size={34} color={COLORS.gold}/>
            <div style={{fontSize:25,fontWeight:900}}>行政解散</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:9,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Landmark size={22} color={COLORS.gold}/>} delay={56} color={COLORS.gold} pad="8px 12px">被行政机关<span style={{background:COLORS.gold+'40',padding:'1px 8px',fontWeight:900}}>吊销营业执照</span></Row>
            <Row icon={<Ban size={22} color={COLORS.gold}/>} delay={68} color={COLORS.gold} pad="8px 12px"><span style={{fontWeight:900}}>责令关闭、撤销</span>的</Row>
          </div>
        </div>
        <div data-final-knowledge="company-dissolution-scene-01-cause-2" style={{position:'relative',padding:'16px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(60,86),translate:slide(60,86,'0px 22px')}}>
          <Watermark icon={<Gavel size={130} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8,flexShrink:0}}>
            <Gavel size={34} color={COLORS.red}/>
            <div style={{fontSize:25,fontWeight:900}}>司法解散</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:9,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Building2 size={22} color={COLORS.red}/>} delay={72} color={COLORS.red} pad="8px 12px">经营管理发生<span style={{fontWeight:900,color:COLORS.red}}>严重困难</span></Row>
            <Row icon={<Scale size={22} color={COLORS.red}/>} delay={84} color={COLORS.red} pad="8px 12px">继续存续使股东利益<span style={{fontWeight:900,color:COLORS.red}}>重大损失</span></Row>
            <Row icon={<Ban size={22} color={COLORS.red}/>} delay={96} color={COLORS.red} pad="8px 12px"><span style={{fontWeight:900,color:COLORS.red}}>其他途径不能解决</span>——三要件</Row>
          </div>
        </div>
      </div>
      <div style={{flexShrink:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.gold,background:COLORS.gold+'4D',padding:'13px 24px',opacity:enter(100,126)}}>
        <Building2 size={36} color={COLORS.gold}/>
        <div style={{fontSize:21,fontWeight:800,lineHeight:1.45}}><span style={{fontWeight:900,color:'#7A5B12'}}>经营管理严重困难</span>：<span style={{fontWeight:900}}>2年以上</span>无法召开股东会 / <span style={{fontWeight:900}}>2年以上</span>无法作出有效决议 / <span style={{fontWeight:900}}>董事长期冲突</span>且无法通过股东会解决</div>
      </div>
    </div>
  </Shell>;
};

export const CompanyDissolution02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="08.1" title="司法解散：受理 与 不受理">
    <div data-layout="judicial-dissolution-gate-2" data-visual-anchor="boundary" data-visual-grammar="three-element-gate,non-acceptance-list" data-text-treatments="external-negation,soft-highlight,stamp" data-focal-rule="company-dissolution-scene-02-rule" data-focal-channels="enclosure,contrast,annotation" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:16}}>
      <div data-final-knowledge="company-dissolution-knowledge-2" style={{flexShrink:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#6E6757',opacity:enter(12,36)}}>司法解散的受理边界</div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="company-dissolution-scene-02-accept" style={{position:'relative',padding:'18px 24px',border:'5px solid '+COLORS.green,background:COLORS.green+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54),translate:slide(28,54,'-24px 0px')}}>
          <Watermark icon={<CheckCircle2 size={150} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10,flexShrink:0}}>
            <CheckCircle2 size={38} color={COLORS.green}/>
            <div style={{padding:'8px 18px',background:COLORS.green,color:COLORS.paper,fontSize:25,fontWeight:900}}>受理：三要件</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Building2 size={24} color={COLORS.green}/>} delay={42} color={COLORS.green} pad="10px 13px"><span style={{fontWeight:900,color:COLORS.green}}>困难</span>：经营管理发生严重困难</Row>
            <Row icon={<Scale size={24} color={COLORS.green}/>} delay={56} color={COLORS.green} pad="10px 13px"><span style={{fontWeight:900,color:COLORS.green}}>损失</span>：继续存续使股东利益受重大损失</Row>
            <Row icon={<Ban size={24} color={COLORS.green}/>} delay={70} color={COLORS.green} pad="10px 13px"><span style={{fontWeight:900,color:COLORS.green}}>无他途</span>：其他途径不能解决</Row>
          </div>
        </div>
        <div data-final-knowledge="company-dissolution-scene-02-reject" style={{position:'relative',padding:'18px 24px',border:'5px dashed '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(46,72),translate:slide(46,72,'24px 0px')}}>
          <Watermark icon={<ShieldX size={150} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10,flexShrink:0}}>
            <ShieldX size={38} color={COLORS.red}/>
            <div style={{padding:'8px 18px',background:COLORS.red,color:COLORS.paper,fontSize:25,fontWeight:900}}>不予受理</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<FileX2 size={24} color={COLORS.red}/>} delay={58} color={COLORS.red} pad="10px 13px">① <span style={{fontWeight:900}}>知情权或利润分配请求权</span>受损</Row>
            <Row icon={<TrendingDown size={24} color={COLORS.red}/>} delay={72} color={COLORS.red} pad="10px 13px">② 公司<span style={{fontWeight:900}}>亏损</span>或财产不足以偿还全部债务</Row>
            <Row icon={<Landmark size={24} color={COLORS.red}/>} delay={86} color={COLORS.red} pad="10px 13px">③ 被<span style={{fontWeight:900}}>吊销营业执照</span>未进行清算</Row>
          </div>
        </div>
      </div>
      <div style={{flexShrink:0,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.ink,background:COLORS.gold+'4D',padding:'13px 24px',opacity:enter(88,114)}}>
        <div style={{padding:'8px 18px',border:'3px solid '+COLORS.red,color:COLORS.red,fontSize:21,fontWeight:900,transform:'rotate(-2deg)',background:COLORS.paper,flexShrink:0}}>知情权不可诉解散</div>
        <div style={{fontSize:21,fontWeight:800,lineHeight:1.45}}>股东不能以<span style={{fontWeight:900}}>知情权受损</span>为由提起解散公司诉讼——此类纠纷应<span style={{fontWeight:900}}>另循诉讼途径</span>解决</div>
      </div>
    </div>
  </Shell>;
};

export const CompanyDissolution03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="08.1" title="司法解散的诉讼与调解">
    <div data-layout="dissolution-suit-3" data-visual-anchor="role-pair" data-visual-grammar="suit-parties,mediation-relief" data-text-treatments="label-block,stamp,thin-underline" data-focal-rule="company-dissolution-scene-03-rule" data-focal-channels="contrast,locator,annotation" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:14}}>
      <div data-final-knowledge="company-dissolution-knowledge-3" style={{flexShrink:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#6E6757',opacity:enter(12,36)}}>主体与救济</div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="company-dissolution-scene-03-plaintiff" style={{position:'relative',padding:'16px 24px',border:'5px solid '+COLORS.green,background:COLORS.green+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54),translate:slide(28,54,'-24px 0px')}}>
          <Watermark icon={<UserRound size={150} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8,flexShrink:0}}>
            <UserRound size={34} color={COLORS.green}/>
            <div style={{fontSize:25,fontWeight:900}}>原告</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:9,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<UserRound size={24} color={COLORS.green}/>} delay={40} color={COLORS.green} pad="9px 13px">（单独或合计）持有公司<span style={{background:COLORS.green+'28',padding:'1px 8px',fontWeight:900}}>10%以上表决权</span>的股东</Row>
            <Row icon={<Handshake size={24} color={COLORS.green}/>} delay={54} color={COLORS.green} pad="9px 13px">保全：<span style={{fontWeight:900}}>提供担保</span>＋<span style={{fontWeight:900}}>不影响公司正常经营</span>，法院可以保全</Row>
          </div>
        </div>
        <div data-final-knowledge="company-dissolution-scene-03-defendant" style={{position:'relative',padding:'16px 24px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(44,70),translate:slide(44,70,'24px 0px')}}>
          <Watermark icon={<Building2 size={150} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8,flexShrink:0}}>
            <Building2 size={34} color={COLORS.red}/>
            <div style={{fontSize:25,fontWeight:900}}>被告：公司</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:9,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<UserRound size={24} color={COLORS.red}/>} delay={58} color={COLORS.red} pad="9px 13px">以其他股东为被告 → 法院告知变更为<span style={{fontWeight:900,color:COLORS.red}}>第三人</span>，否则<span style={{fontWeight:900}}>驳回</span>对该股东的起诉</Row>
            <Row icon={<Ban size={24} color={COLORS.red}/>} delay={72} color={COLORS.red} pad="9px 13px"><span style={{fontWeight:900}}>同时申请清算</span> → 不予受理；判决解散后自行清算或申请<span style={{fontWeight:900}}>强制清算</span></Row>
          </div>
        </div>
      </div>
      <div data-final-knowledge="company-dissolution-scene-03-mediation" style={{flexShrink:0,position:'relative',display:'grid',gap:9,border:'5px solid '+COLORS.gold,background:COLORS.gold+'4D',padding:'13px 24px',opacity:enter(86,112)}}>
        <Watermark icon={<Handshake size={110} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
        <Row icon={<Handshake size={24} color={COLORS.gold}/>} delay={98} color={COLORS.gold} pad="8px 13px">法院应注重调解：<span style={{background:COLORS.gold+'40',padding:'1px 8px',fontWeight:900}}>回购、受让、减资、分立</span>避免解散；收购原告股权 → 调解书生效起<span style={{fontWeight:900}}>6个月内</span>转让或注销</Row>
        <Row icon={<Scale size={24} color={COLORS.gold}/>} delay={112} color={COLORS.gold} pad="8px 13px">转让注销前<span style={{fontWeight:900}}>不得对抗公司债权人</span>；不能协商存续 → 法院<span style={{fontWeight:900}}>及时判决</span>，对<span style={{fontWeight:900}}>全体股东</span>有效</Row>
      </div>
    </div>
  </Shell>;
};

export const CompanyDissolution=()=> <AbsoluteFill>
  <TimelineSequence name="01-company-dissolution-scene-01" start={SCENES['company-dissolution-scene-01'].start} duration={SCENES['company-dissolution-scene-01'].duration}><CompanyDissolution01Scene/></TimelineSequence>
  <TimelineSequence name="02-company-dissolution-scene-02" start={SCENES['company-dissolution-scene-02'].start} duration={SCENES['company-dissolution-scene-02'].duration}><CompanyDissolution02Scene/></TimelineSequence>
  <TimelineSequence name="03-company-dissolution-scene-03" start={SCENES['company-dissolution-scene-03'].start} duration={SCENES['company-dissolution-scene-03'].duration}><CompanyDissolution03Scene/></TimelineSequence>
</AbsoluteFill>;
