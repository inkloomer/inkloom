import {AbsoluteFill} from 'remotion';
import {AlarmClock, BadgeCheck, CalendarClock, GraduationCap, Mail, Milestone, RefreshCw, Route} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp, ThinU} from './theme';

export const RecalcVentsScene = () => (
  <Shell code="01" title="重算的四个驿口，其余照走">
    <div data-layout="recalc-four-vents" data-visual-anchor="boundary" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="gate-vent-quad,negative-lane-pair" data-focal-rule="limits-restart-only-on-statutory-vents-new-crime-supplemental-investigation-remand-and-changed-jurisdiction" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', right: 30, bottom: 16, opacity: 0.07, pointerEvents: 'none'}}><RefreshCw size={230} color={C.parchment} strokeWidth={1.1} /></div>
      <div data-final-knowledge="recalc-vent-quad" style={{position: 'absolute', left: 0, top: 0, width: 900, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <RefreshCw size={30} color={C.copper} style={{flexShrink: 0}} />
            <LabelBlock size={28}>期限重推 · 四个法定驿口</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={16}><Chip tone="panel" style={{fontSize: 22}}>口诀：另有重罪 · 补侦发回 · 改管辖</Chip></Enter>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14}}>
          <Enter delay={30} style={{border: `3px solid ${C.jade}`, borderRadius: 10, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12}}>
            <Milestone size={24} color={C.jade} style={{flexShrink: 0}} />
            <div style={{display: 'flex', flexDirection: 'column', gap: 3}}>
              <span style={{fontSize: 23, fontWeight: 950, color: C.parchment }}>另有重要罪行</span>
              <span style={{fontSize: 21, fontWeight: 750, color: C.parchmentDim }}>自发现之日起重算侦查羁押期限</span>
            </div>
          </Enter>
          <Enter delay={42} style={{border: `3px solid ${C.copper}`, borderRadius: 10, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12}}>
            <Route size={24} color={C.copper} style={{flexShrink: 0}} />
            <div style={{display: 'flex', flexDirection: 'column', gap: 3}}>
              <span style={{fontSize: 23, fontWeight: 950, color: C.parchment }}>补充侦查完毕移送后</span>
              <span style={{fontSize: 21, fontWeight: 750, color: C.parchmentDim }}>移送检院或法院后重算相应期限</span>
            </div>
          </Enter>
          <Enter delay={54} style={{border: `3px solid ${C.stamp}`, borderRadius: 10, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12}}>
            <RefreshCw size={24} color={C.stamp} style={{flexShrink: 0}} />
            <div style={{display: 'flex', flexDirection: 'column', gap: 3}}>
              <span style={{fontSize: 23, fontWeight: 950, color: C.parchment }}>二审发回重审</span>
              <span style={{fontSize: 21, fontWeight: 750, color: C.parchmentDim }}>原审法院收到案件之日起重算</span>
            </div>
          </Enter>
          <Enter delay={66} style={{border: `3px solid ${C.jade}`, borderRadius: 10, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12}}>
            <Route size={24} color={C.jade} style={{flexShrink: 0}} />
            <div style={{display: 'flex', flexDirection: 'column', gap: 3}}>
              <span style={{fontSize: 23, fontWeight: 950, color: C.parchment }}>改变管辖</span>
              <span style={{fontSize: 21, fontWeight: 750, color: C.parchmentDim }}>改变后的办案机关收到之日起重算</span>
            </div>
          </Enter>
        </div>
        <Enter delay={84} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.copper} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.parchmentDim }}>2016年题 · 四选一辨重算</span>
        </Enter>
      </div>
      <div data-final-knowledge="negative-lane-card" style={{position: 'absolute', left: 924, top: 0, width: 852, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <AlarmClock size={30} color={C.stamp} style={{flexShrink: 0}} />
            <LabelBlock color={C.stamp} size={28}>不重算 · 只扣减</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={50}><Chip tone="panel" style={{fontSize: 22}}>STOP 路牌</Chip></Enter>
        </div>
        <div style={{border: `3px dashed ${C.stamp}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 9}}>
          <Enter delay={64}><Neg size={23}>处理回避申请 → 不重算审限</Neg></Enter>
          <Enter delay={74}><Neg size={23}>检察院阅卷 → 不重算二审审限</Neg></Enter>
        </div>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={88} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <Chip tone="jade" style={{fontSize: 22}}>二者只不计入审限</Chip>
            <span style={{fontSize: 22, fontWeight: 800, color: C.parchment }}>期限本身照走</span>
          </Enter>
          <Enter delay={98} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <Chip tone="copper" style={{fontSize: 22}}>重算＝期限从零再走</Chip>
            <Chip tone="paper" style={{fontSize: 22, border: `2px solid ${C.panelLine}`}}>扣减＝只停表不归零</Chip>
          </Enter>
          <Enter delay={108} style={{fontSize: 22, fontWeight: 750, color: C.parchmentDim }}>重算必须有法定事由——驿口之外不翻牌</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const AppealClockScene = () => (
  <Shell code="02" title="卢某案时刻表：一条十里驿道">
    <div data-layout="appeal-clock-timeline" data-visual-anchor="timeline-gate" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="milestone-track-progression,extension-rule-chip" data-focal-rule="appeal-period-runs-from-the-day-after-service-and-holidays-extend-the-deadline" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', left: 30, bottom: 16, opacity: 0.07, pointerEvents: 'none'}}><CalendarClock size={230} color={C.parchment} strokeWidth={1.1} /></div>
      <div data-final-knowledge="appeal-track-card" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 560, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <CalendarClock size={30} color={C.jade} style={{flexShrink: 0}} />
            <LabelBlock color={C.jade} size={28}>上诉期时刻表</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={16}><Chip tone="panel" style={{fontSize: 22}}>判决 10 日 · 裁定 5 日</Chip></Enter>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
          <Enter delay={32}><Chip tone="paper" style={{fontSize: 22 }}>9.21 宣判送达</Chip></Enter>
          <Dash delay={40} style={{width: 34, borderTop: `4px solid ${C.jade}`}} />
          <Enter delay={46}><Chip tone="jade" style={{fontSize: 22 }}>9.22 起算（次日起）</Chip></Enter>
          <Dash delay={54} style={{width: 34, borderTop: `4px solid ${C.jade}`}} />
          <Enter delay={60}><Chip tone="jade" style={{fontSize: 22 }}>10.1 届满＝国庆</Chip></Enter>
          <Dash delay={68} style={{width: 34, borderTop: `4px solid ${C.copper}`}} />
          <Enter delay={74}><SoftHi tone="copper" style={{fontSize: 23 }}>顺延至 10.8</SoftHi></Enter>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
          <Enter delay={90}><Chip tone="copper" style={{fontSize: 22 }}>9.30 交看守所黄某</Chip></Enter>
          <Enter delay={98}><Stamp delay={106} tone="jade">未超期</Stamp></Enter>
          <span style={{flex: 1}} />
          <Enter delay={114}><Chip tone="copper" style={{fontSize: 22 }}>10.8 交邮</Chip></Enter>
          <Enter delay={122}><Stamp delay={130} tone="jade">以邮戳为准 · 未超</Stamp></Enter>
          <span style={{flex: 1}} />
          <Enter delay={138}><Chip tone="stamp" style={{fontSize: 22 }}>10.10 到院</Chip></Enter>
          <Enter delay={146}><Stamp delay={154} tone="stamp">判决尚未生效</Stamp></Enter>
        </div>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <Enter delay={166} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Milestone size={24} color={C.copper} style={{flexShrink: 0}} />
            <span style={{fontSize: 22, fontWeight: 800, color: C.parchment }}>两段驿道都赶在期满前——</span>
            <SoftHi tone="jade" style={{fontSize: 23 }}>D 正确：一审判决尚未生效</SoftHi>
          </Enter>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <Enter delay={180} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <AlarmClock size={22} color={C.stamp} style={{flexShrink: 0}} />
            <Neg size={21}>按「10.10 到院日」算逾期＝错</Neg>
          </Enter>
          <Enter delay={190} style={{fontSize: 22, fontWeight: 750, color: C.parchmentDim }}>交邮在途的时间，不记在卢某头上</Enter>
        </div>
      </div>
      <div data-final-knowledge="extension-rule-card" style={{position: 'absolute', left: 0, right: 0, top: 584, height: 160, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 20}}>
        <Enter delay={186} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <AlarmClock size={28} color={C.copper} style={{flexShrink: 0}} />
          <LabelBlock color={C.copper} size={25}>起算通则</LabelBlock>
        </Enter>
        <Enter delay={200} style={{fontSize: 23, fontWeight: 850, color: C.parchment }}>从接到文书的<ThinU color={C.copper}>第二日</ThinU>起算</Enter>
        <span style={{flex: 1}} />
        <Enter delay={214} style={{fontSize: 22, fontWeight: 800, color: C.parchmentDim }}>届满遇节假日 → 顺延至节后第一个工作日</Enter>
      </div>
    </div>
  </Shell>
);

export const MailRecoveryScene = () => (
  <Shell code="03" title="交邮不逾期；无耽误无恢复">
    <div data-layout="mail-recovery-rules" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="mail-stamp-rule,recovery-fork-contrast" data-focal-rule="mailing-before-deadline-never-expires-by-postmark-and-recovery-presumes-an-actual-obstacle" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', right: 30, bottom: 16, opacity: 0.07, pointerEvents: 'none'}}><Mail size={230} color={C.parchment} strokeWidth={1.1} /></div>
      <div data-final-knowledge="mail-stamp-card" style={{position: 'absolute', left: 0, top: 0, width: 900, height: 744, backgroundColor: C.panel, border: `3px solid ${C.jade}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Mail size={30} color={C.jade} style={{flexShrink: 0}} />
            <LabelBlock color={C.jade} size={28}>交邮闸 · 一枚邮戳定乾坤</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={16}><Chip tone="panel" style={{fontSize: 22}}>在途时间不打紧</Chip></Enter>
        </div>
        <div style={{border: `3px solid ${C.jade}`, borderRadius: 10, padding: '14px 18px', backgroundColor: 'rgba(127,176,138,0.08)'}}>
          <Enter delay={32} style={{fontSize: 25, fontWeight: 950, color: C.parchment }}>期满前交邮<ThinU color={C.jade}>不算过期</ThinU>，以邮戳日期为准</Enter>
          <Enter delay={44} style={{marginTop: 10, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <span style={{fontSize: 22, fontWeight: 800, color: C.parchment }}>黄某 10.8 交邮 →</span>
            <Stamp delay={52} tone="jade">10.10 到院不影响</Stamp>
          </Enter>
        </div>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <Enter delay={66} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <BadgeCheck size={24} color={C.copper} style={{flexShrink: 0}} />
            <span style={{fontSize: 22, fontWeight: 800, color: C.parchment }}>交给看守所监管人员 = 已履行上诉手续</span>
          </Enter>
          <Enter delay={78} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Chip tone="copper" style={{fontSize: 22 }}>在途时间不计入期间</Chip>
            <span style={{fontSize: 22, fontWeight: 750, color: C.parchmentDim }}>交邮即到达的意思时刻</span>
          </Enter>
        </div>
      </div>
      <div data-final-knowledge="recovery-fork-card" style={{position: 'absolute', left: 924, top: 0, width: 852, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <CalendarClock size={30} color={C.stamp} style={{flexShrink: 0}} />
            <LabelBlock color={C.stamp} size={28}>耽误与恢复 · 分岔口</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={50}><Chip tone="panel" style={{fontSize: 22}}>本题无此岔路</Chip></Enter>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={64} style={{border: `3px dashed ${C.stamp}`, borderRadius: 10, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <Neg size={22}>没耽误 → 谈不上中止</Neg>
            <Neg size={22}>更谈不上申请恢复</Neg>
          </Enter>
          <Enter delay={78} style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '11px 16px', display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <Chip tone="copper" style={{fontSize: 22}}>只有因不可抗力等正当理由耽误</Chip>
            <span style={{fontSize: 22, fontWeight: 800, color: C.parchment }}>才可申请继续行诉</span>
          </Enter>
          <Enter delay={90} style={{fontSize: 22, fontWeight: 750, color: C.parchmentDim }}>先问「误了没有」，再谈「救不救」</Enter>
        </div>
        <Enter delay={104} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.copper} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.parchmentDim }}>2017-2-29 · 期间计算单选</span>
        </Enter>
      </div>
    </div>
  </Shell>
);

export const PeriodRelayStation = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-recalc-four-vents" {...SCENES.recalcFourVents}><RecalcVentsScene /></TimelineSequence>
    <TimelineSequence name="02-appeal-clock-timeline" {...SCENES.appealClockTimeline}><AppealClockScene /></TimelineSequence>
    <TimelineSequence name="03-mail-recovery-rules" {...SCENES.mailRecoveryRules}><MailRecoveryScene /></TimelineSequence>
  </AbsoluteFill>
);
