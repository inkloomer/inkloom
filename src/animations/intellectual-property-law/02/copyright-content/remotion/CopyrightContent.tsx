import type {ReactNode} from 'react';
import {Scale, Ban, Check, Users, Coins, AlertTriangle, Megaphone, Eye, Stamp, GitBranch, Split, Shield, Handshake, FileText, Landmark, Undo2, BadgeCheck, Store, Send} from 'lucide-react';
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

export const CopyrightContent01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const publishX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="知2.1" title="著作人身权：四项不能继承转让">
    <div data-layout="moral-rights-quartet-1" data-visual-anchor="role-pair" data-visual-grammar="moral-quartet-band,publish-once-clock" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="copyright-content-scene-01-rule" data-focal-channels="contrast,motion,annotation" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="publish-once-travel" style={{position:'absolute',left:publishX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.navy,fontSize:20,fontWeight:900,color:COLORS.navy,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Megaphone size={24} color={COLORS.navy}/>发表权·一次性
      </div>
      <div data-final-knowledge="copyright-content-scene-01-quartet" style={{position:'absolute',left:0,top:90,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <Users size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Users size={28} color={COLORS.copper}/>四项人身权——<span style={{fontWeight:900,color:COLORS.red }}>不能继承、转让</span></div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Megaphone size={24} color={COLORS.copper}/>} enter={enter(58,80)}><span style={{fontWeight:900 }}>发表权</span>：决定是否<span style={{fontWeight:900 }}>公之于众</span>——发到网上没人看也算发表；判断模型：<span style={{fontWeight:900 }}>未经同意公开未公开作品</span></FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Stamp size={24} color={COLORS.copper}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>署名权</span>：违背作者署名决定即侵——乙署张三、丙删除署名 <span style={{fontWeight:900 }}>(√均侵)</span>；可署真名假名笔名艺名，也<span style={{fontWeight:900 }}>可不署名</span></FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<EditIcon />} enter={enter(78,100)}><span style={{fontWeight:900 }}>修改权</span>：未经许可改动（形式内容都算）；报社期刊可<span style={{fontWeight:900,color:COLORS.red }}>文字性修改、删节</span>，图书出版者<span style={{fontWeight:900,color:COLORS.red }}>须经许可</span></FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Shield size={24} color={COLORS.red}/>} enter={enter(88,110)}><span style={{fontWeight:900,color:COLORS.red }}>保护作品完整权</span>：改动达<span style={{fontWeight:900 }}>歪曲意图、损害声誉</span>程度；一个行为可能<span style={{fontWeight:900 }}>同侵修改权+完整权</span></FactRow>
      </div>
      <div data-final-knowledge="copyright-content-law-knowledge-1" data-stateful-terminal="publish-once-travel" style={{position:'absolute',left:904,top:90,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <Undo2 size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.teal}}><Undo2 size={28} color={COLORS.teal}/>发表权的一次性 与 代为行使</div>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>一次性权利</span>：首次演出已<span style={{fontWeight:900 }}>公之于众</span>，他人拍摄发朋友圈<span style={{fontWeight:900,color:COLORS.red }}>不再侵发表权</span> <span style={{fontWeight:900 }}>(×)</span></FactRow>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>可代为行使</span>：生前未发表且<span style={{fontWeight:900 }}>未明确表示不发表</span> → 死后<span style={{fontWeight:900 }}>50年内</span>由<span style={{fontWeight:900 }}>继承人/受遗赠人</span>代为发表</FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Users size={24} color={COLORS.copper}/>} enter={enter(88,110)}>没有继承人 → <span style={{fontWeight:900 }}>作品原件所有人</span>代为行使</FactRow>
      </div>
    </div>
  </Shell>;
};

const EditIcon=()=> <FileText size={24} color="#8A4B2F"/>;

export const CopyrightContent02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const uploadX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="知2.2" title="著作财产权：复制、发行、网传">
    <div data-layout="property-copy-upload-lane-2" data-visual-anchor="flow-path" data-visual-grammar="copy-reproduce-band,upload-gate" data-text-treatments="chip,stamp,external-negation" data-focal-rule="copyright-content-scene-02-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="upload-novel-travel" style={{position:'absolute',left:uploadX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.red,fontSize:20,fontWeight:900,color:COLORS.red,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Coins size={24} color={COLORS.red}/>扫描上传小说
      </div>
      <div data-final-knowledge="copyright-content-scene-02-copy" style={{position:'absolute',left:0,top:90,width:864,height:330,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <Split size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Split size={28} color={COLORS.copper}/>复制权 与 发行权</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(58,80)}><span style={{fontWeight:900 }}>复制权</span>＝<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>再现作品</span>：录音录像、上传下载、复制、<span style={{fontWeight:900 }}>临摹、拍照</span>——翻拍《秋收》画作 <span style={{fontWeight:900 }}>(√)</span></FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Store size={24} color={COLORS.copper}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>发行权</span>：向公众<span style={{fontWeight:900 }}>卖/送</span>作品<span style={{fontWeight:900 }}>原件或复制件</span>——<span style={{fontWeight:900 }}>有形载体</span>；<span style={{fontWeight:900,color:COLORS.red }}>发到网上不侵发行权</span></FactRow>
      </div>
      <div data-final-knowledge="copyright-content-law-knowledge-2" data-stateful-terminal="upload-novel-travel" style={{position:'absolute',left:904,top:90,width:864,height:330,padding:'14px 20px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <Megaphone size={110} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.red}}><Megaphone size={28} color={COLORS.red}/>信息网络传播权——自选时空</div>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Check size={24} color={COLORS.red}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>上传到网络</span>，公众可<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>自选时间地点</span>获得——甲上传乙的小说 <span style={{fontWeight:900,color:COLORS.red }}>同侵复制权+信息网络传播权</span></FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(78,100)}>“侵犯了广播权” <span style={{fontWeight:900,color:COLORS.red }}>(×)</span>——网传是<span style={{fontWeight:900 }}>信息网络传播权</span>，不是广播权</FactRow>
      </div>
      <div data-final-knowledge="copyright-content-knowledge-3" style={{position:'absolute',left:0,top:444,width:1768,height:250,padding:'14px 22px',border:'5px dashed '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(88,114),translate:interpolate(frame,[88,114],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Stamp size={30} color={COLORS.copper}/>记忆口诀</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<BadgeCheck size={24} color={COLORS.copper}/>} enter={enter(102,124)}>人身权：<span style={{fontWeight:900 }}>发表一次性、署名可匿名</span>；财产权：<span style={{fontWeight:900 }}>复制再现、网传自选时空</span>；财产权能<span style={{fontWeight:900 }}>继承、转让</span>，需著作权人<span style={{fontWeight:900 }}>同意并给钱</span></FactRow>
      </div>
    </div>
  </Shell>;
};

export const CopyrightContent03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="知2.3" title="表演权、广播权 与 出租权">
    <div data-layout="perform-broadcast-rent-triad-3" data-visual-anchor="concept-icon" data-visual-grammar="perform-broadcast-split,rent-object-gate" data-text-treatments="chip,external-negation,soft-highlight" data-focal-rule="copyright-content-scene-03-rule" data-focal-channels="contrast,icon,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="copyright-content-scene-03-perform" style={{position:'absolute',left:0,top:0,width:864,height:340,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <Users size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Users size={28} color={COLORS.copper}/>表演权——当场看 或 机械表演</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(26,48)}>公开<span style={{fontWeight:900 }}>表演</span>作品 + 公开<span style={{fontWeight:900 }}>播送对作品的表演</span>：商演唱歌 → 咖啡店播放该演唱</FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<AlertTriangle size={24} color={COLORS.red}/>} enter={enter(36,58)}>飞机上播放正版录音制品中的歌 → <span style={{fontWeight:900,color:COLORS.red }}>机械表演，侵犯表演权</span> <span style={{fontWeight:900 }}>(×不侵权)</span></FactRow>
      </div>
      <div data-final-knowledge="copyright-content-scene-03-broadcast" style={{position:'absolute',left:904,top:0,width:864,height:340,padding:'14px 20px',border:'5px solid '+COLORS.navy,background:COLORS.navy+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <Megaphone size={110} color={COLORS.navy} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.navy}}><Megaphone size={28} color={COLORS.navy}/>广播权——按表听（不能自选时空）</div>
        <FactRow color={COLORS.navy} bg={COLORS.navy+"3D"} icon={<Check size={24} color={COLORS.navy}/>} enter={enter(40,62)}><span style={{fontWeight:900 }}>有线、无线</span>方式公开传播或<span style={{fontWeight:900 }}>转播</span>作品；公众<span style={{fontWeight:900,color:COLORS.red }}>不能自选</span>时间地点</FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Check size={24} color={COLORS.red}/>} enter={enter(50,72)}>村口喇叭传播电台节目中的音乐 → <span style={{fontWeight:900,color:COLORS.red }}>侵犯广播权</span></FactRow>
      </div>
      <div data-final-knowledge="copyright-content-scene-03-rent" style={{position:'absolute',left:0,top:364,width:1768,height:250,padding:'14px 22px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(64,90),translate:interpolate(frame,[64,90],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.teal}}><Coins size={30} color={COLORS.teal}/>出租权——对象两样</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(78,100)}>仅限出租<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>视听作品、计算机软件</span>的原件或复制件</FactRow>
          <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(88,110)}>出租<span style={{fontWeight:900 }}>书</span> → 对象不符，<span style={{fontWeight:900,color:COLORS.red }}>不侵犯出租权</span> <span style={{fontWeight:900 }}>(×)</span></FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const CopyrightContent=()=> <AbsoluteFill>
  <TimelineSequence name="01-copyright-content-scene-01" start={SCENES['copyright-content-scene-01'].start} duration={SCENES['copyright-content-scene-01'].duration}><CopyrightContent01Scene/></TimelineSequence>
  <TimelineSequence name="02-copyright-content-scene-02" start={SCENES['copyright-content-scene-02'].start} duration={SCENES['copyright-content-scene-02'].duration}><CopyrightContent02Scene/></TimelineSequence>
  <TimelineSequence name="03-copyright-content-scene-03" start={SCENES['copyright-content-scene-03'].start} duration={SCENES['copyright-content-scene-03'].duration}><CopyrightContent03Scene/></TimelineSequence>
</AbsoluteFill>;
