import type {CSSProperties, ReactNode} from 'react';
import {Building2, Landmark, FileCheck2, Scale, ArrowRight} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#EEF1F6', ink:'#20242B', blue:'#2F5FA8', orange:'#C9722E', gray:'#6B7480', paper:'#FFFFFF'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:44,width:112,height:14,background:COLORS.blue}}/>
    <div style={{position:'absolute',left:76,top:66,fontSize:24,fontWeight:800,letterSpacing:4,color:COLORS.gray}}>{code}</div>
    <div style={{position:'absolute',left:204,right:76,top:52,fontSize:46,fontWeight:900,lineHeight:1.12,borderBottom:'5px solid '+COLORS.orange,paddingBottom:12}}>{title}</div>
    <div style={{position:'absolute',left:76,right:76,top:152,bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

export const CompanyClassification01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="01.2" title="分公司 与 子公司">
    <div data-layout="branch-lanes-1" data-visual-anchor="comparison-axis" data-visual-grammar="twin-branch-contrast,personality-split" data-text-treatments="label-block,external-negation,soft-highlight" data-focal-rule="company-classification-scene-01-rule" data-focal-channels="contrast,spatial,icon" style={{position:'absolute',inset:0}}>
      <div style={{position:'absolute',left:0,top:0,bottom:0,width:4,background:COLORS.gray+'66'}}/>
      <div data-final-knowledge="company-classification-knowledge-1" style={{position:'absolute',left:0,right:0,top:8,textAlign:'center',fontSize:26,fontWeight:800,color:COLORS.gray,letterSpacing:6,opacity:enter(12,36)}}>法人资格对照轴</div>
      <div data-final-knowledge="company-classification-scene-01-branch" style={{position:'absolute',left:24,top:86,width:720,padding:26,background:COLORS.paper,borderTop:'10px solid '+COLORS.blue,boxShadow:'0 0 0 3px '+COLORS.ink,opacity:enter(26,52),translate:slide(26,52,'-26px 0px')}}>
        <div style={{display:'flex',alignItems:'center',gap:16,marginBottom:16}}>
          <Building2 size={52} color={COLORS.blue}/>
          <div style={{padding:'10px 22px',background:COLORS.ink,color:COLORS.paper,fontSize:32,fontWeight:900}}>分公司</div>
          <div style={{fontSize:24,fontWeight:800,color:COLORS.gray}}>总公司的分支机构</div>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:14,border:'3px solid '+COLORS.orange,background:COLORS.orange+'18',padding:'14px 18px'}}>
          <div style={{width:40,height:40,border:'3px solid '+COLORS.orange,position:'relative',flexShrink:0}}>
            <div style={{position:'absolute',left:16,top:5,width:4,height:24,background:COLORS.orange,transform:'rotate(45deg)'}}/>
            <div style={{position:'absolute',left:16,top:5,width:4,height:24,background:COLORS.orange,transform:'rotate(-45deg)'}}/>
          </div>
          <div style={{fontSize:30,fontWeight:900,color:COLORS.orange}}>不是独立法人</div>
        </div>
        <div style={{fontSize:22,fontWeight:700,color:COLORS.gray,marginTop:14,lineHeight:1.4}}>分公司设立于总公司名下，不具备独立的法人资格</div>
      </div>
      <div data-final-knowledge="company-classification-scene-01-subsidiary" style={{position:'absolute',right:24,top:86,width:720,padding:26,background:COLORS.paper,borderTop:'10px solid '+COLORS.orange,boxShadow:'0 0 0 3px '+COLORS.ink,opacity:enter(44,70),translate:slide(44,70,'26px 0px')}}>
        <div style={{display:'flex',alignItems:'center',gap:16,marginBottom:16}}>
          <Landmark size={52} color={COLORS.orange}/>
          <div style={{padding:'10px 22px',background:COLORS.ink,color:COLORS.paper,fontSize:32,fontWeight:900}}>子公司</div>
          <div style={{fontSize:24,fontWeight:800,color:COLORS.gray}}>母公司投资设立</div>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:14,border:'3px solid '+COLORS.blue,background:COLORS.blue+'14',padding:'14px 18px'}}>
          <FileCheck2 size={40} color={COLORS.blue}/>
          <div style={{fontSize:30,fontWeight:900,color:COLORS.blue}}>是独立法人</div>
        </div>
        <div style={{fontSize:22,fontWeight:700,color:COLORS.gray,marginTop:14,lineHeight:1.4}}>子公司是母公司投资设立的独立法人主体</div>
      </div>
      <div data-final-knowledge="company-classification-scene-01-duty-branch" style={{position:'absolute',left:24,top:430,width:720,padding:'18px 24px',background:COLORS.blue+'12',border:'3px solid '+COLORS.blue,opacity:enter(66,92)}}>
        <div style={{fontSize:28,fontWeight:900,color:COLORS.blue,marginBottom:8}}><span style={{borderBottom:'4px solid '+COLORS.blue,paddingBottom:2}}>总分责任不分家</span></div>
        <div style={{fontSize:22,fontWeight:700,lineHeight:1.4}}>民事责任由总公司承担</div>
      </div>
      <div data-final-knowledge="company-classification-scene-01-duty-subsidiary" style={{position:'absolute',right:24,top:430,width:720,padding:'18px 24px',background:COLORS.orange+'14',border:'3px solid '+COLORS.orange,opacity:enter(82,108)}}>
        <div style={{fontSize:28,fontWeight:900,color:COLORS.orange,marginBottom:8}}><span style={{borderBottom:'4px solid '+COLORS.orange,paddingBottom:2}}>母子责任相独立</span></div>
        <div style={{fontSize:22,fontWeight:700,lineHeight:1.4}}>母公司只承担有限责任（以认缴出资为限）</div>
      </div>
    </div>
  </Shell>;
};

export const CompanyClassification02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const ClauseRow=({icon,label,left,right,leftColor,rightColor,delay}:{readonly icon:ReactNode;readonly label:string;readonly left:string;readonly right:string;readonly leftColor:string;readonly rightColor:string;readonly delay:number})=>(
    <div style={{display:'grid',gridTemplateColumns:'230px 1fr 1fr',gap:0,border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(delay,delay+26)}}>
      <div style={{padding:'18px',background:COLORS.ink,color:COLORS.paper,display:'grid',gridTemplateColumns:'42px 1fr',gap:12,alignItems:'center'}}>
        {icon}
        <div style={{fontSize:26,fontWeight:900}}>{label}</div>
      </div>
      <div style={{padding:'18px 24px',borderRight:'3px dashed '+COLORS.gray}}>
        <div style={{fontSize:26,fontWeight:900,color:COLORS.blue,marginBottom:8}}>分公司</div>
        <div style={{fontSize:23,fontWeight:700,lineHeight:1.45}}>{left}</div>
      </div>
      <div style={{padding:'18px 24px'}}>
        <div style={{fontSize:26,fontWeight:900,color:COLORS.orange,marginBottom:8}}>子公司</div>
        <div style={{fontSize:23,fontWeight:700,lineHeight:1.45}}>{right}</div>
      </div>
    </div>
  );
  return <Shell code="01.2" title="营业执照 与 诉讼地位">
    <div data-layout="clause-duel-2" data-visual-anchor="role-pair" data-visual-grammar="clause-duel,shared-license" data-text-treatments="thin-underline,label-block,soft-highlight" data-focal-rule="company-classification-scene-02-rule" data-focal-channels="contrast,locator,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="company-classification-knowledge-2" style={{position:'absolute',left:0,right:0,top:0,fontSize:26,fontWeight:900,color:COLORS.gray,letterSpacing:4,opacity:enter(12,36)}}>逐项对照 · 二者均须办理营业执照</div>
      <div data-final-knowledge="company-classification-scene-02-license-branch" style={{position:'absolute',left:0,right:0,top:66}}>
        <ClauseRow icon={<FileCheck2 size={38} color={COLORS.paper}/>} label="营业执照" left="需办理" right="需办理" leftColor={COLORS.blue} rightColor={COLORS.orange} delay={28}/>
      </div>
      <div data-final-knowledge="company-classification-scene-02-license-subsidiary" style={{position:'absolute',left:0,right:0,top:236,padding:'16px 22px',border:'3px solid '+COLORS.blue,background:COLORS.paper,fontSize:24,fontWeight:800,lineHeight:1.45,opacity:enter(52,78)}}>分公司<span style={{background:COLORS.blue+'22',padding:'2px 8px',fontWeight:900}}>还需在所在地申领</span>、<span style={{background:COLORS.orange+'20',padding:'2px 8px',fontWeight:900}}>总公司备案</span>；子公司仅需办理</div>
      <div data-final-knowledge="company-classification-scene-02-suit-branch" style={{position:'absolute',left:0,right:0,top:390}}>
        <ClauseRow icon={<Scale size={38} color={COLORS.paper}/>} label="诉讼" left="独立参诉，具备原被告资格；责任由总公司兜底" right="独立参诉，独立承担责任" leftColor={COLORS.blue} rightColor={COLORS.orange} delay={66}/>
      </div>
      <div data-final-knowledge="company-classification-scene-02-suit-subsidiary" style={{position:'absolute',left:0,right:0,top:560,padding:'16px 22px',border:'3px dashed '+COLORS.orange,background:COLORS.paper,fontSize:24,fontWeight:800,lineHeight:1.45,opacity:enter(82,108)}}>子公司诉讼独立、责任独立——<span style={{background:COLORS.orange+'20',padding:'2px 8px',fontWeight:900}}>总公司不兜底</span></div>
    </div>
  </Shell>;
};

export const CompanyClassification03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const orderProgress=interpolate(frame,[96,216],[0,1],CLAMP);
  const stepStyle=(color:string,delay:number):CSSProperties=>({display:'grid',gridTemplateColumns:'70px 1fr',gap:18,alignItems:'center',padding:'16px 22px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(delay,delay+26)});
  return <Shell code="01.2" title="分公司的执行顺序">
    <div data-layout="execution-chain-3" data-visual-anchor="flow-path" data-visual-grammar="execution-cascade,branch-fallback" data-text-treatments="stamp,thin-underline,soft-highlight" data-focal-rule="company-classification-scene-03-rule" data-focal-channels="connector,motion,enclosure" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="company-classification-knowledge-3" style={{position:'absolute',left:0,right:0,top:0,fontSize:26,fontWeight:900,color:COLORS.gray,letterSpacing:4,opacity:enter(12,36)}}>分公司欠债 → 层层推进</div>
      <div style={{position:'absolute',left:90,right:0,top:64,display:'grid',gap:16}}>
        <div data-final-knowledge="company-classification-scene-03-step-0" style={stepStyle(COLORS.blue,28)}>
          <div style={{width:70,height:70,border:'4px solid '+COLORS.ink,background:COLORS.blue,color:COLORS.paper,display:'grid',placeItems:'center',fontSize:34,fontWeight:900}}>0</div>
          <div><div style={{fontSize:28,fontWeight:900,marginBottom:6}}>分公司财产</div><div style={{fontSize:22,fontWeight:700,color:COLORS.gray,lineHeight:1.4}}>先以分公司财产清偿债务</div></div>
        </div>
        <div data-final-knowledge="company-classification-scene-03-step-1" style={stepStyle(COLORS.ink,52)}>
          <div style={{width:70,height:70,border:'4px solid '+COLORS.ink,background:COLORS.ink,color:COLORS.paper,display:'grid',placeItems:'center',fontSize:34,fontWeight:900}}>1</div>
          <div><div style={{fontSize:28,fontWeight:900,marginBottom:6}}>追加总公司为被执行人</div><div style={{fontSize:22,fontWeight:700,color:COLORS.gray,lineHeight:1.4}}>分公司财产不足时，可追加总公司</div></div>
        </div>
        <div data-final-knowledge="company-classification-scene-03-step-2" style={stepStyle(COLORS.orange,76)}>
          <div style={{width:70,height:70,border:'4px solid '+COLORS.ink,background:COLORS.orange,color:COLORS.paper,display:'grid',placeItems:'center',fontSize:34,fontWeight:900}}>2</div>
          <div><div style={{fontSize:28,fontWeight:900,marginBottom:6}}>直接执行其他分公司财产</div><div style={{fontSize:22,fontWeight:700,color:COLORS.gray,lineHeight:1.4}}>总公司财产仍不能清偿的，直接执行其他分公司财产</div></div>
        </div>
      </div>
      <div style={{position:'absolute',left:38,top:64,bottom:0,width:6,background:COLORS.ink,opacity:enter(100,124)}}/>
      <div style={{position:'absolute',left:38,top:64,width:6,height:interpolate(frame,[96,216],[0,300],CLAMP),background:COLORS.blue}}/>
      <div data-stateful-source="company-classification-execution-order" style={{position:'absolute',left:20,top:interpolate(orderProgress,[0,1],[84,368],CLAMP),width:42,height:42,borderRadius:'50%',background:COLORS.orange,border:'5px solid '+COLORS.ink,opacity:orderProgress>0.92?0:1,zIndex:4}}/>
      <div data-final-knowledge="company-classification-scene-03-mnemonic" style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:18,border:'4px solid '+COLORS.orange,background:COLORS.paper,padding:'16px 24px',opacity:enter(140,168)}}>
        <ArrowRight size={40} color={COLORS.orange}/>
        <div style={{fontSize:30,fontWeight:900,color:COLORS.orange}}>记忆口诀：分 — 总 — 其他分</div>
        <div data-stateful-terminal="company-classification-execution-order" style={{padding:'6px 16px',border:'3px solid '+COLORS.ink,background:COLORS.orange,color:COLORS.paper,fontSize:22,fontWeight:900,opacity:enter(168,188)}}>执行顺序走完</div>
      </div>
    </div>
  </Shell>;
};

export const CompanyClassification=()=> <AbsoluteFill>
  <TimelineSequence name="01-company-classification-scene-01" start={SCENES['company-classification-scene-01'].start} duration={SCENES['company-classification-scene-01'].duration}><CompanyClassification01Scene/></TimelineSequence>
  <TimelineSequence name="02-company-classification-scene-02" start={SCENES['company-classification-scene-02'].start} duration={SCENES['company-classification-scene-02'].duration}><CompanyClassification02Scene/></TimelineSequence>
  <TimelineSequence name="03-company-classification-scene-03" start={SCENES['company-classification-scene-03'].start} duration={SCENES['company-classification-scene-03'].duration}><CompanyClassification03Scene/></TimelineSequence>
</AbsoluteFill>;
