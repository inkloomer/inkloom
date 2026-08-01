import type {CSSProperties,ReactNode} from 'react';
import {ArrowLeftRight,Banknote,Bike,Clock3,FileKey2,FilePlus2,Gauge,HandCoins,Landmark,ReceiptText,ShieldCheck,ShieldOff,ShieldQuestion,Wifi,Zap} from 'lucide-react';
import {AbsoluteFill,interpolate,useCurrentFrame} from 'remotion';
import {CLAMP,TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const C={paper:'#f7f4ed',ink:'#151515',blue:'#2055d6',red:'#e34835',jade:'#15936d',yellow:'#f0cb34',lavender:'#d9d1ff',fog:'#dedbd2',white:'#fffdf8'};
const prog=(f:number,d:number,n=18)=>interpolate(f,[d,d+n],[0,1],CLAMP);
const Enter=({children,delay=0,style}:{children:ReactNode;delay?:number;style?:CSSProperties})=>{const f=useCurrentFrame();const p=prog(f,delay);return <div style={{opacity:p,translate:`0px ${(1-p)*30}px`,...style}}>{children}</div>};
const Region=({children,color,left,top,width,height,delay=0,clip='none',style}:{children:ReactNode;color:string;left:number;top:number;width:number;height:number;delay?:number;clip?:string;style?:CSSProperties})=>{const f=useCurrentFrame();const p=prog(f,delay);return <div style={{position:'absolute',left,top,width,height,backgroundColor:color,clipPath:clip==='none'?undefined:clip,opacity:p,scale:.92+p*.08,transformOrigin:'center',padding:34,...style}}>{children}</div>};
const Label=({children,color=C.ink}:{children:ReactNode;color?:string})=><span style={{display:'inline-block',backgroundColor:color,color:C.white,padding:'7px 13px',fontSize:21,fontWeight:900}}>{children}</span>;
const Underline=({children,delay=0,color=C.blue}:{children:ReactNode;delay?:number;color?:string})=>{const f=useCurrentFrame();return <span style={{position:'relative',display:'inline-block'}}>{children}<span style={{position:'absolute',left:0,right:0,bottom:-7,height:4,backgroundColor:color,scale:`${prog(f,delay)} 1`,transformOrigin:'left'}}/></span>};
const Stamp=({children,delay=0,color=C.red}:{children:ReactNode;delay?:number;color?:string})=>{const f=useCurrentFrame();const p=prog(f,delay,12);return <span style={{display:'inline-block',padding:'8px 15px',border:`4px solid ${color}`,color,fontWeight:950,opacity:p,scale:p,rotate:'-1deg'}}>{children}</span>};
const Link=({left,top,width,delay,color=C.ink,rotate=0}:{left:number;top:number;width:number;delay:number;color?:string;rotate?:number})=>{const f=useCurrentFrame();return <div style={{position:'absolute',left,top,width,height:6,backgroundColor:color,scale:`${prog(f,delay)} 1`,transformOrigin:'left',rotate:`${rotate}deg`}}/>};
const Canvas=({code,title,children}:{code:string;title:string;children:ReactNode})=><AbsoluteFill style={{overflow:'hidden',backgroundColor:C.paper,color:C.ink,fontFamily:'"Segoe UI", "Microsoft YaHei", sans-serif'}}>
  <div style={{position:'absolute',left:0,top:0,bottom:0,width:46,backgroundColor:C.blue}}/><div style={{position:'absolute',left:70,top:40,fontSize:18,fontWeight:900,color:C.blue}}>VALUE ATLAS / {code}</div>
  <h1 style={{position:'absolute',left:70,top:72,margin:0,fontSize:56,lineHeight:1.05,fontWeight:900}}>{title}</h1><div style={{position:'absolute',left:70,right:70,top:158,height:4,backgroundColor:C.ink}}/>{children}
  <div style={{position:'absolute',left:70,right:70,bottom:28,display:'flex',justifyContent:'space-between',fontSize:17,fontWeight:800}}><span>刑法 · 专题十九</span><span>MAP THE VALUE, THEN DRAW THE BOUNDARY</span></div>
</AbsoluteFill>;

export const ClaimExchangeScene=()=>{const f=useCurrentFrame();return <Canvas code="01" title="财产性利益：损失与获益必须是同一份价值">
  <div data-layout="loss-gain-topology-channel" data-visual-anchor="role-pair" data-text-treatments="label-block,soft-highlight,thin-underline" data-visual-grammar="loss-gain,condition,equivalence" data-focal-rule="victim-loss-and-offender-gain-require-condition-and-equivalence" data-focal-channels="icon,connector,spatial,contrast" style={{position:'absolute',inset:'190px 70px 72px'}}>
    <Region left={40} top={120} width={570} height={500} color={C.blue} delay={5} clip="polygon(0 0,88% 0,100% 50%,88% 100%,0 100%)"><ReceiptText size={88} color={C.white}/><div style={{fontSize:36,fontWeight:900,color:C.white,marginTop:36}}>债权人损失</div><div style={{fontSize:31,color:C.white,marginTop:20,lineHeight:1.45}}>放弃当场实现债权的机会</div></Region>
    <ArrowLeftRight size={110} color={C.ink} style={{position:'absolute',left:850,top:305,opacity:prog(f,44)}}/>
    <Region left={1190} top={120} width={570} height={500} color={C.jade} delay={22} clip="polygon(12% 0,100% 0,100% 100%,12% 100%,0 50%)"><Clock3 size={88} color={C.white}/><div style={{fontSize:36,fontWeight:900,color:C.white,marginTop:36}}>债务人获益</div><div style={{fontSize:31,color:C.white,marginTop:20,lineHeight:1.45}}>获得延迟履行债务的利益</div></Region>
    <Enter delay={62} style={{position:'absolute',left:640,top:90,width:520,textAlign:'center',fontSize:29,fontWeight:900}}><Label color={C.red}>不是债权本身消灭</Label></Enter>
    <Enter delay={82} style={{position:'absolute',left:610,top:510,width:600,textAlign:'center',fontSize:31,fontWeight:850}}>必须同时具备<br/><Underline delay={94}>条件关系 + 加减关系</Underline></Enter>
  </div></Canvas>};

export const DebtRegimesScene=()=> <Canvas code="02" title="债权关系不同，刑法保护边界也不同">
  <div data-layout="three-territory-debt-map" data-visual-anchor="boundary" data-text-treatments="label-block,external-negation,stamp" data-visual-grammar="classification,protection-boundary,generation" data-focal-rule="legal-status-and-claim-origin-determine-protection" data-focal-channels="icon,enclosure,annotation,contrast" style={{position:'absolute',inset:'190px 70px 72px'}}>
    <Region left={40} top={80} width={520} height={570} color={C.jade} delay={5} clip="polygon(0 0,100% 6%,92% 100%,4% 92%)"><ShieldCheck size={82} color={C.white}/><div style={{fontSize:33,fontWeight:950,color:C.white,marginTop:28}}>合法债权</div><div style={{fontSize:26,color:C.white,lineHeight:1.5,marginTop:24}}>欺骗放弃当场收费<br/>多数说：诈骗财产性利益</div><div style={{marginTop:42}}><Label color={C.blue}>受保护</Label></div></Region>
    <Region left={635} top={35} width={520} height={620} color={C.red} delay={22} clip="polygon(7% 0,96% 4%,100% 91%,0 100%)"><ShieldOff size={82} color={C.white}/><div style={{fontSize:33,fontWeight:950,color:C.white,marginTop:28}}>非法债权</div><div style={{fontSize:26,color:C.white,lineHeight:1.5,marginTop:24}}>骗免嫖资、欺骗分赃<br/>多数说：不构成诈骗罪</div><div style={{marginTop:42}}><Stamp delay={64} color={C.white}>法秩序不认可</Stamp></div></Region>
    <Region left={1230} top={95} width={520} height={555} color={C.yellow} delay={40} clip="polygon(3% 3%,94% 0,100% 100%,0 91%)"><FilePlus2 size={82} color={C.ink}/><div style={{fontSize:33,fontWeight:950,marginTop:28}}>行为生成非法债权</div><div style={{fontSize:26,lineHeight:1.5,marginTop:24}}>强迫写欠条、非法充值<br/>行为滋生之物仍可构成财产犯罪</div><div style={{marginTop:42}}><Label color={C.ink}>另行判断</Label></div></Region>
  </div></Canvas>;

export const DepositTransformationScene=()=>{const f=useCurrentFrame();return <Canvas code="03" title="现金存入银行后，形态从物变成债权">
  <div data-layout="cash-to-claim-fold" data-visual-anchor="flow-path" data-text-treatments="soft-highlight,thin-underline,stamp" data-visual-grammar="transformation,ownership,control" data-focal-rule="deposit-converts-cash-ownership-into-bank-claim" data-focal-channels="icon,motion,connector,spatial" style={{position:'absolute',inset:'190px 70px 72px'}}>
    <Region left={40} top={170} width={420} height={370} color={C.yellow} delay={4} clip="polygon(0 8%,92% 0,100% 92%,8% 100%)"><Banknote size={96}/><div style={{fontSize:38,fontWeight:950,marginTop:34}}>储户现金</div><div style={{fontSize:25,marginTop:18}}>存入银行</div></Region>
    <Link left={460} top={352} width={310} delay={30} color={C.blue}/><ArrowLeftRight size={70} color={C.blue} style={{position:'absolute',left:600,top:317,opacity:prog(f,38)}}/>
    <Region left={770} top={110} width={440} height={500} color={C.blue} delay={46} clip="polygon(5% 0,100% 7%,93% 100%,0 93%)"><Landmark size={96} color={C.white}/><div style={{fontSize:38,fontWeight:950,color:C.white,marginTop:34}}>银行</div><div style={{fontSize:27,color:C.white,marginTop:18,lineHeight:1.45}}>取得现金所有、占有</div></Region>
    <Link left={1210} top={352} width={250} delay={72} color={C.jade}/>
    <Region left={1460} top={170} width={310} height={370} color={C.jade} delay={86} clip="polygon(0 0,100% 7%,92% 100%,5% 91%)"><FileKey2 size={86} color={C.white}/><div style={{fontSize:34,fontWeight:950,color:C.white,marginTop:28}}>存款债权</div><div style={{fontSize:24,color:C.white,marginTop:16}}>储户针对银行</div></Region>
    <Enter delay={108} style={{position:'absolute',left:560,bottom:16,width:700,textAlign:'center',fontSize:30,fontWeight:900}}><Stamp delay={118}>债权已实体化，可自由转移</Stamp></Enter>
  </div></Canvas>};

export const UtilityClassificationScene=()=>{const f=useCurrentFrame();return <Canvas code="04" title="电力与网络：看对象和处分机制，不看技术外观">
  <div data-layout="utility-action-fork" data-visual-anchor="document-fork" data-text-treatments="label-block,thin-underline,external-negation" data-visual-grammar="object-classification,disposition,loss-measure" data-focal-rule="physical-utility-taking-differs-from-debt-waiver-deception" data-focal-channels="icon,connector,annotation,contrast" style={{position:'absolute',inset:'190px 70px 72px'}}>
    <Region left={60} top={180} width={390} height={360} color={C.yellow} delay={5} clip="polygon(0 0,100% 8%,93% 100%,5% 94%)"><Gauge size={92}/><div style={{fontSize:34,fontWeight:950,marginTop:30}}>同一结果</div><div style={{fontSize:29,marginTop:16}}>少交电费</div></Region>
    <Link left={450} top={354} width={260} delay={28}/>
    <div style={{position:'absolute',left:710,top:320,width:110,height:110,borderRadius:'50%',backgroundColor:C.ink,display:'grid',placeItems:'center',opacity:prog(f,40)}}><span style={{color:C.white,fontSize:50,fontWeight:950}}>?</span></div>
    <Link left={820} top={350} width={190} delay={52} color={C.blue} rotate={-22}/><Link left={820} top={390} width={190} delay={62} color={C.red} rotate={22}/>
    <Region left={1020} top={35} width={700} height={300} color={C.blue} delay={68} clip="polygon(0 0,96% 5%,100% 92%,4% 100%)"><Zap size={78} color={C.white}/><div style={{fontSize:34,fontWeight:950,color:C.white,marginTop:22}}>直接偷接电线／余额不足继续用电</div><div style={{fontSize:27,color:C.white,marginTop:20}}>对象是电力 → <Underline delay={88} color={C.yellow}>盗窃罪</Underline></div></Region>
    <Region left={1020} top={420} width={700} height={300} color={C.red} delay={82} clip="polygon(4% 0,100% 7%,94% 100%,0 92%)"><Wifi size={78} color={C.white}/><div style={{fontSize:34,fontWeight:950,color:C.white,marginTop:22}}>篡改电表使收费员少收</div><div style={{fontSize:27,color:C.white,marginTop:20}}>处分表现为不行使债权 → 诈骗罪</div></Region>
  </div></Canvas>};

export const IllegalPossessionBoundaryScene=()=> <Canvas code="05" title="“黑吃黑”：保护占有事实，不保护非法请求权">
  <div data-layout="possession-request-boundary" data-visual-anchor="comparison-axis" data-text-treatments="soft-highlight,external-negation,stamp" data-visual-grammar="possession,request-right,third-party" data-focal-rule="illegal-possession-is-protected-against-third-parties-but-illegal-claims-are-not" data-focal-channels="icon,enclosure,contrast,spatial" style={{position:'absolute',inset:'190px 70px 72px'}}>
    <Region left={40} top={80} width={800} height={580} color={C.jade} delay={5} clip="polygon(0 0,96% 3%,100% 96%,4% 100%)"><Bike size={98} color={C.white}/><div style={{fontSize:39,fontWeight:950,color:C.white,marginTop:30}}>现实财物已被甲非法占有</div><div style={{fontSize:29,color:C.white,lineHeight:1.5,marginTop:22}}>乙再从甲处转移占有<br/>非法占有能够对抗第三人</div><div style={{marginTop:48}}><Stamp delay={56} color={C.white}>乙构成盗窃罪</Stamp></div></Region>
    <div style={{position:'absolute',left:900,top:70,bottom:80,width:18,backgroundColor:C.ink}}/>
    <Region left={980} top={80} width={800} height={580} color={C.red} delay={28} clip="polygon(4% 2%,100% 0,96% 100%,0 94%)"><HandCoins size={98} color={C.white}/><div style={{fontSize:39,fontWeight:950,color:C.white,marginTop:30}}>甲只有非法请求权</div><div style={{fontSize:29,color:C.white,lineHeight:1.5,marginTop:22}}>欺骗分赃、骗免非法债务<br/>没有现实财物占有可供保护</div><div style={{marginTop:48}}><Stamp delay={78} color={C.white}>侵犯请求权：无罪</Stamp></div></Region>
    <ShieldQuestion size={92} color={C.yellow} style={{position:'absolute',left:860,top:320,zIndex:3}}/>
  </div></Canvas>;

export const PropertyInterestsKeypoints=()=> <AbsoluteFill>
  <TimelineSequence name="01-claim-exchange" {...SCENES.claimExchange}><ClaimExchangeScene/></TimelineSequence>
  <TimelineSequence name="02-debt-regimes" {...SCENES.debtRegimes}><DebtRegimesScene/></TimelineSequence>
  <TimelineSequence name="03-deposit-transformation" {...SCENES.depositTransformation}><DepositTransformationScene/></TimelineSequence>
  <TimelineSequence name="04-utility-classification" {...SCENES.utilityClassification}><UtilityClassificationScene/></TimelineSequence>
  <TimelineSequence name="05-illegal-possession-boundary" {...SCENES.illegalPossessionBoundary}><IllegalPossessionBoundaryScene/></TimelineSequence>
</AbsoluteFill>;
