import type {ReactNode} from 'react';
import {AlertTriangle, Ban, Brain, Flame, Gavel, Hourglass, Scale, Split, TrendingUp, Users} from 'lucide-react';
import {C, BenchTitle, BeamArrow, Enter, Neg, PillarLabel, Seal, Shell, ThinU, Totem, WeighChip} from './kit';

const SoftHiInline = ({children}: {children: ReactNode}) => (
  <span style={{backgroundColor: C.benchTealSoft, padding: '2px 8px', borderRadius: 3, fontWeight: 900}}>{children}</span>
);

export const TwoStageEvaluationScene = () => (
  <Shell code="01" title="两阶段评价：违法一起，责任独立">
    <div data-layout="two-tier-bench" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,stamp" data-visual-grammar="two-tier-evaluation-bench,perpetrator-conditions-strip" data-focal-rule="illicity-is-joint-responsibility-is-individual" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><Scale size={250} color={C.benchTeal} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="head-strip" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 108, backgroundColor: C.panel, border: `3px solid ${C.benchTeal}`, borderRadius: 6, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 22}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Flame size={26} color={C.benchTeal} />
          <PillarLabel size={24} color={C.benchTeal}>共同犯罪的核心定性</PillarLabel>
        </Enter>
        <Enter delay={12} style={{fontSize: 22, fontWeight: 800}}>一起<SoftHiInline>制造违法事实</SoftHiInline></Enter>
        <Enter delay={22} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Gavel size={26} color={C.vermilion} />
          <PillarLabel size={24} color={C.vermilion}>排除责任（谴责）阶段</PillarLabel>
        </Enter>
        <Enter delay={32} style={{fontSize: 22, fontWeight: 800}}>评价原则＝<ThinU color={C.vermilion}>独立评价</ThinU></Enter>
      </div>

      <div data-final-knowledge="conditions-board" style={{position: 'absolute', left: 0, top: 126, width: 1050, height: 320, backgroundColor: C.panel, border: `3px solid ${C.benchTeal}`, borderRadius: 6, padding: '14px 20px'}}>
        <Enter delay={38}><PillarLabel size={24}>正犯（实行犯）的成立条件</PillarLabel></Enter>
        <div style={{marginTop: 16, display: 'flex', flexDirection: 'column', gap: 14}}>
          <Enter delay={50} style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.benchTealSoft, border: `2px solid ${C.benchTeal}`, borderRadius: 4, padding: '10px 14px'}}>
            <Flame size={26} color={C.benchTeal} />
            <span style={{fontSize: 21, fontWeight: 800}}>① 通过实行行为<SoftHiInline>制造违法事实</SoftHiInline>即可</span>
          </Enter>
          <Enter delay={62} style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.bronzeSoft, border: `2px solid ${C.bronze}`, borderRadius: 4, padding: '10px 14px'}}>
            <Hourglass size={26} color={C.bronze} />
            <span style={{fontSize: 21, fontWeight: 800}}>② 责任年龄 · 责任能力</span>
            <Seal delay={70} tone="bronze">在所不问</Seal>
          </Enter>
          <Enter delay={74} style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.bronzeSoft, border: `2px solid ${C.bronze}`, borderRadius: 4, padding: '10px 14px'}}>
            <Brain size={26} color={C.bronze} />
            <span style={{fontSize: 21, fontWeight: 800}}>有无责任能力</span>
            <span style={{fontSize: 19, fontWeight: 700, color: C.inkSoft}}>不追问，留给下一阶段</span>
          </Enter>
        </div>
      </div>

      <div data-final-knowledge="evaluation-board" style={{position: 'absolute', left: 1072, top: 126, width: 704, height: 320, backgroundColor: C.panel, border: `3px solid ${C.vermilion}`, borderRadius: 6, padding: '14px 20px'}}>
        <Enter delay={44} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Split size={26} color={C.vermilion} />
          <PillarLabel size={24} color={C.vermilion}>评价的先后两段</PillarLabel>
        </Enter>
        <div style={{marginTop: 16, display: 'flex', flexDirection: 'column', gap: 14}}>
          <Enter delay={56} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Users size={26} color={C.benchTeal} />
            <WeighChip tone="teal" style={{fontSize: 19}}>违法阶段</WeighChip>
            <span style={{fontSize: 21, fontWeight: 800}}>一起评价 → 可成立共同正犯</span>
          </Enter>
          <Enter delay={68} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Gavel size={26} color={C.vermilion} />
            <WeighChip tone="vermilion" style={{fontSize: 19}}>责任阶段</WeighChip>
            <span style={{fontSize: 21, fontWeight: 800}}>各自独立评价 → 有责者担责</span>
          </Enter>
          <Enter delay={80} style={{fontSize: 19, fontWeight: 700, color: C.inkSoft}}>先问「违法是否一起制造」，再逐人问「能否被谴责」</Enter>
        </div>
      </div>

      <div data-final-knowledge="verdict-strip" style={{position: 'absolute', left: 0, right: 0, top: 464, bottom: 0, backgroundColor: C.panel, border: `3px solid ${C.bronze}`, borderRadius: 6, padding: '12px 22px', display: 'flex', alignItems: 'center', gap: 18}}>
        <Enter delay={92}><BenchTitle>口诀</BenchTitle></Enter>
        <Enter delay={102} style={{fontSize: 24, fontWeight: 900}}>违法是<Seal delay={106} tone="teal">一起</Seal>的，责任是<Seal delay={112} tone="vermilion">各自</Seal>的</Enter>
        <Enter delay={116} style={{fontSize: 20, fontWeight: 800, color: C.inkSoft}}>正犯资格只看制造违法，年龄与能力挡不住「正犯」身份</Enter>
      </div>
    </div>
  </Shell>
);

export const AgeGapCoPrincipalsScene = () => (
  <Shell code="02" title="共同正犯：20岁甲 ＋ 10岁乙">
    <div data-layout="age-contrast-rail" data-visual-anchor="boundary" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="three-tier-rail,four-element-defect-note" data-focal-rule="joint-perpetration-splits-into-tiered-verdicts" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><Users size={250} color={C.benchTeal} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="age-head-strip" style={{position: 'absolute', left: 0, top: 0, width: 1150, height: 104, backgroundColor: C.panel, border: `3px solid ${C.benchTeal}`, borderRadius: 6, padding: '10px 18px', display: 'flex', alignItems: 'center', gap: 14}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 8}}>
          <Users size={26} color={C.benchTeal} />
          <PillarLabel size={23}>共同正犯·责任年龄差异</PillarLabel>
        </Enter>
        <Enter delay={12}><WeighChip tone="teal" style={{fontSize: 19}}>甲 20岁·有责任年龄</WeighChip></Enter>
        <Enter delay={20}><WeighChip tone="paper" style={{fontSize: 19}}>乙 10岁·无责任年龄</WeighChip></Enter>
      </div>

      <div data-final-knowledge="tier-rail" style={{position: 'absolute', left: 0, top: 120, width: 1150, height: 448, backgroundColor: C.panel, border: `3px solid ${C.bronze}`, borderRadius: 6, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 10}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 10, backgroundColor: C.benchTealSoft, border: `2px solid ${C.benchTeal}`, borderRadius: 4, padding: '9px 12px', flex: 1}}>
          <Enter delay={30} style={{display: 'flex', alignItems: 'center', gap: 8}}><Users size={24} color={C.benchTeal} /></Enter>
          <Enter delay={34}><WeighChip tone="teal" style={{fontSize: 18}}>客观行为阶段</WeighChip></Enter>
          <Enter delay={42} style={{fontSize: 20, fontWeight: 800}}>违法具有一起性 → 二人构成该阶段的<SoftHiInline>共同正犯</SoftHiInline></Enter>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 10, backgroundColor: C.vermilionSoft, border: `2px solid ${C.vermilion}`, borderRadius: 4, padding: '9px 12px', flex: 1.35}}>
          <Enter delay={52} style={{display: 'flex', alignItems: 'center', gap: 8}}><Gavel size={24} color={C.vermilion} /></Enter>
          <Enter delay={56}><WeighChip tone="vermilion" style={{fontSize: 18}}>排除责任阶段</WeighChip></Enter>
          <Enter delay={64} style={{display: 'flex', flexDirection: 'column', gap: 6}}>
            <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 20, fontWeight: 800}}><Ban size={22} color={C.vermilion} />10岁：最终判定为无罪</span>
            <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 20, fontWeight: 800}}><Users size={22} color={C.benchTeal} />20岁：构成该罪的共同实行犯</span>
          </Enter>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 10, backgroundColor: C.bronzeSoft, border: `2px solid ${C.bronze}`, borderRadius: 4, padding: '9px 12px', flex: 1}}>
          <Enter delay={76} style={{display: 'flex', alignItems: 'center', gap: 8}}><TrendingUp size={24} color={C.bronze} /></Enter>
          <Enter delay={80}><WeighChip tone="bronze" style={{fontSize: 18}}>量刑适用</WeighChip></Enter>
          <Enter delay={88} style={{fontSize: 20, fontWeight: 800}}>适用共同犯罪加重情节：按<ThinU color={C.vermilion}>「轮奸」</ThinU>情节<Seal delay={92} tone="vermilion">加重处罚</Seal></Enter>
        </div>
      </div>

      <div data-final-knowledge="defect-note" style={{position: 'absolute', left: 1172, top: 0, width: 604, height: 568, backgroundColor: C.panel, border: `3px dashed ${C.vermilion}`, borderRadius: 6, padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 12}}>
        <Enter delay={16} style={{display: 'flex', alignItems: 'center', gap: 8}}>
          <AlertTriangle size={26} color={C.vermilion} />
          <PillarLabel size={23} color={C.vermilion}>理论对比 · 四要件体系的缺陷</PillarLabel>
        </Enter>
        <Enter delay={28} style={{fontSize: 19, fontWeight: 700}}>若按四要件：无责任年龄者<ThinU color={C.vermilion}>一开始就无罪</ThinU></Enter>
        <Enter delay={38} style={{fontSize: 19, fontWeight: 700}}><Neg size={19}>只能单独处理有责任年龄者</Neg></Enter>
        <Enter delay={48} style={{fontSize: 19, fontWeight: 700}}><Neg size={19}>无法适用「轮奸」等加重处罚</Neg></Enter>
        <Enter delay={58} style={{marginTop: 'auto'}}><Seal delay={58} tone="vermilion">结论不妥当</Seal></Enter>
        <Enter delay={68} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft}}>阶层体系：违法一起评价，10岁者不挡 20岁者适用加重</Enter>
      </div>

      <div style={{position: 'absolute', left: 0, top: 586, right: 0, bottom: 0, backgroundColor: C.panel, border: `3px solid ${C.bronze}`, borderRadius: 6, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 14}}>
        <Enter delay={96}><BeamArrow delay={96} color={C.benchTeal} /></Enter>
        <Enter delay={102} style={{fontSize: 20, fontWeight: 800}}>年龄差异不改变「违法一起」——只改写<SoftHiInline>责任阶段</SoftHiInline>的结论</Enter>
      </div>
    </div>
  </Shell>
);
