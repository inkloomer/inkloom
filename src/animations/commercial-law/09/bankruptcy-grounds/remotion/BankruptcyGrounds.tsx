import type {ReactNode} from 'react';
import {AlertTriangle, Wallet, TrendingDown, UserX, Gavel, Flame, RefreshCw, ShieldCheck} from 'lucide-react';
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

export const BankruptcyGrounds01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="09.1" title="破产原因的三项判定">
    <div data-layout="diagnosis-triad-1" data-visual-anchor="flow-path" data-visual-grammar="two-condition-test,reorganization-only-branch" data-text-treatments="label-block,thin-underline,soft-highlight" data-focal-rule="bankruptcy-grounds-scene-01-rule" data-focal-channels="connector,contrast,motion" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="bankruptcy-grounds-knowledge-1" style={{position:'absolute',left:0,right:0,top:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <AlertTriangle size={42} color={COLORS.red}/>
        <div style={{fontSize:28,fontWeight:900}}>破产原因 / 重整原因</div>
      </div>
      <div style={{position:'absolute',left:60,top:100,width:300,height:6,background:COLORS.ink,opacity:enter(24,48)}}/>
      <div style={{position:'absolute',left:0,top:80,padding:'12px 22px',border:'4px solid '+COLORS.ink,background:COLORS.paper,fontSize:25,fontWeight:900,opacity:enter(20,46)}}>不能清偿到期债务</div>
      <div style={{position:'absolute',left:390,top:80,width:6,height:66,background:COLORS.ink,opacity:enter(30,54)}}/>
      <div style={{position:'absolute',left:396,top:100,width:180,height:6,background:COLORS.ink,opacity:enter(36,60)}}/>
      <div data-final-knowledge="bankruptcy-grounds-scene-01-branch-0" style={{position:'absolute',left:600,top:20,width:560,padding:'20px 26px',border:'5px solid '+COLORS.green,background:COLORS.paper,opacity:enter(42,68)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8}}>
          <Wallet size={36} color={COLORS.green}/>
          <div style={{fontSize:26,fontWeight:900}}>＋ 资不抵债</div>
        </div>
        <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>账面资产小于负债 → 可启动<span style={{background:COLORS.green+'26',padding:'2px 8px',fontWeight:900}}>清算/和解/重整</span></div>
      </div>
      <div data-final-knowledge="bankruptcy-grounds-scene-01-branch-1" style={{position:'absolute',left:600,top:230,width:560,padding:'20px 26px',border:'5px solid '+COLORS.red,background:COLORS.paper,opacity:enter(58,84)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8}}>
          <TrendingDown size={36} color={COLORS.red}/>
          <div style={{fontSize:26,fontWeight:900}}>＋ 明显缺乏清偿能力</div>
        </div>
        <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>账面资产大于负债但没钱可用 → 可启动<span style={{background:COLORS.red+'20',padding:'2px 8px',fontWeight:900}}>清算/和解/重整</span></div>
      </div>
      <div data-final-knowledge="bankruptcy-grounds-scene-01-branch-2" style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:18,border:'5px solid '+COLORS.gold,background:COLORS.paper,padding:'16px 26px',opacity:enter(76,104)}}>
        <Flame size={40} color={COLORS.gold}/>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.5}}>有明显丧失清偿能力可能的（尚未出现不能清偿的客观事实，但已存在经营危机）——<span style={{background:COLORS.gold+'40',padding:'2px 8px',fontWeight:900}}>仅能启动重整</span>，不能清算或和解</div>
        <div style={{marginLeft:'auto',padding:'8px 18px',border:'3px solid '+COLORS.ink,background:COLORS.gold,color:COLORS.paper,fontSize:21,fontWeight:900,transform:'rotate(-2deg)'}}>仅重整</div>
      </div>
    </div>
  </Shell>;
};

export const BankruptcyGrounds02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="09.1" title="明显缺乏清偿能力的四种情形">
    <div data-layout="insolvency-four-2" data-visual-anchor="typographic-sequence" data-visual-grammar="four-signs-registry,mnemonic-chain" data-text-treatments="stamp,soft-highlight,external-negation" data-focal-rule="bankruptcy-grounds-scene-02-rule" data-focal-channels="enclosure,motion,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="bankruptcy-grounds-knowledge-2" style={{position:'absolute',left:0,right:0,top:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <AlertTriangle size={42} color={COLORS.red}/>
        <div style={{fontSize:28,fontWeight:900}}>口诀：没现钱 · 没人管 · 强执完 · 扭亏难</div>
      </div>
      <div style={{position:'absolute',left:0,right:0,top:80,display:'grid',gridTemplateColumns:'repeat(4,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="bankruptcy-grounds-scene-02-sign-0" style={{padding:'20px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.red,background:COLORS.paper,minHeight:230,opacity:enter(28,54)}}>
          <div style={{fontSize:27,fontWeight:900,marginBottom:10}}>没现钱</div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>财产<span style={{fontWeight:900}}>不能变现</span>——账面资产大于负债，但实际上没钱可用</div>
        </div>
        <div data-final-knowledge="bankruptcy-grounds-scene-02-sign-1" style={{padding:'20px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.red,background:COLORS.paper,minHeight:230,opacity:enter(44,70)}}>
          <div style={{fontSize:27,fontWeight:900,marginBottom:10}}>没人管</div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}><span style={{fontWeight:900}}>法定代表人下落不明</span>且无其他人员管理财产</div>
        </div>
        <div data-final-knowledge="bankruptcy-grounds-scene-02-sign-2" style={{padding:'20px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.red,background:COLORS.paper,minHeight:230,opacity:enter(60,86)}}>
          <div style={{fontSize:27,fontWeight:900,marginBottom:10}}>强执完</div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>经<span style={{fontWeight:900}}>法院强制执行</span>也无法清偿</div>
        </div>
        <div data-final-knowledge="bankruptcy-grounds-scene-02-sign-3" style={{padding:'20px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.red,background:COLORS.paper,minHeight:230,opacity:enter(76,102)}}>
          <div style={{fontSize:27,fontWeight:900,marginBottom:10}}>扭亏难</div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}><span style={{fontWeight:900}}>长期亏损</span>且扭亏困难</div>
        </div>
      </div>
      <div style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.gold,background:COLORS.paper,padding:'14px 24px',opacity:enter(100,126)}}>
        <RefreshCw size={38} color={COLORS.gold}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}>四种情形均在<span style={{fontWeight:900}}>账面资产大于负债</span>时仍可认定缺乏清偿能力——例如财产不能变现即可申请破产</div>
      </div>
    </div>
  </Shell>;
};

export const BankruptcyGrounds03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const boundaryProgress=interpolate(frame,[96,164],[0,1],CLAMP);
  return <Shell code="09.1" title="仅看债务人自身">
    <div data-layout="debtor-only-3" data-visual-anchor="boundary" data-visual-grammar="debtor-only-view,guarantor-excluded" data-text-treatments="external-negation,label-block,soft-highlight" data-focal-rule="bankruptcy-grounds-scene-03-rule" data-focal-channels="enclosure,contrast,spatial" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="bankruptcy-grounds-knowledge-3" style={{position:'absolute',left:0,right:0,top:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#5C6B64',opacity:enter(12,36)}}>是否具有破产原因——仅看债务人自身</div>
      <div data-final-knowledge="bankruptcy-grounds-scene-03-inside" style={{position:'absolute',left:0,top:90,width:800,padding:'24px 28px',border:'5px solid '+COLORS.green,background:COLORS.paper,opacity:enter(28,54)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
          <ShieldCheck size={40} color={COLORS.green}/>
          <div style={{fontSize:27,fontWeight:900}}>诊断视野：债务人自身</div>
        </div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55}}>例：甲公司向乙借款500万元，丙公司提供连带保证。借款到期，甲公司以资金不足为由拒绝清偿——乙申请甲公司破产，甲公司<span style={{background:COLORS.green+'26',padding:'2px 6px',fontWeight:900}}>不能以丙公司有还款能力为由抗辩</span>不具有破产原因</div>
      </div>
      <div data-final-knowledge="bankruptcy-grounds-scene-03-outside" style={{position:'absolute',right:0,top:90,width:800,padding:'24px 28px',border:'5px dashed '+COLORS.red,background:COLORS.paper,opacity:enter(46,72)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
          <UserX size={40} color={COLORS.red}/>
          <div style={{fontSize:27,fontWeight:900,color:COLORS.red}}>视野之外：第三人</div>
        </div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55}}>第三人（如保证人）有还款能力的，<span style={{fontWeight:900,color:COLORS.red}}>不影响</span>破产原因的认定——他人有无能力无关</div>
      </div>
      <div style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.ink,background:COLORS.paper,padding:'14px 24px',opacity:enter(84,112)}}>
        <Gavel size={38} color={COLORS.gold}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}>结论：<span style={{background:COLORS.gold+'40',padding:'2px 8px',fontWeight:900}}>他人无关</span>——是否具备破产原因只看债务人自己，保证人的清偿能力不改变认定</div>
      </div>
    </div>
  </Shell>;
};

export const BankruptcyGrounds=()=> <AbsoluteFill>
  <TimelineSequence name="01-bankruptcy-grounds-scene-01" start={SCENES['bankruptcy-grounds-scene-01'].start} duration={SCENES['bankruptcy-grounds-scene-01'].duration}><BankruptcyGrounds01Scene/></TimelineSequence>
  <TimelineSequence name="02-bankruptcy-grounds-scene-02" start={SCENES['bankruptcy-grounds-scene-02'].start} duration={SCENES['bankruptcy-grounds-scene-02'].duration}><BankruptcyGrounds02Scene/></TimelineSequence>
  <TimelineSequence name="03-bankruptcy-grounds-scene-03" start={SCENES['bankruptcy-grounds-scene-03'].start} duration={SCENES['bankruptcy-grounds-scene-03'].duration}><BankruptcyGrounds03Scene/></TimelineSequence>
</AbsoluteFill>;
