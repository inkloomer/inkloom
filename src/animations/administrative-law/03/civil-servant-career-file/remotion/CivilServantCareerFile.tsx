import type {ReactNode} from 'react';
import {
  Ban,
  BriefcaseBusiness,
  CircleCheckBig,
  DoorOpen,
  FileSignature,
  HeartPulse,
  LifeBuoy,
  LockKeyhole,
  Scale,
  ShieldCheck,
  TimerReset,
  UserRoundCog,
} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const C = {
  ivory: '#F4F0E5', paper: '#FFFDF7', ink: '#232828', graphite: '#59615E',
  red: '#C43D34', teal: '#147D75', blue: '#2857A5', yellow: '#E8B63E',
  green: '#3D7B4E', pale: '#D8DDD5', black: '#161A19',
} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;
const enter = (f: number, s: number, x = 0, y = 24) => ({
  opacity: interpolate(f, [s, s + 18], [0, 1], CLAMP),
  translate: `${interpolate(f, [s, s + 18], [x, 0], CLAMP)}px ${interpolate(f, [s, s + 18], [y, 0], CLAMP)}px`,
});
const line = (f: number, s: number) => `${interpolate(f, [s, s + 30], [0, 100], CLAMP)}%`;

const Shell = ({code, title, tag, children}: {code: string; title: string; tag: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background: C.ivory, color: C.ink, overflow: 'hidden'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: `linear-gradient(90deg, ${C.black}0A 1px, transparent 1px)`, backgroundSize: '72px 100%'}} />
    <div style={{position: 'absolute', left: 0, top: 0, bottom: 0, width: 24, background: C.red}} />
    <header style={{position: 'absolute', left: 68, right: 64, top: 34, height: 108, display: 'grid', gridTemplateColumns: '126px 1fr auto', alignItems: 'center', borderBottom: `3px solid ${C.black}`}}>
      <div style={{fontSize: 18, fontWeight: 900, color: C.red}}>PERSONNEL<br />FILE {code}</div>
      <h1 style={{fontSize: 45, letterSpacing: 0, margin: 0, fontWeight: 950}}>{title}</h1>
      <span style={{fontSize: 22, fontWeight: 900, padding: '10px 16px', border: `3px solid ${C.teal}`, color: C.teal}}>{tag}</span>
    </header>
    <main style={{position: 'absolute', left: 68, right: 64, top: 166, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Label = ({children, color = C.blue}: {children: ReactNode; color?: string}) => (
  <span style={{display: 'inline-block', padding: '7px 13px', background: color, color: C.paper, fontSize: 22, fontWeight: 900}}>{children}</span>
);

export const IdentityDualLadderScene = () => { const f = useCurrentFrame(); return <Shell code="01" title="领导职务与职级：两条刻度可以交叉" tag="身份坐标">
  <div data-layout="office-rank-dual-ladder" data-visual-anchor="comparison-axis" data-visual-grammar="office-and-rank-run-in-parallel,unsuitable-status-triggers-adjustment" data-text-treatments="label-block,thin-underline,stamp" data-focal-rule="dual-status-system" data-focal-channels="contrast,connector,icon" style={{position: 'absolute', inset: 0}}>
    <div data-final-knowledge="dual-status" style={{position: 'absolute', left: 22, top: 20, right: 22, height: 390, ...enter(f, 8)}}>
      <UserRoundCog size={78} color={C.red} style={{position: 'absolute', left: 810, top: 0}} />
      {[{x: 60, c: C.blue, t: '领导职务', d: ['责任与指挥位置', '可与职级转任、兼任']}, {x: 970, c: C.teal, t: '职级', d: ['等级序列与待遇位置', '可与领导职务转任、兼任']}].map((v, i) => <section key={v.t} style={{position: 'absolute', left: v.x, top: 70, width: 690}}>
        <h2 style={{fontSize: 38, margin: 0, color: v.c}}>{v.t}</h2><div style={{height: 13, background: C.pale, margin: '24px 0'}}><div style={{width: line(f, 18 + i * 12), height: '100%', background: v.c}} /></div>
        {v.d.map(x => <div key={x} style={{fontSize: 25, padding: '13px 0', borderBottom: `2px solid ${v.c}`}}>{x}</div>)}
      </section>)}
      <div style={{position: 'absolute', left: 760, top: 230, fontSize: 62, fontWeight: 950, color: C.red}}>⇄</div>
    </div>
    <div data-final-knowledge="up-down-adjustment" style={{position: 'absolute', left: 220, right: 220, bottom: 20, height: 185, display: 'grid', gridTemplateColumns: '1fr 130px 1fr', alignItems: 'center', background: C.black, color: C.paper, padding: '20px 34px', ...enter(f, 66)}}>
      <b style={{fontSize: 31}}>职务、职级均实行能上能下</b><div style={{fontSize: 64, color: C.yellow, textAlign: 'center'}}>⇣</div><div style={{fontSize: 25, lineHeight: 1.45}}><Label color={C.red}>不适宜 / 不胜任</Label><br />应当进行调整，而非仅可调整</div>
    </div>
  </div>
 </Shell>; };

export const AppointmentEntryDoorsScene = () => { const f = useCurrentFrame(); /* data-final-knowledge="entry-appointment" data-final-knowledge="entry-election" data-final-knowledge="entry-contract" data-final-knowledge="entry-selection" */ const doors = [
  {name: '录用委任', sub: '一级主任科员以下等', color: C.blue}, {name: '选任', sub: '政府组成人员、法官、检察官', color: C.red},
  {name: '聘任', sub: '专业性、辅助性职位', color: C.teal}, {name: '公开选拔委任', sub: '正厅至副科领导职务', color: C.yellow},
 ]; return <Shell code="02" title="取得公职：岗位性质决定从哪扇门进入" tag="四类入口">
  <div data-layout="four-entry-door-concourse" data-visual-anchor="document-fork" data-visual-grammar="public-office-entry-splits-by-system,position-type-controls-entry-door" data-text-treatments="label-block,soft-highlight,external-negation" data-focal-rule="appointment-entry-systems" data-focal-channels="spatial,contrast,icon" style={{position: 'absolute', inset: 0}}>
    <DoorOpen size={72} color={C.red} style={{position: 'absolute', left: 825, top: 0}} />
    <div style={{position: 'absolute', left: 810, top: 70, width: 110, height: 110, borderRadius: '50%', background: C.black, color: C.paper, display: 'grid', placeItems: 'center', fontSize: 26, fontWeight: 900}}>公职</div>
    <div style={{position: 'absolute', left: 100, right: 100, top: 198, height: 8, background: C.black}} />
    <div style={{position: 'absolute', left: 60, right: 60, top: 210, bottom: 20, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 30}}>
      {doors.map((d, i) => <section key={d.name} data-final-knowledge={`entry-${['appointment','election','contract','selection'][i]}`} style={{position: 'relative', border: `5px solid ${d.color}`, background: C.paper, padding: 26, ...enter(f, 18 + i * 14)}}>
        <div style={{position: 'absolute', left: '50%', top: -42, width: 8, height: 42, background: d.color}} /><div style={{fontSize: 18, fontWeight: 900, color: d.color}}>ENTRY 0{i + 1}</div>
        <h2 style={{fontSize: 34, margin: '18px 0'}}>{d.name}</h2><p style={{fontSize: 24, lineHeight: 1.45}}>{d.sub}</p>
        {i === 1 && <div style={{fontSize: 22}}>本级人大或人大常委会任免</div>}
        {i === 3 && <div style={{fontSize: 22, color: C.red, fontWeight: 900}}>职级不适用；机关内无合适人选<br/><span style={{color:C.ink}}>晋升领导职务：任前公示 + 任职试用期</span></div>}
      </section>)}
    </div>
  </div>
 </Shell>; };

export const ExamRecruitmentRunwayScene = () => { const f = useCurrentFrame(); const bars = ['受过刑罚（故意或过失）', '被开除公职', '被开除党籍', '失信联合惩戒对象']; const stops = ['笔试','面试','资格复审','考察','体检','公示≥5工作日']; return <Shell code="03" title="考试录用：先过四道禁入栏，再跑完六站" tag="录用跑道">
  <div data-layout="eligibility-funnel-and-six-stop-runway" data-visual-anchor="flow-path" data-visual-grammar="rank-threshold-opens-exam-entry,four-bars-precede-six-step-process-and-probation" data-text-treatments="external-negation,thin-underline,stamp" data-focal-rule="exam-recruitment" data-focal-channels="motion,connector,contrast" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="exam-scope" style={{position: 'absolute', left: 0, top: 0, width: 390, height: 150, background: C.blue, color: C.paper, padding: 20, fontSize: 23, ...enter(f, 6)}}><b style={{fontSize: 30}}>考试录用范围</b><br />一级主任科员以下及其他相当职级层次<br/><span style={{color:C.yellow}}>省级以上批准：简化程序 / 聘任制 / 变通任职回避</span></div>
    <div data-final-knowledge="four-bars" style={{position: 'absolute', left: 430, top: 0, right: 0, height: 130, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12}}>{bars.map((x,i)=><div key={x} style={{background: '#F8DDD8', borderTop: `9px solid ${C.red}`, padding: 16, fontSize: 22, fontWeight: 850, ...enter(f, 18+i*8)}}><Ban size={30} color={C.red}/>{x}</div>)}</div>
    <div data-final-knowledge="six-step-runway" style={{position: 'absolute', left: 20, right: 20, top: 190, height: 210}}>
      <div style={{position: 'absolute', left: 80, right: 80, top: 98, height: 12, background: C.pale}}><div style={{width: line(f, 52), height: '100%', background: C.teal}} /></div>
      <div style={{position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 18}}>{stops.map((x,i)=><div key={x} style={{textAlign: 'center', ...enter(f, 38+i*9)}}><span style={{display: 'grid', placeItems: 'center', width: 64, height: 64, borderRadius: '50%', margin: '66px auto 12px', background: i===5?C.red:C.teal, color: C.paper, fontSize: 26, fontWeight: 950}}>{i+1}</span><b style={{fontSize: 23}}>{x}</b></div>)}</div>
    </div>
    <div data-final-knowledge="probation-result" style={{position: 'absolute', left: 100, right: 100, bottom: 10, height: 205, display: 'grid', gridTemplateColumns: '280px 1fr 1fr', gap: 18, alignItems: 'stretch', ...enter(f, 100)}}>
      <div style={{display:'grid',placeItems:'center',background:C.yellow,fontSize:31,fontWeight:950}}>试用期 1 年<br/><span style={{fontSize:22}}>不可缩短或延长</span></div>
      <div style={{padding:28,border:`4px solid ${C.green}`,fontSize:25}}><CircleCheckBig color={C.green}/><b style={{fontSize:30}}> 合格</b><br/>委任级别和职级</div>
      <div style={{padding:24,border:`4px solid ${C.red}`,fontSize:23}}><Ban color={C.red}/><b style={{fontSize:29}}> 阶段决定措辞</b><br/>录用前体检不合格 → 不予录用<br/>录用后试用不合格 → 取消录用</div>
    </div>
  </div>
 </Shell>; };

export const ContractDossierScene = () => { const f = useCurrentFrame(); return <Shell code="04" title="聘任制：合同参数、审批备案与独立救济" tag="合同封套">
  <div data-layout="contract-envelope-with-remedy-slip" data-visual-anchor="document-fork" data-visual-grammar="eligible-position-enters-approved-contract,contract-dispute-exits-to-arbitration-and-civil-action" data-text-treatments="stamp,label-block,soft-highlight" data-focal-rule="appointment-contract" data-focal-channels="enclosure,connector,icon" style={{position:'absolute',inset:0}}>
    <div style={{position:'absolute',left:20,top:20,width:1040,bottom:15,background:C.paper,border:`5px solid ${C.black}`,padding:34,...enter(f,8)}}><FileSignature size={66} color={C.teal}/><h2 style={{fontSize:38,margin:'10px 0 22px'}}>聘任合同主档</h2>
      <div data-final-knowledge="contract-scope" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:18,fontSize:24}}><div style={{padding:20,background:'#D8EEE9'}}><b>可用职位</b><br/>专业性较强、辅助性职位<br/>领导职务与职级均可</div><div style={{padding:20,background:'#F8DDD8'}}><b>禁止</b><br/>涉密职位不实行聘任制</div></div>
      <div data-final-knowledge="contract-periods" style={{marginTop:24,display:'grid',gridTemplateColumns:'1fr 1fr',gap:18}}><div style={{padding:22,border:`4px solid ${C.blue}`,fontSize:28}}><b>合同 1—5 年</b></div><div style={{padding:22,border:`4px solid ${C.yellow}`,fontSize:28}}><b>试用 1—12 个月</b></div></div>
      <div data-final-knowledge="contract-management" style={{marginTop:24,fontSize:23,lineHeight:1.55}}><Label>省级以上批准</Label> 专业性、辅助性职位采用聘任制<br/><Label color={C.teal}>同级备案</Label> 合同签订、变更、解除<br/>公开招聘或直接选聘；可实行协议工资制</div>
    </div>
    <div data-final-knowledge="contract-remedy" style={{position:'absolute',right:20,top:105,width:600,height:460,background:C.black,color:C.paper,padding:34,...enter(f,70,30,0)}}><h2 style={{fontSize:35,margin:0}}>合同争议专用出口</h2><div style={{marginTop:48,fontSize:29,padding:24,border:`4px solid ${C.yellow}`}}>人事争议仲裁</div><div style={{fontSize:52,textAlign:'center',color:C.yellow}}>↓</div><div style={{fontSize:29,padding:24,background:C.red}}>民事诉讼</div><p style={{fontSize:22,lineHeight:1.45}}>不是行政诉讼，也不走普通公务员复核、申诉制度。</p></div>
  </div>
 </Shell>; };

export const ExchangeRouteMapScene = () => { const f = useCurrentFrame(); /* data-final-knowledge="internal-transfer" data-final-knowledge="horizontal-transfer" data-final-knowledge="selection-upward" */ return <Shell code="05" title="交流制度：看人员是否始终留在公务员队伍内" tag="流动线路">
  <div data-layout="internal-external-exchange-map" data-visual-anchor="flow-path" data-visual-grammar="transfer-stays-inside-civil-service,appointment-transfer-enters-from-public-institutions" data-text-treatments="label-block,external-negation,thin-underline" data-focal-rule="civil-service-exchange" data-focal-channels="spatial,connector,contrast" style={{position:'absolute',inset:0}}>
    <div style={{position:'absolute',left:140,top:70,right:140,height:390,border:`8px solid ${C.blue}`,borderRadius:90}} />
    <div style={{position:'absolute',left:820,top:0,bottom:130,width:10,background:C.teal}} />
    {[['internal-transfer','本机关内转任','特殊岗位、内设机构领导','260px','95px'],['horizontal-transfer','跨地区 / 跨部门平级','省部级正职以下领导成员','650px','335px'],['selection-upward','基层公开遴选到上级','下 → 上','1120px','95px']].map(([id,a,b,l,t],i)=><div key={id} data-final-knowledge={id} style={{position:'absolute',left:l,top:t,width:360,padding:20,background:C.paper,border:`4px solid ${i===2?C.teal:C.blue}`,fontSize:22,...enter(f,12+i*18)}}><b style={{fontSize:28}}>{a}</b><br/>{b}</div>)}
    <div data-final-knowledge="appointment-transfer" style={{position:'absolute',left:590,bottom:20,width:500,padding:24,background:C.teal,color:C.paper,fontSize:23,...enter(f,68)}}><b style={{fontSize:31}}>调任：外 → 内</b><br/>国企、高校、科研院所及其他事业单位从事公务人员<br/>进入机关任领导职务或四级调研员以上职级</div>
    <div data-final-knowledge="temporary-posting" style={{position:'absolute',right:20,bottom:25,width:500,padding:24,border:`5px solid ${C.red}`,fontSize:23,...enter(f,88)}}><b style={{fontSize:30,color:C.red}}>挂职不再属于交流制度</b><br/>用于重大工程、项目、重点任务或专项工作；临时且不改变原单位人事关系。</div>
  </div>
 </Shell>; };

export const ResignationCountdownGateScene = () => { const f = useCurrentFrame(); const blockers=['未满最低服务年限','未满脱密期限','重要公务未完且须本人继续处理','审计/审查/调查或刑事程序未终结']; return <Shell code="06" title="辞去公职：两只审批钟，四把锁" tag="辞职闸门">
  <div data-layout="dual-clock-and-four-lock-gate" data-visual-anchor="timeline-gate" data-visual-grammar="written-application-starts-decision-clock,four-blockers-lock-resignation-exit" data-text-treatments="thin-underline,external-negation,stamp" data-focal-rule="resignation" data-focal-channels="motion,enclosure,icon" style={{position:'absolute',inset:0}}>
    <div data-final-knowledge="resignation-clocks" style={{position:'absolute',left:20,top:15,width:580,bottom:15,background:C.blue,color:C.paper,padding:32,...enter(f,8)}}><TimerReset size={70}/><h2 style={{fontSize:37}}>书面申请启动审批</h2><div style={{display:'flex',gap:28,marginTop:40}}>{[['普通公务员','30日内'],['领导成员','90日内']].map(([a,b])=><div key={a} style={{flex:1,border:`4px solid ${C.yellow}`,padding:22,textAlign:'center'}}><b style={{fontSize:25}}>{a}</b><strong style={{display:'block',fontSize:42,color:C.yellow,marginTop:12}}>{b}</strong></div>)}</div></div>
    <div data-final-knowledge="resignation-blockers" style={{position:'absolute',left:660,right:20,top:15,height:410,display:'grid',gridTemplateColumns:'1fr 1fr',gap:18}}>{blockers.map((x,i)=><div key={x} style={{padding:24,background:C.paper,border:`4px solid ${C.red}`,fontSize:23,fontWeight:850,...enter(f,28+i*13)}}><LockKeyhole size={40} color={C.red}/><br/>{x}</div>)}</div>
    <div data-final-knowledge="resignation-distinction" style={{position:'absolute',left:720,right:80,bottom:15,height:180,display:'grid',gridTemplateColumns:'1fr 90px 1fr',alignItems:'center',borderTop:`8px solid ${C.black}`,fontSize:25,...enter(f,88)}}><div><Label color={C.red}>辞职</Label><br/>辞去公职，失去公务员身份</div><b style={{fontSize:40}}>≠</b><div><Label color={C.yellow}>引咎辞职</Label><br/>只辞去领导职务</div></div>
  </div>
 </Shell>; };

export const DismissalRetirementBalanceScene = () => { const f=useCurrentFrame(); const triggers=['连续2年考核不称职','不胜任且不接受其他安排','机关变动后拒绝合理安排','不履行义务，经教育仍不改且不宜开除','旷工连续>15天或全年累计>30天']; return <Shell code="07" title="辞退、保护与退休：三种出口不能混用" tag="退出分流">
  <div data-layout="dismissal-trigger-balance-and-retirement-exit" data-visual-anchor="comparison-axis" data-visual-grammar="five-triggers-load-dismissal-side,three-protections-block-dismissal-while-retirement-has-own-exit" data-text-treatments="external-negation,soft-highlight,stamp" data-focal-rule="dismissal-and-retirement" data-focal-channels="contrast,enclosure,icon" style={{position:'absolute',inset:0}}>
    <Scale size={84} color={C.red} style={{position:'absolute',left:810,top:0}} />
    <div data-final-knowledge="dismissal-triggers" style={{position:'absolute',left:15,top:45,width:720,bottom:35,padding:28,background:C.paper,borderTop:`12px solid ${C.red}`,...enter(f,8)}}><h2 style={{fontSize:34}}>应当辞退：能力或态度轨</h2>{triggers.map((x,i)=><div key={x} style={{fontSize:22,padding:'10px 0',borderBottom:`2px solid ${C.pale}`}}><b style={{color:C.red}}>{i+1}.</b> {x}</div>)}</div>
    <div data-final-knowledge="dismissal-protections" style={{position:'absolute',left:775,top:90,width:470,height:350,padding:26,background:'#DCECDF',border:`4px solid ${C.green}`,...enter(f,42)}}><ShieldCheck size={50} color={C.green}/><h2 style={{fontSize:32}}>不得辞退保护罩</h2><p style={{fontSize:22,lineHeight:1.55}}>因公致残，丧失或部分丧失工作能力<br/>患病或负伤在医疗期<br/>孕期、产假、哺乳期</p></div>
    <div data-final-knowledge="retirement-rules" style={{position:'absolute',right:15,top:45,width:500,height:260,padding:26,background:C.blue,color:C.paper,...enter(f,62)}}><HeartPulse size={48}/><h2 style={{fontSize:32}}>法定退休</h2><p style={{fontSize:23}}>达到退休年龄 / 完全丧失劳动能力<br/>享受养老金和其他待遇</p></div>
    <div data-final-knowledge="dismissal-expulsion-distinction" style={{position:'absolute',right:15,bottom:35,width:500,height:230,padding:26,border:`5px solid ${C.black}`,fontSize:23,...enter(f,84)}}><b style={{fontSize:31}}>辞退 ≠ 开除</b><p>辞退不属于处分，可领辞退费或享受失业保险；开除针对严重违法违纪，不可领取。</p></div>
  </div>
 </Shell>; };

export const DisciplineBoundaryScaleScene = () => { const f=useCurrentFrame(); return <Shell code="08" title="处分边界：先验身份与严重违法违纪，再看期限" tag="责任刻度">
  <div data-layout="discipline-border-and-duration-ruler" data-visual-anchor="boundary" data-visual-grammar="serious-personal-violation-crosses-discipline-border,non-sanctions-and-political-responsibility-remain-outside" data-text-treatments="external-negation,label-block,thin-underline" data-focal-rule="discipline-boundary" data-focal-channels="enclosure,contrast,annotation" style={{position:'absolute',inset:0}}>
    <div data-final-knowledge="discipline-premise" style={{position:'absolute',left:30,top:20,width:620,height:270,padding:30,background:C.black,color:C.paper,...enter(f,8)}}><BriefcaseBusiness size={55} color={C.yellow}/><h2 style={{fontSize:34}}>进入处分区的双门槛</h2><p style={{fontSize:25}}>被处分人具有公务员身份<br/><b style={{color:C.yellow}}>个人严重违反法律和纪律</b><br/>辞职、退休后不可再处分</p></div>
    <div data-final-knowledge="non-sanctions" style={{position:'absolute',left:30,bottom:25,width:620,height:280,padding:28,border:`5px solid ${C.red}`,background:C.paper,...enter(f,32)}}><Ban size={48} color={C.red}/><h2 style={{fontSize:32}}>降职、辞退不属于处分</h2><p style={{fontSize:23,lineHeight:1.5}}>适用前提是能力不行、态度不好，未达到严重违反法纪。涉及职务的处分是<b style={{color:C.red}}>撤职</b>。</p></div>
    <div data-final-knowledge="political-responsibility" style={{position:'absolute',left:710,top:20,width:470,height:270,padding:28,background:'#F1E5BC',...enter(f,52)}}><h2 style={{fontSize:31}}>政治责任区</h2><p style={{fontSize:23,lineHeight:1.5}}>引咎辞职、责令辞职、免职虽是追责方式，但不是法律责任，不属于行政处分。</p></div>
    <div style={{position:'absolute',left:710,right:20,bottom:25,height:280,...enter(f,74)}}><div style={{position:'absolute',left:40,right:40,top:125,height:13,background:C.graphite}} />
      <div data-final-knowledge="warning-limit" style={{position:'absolute',left:0,top:25,width:390,padding:20,border:`4px solid ${C.blue}`,background:C.paper,fontSize:22}}><b style={{fontSize:29}}>警告期间</b><br/>不得晋升职务、职级、级别<br/><span style={{color:C.green}}>可以晋升工资档次</span></div>
      <div data-final-knowledge="demotion-period" style={{position:'absolute',right:0,top:25,width:390,padding:20,background:C.red,color:C.paper,fontSize:23}}><b style={{fontSize:31}}>降级处分：24个月</b><br/>注意：降级是处分，降职不是。</div>
    </div>
  </div>
 </Shell>; };

export const AppealScopeSelectorScene = () => { const f=useCurrentFrame(); /* data-final-knowledge="appeal-discipline-assessment" data-final-knowledge="appeal-identity" data-final-knowledge="appeal-benefits" data-final-knowledge="appeal-catchall" */ const sectors=[['appeal-discipline-assessment','处分 / 定期考核不称职'],['appeal-identity','辞退、取消录用、降职、免职'],['appeal-benefits','辞职或提前退休未批准；工资福利保险未定或扣减'],['appeal-catchall','法律、法规规定的其他情形']]; return <Shell code="09" title="哪些人事处理可以申诉：四区入盘，两类被过滤" tag="救济范围">
  <div data-layout="four-sector-appeal-selector" data-visual-anchor="concept-icon" data-visual-grammar="personnel-treatment-sorts-into-four-appealable-sectors,basic-competent-and-contract-cases-are-filtered-out" data-text-treatments="label-block,soft-highlight,external-negation" data-focal-rule="appeal-scope" data-focal-channels="locator,contrast,icon" style={{position:'absolute',inset:0}}>
    <LifeBuoy size={120} color={C.red} style={{position:'absolute',left:790,top:225}} />
    {sectors.map(([id,text],i)=>{const pos=[{l:80,t:35},{l:1080,t:35},{l:80,t:380},{l:1080,t:380}][i];return <div key={id} data-final-knowledge={id} style={{position:'absolute',left:pos.l,top:pos.t,width:570,height:210,padding:28,background:i%2?C.teal:C.blue,color:C.paper,fontSize:25,...enter(f,10+i*15)}}><span style={{fontSize:18,color:C.yellow}}>APPEAL 0{i+1}</span><h2 style={{fontSize:31,lineHeight:1.35}}>{text}</h2></div>})}
    <div data-final-knowledge="appeal-exclusions" style={{position:'absolute',left:685,top:450,width:350,padding:24,border:`5px solid ${C.red}`,background:C.paper,fontSize:22,textAlign:'center',...enter(f,86)}}><Ban size={42} color={C.red}/><br/><b>基本称职不可申诉</b><br/>聘任合同争议走仲裁 → 民诉</div>
  </div>
 </Shell>; };

export const ReviewAppealForkScene = () => { const f=useCurrentFrame(); return <Shell code="10" title="救济程序：复核可选，也可以直接申诉" tag="程序分岔">
  <div data-layout="optional-review-and-direct-appeal-fork" data-visual-anchor="flow-path" data-visual-grammar="decision-opens-optional-review-or-direct-appeal,appeal-can-continue-to-reappeal-while-contract-route-stays-separate" data-text-treatments="thin-underline,stamp,label-block" data-focal-rule="review-appeal-procedure" data-focal-channels="motion,connector,contrast" style={{position:'absolute',inset:0}}>
    <div style={{position:'absolute',left:30,top:235,width:300,padding:30,background:C.black,color:C.paper,fontSize:30,fontWeight:900,...enter(f,6)}}>知道人事处理</div>
    <div style={{position:'absolute',left:330,top:300,width:180,height:10,background:C.graphite}}><div style={{width:line(f,20),height:'100%',background:C.red}}/></div>
    <div data-final-knowledge="review-window" style={{position:'absolute',left:520,top:50,width:430,padding:28,border:`5px solid ${C.blue}`,background:C.paper,...enter(f,30)}}><Label>可选</Label><h2 style={{fontSize:34}}>30日内向原机关复核</h2><p style={{fontSize:24}}>自接到复核决定起15日内，再向主管部门或原机关上一级机关申诉。</p></div>
    <div data-final-knowledge="appeal-window" style={{position:'absolute',left:520,bottom:40,width:430,padding:28,background:C.teal,color:C.paper,...enter(f,50)}}><Label color={C.red}>可直接</Label><h2 style={{fontSize:34}}>30日内申诉</h2><p style={{fontSize:24}}>向同级公务员主管部门或原机关的上一级机关提出。</p></div>
    <div style={{position:'absolute',left:955,top:300,width:170,height:10,background:C.graphite}} />
    <div data-final-knowledge="reappeal-route" style={{position:'absolute',left:1130,top:150,width:570,height:300,padding:32,background:C.blue,color:C.paper,...enter(f,76)}}><h2 style={{fontSize:36}}>申诉决定</h2><p style={{fontSize:25}}>受理机关原则上60日内作出处理决定，案情复杂可延长，最长90日。</p><div style={{padding:18,border:`4px solid ${C.yellow}`,fontSize:26}}>仍不服 → 向申诉机关的上一级机关再申诉</div></div>
    <div data-final-knowledge="contract-separate-route" style={{position:'absolute',right:20,bottom:15,width:560,padding:20,border:`4px dashed ${C.red}`,fontSize:22,...enter(f,98)}}>聘任制合同争议始终在另一轨：人事争议仲裁 → 民事诉讼</div>
  </div>
 </Shell>; };

export const CivilServantCareerFile = () => <AbsoluteFill>
  <TimelineSequence name="01-identity" start={SCENES['identity-dual-ladder'].start} duration={SCENES['identity-dual-ladder'].duration}><IdentityDualLadderScene /></TimelineSequence>
  <TimelineSequence name="02-entry" start={SCENES['appointment-entry-doors'].start} duration={SCENES['appointment-entry-doors'].duration}><AppointmentEntryDoorsScene /></TimelineSequence>
  <TimelineSequence name="03-recruitment" start={SCENES['exam-recruitment-runway'].start} duration={SCENES['exam-recruitment-runway'].duration}><ExamRecruitmentRunwayScene /></TimelineSequence>
  <TimelineSequence name="04-contract" start={SCENES['contract-dossier'].start} duration={SCENES['contract-dossier'].duration}><ContractDossierScene /></TimelineSequence>
  <TimelineSequence name="05-exchange" start={SCENES['exchange-route-map'].start} duration={SCENES['exchange-route-map'].duration}><ExchangeRouteMapScene /></TimelineSequence>
  <TimelineSequence name="06-resignation" start={SCENES['resignation-countdown-gate'].start} duration={SCENES['resignation-countdown-gate'].duration}><ResignationCountdownGateScene /></TimelineSequence>
  <TimelineSequence name="07-dismissal" start={SCENES['dismissal-retirement-balance'].start} duration={SCENES['dismissal-retirement-balance'].duration}><DismissalRetirementBalanceScene /></TimelineSequence>
  <TimelineSequence name="08-discipline" start={SCENES['discipline-boundary-scale'].start} duration={SCENES['discipline-boundary-scale'].duration}><DisciplineBoundaryScaleScene /></TimelineSequence>
  <TimelineSequence name="09-scope" start={SCENES['appeal-scope-selector'].start} duration={SCENES['appeal-scope-selector'].duration}><AppealScopeSelectorScene /></TimelineSequence>
  <TimelineSequence name="10-remedy" start={SCENES['review-appeal-fork'].start} duration={SCENES['review-appeal-fork'].duration}><ReviewAppealForkScene /></TimelineSequence>
 </AbsoluteFill>;
