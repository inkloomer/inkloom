import type {ReactNode} from 'react';
import {Landmark, Users, Building2, Handshake, FileX2, AlarmClock, KeyRound, Scale, Coins, Gavel} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#EDF0F2', ink:'#1E2A33', blue:'#245E8F', red:'#B23A30', gold:'#C9A23C', paper:'#F8FAFB'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient('+COLORS.blue+'14 1px, transparent 1px), linear-gradient(90deg, '+COLORS.blue+'14 1px, transparent 1px)',backgroundSize:'80px 80px',opacity:.5}}/>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.blue,color:COLORS.paper}}>{code}</div>
    <div style={{position:'absolute',left:190,right:76,top:46,fontSize:46,fontWeight:900,lineHeight:1.12,borderBottom:'5px solid '+COLORS.red,paddingBottom:12}}>{title}</div>
    <div style={{position:'absolute',left:76,right:76,top:150,bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

export const BankruptcyAdministrator01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="09.3" title="管理人由法院指定">
    <div data-layout="administrator-source-1" data-visual-anchor="role-pair" data-visual-grammar="court-appointment,candidate-pool" data-text-treatments="label-block,external-negation,soft-highlight" data-focal-rule="bankruptcy-administrator-scene-01-rule" data-focal-channels="contrast,connector,annotation" data-final-knowledge="bankruptcy-administrator-knowledge-1" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="bankruptcy-administrator-scene-01-court" style={{position:'absolute',left:24,top:0,width:840,padding:24,border:'5px solid '+COLORS.blue,background:COLORS.paper,opacity:enter(28,54)}}>
        <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:12}}>
          <Landmark size={44} color={COLORS.blue}/>
          <div style={{padding:'8px 18px',background:COLORS.ink,color:COLORS.paper,fontSize:28,fontWeight:900}}>受理时 · 法院指定</div>
        </div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.55}}>产生、更换、报酬和辞职均由<span style={{background:COLORS.blue+'26',padding:'2px 8px',fontWeight:900}}>法院决定</span>——债权人会议<span style={{fontWeight:900,color:COLORS.red}}>不能直接选择或聘任</span>，只能申请更换；经法院许可，管理人可聘用必要的工作人员</div>
      </div>
      <div data-final-knowledge="bankruptcy-administrator-scene-01-pool" style={{position:'absolute',right:24,top:0,width:840,padding:24,border:'5px solid '+COLORS.gold,background:COLORS.paper,opacity:enter(46,72)}}>
        <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:12}}>
          <Users size={44} color={COLORS.gold}/>
          <div style={{padding:'8px 18px',background:COLORS.ink,color:COLORS.paper,fontSize:28,fontWeight:900}}>三类人选</div>
        </div>
        <div style={{display:'grid',gap:10}}>
          <div style={{fontSize:23,fontWeight:800,lineHeight:1.5}}>① <span style={{fontWeight:900}}>清算组</span></div>
          <div style={{fontSize:23,fontWeight:800,lineHeight:1.5}}>② 律所、会计所等<span style={{fontWeight:900}}>中介机构</span></div>
          <div style={{fontSize:23,fontWeight:800,lineHeight:1.5}}>③ 具备相关专业知识并取得执业资格的<span style={{fontWeight:900}}>个人</span></div>
        </div>
      </div>
      <div style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.red,background:COLORS.paper,padding:'14px 24px',opacity:enter(74,102)}}>
        <div style={{width:36,height:36,border:'3px solid '+COLORS.red,position:'relative',flexShrink:0}}>
          <div style={{position:'absolute',left:14,top:4,width:4,height:22,background:COLORS.red,transform:'rotate(45deg)'}}/>
          <div style={{position:'absolute',left:14,top:4,width:4,height:22,background:COLORS.red,transform:'rotate(-45deg)'}}/>
        </div>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}>债权人会议不能直接选择或聘任管理人，<span style={{fontWeight:900,color:COLORS.red}}>只能申请更换</span>法院指定的管理人；聘用人员须经法院<span style={{fontWeight:900}}>许可</span></div>
      </div>
    </div>
  </Shell>;
};

export const BankruptcyAdministrator02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="09.3" title="双务合同的选择权">
    <div data-layout="contract-choice-2" data-visual-anchor="flow-path" data-visual-grammar="continue-or-rescind,deemed-rescission" data-text-treatments="thin-underline,stamp,soft-highlight" data-focal-rule="bankruptcy-administrator-scene-02-rule" data-focal-channels="connector,contrast,motion" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="bankruptcy-administrator-knowledge-2" style={{position:'absolute',left:0,right:0,top:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <Handshake size={42} color={COLORS.blue}/>
        <div style={{fontSize:28,fontWeight:900}}>双方均未履行完毕的合同——管理人有权决定解除或履行</div>
      </div>
      <div style={{position:'absolute',left:340,top:90,width:6,height:100,background:COLORS.ink,opacity:enter(24,48)}}/>
      <div style={{position:'absolute',left:0,top:120,width:340,height:6,background:COLORS.ink,opacity:enter(20,44)}}/>
      <div style={{position:'absolute',left:0,top:80,padding:'12px 22px',border:'4px solid '+COLORS.ink,background:COLORS.paper,fontSize:24,fontWeight:900,opacity:enter(16,42)}}>未履行完毕的双务合同</div>
      <div style={{position:'absolute',left:346,top:180,width:700,height:6,background:COLORS.ink,opacity:enter(30,54)}}/>
      <div data-final-knowledge="bankruptcy-administrator-scene-02-branch-0" style={{position:'absolute',left:360,top:210,width:820,padding:'20px 26px',border:'5px solid '+COLORS.green,background:COLORS.paper,opacity:enter(46,72)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8}}>
          <Handshake size={36} color={COLORS.green}/>
          <div style={{fontSize:26,fontWeight:900}}>通知履行</div>
        </div>
        <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>对方应当履行，但可要求<span style={{fontWeight:900}}>担保</span>；要求履行但拒绝担保的——<span style={{background:COLORS.red+'20',padding:'2px 6px',fontWeight:900}}>视为解除</span></div>
      </div>
      <div data-final-knowledge="bankruptcy-administrator-scene-02-branch-1" style={{position:'absolute',left:1210,top:210,width:500,padding:'20px 26px',border:'5px solid '+COLORS.red,background:COLORS.paper,opacity:enter(62,88)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8}}>
          <FileX2 size={36} color={COLORS.red}/>
          <div style={{fontSize:26,fontWeight:900}}>通知解除</div>
        </div>
        <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>通知即<span style={{fontWeight:900}}>自然解除</span>——对方因解除所受损失按破产债权申报</div>
      </div>
      <div data-final-knowledge="bankruptcy-administrator-scene-02-deemed" style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:18,border:'5px solid '+COLORS.gold,background:COLORS.paper,padding:'16px 26px',opacity:enter(86,114)}}>
        <AlarmClock size={40} color={COLORS.gold}/>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.5}}>视为解除：受理起<span style={{fontWeight:900}}>2个月</span>未通知 / 收到对方催告起<span style={{fontWeight:900}}>30日</span>未答复 / 要求履行但拒绝担保</div>
        <div style={{marginLeft:'auto',padding:'8px 18px',border:'3px solid '+COLORS.ink,background:COLORS.gold,color:COLORS.paper,fontSize:21,fontWeight:900,transform:'rotate(-2deg)'}}>选择权归管理人</div>
      </div>
    </div>
  </Shell>;
};

export const BankruptcyAdministrator03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="09.3" title="管理人的职权">
    <div data-layout="power-cabinet-3" data-visual-anchor="concept-icon" data-visual-grammar="takeover-power,litigation-representation" data-text-treatments="label-block,soft-highlight,stamp" data-focal-rule="bankruptcy-administrator-scene-03-rule" data-focal-channels="enclosure,icon,spatial" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="bankruptcy-administrator-knowledge-3" style={{position:'absolute',left:0,right:0,top:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#5C6B75',opacity:enter(12,36)}}>四舱职权</div>
      <div style={{position:'absolute',left:0,right:0,top:70,display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:18}}>
        <div data-final-knowledge="bankruptcy-administrator-scene-03-power-0" style={{display:'grid',gridTemplateColumns:'64px 1fr',gap:16,alignItems:'center',padding:'16px 22px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(28,54)}}>
          <div style={{width:64,height:64,border:'4px solid '+COLORS.ink,background:COLORS.blue,color:COLORS.paper,display:'grid',placeItems:'center'}}><KeyRound size={32} color={COLORS.paper}/></div>
          <div><div style={{fontSize:26,fontWeight:900,marginBottom:6}}>接管权</div><div style={{fontSize:21,fontWeight:700,lineHeight:1.4}}>接管债务人财产</div></div>
        </div>
        <div data-final-knowledge="bankruptcy-administrator-scene-03-power-1" style={{display:'grid',gridTemplateColumns:'64px 1fr',gap:16,alignItems:'center',padding:'16px 22px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(44,70)}}>
          <div style={{width:64,height:64,border:'4px solid '+COLORS.ink,background:COLORS.gold,color:COLORS.paper,display:'grid',placeItems:'center'}}><Coins size={32} color={COLORS.paper}/></div>
          <div><div style={{fontSize:26,fontWeight:900,marginBottom:6}}>事务执行权</div><div style={{fontSize:21,fontWeight:700,lineHeight:1.4}}>决定内部管理事务、日常开支；第一次债权人会议前决定继续或停止营业需法院许可</div></div>
        </div>
        <div data-final-knowledge="bankruptcy-administrator-scene-03-power-2" style={{display:'grid',gridTemplateColumns:'64px 1fr',gap:16,alignItems:'center',padding:'16px 22px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(60,86)}}>
          <div style={{width:64,height:64,border:'4px solid '+COLORS.ink,background:COLORS.red,color:COLORS.paper,display:'grid',placeItems:'center'}}><Handshake size={32} color={COLORS.paper}/></div>
          <div><div style={{fontSize:26,fontWeight:900,marginBottom:6}}>合同选择权</div><div style={{fontSize:21,fontWeight:700,lineHeight:1.4}}>决定继续履行或解除未履行完毕的双务合同</div></div>
        </div>
        <div data-final-knowledge="bankruptcy-administrator-scene-03-power-3" style={{display:'grid',gridTemplateColumns:'64px 1fr',gap:16,alignItems:'center',padding:'16px 22px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(76,102)}}>
          <div style={{width:64,height:64,border:'4px solid '+COLORS.ink,background:COLORS.green,color:COLORS.paper,display:'grid',placeItems:'center'}}><Scale size={32} color={COLORS.paper}/></div>
          <div><div style={{fontSize:26,fontWeight:900,marginBottom:6}}>代表参加诉讼仲裁</div><div style={{fontSize:21,fontWeight:700,lineHeight:1.4}}>代表债务人参加诉讼和仲裁</div></div>
        </div>
      </div>
      <div style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.gold,background:COLORS.paper,padding:'14px 24px',opacity:enter(96,122)}}>
        <Gavel size={38} color={COLORS.gold}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}>注意：决定继续或停止营业（第一次债权人会议召开前）<span style={{fontWeight:900}}>需法院许可</span>；聘用工作人员<span style={{fontWeight:900}}>须经法院许可</span></div>
      </div>
    </div>
  </Shell>;
};

export const BankruptcyAdministrator=()=> <AbsoluteFill>
  <TimelineSequence name="01-bankruptcy-administrator-scene-01" start={SCENES['bankruptcy-administrator-scene-01'].start} duration={SCENES['bankruptcy-administrator-scene-01'].duration}><BankruptcyAdministrator01Scene/></TimelineSequence>
  <TimelineSequence name="02-bankruptcy-administrator-scene-02" start={SCENES['bankruptcy-administrator-scene-02'].start} duration={SCENES['bankruptcy-administrator-scene-02'].duration}><BankruptcyAdministrator02Scene/></TimelineSequence>
  <TimelineSequence name="03-bankruptcy-administrator-scene-03" start={SCENES['bankruptcy-administrator-scene-03'].start} duration={SCENES['bankruptcy-administrator-scene-03'].duration}><BankruptcyAdministrator03Scene/></TimelineSequence>
</AbsoluteFill>;
