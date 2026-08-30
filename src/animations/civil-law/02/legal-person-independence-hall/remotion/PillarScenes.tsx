import type {CSSProperties, ReactNode} from 'react';
import {Baby, Brain, Briefcase, Building2, FileWarning, Gem, Handshake, HeartHandshake, Landmark, Scale, Stamp} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  teal: '#173F4C',
  tealMid: '#255864',
  peacock: '#3E7E8C',
  peacockPale: '#D3E4E7',
  ivory: '#F3EEE2',
  ivoryDim: '#E6DFCC',
  ivoryEdge: '#BAB29C',
  copper: '#B06A2E',
  copperPale: '#EDD8C2',
  berry: '#8E3B52',
  berryPale: '#EBD2DA',
  sand: '#A98F4C',
  sandPale: '#EBDFB9',
  ink: '#262E30',
  inkSoft: '#6E7678',
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
      backgroundColor: C.teal,
      color: C.ivory,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(90deg, transparent 0 168px, rgba(0, 0, 0, 0.13) 168px 171px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.copper}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.copperPale}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.tealMid, borderLeft: `8px solid ${C.copper}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.ivory, letterSpacing: 2}}>民法 · 第2讲 · {code}</span>
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
        borderBottom: `2px solid ${C.copper}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.ivory}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.copperPale, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

export const Boss = ({children, tone = C.copper}: {readonly children: ReactNode; readonly tone?: string}) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '5px 14px',
      backgroundColor: tone,
      border: `2px solid ${C.sand}`,
      boxShadow: `0 2px 0 ${C.teal}`,
      color: C.ivory,
      fontSize: 22,
      fontWeight: 900,
      letterSpacing: 2,
    }}
  >
    {children}
  </span>
);

export const Seal = ({children, delay = 0, size = 24, tone = C.berry}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

export const Under = ({children, color = C.berry, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

export const Chip = ({children, tone = C.ivoryEdge, toneBg = C.ivoryDim, ink = C.ink}: {readonly children: ReactNode; readonly tone?: string; readonly toneBg?: string; readonly ink?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${tone}`, backgroundColor: toneBg, padding: '5px 12px', fontSize: 22, fontWeight: 900, color: ink, whiteSpace: 'nowrap'}}>{children}</span>
);

export const IndependenceFourPillarsScene = () => {
  /* data-final-knowledge="personality-pillar" data-final-knowledge="property-pillar" data-final-knowledge="liability-pillar" data-final-knowledge="will-pillar" data-final-knowledge="investors-case-verdicts" */
  return (
    <Shell code="01" kicker="法人独立性" title="法人的独立性：四根支柱与出资案">
      <div
        data-layout="four-pillar-contrast-atrium"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,stamp,soft-highlight,thin-underline"
        data-visual-grammar="legal-person-personality-makes-it-a-separate-person-from-its-members,assets-under-the-legal-person-belong-to-the-person-itself,the-person-alone-bears-its-debts-with-its-own-property,the-will-of-the-person-is-formed-by-its-organs-as-one-mind"
        data-focal-rule="one-investment-four-splits-person-property-liability-and-will"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        {[
          {left: 0, tone: C.peacock, pale: C.peacockPale, marker: 'personality-pillar', icon: <Building2 size={30} color={C.peacock} strokeWidth={2.4} />, title: '人格独立', lines: ['享有民事权利能力', '＝民法上的另一种「人」', '与成员之间＝「两个人」']},
          {left: 444, tone: C.sand, pale: C.sandPale, marker: 'property-pillar', icon: <Landmark size={30} color={C.sand} strokeWidth={2.4} />, title: '财产独立', lines: ['法人名下财产归', '＝法人本身', '不归成员等任何人']},
          {left: 888, tone: C.berry, pale: C.berryPale, marker: 'liability-pillar', icon: <Scale size={30} color={C.berry} strokeWidth={2.4} />, title: '责任独立', lines: ['以独立财产对外担责', '他人无需对不能清偿的债务', '承担继续偿还责任']},
          {left: 1332, tone: C.copper, pale: C.copperPale, marker: 'will-pillar', icon: <Brain size={30} color={C.copper} strokeWidth={2.4} />, title: '意志独立', lines: ['享有民事行为能力', '「头脑」＝法人机关', '法定代表人＝机关组成部分']},
        ].map((pillar, pillarIndex) => (
          <Enter key={pillar.title} delay={6 + pillarIndex * 20} from="up" marker={pillar.marker} style={{position: 'absolute', left: pillar.left, top: 0, width: 424, height: 320}}>
            <div style={{height: '100%', backgroundColor: C.ivory, border: `3px solid ${pillar.tone}`, display: 'flex', flexDirection: 'column', gap: 10, padding: '14px 18px'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                {pillar.icon}
                <Boss tone={pillar.tone}>{pillar.title}</Boss>
              </div>
              <div style={{fontSize: 21, fontWeight: 900, color: C.ink, lineHeight: 1.6}}>
                {pillar.lines.map((line) => (
                  <div key={line}>· {line}</div>
                ))}
              </div>
            </div>
          </Enter>
        ))}
        <Enter delay={100} from="up" marker="investors-case-verdicts" style={{position: 'absolute', left: 40, top: 336, width: 1696, height: 250}}>
          <div style={{height: '100%', backgroundColor: C.ivoryDim, border: `3px solid ${C.peacock}`, display: 'flex', gap: 16, padding: '12px 18px'}}>
            <span style={{writingMode: 'vertical-rl', fontSize: 22, fontWeight: 950, color: C.peacock, letterSpacing: 4, flexShrink: 0}}>出资案四连判</span>
            <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', gap: 8, fontSize: 21, fontWeight: 900, color: C.ink}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <Chip tone={C.peacock} toneBg={C.peacockPale}>① 存在几个「人」？</Chip>
                <span>三个——甲 · 乙 · 公司（公司与甲、公司与乙均为两个人）</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <Chip tone={C.sand} toneBg={C.sandPale}>② 出资财产归谁？</Chip>
                <Seal delay={200} size={18} tone={C.sand}>公司的 ✓ 不是甲也不是乙</Seal>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <Chip tone={C.berry} toneBg={C.berryPale} ink={C.berry}>③ 欠丁银行 100 万</Chip>
                <span>债务人＝公司 · 用<Soft color={C.berry}>公司财产</Soft>偿还 · 甲乙无偿还责任</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <Chip tone={C.copper} toneBg={C.copperPale}>④ 决策是谁的意志？</Chip>
                <span>公司的<Soft color={C.copper}>单一意志</Soft>（法人机关），非成员共同意志</span>
              </div>
            </div>
          </div>
        </Enter>
        <Enter delay={160} from="up" style={{position: 'absolute', left: 40, top: 602, width: 1696, height: 130}}>
          <div style={{height: '100%', backgroundColor: C.tealMid, border: `2px solid ${C.copper}`, display: 'flex', alignItems: 'center', gap: 18, padding: '0 26px'}}>
            <span style={{padding: '5px 13px', backgroundColor: C.copper, color: C.teal, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>一注总诀</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.ivory}}>
              一出资就「分家」：人格<Soft color={C.copperPale}>分</Soft> · 财产<Soft color={C.copperPale}>分</Soft> · 责任<Soft color={C.copperPale}>分</Soft> · 意志<Soft color={C.copperPale}>分</Soft>
            </span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const ClassificationFoundationScene = () => {
  /* data-final-knowledge="for-profit-wing" data-final-knowledge="non-profit-wing" data-final-knowledge="special-wing" data-final-knowledge="foundation-donor-rights" data-final-knowledge="foundation-winding-rule" */
  return (
    <Shell code="02" kicker="法人分类" title="法人的分类：三翼屏风与基金会展柜">
      <div
        data-layout="classification-triptych-with-foundation-vitrine"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="for-profit-persons-pursue-gain-through-company-and-non-company-forms,non-profit-persons-cover-institutes-associations-and-donation-foundations,special-persons-serve-public-interest-in-four-fixed-forms,public-foundations-never-distribute-surplus-to-their-settlors"
        data-focal-rule="purpose-decides-the-wing-and-public-goods-never-flow-back-to-settlors"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="for-profit-wing" style={{position: 'absolute', left: 40, top: 0, width: 552, height: 320}}>
          <div style={{height: '100%', backgroundColor: C.ivory, border: `3px solid ${C.copper}`, display: 'flex', flexDirection: 'column', gap: 10, padding: '14px 18px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <Briefcase size={30} color={C.copper} strokeWidth={2.4} />
              <Boss tone={C.copper}>营利法人</Boss>
              <Chip tone={C.copper} toneBg={C.copperPale}>企业法人</Chip>
            </div>
            <div style={{fontSize: 21.5, fontWeight: 900, color: C.ink}}>
              目的＝<Soft color={C.copper}>以营利</Soft>为目的
            </div>
            <div style={{display: 'flex', gap: 8, flexWrap: 'wrap'}}>
              <Chip tone={C.copper} toneBg={C.copperPale}>公司法人</Chip>
              <Chip tone={C.copper} toneBg={C.copperPale}>非公司法人</Chip>
            </div>
            <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 900, color: C.inkSoft}}>典型：有限责任公司 · 股份有限公司</div>
          </div>
        </Enter>
        <Enter delay={28} from="up" marker="non-profit-wing" style={{position: 'absolute', left: 612, top: 0, width: 552, height: 320}}>
          <div style={{height: '100%', backgroundColor: C.ivory, border: `3px solid ${C.peacock}`, display: 'flex', flexDirection: 'column', gap: 8, padding: '14px 18px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <HeartHandshake size={30} color={C.peacock} strokeWidth={2.4} />
              <Boss tone={C.peacock}>非营利法人</Boss>
            </div>
            <div style={{fontSize: 20.5, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
              目的＝<Soft color={C.peacock}>不以营利</Soft>为目的 · 三类：
            </div>
            <div style={{fontSize: 20, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
              ① <Under color={C.peacock} delay={70}>事业单位</Under>（公立学校·医院＝公益法人）
            </div>
            <div style={{fontSize: 20, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
              ② <Under color={C.peacock} delay={90}>社会团体</Under>（律师协会·中国法学会）
            </div>
            <div style={{fontSize: 20, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
              ③ <Under color={C.peacock} delay={110}>捐助法人</Under>（基金会·社会服务机构·宗教场所）
            </div>
            <div style={{marginTop: 'auto', fontSize: 19.5, fontWeight: 900, color: C.inkSoft, lineHeight: 1.45}}>成立：事业单位·社会团体＝登记或成立之日 · 捐助法人＝登记时（民政）</div>
          </div>
        </Enter>
        <Enter delay={52} from="right" marker="special-wing" style={{position: 'absolute', left: 1184, top: 0, width: 552, height: 320}}>
          <div style={{height: '100%', backgroundColor: C.ivory, border: `3px solid ${C.berry}`, display: 'flex', flexDirection: 'column', gap: 8, padding: '14px 18px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <Landmark size={30} color={C.berry} strokeWidth={2.4} />
              <Boss tone={C.berry}>特别法人</Boss>
            </div>
            <div style={{fontSize: 20.5, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
              目的＝承担<Soft color={C.berry}>社会公共利益</Soft>等特殊目的 · 四类：
            </div>
            <div style={{fontSize: 20, fontWeight: 900, color: C.ink, lineHeight: 1.55}}>
              ① 机关法人——有独立经费，从<Soft color={C.berry}>成立之日</Soft>起取得资格，可为履职需要从事民事活动
            </div>
            <div style={{fontSize: 20, fontWeight: 900, color: C.ink, lineHeight: 1.55}}>
              ② 农村集体经济组织法人 ③ 城镇农村的合作经济组织法人
            </div>
            <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
              ④ 基层群众性自治组织法人（<Soft color={C.berry}>居委会 · 村委会</Soft>）
            </div>
          </div>
        </Enter>
        <Enter delay={100} from="up" marker="foundation-donor-rights" style={{position: 'absolute', left: 40, top: 336, width: 832, height: 240}}>
          <div style={{height: '100%', backgroundColor: C.ivoryDim, border: `3px solid ${C.sand}`, display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <Gem size={28} color={C.sand} strokeWidth={2.4} />
              <Boss tone={C.sand}>基金会捐助人 · 两权</Boss>
            </div>
            <div style={{fontSize: 20, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
              ① <Under color={C.sand} delay={130}>知情权</Under>：查询捐助财产的使用 · 管理情况＋提意见建议 → 法人应及时如实答复
            </div>
            <div style={{fontSize: 20, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
              ② <Under color={C.sand} delay={160}>决定撤销权</Under>：程序违反法律·行政法规·章程 或 内容违反章程 → 请求法院撤销
            </div>
            <div style={{marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 10, fontSize: 19.5, fontWeight: 900, color: C.ink}}>
              <Seal delay={200} size={17} tone={C.peacock}>善意相对人法律关系不受影响 🛡️</Seal>
              <span style={{color: C.inkSoft}}>学理：基金会＝财团法人</span>
            </div>
          </div>
        </Enter>
        <Enter delay={130} from="up" marker="foundation-winding-rule" style={{position: 'absolute', left: 904, top: 336, width: 832, height: 240}}>
          <div style={{height: '100%', backgroundColor: C.berryPale, border: `3px solid ${C.berry}`, display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <Boss tone={C.berry}>基金会终止 · 红线</Boss>
              <Chip tone={C.berry} toneBg={C.ivory} ink={C.berry}>公益目的</Chip>
            </div>
            <div style={{fontSize: 20.5, fontWeight: 900, color: C.ink, lineHeight: 1.5, backgroundColor: C.ivory, border: `3px dashed ${C.berry}`, padding: '8px 12px'}}>
              终止时绝对<Soft color={C.berry}>不得向</Soft>出资人 · 设立人 · 会员<Soft color={C.berry}>分配</Soft>剩余财产 ⛔
            </div>
            <div style={{fontSize: 20, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
              顺位：章程规定 / 权力机构决议 → 用于公益 · 无法处理 → 主管机关转给<Soft color={C.peacock}>宗旨相同相近</Soft>法人＋向社会公告
            </div>
            <div style={{marginTop: 'auto', fontSize: 19.5, fontWeight: 900, color: C.inkSoft}}>核心裁判规则＝近似原则（类似原则）⚖️</div>
          </div>
        </Enter>
        <Enter delay={180} from="up" style={{position: 'absolute', left: 40, top: 592, width: 1696, height: 130}}>
          <div style={{height: '100%', backgroundColor: C.tealMid, border: `2px solid ${C.copper}`, display: 'flex', alignItems: 'center', gap: 18, padding: '0 26px'}}>
            <span style={{padding: '5px 13px', backgroundColor: C.copper, color: C.teal, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>分翼口诀</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.ivory, lineHeight: 1.6}}>
              营利<Soft color={C.copperPale}>看目的</Soft> · 非营利<Soft color={C.copperPale}>看三类</Soft> · 特别<Soft color={C.copperPale}>看身份</Soft> —— 公益财产<Soft color={C.copperPale}>只进不出</Soft>（近似原则转公益）
            </span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const RegistrationIncubationScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="registry-precedence-rule" data-final-knowledge="beyond-scope-rule" data-final-knowledge="incubation-debt-fork" data-final-knowledge="huashang-case-verdicts"
     data-stateful-source="incubation-contract-ticket" data-stateful-terminal="incubation-contract-ticket" */
  const ticketTravel = prog(frame, 290, 40);
  const ticketX = interpolate(ticketTravel, [0, 1], [520, 1370], CLAMP);
  const ticketY = interpolate(ticketTravel, [0, 1], [346, 398], CLAMP);
  return (
    <Shell code="03" kicker="登记 · 设立中" title="法人登记与设立中的法人">
      <div
        data-layout="registry-counter-with-incubator-lane"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="registration-prevails-over-reality-against-bona-fide-third-parties,beyond-scope-contracts-stay-valid-absent-mandatory-violations,pre-formation-debts-fall-on-promoters-when-the-person-never-forms,formed-persons-take-contracts-made-in-incubation-name-or-by-choice"
        data-focal-rule="registration-shields-third-parties-and-the-name-on-the-contract-picks-the-debtor"
        data-focal-channels="connector,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="registry-precedence-rule" style={{position: 'absolute', left: 40, top: 0, width: 832, height: 110}}>
          <div style={{height: '100%', backgroundColor: C.ivory, border: `3px solid ${C.sand}`, display: 'flex', alignItems: 'center', gap: 14, padding: '0 20px'}}>
            <Stamp size={30} color={C.sand} strokeWidth={2.4} />
            <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
              <span style={{fontSize: 21, fontWeight: 950, color: C.ink}}>
                登记对抗：实际与登记不一致 → 实际<Under color={C.sand} delay={40}>不得对抗</Under>善意第三人（以登记为准）
              </span>
              <span style={{fontSize: 19.5, fontWeight: 900, color: C.inkSoft}}>换理事长案：乙公司<Seal delay={90} size={16} tone={C.peacock}>不能拒绝 ✓</Seal></span>
            </div>
          </div>
        </Enter>
        <Enter delay={24} from="right" marker="beyond-scope-rule" style={{position: 'absolute', left: 904, top: 0, width: 832, height: 110}}>
          <div style={{height: '100%', backgroundColor: C.ivory, border: `3px solid ${C.copper}`, display: 'flex', alignItems: 'center', gap: 14, padding: '0 20px'}}>
            <FileWarning size={30} color={C.copper} strokeWidth={2.4} />
            <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
              <span style={{fontSize: 21, fontWeight: 950, color: C.ink}}>
                超经营范围订合同：原则<Soft color={C.peacock}>有效</Soft>
              </span>
              <span style={{fontSize: 19.5, fontWeight: 900, color: C.ink}}>例外：违反法律·行政法规<Soft color={C.berry}>强制性规定</Soft> → 无效（特许经营）</span>
            </div>
          </div>
        </Enter>
        <Enter delay={60} from="up" marker="incubation-debt-fork" style={{position: 'absolute', left: 40, top: 126, width: 1696, height: 250}}>
          <div style={{height: '100%', backgroundColor: C.ivoryDim, border: `3px solid ${C.peacock}`, display: 'flex', alignItems: 'stretch', gap: 14, padding: '12px 18px'}}>
            <span style={{writingMode: 'vertical-rl', fontSize: 21, fontWeight: 950, color: C.peacock, letterSpacing: 3, flexShrink: 0}}>设立中的法人</span>
            <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 9}}>
              <div style={{fontSize: 20.5, fontWeight: 900, color: C.ink, lineHeight: 1.45}}>
                <Baby size={24} color={C.peacock} strokeWidth={2.4} style={{verticalAlign: '-4px', marginRight: 6}} />
                设立阶段 · 尚未取得法人资格 · 性质＝以<Soft color={C.peacock}>设立人</Soft>为成员的非法人组织
              </div>
              <div style={{display: 'flex', gap: 12, flex: 1}}>
                <div style={{flex: 1, backgroundColor: C.berryPale, border: `2px solid ${C.berry}`, padding: '9px 13px', fontSize: 20.5, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
                  <span style={{color: C.berry}}>法人未成立</span>：后果由<Soft color={C.berry}>设立人</Soft>承受 · 共同实施 → <Under color={C.berry} delay={130}>连带责任</Under>
                </div>
                <div style={{flex: 1.4, backgroundColor: C.peacockPale, border: `2px solid ${C.peacock}`, padding: '9px 13px', fontSize: 20.5, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
                  <span style={{color: C.peacock}}>法人已成立</span>（<Under color={C.peacock} delay={160}>成立后看名义</Under>）：以「设立中法人」名义 → <Soft color={C.peacock}>法人承受</Soft> ／ 以「自己名义」→ 第三人<Soft color={C.berry}>选择请求</Soft>法人或设立人
                </div>
              </div>
            </div>
          </div>
        </Enter>
        <Enter delay={120} from="up" marker="huashang-case-verdicts" style={{position: 'absolute', left: 40, top: 392, width: 1696, height: 190}}>
          <div style={{height: '100%', backgroundColor: C.ivory, border: `3px solid ${C.sand}`, display: 'flex', gap: 16, padding: '10px 18px'}}>
            <span style={{writingMode: 'vertical-rl', fontSize: 21, fontWeight: 950, color: C.sand, letterSpacing: 3, flexShrink: 0}}>华商电子案</span>
            <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', gap: 6, fontSize: 20.5, fontWeight: 900, color: C.ink}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <Chip tone={C.berry} toneBg={C.berryPale} ink={C.berry}>① 付款日届满·公司未成立</Chip>
                <span>甲乙对丙承担</span>
                <Seal delay={220} size={17}>连带付款义务 ✗</Seal>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <Chip tone={C.peacock} toneBg={C.peacockPale}>② 已成立·以「华商电子（筹）」名义</Chip>
                <span>由</span>
                <Seal delay={250} size={17} tone={C.peacock}>公司付款 ✓ 法人承受</Seal>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <Chip tone={C.sand} toneBg={C.sandPale}>③ 已成立·以自己名义</Chip>
                <span>丙有权</span>
                <Seal delay={280} size={17} tone={C.berry}>选择：公司 或 甲乙</Seal>
              </div>
            </div>
          </div>
        </Enter>
        <Enter delay={180} from="up" style={{position: 'absolute', left: 40, top: 598, width: 1696, height: 130}}>
          <div style={{height: '100%', backgroundColor: C.tealMid, border: `2px solid ${C.copper}`, display: 'flex', alignItems: 'center', gap: 18, padding: '0 26px'}}>
            <Handshake size={28} color={C.copperPale} strokeWidth={2.4} />
            <span style={{padding: '5px 13px', backgroundColor: C.copper, color: C.teal, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>设立口诀</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.ivory}}>
              未成立<Soft color={C.copperPale}>找设立人</Soft>（连带） · 成立之后<Soft color={C.copperPale}>看名义</Soft>——公司名义公司担 · 自己名义随便选
            </span>
          </div>
        </Enter>
        <span data-stateful-terminal="incubation-contract-ticket" style={{position: 'absolute', left: 1370, top: 398, display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${C.peacock}`, backgroundColor: C.peacockPale, padding: '5px 10px', fontSize: 19, fontWeight: 950, color: C.ink, opacity: prog(frame, 330, 14)}}>
          🏢 公司承受 ✓
        </span>
        <div data-stateful-source="incubation-contract-ticket" style={{position: 'absolute', left: ticketX, top: ticketY, opacity: prog(frame, 260, 14) * (1 - prog(frame, 316, 14)), visibility: frame >= 334 ? 'hidden' : 'visible'}}>
          <Chip tone={C.copper} toneBg={C.ivory}>合同票 · 甲乙与丙订房屋买卖合同</Chip>
        </div>
      </div>
    </Shell>
  );
};
