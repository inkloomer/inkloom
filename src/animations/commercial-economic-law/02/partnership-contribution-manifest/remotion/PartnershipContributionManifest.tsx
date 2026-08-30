import {AbsoluteFill} from 'remotion';
import {ArrowDownUp, Coins, FileText, GraduationCap, HandCoins, KeyRound, Scale, Stamp, TrendingDown, Users} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp as GiftStamp, ThinU} from './theme';

export const FreedomDeskScene = () => (
  <Shell code="01" title="礼单不拘形式：出资与偿债两层皮">
    <div data-layout="two-layer-relation-desk" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation" data-visual-grammar="unrestricted-contribution-rule,internal-external-relation-split" data-focal-rule="partnership-contributions-take-any-form-without-transfers-while-creditor-protection-runs-through-unlimited-joint-liability-not-the-manifest" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="free-manifest-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 322, backgroundColor: C.panel, border: `3px solid ${C.banner}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <KeyRound size={30} color={C.banner} style={{flexShrink: 0}} />
          <LabelBlock size={27}>甲的礼单 · 房屋使用权＋现金 100 万</LabelBlock>
        </Enter>
        <Enter delay={24} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.manifest, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>普通合伙<SoftHi style={{fontSize: 21}}>出资无限制</SoftHi>：使用权出资合法有效</span>
          <span>房屋交付作店面<ThinU color={C.banner}>即可</ThinU>——无需过户登记（C ✗）</span>
          <span>现金认缴到 2025 年底——期限随意约定</span>
        </Enter>
      </div>
      <div data-final-knowledge="free-two-layer-desk" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 322, backgroundColor: C.panel, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <ArrowDownUp size={28} color={C.manifest} style={{flexShrink: 0}} />
          <LabelBlock size={25}>两层皮 · 别混在一口锅里</LabelBlock>
        </Enter>
        <div style={{marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={56} style={{fontSize: 21, fontWeight: 750, color: C.manifest, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="panel" style={{fontSize: 20, border: `2px solid ${C.panelLine}`}}>里层</Chip>出资＝甲与合伙的内部约定</Enter>
          <Enter delay={70} style={{fontSize: 21, fontWeight: 750, color: C.manifest, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="banner" style={{fontSize: 20, color: C.ink}}>外层</Chip>偿债＝合伙人对债权人的法定责任</Enter>
          <Enter delay={84} style={{fontSize: 21, fontWeight: 750, color: C.manifestDim, lineHeight: 1.6}}>丁公司管不着里层——A「提前缴纳」✗、D「拿期限抗辩」✗</Enter>
        </div>
      </div>
      <div data-final-knowledge="free-liability-verdict" style={{position: 'absolute', left: 0, right: 0, top: 348, height: 396, backgroundColor: C.ink, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={100} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <HandCoins size={28} color={C.banner} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.manifest}}>古玩店欠丁公司还不上 → 怎么办？</span>
          </Enter>
          <Enter delay={118} style={{marginTop: 14, fontSize: 23, fontWeight: 900, color: C.manifest, lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 10}}>
            <span>普通合伙＝<SoftHi style={{fontSize: 22}}>非法人组织</SoftHi></span>
            <span>甲对不能清偿的债务承担<ThinU color={C.banner}>无限连带责任</ThinU>（B ✓）</span>
            <span style={{fontSize: 21, fontWeight: 750, color: C.manifestDim}}>出资是否到期、是否过户——都不影响债权人伸手</span>
          </Enter>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12}}>
          <Enter delay={140} style={{fontSize: 23, fontWeight: 900, color: C.banner}}>对照 · 公司那一侧</Enter>
          <Enter delay={156} style={{fontSize: 21, fontWeight: 750, color: C.manifest, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
            <span>· 公司是独立法人，股东出资须<ThinU color={C.banner}>转移所有权</ThinU></span>
            <span>· 债权人保护靠<ThinU color={C.banner}>加速到期</ThinU></span>
            <span>· 合伙靠<SoftHi style={{fontSize: 20}}>人身无限连带</SoftHi>——所以礼单可以随便开</span>
          </Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const ArrearsDeskScene = () => (
  <Shell code="02" title="欠缴两本账：普人宽、限人严">
    <div data-layout="arrears-two-column-desk" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="labor-contribution-scope,arrears-makeup-rule" data-focal-rule="general-partners-may-labor-contribute-and-owe-no-makeup-while-limited-partners-must-make-up-and-answer-for-default" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="arr-labor-desk" style={{position: 'absolute', left: 0, top: 0, width: 576, height: 470, backgroundColor: C.panel, border: `3px solid ${C.banner}`, borderRadius: 16, padding: '16px 22px', boxShadow: `0 8px 20px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Users size={28} color={C.banner} style={{flexShrink: 0}} />
          <LabelBlock size={26}>普通合伙人 · 甲公司</LabelBlock>
        </Enter>
        <Enter delay={22} style={{marginTop: 14, fontSize: 23, fontWeight: 900, color: C.manifest, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>以<SoftHi style={{fontSize: 22}}>劳务出资</SoftHi>，作价 200 万——合法（A ✓）</span>
          <span>出资无限制的极致：连<ThinU color={C.banner}>力气</ThinU>都能入伙</span>
        </Enter>
        <div style={{marginTop: 16, border: `3px dashed ${C.panelLine}`, borderRadius: 10, padding: '12px 16px'}}>
          <Enter delay={40} style={{fontSize: 21, fontWeight: 750, color: C.manifestDim, lineHeight: 1.7}}>普通合伙人未缴足：协议有约定按约定；<Neg size={20}>无约定也无需补缴</Neg>——但偿债照样无限连带兜底</Enter>
        </div>
      </div>
      <div data-final-knowledge="arr-limited-desk" style={{position: 'absolute', left: 600, top: 0, width: 1176, height: 470, backgroundColor: C.panel, border: `3px solid ${C.seal}`, borderRadius: 16, padding: '16px 22px'}}>
        <Enter delay={56} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Coins size={28} color={C.seal} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={26}>有限合伙人 · 张某 王某（认缴 500 实缴 200）</LabelBlock>
        </Enter>
        <div style={{marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={74} style={{fontSize: 22, fontWeight: 850, color: C.manifest, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <Neg size={21}>有限合伙人不得以劳务出资</Neg>
            <Dash delay={84} style={{flex: 1, minWidth: 60, borderTop: `3px dashed ${C.panelLine}`}} />
            <Chip tone="seal" style={{fontSize: 20}}>未按期足额＝法定义务违约</Chip>
          </Enter>
          <Enter delay={96} style={{fontSize: 22, fontWeight: 800, color: C.manifest, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
            <span>· 对合伙企业：<ThinU color={C.banner}>补缴出资</ThinU>各 300 万（C 说无需补缴 ✗）</span>
            <span>· 对其他合伙人：承担<ThinU color={C.banner}>违约责任</ThinU>（B ✓）</span>
          </Enter>
          <Enter delay={116} style={{marginTop: 4, fontSize: 20, fontWeight: 750, color: C.manifestDim, lineHeight: 1.7}}>两本账的落差来自身份：普人担的是「人身无限连带」，欠不欠缴都跑不掉；限人担的是「钱」，所以钱必须补齐</Enter>
        </div>
      </div>
      <div data-final-knowledge="arr-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 496, height: 248, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={134} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.banner} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.manifest}}>2024金题 · 已锁定 A、B</span>
          </Enter>
          <Enter delay={152} style={{marginTop: 12, fontSize: 22, fontWeight: 750, color: 'rgba(245,236,216,0.68)', lineHeight: 1.8}}>第三问落在李某身上：从有限合伙人转成普通合伙人后，600 万债务怎么办？——见 03 场景</Enter>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={170}><GiftStamp delay={176} tone="jade">A ✓ 劳务出资</GiftStamp></Enter>
          <Enter delay={188}><GiftStamp delay={196} tone="jade">B ✓ 违约责任</GiftStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const ConversionScene = () => (
  <Shell code="03" title="换马不卸鞍：身份转换前后都连带">
    <div data-layout="conversion-timeline-desk" data-visual-anchor="timeline-gate" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="conversion-liability-continuity,identity-swap-recap" data-focal-rule="a-limited-partner-turning-general-carries-unlimited-joint-liability-across-the-switch-in-both-directions" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="conv-timeline-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 322, backgroundColor: C.chart, border: `3px solid ${C.seal}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 8px 20px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Stamp size={28} color={C.seal} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={26}>李某的时间线 · 入伙 → 欠债 → 换身份</LabelBlock>
        </Enter>
        <div style={{marginTop: 18, position: 'relative', height: 170}}>
          <div style={{position: 'absolute', left: 10, right: 10, top: 78, height: 5, backgroundColor: C.inkLine}} />
          {[
            {x: 10, tag: '入伙：出资 100 万当有限合伙人', tone: 'jade' as const, d: 24},
            {x: 360, tag: '合伙欠乙公司货款 600 万', tone: 'seal' as const, d: 40},
            {x: 690, tag: '转普通合伙人 · 执行事务', tone: 'banner' as const, d: 56},
          ].map((n) => (
            <div key={n.tag} style={{position: 'absolute', left: n.x, top: 0, width: 320}}>
              <Enter delay={n.d}><Chip tone={n.tone} style={{fontSize: 19}}>{n.tag}</Chip></Enter>
              <div style={{position: 'absolute', left: 12, top: 70, width: 14, height: 14, borderRadius: 7, backgroundColor: n.tone === 'jade' ? C.jade : n.tone === 'seal' ? C.seal : C.banner}} />
            </div>
          ))}
        </div>
        <Enter delay={72} style={{marginTop: 4, fontSize: 22, fontWeight: 900, color: C.ink}}>转换前发生的 600 万债务 → 李某<ThinU color={C.seal}>照样无限连带</ThinU>（D ✓）</Enter>
      </div>
      <div data-final-knowledge="conv-rule-board" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 322, backgroundColor: C.panel, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={88} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <ArrowDownUp size={28} color={C.manifest} style={{flexShrink: 0}} />
          <LabelBlock size={25}>规则板 · 双向都成立</LabelBlock>
        </Enter>
        <div style={{marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={104} style={{fontSize: 21, fontWeight: 750, color: C.manifest, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="banner" style={{fontSize: 20, color: C.ink}}>有限 → 普通</Chip>转换前的债务也无限连带</Enter>
          <Enter delay={118} style={{fontSize: 21, fontWeight: 750, color: C.manifest, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="seal" style={{fontSize: 20}}>普通 → 有限</Chip>转换后的债务仍无限连带</Enter>
          <Enter delay={132} style={{fontSize: 20, fontWeight: 750, color: C.manifestDim, lineHeight: 1.6}}>口诀：往「普通」走过的路，责任都记得</Enter>
        </div>
      </div>
      <div data-final-knowledge="conv-recap-verdict" style={{position: 'absolute', left: 0, right: 0, top: 348, height: 396, backgroundColor: C.ink, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={150} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.banner} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.manifest}}>2024金题 · 正确答案 ABD</span>
          </Enter>
          <div style={{marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10}}>
            <Enter delay={168} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Chip tone="banner" style={{fontSize: 21, color: C.ink}}>A 劳务出资 ✓</Chip><Chip tone="banner" style={{fontSize: 21, color: C.ink}}>B 违约 ✓</Chip><Chip tone="banner" style={{fontSize: 21, color: C.ink}}>D 转换连带 ✓</Chip></Enter>
            <Enter delay={184} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Neg size={21}>C 无需补缴——限人的钱必须补齐</Neg></Enter>
          </div>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12}}>
          <Enter delay={202} style={{fontSize: 23, fontWeight: 900, color: C.banner}}>全章两句</Enter>
          <Enter delay={216} style={{fontSize: 22, fontWeight: 800, color: 'rgba(245,236,216,0.85)', lineHeight: 1.8}}>普人礼单随便开、偿债无限连带；限人钱要补齐、<ThinU color={C.banner}>换马不卸鞍</ThinU></Enter>
          <Enter delay={236}><GiftStamp delay={242} tone="banner">考点2 收卷</GiftStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const PartnershipContributionManifest = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-freedom-desk" {...SCENES.freedomDesk}><FreedomDeskScene /></TimelineSequence>
    <TimelineSequence name="02-arrears-desk" {...SCENES.arrearsDesk}><ArrearsDeskScene /></TimelineSequence>
    <TimelineSequence name="03-conversion" {...SCENES.conversion}><ConversionScene /></TimelineSequence>
  </AbsoluteFill>
);
