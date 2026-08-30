import type {CSSProperties, ReactNode} from 'react';
import {AlertTriangle, BookOpen, Landmark, Scale, Shield, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  stone: '#5C5850',
  stoneDeep: '#494540',
  tablet: '#EFE9D2',
  tabletDim: '#DFD8BE',
  tabletEdge: '#6E6852',
  ink: '#2B2119',
  inkSoft: '#5C4F3E',
  seal: '#A3412F',
  sealPale: '#EFD0C4',
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

const Tablet = ({children, marker, style, tone}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.tablet, border: `2px solid ${C.tabletEdge}`, color: C.ink, position: 'relative', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.brass}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.brass}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.brass}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.brass}} />
    {children}
  </div>
);

const LabelTab = ({children, bar = C.seal}: {readonly children: ReactNode; readonly bar?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', padding: '5px 14px', backgroundColor: C.stoneDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{children}</span>
);

const EraChip = ({tone = C.brass, children, solid = false}: {readonly tone?: string; readonly children: ReactNode; readonly solid?: boolean}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 7, padding: '4px 12px', border: `2px solid ${tone}`, backgroundColor: solid ? tone : `${tone}14`, fontSize: 23, fontWeight: 880, color: solid ? C.paper : C.ink}}>{children}</span>
);

const SealStamp = ({children, delay = 0, size = 26, tone = C.seal}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span style={{display: 'inline-block', padding: '8px 16px', border: `5px solid ${tone}`, color: tone, backgroundColor: `${tone}10`, fontSize: size, fontWeight: 950, letterSpacing: 2, opacity: p, scale: 0.86 + p * 0.14, rotate: '-3deg'}}>{children}</span>
  );
};

const InkUnderline = ({children, color = C.seal, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
  const frame = useCurrentFrame();
  return (
    <span style={{position: 'relative', display: 'inline-block'}}>
      {children}
      <span style={{position: 'absolute', left: 0, right: 0, bottom: -6, height: 4, backgroundColor: color, scale: `${prog(frame, delay, 22)} 1`, transformOrigin: 'left center'}} />
    </span>
  );
};

const Soft = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2b`, padding: '2px 9px'}}>{children}</span>
);

const DarkStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(73, 69, 64, 0.92)', border: `2px solid ${C.seal}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);


const Shell = ({children, code, kicker, title}: {readonly children: ReactNode; readonly code: string; readonly kicker: string; readonly title: string}) => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{
      backgroundColor: C.stone,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(0deg, transparent 0 126px, ${C.brass}0E 126px 128px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.seal}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.brass}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.stoneDeep, borderLeft: `8px solid ${C.seal}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 50 · {code}</span>
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
        borderBottom: `2px solid ${C.seal}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.brassPale, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

export const FourCodesScene = () => {
  /* data-final-knowledge="codes-heading" data-final-knowledge="code-row" data-final-knowledge="eight-yi-note" */
  const codes = [
    {era: '曹魏', name: '《魏律》', items: '新律18篇 · 《具法》改《刑名》置律首 ｜ 首定「八议」', tone: C.seal},
    {era: '西晋', name: '《晋律》(泰始律)', items: '20篇620条 · 刑名后增法例律 ｜ 张斐杜预作注 ｜ 准五服以制罪', tone: C.brass},
    {era: '北魏', name: '《北魏律》', items: '20篇 · 官当入律 ｜ 死刑复核 · 五刑改革', tone: C.brass},
    {era: '北齐', name: '《北齐律》', items: '12篇 · 刑名法例合为名例律 ｜ 首定「重罪十条」', tone: C.seal},
  ] as const;
  return (
    <Shell code="01" kicker="四大法典" title="碑刻四座：魏晋北魏北齐">
      <div
        data-layout="four-code-tablet-row"
        data-visual-anchor="typographic-sequence"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="wei-lv-plaque,jin-lv-plaque,bei-wei-bei-qi-plaques"
        data-focal-rule="four-codes-show-institutional-evolution-toward-sui-tang-law"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="codes-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.tablet, border: `3px solid ${C.tabletEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              魏晋南北朝 · <InkUnderline delay={36}>四座里程碑</InkUnderline>
            </span>
          </div>
        </Enter>
        {codes.map((code, index) => (
          <Enter key={code.name} delay={28 + index * 20} from="left" style={{position: 'absolute', left: 40 + index * 442, top: 104, width: 410, height: 330}}>
            <Tablet tone={code.tone} style={{height: '100%', padding: '14px 16px 16px', display: 'flex', flexDirection: 'column', gap: 10}}>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                {index === 0 ? <Landmark size={32} color={code.tone} strokeWidth={2.3} /> : index === 1 ? <Scale size={32} color={code.tone} strokeWidth={2.3} /> : <BookOpen size={32} color={code.tone} strokeWidth={2.3} />}
                <EraChip tone={code.tone} solid>{code.era}</EraChip>
              </div>
              <div style={{fontSize: 24, fontWeight: 950, color: C.ink}}>{code.name}</div>
              <div style={{fontSize: 20, fontWeight: 870, color: C.inkSoft, lineHeight: 1.5}}>{code.items}</div>
            </Tablet>
          </Enter>
        ))}
        <Enter delay={180} from="up" marker="eight-yi-note" style={{position: 'absolute', left: 40, top: 468, width: 1736}}>
          <DarkStrip style={{height: 90}}>
            <span style={{padding: '4px 13px', backgroundColor: C.seal, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>八议</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper, lineHeight: 1.5}}>
              以周礼「八辟」为依据正式入律：<Soft color={C.brassPale}>议亲·议故·议贤·议能·议功·议贵·议勤·议宾</Soft>
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const TenCrimesScene = () => {
  /* data-final-knowledge="crimes-heading" data-final-knowledge="lineage-tree" data-final-knowledge="exclusion-note" */
  const crimes = ['反逆/谋反', '大逆/谋大逆', '叛/谋叛', '降', '不敬/大不敬', '恶逆', '不孝', '不睦(隋唐新增)', '内乱', '不道', '不义'];
  return (
    <Shell code="02" kicker="重罪十条→十恶" title="北齐律到隋唐的演变">
      <div
        data-layout="ten-crimes-evolution-tree"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="bei-qi-origin,sui-tang-evolution,eight-yi-exclusion"
        data-focal-rule="bei-qi-ten-crimes-evolve-into-sui-tang-ten-abuses"
        data-focal-channels="icon,connector,contrast,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="crimes-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.tablet, border: `3px solid ${C.tabletEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              北齐律「重罪十条」→ 隋「十恶」
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="lineage-tree" style={{position: 'absolute', left: 40, top: 104, width: 1736, height: 380}}>
          <Tablet tone={C.seal} style={{height: '100%', padding: '16px 26px 18px', display: 'flex', flexDirection: 'column', gap: 14}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <AlertTriangle size={36} color={C.seal} strokeWidth={2.3} />
              <LabelTab bar={C.seal}>北齐律首创 → 隋唐承袭并发展</LabelTab>
              <span style={{marginLeft: 'auto', fontSize: 21, fontWeight: 870, color: C.inkSoft}}>置于律首</span>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 8}}>
              {crimes.map((crime) => (
                <span key={crime} style={{display: 'inline-flex', padding: '5px 12px', border: `2px solid ${C.seal}`, backgroundColor: `${C.seal}10`, fontSize: 20, fontWeight: 880, color: C.ink}}>{crime}</span>
              ))}
            </div>
            <div style={{marginTop: 'auto'}}>
              <SealStamp delay={150} size={24}>凡属十恶：不适用八议 · 常赦所不原</SealStamp>
            </div>
          </Tablet>
        </Enter>
        <Enter delay={160} from="up" marker="exclusion-note" style={{position: 'absolute', left: 40, top: 510, width: 1736}}>
          <DarkStrip style={{height: 88}}>
            <Shield size={34} color={C.brassPale} strokeWidth={2.2} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper, lineHeight: 1.5}}>
              《开皇律》确立封建制五刑：笞 · 杖 · 徒 · 流 · 死
            </span>
          </DarkStrip>
        </Enter>
        <Enter delay={200} from="up" style={{position: 'absolute', left: 40, top: 622, width: 1736}}>
          <DarkStrip style={{height: 40, opacity: 0}} />
        </Enter>
      </div>
    </Shell>
  );
};

export const SuiTransitionScene = () => {
  /* data-final-knowledge="sui-heading" data-final-knowledge="five-punishment-strip" data-final-knowledge="five-suit-strip" data-final-knowledge="official-redeem-note" */
  return (
    <Shell code="03" kicker="五刑五服" title="刑罚体系与服制定罪">
      <div
        data-layout="five-punishment-sui-transition"
        data-visual-anchor="boundary"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="five-punishment-strip,five-suit-strip,official-redeem-note"
        data-focal-rule="five-suit-system-makes-kinship-determine-criminal-liability"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="sui-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.tablet, border: `3px solid ${C.tabletEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              准<InkUnderline delay={36}>五服以制罪</InkUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="five-punishment-strip" style={{position: 'absolute', left: 40, top: 104, width: 1736, height: 130}}>
          <Tablet tone={C.brass} style={{height: '100%', padding: '14px 24px', display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'center'}}>
            <LabelTab bar={C.brass}>封建制五刑（隋《开皇律》）</LabelTab>
            <div style={{display: 'flex', gap: 10, flexWrap: 'wrap'}}>
              {['笞', '杖', '徒', '流', '死'].map((punishment) => (
                <span key={punishment} style={{display: 'inline-flex', padding: '6px 18px', backgroundColor: C.brass, color: C.paper, fontSize: 24, fontWeight: 950}}>{punishment}</span>
              ))}
            </div>
          </Tablet>
        </Enter>
        <Enter delay={80} from="right" marker="five-suit-strip" style={{position: 'absolute', left: 40, top: 258, width: 1736, height: 160}}>
          <Tablet tone={C.seal} style={{height: '100%', padding: '14px 24px', display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'center'}}>
            <LabelTab bar={C.seal}>五服 · 亲等制度</LabelTab>
            <div style={{display: 'flex', gap: 8, flexWrap: 'wrap'}}>
              {['斩衰', '齐衰', '大功', '小功', '缌麻'].map((suit) => (
                <span key={suit} style={{display: 'inline-flex', padding: '5px 14px', border: `2px solid ${C.seal}`, backgroundColor: `${C.seal}10`, fontSize: 22, fontWeight: 900, color: C.ink}}>{suit}</span>
              ))}
            </div>
            <div style={{fontSize: 22, fontWeight: 900, color: C.ink}}>
              <Scale size={28} color={C.seal} strokeWidth={2.3} style={{verticalAlign: '-5px', marginRight: 4}} />尊长犯卑幼<Soft color={C.brass}>减免</Soft> · 卑幼犯尊长<Soft color={C.seal}>加重</Soft>
            </div>
          </Tablet>
        </Enter>
        <Enter delay={140} from="up" marker="official-redeem-note" style={{position: 'absolute', left: 40, top: 442, width: 1736}}>
          <DarkStrip style={{height: 90}}>
            <Users size={34} color={C.brassPale} strokeWidth={2.2} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper, lineHeight: 1.5}}>
              官当入律：《北魏律》·《陈律》——允许官吏以官职爵位<Soft color={C.brassPale}>折抵徒罪</Soft>（每爵位折抵2年）
            </span>
          </DarkStrip>
        </Enter>
        <Enter delay={200} from="up" style={{position: 'absolute', left: 40, top: 556, width: 1736}}>
          <DarkStrip style={{height: 40, opacity: 0}} />
        </Enter>
      </div>
    </Shell>
  );
};

export const WeiJinNanbeiChaodai = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-four-codes" {...SCENES.fourCodes}>
      <FourCodesScene />
    </TimelineSequence>
    <TimelineSequence name="02-ten-crimes" {...SCENES.tenCrimes}>
      <TenCrimesScene />
    </TimelineSequence>
    <TimelineSequence name="03-sui-transition" {...SCENES.suiTransition}>
      <SuiTransitionScene />
    </TimelineSequence>
  </AbsoluteFill>
);
