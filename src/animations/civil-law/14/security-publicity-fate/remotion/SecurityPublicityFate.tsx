import type {CSSProperties, ReactNode} from 'react';
import {Ban, Clock, FileText, Hammer, Hand, Home, Landmark, Lock, Package, Timer} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const C = {
  walnut: '#4A3526',
  walnutMid: '#5C4330',
  walnutDeep: '#2E2015',
  cream: '#F3E9D2',
  creamDim: '#E9DCC0',
  creamEdge: '#C7B184',
  brass: '#B08A3E',
  brassPale: '#E5CFA0',
  cinnabar: '#B3372C',
  cinnabarPale: '#F0D6CD',
  celadon: '#4E8377',
  celadonPale: '#D8E5DC',
  indigo: '#3B4A6B',
  indigoPale: '#D6DEEC',
  ink: '#2E2A24',
  inkSoft: '#6E6350',
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
      backgroundColor: C.walnutDeep,
      color: C.cream,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(0deg, transparent 0 116px, rgba(0, 0, 0, 0.16) 116px 120px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.brass}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.brassPale}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.walnutMid, borderLeft: `8px solid ${C.brass}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.cream, letterSpacing: 2}}>第14讲 担保物权 · {code}</span>
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
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.cream}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.brassPale, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Plate = ({children, tone = C.brass}: {readonly children: ReactNode; readonly tone?: string}) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '5px 14px',
      backgroundColor: tone,
      border: `2px solid ${C.walnutDeep}`,
      boxShadow: `0 2px 0 ${C.walnutDeep}`,
      color: C.cream,
      fontSize: 22,
      fontWeight: 900,
      letterSpacing: 2,
    }}
  >
    {children}
  </span>
);

const Ticket = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '5px 12px',
      backgroundColor: C.cream,
      border: `2px dashed ${C.creamEdge}`,
      color: C.ink,
      fontSize: 22,
      fontWeight: 900,
      ...style,
    }}
  >
    {children}
  </span>
);

const Stamp = ({children, delay = 0, size = 24, tone = C.cinnabar}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

const Under = ({children, color = C.cinnabar, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

const FlowArrow = ({delay = 0}: {readonly delay?: number}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span style={{display: 'inline-flex', alignItems: 'center', opacity: p}}>
      <span style={{width: 34, height: 3, backgroundColor: C.brass}} />
      <span style={{borderLeft: `10px solid ${C.brass}`, borderTop: '6px solid transparent', borderBottom: '6px solid transparent'}} />
    </span>
  );
};

export const CreationPublicityGateScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="real-property-mortgage-window" data-final-knowledge="chattel-mortgage-window" data-final-knowledge="pledge-window" data-final-knowledge="lien-window"
     data-stateful-source="mortgage-ticket" data-stateful-terminal="mortgage-ticket" data-stateful-source="chattel-ticket" data-stateful-terminal="chattel-ticket"
     data-stateful-source="pledge-goods" data-stateful-terminal="pledge-goods" data-stateful-source="lien-goods" data-stateful-terminal="lien-goods" */
  const ticketDrop = [90, 100, 110, 120];
  const windows = [
    {
      icon: <Landmark size={38} color={C.indigo} strokeWidth={2.3} />,
      plate: '窗口 01 · 不动产抵押权',
      rule: (
        <span style={{fontSize: 25, fontWeight: 900, color: C.ink}}>
          <Under delay={110} color={C.cinnabar}>登记</Under> ＝ 生效要件
        </span>
      ),
      flow: ['抵押合同', '办理登记', '抵押权设立'],
      requirements: [],
      exception: null,
      stamp: <Stamp delay={150} size={22}>不登记 · 不设立</Stamp>,
      note: '未登记：债权人仅是普通债权人',
      ticket: '抵押票据',
    },
    {
      icon: <FileText size={38} color={C.indigo} strokeWidth={2.3} />,
      plate: '窗口 02 · 动产抵押权',
      rule: (
        <span style={{fontSize: 25, fontWeight: 900, color: C.ink}}>
          合同生效 · <Under delay={130} color={C.indigo}>登记对抗</Under>
        </span>
      ),
      flow: ['抵押合同生效', '即设立', '登记：对抗第三人'],
      requirements: [],
      exception: null,
      stamp: <Stamp delay={170} size={22} tone={C.indigo}>未登记不得对抗善意第三人</Stamp>,
      note: '登记不是生效要件，是对抗要件',
      ticket: '动产抵押票据',
    },
    {
      icon: <Package size={38} color={C.celadon} strokeWidth={2.3} />,
      plate: '窗口 03 · 质权',
      rule: (
        <span style={{fontSize: 25, fontWeight: 900, color: C.ink}}>
          <Under delay={150} color={C.celadon}>交付</Under> 生效 · 移转占有
        </span>
      ),
      flow: ['质押合同', '移交占有', '质权设立'],
      requirements: [],
      exception: null,
      stamp: null,
      note: '质权人占有质物期间的孳息，先充抵收取费用',
      ticket: '质押物',
    },
    {
      icon: <Hand size={38} color={C.cinnabar} strokeWidth={2.3} />,
      plate: '窗口 04 · 留置权',
      rule: (
        <span style={{fontSize: 25, fontWeight: 900, color: C.ink}}>
          <Under delay={170} color={C.cinnabar}>法定</Under> 担保物权 · 无需约定
        </span>
      ),
      flow: [],
      requirements: ['① 合法占有债权人的动产', '② 债权与动产属同一法律关系', '③ 债务已届期未履行'],
      exception: '企业间留置不受②限制',
      stamp: <Stamp delay={210} size={22}>当然成立</Stamp>,
      note: '三项条件并列，须同时满足',
      ticket: '留置物',
    },
  ] as const;
  return (
    <Shell code="01" kicker="设立公示" title="设立四窗：公示方法定设立">
      <div
        data-layout="four-window-publicity-counter"
        data-visual-anchor="boundary"
        data-text-treatments="label-block,stamp,thin-underline,external-negation"
        data-visual-grammar="real-property-mortgage-stays-a-ordinary-claim-until-registration-creates-the-right,chattel-mortgage-arises-on-contract-and-only-registration-makes-it-opposable,pledge-arises-on-delivery-and-retention-of-possession-never-creates-it,lien-arises-by-law-from-lawful-possession-same-cause-and-default-alone"
        data-focal-rule="publicity-gates-each-security-right-between-creation-and-opposability"
        data-focal-channels="enclosure,connector,locator,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" style={{position: 'absolute', left: 268, top: 0, width: 1240}}>
          <div style={{backgroundColor: C.cream, border: `3px solid ${C.creamEdge}`, padding: '10px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 33, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              四类担保物权，四道<Under delay={34} color={C.cinnabar}>公示闸门</Under>
            </span>
          </div>
        </Enter>
        <Enter delay={20} from="none" style={{position: 'absolute', left: 0, top: 78, width: 1776, height: 50}}>
          <div style={{height: '100%', backgroundColor: C.walnutMid, border: `2px solid ${C.walnutDeep}`, boxShadow: '0 4px 0 rgba(0, 0, 0, 0.35)'}} />
        </Enter>
        <div data-stateful-source="mortgage-ticket" style={{position: 'absolute', left: 150, top: 88, opacity: 1 - prog(frame, ticketDrop[0], 16)}}>
          <Ticket>抵押票据</Ticket>
        </div>
        <div data-stateful-source="chattel-ticket" style={{position: 'absolute', left: 560, top: 88, opacity: 1 - prog(frame, ticketDrop[1], 16)}}>
          <Ticket>动产抵押票据</Ticket>
        </div>
        <div data-stateful-source="pledge-goods" style={{position: 'absolute', left: 1040, top: 88, opacity: 1 - prog(frame, ticketDrop[2], 16)}}>
          <Ticket>质押物</Ticket>
        </div>
        <div data-stateful-source="lien-goods" style={{position: 'absolute', left: 1480, top: 88, opacity: 1 - prog(frame, ticketDrop[3], 16)}}>
          <Ticket>留置物</Ticket>
        </div>
        {windows.map((win, index) => (
          <Enter
            key={win.plate}
            delay={26 + index * 14}
            from="up"
            marker={['real-property-mortgage-window', 'chattel-mortgage-window', 'pledge-window', 'lien-window'][index]}
            style={{position: 'absolute', left: 40 + index * 466, top: 148, width: 442, height: 512}}
          >
            <div style={{height: '100%', backgroundColor: C.cream, border: `3px solid ${C.creamEdge}`, display: 'flex', flexDirection: 'column', gap: 12, padding: '46px 18px 14px', position: 'relative'}}>
              <div style={{position: 'absolute', left: 12, right: 12, top: -18, display: 'flex', justifyContent: 'center'}}>
                <Plate tone={index === 2 ? C.celadon : index === 3 ? C.cinnabar : C.indigo}>{win.plate}</Plate>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>{win.icon}{win.rule}</div>
              <div style={{display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap'}}>
                {win.flow.map((step, stepIndex) => (
                  <span key={step} style={{display: 'inline-flex', alignItems: 'center', gap: 6}}>
                    {stepIndex > 0 ? <FlowArrow delay={70 + index * 12} /> : null}
                    <span style={{border: `2px solid ${C.creamEdge}`, backgroundColor: C.creamDim, padding: '4px 10px', fontSize: 22, fontWeight: 900, color: C.ink}}>{step}</span>
                  </span>
                ))}
              </div>
              {win.requirements.length > 0 ? (
                <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                  {win.requirements.map((req, reqIndex) => (
                    <div key={req} style={{border: `2px solid ${C.creamEdge}`, backgroundColor: C.creamDim, padding: '6px 12px', fontSize: 23, fontWeight: 900, color: C.ink, opacity: prog(frame, 90 + reqIndex * 12, 14), translate: `-${24 * (1 - prog(frame, 90 + reqIndex * 12, 14))}px 0px`}}>
                      {req}
                    </div>
                  ))}
                  <div style={{border: `2px dashed ${C.cinnabar}`, backgroundColor: C.cinnabarPale, padding: '6px 12px', fontSize: 22, fontWeight: 950, color: C.cinnabar, opacity: prog(frame, 130, 14)}}>
                    除外：{win.exception}
                  </div>
                </div>
              ) : null}
              {win.stamp ? <div style={{display: 'flex'}}>{win.stamp}</div> : null}
              {index === 2 ? (
                <div style={{display: 'flex', alignItems: 'center', gap: 8, border: `2px solid ${C.cinnabar}`, backgroundColor: C.cinnabarPale, padding: '6px 10px'}}>
                  <Ban size={26} color={C.cinnabar} strokeWidth={2.6} />
                  <span style={{fontSize: 22, fontWeight: 950, color: C.cinnabar}}>占有改定 不创设质权</span>
                </div>
              ) : null}
              <div style={{marginTop: 'auto', border: `2px solid ${C.creamEdge}`, backgroundColor: C.creamDim, padding: '8px 12px', fontSize: 22, fontWeight: 850, color: C.inkSoft, lineHeight: 1.45}}>
                {win.note}
              </div>
              <div
                data-stateful-terminal={['mortgage-ticket', 'chattel-ticket', 'pledge-goods', 'lien-goods'][index]}
                style={{display: 'flex', justifyContent: index === 2 ? 'flex-start' : 'center', opacity: prog(frame, (ticketDrop[index] ?? 90) + 8, 12)}}
              >
                {index === 2 ? (
                  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${C.celadon}`, backgroundColor: C.celadonPale, padding: '5px 12px', fontSize: 22, fontWeight: 900, color: C.ink}}>
                    <Package size={24} color={C.celadon} strokeWidth={2.4} /> 质物入匣 · 由质权人占有
                  </span>
                ) : index === 3 ? (
                  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${C.cinnabar}`, backgroundColor: C.cinnabarPale, padding: '5px 12px', fontSize: 22, fontWeight: 900, color: C.ink}}>
                    <Hand size={24} color={C.cinnabar} strokeWidth={2.4} /> 债权人手中 · 依法扣留
                  </span>
                ) : (
                  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${C.brass}`, backgroundColor: C.brassPale, padding: '5px 12px', fontSize: 22, fontWeight: 900, color: C.ink}}>
                    <Landmark size={24} color={C.indigo} strokeWidth={2.4} /> 票据落柜 · 公示完毕
                  </span>
                )}
              </div>
            </div>
          </Enter>
        ))}
        <Enter delay={240} from="up" style={{position: 'absolute', left: 40, top: 680, width: 1696}}>
          <div style={{backgroundColor: C.walnutMid, border: `2px solid ${C.brass}`, display: 'flex', alignItems: 'center', gap: 18, padding: '13px 26px'}}>
            <span style={{padding: '4px 13px', backgroundColor: C.brass, color: C.walnutDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>设立口诀</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.cream}}>
              不动产抵押<Soft color={C.brassPale}>登记设立</Soft> · 动产抵押<Soft color={C.brassPale}>登记对抗</Soft> · 质权<Soft color={C.brassPale}>交付生效</Soft> · 留置权<Soft color={C.brassPale}>法定当然</Soft>
            </span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const LimitationFateSplitScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="registration-lane-outcome" data-final-knowledge="possession-lane-outcome" data-final-knowledge="retention-defence" data-final-knowledge="realisation-bar" data-final-knowledge="deadlock-badge"
     data-stateful-source="registration-security-token" data-stateful-terminal="registration-security-token"
     data-stateful-source="possession-security-token" data-stateful-terminal="possession-security-token" */
  const tokenSlide = prog(frame, 92, 40);
  const registrationX = interpolate(tokenSlide, [0, 1], [700, 250]);
  const possessionX = interpolate(tokenSlide, [0, 1], [1020, 1360]);
  const tokenY = interpolate(tokenSlide, [0, 0.55], [96, 210]);
  return (
    <Shell code="02" kicker="时效双轨" title="主债时效届满：公示定命运">
      <div
        data-layout="twin-fate-lane-split-bench"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,stamp,soft-highlight,external-negation"
        data-visual-grammar="registration-publicity-security-rights-extinguish-when-limitation-expires,possession-publicity-security-rights-survive-when-limitation-expires,a-surviving-possessory-right-keeps-retention-but-loses-realisation,the-publicity-method-alone-decides-which-of-the-two-fates-applies"
        data-focal-rule="the-publicity-method-alone-decides-which-of-the-two-fates-applies"
        data-focal-channels="contrast,enclosure,annotation,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" style={{position: 'absolute', left: 358, top: 0, width: 1060, height: 76}}>
          <div style={{height: '100%', backgroundColor: C.walnutMid, border: `2px solid ${C.brass}`, display: 'flex', alignItems: 'center', gap: 16, padding: '0 24px'}}>
            <Timer size={40} color={C.brassPale} strokeWidth={2.3} />
            <span style={{fontSize: 30, fontWeight: 950, color: C.cream, fontFamily: 'var(--inkloom-animation-title)'}}>
              主债权 <Under delay={40} color={C.brassPale}>诉讼时效 · 执行时效</Under> 届满
            </span>
            <span style={{fontSize: 23, fontWeight: 900, color: C.brassPale, marginLeft: 'auto'}}>担保物权的命运，按公示方法分流</span>
          </div>
        </Enter>
        <Enter delay={24} from="none" style={{position: 'absolute', left: 884, top: 76, width: 4, height: 26}}>
          <div style={{width: '100%', height: '100%', backgroundColor: C.brass}} />
        </Enter>
        <Enter delay={28} from="none" style={{position: 'absolute', left: 455, top: 102, width: 866, height: 4}}>
          <div style={{width: '100%', height: '100%', backgroundColor: C.brass}} />
        </Enter>
        <Enter delay={32} from="none" style={{position: 'absolute', left: 455, top: 106, width: 4, height: 26}}>
          <div style={{width: '100%', height: '100%', backgroundColor: C.brass}} />
        </Enter>
        <Enter delay={32} from="none" style={{position: 'absolute', left: 1319, top: 106, width: 4, height: 26}}>
          <div style={{width: '100%', height: '100%', backgroundColor: C.brass}} />
        </Enter>
        <div data-stateful-source="registration-security-token" style={{position: 'absolute', left: registrationX, top: tokenY, opacity: tokenSlide >= 1 ? 0 : 1, display: tokenSlide >= 1 ? 'none' : 'inline-flex'}}>
          <Ticket><Landmark size={22} color={C.indigo} strokeWidth={2.5} /> 登记权利</Ticket>
        </div>
        <div data-stateful-source="possession-security-token" style={{position: 'absolute', left: possessionX, top: tokenY, opacity: tokenSlide >= 1 ? 0 : 1, display: tokenSlide >= 1 ? 'none' : 'inline-flex'}}>
          <Ticket><Package size={22} color={C.celadon} strokeWidth={2.5} /> 占有权利</Ticket>
        </div>
        <Enter delay={40} from="up" marker="registration-lane-outcome" style={{position: 'absolute', left: 40, top: 136, width: 830, height: 556}}>
          <div style={{height: '100%', backgroundColor: C.indigoPale, border: `3px solid ${C.indigo}`, display: 'flex', flexDirection: 'column', gap: 14, padding: '18px 24px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Landmark size={42} color={C.indigo} strokeWidth={2.3} />
              <Plate tone={C.indigo}>登记公示</Plate>
              <span style={{fontSize: 23, fontWeight: 900, color: C.inkSoft}}>权利写在登记簿上</span>
            </div>
            <div style={{display: 'flex', gap: 10, flexWrap: 'wrap'}}>
              <span style={{border: `2px solid ${C.indigo}`, backgroundColor: C.cream, padding: '4px 12px', fontSize: 22, fontWeight: 900, color: C.ink}}>不动产抵押权</span>
              <span style={{border: `2px solid ${C.indigo}`, backgroundColor: C.cream, padding: '4px 12px', fontSize: 22, fontWeight: 900, color: C.ink}}>已登记的动产抵押权</span>
              <span style={{border: `2px solid ${C.indigo}`, backgroundColor: C.cream, padding: '4px 12px', fontSize: 22, fontWeight: 900, color: C.ink}}>股权 · 知识产权 · 应收账款质权（登记）</span>
            </div>
            <div style={{marginTop: 8, border: `3px solid ${C.cinnabar}`, backgroundColor: C.cream, padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 12, flex: 1}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 18}}>
                <Stamp delay={140} size={34}>消灭</Stamp>
                <span style={{fontSize: 26, fontWeight: 950, color: C.ink, lineHeight: 1.4}}>
                  担保物权<Soft color={C.cinnabar}>随主债权时效届满</Soft>而消灭
                </span>
              </div>
              <div style={{border: `2px solid ${C.creamEdge}`, backgroundColor: C.creamDim, padding: '10px 14px', fontSize: 23, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
                抵押权人未在主债权诉讼时效内行使 · 或胜诉后未在执行时效内申请执行 → 抵押权消灭
              </div>
              <div style={{border: `2px solid ${C.indigo}`, backgroundColor: C.indigoPale, padding: '8px 14px', fontSize: 22, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
                对比主债时效：主债权届满＝<Soft color={C.indigo}>抗辩权</Soft> · 抵押权届满＝<Soft color={C.cinnabar}>权利本体消灭</Soft>
              </div>
              <div style={{marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 12}}>
                <span data-stateful-terminal="registration-security-token" style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${C.indigo}`, backgroundColor: C.indigoPale, padding: '5px 12px', fontSize: 22, fontWeight: 900, color: C.ink}}>
                  <Landmark size={24} color={C.indigo} strokeWidth={2.4} /> 登记权利 · 随簿注销
                </span>
                <span style={{fontSize: 23, fontWeight: 900, color: C.inkSoft}}>债务人可请求注销抵押登记</span>
              </div>
            </div>
          </div>
        </Enter>
        <Enter delay={56} from="up" marker="possession-lane-outcome" style={{position: 'absolute', left: 906, top: 136, width: 830, height: 556}}>
          <div style={{height: '100%', backgroundColor: C.celadonPale, border: `3px solid ${C.celadon}`, display: 'flex', flexDirection: 'column', gap: 12, padding: '18px 24px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Package size={42} color={C.celadon} strokeWidth={2.3} />
              <Plate tone={C.celadon}>占有公示</Plate>
              <span style={{fontSize: 23, fontWeight: 900, color: C.inkSoft}}>权利落在占有人手中</span>
              <span style={{marginLeft: 'auto', border: `3px solid ${C.celadon}`, backgroundColor: C.celadon, color: C.cream, padding: '6px 16px', fontSize: 26, fontWeight: 950, letterSpacing: 2}}>不消灭</span>
            </div>
            <div style={{display: 'flex', gap: 10, flexWrap: 'wrap'}}>
              <span style={{border: `2px solid ${C.celadon}`, backgroundColor: C.cream, padding: '4px 12px', fontSize: 22, fontWeight: 900, color: C.ink}}>动产质权</span>
              <span style={{border: `2px solid ${C.celadon}`, backgroundColor: C.cream, padding: '4px 12px', fontSize: 22, fontWeight: 900, color: C.ink}}>有价证券质权</span>
              <span style={{border: `2px solid ${C.celadon}`, backgroundColor: C.cream, padding: '4px 12px', fontSize: 22, fontWeight: 900, color: C.ink}}>留置权</span>
            </div>
            <div data-final-knowledge="retention-defence" style={{display: 'flex', alignItems: 'center', gap: 12, border: `2px solid ${C.celadon}`, backgroundColor: C.cream, padding: '10px 16px'}}>
              <Lock size={30} color={C.celadon} strokeWidth={2.4} />
              <span style={{fontSize: 24, fontWeight: 950, color: C.ink}}>
                防御权利仍在：<Soft color={C.celadon}>有权占有</Soft> · <Soft color={C.celadon}>拒绝返还</Soft>
              </span>
            </div>
            <div data-final-knowledge="realisation-bar" style={{display: 'flex', alignItems: 'center', gap: 12, border: `2px solid ${C.cinnabar}`, backgroundColor: C.cinnabarPale, padding: '10px 16px'}}>
              <Ban size={30} color={C.cinnabar} strokeWidth={2.4} />
              <span style={{fontSize: 24, fontWeight: 950, color: C.ink}}>
                处分权利丧失：<Soft color={C.cinnabar}>不得拍卖变卖</Soft> · 无权优先受偿
              </span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <span data-stateful-terminal="possession-security-token" style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${C.celadon}`, backgroundColor: C.cream, padding: '4px 12px', fontSize: 22, fontWeight: 900, color: C.ink}}>
                <Package size={24} color={C.celadon} strokeWidth={2.4} /> 占有权利 · 仍在手中
              </span>
              <span style={{fontSize: 22, fontWeight: 880, color: C.inkSoft}}>权利本体未消灭，只是不能再变价</span>
            </div>
            <div data-final-knowledge="deadlock-badge" style={{marginTop: 'auto', border: `3px solid ${C.cinnabar}`, backgroundColor: C.walnutDeep, padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 16}}>
              <Stamp delay={260} size={30} tone={C.brassPale}>死局</Stamp>
              <span style={{fontSize: 24, fontWeight: 950, color: C.cream, lineHeight: 1.45}}>
                债权人<Soft color={C.cinnabarPale}>变不了现</Soft> · 债务人<Soft color={C.cinnabarPale}>要不回</Soft>——东西只能压在手里
              </span>
            </div>
          </div>
        </Enter>
        <Enter delay={320} from="up" style={{position: 'absolute', left: 40, top: 708, width: 1696, height: 56}}>
          <div style={{height: '100%', backgroundColor: C.walnutMid, border: `2px solid ${C.brass}`, display: 'flex', alignItems: 'center', gap: 18, padding: '0 26px'}}>
            <span style={{padding: '4px 13px', backgroundColor: C.brass, color: C.walnutDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>考点口径</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.cream}}>
              登记＝<Soft color={C.cinnabarPale}>消灭</Soft> · 占有＝<Soft color={C.celadonPale}>不消灭但不得变价</Soft>——执行时效届满，一体套用
            </span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

const rankBadge = (rank: string, tone = C.brass) => (
  <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 56, height: 56, backgroundColor: tone, border: `3px solid ${C.walnutDeep}`, color: C.cream, fontSize: 28, fontWeight: 950, fontFamily: 'var(--inkloom-animation-mono)'}}>{rank}</span>
);

export const PriorityLadderGateScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="lien-rank" data-final-knowledge="publicity-rank" data-final-knowledge="unpossessed-pledge-rank" data-final-knowledge="unregistered-mortgage-rank" data-final-knowledge="purchase-money-bypass" data-final-knowledge="immovable-ladder" data-final-knowledge="mortgage-variation-limit"
     data-stateful-source="distribution-proceeds" data-stateful-terminal="distribution-proceeds" */
  const coinTravel = prog(frame, 130, 70);
  const coinY = interpolate(coinTravel, [0, 1], [132, 536]);
  return (
    <Shell code="03" kicker="竞存阶梯" title="竞存顺位：动产与不动产双阶梯">
      <div
        data-layout="twin-priority-ladder-with-bypass-banner"
        data-visual-anchor="timeline-gate"
        data-text-treatments="label-block,soft-highlight,stamp,thin-underline"
        data-visual-grammar="lien-takes-the-first-rank-above-every-consensual-security-right,registered-mortgage-and-directly-possessed-pledge-share-rank-by-earlier-publicity,an-unpossessed-pledge-still-outranks-an-unregistered-mortgage,purchase-money-security-registered-within-ten-days-jumps-ahead-except-against-lien,immovable-ranking-puts-buyer-refund-then-construction-priority-then-mortgage"
        data-focal-rule="lien-first-then-earlier-publicity-then-possessory-fallback"
        data-focal-channels="spatial,connector,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" style={{position: 'absolute', left: 40, top: 0, width: 816, height: 48}}>
          <div style={{height: '100%', backgroundColor: C.walnutMid, border: `2px solid ${C.brass}`, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12}}>
            <Hand size={28} color={C.brassPale} strokeWidth={2.4} />
            <span style={{fontSize: 25, fontWeight: 950, color: C.cream}}>动产：担保物权竞存顺位</span>
            <span style={{fontSize: 22, fontWeight: 880, color: C.brassPale}}>· 变价款按顺位自上而下分配</span>
          </div>
        </Enter>
        <Enter delay={10} from="down" style={{position: 'absolute', left: 900, top: 0, width: 836, height: 48}}>
          <div style={{height: '100%', backgroundColor: C.walnutMid, border: `2px solid ${C.brass}`, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12}}>
            <Home size={28} color={C.brassPale} strokeWidth={2.4} />
            <span style={{fontSize: 25, fontWeight: 950, color: C.cream}}>不动产：优先受偿权竞存顺位</span>
          </div>
        </Enter>
        <Enter delay={30} from="none" style={{position: 'absolute', left: 40, top: 64, width: 52, height: 548}}>
          <div style={{height: '100%', backgroundColor: C.walnutMid, border: `2px solid ${C.walnutDeep}`, boxShadow: 'inset 0 0 0 2px rgba(0,0,0,0.2)'}} />
        </Enter>
        <div data-stateful-source="distribution-proceeds" style={{position: 'absolute', left: 48, top: coinY, opacity: coinTravel >= 1 ? 0 : 1, display: coinTravel >= 1 ? 'none' : 'inline-flex'}}>
          <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: 18, backgroundColor: C.brass, border: `2px solid ${C.walnutDeep}`, color: C.cream, fontSize: 18, fontWeight: 950}}>价</span>
        </div>
        <div data-stateful-terminal="distribution-proceeds" style={{position: 'absolute', left: 44, top: 536, opacity: prog(frame, 200, 14)}}>
          <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: 18, backgroundColor: C.brass, border: `2px solid ${C.walnutDeep}`, color: C.cream, fontSize: 18, fontWeight: 950}}>价</span>
        </div>
        <Enter delay={20} from="left" marker="lien-rank" style={{position: 'absolute', left: 104, top: 64, width: 752, height: 116}}>
          <div style={{height: '100%', backgroundColor: C.cream, border: `3px solid ${C.cinnabar}`, display: 'flex', alignItems: 'center', gap: 16, padding: '0 20px'}}>
            {rankBadge('01', C.cinnabar)}
            <Hand size={40} color={C.cinnabar} strokeWidth={2.4} />
            <span style={{fontSize: 30, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)', width: 130}}>留置权</span>
            <span style={{border: `3px solid ${C.cinnabar}`, backgroundColor: C.cinnabarPale, padding: '5px 14px', fontSize: 23, fontWeight: 950, color: C.cinnabar, flexShrink: 0, whiteSpace: 'nowrap'}}>绝对优先</span>
            <span style={{fontSize: 22, fontWeight: 880, color: C.inkSoft, marginLeft: 'auto', flexShrink: 0, whiteSpace: 'nowrap'}}>法定担保，压倒一切意定担保</span>
          </div>
        </Enter>
        <Enter delay={44} from="left" marker="publicity-rank" style={{position: 'absolute', left: 104, top: 196, width: 752, height: 116}}>
          <div style={{height: '100%', backgroundColor: C.cream, border: `3px solid ${C.indigo}`, display: 'flex', alignItems: 'center', gap: 14, padding: '0 20px'}}>
            {rankBadge('02', C.indigo)}
            <Landmark size={36} color={C.indigo} strokeWidth={2.4} />
            <Package size={36} color={C.indigo} strokeWidth={2.4} />
            <span style={{fontSize: 26, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              已登记抵押权 <Under delay={120} color={C.indigo}>＝</Under> 直接占有质权
            </span>
            <span style={{fontSize: 22, fontWeight: 880, color: C.inkSoft, marginLeft: 'auto'}}>先公示者优先</span>
          </div>
        </Enter>
        <Enter delay={70} from="right" marker="purchase-money-bypass" style={{position: 'absolute', left: 104, top: 328, width: 752, height: 104}}>
          <div style={{height: '100%', border: `3px dashed ${C.brass}`, backgroundColor: `${C.brass}22`, display: 'flex', alignItems: 'center', gap: 16, padding: '0 20px'}}>
            <Clock size={38} color={C.brass} strokeWidth={2.4} />
            <div style={{display: 'flex', flexDirection: 'column', gap: 4, flex: 1, minWidth: 0}}>
              <span style={{fontSize: 24, fontWeight: 950, color: C.ink, whiteSpace: 'nowrap'}}>
                <Soft color={C.brass}>交付后 10日内 登记</Soft> → 插队到最前
              </span>
              <span style={{fontSize: 22, fontWeight: 900, color: C.inkSoft, whiteSpace: 'nowrap'}}>价款抵押权 · 担保购买价金——先卖后押</span>
            </div>
            <span style={{flexShrink: 0}}>
              <Stamp delay={110} size={22}>留置权除外</Stamp>
            </span>
          </div>
        </Enter>
        <Enter delay={96} from="left" style={{position: 'absolute', left: 104, top: 448, width: 752, height: 116}}>
          <div style={{height: '100%', backgroundColor: C.creamDim, border: `3px solid ${C.creamEdge}`, display: 'flex', alignItems: 'center', gap: 14, padding: '0 20px'}}>
            {rankBadge('03', C.walnutMid)}
            <div data-final-knowledge="unpossessed-pledge-rank" style={{border: `2px solid ${C.celadon}`, backgroundColor: C.cream, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0, whiteSpace: 'nowrap'}}>
              <Package size={32} color={C.celadon} strokeWidth={2.4} />
              <span style={{fontSize: 23, fontWeight: 950, color: C.ink}}>未直接占有质权</span>
              <span style={{fontSize: 24, fontWeight: 950, color: C.cinnabar}}>优先于 →</span>
            </div>
            <div data-final-knowledge="unregistered-mortgage-rank" style={{border: `2px solid ${C.inkSoft}`, backgroundColor: C.cream, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0, whiteSpace: 'nowrap'}}>
              <Landmark size={32} color={C.inkSoft} strokeWidth={2.4} />
              <span style={{fontSize: 23, fontWeight: 950, color: C.ink}}>未登记抵押权</span>
            </div>
            <span style={{fontSize: 22, fontWeight: 880, color: C.inkSoft, marginLeft: 'auto', flexShrink: 0, whiteSpace: 'nowrap'}}>好歹有占有</span>
          </div>
        </Enter>
        <Enter delay={40} from="right" marker="immovable-ladder" style={{position: 'absolute', left: 900, top: 64, width: 836, height: 500}}>
          <div style={{height: '100%', backgroundColor: C.indigoPale, border: `3px solid ${C.indigo}`, display: 'flex', flexDirection: 'column', gap: 14, padding: '16px 20px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14, border: `3px solid ${C.cinnabar}`, backgroundColor: C.cream, flex: 1, padding: '0 18px'}}>
              {rankBadge('01', C.cinnabar)}
              <Home size={38} color={C.cinnabar} strokeWidth={2.4} />
              <div style={{display: 'flex', flexDirection: 'column', gap: 2}}>
                <span style={{fontSize: 25, fontWeight: 950, color: C.ink}}>购房人价款返还请求权</span>
                <span style={{fontSize: 22, fontWeight: 880, color: C.inkSoft}}>不能获得房屋的购房人</span>
              </div>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 14, border: `3px solid ${C.brass}`, backgroundColor: C.cream, flex: 1, padding: '0 18px'}}>
              {rankBadge('02', C.brass)}
              <Hammer size={38} color={C.brass} strokeWidth={2.4} />
              <div style={{display: 'flex', flexDirection: 'column', gap: 2}}>
                <span style={{fontSize: 25, fontWeight: 950, color: C.ink}}>建设工程优先权</span>
                <span style={{fontSize: 22, fontWeight: 880, color: C.inkSoft}}>仅限实际支出范围内</span>
              </div>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 14, border: `3px solid ${C.indigo}`, backgroundColor: C.cream, flex: 1, padding: '0 18px'}}>
              {rankBadge('03', C.indigo)}
              <Landmark size={38} color={C.indigo} strokeWidth={2.4} />
              <span style={{fontSize: 25, fontWeight: 950, color: C.ink}}>不动产抵押权</span>
            </div>
          </div>
        </Enter>
        <Enter delay={140} from="up" marker="mortgage-variation-limit" style={{position: 'absolute', left: 40, top: 636, width: 1696, height: 108}}>
          <div style={{height: '100%', backgroundColor: C.walnutMid, border: `2px solid ${C.brass}`, display: 'flex', alignItems: 'center', gap: 18, padding: '0 26px'}}>
            <span style={{padding: '4px 13px', backgroundColor: C.brass, color: C.walnutDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>抵押权变更</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.cream}}>
              一物多押的部分变更：未经其他抵押权人<Under delay={190} color={C.brassPale}>书面同意</Under> → 不得对其产生不利影响
            </span>
            <span style={{marginLeft: 'auto'}}>
              <Stamp delay={210} size={23} tone={C.brassPale}>变更部分往后放</Stamp>
            </span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const SecurityPublicityFate = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-creation-publicity-gate" {...SCENES['creation-publicity-gate']}>
      <CreationPublicityGateScene />
    </TimelineSequence>
    <TimelineSequence name="02-limitation-fate-split" {...SCENES['limitation-fate-split']}>
      <LimitationFateSplitScene />
    </TimelineSequence>
    <TimelineSequence name="03-priority-ladder-gate" {...SCENES['priority-ladder-gate']}>
      <PriorityLadderGateScene />
    </TimelineSequence>
  </AbsoluteFill>
);
