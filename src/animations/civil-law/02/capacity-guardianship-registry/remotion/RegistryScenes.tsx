import type {CSSProperties, ReactNode} from 'react';
import {Baby, Hourglass, Scale, ScrollText, Skull, UserCheck, UserMinus, UserX} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  pine: '#1E3A34',
  pineMid: '#2C4F46',
  verdigris: '#5F8A7A',
  verdigrisPale: '#D9E6DE',
  rice: '#F4EDDC',
  riceDim: '#E7DEC8',
  riceEdge: '#BFB49A',
  cinnabar: '#B5432E',
  cinnabarPale: '#F0D8CE',
  amber: '#C99A3C',
  amberPale: '#EDDCA8',
  indigo: '#4E6086',
  indigoPale: '#D7DEE8',
  ink: '#26302C',
  inkSoft: '#6C7570',
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

export const Shell = ({children, code, kicker, title}: {readonly children: ReactNode; readonly code: string; readonly kicker: string; readonly title: string}) => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{
      backgroundColor: C.pine,
      color: C.rice,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(90deg, transparent 0 148px, rgba(0, 0, 0, 0.13) 148px 151px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.amber}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.amberPale}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.pineMid, borderLeft: `8px solid ${C.amber}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.rice, letterSpacing: 2}}>民法 · 第2讲 · {code}</span>
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
        borderBottom: `2px solid ${C.amber}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.rice}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.amberPale, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

export const Plate = ({children, tone = C.verdigris}: {readonly children: ReactNode; readonly tone?: string}) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '5px 14px',
      backgroundColor: tone,
      border: `2px solid ${C.amber}`,
      boxShadow: `0 2px 0 ${C.pine}`,
      color: C.rice,
      fontSize: 22,
      fontWeight: 900,
      letterSpacing: 2,
    }}
  >
    {children}
  </span>
);

export const Seal = ({children, delay = 0, size = 24, tone = C.cinnabar}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '7px 15px',
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

export const Under = ({children, color = C.cinnabar, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

export const Chip = ({children, tone = C.riceEdge, toneBg = C.riceDim, ink = C.ink}: {readonly children: ReactNode; readonly tone?: string; readonly toneBg?: string; readonly ink?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${tone}`, backgroundColor: toneBg, padding: '5px 12px', fontSize: 22, fontWeight: 900, color: ink, whiteSpace: 'nowrap'}}>{children}</span>
);

export const CapacityBirthDeathScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="capacity-gate" data-final-knowledge="fetus-retroactive-rule" data-final-knowledge="live-birth-fork" data-final-knowledge="jade-case-verdicts"
     data-stateful-source="jade-gift-ticket" data-stateful-terminal="jade-gift-ticket" */
  const ticketTravel = prog(frame, 250, 40);
  const ticketX = interpolate(ticketTravel, [0, 1], [1180, 520], CLAMP);
  const ticketY = interpolate(ticketTravel, [0, 1], [190, 512], CLAMP);
  return (
    <Shell code="01" kicker="权利能力" title="权利能力：生死之门与胎儿三岔">
      <div
        data-layout="life-timeline-trident-gate"
        data-visual-anchor="life-timeline"
        data-text-treatments="label-block,soft-highlight,stamp,thin-underline"
        data-visual-grammar="capacity-is-the-qualification-to-hold-rights-and-duties,natural-person-capacity-runs-from-birth-to-death,unborn-fetus-gains-retroactive-capacity-when-born-alive,still-birth-erases-the-retroactive-effect-so-rights-never-arise"
        data-focal-rule="born-alive-decides-whether-fetus-interests-retroactively-take-effect"
        data-focal-channels="connector,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="capacity-gate" style={{position: 'absolute', left: 40, top: 0, width: 1696, height: 108}}>
          <div style={{height: '100%', backgroundColor: C.rice, border: `3px solid ${C.verdigris}`, display: 'flex', alignItems: 'center', gap: 16, padding: '0 22px'}}>
            <Hourglass size={32} color={C.verdigris} strokeWidth={2.4} />
            <div style={{display: 'flex', flexDirection: 'column', gap: 6}}>
              <div style={{fontSize: 24, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
                民事权利能力＝享有<Soft color={C.verdigris}>民事权利</Soft>、承担<Soft color={C.verdigris}>民事义务</Soft>的<Under color={C.cinnabar} delay={40}>资格</Under>
              </div>
              <div style={{fontSize: 21, fontWeight: 900, color: C.inkSoft}}>主体两类：自然人 · 法人 —— 有资格，才有「自己的」权利、义务、责任</div>
            </div>
            <div style={{marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0}}>
              <Baby size={28} color={C.indigo} strokeWidth={2.4} />
              <span style={{fontSize: 22, fontWeight: 950, color: C.ink}}>始于出生</span>
              <span style={{fontSize: 24, fontWeight: 950, color: C.amber}}>→</span>
              <span style={{fontSize: 22, fontWeight: 950, color: C.ink}}>终于死亡</span>
              <Skull size={28} color={C.cinnabar} strokeWidth={2.4} />
            </div>
          </div>
        </Enter>
        <Enter delay={50} from="up" marker="fetus-retroactive-rule" style={{position: 'absolute', left: 40, top: 124, width: 1696, height: 96}}>
          <div style={{height: '100%', backgroundColor: C.riceDim, border: `3px solid ${C.amber}`, display: 'flex', alignItems: 'center', gap: 14, padding: '0 22px'}}>
            <ScrollText size={30} color={C.amber} strokeWidth={2.4} />
            <span style={{fontSize: 22, fontWeight: 900, color: C.ink, lineHeight: 1.45}}>
              胎儿：原则<Soft color={C.cinnabar}>不具有</Soft>权利能力；涉及<Under delay={90} color={C.amber}>利益保护</Under>（继承 · 赠与 · 侵权）且娩出<Soft color={C.verdigris}>活体</Soft> → 视为有权利能力，<Under color={C.cinnabar} delay={130}>溯及法律关系成立时</Under>；法定代理人＝父母
            </span>
          </div>
        </Enter>
        <div data-final-knowledge="live-birth-fork" style={{position: 'absolute', left: 40, top: 236, width: 1696, height: 260}}>
          {[
            {left: 0, tone: C.verdigris, pale: C.verdigrisPale, icon: <Baby size={30} color={C.verdigris} strokeWidth={2.4} />, title: '娩出 · 活体', rows: ['溯及 A 点 · 权利即产生', '胎儿取得赠与 · 继承等权益']},
            {left: 572, tone: C.amber, pale: C.amberPale, icon: <Baby size={30} color={C.amber} strokeWidth={2.4} />, title: '活体 · 后死亡', rows: ['溯及 A 点 · 权利即产生', '婴儿成为被继承人 → 发生继承关系']},
            {left: 1144, tone: C.cinnabar, pale: C.cinnabarPale, icon: <Skull size={30} color={C.cinnabar} strokeWidth={2.4} />, title: '娩出 · 死体', rows: ['溯及 A 点 · 权利未产生', '赠与等法律关系不成立']},
          ].map((card, cardIndex) => (
            <Enter key={card.title} delay={90 + cardIndex * 24} from="up" style={{position: 'absolute', left: card.left, top: 0, width: 552, height: 260}}>
              <div style={{height: '100%', backgroundColor: C.rice, border: `3px solid ${card.tone}`, display: 'flex', flexDirection: 'column', gap: 10, padding: '14px 18px'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                  {card.icon}
                  <Plate tone={card.tone}>{card.title}</Plate>
                </div>
                <div style={{fontSize: 21.5, fontWeight: 900, color: C.ink, lineHeight: 1.5, display: 'flex', flexDirection: 'column', gap: 8}}>
                  {card.rows.map((row) => (
                    <span key={row}>· {row}</span>
                  ))}
                </div>
              </div>
            </Enter>
          ))}
        </div>
        <Enter delay={170} from="up" marker="jade-case-verdicts" style={{position: 'absolute', left: 40, top: 512, width: 1696, height: 256}}>
          <div style={{height: '100%', backgroundColor: C.rice, border: `3px solid ${C.indigo}`, display: 'flex', gap: 16, padding: '12px 18px'}}>
            <span style={{writingMode: 'vertical-rl', fontSize: 22, fontWeight: 950, color: C.indigo, letterSpacing: 4, flexShrink: 0}}>玉石案四连判</span>
            <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', gap: 8}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, fontSize: 21, fontWeight: 900, color: C.ink}}>
                <Chip tone={C.indigo} toneBg={C.indigoPale}>① 产前 · 乙尚未分娩</Chip>
                <span>父母作为法定代理人，<Soft color={C.verdigris}>能代理胎儿受领交付 ✓</Soft></span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, fontSize: 21, fontWeight: 900, color: C.ink}}>
                <Chip tone={C.cinnabar} toneBg={C.cinnabarPale} ink={C.cinnabar}>② 娩出死体</Chip>
                <span>赠与不成立 → 物权<Seal delay={260} size={18}>归丙 · 甲乙返还</Seal></span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, fontSize: 21, fontWeight: 900, color: C.ink}}>
                <Chip tone={C.verdigris} toneBg={C.verdigrisPale}>③ 娩出活体</Chip>
                <span>归婴儿 · 自<Under color={C.verdigris} delay={300}>丙交付完成时</Under>取得所有权（溯及 A 点）</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, fontSize: 21, fontWeight: 900, color: C.ink}}>
                <Chip tone={C.amber} toneBg={C.amberPale}>④ 活体后旋即死亡</Chip>
                <span>玉石成为婴儿<Soft color={C.cinnabar}>遗产</Soft> → 由法定继承人甲、乙继承</span>
              </div>
            </div>
          </div>
        </Enter>
        <span data-stateful-terminal="jade-gift-ticket" style={{position: 'absolute', left: 200, top: 476, display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${C.amber}`, backgroundColor: C.riceDim, padding: '5px 10px', fontSize: 20, fontWeight: 950, color: C.ink, opacity: prog(frame, 296, 14)}}>
          🎁 玉石赠与 · 四种结局已判 ✓
        </span>
        <div data-stateful-source="jade-gift-ticket" style={{position: 'absolute', left: ticketX, top: ticketY, opacity: prog(frame, 220, 14) * (1 - prog(frame, 312, 14)), visibility: frame >= 330 ? 'hidden' : 'visible'}}>
          <Chip tone={C.amber} toneBg={C.rice}>礼品票 · 丙将玉石赠与胎儿</Chip>
        </div>
      </div>
    </Shell>
  );
};

export const CapacityThreeTierScene = () => {
  /* data-final-knowledge="full-tier" data-final-knowledge="limited-tier" data-final-knowledge="void-tier" data-final-knowledge="effect-table" data-final-knowledge="watch-piano-verdicts" */
  return (
    <Shell code="02" kicker="行为能力" title="行为能力：心智刻度上的三级台阶">
      <div
        data-layout="triple-tier-age-bench"
        data-visual-anchor="age-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="legal-acts-need-capacity-while-factual-acts-do-not,full-capacity-starts-at-eighteen-or-sixteen-with-labour-income,limited-capacity-validates-understood-and-pure-benefit-acts,no-capacity-acts-are-void-including-pure-benefit-ones"
        data-focal-rule="mental-capacity-grade-decides-the-effect-of-independent-legal-acts"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" style={{position: 'absolute', left: 40, top: 0, width: 1696, height: 100}}>
          <div style={{height: '100%', backgroundColor: C.rice, border: `3px solid ${C.verdigris}`, display: 'flex', alignItems: 'center', gap: 16, padding: '0 22px'}}>
            <Scale size={32} color={C.verdigris} strokeWidth={2.4} />
            <span style={{fontSize: 22, fontWeight: 900, color: C.ink, lineHeight: 1.4}}>
              行为能力＝实施<Soft color={C.verdigris}>民事法律行为</Soft>、创设权利义务的能力 · 核心基础＝<Under color={C.cinnabar} delay={40}>心智程度</Under>
            </span>
            <div style={{marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0}}>
              <Chip tone={C.verdigris} toneBg={C.verdigrisPale}>法律行为 → 要求</Chip>
              <Chip tone={C.cinnabar} toneBg={C.cinnabarPale} ink={C.cinnabar}>事实行为 → 不要求</Chip>
            </div>
          </div>
        </Enter>
        <div style={{position: 'absolute', left: 40, top: 116, width: 1696, height: 380}}>
          <Enter delay={30} from="up" marker="full-tier" style={{position: 'absolute', left: 0, top: 0, width: 552, height: 380}}>
            <div style={{height: '100%', backgroundColor: C.rice, border: `3px solid ${C.verdigris}`, display: 'flex', flexDirection: 'column', gap: 10, padding: '14px 18px'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <UserCheck size={30} color={C.verdigris} strokeWidth={2.4} />
                <Plate tone={C.verdigris}>完全行为能力</Plate>
              </div>
              <div style={{fontSize: 21, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
                认定：<Under color={C.verdigris} delay={70}>18 周岁</Under>以上 ＋ 心智正常
              </div>
              <div style={{fontSize: 20, fontWeight: 900, color: C.ink, lineHeight: 1.5, backgroundColor: C.riceDim, border: `2px solid ${C.amber}`, padding: '8px 12px'}}>
                视为：16–18 周岁且以<Soft color={C.amber}>自己劳动收入</Soft>为主要生活来源
              </div>
              <div style={{marginTop: 'auto', fontSize: 20.5, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
                权限：可<Soft color={C.verdigris}>独立实施</Soft>任何民事法律行为 · 例外：结婚还须达<Under delay={110} color={C.cinnabar}>法定婚龄</Under> 💍
              </div>
            </div>
          </Enter>
          <Enter delay={54} from="up" marker="limited-tier" style={{position: 'absolute', left: 572, top: 0, width: 552, height: 380}}>
            <div style={{height: '100%', backgroundColor: C.rice, border: `3px solid ${C.amber}`, display: 'flex', flexDirection: 'column', gap: 9, padding: '14px 18px'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <UserMinus size={30} color={C.amber} strokeWidth={2.4} />
                <Plate tone={C.amber}>限制行为能力</Plate>
              </div>
              <div style={{fontSize: 21, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
                认定：<Under color={C.amber} delay={80}>8 周岁</Under>以上心智正常的未成年人 · 不能<Soft color={C.amber}>完全辨认</Soft>的成年人
              </div>
              <div style={{fontSize: 20.5, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
                能理解（小额 · 交易简单 · <Soft color={C.verdigris}>纯获利益</Soft>）→ <span style={{color: C.verdigris}}>有效</span>
              </div>
              <div style={{fontSize: 20.5, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
                不能理解 → <span style={{color: C.cinnabar}}>效力待定</span>：监护人追认＝自始有效 · 拒绝＝自始无效
              </div>
              <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 900, color: C.inkSoft}}>独立实施的「能理解」行为无需追认</div>
            </div>
          </Enter>
          <Enter delay={78} from="up" marker="void-tier" style={{position: 'absolute', left: 1144, top: 0, width: 552, height: 380}}>
            <div style={{height: '100%', backgroundColor: C.rice, border: `3px solid ${C.cinnabar}`, display: 'flex', flexDirection: 'column', gap: 10, padding: '14px 18px'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <UserX size={30} color={C.cinnabar} strokeWidth={2.4} />
                <Plate tone={C.cinnabar}>无行为能力</Plate>
              </div>
              <div style={{fontSize: 21, fontWeight: 900, color: C.ink, lineHeight: 1.55}}>
                认定：不满<Under color={C.cinnabar} delay={90}>8 周岁</Under> · 8 周岁以上但不能辨认的未成年人 · 不能辨认的成年人
              </div>
              <div style={{fontSize: 20.5, fontWeight: 900, color: C.ink, lineHeight: 1.5, backgroundColor: C.cinnabarPale, border: `3px dashed ${C.cinnabar}`, padding: '8px 12px'}}>
                独立实施民事法律行为 → <span style={{color: C.cinnabar}}>一律无效</span> 🚫 <Soft color={C.cinnabar}>含纯获利益</Soft>
              </div>
              <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 900, color: C.inkSoft}}>需监护人代理实施</div>
            </div>
          </Enter>
        </div>
        <Enter delay={120} from="up" marker="effect-table" style={{position: 'absolute', left: 40, top: 512, width: 1696, height: 100}}>
          <div style={{height: '100%', backgroundColor: C.riceDim, border: `3px solid ${C.indigo}`, display: 'flex', alignItems: 'center', gap: 14, padding: '0 22px'}}>
            <span style={{padding: '5px 13px', backgroundColor: C.indigo, color: C.rice, fontSize: 21, fontWeight: 900, letterSpacing: 2, flexShrink: 0}}>效力速查</span>
            <span style={{fontSize: 22, fontWeight: 900, color: C.ink}}>
              限制：能理解＝<Soft color={C.verdigris}>有效</Soft> · 不能理解＝<Soft color={C.amber}>待定</Soft> · 纯获利益＝<Soft color={C.verdigris}>有效</Soft>
            </span>
            <span style={{fontSize: 24, fontWeight: 950, color: C.inkSoft}}>‖</span>
            <span style={{fontSize: 22, fontWeight: 900, color: C.ink}}>无：<Soft color={C.cinnabar}>一律无效</Soft></span>
          </div>
        </Enter>
        <Enter delay={160} from="up" marker="watch-piano-verdicts" style={{position: 'absolute', left: 40, top: 628, width: 1696, height: 140}}>
          <div style={{height: '100%', backgroundColor: C.rice, border: `3px solid ${C.amber}`, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8, padding: '10px 22px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, fontSize: 21, fontWeight: 900, color: C.ink}}>
              <Chip tone={C.cinnabar} toneBg={C.cinnabarPale} ink={C.cinnabar}>⌚ 7 岁 · 爷爷赠名表</Chip>
              <span>无行为能力人独立受赠 →</span>
              <Seal delay={220} size={19}>无效（含纯获利益）</Seal>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, fontSize: 21, fontWeight: 900, color: C.ink}}>
              <Chip tone={C.verdigris} toneBg={C.verdigrisPale}>🎹 10 岁 · 爷爷赠钢琴</Chip>
              <span>限制行为能力人 · 纯获利益 →</span>
              <Seal delay={260} size={19} tone={C.verdigris}>有效 ✓</Seal>
            </div>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};
