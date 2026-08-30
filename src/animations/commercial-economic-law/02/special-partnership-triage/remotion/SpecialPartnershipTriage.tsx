import {AbsoluteFill} from 'remotion';
import {GraduationCap, Landmark, Scale, ShieldCheck, Stamp, TrendingDown, Users} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp as WardStamp, ThinU} from './theme';

export const TriageBoardScene = () => (
  <Shell code="01" title="分诊台：先看债务，再找人">
    <div data-layout="triage-sorting-board" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="debt-type-triage,liability-tier-split" data-focal-rule="special-debts-route-fault-to-unlimited-liability-while-ordinary-debts-bind-every-partner" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="tri-special-desk" style={{position: 'absolute', left: 0, top: 0, width: 864, height: 470, backgroundColor: C.chart, border: `3px solid ${C.triage}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 8px 20px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <TrendingDown size={30} color={C.triage} style={{flexShrink: 0}} />
          <LabelBlock color={C.triage} size={27}>特殊债务 · 故意或重大过失所致</LabelBlock>
        </Enter>
        <div style={{marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={24} style={{backgroundColor: C.triageSoft, borderRadius: 10, padding: '12px 18px'}}>
            <span style={{fontSize: 23, fontWeight: 900, color: C.ink, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Users size={24} color={C.triage} style={{flexShrink: 0}} />过错合伙人</span>
            <span style={{fontSize: 22, fontWeight: 800, color: C.ink, marginTop: 6, display: 'block'}}>承担<ThinU color={C.triage}>无限连带责任</ThinU></span>
          </Enter>
          <Enter delay={42} style={{backgroundColor: C.panel, borderRadius: 10, padding: '12px 18px'}}>
            <span style={{fontSize: 23, fontWeight: 900, color: C.ink, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><ShieldCheck size={24} color={C.scrub} style={{flexShrink: 0}} />其他合伙人</span>
            <span style={{fontSize: 22, fontWeight: 800, color: C.ink, marginTop: 6, display: 'block'}}>以<ThinU color={C.scrub}>财产份额为限</ThinU>担责</span>
          </Enter>
        </div>
      </div>
      <div data-final-knowledge="tri-ordinary-desk" style={{position: 'absolute', left: 896, top: 0, width: 880, height: 470, backgroundColor: C.panel, border: `3px solid ${C.scrub}`, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={58} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Users size={30} color={C.scrub} style={{flexShrink: 0}} />
          <LabelBlock color={C.scrub} size={27}>一般债务 · 日常经营所致</LabelBlock>
        </Enter>
        <Enter delay={76} style={{marginTop: 16, fontSize: 23, fontWeight: 850, color: C.ink, lineHeight: 1.8}}>全体合伙人<SoftHi style={{fontSize: 22}}>无限连带责任</SoftHi>——不分谁经手，一个都不少</Enter>
        <Dash delay={90} style={{marginTop: 16, flex: 0, width: 220, borderTop: `3px dashed ${C.panelLine}`}} />
        <Enter delay={98} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>普通合伙人：无限连带</span>
          <span>有限合伙人：以<ThinU color={C.scrub}>认缴出资额</ThinU>为限</span>
        </Enter>
      </div>
      <div data-final-knowledge="tri-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 496, height: 248, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={112} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.chart} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.chart}}>口诀 · 先看债务，再找人</span>
          </Enter>
          <Enter delay={130} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: 'rgba(248,246,239,0.78)', lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 8}}>
            <span>· 特殊债务：谁犯错谁顶到底，旁人以份额兜底</span>
            <span>· 一般债务：全员上桌，无限连带</span>
          </Enter>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed rgba(248,246,239,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={148}><WardStamp delay={154} tone="jade">2024金题 考点入口</WardStamp></Enter>
          <Enter delay={166} style={{fontSize: 21, fontWeight: 750, color: 'rgba(248,246,239,0.66)', lineHeight: 1.7}}>华升所＝会计师事务所＝特殊的普通合伙；下一步看本案怎么分诊</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const VerdictWardScene = () => (
  <Shell code="02" title="本案分诊结果：四方定责">
    <div data-layout="verdict-ward-pair" data-visual-anchor="role-pair" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="fault-joinder-rule,audit-connate-liability" data-focal-rule="the-faulting-partner-answers-unlimited-the-innocent-cap-at-their-share-and-the-firm-joins-the-auditee" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="ver-surgeons-desk" style={{position: 'absolute', left: 0, top: 0, width: 864, height: 470, backgroundColor: C.triageSoft, border: `3px solid ${C.triage}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 8px 20px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Users size={30} color={C.triage} style={{flexShrink: 0}} />
          <LabelBlock color={C.triage} size={27}>主刀台 · 赵某</LabelBlock>
          <Chip tone="triage" style={{fontSize: 20}}>重大过失 · 签字审计师</Chip>
        </Enter>
        <Enter delay={24} style={{marginTop: 14, fontSize: 23, fontWeight: 900, color: C.ink, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>2020 年审计报告重大疏漏——<ThinU color={C.triage}>过错在他</ThinU></span>
          <span>对投资者损失承担<SoftHi style={{fontSize: 22}}>无限连带责任</SoftHi>（D ✓）</span>
        </Enter>
        <Enter delay={44} style={{marginTop: 12}}><Neg size={21}>C 全员无限连带——王某李某无过错，不上手术台</Neg></Enter>
      </div>
      <div data-final-knowledge="ver-nurses-desk" style={{position: 'absolute', left: 896, top: 0, width: 880, height: 470, backgroundColor: C.panel, border: `3px solid ${C.scrub}`, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={58} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <ShieldCheck size={28} color={C.scrub} style={{flexShrink: 0}} />
          <LabelBlock color={C.scrub} size={26}>护士站 · 王某 李某</LabelBlock>
          <Chip tone="jade" style={{fontSize: 20}}>无过错</Chip>
        </Enter>
        <Enter delay={76} style={{marginTop: 14, fontSize: 23, fontWeight: 850, color: C.ink, lineHeight: 1.8}}>以各自<SoftHi style={{fontSize: 22}}>财产份额为限</SoftHi>分担——保护无辜合伙人，特殊的普通合伙才有存在意义</Enter>
        <Dash delay={90} style={{marginTop: 14, flex: 0, width: 220, borderTop: `3px dashed ${C.panelLine}`}} />
        <Enter delay={98} style={{marginTop: 12, fontSize: 21, fontWeight: 750, color: C.ink, lineHeight: 1.7}}>华升所整体也无法证明自身无过错 → 与中胜地产<ThinU color={C.triage}>承担连带责任</ThinU>（B ✓）</Enter>
      </div>
      <div data-final-knowledge="ver-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 496, height: 248, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={112} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.chart} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.chart}}>投资者求偿路径</span>
          </Enter>
          <Enter delay={130} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: 'rgba(248,246,239,0.8)', lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 8}}>
            <span>· 先找华升所＋中胜地产（连带）</span>
            <span>· 华升所内部：赵某无限兜底，王李以份额为限</span>
          </Enter>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed rgba(248,246,239,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={148}><WardStamp delay={154} tone="jade">2024金题 答案 BD</WardStamp></Enter>
          <Enter delay={170} style={{fontSize: 21, fontWeight: 750, color: 'rgba(248,246,239,0.66)', lineHeight: 1.7}}>A 项「以退伙份额为限」错在哪？——见 03 场景时间线</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const TenureTimelineScene = () => (
  <Shell code="03" title="离院不免责：退伙时间线与责任矩阵">
    <div data-layout="tenure-timeline-table" data-visual-anchor="timeline-gate" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="pre-exit-continuity,liability-matrix-recap" data-focal-rule="debts-born-before-exit-keep-the-retiring-general-partner-on-the-unlimited-hook" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="ten-timeline-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 300, backgroundColor: C.chart, border: `3px solid ${C.triage}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 8px 20px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Landmark size={28} color={C.triage} style={{flexShrink: 0}} />
          <LabelBlock color={C.triage} size={26}>赵某的时间线 · 债务生于离院之前</LabelBlock>
        </Enter>
        <div style={{marginTop: 18, position: 'relative', height: 168}}>
          <div style={{position: 'absolute', left: 10, right: 10, top: 78, height: 5, backgroundColor: C.inkLine}} />
          {[
            {x: 10, year: '2018-2022', tag: '执业出具审计报告', tone: 'scrub' as const},
            {x: 360, year: '2023-9', tag: '重大疏漏被认定', tone: 'triage' as const},
            {x: 700, year: '2024-1', tag: '赵某退伙', tone: 'panel' as const},
          ].map((n) => (
            <div key={n.year} style={{position: 'absolute', left: n.x, top: 0, width: 300}}>
              <Enter delay={n.year === '2018-2022' ? 24 : n.year === '2023-9' ? 40 : 56}><Chip tone={n.tone} style={{fontSize: 20}}>{n.year}</Chip></Enter>
              <Enter delay={(n.year === '2018-2022' ? 24 : n.year === '2023-9' ? 40 : 56) + 8} style={{marginTop: 52, fontSize: 21, fontWeight: 800, color: C.ink, whiteSpace: 'nowrap'}}>{n.tag}</Enter>
              <div style={{position: 'absolute', left: 12, top: 70, width: 14, height: 14, borderRadius: 7, backgroundColor: n.tone === 'panel' ? C.ink : n.tone === 'triage' ? C.triage : C.scrub}} />
            </div>
          ))}
        </div>
        <Enter delay={72} style={{marginTop: 4, fontSize: 22, fontWeight: 900, color: C.ink}}>债务产生于退伙前 → 赵某<ThinU color={C.triage}>仍担无限连带责任</ThinU>（A ✗）</Enter>
      </div>
      <div data-final-knowledge="ten-matrix-board" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 300, backgroundColor: C.panel, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={84} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Users size={28} color={C.scrub} style={{flexShrink: 0}} />
          <LabelBlock size={25}>责任矩阵 · 一表背完</LabelBlock>
        </Enter>
        <div style={{marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={100} style={{fontSize: 20, fontWeight: 750, color: C.ink, lineHeight: 1.5, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="scrub" style={{fontSize: 19}}>普通合伙人</Chip>无限连带</Enter>
          <Enter delay={112} style={{fontSize: 20, fontWeight: 750, color: C.ink, lineHeight: 1.5, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="scrub" style={{fontSize: 19}}>有限合伙人</Chip>认缴出资额为限</Enter>
          <Enter delay={124} style={{fontSize: 20, fontWeight: 750, color: C.ink, lineHeight: 1.5, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="triage" style={{fontSize: 19, backgroundColor: C.triageSoft}}>特普·特殊债务</Chip>过错人无限连带＋其他人份额为限</Enter>
          <Enter delay={136} style={{fontSize: 20, fontWeight: 750, color: C.ink, lineHeight: 1.5, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="scrub" style={{fontSize: 19}}>特普·一般债务</Chip>全体无限连带</Enter>
        </div>
      </div>
      <div data-final-knowledge="ten-exam-verdict" style={{position: 'absolute', left: 0, right: 0, top: 326, height: 418, backgroundColor: C.ink, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={150} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.chart} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.chart}}>离院不免责 · 原理</span>
          </Enter>
          <Enter delay={168} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: 'rgba(248,246,239,0.82)', lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 10}}>
            <span>· 退伙清算退的是<ThinU color={C.chart}>财产份额</ThinU>，不是责任豁免书</span>
            <span>· 债权人盯着的是「债务发生时」的合伙状态</span>
            <span>· 有限合伙人退伙：以<SoftHi style={{fontSize: 21}}>取回的财产</SoftHi>为限担责</span>
          </Enter>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed rgba(248,246,239,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12}}>
          <Enter delay={188} style={{fontSize: 23, fontWeight: 900, color: C.chart}}>全章一句</Enter>
          <Enter delay={202} style={{fontSize: 22, fontWeight: 800, color: 'rgba(248,246,239,0.85)', lineHeight: 1.8}}>特殊普通合伙：先分诊债务，再点医生的名；<ThinU color={C.chart}>离院的手续，挡不住旧账的追查</ThinU></Enter>
          <Enter delay={222}><WardStamp delay={228} tone="jade">正确答案 BD</WardStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const SpecialPartnershipTriage = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-triage-board" {...SCENES.triageBoard}><TriageBoardScene /></TimelineSequence>
    <TimelineSequence name="02-verdict-ward" {...SCENES.verdictWard}><VerdictWardScene /></TimelineSequence>
    <TimelineSequence name="03-tenure-timeline" {...SCENES.tenureTimeline}><TenureTimelineScene /></TimelineSequence>
  </AbsoluteFill>
);
