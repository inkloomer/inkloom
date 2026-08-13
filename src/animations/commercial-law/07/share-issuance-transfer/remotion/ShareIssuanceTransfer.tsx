import type {ReactNode} from 'react';
import {BookOpen, ChartNoAxesColumn, Ticket, Lock, Clock3, CalendarClock, Landmark, PiggyBank} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#EEF1F2', ink:'#232A33', blue:'#2B5F8F', orange:'#C2542B', gold:'#C9A23C', paper:'#FAFCFC'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.blue,color:COLORS.paper}}>{code}</div>
    <div style={{position:'absolute',left:190,right:76,top:46,fontSize:46,fontWeight:900,lineHeight:1.12,borderBottom:'5px solid '+COLORS.orange,paddingBottom:12}}>{title}</div>
    <div style={{position:'absolute',left:76,right:76,top:150,bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

export const ShareIssuanceTransfer01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="07.2" title="资本制 与 票面">
    <div data-layout="capital-system-duel-1" data-visual-anchor="comparison-axis" data-visual-grammar="statutory-vs-authorized,par-vs-nopar" data-text-treatments="label-block,thin-underline,soft-highlight" data-focal-rule="share-issuance-transfer-scene-01-rule" data-focal-channels="contrast,spatial,icon" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="share-issuance-transfer-knowledge-1" style={{position:'absolute',left:0,top:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <BookOpen size={42} color={COLORS.blue}/>
        <div style={{fontSize:27,fontWeight:900}}>股份发行：法定资本制 / 授权资本制</div>
      </div>
      <div data-final-knowledge="share-issuance-transfer-scene-01-capital" style={{position:'absolute',left:0,top:80,width:880,padding:'20px 26px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(28,54)}}>
        <div style={{fontSize:26,fontWeight:900,marginBottom:10}}>法定资本制</div>
        <div style={{fontSize:23,fontWeight:700,lineHeight:1.5}}>设立时所有股份<span style={{fontWeight:900}}>一次性发行完毕</span>；后续增资须召开股东会，履行增资程序</div>
        <div style={{borderTop:'3px solid '+COLORS.blue,marginTop:12,paddingTop:12,fontSize:26,fontWeight:900,marginBottom:10}}>授权资本制</div>
        <div style={{fontSize:23,fontWeight:700,lineHeight:1.5}}>章程或股东会授权，<span style={{fontWeight:900}}>董事会</span>可在<span style={{background:COLORS.blue+'26',padding:'2px 8px',fontWeight:900}}>3年内</span>决定发行不超过已发行股份<span style={{fontWeight:900}}>50%</span>的股份；非货币出资须股东会决议；发行后修改章程无须股东会表决；董事会决议须全体董事<span style={{fontWeight:900}}>2/3以上</span>通过</div>
      </div>
      <div data-final-knowledge="share-issuance-transfer-scene-01-par" style={{position:'absolute',right:0,top:80,width:820,padding:'20px 26px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(46,72)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10}}>
          <Ticket size={38} color={COLORS.gold}/>
          <div style={{fontSize:26,fontWeight:900}}>面额股 / 无面额股</div>
          <div style={{fontSize:21,fontWeight:900,color:COLORS.orange}}>择一，可相互转换</div>
        </div>
        <div style={{fontSize:23,fontWeight:700,lineHeight:1.5,padding:'10px 14px',background:COLORS.gold+'14',marginBottom:8}}>面额股：可平价、溢价发行（溢价款计入资本公积金），<span style={{fontWeight:900,color:COLORS.orange}}>不可折价发行</span></div>
        <div style={{fontSize:23,fontWeight:700,lineHeight:1.5,padding:'10px 14px',background:COLORS.blue+'10'}}>无面额股：灵活定价；发行收入的<span style={{background:COLORS.blue+'26',padding:'2px 6px',fontWeight:900}}>1/2以上</span>计入注册资本，其余计入资本公积金</div>
      </div>
      <div style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.orange,background:COLORS.paper,padding:'14px 24px',opacity:enter(74,102)}}>
        <ChartNoAxesColumn size={38} color={COLORS.orange}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}>类别股：优先/劣后分配、表决权差异、转让受限、监督同权四类——<span style={{fontWeight:900,color:COLORS.orange}}>上市公司不得发行</span>；影响类别股股东权利的，须股东会＋类别股股东会<span style={{fontWeight:900}}>双重表决</span>2/3以上</div>
      </div>
    </div>
  </Shell>;
};

export const ShareIssuanceTransfer02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const clockProgress=interpolate(frame,[120,220],[0,1],CLAMP);
  return <Shell code="07.2" title="董监高与原始股东的转让限制">
    <div data-layout="restriction-clock-2" data-visual-anchor="timeline-gate" data-visual-grammar="one-year-lockup,quarter-annual-cap" data-text-treatments="label-block,stamp,external-negation" data-focal-rule="share-issuance-transfer-scene-02-rule" data-focal-channels="connector,motion,locator" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="share-issuance-transfer-knowledge-2" style={{position:'absolute',left:0,right:0,top:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <Clock3 size={42} color={COLORS.orange}/>
        <div style={{fontSize:27,fontWeight:900}}>三限口诀：上市1年 · 离任半年 · 每年≤25%</div>
      </div>
      <div style={{position:'absolute',left:40,top:130,width:interpolate(clockProgress,[0,1],[0,1680],CLAMP),height:8,background:COLORS.ink}}/>
      <div data-final-knowledge="share-issuance-transfer-scene-02-gate-0" style={{position:'absolute',left:60,top:190,width:520,padding:'18px 24px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(46,72)}}>
        <div style={{fontSize:26,fontWeight:900,marginBottom:8}}>① 上市之日起1年</div>
        <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>原始股东（公开发行前已发行的股份）与董监高所持股份均不得转让</div>
      </div>
      <div data-final-knowledge="share-issuance-transfer-scene-02-gate-1" style={{position:'absolute',left:620,top:190,width:520,padding:'18px 24px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(62,88)}}>
        <div style={{fontSize:26,fontWeight:900,marginBottom:8}}>② 任职期间每年≤25%</div>
        <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>每年转让不得超过所持本公司股份总数的<span style={{background:COLORS.blue+'26',padding:'2px 8px',fontWeight:900}}>25%</span>；并应申报持股及变动情况</div>
      </div>
      <div data-final-knowledge="share-issuance-transfer-scene-02-gate-2" style={{position:'absolute',left:1180,top:190,width:520,padding:'18px 24px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(78,104)}}>
        <div style={{fontSize:26,fontWeight:900,marginBottom:8}}>③ 离职后半年内</div>
        <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>不得转让所持本公司股份；章程只能作<span style={{fontWeight:900}}>更严</span>的限制性规定</div>
      </div>
      <div data-stateful-source="share-issuance-transfer-restriction" style={{position:'absolute',left:interpolate(clockProgress,[0,1],[40,1670],CLAMP),top:112,width:0,height:0,borderLeft:'14px solid transparent',borderRight:'14px solid transparent',borderBottom:'30px solid '+COLORS.orange,opacity:clockProgress>0.94?0:1,zIndex:4}}/>
      <div data-final-knowledge="share-issuance-transfer-scene-02-pledge" style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:18,border:'5px solid '+COLORS.orange,background:COLORS.paper,padding:'16px 26px',opacity:enter(100,128)}}>
        <Lock size={40} color={COLORS.orange}/>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.5}}>股份在限制转让期限内<span style={{fontWeight:900}}>出质</span>的，质权人<span style={{background:COLORS.orange+'24',padding:'2px 6px',fontWeight:900}}>不得在限制期内行使质权</span>——行使质权会变相导致股份转让</div>
        <div data-stateful-terminal="share-issuance-transfer-restriction" style={{marginLeft:'auto',padding:'8px 18px',border:'3px solid '+COLORS.ink,background:COLORS.orange,color:COLORS.paper,fontSize:21,fontWeight:900,opacity:enter(150,172)}}>三限走完</div>
      </div>
    </div>
  </Shell>;
};

export const ShareIssuanceTransfer03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="07.2" title="回购限制 与 财务资助">
    <div data-layout="buyback-gates-3" data-visual-anchor="boundary" data-visual-grammar="buyback-exceptions,financial-aid-ban" data-text-treatments="soft-highlight,stamp,external-negation" data-focal-rule="share-issuance-transfer-scene-03-rule" data-focal-channels="enclosure,contrast,annotation" data-final-knowledge="share-issuance-transfer-knowledge-3" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="share-issuance-transfer-scene-03-buyback" style={{position:'absolute',left:0,top:0,width:900,padding:'22px 26px',border:'5px solid '+COLORS.blue,background:COLORS.paper,opacity:enter(26,52)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
          <Landmark size={40} color={COLORS.blue}/>
          <div style={{fontSize:26,fontWeight:900}}>回购限制：不得回购本公司股份</div>
        </div>
        <div style={{fontSize:23,fontWeight:700,lineHeight:1.55}}>例外：①减资（股东会决议，10日内注销）②与持有本公司股份的公司合并（6个月内转让或注销）③异议股东要求回购（无需决议）④员工持股计划或股权激励（章程或股东会授权，2/3以上董事出席的董事会决议；三项合计≤已发行股份<span style={{fontWeight:900}}>10%</span>，3年内转让或注销）⑤债转股 ⑥上市公司维护公司价值及股东权益</div>
      </div>
      <div data-final-knowledge="share-issuance-transfer-scene-03-aid" style={{position:'absolute',right:0,top:0,width:800,padding:'22px 26px',border:'5px solid '+COLORS.orange,background:COLORS.paper,opacity:enter(44,70)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
          <PiggyBank size={40} color={COLORS.orange}/>
          <div style={{fontSize:26,fontWeight:900}}>财务资助：禁止＋例外</div>
        </div>
        <div style={{fontSize:23,fontWeight:700,lineHeight:1.55}}>不得为他人取得本公司或母公司股份提供赠与、借款、担保等资助。例外：①用于实施<span style={{fontWeight:900}}>员工持股计划</span> ②为公司利益，经股东会/董事会（章程或股东会授权）决议，资助累计总额不超过已发行股本总额<span style={{background:COLORS.orange+'28',padding:'2px 6px',fontWeight:900}}>10%</span>——董事会决议须全体董事2/3以上通过</div>
      </div>
      <div style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.ink,background:COLORS.paper,padding:'14px 24px',opacity:enter(76,104)}}>
        <div style={{padding:'8px 18px',border:'3px solid '+COLORS.orange,color:COLORS.orange,fontSize:21,fontWeight:900,transform:'rotate(-2deg)',background:COLORS.paper}}>自由转让原则</div>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}>除章程另有规定外，股东转让股份以<span style={{fontWeight:900}}>自由转让</span>为原则——无须通知其他股东，其他股东也没有优先购买权</div>
      </div>
    </div>
  </Shell>;
};

export const ShareIssuanceTransfer=()=> <AbsoluteFill>
  <TimelineSequence name="01-share-issuance-transfer-scene-01" start={SCENES['share-issuance-transfer-scene-01'].start} duration={SCENES['share-issuance-transfer-scene-01'].duration}><ShareIssuanceTransfer01Scene/></TimelineSequence>
  <TimelineSequence name="02-share-issuance-transfer-scene-02" start={SCENES['share-issuance-transfer-scene-02'].start} duration={SCENES['share-issuance-transfer-scene-02'].duration}><ShareIssuanceTransfer02Scene/></TimelineSequence>
  <TimelineSequence name="03-share-issuance-transfer-scene-03" start={SCENES['share-issuance-transfer-scene-03'].start} duration={SCENES['share-issuance-transfer-scene-03'].duration}><ShareIssuanceTransfer03Scene/></TimelineSequence>
</AbsoluteFill>;
