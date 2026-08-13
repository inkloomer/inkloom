import type {ReactNode} from 'react';
import {CalendarDays, ShieldCheck, AlertOctagon, Ban, Gift, Percent, HandCoins, Wallet} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#F3EFE4', ink:'#23242B', red:'#B23A30', green:'#2E6D4F', gold:'#C9A23C', paper:'#FBF7EC'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.red,color:COLORS.paper}}>{code}</div>
    <div style={{position:'absolute',left:190,right:76,top:46,fontSize:46,fontWeight:900,lineHeight:1.12,borderBottom:'5px solid '+COLORS.gold,paddingBottom:12}}>{title}</div>
    <div style={{position:'absolute',left:76,right:76,top:150,bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

export const BankruptcyRevocationRight01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const axisProgress=interpolate(frame,[100,230],[0,1],CLAMP);
  return <Shell code="11.4" title="临界期四阶段">
    <div data-layout="critical-calendar-1" data-visual-anchor="timeline-gate" data-visual-grammar="critical-period-axis,four-stage-zones" data-text-treatments="label-block,thin-underline,soft-highlight" data-focal-rule="bankruptcy-revocation-right-scene-01-rule" data-focal-channels="connector,motion,locator" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="bankruptcy-revocation-right-knowledge-1" style={{position:'absolute',left:0,right:0,top:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <CalendarDays size={42} color={COLORS.red}/>
        <div style={{fontSize:28,fontWeight:900}}>受理前的临界期内，有害全体债权人利益的行为——管理人可请求法院撤销</div>
      </div>
      <div style={{position:'absolute',left:140,right:140,top:150,height:10,background:COLORS.ink}}/>
      <div style={{position:'absolute',left:140,top:130,width:10,height:50,background:COLORS.ink}}/>
      <div style={{position:'absolute',right:140,top:130,width:10,height:50,background:COLORS.ink}}/>
      <div style={{position:'absolute',left:140,top:150,width:interpolate(axisProgress,[0,1],[0,1500],CLAMP),height:10,background:COLORS.red,opacity:enter(100,122)}}/>
      <div data-stateful-source="bankruptcy-revocation-right-calendar" style={{position:'absolute',left:interpolate(axisProgress,[0,1],[135,1610],CLAMP),top:132,width:0,height:0,borderLeft:'14px solid transparent',borderRight:'14px solid transparent',borderBottom:'30px solid '+COLORS.gold,opacity:axisProgress>0.94?0:1,zIndex:4}}/>
      <div data-final-knowledge="bankruptcy-revocation-right-scene-01-stage-0" style={{position:'absolute',left:140,top:240,width:330,padding:'16px 20px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(46,72)}}>
        <div style={{fontSize:25,fontWeight:900,marginBottom:6,color:COLORS.green}}>A 安全阶段 · 1年前</div>
        <div style={{fontSize:21,fontWeight:700,lineHeight:1.45}}>任何行为均<span style={{fontWeight:900}}>不可撤销</span></div>
      </div>
      <div data-final-knowledge="bankruptcy-revocation-right-scene-01-stage-1" style={{position:'absolute',left:500,top:240,width:330,padding:'16px 20px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(62,88)}}>
        <div style={{fontSize:25,fontWeight:900,marginBottom:6,color:'#7A5B12'}}>B 重病阶段 · 受理前1年内</div>
        <div style={{fontSize:21,fontWeight:700,lineHeight:1.45}}><span style={{fontWeight:900}}>欺诈行为</span>可撤销</div>
      </div>
      <div data-final-knowledge="bankruptcy-revocation-right-scene-01-stage-2" style={{position:'absolute',left:860,top:240,width:330,padding:'16px 20px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(78,104)}}>
        <div style={{fontSize:25,fontWeight:900,marginBottom:6,color:COLORS.red}}>C 垂死阶段 · 受理前6个月内</div>
        <div style={{fontSize:21,fontWeight:700,lineHeight:1.45}}>有破产原因——<span style={{fontWeight:900}}>个别清偿</span>可撤销</div>
      </div>
      <div data-final-knowledge="bankruptcy-revocation-right-scene-01-stage-3" style={{position:'absolute',left:1220,top:240,width:380,padding:'16px 20px',border:'5px solid '+COLORS.red,background:COLORS.paper,opacity:enter(94,120)}}>
        <div style={{fontSize:25,fontWeight:900,marginBottom:6,color:COLORS.red}}>D 破产阶段 · 受理后</div>
        <div style={{fontSize:21,fontWeight:700,lineHeight:1.45}}><span style={{fontWeight:900}}>禁止个别清偿</span></div>
      </div>
      <div data-stateful-terminal="bankruptcy-revocation-right-calendar" style={{position:'absolute',left:1440,top:180,padding:'8px 16px',border:'3px solid '+COLORS.ink,background:COLORS.gold,color:COLORS.paper,fontSize:20,fontWeight:900,opacity:enter(140,162)}}>1年线 → 6个月线 → 受理日</div>
    </div>
  </Shell>;
};

export const BankruptcyRevocationRight02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="11.4" title="欺诈破产行为：1年内可撤销">
    <div data-layout="fraud-five-2" data-visual-anchor="typographic-sequence" data-visual-grammar="fraudulent-acts,one-year-window" data-text-treatments="stamp,soft-highlight,label-block" data-focal-rule="bankruptcy-revocation-right-scene-02-rule" data-focal-channels="enclosure,motion,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="bankruptcy-revocation-right-knowledge-2" style={{position:'absolute',left:0,right:0,top:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <AlertOctagon size={42} color={COLORS.red}/>
        <div style={{fontSize:28,fontWeight:900}}>受理前<span style={{background:COLORS.red+'20',padding:'2px 10px'}}>1年内</span>的五类行为，均可撤销</div>
      </div>
      <div style={{position:'absolute',left:0,right:0,top:80,display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:18}}>
        <div data-final-knowledge="bankruptcy-revocation-right-scene-02-act-0" style={{padding:'18px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.red,background:COLORS.paper,minHeight:140,opacity:enter(28,54)}}>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:8}}>
            <Gift size={32} color={COLORS.red}/>
            <div style={{fontSize:25,fontWeight:900}}>① 无偿转让财产</div>
          </div>
        </div>
        <div data-final-knowledge="bankruptcy-revocation-right-scene-02-act-1" style={{padding:'18px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.red,background:COLORS.paper,minHeight:140,opacity:enter(44,70)}}>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:8}}>
            <Percent size={32} color={COLORS.red}/>
            <div style={{fontSize:25,fontWeight:900}}>② 明显不合理价格交易</div>
          </div>
        </div>
        <div data-final-knowledge="bankruptcy-revocation-right-scene-02-act-2" style={{padding:'18px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.red,background:COLORS.paper,minHeight:140,opacity:enter(60,86)}}>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:8}}>
            <HandCoins size={32} color={COLORS.red}/>
            <div style={{fontSize:25,fontWeight:900}}>③ 对没有担保的债务提供担保</div>
          </div>
        </div>
        <div data-final-knowledge="bankruptcy-revocation-right-scene-02-act-3" style={{padding:'18px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.red,background:COLORS.paper,minHeight:140,opacity:enter(76,102)}}>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:8}}>
            <Ban size={32} color={COLORS.red}/>
            <div style={{fontSize:25,fontWeight:900}}>④ 放弃债权</div>
          </div>
        </div>
        <div data-final-knowledge="bankruptcy-revocation-right-scene-02-act-4" style={{padding:'18px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.red,background:COLORS.paper,minHeight:140,opacity:enter(92,118)}}>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:8}}>
            <Wallet size={32} color={COLORS.red}/>
            <div style={{fontSize:25,fontWeight:900}}>⑤ 提前清偿未到期债务</div>
          </div>
        </div>
        <div style={{padding:'18px 22px',border:'4px dashed '+COLORS.gold,background:COLORS.paper,minHeight:140,opacity:enter(104,130),display:'grid',alignItems:'center'}}>
          <div style={{fontSize:23,fontWeight:800,lineHeight:1.5}}>例外：受理日前<span style={{fontWeight:900}}>已到期</span>的不可撤销——除非属于可撤销的个别清偿</div>
        </div>
      </div>
      <div style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.red,background:COLORS.paper,padding:'14px 24px',opacity:enter(118,144)}}>
        <CalendarDays size={38} color={COLORS.red}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}>口诀：<span style={{background:COLORS.red+'20',padding:'2px 8px',fontWeight:900}}>欺诈看一年</span>，个别看半年，一年之外全不撤</div>
      </div>
    </div>
  </Shell>;
};

export const BankruptcyRevocationRight03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="11.4" title="个别清偿：可撤销与例外">
    <div data-layout="repayment-exceptions-3" data-visual-anchor="boundary" data-visual-grammar="individual-repayment,exception-gates" data-text-treatments="external-negation,soft-highlight,stamp" data-focal-rule="bankruptcy-revocation-right-scene-03-rule" data-focal-channels="enclosure,contrast,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="bankruptcy-revocation-right-scene-03-rule" style={{position:'absolute',left:0,top:0,width:900,padding:'20px 26px',border:'5px solid '+COLORS.red,background:COLORS.paper,opacity:enter(28,54)}}>
        <div style={{fontSize:27,fontWeight:900,marginBottom:8}}>原则：可撤销</div>
        <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>受理前<span style={{fontWeight:900}}>6个月内</span>，有破产原因，对个别债权人清偿的——<span style={{background:COLORS.red+'20',padding:'2px 6px',fontWeight:900}}>可撤销</span></div>
      </div>
      <div data-final-knowledge="bankruptcy-revocation-right-scene-03-exceptions" style={{position:'absolute',right:0,top:0,width:780,padding:'20px 26px',border:'5px solid '+COLORS.green,background:COLORS.paper,opacity:enter(46,72)}}>
        <div style={{fontSize:27,fontWeight:900,marginBottom:8,color:COLORS.green}}>例外：不可撤销</div>
        <div style={{fontSize:22,fontWeight:700,lineHeight:1.55}}>① 司法程序清偿 ② <span style={{fontWeight:900}}>水电费</span> ③ 有担保且担保财产价值≥债权额 ④ <span style={{fontWeight:900}}>劳动报酬</span>或<span style={{fontWeight:900}}>人身损害赔偿金</span> ⑤ 使债务人财产受益的个别清偿</div>
      </div>
      <div data-final-knowledge="bankruptcy-revocation-right-knowledge-3" style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.gold,background:COLORS.paper,padding:'14px 24px',opacity:enter(76,104)}}>
        <ShieldCheck size={38} color={COLORS.gold}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}>例：以自有房产（价值300万）担保并清偿200万债务——担保财产价值≥债权额，<span style={{fontWeight:900}}>不可撤销</span>；支付劳动报酬的，<span style={{fontWeight:900}}>不可撤销</span></div>
      </div>
    </div>
  </Shell>;
};

export const BankruptcyRevocationRight=()=> <AbsoluteFill>
  <TimelineSequence name="01-bankruptcy-revocation-right-scene-01" start={SCENES['bankruptcy-revocation-right-scene-01'].start} duration={SCENES['bankruptcy-revocation-right-scene-01'].duration}><BankruptcyRevocationRight01Scene/></TimelineSequence>
  <TimelineSequence name="02-bankruptcy-revocation-right-scene-02" start={SCENES['bankruptcy-revocation-right-scene-02'].start} duration={SCENES['bankruptcy-revocation-right-scene-02'].duration}><BankruptcyRevocationRight02Scene/></TimelineSequence>
  <TimelineSequence name="03-bankruptcy-revocation-right-scene-03" start={SCENES['bankruptcy-revocation-right-scene-03'].start} duration={SCENES['bankruptcy-revocation-right-scene-03'].duration}><BankruptcyRevocationRight03Scene/></TimelineSequence>
</AbsoluteFill>;
