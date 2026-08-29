import type {CSSProperties, ReactNode} from 'react';
import {
  Ban,
  Check,
  Feather,
  FileText,
  HeartHandshake,
  HelpCircle,
  Key,
  Landmark,
  Layers,
  ScrollText,
  Users,
} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  lacquer: '#221D18',
  lacquerDeep: '#191510',
  screen: '#F1E7D2',
  screenWarm: '#EFE2C8',
  ink: '#2A241C',
  plaque: '#33291E',
  paper: '#F2E8D5',
  vermilion: '#B8432F',
  indigo: '#3E4B7E',
  gold: '#C9A254',
  goldDeep: '#8A713C',
  jade: '#5E8C6A',
  line: '#7C6F58',
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

const GoldLabel = ({children, tone = C.goldDeep}: {readonly children: ReactNode; readonly tone?: string}) => (
  <span style={{display: 'inline-block', padding: '5px 14px', backgroundColor: tone, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>
    {children}
  </span>
);

const Soft = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}26`, padding: '2px 9px'}}>{children}</span>
);

const InkChip = ({accent = C.line, children, solid = false}: {readonly accent?: string; readonly children: ReactNode; readonly solid?: boolean}) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '4px 12px',
      border: `2px solid ${accent}`,
      backgroundColor: solid ? accent : `${accent}14`,
      fontSize: 23,
      fontWeight: 870,
      color: solid ? C.paper : C.plaque,
    }}
  >
    {children}
  </span>
);

const Stamp = ({children, color = C.vermilion, delay = 0, size = 30}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number; readonly size?: number}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '10px 20px',
        border: `5px solid ${color}`,
        color,
        fontSize: size,
        fontWeight: 950,
        letterSpacing: 3,
        opacity: p,
        scale: 0.86 + p * 0.14,
        rotate: '-2deg',
        backgroundColor: '#FFFFFF0A',
      }}
    >
      {children}
    </span>
  );
};

const Underline = ({children, color = C.vermilion, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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
          height: 5,
          backgroundColor: color,
          scale: `${prog(frame, delay, 22)} 1`,
          transformOrigin: 'left center',
        }}
      />
    </span>
  );
};

const ScreenPanel = ({
  children,
  band,
  style,
}: {
  readonly children: ReactNode;
  readonly band: string;
  readonly style?: CSSProperties;
}) => (
  <div
    style={{
      position: 'absolute',
      backgroundColor: C.screen,
      border: `2px solid ${C.goldDeep}`,
      borderTop: `14px solid ${band}`,
      boxShadow: 'none',
      ...style,
    }}
  >
    {children}
    <div style={{position: 'absolute', left: 60, right: 60, bottom: -22, display: 'flex', justifyContent: 'space-between'}}>
      {[0, 1, 2, 3].map((foot) => (
        <span key={foot} style={{width: 30, height: 22, backgroundColor: C.lacquerDeep, border: `1px solid ${C.goldDeep}`}} />
      ))}
    </div>
  </div>
);

const Shell = ({children, code, kicker, title}: {readonly children: ReactNode; readonly code: string; readonly kicker: string; readonly title: string}) => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: C.lacquer, color: C.paper, fontFamily: 'var(--inkloom-animation-body)', overflow: 'hidden'}}
  >
    <div style={{position: 'absolute', left: 150, top: 0, bottom: 0, width: 88, backgroundColor: '#000000', opacity: 0.14}} />
    <div style={{position: 'absolute', right: 210, top: 0, bottom: 0, width: 60, backgroundColor: '#000000', opacity: 0.1}} />
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `1px solid ${C.gold}`}} />
    {[
      {left: 18, top: 18, borderLeft: 5, borderTop: 5},
      {right: 18, top: 18, borderRight: 5, borderTop: 5},
      {left: 18, bottom: 18, borderLeft: 5, borderBottom: 5},
      {right: 18, bottom: 18, borderRight: 5, borderBottom: 5},
    ].map((pos, index) => (
      <div key={index} style={{position: 'absolute', width: 44, height: 44, borderColor: C.gold, ...pos}} />
    ))}
    <div style={{position: 'absolute', left: 62, top: 46, width: 66, height: 66, backgroundColor: C.vermilion, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <span style={{fontSize: 30, fontWeight: 950, color: C.paper, fontFamily: 'var(--inkloom-animation-title)'}}>考点</span>
    </div>
    <header
      style={{
        position: 'absolute',
        left: 152,
        right: 72,
        top: 40,
        height: 92,
        display: 'grid',
        gridTemplateColumns: '86px 1fr auto',
        alignItems: 'center',
        gap: 20,
        borderBottom: `2px solid ${C.gold}`,
      }}
    >
      <b style={{fontSize: 21, fontWeight: 950, color: C.gold, letterSpacing: 1}}>01 / {code}</b>
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.gold, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

export const DisputePremiseScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="question-plaque" data-final-knowledge="qualifier-conceptual" data-final-knowledge="qualifier-necessary" data-final-knowledge="qualifier-warning" data-final-knowledge="concession-content-link" data-final-knowledge="concession-conceptual-contingent" data-final-knowledge="focus-conclusion" */
  const axisRise = prog(frame, 0, 26);
  return (
    <Shell code="01" kicker="先钉死争议前提" title="一个前提：概念上的必然联系">
      <div
        data-layout="axis-question-with-qualifier-gates"
        data-visual-anchor="boundary"
        data-text-treatments="label-block,soft-highlight,thin-underline,external-negation"
        data-visual-grammar="definitional-gate,qualifier-scope,concession-contrast"
        data-focal-rule="dispute-is-only-about-necessary-conceptual-link"
        data-focal-channels="icon,enclosure,annotation,spatial,contrast"
        style={{position: 'absolute', inset: 0}}
      >
        <div
          style={{
            position: 'absolute',
            left: 884,
            top: interpolate(frame, [0, 26], [80, 36], CLAMP),
            bottom: 36,
            width: 5,
            backgroundColor: C.gold,
            opacity: axisRise,
          }}
        />
        <div style={{position: 'absolute', left: 876, top: 20, width: 21, height: 21, backgroundColor: C.gold, rotate: '45deg', opacity: axisRise}} />
        <Enter delay={10} from="down" marker="question-plaque" style={{position: 'absolute', left: 408, top: 56, width: 960}}>
          <div style={{backgroundColor: C.screen, border: `3px solid ${C.goldDeep}`, padding: '20px 30px', display: 'flex', alignItems: 'center', gap: 18}}>
            <HelpCircle size={46} color={C.goldDeep} strokeWidth={2.3} />
            <div style={{fontSize: 37, fontWeight: 950, lineHeight: 1.3, color: C.ink}}>
              法律与道德之间，是否存在
              <Underline color={C.vermilion} delay={30}>
                <Soft color={C.vermilion}>概念上的必然联系</Soft>
              </Underline>
              ？
            </div>
          </div>
        </Enter>
        <Enter delay={58} from="left" marker="qualifier-conceptual" style={{position: 'absolute', left: 500, top: 218, width: 350}}>
          <div style={{backgroundColor: C.screen, border: `3px solid ${C.goldDeep}`, borderTopWidth: 10, padding: '18px 22px', textAlign: 'center'}}>
            <GoldLabel>限定一</GoldLabel>
            <div style={{marginTop: 12, fontSize: 35, fontWeight: 950, color: C.plaque}}>「概念上」</div>
            <div style={{marginTop: 8, fontSize: 23, fontWeight: 830, color: C.line}}>即本质上</div>
          </div>
        </Enter>
        <Enter delay={76} from="right" marker="qualifier-necessary" style={{position: 'absolute', left: 926, top: 218, width: 350}}>
          <div style={{backgroundColor: C.screen, border: `3px solid ${C.goldDeep}`, borderTopWidth: 10, padding: '18px 22px', textAlign: 'center'}}>
            <GoldLabel>限定二</GoldLabel>
            <div style={{marginTop: 12, fontSize: 35, fontWeight: 950, color: C.plaque}}>「必然」</div>
            <div style={{marginTop: 8, fontSize: 23, fontWeight: 830, color: C.line}}>区分于偶然</div>
          </div>
        </Enter>
        <Enter delay={104} marker="qualifier-warning" style={{position: 'absolute', left: 500, top: 426, width: 776}}>
          <div style={{border: `3px solid ${C.vermilion}`, backgroundColor: '#B8432F2E', padding: '13px 22px', display: 'flex', alignItems: 'center', gap: 14}}>
            <Ban size={32} color={'#E0654A'} strokeWidth={2.6} />
            <span style={{fontSize: 26, fontWeight: 880, color: C.paper}}>
              改变或遗漏其一，表述均<span style={{color: '#E0654A', fontWeight: 950}}>错误</span>
            </span>
          </div>
        </Enter>
        <Enter delay={140} from="left" marker="concession-content-link" style={{position: 'absolute', left: 96, top: 532, width: 720}}>
          <div style={{backgroundColor: C.screen, border: `2px solid ${C.jade}`, borderLeftWidth: 10, padding: '16px 22px'}}>
            <InkChip accent={C.jade}>内容层面 · 无人否认</InkChip>
            <div style={{marginTop: 10, fontSize: 25, fontWeight: 850, color: C.ink}}>
              <Check size={26} color={C.jade} strokeWidth={3} style={{verticalAlign: '-4px', marginRight: 8}} />
              内容上存在联系，甚至<Soft color={C.jade}>必然联系</Soft>
            </div>
          </div>
        </Enter>
        <Enter delay={158} from="right" marker="concession-conceptual-contingent" style={{position: 'absolute', left: 960, top: 532, width: 720}}>
          <div style={{backgroundColor: C.screen, border: `2px solid ${C.jade}`, borderLeftWidth: 10, padding: '16px 22px'}}>
            <InkChip accent={C.jade}>概念层面 · 无人否认</InkChip>
            <div style={{marginTop: 10, fontSize: 25, fontWeight: 850, color: C.ink}}>
              <Check size={26} color={C.jade} strokeWidth={3} style={{verticalAlign: '-4px', marginRight: 8}} />
              概念上存在<Soft color={C.jade}>偶然关联</Soft>
            </div>
          </div>
        </Enter>
        <Enter delay={196} marker="focus-conclusion" style={{position: 'absolute', left: 408, top: 668, width: 960}}>
          <div style={{backgroundColor: C.plaque, border: `4px solid ${C.gold}`, padding: '14px 26px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16}}>
            <Key size={34} color={C.gold} strokeWidth={2.4} />
            <span style={{fontSize: 31, fontWeight: 950, color: C.paper}}>
              真正的争议焦点，仅限<Soft color={C.gold}>「概念上的必然联系」</Soft>
            </span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

const WeightLanes = ({
  delay,
  icon,
  marker,
  school,
  primary,
  primaryNote,
  secondary,
}: {
  readonly delay: number;
  readonly icon: ReactNode;
  readonly marker: string;
  readonly school: string;
  readonly primary: string;
  readonly primaryNote: string;
  readonly secondary: string;
}) => (
  <Enter delay={delay} from="left" marker={marker} style={{marginTop: 20}}>
    <div style={{backgroundColor: C.screenWarm, border: `2px solid ${C.goldDeep}`, borderLeftWidth: 10, padding: '17px 22px', display: 'flex', alignItems: 'center', gap: 16}}>
      {icon}
      <span style={{fontSize: 29, fontWeight: 950, color: C.plaque, width: 152}}>{school}</span>
      <InkChip accent={C.vermilion} solid>
        主 · {primary}
      </InkChip>
      <span style={{fontSize: 22, fontWeight: 830, color: C.line}}>{primaryNote}</span>
      <InkChip accent={C.line}>辅 · {secondary}</InkChip>
    </div>
  </Enter>
);

export const PositivistCampScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="positivist-verdict" data-final-knowledge="law-system-block" data-final-knowledge="moral-system-block" data-final-knowledge="detach-note" data-final-knowledge="analytic-school-lane" data-final-knowledge="sociology-school-lane" data-final-knowledge="positivist-mnemonic" */
  return (
    <Shell code="02" kicker="阵营一" title="实证主义：不承认">
      <div
        data-layout="detached-systems-with-mirrored-school-lanes"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="criterion-weighting,school-contrast,separate-systems"
        data-focal-rule="law-and-moral-are-never-subordinate-systems"
        data-focal-channels="icon,spatial,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <ScreenPanel band={C.vermilion} style={{left: 0, top: 0, width: 1500, height: 752}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 18, padding: '26px 40px 0'}}>
            <GoldLabel tone={C.vermilion}>实证主义 · 研究实然法</GoldLabel>
            <span style={{marginLeft: 'auto'}} data-final-knowledge="positivist-verdict">
              <Stamp delay={22} size={32}>
                不承认
              </Stamp>
            </span>
          </div>
          <div style={{position: 'relative', marginTop: 28, height: 300}}>
            <Enter delay={44} from="left" marker="law-system-block" style={{position: 'absolute', left: 80, top: 0, width: 520, height: 300}}>
              <div style={{backgroundColor: C.screen, border: `3px solid ${C.vermilion}`, height: '100%', padding: '30px 30px', display: 'flex', flexDirection: 'column', gap: 18}}>
                <FileText size={52} color={C.vermilion} strokeWidth={2.2} />
                <div style={{fontSize: 39, fontWeight: 950, color: C.plaque}}>法律系统</div>
                <div style={{fontSize: 24, fontWeight: 830, color: C.line}}>一套独立的规范系统</div>
              </div>
            </Enter>
            <Enter delay={62} from="none" marker="moral-system-block" style={{position: 'absolute', left: 900, top: 0, width: 520, height: 300}}>
              <div style={{backgroundColor: C.screen, border: `3px solid ${C.line}`, height: '100%', padding: '30px 30px', display: 'flex', flexDirection: 'column', gap: 18}}>
                <HeartHandshake size={52} color={C.line} strokeWidth={2.2} />
                <div style={{fontSize: 39, fontWeight: 950, color: C.plaque}}>道德系统</div>
                <div style={{fontSize: 24, fontWeight: 830, color: C.line}}>另一套独立的规范系统</div>
              </div>
            </Enter>
            <div
              style={{
                position: 'absolute',
                left: 600,
                top: 0,
                width: 300,
                height: 300,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 12,
                opacity: prog(frame, 84, 16),
              }}
            >
              <span style={{width: 0, height: 104, borderLeft: `3px dashed ${C.goldDeep}`}} />
              <span style={{fontSize: 26, fontWeight: 950, color: C.goldDeep, letterSpacing: 2, textAlign: 'center'}}>
                本质上
                <br />
                互不隶属
              </span>
              <span style={{width: 0, height: 104, borderLeft: `3px dashed ${C.goldDeep}`}} />
            </div>
          </div>
          <Enter delay={104} marker="detach-note" style={{margin: '28px 80px 0'}}>
            <div style={{border: `2px solid ${C.jade}`, backgroundColor: '#5E8C6A14', padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 13}}>
              <Check size={30} color={C.jade} strokeWidth={3} />
              <span style={{fontSize: 27, fontWeight: 880, color: C.ink}}>
                完全可以<Soft color={C.jade}>脱离道德</Soft>谈法律
              </span>
            </div>
          </Enter>
          <div style={{margin: '26px 80px 0'}}>
            <WeightLanes
              delay={132}
              icon={<ScrollText size={36} color={C.vermilion} strokeWidth={2.3} />}
              marker="analytic-school-lane"
              primary="权威性制定"
              primaryNote="看是否出自立法权威"
              school="分析法学"
              secondary="社会实效"
            />
            <WeightLanes
              delay={156}
              icon={<Users size={36} color={C.vermilion} strokeWidth={2.3} />}
              marker="sociology-school-lane"
              primary="社会实效"
              primaryNote="看规范是否真被遵守"
              school="法社会学"
              secondary="权威性制定"
            />
          </div>
        </ScreenPanel>
        <Enter delay={180} from="right" marker="positivist-mnemonic" style={{position: 'absolute', right: 0, top: 150, width: 224}}>
          <div style={{backgroundColor: C.plaque, border: `3px solid ${C.gold}`, padding: '34px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22}}>
            <GoldLabel>口诀</GoldLabel>
            <div style={{writingMode: 'vertical-rl', fontSize: 31, fontWeight: 950, color: C.paper, letterSpacing: 8, fontFamily: 'var(--inkloom-animation-title)'}}>分析重权威</div>
            <div style={{writingMode: 'vertical-rl', fontSize: 31, fontWeight: 950, color: C.gold, letterSpacing: 8, fontFamily: 'var(--inkloom-animation-title)'}}>社会重实效</div>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const NonPositivistCampScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="non-positivist-verdict" data-final-knowledge="moral-containment-frame" data-final-knowledge="law-subordinate-token" data-final-knowledge="detach-negation" data-final-knowledge="classical-natural-law-card" data-final-knowledge="third-road-card" data-final-knowledge="pair-divergence-note" data-final-knowledge="non-positivist-mnemonic" */
  const descend = interpolate(frame, [40, 88], [0, 1], CLAMP);
  const tokenTop = interpolate(frame, [40, 88], [-40, 250], CLAMP);
  return (
    <Shell code="03" kicker="阵营二" title="非实证主义：承认">
      <div
        data-layout="moral-containment-with-school-pair"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,soft-highlight,stamp,chip,external-negation"
        data-visual-grammar="moral-containment,element-count-contrast,school-pair"
        data-focal-rule="law-is-in-essence-subordinate-to-morality"
        data-focal-channels="icon,enclosure,motion,contrast,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={186} from="left" marker="non-positivist-mnemonic" style={{position: 'absolute', left: 0, top: 150, width: 224}}>
          <div style={{backgroundColor: C.plaque, border: `3px solid ${C.gold}`, padding: '34px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22}}>
            <GoldLabel>口诀</GoldLabel>
            <div style={{writingMode: 'vertical-rl', fontSize: 31, fontWeight: 950, color: C.paper, letterSpacing: 8, fontFamily: 'var(--inkloom-animation-title)'}}>古典只正确</div>
            <div style={{writingMode: 'vertical-rl', fontSize: 31, fontWeight: 950, color: C.gold, letterSpacing: 8, fontFamily: 'var(--inkloom-animation-title)'}}>三条道路全都要</div>
          </div>
        </Enter>
        <ScreenPanel band={C.indigo} style={{right: 0, top: 0, width: 1500, height: 752}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 18, padding: '26px 40px 0'}}>
            <span data-final-knowledge="non-positivist-verdict">
              <Stamp color={C.indigo} delay={22} size={32}>
                承认
              </Stamp>
            </span>
            <span style={{marginLeft: 'auto'}}>
              <GoldLabel tone={C.indigo}>非实证主义 · 研究应然法</GoldLabel>
            </span>
          </div>
          <div style={{position: 'relative', margin: '26px 0 0 40px', height: 434, width: 580}}>
            <Enter delay={44} from="none" marker="moral-containment-frame" style={{position: 'absolute', left: 0, top: 40, width: 580, height: 384}}>
              <div style={{border: `4px solid ${C.indigo}`, backgroundColor: '#3E4B7E0D', height: '100%', padding: '22px 26px', position: 'relative'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                  <HeartHandshake size={44} color={C.indigo} strokeWidth={2.3} />
                  <span style={{fontSize: 37, fontWeight: 950, color: C.plaque}}>道德</span>
                  <span style={{fontSize: 22, fontWeight: 830, color: C.line}}>定义法律时的上位框架</span>
                </div>
                <div
                  data-stateful-terminal="law-subordinate-morality"
                  style={{
                    position: 'absolute',
                    left: 70,
                    right: 70,
                    top: 200,
                    border: `3px solid ${C.plaque}`,
                    backgroundColor: C.screen,
                    padding: '16px 20px',
                    opacity: descend,
                  }}
                >
                  <div data-final-knowledge="law-subordinate-token" style={{display: 'flex', alignItems: 'center', gap: 12}}>
                    <Landmark size={38} color={C.plaque} strokeWidth={2.3} />
                    <span style={{fontSize: 32, fontWeight: 950, color: C.plaque}}>法律</span>
                    <span style={{fontSize: 22, fontWeight: 870, color: C.indigo}}>
                      本质上<Soft color={C.indigo}>隶属于道德</Soft>
                    </span>
                  </div>
                </div>
              </div>
            </Enter>
            <div
              data-stateful-source="law-subordinate-morality"
              style={{
                position: 'absolute',
                left: 200,
                top: tokenTop,
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                opacity: 1 - descend,
              }}
            >
              <span style={{backgroundColor: C.screen, border: `3px solid ${C.plaque}`, padding: '9px 18px', fontSize: 30, fontWeight: 950, color: C.plaque, display: 'inline-flex', alignItems: 'center', gap: 10}}>
                <Landmark size={32} color={C.plaque} strokeWidth={2.3} />
                法律
              </span>
              <span style={{fontSize: 30, color: C.indigo, fontWeight: 950}}>↓</span>
            </div>
          </div>
          <Enter delay={100} marker="detach-negation" style={{margin: '30px 40px 0', width: 580}}>
            <div style={{border: `3px solid ${C.vermilion}`, backgroundColor: '#B8432F12', padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 13}}>
              <Ban size={30} color={C.vermilion} strokeWidth={2.6} />
              <span style={{fontSize: 26, fontWeight: 880, color: C.ink}}>
                不可以<Soft color={C.vermilion}>脱离道德</Soft>谈法律
              </span>
            </div>
          </Enter>
          <div style={{position: 'absolute', right: 40, top: 130, width: 720}}>
            <Enter delay={128} from="right" marker="classical-natural-law-card" style={{}}>
              <div style={{backgroundColor: C.screen, border: `3px solid ${C.indigo}`, padding: '24px 26px', display: 'flex', alignItems: 'center', gap: 16}}>
                <Feather size={44} color={C.indigo} strokeWidth={2.2} />
                <div>
                  <div style={{fontSize: 32, fontWeight: 950, color: C.plaque}}>古典自然法</div>
                  <div style={{marginTop: 8, fontSize: 24, fontWeight: 850, color: C.ink}}>
                    <Soft color={C.indigo}>内容正确</Soft>（道德正确）为<Soft color={C.indigo}>唯一</Soft>要素
                  </div>
                </div>
                <span style={{marginLeft: 'auto'}}>
                  <Stamp color={C.indigo} delay={150} size={26}>
                    唯一
                  </Stamp>
                </span>
              </div>
            </Enter>
            <Enter delay={152} from="right" marker="third-road-card" style={{marginTop: 22}}>
              <div style={{backgroundColor: C.screen, border: `3px solid ${C.indigo}`, padding: '24px 26px'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
                  <Layers size={44} color={C.indigo} strokeWidth={2.2} />
                  <span style={{fontSize: 32, fontWeight: 950, color: C.plaque}}>第三条道路 · 综合法学派</span>
                </div>
                <div style={{marginTop: 14, display: 'flex', flexWrap: 'wrap', gap: 10}}>
                  <InkChip accent={C.vermilion}>权威性制定</InkChip>
                  <InkChip accent={C.line}>社会实效</InkChip>
                  <InkChip accent={C.indigo}>内容正确</InkChip>
                  <InkChip accent={C.goldDeep} solid>
                    三要素全要
                  </InkChip>
                </div>
              </div>
            </Enter>
            <Enter delay={176} marker="pair-divergence-note" style={{marginTop: 24}}>
              <div style={{borderTop: `2px dashed ${C.goldDeep}`, paddingTop: 16, fontSize: 25, fontWeight: 880, color: C.ink, textAlign: 'center'}}>
                两派分歧只在要素数量：<Soft color={C.indigo}>唯一</Soft> vs <Soft color={C.goldDeep}>全要</Soft>
              </div>
            </Enter>
          </div>
        </ScreenPanel>
      </div>
    </Shell>
  );
};

const ElementRow = ({
  accent,
  delay,
  example,
  icon,
  marker,
  name,
  plain,
}: {
  readonly accent: string;
  readonly delay: number;
  readonly example: string;
  readonly icon: ReactNode;
  readonly marker: string;
  readonly name: string;
  readonly plain: string;
}) => (
  <Enter delay={delay} from="left" marker={marker} style={{marginTop: 20}}>
    <div style={{backgroundColor: C.screen, border: `2px solid ${accent}`, borderLeftWidth: 10, padding: '19px 22px', display: 'flex', alignItems: 'center', gap: 16}}>
      {icon}
      <span style={{fontSize: 30, fontWeight: 950, color: C.plaque, width: 190}}>{name}</span>
      <span style={{fontSize: 28, fontWeight: 950, color: C.goldDeep}}>=</span>
      <InkChip accent={accent} solid={marker === 'element-content-correct'}>
        {example}
      </InkChip>
      <span style={{fontSize: 22, fontWeight: 830, color: C.line}}>{plain}</span>
    </div>
  </Enter>
);

export const ElementsEvilLawScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="lexicon-heading" data-final-knowledge="element-authority" data-final-knowledge="element-effectiveness" data-final-knowledge="element-content-correct" data-final-knowledge="discriminator-key" data-final-knowledge="evil-law-positivist" data-final-knowledge="evil-law-non-positivist" data-final-knowledge="final-mnemonic" */
  return (
    <Shell code="04" kicker="三要素与恶法之争" title="三种认可，一场对决">
      <div
        data-layout="element-lexicon-with-verdict-pair"
        data-visual-anchor="typographic-sequence"
        data-text-treatments="label-block,chip,stamp,thin-underline,external-negation"
        data-visual-grammar="element-lexicon,moral-standard-isolation,verdict-pair"
        data-focal-rule="content-correctness-is-the-only-moral-standard"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <ScreenPanel band={C.goldDeep} style={{left: 0, top: 0, width: 880, height: 600}}>
          <div style={{padding: '24px 34px 0'}}>
            <Enter delay={8} marker="lexicon-heading" from="none">
              <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
                <GoldLabel>三要素 · 通俗概括</GoldLabel>
                <span style={{fontSize: 22, fontWeight: 830, color: C.line}}>三种「认可」</span>
              </div>
            </Enter>
          </div>
          <div style={{margin: '16px 34px 0'}}>
            <ElementRow
              accent={C.vermilion}
              delay={30}
              example="官方认可"
              icon={<Landmark size={38} color={C.vermilion} strokeWidth={2.3} />}
              marker="element-authority"
              name="权威性制定"
              plain="出自立法权威"
            />
            <ElementRow
              accent={C.line}
              delay={54}
              example="民间认可"
              icon={<Users size={38} color={C.line} strokeWidth={2.3} />}
              marker="element-effectiveness"
              name="社会实效"
              plain="事实上被遵守"
            />
            <ElementRow
              accent={C.jade}
              delay={78}
              example="道德正确"
              icon={<HeartHandshake size={38} color={C.jade} strokeWidth={2.3} />}
              marker="element-content-correct"
              name="内容正确"
              plain="内容本身正当"
            />
          </div>
          <Enter delay={112} marker="discriminator-key" style={{margin: '24px 34px 0'}}>
            <div style={{border: `3px solid ${C.goldDeep}`, backgroundColor: '#C9A25416', padding: '18px 20px'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <Key size={32} color={C.goldDeep} strokeWidth={2.5} />
                <span style={{fontSize: 25, fontWeight: 920, color: C.ink}}>
                  官方·民间认可是<Underline color={C.line} delay={136}>非道德性标准</Underline>；<Soft color={C.jade}>内容正确是唯一的道德性标准</Soft>
                </span>
              </div>
              <div style={{marginTop: 8, fontSize: 23, fontWeight: 880, color: C.plaque, textAlign: 'right'}}>—— 区分两大阵营的关键</div>
            </div>
          </Enter>
        </ScreenPanel>
        <div style={{position: 'absolute', left: 920, top: 0, width: 856, height: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 18}}>
          <Enter delay={140} from="right" marker="evil-law-positivist">
            <div style={{backgroundColor: C.plaque, border: `4px solid ${C.vermilion}`, padding: '22px 30px', display: 'flex', alignItems: 'center', gap: 22}}>
              <div>
                <GoldLabel tone={C.vermilion}>实证主义 · 实然法</GoldLabel>
                <div style={{marginTop: 12, fontSize: 23, fontWeight: 830, color: C.paper}}>法律存在与好坏不能混同</div>
              </div>
              <span style={{marginLeft: 'auto'}}>
                <Stamp delay={170} size={42}>
                  恶法亦法
                </Stamp>
              </span>
            </div>
          </Enter>
          <div style={{display: 'flex', alignItems: 'center', gap: 16, padding: '0 40px', opacity: prog(frame, 196, 14)}}>
            <span style={{flex: 1, height: 2, backgroundColor: C.goldDeep}} />
            <span style={{fontSize: 24, fontWeight: 950, color: C.gold, letterSpacing: 2}}>两大阵营之争</span>
            <span style={{flex: 1, height: 2, backgroundColor: C.goldDeep}} />
          </div>
          <Enter delay={210} from="right" marker="evil-law-non-positivist">
            <div style={{backgroundColor: C.plaque, border: `4px solid ${C.indigo}`, padding: '22px 30px', display: 'flex', alignItems: 'center', gap: 22}}>
              <div>
                <GoldLabel tone={C.indigo}>非实证主义 · 应然法</GoldLabel>
                <div style={{marginTop: 12, fontSize: 23, fontWeight: 830, color: C.paper}}>法律效力依附于道德</div>
              </div>
              <span style={{marginLeft: 'auto'}}>
                <Stamp color={C.indigo} delay={238} size={42}>
                  恶法非法
                </Stamp>
              </span>
            </div>
          </Enter>
        </div>
        <Enter delay={252} from="up" marker="final-mnemonic" style={{position: 'absolute', left: 0, right: 0, top: 634}}>
          <div style={{backgroundColor: C.plaque, border: `4px solid ${C.gold}`, padding: '22px 30px', display: 'flex', alignItems: 'center', gap: 26}}>
            <GoldLabel>口诀</GoldLabel>
            <div style={{display: 'flex', flex: 1, justifyContent: 'space-between', fontSize: 28, fontWeight: 950, color: C.paper, fontFamily: 'var(--inkloom-animation-title)'}}>
              <span>概念必然是个宝，阵营区分少不了</span>
              <span style={{color: C.gold}}>·</span>
              <span>分析重权威，社会重实效</span>
              <span style={{color: C.gold}}>·</span>
              <span>古典只正确，三条道路全都要</span>
            </div>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const ConceptOfLawDispute = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-dispute-premise" {...SCENES.disputePremise}>
      <DisputePremiseScene />
    </TimelineSequence>
    <TimelineSequence name="02-positivist-camp" {...SCENES.positivistCamp}>
      <PositivistCampScene />
    </TimelineSequence>
    <TimelineSequence name="03-non-positivist-camp" {...SCENES.nonPositivistCamp}>
      <NonPositivistCampScene />
    </TimelineSequence>
    <TimelineSequence name="04-elements-evil-law" {...SCENES.elementsEvilLaw}>
      <ElementsEvilLawScene />
    </TimelineSequence>
  </AbsoluteFill>
);
