import type {CSSProperties, ReactNode} from 'react';
import {Ban, Coins, Gavel, HandCoins, Handshake, Scale, Shield, Undo2, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  sakura: '#4A2E3E',
  sakuraMid: '#5E3D52',
  blossom: '#E8C9D4',
  blossomPale: '#F2E4EA',
  cream: '#F4F1E6',
  creamDim: '#E9E4D3',
  edge: '#C6BFAA',
  teal: '#3E7A72',
  tealPale: '#DDEBE8',
  goldWire: '#C9A13B',
  goldPale: '#F0E7C9',
  seal: '#B04A38',
  sealPale: '#F0DEDA',
  ink: '#2A2228',
  inkSoft: '#776B72',
  indigoLike: '#3A5578',
  jadeLike: '#3E7A64',
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

export const Mover = ({children, delay = 0, span = 30, fromX = 0, toX = 0, fromY = 0, toY = 0, fadeAt, style}: {
  readonly children: ReactNode;
  readonly delay?: number;
  readonly fadeAt?: number;
  readonly fromX?: number;
  readonly fromY?: number;
  readonly span?: number;
  readonly toX?: number;
  readonly toY?: number;
  readonly style?: CSSProperties;
}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, span);
  return (
    <div
      style={{
        ...style,
        opacity: fadeAt === undefined ? p : interpolate(frame, [delay, delay + 6, fadeAt, fadeAt + 10], [0, 1, 1, 0], CLAMP),
        translate: `${interpolate(frame, [delay, delay + span], [fromX, toX], CLAMP)}px ${interpolate(frame, [delay, delay + span], [fromY, toY], CLAMP)}px`,
      }}
    >
      {children}
    </div>
  );
};

export const Path = ({color = C.goldWire, delay = 0, span = 20, style}: {readonly color?: string; readonly delay?: number; readonly span?: number; readonly style?: CSSProperties}) => {
  const frame = useCurrentFrame();
  return (
    <div
      style={{
        ...style,
        backgroundColor: color,
        scale: `${prog(frame, delay, span)} 1`,
        transformOrigin: 'left center',
      }}
    />
  );
};

export const Shell = ({children, code, kicker, title}: {readonly children: ReactNode; readonly code: string; readonly kicker: string; readonly title: string}) => {
  const sceneIndex = Math.max(0, Math.min(2, Number(code) - 1));
  return (
    <AbsoluteFill
      data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
      style={{
        backgroundColor: C.sakura,
        color: C.cream,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `repeating-linear-gradient(0deg, transparent 0 132px, rgba(232, 201, 212, 0.05) 132px 135px), repeating-linear-gradient(90deg, transparent 0 132px, rgba(0, 0, 0, 0.13) 132px 135px)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 12, background: `linear-gradient(90deg, ${C.seal}, ${C.goldWire}, ${C.teal})`, opacity: 0.92}} />
      <div style={{position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: '2px solid rgba(232, 201, 212, 0.32)'}} />
      <div style={{position: 'absolute', left: 60, top: 44, padding: '10px 16px', backgroundColor: C.sakuraMid, borderLeft: `8px solid ${C.teal}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.cream, letterSpacing: 2}}>民法 · 第10讲 · {code}</span>
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
          borderBottom: `2px solid ${C.goldWire}`,
        }}
      >
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.blossomPale}}>{title}</h1>
        <span style={{fontSize: 22, fontWeight: 850, color: C.goldPale, textAlign: 'right'}}>{kicker}</span>
      </header>
      <div style={{position: 'absolute', right: 64, bottom: 44, display: 'flex', alignItems: 'center', gap: 10, opacity: 0.85}}>
        {[0, 1, 2].map((dot) => (
          <span
            key={dot}
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: dot === sceneIndex ? C.teal : 'transparent',
              border: `2px solid ${C.teal}`,
            }}
          />
        ))}
      </div>
      <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    </AbsoluteFill>
  );
};

export const Panel = ({children, marker, tone = C.sakuraMid, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.cream, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${tone}`, borderTop: `8px solid ${tone}`, color: C.ink, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(42, 34, 40, 0.35)', ...style}}
  >
    <span style={{position: 'absolute', right: 10, top: 14, width: 26, height: 26, borderTop: `3px solid ${tone}`, borderRight: `3px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 14, bottom: 10, width: 26, height: 26, borderBottom: `3px solid ${tone}`, borderLeft: `3px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.sakuraMid, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.sakuraMid, borderLeft: `6px solid ${tone}`, color: C.blossomPale, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.creamDim, borderLeft: `5px solid ${tone}`, padding: '5px 12px'}}>
    <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 10, backgroundColor: tone, border: `2px solid ${C.cream}`, boxShadow: `0 0 0 2px rgba(62, 122, 114, 0.4)`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.42}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Seal = ({children, delay = 0, size = 22, tone = C.seal}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '6px 14px',
        border: `4px double ${tone}`,
        color: tone,
        backgroundColor: `${tone}12`,
        fontSize: size,
        fontWeight: 950,
        letterSpacing: 2,
        opacity: p,
        scale: 0.85 + p * 0.15,
        rotate: '-2deg',
      }}
    >
      {children}
    </span>
  );
};

export const Under = ({children, color = C.goldWire, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

export const Chip = ({children, tone = C.edge, toneBg = C.creamDim, ink = C.ink}: {readonly children: ReactNode; readonly tone?: string; readonly toneBg?: string; readonly ink?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${tone}`, backgroundColor: toneBg, padding: '5px 12px', fontSize: 22, fontWeight: 900, color: ink, whiteSpace: 'nowrap'}}>{children}</span>
);

export const SubrogationScene = () => {
  /* data-final-knowledge="subrogation-definition" data-final-knowledge="formation-mnemonic" data-final-knowledge="exercise-rules" data-final-knowledge="outcome-rules" */
  return (
    <Shell code="01" kicker="代位权 · 替债务人收债" title="代位权">
      <div
        data-layout="creditor-debtor-subdebtor-chain-with-court-gates"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="two-mature-debts-a-lazy-debtor-and-harmed-credit-open-the-gate,laziness-means-never-suing-or-arbitrating-the-subdebtor,the-creditor-sues-in-own-name-with-the-subdebtor-as-defendant,the-subdebtor-pays-the-creditor-directly-in-one-step"
        data-focal-rule="the-creditor-chip-leaps-over-the-lazy-debtor-straight-to-the-subdebtor-court-gate"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="subrogation-definition" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 110}}>
          <Panel tone={C.sakuraMid} watermark={<HandCoins size={110} color={C.sakuraMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '9px 18px'}}>
            <PanelTab tone={C.sakuraMid} icon={<HandCoins size={24} color={C.blossomPale} strokeWidth={2.2} />}>代位权 · 定义（保全债务人责任财产）</PanelTab>
            <span style={{fontSize: 22, fontWeight: 900, color: C.ink }}>债务人<Soft color={C.teal}>怠于</Soft>向<Soft color={C.seal}>次债务人</Soft>主张债权·有损债权时，债权人<Under color={C.teal} delay={120}>直接</Under>对次债务人主张债务人的债权</span>
          </Panel>
        </Enter>
        <Enter delay={36} from="up" marker="formation-mnemonic" style={{position: 'absolute', left: 0, top: 126, width: 1776, height: 240}}>
          <Panel tone={C.teal} watermark={<Scale size={130} color={C.teal} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.teal} icon={<Scale size={24} color={C.cream} strokeWidth={2.2} />}>成立条件 · 两个到期·一个怠于·有损债权</PanelTab>
            <div style={{display: 'flex', gap: 12, flexWrap: 'wrap', fontSize: 21, fontWeight: 900, color: C.ink }}>
              <Chip tone={C.teal} toneBg={C.tealPale}><span style={{fontSize: 20, fontWeight: 950, color: C.teal }}>两个到期：债权人对债务人＋债务人对次债务人均到期</span></Chip>
              <Chip tone={C.seal} toneBg={C.sealPale}><span style={{fontSize: 20, fontWeight: 950, color: C.seal }}>怠于＝未以诉讼·仲裁方式主张（其他方式在所不问）</span></Chip>
              <Chip tone={C.goldWire} toneBg={C.goldPale}><span style={{fontSize: 20, fontWeight: 950, color: C.goldWire }}>有损：未明确时依法推定有损（1000 万现金案 → 明确无损即不得主张）</span></Chip>
            </div>
            <div style={{display: 'flex', gap: 14}}>
              <IconChip icon={<Gavel size={24} color={C.cream} strokeWidth={2.2} />} tone={C.seal} title="紧急例外（到期前也可代位）：">
                ① 诉讼时效期间即将<Soft color={C.seal}>届满</Soft>——代位请求履行 ② 次债务人<Soft color={C.seal}>破产</Soft>未申报——代位申报破产债权
              </IconChip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={80} from="left" marker="exercise-rules" style={{position: 'absolute', left: 0, top: 382, width: 866, height: 386}}>
          <Panel tone={C.sakuraMid} watermark={<Users size={140} color={C.sakuraMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.sakuraMid} icon={<Users size={24} color={C.blossomPale} strokeWidth={2.2} />}>行使规则 · 诉讼方式</PanelTab>
            <IconChip icon={<Users size={24} color={C.cream} strokeWidth={2.2} />} tone={C.indigoLike} title="当事人：">
              原告＝债权人（以<Soft color={C.indigoLike}>自己名义</Soft>）·被告＝次债务人·债务人＝无独立请求权第三人（法院<Soft color={C.indigoLike}>应追加</Soft>）
            </IconChip>
            <IconChip icon={<Gavel size={24} color={C.cream} strokeWidth={2.2} />} tone={C.teal} title="管辖：">
              <Soft color={C.teal}>次债务人住所地</Soft>法院；债务人·次债务人间的仲裁·管辖协议<Soft color={C.seal}>不影响</Soft>
            </IconChip>
            <IconChip icon={<Scale size={24} color={C.cream} strokeWidth={2.2} />} tone={C.goldWire} title="范围：">
              以债权人的债权为限——「<Soft color={C.goldWire}>就低不就高</Soft>」；主债权代位·<Soft color={C.goldWire}>担保权随之代位</Soft>
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 900, color: C.inkSoft }}>诉讼冲突：多债权人可合并审理按比例履行；原债之诉与代位权之诉——有管辖合并·无管辖中止（先提起的继续·后提起的中止）；仲裁首次开庭前提起 → 中止代位权之诉</div>
          </Panel>
        </Enter>
        <Enter delay={110} from="right" marker="outcome-rules" style={{position: 'absolute', left: 910, top: 382, width: 866, height: 386}}>
          <Panel tone={C.indigoLike} watermark={<Coins size={140} color={C.indigoLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.indigoLike} icon={<Coins size={24} color={C.blossomPale} strokeWidth={2.2} />}>法律后果 · 一步到位</PanelTab>
            <div style={{position: 'relative', height: 78}}>
              <div style={{position: 'absolute', left: 0, top: 20, display: 'flex', gap: 10, alignItems: 'center'}}>
                <Chip tone={C.indigoLike} toneBg={C.blossomPale}><span style={{fontSize: 21, fontWeight: 950, color: C.indigoLike }}>次债务人</span></Chip>
              </div>
              <Path color={C.teal} delay={130} span={20} style={{position: 'absolute', left: 190, top: 50, width: 220, height: 4}} />
              <Mover delay={136} span={22} fromX={0} toX={220} fadeAt={200} style={{position: 'absolute', left: 20, top: 20, zIndex: 2}}>
                <Chip tone={C.indigoLike} toneBg={C.blossomPale}><Coins size={20} color={C.indigoLike} strokeWidth={2.4} /><span style={{fontSize: 21, fontWeight: 950, color: C.indigoLike }}>清偿</span></Chip>
              </Mover>
              <div style={{position: 'absolute', left: 420, top: 14}}><Seal delay={196} size={20} tone={C.teal}>直接向债权人履行 ✓</Seal></div>
              <div style={{position: 'absolute', left: 420, top: 56, fontSize: 20, fontWeight: 900, color: C.inkSoft }}>清偿范围内相应债权债务消灭</div>
            </div>
            <IconChip icon={<Coins size={24} color={C.blossomPale} strokeWidth={2.2} />} tone={C.seal} title="费用：">
              诉讼费由<Soft color={C.seal}>次债务人</Soft>承担→事后向债务人<Soft color={C.indigoLike}>追偿</Soft>；其他必要费用由<Soft color={C.indigoLike}>债务人</Soft>承担
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 900, color: C.inkSoft }}>抗辩三路：债务人对债权人的抗辩·次债务人对债务人的抗辩——均可向债权人主张；诉中还可直接抗辩</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const RevocationConditionsScene = () => {
  /* data-final-knowledge="revocation-definition" data-final-knowledge="minus-one-plus-zero-rule" data-final-knowledge="act-type-cards" data-final-knowledge="debt-period-rule" */
  return (
    <Shell code="02" kicker="撤销权 · 不当处分" title="撤销权的成立条件">
      <div
        data-layout="minus-one-plus-zero-ledgers-with-type-cards"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="only-acts-reducing-the-reserve-may-be-revoked,waiving-inheritance-merely-fails-to-add-and-never-flips,gratuitous-acts-revoke-regardless-of-recipient-malice,undervalued-trades-and-guarantees-need-a-malicious-counterparty"
        data-focal-rule="only-minus-one-ledger-pages-flip-while-plus-zero-pages-stay-shut"
        data-focal-channels="contrast,connector,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="revocation-definition" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 108}}>
          <Panel tone={C.sakuraMid} watermark={<Undo2 size={110} color={C.sakuraMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '9px 18px'}}>
            <PanelTab tone={C.sakuraMid} icon={<Undo2 size={24} color={C.blossomPale} strokeWidth={2.2} />}>撤销权 · 定义</PanelTab>
            <span style={{fontSize: 22, fontWeight: 900, color: C.ink }}>债务人向第三人<Soft color={C.seal}>不当处分财产</Soft>，导致<Soft color={C.teal}>责任财产减少</Soft>·有损债权 → 债权人<Under color={C.seal} delay={120}>撤销</Under>该处分行为</span>
          </Panel>
        </Enter>
        <Enter delay={36} from="up" marker="minus-one-plus-zero-rule" style={{position: 'absolute', left: 0, top: 124, width: 1776, height: 176}}>
          <Panel tone={C.teal} watermark={<Shield size={130} color={C.teal} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 18px'}}>
            <PanelTab tone={C.teal} icon={<Shield size={24} color={C.cream} strokeWidth={2.2} />}>账本二分 · 责任财产 −1 vs ＋0</PanelTab>
            <div style={{display: 'flex', gap: 14}}>
              <IconChip icon={<Undo2 size={24} color={C.cream} strokeWidth={2.2} />} tone={C.seal} title="−1 可撤销：">
                导致责任财产<Soft color={C.seal}>减少</Soft>的行为（离婚协议放弃共同财产分割 → <Seal delay={160} size={17} tone={C.seal}>能撤</Seal>）
              </IconChip>
              <IconChip icon={<Ban size={24} color={C.cream} strokeWidth={2.2} />} tone={C.slateLike} title="＋0 不可撤销：">
                责任财产<Soft color={C.slateLike}>未增加</Soft>（放弃继承 → <Seal delay={190} size={17}>不能撤</Seal>——只是没变多）
              </IconChip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={80} from="up" marker="act-type-cards" style={{position: 'absolute', left: 0, top: 316, width: 1776, height: 356}}>
          <Panel tone={C.seal} watermark={<Ban size={150} color={C.seal} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.seal} icon={<Ban size={24} color={C.blossomPale} strokeWidth={2.2} />}>不当处分行为类型 · 三卡</PanelTab>
            <div style={{display: 'flex', gap: 12}}>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 5, backgroundColor: C.creamDim, borderLeft: `6px solid ${C.seal}`, padding: '9px 13px'}}>
                <span style={{fontSize: 21, fontWeight: 950, color: C.seal }}>无偿处分（相对人恶意在所不问）</span>
                <span style={{fontSize: 19, fontWeight: 900, color: C.ink }}>① 无偿转让财产 ② 放弃债权担保 ③ 放弃债权·延长债期 ④ 其他致责任财产减少</span>
              </div>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 5, backgroundColor: C.creamDim, borderLeft: `6px solid ${C.goldWire}`, padding: '9px 13px'}}>
                <span style={{fontSize: 21, fontWeight: 950, color: C.goldWire }}>不等价处分（需第三人恶意）</span>
                <span style={{fontSize: 19, fontWeight: 900, color: C.ink }}>① 明显低价转让（<Soft color={C.goldWire}>未达 70%</Soft>）② 明显高价受让（<Soft color={C.goldWire}>超 30%</Soft>）③ 亲属·关联交易（纵未破比例也算）</span>
              </div>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 5, backgroundColor: C.creamDim, borderLeft: `6px solid ${C.indigoLike}`, padding: '9px 13px'}}>
                <span style={{fontSize: 21, fontWeight: 950, color: C.indigoLike }}>为他人债务提供担保（需第三人恶意）</span>
                <span style={{fontSize: 19, fontWeight: 900, color: C.ink }}>债务人为他人的债务提供担保 → 构成不当处分</span>
              </div>
            </div>
            <div data-final-knowledge="debt-period-rule" style={{marginTop: 'auto', display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', fontSize: 21, fontWeight: 900, color: C.ink }}>
              <Chip tone={C.seal} toneBg={C.sealPale}><span style={{fontSize: 20, fontWeight: 950, color: C.seal }}>🌟 处分须发生在债权成立之后（负债后处分）</span></Chip>
              <span>5 月 1 日借款：2 月 1 日赠与房屋<Seal delay={200} size={17}>不可撤</Seal>·7 月 1 日赠与汽车<Seal delay={230} size={17} tone={C.seal}>可撤</Seal></span>
              <span style={{color: C.inkSoft }}>衔接：代位前免债延期 → 先撤销后代位；代位后 → 不影响</span>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const RevocationLadderScene = () => {
  /* data-final-knowledge="exercise-rules-limb" data-final-knowledge="window-ladder" data-final-knowledge="void-consequence" data-final-knowledge="two-power-comparison" */
  return (
    <Shell code="03" kicker="行使规则 · 期限阶梯 · 双权对照" title="撤销权的行使与双权对照">
      <div
        data-layout="exercise-ladder-with-two-power-strip"
        data-visual-anchor="timeline-gate"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="revocation-sues-creditor-against-debtor-and-third-party-together,one-year-from-knowing-and-five-years-from-the-act-caps-the-window,revoked-dispositions-are-void-from-the-start-with-costs-on-the-debtor,subrogation-trims-the-lazy-debtor-while-revocation-trims-the-spender"
        data-focal-rule="revocation-chips-climb-the-one-year-knowing-rung-and-the-five-year-act-rung"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="exercise-rules-limb" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 250}}>
          <Panel tone={C.sakuraMid} watermark={<Gavel size={140} color={C.sakuraMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.sakuraMid} icon={<Gavel size={24} color={C.blossomPale} strokeWidth={2.2} />}>行使 · 诉讼方式</PanelTab>
            <IconChip icon={<Users size={24} color={C.cream} strokeWidth={2.2} />} tone={C.indigoLike} title="当事人：">
              原告＝债权人；<Soft color={C.seal}>共同被告</Soft>＝债务人＋第三人
            </IconChip>
            <IconChip icon={<Gavel size={24} color={C.cream} strokeWidth={2.2} />} tone={C.teal} title="管辖：">
              <Soft color={C.teal}>债务人</Soft>或<Soft color={C.teal}>第三人</Soft>住所地法院；多债权人可合并审理；与原债之诉有管辖则合并·无管辖则另行起诉
            </IconChip>
          </Panel>
        </Enter>
        <div style={{position: 'absolute', left: 910, top: 0, width: 866, height: 250}}>
          <Enter delay={34} from="right" marker="window-ladder" style={{position: 'absolute', inset: 0}}>
            <Panel tone={C.seal} watermark={<Undo2 size={140} color={C.seal} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
              <PanelTab tone={C.seal} icon={<Undo2 size={24} color={C.blossomPale} strokeWidth={2.2} />}>期限阶梯 · 双窗封顶</PanelTab>
              {(
                [
                  {tone: C.indigoLike, chip: '主观期限 · 1 年', detail: '自知道或应当知道撤销事由之日起'},
                  {tone: C.seal, chip: '客观期限 · 5 年', detail: '自不当处分行为发生之日起——逾期撤销权消灭'},
                ] as const
              ).map((rung) => (
                <div key={rung.chip} style={{position: 'relative', display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.creamDim, borderLeft: `6px solid ${rung.tone}`, padding: '8px 13px'}}>
                  <Chip tone={rung.tone} toneBg={C.cream}><span style={{fontSize: 22, fontWeight: 950, color: rung.tone }}>{rung.chip}</span></Chip>
                  <span style={{fontSize: 20, fontWeight: 900, color: C.ink }}>{rung.detail}</span>
                  <Path color={rung.tone} delay={rung === undefined ? 0 : 120} span={18} style={{position: 'absolute', right: 20, bottom: 4, width: 90, height: 3}} />
                </div>
              ))}
              <div style={{marginTop: 'auto', fontSize: 21, fontWeight: 900, color: C.inkSoft }}>阶梯：知道起 1 年内爬第一阶·行为起 5 年封顶——逾期<Soft color={C.seal}>撤销权消灭</Soft></div>
            </Panel>
          </Enter>
        </div>
        <Enter delay={80} from="up" marker="void-consequence" style={{position: 'absolute', left: 0, top: 266, width: 1776, height: 148}}>
          <Panel tone={C.teal} watermark={<Undo2 size={120} color={C.teal} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '9px 18px'}}>
            <PanelTab tone={C.teal} icon={<Undo2 size={24} color={C.cream} strokeWidth={2.2} />}>法律后果</PanelTab>
            <span style={{fontSize: 22, fontWeight: 900, color: C.ink }}>一经撤销 → 该处分行为<Seal delay={150} size={20} tone={C.teal}>自始无效</Seal>；债权人行使撤销权的必要费用（律师费·差旅费）由<Soft color={C.seal}>债务人</Soft>负担</span>
          </Panel>
        </Enter>
        <Enter delay={120} from="up" marker="two-power-comparison" style={{position: 'absolute', left: 0, top: 430, width: 1776, height: 338}}>
          <Panel tone={C.goldWire} watermark={<Scale size={150} color={C.goldWire} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 20px'}}>
            <PanelTab tone={C.goldWire} icon={<Scale size={24} color={C.cream} strokeWidth={2.2} />}>双权对照 · 懒得收钱 vs 乱花钱送钱</PanelTab>
            <div style={{display: 'flex', gap: 14}}>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 6, backgroundColor: C.creamDim, borderLeft: `6px solid ${C.indigoLike}`, padding: '10px 14px'}}>
                <span style={{fontSize: 22, fontWeight: 950, color: C.indigoLike }}><HandCoins size={22} color={C.indigoLike} strokeWidth={2.4} /> 代位权 · 债务人懒得收钱</span>
                <span style={{fontSize: 20, fontWeight: 900, color: C.ink }}>责任财产<Soft color={C.indigoLike}>没增加</Soft>——针对债务人对次债务人的债权；三步关系（债权人→债务人→次债务人）</span>
              </div>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 6, backgroundColor: C.creamDim, borderLeft: `6px solid ${C.seal}`, padding: '10px 14px'}}>
                <span style={{fontSize: 22, fontWeight: 950, color: C.seal }}><Undo2 size={22} color={C.seal} strokeWidth={2.4} /> 撤销权 · 债务人乱花钱送钱</span>
                <span style={{fontSize: 20, fontWeight: 900, color: C.ink }}>责任财产<Soft color={C.seal}>减少</Soft>——针对债务人与第三人的处分行为；两造结构（债权人 vs 债务人＋第三人共同被告）</span>
              </div>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft }}>口诀：代位治<Soft color={C.indigoLike}>懒</Soft>·撤销治<Soft color={C.seal}>挥霍</Soft>——有损不明，依法<Soft color={C.goldWire}>推定有损</Soft>；撤销费用<Soft color={C.seal}>债务人买单</Soft></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
