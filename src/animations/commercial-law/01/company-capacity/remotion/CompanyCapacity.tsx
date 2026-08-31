import type {ReactNode} from 'react';
import {Stamp, Users, UserCheck, FileSignature, Building, Handshake, Eye, CalendarCheck, CalendarX, Scale} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#F3EDE2', ink:'#2A2438', purple:'#7A3E65', green:'#3E6B4F', gold:'#C08A2D', paper:'#FBF7EE'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.purple,color:COLORS.paper}}>{code}</div>
    <div style={{position:'absolute',left:190,right:76,top:46,fontSize:46,fontWeight:900,lineHeight:1.12,borderBottom:'5px solid '+COLORS.green,paddingBottom:12}}>{title}</div>
    <div style={{position:'absolute',left:76,right:76,top:150,bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

export const CompanyCapacity01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const twinProgress=interpolate(frame,[40,140],[0,1],CLAMP);
  return <Shell code="01.3" title="权利能力与行为能力">
    <div data-layout="capacity-timeline-1" data-visual-anchor="timeline-gate" data-visual-grammar="capacity-twin-arc,scope-validity-note" data-text-treatments="label-block,thin-underline,soft-highlight" data-focal-rule="company-capacity-scene-01-rule" data-focal-channels="spatial,locator,icon" style={{position:'absolute',inset:0}}>
      <Building size={280} color={COLORS.purple} strokeWidth={1.2} style={{position:'absolute',left:'50%',top:430,translate:'-50% 0',opacity:0.07,pointerEvents:'none'}}/>
      <div data-final-knowledge="company-capacity-knowledge-1" style={{position:'absolute',left:0,right:0,top:0,display:'flex',alignItems:'center',gap:18,opacity:enter(14,38)}}>
        <Building size={46} color={COLORS.purple}/>
        <div style={{fontSize:32,fontWeight:900}}>权利能力与行为能力<span style={{background:COLORS.gold+'42',padding:'2px 12px',marginLeft:14,fontSize:26}}>同时产生 · 同时终止</span></div>
      </div>
      <div style={{position:'absolute',left:120,right:120,top:150,height:8,background:COLORS.ink}}/>
      <div data-final-knowledge="company-capacity-scene-01-gate-birth" style={{position:'absolute',left:150,top:196,width:520,padding:'20px 26px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(40,66),translate:interpolate(frame,[40,66],['0px 22px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:12}}>
          <div style={{width:52,height:52,border:'4px solid '+COLORS.green,background:COLORS.green,color:COLORS.paper,display:'grid',placeItems:'center',fontSize:26,fontWeight:900}}>始</div>
          <CalendarCheck size={34} color={COLORS.green}/>
          <div style={{fontSize:28,fontWeight:900}}>成立之日</div>
        </div>
        <div style={{fontSize:24,fontWeight:800,lineHeight:1.4}}>即<span style={{background:COLORS.green+'30',padding:'2px 8px'}}>营业执照签发之日</span>，两能力同时产生</div>
      </div>
      <div data-final-knowledge="company-capacity-scene-01-gate-death" style={{position:'absolute',right:150,top:196,width:520,padding:'20px 26px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(64,90),translate:interpolate(frame,[64,90],['0px 22px','0px 0px'],CLAMP)}}>
        <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:12}}>
          <div style={{width:52,height:52,border:'4px solid '+COLORS.purple,background:COLORS.purple,color:COLORS.paper,display:'grid',placeItems:'center',fontSize:26,fontWeight:900}}>终</div>
          <CalendarX size={34} color={COLORS.purple}/>
          <div style={{fontSize:28,fontWeight:900}}>注销登记之日</div>
        </div>
        <div style={{fontSize:24,fontWeight:800,lineHeight:1.4}}>两能力<span style={{background:COLORS.purple+'26',padding:'2px 8px'}}>同时终止</span></div>
      </div>
      <div style={{position:'absolute',left:120,top:196,width:interpolate(twinProgress,[0,1],[0,900],CLAMP),height:6,background:COLORS.green,opacity:enter(40,64)}}/>
      <div style={{position:'absolute',left:60,top:150,width:0,height:0,opacity:enter(40,64)}}/>
      <div data-final-knowledge="company-capacity-scene-01-scope" style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:22,border:'4px solid '+COLORS.green,background:COLORS.paper,padding:'20px 28px',opacity:enter(96,124)}}>
        <Stamp size={46} color={COLORS.green}/>
        <div style={{flex:1}}>
          <div style={{fontSize:28,fontWeight:900,marginBottom:8}}>经营范围：由章程规定并依法登记</div>
          <div style={{fontSize:24,fontWeight:800,lineHeight:1.45}}>超越经营范围签订的合同<span style={{borderBottom:'4px solid '+COLORS.green,paddingBottom:2,fontWeight:900}}>有效</span>——如无法律规定的无效情形</div>
        </div>
      </div>
    </div>
  </Shell>;
};

export const CompanyCapacity02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="01.3" title="公司对外担保的决议规则">
    <div data-layout="guarantee-dual-gate-2" data-visual-anchor="comparison-axis" data-visual-grammar="related-party-gate,non-related-gate" data-text-treatments="label-block,soft-highlight,stamp" data-focal-rule="company-capacity-scene-02-rule" data-focal-channels="contrast,enclosure,connector" style={{position:'absolute',inset:0}}>
      <Handshake size={300} color={COLORS.purple} strokeWidth={1.2} style={{position:'absolute',left:'50%',top:430,translate:'-50% 0',opacity:0.07,pointerEvents:'none'}}/>
      <div data-final-knowledge="company-capacity-knowledge-2" style={{position:'absolute',left:0,right:0,top:0,display:'flex',alignItems:'center',gap:16,opacity:enter(14,38)}}>
        <Handshake size={44} color={COLORS.purple}/>
        <div style={{fontSize:30,fontWeight:900}}>一般规则：对外担保须经<span style={{background:COLORS.gold+'42',padding:'2px 12px'}}>股东会或董事会决议</span></div>
      </div>
      <div data-final-knowledge="company-capacity-scene-02-related" style={{position:'absolute',left:24,top:110,width:830,padding:26,border:'5px solid '+COLORS.purple,background:COLORS.paper,opacity:enter(32,58),translate:slide(32,58,'-24px 0px')}}>
        <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:16}}>
          <Users size={44} color={COLORS.purple}/>
          <div style={{padding:'8px 18px',background:COLORS.purple,color:COLORS.paper,fontSize:28,fontWeight:900}}>关联担保</div>
          <div style={{fontSize:24,fontWeight:800,color:'#5A4A6E',background:COLORS.purple+'16',padding:'4px 12px'}}>为<span style={{fontWeight:900,color:COLORS.purple}}>股东或实际控制人</span>提供担保</div>
        </div>
        <div style={{display:'grid',gap:12}}>
          <div style={{fontSize:25,fontWeight:800,lineHeight:1.4,padding:'12px 16px',background:COLORS.purple+'16'}}>① 只能<span style={{fontWeight:900,borderBottom:'4px solid '+COLORS.purple,paddingBottom:2}}>股东会</span>决议</div>
          <div style={{fontSize:25,fontWeight:800,lineHeight:1.4,padding:'12px 16px',background:COLORS.purple+'16'}}>② 关联方<span style={{background:COLORS.gold+'48',padding:'2px 8px',fontWeight:900}}>回避</span></div>
          <div style={{fontSize:25,fontWeight:800,lineHeight:1.4,padding:'12px 16px',background:COLORS.purple+'16'}}>③ 出席会议的其他股东所持<span style={{fontWeight:900,color:COLORS.purple}}>表决权过半数</span>通过</div>
        </div>
      </div>
      <div data-final-knowledge="company-capacity-scene-02-nonrelated" style={{position:'absolute',right:24,top:110,width:830,padding:26,border:'5px solid '+COLORS.green,background:COLORS.paper,opacity:enter(50,76),translate:slide(50,76,'24px 0px')}}>
        <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:16}}>
          <UserCheck size={44} color={COLORS.green}/>
          <div style={{padding:'8px 18px',background:COLORS.green,color:COLORS.paper,fontSize:28,fontWeight:900}}>非关联担保</div>
          <div style={{fontSize:24,fontWeight:800,color:'#3F5A4C',background:COLORS.green+'14',padding:'4px 12px'}}>为<span style={{fontWeight:900,color:COLORS.green}}>股东、实际控制人以外的人</span>担保</div>
        </div>
        <div style={{display:'grid',gap:12}}>
          <div style={{fontSize:25,fontWeight:800,lineHeight:1.4,padding:'12px 16px',background:COLORS.green+'14'}}>① <span style={{fontWeight:900,borderBottom:'4px solid '+COLORS.green,paddingBottom:2}}>股东会</span>或<span style={{fontWeight:900,borderBottom:'4px solid '+COLORS.green,paddingBottom:2}}>董事会</span>决议</div>
          <div style={{fontSize:25,fontWeight:800,lineHeight:1.4,padding:'12px 16px',background:COLORS.green+'14'}}>② 同意的<span style={{fontWeight:900,color:COLORS.green}}>表决权</span>（股东会）或<span style={{fontWeight:900,color:COLORS.green}}>人数</span>（董事会）达到过半数</div>
        </div>
      </div>
      <div data-final-knowledge="company-capacity-scene-02-rule" style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:20,border:'4px solid '+COLORS.ink,background:COLORS.gold+'30',padding:'16px 26px',opacity:enter(84,112)}}>
        <Scale size={40} color={COLORS.purple}/>
        <div style={{padding:'8px 20px',border:'4px solid '+COLORS.purple,color:COLORS.purple,fontSize:26,fontWeight:900,transform:'rotate(-2deg)',background:COLORS.paper}}>关联方回避</div>
        <div style={{fontSize:27,fontWeight:900,lineHeight:1.4}}>关键：<span style={{fontWeight:900,background:COLORS.gold+'46',padding:'2px 8px'}}>表决权过半数 / 人数过半数</span>——<span style={{fontWeight:900,color:COLORS.red,borderBottom:'4px solid '+COLORS.red,paddingBottom:2}}>不是"人头表决"</span></div>
      </div>
    </div>
  </Shell>;
};

export const CompanyCapacity03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="01.3" title="无须机关决议的担保">
    <div data-layout="waiver-triad-3" data-visual-anchor="flow-target" data-visual-grammar="waiver-converge,listed-carveout" data-text-treatments="soft-highlight,external-negation,stamp" data-focal-rule="company-capacity-scene-03-rule" data-focal-channels="connector,motion,annotation" style={{position:'absolute',inset:0}}>
      <FileSignature size={120} color={COLORS.green} strokeWidth={1.2} style={{position:'absolute',right:40,top:524,opacity:0.08,pointerEvents:'none'}}/>
      <div data-final-knowledge="company-capacity-knowledge-3" style={{position:'absolute',left:0,right:0,top:0,fontSize:26,fontWeight:900,letterSpacing:4,color:'#5A4A6E',opacity:enter(12,36)}}>三种豁免 · 无须机关决议，担保有效</div>
      <div style={{position:'absolute',left:0,right:0,top:64,display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:22}}>
        <div data-final-knowledge="company-capacity-scene-03-waiver-0" style={{padding:'20px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.green,background:COLORS.paper,minHeight:240,opacity:enter(26,52),translate:interpolate(frame,[26,52],['0px 22px','0px 0px'],CLAMP)}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:14}}>
            <FileSignature size={40} color={COLORS.green}/>
            <div style={{fontSize:29,fontWeight:900}}>本业</div>
          </div>
          <div style={{fontSize:23,fontWeight:700,lineHeight:1.5}}>金融机构开立保函，或担保公司提供担保——担保属其<span style={{background:COLORS.green+'2C',padding:'2px 6px',fontWeight:900}}>日常经营业务</span></div>
        </div>
        <div data-final-knowledge="company-capacity-scene-03-waiver-1" style={{padding:'20px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.gold,background:COLORS.paper,minHeight:240,opacity:enter(44,70),translate:interpolate(frame,[44,70],['0px 22px','0px 0px'],CLAMP)}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:14}}>
            <Building size={40} color={COLORS.gold}/>
            <div style={{fontSize:29,fontWeight:900}}>全资</div>
          </div>
          <div style={{fontSize:23,fontWeight:700,lineHeight:1.5}}>公司为其<span style={{background:COLORS.gold+'40',padding:'2px 6px',fontWeight:900}}>全资子公司</span>经营活动担保（爹给儿子）；<span style={{fontWeight:900}}>一人公司</span>为其股东担保（儿子给爹）亦无须决议</div>
        </div>
        <div data-final-knowledge="company-capacity-scene-03-waiver-2" style={{padding:'20px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.purple,background:COLORS.paper,minHeight:240,opacity:enter(62,88),translate:interpolate(frame,[62,88],['0px 22px','0px 0px'],CLAMP)}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:14}}>
            <FileSignature size={40} color={COLORS.purple}/>
            <div style={{fontSize:29,fontWeight:900}}>签字</div>
          </div>
          <div style={{fontSize:23,fontWeight:700,lineHeight:1.5}}>由单独或共同持有<span style={{background:COLORS.purple+'26',padding:'2px 6px',fontWeight:900}}>2/3以上</span>对担保事项有表决权的股东签字同意</div>
        </div>
      </div>
      <div style={{position:'absolute',left:0,right:0,top:330,height:0,opacity:enter(88,112)}}/>
      <div data-final-knowledge="company-capacity-scene-03-conclusion" style={{position:'absolute',left:0,right:0,top:350,display:'flex',alignItems:'center',justifyContent:'center',gap:18,border:'5px solid '+COLORS.green,background:COLORS.green+'16',padding:'16px 26px',opacity:enter(88,116)}}>
        <div style={{padding:'8px 22px',border:'4px solid '+COLORS.green,color:COLORS.green,fontSize:28,fontWeight:900,transform:'rotate(-2deg)',background:COLORS.paper}}>担保有效</div>
        <div style={{fontSize:28,fontWeight:900}}>无须机关决议</div>
      </div>
      <div data-final-knowledge="company-capacity-scene-03-listed" style={{position:'absolute',left:0,right:0,top:470,display:'flex',alignItems:'center',gap:14,padding:'14px 22px',border:'3px dashed '+COLORS.purple,background:COLORS.paper,opacity:enter(104,130)}}>
        <div style={{width:40,height:40,border:'3px solid '+COLORS.purple,position:'relative',flexShrink:0}}>
          <div style={{position:'absolute',left:16,top:5,width:4,height:24,background:COLORS.purple,transform:'rotate(45deg)'}}/>
          <div style={{position:'absolute',left:16,top:5,width:4,height:24,background:COLORS.purple,transform:'rotate(-45deg)'}}/>
        </div>
        <div style={{fontSize:24,fontWeight:800,lineHeight:1.4}}><span style={{fontWeight:900,color:COLORS.purple}}>上市公司</span>不适用第2、3项（全资、签字豁免）</div>
      </div>
      <div data-final-knowledge="company-capacity-scene-03-review" style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:20,border:'4px solid '+COLORS.ink,background:COLORS.paper,padding:'14px 24px',opacity:enter(122,150)}}>
        <Eye size={40} color={COLORS.purple}/>
        <div style={{fontSize:23,fontWeight:700,lineHeight:1.45}}>相对人仅有<span style={{background:COLORS.gold+'40',padding:'2px 6px',fontWeight:900}}>形式审查</span>义务：善意 → 公司担责；非善意 → 公司无担保责任（公司有过错的，承担不超过债务人不能清偿部分 1/2 的责任）</div>
      </div>
    </div>
  </Shell>;
};

export const CompanyCapacity=()=> <AbsoluteFill>
  <TimelineSequence name="01-company-capacity-scene-01" start={SCENES['company-capacity-scene-01'].start} duration={SCENES['company-capacity-scene-01'].duration}><CompanyCapacity01Scene/></TimelineSequence>
  <TimelineSequence name="02-company-capacity-scene-02" start={SCENES['company-capacity-scene-02'].start} duration={SCENES['company-capacity-scene-02'].duration}><CompanyCapacity02Scene/></TimelineSequence>
  <TimelineSequence name="03-company-capacity-scene-03" start={SCENES['company-capacity-scene-03'].start} duration={SCENES['company-capacity-scene-03'].duration}><CompanyCapacity03Scene/></TimelineSequence>
</AbsoluteFill>;
