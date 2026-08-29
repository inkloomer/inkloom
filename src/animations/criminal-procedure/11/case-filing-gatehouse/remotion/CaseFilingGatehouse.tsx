import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {Ban, CheckCircle2, DoorOpen, Eye, Gavel, Lamp, MailQuestion, Megaphone, ScrollText, ShieldCheck} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 160;

// Theme: Gatehouse Registry — 闸门登记所 · 立案
const C = {
  stone: '#2E2A24',
  stoneDeep: '#232019',
  ledger: '#EFE7D2',
  ledgerAlt: '#E5DBC2',
  ink: '#2C2820',
  inkSoft: '#6B6252',
  iron: '#5E6469',
  ironInk: '#3C4044',
  ironSoft: '#DEE1E2',
  gate: '#4E7A5E',
  gateInk: '#31523F',
  gateSoft: '#DDEAE0',
  lamp: '#D9A13B',
  lampInk: '#83631B',
  lampSoft: '#F2E6C8',
  wax: '#B3402C',
  waxInk: '#732718',
  waxSoft: '#F1DCD4',
};

const MAIN_WIDTH = 1800;

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};
const ease = Easing.bezier(0.16, 1, 0.3, 1);

const enter = (frame: number, delay: number, dy = 26, dx = 0) => ({
  opacity: interpolate(frame, [delay, delay + 18], [0, 1], {...clamp, easing: ease}),
  translate: `${interpolate(frame, [delay, delay + 26], [dx, 0], {...clamp, easing: ease})}px ${interpolate(
    frame,
    [delay, delay + 26],
    [dy, 0],
    {...clamp, easing: ease},
  )}px`,
});

// ---------------------------------------------------------------
// Shared surface primitives
// ---------------------------------------------------------------

const GatehouseShell = ({
  accent,
  children,
  code,
  subtitle,
  title,
}: {
  readonly accent: string;
  readonly children: React.ReactNode;
  readonly code: string;
  readonly subtitle: string;
  readonly title: string;
}) => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    className="font-animation-body"
    style={{
      backgroundColor: C.stone,
      backgroundImage:
        'repeating-linear-gradient(0deg, rgba(239,231,210,0.035) 0 1px, transparent 1px 12px),' +
        'radial-gradient(circle at 14% 14%, rgba(217,161,59,0.14), transparent 30%),' +
        'radial-gradient(circle at 86% 88%, rgba(78,122,94,0.16), transparent 32%)',
      backgroundSize: 'auto, auto, auto',
      color: C.ledger,
      overflow: 'hidden',
    }}
  >
    <header
      style={{
        position: 'absolute',
        left: 60,
        right: 60,
        top: 34,
        height: 104,
        display: 'flex',
        alignItems: 'center',
        gap: 22,
        borderBottom: `4px solid ${accent}`,
      }}
    >
      <div
        style={{
          width: 172,
          height: 74,
          border: `4px solid ${accent}`,
          backgroundColor: C.stoneDeep,
          display: 'grid',
          placeItems: 'center',
          fontSize: 18,
          fontWeight: 950,
          color: C.lamp,
          letterSpacing: 2,
          fontFamily: 'var(--inkloom-animation-mono)',
        }}
      >
        所号 {code}
      </div>
      <h1 className="font-animation-title" style={{fontSize: 44, lineHeight: 1.08, margin: 0, fontWeight: 900, color: C.ledger}}>
        {title}
      </h1>
      <div
        style={{
          marginLeft: 'auto',
          fontSize: 18,
          fontWeight: 900,
          letterSpacing: 2,
          color: 'rgba(239,231,210,0.66)',
          fontFamily: 'var(--inkloom-animation-label)',
          textAlign: 'right',
          maxWidth: 560,
          lineHeight: 1.35,
        }}
      >
        {subtitle}
      </div>
    </header>
    <main style={{position: 'absolute', left: 60, right: 60, top: 158, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>
      {children}
    </main>
  </AbsoluteFill>
);

const Chip = ({
  color,
  label,
  solid = false,
  onDark = false,
  style,
}: {
  readonly color: string;
  readonly label: string;
  readonly solid?: boolean;
  readonly onDark?: boolean;
  readonly style?: React.CSSProperties;
}) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '3px 12px',
      backgroundColor: solid ? color : onDark ? 'rgba(0,0,0,0.26)' : `${color}24`,
      border: `2px solid ${color}`,
      borderRadius: 7,
      color: solid ? '#FFFFFF' : color,
      fontSize: 22,
      fontWeight: 900,
      fontFamily: 'var(--inkloom-animation-label)',
      letterSpacing: 1,
      whiteSpace: 'nowrap',
      lineHeight: 1.3,
      ...style,
    }}
  >
    {label}
  </span>
);

const SoftHighlight = ({
  children,
  color,
  style,
}: {
  readonly children: React.ReactNode;
  readonly color: string;
  readonly style?: React.CSSProperties;
}) => (
  <span
    style={{
      backgroundColor: `${color}30`,
      borderRadius: 6,
      padding: '2px 8px',
      boxShadow: `inset 0 -3px 0 ${color}66`,
      ...style,
    }}
  >
    {children}
  </span>
);

const ThinUnderline = ({children, color}: {readonly children: React.ReactNode; readonly color: string}) => (
  <span style={{borderBottom: `2px solid ${color}`, paddingBottom: 2}}>{children}</span>
);

const ExternalNegation = ({
  children,
  color,
  iconSize = 22,
}: {
  readonly children: React.ReactNode;
  readonly color: string;
  readonly iconSize?: number;
}) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 9,
      color,
      borderLeft: `3px solid ${color}`,
      paddingLeft: 11,
    }}
  >
    <Ban size={iconSize} strokeWidth={2.6} style={{flexShrink: 0, marginTop: 3}} />
    <span>{children}</span>
  </span>
);

const LedgerCard = ({
  children,
  style,
}: {
  readonly children: React.ReactNode;
  readonly style?: React.CSSProperties;
}) => (
  <div
    data-audit-boundary="true"
    style={{
      backgroundColor: C.ledger,
      border: `3px solid ${C.iron}`,
      borderRadius: 10,
      color: C.ink,
      boxShadow: '0 6px 16px rgba(8,7,4,0.5), inset 0 0 0 2px rgba(94,100,105,0.22)',
      boxSizing: 'border-box',
      ...style,
    }}
  >
    {children}
  </div>
);

// ---------------------------------------------------------------
// Scene 01 — 三扇登记窗：报案、举报、控告
// ---------------------------------------------------------------

export const ReportWindowsScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <GatehouseShell accent={C.lamp} code="11-1" subtitle="考点1 材料来源 · 报案、举报与控告三窗" title="三扇登记窗">
      <div
        data-layout="three-window-counter-with-victim-note"
        data-visual-anchor="comparison-axis"
        data-text-treatments="chip,thin-underline,soft-highlight"
        data-visual-grammar="report-window-accepts-everyone-with-facts,tipoff-window-needs-person-and-facts-excluding-victim,complaint-window-reserved-for-the-victim,oral-and-written-both-accepted"
        data-focal-channels="contrast,enclosure,spatial,locator"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="报案只看事实；举报要人＋事实但排除被害人；控告专属被害人" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="report-window" style={{position: 'absolute', inset: 0}}>
            <LedgerCard style={{position: 'absolute', left: 0, top: 80, width: 560, height: 340, padding: '22px 26px', borderColor: C.gate, ...enter(frame, 0, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14}}>
                <Megaphone size={30} strokeWidth={2.5} style={{color: C.gateInk, flexShrink: 0}} />
                <span style={{fontSize: 31, fontWeight: 950, color: C.gateInk, lineHeight: 1.2}}>报案</span>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 10, fontSize: 23, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <div><Chip color={C.gate} label="一切单位和个人" /></div>
                <div>只需<ThinUnderline color={C.gateInk}>有犯罪事实发生</ThinUnderline>，不必指出是谁干的</div>
              </div>
            </LedgerCard>
          </div>

          <div data-final-knowledge="tipoff-window" style={{position: 'absolute', inset: 0}}>
            <LedgerCard style={{position: 'absolute', left: 620, top: 80, width: 560, height: 340, padding: '22px 26px', borderColor: C.iron, ...enter(frame, 60, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14}}>
                <Eye size={30} strokeWidth={2.5} style={{color: C.ironInk, flexShrink: 0}} />
                <span style={{fontSize: 31, fontWeight: 950, color: C.ironInk, lineHeight: 1.2}}>举报</span>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 10, fontSize: 23, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <div><Chip color={C.iron} label="被害人以外的人" /></div>
                <div>要<ThinUnderline color={C.ironInk}>人＋事实</ThinUnderline>：指出犯罪者并说明事实</div>
              </div>
            </LedgerCard>
          </div>

          <div data-final-knowledge="complaint-window" style={{position: 'absolute', inset: 0}}>
            <LedgerCard style={{position: 'absolute', left: 1240, top: 80, width: 560, height: 340, padding: '22px 26px', borderColor: C.wax, ...enter(frame, 120, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14}}>
                <MailQuestion size={30} strokeWidth={2.5} style={{color: C.waxInk, flexShrink: 0}} />
                <span style={{fontSize: 31, fontWeight: 950, color: C.waxInk, lineHeight: 1.2}}>控告</span>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 10, fontSize: 23, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <div><Chip color={C.wax} label="只能是被害人" /></div>
                <div>人＋事实，且被害人<SoftHighlight color={C.waxInk}>主动追诉</SoftHighlight></div>
              </div>
            </LedgerCard>
          </div>

          <div
            data-final-knowledge="victim-note"
            style={{
              position: 'absolute',
              left: 0,
              top: 466,
              width: MAIN_WIDTH,
              ...enter(frame, 190, 22),
            }}
          >
            <LedgerCard style={{padding: '16px 24px', borderColor: C.lamp}}>
              <div style={{fontSize: 22, lineHeight: 1.55, color: C.ink, fontWeight: 700}}>
                被害人既可报案也可控告——<SoftHighlight color={C.lampInk}>只大概陈述案情是报案，能详尽说明主要事实是控告</SoftHighlight>；三种来源口头、书面均可
              </div>
            </LedgerCard>
          </div>
          <Lamp size={24} strokeWidth={2.4} style={{position: 'absolute', left: 880, top: 40, color: 'rgba(239,231,210,0.4)'}} />
        </div>
      </div>
    </GatehouseShell>
  );
};

// ---------------------------------------------------------------
// Scene 02 — 立案三条件与初查边界
// ---------------------------------------------------------------

export const FilingGateScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <GatehouseShell accent={C.gate} code="11-2" subtitle="考点1·2 立案条件与初查 · 任意性措施才可用" title="立案闸门">
      <div
        data-layout="condition-gate-with-measure-split-banks"
        data-visual-anchor="document-fork"
        data-text-treatments="chip,external-negation,thin-underline"
        data-visual-grammar="three-conditions-open-the-filing-gate,filing-does-not-need-the-suspect-in-custody,pre-screening-allows-voluntary-measures-only,coercive-measures-wait-until-after-filing"
        data-focal-channels="connector,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="初查只能任意性措施；强制措施与查扣冻、技侦都要等立案" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="three-conditions-gate" style={{position: 'absolute', inset: 0}}>
            <LedgerCard style={{position: 'absolute', left: 0, top: 24, width: 760, height: 430, padding: '22px 26px', borderColor: C.gate, borderWidth: 4, ...enter(frame, 0, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16}}>
                <DoorOpen size={32} strokeWidth={2.5} style={{color: C.gateInk, flexShrink: 0}} />
                <span style={{fontSize: 30, fontWeight: 950, color: C.gateInk, lineHeight: 1.2}}>开闸三条件</span>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 14, fontSize: 24, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <div style={{display: 'flex', gap: 12, alignItems: 'center'}}><Chip color={C.gate} label="1" solid />有<ThinUnderline color={C.gateInk}>犯罪事实</ThinUnderline></div>
                <div style={{display: 'flex', gap: 12, alignItems: 'center'}}><Chip color={C.gate} label="2" solid />需要追究<ThinUnderline color={C.gateInk}>刑事责任</ThinUnderline></div>
                <div style={{display: 'flex', gap: 12, alignItems: 'center'}}><Chip color={C.gate} label="3" solid />符合<ThinUnderline color={C.gateInk}>管辖范围</ThinUnderline></div>
              </div>
              <div style={{marginTop: 18, border: `2px dashed ${C.lamp}`, borderRadius: 8, backgroundColor: C.lampSoft, padding: '12px 16px'}}>
                <div style={{fontSize: 21, lineHeight: 1.5, color: C.lampInk, fontWeight: 700}}>
                  立案时不要求嫌疑人到案，也不要求查清其身份、动机或责任能力
                </div>
              </div>
            </LedgerCard>
          </div>

          <div data-final-knowledge="voluntary-measures-bank" style={{position: 'absolute', inset: 0}}>
            <LedgerCard style={{position: 'absolute', left: 800, top: 24, width: 1000, height: 200, padding: '18px 26px', borderColor: C.gate, ...enter(frame, 80, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10}}>
                <CheckCircle2 size={28} strokeWidth={2.6} style={{color: C.gateInk, flexShrink: 0}} />
                <span style={{fontSize: 26, fontWeight: 950, color: C.gateInk}}>初查可用 · 任意性措施</span>
                <Chip color={C.gate} label="不限制人身、财产权利" style={{marginLeft: 'auto'}} />
              </div>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: 10}}>
                {['勘验', '检查', '询问', '鉴定', '查询'].map((item, index) => (
                  <Chip key={item} color={C.gate} label={item} style={{opacity: interpolate(frame, [110 + index * 10, 124 + index * 10], [0, 1], clamp)}} />
                ))}
              </div>
            </LedgerCard>
          </div>

          <div data-final-knowledge="coercive-measures-bank" style={{position: 'absolute', inset: 0}}>
            <LedgerCard style={{position: 'absolute', left: 800, top: 254, width: 1000, height: 200, padding: '18px 26px', borderColor: C.wax, ...enter(frame, 140, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10}}>
                <Ban size={28} strokeWidth={2.6} style={{color: C.waxInk, flexShrink: 0}} />
                <span style={{fontSize: 26, fontWeight: 950, color: C.waxInk}}>初查禁止 · 强制性措施</span>
                <Chip color={C.wax} label="限制人身、财产权利" style={{marginLeft: 'auto'}} />
              </div>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: 10}}>
                {['强制措施', '查封', '扣押', '冻结', '技术侦查', '搜查', '讯问', '监听'].map((item, index) => (
                  <Chip key={item} color={C.wax} label={item} style={{opacity: interpolate(frame, [170 + index * 8, 182 + index * 8], [0, 1], clamp)}} />
                ))}
              </div>
            </LedgerCard>
          </div>
        </div>
      </div>
    </GatehouseShell>
  );
};

// ---------------------------------------------------------------
// Scene 03 — 不立案救济岔路
// ---------------------------------------------------------------

export const SupervisionForkScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <GatehouseShell accent={C.wax} code="11-3" subtitle="考点3 立案监督 · 控告人的三条救济路" title="不立案救济岔路">
      <div
        data-layout="triple-fork-roads-with-supervision-note"
        data-visual-anchor="flow-target"
        data-text-treatments="chip,thin-underline,label-block"
        data-visual-grammar="police-review-then-recheck-chain,procuratorate-supervises-both-directions,court-admits-private-prosecution-as-final-fork,reporters-and-tipsters-never-review"
        data-focal-channels="connector,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="复议复核、立案监督、自诉无顺序限制，可同步推进" style={{position: 'absolute', inset: 0}}>
          <div
            data-stateful-source="complaint-file"
            style={{
              position: 'absolute',
              left: 30,
              top: 8,
              opacity: interpolate(frame, [0, 14], [0, 1], clamp),
            }}
          >
            <Chip color={C.wax} label="控告人不服不立案" onDark />
          </div>

          <div style={{position: 'absolute', left: 0, top: 60, width: MAIN_WIDTH, display: 'flex', gap: 24}}>
            <div data-final-knowledge="police-review-road" style={{flex: 1}}>
              <LedgerCard style={{height: 300, padding: '20px 24px', borderColor: C.gate, ...enter(frame, 20, 24)}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12}}>
                  <ShieldCheck size={28} strokeWidth={2.5} style={{color: C.gateInk, flexShrink: 0}} />
                  <span style={{fontSize: 27, fontWeight: 950, color: C.gateInk}}>找公安</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: 10, fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                  <div>公安应将<ThinUnderline color={C.gateInk}>不立案原因</ThinUnderline>通知控告人</div>
                  <div>不服 → <Chip color={C.gate} label="复议" /> → 再不服 → <Chip color={C.gate} label="复核" />（上一级公安）</div>
                </div>
              </LedgerCard>
            </div>

            <div data-final-knowledge="procuratorate-road" style={{flex: 1}}>
              <LedgerCard style={{height: 300, padding: '20px 24px', borderColor: C.lamp, ...enter(frame, 60, 24)}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12}}>
                  <Eye size={28} strokeWidth={2.5} style={{color: C.lampInk, flexShrink: 0}} />
                  <span style={{fontSize: 27, fontWeight: 950, color: C.lampInk}}>找检察院</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: 10, fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                  <div>申请<ThinUnderline color={C.lampInk}>立案监督</ThinUnderline>（申诉）</div>
                  <div>双向监督：<SoftHighlight color={C.lampInk}>应立不立</SoftHighlight>与<SoftHighlight color={C.waxInk}>不应立而立</SoftHighlight>都可审查</div>
                  <div style={{fontSize: 21, color: C.inkSoft}}>依申请：被害人、法代、近亲属、行政执法机关；依职权：检院自行发现</div>
                </div>
              </LedgerCard>
            </div>

            <div data-final-knowledge="private-prosecution-road" style={{flex: 1}}>
              <LedgerCard style={{height: 300, padding: '20px 24px', borderColor: C.wax, ...enter(frame, 100, 24)}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12}}>
                  <Gavel size={28} strokeWidth={2.5} style={{color: C.waxInk, flexShrink: 0}} />
                  <span style={{fontSize: 27, fontWeight: 950, color: C.waxInk}}>找法院</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: 10, fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                  <div>提起<ThinUnderline color={C.waxInk}>自诉</ThinUnderline></div>
                  <div style={{fontSize: 21, color: C.inkSoft}}>三条路无顺序限制，可以随意选择、同步推进</div>
                </div>
              </LedgerCard>
            </div>
          </div>

          <div
            data-final-knowledge="standing-note"
            style={{
              position: 'absolute',
              left: 0,
              top: 404,
              width: MAIN_WIDTH,
              ...enter(frame, 170, 22),
            }}
          >
            <LedgerCard style={{padding: '16px 24px', borderColor: C.iron}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 18}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0}}>
                  <ScrollText size={26} strokeWidth={2.5} style={{color: C.inkSoft, flexShrink: 0}} />
                  <span style={{fontSize: 24, fontWeight: 950, color: C.ink}}>资格分界</span>
                </div>
                <div style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                  <Chip color={C.gate} label="控告人（被害人）" /> 可复议、复核、申诉、自诉；
                  <ExternalNegation color={C.waxInk} iconSize={20}>报案人、举报人无权复议、复核</ExternalNegation>
                </div>
              </div>
            </LedgerCard>
          </div>

          <div
            data-stateful-terminal="complaint-file"
            style={{position: 'absolute', left: 30, top: 512, opacity: interpolate(frame, [190, 220], [0, 1], clamp)}}
          >
            <Chip color={C.gate} label="控告已进入救济通道" solid />
          </div>
        </div>
      </div>
    </GatehouseShell>
  );
};

// ---------------------------------------------------------------
// MAIN COMPOSITION
// ---------------------------------------------------------------
export const CaseFilingGatehouse: React.FC = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: C.stone, width: 1920, height: 1080}}
  >
    <TimelineSequence name="01" start={SCENES['report-windows-compare'].start} duration={SCENES['report-windows-compare'].duration}>
      <ReportWindowsScene />
    </TimelineSequence>
    <TimelineSequence name="02" start={SCENES['filing-gate-conditions'].start} duration={SCENES['filing-gate-conditions'].duration}>
      <FilingGateScene />
    </TimelineSequence>
    <TimelineSequence name="03" start={SCENES['supervision-fork-roads'].start} duration={SCENES['supervision-fork-roads'].duration}>
      <SupervisionForkScene />
    </TimelineSequence>
  </AbsoluteFill>
);
