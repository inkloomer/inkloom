import {AbsoluteFill} from 'remotion';
import {ArrowRightLeft, Coins, Eye, FileText, Gavel, GraduationCap, HandCoins, Landmark, Link, Mail, Stamp, UserCheck, Users, VenetianMask, Zap} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp as SeatStamp, ThinU} from './theme';

export const ResignRemovalScene = () => (
  <Shell code="01" title="董事去留：辞职、解职、超期服役">
    <div data-layout="three-rule-bench" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="unilateral-resignation-rule,quorum-overservice-rule,linked-resignation-rule" data-focal-rule="directors-resign-at-will-effective-on-notice-can-be-removed-without-cause-and-serve-terms-out-only-when-the-bench-drops-below-three" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="res-resign-rule" style={{position: 'absolute', left: 0, top: 0, width: 576, height: 372, backgroundColor: C.panel, border: `3px solid ${C.gold}`, borderRadius: 16, padding: '16px 22px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Mail size={28} color={C.gold} style={{flexShrink: 0}} />
          <LabelBlock size={26}>无因辞职</LabelBlock>
        </Enter>
        <Enter delay={20} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.ivory, lineHeight: 1.7}}>公司与董事系<SoftHi style={{fontSize: 21}}>委托关系</SoftHi>——书面通知<ThinU color={C.gold}>到达即生效</ThinU></Enter>
        <Enter delay={36} style={{marginTop: 10}}><Neg size={21}>股东会不准许——不影响效力（C ✓）</Neg></Enter>
        <Enter delay={50} style={{marginTop: 8}}><Neg size={21}>无需任期届满（2024金题 D ✗）</Neg></Enter>
      </div>
      <div data-final-knowledge="res-removal-rule" style={{position: 'absolute', left: 600, top: 0, width: 576, height: 372, backgroundColor: C.panel, border: `3px solid ${C.velvetLine}`, borderRadius: 16, padding: '16px 22px'}}>
        <Enter delay={64} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Gavel size={28} color={C.plum} style={{flexShrink: 0}} />
          <LabelBlock color={C.plum} size={26}>无因解职</LabelBlock>
        </Enter>
        <Enter delay={78} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.ivory, lineHeight: 1.7}}>股东会<SoftHi style={{fontSize: 21}}>决议作出即生效</SoftHi>——李某当场丢座（B ✓）</Enter>
        <Enter delay={94} style={{marginTop: 8, fontSize: 22, fontWeight: 750, color: C.ivoryDim, lineHeight: 1.7}}>剩余报酬：法院综合解除原因、剩余任期、薪酬裁量——<Neg size={21}>不能按原薪酬打包（A ✗）</Neg></Enter>
      </div>
      <div data-final-knowledge="res-overservice-rule" style={{position: 'absolute', left: 1200, top: 0, width: 576, height: 372, backgroundColor: C.paper, borderRadius: 16, padding: '16px 22px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={108} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Users size={28} color={C.ink} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={26}>超期服役 · 法定3人线</LabelBlock>
        </Enter>
        <div style={{marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={122} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <Chip tone="seal" style={{fontSize: 21}}>3人董事会辞1人 → 剩2人</Chip>
            <Stamp delay={130} tone="seal">低于3人 继续履职（D ✓）</Stamp>
          </Enter>
          <Enter delay={144} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <Chip tone="jade" style={{fontSize: 21}}>11人董事会辞1人</Chip>
            <Stamp delay={152} tone="jade">人数充足 可走（B ✗）</Stamp>
          </Enter>
          <Enter delay={166} style={{fontSize: 21, fontWeight: 750, color: C.ink, lineHeight: 1.6}}>2024金题：辞董事<ThinU color={C.seal}>同时辞法定代表人</ThinU>——职务联动，不能只留头衔</Enter>
        </div>
      </div>
      <div data-final-knowledge="res-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 396, height: 348, backgroundColor: C.ink, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={180} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.gold} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>背下来 · 一句口诀</span>
          </Enter>
          <Enter delay={196} style={{marginTop: 14, fontSize: 23, fontWeight: 850, color: C.paper, lineHeight: 1.9}}>公司可<SoftHi style={{fontSize: 22}}>无因解职</SoftHi>，董事可<SoftHi style={{fontSize: 22}}>无因辞职</SoftHi>；但低于法定3人，谁都<ThinU color={C.gold}>得坐回去</ThinU></Enter>
          <Enter delay={214} style={{marginTop: 12, fontSize: 21, fontWeight: 750, color: C.ivoryDim, lineHeight: 1.7}}>超期服役限制的是董事个人；无因解职是股东会权利——两者互不干扰</Enter>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={232}><Chip tone="panel" style={{fontSize: 21, border: `2px solid ${C.panelLine}`}}>2021金题 BCD ✓（A 报酬错）</Chip></Enter>
          <Enter delay={246}><Chip tone="panel" style={{fontSize: 21, border: `2px solid ${C.panelLine}`}}>2023金题 A ✓ 生效（B 超期役错）</Chip></Enter>
          <Enter delay={260}><Chip tone="panel" style={{fontSize: 21, border: `2px solid ${C.panelLine}`}}>2024金题 AC ✓（B 决议·D 届期错）</Chip></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const RelatedDealScene = () => (
  <Shell code="02" title="关联交易：报告、回避、归入">
    <div data-layout="related-deal-lane" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="disclosure-approval-gate,recusal-quorum-rule" data-focal-rule="related-deals-need-disclosure-and-collective-approval-with-the-related-director-recused-and-proceeds-belong-to-the-company" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="rel-legit-lane" style={{position: 'absolute', left: 0, top: 0, width: 576, height: 460, backgroundColor: C.panel, border: `3px solid ${C.jade}`, borderRadius: 16, padding: '16px 22px'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <UserCheck size={28} color={C.jade} style={{flexShrink: 0}} />
          <LabelBlock color={C.jade} size={25}>合法道 · 章程授权</LabelBlock>
        </Enter>
        <Enter delay={20} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.ivory, lineHeight: 1.7}}>副总经理李某按章程介绍购房享 8% 优惠——<SoftHi style={{fontSize: 21}}>依章程行使职权</SoftHi></Enter>
        <Enter delay={36} style={{marginTop: 10}}><Neg size={21}>A 让李某赔偿优惠——错，无违规无损害</Neg></Enter>
        <Enter delay={52} style={{marginTop: 10, fontSize: 21, fontWeight: 750, color: C.ivoryDim, lineHeight: 1.7}}>关联交易本身<ThinU color={C.jade}>不被禁止</ThinU>——合同有效（B 说无效 ✗）</Enter>
      </div>
      <div data-final-knowledge="rel-approval-gate" style={{position: 'absolute', left: 600, top: 0, width: 576, height: 460, backgroundColor: C.paper, borderRadius: 16, padding: '16px 22px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={68} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Stamp size={28} color={C.ink} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={25}>程序闸 · 报告＋决议</LabelBlock>
        </Enter>
        <div style={{marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={84} style={{fontSize: 21, fontWeight: 750, color: C.ink, lineHeight: 1.7}}>向<ThinU color={C.seal}>董事会或股东会</ThinU>报告，按章程决议通过</Enter>
          <Enter delay={100} style={{fontSize: 21, fontWeight: 750, color: C.ink, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="seal" style={{fontSize: 20}}>关联董事回避</Chip>不得参与表决</Enter>
          <Enter delay={116} style={{fontSize: 21, fontWeight: 750, color: C.ink, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="seal" style={{fontSize: 20}}>无关联董事 ≥3 人</Chip>不足→提交股东会</Enter>
          <Enter delay={132} style={{fontSize: 21, fontWeight: 750, color: C.ink, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="ink" style={{fontSize: 20}}>2025金题</Chip>3人会回避1人剩2人→<ThinU color={C.seal}>决议不成立</ThinU>（A✓ B✓ C✗）</Enter>
        </div>
      </div>
      <div data-final-knowledge="rel-disgorgement" style={{position: 'absolute', left: 1200, top: 0, width: 576, height: 460, backgroundColor: C.panel, border: `3px solid ${C.seal}`, borderRadius: 16, padding: '16px 22px'}}>
        <Enter delay={148} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Coins size={28} color={C.gold} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={25}>归入权 · 所得归公司</LabelBlock>
        </Enter>
        <Enter delay={164} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.ivory, lineHeight: 1.7}}>乙公司酬谢张某的 30 万——擅自关联交易所得<SoftHi style={{fontSize: 21}}>归甲公司所有</SoftHi>（D ✓）</Enter>
        <Enter delay={182} style={{marginTop: 10, fontSize: 21, fontWeight: 750, color: C.ivoryDim, lineHeight: 1.7}}>2024金题：丙的妻子控制 A 公司＝<ThinU color={C.seal}>近亲属关联</ThinU>；市价转让、未经报告决议，照样违反忠实义务（C ✓ 当选）</Enter>
        <Enter delay={200} style={{marginTop: 8, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
          <Chip tone="seal" style={{fontSize: 20}}>认定违反忠实义务不以损害为前提</Chip>
        </Enter>
      </div>
      <div data-final-knowledge="rel-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 486, height: 258, backgroundColor: C.ink, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={214} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.gold} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>三题一线 · 关联交易速查</span>
          </Enter>
          <Enter delay={230} style={{marginTop: 12, fontSize: 21, fontWeight: 750, color: 'rgba(244,239,223,0.68)', lineHeight: 1.8}}>章程授权的合法；瞒着做的要报告决议；报了也要回避、凑不齐人上股东会；偷偷赚的——归入公司</Enter>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={248}><Chip tone="panel" style={{fontSize: 21, border: `2px solid ${C.panelLine}`}}>2023金题 答案 ABD（问「不正确」）</Chip></Enter>
          <Enter delay={262}><Chip tone="panel" style={{fontSize: 21, border: `2px solid ${C.panelLine}`}}>2024金题 答案 C · 2025金题 答案 ABD</Chip></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const ShadowDirectorScene = () => (
  <Shell code="03" title="台前幕后：抽逃出资与影子董事">
    <div data-layout="shadow-seat-map" data-visual-anchor="role-pair" data-text-treatments="chip,label-block,soft-highlight,thin-underline,stamp" data-visual-grammar="capital-withdrawal-return,shadow-director-liability" data-focal-rule="withdrawn-capital-returns-to-the-company-while-the-nominee-director-and-the-behind-the-scenes-controller-answer-jointly" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="sh-withdrawal-board" style={{position: 'absolute', left: 0, top: 0, width: 1064, height: 286, backgroundColor: C.paper, border: `3px solid ${C.seal}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Coins size={30} color={C.seal} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={27}>赖某利用毛罗二人的重大过失抽回出资</LabelBlock>
        </Enter>
        <Enter delay={24} style={{marginTop: 14, fontSize: 22, fontWeight: 850, color: C.ink, lineHeight: 1.7}}>非经法定程序抽逃出资 → <SoftHi dark style={{fontSize: 21}}>向星河公司返还</SoftHi>（A ✓）</Enter>
        <Enter delay={42} style={{marginTop: 8}}><Chip tone="seal" style={{fontSize: 21}}>有责任的董事毛某与赖某连带（B ✓）</Chip></Enter>
      </div>
      <div data-final-knowledge="sh-shadow-seat" style={{position: 'absolute', left: 1096, top: 0, width: 680, height: 286, backgroundColor: C.panel, border: `3px solid ${C.gold}`, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={58} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <VenetianMask size={28} color={C.gold} style={{flexShrink: 0}} />
          <LabelBlock size={25}>台前幕后 · 一对座位</LabelBlock>
        </Enter>
        <Enter delay={74} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.paper, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span style={{display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="gold" style={{fontSize: 20, color: C.ink}}>台前 毛某</Chip>名义股东＋董事，重大过失担责（C ✓）</span>
          <span style={{display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="velvet" style={{fontSize: 20}}>幕后 罗某</Chip>实际出资＋实际管理＝<ThinU color={C.gold}>影子董事</ThinU>（D ✓）</span>
        </Enter>
      </div>
      <div data-final-knowledge="sh-recap-verdict" style={{position: 'absolute', left: 0, right: 0, top: 312, height: 432, backgroundColor: C.ink, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={92} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.gold} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>2024金题 · 全选 ABCD</span>
          </Enter>
          <div style={{marginTop: 16, display: 'flex', flexDirection: 'column', gap: 14}}>
            <Enter delay={110} style={{fontSize: 22, fontWeight: 800, color: C.paper, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="panel" style={{fontSize: 21, border: `2px solid ${C.panelLine}`}}>抽逃出资</Chip>
              <span>返还公司 ＋ 抽逃者与责任董监高连带</span>
            </Enter>
            <Enter delay={128} style={{fontSize: 22, fontWeight: 800, color: C.paper, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="panel" style={{fontSize: 21, border: `2px solid ${C.panelLine}`}}>信义义务</Chip>
              <span>名义董事、影子董事一视同仁</span>
            </Enter>
          </div>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12}}>
          <Enter delay={148} style={{fontSize: 23, fontWeight: 900, color: C.gold}}>背下来</Enter>
          <Enter delay={162} style={{fontSize: 22, fontWeight: 750, color: C.paper, lineHeight: 1.8}}>别以为躲在<ThinU color={C.gold}>面具后面</ThinU>就不担责——实际控制人指挥经营，就是影子董事</Enter>
          <Enter delay={182}><SeatStamp delay={188} tone="gold">ABCD 全选</SeatStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const DirectorsDeskRuleHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-resign-removal" {...SCENES.resignRemoval}><ResignRemovalScene /></TimelineSequence>
    <TimelineSequence name="02-related-deal" {...SCENES.relatedDeal}><RelatedDealScene /></TimelineSequence>
    <TimelineSequence name="03-shadow-director" {...SCENES.shadowDirector}><ShadowDirectorScene /></TimelineSequence>
  </AbsoluteFill>
);
