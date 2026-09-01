import type {ReactNode} from 'react';
import {Scale, Ban, Check, Users, Coins, AlertTriangle, Megaphone, Eye, Stamp, GitBranch, Split, Shield, Handshake, FileText, Landmark, Undo2, BadgeCheck, Store, Send, Hourglass} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#EFECE4', ink:'#2B2B33', navy:'#2C4A6E', copper:'#8A4B2F', teal:'#15725F', red:'#B23A30', gold:'#B98A2F', paper:'#FAF6EC'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.navy,color:COLORS.paper}}>{code}</div>
    <div style={{position:'absolute',left:190,right:76,top:46,fontSize:46,fontWeight:900,lineHeight:1.12,borderBottom:'5px solid '+COLORS.navy,paddingBottom:12}}>{title}</div>
    <div style={{position:'absolute',left:76,right:76,top:150,bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

const FactRow=({color,icon,enter,children,bg}:{readonly color:string;readonly icon:ReactNode;readonly enter:number;readonly children:ReactNode;readonly bg?:string})=>(
  <div style={{display:'flex',alignItems:'center',gap:12,padding:'9px 14px',background:bg??COLORS.paper,border:'3px solid '+color,borderLeft:'6px solid '+color,opacity:enter}}>
    <span style={{display:'flex',flexShrink:0}}>{icon}</span>
    <span style={{fontSize:21,fontWeight:800,lineHeight:1.45}}>{children}</span>
  </div>
);

const Chip=({color,icon,text}:{readonly color:string;readonly icon?:ReactNode;readonly text:string})=>(
  <div style={{display:'flex',alignItems:'center',gap:8,padding:'7px 13px',background:COLORS.paper,border:'3px solid '+color,fontSize:20,fontWeight:900,color}}>
    {icon}{text}
  </div>
);

export const PatentGrant01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const claimX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="知7.1" title="谁可以申请：四类归属">
    <div data-layout="grant-ownership-quartet-1" data-visual-anchor="role-pair" data-visual-grammar="ownership-quartet,secret-tech-band" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="patent-grant-scene-01-rule" data-focal-channels="contrast,motion,icon" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="patent-claim-travel" style={{position:'absolute',left:claimX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.navy,fontSize:20,fontWeight:900,color:COLORS.navy,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <FileText size={24} color={COLORS.navy}/>药品制造方法的专利申请
      </div>
      <div data-final-knowledge="patent-grant-scene-01-ownership" style={{position:'absolute',left:0,top:90,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <Users size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Users size={28} color={COLORS.copper}/>归属四类</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(58,80)}><span style={{fontWeight:900 }}>原则</span>：发明创造人甲；授权后申请人成为<span style={{fontWeight:900 }}>专利权人</span></FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Store size={24} color={COLORS.red}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>职务发明</span>：执行任务 / 离职<span style={{fontWeight:900 }}>1年内</span>相关 / 主要利用单位条件 → 归<span style={{fontWeight:900,color:COLORS.red }}>单位</span></FactRow>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Users size={24} color={COLORS.teal}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>合作</span>：约定＞共有；<span style={{fontWeight:900 }}>委托</span>：约定＞<span style={{fontWeight:900 }}>受托人乙</span>——一方转让申请权他方<span style={{fontWeight:900,color:COLORS.teal }}>优先受让</span></FactRow>
        <FactRow color={COLORS.gold} bg={COLORS.gold+"4D"} icon={<Handshake size={24} color={COLORS.gold}/>} enter={enter(88,110)}>合作共有人：<span style={{fontWeight:900,color:COLORS.red }}>一方不同意都不能申请</span>；放弃者可<span style={{fontWeight:900,color:COLORS.teal }}>免费实施</span>；转让/独占排他/出质须<span style={{fontWeight:900 }}>全体同意</span>；<span style={{fontWeight:900 }}>普通许可</span>可单独+收益分配</FactRow>
      </div>
      <div data-final-knowledge="patent-grant-law-knowledge-1" data-stateful-terminal="patent-claim-travel" style={{position:'absolute',left:904,top:90,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <FileText size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.teal}}><FileText size={28} color={COLORS.teal}/>技术合同大招</div>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>技术秘密成果</span>：使用转让收益<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>有约从约</span>；无约且未授权 → 均可<span style={{fontWeight:900 }}>自己用或普通许可</span>（甲许可丙不需告知乙 <span style={{fontWeight:900 }}>(√)</span>）；受托人<span style={{fontWeight:900,color:COLORS.red }}>交付前</span>不得转让第三人</FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(78,100)}>技术转让合同<span style={{fontWeight:900,color:COLORS.red }}>不得限制技术竞争和发展</span>——约定受让人不得改进专利 → <span style={{fontWeight:900,color:COLORS.red }}>无效</span></FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Coins size={24} color={COLORS.copper}/>} enter={enter(88,110)}>专利申请权<span style={{fontWeight:900 }}>可转让</span>，自<span style={{fontWeight:900 }}>登记时</span>申请权转移（不登记不影响合同效力 <span style={{fontWeight:900 }}>(√)</span>）</FactRow>
      </div>
    </div>
  </Shell>;
};

export const PatentGrant02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const priorX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="知7.2" title="专利申请原则 与 优先权">
    <div data-layout="filing-principles-board-2" data-visual-anchor="comparison-axis" data-visual-grammar="filing-principles-band,priority-clock" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="patent-grant-scene-02-rule" data-focal-channels="contrast,motion,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="patent-grant-scene-02-principles" style={{position:'absolute',left:0,top:0,width:864,height:400,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <Landmark size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Landmark size={28} color={COLORS.copper}/>四大申请原则</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(26,48)}><span style={{fontWeight:900 }}>诚实信用</span>：违反 → 驳回/任何人可宣告无效 + 警告、<span style={{fontWeight:900,color:COLORS.red }}>10万元以下罚款</span></FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Stamp size={24} color={COLORS.copper}/>} enter={enter(36,58)}><span style={{fontWeight:900 }}>先申请</span>：授予最先申请的人；同日 → <span style={{fontWeight:900 }}>自行协商</span>，不成<span style={{fontWeight:900,color:COLORS.red }}>全部驳回</span>；申请日=收到之日（邮寄=邮戳日）</FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(46,68)}><span style={{fontWeight:900,color:COLORS.red }}>禁止重复授权</span>：同日可同时申请实用新型+发明，<span style={{fontWeight:900 }}>授权二选一</span>——授权时须<span style={{fontWeight:900,color:COLORS.red }}>放弃实用新型</span></FactRow>
        <FactRow color={COLORS.gold} bg={COLORS.gold+"4D"} icon={<BadgeCheck size={24} color={COLORS.gold}/>} enter={enter(56,78)}>口诀：<span style={{fontWeight:900 }}>先申请、同日协商、优先权日视为申请日</span></FactRow>
      </div>
      <div data-final-knowledge="patent-grant-scene-02-priority" data-stateful-source="priority-date-travel" style={{position:'absolute',left:904,top:0,width:864,height:400,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <Hourglass size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.teal}}><Hourglass size={28} color={COLORS.teal}/>优先权原则——抢注克星</div>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>三条件</span>：第一次在外国/我国申请 + 发明实用新型<span style={{fontWeight:900 }}>12个月内</span>、外观设计<span style={{fontWeight:900 }}>6个月内</span> + 又在中国就<span style={{fontWeight:900 }}>相同主题</span>申请</FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Coins size={24} color={COLORS.copper}/>} enter={enter(78,100)}>后果：<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>优先权日视为申请日</span>——甲1月1日美国申请、5月1日中国申请，乙4月1日抢注 → <span style={{fontWeight:900,color:COLORS.teal }}>甲申请日视为1月1日</span>，仍由甲获授权</FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Undo2 size={24} color={COLORS.copper}/>} enter={enter(88,110)}><span style={{fontWeight:900 }}>优先权恢复</span>：正当理由 + 期限届满起<span style={{fontWeight:900 }}>2个月内</span>可请求恢复</FactRow>
      </div>
      <div data-final-knowledge="patent-grant-knowledge-2" data-stateful-terminal="priority-date-travel" style={{position:'absolute',left:0,top:660,width:1768,height:110,padding:'14px 22px',border:'5px dashed '+COLORS.gold,background:COLORS.teal+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(78,104),translate:interpolate(frame,[78,104],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Stamp size={30} color={COLORS.copper}/>一线记</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(92,114)}>归属口诀：<span style={{fontWeight:900 }}>合作委托有约从约、无约共有归受托方</span>；<span style={{fontWeight:900 }}>职务发明归单位、个人独立归自己</span></FactRow>
          <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(102,124)}>申请口诀：<span style={{fontWeight:900 }}>先申请、同日协商、优先权日视为申请日</span>——题目没说转让，申请人与申请权人是同一人</FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const PatentGrant=()=> <AbsoluteFill>
  <TimelineSequence name="01-patent-grant-scene-01" start={SCENES['patent-grant-scene-01'].start} duration={SCENES['patent-grant-scene-01'].duration}><PatentGrant01Scene/></TimelineSequence>
  <TimelineSequence name="02-patent-grant-scene-02" start={SCENES['patent-grant-scene-02'].start} duration={SCENES['patent-grant-scene-02'].duration}><PatentGrant02Scene/></TimelineSequence>
</AbsoluteFill>;
