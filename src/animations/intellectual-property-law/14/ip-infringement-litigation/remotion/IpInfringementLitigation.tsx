import type {ReactNode} from 'react';
import {Scale, Ban, Check, Users, Coins, AlertTriangle, Megaphone, Eye, Stamp, GitBranch, Split, Shield, Handshake, FileText, Landmark, Undo2, BadgeCheck, Store, Send, Gavel} from 'lucide-react';
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

export const IpInfringementLitigation01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const licX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="知14.1" title="许可三型 与 起诉资格">
    <div data-layout="license-suit-board-1" data-visual-anchor="comparison-axis" data-visual-grammar="license-tri-band,suit-ability-lane" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="ip-infringement-litigation-scene-01-rule" data-focal-channels="contrast,motion,icon" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="license-type-travel" style={{position:'absolute',left:licX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.navy,fontSize:20,fontWeight:900,color:COLORS.navy,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Handshake size={24} color={COLORS.navy}/>甲许可给乙
      </div>
      <div data-final-knowledge="ip-infringement-litigation-scene-01-license" style={{position:'absolute',left:0,top:90,width:1768,height:230,display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:14}}>
        <div style={{padding:'12px 16px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:6,opacity:enter(44,70)}}>
          <div style={{fontSize:22,fontWeight:900,color:COLORS.red}}><Lock size={26} color={COLORS.red}/>独占许可</div>
          <div style={{fontSize:19,fontWeight:800,lineHeight:1.4}}>只有<span style={{fontWeight:900 }}>乙</span>能用——<span style={{fontWeight:900,color:COLORS.red }}>甲自己也不能用</span></div>
        </div>
        <div style={{padding:'12px 16px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:6,opacity:enter(54,78)}}>
          <div style={{fontSize:22,fontWeight:900,color:COLORS.copper}}><Split size={26} color={COLORS.copper}/>排他许可</div>
          <div style={{fontSize:19,fontWeight:800,lineHeight:1.4}}><span style={{fontWeight:900 }}>甲乙都能用</span>——甲不能再许可他人</div>
        </div>
        <div style={{padding:'12px 16px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:6,opacity:enter(64,88)}}>
          <div style={{fontSize:22,fontWeight:900,color:COLORS.teal}}><Users size={26} color={COLORS.teal}/>普通许可</div>
          <div style={{fontSize:19,fontWeight:800,lineHeight:1.4}}>乙能用、甲能用、甲<span style={{fontWeight:900 }}>还可许可第三人</span></div>
        </div>
      </div>
      <div data-final-knowledge="ip-infringement-law-knowledge-1" data-stateful-terminal="license-type-travel" style={{position:'absolute',left:0,top:340,width:1768,height:340,padding:'14px 22px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(74,100),translate:interpolate(frame,[74,100],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Gavel size={30} color={COLORS.copper}/>谁可以起诉 + 责任门槛</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Users size={24} color={COLORS.copper}/>} enter={enter(88,110)}>权利人/<span style={{fontWeight:900 }}>独占被许可人</span> → <span style={{fontWeight:900,color:COLORS.teal }}>单独起诉</span>（B独占 + A权利人 <span style={{fontWeight:900 }}>(√√)</span>）；排他 → 权利人<span style={{fontWeight:900 }}>不起诉时</span>可单独；普通 → <span style={{fontWeight:900,color:COLORS.red }}>不能单独</span>；著作权集体管理组织也是适格原告</FactRow>
          <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(98,120)}><span style={{fontWeight:900 }}>停止侵权不看过错</span>；赔偿损失要求侵权人<span style={{fontWeight:900,color:COLORS.red }}>有过错</span> + 权利人<span style={{fontWeight:900 }}>有损失</span></FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

const Lock=({size,color}:{readonly size:number;readonly color:string})=> <Ban size={size} color={color}/>;

export const IpInfringementLitigation02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const courtX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="知14.2" title="管辖、赔偿 与 诉讼中止">
    <div data-layout="damgage-compensation-board-2" data-visual-anchor="comparison-axis" data-visual-grammar="jurisdiction-band,compensation-stairs" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="ip-infringement-litigation-scene-02-rule" data-focal-channels="contrast,motion,annotation" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="litigation-file-travel" style={{position:'absolute',left:courtX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.navy,fontSize:20,fontWeight:900,color:COLORS.navy,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Landmark size={24} color={COLORS.navy}/>侵权诉讼
      </div>
      <div data-final-knowledge="ip-infringement-litigation-scene-02-jurisdiction" style={{position:'absolute',left:0,top:90,width:864,height:340,padding:'14px 20px',border:'5px solid '+COLORS.navy,background:COLORS.navy+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <Landmark size={110} color={COLORS.navy} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.navy}}><Landmark size={28} color={COLORS.navy}/>管辖</div>
        <FactRow color={COLORS.navy} bg={COLORS.navy+"3D"} icon={<Check size={24} color={COLORS.navy}/>} enter={enter(58,80)}>通常<span style={{fontWeight:900 }}>中院</span>管；发明专利侵权的基层法院管辖 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Coins size={24} color={COLORS.copper}/>} enter={enter(68,90)}>仅<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>外观设计专利、驰名商标认定、著作权</span>可能由基层法院管</FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Undo2 size={24} color={COLORS.copper}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>诉讼中止</span>：专利/商标中绝对表述（应当/必须/不得中止）<span style={{fontWeight:900,color:COLORS.red }}>基本是错误选项</span></FactRow>
      </div>
      <div data-final-knowledge="ip-infringement-law-knowledge-2" data-stateful-terminal="litigation-file-travel" style={{position:'absolute',left:904,top:90,width:864,height:340,padding:'14px 20px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <Coins size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Coins size={28} color={COLORS.copper}/>法定赔偿阶梯（三档兜底）</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Coins size={24} color={COLORS.copper}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>著作权</span>：<span style={{fontWeight:900 }}>500元-500万</span>；<span style={{fontWeight:900 }}>专利权</span>：<span style={{fontWeight:900 }}>3万-500万</span>；<span style={{fontWeight:900 }}>商标权</span>：<span style={{fontWeight:900 }}>500万以下</span></FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<AlertTriangle size={24} color={COLORS.red}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>惩罚性赔偿</span>：三法均为基数的<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>1-5倍</span></FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Stamp size={24} color={COLORS.red}/>} enter={enter(88,110)}><span style={{fontWeight:900 }}>行政责任</span>：仅<span style={{fontWeight:900,color:COLORS.red }}>商标权</span>——<span style={{fontWeight:900 }}>5年内实施2次以上</span>侵权 → <span style={{fontWeight:900,color:COLORS.red }}>从重处罚</span></FactRow>
      </div>
      <div data-final-knowledge="ip-infringement-litigation-knowledge-3" style={{position:'absolute',left:0,top:454,width:1768,height:240,padding:'14px 22px',border:'5px dashed '+COLORS.gold,background:COLORS.teal+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(88,114),translate:interpolate(frame,[88,114],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Stamp size={30} color={COLORS.copper}/>一线记</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<BadgeCheck size={24} color={COLORS.copper}/>} enter={enter(102,124)}>口诀：<span style={{fontWeight:900 }}>独占独用、排他双方用、普通都可用</span>；<span style={{fontWeight:900 }}>停止侵权不看过错、赔偿要看过错和损失</span>；<span style={{fontWeight:900 }}>实际损失优先、法定赔偿兜底</span></FactRow>
      </div>
    </div>
  </Shell>;
};

export const IpInfringementLitigation=()=> <AbsoluteFill>
  <TimelineSequence name="01-ip-infringement-litigation-scene-01" start={SCENES['ip-infringement-litigation-scene-01'].start} duration={SCENES['ip-infringement-litigation-scene-01'].duration}><IpInfringementLitigation01Scene/></TimelineSequence>
  <TimelineSequence name="02-ip-infringement-litigation-scene-02" start={SCENES['ip-infringement-litigation-scene-02'].start} duration={SCENES['ip-infringement-litigation-scene-02'].duration}><IpInfringementLitigation02Scene/></TimelineSequence>
</AbsoluteFill>;
