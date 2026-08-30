import {AbsoluteFill} from 'remotion';
import {ArrowLeftRight, ClipboardCheck, Crown, Drama, FileSignature, GraduationCap, Hand, Link2, MessageSquareText, MoveUp, RotateCcw, Undo2} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp, ThinU} from './theme';

export const ApplicantGateScene = () => (
  <Shell code="01" title="谁能申请回避，谁本身不回避">
    <div data-layout="applicant-gate-plaques" data-visual-anchor="concept-icon" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="entry-plaque-row,exempt-list-contrast" data-focal-rule="parties-legal-representatives-counsel-and-agents-may-apply-while-witnesses-counsel-and-agents-themselves-are-never-recused" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', right: 30, bottom: 16, opacity: 0.07, pointerEvents: 'none'}}><ArrowLeftRight size={230} color={C.ivory} strokeWidth={1.1} /></div>
      <div data-final-knowledge="applicant-gate-card" style={{position: 'absolute', left: 0, top: 0, width: 880, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Hand size={30} color={C.plaque} style={{flexShrink: 0}} />
            <LabelBlock size={28}>申请回避 · 四张入场牌</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={16}><Chip tone="panel" style={{fontSize: 22}}>口诀「当法辩诉」</Chip></Enter>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14}}>
          <Enter delay={30} style={{backgroundColor: C.plaque, borderRadius: 12, padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 12}}>
            <Drama size={28} color="#3A2C10" style={{flexShrink: 0}} />
            <div style={{display: 'flex', flexDirection: 'column', gap: 4}}>
              <span style={{fontSize: 26, fontWeight: 950, color: '#3A2C10'}}>当事人</span>
              <span style={{fontSize: 22, fontWeight: 750, color: '#5A4720'}}>被害人 · 嫌疑人 · 被告人</span>
            </div>
          </Enter>
          <Enter delay={42} style={{backgroundColor: C.plaque, borderRadius: 12, padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 12}}>
            <FileSignature size={28} color="#3A2C10" style={{flexShrink: 0}} />
            <div style={{display: 'flex', flexDirection: 'column', gap: 4}}>
              <span style={{fontSize: 26, fontWeight: 950, color: '#3A2C10'}}>法定代理人</span>
              <span style={{fontSize: 22, fontWeight: 750, color: '#5A4720'}}>代表当事人提申请</span>
            </div>
          </Enter>
          <Enter delay={54} style={{backgroundColor: C.plaque, borderRadius: 12, padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 12}}>
            <Crown size={28} color="#3A2C10" style={{flexShrink: 0}} />
            <div style={{display: 'flex', flexDirection: 'column', gap: 4}}>
              <span style={{fontSize: 26, fontWeight: 950, color: '#3A2C10'}}>辩护人</span>
              <span style={{fontSize: 22, fontWeight: 750, color: '#5A4720'}}>可为当事人申请</span>
            </div>
          </Enter>
          <Enter delay={66} style={{backgroundColor: C.plaque, borderRadius: 12, padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 12}}>
            <Hand size={28} color="#3A2C10" style={{flexShrink: 0}} />
            <div style={{display: 'flex', flexDirection: 'column', gap: 4}}>
              <span style={{fontSize: 26, fontWeight: 950, color: '#3A2C10'}}>诉讼代理人</span>
              <span style={{fontSize: 22, fontWeight: 750, color: '#5A4720'}}>同样有申请权</span>
            </div>
          </Enter>
        </div>
        <div style={{border: `3px dashed ${C.rouge}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={82}><Neg size={23}>近亲属没有申请回避的权利</Neg></Enter>
          <Enter delay={92} style={{fontSize: 22, fontWeight: 750, color: C.ivoryDim }}>辩护人可代为申请 ≠ 近亲属可申请——身份看名义</Enter>
        </div>
        <Enter delay={106} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.plaque} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.ivoryDim }}>2014年题 · 四主体选一项</span>
        </Enter>
      </div>
      <div data-final-knowledge="exempt-list-card" style={{position: 'absolute', left: 904, top: 0, width: 872, height: 744, backgroundColor: C.panel, border: `3px solid ${C.plaque}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <ArrowLeftRight size={30} color={C.moon} style={{flexShrink: 0}} />
            <LabelBlock color={C.moon} size={28}>回避不适用于谁</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={50}><Chip tone="panel" style={{fontSize: 22}}>不适用名单</Chip></Enter>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={64} style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12}}>
            <MessageSquareText size={24} color={C.moon} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.ivory }}>证人</span>
            <span style={{fontSize: 22, fontWeight: 750, color: C.ivoryDim }}>——只作客观陈述，不可替换</span>
          </Enter>
          <Enter delay={76} style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12}}>
            <Crown size={24} color={C.moon} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.ivory }}>辩护人</span>
            <span style={{fontSize: 22, fontWeight: 750, color: C.ivoryDim }}>——身份是帮手，不是裁判者</span>
          </Enter>
          <Enter delay={88} style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12}}>
            <Hand size={24} color={C.moon} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.ivory }}>诉讼代理人</span>
            <span style={{fontSize: 22, fontWeight: 750, color: C.ivoryDim }}>——同理不回避</span>
          </Enter>
          <Enter delay={100} style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <ClipboardCheck size={24} color={C.moon} style={{flexShrink: 0}} />
              <span style={{fontSize: 24, fontWeight: 900, color: C.ivory }}>有专门知识的人</span>
              <Stamp delay={110} tone="rouge">检院委托的除外</Stamp>
            </div>
            <span style={{fontSize: 22, fontWeight: 750, color: C.ivoryDim }}>公安 · 法院聘请的 → 不回避；检察院委托的 → 要回避</span>
          </Enter>
        </div>
        <div style={{border: `2px solid ${C.willow}`, borderRadius: 10, padding: '12px 16px', backgroundColor: C.willowSoft}}>
          <Enter delay={118} style={{fontSize: 23, fontWeight: 850, color: C.willow }}>记法：换角的只有「裁判与侦查」一方，参赛选手不换</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const ReasonReroomScene = () => (
  <Shell code="02" title="理由只看利害，重审必须换角">
    <div data-layout="reason-reroom-pair" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="reason-contrast-pair,reroom-swap-rule" data-focal-rule="recusal-turns-on-improper-interests-and-remand-requires-the-whole-original-collegial-panel-to-swap" data-focal-channels="icon,contrast,annotation,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', left: 30, bottom: 16, opacity: 0.07, pointerEvents: 'none'}}><Undo2 size={230} color={C.ivory} strokeWidth={1.1} /></div>
      <div data-final-knowledge="reason-interest-card" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Link2 size={30} color={C.plaque} style={{flexShrink: 0}} />
          <LabelBlock size={28}>回避的理由</LabelBlock>
          <span style={{flex: 1}} />
          <Chip tone="panel" style={{fontSize: 22}}>一个标尺</Chip>
        </Enter>
        <div style={{border: `3px solid ${C.plaque}`, borderRadius: 10, padding: '14px 18px', backgroundColor: 'rgba(232,201,122,0.10)'}}>
          <Enter delay={24} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <span style={{fontSize: 25, fontWeight: 900, color: C.ivory }}>唯一标尺：</span>
            <SoftHi tone="plaque" style={{fontSize: 26}}>不当利害关系</SoftHi>
          </Enter>
          <Enter delay={36} style={{marginTop: 10, fontSize: 22, fontWeight: 800, color: C.ivoryDim }}>是本案当事人或近亲属 · 与本案有利害关系 · 担任过证人鉴定人辩护人诉讼代理人 · 会见违反规定</Enter>
        </div>
        <div style={{border: `3px dashed ${C.rouge}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 9}}>
          <Enter delay={54}><Neg size={23}>学历高低不是理由</Neg></Enter>
          <Enter delay={64}><Neg size={23}>语气态度 · 作用大小不是理由</Neg></Enter>
          <Enter delay={74} style={{fontSize: 22, fontWeight: 750, color: C.ivoryDim }}>与结论对错无关——回避审「关系」，不审「水平」</Enter>
        </div>
        <Enter delay={88} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.plaque} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.ivoryDim }}>2017年题 · 理由辨析单选</span>
        </Enter>
      </div>
      <div data-final-knowledge="reroom-swap-card" style={{position: 'absolute', left: 890, top: 0, width: 886, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Undo2 size={30} color={C.willow} style={{flexShrink: 0}} />
          <LabelBlock color={C.willow} size={28}>发回重审 · 全场换角</LabelBlock>
        </Enter>
        <div style={{border: `3px solid ${C.willow}`, borderRadius: 10, padding: '14px 18px'}}>
          <Enter delay={58} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Chip tone="willow" style={{fontSize: 22}}>二审发回重审</Chip>
            <Dash delay={68} style={{width: 44, borderTop: `4px solid ${C.willow}`}} />
            <SoftHi tone="willow" style={{fontSize: 25}}>原合议庭整体更换</SoftHi>
          </Enter>
          <Enter delay={80} style={{marginTop: 10, fontSize: 22, fontWeight: 800, color: C.ivoryDim }}>一个都不能留——重审要换就换整班底</Enter>
        </div>
        <div style={{border: `3px dashed ${C.rouge}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 9}}>
          <Enter delay={98} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <span style={{fontSize: 24, fontWeight: 900, color: C.ivory }}>审委会讨论过该案的成员</span>
            <Neg size={22}>也不得再参加</Neg>
          </Enter>
          <Enter delay={110} style={{fontSize: 22, fontWeight: 750, color: C.ivoryDim }}>讨论过 = 先入为主，一并回避</Enter>
        </div>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px'}}>
          <Enter delay={124} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <span style={{fontSize: 22, fontWeight: 800, color: C.ivoryDim }}>例外辨析：</span>
            <Chip tone="panel" style={{fontSize: 22}}><ThinU color={C.plaque}>二审发回</ThinU>才整体换</Chip>
            <Chip tone="panel" style={{fontSize: 22}}><ThinU color={C.plaque}>程序违法个别回避</ThinU>照常按理由审</Chip>
          </Enter>
        </div>
        <Enter delay={138} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.plaque} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.ivoryDim }}>2016年题 · 换角规则多选</span>
        </Enter>
      </div>
    </div>
  </Shell>
);

export const DecisionBatonScene = () => (
  <Shell code="03" title="谁拍板，怎么层报，谁能复议">
    <div data-layout="decision-baton-board" data-visual-anchor="role-pair" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="decision-relay-chain,escalation-and-rebuttal-pair" data-focal-rule="the-organization-decides-the-chief-and-the-chief-decides-the-rest-while-recusal-rejections-give-the-applicant-one-review" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', left: 30, bottom: 16, opacity: 0.07, pointerEvents: 'none'}}><ClipboardCheck size={230} color={C.ivory} strokeWidth={1.1} /></div>
      <div data-final-knowledge="decision-relay-card" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 500, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <ClipboardCheck size={30} color={C.plaque} style={{flexShrink: 0}} />
          <LabelBlock size={28}>决定权接力</LabelBlock>
          <span style={{flex: 1}} />
          <Chip tone="plaque" style={{fontSize: 22}}>组织决老大 · 老大决其他</Chip>
        </Enter>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={26} style={{flex: 1, backgroundColor: C.plaque, borderRadius: 12, padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 6}}>
            <span style={{fontSize: 25, fontWeight: 950, color: '#3A2C10'}}>法院院长</span>
            <span style={{fontSize: 22, fontWeight: 800, color: '#5A4720'}}>由</span>
            <span style={{fontSize: 24, fontWeight: 950, color: '#3A2C10'}}>审判委员会决定</span>
          </Enter>
          <Dash delay={40} style={{width: 56, borderTop: `5px solid ${C.plaque}`}} />
          <Enter delay={48} style={{flex: 1, border: `3px solid ${C.plaque}`, borderRadius: 12, padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 6}}>
            <span style={{fontSize: 25, fontWeight: 950, color: C.ivory }}>其他人员</span>
            <span style={{fontSize: 22, fontWeight: 800, color: C.ivoryDim }}>审判人员 · 陪审员 · 书记员等由</span>
            <span style={{fontSize: 24, fontWeight: 950, color: C.ivory }}>院长决定</span>
          </Enter>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 9}}>
          <Enter delay={66} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Chip tone="panel" style={{fontSize: 22}}>侦查人员 → 公安机关负责人</Chip>
            <Chip tone="panel" style={{fontSize: 22}}>检察人员 → 检察长</Chip>
          </Enter>
          <Enter delay={78} style={{fontSize: 22, fontWeight: 750, color: C.ivoryDim }}>陪审员属「其他人员」——回避由院长决定</Enter>
        </div>
      </div>
      <div data-final-knowledge="escalation-card" style={{position: 'absolute', left: 890, top: 0, width: 886, height: 500, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <MoveUp size={30} color={C.moon} style={{flexShrink: 0}} />
          <LabelBlock color={C.moon} size={28}>回避撞上管辖 · 层报指定</LabelBlock>
        </Enter>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={58} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Chip tone="moon" style={{fontSize: 22}}>涉及上级法院领导</Chip>
            <Dash delay={68} style={{width: 40, borderTop: `4px solid ${C.moon}`}} />
            <span style={{fontSize: 22, fontWeight: 800, color: C.ivory }}>下级不宜审 →</span>
            <ThinU color={C.moon}>层报再上一级指定</ThinU>
          </Enter>
          <Enter delay={78} style={{fontSize: 22, fontWeight: 750, color: C.ivoryDim }}>羁押讯问照旧在看守所进行</Enter>
        </div>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={92} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Chip tone="moon" style={{fontSize: 22}}>涉及两级法院领导</Chip>
            <Dash delay={100} style={{width: 40, borderTop: `4px solid ${C.moon}`}} />
            <span style={{fontSize: 22, fontWeight: 800, color: C.ivory }}>→</span>
            <SoftHi tone="moon" style={{fontSize: 23}}>层报省高院跨市指定</SoftHi>
          </Enter>
          <Enter delay={104} style={{fontSize: 22, fontWeight: 750, color: C.ivoryDim }}>自己躲不开领导，就请上面挪地方</Enter>
        </div>
      </div>
      <div data-final-knowledge="rebuttal-rights-strip" style={{position: 'absolute', left: 0, right: 0, top: 524, height: 220, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 24px', display: 'flex', alignItems: 'center', gap: 24}}>
        <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={140} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <RotateCcw size={28} color={C.willow} style={{flexShrink: 0}} />
            <LabelBlock color={C.willow} size={26}>复议权给谁</LabelBlock>
          </Enter>
          <Enter delay={154} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Chip tone="willow" style={{fontSize: 22}}>申请被驳回的人</Chip>
            <span style={{fontSize: 23, fontWeight: 900, color: C.ivory }}>→ 可申请复议一次</span>
          </Enter>
        </div>
        <div style={{width: 3, alignSelf: 'stretch', backgroundColor: C.panelLine}} />
        <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={168} style={{display: 'flex', alignItems: 'center', gap: 12, marginTop: 30}}>
            <Neg size={23}>被决定回避的人没有复议权</Neg>
          </Enter>
          <Enter delay={180} style={{fontSize: 22, fontWeight: 750, color: C.ivoryDim }}>换角者退出即可；只有被拒的申请人能翻一次牌</Enter>
          <Enter delay={192} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <GraduationCap size={24} color={C.plaque} style={{flexShrink: 0}} />
            <span style={{fontSize: 22, fontWeight: 800, color: C.ivoryDim }}>2013-2018年题 · 复议归属与层报指定</span>
          </Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const RecusalBackstageSwap = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-applicant-gate" {...SCENES.applicantGate}><ApplicantGateScene /></TimelineSequence>
    <TimelineSequence name="02-reason-reroom" {...SCENES.reasonReroom}><ReasonReroomScene /></TimelineSequence>
    <TimelineSequence name="03-decision-baton" {...SCENES.decisionBaton}><DecisionBatonScene /></TimelineSequence>
  </AbsoluteFill>
);
