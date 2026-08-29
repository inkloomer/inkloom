import {AbsoluteFill} from 'remotion';
import {Building2, Coins, FileText, Gavel, GraduationCap, HandCoins, UserCheck, Users, VenetianMask} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp, ThinU} from './theme';

export const MaskTheftScene = () => (
  <Shell code="01" title="偷戴的脸谱：被冒名者不是股东">
    <div data-layout="mask-theft-backstage" data-visual-anchor="role-pair" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="identity-usurpation-fork,liability-redirection" data-focal-rule="the-impersonated-person-never-consented-so-he-is-no-shareholder-and-the-impersonator-bears-contribution-and-supplementary-compensation" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="theft-usurpation-board" style={{position: 'absolute', left: 0, top: 0, width: 1064, height: 286, backgroundColor: C.trunk, border: `3px solid ${C.gold}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <VenetianMask size={30} color={C.gold} style={{flexShrink: 0}} />
          <LabelBlock size={27}>戏箱后台 · 甲捡到乙的身份证</LabelBlock>
        </Enter>
        <Enter delay={22} style={{marginTop: 14, fontSize: 23, fontWeight: 800, color: C.ivory, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
          <span>甲偷偷「戴上」乙的脸谱——章程、名册、登记</span>
          <SoftHi style={{fontSize: 22}}>全是乙的名字</SoftHi>
        </Enter>
        <Enter delay={38} style={{marginTop: 12, fontSize: 22, fontWeight: 750, color: C.ivoryDim, lineHeight: 1.6}}>与丙、丁共同设立华宇公司——乙本人毫不知情</Enter>
      </div>
      <div data-final-knowledge="theft-no-consent-verdict" style={{position: 'absolute', left: 1096, top: 0, width: 680, height: 286, backgroundColor: C.paper, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={52} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Users size={28} color={C.ink} style={{flexShrink: 0}} />
          <LabelBlock color={C.lacquer} size={27}>乙的意思表示</LabelBlock>
        </Enter>
        <Enter delay={66} style={{marginTop: 14, fontSize: 24, fontWeight: 950, color: C.ink}}>零意思表示 → <SoftHi dark style={{fontSize: 23}}>不是股东</SoftHi></Enter>
        <div style={{marginTop: 14, border: `3px solid ${C.lacquer}`, borderRadius: 10, padding: '10px 16px'}}>
          <Enter delay={82} style={{fontSize: 23, fontWeight: 950, color: C.lacquer, textAlign: 'center'}}>既无权利 · 又无责任</Enter>
        </div>
      </div>
      <div data-final-knowledge="theft-liability-redirect" style={{position: 'absolute', left: 0, top: 312, width: 1064, height: 432, backgroundColor: C.panel, border: `3px solid ${C.trunkLine}`, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={96} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <HandCoins size={28} color={C.gold} style={{flexShrink: 0}} />
          <LabelBlock size={27}>责任顺着脸谱找戴面具的人</LabelBlock>
        </Enter>
        <div style={{marginTop: 16, display: 'flex', flexDirection: 'column', gap: 14}}>
          <div style={{backgroundColor: C.trunk, borderRadius: 12, padding: '12px 18px'}}>
            <Enter delay={112} style={{fontSize: 23, fontWeight: 900, color: C.ivory, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Coins size={24} color={C.gold} style={{flexShrink: 0}} />
              出资不足 → 公司<ThinU color={C.gold}>找甲补足</ThinU>
              <Neg size={22}>A 项找乙——找错了</Neg>
            </Enter>
          </div>
          <div style={{backgroundColor: C.trunk, borderRadius: 12, padding: '12px 18px'}}>
            <Enter delay={130} style={{fontSize: 23, fontWeight: 900, color: C.ivory, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <HandCoins size={24} color={C.gold} style={{flexShrink: 0}} />
              债权人就<SoftHi style={{fontSize: 22}}>不能清偿部分</SoftHi>请求<ThinU color={C.gold}>甲补充赔偿</ThinU>
            </Enter>
            <Enter delay={146} style={{marginTop: 8, marginLeft: 34}}><Chip tone="jade" style={{fontSize: 22}}>B 项 ✓</Chip></Enter>
          </div>
          <Enter delay={160} style={{fontSize: 22, fontWeight: 750, color: C.ivoryDim, lineHeight: 1.7}}>乙名下股权的全部权利义务，都由面具背后的甲承担</Enter>
        </div>
      </div>
      <div data-final-knowledge="theft-exam-note" style={{position: 'absolute', left: 1096, top: 312, width: 680, height: 432, backgroundColor: C.ink, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={174} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <GraduationCap size={28} color={C.gold} style={{flexShrink: 0}} />
          <span style={{fontSize: 24, fontWeight: 900, color: C.ivory}}>2021金题 · 已锁定 B</span>
        </Enter>
        <Enter delay={190} style={{marginTop: 16, fontSize: 22, fontWeight: 750, color: C.ivoryDim, lineHeight: 1.8}}>C、D 把乙送进法院摘脸谱——消极确认之诉的门道，见 02 场景</Enter>
        <Enter delay={206} style={{marginTop: 14, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
          <Stamp delay={212} tone="lacquer">被冒名者金身不沾债</Stamp>
        </Enter>
      </div>
    </div>
  </Shell>
);

export const NegativeSuitScene = () => (
  <Shell code="02" title="摘脸谱之诉：确认我不是股东">
    <div data-layout="confirmation-suit-stage" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="negative-confirmation-suit,defendant-seat-rule" data-focal-rule="the-impersonated-person-may-sue-to-confirm-non-shareholder-status-and-the-company-alone-sits-in-the-defendant-seat" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="suit-plaintiff-desk" style={{position: 'absolute', left: 0, top: 0, width: 864, height: 468, backgroundColor: C.trunk, border: `3px solid ${C.gold}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <VenetianMask size={30} color={C.gold} style={{flexShrink: 0}} />
          <LabelBlock size={27}>原告席 · 乙摘下脸谱</LabelBlock>
        </Enter>
        <Enter delay={22} style={{marginTop: 16, fontSize: 24, fontWeight: 900, color: C.ivory, lineHeight: 1.7}}>起诉请求确认：<SoftHi style={{fontSize: 23}}>我不是华宇公司的股东</SoftHi></Enter>
        <Enter delay={38} style={{marginTop: 12, fontSize: 22, fontWeight: 750, color: C.ivoryDim, lineHeight: 1.7}}>非股东可提<ThinU color={C.gold}>资格消极确认之诉</ThinU>——法律给被冒名者开的正门</Enter>
        <div style={{marginTop: 16, border: `3px dashed ${C.jade}`, borderRadius: 10, padding: '10px 16px'}}>
          <Enter delay={54} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <Chip tone="jade" style={{fontSize: 22}}>C 项 ✓ 可以起诉</Chip>
          </Enter>
        </div>
      </div>
      <div data-final-knowledge="suit-defendant-seat" style={{position: 'absolute', left: 896, top: 0, width: 880, height: 468, backgroundColor: C.paper, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={70} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Gavel size={30} color={C.ink} style={{flexShrink: 0}} />
          <LabelBlock color={C.lacquer} size={27}>被告席 · 只摆一把椅子</LabelBlock>
        </Enter>
        <div style={{marginTop: 18, display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={86}><Chip tone="lacquer" style={{fontSize: 25, fontWeight: 950}}><Building2 size={24} color={C.ivory} style={{flexShrink: 0}} />华宇公司</Chip></Enter>
          <Dash delay={96} style={{flex: 1, borderTop: `4px solid ${C.lacquer}`}} />
          <Enter delay={104}><Stamp delay={110} tone="lacquer">以公司为被告</Stamp></Enter>
        </div>
        <Enter delay={122} style={{marginTop: 18, fontSize: 23, fontWeight: 800, color: C.ink, lineHeight: 1.7}}>股东资格记载于公司文件——确认之诉<ThinU color={C.lacquer}>只能对着公司提</ThinU></Enter>
        <div style={{marginTop: 16, border: `3px dashed ${C.jade}`, borderRadius: 10, padding: '10px 16px'}}>
          <Enter delay={138} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <Chip tone="jade" style={{fontSize: 22}}>D 项 ✓ 以华宇公司为被告</Chip>
          </Enter>
        </div>
      </div>
      <div data-final-knowledge="suit-answers-recap" style={{position: 'absolute', left: 0, right: 0, top: 494, height: 250, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={154} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.gold} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.ivory}}>冒名题收卷 · BCD 全对</span>
          </Enter>
          <div style={{marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10}}>
            <Enter delay={168}><Neg size={22}>A 公司请求乙补足出资——乙无义务</Neg></Enter>
            <Enter delay={180} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="jade" style={{fontSize: 22}}>B 甲补充赔偿 ✓</Chip>
              <Chip tone="jade" style={{fontSize: 22}}>C 乙可起诉 ✓</Chip>
              <Chip tone="jade" style={{fontSize: 22}}>D 被告是公司 ✓</Chip>
            </Enter>
          </div>
        </div>
        <div style={{width: 460, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={196} style={{fontSize: 23, fontWeight: 900, color: C.gold}}>一副脸谱两问</Enter>
          <Enter delay={208} style={{fontSize: 22, fontWeight: 750, color: C.ivory, lineHeight: 1.7}}>脸谱外面（对债权人）找戴面具的甲；脸谱里面（摘脸谱）只告公司</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const ProxyHoldingScene = () => (
  <Shell code="03" title="代持的脸谱：协议有效，价款追缴">
    <div data-layout="proxy-transfer-counter" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="agreement-validity-rule,good-faith-transfer-then-trace" data-focal-rule="a-nominee-holding-agreement-stays-valid-despite-administrative-rules-and-after-a-bonafide-transfer-only-the-proceeds-are-traced" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="proxy-agreement-valid" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 262, backgroundColor: C.trunk, border: `3px solid ${C.gold}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <FileText size={30} color={C.gold} style={{flexShrink: 0}} />
          <LabelBlock size={27}>代持股协议 · 李某出资 500 万占股 20%</LabelBlock>
        </Enter>
        <Enter delay={24} style={{marginTop: 14, fontSize: 23, fontWeight: 850, color: C.ivory, lineHeight: 1.7}}>王某挂李某的脸谱当名义股东——李某实际出资、享收益、参与经营</Enter>
        <Enter delay={40} style={{marginTop: 10, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <Chip tone="panel" style={{fontSize: 22, border: `2px solid ${C.panelLine}`, color: C.ivory}}>公务员规范＝管理性规定</Chip>
          <Dash delay={50} style={{width: 70, borderTop: `4px solid ${C.gold}`}} />
          <Stamp delay={56} tone="jade">协议有效 · A 项 ✗</Stamp>
        </Enter>
      </div>
      <div data-final-knowledge="proxy-bonafide-transfer" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 262, backgroundColor: C.paper, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={70} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <UserCheck size={30} color={C.ink} style={{flexShrink: 0}} />
          <LabelBlock color={C.lacquer} size={26}>王某转卖给不知情赵某</LabelBlock>
        </Enter>
        <Enter delay={86} style={{marginTop: 14, fontSize: 23, fontWeight: 850, color: C.ink, lineHeight: 1.7}}>善意＋手续完备 → <SoftHi dark style={{fontSize: 22}}>赵某善意取得</SoftHi>，转让有效</Enter>
        <Enter delay={102} style={{marginTop: 10}}><Neg dark size={22}>B 项：转让无效——错</Neg></Enter>
      </div>
      <div data-final-knowledge="proxy-trace-proceeds" style={{position: 'absolute', left: 0, top: 288, width: 1064, height: 456, backgroundColor: C.curtain, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={116} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <HandCoins size={30} color={C.gold} style={{flexShrink: 0}} />
          <LabelBlock size={27}>受贿赃款出资 · 追缴走线</LabelBlock>
        </Enter>
        <div style={{marginTop: 16, display: 'flex', flexDirection: 'column', gap: 14}}>
          <div style={{backgroundColor: 'rgba(20,28,34,0.55)', borderRadius: 12, padding: '12px 18px'}}>
            <Enter delay={134} style={{fontSize: 22, fontWeight: 800, color: C.ivory, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <span>股权还在 →</span>
              <Chip tone="gold" style={{fontSize: 22}}>拍卖 / 变卖股权本身</Chip>
              <span style={{fontSize: 21, color: C.ivoryDim}}>防刑满后仍持股获益</span>
            </Enter>
          </div>
          <div style={{backgroundColor: 'rgba(20,28,34,0.55)', borderRadius: 12, padding: '12px 18px', border: `3px solid ${C.gold}`}}>
            <Enter delay={152} style={{fontSize: 23, fontWeight: 900, color: C.ivory, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <span>股权已合法转让（本案）→</span>
              <SoftHi style={{fontSize: 22}}>追缴转让价款</SoftHi>
              <Stamp delay={162} tone="gold">D 项 ✓</Stamp>
            </Enter>
          </div>
          <div style={{backgroundColor: 'rgba(20,28,34,0.55)', borderRadius: 12, padding: '12px 18px'}}>
            <Enter delay={170} style={{fontSize: 22, fontWeight: 800, color: C.ivory, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Neg size={22}>C 项：拍卖已卖给赵某的股权——不能</Neg>
            </Enter>
          </div>
        </div>
      </div>
      <div data-final-knowledge="proxy-floor-rule" style={{position: 'absolute', left: 1096, top: 288, width: 680, height: 456, backgroundColor: C.ink, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={186} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Coins size={28} color={C.gold} style={{flexShrink: 0}} />
          <LabelBlock color={C.gold} light size={26}>保底规则</LabelBlock>
        </Enter>
        <div style={{marginTop: 18, display: 'flex', flexDirection: 'column', gap: 14}}>
          <Enter delay={202} style={{fontSize: 23, fontWeight: 900, color: C.ivory, lineHeight: 1.6}}>拍卖所得 <ThinU color={C.gold}>＞</ThinU> 出资额：照实追，<SoftHi style={{fontSize: 22}}>上不封顶</SoftHi></Enter>
          <Enter delay={218} style={{fontSize: 23, fontWeight: 900, color: C.ivory, lineHeight: 1.6}}>拍卖所得 <ThinU color={C.lacquer}>＜</ThinU> 出资额：以<SoftHi style={{fontSize: 22}}>出资额为准</SoftHi>，<SoftHi style={{fontSize: 22}}>下要保底</SoftHi></Enter>
        </div>
        <Enter delay={236} style={{marginTop: 18, fontSize: 22, fontWeight: 750, color: C.ivoryDim, lineHeight: 1.7}}>2023金题收口：正确答案 D——脸谱易主后，追的是卖脸谱的钱</Enter>
      </div>
    </div>
  </Shell>
);

export const NomineeImpersonationMasks = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-mask-theft" {...SCENES.maskTheft}><MaskTheftScene /></TimelineSequence>
    <TimelineSequence name="02-negative-suit" {...SCENES.negativeSuit}><NegativeSuitScene /></TimelineSequence>
    <TimelineSequence name="03-proxy-holding" {...SCENES.proxyHolding}><ProxyHoldingScene /></TimelineSequence>
  </AbsoluteFill>
);
