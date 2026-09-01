import type {ReactNode} from 'react';
import {Scale, Ban, Check, Users, Coins, AlertTriangle, Megaphone, Eye, Stamp, GitBranch, Split, Shield, Handshake, FileText, Landmark, Undo2, BadgeCheck, Store, Send, Gavel, Hourglass} from 'lucide-react';
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

export const LaborDisputeResolution01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const claimX=interpolate(frame,[46,90,104,148,162,206,220,264],[80,440,440,820,820,1220,1220,1580],CLAMP);
  return <Shell code="劳3.1" title="争议四步走 与 仲裁时效">
    <div data-layout="four-step-dispute-track-1" data-visual-anchor="flow-path" data-visual-grammar="fourstep-track,limitation-clock" data-text-treatments="chip,stamp,thin-underline" data-focal-rule="labor-dispute-resolution-scene-01-rule" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="dispute-claim-travel" style={{position:'absolute',left:claimX,top:34,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.navy,fontSize:20,fontWeight:900,color:COLORS.navy,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Users size={24} color={COLORS.navy}/>劳动争议
      </div>
      <div style={{position:'absolute',left:130,top:104,width:1500,height:6,background:COLORS.ink,transformOrigin:'left center',transform:'scaleX('+interpolate(frame,[32,68],[0,1],CLAMP)+')'}}/>
      <div data-final-knowledge="labor-dispute-resolution-scene-01-track" style={{position:'absolute',left:0,top:130,width:1768,height:230,display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr',gap:14}}>
        <div style={{padding:'12px 14px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:6,opacity:enter(46,70)}}>
          <div style={{fontSize:22,fontWeight:900,color:COLORS.copper}}><Handshake size={26} color={COLORS.copper}/>① 协商</div>
          <div style={{fontSize:19,fontWeight:800,lineHeight:1.4}}>自行协商或请<span style={{fontWeight:900 }}>第三方</span>共同协商</div>
        </div>
        <div style={{padding:'12px 14px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:6,opacity:enter(54,78)}}>
          <div style={{fontSize:22,fontWeight:900,color:COLORS.copper}}><Handshake size={26} color={COLORS.copper}/>② 调解</div>
          <div style={{fontSize:19,fontWeight:800,lineHeight:1.4}}>申请后<span style={{fontWeight:900 }}>15日内</span>未达成 → 可申请仲裁</div>
        </div>
        <div style={{padding:'12px 14px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:6,opacity:enter(62,86)}}>
          <div style={{fontSize:22,fontWeight:900,color:COLORS.red}}><Gavel size={26} color={COLORS.red}/>③ 仲裁</div>
          <div style={{fontSize:19,fontWeight:800,lineHeight:1.4}}>向劳动争议仲裁委员会申请——<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>仲裁前置</span></div>
        </div>
        <div style={{padding:'12px 14px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:6,opacity:enter(70,94)}}>
          <div style={{fontSize:22,fontWeight:900,color:COLORS.teal}}><Landmark size={26} color={COLORS.teal}/>④ 诉讼</div>
          <div style={{fontSize:19,fontWeight:800,lineHeight:1.4}}>不予受理 / 逾期未决 / <span style={{fontWeight:900 }}>不服裁决</span> / 裁决被撤销 → 起诉</div>
        </div>
      </div>
      <div data-final-knowledge="labor-dispute-resolution-knowledge-1" data-stateful-terminal="dispute-claim-travel" style={{position:'absolute',left:0,top:384,width:1768,height:310,padding:'14px 22px',border:'5px dashed '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(84,110),translate:interpolate(frame,[84,110],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Hourglass size={30} color={COLORS.copper}/>仲裁时效</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Hourglass size={24} color={COLORS.copper}/>} enter={enter(98,120)}><span style={{fontWeight:900 }}>一般时效 1年</span>：自知道或应当知道权利被侵害之日起算；<span style={{fontWeight:900 }}>拖欠劳动报酬</span>争议在<span style={{fontWeight:900 }}>劳动关系存续期间</span>不受限制</FactRow>
          <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(108,130)}>劳动关系<span style={{fontWeight:900,color:COLORS.red }}>终止</span>的 → 自终止之日起<span style={{fontWeight:900 }}>1年内</span>提出——第13个月申请 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span>；时效抗辩后<span style={{fontWeight:900 }}>再提不支持</span></FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const LaborDisputeResolution02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const verdictX=interpolate(frame,[52,112],[240,1080],CLAMP);
  return <Shell code="劳3.2" title="一裁终局：对单位终局，对劳动者不终局">
    <div data-layout="final-verdict-scale-2" data-visual-anchor="comparison-axis" data-visual-grammar="final-verdict-scale,expedite-band" data-text-treatments="chip,stamp,soft-highlight" data-focal-rule="labor-dispute-resolution-scene-02-rule" data-focal-channels="contrast,motion,annotation" style={{position:'absolute',inset:0}}>
      <div data-stateful-source="verdict-review-travel" style={{position:'absolute',left:verdictX,top:24,padding:'8px 16px',background:COLORS.paper,border:'4px solid '+COLORS.red,fontSize:20,fontWeight:900,color:COLORS.red,opacity:enter(30,50),boxShadow:'5px 5px 0 '+COLORS.ink+'33',display:'flex',alignItems:'center',gap:8}}>
        <Stamp size={24} color={COLORS.red}/>终局裁决
      </div>
      <div data-final-knowledge="labor-dispute-resolution-scene-02-worker" style={{position:'absolute',left:0,top:90,width:864,height:340,padding:'14px 20px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(44,70),translate:interpolate(frame,[44,70],['-200px 0px','0px 0px'],CLAMP)}}>
        <Users size={110} color={COLORS.teal} strokeWidth={1.2} style={{position:'absolute',right:4,top:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.teal}}><Users size={28} color={COLORS.teal}/>劳动者不服</div>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(58,80)}>可自收到裁决书之日起<span style={{fontWeight:900 }}>15日内</span>向<span style={{fontWeight:900 }}>法院起诉</span>——<span style={{fontWeight:900 }}>对劳动者不终局</span></FactRow>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Coins size={24} color={COLORS.copper}/>} enter={enter(68,90)}><span style={{fontWeight:900 }}>先予执行</span>：追索<span style={{fontWeight:900 }}>劳动报酬、工伤医疗费、经济补偿、赔偿金</span>的案件——劳动保护争议 <span style={{fontWeight:900,color:COLORS.red }}>(×)</span></FactRow>
      </div>
      <div data-final-knowledge="labor-dispute-resolution-knowledge-2" data-stateful-terminal="verdict-review-travel" style={{position:'absolute',left:904,top:90,width:864,height:340,padding:'14px 20px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(54,80),translate:interpolate(frame,[54,80],['200px 0px','0px 0px'],CLAMP)}}>
        <Ban size={110} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',right:4,bottom:2,opacity:0.1,pointerEvents:'none'}}/>
        <div style={{fontSize:23,fontWeight:900,color:COLORS.red}}><Ban size={28} color={COLORS.red}/>用人单位不服</div>
        <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(68,90)}><span style={{fontWeight:900,color:COLORS.red }}>不得起诉</span>——只能向<span style={{fontWeight:900,background:COLORS.red+'20',padding:'1px 6px'}}>中级人民法院申请撤销</span>（对单位终局）</FactRow>
        <FactRow color={COLORS.gold} bg={COLORS.gold+"4D"} icon={<Split size={24} color={COLORS.gold}/>} enter={enter(78,100)}><span style={{fontWeight:900 }}>终局性审查</span>：法院认为非终局 → 受理；认为终局 → <span style={{fontWeight:900 }}>不予受理</span>，告知申请撤销；<span style={{fontWeight:900 }}>混合裁决按非终局处理</span></FactRow>
      </div>
      <div data-final-knowledge="labor-dispute-resolution-knowledge-3" style={{position:'absolute',left:0,top:454,width:1768,height:240,padding:'14px 22px',border:'5px dashed '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(88,114),translate:interpolate(frame,[88,114],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Check size={30} color={COLORS.copper}/>终局裁决的两类门槛 与 受理时限</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Coins size={24} color={COLORS.copper}/>} enter={enter(102,124)}><span style={{fontWeight:900 }}>小额争议</span>：追索报酬/工伤医疗费/补偿/赔偿金 ≤ 当地月最低工资<span style={{fontWeight:900 }}>12个月</span>——12000元＜1500×12=18000 → <span style={{fontWeight:900,color:COLORS.red }}>一裁终局，单位不得起诉 (√)</span></FactRow>
          <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Check size={24} color={COLORS.teal}/>} enter={enter(112,134)}><span style={{fontWeight:900 }}>标准争议</span>：执行国家劳动标准在<span style={{fontWeight:900 }}>工作时间、休息休假、社会保险</span>等方面的争议；受理：<span style={{fontWeight:900 }}>5日内</span>决定</FactRow>
        </div>
      </div>
    </div>
  </Shell>;
};

export const LaborDisputeResolution03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="劳3.3" title="裁决不予执行的三类情形">
    <div data-layout="nonenforcement-triad-3" data-visual-anchor="concept-icon" data-visual-grammar="nonenforce-triad,appeal-band" data-text-treatments="chip,external-negation,soft-highlight" data-focal-rule="labor-dispute-resolution-scene-03-rule" data-focal-channels="contrast,icon,annotation" style={{position:'absolute',inset:0}}>
      <Gavel size={170} color={COLORS.red} strokeWidth={1.2} style={{position:'absolute',left:'50%',top:240,translate:'-50% 0',opacity:0.06,pointerEvents:'none'}}/>
      <div data-final-knowledge="labor-dispute-resolution-scene-03-triad" style={{position:'absolute',left:0,top:0,width:1768,height:330,display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:14}}>
        <div style={{padding:'14px 18px',border:'5px solid '+COLORS.copper,background:COLORS.copper+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(12,38)}}>
          <div style={{fontSize:23,fontWeight:900,color:COLORS.copper}}><AlertTriangle size={28} color={COLORS.copper}/>程序违法</div>
          <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<Ban size={24} color={COLORS.copper}/>} enter={enter(26,48)}><span style={{fontWeight:900 }}>无管辖权</span> / 违反法定程序 / <span style={{fontWeight:900,color:COLORS.red }}>仲裁员枉法</span></FactRow>
        </div>
        <div style={{padding:'14px 18px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(24,50)}}>
          <div style={{fontSize:23,fontWeight:900,color:COLORS.red}}><FileText size={28} color={COLORS.red}/>证据瑕疵</div>
          <FactRow color={COLORS.red} bg={COLORS.red+"3D"} icon={<Ban size={24} color={COLORS.red}/>} enter={enter(38,60)}>证据<span style={{fontWeight:900,color:COLORS.red }}>伪造</span> / <span style={{fontWeight:900,color:COLORS.red }}>隐瞒证据</span></FactRow>
        </div>
        <div style={{padding:'14px 18px',border:'5px solid '+COLORS.teal,background:COLORS.teal+'59',display:'flex',flexDirection:'column',justifyContent:'center',gap:8,opacity:enter(36,62)}}>
          <div style={{fontSize:23,fontWeight:900,color:COLORS.teal}}><Scale size={28} color={COLORS.teal}/>实体与公益</div>
          <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Ban size={24} color={COLORS.teal}/>} enter={enter(50,72)}>不属于<span style={{fontWeight:900 }}>劳动争议</span> / 适用法律<span style={{fontWeight:900,color:COLORS.red }}>错误</span> / 违背<span style={{fontWeight:900 }}>社会公共利益</span></FactRow>
        </div>
      </div>
      <div data-final-knowledge="labor-dispute-resolution-knowledge-4" style={{position:'absolute',left:0,top:354,width:1768,height:340,padding:'14px 22px',border:'5px dashed '+COLORS.gold,background:COLORS.gold+'66',display:'flex',flexDirection:'column',justifyContent:'center',gap:9,opacity:enter(64,90),translate:interpolate(frame,[64,90],['0px 24px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:900,color:COLORS.copper}}><Stamp size={30} color={COLORS.copper}/>口诀与速记</div>
        <FactRow color={COLORS.copper} bg={COLORS.copper+"3D"} icon={<BadgeCheck size={24} color={COLORS.copper}/>} enter={enter(78,100)}>口诀：<span style={{fontWeight:900 }}>小额不过12个月，标准争议看劳动标准，对单位终局、对劳动者不终局</span></FactRow>
        <FactRow color={COLORS.teal} bg={COLORS.teal+"3D"} icon={<Landmark size={24} color={COLORS.teal}/>} enter={enter(88,110)}>工资争议 12000元、月最低工资 1500 元：12个月=18000元 → 属<span style={{fontWeight:900,color:COLORS.red }}>一裁终局</span>，用人单位<span style={{fontWeight:900,color:COLORS.red }}>只能向中院申请撤销</span></FactRow>
      </div>
    </div>
  </Shell>;
};

export const LaborDisputeResolution=()=> <AbsoluteFill>
  <TimelineSequence name="01-labor-dispute-resolution-scene-01" start={SCENES['labor-dispute-resolution-scene-01'].start} duration={SCENES['labor-dispute-resolution-scene-01'].duration}><LaborDisputeResolution01Scene/></TimelineSequence>
  <TimelineSequence name="02-labor-dispute-resolution-scene-02" start={SCENES['labor-dispute-resolution-scene-02'].start} duration={SCENES['labor-dispute-resolution-scene-02'].duration}><LaborDisputeResolution02Scene/></TimelineSequence>
  <TimelineSequence name="03-labor-dispute-resolution-scene-03" start={SCENES['labor-dispute-resolution-scene-03'].start} duration={SCENES['labor-dispute-resolution-scene-03'].duration}><LaborDisputeResolution03Scene/></TimelineSequence>
</AbsoluteFill>;
