import type {CSSProperties, ReactNode} from 'react';
import {ArrowDownToLine, ArrowUpFromLine, Feather, Move, Ruler, Scale, Ship, Sprout} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  loam: '#8A7D63',
  loamDeep: '#75694F',
  pot: '#F2E9D4',
  potDim: '#E4DABF',
  potEdge: '#6E6350',
  ink: '#2B2721',
  inkSoft: '#59503F',
  sap: '#4E7A3C',
  sapPale: '#D6E0C8',
  bark: '#6B4A32',
  barkPale: '#E2D3C4',
  lilac: '#7C5E88',
  lilacPale: '#E0D5E6',
  wax: '#A3453A',
  waxPale: '#EFD2CA',
  ochre: '#B08A38',
  ochrePale: '#EDDDB4',
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
      backgroundColor: C.loam,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(90deg, transparent 0 138px, ${C.paper}0A 138px 140px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.bark}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.ochre}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.loamDeep, borderLeft: `8px solid ${C.sap}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 20 · {code}</span>
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
        borderBottom: `2px solid ${C.ochre}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.ochrePale, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Pot = ({children, marker, style, tone}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.pot, border: `2px solid ${C.potEdge}`, color: C.ink, position: 'relative', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.ochre}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.ochre}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.ochre}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.ochre}} />
    {children}
  </div>
);

const LabelTab = ({children, bar = C.sap}: {readonly children: ReactNode; readonly bar?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', padding: '5px 14px', backgroundColor: C.loamDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{children}</span>
);

const SproutChip = ({tone = C.sap, children, solid = false}: {readonly tone?: string; readonly children: ReactNode; readonly solid?: boolean}) => (
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

const Stamp = ({children, delay = 0, size = 26, tone = C.wax}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

const InkUnderline = ({children, color = C.wax, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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
  <div style={{backgroundColor: 'rgba(117, 105, 79, 0.92)', border: `2px solid ${C.ochre}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

export const DefinitionClassificationScene = () => {
  /* data-final-knowledge="definition-heading" data-final-knowledge="definition-board" data-final-knowledge="endogenous-pot" data-final-knowledge="exogenous-pot" */
  return (
    <Shell code="01" kicker="定义与分类" title="法的现代化：两种生长方式">
      <div
        data-layout="seedbed-board-with-origin-pair"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="modernization-definition,endogenous-origin-pot,exogenous-origin-pot"
        data-focal-rule="modernization-grows-inward-or-is-grafted-from-abroad"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="definition-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.pot, border: `3px solid ${C.potEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              法的现代化＝<InkUnderline delay={36}>现代性因素不断增加</InkUnderline>的过程
            </span>
          </div>
        </Enter>
        <Enter delay={26} from="up" marker="definition-board" style={{position: 'absolute', left: 40, top: 104, width: 1736, height: 130}}>
          <Pot tone={C.ochre} style={{height: '100%', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 18}}>
            <LabelTab bar={C.ochre}>定义</LabelTab>
            <span style={{fontSize: 24, fontWeight: 880, color: C.ink, lineHeight: 1.5, flex: 1}}>
              与现代化需要相适应的、法的<Soft color={C.sap}>现代性因素</Soft>不断增加的过程——现代化是从<Soft color={C.lilac}>物质到精神、制度到观念</Soft>的社会总体变迁
            </span>
          </Pot>
        </Enter>
        <Enter delay={54} from="left" marker="endogenous-pot" style={{position: 'absolute', left: 40, top: 262, width: 850, height: 268}}>
          <Pot tone={C.sap} style={{height: '100%', padding: '18px 24px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Sprout size={40} color={C.sap} strokeWidth={2.3} />
              <LabelTab bar={C.sap}>内发型现代化</LabelTab>
            </div>
            <div style={{fontSize: 24, fontWeight: 880, color: C.ink, lineHeight: 1.5, marginTop: 4}}>
              <Soft color={C.sap}>本国</Soft>经济和社会的<Soft color={C.sap}>自然发展</Soft>推动
            </div>
            <div style={{marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 12}}>
              <SproutChip tone={C.sap} solid>
                代表：英国 · 德国等欧洲国家
              </SproutChip>
            </div>
          </Pot>
        </Enter>
        <Enter delay={82} from="right" marker="exogenous-pot" style={{position: 'absolute', left: 930, top: 262, width: 886, height: 268}}>
          <Pot tone={C.lilac} style={{height: '100%', padding: '18px 24px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Ship size={40} color={C.lilac} strokeWidth={2.3} />
              <LabelTab bar={C.lilac}>外源型现代化</LabelTab>
            </div>
            <div style={{fontSize: 24, fontWeight: 880, color: C.ink, lineHeight: 1.5, marginTop: 4}}>
              <Soft color={C.lilac}>战争、殖民</Soft>等外来因素和动力推动
            </div>
            <div style={{marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 12}}>
              <SproutChip tone={C.lilac} solid>
                代表：亚非等曾被列强殖民的国家
              </SproutChip>
            </div>
          </Pot>
        </Enter>
        <Enter delay={160} from="up" style={{position: 'absolute', left: 40, top: 566, width: 1736}}>
          <DarkStrip style={{height: 100}}>
            <span style={{padding: '4px 13px', backgroundColor: C.ochre, color: C.loamDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>分水岭</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              只问一件事：现代化靠<Soft color={C.sapPale}>自己长出来</Soft>，还是靠<Soft color={C.lilacPale}>外面移进来</Soft>
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const ProcessFrictionScene = () => {
  /* data-final-knowledge="process-heading" data-final-knowledge="process-direction-pair" data-final-knowledge="friction-contrast-pair" data-final-knowledge="fusion-key-verdict" */
  return (
    <Shell code="02" kicker="过程与阻力" title="自下而上，还是自上而下">
      <div
        data-layout="process-friction-nursery-rows"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="process-direction-pair,friction-contrast-pair,fusion-key-verdict"
        data-focal-rule="exogenous-grafts-transplant-law-and-friction-decides-success"
        data-focal-channels="icon,contrast,connector,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="process-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.pot, border: `3px solid ${C.potEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              过程特点 · 现代化的阻碍——<InkUnderline delay={36}>两行对照</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="process-direction-pair" style={{position: 'absolute', left: 40, top: 104, width: 1736, height: 150}}>
          <Pot tone={C.sap} style={{height: '100%', padding: '16px 24px', display: 'flex', alignItems: 'center', gap: 18}}>
            <LabelTab bar={C.sap}>过程特点</LabelTab>
            <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 24, fontWeight: 950, color: C.ink, width: 330}}>
              <ArrowUpFromLine size={34} color={C.sap} strokeWidth={2.3} />
              内发：自下而上
            </span>
            <span style={{fontSize: 23, fontWeight: 880, color: C.ink, width: 500}}>社会发展在<Soft color={C.sap}>前</Soft> · 法律变革在<Soft color={C.sap}>后</Soft></span>
            <span style={{width: 2, height: 64, backgroundColor: C.potEdge}} />
            <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 24, fontWeight: 950, color: C.ink, width: 330}}>
              <ArrowDownToLine size={34} color={C.lilac} strokeWidth={2.3} />
              外源：自上而下
            </span>
            <span style={{fontSize: 23, fontWeight: 880, color: C.ink, flex: 1}}>国家为解决<Soft color={C.lilac}>政治困局</Soft>，被迫推动法律变革</span>
          </Pot>
        </Enter>
        <Enter delay={62} from="left" marker="friction-contrast-pair" style={{position: 'absolute', left: 40, top: 278, width: 1736, height: 176}}>
          <Pot tone={C.wax} style={{height: '100%', padding: '16px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 18}}>
              <LabelTab bar={C.wax}>现代化的阻碍</LabelTab>
              <span style={{fontSize: 24, fontWeight: 950, color: C.ink, width: 330}}>内发：自发的</span>
              <span style={{fontSize: 23, fontWeight: 880, color: C.ink, flex: 1}}>一般不存在太大的<Soft color={C.sap}>内部阻力</Soft></span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 18}}>
              <span style={{fontSize: 24, fontWeight: 950, color: C.ink, width: 330, marginLeft: 174}}>
                <Move size={32} color={C.lilac} strokeWidth={2.3} style={{verticalAlign: '-6px', marginRight: 6}} />
                外源：被迫的
              </span>
              <span style={{fontSize: 23, fontWeight: 880, color: C.ink, flex: 1}}>
                常采用<Soft color={C.lilac}>法律移植</Soft>——外来制度与<Soft color={C.wax}>本土法文化</Soft>不适应甚至冲突
              </span>
            </div>
          </Pot>
        </Enter>
        <Enter delay={120} from="up" marker="fusion-key-verdict" style={{position: 'absolute', left: 40, top: 486, width: 1736}}>
          <Pot tone={C.ochre} style={{height: 110, padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 18}}>
            <span style={{fontSize: 24, fontWeight: 950, color: C.ink, width: 330, marginLeft: 174}}>融合难度大</span>
            <span style={{fontSize: 23, fontWeight: 880, color: C.ink, flex: 1}}>外源型虽发生<Soft color={C.lilac}>迅速、突然</Soft>，真正与本土法文化融合难度很大</span>
            <Stamp delay={150} size={25}>能否融合＝成败关键</Stamp>
          </Pot>
        </Enter>
        <Enter delay={180} from="up" style={{position: 'absolute', left: 40, top: 620, width: 1736}}>
          <DarkStrip style={{height: 90}}>
            <span style={{padding: '4px 13px', backgroundColor: C.ochre, color: C.loamDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>一句记</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              内发自下而上慢慢长 · 外源自上而下被迫移——<Soft color={C.waxPale}>移来之后能不能活，才见真章</Soft>
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const ModernMarksScene = () => {
  /* data-final-knowledge="marks-heading" data-final-knowledge="separation-plaque" data-final-knowledge="values-plaque" data-final-knowledge="rationality-plaque" */
  return (
    <Shell code="03" kicker="三个标志" title="现代化长成了什么样">
      <div
        data-layout="three-marks-growth-row"
        data-visual-anchor="typographic-sequence"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="law-morality-separation,modern-values-guard,formal-rationality-rail"
        data-focal-rule="modern-law-splits-from-morality-and-turns-formally-rational"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="marks-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.pot, border: `3px solid ${C.potEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              法的现代化的<InkUnderline delay={36}>三个标志</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={26} from="left" marker="separation-plaque" style={{position: 'absolute', left: 40, top: 104, width: 560, height: 400}}>
          <Pot tone={C.wax} style={{height: '100%', padding: '18px 22px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Scale size={38} color={C.wax} strokeWidth={2.3} />
              <span style={{fontSize: 20, fontWeight: 950, color: C.ochre, letterSpacing: 3}}>01</span>
            </div>
            <div style={{fontSize: 27, fontWeight: 950, color: C.ink, lineHeight: 1.4}}>
              法与道德<InkUnderline color={C.wax} delay={60}>相互分离</InkUnderline>
            </div>
            <div style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              法成为<Soft color={C.wax}>形式法</Soft>——合法性来自<Soft color={C.wax}>法自身</Soft>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 850, color: C.inkSoft}}>不再靠道德背书</div>
          </Pot>
        </Enter>
        <Enter delay={54} from="up" marker="values-plaque" style={{position: 'absolute', left: 632, top: 104, width: 560, height: 400}}>
          <Pot tone={C.sap} style={{height: '100%', padding: '18px 22px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Feather size={38} color={C.sap} strokeWidth={2.3} />
              <span style={{fontSize: 20, fontWeight: 950, color: C.ochre, letterSpacing: 3}}>02</span>
            </div>
            <div style={{fontSize: 27, fontWeight: 950, color: C.ink, lineHeight: 1.4}}>保护现代价值观念</div>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 10}}>
              <SproutChip tone={C.sap}>自由</SproutChip>
              <SproutChip tone={C.sap}>人权</SproutChip>
              <SproutChip tone={C.sap}>平等</SproutChip>
              <SproutChip tone={C.sap}>效率</SproutChip>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 850, color: C.inkSoft}}>突出对现代价值的保护</div>
          </Pot>
        </Enter>
        <Enter delay={82} from="right" marker="rationality-plaque" style={{position: 'absolute', left: 1224, top: 104, width: 592, height: 400}}>
          <Pot tone={C.lilac} style={{height: '100%', padding: '18px 22px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Ruler size={38} color={C.lilac} strokeWidth={2.3} />
              <span style={{fontSize: 20, fontWeight: 950, color: C.ochre, letterSpacing: 3}}>03</span>
            </div>
            <div style={{fontSize: 27, fontWeight: 950, color: C.ink, lineHeight: 1.4}}>法的形式合理</div>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 9}}>
              {['可理解性', '精确性', '一致性', '普遍性', '公开性', '成文性', '不溯及既往'].map((trait) => (
                <SproutChip key={trait} tone={C.lilac}>
                  {trait}
                </SproutChip>
              ))}
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 850, color: C.inkSoft}}>形式理性标准</div>
          </Pot>
        </Enter>
        <Enter delay={170} from="up" style={{position: 'absolute', left: 40, top: 540, width: 1736}}>
          <DarkStrip style={{height: 110}}>
            <span style={{padding: '4px 13px', backgroundColor: C.ochre, color: C.loamDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>一句记</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              分离道德 · 守护价值 · <Soft color={C.ochrePale}>形式合理</Soft>——三样齐备，法才现代化
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const LegalModernization = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-definition-classification" {...SCENES.definitionClassification}>
      <DefinitionClassificationScene />
    </TimelineSequence>
    <TimelineSequence name="02-process-friction" {...SCENES.processFriction}>
      <ProcessFrictionScene />
    </TimelineSequence>
    <TimelineSequence name="03-modern-marks" {...SCENES.modernMarks}>
      <ModernMarksScene />
    </TimelineSequence>
  </AbsoluteFill>
);
