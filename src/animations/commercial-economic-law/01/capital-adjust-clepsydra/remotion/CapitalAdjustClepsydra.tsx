import {AbsoluteFill} from 'remotion';
import {ArrowDownUp, Droplets, FileText, GraduationCap, Landmark, PenLine, Scale, Stamp, TrendingDown, Users} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp as PourStamp, ThinU} from './theme';

export const CapitalRiseScene = () => (
  <Shell code="01" title="注水升格：增资的刻度与滴漏">
    <div data-layout="clepsydra-graduation-desk" data-visual-anchor="timeline-gate" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="subscription-axis-rule,charter-registry-mandatory" data-focal-rule="new-capital-subscription-follows-agreement-then-paid-ratio-pourable-within-five-years-but-the-charter-scale-and-registry-must-be-re-engraved" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="rise-axis-board" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 300, backgroundColor: C.panel, border: `3px solid ${C.patina}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <ArrowDownUp size={30} color={C.patina} style={{flexShrink: 0}} />
          <LabelBlock size={27}>两根不同的轴 · 7:2:1 只是旧刻度</LabelBlock>
        </Enter>
        <Enter delay={24} style={{marginTop: 14, fontSize: 23, fontWeight: 850, color: C.arrow, lineHeight: 1.8}}>优先认购新股比例：先看<SoftHi style={{fontSize: 22}}>全体股东约定</SoftHi> → 无约定按<ThinU color={C.patina}>实缴出资比例</ThinU></Enter>
        <Enter delay={44} style={{marginTop: 8, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <Stamp delay={50} tone="jade">A ✓ 不必按原认缴 7:2:1 增资</Stamp>
          <span style={{fontSize: 21, fontWeight: 750, color: C.arrowDim}}>尊重一致意愿，防稀释</span>
        </Enter>
      </div>
      <div data-final-knowledge="rise-drip-board" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 300, backgroundColor: C.panel, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={62} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Droplets size={28} color={C.water} style={{flexShrink: 0}} />
          <LabelBlock color={C.water} size={26}>滴漏缓缴 · 5 年之内</LabelBlock>
        </Enter>
        <Enter delay={78} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.arrow, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>增资认缴适用设立出资规则</span>
          <span><SoftHi style={{fontSize: 21}}>5 年内缴足即可</SoftHi>——不必一次注满（B ✓）</span>
        </Enter>
      </div>
      <div data-final-knowledge="rise-mandatory-strip" style={{position: 'absolute', left: 0, right: 0, top: 326, height: 190, backgroundColor: C.panel, border: `3px dashed ${C.vermilion}`, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={96} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <PenLine size={28} color={C.vermilion} style={{flexShrink: 0}} />
            <LabelBlock color={C.vermilion} size={26}>两道必办 · 不能省</LabelBlock>
          </Enter>
          <Enter delay={112} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.arrow, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
            <span>注册资本是章程<ThinU color={C.vermilion}>必备记载</ThinU>——增资后必须改章程（C ✗）</span>
            <span>必须办变更登记——<SoftHi style={{fontSize: 21}}>登记时增资才生效</SoftHi>（D ✗）</span>
          </Enter>
        </div>
        <div style={{width: 430, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={130} style={{fontSize: 22, fontWeight: 900, color: C.patina}}>定向增资加一档</Enter>
          <Enter delay={144} style={{fontSize: 21, fontWeight: 750, color: C.arrowDim, lineHeight: 1.7}}>非等比（定向）增资无约定时须<ThinU color={C.vermilion}>全体一致同意</ThinU>，有人反对＝票不够，决议不成立</Enter>
        </div>
      </div>
      <div data-final-knowledge="rise-exam-verdict" style={{position: 'absolute', left: 0, right: 0, top: 542, height: 202, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={158} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.patina} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.arrow}}>2017-3-68 · 正确答案 AB</span>
          </Enter>
          <Enter delay={174} style={{marginTop: 12, fontSize: 22, fontWeight: 750, color: 'rgba(240,232,210,0.68)', lineHeight: 1.8}}>增资本身是七件大事：先过股东会 2/3 决议，再谈怎么缴、怎么登记</Enter>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed rgba(240,232,210,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={190}><Chip tone="patina" style={{fontSize: 21}}>认购比例：约定 → 实缴</Chip></Enter>
          <Enter delay={202}><Chip tone="patina" style={{fontSize: 21}}>缴纳期限：5 年滴漏</Chip></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const UnevenCutScene = () => (
  <Shell code="02" title="斜切水位：非等比减资须全员点头">
    <div data-layout="uneven-cut-scale" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation" data-visual-grammar="architecture-break-consensus,invalidity-discrimination" data-focal-rule="an-uneven-reduction-tilts-the-incorporation-ratio-so-it-needs-unanimous-consent-and-opposition-leaves-the-resolution-nonexistent" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="cut-scale-board" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 320, backgroundColor: C.panel, border: `3px solid ${C.vermilion}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <TrendingDown size={30} color={C.vermilion} style={{flexShrink: 0}} />
          <LabelBlock color={C.vermilion} size={27}>时风公司 · 300 万 → 减 100 万，斜着切</LabelBlock>
        </Enter>
        <Enter delay={24} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.arrow, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>方案：退甲 10 万 · 乙丙各减认缴 45 万</span>
          <span>持股比例变成 <Chip tone="vermilion" style={{fontSize: 20}}>25% / 37.5% / 37.5%</Chip>——设立架构被切歪</span>
        </Enter>
        <Enter delay={44} style={{marginTop: 10, fontSize: 22, fontWeight: 900, color: C.arrow}}>非等比减资 → 须<SoftHi style={{fontSize: 21}}>全体股东一致同意</SoftHi></Enter>
      </div>
      <div data-final-knowledge="cut-vote-verdict" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 320, backgroundColor: C.panel, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={62} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Users size={28} color={C.arrow} style={{flexShrink: 0}} />
          <LabelBlock size={25}>举手结果 · 甲反对</LabelBlock>
        </Enter>
        <Enter delay={78} style={{marginTop: 12, fontSize: 22, fontWeight: 850, color: C.arrow, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>合意未凑齐 → <ThinU color={C.vermilion}>决议不成立</ThinU>（C ✓）</span>
          <span><Neg size={20}>B 乙丙同意即有效——一致同意才数</Neg></span>
          <span><Neg size={20}>D 实缴与否——减资是法定职权，不影响</Neg></span>
        </Enter>
      </div>
      <div data-final-knowledge="cut-discrimination" style={{position: 'absolute', left: 0, right: 0, top: 346, height: 226, backgroundColor: C.panel, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={96} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Scale size={28} color={C.patina} style={{flexShrink: 0}} />
            <LabelBlock size={25}>三连辨析 · 别贴错标签</LabelBlock>
          </Enter>
          <div style={{marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8}}>
            <Enter delay={112} style={{fontSize: 21, fontWeight: 750, color: C.arrow, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Neg size={20}>A 抽逃出资——只是决议，钱还没退，谈不上抽逃</Neg></Enter>
            <Enter delay={126} style={{fontSize: 21, fontWeight: 750, color: C.arrow, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Neg size={20}>可撤销——「不成立」与「可撤销」是两格抽屉</Neg></Enter>
            <Enter delay={140} style={{fontSize: 21, fontWeight: 750, color: C.arrow, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="jade" style={{fontSize: 20}}>例外三扇：法律另有规定 · 全体有约定 · 章程另有规定</Chip></Enter>
          </div>
        </div>
        <div style={{width: 430, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={156} style={{fontSize: 22, fontWeight: 900, color: C.patina}}>背下来</Enter>
          <Enter delay={170} style={{fontSize: 21, fontWeight: 750, color: C.arrowDim, lineHeight: 1.7}}>等比减资为原则，非等比为例外；<ThinU color={C.vermilion}>斜切须全员点头</ThinU>，一票反对不成立</Enter>
        </div>
      </div>
      <div data-final-knowledge="cut-exam-verdict" style={{position: 'absolute', left: 0, right: 0, top: 598, height: 146, backgroundColor: C.ink, borderRadius: 14, padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 20}}>
        <Enter delay={186} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'nowrap'}}>
          <GraduationCap size={28} color={C.patina} style={{flexShrink: 0}} />
          <span style={{fontSize: 23, fontWeight: 900, color: C.arrow, whiteSpace: 'nowrap'}}>2025金题 · 正确答案 C</span>
        </Enter>
        <Dash delay={196} style={{flex: 1, borderTop: `3px dashed ${C.panelLine}`}} />
        <Enter delay={202} style={{fontSize: 21, fontWeight: 750, color: C.arrowDim, whiteSpace: 'nowrap'}}>不成立（票不够）≠ 无效（内容违法）≠ 可撤销（程序瑕疵）</Enter>
      </div>
    </div>
  </Shell>
);

export const PaperCutScene = () => (
  <Shell code="03" title="简易减资：只拨指针，不放水">
    <div data-layout="paper-cut-dial" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="paper-reduction-rule,creditor-unchanged-rule" data-focal-rule="loss-covering-reduction-only-adjusts-ledgers-never-pays-out-so-creditors-are-safe-and-subscription-duties-survive" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="paper-why-simple" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 258, backgroundColor: C.panel, border: `3px solid ${C.water}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <TrendingDown size={30} color={C.water} style={{flexShrink: 0}} />
          <LabelBlock size={26}>盈东公司 · 公积金补亏后仍亏 80 万 → 减资补亏</LabelBlock>
        </Enter>
        <Enter delay={24} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.arrow, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>账面：实收资本 ↔ 未分配利润（亏损）对冲</span>
          <span>实际：<SoftHi style={{fontSize: 21}}>只调账、不减钱</SoftHi>——偿付能力没变弱</span>
        </Enter>
        <Enter delay={44} style={{marginTop: 8}}><Stamp delay={50} tone="jade">＝ 简易（形式）减资</Stamp></Enter>
      </div>
      <div data-final-knowledge="paper-procedure-gate" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 258, backgroundColor: C.panel, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={62} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <FileText size={28} color={C.patina} style={{flexShrink: 0}} />
          <LabelBlock size={25}>程序照走 · 三件套</LabelBlock>
        </Enter>
        <Enter delay={78} style={{marginTop: 12, fontSize: 21, fontWeight: 750, color: C.arrow, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 6}}>
          <span>① 股东会决议</span>
          <span>② 编制资产负债表＋财产清单（A ✓）</span>
          <span>③ 决议之日起 <Chip tone="water" style={{fontSize: 19}}>30 日内公告</Chip>（B ✓）</span>
        </Enter>
      </div>
      <div data-final-knowledge="paper-boundary-board" style={{position: 'absolute', left: 0, right: 0, top: 284, height: 300, backgroundColor: C.panel, border: `3px dashed ${C.vermilion}`, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={94} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Landmark size={28} color={C.vermilion} style={{flexShrink: 0}} />
            <LabelBlock color={C.vermilion} size={26}>债权人一侧 · 不用惊动</LabelBlock>
          </Enter>
          <Enter delay={112} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.arrow, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
            <span>不损害债权人 → <Neg size={21}>无需通知（D ✗）</Neg></span>
            <span><Neg size={21}>无需清偿或担保</Neg></span>
          </Enter>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={132} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <Users size={24} color={C.arrow} style={{flexShrink: 0}} />
            <span style={{fontSize: 22, fontWeight: 800, color: C.arrow}}>股东一侧 · 义务不减</span>
          </Enter>
          <Enter delay={148} style={{fontSize: 21, fontWeight: 750, color: C.arrowDim, lineHeight: 1.7}}>调减的是实收资本——<ThinU color={C.vermilion}>丙的认缴义务不能免</ThinU>（C ✗），也不得向股东分配</Enter>
        </div>
      </div>
      <div data-final-knowledge="paper-exam-verdict" style={{position: 'absolute', left: 0, right: 0, top: 610, height: 134, backgroundColor: C.ink, borderRadius: 14, padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 20}}>
        <Enter delay={166} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'nowrap'}}>
          <GraduationCap size={28} color={C.patina} style={{flexShrink: 0}} />
          <span style={{fontSize: 23, fontWeight: 900, color: C.arrow, whiteSpace: 'nowrap'}}>2025金题 · 正确答案 AB</span>
        </Enter>
        <Dash delay={176} style={{flex: 1, borderTop: `3px dashed ${C.panelLine}`}} />
        <Enter delay={182} style={{fontSize: 21, fontWeight: 750, color: C.arrowDim, whiteSpace: 'nowrap'}}>背下来：只调账不减钱——不分配 · 不免出资 · 不惊债权人</Enter>
      </div>
    </div>
  </Shell>
);

export const CapitalAdjustClepsydra = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-capital-rise" {...SCENES.capitalRise}><CapitalRiseScene /></TimelineSequence>
    <TimelineSequence name="02-uneven-cut" {...SCENES.unevenCut}><UnevenCutScene /></TimelineSequence>
    <TimelineSequence name="03-paper-cut" {...SCENES.paperCut}><PaperCutScene /></TimelineSequence>
  </AbsoluteFill>
);
