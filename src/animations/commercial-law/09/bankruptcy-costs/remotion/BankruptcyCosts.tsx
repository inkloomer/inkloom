import type {ReactNode} from 'react';
import {Coins, Users, Handshake, TrendingUp, Scale, FileX2, Landmark, Banknote} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#EFF1ED', ink:'#232A26', green:'#2E6D4F', red:'#B23A30', gold:'#C08A2D', paper:'#F8FAF6'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.green,color:COLORS.paper}}>{code}</div>
    <div style={{position:'absolute',left:190,right:76,top:46,fontSize:46,fontWeight:900,lineHeight:1.12,borderBottom:'5px solid '+COLORS.red,paddingBottom:12}}>{title}</div>
    <div style={{position:'absolute',left:76,right:76,top:150,bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

export const BankruptcyCosts01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="09.4" title="破产费用 与 共益债务">
    <div data-layout="cost-pool-split-1" data-visual-anchor="comparison-axis" data-visual-grammar="procedural-expense,common-interest-debt" data-text-treatments="label-block,thin-underline,soft-highlight" data-focal-rule="bankruptcy-costs-scene-01-rule" data-focal-channels="contrast,spatial,icon" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="bankruptcy-costs-knowledge-1" style={{position:'absolute',left:0,right:0,top:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#5C6B64',opacity:enter(12,36)}}>受理后发生的两笔账</div>
      <div data-final-knowledge="bankruptcy-costs-scene-01-cost" style={{position:'absolute',left:24,top:76,width:850,padding:26,border:'5px solid '+COLORS.green,background:COLORS.paper,opacity:enter(28,54),translate:slide(28,54,'-26px 0px')}}>
        <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:14}}>
          <Coins size={44} color={COLORS.green}/>
          <div style={{padding:'8px 18px',background:COLORS.ink,color:COLORS.paper,fontSize:28,fontWeight:900}}>破产费用</div>
          <div style={{fontSize:22,fontWeight:900,color:COLORS.green}}>程序性支出</div>
        </div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55,padding:'12px 16px',background:COLORS.green+'10'}}>①破产诉讼费 ②管理、变价和分配债务人财产的费用 ③管理人执行职务的费用、报酬和聘用工作人员的费用 ④受理前发生的强制清算费用（清算转破产）⑤未终结执行程序中的评估费、公告费、保管费（执行转破产）</div>
      </div>
      <div data-final-knowledge="bankruptcy-costs-scene-01-common" style={{position:'absolute',right:24,top:76,width:850,padding:26,border:'5px solid '+COLORS.gold,background:COLORS.paper,opacity:enter(46,72),translate:slide(46,72,'26px 0px')}}>
        <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:14}}>
          <Users size={44} color={COLORS.gold}/>
          <div style={{padding:'8px 18px',background:COLORS.ink,color:COLORS.paper,fontSize:28,fontWeight:900}}>共益债务</div>
          <div style={{fontSize:22,fontWeight:900,color:'#7A5B12'}}>为全体债权人利益</div>
        </div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55,padding:'12px 16px',background:COLORS.gold+'16'}}>受理后为全体债权人利益而产生的各项债务——因继续营业、履行合同、无因管理、不当得利、职务致害、财产致害等所生之债</div>
      </div>
      <div style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.red,background:COLORS.paper,padding:'14px 24px',opacity:enter(74,102)}}>
        <FileX2 size={38} color={COLORS.red}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}>参照：对方因解除合同所遭受的损失 → <span style={{background:COLORS.red+'20',padding:'2px 8px',fontWeight:900}}>破产债权</span>，不是共益债务</div>
      </div>
    </div>
  </Shell>;
};

export const BankruptcyCosts02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="09.4" title="共益债务的六项">
    <div data-layout="common-debt-list-2" data-visual-anchor="typographic-sequence" data-visual-grammar="contract-type-debts,operation-type-debts" data-text-treatments="soft-highlight,stamp,external-negation" data-focal-rule="bankruptcy-costs-scene-02-rule" data-focal-channels="enclosure,motion,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="bankruptcy-costs-knowledge-2" style={{position:'absolute',left:0,right:0,top:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#5C6B64',opacity:enter(12,36)}}>合同类 与 经营类</div>
      <div style={{position:'absolute',left:0,right:0,top:70,display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:18}}>
        <div data-final-knowledge="bankruptcy-costs-scene-02-item-0" style={{padding:'18px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.green,background:COLORS.paper,minHeight:160,opacity:enter(28,54)}}>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:8}}>
            <Handshake size={32} color={COLORS.green}/>
            <div style={{fontSize:24,fontWeight:900}}>合同履行之债</div>
          </div>
          <div style={{fontSize:21,fontWeight:700,lineHeight:1.5}}>因请求履行未履行完毕的合同所生之债</div>
        </div>
        <div data-final-knowledge="bankruptcy-costs-scene-02-item-1" style={{padding:'18px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.green,background:COLORS.paper,minHeight:160,opacity:enter(44,70)}}>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:8}}>
            <TrendingUp size={32} color={COLORS.green}/>
            <div style={{fontSize:24,fontWeight:900}}>无因管理 / 不当得利之债</div>
          </div>
          <div style={{fontSize:21,fontWeight:700,lineHeight:1.5}}>因债务人财产受无因管理、因债务人财产不当得利所生之债</div>
        </div>
        <div data-final-knowledge="bankruptcy-costs-scene-02-item-2" style={{padding:'18px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.green,background:COLORS.paper,minHeight:160,opacity:enter(60,86)}}>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:8}}>
            <Landmark size={32} color={COLORS.green}/>
            <div style={{fontSize:24,fontWeight:900}}>营业债务</div>
          </div>
          <div style={{fontSize:21,fontWeight:700,lineHeight:1.5}}>为继续营业而需支付的劳动报酬、社保费用及其他债务（含新增借款）</div>
        </div>
        <div data-final-knowledge="bankruptcy-costs-scene-02-item-3" style={{padding:'18px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.green,background:COLORS.paper,minHeight:160,opacity:enter(76,102)}}>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:8}}>
            <Scale size={32} color={COLORS.green}/>
            <div style={{fontSize:24,fontWeight:900}}>职务 / 财产致害之债</div>
          </div>
          <div style={{fontSize:21,fontWeight:700,lineHeight:1.5}}>因管理人或相关人员执行职务致人损害、因债务人财产致人损害所生之债</div>
        </div>
        <div data-final-knowledge="bankruptcy-costs-scene-02-note" style={{padding:'18px 22px',border:'4px dashed '+COLORS.red,background:COLORS.paper,minHeight:160,opacity:enter(92,118)}}>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:8}}>
            <div style={{width:30,height:30,border:'3px solid '+COLORS.red,position:'relative'}}>
              <div style={{position:'absolute',left:12,top:3,width:3,height:18,background:COLORS.red,transform:'rotate(45deg)'}}/>
              <div style={{position:'absolute',left:12,top:3,width:3,height:18,background:COLORS.red,transform:'rotate(-45deg)'}}/>
            </div>
            <div style={{fontSize:24,fontWeight:900,color:COLORS.red}}>解除合同损失</div>
          </div>
          <div style={{fontSize:21,fontWeight:700,lineHeight:1.5}}>对方因解除合同所遭受的损失 → <span style={{fontWeight:900,color:COLORS.red}}>破产债权</span>，不是共益债务</div>
        </div>
        <div style={{padding:'18px 22px',border:'4px solid '+COLORS.gold,background:COLORS.paper,minHeight:160,opacity:enter(104,130),display:'grid',alignItems:'center'}}>
          <div style={{fontSize:24,fontWeight:900,color:'#7A5B12'}}>两类对照：合同类（受理前合同关系延续）vs 经营类（受理后继续营业产生）</div>
        </div>
      </div>
    </div>
  </Shell>;
};

export const BankruptcyCosts03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const flowProgress=interpolate(frame,[110,220],[0,1],CLAMP);
  return <Shell code="09.4" title="清偿规则">
    <div data-layout="payment-order-3" data-visual-anchor="flow-path" data-visual-grammar="order-rule,proportional-rule" data-text-treatments="stamp,label-block,soft-highlight" data-focal-rule="bankruptcy-costs-scene-03-rule" data-focal-channels="connector,motion,enclosure" data-final-knowledge="bankruptcy-costs-knowledge-3" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="bankruptcy-costs-scene-03-rule" style={{position:'absolute',left:0,right:0,top:0,display:'flex',alignItems:'center',gap:16,opacity:enter(12,36)}}>
        <Landmark size={42} color={COLORS.green}/>
        <div style={{fontSize:27,fontWeight:900}}>由债务人财产<span style={{background:COLORS.green+'26',padding:'2px 10px'}}>随时清偿</span>——对外按顺序（费用 ＞ 共益），对内按比例</div>
      </div>
      <div style={{position:'absolute',left:0,top:100,width:1000,height:8,background:COLORS.ink}}/>
      <div style={{position:'absolute',left:0,top:84,width:8,height:40,background:COLORS.ink}}/>
      <div style={{position:'absolute',left:500,top:84,width:8,height:40,background:COLORS.ink}}/>
      <div style={{position:'absolute',left:1000,top:84,width:8,height:40,background:COLORS.ink}}/>
      <div style={{position:'absolute',left:60,top:58,padding:'8px 18px',border:'4px solid '+COLORS.ink,background:COLORS.paper,fontSize:23,fontWeight:900,opacity:enter(40,66)}}>破产费用</div>
      <div style={{position:'absolute',left:540,top:58,padding:'8px 18px',border:'4px solid '+COLORS.ink,background:COLORS.paper,fontSize:23,fontWeight:900,opacity:enter(56,82)}}>共益债务</div>
      <div style={{position:'absolute',left:1040,top:58,padding:'8px 18px',border:'4px solid '+COLORS.ink,background:COLORS.paper,fontSize:23,fontWeight:900,opacity:enter(72,98)}}>普通债权</div>
      <div style={{position:'absolute',left:0,top:100,width:interpolate(flowProgress,[0,1],[0,1000],CLAMP),height:8,background:COLORS.green,opacity:enter(110,132)}}/>
      <div data-stateful-source="bankruptcy-costs-payment-flow" style={{position:'absolute',left:interpolate(flowProgress,[0,1],[0,960],CLAMP),top:82,width:0,height:0,borderLeft:'13px solid transparent',borderRight:'13px solid transparent',borderBottom:'26px solid '+COLORS.red,opacity:flowProgress>0.92?0:1,zIndex:4}}/>
      <div data-final-knowledge="bankruptcy-costs-scene-03-example" style={{position:'absolute',left:0,right:0,bottom:0,display:'grid',gridTemplateColumns:'1fr 1fr',gap:20}}>
        <div style={{padding:'18px 24px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(96,122)}}>
          <div style={{fontSize:25,fontWeight:900,marginBottom:8}}>财产不足费用 → 终结程序</div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>债务人财产不足以清偿破产费用的：终结破产程序，各项破产费用<span style={{background:COLORS.red+'20',padding:'2px 6px',fontWeight:900}}>按比例清偿</span>（例：财产50万，费用100万——诉讼费、薪酬各按比例受偿）</div>
        </div>
        <div style={{padding:'18px 24px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(112,138)}}>
          <div style={{fontSize:25,fontWeight:900,marginBottom:8}}>费用够 · 共益不够</div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>优先清偿全部破产费用，剩余再清偿共益债务；不足以清偿所有共益债务的，各项共益债务<span style={{background:COLORS.gold+'40',padding:'2px 6px',fontWeight:900}}>按比例清偿</span></div>
        </div>
      </div>
      <div data-stateful-terminal="bankruptcy-costs-payment-flow" style={{position:'absolute',left:1080,top:150,padding:'8px 16px',border:'3px solid '+COLORS.ink,background:COLORS.red,color:COLORS.paper,fontSize:20,fontWeight:900,opacity:enter(140,162)}}>先费后债</div>
    </div>
  </Shell>;
};

export const BankruptcyCosts=()=> <AbsoluteFill>
  <TimelineSequence name="01-bankruptcy-costs-scene-01" start={SCENES['bankruptcy-costs-scene-01'].start} duration={SCENES['bankruptcy-costs-scene-01'].duration}><BankruptcyCosts01Scene/></TimelineSequence>
  <TimelineSequence name="02-bankruptcy-costs-scene-02" start={SCENES['bankruptcy-costs-scene-02'].start} duration={SCENES['bankruptcy-costs-scene-02'].duration}><BankruptcyCosts02Scene/></TimelineSequence>
  <TimelineSequence name="03-bankruptcy-costs-scene-03" start={SCENES['bankruptcy-costs-scene-03'].start} duration={SCENES['bankruptcy-costs-scene-03'].duration}><BankruptcyCosts03Scene/></TimelineSequence>
</AbsoluteFill>;
