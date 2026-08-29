import {AbsoluteFill} from 'remotion';
import {ArrowRightLeft, BookOpen, Coins, Gavel, GraduationCap, Scale, Search} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp, ThinU} from './theme';

export const InspectionScene = () => (
  <Shell code="01" title="知情权：直读、三步看、一道目的闸">
    <div data-layout="inspection-gate-lane" data-visual-anchor="boundary" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="tiered-inspection-rule,purpose-bona-fide-gate" data-focal-rule="non-core-documents-are-read-freely-while-ledgers-pass-three-gates-and-an-impure-purpose-stops-the-whole-lane" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="ins-core-lane" style={{position: 'absolute', left: 0, top: 0, width: 864, height: 318, backgroundColor: C.paper, border: `3px solid ${C.celadon}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 8px 20px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <BookOpen size={30} color={C.celadon} style={{flexShrink: 0}} />
          <LabelBlock color={C.celadon} size={27}>直读道 · 非核心资料</LabelBlock>
        </Enter>
        <Enter delay={22} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>章程 · 财务会计报告 等</span>
          <span><SoftHi style={{fontSize: 21}}>查阅＋复制</SoftHi>，无需理由 · 不限持股比例（0.8% 也行）</span>
        </Enter>
        <Enter delay={42} style={{marginTop: 8}}><Neg size={21}>无需说明目的——说目的只针对账簿凭证</Neg></Enter>
      </div>
      <div data-final-knowledge="ins-three-gates" style={{position: 'absolute', left: 896, top: 0, width: 880, height: 318, backgroundColor: C.panel, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={56} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Search size={30} color={C.pine} style={{flexShrink: 0}} />
          <LabelBlock color={C.pine} size={27}>三步看 · 会计账簿＋凭证</LabelBlock>
        </Enter>
        <Enter delay={74} style={{marginTop: 12, fontSize: 21, fontWeight: 750, color: C.ink, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 6}}>
          <span style={{display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="pine" style={{fontSize: 20}}>一看身份</Chip>有限股东；股份公司 3%＋180 天</span>
          <span style={{display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="pine" style={{fontSize: 20}}>二看形式</Chip>书面请求、只阅不抄</span>
          <span style={{display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="pine" style={{fontSize: 20}}>三看目的</Chip>正当——可委托会计师事务所等中介</span>
        </Enter>
      </div>
      <div data-final-knowledge="ins-purpose-scale" style={{position: 'absolute', left: 0, top: 344, width: 1064, height: 258, backgroundColor: C.panel, border: `3px solid ${C.gold}`, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 22}}>
        <div style={{flex: 1}}>
          <Enter delay={94} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <Chip tone="seal" style={{fontSize: 21}}>目的不正当 → 可拒</Chip>
          </Enter>
          <Enter delay={110} style={{marginTop: 10, fontSize: 21, fontWeight: 750, color: C.ink, lineHeight: 1.7}}>罗某自己是竞对公司的法定代表人——查账<ThinU color={C.seal}>喂给对手</ThinU>，雷某可拒（2019金题 A ✓）；委托中介也<ThinU color={C.seal}>越不过股东的权利范围</ThinU></Enter>
        </div>
        <div style={{width: 1, backgroundColor: C.inkLine}} />
        <div style={{flex: 1}}>
          <Enter delay={124} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <Chip tone="jade" style={{fontSize: 21}}>目的正当 → 不得拒</Chip>
          </Enter>
          <Enter delay={140} style={{marginTop: 10, fontSize: 21, fontWeight: 750, color: C.ink, lineHeight: 1.7}}>刘东为转让估值查账——<ThinU color={C.jade}>防止卖贱了</ThinU>，公司不得拒绝（2023金题 D ✓）；原始凭证目的正当时<SoftHi style={{fontSize: 20}}>可书面查阅</SoftHi></Enter>
        </div>
      </div>
      <div data-final-knowledge="ins-qualify-strip" style={{position: 'absolute', left: 1096, top: 344, width: 680, height: 258, backgroundColor: C.ink, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={156} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <GraduationCap size={28} color={C.gold} style={{flexShrink: 0}} />
          <span style={{fontSize: 23, fontWeight: 900, color: C.paper}}>资格与边界</span>
        </Enter>
        <Enter delay={172} style={{marginTop: 12, fontSize: 21, fontWeight: 750, color: 'rgba(250,252,249,0.7)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>· 股东资格交割节点＝<ThinU color={C.gold}>股东名册变更</ThinU>，签协议不算（2025金题）</span>
          <span>· 双层穿透只到<ThinU color={C.gold}>全资子公司</ThinU>——85% 不行（2024金题 B ✓）</span>
          <span>· 委托查阅只能找中介机构，不能委托别的公司</span>
        </Enter>
      </div>
    </div>
  </Shell>
);

export const ValidityFunnelScene = () => (
  <Shell code="02" title="决议效力：一具排他漏斗">
    <div data-layout="validity-funnel-column" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,thin-underline,stamp" data-visual-grammar="exclusive-validity-funnel,internal-external-split" data-focal-rule="validity-is-sifted-in-order-nonexistent-then-void-then-revocable-and-revocation-never-reaches-good-faith-outsiders" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="val-funnel-column" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 600, backgroundColor: C.panel, border: `3px solid ${C.celadon}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Scale size={30} color={C.celadon} style={{flexShrink: 0}} />
          <LabelBlock color={C.celadon} size={27}>逐级排查 · 上一格挡住就不看下一格</LabelBlock>
        </Enter>
        <div style={{marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={24} style={{backgroundColor: C.paper, borderRadius: 10, padding: '10px 16px', border: `3px solid ${C.seal}`}}>
            <span style={{fontSize: 22, fontWeight: 900, color: C.ink, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Chip tone="seal" style={{fontSize: 20}}>① 不成立</Chip>没开会 · 没表决 · 人不够 · <ThinU color={C.seal}>票不够</ThinU></span>
          </Enter>
          <Enter delay={44} style={{backgroundColor: C.paper, borderRadius: 10, padding: '10px 16px', border: `3px solid ${C.gold}`}}>
            <span style={{fontSize: 22, fontWeight: 900, color: C.ink, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Chip tone="gold" style={{fontSize: 20}}>② 无效</Chip>内容违法行政法规</span>
          </Enter>
          <Enter delay={64} style={{backgroundColor: C.paper, borderRadius: 10, padding: '10px 16px', border: `3px solid ${C.celadon}`}}>
            <span style={{fontSize: 22, fontWeight: 900, color: C.ink, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Chip tone="celadon" style={{fontSize: 20}}>③ 可撤销</Chip>程序瑕疵；60 日内；轻微瑕疵无实质影响不撤</span>
          </Enter>
        </div>
        <Enter delay={86} style={{marginTop: 14, fontSize: 21, fontWeight: 750, color: C.ink, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>· 章程可<ThinU color={C.celadon}>抬高门槛</ThinU>：约定一致同意合法——95% ＜ 100% → 票不够，不成立（2020金题 B ✓）</span>
          <span>· 电话通知人都到齐＝轻微瑕疵不撤；15 日 vs 章程 30 日致缺席＝<ThinU color={C.seal}>实质影响可撤</ThinU></span>
          <span>· 投同意票、缺席、弃权——<SoftHi style={{fontSize: 20}}>不当然丧失撤销诉权</SoftHi></span>
        </Enter>
      </div>
      <div data-final-knowledge="val-split-board" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 600, backgroundColor: C.paper, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={102} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <ArrowRightLeft size={30} color={C.ink} style={{flexShrink: 0}} />
          <LabelBlock color={C.pine} size={26}>内外分开 · 决议归决议</LabelBlock>
        </Enter>
        <Enter delay={120} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 10}}>
          <span>决议被撤销 → 与善意相对人签的合同<ThinU color={C.pine}>依然有效</ThinU>（2025金题 D 说无效 ✗）</span>
          <span>撤销之诉：原告股东、被告公司、其他股东列第三人</span>
          <span>未被通知的股东：双重除斥——知情 60 日内＋决议作出 1 年内</span>
        </Enter>
        <Enter delay={144} style={{marginTop: 12}}><Stamp delay={150} tone="celadon">先筛不成立，别急着喊撤销</Stamp></Enter>
      </div>
    </div>
  </Shell>
);

export const ClaimDeskScene = () => (
  <Shell code="03" title="两席权符：异议回购与代表诉讼">
    <div data-layout="dual-claim-desk" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,stamp" data-visual-grammar="objection-buyout-trigger,derivative-action-benefit-rule" data-focal-rule="buyout-needs-an-opposing-vote-on-listed-events-while-derivative-suits-return-wins-to-the-company-not-the-plaintiff" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="cl-buyout-desk" style={{position: 'absolute', left: 0, top: 0, width: 864, height: 586, backgroundColor: C.paper, border: `3px solid ${C.gold}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 8px 20px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Coins size={30} color={C.gold} style={{flexShrink: 0}} />
          <LabelBlock color={C.gold} size={27}>左席 · 异议回购</LabelBlock>
        </Enter>
        <div style={{marginTop: 14, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={24} style={{fontSize: 21, fontWeight: 750, color: C.ink, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="gold" style={{fontSize: 20}}>三情形</Chip>连续 5 年不分红 · 合并分立转财产 · 届满续命改章程</Enter>
          <Enter delay={40} style={{fontSize: 21, fontWeight: 750, color: C.ink, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="seal" style={{fontSize: 20}}>一票线</Chip>必须投<ThinU color={C.seal}>反对票</ThinU>——拒签＝弃权不算</Enter>
          <Enter delay={56} style={{fontSize: 21, fontWeight: 750, color: C.ink, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="pine" style={{fontSize: 20}}>程序</Chip>决议后 60 日协商 → 90 日内起诉</Enter>
        </div>
        <Enter delay={74} style={{marginTop: 10, fontSize: 21, fontWeight: 750, color: C.ink, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 6}}>
          <span>· 届满续命投反对 → 可请求合理价格回购（2019金题 A ✓）</span>
          <span>· 前 5 年都分了红 → 不构成「连续 5 年不分红」（2023金题 A ✗）</span>
          <span>· 增资被代签 → 非回购情形（2020金题 D ✗）</span>
        </Enter>
      </div>
      <div data-final-knowledge="cl-derivative-desk" style={{position: 'absolute', left: 896, top: 0, width: 880, height: 586, backgroundColor: C.panel, border: `3px solid ${C.celadon}`, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={90} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Gavel size={30} color={C.celadon} style={{flexShrink: 0}} />
          <LabelBlock color={C.celadon} size={27}>右席 · 代表诉讼与强制解散</LabelBlock>
        </Enter>
        <div style={{marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={108} style={{fontSize: 21, fontWeight: 750, color: C.ink, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="celadon" style={{fontSize: 20}}>前置</Chip>书面请求监事（会）/董事会，不置可否即可自诉</Enter>
          <Enter delay={124} style={{fontSize: 21, fontWeight: 750, color: C.ink, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="celadon" style={{fontSize: 20}}>利益归公司</Chip>要求乙向自己赔——错；调解须经公司同意</Enter>
          <Enter delay={140} style={{fontSize: 21, fontWeight: 750, color: C.ink, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="celadon" style={{fontSize: 20}}>直接诉讼</Chip>须直接损害个人利益——公司受损≠股权贬值</Enter>
          <Enter delay={156} style={{fontSize: 21, fontWeight: 750, color: C.ink, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="celadon" style={{fontSize: 20}}>强制解散</Chip>持股 10%＋经营管理严重困难；<ThinU color={C.celadon}>公司为被告</ThinU>；解散清算不同时</Enter>
        </div>
        <Enter delay={174} style={{marginTop: 10}}><Stamp delay={180} tone="seal">决议效力之诉也以公司为被告</Stamp></Enter>
      </div>
      <div data-final-knowledge="cl-recap-strip" style={{position: 'absolute', left: 0, right: 0, top: 612, height: 132, backgroundColor: C.ink, borderRadius: 14, padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 20}}>
        <Enter delay={192} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'nowrap'}}>
          <GraduationCap size={28} color={C.gold} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 900, color: C.paper, whiteSpace: 'nowrap'}}>一句收束：读账过三闸 · 决议过漏斗 · 回购要反对票 · 代诉利归公司</span>
        </Enter>
        <Dash delay={202} style={{flex: 1, borderTop: `3px dashed ${C.panelLine}`}} />
        <Enter delay={208} style={{fontSize: 20, fontWeight: 750, color: 'rgba(250,252,249,0.66)', whiteSpace: 'nowrap'}}>Q24-35 全覆盖</Enter>
      </div>
    </div>
  </Shell>
);

export const ShareholderRightsVault = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-inspection" {...SCENES.inspection}><InspectionScene /></TimelineSequence>
    <TimelineSequence name="02-validity-funnel" {...SCENES.validityFunnel}><ValidityFunnelScene /></TimelineSequence>
    <TimelineSequence name="03-claim-desk" {...SCENES.claimDesk}><ClaimDeskScene /></TimelineSequence>
  </AbsoluteFill>
);
