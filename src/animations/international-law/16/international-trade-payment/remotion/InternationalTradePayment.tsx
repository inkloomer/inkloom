import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {Ban, Banknote, FileText, Gavel, Hourglass, Landmark, Scale, ScrollText, ShieldCheck, XCircle} from 'lucide-react';
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

const COUNTER_CODES = ['壹', '贰', '叁', '肆'];

const DraftShell = ({
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
      backgroundColor: PALETTE.oxblood,
      backgroundImage:
        'repeating-linear-gradient(135deg, rgba(209,164,92,0.045) 0 2px, transparent 2px 36px), radial-gradient(circle at 10% 6%, rgba(138,166,193,0.1), transparent 30%)',
      overflow: 'hidden',
    }}
  >
    <div style={{position: 'absolute', inset: 22, border: `2px solid ${PALETTE.gold}`}} />
    <div style={{position: 'absolute', inset: 28, border: `1px solid ${PALETTE.line}`}} />
    <header style={{position: 'absolute', left: 64, right: 64, top: 44, height: 104, display: 'flex', alignItems: 'center', gap: 24, borderBottom: `3px solid ${PALETTE.gold}`}}>
      <div style={{width: 74, height: 74, borderRadius: 37, border: `3px dashed ${PALETTE.gold}`, display: 'grid', placeItems: 'center'}}>
        <Banknote size={30} color={PALETTE.gold} />
      </div>
      <h1 className="font-animation-title" style={{fontSize: 42, lineHeight: 1.1, margin: 0, fontWeight: 800, color: PALETTE.cream}}>
        {title}
      </h1>
      <div style={{marginLeft: 'auto', textAlign: 'right'}}>
        <div style={{fontSize: 16, fontWeight: 700, letterSpacing: 4, color: PALETTE.muted}}>OXBLOOD DRAFT HOUSE · 三国法</div>
        <div style={{fontSize: 18, color: PALETTE.muted, marginTop: 6}}>国际贸易支付 · {COUNTER_CODES[code]}号柜台</div>
      </div>
    </header>
    <div style={{position: 'absolute', left: 66, top: 210, width: 104, height: 610, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
      {[0, 1, 2, 3].map((index) => {
        const active = index === station;
        return (
          <div
            key={index}
            style={{
              width: 62,
              height: 62,
              borderRadius: 31,
              border: `2px dashed ${active ? PALETTE.gold : PALETTE.line}`,
              backgroundColor: active ? PALETTE.gold : PALETTE.panel,
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <span className="font-animation-mono" style={{fontSize: 18, fontWeight: 700, color: active ? PALETTE.oxblood : PALETTE.muted}}>{String(index + 1).padStart(2, '0')}</span>
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

const Chip = ({children, color = PALETTE.slate}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 6, border: `1px solid ${PALETTE.line}`, borderLeft: `5px solid ${color}`, backgroundColor: PALETTE.panel, padding: '5px 12px', fontSize: 22, lineHeight: 1.35}}>
    {children}
  </span>
);

const DraftStamp = ({delay, frame, text, color = PALETTE.gold}: {readonly delay: number; readonly frame: number; readonly text: string; readonly color?: string}) => (
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
      backgroundColor: 'rgba(58,22,32,0.75)',
    }}
  >
    {text}
  </span>
);

/* Concept tokens: recurring pictograms recorded in visual-direction.json conceptTokens. */
const TokBank = ({size = 19}: {readonly size?: number}) => (
  <Landmark size={size} strokeWidth={2.4} color={PALETTE.gold} style={{display: 'inline-block', verticalAlign: '-3px'}} />
);
const TokDocs = ({size = 19}: {readonly size?: number}) => (
  <FileText size={size} strokeWidth={2.4} color={PALETTE.slate} style={{display: 'inline-block', verticalAlign: '-3px'}} />
);
const TokCourt = ({size = 19}: {readonly size?: number}) => (
  <Gavel size={size} strokeWidth={2.4} color={PALETTE.copper} style={{display: 'inline-block', verticalAlign: '-3px'}} />
);

export const CollectionDeskScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="collection-basics" data-final-knowledge="collection-chain" data-final-knowledge="bank-three-neglects" data-final-knowledge="collection-types" */
  const frame = useCurrentFrame();
  const chain = ['委托人（卖方）', '托收行', '代收行', '付款人（买方）'];
  const neglects = [
    {name: '不管单据', detail: '单据实质免责；传递延误或遗失免责', color: PALETTE.gold},
    {name: '不管货物', detail: '货物免责', color: PALETTE.slate},
    {name: '不管票据追索', detail: '票据追索免责', color: PALETTE.copper},
  ];
  return (
    <DraftShell code={0} station={0} title="银行托收：商业信用代理链">
      <div
        data-layout="collection-chain-with-three-neglects"
        data-visual-anchor="flow-path"
        data-visual-grammar="collection-relays-through-principal-remitting-collecting-banks,banks-ignore-documents-goods-and-recourse,collection-splits-into-dp-and-da"
        data-text-treatments="label-block,chip,thin-underline,soft-highlight"
        data-focal-rule="collection-runs-on-commercial-credit-not-bank-credit"
        data-focal-channels="connector,contrast,enclosure,icon"
        style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}
      >
        <div
          data-final-knowledge="collection-basics"
          style={{...enter(frame, 12), display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', marginTop: 4}}
        >
          <Tag color={PALETTE.gold} text="基本制度" />
          <Chip color={PALETTE.gold}>依据：《托收统一规则》<ScrollText size={19} color={PALETTE.gold} style={{display: 'inline-block', verticalAlign: '-3px'}} />（国际商务惯例）</Chip>
          <Chip color={PALETTE.copper}>信用性质＝商业信用</Chip>
          <Chip color={PALETTE.slate}>银行责任＝代理收款 <TokBank /></Chip>
        </div>
        <div
          data-final-knowledge="collection-chain"
          style={{...enter(frame, 60), border: `3px solid ${PALETTE.slate}`, backgroundColor: PALETTE.panel, padding: '24px 28px'}}
        >
          <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.slate}}>委托代理链 · 两段都是委托代理关系</div>
          <div style={{display: 'flex', alignItems: 'center', gap: 10, marginTop: 16}}>
            {chain.map((node, index) => (
              <div key={node} style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <div style={{border: `2px solid ${PALETTE.line}`, backgroundColor: PALETTE.oxblood, padding: '14px 18px', fontSize: 23, fontWeight: 700, whiteSpace: 'nowrap'}}>{node}</div>
                {index < chain.length - 1 ? (
                  <span style={{fontSize: 21, color: PALETTE.muted, whiteSpace: 'nowrap'}}>{index === 0 ? '委托' : index === 1 ? '委托' : '提示单据'}→</span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
        <div style={{display: 'flex', gap: 20}}>
          {neglects.map((neglect) => (
            <div
              key={neglect.name}
              data-final-knowledge="bank-three-neglects"
              style={{...enterX(frame, 120 + neglects.indexOf(neglect) * 18, 40), flex: 1, borderTop: `12px solid ${neglect.color}`, backgroundColor: PALETTE.panel, padding: '20px 22px', fontSize: 22, lineHeight: 1.6}}
            >
              <div style={{fontSize: 25, fontWeight: 800, color: neglect.color, display: 'flex', alignItems: 'center', gap: 10}}>
                <Ban size={22} color={neglect.color} />
                {neglect.name}
              </div>
              <div style={{marginTop: 8}}>{neglect.detail}</div>
            </div>
          ))}
        </div>
        <div
          data-final-knowledge="collection-types"
          style={{...enter(frame, 180), display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap'}}
        >
          <Tag color={PALETTE.copper} text="两种" />
          <Chip color={PALETTE.copper}>付款交单 D/P——付款才给单 <TokDocs /></Chip>
          <Chip color={PALETTE.copper}>承兑交单 D/A——承兑汇票即给单</Chip>
          <span style={{fontSize: 22, color: PALETTE.muted}}>其他免责：不可抗力；托收行对代收行行为免责</span>
        </div>
      </div>
    </DraftShell>
  );
};

export const CreditLetterGateScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="lc-basics" data-final-knowledge="document-gate" data-final-knowledge="lc-bank-immunities" data-final-knowledge="confirmed-lc" */
  const frame = useCurrentFrame();
  const immunities = ['单据实质免责', '传递延误或遗失免责', '信用证独立原则', '不可抗力免责', '对买卖合同免责'];
  return (
    <DraftShell code={1} station={1} title="银行信用证：表面相符即付款">
      <div
        data-layout="document-gate-with-bank-duties"
        data-visual-anchor="document-fork"
        data-visual-grammar="surface-match-opens-payment-gate,mismatch-lets-bank-ask-applicant-to-waive,five-immunities-shield-the-bank"
        data-text-treatments="label-block,chip,thin-underline,soft-highlight"
        data-focal-rule="bank-pays-only-on-surface-match-or-stop-order"
        data-focal-channels="enclosure,contrast,connector,icon"
        style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}
      >
        <div
          data-final-knowledge="lc-basics"
          style={{...enter(frame, 12), display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', marginTop: 4}}
        >
          <Tag color={PALETTE.gold} text="基本制度" />
          <Chip color={PALETTE.gold}>依据：UCP600《跟单信用证统一惯例》</Chip>
          <Chip color={PALETTE.copper}>性质＝银行信用</Chip>
          <span style={{fontSize: 22, lineHeight: 1.5}}>
            单证、单单
            <Ink color={PALETTE.goldSoft}>表面相符</Ink>
            <TokDocs />→义务：
            <Under color={PALETTE.gold}>向受益人（卖方）付款</Under>
            ；权利：要求申请人（买方）
            <Under color={PALETTE.slate}>付款赎单</Under>
          </span>
        </div>
        <div style={{display: 'flex', gap: 22}}>
          <div
            data-final-knowledge="document-gate"
            style={{...enterX(frame, 60, 46), flex: 1.25, border: `3px solid ${PALETTE.gold}`, borderTop: `14px solid ${PALETTE.gold}`, backgroundColor: PALETTE.panel, padding: '22px 26px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 26, fontWeight: 800, color: PALETTE.gold, display: 'flex', alignItems: 'center', gap: 10}}>
              <Scale size={24} color={PALETTE.gold} />
              审单闸门 · 5 个工作日 <TokBank />
            </div>
            <div style={{marginTop: 12}}>
              不符时：
              <Ink color={PALETTE.slateSoft}>可以</Ink>
              自行联系申请人
              <Under color={PALETTE.slate}>放弃不符点</Under>
              （权利非义务）；接到放弃通知后
              <Ink color={PALETTE.slateSoft}>可以</Ink>
              释放单据
              <br />
              表面审单：不对单据诚信、效力
              <Under color={PALETTE.copper}>实质负责</Under>
            </div>
          </div>
          <div
            data-final-knowledge="lc-bank-immunities"
            style={{...enterX(frame, 92, 46), flex: 1, border: `3px solid ${PALETTE.slate}`, borderTop: `14px solid ${PALETTE.slate}`, backgroundColor: PALETTE.panel, padding: '22px 26px'}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.slate}}>银行免责 · 五项</div>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12}}>
              {immunities.map((item, index) => (
                <span key={item} style={{...enterX(frame, 108 + index * 10, 22)}}>
                  <Chip color={PALETTE.slate}>{item}</Chip>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div
          data-final-knowledge="confirmed-lc"
          style={{...enter(frame, 170), display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap'}}
        >
          <Tag color={PALETTE.copper} text="保兑信用证" />
          <span style={{fontSize: 22, lineHeight: 1.55}}>
            另一家银行
            <Ink color={PALETTE.copperSoft}>保证兑付</Ink>
            ；保兑行自加具保兑起
            <Under color={PALETTE.copper}>责任相当于本身开证</Under>
            ——与开证行承担
            <Ink color={PALETTE.copperSoft}>连带责任</Ink>
          </span>
        </div>
      </div>
    </DraftShell>
  );
};

export const FraudStopOrderScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="soft-terms-fraud" data-final-knowledge="beneficiary-fraud" data-final-knowledge="stop-order-conditions" data-final-knowledge="no-payment-cases" */
  const frame = useCurrentFrame();
  const conditions = [
    {tag: '主体', text: '只能由（有管辖权的）法院发出', color: PALETTE.copper},
    {tag: '实体一', text: '有欺诈的确凿证据', color: PALETTE.gold},
    {tag: '实体二', text: '有可靠、充分的担保', color: PALETTE.gold},
    {tag: '时间', text: '任何一家关联银行均未善意付款或承兑', color: PALETTE.slate},
  ];
  return (
    <DraftShell code={2} station={2} title="信用证欺诈与止付令">
      <div
        data-layout="fraud-exemption-gate-with-stop-order"
        data-visual-anchor="boundary"
        data-visual-grammar="soft-terms-let-buyer-hijack-payment,fabricated-documents-trigger-fraud-exception,court-alone-may-halt-payment-before-good-faith-honour"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-focal-rule="only-courts-issue-stop-orders-within-48-hours"
        data-focal-channels="enclosure,contrast,locator,icon"
        style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}
      >
        <div style={{display: 'flex', gap: 20, marginTop: 4}}>
          <div
            data-final-knowledge="soft-terms-fraud"
            style={{...enter(frame, 12), flex: 1, border: `3px solid ${PALETTE.copper}`, borderTop: `12px solid ${PALETTE.copper}`, backgroundColor: PALETTE.panel, padding: '18px 24px', fontSize: 22, lineHeight: 1.65}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.copper}}>买方欺诈 · 「软条款」</div>
            <div style={{marginTop: 8}}>
              不合理地
              <Ink color={PALETTE.copperSoft}>限制银行付款</Ink>
              的条款，让买方控制整笔交易：暂不生效条款；限制性付款条款（货物清关后才支付）；
              <Under color={PALETTE.copper}>难以实现的限制性条件</Under>
              （禁转船却无直达航线）
            </div>
          </div>
          <div
            data-final-knowledge="beneficiary-fraud"
            style={{...enter(frame, 42), flex: 1, border: `3px solid ${PALETTE.slate}`, borderTop: `12px solid ${PALETTE.slate}`, backgroundColor: PALETTE.panel, padding: '18px 24px', fontSize: 22, lineHeight: 1.65}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.slate}}>卖方欺诈 · 救济</div>
            <div style={{marginTop: 8}}>
              伪造单据
              <TokDocs />；以假充真；以
              <Under color={PALETTE.slate}>保函换取相符提单</Under>
              ——救济＝信用证欺诈
              <Ink color={PALETTE.goldSoft}>例外原则</Ink>
              ：止付令
            </div>
          </div>
        </div>
        <div
          data-final-knowledge="stop-order-conditions"
          style={{...enter(frame, 100), border: `3px solid ${PALETTE.gold}`, backgroundColor: 'rgba(209,164,92,0.07)', padding: '22px 28px'}}
        >
          <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.gold, display: 'flex', alignItems: 'center', gap: 12}}>
            <ShieldCheck size={24} color={PALETTE.gold} />
            止付令 · 四条件＋时限
          </div>
          <div style={{display: 'flex', gap: 14, marginTop: 14, flexWrap: 'wrap'}}>
            {conditions.map((condition) => (
              <span key={condition.tag} style={{display: 'inline-flex', alignItems: 'baseline', gap: 8}}>
                <Tag color={condition.color} text={condition.tag} />
                <span style={{fontSize: 22, lineHeight: 1.5}}>{condition.text}</span>
              </span>
            ))}
          </div>
          <div style={{marginTop: 14, fontSize: 22}}>
            <Hourglass size={20} color={PALETTE.copper} style={{display: 'inline-block', verticalAlign: '-3px'}} />
            法院接受申请后
            <Ink color={PALETTE.copperSoft}>48 小时内</Ink>
            作出
            <Under color={PALETTE.copper}>裁定</Under>
            <TokCourt />（发出或拒绝发出止付令）
          </div>
        </div>
        <div
          data-final-knowledge="no-payment-cases"
          style={{...enter(frame, 170), display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap'}}
        >
          <Tag color={PALETTE.gold} text="不付款仅两情形" />
          <Chip color={PALETTE.gold}>单证或单单表面不符</Chip>
          <Chip color={PALETTE.copper}>法院发出止付令 <TokCourt /></Chip>
          <span style={{fontSize: 22, color: PALETTE.muted}}>开证行不能自行止付；善意付款后不得止付</span>
        </div>
      </div>
    </DraftShell>
  );
};

export const CaseSolvingOrderScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="case-four-steps" data-final-knowledge="independence-note" */
  const frame = useCurrentFrame();
  const steps = [
    {name: '① 买卖双方损失', rule: '按风险转移规则确定', color: PALETTE.gold},
    {name: '② 承运人责任', rule: '按致损原因与运输规则确定', color: PALETTE.slate},
    {name: '③ 保险人责任', rule: '按险别与除外责任确定', color: PALETTE.copper},
    {name: '④ 信用证银行', rule: '表面相符即付款，货损与银行无关', color: PALETTE.gold},
  ];
  return (
    <DraftShell code={3} station={3} title="综合案例破题：四步定责">
      <div
        data-layout="four-step-case-ladder"
        data-visual-anchor="timeline-gate"
        data-visual-grammar="case-steps-follow-risk-carrier-insurer-bank-order,independent-relations-never-borrow-each-others-rules,subrogation-balances-the-final-loss"
        data-text-treatments="label-block,chip,thin-underline,soft-highlight"
        data-focal-rule="carrier-and-insurer-liability-are-not-causally-linked"
        data-focal-channels="connector,contrast,enclosure,icon"
        style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}
      >
        <div style={{display: 'flex', flexDirection: 'column', gap: 34, marginTop: 6}}>
          {steps.map((step) => (
            <div
              key={step.name}
              data-final-knowledge="case-four-steps"
              style={{...enterX(frame, 14 + steps.indexOf(step) * 26, 46), display: 'flex', alignItems: 'center', gap: 22, borderLeft: `10px solid ${step.color}`, backgroundColor: PALETTE.panel, padding: '32px 32px'}}
            >
              <span style={{width: 250, fontSize: 25, fontWeight: 800, color: step.color, whiteSpace: 'nowrap'}}>{step.name}</span>
              <span style={{fontSize: 23, fontWeight: 700}}>
                <Under color={step.color}>{step.rule}</Under>
              </span>
            </div>
          ))}
        </div>
        <div
          data-final-knowledge="independence-note"
          style={{...enter(frame, 130), border: `3px dashed ${PALETTE.slate}`, backgroundColor: PALETTE.panel, padding: '26px 30px', fontSize: 23, lineHeight: 1.75}}
        >
          <span style={{fontWeight: 800, color: PALETTE.slate}}>特别提示：</span>
          各法律关系
          <Ink color={PALETTE.slateSoft}>互相独立</Ink>
          ，各用各的制度；承运人责任与保险人责任
          <Under color={PALETTE.copper}>互不因果</Under>
          ，可能都担责——最后靠
          <Ink color={PALETTE.goldSoft}>保险代位求偿</Ink>
          平衡
        </div>
      </div>
    </DraftShell>
  );
};

export const InternationalTradePayment = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: PALETTE.oxblood, overflow: 'hidden'}}
  >
    <TimelineSequence name="01-collection-desk" {...SCENES.collectionDesk}>
      <CollectionDeskScene />
    </TimelineSequence>
    <TimelineSequence name="02-credit-letter-gate" {...SCENES.creditLetterGate}>
      <CreditLetterGateScene />
    </TimelineSequence>
    <TimelineSequence name="03-fraud-stop-order" {...SCENES.fraudStopOrder}>
      <FraudStopOrderScene />
    </TimelineSequence>
    <TimelineSequence name="04-case-solving-order" {...SCENES.caseSolvingOrder}>
      <CaseSolvingOrderScene />
    </TimelineSequence>
  </AbsoluteFill>
);
