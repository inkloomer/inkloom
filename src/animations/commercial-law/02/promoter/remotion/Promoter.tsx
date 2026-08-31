import type {ReactNode} from 'react';
import {Building2, UserRound, ShieldAlert, Split, FileWarning, Banknote, Gavel, CircleAlert, TrendingDown, ScrollText, Mail, RefreshCw} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#F1EDE4', ink:'#23272E', steel:'#3A5C78', copper:'#B4532A', brass:'#C08A2D', paper:'#FBF8F1'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Pin=({color}:{readonly color:string})=>(
  <div style={{width:34,height:34,border:'4px solid '+COLORS.ink,background:color,position:'relative',flexShrink:0}}>
    <div style={{position:'absolute',left:9,top:9,width:12,height:12,border:'3px solid '+COLORS.ink,background:COLORS.background}}/>
  </div>
);

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:0,top:0,right:0,height:12,display:'flex'}}>
      {Array.from({length:24}).map((_,i)=><div key={i} style={{flex:1,background:i%2===0?COLORS.brass:COLORS.ink}}/>)}
    </div>
    <div style={{position:'absolute',left:76,top:36,display:'flex',alignItems:'center',gap:12}}>
      <Pin color={COLORS.brass}/>
      <div style={{padding:'12px 22px',background:COLORS.ink,color:COLORS.brass,fontSize:24,fontWeight:900,letterSpacing:4,border:'3px solid '+COLORS.copper}}>{code}</div>
    </div>
    <div style={{position:'absolute',left:76,right:76,top:122,fontSize:48,fontWeight:900,lineHeight:1.08,borderBottom:'6px solid '+COLORS.copper,paddingBottom:10}}>{title}</div>
    <div style={{position:'absolute',left:76,right:76,top:210,bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

const Spine=({top,height,color}:{readonly top:number;readonly height:number;readonly color:string})=>(
  <div style={{position:'absolute',left:15,top,width:4,height,background:color}}/>
);

export const Promoter01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const Link=({icon,title,color,children,delay}:{readonly icon:ReactNode;readonly title:string;readonly color:string;readonly children:ReactNode;readonly delay:number})=>(
    <div style={{opacity:enter(delay,delay+26)}}>
      <div style={{display:'grid',gridTemplateColumns:'40px 6px 1fr',gap:0,alignItems:'stretch'}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',paddingTop:10}}><Pin color={color}/></div>
        <div style={{width:6,background:COLORS.ink}}/>
        <div style={{border:'4px solid '+COLORS.ink,background:COLORS.paper}}>
          <div style={{display:'flex',alignItems:'center',gap:12,padding:'12px 20px',background:color,color:COLORS.paper}}>
            {icon}
            <div style={{fontSize:27,fontWeight:900}}>{title}</div>
          </div>
          <div style={{padding:'14px 22px',fontSize:23,fontWeight:800,lineHeight:1.5}}>{children}</div>
        </div>
      </div>
    </div>
  );
  return <Shell code="02.2" title="设立中从事民事活动的责任">
    <div data-layout="duty-chain-triple-1" data-visual-anchor="role-pair" data-visual-grammar="chain-link-duty,third-party-choice" data-text-treatments="label-block,thin-underline,soft-highlight" data-focal-rule="promoter-scene-01-rule" data-focal-channels="contrast,locator,icon" style={{position:'absolute',inset:0}}>
      <Building2 size={210} color={COLORS.steel} strokeWidth={1.2} style={{position:'absolute',left:'50%',top:500,translate:'-50% 0',opacity:0.06,pointerEvents:'none'}}/>
      <div data-final-knowledge="promoter-knowledge-1" style={{position:'absolute',left:0,right:0,top:0,fontSize:24,fontWeight:900,letterSpacing:6,color:COLORS.copper,opacity:enter(12,36)}}>三档责任 · 连环扣</div>
      <div style={{position:'absolute',left:0,right:0,top:52,display:'grid',gap:12}}>
        <div data-final-knowledge="promoter-scene-01-duty-0">
          <Link icon={<Building2 size={38} color={COLORS.paper}/>} title="以设立中公司名义" color={COLORS.steel} delay={28}>
            法律后果由<span style={{fontWeight:900,color:COLORS.steel}}>公司承受</span>；公司未成立的，由<span style={{background:COLORS.brass+'42',padding:'2px 6px',fontWeight:900}}>发起人承受</span>——发起人2人以上的，享有连带债权、承担连带债务
          </Link>
        </div>
        <div data-final-knowledge="promoter-scene-01-duty-1">
          <Link icon={<UserRound size={38} color={COLORS.paper}/>} title="以自己名义" color={COLORS.copper} delay={48}>
            <div>第三人有权<span style={{fontWeight:900,color:COLORS.copper}}>选择</span>请求公司或发起人承担责任</div>
            <div style={{display:'flex',gap:14,marginTop:10}}>
              <div style={{padding:'6px 16px',border:'3px solid '+COLORS.steel,color:COLORS.steel,fontWeight:900,background:COLORS.paper,opacity:enter(120,144)}}>→ 公司</div>
              <div style={{padding:'6px 16px',border:'3px solid '+COLORS.brass,color:'#7A5B12',fontWeight:900,background:COLORS.paper,opacity:enter(132,156)}}>→ 发起人</div>
              <div style={{fontSize:21,fontWeight:800,color:'#7A6F5C',alignSelf:'center',opacity:enter(144,168)}}>择一主张</div>
            </div>
          </Link>
        </div>
        <div data-final-knowledge="promoter-scene-01-duty-2">
          <Link icon={<ShieldAlert size={38} color={COLORS.paper}/>} title="履行设立职责致人损害" color={COLORS.ink} delay={68}>
            公司或无过错的股东承担赔偿后，可向<span style={{borderBottom:'4px solid '+COLORS.copper,paddingBottom:2,fontWeight:900}}>有过错的发起人追偿</span>
          </Link>
        </div>
      </div>
      <div style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:14,border:'3px dashed '+COLORS.brass,background:COLORS.paper,padding:'12px 22px',opacity:enter(96,122)}}>
        <Split size={34} color={COLORS.brass}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.4}}>发起人协议类似合伙协议，只约束发起人，<span style={{fontWeight:900}}>不约束公司和债权人</span>；股东＝发起人＋因增资、受让股权、继承等新加入的投资人</div>
      </div>
    </div>
  </Shell>;
};

export const Promoter02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="02.2" title="出资瑕疵 与 抽逃出资">
    <div data-layout="flaw-dual-chain-2" data-visual-anchor="comparison-axis" data-visual-grammar="flaw-vs-withdrawal-chain,creditor-supplement" data-text-treatments="soft-highlight,stamp,external-negation" data-focal-rule="promoter-scene-02-rule" data-focal-channels="contrast,enclosure,annotation" style={{position:'absolute',inset:0}}>
      <Banknote size={230} color={COLORS.steel} strokeWidth={1.2} style={{position:'absolute',left:'50%',top:470,translate:'-50% 0',opacity:0.06,pointerEvents:'none'}}/>
      <div data-final-knowledge="promoter-knowledge-2" style={{position:'absolute',left:0,right:0,top:0,textAlign:'center',fontSize:24,fontWeight:900,letterSpacing:6,color:COLORS.steel,opacity:enter(12,36)}}>表现 → 对公司 → 对债权人</div>
      <div data-final-knowledge="promoter-scene-02-lane-0" style={{position:'absolute',left:24,top:56,width:856,border:'5px solid '+COLORS.steel,background:COLORS.paper,opacity:enter(28,54),translate:slide(28,54,'-24px 0px')}}>
        <div style={{display:'flex',alignItems:'center',gap:12,padding:'13px 20px',background:COLORS.steel,color:COLORS.paper}}>
          <FileWarning size={36} color={COLORS.paper}/>
          <div style={{fontSize:28,fontWeight:900}}>出资瑕疵</div>
        </div>
        <div style={{padding:'14px 22px',display:'grid',gap:9}}>
          <div style={{display:'flex',alignItems:'flex-start',gap:10,fontSize:22,fontWeight:800,lineHeight:1.4,padding:'9px 14px',background:COLORS.steel+'0E'}}><CircleAlert size={26} color={COLORS.steel} style={{flexShrink:0,marginTop:2}}/><span>表现：货币未按期足额缴至公司账户；非货币未按期转让权利，或实际价值<span style={{fontWeight:900}}>显著低于</span>认缴出资额</span></div>
          <div style={{fontSize:22,fontWeight:800,lineHeight:1.4,padding:'9px 14px',background:COLORS.steel+'0E'}}>对公司：<span style={{fontWeight:900}}>补足差额</span>＋赔偿损失（设立时瑕疵的，其他发起人连带）</div>
          <div style={{fontSize:22,fontWeight:800,lineHeight:1.4,padding:'9px 14px',background:COLORS.steel+'0E'}}>对债权人：<span style={{background:COLORS.steel+'30',padding:'2px 6px',fontWeight:900}}>未出资本息范围内</span>，对公司不能清偿部分承担补充赔偿责任</div>
        </div>
      </div>
      <div data-final-knowledge="promoter-scene-02-lane-1" style={{position:'absolute',right:24,top:56,width:856,border:'5px solid '+COLORS.copper,background:COLORS.paper,opacity:enter(46,72),translate:slide(46,72,'24px 0px')}}>
        <div style={{display:'flex',alignItems:'center',gap:12,padding:'13px 20px',background:COLORS.copper,color:COLORS.paper}}>
          <Banknote size={36} color={COLORS.paper}/>
          <div style={{fontSize:28,fontWeight:900}}>抽逃出资</div>
        </div>
        <div style={{padding:'14px 22px',display:'grid',gap:9}}>
          <div style={{display:'flex',alignItems:'flex-start',gap:10,fontSize:22,fontWeight:800,lineHeight:1.4,padding:'9px 14px',background:COLORS.copper+'0E'}}><CircleAlert size={26} color={COLORS.copper} style={{flexShrink:0,marginTop:2}}/><span>表现：虚增利润分配、虚构债权债务关系、利用关联交易转出资金（假利假债乱交易）</span></div>
          <div style={{fontSize:22,fontWeight:800,lineHeight:1.4,padding:'9px 14px',background:COLORS.copper+'0E'}}>对公司：<span style={{fontWeight:900}}>返还出资</span>＋赔偿损失（负有责任的董监高连带）</div>
          <div style={{fontSize:22,fontWeight:800,lineHeight:1.4,padding:'9px 14px',background:COLORS.copper+'0E'}}>对债权人：<span style={{background:COLORS.copper+'20',padding:'2px 6px',fontWeight:900}}>抽逃出资本息范围内</span>补充赔偿，协助者连带</div>
        </div>
      </div>
      <div data-final-knowledge="promoter-scene-02-devalue" style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:14,border:'3px dashed '+COLORS.brass,background:COLORS.paper,padding:'14px 22px',opacity:enter(84,112)}}>
        <TrendingDown size={34} color={COLORS.brass}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.4}}>非货币财产出资后因<span style={{fontWeight:900}}>市场变化</span>等客观因素贬值的——<span style={{color:'#8A6B1C',fontWeight:900}}>不属于出资瑕疵</span>，不承担补足责任</div>
        <div style={{marginLeft:'auto',padding:'7px 16px',border:'3px solid '+COLORS.ink,background:COLORS.brass,color:COLORS.paper,fontSize:21,fontWeight:900}}>贬值不担责</div>
      </div>
    </div>
  </Shell>;
};

export const Promoter03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const noticeProgress=interpolate(frame,[150,240],[0,1],CLAMP);
  const Gate=({n,title,caption,color,delay,icon}:{readonly n:string;readonly title:string;readonly caption:ReactNode;readonly color:string;readonly delay:number;readonly icon:ReactNode})=>(
    <div style={{opacity:enter(delay,delay+26),translate:interpolate(frame,[delay,delay+26],['0px 22px','0px 0px'],CLAMP)}}>
      <div style={{display:'grid',gridTemplateColumns:'60px 6px 1fr',gap:0,alignItems:'stretch'}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',paddingTop:8}}><Pin color={color}/></div>
        <div style={{width:6,background:COLORS.ink}}/>
        <div style={{border:'4px solid '+COLORS.ink,background:COLORS.paper,display:'grid',gridTemplateColumns:'64px 1fr',gap:14,alignItems:'center',padding:'12px 20px'}}>
          <div style={{width:64,height:64,border:'4px solid '+COLORS.ink,background:color,color:COLORS.paper,display:'grid',placeItems:'center',fontSize:28,fontWeight:900}}>{n}</div>
          <div>
            <div style={{display:'flex',alignItems:'center',gap:10,fontSize:25,fontWeight:900,marginBottom:5}}>{icon}{title}</div>
            <div style={{fontSize:22,fontWeight:700,color:'#5A5246',lineHeight:1.35}}>{caption}</div>
          </div>
        </div>
      </div>
    </div>
  );
  return <Shell code="02.2" title="股东失权流程">
    <div data-layout="disqualification-chain-3" data-visual-anchor="timeline-gate" data-visual-grammar="cure-window-gate,link-break" data-text-treatments="label-block,soft-highlight,stamp" data-focal-rule="promoter-scene-03-rule" data-focal-channels="connector,motion,locator" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="promoter-knowledge-3" style={{position:'absolute',left:0,right:0,top:0,fontSize:24,fontWeight:900,letterSpacing:6,color:COLORS.copper,opacity:enter(12,36)}}>董事会主导 · 仅丧失未缴出资的股权</div>
      <div style={{position:'absolute',left:0,right:0,top:56,display:'grid',gap:13}}>
        <div data-final-knowledge="promoter-scene-03-gate-0"><Gate n="1" title="董事会核查 · 书面催缴" icon={<ScrollText size={28} color={COLORS.steel}/>} caption={<span>发现股东未按期足额缴纳出资，公司发出书面催缴书——宽限期自发出之日起<span style={{fontWeight:900,color:COLORS.steel,background:COLORS.steel+'16',padding:'1px 6px'}}>不少于60日</span>；未及时核查、催缴给公司造成损失的，<span style={{fontWeight:900,color:COLORS.copper}}>负有责任的董事承担赔偿责任</span></span>} color={COLORS.steel} delay={28}/></div>
        <div data-final-knowledge="promoter-scene-03-gate-1"><Gate n="2" title="董事会决议 · 失权通知" icon={<Mail size={28} color={COLORS.copper}/>} caption={<span>宽限期届满仍未履行，经董事会决议发出书面失权通知——自通知发出之日起，<span style={{fontWeight:900,color:COLORS.copper,background:COLORS.copper+'14',padding:'1px 6px'}}>丧失其未缴纳出资的股权</span></span>} color={COLORS.copper} delay={52}/></div>
        <div data-final-knowledge="promoter-scene-03-gate-2"><Gate n="3" title="库存股处理" icon={<RefreshCw size={28} color={COLORS.brass}/>} caption={<span>丧失的股权依法转让，或相应减少注册资本并注销；<span style={{fontWeight:900,color:'#8A6B1C',background:COLORS.brass+'22',padding:'1px 6px'}}>6个月内</span>未转让或注销的，由公司其他股东<span style={{fontWeight:900}}>按出资比例补足</span></span>} color={COLORS.brass} delay={76}/></div>
      </div>
      <UserRound size={220} color={COLORS.copper} strokeWidth={1.2} style={{position:'absolute',left:'50%',top:520,translate:'-50% 0',opacity:0.06,pointerEvents:'none'}}/>
      <div data-stateful-source="promoter-disqualification-notice" style={{position:'absolute',left:1040,top:interpolate(noticeProgress,[0,1],[150,330],CLAMP),padding:'9px 20px',border:'4px solid '+COLORS.copper,background:COLORS.paper,color:COLORS.copper,fontSize:23,fontWeight:900,opacity:noticeProgress>0.92?0:1,zIndex:4}}>失权通知</div>
      <div data-final-knowledge="promoter-scene-03-suit" style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'4px solid '+COLORS.ink,background:COLORS.paper,padding:'13px 22px',opacity:enter(104,132)}}>
        <Gavel size={36} color={COLORS.copper}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.4}}>救济：股东对失权有异议的，自<span style={{fontWeight:900,color:COLORS.copper}}>接到失权通知之日起30日内</span>向法院起诉</div>
        <div data-stateful-terminal="promoter-disqualification-notice" style={{marginLeft:'auto',padding:'7px 16px',border:'3px solid '+COLORS.ink,background:COLORS.copper,color:COLORS.paper,fontSize:21,fontWeight:900,opacity:enter(136,158)}}>发出日失权生效</div>
      </div>
    </div>
  </Shell>;
};

export const Promoter=()=> <AbsoluteFill>
  <TimelineSequence name="01-promoter-scene-01" start={SCENES['promoter-scene-01'].start} duration={SCENES['promoter-scene-01'].duration}><Promoter01Scene/></TimelineSequence>
  <TimelineSequence name="02-promoter-scene-02" start={SCENES['promoter-scene-02'].start} duration={SCENES['promoter-scene-02'].duration}><Promoter02Scene/></TimelineSequence>
  <TimelineSequence name="03-promoter-scene-03" start={SCENES['promoter-scene-03'].start} duration={SCENES['promoter-scene-03'].duration}><Promoter03Scene/></TimelineSequence>
</AbsoluteFill>;