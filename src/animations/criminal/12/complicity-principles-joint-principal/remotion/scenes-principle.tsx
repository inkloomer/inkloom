import type {ReactNode} from 'react';
import {Baby, BadgeCheck, Ban, BookOpen, ClipboardCheck, Eye, Gavel, Link, ShieldAlert, Unlink, Weight} from 'lucide-react';
import {C, Chip, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp, ThinU} from './kit';

const Totem = ({children}: {children: ReactNode}) => <span style={{position: 'absolute', right: -38, bottom: -58, opacity: 0.08, display: 'inline-flex', pointerEvents: 'none'}}>{children}</span>;

export const JointMeaningPrincipleScene = () => (
  <Shell code="03" title="『共同』『犯罪』·原理拆词">
    <div data-layout="word-meaning-split-board" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="word-fork-meanings,stage-model-rows" data-focal-rule="together-means-linked-fact-making-not-matching-labels" data-focal-channels="icon,connector,contrast,enclosure" style={{position: 'absolute', inset: 0}}>
      <Totem><Link size={250} color={C.indigo} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="word-fork-board" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 112, backgroundColor: C.paper, border: `3px solid ${C.indigo}`, borderRadius: 8, padding: '8px 18px', display: 'flex', alignItems: 'center', gap: 18}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Chip tone="ink" style={{fontSize: 22}}>共同 ＝ 副词「一起去」</Chip>
          <Link size={24} color={C.azurite} />
        </Enter>
        <Enter delay={12} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Chip tone="ink" style={{fontSize: 22}}>犯罪 ＝ 动词「一起制造违法事实」</Chip>
          <ShieldAlert size={24} color={C.poleRed} />
        </Enter>
        <Enter delay={22} style={{fontSize: 19, fontWeight: 800, color: C.inkSoft}}>不是「干坏事并且是可谴责的坏人」的第二阶段概念</Enter>
      </div>

      <div data-final-knowledge="standard-board" style={{position: 'absolute', left: 0, top: 128, width: 876, height: 330, backgroundColor: C.paper, border: `3px solid ${C.azurite}`, borderRadius: 8, padding: '12px 18px'}}>
        <Enter delay={32}><LabelBlock size={23} color={C.azurite}>成立标准 · 看一起性，不看形式相同性</LabelBlock></Enter>
        <Enter delay={44} style={{marginTop: 10, fontSize: 19, fontWeight: 700}}>判断二人是否成立共同犯罪：违法事实是否有<SoftHi style={{fontSize: 18}}>一起性（连带性）</SoftHi>——标准是<ThinU color={C.azurite}>意思联络</ThinU></Enter>
        <Enter delay={58} style={{marginTop: 10, fontSize: 19, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 8}}><Unlink size={20} color={C.poleRed} />同时犯：互不知情同时实行并造成结果</Enter>
        <Enter delay={70} style={{marginTop: 6, fontSize: 18, fontWeight: 700, color: C.inkSoft}}>虽客观行为与主观故意相同，但不属于共同制造违法事实 → <Neg size={18}>不构成共同犯罪</Neg></Enter>
      </div>

      <div data-final-knowledge="three-elements-board" style={{position: 'absolute', left: 900, top: 128, width: 876, height: 330, backgroundColor: C.paper, border: `3px solid ${C.curtain}`, borderRadius: 8, padding: '12px 18px'}}>
        <Enter delay={38}><LabelBlock size={23} color={C.azurite}>成立共同犯罪三要素</LabelBlock></Enter>
        <div style={{marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={50} style={{fontSize: 20, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 10}}><Link size={22} color={C.azurite} />① 意思联络＝「一起干」</Enter>
          <Enter delay={62} style={{fontSize: 20, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 10}}><ShieldAlert size={22} color={C.poleRed} />② 制造违法事实＝「干坏事」</Enter>
          <Enter delay={74} style={{fontSize: 20, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 10}}><Ban size={22} color={C.azurite} />③ 不要求责任年龄·责任能力（对事不对人）</Enter>
        </div>
      </div>

      <div data-final-knowledge="slogan-model-strip" style={{position: 'absolute', left: 0, right: 0, top: 474, bottom: 0, backgroundColor: C.azuriteSoft, border: `3px solid ${C.azurite}`, borderRadius: 8, padding: '12px 22px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 18}}>
          <Enter delay={88}><LabelBlock ink size={24}>两句核心标语</LabelBlock></Enter>
          <Enter delay={98} style={{display: 'inline-flex', alignItems: 'center', gap: 8}}><ClipboardCheck size={20} color={C.azurite} />制造违法事实阶段：<Stamp delay={102} tone="azurite">违法是一起的</Stamp></Enter>
          <Enter delay={110} style={{display: 'inline-flex', alignItems: 'center', gap: 8}}><Weight size={20} color={C.poleRed} />排除责任阶段：<Stamp delay={114}>责任是独立的</Stamp></Enter>
        </div>
        <Enter delay={124} style={{marginTop: 12, fontSize: 19, fontWeight: 700, color: C.inkSoft}}>模型：制造违法事实阶段 二人 ✓✓ → 违法一起；排除责任阶段 实行者×、教唆·帮助·另一实行者 ✓ → 责任独立</Enter>
      </div>
    </div>
  </Shell>
);

export const ChildLookoutCaseScene = () => (
  <Shell code="04" title="10岁儿童与大爷望风案">
    <div data-layout="case-verdict-split-rows" data-visual-anchor="role-pair" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="case-pair-verdicts,system-flaw-contrast" data-focal-rule="unlawful-fact-is-joint-while-blame-stays-individual" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><Baby size={250} color={C.indigo} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="case-head-board" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 118, backgroundColor: C.paper, border: `3px solid ${C.indigo}`, borderRadius: 8, padding: '10px 18px', display: 'flex', alignItems: 'center', gap: 16}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <BookOpen size={26} color={C.indigo} />
          <LabelBlock size={24} color={C.indigo}>案例 · 10岁儿童杀人，大爷望风</LabelBlock>
        </Enter>
        <Enter delay={14} style={{fontSize: 21, fontWeight: 800}}>二人一起制造了违法事实 → 属于<SoftHi style={{fontSize: 20}}>共同违法</SoftHi></Enter>
      </div>

      <div style={{position: 'absolute', left: 0, top: 134, width: 1776, height: 288, display: 'flex', gap: 20}}>
        <div data-final-knowledge="child-verdict-card" style={{flex: 1, backgroundColor: C.paper, border: `3px solid ${C.azurite}`, borderRadius: 8, padding: '12px 16px'}}>
          <Enter delay={24} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <Baby size={24} color={C.azurite} />
            <LabelBlock size={23} color={C.azurite}>儿童定性</LabelBlock>
          </Enter>
          <Enter delay={36} style={{marginTop: 8, fontSize: 19, fontWeight: 700}}>不具责任年龄 → 排除可谴责性 → <Stamp delay={48} tone="azurite">不负刑事责任</Stamp></Enter>
          <Enter delay={58} style={{marginTop: 8, fontSize: 19, fontWeight: 800}}>但在「制造违法事实」意义上＝<SoftHi style={{fontSize: 18}}>实行犯</SoftHi></Enter>
        </div>
        <div data-final-knowledge="elder-verdict-card" style={{flex: 1, backgroundColor: C.paper, border: `3px solid ${C.curtain}`, borderRadius: 8, padding: '12px 16px'}}>
          <Enter delay={30} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <Eye size={24} color={C.azurite} />
            <LabelBlock size={23} color={C.azurite}>大爷定性</LabelBlock>
          </Enter>
          <Enter delay={42} style={{marginTop: 8, fontSize: 19, fontWeight: 700}}>应负刑事责任</Enter>
          <Enter delay={54} style={{marginTop: 8, fontSize: 19, fontWeight: 800}}>构成故意杀人罪的<Chip tone="curtain" style={{fontSize: 19}}>帮助犯</Chip></Enter>
        </div>
      </div>

      <div data-final-knowledge="soviet-flaw-board" style={{position: 'absolute', left: 0, right: 0, top: 438, bottom: 0, display: 'flex', gap: 20}}>
        <div style={{flex: 1, backgroundColor: C.paper, border: `3px dashed ${C.poleRed}`, borderRadius: 8, padding: '12px 16px'}}>
          <Enter delay={66} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <Gavel size={22} color={C.poleRed} />
            <LabelBlock size={22} color={C.poleRed}>苏联版四要件的不足</LabelBlock>
          </Enter>
          <div style={{marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6}}>
            <Enter delay={78} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft}}>主体必须有责任年龄＋责任能力 → 儿童直接无罪</Enter>
            <Enter delay={88} style={{fontSize: 18, fontWeight: 700}}><Neg size={18}>大爷：不能定帮助犯（帮助犯不能单独存在），也不能定间接正犯（缺支配力）→ 处罚漏洞</Neg></Enter>
          </div>
        </div>
        <div style={{flex: 1, backgroundColor: C.azuriteSoft, border: `3px solid ${C.azurite}`, borderRadius: 8, padding: '12px 16px'}}>
          <Enter delay={72} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <BadgeCheck size={22} color={C.azurite} />
            <LabelBlock size={22} color={C.azurite}>中国化改良版结论</LabelBlock>
          </Enter>
          <Enter delay={84} style={{marginTop: 8, fontSize: 19, fontWeight: 800}}>成立共同犯罪＝一起制造<ThinU color={C.azurite}>违法事实</ThinU>（对事不对人）</Enter>
          <Enter delay={96} style={{marginTop: 6, fontSize: 18, fontWeight: 700, color: C.inkSoft}}>责任个别评价：儿童无罪 · 大爷照罚</Enter>
        </div>
      </div>
    </div>
  </Shell>
);
