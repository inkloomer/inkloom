import type {CSSProperties, ReactNode} from 'react';
import {Clock, Coins, FileX, Gavel, Scale} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  remedies: '#2F3330',
  remediesDeep: '#242826',
  panel: '#F0EBDA',
  panelDim: '#E1DCC7',
  edge: '#5E7168',
  ink: '#22302A',
  inkSoft: '#516260',
  review: '#C0983E',
  cancel: '#B04834',
  remedy: '#4E7D74',
  paper: '#F6F1E0',
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
      backgroundColor: C.remedies,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `radial-gradient(1100px 460px at 50% -8%, rgba(192, 152, 62, 0.12), transparent 72%), repeating-linear-gradient(0deg, transparent 0 116px, rgba(36, 40, 38, 0.55) 116px 119px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.review}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.remediesDeep, borderLeft: `8px solid ${C.cancel}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 84 · {code}</span>
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
        borderBottom: `2px solid ${C.review}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.review, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone, watermark}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string; readonly watermark?: ReactNode}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.remedy}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.remedy}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.remedy}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.remedy}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

const RemedyTab = ({children, bar = C.cancel, icon}: {readonly children: ReactNode; readonly bar?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.remediesDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

const RemedyStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(36, 40, 38, 0.94)', border: `2px solid ${C.review}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Mark = ({children, color = C.cancel}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

const ClockSeal = ({children, tone = C.review, delay = 0}: {readonly children: ReactNode; readonly tone?: string; readonly delay?: number}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span style={{display: 'inline-block', padding: '4px 12px', border: `5px solid ${tone}`, color: tone, backgroundColor: `${tone}12`, fontSize: 22, fontWeight: 950, letterSpacing: 2, opacity: p, rotate: '-2deg'}}>{children}</span>
  );
};

const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.panelDim, borderLeft: `6px solid ${tone}`, padding: '8px 12px'}}>
    <span style={{flexShrink: 0, width: 50, height: 50, borderRadius: 10, backgroundColor: tone, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 0 rgba(0,0,0,0.18)'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.45}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const ReviewScene = () => {
  /* data-final-knowledge="review-branches" */
  const branches = [
    {title: '维持：', body: '内容合法·正确·办理程序无误的，作出维持公证书的处理决定', tone: C.remedy},
    {title: '更正重发：', body: '内容合法·正确，仅证词表述或格式不当 → 收回公证书更正后重新发给当事人；不能收回的另行出具补正公证书', tone: C.review},
    {title: '撤销：', body: '基本内容违法或与事实不符 → 作出撤销公证书的处理决定', tone: C.cancel},
    {title: '部分补正：', body: '部分内容违法或与事实不符 → 出具补正公证书·撤销该部分证明内容；或收回后删除·更正重新发给当事人', tone: C.review},
    {title: '补办程序：', body: '内容合法·正确但违反程序·缺乏必要手续 → 补办缺漏程序手续；无法补办或严重违反公证程序的应撤销公证书', tone: C.remedy},
  ] as const;
  return (
    <Shell code="01" kicker="公证书的复查" title="公证书的复查">
      <div
        data-layout="review-scale-branches"
        data-visual-anchor="main center"
        data-text-treatments="scale-rows,branch-chips"
        data-visual-grammar="limit-row,branch-rows"
        data-focal-rule="one-year-review-twenty-year-cap-five-outcomes"
        data-focal-channels="time-scale,five-branches"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="review-branches" style={{position: 'absolute', left: 0, top: 0, width: 1776}}>
          <Panel tone={C.review} watermark={<Clock size={170} color={C.review} strokeWidth={1.6} />} style={{height: 176, padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <RemedyTab bar={C.review} icon={<Clock size={26} color={C.paper} strokeWidth={2.2} />}>复查申请期限</RemedyTab>
            <div style={{fontSize: 23, fontWeight: 900, color: C.ink, lineHeight: 1.55}}>
              当事人·公证事项利害关系人认为公证书有错误的，可向<Mark color={C.review}>出具该公证书的公证机构</Mark>提出复查
              <br />
              一般自知或应当知道之日起 <ClockSeal tone={C.cancel} delay={140}>1 年内</ClockSeal> 提出；自公证书出具之日起最长不得超过 <ClockSeal tone={C.remedy} delay={154}>20 年</ClockSeal>
            </div>
          </Panel>
        </Enter>
        <Enter delay={60} from="left" style={{position: 'absolute', left: 0, top: 204, width: 1776}}>
          <Panel tone={C.remedy} watermark={<Scale size={190} color={C.remedy} strokeWidth={1.6} />} style={{height: 456, padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <RemedyTab bar={C.remedy} icon={<Scale size={26} color={C.paper} strokeWidth={2.2} />}>处理结果（五分支）</RemedyTab>
            {branches.map((branch, index) => (
              <IconChip key={branch.title} icon={branch.tone === C.cancel ? <FileX size={26} color={C.paper} strokeWidth={2.2} /> : <Scale size={26} color={C.paper} strokeWidth={2.2} />} tone={branch.tone} title={`${index + 1}. ${branch.title}`}>
                {branch.body}
              </IconChip>
            ))}
            <div style={{fontSize: 20, fontWeight: 860, color: C.inkSoft, lineHeight: 1.45}}>
              被撤销的公证书应当收回并<Mark color={C.cancel}>公告·自始无效</Mark>；撤销或出具补正公证书的应当<Mark color={C.remedy}>当日报地方公证协会备案</Mark>，并录入全国公证管理系统
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const RefundLitigationScene = () => {
  /* data-final-knowledge="refund-litigation" */
  const refunds = [
    {who: '公证机构的过错', result: '全部退还当事人', tone: C.remedy},
    {who: '当事人的过错', result: '不予退还', tone: C.cancel},
    {who: '双方过错', result: '酌情退还', tone: C.review},
  ] as const;
  return (
    <Shell code="02" kicker="费用返还 · 内容争议" title="费用返还与内容争议诉讼">
      <div
        data-layout="refund-tri-plus-litigation"
        data-visual-anchor="main center"
        data-text-treatments="refund-chips,litigation-rows"
        data-visual-grammar="refund-columns,litigation-panel"
        data-focal-rule="refund-by-fault-and-civil-litigation-for-content-disputes"
        data-focal-channels="refund-split,litigation-route"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="refund-litigation" style={{position: 'absolute', left: 138, top: 0, width: 1500}}>
          <Panel tone={C.remedy} watermark={<Coins size={180} color={C.remedy} strokeWidth={1.6} />} style={{height: 236, padding: '16px 26px', display: 'flex', flexDirection: 'column', gap: 14}}>
            <RemedyTab bar={C.remedy} icon={<Coins size={26} color={C.paper} strokeWidth={2.2} />}>公证书被撤销后的费用返还（按过错三分）</RemedyTab>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12}}>
              {refunds.map((item) => (
                <div key={item.who} style={{fontSize: 22, fontWeight: 900, color: C.ink, backgroundColor: C.panelDim, borderTop: `6px solid ${item.tone}`, padding: '12px 14px', textAlign: 'center'}}>
                  {item.who}
                  <br />
                  <span style={{color: item.tone}}>{item.result}</span>
                </div>
              ))}
            </div>
          </Panel>
        </Enter>
        <Enter delay={70} from="up" style={{position: 'absolute', left: 138, top: 264, width: 1500}}>
          <Panel tone={C.review} watermark={<Gavel size={190} color={C.review} strokeWidth={1.6} />} style={{height: 252, padding: '16px 26px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <RemedyTab bar={C.review} icon={<Gavel size={26} color={C.paper} strokeWidth={2.2} />}>公证书内容争议的诉讼</RemedyTab>
            <IconChip icon={<Gavel size={28} color={C.paper} strokeWidth={2.2} />} tone={C.review} title="民事诉讼：">
              当事人·公证事项利害关系人对公证书<Mark color={C.review}>内容有争议</Mark>的，可以就该争议向<Mark color={C.review}>人民法院提起民事诉讼</Mark>
            </IconChip>
            <IconChip icon={<FileX size={28} color={C.paper} strokeWidth={2.2} />} tone={C.cancel} title="强制执行债权文书：">
              法院认定该债权文书确有错误的，应当<Mark color={C.cancel}>裁定不予执行</Mark>，并将裁定书送达双方当事人和公证机构
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={130} from="up" style={{position: 'absolute', left: 0, top: 544, width: 1776}}>
          <RemedyStrip style={{height: 96}}>
            <Scale size={40} color={C.review} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.review, color: C.remediesDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>点睛</span>
            <span style={{fontSize: 24, fontWeight: 950, color: C.paper}}>
              复查期限「<Mark color={C.paper}>知道起 1 年</Mark>·出具起最长 <Mark color={C.paper}>20 年</Mark>」；费用按过错「机构全退 · 当事人不退 · 双方酌退」
            </span>
          </RemedyStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const NotaryRemedies = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-review" {...SCENES.review}>
      <ReviewScene />
    </TimelineSequence>
    <TimelineSequence name="02-refund-litigation" {...SCENES.refundLitigation}>
      <RefundLitigationScene />
    </TimelineSequence>
  </AbsoluteFill>
);
