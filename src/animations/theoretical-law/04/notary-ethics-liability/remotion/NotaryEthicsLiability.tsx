import type {CSSProperties, ReactNode} from 'react';
import {Ban, FileX, Gavel, Scale, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  ethics: '#2F3234',
  ethicsDeep: '#24272A',
  panel: '#F0EBDA',
  panelDim: '#E1DCC7',
  edge: '#5F6A6E',
  ink: '#232830',
  inkSoft: '#525C62',
  ethicsGold: '#C0983E',
  liability: '#B04834',
  missing: '#4E7D74',
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
      backgroundColor: C.ethics,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `radial-gradient(1100px 460px at 50% -8%, rgba(192, 152, 62, 0.12), transparent 72%), repeating-linear-gradient(0deg, transparent 0 120px, rgba(36, 39, 42, 0.55) 120px 123px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.ethicsGold}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.ethicsDeep, borderLeft: `8px solid ${C.liability}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 85 · {code}</span>
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
        borderBottom: `2px solid ${C.ethicsGold}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.ethicsGold, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone, watermark}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string; readonly watermark?: ReactNode}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.missing}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.missing}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.missing}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.missing}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

const HallTab = ({children, bar = C.liability, icon}: {readonly children: ReactNode; readonly bar?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.ethicsDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

const HallStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(36, 39, 42, 0.94)', border: `2px solid ${C.ethicsGold}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Mark = ({children, color = C.liability}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

const MissingSeal = ({children, tone = C.missing, delay = 0}: {readonly children: ReactNode; readonly tone?: string; readonly delay?: number}) => {
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

export const EthicsPenaltiesScene = () => {
  /* data-final-knowledge="ethics-penalties" */
  const mottos = ['忠于法律 · 尽职履职', '爱岗敬业 · 规范服务', '加强修养 · 提高素质', '廉洁自律 · 尊重同行'];
  const columns = [
    {name: '对公证员的纪律处分', tone: C.ethicsGold, items: ['训诫', '警告', '通报批评', '公开谴责', '中止会员权利', '取消会员资格']},
    {name: '对公证机构的行政处罚', tone: C.missing, items: ['警告', '罚款', '没收违法所得', '停业整顿'], note: '没有吊销执业证书'},
    {name: '对公证员的行政处罚', tone: C.liability, items: ['警告', '罚款', '停止执业', '没收违法所得', '吊销执业证书'], note: '同律师'},
  ] as const;
  return (
    <Shell code="01" kicker="职业道德 · 职业责任" title="职业道德与职业责任">
      <div
        data-layout="motto-plus-penalty-columns"
        data-visual-anchor="main center"
        data-text-treatments="motto-plaques,penalty-columns"
        data-visual-grammar="motto-row,penalty-columns"
        data-focal-rule="firm-penalty-has-no-license-revocation"
        data-focal-channels="motto-row,no-revocation-note"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="ethics-penalties" style={{position: 'absolute', left: 138, top: 0, width: 1500}}>
          <Panel tone={C.ethicsGold} watermark={<Scale size={180} color={C.ethicsGold} strokeWidth={1.6} />} style={{height: 168, padding: '14px 26px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <HallTab bar={C.ethicsGold} icon={<Scale size={26} color={C.paper} strokeWidth={2.2} />}>公证员职业道德（四句）</HallTab>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10}}>
              {mottos.map((line) => (
                <div key={line} style={{fontSize: 24, fontWeight: 950, color: C.ink, backgroundColor: C.panelDim, borderTop: `5px solid ${C.ethicsGold}`, padding: '12px 10px', textAlign: 'center', fontFamily: 'var(--inkloom-animation-title)'}}>{line}</div>
              ))}
            </div>
          </Panel>
        </Enter>
        {columns.map((column, index) => (
          <Enter key={column.name} delay={50 + index * 20} from="up" style={{position: 'absolute', left: 20 + index * 592, top: 200, width: 568}}>
            <Panel tone={column.tone} style={{height: 292, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 9}}>
              <HallTab bar={column.tone} icon={column.tone === C.liability ? <Gavel size={24} color={C.paper} strokeWidth={2.2} /> : column.tone === C.missing ? <Ban size={24} color={C.paper} strokeWidth={2.2} /> : <Scale size={24} color={C.paper} strokeWidth={2.2} />}>{column.name}</HallTab>
              {column.items.map((item) => (
                <div key={item} style={{fontSize: 22, fontWeight: 880, color: C.ink, backgroundColor: C.panelDim, borderLeft: `5px solid ${column.tone}`, padding: '7px 11px'}}>{item}</div>
              ))}
              {column.note ? (
                <div style={{fontSize: 21, fontWeight: 950, color: C.ink}}>
                  {column.note === '没有吊销执业证书' ? <Mark color={C.missing}>没有吊销执业证书（不同于对律所的处罚）</Mark> : <Mark color={C.liability}>{column.note}</Mark>}
                </div>
              ) : null}
            </Panel>
          </Enter>
        ))}
        <Enter delay={150} from="up" style={{position: 'absolute', left: 138, top: 516, width: 1500}}>
          <HallStrip style={{height: 60}}>
            <Scale size={38} color={C.ethicsGold} strokeWidth={2.2} />
            <span style={{padding: '3px 12px', backgroundColor: C.ethicsGold, color: C.ethicsDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>对比</span>
            <span style={{fontSize: 22, fontWeight: 950, color: C.paper}}>
              纪律处分（会员层面）· 机构处罚无吊销 · 公证员处罚同律师（有吊销）
            </span>
          </HallStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const CivilCriminalScene = () => {
  /* data-final-knowledge="civil-criminal" */
  return (
    <Shell code="02" kicker="民事 · 刑事责任" title="公证机构及其公证员的法律责任">
      <div
        data-layout="civil-elements-plus-criminal"
        data-visual-anchor="main center"
        data-text-treatments="element-rows,order-seals"
        data-visual-grammar="civil-panel,criminal-panel"
        data-focal-rule="compensation-only-and-firm-first-notary-later"
        data-focal-channels="compensation-only,firm-first-notary-later"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="civil-criminal" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 448}}>
          <Panel tone={C.liability} watermark={<Gavel size={190} color={C.liability} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <HallTab bar={C.liability} icon={<Gavel size={26} color={C.paper} strokeWidth={2.2} />}>民事法律责任（四要素）</HallTab>
            <IconChip icon={<Users size={28} color={C.paper} strokeWidth={2.2} />} tone={C.ethicsGold} title="主体：">
              公证机构<Mark color={C.ethicsGold}>及其</Mark>公证员
            </IconChip>
            <IconChip icon={<Scale size={28} color={C.paper} strokeWidth={2.2} />} tone={C.missing} title="条件：">
              过错行为给当事人·公证事项利害关系人<Mark color={C.missing}>造成了损失</Mark>
            </IconChip>
            <IconChip icon={<FileX size={28} color={C.paper} strokeWidth={2.2} />} tone={C.liability} title="方式：">
              承担方式是<Mark color={C.liability}>赔偿损失</Mark>，不包括停止侵害·排除妨害·消除危险·赔礼道歉等其他民事责任方式
            </IconChip>
            <IconChip icon={<Gavel size={28} color={C.paper} strokeWidth={2.2} />} tone={C.ethicsGold} title="顺序：">
              公证机构<Mark color={C.liability}>在先</Mark>，公证员<Mark color={C.liability}>在后</Mark>（与律师相同）
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={30} from="right" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 448}}>
          <Panel tone={C.missing} watermark={<Scale size={190} color={C.missing} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <HallTab bar={C.missing} icon={<Scale size={26} color={C.paper} strokeWidth={2.2} />}>刑事法律责任</HallTab>
            <div style={{fontSize: 24, fontWeight: 900, color: C.ink, lineHeight: 1.7, backgroundColor: `${C.missing}14`, borderLeft: `6px solid ${C.missing}`, padding: '14px 18px'}}>
              公证机构或其公证员因<Mark color={C.missing}>执业行为构成犯罪</Mark>的，应当<Mark color={C.liability}>追究其刑事责任</Mark>
            </div>
            <div style={{fontSize: 22, fontWeight: 900, color: C.inkSoft, lineHeight: 1.6}}>
              责任体系：纪律处分（会员）→ 行政处罚（机构·公证员）→ 民事责任（赔偿损失·机构在先）→ 刑事责任
            </div>
          </Panel>
        </Enter>
        <Enter delay={120} from="up" style={{position: 'absolute', left: 138, top: 472, width: 1500}}>
          <HallStrip style={{height: 84}}>
            <FileX size={40} color={C.liability} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.liability, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>点睛</span>
            <span style={{fontSize: 24, fontWeight: 950, color: C.paper}}>
              机构处罚<MissingSeal tone={C.missing} delay={170}>无吊销执业证书</MissingSeal>；民事责任<Mark color={C.paper}>只赔损失</Mark>、顺序<Mark color={C.paper}>机构在先·公证员在后</Mark>
            </span>
          </HallStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const NotaryEthicsLiability = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-ethics-penalties" {...SCENES.ethicsPenalties}>
      <EthicsPenaltiesScene />
    </TimelineSequence>
    <TimelineSequence name="02-civil-criminal" {...SCENES.civilCriminal}>
      <CivilCriminalScene />
    </TimelineSequence>
  </AbsoluteFill>
);
