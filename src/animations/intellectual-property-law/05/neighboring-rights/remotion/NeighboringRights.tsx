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

export const NeighboringRights01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const chainX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="知5.1" title="邻接权三主体：甲乙丙丁链条">
    <div data-layout="subject-chain-lane-1" data-visual-anchor="flow-path" data-visual-grammar="subject-chain-lane,term-band" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="neighboring-rights-scene-01-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="song-chain-travel" style={{position:'absolute',left:chainX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.navy,fontSize:20,fontWeight:900,color:COLORS.navy,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Coins size={24} color={COLORS.navy}/>歌曲《法考的故事》
      </div>
      <div data-final-knowledge="neighboring-rights-scene-01-chain" style={{position:'absolute',left:0,top:90,width:1768,height:120,padding:'12px 22px',border:'5px solid '+COLORS.navy,background:COLORS.navy+'59',display:'flex',alignItems:'center',gap:14,opacity:enter(44,70)}}>
        <Chip color={COLORS.copper} icon={<Users size={24} color={COLORS.copper}/>} text="甲 创作→著作权"/>
        <div style={{fontSize:24,fontWeight:900,color:COLORS.navy}}>→</div>
        <Chip color={COLORS.copper} icon={<Users size={24} color={COLORS.copper}/>} text="乙 演唱→表演者权"/>
        <div style={{fontSize:24,fontWeight:900,color:COLORS.navy}}>→</div>
        <Chip color={COLORS.teal} icon={<Store size={24} color={COLORS.teal}/>} text="丙 录制→录制者权"/>
        <div style={{fontSize:24,fontWeight:900,color:COLORS.navy}}>→</div>
        <Chip color={COLORS.teal} icon={<Megaphone size={24} color={COLORS.teal}/>} text="丁 电台→广播者权"/>
      </div>
      <div data-final-knowledge="neighboring-rights-scene-01-performer" style={{position:'absolute',left:0,top:234,width:864,height:320,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(54,80),translate:interpolate(frame,[54,80],['-200px 0px','0px 0px'],CLAMP)}}>
        <Users size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Users size={28} color={COLORS.copper}/>表演者</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Shield size={24} color={COLORS.copper}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>人身权</span>：表明身份、保护表演形象不受歪曲 → <span style={{fontWeight:900,color:COLORS.red }}>永久保护</span></FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Coins size={24} color={COLORS.copper}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>财产权</span>：许可现场直播、录音录像、复制发行出租、网传——表演后第<span style={{fontWeight:900 }}>50年</span>12月31日</FactRow>
        <FactRow color={COLORS.gold} bg={COLORS.gold+"4D"} icon={<Handshake size={24} color={COLORS.gold}/>} enter={enter(88,110)}><span style={{fontWeight:900 }}>职务表演</span>：人身权归演员；财产权<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>有约从约</span>，无约归演出单位（可业务范围免费使用）</FactRow>
      </div>
      <div data-final-knowledge="neighboring-rights-knowledge-1" data-stateful-terminal="song-chain-travel" style={{position:'absolute',left:904,top:234,width:864,height:320,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(64,90),translate:interpolate(frame,[64,90],['200px 0px','0px 0px'],CLAMP)}}>
        <Store size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.teal}}><Store size={28} color={COLORS.teal}/>录音录像制作者 与 广播者</div>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>录制者</span>：许可复制发行出租网传+获酬；<span style={{fontWeight:900 }}>首次制作完成</span>后第50年12月31日；<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>获酬权</span>：广播/公开播放录音→<span style={{fontWeight:900,color:COLORS.red }}>不需同意但要付费</span></FactRow>
        <FactRow color={COLORS.navy} bg={COLORS.navy+"3D"} icon={<Megaphone size={24} color={COLORS.navy}/>} enter={enter(88,110)}><span style={{fontWeight:900 }}>广播者</span>：许可录制复制网传转播；<span style={{fontWeight:900 }}>首次播出</span>后第50年12月31日；播放<span style={{fontWeight:900 }}>已发表作品</span>只向著作权人付费</FactRow>
      </div>
    </div>
  </Shell>;
};

export const NeighboringRights02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const rentX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="知5.2" title="侵权判断 与 出租对象闸">
    <div data-layout="infringe-rent-gate-2" data-visual-anchor="flow-target" data-visual-grammar="case-verdict-band,rent-object-gate" data-text-treatments="chip,external-negation,soft-highlight" data-focal-rule="neighboring-rights-scene-02-rule" data-focal-channels="contrast,motion,annotation" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="rent-object-travel" style={{position:'absolute',left:rentX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.navy,fontSize:20,fontWeight:900,color:COLORS.navy,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Store size={24} color={COLORS.navy}/>出租行为
      </div>
      <div data-final-knowledge="neighboring-rights-scene-02-case" style={{position:'absolute',left:0,top:90,width:864,height:340,padding:'14px 20px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <Gavel size={110} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.red}}><Gavel size={28} color={COLORS.red}/>《法考的故事》四连判</div>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(58,80)}>乙未经许可商业演唱 → 侵甲的<span style={{fontWeight:900,color:COLORS.red }}>表演权</span> <span style={{fontWeight:900 }}>(×不侵权)</span></FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(68,90)}>丙把乙的演唱制成唱片 → <span style={{fontWeight:900,color:COLORS.red }}>须经表演者乙同意</span> <span style={{fontWeight:900 }}>(×不需要)</span></FactRow>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(78,100)}>丁电台播已发表录音制品 → <span style={{fontWeight:900,color:COLORS.teal }}>不需丙同意</span>，只向著作权人<span style={{fontWeight:900 }}>甲付费</span> <span style={{fontWeight:900 }}>(×需丙同意)</span></FactRow>
      </div>
      <div data-final-knowledge="neighboring-rights-knowledge-2" data-stateful-terminal="rent-object-travel" style={{position:'absolute',left:904,top:90,width:864,height:340,padding:'14px 20px',border:'5px solid '+COLORS.navy,background:COLORS.navy+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <Store size={110} color={COLORS.navy} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.navy}}><Store size={28} color={COLORS.navy}/>出租对象闸</div>
        <FactRow color={COLORS.navy} bg={COLORS.navy+"3D"} icon={<Check size={24} color={COLORS.navy}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>视听作品/计算机软件</span> → 侵<span style={{fontWeight:900,color:COLORS.red }}>著作权人</span>出租权</FactRow>
        <FactRow color={COLORS.navy} bg={COLORS.navy+"3D"} icon={<Check size={24} color={COLORS.navy}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>录制品</span> → 侵<span style={{fontWeight:900,color:COLORS.red }}>录制者</span>出租权；录的是他人表演 → <span style={{fontWeight:900,color:COLORS.red }}>还侵表演者</span>出租权</FactRow>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Ban size={24} color={COLORS.teal}/>} enter={enter(88,110)}><span style={{fontWeight:900 }}>其他对象</span>（书、普通商品）→ <span style={{fontWeight:900,color:COLORS.teal }}>不侵犯出租权</span></FactRow>
      </div>
      <div data-final-knowledge="neighboring-rights-knowledge-3" style={{position:'absolute',left:0,top:454,width:1768,height:240,padding:'14px 22px',border:'5px dashed '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(88,114),translate:interpolate(frame,[88,114],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Stamp size={30} color={COLORS.copper}/>口诀与解题大招</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<BadgeCheck size={24} color={COLORS.copper}/>} enter={enter(102,124)}>口诀：<span style={{fontWeight:900 }}>表演者人身永久财产50年</span>；录制者<span style={{fontWeight:900 }}>首次制作完成起50年</span>；广播者<span style={{fontWeight:900 }}>首次播出起50年、播放已发表只付费</span></FactRow>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(112,134)}>大招：记住权利内容，看<span style={{fontWeight:900 }}>谁未经许可干了这些事</span>——未经许可直播甲的现场表演 → 侵<span style={{fontWeight:900,color:COLORS.red }}>表演者权</span></FactRow>
      </div>
    </div>
  </Shell>;
};

export const NeighboringRights=()=> <AbsoluteFill>
  <TimelineSequence name="01-neighboring-rights-scene-01" start={SCENES['neighboring-rights-scene-01'].start} duration={SCENES['neighboring-rights-scene-01'].duration}><NeighboringRights01Scene/></TimelineSequence>
  <TimelineSequence name="02-neighboring-rights-scene-02" start={SCENES['neighboring-rights-scene-02'].start} duration={SCENES['neighboring-rights-scene-02'].duration}><NeighboringRights02Scene/></TimelineSequence>
</AbsoluteFill>;
