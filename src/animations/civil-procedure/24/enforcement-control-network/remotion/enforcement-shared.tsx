import type {CSSProperties,ReactNode} from 'react';
import {AbsoluteFill,interpolate,useCurrentFrame} from 'remotion';
import {CLAMP,createMotionPrimitives} from '../../../../shared/remotion-runtime';
import {toSourceFrame} from './storyboard';

export const C={bg:'#e8edf0',ink:'#172129',red:'#0a7a73',teal:'#c54135',gold:'#d89b21',paper:'#f1ead6',paperDim:'#e6d9bd',inkSoft:'#5d6670'} as const;
export const STYLE={"backgroundImage":"linear-gradient(90deg,#0a7a731e 1px,transparent 1px),linear-gradient(#17212918 1px,transparent 1px)","backgroundSize":"38px 38px","codeLeft":72,"codeTop":46,"codeWidth":154,"codeHeight":68,"codeRadius":4,"codeRotate":"0deg","titleLeft":260,"titleTop":42,"titleRight":72,"titleSize":48,"titleAlign":"left","ruleLeft":72,"ruleRight":72,"ruleTop":136,"contentTop":166,"nodeRadius":4,"nodeBorderWidth":4,"nodeShadow":"6px 6px 0 #d89b2140,-6px -6px 0 #0a7a7320","nodePadding":"24px 26px","iconRadius":4} as const;
export const PLAYER_CONTROL_SAFE_BOTTOM = 160;
export const {Enter,MaskedReveal}=createMotionPrimitives(toSourceFrame);

export const prog=(frame:number,delay:number,span=18)=>interpolate(frame,[delay,delay+span],[0,1],CLAMP);

type Anchor='boundary'|'comparison-axis'|'concept-icon'|'document-fork'|'flow-path'|'flow-target'|'role-pair'|'timeline-gate'|'typographic-sequence';

export const Shell=({code,title,children}:{code:string;title:string;children:ReactNode})=><AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{backgroundColor:C.bg,color:C.ink,overflow:'hidden'}}>
  <div style={{position:'absolute',inset:0,backgroundImage:STYLE.backgroundImage,backgroundSize:STYLE.backgroundSize}}/>
  <div style={{position:'absolute',left:STYLE.codeLeft,top:STYLE.codeTop,width:STYLE.codeWidth,height:STYLE.codeHeight,display:'grid',placeItems:'center',backgroundColor:C.ink,color:C.paper,fontSize:26,fontWeight:900,borderRadius:STYLE.codeRadius,rotate:STYLE.codeRotate}}>{code}</div>
  <MaskedReveal style={{position:'absolute',left:STYLE.titleLeft,top:STYLE.titleTop,right:STYLE.titleRight,fontSize:STYLE.titleSize,fontWeight:900,lineHeight:1.2,textAlign:STYLE.titleAlign}}>{title}</MaskedReveal>
  <div style={{position:'absolute',left:STYLE.ruleLeft,right:STYLE.ruleRight,top:STYLE.ruleTop,height:6,background:`linear-gradient(90deg,${C.red},${C.gold} 48%,${C.teal})`}}/>
  <div style={{position:'absolute',left:72,right:72,top:STYLE.contentTop,bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
</AbsoluteFill>;

export const anchorStyle=(anchor:Anchor,count:number):CSSProperties=>({
  position:'absolute',inset:0,display:'grid',gap:24,alignItems:'stretch',
  gridTemplateColumns:anchor==='typographic-sequence'?'1fr':anchor==='comparison-axis'||anchor==='role-pair'||anchor==='document-fork'?'repeat(2,minmax(0,1fr))':count>4?'repeat(3,minmax(0,1fr))':'repeat('+Math.min(count,4)+',minmax(0,1fr))',
  gridAutoRows:'minmax(0,1fr)',padding:anchor==='boundary'?'40px 52px':'32px 28px',
});

export const Diagram=({anchor,count,children}:{anchor:Anchor;count:number;children:ReactNode})=>{const frame=toSourceFrame(useCurrentFrame());const p=interpolate(frame,[12,92],[0,1],CLAMP);return <div style={{position:'absolute',inset:0}}>
  <div style={{position:'absolute',left:anchor==='timeline-gate'||anchor==='flow-path'?40:'50%',right:anchor==='timeline-gate'||anchor==='flow-path'?40:undefined,top:anchor==='timeline-gate'||anchor==='flow-path'?'50%':34,bottom:anchor==='boundary'?34:undefined,width:anchor==='boundary'?'calc(100% - 100px)':anchor==='comparison-axis'?'8px':undefined,height:anchor==='boundary'?'calc(100% - 68px)':anchor==='timeline-gate'||anchor==='flow-path'?'8px':'10px',border:anchor==='boundary'?'7px solid '+C.teal:undefined,backgroundColor:anchor==='boundary'?undefined:C.gold,borderRadius:STYLE.nodeRadius,scale:anchor==='timeline-gate'||anchor==='flow-path'?p+' 1':'1 '+p,transformOrigin:'left center',opacity:.8}}/>
  {anchor==='document-fork'?<><div style={{position:'absolute',left:'24%',right:'24%',top:'50%',height:7,backgroundColor:C.red,scale:p+' 1',transformOrigin:'center'}}/><div style={{position:'absolute',left:'50%',top:'24%',bottom:'24%',width:7,backgroundColor:C.teal,scale:'1 '+p,transformOrigin:'center'}}/></>:null}
  {anchor==='flow-target'?<><div style={{position:'absolute',left:'18%',top:'25%',width:'64%',height:7,backgroundColor:C.red,rotate:'18deg',scale:p+' 1'}}/><div style={{position:'absolute',left:'18%',bottom:'25%',width:'64%',height:7,backgroundColor:C.teal,rotate:'-18deg',scale:p+' 1'}}/></>:null}
  <div style={anchorStyle(anchor,count)}>{children}</div>
  </div>};

export const Knowledge=({index,icon,label,detail,...data}:{index:number;icon:ReactNode;label:string;detail:string;'data-final-knowledge':string})=><Enter delay={24+index*18} from={index%2===0?'left':'right'} style={{height:'100%'}}><div {...data} data-audit-boundary="true" style={{height:'100%',minHeight:112,backgroundColor:index%3===0?'#eadfc4':index%3===1?C.red+'2c':C.gold+'48',border:'6px solid '+(index%3===0?C.ink:index%3===1?C.red:C.gold),boxShadow:STYLE.nodeShadow,padding:'0 0 18px',borderRadius:STYLE.nodeRadius,clipPath:STYLE.nodeClip,display:'flex',flexDirection:'column'}}>
  <div style={{display:'flex',alignItems:'center',gap:14,backgroundColor:index%2===0?C.red:C.teal,color:C.paper,padding:'10px 16px',borderBottom:'4px solid '+(index%2===0?C.gold:C.ink)}}>
    <span style={{flexShrink:0,width:50,height:50,display:'grid',placeItems:'center',backgroundColor:C.paper,color:C.ink,borderRadius:STYLE.iconRadius}}>{icon}</span>
    <span style={{fontSize:32,fontWeight:900,lineHeight:1.15}}>{label}</span>
  </div>
  <div style={{fontSize:26,fontWeight:750,lineHeight:1.6,padding:'16px 20px 0',whiteSpace:'pre-wrap'}}>{detail.replaceAll('｜',' · ')}</div>
  </div></Enter>;

export const Panel=({children,marker,tone=C.red,watermark,style}:{children:ReactNode;marker?:string;tone?:string;watermark?:ReactNode;style?:CSSProperties})=>(
  <div data-final-knowledge={marker} data-audit-boundary="true" style={{backgroundColor:C.paper,border:'5px solid '+(tone===C.gold?C.gold:tone===C.teal?C.teal:C.ink),boxShadow:STYLE.nodeShadow,borderRadius:STYLE.nodeRadius,clipPath:STYLE.nodeClip,position:'relative',overflow:'hidden',padding:'20px 24px',display:'flex',flexDirection:'column',gap:12,...style}}>
    {watermark?<span style={{position:'absolute',right:-18,bottom:-22,opacity:.16,pointerEvents:'none',transformOrigin:'bottom right',transform:'scale(1.4)'}}>{watermark}</span>:null}
    {children}
  </div>
);

export const PanelTab=({icon,tone=C.red,children}:{icon?:ReactNode;tone?:string;children:ReactNode})=>(
  <span style={{display:'inline-flex',alignItems:'center',gap:9,alignSelf:'flex-start',padding:'5px 16px',backgroundColor:tone,color:C.paper,fontSize:23,fontWeight:900,borderRadius:STYLE.iconRadius,letterSpacing:1}}>{icon}{children}</span>
);

export const IconChip=({icon,tone=C.red,style,children}:{icon?:ReactNode;tone?:string;style?:CSSProperties;children:ReactNode})=>(
  <div style={{flex:'1 1 0',minHeight:56,maxHeight:180,display:'flex',alignItems:'center',gap:14,backgroundColor:C.paperDim,borderLeft:'8px solid '+tone,padding:'8px 14px',...style}}>
    {icon?<span style={{flexShrink:0,width:46,height:46,display:'grid',placeItems:'center',backgroundColor:tone,color:C.paper,borderRadius:STYLE.iconRadius}}>{icon}</span>:null}
    <span style={{fontSize:22,fontWeight:800,lineHeight:1.5,color:C.ink}}>{children}</span>
  </div>
);

export const Chip=({children,tone=C.ink,toneBg,bold=950}:{children:ReactNode;tone?:string;toneBg?:string;bold?:number})=>(
  <span style={{display:'inline-flex',alignItems:'center',gap:7,border:'3px solid '+tone,backgroundColor:toneBg??(tone===C.ink?C.paperDim:tone+'22'),padding:'5px 13px',fontSize:20,fontWeight:bold,color:tone,whiteSpace:'nowrap'}}>{children}</span>
);

export const Soft=({children,color=C.gold}:{children:ReactNode;color?:string})=>(
  <span style={{display:'inline-block',backgroundColor:color+'38',padding:'1px 8px',fontWeight:950,color:C.ink}}>{children}</span>
);

export const Under=({children,color=C.teal,delay=0}:{children:ReactNode;color?:string;delay?:number})=>{
  const frame=useCurrentFrame();
  return <span style={{position:'relative',display:'inline-block',fontWeight:950}}>
    {children}
    <span style={{position:'absolute',left:0,right:0,bottom:-5,height:4,backgroundColor:color,scale:prog(frame,delay,20)+' 1',transformOrigin:'left center'}}/>
  </span>;
};

export const Seal=({children,delay=0,size=20,tone=C.teal}:{children:ReactNode;delay?:number;size?:number;tone?:string})=>{
  const frame=useCurrentFrame();
  const p=prog(frame,delay,14);
  return <span style={{display:'inline-block',padding:'5px 14px',border:'4px double '+tone,color:tone,backgroundColor:tone+'12',fontSize:size,fontWeight:950,letterSpacing:2,opacity:p,scale:0.85+p*0.15,rotate:'-2deg'}}>{children}</span>;
};

export const Mover=({children,delay=0,span=40,fromX=0,toX=0,style}:{children:ReactNode;delay?:number;span?:number;fromX?:number;toX?:number;style?:CSSProperties})=>{
  const frame=useCurrentFrame();
  return <div style={{...style,opacity:prog(frame,delay,10),translate:interpolate(frame,[delay,delay+span],[fromX,toX],CLAMP)+'px 0px'}}>{children}</div>;
};

export const Rail=({color=C.gold,delay=0,span=40,horizontal=true,style}:{color?:string;delay?:number;span?:number;horizontal?:boolean;style?:CSSProperties})=>{
  const frame=useCurrentFrame();
  return <div style={{...style,backgroundColor:color,scale:horizontal?prog(frame,delay,span)+' 1':'1 '+prog(frame,delay,span),transformOrigin:'left center'}}/>;
};
