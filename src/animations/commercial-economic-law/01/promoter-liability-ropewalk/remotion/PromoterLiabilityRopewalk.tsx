import {AbsoluteFill} from 'remotion';
import {AlertTriangle, Building2, FileText, GraduationCap, HandCoins, Link, Scissors, Users} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp, ThinU} from './theme';

export const FailureKnotScene = () => (
  <Shell code="01" title="设立失败：三股麻线合成一根缆">
    <div data-layout="three-strand-rope-stand" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="strand-fusion-joint,external-joint-liability" data-focal-rule="when-incorporation-fails-promoters-stand-as-partners-jointly-liable-to-outside-parties-while-internal-shares-only-guide-recourse" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="knot-founder-strands" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 208, backgroundColor: C.panel, border: `3px solid ${C.indigoLine}`, borderRadius: 14, padding: '14px 22px'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Users size={30} color={C.hemp} style={{flexShrink: 0}} />
          <LabelBlock size={28}>张某 · 王某 · 李某</LabelBlock>
          <Chip tone="panel" style={{fontSize: 22}}>约定设立庄安公司 · 费用债务平均分担</Chip>
        </Enter>
        <Enter delay={20} style={{marginTop: 14, display: 'flex', alignItems: 'center', gap: 10}}>
          <span style={{fontSize: 23, fontWeight: 800, color: C.chalkDim}}>三股麻线上缆道——</span>
          <SoftHi style={{fontSize: 23}}>政策管控 · 设立失败</SoftHi>
          <span style={{fontSize: 23, fontWeight: 800, color: C.chalkDim}}>缆没交给公司</span>
        </Enter>
      </div>
      <div data-final-knowledge="knot-partnership-nature" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 208, backgroundColor: C.paper, borderRadius: 14, padding: '14px 22px', boxShadow: `0 8px 20px ${C.shadow}`}}>
        <Enter delay={34} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Link size={30} color={C.ink} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={28}>失败后性质</LabelBlock>
          <Stamp delay={46} tone="seal">合伙</Stamp>
        </Enter>
        <Enter delay={58} style={{marginTop: 14, fontSize: 23, fontWeight: 850, color: C.ink, lineHeight: 1.6}}>公司没立起来，发起人抱团对外——<ThinU color={C.seal}>连带责任</ThinU></Enter>
      </div>
      <div data-final-knowledge="knot-external-joint" style={{position: 'absolute', left: 0, top: 234, width: 1032, height: 232, backgroundColor: C.indigo, borderRadius: 14, padding: '14px 22px'}}>
        <Enter delay={74} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <FileText size={28} color={C.hemp} style={{flexShrink: 0}} />
          <LabelBlock size={27}>对外的缆钩 · 乙公司租赁合同</LabelBlock>
        </Enter>
        <div style={{marginTop: 14, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'nowrap'}}>
          <Enter delay={88}><Chip tone="hemp" style={{fontSize: 23}}>乙公司可择人追究</Chip></Enter>
          <Dash delay={98} style={{flex: 1, borderTop: `4px solid ${C.hemp}`}} />
          <Enter delay={106} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <HandCoins size={24} color={C.hemp} style={{flexShrink: 0}} />
            <span style={{fontSize: 23, fontWeight: 900, color: C.chalk, whiteSpace: 'nowrap'}}>张某 · 王某 · 李某 连带</span>
          </Enter>
        </div>
        <Enter delay={118} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.chalkDim}}>找一人、找两人、找三人都可以——<ThinU color={C.hemp}>2022金题 C 项 ✓</ThinU></Enter>
      </div>
      <div data-final-knowledge="knot-internal-share-recourse-only" style={{position: 'absolute', left: 1064, top: 234, width: 712, height: 232, backgroundColor: C.panel, border: `3px solid ${C.indigoLine}`, borderRadius: 14, padding: '14px 22px'}}>
        <Enter delay={132} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Scissors size={26} color={C.steel} style={{flexShrink: 0}} />
          <LabelBlock color={C.steel} size={27}>缆内吊牌 · 约定份额</LabelBlock>
        </Enter>
        <Enter delay={146} style={{marginTop: 14, fontSize: 23, fontWeight: 850, color: C.chalk, lineHeight: 1.6}}>份额吊牌只挂在缆<ThinU color={C.steel}>内侧</ThinU>——仅用于相互<SoftHi style={{fontSize: 22}}>追偿</SoftHi></Enter>
        <div style={{marginTop: 12, border: `3px dashed ${C.seal}`, borderRadius: 10, padding: '10px 14px'}}>
          <Enter delay={162}><Neg size={22}>B 项：拿份额吊牌对抗甲公司——不能</Neg></Enter>
        </div>
      </div>
      <div data-final-knowledge="knot-recourse-rule" style={{position: 'absolute', left: 0, top: 492, width: 1032, height: 252, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px'}}>
        <Enter delay={176} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <HandCoins size={28} color={C.hemp} style={{flexShrink: 0}} />
          <span style={{fontSize: 24, fontWeight: 900, color: C.chalk}}>D 项 · 王某清偿全部后</span>
          <Stamp delay={188} tone="jade">可追偿 ✓</Stamp>
        </Enter>
        <Enter delay={202} style={{marginTop: 14, fontSize: 23, fontWeight: 800, color: C.chalk, lineHeight: 1.7}}>替全体还清的王某，回头按<SoftHi style={{fontSize: 22}}>平均分担约定</SoftHi>向张某、李某各追三分之一</Enter>
      </div>
      <div data-final-knowledge="knot-exam-verdict" style={{position: 'absolute', left: 1064, top: 492, width: 712, height: 252, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px'}}>
        <Enter delay={216} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <GraduationCap size={28} color={C.hemp} style={{flexShrink: 0}} />
          <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>2022金题 · 正确答案 CD</span>
        </Enter>
        <div style={{marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={230} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <Chip tone="panel" style={{fontSize: 22, border: `2px solid ${C.panelLine}`}}>C 对乙公司连带 ✓</Chip>
            <Chip tone="panel" style={{fontSize: 22, border: `2px solid ${C.panelLine}`}}>D 清偿后追偿 ✓</Chip>
          </Enter>
          <Enter delay={244} style={{fontSize: 22, color: C.chalkDim, fontWeight: 750}}>A、B 的排除理由在 03 场景：一根缆外的事故</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const SigningNameForkScene = () => (
  <Shell code="02" title="以谁的名义签约：两条签道两个后果">
    <div data-layout="dual-signing-lanes" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,stamp" data-visual-grammar="dual-signing-lanes,name-consequence-fork" data-focal-rule="the-signing-name-decides-the-fallback-company-first-or-promoters-jointly-when-incorporation-fails" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="name-zhang-own" style={{position: 'absolute', left: 0, top: 0, width: 864, height: 560, backgroundColor: C.panel, border: `3px solid ${C.indigoLine}`, borderRadius: 16, padding: '16px 22px'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Users size={28} color={C.hemp} style={{flexShrink: 0}} />
          <LabelBlock size={27}>张某签道 · 自己名义</LabelBlock>
        </Enter>
        <Enter delay={20} style={{marginTop: 14, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
          <Chip tone="panel" style={{fontSize: 22}}><FileText size={22} color={C.chalk} style={{flexShrink: 0}} />购办公用品 50 万</Chip>
          <Chip tone="panel" style={{fontSize: 22}}>相对人：甲公司</Chip>
        </Enter>
        <div style={{marginTop: 16, backgroundColor: C.indigo, borderRadius: 10, padding: '12px 16px'}}>
          <Enter delay={34} style={{fontSize: 23, fontWeight: 900, color: C.chalk}}>公司成立后</Enter>
          <Enter delay={46} style={{marginTop: 8, fontSize: 22, fontWeight: 750, color: C.chalk, lineHeight: 1.6}}>甲公司<SoftHi style={{fontSize: 21}}>择一</SoftHi>：找公司或找张某</Enter>
        </div>
        <div style={{marginTop: 14, backgroundColor: C.indigo, borderRadius: 10, padding: '12px 16px'}}>
          <Enter delay={62} style={{fontSize: 23, fontWeight: 900, color: C.chalk}}>公司未成立（本案）</Enter>
          <Enter delay={74} style={{marginTop: 8, fontSize: 22, fontWeight: 750, color: C.chalk, lineHeight: 1.6}}>全体发起人<ThinU color={C.hemp}>连带担责</ThinU>——缆一起绷</Enter>
        </div>
      </div>
      <div data-final-knowledge="name-wang-incorporating" style={{position: 'absolute', left: 896, top: 0, width: 880, height: 560, backgroundColor: C.panel, border: `3px solid ${C.hemp}`, borderRadius: 16, padding: '16px 22px'}}>
        <Enter delay={90} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Building2 size={28} color={C.hemp} style={{flexShrink: 0}} />
          <LabelBlock size={27}>王某签道 · 设立中公司名义</LabelBlock>
        </Enter>
        <Enter delay={104} style={{marginTop: 14, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
          <Chip tone="panel" style={{fontSize: 22}}><FileText size={22} color={C.chalk} style={{flexShrink: 0}} />租五间办公室</Chip>
          <Chip tone="panel" style={{fontSize: 22}}>相对人：乙公司</Chip>
        </Enter>
        <div style={{marginTop: 16, backgroundColor: C.indigo, borderRadius: 10, padding: '12px 16px'}}>
          <Enter delay={118} style={{fontSize: 23, fontWeight: 900, color: C.chalk}}>公司成立后</Enter>
          <Enter delay={130} style={{marginTop: 8, fontSize: 22, fontWeight: 750, color: C.chalk, lineHeight: 1.6}}>公司承受合同——<ThinU color={C.jade}>公司担责</ThinU>为第一顺位</Enter>
        </div>
        <div style={{marginTop: 14, backgroundColor: C.indigo, borderRadius: 10, padding: '12px 16px'}}>
          <Enter delay={146} style={{fontSize: 23, fontWeight: 900, color: C.chalk}}>公司未成立（本案）</Enter>
          <Enter delay={158} style={{marginTop: 8, fontSize: 22, fontWeight: 750, color: C.chalk, lineHeight: 1.6}}>发起人<ThinU color={C.seal}>连带</ThinU>——乙公司可任选发起人追究（C 项）</Enter>
          <Enter delay={172} style={{marginTop: 8}}><Stamp delay={178} tone="hemp">王某已清偿 → 按份额追偿（D 项）</Stamp></Enter>
        </div>
      </div>
      <div data-final-knowledge="name-rule-summary" style={{position: 'absolute', left: 0, right: 0, top: 586, height: 158, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1, display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={190} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <LabelBlock color={C.hemp} light size={24}>一句话记住</LabelBlock>
            <span style={{fontSize: 23, fontWeight: 850, color: C.chalk, lineHeight: 1.6}}>成立看名义定第一顺位；失败一律发起人连带</span>
          </Enter>
        </div>
        <div style={{width: 500, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={206} style={{fontSize: 22, color: C.chalkDim, fontWeight: 750, lineHeight: 1.7}}>两条签道最终汇进同一根失败之缆——差别只在<ThinU color={C.hemp}>公司成立后谁先担</ThinU></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const TortBoundaryScene = () => (
  <Shell code="03" title="缆道之外：个人侵权与私利剪除">
    <div data-layout="boundary-line-carveout" data-visual-anchor="boundary" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="boundary-exclusion,private-benefit-carveout" data-focal-rule="torts-off-incorporation-duty-stay-personal-while-self-dealing-clauses-are-carved-out-of-company-liability" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="tort-personal-crash" style={{position: 'absolute', left: 0, top: 0, width: 888, height: 300, backgroundColor: C.panel, border: `3px solid ${C.seal}`, borderRadius: 14, padding: '14px 22px'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <AlertTriangle size={28} color={C.seal} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={27}>李某旅游途中撞伤刘某</LabelBlock>
          <Chip tone="panel" style={{fontSize: 22}}>全责</Chip>
        </Enter>
        <Enter delay={22} style={{marginTop: 14, fontSize: 23, fontWeight: 850, color: C.chalk, lineHeight: 1.6}}>事故发生在<ThinU color={C.seal}>缆道之外</ThinU>——与设立无关的个人侵权</Enter>
        <Enter delay={36} style={{marginTop: 10, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <Stamp delay={44} tone="seal">李某个人担责</Stamp>
          <Neg size={22}>A 项：刘某找张某王某连带——找错人</Neg>
        </Enter>
      </div>
      <div data-final-knowledge="tort-duty-comparison" style={{position: 'absolute', left: 920, top: 0, width: 856, height: 300, backgroundColor: C.paper, borderRadius: 14, padding: '14px 22px', boxShadow: `0 8px 20px ${C.shadow}`}}>
        <Enter delay={58} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Users size={28} color={C.ink} style={{flexShrink: 0}} />
          <LabelBlock color={C.jade} size={27}>对照 · 履行设立职责致损</LabelBlock>
        </Enter>
        <div style={{marginTop: 14, display: 'flex', gap: 14}}>
          <div style={{flex: 1, backgroundColor: C.panel, borderRadius: 10, padding: '10px 14px'}}>
            <Enter delay={72} style={{fontSize: 22, fontWeight: 900, color: C.ink}}>公司成立</Enter>
            <Enter delay={82} style={{marginTop: 6, fontSize: 22, fontWeight: 750, color: C.ink}}>由<ThinU color={C.jade}>公司承担</ThinU></Enter>
          </div>
          <div style={{flex: 1, backgroundColor: C.panel, borderRadius: 10, padding: '10px 14px'}}>
            <Enter delay={94} style={{fontSize: 22, fontWeight: 900, color: C.ink}}>未成立</Enter>
            <Enter delay={104} style={{marginTop: 6, fontSize: 22, fontWeight: 750, color: C.ink}}>发起人<ThinU color={C.seal}>连带</ThinU></Enter>
          </div>
        </div>
        <Enter delay={116} style={{marginTop: 14, fontSize: 22, fontWeight: 750, color: C.ink, lineHeight: 1.6}}>撞人不在设立职责内——两种情形都轮不到其他发起人</Enter>
      </div>
      <div data-final-knowledge="carveout-private-benefit" style={{position: 'absolute', left: 0, top: 326, width: 1064, height: 418, backgroundColor: C.indigo, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={130} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Scissors size={28} color={C.hemp} style={{flexShrink: 0}} />
          <LabelBlock size={27}>私利免责 · 剪除一股</LabelBlock>
        </Enter>
        <Enter delay={146} style={{marginTop: 14, fontSize: 23, fontWeight: 800, color: C.chalk, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
          <span>以设立中公司名义签约</span>
          <SoftHi style={{fontSize: 22}}>谋私利</SoftHi>
          <span>＋</span>
          <SoftHi style={{fontSize: 22}}>相对人知情</SoftHi>
        </Enter>
        <Enter delay={164} style={{marginTop: 12, fontSize: 23, fontWeight: 900, color: C.chalk, lineHeight: 1.7}}>公司<ThinU color={C.hemp}>可以主张免责</ThinU>——只担其余债务</Enter>
        <div style={{marginTop: 16, border: `3px dashed ${C.hemp}`, borderRadius: 12, padding: '12px 18px'}}>
          <Enter delay={180} style={{fontSize: 22, fontWeight: 900, color: C.hemp}}>例：王某明示一间房用作自家超市仓库</Enter>
          <Enter delay={192} style={{marginTop: 8, fontSize: 22, fontWeight: 750, color: C.chalk, lineHeight: 1.6}}>庄安公司有权<SoftHi style={{fontSize: 21}}>拒担该间租金</SoftHi>——只担另外四间</Enter>
        </div>
      </div>
      <div data-final-knowledge="carveout-exam-verdict" style={{position: 'absolute', left: 1096, top: 326, width: 680, height: 418, backgroundColor: C.ink, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={208} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <GraduationCap size={28} color={C.hemp} style={{flexShrink: 0}} />
          <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>题支排除区收口</span>
        </Enter>
        <div style={{marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={222} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <Neg size={22}>A 刘某连带三人——侵权与设立无关</Neg>
          </Enter>
          <Enter delay={236} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <Neg size={22}>B 按份额对甲公司担责——份额仅对内</Neg>
          </Enter>
          <Enter delay={250} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <Chip tone="jade" style={{fontSize: 22}}>C 对乙公司连带 ✓</Chip>
            <Chip tone="jade" style={{fontSize: 22}}>D 清偿后追偿 ✓</Chip>
          </Enter>
        </div>
        <Enter delay={266} style={{marginTop: 18, fontSize: 22, color: C.chalkDim, fontWeight: 750, lineHeight: 1.7}}>判断顺序：先问在不在缆道上（设立职责），再问缆成没成，最后看有没有要剪的私利股</Enter>
      </div>
    </div>
  </Shell>
);

export const PromoterLiabilityRopewalk = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-failure-knot" {...SCENES.failureKnot}><FailureKnotScene /></TimelineSequence>
    <TimelineSequence name="02-signing-name-fork" {...SCENES.signingNameFork}><SigningNameForkScene /></TimelineSequence>
    <TimelineSequence name="03-tort-boundary-line" {...SCENES.tortBoundary}><TortBoundaryScene /></TimelineSequence>
  </AbsoluteFill>
);
