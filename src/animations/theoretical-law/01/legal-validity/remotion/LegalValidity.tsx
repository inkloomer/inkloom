import type {CSSProperties, ReactNode} from 'react';
import {Blend, CirclePause, FileX2, Hourglass, Landmark, MapPin, MapPinned, Megaphone, Shield, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  navy: '#22304A',
  navyDeep: '#1A2538',
  pass: '#F2ECDC',
  passDim: '#E4DCC6',
  passEdge: '#6E6852',
  ink: '#2B2721',
  inkSoft: '#59523F',
  verdigris: '#3F7A6E',
  verdigrisPale: '#D3E0D8',
  carmine: '#B03A30',
  carminePale: '#EFD3CC',
  brass: '#A9822F',
  brassPale: '#E5D3A1',
  dusk: '#D9B65C',
  paper: '#F6F2E4',
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
      backgroundColor: C.navy,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(90deg, transparent 0 148px, ${C.brass}0F 148px 150px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.brass}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.brassPale}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.navyDeep, borderLeft: `8px solid ${C.brass}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 11 · {code}</span>
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
        borderBottom: `2px solid ${C.brass}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.dusk, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Pass = ({children, style, tone}: {readonly children: ReactNode; readonly style?: CSSProperties; readonly tone?: string}) => (
  <div
    style={{
      backgroundColor: C.pass,
      border: `2px solid ${C.passEdge}`,
      color: C.ink,
      position: 'relative',
      borderTop: tone ? `8px solid ${tone}` : undefined,
      ...style,
    }}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: C.brass}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: C.brass}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: C.brass}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: C.brass}} />
    {children}
  </div>
);

const LabelTab = ({children, bar = C.brass}: {readonly children: ReactNode; readonly bar?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', padding: '5px 14px', backgroundColor: C.navyDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{children}</span>
);

const VerdChip = ({children, tone = C.verdigris, solid = false}: {readonly children: ReactNode; readonly tone?: string; readonly solid?: boolean}) => (
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

const Stamp = ({children, delay = 0, size = 26, tone = C.carmine}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

const InkUnderline = ({children, color = C.carmine, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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
  <div style={{backgroundColor: 'rgba(26, 37, 56, 0.78)', border: `2px solid ${C.brass}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

export const PersonalReachScene = () => {
  /* data-final-knowledge="personal-heading" data-final-knowledge="doctrine-lanes" data-final-knowledge="compromise-lane" data-final-knowledge="adoption-stamp" */
  const lanes = [
    {name: '属人主义', tone: C.verdigris, criterion: '国籍', note: '本国人走到哪，法跟到哪'},
    {name: '属地主义', tone: C.brass, criterion: '地域', note: '境内的人与事，一律适用'},
    {name: '保护主义', tone: C.carmine, criterion: '利益', note: '本国利益受损即可管辖'},
  ] as const;
  return (
    <Shell code="01" kicker="对人效力" title="法律管谁：四种主义">
      <div
        data-layout="four-doctrine-criterion-lanes"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="doctrine-claims,criterion-ladder,adopted-standard-stamp"
        data-focal-rule="modern-states-mix-territory-personal-and-protective-reach"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="personal-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.pass, border: `3px solid ${C.passEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              对人效力：看<InkUnderline delay={36}>连结点</InkUnderline>定管辖
            </span>
          </div>
        </Enter>
        <div data-final-knowledge="doctrine-lanes" style={{position: 'absolute', left: 0, top: 0, width: '100%', height: '100%'}}>
          {lanes.map((lane, index) => (
            <Enter key={lane.name} delay={30 + index * 22} from="left" style={{position: 'absolute', left: 40, top: 104 + index * 122, width: 1736, height: 108}}>
              <Pass tone={lane.tone} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 18, padding: '0 26px'}}>
                {index === 0 ? <Users size={40} color={lane.tone} strokeWidth={2.3} /> : index === 1 ? <MapPin size={40} color={lane.tone} strokeWidth={2.3} /> : <Shield size={40} color={lane.tone} strokeWidth={2.3} />}
                <span style={{fontSize: 32, fontWeight: 950, color: C.ink, width: 200}}>{lane.name}</span>
                <span style={{width: 2, height: 56, backgroundColor: C.passEdge}} />
                <VerdChip tone={lane.tone} solid>
                  {lane.criterion}
                </VerdChip>
                <span style={{fontSize: 24, fontWeight: 880, color: C.inkSoft}}>{lane.note}</span>
              </Pass>
            </Enter>
          ))}
          <Enter delay={96} from="left" marker="compromise-lane" style={{position: 'absolute', left: 40, top: 470, width: 1736, height: 128}}>
            <Pass tone={C.carmine} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 18, padding: '0 26px'}}>
              <Blend size={44} color={C.carmine} strokeWidth={2.3} />
              <span style={{fontSize: 34, fontWeight: 950, color: C.ink, width: 200}}>折中主义</span>
              <span style={{width: 2, height: 64, backgroundColor: C.passEdge}} />
              <span style={{fontSize: 25, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
                以<Soft color={C.brass}>属地主义为主</Soft> · 与<Soft color={C.verdigris}>属人主义</Soft>、<Soft color={C.carmine}>保护主义</Soft>相结合
              </span>
              <span data-final-knowledge="adoption-stamp" style={{marginLeft: 'auto'}}>
                <Stamp delay={150} size={25}>近代以来多数国家采用</Stamp>
              </span>
            </Pass>
          </Enter>
        </div>
        <Enter delay={196} from="up" style={{position: 'absolute', left: 40, top: 630, width: 1736}}>
          <DarkStrip style={{height: 100}}>
            <span style={{padding: '4px 13px', backgroundColor: C.brass, color: C.navyDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>效力含义</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              法律的效力＝对人们行为的<Soft color={C.dusk}>约束力</Soft> · 考试中一般指<Soft color={C.verdigrisPale}>规范性法律文件</Soft>的效力
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const SpatialReachScene = () => {
  /* data-final-knowledge="spatial-heading" data-final-knowledge="nationwide-tier" data-final-knowledge="regional-tier" data-final-knowledge="adjustment-strip" data-final-knowledge="maker-mnemonic" */
  return (
    <Shell code="02" kicker="空间效力" title="法律管哪里：生效地域">
      <div
        data-layout="territory-envelope-with-adjustment-counter"
        data-visual-anchor="boundary"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="nationwide-tier,regional-tier,central-adjustment-strip"
        data-focal-rule="reach-follows-the-making-authority-not-the-name"
        data-focal-channels="icon,enclosure,contrast,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="spatial-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.pass, border: `3px solid ${C.passEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              空间效力：<InkUnderline delay={36}>制定主体</InkUnderline>定生效范围
            </span>
          </div>
        </Enter>
        <Enter delay={30} from="left" marker="nationwide-tier" style={{position: 'absolute', left: 40, top: 104, width: 850, height: 340}}>
          <Pass tone={C.verdigris} style={{height: '100%', padding: '20px 26px 24px', display: 'flex', flexDirection: 'column', gap: 14}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <Landmark size={42} color={C.verdigris} strokeWidth={2.3} />
              <LabelTab bar={C.verdigris}>全国生效</LabelTab>
              <VerdChip solid>全国</VerdChip>
            </div>
            <div style={{fontSize: 25, fontWeight: 880, color: C.ink, lineHeight: 1.55, marginTop: 6}}>
              <Soft color={C.verdigris}>中央立法机关</Soft>制定的规范性法律文件
            </div>
            <div style={{border: `2px solid ${C.passEdge}`, backgroundColor: C.passDim, padding: '12px 16px', fontSize: 22, fontWeight: 850, color: C.ink, lineHeight: 1.55}}>
              例：全国人大制定的《香港特别行政区基本法》——名字带地方，仍属<Soft color={C.verdigris}>全国生效</Soft>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 850, color: C.inkSoft}}>效力铺满国境全域</div>
          </Pass>
        </Enter>
        <Enter delay={56} from="right" marker="regional-tier" style={{position: 'absolute', left: 930, top: 104, width: 886, height: 150}}>
          <Pass tone={C.brass} style={{height: '100%', padding: '16px 24px 20px', display: 'flex', alignItems: 'center', gap: 16}}>
            <MapPinned size={40} color={C.brass} strokeWidth={2.3} />
            <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
                <LabelTab>部分地区生效</LabelTab>
                <VerdChip tone={C.brass} solid>
                  局部
                </VerdChip>
              </div>
              <div style={{fontSize: 24, fontWeight: 880, color: C.ink}}>
                <Soft color={C.brass}>地方立法机关</Soft>制定的规范性法律文件
              </div>
            </div>
          </Pass>
        </Enter>
        <Enter delay={82} from="right" marker="adjustment-strip" style={{position: 'absolute', left: 930, top: 278, width: 886, height: 166}}>
          <Pass tone={C.carmine} style={{height: '100%', padding: '14px 24px 18px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <CirclePause size={36} color={C.carmine} strokeWidth={2.3} />
              <LabelTab bar={C.carmine}>中央立法在地方的调整实施</LabelTab>
            </div>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
              按地方改革发展需要 · 一定期限内可<Soft color={C.carmine}>暂停实施或调整适用</Soft> · 决定主体＝制定主体
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <VerdChip tone={C.brass} solid>
                口诀：我的文件我的法，期限届满延改复
              </VerdChip>
            </div>
          </Pass>
        </Enter>
        <Enter delay={150} from="up" marker="maker-mnemonic" style={{position: 'absolute', left: 40, top: 480, width: 1736}}>
          <DarkStrip style={{height: 116}}>
            <span style={{padding: '4px 13px', backgroundColor: C.brass, color: C.navyDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>判断口径</span>
            <span style={{fontSize: 26, fontWeight: 900, color: C.paper}}>
              全国还是地方生效？关键看<Soft color={C.dusk}>制定主体</Soft>，<InkUnderline color={C.carmine} delay={170}>不看名字</InkUnderline>
            </span>
            <span style={{marginLeft: 'auto', fontSize: 22, fontWeight: 850, color: C.brassPale}}>中央立法机关制定＝全国生效</span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const TemporalReachScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="temporal-heading" data-final-knowledge="publication-gate" data-final-knowledge="repeal-fork" data-final-knowledge="retroactivity-window" data-final-knowledge="presumed-knowledge-note" */
  const laneP = prog(frame, 40, 26);
  return (
    <Shell code="03" kicker="时间效力" title="法律管何时：生效到溯及">
      <div
        data-layout="validity-timeline-with-retroactivity-gate"
        data-visual-anchor="timeline-gate"
        data-text-treatments="label-block,chip,external-negation,stamp"
        data-visual-grammar="publication-gate,repeal-fork,retroactivity-window"
        data-focal-rule="no-retroactivity-unless-the-new-rule-favors-the-actor"
        data-focal-channels="icon,connector,contrast,motion,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="temporal-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.pass, border: `3px solid ${C.passEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              时间效力：<InkUnderline delay={36}>生效 · 失效 · 溯及力</InkUnderline>
            </span>
          </div>
        </Enter>
        <span style={{position: 'absolute', left: 60, top: 258, width: 1656 * laneP, height: 3, backgroundColor: C.brass, opacity: 0.7}} />
        <Enter delay={30} from="up" marker="publication-gate" style={{position: 'absolute', left: 40, top: 104, width: 520, height: 340}}>
          <Pass tone={C.verdigris} style={{height: '100%', padding: '18px 24px 22px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Megaphone size={40} color={C.verdigris} strokeWidth={2.3} />
              <LabelTab bar={C.verdigris}>生效</LabelTab>
            </div>
            <div style={{fontSize: 24, fontWeight: 880, color: C.ink, lineHeight: 1.5, marginTop: 4}}>
              近代以来，以<Soft color={C.verdigris}>公布</Soft>为条件
            </div>
            <div style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>生效时间可由法律自身直接规定</div>
            <div data-final-knowledge="presumed-knowledge-note" style={{marginTop: 'auto', border: `2px solid ${C.passEdge}`, backgroundColor: C.passDim, padding: '10px 14px', fontSize: 22, fontWeight: 900, color: C.ink}}>
              一经公布，推定人人知晓——<span style={{color: C.carmine}}>不得以不知法对抗</span>
            </div>
          </Pass>
        </Enter>
        <Enter delay={60} from="up" marker="repeal-fork" style={{position: 'absolute', left: 620, top: 104, width: 560, height: 340}}>
          <Pass tone={C.carmine} style={{height: '100%', padding: '18px 24px 22px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <FileX2 size={40} color={C.carmine} strokeWidth={2.3} />
              <LabelTab bar={C.carmine}>失效 · 两类废止</LabelTab>
            </div>
            <div style={{border: `2px solid ${C.verdigris}`, backgroundColor: `${C.verdigris}12`, padding: '10px 14px'}}>
              <span style={{fontSize: 23, fontWeight: 950, color: C.ink}}>
                明示废止＝<VerdChip tone={C.verdigris} solid>立法</VerdChip>
              </span>
            </div>
            <div style={{border: `2px solid ${C.carmine}`, backgroundColor: `${C.carmine}12`, padding: '10px 14px'}}>
              <span style={{fontSize: 23, fontWeight: 950, color: C.ink}}>
                默示废止＝<VerdChip tone={C.carmine} solid>司法</VerdChip>
              </span>
              <div style={{fontSize: 22, fontWeight: 880, color: C.ink, marginTop: 6, lineHeight: 1.5}}>
                新法优于旧法 → 旧法<Soft color={C.carmine}>名存实亡</Soft>
              </div>
            </div>
          </Pass>
        </Enter>
        <Enter delay={90} from="up" marker="retroactivity-window" style={{position: 'absolute', left: 1240, top: 104, width: 536, height: 340}}>
          <Pass tone={C.brass} style={{height: '100%', padding: '18px 24px 22px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Hourglass size={40} color={C.brass} strokeWidth={2.3} />
              <LabelTab>溯及力</LabelTab>
            </div>
            <div style={{fontSize: 24, fontWeight: 880, color: C.ink, lineHeight: 1.5, marginTop: 4}}>
              通行标准：<VerdChip tone={C.brass} solid>从旧兼从轻</VerdChip>
            </div>
            <div style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
              原则上<InkUnderline delay={140} color={C.carmine}>不溯及既往</InkUnderline>
            </div>
            <div style={{marginTop: 'auto'}}>
              <Stamp delay={160} size={24}>例外：有利溯及</Stamp>
            </div>
          </Pass>
        </Enter>
        <Enter delay={170} from="up" style={{position: 'absolute', left: 40, top: 480, width: 1736}}>
          <DarkStrip style={{height: 108}}>
            <span style={{padding: '4px 13px', backgroundColor: C.brass, color: C.navyDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>效力三问</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              管谁看<Soft color={C.dusk}>连结点</Soft> · 管哪看<Soft color={C.dusk}>制定主体</Soft> · 管何时看<Soft color={C.dusk}>公布与废止</Soft>
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const LegalValidity = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-personal-reach" {...SCENES.personalReach}>
      <PersonalReachScene />
    </TimelineSequence>
    <TimelineSequence name="02-spatial-reach" {...SCENES.spatialReach}>
      <SpatialReachScene />
    </TimelineSequence>
    <TimelineSequence name="03-temporal-reach" {...SCENES.temporalReach}>
      <TemporalReachScene />
    </TimelineSequence>
  </AbsoluteFill>
);
