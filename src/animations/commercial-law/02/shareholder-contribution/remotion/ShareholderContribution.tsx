import type {ReactNode} from 'react';
import {Banknote, Package, XCircle, Briefcase, FileText, Timer, Zap, Lock, Hammer, User, CreditCard, Award, Heart, KeyRound, PieChart, Ban, CircleDollarSign, ShieldCheck, Scale, ArrowLeftRight, FileSignature} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#EAF0EC', ink:'#1F2A36', green:'#0E7C66', orange:'#C2542B', gold:'#D8A129', paper:'#F6FAF7'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.green,color:COLORS.paper}}>{code}</div>
    <div style={{position:'absolute',left:190,right:76,top:46,fontSize:46,fontWeight:900,lineHeight:1.12,borderBottom:'5px solid '+COLORS.orange,paddingBottom:12}}>{title}</div>
    <div style={{position:'absolute',left:76,right:76,top:150,bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

export const ShareholderContribution01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="02.3" title="出资形式：货币 与 非货币">
    <div data-layout="contribution-docks-1" data-visual-anchor="comparison-axis" data-visual-grammar="money-dock,in-kind-dock" data-text-treatments="label-block,thin-underline,soft-highlight" data-focal-rule="shareholder-contribution-scene-01-rule" data-focal-channels="contrast,icon,spatial" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="shareholder-contribution-knowledge-1" style={{position:'absolute',left:0,right:0,top:0,textAlign:'center',fontSize:26,fontWeight:800,letterSpacing:6,color:'#5C6B64',opacity:enter(12,36)}}>两个泊位 · 要件不同</div>
      <div style={{position:'absolute',left:882,top:40,width:5,height:interpolate(frame,[18,30],[0,18],CLAMP),background:COLORS.ink}}/>
      <div style={{position:'absolute',left:interpolate(frame,[20,42],[884,444],CLAMP),top:56,width:interpolate(frame,[20,42],[0,440],CLAMP),height:5,background:COLORS.ink}}/>
      <div style={{position:'absolute',left:interpolate(frame,[30,52],[884,1324],CLAMP),top:56,width:interpolate(frame,[30,52],[0,440],CLAMP),height:5,background:COLORS.ink}}/>
      <div data-final-knowledge="shareholder-contribution-scene-01-dock-0" style={{position:'absolute',left:24,top:70,bottom:140,width:840,padding:26,border:'5px solid '+COLORS.green,background:COLORS.green+'4D',opacity:enter(28,54),translate:slide(28,54,'-26px 0px'),display:'flex',flexDirection:'column'}}>
        <Banknote size={170} color={COLORS.green} strokeWidth={1.2} style={{position:'absolute',right:2,bottom:-6,opacity:0.08,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:16}}>
          <Banknote size={46} color={COLORS.green}/>
          <div style={{padding:'8px 18px',background:COLORS.ink,color:COLORS.paper,fontSize:28,fontWeight:900}}>货币出资</div>
        </div>
        <div style={{flex:1,display:'flex',alignItems:'center',gap:12,fontSize:25,fontWeight:800,lineHeight:1.6,padding:'14px 18px',background:COLORS.green+'3D',border:'3px solid '+COLORS.green,marginBottom:12}}><CircleDollarSign size={30} color={COLORS.green} style={{flexShrink:0}}/><span>同时满足：<span style={{fontWeight:900}}>按时</span>＋<span style={{fontWeight:900}}>足额</span>＋存入公司账户</span></div>
        <div style={{flex:1,display:'flex',alignItems:'center',fontSize:25,fontWeight:800,lineHeight:1.6,padding:'14px 18px',background:COLORS.green+'3D',border:'3px solid '+COLORS.green}}><span>以违法犯罪所得货币出资的，出资<span style={{background:COLORS.green+'30',padding:'2px 6px',fontWeight:900}}>有效</span>，股东可获得股权；追缴、处罚时拍卖或变卖其股权</span></div>
      </div>
      <div data-final-knowledge="shareholder-contribution-scene-01-dock-1" style={{position:'absolute',right:24,top:70,bottom:140,width:840,padding:26,border:'5px solid '+COLORS.orange,background:COLORS.orange+'66',opacity:enter(46,72),translate:slide(46,72,'26px 0px'),display:'flex',flexDirection:'column'}}>
        <Package size={170} color={COLORS.orange} strokeWidth={1.2} style={{position:'absolute',right:2,bottom:-6,opacity:0.08,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:16}}>
          <Package size={46} color={COLORS.orange}/>
          <div style={{padding:'8px 18px',background:COLORS.ink,color:COLORS.paper,fontSize:28,fontWeight:900}}>非货币财产</div>
          <div style={{fontSize:24,fontWeight:900,color:COLORS.orange,borderBottom:'4px solid '+COLORS.orange,paddingBottom:2}}>可估价＋可转让</div>
        </div>
        <div style={{flex:1,display:'flex',alignItems:'center',fontSize:25,fontWeight:800,lineHeight:1.6,padding:'14px 18px',background:COLORS.green+'3D',border:'3px solid '+COLORS.green,marginBottom:12}}><span>需过户登记的房屋等：<span style={{fontWeight:900}}>交付</span>＋<span style={{fontWeight:900}}>过户登记给公司</span>——自<span style={{background:COLORS.orange+'30',padding:'2px 6px',fontWeight:900}}>实际交付</span>时享有股东权利</span></div>
        <div style={{flex:1,display:'flex',alignItems:'center',fontSize:25,fontWeight:800,lineHeight:1.6,padding:'14px 18px',background:COLORS.green+'3D',border:'3px solid '+COLORS.green}}><span>以无权处分的财产出资：公司可<span style={{fontWeight:900}}>善意取得</span>（不知情＋合理对价＋动产已交付/不动产已过户；核心管理人员知情的，视为公司知情）</span></div>
      </div>
      <div style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:18,border:'4px solid '+COLORS.ink,background:COLORS.paper,padding:'14px 26px',opacity:enter(78,106)}}>
        <Briefcase size={38} color={COLORS.gold}/>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.45}}>股权出资（实质为股权转让）：已评估＋合法持有可转让＋无权利瑕疵或负担＋已履行转让手续；债权出资（实质为债权让与）：应通知债务人，出资后实现不能的风险<span style={{fontWeight:900}}>由公司承担</span>（另有约定除外）</div>
      </div>
    </div>
  </Shell>;
};

export const ShareholderContribution02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const BANS=['劳务','自然人姓名','信用','商誉','名誉','特许经营权'] as const;
  return <Shell code="02.3" title="禁止出资的六项">
    <div data-layout="banned-six-2" data-visual-anchor="typographic-sequence" data-visual-grammar="banned-registry,ban-converge" data-text-treatments="stamp,external-negation,soft-highlight" data-focal-rule="shareholder-contribution-scene-02-rule" data-focal-channels="enclosure,motion,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="shareholder-contribution-knowledge-2" style={{position:'absolute',left:0,right:0,top:0,display:'flex',alignItems:'center',gap:16,opacity:enter(12,36)}}>
        <XCircle size={42} color={COLORS.orange}/>
        <div style={{fontSize:28,fontWeight:900}}>六项禁入——记忆口诀：<span style={{background:COLORS.gold+'4A',padding:'2px 12px'}}>劳自信商名特</span></div>
      </div>
      <Ban size={150} color={COLORS.orange} strokeWidth={1.2} style={{position:'absolute',right:30,top:420,opacity:0.09,pointerEvents:'none'}}/>
      <div style={{position:'absolute',left:0,right:0,top:80,display:'grid',gridTemplateColumns:'repeat(6,minmax(0,1fr))',gap:16}}>
        <div data-final-knowledge="shareholder-contribution-scene-02-ban-0" style={{padding:'30px 8px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.orange,background:COLORS.orange+'4D',textAlign:'center',opacity:enter(30,56),translate:interpolate(frame,[30,56],['0px 24px','0px 0px'],CLAMP)}}>
          <div style={{width:64,height:64,border:'3px solid '+COLORS.orange,margin:'0 auto 16px',display:'grid',placeItems:'center'}}><Hammer size={40} color={COLORS.orange}/></div>
          <div style={{fontSize:29,fontWeight:900}}>劳务</div>
        </div>
        <div data-final-knowledge="shareholder-contribution-scene-02-ban-1" style={{padding:'30px 8px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.orange,background:COLORS.orange+'4D',textAlign:'center',opacity:enter(42,68),translate:interpolate(frame,[42,68],['0px 24px','0px 0px'],CLAMP)}}>
          <div style={{width:64,height:64,border:'3px solid '+COLORS.orange,margin:'0 auto 16px',display:'grid',placeItems:'center'}}><User size={40} color={COLORS.orange}/></div>
          <div style={{fontSize:29,fontWeight:900}}>自然人姓名</div>
        </div>
        <div data-final-knowledge="shareholder-contribution-scene-02-ban-2" style={{padding:'30px 8px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.orange,background:COLORS.orange+'4D',textAlign:'center',opacity:enter(54,80),translate:interpolate(frame,[54,80],['0px 24px','0px 0px'],CLAMP)}}>
          <div style={{width:64,height:64,border:'3px solid '+COLORS.orange,margin:'0 auto 16px',display:'grid',placeItems:'center'}}><CreditCard size={40} color={COLORS.orange}/></div>
          <div style={{fontSize:29,fontWeight:900}}>信用</div>
        </div>
        <div data-final-knowledge="shareholder-contribution-scene-02-ban-3" style={{padding:'30px 8px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.orange,background:COLORS.orange+'4D',textAlign:'center',opacity:enter(66,92),translate:interpolate(frame,[66,92],['0px 24px','0px 0px'],CLAMP)}}>
          <div style={{width:64,height:64,border:'3px solid '+COLORS.orange,margin:'0 auto 16px',display:'grid',placeItems:'center'}}><Award size={40} color={COLORS.orange}/></div>
          <div style={{fontSize:29,fontWeight:900}}>商誉</div>
        </div>
        <div data-final-knowledge="shareholder-contribution-scene-02-ban-4" style={{padding:'30px 8px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.orange,background:COLORS.orange+'4D',textAlign:'center',opacity:enter(78,104),translate:interpolate(frame,[78,104],['0px 24px','0px 0px'],CLAMP)}}>
          <div style={{width:64,height:64,border:'3px solid '+COLORS.orange,margin:'0 auto 16px',display:'grid',placeItems:'center'}}><Heart size={40} color={COLORS.orange}/></div>
          <div style={{fontSize:29,fontWeight:900}}>名誉</div>
        </div>
        <div data-final-knowledge="shareholder-contribution-scene-02-ban-5" style={{padding:'30px 8px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.orange,background:COLORS.orange+'4D',textAlign:'center',opacity:enter(90,116),translate:interpolate(frame,[90,116],['0px 24px','0px 0px'],CLAMP)}}>
          <div style={{width:64,height:64,border:'3px solid '+COLORS.orange,margin:'0 auto 16px',display:'grid',placeItems:'center'}}><KeyRound size={40} color={COLORS.orange}/></div>
          <div style={{fontSize:29,fontWeight:900}}>特许经营权</div>
        </div>
      </div>
      <div style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.orange,background:COLORS.orange+'4D',padding:'14px 24px',opacity:enter(150,176)}}>
        <Ban size={32} color={COLORS.orange}/>
        <div style={{padding:'6px 16px',border:'3px solid '+COLORS.orange,color:COLORS.orange,fontSize:21,fontWeight:900,transform:'rotate(-2deg)'}}>禁入</div>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.4}}>六项均<span style={{fontWeight:900,background:COLORS.orange+'1E',padding:'2px 8px'}}>不可作价出资</span>——不能估价或不能转让的财产不得出资</div>
      </div>
    </div>
  </Shell>;
};

export const ShareholderContribution04Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const Chip=({icon,tone,delay,children}:{readonly icon:ReactNode;readonly tone:string;readonly delay:number;readonly children:ReactNode})=>(
    <div style={{display:'flex',alignItems:'center',gap:10,fontSize:22,fontWeight:800,padding:'10px 14px',background:COLORS.paper,border:'3px solid '+tone,opacity:enter(delay,delay+22),translate:interpolate(frame,[delay,delay+22],['0px 16px','0px 0px'],CLAMP)}}>{icon}{children}</div>
  );
  return <Shell code="02.3" title="股权出资 与 债权出资">
    <div data-layout="equity-credit-dual-4" data-visual-anchor="comparison-axis" data-visual-grammar="equity-four-test,credit-assignment-rule" data-text-treatments="chip,soft-highlight,thin-underline" data-focal-rule="shareholder-contribution-scene-04-rule" data-focal-channels="contrast,enclosure,icon" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="shareholder-contribution-knowledge-4" style={{position:'absolute',left:0,right:0,top:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,opacity:enter(12,36)}}>非货币出资的两条路径 · 要件不同</div>
      <div style={{position:'absolute',left:882,top:44,width:5,height:interpolate(frame,[20,32],[0,20],CLAMP),background:COLORS.ink}}/>
      <div style={{position:'absolute',left:interpolate(frame,[22,44],[884,454],CLAMP),top:62,width:interpolate(frame,[22,44],[0,430],CLAMP),height:5,background:COLORS.ink}}/>
      <div style={{position:'absolute',left:interpolate(frame,[32,54],[884,1314],CLAMP),top:62,width:interpolate(frame,[32,54],[0,430],CLAMP),height:5,background:COLORS.ink}}/>
      <div data-final-knowledge="shareholder-contribution-scene-04-equity" style={{position:'absolute',left:24,top:100,bottom:0,width:860,padding:'20px 26px',border:'4px solid '+COLORS.ink,borderTop:'10px solid '+COLORS.green,background:COLORS.green+'3D',opacity:enter(30,56),translate:interpolate(frame,[30,56],['-26px 0px','0px 0px'],CLAMP),display:'flex',flexDirection:'column',justifyContent:'center',gap:14}}>
        <PieChart size={140} color={COLORS.green} strokeWidth={1.2} style={{position:'absolute',right:2,bottom:-2,opacity:0.09,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:12,fontSize:27,fontWeight:900}}><PieChart size={32} color={COLORS.green}/>股权出资（实质为股权转让）· 四要件</div>
        <div style={{display:'grid',gap:10}}>
          <Chip icon={<CircleDollarSign size={26} color={COLORS.green}/>} tone={COLORS.green} delay={46}>已进行<span style={{fontWeight:900,color:COLORS.green}}>价值评估</span></Chip>
          <Chip icon={<ArrowLeftRight size={26} color={COLORS.green}/>} tone={COLORS.green} delay={58}>合法持有并<span style={{fontWeight:900,color:COLORS.green}}>可依法转让</span></Chip>
          <Chip icon={<ShieldCheck size={26} color={COLORS.green}/>} tone={COLORS.green} delay={70}>无<span style={{fontWeight:900,color:COLORS.orange,borderBottom:'3px solid '+COLORS.orange,paddingBottom:1}}>权利瑕疵或权利负担</span></Chip>
          <Chip icon={<FileSignature size={26} color={COLORS.green}/>} tone={COLORS.green} delay={82}>已履行<span style={{fontWeight:900,color:COLORS.green}}>股权转让手续</span></Chip>
        </div>
      </div>
      <div data-final-knowledge="shareholder-contribution-scene-04-credit" style={{position:'absolute',right:24,top:100,bottom:0,width:860,padding:'20px 26px',border:'4px solid '+COLORS.ink,borderTop:'10px solid '+COLORS.orange,background:COLORS.orange+'3D',opacity:enter(48,74),translate:interpolate(frame,[48,74],['26px 0px','0px 0px'],CLAMP),display:'flex',flexDirection:'column',justifyContent:'center',gap:14}}>
        <FileText size={140} color={COLORS.orange} strokeWidth={1.2} style={{position:'absolute',right:2,bottom:-2,opacity:0.09,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:12,fontSize:27,fontWeight:900}}><FileText size={32} color={COLORS.orange}/>债权出资（实质为债权让与）</div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.5,padding:'11px 14px',background:COLORS.paper,borderLeft:'6px solid '+COLORS.orange,opacity:enter(64,86)}}><span style={{fontWeight:900}}>无须征得债务人同意</span>，但<span style={{fontWeight:900,color:COLORS.orange}}>应通知</span></div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.5,padding:'11px 14px',background:COLORS.paper,borderLeft:'6px solid '+COLORS.orange,opacity:enter(76,98)}}>约定不得转让的债权：<span style={{fontWeight:900}}>金钱债权不得对抗第三人</span></div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.5,padding:'11px 14px',background:COLORS.paper,borderLeft:'6px solid '+COLORS.orange,opacity:enter(88,110)}}>非金钱债权<span style={{fontWeight:900,color:COLORS.orange,borderBottom:'3px solid '+COLORS.orange,paddingBottom:1}}>不得对抗善意第三人</span></div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.5,padding:'11px 14px',background:COLORS.paper,borderLeft:'6px solid '+COLORS.orange,opacity:enter(100,122)}}>出资后实现不能的风险<span style={{fontWeight:900}}>由公司承担</span>（另有约定除外）</div>
      </div>
    </div>
  </Shell>;
};

export const ShareholderContribution03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const clockProgress=interpolate(frame,[80,190],[0,1],CLAMP);
  return <Shell code="02.3" title="出资方式：认缴制 与 实缴制">
    <div data-layout="subscription-clock-3" data-visual-anchor="timeline-gate" data-visual-grammar="five-year-clock,acceleration-trigger" data-text-treatments="thin-underline,label-block,stamp" data-focal-rule="shareholder-contribution-scene-03-rule" data-focal-channels="connector,motion,enclosure" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="shareholder-contribution-knowledge-3" style={{position:'absolute',left:0,top:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <Timer size={44} color={COLORS.green}/>
        <div style={{fontSize:29,fontWeight:900}}>有限公司：限制认缴制</div>
      </div>
      <div data-final-knowledge="shareholder-contribution-scene-03-clock" style={{position:'absolute',left:0,top:70,width:860,padding:'24px 26px',border:'4px solid '+COLORS.ink,background:COLORS.green+'3D',opacity:enter(28,54),translate:interpolate(frame,[28,54],['0px 22px','0px 0px'],CLAMP)}}>
        <Timer size={150} color={COLORS.green} strokeWidth={1.2} style={{position:'absolute',right:6,bottom:-2,opacity:0.08,pointerEvents:'none'}}/>
        <div style={{fontSize:28,fontWeight:900,marginBottom:14}}>按照章程，自公司成立之日起<span style={{background:COLORS.green+'30',padding:'2px 10px',color:COLORS.green}}>5年内</span>缴足</div>
        <div style={{position:'relative',height:30,background:COLORS.ink+'18',marginTop:8}}>
          <div style={{position:'absolute',left:0,top:0,height:30,width:interpolate(clockProgress,[0,1],[0,808],CLAMP),background:COLORS.green,opacity:enter(80,104)}}/>
          <div style={{position:'absolute',left:8,top:4,fontSize:19,fontWeight:900,color:COLORS.paper}}>成立</div>
          <div style={{position:'absolute',right:8,top:4,fontSize:19,fontWeight:900}}>5年</div>
        </div>
      </div>
      <div data-final-knowledge="shareholder-contribution-scene-03-interest" style={{position:'absolute',left:0,top:300,width:860,padding:'22px 26px',border:'4px solid '+COLORS.green,background:COLORS.green+'3D',opacity:enter(46,72),translate:interpolate(frame,[46,72],['0px 20px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,fontSize:27,fontWeight:900,marginBottom:10}}><CircleDollarSign size={30} color={COLORS.green}/><span>出资期限未届满的，股东享有<span style={{borderBottom:'4px solid '+COLORS.green,paddingBottom:2}}>出资期限利益</span></span></div>
        <div style={{fontSize:24,fontWeight:700,lineHeight:1.5}}>期限届满前，<span style={{fontWeight:900,color:COLORS.green,background:COLORS.paper,padding:'1px 6px'}}>无须提前缴纳</span></div>
      </div>
      <div data-final-knowledge="shareholder-contribution-scene-03-accelerate" style={{position:'absolute',left:0,top:500,bottom:0,width:860,padding:'22px 26px',border:'5px solid '+COLORS.orange,background:COLORS.orange+'3D',opacity:enter(108,134)}}>
        <Zap size={160} color={COLORS.orange} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:-4,opacity:0.08,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:10}}>
          <Zap size={38} color={COLORS.orange}/>
          <div style={{fontSize:28,fontWeight:900,color:COLORS.orange}}>加速到期</div>
          <div data-stateful-terminal="shareholder-contribution-acceleration" style={{marginLeft:'auto',padding:'8px 18px',border:'3px solid '+COLORS.ink,background:COLORS.orange,color:COLORS.paper,fontSize:21,fontWeight:900,opacity:enter(150,172)}}>提前缴纳</div>
        </div>
        <div style={{fontSize:24,fontWeight:800,lineHeight:1.6}}>公司不能清偿到期债务时，公司或已到期债权的债权人有权要求未届出资期限的股东<span style={{background:COLORS.orange+'2C',padding:'2px 6px',fontWeight:900}}>提前缴纳出资</span></div>
      </div>
      <div data-stateful-source="shareholder-contribution-acceleration" style={{position:'absolute',left:96,top:interpolate(clockProgress,[0,1],[120,516],CLAMP),padding:'8px 18px',border:'4px solid '+COLORS.orange,background:COLORS.paper,color:COLORS.orange,fontSize:22,fontWeight:900,opacity:clockProgress>0.9?0:1,zIndex:4}}>到期</div>
      <div data-final-knowledge="shareholder-contribution-scene-03-execution" style={{position:'absolute',right:0,top:70,width:850,padding:'22px 26px',border:'3px dashed '+COLORS.orange,background:COLORS.orange+'2E',opacity:enter(64,90),translate:interpolate(frame,[64,90],['0px 20px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,fontSize:26,fontWeight:900,marginBottom:10,color:COLORS.orange}}><Ban size={30} color={COLORS.orange}/>执行程序限制</div>
        <div style={{fontSize:24,fontWeight:700,lineHeight:1.6}}>针对公司的执行程序中，<span style={{fontWeight:900}}>不能直接追加</span>未届出资期限的股东为被执行人</div>
      </div>
      <div data-final-knowledge="shareholder-contribution-scene-03-paidup" style={{position:'absolute',right:0,top:300,width:850,padding:'22px 26px',border:'4px solid '+COLORS.ink,background:COLORS.gold+'44',opacity:enter(80,106),translate:interpolate(frame,[80,106],['0px 20px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,fontSize:26,fontWeight:900,marginBottom:10,color:'#7A5B12'}}><Lock size={30} color="#7A5B12"/>股份公司：实缴资本制</div>
        <div style={{fontSize:24,fontWeight:700,lineHeight:1.6}}>注册资本应当在<span style={{fontWeight:900}}>设立时一次性缴足</span></div>
      </div>
      <div style={{position:'absolute',right:0,top:500,bottom:0,width:850,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.ink,background:COLORS.gold+'3D',padding:'14px 26px',opacity:enter(96,124)}}>
        <Scale size={36} color={COLORS.blue}/>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55}}>对照记忆：<span style={{fontWeight:900,color:COLORS.green,background:COLORS.green+'14',padding:'2px 8px'}}>有限公司＝认缴制</span>（5年内缴足）· <span style={{fontWeight:900,color:'#7A5B12',background:COLORS.gold+'2E',padding:'2px 8px'}}>股份公司＝实缴制</span>（设立时缴足）</div>
      </div>
    </div>
  </Shell>;
};

export const ShareholderContribution=()=> <AbsoluteFill>
  <TimelineSequence name="01-shareholder-contribution-scene-01" start={SCENES['shareholder-contribution-scene-01'].start} duration={SCENES['shareholder-contribution-scene-01'].duration}><ShareholderContribution01Scene/></TimelineSequence>
  <TimelineSequence name="02-shareholder-contribution-scene-02" start={SCENES['shareholder-contribution-scene-02'].start} duration={SCENES['shareholder-contribution-scene-02'].duration}><ShareholderContribution02Scene/></TimelineSequence>
  <TimelineSequence name="02b-shareholder-contribution-scene-04" start={SCENES['shareholder-contribution-scene-04'].start} duration={SCENES['shareholder-contribution-scene-04'].duration}><ShareholderContribution04Scene/></TimelineSequence>
  <TimelineSequence name="03-shareholder-contribution-scene-03" start={SCENES['shareholder-contribution-scene-03'].start} duration={SCENES['shareholder-contribution-scene-03'].duration}><ShareholderContribution03Scene/></TimelineSequence>
</AbsoluteFill>;
