import type {ReactNode} from 'react';
import {UserRound, ShieldCheck, Users, Landmark, AlarmClock, Zap, Gavel, Building2, Crown, ScrollText, FileX2, Link, Ban, FileText, HandCoins} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#EDF0EE', ink:'#1D2420', blue:'#245E8F', orange:'#C2542B', gold:'#B08A2E', paper:'#F8FAF7'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.blue,color:COLORS.paper}}>{code}</div>
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

export const ShareholderRepresentativeAction01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const requestProgress=interpolate(frame,[60,150],[0,1],CLAMP);
  return <Shell code="05.2" title="前置程序：书面请求">
    <div data-layout="precondition-switch-1" data-visual-anchor="role-pair" data-visual-grammar="request-switch,thirty-day-window" data-text-treatments="label-block,thin-underline,soft-highlight" data-focal-rule="shareholder-representative-action-scene-01-rule" data-focal-channels="contrast,connector,locator" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:16}}>
      <div data-final-knowledge="shareholder-representative-action-knowledge-1" style={{flexShrink:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <UserRound size={42} color={COLORS.blue}/>
        <div style={{fontSize:26,fontWeight:900}}>公司/全资子公司<span style={{color:COLORS.orange}}>怠于起诉</span>时，股东以<span style={{background:COLORS.blue+'26',padding:'2px 10px'}}>自己名义</span>起诉——所获赔偿<span style={{color:COLORS.blue}}>归于公司</span></div>
      </div>
      <div style={{flex:'1 1 0',minHeight:0,display:'flex',gap:20}}>
        <div style={{flexShrink:0,width:430,display:'flex',flexDirection:'column'}}>
          <div style={{display:'flex',alignItems:'center',gap:12,padding:'12px 20px',border:'4px solid '+COLORS.ink,background:COLORS.paper,fontSize:24,fontWeight:900,opacity:enter(20,46),flexShrink:0,alignSelf:'flex-start'}}>
            <Gavel size={28} color={COLORS.ink}/>
            <span>谁侵权？</span>
          </div>
          <div style={{flex:'1 1 0',display:'flex',justifyContent:'center',padding:'8px 0'}}>
            <div style={{width:6,background:COLORS.ink,opacity:enter(34,58),transformOrigin:'top center',transform:'scaleY('+requestProgress+')'}}/>
          </div>
          <div style={{flexShrink:0,position:'relative',padding:'16px 20px',border:'5px solid '+COLORS.blue,background:COLORS.blue+'4D',opacity:enter(78,104)}}>
            <Watermark icon={<Landmark size={110} color={COLORS.blue} strokeWidth={1.2}/>} color={COLORS.blue}/>
            <div style={{display:'flex',alignItems:'center',gap:10,fontSize:23,fontWeight:900,color:COLORS.blue,marginBottom:10}}>
              <Landmark size={28} color={COLORS.blue}/>
              <span>代表诉讼 · 定义与例</span>
            </div>
            <div style={{display:'grid',gap:10}}>
              <Row icon={<Building2 size={24} color={COLORS.blue}/>} delay={92} color={COLORS.blue}>公司/全资子公司<span style={{fontWeight:900,color:COLORS.orange}}>怠于起诉</span></Row>
              <Row icon={<UserRound size={24} color={COLORS.blue}/>} delay={106} color={COLORS.blue}>股东以<span style={{fontWeight:900}}>自己名义</span>起诉</Row>
              <Row icon={<HandCoins size={24} color={COLORS.blue}/>} delay={118} color={COLORS.blue}>所获赔偿<span style={{fontWeight:900,color:COLORS.blue}}>归公司</span></Row>
              <Row icon={<ScrollText size={24} color={COLORS.blue}/>} delay={130} color={COLORS.blue}>例：董事长A<span style={{fontWeight:900}}>挪用资金</span></Row>
              <Row icon={<Gavel size={24} color={COLORS.blue}/>} delay={142} color={COLORS.blue}>公司不起诉 → 股东B提代表诉讼</Row>
            </div>
          </div>
        </div>
        <div style={{flex:'1 1 0',minWidth:0,display:'flex',flexDirection:'column',gap:16}}>
          <div data-final-knowledge="shareholder-representative-action-scene-01-route-0" style={{flex:'1 1 0',minHeight:0,position:'relative',padding:'16px 22px',border:'5px solid '+COLORS.blue,background:COLORS.blue+'4D',display:'flex',flexDirection:'column',opacity:enter(46,72)}}>
            <Watermark icon={<ShieldCheck size={150} color={COLORS.blue} strokeWidth={1.2}/>} color={COLORS.blue}/>
            <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10,flexShrink:0}}>
              <ShieldCheck size={36} color={COLORS.blue}/>
              <div style={{fontSize:26,fontWeight:900}}>董事 / 高管侵权</div>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
              <Row icon={<ScrollText size={25} color={COLORS.blue}/>} delay={60} color={COLORS.blue}>书面请求<span style={{background:COLORS.blue+'26',padding:'1px 8px',fontWeight:900}}>监事会</span></Row>
              <Row icon={<Users size={25} color={COLORS.blue}/>} delay={74} color={COLORS.blue}>未设监事会的 → 书面请求<span style={{fontWeight:900}}>监事</span></Row>
            </div>
          </div>
          <div data-final-knowledge="shareholder-representative-action-scene-01-route-1" style={{flex:'1 1 0',minHeight:0,position:'relative',padding:'16px 22px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'4D',display:'flex',flexDirection:'column',opacity:enter(62,88)}}>
            <Watermark icon={<Users size={150} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
            <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10,flexShrink:0}}>
              <Users size={36} color={COLORS.gold}/>
              <div style={{fontSize:26,fontWeight:900}}>监事 / 他人侵权</div>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
              <Row icon={<ScrollText size={25} color={COLORS.gold}/>} delay={78} color={COLORS.gold}>书面请求<span style={{background:COLORS.gold+'40',padding:'1px 8px',fontWeight:900}}>董事会</span></Row>
              <Row icon={<Users size={25} color={COLORS.gold}/>} delay={92} color={COLORS.gold}>未设董事会的 → 书面请求<span style={{fontWeight:900}}>董事</span></Row>
            </div>
          </div>
        </div>
      </div>
      <div data-final-knowledge="shareholder-representative-action-scene-01-window" style={{flexShrink:0,position:'relative',display:'grid',gap:10,border:'4px solid '+COLORS.orange,background:COLORS.orange+'4D',padding:'14px 24px',opacity:enter(104,130)}}>
        <Watermark icon={<AlarmClock size={110} color={COLORS.orange} strokeWidth={1.2}/>} color={COLORS.orange}/>
        <Row icon={<AlarmClock size={24} color={COLORS.orange}/>} delay={116} color={COLORS.orange} pad="8px 14px">收到请求后<span style={{fontWeight:900,color:COLORS.orange}}>拒绝</span>，或<span style={{background:COLORS.orange+'24',padding:'1px 8px',fontWeight:900}}>30日内未起诉</span> → 股东以<span style={{fontWeight:900}}>自己名义</span>起诉，<span style={{fontWeight:900}}>公司列为第三人</span></Row>
        <Row icon={<Landmark size={24} color={COLORS.orange}/>} delay={130} color={COLORS.orange} pad="8px 14px">公司接受请求<span style={{fontWeight:900}}>自己起诉</span> → 原告＝公司/全资子公司；代表人＝<span style={{fontWeight:900}}>监事会主席或监事</span>（他人侵权：<span style={{fontWeight:900}}>董事长或董事</span>）</Row>
      </div>
    </div>
  </Shell>;
};

export const ShareholderRepresentativeAction02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="05.2" title="无需前置：直接起诉">
    <div data-layout="bypass-gates-2" data-visual-anchor="boundary" data-visual-grammar="bypass-branches,related-party-exemption" data-text-treatments="external-negation,soft-highlight,stamp" data-focal-rule="shareholder-representative-action-scene-02-rule" data-focal-channels="enclosure,contrast,annotation" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:16}}>
      <div data-final-knowledge="shareholder-representative-action-knowledge-2" style={{flexShrink:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <Zap size={42} color={COLORS.orange}/>
        <div style={{fontSize:26,fontWeight:900}}>关联交易损害公司利益——<span style={{background:COLORS.orange+'24',padding:'2px 10px'}}>无需前置</span>，股东可直接起诉关联方/合同相对方</div>
      </div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gridTemplateRows:'repeat(2,minmax(0,1fr))',gap:16}}>
        <div data-final-knowledge="shareholder-representative-action-scene-02-bypass-0" style={{position:'relative',padding:'16px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.orange,background:COLORS.orange+'4D',display:'flex',flexDirection:'column',opacity:enter(30,56),translate:slide(30,56,'0px 22px')}}>
          <Watermark icon={<Users size={130} color={COLORS.orange} strokeWidth={1.2}/>} color={COLORS.orange}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:25,fontWeight:900,marginBottom:6,flexShrink:0}}><Ban size={30} color={COLORS.orange}/>① 不存在提起诉讼的可能性</div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Users size={24} color={COLORS.orange}/>} delay={44} color={COLORS.orange}>董监高<span style={{fontWeight:900,color:COLORS.orange}}>蛇鼠一窝</span>共同侵权</Row>
            <Row icon={<FileX2 size={24} color={COLORS.orange}/>} delay={58} color={COLORS.orange}><span style={{fontWeight:900}}>无前置必要</span>——请求也没用</Row>
          </div>
        </div>
        <div data-final-knowledge="shareholder-representative-action-scene-02-bypass-1" style={{position:'relative',padding:'16px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.orange,background:COLORS.orange+'4D',display:'flex',flexDirection:'column',opacity:enter(46,72),translate:slide(46,72,'0px 22px')}}>
          <Watermark icon={<AlarmClock size={130} color={COLORS.orange} strokeWidth={1.2}/>} color={COLORS.orange}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:25,fontWeight:900,marginBottom:6,flexShrink:0}}><AlarmClock size={30} color={COLORS.orange}/>② 情况紧急</div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<AlarmClock size={24} color={COLORS.orange}/>} delay={60} color={COLORS.orange}>如公司债权<span style={{fontWeight:900,color:COLORS.orange}}>诉讼时效即将届满</span></Row>
            <Row icon={<Zap size={24} color={COLORS.orange}/>} delay={74} color={COLORS.orange}>等不了<span style={{fontWeight:900}}>30日</span>等待期</Row>
          </div>
        </div>
        <div data-final-knowledge="shareholder-representative-action-scene-02-bypass-2" style={{position:'relative',padding:'16px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.orange,background:COLORS.orange+'4D',display:'flex',flexDirection:'column',opacity:enter(62,88),translate:slide(62,88,'0px 22px')}}>
          <Watermark icon={<Link size={130} color={COLORS.orange} strokeWidth={1.2}/>} color={COLORS.orange}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:25,fontWeight:900,marginBottom:6,flexShrink:0}}><Link size={30} color={COLORS.orange}/>③ 关联关系损害公司利益</div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Building2 size={24} color={COLORS.orange}/>} delay={76} color={COLORS.orange}>控股股东、实际控制人、董监高利用<span style={{fontWeight:900}}>关联关系</span>损害公司利益</Row>
            <Row icon={<FileX2 size={24} color={COLORS.orange}/>} delay={90} color={COLORS.orange}>公司<span style={{fontWeight:900}}>没有起诉</span>的 → 股东<span style={{fontWeight:900,color:COLORS.orange}}>直接起诉</span></Row>
          </div>
        </div>
        <div data-final-knowledge="shareholder-representative-action-scene-02-bypass-3" style={{position:'relative',padding:'16px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.orange,background:COLORS.orange+'4D',display:'flex',flexDirection:'column',opacity:enter(78,104),translate:slide(78,104,'0px 22px')}}>
          <Watermark icon={<FileText size={130} color={COLORS.orange} strokeWidth={1.2}/>} color={COLORS.orange}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:25,fontWeight:900,marginBottom:6,flexShrink:0}}><FileText size={30} color={COLORS.orange}/>④ 关联交易合同存在瑕疵</div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<FileX2 size={24} color={COLORS.orange}/>} delay={92} color={COLORS.orange}>合同存在<span style={{fontWeight:900}}>无效、可撤销或对公司不发生效力</span>的情形</Row>
            <Row icon={<Gavel size={24} color={COLORS.orange}/>} delay={106} color={COLORS.orange}><span style={{fontWeight:900,color:COLORS.orange}}>合同相对方可诉</span></Row>
          </div>
        </div>
      </div>
      <div style={{flexShrink:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.blue,background:COLORS.blue+'4D',padding:'14px 24px',opacity:enter(108,134)}}>
        <Gavel size={38} color={COLORS.blue}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.5}}>对照：董监高损害的是<span style={{fontWeight:900,color:COLORS.blue}}>股东</span>利益（而非公司利益）的，股东可直接起诉——<span style={{background:COLORS.blue+'26',padding:'2px 8px',fontWeight:900}}>股东直接诉讼</span>，同样无需前置</div>
      </div>
    </div>
  </Shell>;
};

export const ShareholderRepresentativeAction03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const awardProgress=interpolate(frame,[150,240],[0,1],CLAMP);
  return <Shell code="05.2" title="诉讼主体与效果">
    <div data-layout="suit-triangle-3" data-visual-anchor="flow-target" data-visual-grammar="suit-triangle,victory-returns" data-text-treatments="label-block,stamp,soft-highlight" data-focal-rule="shareholder-representative-action-scene-03-rule" data-focal-channels="connector,motion,spatial" data-final-knowledge="shareholder-representative-action-knowledge-3" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:16}}>
      <div style={{flex:'1.1 1 0',minHeight:0,display:'flex',gap:20,paddingRight:270}}>
        <div data-final-knowledge="shareholder-representative-action-scene-03-plaintiff" style={{flex:'1 1 0',minWidth:0,position:'relative',padding:'16px 22px',border:'5px solid '+COLORS.blue,background:COLORS.blue+'4D',display:'flex',flexDirection:'column',opacity:enter(26,52)}}>
          <Watermark icon={<UserRound size={140} color={COLORS.blue} strokeWidth={1.2}/>} color={COLORS.blue}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10,flexShrink:0}}>
            <UserRound size={36} color={COLORS.blue}/>
            <div style={{fontSize:26,fontWeight:900}}>原告：股东</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<UserRound size={24} color={COLORS.blue}/>} delay={40} color={COLORS.blue}>起诉时具有<span style={{fontWeight:900}}>股东资格</span></Row>
            <Row icon={<Building2 size={24} color={COLORS.blue}/>} delay={54} color={COLORS.blue}><span style={{fontWeight:900}}>有限公司</span>：任一股东</Row>
            <Row icon={<Users size={24} color={COLORS.blue}/>} delay={68} color={COLORS.blue}><span style={{fontWeight:900}}>股份公司</span>：连续<span style={{background:COLORS.blue+'26',padding:'1px 8px',fontWeight:900}}>180日以上</span>＋单独或合计持股<span style={{background:COLORS.blue+'26',padding:'1px 8px',fontWeight:900}}>1%以上</span></Row>
          </div>
        </div>
        <div data-final-knowledge="shareholder-representative-action-scene-03-defendant" style={{flex:'1 1 0',minWidth:0,position:'relative',padding:'16px 22px',border:'5px solid '+COLORS.orange,background:COLORS.orange+'4D',display:'flex',flexDirection:'column',opacity:enter(42,68)}}>
          <Watermark icon={<Gavel size={140} color={COLORS.orange} strokeWidth={1.2}/>} color={COLORS.orange}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10,flexShrink:0}}>
            <Gavel size={36} color={COLORS.orange}/>
            <div style={{fontSize:26,fontWeight:900}}>被告：侵权人</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Gavel size={24} color={COLORS.orange}/>} delay={56} color={COLORS.orange}>损害公司/全资子公司利益的<span style={{fontWeight:900}}>董监高或他人</span></Row>
            <Row icon={<HandCoins size={24} color={COLORS.orange}/>} delay={70} color={COLORS.orange}>反诉：可反诉<span style={{fontWeight:900}}>股东</span>，<span style={{fontWeight:900,color:COLORS.orange}}>不可反诉公司</span>（不予受理）</Row>
          </div>
        </div>
      </div>
      <div data-final-knowledge="shareholder-representative-action-scene-03-third" style={{flex:'1 1 0',minHeight:0,position:'relative',marginRight:270,padding:'16px 22px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'4D',display:'flex',flexDirection:'column',opacity:enter(58,84)}}>
        <Watermark icon={<Building2 size={140} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10,flexShrink:0}}>
          <Building2 size={36} color={COLORS.gold}/>
          <div style={{fontSize:26,fontWeight:900}}>第三人：公司 / 全资子公司</div>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
          <Row icon={<Building2 size={24} color={COLORS.gold}/>} delay={72} color={COLORS.gold}><span style={{fontWeight:900}}>双重代表诉讼</span>：原告是<span style={{fontWeight:900}}>母公司股东</span>，被告是侵权人，第三人是母公司和全资子公司</Row>
          <Row icon={<ScrollText size={24} color={COLORS.gold}/>} delay={86} color={COLORS.gold}>前置程序应书面请求<span style={{background:COLORS.gold+'40',padding:'1px 8px',fontWeight:900}}>全资子公司</span>的内部机关——<span style={{fontWeight:900,color:COLORS.orange}}>不是母公司机关</span></Row>
        </div>
      </div>
      <div data-final-knowledge="shareholder-representative-action-scene-03-effect" style={{flexShrink:0,display:'flex',alignItems:'center',gap:18,border:'5px solid '+COLORS.blue,background:COLORS.blue+'4D',padding:'16px 26px',opacity:enter(96,124)}}>
        <Crown size={40} color={COLORS.blue}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.5}}>效果：<span style={{background:COLORS.blue+'26',padding:'2px 8px',fontWeight:900}}>胜诉利益归公司</span>、合理费用<span style={{fontWeight:900}}>公司承担</span>；调解协议须经公司<span style={{fontWeight:900}}>股东会或董事会</span>决议通过（章程未规定的，由股东会决议）</div>
      </div>
      <div data-stateful-source="shareholder-representative-action-award" style={{position:'absolute',left:1570,top:interpolate(awardProgress,[0,1],[190,560],CLAMP),padding:'8px 16px',border:'3px solid '+COLORS.blue,background:COLORS.paper,color:COLORS.blue,fontSize:21,fontWeight:900,opacity:awardProgress>0.85?0:1,zIndex:4}}>胜诉赔偿</div>
      <div data-stateful-terminal="shareholder-representative-action-award" style={{position:'absolute',left:1520,top:624,padding:'8px 18px',border:'3px solid '+COLORS.ink,background:COLORS.blue,color:COLORS.paper,fontSize:21,fontWeight:900,opacity:enter(150,172)}}>赔偿归公司</div>
    </div>
  </Shell>;
};

export const ShareholderRepresentativeAction=()=> <AbsoluteFill>
  <TimelineSequence name="01-shareholder-representative-action-scene-01" start={SCENES['shareholder-representative-action-scene-01'].start} duration={SCENES['shareholder-representative-action-scene-01'].duration}><ShareholderRepresentativeAction01Scene/></TimelineSequence>
  <TimelineSequence name="02-shareholder-representative-action-scene-02" start={SCENES['shareholder-representative-action-scene-02'].start} duration={SCENES['shareholder-representative-action-scene-02'].duration}><ShareholderRepresentativeAction02Scene/></TimelineSequence>
  <TimelineSequence name="03-shareholder-representative-action-scene-03" start={SCENES['shareholder-representative-action-scene-03'].start} duration={SCENES['shareholder-representative-action-scene-03'].duration}><ShareholderRepresentativeAction03Scene/></TimelineSequence>
</AbsoluteFill>;
