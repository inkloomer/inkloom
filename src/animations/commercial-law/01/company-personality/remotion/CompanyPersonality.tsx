import type {ReactNode} from 'react';
import {Banknote, BadgeCheck, ShieldCheck, Gavel, AlertTriangle, Building2, User, FileText, Layers, Merge, SlidersHorizontal, CircleDollarSign, MoveHorizontal} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#F6F1E5', ink:'#1C2A33', red:'#C4453B', teal:'#0F7A6E', gold:'#C08A2D', paper:'#FFFDF6'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 24px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.ink,color:COLORS.paper}}>{code}</div>
    <div style={{position:'absolute',left:196,right:76,top:46,fontSize:46,fontWeight:900,lineHeight:1.12,borderBottom:'5px solid '+COLORS.teal,paddingBottom:12}}>{title}</div>
    <div style={{position:'absolute',left:76,right:76,top:150,bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

const PersonChip=({name,color}:{readonly name:string;readonly color:string})=>(
  <div style={{display:'grid',gridTemplateColumns:'46px auto',gap:10,alignItems:'center',padding:'10px 20px',border:'3px solid '+COLORS.ink,background:COLORS.paper}}>
    <div style={{width:46,height:46,borderRadius:'50% 50% 46% 46%',background:color,border:'3px solid '+COLORS.ink,position:'relative'}}/>
    <div style={{fontSize:26,fontWeight:800}}>{name}</div>
  </div>
);

export const CompanyPersonality01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const rise=(a:number,b:number)=>interpolate(frame,[a,b],['0px 26px','0px 0px'],CLAMP);
  return <Shell code="01.1" title="公司独立人格：名义·财产·责任">
    <div data-layout="shell-pillars-1" data-visual-anchor="boundary" data-visual-grammar="personality-shell,independence-pillars" data-text-treatments="label-block,thin-underline,soft-highlight" data-focal-rule="company-personality-scene-01-rule" data-focal-channels="enclosure,icon,locator" style={{position:'absolute',inset:0}}>
      <div style={{position:'absolute',left:24,top:0,display:'flex',gap:20,opacity:enter(14,38)}}>
        <PersonChip name="股东甲" color={COLORS.gold}/>
        <PersonChip name="股东乙" color={COLORS.gold}/>
      </div>
      <div style={{position:'absolute',left:24,top:96,width:500,height:120,opacity:enter(28,52)}}>
        <div style={{position:'absolute',left:60,top:0,width:7,height:52,background:COLORS.ink}}/>
        <div style={{position:'absolute',left:60,top:34,width:0,height:0,borderTop:'14px solid '+COLORS.ink,borderLeft:'11px solid transparent',borderRight:'11px solid transparent'}}/>
        <div style={{position:'absolute',left:300,top:0,width:7,height:52,background:COLORS.ink}}/>
        <div style={{position:'absolute',left:300,top:34,width:0,height:0,borderTop:'14px solid '+COLORS.ink,borderLeft:'11px solid transparent',borderRight:'11px solid transparent'}}/>
        <div style={{position:'absolute',left:0,top:78,fontSize:26,fontWeight:800,color:COLORS.teal}}>认缴出资 + 交易收益</div>
      </div>
      <div data-final-knowledge="company-personality-knowledge-1" style={{position:'absolute',left:24,top:216,width:560,bottom:0,padding:0,border:'5px solid '+COLORS.ink,background:COLORS.gold+'44',boxShadow:'16px 16px 0 '+COLORS.ink+'20',opacity:enter(30,56),translate:rise(30,56)}}>
        <div style={{border:'3px solid '+COLORS.teal,margin:8,padding:'22px 26px 26px',height:'100%',display:'flex',flexDirection:'column',boxSizing:'border-box',position:'relative'}}>
          <BadgeCheck size={150} color={COLORS.gold} strokeWidth={1.2} style={{position:'absolute',right:2,bottom:2,opacity:0.08,pointerEvents:'none'}}/>
          <div style={{display:'flex',alignItems:'center',gap:16,marginBottom:20}}>
            <div style={{padding:'10px 18px',background:COLORS.ink,color:COLORS.paper,fontSize:26,fontWeight:900}}>法人·独立人格</div>
            <div style={{fontSize:30,fontWeight:900,borderBottom:'4px solid '+COLORS.teal,paddingBottom:4}}>名义·财产·责任独立</div>
          </div>
          <div data-final-knowledge="company-personality-scene-01-pillar-name" style={{flex:1,display:'grid',gridTemplateColumns:'56px 150px 1fr',gap:14,alignItems:'center',padding:'12px 14px',marginBottom:12,background:COLORS.gold+'30',opacity:enter(46,72),translate:interpolate(frame,[46,72],['0px 18px','0px 0px'],CLAMP)}}>
            <BadgeCheck size={40} color={COLORS.gold}/>
            <div style={{fontSize:28,fontWeight:900}}>名义独立</div>
            <div style={{fontSize:23,fontWeight:700,lineHeight:1.4}}>对外以<span style={{fontWeight:900,color:COLORS.teal,background:COLORS.gold+'2E',padding:'1px 6px'}}>公司名义</span>交易</div>
          </div>
          <div data-final-knowledge="company-personality-scene-01-pillar-assets" style={{flex:1,display:'grid',gridTemplateColumns:'56px 150px 1fr',gap:14,alignItems:'center',padding:'12px 14px',marginBottom:12,background:COLORS.gold+'30',opacity:enter(60,86),translate:interpolate(frame,[60,86],['0px 18px','0px 0px'],CLAMP)}}>
            <Banknote size={40} color={COLORS.gold}/>
            <div style={{fontSize:28,fontWeight:900}}>财产独立</div>
            <div style={{fontSize:23,fontWeight:700,lineHeight:1.4}}>股东出资及交易收益<span style={{fontWeight:900,color:COLORS.teal,background:COLORS.gold+'2E',padding:'1px 6px'}}>均属公司财产</span></div>
          </div>
          <div data-final-knowledge="company-personality-scene-01-pillar-duty" style={{flex:1,display:'grid',gridTemplateColumns:'56px 150px 1fr',gap:14,alignItems:'center',padding:'12px 14px',background:COLORS.gold+'30',opacity:enter(74,100),translate:interpolate(frame,[74,100],['0px 18px','0px 0px'],CLAMP)}}>
            <ShieldCheck size={40} color={COLORS.gold}/>
            <div style={{fontSize:28,fontWeight:900}}>责任独立</div>
            <div style={{fontSize:23,fontWeight:700,lineHeight:1.4}}>以<span style={{fontWeight:900,color:COLORS.teal,background:COLORS.gold+'2E',padding:'1px 6px'}}>公司财产</span>独立承担责任</div>
          </div>
        </div>
      </div>
      <div style={{position:'absolute',left:664,right:0,top:216,bottom:0,display:'grid',gap:16,alignContent:'start'}}>
        <div style={{fontSize:26,fontWeight:900,padding:'10px 0 4px',borderBottom:'4px solid '+COLORS.ink,opacity:enter(90,116)}}>公司债务承担</div>
        <div data-final-knowledge="company-personality-scene-01-strip-company" style={{display:'grid',gridTemplateColumns:'200px 1fr',gap:0,border:'4px solid '+COLORS.ink,background:COLORS.teal+'4D',opacity:enter(104,130),translate:rise(104,130),flex:1}}>
          <div style={{background:COLORS.ink,color:COLORS.paper,padding:'20px',fontSize:30,fontWeight:900,display:'grid',gridTemplateColumns:'44px auto',alignItems:'center',gap:10}}><Building2 size={40} color={COLORS.paper}/>公司</div>
          <div style={{padding:'16px 24px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <div style={{fontSize:30,fontWeight:900,color:COLORS.teal}}>承担无限责任</div>
            <div style={{fontSize:23,fontWeight:700,marginTop:8,lineHeight:1.4}}>以公司<span style={{fontWeight:900,color:COLORS.teal,background:COLORS.teal+'16',padding:'1px 6px'}}>现有及将有的全部财产</span></div>
          </div>
        </div>
        <div data-final-knowledge="company-personality-scene-01-strip-shareholder" style={{display:'grid',gridTemplateColumns:'200px 1fr',border:'4px solid '+COLORS.ink,background:COLORS.gold+'44',opacity:enter(118,144),translate:rise(118,144),flex:1}}>
          <div style={{background:COLORS.teal,color:COLORS.paper,padding:'20px',fontSize:30,fontWeight:900,display:'grid',gridTemplateColumns:'44px auto',alignItems:'center',gap:10}}><User size={40} color={COLORS.paper}/>股东</div>
          <div style={{padding:'16px 24px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <div style={{fontSize:30,fontWeight:900,color:COLORS.gold}}>承担有限责任</div>
            <div style={{fontSize:23,fontWeight:700,marginTop:8,lineHeight:1.4}}>以<span style={{fontWeight:900,color:COLORS.gold,background:COLORS.gold+'2A',padding:'1px 6px'}}>认缴的出资额</span>为限</div>
          </div>
        </div>
        <div style={{fontSize:24,fontWeight:800,color:COLORS.red,padding:'16px 18px',border:'3px dashed '+COLORS.red,background:COLORS.red+'59',opacity:enter(134,160),width:'fit-content'}}>例外预告 → 法人人格否认</div>
      </div>
    </div>
  </Shell>;
};

export const CompanyPersonality02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const claimProgress=interpolate(frame,[110,190],[0,1],CLAMP);
  return <Shell code="01.2" title="滥用股东权利 → 连带责任">
    <div data-layout="abuse-fork-2" data-visual-anchor="flow-path" data-visual-grammar="abuse-fork,joint-liability-converge" data-text-treatments="soft-highlight,stamp,thin-underline" data-focal-rule="company-personality-scene-02-rule" data-focal-channels="connector,contrast,motion" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="company-personality-knowledge-2" style={{position:'absolute',left:24,top:0,display:'flex',gap:22,alignItems:'center',opacity:enter(14,40)}}>
        <div style={{padding:'16px 26px',border:'4px solid '+COLORS.ink,background:COLORS.paper,fontSize:28,fontWeight:900}}>甲公司欠丙债务 · 股东B控股</div>
        <div style={{fontSize:26,fontWeight:900,color:COLORS.red,borderBottom:'4px solid '+COLORS.red,paddingBottom:6}}>B是否滥用股东权利？</div>
      </div>
      <div style={{position:'absolute',left:24,top:150,display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:18,width:1180}}>
        <div data-final-knowledge="company-personality-scene-02-branch-0" style={{padding:'18px 22px',border:'4px solid '+COLORS.ink,borderBottom:'10px solid '+COLORS.teal,background:COLORS.paper,minHeight:200,background:COLORS.teal+'4D',opacity:enter(40,68),translate:interpolate(frame,[40,68],['0px 22px','0px 0px'],CLAMP)}}>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:29,fontWeight:900,marginBottom:10}}><Merge size={40} color={COLORS.teal}/><span style={{background:COLORS.teal+'38',padding:'2px 10px'}}>人格混同</span></div>
          <div style={{fontSize:22,fontWeight:800,lineHeight:1.4,padding:'8px 12px',background:COLORS.paper,borderLeft:'5px solid '+COLORS.teal,opacity:enter(48,70)}}>公司财产与B个人财产<span style={{fontWeight:900,color:COLORS.red,background:COLORS.red+'16',padding:'1px 6px'}}>混同且无法区分</span></div>
          <div style={{fontSize:22,fontWeight:800,lineHeight:1.4,padding:'8px 12px',background:COLORS.paper,borderLeft:'5px solid '+COLORS.teal,opacity:enter(54,76)}}>可能伴随<span style={{fontWeight:900}}>人员、业务、地点</span>混同</div>
        </div>
        <div data-final-knowledge="company-personality-scene-02-branch-1" style={{padding:'18px 22px',border:'4px solid '+COLORS.ink,borderBottom:'10px solid '+COLORS.teal,background:COLORS.paper,minHeight:200,background:COLORS.teal+'4D',opacity:enter(56,84),translate:interpolate(frame,[56,84],['0px 22px','0px 0px'],CLAMP)}}>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:29,fontWeight:900,marginBottom:10}}><SlidersHorizontal size={40} color={COLORS.teal}/><span style={{background:COLORS.teal+'38',padding:'2px 10px'}}>过度支配与控制</span></div>
          <div style={{fontSize:22,fontWeight:800,lineHeight:1.4,padding:'8px 12px',background:COLORS.paper,borderLeft:'5px solid '+COLORS.teal,opacity:enter(64,86)}}>B为<span style={{fontWeight:900}}>控股股东</span>，操控甲公司决策</div>
          <div style={{fontSize:22,fontWeight:800,lineHeight:1.4,padding:'8px 12px',background:COLORS.paper,borderLeft:'5px solid '+COLORS.teal,opacity:enter(70,92)}}>使公司<span style={{fontWeight:900,color:COLORS.red,background:COLORS.red+'16',padding:'1px 6px'}}>完全丧失独立性</span></div>
        </div>
        <div data-final-knowledge="company-personality-scene-02-branch-2" style={{padding:'18px 22px',border:'4px solid '+COLORS.ink,borderBottom:'10px solid '+COLORS.teal,background:COLORS.paper,minHeight:200,background:COLORS.teal+'4D',opacity:enter(72,100),translate:interpolate(frame,[72,100],['0px 22px','0px 0px'],CLAMP)}}>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:29,fontWeight:900,marginBottom:10}}><CircleDollarSign size={40} color={COLORS.teal}/><span style={{background:COLORS.teal+'38',padding:'2px 10px'}}>资本显著不足</span></div>
          <div style={{fontSize:22,fontWeight:800,lineHeight:1.4,padding:'8px 12px',background:COLORS.paper,borderLeft:'5px solid '+COLORS.teal,opacity:enter(80,102)}}>B持股<span style={{fontWeight:900}}>90%</span></div>
          <div style={{fontSize:22,fontWeight:800,lineHeight:1.4,padding:'8px 12px',background:COLORS.paper,borderLeft:'5px solid '+COLORS.teal,opacity:enter(86,108)}}>实际投入资本与经营风险<span style={{fontWeight:900,color:COLORS.red,background:COLORS.red+'16',padding:'1px 6px'}}>明显不匹配</span></div>
        </div>
        <div data-final-knowledge="company-personality-scene-02-branch-3" style={{padding:'18px 22px',border:'4px solid '+COLORS.ink,borderBottom:'10px solid '+COLORS.teal,background:COLORS.paper,minHeight:200,background:COLORS.teal+'4D',opacity:enter(88,116),translate:interpolate(frame,[88,116],['0px 22px','0px 0px'],CLAMP)}}>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:29,fontWeight:900,marginBottom:10}}><MoveHorizontal size={40} color={COLORS.teal}/><span style={{background:COLORS.teal+'38',padding:'2px 10px'}}>横向人格否认</span></div>
          <div style={{fontSize:22,fontWeight:800,lineHeight:1.4,padding:'8px 12px',background:COLORS.paper,borderLeft:'5px solid '+COLORS.teal,opacity:enter(96,118)}}>B<span style={{fontWeight:900}}>同时控制</span>甲、丁两公司</div>
          <div style={{fontSize:22,fontWeight:800,lineHeight:1.4,padding:'8px 12px',background:COLORS.paper,borderLeft:'5px solid '+COLORS.teal,opacity:enter(102,124)}}><span style={{fontWeight:900,color:COLORS.red,background:COLORS.red+'16',padding:'1px 6px'}}>财产边界不清、利益输送</span>，致甲无力清偿丙债</div>
          <div style={{fontSize:22,fontWeight:800,lineHeight:1.4,padding:'8px 12px',background:COLORS.paper,borderLeft:'5px solid '+COLORS.red,opacity:enter(108,130)}}><span style={{fontWeight:900,color:COLORS.red}}>各公司</span>对<span style={{fontWeight:900}}>任一公司</span>的债务承担连带责任</div>
        </div>
      </div>
      <div data-final-knowledge="company-personality-scene-02-conclusion" style={{position:'absolute',left:24,right:24,bottom:0,display:'flex',alignItems:'center',gap:20,border:'5px solid '+COLORS.red,background:COLORS.red+'59',padding:'18px 28px',opacity:enter(120,150)}}>
        <Gavel size={44} color={COLORS.red}/>
        <div style={{fontSize:32,fontWeight:900,color:COLORS.red}}>股东B对公司债务承担连带责任</div>
        <div data-stateful-terminal="company-personality-abuse-claim" style={{padding:'8px 18px',border:'3px solid '+COLORS.ink,background:COLORS.paper,fontSize:22,fontWeight:900,opacity:enter(150,170)}}>滥权成立·责任穿透</div>
        <div style={{position:'absolute',right:26,top:-22,transform:'rotate(2deg)',border:'3px solid '+COLORS.red,color:COLORS.red,padding:'6px 16px',fontSize:22,fontWeight:900,background:COLORS.paper}}>连带责任</div>
      </div>
      <div style={{position:'absolute',left:611,top:562,width:6,height:interpolate(claimProgress,[0.2,1],[0,96],CLAMP),background:COLORS.red}}/>
      <div data-stateful-source="company-personality-abuse-claim" style={{position:'absolute',left:602,top:interpolate(claimProgress,[0,1],[566,640],CLAMP),width:24,height:24,borderRadius:'50%',background:COLORS.red,border:'4px solid '+COLORS.ink,opacity:claimProgress>0.86?0:1,zIndex:4}}/>
      <div data-final-knowledge="company-personality-scene-02-no-abuse" style={{position:'absolute',left:1260,right:24,top:150,bottom:190,padding:'24px 26px',border:'4px solid '+COLORS.ink,background:COLORS.gold+'5C',opacity:enter(96,124),display:'flex',flexDirection:'column',justifyContent:'center',gap:14}}>
        <ShieldCheck size={140} color={COLORS.gold} strokeWidth={1.2} style={{position:'absolute',right:2,bottom:-2,opacity:0.09,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:12,fontSize:28,fontWeight:900,color:COLORS.gold}}><ShieldCheck size={38} color={COLORS.gold}/>无滥用 →</div>
        <div style={{fontSize:24,fontWeight:800,lineHeight:1.55}}>公司独立承担责任，丙只能请求公司以<span style={{fontWeight:900,color:COLORS.gold,background:COLORS.paper+'66',padding:'1px 6px'}}>全部财产</span>清偿债务</div>
      </div>
    </div>
  </Shell>;
};

export const CompanyPersonality03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const rise=(a:number,b:number)=>interpolate(frame,[a,b],['0px 22px','0px 0px'],CLAMP);
  const NegMark=()=>(<div style={{width:44,height:44,border:'4px solid '+COLORS.red,position:'relative',flexShrink:0}}>
    <div style={{position:'absolute',left:18,top:6,width:4,height:24,background:COLORS.red,transform:'rotate(45deg)'}}/>
    <div style={{position:'absolute',left:18,top:6,width:4,height:24,background:COLORS.red,transform:'rotate(-45deg)'}}/>
  </div>);
  return <Shell code="01.3" title="人格否认：例外规则与起诉路径">
    <div data-layout="exception-paths-3" data-visual-anchor="document-fork" data-visual-grammar="exception-stack,suit-path-fork" data-text-treatments="external-negation,stamp,soft-highlight" data-focal-rule="company-personality-scene-03-rule" data-focal-channels="annotation,contrast,spatial" style={{position:'absolute',inset:0}}>
      <div style={{position:'absolute',left:24,top:0,bottom:0,width:820,display:'flex',flexDirection:'column',gap:18}}>
        <div data-final-knowledge="company-personality-knowledge-3" style={{fontSize:28,fontWeight:900,padding:'10px 0 4px',borderBottom:'4px solid '+COLORS.red,opacity:enter(14,38)}}>例外规则 · 解题大招</div>
        <div data-final-knowledge="company-personality-scene-03-rule-0" style={{flex:1,display:'grid',gridTemplateColumns:'56px 1fr',gap:18,alignItems:'center',border:'4px solid '+COLORS.ink,background:COLORS.red+'59',padding:'18px 22px',opacity:enter(26,52),translate:rise(26,52)}}>
          <NegMark/>
          <div>
            <div style={{fontSize:28,fontWeight:900,marginBottom:6}}>仅个案适用，<span style={{background:COLORS.red+'2A',padding:'2px 8px'}}>非一概否认</span>公司独立人格</div>
            <div style={{fontSize:23,fontWeight:700,color:COLORS.teal}}>具体案件具体分析</div>
          </div>
        </div>
        <div data-final-knowledge="company-personality-scene-03-rule-1" style={{flex:1,position:'relative',display:'grid',gridTemplateColumns:'56px 1fr',gap:18,alignItems:'center',border:'4px solid '+COLORS.ink,background:COLORS.gold+'44',padding:'18px 22px',opacity:enter(42,68),translate:rise(42,68)}}>
          <AlertTriangle size={130} color={COLORS.gold} strokeWidth={1.2} style={{position:'absolute',right:6,bottom:-2,opacity:0.08,pointerEvents:'none'}}/>
          <AlertTriangle size={42} color={COLORS.gold}/>
          <div>
            <div style={{fontSize:28,fontWeight:900,marginBottom:6}}>仅滥权股东承担连带责任</div>
            <div style={{fontSize:23,fontWeight:700,lineHeight:1.45}}>无关股东仍承担<span style={{fontWeight:900,color:COLORS.teal,background:COLORS.teal+'18',padding:'1px 6px'}}>有限责任</span></div>
          </div>
        </div>
        <div data-final-knowledge="company-personality-scene-03-rule-2" style={{flex:1,display:'grid',gridTemplateColumns:'56px 1fr',gap:18,alignItems:'center',border:'4px solid '+COLORS.ink,background:COLORS.teal+'44',padding:'18px 22px',opacity:enter(58,84),translate:rise(58,84)}}>
          <ShieldCheck size={42} color={COLORS.teal}/>
          <div>
            <div style={{fontSize:28,fontWeight:900,marginBottom:6}}><span style={{background:COLORS.gold+'3A',padding:'2px 8px'}}>一人公司</span>举证责任倒置</div>
            <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>股东<span style={{fontWeight:900,color:COLORS.red,borderBottom:'3px solid '+COLORS.red,paddingBottom:1}}>不能证明</span>公司财产独立的 → 对公司债务承担<span style={{fontWeight:900,color:COLORS.red,background:COLORS.red+'14',padding:'1px 6px'}}>连带责任</span>（一般由债权人举证滥权）</div>
          </div>
        </div>
      </div>
      <div style={{position:'absolute',left:900,right:24,top:0,bottom:0,display:'flex',flexDirection:'column',gap:16}}>
        <div style={{fontSize:28,fontWeight:900,padding:'10px 0 4px',borderBottom:'4px solid '+COLORS.teal,opacity:enter(40,64)}}>丙的起诉路径</div>
        <div data-final-knowledge="company-personality-scene-03-path-0" style={{flex:1,display:'grid',gridTemplateColumns:'56px 44px 1fr',gap:16,alignItems:'center',border:'4px solid '+COLORS.ink,background:COLORS.teal+'4D',padding:'16px 20px',opacity:enter(54,80),translate:rise(54,80)}}>
          <div style={{width:56,height:56,border:'4px solid '+COLORS.ink,background:COLORS.ink,color:COLORS.paper,display:'grid',placeItems:'center',fontSize:28,fontWeight:900}}>①</div>
          <FileText size={36} color={COLORS.teal}/>
          <div style={{fontSize:24,fontWeight:800,lineHeight:1.4}}>已诉过公司，又<span style={{fontWeight:900,color:COLORS.red,background:COLORS.red+'12',padding:'1px 6px'}}>另行提起</span>人格否认之诉</div>
        </div>
        <div data-final-knowledge="company-personality-scene-03-path-1" style={{flex:1,display:'grid',gridTemplateColumns:'56px 44px 1fr',gap:16,alignItems:'center',border:'4px solid '+COLORS.ink,background:COLORS.teal+'4D',padding:'16px 20px',opacity:enter(70,96),translate:rise(70,96)}}>
          <div style={{width:56,height:56,border:'4px solid '+COLORS.ink,background:COLORS.ink,color:COLORS.paper,display:'grid',placeItems:'center',fontSize:28,fontWeight:900}}>②</div>
          <User size={36} color={COLORS.teal}/>
          <div style={{fontSize:24,fontWeight:800,lineHeight:1.4}}><span style={{fontWeight:900,color:COLORS.red,borderBottom:'3px solid '+COLORS.red,paddingBottom:1}}>直接起诉</span>股东B</div>
        </div>
        <div data-final-knowledge="company-personality-scene-03-path-2" style={{flex:1,display:'grid',gridTemplateColumns:'56px 44px 1fr',gap:16,alignItems:'center',border:'4px solid '+COLORS.ink,background:COLORS.teal+'4D',padding:'16px 20px',opacity:enter(86,112),translate:rise(86,112)}}>
          <div style={{width:56,height:56,border:'4px solid '+COLORS.ink,background:COLORS.ink,color:COLORS.paper,display:'grid',placeItems:'center',fontSize:28,fontWeight:900}}>③</div>
          <Layers size={36} color={COLORS.teal}/>
          <div style={{fontSize:24,fontWeight:800,lineHeight:1.4}}><span style={{fontWeight:900,color:COLORS.teal,background:COLORS.teal+'18',padding:'1px 6px'}}>同时提起</span>公司债诉讼与人格否认之诉</div>
        </div>
        <div data-final-knowledge="company-personality-scene-03-path-3" style={{flex:1,position:'relative',display:'grid',gridTemplateColumns:'56px 44px 1fr',gap:16,alignItems:'center',border:'4px solid '+COLORS.ink,background:COLORS.teal+'4D',padding:'16px 20px',opacity:enter(102,128),translate:rise(102,128)}}>
          <Gavel size={130} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:8,bottom:-2,opacity:0.08,pointerEvents:'none'}}/>
          <div style={{width:56,height:56,border:'4px solid '+COLORS.ink,background:COLORS.ink,color:COLORS.paper,display:'grid',placeItems:'center',fontSize:28,fontWeight:900}}>④</div>
          <Gavel size={36} color={COLORS.teal}/>
          <div style={{fontSize:24,fontWeight:800,lineHeight:1.4}}>仅提起人格否认之诉——<span style={{background:COLORS.teal+'30',padding:'2px 8px'}}>B为被告</span></div>
        </div>
      </div>
    </div>
  </Shell>;
};

export const CompanyPersonality=()=> <AbsoluteFill>
  <TimelineSequence name="01-company-personality-scene-01" start={SCENES['company-personality-scene-01'].start} duration={SCENES['company-personality-scene-01'].duration}><CompanyPersonality01Scene/></TimelineSequence>
  <TimelineSequence name="02-company-personality-scene-02" start={SCENES['company-personality-scene-02'].start} duration={SCENES['company-personality-scene-02'].duration}><CompanyPersonality02Scene/></TimelineSequence>
  <TimelineSequence name="03-company-personality-scene-03" start={SCENES['company-personality-scene-03'].start} duration={SCENES['company-personality-scene-03'].duration}><CompanyPersonality03Scene/></TimelineSequence>
</AbsoluteFill>;
