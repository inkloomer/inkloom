import type {ReactNode} from 'react';
import {BookOpen, FolderSearch, ShieldX, Scale, Building2, FileSearch, Gavel} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#F1F3EF', ink:'#1E2620', green:'#2F6B4F', red:'#B24A36', gold:'#C9A23C', paper:'#FAFBF8'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.green,color:COLORS.paper}}>{code}</div>
    <div style={{position:'absolute',left:190,right:76,top:46,fontSize:46,fontWeight:900,lineHeight:1.12,borderBottom:'5px solid '+COLORS.gold,paddingBottom:12}}>{title}</div>
    <div style={{position:'absolute',left:76,right:76,top:150,bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

export const InformationRight01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const routeProgress=interpolate(frame,[80,160],[0,1],CLAMP);
  return <Shell code="04.1" title="查阅对象：两条线路">
    <div data-layout="inspection-routes-1" data-visual-anchor="flow-path" data-visual-grammar="dual-inspection-route,ledger-request-gate" data-text-treatments="label-block,thin-underline,soft-highlight" data-focal-rule="information-right-scene-01-rule" data-focal-channels="connector,motion,spatial" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="information-right-knowledge-1" style={{position:'absolute',left:0,top:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <BookOpen size={44} color={COLORS.green}/>
        <div style={{fontSize:28,fontWeight:900}}>知情权<span style={{background:COLORS.green+'22',padding:'2px 10px',marginLeft:12,fontSize:23}}>可被限制，但不可被剥夺</span></div>
      </div>
      <div style={{position:'absolute',left:60,top:100,width:220,height:6,background:COLORS.ink,opacity:enter(24,48)}}/>
      <div style={{position:'absolute',left:80,top:88,padding:'10px 20px',border:'4px solid '+COLORS.ink,background:COLORS.paper,fontSize:24,fontWeight:900,opacity:enter(20,46)}}>股东请求查阅</div>
      <div style={{position:'absolute',left:300,top:100,width:120,height:6,background:COLORS.ink,opacity:enter(40,64)}}/>
      <div style={{position:'absolute',left:400,top:70,width:6,height:66,background:COLORS.ink,opacity:enter(46,70)}}/>
      <div style={{position:'absolute',left:400,top:130,width:interpolate(routeProgress,[0,1],[0,480],CLAMP),height:6,background:COLORS.ink,opacity:enter(50,74)}}/>
      <div data-final-knowledge="information-right-scene-01-route-0" style={{position:'absolute',left:420,top:150,width:840,padding:'20px 26px',border:'5px solid '+COLORS.green,background:COLORS.paper,opacity:enter(56,82)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10}}>
          <FolderSearch size={40} color={COLORS.green}/>
          <div style={{fontSize:27,fontWeight:900}}>张明录决报</div>
          <div style={{fontSize:22,fontWeight:800,color:'#5A6A63'}}>章程·名册·记录·决议·财务报告</div>
        </div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.5}}><span style={{background:COLORS.green+'28',padding:'2px 6px',fontWeight:900}}>任一股东</span>均可查阅复制——有限公司、股份公司均适用</div>
      </div>
      <div style={{position:'absolute',left:400,top:136,width:0,height:0,opacity:0}}/>
      <div style={{position:'absolute',left:60,top:103,width:0,height:0,opacity:0}}/>
      <div data-final-knowledge="information-right-scene-01-route-1" style={{position:'absolute',left:420,top:420,width:840,padding:'20px 26px',border:'5px solid '+COLORS.gold,background:COLORS.paper,opacity:enter(78,104)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10}}>
          <FileSearch size={40} color={COLORS.gold}/>
          <div style={{fontSize:27,fontWeight:900}}>会计账簿 · 会计凭证</div>
        </div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55}}>仅<span style={{fontWeight:900}}>有限公司</span>股东可查；股份公司需<span style={{background:COLORS.gold+'40',padding:'2px 6px',fontWeight:900}}>连续180日＋单独或合计持股3%</span></div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55,marginTop:6}}>需<span style={{fontWeight:900}}>书面请求＋说明目的</span></div>
      </div>
      <div style={{position:'absolute',left:420,top:330,width:6,height:90,background:COLORS.ink,opacity:enter(70,94)}}/>
      <div style={{position:'absolute',left:60,top:240,width:6,height:330,background:COLORS.ink+'55',opacity:enter(46,70)}}/>
    </div>
  </Shell>;
};

export const InformationRight02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="04.1" title="不正当目的：公司可拒绝">
    <div data-layout="improper-purpose-gate-2" data-visual-anchor="boundary" data-visual-grammar="refusal-gate,substantial-competition" data-text-treatments="external-negation,soft-highlight,stamp" data-focal-rule="information-right-scene-02-rule" data-focal-channels="enclosure,contrast,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="information-right-knowledge-2" style={{position:'absolute',left:0,right:0,top:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <ShieldX size={42} color={COLORS.red}/>
        <div style={{fontSize:28,fontWeight:900}}>有正当理由可拒绝——<span style={{background:COLORS.gold+'40',padding:'2px 10px'}}>15日内书面答复＋说明理由</span></div>
      </div>
      <div style={{position:'absolute',left:0,right:0,top:80,display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="information-right-scene-02-reason-0" style={{padding:'20px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.red,background:COLORS.paper,minHeight:190,opacity:enter(30,56)}}>
          <div style={{fontSize:27,fontWeight:900,marginBottom:10}}>① 同业竞争</div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>股东与公司存在实质性竞争关系</div>
        </div>
        <div data-final-knowledge="information-right-scene-02-reason-1" style={{padding:'20px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.red,background:COLORS.paper,minHeight:190,opacity:enter(46,72)}}>
          <div style={{fontSize:27,fontWeight:900,marginBottom:10}}>② 通报他人</div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>股东为了向他人通报有关信息</div>
        </div>
        <div data-final-knowledge="information-right-scene-02-reason-2" style={{padding:'20px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.red,background:COLORS.paper,minHeight:190,opacity:enter(62,88)}}>
          <div style={{fontSize:27,fontWeight:900,marginBottom:10}}>③ 三年内曾通报</div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>此前3年内曾通过查账向他人通报有关信息</div>
        </div>
      </div>
      <div data-final-knowledge="information-right-scene-02-substantive" style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:18,border:'4px solid '+COLORS.green,background:COLORS.paper,padding:'16px 26px',opacity:enter(92,120)}}>
        <Scale size={40} color={COLORS.green}/>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.5}}>同业竞争审查<span style={{fontWeight:900,color:COLORS.green}}>实质竞争关系</span>：投资同类企业但未实际参与经营或该企业未实际运营的，或仅为向同行转让股权而查账估价的——<span style={{background:COLORS.green+'24',padding:'2px 6px',fontWeight:900}}>通常不认定</span>为实质竞争</div>
      </div>
    </div>
  </Shell>;
};

export const InformationRight03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="04.1" title="知情权诉讼">
    <div data-layout="suit-qualification-fork-3" data-visual-anchor="document-fork" data-visual-grammar="suit-qualification-fork,pierce-wholly-owned" data-text-treatments="label-block,soft-highlight,stamp" data-focal-rule="information-right-scene-03-rule" data-focal-channels="connector,contrast,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="information-right-knowledge-3" style={{position:'absolute',left:0,right:0,top:0,fontSize:26,fontWeight:900,letterSpacing:4,color:'#5A6A63',opacity:enter(12,36)}}>公司拒绝查阅 → 股东可起诉</div>
      <div style={{position:'absolute',left:0,right:0,top:70,display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="information-right-scene-03-branch-0" style={{padding:'20px 26px',border:'4px solid '+COLORS.ink,background:COLORS.paper,minHeight:180,opacity:enter(28,54)}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10}}>
            <Gavel size={38} color={COLORS.green}/>
            <div style={{fontSize:26,fontWeight:900}}>起诉时须有股东资格</div>
          </div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>起诉时不具备股东资格的，法院<span style={{fontWeight:900,color:COLORS.red}}>驳回起诉</span></div>
        </div>
        <div data-final-knowledge="information-right-scene-03-branch-1" style={{padding:'20px 26px',border:'4px solid '+COLORS.ink,background:COLORS.paper,minHeight:180,opacity:enter(44,70)}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10}}>
            <FileSearch size={38} color={COLORS.gold}/>
            <div style={{fontSize:26,fontWeight:900}}>旧账例外</div>
          </div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>起诉时不是股东，但有证据证明<span style={{background:COLORS.gold+'40',padding:'2px 6px',fontWeight:900}}>持股期间合法权益受损</span>的，可查阅持股期间的资料</div>
        </div>
        <div data-final-knowledge="information-right-scene-03-branch-2" style={{padding:'20px 26px',border:'4px solid '+COLORS.ink,background:COLORS.paper,minHeight:180,opacity:enter(60,86)}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10}}>
            <Building2 size={38} color={COLORS.green}/>
            <div style={{fontSize:26,fontWeight:900}}>委托中介机构</div>
          </div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>查阅资料可委托会计师事务所、律师事务所等中介机构进行，本人无需在场</div>
        </div>
        <div data-final-knowledge="information-right-scene-03-branch-3" style={{padding:'20px 26px',border:'4px solid '+COLORS.green,background:COLORS.paper,minHeight:180,opacity:enter(76,102)}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10}}>
            <BookOpen size={38} color={COLORS.green}/>
            <div style={{fontSize:26,fontWeight:900}}>穿透性知情权</div>
          </div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>股东可对其<span style={{background:COLORS.green+'24',padding:'2px 6px',fontWeight:900}}>全资子公司</span>行使知情权——仅全资子公司关系才可穿透</div>
        </div>
      </div>
      <div style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.gold,background:COLORS.paper,padding:'14px 24px',opacity:enter(100,126)}}>
        <div style={{padding:'6px 16px',border:'3px solid '+COLORS.ink,background:COLORS.green,color:COLORS.paper,fontSize:21,fontWeight:900,transform:'rotate(-2deg)'}}>限制≠剥夺</div>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}>章程、股东协议实质性剥夺知情权的条款无效；股东与公司约定放弃知情权的，放弃<span style={{fontWeight:900,color:COLORS.red}}>无效</span></div>
      </div>
    </div>
  </Shell>;
};

export const InformationRight=()=> <AbsoluteFill>
  <TimelineSequence name="01-information-right-scene-01" start={SCENES['information-right-scene-01'].start} duration={SCENES['information-right-scene-01'].duration}><InformationRight01Scene/></TimelineSequence>
  <TimelineSequence name="02-information-right-scene-02" start={SCENES['information-right-scene-02'].start} duration={SCENES['information-right-scene-02'].duration}><InformationRight02Scene/></TimelineSequence>
  <TimelineSequence name="03-information-right-scene-03" start={SCENES['information-right-scene-03'].start} duration={SCENES['information-right-scene-03'].duration}><InformationRight03Scene/></TimelineSequence>
</AbsoluteFill>;
