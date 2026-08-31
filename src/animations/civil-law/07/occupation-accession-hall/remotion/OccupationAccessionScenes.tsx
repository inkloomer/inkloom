import type {CSSProperties, ReactNode} from 'react';
import {Baby, Ban, Blend, Coins, Gavel, Hand, Hammer, Scale, ScrollText, Trash2} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  olive: '#494927',
  oliveMid: '#5F5F38',
  sand: '#F3F1E0',
  sandDim: '#E9E6D0',
  edge: '#C5BFA6',
  goldpan: '#A0762A',
  goldpanPale: '#EFE4C4',
  indigo: '#40597A',
  indigoPale: '#DEE6EF',
  rust: '#954A30',
  rustPale: '#F0DEDA',
  ink: '#2A2A20',
  inkSoft: '#6C6C58',
  slateMidTone: '#48525C',
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

export const Path = ({color = C.goldpan, delay = 0, span = 20, style}: {readonly color?: string; readonly delay?: number; readonly span?: number; readonly style?: CSSProperties}) => {
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
  const sceneIndex = Math.max(0, Math.min(1, Number(code) - 1));
  return (
    <AbsoluteFill
      data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
      style={{
        backgroundColor: C.olive,
        color: C.sand,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `repeating-linear-gradient(45deg, transparent 0 138px, rgba(255, 255, 255, 0.04) 138px 141px), repeating-linear-gradient(-45deg, transparent 0 138px, rgba(0, 0, 0, 0.11) 138px 141px)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 12, background: `linear-gradient(90deg, ${C.rust}, ${C.goldpan}, ${C.indigo})`, opacity: 0.92}} />
      <div style={{position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: '2px solid rgba(233, 230, 208, 0.32)'}} />
      <div style={{position: 'absolute', left: 60, top: 44, padding: '10px 16px', backgroundColor: C.oliveMid, borderLeft: `8px solid ${C.goldpan}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.sand, letterSpacing: 2}}>民法 · 第7讲 · {code}</span>
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
          borderBottom: `2px solid ${C.goldpan}`,
        }}
      >
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.sand}}>{title}</h1>
        <span style={{fontSize: 22, fontWeight: 850, color: C.goldpanPale, textAlign: 'right'}}>{kicker}</span>
      </header>
      <div style={{position: 'absolute', right: 64, bottom: 44, display: 'flex', alignItems: 'center', gap: 10, opacity: 0.85}}>
        {[0, 1].map((dot) => (
          <span
            key={dot}
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: dot === sceneIndex ? C.goldpan : 'transparent',
              border: `2px solid ${C.goldpan}`,
            }}
          />
        ))}
      </div>
      <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    </AbsoluteFill>
  );
};

export const Panel = ({children, marker, tone = C.oliveMid, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.sand, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${tone}`, color: C.ink, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(42, 42, 32, 0.35)', ...style}}
  >
    <span style={{position: 'absolute', right: 10, top: 10, width: 26, height: 26, borderTop: `3px solid ${tone}`, borderRight: `3px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 14, bottom: 10, width: 26, height: 26, borderBottom: `3px solid ${tone}`, borderLeft: `3px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.oliveMid, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.oliveMid, borderLeft: `6px solid ${tone}`, color: C.sand, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.sandDim, borderLeft: `5px solid ${tone}`, padding: '5px 12px'}}>
    <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 10, backgroundColor: tone, border: `2px solid ${C.sand}`, boxShadow: `0 0 0 2px rgba(160, 118, 42, 0.5)`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.42}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Seal = ({children, delay = 0, size = 22, tone = C.rust}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

export const Under = ({children, color = C.goldpan, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

export const Chip = ({children, tone = C.edge, toneBg = C.sandDim, ink = C.ink}: {readonly children: ReactNode; readonly tone?: string; readonly toneBg?: string; readonly ink?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${tone}`, backgroundColor: toneBg, padding: '5px 12px', fontSize: 22, fontWeight: 900, color: ink, whiteSpace: 'nowrap'}}>{children}</span>
);

export const OccupationLaneScene = () => {
  /* data-final-knowledge="preoccupation-definition" data-final-knowledge="abandonment-elements" data-final-knowledge="possession-elements" data-final-knowledge="fact-act-rule" */
  return (
    <Shell code="01" kicker="先占 · 无主动产" title="先占">
      <div
        data-layout="two-pan-flow-with-verdicts"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="pre-occupation-first-taker-takes-title-of-an-ownerless-movable,abandonment-needs-capacity-detachment-and-intent-to-make-it-ownerless,possession-needs-control-fact-and-appropriation-mind,pre-occupation-is-a-fact-act-needing-no-civil-capacity"
        data-focal-rule="the-ownerless-token-must-pass-both-pans-abandonment-then-possession-before-title-settles"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="preoccupation-definition" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 110}}>
          <Panel tone={C.oliveMid} watermark={<Hand size={110} color={C.oliveMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '9px 18px'}}>
            <PanelTab tone={C.oliveMid} icon={<Hand size={24} color={C.sand} strokeWidth={2.2} />}>先占 · 定义</PanelTab>
            <span style={{fontSize: 23, fontWeight: 900, color: C.ink }}><Soft color={C.goldpan}>无主动产</Soft>的最先占有人可取得该无主物<Under color={C.goldpan} delay={110}>所有权</Under>——适用范围<Soft color={C.rust}>不适用于不动产</Soft></span>
          </Panel>
        </Enter>
        <div style={{position: 'absolute', left: 0, top: 126, width: 1776, height: 210}}>
          <Enter delay={30} from="none" style={{position: 'absolute', inset: 0}}>
            <Panel tone={C.goldpan} watermark={<Trash2 size={130} color={C.goldpan} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
              <PanelTab tone={C.goldpan} icon={<Trash2 size={24} color={C.sand} strokeWidth={2.2} />}>第一盘 · 无主物的确定：抛弃（产生无主物的行为）</PanelTab>
              <div style={{position: 'relative', height: 96}}>
                <div style={{position: 'absolute', left: 0, top: 26}}>
                  <Chip tone={C.oliveMid} toneBg={C.sandDim}><span style={{fontSize: 22, fontWeight: 950, color: C.oliveMid }}>旧电脑</span></Chip>
                </div>
                <Path color={C.goldpan} delay={90} span={20} style={{position: 'absolute', left: 130, top: 56, width: 170, height: 4}} />
                <Mover delay={96} span={24} fromX={0} toX={170} fadeAt={166} style={{position: 'absolute', left: 20, top: 26, zIndex: 2}}>
                  <Chip tone={C.oliveMid} toneBg={C.sandDim}><span style={{fontSize: 22, fontWeight: 950, color: C.oliveMid }}>旧电脑</span></Chip>
                </Mover>
                <div style={{position: 'absolute', left: 306, top: 10, display: 'flex', flexDirection: 'column', gap: 6}}>
                  <Chip tone={C.goldpan} toneBg={C.goldpanPale}><Trash2 size={20} color={C.goldpan} strokeWidth={2.4} /><span style={{fontSize: 21, fontWeight: 950, color: C.goldpan }}>客观：脱离占有</span></Chip>
                  <Chip tone={C.goldpan} toneBg={C.goldpanPale}><span style={{fontSize: 21, fontWeight: 950, color: C.goldpan }}>主观：有抛弃的意思</span></Chip>
                </div>
                <div style={{position: 'absolute', left: 640, top: 14}}><Seal delay={160} size={21} tone={C.goldpan}>成为无主物</Seal></div>
                <div style={{position: 'absolute', right: 0, top: 0, width: 560, display: 'flex', flexDirection: 'column', gap: 7}}>
                  <IconChip icon={<Baby size={24} color={C.sand} strokeWidth={2.2} />} tone={C.indigo} title="行为能力陷阱：">
                    有相应<Soft color={C.indigo}>民事行为能力</Soft>者抛弃 → <Soft color={C.goldpan}>无主物</Soft>
                  </IconChip>
                  <IconChip icon={<Baby size={24} color={C.sand} strokeWidth={2.2} />} tone={C.rust} title="不具有相应行为能力者：">
                    抛弃之物是<Soft color={C.rust}>遗失物</Soft>（裤袋存单案：妻无抛弃意思 → 存单是遗失物）
                  </IconChip>
                </div>
              </div>
            </Panel>
          </Enter>
        </div>
        <div data-final-knowledge="possession-elements" style={{position: 'absolute', left: 0, top: 352, width: 1776, height: 190}}>
          <Enter delay={70} from="none" style={{position: 'absolute', inset: 0}}>
            <Panel tone={C.indigo} watermark={<Hand size={130} color={C.indigo} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
              <PanelTab tone={C.indigo} icon={<Hand size={24} color={C.sand} strokeWidth={2.2} />}>第二盘 · 占有的构成（先占的第二条件）</PanelTab>
              <div style={{position: 'relative', height: 92}}>
                <div style={{position: 'absolute', left: 0, top: 24}}>
                  <Chip tone={C.goldpan} toneBg={C.goldpanPale}><span style={{fontSize: 22, fontWeight: 950, color: C.goldpan }}>无主物（陨石）</span></Chip>
                </div>
                <Path color={C.indigo} delay={150} span={20} style={{position: 'absolute', left: 210, top: 54, width: 200, height: 4}} />
                <Mover delay={156} span={24} fromX={0} toX={200} fadeAt={226} style={{position: 'absolute', left: 20, top: 24, zIndex: 2}}>
                  <Chip tone={C.goldpan} toneBg={C.goldpanPale}><span style={{fontSize: 22, fontWeight: 950, color: C.goldpan }}>无主物（陨石）</span></Chip>
                </Mover>
                <div style={{position: 'absolute', left: 416, top: 8, display: 'flex', flexDirection: 'column', gap: 6}}>
                  <Chip tone={C.indigo} toneBg={C.indigoPale}><span style={{fontSize: 21, fontWeight: 950, color: C.indigo }}>客观：置于自己控制之下</span></Chip>
                  <Chip tone={C.indigo} toneBg={C.indigoPale}><span style={{fontSize: 21, fontWeight: 950, color: C.indigo }}>主观：占有的心态（据为己有·为我所用）</span></Chip>
                </div>
                <div style={{position: 'absolute', left: 850, top: 20}}><Seal delay={220} size={21} tone={C.indigo}>乙先占取得 ✓</Seal></div>
                <div style={{position: 'absolute', right: 0, top: 4, width: 560, display: 'flex', flexDirection: 'column', gap: 7}}>
                  <IconChip icon={<Gavel size={24} color={C.sand} strokeWidth={2.2} />} tone={C.rust} title="陨石案对照：">
                    甲（承包地主人）未捡 → 缺<Soft color={C.rust}>主观要件</Soft> → <Seal delay={250} size={17}>不构成先占</Seal>
                  </IconChip>
                  <IconChip icon={<Hand size={24} color={C.sand} strokeWidth={2.2} />} tone={C.goldpan} title="法律性质：">
                    先占＝<Soft color={C.goldpan}>事实行为</Soft>——<Under color={C.goldpan} delay={280}>不要求</Under>民事行为能力
                  </IconChip>
                </div>
              </div>
            </Panel>
          </Enter>
        </div>
        <Enter delay={120} from="up" style={{position: 'absolute', left: 0, top: 558, width: 1776, height: 210}}>
          <Panel tone={C.rust} watermark={<Trash2 size={120} color={C.rust} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '10px 18px'}}>
            <PanelTab tone={C.rust} icon={<Gavel size={24} color={C.sand} strokeWidth={2.2} />}>试一试 · 双案对照</PanelTab>
            <div style={{display: 'flex', gap: 14}}>
              <IconChip icon={<Trash2 size={24} color={C.sand} strokeWidth={2.2} />} tone={C.goldpan} title="老板电脑扔垃圾站：">
                有抛弃意思＋秘书搬离即<Soft color={C.goldpan}>脱离占有</Soft> → 搬离时成为<Seal delay={180} size={18} tone={C.goldpan}>无主物</Seal>
              </IconChip>
              <IconChip icon={<Baby size={24} color={C.sand} strokeWidth={2.2} />} tone={C.rust} title="裤子扔垃圾桶·袋中有妻的存单：">
                裤子＝<Seal delay={210} size={17} tone={C.goldpan}>无主物</Seal>；存单＝<Seal delay={240} size={17}>遗失物</Seal>（妻无抛弃意思）
              </IconChip>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft }}>口诀：抛弃看<Soft color={C.goldpan}>意思＋脱离</Soft>·占有看<Soft color={C.indigo}>控制＋心态</Soft>——先占是<Soft color={C.rust}>事实行为</Soft>，只认事实不问能力</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const AccessionForkScene = () => {
  /* data-final-knowledge="three-accession-types" data-final-knowledge="ownership-rules" */
  return (
    <Shell code="02" kicker="添附 · 三分与归属" title="添附的三种情形">
      <div
        data-layout="three-accession-lanes-with-ownership-rules"
        data-visual-anchor="document-fork"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="accession-forks-into-attachment-mixture-and-workmanship,movable-attached-to-land-belongs-to-the-land-owner,mixture-belongs-to-the-side-of-greater-value-unless-indistinguishability-fails,workmanship-follows-the-material-unless-work-value-far-exceeds-it"
        data-focal-rule="three-accession-lanes-settle-ownership-by-attachment-land-value-and-workmanship-rules"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 108}}>
          <Panel tone={C.oliveMid} watermark={<Blend size={110} color={C.oliveMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '9px 18px'}}>
            <PanelTab tone={C.oliveMid} icon={<Blend size={24} color={C.sand} strokeWidth={2.2} />}>添附 · 概念</PanelTab>
            <span style={{fontSize: 23, fontWeight: 900, color: C.ink}}>一方的物与另一方的物或<Soft color={C.goldpan}>劳务</Soft>相结合，成为<Soft color={C.goldpan}>新物</Soft>的事实——分为<Under color={C.goldpan} delay={110}>附合</Under>·<Under color={C.indigo} delay={140}>混合</Under>·<Under color={C.rust} delay={170}>加工</Under>三种情形</span>
          </Panel>
        </Enter>
        <div data-final-knowledge="three-accession-types" style={{position: 'absolute', left: 0, top: 124, width: 1776, height: 264}}>
          <Enter delay={40} from="left" style={{position: 'absolute', inset: 0}}>
            <Panel tone={C.goldpan} watermark={<Blend size={140} color={C.goldpan} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 10, padding: '12px 18px'}}>
              <PanelTab tone={C.goldpan} icon={<Blend size={24} color={C.sand} strokeWidth={2.2} />}>三类型 · 各自的关键词</PanelTab>
              <IconChip icon={<Blend size={24} color={C.sand} strokeWidth={2.2} />} tone={C.goldpan} title="附合（镶嵌）：">
                不同所有人的物基于<Soft color={C.goldpan}>物理上</Soft>的力凝结在一起·<Soft color={C.goldpan}>难以分割</Soft>（戒指镶进木头）
              </IconChip>
              <IconChip icon={<Blend size={24} color={C.sand} strokeWidth={2.2} />} tone={C.indigo} title="混合（搅拌）：">
                不同所有人的<Soft color={C.indigo}>动产</Soft>混杂在一起·<Soft color={C.indigo}>难以识别</Soft>
              </IconChip>
              <IconChip icon={<Hammer size={24} color={C.sand} strokeWidth={2.2} />} tone={C.rust} title="加工：">
                一方的原材料被另一方<Soft color={C.rust}>加工为新物</Soft>——一方的物与另一方的<Soft color={C.rust}>劳务</Soft>发生添附
              </IconChip>
            </Panel>
          </Enter>
        </div>
        <Enter delay={80} from="up" marker="ownership-rules" style={{position: 'absolute', left: 0, top: 404, width: 1776, height: 364}}>
          <Panel tone={C.indigo} watermark={<Coins size={140} color={C.indigo} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 10, padding: '13px 20px'}}>
            <PanelTab tone={C.indigo} icon={<Coins size={24} color={C.sand} strokeWidth={2.2} />}>添附物的归属 · 三条规则</PanelTab>
            <div style={{position: 'relative', height: 72}}>
              <div style={{position: 'absolute', left: 0, top: 16}}>
                <Chip tone={C.goldpan} toneBg={C.goldpanPale}><span style={{fontSize: 22, fontWeight: 950, color: C.goldpan }}>动产</span></Chip>
              </div>
              <Path color={C.goldpan} delay={130} span={20} style={{position: 'absolute', left: 110, top: 44, width: 180, height: 4}} />
              <Mover delay={136} span={22} fromX={0} toX={180} fadeAt={200} style={{position: 'absolute', left: 20, top: 16, zIndex: 2}}>
                <Chip tone={C.goldpan} toneBg={C.goldpanPale}><span style={{fontSize: 22, fontWeight: 950, color: C.goldpan }}>附合于不动产</span></Chip>
              </Mover>
              <span style={{position: 'absolute', left: 300, top: 16, fontSize: 24, fontWeight: 950, color: C.ink }}>→</span>
              <span style={{position: 'absolute', left: 340, top: 16}}><Seal delay={200} size={20} tone={C.goldpan}>归不动产权利人</Seal></span>
              <span style={{position: 'absolute', left: 640, top: 22, fontSize: 21, fontWeight: 900, color: C.inkSoft }}>例：戒指镶进他人木板 → 归木板（不动产）权利人</span>
            </div>
            <div style={{position: 'relative', height: 72}}>
              <div style={{position: 'absolute', left: 0, top: 16}}>
                <Chip tone={C.indigo} toneBg={C.indigoPale}><span style={{fontSize: 22, fontWeight: 950, color: C.indigo }}>混合物</span></Chip>
              </div>
              <Path color={C.indigo} delay={170} span={20} style={{position: 'absolute', left: 130, top: 44, width: 160, height: 4}} />
              <Mover delay={176} span={22} fromX={0} toX={160} fadeAt={240} style={{position: 'absolute', left: 20, top: 16, zIndex: 2}}>
                <Chip tone={C.indigo} toneBg={C.indigoPale}><span style={{fontSize: 22, fontWeight: 950, color: C.indigo }}>混合物所有权</span></Chip>
              </Mover>
              <span style={{position: 'absolute', left: 300, top: 16, fontSize: 24, fontWeight: 950, color: C.ink }}>→</span>
              <span style={{position: 'absolute', left: 340, top: 16}}><Seal delay={240} size={20} tone={C.indigo}>归价值较大的一方</Seal></span>
              <span style={{position: 'absolute', left: 640, top: 22, fontSize: 21, fontWeight: 900, color: C.inkSoft }}>前提：达到「难以识别」的程度方为混合</span>
            </div>
            <div style={{position: 'relative', height: 72}}>
              <div style={{position: 'absolute', left: 0, top: 16}}>
                <Chip tone={C.rust} toneBg={C.rustPale}><span style={{fontSize: 22, fontWeight: 950, color: C.rust }}>加工物</span></Chip>
              </div>
              <Path color={C.rust} delay={210} span={20} style={{position: 'absolute', left: 130, top: 44, width: 160, height: 4}} />
              <Mover delay={216} span={22} fromX={0} toX={160} fadeAt={280} style={{position: 'absolute', left: 20, top: 16, zIndex: 2}}>
                <Chip tone={C.rust} toneBg={C.rustPale}><span style={{fontSize: 22, fontWeight: 950, color: C.rust }}>加工物所有权</span></Chip>
              </Mover>
              <span style={{position: 'absolute', left: 300, top: 16, fontSize: 24, fontWeight: 950, color: C.ink }}>→</span>
              <span style={{position: 'absolute', left: 340, top: 16}}><Seal delay={280} size={20}>原则归原材料所有人</Seal></span>
              <span style={{position: 'absolute', left: 640, top: 22, fontSize: 21, fontWeight: 900, color: C.inkSoft }}>例外：加工的价值<Under color={C.rust} delay={300}>远大于</Under>原材料价值的除外</span>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const AccessionVerdictsScene = () => {
  /* data-final-knowledge="computer-verdicts" data-final-knowledge="equity-principles" */
  return (
    <Shell code="03" kicker="双案对照 · 利益衡平" title="添附的双案与衡平">
      <div
        data-layout="twin-verdict-lanes-with-equity-strip"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="indistinguishable-identicals-mix-and-the-request-becomes-a-claim,distinguishable-models-stay-separate-and-the-request-is-propertied,equity-works-through-unjust-enrichment-return-and-damages,jade-workmanship-settles-to-the-worker-when-value-far-exceeds-material"
        data-focal-rule="mix-or-not-decides-both-the-owner-and-the-nature-of-the-return-request"
        data-focal-channels="contrast,connector,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="up" marker="computer-verdicts" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 312}}>
          <Panel tone={C.indigo} watermark={<Coins size={140} color={C.indigo} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 10, padding: '12px 18px'}}>
            <PanelTab tone={C.indigo} icon={<Coins size={24} color={C.sand} strokeWidth={2.2} />}>电脑双案 · 甲要卖 10 台，多交了一台</PanelTab>
            <div style={{display: 'flex', gap: 14}}>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 8, backgroundColor: C.sandDim, borderLeft: `6px solid ${C.indigo}`, padding: '10px 14px'}}>
                <span style={{fontSize: 23, fontWeight: 950, color: C.indigo }}>11 台 A 型（同种）</span>
                <span style={{fontSize: 21, fontWeight: 900, color: C.ink }}>已成<Soft color={C.indigo}>混合</Soft>——难以识别</span>
                <span style={{fontSize: 21, fontWeight: 900, color: C.ink }}>多交的 1 台归<Seal delay={150} size={18} tone={C.indigo}>乙 · 混合取得</Seal></span>
                <span style={{fontSize: 21, fontWeight: 900, color: C.ink }}>甲的返还请求权＝<Soft color={C.goldpan}>债权请求权</Soft>（不当得利）</span>
              </div>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 8, backgroundColor: C.sandDim, borderLeft: `6px solid ${C.rust}`, padding: '10px 14px'}}>
                <span style={{fontSize: 23, fontWeight: 950, color: C.rust }}>10 台 A 型＋1 台 B 型（异种）</span>
                <span style={{fontSize: 21, fontWeight: 900, color: C.ink }}><Soft color={C.rust}>未混合</Soft>——仍可识别</span>
                <span style={{fontSize: 21, fontWeight: 900, color: C.ink }}>B 型归<Seal delay={180} size={18}>甲</Seal>——乙不能基于混合取得</span>
                <span style={{fontSize: 21, fontWeight: 900, color: C.ink }}>甲的返还请求权＝<Soft color={C.slateMidTone}>物权请求权</Soft>（返还原物）</span>
              </div>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft }}>对照点：「难以识别」决定混合成立与否——连带决定归属与请求权性质</div>
          </Panel>
        </Enter>
        <Enter delay={70} from="up" marker="equity-principles" style={{position: 'absolute', left: 0, top: 328, width: 1776, height: 440}}>
          <Panel tone={C.rust} watermark={<Scale size={150} color={C.rust} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 20px'}}>
            <PanelTab tone={C.rust} icon={<Scale size={24} color={C.sand} strokeWidth={2.2} />}>利益衡平两原则 · 玉石案（2 万玉石雕成 20 万玉白菜）</PanelTab>
            <div style={{position: 'relative', height: 92}}>
              <div style={{position: 'absolute', left: 0, top: 24}}>
                <Chip tone={C.goldpan} toneBg={C.goldpanPale}><span style={{fontSize: 22, fontWeight: 950, color: C.goldpan }}>玉石（甲·2 万）</span></Chip>
              </div>
              <Path color={C.rust} delay={110} span={20} style={{position: 'absolute', left: 230, top: 54, width: 300, height: 4}} />
              <Mover delay={116} span={24} fromX={0} toX={300} fadeAt={190} style={{position: 'absolute', left: 236, top: 24, zIndex: 2}}>
                <Chip tone={C.goldpan} toneBg={C.goldpanPale}><Hammer size={20} color={C.goldpan} strokeWidth={2.4} /><span style={{fontSize: 22, fontWeight: 950, color: C.goldpan }}>乙的加工劳务</span></Chip>
              </Mover>
              <div style={{position: 'absolute', left: 540, top: 14}}>
                <Chip tone={C.rust} toneBg={C.rustPale}><span style={{fontSize: 23, fontWeight: 950, color: C.rust }}>玉白菜（20 万·新物）</span></Chip>
              </div>
              <div style={{position: 'absolute', left: 880, top: 14}}><Seal delay={190} size={20} tone={C.rust}>归乙——加工价值远大于原材料</Seal></div>
            </div>
            <div style={{display: 'flex', gap: 14}}>
              <IconChip icon={<Coins size={24} color={C.sand} strokeWidth={2.2} />} tone={C.goldpan} title="衡平① 不当得利返还：">
                乙取得了甲玉石的价值 → 向甲<Soft color={C.goldpan}>返还 2 万元</Soft>
              </IconChip>
              <IconChip icon={<Gavel size={24} color={C.sand} strokeWidth={2.2} />} tone={C.rust} title="衡平② 损害赔偿：">
                甲无法向丙履约赔 2000 违约金（乙擅自加工）→ 乙<Soft color={C.rust}>侵权</Soft>赔偿
              </IconChip>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft}}>口诀：取得添附物构成<Soft color={C.goldpan}>不当得利</Soft>应返还 · 擅自实施添附有<Soft color={C.rust}>过错</Soft>构成<Soft color={C.rust}>侵权</Soft>应赔偿</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
