import {AbsoluteFill} from 'remotion';
import {Ban, Coins, Flag, Gavel, GraduationCap, Megaphone, Percent, Scale, Users, Vote} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, IconChip, LabelBlock, Neg, Shell, SoftHi, Stamp as TenderStamp, ThinU, Watermark} from './theme';

export const TenderRuleScene = () => (
  <Shell code="01" title="30%临界值与强制要约">
    <div data-layout="tender-offer-rule-hall" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="mandatory-tender-threshold-rule,equal-treatment-rule" data-focal-rule="crossing-thirty-percent-triggers-a-tender-to-all-shareholders-with-equal-treatment-and-legal-amendment-allowed" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="to-threshold-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 460, backgroundColor: C.panel, border: `3px solid ${C.gold}`, borderRadius: 16, padding: '14px 20px', boxShadow: `0 10px 26px ${C.shadow}`, display: 'flex', flexDirection: 'column', gap: 9, overflow: 'hidden'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Percent size={28} color={C.gold} style={{flexShrink: 0}} />
          <LabelBlock color={C.gold} size={25}>30% 临界值 · 强制要约</LabelBlock>
        </Enter>
        <Enter delay={24}><IconChip icon={<Megaphone size={28} color={C.ink} strokeWidth={2.2} />} tone={C.gold} title="达30%继续收购">——应当向<SoftHi light style={{fontSize: 20}}>全体股东发出要约</SoftHi>并公告</IconChip></Enter>
        <Enter delay={44}><IconChip icon={<Scale size={28} color={C.ticker} strokeWidth={2.2} />} tone={C.green} title="C ✓ 要约收购须一视同仁">——<Neg light size={20}>不得再与大股东协议购买</Neg></IconChip></Enter>
        <Enter delay={64}><IconChip icon={<Ban size={28} color={C.ticker} strokeWidth={2.2} />} tone={C.red} title="D ✗ 要约并非不得变更">——符合法定条件<ThinU color={C.gold}>可以变更</ThinU>，变更后需公告</IconChip></Enter>
        <Watermark><Percent size={170} color={C.gold} strokeWidth={1.6} /></Watermark>
      </div>
      <div data-final-knowledge="to-result-desk" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 460, backgroundColor: C.panel, border: `3px solid ${C.green}`, borderRadius: 16, padding: '14px 20px', boxShadow: `0 10px 26px ${C.shadow}`, display: 'flex', flexDirection: 'column', gap: 9, overflow: 'hidden'}}>
        <Enter delay={44} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Scale size={28} color={C.green} style={{flexShrink: 0}} />
          <LabelBlock color={C.green} size={25}>A ✗ · 收购成功后的结果轴</LabelBlock>
        </Enter>
        <Enter delay={64}><IconChip icon={<Scale size={28} color={C.ticker} strokeWidth={2.2} />} tone={C.green} title="股份集中度不影响上市条件">——收购股份未达75%<SoftHi light style={{fontSize: 20}}>不退市</SoftHi></IconChip></Enter>
        <Enter delay={84}><IconChip icon={<Gavel size={28} color={C.ticker} strokeWidth={2.2} />} tone={C.red} title="不再符合上市条件">——才终止上市并引发强制收购</IconChip></Enter>
        <Enter delay={104}><IconChip icon={<Megaphone size={28} color={C.ticker} strokeWidth={2.2} />} tone={C.gold} title="B ✓ 收购失败不影响正常交易">——仍有权继续购买吉达股份</IconChip></Enter>
        <Watermark><Scale size={150} color={C.green} strokeWidth={1.6} /></Watermark>
      </div>
      <div data-final-knowledge="to-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 486, height: 180, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={124} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.gold} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.ticker}}>2016-3-75 · 正确答案 BC</span>
          </Enter>
          <Enter delay={144} style={{marginTop: 10, fontSize: 21, fontWeight: 750, color: 'rgba(238,242,247,0.72)', lineHeight: 1.8}}>背诵三连：达30%发要约 · 要约一视同仁 · 结果依股份集中度定</Enter>
        </div>
        <div style={{width: 430, borderLeft: `3px dashed rgba(238,242,247,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={164}><TenderStamp delay={170} tone="gold">一视同仁</TenderStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const EarlyWarningScene = () => (
  <Shell code="02" title="预警制度：举牌＋慢走">
    <div data-layout="disclosure-earlywarning-stairs" data-visual-anchor="timeline-gate" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="five-percent-disclosure-staircase-rule,late-walk-vote-freeze-rule" data-focal-rule="five-percent-triggers-full-disclosure-and-trading-ban-and-late-walk-violations-freeze-excess-votes-for-thirty-six-months" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="ew-stairs-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 460, backgroundColor: C.panel, border: `3px solid ${C.gold}`, borderRadius: 16, padding: '14px 20px', boxShadow: `0 10px 26px ${C.shadow}`, display: 'flex', flexDirection: 'column', gap: 9, overflow: 'hidden'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Flag size={28} color={C.gold} style={{flexShrink: 0}} />
          <LabelBlock color={C.gold} size={25}>举牌三级台阶</LabelBlock>
        </Enter>
        <Enter delay={24}><IconChip icon={<Flag size={28} color={C.ink} strokeWidth={2.2} />} tone={C.gold} title="持股5% 首次举牌">——3日内通知＋公告＋报告＋<SoftHi light style={{fontSize: 20}}>禁止交易</SoftHi></IconChip></Enter>
        <Enter delay={44}><IconChip icon={<Percent size={28} color={C.ticker} strokeWidth={2.2} />} tone={C.green} title="增减5% 再举牌">——3日内通知＋公告＋报告，公告后3日内禁止交易</IconChip></Enter>
        <Enter delay={64}><IconChip icon={<Percent size={28} color={C.ticker} strokeWidth={2.2} />} tone={C.green} title="增减1% 简易举牌">——次日通知＋公告</IconChip></Enter>
        <Watermark><Flag size={170} color={C.gold} strokeWidth={1.6} /></Watermark>
      </div>
      <div data-final-knowledge="ew-liability-desk" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 460, backgroundColor: C.panel, border: `3px solid ${C.red}`, borderRadius: 16, padding: '14px 20px', boxShadow: `0 10px 26px ${C.shadow}`, display: 'flex', flexDirection: 'column', gap: 9, overflow: 'hidden'}}>
        <Enter delay={44} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Gavel size={28} color={C.red} style={{flexShrink: 0}} />
          <LabelBlock color={C.red} size={25}>A ✗ C ✗ · 法律责任轴</LabelBlock>
        </Enter>
        <Enter delay={64}><IconChip icon={<Gavel size={28} color={C.ticker} strokeWidth={2.2} />} tone={C.red} title="违法举牌仅行政处罚">——责令改正＋警告＋罚款，<Neg light size={20}>不丧失买入资格</Neg></IconChip></Enter>
        <Enter delay={84}><IconChip icon={<Ban size={28} color={C.ticker} strokeWidth={2.2} />} tone={C.red} title="处罚不含撤销">——先前购买不受影响</IconChip></Enter>
        <Enter delay={104}><IconChip icon={<Vote size={28} color={C.ticker} strokeWidth={2.2} />} tone={C.gold} title="未依法慢走">——超比例部分<SoftHi light style={{fontSize: 20}}>36个月内</SoftHi>不得行使表决权</IconChip></Enter>
        <Watermark><Gavel size={150} color={C.red} strokeWidth={1.6} /></Watermark>
      </div>
      <div data-final-knowledge="ew-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 486, height: 180, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={124} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.gold} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.ticker}}>2017-3-75 · 正确答案 BD</span>
          </Enter>
          <Enter delay={144} style={{marginTop: 10, fontSize: 21, fontWeight: 750, color: 'rgba(238,242,247,0.72)', lineHeight: 1.8}}>背诵三连：5%举牌慢走 · 违法仅罚不禁 · 联合凑数可要约</Enter>
        </div>
        <div style={{width: 430, borderLeft: `3px dashed rgba(238,242,247,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={164}><TenderStamp delay={170} tone="green">举牌＋慢走</TenderStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const ConcertPartyScene = () => (
  <Shell code="03" title="一致行动人合并计算">
    <div data-layout="concert-party-merge-desk" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="concert-party-aggregation-rule,funding-source-disclosure-rule" data-focal-rule="concert-parties-aggregate-holdings-and-disclose-funding-source-at-five-percent-while-structure-charts-need-control-or-thirty-percent" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="cp-merge-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 460, backgroundColor: C.panel, border: `3px solid ${C.gold}`, borderRadius: 16, padding: '14px 20px', boxShadow: `0 10px 26px ${C.shadow}`, display: 'flex', flexDirection: 'column', gap: 9, overflow: 'hidden'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Users size={28} color={C.gold} style={{flexShrink: 0}} />
          <LabelBlock color={C.gold} size={25}>王某＋投资公司系一致行动人</LabelBlock>
        </Enter>
        <Enter delay={24}><IconChip icon={<Users size={28} color={C.ink} strokeWidth={2.2} />} tone={C.gold} title="A、B账户合并计算">——1.2%＋3.9%＝合计5.1%</IconChip></Enter>
        <Enter delay={44}><IconChip icon={<Vote size={28} color={C.ticker} strokeWidth={2.2} />} tone={C.red} title="A ✗ B ✗ 仅增量受限">——超5%的<SoftHi light style={{fontSize: 20}}>增量0.1%</SoftHi>在36个月内不得行使表决权</IconChip></Enter>
        <Enter delay={64}><IconChip icon={<Flag size={28} color={C.ticker} strokeWidth={2.2} />} tone={C.green} title="达5%即举牌">——3日内通知＋公告＋报告＋禁止交易</IconChip></Enter>
        <Watermark><Users size={170} color={C.gold} strokeWidth={1.6} /></Watermark>
      </div>
      <div data-final-knowledge="cp-disclosure-desk" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 460, backgroundColor: C.panel, border: `3px solid ${C.green}`, borderRadius: 16, padding: '14px 20px', boxShadow: `0 10px 26px ${C.shadow}`, display: 'flex', flexDirection: 'column', gap: 9, overflow: 'hidden'}}>
        <Enter delay={44} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Coins size={28} color={C.green} style={{flexShrink: 0}} />
          <LabelBlock color={C.green} size={25}>披露层级</LabelBlock>
        </Enter>
        <Enter delay={64}><IconChip icon={<Coins size={28} color={C.ticker} strokeWidth={2.2} />} tone={C.green} title="C ✓ 达5%未达20%">——非第一大股东：披露<SoftHi light style={{fontSize: 20}}>收购股份的资金来源</SoftHi></IconChip></Enter>
        <Enter delay={84}><IconChip icon={<Users size={28} color={C.ticker} strokeWidth={2.2} />} tone={C.red} title="D ✗ 股权控制关系结构图">——须第一大股东/实控人且5-20%或20-30%</IconChip></Enter>
        <Enter delay={104}><IconChip icon={<Ban size={28} color={C.ticker} strokeWidth={2.2} />} tone={C.red} title="本案王某不符合">——结构图披露义务不成立</IconChip></Enter>
        <Watermark><Coins size={150} color={C.green} strokeWidth={1.6} /></Watermark>
      </div>
      <div data-final-knowledge="cp-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 486, height: 180, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={124} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.gold} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.ticker}}>2025金题 · 正确答案 C</span>
          </Enter>
          <Enter delay={144} style={{marginTop: 10, fontSize: 21, fontWeight: 750, color: 'rgba(238,242,247,0.72)', lineHeight: 1.8}}>背诵三连：一致行动人合并算 · 超5%增量36个月无表决权 · 5-20%披露资金来源</Enter>
        </div>
        <div style={{width: 430, borderLeft: `3px dashed rgba(238,242,247,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={164}><TenderStamp delay={170} tone="ticker">合并计算</TenderStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const CobaltTenderHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-tender-rule" {...SCENES.tenderRule}><TenderRuleScene /></TimelineSequence>
    <TimelineSequence name="02-early-warning" {...SCENES.earlyWarning}><EarlyWarningScene /></TimelineSequence>
    <TimelineSequence name="03-concert-party" {...SCENES.concertParty}><ConcertPartyScene /></TimelineSequence>
  </AbsoluteFill>
);
