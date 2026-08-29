import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {Anchor, Ban, Building2, FileCheck2, Landmark, Mail, Shield, Siren, Stamp, Waves} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 160;

// Theme: Slate Courier Relay — 青砖驿站 · 公检法组织体系
const C = {
  brick: '#D7DFDD',
  brickDeep: '#C4CFCB',
  paper: '#F8F4E9',
  paperAlt: '#EFE9D8',
  ink: '#2C3330',
  inkSoft: '#5F6B67',
  line: '#9AA8A3',
  procurate: '#A63A2B',
  procurateInk: '#71251A',
  procurateSoft: '#F3DFD9',
  court: '#2E4E6F',
  courtInk: '#1E3449',
  courtSoft: '#DEE7EF',
  police: '#3F6152',
  policeInk: '#2A4237',
  policeSoft: '#DFEAE3',
  banner: '#B98A2F',
  bannerSoft: '#F2E7C9',
};

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

const RelayShell = ({
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
      backgroundColor: C.brick,
      backgroundImage:
        'linear-gradient(rgba(44,51,48,0.06) 2px, transparent 2px),' +
        'linear-gradient(90deg, rgba(44,51,48,0.06) 2px, transparent 2px),' +
        'radial-gradient(circle at 14% 10%, rgba(255,255,255,0.75), transparent 30%),' +
        'radial-gradient(circle at 86% 92%, rgba(60,80,74,0.18), transparent 36%)',
      backgroundSize: '120px 60px,120px 60px,auto,auto',
      color: C.ink,
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
          backgroundColor: C.paper,
          display: 'grid',
          placeItems: 'center',
          fontSize: 18,
          fontWeight: 950,
          color: accent,
          letterSpacing: 2,
          fontFamily: 'var(--inkloom-animation-mono)',
        }}
      >
        驿路 {code}
      </div>
      <h1 className="font-animation-title" style={{fontSize: 44, lineHeight: 1.08, margin: 0, fontWeight: 900}}>
        {title}
      </h1>
      <div
        style={{
          marginLeft: 'auto',
          fontSize: 18,
          fontWeight: 900,
          letterSpacing: 2,
          color: C.inkSoft,
          fontFamily: 'var(--inkloom-animation-label)',
          textAlign: 'right',
          maxWidth: 520,
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
  style,
}: {
  readonly color: string;
  readonly label: string;
  readonly solid?: boolean;
  readonly style?: React.CSSProperties;
}) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '3px 12px',
      backgroundColor: solid ? color : `${color}22`,
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
      backgroundColor: `${color}26`,
      borderRadius: 6,
      padding: '2px 8px',
      boxShadow: `inset 0 -3px 0 ${color}59`,
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
}: {
  readonly children: React.ReactNode;
  readonly color: string;
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
    <Ban size={22} strokeWidth={2.6} style={{flexShrink: 0, marginTop: 3}} />
    <span>{children}</span>
  </span>
);

const Tile = ({
  accent,
  children,
  delay,
  frame,
  height,
  icon: Icon,
  style,
  title,
  width,
  x,
  y,
}: {
  readonly accent: string;
  readonly children: React.ReactNode;
  readonly delay: number;
  readonly frame: number;
  readonly height?: number;
  readonly icon: typeof Building2;
  readonly style?: React.CSSProperties;
  readonly title: string;
  readonly width?: number;
  readonly x: number;
  readonly y: number;
}) => (
  <div
    data-audit-boundary="true"
    style={{
      position: 'absolute',
      left: x,
      top: y,
      width,
      height,
      backgroundColor: C.paper,
      border: `3px solid ${accent}`,
      borderTop: `8px solid ${accent}`,
      borderRadius: 10,
      padding: '16px 22px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      overflow: 'hidden',
      ...enter(frame, delay, 30),
      ...style,
    }}
  >
    <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
      <Icon size={32} strokeWidth={2.5} style={{color: accent, flexShrink: 0}} />
      <span style={{fontSize: 30, fontWeight: 950, color: accent, lineHeight: 1.2}}>{title}</span>
    </div>
    {children}
  </div>
);

const NodeBadge = ({
  accent,
  delay,
  frame,
  label,
  role,
  x,
  y,
}: {
  readonly accent: string;
  readonly delay: number;
  readonly frame: number;
  readonly label: string;
  readonly role: string;
  readonly x: number;
  readonly y: number;
}) => (
  <div style={{position: 'absolute', left: x, top: y, ...enter(frame, delay, 0, -14)}}>
    <div
      style={{
        width: 168,
        height: 78,
        borderRadius: 9,
        backgroundColor: C.paper,
        border: `3px solid ${accent}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(40,50,46,0.16)',
      }}
    >
      <div style={{fontSize: 27, fontWeight: 950, color: accent, lineHeight: 1.15}}>{label}</div>
      <div style={{fontSize: 18, color: C.inkSoft, fontFamily: 'var(--inkloom-animation-label)'}}>{role}</div>
    </div>
  </div>
);

const DropLine = ({
  accent,
  dashed = false,
  frame,
  height,
  progress,
  x,
  y,
}: {
  readonly accent: string;
  readonly dashed?: boolean;
  readonly frame: number;
  readonly height: number;
  readonly progress: number;
  readonly x: number;
  readonly y: number;
}) => (
  <div
    style={{
      position: 'absolute',
      left: x - 2,
      top: y,
      width: 4,
      height,
      borderLeft: dashed ? `4px dashed ${accent}` : 'none',
      backgroundColor: dashed ? 'transparent' : accent,
      scale: `1 ${Math.max(0.001, progress)}`,
      transformOrigin: 'top center',
      opacity: progress > 0 ? 1 : 0,
    }}
  />
);

const RelayLink = ({
  accent = C.line,
  delay,
  frame,
  x1,
  x2,
  y1,
  y2,
}: {
  readonly accent?: string;
  readonly delay: number;
  readonly frame: number;
  readonly x1: number;
  readonly x2: number;
  readonly y1: number;
  readonly y2: number;
}) => {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const length = Math.sqrt(dx * dx + dy * dy);
  const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
  const progress = interpolate(frame, [delay, delay + 26], [0, 1], {...clamp, easing: ease});
  return (
    <div
      style={{
        position: 'absolute',
        left: x1,
        top: y1 - 2,
        width: length,
        height: 4,
        borderTop: `4px dashed ${accent}`,
        transformOrigin: 'left center',
        rotate: `${angle}deg`,
        scale: `${Math.max(0.001, progress)} 1`,
        opacity: progress > 0 ? 1 : 0,
      }}
    />
  );
};

// ---------------------------------------------------------------
// Scene 01 — 两条纵向线：领导 vs 监督
// ---------------------------------------------------------------

export const VerticalLinesScene: React.FC = () => {
  const frame = useCurrentFrame();
  const procurateProgress = interpolate(frame, [40, 90], [0, 1], {...clamp, easing: ease});
  const courtProgress = interpolate(frame, [110, 160], [0, 1], {...clamp, easing: ease});

  return (
    <RelayShell accent={C.procurate} code="01" subtitle="考点1 公检法组织体系 · 两条纵向线" title="领导与监督">
      <div
        data-layout="twin-vertical-line-bay"
        data-visual-anchor="role-pair"
        data-text-treatments="chip,label-block,external-negation"
        data-visual-grammar="procuratorate-line-passes-orders-downward-as-one-body,court-line-observes-trial-grade-independence,supervision-travels-through-appeal-retrial-and-death-review,fact-evidence-requests-never-travel-up-the-court-line"
        data-focal-channels="connector,contrast,enclosure,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="检察院上下一体：领导与被领导；法院审级独立：监督与被监督" style={{position: 'absolute', inset: 0}}>
          <div style={{position: 'absolute', left: 30, top: -10, width: 820, height: 780, backgroundColor: `${C.procurate}0D`, border: `3px dashed ${C.procurate}55`, borderRadius: 14, opacity: interpolate(frame, [0, 24], [0, 1], clamp)}} />
          <div style={{position: 'absolute', left: 950, top: -10, width: 820, height: 780, backgroundColor: `${C.court}0D`, border: `3px dashed ${C.court}55`, borderRadius: 14, opacity: interpolate(frame, [90, 114], [0, 1], clamp)}} />

          <div data-final-knowledge="procuratorate-line" style={{position: 'absolute', left: 0, top: 0, width: 880, height: 762}}>
            <NodeBadge accent={C.procurate} delay={0} frame={frame} label="最高检" role="条线顶端" x={356} y={0} />
            <DropLine accent={C.procurate} frame={frame} height={92} progress={procurateProgress} x={440} y={86} />
            <NodeBadge accent={C.procurate} delay={60} frame={frame} label="上级检" role="可撤回不当抗诉" x={356} y={186} />
            <DropLine accent={C.procurate} frame={frame} height={92} progress={procurateProgress} x={440} y={272} />
            <NodeBadge accent={C.procurate} delay={80} frame={frame} label="下级检" role="执行命令" x={356} y={372} />
            <div
              style={{
                position: 'absolute',
                left: 60,
                top: 486,
                width: 760,
                backgroundColor: C.procurateSoft,
                border: `3px solid ${C.procurate}`,
                borderRadius: 10,
                padding: '16px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                ...enter(frame, 110, 24),
              }}
            >
              <Chip color={C.procurate} label="领导与被领导 · 上下一体" solid />
              <div style={{fontSize: 23, lineHeight: 1.45, color: C.procurateInk, fontWeight: 700}}>
                重大办案事项由<ThinUnderline color={C.procurateInk}>检察长决定</ThinUnderline>
                ；以检察院名义制发的文书由检察长签发，职权范围内<ThinUnderline color={C.procurateInk}>可授权检察官</ThinUnderline>
              </div>
            </div>
          </div>

          <div data-final-knowledge="court-line" style={{position: 'absolute', left: 920, top: 0, width: 880, height: 762}}>
            <NodeBadge accent={C.court} delay={90} frame={frame} label="最高法" role="条线顶端" x={356} y={0} />
            <DropLine accent={C.court} dashed frame={frame} height={92} progress={courtProgress} x={440} y={86} />
            <NodeBadge accent={C.court} delay={130} frame={frame} label="上级法" role="只监督不代办" x={356} y={186} />
            <DropLine accent={C.court} dashed frame={frame} height={92} progress={courtProgress} x={440} y={272} />
            <NodeBadge accent={C.court} delay={150} frame={frame} label="下级法" role="依法独立审理" x={356} y={372} />
            <div
              style={{
                position: 'absolute',
                left: 60,
                top: 486,
                width: 760,
                backgroundColor: C.courtSoft,
                border: `3px solid ${C.court}`,
                borderRadius: 10,
                padding: '16px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                ...enter(frame, 180, 24),
              }}
            >
              <Chip color={C.court} label="监督与被监督 · 审级独立" solid />
              <div style={{fontSize: 23, lineHeight: 1.45, color: C.courtInk, fontWeight: 700}}>
                <ExternalNegation color={C.courtInk}>
                  事实、证据问题不得请示上级；<SoftHighlight color={C.court}>法律适用</SoftHighlight>可以请示
                </ExternalNegation>
              </div>
              <div style={{display: 'flex', gap: 10, flexWrap: 'wrap'}}>
                <Chip color={C.court} label="二审" />
                <Chip color={C.court} label="再审" />
                <Chip color={C.court} label="死刑复核" />
                <span style={{fontSize: 22, color: C.courtInk, fontWeight: 900, alignSelf: 'center'}}>= 监督途径</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RelayShell>
  );
};

// ---------------------------------------------------------------
// Scene 02 — 侦查权版图
// ---------------------------------------------------------------

export const InvestigationMapScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <RelayShell accent={C.police} code="02" subtitle="考点1 公检法组织体系 · 侦查职权版图" title="侦查权驿站图">
      <div
        data-layout="central-hub-with-four-outpost-posts"
        data-visual-anchor="concept-icon"
        data-text-treatments="chip,soft-highlight,external-negation"
        data-visual-grammar="public-security-hub-handles-ordinary-criminal-cases,four-outposts-exercise-similar-investigation-power-in-their-own-terms,prison-post-carries-two-negation-tags,prison-excluded-matters-fall-to-the-procuratorate"
        data-focal-channels="enclosure,icon,locator,contrast"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="公安管一般刑事案件；四类机关在各自职权内行使类似侦查权" style={{position: 'absolute', inset: 0}}>
          <RelayLink frame={frame} delay={140} x1={640} y1={250} x2={444} y2={96} />
          <RelayLink frame={frame} delay={160} x1={1160} y1={250} x2={1296} y2={96} />
          <RelayLink frame={frame} delay={180} x1={640} y1={296} x2={444} y2={452} />
          <RelayLink frame={frame} delay={200} x1={1160} y1={296} x2={1296} y2={452} />

          <div data-final-knowledge="police-hub" style={{position: 'absolute', left: 640, top: 210, width: 520, ...enter(frame, 0, 26)}}>
            <div
              style={{
                backgroundColor: C.police,
                color: '#FFFFFF',
                borderRadius: 12,
                padding: '22px 26px',
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                boxShadow: '0 8px 22px rgba(42,66,55,0.35)',
              }}
            >
              <Siren size={44} strokeWidth={2.4} style={{flexShrink: 0}} />
              <div>
                <div style={{fontSize: 34, fontWeight: 950, lineHeight: 1.2}}>公安机关</div>
                <div style={{fontSize: 22, lineHeight: 1.4, opacity: 0.92}}>一般刑事案件的侦查</div>
              </div>
            </div>
          </div>

          {[
            {icon: Shield, label: '国家安全机关', x: 40, y: 40, delay: 60},
            {icon: Anchor, label: '军队保卫部门', x: 1300, y: 40, delay: 90},
            {icon: Waves, label: '中国海警局', x: 40, y: 430, delay: 120},
          ].map((post) => (
            <div key={post.label} style={{position: 'absolute', left: post.x, top: post.y, ...enter(frame, post.delay, 24)}}>
              <div
                style={{
                  width: 400,
                  backgroundColor: C.paper,
                  border: `3px solid ${C.police}`,
                  borderRadius: 10,
                  padding: '14px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                }}
              >
                <post.icon size={30} strokeWidth={2.5} style={{color: C.police, flexShrink: 0}} />
                <div style={{fontSize: 25, fontWeight: 950, color: C.policeInk, lineHeight: 1.3}}>{post.label}</div>
              </div>
              <div style={{fontSize: 21, color: C.inkSoft, fontWeight: 700, marginTop: 6, paddingLeft: 6}}>各自职权范围内 · 类似侦查权</div>
            </div>
          ))}

          <div data-final-knowledge="prison-post" style={{position: 'absolute', left: 1300, top: 300, width: 500, height: 420, ...enter(frame, 150, 26)}}>
            <Tile accent={C.banner} delay={150} frame={frame} height={420} icon={Building2} title="监狱" width={500} x={0} y={0}>
              <div style={{fontSize: 22, lineHeight: 1.4, color: C.ink, fontWeight: 700}}>
                罪犯在监狱内犯罪的案件
                <br />
                <SoftHighlight color={C.banner}>由监狱侦查</SoftHighlight>
              </div>
              <div data-final-knowledge="prison-exclusion-tags" style={{display: 'flex', flexDirection: 'column', gap: 10, marginTop: 4}}>
                <ExternalNegation color={C.procurateInk}>狱警职务犯罪（如虐待被监管人罪）→ 归检察院</ExternalNegation>
                <ExternalNegation color={C.procurateInk}>入监前的漏罪 → 不由监狱立案</ExternalNegation>
              </div>
            </Tile>
          </div>

          <div
            data-final-knowledge="hub-outpost-links"
            style={{
              position: 'absolute',
              left: 640,
              top: 356,
              width: 520,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              ...enter(frame, 210, 0),
            }}
          >
            <Chip color={C.police} label="四类驿站 · 各管一段" solid />
          </div>
        </div>
      </div>
    </RelayShell>
  );
};

// ---------------------------------------------------------------
// Scene 03 — 检察院内部办案规则
// ---------------------------------------------------------------

export const ProcuratorateRulesScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <RelayShell accent={C.procurate} code="03" subtitle="考点1 公检法组织体系 · 检察办案规则" title="检察内部令牌">
      <div
        data-layout="case-handling-rules-with-filing-route"
        data-visual-anchor="flow-path"
        data-text-treatments="stamp,thin-underline,label-block"
        data-visual-grammar="major-matters-are-decided-by-the-chief-procurator,documents-are-issued-under-his-signature-with-delegable-matters,case-groups-name-one-lead-prosecutor,own-case-investigation-files-at-city-level"
        data-focal-channels="connector,contrast,enclosure,locator"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-focal-rule="重大事项检察长决定，文书检察长签发（可授权）" style={{position: 'absolute', inset: 0}}>
          <div style={{position: 'absolute', left: 0, top: 0, width: 880, height: 762}}>
            <div data-final-knowledge="handling-organization-rule" style={{position: 'absolute', left: 0, top: 0, width: 880, ...enter(frame, 0, 28)}}>
              <Tile accent={C.procurate} delay={0} frame={frame} height={180} icon={Stamp} title="办案组织" width={880} x={0} y={0}>
                <div style={{fontSize: 24, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                  一名检察官独任办理，或两名以上检察官组成办案组
                </div>
              </Tile>
            </div>
            <div data-final-knowledge="lead-prosecutor-rule" style={{position: 'absolute', left: 0, top: 200, width: 880, ...enter(frame, 60, 28)}}>
              <Tile accent={C.procurate} delay={60} frame={frame} height={180} icon={Stamp} title="主办检察官" width={880} x={0} y={0}>
                <div style={{fontSize: 24, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                  办案组办理的，检察长应当指定一名<ThinUnderline color={C.procurateInk}>主办检察官</ThinUnderline>
                </div>
              </Tile>
            </div>
            <div data-final-knowledge="document-signing-rule" style={{position: 'absolute', left: 0, top: 400, width: 880, ...enter(frame, 120, 28)}}>
              <Tile accent={C.procurate} delay={120} frame={frame} height={180} icon={FileCheck2} title="文书签发" width={880} x={0} y={0}>
                <div style={{fontSize: 24, lineHeight: 1.5, color: C.ink, fontWeight: 700}}>
                  以检察院名义制发的文书由<ThinUnderline color={C.procurateInk}>检察长签发</ThinUnderline>
                  ；检察官职权范围内的事项，检察长<SoftHighlight color={C.procurate}>可以授权</SoftHighlight>检察官签发
                </div>
              </Tile>
            </div>
          </div>

          <div data-final-knowledge="city-level-filing-route" style={{position: 'absolute', left: 920, top: 0, width: 880, height: 762, ...enter(frame, 190, 30)}}>
            <Tile accent={C.banner} delay={190} frame={frame} height={740} icon={Mail} title="自侦案件的立案路线" width={880} x={0} y={0}>
              <div style={{fontSize: 23, lineHeight: 1.5, color: C.ink, fontWeight: 700, marginBottom: 8}}>
                检察院直接受理侦查的案件，由<ThinUnderline color={C.procurateInk}>设区的市级检察院</ThinUnderline>立案侦查
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 12, marginTop: 6}}>
                {[
                  {label: '基层院', note: '发现犯罪线索', accent: C.line},
                  {label: '↓ 报送决定', note: '应当报市级院决定立案', accent: C.procurate},
                  {label: '市级院', note: '立案侦查', accent: C.procurate},
                ].map((step) => (
                  <div
                    key={step.label}
                    style={{
                      backgroundColor: step.accent === C.line ? C.paperAlt : C.procurateSoft,
                      border: `3px solid ${step.accent}`,
                      borderRadius: 9,
                      padding: '12px 18px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 14,
                    }}
                  >
                    <span style={{fontSize: 25, fontWeight: 950, color: step.accent === C.line ? C.inkSoft : C.procurateInk}}>{step.label}</span>
                    <span style={{fontSize: 22, color: C.ink, fontWeight: 700}}>{step.note}</span>
                  </div>
                ))}
              </div>
              <div style={{fontSize: 22, lineHeight: 1.45, color: C.ink, fontWeight: 700, marginTop: 12}}>
                市级院也可<SoftHighlight color={C.banner}>交基层院立案侦查</SoftHighlight>，或要求基层院协助侦查
              </div>
              <div style={{marginTop: 'auto', display: 'flex', justifyContent: 'center'}}>
                <Chip color={C.procurate} label="自侦：市级立案为原则" solid />
              </div>
            </Tile>
          </div>
        </div>
      </div>
    </RelayShell>
  );
};

// ---------------------------------------------------------------
// MAIN COMPOSITION
// ---------------------------------------------------------------
export const OrgansRelayMap: React.FC = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: C.brick, width: 1920, height: 1080}}
  >
    <TimelineSequence name="01" start={SCENES['vertical-lines-compare'].start} duration={SCENES['vertical-lines-compare'].duration}>
      <VerticalLinesScene />
    </TimelineSequence>
    <TimelineSequence name="02" start={SCENES['investigation-organs-map'].start} duration={SCENES['investigation-organs-map'].duration}>
      <InvestigationMapScene />
    </TimelineSequence>
    <TimelineSequence name="03" start={SCENES['procuratorate-rules-route'].start} duration={SCENES['procuratorate-rules-route'].duration}>
      <ProcuratorateRulesScene />
    </TimelineSequence>
  </AbsoluteFill>
);
