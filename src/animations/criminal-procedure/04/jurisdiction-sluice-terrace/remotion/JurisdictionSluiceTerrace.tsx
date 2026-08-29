import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {ArrowDown, Ban, Building2, CheckCircle2, FileText, Gavel, GitBranch, Landmark, MoveRight, Scale, Waves} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 160;

// Theme: Sluice Terrace — 水闸分级渠 · 刑事管辖
const C = {
  basin: '#22303A',
  basinDeep: '#18242C',
  water: '#2FA3A8',
  waterInk: '#1A6A6E',
  waterSoft: '#D8EEEC',
  gate: '#C98A3B',
  gateInk: '#7A5216',
  gateSoft: '#F3E6D0',
  paper: '#F2F0E6',
  paperAlt: '#E8E6D9',
  ink: '#26313A',
  inkSoft: '#5C6B74',
  vermilion: '#BF4A36',
  vermilionInk: '#7C2B1D',
  vermilionSoft: '#F6DFD8',
  ochre: '#A87B2A',
  ochreInk: '#6B4E14',
  ochreSoft: '#F1E7D0',
  pine: '#3D7D5C',
  pineInk: '#285540',
  pineSoft: '#DEEDE4',
  slate: '#4E5E68',
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

const SluiceShell = ({
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
      backgroundColor: C.basin,
      backgroundImage:
        'linear-gradient(rgba(47,163,168,0.05) 1px, transparent 1px),' +
        'radial-gradient(circle at 14% 18%, rgba(47,163,168,0.16), transparent 30%),' +
        'radial-gradient(circle at 86% 84%, rgba(201,138,59,0.12), transparent 32%)',
      backgroundSize: '72px 72px, auto, auto',
      color: C.paper,
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
          backgroundColor: C.basinDeep,
          display: 'grid',
          placeItems: 'center',
          fontSize: 18,
          fontWeight: 950,
          color: C.water,
          letterSpacing: 2,
          fontFamily: 'var(--inkloom-animation-mono)',
        }}
      >
        闸区 {code}
      </div>
      <h1 className="font-animation-title" style={{fontSize: 44, lineHeight: 1.08, margin: 0, fontWeight: 900, color: C.paper}}>
        {title}
      </h1>
      <div
        style={{
          marginLeft: 'auto',
          fontSize: 18,
          fontWeight: 900,
          letterSpacing: 2,
          color: 'rgba(242,240,230,0.66)',
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
      backgroundColor: solid ? color : onDark ? 'rgba(0,0,0,0.24)' : `${color}22`,
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
      backgroundColor: `${color}2E`,
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

const GateCard = ({
  children,
  style,
}: {
  readonly children: React.ReactNode;
  readonly style?: React.CSSProperties;
}) => (
  <div
    data-audit-boundary="true"
    style={{
      backgroundColor: C.paper,
      border: `3px solid ${C.gate}`,
      borderRadius: 10,
      color: C.ink,
      boxShadow: '0 6px 16px rgba(6,12,16,0.4)',
      boxSizing: 'border-box',
      ...style,
    }}
  >
    {children}
  </div>
);

const WaterChannel = ({
  color,
  height,
  left,
  progress,
  size = 30,
  top,
  vertical = true,
}: {
  readonly color: string;
  readonly height: number;
  readonly left: number;
  readonly progress: number;
  readonly size?: number;
  readonly top: number;
  readonly vertical?: boolean;
}) => (
  <div style={{position: 'absolute', left: left - (vertical ? size / 2 : 0), top, opacity: progress > 0 ? 1 : 0}}>
    {vertical ? (
      <div
        style={{
          width: size,
          height,
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <div
          style={{
            width: 6,
            height: Math.max(0, height - size + 8),
            backgroundColor: color,
            borderRadius: 3,
            scale: `1 ${Math.max(0.001, progress)}`,
            transformOrigin: 'top center',
          }}
        />
      </div>
    ) : (
      <div style={{width: height, height: size, display: 'grid', placeItems: 'center'}}>
        <div
          style={{
            width: Math.max(0, height - size + 8),
            height: 6,
            backgroundColor: color,
            borderRadius: 3,
            scale: `${Math.max(0.001, progress)} 1`,
            transformOrigin: 'left center',
          }}
        />
      </div>
    )}
  </div>
);

// ---------------------------------------------------------------
// Scene 01 — 级别管辖：四级闸室与中院六管
// ---------------------------------------------------------------

const TierGate = ({
  accent,
  delay,
  frame,
  label,
  note,
  x,
  y,
}: {
  readonly accent: string;
  readonly delay: number;
  readonly frame: number;
  readonly label: string;
  readonly note: string;
  readonly x: number;
  readonly y: number;
}) => (
  <GateCard style={{position: 'absolute', left: x, top: y, width: 252, height: 118, padding: '14px 16px', borderColor: accent, ...enter(frame, delay, 24)}}>
    <div style={{fontSize: 28, fontWeight: 950, color: accent === C.gate ? C.gateInk : accent, lineHeight: 1.2}}>{label}</div>
    <div style={{fontSize: 20, color: C.inkSoft, lineHeight: 1.35, marginTop: 6}}>{note}</div>
  </GateCard>
);

export const LevelTerraceScene: React.FC = () => {
  const frame = useCurrentFrame();
  const intakes = [
    {label: '危害国家安全', delay: 150},
    {label: '恐怖活动', delay: 166},
    {label: '可能判无期 · 死刑', delay: 182},
    {label: '违法所得没收程序', delay: 198},
    {label: '缺席审判程序', delay: 214},
    {label: '证券期货犯罪', delay: 230},
  ];

  return (
    <SluiceShell accent={C.water} code="04-1" subtitle="考点5 级别管辖 · 中院六管与就高不就低" title="级别管辖的闸室">
      <div
        data-layout="four-tier-sluice-terrace-with-intake-bay"
        data-visual-anchor="flow-path"
        data-text-treatments="chip,thin-underline,soft-highlight"
        data-visual-grammar="base-court-takes-ordinary-first-instances-by-default,intermediate-court-intakes-six-listed-channels,higher-courts-review-downward-appeals-only,cogravidad-rule-lifts-the-whole-case-to-the-higher-tier"
        data-focal-channels="connector,contrast,enclosure,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="中院六管：国恐无死缺没收，证券期货中院收" style={{position: 'absolute', inset: 0}}>
          <TierGate accent={C.water} delay={0} frame={frame} label="基层法院" note="普通刑事一审 · 默认闸位" x={0} y={196} />
          <WaterChannel color={C.water} height={64} left={291} progress={interpolate(frame, [36, 66], [0, 1], {...clamp, easing: ease})} top={242} />
          <div data-final-knowledge="intermediate-six-intakes" style={{position: 'absolute', inset: 0}}>
            <GateCard style={{position: 'absolute', left: 330, top: 146, width: 560, height: 264, padding: '16px 20px', borderColor: C.gate, borderWidth: 5}}>
              <div style={{fontSize: 32, fontWeight: 950, color: C.gateInk, lineHeight: 1.2}}>中级法院</div>
              <div style={{fontSize: 20, color: C.inkSoft, marginTop: 4, marginBottom: 10}}>六条进水口 · 专渠一审</div>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: 8}}>
                {intakes.map((item) => (
                  <Chip key={item.label} color={C.gate} label={item.label} style={{opacity: interpolate(frame, [item.delay, item.delay + 16], [0, 1], clamp)}} />
                ))}
              </div>
            </GateCard>
          </div>
          <WaterChannel color={C.slate} height={54} left={936} progress={interpolate(frame, [96, 126], [0, 1], {...clamp, easing: ease})} top={252} />
          <TierGate accent={C.slate} delay={110} frame={frame} label="高级 · 最高法院" note="上可审下 · 依法审级" x={984} y={196} />
          <div
            data-final-knowledge="downward-ban-note"
            style={{
              position: 'absolute',
              left: 984,
              top: 348,
              width: 282,
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              fontSize: 23,
              lineHeight: 1.45,
              color: C.paper,
              fontWeight: 700,
              ...enter(frame, 140, 16),
            }}
          >
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <CheckCircle2 size={26} strokeWidth={2.6} style={{color: C.water, flexShrink: 0}} />
              <span>上级法院必要时<ThinUnderline color={C.water}>可以审判</ThinUnderline>下级一审案件</span>
            </div>
            <ExternalNegation color={C.vermilion}>下级法院无权审理本应由上级一审的案件</ExternalNegation>
          </div>

          <GateCard style={{position: 'absolute', left: 1290, top: 60, width: 510, height: 560, padding: '24px 24px', borderColor: C.water, display: 'flex', flexDirection: 'column', gap: 18, ...enter(frame, 60, 30)}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Scale size={32} strokeWidth={2.5} style={{color: C.waterInk, flexShrink: 0}} />
              <span style={{fontSize: 30, fontWeight: 950, color: C.ink, lineHeight: 1.2}}>就高不就低</span>
            </div>
            <div data-final-knowledge="cogravidad-rule" style={{fontSize: 23, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
              共同犯罪中只要有一人属中院管辖 → <SoftHighlight color={C.waterInk}>全案由中院一审</SoftHighlight>
            </div>
            <div
              data-final-knowledge="juvenile-exception"
              style={{
                border: `2px dashed ${C.vermilion}`,
                backgroundColor: C.vermilionSoft,
                borderRadius: 10,
                padding: '14px 16px',
                fontSize: 22,
                lineHeight: 1.45,
                color: C.vermilionInk,
                fontWeight: 700,
              }}
            >
              例外：未成年人<ThinUnderline color={C.vermilionInk}>分案处理</ThinUnderline>
              ，未成年人案可留基层一审
            </div>
            <div style={{border: `3px solid ${C.gate}`, borderRadius: 10, padding: '16px 18px', backgroundColor: C.gateSoft}}>
              <div style={{fontSize: 20, color: C.inkSoft, letterSpacing: 2, fontFamily: 'var(--inkloom-animation-mono)', fontWeight: 800}}>通关口诀</div>
              <div style={{fontSize: 28, fontWeight: 950, color: C.gateInk, lineHeight: 1.5, marginTop: 6}}>
                国恐无死缺没收
                <br />
                证券期货中院收
              </div>
            </div>
          </GateCard>

          <div
            data-stateful-source="level-dossier"
            style={{
              position: 'absolute',
              left: 60,
              top: 486,
              opacity: interpolate(frame, [0, 14], [0, 1], clamp),
              transform: `translateX(${interpolate(frame, [14, 60], [0, 250], {...clamp, easing: ease})}px)`,
            }}
          >
            <Chip color={C.water} label="一件普通刑案" onDark />
          </div>
          <div
            data-final-knowledge="base-default-gate"
            data-stateful-terminal="level-dossier"
            style={{position: 'absolute', left: 0, top: 536, width: 560, fontSize: 23, lineHeight: 1.45, color: 'rgba(242,240,230,0.85)', fontWeight: 700, ...enter(frame, 30, 14)}}
          >
            不落入中院六管的案件，默认<ThinUnderline color={C.water}>基层法院一审</ThinUnderline> · 检材已归闸
          </div>
          <Waves size={28} strokeWidth={2.4} style={{position: 'absolute', left: 1240, top: 360, color: 'rgba(47,163,168,0.55)'}} />
        </div>
      </div>
    </SluiceShell>
  );
};

// ---------------------------------------------------------------
// Scene 02 — 地区管辖：犯罪地主渠与居住地辅渠
// ---------------------------------------------------------------

export const TerritoryChannelScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <SluiceShell accent={C.water} code="04-2" subtitle="考点6 地区管辖 · 犯罪地为主、居住地为辅" title="地区管辖的主辅渠">
      <div
        data-layout="main-auxiliary-channel-with-rule-chip-row"
        data-visual-anchor="comparison-axis"
        data-text-treatments="chip,soft-highlight,thin-underline"
        data-visual-grammar="crime-place-channel-is-the-default-territory-gate,residence-channel-opens-only-when-more-appropriate,preparation-and-continuing-passages-count-as-crime-place,first-accepting-court-resolves-peer-conflict"
        data-focal-channels="contrast,enclosure,spatial,connector"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="刑事案件由犯罪地法院管辖为主，居住地为辅" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="crime-place-main-channel" style={{position: 'absolute', inset: 0}}>
            <GateCard style={{position: 'absolute', left: 0, top: 30, width: 1060, height: 300, padding: '22px 26px', borderColor: C.water, borderWidth: 5, ...enter(frame, 0, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12}}>
                <Waves size={36} strokeWidth={2.5} style={{color: C.waterInk, flexShrink: 0}} />
                <span style={{fontSize: 34, fontWeight: 950, color: C.waterInk, lineHeight: 1.2}}>犯罪地法院管辖</span>
                <Chip color={C.water} label="主渠 · 原则" solid style={{marginLeft: 'auto'}} />
              </div>
              <div style={{fontSize: 24, lineHeight: 1.55, color: C.ink, fontWeight: 700}}>
                刑事案件由<SoftHighlight color={C.waterInk}>犯罪地</SoftHighlight>的法院管辖。
                犯罪地既含<ThinUnderline color={C.waterInk}>犯罪行为发生地</ThinUnderline>，也含<ThinUnderline color={C.waterInk}>结果发生地</ThinUnderline>。
              </div>
            </GateCard>
          </div>

          <div data-final-knowledge="residence-auxiliary-channel" style={{position: 'absolute', inset: 0}}>
            <GateCard style={{position: 'absolute', left: 1100, top: 30, width: 700, height: 300, padding: '22px 24px', borderColor: C.ochre, borderStyle: 'dashed', ...enter(frame, 40, 26)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12}}>
                <Building2 size={32} strokeWidth={2.5} style={{color: C.ochreInk, flexShrink: 0}} />
                <span style={{fontSize: 30, fontWeight: 950, color: C.ochreInk, lineHeight: 1.2}}>被告居住地法院管辖</span>
                <Chip color={C.ochre} label="辅渠 · 例外" style={{marginLeft: 'auto'}} />
              </div>
              <div style={{fontSize: 23, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                仅当由居住地审判<SoftHighlight color={C.ochreInk}>更为适宜</SoftHighlight>时，可以由居住地法院管辖。
              </div>
            </GateCard>
          </div>

          <div style={{position: 'absolute', left: 0, top: 368, width: MAIN_WIDTH, display: 'flex', gap: 24, ...enter(frame, 100, 24)}}>
            <GateCard style={{flex: 1, padding: '18px 20px', borderColor: C.water}}>
              <div style={{fontSize: 24, fontWeight: 950, color: C.waterInk, marginBottom: 8}}>预备地也是犯罪地</div>
              <div style={{fontSize: 22, lineHeight: 1.45, color: C.ink}}>
                为犯罪在 A 区购绳、B 区行窃 → <ThinUnderline color={C.waterInk}>AB 两地都有管辖权</ThinUnderline>
              </div>
            </GateCard>
            <GateCard style={{flex: 1, padding: '18px 20px', borderColor: C.water}}>
              <div style={{fontSize: 24, fontWeight: 950, color: C.waterInk, marginBottom: 8}}>持续犯途经地均有权</div>
              <div style={{fontSize: 22, lineHeight: 1.45, color: C.ink}}>
                非法拘禁辗转 A→B→C→D → <ThinUnderline color={C.waterInk}>四区法院都有权</ThinUnderline>
              </div>
            </GateCard>
            <GateCard style={{flex: 1.2, padding: '18px 20px', borderColor: C.gate}}>
              <div style={{fontSize: 24, fontWeight: 950, color: C.gateInk, marginBottom: 8}}>同级冲突的处理</div>
              <div style={{fontSize: 22, lineHeight: 1.45, color: C.ink}}>
                <SoftHighlight color={C.gateInk}>最初受理地</SoftHighlight>审判；必要时移送主要犯罪地；协商不成层报共同上级
              </div>
            </GateCard>
          </div>

          <div
            data-final-knowledge="peer-conflict-rule"
            style={{
              position: 'absolute',
              left: 0,
              top: 588,
              width: MAIN_WIDTH,
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              ...enter(frame, 170, 16),
            }}
          >
            <GitBranch size={28} strokeWidth={2.5} style={{color: 'rgba(47,163,168,0.8)', flexShrink: 0}} />
            <span style={{fontSize: 23, lineHeight: 1.45, color: 'rgba(242,240,230,0.88)', fontWeight: 700}}>
              网络犯罪「沾边就管」：服务器地、网络服务提供者地、被侵害系统地、被害人被侵害时所在地等都是犯罪地
            </span>
          </div>
        </div>
      </div>
    </SluiceShell>
  );
};

// ---------------------------------------------------------------
// Scene 03 — 移送·指定·并案的调度板
// ---------------------------------------------------------------

export const TransferDesignationScene: React.FC = () => {
  const frame = useCurrentFrame();
  const dossierTravel = interpolate(frame, [70, 130], [0, 1], {...clamp, easing: ease});

  return (
    <SluiceShell accent={C.gate} code="04-3" subtitle="移送·指定·并案 · 谁能指谁、案卷怎么走" title="调度板：移送与指定">
      <div
        data-layout="dual-column-transfer-board-with-merge-bay"
        data-visual-anchor="document-fork"
        data-text-treatments="chip,external-negation,thin-underline"
        data-visual-grammar="upper-court-may-hear-lower-first-instances,lower-court-cannot-hear-upper-tier-cases,designation-stays-inside-one-system-and-dossiers-travel-via-procuratorate,joined-trials-are-remanded-to-first-instance-only"
        data-focal-channels="connector,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="检指检、法指法：指定不可跨系统；案卷移送以检察院为媒" style={{position: 'absolute', inset: 0}}>
          <GateCard style={{position: 'absolute', left: 0, top: 20, width: 900, height: 330, padding: '20px 24px', borderColor: C.water, ...enter(frame, 0, 24)}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12}}>
              <Landmark size={32} strokeWidth={2.5} style={{color: C.waterInk, flexShrink: 0}} />
              <span style={{fontSize: 30, fontWeight: 950, color: C.waterInk, lineHeight: 1.2}}>法院系统内 · 升降规则</span>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 10, fontSize: 23, lineHeight: 1.4, color: C.ink, fontWeight: 700}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <Chip color={C.water} label="上可审下" />
                <span>必要时审判下级一审案件</span>
              </div>
              <ExternalNegation color={C.vermilionInk}>下不审上：不能审本应由上级一审的案件</ExternalNegation>
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <Chip color={C.water} label="上可指下" />
                <span>管辖不明 / 由犯罪地、居住地以外法院审判更适宜</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <Chip color={C.gate} label="下可求上" />
                <span>审理期限届满 15 日前书面请求，中院 10 日内答复</span>
              </div>
            </div>
          </GateCard>

          <GateCard style={{position: 'absolute', left: 940, top: 20, width: 860, height: 330, padding: '20px 24px', borderColor: C.vermilion, ...enter(frame, 60, 24)}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12}}>
              <Ban size={32} strokeWidth={2.6} style={{color: C.vermilionInk, flexShrink: 0}} />
              <span style={{fontSize: 30, fontWeight: 950, color: C.vermilionInk, lineHeight: 1.2}}>跨系统禁令</span>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 12, fontSize: 23, lineHeight: 1.4, color: C.ink, fontWeight: 700}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <Chip color={C.pine} label="检指检 ✓" />
                <span>检察院系统内可指定管辖</span>
                <Chip color={C.pine} label="法指法 ✓" />
                <span>法院系统内可指定管辖</span>
              </div>
              <ExternalNegation color={C.vermilionInk}>检察院不可对法院指定管辖，法院亦不可对检察院指定管辖</ExternalNegation>
              <div data-final-knowledge="dossier-via-procuratorate" style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <FileText size={24} strokeWidth={2.5} style={{color: C.gateInk, flexShrink: 0}} />
                <span>
                  同意移送的案卷<ThinUnderline color={C.gateInk}>须经检察院</ThinUnderline>移送上级法院，法院之间不直接送卷
                </span>
              </div>
            </div>
          </GateCard>

          <div
            data-stateful-source="transfer-dossier"
            style={{
              position: 'absolute',
              left: interpolate(dossierTravel, [0, 1], [70, 400]),
              top: 372,
              opacity: interpolate(frame, [70, 88], [0, 1], clamp),
            }}
          >
            <Chip color={C.gate} label="基层请求移送" onDark />
          </div>

          <div data-final-knowledge="transfer-two-exits" style={{position: 'absolute', inset: 0}}>
            <GateCard style={{position: 'absolute', left: 0, top: 428, width: 900, height: 262, padding: '20px 24px', borderColor: C.gate, ...enter(frame, 140, 24)}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10}}>
              <MoveRight size={30} strokeWidth={2.5} style={{color: C.gateInk, flexShrink: 0}} />
              <span style={{fontSize: 30, fontWeight: 950, color: C.gateInk, lineHeight: 1.2}}>移送的两条出口</span>
            </div>
            <div style={{display: 'flex', gap: 20}}>
              <div style={{flex: 1, border: `2px solid ${C.pine}`, backgroundColor: C.pineSoft, borderRadius: 10, padding: '14px 16px'}}>
                <div style={{fontSize: 23, fontWeight: 950, color: C.pineInk, marginBottom: 6}}>同意移送</div>
                <div style={{fontSize: 22, lineHeight: 1.45, color: C.ink}}>下达同意决定书，书面通知同级检察院，案卷经检察院上行</div>
              </div>
              <div style={{flex: 1, border: `2px solid ${C.vermilion}`, backgroundColor: C.vermilionSoft, borderRadius: 10, padding: '14px 16px'}}>
                <div style={{fontSize: 23, fontWeight: 950, color: C.vermilionInk, marginBottom: 6}}>不同意</div>
                <div style={{fontSize: 22, lineHeight: 1.45, color: C.ink}}>下达不同意决定书，由请求移送的法院依法审判</div>
              </div>
            </div>
          </GateCard>
          </div>

          <div data-final-knowledge="join-at-first-instance-only" style={{position: 'absolute', inset: 0}}>
            <GateCard style={{position: 'absolute', left: 940, top: 428, width: 860, height: 262, padding: '20px 24px', borderColor: C.pine, ...enter(frame, 180, 24)}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10}}>
                <Gavel size={30} strokeWidth={2.5} style={{color: C.pineInk, flexShrink: 0}} />
                <span style={{fontSize: 30, fontWeight: 950, color: C.pineInk, lineHeight: 1.2}}>并案：只并一审</span>
              </div>
              <div style={{fontSize: 23, lineHeight: 1.5, color: C.ink, fontWeight: 700, marginBottom: 10}}>
                二审中发现被告人还有其他犯罪未判决 → 可以协商并案，但应当<SoftHighlight color={C.pineInk}>发回第一审法院</SoftHighlight>处理
              </div>
              <ExternalNegation color={C.vermilionInk}>不可并在二审，只能并在一审</ExternalNegation>
            </GateCard>
          </div>

          <ArrowDown size={30} strokeWidth={2.8} style={{position: 'absolute', left: 60, top: 372, color: C.gate, opacity: interpolate(frame, [40, 64], [0, 1], clamp)}} />
          <div
            data-stateful-terminal="transfer-dossier"
            style={{position: 'absolute', left: 480, top: 372, opacity: interpolate(frame, [140, 168], [0, 1], clamp)}}
          >
            <Chip color={C.pine} label="中院 10 日内决定" />
          </div>
        </div>
      </div>
    </SluiceShell>
  );
};

// ---------------------------------------------------------------
// MAIN COMPOSITION
// ---------------------------------------------------------------
export const JurisdictionSluiceTerrace: React.FC = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: C.basin, width: 1920, height: 1080}}
  >
    <TimelineSequence name="01" start={SCENES['level-terrace-gates'].start} duration={SCENES['level-terrace-gates'].duration}>
      <LevelTerraceScene />
    </TimelineSequence>
    <TimelineSequence name="02" start={SCENES['territory-main-auxiliary'].start} duration={SCENES['territory-main-auxiliary'].duration}>
      <TerritoryChannelScene />
    </TimelineSequence>
    <TimelineSequence name="03" start={SCENES['transfer-designation-board'].start} duration={SCENES['transfer-designation-board'].duration}>
      <TransferDesignationScene />
    </TimelineSequence>
  </AbsoluteFill>
);
