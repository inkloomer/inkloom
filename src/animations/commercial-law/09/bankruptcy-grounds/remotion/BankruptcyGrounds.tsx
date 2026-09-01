import type {ReactNode} from 'react';
import {BookOpen, Scale, RefreshCw, TrendingDown, Coins, UserX, Gavel, TrendingUp, ShieldX, UserRound, Ban} from 'lucide-react';
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

export const BankruptcyGrounds01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="09.1" title="破产原因的三条线">
    <div data-layout="diagnosis-triad-1" data-visual-anchor="flow-path" data-visual-grammar="two-condition-test,reorganization-only-branch" data-text-treatments="label-block,thin-underline,soft-highlight" data-focal-rule="bankruptcy-grounds-scene-01-rule" data-focal-channels="connector,contrast,motion" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:16}}>
      <div data-final-knowledge="bankruptcy-grounds-knowledge-1" style={{flexShrink:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <BookOpen size={40} color={COLORS.red}/>
        <div style={{fontSize:27,fontWeight:900}}>前提：<span style={{color:COLORS.red}}>不能清偿到期债务</span> ＋ 下述之一</div>
      </div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="bankruptcy-grounds-scene-01-branch-0" style={{position:'relative',padding:'16px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.green,background:COLORS.green+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54),translate:slide(28,54,'0px 22px')}}>
          <Watermark icon={<Scale size={130} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8,flexShrink:0}}>
            <Scale size={32} color={COLORS.green}/>
            <div style={{fontSize:24,fontWeight:900}}>＋ 资不抵债</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:9,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Coins size={22} color={COLORS.green}/>} delay={40} color={COLORS.green} pad="8px 12px">账面<span style={{fontWeight:900}}>资产小于负债</span></Row>
            <Row icon={<Gavel size={22} color={COLORS.green}/>} delay={52} color={COLORS.green} pad="8px 12px">可启动：<span style={{background:COLORS.green+'28',padding:'1px 8px',fontWeight:900}}>清算/和解/重整</span></Row>
          </div>
        </div>
        <div data-final-knowledge="bankruptcy-grounds-scene-01-branch-1" style={{position:'relative',padding:'16px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.green,background:COLORS.green+'4D',display:'flex',flexDirection:'column',opacity:enter(44,70),translate:slide(44,70,'0px 22px')}}>
          <Watermark icon={<TrendingDown size={130} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8,flexShrink:0}}>
            <TrendingDown size={32} color={COLORS.green}/>
            <div style={{fontSize:24,fontWeight:900}}>＋ 明显缺乏清偿能力</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:9,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Coins size={22} color={COLORS.green}/>} delay={56} color={COLORS.green} pad="8px 12px">账面资产虽大于负债，<span style={{fontWeight:900}}>实际没钱可用</span></Row>
            <Row icon={<Gavel size={22} color={COLORS.green}/>} delay={68} color={COLORS.green} pad="8px 12px">可启动：<span style={{background:COLORS.green+'28',padding:'1px 8px',fontWeight:900}}>清算/和解/重整</span></Row>
          </div>
        </div>
        <div data-final-knowledge="bankruptcy-grounds-scene-01-branch-2" style={{position:'relative',padding:'16px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.gold,background:COLORS.gold+'4D',display:'flex',flexDirection:'column',opacity:enter(60,86),translate:slide(60,86,'0px 22px')}}>
          <Watermark icon={<RefreshCw size={130} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8,flexShrink:0}}>
            <RefreshCw size={32} color={COLORS.gold}/>
            <div style={{fontSize:24,fontWeight:900}}>明显丧失清偿能力可能</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:9,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<TrendingUp size={22} color={COLORS.gold}/>} delay={72} color={COLORS.gold} pad="8px 12px">尚未<span style={{fontWeight:900}}>不能清偿</span>的客观事实，但已有<span style={{fontWeight:900}}>经营危机</span></Row>
            <Row icon={<Ban size={22} color={COLORS.gold}/>} delay={84} color={COLORS.gold} pad="8px 12px"><span style={{background:COLORS.gold+'40',padding:'1px 8px',fontWeight:900}}>仅重整</span>——不能清算或和解</Row>
          </div>
        </div>
      </div>
      <div style={{flexShrink:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.gold,background:COLORS.gold+'4D',padding:'13px 24px',opacity:enter(98,124)}}>
        <Scale size={34} color={COLORS.gold}/>
        <div style={{fontSize:21,fontWeight:800,lineHeight:1.45}}>判断：资产大于负债但<span style={{fontWeight:900}}>核心资产不能变现</span>＝缺乏清偿力，<span style={{fontWeight:900,color:COLORS.green}}>可申请破产</span>；仅有经营危机未届清偿期 → <span style={{fontWeight:900,color:COLORS.gold}}>仅重整</span>，不能清算</div>
      </div>
    </div>
  </Shell>;
};

export const BankruptcyGrounds02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="09.1" title="明显缺乏清偿能力的四种情形">
    <div data-layout="insolvency-four-2" data-visual-anchor="typographic-sequence" data-visual-grammar="four-signs-registry,mnemonic-chain" data-text-treatments="stamp,soft-highlight,external-negation" data-focal-rule="bankruptcy-grounds-scene-02-rule" data-focal-channels="enclosure,motion,annotation" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:14}}>
      <div data-final-knowledge="bankruptcy-grounds-knowledge-2" style={{flexShrink:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#6E6757',opacity:enter(12,36)}}>记忆口诀：<span style={{color:COLORS.red}}>没现钱 · 没人管 · 强执完 · 扭亏难</span></div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gridTemplateRows:'repeat(2,minmax(0,1fr))',gap:16}}>
        <div data-final-knowledge="bankruptcy-grounds-scene-02-sign-0" style={{position:'relative',padding:'16px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54),translate:slide(28,54,'0px 22px')}}>
          <Watermark icon={<Coins size={130} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:24,fontWeight:900,marginBottom:6,flexShrink:0}}><Coins size={30} color={COLORS.red}/>① 没现钱——财产不能变现</div>
          <div style={{display:'flex',flexDirection:'column',gap:9,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Coins size={22} color={COLORS.red}/>} delay={42} color={COLORS.red} pad="8px 12px">如核心资产是<span style={{fontWeight:900}}>房地产</span>，市场萎缩卖不掉</Row>
            <Row icon={<Gavel size={22} color={COLORS.red}/>} delay={54} color={COLORS.red} pad="8px 12px">仍构成缺乏清偿力 → <span style={{fontWeight:900,color:COLORS.green}}>可申请破产</span></Row>
          </div>
        </div>
        <div data-final-knowledge="bankruptcy-grounds-scene-02-sign-1" style={{position:'relative',padding:'16px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(44,70),translate:slide(44,70,'0px 22px')}}>
          <Watermark icon={<UserX size={130} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:24,fontWeight:900,marginBottom:6,flexShrink:0}}><UserX size={30} color={COLORS.red}/>② 没人管——法代下落不明</div>
          <div style={{display:'flex',flexDirection:'column',gap:9,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<UserX size={22} color={COLORS.red}/>} delay={58} color={COLORS.red} pad="8px 12px">法定代表人下落不明</Row>
            <Row icon={<Ban size={22} color={COLORS.red}/>} delay={70} color={COLORS.red} pad="8px 12px">且<span style={{fontWeight:900}}>无其他人员管理财产</span></Row>
          </div>
        </div>
        <div data-final-knowledge="bankruptcy-grounds-scene-02-sign-2" style={{position:'relative',padding:'16px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(60,86),translate:slide(60,86,'0px 22px')}}>
          <Watermark icon={<Gavel size={130} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:24,fontWeight:900,marginBottom:6,flexShrink:0}}><Gavel size={30} color={COLORS.red}/>③ 强执完——强执无法清偿</div>
          <div style={{display:'flex',flexDirection:'column',gap:9,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Gavel size={22} color={COLORS.red}/>} delay={74} color={COLORS.red} pad="8px 12px">经法院<span style={{fontWeight:900}}>强制执行</span>也无法清偿债务</Row>
          </div>
        </div>
        <div data-final-knowledge="bankruptcy-grounds-scene-02-sign-3" style={{position:'relative',padding:'16px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(76,102),translate:slide(76,102,'0px 22px')}}>
          <Watermark icon={<TrendingDown size={130} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:24,fontWeight:900,marginBottom:6,flexShrink:0}}><TrendingDown size={30} color={COLORS.red}/>④ 扭亏难——长期亏损</div>
          <div style={{display:'flex',flexDirection:'column',gap:9,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<TrendingDown size={22} color={COLORS.red}/>} delay={90} color={COLORS.red} pad="8px 12px"><span style={{fontWeight:900}}>长期亏损</span>且扭亏困难</Row>
          </div>
        </div>
      </div>
      <div style={{flexShrink:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.green,background:COLORS.green+'4D',padding:'13px 24px',opacity:enter(102,128)}}>
        <UserRound size={34} color={COLORS.green}/>
        <div style={{fontSize:21,fontWeight:800,lineHeight:1.45}}>虽然账面资产大于负债，但存在上述情形＝<span style={{fontWeight:900,color:COLORS.red}}>实际没钱可用</span>，构成明显缺乏清偿能力</div>
      </div>
    </div>
  </Shell>;
};

export const BankruptcyGrounds03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="09.1" title="只看债务人自身">
    <div data-layout="debtor-only-3" data-visual-anchor="boundary" data-visual-grammar="debtor-only-view,guarantor-excluded" data-text-treatments="external-negation,label-block,soft-highlight" data-focal-rule="bankruptcy-grounds-scene-03-rule" data-focal-channels="enclosure,contrast,spatial" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:16}}>
      <div data-final-knowledge="bankruptcy-grounds-knowledge-3" style={{flexShrink:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#6E6757',opacity:enter(12,36)}}>是否具有破产原因——<span style={{color:COLORS.red}}>仅看债务人自身</span></div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="bankruptcy-grounds-scene-03-inside" style={{position:'relative',padding:'18px 24px',border:'5px solid '+COLORS.green,background:COLORS.green+'4D',display:'flex',flexDirection:'column',opacity:enter(28,54),translate:slide(28,54,'-24px 0px')}}>
          <Watermark icon={<UserRound size={150} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10,flexShrink:0}}>
            <UserRound size={36} color={COLORS.green}/>
            <div style={{padding:'8px 18px',background:COLORS.green,color:COLORS.paper,fontSize:25,fontWeight:900}}>看：债务人自身</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Coins size={24} color={COLORS.green}/>} delay={42} color={COLORS.green} pad="10px 13px">自有财产的<span style={{fontWeight:900}}>变现能力</span></Row>
            <Row icon={<Scale size={24} color={COLORS.green}/>} delay={56} color={COLORS.green} pad="10px 13px">自身负债、清偿情况与<span style={{fontWeight:900}}>经营状况</span></Row>
            <Row icon={<Gavel size={24} color={COLORS.green}/>} delay={70} color={COLORS.green} pad="10px 13px">主体视角——<span style={{fontWeight:900,color:COLORS.green}}>债务人自己的清偿力</span></Row>
          </div>
        </div>
        <div data-final-knowledge="bankruptcy-grounds-scene-03-outside" style={{position:'relative',padding:'18px 24px',border:'5px dashed '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(46,72),translate:slide(46,72,'24px 0px')}}>
          <Watermark icon={<ShieldX size={150} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10,flexShrink:0}}>
            <ShieldX size={36} color={COLORS.red}/>
            <div style={{padding:'8px 18px',background:COLORS.red,color:COLORS.paper,fontSize:25,fontWeight:900}}>不看：第三人</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<UserRound size={24} color={COLORS.red}/>} delay={60} color={COLORS.red} pad="10px 13px"><span style={{fontWeight:900,color:COLORS.red}}>保证人</span>等第三人有还款能力 → <span style={{fontWeight:900}}>不影响</span>认定</Row>
            <Row icon={<Ban size={24} color={COLORS.red}/>} delay={74} color={COLORS.red} pad="10px 13px">不能以第三人有还款能力<span style={{fontWeight:900,color:COLORS.red}}>抗辩</span>无破产原因</Row>
          </div>
        </div>
      </div>
      <div style={{flexShrink:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.green,background:COLORS.green+'4D',padding:'13px 24px',opacity:enter(88,114)}}>
        <BookOpen size={34} color={COLORS.green}/>
        <div style={{fontSize:21,fontWeight:800,lineHeight:1.45}}>例：甲向乙借款500万、丙提供<span style={{fontWeight:900}}>连带保证</span>；甲到期拒不清偿，乙申请甲破产——甲不能以<span style={{fontWeight:900}}>丙有还款能力</span>抗辩，仍具破产原因</div>
      </div>
    </div>
  </Shell>;
};

export const BankruptcyGrounds=()=> <AbsoluteFill>
  <TimelineSequence name="01-bankruptcy-grounds-scene-01" start={SCENES['bankruptcy-grounds-scene-01'].start} duration={SCENES['bankruptcy-grounds-scene-01'].duration}><BankruptcyGrounds01Scene/></TimelineSequence>
  <TimelineSequence name="02-bankruptcy-grounds-scene-02" start={SCENES['bankruptcy-grounds-scene-02'].start} duration={SCENES['bankruptcy-grounds-scene-02'].duration}><BankruptcyGrounds02Scene/></TimelineSequence>
  <TimelineSequence name="03-bankruptcy-grounds-scene-03" start={SCENES['bankruptcy-grounds-scene-03'].start} duration={SCENES['bankruptcy-grounds-scene-03'].duration}><BankruptcyGrounds03Scene/></TimelineSequence>
</AbsoluteFill>;
