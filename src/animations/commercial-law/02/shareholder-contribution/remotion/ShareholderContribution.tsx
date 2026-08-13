import type {ReactNode} from 'react';
import {Banknote, Package, XCircle, Briefcase, FileText, Timer, Zap, Lock} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#EAF0EC', ink:'#1F2A36', green:'#0E7C66', orange:'#C2542B', gold:'#D8A129', paper:'#F6FAF7'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.green,color:COLORS.paper}}>{code}</div>
    <div style={{position:'absolute',left:190,right:76,top:46,fontSize:46,fontWeight:900,lineHeight:1.12,borderBottom:'5px solid '+COLORS.orange,paddingBottom:12}}>{title}</div>
    <div style={{position:'absolute',left:76,right:76,top:150,bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

export const ShareholderContribution01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="02.3" title="出资形式：货币 与 非货币">
    <div data-layout="contribution-docks-1" data-visual-anchor="comparison-axis" data-visual-grammar="money-dock,in-kind-dock" data-text-treatments="label-block,thin-underline,soft-highlight" data-focal-rule="shareholder-contribution-scene-01-rule" data-focal-channels="contrast,icon,spatial" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="shareholder-contribution-knowledge-1" style={{position:'absolute',left:0,right:0,top:0,textAlign:'center',fontSize:26,fontWeight:800,letterSpacing:6,color:'#5C6B64',opacity:enter(12,36)}}>两个泊位 · 要件不同</div>
      <div data-final-knowledge="shareholder-contribution-scene-01-dock-0" style={{position:'absolute',left:24,top:70,width:840,padding:26,border:'5px solid '+COLORS.green,background:COLORS.paper,opacity:enter(28,54),translate:slide(28,54,'-26px 0px')}}>
        <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:14}}>
          <Banknote size={46} color={COLORS.green}/>
          <div style={{padding:'8px 18px',background:COLORS.ink,color:COLORS.paper,fontSize:28,fontWeight:900}}>货币出资</div>
        </div>
        <div style={{fontSize:24,fontWeight:800,lineHeight:1.5,padding:'12px 16px',background:COLORS.green+'12',marginBottom:10}}>同时满足：<span style={{fontWeight:900}}>按时</span>＋<span style={{fontWeight:900}}>足额</span>＋存入公司账户</div>
        <div style={{fontSize:24,fontWeight:800,lineHeight:1.5,padding:'12px 16px',background:COLORS.green+'12'}}>以违法犯罪所得货币出资的，出资<span style={{background:COLORS.green+'30',padding:'2px 6px',fontWeight:900}}>有效</span>，股东可获得股权；追缴、处罚时拍卖或变卖其股权</div>
      </div>
      <div data-final-knowledge="shareholder-contribution-scene-01-dock-1" style={{position:'absolute',right:24,top:70,width:840,padding:26,border:'5px solid '+COLORS.orange,background:COLORS.paper,opacity:enter(46,72),translate:slide(46,72,'26px 0px')}}>
        <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:14}}>
          <Package size={46} color={COLORS.orange}/>
          <div style={{padding:'8px 18px',background:COLORS.ink,color:COLORS.paper,fontSize:28,fontWeight:900}}>非货币财产</div>
          <div style={{fontSize:24,fontWeight:900,color:COLORS.orange,borderBottom:'4px solid '+COLORS.orange,paddingBottom:2}}>可估价＋可转让</div>
        </div>
        <div style={{fontSize:24,fontWeight:800,lineHeight:1.5,padding:'12px 16px',background:COLORS.orange+'12',marginBottom:10}}>需过户登记的房屋等：<span style={{fontWeight:900}}>交付</span>＋<span style={{fontWeight:900}}>过户登记给公司</span>——自<span style={{background:COLORS.orange+'30',padding:'2px 6px',fontWeight:900}}>实际交付</span>时享有股东权利</div>
        <div style={{fontSize:24,fontWeight:800,lineHeight:1.5,padding:'12px 16px',background:COLORS.orange+'12'}}>以无权处分的财产出资：公司可<span style={{fontWeight:900}}>善意取得</span>（不知情＋合理对价＋动产已交付/不动产已过户；核心管理人员知情的，视为公司知情）</div>
      </div>
      <div style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:18,border:'4px solid '+COLORS.ink,background:COLORS.paper,padding:'14px 26px',opacity:enter(78,106)}}>
        <Briefcase size={38} color={COLORS.gold}/>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.45}}>股权出资（实质为股权转让）：已评估＋合法持有可转让＋无权利瑕疵或负担＋已履行转让手续；债权出资（实质为债权让与）：应通知债务人，出资后实现不能的风险<span style={{fontWeight:900}}>由公司承担</span>（另有约定除外）</div>
      </div>
    </div>
  </Shell>;
};

export const ShareholderContribution02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const BANS=['劳务','自然人姓名','信用','商誉','名誉','特许经营权'] as const;
  return <Shell code="02.3" title="禁止出资的六项">
    <div data-layout="banned-six-2" data-visual-anchor="typographic-sequence" data-visual-grammar="banned-registry,credit-debt-notes" data-text-treatments="stamp,external-negation,soft-highlight" data-focal-rule="shareholder-contribution-scene-02-rule" data-focal-channels="enclosure,motion,annotation" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="shareholder-contribution-knowledge-2" style={{position:'absolute',left:0,right:0,top:0,display:'flex',alignItems:'center',gap:16,opacity:enter(12,36)}}>
        <XCircle size={42} color={COLORS.orange}/>
        <div style={{fontSize:28,fontWeight:900}}>六项禁入——记忆口诀：<span style={{background:COLORS.gold+'4A',padding:'2px 12px'}}>劳自信商名特</span></div>
      </div>
      <div style={{position:'absolute',left:0,right:0,top:84,display:'grid',gridTemplateColumns:'repeat(6,minmax(0,1fr))',gap:16}}>
        <div data-final-knowledge="shareholder-contribution-scene-02-ban-0" style={{padding:'18px 8px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.orange,background:COLORS.paper,textAlign:'center',opacity:enter(30,56)}}>
          <div style={{width:44,height:44,border:'3px solid '+COLORS.orange,margin:'0 auto 14px',position:'relative'}}>
            <div style={{position:'absolute',left:19,top:7,width:4,height:24,background:COLORS.orange,transform:'rotate(45deg)'}}/>
            <div style={{position:'absolute',left:19,top:7,width:4,height:24,background:COLORS.orange,transform:'rotate(-45deg)'}}/>
          </div>
          <div style={{fontSize:27,fontWeight:900}}>劳务</div>
        </div>
        <div data-final-knowledge="shareholder-contribution-scene-02-ban-1" style={{padding:'18px 8px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.orange,background:COLORS.paper,textAlign:'center',opacity:enter(42,68)}}>
          <div style={{width:44,height:44,border:'3px solid '+COLORS.orange,margin:'0 auto 14px',position:'relative'}}>
            <div style={{position:'absolute',left:19,top:7,width:4,height:24,background:COLORS.orange,transform:'rotate(45deg)'}}/>
            <div style={{position:'absolute',left:19,top:7,width:4,height:24,background:COLORS.orange,transform:'rotate(-45deg)'}}/>
          </div>
          <div style={{fontSize:27,fontWeight:900}}>自然人姓名</div>
        </div>
        <div data-final-knowledge="shareholder-contribution-scene-02-ban-2" style={{padding:'18px 8px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.orange,background:COLORS.paper,textAlign:'center',opacity:enter(54,80)}}>
          <div style={{width:44,height:44,border:'3px solid '+COLORS.orange,margin:'0 auto 14px',position:'relative'}}>
            <div style={{position:'absolute',left:19,top:7,width:4,height:24,background:COLORS.orange,transform:'rotate(45deg)'}}/>
            <div style={{position:'absolute',left:19,top:7,width:4,height:24,background:COLORS.orange,transform:'rotate(-45deg)'}}/>
          </div>
          <div style={{fontSize:27,fontWeight:900}}>信用</div>
        </div>
        <div data-final-knowledge="shareholder-contribution-scene-02-ban-3" style={{padding:'18px 8px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.orange,background:COLORS.paper,textAlign:'center',opacity:enter(66,92)}}>
          <div style={{width:44,height:44,border:'3px solid '+COLORS.orange,margin:'0 auto 14px',position:'relative'}}>
            <div style={{position:'absolute',left:19,top:7,width:4,height:24,background:COLORS.orange,transform:'rotate(45deg)'}}/>
            <div style={{position:'absolute',left:19,top:7,width:4,height:24,background:COLORS.orange,transform:'rotate(-45deg)'}}/>
          </div>
          <div style={{fontSize:27,fontWeight:900}}>商誉</div>
        </div>
        <div data-final-knowledge="shareholder-contribution-scene-02-ban-4" style={{padding:'18px 8px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.orange,background:COLORS.paper,textAlign:'center',opacity:enter(78,104)}}>
          <div style={{width:44,height:44,border:'3px solid '+COLORS.orange,margin:'0 auto 14px',position:'relative'}}>
            <div style={{position:'absolute',left:19,top:7,width:4,height:24,background:COLORS.orange,transform:'rotate(45deg)'}}/>
            <div style={{position:'absolute',left:19,top:7,width:4,height:24,background:COLORS.orange,transform:'rotate(-45deg)'}}/>
          </div>
          <div style={{fontSize:27,fontWeight:900}}>名誉</div>
        </div>
        <div data-final-knowledge="shareholder-contribution-scene-02-ban-5" style={{padding:'18px 8px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.orange,background:COLORS.paper,textAlign:'center',opacity:enter(90,116)}}>
          <div style={{width:44,height:44,border:'3px solid '+COLORS.orange,margin:'0 auto 14px',position:'relative'}}>
            <div style={{position:'absolute',left:19,top:7,width:4,height:24,background:COLORS.orange,transform:'rotate(45deg)'}}/>
            <div style={{position:'absolute',left:19,top:7,width:4,height:24,background:COLORS.orange,transform:'rotate(-45deg)'}}/>
          </div>
          <div style={{fontSize:27,fontWeight:900}}>特许经营权</div>
        </div>
      </div>
      <div data-final-knowledge="shareholder-contribution-scene-02-equity" style={{position:'absolute',left:0,width:860,top:320,padding:'18px 24px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(116,142)}}>
        <div style={{fontSize:26,fontWeight:900,marginBottom:10}}>股权出资四要件</div>
        <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>已进行价值评估；合法持有并可依法转让；无权利瑕疵或权利负担；已履行股权转让手续</div>
      </div>
      <div data-final-knowledge="shareholder-contribution-scene-02-credit" style={{position:'absolute',right:0,width:860,top:320,padding:'18px 24px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(134,160)}}>
        <div style={{fontSize:26,fontWeight:900,marginBottom:10}}>债权出资（债权让与）</div>
        <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>无须征得债务人同意，但应通知；约定不得转让的债权——金钱债权不得对抗第三人，非金钱债权不得对抗善意第三人</div>
      </div>
      <div style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.orange,background:COLORS.paper,padding:'14px 24px',opacity:enter(150,176)}}>
        <div style={{padding:'6px 16px',border:'3px solid '+COLORS.orange,color:COLORS.orange,fontSize:21,fontWeight:900,transform:'rotate(-2deg)'}}>禁入</div>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.4}}>六项均不可作价出资——不能估价或不能转让的财产不得出资</div>
      </div>
    </div>
  </Shell>;
};

export const ShareholderContribution03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const clockProgress=interpolate(frame,[80,190],[0,1],CLAMP);
  return <Shell code="02.3" title="出资方式：认缴制 与 实缴制">
    <div data-layout="subscription-clock-3" data-visual-anchor="timeline-gate" data-visual-grammar="five-year-clock,acceleration-trigger" data-text-treatments="thin-underline,label-block,stamp" data-focal-rule="shareholder-contribution-scene-03-rule" data-focal-channels="connector,motion,enclosure" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="shareholder-contribution-knowledge-3" style={{position:'absolute',left:0,top:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <Timer size={44} color={COLORS.green}/>
        <div style={{fontSize:29,fontWeight:900}}>有限公司：限制认缴制</div>
      </div>
      <div data-final-knowledge="shareholder-contribution-scene-03-clock" style={{position:'absolute',left:0,top:76,width:860,padding:'20px 26px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(28,54)}}>
        <div style={{fontSize:26,fontWeight:900,marginBottom:10}}>按照章程，自公司成立之日起<span style={{background:COLORS.green+'30',padding:'2px 10px',color:COLORS.green}}>5年内</span>缴足</div>
        <div style={{position:'relative',height:26,background:COLORS.ink+'18',marginTop:8}}>
          <div style={{position:'absolute',left:0,top:0,height:26,width:interpolate(clockProgress,[0,1],[0,808],CLAMP),background:COLORS.green,opacity:enter(80,104)}}/>
          <div style={{position:'absolute',left:8,top:3,fontSize:18,fontWeight:900,color:COLORS.paper}}>成立</div>
          <div style={{position:'absolute',right:8,top:3,fontSize:18,fontWeight:900}}>5年</div>
        </div>
      </div>
      <div data-final-knowledge="shareholder-contribution-scene-03-interest" style={{position:'absolute',left:0,top:280,width:860,padding:'18px 26px',border:'4px solid '+COLORS.green,background:COLORS.paper,opacity:enter(46,72)}}>
        <div style={{fontSize:26,fontWeight:900,marginBottom:8}}>出资期限未届满的，股东享有<span style={{borderBottom:'4px solid '+COLORS.green,paddingBottom:2}}>出资期限利益</span></div>
        <div style={{fontSize:22,fontWeight:700,lineHeight:1.45}}>期限届满前，无须提前缴纳</div>
      </div>
      <div data-final-knowledge="shareholder-contribution-scene-03-accelerate" style={{position:'absolute',left:0,top:470,width:860,padding:'18px 26px',border:'5px solid '+COLORS.orange,background:COLORS.paper,opacity:enter(108,134)}}>
        <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:8}}>
          <Zap size={38} color={COLORS.orange}/>
          <div style={{fontSize:27,fontWeight:900,color:COLORS.orange}}>加速到期</div>
          <div data-stateful-terminal="shareholder-contribution-acceleration" style={{marginLeft:'auto',padding:'8px 18px',border:'3px solid '+COLORS.ink,background:COLORS.orange,color:COLORS.paper,fontSize:21,fontWeight:900,opacity:enter(150,172)}}>提前缴纳</div>
        </div>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.5}}>公司不能清偿到期债务时，公司或已到期债权的债权人有权要求未届出资期限的股东<span style={{background:COLORS.orange+'2C',padding:'2px 6px',fontWeight:900}}>提前缴纳出资</span></div>
      </div>
      <div data-stateful-source="shareholder-contribution-acceleration" style={{position:'absolute',left:96,top:interpolate(clockProgress,[0,1],[120,486],CLAMP),padding:'8px 18px',border:'4px solid '+COLORS.orange,background:COLORS.paper,color:COLORS.orange,fontSize:22,fontWeight:900,opacity:clockProgress>0.9?0:1,zIndex:4}}>到期</div>
      <div data-final-knowledge="shareholder-contribution-scene-03-execution" style={{position:'absolute',right:0,top:76,width:850,padding:'18px 26px',border:'3px dashed '+COLORS.orange,background:COLORS.paper,opacity:enter(64,90)}}>
        <div style={{fontSize:25,fontWeight:900,marginBottom:8,color:COLORS.orange}}>执行程序限制</div>
        <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>针对公司的执行程序中，<span style={{fontWeight:900}}>不能直接追加</span>未届出资期限的股东为被执行人</div>
      </div>
      <div data-final-knowledge="shareholder-contribution-scene-03-paidup" style={{position:'absolute',right:0,top:300,width:850,padding:'18px 26px',border:'4px solid '+COLORS.ink,background:COLORS.gold+'2A',opacity:enter(80,106)}}>
        <div style={{fontSize:25,fontWeight:900,marginBottom:8,color:'#7A5B12'}}>股份公司：实缴资本制</div>
        <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>注册资本应当在<span style={{fontWeight:900}}>设立时一次性缴足</span></div>
      </div>
    </div>
  </Shell>;
};

export const ShareholderContribution=()=> <AbsoluteFill>
  <TimelineSequence name="01-shareholder-contribution-scene-01" start={SCENES['shareholder-contribution-scene-01'].start} duration={SCENES['shareholder-contribution-scene-01'].duration}><ShareholderContribution01Scene/></TimelineSequence>
  <TimelineSequence name="02-shareholder-contribution-scene-02" start={SCENES['shareholder-contribution-scene-02'].start} duration={SCENES['shareholder-contribution-scene-02'].duration}><ShareholderContribution02Scene/></TimelineSequence>
  <TimelineSequence name="03-shareholder-contribution-scene-03" start={SCENES['shareholder-contribution-scene-03'].start} duration={SCENES['shareholder-contribution-scene-03'].duration}><ShareholderContribution03Scene/></TimelineSequence>
</AbsoluteFill>;
