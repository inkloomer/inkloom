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

export const UrbanRealEstateLaw01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const craneX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="经10.1" title="限期动工 与 合作开发">
    <div data-layout="idle-clock-lane-1" data-visual-anchor="timeline-gate" data-visual-grammar="idle-clock-lane,qualification-gate" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="urban-real-estate-law-scene-01-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="idle-clock-travel" style={{position:'absolute',left:craneX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.navy,fontSize:20,fontWeight:900,color:COLORS.navy,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Coins size={24} color={COLORS.navy}/>闲置的建设用地
      </div>
      <div data-final-knowledge="urban-real-estate-law-scene-01-idle" style={{position:'absolute',left:0,top:90,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <Hourglass size={110} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.red}}><Hourglass size={28} color={COLORS.red}/>限期动工两道刻度</div>
        <FactRow color={COLORS.red} icon={<Coins size={24} color={COLORS.red}/>} enter={enter(58,80)}>满<span style={{fontWeight:900 }}>1年</span>未动工：征收出让金<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>20%以下</span>土地闲置费——“25%” <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(68,90)}>满<span style={{fontWeight:900 }}>2年</span>未动工：可<span style={{fontWeight:900,color:COLORS.red }}>无偿收回</span>土地——市人民政府无偿收回 <span style={{fontWeight:900 }}>(√)</span></FactRow>
      </div>
      <div data-final-knowledge="urban-real-estate-law-knowledge-1" data-stateful-terminal="idle-clock-travel" style={{position:'absolute',left:904,top:90,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <Handshake size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.teal}}><Handshake size={28} color={COLORS.teal}/>合作开发房地产</div>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>一方有资质</span> → 合同<span style={{fontWeight:900,color:COLORS.teal }}>有效</span>；<span style={{fontWeight:900,color:COLORS.red }}>双方无资质</span> → 合同<span style={{fontWeight:900,color:COLORS.red }}>无效</span></FactRow>
        <FactRow color={COLORS.copper} icon={<Undo2 size={24} color={COLORS.copper}/>} enter={enter(78,100)}>补救：<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>起诉前</span>一方取得资质，或已合作成立<span style={{fontWeight:900 }}>有资质开发企业</span> → 合同<span style={{fontWeight:900,color:COLORS.teal }}>有效</span></FactRow>
      </div>
    </div>
  </Shell>;
};

export const UrbanRealEstateLaw02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const deedX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="经10.2" title="房地产转让：两证一金一投资">
    <div data-layout="transfer-dual-deed-2" data-visual-anchor="comparison-axis" data-visual-grammar="transfer-condition-band,change-use-gate" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="urban-real-estate-law-scene-02-rule" data-focal-channels="contrast,motion,annotation" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="transfer-deed-travel" style={{position:'absolute',left:deedX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.copper,fontSize:20,fontWeight:900,color:COLORS.copper,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <FileText size={24} color={COLORS.copper}/>转让申请
      </div>
      <div data-final-knowledge="urban-real-estate-law-scene-02-grant" style={{position:'absolute',left:0,top:90,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <FileText size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><FileText size={28} color={COLORS.copper}/>出让地转让条件</div>
        <FactRow color={COLORS.copper} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(58,80)}><span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>两证一金一投资</span>：土地使用权证 + 房屋所有权证；已付全部出让金；完成开发投资总额<span style={{fontWeight:900 }}>25%以上</span></FactRow>
        <FactRow color={COLORS.copper} icon={<Hourglass size={24} color={COLORS.copper}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>使用年限</span>：原约定年限 － 已使用年限 ＝ <span style={{fontWeight:900 }}>剩余年限</span></FactRow>
      </div>
      <div data-final-knowledge="urban-real-estate-law-scene-02-alloc" data-stateful-terminal="transfer-deed-travel" style={{position:'absolute',left:904,top:90,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <Landmark size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.teal}}><Landmark size={28} color={COLORS.teal}/>划拨地转让</div>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(68,90)}>报<span style={{fontWeight:900 }}>有审批权的政府</span>审批；<span style={{fontWeight:900 }}>办出让</span> → <span style={{fontWeight:900 }}>受让方</span>办理并缴纳出让金；<span style={{fontWeight:900 }}>不办出让</span> → <span style={{fontWeight:900 }}>转让方上缴土地收益</span>——留作扩大再生产 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
        <FactRow color={COLORS.gold} icon={<GitBranch size={24} color={COLORS.gold}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>变更用途</span>：<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>两个同意</span>（原出让方 + 市县城市规划主管部门）+ 变更协议<span style={{fontWeight:900 }}>调整出让金</span></FactRow>
      </div>
      <div data-final-knowledge="urban-real-estate-law-knowledge-2" style={{position:'absolute',left:0,top:444,width:1768,height:250,padding:'14px 22px',border:'5px dashed '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(88,114),translate:interpolate(frame,[88,114],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Stamp size={30} color={COLORS.copper}/>记忆口诀</div>
        <FactRow color={COLORS.copper} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(102,124)}>转让：<span style={{fontWeight:900 }}>两证一金一投资</span>；预售：<span style={{fontWeight:900 }}>三证一金一投资</span>——多的一证是<span style={{fontWeight:900 }}>商品房预售许可证明</span></FactRow>
      </div>
    </div>
  </Shell>;
};

export const UrbanRealEstateLaw03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const preX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="经10.3" title="商品房预售、抵押 与 租赁">
    <div data-layout="pre-sale-mortgage-board-3" data-visual-anchor="role-pair" data-visual-grammar="presale-condition-band,mortgage-dual-lane" data-text-treatments="chip,external-negation,soft-highlight" data-focal-rule="urban-real-estate-law-scene-03-rule" data-focal-channels="contrast,motion,annotation" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="presale-license-travel" style={{position:'absolute',left:preX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.navy,fontSize:20,fontWeight:900,color:COLORS.navy,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <FileText size={24} color={COLORS.navy}/>预售许可证明
      </div>
      <div data-final-knowledge="urban-real-estate-law-scene-03-presale" style={{position:'absolute',left:0,top:90,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.indigo,background:COLORS.indigo+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <FileText size={110} color={COLORS.indigo} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.indigo}}><FileText size={28} color={COLORS.indigo}/>商品房预售（三证一金一投资）</div>
        <FactRow color={COLORS.indigo} bg={COLORS.indigo+"3D"} icon={<Check size={24} color={COLORS.indigo}/>} enter={enter(58,80)}><span style={{fontWeight:900 }}>三证</span>：土地使用权证书 + <span style={{fontWeight:900 }}>建设工程规划许可证</span> + <span style={{fontWeight:900,background:COLORS.indigo+'26',padding:'1px 6px'}}>商品房预售许可证明</span></FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(68,90)}>无预售许可证明 → 合同<span style={{fontWeight:900,color:COLORS.red }}>无效</span>；<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>起诉前取得</span> → 可认定<span style={{fontWeight:900,color:COLORS.teal }}>有效</span>；投资仅20% <span style={{fontWeight:900,color:COLORS.red }}>(×须25%)</span></FactRow>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Send size={24} color={COLORS.teal}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>备案</span>：报县级<span style={{fontWeight:900 }}>房产+土地管理部门</span>登记备案；<span style={{fontWeight:900,color:COLORS.teal }}>未备案不影响合同效力</span></FactRow>
      </div>
      <div data-final-knowledge="urban-real-estate-law-knowledge-3" data-stateful-terminal="presale-license-travel" style={{position:'absolute',left:904,top:90,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <Coins size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Coins size={28} color={COLORS.copper}/>抵押 与 租赁</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>出让地</span>：可<span style={{fontWeight:900,color:COLORS.teal }}>单独设定抵押权</span>；地上有房屋的应<span style={{fontWeight:900 }}>同时抵押</span></FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(78,100)}><span style={{fontWeight:900,color:COLORS.red }}>划拨地</span>：<span style={{fontWeight:900,color:COLORS.red }}>不得单独抵押</span>；以房产抵押时<span style={{fontWeight:900 }}>必须同时抵押</span>所占范围内的划拨土地使用权</FactRow>
        <FactRow color={COLORS.gold} bg={COLORS.gold+"4D"} icon={<Coins size={24} color={COLORS.gold}/>} enter={enter(88,110)}><span style={{fontWeight:900 }}>划拨地房屋出租营利</span>：租金中所含<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>土地收益上缴国家</span></FactRow>
      </div>
    </div>
  </Shell>;
};

export const UrbanRealEstateLaw=()=> <AbsoluteFill>
  <TimelineSequence name="01-urban-real-estate-law-scene-01" start={SCENES['urban-real-estate-law-scene-01'].start} duration={SCENES['urban-real-estate-law-scene-01'].duration}><UrbanRealEstateLaw01Scene/></TimelineSequence>
  <TimelineSequence name="02-urban-real-estate-law-scene-02" start={SCENES['urban-real-estate-law-scene-02'].start} duration={SCENES['urban-real-estate-law-scene-02'].duration}><UrbanRealEstateLaw02Scene/></TimelineSequence>
  <TimelineSequence name="03-urban-real-estate-law-scene-03" start={SCENES['urban-real-estate-law-scene-03'].start} duration={SCENES['urban-real-estate-law-scene-03'].duration}><UrbanRealEstateLaw03Scene/></TimelineSequence>
</AbsoluteFill>;
