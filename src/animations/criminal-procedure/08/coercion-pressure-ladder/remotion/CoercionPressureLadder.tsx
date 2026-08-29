import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {Ban, CheckCircle2, Gauge, Gavel, Lock, ShieldCheck, Timer, Wrench} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 160;

// Theme: Boiler Pressure Ladder — 锅炉压力梯 · 强制措施
const C = {
  furnace: '#25211E',
  furnaceDeep: '#1B1815',
  panel: '#E8E2D5',
  panelAlt: '#DED7C6',
  ink: '#2A251F',
  inkSoft: '#6A6156',
  copper: '#B06A32',
  copperInk: '#6E3F17',
  copperSoft: '#EFDCC7',
  gauge: '#B34A32',
  gaugeInk: '#722C1B',
  gaugeSoft: '#F1DBD2',
  brass: '#C7A14A',
  brassInk: '#7A5F20',
  brassSoft: '#F0E5C9',
  steam: '#5E8FA3',
  steamInk: '#3A6172',
  steamSoft: '#DCE9EE',
  olive: '#6B7A46',
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

const BoilerShell = ({
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
      backgroundColor: C.furnace,
      backgroundImage:
        'repeating-linear-gradient(0deg, rgba(232,226,213,0.04) 0 1px, transparent 1px 9px),' +
        'radial-gradient(circle at 18% 16%, rgba(176,106,50,0.18), transparent 30%),' +
        'radial-gradient(circle at 84% 88%, rgba(94,143,163,0.14), transparent 34%)',
      backgroundSize: 'auto, auto, auto',
      color: C.panel,
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
          backgroundColor: C.furnaceDeep,
          display: 'grid',
          placeItems: 'center',
          fontSize: 18,
          fontWeight: 950,
          color: C.brass,
          letterSpacing: 2,
          fontFamily: 'var(--inkloom-animation-mono)',
        }}
      >
        炉区 {code}
      </div>
      <h1 className="font-animation-title" style={{fontSize: 44, lineHeight: 1.08, margin: 0, fontWeight: 900, color: C.panel}}>
        {title}
      </h1>
      <div
        style={{
          marginLeft: 'auto',
          fontSize: 18,
          fontWeight: 900,
          letterSpacing: 2,
          color: 'rgba(232,226,213,0.66)',
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

const IronPanel = ({
  children,
  style,
}: {
  readonly children: React.ReactNode;
  readonly style?: React.CSSProperties;
}) => (
  <div
    data-audit-boundary="true"
    style={{
      backgroundColor: C.panel,
      border: `3px solid ${C.copper}`,
      borderRadius: 10,
      color: C.ink,
      boxShadow: '0 6px 16px rgba(8,6,4,0.5), inset 0 0 0 2px rgba(176,106,50,0.2)',
      boxSizing: 'border-box',
      ...style,
    }}
  >
    {children}
  </div>
);

// ---------------------------------------------------------------
// Scene 01 — 五级压力梯：强制措施谱系
// ---------------------------------------------------------------

const LadderRung = ({
  accent,
  delay,
  frame,
  label,
  meta,
  x,
  y,
  width,
}: {
  readonly accent: string;
  readonly delay: number;
  readonly frame: number;
  readonly label: string;
  readonly meta: string;
  readonly x: number;
  readonly y: number;
  readonly width: number;
}) => (
  <IronPanel style={{position: 'absolute', left: x, top: y, width, height: 108, padding: '16px 20px', borderColor: accent, ...enter(frame, delay, 24)}}>
    <div style={{fontSize: 29, fontWeight: 950, color: accent, lineHeight: 1.15}}>{label}</div>
    <div style={{fontSize: 20, color: C.inkSoft, lineHeight: 1.35, marginTop: 6}}>{meta}</div>
  </IronPanel>
);

export const PressureLadderScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <BoilerShell accent={C.copper} code="08-1" subtitle="考点1·2 五种强制措施 · 强度阶梯与机关分工" title="强制措施压力梯">
      <div
        data-layout="ascending-pressure-ladder-with-dial-bay"
        data-visual-anchor="timeline-gate"
        data-text-treatments="chip,label-block,thin-underline"
        data-visual-grammar="measures-ascend-from-summons-to-arrest,deciding-and-executing-organs-split-per-measure,statutory-caps-run-twelve-and-six-months,breach-escalates-one-rung-up"
        data-focal-channels="connector,contrast,enclosure,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="由轻到重：拘传 → 取保候审 → 监视居住 → 刑事拘留 → 逮捕" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="ladder-rungs" style={{position: 'absolute', inset: 0}}>
            <LadderRung accent={C.steam} delay={0} frame={frame} label="拘传" meta="强制到案 · 最轻档" x={0} y={400} width={300} />
            <LadderRung accent={C.olive} delay={26} frame={frame} label="取保候审" meta="人保 / 钱保 · 最长 12 个月" x={340} y={310} width={330} />
            <LadderRung accent={C.brass} delay={52} frame={frame} label="监视居住" meta="居所监视 · 最长 6 个月" x={710} y={220} width={330} />
            <LadderRung accent={C.copper} delay={78} frame={frame} label="刑事拘留" meta="公安 / 检察决定 · 紧急羁押" x={1080} y={130} width={340} />
            <LadderRung accent={C.gauge} delay={104} frame={frame} label="逮捕" meta="最重 · 检察批准 · 公安执行" x={1460} y={40} width={340} />
          </div>

          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 536,
              width: 1800,
              height: 4,
              backgroundColor: C.copper,
              opacity: interpolate(frame, [20, 70], [0, 0.55], clamp),
            }}
          />
          <Gauge size={44} strokeWidth={2.3} style={{position: 'absolute', left: 36, top: 336, color: C.brass, opacity: interpolate(frame, [0, 20], [0, 1], clamp)}} />

          <div data-final-knowledge="organ-dial-bay" style={{position: 'absolute', inset: 0}}>
            <IronPanel style={{position: 'absolute', left: 0, top: 560, width: 1160, height: 190, padding: '18px 24px', borderColor: C.steam, ...enter(frame, 140, 24)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12}}>
                <Wrench size={30} strokeWidth={2.5} style={{color: C.steamInk, flexShrink: 0}} />
                <span style={{fontSize: 28, fontWeight: 950, color: C.steamInk}}>机关分工速查</span>
              </div>
              <div style={{display: 'flex', gap: 24, fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <div style={{flex: 1}}>
                  <div style={{marginBottom: 6}}><Chip color={C.steam} label="取保候审" /></div>
                  决定：公检法 · 执行：公安
                </div>
                <div style={{flex: 1}}>
                  <div style={{marginBottom: 6}}><Chip color={C.copper} label="拘留" /></div>
                  公安决定 · 检察自侦案件亦可决定
                </div>
                <div style={{flex: 1.2}}>
                  <div style={{marginBottom: 6}}><Chip color={C.gauge} label="逮捕" /></div>
                  决定：检 · 法 · 批准：检 · 执行：公安
                </div>
              </div>
            </IronPanel>
          </div>

          <div
            data-final-knowledge="escalation-note"
            style={{
              position: 'absolute',
              left: 1200,
              top: 560,
              width: 600,
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              ...enter(frame, 180, 20),
            }}
          >
            <IronPanel style={{padding: '16px 20px', borderColor: C.gauge}}>
              <div style={{fontSize: 23, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                违反取保、监居规定情节严重 → <ThinUnderline color={C.gaugeInk}>升压</ThinUnderline>：可先行拘留、予以逮捕
              </div>
            </IronPanel>
            <IronPanel style={{padding: '16px 20px', borderColor: C.brass}}>
              <div style={{fontSize: 23, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <Chip color={C.brass} label="期限" /> 取保 ≤12 个月 · 监居 ≤6 个月
              </div>
            </IronPanel>
          </div>
        </div>
      </div>
    </BoilerShell>
  );
};

// ---------------------------------------------------------------
// Scene 02 — 取保候审阀门盘
// ---------------------------------------------------------------

export const BailValveScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <BoilerShell accent={C.olive} code="08-2" subtitle="考点3 取保候审 · 四类条件、人保钱保与义务口诀" title="取保候审阀门盘">
      <div
        data-layout="bail-condition-board-with-twin-guarantee-banks"
        data-visual-anchor="comparison-axis"
        data-text-treatments="chip,thin-underline,soft-highlight"
        data-visual-grammar="four-condition-gates-open-bail,guarantor-and-deposit-are-either-or,duty-mnemonic-lists-five-core-obligations,breach-escalates-to-detention"
        data-focal-channels="contrast,enclosure,connector,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="人保钱保择一；原则上优先人保" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="bail-four-conditions" style={{position: 'absolute', inset: 0}}>
            <IronPanel style={{position: 'absolute', left: 0, top: 24, width: 760, height: 470, padding: '20px 24px', borderColor: C.olive, ...enter(frame, 0, 26)}}>
              <div style={{fontSize: 29, fontWeight: 950, color: C.oliveInk, marginBottom: 14}}>四类适用对象</div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 12, fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <div style={{display: 'flex', gap: 10}}><Chip color={C.olive} label="1" solid />可能判处<ThinUnderline color={C.oliveInk}>管制、拘役、独立附加刑</ThinUnderline></div>
                <div style={{display: 'flex', gap: 10}}><Chip color={C.olive} label="2" solid />可能判<ThinUnderline color={C.oliveInk}>有期徒刑以上</ThinUnderline>，取保<SoftHighlight color={C.oliveInk}>不致发生社会危险性</SoftHighlight></div>
                <div style={{display: 'flex', gap: 10}}><Chip color={C.olive} label="3" solid /><span><ThinUnderline color={C.oliveInk}>严重疾病</ThinUnderline>、生活不能自理、<ThinUnderline color={C.oliveInk}>怀孕哺乳</ThinUnderline>妇女，不致危险</span></div>
                <div style={{display: 'flex', gap: 10}}><Chip color={C.olive} label="4" solid /><span>羁押<ThinUnderline color={C.oliveInk}>期限届满</ThinUnderline>案件尚未办结，需要继续侦查</span></div>
              </div>
              <div style={{marginTop: 16, border: `3px solid ${C.brass}`, borderRadius: 8, backgroundColor: C.brassSoft, padding: '10px 14px'}}>
                <div style={{fontSize: 23, fontWeight: 950, color: C.brassInk, lineHeight: 1.45}}>
                  义务口诀：取保禁足变要告，不扰证据传即到；上交证件禁止令，办案机关酌情考
                </div>
              </div>
            </IronPanel>
          </div>

          <div data-final-knowledge="guarantor-bank" style={{position: 'absolute', inset: 0}}>
            <IronPanel style={{position: 'absolute', left: 800, top: 24, width: 480, height: 470, padding: '20px 24px', borderColor: C.steam, ...enter(frame, 70, 26)}}>
              <div style={{fontSize: 28, fontWeight: 950, color: C.steamInk, marginBottom: 12}}>人保 · 保证人</div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 10, fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <div><Chip color={C.steam} label="1–2 名" /> 出具保证书</div>
                <div>条件：与本案<ThinUnderline color={C.steamInk}>无牵连</ThinUnderline>、有能力履保、享政治权利、有固定住处收入</div>
                <div>义务：<SoftHighlight color={C.steamInk}>监督 + 报告</SoftHighlight></div>
                <div style={{fontSize: 21, color: C.inkSoft}}>未履保 → 公安罚款 1000–20000 元；构成犯罪追刑责</div>
              </div>
            </IronPanel>
          </div>

          <div data-final-knowledge="deposit-bank" style={{position: 'absolute', inset: 0}}>
            <IronPanel style={{position: 'absolute', left: 1320, top: 24, width: 480, height: 470, padding: '20px 24px', borderColor: C.brass, ...enter(frame, 130, 26)}}>
              <div style={{fontSize: 28, fontWeight: 950, color: C.brassInk, marginBottom: 12}}>钱保 · 保证金</div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 10, fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                <div><Chip color={C.brass} label="≥1000 元" /> 未成年 ≥500 元 · 人民币</div>
                <div><ThinUnderline color={C.brassInk}>3 日内</ThinUnderline>向指定银行<SoftHighlight color={C.brassInk}>一次性交纳</SoftHighlight></div>
                <div>原则<ThinUnderline color={C.brassInk}>优先人保</ThinUnderline>，交钱是例外</div>
                <div style={{fontSize: 21, color: C.inkSoft}}>故意再犯 → 没收；过失或不构成犯罪 → 退还</div>
              </div>
            </IronPanel>
          </div>

          <div
            data-final-knowledge="breach-escalation-note"
            style={{
              position: 'absolute',
              left: 0,
              top: 534,
              width: MAIN_WIDTH,
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              ...enter(frame, 200, 16),
            }}
          >
            <Lock size={26} strokeWidth={2.5} style={{color: C.gauge, flexShrink: 0}} />
            <span style={{fontSize: 23, lineHeight: 1.45, color: 'rgba(232,226,213,0.88)', fontWeight: 700}}>
              违反取保义务需要逮捕的，可以<SoftHighlight color={C.gaugeInk}>先行拘留</SoftHighlight>；同一阶段累计算，跨越阶段重新算
            </span>
          </div>
        </div>
      </div>
    </BoilerShell>
  );
};

// ---------------------------------------------------------------
// Scene 03 — 逮捕三重仪表
// ---------------------------------------------------------------

export const ArrestGaugeScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <BoilerShell accent={C.gauge} code="08-3" subtitle="考点6 逮捕 · 三要件、批捕时限与复议放人" title="逮捕三重仪表">
      <div
        data-layout="triple-gauge-board-with-review-strip"
        data-visual-anchor="document-fork"
        data-text-treatments="chip,thin-underline,label-block"
        data-visual-grammar="arrest-needs-evidence-sentence-and-danger-gauges-all-rising,must-arrest-tightens-when-ten-years-or-repeat-or-unidentified,leniency-allows-non-arrest-for-lesser-guilty-plea,review-must-release-detainee-even-when-seeking-reconsideration"
        data-focal-channels="contrast,enclosure,connector,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="证据·刑罚·社会危险性三表同升才应当逮捕" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="arrest-three-gauges" style={{position: 'absolute', inset: 0}}>
            <IronPanel style={{position: 'absolute', left: 0, top: 24, width: MAIN_WIDTH, height: 260, padding: '20px 26px', borderColor: C.gauge, ...enter(frame, 0, 26)}}>
              <div style={{fontSize: 28, fontWeight: 950, color: C.gaugeInk, marginBottom: 14}}>应当逮捕 · 三表同升</div>
              <div style={{display: 'flex', gap: 22}}>
                <div style={{flex: 1, border: `2px solid ${C.gauge}`, backgroundColor: C.gaugeSoft, borderRadius: 8, padding: '12px 16px'}}>
                  <div style={{fontSize: 24, fontWeight: 950, color: C.gaugeInk, marginBottom: 6}}>证据表</div>
                  <div style={{fontSize: 21, lineHeight: 1.4, color: C.ink, fontWeight: 700}}>有证据证明有犯罪事实</div>
                </div>
                <div style={{flex: 1, border: `2px solid ${C.gauge}`, backgroundColor: C.gaugeSoft, borderRadius: 8, padding: '12px 16px'}}>
                  <div style={{fontSize: 24, fontWeight: 950, color: C.gaugeInk, marginBottom: 6}}>刑罚表</div>
                  <div style={{fontSize: 21, lineHeight: 1.4, color: C.ink, fontWeight: 700}}>可能判处徒刑以上刑罚</div>
                </div>
                <div style={{flex: 1.4, border: `2px solid ${C.gauge}`, backgroundColor: C.gaugeSoft, borderRadius: 8, padding: '12px 16px'}}>
                  <div style={{fontSize: 24, fontWeight: 950, color: C.gaugeInk, marginBottom: 6}}>危险表 · 取保尚不足以防止</div>
                  <div style={{fontSize: 21, lineHeight: 1.4, color: C.ink, fontWeight: 700}}>严重暴力 / 再犯可能 / 妨碍办案（自杀逃跑毁证串供）</div>
                </div>
              </div>
              <div style={{marginTop: 14, fontSize: 22, lineHeight: 1.45, color: C.ink, fontWeight: 700}}>
                径行应当逮捕：可能判<SoftHighlight color={C.gaugeInk}>10 年以上</SoftHighlight>；或曾故意犯罪、身份不明
              </div>
            </IronPanel>
          </div>

          <div data-final-knowledge="leniency-non-arrest" style={{position: 'absolute', inset: 0}}>
            <IronPanel style={{position: 'absolute', left: 0, top: 312, width: 560, height: 250, padding: '18px 24px', borderColor: C.olive, ...enter(frame, 90, 26)}}>
              <div style={{fontSize: 26, fontWeight: 950, color: C.oliveInk, marginBottom: 10}}>可以不捕</div>
              <div style={{fontSize: 22, lineHeight: 1.55, color: C.ink, fontWeight: 700}}>
                <SoftHighlight color={C.oliveInk}>认罪认罚</SoftHighlight> + 罪行较轻 + 无其他重大犯罪嫌疑 → 可不批捕 / 不予逮捕
              </div>
            </IronPanel>
          </div>

          <div data-final-knowledge="review-clock-bay" style={{position: 'absolute', inset: 0}}>
            <IronPanel style={{position: 'absolute', left: 600, top: 312, width: 560, height: 250, padding: '18px 24px', borderColor: C.steam, ...enter(frame, 140, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10}}>
                <Timer size={28} strokeWidth={2.5} style={{color: C.steamInk, flexShrink: 0}} />
                <span style={{fontSize: 26, fontWeight: 950, color: C.steamInk}}>审查批捕时限</span>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 8, fontSize: 22, lineHeight: 1.45, color: C.ink, fontWeight: 700}}>
                <div>已拘留：<Chip color={C.steam} label="7 日内" /> 作出决定</div>
                <div>未拘留：<Chip color={C.steam} label="15 日内" /> · 重大复杂 ≤20 日</div>
                <div style={{fontSize: 21, color: C.inkSoft}}>不批捕应说明理由并送公安执行；检院不另行侦查</div>
              </div>
            </IronPanel>
          </div>

          <div
            data-final-knowledge="release-on-review-note"
            style={{
              position: 'absolute',
              left: 1200,
              top: 312,
              width: 600,
              ...enter(frame, 190, 24),
            }}
          >
            <IronPanel style={{height: 250, padding: '18px 24px', borderColor: C.brass, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <Gavel size={28} strokeWidth={2.5} style={{color: C.brassInk, flexShrink: 0}} />
                <span style={{fontSize: 26, fontWeight: 950, color: C.brassInk}}>公安不服不批捕</span>
              </div>
              <div style={{fontSize: 22, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                可要求复议 → 不被接受可提请上一级检院复核；但<ThinUnderline color={C.gaugeInk}>必须立即释放</ThinUnderline>被拘留人
              </div>
              <div data-stateful-terminal="arrest-file">
                <Chip color={C.brass} label="案卷复核 · 人先放" solid />
              </div>
            </IronPanel>
          </div>

          <div
            data-stateful-source="arrest-file"
            style={{
              position: 'absolute',
              left: 40,
              top: 600,
              opacity: interpolate(frame, [0, 16], [0, 1], clamp),
            }}
          >
            <Chip color={C.gauge} label="公安提请批捕" onDark />
          </div>
          <CheckCircle2 size={26} strokeWidth={2.5} style={{position: 'absolute', left: 566, top: 596, color: 'rgba(232,226,213,0.5)'}} />
          <ShieldCheck size={24} strokeWidth={2.4} style={{position: 'absolute', left: 20, top: 300, color: 'rgba(232,226,213,0.45)'}} />
        </div>
      </div>
    </BoilerShell>
  );
};

// ---------------------------------------------------------------
// MAIN COMPOSITION
// ---------------------------------------------------------------
export const CoercionPressureLadder: React.FC = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: C.furnace, width: 1920, height: 1080}}
  >
    <TimelineSequence name="01" start={SCENES['pressure-ladder-overview'].start} duration={SCENES['pressure-ladder-overview'].duration}>
      <PressureLadderScene />
    </TimelineSequence>
    <TimelineSequence name="02" start={SCENES['bail-valve-panel'].start} duration={SCENES['bail-valve-panel'].duration}>
      <BailValveScene />
    </TimelineSequence>
    <TimelineSequence name="03" start={SCENES['arrest-gauge-board'].start} duration={SCENES['arrest-gauge-board'].duration}>
      <ArrestGaugeScene />
    </TimelineSequence>
  </AbsoluteFill>
);
