import type {ReactNode} from 'react';
import {ClipboardCheck, Gavel, GitCompare, Layers, Megaphone, Split, Swords, Users} from 'lucide-react';
import {C, ConsultStamp, Enter, NoteHi, Neg, Shell, ThinU, TriageLabel, Totem, WardChip} from './kit';

const SoftHi = ({children}: {children: ReactNode}) => (
  <span style={{backgroundColor: C.specPurpleSoft, padding: '2px 8px', borderRadius: 4, fontWeight: 900}}>{children}</span>
);

export const MistakePrincipalInstigatorScene = () => (
  <Shell code="07" title="认识错误：正犯没错，共犯错了">
    <div data-layout="mistake-mirror-cabinets" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="mistake-cabinet-pair,separate-judgment-strip" data-focal-rule="each-participant-carries-his-own-mistake" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><GitCompare size={250} color={C.specPurple} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="co-principal-cabinet" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 160, backgroundColor: C.panel, border: `3px solid ${C.chartBlue}`, borderRadius: 6, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 8}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Users size={26} color={C.chartBlue} />
          <TriageLabel size={22}>（一）共同正犯 · 不同构成要件间的打击错误</TriageLabel>
        </Enter>
        <Enter delay={14} style={{fontSize: 19, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <span>对原目标 → <WardChip tone="blue" style={{fontSize: 16}}>未遂</WardChip></span>
          <span>对实害结果 → <WardChip tone="purple" style={{fontSize: 16}}>过失犯罪</WardChip></span>
          <span>→ 按<Split size={22} color={C.specPurple} /><SoftHi>想象竞合</SoftHi>，择一重罪论处</span>
        </Enter>
      </div>

      <div data-final-knowledge="separate-cabinet" style={{position: 'absolute', left: 0, top: 176, width: 1776, bottom: 0, backgroundColor: C.panel, border: `3px solid ${C.specPurple}`, borderRadius: 6, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 10}}>
        <Enter delay={26} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Megaphone size={26} color={C.specPurple} />
          <TriageLabel size={22} color={C.specPurple}>（二）教唆犯/帮助犯 ＋ 正犯：分别判断各自的错误类型</TriageLabel>
        </Enter>
        <Enter delay={38} style={{display: 'flex', gap: 14, flex: 1}}>
          <span style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 7, backgroundColor: C.chartBlueSoft, border: `2px solid ${C.chartBlue}`, borderRadius: 5, padding: '9px 12px'}}>
            <span style={{fontSize: 17, fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: 8}}><ClipboardCheck size={19} color={C.chartBlue} />题1 教唆犯打击错误</span>
            <span style={{fontSize: 17, fontWeight: 700}}>甲教唆乙杀丙；乙在丙住宅周边爆炸，未炸死丙，只炸死丙妻丁</span>
            <span style={{fontSize: 17, fontWeight: 700}}>乙无错误（对丁是放任）→ 故意杀人罪<ThinU color={C.chartBlue}>既遂</ThinU></span>
            <span style={{fontSize: 17, fontWeight: 700}}>甲对丁是过失 → 打击错误；按法定符合说：对丙未遂＋对丁既遂 → 想象竞合定故意杀人罪既遂</span>
          </span>
          <span style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 7, backgroundColor: C.specPurpleSoft, border: `2px solid ${C.specPurple}`, borderRadius: 5, padding: '9px 12px'}}>
            <span style={{fontSize: 17, fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: 8}}><ClipboardCheck size={19} color={C.specPurple} />题2 教唆犯对象错误</span>
            <span style={{fontSize: 17, fontWeight: 700}}>甲欲杀丙，误指着丁对杀手乙说「打死他！」；乙照办打死丁</span>
            <span style={{fontSize: 17, fontWeight: 700}}>乙只机械执行，<Neg size={16}>不存在</Neg>对象错误 → 故意杀人罪既遂</span>
            <span style={{fontSize: 17, fontWeight: 700}}>甲存在<SoftHi>对象错误</SoftHi> → 同样构成故意杀人罪既遂</span>
          </span>
        </Enter>
        <Enter delay={56} style={{fontSize: 17, fontWeight: 700, color: C.inkSoft}}>正犯手上的错归正犯，教唆者心里的错归教唆者——分开算账</Enter>
      </div>
    </div>
  </Shell>
);

export const MistakeInstigatorIndirectScene = () => (
  <Shell code="08" title="教唆犯 × 间接正犯的错误：统一定教唆犯">
    <div data-layout="error-funnel-converge" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="error-converge-funnel,two-model-rows" data-focal-rule="indirect-perpetrator-absorbs-into-instigator-on-error" data-focal-channels="icon,connector,contrast,enclosure" style={{position: 'absolute', inset: 0}}>
      <Totem><Layers size={250} color={C.chartBlue} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="converge-strip" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 128, backgroundColor: C.panel, border: `3px solid ${C.specPurple}`, borderRadius: 6, padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 18}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Layers size={28} color={C.specPurple} />
          <TriageLabel size={23} color={C.specPurple}>处理结论</TriageLabel>
        </Enter>
        <Enter delay={14} style={{fontSize: 23, fontWeight: 950}}>教唆犯与间接正犯之间产生认识错误 → 统一<ConsultStamp delay={22} tone="purple">定教唆犯</ConsultStamp></Enter>
        <Enter delay={26} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft}}>（间接正犯的法益侵害性能<SoftHi>包容评价</SoftHi>为教唆犯）</Enter>
      </div>

      <div data-final-knowledge="model-rows" style={{position: 'absolute', left: 0, top: 144, width: 1776, height: 300, backgroundColor: C.panel, border: `3px solid ${C.chartBlue}`, borderRadius: 6, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 12}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14, backgroundColor: C.chartBlueSoft, border: `2px solid ${C.chartBlue}`, borderRadius: 5, padding: '10px 14px', flex: 1}}>
          <Enter delay={38} style={{display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0}}><Megaphone size={26} color={C.chartBlue} /><WardChip tone="blue" style={{fontSize: 18}}>模型1</WardChip></Enter>
          <Enter delay={48} style={{fontSize: 19, fontWeight: 800}}>以<SoftHi>教唆意思</SoftHi>引诱，实际被引诱者无责任能力 → 定教唆犯既遂</Enter>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 14, backgroundColor: C.specPurpleSoft, border: `2px solid ${C.specPurple}`, borderRadius: 5, padding: '10px 14px', flex: 1}}>
          <Enter delay={58} style={{display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0}}><Swords size={26} color={C.specPurple} /><WardChip tone="purple" style={{fontSize: 18}}>模型2</WardChip></Enter>
          <Enter delay={68} style={{fontSize: 19, fontWeight: 800}}>以<ThinU color={C.specPurple}>间接正犯意思</ThinU>利用，实际被利用者有完全责任能力 → 定教唆犯既遂</Enter>
        </div>
        <Enter delay={78} style={{fontSize: 17, fontWeight: 700, color: C.inkSoft, display: 'inline-flex', alignItems: 'center', gap: 8}}><Gavel size={20} color={C.inkSoft} />两个方向相向而行的错，最后都落进「教唆犯」这一个抽屉</Enter>
      </div>

      <div style={{position: 'absolute', left: 0, top: 460, right: 0, bottom: 0, backgroundColor: C.panel, border: `3px solid ${C.instrumentGray}`, borderRadius: 6, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 14}}>
        <Enter delay={90}><GitCompare size={24} color={C.instrumentGray} /></Enter>
        <Enter delay={98} style={{fontSize: 19, fontWeight: 800}}>记法：间接正犯是教唆犯的<SoftHi>上位</SoftHi>位阶——错进错出，退回下位照样成立</Enter>
      </div>
    </div>
  </Shell>
);
