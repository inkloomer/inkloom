import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {ArrowRight, Ban, CheckCircle2, Gavel, Megaphone, RefreshCw, ScrollText, Stamp, UserCheck} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 160;

// Theme: Procession Street — 流水街 · 法庭审判五阶段
const C = {
  dusk: '#242833',
  duskDeep: '#1B1F28',
  pavement: '#EFEADF',
  pavementAlt: '#E4DECB',
  ink: '#282833',
  inkSoft: '#686875',
  lantern: '#DFA14A',
  lanternInk: '#85631D',
  lanternSoft: '#F2E6C8',
  rose: '#B25549',
  roseInk: '#753427',
  roseSoft: '#F2DBD3',
  awning: '#4E7D68',
  awningInk: '#315243',
  awningSoft: '#DEEBE3',
  indigo: '#5B6C9E',
  indigoInk: '#39456A',
  indigoSoft: '#DFE3EF',
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

const StreetShell = ({
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
        'repeating-linear-gradient(0deg, rgba(239,234,223,0.03) 0 1px, transparent 1px 14px),' +
        'radial-gradient(circle at 18% 12%, rgba(223,161,74,0.14), transparent 30%),' +
        'radial-gradient(circle at 84% 88%, rgba(91,108,158,0.18), transparent 34%)',
      backgroundSize: 'auto, auto, auto',
      color: C.pavement,
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
          color: C.lantern,
          letterSpacing: 2,
          fontFamily: 'var(--inkloom-animation-mono)',
        }}
      >
        街牌 {code}
      </div>
      <h1 className="font-animation-title" style={{fontSize: 44, lineHeight: 1.08, margin: 0, fontWeight: 900, color: C.pavement}}>
        {title}
      </h1>
      <div
        style={{
          marginLeft: 'auto',
          fontSize: 18,
          fontWeight: 900,
          letterSpacing: 2,
          color: 'rgba(239,234,223,0.66)',
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

const ShopCard = ({
  children,
  style,
}: {
  readonly children: React.ReactNode;
  readonly style?: React.CSSProperties;
}) => (
  <div
    data-audit-boundary="true"
    style={{
      backgroundColor: C.pavement,
      border: `3px solid ${C.lantern}`,
      borderRadius: 10,
      color: C.ink,
      boxShadow: '0 6px 16px rgba(8,9,12,0.5), inset 0 0 0 2px rgba(223,161,74,0.2)',
      boxSizing: 'border-box',
      ...style,
    }}
  >
    {children}
  </div>
);

// ---------------------------------------------------------------
// Scene 01 — 五阶段流水街
// ---------------------------------------------------------------

export const FiveStageStreetScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <StreetShell accent={C.lantern} code="15-1" subtitle="考点3 法庭审判 · 五个阶段一条街" title="五阶段流水街">
      <div
        data-layout="five-station-street-with-recall-lanes"
        data-visual-anchor="timeline-gate"
        data-text-treatments="chip,thin-underline,soft-highlight"
        data-visual-grammar="street-walks-opening-investigation-debate-statement-verdict,debate-can-recall-into-investigation,new-facts-in-statement-reopen-investigation,new-defense-in-statement-reopen-debate"
        data-focal-channels="connector,contrast,enclosure,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="五阶段：开庭、调查、辩论、最后陈述、评议宣判；程序可回调" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="five-stations" style={{position: 'absolute', inset: 0}}>
            <div style={{position: 'absolute', left: 0, top: 40, width: MAIN_WIDTH, display: 'flex', alignItems: 'center', gap: 12}}>
              {[
                {label: '开庭', note: '副本 10 日前 · 通知 3 日前', accent: C.lanternInk, delay: 0},
                {label: '法庭调查', note: '举证质证', accent: C.awningInk, delay: 34},
                {label: '法庭辩论', note: '先控后辩', accent: C.roseInk, delay: 68},
                {label: '最后陈述', note: '被告人专属', accent: C.indigoInk, delay: 102},
                {label: '评议和宣判', note: '休庭评议 · 公开宣判', accent: C.lanternInk, delay: 136},
              ].map((station, index) => (
                <React.Fragment key={station.label}>
                  <ShopCard style={{flex: 1, height: 150, padding: '16px 20px', borderColor: station.accent, ...enter(frame, station.delay, 24)}}>
                    <div style={{fontSize: 20, fontWeight: 950, color: C.inkSoft, fontFamily: 'var(--inkloom-animation-mono)', letterSpacing: 2}}>
                      {`0${index + 1}`}
                    </div>
                    <div style={{fontSize: 28, fontWeight: 950, color: station.accent, lineHeight: 1.2, marginTop: 4}}>{station.label}</div>
                    <div style={{fontSize: 19, color: C.inkSoft, marginTop: 6, fontWeight: 700}}>{station.note}</div>
                  </ShopCard>
                  {index < 4 && (
                    <ArrowRight size={28} strokeWidth={2.8} style={{color: C.lantern, flexShrink: 0, opacity: interpolate(frame, [station.delay + 22, station.delay + 40], [0, 1], clamp)}} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div data-final-knowledge="recall-lanes" style={{position: 'absolute', inset: 0}}>
            <div style={{position: 'absolute', left: 0, top: 240, width: MAIN_WIDTH, display: 'flex', flexDirection: 'column', gap: 16}}>
              <ShopCard style={{padding: '14px 24px', borderColor: C.awning, ...enter(frame, 190, 20)}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                  <RefreshCw size={24} strokeWidth={2.5} style={{color: C.awningInk, flexShrink: 0}} />
                  <span style={{fontSize: 22, lineHeight: 1.45, color: C.ink, fontWeight: 700}}>
                    辩论中发现新事实 → <ThinUnderline color={C.awningInk}>可以回调法庭调查</ThinUnderline>
                  </span>
                </div>
              </ShopCard>
              <div style={{display: 'flex', gap: 16}}>
                <ShopCard style={{flex: 1, padding: '14px 24px', borderColor: C.indigo, ...enter(frame, 220, 20)}}>
                  <div style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                    最后陈述提出<SoftHighlight color={C.indigoInk}>新事实、新证据</SoftHighlight> → 应当<ThinUnderline color={C.indigoInk}>恢复法庭调查</ThinUnderline>
                  </div>
                </ShopCard>
                <ShopCard style={{flex: 1, padding: '14px 24px', borderColor: C.rose, ...enter(frame, 245, 20)}}>
                  <div style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                    提出<SoftHighlight color={C.roseInk}>新辩解理由</SoftHighlight> → 应当<ThinUnderline color={C.roseInk}>恢复法庭辩论</ThinUnderline>
                  </div>
                </ShopCard>
              </div>
            </div>
          </div>

          <div
            data-final-knowledge="statement-limit-note"
            style={{
              position: 'absolute',
              left: 0,
              top: 496,
              width: MAIN_WIDTH,
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              ...enter(frame, 280, 16),
            }}
          >
            <Megaphone size={24} strokeWidth={2.5} style={{color: C.lantern, flexShrink: 0}} />
            <span style={{fontSize: 22, lineHeight: 1.45, color: 'rgba(239,234,223,0.88)', fontWeight: 700}}>
              最后陈述中重复意见可制止；蔑视法庭、涉密或与本案无关的应当制止
            </span>
          </div>
        </div>
      </div>
    </StreetShell>
  );
};

// ---------------------------------------------------------------
// Scene 02 — 开庭与调查规则
// ---------------------------------------------------------------

export const OpeningRulesScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <StreetShell accent={C.awning} code="15-2" subtitle="开庭时点、旁听禁令与调查发问规则" title="开庭与调查铺规">
      <div
        data-layout="opening-lane-with-investigation-banks"
        data-visual-anchor="document-fork"
        data-text-treatments="chip,thin-underline,external-negation"
        data-visual-grammar="opening-deadlines-run-ten-and-three-days,witnesses-never-sit-in-gallery,questioning-runs-prosecution-first-evidence-oral-first,forced-attendance-spares-spouse-parents-children"
        data-focal-channels="connector,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="先控后辩、先言后物；强制出庭不及配偶父母子女" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="opening-deadline-lane" style={{position: 'absolute', inset: 0}}>
            <ShopCard style={{position: 'absolute', left: 0, top: 24, width: 860, height: 240, padding: '18px 26px', borderColor: C.lantern, ...enter(frame, 0, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10}}>
                <ScrollText size={28} strokeWidth={2.5} style={{color: C.lanternInk, flexShrink: 0}} />
                <span style={{fontSize: 26, fontWeight: 950, color: C.lanternInk}}>开庭铺规</span>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 8, fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <div>起诉书副本：开庭 <Chip color={C.lantern} label="10 日前" /> 送达被告人、辩护人</div>
                <div>开庭时间地点：<Chip color={C.lantern} label="3 日前" /> 通知检察院、送达传票通知书</div>
                <div>证人、鉴定人、有专门知识的人、侦查人员<ThinUnderline color={C.roseInk}>不得旁听</ThinUnderline></div>
              </div>
            </ShopCard>
          </div>

          <div data-final-knowledge="forced-attendance-bank" style={{position: 'absolute', inset: 0}}>
            <ShopCard style={{position: 'absolute', left: 900, top: 24, width: 900, height: 240, padding: '18px 26px', borderColor: C.rose, ...enter(frame, 70, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10}}>
                <UserCheck size={28} strokeWidth={2.5} style={{color: C.roseInk, flexShrink: 0}} />
                <span style={{fontSize: 26, fontWeight: 950, color: C.roseInk}}>证人强制到庭 · 例外与后果</span>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 8, fontSize: 21, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <div>无正当理由不出庭可强制到庭，<ThinUnderline color={C.roseInk}>被告人配偶、父母、子女除外</ThinUnderline></div>
                <div>拒绝出庭或拒证 → 训诫，情节严重处 <Chip color={C.rose} label="10 日以下拘留" /></div>
                <div>鉴定人拒不出庭 → 鉴定意见<SoftHighlight color={C.roseInk}>不得作为定案根据</SoftHighlight></div>
              </div>
            </ShopCard>
          </div>

          <div
            data-final-knowledge="question-order-note"
            style={{
              position: 'absolute',
              left: 0,
              top: 300,
              width: MAIN_WIDTH,
              ...enter(frame, 150, 24),
            }}
          >
            <ShopCard style={{width: MAIN_WIDTH, padding: '18px 26px', borderColor: C.awning}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 20}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0}}>
                  <Gavel size={28} strokeWidth={2.5} style={{color: C.awningInk, flexShrink: 0}} />
                  <span style={{fontSize: 25, fontWeight: 950, color: C.awningInk}}>发问与举证顺序</span>
                </div>
                <div style={{fontSize: 22, lineHeight: 1.55, color: C.ink, fontWeight: 700}}>
                  发问<SoftHighlight color={C.awningInk}>先控后辩</SoftHighlight>（大控方含被害人与附民原告一方）；举证<SoftHighlight color={C.awningInk}>先言后物</SoftHighlight>，具体为控言 → 控物 → 辩言 → 辩物；讯问同案被告人应当分别进行
                </div>
              </div>
            </ShopCard>
          </div>

          <div
            data-final-knowledge="witness-order-note"
            style={{
              position: 'absolute',
              left: 0,
              top: 442,
              width: MAIN_WIDTH,
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              ...enter(frame, 200, 16),
            }}
          >
            <CheckCircle2 size={24} strokeWidth={2.5} style={{color: C.lantern, flexShrink: 0}} />
            <span style={{fontSize: 22, lineHeight: 1.45, color: 'rgba(239,234,223,0.88)', fontWeight: 700}}>
              证人出庭：先陈述证言 → 提请方发问 → 对方发问；发问不得诱导、威胁、损害人格尊严
            </span>
          </div>
        </div>
      </div>
    </StreetShell>
  );
};

// ---------------------------------------------------------------
// Scene 03 — 评议宣判广场
// ---------------------------------------------------------------

export const VerdictSquareScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <StreetShell accent={C.rose} code="15-3" subtitle="评议宣判 · 换人口诀、判决裁定与公开宣判" title="评议宣判广场">
      <div
        data-layout="verdict-square-with-mnemonic-banner"
        data-visual-anchor="comparison-axis"
        data-text-treatments="chip,thin-underline,soft-highlight"
        data-visual-grammar="pre-deliberation-absence-swaps-and-retries,post-deliberation-absence-keeps-names,verdicts-split-guilty-innocent-no-liability-and-termination,all-judgments-announced-publicly"
        data-focal-channels="contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="评议前来不了，人要换重审判；评议后来不了，人不换名写全" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="swap-mnemonic" style={{position: 'absolute', inset: 0}}>
            <ShopCard style={{position: 'absolute', left: 0, top: 24, width: MAIN_WIDTH, height: 128, padding: '16px 26px', borderColor: C.rose, borderWidth: 4}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 24}}>
                <div style={{fontSize: 27, fontWeight: 950, color: C.roseInk, whiteSpace: 'nowrap'}}>宣判前换人口诀</div>
                <div style={{fontSize: 23, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                  <SoftHighlight color={C.roseInk}>评议前，来不了，人要换，重审判</SoftHighlight>；<SoftHighlight color={C.lanternInk}>评议后，来不了，人不换，名写全</SoftHighlight>
                </div>
              </div>
            </ShopCard>
          </div>

          <div data-final-knowledge="verdict-kind-banks" style={{position: 'absolute', inset: 0}}>
            <div style={{position: 'absolute', left: 0, top: 172, width: MAIN_WIDTH, display: 'flex', gap: 22}}>
              <ShopCard style={{flex: 1.3, height: 300, padding: '18px 24px', borderColor: C.awning, ...enter(frame, 70, 24)}}>
                <div style={{fontSize: 25, fontWeight: 950, color: C.awningInk, marginBottom: 10}}>用判决</div>
                <div style={{display: 'flex', flexDirection: 'column', gap: 8, fontSize: 21, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                  <div><Chip color={C.awning} label="有罪" /> 指控成立；罪名不当的按认定事实改判</div>
                  <div><Chip color={C.stopInk} label="无罪" /> 确定无罪；<ThinUnderline color={C.stopInk}>疑罪从无</ThinUnderline></div>
                  <div><Chip color={C.indigo} label="不负刑事责任" /> 未达刑责年龄 / 无责任能力精神病人</div>
                </div>
              </ShopCard>
              <ShopCard style={{flex: 1.3, height: 300, padding: '18px 24px', borderColor: C.indigo, ...enter(frame, 130, 24)}}>
                <div style={{fontSize: 25, fontWeight: 950, color: C.indigoInk, marginBottom: 10}}>用裁定 · 终止审理</div>
                <div style={{display: 'flex', flexDirection: 'column', gap: 8, fontSize: 21, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                  <div>已过追诉时效或经特赦令免除刑罚</div>
                  <div>告诉才处理的案件（告知被害人可自诉）</div>
                  <div>被告人死亡；但有证据证明无罪经缺席审理确认的，<ThinUnderline color={C.indigoInk}>判决宣告无罪</ThinUnderline></div>
                </div>
              </ShopCard>
              <ShopCard style={{flex: 1, height: 300, padding: '18px 24px', borderColor: C.lantern, ...enter(frame, 190, 24)}}>
                <div style={{fontSize: 25, fontWeight: 950, color: C.lanternInk, marginBottom: 10}}>公开宣判</div>
                <div style={{display: 'flex', flexDirection: 'column', gap: 8, fontSize: 21, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                  <div>宣告判决<ThinUnderline color={C.lanternInk}>一律公开</ThinUnderline>进行</div>
                  <div>当庭宣判：<Chip color={C.lantern} label="5 日内" /> 送达判决书</div>
                  <div>定期宣判：宣判后<SoftHighlight color={C.lanternInk}>立即送达</SoftHighlight></div>
                </div>
              </ShopCard>
            </div>
          </div>

          <div
            data-final-knowledge="withdraw-note"
            style={{
              position: 'absolute',
              left: 0,
              top: 496,
              width: MAIN_WIDTH,
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              ...enter(frame, 250, 16),
            }}
          >
            <Stamp size={24} strokeWidth={2.5} style={{color: C.rose, flexShrink: 0}} />
            <span style={{fontSize: 22, lineHeight: 1.45, color: 'rgba(239,234,223,0.88)', fontWeight: 700}}>
              宣告判决前检院可撤回起诉，由法院审查裁定；撤回后 <Chip color={C.rose} label="30 日内" /> 应作出不起诉决定
            </span>
          </div>
        </div>
      </div>
    </StreetShell>
  );
};

// ---------------------------------------------------------------
// MAIN COMPOSITION
// ---------------------------------------------------------------
export const FirstInstanceProcession: React.FC = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: C.dusk, width: 1920, height: 1080}}
  >
    <TimelineSequence name="01" start={SCENES['five-stage-street'].start} duration={SCENES['five-stage-street'].duration}>
      <FiveStageStreetScene />
    </TimelineSequence>
    <TimelineSequence name="02" start={SCENES['opening-rules-lane'].start} duration={SCENES['opening-rules-lane'].duration}>
      <OpeningRulesScene />
    </TimelineSequence>
    <TimelineSequence name="03" start={SCENES['verdict-square'].start} duration={SCENES['verdict-square'].duration}>
      <VerdictSquareScene />
    </TimelineSequence>
  </AbsoluteFill>
);
