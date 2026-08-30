import type {CSSProperties, ReactNode} from 'react';
import {Anchor, Ban, BookOpen, Crown, Gavel, Globe, Landmark, Scale, Undo2} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  harbor: '#253D4E',
  harborDeep: '#1B2E3B',
  chart: '#EFE8D2',
  chartDim: '#DFD8C0',
  chartEdge: '#5E6862',
  ink: '#2B2721',
  inkSoft: '#4F5550',
  vermilion: '#B0452F',
  vermilionPale: '#F0D2C4',
  brass: '#A9822F',
  brassPale: '#E5D3A4',
  paper: '#F6F1E2',
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
      backgroundColor: C.harbor,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(90deg, transparent 0 148px, ${C.brass}0D 148px 150px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.vermilion}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.brass}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.harborDeep, borderLeft: `8px solid ${C.vermilion}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 36 · {code}</span>
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
        borderBottom: `2px solid ${C.vermilion}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.brassPale, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Chart = ({children, marker, style, tone}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.chart, border: `2px solid ${C.chartEdge}`, color: C.ink, position: 'relative', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.brass}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.brass}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.brass}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.brass}} />
    {children}
  </div>
);

const LabelTab = ({children, bar = C.vermilion}: {readonly children: ReactNode; readonly bar?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', padding: '5px 14px', backgroundColor: C.harborDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{children}</span>
);

const DeskChip = ({tone = C.brass, children, solid = false}: {readonly tone?: string; readonly children: ReactNode; readonly solid?: boolean}) => (
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

const Stamp = ({children, delay = 0, size = 26, tone = C.vermilion}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

const InkUnderline = ({children, color = C.vermilion, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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
  <div style={{backgroundColor: 'rgba(27, 46, 59, 0.92)', border: `2px solid ${C.vermilion}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

export const PowerSplitScene = () => {
  /* data-final-knowledge="power-heading" data-final-knowledge="central-desk" data-final-knowledge="sar-desk" data-final-knowledge="backfire-note" */
  return (
    <Shell code="01" kicker="权力分配" title="中央管什么，特区管什么">
      <div
        data-layout="two-desk-power-table"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="central-power-desk,sar-autonomy-desk,backfire-rule-note"
        data-focal-rule="defense-diploma-and-nomination-stay-central-the-rest-is-autonomous"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="power-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.chart, border: `3px solid ${C.chartEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              不涉<InkUnderline delay={36}>国防外交主权</InkUnderline>的，特区自己处理
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="central-desk" style={{position: 'absolute', left: 40, top: 104, width: 850, height: 420}}>
          <Chart tone={C.vermilion} style={{height: '100%', padding: '18px 26px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Landmark size={38} color={C.vermilion} strokeWidth={2.3} />
              <LabelTab bar={C.vermilion}>中央权力（近年高频）</LabelTab>
            </div>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.62, marginTop: 4}}>
              ① <Soft color={C.vermilion}>外交</Soft>与<Soft color={C.vermilion}>防务</Soft> ② 任命行政长官与主要官员·澳门检察长
              <br />
              ③ 全国人大<Soft color={C.vermilion}>修改基本法</Soft> ④ 全人常<Soft color={C.vermilion}>解释基本法</Soft>
              <br />
              ⑤ 决定特区<Soft color={C.vermilion}>进入紧急状态</Soft> ⑥ 战时或紧急状态时，国务院可发布命令将<Soft color={C.vermilion}>全国性法律在特区实施</Soft>
            </div>
          </Chart>
        </Enter>
        <Enter delay={64} from="right" marker="sar-desk" style={{position: 'absolute', left: 930, top: 104, width: 886, height: 420}}>
          <Chart tone={C.brass} style={{height: '100%', padding: '18px 26px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Anchor size={38} color={C.brass} strokeWidth={2.3} />
              <LabelTab bar={C.brass}>特区高度自治</LabelTab>
            </div>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.6, marginTop: 4}}>
              ① <Soft color={C.brass}>行政管理权</Soft>——财政独立 · 中央不征税 · 自行发行货币
              <br />
              ② <Soft color={C.brass}>立法权</Soft>——民刑商诉皆可制定，报备<Soft color={C.vermilion}>不影响生效</Soft>
              <br />
              ③ <Soft color={C.brass}>独立司法权与终审权</Soft>——终审权属特区终审法院
              <br />
              ④ <Soft color={C.brass}>外事事务权</Soft>——以「中国香港」「中国澳门」名义单独发展对外关系
            </div>
          </Chart>
        </Enter>
        <Enter delay={170} from="up" marker="backfire-note" style={{position: 'absolute', left: 40, top: 560, width: 1736}}>
          <DarkStrip style={{height: 88}}>
            <Undo2 size={34} color={C.brassPale} strokeWidth={2.2} />
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              发回规则：全人常可<InkUnderline color={C.brassPale} delay={190}>发回</InkUnderline>报备法律——立即失效，除特殊规定外<Soft color={C.brassPale}>无溯及力</Soft>
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const OfficialsScene = () => {
  /* data-final-knowledge="officials-heading" data-final-knowledge="qualification-pair" data-final-knowledge="residence-difference-note" */
  return (
    <Shell code="02" kicker="官员任职" title="港澳资格，一对一对">
      <div
        data-layout="hk-macau-qualification-pair"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="chief-executive-pair,judiciary-pair,residence-difference-note"
        data-focal-rule="hk-needs-no-foreign-residence-macau-adds-loyalty-oath"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="officials-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.chart, border: `3px solid ${C.chartEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              差异只在一处：<InkUnderline delay={36}>无外国居留权</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="qualification-pair" style={{position: 'absolute', left: 40, top: 104, width: 1736, height: 240}}>
          <div style={{display: 'flex', gap: 16, height: '100%'}}>
            <Chart tone={C.vermilion} style={{flex: 1, padding: '16px 22px', display: 'flex', flexDirection: 'column', gap: 12}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <Crown size={36} color={C.vermilion} strokeWidth={2.3} />
                <LabelTab bar={C.vermilion}>香港 · 特首「40、20、永、无、中」</LabelTab>
              </div>
              <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.6}}>
                40 周岁 · 在港居住满 20 年 · <Soft color={C.vermilion}>永久性居民</Soft> · <Soft color={C.vermilion}>无外国居留权</Soft> · 中国公民 ｜ 主要官员「15、永、无、中」 ｜ 立法会主席同特首
              </div>
            </Chart>
            <Chart tone={C.brass} style={{flex: 1, padding: '16px 22px', display: 'flex', flexDirection: 'column', gap: 12}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <Globe size={36} color={C.brass} strokeWidth={2.3} />
                <LabelTab bar={C.brass}>澳门 · 无「无居留权」限制</LabelTab>
              </div>
              <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.6}}>
                特首其他条件同香港，但<Soft color={C.brass}>无「在外国无居留权」要求</Soft>（任职期间不得有） ｜ 一般议员：永久性居民即可 ｜ 立法会正副主席：15、永、中
              </div>
            </Chart>
          </div>
        </Enter>
        <Enter delay={90} from="up" marker="residence-difference-note" style={{position: 'absolute', left: 40, top: 368, width: 1736, height: 220}}>
          <div style={{display: 'flex', gap: 16, height: '100%'}}>
            <Chart tone={C.brass} style={{flex: 1, padding: '16px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <Gavel size={32} color={C.brass} strokeWidth={2.3} />
                <LabelTab bar={C.brass}>香港司法机关</LabelTab>
              </div>
              <div style={{fontSize: 21, fontWeight: 870, color: C.ink, lineHeight: 1.6}}>
                终审法院 · 高等法院 · 区域法院 · 裁判署 ｜ <Soft color={C.brass}>律政司</Soft>主管刑事检察 ｜ 首席法官：永、无、中
              </div>
            </Chart>
            <Chart tone={C.vermilion} style={{flex: 1, padding: '16px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <Scale size={32} color={C.vermilion} strokeWidth={2.3} />
                <LabelTab bar={C.vermilion}>澳门司法机关</LabelTab>
              </div>
              <div style={{fontSize: 21, fontWeight: 870, color: C.ink, lineHeight: 1.6}}>
                终审法院 · 中级法院 · 初级法院（行政法院） ｜ <Soft color={C.vermilion}>检察院</Soft>独立行使刑事检察权 ｜ 终审院长·检察长：永、中
              </div>
            </Chart>
          </div>
        </Enter>
        <Enter delay={170} from="up" style={{position: 'absolute', left: 40, top: 614, width: 1736}}>
          <DarkStrip style={{height: 90}}>
            <span style={{padding: '4px 13px', backgroundColor: C.brass, color: C.harborDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>产生与辞职</span>
            <span style={{fontSize: 23, fontWeight: 900, color: C.paper, lineHeight: 1.5}}>
              特首：选举或协商产生（国务院任命）· <Soft color={C.brassPale}>一任5年可连任一次</Soft> · 拒人两次/被拒一次——解散立会再不济就走人
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const OathInterpretScene = () => {
  /* data-final-knowledge="oath-heading" data-final-knowledge="validity-wall" data-final-knowledge="interpret-strip" */
  return (
    <Shell code="03" kicker="宣誓与释法" title="宣誓有效，释法归常">
      <div
        data-layout="oath-validity-wall-with-interpret-strip"
        data-visual-anchor="boundary"
        data-text-treatments="label-block,chip,external-negation,stamp"
        data-visual-grammar="valid-oath-side,invalid-oath-side,interpret-strip"
        data-focal-rule="insincere-oath-loses-seat-and-only-the-standing-committee-finalizes-meaning"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="oath-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.chart, border: `3px solid ${C.chartEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              宣誓是就职的<InkUnderline delay={36}>法定条件</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="validity-wall" style={{position: 'absolute', left: 40, top: 104, width: 1736, height: 300}}>
          <div style={{display: 'flex', gap: 16, height: '100%'}}>
            <Chart tone={C.brass} style={{flex: 1, padding: '16px 22px', display: 'flex', flexDirection: 'column', gap: 12}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <Scale size={34} color={C.brass} strokeWidth={2.3} />
                <LabelTab bar={C.brass}>有效宣誓</LabelTab>
              </div>
              <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.6}}>
                符合<Soft color={C.brass}>法定形式与内容</Soft> · 真诚庄重 · 准确完整宣读法定誓言 ｜ 在<Soft color={C.brass}>监誓人</Soft>面前进行
              </div>
              <div style={{marginTop: 'auto', fontSize: 21, fontWeight: 870, color: C.inkSoft}}>澳门主要官员等还须宣誓效忠中华人民共和国</div>
            </Chart>
            <Chart tone={C.vermilion} style={{flex: 1, padding: '16px 22px', display: 'flex', flexDirection: 'column', gap: 12}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <Ban size={34} color={C.vermilion} strokeWidth={2.4} />
                <LabelTab bar={C.vermilion}>无效宣誓</LabelTab>
              </div>
              <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.6}}>
                拒绝宣誓 · 故意宣读不一致誓言 · <Soft color={C.vermilion}>不真诚不庄重</Soft>——视为拒绝，<Soft color={C.vermilion}>丧失就任资格</Soft>，<Soft color={C.vermilion}>不得重新安排</Soft>
              </div>
              <div style={{marginTop: 'auto', fontSize: 21, fontWeight: 870, color: C.inkSoft}}>对比：过失宣誓不当，可重新安排宣誓</div>
            </Chart>
          </div>
        </Enter>
        <Enter delay={90} from="up" marker="interpret-strip" style={{position: 'absolute', left: 40, top: 432, width: 1736, height: 180}}>
          <div style={{display: 'flex', gap: 16, height: '100%'}}>
            <Chart tone={C.vermilion} style={{flex: 1, padding: '16px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <BookOpen size={32} color={C.vermilion} strokeWidth={2.3} />
                <LabelTab bar={C.vermilion}>基本法解释</LabelTab>
              </div>
              <div style={{fontSize: 21, fontWeight: 870, color: C.ink, lineHeight: 1.6}}>
                全人常解释<Soft color={C.vermilion}>全部条款</Soft> ｜ 特区法院解释<Soft color={C.brass}>自治条款</Soft> ｜ 「非自治条款」由<Soft color={C.vermilion}>终审法院提请</Soft>全人常解释 ｜ 解释冲突：<Soft color={C.vermilion}>以全人常为准</Soft>
              </div>
            </Chart>
            <Chart tone={C.brass} style={{flex: 1, padding: '16px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <LabelTab bar={C.brass}>全国性法律在特区实施</LabelTab>
              </div>
              <div style={{fontSize: 21, fontWeight: 870, color: C.ink, lineHeight: 1.6}}>
                <Soft color={C.brass}>列入附件三</Soft>实施 ｜ 战争状态、紧急状态时由<Soft color={C.vermilion}>国务院发布命令</Soft>实施
              </div>
            </Chart>
          </div>
        </Enter>
        <Enter delay={170} from="up" style={{position: 'absolute', left: 40, top: 638, width: 1736}}>
          <DarkStrip style={{height: 70}}>
            <span style={{padding: '4px 13px', backgroundColor: C.vermilion, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>收束</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              宣誓不当<Soft color={C.vermilionPale}>丢资格</Soft> · 释法<Soft color={C.brassPale}>终归全人常</Soft>
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const SpecialAdministrativeRegions = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-power-split" {...SCENES.powerSplit}>
      <PowerSplitScene />
    </TimelineSequence>
    <TimelineSequence name="02-officials" {...SCENES.officials}>
      <OfficialsScene />
    </TimelineSequence>
    <TimelineSequence name="03-oath-interpret" {...SCENES.oathInterpret}>
      <OathInterpretScene />
    </TimelineSequence>
  </AbsoluteFill>
);