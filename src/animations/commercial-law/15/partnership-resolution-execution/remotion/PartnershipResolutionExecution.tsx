import type {ReactNode} from 'react';
import {Vote, Tag, MapPin, Building2, Lightbulb, ShieldCheck, UserPlus, Users, UserCheck, Eye, Undo2, MessageSquareWarning, PauseCircle, Calculator, BookOpen, MessageSquare, Store, BadgeCheck, Ban, Check, Scale, Gavel, AlertTriangle, ArrowLeftRight, FileSignature, ScrollText, Stamp, KeyRound, Coins} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#EFEAE0', ink:'#2B2B33', violet:'#5B4A8A', copper:'#8A4B2F', teal:'#15725F', red:'#B23A30', gold:'#B98A2F', paper:'#FAF6EC'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.violet,color:COLORS.paper}}>{code}</div>
    <div style={{position:'absolute',left:190,right:76,top:46,fontSize:46,fontWeight:900,lineHeight:1.12,borderBottom:'5px solid '+COLORS.violet,paddingBottom:12}}>{title}</div>
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

export const PartnershipResolutionExecution01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const itemX=interpolate(frame,[42,96],[80,560],CLAMP);
  return <Shell code="15.1" title="合伙企业的决议规则">
    <div data-layout="resolution-sorter-1" data-visual-anchor="flow-path" data-visual-grammar="item-sort-split,consent-tray" data-text-treatments="chip,soft-highlight,stamp" data-focal-rule="partnership-resolution-execution-scene-01-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="resolution-item-sort" style={{position:'absolute',left:itemX,top:60,padding:'10px 20px',background:COLORS.paper,border:'4px solid '+COLORS.violet,fontSize:22,fontWeight:900,color:COLORS.violet,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:9}}>
        <FileSignature size={26} color={COLORS.violet}/>待决事项
      </div>
      <div data-final-knowledge="partnership-resolution-execution-knowledge-1" style={{position:'absolute',left:794,top:44,display:'flex',alignItems:'center',gap:10,padding:'10px 18px',background:COLORS.violet,color:COLORS.paper,fontSize:22,fontWeight:900,opacity:enter(58,82)}}>
        <Vote size={28} color={COLORS.paper}/>决议规则分流
      </div>
      <div data-final-knowledge="partnership-resolution-execution-scene-01-general" style={{position:'absolute',left:0,top:92,width:1768,height:168,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(92,118),translate:interpolate(frame,[92,118],['0px 24px','0px 0px'],CLAMP)}}>
        <Users size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.teal}}>
          <Users size={30} color={COLORS.teal}/>一般事项
          <span style={{padding:'6px 14px',background:COLORS.teal,color:COLORS.paper,fontSize:20,fontWeight:900,transform:'rotate(-2deg)'}}>过半数同意</span>
        </div>
        <FactRow color={COLORS.teal} icon={<Vote size={24} color={COLORS.teal}/>} enter={enter(106,128)}><span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>合伙协议约定</span>优先 → <span style={{fontWeight:900}}>1人1票</span> + 过半数同意</FactRow>
      </div>
      <div data-final-knowledge="partnership-resolution-execution-scene-01-special" style={{position:'absolute',left:0,top:280,width:1768,height:330,padding:'14px 20px',border:'5px solid '+COLORS.red,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(108,134),translate:interpolate(frame,[108,134],['0px 24px','0px 0px'],CLAMP)}}>
        <Stamp size={120} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.09,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.red}}>
          <Stamp size={30} color={COLORS.red}/>特殊事项
          <span data-stateful-terminal="resolution-item-sort" style={{padding:'6px 14px',background:COLORS.red,color:COLORS.paper,fontSize:20,fontWeight:900,transform:'rotate(-2deg)'}}>一致同意</span>
        </div>
        <FactRow color={COLORS.copper} icon={<MapPin size={24} color={COLORS.copper}/>} enter={enter(122,144)}><span style={{fontWeight:900}}>更改</span>企业<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>名称、经营范围、主要经营场所的地点</span></FactRow>
        <FactRow color={COLORS.copper} icon={<Building2 size={24} color={COLORS.copper}/>} enter={enter(132,154)}>处分企业的<span style={{fontWeight:900}}>不动产、知识产权和其他财产权利</span></FactRow>
        <FactRow color={COLORS.copper} icon={<ShieldCheck size={24} color={COLORS.copper}/>} enter={enter(142,164)}>以企业名义<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>为他人提供担保</span></FactRow>
        <FactRow color={COLORS.copper} icon={<UserPlus size={24} color={COLORS.copper}/>} enter={enter(152,174)}>聘任合伙人<span style={{fontWeight:900}}>以外的人</span>担任经营管理人员</FactRow>
      </div>
      <div data-final-knowledge="partnership-resolution-execution-scene-01-mnemonic" style={{position:'absolute',left:0,top:628,right:0,bottom:0,display:'flex',alignItems:'center',gap:18,border:'4px solid '+COLORS.gold,background:COLORS.gold+'66',padding:'12px 24px',opacity:enter(158,184)}}>
        <Scale size={34} color={COLORS.ink}/>
        <div style={{fontSize:23,fontWeight:900,letterSpacing:2}}>口诀：名范地，<span style={{color:COLORS.copper}}>不动产</span>，知产担保<span style={{color:COLORS.red}}>聘外管</span>——四类特殊事项须<span style={{color:COLORS.red}}>一致同意</span></div>
      </div>
    </div>
  </Shell>;
};

export const PartnershipResolutionExecution02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="15.2" title="事务执行：普通合伙 与 有限合伙">
    <div data-layout="execution-dual-column-2" data-visual-anchor="role-pair" data-visual-grammar="delegation-rights-arrows,forbidden-permitted-contrast" data-text-treatments="label-block,chip,thin-underline" data-focal-rule="partnership-resolution-execution-scene-02-rule" data-focal-channels="contrast,connector,icon" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="partnership-resolution-execution-scene-02-gp-common" style={{position:'absolute',left:0,top:0,width:864,height:250,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(14,40),translate:interpolate(frame,[14,40],['-200px 0px','0px 0px'],CLAMP)}}>
        <Users size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Users size={30} color={COLORS.copper}/>普通合伙企业 · 执行</div>
        <FactRow color={COLORS.copper} icon={<Users size={24} color={COLORS.copper}/>} enter={enter(26,48)}>默认<span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>全体共同执行</span>；也可以委托部分合伙人执行</FactRow>
        <FactRow color={COLORS.copper} icon={<UserCheck size={24} color={COLORS.copper}/>} enter={enter(36,58)}>受托执行后：<span style={{fontWeight:900}}>其他合伙人不再执行</span>；执行人应<span style={{fontWeight:900,borderBottom:'3px solid '+COLORS.copper,paddingBottom:1}}>定期报告</span>执行情况、经营和财务状况</FactRow>
      </div>
      <div data-final-knowledge="partnership-resolution-execution-scene-02-gp-rights" style={{position:'absolute',left:0,top:270,width:864,height:310,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(30,56),translate:interpolate(frame,[30,56],['-200px 0px','0px 0px'],CLAMP)}}>
        <Eye size={110} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.09,pointerEvents:'none'}}/>
        <div style={{fontSize:22,fontWeight:900,color:COLORS.copper}}>三权大招——主体方向各不同</div>
        <FactRow color={COLORS.teal} icon={<Eye size={24} color={COLORS.teal}/>} enter={enter(44,66)}><span style={{fontWeight:900,color:COLORS.teal}}>监督权</span>：非执行人 <span style={{fontWeight:900,color:COLORS.copper}}>→</span> 执行人（有权监督）</FactRow>
        <FactRow color={COLORS.red} icon={<Undo2 size={24} color={COLORS.red}/>} enter={enter(54,76)}><span style={{fontWeight:900,color:COLORS.red}}>撤销权</span>：其他合伙人 <span style={{fontWeight:900,color:COLORS.copper}}>→</span> 不按约定/全体决定执行的违约执行人</FactRow>
        <FactRow color={COLORS.violet} icon={<MessageSquareWarning size={24} color={COLORS.violet}/>} enter={enter(64,86)}><span style={{fontWeight:900,color:COLORS.violet}}>异议权</span>：执行人 <span style={{fontWeight:900,color:COLORS.copper}}>→</span> 其他合伙人执行的事务；提出后<span style={{fontWeight:900,background:COLORS.violet+'26',padding:'1px 6px'}}><PauseCircle size={22} color={COLORS.violet}/> 暂停执行</span></FactRow>
      </div>
      <div data-final-knowledge="partnership-resolution-execution-scene-02-lp-no-execute" style={{position:'absolute',left:904,top:0,width:864,height:220,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(24,50),translate:interpolate(frame,[24,50],['200px 0px','0px 0px'],CLAMP)}}>
        <Ban size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.teal}}><Ban size={30} color={COLORS.teal}/>有限合伙企业 · 有限合伙人</div>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(38,60)}><span style={{fontWeight:900,color:COLORS.red}}>不得执行</span>合伙事务（若约定则<span style={{fontWeight:900,color:COLORS.red}}>无效</span>）</FactRow>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(48,70)}><span style={{fontWeight:900,color:COLORS.red}}>不得对外代表</span>有限合伙企业</FactRow>
      </div>
      <div data-final-knowledge="partnership-resolution-execution-scene-02-lp-permitted" style={{position:'absolute',left:904,top:240,width:864,height:340,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:7,opacity:enter(40,66),translate:interpolate(frame,[40,66],['200px 0px','0px 0px'],CLAMP)}}>
        <BookOpen size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.09,pointerEvents:'none'}}/>
        <div style={{fontSize:22,fontWeight:900,color:COLORS.teal}}>不视为执行事务——有权实施：</div>
        <FactRow color={COLORS.teal} icon={<Users size={22} color={COLORS.teal}/>} enter={enter(54,76)}>参与决定普通合伙人<span style={{fontWeight:900}}>入伙、退伙</span>；对经营管理<span style={{fontWeight:900}}>提出建议</span></FactRow>
        <FactRow color={COLORS.teal} icon={<Calculator size={22} color={COLORS.teal}/>} enter={enter(64,86)}>选择会计师事务所；获取<span style={{fontWeight:900}}>财务会计报告</span>；涉自身利益<span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>查阅会计账簿（知情权）</span></FactRow>
        <FactRow color={COLORS.teal} icon={<Gavel size={22} color={COLORS.teal}/>} enter={enter(74,96)}>执行事务合伙人<span style={{fontWeight:900}}>怠于行权</span>：督促 / 以<span style={{fontWeight:900,borderBottom:'3px solid '+COLORS.teal,paddingBottom:1}}>自己名义提起诉讼</span></FactRow>
        <FactRow color={COLORS.teal} icon={<ShieldCheck size={22} color={COLORS.teal}/>} enter={enter(84,106)}>为本企业<span style={{fontWeight:900}}>提供担保</span></FactRow>
      </div>
      <div data-final-knowledge="partnership-resolution-execution-knowledge-2" style={{position:'absolute',left:0,right:0,top:600,bottom:0,display:'flex',alignItems:'center',gap:18,border:'4px solid '+COLORS.gold,background:COLORS.gold+'66',padding:'12px 24px',opacity:enter(110,136)}}>
        <KeyRound size={34} color={COLORS.ink}/>
        <div style={{fontSize:23,fontWeight:900,letterSpacing:2}}>大招：<span style={{color:COLORS.teal}}>入退提建议、会计诉担保</span>——关系有限合伙人自身利益，有权实施</div>
      </div>
    </div>
  </Shell>;
};

export const PartnershipResolutionExecution03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const dealX=interpolate(frame,[84,138,152,208],[300,620,620,850],CLAMP);
  return <Shell code="15.3" title="越权执行的责任">
    <div data-layout="liability-chain-pair-3" data-visual-anchor="boundary" data-visual-grammar="liability-chain,apparent-partner-rule" data-text-treatments="stamp,external-negation,soft-highlight" data-focal-rule="partnership-resolution-execution-scene-03-rule" data-focal-channels="connector,motion,contrast" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="partnership-resolution-execution-scene-03-gp-unauthorized" style={{position:'absolute',left:0,top:0,width:864,height:260,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(14,40),translate:interpolate(frame,[14,40],['-200px 0px','0px 0px'],CLAMP)}}>
        <AlertTriangle size={120} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><AlertTriangle size={30} color={COLORS.copper}/>普通合伙：擅自执行</div>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(28,50)}>不具有事务执行权的合伙人<span style={{fontWeight:900,color:COLORS.red}}>擅自执行</span>合伙事务</FactRow>
        <FactRow color={COLORS.red} icon={<Scale size={24} color={COLORS.red}/>} enter={enter(38,60)}>给合伙企业或其他合伙人造成损失的 → 承担<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>赔偿责任</span></FactRow>
      </div>
      <div data-final-knowledge="partnership-resolution-execution-scene-03-gp-third-person" style={{position:'absolute',left:0,top:330,width:864,height:280,padding:'14px 20px',border:'5px solid '+COLORS.violet,background:COLORS.violet+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(28,54),translate:interpolate(frame,[28,54],['-200px 0px','0px 0px'],CLAMP)}}>
        <ShieldCheck size={120} color={COLORS.violet} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.violet}}><ShieldCheck size={30} color={COLORS.violet}/>对执行事务的内部限制，不得对抗<span data-stateful-terminal="unauthorized-deal-shield" style={{fontWeight:900,background:COLORS.violet+'26',padding:'1px 6px'}}>善意第三人</span></div>
        <FactRow color={COLORS.violet} icon={<Users size={24} color={COLORS.violet}/>} enter={enter(42,64)}>例：乙并非执行人以合伙企业名义与戊公司签购买合同 → 戊公司<span style={{fontWeight:900,color:COLORS.violet}}>有权要求合伙企业履行 (√)</span></FactRow>
      </div>
      <div data-stateful-source="unauthorized-deal-shield" style={{position:'absolute',left:dealX,top:272,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.violet,fontSize:20,fontWeight:900,color:COLORS.violet,opacity:enter(80,100)*(1-enter(196,212)),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <FileSignature size={24} color={COLORS.violet}/>越权交易
      </div>
      <div data-final-knowledge="partnership-resolution-execution-scene-03-lp-apparent" style={{position:'absolute',left:904,top:0,width:864,height:352,padding:'14px 20px',border:'5px solid '+COLORS.red,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(20,46),translate:interpolate(frame,[20,46],['200px 0px','0px 0px'],CLAMP)}}>
        <Gavel size={130} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.09,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.red}}><Gavel size={30} color={COLORS.red}/>有限合伙：表见普通合伙</div>
        <FactRow color={COLORS.copper} icon={<UserCheck size={24} color={COLORS.copper}/>} enter={enter(34,56)}>第三人有理由相信<span style={{fontWeight:900}}>有限合伙人为普通合伙人</span>并与之交易</FactRow>
        <FactRow color={COLORS.red} icon={<Scale size={24} color={COLORS.red}/>} enter={enter(44,66)}><span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>对外</span>：表见人对该笔交易承担与普通合伙人同样的<span style={{fontWeight:900,color:COLORS.red}}>无限连带责任</span></FactRow>
        <FactRow color={COLORS.red} icon={<Undo2 size={24} color={COLORS.red}/>} enter={enter(54,76)}><span style={{fontWeight:900,background:COLORS.copper+'26',padding:'1px 6px'}}>对内</span>：给企业或其他合伙人造成损失的，承担<span style={{fontWeight:900,color:COLORS.red}}>赔偿责任</span></FactRow>
        <FactRow color={COLORS.violet} icon={<FileSignature size={24} color={COLORS.violet}/>} enter={enter(64,86)}>例：甲以执行事务合伙人名义与乙公司签业务合同，企业违约 → 甲对该笔债务<span style={{fontWeight:900,color:COLORS.red}}>承担连带责任 (√)</span></FactRow>
      </div>
      <div data-final-knowledge="partnership-resolution-execution-knowledge-3" style={{position:'absolute',left:904,top:376,width:864,height:234,padding:'14px 20px',border:'5px solid '+COLORS.ink,background:COLORS.paper,display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(48,74)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:22,fontWeight:900}}><Scale size={28} color={COLORS.ink}/>内外两笔账</div>
        <FactRow color={COLORS.red} icon={<Users size={24} color={COLORS.red}/>} enter={enter(62,84)}><span style={{fontWeight:900,color:COLORS.red}}>对外</span>按表见规则对<span style={{fontWeight:900}}>该笔交易</span>负无限连带</FactRow>
        <FactRow color={COLORS.copper} icon={<Undo2 size={24} color={COLORS.copper}/>} enter={enter(72,94)}><span style={{fontWeight:900,color:COLORS.copper}}>对内</span>按赔偿责任向企业与其他合伙人<span style={{fontWeight:900}}>追偿弥补</span></FactRow>
      </div>
      <div style={{position:'absolute',left:0,right:0,top:634,bottom:0,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.gold,background:COLORS.gold+'66',padding:'12px 24px',opacity:enter(96,122)}}>
        <Scale size={34} color={COLORS.ink}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.5}}>内部限制<span style={{fontWeight:900,color:COLORS.red}}>不能对抗善意第三人</span>——企业要先对外担责，再对内向越权者追责</div>
      </div>
    </div>
  </Shell>;
};

export const PartnershipResolutionExecution04Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="15.4" title="同业竞争、自我交易 与 外聘人员">
    <div data-layout="restriction-hire-split-4" data-visual-anchor="comparison-axis" data-visual-grammar="restriction-split,hire-approval-chain" data-text-treatments="chip,stamp,external-negation" data-focal-rule="partnership-resolution-execution-scene-04-rule" data-focal-channels="contrast,icon,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="partnership-resolution-execution-scene-04-gp-restrict" style={{position:'absolute',left:0,top:0,width:864,height:400,padding:'14px 20px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(14,40),translate:interpolate(frame,[14,40],['-200px 0px','0px 0px'],CLAMP)}}>
        <Store size={120} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Store size={30} color={COLORS.copper}/>普通合伙人 · 竞业与交易</div>
        <FactRow color={COLORS.red} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(28,50)}><span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>绝对禁止</span>同业竞争</FactRow>
        <FactRow color={COLORS.gold} icon={<ArrowLeftRight size={24} color={COLORS.gold}/>} enter={enter(38,60)}><span style={{fontWeight:900,background:COLORS.gold+'42',padding:'1px 6px'}}>相对禁止</span>自我交易 → 合伙协议约定 / 全体同意，<span style={{fontWeight:900,color:COLORS.teal}}>可以</span></FactRow>
        <FactRow color={COLORS.red} icon={<Coins size={24} color={COLORS.red}/>} enter={enter(48,70)}>违反后果：<span style={{fontWeight:900}}>收益归合伙企业</span>、赔偿损失</FactRow>
        <div style={{display:'flex',justifyContent:'center',marginTop:2,opacity:enter(58,80)}}>
          <span style={{padding:'7px 18px',background:COLORS.copper,color:COLORS.paper,fontSize:21,fontWeight:900,transform:'rotate(-2deg)'}}>同业绝对禁，自我可允许</span>
        </div>
      </div>
      <div data-final-knowledge="partnership-resolution-execution-scene-04-lp-restrict" style={{position:'absolute',left:0,top:424,width:864,height:236,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(32,58),translate:interpolate(frame,[32,58],['-200px 0px','0px 0px'],CLAMP)}}>
        <ArrowLeftRight size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.teal}}><Store size={30} color={COLORS.teal}/>有限合伙人 · 竞业与交易</div>
        <FactRow color={COLORS.teal} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(46,68)}><span style={{fontWeight:900,color:COLORS.teal}}>可以</span>同业竞争、<span style={{fontWeight:900,color:COLORS.teal}}>可以</span>自我交易（合伙协议另有约定除外）</FactRow>
        <div style={{display:'flex',justifyContent:'center',marginTop:2,opacity:enter(56,78)}}>
          <span style={{padding:'7px 18px',background:COLORS.teal,color:COLORS.paper,fontSize:21,fontWeight:900,transform:'rotate(-2deg)'}}>无禁可自由</span>
        </div>
      </div>
      <div data-final-knowledge="partnership-resolution-execution-scene-04-hire" data-stateful-source="hire-approval-travel" style={{position:'absolute',left:904,top:0,width:864,height:660,padding:'16px 20px',border:'5px solid '+COLORS.violet,background:COLORS.violet+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:10,opacity:enter(24,50),translate:interpolate(frame,[24,50],['200px 0px','0px 0px'],CLAMP)}}>
        <BadgeCheck size={130} color={COLORS.violet} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.09,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.violet}}><UserPlus size={30} color={COLORS.violet}/>外聘经营管理人员</div>
        <FactRow color={COLORS.violet} icon={<Users size={24} color={COLORS.violet}/>} enter={enter(38,60)}>除合伙协议另有约定：经全体合伙人<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>一致同意</span>聘任<span data-stateful-terminal="hire-approval-travel" style={{fontWeight:900}}>合伙人以外的人</span></FactRow>
        <FactRow color={COLORS.violet} icon={<BadgeCheck size={24} color={COLORS.violet}/>} enter={enter(48,70)}>在合伙企业<span style={{fontWeight:900,background:COLORS.violet+'26',padding:'1px 6px'}}>授权范围内</span>履行职务</FactRow>
        <FactRow color={COLORS.red} icon={<AlertTriangle size={24} color={COLORS.red}/>} enter={enter(58,80)}><span style={{fontWeight:900,color:COLORS.red}}>超越授权范围</span>履职，或履职中因<span style={{fontWeight:900,color:COLORS.red}}>故意或重大过失</span>给企业造成损失 → <span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>赔偿责任</span></FactRow>
        <FactRow color={COLORS.violet} icon={<MessageSquareWarning size={24} color={COLORS.violet}/>} enter={enter(68,90)}>例：丁受聘为经理，<span style={{fontWeight:900}}>无权决定新增业务范围</span>——改变经营范围应经全体合伙人一致同意 <span style={{fontWeight:900}}>(×)</span></FactRow>
      </div>
      <div data-final-knowledge="partnership-resolution-execution-knowledge-4" style={{position:'absolute',left:0,right:0,top:684,bottom:0,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.gold,background:COLORS.gold+'66',padding:'12px 24px',opacity:enter(104,130)}}>
        <Scale size={34} color={COLORS.ink}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.5}}>普通合伙人<span style={{fontWeight:900,color:COLORS.red}}>禁得严</span>（同业绝对禁），有限合伙人<span style={{fontWeight:900,color:COLORS.teal}}>放得开</span>（协议无约定即可为）；外聘人员越权或重大过失要<span style={{fontWeight:900,color:COLORS.red}}>赔偿</span></div>
      </div>
    </div>
  </Shell>;
};

export const PartnershipResolutionExecution=()=> <AbsoluteFill>
  <TimelineSequence name="01-partnership-resolution-execution-scene-01" start={SCENES['partnership-resolution-execution-scene-01'].start} duration={SCENES['partnership-resolution-execution-scene-01'].duration}><PartnershipResolutionExecution01Scene/></TimelineSequence>
  <TimelineSequence name="02-partnership-resolution-execution-scene-02" start={SCENES['partnership-resolution-execution-scene-02'].start} duration={SCENES['partnership-resolution-execution-scene-02'].duration}><PartnershipResolutionExecution02Scene/></TimelineSequence>
  <TimelineSequence name="03-partnership-resolution-execution-scene-03" start={SCENES['partnership-resolution-execution-scene-03'].start} duration={SCENES['partnership-resolution-execution-scene-03'].duration}><PartnershipResolutionExecution03Scene/></TimelineSequence>
  <TimelineSequence name="04-partnership-resolution-execution-scene-04" start={SCENES['partnership-resolution-execution-scene-04'].start} duration={SCENES['partnership-resolution-execution-scene-04'].duration}><PartnershipResolutionExecution04Scene/></TimelineSequence>
</AbsoluteFill>;
