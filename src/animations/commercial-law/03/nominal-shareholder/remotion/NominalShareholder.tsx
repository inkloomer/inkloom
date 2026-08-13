import type {ReactNode} from 'react';
import {Eye, EyeOff, Landmark, Scale, FileSignature, ShieldAlert, UserCheck, UserX} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#171B2E', ink:'#E8ECF3', mirror:'#9AA6B8', cyan:'#4FC3C9', purple:'#7A6BC4', red:'#E0503A', surface:'#22273F'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:0,top:0,right:0,height:10,background:'linear-gradient(90deg,'+COLORS.mirror+','+COLORS.cyan+' 42%,'+COLORS.purple+' 58%,'+COLORS.mirror+')'}}/>
    <div style={{position:'absolute',left:76,top:32,padding:'11px 22px',border:'2px solid '+COLORS.mirror,background:COLORS.surface,color:COLORS.cyan,fontSize:24,fontWeight:900,letterSpacing:4}}>{code}</div>
    <div style={{position:'absolute',left:76,right:76,top:112,fontSize:48,fontWeight:900,lineHeight:1.08}}>{title}</div>
    <div style={{position:'absolute',left:76,right:76,top:188,height:4,background:'linear-gradient(90deg,'+COLORS.cyan+','+COLORS.purple+')'}}/>
    <div style={{position:'absolute',left:76,right:76,top:210,bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

const Cross=({color}:{readonly color:string})=>(
  <div style={{width:34,height:34,border:'3px solid '+color,position:'relative',flexShrink:0}}>
    <div style={{position:'absolute',left:13,top:3,width:4,height:22,background:color,transform:'rotate(45deg)'}}/>
    <div style={{position:'absolute',left:13,top:3,width:4,height:22,background:color,transform:'rotate(-45deg)'}}/>
  </div>
);

export const NominalShareholder01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="03.2" title="代持股协议的四角关系">
    <div data-layout="dual-mirror-roles-1" data-visual-anchor="role-pair" data-visual-grammar="mirror-hidden-visible,nominee-agreement" data-text-treatments="label-block,thin-underline,soft-highlight,external-negation" data-focal-rule="nominal-shareholder-scene-01-rule" data-focal-channels="contrast,connector,icon" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:16}}>
      <div data-final-knowledge="nominal-shareholder-knowledge-1" style={{display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <div style={{padding:'7px 16px',background:COLORS.mirror,color:COLORS.background,fontSize:22,fontWeight:900}}>双面镜</div>
        <div style={{fontSize:24,fontWeight:900,letterSpacing:2,color:COLORS.mirror}}>协议仅约束 A 与 B，<span style={{color:COLORS.cyan,fontWeight:900}}>不得对抗外部第三人</span></div>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 72px 1fr',gap:0,alignItems:'stretch',flex:1}}>
        <div data-final-knowledge="nominal-shareholder-scene-01-hidden" style={{padding:24,border:'3px dashed '+COLORS.purple,background:COLORS.surface,opacity:enter(26,52)}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:14}}>
            <EyeOff size={40} color={COLORS.purple}/>
            <div style={{padding:'7px 16px',background:COLORS.purple,color:COLORS.background,fontSize:26,fontWeight:900}}>隐名股东</div>
          </div>
          <div style={{fontSize:23,fontWeight:800,lineHeight:1.5}}>A 实际出资人——<span style={{color:COLORS.purple,fontWeight:900}}>实际出资且实际享有投资权益</span></div>
        </div>
        <div style={{position:'relative'}}>
          <div style={{position:'absolute',left:33,top:0,bottom:0,width:6,background:'linear-gradient(180deg,'+COLORS.mirror+','+COLORS.cyan+' 50%,'+COLORS.mirror+')',opacity:enter(40,66)}}/>
          <div style={{position:'absolute',left:22,top:'46%',padding:'6px 12px',border:'2px solid '+COLORS.mirror,background:COLORS.surface,color:COLORS.cyan,fontSize:20,fontWeight:900,transform:'rotate(-90deg)',opacity:enter(52,78)}}>镜面</div>
        </div>
        <div data-final-knowledge="nominal-shareholder-scene-01-visible" style={{padding:24,border:'3px solid '+COLORS.cyan,background:COLORS.surface,opacity:enter(42,68)}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:14}}>
            <Eye size={40} color={COLORS.cyan}/>
            <div style={{padding:'7px 16px',background:COLORS.cyan,color:COLORS.background,fontSize:26,fontWeight:900}}>显名股东</div>
          </div>
          <div style={{fontSize:23,fontWeight:800,lineHeight:1.5}}>B 名义股东——<span style={{color:COLORS.cyan,fontWeight:900}}>出面替代A与C共同设立公司</span></div>
        </div>
      </div>
      <div data-final-knowledge="nominal-shareholder-scene-01-creditor" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:18}}>
        <div style={{padding:'16px 22px',border:'3px solid '+COLORS.red,background:COLORS.surface,opacity:enter(96,122)}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8}}>
            <Landmark size={34} color={COLORS.red}/>
            <div style={{fontSize:24,fontWeight:900}}>对债权人：出资责任外部化</div>
          </div>
          <div style={{fontSize:22,fontWeight:800,lineHeight:1.5}}>B应对债权人承担<span style={{color:COLORS.red,fontWeight:900}}>补充赔偿责任</span>——<span style={{borderBottom:'2px solid '+COLORS.cyan}}>谁登记，谁对外担责</span></div>
        </div>
        <div style={{padding:'16px 22px',border:'3px dashed '+COLORS.mirror,background:COLORS.surface,opacity:enter(112,138)}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8}}>
            <Cross color={COLORS.red}/>
            <div style={{fontSize:24,fontWeight:900}}>对公司：<span style={{color:COLORS.red}}>不能直接主张</span></div>
          </div>
          <div style={{fontSize:22,fontWeight:800,lineHeight:1.5}}>A可向B主张，但<span style={{color:COLORS.red,fontWeight:900}}>不能直接向公司主张权利</span></div>
        </div>
      </div>
    </div>
  </Shell>;
};

export const NominalShareholder02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="03.2" title="名义股东处分股权">
    <div data-layout="good-faith-fork-2" data-visual-anchor="flow-path" data-visual-grammar="disposal-fork,bona-fide-test" data-text-treatments="soft-highlight,stamp,thin-underline,external-negation" data-focal-rule="nominal-shareholder-scene-02-rule" data-focal-channels="connector,contrast,motion" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:16}}>
      <div data-final-knowledge="nominal-shareholder-scene-02-fork" style={{padding:'16px 22px',border:'3px solid '+COLORS.mirror,background:COLORS.surface,opacity:enter(26,52)}}>
        <div style={{fontSize:25,fontWeight:900,marginBottom:6}}>名义股东未经实际出资人同意，处分股权 → 第三人能否取得？</div>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}><span style={{color:COLORS.cyan,fontWeight:900}}>参照适用善意取得制度</span></div>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:18,flex:1}}>
        <div data-final-knowledge="nominal-shareholder-scene-02-goodfaith" style={{padding:'20px 24px',border:'3px solid '+COLORS.cyan,background:COLORS.surface,opacity:enter(72,98)}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10}}>
            <UserCheck size={36} color={COLORS.cyan}/>
            <div style={{padding:'7px 16px',background:COLORS.cyan,color:COLORS.background,fontSize:24,fontWeight:900}}>善意第三人</div>
          </div>
          <div style={{fontSize:23,fontWeight:900,color:COLORS.cyan,marginBottom:8}}>→ 可以取得股权</div>
          <div style={{fontSize:22,fontWeight:800,lineHeight:1.5}}>要件：<span style={{borderBottom:'2px solid '+COLORS.cyan}}>不知情</span>＋<span style={{borderBottom:'2px solid '+COLORS.cyan}}>合理对价</span>＋<span style={{borderBottom:'2px solid '+COLORS.cyan}}>股权已登记</span></div>
        </div>
        <div data-final-knowledge="nominal-shareholder-scene-02-badfaith" style={{padding:'20px 24px',border:'3px dashed '+COLORS.red,background:COLORS.surface,opacity:enter(88,114)}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10}}>
            <UserX size={36} color={COLORS.red}/>
            <div style={{padding:'7px 16px',background:COLORS.red,color:COLORS.background,fontSize:24,fontWeight:900}}>知情第三人</div>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:8}}>
            <Cross color={COLORS.red}/>
            <div style={{fontSize:23,fontWeight:900,color:COLORS.red}}>不能取得股权</div>
          </div>
          <div style={{fontSize:22,fontWeight:800,lineHeight:1.5}}>对代持事宜知情的，不构成善意，转让行为无效</div>
        </div>
      </div>
      <div data-final-knowledge="nominal-shareholder-scene-02-note" style={{display:'flex',alignItems:'center',gap:14,border:'3px solid '+COLORS.mirror,background:COLORS.surface,padding:'14px 22px',opacity:enter(112,138)}}>
        <Scale size={32} color={COLORS.purple}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}>名义股东<span style={{color:COLORS.red,fontWeight:900}}>不得以股东名册记载、登记机关登记为由</span>否认实际出资人的权利</div>
        <div style={{marginLeft:'auto',padding:'7px 16px',border:'2px solid '+COLORS.cyan,color:COLORS.cyan,fontSize:21,fontWeight:900,transform:'rotate(-2deg)'}}>善意取得判断</div>
      </div>
    </div>
  </Shell>;
};

export const NominalShareholder03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const boundaryProgress=interpolate(frame,[100,168],[0,1],CLAMP);
  return <Shell code="03.2" title="代持 与 冒名">
    <div data-layout="consent-mirror-boundary-3" data-visual-anchor="boundary" data-visual-grammar="agreement-boundary,impersonation-relief" data-text-treatments="label-block,external-negation,stamp,soft-highlight" data-focal-rule="nominal-shareholder-scene-03-rule" data-focal-channels="enclosure,contrast,annotation" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:16}}>
      <div data-final-knowledge="nominal-shareholder-knowledge-3" style={{display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <ShieldAlert size={38} color={COLORS.red}/>
        <div style={{fontSize:26,fontWeight:900}}>判断标准：<span style={{color:COLORS.cyan,fontWeight:900}}>有无代持合意</span></div>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:18,flex:1}}>
        <div data-final-knowledge="nominal-shareholder-scene-03-holding" style={{padding:'22px 26px',border:'3px solid '+COLORS.cyan,background:COLORS.surface,opacity:enter(28,54)}}>
          <div style={{padding:'8px 18px',background:COLORS.cyan,color:COLORS.background,fontSize:24,fontWeight:900,width:'fit-content',marginBottom:12}}>有合意 → 代持</div>
          <div style={{fontSize:23,fontWeight:800,lineHeight:1.55}}>代持股协议<span style={{color:COLORS.cyan,fontWeight:900}}>有效</span>，违反的承担违约责任；<span style={{borderBottom:'2px solid '+COLORS.cyan}}>名义股东对外担责</span></div>
          <div style={{fontSize:21,fontWeight:700,color:COLORS.mirror,lineHeight:1.5,marginTop:8}}>例：A委托B代持——B是股东，登记公示，对外担责</div>
        </div>
        <div data-final-knowledge="nominal-shareholder-scene-03-impersonation" style={{padding:'22px 26px',border:'3px solid '+COLORS.red,background:COLORS.surface,opacity:enter(46,72)}}>
          <div style={{padding:'8px 18px',background:COLORS.red,color:COLORS.background,fontSize:24,fontWeight:900,width:'fit-content',marginBottom:12}}>无合意 → 冒名</div>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:8}}>
            <Cross color={COLORS.red}/>
            <div style={{fontSize:23,fontWeight:800,lineHeight:1.5}}>A偷B身份证冒名设立公司——<span style={{color:COLORS.cyan,fontWeight:900}}>冒名者A享权担责</span>，被冒名者B<span style={{color:COLORS.red,fontWeight:900}}>不享权不担责</span></div>
          </div>
          <div style={{fontSize:21,fontWeight:700,color:COLORS.mirror,lineHeight:1.5,marginTop:8}}>B完全不知情，不具股东身份，出资责任只能由冒名者承担</div>
        </div>
      </div>
      <div style={{position:'relative',height:8}}>
        <div style={{position:'absolute',left:0,right:0,top:0,height:interpolate(boundaryProgress,[0,1],[0,8],CLAMP),background:'linear-gradient(90deg,'+COLORS.cyan+','+COLORS.red+')',opacity:enter(100,122)}}/>
      </div>
      <div style={{display:'flex',alignItems:'center',gap:14,border:'3px solid '+COLORS.mirror,background:COLORS.surface,padding:'14px 22px',opacity:enter(88,116)}}>
        <div style={{padding:'7px 16px',border:'2px solid '+COLORS.red,color:COLORS.red,fontSize:21,fontWeight:900,transform:'rotate(-2deg)'}}>合意是关键</div>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}>名义股东 ≠ 冒名股东：<span style={{color:COLORS.cyan,fontWeight:900}}>有代持合意</span>的，名义股东担责；<span style={{color:COLORS.red,fontWeight:900}}>被冒名者免责</span>、冒名者担责</div>
      </div>
    </div>
  </Shell>;
};

export const NominalShareholder=()=> <AbsoluteFill>
  <TimelineSequence name="01-nominal-shareholder-scene-01" start={SCENES['nominal-shareholder-scene-01'].start} duration={SCENES['nominal-shareholder-scene-01'].duration}><NominalShareholder01Scene/></TimelineSequence>
  <TimelineSequence name="02-nominal-shareholder-scene-02" start={SCENES['nominal-shareholder-scene-02'].start} duration={SCENES['nominal-shareholder-scene-02'].duration}><NominalShareholder02Scene/></TimelineSequence>
  <TimelineSequence name="03-nominal-shareholder-scene-03" start={SCENES['nominal-shareholder-scene-03'].start} duration={SCENES['nominal-shareholder-scene-03'].duration}><NominalShareholder03Scene/></TimelineSequence>
</AbsoluteFill>;