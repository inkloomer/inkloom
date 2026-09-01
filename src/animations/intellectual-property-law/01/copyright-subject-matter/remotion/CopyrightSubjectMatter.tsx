import type {ReactNode} from 'react';
import {Scale, Ban, Check, Users, Coins, AlertTriangle, Megaphone, Eye, Stamp, GitBranch, Split, Shield, Handshake, FileText, Landmark, Undo2, BadgeCheck, Store, Send, Trophy} from 'lucide-react';
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

export const CopyrightSubjectMatter01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const ideaX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="知1.1" title="作品认定：表达 vs 思想">
    <div data-layout="idea-expression-scale-1" data-visual-anchor="boundary" data-visual-grammar="idea-expression-scale,sports-exclude-band" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="copyright-subject-matter-scene-01-rule" data-focal-channels="contrast,motion,icon" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="idea-expression-travel" style={{position:'absolute',left:ideaX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.navy,fontSize:20,fontWeight:900,color:COLORS.navy,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <GitBranch size={24} color={COLORS.navy}/>火炬点燃仪式的创意
      </div>
      <div data-final-knowledge="copyright-subject-matter-scene-01-scale" style={{position:'absolute',left:0,top:90,width:1768,height:250,padding:'14px 22px',border:'5px solid '+COLORS.navy,background:COLORS.navy+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:10,opacity:enter(44,70),translate:interpolate(frame,[44,70],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.navy}}><Scale size={28} color={COLORS.navy}/>著作权法只保护<span style={{fontWeight:900,color:COLORS.teal }}>表达</span>，不保护<span style={{fontWeight:900,color:COLORS.red }}>思想</span></div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <div style={{padding:'12px 16px',background:COLORS.teal+'59',border:'4px solid '+COLORS.teal,fontSize:20,fontWeight:900,color:COLORS.teal}}>✓ 受保护：<span style={{fontWeight:900 }}>表达</span>——具有<span style={{fontWeight:900 }}>可感知性</span>的具体呈现</div>
          <div style={{padding:'12px 16px',background:COLORS.red+'4D',border:'4px solid '+COLORS.red,fontSize:20,fontWeight:900,color:COLORS.red}}>✗ 不保护：<span style={{fontWeight:900 }}>思想</span>（创意、想法、构思）——<span style={{fontWeight:900 }}>不具可感知性</span>；火炬点燃仪式创意 <span style={{fontWeight:900 }}>(√不适用)</span></div>
        </div>
      </div>
      <div data-final-knowledge="copyright-subject-matter-scene-01-elements" style={{position:'absolute',left:0,top:364,width:864,height:250,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(54,80),translate:interpolate(frame,[54,80],['-200px 0px','0px 0px'],CLAMP)}}>
        <Check size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Check size={28} color={COLORS.copper}/>作品三要素</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>独创性</span> + <span style={{fontWeight:900 }}>可感知性</span> + 属于<span style={{fontWeight:900 }}>文学、艺术、科学领域</span>的智力成果</FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(78,100)}><span style={{fontWeight:900,color:COLORS.red }}>竞技体育活动</span>（篮球、足球比赛）不是作品——篮球赛 <span style={{fontWeight:900,color:COLORS.red }}>(×著作权)</span>，不属于文学艺术科学领域</FactRow>
      </div>
      <div data-final-knowledge="copyright-subject-matter-knowledge-1" data-stateful-terminal="idea-expression-travel" style={{position:'absolute',left:904,top:364,width:864,height:250,padding:'14px 20px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(64,90),translate:interpolate(frame,[64,90],['200px 0px','0px 0px'],CLAMP)}}>
        <Trophy size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Stamp size={28} color={COLORS.copper}/>解题大招</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(78,100)}>记每种权利的<span style={{fontWeight:900 }}>侵权判断模型</span>：看到“临摹” → <span style={{fontWeight:900 }}>再现作品</span> → <span style={{fontWeight:900,color:COLORS.teal }}>复制权</span>；<span style={{fontWeight:900 }}>先定位行为再对应权利</span>——模型比名称更重要</FactRow>
      </div>
    </div>
  </Shell>;
};

export const CopyrightSubjectMatter02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const foreignX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="知1.2" title="保护条件：国人 与 外国人">
    <div data-layout="nationality-gate-pair-2" data-visual-anchor="role-pair" data-visual-grammar="nationality-gate,forbidden-works-band" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="copyright-subject-matter-scene-02-rule" data-focal-channels="contrast,motion,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="copyright-subject-matter-scene-02-chinese" style={{position:'absolute',left:0,top:0,width:864,height:330,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-200px 0px','0px 0px'],CLAMP)}}>
        <Users size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Users size={28} color={COLORS.copper}/>中国人 / 公司</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(26,48)}>无需发表、无需注册登记，<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>创作完成</span>即受保护</FactRow>
      </div>
      <div data-final-knowledge="copyright-subject-matter-scene-02-foreign" data-stateful-source="foreigner-link-travel" style={{position:'absolute',left:904,top:0,width:864,height:330,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(26,52),translate:interpolate(frame,[26,52],['200px 0px','0px 0px'],CLAMP)}}>
        <GitBranch size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.teal}}><GitBranch size={28} color={COLORS.teal}/>外国人 / 无国籍人（满足其一）</div>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Handshake size={24} color={COLORS.teal}/>} enter={enter(40,62)}>① <span style={{fontWeight:900 }}>所属国或经常居住地国</span>与我国有协议，或<span style={{fontWeight:900 }}>共同参加国际条约</span></FactRow>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Coins size={24} color={COLORS.teal}/>} enter={enter(50,72)}>② 作品<span style={{fontWeight:900 }}>首次在我国或成员国出版</span>，或<span style={{fontWeight:900 }}>30天内</span>同时在成员国和非成员国出版——《黑客》乙国居住丙国首发出版权任一加入伯尔尼公约 <span style={{fontWeight:900 }}>(√)</span></FactRow>
      </div>
      <div data-final-knowledge="copyright-subject-matter-knowledge-2" data-stateful-terminal="foreigner-link-travel" style={{position:'absolute',left:0,top:354,width:1768,height:340,padding:'14px 22px',border:'5px dashed '+COLORS.red,background:COLORS.red+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(64,90),translate:interpolate(frame,[64,90],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.red}}><Ban size={30} color={COLORS.red}/>违禁作品的特殊地位</div>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<AlertTriangle size={24} color={COLORS.red}/>} enter={enter(78,100)}>违禁作品<span style={{fontWeight:900,color:COLORS.teal }}>属于作品，受著作权法保护</span>——但违反出版法，在中国<span style={{fontWeight:900,color:COLORS.red }}>禁止出版传播</span></FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Stamp size={24} color={COLORS.copper}/>} enter={enter(88,110)}>大招：<span style={{fontWeight:900 }}>所属国、经常居住地国、首次出版国</span>之一须与我国有关系（有协议/是成员国），否则<span style={{fontWeight:900,color:COLORS.red }}>无保护基础</span></FactRow>
      </div>
    </div>
  </Shell>;
};

export const CopyrightSubjectMatter03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="知1.3" title="不受保护的三类对象">
    <div data-layout="exclusion-triad-hall-3" data-visual-anchor="concept-icon" data-visual-grammar="exclusion-triad,news-split-band" data-text-treatments="chip,external-negation,soft-highlight" data-focal-rule="copyright-subject-matter-scene-03-rule" data-focal-channels="contrast,icon,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="copyright-subject-matter-scene-03-triad" style={{position:'absolute',left:0,top:0,width:1768,height:300,display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:14}}>
        <div style={{padding:'14px 18px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(12,38)}}>
          <div style={{fontSize:23,fontWeight:900,color:COLORS.red}}><Landmark size={28} color={COLORS.red}/>① 官方文件</div>
          <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(26,48)}><span style={{fontWeight:900 }}>官方文件</span>及其<span style={{fontWeight:900 }}>官方正式译文</span>——法律法规、<span style={{fontWeight:900 }}>法院判决书</span></FactRow>
        </div>
        <div style={{padding:'14px 18px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(24,50)}}>
          <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><Megaphone size={28} color={COLORS.copper}/>② 单纯事实消息</div>
          <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Ban size={24} color={COLORS.copper}/>} enter={enter(38,60)}><span style={{fontWeight:900 }}>时事新闻</span>——对事实<span style={{fontWeight:900 }}>纯客观描述</span>；但新闻中作者的<span style={{fontWeight:900,color:COLORS.teal }}>观点和评价</span>可以受保护</FactRow>
        </div>
        <div style={{padding:'14px 18px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(36,62)}}>
          <div style={{fontSize:23,fontWeight:900,color:COLORS.teal}}><Scale size={28} color={COLORS.teal}/>③ 历法数表公式</div>
          <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Ban size={24} color={COLORS.teal}/>} enter={enter(50,72)}><span style={{fontWeight:900 }}>历法、通用数表、通用表格和公式</span>——乘法口诀表、元素周期表</FactRow>
        </div>
      </div>
      <div data-final-knowledge="copyright-subject-matter-knowledge-3" style={{position:'absolute',left:0,top:324,width:1768,height:370,padding:'14px 22px',border:'5px dashed '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(64,90),translate:interpolate(frame,[64,90],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Stamp size={30} color={COLORS.copper}/>本章一线记</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Check size={24} color={COLORS.copper}/>} enter={enter(78,100)}>作品三要素：<span style={{fontWeight:900 }}>独创性 + 可感知性 + 文学艺术科学领域</span>；只保护<span style={{fontWeight:900,color:COLORS.teal }}>表达</span>不保护<span style={{fontWeight:900,color:COLORS.red }}>思想</span>；竞技体育<span style={{fontWeight:900,color:COLORS.red }}>不是作品</span></FactRow>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Users size={24} color={COLORS.teal}/>} enter={enter(88,110)}>国人<span style={{fontWeight:900 }}>创作完成即保护</span>；外国人走<span style={{fontWeight:900 }}>所属国/居住地国/首次出版国</span>与我国有联系之门；<span style={{fontWeight:900 }}>违禁作品</span>仍受保护但<span style={{fontWeight:900,color:COLORS.red }}>禁止出版传播</span></FactRow>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(98,120)}>三类排除：<span style={{fontWeight:900 }}>官方文件及正式译文、单纯事实消息、历法通用数表通用表格公式</span></FactRow>
      </div>
    </div>
  </Shell>;
};

export const CopyrightSubjectMatter=()=> <AbsoluteFill>
  <TimelineSequence name="01-copyright-subject-matter-scene-01" start={SCENES['copyright-subject-matter-scene-01'].start} duration={SCENES['copyright-subject-matter-scene-01'].duration}><CopyrightSubjectMatter01Scene/></TimelineSequence>
  <TimelineSequence name="02-copyright-subject-matter-scene-02" start={SCENES['copyright-subject-matter-scene-02'].start} duration={SCENES['copyright-subject-matter-scene-02'].duration}><CopyrightSubjectMatter02Scene/></TimelineSequence>
  <TimelineSequence name="03-copyright-subject-matter-scene-03" start={SCENES['copyright-subject-matter-scene-03'].start} duration={SCENES['copyright-subject-matter-scene-03'].duration}><CopyrightSubjectMatter03Scene/></TimelineSequence>
</AbsoluteFill>;
