import type {CSSProperties, ReactNode} from 'react';
import {
  ALargeSmall,
  Archive,
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  Ban,
  Building2,
  Check,
  ClipboardList,
  FileQuestion,
  FileText,
  Gavel,
  Globe,
  History,
  Landmark,
  Layers,
  MessageSquareText,
  Network,
  Quote,
  Repeat2,
  Scale,
  ScrollText,
  ShieldAlert,
  Sparkles,
  Users,
} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  paper: '#F2EDE1',
  panel: '#FBF7EC',
  ink: '#1C1F1E',
  plaque: '#23312F',
  azurite: '#2C5C8F',
  cinnabar: '#C8442F',
  gamboge: '#B87A1C',
  malachite: '#2E7D68',
  indigo: '#4A4685',
  rouge: '#9C3A63',
  gold: '#AE8A46',
  line: '#8B836F',
} as const;

const prog = (frame: number, delay: number, span = 18) => interpolate(frame, [delay, delay + span], [0, 1], CLAMP);

const Enter = ({
  children,
  delay = 0,
  distance = 26,
  from = 'up',
  marker,
  span = 18,
  style,
}: {
  readonly children: ReactNode;
  readonly delay?: number;
  readonly distance?: number;
  readonly from?: 'left' | 'none' | 'right' | 'up';
  readonly marker?: string;
  readonly span?: number;
  readonly style?: CSSProperties;
}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, span);
  const origin =
    from === 'left' ? `-${distance}px 0px` : from === 'right' ? `${distance}px 0px` : from === 'none' ? '0px 0px' : `0px ${distance}px`;
  return (
    <div
      data-final-knowledge={marker}
      style={{
        ...style,
        opacity: p,
        translate: interpolate(frame, [delay, delay + span], [origin, '0px 0px'], CLAMP),
      }}
    >
      {children}
    </div>
  );
};

const LabelBlock = ({children, tone = C.plaque}: {readonly children: ReactNode; readonly tone?: string}) => (
  <span style={{display: 'inline-block', padding: '5px 13px', backgroundColor: tone, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 1}}>
    {children}
  </span>
);

const BrushUnderline = ({children, color = C.cinnabar, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
  const frame = useCurrentFrame();
  return (
    <span style={{position: 'relative', display: 'inline-block'}}>
      {children}
      <span
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: -7,
          height: 5,
          backgroundColor: color,
          scale: `${prog(frame, delay, 24)} 1`,
          transformOrigin: 'left center',
        }}
      />
    </span>
  );
};

const Soft = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}22`, padding: '2px 8px'}}>{children}</span>
);

const Chip = ({accent = C.line, children}: {readonly accent?: string; readonly children: ReactNode}) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '3px 9px',
      border: `2px solid ${accent}`,
      backgroundColor: `${accent}14`,
      fontSize: 22,
      fontWeight: 850,
      color: C.plaque,
    }}
  >
    {children}
  </span>
);

const Seal = ({children, color = C.cinnabar, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '9px 17px',
        border: `4px solid ${color}`,
        color,
        fontSize: 26,
        fontWeight: 950,
        opacity: p,
        scale: 0.88 + p * 0.12,
        rotate: '-1.5deg',
      }}
    >
      {children}
    </span>
  );
};

const Negation = ({children, delay = 0, icon}: {readonly children: ReactNode; readonly delay?: number; readonly icon: ReactNode}) => {
  const frame = useCurrentFrame();
  return (
    <span style={{display: 'inline-flex', alignItems: 'center', gap: 12, opacity: prog(frame, delay, 16)}}>
      {icon}
      <span style={{fontSize: 25, fontWeight: 880, color: C.plaque}}>{children}</span>
    </span>
  );
};

const Shell = ({children, code, kicker, title}: {readonly children: ReactNode; readonly code: string; readonly kicker: string; readonly title: string}) => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: C.paper, color: C.ink, fontFamily: 'var(--inkloom-animation-body)', overflow: 'hidden'}}
  >
    <div style={{position: 'absolute', left: 26, top: 26, right: 26, bottom: 26, border: `3px solid ${C.gold}`}} />
    <div style={{position: 'absolute', left: 37, top: 37, right: 37, bottom: 37, border: `1px solid ${C.gold}`}} />
    <div style={{position: 'absolute', left: 72, top: 0, width: 10, height: 42, backgroundColor: C.cinnabar}} />
    <header
      style={{
        position: 'absolute',
        left: 72,
        right: 72,
        top: 44,
        height: 96,
        display: 'grid',
        gridTemplateColumns: '152px 1fr auto',
        alignItems: 'center',
        gap: 22,
        borderBottom: `3px solid ${C.ink}`,
      }}
    >
      <b style={{fontSize: 21, fontWeight: 950, color: C.cinnabar, letterSpacing: 1}}>考点17 / {code}</b>
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.azurite, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Bay = ({
  accent,
  alias,
  arrow,
  icon,
  index,
  marker,
  markerText,
  name,
  ordinal,
  sourceIcon,
}: {
  readonly accent: string;
  readonly alias?: string;
  readonly arrow: ReactNode;
  readonly icon: ReactNode;
  readonly index: number;
  readonly marker: string;
  readonly markerText: ReactNode;
  readonly name: string;
  readonly ordinal: string;
  readonly sourceIcon: ReactNode;
}) => {
  const frame = useCurrentFrame();
  const delay = 24 + index * 26;
  const sweep = prog(frame, delay, 20);
  return (
    <div
      data-final-knowledge={marker}
      style={{
        position: 'absolute',
        left: (index % 3) * 603,
        top: Math.floor(index / 3) * 326 + 4,
        width: 570,
        height: 304,
        backgroundColor: C.panel,
        border: `3px solid ${accent}`,
        borderTopWidth: 11,
        padding: '20px 22px',
        display: 'flex',
        flexDirection: 'column',
        opacity: sweep,
        scale: 0.95 + sweep * 0.05,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '100%',
          backgroundColor: accent,
          opacity: (1 - sweep) * 0.2,
          scale: `${sweep} 1`,
          transformOrigin: 'left center',
          pointerEvents: 'none',
        }}
      />
      <div style={{position: 'relative', display: 'flex', alignItems: 'center', gap: 11}}>
        {sourceIcon}
        {arrow}
        {icon}
        <span style={{marginLeft: 'auto', fontSize: 20, fontWeight: 900, color: C.gold, letterSpacing: 2}}>{ordinal}</span>
      </div>
      <div style={{position: 'relative', marginTop: 13, fontSize: 33, fontWeight: 950, lineHeight: 1.16, color: C.plaque}}>{name}</div>
      {alias ? (
        <div style={{position: 'relative', marginTop: 8, fontSize: 22, fontWeight: 850, color: accent}}>
          <Soft color={accent}>{alias}</Soft>
        </div>
      ) : null}
      <div style={{position: 'relative', marginTop: 'auto'}}>
        <LabelBlock>判断标志</LabelBlock>
        <div style={{marginTop: 10, fontSize: 26, fontWeight: 820, lineHeight: 1.42, color: C.ink}}>{markerText}</div>
      </div>
    </div>
  );
};

export const MethodSourcesScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="wenyi-bay" data-final-knowledge="legislator-purpose-bay" data-final-knowledge="historical-bay" data-final-knowledge="comparative-bay" data-final-knowledge="systematic-bay" data-final-knowledge="objective-purpose-bay" data-final-knowledge="marker-focus-note" */
  const statuteIcon = <FileText size={38} color={C.line} strokeWidth={2.2} />;
  const statuteArrow = <ArrowRight size={20} color={C.line} strokeWidth={2.6} />;
  return (
    <Shell code="01" kicker="先抓判断标志" title="同一条文，六种取义依据">
      <div
        data-layout="six-source-bay-grid"
        data-visual-anchor="concept-icon"
        data-text-treatments="label-block,soft-highlight,thin-underline,chip"
        data-visual-grammar="source-of-meaning,method-identification,contrast"
        data-focal-rule="judgment-marker-identifies-each-method"
        data-focal-channels="icon,enclosure,annotation,spatial,contrast"
        style={{position: 'absolute', inset: 0}}
      >
        <Bay
          accent={C.azurite}
          arrow={statuteArrow}
          icon={<ALargeSmall size={44} color={C.azurite} strokeWidth={2.2} />}
          index={0}
          marker="wenyi-bay"
          markerText={
            <>
              语词的<Soft color={C.azurite}>通常含义</Soft>或<Soft color={C.azurite}>字面意思</Soft>
            </>
          }
          name="文义解释"
          ordinal="方法一"
          sourceIcon={statuteIcon}
        />
        <Bay
          accent={C.cinnabar}
          alias="主观目的解释"
          arrow={statuteArrow}
          icon={<ScrollText size={44} color={C.cinnabar} strokeWidth={2.2} />}
          index={1}
          marker="legislator-purpose-bay"
          markerText={
            <>
              <Soft color={C.cinnabar}>立法意图</Soft> + <Soft color={C.cinnabar}>立法资料</Soft>（提案说明、审议报告）
            </>
          }
          name="立法者目的解释"
          ordinal="方法二"
          sourceIcon={statuteIcon}
        />
        <Bay
          accent={C.gamboge}
          arrow={statuteArrow}
          icon={<History size={44} color={C.gamboge} strokeWidth={2.2} />}
          index={2}
          marker="historical-bay"
          markerText={
            <span style={{display: 'inline-flex', flexWrap: 'wrap', gap: 6}}>
              <Chip accent={C.gamboge}>
                <b style={{color: C.gamboge, fontWeight: 950}}>新旧</b>立法背景
              </Chip>
              <Chip accent={C.gamboge}>
                <b style={{color: C.gamboge, fontWeight: 950}}>新旧</b>法律规定
              </Chip>
              <Chip accent={C.gamboge}>
                <b style={{color: C.gamboge, fontWeight: 950}}>新旧</b>司法实践对比
              </Chip>
            </span>
          }
          name="历史解释"
          ordinal="方法三"
          sourceIcon={statuteIcon}
        />
        <Bay
          accent={C.malachite}
          arrow={statuteArrow}
          icon={<Globe size={44} color={C.malachite} strokeWidth={2.2} />}
          index={3}
          marker="comparative-bay"
          markerText={
            <>
              参考<Soft color={C.malachite}>国外资料</Soft>（判例、学说等）
            </>
          }
          name="比较解释"
          ordinal="方法四"
          sourceIcon={statuteIcon}
        />
        <Bay
          accent={C.indigo}
          alias="逻辑解释 · 系统解释"
          arrow={statuteArrow}
          icon={<Network size={44} color={C.indigo} strokeWidth={2.2} />}
          index={4}
          marker="systematic-bay"
          markerText={
            <>
              联系<Soft color={C.indigo}>其他条文</Soft>
            </>
          }
          name="体系解释"
          ordinal="方法五"
          sourceIcon={statuteIcon}
        />
        <Bay
          accent={C.rouge}
          arrow={statuteArrow}
          icon={<Scale size={44} color={C.rouge} strokeWidth={2.2} />}
          index={5}
          marker="objective-purpose-bay"
          markerText={
            <>
              结合<Soft color={C.rouge}>当前社会客观发展需要</Soft>，解决
              <Soft color={C.rouge}>新型案件</Soft>
            </>
          }
          name="客观目的解释"
          ordinal="方法六"
          sourceIcon={statuteIcon}
        />
        <div
          data-final-knowledge="marker-focus-note"
          style={{
            position: 'absolute',
            left: 0,
            top: 654,
            width: 1776,
            height: 92,
            backgroundColor: C.plaque,
            display: 'flex',
            alignItems: 'center',
            gap: 22,
            padding: '0 34px',
            opacity: prog(frame, 206, 20),
          }}
        >
          <Scale size={42} color={C.gold} strokeWidth={2.2} />
          <span style={{fontSize: 30, fontWeight: 900, color: C.paper}}>
            不同解释方法的
            <BrushUnderline color={C.gold} delay={228}>
              判断标志
            </BrushUnderline>
            是绝对重点，每年必考且不止一道
          </span>
        </div>
      </div>
    </Shell>
  );
};

const CYCLE_ARCS = [
  {d: 'M 627.80 153.80 A 230 230 0 0 1 709.10 350.05', length: 221},
  {d: 'M 539.50 552.20 A 230 230 0 0 1 420.50 552.20', length: 121},
  {d: 'M 250.90 350.05 A 230 230 0 0 1 317.40 167.40', length: 201},
] as const;

const CycleArcs = ({frame}: {readonly frame: number}) => (
  <svg style={{position: 'absolute', left: 0, top: 0, width: 960, height: 752}} viewBox="0 0 960 752">
    <defs>
      <marker id="cycle-arrow" markerHeight="7" markerWidth="7" orient="auto" refX="6.5" refY="5" viewBox="0 0 10 10">
        <path d="M 0 0 L 10 5 L 0 10 z" fill={C.gold} />
      </marker>
    </defs>
    {CYCLE_ARCS.map((arc, index) => (
      <path
        d={arc.d}
        fill="none"
        key={arc.d}
        markerEnd="url(#cycle-arrow)"
        stroke={C.gold}
        strokeDasharray={arc.length}
        strokeDashoffset={arc.length * (1 - interpolate(frame, [58 + index * 30, 92 + index * 30], [0, 1], CLAMP))}
        strokeLinecap="round"
        strokeWidth={5}
      />
    ))}
  </svg>
);

const CycleStation = ({
  accent,
  children,
  delay,
  left,
  top,
}: {
  readonly accent: string;
  readonly children: ReactNode;
  readonly delay: number;
  readonly left: number;
  readonly top: number;
}) => (
  <Enter
    delay={delay}
    style={{
      position: 'absolute',
      left,
      top,
      width: 330,
      height: 122,
      backgroundColor: C.panel,
      border: `3px solid ${accent}`,
      borderLeftWidth: 10,
      padding: '13px 18px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 9,
    }}
  >
    {children}
  </Enter>
);

const RoleCard = ({
  accent,
  arrow,
  audience,
  delay,
  hint,
  icon,
  marker,
  method,
  top,
}: {
  readonly accent: string;
  readonly arrow: ReactNode;
  readonly audience: string;
  readonly delay: number;
  readonly hint: ReactNode;
  readonly icon: ReactNode;
  readonly marker: string;
  readonly method: string;
  readonly top: number;
}) => (
  <Enter
    delay={delay}
    marker={marker}
    style={{
      position: 'absolute',
      left: 0,
      top,
      width: 736,
      height: 250,
      backgroundColor: C.panel,
      border: `3px solid ${accent}`,
      borderTopWidth: 10,
      padding: '26px 30px',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <div style={{display: 'flex', alignItems: 'center', gap: 22}}>
      {icon}
      <div>
        <div style={{fontSize: 36, fontWeight: 950, lineHeight: 1.2, color: C.plaque}}>{audience}</div>
        <div style={{marginTop: 7, fontSize: 24, fontWeight: 760, color: C.ink}}>{hint}</div>
      </div>
    </div>
    <div style={{display: 'flex', alignItems: 'center', gap: 18, marginTop: 'auto'}}>
      {arrow}
      <span style={{display: 'inline-block', padding: '11px 24px', backgroundColor: accent, color: C.paper, fontSize: 32, fontWeight: 950}}>{method}</span>
    </div>
  </Enter>
);

export const HermeneuticCircleScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="negation-isolated-reading" data-final-knowledge="cycle-station-provision" data-final-knowledge="cycle-station-system" data-final-knowledge="cycle-station-meaning" data-final-knowledge="cycle-medallion-systematic" data-final-knowledge="public-reader-role" data-final-knowledge="legal-professional-role" */
  return (
    <Shell code="02" kicker="反对孤立理解" title="解释学循环：条文必须放回体系中">
      <div
        data-layout="cycle-ring-with-role-pair"
        data-visual-anchor="flow-path"
        data-text-treatments="soft-highlight,stamp,external-negation,label-block"
        data-visual-grammar="hermeneutic-cycle,systematic-relation,interpreter-role"
        data-focal-rule="provision-meaning-is-fixed-only-inside-the-whole-legal-system"
        data-focal-channels="icon,motion,enclosure,annotation,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{position: 'absolute', left: 0, top: 0, width: 960, height: 752}}>
          <CycleArcs frame={frame} />
          <div
            data-final-knowledge="negation-isolated-reading"
            style={{
              position: 'absolute',
              left: 20,
              top: 18,
              width: 290,
              height: 100,
              border: `3px solid ${C.cinnabar}`,
              backgroundColor: '#C8442F12',
              padding: '14px 16px',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              opacity: prog(frame, 16, 18),
            }}
          >
            <Ban size={30} color={C.cinnabar} strokeWidth={2.6} />
            <span style={{fontSize: 23, fontWeight: 900, color: C.plaque, lineHeight: 1.3}}>反对孤立看待法律规定</span>
          </div>
          <CycleStation accent={C.azurite} delay={8} left={320} top={39}>
            <div data-final-knowledge="cycle-station-provision" style={{fontSize: 30, fontWeight: 950, color: C.plaque}}>
              法律规定
            </div>
            <div
              data-stateful-source="provision-into-system"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 9,
                alignSelf: 'flex-start',
                padding: '5px 10px',
                border: `2px dashed ${C.azurite}`,
                backgroundColor: '#2C5C8F14',
              }}
            >
              <FileText size={21} color={C.azurite} strokeWidth={2.3} />
              <span style={{fontSize: 22, fontWeight: 830, color: C.azurite}}>被解释的某一条文</span>
            </div>
          </CycleStation>
          <CycleStation accent={C.malachite} delay={72} left={559} top={384}>
            <div data-final-knowledge="cycle-station-system" style={{fontSize: 27, fontWeight: 950, color: C.plaque, whiteSpace: 'nowrap'}}>
              放回整个法律体系
            </div>
            <div
              data-stateful-terminal="provision-into-system"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 9,
                alignSelf: 'flex-start',
                padding: '5px 10px',
                border: `2px solid ${C.malachite}`,
                backgroundColor: '#2E7D6818',
              }}
            >
              <FileText size={21} color={C.malachite} strokeWidth={2.3} />
              <span style={{fontSize: 22, fontWeight: 830, color: C.malachite}}>条文已在体系中定位</span>
            </div>
          </CycleStation>
          <CycleStation accent={C.gamboge} delay={104} left={121} top={384}>
            <div data-final-knowledge="cycle-station-meaning" style={{fontSize: 27, fontWeight: 950, color: C.plaque, whiteSpace: 'nowrap'}}>
              含义在体系中确定
            </div>
            <div style={{fontSize: 22, fontWeight: 800, color: C.ink}}>
              再回到
              <Soft color={C.gamboge}>原来那条文</Soft>
            </div>
          </CycleStation>
          <Enter
            delay={168}
            style={{
              position: 'absolute',
              left: 156,
              top: 580,
              width: 648,
              height: 168,
              backgroundColor: C.plaque,
              border: `4px solid ${C.gold}`,
              padding: '20px 30px',
              display: 'flex',
              alignItems: 'center',
              gap: 26,
            }}
          >
            <Network size={74} color={C.gold} strokeWidth={2} />
            <div>
              <div data-final-knowledge="cycle-medallion-systematic" style={{fontSize: 40, fontWeight: 950, color: C.paper, lineHeight: 1.15}}>
                体系解释
              </div>
              <div style={{marginTop: 9, fontSize: 24, fontWeight: 800, color: C.gold}}>解释学循环的直接产物</div>
            </div>
            <div style={{marginLeft: 'auto'}}>
              <Seal color={C.gold} delay={190}>
                每年必考
              </Seal>
            </div>
          </Enter>
        </div>
        <div style={{position: 'absolute', left: 1040, top: 0, width: 736, height: 752}}>
          <Enter delay={16} style={{position: 'absolute', left: 0, top: 6}}>
            <LabelBlock tone={C.indigo}>解释者身份影响方法偏好</LabelBlock>
          </Enter>
          <RoleCard
            accent={C.azurite}
            arrow={<ArrowRight size={36} color={C.line} strokeWidth={2.6} />}
            audience="社会公众"
            delay={40}
            hint={
              <>
                往往只能作<Soft color={C.azurite}>字面直白</Soft>解读
              </>
            }
            icon={<Users size={66} color={C.azurite} strokeWidth={2.1} />}
            marker="public-reader-role"
            method="文义解释"
            top={94}
          />
          <RoleCard
            accent={C.indigo}
            arrow={<ArrowRight size={36} color={C.line} strokeWidth={2.6} />}
            audience="法律人"
            delay={92}
            hint={
              <>
                倾向于把条文<Soft color={C.indigo}>放回体系中</Soft>把握
              </>
            }
            icon={<Gavel size={66} color={C.indigo} strokeWidth={2.1} />}
            marker="legal-professional-role"
            method="体系解释"
            top={380}
          />
          <Enter delay={150} style={{position: 'absolute', left: 0, top: 664, display: 'flex', alignItems: 'center', gap: 14}}>
            <Ban size={28} color={C.cinnabar} strokeWidth={2.6} />
            <span style={{fontSize: 24, fontWeight: 850, color: C.plaque}}>
              身份只是倾向，
              <span style={{color: C.cinnabar, fontWeight: 950}}>不是判断依据</span>
            </span>
          </Enter>
        </div>
      </div>
    </Shell>
  );
};

const RankStep = ({
  arrow,
  cue,
  index,
  marker,
  name,
  ordinal,
}: {
  readonly arrow: ReactNode;
  readonly cue: string;
  readonly index: number;
  readonly marker: string;
  readonly name: string;
  readonly ordinal: string;
}) => (
  <Enter
    delay={28 + index * 30}
    marker={marker}
    style={{
      position: 'absolute',
      left: 150,
      top: 40 + index * 104,
      width: 1030,
      height: 92,
      backgroundColor: index === 0 ? C.plaque : C.panel,
      border: `3px solid ${index === 0 ? C.gold : C.line}`,
      borderLeftWidth: 10,
      padding: '0 24px',
      display: 'flex',
      alignItems: 'center',
      gap: 22,
    }}
  >
    <span
      style={{
        display: 'inline-grid',
        placeItems: 'center',
        width: 62,
        height: 62,
        backgroundColor: index === 0 ? C.gold : C.azurite,
        color: C.paper,
        fontSize: 32,
        fontWeight: 950,
      }}
    >
      {ordinal}
    </span>
    <span style={{fontSize: 36, fontWeight: 950, color: index === 0 ? C.paper : C.plaque}}>
      {index === 0 ? (
        <BrushUnderline color={C.gold} delay={58}>
          {name}
        </BrushUnderline>
      ) : (
        name
      )}
    </span>
    <span style={{fontSize: 24, fontWeight: 800, color: index === 0 ? C.gold : C.ink}}>{cue}</span>
    <span style={{marginLeft: 'auto', fontSize: 22, fontWeight: 850, color: index === 0 ? C.gold : C.line}}>位阶 {ordinal}</span>
    {index < 5 ? arrow : null}
  </Enter>
);

const TraceArrow = ({delay, color = C.azurite}: {readonly delay: number; readonly color?: string}) => {
  const frame = useCurrentFrame();
  return (
    <svg style={{width: 44, height: 26, flexShrink: 0, alignSelf: 'center'}} viewBox="0 0 44 26">
      <defs>
        <marker id="practice-trace-arrow-head" markerHeight="6" markerWidth="6" orient="auto" refX="6.5" refY="4.5" viewBox="0 0 9 9">
          <path d="M 0 0 L 9 4.5 L 0 9 z" fill={color} />
        </marker>
      </defs>
      <path
        d="M 2 13 L 34 13"
        fill="none"
        markerEnd="url(#practice-trace-arrow-head)"
        stroke={color}
        strokeDasharray={32}
        strokeDashoffset={32 * (1 - prog(frame, delay, 16))}
        strokeLinecap="round"
        strokeWidth={4}
      />
    </svg>
  );
};

const ModeCard = ({
  accent,
  delay,
  gloss,
  glyph,
  name,
}: {
  readonly accent: string;
  readonly delay: number;
  readonly gloss: string;
  readonly glyph: ReactNode;
  readonly name: string;
}) => (
  <Enter
    delay={delay}
    distance={14}
    span={14}
    style={{
      flex: 1,
      border: `3px solid ${accent}`,
      borderTopWidth: 7,
      backgroundColor: C.paper,
      padding: '9px 8px',
      display: 'flex',
      flexDirection: 'column',
      gap: 9,
    }}
  >
    <div style={{display: 'flex', alignItems: 'center', gap: 6}}>
      {glyph}
      <span style={{fontSize: 23, fontWeight: 950, color: accent, whiteSpace: 'nowrap'}}>{name}</span>
    </div>
    <Soft color={accent}>
      <span style={{fontSize: 22, fontWeight: 850, color: C.plaque}}>{gloss}</span>
    </Soft>
  </Enter>
);

export const RankOrderScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="rank-step-1" data-final-knowledge="rank-step-2" data-final-knowledge="rank-step-3" data-final-knowledge="rank-step-4" data-final-knowledge="rank-step-5" data-final-knowledge="rank-step-6" data-final-knowledge="mnemonic-plaque" data-final-knowledge="override-bracket" data-final-knowledge="practice-alternation" data-final-knowledge="practice-note" */
  const stepArrow = <ArrowDownRight size={32} color={C.line} strokeWidth={2.6} />;
  const stepArrowGold = <ArrowDownRight size={32} color={C.gold} strokeWidth={2.6} />;
  return (
    <Shell code="03" kicker="文体主历 · 比较客观" title="六种方法的位阶与推翻通道">
      <div
        data-layout="descending-rank-ladder"
        data-visual-anchor="timeline-gate"
        data-text-treatments="label-block,stamp,thin-underline,chip"
        data-visual-grammar="priority-order,override,mnemonic"
        data-focal-rule="rank-fixes-the-order-only-when-methods-conflict"
        data-focal-channels="spatial,annotation,icon,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{position: 'absolute', left: 0, top: 0, width: 1180, height: 752}}>
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 40,
              width: 130,
              height: 612,
              border: `3px solid ${C.line}`,
              backgroundColor: '#8B836F12',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '18px 0',
              opacity: prog(frame, 8, 18),
            }}
          >
            <span style={{fontSize: 26, fontWeight: 950, color: C.cinnabar}}>先</span>
            <ArrowDown size={40} color={C.line} strokeWidth={2.4} style={{margin: 'auto 0'}} />
            <span style={{fontSize: 26, fontWeight: 950, color: C.azurite}}>后</span>
          </div>
          <RankStep arrow={stepArrowGold} cue="默认首选" index={0} marker="rank-step-1" name="文义解释" ordinal="一" />
          <RankStep arrow={stepArrow} cue="联系其他条文" index={1} marker="rank-step-2" name="体系解释" ordinal="二" />
          <RankStep arrow={stepArrow} cue="主观目的" index={2} marker="rank-step-3" name="立法者目的解释" ordinal="三" />
          <RankStep arrow={stepArrow} cue="新旧对比" index={3} marker="rank-step-4" name="历史解释" ordinal="四" />
          <RankStep arrow={stepArrow} cue="参考国外" index={4} marker="rank-step-5" name="比较解释" ordinal="五" />
          <RankStep arrow={stepArrow} cue="社会客观需要" index={5} marker="rank-step-6" name="客观目的解释" ordinal="六" />
          <div
            data-final-knowledge="override-bracket"
            style={{
              position: 'absolute',
              left: 0,
              top: 672,
              width: 1180,
              height: 76,
              border: `3px dashed ${C.cinnabar}`,
              backgroundColor: '#C8442F10',
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              padding: '0 26px',
              opacity: prog(frame, 232, 20),
            }}
          >
            <Repeat2 size={40} color={C.cinnabar} strokeWidth={2.3} />
            <span style={{fontSize: 27, fontWeight: 900, color: C.plaque}}>推翻通道：有更强理由时可以越过位阶</span>
            <span style={{marginLeft: 'auto'}}>
              <Seal delay={252}>可推翻</Seal>
            </span>
          </div>
        </div>
        <div style={{position: 'absolute', left: 1230, top: 0, width: 546, height: 752}}>
          <Enter
            delay={56}
            style={{
              position: 'absolute',
              left: 0,
              top: 40,
              width: 546,
              height: 260,
              backgroundColor: C.plaque,
              border: `4px solid ${C.gold}`,
              padding: '22px 26px',
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
            }}
          >
            <div data-final-knowledge="mnemonic-plaque" style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <Quote size={34} color={C.gold} strokeWidth={2.4} />
              <span style={{fontSize: 24, fontWeight: 900, color: C.gold, letterSpacing: 2}}>记忆口诀</span>
            </div>
            <div style={{fontSize: 38, fontWeight: 950, color: C.paper, lineHeight: 1.24}}>文体主历、比较客观</div>
            <div style={{fontSize: 22, fontWeight: 800, color: C.gold, lineHeight: 1.45}}>文义 → 体系 → 立法者目的 → 历史 → 比较 → 客观目的</div>
          </Enter>
          <Enter
            delay={150}
            marker="practice-alternation"
            style={{
              position: 'absolute',
              left: 0,
              top: 332,
              width: 546,
              height: 200,
              backgroundColor: C.panel,
              border: `3px solid ${C.azurite}`,
              borderLeftWidth: 10,
              padding: '16px 26px',
              display: 'flex',
              flexDirection: 'column',
              gap: 11,
            }}
          >
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <LabelBlock>实践中</LabelBlock>
              <span style={{fontSize: 27, fontWeight: 950, color: C.plaque}}>交替综合使用</span>
            </div>
            <div style={{display: 'inline-flex', alignItems: 'center', gap: 10}}>
              <Ban size={26} color={C.cinnabar} strokeWidth={2.6} />
              <span style={{fontSize: 24, fontWeight: 880, color: C.plaque}}>
                位阶<span style={{color: C.cinnabar, fontWeight: 950}}>不是</span>机械顺序
              </span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 8, marginTop: 'auto'}}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '6px 12px',
                  border: `2px dashed ${C.azurite}`,
                  backgroundColor: '#2C5C8F14',
                }}
              >
                <span style={{fontSize: 22, fontWeight: 850, color: C.plaque}}>仅当</span>
                <span style={{fontSize: 23, fontWeight: 900, color: C.azurite}}>解释结果冲突</span>
              </span>
              <TraceArrow delay={214} />
              <span style={{padding: '8px 13px', backgroundColor: C.azurite, color: C.paper, fontSize: 23, fontWeight: 920}}>按位阶决定取舍</span>
            </div>
          </Enter>
          <Enter
            delay={196}
            marker="practice-note"
            style={{
              position: 'absolute',
              left: 0,
              top: 556,
              width: 546,
              height: 190,
              backgroundColor: C.panel,
              border: `3px solid ${C.malachite}`,
              borderLeftWidth: 10,
              padding: '14px 26px',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <LabelBlock>三种适用模式</LabelBlock>
            </div>
            <div style={{display: 'flex', gap: 12, marginTop: 'auto'}}>
              <ModeCard
                accent={C.azurite}
                delay={214}
                gloss="默认文义"
                glyph={<ArrowRight size={24} color={C.azurite} strokeWidth={2.6} />}
                name="单一模式"
              />
              <ModeCard
                accent={C.malachite}
                delay={228}
                gloss="殊途同归"
                glyph={<Layers size={24} color={C.malachite} strokeWidth={2.4} />}
                name="累积模式"
              />
              <ModeCard
                accent={C.cinnabar}
                delay={242}
                gloss="依位阶"
                glyph={<Scale size={24} color={C.cinnabar} strokeWidth={2.4} />}
                name="冲突模式"
              />
            </div>
          </Enter>
        </div>
      </div>
    </Shell>
  );
};

const BranchBody = ({children, label, tone}: {readonly children: ReactNode; readonly label: string; readonly tone: string}) => (
  <div style={{marginTop: 12}}>
    <LabelBlock tone={tone}>{label}</LabelBlock>
    <div style={{marginTop: 9, fontSize: 24, fontWeight: 800, lineHeight: 1.48, color: C.ink}}>{children}</div>
  </div>
);

const AbbrevRow = ({abbr, children, tone}: {readonly abbr: string; readonly children: ReactNode; readonly tone: string}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
    <span
      style={{
        display: 'inline-flex',
        justifyContent: 'center',
        flexShrink: 0,
        padding: '3px 8px',
        backgroundColor: tone,
        color: C.paper,
        fontSize: 22,
        fontWeight: 950,
      }}
    >
      {abbr}
    </span>
    <span style={{fontSize: 22, fontWeight: 830, color: C.ink, whiteSpace: 'nowrap'}}>{children}</span>
  </div>
);

const AuthorityColumn = ({
  accent,
  body,
  children,
  delay,
  icon,
  left,
  marker,
  name,
}: {
  readonly accent: string;
  readonly body: ReactNode;
  readonly children: ReactNode;
  readonly delay: number;
  readonly icon: ReactNode;
  readonly left: number;
  readonly marker: string;
  readonly name: string;
}) => (
  <Enter
    delay={delay}
    marker={marker}
    style={{
      position: 'absolute',
      left,
      top: 220,
      width: 552,
      height: 532,
      backgroundColor: C.panel,
      border: `3px solid ${accent}`,
      borderTopWidth: 11,
      padding: '20px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
    }}
  >
    <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
      {icon}
      <span style={{fontSize: 34, fontWeight: 950, color: C.plaque}}>{name}</span>
    </div>
    <div>{body}</div>
    <div style={{marginTop: 'auto'}}>{children}</div>
  </Enter>
);

const ForkLines = ({frame}: {readonly frame: number}) => {
  const paths = [
    'M 888 96 L 888 166 L 276 166 L 276 220',
    'M 888 96 L 888 220',
    'M 888 96 L 888 166 L 1500 166 L 1500 220',
  ];
  return (
    <svg style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 752}} viewBox="0 0 1776 752">
      <defs>
        <marker id="fork-arrow" markerHeight="7" markerWidth="7" orient="auto" refX="6.5" refY="5" viewBox="0 0 10 10">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={C.gold} />
        </marker>
      </defs>
      {paths.map((d, index) => (
        <path
          d={d}
          fill="none"
          key={d}
          markerEnd="url(#fork-arrow)"
          stroke={C.gold}
          strokeDasharray={420}
          strokeDashoffset={420 * (1 - interpolate(frame, [30 + index * 16, 74 + index * 16], [0, 1], CLAMP))}
          strokeWidth={5}
        />
      ))}
    </svg>
  );
};

export const InstitutionalSystemScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="legislative-branch" data-final-knowledge="administrative-branch" data-final-knowledge="judicial-branch" data-final-knowledge="filing-terminal" */
  return (
    <Shell code="04" kicker="立法 · 行政 · 司法" title="一元多级：谁有权作正式解释">
      <div
        data-layout="three-branch-authority-fork"
        data-visual-anchor="document-fork"
        data-text-treatments="label-block,soft-highlight,external-negation,chip"
        data-visual-grammar="institutional-competence,application-scope,filing-duty"
        data-focal-rule="only-three-institutions-issue-formal-interpretations"
        data-focal-channels="icon,connector,enclosure,contrast,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <ForkLines frame={frame} />
        <Enter
          delay={4}
          style={{
            position: 'absolute',
            left: 588,
            top: 8,
            width: 600,
            height: 88,
            backgroundColor: C.plaque,
            border: `4px solid ${C.gold}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 18,
          }}
        >
          <FileQuestion size={44} color={C.gold} strokeWidth={2.1} />
          <span style={{fontSize: 32, fontWeight: 950, color: C.paper}}>待解释的法律问题</span>
        </Enter>
        <AuthorityColumn
          accent={C.cinnabar}
          body={
            <>
              <BranchBody label="解释主体" tone={C.cinnabar}>
                <Soft color={C.cinnabar}>全国人大常委会</Soft>
              </BranchBody>
              <BranchBody label="解释内容" tone={C.plaque}>
                对法律本身进行<Soft color={C.cinnabar}>明确界限</Soft>或<Soft color={C.cinnabar}>补充规定</Soft>
              </BranchBody>
            </>
          }
          delay={62}
          icon={<Landmark size={54} color={C.cinnabar} strokeWidth={2.1} />}
          left={0}
          marker="legislative-branch"
          name="立法解释"
        >
          <BranchBody label="申请主体" tone={C.plaque}>
            <div style={{display: 'flex', flexDirection: 'column', gap: 7}}>
              <AbbrevRow abbr="两央" tone={C.cinnabar}>
                中央政府·中央军委
              </AbbrevRow>
              <AbbrevRow abbr="两高" tone={C.cinnabar}>
                最高法·最高检
              </AbbrevRow>
              <AbbrevRow abbr="三委" tone={C.cinnabar}>
                国家监委·全国人大专委会·省级人大常委会
              </AbbrevRow>
            </div>
          </BranchBody>
        </AuthorityColumn>
        <AuthorityColumn
          accent={C.azurite}
          body={
            <>
              <BranchBody label="解释主体" tone={C.azurite}>
                <Soft color={C.azurite}>国务院及其主管部门</Soft>
              </BranchBody>
              <BranchBody label="解释内容" tone={C.plaque}>
                <span style={{display: 'inline-flex', flexWrap: 'wrap', gap: 7}}>
                  <Chip accent={C.azurite}>法律应用问题</Chip>
                  <Chip accent={C.azurite}>自己制定的法规</Chip>
                  <Chip accent={C.azurite}>省级地方性法规的应用问题</Chip>
                </span>
              </BranchBody>
              <div style={{marginTop: 16}}>
                <Negation delay={140} icon={<Ban size={30} color={C.cinnabar} strokeWidth={2.6} />}>
                  地方性法规本身需明确界限的，由省级人大常委会解释
                </Negation>
              </div>
            </>
          }
          delay={96}
          icon={<Building2 size={54} color={C.azurite} strokeWidth={2.1} />}
          left={612}
          marker="administrative-branch"
          name="行政解释"
        >
          <BranchBody label="申请主体" tone={C.plaque}>
            <Soft color={C.azurite}>国务院各部门</Soft>或
            <Soft color={C.azurite}>省级政府</Soft>的法制机构
          </BranchBody>
        </AuthorityColumn>
        <AuthorityColumn
          accent={C.malachite}
          body={
            <>
              <BranchBody label="解释主体" tone={C.malachite}>
                <span style={{display: 'inline-flex', flexWrap: 'wrap', gap: 7}}>
                  <Chip accent={C.malachite}>最高人民法院</Chip>
                  <Chip accent={C.malachite}>最高人民检察院</Chip>
                </span>
                <div style={{marginTop: 8, fontSize: 22, fontWeight: 830, color: C.ink}}>
                  原则性分歧<span style={{color: C.malachite, fontWeight: 950}}>报全国人大常委会决定</span>
                </div>
              </BranchBody>
              <div
                data-stateful-source="judicial-interpretation-filing"
                style={{
                  marginTop: 14,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '7px 13px',
                  border: `2px dashed ${C.malachite}`,
                  backgroundColor: '#2E7D6816',
                }}
              >
                <FileText size={24} color={C.malachite} strokeWidth={2.3} />
                <span style={{fontSize: 23, fontWeight: 850, color: C.malachite}}>司法解释文本</span>
              </div>
            </>
          }
          delay={130}
          icon={<Gavel size={54} color={C.malachite} strokeWidth={2.1} />}
          left={1224}
          marker="judicial-branch"
          name="司法解释"
        >
          <div
            style={{
              border: `3px solid ${C.gold}`,
              backgroundColor: '#AE8A4614',
              padding: '14px 18px',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Archive size={30} color={C.gold} strokeWidth={2.3} />
              <span style={{fontSize: 25, fontWeight: 900, color: C.plaque}}>全国人大常委会</span>
            </div>
            <div style={{fontSize: 23, fontWeight: 800, lineHeight: 1.45, color: C.ink}}>
              自公布之日起
              <Soft color={C.gold}>30 日内报备案</Soft>，并由其审查
            </div>
            <div
              data-final-knowledge="filing-terminal"
              data-stateful-terminal="judicial-interpretation-filing"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                alignSelf: 'flex-start',
                padding: '8px 14px',
                backgroundColor: C.malachite,
              }}
            >
              <Check size={24} color={C.paper} strokeWidth={3} />
              <span style={{fontSize: 23, fontWeight: 880, color: C.paper}}>已备案 · 司法解释</span>
            </div>
          </div>
        </AuthorityColumn>
      </div>
    </Shell>
  );
};

const Register = ({
  children,
  label,
  tone,
  top,
}: {
  readonly children: ReactNode;
  readonly label: string;
  readonly tone: string;
  readonly top: number;
}) => (
  <div style={{position: 'absolute', left: 0, top, width: 1776, height: 232, display: 'flex', gap: 24}}>
    <div
      style={{
        width: 300,
        height: 232,
        backgroundColor: C.plaque,
        borderLeft: `10px solid ${tone}`,
        padding: '22px 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 10,
      }}
    >
      <span style={{fontSize: 28, fontWeight: 950, color: C.paper, lineHeight: 1.26}}>{label}</span>
      <span style={{fontSize: 21, fontWeight: 850, color: C.gold, letterSpacing: 1}}>效力边界</span>
    </div>
    <div style={{flex: 1, height: 232, border: `3px solid ${C.line}`, backgroundColor: C.panel, padding: '18px 24px', display: 'flex', gap: 20}}>
      {children}
    </div>
  </div>
);

const Lane = ({
  accent,
  children,
  icon,
  title,
}: {
  readonly accent: string;
  readonly children: ReactNode;
  readonly icon: ReactNode;
  readonly title: string;
}) => (
  <div style={{flex: 1, border: `3px solid ${accent}`, borderTopWidth: 8, padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
    <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
      {icon}
      <span style={{fontSize: 29, fontWeight: 950, color: C.plaque}}>{title}</span>
    </div>
    <div style={{fontSize: 24, fontWeight: 800, lineHeight: 1.46, color: C.ink}}>{children}</div>
  </div>
);

export const FormalBoundaryScene = () => (
  <Shell code="05" kicker="创造性 vs 应用性" title="正式解释的效力边界">
    <div
      data-layout="validity-boundary-registers"
      data-visual-anchor="boundary"
        data-text-treatments="stamp,external-negation,thin-underline,label-block,chip"
      data-visual-grammar="formal-validity,creative-vs-applicative,review-channel"
      data-focal-rule="legislative-interpretation-creates-while-others-may-not-contradict-the-statute"
      data-focal-channels="contrast,enclosure,icon,annotation,spatial"
      style={{position: 'absolute', inset: 0}}
    >
      <Enter delay={4} style={{position: 'absolute', inset: 0}}>
        <Register label="正式 / 非正式" tone={C.cinnabar} top={0}>
          <div data-final-knowledge="formal-trio" style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 16}}>
            <div style={{display: 'flex', gap: 12}}>
              {['立法解释', '司法解释', '行政解释'].map((name) => (
                <span
                  key={name}
                  style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 16px', backgroundColor: C.cinnabar, color: C.paper, fontSize: 26, fontWeight: 930}}
                >
                  <Check size={25} color={C.paper} strokeWidth={3} />
                  {name}
                </span>
              ))}
            </div>
            <div style={{marginTop: 'auto'}}>
              <Seal color={C.cinnabar} delay={32}>
                有正式法律效力
              </Seal>
            </div>
          </div>
          <div
            data-final-knowledge="informal-negation"
            style={{flex: 1, border: `3px dashed ${C.cinnabar}`, backgroundColor: '#C8442F10', padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 14}}
          >
            <Negation delay={56} icon={<Ban size={30} color={C.cinnabar} strokeWidth={2.6} />}>
              其余解释均为非正式解释
            </Negation>
            <div style={{fontSize: 24, fontWeight: 850, color: C.plaque, lineHeight: 1.45}}>
              学理解释、任意解释等
              <BrushUnderline delay={72}>无正式法律效力</BrushUnderline>
            </div>
          </div>
        </Register>
      </Enter>
      <Enter delay={86} style={{position: 'absolute', inset: 0}}>
        <Register label="创造性 / 应用性" tone={C.indigo} top={256}>
          <div data-final-knowledge="creative-legislative" style={{display: 'flex', flex: 1}}>
            <Lane accent={C.indigo} icon={<Sparkles size={38} color={C.indigo} strokeWidth={2.3} />} title="立法解释 · 创造性">
              可以
              <Soft color={C.indigo}>解释为名</Soft>
              实现对法律本身的调整
            </Lane>
          </div>
          <div data-final-knowledge="applicative-administrative-judicial" style={{display: 'flex', flex: 1}}>
            <Lane accent={C.malachite} icon={<ShieldAlert size={38} color={C.malachite} strokeWidth={2.3} />} title="司法 · 行政解释 · 应用性">
              以
              <Soft color={C.malachite}>不违背原有规定</Soft>
              为前提，否则违宪
            </Lane>
          </div>
        </Register>
      </Enter>
      <Enter delay={150} style={{position: 'absolute', inset: 0}}>
        <Register label="审查要求 / 建议" tone={C.azurite} top={512}>
          <div data-final-knowledge="review-request" style={{display: 'flex', flex: 1}}>
            <Lane accent={C.azurite} icon={<ClipboardList size={38} color={C.azurite} strokeWidth={2.3} />} title="审查要求 · 必须考虑">
              <span style={{display: 'inline-flex', flexWrap: 'wrap', gap: 8}}>
                <Chip accent={C.azurite}>两央</Chip>
                <Chip accent={C.azurite}>两高</Chip>
                <Chip accent={C.azurite}>监省常</Chip>
              </span>
              <span style={{display: 'block', marginTop: 8, fontSize: 22, fontWeight: 830, color: C.ink}}>即国家监委与省级人大常委会</span>
            </Lane>
          </div>
          <div data-final-knowledge="review-suggestion" style={{display: 'flex', flex: 1}}>
            <Lane accent={C.gamboge} icon={<MessageSquareText size={38} color={C.gamboge} strokeWidth={2.3} />} title="审查建议 · 需要研究">
              上述之外的
              <Soft color={C.gamboge}>其他主体</Soft>
            </Lane>
          </div>
        </Register>
      </Enter>
    </div>
  </Shell>
);

export const LegalInterpretation = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-method-sources" {...SCENES.methodSources}>
      <MethodSourcesScene />
    </TimelineSequence>
    <TimelineSequence name="02-hermeneutic-circle" {...SCENES.hermeneuticCircle}>
      <HermeneuticCircleScene />
    </TimelineSequence>
    <TimelineSequence name="03-rank-order" {...SCENES.rankOrder}>
      <RankOrderScene />
    </TimelineSequence>
    <TimelineSequence name="04-institutional-system" {...SCENES.institutionalSystem}>
      <InstitutionalSystemScene />
    </TimelineSequence>
    <TimelineSequence name="05-formal-boundary" {...SCENES.formalBoundary}>
      <FormalBoundaryScene />
    </TimelineSequence>
  </AbsoluteFill>
);
