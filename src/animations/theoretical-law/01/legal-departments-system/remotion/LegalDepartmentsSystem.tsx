import type {CSSProperties, ReactNode} from 'react';
import {Award, Ban, BookOpen, Gavel, Globe, Landmark, Layers, Network, Scissors} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  walnut: '#33302B',
  walnutDeep: '#262420',
  cloth: '#F1E9D6',
  clothDim: '#E3D9C2',
  clothEdge: '#6B6153',
  ink: '#2B2721',
  inkSoft: '#57503F',
  thread: '#D9CFAF',
  indigo: '#41598C',
  vermilion: '#AE452C',
  vermilionDeep: '#8A3520',
  moss: '#6B7C3F',
  mossPale: '#D6DCC2',
  ochre: '#C08A2E',
  plum: '#7C4A6B',
  teal: '#3F7A6E',
  wood: '#8A6B4A',
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
      backgroundColor: C.walnut,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(90deg, transparent 0 118px, ${C.thread}0B 118px 120px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.wood}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.ochre}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.walnutDeep, borderLeft: `8px solid ${C.ochre}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 10 · {code}</span>
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
      <span style={{fontSize: 21, fontWeight: 850, color: C.ochre, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Cloth = ({children, marker, style}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.cloth, border: `2px solid ${C.clothEdge}`, color: C.ink, position: 'relative', ...style}}
  >
    <div style={{position: 'absolute', left: 0, right: 0, bottom: 0, height: 8, backgroundColor: C.clothEdge}} />
    {children}
  </div>
);

const LabelTab = ({children, bar = C.ochre}: {readonly children: ReactNode; readonly bar?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', padding: '5px 14px', backgroundColor: C.walnutDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{children}</span>
);

const Bobbin = ({tone, children, solid = false}: {readonly tone: string; readonly children: ReactNode; readonly solid?: boolean}) => (
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

const Seal = ({children, delay = 0, size = 26, tone = C.vermilion}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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
        rotate: '-2deg',
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
  <div style={{backgroundColor: 'rgba(38, 36, 32, 0.72)', border: `2px solid ${C.ochre}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Warp = ({count, tone = C.thread, height = 120, delay = 0, gap = 8}: {readonly count: number; readonly tone?: string; readonly height?: number; readonly delay?: number; readonly gap?: number}) => {
  const frame = useCurrentFrame();
  return (
    <div style={{display: 'flex', gap, height, alignItems: 'stretch', opacity: prog(frame, delay, 20)}}>
      {Array.from({length: count}, (_, index) => (
        <span key={index} style={{width: 2, backgroundColor: tone, opacity: 0.55 + (index % 3) * 0.15}} />
      ))}
    </div>
  );
};

export const DepartmentStandardsScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="dept-heading" data-final-knowledge="dept-definition-panel" data-final-knowledge="standards-ladder" data-final-knowledge="consensus-stamp" data-final-knowledge="standards-mnemonic" */
  const bundleShift = interpolate(frame, [56, 100], [-46, 0], CLAMP);
  return (
    <Shell code="01" kicker="法律部门" title="法律部门：划出同类规范">
      <div
        data-layout="warp-reed-division-bench"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="definition-claim,standards-ladder,warp-division"
        data-focal-rule="departments-split-all-norms-by-object-then-method"
        data-focal-channels="icon,connector,enclosure,contrast,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="dept-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.cloth, border: `3px solid ${C.clothEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              法律部门＝对全部法律规范<InkUnderline delay={36}>划分同类</InkUnderline>的总称
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="dept-definition-panel" style={{position: 'absolute', left: 40, top: 104, width: 700, height: 424}}>
          <Cloth style={{height: '100%', padding: '20px 26px 26px', display: 'flex', flexDirection: 'column', gap: 14}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <LabelTab>定义 · 也称部门法</LabelTab>
              <Layers size={42} color={C.indigo} strokeWidth={2.2} />
            </div>
            <div style={{fontSize: 25, fontWeight: 880, lineHeight: 1.6, marginTop: 8}}>
              根据一定<Soft color={C.ochre}>标准和原则</Soft>
            </div>
            <div style={{fontSize: 25, fontWeight: 880, lineHeight: 1.6}}>
              对一国<Soft color={C.vermilion}>现行</Soft>的全部法律规范
            </div>
            <div style={{fontSize: 25, fontWeight: 880, lineHeight: 1.6}}>
              进行划分所形成的<Soft color={C.indigo}>同类法律规范</Soft>的总称
            </div>
            <div style={{marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 12}}>
              <Bobbin tone={C.indigo} solid>
                别称：部门法
              </Bobbin>
              <span style={{fontSize: 22, fontWeight: 850, color: C.inkSoft}}>一部法不等于一个部门</span>
            </div>
          </Cloth>
        </Enter>
        <Enter delay={52} from="right" marker="standards-ladder" style={{position: 'absolute', left: 790, top: 104, width: 986, height: 424}}>
          <div style={{position: 'absolute', left: 0, top: 0, width: 986, height: 424}}>
            <div style={{position: 'absolute', left: 12, top: 40, height: 344}}>
              <Warp count={13} height={344} delay={60} />
            </div>
            <div style={{position: 'absolute', left: 130, top: 24, height: 376, width: 14, backgroundColor: C.wood, opacity: prog(frame, 70, 16)}}>
              <span style={{position: 'absolute', left: -13, top: -46}}>
                <Scissors size={40} color={C.vermilion} strokeWidth={2.3} style={{rotate: '-90deg'}} />
              </span>
            </div>
            {[
              {tone: C.vermilion, tag: '首要标准', text: <>法律所调整的<Soft color={C.vermilion}>不同社会关系</Soft>——调整对象</>, seal: false},
              {tone: C.indigo, tag: '次要标准', text: <>法律的<Soft color={C.indigo}>调整方法</Soft></>, seal: false},
              {tone: C.ochre, tag: '通说', text: <>以<Soft color={C.ochre}>调整对象为主</Soft> · 调整方法为辅</>, seal: true},
            ].map((row, index) => (
              <Enter
                key={row.tag}
                delay={92 + index * 26}
                from="left"
                marker={index === 2 ? 'consensus-stamp' : undefined}
                style={{position: 'absolute', left: 196 + bundleShift, top: 18 + index * 138, width: 766, height: 108}}
              >
                <Cloth style={{height: '100%', padding: '0 22px 8px 18px', display: 'flex', alignItems: 'center', gap: 16, borderTop: `6px solid ${row.tone}`}}>
                  <span style={{display: 'inline-flex', padding: '4px 12px', backgroundColor: row.tone, color: C.paper, fontSize: 24, fontWeight: 950, letterSpacing: 2, whiteSpace: 'nowrap'}}>{row.tag}</span>
                  <span style={{fontSize: 24, fontWeight: 880, color: C.ink, lineHeight: 1.45}}>{row.text}</span>
                  {row.seal ? (
                    <span style={{marginLeft: 'auto'}}>
                      <Seal delay={160} size={24}>对象为主</Seal>
                    </span>
                  ) : null}
                </Cloth>
              </Enter>
            ))}
          </div>
        </Enter>
        <Enter delay={186} from="up" marker="standards-mnemonic" style={{position: 'absolute', left: 40, top: 560, width: 1736}}>
          <DarkStrip style={{height: 104}}>
            <Award size={36} color={C.ochre} strokeWidth={2.2} />
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              分家先看<Soft color={C.vermilion}>调整对象</Soft>，方法只作<Soft color={C.indigo}>辅助标尺</Soft>——对象定部门，方法补边界
            </span>
            <span style={{marginLeft: 'auto'}}>
              <Bobbin tone={C.ochre} solid>
                通说口径
              </Bobbin>
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

const DYE_COLUMNS = [C.indigo, C.vermilion, C.moss, C.ochre, C.plum, C.teal, C.wood] as const;

export const SystemFeaturesScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="system-heading" data-final-knowledge="woven-whole" data-final-knowledge="current-law-boundary" data-final-knowledge="domestic-law-boundary" data-final-knowledge="warp-weft-gloss" */
  return (
    <Shell code="02" kicker="法律体系" title="法律体系：织成一块布">
      <div
        data-layout="woven-cloth-with-selvedge-boundaries"
        data-visual-anchor="boundary"
        data-text-treatments="label-block,chip,external-negation,soft-highlight"
        data-visual-grammar="system-definition,exclusion-boundary,inclusion-exception"
        data-focal-rule="legal-system-is-living-domestic-norms-woven-into-one-whole"
        data-focal-channels="icon,enclosure,contrast,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="system-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.cloth, border: `3px solid ${C.clothEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              法律体系＝划成部门后<InkUnderline delay={36}>有机联系的整体</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={30} from="up" marker="woven-whole" style={{position: 'absolute', left: 40, top: 104, width: 900, height: 380}}>
          <Cloth style={{height: '100%', padding: '20px 26px 24px', display: 'flex', flexDirection: 'column', gap: 14}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <Network size={42} color={C.indigo} strokeWidth={2.2} />
              <LabelTab bar={C.indigo}>法律体系 · 有机整体</LabelTab>
              <Bobbin tone={C.indigo}>也称部门法体系</Bobbin>
            </div>
            <div style={{position: 'relative', flex: 1, marginTop: 6}}>
              <div style={{position: 'absolute', inset: '0 6px 0 6px', display: 'flex', gap: 14}}>
                {DYE_COLUMNS.map((tone, index) => (
                  <span
                    key={tone}
                    style={{
                      flex: 1,
                      backgroundColor: tone,
                      opacity: prog(frame, 52 + index * 12, 16) * 0.82,
                      scaleY: 0.4 + prog(frame, 52 + index * 12, 16) * 0.6,
                      transformOrigin: 'bottom center',
                    }}
                  />
                ))}
              </div>
              {[0.22, 0.46, 0.7].map((top, index) => (
                <span
                  key={top}
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: `${top * 100}%`,
                    height: 5,
                    backgroundColor: C.thread,
                    opacity: 0.9,
                    scaleX: prog(frame, 92 + index * 14, 18),
                    transformOrigin: 'left center',
                  }}
                />
              ))}
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 14, marginTop: 10}}>
              <span style={{fontSize: 27, fontWeight: 950, color: C.ink}}>
                <Soft color={C.indigo}>内部和谐一致</Soft> · <Soft color={C.moss}>有机联系</Soft>
              </span>
              <span style={{marginLeft: 'auto', fontSize: 22, fontWeight: 850, color: C.inkSoft}}>按一定标准和原则划分</span>
            </div>
          </Cloth>
        </Enter>
        <Enter delay={64} from="right" marker="current-law-boundary" style={{position: 'absolute', left: 990, top: 104, width: 826, height: 180}}>
          <Cloth style={{height: '100%', padding: '18px 24px 22px', display: 'flex', flexDirection: 'column', gap: 14, borderTop: `6px solid ${C.vermilion}`}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <LabelTab bar={C.vermilion}>特征一 · 现行法</LabelTab>
              <Ban size={34} color={C.vermilion} strokeWidth={2.4} />
              <span style={{fontSize: 24, fontWeight: 950, color: C.vermilionDeep}}>三一律外</span>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center'}}>
              <span style={{fontSize: 23, fontWeight: 880, color: C.ink}}>不包括：</span>
              <Bobbin tone={C.vermilion}>已废止</Bobbin>
              <Bobbin tone={C.vermilion}>尚待制定</Bobbin>
              <Bobbin tone={C.vermilion}>已制定未生效</Bobbin>
            </div>
            <div style={{fontSize: 22, fontWeight: 850, color: C.inkSoft}}>只算今天正在生效的规范</div>
          </Cloth>
        </Enter>
        <Enter delay={96} from="right" marker="domestic-law-boundary" style={{position: 'absolute', left: 990, top: 308, width: 826, height: 176}}>
          <Cloth style={{height: '100%', padding: '18px 24px 22px', display: 'flex', flexDirection: 'column', gap: 12, borderTop: `6px solid ${C.indigo}`}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <LabelTab bar={C.indigo}>特征二 · 国内法</LabelTab>
              <Globe size={34} color={C.indigo} strokeWidth={2.2} />
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <span style={{fontSize: 23, fontWeight: 880, color: C.ink}}>不包括</span>
              <Bobbin tone={C.vermilion} solid>
                国际公法
              </Bobbin>
              <span style={{fontSize: 23, fontWeight: 880, color: C.ink}}>· 但包括</span>
              <Bobbin tone={C.moss} solid>
                国际私法
              </Bobbin>
            </div>
            <div style={{fontSize: 22, fontWeight: 900, color: C.vermilionDeep}}>易错点：国际私法在体系之内</div>
          </Cloth>
        </Enter>
        <Enter delay={150} from="up" marker="warp-weft-gloss" style={{position: 'absolute', left: 40, top: 520, width: 1776}}>
          <DarkStrip style={{height: 120}}>
            <span style={{padding: '4px 13px', backgroundColor: C.ochre, color: C.walnutDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>布与线</span>
            <span style={{fontSize: 26, fontWeight: 900, color: C.paper}}>
              法律部门是<Soft color={C.ochre}>经线</Soft>，法律体系是<Soft color={C.indigo}>织成的布</Soft>——先划部门，方成体系
            </span>
            <span style={{marginLeft: 'auto', fontSize: 22, fontWeight: 850, color: C.thread}}>七大部门 · 下一碑铺开</span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

const DEPARTMENTS = [
  {name: '宪法及宪法相关法', tone: C.indigo},
  {name: '民商法', tone: C.vermilion},
  {name: '行政法', tone: C.moss},
  {name: '经济法', tone: C.ochre},
  {name: '社会法', tone: C.plum},
  {name: '刑法', tone: C.teal},
  {name: '诉讼与非诉讼程序法', tone: C.wood},
] as const;

export const SevenDepartmentsScene = () => {
  /* data-final-knowledge="seven-heading" data-final-knowledge="department-pantheon" data-final-knowledge="milestone-strip" data-final-knowledge="scope-greater-strip" */
  return (
  <Shell code="03" kicker="七大部门" title="七大法律部门">
    <div
      data-layout="seven-dyed-column-row"
      data-visual-anchor="typographic-sequence"
      data-text-treatments="label-block,chip,thin-underline,stamp"
      data-visual-grammar="department-pantheon,milestone-strip,scope-greater-note"
      data-focal-rule="seven-departments-form-the-2011-system-now-being-refined"
      data-focal-channels="icon,spatial,contrast,enclosure,annotation"
      style={{position: 'absolute', inset: 0}}
    >
      <Enter delay={6} from="down" marker="seven-heading" style={{position: 'absolute', left: 260, top: 0, width: 1256}}>
        <div style={{backgroundColor: C.cloth, border: `3px solid ${C.clothEdge}`, padding: '11px 24px', textAlign: 'center'}}>
          <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
            七大法律部门：2011 建立 · 当前重在<InkUnderline delay={36}>健全</InkUnderline>
          </span>
        </div>
      </Enter>
      {DEPARTMENTS.map((department, index) => (
        <Enter key={department.name} delay={26 + index * 12} from="up" marker={index === 0 ? 'department-pantheon' : undefined} style={{position: 'absolute', left: 40 + index * 246, top: 104, width: 232, height: 330}}>
          <Cloth style={{height: '100%', padding: '0 16px 18px', display: 'flex', flexDirection: 'column', gap: 10, borderTop: `10px solid ${department.tone}`}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 12}}>
              <span style={{fontSize: 20, fontWeight: 950, color: C.ochre, letterSpacing: 3}}>{String(index + 1).padStart(2, '0')}</span>
              {index === 0 ? <Landmark size={38} color={department.tone} strokeWidth={2.2} /> : index === 1 ? <BookOpen size={38} color={department.tone} strokeWidth={2.2} /> : index === 5 ? <Gavel size={38} color={department.tone} strokeWidth={2.2} /> : <span style={{width: 38}} />}
            </div>
            <div style={{fontSize: 27, fontWeight: 950, color: C.ink, lineHeight: 1.4, marginTop: 8}}>{department.name}</div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 850, color: C.inkSoft}}>法律部门</div>
          </Cloth>
        </Enter>
      ))}
      <Enter delay={150} from="up" marker="milestone-strip" style={{position: 'absolute', left: 40, top: 470, width: 850, height: 136}}>
        <DarkStrip style={{height: 136, flexDirection: 'column', alignItems: 'flex-start', gap: 12}}>
          <LabelTab>时间线 · 2011</LabelTab>
          <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>体系<InkUnderline color={C.thread} delay={170}>建立完成</InkUnderline></span>
            <span style={{fontSize: 26, fontWeight: 900, color: C.ochre}}>→</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>当前重点＝进一步</span>
            <Seal delay={190} size={26}>健全</Seal>
            <span style={{fontSize: 24, fontWeight: 950, color: '#E8B4A6'}}>（非建立）</span>
          </div>
        </DarkStrip>
      </Enter>
      <Enter delay={176} from="right" marker="scope-greater-strip" style={{position: 'absolute', left: 930, top: 470, width: 886, height: 136}}>
        <Cloth style={{height: '100%', padding: '16px 24px 20px', display: 'flex', flexDirection: 'column', gap: 9, borderTop: `6px solid ${C.ochre}`}}>
          <LabelTab>部门范围 ＞ 同名文件</LabelTab>
          <div style={{fontSize: 23, fontWeight: 880, color: C.ink}}>
            宪法部门<span style={{color: C.vermilion, fontWeight: 950}}>＞</span>《宪法》 · 行政法部门<span style={{color: C.vermilion, fontWeight: 950}}>＞</span>行政法规 · 刑法部门<span style={{color: C.vermilion, fontWeight: 950}}>＞</span>《刑法》
          </div>
        </Cloth>
      </Enter>
    </div>
  </Shell>
  );
};

export const LegalDepartmentsSystem = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-department-standards" {...SCENES.departmentStandards}>
      <DepartmentStandardsScene />
    </TimelineSequence>
    <TimelineSequence name="02-system-features" {...SCENES.systemFeatures}>
      <SystemFeaturesScene />
    </TimelineSequence>
    <TimelineSequence name="03-seven-departments" {...SCENES.sevenDepartments}>
      <SevenDepartmentsScene />
    </TimelineSequence>
  </AbsoluteFill>
);
