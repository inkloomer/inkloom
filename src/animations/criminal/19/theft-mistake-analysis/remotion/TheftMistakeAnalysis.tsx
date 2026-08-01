import type {CSSProperties, ReactNode} from 'react';
import {Ban, Eye, Flower2, Focus, Gauge, Gem, Grape, Route, Scale, ShieldAlert, ShoppingBag, Target} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const C = {paper: '#f4f5ef', ink: '#111112', violet: '#6c3cff', lime: '#b9f227', magenta: '#f03278', fog: '#d9dcd2', white: '#ffffff'};

const reveal = (frame: number, delay: number) => interpolate(frame, [delay, delay + 16], [0, 1], CLAMP);

const Enter = ({children, delay = 0, style}: {children: ReactNode; delay?: number; style?: CSSProperties}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  return <div style={{opacity: p, translate: `0px ${(1 - p) * 28}px`, ...style}}>{children}</div>;
};

const Tag = ({children, tone = 'violet'}: {children: ReactNode; tone?: 'violet' | 'lime' | 'magenta'}) => (
  <span style={{display: 'inline-block', padding: '6px 13px', backgroundColor: C[tone], color: tone === 'lime' ? C.ink : C.white, fontSize: 22, fontWeight: 900}}>{children}</span>
);

const Underline = ({children, delay = 0, color = C.violet}: {children: ReactNode; delay?: number; color?: string}) => {
  const frame = useCurrentFrame();
  return <span style={{position: 'relative', display: 'inline-block'}}>{children}<span style={{position: 'absolute', left: 0, right: 0, bottom: -7, height: 4, backgroundColor: color, scale: `${reveal(frame, delay)} 1`, transformOrigin: 'left'}} /></span>;
};

const Stamp = ({children, delay = 0}: {children: ReactNode; delay?: number}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  return <span style={{display: 'inline-block', padding: '8px 16px', border: `4px solid ${C.magenta}`, color: C.magenta, fontWeight: 950, opacity: p, scale: p, rotate: '-2deg'}}>{children}</span>;
};

const Lens = ({left, color, label, delay}: {left: number; color: string; label: string; delay: number}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  return <div style={{position: 'absolute', left, top: 242, width: 420, height: 420, borderRadius: '50%', border: `18px solid ${color}`, opacity: p, scale: 0.84 + p * 0.16, display: 'grid', placeItems: 'center'}}>
    <div style={{position: 'absolute', inset: 34, borderRadius: '50%', border: `3px solid ${color}`, opacity: 0.55}} />
    <div style={{fontSize: 32, fontWeight: 900, textAlign: 'center'}}>{label}</div>
  </div>;
};

const Canvas = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill style={{overflow: 'hidden', backgroundColor: C.paper, color: C.ink, fontFamily: 'var(--inkloom-animation-body)'}}>
    {Array.from({length: 18}, (_, i) => <div key={i} style={{position: 'absolute', left: 60 + i * 106, top: 0, bottom: 0, width: 1, backgroundColor: C.fog}} />)}
    <div style={{position: 'absolute', left: 58, top: 42, fontSize: 18, fontWeight: 900}}>OPTICAL CRIMINAL LAW / {code}</div>
    <div style={{position: 'absolute', left: 58, top: 78, fontSize: 58, fontWeight: 900}}>{title}</div>
    <div style={{position: 'absolute', left: 58, right: 58, top: 158, height: 7, backgroundColor: C.ink}} />
    {children}
    <div style={{position: 'absolute', left: 58, right: 58, bottom: 28, display: 'flex', justifyContent: 'space-between', fontSize: 17, fontWeight: 800}}><span>刑法 · 专题十九</span><span>ALIGN INTENT WITH RISK</span></div>
  </AbsoluteFill>
);

export const AwarenessAlignmentScene = () => {
  const frame = useCurrentFrame();
  const beam = reveal(frame, 64);
  return <Canvas code="01" title="定罪：主观认识必须对准客观数额">
    <div data-layout="dual-lens-focal-plane" data-visual-anchor="comparison-axis" data-text-treatments="label-block,soft-highlight,stamp" data-visual-grammar="comparison,alignment,threshold" data-focal-rule="subjective-awareness-must-align-with-objective-value" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: '176px 70px 68px'}}>
      <Lens left={70} color={C.violet} label="主观镜头\n只看见普通葡萄" delay={6} />
      <Lens left={1300} color={C.magenta} label="客观镜头\n实际价值 40 万" delay={20} />
      <Eye style={{position: 'absolute', left: 235, top: 394}} size={64} color={C.violet} />
      <Grape style={{position: 'absolute', left: 1438, top: 384}} size={84} color={C.magenta} />
      <div style={{position: 'absolute', left: 505, top: 438, width: 790, height: 8, backgroundColor: C.violet, scale: `${beam} 1`, transformOrigin: 'left'}} />
      <Focus style={{position: 'absolute', left: 854, top: 328, opacity: reveal(frame, 72)}} size={120} color={C.lime} />
      <Enter delay={78} style={{position: 'absolute', left: 650, top: 486, width: 520, textAlign: 'center', fontSize: 30, fontWeight: 850}}><Tag tone="lime">焦点未重合</Tag><div style={{marginTop: 18}}>未认识达到“数额较大”</div></Enter>
      <div style={{position: 'absolute', left: 650, top: 646, width: 520, textAlign: 'center', fontSize: 35}}><Stamp delay={108}>不构成盗窃罪</Stamp></div>
    </div>
  </Canvas>;
};

export const PenaltyTierScene = () => {
  const frame = useCurrentFrame();
  const known = reveal(frame, 38);
  return <Canvas code="02" title="升格：法定刑只能停在认识到的档位">
    <div data-layout="exposure-tier-scale" data-visual-anchor="boundary" data-text-treatments="thin-underline,external-negation,stamp" data-visual-grammar="threshold,containment,exclusion" data-focal-rule="penalty-tier-requires-awareness-of-that-tier" data-focal-channels="icon,locator,annotation,contrast" style={{position: 'absolute', inset: '190px 90px 80px'}}>
      <Enter delay={6} style={{position: 'absolute', left: 60, top: 90, width: 430, height: 480, backgroundColor: C.ink, color: C.white, padding: 42}}><Flower2 size={92} color={C.lime} /><div style={{fontSize: 31, fontWeight: 800, marginTop: 30}}>兰花案</div><div style={{fontSize: 48, fontWeight: 950, marginTop: 12}}>实际 100 万</div><div style={{fontSize: 26, marginTop: 32, lineHeight: 1.5}}>甲只认为价值几千元</div></Enter>
      <div style={{position: 'absolute', left: 590, right: 60, top: 160, height: 170}}>
        <div style={{position: 'absolute', left: 0, right: 0, top: 84, height: 12, backgroundColor: C.fog}} />
        {[{x:0,t:'数额较大',c:C.lime},{x:470,t:'数额巨大',c:C.violet},{x:940,t:'数额特别巨大',c:C.magenta}].map((x,i)=><div key={x.t} style={{position:'absolute',left:x.x,top:18,width:300,textAlign:'center'}}><div style={{height:132,width:8,margin:'0 auto',backgroundColor:x.c}} /><div style={{fontSize:27,fontWeight:900,marginTop:12}}>{x.t}</div>{i===0?<Gauge size={48} color={C.ink} style={{position:'absolute',left:126,top:-48,opacity:known}}/>:null}</div>)}
        <div style={{position:'absolute',left:0,top:76,width:320,height:28,backgroundColor:C.lime,scale:`${known} 1`,transformOrigin:'left'}} />
      </div>
      <Enter delay={72} style={{position:'absolute',left:650,top:430,width:520,fontSize:34,fontWeight:850}}>认识只到<Underline delay={82} color={C.lime}>数额较大</Underline></Enter>
      <Ban size={88} color={C.magenta} style={{position:'absolute',right:230,top:408,opacity:reveal(frame,88)}} />
      <Enter delay={102} style={{position:'absolute',right:78,top:520,width:610,fontSize:31,fontWeight:850}}>不能越过主观认识，适用“特别巨大”档</Enter>
      <div style={{position:'absolute',left:650,top:626,fontSize:34}}><Stamp delay={118}>只适用数额较大档</Stamp></div>
    </div>
  </Canvas>;
};

export const AttemptRiskScene = () => {
  const frame = useCurrentFrame();
  return <Canvas code="03" title="未取得大额财物，也可能成立未遂">
    <div data-layout="risk-aperture-target" data-visual-anchor="flow-target" data-text-treatments="label-block,soft-highlight,thin-underline" data-visual-grammar="possibility,attempt,result" data-focal-rule="intent-plus-objective-risk-supports-attempt" data-focal-channels="icon,connector,motion,spatial" style={{position:'absolute',inset:'190px 90px 78px'}}>
      <Enter delay={5} style={{position:'absolute',left:40,top:120,width:420,height:430,border:`6px solid ${C.ink}`,display:'grid',placeItems:'center',textAlign:'center'}}><ShoppingBag size={100} color={C.violet}/><div style={{fontSize:31,fontWeight:900,marginTop:-90}}>商场提包</div><div style={{fontSize:44,fontWeight:950,marginTop:-100}}>实际只有 100 元</div></Enter>
      <div style={{position:'absolute',left:500,top:330,width:560,height:10,backgroundColor:C.violet,scale:`${reveal(frame,36)} 1`,transformOrigin:'left'}} />
      <ShieldAlert size={92} color={C.lime} style={{position:'absolute',left:710,top:286,opacity:reveal(frame,44)}} />
      <Enter delay={54} style={{position:'absolute',left:560,top:405,width:470,textAlign:'center',fontSize:29,fontWeight:850}}><Tag tone="lime">客观可能性、危险性</Tag><div style={{marginTop:22}}>提包通常可能装有数额较大财物</div></Enter>
      <Target size={220} color={C.magenta} style={{position:'absolute',right:180,top:205,opacity:reveal(frame,70),scale:0.8+reveal(frame,70)*0.2}} />
      <Enter delay={88} style={{position:'absolute',right:50,top:475,width:500,textAlign:'center',fontSize:34,fontWeight:900}}>主观故意 + 客观危险<br/><Underline delay={98}>盗窃罪未遂</Underline></Enter>
    </div>
  </Canvas>;
};

export const AggravatedAttemptScene = () => {
  const frame = useCurrentFrame();
  return <Canvas code="04" title="误取低价珠宝：两条评价路径汇合">
    <div data-layout="split-target-convergence" data-visual-anchor="flow-path" data-text-treatments="label-block,external-negation,stamp" data-visual-grammar="mistaken-target,concurrence,selection" data-focal-rule="aggravated-attempt-and-basic-completion-converge" data-focal-channels="icon,connector,annotation,contrast" style={{position:'absolute',inset:'190px 80px 76px'}}>
      <Enter delay={4} style={{position:'absolute',left:40,top:200,width:360,height:300,backgroundColor:C.ink,color:C.white,display:'grid',placeItems:'center',textAlign:'center'}}><Route size={82} color={C.lime}/><div style={{fontSize:31,fontWeight:850,marginTop:-78}}>着手盗窃</div><div style={{fontSize:38,fontWeight:950,marginTop:-84}}>目标：3 万元</div></Enter>
      <div style={{position:'absolute',left:400,top:346,width:300,height:8,backgroundColor:C.violet,scale:`${reveal(frame,34)} 1`,transformOrigin:'left'}} />
      <Enter delay={48} style={{position:'absolute',left:700,top:92,width:450,height:250,border:`5px solid ${C.violet}`,padding:34}}><Gem size={66} color={C.violet}/><div style={{fontSize:32,fontWeight:900,marginTop:18}}>数额巨大财物</div><div style={{fontSize:27,marginTop:12}}>有故意、有着手，未取得</div><Tag tone="violet">未遂</Tag></Enter>
      <Enter delay={62} style={{position:'absolute',left:700,top:410,width:450,height:250,border:`5px solid ${C.lime}`,padding:34}}><Gem size={66} color={C.lime}/><div style={{fontSize:32,fontWeight:900,marginTop:18}}>实际取得 3 千元</div><div style={{fontSize:27,marginTop:12}}>达到数额较大档</div><Tag tone="lime">既遂</Tag></Enter>
      <div style={{position:'absolute',left:1150,top:214,width:270,height:8,backgroundColor:C.magenta,rotate:'20deg',scale:`${reveal(frame,88)} 1`,transformOrigin:'left'}} />
      <div style={{position:'absolute',left:1150,top:528,width:270,height:8,backgroundColor:C.magenta,rotate:'-20deg',scale:`${reveal(frame,88)} 1`,transformOrigin:'left'}} />
      <Scale size={120} color={C.magenta} style={{position:'absolute',right:220,top:270,opacity:reveal(frame,102)}} />
      <Enter delay={112} style={{position:'absolute',right:36,top:430,width:490,textAlign:'center',fontSize:29,fontWeight:850}}>多数说：想象竞合<br/><Stamp delay={124}>择一重刑论处</Stamp></Enter>
    </div>
  </Canvas>;
};

export const TheftMistakeAnalysis = () => <AbsoluteFill>
  <TimelineSequence name="01-awareness-alignment" {...SCENES.awarenessAlignment}><AwarenessAlignmentScene /></TimelineSequence>
  <TimelineSequence name="02-penalty-tier" {...SCENES.penaltyTier}><PenaltyTierScene /></TimelineSequence>
  <TimelineSequence name="03-attempt-risk" {...SCENES.attemptRisk}><AttemptRiskScene /></TimelineSequence>
  <TimelineSequence name="04-aggravated-attempt" {...SCENES.aggravatedAttempt}><AggravatedAttemptScene /></TimelineSequence>
</AbsoluteFill>;
