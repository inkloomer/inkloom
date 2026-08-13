import type {ReactNode} from 'react';
import {CalendarClock, Gavel, Landmark, Building2, ShieldX, UserRound, Handshake, CheckCircle2} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#F1EFE6', ink:'#22262E', red:'#B23A30', green:'#2E6D4F', gold:'#C08A2D', paper:'#FAF7EE'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.red,color:COLORS.paper}}>{code}</div>
    <div style={{position:'absolute',left:190,right:76,top:46,fontSize:46,fontWeight:900,lineHeight:1.12,borderBottom:'5px solid '+COLORS.green,paddingBottom:12}}>{title}</div>
    <div style={{position:'absolute',left:76,right:76,top:150,bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

export const CompanyDissolution01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="08.1" title="解散的三种原因">
    <div data-layout="dissolution-causes-1" data-visual-anchor="flow-path" data-visual-grammar="dissolution-triad,continuation-threshold" data-text-treatments="label-block,soft-highlight,thin-underline" data-focal-rule="company-dissolution-scene-01-rule" data-focal-channels="connector,contrast,motion" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="company-dissolution-knowledge-1" style={{position:'absolute',left:0,right:0,top:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#6E6757',opacity:enter(12,36)}}>公司解散 ← 三种原因</div>
      <div style={{position:'absolute',left:0,right:0,top:70,display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="company-dissolution-scene-01-cause-0" style={{padding:'20px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.green,background:COLORS.paper,minHeight:280,opacity:enter(28,54)}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10}}>
            <CalendarClock size={36} color={COLORS.green}/>
            <div style={{fontSize:26,fontWeight:900}}>一般解散</div>
          </div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.55}}>① 营业期限届满或章程规定的解散事由出现</div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.55}}>② 股东会决议解散（<span style={{fontWeight:900}}>2/3以上</span>表决权）；尚未分配财产的，可通过修改章程或决议存续（2/3以上通过）</div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.55}}>③ 因合并或分立需要解散</div>
        </div>
        <div data-final-knowledge="company-dissolution-scene-01-cause-1" style={{padding:'20px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.gold,background:COLORS.paper,minHeight:280,opacity:enter(44,70)}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10}}>
            <ShieldX size={36} color={COLORS.gold}/>
            <div style={{fontSize:26,fontWeight:900}}>行政解散</div>
          </div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.55}}>被行政机关<span style={{background:COLORS.gold+'40',padding:'2px 6px',fontWeight:900}}>吊销营业执照、责令关闭、撤销</span>的</div>
        </div>
        <div data-final-knowledge="company-dissolution-scene-01-cause-2" style={{padding:'20px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.red,background:COLORS.paper,minHeight:280,opacity:enter(60,86)}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10}}>
            <Gavel size={36} color={COLORS.red}/>
            <div style={{fontSize:26,fontWeight:900}}>司法解散</div>
          </div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.55}}>经营管理发生<span style={{fontWeight:900}}>严重困难</span>＋继续存续会使股东利益受到<span style={{fontWeight:900}}>重大损失</span>＋<span style={{fontWeight:900}}>其他途径不能解决</span>——三要件</div>
        </div>
      </div>
      <div style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.gold,background:COLORS.paper,padding:'14px 24px',opacity:enter(88,114)}}>
        <Building2 size={38} color={COLORS.gold}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}>经营管理严重困难：<span style={{fontWeight:900}}>2年以上</span>无法召开股东会 / <span style={{fontWeight:900}}>2年以上</span>无法作出有效决议 / 董事长期冲突且无法通过股东会解决</div>
      </div>
    </div>
  </Shell>;
};

export const CompanyDissolution02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="08.1" title="司法解散：受理 与 不受理">
    <div data-layout="judicial-dissolution-gate-2" data-visual-anchor="boundary" data-visual-grammar="three-element-gate,non-acceptance-list" data-text-treatments="external-negation,soft-highlight,stamp" data-focal-rule="company-dissolution-scene-02-rule" data-focal-channels="enclosure,contrast,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="company-dissolution-knowledge-2" style={{position:'absolute',left:0,right:0,top:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#6E6757',opacity:enter(12,36)}}>司法解散的受理边界</div>
      <div data-final-knowledge="company-dissolution-scene-02-accept" style={{position:'absolute',left:24,top:80,width:840,padding:24,border:'5px solid '+COLORS.green,background:COLORS.paper,opacity:enter(28,54),translate:slide(28,54,'-24px 0px')}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
          <CheckCircle2 size={40} color={COLORS.green}/>
          <div style={{padding:'8px 18px',background:COLORS.green,color:COLORS.paper,fontSize:26,fontWeight:900}}>受理：三要件</div>
        </div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55}}>困难＋损失＋无他途：经营管理严重困难、继续存续使股东利益重大损失、其他途径不能解决</div>
      </div>
      <div data-final-knowledge="company-dissolution-scene-02-reject" style={{position:'absolute',right:24,top:80,width:840,padding:24,border:'5px dashed '+COLORS.red,background:COLORS.paper,opacity:enter(46,72),translate:slide(46,72,'24px 0px')}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
          <ShieldX size={40} color={COLORS.red}/>
          <div style={{padding:'8px 18px',background:COLORS.red,color:COLORS.paper,fontSize:26,fontWeight:900}}>不予受理</div>
        </div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55}}>① 知情权或利润分配请求权受损</div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55}}>② 公司亏损或财产不足以偿还全部债务</div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55}}>③ 公司被吊销营业执照未进行清算</div>
      </div>
      <div style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.ink,background:COLORS.paper,padding:'14px 24px',opacity:enter(76,104)}}>
        <div style={{padding:'8px 18px',border:'3px solid '+COLORS.red,color:COLORS.red,fontSize:21,fontWeight:900,transform:'rotate(-2deg)',background:COLORS.paper}}>知情权不可诉解散</div>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}>股东不能以知情权受损为由提起解散公司诉讼——此类纠纷应另循诉讼途径解决</div>
      </div>
    </div>
  </Shell>;
};

export const CompanyDissolution03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="08.1" title="司法解散的诉讼与调解">
    <div data-layout="dissolution-suit-3" data-visual-anchor="role-pair" data-visual-grammar="suit-parties,mediation-relief" data-text-treatments="label-block,stamp,thin-underline" data-focal-rule="company-dissolution-scene-03-rule" data-focal-channels="contrast,locator,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="company-dissolution-knowledge-3" style={{position:'absolute',left:0,right:0,top:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#6E6757',opacity:enter(12,36)}}>主体与救济</div>
      <div data-final-knowledge="company-dissolution-scene-03-plaintiff" style={{position:'absolute',left:0,top:80,width:560,padding:'20px 26px',border:'5px solid '+COLORS.green,background:COLORS.paper,opacity:enter(28,54)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10}}>
          <UserRound size={38} color={COLORS.green}/>
          <div style={{fontSize:26,fontWeight:900}}>原告</div>
        </div>
        <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>（单独或合计）持有公司<span style={{background:COLORS.green+'26',padding:'2px 8px',fontWeight:900}}>10%以上表决权</span>的股东</div>
      </div>
      <div data-final-knowledge="company-dissolution-scene-03-defendant" style={{position:'absolute',right:0,top:80,width:560,padding:'20px 26px',border:'5px solid '+COLORS.red,background:COLORS.paper,opacity:enter(44,70)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10}}>
          <Building2 size={38} color={COLORS.red}/>
          <div style={{fontSize:26,fontWeight:900}}>被告：公司</div>
        </div>
        <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>以其他股东为被告的，法院应告知变更为<span style={{fontWeight:900}}>第三人</span>，否则驳回对其他股东的起诉；同时申请清算的不予受理（判决解散后自行清算或申请强制清算）</div>
      </div>
      <div data-final-knowledge="company-dissolution-scene-03-mediation" style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:18,border:'5px solid '+COLORS.gold,background:COLORS.paper,padding:'16px 26px',opacity:enter(72,100)}}>
        <Handshake size={40} color={COLORS.gold}/>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.5}}>法院应注重调解：通过<span style={{fontWeight:900}}>回购、受让、减资、分立</span>等方式解决，避免解散；调解收购原告股权的，应自调解书生效之日起<span style={{fontWeight:900}}>6个月内</span>转让或注销（转让注销前不得以此对抗公司债权人）；保全：股东提供担保＋不影响公司正常经营；不能协商一致使公司存续的，法院及时判决，对全体股东有效</div>
      </div>
    </div>
  </Shell>;
};

export const CompanyDissolution=()=> <AbsoluteFill>
  <TimelineSequence name="01-company-dissolution-scene-01" start={SCENES['company-dissolution-scene-01'].start} duration={SCENES['company-dissolution-scene-01'].duration}><CompanyDissolution01Scene/></TimelineSequence>
  <TimelineSequence name="02-company-dissolution-scene-02" start={SCENES['company-dissolution-scene-02'].start} duration={SCENES['company-dissolution-scene-02'].duration}><CompanyDissolution02Scene/></TimelineSequence>
  <TimelineSequence name="03-company-dissolution-scene-03" start={SCENES['company-dissolution-scene-03'].start} duration={SCENES['company-dissolution-scene-03'].duration}><CompanyDissolution03Scene/></TimelineSequence>
</AbsoluteFill>;
