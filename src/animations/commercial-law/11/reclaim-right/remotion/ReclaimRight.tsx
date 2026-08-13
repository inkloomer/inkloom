import type {ReactNode} from 'react';
import {PackageSearch, CalendarClock, Lock, Leaf, Truck, FileText, Banknote} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#EFF2EC', ink:'#232B26', green:'#2E6D4F', orange:'#C2542B', gold:'#C08A2D', paper:'#F8FAF5'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.green,color:COLORS.paper}}>{code}</div>
    <div style={{position:'absolute',left:190,right:76,top:46,fontSize:46,fontWeight:900,lineHeight:1.12,borderBottom:'5px solid '+COLORS.orange,paddingBottom:12}}>{title}</div>
    <div style={{position:'absolute',left:76,right:76,top:150,bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

export const ReclaimRight01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="11.3" title="取回权的总规则">
    <div data-layout="retrieval-rules-1" data-visual-anchor="boundary" data-visual-grammar="retrieval-deadline,unpaid-fee-lien" data-text-treatments="label-block,thin-underline,soft-highlight" data-focal-rule="reclaim-right-scene-01-rule" data-focal-channels="enclosure,locator,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="reclaim-right-knowledge-1" style={{position:'absolute',left:0,right:0,top:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <PackageSearch size={42} color={COLORS.green}/>
        <div style={{fontSize:28,fontWeight:900}}>对不属于债务人的财产，所有权人可通过管理人<span style={{background:COLORS.green+'26',padding:'2px 10px'}}>予以取回</span></div>
      </div>
      <div style={{position:'absolute',left:0,right:0,top:80,display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="reclaim-right-scene-01-deadline" style={{padding:'20px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.green,background:COLORS.paper,minHeight:240,opacity:enter(28,54)}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10}}>
            <CalendarClock size={36} color={COLORS.green}/>
            <div style={{fontSize:26,fontWeight:900}}>取回时点</div>
          </div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.55}}>在破产财产变价方案、和解协议、重整计划草案提交债权人会议<span style={{fontWeight:900}}>表决前</span>取回；过期仍可取回，但需支付迟延行使取回权所增加的费用</div>
        </div>
        <div data-final-knowledge="reclaim-right-scene-01-fee" style={{padding:'20px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.gold,background:COLORS.paper,minHeight:240,opacity:enter(44,70)}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10}}>
            <Lock size={36} color={COLORS.gold}/>
            <div style={{fontSize:26,fontWeight:900}}>费用未付</div>
          </div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.55}}>权利人未支付相关加工费、保管费、委托费等费用的，管理人可<span style={{fontWeight:900}}>拒绝取回</span>，并行使留置权</div>
        </div>
        <div data-final-knowledge="reclaim-right-scene-01-perishable" style={{padding:'20px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.orange,background:COLORS.paper,minHeight:240,opacity:enter(60,86)}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10}}>
            <Leaf size={36} color={COLORS.orange}/>
            <div style={{fontSize:26,fontWeight:900}}>鲜活易腐</div>
          </div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.55}}>鲜活易腐等不易保管、不及时变现价值将严重贬损的财产：管理人应及时<span style={{fontWeight:900}}>变价并提存变价款</span>，权利人可取回变价款</div>
        </div>
      </div>
      <div style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.green,background:COLORS.paper,padding:'14px 24px',opacity:enter(86,112)}}>
        <PackageSearch size={38} color={COLORS.green}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}>例：债务人因保管、借用、租赁等占有、使用的他人财产，他人可以取回</div>
      </div>
    </div>
  </Shell>;
};

export const ReclaimRight02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="11.3" title="违法转让 · 毁损灭失">
    <div data-layout="loss-split-2" data-visual-anchor="comparison-axis" data-visual-grammar="pre-acceptance-ordinary,post-acceptance-common" data-text-treatments="soft-highlight,stamp,external-negation" data-focal-rule="reclaim-right-scene-02-rule" data-focal-channels="contrast,connector,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="reclaim-right-knowledge-2" style={{position:'absolute',left:0,right:0,top:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#5C6B64',opacity:enter(12,36)}}>损失规则：受理前 → 普通债权 · 受理后 → 共益债务</div>
      <div data-final-knowledge="reclaim-right-scene-02-branch-0" style={{position:'absolute',left:24,top:80,width:850,padding:'24px 28px',border:'5px solid '+COLORS.orange,background:COLORS.paper,opacity:enter(28,54),translate:slide(28,54,'-24px 0px')}}>
        <div style={{fontSize:27,fontWeight:900,marginBottom:12}}>违法转让</div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55}}>第三人<span style={{background:COLORS.gold+'40',padding:'2px 6px',fontWeight:900}}>善意取得</span>：权利人无法取回——损失按受理前普通债权/受理后共益债务；第三人<span style={{fontWeight:900,color:COLORS.orange}}>未善意取得</span>：权利人可以取回，第三人损失同上</div>
      </div>
      <div data-final-knowledge="reclaim-right-scene-02-branch-1" style={{position:'absolute',right:24,top:80,width:850,padding:'24px 28px',border:'5px solid '+COLORS.red,background:COLORS.paper,opacity:enter(46,72),translate:slide(46,72,'24px 0px')}}>
        <div style={{fontSize:27,fontWeight:900,marginBottom:12}}>毁损灭失</div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55}}>保险金、赔偿金、代偿物尚未交付，或虽已交付但能与债务人财产<span style={{fontWeight:900}}>区分</span>：<span style={{fontWeight:900}}>可取回</span>；已交付且<span style={{background:COLORS.red+'20',padding:'2px 6px',fontWeight:900}}>无法区分</span>：不可取回</div>
      </div>
      <div style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.ink,background:COLORS.paper,padding:'14px 24px',opacity:enter(76,104)}}>
        <Banknote size={38} color={COLORS.gold}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}>例：赔偿金已交付且无法与公司财产区分——不能取回；毁损灭失发生在受理前，损失按<span style={{background:COLORS.gold+'40',padding:'2px 6px',fontWeight:900}}>普通破产债权</span>清偿</div>
      </div>
    </div>
  </Shell>;
};

export const ReclaimRight03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="11.3" title="在途货物">
    <div data-layout="in-transit-3" data-visual-anchor="flow-path" data-visual-grammar="in-transit-claim,arrival-report-only" data-text-treatments="thin-underline,stamp,soft-highlight" data-focal-rule="reclaim-right-scene-03-rule" data-focal-channels="connector,motion,contrast" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="reclaim-right-knowledge-3" style={{position:'absolute',left:0,right:0,top:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <Truck size={42} color={COLORS.green}/>
        <div style={{fontSize:27,fontWeight:900}}>前提：破产受理时，债务人<span style={{fontWeight:900}}>尚未收货</span>＋<span style={{fontWeight:900}}>未付清</span>全部价款</div>
      </div>
      <div style={{position:'absolute',left:320,top:100,width:6,height:90,background:COLORS.ink,opacity:enter(24,48)}}/>
      <div style={{position:'absolute',left:0,top:120,width:320,height:6,background:COLORS.ink,opacity:enter(20,44)}}/>
      <div style={{position:'absolute',left:0,top:80,padding:'12px 22px',border:'4px solid '+COLORS.ink,background:COLORS.paper,fontSize:23,fontWeight:900,opacity:enter(16,42)}}>出卖人是否主张取回？</div>
      <div style={{position:'absolute',left:326,top:180,width:700,height:6,background:COLORS.ink,opacity:enter(30,54)}}/>
      <div data-final-knowledge="reclaim-right-scene-03-claimed" style={{position:'absolute',left:340,top:210,width:820,padding:'20px 26px',border:'5px solid '+COLORS.green,background:COLORS.paper,opacity:enter(46,72)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8}}>
          <PackageSearch size={36} color={COLORS.green}/>
          <div style={{fontSize:26,fontWeight:900}}>已主张取回（但未实现）</div>
        </div>
        <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>货到管理人后，<span style={{background:COLORS.green+'26',padding:'2px 8px',fontWeight:900}}>仍可取回</span>——出卖人可解除合同＋主张取回</div>
      </div>
      <div data-final-knowledge="reclaim-right-scene-03-unclaimed" style={{position:'absolute',right:24,top:210,width:620,padding:'20px 26px',border:'5px dashed '+COLORS.orange,background:COLORS.paper,opacity:enter(62,88)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8}}>
          <FileText size={36} color={COLORS.orange}/>
          <div style={{fontSize:26,fontWeight:900}}>未主张取回</div>
        </div>
        <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>货到管理人后，<span style={{fontWeight:900,color:COLORS.orange}}>无权取回</span>，仅可<span style={{fontWeight:900}}>申报债权</span></div>
      </div>
      <div data-final-knowledge="reclaim-right-scene-03-pay" style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:18,border:'5px solid '+COLORS.gold,background:COLORS.paper,padding:'16px 26px',opacity:enter(86,114)}}>
        <Banknote size={40} color={COLORS.gold}/>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.5}}>管理人可<span style={{fontWeight:900}}>支付全部价款＋请求交付</span>——出卖人须交付；口诀：<span style={{background:COLORS.gold+'40',padding:'2px 8px',fontWeight:900}}>在途可取回，运达仅申报</span></div>
      </div>
    </div>
  </Shell>;
};

export const ReclaimRight=()=> <AbsoluteFill>
  <TimelineSequence name="01-reclaim-right-scene-01" start={SCENES['reclaim-right-scene-01'].start} duration={SCENES['reclaim-right-scene-01'].duration}><ReclaimRight01Scene/></TimelineSequence>
  <TimelineSequence name="02-reclaim-right-scene-02" start={SCENES['reclaim-right-scene-02'].start} duration={SCENES['reclaim-right-scene-02'].duration}><ReclaimRight02Scene/></TimelineSequence>
  <TimelineSequence name="03-reclaim-right-scene-03" start={SCENES['reclaim-right-scene-03'].start} duration={SCENES['reclaim-right-scene-03'].duration}><ReclaimRight03Scene/></TimelineSequence>
</AbsoluteFill>;
