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

export const CopyrightLimitations01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const clockX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="知4.1" title="权利保护期：永久 与 期限">
    <div data-layout="protection-period-clock-1" data-visual-anchor="timeline-gate" data-visual-grammar="permanent-term-split,period-clock" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="copyright-limitations-scene-01-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="protection-clock-travel" style={{position:'absolute',left:clockX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.navy,fontSize:20,fontWeight:900,color:COLORS.navy,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Hourglass size={24} color={COLORS.navy}/>保护期
      </div>
      <div data-final-knowledge="copyright-limitations-scene-01-permanent" style={{position:'absolute',left:0,top:90,width:864,height:250,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <Shield size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Shield size={28} color={COLORS.copper}/>永久保护（人身权三项）</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(58,80)}><span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>署名权、修改权、保护作品完整权</span>——不受时间限制</FactRow>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>自然人作品</span>：发表权+财产权 = <span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>终生 + 死后50年</span>（至第50年12月31日）；合作 → 从<span style={{fontWeight:900 }}>最后一位作者</span>死亡起算——《爱在深秋》截止2019年12月31日 <span style={{fontWeight:900 }}>(√)</span></FactRow>
      </div>
      <div data-final-knowledge="copyright-limitations-law-knowledge-1" data-stateful-terminal="protection-clock-travel" style={{position:'absolute',left:904,top:90,width:864,height:250,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <Hourglass size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.teal}}><Hourglass size={28} color={COLORS.teal}/>视听作品 / 单位作品</div>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>发表权</span>：保护至<span style={{fontWeight:900 }}>创作完成后</span>第50年12月31日</FactRow>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Coins size={24} color={COLORS.teal}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>财产权</span>：保护至<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>发表后</span>第50年12月31日</FactRow>
      </div>
      <div data-final-knowledge="copyright-limitations-knowledge-1" style={{position:'absolute',left:0,top:364,width:1768,height:330,padding:'14px 22px',border:'5px dashed '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(88,114),translate:interpolate(frame,[88,114],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Stamp size={30} color={COLORS.copper}/>口诀与判例</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<BadgeCheck size={24} color={COLORS.copper}/>} enter={enter(102,124)}>口诀：<span style={{fontWeight:900 }}>人身权三项永久保护</span>；<span style={{fontWeight:900 }}>发表、财产：终生加50年</span>；<span style={{fontWeight:900 }}>视听、单位作品：按创作完成或发表起算</span></FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(112,134)}>1969年3月1日甲去世 → 保护期至<span style={{fontWeight:900 }}>2019年12月31日</span>；2019年10月31日乙网站上传 → <span style={{fontWeight:900,color:COLORS.red }}>仍侵信息网络传播权</span> <span style={{fontWeight:900 }}>(√)</span></FactRow>
      </div>
    </div>
  </Shell>;
};

export const CopyrightLimitations02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const fairX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="知4.2" title="合理使用：无需同意也无需付费">
    <div data-layout="fair-use-quadrant-2" data-visual-anchor="comparison-axis" data-visual-grammar="fairuse-quadrant,notice-band" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="copyright-limitations-scene-02-rule" data-focal-channels="contrast,icon,motion" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="fair-use-check-travel" style={{position:'absolute',left:fairX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.teal,fontSize:20,fontWeight:900,color:COLORS.teal,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Check size={24} color={COLORS.teal}/>合理使用三要件
      </div>
      <div data-final-knowledge="copyright-limitations-scene-02-require" style={{position:'absolute',left:0,top:90,width:1768,height:130,padding:'12px 22px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',alignItems:'center',gap:16,opacity:enter(44,70)}}>
        <Check size={32} color={COLORS.teal}/>
        <div style={{fontSize:22,fontWeight:900}}><span style={{fontWeight:900 }}>已发表</span> + <span style={{fontWeight:900 }}>法定方式使用</span> + 注明<span style={{fontWeight:900 }}>作者、作品</span> → <span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>无需同意，也无需付费</span></div>
      </div>
      <div data-final-knowledge="copyright-limitations-scene-02-fairuse" style={{position:'absolute',left:0,top:244,width:1768,height:350,padding:'14px 22px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(54,80),translate:interpolate(frame,[54,80],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Check size={28} color={COLORS.copper}/>法定方式四类</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
          <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<FileText size={24} color={COLORS.copper}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>学习研究</span>：个人学习欣赏；介绍评论<span style={{fontWeight:900 }}>适当引用</span>；课堂教学科研<span style={{fontWeight:900 }}>少量</span>使用仅供教学科研人员</FactRow>
          <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Megaphone size={24} color={COLORS.copper}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>媒体</span>：报道新闻不可避免引用；转载<span style={{fontWeight:900 }}>政治经济宗教时事文章</span>、集会讲话（<span style={{fontWeight:900,color:COLORS.red }}>声明不许刊登的除外</span>）</FactRow>
          <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Landmark size={24} color={COLORS.copper}/>} enter={enter(88,110)}><span style={{fontWeight:900 }}>工作需要</span>：国家机关执行公务；<span style={{fontWeight:900 }}>展馆</span>（图书档案博物美术馆）为陈列保存版本<span style={{fontWeight:900 }}>复制本馆作品</span></FactRow>
          <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Handshake size={24} color={COLORS.teal}/>} enter={enter(98,120)}><span style={{fontWeight:900 }}>公益</span>：<span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>免费表演</span>（不收费无报酬不营利）；临摹摄影<span style={{fontWeight:900 }}>公共场所艺术作品</span>；中国作品译<span style={{fontWeight:900 }}>少数民族语言</span>；<span style={{fontWeight:900 }}>无障碍方式</span>提供阅读障碍者</FactRow>
        </div>
      </div>
      <div data-final-knowledge="copyright-limitations-knowledge-2" style={{position:'absolute',left:0,top:618,width:1768,height:152,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.red,background:COLORS.red+'4D',padding:'10px 24px',opacity:enter(110,136)}}>
        <Ban size={30} color={COLORS.red}/>
        <div style={{fontSize:21,fontWeight:800,lineHeight:1.5}}>马克的汉语小说译成藏文出版 → 不是<span style={{fontWeight:900,color:COLORS.red }}>中国人/单位</span>的作品，<span style={{fontWeight:900,color:COLORS.red }}>不适用合理使用</span> <span style={{fontWeight:900 }}>(√侵权)</span></div>
      </div>
    </div>
  </Shell>;
};

export const CopyrightLimitations03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const licenseX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="知4.3" title="法定许可：无需同意但要付费">
    <div data-layout="statutory-license-board-3" data-visual-anchor="comparison-axis" data-visual-grammar="statutory-band,three-step-model" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="copyright-limitations-scene-03-rule" data-focal-channels="contrast,motion,annotation" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="statutory-license-travel" style={{position:'absolute',left:licenseX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.gold,fontSize:20,fontWeight:900,color:COLORS.copper,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Coins size={24} color={COLORS.copper}/>法定许可
      </div>
      <div data-final-knowledge="copyright-limitations-scene-03-license" style={{position:'absolute',left:0,top:90,width:864,height:340,padding:'14px 20px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <Coins size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Coins size={28} color={COLORS.copper}/>四方式——<span style={{fontWeight:900 }}>无需同意，但要付费</span></div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(58,80)}>① 为<span style={{fontWeight:900 }}>义务教育</span>和国家教育规划编写出版教科书　② 广播电台<span style={{fontWeight:900 }}>电视台</span>播放已发表作品（<span style={{fontWeight:900,color:COLORS.red }}>电视台播视听作品录像制品不适用</span>）</FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(68,90)}>③ <span style={{fontWeight:900 }}>报刊转载摘编</span>　④ 已录制<span style={{fontWeight:900 }}>音乐作品</span>再次录制——郑某重唱录制已付报酬 <span style={{fontWeight:900 }}>(√不侵权)</span></FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>例外</span>：报刊转载、音乐再录中<span style={{fontWeight:900,color:COLORS.red }}>著作权人声明不得使用</span> → 不适用；歌厅购正版卡拉OK<span style={{fontWeight:900,color:COLORS.red }}>直接营业使用</span> <span style={{fontWeight:900,color:COLORS.red }}>(×非四情形)</span></FactRow>
      </div>
      <div data-final-knowledge="copyright-limitations-scene-03-model" data-stateful-terminal="statutory-license-travel" style={{position:'absolute',left:904,top:90,width:864,height:340,padding:'14px 20px',border:'5px solid '+COLORS.navy,background:COLORS.navy+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <GitBranch size={110} color={COLORS.navy} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.navy}}><GitBranch size={28} color={COLORS.navy}/>解题大招：三步判断模型</div>
        <FactRow color={COLORS.navy} bg={COLORS.navy+"3D"} icon={<Check size={24} color={COLORS.navy}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>第一步</span>：有无<span style={{fontWeight:900 }}>合理使用/法定许可/已过保护期</span>情形</FactRow>
        <FactRow color={COLORS.navy} bg={COLORS.navy+"3D"} icon={<Check size={24} color={COLORS.navy}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>第二步</span>：行为对应哪种<span style={{fontWeight:900 }}>权利的侵权判断模型</span></FactRow>
        <FactRow color={COLORS.navy} bg={COLORS.navy+"3D"} icon={<Check size={24} color={COLORS.navy}/>} enter={enter(88,110)}><span style={{fontWeight:900 }}>第三步</span>：权利人是否享有该权利 → 判定<span style={{fontWeight:900 }}>侵权/需许可/需付费</span></FactRow>
      </div>
      <div data-final-knowledge="copyright-limitations-knowledge-4" style={{position:'absolute',left:0,top:454,width:1768,height:240,padding:'14px 22px',border:'5px dashed '+COLORS.teal,background:COLORS.teal+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(88,114),translate:interpolate(frame,[88,114],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Scale size={30} color={COLORS.copper}/>《3022》案例：A餐厅播放CD</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(102,124)}>播放CD = 公开播放录音 + 公开播放<span style={{fontWeight:900 }}>对作品的表演</span>：录音制作者丙有<span style={{fontWeight:900,color:COLORS.teal }}>获酬权</span>，甲有<span style={{fontWeight:900,color:COLORS.teal }}>表演权</span></FactRow>
          <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<AlertTriangle size={24} color={COLORS.red}/>} enter={enter(112,134)}>A餐厅应经<span style={{fontWeight:900 }}>甲同意</span>、向<span style={{fontWeight:900 }}>甲和丙付费</span>；乙是表演者<span style={{fontWeight:900,color:COLORS.red }}>不享有</span>——无需乙同意</FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const CopyrightLimitations=()=> <AbsoluteFill>
  <TimelineSequence name="01-copyright-limitations-scene-01" start={SCENES['copyright-limitations-scene-01'].start} duration={SCENES['copyright-limitations-scene-01'].duration}><CopyrightLimitations01Scene/></TimelineSequence>
  <TimelineSequence name="02-copyright-limitations-scene-02" start={SCENES['copyright-limitations-scene-02'].start} duration={SCENES['copyright-limitations-scene-02'].duration}><CopyrightLimitations02Scene/></TimelineSequence>
  <TimelineSequence name="03-copyright-limitations-scene-03" start={SCENES['copyright-limitations-scene-03'].start} duration={SCENES['copyright-limitations-scene-03'].duration}><CopyrightLimitations03Scene/></TimelineSequence>
</AbsoluteFill>;
