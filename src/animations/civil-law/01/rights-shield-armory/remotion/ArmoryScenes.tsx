import type {CSSProperties, ReactNode} from 'react';
import {Ban, Coins, Crown, Hand, Handshake, Home} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  navy: '#232A3A',
  navyMid: '#39445A',
  steel: '#7C879B',
  steelPale: '#D7DEE8',
  crimson: '#A6342C',
  crimsonPale: '#EDD2CB',
  parchment: '#F1E8D4',
  parchmentDim: '#E3D9C0',
  parchmentEdge: '#BCAE8E',
  brass: '#A98634',
  brassPale: '#E5D2A2',
  moss: '#5E7D54',
  mossPale: '#DCE5D2',
  ink: '#262A31',
  inkSoft: '#69707A',
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
      backgroundColor: C.navy,
      color: C.parchment,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(0deg, transparent 0 118px, rgba(0, 0, 0, 0.15) 118px 121px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.brass}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.brassPale}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.navyMid, borderLeft: `8px solid ${C.brass}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.parchment, letterSpacing: 2}}>民法 · 第1讲 · {code}</span>
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
        borderBottom: `2px solid ${C.brass}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.parchment}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.brassPale, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

export const Boss = ({children, tone = C.crimson}: {readonly children: ReactNode; readonly tone?: string}) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '5px 14px',
      backgroundColor: tone,
      border: `2px solid ${C.brass}`,
      boxShadow: `0 2px 0 ${C.navy}`,
      color: C.parchment,
      fontSize: 22,
      fontWeight: 900,
      letterSpacing: 2,
    }}
  >
    {children}
  </span>
);

export const Seal = ({children, delay = 0, size = 24, tone = C.crimson}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

export const Under = ({children, color = C.crimson, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

export const Chip = ({children, tone = C.parchmentEdge, toneBg = C.parchmentDim, ink = C.ink}: {readonly children: ReactNode; readonly tone?: string; readonly toneBg?: string; readonly ink?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${tone}`, backgroundColor: toneBg, padding: '5px 12px', fontSize: 22, fontWeight: 900, color: ink, whiteSpace: 'nowrap'}}>{children}</span>
);

export const DominionRequestScene = () => {
  /* data-final-knowledge="dominion-tower" data-final-knowledge="request-tower" data-final-knowledge="feature-ladder" data-final-knowledge="rental-case-verdict" */
  const rows = [
    {label: '义务人范围', left: '权利人以外的任何人', right: '特定相对人'},
    {label: '实现方式', left: '可以直接实现', right: '需要义务人协助'},
    {label: '排他性', left: '具有排他性', right: '不具有排他性'},
  ] as const;
  return (
    <Shell code="05" kicker="权利二分" title="支配权与请求权：矛尖的两极">
      <div
        data-layout="twin-tower-contrast-rack"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,soft-highlight,stamp,thin-underline"
        data-visual-grammar="dominion-rights-bind-everyone-and-realise-directly,request-rights-bind-only-the-counterparty-and-need-cooperation,multiple-request-rights-can-coexist-on-one-object,the-renter-cannot-sue-the-thief-but-the-owner-can"
        data-focal-rule="against-whom-and-how-a-right-realises-splits-dominion-from-request"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="dominion-tower" style={{position: 'absolute', left: 40, top: 0, width: 820, height: 64}}>
          <div style={{height: '100%', backgroundColor: C.navyMid, border: `2px solid ${C.brass}`, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14}}>
            <Crown size={30} color={C.brassPale} strokeWidth={2.4} />
            <span style={{fontSize: 26, fontWeight: 950, color: C.parchment}}>支配权</span>
            <Chip tone={C.steel} toneBg={C.steelPale}>绝对权 · 对世权</Chip>
          </div>
        </Enter>
        <Enter delay={16} from="down" marker="request-tower" style={{position: 'absolute', left: 916, top: 0, width: 820, height: 64}}>
          <div style={{height: '100%', backgroundColor: C.crimson, border: `2px solid ${C.brass}`, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14}}>
            <Handshake size={30} color={C.parchment} strokeWidth={2.4} />
            <span style={{fontSize: 26, fontWeight: 950, color: C.parchment}}>请求权</span>
            <Chip tone={C.crimson} toneBg={C.crimsonPale} ink={C.crimson}>相对权 · 对人权</Chip>
          </div>
        </Enter>
        <div data-final-knowledge="feature-ladder" style={{position: 'absolute', left: 40, top: 84, width: 1696, height: 372}}>
          {rows.map((row, rowIndex) => (
            <Enter key={row.label} delay={34 + rowIndex * 22} from="up" style={{position: 'absolute', left: 0, top: rowIndex * 124, width: 1696, height: 112}}>
              <div style={{height: '100%', display: 'flex', alignItems: 'stretch', gap: 0}}>
                <div style={{flex: 1, backgroundColor: C.parchment, border: `3px solid ${C.steel}`, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, padding: '0 20px'}}>
                  <span style={{fontSize: 26, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>{row.left}</span>
                </div>
                <div style={{width: 220, backgroundColor: C.navyMid, border: `3px solid ${C.brass}`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <span style={{fontSize: 24, fontWeight: 950, color: C.brassPale, letterSpacing: 2}}>{row.label}</span>
                </div>
                <div style={{flex: 1, backgroundColor: C.parchment, border: `3px solid ${C.crimson}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '0 20px'}}>
                  <span style={{fontSize: 26, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>{row.right}</span>
                  {rowIndex === 2 ? <span style={{fontSize: 21, fontWeight: 900, color: C.inkSoft}}>同一个标的物上可共存多个请求权</span> : null}
                </div>
              </div>
            </Enter>
          ))}
        </div>
        <Enter delay={120} from="up" marker="rental-case-verdict" style={{position: 'absolute', left: 40, top: 480, width: 1696, height: 164}}>
          <div style={{height: '100%', backgroundColor: C.parchment, border: `3px solid ${C.brass}`, display: 'flex', alignItems: 'center', gap: 16, padding: '0 22px'}}>
            <span style={{writingMode: 'vertical-rl', fontSize: 22, fontWeight: 950, color: C.crimson, letterSpacing: 4, flexShrink: 0}}>租车被偷案</span>
            <div style={{display: 'flex', flexDirection: 'column', gap: 10, flex: 1}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <Chip tone={C.steel} toneBg={C.steelPale}>甲 · 所有权＝支配权</Chip>
                <span style={{fontSize: 23, fontWeight: 900, color: C.ink}}>可对任何人主张</span>
                <Seal delay={180} size={20} tone={C.moss}>能向丙主张 ✓</Seal>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <Chip tone={C.crimson} toneBg={C.parchmentDim}><Ban size={22} color={C.crimson} strokeWidth={2.6} /> 乙 · 租赁权＝债权</Chip>
                <span style={{fontSize: 23, fontWeight: 900, color: C.ink}}>只能对相对人甲主张</span>
                <Seal delay={210} size={20}>不能向丙主张 ✗</Seal>
              </div>
            </div>
          </div>
        </Enter>
        <Enter delay={170} from="up" style={{position: 'absolute', left: 40, top: 664, width: 1696, height: 92}}>
          <div style={{height: '100%', backgroundColor: C.navyMid, border: `2px solid ${C.brass}`, display: 'flex', alignItems: 'center', gap: 18, padding: '0 26px'}}>
            <span style={{padding: '4px 13px', backgroundColor: C.brass, color: C.navy, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>形象记忆</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.parchment}}>
              支配权＝<Soft color={C.brassPale}>我的东西我做主</Soft>（无需他人配合）· 请求权＝<Soft color={C.brassPale}>求你帮我办件事</Soft>（必须相对人配合）
            </span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const ThreeRequestLanesScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="claim-lane" data-final-knowledge="property-lane" data-final-knowledge="possession-lane" data-final-knowledge="consumable-trap"
     data-stateful-source="sheep-claim-ticket" data-stateful-terminal="sheep-claim-ticket" */
  const ticketTravel = prog(frame, 170, 44);
  const ticketX = interpolate(ticketTravel, [0, 1], [1020, 660]);
  const ticketY = interpolate(ticketTravel, [0, 1], [700, 470]);
  const lanes = [
    {
      id: 'claim-lane',
      icon: <Handshake size={36} color={C.steel} strokeWidth={2.4} />,
      plate: '债权请求权',
      saying: '你把「你的」给我',
      basis: '债权',
      content: <Chip tone={C.steel} toneBg={C.steelPale}>给付（财产 · 劳务）</Chip>,
      tone: C.steel,
    },
    {
      id: 'property-lane',
      icon: <Home size={36} color={C.moss} strokeWidth={2.4} />,
      plate: '物权请求权',
      saying: '你把「我的」给我',
      basis: '物权',
      content: (
        <div style={{display: 'flex', gap: 8, flexWrap: 'wrap'}}>
          <Chip tone={C.moss} toneBg={C.mossPale}>返还原物</Chip>
          <Chip tone={C.moss} toneBg={C.mossPale}>排除妨害</Chip>
          <Chip tone={C.moss} toneBg={C.mossPale}>消除危险</Chip>
        </div>
      ),
      tone: C.moss,
    },
    {
      id: 'possession-lane',
      icon: <Hand size={36} color={C.crimson} strokeWidth={2.4} />,
      plate: '占有保护请求权',
      saying: '你把「我占有的」给我',
      basis: '占有',
      content: (
        <div style={{display: 'flex', gap: 8, flexWrap: 'wrap'}}>
          <Chip tone={C.crimson} toneBg={C.crimsonPale} ink={C.crimson}>返还原物</Chip>
          <Chip tone={C.crimson} toneBg={C.crimsonPale} ink={C.crimson}>排除妨害</Chip>
          <Chip tone={C.crimson} toneBg={C.crimsonPale} ink={C.crimson}>消除危险</Chip>
        </div>
      ),
      tone: C.crimson,
    },
  ] as const;
  return (
    <Shell code="06" kicker="三大请求权" title="债权 · 物权 · 占有：三条请求车道">
      <div
        data-layout="triple-request-lane-hall"
        data-visual-anchor="typographic-sequence"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="claim-request-demands-yours-as-yours-and-is-grounded-in-credit,property-request-restores-my-full-dominion-and-is-grounded-in-property,possession-request-restores-my-held-thing-and-is-grounded-in-possession,consumables-are-owned-by-possession-so-their-return-is-always-a-claim"
        data-focal-rule="what-you-demand-and-on-what-ground-identifies-the-request-lane"
        data-focal-channels="spatial,icon,connector,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        {lanes.map((lane, laneIndex) => (
          <Enter key={lane.plate} delay={8 + laneIndex * 20} from="up" marker={lane.id} style={{position: 'absolute', left: 40 + laneIndex * 568, top: 0, width: 544, height: 556}}>
            <div style={{height: '100%', backgroundColor: C.parchment, border: `3px solid ${lane.tone}`, display: 'flex', flexDirection: 'column', gap: 12, padding: '16px 20px'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                {lane.icon}
                <Boss tone={lane.tone}>{lane.plate}</Boss>
              </div>
              <div style={{fontSize: 30, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)', lineHeight: 1.25}}>{lane.saying}</div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 8, marginTop: 4}}>
                <span style={{fontSize: 21, fontWeight: 900, color: C.inkSoft}}>权利内容</span>
                {lane.content}
              </div>
              <div style={{marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 12}}>
                <span style={{fontSize: 21, fontWeight: 900, color: C.inkSoft}}>主张依据</span>
                <Seal delay={110 + laneIndex * 24} size={26} tone={lane.tone}>{lane.basis}</Seal>
                {laneIndex === 1 ? (
                  <span data-stateful-terminal="sheep-claim-ticket" style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${C.brass}`, backgroundColor: C.parchmentDim, padding: '5px 10px', fontSize: 22, fontWeight: 950, color: C.ink, opacity: prog(frame, 216, 14)}}>
                    🐑 捡到羊 → 要自己的羊
                  </span>
                ) : null}
              </div>
            </div>
          </Enter>
        ))}
        <div data-stateful-source="sheep-claim-ticket" style={{position: 'absolute', left: ticketX, top: ticketY, opacity: prog(frame, 150, 14) * (1 - prog(frame, 214, 14))}}>
          <Chip tone={C.brass} toneBg={C.parchment}>案例票 · 甲捡到乙的羊</Chip>
        </div>
        <Enter delay={90} from="up" marker="consumable-trap" style={{position: 'absolute', left: 40, top: 576, width: 1696, height: 92}}>
          <div style={{height: '100%', backgroundColor: C.parchment, border: `3px solid ${C.crimson}`, display: 'flex', alignItems: 'center', gap: 16, padding: '0 22px'}}>
            <Coins size={34} color={C.crimson} strokeWidth={2.4} />
            <span style={{fontSize: 24, fontWeight: 950, color: C.ink, flexShrink: 0}}>消耗物陷阱</span>
            <span style={{fontSize: 23, fontWeight: 900, color: C.ink, lineHeight: 1.45}}>金钱 · 汽油＝<Soft color={C.crimson}>占有即所有</Soft> → 请求给付消耗物一律是<Seal delay={150} size={20}>债权请求权</Seal></span>
            <span style={{marginLeft: 'auto', fontSize: 22, fontWeight: 850, color: C.inkSoft, flexShrink: 0}}>例：捡到100元钞票 → 归捡到者</span>
          </div>
        </Enter>
        <Enter delay={140} from="up" style={{position: 'absolute', left: 40, top: 688, width: 1696, height: 80}}>
          <div style={{height: '100%', backgroundColor: C.navyMid, border: `2px solid ${C.brass}`, display: 'flex', alignItems: 'center', gap: 18, padding: '0 26px'}}>
            <span style={{padding: '4px 13px', backgroundColor: C.brass, color: C.navy, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>车道口诀</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.parchment}}>
              债权＝要<Soft color={C.brassPale}>你的</Soft> · 物权＝要<Soft color={C.brassPale}>我的</Soft> · 占有＝要我<Soft color={C.brassPale}>占有的</Soft>
            </span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};
