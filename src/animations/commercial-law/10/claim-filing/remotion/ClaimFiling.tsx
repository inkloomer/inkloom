import type {ReactNode} from 'react';
import {FileText, CheckCircle2, XCircle, Handshake, Banknote, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#F3EEE2', ink:'#24262E', green:'#2E6D4F', red:'#B23A30', gold:'#C9A23C', paper:'#FAF5E9'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.green,color:COLORS.paper}}>{code}</div>
    <div style={{position:'absolute',left:190,right:76,top:46,fontSize:46,fontWeight:900,lineHeight:1.12,borderBottom:'5px solid '+COLORS.gold,paddingBottom:12}}>{title}</div>
    <div style={{position:'absolute',left:76,right:76,top:150,bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

export const ClaimFiling01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="10.1" title="申报范围：老 · 平 · 钱">
    <div data-layout="claim-gate-1" data-visual-anchor="boundary" data-visual-grammar="old-equal-money-test,file-vs-nofile" data-text-treatments="label-block,stamp,external-negation" data-focal-rule="claim-filing-scene-01-rule" data-focal-channels="enclosure,contrast,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="claim-filing-scene-01-gate" style={{position:'absolute',left:0,top:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <FileText size={42} color={COLORS.green}/>
        <div style={{fontSize:28,fontWeight:900}}>三要件：<span style={{background:COLORS.green+'26',padding:'2px 10px'}}>老</span>（受理前产生）＋<span style={{background:COLORS.green+'26',padding:'2px 10px'}}>平</span>（平等民事主体之间）＋<span style={{background:COLORS.green+'26',padding:'2px 10px'}}>钱</span>（合法有效的金钱债权）</div>
      </div>
      <div data-final-knowledge="claim-filing-knowledge-1" style={{position:'absolute',left:0,top:80,width:900,padding:'20px 26px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(28,54)}}>
        <div style={{fontSize:25,fontWeight:900,marginBottom:10}}>申报期限与补充申报</div>
        <div style={{fontSize:22,fontWeight:700,lineHeight:1.55}}>在法院规定的期限内（<span style={{fontWeight:900}}>30日—3个月</span>）向管理人申报；未按期申报的，可在破产财产最后分配前<span style={{background:COLORS.gold+'40',padding:'2px 6px',fontWeight:900}}>补充申报</span>，但已进行的分配不再对其补充分配，审查确认费用由补充申报人承担</div>
      </div>
      <div data-final-knowledge="claim-filing-scene-01-file" style={{position:'absolute',left:0,top:300,width:900,padding:'20px 26px',border:'5px solid '+COLORS.green,background:COLORS.paper,opacity:enter(46,72)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10}}>
          <CheckCircle2 size={36} color={COLORS.green}/>
          <div style={{fontSize:26,fontWeight:900}}>可以申报</div>
        </div>
        <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>未到期的债权（受理时视为到期，且自受理时<span style={{fontWeight:900}}>停止计息</span>）；不确定的债权（附条件、附期限或诉讼仲裁未决）；有担保或无担保的债权；管理人解除待履行合同时相对人的赔偿请求权</div>
      </div>
      <div data-final-knowledge="claim-filing-scene-01-nofile" style={{position:'absolute',right:0,top:80,width:780,padding:'20px 26px',border:'5px dashed '+COLORS.red,background:COLORS.paper,opacity:enter(62,88)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10}}>
          <XCircle size={36} color={COLORS.red}/>
          <div style={{fontSize:26,fontWeight:900,color:COLORS.red}}>不可申报</div>
        </div>
        <div style={{fontSize:22,fontWeight:700,lineHeight:1.55}}>受理后产生的新债（破产费用、共益债务）；无效的或超过诉讼时效的债权；不是债权（罚款、罚金、取回权、债权人参加会议的费用）；<span style={{fontWeight:900}}>职工债权</span>——不必申报，由管理人调查后列出清单予以公示</div>
      </div>
    </div>
  </Shell>;
};

export const ClaimFiling02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="10.1" title="债务人破产时保证人的申报">
    <div data-layout="surety-filing-2" data-visual-anchor="flow-path" data-visual-grammar="paid-vs-unpaid,future-recourse" data-text-treatments="thin-underline,soft-highlight,label-block" data-focal-rule="claim-filing-scene-02-rule" data-focal-channels="connector,contrast,motion" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="claim-filing-knowledge-2" style={{position:'absolute',left:0,right:0,top:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <Handshake size={42} color={COLORS.green}/>
        <div style={{fontSize:28,fontWeight:900}}>债务人破产 · 保证人如何申报</div>
      </div>
      <div style={{position:'absolute',left:320,top:90,width:6,height:110,background:COLORS.ink,opacity:enter(24,48)}}/>
      <div style={{position:'absolute',left:0,top:120,width:320,height:6,background:COLORS.ink,opacity:enter(20,44)}}/>
      <div style={{position:'absolute',left:0,top:80,padding:'12px 22px',border:'4px solid '+COLORS.ink,background:COLORS.paper,fontSize:23,fontWeight:900,opacity:enter(16,42)}}>保证人是否已还债？</div>
      <div style={{position:'absolute',left:326,top:190,width:640,height:6,background:COLORS.ink,opacity:enter(30,54)}}/>
      <div data-final-knowledge="claim-filing-scene-02-branch-0" style={{position:'absolute',left:340,top:220,width:800,padding:'20px 26px',border:'5px solid '+COLORS.green,background:COLORS.paper,opacity:enter(46,72)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8}}>
          <Banknote size={36} color={COLORS.green}/>
          <div style={{fontSize:26,fontWeight:900}}>已还债 → 现实求偿权</div>
        </div>
        <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>保证人已向债权人清偿的，就实际承担的清偿数额申报<span style={{background:COLORS.green+'26',padding:'2px 8px',fontWeight:900}}>现实求偿权</span></div>
      </div>
      <div data-final-knowledge="claim-filing-scene-02-branch-1" style={{position:'absolute',right:24,top:220,width:620,padding:'20px 26px',border:'5px solid '+COLORS.gold,background:COLORS.paper,opacity:enter(62,88)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8}}>
          <Users size={36} color={COLORS.gold}/>
          <div style={{fontSize:26,fontWeight:900}}>未还债 → 将来求偿权</div>
        </div>
        <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>保证人尚未替债务人还款的，可就将来求偿权申报——<span style={{background:COLORS.gold+'40',padding:'2px 6px',fontWeight:900}}>除非债权人已申报全部债权</span></div>
      </div>
      <div data-final-knowledge="claim-filing-scene-02-note" style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.gold,background:COLORS.paper,padding:'14px 24px',opacity:enter(88,114)}}>
        <FileText size={38} color={COLORS.gold}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}>债务人与保证人分别处理——保证人已还则申报现实求偿权，未还则申报将来求偿权</div>
      </div>
    </div>
  </Shell>;
};

export const ClaimFiling03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="10.1" title="保证人破产 与 双破产">
    <div data-layout="dual-filing-3" data-visual-anchor="comparison-axis" data-visual-grammar="surety-bankruptcy,double-bankruptcy" data-text-treatments="label-block,stamp,external-negation" data-focal-rule="claim-filing-scene-03-rule" data-focal-channels="contrast,spatial,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="claim-filing-knowledge-3" style={{position:'absolute',left:0,right:0,top:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#6E6757',opacity:enter(12,36)}}>两种特殊情形</div>
      <div data-final-knowledge="claim-filing-scene-03-surety" style={{position:'absolute',left:24,top:76,width:850,padding:24,border:'5px solid '+COLORS.green,background:COLORS.paper,opacity:enter(28,54),translate:slide(28,54,'-24px 0px')}}>
        <div style={{padding:'8px 18px',background:COLORS.green,color:COLORS.paper,fontSize:27,fontWeight:900,width:'fit-content',marginBottom:12}}>保证人破产</div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55}}>保证债权<span style={{fontWeight:900}}>加速到期</span>，债权人可申报债权；一般保证人无先诉抗辩权，但债权人获得的清偿应<span style={{background:COLORS.green+'26',padding:'2px 6px',fontWeight:900}}>提存</span>，待一般保证责任确定后再按清偿比例确定最终数额；保证人可就实际承担的清偿数额向债务人行使求偿权</div>
      </div>
      <div data-final-knowledge="claim-filing-scene-03-both" style={{position:'absolute',right:24,top:76,width:850,padding:24,border:'5px solid '+COLORS.gold,background:COLORS.paper,opacity:enter(46,72),translate:slide(46,72,'24px 0px')}}>
        <div style={{padding:'8px 18px',background:'#7A5B12',color:COLORS.paper,fontSize:27,fontWeight:900,width:'fit-content',marginBottom:12}}>债务人、保证人均破产</div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55}}>债权人可分别申报债权，分别受偿、互不影响，但受偿额<span style={{fontWeight:900,color:COLORS.red}}>不得超出债权总额</span>；保证人履行保证责任后<span style={{fontWeight:900,color:COLORS.red}}>无求偿权</span>——因债权人已全额申报，再行使求偿权会造成重复申报</div>
      </div>
      <div style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.red,background:COLORS.paper,padding:'14px 24px',opacity:enter(76,104)}}>
        <Banknote size={38} color={COLORS.red}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}>例：清偿比例10%，债权人申报100万可暂时获得10万但应提存；债务人最终偿还80万，保证人只需承担20万，按10%清偿2万，事后向债务人追偿2万</div>
      </div>
    </div>
  </Shell>;
};

export const ClaimFiling=()=> <AbsoluteFill>
  <TimelineSequence name="01-claim-filing-scene-01" start={SCENES['claim-filing-scene-01'].start} duration={SCENES['claim-filing-scene-01'].duration}><ClaimFiling01Scene/></TimelineSequence>
  <TimelineSequence name="02-claim-filing-scene-02" start={SCENES['claim-filing-scene-02'].start} duration={SCENES['claim-filing-scene-02'].duration}><ClaimFiling02Scene/></TimelineSequence>
  <TimelineSequence name="03-claim-filing-scene-03" start={SCENES['claim-filing-scene-03'].start} duration={SCENES['claim-filing-scene-03'].duration}><ClaimFiling03Scene/></TimelineSequence>
</AbsoluteFill>;
