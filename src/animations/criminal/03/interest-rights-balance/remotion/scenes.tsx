import {Anchor, Compass, Crosshair, Gavel, GraduationCap, KeyRound, Milestone, ScrollText} from 'lucide-react';
import {Chip, C, Dash, Enter, LabelBlock, Neg, Seal, Shell, SoftHi, CounterTitle, ThinU} from './kit';

export const ObjectInterestRowsScene = () => (
  <Shell code="01" title="对象与客体·一盘两层">
    <div data-layout="two-beam-counter-board" data-visual-anchor="role-pair" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="surface-depth-split,theft-case-pairing" data-focal-rule="the-object-carries-the-interest-the-interest-is-what-law-protects" data-focal-channels="icon,contrast,spatial,enclosure" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="concept-legal-interest" style={{position: 'absolute', left: 0, top: 0, width: 780, height: 744, backgroundColor: C.label, border: `3px solid ${C.frame}`, borderRadius: 12, padding: '18px 22px'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Crosshair size={30} color={C.vermilion} />
          <LabelBlock size={28} color={C.vermilion}>犯罪客体 ＝ 法益</LabelBlock>
        </Enter>
        <Enter delay={18} style={{marginTop: 14, fontSize: 23, fontWeight: 800}}>犯罪侵犯的<span style={{fontWeight: 950, color: C.vermilion}}>社会关系</span>中，法律所<span style={{fontWeight: 950, color: C.vermilion}}>保护的利益</span></Enter>
        <Enter delay={28} style={{marginTop: 14, display: 'flex', gap: 10, flexWrap: 'wrap'}}>
          <Chip style={{fontSize: 21}}>别称：保护客体</Chip>
          <Chip style={{fontSize: 21}}>别称：犯罪客体</Chip>
        </Enter>
        <div style={{marginTop: 18, border: `3px solid ${C.indigo}`, borderRadius: 10, padding: '12px 16px'}}>
          <Enter delay={40} style={{fontSize: 22, fontWeight: 900}}>例：故意杀人罪 → 保护法益＝人的<ThinU>生命</ThinU></Enter>
        </div>
        <div data-final-knowledge="concept-essence" style={{marginTop: 16, backgroundColor: C.brassSoft, border: `3px solid ${C.brass}`, borderRadius: 10, padding: '12px 16px'}}>
          <Enter delay={54} style={{fontSize: 23, fontWeight: 950}}>犯罪的本质（2015·卷二·9）</Enter>
          <Enter delay={64} style={{marginTop: 8}}><SoftHi style={{fontSize: 24}}>犯罪＝侵害法益的行为</SoftHi></Enter>
        </div>
        <Enter delay={78} style={{marginTop: 16, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>两颗珠子不在一层：利益藏在载体的下面——读懂下层，才读懂罪名</Enter>
      </div>

      <div data-final-knowledge="counter-surface-row" style={{position: 'absolute', left: 804, top: 0, width: 972, height: 300, backgroundColor: C.indigoSoft, border: `3px solid ${C.indigo}`, borderRadius: 12, padding: '16px 20px'}}>
        <Enter delay={12} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Milestone size={28} color={C.indigo} />
          <LabelBlock size={27} color={C.indigo}>梁上 · 犯罪对象（载体）</LabelBlock>
        </Enter>
        <Enter delay={24} style={{marginTop: 12, fontSize: 22, fontWeight: 700, color: C.inkSoft}}>看得见的物与人——行为直接指向的<span style={{fontWeight: 950, color: C.ink}}>表面载体</span></Enter>
        <Enter delay={36} style={{marginTop: 14, display: 'flex', gap: 12, alignItems: 'center'}}>
          <Chip tone="indigo" style={{fontSize: 24, fontWeight: 900}}>盗窃案：财物（手机）</Chip>
          <span style={{fontSize: 21, fontWeight: 700, color: C.inkSoft}}>杀人案：人</span>
        </Enter>
      </div>

      <div data-final-knowledge="counter-beam" style={{position: 'absolute', left: 804, top: 312, width: 972, height: 56, backgroundColor: C.frame, borderRadius: 8, backgroundImage: 'repeating-linear-gradient(90deg, rgba(251,245,227,0.18) 0 3px, transparent 3px 56px)'}}>
        <Enter delay={46} style={{position: 'absolute', left: 22, top: 12, fontSize: 22, fontWeight: 950, color: C.white}}>算盘横梁 · 表里分界线</Enter>
      </div>

      <div data-final-knowledge="counter-interest-row" style={{position: 'absolute', left: 804, top: 380, width: 972, height: 300, backgroundColor: C.vermilionSoft, border: `3px solid ${C.vermilion}`, borderRadius: 12, padding: '16px 20px'}}>
        <Enter delay={56} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Anchor size={28} color={C.vermilion} />
          <LabelBlock size={27} color={C.vermilion}>梁下 · 犯罪客体（利益）</LabelBlock>
        </Enter>
        <Enter delay={66} style={{marginTop: 12, fontSize: 22, fontWeight: 700, color: C.inkSoft}}>载体所蕴含的<span style={{fontWeight: 950, color: C.vermilion}}>法律保护利益</span>——真正被侵害的东西</Enter>
        <Enter delay={78} style={{marginTop: 14, display: 'flex', gap: 12, alignItems: 'center'}}>
          <Chip tone="vermilion" style={{fontSize: 24, fontWeight: 900}}>盗窃案：财产权</Chip>
          <span style={{fontSize: 21, fontWeight: 700, color: C.inkSoft}}>杀人案：生命</span>
        </Enter>
      </div>

      <div style={{position: 'absolute', left: 804, top: 692, width: 972, height: 52, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Enter delay={90}><Neg size={24}>客体绝不是对象——别把手机当成财产权</Neg></Enter>
      </div>
    </div>
  </Shell>
);

export const DoctrineForkEmptyHouseScene = () => (
  <Shell code="02" title="法益的解释功能·空房案">
    <div data-layout="doctrine-fork-case" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="interest-defines-elements,doctrine-fork-verdicts" data-focal-rule="purpose-explanation-reads-elements-through-the-protected-interest" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="purpose-function-strip" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 104, backgroundColor: C.brassSoft, border: `3px solid ${C.brass}`, borderRadius: 12, display: 'flex', alignItems: 'center', gap: 16, padding: '0 22px'}}>
        <Enter delay={6}><LabelBlock ink size={26}>法益的解释功能</LabelBlock></Enter>
        <Enter delay={16} style={{fontSize: 24, fontWeight: 900}}>刑法的保护目的＝法益；<SoftHi style={{fontSize: 23}}>目的解释＝用法益解释罪名的构成要件</SoftHi></Enter>
      </div>

      <div style={{position: 'absolute', left: 0, top: 128, width: 1776, display: 'flex', alignItems: 'center', gap: 12}}>
        <Enter delay={26} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={28} color={C.vermilion} />
          <span style={{fontSize: 24, fontWeight: 950}}>2022 主观题 · 空房案</span>
        </Enter>
        <Enter delay={36} style={{fontSize: 22, fontWeight: 700, color: C.inkSoft}}>乙常年在国外·国内房子常年空置；甲潜入住了一个月——构成非法侵入住宅罪吗？</Enter>
      </div>

      <div style={{position: 'absolute', left: 640, top: 210, width: 4, height: 60, backgroundColor: C.ink}} />
      <Dash delay={44} style={{position: 'absolute', left: 300, top: 214, width: 340, borderTop: '4px dashed ' + C.indigo}} />
      <Dash delay={46} style={{position: 'absolute', left: 1136, top: 214, width: 340, borderTop: '4px dashed ' + C.vermilion}} />

      <div data-final-knowledge="fork-majority-room" style={{position: 'absolute', left: 0, top: 268, width: 860, height: 476, backgroundColor: C.indigoSoft, border: `4px solid ${C.indigo}`, borderRadius: 12, padding: '16px 22px'}}>
        <Enter delay={52} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Compass size={28} color={C.indigo} />
          <LabelBlock size={27} color={C.indigo}>多数说</LabelBlock>
        </Enter>
        <div style={{marginTop: 14, display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={64}><Chip tone="indigo" style={{fontSize: 22, whiteSpace: 'normal'}}>保护法益：住宅的「居住生活安宁状态」</Chip></Enter>
          <Enter delay={76} style={{fontSize: 22, fontWeight: 700}}>事实：空房子无人居住 → <ThinU>不存在</ThinU>安宁状态</Enter>
          <Enter delay={88} style={{fontSize: 22, fontWeight: 700}}>→ 甲没有侵犯该状态</Enter>
          <Enter delay={102}><Seal delay={102} tone="indigo">结论：不构成该罪</Seal></Enter>
        </div>
      </div>

      <div data-final-knowledge="fork-minority-room" style={{position: 'absolute', left: 916, top: 268, width: 860, height: 476, backgroundColor: C.vermilionSoft, border: `4px solid ${C.vermilion}`, borderRadius: 12, padding: '16px 22px'}}>
        <Enter delay={58} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Compass size={28} color={C.vermilion} />
          <LabelBlock size={27} color={C.vermilion}>少数说</LabelBlock>
        </Enter>
        <div style={{marginTop: 14, display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={70}><Chip tone="vermilion" style={{fontSize: 22, whiteSpace: 'normal'}}>保护法益：居住者的「进入许可权」</Chip></Enter>
          <Enter delay={82} style={{fontSize: 22, fontWeight: 700}}>事实：未经乙同意·擅闯民宅</Enter>
          <Enter delay={94} style={{fontSize: 22, fontWeight: 700}}>→ <ThinU>已经侵犯</ThinU>乙的进入许可权</Enter>
          <Enter delay={108}><Seal delay={108} tone="vermilion">结论：构成该罪</Seal></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const DualCharterBalanceScene = () => (
  <Shell code="03" title="双重任务·冲突时优先人权">
    <div data-layout="dual-charter-balance" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="twin-charter-pairing,conflict-tilt-rule" data-focal-rule="when-interest-protection-and-rights-protection-clash-rights-prevail" data-focal-channels="icon,contrast,spatial,connector" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="charter-benefit-stele" style={{position: 'absolute', left: 0, top: 0, width: 566, height: 300, backgroundColor: C.indigoSoft, border: `4px solid ${C.indigo}`, borderRadius: 12, padding: '16px 20px'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <ScrollText size={28} color={C.indigo} />
          <LabelBlock size={26} color={C.indigo}>善良人的大宪章</LabelBlock>
        </Enter>
        <Enter delay={18} style={{marginTop: 14, fontSize: 23, fontWeight: 900}}>打击犯罪 · 保护法益</Enter>
        <Enter delay={28} style={{marginTop: 10, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>刑法为守法者主持公道的一面</Enter>
      </div>

      <div data-final-knowledge="charter-rights-stele" style={{position: 'absolute', left: 605, top: 0, width: 566, height: 300, backgroundColor: C.vermilionSoft, border: `4px solid ${C.vermilion}`, borderRadius: 12, padding: '16px 20px'}}>
        <Enter delay={12} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <KeyRound size={28} color={C.vermilion} />
          <LabelBlock size={26} color={C.vermilion}>犯罪人的大宪章</LabelBlock>
        </Enter>
        <Enter delay={24} style={{marginTop: 14, fontSize: 23, fontWeight: 900}}>保障人权 · 约束司法机关</Enter>
        <Enter delay={34} style={{marginTop: 10, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>制定刑法的根本目的：打击犯罪时<ThinU>不得侵犯人权</ThinU></Enter>
      </div>

      <div data-final-knowledge="charter-tilt-board" style={{position: 'absolute', left: 1210, top: 0, width: 566, height: 300, backgroundColor: C.label, border: `3px solid ${C.frame}`, borderRadius: 12, padding: '16px 20px'}}>
        <Enter delay={18}><LabelBlock ink size={25}>一味偏一侧的后果</LabelBlock></Enter>
        <Enter delay={30} style={{marginTop: 14, display: 'flex', alignItems: 'center', gap: 10}}>
          <Chip tone="indigo" style={{fontSize: 21}}>只顾保护法益</Chip>
          <span style={{fontSize: 21, fontWeight: 900, color: C.indigo}}>→</span>
          <Gavel size={22} color={C.indigo} />
          <span style={{fontSize: 21, fontWeight: 900}}>易认定有罪</span>
        </Enter>
        <Enter delay={42} style={{marginTop: 12, display: 'flex', alignItems: 'center', gap: 10}}>
          <Chip tone="vermilion" style={{fontSize: 21}}>只顾保障人权</Chip>
          <span style={{fontSize: 21, fontWeight: 900, color: C.vermilion}}>→</span>
          <span style={{fontSize: 21, fontWeight: 900}}>易认定无罪</span>
        </Enter>
      </div>

      <div data-final-knowledge="charter-conflict-rule" style={{position: 'absolute', left: 0, right: 0, top: 324, height: 150, backgroundColor: C.brassSoft, border: `4px solid ${C.brass}`, borderRadius: 12, display: 'flex', alignItems: 'center', gap: 18, padding: '0 24px'}}>
        <Enter delay={54}><LabelBlock ink size={28}>两大功能冲突时</LabelBlock></Enter>
        <Enter delay={66}><SoftHi style={{fontSize: 28}}>优先保障人权</SoftHi></Enter>
        <span style={{flex: 1}} />
        <Enter delay={78} style={{fontSize: 22, fontWeight: 800, color: C.inkSoft}}>严格依据刑法（而非道德直觉）定罪处罚</Enter>
      </div>

      <div data-final-knowledge="charter-prison-case" style={{position: 'absolute', left: 0, right: 0, top: 498, bottom: 0, backgroundColor: C.label, border: `3px double ${C.ink}`, borderRadius: 12, padding: '16px 22px'}}>
        <Enter delay={90} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={28} color={C.vermilion} />
          <LabelBlock size={26}>应用 · 越狱案（肖申克式：被冤枉者越狱被抓回）</LabelBlock>
        </Enter>
        <Enter delay={102} style={{marginTop: 12, display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap'}}>
          <Chip tone="indigo" style={{fontSize: 21}}>侧重法益（监狱秩序）→ 应判脱逃罪</Chip>
          <Chip tone="vermilion" style={{fontSize: 21}}>侧重保障人权 → 不应判</Chip>
        </Enter>
        <Enter delay={116} style={{marginTop: 14, display: 'flex', alignItems: 'center', gap: 12}}>
          <span style={{fontSize: 23, fontWeight: 950}}>司法解释结论：冲突时优先保障人权</span>
          <Seal delay={124} tone="vermilion">不以脱逃罪论处</Seal>
        </Enter>
      </div>
    </div>
  </Shell>
);
