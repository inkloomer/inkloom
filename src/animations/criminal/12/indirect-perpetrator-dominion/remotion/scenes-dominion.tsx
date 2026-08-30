import type {ReactNode} from 'react';
import {Baby, BookOpen, Brain, Drama, Hand, ShieldAlert, Siren} from 'lucide-react';
import {C, Chip, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp, ThinU} from './kit';

const Totem = ({children}: {children: ReactNode}) => <span style={{position: 'absolute', right: -38, bottom: -58, opacity: 0.08, display: 'inline-flex', pointerEvents: 'none'}}>{children}</span>;

export const CoercionModesScene = () => (
  <Shell code="03" title="强制手段·三情形">
    <div data-layout="coercion-triptych-rows" data-visual-anchor="typographic-sequence" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="coercion-triad-rows,tool-vs-reflex-fork" data-focal-rule="forced-bodies-become-the-perpetrator-instruments" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><Hand size={250} color={C.lineIndigo} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="coerce-minor-card" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 216, backgroundColor: C.paper, border: `3px solid ${C.alertRed}`, borderRadius: 8, padding: '12px 18px'}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Baby size={24} color={C.alertRed} />
          <LabelBlock size={23} color={C.alertRed}>① 迫使无责任年龄的人实施犯罪（如8岁小孩）</LabelBlock>
        </Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6}}>
          <Enter delay={14} style={{fontSize: 19, fontWeight: 700}}>构成<ThinU color={C.alertRed}>本罪</ThinU>（拐骗儿童罪）＋ 被强迫罪（盗窃罪）的<Chip tone="alert" style={{fontSize: 17}}>间接正犯</Chip></Enter>
          <Enter delay={26} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft}}>支配力来源：小孩沦为行为人的<SoftHi style={{fontSize: 17}}>犯罪工具</SoftHi></Enter>
          <Enter delay={38} style={{fontSize: 18, fontWeight: 700}}>如果是<ThinU>欺骗</ThinU>而非迫使 → 同样构成间接正犯（借欺骗获得支配力）</Enter>
        </div>
      </div>

      <div data-final-knowledge="coerce-adult-card" style={{position: 'absolute', left: 0, top: 232, width: 1776, height: 216, backgroundColor: C.paper, border: `3px solid ${C.lineIndigo}`, borderRadius: 8, padding: '12px 18px'}}>
        <Enter delay={48} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Siren size={24} color={C.lineIndigo} />
          <LabelBlock size={23} color={C.lineIndigo}>② 强迫他人实施犯罪（持枪逼迫猥亵 · 狱警强迫虐待）</LabelBlock>
        </Enter>
        <div style={{marginTop: 12, display: 'flex', gap: 16}}>
          <Enter delay={60} style={{flex: 1, backgroundColor: C.alertRedSoft, border: `3px solid ${C.alertRed}`, borderRadius: 8, padding: '8px 14px', fontSize: 19, fontWeight: 800}}>强迫者 → 构成对应犯罪的<Chip tone="alert" style={{fontSize: 16}}>间接正犯</Chip></Enter>
          <Enter delay={72} style={{flex: 1, backgroundColor: C.kiteJadeSoft, border: `3px solid ${C.kiteJade}`, borderRadius: 8, padding: '8px 14px', fontSize: 19, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 8}}><ShieldAlert size={18} color={C.kiteJade} />被迫者 → 可构成受强制的<ThinU color={C.kiteJade}>紧急避险</ThinU></Enter>
        </div>
      </div>

      <div data-final-knowledge="coerce-victim-card" style={{position: 'absolute', left: 0, top: 464, width: 1776, height: 280, backgroundColor: C.paper, border: `3px solid ${C.apricot}`, borderRadius: 8, padding: '12px 18px'}}>
        <Enter delay={84} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <BookOpen size={22} color={C.apricot} />
          <LabelBlock size={23} color={C.apricot}>③ 强迫被害人实施自损行为（皇帝逼迫大臣自杀）</LabelBlock>
        </Enter>
        <Enter delay={96} style={{marginTop: 12, fontSize: 20, fontWeight: 800}}>强迫者对被害人具有<SoftHi style={{fontSize: 19}}>支配力</SoftHi> → 构成<Stamp delay={104} tone="alert">故意杀人罪的间接正犯</Stamp></Enter>
        <Enter delay={116} style={{marginTop: 10, fontSize: 18, fontWeight: 700, color: C.inkSoft, display: 'flex', alignItems: 'center', gap: 8}}><Drama size={18} color={C.apricot} />被害人自己动手 ≠ 免除强迫者的正犯责任：人身被挟持时，行动的工具仍是强迫者的手</Enter>
      </div>
    </div>
  </Shell>
);

export const DeceptionModesScene = () => (
  <Shell code="04" title="欺骗手段·四情形">
    <div data-layout="deception-four-bay" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="deceit-four-bays,model-borrowed-intent" data-focal-rule="borrowed-intent-conceals-the-dominating-deceiver" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><Drama size={250} color={C.lineIndigo} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="deception-head-strip" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 100, backgroundColor: C.paper, border: `3px solid ${C.apricot}`, borderRadius: 8, padding: '8px 18px', display: 'flex', alignItems: 'center', gap: 16}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Drama size={24} color={C.apricot} />
          <LabelBlock size={23} color={C.apricot}>欺骗手段 · 核心行为模型</LabelBlock>
        </Enter>
        <Enter delay={14} style={{fontSize: 20, fontWeight: 800}}>利用他人犯<Chip tone="line" style={{fontSize: 17}}>A罪</Chip>的故意，实现自己犯<Chip tone="alert" style={{fontSize: 17}}>B罪</Chip>的间接正犯目的</Enter>
      </div>

      <div data-final-knowledge="lure-incapable-card" style={{position: 'absolute', left: 0, top: 116, width: 876, height: 296, backgroundColor: C.paper, border: `3px solid ${C.lineIndigo}`, borderRadius: 8, padding: '10px 16px'}}>
        <Enter delay={24} style={{display: 'flex', alignItems: 'center', gap: 8}}>
          <Brain size={22} color={C.lineIndigo} />
          <LabelBlock size={21} color={C.lineIndigo}>① 引诱无责任年龄·能力的人</LabelBlock>
        </Enter>
        <Enter delay={36} style={{marginTop: 8, fontSize: 18, fontWeight: 700}}>如引诱<SoftHi style={{fontSize: 17}}>精神病患者</SoftHi>实施犯罪 → 构成相应罪的间接正犯</Enter>
        <Enter delay={48} style={{marginTop: 6, fontSize: 17, fontWeight: 700, color: C.inkSoft}}>原因：被引诱者缺乏辨认能力，被当作犯罪工具</Enter>
      </div>

      <div data-final-knowledge="exploit-negligence-card" style={{position: 'absolute', left: 900, top: 116, width: 876, height: 296, backgroundColor: C.paper, border: `3px solid ${C.apricot}`, borderRadius: 8, padding: '10px 16px'}}>
        <Enter delay={30} style={{display: 'flex', alignItems: 'center', gap: 8}}>
          <ShieldAlert size={22} color={C.apricot} />
          <LabelBlock size={21} color={C.apricot}>② 利用他人有过失的行为</LabelBlock>
        </Enter>
        <Enter delay={42} style={{marginTop: 8, fontSize: 17, fontWeight: 700}}>医生毒针案：医生=故意杀人<Chip tone="alert" style={{fontSize: 15}}>间接正犯</Chip>；护士=医疗事故罪</Enter>
        <Enter delay={54} style={{marginTop: 6, fontSize: 17, fontWeight: 700}}>谎称野兽案：开枪者=过失致人死亡；欺骗者=故意杀人<Chip tone="alert" style={{fontSize: 15}}>间接正犯</Chip></Enter>
      </div>

      <div data-final-knowledge="exploit-intent-card" style={{position: 'absolute', left: 0, top: 428, width: 876, height: 316, backgroundColor: C.paper, border: `3px solid ${C.kiteJade}`, borderRadius: 8, padding: '10px 16px'}}>
        <Enter delay={62} style={{display: 'flex', alignItems: 'center', gap: 8}}>
          <Brain size={22} color={C.kiteJade} />
          <LabelBlock size={21} color={C.kiteJade}>③ 利用他人有故意的行为</LabelBlock>
        </Enter>
        <div style={{marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6}}>
          <Enter delay={74} style={{fontSize: 16, fontWeight: 700}}>屏风案：开枪者=故意毁坏财物(实行犯)+过失致人死亡→<ThinU color={C.kiteJade}>想象竞合</ThinU>；唆使者=毁坏财物教唆犯+故意杀人间接正犯→想象竞合</Enter>
          <Enter delay={86} style={{fontSize: 16, fontWeight: 700}}>假毒品案：代卖者不构成贩卖毒品(不能犯)·不构成诈骗(无故意)；欺骗者=诈骗罪间接正犯</Enter>
          <Enter delay={98} style={{fontSize: 16, fontWeight: 700}}>血友病案：打人者=故意伤害(死亡=意外事件)；指使者=故意杀人间接正犯</Enter>
        </div>
      </div>

      <div data-final-knowledge="victim-selfharm-card" style={{position: 'absolute', left: 900, top: 428, width: 876, height: 316, backgroundColor: C.paper, border: `3px solid ${C.alertRed}`, borderRadius: 8, padding: '10px 16px'}}>
        <Enter delay={68} style={{display: 'flex', alignItems: 'center', gap: 8}}>
          <Drama size={22} color={C.alertRed} />
          <LabelBlock size={21} color={C.alertRed}>④ 欺骗被害人实施自损</LabelBlock>
        </Enter>
        <div style={{marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6}}>
          <Enter delay={80} style={{fontSize: 16, fontWeight: 700}}>谎称宠物染病案：骗主人丢弃宠物 → 故意毁坏财物罪间接正犯</Enter>
          <Enter delay={92} style={{fontSize: 16, fontWeight: 700}}>邻居唆使假上吊案：利用杀人故意的建议致死 → 达到杀人目的的间接正犯</Enter>
          <Enter delay={104} style={{fontSize: 16, fontWeight: 700}}>谎称安全指引案：明知陷阱骗人开车致死 → <Chip tone="alert" style={{fontSize: 15}}>故意杀人罪间接正犯</Chip></Enter>
          <Enter delay={116}><Neg size={17}>欺骗者均构成所欲达成犯罪的间接正犯</Neg></Enter>
        </div>
      </div>
    </div>
  </Shell>
);
