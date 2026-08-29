import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {Ban, CheckCircle2, Gavel, Landmark, Lock, Scale, Siren} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 160;

// Theme: Viaduct Merge — 双轨合流桥 · 附带民事诉讼
const C = {
  dusk: '#262B33',
  duskDeep: '#1D2229',
  deck: '#EDE8DB',
  deckAlt: '#E2DCC9',
  ink: '#282C30',
  inkSoft: '#646A70',
  railRed: '#B8432E',
  railRedInk: '#75281A',
  railRedSoft: '#F2DCD4',
  railGreen: '#2F7D68',
  railGreenInk: '#1D5344',
  railGreenSoft: '#DBECE5',
  signal: '#D9A13B',
  signalInk: '#83631B',
  signalSoft: '#F2E6C8',
  steel: '#7C8894',
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

const ViaductShell = ({
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
      backgroundColor: C.dusk,
      backgroundImage:
        'repeating-linear-gradient(90deg, rgba(124,136,148,0.06) 0 3px, transparent 3px 36px),' +
        'radial-gradient(circle at 20% 12%, rgba(217,161,59,0.12), transparent 28%),' +
        'radial-gradient(circle at 82% 90%, rgba(47,125,104,0.16), transparent 32%)',
      backgroundSize: 'auto, auto, auto',
      color: C.deck,
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
          backgroundColor: C.duskDeep,
          display: 'grid',
          placeItems: 'center',
          fontSize: 18,
          fontWeight: 950,
          color: C.signal,
          letterSpacing: 2,
          fontFamily: 'var(--inkloom-animation-mono)',
        }}
      >
        桥段 {code}
      </div>
      <h1 className="font-animation-title" style={{fontSize: 44, lineHeight: 1.08, margin: 0, fontWeight: 900, color: C.deck}}>
        {title}
      </h1>
      <div
        style={{
          marginLeft: 'auto',
          fontSize: 18,
          fontWeight: 900,
          letterSpacing: 2,
          color: 'rgba(237,232,219,0.66)',
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

const DeckCard = ({
  children,
  style,
}: {
  readonly children: React.ReactNode;
  readonly style?: React.CSSProperties;
}) => (
  <div
    data-audit-boundary="true"
    style={{
      backgroundColor: C.deck,
      border: `3px solid ${C.steel}`,
      borderRadius: 10,
      color: C.ink,
      boxShadow: '0 6px 16px rgba(6,9,12,0.5)',
      boxSizing: 'border-box',
      ...style,
    }}
  >
    {children}
  </div>
);

// ---------------------------------------------------------------
// Scene 01 — 当事人泊位：原告与被告
// ---------------------------------------------------------------

export const PartyScopeScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <ViaductShell accent={C.signal} code="09-1" subtitle="考点1 附民当事人 · 谁能坐原告席、谁站被告席" title="当事人泊位">
      <div
        data-layout="twin-berth-banks-with-mnemonic-strip"
        data-visual-anchor="role-pair"
        data-text-treatments="chip,label-block,external-negation"
        data-visual-grammar="victims-and-their-kin-claim-the-plaintiff-berth,procuratorate-claims-public-berth-for-state-property,responsible-defendants-including-heirs-fill-the-defense-berth,fugitives-and-third-parties-never-board"
        data-focal-channels="contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="口诀：共侵、被告人、监（护）继承，外加其他责任主体" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="plaintiff-berth" style={{position: 'absolute', inset: 0}}>
            <DeckCard style={{position: 'absolute', left: 0, top: 24, width: 880, height: 440, padding: '22px 26px', borderColor: C.railGreen, ...enter(frame, 0, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14}}>
                <Scale size={30} strokeWidth={2.5} style={{color: C.railGreenInk, flexShrink: 0}} />
                <span style={{fontSize: 30, fontWeight: 950, color: C.railGreenInk, lineHeight: 1.2}}>原告席</span>
                <Chip color={C.railGreen} label="因犯罪受物质损失而起诉" style={{marginLeft: 'auto'}} />
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 12, fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <div>受<ThinUnderline color={C.railGreenInk}>物质损失</ThinUnderline>的公民、企事业、机关团体</div>
                <div>被害人死亡 / 失能 → 由<SoftHighlight color={C.railGreenInk}>近亲属、监护人</SoftHighlight>提起</div>
                <div>国家、集体财产受损 → <Chip color={C.railGreen} label="检察院可提公益附民" /></div>
              </div>
              <div style={{marginTop: 14, border: `2px dashed ${C.signal}`, borderRadius: 8, backgroundColor: C.signalSoft, padding: '10px 14px'}}>
                <div style={{fontSize: 21, lineHeight: 1.5, color: C.signalInk, fontWeight: 700}}>
                  检院当原告特例：同一审判组织审理 · 判后不服走<ThinUnderline color={C.signalInk}>上诉</ThinUnderline>（非抗诉）· 赔偿款入政府专门账户
                </div>
              </div>
            </DeckCard>
          </div>

          <div data-final-knowledge="defendant-berth" style={{position: 'absolute', inset: 0}}>
            <DeckCard style={{position: 'absolute', left: 920, top: 24, width: 880, height: 440, padding: '22px 26px', borderColor: C.railRed, ...enter(frame, 70, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14}}>
                <Gavel size={30} strokeWidth={2.5} style={{color: C.railRedInk, flexShrink: 0}} />
                <span style={{fontSize: 30, fontWeight: 950, color: C.railRedInk, lineHeight: 1.2}}>被告席</span>
                <Chip color={C.railRed} label="对损失负有赔偿责任的人" style={{marginLeft: 'auto'}} />
              </div>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 12}}>
                {['刑事被告人', '未被追责的共同侵害人', '被告人的监护人', '死刑罪犯的遗产继承人', '同案审结前死亡者的遗产继承人', '其他责任主体'].map((item, index) => (
                  <Chip key={item} color={C.railRed} label={item} style={{opacity: interpolate(frame, [100 + index * 12, 116 + index * 12], [0, 1], clamp)}} />
                ))}
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 10, fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <div>亲友<ThinUnderline color={C.railRedInk}>自愿代赔</ThinUnderline> → 法院可准许</div>
                <ExternalNegation color={C.railRedInk}>同案犯在逃不得列为被告，到案后可单独提起</ExternalNegation>
                <ExternalNegation color={C.railRedInk}>附民没有第三人：无有独三、无无独三</ExternalNegation>
              </div>
            </DeckCard>
          </div>

          <div
            data-final-knowledge="berth-mnemonic-strip"
            style={{
              position: 'absolute',
              left: 0,
              top: 510,
              width: MAIN_WIDTH,
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              ...enter(frame, 180, 16),
            }}
          >
            <Landmark size={26} strokeWidth={2.5} style={{color: C.signal, flexShrink: 0}} />
            <span style={{fontSize: 23, lineHeight: 1.45, color: 'rgba(237,232,219,0.88)', fontWeight: 700}}>
              口诀：<SoftHighlight color={C.signalInk}>共侵、被告人、监（护）继承</SoftHighlight>，外加其他责任主体
            </span>
          </div>
        </div>
      </div>
    </ViaductShell>
  );
};

// ---------------------------------------------------------------
// Scene 02 — 物质损失闸门
// ---------------------------------------------------------------

export const MaterialLossScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <ViaductShell accent={C.railGreen} code="09-2" subtitle="考点2 附民的提起 · 只赔直接物质损失" title="物质损失闸门">
      <div
        data-layout="loss-gate-with-reject-lane-and-timing-bay"
        data-visual-anchor="flow-path"
        data-text-treatments="chip,thin-underline,external-negation"
        data-visual-grammar="direct-material-loss-passes-the-gate,mental-damage-and-illegal-disposal-reject-the-claim,duty-crimes-detour-to-state-compensation,filing-opens-the-timing-window"
        data-focal-channels="connector,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="只赔直接物质损失；精神损失一般不受理" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="direct-loss-gate" style={{position: 'absolute', inset: 0}}>
            <DeckCard style={{position: 'absolute', left: 0, top: 24, width: 860, height: 360, padding: '22px 26px', borderColor: C.railGreen, borderWidth: 4, ...enter(frame, 0, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14}}>
                <CheckCircle2 size={30} strokeWidth={2.6} style={{color: C.railGreenInk, flexShrink: 0}} />
                <span style={{fontSize: 30, fontWeight: 950, color: C.railGreenInk, lineHeight: 1.2}}>受理：直接物质损失</span>
              </div>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 14}}>
                {['医疗费', '护理费', '误工费', '丧葬费'].map((item, index) => (
                  <Chip key={item} color={C.railGreen} label={item} style={{opacity: interpolate(frame, [30 + index * 10, 44 + index * 10], [0, 1], clamp)}} />
                ))}
              </div>
              <div style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                例外开通：调解、和解达成的协议，赔偿范围<SoftHighlight color={C.railGreenInk}>不受限</SoftHighlight>
              </div>
            </DeckCard>
          </div>

          <div data-final-knowledge="reject-lane" style={{position: 'absolute', inset: 0}}>
            <DeckCard style={{position: 'absolute', left: 900, top: 24, width: 900, height: 360, padding: '22px 26px', borderColor: C.railRed, ...enter(frame, 70, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14}}>
                <Ban size={30} strokeWidth={2.6} style={{color: C.railRedInk, flexShrink: 0}} />
                <span style={{fontSize: 30, fontWeight: 950, color: C.railRedInk, lineHeight: 1.2}}>改道：不予受理</span>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 12, fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <div>精神损失 → 一般<ThinUnderline color={C.railRedInk}>不予受理</ThinUnderline></div>
                <div>非法占有、处置被害人财产 → <ThinUnderline color={C.railRedInk}>追缴、退赔</ThinUnderline>，不受理附民</div>
                <div>国家机关工作人员<ThinUnderline color={C.railRedInk}>职权犯罪</ThinUnderline> → 走<SoftHighlight color={C.signalInk}>国家赔偿</SoftHighlight></div>
                <div style={{fontSize: 21, color: C.inkSoft}}>间接损失不予支持；被抢财物未毁损的只能折价退赔，不得另提附民</div>
              </div>
            </DeckCard>
          </div>

          <div
            data-final-knowledge="filing-timing-bay"
            style={{
              position: 'absolute',
              left: 0,
              top: 424,
              width: MAIN_WIDTH,
              ...enter(frame, 160, 24),
            }}
          >
            <DeckCard style={{width: MAIN_WIDTH, padding: '20px 26px', borderColor: C.signal}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 24}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0}}>
                  <Siren size={28} strokeWidth={2.5} style={{color: C.signalInk, flexShrink: 0}} />
                  <span style={{fontSize: 25, fontWeight: 950, color: C.signalInk}}>提起时间</span>
                </div>
                <div style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                  <Chip color={C.signal} label="立案后" /> 及时提起；侦查、审查起诉阶段提出的，<ThinUnderline color={C.signalInk}>记录在案、随案移送</ThinUnderline>
                </div>
              </div>
            </DeckCard>
          </div>
        </div>
      </div>
    </ViaductShell>
  );
};

// ---------------------------------------------------------------
// Scene 03 — 保全分岔：诉中 vs 诉前
// ---------------------------------------------------------------

export const PreservationForkScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <ViaductShell accent={C.steel} code="09-3" subtitle="财产保全 · 查封扣押冻结与诉中诉前四不同" title="保全分岔">
      <div
        data-layout="common-rule-band-with-fork-comparison-columns"
        data-visual-anchor="comparison-axis"
        data-text-treatments="chip,thin-underline,label-block"
        data-visual-grammar="preservation-seals-property-related-to-the-case,court-may-act-and-parties-may-apply,in-trial-and-pre-trial-preservation-split-venue-and-guarantee,urgent-rulings-land-within-forty-eight-hours"
        data-focal-channels="contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="诉前应当担保、诉中可责令担保；紧急均 48 小时内裁定" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="preservation-common-rule" style={{position: 'absolute', inset: 0}}>
            <DeckCard style={{position: 'absolute', left: 0, top: 24, width: MAIN_WIDTH, height: 190, padding: '20px 26px', borderColor: C.signal, ...enter(frame, 0, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12}}>
                <Lock size={30} strokeWidth={2.5} style={{color: C.signalInk, flexShrink: 0}} />
                <span style={{fontSize: 29, fontWeight: 950, color: C.signalInk, lineHeight: 1.2}}>财产保全 · 共同规则</span>
                <Chip color={C.signal} label="适用《民事诉讼法》" style={{marginLeft: 'auto'}} />
              </div>
              <div style={{display: 'flex', gap: 26, fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <div>方式：<Chip color={C.signal} label="查封 · 扣押 · 冻结" /></div>
                <div>内容：限于<ThinUnderline color={C.signalInk}>与案件有关的财产</ThinUnderline></div>
                <div>启动：<ThinUnderline color={C.signalInk}>法院</ThinUnderline>依职权必要时；<ThinUnderline color={C.signalInk}>原告、检察院</ThinUnderline>依申请</div>
              </div>
            </DeckCard>
          </div>

          <div data-final-knowledge="in-trial-preservation-lane" style={{position: 'absolute', inset: 0}}>
            <DeckCard style={{position: 'absolute', left: 0, top: 246, width: 880, height: 300, padding: '20px 26px', borderColor: C.railGreen, ...enter(frame, 80, 26)}}>
              <div style={{fontSize: 29, fontWeight: 950, color: C.railGreenInk, marginBottom: 12}}>诉中保全</div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 10, fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <div>阶段：提起附民<ThinUnderline color={C.railGreenInk}>之后</ThinUnderline></div>
                <div>管辖：审判刑案的<SoftHighlight color={C.railGreenInk}>法院</SoftHighlight></div>
                <div>担保：可责令提供担保</div>
              </div>
            </DeckCard>
          </div>

          <div data-final-knowledge="pre-trial-preservation-lane" style={{position: 'absolute', inset: 0}}>
            <DeckCard style={{position: 'absolute', left: 920, top: 246, width: 880, height: 300, padding: '20px 26px', borderColor: C.railRed, ...enter(frame, 130, 26)}}>
              <div style={{fontSize: 29, fontWeight: 950, color: C.railRedInk, marginBottom: 12}}>诉前保全</div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 10, fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <div>阶段：提起附民<ThinUnderline color={C.railRedInk}>之前</ThinUnderline></div>
                <div>管辖：<SoftHighlight color={C.railRedInk}>财产所在地、居所地</SoftHighlight>或有管辖权的法院</div>
                <div>担保：<ThinUnderline color={C.railRedInk}>应当</ThinUnderline>提供担保</div>
              </div>
            </DeckCard>
          </div>

          <div
            data-final-knowledge="urgent-ruling-note"
            style={{
              position: 'absolute',
              left: 0,
              top: 586,
              width: MAIN_WIDTH,
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              ...enter(frame, 200, 16),
            }}
          >
            <Siren size={26} strokeWidth={2.5} style={{color: C.signal, flexShrink: 0}} />
            <span style={{fontSize: 23, lineHeight: 1.45, color: 'rgba(237,232,219,0.88)', fontWeight: 700}}>
              情况紧急：<SoftHighlight color={C.signalInk}>48 小时内裁定</SoftHighlight>，裁定采取的立即执行
            </span>
          </div>
        </div>
      </div>
    </ViaductShell>
  );
};

// ---------------------------------------------------------------
// MAIN COMPOSITION
// ---------------------------------------------------------------
export const AttachedSuitViaduct: React.FC = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: C.dusk, width: 1920, height: 1080}}
  >
    <TimelineSequence name="01" start={SCENES['party-scope-berths'].start} duration={SCENES['party-scope-berths'].duration}>
      <PartyScopeScene />
    </TimelineSequence>
    <TimelineSequence name="02" start={SCENES['material-loss-gate'].start} duration={SCENES['material-loss-gate'].duration}>
      <MaterialLossScene />
    </TimelineSequence>
    <TimelineSequence name="03" start={SCENES['preservation-fork'].start} duration={SCENES['preservation-fork'].duration}>
      <PreservationForkScene />
    </TimelineSequence>
  </AbsoluteFill>
);
