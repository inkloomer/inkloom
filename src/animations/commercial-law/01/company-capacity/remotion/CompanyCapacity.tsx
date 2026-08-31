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
      <div data-final-knowledge="company-capacity-knowledge-1" style={{position:'absolute',left:0,right:0,top:0,display:'flex',alignItems:'center',gap:18,opacity:enter(14,38)}}>
        <Building size={46} color={COLORS.purple}/>
        <div style={{fontSize:32,fontWeight:900}}>权利能力与行为能力<span style={{background:COLORS.gold+'42',padding:'2px 12px',marginLeft:14,fontSize:26}}>同时产生 · 同时终止</span></div>
      </div>
      <div style={{position:'absolute',left:120,right:120,top:150,height:8,background:COLORS.ink}}/>
      <div data-final-knowledge="company-capacity-scene-01-gate-birth" style={{position:'absolute',left:150,top:196,bottom:230,width:520,padding:'22px 26px',border:'4px solid '+COLORS.ink,background:COLORS.green+'66',opacity:enter(40,66),translate:interpolate(frame,[40,66],['0px 22px','0px 0px'],CLAMP),display:'flex',flexDirection:'column',justifyContent:'center',gap:12}}>
        <CalendarCheck size={130} color={COLORS.green} strokeWidth={1.2} style={{position:'absolute',right:2,bottom:-2,opacity:0.09,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:14}}>
          <div style={{width:52,height:52,border:'4px solid '+COLORS.green,background:COLORS.green,color:COLORS.paper,display:'grid',placeItems:'center',fontSize:26,fontWeight:900}}>始</div>
          <CalendarCheck size={34} color={COLORS.green}/>
          <div style={{fontSize:28,fontWeight:900}}>成立之日</div>
        </div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.45,padding:'10px 14px',background:COLORS.paper,borderLeft:'6px solid '+COLORS.green,opacity:enter(52,74)}}>即<span style={{background:COLORS.green+'30',padding:'2px 8px'}}>营业执照签发之日</span></div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.45,padding:'10px 14px',background:COLORS.paper,borderLeft:'6px solid '+COLORS.green,opacity:enter(64,86)}}>权利能力、行为能力<span style={{fontWeight:900,color:COLORS.green}}>同时产生</span></div>
      </div>
      <div data-final-knowledge="company-capacity-scene-01-gate-death" style={{position:'absolute',right:150,top:196,bottom:230,width:520,padding:'22px 26px',border:'4px solid '+COLORS.ink,background:COLORS.purple+'66',opacity:enter(64,90),translate:interpolate(frame,[64,90],['0px 22px','0px 0px'],CLAMP),display:'flex',flexDirection:'column',justifyContent:'center',gap:12}}>
        <CalendarX size={130} color={COLORS.purple} strokeWidth={1.2} style={{position:'absolute',right:2,bottom:-2,opacity:0.09,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:14}}>
          <div style={{width:52,height:52,border:'4px solid '+COLORS.purple,background:COLORS.purple,color:COLORS.paper,display:'grid',placeItems:'center',fontSize:26,fontWeight:900}}>终</div>
          <CalendarX size={34} color={COLORS.purple}/>
          <div style={{fontSize:28,fontWeight:900}}>注销登记之日</div>
        </div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.45,padding:'10px 14px',background:COLORS.paper,borderLeft:'6px solid '+COLORS.purple,opacity:enter(76,98)}}>公司<span style={{fontWeight:900}}>终止</span>，主体资格消灭</div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.45,padding:'10px 14px',background:COLORS.paper,borderLeft:'6px solid '+COLORS.purple,opacity:enter(88,110)}}>两能力<span style={{fontWeight:900,color:COLORS.purple}}>同时终止</span></div>
      </div>
      <div style={{position:'absolute',left:120,top:150,width:interpolate(twinProgress,[0,1],[0,1544],CLAMP),height:8,background:COLORS.green,opacity:enter(40,64)}}/>
      <div data-stateful-source="company-capacity-twin-lifespan" style={{position:'absolute',left:interpolate(frame,[70,150],[124,1548],CLAMP),top:110,padding:'6px 14px',border:'4px solid '+COLORS.green,background:COLORS.paper,color:COLORS.green,fontSize:22,fontWeight:900,opacity:frame>148?0:enter(70,84),zIndex:4}}>两能力存续中</div>
      <div data-stateful-terminal="company-capacity-twin-lifespan" style={{position:'absolute',right:150,top:238,padding:'6px 14px',border:'3px solid '+COLORS.purple,background:COLORS.purple,color:COLORS.paper,fontSize:20,fontWeight:900,opacity:enter(150,170),zIndex:4}}>存续终点·同时终止</div>
      <div style={{position:'absolute',left:60,top:150,width:0,height:0,opacity:enter(40,64)}}/>
      <div data-final-knowledge="company-capacity-scene-01-scope" style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:22,border:'4px solid '+COLORS.green,background:COLORS.green+'44',padding:'20px 28px',opacity:enter(96,124)}}>
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
      <div data-final-knowledge="company-capacity-knowledge-2" style={{position:'absolute',left:0,right:0,top:0,display:'flex',alignItems:'center',gap:16,opacity:enter(14,38)}}>
        <Handshake size={44} color={COLORS.purple}/>
        <div style={{fontSize:30,fontWeight:900}}>一般规则：对外担保须经<span style={{background:COLORS.gold+'42',padding:'2px 12px'}}>股东会或董事会决议</span></div>
      </div>
      <div style={{position:'absolute',left:882,top:60,width:5,height:interpolate(frame,[20,34],[0,26],CLAMP),background:COLORS.ink}}/>
      <div style={{position:'absolute',left:interpolate(frame,[24,48],[884,439],CLAMP),top:84,width:interpolate(frame,[24,48],[0,445],CLAMP),height:5,background:COLORS.ink}}/>
      <div style={{position:'absolute',left:437,top:84,width:5,height:interpolate(frame,[44,58],[0,26],CLAMP),background:COLORS.ink}}/>
      <div style={{position:'absolute',left:424,top:108,width:0,height:0,borderTop:'14px solid '+COLORS.purple,borderLeft:'11px solid transparent',borderRight:'11px solid transparent',opacity:enter(56,68)}}/>
      <div style={{position:'absolute',left:interpolate(frame,[34,58],[884,1329],CLAMP),top:84,width:interpolate(frame,[34,58],[0,445],CLAMP),height:5,background:COLORS.ink}}/>
      <div style={{position:'absolute',left:1331,top:84,width:5,height:interpolate(frame,[54,68],[0,26],CLAMP),background:COLORS.ink}}/>
      <div style={{position:'absolute',left:1318,top:108,width:0,height:0,borderTop:'14px solid '+COLORS.green,borderLeft:'11px solid transparent',borderRight:'11px solid transparent',opacity:enter(66,78)}}/>
      <div data-final-knowledge="company-capacity-scene-02-related" style={{position:'absolute',left:24,top:110,bottom:220,width:830,padding:26,border:'5px solid '+COLORS.purple,background:COLORS.purple+'3D',opacity:enter(32,58),translate:slide(32,58,'-24px 0px'),display:'flex',flexDirection:'column'}}>
        <Users size={150} color={COLORS.purple} strokeWidth={1.2} style={{position:'absolute',right:2,bottom:-4,opacity:0.07,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:16}}>
          <Users size={44} color={COLORS.purple}/>
          <div style={{padding:'8px 18px',background:COLORS.purple,color:COLORS.paper,fontSize:28,fontWeight:900}}>关联担保</div>
          <div style={{fontSize:24,fontWeight:800,color:'#5A4A6E',background:COLORS.purple+'16',padding:'4px 12px'}}>为<span style={{fontWeight:900,color:COLORS.purple}}>股东或实际控制人</span>提供担保</div>
        </div>
        <div style={{flex:1,display:'grid',gap:12,alignContent:'center'}}>
          <div style={{fontSize:25,fontWeight:800,lineHeight:1.4,padding:'12px 16px',background:COLORS.purple+'16'}}>① 只能<span style={{fontWeight:900,borderBottom:'4px solid '+COLORS.purple,paddingBottom:2}}>股东会</span>决议</div>
          <div style={{fontSize:25,fontWeight:800,lineHeight:1.4,padding:'12px 16px',background:COLORS.purple+'16'}}>② 关联方<span style={{background:COLORS.gold+'48',padding:'2px 8px',fontWeight:900}}>回避</span></div>
          <div style={{fontSize:25,fontWeight:800,lineHeight:1.4,padding:'12px 16px',background:COLORS.purple+'16'}}>③ 出席会议的其他股东所持<span style={{fontWeight:900,color:COLORS.purple}}>表决权过半数</span>通过</div>
        </div>
      </div>
      <div data-final-knowledge="company-capacity-scene-02-nonrelated" style={{position:'absolute',right:24,top:110,bottom:220,width:830,padding:26,border:'5px solid '+COLORS.green,background:COLORS.green+'3D',opacity:enter(50,76),translate:slide(50,76,'24px 0px'),display:'flex',flexDirection:'column'}}>
        <UserCheck size={150} color={COLORS.green} strokeWidth={1.2} style={{position:'absolute',right:2,bottom:-4,opacity:0.07,pointerEvents:'none'}}/>
        <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:16}}>
          <UserCheck size={44} color={COLORS.green}/>
          <div style={{padding:'8px 18px',background:COLORS.green,color:COLORS.paper,fontSize:28,fontWeight:900}}>非关联担保</div>
          <div style={{fontSize:24,fontWeight:800,color:'#3F5A4C',background:COLORS.green+'14',padding:'4px 12px'}}>为<span style={{fontWeight:900,color:COLORS.green}}>股东、实际控制人以外的人</span>担保</div>
        </div>
        <div style={{flex:1,display:'grid',gap:12,alignContent:'center'}}>
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
        <div data-final-knowledge="company-capacity-scene-03-waiver-0" style={{position:'relative',padding:'20px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.green,background:COLORS.green+'4D',minHeight:280,opacity:enter(26,52),translate:interpolate(frame,[26,52],['0px 22px','0px 0px'],CLAMP),display:'flex',flexDirection:'column',justifyContent:'center',gap:10}}>
          <FileSignature size={110} color={COLORS.green} strokeWidth={1.2} style={{position:'absolute',right:2,bottom:-2,opacity:0.09,pointerEvents:'none'}}/>
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <FileSignature size={40} color={COLORS.green}/>
            <div style={{fontSize:29,fontWeight:900}}>本业</div>
          </div>
          <div style={{fontSize:22,fontWeight:800,lineHeight:1.4,padding:'9px 12px',background:COLORS.paper,borderLeft:'5px solid '+COLORS.green,opacity:enter(38,60)}}><span style={{fontWeight:900}}>金融机构</span>开立保函</div>
          <div style={{fontSize:22,fontWeight:800,lineHeight:1.4,padding:'9px 12px',background:COLORS.paper,borderLeft:'5px solid '+COLORS.green,opacity:enter(48,70)}}><span style={{fontWeight:900}}>担保公司</span>提供担保——属<span style={{background:COLORS.green+'2C',padding:'2px 6px',fontWeight:900}}>日常经营业务</span></div>
        </div>
        <div data-final-knowledge="company-capacity-scene-03-waiver-1" style={{position:'relative',padding:'20px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.gold,background:COLORS.gold+'4D',minHeight:280,opacity:enter(44,70),translate:interpolate(frame,[44,70],['0px 22px','0px 0px'],CLAMP),display:'flex',flexDirection:'column',justifyContent:'center',gap:10}}>
          <Building size={110} color={COLORS.gold} strokeWidth={1.2} style={{position:'absolute',right:2,bottom:-2,opacity:0.09,pointerEvents:'none'}}/>
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <Building size={40} color={COLORS.gold}/>
            <div style={{fontSize:29,fontWeight:900}}>全资</div>
          </div>
          <div style={{fontSize:22,fontWeight:800,lineHeight:1.4,padding:'9px 12px',background:COLORS.paper,borderLeft:'5px solid '+COLORS.gold,opacity:enter(56,78)}}>公司为<span style={{background:COLORS.gold+'40',padding:'2px 6px',fontWeight:900}}>全资子公司</span>经营活动担保（爹给儿子）</div>
          <div style={{fontSize:22,fontWeight:800,lineHeight:1.4,padding:'9px 12px',background:COLORS.paper,borderLeft:'5px solid '+COLORS.gold,opacity:enter(66,88)}}><span style={{fontWeight:900}}>一人公司</span>为其股东担保（儿子给爹）亦无须决议</div>
        </div>
        <div data-final-knowledge="company-capacity-scene-03-waiver-2" style={{position:'relative',padding:'20px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.purple,background:COLORS.purple+'4D',minHeight:280,opacity:enter(62,88),translate:interpolate(frame,[62,88],['0px 22px','0px 0px'],CLAMP),display:'flex',flexDirection:'column',justifyContent:'center',gap:10}}>
          <Stamp size={110} color={COLORS.purple} strokeWidth={1.2} style={{position:'absolute',right:2,bottom:-2,opacity:0.09,pointerEvents:'none'}}/>
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <FileSignature size={40} color={COLORS.purple}/>
            <div style={{fontSize:29,fontWeight:900}}>签字</div>
          </div>
          <div style={{fontSize:22,fontWeight:800,lineHeight:1.4,padding:'9px 12px',background:COLORS.paper,borderLeft:'5px solid '+COLORS.purple,opacity:enter(74,96)}}>单独或共同持有<span style={{background:COLORS.purple+'26',padding:'2px 6px',fontWeight:900}}>2/3以上</span>表决权</div>
          <div style={{fontSize:22,fontWeight:800,lineHeight:1.4,padding:'9px 12px',background:COLORS.paper,borderLeft:'5px solid '+COLORS.purple,opacity:enter(84,106)}}>对担保事项<span style={{fontWeight:900}}>有表决权的股东签字同意</span></div>
        </div>
      </div>
      <div style={{position:'absolute',left:0,right:0,top:330,height:0,opacity:enter(88,112)}}/>
      <div style={{position:'absolute',left:277,top:352,width:5,height:interpolate(frame,[92,112],[0,36],CLAMP),background:COLORS.green}}/>
      <div style={{position:'absolute',left:265,top:386,width:0,height:0,borderTop:'13px solid '+COLORS.green,borderLeft:'10px solid transparent',borderRight:'10px solid transparent',opacity:enter(110,120)}}/>
      <div style={{position:'absolute',left:882,top:352,width:5,height:interpolate(frame,[100,120],[0,36],CLAMP),background:COLORS.green}}/>
      <div style={{position:'absolute',left:870,top:386,width:0,height:0,borderTop:'13px solid '+COLORS.green,borderLeft:'10px solid transparent',borderRight:'10px solid transparent',opacity:enter(118,128)}}/>
      <div style={{position:'absolute',left:1487,top:352,width:5,height:interpolate(frame,[108,128],[0,36],CLAMP),background:COLORS.green}}/>
      <div style={{position:'absolute',left:1475,top:386,width:0,height:0,borderTop:'13px solid '+COLORS.green,borderLeft:'10px solid transparent',borderRight:'10px solid transparent',opacity:enter(126,136)}}/>
      <div data-final-knowledge="company-capacity-scene-03-conclusion" style={{position:'absolute',left:0,right:0,top:400,display:'flex',alignItems:'center',justifyContent:'center',gap:18,border:'5px solid '+COLORS.green,background:COLORS.green+'3D',padding:'16px 26px',opacity:enter(88,116)}}>
        <div style={{padding:'8px 22px',border:'4px solid '+COLORS.green,color:COLORS.green,fontSize:28,fontWeight:900,transform:'rotate(-2deg)',background:COLORS.paper}}>担保有效</div>
        <div style={{fontSize:28,fontWeight:900}}>无须机关决议</div>
      </div>
      <div data-final-knowledge="company-capacity-scene-03-listed" style={{position:'absolute',left:0,right:0,top:510,display:'flex',alignItems:'center',gap:14,padding:'14px 22px',border:'3px dashed '+COLORS.purple,background:COLORS.purple+'26',opacity:enter(104,130)}}>
        <div style={{width:40,height:40,border:'3px solid '+COLORS.purple,position:'relative',flexShrink:0}}>
          <div style={{position:'absolute',left:16,top:5,width:4,height:24,background:COLORS.purple,transform:'rotate(45deg)'}}/>
          <div style={{position:'absolute',left:16,top:5,width:4,height:24,background:COLORS.purple,transform:'rotate(-45deg)'}}/>
        </div>
        <div style={{fontSize:24,fontWeight:800,lineHeight:1.4}}><span style={{fontWeight:900,color:COLORS.purple}}>上市公司</span>不适用第2、3项（全资、签字豁免）</div>
      </div>
      <div data-final-knowledge="company-capacity-scene-03-review" style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:20,border:'4px solid '+COLORS.ink,background:COLORS.gold+'2E',padding:'14px 24px',opacity:enter(122,150)}}>
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
