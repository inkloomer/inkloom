import type {ReactNode} from 'react';
import {BellRing, BookOpen, Building, Building2, ClipboardList, Eye, FileCheck2, FileSearch, FileText, FolderSearch, Gavel, Link, Lock, Receipt, RefreshCw, Scale, ScrollText, ShieldX, Stamp, Store, Undo2, Users} from 'lucide-react';
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

const Watermark=({icon,size=170,color}:{readonly icon:ReactNode;readonly size?:number;readonly color:string})=>(
  <div style={{position:'absolute',right:6,bottom:-4,opacity:0.09,pointerEvents:'none'}}>
    {icon}
  </div>
);

const Row=({icon,children,delay,color,from='0px 18px'}:{readonly icon:ReactNode;readonly children:ReactNode;readonly delay:number;readonly color:string;readonly from?:string})=>{
  const frame=useCurrentFrame();
  return <div style={{display:'flex',alignItems:'center',gap:12,padding:'10px 14px',background:COLORS.paper,borderLeft:'6px solid '+color,fontSize:22,fontWeight:800,lineHeight:1.45,opacity:interpolate(frame,[delay,delay+22],[0,1],CLAMP),translate:interpolate(frame,[delay,delay+22],[from,'0px 0px'],CLAMP)}}>
    <span style={{flexShrink:0,display:'flex'}}>{icon}</span>
    <span>{children}</span>
  </div>;
};

export const InformationRight01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const routeProgress=interpolate(frame,[70,160],[0,1],CLAMP);
  return <Shell code="04.1" title="查阅对象：两条线路">
    <div data-layout="inspection-routes-1" data-visual-anchor="flow-path" data-visual-grammar="dual-inspection-route,ledger-request-gate" data-text-treatments="label-block,thin-underline,soft-highlight" data-focal-rule="information-right-scene-01-rule" data-focal-channels="connector,motion,spatial" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:16}}>
      <div data-final-knowledge="information-right-knowledge-1" style={{flexShrink:0,display:'flex',alignItems:'center',gap:14,opacity:enter(10,34)}}>
        <BookOpen size={42} color={COLORS.green}/>
        <div style={{fontSize:28,fontWeight:900}}>知情权 <span style={{background:COLORS.green+'22',padding:'2px 10px',marginLeft:10,fontSize:23}}>可被限制，但不可被剥夺</span></div>
        <div style={{display:'inline-flex',gap:8,marginLeft:'auto'}}>
          <span style={{padding:'6px 14px',border:'3px solid '+COLORS.red,fontSize:20,fontWeight:900,color:COLORS.red,background:COLORS.paper}}>章程剥夺条款无效</span>
          <span style={{padding:'6px 14px',border:'3px solid '+COLORS.red,fontSize:20,fontWeight:900,color:COLORS.red,background:COLORS.paper}}>约定放弃无效</span>
        </div>
      </div>
      <div style={{flex:'1 1 0',minHeight:0,display:'flex',gap:20}}>
        <div style={{flexShrink:0,width:430,display:'flex',flexDirection:'column'}}>
          <div style={{display:'flex',alignItems:'center',gap:12,padding:'14px 20px',border:'4px solid '+COLORS.ink,background:COLORS.paper,fontSize:24,fontWeight:900,opacity:enter(18,44),flexShrink:0,alignSelf:'flex-start'}}>
            <Users size={30} color={COLORS.ink}/>
            <span>股东请求查阅</span>
          </div>
          <div style={{flex:'1 1 0',display:'flex',justifyContent:'center',padding:'8px 0'}}>
            <div style={{width:6,background:COLORS.ink,opacity:enter(52,76),transformOrigin:'top center',transform:'scaleY('+routeProgress+')'}}/>
          </div>
          <div style={{flexShrink:0,position:'relative',padding:'16px 20px',border:'5px solid '+COLORS.red,background:COLORS.red+'4D',opacity:enter(90,116)}}>
            <Watermark icon={<BookOpen size={110} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
            <div style={{display:'flex',alignItems:'center',gap:10,fontSize:23,fontWeight:900,color:COLORS.red,marginBottom:10}}>
              <BookOpen size={28} color={COLORS.red}/>
              <span>知情权 · 定义与例</span>
            </div>
            <div style={{display:'grid',gap:10}}>
              <Row icon={<Eye size={24} color={COLORS.red}/>} delay={100} color={COLORS.red}>股东<span style={{fontWeight:900}}>了解和掌握</span>公司经营管理等信息的权利</Row>
              <Row icon={<ShieldX size={24} color={COLORS.red}/>} delay={114} color={COLORS.red}>例：章程规定持股低于<span style={{fontWeight:900,color:COLORS.red}}>5%</span>不得查阅复制 → 条款<span style={{fontWeight:900,color:COLORS.red}}>无效</span></Row>
            </div>
          </div>
        </div>
        <div style={{flex:'1 1 0',minWidth:0,display:'flex',flexDirection:'column',gap:16}}>
          <div data-final-knowledge="information-right-scene-01-route-0" style={{flex:'1 1 0',minHeight:0,position:'relative',padding:'16px 22px',border:'5px solid '+COLORS.green,background:COLORS.green+'4D',display:'flex',flexDirection:'column',opacity:enter(34,60)}}>
            <Watermark icon={<FolderSearch size={160} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
            <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10,flexShrink:0,flexWrap:'wrap'}}>
              <FolderSearch size={36} color={COLORS.green}/>
              <div style={{fontSize:27,fontWeight:900}}>张明录决报</div>
              <div style={{display:'inline-flex',gap:8,flexWrap:'wrap'}}>
                <span style={{display:'inline-flex',alignItems:'center',gap:6,padding:'4px 12px',border:'3px solid '+COLORS.green,fontSize:19,fontWeight:900,color:COLORS.green,background:COLORS.paper}}><ScrollText size={18}/>章程</span>
                <span style={{display:'inline-flex',alignItems:'center',gap:6,padding:'4px 12px',border:'3px solid '+COLORS.green,fontSize:19,fontWeight:900,color:COLORS.green,background:COLORS.paper}}><FileText size={18}/>名册</span>
                <span style={{display:'inline-flex',alignItems:'center',gap:6,padding:'4px 12px',border:'3px solid '+COLORS.green,fontSize:19,fontWeight:900,color:COLORS.green,background:COLORS.paper}}><ClipboardList size={18}/>记录</span>
                <span style={{display:'inline-flex',alignItems:'center',gap:6,padding:'4px 12px',border:'3px solid '+COLORS.green,fontSize:19,fontWeight:900,color:COLORS.green,background:COLORS.paper}}><FileCheck2 size={18}/>决议</span>
                <span style={{display:'inline-flex',alignItems:'center',gap:6,padding:'4px 12px',border:'3px solid '+COLORS.green,fontSize:19,fontWeight:900,color:COLORS.green,background:COLORS.paper}}><Receipt size={18}/>财务报告</span>
              </div>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
              <Row icon={<Users size={25} color={COLORS.green}/>} delay={48} color={COLORS.green}><span style={{background:COLORS.green+'28',padding:'1px 8px',fontWeight:900}}>任一股东</span>均可<span style={{fontWeight:900}}>查阅、复制</span></Row>
              <Row icon={<Building2 size={25} color={COLORS.green}/>} delay={64} color={COLORS.green}><span style={{fontWeight:900}}>有限公司、股份公司</span>均适用</Row>
            </div>
          </div>
          <div data-final-knowledge="information-right-scene-01-route-1" style={{flex:'1 1 0',minHeight:0,position:'relative',padding:'16px 22px',border:'5px solid '+COLORS.gold,background:COLORS.gold+'4D',display:'flex',flexDirection:'column',opacity:enter(58,84)}}>
            <Watermark icon={<FileSearch size={160} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
            <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10,flexShrink:0}}>
              <FileSearch size={36} color={COLORS.gold}/>
              <div style={{fontSize:27,fontWeight:900}}>会计账簿 · 会计凭证</div>
              <div style={{padding:'5px 14px',border:'3px solid '+COLORS.ink,background:COLORS.paper,fontSize:19,fontWeight:900,color:COLORS.gold,transform:'rotate(-2deg)'}}>严 门</div>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:10,flex:1,justifyContent:'space-evenly'}}>
              <Row icon={<Building size={25} color={COLORS.gold}/>} delay={72} color={COLORS.gold}>仅<span style={{fontWeight:900}}>有限公司</span>股东可查</Row>
              <Row icon={<Users size={25} color={COLORS.gold}/>} delay={88} color={COLORS.gold}>股份公司需<span style={{background:COLORS.gold+'4D',padding:'1px 8px',fontWeight:900}}>连续180日 + 单独或合计持股3%</span>股东</Row>
              <Row icon={<Lock size={25} color={COLORS.gold}/>} delay={104} color={COLORS.gold}>需<span style={{fontWeight:900}}>书面请求 + 说明目的</span></Row>
            </div>
          </div>
        </div>
      </div>
      <div style={{flexShrink:0,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.ink,background:COLORS.paper,padding:'14px 26px',opacity:enter(120,146)}}>
        <Stamp size={34} color={COLORS.green}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}>记忆口诀 <span style={{fontWeight:900,color:COLORS.green}}>张明录决报</span>＝章程名册·记录决议·财务报告 —— 两类线路的<span style={{fontWeight:900}}>区别在会计账簿会计凭证</span>（门槛更高）</div>
      </div>
    </div>
  </Shell>;
};

export const InformationRight02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="04.1" title="不正当目的：公司可拒绝">
    <div data-layout="improper-purpose-gate-2" data-visual-anchor="boundary" data-visual-grammar="refusal-gate,substantial-competition" data-text-treatments="external-negation,soft-highlight,stamp" data-focal-rule="information-right-scene-02-rule" data-focal-channels="enclosure,contrast,annotation" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:18}}>
      <div data-final-knowledge="information-right-knowledge-2" style={{flexShrink:0,display:'flex',alignItems:'center',gap:14,opacity:enter(10,34)}}>
        <ShieldX size={42} color={COLORS.red}/>
        <div style={{fontSize:28,fontWeight:900}}>不正当目的 → 公司可拒绝</div>
        <div style={{marginLeft:'auto',display:'flex',alignItems:'center',gap:10,padding:'8px 20px',border:'4px solid '+COLORS.red,background:COLORS.paper,fontSize:23,fontWeight:900,color:COLORS.red}}>
          <FileText size={26}/>
          <span>15日内书面答复＋说明理由</span>
        </div>
      </div>
      <div style={{flex:'1 1 0',minHeight:0,display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="information-right-scene-02-reason-0" style={{position:'relative',padding:'18px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(26,52),translate:slide(26,52,'0px 26px')}}>
          <Watermark icon={<Store size={150} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:26,fontWeight:900,marginBottom:10,flexShrink:0}}><Store size={30} color={COLORS.red}/>① 同业竞争</div>
          <div style={{display:'flex',flexDirection:'column',gap:12,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Building2 size={25} color={COLORS.red}/>} delay={40} color={COLORS.red}>股东与公司存在<span style={{fontWeight:900,color:COLORS.red}}>实质性竞争关系</span></Row>
            <Row icon={<FileSearch size={25} color={COLORS.red}/>} delay={54} color={COLORS.red}>审查标准是<span style={{fontWeight:900}}>实质竞争关系</span>，~~不是形式上的同业~~</Row>
          </div>
        </div>
        <div data-final-knowledge="information-right-scene-02-reason-1" style={{position:'relative',padding:'18px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(42,68),translate:slide(42,68,'0px 26px')}}>
          <Watermark icon={<BellRing size={150} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:26,fontWeight:900,marginBottom:10,flexShrink:0}}><BellRing size={30} color={COLORS.red}/>② 通报他人</div>
          <div style={{display:'flex',flexDirection:'column',gap:12,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Eye size={25} color={COLORS.red}/>} delay={56} color={COLORS.red}>股东<span style={{fontWeight:900}}>为了向他人通报</span>有关信息</Row>
            <Row icon={<Lock size={25} color={COLORS.red}/>} delay={70} color={COLORS.red}>目的不正当 → 公司可<span style={{fontWeight:900,color:COLORS.red}}>拒绝提供</span></Row>
          </div>
        </div>
        <div data-final-knowledge="information-right-scene-02-reason-2" style={{position:'relative',padding:'18px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.red,background:COLORS.red+'4D',display:'flex',flexDirection:'column',opacity:enter(58,84),translate:slide(58,84,'0px 26px')}}>
          <Watermark icon={<RefreshCw size={150} color={COLORS.red} strokeWidth={1.2}/>} color={COLORS.red}/>
          <div style={{display:'flex',alignItems:'center',gap:12,fontSize:26,fontWeight:900,marginBottom:10,flexShrink:0}}><RefreshCw size={30} color={COLORS.red}/>③ 三年内曾通报</div>
          <div style={{display:'flex',flexDirection:'column',gap:12,flex:1,justifyContent:'space-evenly'}}>
            <Row icon={<Undo2 size={25} color={COLORS.red}/>} delay={72} color={COLORS.red}>此前<span style={{fontWeight:900,color:COLORS.red}}>3年内</span>曾通过查账向他人通报有关信息</Row>
            <Row icon={<FileSearch size={25} color={COLORS.red}/>} delay={86} color={COLORS.red}>查账记录不良 → 本次查阅可拒绝</Row>
          </div>
        </div>
      </div>
      <div data-final-knowledge="information-right-scene-02-substantive" style={{flexShrink:0,display:'flex',alignItems:'center',gap:18,border:'4px solid '+COLORS.green,background:COLORS.green+'4D',padding:'16px 26px',opacity:enter(96,124)}}>
        <Scale size={40} color={COLORS.green}/>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.5}}>同业竞争审查看<span style={{fontWeight:900,color:COLORS.green}}>实质竞争关系</span>：<span style={{fontWeight:900}}>未实际参与经营或未实际运营</span>、或仅为<span style={{fontWeight:900}}>向同行转让股权而查账估价</span>的——<span style={{background:COLORS.green+'24',padding:'1px 8px',fontWeight:900}}>通常不认定</span>为实质竞争</div>
      </div>
    </div>
  </Shell>;
};

export const InformationRight03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="04.1" title="知情权诉讼">
    <div data-layout="suit-qualification-fork-3" data-visual-anchor="document-fork" data-visual-grammar="suit-qualification-fork,pierce-wholly-owned" data-text-treatments="label-block,soft-highlight,stamp" data-focal-rule="information-right-scene-03-rule" data-focal-channels="connector,contrast,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="information-right-knowledge-3" style={{position:'absolute',left:0,right:0,top:0,display:'flex',alignItems:'center',justifyContent:'center',gap:12,fontSize:26,fontWeight:900,letterSpacing:4,color:'#5A6A63',opacity:enter(10,34)}}>
        <Gavel size={30} color={COLORS.green}/>
        <span>公司拒绝查阅 → 股东可起诉</span>
      </div>
      <div style={{position:'absolute',left:0,right:0,top:56,bottom:96,display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="information-right-scene-03-branch-0" style={{position:'relative',padding:'18px 24px',border:'4px solid '+COLORS.ink,background:COLORS.green+'4D',opacity:enter(24,50),translate:slide(24,50,'-30px 0px')}}>
          <Watermark icon={<Gavel size={140} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
            <Gavel size={34} color={COLORS.green}/>
            <div style={{fontSize:26,fontWeight:900}}>起诉时须有股东资格</div>
          </div>
          <Row icon={<Users size={24} color={COLORS.green}/>} delay={38} color={COLORS.green}>起诉时<span style={{fontWeight:900}}>不具备股东资格</span>的</Row>
          <Row icon={<ShieldX size={24} color={COLORS.red}/>} delay={52} color={COLORS.red}>法院<span style={{fontWeight:900,color:COLORS.red}}>驳回起诉</span></Row>
        </div>
        <div data-final-knowledge="information-right-scene-03-branch-1" style={{position:'relative',padding:'18px 24px',border:'4px solid '+COLORS.ink,background:COLORS.gold+'4D',opacity:enter(40,66),translate:slide(40,66,'30px 0px')}}>
          <Watermark icon={<Undo2 size={140} color={COLORS.gold} strokeWidth={1.2}/>} color={COLORS.gold}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
            <Undo2 size={34} color={COLORS.gold}/>
            <div style={{fontSize:26,fontWeight:900}}>旧账例外</div>
          </div>
          <Row icon={<FileSearch size={24} color={COLORS.gold}/>} delay={54} color={COLORS.gold}>起诉时不是股东，但有证据证明<span style={{background:COLORS.gold+'4D',padding:'1px 6px',fontWeight:900}}>持股期间合法权益受损</span></Row>
          <Row icon={<Receipt size={24} color={COLORS.gold}/>} delay={68} color={COLORS.gold}>可查阅<span style={{fontWeight:900}}>持股期间</span>的公司资料（查旧账）</Row>
        </div>
        <div data-final-knowledge="information-right-scene-03-branch-2" style={{position:'relative',padding:'18px 24px',border:'4px solid '+COLORS.ink,background:COLORS.green+'4D',opacity:enter(56,82),translate:slide(56,82,'-30px 0px')}}>
          <Watermark icon={<Building2 size={140} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
            <Building2 size={34} color={COLORS.green}/>
            <div style={{fontSize:26,fontWeight:900}}>委托中介机构</div>
          </div>
          <Row icon={<FileCheck2 size={24} color={COLORS.green}/>} delay={70} color={COLORS.green}>查阅资料可委托<span style={{fontWeight:900}}>会计师事务所、律师事务所</span>等中介机构</Row>
          <Row icon={<Users size={24} color={COLORS.green}/>} delay={84} color={COLORS.green}>股东<span style={{fontWeight:900}}>本人无需在场</span></Row>
        </div>
        <div data-final-knowledge="information-right-scene-03-branch-3" style={{position:'relative',padding:'18px 24px',border:'4px solid '+COLORS.green,background:COLORS.green+'4D',opacity:enter(72,98),translate:slide(72,98,'30px 0px')}}>
          <Watermark icon={<Link size={140} color={COLORS.green} strokeWidth={1.2}/>} color={COLORS.green}/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
            <Link size={34} color={COLORS.green}/>
            <div style={{fontSize:26,fontWeight:900}}>穿透性知情权</div>
          </div>
          <Row icon={<Building size={24} color={COLORS.green}/>} delay={86} color={COLORS.green}>股东可对其<span style={{background:COLORS.green+'24',padding:'1px 6px',fontWeight:900}}>全资子公司</span>行使知情权</Row>
          <Row icon={<Lock size={24} color={COLORS.gold}/>} delay={100} color={COLORS.gold}>仅<span style={{fontWeight:900}}>全资子公司</span>关系才可穿透</Row>
        </div>
      </div>
      <div style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.ink,background:COLORS.paper,padding:'14px 26px',opacity:enter(110,136)}}>
        <div style={{padding:'6px 16px',border:'3px solid '+COLORS.green,background:COLORS.green,color:COLORS.paper,fontSize:21,fontWeight:900,transform:'rotate(-2deg)'}}>限制≠剥夺</div>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}><span style={{fontWeight:900}}>章程、股东协议实质性剥夺知情权</span>的条款无效；股东与公司约定放弃知情权的，<span style={{fontWeight:900,color:COLORS.red}}>放弃无效</span></div>
      </div>
    </div>
  </Shell>;
};

export const InformationRight=()=> <AbsoluteFill>
  <TimelineSequence name="01-information-right-scene-01" start={SCENES['information-right-scene-01'].start} duration={SCENES['information-right-scene-01'].duration}><InformationRight01Scene/></TimelineSequence>
  <TimelineSequence name="02-information-right-scene-02" start={SCENES['information-right-scene-02'].start} duration={SCENES['information-right-scene-02'].duration}><InformationRight02Scene/></TimelineSequence>
  <TimelineSequence name="03-information-right-scene-03" start={SCENES['information-right-scene-03'].start} duration={SCENES['information-right-scene-03'].duration}><InformationRight03Scene/></TimelineSequence>
</AbsoluteFill>;
