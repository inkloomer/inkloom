import {Ban, ScrollText, Zap} from 'lucide-react';
import {Chip, C, Dash, Enter, LabelBlock, Neg, PatrolTitle, Shell, SoftHi, ThinU} from './kit';

export const OmissionFamilyMapScene = () => (
  <Shell code="03" title="作为与不作为·分类判定">
    <div data-layout="omission-family-classify-map" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="act-omission-pairing,possession-act-branch" data-focal-rule="omission-violates-a-command-act-violates-a-prohibition" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="pair-act-omission" style={{position: 'absolute', left: 0, top: 0, width: 566, height: 300, backgroundColor: C.white, border: `3px solid ${C.ink}`, borderRadius: 10, padding: '14px 18px'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Zap size={26} color={C.rescue} />
          <PatrolTitle>作为</PatrolTitle>
        </Enter>
        <Enter delay={16} style={{marginTop: 8, fontSize: 22, fontWeight: 800}}>违反刑法<ThinU>禁止性</ThinU>规定</Enter>
        <Enter delay={26} style={{marginTop: 8, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>例：飞车抢夺——禁止抢夺而抢</Enter>
      </div>
      <div data-final-knowledge="pair-omission-side" style={{position: 'absolute', left: 590, top: 0, width: 566, height: 300, backgroundColor: C.white, border: `3px solid ${C.water}`, borderRadius: 10, padding: '14px 18px'}}>
        <Enter delay={12} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <ScrollText size={26} color={C.water} />
          <PatrolTitle>不作为</PatrolTitle>
        </Enter>
        <Enter delay={22} style={{marginTop: 8, fontSize: 22, fontWeight: 800}}>违反刑法<ThinU>命令性</ThinU>规定</Enter>
        <Enter delay={32} style={{marginTop: 8, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>例：母亲不喂奶饿死婴儿——违抚养命令</Enter>
      </div>
      <div data-final-knowledge="pair-possession-branch" style={{position: 'absolute', left: 1180, top: 0, width: 596, height: 300, backgroundColor: C.sandSoft, border: `3px solid ${C.sand}`, borderRadius: 10, padding: '14px 18px'}}>
        <Enter delay={18}><LabelBlock ink size={24}>持有型犯罪 ＝ 作为犯罪</LabelBlock></Enter>
        <Enter delay={30} style={{marginTop: 8, fontSize: 20, fontWeight: 700, color: C.inkSoft}}>① 维持持有需<ThinU>积极举动</ThinU> ② 行为本身直接侵害法益——无上缴义务</Enter>
        <Enter delay={42} style={{marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6}}>
          <Chip tone="permit" style={{fontSize: 19, whiteSpace: 'normal'}}>海洛因冲进马桶（没维持）→ 不构成（2006·4）</Chip>
          <Chip tone="warn" style={{fontSize: 19, whiteSpace: 'normal'}}>院墙埋枪知情不动（维持）→ 构成（2014·57）</Chip>
        </Enter>
      </div>

      <div data-final-knowledge="pure-omission-board" style={{position: 'absolute', left: 0, top: 324, width: 876, height: 420, backgroundColor: C.white, border: `4px solid ${C.water}`, borderRadius: 10, padding: '14px 20px'}}>
        <Enter delay={48}><LabelBlock size={25} color={C.water}>真正不作为犯 · 刑法明文只能由不作为构成</LabelBlock></Enter>
        <Enter delay={60} style={{marginTop: 10, display: 'flex', gap: 8, flexWrap: 'wrap'}}>
          <Chip tone="wood" style={{fontSize: 19, whiteSpace: 'normal'}}>丢失枪支不报罪</Chip>
          <Chip tone="wood" style={{fontSize: 19, whiteSpace: 'normal'}}>遗弃罪</Chip>
          <Chip tone="wood" style={{fontSize: 19, whiteSpace: 'normal'}}>拒不支付劳动报酬罪</Chip>
          <Chip tone="wood" style={{fontSize: 19, whiteSpace: 'normal'}}>拒绝提供间谍·恐怖·极端证据罪</Chip>
          <Chip tone="wood" style={{fontSize: 19, whiteSpace: 'normal'}}>拒不执行判决裁定罪</Chip>
          <Chip tone="wood" style={{fontSize: 19, whiteSpace: 'normal'}}>不解救被拐卖绑架妇女儿童罪</Chip>
        </Enter>
        <div data-final-knowledge="pure-manner-trap" style={{marginTop: 14, backgroundColor: C.warnSoft, border: `3px dashed ${C.warn}`, borderRadius: 8, padding: '10px 14px'}}>
          <Enter delay={76} style={{fontSize: 21, fontWeight: 900}}>不履行方式：积极举动·消极静止皆可（扔老父上街＝积极·病床不闻不问＝消极）</Enter>
          <Enter delay={88} style={{marginTop: 6}}><Neg size={21}>别误判：扔上街≠变成不真正不作为犯——遗弃罪仍是真正不作为犯</Neg></Enter>
        </div>
      </div>

      <div data-final-knowledge="impure-omission-board" style={{position: 'absolute', left: 900, top: 324, width: 876, height: 420, backgroundColor: C.white, border: `4px solid ${C.rescue}`, borderRadius: 10, padding: '14px 20px'}}>
        <Enter delay={54}><LabelBlock size={25} color={C.rescue}>不真正不作为犯 · 也可由作为构成·以不作为构成时</LabelBlock></Enter>
        <Enter delay={66} style={{marginTop: 8, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>例：故意杀人——刀捅＝作为·活活饿死婴儿＝不真正不作为犯</Enter>
        <div data-final-knowledge="impure-usual-danger" style={{marginTop: 12, border: `3px solid ${C.ink}`, borderRadius: 8, padding: '10px 14px'}}>
          <Enter delay={80} style={{fontSize: 21, fontWeight: 900}}>作为的两个条件：① 积极制造危险 ② 达到<ThinU>通常性危险</ThinU>（通常能直接导致实害）</Enter>
          <Enter delay={92} style={{marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6}}>
            <Chip style={{fontSize: 19, whiteSpace: 'normal'}}>撞伤乙·不救助逃走 → 不作为（有救助义务不履行）</Chip>
            <Chip style={{fontSize: 19, whiteSpace: 'normal'}}>藏乙草丛后救走 → 积极举动但无通常致命危险·不构成；不救而去 → 不作为杀人</Chip>
          </Enter>
        </div>
        <div data-final-knowledge="impure-concurrence" style={{marginTop: 12, backgroundColor: C.permitSoft, border: `3px solid ${C.permit}`, borderRadius: 8, padding: '10px 14px'}}>
          <Enter delay={106} style={{fontSize: 21, fontWeight: 900, color: C.permit}}>竞合：撤救助装置（不作为×作为）·拉到半空松手 → 最终以<SoftHi style={{fontSize: 20}}>作为论处</SoftHi>（2024）</Enter>
        </div>
      </div>
    </div>
  </Shell>
);
