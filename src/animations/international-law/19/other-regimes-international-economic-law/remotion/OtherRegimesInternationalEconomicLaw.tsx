import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {Ban, Banknote, Coins, Gavel, Landmark, ScrollText, ShieldCheck, XCircle} from 'lucide-react';
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

const HALL_CODES = ['壹', '贰', '叁', '肆', '伍'];

const GalleryShell = ({
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
      backgroundColor: PALETTE.celadon,
      backgroundImage:
        'repeating-linear-gradient(90deg, rgba(37,66,55,0.04) 0 1px, transparent 1px 92px), radial-gradient(circle at 10% 8%, rgba(46,125,110,0.1), transparent 30%)',
      overflow: 'hidden',
    }}
  >
    <div style={{position: 'absolute', inset: 22, border: `2px solid ${PALETTE.glaze}`}} />
    <div style={{position: 'absolute', inset: 28, border: `1px solid ${PALETTE.line}`}} />
    <header style={{position: 'absolute', left: 64, right: 64, top: 44, height: 104, display: 'flex', alignItems: 'center', gap: 24, borderBottom: `3px solid ${PALETTE.glaze}`}}>
      <div style={{width: 74, height: 74, borderRadius: 37, border: `3px dashed ${PALETTE.ochre}`, backgroundColor: PALETTE.panel, display: 'grid', placeItems: 'center'}}>
        <Landmark size={30} color={PALETTE.glaze} />
      </div>
      <h1 className="font-animation-title" style={{fontSize: 42, lineHeight: 1.1, margin: 0, fontWeight: 800, color: PALETTE.ink}}>
        {title}
      </h1>
      <div style={{marginLeft: 'auto', textAlign: 'right'}}>
        <div style={{fontSize: 16, fontWeight: 700, letterSpacing: 4, color: PALETTE.muted}}>CELADON CONVENTION GALLERY · 三国法</div>
        <div style={{fontSize: 18, color: PALETTE.muted, marginTop: 6}}>国际经济法其他制度 · {HALL_CODES[code]}号展厅</div>
      </div>
    </header>
    <div style={{position: 'absolute', left: 66, top: 205, width: 104, height: 615, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
      {[0, 1, 2, 3, 4].map((index) => {
        const active = index === station;
        return (
          <div
            key={index}
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              border: `2px dashed ${active ? PALETTE.glaze : PALETTE.line}`,
              backgroundColor: active ? PALETTE.glaze : PALETTE.panel,
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <span className="font-animation-mono" style={{fontSize: 18, fontWeight: 700, color: active ? PALETTE.panel : PALETTE.muted}}>{String(index + 1).padStart(2, '0')}</span>
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

const Chip = ({children, color = PALETTE.glaze}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 6, border: `1px solid ${PALETTE.line}`, borderLeft: `5px solid ${color}`, backgroundColor: PALETTE.panel, padding: '5px 12px', fontSize: 22, lineHeight: 1.35}}>
    {children}
  </span>
);

const GalleryStamp = ({delay, frame, text, color = PALETTE.glaze}: {readonly delay: number; readonly frame: number; readonly text: string; readonly color?: string}) => (
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
      backgroundColor: 'rgba(234,241,235,0.92)',
    }}
  >
    {text}
  </span>
);

/* Concept tokens: recurring pictograms recorded in visual-direction.json conceptTokens. */
const TokTreaty = ({size = 19}: {readonly size?: number}) => (
  <ScrollText size={size} strokeWidth={2.4} color={PALETTE.glaze} style={{display: 'inline-block', verticalAlign: '-3px'}} />
);
const TokCourt = ({size = 19}: {readonly size?: number}) => (
  <Gavel size={size} strokeWidth={2.4} color={PALETTE.plum} style={{display: 'inline-block', verticalAlign: '-3px'}} />
);

export const ParisBerneScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="paris-principles" data-final-knowledge="berne-principles" */
  const frame = useCurrentFrame();
  return (
    <GalleryShell code={0} station={0} title="巴黎公约 × 伯尔尼公约">
      <div
        data-layout="twin-convention-cards"
        data-visual-anchor="role-pair"
        data-visual-grammar="paris-guards-industrial-property-with-priority-windows,berne-protects-copyright-automatically-via-dual-nationality,independence-principle-shared-by-both"
        data-text-treatments="label-block,soft-highlight,thin-underline,chip"
        data-focal-rule="priority-windows-12-and-6-months"
        data-focal-channels="contrast,enclosure,locator,icon"
        style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}
      >
        <div style={{display: 'flex', gap: 22, marginTop: 4}}>
          <div
            data-final-knowledge="paris-principles"
            style={{...enterX(frame, 14, 46), flex: 1.1, borderTop: `14px solid ${PALETTE.glaze}`, backgroundColor: PALETTE.panel, padding: '34px 30px', fontSize: 22, lineHeight: 1.95}}
          >
            <div style={{fontSize: 26, fontWeight: 800, color: PALETTE.glaze, display: 'flex', alignItems: 'center', gap: 10}}>
              <ScrollText size={24} color={PALETTE.glaze} />
              巴黎公约 · 工业产权 <TokTreaty />
            </div>
            <div style={{marginTop: 12}}>
              国民待遇：缔约国国民＋在缔约国有
              <Ink color={PALETTE.glazeSoft}>住所或营业所</Ink>
              的非缔约国国民；
              <Under color={PALETTE.plum}>程序方面允许例外</Under>
              <br />
              优先权：在后申请的申请日均视为
              <Ink color={PALETTE.glazeSoft}>首次申请日</Ink>
              ——发明·实用新型
              <Under color={PALETTE.glaze}>12 个月</Under>
              ，外观设计·商标
              <Under color={PALETTE.ochre}>6 个月</Under>
              <br />
              临时保护：国际展览会
              <Ink color={PALETTE.ochreSoft}>展出之日</Ink>
              即优先权日；独立性：依
              <Under color={PALETTE.glaze}>保护国国内法</Under>
              各自审查
            </div>
          </div>
          <div
            data-final-knowledge="berne-principles"
            style={{...enterX(frame, 46, 46), flex: 1, borderTop: `14px solid ${PALETTE.ochre}`, backgroundColor: PALETTE.panel, padding: '34px 30px', fontSize: 22, lineHeight: 1.95}}
          >
            <div style={{fontSize: 26, fontWeight: 800, color: PALETTE.ochre}}>伯尔尼公约 · 著作权</div>
            <div style={{marginTop: 12}}>
              双国籍国民待遇：
              <Ink color={PALETTE.glazeSoft}>作者国籍</Ink>
              （成员国国民或惯常居所）＋
              <Ink color={PALETTE.ochreSoft}>作品国籍</Ink>
              （成员国首次出版或 30 天内同时出版）
              <br />
              自动保护：不履行
              <Under color={PALETTE.ochre}>任何手续</Under>
              <br />
              独立性：不受作品来源国限制
            </div>
          </div>
        </div>
        <div style={{...enter(frame, 160), display: 'flex', justifyContent: 'center', whiteSpace: 'nowrap'}}>
          <GalleryStamp delay={160} frame={frame} text={'优先权靠「在先申请」而非「在先获权」——须申请并提交证明'} />
        </div>
      </div>
    </GalleryShell>
  );
};

export const TripsUpgradeScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="trips-features" data-final-knowledge="trips-incorporated-conventions" data-final-knowledge="trips-upgrades" */
  const frame = useCurrentFrame();
  const conventions = ['巴黎公约', '伯尔尼公约（精神权利除外）', '罗马公约', '集成电路条约'];
  const upgrades = [
    {name: '专利', color: PALETTE.glaze, detail: '增专利进口权、许诺销售权；期限≥申请日起 20 年'},
    {name: '商标', color: PALETTE.ochre, detail: '扩大驰名商标保护：商品＋服务标志，绝对（跨类）保护'},
    {name: '著作权', color: PALETTE.plum, detail: '增计算机程序、数据汇编；增出租权（程序与电影）'},
    {name: '地理标志', color: PALETTE.glaze, detail: '禁止不正当竞争使用或注册为商标'},
  ];
  return (
    <GalleryShell code={1} station={1} title="TRIPS：纳入与拔高">
      <div
        data-layout="trips-tiered-shelves"
        data-visual-anchor="typographic-sequence"
        data-visual-grammar="trips-first-brings-most-favoured-treatment-into-ip,enforces-civil-administrative-criminal-procedures,raises-protection-on-top-of-four-conventions"
        data-text-treatments="label-block,chip,thin-underline,soft-highlight"
        data-focal-rule="most-favoured-treatment-not-national-treatment-is-trips-first"
        data-focal-channels="contrast,enclosure,locator,icon"
        style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}
      >
        <div
          data-final-knowledge="trips-features"
          style={{...enter(frame, 12), display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginTop: 4}}
        >
          <Tag color={PALETTE.glaze} text="三大特点" />
          <Chip color={PALETTE.plum}>首次纳入最惠国待遇原则</Chip>
          <Chip color={PALETTE.glaze}>执法措施：民事·行政·刑事</Chip>
          <Chip color={PALETTE.ochre}>争端纳入 WTO 机制</Chip>
        </div>
        <div
          data-final-knowledge="trips-incorporated-conventions"
          style={{...enter(frame, 60), border: `3px solid ${PALETTE.ochre}`, backgroundColor: PALETTE.panel, padding: '18px 24px'}}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap'}}>
            <span style={{fontSize: 23, fontWeight: 800, color: PALETTE.ochre}}>纳入四公约 <TokTreaty /></span>
            {conventions.map((convention, index) => (
              <span key={convention} style={{...enterX(frame, 76 + index * 10, 20)}}>
                <Chip color={PALETTE.ochre}>{convention}</Chip>
              </span>
            ))}
          </div>
        </div>
        <div style={{display: 'flex', gap: 16}}>
          {upgrades.map((upgrade) => (
            <div
              key={upgrade.name}
              data-final-knowledge="trips-upgrades"
              style={{...enterX(frame, 120 + upgrades.indexOf(upgrade) * 16, 34), flex: 1, borderTop: `10px solid ${upgrade.color}`, backgroundColor: PALETTE.panel, padding: '16px 18px', fontSize: 22, lineHeight: 1.6}}
            >
              <div style={{fontSize: 24, fontWeight: 800, color: upgrade.color}}>{upgrade.name}</div>
              <div style={{marginTop: 6}}>{upgrade.detail}</div>
            </div>
          ))}
        </div>
        <div style={{...enter(frame, 200), display: 'flex', justifyContent: 'center', whiteSpace: 'nowrap'}}>
          <GalleryStamp delay={200} frame={frame} color={PALETTE.plum} text={'TRIPS 在我国转化适用 —— 符合我国知产法即符合 TRIPS'} />
        </div>
      </div>
    </GalleryShell>
  );
};

export const MigaIcsidScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="miga-essentials" data-final-knowledge="miga-risks" data-final-knowledge="icsid-essentials" data-final-knowledge="icsid-award-effect" */
  const frame = useCurrentFrame();
  const risks = ['货币汇兑险', '征收和类似措施险', '战争内乱险', '政府违约险'];
  return (
    <GalleryShell code={2} station={2} title="MIGA 担保 × ICSID 仲裁">
      <div
        data-layout="twin-mechanism-gates"
        data-visual-anchor="boundary"
        data-visual-grammar="miga-insures-political-risk-for-into-developing-hosts,icsid-hears-one-public-one-private-consent-disputes,icsid-awards-are-final-and-exclude-other-remedies"
        data-text-treatments="label-block,chip,thin-underline,soft-highlight"
        data-focal-rule="insure-first-invest-later-host-consent-required"
        data-focal-channels="enclosure,contrast,locator,icon"
        style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}
      >
        <div style={{display: 'flex', gap: 22, marginTop: 4}}>
          <div
            data-final-knowledge="miga-essentials"
            style={{...enterX(frame, 14, 46), flex: 1.15, borderTop: `14px solid ${PALETTE.glaze}`, backgroundColor: PALETTE.panel, padding: '30px 28px', fontSize: 22, lineHeight: 1.85}}
          >
            <div style={{fontSize: 26, fontWeight: 800, color: PALETTE.glaze, display: 'flex', alignItems: 'center', gap: 10}}>
              <ShieldCheck size={24} color={PALETTE.glaze} />
              多边投资担保机构 MIGA
            </div>
            <div style={{marginTop: 10}}>
              合格投资者：东道国
              <Ink color={PALETTE.glazeSoft}>以外</Ink>
              自然人或法人（特殊可为东道国的）
              <br />
              合格投资：
              <Under color={PALETTE.glaze}>先投保、后投资</Under>
              ＋经
              <Under color={PALETTE.ochre}>东道国同意</Under>
              ；合格东道国＝
              <Ink color={PALETTE.ochreSoft}>发展中会员国</Ink>
              <br />
              理赔以
              <Ink color={PALETTE.glazeSoft}>用尽东道国行政救济</Ink>
              为条件；赔付即获
              <Under color={PALETTE.plum}>代位求偿权</Under>
            </div>
            <div data-final-knowledge="miga-risks" style={{display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10}}>
              {risks.map((risk) => (
                <Chip key={risk} color={PALETTE.glaze}>{risk}</Chip>
              ))}
            </div>
          </div>
          <div
            data-final-knowledge="icsid-essentials"
            style={{...enterX(frame, 46, 46), flex: 1, borderTop: `14px solid ${PALETTE.plum}`, backgroundColor: PALETTE.panel, padding: '30px 28px', fontSize: 22, lineHeight: 1.85}}
          >
            <div style={{fontSize: 26, fontWeight: 800, color: PALETTE.plum, display: 'flex', alignItems: 'center', gap: 10}}>
              <Landmark size={24} color={PALETTE.plum} />
              解决投资争端中心 ICSID
            </div>
            <div style={{marginTop: 10}}>
              管辖三条件：主体
              <Ink color={PALETTE.plumSoft}>一公一私</Ink>
              （东道国 × 外国投资者或受外资控制的东道国法人）＋客体
              <Ink color={PALETTE.plumSoft}>国际投资法律争端</Ink>
              ＋双方
              <Under color={PALETTE.plum}>书面同意</Under>
              <br />
              排他：排除他诉与
              <Under color={PALETTE.plum}>母国外交保护</Under>
              ；法律适用＝意思自治（东道国法或国际法；可依公平善意）
            </div>
          </div>
        </div>
        <div style={{...enter(frame, 170), display: 'flex', justifyContent: 'center', whiteSpace: 'nowrap'}}>
          <GalleryStamp delay={170} frame={frame} color={PALETTE.plum} text={'ICSID 裁决一裁终局有约束力 —— 但不可依《纽约公约》在我国执行'} />
          <TokCourt size={26} />
        </div>
      </div>
    </GalleryShell>
  );
};

export const LoansGuaranteesScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="syndicated-loan" data-final-knowledge="demand-guarantee-traits" data-final-knowledge="other-guarantees" */
  const frame = useCurrentFrame();
  return (
    <GalleryShell code={3} station={3} title="国际贷款与见索即付保函">
      <div
        data-layout="lending-shelves-with-guarantee-gate"
        data-visual-anchor="flow-path"
        data-visual-grammar="syndicated-loan-pools-lenders-on-uniform-terms,demand-guarantee-pays-on-surface-match-alone,fraud-stop-order-needs-court-and-evidence"
        data-text-treatments="label-block,chip,thin-underline,soft-highlight"
        data-focal-rule="demand-guarantee-independent-joint-unconditional"
        data-focal-channels="connector,contrast,enclosure,icon"
        style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}
      >
        <div style={{display: 'flex', gap: 18, marginTop: 4}}>
          <div
            data-final-knowledge="syndicated-loan"
            style={{...enterX(frame, 12, 42), flex: 1.35, borderTop: `12px solid ${PALETTE.glaze}`, backgroundColor: PALETTE.panel, padding: '18px 24px', fontSize: 22, lineHeight: 1.65}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.glaze}}>贷款方式速览 <Banknote size={21} color={PALETTE.glaze} style={{display: 'inline-block', verticalAlign: '-3px'}} /></div>
            <div style={{marginTop: 8}}>
              银团贷款：
              <Ink color={PALETTE.glazeSoft}>多家银行一个借款人</Ink>
              ＋
              <Under color={PALETTE.glaze}>统一贷款条件</Under>
              ；直接式＝牵头银行任
              <Ink color={PALETTE.glazeSoft}>代理人</Ink>
              ，间接式＝牵头银行
              <Ink color={PALETTE.glazeSoft}>贷款转让</Ink>
              <br />
              项目贷款：以项目建成后
              <Under color={PALETTE.ochre}>经济收益</Under>
              还本付息（周期长、风险大）；IMF 贷款＝帮成员
              <Ink color={PALETTE.glazeSoft}>国际收支平衡</Ink>
            </div>
          </div>
          <div
            data-final-knowledge="other-guarantees"
            style={{...enterX(frame, 40, 42), flex: 0.8, borderTop: `12px solid ${PALETTE.ochre}`, backgroundColor: PALETTE.panel, padding: '18px 22px', fontSize: 22, lineHeight: 1.65}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.ochre}}>其他融资担保</div>
            <div style={{marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-start'}}>
              <Chip color={PALETTE.ochre}>备用信用证＝独立连带保证</Chip>
              <Chip color={PALETTE.plum}>意愿书（安慰信）＝<XCircle size={18} color={PALETTE.plum} style={{display: 'inline-block', verticalAlign: '-2px'}} /> 无法律执行力</Chip>
              <Chip color={PALETTE.glaze}>浮动抵押＝价值不确定</Chip>
            </div>
          </div>
        </div>
        <div
          data-final-knowledge="demand-guarantee-traits"
          style={{...enter(frame, 100), border: `3px solid ${PALETTE.plum}`, backgroundColor: PALETTE.panel, padding: '20px 26px', fontSize: 22, lineHeight: 1.7}}
        >
          <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.plum, display: 'flex', alignItems: 'center', gap: 10}}>
            <Coins size={22} color={PALETTE.plum} />
            见索即付保函 · 三性
          </div>
          <div style={{display: 'flex', gap: 14, marginTop: 10, flexWrap: 'wrap'}}>
            <Chip color={PALETTE.plum}>独立性——不受基础合同影响</Chip>
            <Chip color={PALETTE.plum}>连带性——无先诉抗辩权</Chip>
            <Chip color={PALETTE.plum}>无条件性——单函单单表面一致即付</Chip>
          </div>
          <div style={{marginTop: 10}}>
            欺诈例外：止付令只能由
            <Ink color={PALETTE.plumSoft}>法院</Ink>
            <TokCourt />
            发出，须
            <Under color={PALETTE.plum}>确凿证据＋充分担保＋难以弥补损害＋开立人未善意付款</Under>
            ；履行纠纷＝合同规则、欺诈纠纷＝侵权规则
          </div>
        </div>
      </div>
    </GalleryShell>
  );
};

export const TaxRegimesScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="tax-jurisdiction-pair" data-final-knowledge="double-vs-overlap" data-final-knowledge="crs-exchange" */
  const frame = useCurrentFrame();
  return (
    <GalleryShell code={4} station={4} title="税收管辖权与 CRS">
      <div
        data-layout="tax-jurisdiction-comparison"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="resident-jurisdiction-taxes-worldwide-source-jurisdiction-taxes-local,repeated-taxation-same-taxpayer-overlap-two-taxpayers,crs-auto-exchanges-financial-accounts-yearly"
        data-text-treatments="label-block,chip,thin-underline,soft-highlight"
        data-focal-rule="evasion-illegal-versus-avoidance-legal"
        data-focal-channels="contrast,enclosure,locator,icon"
        style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}
      >
        <div style={{display: 'flex', gap: 20, marginTop: 4}}>
          <div
            data-final-knowledge="tax-jurisdiction-pair"
            style={{...enterX(frame, 12, 44), flex: 1, borderTop: `12px solid ${PALETTE.glaze}`, backgroundColor: PALETTE.panel, padding: '18px 24px', fontSize: 22, lineHeight: 1.65}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.glaze}}>居民税收管辖权 · 属人</div>
            <div style={{marginTop: 8}}>
              主体＝
              <Ink color={PALETTE.glazeSoft}>纳税居民</Ink>
              ；对象＝
              <Under color={PALETTE.glaze}>境内外所得</Under>
              （无限纳税义务）
            </div>
          </div>
          <div
            data-final-knowledge="tax-jurisdiction-pair"
            style={{...enterX(frame, 40, 44), flex: 1, borderTop: `12px solid ${PALETTE.ochre}`, backgroundColor: PALETTE.panel, padding: '18px 24px', fontSize: 22, lineHeight: 1.65}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.ochre}}>来源地税收管辖权 · 属地</div>
            <div style={{marginTop: 8}}>
              主体＝
              <Ink color={PALETTE.ochreSoft}>非纳税居民</Ink>
              ；对象＝
              <Under color={PALETTE.ochre}>来源于该国所得</Under>
              （有限义务）；营业所得按
              <Ink color={PALETTE.glazeSoft}>常设机构</Ink>
              从源征税
            </div>
          </div>
        </div>
        <div
          data-final-knowledge="double-vs-overlap"
          style={{...enter(frame, 100), border: `3px solid ${PALETTE.plum}`, backgroundColor: PALETTE.panel, padding: '18px 26px', fontSize: 22, lineHeight: 1.7}}
        >
          <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.plum}}>冲突光谱</div>
          <div style={{display: 'flex', gap: 14, marginTop: 10, flexWrap: 'wrap'}}>
            <Chip color={PALETTE.plum}>国际重复征税＝同一纳税人（税种相同）</Chip>
            <Chip color={PALETTE.plum}>国际重叠征税＝不同纳税人（公司与股东）</Chip>
            <Chip color={PALETTE.glaze}>国际逃税＝手段非法</Chip>
            <Chip color={PALETTE.glaze}>国际避税＝手段合法</Chip>
          </div>
          <div style={{marginTop: 10}}>
            解决：主要靠
            <Ink color={PALETTE.glazeSoft}>双边税收协定</Ink>
            <TokTreaty />
          </div>
        </div>
        <div
          data-final-knowledge="crs-exchange"
          style={{...enter(frame, 170), border: `3px dashed ${PALETTE.glaze}`, backgroundColor: PALETTE.panel, padding: '18px 26px', fontSize: 22, lineHeight: 1.7}}
        >
          <span style={{fontWeight: 800, color: PALETTE.glaze}}>CRS 共同申报准则：</span>
          <Ink color={PALETTE.glazeSoft}>自动</Ink>
          交换（无须申请）、
          <Under color={PALETTE.glaze}>每年一次</Under>
          、以
          <Ink color={PALETTE.ochreSoft}>税收居民身份</Ink>
          （非国籍）识别、
          <Under color={PALETTE.plum}>仅限金融账户信息</Under>
          （不含海外房产珠宝艺术品）
        </div>
      </div>
    </GalleryShell>
  );
};

export const OtherRegimesInternationalEconomicLaw = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: PALETTE.celadon, overflow: 'hidden'}}
  >
    <TimelineSequence name="01-paris-berne" {...SCENES.parisBerne}>
      <ParisBerneScene />
    </TimelineSequence>
    <TimelineSequence name="02-trips-upgrade" {...SCENES.tripsUpgrade}>
      <TripsUpgradeScene />
    </TimelineSequence>
    <TimelineSequence name="03-miga-icsid" {...SCENES.migaIcsid}>
      <MigaIcsidScene />
    </TimelineSequence>
    <TimelineSequence name="04-loans-guarantees" {...SCENES.loansGuarantees}>
      <LoansGuaranteesScene />
    </TimelineSequence>
    <TimelineSequence name="05-tax-regimes" {...SCENES.taxRegimes}>
      <TaxRegimesScene />
    </TimelineSequence>
  </AbsoluteFill>
);
