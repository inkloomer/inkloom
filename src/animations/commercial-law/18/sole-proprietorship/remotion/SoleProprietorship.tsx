import type {ReactNode} from 'react';
import {User, Home, Star, Wallet, Scale, Ban, UserCheck, Stamp, Hourglass, FileSignature, AlertTriangle, Check, TrendingDown, Gavel, Users, Landmark, Coins, ArrowLeftRight, Undo2, Building2, Handshake, Store} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#F0EBE0', ink:'#2B2B33', plum:'#7A3B5E', teal:'#2F6B5E', red:'#B23A30', gold:'#B98A2F', paper:'#FAF6EC'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.plum,color:COLORS.paper}}>{code}</div>
    <div style={{position:'absolute',left:190,right:76,top:46,fontSize:46,fontWeight:900,lineHeight:1.12,borderBottom:'5px solid '+COLORS.plum,paddingBottom:12}}>{title}</div>
    <div style={{position:'absolute',left:76,right:76,top:150,bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

const FactRow=({color,icon,enter,children}:{readonly color:string;readonly icon:ReactNode;readonly enter:number;readonly children:ReactNode})=>(
  <div style={{display:'flex',alignItems:'center',gap:12,padding:'9px 14px',background:COLORS.paper,borderLeft:'6px solid '+color,opacity:enter}}>
    <span style={{display:'flex',flexShrink:0}}>{icon}</span>
    <span style={{fontSize:21,fontWeight:800,lineHeight:1.45}}>{children}</span>
  </div>
);

const Chip=({color,icon,text}:{readonly color:string;readonly icon?:ReactNode;readonly text:string})=>(
  <div style={{display:'flex',alignItems:'center',gap:8,padding:'7px 13px',background:COLORS.paper,border:'3px solid '+color,fontSize:20,fontWeight:900,color}}>
    {icon}{text}
  </div>
);

export const SoleProprietorship01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="18.1" title="个人独资企业：三要素">
    <div data-layout="three-element-assembly-1" data-visual-anchor="concept-icon" data-visual-grammar="element-assembly,entity-crown" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="sole-proprietorship-scene-01-rule" data-focal-channels="icon,spatial,contrast" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="sole-proprietorship-scene-01-concept" style={{position:'absolute',left:0,top:0,width:1768,height:120,padding:'12px 22px',border:'5px solid '+COLORS.plum,background:COLORS.plum+'4D',display:'flex',alignItems:'center',gap:14,opacity:enter(10,36)}}>
        <Store size={36} color={COLORS.plum}/>
        <div style={{fontSize:23,fontWeight:900}}>个人独资企业：一个自然人投资、财产为投资人<span style={{fontWeight:900,background:COLORS.plum+'26',padding:'1px 6px'}}>个人所有</span>的<span style={{fontWeight:900,color:COLORS.plum}}>经营实体</span></div>
        <div style={{marginLeft:'auto',display:'flex',gap:10}}><Chip color={COLORS.gold} icon={<Home size={24} color={COLORS.gold}/>} text="家庭作坊"/><Chip color={COLORS.gold} icon={<Star size={24} color={COLORS.gold}/>} text="明星工作室"/></div>
      </div>
      <div style={{position:'absolute',left:872,top:120,width:24,height:interpolate(frame,[26,56],[0,42],CLAMP),background:COLORS.ink}}/>
      <div data-final-knowledge="sole-proprietorship-scene-01-element-user" style={{position:'absolute',left:0,top:186,width:560,height:270,padding:'16px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:10,opacity:enter(34,60),translate:interpolate(frame,[34,60],['-240px 0px','0px 0px'],CLAMP)}}>
        <User size={130} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:25,fontWeight:900,color:COLORS.teal}}><User size={32} color={COLORS.teal}/>① 一个自然人</div>
        <FactRow color={COLORS.teal} icon={<UserCheck size={24} color={COLORS.teal}/>} enter={enter(48,70)}>投资主体仅 1 个自然人，须<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>完全民事行为能力</span></FactRow>
      </div>
      <div data-final-knowledge="sole-proprietorship-scene-01-element-property" style={{position:'absolute',left:604,top:186,width:560,height:270,padding:'16px 20px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:10,opacity:enter(44,70),translate:interpolate(frame,[44,70],['0px 26px','0px 0px'],CLAMP)}}>
        <Wallet size={130} color={COLORS.gold} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:25,fontWeight:900,color:COLORS.copper}}><Wallet size={32} color={COLORS.gold}/>② 财产归个人</div>
        <FactRow color={COLORS.gold} icon={<Stamp size={24} color={COLORS.gold}/>} enter={enter(58,80)}>企业财产为投资人<span style={{fontWeight:900}}>个人所有</span></FactRow>
      </div>
      <div data-final-knowledge="sole-proprietorship-scene-01-element-liability" style={{position:'absolute',left:1208,top:186,width:560,height:270,padding:'16px 20px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:10,opacity:enter(54,80),translate:interpolate(frame,[54,80],['240px 0px','0px 0px'],CLAMP)}}>
        <Scale size={130} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:25,fontWeight:900,color:COLORS.red}}><Scale size={32} color={COLORS.red}/>③ 责任无限</div>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(68,90)}>法律地位：<span style={{fontWeight:900,color:COLORS.red}}>非法人</span>，无独立法人资格</FactRow>
        <FactRow color={COLORS.red} icon={<Scale size={24} color={COLORS.red}/>} enter={enter(78,100)}>投资人以<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>个人财产</span>对企业债务承担无限责任</FactRow>
      </div>
      <div data-final-knowledge="sole-proprietorship-knowledge-1" style={{position:'absolute',left:0,right:0,top:480,bottom:0,display:'flex',alignItems:'center',gap:18,border:'4px solid '+COLORS.gold,background:COLORS.gold+'66',padding:'12px 24px',opacity:enter(92,118)}}>
        <Stamp size={34} color={COLORS.ink}/>
        <div style={{fontSize:23,fontWeight:900,letterSpacing:2}}>三要素：<span style={{color:COLORS.teal}}>一个自然人</span> · <span style={{color:COLORS.copper}}>财产归个人</span> · <span style={{color:COLORS.red}}>责任无限</span></div>
      </div>
    </div>
  </Shell>;
};

export const SoleProprietorship02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const debY=interpolate(frame,[46,96,120,170],[120,222,340,340],CLAMP);
  return <Shell code="18.2" title="责任承担与五年除斥期">
    <div data-layout="liability-gate-timeline-2" data-visual-anchor="timeline-gate" data-visual-grammar="family-property-gate,dissolve-decay-timeline" data-text-treatments="chip,stamp,external-negation" data-focal-rule="sole-proprietorship-scene-02-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="sole-proprietorship-scene-02-family-gate" style={{position:'absolute',left:0,top:0,width:1768,height:190,padding:'14px 22px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(12,38)}}>
        <Home size={120} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.teal}}><Home size={30} color={COLORS.teal}/>家庭共有财产出资的闸口——设立登记时是否明确</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(26,48)}><span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>明确以家庭共有财产出资</span> → 以家庭共有财产对外承担<span style={{fontWeight:900,color:COLORS.red}}>无限责任</span></FactRow>
          <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(36,58)}>未明确 → 仍以<span style={{fontWeight:900}}>投资人个人财产</span>担责——“以家庭共有财产继续清偿” <span style={{fontWeight:900,color:COLORS.red}}>(×)</span></FactRow>
        </div>
      </div>
      <div data-stateful-source="dissolve-liability-travel" style={{position:'absolute',left:560,top:debY,padding:'8px 16px',background:COLORS.red,color:COLORS.paper,fontSize:20,fontWeight:900,opacity:enter(40,60),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <AlertTriangle size={22} color={COLORS.paper}/>解散后的旧债
      </div>
      <div style={{position:'absolute',left:880,top:190,width:8,height:interpolate(frame,[66,96],[0,44],CLAMP),background:COLORS.ink}}/>
      <div style={{position:'absolute',left:870,top:230,width:0,height:0,borderTop:'15px solid transparent',borderBottom:'15px solid transparent',borderLeft:'19px solid '+COLORS.ink,opacity:enter(92,106)}}/>
      <div data-final-knowledge="sole-proprietorship-scene-02-dissolve" style={{position:'absolute',left:0,top:262,width:1768,height:250,padding:'14px 22px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:10,opacity:enter(58,84),translate:interpolate(frame,[58,84],['0px 24px','0px 0px'],CLAMP)}}>
        <TrendingDown size={120} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.red}}><TrendingDown size={30} color={COLORS.red}/>企业解散，债不随企业灭</div>
        <div style={{display:'flex',alignItems:'center',gap:14,opacity:enter(72,94)}}>
          <Chip color={COLORS.copper} icon={<TrendingDown size={24} color={COLORS.copper}/>} text="企业解散"/>
          <div style={{fontSize:24,fontWeight:900,color:COLORS.red}}>→</div>
          <Chip color={COLORS.red} text="原投资人仍承担无限责任"/>
          <div style={{fontSize:24,fontWeight:900,color:COLORS.red}}>→</div>
          <Chip color={COLORS.gold} icon={<Hourglass size={24} color={COLORS.gold}/>} text="债权人5年内未要求还债"/>
          <div style={{fontSize:24,fontWeight:900,color:COLORS.gold}}>→</div>
          <div data-stateful-terminal="dissolve-liability-travel" style={{display:'contents'}}><Chip color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} text="责任消灭（除斥期间）"/></div>
        </div>
        <FactRow color={COLORS.red} icon={<Gavel size={24} color={COLORS.red}/>} enter={enter(86,108)}>例：2014年解散，2021年才主张——已过 <span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>5年除斥期</span>，责任<span style={{fontWeight:900,color:COLORS.red}}>消灭</span>，不得再要求偿还 <span style={{fontWeight:900}}>(×)</span></FactRow>
      </div>
      <div data-final-knowledge="sole-proprietorship-knowledge-2" style={{position:'absolute',left:0,right:0,top:532,bottom:0,display:'flex',alignItems:'center',gap:18,border:'4px solid '+COLORS.gold,background:COLORS.gold+'66',padding:'12px 24px',opacity:enter(102,128)}}>
        <Stamp size={34} color={COLORS.ink}/>
        <div style={{fontSize:23,fontWeight:900,letterSpacing:2}}>口诀：<span style={{color:COLORS.red}}>解散债不灭</span>，<span style={{color:COLORS.gold}}>五年除斥期</span>——期内不主张，责任即消灭</div>
      </div>
    </div>
  </Shell>;
};

export const SoleProprietorship03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="18.3" title="三体对比 与 相互转换">
    <div data-layout="triple-entity-compare-3" data-visual-anchor="comparison-axis" data-visual-grammar="entity-matrix-columns,conversion-fork" data-text-treatments="chip,soft-highlight,stamp" data-focal-rule="sole-proprietorship-scene-03-rule" data-focal-channels="contrast,spatial,icon" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="sole-proprietorship-scene-03-col-sole" style={{position:'absolute',left:0,top:0,width:560,height:340,padding:'14px 18px',border:'5px solid '+COLORS.plum,background:COLORS.plum+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(12,38),translate:interpolate(frame,[12,38],['-240px 0px','0px 0px'],CLAMP)}}>
        <Store size={110} color={COLORS.plum} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:23,fontWeight:900,color:COLORS.plum}}><Store size={28} color={COLORS.plum}/>个人独资企业</div>
        <FactRow color={COLORS.plum} icon={<User size={24} color={COLORS.plum}/>} enter={enter(26,48)}>出资人：<span style={{fontWeight:900}}>1个自然人</span></FactRow>
        <FactRow color={COLORS.plum} icon={<Ban size={24} color={COLORS.plum}/>} enter={enter(36,58)}>法律地位：<span style={{fontWeight:900,color:COLORS.red}}>非法人</span></FactRow>
        <FactRow color={COLORS.red} icon={<Scale size={24} color={COLORS.red}/>} enter={enter(46,68)}>责任：<span style={{fontWeight:900,color:COLORS.red}}>无限责任</span></FactRow>
        <FactRow color={COLORS.teal} icon={<UserCheck size={24} color={COLORS.teal}/>} enter={enter(56,78)}>税收：企业不缴企业所得税，投资人缴<span style={{fontWeight:900}}>个人所得税</span></FactRow>
      </div>
      <div data-final-knowledge="sole-proprietorship-scene-03-col-company" style={{position:'absolute',left:604,top:0,width:560,height:340,padding:'14px 18px',border:'5px solid #3B4A6B',background:'#3B4A6B'+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(26,52),translate:interpolate(frame,[26,52],['0px 26px','0px 0px'],CLAMP)}}>
        <Building2 size={110} color={'#3B4A6B'} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:23,fontWeight:900,color:'#3B4A6B'}}><Building2 size={28} color={'#3B4A6B'}/>一人公司</div>
        <FactRow color={'#3B4A6B'} icon={<Users size={24} color={'#3B4A6B'}/>} enter={enter(40,62)}>出资人：1个自然人 / 法人 / 非法人组织</FactRow>
        <FactRow color={'#3B4A6B'} icon={<Landmark size={24} color={'#3B4A6B'}/>} enter={enter(50,72)}>法律地位：<span style={{fontWeight:900,color:COLORS.teal}}>法人</span></FactRow>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(60,82)}>责任：<span style={{fontWeight:900,color:COLORS.teal}}>有限责任</span></FactRow>
        <FactRow color={COLORS.copper} icon={<Coins size={24} color={COLORS.copper}/>} enter={enter(70,92)}>税收：公司缴<span style={{fontWeight:900}}>企业所得税</span>，个人股东缴个人所得税</FactRow>
      </div>
      <div data-final-knowledge="sole-proprietorship-scene-03-col-partnership" style={{position:'absolute',left:1208,top:0,width:560,height:340,padding:'14px 18px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(40,66),translate:interpolate(frame,[40,66],['240px 0px','0px 0px'],CLAMP)}}>
        <Handshake size={110} color={COLORS.gold} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:23,fontWeight:900,color:COLORS.copper}}><Handshake size={28} color={COLORS.gold}/>合伙企业</div>
        <FactRow color={COLORS.copper} icon={<Users size={24} color={COLORS.copper}/>} enter={enter(54,76)}>出资人：2个及以上</FactRow>
        <FactRow color={COLORS.copper} icon={<Ban size={24} color={COLORS.copper}/>} enter={enter(64,86)}>法律地位：<span style={{fontWeight:900,color:COLORS.red}}>非法人</span></FactRow>
        <FactRow color={COLORS.red} icon={<Scale size={24} color={COLORS.red}/>} enter={enter(74,96)}>责任：普合<span style={{fontWeight:900,color:COLORS.red}}>无限连带</span>；有限合伙人有限责任</FactRow>
        <FactRow color={COLORS.teal} icon={<UserCheck size={24} color={COLORS.teal}/>} enter={enter(84,106)}>税收：企业不缴企业所得税，合伙人缴纳所得税</FactRow>
      </div>
      <div data-final-knowledge="sole-proprietorship-knowledge-3" style={{position:'absolute',left:0,top:364,width:1768,height:250,padding:'14px 22px',border:'5px dashed '+COLORS.red,background:COLORS.red+'40',display:'flex',flexDirection:'column',justifyContent:'center',gap:10,opacity:enter(58,84),translate:interpolate(frame,[58,84],['0px 24px','0px 0px'],CLAMP)}}>
        <ArrowLeftRight size={110} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.red}}><ArrowLeftRight size={30} color={COLORS.red}/>相互转换——看性质是否相同</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.red} icon={<Undo2 size={24} color={COLORS.red}/>} enter={enter(72,94)}><span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>性质不同，销再设</span>：独资/合伙 → 公司，先<span style={{fontWeight:900}}>注销原企业</span>，再<span style={{fontWeight:900}}>设立新企业</span></FactRow>
          <FactRow color={COLORS.teal} icon={<FileSignature size={24} color={COLORS.teal}/>} enter={enter(82,104)}><span style={{fontWeight:900,background:COLORS.teal+'26',padding:'1px 6px'}}>性质相同，直接转</span>：独资 ⇌ 合伙，直接申请<span style={{fontWeight:900}}>变更登记</span>，无须注销和设立</FactRow>
        </div>
      </div>
      <div style={{position:'absolute',left:0,right:0,top:634,bottom:0,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.gold,background:COLORS.teal+'4D',padding:'12px 24px',opacity:enter(96,122)}}>
        <Stamp size={32} color={COLORS.ink}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.5}}>三体一线记：<span style={{fontWeight:900,color:COLORS.red}}>非法人</span>的独资与合伙责任<span style={{fontWeight:900,color:COLORS.red}}>无限</span>，<span style={{fontWeight:900,color:COLORS.teal}}>法人</span>的一人公司责任<span style={{fontWeight:900,color:COLORS.teal}}>有限</span></div>
      </div>
    </div>
  </Shell>;
};

export const SoleProprietorship=()=> <AbsoluteFill>
  <TimelineSequence name="01-sole-proprietorship-scene-01" start={SCENES['sole-proprietorship-scene-01'].start} duration={SCENES['sole-proprietorship-scene-01'].duration}><SoleProprietorship01Scene/></TimelineSequence>
  <TimelineSequence name="02-sole-proprietorship-scene-02" start={SCENES['sole-proprietorship-scene-02'].start} duration={SCENES['sole-proprietorship-scene-02'].duration}><SoleProprietorship02Scene/></TimelineSequence>
  <TimelineSequence name="03-sole-proprietorship-scene-03" start={SCENES['sole-proprietorship-scene-03'].start} duration={SCENES['sole-proprietorship-scene-03'].duration}><SoleProprietorship03Scene/></TimelineSequence>
</AbsoluteFill>;
