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

export const CopyrightAuthorship01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const brushX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="知3.1" title="作者是谁：创作 与 辅助">
    <div data-layout="authorship-gate-split-1" data-visual-anchor="boundary" data-visual-grammar="authorship-gate,helper-exclude-band" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="copyright-authorship-scene-01-rule" data-focal-channels="contrast,motion,icon" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="authorship-claim-travel" style={{position:'absolute',left:brushX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.navy,fontSize:20,fontWeight:900,color:COLORS.navy,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <GitBranch size={24} color={COLORS.navy}/>谁是作者
      </div>
      <div data-final-knowledge="copyright-authorship-scene-01-author" style={{position:'absolute',left:0,top:90,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <Users size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Users size={28} color={COLORS.copper}/>是作者</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(58,80)}><span style={{fontWeight:900 }}>创作作品的自然人</span>是作者——创作是<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>事实行为</span>，不受行为能力限制（9岁甲创作小说 <span style={{fontWeight:900 }}>(√享有)</span>）</FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Store size={24} color={COLORS.copper}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>单位视为作者</span>：单位<span style={{fontWeight:900 }}>主持</span> + 体现单位<span style={{fontWeight:900 }}>意志</span> + 由单位<span style={{fontWeight:900 }}>负责</span></FactRow>
      </div>
      <div data-final-knowledge="copyright-authorship-knowledge-1" data-stateful-terminal="authorship-claim-travel" style={{position:'absolute',left:904,top:90,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <Ban size={110} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.red}}><Ban size={28} color={COLORS.red}/>不是作者</div>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(68,90)}>为创作进行<span style={{fontWeight:900,color:COLORS.red }}>组织工作、提供咨询意见</span>——丙提供建议 <span style={{fontWeight:900,color:COLORS.red }}>(×不享有)</span></FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(78,100)}>提供<span style={{fontWeight:900 }}>物质条件</span>或<span style={{fontWeight:900,color:COLORS.red }}>其他辅助工作</span>的人——模特甲 <span style={{fontWeight:900,color:COLORS.red }}>(×作者应为摄影家乙)</span></FactRow>
        <FactRow color={COLORS.gold} bg={COLORS.gold+"4D"} icon={<BadgeCheck size={24} color={COLORS.gold}/>} enter={enter(88,110)}>口诀：<span style={{fontWeight:900 }}>创作自然人是作者、单位主持意志负责也当作者</span>；<span style={{fontWeight:900 }}>辅助工作不算创作</span></FactRow>
      </div>
    </div>
  </Shell>;
};

export const CopyrightAuthorship02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const stageX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="知3.2" title="演绎、汇编 与 合作作品">
    <div data-layout="derivative-compile-joint-2" data-visual-anchor="comparison-axis" data-visual-grammar="derivative-double-permit,compile-split-band" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="copyright-authorship-scene-02-rule" data-focal-channels="contrast,motion,annotation" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="stage-adapt-travel" style={{position:'absolute',left:stageX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.navy,fontSize:20,fontWeight:900,color:COLORS.navy,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <GitBranch size={24} color={COLORS.navy}/>电影改舞台剧
      </div>
      <div data-final-knowledge="copyright-authorship-scene-02-derivative" style={{position:'absolute',left:0,top:90,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <GitBranch size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><GitBranch size={28} color={COLORS.copper}/>演绎作品——双重许可</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(58,80)}>甲改编/翻译/注释/整理乙的作品 → 著作权人<span style={{fontWeight:900 }}>甲</span>；甲改编需<span style={{fontWeight:900 }}>乙许可并付费</span></FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<AlertTriangle size={24} color={COLORS.red}/>} enter={enter(68,90)}>丙用甲的作品 → 需<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>甲和乙双重许可</span>——舞台剧涉小说+电影双重改编，仅找甲公司 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(78,100)}>插曲是<span style={{fontWeight:900 }}>可单独使用的作品</span> → 唱片公司只需<span style={{fontWeight:900,color:COLORS.teal }}>王某许可</span> <span style={{fontWeight:900 }}>(√)</span></FactRow>
      </div>
      <div data-final-knowledge="copyright-authorship-law-knowledge-1" data-stateful-terminal="stage-adapt-travel" style={{position:'absolute',left:904,top:90,width:864,height:560,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <Landmark size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.teal}}><Landmark size={28} color={COLORS.teal}/>汇编作品 与 合作作品</div>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Coins size={24} color={COLORS.teal}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>汇编</span>：对象是<span style={{fontWeight:900 }}>作品</span> → 需许可，他人用→<span style={{fontWeight:900 }}>双重许可</span>；对象是<span style={{fontWeight:900 }}>数据材料</span> → 不需许可，他人用→只找<span style={{fontWeight:900 }}>汇编人</span></FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Users size={24} color={COLORS.copper}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>合作</span>：转让、专有使用许可、出质 → <span style={{fontWeight:900 }}>协商一致</span>；收益合理分配；<span style={{fontWeight:900 }}>可分割使用</span> → 各自部分单独著作权</FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(88,110)}>词曲<span style={{fontWeight:900,color:COLORS.teal }}>可分割</span>：甲作曲有权单独授权丙用曲——《春风来》<span style={{fontWeight:900,color:COLORS.red }}>(×侵害整体)</span></FactRow>
      </div>
    </div>
  </Shell>;
};

export const CopyrightAuthorship03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="知3.3" title="视听作品、职务作品 与 委托作品">
    <div data-layout="audiovisual-entrust-columns-3" data-visual-anchor="role-pair" data-visual-grammar="audiovisual-producer-band,entrust-gate" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="copyright-authorship-scene-03-rule" data-focal-channels="contrast,icon,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="copyright-authorship-scene-03-audiovisual" style={{position:'absolute',left:0,top:0,width:560,height:500,padding:'14px 18px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <Megaphone size={100} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:2,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:22,fontWeight:900,color:COLORS.copper}}><Megaphone size={26} color={COLORS.copper}/>视听作品</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(26,48)}>著作权人：原则上<span style={{fontWeight:900 }}>制作人</span>；电影电视剧<span style={{fontWeight:900 }}>之外</span>的有约从约</FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Users size={24} color={COLORS.copper}/>} enter={enter(36,58)}>导演编剧摄影：署名权+获酬权；<span style={{fontWeight:900 }}>剧本音乐</span>等可单独使用 → 作者可<span style={{fontWeight:900 }}>单独行权</span></FactRow>
      </div>
      <div data-final-knowledge="copyright-authorship-scene-03-entrust" style={{position:'absolute',left:604,top:0,width:560,height:500,padding:'14px 18px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(26,52),translate:interpolate(frame,[26,52],['0px 26px','0px 0px'],CLAMP)}}>
        <Send size={100} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:2,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:22,fontWeight:900,color:COLORS.copper}}><Send size={26} color={COLORS.copper}/>委托作品 与 自传体</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(40,62)}>委托创作：<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>有约从约，无约归受托人</span>（《流浪星球》归大刘 <span style={{fontWeight:900 }}>(√)</span>）；委托人在委托目的范围内<span style={{fontWeight:900 }}>免费使用</span></FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(50,72)}><span style={{fontWeight:900 }}>自传体</span>（口述+他人执笔）：有约从约，无约归<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>特定人物</span>（李某 <span style={{fontWeight:900 }}>(√)</span>）</FactRow>
      </div>
      <div data-final-knowledge="copyright-authorship-law-knowledge-1" style={{position:'absolute',left:1208,top:0,width:560,height:500,padding:'14px 18px',border:'5px solid '+COLORS.navy,background:COLORS.navy+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(40,66),translate:interpolate(frame,[40,66],['200px 0px','0px 0px'],CLAMP)}}>
        <Megaphone size={100} color={COLORS.navy} strokeWidth={1.2} style={{position:'absolute',right:2,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:22,fontWeight:900,color:COLORS.navy}}><Megaphone size={26} color={COLORS.navy}/>职务演讲稿</div>
        <FactRow color={COLORS.navy} bg={COLORS.navy+"3D"} icon={<Check size={24} color={COLORS.navy}/>} enter={enter(54,76)}>甲安排秘书写讲话稿、审阅定稿后以<span style={{fontWeight:900 }}>本人名义</span>演讲 → 著作权归<span style={{fontWeight:900 }}>甲</span>，执笔人<span style={{fontWeight:900,color:COLORS.teal }}>得报酬</span></FactRow>
      </div>
      <div data-final-knowledge="copyright-authorship-scene-03-workforhire" style={{position:'absolute',left:0,top:364,width:1768,height:400,padding:'14px 22px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(64,90),translate:interpolate(frame,[64,90],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.red}}><Store size={30} color={COLORS.red}/>职务作品——一般 与 特殊</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Users size={24} color={COLORS.copper}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>一般</span>（为完成工作任务）：著作权归<span style={{fontWeight:900 }}>员工</span>；单位在<span style={{fontWeight:900 }}>业务范围内优先使用</span>；<span style={{fontWeight:900 }}>2年内</span>许可他人以相同方式使用须<span style={{fontWeight:900,color:COLORS.red }}>征得单位同意</span>（大刘 <span style={{fontWeight:900 }}>(√)</span>）</FactRow>
          <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(88,110)}><span style={{fontWeight:900 }}>特殊</span>（归单位，作者仅<span style={{fontWeight:900 }}>署名权</span>）：<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>四图一件</span>——工程图、产品图、地图、示意图、计算机软件；报社电台<span style={{fontWeight:900 }}>媒体工作人员</span>作品；法律规<span style={{fontWeight:900 }}>合同约定</span>归单位</FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const CopyrightAuthorship04Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const photoX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="知3.4" title="美术原件转移：展览权跟着原件走">
    <div data-layout="original-transfer-scale-4" data-visual-anchor="boundary" data-visual-grammar="original-transfer-scale,wechat-misuse-band" data-text-treatments="chip,external-negation,soft-highlight" data-focal-rule="copyright-authorship-scene-04-rule" data-focal-channels="contrast,motion,annotation" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="original-transfer-travel" style={{position:'absolute',left:photoX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.copper,fontSize:20,fontWeight:900,color:COLORS.copper,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Store size={24} color={COLORS.copper}/>《秋收》卖出
      </div>
      <div data-final-knowledge="copyright-authorship-scene-04-transfer" data-stateful-terminal="original-transfer-travel" style={{position:'absolute',left:0,top:90,width:1768,height:250,padding:'14px 22px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:10,opacity:enter(44,70),translate:interpolate(frame,[44,70],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <div style={{padding:'12px 16px',background:COLORS.teal+'59',border:'4px solid '+COLORS.teal,fontSize:20,fontWeight:900,color:COLORS.teal}}>原件所有人乙获得：<span style={{fontWeight:900 }}>原件展览权</span></div>
          <div style={{padding:'12px 16px',background:COLORS.paper,border:'4px solid '+COLORS.copper,fontSize:20,fontWeight:900,color:COLORS.copper}}>著作权人甲保留：<span style={{fontWeight:900 }}>其他著作权</span></div>
        </div>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(68,90)}>画<span style={{fontWeight:900 }}>未发表</span>时，乙展览原件<span style={{fontWeight:900,color:COLORS.teal }}>不侵犯发表权</span></FactRow>
      </div>
      <div data-final-knowledge="copyright-authorship-knowledge-2" style={{position:'absolute',left:0,top:364,width:1768,height:400,padding:'14px 22px',border:'5px dashed '+COLORS.red,background:COLORS.red+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(64,90),translate:interpolate(frame,[64,90],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.red}}><Ban size={30} color={COLORS.red}/>小芳买画拍照发微博</div>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(78,100)}>原件所有人只享有<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>展览权</span>——拍照发微博侵犯<span style={{fontWeight:900,color:COLORS.red }}>复制权+信息网络传播权</span> <span style={{fontWeight:900 }}>(×合法)</span></FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<BadgeCheck size={24} color={COLORS.copper}/>} enter={enter(88,110)}>口诀：<span style={{fontWeight:900 }}>展览权随原件走</span>，其他著作权留在作者手里；未发表原件展出<span style={{fontWeight:900,color:COLORS.teal }}>不视为发表</span></FactRow>
      </div>
    </div>
  </Shell>;
};

export const CopyrightAuthorship=()=> <AbsoluteFill>
  <TimelineSequence name="01-copyright-authorship-scene-01" start={SCENES['copyright-authorship-scene-01'].start} duration={SCENES['copyright-authorship-scene-01'].duration}><CopyrightAuthorship01Scene/></TimelineSequence>
  <TimelineSequence name="02-copyright-authorship-scene-02" start={SCENES['copyright-authorship-scene-02'].start} duration={SCENES['copyright-authorship-scene-02'].duration}><CopyrightAuthorship02Scene/></TimelineSequence>
  <TimelineSequence name="03-copyright-authorship-scene-03" start={SCENES['copyright-authorship-scene-03'].start} duration={SCENES['copyright-authorship-scene-03'].duration}><CopyrightAuthorship03Scene/></TimelineSequence>
  <TimelineSequence name="04-copyright-authorship-scene-04" start={SCENES['copyright-authorship-scene-04'].start} duration={SCENES['copyright-authorship-scene-04'].duration}><CopyrightAuthorship04Scene/></TimelineSequence>
</AbsoluteFill>;
