import type {CSSProperties, ReactNode} from 'react';
import {ArrowLeftRight, BookOpen, Coins, Home, Landmark, Map, ShieldCheck, Store, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  paddy: '#D3D6BC',
  paddyDeep: '#C2C6A8',
  parcel: '#F1EDD6',
  parcelDim: '#E2DFC4',
  parcelEdge: '#636A50',
  ink: '#2B2721',
  inkSoft: '#4F5448',
  wheat: '#C0912F',
  wheatPale: '#EEDFB8',
  paddyTone: '#5E7A3C',
  paddyTonePale: '#D9E0C2',
  line: '#B0452F',
  linePale: '#F0D2C4',
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
      backgroundColor: C.paddy,
      color: C.ink,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(0deg, transparent 0 128px, ${C.paddyTone}14 128px 130px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.paddyTone}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.wheat}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.inkSoft, borderLeft: `8px solid ${C.wheat}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 31 · {code}</span>
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
        borderBottom: `2px solid ${C.paddyTone}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.ink}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.paddyTone, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Parcel = ({children, marker, style, tone}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.parcel, border: `2px solid ${C.parcelEdge}`, color: C.ink, position: 'relative', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.wheat}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.wheat}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.wheat}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.wheat}} />
    {children}
  </div>
);

const LabelTab = ({children, bar = C.wheat}: {readonly children: ReactNode; readonly bar?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', padding: '5px 14px', backgroundColor: C.inkSoft, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{children}</span>
);

const FieldChip = ({tone = C.paddyTone, children, solid = false}: {readonly tone?: string; readonly children: ReactNode; readonly solid?: boolean}) => (
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

const Stamp = ({children, delay = 0, size = 26, tone = C.line}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

const InkUnderline = ({children, color = C.line, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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
  <div style={{backgroundColor: 'rgba(79, 84, 72, 0.92)', border: `2px solid ${C.wheat}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

export const OwnershipMapScene = () => {
  /* data-final-knowledge="ownership-heading" data-final-knowledge="state-absolute-band" data-final-knowledge="dual-band" data-final-knowledge="collective-absolute-band" data-final-knowledge="mnemonic-stamp" */
  return (
    <Shell code="01" kicker="所有权归属" title="田亩三分：归谁所有">
      <div
        data-layout="three-band-parcel-map"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="state-absolute-band,dual-band,collective-absolute-band"
        data-focal-rule="city-land-and-minerals-are-state-owned-by-default"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="ownership-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.parcel, border: `3px solid ${C.parcelEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              自然资源与土地：<InkUnderline delay={36}>三档归属</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="state-absolute-band" style={{position: 'absolute', left: 40, top: 104, width: 1736, height: 130}}>
          <Parcel tone={C.wheat} style={{height: '100%', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 18}}>
            <Map size={38} color={C.wheat} strokeWidth={2.3} />
            <div style={{display: 'flex', flexDirection: 'column', gap: 10, flex: 1}}>
              <LabelTab bar={C.wheat}>绝对归国家所有</LabelTab>
              <div style={{fontSize: 23, fontWeight: 900, color: C.ink}}>矿藏 · 水流 · 海域 · 城市土地</div>
            </div>
            <span data-final-knowledge="mnemonic-stamp">
              <Stamp delay={130} size={25}>国有城土海水矿</Stamp>
            </span>
          </Parcel>
        </Enter>
        <Enter delay={60} from="left" marker="dual-band" style={{position: 'absolute', left: 40, top: 258, width: 1736, height: 190}}>
          <Parcel tone={C.paddyTone} style={{height: '100%', padding: '14px 24px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <ArrowLeftRight size={34} color={C.paddyTone} strokeWidth={2.3} />
              <LabelTab bar={C.paddyTone}>双属 · 原则与例外</LabelTab>
            </div>
            <div style={{fontSize: 22, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
              森林·山岭·草原·荒地·滩涂：<Soft color={C.paddyTone}>原则国有 · 例外集体</Soft>——「森山草荒滩」
            </div>
            <div style={{fontSize: 22, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
              农村和城市郊区的土地：<Soft color={C.paddyTone}>原则集体 · 例外国有</Soft>——「农村郊区地」
            </div>
          </Parcel>
        </Enter>
        <Enter delay={96} from="left" marker="collective-absolute-band" style={{position: 'absolute', left: 40, top: 472, width: 1736, height: 120}}>
          <Parcel tone={C.inkSoft} style={{height: '100%', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 18}}>
            <Home size={36} color={C.inkSoft} strokeWidth={2.3} />
            <div style={{display: 'flex', flexDirection: 'column', gap: 8, flex: 1}}>
              <LabelTab bar={C.inkSoft}>绝对归集体所有</LabelTab>
              <div style={{fontSize: 23, fontWeight: 900, color: C.ink}}>自留山 · 自留地 · 宅基地</div>
            </div>
            <span style={{fontSize: 22, fontWeight: 900, color: C.inkSoft}}>易错：宅基地归集体，不归个人</span>
          </Parcel>
        </Enter>
        <Enter delay={160} from="up" style={{position: 'absolute', left: 40, top: 616, width: 1736}}>
          <DarkStrip style={{height: 90}}>
            <span style={{padding: '4px 13px', backgroundColor: C.wheat, color: C.inkSoft, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>注意</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>
              土地<Soft color={C.linePale}>所有权</Soft>不得转让——可转让的是<Soft color={C.goldPale}>使用权</Soft>
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const ThreeEconomiesScene = () => {
  /* data-final-knowledge="economy-heading" data-final-knowledge="economy-row" data-final-knowledge="distribution-strip" */
  const economies = [
    {name: '国有经济', icon: Landmark, tone: C.paddyTone, pos: '国民经济的主导力量 · 控制经济命脉', policy: '国家保障其巩固和发展'},
    {name: '集体经济', icon: Users, tone: C.wheat, pos: '公有制经济的重要组成部分（农村＋城镇）', policy: '保护合法权益 · 鼓励指导帮助'},
    {name: '非公有制经济', icon: Store, tone: C.inkSoft, pos: '社会主义市场经济的重要组成部分（1999）', policy: '鼓励·支持·引导·监督管理（2004）｜ 个体 · 私营 · 外商投资'},
  ] as const;
  return (
    <Shell code="02" kicker="三种成分" title="国有主导 · 集体重要 · 非公重要组成">
      <div
        data-layout="three-economy-column-row"
        data-visual-anchor="typographic-sequence"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="state-economy-column,collective-economy-column,nonpublic-economy-column"
        data-focal-rule="policy-verbs-follow-each-sectors-position"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="economy-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.parcel, border: `3px solid ${C.parcelEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              公有制＝<InkUnderline delay={36}>全民所有制</InkUnderline>＋劳动群众集体所有制
            </span>
          </div>
        </Enter>
        {economies.map((economy, index) => (
          <Enter key={economy.name} delay={28 + index * 24} from="up" style={{position: 'absolute', left: 40 + index * 590, top: 104, width: 556, height: 330}}>
            <Parcel tone={economy.tone} style={{height: '100%', padding: '18px 22px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                {index === 0 ? <Landmark size={38} color={economy.tone} strokeWidth={2.3} /> : index === 1 ? <Users size={38} color={economy.tone} strokeWidth={2.3} /> : <Store size={38} color={economy.tone} strokeWidth={2.3} />}
                <span style={{fontSize: 20, fontWeight: 950, color: C.wheat, letterSpacing: 3}}>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div style={{fontSize: 28, fontWeight: 950, color: C.ink}}>{economy.name}</div>
              <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>{economy.pos}</div>
              <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.ink, border: `2px solid ${C.parcelEdge}`, backgroundColor: C.parcelDim, padding: '10px 12px', lineHeight: 1.45}}>政策：{economy.policy}</div>
            </Parcel>
          </Enter>
        ))}
        <Enter delay={170} from="up" marker="distribution-strip" style={{position: 'absolute', left: 40, top: 470, width: 1736, height: 130}}>
          <Parcel tone={C.inkSoft} style={{height: '100%', padding: '14px 24px', display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'center'}}>
            <LabelTab bar={C.inkSoft}>分配制度 · 两个相适应</LabelTab>
            <div style={{fontSize: 23, fontWeight: 900, color: C.ink, lineHeight: 1.55}}>
              <Soft color={C.paddyTone}>按劳分配为主体</Soft>——与公有制为主体相适应 ｜ <Soft color={C.wheat}>多种分配方式并存</Soft>——与多种所有制经济共同发展相适应
            </div>
          </Parcel>
        </Enter>
        <Enter delay={210} from="up" style={{position: 'absolute', left: 40, top: 628, width: 1736}}>
          <DarkStrip style={{height: 76}}>
            <span style={{padding: '4px 13px', backgroundColor: C.wheat, color: C.inkSoft, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>口诀</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              国有<Soft color={C.goldPale}>主导</Soft> · 集体<Soft color={C.goldPale}>重要</Soft> · 非公是<Soft color={C.goldPale}>重要组成部分</Soft>
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const PropertyWeimarScene = () => {
  /* data-final-knowledge="property-heading" data-final-knowledge="public-plate" data-final-knowledge="private-plate" data-final-knowledge="weimar-note" */
  return (
    <Shell code="03" kicker="财产保护" title="公共神圣 · 私产平等护">
      <div
        data-layout="property-protect-divide"
        data-visual-anchor="boundary"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="public-property-plate,private-property-plate,weimar-note"
        data-focal-rule="public-property-is-inviolable-private-lawful-property-is-protected"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="property-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.parcel, border: `3px solid ${C.parcelEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              公共财产 <InkUnderline delay={36}>神圣</InkUnderline> vs 私有财产 <InkUnderline color={C.wheat} delay={48}>合法</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="public-plate" style={{position: 'absolute', left: 40, top: 104, width: 850, height: 290}}>
          <Parcel tone={C.line} style={{height: '100%', padding: '18px 24px 20px', display: 'flex', flexDirection: 'column', gap: 13}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <ShieldCheck size={40} color={C.line} strokeWidth={2.3} />
              <LabelTab bar={C.line}>公共财产</LabelTab>
            </div>
            <div style={{fontSize: 25, fontWeight: 950, color: C.ink, lineHeight: 1.6, marginTop: 4}}>
              社会主义的公共财产<Soft color={C.line}>神圣不可侵犯</Soft>
            </div>
            <div style={{marginTop: 'auto'}}>
              <Stamp delay={130} size={24}>措辞等级：神圣</Stamp>
            </div>
          </Parcel>
        </Enter>
        <Enter delay={56} from="right" marker="private-plate" style={{position: 'absolute', left: 930, top: 104, width: 886, height: 290}}>
          <Parcel tone={C.wheat} style={{height: '100%', padding: '18px 24px 20px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Coins size={40} color={C.wheat} strokeWidth={2.3} />
              <LabelTab>私有财产（2004）</LabelTab>
            </div>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              ① 公民的<Soft color={C.wheat}>合法的</Soft>私有财产不受侵犯 ② 国家依法保护<Soft color={C.wheat}>私有财产权和继承权</Soft>
            </div>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              ③ 为了公共利益可<Soft color={C.line}>征收征用并给予补偿</Soft>
            </div>
          </Parcel>
        </Enter>
        <Enter delay={120} from="up" marker="weimar-note" style={{position: 'absolute', left: 40, top: 420, width: 1736, height: 130}}>
          <Parcel tone={C.inkSoft} style={{height: '100%', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 18}}>
            <BookOpen size={36} color={C.inkSoft} strokeWidth={2.3} />
            <div style={{display: 'flex', flexDirection: 'column', gap: 8, flex: 1}}>
              <LabelTab bar={C.inkSoft}>冷知识 · 魏玛宪法</LabelTab>
              <span style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
                经济 · 文化 · 社会保障制度入宪，源于<Soft color={C.gold}>1919 年《魏玛宪法》</Soft>
              </span>
            </div>
          </Parcel>
        </Enter>
        <Enter delay={190} from="up" style={{position: 'absolute', left: 40, top: 576, width: 1736}}>
          <DarkStrip style={{height: 96}}>
            <span style={{padding: '4px 13px', backgroundColor: C.wheat, color: C.inkSoft, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>一句记</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              公共「神圣」· 私产「合法」——征收征用都要<Soft color={C.goldPale}>补偿</Soft>
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const EconomicSystem = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-ownership-map" {...SCENES.ownershipMap}>
      <OwnershipMapScene />
    </TimelineSequence>
    <TimelineSequence name="02-three-economies" {...SCENES.threeEconomies}>
      <ThreeEconomiesScene />
    </TimelineSequence>
    <TimelineSequence name="03-property-weimar" {...SCENES.propertyWeimar}>
      <PropertyWeimarScene />
    </TimelineSequence>
  </AbsoluteFill>
);
