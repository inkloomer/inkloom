import type {ReactNode} from 'react';
import {Ban, BookOpen, ClipboardCheck, Crown, FileSearch, GraduationCap, Handshake, Link, Scale, Target, UserX, Users} from 'lucide-react';
import {C, Chip, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp, ThinU} from './kit';

const Totem = ({children}: {children: ReactNode}) => <span style={{position: 'absolute', right: -38, bottom: -58, opacity: 0.08, display: 'inline-flex', pointerEvents: 'none'}}>{children}</span>;

export const NegligenceThreeTheoriesScene = () => (
  <Shell code="07" title="打野猪案·过失联合三说">
    <div data-layout="theory-triptych-quiz-strip" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="three-theory-duel,quiz-verdict-strip" data-focal-rule="negligent-concert-stays-unlinked-yet-answerable" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><Scale size={250} color={C.indigo} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="boar-case-strip" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 104, backgroundColor: C.paper, border: `3px solid ${C.indigo}`, borderRadius: 8, padding: '8px 18px', display: 'flex', alignItems: 'center', gap: 16}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Target size={24} color={C.indigo} />
          <LabelBlock size={23} color={C.indigo}>打野猪案</LabelBlock>
        </Enter>
        <Enter delay={14} style={{fontSize: 20, fontWeight: 700, color: C.inkSoft}}>甲乙有<ThinU>意思联络</ThinU>，一起向"野猪"开枪，不慎打死行人丙；只有致命一枪，<SoftHi style={{fontSize: 19}}>无法查明谁打</SoftHi></Enter>
      </div>

      <div style={{position: 'absolute', left: 0, top: 120, width: 1776, height: 372, display: 'flex', gap: 16}}>
        <div data-final-knowledge="theory-minority-innocent" style={{flex: 1, backgroundColor: C.paper, border: `3px solid ${C.ghost}`, borderRadius: 8, padding: '12px 16px'}}>
          <Enter delay={24} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <Ban size={22} color={C.inkSoft} />
            <LabelBlock size={21} color={C.inkSoft}>① 要求故意且无罪说</LabelBlock>
            <Chip tone="paper" style={{fontSize: 16}}>少数说</Chip>
          </Enter>
          <Enter delay={36} style={{marginTop: 8, fontSize: 19, fontWeight: 800}}><Stamp delay={40} tone="azurite">甲乙都无罪</Stamp></Enter>
          <Enter delay={50} style={{marginTop: 8, fontSize: 18, fontWeight: 700, color: C.inkSoft}}>25条：共同犯罪＝共同故意；共同过失不以共犯论 → 单独处理 → 存疑有利于被告</Enter>
          <Enter delay={62} style={{marginTop: 8}}><Neg size={18}>不足：一起打死人都无罪，不符实质正义</Neg></Enter>
        </div>
        <div data-final-knowledge="theory-minority-liable" style={{flex: 1, backgroundColor: C.paper, border: `3px solid ${C.ghost}`, borderRadius: 8, padding: '12px 16px'}}>
          <Enter delay={30} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <Link size={22} color={C.azurite} />
            <LabelBlock size={21} color={C.azurite}>② 不要求故意且有罪说</LabelBlock>
            <Chip tone="paper" style={{fontSize: 16}}>少数说</Chip>
          </Enter>
          <Enter delay={42} style={{marginTop: 8, fontSize: 19, fontWeight: 800}}>过失致人死亡罪的<Chip tone="azurite" style={{fontSize: 17}}>共同犯罪</Chip></Enter>
          <Enter delay={54} style={{marginTop: 8, fontSize: 18, fontWeight: 700, color: C.inkSoft}}>只要求意思联络＋一起制造违法事实，主观可故意可过失 → 部分实行全部负责</Enter>
          <Enter delay={66} style={{marginTop: 8}}><Neg size={18}>不足：违反刑法25条，不符形式正义</Neg></Enter>
        </div>
        <div data-final-knowledge="theory-majority" style={{flex: 1.15, backgroundColor: C.azuriteSoft, border: `3px solid ${C.azurite}`, borderRadius: 8, padding: '12px 16px'}}>
          <Enter delay={36} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <Scale size={22} color={C.azurite} />
            <LabelBlock size={21} color={C.azurite}>③ 要求故意且有罪说</LabelBlock>
            <Chip tone="azurite" style={{fontSize: 16}}>多数说·结果归责说</Chip>
          </Enter>
          <Enter delay={48} style={{marginTop: 8, fontSize: 18, fontWeight: 800}}><Neg size={18}>不成立共同犯罪</Neg>，各自单独构成<Chip tone="poleRed" style={{fontSize: 16}}>过失致人死亡罪</Chip></Enter>
          <div style={{marginTop: 8, display: 'flex', flexDirection: 'column', gap: 4}}>
            <Enter delay={60} style={{fontSize: 17, fontWeight: 700, color: C.inkSoft}}>理由1 过失帮助：A过失帮助B制造结果→A负责（借车案→交通肇事罪单独正犯）</Enter>
            <Enter delay={70} style={{fontSize: 17, fontWeight: 700, color: C.inkSoft}}>理由2 心理性贡献：有意思联络＝对对方过失行为有心理加持 → 对结果负责</Enter>
            <Enter delay={80} style={{fontSize: 17, fontWeight: 700, color: C.inkSoft}}>地位：实质＋形式正义兼得，法考多数说</Enter>
          </div>
        </div>
      </div>

      <div data-final-knowledge="exam-quiz-strip" style={{position: 'absolute', left: 0, right: 0, top: 508, bottom: 0, backgroundColor: C.paper, border: `3px solid ${C.curtain}`, borderRadius: 8, padding: '10px 22px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap'}}>
          <Enter delay={92} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <GraduationCap size={22} color={C.azurite} />
            <LabelBlock size={21} color={C.azurite}>法考真题</LabelBlock>
          </Enter>
          <Enter delay={102} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft}}>甲乙丙共同故意伤害丁致死；只有一处致命伤、可排除丙造成，但查不清甲乙谁的</Enter>
        </div>
        <Enter delay={114} style={{marginTop: 8, fontSize: 19, fontWeight: 800}}>答案 <Stamp delay={118} tone="azurite">D：均成立故意伤害(致死)，与存疑时有利于被告并不矛盾</Stamp></Enter>
        <Enter delay={130} style={{marginTop: 6, fontSize: 17, fontWeight: 700, color: C.inkSoft}}>官方采纳多数说：甲乙相互心理性贡献 → 对死亡负责；丙对甲乙有心理性贡献 → 也要负责；三人构成故意伤害共犯，各自单独构成结果加重犯</Enter>
      </div>
    </div>
  </Shell>
);

export const CoPrincipalVariantsScene = () => (
  <Shell code="08" title="共同正犯的种类">
    <div data-layout="variant-boards-duo" data-visual-anchor="concept-icon" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="physical-versus-psychic-variants,boss-power-boundary" data-focal-rule="key-contributors-count-as-co-principals-beyond-executors" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><Users size={250} color={C.indigo} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="variants-head-strip" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 100, backgroundColor: C.paper, border: `3px solid ${C.azurite}`, borderRadius: 8, padding: '8px 18px', display: 'flex', alignItems: 'center', gap: 16}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Users size={24} color={C.azurite} />
          <LabelBlock size={23} color={C.azurite}>共同正犯 ≠ 只有共同实行犯</LabelBlock>
        </Enter>
        <Enter delay={14} style={{fontSize: 20, fontWeight: 800}}>不是实行犯、但起到<SoftHi style={{fontSize: 19}}>关键作用</SoftHi>的犯罪人 → 也定共同正犯</Enter>
      </div>

      <div data-final-knowledge="physical-variant-board" style={{position: 'absolute', left: 0, top: 116, width: 876, height: 352, backgroundColor: C.paper, border: `3px solid ${C.azurite}`, borderRadius: 8, padding: '12px 18px'}}>
        <Enter delay={24} style={{display: 'flex', alignItems: 'center', gap: 8}}>
          <Handshake size={22} color={C.azurite} />
          <LabelBlock size={22} color={C.azurite}>物理作用型共同正犯</LabelBlock>
        </Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={36} style={{fontSize: 19, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}>作用<ThinU color={C.azurite}>大于</ThinU>一般帮助犯：如从后面<SoftHi style={{fontSize: 18}}>死死抱住被害人</SoftHi></Enter>
          <Enter delay={48} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft}}>定帮助犯 → 从犯量刑太轻；定共同正犯 → 可按<Chip tone="curtain" style={{fontSize: 16}}>主犯</Chip>处罚</Enter>
          <Enter delay={60} style={{fontSize: 18, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><ClipboardCheck size={17} color={C.azurite} />题1 甲撬保险柜门·乙拿钱 → 乙实行犯，甲<Chip tone="azurite" style={{fontSize: 16}}>共同正犯</Chip></Enter>
          <Enter delay={72} style={{fontSize: 18, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><ClipboardCheck size={17} color={C.azurite} />题2 甲堵胡同·乙杀人 → 乙共同实行犯，甲<Chip tone="azurite" style={{fontSize: 16}}>共同正犯</Chip></Enter>
        </div>
      </div>

      <div data-final-knowledge="conspiracy-board" style={{position: 'absolute', left: 900, top: 116, width: 876, height: 352, backgroundColor: C.paper, border: `3px solid ${C.curtain}`, borderRadius: 8, padding: '12px 18px'}}>
        <Enter delay={30} style={{display: 'flex', alignItems: 'center', gap: 8}}>
          <FileSearch size={22} color={C.azurite} />
          <LabelBlock size={22} color={C.azurite}>心理作用型 · 共谋共同正犯</LabelBlock>
        </Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={42} style={{fontSize: 18, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><UserX size={18} color={C.poleRed} />意外缺席型：共谋盗窃后甲出车祸未去，乙既遂 → 甲=共谋共同正犯，对既遂<Chip tone="azurite" style={{fontSize: 16}}>负责·也既遂</Chip></Enter>
          <Enter delay={54} style={{fontSize: 18, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><FileSearch size={18} color={C.azurite} />幕后策划型：甲设计盗窃方案·乙执行既遂 → 甲=共谋共同正犯·既遂</Enter>
          <Enter delay={66} style={{fontSize: 18, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Crown size={18} color={C.curtain} />老大指派型：黑社会老大指派小弟犯罪 → 作用<ThinU color={C.azurite}>大于教唆犯</ThinU>（组织权势），未达间接正犯强制支配 → 共同正犯·可按主犯罚</Enter>
        </div>
      </div>

      <div data-final-knowledge="limit-strip" style={{position: 'absolute', left: 0, right: 0, top: 484, bottom: 0, backgroundColor: C.poleRedSoft, border: `3px dashed ${C.poleRed}`, borderRadius: 8, padding: '10px 22px', display: 'flex', alignItems: 'center', gap: 16}}>
        <Enter delay={78}><LabelBlock size={22} color={C.poleRed}>适用限制</LabelBlock></Enter>
        <Enter delay={88} style={{fontSize: 19, fontWeight: 800}}>「老大」只能指<SoftHi style={{fontSize: 18}}>犯罪组织</SoftHi>的老大</Enter>
        <Enter delay={98} style={{fontSize: 19, fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: 8}}><Neg size={19}>只有甲乙两人、甲是大哥指派乙 → 甲只能是教唆犯</Neg></Enter>
        <Enter delay={108}><BookOpen size={20} color={C.indigo} /></Enter>
      </div>
    </div>
  </Shell>
);
