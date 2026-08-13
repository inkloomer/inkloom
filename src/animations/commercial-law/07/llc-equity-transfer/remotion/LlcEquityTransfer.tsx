import type {ReactNode} from 'react';
import {ArrowRightLeft, Users, BellRing, Undo2, ScrollText, Gavel, Handshake, Crown} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const COLORS={background:'#F4EFE3', ink:'#25242B', red:'#B23A30', green:'#2E6D4F', gold:'#C08A2D', paper:'#FBF7EC'} as const;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Shell=({code,title,children}:{readonly code:string;readonly title:string;readonly children:ReactNode})=>(
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{background:COLORS.background, color:COLORS.ink, overflow:'hidden'}}>
    <div style={{position:'absolute',left:76,top:40,padding:'14px 22px',fontSize:24,fontWeight:900,letterSpacing:4,background:COLORS.red,color:COLORS.paper}}>{code}</div>
    <div style={{position:'absolute',left:190,right:76,top:46,fontSize:46,fontWeight:900,lineHeight:1.12,borderBottom:'5px solid '+COLORS.green,paddingBottom:12}}>{title}</div>
    <div style={{position:'absolute',left:76,right:76,top:150,bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

export const LlcEquityTransfer01Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  const slide=(a:number,b:number,from:string)=>interpolate(frame,[a,b],[from,'0px 0px'],CLAMP);
  return <Shell code="07.1" title="对内 与 对外转让">
    <div data-layout="transfer-inner-outer-1" data-visual-anchor="comparison-axis" data-visual-grammar="inner-free-stall,outer-notice-stall" data-text-treatments="label-block,thin-underline,soft-highlight" data-focal-rule="llc-equity-transfer-scene-01-rule" data-focal-channels="contrast,spatial,icon" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="llc-equity-transfer-knowledge-1" style={{position:'absolute',left:0,right:0,top:0,textAlign:'center',fontSize:26,fontWeight:900,letterSpacing:4,color:'#6E6757',opacity:enter(12,36)}}>章程规定 优先于 自由转让</div>
      <div data-final-knowledge="llc-equity-transfer-scene-01-inner" style={{position:'absolute',left:24,top:70,width:840,padding:26,border:'5px solid '+COLORS.green,background:COLORS.paper,opacity:enter(28,54),translate:slide(28,54,'-26px 0px')}}>
        <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:14}}>
          <ArrowRightLeft size={46} color={COLORS.green}/>
          <div style={{padding:'8px 18px',background:COLORS.ink,color:COLORS.paper,fontSize:28,fontWeight:900}}>对内转让</div>
        </div>
        <div style={{fontSize:24,fontWeight:800,lineHeight:1.55,padding:'12px 16px',background:COLORS.green+'12'}}>章程规定优先，其余<span style={{background:COLORS.green+'28',padding:'2px 8px',fontWeight:900}}>自由转让</span>——无比例、程序限制，<span style={{fontWeight:900}}>无优先购买权</span></div>
      </div>
      <div data-final-knowledge="llc-equity-transfer-scene-01-outer" style={{position:'absolute',right:24,top:70,width:840,padding:26,border:'5px solid '+COLORS.gold,background:COLORS.paper,opacity:enter(46,72),translate:slide(46,72,'26px 0px')}}>
        <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:14}}>
          <BellRing size={46} color={COLORS.gold}/>
          <div style={{padding:'8px 18px',background:COLORS.ink,color:COLORS.paper,fontSize:28,fontWeight:900}}>对外转让</div>
        </div>
        <div style={{fontSize:24,fontWeight:800,lineHeight:1.55,padding:'12px 16px',background:COLORS.gold+'16'}}>章程未规定的：<span style={{fontWeight:900}}>书面通知</span>其他股东转让条件，<span style={{background:COLORS.gold+'40',padding:'2px 8px',fontWeight:900}}>30日内</span>其他股东可主张优先购买权；转让前可以反悔</div>
      </div>
      <div data-final-knowledge="llc-equity-transfer-scene-01-charter" style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:18,border:'4px solid '+COLORS.red,background:COLORS.paper,padding:'16px 26px',opacity:enter(74,102)}}>
        <ScrollText size={40} color={COLORS.red}/>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.5}}>章程<span style={{fontWeight:900}}>可限制但不可禁止</span>股权转让（规定须全体董事一致同意的，变相禁止→<span style={{fontWeight:900,color:COLORS.red}}>无效</span>）；修改章程限制转让的，除2/3以上表决权通过外，还须<span style={{background:COLORS.red+'20',padding:'2px 6px',fontWeight:900}}>被限制者同意</span>，否则决议无效</div>
      </div>
    </div>
  </Shell>;
};

export const LlcEquityTransfer02Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="07.1" title="侵害优先购买权之后">
    <div data-layout="preemption-branches-2" data-visual-anchor="flow-path" data-visual-grammar="equal-terms-test,buyer-renounce-branch" data-text-treatments="soft-highlight,stamp,external-negation" data-focal-rule="llc-equity-transfer-scene-02-rule" data-focal-channels="connector,contrast,motion" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="llc-equity-transfer-knowledge-2" style={{position:'absolute',left:0,top:0,display:'flex',alignItems:'center',gap:14,opacity:enter(12,36)}}>
        <Users size={42} color={COLORS.red}/>
        <div style={{fontSize:27,fontWeight:900}}>未通知 / 谎报条件 / 非同等条件——乙的优先购买权被侵害</div>
      </div>
      <div data-final-knowledge="llc-equity-transfer-scene-02-fork" style={{position:'absolute',left:0,top:86,width:560,padding:'18px 24px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(28,54)}}>
        <div style={{fontSize:25,fontWeight:900,marginBottom:8}}>同等条件</div>
        <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>综合转让<span style={{fontWeight:900}}>数量、价格、支付方式、付款期限</span>等</div>
      </div>
      <div data-final-knowledge="llc-equity-transfer-scene-02-proportion" style={{position:'absolute',left:600,top:86,width:560,padding:'18px 24px',border:'4px solid '+COLORS.ink,background:COLORS.paper,opacity:enter(44,70)}}>
        <div style={{fontSize:25,fontWeight:900,marginBottom:8}}>两人以上均主张</div>
        <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>先<span style={{fontWeight:900}}>协商</span>，协商不成的按<span style={{background:COLORS.green+'28',padding:'2px 6px',fontWeight:900}}>转让时各自的出资比例</span>购买</div>
      </div>
      <div data-final-knowledge="llc-equity-transfer-scene-02-regret" style={{position:'absolute',left:0,top:290,width:840,padding:'18px 24px',border:'5px solid '+COLORS.gold,background:COLORS.paper,opacity:enter(60,86)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8}}>
          <Undo2 size={36} color={COLORS.gold}/>
          <div style={{fontSize:25,fontWeight:900}}>甲反悔</div>
        </div>
        <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>乙买不到股权，但可请求甲<span style={{fontWeight:900}}>赔偿</span>；乙可重新主张优先购买权——自知道或应当知道同等条件之日起<span style={{fontWeight:900}}>30日内</span>＋自股权变更登记起<span style={{fontWeight:900}}>1年内</span></div>
      </div>
      <div data-final-knowledge="llc-equity-transfer-scene-02-renounce" style={{position:'absolute',right:0,top:290,width:840,padding:'18px 24px',border:'5px dashed '+COLORS.red,background:COLORS.paper,opacity:enter(76,102)}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8}}>
          <Handshake size={36} color={COLORS.red}/>
          <div style={{fontSize:25,fontWeight:900}}>乙买 / 乙不买</div>
        </div>
        <div style={{fontSize:22,fontWeight:700,lineHeight:1.55}}>乙买：丙需把股权转让给乙，丙可请求甲承担<span style={{fontWeight:900}}>违约责任</span></div>
        <div style={{fontSize:22,fontWeight:700,lineHeight:1.55}}>乙不买：仅主张转让无效的，法院不保护——<span style={{background:COLORS.red+'20',padding:'2px 6px',fontWeight:900}}>丙可以取得股权</span>（不买不保护）；非因自身原因无法行使的，可请求甲赔偿</div>
      </div>
      <div style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:16,border:'3px dashed '+COLORS.gold,background:COLORS.paper,padding:'13px 22px',opacity:enter(100,126)}}>
        <Gavel size={36} color={COLORS.gold}/>
        <div style={{fontSize:22,fontWeight:800,lineHeight:1.45}}>股权转让后：股东应书面通知公司变更名册、办理工商变更登记；公司拒绝或合理期间未答复的，转让人、受让人可向法院起诉要求办理</div>
      </div>
    </div>
  </Shell>;
};

export const LlcEquityTransfer03Scene=()=>{
  const frame=useCurrentFrame();
  const enter=(a:number,b:number)=>interpolate(frame,[a,b],[0,1],CLAMP);
  return <Shell code="07.1" title="特殊转让与异议回购">
    <div data-layout="transfer-specials-3" data-visual-anchor="role-pair" data-visual-grammar="special-transfer-cards,dissent-repurchase-gate" data-text-treatments="label-block,stamp,thin-underline" data-focal-rule="llc-equity-transfer-scene-03-rule" data-focal-channels="contrast,annotation,locator" style={{position:'absolute',inset:0}}>
      <div data-final-knowledge="llc-equity-transfer-knowledge-3" style={{position:'absolute',left:0,right:0,top:0,fontSize:26,fontWeight:900,letterSpacing:4,color:'#6E6757',opacity:enter(12,36)}}>三种特殊情形</div>
      <div style={{position:'absolute',left:0,right:0,top:64,display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:20}}>
        <div data-final-knowledge="llc-equity-transfer-scene-03-special-0" style={{padding:'18px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.red,background:COLORS.paper,minHeight:230,opacity:enter(28,54)}}>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:10}}>
            <Gavel size={34} color={COLORS.red}/>
            <div style={{fontSize:25,fontWeight:900}}>股权强制执行</div>
          </div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>法院通知公司＋全体股东；其他股东有优先购买权，通知满<span style={{fontWeight:900}}>20日</span>不行使的，视为放弃</div>
        </div>
        <div data-final-knowledge="llc-equity-transfer-scene-03-special-1" style={{padding:'18px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.green,background:COLORS.paper,minHeight:230,opacity:enter(44,70)}}>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:10}}>
            <Crown size={34} color={COLORS.green}/>
            <div style={{fontSize:25,fontWeight:900}}>股东资格继承</div>
          </div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>股东死亡后合法继承人可继承股东资格，章程另有规定除外；其他股东<span style={{fontWeight:900}}>无优先购买权</span>（章程或全体股东另有约定的除外）</div>
        </div>
        <div data-final-knowledge="llc-equity-transfer-scene-03-special-2" style={{padding:'18px 24px',border:'4px solid '+COLORS.ink,borderTop:'12px solid '+COLORS.gold,background:COLORS.paper,minHeight:230,opacity:enter(60,86)}}>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:10}}>
            <Handshake size={34} color={COLORS.gold}/>
            <div style={{fontSize:25,fontWeight:900}}>股权让与担保</div>
          </div>
          <div style={{fontSize:22,fontWeight:700,lineHeight:1.5}}>转让至债权人名下的担保合同<span style={{fontWeight:900}}>有效</span>，但"到期不还钱股权归债权人"约定<span style={{fontWeight:900,color:COLORS.red}}>无效</span>；只产生担保效力，其他股东无权主张优先购买权，债权人不负出资责任</div>
        </div>
      </div>
      <div data-final-knowledge="llc-equity-transfer-scene-03-repurchase" style={{position:'absolute',left:0,right:0,bottom:0,display:'flex',alignItems:'center',gap:18,border:'5px solid '+COLORS.green,background:COLORS.paper,padding:'16px 26px',opacity:enter(92,120)}}>
        <Undo2 size={40} color={COLORS.green}/>
        <div style={{fontSize:23,fontWeight:800,lineHeight:1.5}}>异议股东回购（对决议投<span style={{fontWeight:900}}>反对票</span>）：①连续五年不分红且五年连续盈利 ②合并、分立、转让主要财产 ③期满修改章程使公司存续——先协商<span style={{fontWeight:900}}>60日</span>，不成再起诉<span style={{fontWeight:900}}>90日</span>；受压迫股东回购限于有限公司；收购的股权应在<span style={{background:COLORS.green+'26',padding:'2px 6px',fontWeight:900}}>6个月内</span>转让或注销</div>
      </div>
    </div>
  </Shell>;
};

export const LlcEquityTransfer=()=> <AbsoluteFill>
  <TimelineSequence name="01-llc-equity-transfer-scene-01" start={SCENES['llc-equity-transfer-scene-01'].start} duration={SCENES['llc-equity-transfer-scene-01'].duration}><LlcEquityTransfer01Scene/></TimelineSequence>
  <TimelineSequence name="02-llc-equity-transfer-scene-02" start={SCENES['llc-equity-transfer-scene-02'].start} duration={SCENES['llc-equity-transfer-scene-02'].duration}><LlcEquityTransfer02Scene/></TimelineSequence>
  <TimelineSequence name="03-llc-equity-transfer-scene-03" start={SCENES['llc-equity-transfer-scene-03'].start} duration={SCENES['llc-equity-transfer-scene-03'].duration}><LlcEquityTransfer03Scene/></TimelineSequence>
</AbsoluteFill>;
