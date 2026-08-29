import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {Anchor, BookOpen, Boxes, CircleAlert, ClipboardCheck, Coins, FileCheck, FileWarning, Flame, Landmark, PackageOpen, Plane, Scale, ScrollText, ShieldCheck, Ship, Timer, Truck, Users, Waves} from 'lucide-react';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {PALETTE, SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const rise = (frame: number, delay: number): CSSProperties => ({
  opacity: interpolate(frame, [delay, delay + 16], [0, 1], CLAMP),
  translate: `0px ${interpolate(frame, [delay, delay + 22], [26, 0], {...CLAMP, easing: Easing.out(Easing.cubic)})}px`,
});

const slideX = (frame: number, delay: number, x = 52): CSSProperties => ({
  opacity: interpolate(frame, [delay, delay + 16], [0, 1], CLAMP),
  translate: `${interpolate(frame, [delay, delay + 24], [x, 0], {...CLAMP, easing: Easing.out(Easing.cubic)})}px 0px`,
});

const FORM_NO = ['01', '02', '03', '04', '05', '06', '07'];

const LadingShell = ({
  children,
  form,
  title,
}: {
  readonly children: ReactNode;
  readonly form: number;
  readonly title: string;
}) => (
  <AbsoluteFill
    className="font-animation-body"
    style={{
      color: PALETTE.paperText,
      backgroundColor: PALETTE.wine,
      backgroundImage:
        'repeating-linear-gradient(90deg, rgba(201,161,92,0.03) 0 1px, transparent 1px 110px), radial-gradient(circle at 8% 100%, rgba(111,163,191,0.08), transparent 32%)',
      overflow: 'hidden',
    }}
  >
    <div style={{position: 'absolute', left: 64, right: 64, top: 40, display: 'flex', alignItems: 'center', gap: 22}}>
      <div style={{backgroundColor: PALETTE.brass, color: PALETTE.wine, borderRadius: '8px 20px 8px 20px', padding: '10px 22px', fontSize: 22, fontWeight: 900, letterSpacing: 3, whiteSpace: 'nowrap'}}>运输与保险</div>
      <h1 className="font-animation-title" style={{fontSize: 44, lineHeight: 1.1, margin: 0, fontWeight: 800, color: PALETTE.paper}}>
        {title}
      </h1>
      <div className="font-animation-mono" style={{marginLeft: 'auto', fontSize: 18, fontWeight: 700, letterSpacing: 3, color: PALETTE.muted}}>LADING FORM NO. {FORM_NO[form]} / 07</div>
    </div>
    <div style={{position: 'absolute', left: 64, right: 64, top: 148, height: 0, borderTop: `2px dashed ${PALETTE.line}`}} />
    <div style={{position: 'absolute', left: 64, width: 200, top: 147, height: 4, backgroundColor: PALETTE.brass}} />
    <main style={{position: 'absolute', left: 64, right: 64, top: 182, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const FormPanel = ({children, flex = 1, color, delay, frame}: {readonly children: ReactNode; readonly flex?: number; readonly color?: string; readonly delay: number; readonly frame: number}) => (
  <div
    style={{
      ...rise(frame, delay),
      flex,
      border: `2px solid ${color ?? PALETTE.line}`,
      borderRadius: 12,
      backgroundColor: PALETTE.panel,
      padding: '18px 26px',
      boxShadow: 'inset 0 0 0 4px rgba(244,232,220,0.03)',
    }}
  >
    {children}
  </div>
);

const FieldRow = ({label, color, children}: {readonly label: string; readonly color: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'baseline', gap: 14, marginTop: 12}}>
    <span style={{flexShrink: 0, borderLeft: `5px solid ${color}`, paddingLeft: 10, fontSize: 21, fontWeight: 800, color}}>{label}</span>
    <span style={{flex: 1, borderBottom: `2px dotted ${PALETTE.line}`, paddingBottom: 4, fontSize: 21, lineHeight: 1.6}}>{children}</span>
  </div>
);

const PaperSeal = ({text, color = PALETTE.brass}: {readonly text: string; readonly color?: string}) => (
  <span style={{backgroundColor: color, color: PALETTE.wine, borderRadius: 6, padding: '6px 16px', fontSize: 21, fontWeight: 900, letterSpacing: 2, whiteSpace: 'nowrap'}}>{text}</span>
);

const Ink = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{backgroundColor: color, padding: '2px 10px', fontWeight: 800}}>{children}</span>
);

const Under = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{boxShadow: `inset 0 -3px ${color}`, paddingBottom: 2, fontWeight: 700}}>{children}</span>
);

const DeskStamp = ({delay, frame, text, color = PALETTE.brass}: {readonly delay: number; readonly frame: number; readonly text: string; readonly color?: string}) => (
  <span
    style={{
      ...rise(frame, delay),
      display: 'inline-block',
      border: `3px double ${color}`,
      borderRadius: 10,
      color,
      padding: '10px 26px',
      fontSize: 23,
      fontWeight: 800,
      letterSpacing: 2,
      rotate: '-2deg',
      backgroundColor: 'rgba(56,32,43,0.8)',
    }}
  >
    {text}
  </span>
);

export const BillOfLadingScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="lading-three-features" data-final-knowledge="lading-classification-shelves" data-final-knowledge="lading-negotiation-rules" data-final-knowledge="backdate-advance-billoflading" data-final-knowledge="sea-waybill-contrast" */
  const frame = useCurrentFrame();
  const shelves = [
    {label: '按装船状态', color: PALETTE.marine, items: '已装船提单 · 收货待运提单'},
    {label: '按批注', color: PALETTE.signal, items: '清洁提单 · 不清洁提单（有不良批注）'},
    {label: '按收货人抬头', color: PALETTE.brass, items: '记名（不能转让）· 不记名（交付即转让）· 指示（背书转让）'},
  ];
  return (
    <LadingShell form={0} title="海运提单">
      <div
        data-layout="lading-form-with-ticket-shelves"
        data-visual-anchor="document-fork"
        data-visual-grammar="billoflading-carries-three-qualities,three-classification-shelves-split-transfer-rules"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="billoflading-is-document-of-title-endorse-transfers-ownership"
        data-focal-channels="contrast,enclosure,locator"
        style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: 6}}
      >
        <div style={{display: 'flex', alignItems: 'stretch', gap: 20}}>
          <FormPanel flex={1.35} color={PALETTE.brass} delay={12} frame={frame}>
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.brass, display: 'flex', alignItems: 'center', gap: 10}}>
              <ScrollText size={24} color={PALETTE.brass} />
              提单 · 海运单证三特征
            </div>
            <div style={{display: 'flex', gap: 14, marginTop: 14}}>
              <PaperSeal text="合同证明" />
              <PaperSeal text="货物收据" />
              <PaperSeal text="物权凭证" color={PALETTE.marine} />
            </div>
            <div style={{marginTop: 12, fontSize: 21, lineHeight: 1.6}}>
              承运人原则上应向
              <Under color={PALETTE.marine}>正本提单持有人</Under>
              交货；转让提单即转让在途货物
              <Ink color={PALETTE.marineSoft}>所有权</Ink>
            </div>
          </FormPanel>
          <FormPanel flex={1} color={PALETTE.signal} delay={38} frame={frame}>
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.signal, display: 'flex', alignItems: 'center', gap: 10}}>
              <FileWarning size={24} color={PALETTE.signal} />
              倒签 · 预借提单
            </div>
            <div style={{marginTop: 12, fontSize: 21, lineHeight: 1.65}}>
              共同点：装船时间
              <Ink color={PALETTE.signalSoft}>不真实</Ink>
              ，具欺诈性质
              <br />
              区别：签发时货物是否已
              <Under color={PALETTE.signal}>实际装船</Under>
            </div>
          </FormPanel>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 14}}>
          {shelves.map((shelf) => (
            <div
              key={shelf.label}
              data-final-knowledge="lading-classification-shelves"
              style={{...slideX(frame, 76 + shelves.indexOf(shelf) * 22, 44), display: 'flex', alignItems: 'center', gap: 18, borderLeft: `9px solid ${shelf.color}`, backgroundColor: PALETTE.panel, padding: '12px 22px'}}
            >
              <span style={{width: 172, fontSize: 22, fontWeight: 800, color: shelf.color}}>{shelf.label}</span>
              <span style={{flex: 1, borderBottom: `2px dotted ${PALETTE.line}`, paddingBottom: 3, fontSize: 22}}>{shelf.items}</span>
            </div>
          ))}
        </div>
        <div
          data-final-knowledge="sea-waybill-contrast"
          style={{...rise(frame, 170), display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, whiteSpace: 'nowrap', borderTop: `2px dashed ${PALETTE.line}`, paddingTop: 18}}
        >
          <Ship size={26} color={PALETTE.marine} />
          <span style={{fontSize: 22}}>
            提单 =
            <PaperSeal text="物权凭证" color={PALETTE.marine} />
            ；海运单
            <Ink color={PALETTE.signalSoft}>不是</Ink>
            ——收货人凭
            <Under color={PALETTE.brass}>身份证明</Under>
            提货（短途运输需要）
          </span>
        </div>
      </div>
    </LadingShell>
  );
};

export const CarrierDeliveryScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="delivery-joint-liability" data-final-knowledge="delivery-liability-core" data-final-knowledge="delivery-exemptions" data-final-knowledge="delivery-limitation-one-year" */
  const frame = useCurrentFrame();
  return (
    <LadingShell form={1} title="无正本提单交货的责任">
      <div
        data-layout="delivery-liability-form-sheet"
        data-visual-anchor="boundary"
        data-visual-grammar="carrier-and-taker-jointly-liable,cif-full-compensation-without-maritime-limit"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="exemption-for-consignment-release-only-applies-to-straight-billoflading"
        data-focal-channels="contrast,enclosure,connector"
        style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: 6}}
      >
        <div style={{display: 'flex', gap: 22}}>
          <FormPanel flex={1.25} color={PALETTE.brass} delay={12} frame={frame}>
            <div data-final-knowledge="delivery-liability-core" style={{fontSize: 24, fontWeight: 800, color: PALETTE.brass, display: 'flex', alignItems: 'center', gap: 10}}>
              <Scale size={24} color={PALETTE.brass} />
              承运人的赔偿责任
            </div>
            <FieldRow label="责任性质" color={PALETTE.signal}>
              违约责任与侵权责任
              <Ink color={PALETTE.signalSoft}>竞合</Ink>
              ，受害人
              <Under color={PALETTE.brass}>择一主张</Under>
            </FieldRow>
            <FieldRow label="赔偿额" color={PALETTE.marine}>
              装船时价值 + 运费 + 保险费 =
              <Ink color={PALETTE.marineSoft}>CIF 价</Ink>
            </FieldRow>
            <FieldRow label="责任限制" color={PALETTE.signal}>
              <Ink color={PALETTE.signalSoft}>不适用</Ink>
              海事赔偿责任限制 →
              <Under color={PALETTE.signal}>足额赔偿</Under>
            </FieldRow>
          </FormPanel>
          <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 18}}>
            <div
              data-final-knowledge="delivery-joint-liability"
              style={{...rise(frame, 40), border: `2px solid ${PALETTE.marine}`, borderRadius: 12, backgroundColor: PALETTE.panel, padding: '16px 26px', display: 'flex', alignItems: 'center', gap: 14}}
            >
              <Users size={24} color={PALETTE.marine} />
              <span style={{fontSize: 22, lineHeight: 1.6}}>
                责任主体：承运人与取货人
                <Ink color={PALETTE.marineSoft}>连带责任</Ink>
              </span>
            </div>
            <div
              data-final-knowledge="delivery-limitation-one-year"
              style={{...rise(frame, 64), border: `2px solid ${PALETTE.signal}`, borderRadius: 12, backgroundColor: PALETTE.signalSoft, padding: '16px 26px', display: 'flex', alignItems: 'center', gap: 14}}
            >
              <Timer size={24} color={PALETTE.signal} />
              <span style={{fontSize: 22, lineHeight: 1.6}}>
                诉讼时效：
                <span className="font-animation-mono" style={{fontSize: 30, fontWeight: 900, color: PALETTE.signal}}> 1 年</span>
              </span>
            </div>
          </div>
        </div>
        <div
          data-final-knowledge="delivery-exemptions"
          style={{...rise(frame, 96), border: `2px solid ${PALETTE.ok}`, borderRadius: 12, backgroundColor: PALETTE.panel, padding: '16px 26px'}}
        >
          <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.ok, display: 'flex', alignItems: 'center', gap: 10}}>
            <ShieldCheck size={24} color={PALETTE.ok} />
            承运人免责 · 三情形
          </div>
          <div style={{display: 'flex', gap: 16, marginTop: 12}}>
            <span style={{flex: 1, borderLeft: `7px solid ${PALETTE.ok}`, backgroundColor: 'rgba(56,32,43,0.75)', padding: '10px 16px', fontSize: 21, lineHeight: 1.55}}>依照卸货港所在地<Under color={PALETTE.ok}>法律</Under>行为</span>
            <span style={{flex: 1.25, borderLeft: `7px solid ${PALETTE.brass}`, backgroundColor: 'rgba(56,32,43,0.75)', padding: '10px 16px', fontSize: 21, lineHeight: 1.55}}>按<Ink color={PALETTE.brassSoft}>记名提单</Ink>托运人要求<Under color={PALETTE.brass}>无单放货</Under></span>
            <span style={{flex: 1, borderLeft: `7px solid ${PALETTE.marine}`, backgroundColor: 'rgba(56,32,43,0.75)', padding: '10px 16px', fontSize: 21, lineHeight: 1.55}}>凭<Ink color={PALETTE.marineSoft}>正本提单</Ink>提货</span>
          </div>
        </div>
        <div style={{...rise(frame, 140), display: 'flex', justifyContent: 'center', whiteSpace: 'nowrap'}}>
          <DeskStamp delay={140} frame={frame} color={PALETTE.signal} text={'记名提单限定：凭托运人要求无单放货免责，只适用于签发记名提单的情形'} />
        </div>
      </div>
    </LadingShell>
  );
};

export const CarrierCargoLossScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="minimum-obligations" data-final-knowledge="no-fault-exemption" data-final-knowledge="fault-verdict-lanes" */
  const frame = useCurrentFrame();
  return (
    <LadingShell form={2} title="海运承运人的货损责任">
      <div
        data-layout="cargo-loss-verdict-ladder"
        data-visual-anchor="boundary"
        data-visual-grammar="minimum-obligations-breach-means-compensation,fault-verdicts-split-by-convention"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="navigation-and-agent-fire-fault-free-under-hague-visby-payable-under-hamburg"
        data-focal-channels="contrast,enclosure,connector"
        style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: 6}}
      >
        <FormPanel color={PALETTE.signal} delay={12} frame={frame} flex={0}>
          <div data-final-knowledge="minimum-obligations" style={{fontSize: 24, fontWeight: 800, color: PALETTE.signal, display: 'flex', alignItems: 'center', gap: 10}}>
            <CircleAlert size={24} color={PALETTE.signal} />
            最低限度义务（强制 · 违反即赔）
          </div>
          <div style={{display: 'flex', gap: 16, marginTop: 12}}>
            <span style={{flex: 1, borderLeft: `7px solid ${PALETTE.signal}`, backgroundColor: 'rgba(56,32,43,0.75)', padding: '10px 16px', fontSize: 21, lineHeight: 1.55}}>开航前和开航时<Ink color={PALETTE.signalSoft}>船舶适航</Ink></span>
            <span style={{flex: 1, borderLeft: `7px solid ${PALETTE.signal}`, backgroundColor: 'rgba(56,32,43,0.75)', padding: '10px 16px', fontSize: 21, lineHeight: 1.55}}>整个运输期间妥善<Ink color={PALETTE.signalSoft}>管货</Ink></span>
          </div>
        </FormPanel>
        <div
          data-final-knowledge="no-fault-exemption"
          style={{...rise(frame, 52), border: `2px solid ${PALETTE.ok}`, borderRadius: 12, backgroundColor: PALETTE.okSoft, padding: '14px 26px', display: 'flex', alignItems: 'center', gap: 14}}
        >
          <ShieldCheck size={24} color={PALETTE.ok} />
          <span style={{fontSize: 22}}>
            承运人
            <Ink color={PALETTE.okSoft}>无过失</Ink>
            （如卸货港罢工）→ 任何规则下均
            <Under color={PALETTE.ok}>免责</Under>
          </span>
        </div>
        <div style={{display: 'flex', gap: 22}}>
          <div
            data-final-knowledge="fault-verdict-lanes"
            style={{...rise(frame, 92), flex: 1.2, border: `2px solid ${PALETTE.brass}`, borderRadius: 12, backgroundColor: PALETTE.panel, padding: '16px 26px', fontSize: 21, lineHeight: 1.65}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.brass, display: 'flex', alignItems: 'center', gap: 10}}>
              <Flame size={24} color={PALETTE.brass} />
              两项过失免责（海牙 / 维斯比）
            </div>
            <div style={{marginTop: 10}}>
              <Ink color={PALETTE.brassSoft}>航行过失</Ink>
              ：船长船员驾驶或管理船舶的行为疏忽 → 免责
              <br />
              <Ink color={PALETTE.brassSoft}>火灾过失</Ink>
              ：雇佣人 / 代理人过失致火灾 → 免责；承运人
              <Under color={PALETTE.signal}>实际过失或私谋</Under>
              除外 → 赔偿
            </div>
          </div>
          <div
            style={{...rise(frame, 118), flex: 1, border: `2px solid ${PALETTE.marine}`, borderRadius: 12, backgroundColor: PALETTE.marineSoft, padding: '16px 26px', fontSize: 21, lineHeight: 1.65}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.marine, display: 'flex', alignItems: 'center', gap: 10}}>
              <Anchor size={24} color={PALETTE.marine} />
              《汉堡规则》
            </div>
            <div style={{marginTop: 10}}>
              只有
              <Ink color={PALETTE.marineSoft}>无过失免责</Ink>
              ——航行过失、火灾过失致损均
              <Under color={PALETTE.marine}>应赔偿</Under>
            </div>
          </div>
        </div>
        <div style={{...rise(frame, 156), display: 'flex', justifyContent: 'center', whiteSpace: 'nowrap'}}>
          <DeskStamp delay={156} frame={frame} color={PALETTE.brass} text={'判定路径：先看致损原因（违反最低义务即赔），再选运输规则定免责'} />
        </div>
      </div>
    </LadingShell>
  );
};

export const ThreeRulesScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="rules-liability-basis" data-final-knowledge="rules-period-limit-time" data-final-knowledge="hamburg-extensions" */
  const frame = useCurrentFrame();
  const rows = [
    {label: '责任基础', hv: '不完全的过失责任制', hb: '完全的过失责任制'},
    {label: '免责', hv: '航行过失 +（雇佣人/代理人）火灾过失 + 无过失免责', hb: '仅无过失免责'},
    {label: '责任期间', hv: '装到卸', hb: '接到交'},
    {label: '责任限制', hv: '低', hb: '高'},
    {label: '诉讼时效', hv: '1 年', hb: '2 年'},
  ];
  const extensions = [
    {name: '延迟责任', detail: '赔迟交货物运费 2.5 倍，不超应付运费总额'},
    {name: '实际承运人', detail: '与订约承运人共负连带责任'},
    {name: '舱面货活牲畜', detail: '强制性规定同样适用'},
    {name: '善意保函', detail: '托运人与承运人之间有效，不能对抗收货人'},
  ];
  return (
    <LadingShell form={3} title="海牙·维斯比 vs 汉堡">
      <div
        data-layout="rules-comparison-ledger-lanes"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="hague-visby-incomplete-versus-hamburg-complete-liability,hamburg-extends-four-new-fields"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="visby-same-as-hague-with-higher-limit-unregulated-means-charter-terms-control"
        data-focal-channels="contrast,enclosure,locator"
        style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: 6}}
      >
        <div style={{display: 'flex', gap: 16}}>
          <div style={{flex: '0 0 172px'}} />
          <div style={{flex: 1.25, textAlign: 'center', fontSize: 24, fontWeight: 900, color: PALETTE.brass, borderBottom: `3px solid ${PALETTE.brass}`, paddingBottom: 8}}>《海牙规则》《维斯比规则》</div>
          <div style={{flex: 1, textAlign: 'center', fontSize: 24, fontWeight: 900, color: PALETTE.marine, borderBottom: `3px solid ${PALETTE.marine}`, paddingBottom: 8}}>《汉堡规则》</div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 12, flex: 1}}>
          {rows.map((row) => (
            <div
              key={row.label}
              data-final-knowledge={row.label === '责任基础' ? 'rules-liability-basis' : 'rules-period-limit-time'}
              style={{...slideX(frame, 14 + rows.indexOf(row) * 20, 40), display: 'flex', gap: 16, flex: 1, alignItems: 'stretch'}}
            >
              <div style={{flex: '0 0 172px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderLeft: `8px solid ${PALETTE.brass}`, backgroundColor: PALETTE.panel, borderRadius: 8, fontSize: 22, fontWeight: 800, color: PALETTE.paper}}>{row.label}</div>
              <div style={{flex: 1.25, display: 'flex', alignItems: 'center', border: `2px solid ${PALETTE.line}`, borderRadius: 8, backgroundColor: PALETTE.panel, padding: '8px 18px', fontSize: 21, lineHeight: 1.5}}>{row.hv}</div>
              <div style={{flex: 1, display: 'flex', alignItems: 'center', border: `2px solid ${PALETTE.marine}`, borderRadius: 8, backgroundColor: PALETTE.marineSoft, padding: '8px 18px', fontSize: 21, lineHeight: 1.5}}>{row.hb}</div>
            </div>
          ))}
        </div>
        <div
          data-final-knowledge="hamburg-extensions"
          style={{...rise(frame, 140), border: `2px solid ${PALETTE.signal}`, borderRadius: 12, backgroundColor: PALETTE.panel, padding: '14px 24px'}}
        >
          <div style={{fontSize: 23, fontWeight: 800, color: PALETTE.signal}}>《汉堡规则》扩展的四个领域（海牙 / 维斯比均无规定）</div>
          <div style={{display: 'flex', gap: 14, marginTop: 10}}>
            {extensions.map((item) => (
              <span key={item.name} style={{flex: 1, borderLeft: `6px solid ${PALETTE.signal}`, backgroundColor: 'rgba(56,32,43,0.75)', padding: '8px 14px', fontSize: 20, lineHeight: 1.5}}>
                <b style={{color: PALETTE.signal}}>{item.name}</b>
                <br />
                {item.detail}
              </span>
            ))}
          </div>
        </div>
        <div style={{...rise(frame, 172), display: 'flex', justifyContent: 'center', whiteSpace: 'nowrap'}}>
          <DeskStamp delay={172} frame={frame} color={PALETTE.marine} text={'维斯比 = 海牙实质内容 + 更高赔偿限额；无规定 ≠ 免责，个案看提单约定'} />
        </div>
      </div>
    </LadingShell>
  );
};

export const TransportModesScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="sea-mode-column" data-final-knowledge="air-mode-column" data-final-knowledge="rail-mode-column" */
  const frame = useCurrentFrame();
  const modes = [
    {
      id: 'sea-mode-column',
      icon: <Ship size={30} color={PALETTE.brass} />,
      name: '海运',
      color: PALETTE.brass,
      law: '《海牙规则》《维斯比规则》《汉堡规则》',
      doc: '提单＝物权凭证；海运单≠',
      duty: '不完全过失（海/维）；完全过失（汉堡）',
      limit: '有责任限制',
    },
    {
      id: 'air-mode-column',
      icon: <Plane size={30} color={PALETTE.marine} />,
      name: '空运',
      color: PALETTE.marine,
      law: '《华沙公约》《海牙议定书》《蒙特利尔公约》',
      doc: '运单≠物权凭证',
      duty: '不完全过失（华）；完全过失（海牙议定书/蒙）；接到交',
      limit: '有责任限制',
    },
    {
      id: 'rail-mode-column',
      icon: <Truck size={30} color={PALETTE.signal} />,
      name: '铁路',
      color: PALETTE.signal,
      law: '《国际货协》',
      doc: '运单≠物权凭证',
      duty: '完全过失；足额赔偿；接到交；联运连带责任',
      limit: '无责任限制（足额赔偿）',
    },
  ];
  return (
    <LadingShell form={4} title="海运·空运·铁路 三式对照">
      <div
        data-layout="modes-three-form-columns"
        data-visual-anchor="role-pair"
        data-visual-grammar="only-sea-billoflading-is-document-of-title,rail-carries-full-and-unlimited-liability"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="rail-transport-no-liability-limitation-full-compensation"
        data-focal-channels="contrast,enclosure,locator"
        style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: 6}}
      >
        <div style={{display: 'flex', gap: 22, flex: 1}}>
          {modes.map((mode) => (
            <div
              key={mode.id}
              data-final-knowledge={mode.id}
              style={{...rise(frame, 12 + modes.indexOf(mode) * 28), flex: 1, border: `2px solid ${mode.color}`, borderRadius: 12, backgroundColor: PALETTE.panel, padding: '18px 24px', display: 'flex', flexDirection: 'column'}}
            >
              <div style={{display: 'flex', alignItems: 'center', gap: 12, borderBottom: `2px dashed ${PALETTE.line}`, paddingBottom: 10}}>
                {mode.icon}
                <span style={{fontSize: 27, fontWeight: 900, color: mode.color}}>{mode.name}</span>
              </div>
              <div style={{marginTop: 12, fontSize: 20, lineHeight: 1.6}}>
                <div><b style={{color: PALETTE.muted}}>法律基础：</b>{mode.law}</div>
                <div style={{marginTop: 8}}><b style={{color: PALETTE.muted}}>运单效力：</b>{mode.doc}</div>
                <div style={{marginTop: 8}}><b style={{color: PALETTE.muted}}>承运责任：</b>{mode.duty}</div>
                <div style={{marginTop: 8}}><b style={{color: PALETTE.muted}}>责任限制：</b>{mode.limit}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{...rise(frame, 120), display: 'flex', justifyContent: 'center', whiteSpace: 'nowrap'}}>
          <DeskStamp delay={120} frame={frame} color={PALETTE.marine} text={'国际货物运输单证中，只有海运提单具有物权凭证效力'} />
        </div>
      </div>
    </LadingShell>
  );
};

export const MarineRisksLossesScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="marine-risk-family" data-final-knowledge="loss-decision-path" data-final-knowledge="constructive-total-loss-notice" data-final-knowledge="general-average-elements" */
  const frame = useCurrentFrame();
  return (
    <LadingShell form={5} title="海上风险与损失判定">
      <div
        data-layout="risk-loss-split-board"
        data-visual-anchor="document-fork"
        data-visual-grammar="marine-versus-external-risk-family,partial-loss-splits-by-intentional-measures"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="common-average-needs-common-danger-intentional-and-reasonable-measures"
        data-focal-channels="contrast,enclosure,connector"
        style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: 6}}
      >
        <div style={{display: 'flex', gap: 22, flex: 1.2}}>
          <FormPanel color={PALETTE.marine} delay={12} frame={frame}>
            <div data-final-knowledge="marine-risk-family" style={{fontSize: 24, fontWeight: 800, color: PALETTE.marine, display: 'flex', alignItems: 'center', gap: 10}}>
              <Waves size={24} color={PALETTE.marine} />
              风险（原因）分类
            </div>
            <div style={{marginTop: 10, fontSize: 21, lineHeight: 1.7}}>
              <Ink color={PALETTE.marineSoft}>海上风险</Ink>
              ：自然灾害（风暴海啸）· 意外事故（触礁搁浅整件落海）
              <br />
              <Ink color={PALETTE.brassSoft}>外来风险</Ink>
              ：一般（偷窃短量串味钩损）·
              <Under color={PALETTE.brass}>特别</Under>
              （政治行政）·
              <Under color={PALETTE.signal}>特殊</Under>
              （战争罢工）
            </div>
          </FormPanel>
          <FormPanel color={PALETTE.brass} delay={40} frame={frame}>
            <div data-final-knowledge="loss-decision-path" style={{fontSize: 24, fontWeight: 800, color: PALETTE.brass, display: 'flex', alignItems: 'center', gap: 10}}>
              <GitBranchIcon />
              损失（结果）判定路径
            </div>
            <div style={{marginTop: 10, fontSize: 21, lineHeight: 1.7}}>
              先分
              <Ink color={PALETTE.brassSoft}>全部 / 部分损失</Ink>
              → 部分损失看是否
              <Under color={PALETTE.brass}>有意</Under>
              采取措施 → 非「有意」一定是
              <Ink color={PALETTE.marineSoft}>单独海损</Ink>
              ；「有意」且满足
              <Under color={PALETTE.marine}>船货共同危险 + 合理</Under>
              → 共同海损
            </div>
          </FormPanel>
        </div>
        <div style={{display: 'flex', gap: 22}}>
          <div
            data-final-knowledge="constructive-total-loss-notice"
            style={{...rise(frame, 84), flex: 1.15, border: `2px solid ${PALETTE.signal}`, borderRadius: 12, backgroundColor: PALETTE.panel, padding: '16px 26px', fontSize: 21, lineHeight: 1.65}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.signal, display: 'flex', alignItems: 'center', gap: 10}}>
              <PackageOpen size={24} color={PALETTE.signal} />
              推定全损 · 委付
            </div>
            <div style={{marginTop: 10}}>
              实际全损不可避免，或施救费用
              <Ink color={PALETTE.signalSoft}>超过保险价值</Ink>
              （费用超值）
              <br />
              被保险人：发
              <Under color={PALETTE.brass}>委付</Under>
              → 按
              <Ink color={PALETTE.signalSoft}>实际全损</Ink>
              获赔；不发 → 按部分损失
              <br />
              保险人：接受委付 → 残值权利义务
              <Under color={PALETTE.marine}>一并转移</Under>
              ；不接受 → 仍归被保险人
            </div>
          </div>
          <div
            data-final-knowledge="general-average-elements"
            style={{...rise(frame, 112), flex: 1, border: `2px solid ${PALETTE.ok}`, borderRadius: 12, backgroundColor: PALETTE.okSoft, padding: '16px 26px', fontSize: 21, lineHeight: 1.65}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.ok, display: 'flex', alignItems: 'center', gap: 10}}>
              <Anchor size={24} color={PALETTE.ok} />
              共同海损 · 三要件
            </div>
            <div style={{marginTop: 10}}>
              船货
              <Ink color={PALETTE.okSoft}>共同危险</Ink>
              ·
              <Under color={PALETTE.ok}>有意</Under>
              采取措施 · 措施
              <Under color={PALETTE.ok}>相对合理</Under>
              <br />
              后果：获救财产受益人按比例
              <Ink color={PALETTE.okSoft}>分摊</Ink>
              （共损必属部分损失）
            </div>
          </div>
        </div>
      </div>
    </LadingShell>
  );
};

const GitBranchIcon = () => <BookOpen size={24} color={PALETTE.brass} />;

export const InsuranceCoverageScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="coverage-ladder-three-risks" data-final-knowledge="additional-coverage-chips" data-final-knowledge="exclusions-and-warehouse-warehouse" */
  const frame = useCurrentFrame();
  const ladder = [
    {
      id: 'coverage-ladder-three-risks',
      name: '平安险',
      color: PALETTE.marine,
      cells: ['自然灾害：全损√ 共损√ 单损×', '意外事故：全损√ 共损√ 单损√', '外来风险：均×'],
    },
    {
      id: 'coverage-ladder-three-risks',
      name: '水渍险',
      color: PALETTE.brass,
      cells: ['海上风险全部√（含自然灾害单损）', '＝平安险 + 自然灾害单损', '外来风险：均×'],
    },
    {
      id: 'coverage-ladder-three-risks',
      name: '一切险',
      color: PALETTE.ok,
      cells: ['海上风险全部√', '一般外来风险√（11 种一般附加险）', '特别 / 特殊外来：×'],
    },
  ];
  return (
    <LadingShell form={6} title="海运货物保险的险别与期间">
      <div
        data-layout="insurance-coverage-ladder-sheet"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="three-basic-risks-ladder-by-coverage,warehouse-to-warehouse-period-with-exclusions"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="accident-caused-losses-paid-under-all-three-natural-disaster-particular-average-only-from-with-water"
        data-focal-channels="contrast,enclosure,connector"
        style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: 6}}
      >
        <div style={{display: 'flex', flexDirection: 'column', gap: 14, flex: 1.25}}>
          {ladder.map((row) => (
            <div key={row.name} style={{...slideX(frame, 12 + ladder.indexOf(row) * 26, 44), display: 'flex', alignItems: 'stretch', gap: 18, flex: 1}}>
              <div style={{flex: '0 0 150px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `2px solid ${row.color}`, borderRadius: 10, backgroundColor: PALETTE.panel, fontSize: 25, fontWeight: 900, color: row.color}}>{row.name}</div>
              {row.cells.map((cell, index) => (
                <div key={cell} style={{flex: 1, display: 'flex', alignItems: 'center', border: `1px solid ${PALETTE.line}`, borderRadius: 8, backgroundColor: PALETTE.panel, padding: '8px 16px', fontSize: 20, lineHeight: 1.5, borderTop: `4px solid ${row.color}${index === 0 ? '' : ''}`}}>{cell}</div>
              ))}
            </div>
          ))}
        </div>
        <div style={{display: 'flex', gap: 20}}>
          <div
            data-final-knowledge="additional-coverage-chips"
            style={{...rise(frame, 110), flex: 1.15, border: `2px solid ${PALETTE.brass}`, borderRadius: 12, backgroundColor: PALETTE.panel, padding: '14px 24px', fontSize: 21, lineHeight: 1.65}}
          >
            <div style={{fontSize: 23, fontWeight: 800, color: PALETTE.brass, display: 'flex', alignItems: 'center', gap: 10}}>
              <ClipboardCheck size={22} color={PALETTE.brass} />
              附加险
            </div>
            <div style={{marginTop: 8}}>
              一般附加险
              <Ink color={PALETTE.brassSoft}>11 种</Ink>
              · 特别附加险
              <Ink color={PALETTE.marineSoft}>6 种</Ink>
              · 特殊附加险：
              <Under color={PALETTE.signal}>战争险 · 罢工险</Under>
              <br />
              意外事故致损：任何险别都赔
            </div>
          </div>
          <div
            data-final-knowledge="exclusions-and-warehouse-warehouse"
            style={{...rise(frame, 136), flex: 1.35, border: `2px solid ${PALETTE.signal}`, borderRadius: 12, backgroundColor: PALETTE.panel, padding: '14px 24px', fontSize: 21, lineHeight: 1.65}}
          >
            <div style={{fontSize: 23, fontWeight: 800, color: PALETTE.signal, display: 'flex', alignItems: 'center', gap: 10}}>
              <CircleAlert size={22} color={PALETTE.signal} />
              除外责任 · 责任期间
            </div>
            <div style={{marginTop: 8}}>
              不赔：被保险人
              <Ink color={PALETTE.signalSoft}>故意或过失</Ink>
              · 发货人责任 · 开航前已有
              <Under color={PALETTE.signal}>品质不良数量短差</Under>
              · 间接损失（自然损耗 / 本质缺陷 / 市价跌落 / 运输延迟）
            </div>
            <div style={{marginTop: 8, display: 'flex', alignItems: 'center', gap: 10}}>
              <Ship size={20} color={PALETTE.marine} />
              <span>
                保险期间：约定优先，常用
                <Ink color={PALETTE.marineSoft}>「仓至仓」</Ink>
                ——运离起运地仓库 → 到达收货人最后仓库
              </span>
            </div>
          </div>
        </div>
      </div>
    </LadingShell>
  );
};

export const GoodsTransportInsurance = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: PALETTE.wine, overflow: 'hidden'}}
  >
    <TimelineSequence name="01-bill-of-lading" {...SCENES.billOfLading}>
      <BillOfLadingScene />
    </TimelineSequence>
    <TimelineSequence name="02-carrier-delivery" {...SCENES.carrierDelivery}>
      <CarrierDeliveryScene />
    </TimelineSequence>
    <TimelineSequence name="03-carrier-cargo-loss" {...SCENES.carrierCargoLoss}>
      <CarrierCargoLossScene />
    </TimelineSequence>
    <TimelineSequence name="04-three-rules" {...SCENES.threeRules}>
      <ThreeRulesScene />
    </TimelineSequence>
    <TimelineSequence name="05-transport-modes" {...SCENES.transportModes}>
      <TransportModesScene />
    </TimelineSequence>
    <TimelineSequence name="06-marine-risks-losses" {...SCENES.marineRisksLosses}>
      <MarineRisksLossesScene />
    </TimelineSequence>
    <TimelineSequence name="07-insurance-coverage" {...SCENES.insuranceCoverage}>
      <InsuranceCoverageScene />
    </TimelineSequence>
  </AbsoluteFill>
);
