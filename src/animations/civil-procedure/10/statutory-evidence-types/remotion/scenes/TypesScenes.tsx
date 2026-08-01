import type {CSSProperties, ReactNode} from 'react';
import {Box, FileText, HardDrive, Image, Radio, ScanLine, ScrollText, Shapes, Speaker, Usb} from 'lucide-react';
import {interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../../shared/remotion-runtime';

const C = {bg: '#edf7f7', ink: '#132a2c', cyan: '#00a9b2', yellow: '#f5c84b', magenta: '#d94979', white: '#ffffff', mute: '#6f8586'};

const Reveal = ({children, delay, style}: {children: ReactNode; delay: number; style?: CSSProperties}) => {
  const frame = useCurrentFrame();
  const p = interpolate(frame, [delay, delay + 14], [0, 1], CLAMP);
  return <div style={{opacity: p, translate: `0 ${24 * (1 - p)}px`, ...style}}>{children}</div>;
};

const Spectrum = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <div style={{position: 'absolute', inset: 0, overflow: 'hidden', backgroundColor: C.bg, color: C.ink, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', left: 0, top: 0, bottom: 0, width: 42, backgroundColor: C.cyan}} />
    <div style={{position: 'absolute', left: 76, top: 48, fontSize: 18, fontWeight: 850, color: C.magenta}}>MATERIAL SPECTRUM / {code}</div>
    <h1 style={{fontFamily: 'var(--inkloom-animation-title)', position: 'absolute', left: 76, top: 82, margin: 0, fontSize: 56, lineHeight: 1.1, fontWeight: 850}}>{title}</h1>
    <div style={{position: 'absolute', left: 76, right: 64, top: 166, height: 3, backgroundColor: C.ink}} />
    {children}
    <div style={{position: 'absolute', left: 76, bottom: 30, fontSize: 17, fontWeight: 750, color: C.mute}}>专题十 · 证据的法定分类</div>
  </div>
);

export const ProofMethodScene = () => {
  const frame = useCurrentFrame();
  return <Spectrum code="01" title="先问：这份证据靠什么证明？">
    <div data-layout="material-versus-content-prism" data-visual-anchor="comparison-axis" data-text-treatments="label-block,soft-highlight,stamp" data-visual-grammar="comparison,classification,coverage" data-focal-rule="proof-method-separates-object-evidence-from-content-evidence" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', left: 76, right: 64, top: 204, bottom: 72}}>
      <Reveal delay={4} style={{position: 'absolute', left: 0, top: 0, width: 650, height: 700, backgroundColor: C.ink, color: C.white, padding: '44px 48px'}}>
        <Box size={74} color={C.yellow} strokeWidth={2} /><div style={{marginTop: 22, fontSize: 42, fontWeight: 900}}>物证</div>
        <div style={{marginTop: 28, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18}}>{['形状', '颜色', '大小', '损坏状态'].map((item, i) => <div key={item} style={{height: 112, display: 'grid', placeItems: 'center', border: `3px solid ${i === 3 ? C.yellow : C.mute}`, fontSize: 29, fontWeight: 800, opacity: interpolate(frame, [22 + i * 8, 34 + i * 8], [0, 1], CLAMP)}}>{item}</div>)}</div>
        <div style={{position: 'absolute', left: 48, right: 48, bottom: 48, fontSize: 30, fontWeight: 850, color: C.yellow}}>靠物品的物理属性证明</div>
      </Reveal>
      <Reveal delay={20} style={{position: 'absolute', right: 0, top: 0, width: 980, height: 700, backgroundColor: C.white, border: `3px solid ${C.cyan}`, padding: '44px 48px'}}>
        <ScanLine size={74} color={C.cyan} strokeWidth={2} /><div style={{marginTop: 22, fontSize: 42, fontWeight: 900}}>其余三类：读取内容</div>
        <div style={{marginTop: 36, display: 'flex', gap: 22}}>{[
          [FileText, '书证', '文字 / 思想', C.cyan], [Radio, '视听资料', '声音 / 图像', C.magenta], [HardDrive, '电子数据', '电子信息', C.yellow],
        ].map(([Icon, title, note, color], i) => <div key={title as string} style={{width: 278, height: 300, padding: '28px 24px', borderTop: `10px solid ${color as string}`, backgroundColor: C.bg, opacity: interpolate(frame, [42 + i * 10, 54 + i * 10], [0, 1], CLAMP)}}><Icon size={62} color={color as string} /><div style={{marginTop: 26, fontSize: 34, fontWeight: 850}}>{title as string}</div><div style={{marginTop: 18, fontSize: 24, color: C.mute}}>{note as string}</div></div>)}</div>
        <div style={{position: 'absolute', left: 48, right: 48, bottom: 48, padding: '16px 22px', backgroundColor: C.ink, color: C.white, fontSize: 29, fontWeight: 850}}>共同点：都不是看载体外形，而是读取载体中的内容</div>
      </Reveal>
    </div>
  </Spectrum>;
};

export const EvidenceMediumScene = () => <Spectrum code="02" title="声音、图像：存在哪里，决定归哪类">
  <div data-layout="analog-digital-medium-gate" data-visual-anchor="boundary" data-text-treatments="label-block,thin-underline,external-negation" data-visual-grammar="boundary,classification,transfer" data-focal-rule="electronic-storage-moves-audio-visual-material-into-electronic-data" data-focal-channels="icon,connector,contrast,annotation" style={{position: 'absolute', left: 76, right: 64, top: 204, bottom: 72}}>
    <Reveal delay={4} style={{position: 'absolute', left: 0, top: 90, width: 600, height: 500, backgroundColor: C.magenta, color: C.white, padding: '44px 50px'}}><Speaker size={76} /><Image size={76} style={{marginLeft: 28}} /><div style={{marginTop: 36, fontSize: 38, fontWeight: 900}}>声音 / 图像</div><div style={{marginTop: 18, fontSize: 25}}>先别急着叫“视听资料”</div></Reveal>
    <div style={{position: 'absolute', left: 650, top: 70, bottom: 70, width: 6, backgroundColor: C.ink}} />
    <Reveal delay={28} style={{position: 'absolute', left: 710, top: 0, width: 460, height: 300, backgroundColor: C.white, border: `4px solid ${C.cyan}`, padding: '34px 38px'}}><Radio size={62} color={C.cyan} /><div style={{marginTop: 24, fontSize: 34, fontWeight: 850}}>胶片 / 录音带 / 录像带</div><div style={{marginTop: 18, fontSize: 29, color: C.cyan, fontWeight: 850}}>→ 视听资料</div></Reveal>
    <Reveal delay={48} style={{position: 'absolute', right: 0, bottom: 0, width: 760, height: 360, backgroundColor: C.ink, color: C.white, padding: '38px 44px'}}><div style={{display: 'flex', gap: 28}}><Usb size={68} color={C.yellow} /><HardDrive size={68} color={C.yellow} /></div><div style={{marginTop: 26, fontSize: 36, fontWeight: 900}}>U盘 / 硬盘 / 储存卡</div><div style={{marginTop: 20, fontSize: 31, color: C.yellow, fontWeight: 900}}>→ 适用电子数据规定</div><div style={{marginTop: 20, fontSize: 23, color: '#c7d7d8'}}>电子介质中的录音、影像，不再按传统视听资料处理</div></Reveal>
  </div>
</Spectrum>;

export const RuleCarryoverScene = () => <Spectrum code="03" title="内容型证据，共享书证规则">
  <div data-layout="content-carriers-rule-convergence" data-visual-anchor="flow-target" data-text-treatments="soft-highlight,thin-underline,stamp" data-visual-grammar="convergence,equivalence,rule-transfer" data-focal-rule="documentary-rules-apply-to-audiovisual-material-and-electronic-data" data-focal-channels="icon,connector,enclosure,motion" style={{position: 'absolute', left: 76, right: 64, top: 204, bottom: 72}}>
    {[[ScrollText, '书证', C.cyan], [Radio, '视听资料', C.magenta], [HardDrive, '电子数据', C.yellow]].map(([Icon, title, color], i) => <Reveal key={title as string} delay={6 + i * 14} style={{position: 'absolute', left: 40, top: 40 + i * 210, width: 470, height: 170, display: 'flex', alignItems: 'center', gap: 28, padding: '28px 34px', backgroundColor: C.white, borderLeft: `12px solid ${color as string}`}}><Icon size={62} color={color as string} /><div><div style={{fontSize: 34, fontWeight: 850}}>{title as string}</div><div style={{marginTop: 8, fontSize: 23, color: C.mute}}>以内容证明案件事实</div></div></Reveal>)}
    <div style={{position: 'absolute', left: 550, top: 110, width: 380, height: 470, borderTop: `5px solid ${C.ink}`, borderBottom: `5px solid ${C.ink}`, borderRight: `5px solid ${C.ink}`}} />
    <Reveal delay={72} style={{position: 'absolute', right: 70, top: 150, width: 690, height: 420, backgroundColor: C.ink, color: C.white, display: 'grid', placeItems: 'center', textAlign: 'center'}}><Shapes size={92} color={C.yellow} /><div style={{fontSize: 42, fontWeight: 900, marginTop: -70}}>本质相同</div><div style={{fontSize: 29, lineHeight: 1.5, marginTop: -78}}>书证的证据规则<br /><span style={{color: C.yellow, fontWeight: 900}}>适用于视听资料、电子数据</span></div></Reveal>
  </div>
</Spectrum>;
