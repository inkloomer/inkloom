import type {ReactNode} from 'react';
import {EyeOff, Eye, Landmark, Scale, FileSignature, Split, ShieldCheck, Ban, UserX, Gavel} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#EFE9DE', ink:'#26262E', teal:'#15725F', red:'#B23A30', gold:'#C9992F', paper:'#FAF5EA'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.teal,color:COLORS.paper}}>{code}</div>
    <div style={{position:'absolute',left:190,right:76,top:46,fontSize:46,fontWeight:900,lineHeight:1.12,borderBottom:'5px solid '+COLORS.red,paddingBottom:12}}>{title}</div>
    <div style={{position:'absolute',left:76,right:76,top:150,bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

export const NominalShareholder01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="03.2" title="代持股协议的四角关系">
    <div data-layout="nominee-board-1" data-visual-anchor="role-pair" data-visual-grammar="nominee-agreement,hidden-vs-visible" data-text-treatments="label-block,thin-underline,soft-highlight" data-focal-rule="nominal-shareholder-scene-01-rule" data-focal-channels="contrast,connector,icon" style={{position:'absolute',inset:0}}>
      <EyeOff size={240} color={COLORS.gold} strokeWidth={1.2} style={{position:'absolute',left:'50%',top:530,translate:'-50% 0',opacity:0.06,pointerEvents:'none'}}/>
      <div data-final-knowledge="nominal-shareholder-scene-01-hidden" style={{position:'absolute',left:24,top:40,width:430,padding:24,border:'5px solid '+COLORS.gold,background:COLORS.gold+'4D',opacity:enter(26,52),translate:interpolate(frame,[26,52],['0px 22px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
          <EyeOff size={42} color={COLORS.gold}/>
          <div style={{fontSize:28,fontWeight:900}}>A 实际出资人</div>
        </div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.5}}>实际出资且实际享有投资权益——<span style={{background:COLORS.gold+'40',padding:'2px 6px',fontWeight:900}}>隐名股东</span></div>
      </div>
      <div data-final-knowledge="nominal-shareholder-scene-01-visible" style={{position:'absolute',right:24,top:40,width:430,padding:24,border:'5px solid '+COLORS.teal,background:COLORS.teal+'4D',opacity:enter(42,68),translate:interpolate(frame,[42,68],['0px 22px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
          <Eye size={42} color={COLORS.teal}/>
          <div style={{fontSize:28,fontWeight:900}}>B 名义股东</div>
        </div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.5}}>出面替代A与C共同设立公司——<span style={{background:COLORS.teal+'28',padding:'2px 6px',fontWeight:900}}>显名股东</span></div>
      </div>
      <div style={{position:'absolute',left:474,top:118,width:interpolate(frame,[58,88],[0,780],CLAMP),height:6,background:COLORS.ink}}/>
      <div style={{position:'absolute',left:864,top:96,width:0,height:0,borderTop:'20px solid '+COLORS.ink,borderLeft:'14px solid transparent',borderRight:'14px solid transparent',opacity:enter(86,98)}}/>
      <div style={{position:'absolute',left:760,top:86,padding:'6px 16px',background:COLORS.paper,border:'3px solid '+COLORS.ink,fontSize:21,fontWeight:900,opacity:enter(96,116)}}>代持股协议（相对性）</div>
      <div style={{position:'absolute',left:474,top:124,width:0,height:0,opacity:0}}/>
      <div data-final-knowledge="nominal-shareholder-knowledge-1" style={{position:'absolute',left:0,right:0,top:250,fontSize:26,fontWeight:900,letterSpacing:4,color:'#7A715F',opacity:enter(78,104)}}>协议有效 · 违反承担违约责任</div>
      <div data-final-knowledge="nominal-shareholder-scene-01-creditor" style={{position:'absolute',left:0,right:0,top:330,bottom:0,display:'grid',gridTemplateColumns:'1fr 1fr',gap:22}}>
        <div style={{position:'relative',padding:'20px 26px',border:'4px solid '+COLORS.red,background:COLORS.red+'4D',opacity:enter(96,122),translate:interpolate(frame,[96,122],['-170px 0px','0px 0px'],CLAMP),display:'flex',flexDirection:'column',justifyContent:'center',gap:12}}>
          <Landmark size={130} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:2,bottom:-2,opacity:0.09,pointerEvents:'none'}}/>
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <Landmark size={38} color={COLORS.red}/>
            <div style={{fontSize:27,fontWeight:900}}>对债权人：出资责任外部化</div>
          </div>
          <div style={{fontSize:23,fontWeight:800,lineHeight:1.45,padding:'10px 14px',background:COLORS.paper,borderLeft:'6px solid '+COLORS.red,opacity:enter(110,132)}}>名义股东B对债权人承担<span style={{background:COLORS.red+'20',padding:'2px 6px',fontWeight:900}}>补充赔偿责任</span></div>
          <div style={{fontSize:23,fontWeight:800,lineHeight:1.45,padding:'10px 14px',background:COLORS.paper,borderLeft:'6px solid '+COLORS.red,opacity:enter(122,144)}}><span style={{fontWeight:900,color:COLORS.red}}>登记公示</span>：谁登记，谁对外担责</div>
          <div style={{fontSize:23,fontWeight:800,lineHeight:1.45,padding:'10px 14px',background:COLORS.paper,borderLeft:'6px solid '+COLORS.red,opacity:enter(134,156)}}>B<span style={{fontWeight:900,borderBottom:'3px solid '+COLORS.red,paddingBottom:1}}>不得以代持对抗</span>债权人</div>
        </div>
        <div style={{position:'relative',padding:'20px 26px',border:'4px dashed '+COLORS.gold,background:COLORS.gold+'4D',opacity:enter(112,138),translate:interpolate(frame,[112,138],['170px 0px','0px 0px'],CLAMP),display:'flex',flexDirection:'column',justifyContent:'center',gap:12}}>
          <FileSignature size={130} color={COLORS.gold} strokeWidth={1.2} style={{position:'absolute',right:2,bottom:-2,opacity:0.09,pointerEvents:'none'}}/>
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <FileSignature size={38} color={COLORS.gold}/>
            <div style={{fontSize:27,fontWeight:900}}>对公司：不能直接主张</div>
          </div>
          <div style={{fontSize:23,fontWeight:800,lineHeight:1.45,padding:'10px 14px',background:COLORS.paper,borderLeft:'6px solid '+COLORS.gold,opacity:enter(126,148)}}>A <span style={{fontWeight:900,color:COLORS.teal}}>可以向名义股东B</span>主张权利（协议相对性）</div>
          <div style={{fontSize:23,fontWeight:800,lineHeight:1.45,padding:'10px 14px',background:COLORS.paper,borderLeft:'6px solid '+COLORS.red,opacity:enter(138,160)}}>A <span style={{fontWeight:900,color:COLORS.red,borderBottom:'3px solid '+COLORS.red,paddingBottom:1}}>不能直接向公司</span>主张权利</div>
        </div>
      </div>
    </div>
  </Shell>;
};

export const NominalShareholder02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="03.2" title="名义股东处分股权">
    <div data-layout="good-faith-fork-2" data-visual-anchor="flow-path" data-visual-grammar="disposal-fork,bona-fide-test" data-text-treatments="soft-highlight,stamp,thin-underline" data-focal-rule="nominal-shareholder-scene-02-rule" data-focal-channels="connector,contrast,motion" data-final-knowledge="nominal-shareholder-knowledge-2" style={{position:'absolute',inset:0}}>
      <Scale size={230} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',left:'50%',top:440,translate:'-50% 0',opacity:0.06,pointerEvents:'none'}}/>
      <div data-final-knowledge="nominal-shareholder-scene-02-fork" style={{position:'absolute',left:0,top:20,width:760,padding:'18px 24px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(26,52),translate:interpolate(frame,[26,52],['0px 22px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,fontSize:26,fontWeight:900,marginBottom:8}}><Split size={30} color={COLORS.ink}/><span>名义股东未经实际出资人同意，处分股权</span></div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.45}}>第三人能否取得股权？<span style={{background:COLORS.teal+'28',padding:'2px 8px',fontWeight:900}}>参照适用善意取得制度</span></div>
      </div>
      <div style={{position:'absolute',left:866,top:170,width:6,height:interpolate(frame,[52,86],[0,100],CLAMP),background:COLORS.ink,opacity:enter(52,86)}}/>
      <div style={{position:'absolute',left:853,top:250,width:0,height:0,borderTop:'16px solid '+COLORS.ink,borderLeft:'12px solid transparent',borderRight:'12px solid transparent',opacity:enter(84,96)}}/>
      <div data-final-knowledge="nominal-shareholder-scene-02-goodfaith" style={{position:'absolute',left:0,top:270,bottom:150,width:840,padding:'20px 26px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'4D',opacity:enter(88,114),translate:interpolate(frame,[88,114],['190px 0px','0px 0px'],CLAMP),display:'flex',flexDirection:'column',justifyContent:'center',gap:14}}>
        <ShieldCheck size={130} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:2,bottom:-2,opacity:0.09,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:12,fontSize:26,fontWeight:900,color:COLORS.teal}}><ShieldCheck size={32} color={COLORS.teal}/>善意第三人 → 可以取得</div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.45,padding:'10px 14px',background:COLORS.paper,borderLeft:'6px solid '+COLORS.teal,opacity:enter(102,124)}}>要件三件，<span style={{fontWeight:900,color:COLORS.teal}}>缺一不可</span>：</div>
        <div style={{display:'flex',gap:10,opacity:enter(114,136)}}>
          <div style={{padding:'8px 16px',background:COLORS.paper,border:'3px solid '+COLORS.teal,fontSize:22,fontWeight:900,color:COLORS.teal}}>不知情</div>
          <div style={{padding:'8px 16px',background:COLORS.paper,border:'3px solid '+COLORS.teal,fontSize:22,fontWeight:900,color:COLORS.teal}}>合理对价</div>
          <div style={{padding:'8px 16px',background:COLORS.paper,border:'3px solid '+COLORS.teal,fontSize:22,fontWeight:900,color:COLORS.teal}}>股权已登记</div>
        </div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.45,padding:'10px 14px',background:COLORS.paper,borderLeft:'6px solid '+COLORS.teal,opacity:enter(126,148)}}>受让人取得<span style={{fontWeight:900,color:COLORS.teal}}>该股权</span>，实际出资人A只能向B追责</div>
      </div>
      <div data-final-knowledge="nominal-shareholder-scene-02-badfaith" style={{position:'absolute',right:0,top:270,bottom:150,width:840,padding:'20px 26px',border:'5px dashed '+COLORS.red,background:COLORS.red+'4D',opacity:enter(100,126),translate:interpolate(frame,[100,126],['-190px 0px','0px 0px'],CLAMP),display:'flex',flexDirection:'column',justifyContent:'center',gap:14}}>
        <Ban size={130} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:2,bottom:-2,opacity:0.09,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:12,fontSize:26,fontWeight:900,color:COLORS.red}}>
          <Ban size={32} color={COLORS.red}/>
          <span>知情第三人 → 不能取得</span>
        </div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.45,padding:'10px 14px',background:COLORS.paper,borderLeft:'6px solid '+COLORS.red,opacity:enter(114,136)}}>第三人对代持事宜<span style={{fontWeight:900,color:COLORS.red}}>知情</span></div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.45,padding:'10px 14px',background:COLORS.paper,borderLeft:'6px solid '+COLORS.red,opacity:enter(126,148)}}><span style={{fontWeight:900,borderBottom:'3px solid '+COLORS.red,paddingBottom:1}}>不构成善意</span>，无善意取得适用余地</div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.45,padding:'10px 14px',background:COLORS.paper,borderLeft:'6px solid '+COLORS.red,opacity:enter(138,160)}}>转让行为<span style={{fontWeight:900,background:COLORS.red+'16',padding:'1px 6px'}}>无效</span>，股权回归原状</div>
      </div>
      <div data-final-knowledge="nominal-shareholder-scene-02-note" style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.ink,background:COLORS.paper,padding:'14px 24px',opacity:enter(112,138)}}>
        <Scale size={38} color={COLORS.gold}/>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.45}}>名义股东<span style={{fontWeight:900,color:COLORS.red}}>不得以股东名册记载、登记机关登记为由</span>否认实际出资人的权利</div>
        <div style={{marginLeft:'auto',padding:'8px 18px',border:'3px solid '+COLORS.ink,background:COLORS.teal,color:COLORS.paper,fontSize:21,fontWeight:900,transform:'rotate(-2deg)'}}>善意取得判断</div>
      </div>
    </div>
  </Shell>;
};

export const NominalShareholder03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const boundaryProgress=interpolate(frame,[100,168],[0,1],CLAMP);
  return <Shell code="03.2" title="代持 与 冒名">
    <div data-layout="consent-boundary-3" data-visual-anchor="boundary" data-visual-grammar="agreement-boundary,impersonation-relief" data-text-treatments="label-block,external-negation,stamp" data-focal-rule="nominal-shareholder-scene-03-rule" data-focal-channels="enclosure,contrast,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="nominal-shareholder-knowledge-3" style={{position:'absolute',left:0,right:0,top:0,display:'flex',alignItems:'center',gap:16,opacity:enter(12,36)}}>
        <Scale size={42} color={COLORS.red}/>
        <div style={{fontSize:28,fontWeight:900}}>判断标准：<span style={{background:COLORS.gold+'42',padding:'2px 12px'}}>有无代持合意</span></div>
      </div>
      <div style={{position:'absolute',left:0,right:0,top:88,height:0,opacity:0}}/>
      <EyeOff size={230} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',left:'50%',top:490,translate:'-50% 0',opacity:0.06,pointerEvents:'none'}}/>
      <div data-final-knowledge="nominal-shareholder-scene-03-holding" style={{position:'absolute',left:24,top:110,bottom:170,width:850,padding:'20px 26px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'4D',opacity:enter(28,54),translate:interpolate(frame,[28,54],['-300px 0px','0px 0px'],CLAMP),display:'flex',flexDirection:'column',justifyContent:'center',gap:12}}>
        <FileSignature size={130} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:2,bottom:-2,opacity:0.09,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <FileSignature size={30} color={COLORS.teal}/>
          <div style={{padding:'8px 18px',background:COLORS.teal,color:COLORS.paper,fontSize:26,fontWeight:900}}>有合意 → 代持</div>
        </div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.45,padding:'10px 14px',background:COLORS.paper,borderLeft:'6px solid '+COLORS.teal,opacity:enter(40,62)}}>代持股协议<span style={{background:COLORS.teal+'28',padding:'2px 6px',fontWeight:900}}>有效</span>，违反承担<span style={{fontWeight:900}}>违约责任</span>——协议无效的情形不存在</div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.45,padding:'10px 14px',background:COLORS.paper,borderLeft:'6px solid '+COLORS.teal,opacity:enter(52,74)}}><span style={{fontWeight:900,color:COLORS.teal}}>B是股东</span>：登记公示，对外担责</div>
        <div style={{fontSize:22,fontWeight:700,color:'#4A5A54',lineHeight:1.5,padding:'10px 14px',background:COLORS.paper,borderLeft:'6px solid '+COLORS.teal,opacity:enter(64,86)}}>例：A委托B代持，与C共同设立公司——实际出资者A、出面者B</div>
      </div>
      <div data-final-knowledge="nominal-shareholder-scene-03-impersonation" style={{position:'absolute',right:24,top:110,bottom:170,width:850,padding:'20px 26px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',opacity:enter(46,72),translate:interpolate(frame,[46,72],['300px 0px','0px 0px'],CLAMP),display:'flex',flexDirection:'column',justifyContent:'center',gap:12}}>
        <UserX size={130} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:2,bottom:-2,opacity:0.09,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <UserX size={30} color={COLORS.red}/>
          <div style={{padding:'8px 18px',background:COLORS.red,color:COLORS.paper,fontSize:26,fontWeight:900}}>无合意 → 冒名</div>
        </div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.45,padding:'10px 14px',background:COLORS.paper,borderLeft:'6px solid '+COLORS.red,opacity:enter(58,80)}}>A偷B身份证冒名设立——名册、章程、工商登记<span style={{fontWeight:900}}>显示的都是B</span></div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.45,padding:'10px 14px',background:COLORS.paper,borderLeft:'6px solid '+COLORS.red,opacity:enter(70,92)}}>实际出资与管理者均是A——<span style={{fontWeight:900,color:COLORS.red}}>冒名者A享权担责</span></div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.45,padding:'10px 14px',background:COLORS.paper,borderLeft:'6px solid '+COLORS.red,opacity:enter(82,104)}}>B完全不知情——<span style={{background:COLORS.red+'20',padding:'2px 6px',fontWeight:900}}>不享权不担责</span>，不具股东身份</div>
      </div>
      <div style={{position:'absolute',left:24,right:24,top:620,height:6,background:COLORS.red,transformOrigin:'left center',transform:'scaleX('+interpolate(boundaryProgress,[0,1],[0,1],CLAMP)+')',opacity:enter(100,122)}}/>
      <div style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:18,border:'4px solid '+COLORS.ink,background:COLORS.paper,padding:'16px 26px',opacity:enter(88,116)}}>
        <Gavel size={34} color={COLORS.red}/>
        <div style={{padding:'8px 18px',border:'3px solid '+COLORS.red,color:COLORS.red,fontSize:22,fontWeight:900,transform:'rotate(-2deg)',background:COLORS.paper}}>合意是关键</div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.45}}>名义股东 ≠ 冒名股东：<span style={{fontWeight:900}}>有代持合意</span>的，名义股东担责；<span style={{fontWeight:900}}>被冒名者免责</span>、冒名者担责</div>
      </div>
    </div>
  </Shell>;
};

export const NominalShareholder=()=> <AbsoluteFill>
  <TimelineSequence name="01-nominal-shareholder-scene-01" start={SCENES['nominal-shareholder-scene-01'].start} duration={SCENES['nominal-shareholder-scene-01'].duration}><NominalShareholder01Scene/></TimelineSequence>
  <TimelineSequence name="02-nominal-shareholder-scene-02" start={SCENES['nominal-shareholder-scene-02'].start} duration={SCENES['nominal-shareholder-scene-02'].duration}><NominalShareholder02Scene/></TimelineSequence>
  <TimelineSequence name="03-nominal-shareholder-scene-03" start={SCENES['nominal-shareholder-scene-03'].start} duration={SCENES['nominal-shareholder-scene-03'].duration}><NominalShareholder03Scene/></TimelineSequence>
</AbsoluteFill>;
