import type {ReactNode} from 'react';
import {Scale, Landmark, Wallet, Boxes, FileX2, Gem} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#EFF1ED', ink:'#232A26', green:'#2E6D4F', red:'#B23A30', gold:'#C9A23C', paper:'#F8FAF6'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.green,color:COLORS.paper}}>{code}</div>
    <div style={{position:'absolute',left:190,right:76,top:46,fontSize:46,fontWeight:900,lineHeight:1.12,borderBottom:'5px solid '+COLORS.gold,paddingBottom:12}}>{title}</div>
    <div style={{position:'absolute',left:76,right:76,top:150,bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

export const DebtorPropertyScope01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="11.1" title="一个标准：所有权">
    <div data-layout="title-test-1" data-visual-anchor="boundary" data-visual-grammar="title-ownership-test,registry-possession-ignored" data-text-treatments="label-block,thin-underline,soft-highlight" data-focal-rule="debtor-property-scope-scene-01-rule" data-focal-channels="enclosure,spatial,icon" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="debtor-property-scope-scene-01-test" style={{position:'absolute',left:0,right:0,top:40,display:'grid',gridTemplateColumns:'1fr 1fr',gap:24}}>
        <div style={{padding:'26px 30px',border:'5px solid '+COLORS.green,background:COLORS.paper,opacity:enter(28,54)}}>
          <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:12}}>
            <Scale size={46} color={COLORS.green}/>
            <div style={{fontSize:30,fontWeight:900}}>破产财产 ＝</div>
          </div>
          <div style={{fontSize:26,fontWeight:900,lineHeight:1.5}}><span style={{background:COLORS.green+'28',padding:'2px 10px'}}>所有权属于债务人</span>的财产</div>
        </div>
        <div style={{padding:'26px 30px',border:'5px dashed '+COLORS.red,background:COLORS.paper,opacity:enter(46,72)}}>
          <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:12}}>
            <FileX2 size={46} color={COLORS.red}/>
            <div style={{fontSize:30,fontWeight:900}}>归属判断：</div>
          </div>
          <div style={{fontSize:26,fontWeight:900,lineHeight:1.5}}>只问<span style={{fontWeight:900}}>所有权</span>，<span style={{color:COLORS.red}}>不看登记、占有</span></div>
        </div>
      </div>
      <div data-final-knowledge="debtor-property-scope-knowledge-1" style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:18,border:'4px solid '+COLORS.ink,background:COLORS.paper,padding:'16px 28px',opacity:enter(74,102)}}>
        <Landmark size={42} color={COLORS.gold}/>
        <div style={{fontSize:24,fontWeight:800,lineHeight:1.5}}>核心：<span style={{background:COLORS.gold+'40',padding:'2px 10px',fontWeight:900}}>一个标准</span>——所有权是否属于债务人；登记外观、占有状态都不是判断依据</div>
      </div>
    </div>
  </Shell>;
};

export const DebtorPropertyScope02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="11.1" title="属于债务人财产">
    <div data-layout="in-scope-2" data-visual-anchor="typographic-sequence" data-visual-grammar="secured-assets-included,co-owned-assets-included" data-text-treatments="stamp,soft-highlight,label-block" data-focal-rule="debtor-property-scope-scene-02-rule" data-focal-channels="enclosure,motion,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="debtor-property-scope-knowledge-2" style={{position:'absolute',left:0,right:0,top:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#5C6B64',opacity:enter(12,36)}}>三类属于</div>
      <div style={{position:'absolute',left:0,right:0,top:70,display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="debtor-property-scope-scene-02-item-0" style={{padding:'22px 26px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.green,background:COLORS.paper,minHeight:240,opacity:enter(28,54)}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
            <Wallet size={38} color={COLORS.green}/>
            <div style={{fontSize:26,fontWeight:900}}>一般财产</div>
          </div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.55}}>债务人所有的<span style={{fontWeight:900}}>货币、实物、股权、知识产权</span></div>
        </div>
        <div data-final-knowledge="debtor-property-scope-scene-02-item-1" style={{padding:'22px 26px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.gold,background:COLORS.paper,minHeight:240,opacity:enter(44,70)}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
            <Landmark size={38} color={COLORS.gold}/>
            <div style={{fontSize:26,fontWeight:900}}>已设担保的财产</div>
          </div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.55}}>已设定担保物权的特定财产<span style={{fontWeight:900}}>属于</span>债务人财产——担保物权<span style={{background:COLORS.gold+'40',padding:'2px 6px',fontWeight:900}}>不转移所有权</span>，但担保权人享有别除权</div>
        </div>
        <div data-final-knowledge="debtor-property-scope-scene-02-item-2" style={{padding:'22px 26px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.red,background:COLORS.paper,minHeight:240,opacity:enter(60,86)}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
            <Boxes size={38} color={COLORS.red}/>
            <div style={{fontSize:26,fontWeight:900}}>共有财产</div>
          </div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.55}}>共有的财产等——债务人所享有的份额属于债务人财产</div>
        </div>
      </div>
      <div style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.gold,background:COLORS.paper,padding:'14px 24px',opacity:enter(84,110)}}>
        <Gem size={38} color={COLORS.gold}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}>易错：设定抵押权的生产设备<span style={{fontWeight:900}}>仍属于</span>债务人财产——担保物在债权范围内不得用于集体清偿，其余部分照常</div>
      </div>
    </div>
  </Shell>;
};

export const DebtorPropertyScope03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="11.1" title="不属于债务人财产">
    <div data-layout="out-scope-3" data-visual-anchor="comparison-axis" data-visual-grammar="bailment-borrow-lease,title-retention" data-text-treatments="external-negation,label-block,soft-highlight" data-focal-rule="debtor-property-scope-scene-03-rule" data-focal-channels="contrast,spatial,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="debtor-property-scope-knowledge-3" style={{position:'absolute',left:0,right:0,top:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#5C6B64',opacity:enter(12,36)}}>三类不属于——可被取回</div>
      <div style={{position:'absolute',left:0,right:0,top:70,display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="debtor-property-scope-scene-03-item-0" style={{padding:'22px 26px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.red,background:COLORS.paper,minHeight:240,opacity:enter(28,54)}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
            <Boxes size={38} color={COLORS.red}/>
            <div style={{fontSize:26,fontWeight:900}}>保管·借用·租赁</div>
          </div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.55}}>保管、借用、租赁的<span style={{fontWeight:900}}>他人财产</span>——所有权仍在他人</div>
        </div>
        <div data-final-knowledge="debtor-property-scope-scene-03-item-1" style={{padding:'22px 26px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.red,background:COLORS.paper,minHeight:240,opacity:enter(44,70)}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
            <FileX2 size={38} color={COLORS.red}/>
            <div style={{fontSize:26,fontWeight:900}}>所有权保留</div>
          </div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.55}}>所有权保留买卖中<span style={{fontWeight:900}}>尚未取得所有权</span>的财产</div>
        </div>
        <div data-final-knowledge="debtor-property-scope-scene-03-item-2" style={{padding:'22px 26px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.red,background:COLORS.paper,minHeight:240,opacity:enter(60,86)}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
            <Gem size={38} color={COLORS.red}/>
            <div style={{fontSize:26,fontWeight:900}}>国家专属</div>
          </div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.55}}>专属于国家且<span style={{fontWeight:900}}>不得转让</span>的财产等</div>
        </div>
      </div>
      <div style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.green,background:COLORS.paper,padding:'14px 24px',opacity:enter(84,110)}}>
        <Landmark size={38} color={COLORS.green}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}>例：根据代管协议合法占有的委托人房产，所有权属于委托人，<span style={{fontWeight:900,color:COLORS.red}}>不属于债务人财产</span>——委托人可取回</div>
      </div>
    </div>
  </Shell>;
};

export const DebtorPropertyScope=()=> <AbsoluteFill>
  <TimelineSequence name="01-debtor-property-scope-scene-01" start={SCENES['debtor-property-scope-scene-01'].start} duration={SCENES['debtor-property-scope-scene-01'].duration}><DebtorPropertyScope01Scene/></TimelineSequence>
  <TimelineSequence name="02-debtor-property-scope-scene-02" start={SCENES['debtor-property-scope-scene-02'].start} duration={SCENES['debtor-property-scope-scene-02'].duration}><DebtorPropertyScope02Scene/></TimelineSequence>
  <TimelineSequence name="03-debtor-property-scope-scene-03" start={SCENES['debtor-property-scope-scene-03'].start} duration={SCENES['debtor-property-scope-scene-03'].duration}><DebtorPropertyScope03Scene/></TimelineSequence>
</AbsoluteFill>;
