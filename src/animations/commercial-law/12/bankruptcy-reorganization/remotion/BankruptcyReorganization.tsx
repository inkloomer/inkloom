import type {ReactNode} from 'react';
import {TrainFront, Landmark, FileText, CalendarClock, Users, PauseCircle, Ban, Banknote, Crown, HandCoins} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#EDF0EE', ink:'#1D2420', blue:'#245E8F', orange:'#C2542B', gold:'#B08A2E', paper:'#F8FAF7'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.blue,color:COLORS.paper}}>{code}</div>
    <div style={{position:'absolute',left:190,right:76,top:46,fontSize:46,fontWeight:900,lineHeight:1.12,borderBottom:'5px solid '+COLORS.orange,paddingBottom:12}}>{title}</div>
    <div style={{position:'absolute',left:76,right:76,top:150,bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

export const BankruptcyReorganization01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const trainProgress=interpolate(frame,[110,240],[0,1],CLAMP);
  return <Shell code="12.1" title="重整程序流程">
    <div data-layout="reorganization-rail-1" data-visual-anchor="flow-path" data-visual-grammar="six-station-rail,failure-branch" data-text-treatments="label-block,thin-underline,soft-highlight" data-focal-rule="bankruptcy-reorganization-scene-01-rule" data-focal-channels="connector,motion,enclosure" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="bankruptcy-reorganization-knowledge-1" style={{position:'absolute',left:0,right:0,top:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <TrainFront size={42} color={COLORS.blue}/>
        <div style={{fontSize:27,fontWeight:900}}>启动：债权人或债务人可直接申请重整；清算转重整（受理后、宣告前，债务人或10%以上大股东申请）</div>
      </div>
      <div style={{position:'absolute',left:80,right:80,top:110,height:8,background:COLORS.ink}}/>
      <div style={{position:'absolute',left:80,top:110,width:interpolate(trainProgress,[0,1],[0,1650],CLAMP),height:8,background:COLORS.blue}}/>
      <div data-stateful-source="bankruptcy-reorganization-train" style={{position:'absolute',left:interpolate(trainProgress,[0,1],[60,1660],CLAMP),top:88,opacity:trainProgress>0.94?0:1,zIndex:4}}><TrainFront size={54} color={COLORS.orange}/></div>
      <div style={{position:'absolute',left:0,right:0,top:170,display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:18}}>
        <div data-final-knowledge="bankruptcy-reorganization-scene-01-station-0" style={{padding:'16px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.blue,background:COLORS.paper,minHeight:150,opacity:enter(44,70)}}>
          <div style={{fontSize:25,fontWeight:900,marginBottom:8}}>裁定 · 制定</div>
          <div style={{fontSize:21,fontWeight:700,lineHeight:1.5}}>法院裁定重整并公告；重整计划由债务人或管理人制定——<span style={{fontWeight:900}}>谁管理，谁制定</span></div>
        </div>
        <div data-final-knowledge="bankruptcy-reorganization-scene-01-station-1" style={{padding:'16px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.gold,background:COLORS.paper,minHeight:150,opacity:enter(60,86)}}>
          <div style={{fontSize:25,fontWeight:900,marginBottom:8}}>提交 · 表决</div>
          <div style={{fontSize:21,fontWeight:700,lineHeight:1.5}}>6个月内提交，可延期<span style={{fontWeight:900}}>3个月</span>；分组表决，各组均通过</div>
        </div>
        <div data-final-knowledge="bankruptcy-reorganization-scene-01-station-2" style={{padding:'16px 22px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.orange,background:COLORS.paper,minHeight:150,opacity:enter(76,102)}}>
          <div style={{fontSize:25,fontWeight:900,marginBottom:8}}>批准 · 执行</div>
          <div style={{fontSize:21,fontWeight:700,lineHeight:1.5}}>法院批准重整计划；债务人执行、管理人监督</div>
        </div>
      </div>
      <div data-final-knowledge="bankruptcy-reorganization-scene-01-failure" style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:18,border:'5px solid '+COLORS.orange,background:COLORS.paper,padding:'16px 26px',opacity:enter(100,128)}}>
        <Landmark size={40} color={COLORS.orange}/>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.5}}>失败分叉：缺乏挽救可能、欺诈恶意减少财产、无法执行职务、未按期提出计划、计划未通过或未批准——<span style={{background:COLORS.orange+'24',padding:'2px 8px',fontWeight:900}}>终止重整并宣告破产</span>；执行失败的，终止执行并宣告破产</div>
        <div data-stateful-terminal="bankruptcy-reorganization-train" style={{marginLeft:'auto',padding:'8px 18px',border:'3px solid '+COLORS.ink,background:COLORS.blue,color:COLORS.paper,fontSize:21,fontWeight:900,opacity:enter(150,172)}}>重整列车到站</div>
      </div>
    </div>
  </Shell>;
};

export const BankruptcyReorganization02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="12.1" title="分组表决">
    <div data-layout="voting-groups-2" data-visual-anchor="boundary" data-visual-grammar="five-voting-groups,dual-threshold" data-text-treatments="stamp,soft-highlight,label-block" data-focal-rule="bankruptcy-reorganization-scene-02-rule" data-focal-channels="enclosure,contrast,annotation" data-final-knowledge="bankruptcy-reorganization-knowledge-2" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="bankruptcy-reorganization-scene-02-groups" style={{position:'absolute',left:0,top:0,width:900,padding:'22px 26px',border:'5px solid '+COLORS.blue,background:COLORS.paper,opacity:enter(28,54)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
          <Users size={40} color={COLORS.blue}/>
          <div style={{fontSize:27,fontWeight:900}}>五个表决组</div>
        </div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55}}>①担保债权人组 ②职工债权人组 ③税收债权人组 ④普通债权人组 ⑤必要时设出资人组——<span style={{fontWeight:900}}>各组均通过</span>重整计划才算整体通过</div>
      </div>
      <div data-final-knowledge="bankruptcy-reorganization-scene-02-threshold" style={{position:'absolute',right:0,top:0,width:780,padding:'22px 26px',border:'5px solid '+COLORS.gold,background:COLORS.paper,opacity:enter(46,72)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
          <FileText size={40} color={COLORS.gold}/>
          <div style={{fontSize:27,fontWeight:900}}>组内双门槛</div>
        </div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55}}>①出席<span style={{background:COLORS.blue+'24',padding:'2px 8px',fontWeight:900}}>人数过半</span> ②所代表债权额占该组债权总额<span style={{background:COLORS.gold+'40',padding:'2px 8px',fontWeight:900}}>2/3以上</span>——人数与债权额须同时满足</div>
      </div>
      <div style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.orange,background:COLORS.paper,padding:'14px 24px',opacity:enter(76,104)}}>
        <Crown size={38} color={COLORS.orange}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}>易错：同组过半数同意<span style={{fontWeight:900}}>不够</span>——还须所代表债权额达该组债权总额的<span style={{fontWeight:900}}>2/3以上</span>，且各组均须通过</div>
      </div>
    </div>
  </Shell>;
};

export const BankruptcyReorganization03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="12.1" title="重整期间的营业保护">
    <div data-layout="protection-lanes-3" data-visual-anchor="comparison-axis" data-visual-grammar="secured-right-pause,dividend-ban" data-text-treatments="external-negation,label-block,soft-highlight" data-focal-rule="bankruptcy-reorganization-scene-03-rule" data-focal-channels="contrast,spatial,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="bankruptcy-reorganization-knowledge-3" style={{position:'absolute',left:0,right:0,top:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <CalendarClock size={42} color={COLORS.blue}/>
        <div style={{fontSize:27,fontWeight:900}}>重整期间：自法院裁定重整之日起至重整程序终止——<span style={{background:COLORS.gold+'40',padding:'2px 8px'}}>不含重整计划执行期间</span></div>
      </div>
      <div data-final-knowledge="bankruptcy-reorganization-scene-03-pause" style={{position:'absolute',left:24,top:80,width:850,padding:'22px 26px',border:'5px solid '+COLORS.gold,background:COLORS.paper,opacity:enter(28,54)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
          <PauseCircle size={38} color={COLORS.gold}/>
          <div style={{fontSize:26,fontWeight:900}}>暂停行使</div>
        </div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55}}>担保权暂停行使——但担保物有损坏或价值明显减少的可能、足以危害担保权人权利的除外；取回权暂停行使——符合事先约定条件的除外（如合同期限届满）；财产和营业事务由债务人或管理人管理</div>
      </div>
      <div data-final-knowledge="bankruptcy-reorganization-scene-03-ban" style={{position:'absolute',right:24,top:80,width:850,padding:'22px 26px',border:'5px solid '+COLORS.orange,background:COLORS.paper,opacity:enter(46,72)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
          <Ban size={38} color={COLORS.orange}/>
          <div style={{fontSize:26,fontWeight:900,color:COLORS.orange}}>绝对禁止</div>
        </div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55}}>出资人<span style={{fontWeight:900}}>不得请求分红</span>；董监高不得向第三人转让股权，除非<span style={{fontWeight:900}}>法院同意</span></div>
      </div>
      <div data-final-knowledge="bankruptcy-reorganization-scene-03-loan" style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:18,border:'5px solid '+COLORS.blue,background:COLORS.paper,padding:'16px 26px',opacity:enter(74,102)}}>
        <HandCoins size={40} color={COLORS.blue}/>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.5}}>为继续营业而借款的，属于<span style={{background:COLORS.blue+'24',padding:'2px 8px',fontWeight:900}}>共益债务</span>，可以为该借款设定担保</div>
      </div>
    </div>
  </Shell>;
};

export const BankruptcyReorganization=()=> <AbsoluteFill>
  <TimelineSequence name="01-bankruptcy-reorganization-scene-01" start={SCENES['bankruptcy-reorganization-scene-01'].start} duration={SCENES['bankruptcy-reorganization-scene-01'].duration}><BankruptcyReorganization01Scene/></TimelineSequence>
  <TimelineSequence name="02-bankruptcy-reorganization-scene-02" start={SCENES['bankruptcy-reorganization-scene-02'].start} duration={SCENES['bankruptcy-reorganization-scene-02'].duration}><BankruptcyReorganization02Scene/></TimelineSequence>
  <TimelineSequence name="03-bankruptcy-reorganization-scene-03" start={SCENES['bankruptcy-reorganization-scene-03'].start} duration={SCENES['bankruptcy-reorganization-scene-03'].duration}><BankruptcyReorganization03Scene/></TimelineSequence>
</AbsoluteFill>;
