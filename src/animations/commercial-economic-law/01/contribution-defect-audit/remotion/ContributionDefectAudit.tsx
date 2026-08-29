import {AbsoluteFill} from 'remotion';
import {ArrowRightLeft, Coins, FileText, GraduationCap, Home, Scale, TrendingDown, Users, Zap} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp, ThinU} from './theme';

export const DefectiveTitleScene = () => (
  <Shell code="01" title="有瑕疵的房屋出资：两道墨线">
    <div data-layout="dual-line-title-desk" data-visual-anchor="timeline-gate" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="bad-title-chain,delivery-retroactivity-rule" data-focal-rule="contributing-knowingly-stolen-property-bars-good-faith-acquisition-while-delivered-rights-count-from-delivery-not-registration" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="def-bad-title-chain" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 470, backgroundColor: C.paper, border: `3px solid ${C.seal}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 8px 20px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Home size={30} color={C.seal} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={27}>第一道墨线 · 权利瑕疵</LabelBlock>
        </Enter>
        <div style={{marginTop: 16, display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={22} style={{fontSize: 22, fontWeight: 800, color: C.ink, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Chip tone="seal" style={{fontSize: 21}}>乙伪造遗嘱</Chip>非所有权人 → <Chip tone="seal" style={{fontSize: 21}}>无权处分</Chip></Enter>
          <Enter delay={40} style={{fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Chip tone="dai" style={{fontSize: 21}}>创办人知情</Chip>视为公司知情 → <Neg size={22}>公司不能善意取得</Neg></Enter>
          <Enter delay={60} style={{fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.7}}>丙才是真权利人——公司应<SoftHi style={{fontSize: 22}}>向丙返还房屋</SoftHi></Enter>
        </div>
        <div style={{marginTop: 14, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <Stamp delay={78} tone="jade">A ✓ 返还</Stamp>
          <Neg size={22}>B 无需返还——错</Neg>
        </div>
      </div>
      <div data-final-knowledge="def-delivery-clock" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 470, backgroundColor: C.panel, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={92} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Scale size={28} color={C.dai} style={{flexShrink: 0}} />
          <LabelBlock color={C.dai} size={26}>第二道墨线 · 交付原则</LabelBlock>
        </Enter>
        <div style={{marginTop: 16, position: 'relative', height: 250}}>
          <div style={{position: 'absolute', left: 20, top: 10, bottom: 10, width: 4, backgroundColor: C.inkLine}} />
          <Enter delay={106} style={{position: 'absolute', left: 44, top: 6, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'nowrap'}}>
            <Chip tone="dai" style={{fontSize: 22}}>2020-1-1 交付房屋</Chip>
            <Stamp delay={116} tone="jade">起算点</Stamp>
          </Enter>
          <Enter delay={130} style={{position: 'absolute', left: 44, top: 74, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.6}}>自交付日起算实缴出资、享股东权利</Enter>
          <Enter delay={146} style={{position: 'absolute', left: 44, top: 148, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'nowrap'}}>
            <Chip tone="panel" style={{fontSize: 22, border: `2px solid ${C.inkLine}`}}>2020-5-1 办变更登记</Chip>
          </Enter>
          <Enter delay={160} style={{position: 'absolute', left: 44, top: 200, fontSize: 22, fontWeight: 750, color: C.ink, lineHeight: 1.6}}>登记完成<ThinU color={C.dai}>回溯至交付日</ThinU>——D 项 ✗</Enter>
        </div>
        <Enter delay={174} style={{marginTop: 4, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <Stamp delay={180} tone="jade">C ✓ 自交付日享有</Stamp>
        </Enter>
      </div>
      <div data-final-knowledge="def-exam-verdict" style={{position: 'absolute', left: 0, right: 0, top: 496, height: 248, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={190} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.gold} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>2020金题 · 正确答案 AC</span>
          </Enter>
          <Enter delay={206} style={{marginTop: 14, fontSize: 22, fontWeight: 750, color: 'rgba(250,248,241,0.68)', lineHeight: 1.8}}>非货币出资三要点：评估定价防掺水 · 交付原则定时点 · 无权处分走善意取得</Enter>
        </div>
        <div style={{width: 480, borderLeft: `3px dashed rgba(250,248,241,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={222}><Chip tone="gold" style={{fontSize: 22, color: C.ink}}>恶意掺水 → 未全面履行出资</Chip></Enter>
          <Enter delay={234}><Chip tone="gold" style={{fontSize: 22, color: C.ink}}>客观缩水 → 不担责（另有约定除外）</Chip></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const FormsCheckupScene = () => (
  <Shell code="02" title="四种出资形式过验讫台">
    <div data-layout="four-desk-checkup-rows" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,stamp" data-visual-grammar="contribution-legality-audit,depreciation-risk-allocation" data-focal-rule="only-ownership-or-properly-valued-claims-and-money-pass-the-audit-while-knowledge-insiders-defeat-good-faith" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="chk-row-jia" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 108, backgroundColor: C.paper, border: `3px solid ${C.seal}`, borderRadius: 12, padding: '12px 22px', display: 'flex', alignItems: 'center', gap: 14}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'nowrap'}}>
          <Chip tone="ink" style={{fontSize: 22, fontWeight: 950}}>甲</Chip>
          <Home size={26} color={C.seal} style={{flexShrink: 0}} />
          <span style={{fontSize: 23, fontWeight: 850, color: C.ink, whiteSpace: 'nowrap'}}>房产 20 年<ThinU color={C.seal}>使用权</ThinU>出资</span>
        </Enter>
        <span style={{flex: 1}} />
        <Enter delay={20} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'nowrap'}}>
          <span style={{fontSize: 21, fontWeight: 750, color: C.ink, whiteSpace: 'nowrap'}}>公司需独立财产权，除土地使用权外应以所有权出资</span>
          <Stamp delay={30} tone="seal">A ✗ 不合法</Stamp>
        </Enter>
      </div>
      <div data-final-knowledge="chk-row-yi" style={{position: 'absolute', left: 0, right: 0, top: 132, height: 108, backgroundColor: C.paper, border: `3px solid ${C.jade}`, borderRadius: 12, padding: '12px 22px', display: 'flex', alignItems: 'center', gap: 14}}>
        <Enter delay={42} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'nowrap'}}>
          <Chip tone="ink" style={{fontSize: 22, fontWeight: 950}}>乙</Chip>
          <FileText size={26} color={C.jade} style={{flexShrink: 0}} />
          <span style={{fontSize: 23, fontWeight: 850, color: C.ink, whiteSpace: 'nowrap'}}>对欣喜公司的<SoftHi style={{fontSize: 21}}>债权</SoftHi> 估值 300 万出资</span>
        </Enter>
        <span style={{flex: 1}} />
        <Enter delay={56} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'nowrap'}}>
          <span style={{fontSize: 21, fontWeight: 750, color: C.ink, whiteSpace: 'nowrap'}}>事后破产受偿仅 30 万＝客观缩水，公司风险自担</span>
          <Stamp delay={66} tone="jade">合法 · 不补足</Stamp>
        </Enter>
      </div>
      <div data-final-knowledge="chk-row-bing" style={{position: 'absolute', left: 0, right: 0, top: 264, height: 108, backgroundColor: C.paper, border: `3px solid ${C.seal}`, borderRadius: 12, padding: '12px 22px', display: 'flex', alignItems: 'center', gap: 14}}>
        <Enter delay={78} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'nowrap'}}>
          <Chip tone="ink" style={{fontSize: 22, fontWeight: 950}}>丙</Chip>
          <Home size={26} color={C.seal} style={{flexShrink: 0}} />
          <span style={{fontSize: 23, fontWeight: 850, color: C.ink, whiteSpace: 'nowrap'}}>伪造遗嘱取得的<ThinU color={C.seal}>无权处分</ThinU>房屋出资</span>
        </Enter>
        <span style={{flex: 1}} />
        <Enter delay={92} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'nowrap'}}>
          <span style={{fontSize: 21, fontWeight: 750, color: C.ink, whiteSpace: 'nowrap'}}>乙总经理知情 → 公司非善意，不能取得房屋</span>
          <Stamp delay={102} tone="seal">C ✗ 不能取得</Stamp>
        </Enter>
      </div>
      <div data-final-knowledge="chk-row-ding" style={{position: 'absolute', left: 0, right: 0, top: 396, height: 108, backgroundColor: C.paper, border: `3px solid ${C.jade}`, borderRadius: 12, padding: '12px 22px', display: 'flex', alignItems: 'center', gap: 14}}>
        <Enter delay={114} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'nowrap'}}>
          <Chip tone="ink" style={{fontSize: 22, fontWeight: 950}}>丁</Chip>
          <Coins size={26} color={C.jade} style={{flexShrink: 0}} />
          <span style={{fontSize: 23, fontWeight: 850, color: C.ink, whiteSpace: 'nowrap'}}>挪用资金所得 30 万<SoftHi style={{fontSize: 21}}>货币</SoftHi>出资</span>
        </Enter>
        <span style={{flex: 1}} />
        <Enter delay={128} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'nowrap'}}>
          <span style={{fontSize: 21, fontWeight: 750, color: C.ink, whiteSpace: 'nowrap'}}>存入公司账户即有效；犯罪所得只影响追缴方式（处置其股权）</span>
          <Stamp delay={138} tone="jade">D ✓ 有效</Stamp>
        </Enter>
      </div>
      <div data-final-knowledge="chk-exam-verdict" style={{position: 'absolute', left: 0, right: 0, top: 528, height: 216, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={150} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.gold} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>2020金题 · 正确答案 D</span>
          </Enter>
          <Enter delay={166} style={{marginTop: 14, fontSize: 22, fontWeight: 750, color: 'rgba(250,248,241,0.68)', lineHeight: 1.8}}>评估是过滤器：估值确定并交割后，公司不得翻后账——贬值风险自担</Enter>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed rgba(250,248,241,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={182}><Chip tone="gold" style={{fontSize: 22, color: C.ink}}>关键个人（总经理·监事）知情＝公司知情</Chip></Enter>
          <Enter delay={194}><Chip tone="gold" style={{fontSize: 22, color: C.ink}}>货币出资有效 ≠ 赃款安全——追缴走股权处置</Chip></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const TransferDualityScene = () => (
  <Shell code="03" title="转让两张底牌：恶意掺水 vs 未届期">
    <div data-layout="duality-transfer-boards" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="malice-watering-rule,preterm-transfer-succession" data-focal-rule="malicious-post-contribution-devaluation-is-defective-contribution-borne-by-the-transferor-while-pretermitted-transfers-pass-the-duty-to-the-buyer" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="du-malice-board" style={{position: 'absolute', left: 0, top: 0, width: 864, height: 434, backgroundColor: C.paper, border: `3px solid ${C.seal}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 8px 20px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <TrendingDown size={30} color={C.seal} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={27}>2024金题 · 出资后随即贬值</LabelBlock>
        </Enter>
        <Enter delay={24} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.7}}>甲拿梅园股权出资瑞辰，<ThinU color={C.seal}>随即</ThinU>恶意操作致股权大幅贬值</Enter>
        <Enter delay={42} style={{marginTop: 10, fontSize: 22, fontWeight: 900, color: C.ink, lineHeight: 1.7}}>非客观市场原因 → 认定<SoftHi style={{fontSize: 22}}>虚假出资</SoftHi></Enter>
        <div style={{marginTop: 14, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <Stamp delay={60} tone="jade">B ✓ 甲补足差额</Stamp>
          <Neg size={21}>A 免责——错，免责前提是客观+无过错</Neg>
        </div>
        <Enter delay={76} style={{marginTop: 10}}><Neg size={22}>C、D 拉善意受让人乙连带/补充——都不适用</Neg></Enter>
      </div>
      <div data-final-knowledge="du-preterm-board" style={{position: 'absolute', left: 896, top: 0, width: 880, height: 434, backgroundColor: C.panel, border: `3px solid ${C.dai}`, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={90} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <ArrowRightLeft size={30} color={C.dai} style={{flexShrink: 0}} />
          <LabelBlock color={C.dai} size={27}>2025金题 · 未届期股权转让</LabelBlock>
        </Enter>
        <Enter delay={108} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
          <Chip tone="dai" style={{fontSize: 21}}>张某 2027 年才到期</Chip>2025 年转给赵某 → 义务<SoftHi style={{fontSize: 21}}>概括承继</SoftHi>
        </Enter>
        <Enter delay={126} style={{marginTop: 10, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <Chip tone="jade" style={{fontSize: 21}}>赵某 承担出资义务</Chip>
          <Chip tone="gold" style={{fontSize: 21, color: C.ink}}>张某 补充责任（非连带）</Chip>
        </Enter>
        <Enter delay={144} style={{marginTop: 10, fontSize: 21, fontWeight: 750, color: C.ink, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Zap size={22} color={C.dai} style={{flexShrink: 0}} />公司欠乙公司 300 万还不上 → <ThinU color={C.dai}>加速到期</ThinU>：甲公司（C ✓）与乙公司（D ✓）都可要求赵某提前缴</Enter>
        <Enter delay={162} style={{marginTop: 8}}><Neg size={22}>A 王某要求张某缴足——权利人、对象两处皆错　B 连带——错</Neg></Enter>
      </div>
      <div data-final-knowledge="du-recap-verdict" style={{position: 'absolute', left: 0, right: 0, top: 460, height: 284, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={178} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.gold} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>对照背诵 · 转让时的出资责任</span>
          </Enter>
          <div style={{marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12}}>
            <Enter delay={196} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="gold" style={{fontSize: 22, color: C.ink}}>未届期转让</Chip>
              <span style={{fontSize: 22, fontWeight: 850, color: C.paper}}>受让人承担 ＋ 转让人<span style={{color: '#F0C878'}}>补充</span></span>
            </Enter>
            <Enter delay={212} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="gold" style={{fontSize: 22, color: C.ink}}>到期后瑕疵转让</Chip>
              <span style={{fontSize: 22, fontWeight: 850, color: C.paper}}>转让人受让人<span style={{color: '#FFB4A0'}}>连带</span>，受让人证善意可免</span>
            </Enter>
          </div>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed rgba(250,248,241,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={230} style={{fontSize: 22, fontWeight: 800, color: C.paper, lineHeight: 1.7}}>答案收纳：2024 选 B，2025 选 CD</Enter>
          <Enter delay={244} style={{fontSize: 21, fontWeight: 750, color: 'rgba(250,248,241,0.66)', lineHeight: 1.7}}>两题共用一条分界线——出资期限到没到、谁有恶意</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const ContributionDefectAudit = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-defective-title" {...SCENES.defectiveTitle}><DefectiveTitleScene /></TimelineSequence>
    <TimelineSequence name="02-forms-checkup" {...SCENES.formsCheckup}><FormsCheckupScene /></TimelineSequence>
    <TimelineSequence name="03-transfer-duality" {...SCENES.transferDuality}><TransferDualityScene /></TimelineSequence>
  </AbsoluteFill>
);
