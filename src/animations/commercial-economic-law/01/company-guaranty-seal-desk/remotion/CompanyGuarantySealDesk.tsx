import {AbsoluteFill} from 'remotion';
import {ArrowRightLeft, FileWarning, GraduationCap, HandCoins, Link, Scale, Stamp, UserCheck, Users, VenetianMask} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp as SealStamp, ThinU} from './theme';

export const SoleGuarantyScene = () => (
  <Shell code="01" title="一人公司为股东担保：无需决议">
    <div data-layout="sole-bench-guaranty-desk" data-visual-anchor="concept-icon" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="solo-guaranty-no-resolution,no-priority-among-sole" data-focal-rule="a-one-person-company-guaranteeing-its-sole-shareholder-needs-no-resolution-and-invalid-arguments-cannot-unmake-the-valid-seal" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="sole-structure-board" style={{position: 'absolute', left: 0, top: 0, width: 1064, height: 258, backgroundColor: C.panel, border: `3px solid ${C.indigo}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Users size={30} color={C.indigo} style={{flexShrink: 0}} />
          <LabelBlock size={27}>成功公司 · 王某独资的一人公司</LabelBlock>
        </Enter>
        <Enter delay={22} style={{marginTop: 14, fontSize: 23, fontWeight: 800, color: C.paper, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
          <Users size={24} color={C.silver} style={{flexShrink: 0}} />王某 全部股权转让 <ArrowRightLeft size={22} color={C.silver} style={{flexShrink: 0}} /> 潘某（仍是一人公司）
        </Enter>
        <Enter delay={38} style={{marginTop: 10, fontSize: 22, fontWeight: 750, color: C.paperDim, lineHeight: 1.6}}>成明公司虽与明希公司共有，但转让的是<ThinU color={C.indigo}>成功公司</ThinU>的股权——另一回事</Enter>
        <Enter delay={52} style={{marginTop: 8, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
          <Neg size={22}>A 明希公司优先购买权——成功公司没有其他股东，无从优先</Neg>
        </Enter>
      </div>
      <div data-final-knowledge="sole-validity-verdict" style={{position: 'absolute', left: 1096, top: 0, width: 680, height: 258, backgroundColor: C.paper, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={66} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Stamp size={28} color={C.ink} style={{flexShrink: 0}} />
          <LabelBlock color={C.lacquer} size={26}>为唯一股东担保 · 盖印有效</LabelBlock>
        </Enter>
        <Enter delay={82} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.7}}>无其他股东利益需保护 → <SoftHi dark style={{fontSize: 21}}>无需决议、也无法决议</SoftHi></Enter>
        <div style={{marginTop: 10, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
          <Chip tone="jade" style={{fontSize: 21}}>B ✓ 不得以程序违规拒担责</Chip>
          <SealStamp delay={90} tone="indigo">无需决议 · 印章有效</SealStamp>
        </div>
        <Enter delay={98} style={{marginTop: 8}}><Neg dark size={21}>C 未决议则合同无效——错</Neg></Enter>
      </div>
      <div data-final-knowledge="sole-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 284, height: 156, backgroundColor: C.ink, borderRadius: 14, padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 20}}>
        <Enter delay={112} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'nowrap'}}>
          <GraduationCap size={28} color={C.indigo} style={{flexShrink: 0}} />
          <span style={{fontSize: 23, fontWeight: 900, color: C.paper, whiteSpace: 'nowrap'}}>2021金题 · B、D 当选</span>
        </Enter>
        <Dash delay={122} style={{flex: 1, borderTop: `3px dashed ${C.panelLine}`}} />
        <Enter delay={128} style={{fontSize: 22, fontWeight: 800, color: C.paperDim, whiteSpace: 'nowrap'}}>D 的账怎么算 → 见 02 场景：举证倒置</Enter>
      </div>
      <div data-final-knowledge="sole-recall-line" style={{position: 'absolute', left: 0, right: 0, top: 466, height: 278, backgroundColor: C.lacquer, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={140} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Link size={28} color={C.indigo} style={{flexShrink: 0}} />
            <LabelBlock size={26}>保状落款 · 一句话背</LabelBlock>
          </Enter>
          <Enter delay={158} style={{marginTop: 16, fontSize: 23, fontWeight: 850, color: C.paper, lineHeight: 1.8}}>一人公司为唯一股东担保：<SoftHi style={{fontSize: 22}}>章程即决议的替身</SoftHi>——程序抗辩敲不开这枚印</Enter>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={174}><Chip tone="panel" style={{fontSize: 22, border: `2px solid ${C.panelLine}`}}>担保合同有效（B ✓）</Chip></Enter>
          <Enter delay={186}><Chip tone="panel" style={{fontSize: 22, border: `2px solid ${C.panelLine}`}}>「无效」主张不成立（C ✗）</Chip></Enter>
          <Enter delay={198}><Chip tone="panel" style={{fontSize: 22, border: `2px solid ${C.panelLine}`}}>优先购买权无对象（A ✗）</Chip></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const InversionScene = () => (
  <Shell code="02" title="担保担穿了：举证责任倒置的连带">
    <div data-layout="inversion-tilt-scale" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,stamp" data-visual-grammar="property-independence-test,burden-inversion-rule" data-focal-rule="after-the-company-drains-itself-on-the-guaranty-the-sole-shareholder-must-prove-separation-or-stand-beside-the-debt" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="inv-drain-chain" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 236, backgroundColor: C.panel, border: `3px solid ${C.seal}`, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <HandCoins size={30} color={C.seal} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={27}>第一块骨牌 · 公司替潘某担了 500 万</LabelBlock>
        </Enter>
        <Enter delay={24} style={{marginTop: 14, fontSize: 23, fontWeight: 800, color: C.paper, lineHeight: 1.7}}>承担担保责任后<ThinU color={C.seal}>无力清偿其他债务</ThinU>——公司的库被担保掏空</Enter>
        <Enter delay={40} style={{marginTop: 10}}><Stamp delay={46} tone="seal">债权人金某站在门口</Stamp></Enter>
      </div>
      <div data-final-knowledge="inv-inversion-scale" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 236, backgroundColor: C.paper, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={58} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Scale size={30} color={C.ink} style={{flexShrink: 0}} />
          <LabelBlock color={C.lacquer} size={26}>第二块骨牌 · 天平倒转</LabelBlock>
        </Enter>
        <Enter delay={74} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.7}}>一人公司：<SoftHi dark style={{fontSize: 21}}>由股东证明</SoftHi>公司财产独立于自己</Enter>
        <Enter delay={90} style={{marginTop: 8, fontSize: 22, fontWeight: 900, color: C.ink}}>证不出 → <ThinU color={C.seal}>对债权人连带</ThinU>（D ✓）</Enter>
      </div>
      <div data-final-knowledge="inv-recap-verdict" style={{position: 'absolute', left: 0, right: 0, top: 262, height: 482, backgroundColor: C.lacquer, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={104} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <VenetianMask size={28} color={C.indigo} style={{flexShrink: 0}} />
            <LabelBlock size={26}>规则板 · 一人公司的人格风险</LabelBlock>
          </Enter>
          <div style={{marginTop: 16, display: 'flex', flexDirection: 'column', gap: 14}}>
            <Enter delay={120} style={{fontSize: 22, fontWeight: 800, color: C.paper, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="indigo" style={{fontSize: 21}}>举证责任倒置</Chip>
              <span>普通混同案债权人举证；一人公司<ThinU color={C.indigo}>股东自证清白</ThinU></span>
            </Enter>
            <Enter delay={138} style={{fontSize: 22, fontWeight: 800, color: C.paper, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="seal" style={{fontSize: 21}}>不能证明独立</Chip>
              <span>→ 对公司债务承担<SoftHi style={{fontSize: 21}}>连带责任</SoftHi></span>
            </Enter>
            <Enter delay={156} style={{fontSize: 22, fontWeight: 750, color: C.paperDim, lineHeight: 1.8}}>触发点：公司因担保担责而无力清偿——担保是把股东拉下独凳的绳子</Enter>
          </div>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12}}>
          <Enter delay={174} style={{fontSize: 23, fontWeight: 900, color: C.indigo}}>记忆钩</Enter>
          <Enter delay={188} style={{fontSize: 22, fontWeight: 750, color: C.paper, lineHeight: 1.8}}>独凳上的股东，<ThinU color={C.indigo}>凳腿就是防火墙</ThinU>；证明不了独立，防火墙并入债务</Enter>
          <Enter delay={206}><SealStamp delay={212} tone="indigo">B、D 收卷 · 2021金题</SealStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const ForgedResolutionScene = () => (
  <Shell code="03" title="伪造的决议：越权担保四连问">
    <div data-layout="forged-seal-desk" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="forged-resolution-nullity,bonafide-counterparty-gate" data-focal-rule="a-forged-resolution-never-exists-and-an-actually-controlled-counterparty-cannot-count-as-bona-fide-so-the-ungeneralized-contract-binds-no-one" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="forged-nullity-desk" style={{position: 'absolute', left: 0, top: 0, width: 1064, height: 286, backgroundColor: C.paper, border: `3px solid ${C.seal}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <FileWarning size={30} color={C.seal} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={27}>李某伪造甲公司股东会同意担保决议</LabelBlock>
        </Enter>
        <Enter delay={24} style={{marginTop: 14, fontSize: 23, fontWeight: 850, color: C.ink, lineHeight: 1.7}}>从未召开股东会 → 决议<SoftHi dark style={{fontSize: 22}}>不成立</SoftHi>（不是可撤销）</Enter>
        <div style={{marginTop: 12, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <Chip tone="jade" style={{fontSize: 21}}>A ✓ 甲公司可主张决议不成立</Chip>
          <Neg dark size={21}>B 特别代理人改变越权定性——钦差不免罪</Neg>
        </div>
      </div>
      <div data-final-knowledge="forged-bonafide-gate" style={{position: 'absolute', left: 1096, top: 0, width: 680, height: 286, backgroundColor: C.panel, border: `3px solid ${C.indigo}`, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={42} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <UserCheck size={28} color={C.indigo} style={{flexShrink: 0}} />
          <LabelBlock size={26}>善意门槛 · 丙公司过不了</LabelBlock>
        </Enter>
        <Enter delay={58} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.paper, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
          <VenetianMask size={24} color={C.indigo} style={{flexShrink: 0}} />李某是丙公司<ThinU color={C.indigo}>实际控制人</ThinU> → 明知伪造
        </Enter>
        <Enter delay={76} style={{marginTop: 8}}><Neg size={22}>D 「合理审查」是幌子——非善意相对人</Neg></Enter>
      </div>
      <div data-final-knowledge="forged-verdict-board" style={{position: 'absolute', left: 0, right: 0, top: 312, height: 432, backgroundColor: C.ink, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={92} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.indigo} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>2021金题 · 效力落点</span>
          </Enter>
          <div style={{marginTop: 16, display: 'flex', flexDirection: 'column', gap: 14}}>
            <Enter delay={110} style={{fontSize: 22, fontWeight: 800, color: C.paper, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="panel" style={{fontSize: 21, border: `2px solid ${C.panelLine}`}}>决议不成立</Chip>
              <span>＋</span>
              <Chip tone="panel" style={{fontSize: 21, border: `2px solid ${C.panelLine}`}}>相对人非善意</Chip>
              <span>＋</span>
              <Chip tone="panel" style={{fontSize: 21, border: `2px solid ${C.panelLine}`}}>公司未追认</Chip>
            </Enter>
            <Enter delay={130} style={{fontSize: 23, fontWeight: 900, color: C.paper, lineHeight: 1.8}}>＝ 担保合同<SoftHi style={{fontSize: 22}}>对甲公司不发生效力</SoftHi>，甲公司不担责</Enter>
            <Enter delay={148} style={{marginTop: 4}}><Neg size={22}>C 「不管成不成立都有效」——三连败</Neg></Enter>
          </div>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12}}>
          <Enter delay={166} style={{fontSize: 23, fontWeight: 900, color: C.indigo}}>越权担保效力尺</Enter>
          <Enter delay={180} style={{fontSize: 22, fontWeight: 750, color: C.paper, lineHeight: 1.8}}>相对人<ThinU color={C.jade}>善意</ThinU> → 合同有效；<ThinU color={C.seal}>恶意</ThinU>＋未追认 → 对公司不生效力</Enter>
          <Enter delay={200}><SealStamp delay={206} tone="jade">正确答案 A</SealStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const CompanyGuarantySealDesk = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-sole-guaranty" {...SCENES.soleGuaranty}><SoleGuarantyScene /></TimelineSequence>
    <TimelineSequence name="02-inversion-scale" {...SCENES.inversionScale}><InversionScene /></TimelineSequence>
    <TimelineSequence name="03-forged-resolution" {...SCENES.forgedResolution}><ForgedResolutionScene /></TimelineSequence>
  </AbsoluteFill>
);
