import type {CSSProperties, ReactNode} from 'react';
import {BookOpen, Briefcase, Feather, Flag, Gavel, Landmark, Stamp} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  stone: '#4E564E',
  stoneDeep: '#3E453F',
  paper: '#F4EFDF',
  paperDim: '#E5DFC9',
  paperEdge: '#6E6B58',
  ink: '#2B2A24',
  inkSoft: '#57544A',
  cinnabar: '#B03B2E',
  cinnabarPale: '#F0D4CB',
  indigo: '#3E5588',
  indigoPale: '#D4DCEC',
  bronze: '#A08030',
  bronzePale: '#E3D2A0',
  chalk: '#F2EFE2',
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
  readonly from?: 'down' | 'left' | 'none' | 'right' | 'up';
  readonly marker?: string;
  readonly span?: number;
  readonly style?: CSSProperties;
}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, span);
  const origin =
    from === 'left'
      ? `-${distance}px 0px`
      : from === 'right'
        ? `${distance}px 0px`
        : from === 'down'
          ? `0px -${distance}px`
          : from === 'none'
            ? '0px 0px'
            : `0px ${distance}px`;
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

const Shell = ({children, code, kicker, title}: {readonly children: ReactNode; readonly code: string; readonly kicker: string; readonly title: string}) => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{
      backgroundColor: C.stone,
      color: C.chalk,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(90deg, transparent 0 132px, ${C.chalk}07 132px 134px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.bronze}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.bronzePale}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.stoneDeep, borderLeft: `8px solid ${C.bronze}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.chalk, letterSpacing: 2}}>考点 14 · {code}</span>
    </div>
    <header
      style={{
        position: 'absolute',
        left: 250,
        right: 72,
        top: 34,
        height: 88,
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        alignItems: 'center',
        gap: 22,
        borderBottom: `2px solid ${C.bronze}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.chalk}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.bronzePale, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Desk = ({children, marker, style, tone}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.paper, border: `2px solid ${C.paperEdge}`, color: C.ink, position: 'relative', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.bronze}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.bronze}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.bronze}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.bronze}} />
    {children}
  </div>
);

const LabelTab = ({children, bar = C.bronze}: {readonly children: ReactNode; readonly bar?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', padding: '5px 14px', backgroundColor: C.stoneDeep, borderLeft: `6px solid ${bar}`, color: C.chalk, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{children}</span>
);

const DeskChip = ({tone = C.cinnabar, children, solid = false}: {readonly tone?: string; readonly children: ReactNode; readonly solid?: boolean}) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '4px 12px',
      border: `2px solid ${tone}`,
      backgroundColor: solid ? tone : `${tone}14`,
      fontSize: 23,
      fontWeight: 880,
      color: solid ? C.paper : C.ink,
    }}
  >
    {children}
  </span>
);

const Stamp = ({children, delay = 0, size = 26, tone = C.cinnabar}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '8px 16px',
        border: `5px solid ${tone}`,
        color: tone,
        backgroundColor: `${tone}10`,
        fontSize: size,
        fontWeight: 950,
        letterSpacing: 2,
        opacity: p,
        scale: 0.86 + p * 0.14,
        rotate: '-3deg',
      }}
    >
      {children}
    </span>
  );
};

const InkUnderline = ({children, color = C.cinnabar, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
  const frame = useCurrentFrame();
  return (
    <span style={{position: 'relative', display: 'inline-block'}}>
      {children}
      <span
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: -6,
          height: 4,
          backgroundColor: color,
          scale: `${prog(frame, delay, 22)} 1`,
          transformOrigin: 'left center',
        }}
      />
    </span>
  );
};

const Soft = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2b`, padding: '2px 9px'}}>{children}</span>
);

const DarkStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(62, 69, 63, 0.85)', border: `2px solid ${C.bronze}`, color: C.chalk, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

export const DualMeaningsScene = () => {
  /* data-final-knowledge="meanings-heading" data-final-knowledge="judicial-desk" data-final-knowledge="administrative-desk" data-final-knowledge="enforcement-scope-note" */
  return (
  <Shell code="01" kicker="两案定义" title="司法与行政：两张案桌">
    <div
      data-layout="facing-desk-definition-pair"
      data-visual-anchor="role-pair"
      data-text-treatments="label-block,chip,soft-highlight,thin-underline"
      data-visual-grammar="judicial-definition-desk,administrative-definition-desk,enforcement-scope-note"
      data-focal-rule="judicial-applies-law-to-cases-while-administration-implements-law"
      data-focal-channels="icon,contrast,enclosure,spatial,annotation"
      style={{position: 'absolute', inset: 0}}
    >
      <Enter delay={6} from="down" marker="meanings-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
        <div style={{backgroundColor: C.paper, border: `3px solid ${C.paperEdge}`, padding: '11px 24px', textAlign: 'center'}}>
          <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
            司法＝<InkUnderline delay={36}>法的适用</InkUnderline> · 行政＝<InkUnderline color={C.indigo} delay={48}>实施法律</InkUnderline>
          </span>
        </div>
      </Enter>
      <Enter delay={28} from="left" marker="judicial-desk" style={{position: 'absolute', left: 40, top: 104, width: 850, height: 340}}>
        <Desk tone={C.cinnabar} style={{height: '100%', padding: '20px 26px 24px', display: 'flex', flexDirection: 'column', gap: 14}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
            <Gavel size={42} color={C.cinnabar} strokeWidth={2.3} />
            <LabelTab bar={C.cinnabar}>司法 · 又称「法的适用」</LabelTab>
          </div>
          <div style={{fontSize: 25, fontWeight: 880, color: C.ink, lineHeight: 1.6, marginTop: 8}}>
            国家<Soft color={C.cinnabar}>司法机关</Soft>根据法定职权和法定程序
          </div>
          <div style={{fontSize: 25, fontWeight: 880, color: C.ink, lineHeight: 1.6}}>
            具体应用法律<Soft color={C.cinnabar}>处理案件</Soft>的专门活动
          </div>
          <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 850, color: C.inkSoft}}>关键：法定职权 · 法定程序 · 案件</div>
        </Desk>
      </Enter>
      <Enter delay={54} from="right" marker="administrative-desk" style={{position: 'absolute', left: 930, top: 104, width: 886, height: 340}}>
        <Desk tone={C.indigo} style={{height: '100%', padding: '20px 26px 24px', display: 'flex', flexDirection: 'column', gap: 14}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
            <Briefcase size={42} color={C.indigo} strokeWidth={2.3} />
            <LabelTab bar={C.indigo}>行政 · 执法的主阵地</LabelTab>
          </div>
          <div style={{fontSize: 25, fontWeight: 880, color: C.ink, lineHeight: 1.6, marginTop: 8}}>
            国家<Soft color={C.indigo}>行政机关</Soft>及其公职人员
          </div>
          <div style={{fontSize: 25, fontWeight: 880, color: C.ink, lineHeight: 1.6}}>
            依法行使管理职权 · 履行职责 · <Soft color={C.indigo}>实施法律</Soft>的活动
          </div>
          <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 850, color: C.inkSoft}}>关键：管理职权 · 履职 · 实施法律</div>
        </Desk>
      </Enter>
      <Enter delay={140} from="up" marker="enforcement-scope-note" style={{position: 'absolute', left: 40, top: 480, width: 1736}}>
        <DarkStrip style={{height: 120}}>
          <span style={{padding: '4px 13px', backgroundColor: C.bronze, color: C.stoneDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>「执法」两义</span>
          <span style={{fontSize: 24, fontWeight: 900, color: C.chalk}}>
            广义＝司法机关＋行政机关 ｜ 狭义＝仅<Soft color={C.indigoPale}>行政机关</Soft>执行法律
          </span>
          <span style={{marginLeft: 'auto'}}>
            <Stamp delay={160} size={24}>未特别说明＝狭义</Stamp>
          </span>
        </DarkStrip>
      </Enter>
    </div>
  </Shell>
  );
};

const CRITERIA = [
  {name: '主体', judicial: '司法机关', admin: '行政机关'},
  {name: '内容', judicial: '活动的对象仅限于案件', admin: '对象广泛——案件＋大量案外内容'},
  {name: '程序性要求', judicial: '严格的程序性要求', admin: '有程序规定，但不如司法严格细致'},
  {name: '主动性', judicial: '活动具有被动性', admin: '活动具有较强的主动性'},
] as const;

export const FourCriteriaScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="criteria-heading" data-final-knowledge="criterion-lanes" data-final-knowledge="criteria-recap" */
  return (
  <Shell code="02" kicker="司法执法四别" title="司法与执法的四条分界">
    <div
      data-layout="four-criterion-paired-lanes"
      data-visual-anchor="comparison-axis"
      data-text-treatments="label-block,chip,soft-highlight,thin-underline"
      data-visual-grammar="subject-criterion,scope-criterion,procedure-criterion,initiative-criterion"
      data-focal-rule="judiciary-hears-cases-strictly-while-enforcement-acts-broadly-and-actively"
      data-focal-channels="icon,contrast,connector,spatial,annotation"
      style={{position: 'absolute', inset: 0}}
    >
      <Enter delay={6} from="down" marker="criteria-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
        <div style={{backgroundColor: C.paper, border: `3px solid ${C.paperEdge}`, padding: '11px 24px', textAlign: 'center'}}>
          <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
            对读「执法」：<InkUnderline delay={36}>主体 · 内容 · 程序 · 主动性</InkUnderline>
          </span>
        </div>
      </Enter>
      <span style={{position: 'absolute', left: 866, top: 104, width: 3, height: 448, backgroundColor: C.bronze, opacity: prog(frame, 40, 20)}} />
      <div data-final-knowledge="criterion-lanes" style={{position: 'absolute', left: 0, top: 0, width: '100%', height: '100%'}}>
        {CRITERIA.map((criterion, index) => (
          <Enter key={criterion.name} delay={28 + index * 24} from="left" style={{position: 'absolute', left: 40, top: 104 + index * 112, width: 1736, height: 100}}>
            <Desk style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '0 22px'}}>
              <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, backgroundColor: C.bronze, color: C.paper, fontSize: 21, fontWeight: 950, flexShrink: 0}}>{String(index + 1).padStart(2, '0')}</span>
              <span style={{fontSize: 27, fontWeight: 950, color: C.ink, width: 190}}>{criterion.name}</span>
              {index === 0 ? <Gavel size={34} color={C.cinnabar} strokeWidth={2.2} /> : index === 1 ? <BookOpen size={34} color={C.bronze} strokeWidth={2.2} /> : index === 2 ? <Feather size={34} color={C.bronze} strokeWidth={2.2} /> : <span style={{width: 34}} />}
              <span style={{width: 2, height: 52, backgroundColor: C.paperEdge}} />
              <span style={{fontSize: 24, fontWeight: 900, color: C.cinnabar, width: 560}}>
                司法：{criterion.judicial}
              </span>
              <span style={{width: 2, height: 52, backgroundColor: C.paperEdge}} />
              <span style={{fontSize: 24, fontWeight: 900, color: C.indigo, flex: 1}}>
                执法：{criterion.admin}
              </span>
            </Desk>
          </Enter>
        ))}
      </div>
      <Enter delay={160} from="up" marker="criteria-recap" style={{position: 'absolute', left: 40, top: 584, width: 1736}}>
        <DarkStrip style={{height: 100}}>
          <span style={{padding: '4px 13px', backgroundColor: C.bronze, color: C.stoneDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>一句记</span>
          <span style={{fontSize: 25, fontWeight: 900, color: C.chalk}}>
            主体两机关 · 内容窄与广 · 程序<Soft color={C.cinnabarPale}>严与宽</Soft> · 姿态<Soft color={C.indigoPale}>被动与主动</Soft>
          </span>
        </DarkStrip>
      </Enter>
    </div>
  </Shell>
  );
};

export const AuthorityIndependenceScene = () => {
  /* data-final-knowledge="authority-heading" data-final-knowledge="finality-plaque" data-final-knowledge="independence-wall" data-final-knowledge="separation-caution" */
  return (
    <Shell code="03" kicker="权威与独立" title="最终判断与司法独立">
      <div
        data-layout="finality-plaque-with-independence-wall"
        data-visual-anchor="boundary"
        data-text-treatments="label-block,chip,external-negation,stamp"
        data-visual-grammar="finality-contrast,independence-boundary,separation-caution"
        data-focal-rule="judicial-decisions-are-final-and-independence-is-relative"
        data-focal-channels="icon,enclosure,contrast,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="authority-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.paper, border: `3px solid ${C.paperEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              司法判断<InkUnderline delay={36}>最终</InkUnderline> · 行政只是<InkUnderline color={C.indigo} delay={48}>初步</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="finality-plaque" style={{position: 'absolute', left: 40, top: 104, width: 850, height: 210}}>
          <Desk tone={C.cinnabar} style={{height: '100%', padding: '18px 24px 20px', display: 'flex', flexDirection: 'column', gap: 14}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <Stamp delay={80} size={27}>司法机关的处理决定 · 具有最终性</Stamp>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <span style={{fontSize: 24, fontWeight: 900, color: C.indigo}}>行政机关</span>
              <span style={{fontSize: 24, fontWeight: 900, color: C.brass}}>→</span>
              <DeskChip tone={C.indigo} solid>
                只能提出初步处理方案
              </DeskChip>
            </div>
          </Desk>
        </Enter>
        <Enter delay={80} from="up" marker="separation-caution" style={{position: 'absolute', left: 40, top: 338, width: 850, height: 130}}>
          <Desk tone={C.bronze} style={{height: '100%', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 16}}>
            <Stamp delay={110} size={26}>司法独立 ≠ 三权分立</Stamp>
            <DeskChip tone={C.cinnabar}>我国奉行议行合一</DeskChip>
          </Desk>
        </Enter>
        <Enter delay={54} from="right" marker="independence-wall" style={{position: 'absolute', left: 930, top: 104, width: 886, height: 364}}>
          <Desk tone={C.bronze} style={{height: '100%', padding: '18px 24px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <LabelTab>司法独立的两条边界</LabelTab>
            <div style={{border: `2px solid ${C.cinnabar}`, backgroundColor: `${C.cinnabar}0D`, padding: '12px 16px'}}>
              <div style={{fontSize: 23, fontWeight: 950, color: C.cinnabar, marginBottom: 6}}>可独立于</div>
              <div style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>行政机关 · 社会团体 · 公民个人</div>
            </div>
            <div style={{border: `2px solid ${C.indigo}`, backgroundColor: `${C.indigo}0D`, padding: '12px 16px'}}>
              <div style={{fontSize: 23, fontWeight: 950, color: C.indigo, marginBottom: 6}}>
                <span style={{color: C.cinnabar}}>不可</span>独立于
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 6, fontSize: 23, fontWeight: 880, color: C.ink}}>
                <span style={{display: 'inline-flex', alignItems: 'center', gap: 10}}>
                  <Landmark size={30} color={C.indigo} strokeWidth={2.3} />
                  人大——组织上无法独立
                </span>
                <span style={{display: 'inline-flex', alignItems: 'center', gap: 10}}>
                  <Flag size={30} color={C.indigo} strokeWidth={2.3} />
                  执政党——政治上无法独立
                </span>
              </div>
            </div>
          </Desk>
        </Enter>
        <Enter delay={160} from="up" style={{position: 'absolute', left: 40, top: 500, width: 1736}}>
          <DarkStrip style={{height: 100}}>
            <span style={{padding: '4px 13px', backgroundColor: C.bronze, color: C.stoneDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>一句话</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.chalk}}>
              独立而不分立——对<Soft color={C.cinnabarPale}>行政、社会、个人</Soft>独立，对<Soft color={C.indigoPale}>人大与执政党</Soft>不独立
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const JudicialVsAdministrative = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-dual-meanings" {...SCENES.dualMeanings}>
      <DualMeaningsScene />
    </TimelineSequence>
    <TimelineSequence name="02-four-criteria" {...SCENES.fourCriteria}>
      <FourCriteriaScene />
    </TimelineSequence>
    <TimelineSequence name="03-authority-independence" {...SCENES.authorityIndependence}>
      <AuthorityIndependenceScene />
    </TimelineSequence>
  </AbsoluteFill>
);
