import type {ReactNode} from 'react';
import {UserRound, ShieldCheck, Users, Landmark, AlarmClock, Zap, Gavel, Building2, Crown} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#EDF0EE', ink:'#1D2420', blue:'#245E8F', orange:'#C2542B', gold:'#B08A2E', paper:'#F8FAF7'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.blue,color:COLORS.paper}}>{code}</div>
    <div style={{position:'absolute',left:190,right:76,top:46,fontSize:46,fontWeight:900,lineHeight:1.12,borderBottom:'5px solid '+COLORS.orange,paddingBottom:12}}>{title}</div>
    <div style={{position:'absolute',left:76,right:76,top:150,bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

export const ShareholderRepresentativeAction01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="05.2" title="前置程序：书面请求">
    <div data-layout="precondition-switch-1" data-visual-anchor="role-pair" data-visual-grammar="request-switch,thirty-day-window" data-text-treatments="label-block,thin-underline,soft-highlight" data-focal-rule="shareholder-representative-action-scene-01-rule" data-focal-channels="contrast,connector,locator" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="shareholder-representative-action-knowledge-1" style={{position:'absolute',left:0,right:0,top:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <UserRound size={42} color={COLORS.blue}/>
        <div style={{fontSize:28,fontWeight:900}}>公司/全资子公司怠于起诉时，股东以自己名义起诉——所获赔偿归于公司</div>
      </div>
      <div style={{position:'absolute',left:0,top:90,width:420,height:6,background:COLORS.ink,opacity:enter(24,48)}}/>
      <div style={{position:'absolute',left:0,top:78,padding:'10px 20px',border:'4px solid '+COLORS.ink,background:COLORS.paper,fontSize:24,fontWeight:900,opacity:enter(20,46)}}>谁侵权？</div>
      <div style={{position:'absolute',left:430,top:60,width:6,height:66,background:COLORS.ink,opacity:enter(34,58)}}/>
      <div style={{position:'absolute',left:436,top:80,width:120,height:6,background:COLORS.ink,opacity:enter(42,66)}}/>
      <div style={{position:'absolute',left:436,top:104,width:120,height:6,background:COLORS.ink,opacity:enter(42,66)}}/>
      <div data-final-knowledge="shareholder-representative-action-scene-01-route-0" style={{position:'absolute',left:580,top:20,width:560,padding:'20px 26px',border:'5px solid '+COLORS.blue,background:COLORS.paper,opacity:enter(46,72)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8}}>
          <ShieldCheck size={38} color={COLORS.blue}/>
          <div style={{fontSize:26,fontWeight:900}}>董事/高管侵权</div>
        </div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.5}}>书面请求<span style={{background:COLORS.blue+'26',padding:'2px 8px',fontWeight:900}}>监事会</span>（未设监事会的，请求监事）</div>
      </div>
      <div data-final-knowledge="shareholder-representative-action-scene-01-route-1" style={{position:'absolute',left:580,top:260,width:560,padding:'20px 26px',border:'5px solid '+COLORS.gold,background:COLORS.paper,opacity:enter(62,88)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8}}>
          <Users size={38} color={COLORS.gold}/>
          <div style={{fontSize:26,fontWeight:900}}>监事/他人侵权</div>
        </div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.5}}>书面请求<span style={{background:COLORS.gold+'40',padding:'2px 8px',fontWeight:900}}>董事会</span>（未设董事会的，请求董事）</div>
      </div>
      <div data-final-knowledge="shareholder-representative-action-scene-01-window" style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:18,border:'4px solid '+COLORS.orange,background:COLORS.paper,padding:'16px 26px',opacity:enter(90,118)}}>
        <AlarmClock size={42} color={COLORS.orange}/>
        <div style={{fontSize:24,fontWeight:800,lineHeight:1.5}}>收到书面请求后<span style={{fontWeight:900,color:COLORS.orange}}>拒绝</span>，或<span style={{background:COLORS.orange+'24',padding:'2px 8px',fontWeight:900}}>30日内未起诉</span>的，股东可以自己名义起诉；接受请求后公司自己起诉的——原告为公司/全资子公司，由监事会主席或监事（或董事长、董事）代表</div>
      </div>
    </div>
  </Shell>;
};

export const ShareholderRepresentativeAction02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="05.2" title="无需前置：直接起诉">
    <div data-layout="bypass-gates-2" data-visual-anchor="boundary" data-visual-grammar="bypass-branches,related-party-exemption" data-text-treatments="external-negation,soft-highlight,stamp" data-focal-rule="shareholder-representative-action-scene-02-rule" data-focal-channels="enclosure,contrast,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="shareholder-representative-action-knowledge-2" style={{position:'absolute',left:0,right:0,top:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <Zap size={42} color={COLORS.orange}/>
        <div style={{fontSize:28,fontWeight:900}}>关联交易损害公司利益——<span style={{background:COLORS.orange+'24',padding:'2px 10px'}}>无需前置</span>，股东可直接起诉关联方/合同相对方</div>
      </div>
      <div style={{position:'absolute',left:0,right:0,top:80,display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:18}}>
        <div data-final-knowledge="shareholder-representative-action-scene-02-bypass-0" style={{padding:'18px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.orange,background:COLORS.paper,minHeight:150,opacity:enter(30,56)}}>
          <div style={{fontSize:26,fontWeight:900,marginBottom:8}}>① 不存在提起诉讼的可能性</div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>如董监高蛇鼠一窝共同侵权</div>
        </div>
        <div data-final-knowledge="shareholder-representative-action-scene-02-bypass-1" style={{padding:'18px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.orange,background:COLORS.paper,minHeight:150,opacity:enter(46,72)}}>
          <div style={{fontSize:26,fontWeight:900,marginBottom:8}}>② 情况紧急</div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>如公司债权诉讼时效即将届满</div>
        </div>
        <div data-final-knowledge="shareholder-representative-action-scene-02-bypass-2" style={{padding:'18px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.orange,background:COLORS.paper,minHeight:150,opacity:enter(62,88)}}>
          <div style={{fontSize:26,fontWeight:900,marginBottom:8}}>③ 关联关系损害公司利益</div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>控股股东、实际控制人、董监高利用关联关系损害公司利益，公司没有起诉的</div>
        </div>
        <div data-final-knowledge="shareholder-representative-action-scene-02-bypass-3" style={{padding:'18px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.orange,background:COLORS.paper,minHeight:150,opacity:enter(78,104)}}>
          <div style={{fontSize:26,fontWeight:900,marginBottom:8}}>④ 关联交易合同存在瑕疵</div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>合同存在无效、可撤销或对公司不发生效力的情形，股东可诉合同相对方</div>
        </div>
      </div>
      <div style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.blue,background:COLORS.paper,padding:'14px 24px',opacity:enter(102,128)}}>
        <Gavel size={38} color={COLORS.blue}/>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.5}}>对照：董监高损害的是<span style={{fontWeight:900}}>股东</span>利益（而非公司利益）的，股东可直接起诉——<span style={{background:COLORS.blue+'24',padding:'2px 6px',fontWeight:900}}>股东直接诉讼</span></div>
      </div>
    </div>
  </Shell>;
};

export const ShareholderRepresentativeAction03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const awardProgress=interpolate(frame,[150,240],[0,1],CLAMP);
  return <Shell code="05.2" title="诉讼主体与效果">
    <div data-layout="suit-triangle-3" data-visual-anchor="flow-target" data-visual-grammar="suit-triangle,victory-returns" data-text-treatments="label-block,stamp,soft-highlight" data-focal-rule="shareholder-representative-action-scene-03-rule" data-focal-channels="connector,motion,spatial" data-final-knowledge="shareholder-representative-action-knowledge-3" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="shareholder-representative-action-scene-03-plaintiff" style={{position:'absolute',left:0,top:40,width:540,padding:'20px 26px',border:'5px solid '+COLORS.blue,background:COLORS.paper,opacity:enter(26,52)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8}}>
          <UserRound size={38} color={COLORS.blue}/>
          <div style={{fontSize:26,fontWeight:900}}>原告：股东</div>
        </div>
        <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>起诉时具有股东资格；<span style={{fontWeight:900}}>有限公司</span>任一股东；<span style={{fontWeight:900}}>股份公司</span>连续180日以上＋单独或合计持股1%以上</div>
      </div>
      <div data-final-knowledge="shareholder-representative-action-scene-03-defendant" style={{position:'absolute',right:0,top:40,width:540,padding:'20px 26px',border:'5px solid '+COLORS.orange,background:COLORS.paper,opacity:enter(42,68)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8}}>
          <Gavel size={38} color={COLORS.orange}/>
          <div style={{fontSize:26,fontWeight:900}}>被告：侵权人</div>
        </div>
        <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>损害公司/全资子公司利益的董监高或他人</div>
      </div>
      <div data-final-knowledge="shareholder-representative-action-scene-03-third" style={{position:'absolute',left:560,top:270,width:620,padding:'20px 26px',border:'5px solid '+COLORS.gold,background:COLORS.paper,opacity:enter(58,84)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8}}>
          <Building2 size={38} color={COLORS.gold}/>
          <div style={{fontSize:26,fontWeight:900}}>第三人：公司 / 全资子公司</div>
        </div>
        <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>双重代表诉讼：原告是<span style={{fontWeight:900}}>母公司股东</span>，前置程序应书面请求<span style={{background:COLORS.gold+'40',padding:'2px 6px',fontWeight:900}}>全资子公司</span>的内部机关</div>
      </div>
      <div style={{position:'absolute',left:200,top:230,width:360,height:6,background:COLORS.ink,opacity:enter(70,94)}}/>
      <div style={{position:'absolute',right:200,top:230,width:360,height:6,background:COLORS.ink,opacity:enter(70,94)}}/>
      <div data-final-knowledge="shareholder-representative-action-scene-03-effect" style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:18,border:'5px solid '+COLORS.green,background:COLORS.paper,padding:'16px 26px',opacity:enter(96,124)}}>
        <Crown size={42} color={COLORS.green}/>
        <div style={{fontSize:24,fontWeight:800,lineHeight:1.5}}>效果：<span style={{background:COLORS.green+'26',padding:'2px 8px',fontWeight:900}}>胜诉利益归公司</span>、合理费用公司承担；侵权人可反诉股东，但<span style={{fontWeight:900,color:COLORS.orange}}>不可反诉公司</span>；调解协议须经公司股东会或董事会决议通过</div>
        <div data-stateful-terminal="shareholder-representative-action-award" style={{marginLeft:'auto',padding:'8px 18px',border:'3px solid '+COLORS.ink,background:COLORS.green,color:COLORS.paper,fontSize:21,fontWeight:900,opacity:enter(150,172)}}>赔偿归公司</div>
      </div>
      <div data-stateful-source="shareholder-representative-action-award" style={{position:'absolute',left:interpolate(awardProgress,[0,1],[210,1180],CLAMP),top:interpolate(awardProgress,[0,1],[262,600],CLAMP),padding:'8px 16px',border:'3px solid '+COLORS.green,background:COLORS.paper,color:COLORS.green,fontSize:21,fontWeight:900,opacity:awardProgress>0.88?0:1,zIndex:4}}>胜诉赔偿</div>
    </div>
  </Shell>;
};

export const ShareholderRepresentativeAction=()=> <AbsoluteFill>
  <TimelineSequence name="01-shareholder-representative-action-scene-01" start={SCENES['shareholder-representative-action-scene-01'].start} duration={SCENES['shareholder-representative-action-scene-01'].duration}><ShareholderRepresentativeAction01Scene/></TimelineSequence>
  <TimelineSequence name="02-shareholder-representative-action-scene-02" start={SCENES['shareholder-representative-action-scene-02'].start} duration={SCENES['shareholder-representative-action-scene-02'].duration}><ShareholderRepresentativeAction02Scene/></TimelineSequence>
  <TimelineSequence name="03-shareholder-representative-action-scene-03" start={SCENES['shareholder-representative-action-scene-03'].start} duration={SCENES['shareholder-representative-action-scene-03'].duration}><ShareholderRepresentativeAction03Scene/></TimelineSequence>
</AbsoluteFill>;
