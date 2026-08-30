import type {CSSProperties, ReactNode} from 'react';
import {Ban, Clock, Coins, Eye, FileSignature, Landmark, Percent, Scale, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  fee: '#33302A',
  feeDeep: '#272520',
  panel: '#F0EBDA',
  panelDim: '#E1DCC7',
  edge: '#6B6459',
  ink: '#282420',
  inkSoft: '#5B5449',
  abacus: '#C0983E',
  risk: '#B04834',
  guidance: '#4E7D74',
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
      backgroundColor: C.fee,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `radial-gradient(1100px 460px at 50% -8%, rgba(192, 152, 62, 0.12), transparent 72%), repeating-linear-gradient(0deg, transparent 0 112px, rgba(39, 37, 32, 0.55) 112px 115px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.abacus}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.feeDeep, borderLeft: `8px solid ${C.risk}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 76 · {code}</span>
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
        borderBottom: `2px solid ${C.abacus}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.abacus, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone, watermark}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string; readonly watermark?: ReactNode}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.guidance}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.guidance}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.guidance}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.guidance}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

const FeeTab = ({children, bar = C.risk, icon}: {readonly children: ReactNode; readonly bar?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.feeDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

const FeeStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(39, 37, 32, 0.94)', border: `2px solid ${C.abacus}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Mark = ({children, color = C.risk}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

const AbacusSeal = ({children, tone = C.abacus, delay = 0}: {readonly children: ReactNode; readonly tone?: string; readonly delay?: number}) => {
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

export const PrinciplesStandardScene = () => {
  /* data-final-knowledge="principles-standard" */
  const principles = ['公开公平原则', '自愿有偿原则', '诚实信用原则', '统一收费原则', '接受监督原则'];
  const guidance = ['刑事案件：犯罪嫌疑人·被告人的辩护人，自诉人·被害人的代理人', '劳动报酬·工伤赔偿·赡养费·抚养费·扶养费·抚恤金·救济金·社保待遇·最低生活保障的民行诉讼代理，安全事故·环境污染·征地拆迁等公共利益群体性诉讼代理', '公民请求国家赔偿案件的代理人'];
  return (
    <Shell code="01" kicker="收费原则 · 收费标准" title="律师收费的原则与标准">
      <div
        data-layout="principles-plus-dual-price"
        data-visual-anchor="main center"
        data-text-treatments="principle-chips,price-columns"
        data-visual-grammar="principle-row,market-column,guidance-column"
        data-focal-rule="guidance-price-for-three-case-types"
        data-focal-channels="five-principles,guidance-price-cases"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="principles-standard" style={{position: 'absolute', left: 0, top: 0, width: 1776}}>
          <Panel tone={C.abacus} watermark={<Scale size={160} color={C.abacus} strokeWidth={1.6} />} style={{height: 128, padding: '12px 22px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <FeeTab bar={C.abacus} icon={<Scale size={26} color={C.paper} strokeWidth={2.2} />}>律师收费原则（五原则）</FeeTab>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8}}>
              {principles.map((line, index) => (
                <div key={line} style={{fontSize: 22, fontWeight: 900, color: C.ink, backgroundColor: C.panelDim, borderTop: `5px solid ${C.abacus}`, padding: '10px 10px', textAlign: 'center'}}>{line}</div>
              ))}
            </div>
          </Panel>
        </Enter>
        <Enter delay={50} from="left" style={{position: 'absolute', left: 0, top: 152, width: 866, height: 456}}>
          <Panel tone={C.guidance} watermark={<Landmark size={180} color={C.guidance} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <FeeTab bar={C.guidance} icon={<Landmark size={26} color={C.paper} strokeWidth={2.2} />}>政府指导价（三类案件）</FeeTab>
            {guidance.map((line, index) => (
              <div key={line} style={{fontSize: 21, fontWeight: 860, color: C.ink, lineHeight: 1.5, backgroundColor: `${C.guidance}14`, borderLeft: `5px solid ${C.guidance}`, padding: '8px 11px'}}>
                <span style={{color: C.guidance, fontWeight: 950, marginRight: 6}}>{index + 1}.</span>
                {line}
              </div>
            ))}
          </Panel>
        </Enter>
        <Enter delay={80} from="right" style={{position: 'absolute', left: 910, top: 152, width: 866, height: 456}}>
          <Panel tone={C.abacus} watermark={<Users size={180} color={C.abacus} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <FeeTab bar={C.abacus} icon={<Users size={26} color={C.paper} strokeWidth={2.2} />}>市场调节价 + 收费类别</FeeTab>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.5, backgroundColor: `${C.abacus}16`, borderLeft: `5px solid ${C.abacus}`, padding: '8px 12px'}}>
              除政府指导价三类案件外，其余实行<Mark color={C.abacus}>市场调节价</Mark>
            </div>
            <IconChip icon={<Coins size={28} color={C.paper} strokeWidth={2.2} />} tone={C.abacus} title="费用类别：">
              律师费 ＋ 办案费用（司法·行政·仲裁·鉴定·公证等部门收取的费用；合理的通信·复印·翻译·交通·食宿费；经委托人同意的专家论证费；委托人同意支付的其他费用）—— 办案费用由委托人在律师费之外<Mark color={C.abacus}>另行支付</Mark>
            </IconChip>
            <div style={{fontSize: 22, fontWeight: 880, color: C.inkSoft}}>律师对需由委托人承担的律师费以外的费用，应本着节俭原则合理使用</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const RiskModeScene = () => {
  /* data-final-knowledge="risk-mode-rules" */
  const forbids = ['婚姻、继承案件', '请求给予社会保险待遇或最低生活保障待遇的', '请求给付赡养费·抚养费·扶养费·抚恤金·救济金·工伤赔偿的', '请求支付劳动报酬的等', '刑事诉讼·行政诉讼·国家赔偿·群体性诉讼案件禁止风险代理'];
  return (
    <Shell code="02" kicker="风险代理 · 收费方式" title="风险代理与收费方式">
      <div
        data-layout="risk-forbid-plus-modes"
        data-visual-anchor="main center"
        data-text-treatments="forbid-seals,mode-chips"
        data-visual-grammar="risk-panel,mode-panel"
        data-focal-rule="eighteen-percent-cap-and-forbidden-risk-agency"
        data-focal-channels="risk-forbids,eighteen-percent-cap"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="risk-mode-rules" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 560}}>
          <Panel tone={C.risk} watermark={<Ban size={190} color={C.risk} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <FeeTab bar={C.risk} icon={<Percent size={26} color={C.paper} strokeWidth={2.2} />}>风险代理</FeeTab>
            <IconChip icon={<Percent size={28} color={C.paper} strokeWidth={2.2} />} tone={C.abacus} title="可实行：">
              涉及财产关系的民事案件，委托人被告知政府指导价后<Mark color={C.abacus}>仍要求实行风险代理</Mark>的，律所可以实行风险代理收费
            </IconChip>
            <IconChip icon={<Ban size={28} color={C.paper} strokeWidth={2.2} />} tone={C.risk} title="禁止情形：">
              {forbids.join('；')}
            </IconChip>
            <IconChip icon={<Percent size={28} color={C.paper} strokeWidth={2.2} />} tone={C.risk} title="最高额限制：">
              最高收费金额不得高于收费合同约定标的额的 <AbacusSeal tone={C.risk} delay={160}>18%</AbacusSeal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={30} from="right" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 560}}>
          <Panel tone={C.guidance} watermark={<Clock size={190} color={C.guidance} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 11}}>
            <FeeTab bar={C.guidance} icon={<Clock size={26} color={C.paper} strokeWidth={2.2} />}>收费方式（三种）</FeeTab>
            <IconChip icon={<FileSignature size={28} color={C.paper} strokeWidth={2.2} />} tone={C.guidance} title="计件收费：">
              一般适用于<Mark color={C.guidance}>不涉及财产关系</Mark>的法律事务
            </IconChip>
            <IconChip icon={<Coins size={28} color={C.paper} strokeWidth={2.2} />} tone={C.abacus} title="按标的额比例收费：">
              适用于<Mark color={C.abacus}>涉及财产关系</Mark>的法律事务
            </IconChip>
            <IconChip icon={<Clock size={28} color={C.paper} strokeWidth={2.2} />} tone={C.risk} title="计时收费：">
              可适用于<Mark color={C.risk}>全部法律事务</Mark>；采用计时收费的，应当根据委托人的要求<Mark color={C.risk}>提供工作记录清单</Mark>
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const CollectSuperviseScene = () => {
  /* data-final-knowledge="collect-supervise" */
  const collects = ['接受委托应与委托人签订律师服务收费合同，或在委托代理合同中载明收费条款', '律师不得私自收案·收费', '委托人所支付的费用应直接交付律师所在的律师事务所，律师不得直接向委托人收取', '委托人委托律师代交费用的，应及时交付律师事务所', '律所不得向委托人开具非正式的律师收费凭证', '律师不得索要或获取规定之外额外报酬或利益'];
  const violations = ['不按规定公示《律师服务收费管理办法》和收费标准', '提前或推迟执行政府指导价', '超出政府指导价范围或幅度收费', '分解收费项目·重复收费·扩大范围变相提高收费标准', '以明显低于成本的收费进行不正当竞争', '其他价格违法行为'];
  return (
    <Shell code="03" kicker="确定收取 · 减免 · 监督检查" title="收费的确定收取与监督">
      <div
        data-layout="collect-plus-supervision"
        data-visual-anchor="main center"
        data-text-treatments="collect-rows,supervision-chips"
        data-visual-grammar="collect-panel,remission-panel,supervision-panel"
        data-focal-rule="never-privately-collect-pay-directly-to-firm"
        data-focal-channels="collect-rules,six-violations"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="collect-supervise" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 366}}>
          <Panel tone={C.abacus} watermark={<FileSignature size={180} color={C.abacus} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <FeeTab bar={C.abacus} icon={<FileSignature size={26} color={C.paper} strokeWidth={2.2} />}>收费的确定与收取</FeeTab>
            {collects.map((line, index) => (
              <div key={line} style={{fontSize: 20, fontWeight: 860, color: C.ink, lineHeight: 1.42, backgroundColor: C.panelDim, borderLeft: `5px solid ${C.abacus}`, padding: '6px 10px'}}>
                <span style={{color: C.abacus, fontWeight: 950, marginRight: 5}}>{index + 1}.</span>
                {line}
              </div>
            ))}
          </Panel>
        </Enter>
        <Enter delay={30} from="right" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 366}}>
          <Panel tone={C.guidance} watermark={<Coins size={180} color={C.guidance} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <FeeTab bar={C.guidance} icon={<Coins size={26} color={C.paper} strokeWidth={2.2} />}>律师收费的减免</FeeTab>
            <IconChip icon={<Ban size={28} color={C.paper} strokeWidth={2.2} />} tone={C.risk} title="法律援助案件：">
              接受指派办理法律援助案件，<Mark color={C.risk}>不得向受援人收取任何费用</Mark>
            </IconChip>
            <IconChip icon={<Scale size={28} color={C.paper} strokeWidth={2.2} />} tone={C.guidance} title="酌情减免：">
              经济确有困难但不符合法律援助范围的公民，律所可以<Mark color={C.guidance}>酌情减收或免收</Mark>律师服务费
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={110} from="up" style={{position: 'absolute', left: 0, top: 390, width: 1776}}>
          <Panel tone={C.risk} watermark={<Eye size={180} color={C.risk} strokeWidth={1.6} />} style={{height: 220, padding: '12px 22px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <FeeTab bar={C.risk} icon={<Eye size={26} color={C.paper} strokeWidth={2.2} />}>价格主管部门监督检查（六类价格违法行为 → 行政处罚）</FeeTab>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7}}>
              {violations.map((line, index) => (
                <div key={line} style={{fontSize: 21, fontWeight: 860, color: C.ink, lineHeight: 1.42, backgroundColor: `${C.risk}12`, borderLeft: `5px solid ${C.risk}`, padding: '7px 11px'}}>
                  <span style={{color: C.risk, fontWeight: 950, marginRight: 5}}>{index + 1}.</span>
                  {line}
                </div>
              ))}
            </div>
          </Panel>
        </Enter>
        <Enter delay={150} from="up" style={{position: 'absolute', left: 0, top: 634, width: 1776}}>
          <FeeStrip style={{height: 60}}>
            <Coins size={38} color={C.abacus} strokeWidth={2.2} />
            <span style={{padding: '3px 12px', backgroundColor: C.risk, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>点睛</span>
            <span style={{fontSize: 23, fontWeight: 950, color: C.paper}}>
              不得私自收案·收费；费用直交律所；风险代理上限 18%
            </span>
          </FeeStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const LawyerFees = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-principles-standard" {...SCENES.principlesStandard}>
      <PrinciplesStandardScene />
    </TimelineSequence>
    <TimelineSequence name="02-risk-mode" {...SCENES.riskMode}>
      <RiskModeScene />
    </TimelineSequence>
    <TimelineSequence name="03-collect-supervise" {...SCENES.collectSupervise}>
      <CollectSuperviseScene />
    </TimelineSequence>
  </AbsoluteFill>
);
