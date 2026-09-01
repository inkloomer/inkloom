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

export const PatentRightsInvalidity01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const openX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="知8.1" title="许可三轨 与 开放许可">
    <div data-layout="license-triple-track-1" data-visual-anchor="flow-path" data-visual-grammar="license-triple-track,open-license-gate" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="patent-rights-invalidity-scene-01-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="open-license-travel" style={{position:'absolute',left:openX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.teal,fontSize:20,fontWeight:900,color:COLORS.teal,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Megaphone size={24} color={COLORS.teal}/>开放许可声明
      </div>
      <div data-final-knowledge="patent-rights-invalidity-scene-01-open" style={{position:'absolute',left:0,top:90,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <Megaphone size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.teal}}><Megaphone size={28} color={COLORS.teal}/>开放许可＝格式合同</div>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(58,80)}>自愿 + <span style={{fontWeight:900 }}>书面明确标准</span> + 专利行政部门<span style={{fontWeight:900 }}>公告</span>；他人<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>书面通知+按标准付费</span>即获许可（甲书面通知+付费 <span style={{fontWeight:900 }}>(√)</span>）</FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Coins size={24} color={COLORS.copper}/>} enter={enter(68,90)}>实施期间可<span style={{fontWeight:900,color:COLORS.teal }}>减免年费</span>；可再发<span style={{fontWeight:900 }}>普通许可</span>，<span style={{fontWeight:900,color:COLORS.red }}>不得排他/独占</span></FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(78,100)}><span style={{fontWeight:900,color:COLORS.red }}>不得开放许可四情形</span>：正被独占排他实施 / 权利被保全有纠纷 / <span style={{fontWeight:900 }}>没交年费</span> / <span style={{fontWeight:900 }}>被质押</span>未经质权人同意</FactRow>
      </div>
      <div data-final-knowledge="patent-rights-invalidity-scene-01-license" data-stateful-terminal="open-license-travel" style={{position:'absolute',left:904,top:90,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <GitBranch size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><GitBranch size={28} color={COLORS.copper}/>转让 与 强制许可（口诀：不断供金属）</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Coins size={24} color={COLORS.copper}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>转让权</span>：申请权和专利权都可转让，<span style={{fontWeight:900,color:COLORS.red }}>登记时生效</span>，不登记不影响合同效力</FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Stamp size={24} color={COLORS.red}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>强制许可</span>：发明/实用新型 + 法定情形 → 专利行政部门发<span style={{fontWeight:900,color:COLORS.red }}>普通许可</span>；被许可人付费、<span style={{fontWeight:900,color:COLORS.red }}>无权再许可</span></FactRow>
        <FactRow color={COLORS.gold} bg={COLORS.gold+"4D"} icon={<BadgeCheck size={24} color={COLORS.gold}/>} enter={enter(88,110)}><span style={{fontWeight:900 }}>不断供金属</span>：<span style={{fontWeight:900,color:COLORS.red }}>不</span>实施（授权满3年+申请满4年）/ <span style={{fontWeight:900,color:COLORS.red }}>断</span>垄断 / <span style={{fontWeight:900,color:COLORS.red }}>金</span>国家紧急公益 / <span style={{fontWeight:900,color:COLORS.red }}>供</span>公共健康出口 / <span style={{fontWeight:900,color:COLORS.red }}>属</span>从属专利（乙改进甲 <span style={{fontWeight:900 }}>(√)</span>）</FactRow>
      </div>
    </div>
  </Shell>;
};

export const PatentRightsInvalidity02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const termX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="知8.2" title="保护期、期限补偿 与 无效宣告">
    <div data-layout="term-invalidity-board-2" data-visual-anchor="comparison-axis" data-visual-grammar="term-clock-band,invalidity-scale" data-text-treatments="chip,stamp,external-negation" data-focal-rule="patent-rights-invalidity-scene-02-rule" data-focal-channels="contrast,motion,annotation" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="term-clock-travel" style={{position:'absolute',left:termX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.copper,fontSize:20,fontWeight:900,color:COLORS.copper,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Hourglass size={24} color={COLORS.copper}/>保护期沙漏
      </div>
      <div data-final-knowledge="patent-rights-invalidity-scene-02-term" style={{position:'absolute',left:0,top:90,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <Coins size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Coins size={28} color={COLORS.copper}/>保护期——自实际申请日起算</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:10}}>
          <div style={{padding:'10px 10px',background:COLORS.paper,border:'3px solid '+COLORS.copper,fontSize:19,fontWeight:900,color:COLORS.copper,textAlign:'center'}}>发明<br/><span style={{fontSize:26,fontWeight:900,color:COLORS.red }}>20年</span></div>
          <div style={{padding:'10px 10px',background:COLORS.paper,border:'3px solid '+COLORS.copper,fontSize:19,fontWeight:900,color:COLORS.copper,textAlign:'center'}}>实用新型<br/><span style={{fontSize:26,fontWeight:900,color:COLORS.red }}>10年</span></div>
          <div style={{padding:'10px 10px',background:COLORS.paper,border:'3px solid '+COLORS.copper,fontSize:19,fontWeight:900,color:COLORS.copper,textAlign:'center'}}>外观设计<br/><span style={{fontSize:26,fontWeight:900,color:COLORS.red }}>15年</span></div>
        </div>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<AlertTriangle size={24} color={COLORS.red}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>自中国实际申请日</span>起算，<span style={{fontWeight:900,color:COLORS.red }}>非优先权日</span>——A国1月1日、中国5月1日 → <span style={{fontWeight:900 }}>(×自1月1日起算)</span></FactRow>
        <FactRow color={COLORS.gold} bg={COLORS.gold+"4D"} icon={<Undo2 size={24} color={COLORS.gold}/>} enter={enter(88,110)}><span style={{fontWeight:900 }}>发明延迟补偿</span>：申请满4年 + 实审请求满3年 + 非申请人原因延迟；同日双申后放弃实用新型 → <span style={{fontWeight:900,color:COLORS.red }}>不适用</span>；<span style={{fontWeight:900 }}>新药补偿</span>：上市许可起3个月内申请，≤<span style={{fontWeight:900 }}>5年</span>且有效期≤<span style={{fontWeight:900 }}>14年</span>，<span style={{fontWeight:900,color:COLORS.red }}>不得再次申请</span></FactRow>
      </div>
      <div data-final-knowledge="patent-rights-invalidity-law-knowledge-2" data-stateful-terminal="term-clock-travel" style={{position:'absolute',left:904,top:90,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <Ban size={110} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.red}}><Ban size={28} color={COLORS.red}/>无效宣告</div>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Users size={24} color={COLORS.red}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>任何人</span>可向国务院专利行政部门申请；<span style={{fontWeight:900,color:COLORS.red }}>法院无权宣告</span></FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Undo2 size={24} color={COLORS.copper}/>} enter={enter(78,100)}>后果：<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>视为自始不存在</span>，但对已执行文书、已履行合同<span style={{fontWeight:900,color:COLORS.teal }}>原则无溯及力</span>——已付使用费<span style={{fontWeight:900,color:COLORS.teal }}>不返还</span>（授权期满后无效 <span style={{fontWeight:900,color:COLORS.red }}>(×返还)</span>）</FactRow>
        <FactRow color={COLORS.gold} bg={COLORS.gold+"4D"} icon={<Scale size={24} color={COLORS.gold}/>} enter={enter(88,110)}>明显违反公平 → <span style={{fontWeight:900 }}>返还全部或部分</span>；专利权人<span style={{fontWeight:900,color:COLORS.red }}>恶意</span>致损 → <span style={{fontWeight:900,color:COLORS.red }}>赔偿</span>；被告提无效 → <span style={{fontWeight:900 }}>法院<span style={{fontWeight:900,color:COLORS.red }}>可以不中止</span>（非必须）</span></FactRow>
      </div>
      <div data-final-knowledge="patent-rights-invalidity-knowledge-3" style={{position:'absolute',left:0,top:454,width:1768,height:240,padding:'14px 22px',border:'5px dashed '+COLORS.gold,background:COLORS.teal+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(88,114),translate:interpolate(frame,[88,114],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Stamp size={30} color={COLORS.copper}/>一线记</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<BadgeCheck size={24} color={COLORS.copper}/>} enter={enter(102,124)}>许可三轨：<span style={{fontWeight:900 }}>开放许可</span>（通知+付费即得）/<span style={{fontWeight:900 }}>强制许可</span>（不断供金属）/普通转让<span style={{fontWeight:900 }}>登记生效</span>；期限：<span style={{fontWeight:900 }}>发明20实用新型10外观15</span>；无效：<span style={{fontWeight:900 }}>自始不存在、原则不溯及</span></FactRow>
      </div>
    </div>
  </Shell>;
};

export const PatentRightsInvalidity=()=> <AbsoluteFill>
  <TimelineSequence name="01-patent-rights-invalidity-scene-01" start={SCENES['patent-rights-invalidity-scene-01'].start} duration={SCENES['patent-rights-invalidity-scene-01'].duration}><PatentRightsInvalidity01Scene/></TimelineSequence>
  <TimelineSequence name="02-patent-rights-invalidity-scene-02" start={SCENES['patent-rights-invalidity-scene-02'].start} duration={SCENES['patent-rights-invalidity-scene-02'].duration}><PatentRightsInvalidity02Scene/></TimelineSequence>
</AbsoluteFill>;
