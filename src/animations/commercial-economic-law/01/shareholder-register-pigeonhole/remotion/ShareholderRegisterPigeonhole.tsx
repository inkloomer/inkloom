import {AbsoluteFill} from 'remotion';
import {Building2, GraduationCap, HandCoins, Link, Lock, Scale, ScrollText, ShieldCheck, Stamp, UserCheck, Users} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp as StampTag, ThinU} from './theme';

export const TitleTransferScene = () => (
  <Shell code="01" title="换签即取得，挂铜牌才对抗">
    <div data-layout="pigeonhole-slot-transfer" data-visual-anchor="timeline-gate" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="slot-swap-milestone,notice-publicity-gate" data-focal-rule="share-title-passes-at-register-change-while-registration-only-grants-opposability-to-good-faith-third-parties" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="title-register-change" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 312, backgroundColor: C.paper, border: `3px solid ${C.ink}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <ScrollText size={30} color={C.ink} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={28}>股东名册 · 黄铜信格</LabelBlock>
        </Enter>
        <div style={{marginTop: 18, display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={22}><Chip tone="felt" style={{fontSize: 24}}><Users size={24} color={C.ivory} style={{flexShrink: 0}} />甲 · 出让 30%</Chip></Enter>
          <Dash delay={32} style={{flex: 1, borderTop: `4px solid ${C.brass}`}} />
          <Enter delay={40}><Chip tone="brass" style={{fontSize: 24, fontWeight: 950}}>张某 · 换签入格</Chip></Enter>
        </div>
        <Enter delay={52} style={{marginTop: 18, fontSize: 24, fontWeight: 950, color: C.ink}}>名册变更之时 ＝ <SoftHi dark style={{fontSize: 23}}>股权取得之时</SoftHi></Enter>
        <Enter delay={66} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.ink}}><Neg dark size={22}>A 项：未经登记不能取得——错</Neg><span style={{fontWeight: 750, marginLeft: 8}}>登记非生效要件</span></Enter>
      </div>
      <div data-final-knowledge="title-opposability-gate" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 312, backgroundColor: C.panel, border: `3px solid ${C.brass}`, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={80} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Stamp size={28} color={C.brass} style={{flexShrink: 0}} />
          <LabelBlock size={27}>登记 · 挂出铜牌</LabelBlock>
        </Enter>
        <Enter delay={94} style={{marginTop: 16, fontSize: 23, fontWeight: 850, color: C.ivory, lineHeight: 1.7}}>变更登记的效力是<ThinU color={C.brass}>对抗</ThinU>：不挂铜牌，<SoftHi style={{fontSize: 22}}>不得对抗善意相对人</SoftHi></Enter>
        <Enter delay={110} style={{marginTop: 12, fontSize: 22, fontWeight: 750, color: C.ivoryDim, lineHeight: 1.6}}>张某虽未登记已是股东，但对善意第三人臂膀不够长</Enter>
      </div>
      <div data-final-knowledge="title-exam-note" style={{position: 'absolute', left: 0, right: 0, top: 338, height: 188, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={124} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <UserCheck size={28} color={C.brass} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.ivory}}>董事丙的拖延，改变取得时点吗？</span>
          </Enter>
          <Enter delay={138} style={{marginTop: 14, fontSize: 23, fontWeight: 800, color: C.ivory, lineHeight: 1.6}}>不变——名册已换签，张某的股东资格<SoftHi style={{fontSize: 22}}>早已落地</SoftHi></Enter>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={152}><Chip tone="panel" style={{fontSize: 22, border: `2px solid ${C.panelLine}`, color: C.ivory}}>丙的责任怎么算 → 见 03 场景</Chip></Enter>
          <Enter delay={162} style={{fontSize: 22, color: C.brass, fontWeight: 850}}>先行后抗，两问分答</Enter>
        </div>
      </div>
      <div data-final-knowledge="title-waiver-rule" style={{position: 'absolute', left: 0, right: 0, top: 552, height: 192, backgroundColor: C.felt, borderRadius: 14, padding: '16px 24px'}}>
        <Enter delay={176} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'nowrap'}}>
          <Users size={26} color={C.brass} style={{flexShrink: 0}} />
          <span style={{fontSize: 23, fontWeight: 900, color: C.ivory}}>其余股东 30 日内未答复</span>
          <Dash delay={186} style={{flex: 1, borderTop: `3px dashed ${C.panelLine}`}} />
          <StampTag delay={194} tone="seal">视为放弃优先购买</StampTag>
        </Enter>
        <Enter delay={206} style={{marginTop: 14, fontSize: 22, fontWeight: 750, color: C.ivoryDim}}>沉默也是一格表态——优先购买的门口不留长期占位</Enter>
      </div>
    </div>
  </Shell>
);

export const EqualConditionScene = () => (
  <Shell code="02" title="同等条件：天平两端不可替换">
    <div data-layout="two-pan-balance-board" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="two-pan-weighing,consideration-substance-contrast" data-focal-rule="equivalent-condition-compares-consideration-substance-so-cash-cannot-replace-equity-with-its-personal-trust-and-growth-value" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="cond-equity-pan" style={{position: 'absolute', left: 0, top: 0, width: 864, height: 420, backgroundColor: C.paper, border: `3px solid ${C.ink}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Scale size={30} color={C.ink} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={28}>左盘 · 张某的对价</LabelBlock>
        </Enter>
        <div style={{marginTop: 18, display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={22}><Chip tone="felt" style={{fontSize: 24}}><Link size={24} color={C.ivory} style={{flexShrink: 0}} />世城公司股权</Chip></Enter>
          <Enter delay={36}><Chip tone="panel" style={{fontSize: 22, border: `2px solid ${C.panelLine}`}}>内含 人合性 · 发展预期</Chip></Enter>
        </div>
        <Enter delay={52} style={{marginTop: 18, fontSize: 23, fontWeight: 900, color: C.ink}}>股权换股权——<ThinU color={C.seal}>同一种货</ThinU></Enter>
      </div>
      <div data-final-knowledge="cond-cash-pan" style={{position: 'absolute', left: 896, top: 0, width: 880, height: 420, backgroundColor: C.panel, border: `3px dashed ${C.seal}`, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={66} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <HandCoins size={30} color={C.seal} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={28}>右盘 · 乙的出价</LabelBlock>
        </Enter>
        <div style={{marginTop: 18, display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={80}><Chip tone="panel" style={{fontSize: 24, border: `2px solid ${C.panelLine}`}}>等值现金</Chip></Enter>
          <Enter delay={94} style={{marginTop: 4}}><Neg size={23}>现金买不回 人合性 与 发展预期</Neg></Enter>
        </div>
        <Enter delay={108} style={{marginTop: 18, fontSize: 23, fontWeight: 900, color: C.ivory}}>数额相等 ≠ 条件同等</Enter>
      </div>
      <div data-final-knowledge="cond-verdict-d" style={{position: 'absolute', left: 0, top: 446, width: 1064, height: 298, backgroundColor: C.ink, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={122} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <GraduationCap size={28} color={C.brass} style={{flexShrink: 0}} />
          <span style={{fontSize: 24, fontWeight: 900, color: C.ivory}}>2021金题 · D 项当选</span>
          <StampTag delay={134} tone="jade">优先购买不成立</StampTag>
        </Enter>
        <Enter delay={148} style={{marginTop: 14, fontSize: 23, fontWeight: 800, color: C.ivory, lineHeight: 1.7}}>对价是股权，乙只肯出等值现金——<SoftHi style={{fontSize: 22}}>不符合「同等条件」</SoftHi>，优先购买自始立不起来</Enter>
      </div>
      <div data-final-knowledge="cond-summary" style={{position: 'absolute', left: 1096, top: 446, width: 680, height: 298, backgroundColor: C.felt, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={162} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Building2 size={26} color={C.brass} style={{flexShrink: 0}} />
          <LabelBlock color={C.brass} light size={25}>有限公司的门槛</LabelBlock>
        </Enter>
        <Enter delay={176} style={{marginTop: 14, fontSize: 22, fontWeight: 750, color: C.ivory, lineHeight: 1.8}}>人合性 = 股东彼此认人；外部买家进格，先过其他股东这道闸</Enter>
        <Enter delay={192} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.ivoryDim}}>闸开着，但<ThinU color={C.brass}>要用同种对价来开</ThinU></Enter>
      </div>
    </div>
  </Shell>
);

export const BonaFidePledgeScene = () => (
  <Shell code="03" title="凭牌善意取得：质权与责任收口">
    <div data-layout="pledge-bonafide-desk" data-visual-anchor="role-pair" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="good-faith-acquisition-chain,fault-proportioned-liability" data-focal-rule="an-unwitting-pledgee-with-registration-acquires-the-pledge-while-a-dilatory-director-bears-proportionate-not-joint-liability" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="pledge-bonafide-chain" style={{position: 'absolute', left: 0, top: 0, width: 1064, height: 300, backgroundColor: C.paper, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Lock size={30} color={C.ink} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={28}>股权质押 · 2021年8月</LabelBlock>
        </Enter>
        <div style={{marginTop: 16, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'nowrap'}}>
          <Enter delay={22}><Chip tone="felt" style={{fontSize: 23}}><Users size={22} color={C.ivory} style={{flexShrink: 0}} />甲 出质</Chip></Enter>
          <Dash delay={32} style={{flex: 1, borderTop: `4px solid ${C.brass}`}} />
          <Enter delay={40}><Chip tone="brass" style={{fontSize: 23}}><UserCheck size={22} color={C.ink} style={{flexShrink: 0}} />李某 不知情</Chip></Enter>
          <Dash delay={50} style={{flex: 1, borderTop: `4px solid ${C.brass}`}} />
          <Enter delay={58}><Chip tone="felt" style={{fontSize: 23}}><Stamp size={22} color={C.ivory} style={{flexShrink: 0}} />已办质押登记</Chip></Enter>
        </div>
        <Enter delay={72} style={{marginTop: 16, fontSize: 23, fontWeight: 900, color: C.ink}}>不知情 ＋ 登记 → <SoftHi dark style={{fontSize: 23}}>善意取得质权</SoftHi></Enter>
        <Enter delay={86} style={{marginTop: 10, display: 'flex', alignItems: 'center', gap: 12}}><Neg dark size={22}>B 项：李某不能取得质权——错</Neg></Enter>
      </div>
      <div data-final-knowledge="pledge-director-fault" style={{position: 'absolute', left: 1096, top: 0, width: 680, height: 300, backgroundColor: C.panel, border: `3px solid ${C.brass}`, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={100} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Users size={28} color={C.brass} style={{flexShrink: 0}} />
          <LabelBlock size={26}>董事丙 · 拖延变更登记</LabelBlock>
        </Enter>
        <Enter delay={114} style={{marginTop: 14, fontSize: 23, fontWeight: 850, color: C.ivory, lineHeight: 1.7}}>未尽勤勉义务 → 承担<ThinU color={C.brass}>相应责任</ThinU></Enter>
        <Enter delay={128} style={{marginTop: 10}}><Neg size={23}>C 项：甲和丙连带——并非连带</Neg></Enter>
      </div>
      <div data-final-knowledge="pledge-double-sale-rule" style={{position: 'absolute', left: 0, top: 326, width: 1064, height: 418, backgroundColor: C.ink, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={142} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <ScrollText size={28} color={C.brass} style={{flexShrink: 0}} />
          <LabelBlock color={C.brass} light size={27}>一股二卖规则板</LabelBlock>
        </Enter>
        <div style={{marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={158} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Chip tone="panel" style={{fontSize: 22, border: `2px solid ${C.panelLine}`, color: C.ivory}}>二卖性质：无权处分</Chip>
            <span style={{fontSize: 24, fontWeight: 950, color: C.ivory}}>＋</span>
            <Chip tone="panel" style={{fontSize: 22, border: `2px solid ${C.panelLine}`, color: C.ivory}}>受让人善意取得</Chip>
          </Enter>
          <Enter delay={174}><Neg size={22}>不得对抗善意登记质权人——李某的锁先挂上</Neg></Enter>
          <Enter delay={188} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Chip tone="panel" style={{fontSize: 22, border: `2px solid ${C.panelLine}`, color: C.ivory}}>一卖救济：向转让股东追偿</Chip>
            <span style={{fontSize: 24, fontWeight: 950, color: C.ivory}}>＋</span>
            <Chip tone="panel" style={{fontSize: 22, border: `2px solid ${C.panelLine}`, color: C.ivory}}>向有过错董事高管实控追相应责任</Chip>
          </Enter>
        </div>
      </div>
      <div data-final-knowledge="pledge-exam-recap" style={{position: 'absolute', left: 1096, top: 326, width: 680, height: 418, backgroundColor: C.felt, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={204} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <GraduationCap size={28} color={C.brass} style={{flexShrink: 0}} />
          <ShieldCheck size={24} color={C.brass} style={{flexShrink: 0}} />
          <span style={{fontSize: 24, fontWeight: 900, color: C.ivory}}>三问收卷</span>
        </Enter>
        <div style={{marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={220} style={{fontSize: 22, fontWeight: 750, color: C.ivory, lineHeight: 1.6}}>① 张某取得股权了吗？——名册换签即取得（A 错）</Enter>
          <Enter delay={234} style={{fontSize: 22, fontWeight: 750, color: C.ivory, lineHeight: 1.6}}>② 李某有质权吗？——善意＋登记，有（B 错）</Enter>
          <Enter delay={248} style={{fontSize: 22, fontWeight: 750, color: C.ivory, lineHeight: 1.6}}>③ 丙怎么赔？——相应责任，不连带（C 错）</Enter>
        </div>
        <Enter delay={264} style={{marginTop: 16, display: 'flex', justifyContent: 'flex-end'}}><StampTag delay={270} tone="brass">正确答案 D</StampTag></Enter>
      </div>
    </div>
  </Shell>
);

export const ShareholderRegisterPigeonhole = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-title-transfer" {...SCENES.titleTransfer}><TitleTransferScene /></TimelineSequence>
    <TimelineSequence name="02-equal-condition" {...SCENES.equalCondition}><EqualConditionScene /></TimelineSequence>
    <TimelineSequence name="03-bona-fide-pledge" {...SCENES.bonaFidePledge}><BonaFidePledgeScene /></TimelineSequence>
  </AbsoluteFill>
);
