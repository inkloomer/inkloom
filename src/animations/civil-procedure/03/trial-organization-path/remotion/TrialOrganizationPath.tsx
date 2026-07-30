import React, {type CSSProperties, type ReactNode} from 'react';
import {AbsoluteFill, Easing, Sequence, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {DURATION_FRAMES, SCENES} from './storyboard';

const colors = {
  canvas: '#F4F6F3',
  ink: '#17221E',
  muted: '#5C6862',
  line: '#D1D8D3',
  paper: '#FFFFFF',
  teal: '#087C73',
  tealSoft: '#DDF0EC',
  gold: '#A56D16',
  goldSoft: '#F8ECCA',
  red: '#C8463B',
  redSoft: '#F9E3E0',
  blue: '#356BA8',
  blueSoft: '#E3ECF8',
} as const;

const font = '"Microsoft YaHei", "PingFang SC", sans-serif';

const sequenceEntries = Object.entries(SCENES) as Array<[keyof typeof SCENES, (typeof SCENES)[keyof typeof SCENES]]>;

const Enter = ({children, delay = 0, style}: {readonly children: ReactNode; readonly delay?: number; readonly style?: CSSProperties}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  return (
    <div
      style={{
        ...style,
        opacity: interpolate(frame, [delay, delay + 12], [0, 1], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        }),
        translate: `0 ${interpolate(frame, [delay, delay + 16], [34, 0], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        })}px`,
        scale: spring({
          frame: frame - delay,
          fps,
          config: {damping: 18, mass: 0.6, stiffness: 150},
          durationInFrames: 22,
        }),
      }}
    >
      {children}
    </div>
  );
};

const Page = ({
  number,
  eyebrow,
  title,
  accent,
  children,
}: {
  readonly number: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly accent: keyof Pick<typeof colors, 'teal' | 'gold' | 'red' | 'blue'>;
  readonly children: ReactNode;
}) => (
  <AbsoluteFill style={{fontFamily: font, color: colors.ink}}>
    <div style={{position: 'absolute', inset: 0, backgroundColor: colors.canvas}} />
    {[320, 640, 960, 1280, 1600].map((left) => (
      <div key={left} style={{position: 'absolute', left, top: 0, width: 1, height: 1080, backgroundColor: 'rgba(167, 181, 173, 0.20)'}} />
    ))}
    <Enter delay={2} style={{position: 'absolute', left: 92, top: 68, display: 'flex', alignItems: 'center', gap: 20}}>
      <div style={{display: 'grid', width: 54, height: 54, placeItems: 'center', color: colors[accent], border: `2px solid ${colors[accent]}`, fontSize: 20, fontWeight: 900}}>{number}</div>
      <div>
        <div style={{color: colors[accent], fontSize: 20, fontWeight: 900, letterSpacing: 1.5}}>{eyebrow}</div>
        <div style={{marginTop: 5, fontSize: 50, fontWeight: 900, lineHeight: 1.04}}>{title}</div>
      </div>
    </Enter>
    <div style={{position: 'absolute', right: 92, top: 84, color: colors.muted, fontSize: 18, fontWeight: 800, letterSpacing: 1}}>CIVIL PROCEDURE / 03</div>
    <div style={{position: 'absolute', left: 92, right: 92, top: 201, height: 1, backgroundColor: colors.line}} />
    {children}
  </AbsoluteFill>
);

const Card = ({
  title,
  children,
  tone = 'teal',
  style,
  delay,
}: {
  readonly title: string;
  readonly children: ReactNode;
  readonly tone?: keyof Pick<typeof colors, 'teal' | 'gold' | 'red' | 'blue'>;
  readonly style?: CSSProperties;
  readonly delay: number;
}) => (
  <Enter delay={delay} style={{...style, boxSizing: 'border-box'}}>
    <section style={{height: '100%', boxSizing: 'border-box', padding: '28px 32px', backgroundColor: colors.paper, border: `2px solid ${colors[tone]}`, borderRadius: 12, boxShadow: '0 16px 38px rgba(23, 34, 30, 0.08)'}}>
      <div style={{color: colors[tone], fontSize: 25, fontWeight: 900, lineHeight: 1.2}}>{title}</div>
      <div style={{marginTop: 16, color: colors.ink, fontSize: 28, fontWeight: 700, lineHeight: 1.45}}>{children}</div>
    </section>
  </Enter>
);

const Rule = ({children, tone = 'teal'}: {readonly children: ReactNode; readonly tone?: keyof Pick<typeof colors, 'teal' | 'gold' | 'red' | 'blue'>}) => (
  <span style={{display: 'inline-block', padding: '2px 9px 4px', color: colors[tone], backgroundColor: colors[`${tone}Soft`], borderBottom: `4px solid ${colors[tone]}`, fontWeight: 900}}>{children}</span>
);

const Arrow = ({label, tone = 'teal'}: {readonly label: string; readonly tone?: keyof Pick<typeof colors, 'teal' | 'gold' | 'red' | 'blue'>}) => (
  <div style={{display: 'grid', minWidth: 116, placeItems: 'center', color: colors[tone]}}>
    <div style={{fontSize: 18, fontWeight: 900}}>{label}</div>
    <div style={{marginTop: 10, width: 94, height: 5, backgroundColor: colors[tone], position: 'relative'}}>
      <span style={{position: 'absolute', right: -1, top: -10, width: 0, height: 0, borderTop: '13px solid transparent', borderBottom: '13px solid transparent', borderLeft: `18px solid ${colors[tone]}`}} />
    </div>
  </div>
);

const Overview = () => (
  <Page number="01" eyebrow="先定位程序" title="审判组织：先问哪一条路？" accent="teal">
    <Enter delay={28} style={{position: 'absolute', left: 114, top: 284, width: 1692, padding: '38px 48px', backgroundColor: colors.tealSoft, borderLeft: `10px solid ${colors.teal}`}}>
      <div style={{fontSize: 35, fontWeight: 850, lineHeight: 1.45}}>判断独任制还是合议制，先锁定 <Rule>审级</Rule> 与 <Rule>程序类型</Rule>，再核对例外和转换条件。</div>
    </Enter>
    <div style={{position: 'absolute', left: 114, right: 114, top: 500, display: 'flex', alignItems: 'stretch', justifyContent: 'space-between'}}>
      <Card title="第一层 · 审级" tone="blue" delay={48} style={{width: 390, minHeight: 250}}><Rule tone="blue">一审 / 二审 / 再审</Rule></Card>
      <Arrow label="再看" tone="blue" />
      <Card title="第二层 · 程序" tone="gold" delay={66} style={{width: 390, minHeight: 250}}><Rule tone="gold">普通、简易、特别等</Rule></Card>
      <Arrow label="最后核对" tone="gold" />
      <Card title="第三层 · 例外" tone="red" delay={84} style={{width: 390, minHeight: 250}}><Rule tone="red">明确条件与禁止情形</Rule></Card>
    </div>
  </Page>
);

const FirstInstance = () => (
  <Page number="02" eyebrow="一审程序" title="简易必独任，普通先看例外" accent="blue">
    <Card title="简易程序" tone="blue" delay={26} style={{position: 'absolute', left: 116, top: 286, width: 500, height: 260}}><Rule tone="blue">审判员一人独任审判</Rule></Card>
    <Card title="普通程序 · 原则" tone="teal" delay={46} style={{position: 'absolute', left: 710, top: 286, width: 500, height: 260}}><Rule>合议制</Rule><div style={{marginTop: 12}}>审判员组成，或审判员与人民陪审员共同组成合议庭</div></Card>
    <Card title="普通程序 · 可独任的例外" tone="gold" delay={66} style={{position: 'absolute', left: 1304, top: 286, width: 500, height: 260}}><Rule tone="gold">基层法院</Rule><div style={{marginTop: 12}}>基本事实清楚 + 权利义务关系明确</div></Card>
    <Enter delay={96} style={{position: 'absolute', left: 250, right: 250, top: 666, padding: '30px 46px', backgroundColor: colors.redSoft, border: `2px solid ${colors.red}`, borderRadius: 12}}>
      <div style={{fontSize: 32, fontWeight: 900, lineHeight: 1.4}}>普通程序不当然等于合议制：满足基层法院与“事实、权利义务明确”条件时，也可以 <Rule tone="red">独任审理</Rule>。</div>
    </Enter>
  </Page>
);

const SecondInstance = () => (
  <Page number="03" eyebrow="二审程序" title="独任制须同时通过四道门" accent="gold">
    <Enter delay={24} style={{position: 'absolute', left: 112, top: 284, color: colors.muted, fontSize: 27, fontWeight: 800}}>原则：二审由审判员组成合议庭。只有全部满足以下条件，才可独任审理。</Enter>
    <div style={{position: 'absolute', left: 112, right: 112, top: 382, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 22}}>
      <Card title="01 法院" tone="gold" delay={38} style={{height: 248}}><Rule tone="gold">中级法院</Rule></Card>
      <Card title="02 案件来源" tone="gold" delay={52} style={{height: 248}}>一审适用简易程序审结，或对裁定提起上诉</Card>
      <Card title="03 案情" tone="gold" delay={66} style={{height: 248}}>基本事实清楚<br />权利义务关系明确</Card>
      <Card title="04 当事人" tone="gold" delay={80} style={{height: 248}}><Rule tone="gold">双方同意</Rule></Card>
    </div>
    <Enter delay={106} style={{position: 'absolute', left: 420, right: 420, top: 740, padding: '30px 44px', textAlign: 'center', backgroundColor: colors.goldSoft, borderBottom: `8px solid ${colors.gold}`}}>
      <div style={{fontSize: 37, fontWeight: 900}}>任一条件不具备 → <Rule tone="red">回到合议制</Rule></div>
    </Enter>
  </Page>
);

const SpecialProcedures = () => (
  <Page number="04" eyebrow="再审与特别程序" title="四类路线，记住审判组织" accent="teal">
    <div style={{position: 'absolute', left: 114, right: 114, top: 280, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28}}>
      <Card title="再审" tone="blue" delay={24} style={{height: 252}}>原是一审 → 按一审程序；原是二审或上级法院提审 → 按二审程序；均需 <Rule tone="blue">另行组成合议庭</Rule></Card>
      <Card title="特别程序" tone="teal" delay={40} style={{height: 252}}>原则 <Rule>独任制</Rule>；选民资格案件、重大疑难案件 → <Rule tone="red">合议庭</Rule></Card>
      <Card title="督促程序" tone="gold" delay={56} style={{height: 220}}>审判员一人 <Rule tone="gold">独任审查</Rule></Card>
      <Card title="公示催告程序" tone="red" delay={72} style={{height: 220}}>公示催告阶段 <Rule tone="red">独任制</Rule>；除权判决阶段 → 审判员组成合议庭</Card>
    </div>
  </Page>
);

const Misconceptions = () => (
  <Page number="05" eyebrow="高频陷阱" title="审判组织 ≠ 程序类型" accent="red">
    <Card title="独任制 ≠ 简易程序" tone="red" delay={26} style={{position: 'absolute', left: 116, top: 298, width: 806, height: 370}}><Rule tone="red">简易程序适用独任制</Rule>，但基层法院普通程序独任、特别程序、督促程序、公示催告程序，也可能适用独任制。</Card>
    <Card title="合议制 ≠ 普通程序" tone="blue" delay={48} style={{position: 'absolute', left: 998, top: 298, width: 806, height: 370}}><Rule tone="blue">普通程序原则上合议制</Rule>，但特别程序重大疑难案件、公示催告除权判决阶段，也可能适用合议制。</Card>
    <Enter delay={80} style={{position: 'absolute', left: 378, right: 378, top: 774, textAlign: 'center', color: colors.red, fontSize: 32, fontWeight: 900}}>先判断“谁审”，不能把“由谁审”误当成“按什么程序审”。</Enter>
  </Page>
);

const Conversion = () => (
  <Page number="06" eyebrow="审理中转换" title="不宜独任时，裁定转为合议庭" accent="red">
    <div style={{position: 'absolute', left: 116, right: 116, top: 314, display: 'flex', alignItems: 'stretch', gap: 26}}>
      <Card title="法院主动发现" tone="red" delay={24} style={{width: 500, height: 310}}>案件不宜由一人审理</Card>
      <Arrow label="应当裁定" tone="red" />
      <Card title="转由合议庭" tone="teal" delay={50} style={{width: 500, height: 310}}><Rule>转换结果</Rule></Card>
      <Arrow label="或者" tone="blue" />
      <Card title="当事人提出异议" tone="blue" delay={76} style={{width: 500, height: 310}}>认为独任审理违反法律规定</Card>
    </div>
    <div style={{position: 'absolute', left: 254, right: 254, top: 738, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28}}>
      <Card title="异议成立" tone="teal" delay={102} style={{height: 168}}><Rule>裁定转为合议庭</Rule></Card>
      <Card title="异议不成立" tone="gold" delay={118} style={{height: 168}}><Rule tone="gold">裁定驳回</Rule></Card>
    </div>
  </Page>
);

const scenes = {
  overview: <Overview />,
  firstInstance: <FirstInstance />,
  secondInstance: <SecondInstance />,
  specialProcedures: <SpecialProcedures />,
  misconceptions: <Misconceptions />,
  conversion: <Conversion />,
};

export const TrialOrganizationPath = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{backgroundColor: colors.canvas, overflow: 'hidden'}}>
      {sequenceEntries.map(([name, scene]) => (
        <Sequence key={name} from={scene.start} durationInFrames={scene.duration} name={name} layout="none">{scenes[name]}</Sequence>
      ))}
      <div style={{position: 'absolute', left: 92, right: 92, bottom: 50, height: 3, backgroundColor: colors.line}}>
        <div style={{width: `${interpolate(frame, [0, DURATION_FRAMES - 1], [0, 100], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}%`, height: '100%', backgroundColor: colors.ink}} />
      </div>
    </AbsoluteFill>
  );
};
