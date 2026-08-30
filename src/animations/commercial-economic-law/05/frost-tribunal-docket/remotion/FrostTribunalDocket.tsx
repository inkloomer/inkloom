import {AbsoluteFill} from 'remotion';
import {Banknote, Building2, Coins, Gavel, GraduationCap, Landmark, Scale, Scissors, ScrollText} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp as FrostStamp, ThinU} from './theme';

export const FilingScene = () => (
  <Shell code="01" title="破产申请进门：四方角色与书面凭证">
    <div data-layout="filing-roles-desk" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation" data-visual-grammar="four-roles-cast,debtor-only-insolvency-test" data-focal-rule="the-court-must-issue-a-written-receipt-for-the-petition-and-insolvency-reasons-judge-only-the-debtor-itself" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="ft-roles-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 300, backgroundColor: C.panel, border: `3px solid ${C.ice}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Building2 size={30} color={C.ice} style={{flexShrink: 0}} />
          <LabelBlock color={C.ice} size={26}>甲房企借款 500 万案 · 四方到庭</LabelBlock>
        </Enter>
        <Enter delay={26} style={{marginTop: 16, fontSize: 22, fontWeight: 800, color: C.docket, lineHeight: 2, display: 'flex', flexDirection: 'column', gap: 10}}>
          <span style={{display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="ice" style={{fontSize: 20}}>甲 · 债务人</Chip><Chip tone="copper" style={{fontSize: 20}}>乙 · 债权人银行</Chip></span>
          <span style={{display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="vermilion" style={{fontSize: 20}}>丙 · 连带保证人</Chip><Chip tone="spruce" style={{fontSize: 20}}>丁 · 管理人（律所）</Chip></span>
        </Enter>
      </div>
      <div data-final-knowledge="ft-cause-desk" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 300, backgroundColor: C.panel, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={48} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Scale size={28} color={C.vermilion} style={{flexShrink: 0}} />
          <LabelBlock color={C.vermilion} size={25}>B ✗ · 破产原因只看谁</LabelBlock>
        </Enter>
        <Enter delay={66} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.docket, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>不能清偿到期债务＋资产不足或<ThinU color={C.ice}>明显缺乏清偿能力</ThinU></span>
          <span style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Neg size={20}>拿「丙仍有清偿能力」说事</Neg>——原因只评债务人自身</span>
        </Enter>
      </div>
      <div data-final-knowledge="ft-receipt-desk" style={{position: 'absolute', left: 0, right: 0, top: 326, height: 210, backgroundColor: C.panel, border: `3px solid ${C.copper}`, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={88} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <ScrollText size={28} color={C.copper} style={{flexShrink: 0}} />
            <LabelBlock size={25}>A ✓ · 收件必给回执</LabelBlock>
          </Enter>
          <Enter delay={106} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.docket, lineHeight: 1.8}}>法院收到破产申请<SoftHi dark style={{fontSize: 21}}>及所附证据</SoftHi>的，应当向申请人出具<ThinU color={C.copper}>书面凭证</ThinU>——乙银行有权索要</Enter>
        </div>
        <div style={{width: 430, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={128} style={{fontSize: 20, fontWeight: 750, color: C.docketDim, lineHeight: 1.7}}>凭证＝程序的「收讫章」——没有它，后面的救济无从谈起</Enter>
        </div>
      </div>
      <div data-final-knowledge="ft-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 562, height: 182, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={148} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.copper} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.docket}}>2022金题 · 正确答案 A</span>
          </Enter>
          <Enter delay={166} style={{marginTop: 10, fontSize: 21, fontWeight: 750, color: 'rgba(234,241,244,0.7)', lineHeight: 1.8}}>背诵三连：原因只看债务人 · 收件必出凭证 · 驳回用裁定</Enter>
        </div>
        <div style={{width: 430, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={188} style={{fontSize: 20, fontWeight: 750, color: 'rgba(234,241,244,0.66)', lineHeight: 1.7}}>保证人再有钱，也救不了债务人的破产原因</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const RulingRemedyScene = () => (
  <Shell code="02" title="驳回与救济：裁定不是判决">
    <div data-layout="remedy-ladder-wall" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation" data-visual-grammar="ruling-vs-judgment-split,remedy-ladder-rule" data-focal-rule="dismissal-of-a-bankruptcy-petition-is-made-by-ruling-appealable-while-silence-of-the-court-goes-to-the-next-higher-court" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="rr-ruling-desk" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 230, backgroundColor: C.panel, border: `3px solid ${C.vermilion}`, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Gavel size={30} color={C.vermilion} style={{flexShrink: 0}} />
            <LabelBlock color={C.vermilion} size={26}>C ✗ · 驳回用「裁定」非「判决」</LabelBlock>
          </Enter>
          <Enter delay={26} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.docket, lineHeight: 1.8}}>破产程序不审诉讼——法院驳回破产申请出的是<ThinU color={C.ice}>裁定</ThinU>，<Neg size={21}>「判决驳回诉讼请求」说法即错</Neg></Enter>
        </div>
        <div style={{width: 400, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={46} style={{fontSize: 20, fontWeight: 750, color: C.docketDim, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="vermilion" style={{fontSize: 19}}>程序性事项</Chip><span>→ 裁定</span></Enter>
        </div>
      </div>
      <div data-final-knowledge="rr-ladder-desk" style={{position: 'absolute', left: 0, right: 0, top: 256, height: 300, backgroundColor: C.panel, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={68} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Landmark size={28} color={C.copper} style={{flexShrink: 0}} />
            <LabelBlock size={25}>D ✗ · 不服驳回的两条路别混</LabelBlock>
          </Enter>
          <Enter delay={88} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.docket, lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 12}}>
            <span style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Chip tone="copper" style={{fontSize: 20}}>不服驳回裁定</Chip>→ 法定期限内<SoftHi dark style={{fontSize: 21}}>向上一级法院上诉</SoftHi>（这半句对）</span>
            <span style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Neg size={20}>「直接向上一级法院提出破产申请」</Neg><span>——走错门</span></span>
          </Enter>
        </div>
        <div style={{width: 430, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={112} style={{fontSize: 21, fontWeight: 800, color: C.docket, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="spruce" style={{fontSize: 19}}>向上级申请</Chip><span>适用于法院「不理我」：</span></Enter>
          <Enter delay={132} style={{fontSize: 20, fontWeight: 750, color: C.docketDim, lineHeight: 1.7}}>不出具凭证 · 不接收申请 · 未按期裁定</Enter>
        </div>
      </div>
      <div data-final-knowledge="rr-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 582, height: 162, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={154} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.copper} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.docket}}>一图记牢 · 驳回→上诉；不理我→上级</span>
          </Enter>
          <Enter delay={174} style={{marginTop: 10, fontSize: 21, fontWeight: 750, color: 'rgba(234,241,244,0.7)', lineHeight: 1.8}}>两把钥匙对两扇门，插错门打不开救济</Enter>
        </div>
        <div style={{width: 400, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={194}><FrostStamp delay={200} tone="copper">A 是唯一全对项</FrostStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const ExecutoryLeaseScene = () => (
  <Shell code="03" title="待履行合同：管理人的一支笔">
    <div data-layout="lease-severing-bench" data-visual-anchor="timeline-gate" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="executory-contract-unilateral-rule,unjust-enrichment-priority-rule" data-focal-rule="the-administrator-may-unilaterally-resolve-an-executory-contract-and-the-retained-rent-is-unjust-enrichment-paid-prioritively-as-a-common-benefit-debt" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="el-right-desk" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 240, backgroundColor: C.panel, border: `3px solid ${C.spruce}`, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Scissors size={30} color={C.spruce} style={{flexShrink: 0}} />
            <LabelBlock color={C.spruce} size={26}>B ✓ · 双方均未履行完毕＝待履行合同</LabelBlock>
          </Enter>
          <Enter delay={26} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.docket, lineHeight: 1.8}}>10 年租约才走 2 年、租金未付清——管理人<SoftHi dark style={{fontSize: 21}}>单方决定</SoftHi>解除或继续履行，<Neg size={21}>无需乙公司同意</Neg>（A ✗）</Enter>
        </div>
        <div style={{width: 380, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={48} style={{fontSize: 20, fontWeight: 750, color: C.docketDim, lineHeight: 1.7}}>2025金题：12月10日管理人通知解除＋15日内返还厂房</Enter>
        </div>
      </div>
      <div data-final-knowledge="el-rent-desk" style={{position: 'absolute', left: 0, right: 0, top: 266, height: 300, backgroundColor: C.panel, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={70} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Coins size={28} color={C.copper} style={{flexShrink: 0}} />
            <LabelBlock size={25}>剩余 3 年租金的定性岔路</LabelBlock>
          </Enter>
          <Enter delay={90} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.docket, lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 12}}>
            <span style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Chip tone="spruce" style={{fontSize: 20}}>D ✓ 解除后继续占有</Chip>→ 不当得利 →<SoftHi dark style={{fontSize: 21}}>共益债务随时优先清偿</SoftHi></span>
            <span style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Neg size={20}>C「申报破产债权」错</Neg><span>——共益债务无需申报</span></span>
          </Enter>
        </div>
        <div style={{width: 430, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={114} style={{fontSize: 21, fontWeight: 800, color: C.docket, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="vermilion" style={{fontSize: 19}}>另一条岔路</Chip><span>主张损害赔偿：</span></Enter>
          <Enter delay={134} style={{fontSize: 20, fontWeight: 750, color: C.docketDim, lineHeight: 1.7}}>那是破产债权——申报后按分配受偿</Enter>
        </div>
      </div>
      <div data-final-knowledge="el-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 592, height: 152, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={156} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Banknote size={28} color={C.copper} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.docket}}>2025金题 · 正确答案 BD</span>
          </Enter>
          <Enter delay={176} style={{marginTop: 8, fontSize: 21, fontWeight: 750, color: 'rgba(234,241,244,0.7)', lineHeight: 1.8}}>背诵三连：待履行单方解除 · 占租金＝不当得利 · 共益债务随时清偿</Enter>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={196}><FrostStamp delay={202} tone="vermilion">立法动向：居住及营生租赁拟禁单方解除</FrostStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const FrostTribunalDocket = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-filing" {...SCENES.filing}><FilingScene /></TimelineSequence>
    <TimelineSequence name="02-ruling-remedy" {...SCENES.rulingRemedy}><RulingRemedyScene /></TimelineSequence>
    <TimelineSequence name="03-executory-lease" {...SCENES.executoryLease}><ExecutoryLeaseScene /></TimelineSequence>
  </AbsoluteFill>
);
