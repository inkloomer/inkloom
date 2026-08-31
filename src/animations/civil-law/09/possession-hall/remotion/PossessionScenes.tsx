import type {CSSProperties, ReactNode} from 'react';
import {Baby, Ban, Coins, Crown, FileSignature, Gavel, Hand, Heart, Home, Key, Scale, ShieldCheck, Skull, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  obsidian: '#1B2420',
  obsidianMid: '#2A3833',
  glacial: '#A8C5BF',
  glacialPale: '#DCE9E4',
  bone: '#F2EEE2',
  boneDim: '#E6E1D2',
  edge: '#C2BCAC',
  amber: '#C98A3B',
  amberPale: '#F1E4C8',
  wine: '#8E4A62',
  winePale: '#EDDCE4',
  ink: '#20241F',
  inkSoft: '#75807A',
  indigoInk: '#2F5D8A',
  slateInk: '#48525C',
} as const;

export const prog = (frame: number, delay: number, span = 18) => interpolate(frame, [delay, delay + span], [0, 1], CLAMP);

export const Enter = ({
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

export const Mover = ({children, delay = 0, span = 30, fromX = 0, toX = 0, fromY = 0, toY = 0, fadeAt, style}: {
  readonly children: ReactNode;
  readonly delay?: number;
  readonly fadeAt?: number;
  readonly fromX?: number;
  readonly fromY?: number;
  readonly span?: number;
  readonly toX?: number;
  readonly toY?: number;
  readonly style?: CSSProperties;
}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, span);
  return (
    <div
      style={{
        ...style,
        opacity: fadeAt === undefined ? p : interpolate(frame, [delay, delay + 6, fadeAt, fadeAt + 10], [0, 1, 1, 0], CLAMP),
        translate: `${interpolate(frame, [delay, delay + span], [fromX, toX], CLAMP)}px ${interpolate(frame, [delay, delay + span], [fromY, toY], CLAMP)}px`,
      }}
    >
      {children}
    </div>
  );
};

export const Path = ({color = C.amber, delay = 0, span = 20, style}: {readonly color?: string; readonly delay?: number; readonly span?: number; readonly style?: CSSProperties}) => {
  const frame = useCurrentFrame();
  return (
    <div
      style={{
        ...style,
        backgroundColor: color,
        scale: `${prog(frame, delay, span)} 1`,
        transformOrigin: 'left center',
      }}
    />
  );
};

export const Shell = ({children, code, kicker, title}: {readonly children: ReactNode; readonly code: string; readonly kicker: string; readonly title: string}) => {
  const sceneIndex = Math.max(0, Math.min(3, Number(code) - 1));
  return (
    <AbsoluteFill
      data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
      style={{
        backgroundColor: C.obsidian,
        color: C.bone,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `repeating-linear-gradient(0deg, transparent 0 148px, rgba(168, 197, 191, 0.05) 148px 151px), repeating-linear-gradient(90deg, transparent 0 148px, rgba(0, 0, 0, 0.14) 148px 151px)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 12, background: `linear-gradient(90deg, ${C.wine}, ${C.amber}, ${C.glacial})`, opacity: 0.92}} />
      <div style={{position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: '2px solid rgba(168, 197, 191, 0.32)'}} />
      <div style={{position: 'absolute', left: 60, top: 44, padding: '10px 16px', backgroundColor: C.obsidianMid, borderLeft: `8px solid ${C.amber}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.glacialPale, letterSpacing: 2}}>民法 · 第9讲 · {code}</span>
      </div>
      <header
        style={{
          position: 'absolute',
          left: 290,
          right: 72,
          top: 34,
          height: 88,
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          alignItems: 'center',
          gap: 22,
          borderBottom: `2px solid ${C.glacial}`,
        }}
      >
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.glacialPale}}>{title}</h1>
        <span style={{fontSize: 22, fontWeight: 850, color: C.amberPale, textAlign: 'right'}}>{kicker}</span>
      </header>
      <div style={{position: 'absolute', right: 64, bottom: 44, display: 'flex', alignItems: 'center', gap: 10, opacity: 0.85}}>
        {[0, 1, 2, 3].map((dot) => (
          <span
            key={dot}
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: dot === sceneIndex ? C.amber : 'transparent',
              border: `2px solid ${C.amber}`,
            }}
          />
        ))}
      </div>
      <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    </AbsoluteFill>
  );
};

export const Panel = ({children, marker, tone = C.obsidianMid, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.bone, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${tone}`, color: C.ink, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(32, 36, 31, 0.4)', ...style}}
  >
    <span style={{position: 'absolute', right: 10, top: 10, width: 26, height: 26, borderTop: `3px solid ${tone}`, borderRight: `3px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 14, bottom: 10, width: 26, height: 26, borderBottom: `3px solid ${tone}`, borderLeft: `3px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.obsidianMid, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.obsidianMid, borderLeft: `6px solid ${tone}`, color: C.glacialPale, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.boneDim, borderLeft: `5px solid ${tone}`, padding: '5px 12px'}}>
    <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 10, backgroundColor: tone, border: `2px solid ${C.bone}`, boxShadow: `0 0 0 2px rgba(201, 138, 59, 0.45)`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.42}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Seal = ({children, delay = 0, size = 22, tone = C.amber}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '6px 14px',
        border: `4px double ${tone}`,
        color: tone,
        backgroundColor: `${tone}12`,
        fontSize: size,
        fontWeight: 950,
        letterSpacing: 2,
        opacity: p,
        scale: 0.85 + p * 0.15,
        rotate: '-2deg',
      }}
    >
      {children}
    </span>
  );
};

export const Under = ({children, color = C.amber, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

export const Soft = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2b`, padding: '2px 9px'}}>{children}</span>
);

export const Chip = ({children, tone = C.edge, toneBg = C.boneDim, ink = C.ink}: {readonly children: ReactNode; readonly tone?: string; readonly toneBg?: string; readonly ink?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${tone}`, backgroundColor: toneBg, padding: '5px 12px', fontSize: 22, fontWeight: 900, color: ink, whiteSpace: 'nowrap'}}>{children}</span>
);

export const PossessionBasicsScene = () => {
  /* data-final-knowledge="possession-definition" data-final-knowledge="extinction-point" data-final-knowledge="direct-indirect-pairs" data-final-knowledge="auxiliary-rule" */
  return (
    <Shell code="01" kicker="成立消灭 · 分类前奏" title="占有的成立与消灭">
      <div
        data-layout="definition-strip-with-four-pair-axes"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="possession-is-the-fact-of-controlling-a-thing-regardless-of-right,possession-dies-when-the-thing-leaves-control-with-or-without-intent,direct-holders-hold-media-free-while-indirect-holders-keep-return-claims,auxiliary-holders-never-break-the-boss-direct-possession"
        data-focal-rule="a-possession-chip-lives-only-while-the-thing-stays-inside-its-control-range"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="possession-definition" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 118}}>
          <Panel tone={C.obsidianMid} watermark={<Hand size={110} color={C.obsidianMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 18px'}}>
            <PanelTab tone={C.obsidianMid} icon={<Hand size={24} color={C.glacialPale} strokeWidth={2.2} />}>占有 · 定义与构成</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', fontSize: 22, fontWeight: 900, color: C.ink }}>
              <span>对物（动产·不动产）加以<Soft color={C.amber}>控制·管领</Soft>的<Under color={C.amber} delay={110}>事实</Under></span>
              <Chip tone={C.indigoInk} toneBg={C.glacialPale}><span style={{fontSize: 21, fontWeight: 950, color: C.indigoInk }}>客观：置于自己控制范围</span></Chip>
              <Chip tone={C.indigoInk} toneBg={C.glacialPale}><span style={{fontSize: 21, fontWeight: 950, color: C.indigoInk }}>主观：据为己有·为我所用</span></Chip>
            </div>
            <div style={{fontSize: 21, fontWeight: 900, color: C.inkSoft }}>成立独立性：占有的成立与占有人是否享有权利·享有何种权利<Soft color={C.wine}>均无关</Soft></div>
          </Panel>
        </Enter>
        <Enter delay={36} from="up" marker="extinction-point" style={{position: 'absolute', left: 0, top: 134, width: 1776, height: 168}}>
          <Panel tone={C.wine} watermark={<Ban size={120} color={C.wine} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '10px 18px'}}>
            <PanelTab tone={C.wine} icon={<Ban size={24} color={C.bone} strokeWidth={2.2} />}>占有消灭 · 核心时间点</PanelTab>
            <div style={{position: 'relative', height: 76}}>
              <div style={{position: 'absolute', left: 0, top: 22, display: 'flex', gap: 10, alignItems: 'center'}}>
                <Chip tone={C.wine} toneBg={C.winePale}><span style={{fontSize: 21, fontWeight: 950, color: C.wine }}>乙的手机（在乙家）</span></Chip>
                <span style={{fontSize: 20, fontWeight: 900, color: C.inkSoft }}>甲潜入拿走放进口袋</span>
              </div>
              <Path color={C.wine} delay={110} span={20} style={{position: 'absolute', left: 480, top: 52, width: 260, height: 4}} />
              <Mover delay={116} span={22} fromX={0} toX={260} fadeAt={176} style={{position: 'absolute', left: 20, top: 22, zIndex: 2}}>
                <Chip tone={C.wine} toneBg={C.winePale}><span style={{fontSize: 21, fontWeight: 950, color: C.wine }}>乙的手机（在乙家）</span></Chip>
              </Mover>
              <div style={{position: 'absolute', left: 756, top: 16}}><Seal delay={170} size={20}>甲离开乙家时＝乙丧失手机</Seal></div>
              <div style={{position: 'absolute', right: 0, top: 6, width: 380, fontSize: 20, fontWeight: 900, color: C.inkSoft }}>脱离控制范围即消灭——<Soft color={C.wine}>无论是否基于占有人意思</Soft></div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={80} from="left" marker="direct-indirect-pairs" style={{position: 'absolute', left: 0, top: 318, width: 1776, height: 296}}>
          <Panel tone={C.indigoInk} watermark={<Users size={140} color={C.indigoInk} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.indigoInk} icon={<Users size={24} color={C.bone} strokeWidth={2.2} />}>直接占有 vs 间接占有 · 四组对照</PanelTab>
            <div style={{display: 'flex', gap: 12}}>
              <IconChip icon={<Key size={24} color={C.bone} strokeWidth={2.2} />} tone={C.amber} title="出租后：">
                承租人＝<Soft color={C.amber}>直接占有</Soft>·出租人＝<Soft color={C.slateInk}>间接占有</Soft>
              </IconChip>
              <IconChip icon={<Crown size={24} color={C.bone} strokeWidth={2.2} />} tone={C.wine} title="出质后：">
                质权人＝<Soft color={C.amber}>直接</Soft>·出质人＝<Soft color={C.slateInk}>间接</Soft>
              </IconChip>
            </div>
            <div style={{display: 'flex', gap: 12}}>
              <IconChip icon={<Coins size={24} color={C.bone} strokeWidth={2.2} />} tone={C.slateInk} title="出卖交付后：">
                买受人＝<Soft color={C.amber}>直接占有</Soft>·出卖人＝<Seal delay={190} size={17}>丧失占有</Seal>
              </IconChip>
              <IconChip icon={<Gavel size={24} color={C.bone} strokeWidth={2.2} />} tone={C.wine} title="被拾得·被偷抢后：">
                拾得人·偷抢人＝<Soft color={C.amber}>直接</Soft>·失主＝<Seal delay={220} size={17}>丧失占有</Seal>
              </IconChip>
            </div>
            <div style={{marginTop: 'auto', fontSize: 21, fontWeight: 900, color: C.inkSoft }}>间接占有的基本特征：享有未来的<Soft color={C.amber}>返还请求权</Soft>——以他人的直接占有为媒介</div>
          </Panel>
        </Enter>
        <Enter delay={120} from="up" marker="auxiliary-rule" style={{position: 'absolute', left: 0, top: 630, width: 1776, height: 138}}>
          <Panel tone={C.amber} watermark={<Users size={110} color={C.amber} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '9px 18px'}}>
            <PanelTab tone={C.amber} icon={<Users size={24} color={C.bone} strokeWidth={2.2} />}>三组速记</PanelTab>
            <div style={{display: 'flex', gap: 12, flexWrap: 'wrap', fontSize: 21, fontWeight: 900, color: C.ink }}>
              <Chip tone={C.amber} toneBg={C.amberPale}><span style={{fontSize: 20, fontWeight: 950, color: C.amber }}>自主＝以所有权人心态</span></Chip>
              <Chip tone={C.indigoInk} toneBg={C.glacialPale}><span style={{fontSize: 20, fontWeight: 950, color: C.indigoInk }}>他主＝有归还想法</span></Chip>
              <Chip tone={C.wine} toneBg={C.winePale}><span style={{fontSize: 20, fontWeight: 950, color: C.wine }}>合法＝自愿交付·非法＝拾得盗抢</span></Chip>
              <Chip tone={C.slateInk} toneBg={C.glacialPale}><span style={{fontSize: 20, fontWeight: 950, color: C.slateInk }}>占有辅助人：基于命令·为占有人的利益——占有人仍<Soft color={C.amber}>直接占有</Soft></span></Chip>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const EntitledForkScene = () => {
  /* data-final-knowledge="entitlement-fork" data-final-knowledge="derivative-right-scope" data-final-knowledge="defence-verdicts" data-final-knowledge="innocent-malicious-split" */
  return (
    <Shell code="02" kicker="有权占有 vs 无权占有" title="有权占有与无权占有">
      <div
        data-layout="entitlement-fork-with-defence-verdicts"
        data-visual-anchor="document-fork"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="entitled-possession-needs-a-derivative-right-plus-assertability,the-derivative-right-spans-property-rights-and-contract-claims,only-entitled-holders-may-defend-against-return-claims,unentitled-holders-split-into-innocent-and-bad-faith-by-awareness"
        data-focal-rule="only-a-holder-with-an-assertable-right-may-raise-the-entitled-possession-defence"
        data-focal-channels="contrast,connector,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="derivative-right-scope" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 168}}>
          <Panel tone={C.amber} watermark={<Scale size={120} color={C.amber} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 18px'}}>
            <PanelTab tone={C.amber} icon={<Scale size={24} color={C.bone} strokeWidth={2.2} />}>本权 · 判定的根本标准</PanelTab>
            <div style={{display: 'flex', gap: 12, flexWrap: 'wrap', fontSize: 21, fontWeight: 900, color: C.ink }}>
              <Chip tone={C.amber} toneBg={C.amberPale}><span style={{fontSize: 20, fontWeight: 950, color: C.amber }}>本权＝据以合法占有的实体权利</span></Chip>
              <Chip tone={C.indigoInk} toneBg={C.glacialPale}><span style={{fontSize: 20, fontWeight: 950, color: C.indigoInk }}>物权类：所有权·质权·留置权·用益物权</span></Chip>
              <Chip tone={C.wine} toneBg={C.winePale}><span style={{fontSize: 20, fontWeight: 950, color: C.wine }}>债权类：租赁权·借用权·保管权</span></Chip>
            </div>
            <div style={{fontSize: 21, fontWeight: 900, color: C.inkSoft }}>概念辨析：<Soft color={C.amber}>占有</Soft>＝客观事实状态（实际控制）·<Soft color={C.indigoInk}>本权</Soft>＝法律上的正当权利（有资格控制）</div>
          </Panel>
        </Enter>
        <div style={{position: 'absolute', left: 0, top: 184, width: 1776, height: 290}}>
          <Enter delay={40} from="left" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 290}}>
            <Panel tone={C.jadeLike} watermark={<ShieldCheck size={140} color={C.jadeLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
              <PanelTab tone={C.jadeLike} icon={<ShieldCheck size={24} color={C.bone} strokeWidth={2.2} />}>有权占有 · 可抗辩</PanelTab>
              <IconChip icon={<ShieldCheck size={24} color={C.bone} strokeWidth={2.2} />} tone={C.jadeLike} title="判定标准：">
                享有本权 且 <Soft color={C.jadeLike}>可以</Soft>向返还原物请求权人主张
              </IconChip>
              <IconChip icon={<Gavel size={24} color={C.bone} strokeWidth={2.2} />} tone={C.amber} title="法律意义：">
                <Seal delay={150} size={19} tone={C.jadeLike}>可以主张</Seal>有权占有的<Soft color={C.amber}>抗辩</Soft>——拒绝返还
              </IconChip>
              <div style={{marginTop: 'auto', fontSize: 21, fontWeight: 900, color: C.inkSoft }}>速记：有权占有＝有本权＋可主张</div>
            </Panel>
          </Enter>
          <Enter delay={70} from="right" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 290}}>
            <Panel tone={C.wine} watermark={<Ban size={140} color={C.wine} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
              <PanelTab tone={C.wine} icon={<Ban size={24} color={C.bone} strokeWidth={2.2} />}>无权占有 · 不得抗辩</PanelTab>
              <IconChip icon={<Ban size={24} color={C.bone} strokeWidth={2.2} />} tone={C.wine} title="判定标准：">
                不享有本权；或虽享有本权但<Soft color={C.wine}>不得主张</Soft>
              </IconChip>
              <IconChip icon={<Ban size={24} color={C.bone} strokeWidth={2.2} />} tone={C.slateInk} title="法律意义：">
                <Seal delay={180} size={19}>不得主张</Seal>有权占有的抗辩——遇返还原物请求即应返还
              </IconChip>
              <div style={{marginTop: 'auto', fontSize: 21, fontWeight: 900, color: C.inkSoft }}>速记：无权占有＝无本权 <Soft color={C.wine}>OR</Soft> 有本权＋不可主张</div>
            </Panel>
          </Enter>
        </div>
        <Enter delay={110} from="up" marker="defence-verdicts" style={{position: 'absolute', left: 0, top: 490, width: 1776, height: 278}}>
          <Panel tone={C.indigoInk} watermark={<FileSignature size={140} color={C.indigoInk} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.indigoInk} icon={<FileSignature size={24} color={C.bone} strokeWidth={2.2} />}>双案对照 · 谁能抗辩谁不能</PanelTab>
            <IconChip icon={<Gavel size={24} color={C.bone} strokeWidth={2.2} />} tone={C.amber} title="留置案（甲电脑被乙偷·乙交丙修·丙留置）：">
              丙对乙、丙对甲均＝<Seal delay={170} size={18} tone={C.amber}>有权占有</Seal>（留置权是物权·可对任何人主张）→ 甲乙<Seal delay={200} size={17}>均不得请求</Seal>返还
            </IconChip>
            <IconChip icon={<Home size={24} color={C.bone} strokeWidth={2.2} />} tone={C.wine} title="一房二卖案（甲卖乙已交付·又卖丙并过户）：">
              乙对甲＝<Seal delay={230} size={18} tone={C.jadeLike}>有权占有</Seal>（买受人债权·可对相对人甲主张）；乙对丙＝<Seal delay={260} size={18}>无权占有</Seal>（债权不可对非相对人丙主张）→ 丙凭所有权请求乙返还
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const PossessionProtectionScene = () => {
  /* data-final-knowledge="presumption-rules" data-final-knowledge="claimant-strike-rule" data-final-knowledge="black-eats-black-rule" data-final-knowledge="return-table" */
  return (
    <Shell code="03" kicker="占有的保护 · 谁打谁" title="占有的保护">
      <div
        data-layout="protection-flows-split-by-claimant"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="protection-presumes-title-for-the-current-holder-unless-proven-otherwise,the-return-claimant-striking-unentitled-possession-still-disturbs-it,the-unentitled-holder-cannot-answer-a-real-return-claimant,black-eats-black-may-claim-while-entitled-holders-always-claim"
        data-focal-rule="protection-arrows-change-colour-by-who-strikes-whom-and-what-the-striker-proves"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="presumption-rules" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 176}}>
          <Panel tone={C.amber} watermark={<Scale size={120} color={C.amber} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 18px'}}>
            <PanelTab tone={C.amber} icon={<Scale size={24} color={C.bone} strokeWidth={2.2} />}>权利推定 · 以占有事实为依据（无需权利依据）</PanelTab>
            <div style={{display: 'flex', gap: 14}}>
              <IconChip icon={<Users size={24} color={C.bone} strokeWidth={2.2} />} tone={C.slateInk} title="规则① 双方都不能证明：">
                被告占有标的物 → 法律推定<Seal delay={150} size={18}>被告享有权利</Seal>（电脑案：甲无法举证 → 推定是乙的）
              </IconChip>
              <IconChip icon={<FileSignature size={24} color={C.bone} strokeWidth={2.2} />} tone={C.indigoInk} title="规则② 原告证明原占有：">
                被告须证明现占有<Soft color={C.indigoInk}>来源</Soft>；否则推定<Seal delay={190} size={18} tone={C.indigoInk}>原告享有权利</Seal>（甲证 1 周前占有·乙证不出来源 → 推定是甲的）
              </IconChip>
            </div>
          </Panel>
        </Enter>
        <div style={{position: 'absolute', left: 0, top: 192, width: 1776, height: 300}}>
          <Enter delay={40} from="left" marker="claimant-strike-rule" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 300}}>
            <Panel tone={C.wine} watermark={<Gavel size={140} color={C.wine} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
              <PanelTab tone={C.wine} icon={<Gavel size={24} color={C.bone} strokeWidth={2.2} />}>① 返还原物请求权人 侵害无权占有</PanelTab>
              <IconChip icon={<Gavel size={24} color={C.bone} strokeWidth={2.2} />} tone={C.wine} title="性质：">
                依然构成<Soft color={C.wine}>占有的侵害</Soft>（抢回案：甲从拾得人乙处抢回 → 构成侵害）
              </IconChip>
              <IconChip icon={<Ban size={24} color={C.bone} strokeWidth={2.2} />} tone={C.slateInk} title="占有保护主张：">
                无权占有人本应返还原物 → <Seal delay={170} size={18}>不得主张</Seal>占有的保护（乙不能对甲主张返还）
              </IconChip>
              <div style={{marginTop: 'auto', fontSize: 21, fontWeight: 900, color: C.inkSoft }}>真权人动手＝构成侵害但对方闭嘴</div>
            </Panel>
          </Enter>
          <Enter delay={70} from="right" marker="black-eats-black-rule" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 300}}>
            <Panel tone={C.slateInk} watermark={<Skull size={140} color={C.slateInk} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
              <PanelTab tone={C.slateInk} icon={<Skull size={24} color={C.bone} strokeWidth={2.2} />}>② 黑吃黑 · 非请求权人侵害无权占有</PanelTab>
              <IconChip icon={<Skull size={24} color={C.bone} strokeWidth={2.2} />} tone={C.slateInk} title="性质：">
                构成<Soft color={C.slateInk}>占有的侵害</Soft>
              </IconChip>
              <IconChip icon={<ShieldCheck size={24} color={C.bone} strokeWidth={2.2} />} tone={C.amber} title="后果：">
                无权占有人<Seal delay={170} size={18} tone={C.amber}>可以主张</Seal>占有返还原物请求权——黑吃黑，先占的黑能告后下的黑
              </IconChip>
              <div style={{marginTop: 'auto', fontSize: 21, fontWeight: 900, color: C.inkSoft }}>要点：只有「真返还原物请求权人」才能让无权占有人闭嘴</div>
            </Panel>
          </Enter>
        </div>
        <Enter delay={110} from="up" marker="return-table" style={{position: 'absolute', left: 0, top: 508, width: 1776, height: 260}}>
          <Panel tone={C.indigoInk} watermark={<ShieldCheck size={140} color={C.indigoInk} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.indigoInk} icon={<ShieldCheck size={24} color={C.bone} strokeWidth={2.2} />}>③ 物权人侵害有权占有 · 对照表（甲侵害乙的占有）</PanelTab>
            <div style={{display: 'flex', gap: 14}}>
              <IconChip icon={<Ban size={24} color={C.bone} strokeWidth={2.2} />} tone={C.wine} title="乙应当向甲返还（无权占有）：">
                ① 甲<Soft color={C.wine}>构成</Soft>占有的侵害 ② 甲<Seal delay={200} size={18}>无需</Seal>向乙返还原物
              </IconChip>
              <IconChip icon={<ShieldCheck size={24} color={C.bone} strokeWidth={2.2} />} tone={C.jadeLike} title="乙无需向甲返还（有权占有）：">
                ① 甲<Soft color={C.wine}>构成</Soft>占有的侵害 ② 甲<Seal delay={230} size={18} tone={C.jadeLike}>应当</Seal>向乙返还原物（留置案：甲偷回留置电脑 → 乙可主张返还）
              </IconChip>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft }}>口诀：动手都<Soft color={C.wine}>算侵害</Soft>——无权占有<Soft color={C.slateInk}>闭嘴</Soft>·有权占有<Soft color={C.jadeLike}>开口</Soft></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const UnentitledReturnScene = () => {
  /* data-final-knowledge="new-thing-ledger" data-final-knowledge="damage-ledger" data-final-knowledge="fee-ledger" data-final-knowledge="cross-comparison" */
  return (
    <Shell code="04" kicker="返还规则 · 竞合对照" title="无权占有的返还规则">
      <div
        data-layout="return-ledgers-with-cross-comparison"
        data-visual-anchor="timeline-gate"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="new-things-born-during-unentitled-possession-return-with-the-original,innocent-holders-return-what-remains-malicious-return-in-full,necessary-fee-claims-belong-to-innocent-holders-only,unjust-enrichment-and-unentitled-possession-split-by-right-acquired"
        data-focal-rule="innocent-ledgers-return-what-remains-while-malicious-ledgers-return-in-full-and-pay"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="new-thing-ledger" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 148}}>
          <Panel tone={C.amber} watermark={<Coins size={120} color={C.amber} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '10px 18px'}}>
            <PanelTab tone={C.amber} icon={<Coins size={24} color={C.bone} strokeWidth={2.2} />}>① 原物产生新物 · A → A＋a</PanelTab>
            <div style={{position: 'relative', height: 66}}>
              <div style={{position: 'absolute', left: 0, top: 12, display: 'flex', alignItems: 'center', gap: 14}}>
                <Chip tone={C.amber} toneBg={C.amberPale}><span style={{fontSize: 22, fontWeight: 950, color: C.amber }}>占有时 A</span></Chip>
                <span style={{fontSize: 22, fontWeight: 950, color: C.inkSoft }}>→</span>
                <Chip tone={C.amber} toneBg={C.amberPale}><span style={{fontSize: 22, fontWeight: 950, color: C.amber }}>返还时 A＋a</span></Chip>
                <span style={{fontSize: 22, fontWeight: 950, color: C.inkSoft }}>→</span>
                <Chip tone={C.jadeLike} toneBg={C.glacialPale}><ShieldCheck size={22} color={C.jadeLike} strokeWidth={2.4} /><span style={{fontSize: 22, fontWeight: 950, color: C.jadeLike }}>A 返还</span></Chip>
                <Chip tone={C.jadeLike} toneBg={C.glacialPale}><ShieldCheck size={22} color={C.jadeLike} strokeWidth={2.4} /><span style={{fontSize: 22, fontWeight: 950, color: C.jadeLike }}>a 返还</span></Chip>
              </div>
              <div style={{position: 'absolute', right: 0, top: 12, fontSize: 20, fontWeight: 900, color: C.inkSoft }}>原物·新物均向返还原物请求权人返还</div>
            </div>
          </Panel>
        </Enter>
        <div data-final-knowledge="damage-ledger" style={{position: 'absolute', left: 0, top: 164, width: 1776, height: 236}}>
          <Enter delay={40} from="left" style={{position: 'absolute', inset: 0}}>
            <Panel tone={C.indigoInk} watermark={<Skull size={140} color={C.indigoInk} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
              <PanelTab tone={C.indigoInk} icon={<Skull size={24} color={C.bone} strokeWidth={2.2} />}>② 毁损·灭失 · A → A－a</PanelTab>
              <div style={{display: 'flex', gap: 14}}>
                <IconChip icon={<ShieldCheck size={24} color={C.bone} strokeWidth={2.2} />} tone={C.jadeLike} title="善意占有：">
                  返还界限以<Under color={C.jadeLike} delay={130}>返还时</Under>现存（A－a）为限 → <Seal delay={150} size={18} tone={C.jadeLike}>不负赔偿责任</Seal>
                </IconChip>
                <IconChip icon={<Skull size={24} color={C.bone} strokeWidth={2.2} />} tone={C.wine} title="恶意占有：">
                  返还界限以<Under color={C.wine} delay={160}>占有时</Under>（A）为限 → <Seal delay={190} size={18}>应负赔偿责任</Seal>
                </IconChip>
              </div>
              <div style={{marginTop: 'auto', fontSize: 21, fontWeight: 900, color: C.inkSoft }}>电脑案：盗赃不能善意取得 → 丙对甲构成无权占有；毁损后赔不赔，看丙善意还是恶意</div>
            </Panel>
          </Enter>
        </div>
        <Enter delay={80} from="right" marker="fee-ledger" style={{position: 'absolute', left: 0, top: 416, width: 1776, height: 148}}>
          <Panel tone={C.slateInk} watermark={<Coins size={120} color={C.slateInk} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '9px 18px'}}>
            <PanelTab tone={C.slateInk} icon={<Coins size={24} color={C.bone} strokeWidth={2.2} />}>③ 必要费用（保管占有物的支出）</PanelTab>
            <Chip tone={C.jadeLike} toneBg={C.glacialPale}><ShieldCheck size={22} color={C.jadeLike} strokeWidth={2.4} /><span style={{fontSize: 22, fontWeight: 950, color: C.jadeLike }}>善意占有人：有权请求偿付</span></Chip>
            <Chip tone={C.wine} toneBg={C.winePale}><Skull size={22} color={C.wine} strokeWidth={2.4} /><span style={{fontSize: 22, fontWeight: 950, color: C.wine }}>恶意占有人：不得请求偿付</span></Chip>
          </Panel>
        </Enter>
        <Enter delay={120} from="up" marker="cross-comparison" style={{position: 'absolute', left: 0, top: 580, width: 1776, height: 188}}>
          <Panel tone={C.wine} watermark={<Scale size={120} color={C.wine} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 18px'}}>
            <PanelTab tone={C.wine} icon={<Scale size={24} color={C.bone} strokeWidth={2.2} />}>竞合对照 · 无权占有 vs 不当得利 vs 无因管理</PanelTab>
            <div style={{display: 'flex', gap: 12, flexWrap: 'wrap', fontSize: 20, fontWeight: 900, color: C.ink }}>
              <Chip tone={C.indigoInk} toneBg={C.glacialPale}><span style={{fontSize: 19, fontWeight: 950, color: C.indigoInk }}>相同：拿了人家的东西 → 应予返还</span></Chip>
              <Chip tone={C.amber} toneBg={C.amberPale}><span style={{fontSize: 19, fontWeight: 950, color: C.amber }}>无权占有：没取得权利 · 物权/占有保护请求权</span></Chip>
              <Chip tone={C.wine} toneBg={C.winePale}><span style={{fontSize: 19, fontWeight: 950, color: C.wine }}>不当得利：取得了权利 · 债权请求权</span></Chip>
              <Chip tone={C.jadeLike} toneBg={C.glacialPale}><span style={{fontSize: 19, fontWeight: 950, color: C.jadeLike }}>无因管理：想还（知情）·无故意重大过失不赔＋费用偿付</span></Chip>
            </div>
            <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 900, color: C.inkSoft }}>钱表案：偷来的 1000 元现金＝<Soft color={C.wine}>占有即所有</Soft>→ 不当得利向乙要钱；手表＝盗赃不能善意取得 → <Soft color={C.indigoInk}>无权占有</Soft>向甲要表；羊三连：不知情＝善意·知情＝恶意·买羊欲还＝无因管理</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
