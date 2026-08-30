import {AbsoluteFill} from 'remotion';
import {Ban, FileCheck, GraduationCap, HandCoins, Lock, Scale, Search, ShieldCheck, Stamp, TrendingDown, Users} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp as LoungeStamp, ThinU} from './theme';

export const RedLineScene = () => (
  <Shell code="01" title="LP 红线与约定分层：哪些能禁，哪些不能">
    <div data-layout="redline-agreement-desk" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="labor-contribution-ban,agreement-hierarchy-rule" data-focal-rule="labor-contribution-is-absolutely-banned-agreement-may-ban-competition-and-pledge-but-never-the-inherent-right-to-transfer" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="red-labor-desk" style={{position: 'absolute', left: 0, top: 0, width: 864, height: 240, backgroundColor: C.sealSoft, border: `3px solid ${C.seal}`, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Ban size={30} color={C.seal} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={27}>绝对红线 · 劳务出资</LabelBlock>
        </Enter>
        <Enter delay={24} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>有限合伙人<ThinU color={C.seal}>不得以劳务出资</ThinU>——劳务离不开本人，人走劳务空</span>
          <span>派员工驻企折抵 10% 出资＝变相劳务出资 → <SoftHi dark style={{fontSize: 21}}>该约定无效</SoftHi>（A ✗）</span>
        </Enter>
      </div>
      <div data-final-knowledge="red-agreement-desk" style={{position: 'absolute', left: 896, top: 0, width: 880, height: 240, backgroundColor: C.panel, border: `3px solid ${C.indigo}`, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={44} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <FileCheck size={30} color={C.indigo} style={{flexShrink: 0}} />
          <LabelBlock color={C.indigo} size={27}>有约定按约定 · 竞业与质押</LabelBlock>
        </Enter>
        <Enter delay={62} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>约定禁止竞业 → <Chip tone="jade" style={{fontSize: 20}}>有效</Chip>（B ✓）</span>
          <span>约定禁止质押 → <Chip tone="jade" style={{fontSize: 20}}>有效</Chip>（C ✓）</span>
        </Enter>
      </div>
      <div data-final-knowledge="red-transfer-desk" style={{position: 'absolute', left: 0, right: 0, top: 266, height: 240, backgroundColor: C.paper, borderRadius: 16, padding: '16px 24px', boxShadow: `0 8px 20px ${C.shadow}`, border: `3px solid ${C.gold}`}}>
        <Enter delay={80} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Lock size={28} color={C.gold} style={{flexShrink: 0}} />
          <LabelBlock color={C.gold} size={26}>固有权利 · 份额转让不可剥夺</LabelBlock>
        </Enter>
        <Enter delay={98} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>份额转让是有限合伙人的<SoftHi dark style={{fontSize: 21}}>固有财产权利</SoftHi></span>
          <span>约定禁止转让 → <Neg size={21}>无效（D ✗）</Neg>——协议再一致也剥夺不了</span>
        </Enter>
      </div>
      <div data-final-knowledge="red-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 532, height: 212, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={120} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.gold} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>2016-3-72 · 正确答案 BC</span>
          </Enter>
          <Enter delay={138} style={{marginTop: 12, fontSize: 21, fontWeight: 750, color: 'rgba(250,251,254,0.7)', lineHeight: 1.8}}>分层口诀：<ThinU color={C.gold}>劳务绝对禁；竞业质押按约定；转让是命根不能禁</ThinU></Enter>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={158}><LoungeStamp delay={164} tone="jade">无约定时：质押转让均无障碍</LoungeStamp></Enter>
          <Enter delay={186} style={{fontSize: 21, fontWeight: 750, color: 'rgba(250,251,254,0.66)', lineHeight: 1.7}}>角度拓展：若无特别约定，则「不得质押」「不得转让」两说全错</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const FourErrorsScene = () => (
  <Shell code="02" title="入伙四连问：2017-3-72 全选「错误」项">
    <div data-layout="four-errors-grid" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="unanimous-all-partners-rule,liability-subscribed-cap" data-focal-rule="admission-needs-all-partners-including-lps-liability-caps-at-subscribed-amount-and-lps-enjoy-competition-freedom-absent-agreement" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="err-admission-desk" style={{position: 'absolute', left: 0, top: 0, width: 864, height: 236, backgroundColor: C.panel, border: `3px solid ${C.indigo}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 8px 20px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Users size={28} color={C.indigo} style={{flexShrink: 0}} />
          <LabelBlock size={25}>A ✗ · 入伙同意权归谁？</LabelBlock>
        </Enter>
        <Enter delay={24} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
          <span>新 LP 入伙影响<SoftHi dark style={{fontSize: 21}}>全体合伙人的份额与架构</SoftHi>——须经<ThinU color={C.indigo}>全体合伙人</ThinU>（含有限合伙人）一致同意，<Neg size={20}>仅普通合伙人点头不够</Neg></span>
        </Enter>
      </div>
      <div data-final-knowledge="err-liability-desk" style={{position: 'absolute', left: 896, top: 0, width: 880, height: 236, backgroundColor: C.panel, border: `3px solid ${C.indigo}`, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={44} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <HandCoins size={28} color={C.indigo} style={{flexShrink: 0}} />
          <LabelBlock size={25}>B ✗ · 入伙前债务怎么担？</LabelBlock>
        </Enter>
        <Enter delay={62} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
          <span>以<SoftHi dark style={{fontSize: 21}}>认缴出资额</SoftHi>为限——<Neg size={20}>不是实缴</Neg>；且<ThinU color={C.indigo}>入伙前后债务均担</ThinU></span>
        </Enter>
      </div>
      <div data-final-knowledge="err-lookup-desk" style={{position: 'absolute', left: 0, top: 260, width: 864, height: 236, backgroundColor: C.panel, border: `3px solid ${C.indigo}`, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={84} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Search size={28} color={C.indigo} style={{flexShrink: 0}} />
          <LabelBlock size={25}>C ✗ · 查账簿随时可以？</LabelBlock>
        </Enter>
        <Enter delay={102} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
          <span>限于<SoftHi dark style={{fontSize: 21}}>涉及自身利益</SoftHi>时——<Neg size={20}>非任何情况可查</Neg></span>
        </Enter>
      </div>
      <div data-final-knowledge="err-competition-desk" style={{position: 'absolute', left: 896, top: 260, width: 880, height: 236, backgroundColor: C.panel, border: `3px solid ${C.indigo}`, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={124} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <TrendingDown size={28} color={C.indigo} style={{flexShrink: 0}} />
          <LabelBlock size={25}>D ✗ · LP 原则上不得竞业？</LabelBlock>
        </Enter>
        <Enter delay={142} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
          <span>竞业<SoftHi dark style={{fontSize: 21}}>有约定按约定，无约定无障碍</SoftHi>——LP 是财务投资者，<ThinU color={C.indigo}>无忠诚义务</ThinU>，可从事竞争业务</span>
        </Enter>
      </div>
      <div data-final-knowledge="err-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 520, height: 224, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={164} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.gold} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper }}>2017-3-72 · 问「错误」→ ABCD 全选</span>
          </Enter>
          <Enter delay={182} style={{marginTop: 12, fontSize: 21, fontWeight: 750, color: 'rgba(250,251,254,0.7)', lineHeight: 1.8}}>陷阱根源：<ThinU color={C.gold}>把普人的高义务套在 LP 身上</ThinU>——LP 只出钱不操盘，义务全线降档</Enter>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={202}><LoungeStamp delay={208} tone="gold">附：LP 不要求完全行为能力</LoungeStamp></Enter>
          <Enter delay={230} style={{fontSize: 21, fontWeight: 750, color: 'rgba(250,251,254,0.66)', lineHeight: 1.7}}>入伙流程三件：约定 → 全体一致同意＋原合伙人坦白过往 → 书面入伙协议</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const NoticeDeskScene = () => (
  <Shell code="03" title="LP 知情权：审计报告与涉己查账">
    <div data-layout="rights-notice-desk" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="audited-report-right,self-interest-lookup-scope" data-focal-rule="the-lp-may-demand-audited-reports-from-the-executing-partner-and-lookup-ledgers-only-for-own-interests-never-peek-into-portfolio-firms" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="not-audited-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 300, backgroundColor: C.paper, border: `3px solid ${C.jade}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 8px 20px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <FileCheck size={30} color={C.jade} style={{flexShrink: 0}} />
          <LabelBlock color={C.jade} size={26}>2025金题 · C ✓ 对的路子</LabelBlock>
        </Enter>
        <Enter delay={26} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>甲有权要求执行事务人<ThinU color={C.jade}>张某</ThinU>提供<SoftHi dark style={{fontSize: 21}}>经审计的 G 有限合伙财务会计报告</SoftHi></span>
          <span>涉及自身利益时还可<ThinU color={C.jade}>查阅账簿等财务资料</ThinU>——D 项全盘否定「无权查账簿」错误</span>
        </Enter>
      </div>
      <div data-final-knowledge="not-wrong-desk" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 300, backgroundColor: C.panel, border: `3px solid ${C.seal}`, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={48} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Ban size={28} color={C.seal} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={25}>A、B 错在哪</LabelBlock>
        </Enter>
        <Enter delay={66} style={{marginTop: 12, fontSize: 21, fontWeight: 750, color: C.paper, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>乙公司的股东是<ThinU color={C.seal}>G 有限合伙</ThinU>——甲不是乙公司股东，无权查乙公司的账</span>
          <span>B 项还把要求对象搞错：能被要求的是<ThinU color={C.seal}>执行事务人张某</ThinU>，不是飞卢公司「去查乙公司」</span>
        </Enter>
      </div>
      <div data-final-knowledge="not-powers-desk" style={{position: 'absolute', left: 0, right: 0, top: 326, height: 250, backgroundColor: C.panel, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={90} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <ShieldCheck size={28} color={C.jade} style={{flexShrink: 0}} />
            <LabelBlock size={25}>LP 安全行为清单 · 不视为执行事务</LabelBlock>
          </Enter>
          <Enter delay={110} style={{marginTop: 12, fontSize: 21, fontWeight: 750, color: C.paper, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 6}}>
            <span>· 参与决定普人入伙退伙 · 对经营提建议 · 参与选会计师事务所</span>
            <span>· 依法提供担保 · 获取经审计报告 · 涉己利益查账簿</span>
          </Enter>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={132} style={{fontSize: 21, fontWeight: 750, color: C.paper, lineHeight: 1.7}}>利益受侵害 → 向有责合伙人主张；执行人怠于行使权利 → <ThinU color={C.jade}>督促或代位起诉</ThinU></Enter>
        </div>
      </div>
      <div data-final-knowledge="not-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 602, height: 142, backgroundColor: C.ink, borderRadius: 14, padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 24}}>
        <div style={{flex: 1, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <Enter delay={150} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <GraduationCap size={26} color={C.gold} style={{flexShrink: 0}} />
            <span style={{fontSize: 22, fontWeight: 900, color: C.paper }}>警惕表见普通合伙：LP 以企业名义签约，善意相对人可主张<ThinU color={C.gold}>无限连带</ThinU>——事后内部追偿</span>
          </Enter>
        </div>
        <div style={{width: 320, display: 'flex', justifyContent: 'flex-end'}}>
          <Enter delay={164}><LoungeStamp delay={170} tone="gold">2025金题 答案 C</LoungeStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const LpLoungeLimitedPartner = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-red-line" {...SCENES.redLine}><RedLineScene /></TimelineSequence>
    <TimelineSequence name="02-four-errors" {...SCENES.fourErrors}><FourErrorsScene /></TimelineSequence>
    <TimelineSequence name="03-notice-desk" {...SCENES.noticeDesk}><NoticeDeskScene /></TimelineSequence>
  </AbsoluteFill>
);
