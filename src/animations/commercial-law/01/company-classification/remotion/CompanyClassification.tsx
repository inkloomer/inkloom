import type {CSSProperties, ReactNode} from 'react';
import {Building2, Landmark, FileCheck2, Scale, ArrowRight, Link, Unlink, MapPin, Gavel, CircleDollarSign, ListOrdered} from 'lucide-react';
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
      <div data-final-knowledge="company-classification-scene-01-branch" style={{position:'absolute',left:24,top:86,bottom:230,width:720,padding:'20px 26px',background:COLORS.blue+'66',borderTop:'10px solid '+COLORS.blue,boxShadow:'0 0 0 3px '+COLORS.ink,opacity:enter(26,52),translate:slide(26,52,'-26px 0px'),display:'flex',flexDirection:'column',justifyContent:'center',gap:12}}>
        <Building2 size={130} color={COLORS.blue} strokeWidth={1.2} style={{position:'absolute',right:2,bottom:-2,opacity:0.08,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:16}}>
          <Building2 size={52} color={COLORS.blue}/>
          <div style={{padding:'10px 22px',background:COLORS.ink,color:COLORS.paper,fontSize:32,fontWeight:900}}>分公司</div>
          <div style={{fontSize:24,fontWeight:800,color:COLORS.blue,background:COLORS.blue+'14',padding:'4px 12px'}}>总公司的分支机构</div>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:14,border:'3px solid '+COLORS.orange,background:COLORS.orange+'18',padding:'14px 18px'}}>
          <div style={{width:40,height:40,border:'3px solid '+COLORS.orange,position:'relative',flexShrink:0}}>
            <div style={{position:'absolute',left:16,top:5,width:4,height:24,background:COLORS.orange,transform:'rotate(45deg)'}}/>
            <div style={{position:'absolute',left:16,top:5,width:4,height:24,background:COLORS.orange,transform:'rotate(-45deg)'}}/>
          </div>
          <div style={{fontSize:30,fontWeight:900,color:COLORS.orange}}>不是独立法人</div>
        </div>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45,padding:'10px 14px',background:COLORS.paper,borderLeft:'5px solid '+COLORS.blue,opacity:enter(52,74)}}>设立于<span style={{fontWeight:900}}>总公司名下</span>，领取<span style={{fontWeight:900}}>营业执照</span></div>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45,padding:'10px 14px',background:COLORS.paper,borderLeft:'5px solid '+COLORS.blue,opacity:enter(62,84)}}><span style={{fontWeight:900,color:COLORS.orange,borderBottom:'3px solid '+COLORS.orange,paddingBottom:1}}>不具备独立的法人资格</span></div>
      </div>
      <div data-final-knowledge="company-classification-scene-01-subsidiary" style={{position:'absolute',right:24,top:86,bottom:230,width:720,padding:'20px 26px',background:COLORS.orange+'66',borderTop:'10px solid '+COLORS.orange,boxShadow:'0 0 0 3px '+COLORS.ink,opacity:enter(44,70),translate:slide(44,70,'26px 0px'),display:'flex',flexDirection:'column',justifyContent:'center',gap:12}}>
        <Landmark size={130} color={COLORS.orange} strokeWidth={1.2} style={{position:'absolute',right:2,bottom:-2,opacity:0.08,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:16}}>
          <Landmark size={52} color={COLORS.orange}/>
          <div style={{padding:'10px 22px',background:COLORS.ink,color:COLORS.paper,fontSize:32,fontWeight:900}}>子公司</div>
          <div style={{fontSize:24,fontWeight:800,color:COLORS.orange,background:COLORS.orange+'16',padding:'4px 12px'}}>母公司投资设立</div>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:14,border:'3px solid '+COLORS.blue,background:COLORS.blue+'14',padding:'14px 18px'}}>
          <FileCheck2 size={40} color={COLORS.blue}/>
          <div style={{fontSize:30,fontWeight:900,color:COLORS.blue}}>是独立法人</div>
        </div>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45,padding:'10px 14px',background:COLORS.paper,borderLeft:'5px solid '+COLORS.orange,opacity:enter(70,92)}}>母公司投资设立，<span style={{fontWeight:900}}>独立经营</span></div>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45,padding:'10px 14px',background:COLORS.paper,borderLeft:'5px solid '+COLORS.orange,opacity:enter(80,102)}}>是<span style={{fontWeight:900,color:COLORS.blue,background:COLORS.blue+'16',padding:'2px 8px'}}>独立法人主体</span>，领营业执照</div>
      </div>
      <div data-final-knowledge="company-classification-scene-01-duty-branch" style={{position:'absolute',left:24,top:510,bottom:0,width:720,padding:'20px 24px',background:COLORS.blue+'4D',border:'3px solid '+COLORS.blue,opacity:enter(66,92),translate:interpolate(frame,[66,92],['0px 20px','0px 0px'],CLAMP),display:'flex',alignItems:'center',gap:16}}>
        <Link size={40} color={COLORS.blue}/>
        <div>
          <div style={{fontSize:29,fontWeight:900,color:COLORS.blue,marginBottom:8}}><span style={{borderBottom:'4px solid '+COLORS.blue,paddingBottom:2}}>总分责任不分家</span></div>
          <div style={{fontSize:23,fontWeight:700,lineHeight:1.5}}>民事责任由总公司承担</div>
        </div>
      </div>
      <div data-final-knowledge="company-classification-scene-01-duty-subsidiary" style={{position:'absolute',right:24,top:510,bottom:0,width:720,padding:'20px 24px',background:COLORS.orange+'4D',border:'3px solid '+COLORS.orange,opacity:enter(82,108),translate:interpolate(frame,[82,108],['0px 20px','0px 0px'],CLAMP),display:'flex',alignItems:'center',gap:16}}>
        <Unlink size={40} color={COLORS.orange}/>
        <div>
          <div style={{fontSize:29,fontWeight:900,color:COLORS.orange,marginBottom:8}}><span style={{borderBottom:'4px solid '+COLORS.orange,paddingBottom:2}}>母子责任相独立</span></div>
          <div style={{fontSize:23,fontWeight:700,lineHeight:1.5}}>母公司只承担有限责任（以认缴出资为限）</div>
        </div>
      </div>
    </div>
  </Shell>;
};

export const CompanyClassification02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const ClauseRow=({icon,label,left,right,delay}:{readonly icon:ReactNode;readonly label:string;readonly left:ReactNode;readonly right:ReactNode;readonly delay:number})=>(
    <div style={{display:'grid',gridTemplateColumns:'230px 1fr 1fr',gap:0,border:'4px solid '+COLORS.ink,background:COLORS.paper}}>
      <div style={{padding:'28px 20px',background:COLORS.ink,color:COLORS.paper,display:'grid',gridTemplateColumns:'42px 1fr',gap:12,alignItems:'center',opacity:enter(delay,delay+16),translate:interpolate(frame,[delay,delay+16],['-18px 0px','0px 0px'],CLAMP)}}>
        {icon}
        <div style={{fontSize:27,fontWeight:900}}>{label}</div>
      </div>
      <div style={{padding:'36px 28px',borderRight:'3px dashed '+COLORS.gray,background:COLORS.blue+'66',opacity:enter(delay+10,delay+30),translate:interpolate(frame,[delay+10,delay+30],['0px 16px','0px 0px'],CLAMP)}}>
        <div style={{fontSize:27,fontWeight:900,color:COLORS.blue,marginBottom:10}}>分公司</div>
        <div style={{fontSize:25,fontWeight:700,lineHeight:1.55}}>{left}</div>
      </div>
      <div style={{padding:'36px 28px',background:COLORS.orange+'66',opacity:enter(delay+22,delay+42),translate:interpolate(frame,[delay+22,delay+42],['0px 16px','0px 0px'],CLAMP)}}>
        <div style={{fontSize:27,fontWeight:900,color:COLORS.orange,marginBottom:10}}>子公司</div>
        <div style={{fontSize:25,fontWeight:700,lineHeight:1.55}}>{right}</div>
      </div>
    </div>
  );
  return <Shell code="01.2" title="营业执照 与 诉讼地位">
    <div data-layout="clause-duel-2" data-visual-anchor="role-pair" data-visual-grammar="clause-duel,shared-license" data-text-treatments="thin-underline,label-block,soft-highlight" data-focal-rule="company-classification-scene-02-rule" data-focal-channels="contrast,locator,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="company-classification-knowledge-2" style={{position:'absolute',left:0,right:0,top:0,fontSize:26,fontWeight:900,color:COLORS.gray,letterSpacing:4,opacity:enter(12,36)}}>逐项对照 · 二者均须办理营业执照</div>
      <div data-final-knowledge="company-classification-scene-02-license-branch" style={{position:'absolute',left:0,right:0,top:66}}>
        <ClauseRow icon={<FileCheck2 size={40} color={COLORS.paper}/>} label="营业执照" delay={28} left={<span style={{fontWeight:900,borderBottom:'4px solid '+COLORS.blue,paddingBottom:2}}>需办理</span>} right={<span style={{fontWeight:900,borderBottom:'4px solid '+COLORS.orange,paddingBottom:2}}>需办理</span>}/>
      </div>
      <div data-final-knowledge="company-classification-scene-02-license-subsidiary" style={{position:'absolute',left:0,right:0,top:300,padding:'24px 22px',border:'3px solid '+COLORS.blue,background:COLORS.blue+'66',fontSize:25,fontWeight:800,lineHeight:1.5,opacity:enter(52,78),display:'flex',alignItems:'center',gap:14}}><MapPin size={34} color={COLORS.blue}/><span>分公司<span style={{background:COLORS.blue+'22',padding:'2px 8px',fontWeight:900}}>还需在所在地申领</span>、<span style={{background:COLORS.orange+'20',padding:'2px 8px',fontWeight:900}}>总公司备案</span>；子公司仅需办理</span></div>
      <div data-final-knowledge="company-classification-scene-02-suit-branch" style={{position:'absolute',left:0,right:0,top:430}}>
        <ClauseRow icon={<Scale size={40} color={COLORS.paper}/>} label="诉讼" delay={66} left={<span>独立参诉，<span style={{fontWeight:900,background:COLORS.blue+'1E',padding:'2px 6px'}}>具备原被告资格</span>；责任由<span style={{fontWeight:900,color:COLORS.blue}}>总公司兜底</span></span>} right={<span>独立参诉，<span style={{fontWeight:900,background:COLORS.orange+'1C',padding:'2px 6px'}}>独立承担责任</span></span>}/>
      </div>
      <div data-final-knowledge="company-classification-scene-02-suit-subsidiary" style={{position:'absolute',left:0,right:0,top:720,bottom:0,padding:'24px 22px',border:'3px dashed '+COLORS.orange,background:COLORS.orange+'66',fontSize:25,fontWeight:800,lineHeight:1.5,opacity:enter(82,108),display:'flex',alignItems:'center',gap:14}}>
        <Gavel size={130} color={COLORS.orange} strokeWidth={1.2} style={{position:'absolute',right:10,bottom:-6,opacity:0.08,pointerEvents:'none'}}/>
        <Gavel size={34} color={COLORS.orange}/><span>子公司诉讼独立、责任独立——<span style={{background:COLORS.orange+'20',padding:'2px 8px',fontWeight:900}}>总公司不兜底</span></span>
      </div>
    </div>
  </Shell>;
};

export const CompanyClassification03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const orderProgress=interpolate(frame,[96,216],[0,1],CLAMP);
  const stepStyle=(color:string,delay:number):CSSProperties=>({position:'relative',display:'grid',gridTemplateColumns:'70px 1fr',gap:18,alignItems:'center',padding:'20px 22px',border:'4px solid '+COLORS.ink,background:color+'55',opacity:enter(delay,delay+26),translate:interpolate(frame,[delay,delay+26],['0px 22px','0px 0px'],CLAMP)});
  return <Shell code="01.2" title="分公司的执行顺序">
    <div data-layout="execution-chain-3" data-visual-anchor="flow-path" data-visual-grammar="execution-cascade,branch-fallback" data-text-treatments="stamp,thin-underline,soft-highlight" data-focal-rule="company-classification-scene-03-rule" data-focal-channels="connector,motion,enclosure" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="company-classification-knowledge-3" style={{position:'absolute',left:0,right:0,top:0,fontSize:26,fontWeight:900,color:COLORS.gray,letterSpacing:4,opacity:enter(12,36)}}>分公司欠债 → 层层推进</div>
      <div style={{position:'absolute',left:90,right:0,top:64,display:'grid',gap:18}}>
        <div data-final-knowledge="company-classification-scene-03-step-0" style={{...stepStyle(COLORS.blue,28),gridTemplateColumns:'70px 56px 1fr',minHeight:150}}>
          <CircleDollarSign size={110} color={COLORS.blue} strokeWidth={1.2} style={{position:'absolute',right:8,bottom:-2,opacity:0.08,pointerEvents:'none'}}/>
          <div style={{width:70,height:70,border:'4px solid '+COLORS.ink,background:COLORS.blue,color:COLORS.paper,display:'grid',placeItems:'center',fontSize:34,fontWeight:900}}>0</div>
          <CircleDollarSign size={48} color={COLORS.blue}/>
          <div><div style={{fontSize:29,fontWeight:900,marginBottom:8}}>分公司财产</div><div style={{fontSize:23,fontWeight:700,color:COLORS.gray,lineHeight:1.5}}>先以<span style={{fontWeight:900,color:COLORS.blue,background:COLORS.blue+'16',padding:'1px 6px'}}>分公司财产</span>清偿债务</div></div>
        </div>
        <div data-final-knowledge="company-classification-scene-03-step-1" style={{...stepStyle(COLORS.ink,52),gridTemplateColumns:'70px 56px 1fr',minHeight:150}}>
          <Building2 size={110} color={COLORS.ink} strokeWidth={1.2} style={{position:'absolute',right:8,bottom:-2,opacity:0.08,pointerEvents:'none'}}/>
          <div style={{width:70,height:70,border:'4px solid '+COLORS.ink,background:COLORS.ink,color:COLORS.paper,display:'grid',placeItems:'center',fontSize:34,fontWeight:900}}>1</div>
          <Building2 size={48} color={COLORS.ink}/>
          <div><div style={{fontSize:29,fontWeight:900,marginBottom:8}}>追加总公司为被执行人</div><div style={{fontSize:23,fontWeight:700,color:COLORS.gray,lineHeight:1.5}}>分公司财产<span style={{fontWeight:900,color:COLORS.orange,background:COLORS.orange+'16',padding:'1px 6px'}}>不足</span>时，可<span style={{fontWeight:900,color:COLORS.ink,borderBottom:'3px solid '+COLORS.orange,paddingBottom:1}}>追加总公司</span></div></div>
        </div>
        <div data-final-knowledge="company-classification-scene-03-step-2" style={{...stepStyle(COLORS.orange,76),gridTemplateColumns:'70px 56px 1fr',minHeight:150}}>
          <Landmark size={110} color={COLORS.orange} strokeWidth={1.2} style={{position:'absolute',right:8,bottom:-2,opacity:0.08,pointerEvents:'none'}}/>
          <div style={{width:70,height:70,border:'4px solid '+COLORS.ink,background:COLORS.orange,color:COLORS.paper,display:'grid',placeItems:'center',fontSize:34,fontWeight:900}}>2</div>
          <Landmark size={48} color={COLORS.orange}/>
          <div><div style={{fontSize:29,fontWeight:900,marginBottom:8}}>直接执行其他分公司财产</div><div style={{fontSize:23,fontWeight:700,color:COLORS.gray,lineHeight:1.5}}>总公司财产<span style={{fontWeight:900,color:COLORS.blue,background:COLORS.blue+'14',padding:'1px 6px'}}>仍不能清偿</span>的，直接执行<span style={{fontWeight:900,color:COLORS.orange}}>其他分公司财产</span></div></div>
        </div>
      </div>
      <div style={{position:'absolute',left:38,top:64,bottom:110,width:6,background:COLORS.ink,opacity:enter(100,124)}}/>
      <div style={{position:'absolute',left:38,top:64,width:6,height:interpolate(frame,[96,216],[0,380],CLAMP),background:COLORS.blue}}/>
      <div data-stateful-source="company-classification-execution-order" style={{position:'absolute',left:20,top:interpolate(orderProgress,[0,1],[84,430],CLAMP),width:42,height:42,borderRadius:'50%',background:COLORS.orange,border:'5px solid '+COLORS.ink,opacity:orderProgress>0.92?0:1,zIndex:4}}/>
      <div data-final-knowledge="company-classification-scene-03-mnemonic" style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:18,border:'4px solid '+COLORS.orange,background:COLORS.orange+'44',padding:'16px 24px',opacity:enter(140,168)}}>
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
