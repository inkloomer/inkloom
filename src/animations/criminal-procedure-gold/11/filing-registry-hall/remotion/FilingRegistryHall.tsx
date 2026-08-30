import {AbsoluteFill} from 'remotion';
import {Eye, Gavel, GraduationCap, KeyRound, ListChecks, MessageSquareQuote, RotateCcw, Route, Search, UserRound} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp, ThinU} from './theme';

export const IntakeConditionScene = () => (
  <Shell code="01" title="挂号台：初查温和，立案三验">
    <div data-layout="intake-condition-desk" data-visual-anchor="boundary" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="intake-probe-rule,triple-condition-checklist" data-focal-rule="preliminary-inquiry-stays-voluntary-and-filing-requires-facts-responsibility-and-jurisdiction-together" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', right: 30, bottom: 16, opacity: 0.07, pointerEvents: 'none'}}><Search size={230} color={C.parchment} strokeWidth={1.1} /></div>
      <div data-final-knowledge="intake-probe-card" style={{position: 'absolute', left: 0, top: 0, width: 900, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Search size={30} color={C.sky} style={{flexShrink: 0}} />
            <LabelBlock color={C.sky} size={28}>初查 · 温和探针</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={16}><Chip tone="panel" style={{fontSize: 22}}>只碰任意性手段</Chip></Enter>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={30} style={{border: `3px solid ${C.sky}`, borderRadius: 10, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Chip tone="sky" style={{fontSize: 22}}>初查可：查询 · 鉴定 · 调取</Chip>
            <span style={{fontSize: 22, fontWeight: 750, color: C.parchmentDim }}>任意性措施一路绿灯</span>
          </Enter>
          <Enter delay={44} style={{border: `3px dashed ${C.registry}`, borderRadius: 10, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <MessageSquareQuote size={26} color={C.registry} style={{flexShrink: 0}} />
            <Neg size={22}>立案前禁讯问 · 禁强制措施</Neg>
          </Enter>
          <Enter delay={58} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <Chip tone="mint" style={{fontSize: 22}}>侦查 · 起诉 · 审判阶段</Chip>
            <span style={{fontSize: 22, fontWeight: 800, color: C.parchment }}>讯问才放行</span>
          </Enter>
        </div>
        <Enter delay={74} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.gold} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.parchmentDim }}>2016-2020年题 · 初查边界反复考</span>
        </Enter>
      </div>
      <div data-final-knowledge="condition-checklist-card" style={{position: 'absolute', left: 924, top: 0, width: 852, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <ListChecks size={30} color={C.gold} style={{flexShrink: 0}} />
            <LabelBlock color={C.gold} size={28}>立案三验 · 缺一不挂</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={50}><Chip tone="panel" style={{fontSize: 22}}>登记闸门</Chip></Enter>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={64} style={{border: `3px solid ${C.gold}`, borderRadius: 10, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12}}>
            <span style={{fontSize: 26, fontWeight: 950, color: C.gold, width: 44, textAlign: 'center' }}>一</span>
            <span style={{fontSize: 23, fontWeight: 900, color: C.parchment }}>认为有<SoftHi tone="gold" style={{fontSize: 22 }}>犯罪事实</SoftHi></span>
          </Enter>
          <Enter delay={76} style={{border: `3px solid ${C.mint}`, borderRadius: 10, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12}}>
            <span style={{fontSize: 26, fontWeight: 950, color: C.mint, width: 44, textAlign: 'center' }}>二</span>
            <span style={{fontSize: 23, fontWeight: 900, color: C.parchment }}>需追究<SoftHi tone="mint" style={{fontSize: 22 }}>刑事责任</SoftHi></span>
          </Enter>
          <Enter delay={88} style={{border: `3px solid ${C.sky}`, borderRadius: 10, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12}}>
            <span style={{fontSize: 26, fontWeight: 950, color: C.sky, width: 44, textAlign: 'center' }}>三</span>
            <span style={{fontSize: 23, fontWeight: 900, color: C.parchment }}>属于<SoftHi tone="sky" style={{fontSize: 22 }}>自己管辖</SoftHi></span>
          </Enter>
        </div>
        <Enter delay={104} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.gold} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.parchmentDim }}>2021-2024年题 · 三条件并考</span>
        </Enter>
      </div>
    </div>
  </Shell>
);

export const ReliefDoorsScene = () => (
  <Shell code="02" title="救济三扇门：控告人独享，举报人止步">
    <div data-layout="relief-three-doors" data-visual-anchor="role-pair" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="three-door-relief-row,role-barred-contrast" data-focal-rule="only-complainants-have-relief-with-review-appeal-and-private-prosecution-in-no-fixed-order" data-focal-channels="icon,contrast,connector,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', left: 30, bottom: 16, opacity: 0.07, pointerEvents: 'none'}}><KeyRound size={230} color={C.parchment} strokeWidth={1.1} /></div>
      <div data-final-knowledge="three-doors-card" style={{position: 'absolute', left: 0, top: 0, width: 900, height: 744, backgroundColor: C.panel, border: `3px solid ${C.mint}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <KeyRound size={30} color={C.mint} style={{flexShrink: 0}} />
            <LabelBlock color={C.mint} size={28}>控告人 · 三扇门无顺序</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={16}><Chip tone="panel" style={{fontSize: 22}}>被害人＝控告人</Chip></Enter>
        </div>
        <div style={{display: 'flex', gap: 12}}>
          <Enter delay={30} style={{flex: 1, border: `3px solid ${C.gold}`, borderRadius: 10, padding: '14px 14px', display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center'}}>
            <RotateCcw size={26} color={C.gold} style={{flexShrink: 0}} />
            <Chip tone="gold" style={{fontSize: 23 }}>复议</Chip>
            <span style={{fontSize: 21, fontWeight: 750, color: C.parchmentDim }}>向决定机关</span>
          </Enter>
          <Enter delay={42} style={{flex: 1, border: `3px solid ${C.sky}`, borderRadius: 10, padding: '14px 14px', display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center'}}>
            <Eye size={26} color={C.sky} style={{flexShrink: 0}} />
            <Chip tone="sky" style={{fontSize: 23 }}>申诉 · 立案监督</Chip>
            <span style={{fontSize: 21, fontWeight: 750, color: C.parchmentDim }}>找检察院</span>
          </Enter>
          <Enter delay={54} style={{flex: 1, border: `3px solid ${C.registry}`, borderRadius: 10, padding: '14px 14px', display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center'}}>
            <Gavel size={26} color={C.registry} style={{flexShrink: 0}} />
            <Chip tone="registry" style={{fontSize: 23 }}>自诉</Chip>
            <span style={{fontSize: 21, fontWeight: 750, color: C.parchmentDim }}>直接去法院</span>
          </Enter>
        </div>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px'}}>
          <Enter delay={68} style={{fontSize: 22, fontWeight: 800, color: C.parchment }}>三扇门随意进——先复议再监督＝错误说法</Enter>
        </div>
        <Enter delay={80} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.mint} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.parchmentDim }}>2015-2024年题 · 救济排序陷阱</span>
        </Enter>
      </div>
      <div data-final-knowledge="role-barred-card" style={{position: 'absolute', left: 924, top: 0, width: 852, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <UserRound size={30} color={C.registry} style={{flexShrink: 0}} />
            <LabelBlock color={C.registry} size={28}>止步名单</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={50}><Chip tone="panel" style={{fontSize: 22}}>身份定救济</Chip></Enter>
        </div>
        <div style={{border: `3px dashed ${C.registry}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 9}}>
          <Enter delay={64}><Neg size={23}>报案人 · 举报人无救济权</Neg></Enter>
          <Enter delay={74} style={{fontSize: 22, fontWeight: 750, color: C.parchmentDim }}>张某举报食品公司——举报身份，复议申诉都免谈</Enter>
        </div>
        <div style={{border: `3px solid ${C.gold}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 9}}>
          <Enter delay={90} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <Chip tone="gold" style={{fontSize: 22}}>行政执法机关</Chip>
            <span style={{fontSize: 22, fontWeight: 800, color: C.parchment }}>收到通知后</span>
            <ThinU color={C.gold}>3 日内</ThinU>
          </Enter>
          <Enter delay={100}><Chip tone="gold" style={{fontSize: 22}}>可向决定公安机关申请复议</Chip></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const SupervisionStepsScene = () => (
  <Shell code="03" title="立案监督：四步走，不许跳">
    <div data-layout="supervision-four-steps" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="four-step-relay,dead-end-contrast" data-focal-rule="supervision-walks-four-steps-in-order-and-never-degenerates-into-procuratorial-investigation" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', right: 30, bottom: 16, opacity: 0.07, pointerEvents: 'none'}}><Eye size={230} color={C.parchment} strokeWidth={1.1} /></div>
      <div data-final-knowledge="four-steps-relay-card" style={{position: 'absolute', left: 0, top: 0, width: 900, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Eye size={30} color={C.sky} style={{flexShrink: 0}} />
            <LabelBlock color={C.sky} size={28}>检察院立案监督 · 四步接力</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={16}><Chip tone="panel" style={{fontSize: 22}}>顺序走，不能跳</Chip></Enter>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={30} style={{border: `3px solid ${C.gold}`, borderRadius: 10, padding: '11px 16px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <span style={{fontSize: 25, fontWeight: 950, color: C.gold, width: 44, textAlign: 'center' }}>壹</span>
            <span style={{fontSize: 23, fontWeight: 900, color: C.parchment }}>要求公安机关书面<SoftHi tone="gold" style={{fontSize: 22 }}>说明不立案理由</SoftHi></span>
          </Enter>
          <Enter delay={44} style={{border: `3px solid ${C.mint}`, borderRadius: 10, padding: '11px 16px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <span style={{fontSize: 25, fontWeight: 950, color: C.mint, width: 44, textAlign: 'center' }}>贰</span>
            <span style={{fontSize: 23, fontWeight: 900, color: C.parchment }}>理由不成立 → <SoftHi tone="mint" style={{fontSize: 22 }}>通知立案</SoftHi></span>
          </Enter>
          <Enter delay={58} style={{border: `3px solid ${C.sky}`, borderRadius: 10, padding: '11px 16px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <span style={{fontSize: 25, fontWeight: 950, color: C.sky, width: 44, textAlign: 'center' }}>叁</span>
            <span style={{fontSize: 23, fontWeight: 900, color: C.parchment }}>仍不立 → 发出<SoftHi tone="sky" style={{fontSize: 22 }}>纠正违法通知书</SoftHi></span>
          </Enter>
          <Enter delay={72} style={{border: `3px solid ${C.registry}`, borderRadius: 10, padding: '11px 16px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <span style={{fontSize: 25, fontWeight: 950, color: C.registry, width: 44, textAlign: 'center' }}>肆</span>
            <span style={{fontSize: 23, fontWeight: 900, color: C.parchment }}>报上一级检察院 · 协商同级公安机关</span>
          </Enter>
        </div>
        <Enter delay={90} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.gold} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.parchmentDim }}>2015-2024年题 · 四步排序年年考</span>
        </Enter>
      </div>
      <div data-final-knowledge="dead-end-card" style={{position: 'absolute', left: 924, top: 0, width: 852, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Route size={30} color={C.registry} style={{flexShrink: 0}} />
            <LabelBlock color={C.registry} size={28}>死路牌</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={50}><Chip tone="panel" style={{fontSize: 22 }}>越权即错</Chip></Enter>
        </div>
        <div style={{border: `3px dashed ${C.registry}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 9}}>
          <Enter delay={64}><Neg size={23}>检察院不得自行决定立案侦查</Neg></Enter>
          <Enter delay={74}><Neg size={23}>「省级检察院批准后自侦」＝错误</Neg></Enter>
        </div>
        <div style={{border: `3px solid ${C.mint}`, borderRadius: 10, padding: '12px 16px', backgroundColor: C.mintSoft}}>
          <Enter delay={90} style={{fontSize: 23, fontWeight: 900, color: C.mint }}>监督是推着公安走，不是替公安走</Enter>
        </div>
        <Enter delay={102} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.registry} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.parchmentDim }}>2015-2-32 · 死路选项一枪一个</span>
        </Enter>
      </div>
    </div>
  </Shell>
);

export const FilingRegistryHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-intake-condition-desk" {...SCENES.intakeConditionDesk}><IntakeConditionScene /></TimelineSequence>
    <TimelineSequence name="02-relief-three-doors" {...SCENES.reliefThreeDoors}><ReliefDoorsScene /></TimelineSequence>
    <TimelineSequence name="03-supervision-four-steps" {...SCENES.supervisionFourSteps}><SupervisionStepsScene /></TimelineSequence>
  </AbsoluteFill>
);
