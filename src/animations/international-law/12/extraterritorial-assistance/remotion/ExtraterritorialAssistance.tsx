import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {ArrowRight, Ban, Bell, Gavel, Hourglass, Landmark, Mail, ScrollText, Search, XCircle} from 'lucide-react';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {PALETTE, SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const enter = (frame: number, delay: number, y = 24): CSSProperties => ({
  opacity: interpolate(frame, [delay, delay + 16], [0, 1], CLAMP),
  translate: `0px ${interpolate(frame, [delay, delay + 22], [y, 0], {...CLAMP, easing: Easing.out(Easing.cubic)})}px`,
});

const enterX = (frame: number, delay: number, x = 52): CSSProperties => ({
  opacity: interpolate(frame, [delay, delay + 16], [0, 1], CLAMP),
  translate: `${interpolate(frame, [delay, delay + 24], [x, 0], {...CLAMP, easing: Easing.out(Easing.cubic)})}px 0px`,
});

const STATION_NAMES = ['壹', '贰', '叁', '肆', '伍'];

const RelayShell = ({
  children,
  code,
  station,
  title,
}: {
  readonly children: ReactNode;
  readonly code: number;
  readonly station: number;
  readonly title: string;
}) => (
  <AbsoluteFill
    className="font-animation-body"
    style={{
      color: PALETTE.paperText,
      backgroundColor: PALETTE.midnight,
      backgroundImage:
        'repeating-linear-gradient(90deg, rgba(201,162,39,0.05) 0 1px, transparent 1px 88px), radial-gradient(circle at 12% 4%, rgba(78,155,143,0.14), transparent 32%)',
      overflow: 'hidden',
    }}
  >
    <div style={{position: 'absolute', inset: 22, border: `2px solid ${PALETTE.brass}`}} />
    <div style={{position: 'absolute', inset: 28, border: `1px solid ${PALETTE.line}`}} />
    <header style={{position: 'absolute', left: 64, right: 64, top: 44, height: 104, display: 'flex', alignItems: 'center', gap: 24, borderBottom: `3px solid ${PALETTE.brass}`}}>
      <div style={{width: 74, height: 74, borderRadius: 37, border: `3px dashed ${PALETTE.brass}`, display: 'grid', placeItems: 'center'}}>
        <Mail size={30} color={PALETTE.brass} />
      </div>
      <h1 className="font-animation-title" style={{fontSize: 42, lineHeight: 1.1, margin: 0, fontWeight: 800, color: PALETTE.cream}}>
        {title}
      </h1>
      <div style={{marginLeft: 'auto', textAlign: 'right'}}>
        <div style={{fontSize: 16, fontWeight: 700, letterSpacing: 4, color: PALETTE.muted}}>MIDNIGHT MAIL RELAY · 三国法</div>
        <div style={{fontSize: 18, color: PALETTE.muted, marginTop: 6}}>域外司法协助 · 第{STATION_NAMES[code]}站</div>
      </div>
    </header>
    <div style={{position: 'absolute', left: 66, top: 200, width: 104, height: 620, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
      {[0, 1, 2, 3, 4].map((index) => {
        const active = index === station;
        return (
          <div
            key={index}
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              border: `2px dashed ${active ? PALETTE.brass : PALETTE.line}`,
              backgroundColor: active ? PALETTE.brass : PALETTE.panel,
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <span className="font-animation-mono" style={{fontSize: 18, fontWeight: 700, color: active ? PALETTE.midnight : PALETTE.muted}}>{String(index + 1).padStart(2, '0')}</span>
          </div>
        );
      })}
    </div>
    <main style={{position: 'absolute', left: 210, right: 64, top: 190, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Tag = ({color, text}: {readonly color: string; readonly text: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', backgroundColor: `${color}22`, borderLeft: `6px solid ${color}`, padding: '4px 14px'}}>
    <span style={{fontSize: 22, fontWeight: 800, color}}>{text}</span>
  </span>
);

const Ink = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{backgroundColor: color, padding: '2px 10px', fontWeight: 800}}>{children}</span>
);

const Under = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{boxShadow: `inset 0 -3px ${color}`, paddingBottom: 2, fontWeight: 700}}>{children}</span>
);

const Chip = ({children, color = PALETTE.signal}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 6, border: `1px solid ${PALETTE.line}`, borderLeft: `5px solid ${color}`, backgroundColor: PALETTE.panel, padding: '5px 12px', fontSize: 22, lineHeight: 1.35}}>
    {children}
  </span>
);

const RelayStamp = ({delay, frame, text, color = PALETTE.brass}: {readonly delay: number; readonly frame: number; readonly text: string; readonly color?: string}) => (
  <span
    style={{
      ...enter(frame, delay, 10),
      display: 'inline-block',
      border: `3px solid ${color}`,
      borderRadius: 8,
      color,
      padding: '8px 22px',
      fontSize: 23,
      fontWeight: 800,
      letterSpacing: 2,
      rotate: '-3deg',
      backgroundColor: 'rgba(20,27,46,0.7)',
    }}
  >
    {text}
  </span>
);

/* Concept tokens: recurring pictograms recorded in visual-direction.json conceptTokens. */
const TokConsulate = ({size = 19}: {readonly size?: number}) => (
  <Landmark size={size} strokeWidth={2.4} color={PALETTE.brass} style={{display: 'inline-block', verticalAlign: '-3px'}} />
);
const TokCourt = ({size = 19}: {readonly size?: number}) => (
  <Gavel size={size} strokeWidth={2.4} color={PALETTE.seal} style={{display: 'inline-block', verticalAlign: '-3px'}} />
);
const TokTreaty = ({size = 19}: {readonly size?: number}) => (
  <ScrollText size={size} strokeWidth={2.4} color={PALETTE.signal} style={{display: 'inline-block', verticalAlign: '-3px'}} />
);
const TokClock = ({size = 19}: {readonly size?: number}) => (
  <Hourglass size={size} strokeWidth={2.4} color={PALETTE.brass} style={{display: 'inline-block', verticalAlign: '-3px'}} />
);

export const ServiceRoutesScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="route-shelves" data-final-knowledge="announcement-fallback" data-final-knowledge="route-limits" data-final-knowledge="deemed-served" */
  const frame = useCurrentFrame();
  const shelves = [
    {
      name: '官方途径',
      color: PALETTE.brass,
      chips: [
        <span key="s1">国际条约</span>,
        <span key="s2">外交途径</span>,
        <span key="s3">使领馆 <TokConsulate /> → 只向中国人</span>,
      ],
    },
    {
      name: '对象途径',
      color: PALETTE.signal,
      chips: [
        <span key="o1">委托的诉讼代理人</span>,
        <span key="o2">境内独资企业 · 代表机构 · 分支机构</span>,
        <span key="o3"><Under color={PALETTE.seal}>授权在先</Under>的业务代办人</span>,
        <span key="o4">境内共同被告 · 法定代表人 · 主要负责人</span>,
      ],
    },
    {
      name: '方式途径',
      color: PALETTE.seal,
      chips: [
        <span key="m1">邮寄（3 个月）</span>,
        <span key="m2">电子方式</span>,
        <span key="m3">受送达人同意的其他方式</span>,
      ],
    },
  ];
  return (
    <RelayShell code={0} station={0} title="域外文书送达：十一条途径">
      <div
        data-layout="four-shelf-service-route-board"
        data-visual-anchor="typographic-sequence"
        data-visual-grammar="service-routes-shelve-into-four-groups,announcement-is-the-only-ordered-last-resort,actual-conduct-or-expiry-deems-service"
        data-text-treatments="label-block,chip,thin-underline,soft-highlight"
        data-focal-rule="consular-channel-only-serves-chinese-citizens"
        data-focal-channels="enclosure,locator,icon,contrast"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-final-knowledge="route-shelves" style={{display: 'flex', gap: 20, marginTop: 12}}>
          {shelves.map((shelf) => (
            <div
              key={shelf.name}
              style={{...enterX(frame, 14 + shelves.indexOf(shelf) * 18, 40), flex: 1, borderTop: `12px solid ${shelf.color}`, backgroundColor: 'rgba(28,37,64,0.9)', padding: '16px 18px'}}
            >
              <Tag color={shelf.color} text={shelf.name} />
              <div style={{display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12}}>
                {shelf.chips.map((chip, chipIndex) => (
                  <Chip key={chipIndex} color={shelf.color}>{chip}</Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{display: 'flex', gap: 20, marginTop: 24}}>
          <div
            data-final-knowledge="announcement-fallback"
            style={{...enter(frame, 96), flex: 1, border: `3px solid ${PALETTE.brass}`, backgroundColor: 'rgba(201,162,39,0.08)', padding: '20px 24px'}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.brass, display: 'flex', alignItems: 'center', gap: 10}}>
              <Bell size={24} color={PALETTE.brass} />
              兜底途径 · 公告
            </div>
            <div style={{marginTop: 10, fontSize: 22, lineHeight: 1.6}}>
              公告 <Ink color={PALETTE.brassSoft}>60 日</Ink>——唯一有顺序要求的
              <Under color={PALETTE.brass}>最后手段</Under>
            </div>
          </div>
          <div
            data-final-knowledge="route-limits"
            style={{...enter(frame, 126), flex: 1.25, border: `3px solid ${PALETTE.seal}`, backgroundColor: 'rgba(194,85,79,0.08)', padding: '20px 24px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.seal}}>途径限制</div>
            <div style={{marginTop: 10}}>
              条约与外交途径：<Ink color={PALETTE.sealSoft}>个案不能并用</Ink>
              ；邮寄、电子等须
              <Under color={PALETTE.seal}>所在国不禁止</Under>
            </div>
          </div>
          <div
            data-final-knowledge="deemed-served"
            style={{...enter(frame, 156), flex: 1.25, border: `3px solid ${PALETTE.signal}`, backgroundColor: 'rgba(78,155,143,0.08)', padding: '20px 24px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.signal}}>认定送达 · 四种</div>
            <div style={{marginTop: 10}}>
              签收；<Ink color={PALETTE.signalSoft}>行为</Ink>（按文书履行义务）；留置（对象明确且在境内）；
              <Under color={PALETTE.signal}>公告期满</Under>
            </div>
          </div>
        </div>
      </div>
    </RelayShell>
  );
};

export const HagueInboundScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="inbound-routes" data-final-knowledge="hague-pipeline" data-final-knowledge="never-refuse" data-final-knowledge="recipient-refusal" */
  const frame = useCurrentFrame();
  const stations = [
    {name: '外国法院', icon: <Gavel size={22} color={PALETTE.seal} />},
    {name: '该国驻华使领馆', icon: <Landmark size={22} color={PALETTE.brass} />},
    {name: '司法部', icon: <ScrollText size={22} color={PALETTE.signal} />},
    {name: '最高人民法院', icon: <Gavel size={22} color={PALETTE.signal} />},
    {name: '有关人民法院', icon: <Gavel size={22} color={PALETTE.signal} />},
    {name: '受送达人', icon: <Mail size={22} color={PALETTE.brass} />},
  ];
  return (
    <RelayShell code={1} station={1} title="向我国送达与海牙公约管道">
      <div
        data-layout="hague-relay-pipeline-with-reject-gates"
        data-visual-anchor="flow-path"
        data-visual-grammar="inbound-service-only-three-official-routes,hague-pipeline-relays-through-six-stations,no-translation-lets-recipient-refuse"
        data-text-treatments="label-block,chip,stamp"
        data-focal-rule="recipient-may-refuse-documents-without-chinese-translation"
        data-focal-channels="connector,locator,contrast,icon"
        style={{position: 'absolute', inset: 0}}
      >
        <div data-final-knowledge="inbound-routes" style={{...enter(frame, 12), display: 'flex', alignItems: 'center', gap: 16, marginTop: 8}}>
          <Tag color={PALETTE.brass} text="外国法院 → 我国 · 三条途径" />
          <Chip color={PALETTE.brass}>国际条约 <TokTreaty /></Chip>
          <Chip color={PALETTE.brass}>外交途径</Chip>
          <Chip color={PALETTE.brass}>使领馆 <TokConsulate /> → 其本国公民</Chip>
        </div>
        <div
          data-final-knowledge="hague-pipeline"
          style={{...enter(frame, 60), marginTop: 30, border: `3px solid ${PALETTE.signal}`, backgroundColor: 'rgba(78,155,143,0.06)', padding: '22px 26px 30px'}}
        >
          <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.signal}}>《海牙送达公约》· 六站管道</div>
          <div style={{display: 'flex', alignItems: 'center', gap: 6, marginTop: 18}}>
            {stations.map((station, index) => (
              <div key={station.name} style={{display: 'flex', alignItems: 'center', gap: 6, ...enterX(frame, 84 + index * 14, 26)}}>
                <div style={{width: 158, border: `2px solid ${PALETTE.line}`, backgroundColor: PALETTE.panel, padding: '12px 10px', textAlign: 'center'}}>
                  <div style={{display: 'flex', justifyContent: 'center'}}>{station.icon}</div>
                  <div style={{fontSize: 22, fontWeight: 700, marginTop: 6, lineHeight: 1.3}}>{station.name}</div>
                </div>
                {index < stations.length - 1 ? <ArrowRight size={26} color={PALETTE.signal} /> : null}
              </div>
            ))}
          </div>
        </div>
        <div style={{display: 'flex', gap: 20, marginTop: 26}}>
          <div
            data-final-knowledge="never-refuse"
            style={{...enter(frame, 190), flex: 1.5, border: `3px solid ${PALETTE.seal}`, backgroundColor: 'rgba(194,85,79,0.08)', padding: '20px 26px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.seal}}>法院不得拒绝送达 · 即使</div>
            <div style={{marginTop: 10}}>
              有关期限已过；案件由中国法院
              <Ink color={PALETTE.sealSoft}>专属管辖</Ink>
              <TokCourt />
              ；未附中文译本但附
              <Under color={PALETTE.seal}>英文或法文文本</Under>
            </div>
          </div>
          <div
            data-final-knowledge="recipient-refusal"
            style={{...enter(frame, 224), flex: 1, border: `3px solid ${PALETTE.brass}`, backgroundColor: 'rgba(201,162,39,0.08)', padding: '20px 26px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.brass, display: 'flex', alignItems: 'center', gap: 10}}>
              <XCircle size={24} color={PALETTE.seal} />
              受送达人的拒收权
            </div>
            <div style={{marginTop: 10}}>
              未附
              <Ink color={PALETTE.brassSoft}>中文译本</Ink>
              的司法文书——有权
              <Under color={PALETTE.brass}>拒收</Under>
            </div>
          </div>
        </div>
      </div>
    </RelayShell>
  );
};

export const EvidenceLanesScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="commission-lane" data-final-knowledge="consular-lane" data-final-knowledge="special-means" data-final-knowledge="count-gap" */
  const frame = useCurrentFrame();
  return (
    <RelayShell code={2} station={2} title="域外调查取证：车道对比">
      <div
        data-layout="evidence-dual-lane-comparison"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="commission-evidence-runs-on-treaty-letters,consular-evidence-serves-own-citizens-without-coercion,special-means-need-consent-and-host-permission"
        data-text-treatments="label-block,thin-underline,external-negation,chip"
        data-focal-rule="foreign-courts-only-two-evidence-channels-inside-china"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{display: 'flex', gap: 24, marginTop: 14}}>
          <div
            data-final-knowledge="commission-lane"
            style={{...enterX(frame, 14, 46), flex: 1.2, border: `3px solid ${PALETTE.signal}`, borderTop: `14px solid ${PALETTE.signal}`, backgroundColor: 'rgba(28,37,64,0.9)', padding: '22px 26px', fontSize: 22, lineHeight: 1.65}}
          >
            <div style={{fontSize: 26, fontWeight: 800, color: PALETTE.signal, display: 'flex', alignItems: 'center', gap: 10}}>
              <Search size={24} color={PALETTE.signal} />
              代为取证 · 四要点
            </div>
            <div style={{marginTop: 12}}>
              以
              <Ink color={PALETTE.signalSoft}>条约为基础</Ink>
              <TokTreaty />；以
              <Under color={PALETTE.signal}>请求书</Under>
              方式进行
              <br />
              经被请求国
              <Ink color={PALETTE.signalSoft}>中央机关</Ink>
              转递（我国＝司法部）
              <br />
              仅限
              <Under color={PALETTE.signal}>司法程序</Under>
              证据（不含行政程序）
            </div>
          </div>
          <div
            data-final-knowledge="consular-lane"
            style={{...enterX(frame, 44, 46), flex: 1, border: `3px solid ${PALETTE.brass}`, borderTop: `14px solid ${PALETTE.brass}`, backgroundColor: 'rgba(28,37,64,0.9)', padding: '22px 26px', fontSize: 22, lineHeight: 1.65}}
          >
            <div style={{fontSize: 26, fontWeight: 800, color: PALETTE.brass, display: 'flex', alignItems: 'center', gap: 10}}>
              <Landmark size={24} color={PALETTE.brass} />
              使领馆取证 <TokConsulate />
            </div>
            <div style={{marginTop: 12}}>
              只向
              <Ink color={PALETTE.brassSoft}>其本国公民</Ink>
              取证
              <br />
              <span style={{display: 'inline-flex', alignItems: 'center', gap: 8}}>
                <Ban size={24} color={PALETTE.seal} />
                <span style={{fontWeight: 800, color: PALETTE.seal}}>不得采取强制措施</span>
              </span>
            </div>
          </div>
        </div>
        <div style={{display: 'flex', gap: 24, marginTop: 26}}>
          <div
            data-final-knowledge="special-means"
            style={{...enter(frame, 96), flex: 1.2, border: `3px solid ${PALETTE.line}`, backgroundColor: PALETTE.panel, padding: '20px 26px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.cream}}>特殊方式 · 即时通讯工具等</div>
            <div style={{display: 'flex', gap: 12, marginTop: 12, flexWrap: 'wrap'}}>
              <Chip color={PALETTE.signal}>双方当事人同意</Chip>
              <Chip color={PALETTE.signal}>所在国法律不禁止</Chip>
            </div>
          </div>
          <div
            data-final-knowledge="count-gap"
            style={{...enter(frame, 130), flex: 1, border: `3px solid ${PALETTE.seal}`, backgroundColor: 'rgba(194,85,79,0.08)', padding: '20px 26px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.seal}}>途径数量差</div>
            <div style={{marginTop: 10}}>
              我国法院
              <Ink color={PALETTE.signalSoft}>境外取证＝4 种</Ink>
              ；外国法院在境内取证
              <Under color={PALETTE.seal}>只有 2 种</Under>
              <TokCourt />
              （条约、外交）
            </div>
          </div>
        </div>
      </div>
    </RelayShell>
  );
};

export const JudgmentRecognitionScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="filing-desk" data-final-knowledge="basis-gate" data-final-knowledge="substance-gate" data-final-knowledge="divorce-sidetrack" */
  const frame = useCurrentFrame();
  return (
    <RelayShell code={3} station={3} title="外国判决承认与执行：三道门">
      <div
        data-layout="recognition-gate-with-divorce-sidetrack"
        data-visual-anchor="document-fork"
        data-visual-grammar="recognition-needs-basis-effect-and-jurisdiction,substance-gates-guard-fairness-and-order,divorce-judgments-skip-basis-but-shrink-scope"
        data-text-treatments="label-block,soft-highlight,thin-underline,chip"
        data-focal-rule="recognition-mnemonic-covers-all-gates"
        data-focal-channels="enclosure,contrast,locator,icon"
        style={{position: 'absolute', inset: 0}}
      >
        <div
          data-final-knowledge="filing-desk"
          style={{...enter(frame, 12), display: 'flex', alignItems: 'center', gap: 14, marginTop: 8, flexWrap: 'wrap', border: `3px solid ${PALETTE.line}`, backgroundColor: PALETTE.panel, padding: '16px 22px', fontSize: 22, lineHeight: 1.6}}
        >
          <Tag color={PALETTE.brass} text="立案窗" />
          <span>申请人＝当事人或外国法院</span>
          <span>受理＝住所地 / 财产所在地
            <Ink color={PALETTE.brassSoft}>中院</Ink>
            <TokCourt />
          </span>
          <span>裁决生效后
            <Ink color={PALETTE.brassSoft}>2 年</Ink>
            <TokClock />
          </span>
          <span>承认与执行可
            <Under color={PALETTE.brass}>同时或分开</Under>
            申请；只申请承认的，执行期间自承认裁定生效起
            <Under color={PALETTE.brass}>重新计算</Under>
          </span>
        </div>
        <div style={{display: 'flex', gap: 22, marginTop: 22}}>
          <div
            data-final-knowledge="basis-gate"
            style={{...enterX(frame, 60, 46), flex: 1, border: `3px solid ${PALETTE.signal}`, borderTop: `14px solid ${PALETTE.signal}`, backgroundColor: 'rgba(28,37,64,0.9)', padding: '20px 26px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 26, fontWeight: 800, color: PALETTE.signal}}>基础要件 · 三项</div>
            <div style={{marginTop: 12}}>
              存在
              <Ink color={PALETTE.signalSoft}>国际条约或互惠关系</Ink>
              <TokTreaty />
              <br />
              判决
              <Under color={PALETTE.signal}>已经生效</Under>
              <br />
              外国法院对案件
              <Ink color={PALETTE.signalSoft}>有管辖权</Ink>
              <TokCourt />
            </div>
          </div>
          <div
            data-final-knowledge="substance-gate"
            style={{...enterX(frame, 90, 46), flex: 1.2, border: `3px solid ${PALETTE.seal}`, borderTop: `14px solid ${PALETTE.seal}`, backgroundColor: 'rgba(28,37,64,0.9)', padding: '20px 26px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 26, fontWeight: 800, color: PALETTE.seal}}>实质要件 · 四项</div>
            <div style={{marginTop: 12}}>
              诉讼权益
              <Ink color={PALETTE.sealSoft}>获得保障</Ink>
              （非缺席判决；无诉讼行为能力者获
              <Under color={PALETTE.seal}>适当代理</Under>
              ）
              <br />
              不违反我国
              <Ink color={PALETTE.sealSoft}>社会公共秩序</Ink>
              ；非
              <Under color={PALETTE.seal}>欺诈</Under>
              取得；无同一纠纷
              <Ink color={PALETTE.sealSoft}>在先判决或裁定</Ink>
            </div>
          </div>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 24, marginTop: 26, flexWrap: 'wrap'}}>
          <div data-final-knowledge="divorce-sidetrack" style={{...enter(frame, 150), flex: 1, display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap'}}>
            <Tag color={PALETTE.brass} text="离婚判决特例" />
            <span style={{fontSize: 22, lineHeight: 1.55}}>
              可
              <Ink color={PALETTE.brassSoft}>不以条约或互惠为基础</Ink>
              <TokTreaty />；但仅承认
              <Under color={PALETTE.brass}>解除夫妻身份关系</Under>
              的内容
            </span>
          </div>
          <RelayStamp delay={186} frame={frame} text={'口诀：协定互惠已生效，不缺有代有权管，公序非欺无先判'} />
        </div>
      </div>
    </RelayShell>
  );
};

export const ArbitralAwardsScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="convention-reservation" data-final-knowledge="filing-procedure" data-final-knowledge="no-revocation" data-final-knowledge="review-toggle" */
  const frame = useCurrentFrame();
  return (
    <RelayShell code={4} station={4} title="外国仲裁裁决：纽约公约">
      <div
        data-layout="convention-reservation-gate-with-review-toggle"
        data-visual-anchor="boundary"
        data-visual-grammar="new-york-convention-gates-by-seat-and-commerce,chinese-courts-never-revoke-foreign-awards,ex-officio-review-limited-to-two-reservations"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-focal-rule="seat-in-contracting-state-not-nationality"
        data-focal-channels="spatial,contrast,enclosure,icon"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{display: 'flex', gap: 22, marginTop: 12}}>
          <div
            data-final-knowledge="convention-reservation"
            style={{...enterX(frame, 14, 44), flex: 1.25, border: `3px solid ${PALETTE.brass}`, borderLeft: `14px solid ${PALETTE.brass}`, backgroundColor: 'rgba(201,162,39,0.07)', padding: '22px 26px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 26, fontWeight: 800, color: PALETTE.brass}}>加入保留 · 三道栅门</div>
            <div style={{marginTop: 12}}>
              <Ink color={PALETTE.brassSoft}>仲裁地</Ink>
              在其他缔约国
              <Under color={PALETTE.brass}>领土内</Under>
              <br />
             限于
              <Ink color={PALETTE.brassSoft}>商事</Ink>
              裁决（含
              <Under color={PALETTE.brass}>临时仲裁</Under>
              裁决）
              <br />
              国家间与国家—私人间争端：
              <span style={{color: PALETTE.seal, fontWeight: 800}}>不适用</span>
              <br />
              <span style={{fontWeight: 700}}>
                关键＝
                <Ink color={PALETTE.brassSoft}>仲裁地</Ink>
                ；不看当事人国籍与仲裁机构所在地
              </span>
            </div>
          </div>
          <div
            data-final-knowledge="filing-procedure"
            style={{...enterX(frame, 46, 44), flex: 1, border: `3px solid ${PALETTE.signal}`, borderLeft: `14px solid ${PALETTE.signal}`, backgroundColor: 'rgba(28,37,64,0.9)', padding: '22px 26px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 26, fontWeight: 800, color: PALETTE.signal, display: 'flex', alignItems: 'center', gap: 10}}>
              <Hourglass size={24} color={PALETTE.signal} />
              程序窗
            </div>
            <div style={{marginTop: 12}}>
              申请人＝
              <Ink color={PALETTE.signalSoft}>当事人</Ink>
              ；受理＝住所地 / 财产所在地
              <Ink color={PALETTE.signalSoft}>中院</Ink>
              <TokCourt />
              （均不在中国→申请人住所地或适当联系地中院）
              <br />
              <TokClock />
              裁决生效后 2 年；可同时或分开申请
              <br />
              拟拒绝承认和执行→须启动
              <Under color={PALETTE.signal}>法院内部报告制度</Under>
            </div>
          </div>
        </div>
        <div style={{display: 'flex', gap: 22, marginTop: 26, alignItems: 'stretch'}}>
          <div
            data-final-knowledge="no-revocation"
            style={{...enter(frame, 120), flex: 1, border: `3px solid ${PALETTE.seal}`, backgroundColor: 'rgba(194,85,79,0.08)', padding: '20px 26px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.seal}}>无权撤销</div>
            <div style={{marginTop: 10}}>
              对
              <Ink color={PALETTE.sealSoft}>外国仲裁裁决</Ink>
              无权撤销
              <TokCourt />；但有权撤销
              <Under color={PALETTE.seal}>涉外仲裁裁决</Under>
              （中国仲裁机构作出）
            </div>
          </div>
          <div
            data-final-knowledge="review-toggle"
            style={{...enter(frame, 152), flex: 1.2, border: `3px solid ${PALETTE.line}`, backgroundColor: PALETTE.panel, padding: '20px 26px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.cream}}>审查开关</div>
            <div style={{marginTop: 10}}>
              原则＝
              <Ink color={PALETTE.signalSoft}>经申请才审查</Ink>
              （仅程序问题）；例外依职权主动审查仅两种：
              <Under color={PALETTE.seal}>事项不可仲裁</Under>
              /
              <Under color={PALETTE.seal}>违反社会公共利益</Under>
            </div>
          </div>
        </div>
      </div>
    </RelayShell>
  );
};

export const ExtraterritorialAssistance = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: PALETTE.midnight, overflow: 'hidden'}}
  >
    <TimelineSequence name="01-service-routes" {...SCENES.serviceRoutes}>
      <ServiceRoutesScene />
    </TimelineSequence>
    <TimelineSequence name="02-hague-inbound" {...SCENES.hagueInbound}>
      <HagueInboundScene />
    </TimelineSequence>
    <TimelineSequence name="03-evidence-lanes" {...SCENES.evidenceLanes}>
      <EvidenceLanesScene />
    </TimelineSequence>
    <TimelineSequence name="04-judgment-recognition" {...SCENES.judgmentRecognition}>
      <JudgmentRecognitionScene />
    </TimelineSequence>
    <TimelineSequence name="05-arbitral-awards" {...SCENES.arbitralAwards}>
      <ArbitralAwardsScene />
    </TimelineSequence>
  </AbsoluteFill>
);
