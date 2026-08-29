import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {Anchor, Ban, Bell, Container, FileText, Gavel, Globe, Hourglass, Package, Scale, ShieldCheck, Ship, User, XCircle} from 'lucide-react';
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

const BERTH_CODES = ['甲', '乙', '丙', '丁', '戊'];

const QuayShell = ({
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
      backgroundColor: PALETTE.concrete,
      backgroundImage:
        'repeating-linear-gradient(0deg, rgba(32,38,43,0.045) 0 1px, transparent 1px 96px), repeating-linear-gradient(90deg, rgba(32,38,43,0.045) 0 1px, transparent 1px 96px), radial-gradient(circle at 88% 10%, rgba(15,107,116,0.08), transparent 34%)',
      overflow: 'hidden',
    }}
  >
    <div style={{position: 'absolute', inset: 22, border: `2px solid ${PALETTE.ink}`}} />
    <div style={{position: 'absolute', inset: 28, border: `1px solid ${PALETTE.line}`}} />
    <header style={{position: 'absolute', left: 64, right: 64, top: 44, height: 104, display: 'flex', alignItems: 'center', gap: 24, borderBottom: `3px solid ${PALETTE.ink}`}}>
      <div style={{width: 74, height: 74, borderRadius: 37, border: `3px dashed ${PALETTE.rust}`, backgroundColor: PALETTE.panel, display: 'grid', placeItems: 'center'}}>
        <Container size={30} color={PALETTE.rust} />
      </div>
      <h1 className="font-animation-title" style={{fontSize: 42, lineHeight: 1.1, margin: 0, fontWeight: 800, color: PALETTE.ink}}>
        {title}
      </h1>
      <div style={{marginLeft: 'auto', textAlign: 'right'}}>
        <div style={{fontSize: 16, fontWeight: 700, letterSpacing: 4, color: PALETTE.muted}}>CONCRETE QUAY DISPATCH · 三国法</div>
        <div style={{fontSize: 18, color: PALETTE.muted, marginTop: 6}}>国际货物买卖 · 泊位{BERTH_CODES[code]}</div>
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
              borderRadius: 8,
              border: `2px dashed ${active ? PALETTE.rust : PALETTE.line}`,
              backgroundColor: active ? PALETTE.rust : PALETTE.panel,
              display: 'grid',
              placeItems: 'center',
              boxShadow: active ? `0 0 0 4px ${PALETTE.rustSoft}` : 'none',
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

const QuayStamp = ({delay, frame, text, color = PALETTE.rust}: {readonly delay: number; readonly frame: number; readonly text: string; readonly color?: string}) => (
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
      backgroundColor: 'rgba(246,243,234,0.9)',
    }}
  >
    {text}
  </span>
);

/* Concept tokens: recurring pictograms recorded in visual-direction.json conceptTokens. */
const TokShip = ({size = 19}: {readonly size?: number}) => (
  <Ship size={size} strokeWidth={2.4} color={PALETTE.petrol} style={{display: 'inline-block', verticalAlign: '-3px'}} />
);
const TokSeller = ({size = 19}: {readonly size?: number}) => (
  <Package size={size} strokeWidth={2.4} color={PALETTE.rust} style={{display: 'inline-block', verticalAlign: '-3px'}} />
);
const TokBuyer = ({size = 19}: {readonly size?: number}) => (
  <User size={size} strokeWidth={2.4} color={PALETTE.petrol} style={{display: 'inline-block', verticalAlign: '-3px'}} />
);
const TokInsure = ({size = 19}: {readonly size?: number}) => (
  <ShieldCheck size={size} strokeWidth={2.4} color={PALETTE.brass} style={{display: 'inline-block', verticalAlign: '-3px'}} />
);

export const TermsCarriersScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="shared-risk-rule" data-final-knowledge="three-terms-columns" data-final-knowledge="terms-mnemonic" */
  const frame = useCurrentFrame();
  const terms = [
    {
      name: 'FOB',
      color: PALETTE.petrol,
      price: '交易成本',
      freight: '买方安排运输',
      insure: '买方投保（非义务）',
      notice: '装运通知（买→卖）＋投保通知（卖→买）',
      verse: '不包运不包险',
    },
    {
      name: 'CFR',
      color: PALETTE.rust,
      price: '成本＋运费',
      freight: '卖方安排运输',
      insure: '买方投保（非义务）',
      notice: '投保通知（卖→买）',
      verse: '包运不包险',
    },
    {
      name: 'CIF',
      color: PALETTE.brass,
      price: '成本＋运费＋保险',
      freight: '卖方安排运输',
      insure: '卖方投保：平安险（海运最低险）',
      notice: '无须通知',
      verse: '包运也包险',
    },
  ];
  return (
    <QuayShell code={0} station={0} title="FOB · CFR · CIF：同船不同票">
      <div
        data-layout="three-ship-column-comparison"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="risk-passes-when-goods-on-board-at-shipment-port,three-terms-differ-only-in-freight-insurance-notice"
        data-text-treatments="label-block,soft-highlight,thin-underline,chip"
        data-focal-rule="delivery-place-stays-shipment-port-for-all-three"
        data-focal-channels="contrast,enclosure,locator,icon"
        style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}
      >
        <div
          data-final-knowledge="shared-risk-rule"
          style={{...enter(frame, 12), display: 'flex', alignItems: 'center', gap: 18, marginTop: 6, flexWrap: 'wrap'}}
        >
          <Tag color={PALETTE.petrol} text="共同点" />
          <span style={{fontSize: 23, fontWeight: 700}}>
            风险转移＝<Ink color={PALETTE.petrolSoft}>装运港装运上船</Ink>
            <TokShip />（完成交货）；交货地点＝
            <Under color={PALETTE.petrol}>装运港</Under>
            ——交货≠货交承运人
          </span>
        </div>
        <div style={{display: 'flex', gap: 24, marginTop: 20}}>
          {terms.map((term) => (
            <div
              key={term.name}
              data-final-knowledge="three-terms-columns"
              style={{...enterX(frame, 44 + terms.indexOf(term) * 22, 42), flex: 1, borderTop: `14px solid ${term.color}`, backgroundColor: PALETTE.panel, padding: '26px 26px', fontSize: 23, lineHeight: 1.75, boxShadow: `0 2px 0 0 ${PALETTE.line}`}}
            >
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <Ship size={24} color={term.color} />
                <span style={{fontSize: 30, fontWeight: 800, color: term.color}}>{term.name}</span>
              </div>
              <div style={{marginTop: 10}}>
                价格构成：
                <Ink color={`${term.color}22`}>{term.price}</Ink>
                <br />
                {term.freight}；{term.insure}
                <TokInsure />
                <br />
                <span style={{color: PALETTE.muted}}>通知：{term.notice}</span>
              </div>
            </div>
          ))}
        </div>
        <div data-final-knowledge="terms-mnemonic" style={{...enter(frame, 140), marginTop: 30, display: 'flex', justifyContent: 'center', whiteSpace: 'nowrap'}}>
          <QuayStamp delay={140} frame={frame} text={'口诀：FOB 不包运不包险 · CFR 包运不包险 · CIF 包运也包险'} />
        </div>
      </div>
    </QuayShell>
  );
};

const Chip = ({children, color = PALETTE.petrol}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 6, border: `1px solid ${PALETTE.line}`, borderLeft: `5px solid ${color}`, backgroundColor: PALETTE.panel, padding: '5px 12px', fontSize: 22, lineHeight: 1.35}}>
    {children}
  </span>
);

export const TermsLadderScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="correspondence-ladder" data-final-knowledge="arrival-pair" data-final-knowledge="duty-spectrum" data-final-knowledge="misc-rules" */
  const frame = useCurrentFrame();
  const pairs = [
    {sea: 'FOB', multi: 'FCA', color: PALETTE.petrol},
    {sea: 'CFR', multi: 'CPT', color: PALETTE.rust},
    {sea: 'CIF', multi: 'CIP', color: PALETTE.brass},
  ];
  return (
    <QuayShell code={1} station={1} title="术语梯队：对应 · 到运 · 两端">
      <div
        data-layout="correspondence-ladder-with-duty-spectrum"
        data-visual-anchor="typographic-sequence"
        data-visual-grammar="multimodal-terms-mirror-sea-terms-one-to-one,arrival-terms-differ-only-in-unloading,exw-and-ddp-mark-the-duty-extremes"
        data-text-treatments="label-block,chip,thin-underline,soft-highlight"
        data-focal-rule="cip-all-risks-versus-cif-fpa"
        data-focal-channels="contrast,enclosure,locator,icon"
        style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}
      >
        <div
          data-final-knowledge="correspondence-ladder"
          style={{...enter(frame, 12), border: `3px solid ${PALETTE.petrol}`, backgroundColor: PALETTE.panel, padding: '18px 24px'}}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap'}}>
            <Tag color={PALETTE.petrol} text="一一对应" />
            {pairs.map((pair) => (
              <span key={pair.multi} style={{display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 24, fontWeight: 800, color: pair.color}}>
                {pair.sea}——{pair.multi}
              </span>
            ))}
          </div>
          <div style={{marginTop: 10, fontSize: 22, lineHeight: 1.6}}>
            风险＝<Ink color={PALETTE.petrolSoft}>货交第一承运人</Ink>
            <TokShip />；交货地点＝装运地；FCA 可约定签发
            <Under color={PALETTE.petrol}>已装船提单</Under>
            ；CIP 投
            <Ink color={PALETTE.rustSoft}>一切险</Ink>
            <TokInsure />（CIF＝平安险）
          </div>
        </div>
        <div style={{display: 'flex', gap: 20, marginTop: 20}}>
          <div
            data-final-knowledge="arrival-pair"
            style={{...enterX(frame, 70, 42), flex: 1.25, border: `3px solid ${PALETTE.rust}`, borderTop: `12px solid ${PALETTE.rust}`, backgroundColor: PALETTE.panel, padding: '16px 22px', fontSize: 22, lineHeight: 1.6}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.rust}}>到运合同 · DAP / DPU</div>
            <div style={{marginTop: 8}}>
              共同：卖方运到
              <Ink color={PALETTE.rustSoft}>目的地</Ink>
              <TokSeller />；区别：DPU 还要
              <Under color={PALETTE.rust}>卸下货</Under>
              （DAP 只运到）
            </div>
          </div>
          <div
            data-final-knowledge="duty-spectrum"
            style={{...enterX(frame, 100, 42), flex: 1, border: `3px solid ${PALETTE.brass}`, borderTop: `12px solid ${PALETTE.brass}`, backgroundColor: PALETTE.panel, padding: '16px 22px', fontSize: 22, lineHeight: 1.6}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.brass}}>义务两端</div>
            <div style={{marginTop: 8}}>
              <Under color={PALETTE.brass}>EXW</Under>
              工厂交货「货物出门概不负责」最小 →
              <Under color={PALETTE.brass}>DDP</Under>
              完税后交货「送货上门」最大
            </div>
          </div>
        </div>
        <div
          data-final-knowledge="misc-rules"
          style={{...enter(frame, 140), marginTop: 22, display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center'}}
        >
          <span style={{fontSize: 22, fontWeight: 800, color: PALETTE.ink}}>其他规则：</span>
          <span style={{...enterX(frame, 150, 24)}}><Chip>除 EXW / DDP：卖方办出口，买方办进口</Chip></span>
          <span style={{...enterX(frame, 164, 24)}}><Chip color={PALETTE.rust}>FAS / FOB / CFR / CIF 只适用船运</Chip></span>
          <span style={{...enterX(frame, 178, 24)}}><Chip color={PALETTE.brass}>担运费者担运输安保费；FAS 船边≠FOB 船上</Chip></span>
        </div>
      </div>
    </QuayShell>
  );
};

export const CisgScopeScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="cisg-subjects" data-final-knowledge="cisg-excluded-objects" data-final-knowledge="cisg-uncovered-content" data-final-knowledge="cisg-derogability" */
  const frame = useCurrentFrame();
  const objects = ['消费者合同', '拍卖·令状销售', '有价证券·货币', '船舶·飞机', '电力'];
  const contents = [
    {name: '合同效力', but: '但规定合同的成立'},
    {name: '所有权转移', but: '但规定所有权担保'},
    {name: '产品责任', but: '但规定质量担保责任'},
  ];
  return (
    <QuayShell code={2} station={2} title="《1980年公约》适用范围">
      <div
        data-layout="convention-scope-gate-with-exclusion-shelves"
        data-visual-anchor="boundary"
        data-visual-grammar="cisg-gate-needs-different-contracting-states,cargo-types-and-legal-questions-excluded,party-autonomy-partially-derogates-via-trade-terms"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-focal-rule="trade-terms-only-partially-exclude-the-convention"
        data-focal-channels="enclosure,contrast,locator,icon"
        style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}
      >
        <div style={{display: 'flex', gap: 20, marginTop: 10}}>
          <div
            data-final-knowledge="cisg-subjects"
            style={{...enter(frame, 12), flex: 0.9, border: `3px solid ${PALETTE.petrol}`, backgroundColor: PALETTE.panel, padding: '18px 22px', fontSize: 23, lineHeight: 1.6}}
          >
            <div style={{fontSize: 26, fontWeight: 800, color: PALETTE.petrol, display: 'flex', alignItems: 'center', gap: 10}}>
              <Globe size={24} color={PALETTE.petrol} />
              主体之门
            </div>
            <div style={{marginTop: 10}}>
              营业地在
              <Ink color={PALETTE.petrolSoft}>不同缔约国</Ink>
              <TokBuyer />
              <TokSeller />
            </div>
          </div>
          <div
            data-final-knowledge="cisg-excluded-objects"
            style={{...enterX(frame, 40, 44), flex: 1.35, border: `3px solid ${PALETTE.rust}`, backgroundColor: PALETTE.panel, padding: '18px 22px'}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.rust, display: 'flex', alignItems: 'center', gap: 10}}>
              <Ban size={22} color={PALETTE.rust} />
              客体排除 · 五类不适用
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12}}>
              {objects.map((object, index) => (
                <span key={object} style={{...enterX(frame, 56 + index * 12, 24)}}>
                  <Chip color={PALETTE.rust}>{object}</Chip>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div
          data-final-knowledge="cisg-uncovered-content"
          style={{...enter(frame, 120), marginTop: 20, border: `3px solid ${PALETTE.brass}`, backgroundColor: PALETTE.panel, padding: '18px 24px', fontSize: 22, lineHeight: 1.65}}
        >
          <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.brass}}>内容三不问 · 但有边界</div>
          <div style={{display: 'flex', gap: 18, marginTop: 10, flexWrap: 'wrap'}}>
            {contents.map((content) => (
              <span key={content.name} style={{display: 'inline-flex', alignItems: 'baseline', gap: 8}}>
                <span style={{fontWeight: 800, color: PALETTE.ink}}>{content.name}</span>
                <Under color={PALETTE.brass}>{content.but}</Under>
              </span>
            ))}
          </div>
        </div>
        <div
          data-final-knowledge="cisg-derogability"
          style={{...enter(frame, 168), marginTop: 20, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap'}}
        >
          <Tag color={PALETTE.petrol} text="任意性" />
          <span style={{fontSize: 22, lineHeight: 1.55}}>
            完全排除＝明确选择
            <Ink color={PALETTE.petrolSoft}>准据法</Ink>
            ；🌟
            <Under color={PALETTE.rust}>部分排除</Under>
            ＝约定贸易术语即部分排除公约
          </span>
        </div>
      </div>
    </QuayShell>
  );
};

export const DutiesLedgersScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="seller-deliver-match" data-final-knowledge="seller-ip-guarantee" data-final-knowledge="buyer-pay-receive" data-final-knowledge="buyer-inspection" */
  const frame = useCurrentFrame();
  return (
    <QuayShell code={3} station={3} title="公约义务：卖方账 · 买方账">
      <div
        data-layout="twin-duty-ledgers"
        data-visual-anchor="role-pair"
        data-visual-grammar="seller-delivers-matches-and-guarantees,buyer-pays-receives-and-inspects,receiving-is-not-accepting"
        data-text-treatments="label-block,soft-highlight,thin-underline,chip"
        data-focal-rule="ip-guarantee-has-territorial-limit-and-three-exemptions"
        data-focal-channels="contrast,enclosure,locator,icon"
        style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}
      >
        <div style={{display: 'flex', gap: 22, marginTop: 8}}>
          <div
            style={{...enterX(frame, 12, 46), flex: 1.08, borderTop: `14px solid ${PALETTE.rust}`, backgroundColor: PALETTE.panel, padding: '16px 22px', fontSize: 22, lineHeight: 1.78}}
          >
            <div style={{fontSize: 26, fontWeight: 800, color: PALETTE.rust, display: 'flex', alignItems: 'center', gap: 10}}>
              <Package size={24} color={PALETTE.rust} />
              卖方义务 <TokSeller />
            </div>
            <div
              data-final-knowledge="seller-deliver-match"
              style={{marginTop: 10}}
            >
              交货地点：安排运输→
              <Ink color={PALETTE.rustSoft}>第一承运人</Ink>
              所在地；否则
              <Under color={PALETTE.rust}>卖方营业地</Under>
              ；时间＝合理时间
              <br />
              提前交单：可
              <Under color={PALETTE.rust}>纠正单据错误</Under>
              ，但赔偿买方损失
              <br />
              货物相符：质量（通常用途·特定目的·样品·包装）；数量不符一律
              <Ink color={PALETTE.rustSoft}>违约</Ink>
              ，多交可接收或拒收
            </div>
            <div
              data-final-knowledge="seller-ip-guarantee"
              style={{marginTop: 10, borderTop: `1px dashed ${PALETTE.line}`, paddingTop: 10}}
            >
              权利担保：所有权无瑕疵；知识产权担保
              <Globe size={20} color={PALETTE.brass} style={{display: 'inline-block', verticalAlign: '-3px'}} />＝
              <Ink color={PALETTE.brassSoft}>买方营业地</Ink>
              （首选）或预期转售 / 使用地
              <br />
              免责三例外：买方
              <Under color={PALETTE.rust}>明知</Under>
              ；按
              <Under color={PALETTE.rust}>买方指示</Under>
              供货；买方知道第三方权利
              <Ink color={PALETTE.rustSoft}>未通知</Ink>
            </div>
          </div>
          <div
            style={{...enterX(frame, 44, 46), flex: 1, borderTop: `14px solid ${PALETTE.petrol}`, backgroundColor: PALETTE.panel, padding: '16px 22px', fontSize: 22, lineHeight: 1.78}}
          >
            <div style={{fontSize: 26, fontWeight: 800, color: PALETTE.petrol, display: 'flex', alignItems: 'center', gap: 10}}>
              <User size={24} color={PALETTE.petrol} />
              买方义务 <TokBuyer />
            </div>
            <div
              data-final-knowledge="buyer-pay-receive"
              style={{marginTop: 10}}
            >
              支付地点：移交货物或
              <Ink color={PALETTE.petrolSoft}>单据的地点</Ink>
              <FileText size={20} color={PALETTE.petrol} style={{display: 'inline-block', verticalAlign: '-3px'}} />
              ；否则卖方营业地；无机会检验前可
              <Under color={PALETTE.petrol}>拒绝支付</Under>
              <br />
              接收：做好
              <Ink color={PALETTE.petrolSoft}>辅助工作</Ink>
              ；质量严重瑕疵也须
              <Under color={PALETTE.petrol}>接收</Under>
              （接收≠接受）
              <br />
              拒收权：卖方
              <Ink color={PALETTE.rustSoft}>提前交货</Ink>
              ；多交货只能拒收
              <Ink color={PALETTE.rustSoft}>多交部分</Ink>
            </div>
            <div
              data-final-knowledge="buyer-inspection"
              style={{marginTop: 10, borderTop: `1px dashed ${PALETTE.line}`, paddingTop: 10}}
            >
              检验时间：切实可行的
              <Ink color={PALETTE.petrolSoft}>最短时间</Ink>
              ；最迟收货后
              <Under color={PALETTE.petrol}>2 年</Under>
              <Hourglass size={20} color={PALETTE.petrol} style={{display: 'inline-block', verticalAlign: '-3px'}} />
              <br />
              检验地点：卖方安排运输→
              <Ink color={PALETTE.petrolSoft}>目的地</Ink>
              ；订约时已知转运→
              <Under color={PALETTE.petrol}>转运目的地</Under>
            </div>
          </div>
        </div>
        <div style={{...enter(frame, 160), marginTop: 22, display: 'flex', justifyContent: 'center', whiteSpace: 'nowrap'}}>
          <QuayStamp delay={160} frame={frame} color={PALETTE.petrol} text={'主线：接收不等于接受 —— 严重瑕疵也要先接收，再主张救济'} />
        </div>
      </div>
    </QuayShell>
  );
};

export const RiskTimelineScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="risk-agreement-first" data-final-knowledge="risk-default-delivery" data-final-knowledge="risk-in-transit" data-final-knowledge="risk-scope-note" */
  const frame = useCurrentFrame();
  const gates = [
    {name: '约定优先', detail: '合同约定（含贸易术语）优先', color: PALETTE.petrol, delay: 14},
    {name: '无约定', detail: '交货时转移', color: PALETTE.rust, delay: 64},
    {name: '在途运输货物', detail: '原则上合同成立时转移', color: PALETTE.brass, delay: 114},
  ];
  return (
    <QuayShell code={4} station={4} title="风险转移：三道闸门">
      <div
        data-layout="voyage-risk-timeline"
        data-visual-anchor="timeline-gate"
        data-visual-grammar="agreement-gates-risk-before-default-rules,in-transit-goods-pass-risk-at-conclusion,carrier-fault-still-counts-as-risk"
        data-text-treatments="label-block,soft-highlight,thin-underline,chip"
        data-focal-rule="trade-term-on-board-moment-fixes-risk"
        data-focal-channels="connector,contrast,enclosure,icon"
        style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}
      >
        <div style={{display: 'flex', flexDirection: 'column', gap: 44, marginTop: 22}}>
          {gates.map((gate) => (
            <div
              key={gate.name}
              data-final-knowledge={gate.name === '约定优先' ? 'risk-agreement-first' : gate.name === '无约定' ? 'risk-default-delivery' : 'risk-in-transit'}
              style={{...enterX(frame, gate.delay, 46), display: 'flex', alignItems: 'center', gap: 22, borderLeft: `10px solid ${gate.color}`, backgroundColor: PALETTE.panel, padding: '38px 36px'}}
            >
              <span style={{width: 260, fontSize: 27, fontWeight: 800, color: gate.color}}>{gate.name}</span>
              <span style={{fontSize: 23, fontWeight: 700}}>
                {gate.name === '约定优先' ? (
                  <>
                    {gate.detail}
                    <TokShip />
                    ——FOB 即「装运港装上船」
                  </>
                ) : (
                  <Under color={gate.color}>{gate.detail}</Under>
                )}
              </span>
            </div>
          ))}
        </div>
        <div
          data-final-knowledge="risk-scope-note"
          style={{...enter(frame, 170), marginTop: 30, border: `3px dashed ${PALETTE.petrol}`, backgroundColor: PALETTE.panel, padding: '22px 28px', fontSize: 23, lineHeight: 1.7}}
        >
          <span style={{fontWeight: 800, color: PALETTE.petrol}}>风险的范围：</span>
          非因双方原因的损失均属风险——
          <Ink color={PALETTE.petrolSoft}>承运人过失</Ink>
          导致的损失也属于
          <Under color={PALETTE.petrol}>风险</Under>
          <TokShip />
        </div>
      </div>
    </QuayShell>
  );
};

export const InternationalSaleOfGoods = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: PALETTE.concrete, overflow: 'hidden'}}
  >
    <TimelineSequence name="01-fob-cfr-cif" {...SCENES.termsCarriers}>
      <TermsCarriersScene />
    </TimelineSequence>
    <TimelineSequence name="02-terms-correspondence" {...SCENES.termsLadder}>
      <TermsLadderScene />
    </TimelineSequence>
    <TimelineSequence name="03-cisg-scope" {...SCENES.cisgScope}>
      <CisgScopeScene />
    </TimelineSequence>
    <TimelineSequence name="04-seller-buyer-duties" {...SCENES.dutiesLedgers}>
      <DutiesLedgersScene />
    </TimelineSequence>
    <TimelineSequence name="05-risk-transfer" {...SCENES.riskTimeline}>
      <RiskTimelineScene />
    </TimelineSequence>
  </AbsoluteFill>
);
