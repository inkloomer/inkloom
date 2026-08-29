import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {ArrowLeftRight, ArrowRight, Ban, Building2, Equal, FileText, Globe, Handshake, Landmark, Plane, Scale, Search, ShoppingBag, Swords, UserRound, Users} from 'lucide-react';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {PALETTE, SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const rise = (frame: number, delay: number): CSSProperties => ({
  opacity: interpolate(frame, [delay, delay + 16], [0, 1], CLAMP),
  translate: `0px ${interpolate(frame, [delay, delay + 22], [26, 0], {...CLAMP, easing: Easing.out(Easing.cubic)})}px`,
});

const sweep = (frame: number, delay: number): CSSProperties => ({
  opacity: interpolate(frame, [delay, delay + 16], [0, 1], CLAMP),
  translate: `${interpolate(frame, [delay, delay + 24], [54, 0], {...CLAMP, easing: Easing.out(Easing.cubic)})}px 0px`,
});

const RING_SEATS = ['制度', '最惠国', 'TRIMs', 'GATS', '争端'];

const RoundtableShell = ({
  children,
  seat,
  title,
}: {
  readonly children: ReactNode;
  readonly seat: number;
  readonly title: string;
}) => (
  <AbsoluteFill
    className="font-animation-body"
    style={{
      color: PALETTE.paperText,
      backgroundColor: PALETTE.celadon,
      backgroundImage:
        'radial-gradient(circle at 50% 118%, rgba(127,183,201,0.12), transparent 42%), repeating-linear-gradient(45deg, rgba(241,234,216,0.02) 0 2px, transparent 2px 42px)',
      overflow: 'hidden',
    }}
  >
    <div style={{position: 'absolute', inset: 22, border: `2px solid ${PALETTE.gold}`}} />
    <div style={{position: 'absolute', inset: 28, border: `1px solid ${PALETTE.line}`}} />
    <header style={{position: 'absolute', left: 64, right: 64, top: 44, height: 100, display: 'flex', alignItems: 'center', gap: 24, borderBottom: `3px solid ${PALETTE.gold}`}}>
      <div style={{width: 76, height: 76, borderRadius: '50%', border: `3px solid ${PALETTE.gold}`, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.skySoft}}>
        <Globe size={32} color={PALETTE.gold} />
      </div>
      <div>
        <div style={{fontSize: 16, fontWeight: 700, letterSpacing: 4, color: PALETTE.muted}}>CELADON ROUNDTABLE · 世界贸易组织</div>
        <h1 className="font-animation-title" style={{fontSize: 42, lineHeight: 1.15, margin: 0, fontWeight: 800, color: PALETTE.cream}}>{title}</h1>
      </div>
      <div style={{marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 14}}>
        {RING_SEATS.map((label, index) => (
          <div key={label} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5}}>
            <div style={{width: 30, height: 30, borderRadius: '50%', border: `2px solid ${index === seat ? PALETTE.gold : PALETTE.line}`, backgroundColor: index === seat ? PALETTE.gold : 'transparent', display: 'grid', placeItems: 'center'}}>
              <span className="font-animation-mono" style={{fontSize: 15, fontWeight: 700, color: index === seat ? PALETTE.celadon : PALETTE.muted}}>{index + 1}</span>
            </div>
            <span style={{fontSize: 15, color: index === seat ? PALETTE.gold : PALETTE.muted}}>{label}</span>
          </div>
        ))}
      </div>
    </header>
    <main style={{position: 'absolute', left: 64, right: 64, top: 186, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Ink = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{backgroundColor: color, padding: '2px 10px', fontWeight: 800}}>{children}</span>
);

const Under = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{boxShadow: `inset 0 -3px ${color}`, paddingBottom: 2, fontWeight: 700}}>{children}</span>
);

const TableStamp = ({delay, frame, text, color = PALETTE.gold}: {readonly delay: number; readonly frame: number; readonly text: string; readonly color?: string}) => (
  <span
    style={{
      ...rise(frame, delay),
      display: 'inline-block',
      border: `3px double ${color}`,
      borderRadius: 10,
      color,
      padding: '9px 24px',
      fontSize: 22,
      fontWeight: 800,
      letterSpacing: 2,
      rotate: '-2deg',
      backgroundColor: 'rgba(18,59,63,0.8)',
    }}
  >
    {text}
  </span>
);

const RingPanel = ({children, flex = 1, color, delay, frame}: {readonly children: ReactNode; readonly flex?: number | string; readonly color?: string; readonly delay: number; readonly frame: number}) => (
  <div
    style={{
      ...rise(frame, delay),
      flex,
      border: `2px solid ${color ?? PALETTE.line}`,
      borderRadius: 14,
      backgroundColor: PALETTE.panel,
      padding: '18px 26px',
    }}
  >
    {children}
  </div>
);

export const WtoFoundationScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="wto-members" data-final-knowledge="general-council-dual-role" data-final-knowledge="china-obligations" data-final-knowledge="china-non-binding-agreements" */
  const frame = useCurrentFrame();
  return (
    <RoundtableShell seat={0} title="WTO 基本制度">
      <div
        data-layout="roundtable-hub-with-statute-column"
        data-visual-anchor="boundary"
        data-visual-grammar="general-council-serves-as-two-bodies,china-carries-common-and-specific-obligations"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="one-general-council-holds-dispute-settlement-and-trade-policy-review-roles"
        data-focal-channels="contrast,enclosure,locator"
        style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: 6}}
      >
        <div style={{display: 'flex', gap: 26, flex: 1.25}}>
          <RingPanel color={PALETTE.gold} delay={12} frame={frame} flex={1.1}>
            <div data-final-knowledge="general-council-dual-role" style={{fontSize: 24, fontWeight: 800, color: PALETTE.gold, display: 'flex', alignItems: 'center', gap: 10}}>
              <Landmark size={24} color={PALETTE.gold} />
              总理事会 · 两会合一
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 18, marginTop: 14}}>
              <div style={{width: 96, height: 96, borderRadius: '50%', border: `3px dashed ${PALETTE.sky}`, display: 'grid', placeItems: 'center', textAlign: 'center', fontSize: 18, lineHeight: 1.35, color: PALETTE.sky}}>部长级<br />会议</div>
              <ArrowLeftRight size={22} color={PALETTE.muted} rotate={90} />
              <div style={{width: 96, height: 96, borderRadius: '50%', border: `3px solid ${PALETTE.gold}`, display: 'grid', placeItems: 'center', textAlign: 'center', fontSize: 18, lineHeight: 1.35, backgroundColor: PALETTE.goldSoft, color: PALETTE.gold}}>总理<br />事会</div>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 10}}>
                <span style={{border: `2px solid ${PALETTE.sky}`, borderRadius: 8, padding: '8px 14px', fontSize: 20, color: PALETTE.sky}}>兼任 争端解决机构</span>
                <span style={{border: `2px solid ${PALETTE.coral}`, borderRadius: 8, padding: '8px 14px', fontSize: 20, color: PALETTE.coral}}>兼任 贸易政策审议机构</span>
              </div>
            </div>
          </RingPanel>
          <RingPanel color={PALETTE.sky} delay={40} frame={frame} flex={0.9}>
            <div data-final-knowledge="wto-members" style={{fontSize: 24, fontWeight: 800, color: PALETTE.sky, display: 'flex', alignItems: 'center', gap: 10}}>
              <Users size={24} color={PALETTE.sky} />
              成员
            </div>
            <div style={{marginTop: 12, fontSize: 22, lineHeight: 1.7}}>
              各国政府 ＋
              <Ink color={PALETTE.skySoft}>单独关税区政府</Ink>
              <br />
              <span style={{fontSize: 20, color: PALETTE.muted}}>中国义务：共同（多边协议）＋ 特有（入世承诺：议定书 + 工作组报告）</span>
            </div>
          </RingPanel>
        </div>
        <div
          data-final-knowledge="china-non-binding-agreements"
          style={{...rise(frame, 84), border: `2px solid ${PALETTE.coral}`, borderRadius: 14, backgroundColor: PALETTE.coralSoft, padding: '16px 28px', display: 'flex', alignItems: 'center', gap: 20, whiteSpace: 'nowrap'}}
        >
          <Ban size={26} color={PALETTE.coral} />
          <span style={{fontSize: 22}}>
            对中国
            <Ink color={PALETTE.coralSoft}>没有拘束力</Ink>
            的两个协议：
            <Under color={PALETTE.coral}>《民用航空器贸易协议》《政府采购协议》</Under>
            ；政府采购未被纳入多边规则
          </span>
        </div>
        <div style={{...rise(frame, 122), display: 'flex', justifyContent: 'center', whiteSpace: 'nowrap'}}>
          <TableStamp delay={122} frame={frame} color={PALETTE.gold} text={'WTO 协议在中国司法实践中不能直接适用，只能转化为国内法适用'} />
        </div>
      </div>
    </RoundtableShell>
  );
};

export const MfnPrincipleScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="non-discrimination-pair" data-final-knowledge="mfn-three-traits" data-final-knowledge="mfn-exceptions" data-final-knowledge="rcep-fruit" */
  const frame = useCurrentFrame();
  const traits = [
    {name: '普遍自动', detail: '优惠自动无条件延及所有成员', color: PALETTE.sky},
    {name: '相互', detail: '每一成员既给惠也受惠', color: PALETTE.gold},
    {name: '同一', detail: '限相同情形、相同事项', color: PALETTE.coral},
  ];
  return (
    <RoundtableShell seat={1} title="最惠国待遇原则">
      <div
        data-layout="mfn-equation-ring-with-exception-belt"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="national-treatment-versus-mfn-equations,rcep-forms-mfn-exception"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="amending-any-mfn-clause-requires-consent-of-all-members"
        data-focal-channels="contrast,enclosure,connector"
        style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: 6}}
      >
        <div style={{display: 'flex', gap: 22}}>
          <RingPanel color={PALETTE.sky} delay={12} frame={frame} flex={1}>
            <div data-final-knowledge="non-discrimination-pair" style={{fontSize: 23, fontWeight: 800, color: PALETTE.sky, display: 'flex', alignItems: 'center', gap: 10}}>
              <Equal size={22} color={PALETTE.sky} />
              非歧视 · 两公式
            </div>
            <div style={{marginTop: 12, fontSize: 22, lineHeight: 2}}>
              国民待遇：外国人 <Equal size={18} color={PALETTE.sky} style={{display: 'inline'}} /> <b>本国人</b>
              <br />
              最惠国：外国人 <Equal size={18} color={PALETTE.gold} style={{display: 'inline'}} /> <b>外国人</b>
            </div>
          </RingPanel>
          <RingPanel color={PALETTE.gold} delay={40} frame={frame} flex={1.25}>
            <div data-final-knowledge="mfn-three-traits" style={{fontSize: 23, fontWeight: 800, color: PALETTE.gold}}>三特点</div>
            <div style={{display: 'flex', gap: 14, marginTop: 12}}>
              {traits.map((trait) => (
                <div key={trait.name} style={{flex: 1, borderLeft: `7px solid ${trait.color}`, backgroundColor: 'rgba(18,59,63,0.75)', padding: '8px 14px', fontSize: 20, lineHeight: 1.5}}>
                  <b style={{color: trait.color}}>{trait.name}</b>
                  <br />
                  {trait.detail}
                </div>
              ))}
            </div>
          </RingPanel>
        </div>
        <div
          data-final-knowledge="mfn-exceptions"
          style={{...rise(frame, 78), border: `2px solid ${PALETTE.coral}`, borderRadius: 14, backgroundColor: PALETTE.panel, padding: '14px 26px', display: 'flex', alignItems: 'center', gap: 16, whiteSpace: 'nowrap'}}
        >
          <Ban size={24} color={PALETTE.coral} />
          <span style={{fontSize: 21, color: PALETTE.coral, fontWeight: 800}}>例外：</span>
          <span style={{fontSize: 21}}>边境贸易优惠 · 区域经济一体化（关税同盟 / 自贸区）内部优惠 · 对特定来源征收反倾销税 / 反补贴税 · 修改任一协议最惠国条款须</span>
          <Under color={PALETTE.gold}>全体成员同意</Under>
        </div>
        <div
          data-final-knowledge="rcep-fruit"
          style={{...rise(frame, 116), border: `2px solid ${PALETTE.moss}`, borderRadius: 14, backgroundColor: PALETTE.mossSoft, padding: '14px 26px', display: 'flex', alignItems: 'center', gap: 18, whiteSpace: 'nowrap'}}
        >
          <Handshake size={24} color={PALETTE.moss} />
          <span style={{fontSize: 21, lineHeight: 1.6}}>
            RCEP：区域
            <span className="font-animation-mono" style={{fontSize: 27, fontWeight: 900, color: PALETTE.moss}}> 90%以上 </span>
            货物贸易最终零关税 · 原产地规则适用
            <Ink color={PALETTE.mossSoft}>区域累积原则</Ink>
            · 企业仍可引用其他自贸协定择优 · 构成最惠国待遇
            <Under color={PALETTE.moss}>例外</Under>
          </span>
        </div>
      </div>
    </RoundtableShell>
  );
};

export const TrimsBanScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="trims-scope-gate" data-final-knowledge="trims-four-prohibited" data-final-knowledge="trims-out-of-scope" */
  const frame = useCurrentFrame();
  const bans = [
    {name: '当地成分要求', detail: '要求企业购买 / 使用东道国产品作为生产投入', color: PALETTE.coral},
    {name: '贸易平衡要求', detail: '要求企业的进口 ≤ 其出口', color: PALETTE.sky},
    {name: '进口用汇限制', detail: '限制企业进口所需外汇的使用', color: PALETTE.gold},
    {name: '国内销售要求', detail: '要求产品必须有一部分在国内销售', color: PALETTE.moss},
  ];
  return (
    <RoundtableShell seat={2} title="TRIMs 禁止性投资措施">
      <div
        data-layout="trims-gate-with-four-ban-lanes"
        data-visual-anchor="boundary"
        data-visual-grammar="only-goods-trade-related-measures-regulated,four-prohibited-investment-measures"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="equity-ratio-and-director-seat-rules-out-of-trims-scope"
        data-focal-channels="contrast,enclosure,connector"
        style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: 6}}
      >
        <div
          data-final-knowledge="trims-scope-gate"
          style={{...rise(frame, 12), border: `2px solid ${PALETTE.gold}`, borderRadius: 14, backgroundColor: PALETTE.goldSoft, padding: '14px 26px', display: 'flex', alignItems: 'center', gap: 16, whiteSpace: 'nowrap'}}
        >
          <Search size={24} color={PALETTE.gold} />
          <span style={{fontSize: 22}}>
            目的：维护
            <Ink color={PALETTE.goldSoft}>国民待遇</Ink>
            与
            <Ink color={PALETTE.goldSoft}>取消数量限制</Ink>
            原则；判断标准：只有与
            <Under color={PALETTE.gold}>「货物贸易」</Under>
            有关的措施才在调整范围内
          </span>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 16, flex: 1}}>
          {bans.map((ban) => (
            <div
              key={ban.name}
              data-final-knowledge="trims-four-prohibited"
              style={{...sweep(frame, 48 + bans.indexOf(ban) * 22, 46), flex: 1, display: 'flex', alignItems: 'center', gap: 22, borderLeft: `10px solid ${ban.color}`, backgroundColor: PALETTE.panel, borderRadius: '0 12px 12px 0', padding: '12px 26px'}}
            >
              <span style={{width: 190, fontSize: 24, fontWeight: 800, color: ban.color}}>{ban.name}</span>
              <span style={{flex: 1, borderBottom: `2px dotted ${PALETTE.line}`, paddingBottom: 3, fontSize: 21}}>{ban.detail}</span>
              <span style={{border: `2px solid ${ban.color}`, color: ban.color, borderRadius: 8, padding: '5px 14px', fontSize: 19, fontWeight: 800}}>禁止</span>
            </div>
          ))}
        </div>
        <div
          data-final-knowledge="trims-out-of-scope"
          style={{...rise(frame, 158), border: `2px dashed ${PALETTE.muted}`, borderRadius: 14, padding: '12px 26px', display: 'flex', alignItems: 'center', gap: 16, whiteSpace: 'nowrap'}}
        >
          <Ban size={22} color={PALETTE.muted} />
          <span style={{fontSize: 20, color: PALETTE.muted}}>
            不属调整范围（与货物贸易无关）：外资股权比例上限 · 合营他方优先购买权 · 董事名额与出资比例挂钩
          </span>
        </div>
      </div>
    </RoundtableShell>
  );
};

export const GatsModesScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="gats-four-modes" data-final-knowledge="gats-framework-content" */
  const frame = useCurrentFrame();
  const modes = [
    {name: '跨境交付', who: '服务本身跨境', color: PALETTE.sky, icon: <Plane size={26} color={PALETTE.sky} />},
    {name: '境外消费', who: '消费者跨境', color: PALETTE.coral, icon: <ShoppingBag size={26} color={PALETTE.coral} />},
    {name: '商业存在', who: '提供者跨境 + 设立机构', color: PALETTE.gold, icon: <Building2 size={26} color={PALETTE.gold} />},
    {name: '自然人流动', who: '提供者跨境、不设立机构', color: PALETTE.moss, icon: <UserRound size={26} color={PALETTE.moss} />},
  ];
  return (
    <RoundtableShell seat={3} title="GATS 服务贸易总协定">
      <div
        data-layout="gats-mode-quadrant-with-framework-column"
        data-visual-anchor="role-pair"
        data-visual-grammar="four-service-trade-modes-by-who-crosses,market-access-depends-on-member-commitments"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="mfn-unconditional-but-national-treatment-limited-to-scheduled-commitments"
        data-focal-channels="contrast,enclosure,connector"
        style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: 6}}
      >
        <div style={{display: 'flex', gap: 22, flex: 1.25}}>
          <div style={{flex: 1.35, display: 'flex', flexDirection: 'column', gap: 16}}>
            {modes.map((mode) => (
              <div
                key={mode.name}
                data-final-knowledge="gats-four-modes"
                style={{...sweep(frame, 12 + modes.indexOf(mode) * 24, 46), flex: 1, display: 'flex', alignItems: 'center', gap: 20, border: `2px solid ${mode.color}`, borderRadius: 12, backgroundColor: PALETTE.panel, padding: '10px 24px'}}
              >
                {mode.icon}
                <span style={{width: 150, fontSize: 24, fontWeight: 800, color: mode.color}}>{mode.name}</span>
                <span style={{flex: 1, fontSize: 21}}>{mode.who}</span>
              </div>
            ))}
          </div>
          <RingPanel color={PALETTE.gold} delay={110} frame={frame} flex={0.85}>
            <div data-final-knowledge="gats-framework-content" style={{fontSize: 24, fontWeight: 800, color: PALETTE.gold, display: 'flex', alignItems: 'center', gap: 10}}>
              <FileText size={24} color={PALETTE.gold} />
              框架性协定 · 三要点
            </div>
            <div style={{marginTop: 12, fontSize: 21, lineHeight: 1.8}}>
              对成员服务市场开放
              <Ink color={PALETTE.goldSoft}>无同一水平要求</Ink>
              <br />
              市场准入 / 国民待遇取决于各成员
              <Under color={PALETTE.gold}>承诺</Under>
              <br />
              最惠国待遇：
              <Ink color={PALETTE.skySoft}>完全、无条件</Ink>
              <br />
              <span style={{fontSize: 19, color: PALETTE.muted}}>国民待遇仅限承诺表列明部门；政府采购不适用</span>
            </div>
          </RingPanel>
        </div>
        <div style={{...rise(frame, 152), display: 'flex', justifyContent: 'center', whiteSpace: 'nowrap'}}>
          <TableStamp delay={152} frame={frame} color={PALETTE.sky} text={'判型口诀：谁跨境——服务 / 消费者 / 提供者设机构 / 提供者不设机构'} />
        </div>
      </div>
    </RoundtableShell>
  );
};

export const DisputeSettlementScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="dispute-appeal-types" data-final-knowledge="dispute-pipeline-stations" data-final-knowledge="cross-retaliation-rule" */
  const frame = useCurrentFrame();
  const stations = [
    {name: '磋商', note: '必经 · 60 天 · 保密', color: PALETTE.sky},
    {name: '专家组', note: '非常设 · 审理须与主张一致', color: PALETTE.gold},
    {name: '上诉机构', note: '常设 · 只审法律问题 · 不发回', color: PALETTE.coral},
    {name: 'DSB 通过', note: '反向协商一致（一票即过）', color: PALETTE.moss},
    {name: '交叉报复', note: '须经授权 · 与受损相等', color: PALETTE.coral},
  ];
  return (
    <RoundtableShell seat={4} title="WTO 争端解决机制">
      <div
        data-layout="dispute-pipeline-with-appeal-fork"
        data-visual-anchor="flow-path"
        data-visual-grammar="violation-versus-non-violation-appeals,five-station-dispute-pipeline"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="no-execution-organ-retaliation-needs-dsb-authorization-cross-domain"
        data-focal-channels="contrast,connector,enclosure"
        style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: 6}}
      >
        <div style={{display: 'flex', gap: 22}}>
          <RingPanel color={PALETTE.coral} delay={12} frame={frame} flex={1}>
            <div data-final-knowledge="dispute-appeal-types" style={{fontSize: 23, fontWeight: 800, color: PALETTE.coral, display: 'flex', alignItems: 'center', gap: 10}}>
              <Swords size={22} color={PALETTE.coral} />
              违反性申诉
            </div>
            <div style={{marginTop: 10, fontSize: 21, lineHeight: 1.65}}>
              须证明被诉方
              <Ink color={PALETTE.coralSoft}>违反协议</Ink>
              ；成功 → 被诉方
              <Under color={PALETTE.coral}>修改或废除</Under>
              措施
            </div>
          </RingPanel>
          <RingPanel color={PALETTE.sky} delay={38} frame={frame} flex={1}>
            <div style={{fontSize: 23, fontWeight: 800, color: PALETTE.sky, display: 'flex', alignItems: 'center', gap: 10}}>
              <Scale size={22} color={PALETTE.sky} />
              非违反性申诉
            </div>
            <div style={{marginTop: 10, fontSize: 21, lineHeight: 1.65}}>
              无须证明违反，只证
              <Ink color={PALETTE.skySoft}>利益受损 / 丧失</Ink>
              ；成功 → 被诉方无须改废，但需
              <Under color={PALETTE.sky}>补偿</Under>
            </div>
          </RingPanel>
        </div>
        <div style={{display: 'flex', alignItems: 'stretch', gap: 10, flex: 1}}>
          {stations.map((station, index) => (
            <div key={station.name} style={{...rise(frame, 74 + index * 22), flex: 1, display: 'flex', alignItems: 'center', gap: 8}}>
              <div
                data-final-knowledge={index === 4 ? 'cross-retaliation-rule' : 'dispute-pipeline-stations'}
                style={{flex: 1, border: `2px solid ${station.color}`, borderRadius: 12, backgroundColor: PALETTE.panel, padding: '14px 16px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}
              >
                <div style={{fontSize: 23, fontWeight: 900, color: station.color}}>{station.name}</div>
                <div style={{fontSize: 19, lineHeight: 1.5, color: PALETTE.paperText}}>{station.note}</div>
              </div>
              {index < stations.length - 1 ? <ArrowRight size={20} color={PALETTE.muted} /> : null}
            </div>
          ))}
        </div>
        <div style={{...rise(frame, 190), display: 'flex', justifyContent: 'center', whiteSpace: 'nowrap'}}>
          <TableStamp delay={190} frame={frame} color={PALETTE.gold} text={'WTO 无执行机构：败诉方不履行 → 对方经 DSB 授权方可中止减让，且可跨领域交叉报复'} />
        </div>
      </div>
    </RoundtableShell>
  );
};

export const Wto = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: PALETTE.celadon, overflow: 'hidden'}}
  >
    <TimelineSequence name="01-wto-foundation" {...SCENES.wtoFoundation}>
      <WtoFoundationScene />
    </TimelineSequence>
    <TimelineSequence name="02-mfn-principle" {...SCENES.mfnPrinciple}>
      <MfnPrincipleScene />
    </TimelineSequence>
    <TimelineSequence name="03-trims-ban" {...SCENES.trimsBan}>
      <TrimsBanScene />
    </TimelineSequence>
    <TimelineSequence name="04-gats-modes" {...SCENES.gatsModes}>
      <GatsModesScene />
    </TimelineSequence>
    <TimelineSequence name="05-dispute-settlement" {...SCENES.disputeSettlement}>
      <DisputeSettlementScene />
    </TimelineSequence>
  </AbsoluteFill>
);
