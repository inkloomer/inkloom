import type {CSSProperties, ReactNode} from 'react';
import {
  Ban,
  Coins,
  Gavel,
  FileSignature,
  Landmark,
  Link,
  Scale,
  Shield,
  Undo2,
  UserRound,
  Users,
} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  bronze: '#2E4438',
  bronzeDeep: '#23362C',
  bronzeMid: '#3C584A',
  ivory: '#F5F0E1',
  ivoryDim: '#EAE2CE',
  charcoal: '#2A2D2A',
  charcoalSoft: '#7C8178',
  brass: '#C9A052',
  brassPale: '#F2E6C8',
  patina: '#4E8C78',
  patinaPale: '#DFEBE5',
  sealred: '#B0402C',
  sealredPale: '#F4DDD5',
  edge: '#C8BFA8',
} as const;

export const prog = (frame: number, delay: number, span = 18) => interpolate(frame, [delay, delay + span], [0, 1], CLAMP);

export const Enter = ({
  children,
  delay = 0,
  distance = 26,
  from = 'up',
  marker,
  span = 20,
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

export const LineH = ({
  delay = 0,
  tone,
  thickness = 4,
  span = 20,
  head = true,
  style,
}: {
  readonly delay?: number;
  readonly tone: string;
  readonly thickness?: number;
  readonly span?: number;
  readonly head?: boolean;
  readonly style?: CSSProperties;
}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, span);
  return (
    <span style={{position: 'absolute', ...style}}>
      <span style={{position: 'absolute', inset: 0, backgroundColor: tone, borderRadius: thickness / 2, transformOrigin: 'left center', scaleX: p}} />
      {head ? (
        <span
          style={{
            position: 'absolute',
            right: -9,
            top: '50%',
            translate: '0 -50%',
            width: 0,
            height: 0,
            borderTop: '6px solid transparent',
            borderBottom: '6px solid transparent',
            borderLeft: `10px solid ${tone}`,
            opacity: p,
          }}
        />
      ) : null}
    </span>
  );
};

export const Shell = ({children, code, kicker, title}: {readonly children: ReactNode; readonly code: string; readonly kicker: string; readonly title: string}) => {
  const sceneIndex = Math.max(0, Math.min(3, Number(code) - 1));
  return (
    <AbsoluteFill
      data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
      style={{
        backgroundColor: C.bronze,
        color: C.ivory,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `radial-gradient(circle at 18% 20%, rgba(245, 240, 225, 0.08) 0%, transparent 42%), repeating-linear-gradient(90deg, transparent 0 146px, rgba(255, 255, 255, 0.04) 146px 148px)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 12, background: `linear-gradient(90deg, ${C.patina}, ${C.brass}, ${C.sealred})`, opacity: 0.94}} />
      <div style={{position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: '2px solid rgba(245, 240, 225, 0.3)'}} />
      <div style={{position: 'absolute', left: 60, top: 44, padding: '10px 16px', backgroundColor: C.bronzeDeep, borderLeft: `8px solid ${C.brass}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.ivory, letterSpacing: 2}}>民法 · 第13讲 · {code}</span>
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
          borderBottom: `2px solid ${C.brass}`,
        }}
      >
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.ivory}}>{title}</h1>
        <span style={{fontSize: 22, fontWeight: 850, color: C.brassPale, textAlign: 'right'}}>{kicker}</span>
      </header>
      <div style={{position: 'absolute', right: 64, bottom: 44, display: 'flex', alignItems: 'center', gap: 10, opacity: 0.9}}>
        {[0, 1, 2, 3].map((dot) => (
          <span
            key={dot}
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: dot === sceneIndex ? C.sealred : 'transparent',
              border: `2px solid ${C.brass}`,
            }}
          />
        ))}
      </div>
      <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    </AbsoluteFill>
  );
};

export const Panel = ({children, marker, tone = C.brass, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.ivory, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${tone}`, color: C.charcoal, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(35, 54, 44, 0.42)', ...style}}
  >
    <span style={{position: 'absolute', right: 10, top: 10, width: 26, height: 26, borderTop: `3px solid ${tone}`, borderRight: `3px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 14, bottom: 10, width: 26, height: 26, borderBottom: `3px solid ${tone}`, borderLeft: `3px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.brass, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.bronzeDeep, borderLeft: `6px solid ${tone}`, color: C.ivory, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children, style}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.ivoryDim, borderLeft: `5px solid ${tone}`, padding: '5px 12px', ...style}}>
    <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 22, backgroundColor: tone, border: `2px solid ${C.ivory}`, boxShadow: '0 0 0 2px rgba(201, 160, 82, 0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.charcoal, lineHeight: 1.42}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Seal = ({children, delay = 0, size = 22, tone = C.sealred}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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
        rotate: '-3deg',
      }}
    >
      {children}
    </span>
  );
};

export const Under = ({children, color = C.brass, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

export const Chip = ({children, tone = C.edge, toneBg = C.ivoryDim, ink = C.charcoal}: {readonly children: ReactNode; readonly tone?: string; readonly toneBg?: string; readonly ink?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${tone}`, backgroundColor: toneBg, padding: '5px 12px', fontSize: 22, fontWeight: 900, color: ink, whiteSpace: 'nowrap'}}>{children}</span>
);


export const GuaranteeSystemScene = () => {
  /* data-final-knowledge="security-right-nature" data-final-knowledge="five-typical-forms" data-final-knowledge="four-contract-types" data-final-knowledge="guarantor-validity-rule" */
  return (
    <Shell code="01" kicker="担保权 · 体系与合同" title="担保权的体系与担保合同">
      <div
        data-layout="system-bench-with-five-type-racks"
        data-visual-anchor="concept-icon"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="security-rights-serve-debt-realization-and-follow-the-secured-claim-as-accessory,five-typical-forms-run-from-mortgage-pledge-lien-to-guarantee-and-earnest,four-contract-types-split-by-who-signs-with-the-creditor,for-profit-institutions-may-guarantee-validly-while-some-entities-cannot"
        data-focal-rule="security-rights-ride-the-claim-as-accessory-and-five-forms-sign-four-contract-types-with-qualified-guarantors-only"
        data-focal-channels="icon,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="security-right-nature" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 210}}>
          <Panel tone={C.brass} watermark={<Shield size={110} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.brass} icon={<Shield size={24} color={C.ivory} strokeWidth={2.2} />}>担保权 · 目的与主从关系</PanelTab>
            <IconChip icon={<Scale size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.brass} title="目的：" style={{flex: 0.9}}>
              以担保<Soft color={C.brass}>债权实现</Soft>为目的的民事权利
            </IconChip>
            <IconChip icon={<Link size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.patina} title="主从关系：" style={{flex: 1}}>
              受担保的债权为<Soft color={C.patina}>主权利</Soft>，担保权为<Soft color={C.patina}>从权利</Soft>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={40} from="right" marker="five-typical-forms" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 210}}>
          <Panel tone={C.patina} watermark={<Coins size={110} color={C.patina} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.patina} icon={<Coins size={24} color={C.ivory} strokeWidth={2.2} />}>典型担保形式 · 五类</PanelTab>
            <div style={{display: 'flex', gap: 8, flex: 1, alignItems: 'center', flexWrap: 'wrap'}}>
              <Chip tone={C.patina} toneBg={C.patinaPale} ink={C.patina}>① 抵押</Chip>
              <Chip tone={C.patina} toneBg={C.patinaPale} ink={C.patina}>② 质押</Chip>
              <Chip tone={C.patina} toneBg={C.patinaPale} ink={C.patina}>③ 留置</Chip>
              <Chip tone={C.sealred} toneBg={C.sealredPale} ink={C.sealred}>④ 保证</Chip>
              <Chip tone={C.sealred} toneBg={C.sealredPale} ink={C.sealred}>⑤ 定金</Chip>
            </div>
            <div style={{fontSize: 22, fontWeight: 900, color: C.charcoalSoft}}>前三为物保，后二为人保与金钱担保</div>
          </Panel>
        </Enter>
        <Enter delay={90} from="left" marker="four-contract-types" style={{position: 'absolute', left: 0, top: 224, width: 1080, height: 250}}>
          <Panel tone={C.brass} watermark={<Users size={110} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.brass} icon={<Users size={24} color={C.ivory} strokeWidth={2.2} />}>担保合同 · 四类（抵物人钱）</PanelTab>
            <div style={{display: 'flex', flexDirection: 'column', gap: 4, flex: 1, justifyContent: 'center'}}>
              <span style={{fontSize: 22, fontWeight: 880}}><Chip tone={C.brass} toneBg={C.brassPale} ink={C.brass}>抵押合同</Chip> 抵押人与债权人订立</span>
              <span style={{fontSize: 22, fontWeight: 880}}><Chip tone={C.brass} toneBg={C.brassPale} ink={C.brass}>质押合同</Chip> 出质人与债权人订立</span>
              <span style={{fontSize: 22, fontWeight: 880}}><Chip tone={C.sealred} toneBg={C.sealredPale} ink={C.sealred}>保证合同</Chip> 保证人与债权人订立</span>
              <span style={{fontSize: 22, fontWeight: 880}}><Chip tone={C.sealred} toneBg={C.sealredPale} ink={C.sealred}>定金合同</Chip> 债务人与债权人另行订立</span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={130} from="right" marker="guarantor-validity-rule" style={{position: 'absolute', left: 1094, top: 224, width: 682, height: 250}}>
          <Panel tone={C.patina} watermark={<Landmark size={110} color={C.patina} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.patina} icon={<Landmark size={24} color={C.ivory} strokeWidth={2.2} />}>担保人资格 · 营利法人有效</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>登记为<Soft color={C.patina}>营利法人</Soft>的学校、幼儿园、医疗机构、养老机构等提供担保 → 担保合同<Seal delay={200} size={20} tone={C.patina}>有效</Seal></div>
          </Panel>
        </Enter>
        <Enter delay={180} from="up" style={{position: 'absolute', left: 0, top: 488, width: 1776, height: 280}}>
          <Panel tone={C.brass} watermark={<Shield size={110} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '12px 18px'}}>
            <PanelTab tone={C.brass} icon={<Shield size={24} color={C.ivory} strokeWidth={2.2} />}>担保物权运行的基础 · 一般原理</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.5}}>担保物权体系运行的基础制度属于<Soft color={C.brass}>担保物权的一般原理</Soft>——担保权围绕「债权实现」展开：设定（担保合同）→ 存续（从属于主债）→ 实现（就担保物优先受偿）→ 消灭（主债权消灭）</div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.charcoalSoft}}>一图记牢：五类形式 × 四类合同 × 一条主从主线</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};


export const CounterGuaranteeScene = () => {
  /* data-final-knowledge="counter-guarantee-structure" data-final-knowledge="invalidity-consequence" data-final-knowledge="valid-main-dials" data-final-knowledge="void-main-dials" */
  return (
    <Shell code="02" kicker="反担保 · 无效" title="反担保与担保合同的无效">
      <div
        data-layout="counter-gate-with-compensation-dials"
        data-visual-anchor="boundary"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="counter-guarantees-secure-the-recourse-claim-of-the-original-third-guarantor,third-party-counter-guarantees-may-promise-while-debtor-counter-guarantees-exclude-guarantee,void-guarantee-contracts-shift-to-precontractual-fault-liability-for-third-party-guarantors,valid-main-with-void-guarantee-dials-half-while-void-main-dials-third-and-the-blameless-stand-free"
        data-focal-rule="counter-guarantees-wrap-recourse-claims-and-void-guarantee-contracts-trade-guarantee-liability-for-fault-dials-capped-at-half-or-third"
        data-focal-channels="contrast,icon,connector,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="counter-guarantee-structure" style={{position: 'absolute', left: 0, top: 0, width: 1080, height: 300}}>
          <Panel tone={C.brass} watermark={<Undo2 size={120} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.brass} icon={<Undo2 size={24} color={C.ivory} strokeWidth={2.2} />}>反担保 · 「担保担保权」</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>第三人作担保人时，用以担保<Soft color={C.brass}>第三担保人</Soft>对债务人的<Under color={C.brass} delay={130}>追偿权</Under>的担保</div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 4, flex: 1}}>
              <span style={{fontSize: 22, fontWeight: 880}}>担保权人＝<Soft color={C.brass}>追偿权人</Soft>（原担保人：保证人、第三物上担保人）</span>
              <span style={{fontSize: 22, fontWeight: 880}}>追偿对象＝原担保关系的<Soft color={C.charcoalSoft}>债务人</Soft></span>
              <span style={{fontSize: 22, fontWeight: 880}}>反担保人＝<Soft color={C.charcoalSoft}>债务人或第三人</Soft>：第三人可<Soft color={C.patina}>抵押、质押、保证</Soft>；债务人限<Soft color={C.patina}>抵押、质押</Soft>——<Ban size={20} color={C.sealred} strokeWidth={2.6} /> 自己不能为自己提供<Soft color={C.sealred}>保证</Soft></span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={44} from="right" marker="invalidity-consequence" style={{position: 'absolute', left: 1094, top: 0, width: 682, height: 300}}>
          <Panel tone={C.sealred} watermark={<Ban size={110} color={C.sealred} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '12px 18px'}}>
            <PanelTab tone={C.sealred} icon={<Ban size={24} color={C.ivory} strokeWidth={2.2} />}>担保合同无效 · 后果</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>担保人不再承担担保责任 → 基于过错承担<Soft color={C.sealred}>缔约过失责任</Soft>（过错赔偿）</div>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>适用对象：仅限<Soft color={C.sealred}>第三人</Soft>提供担保——第三人抵押、第三人质押、<Soft color={C.sealred}>保证合同</Soft>；<Ban size={20} color={C.sealred} strokeWidth={2.6} /> 无定金</div>
          </Panel>
        </Enter>
        <Enter delay={100} from="left" marker="valid-main-dials" style={{position: 'absolute', left: 0, top: 314, width: 1080, height: 260}}>
          <Panel tone={C.patina} watermark={<Scale size={110} color={C.patina} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.patina} icon={<Scale size={24} color={C.ivory} strokeWidth={2.2} />}>主合同有效 · 担保合同无效 · 赔偿分担</PanelTab>
            <div style={{display: 'flex', gap: 12, flex: 1, alignItems: 'center'}}>
              <IconChip icon={<Ban size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.charcoalSoft} title="债权人有过错＋担保人无过错：" style={{flex: 1.1}}>
                担保人<Seal delay={200} size={20} tone={C.charcoalSoft}>不承担赔偿责任</Seal>
              </IconChip>
              <IconChip icon={<Scale size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.patina} title="均有过错：" style={{flex: 1.1}}>
                不超过债务人不能清偿部分的<span style={{fontSize: 30, fontWeight: 950, color: C.patina}}>1/2</span>
              </IconChip>
              <IconChip icon={<Gavel size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.sealred} title="担保人有过错＋债权人无过错：" style={{flex: 1.1}}>
                对不能清偿部分承担<Soft color={C.sealred}>全部赔偿责任</Soft>
              </IconChip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={150} from="right" marker="void-main-dials" style={{position: 'absolute', left: 1094, top: 314, width: 682, height: 260}}>
          <Panel tone={C.charcoalSoft} watermark={<Scale size={100} color={C.charcoalSoft} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.charcoalSoft} icon={<Scale size={24} color={C.ivory} strokeWidth={2.2} />}>主合同无效 → 担保合同无效</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>原理：主合同（目的）无效或被撤销 → 从合同（手段）<Soft color={C.charcoalSoft}>归于无效</Soft></div>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>担保人<Soft color={C.charcoalSoft}>无过错</Soft> → 不承担赔偿责任；<Soft color={C.charcoalSoft}>有过错</Soft> → 不超过债务人不能清偿部分的<span style={{fontSize: 30, fontWeight: 950, color: C.charcoalSoft}}>1/3</span></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};


export const SubordinationScene = () => {
  /* data-final-knowledge="subordination-limits" data-final-knowledge="new-old-loan-rules" data-final-knowledge="assignment-and-transfer-gates" data-final-knowledge="amount-change-rule" */
  return (
    <Shell code="03" kicker="担保责任 · 从属性与变动" title="担保责任的从属性与主债变动">
      <div
        data-layout="change-board-with-debt-tag-gates"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="guarantee-liability-stays-inside-the-principal-debt-with-bankruptcy-interest-stop-and-excess-return,new-loans-repaying-old-loans-free-unaware-guarantors-and-old-security-needs-renewal-to-survive,assigned-claims-carry-security-unless-unnoticed-or-locked-by-ban-while-transferred-debts-need-written-consent,raised-debts-exceed-consent-into-freedom-and-reduced-debts-keep-the-rest-liable"
        data-focal-rule="guarantee-liability-follows-the-principal-debt-through-bankruptcy-stops-loan-rollovers-and-every-assignment-transfer-or-amount-change-gate-demands-notice-or-written-consent"
        data-focal-channels="connector,contrast,icon,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="subordination-limits" style={{position: 'absolute', left: 0, top: 0, width: 1080, height: 236}}>
          <Panel tone={C.brass} watermark={<Scale size={110} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.brass} icon={<Scale size={24} color={C.ivory} strokeWidth={2.2} />}>担保责任的从属性</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>范围以<Soft color={C.brass}>主债务</Soft>为限：本金、利息、违约金、损害赔偿、实现债权费用</div>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}><Soft color={C.sealred}>破产停息</Soft>：债务人破产 → 担保债务自受理破产申请之日<Under color={C.sealred} delay={150}>停止计息</Under>；<Soft color={C.sealred}>约定超额</Soft> → 仅在主债额范围内担责</div>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>超额后果：向债务人追偿仅限<Soft color={C.brass}>主债额</Soft>；超出部分有权请求<Soft color={C.brass}>债权人返还</Soft></div>
          </Panel>
        </Enter>
        <Enter delay={40} from="right" marker="new-old-loan-rules" style={{position: 'absolute', left: 1094, top: 0, width: 682, height: 236}}>
          <Panel tone={C.patina} watermark={<Undo2 size={110} color={C.patina} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 5, padding: '12px 18px'}}>
            <PanelTab tone={C.patina} icon={<Undo2 size={24} color={C.ivory} strokeWidth={2.2} />}>以新贷偿还旧贷</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.35}}>新贷担保人：不知「借新还旧」用途 → <Soft color={C.patina}>不再承担</Soft>；<Soft color={C.sealred}>知情</Soft>或当初<Soft color={C.sealred}>旧贷即为其担保</Soft> → 担责</div>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.35}}>旧贷担保权：新贷债权人不构成代为履行 → <Ban size={20} color={C.sealred} strokeWidth={2.6} /> <Soft color={C.sealred}>不得直接享有</Soft>旧贷担保权；例外：物上担保人同意继续担保并<Soft color={C.patina}>变更登记</Soft> → 新贷债权人享有，登记时间<Under color={C.patina} delay={200}>溯及旧贷登记</Under></div>
          </Panel>
        </Enter>
        <Enter delay={90} from="left" marker="assignment-and-transfer-gates" style={{position: 'absolute', left: 0, top: 250, width: 1080, height: 300}}>
          <Panel tone={C.brass} watermark={<Users size={110} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 5, padding: '12px 18px'}}>
            <PanelTab tone={C.brass} icon={<Users size={24} color={C.ivory} strokeWidth={2.2} />}>主债转让 · 三道门</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.35}}><Soft color={C.brass}>债权转让</Soft>：担保权<Soft color={C.brass}>一并转让</Soft>；<Soft color={C.warn}>未通知</Soft>第三担保人 → 只向原债权人担责；担保人与债权人约定<Soft color={C.warn}>禁止转让</Soft>未经其<Soft color={C.warn}>书面同意</Soft> → 对受让人<Soft color={C.warn}>不再承担</Soft></div>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.35}}><Soft color={C.brass}>主债务转让</Soft>：未经<Soft color={C.sealred}>第三担保人书面同意</Soft> → 担保责任<Seal delay={220} size={20} tone={C.sealred}>消灭</Seal>；债务人自己提供的担保 → <Soft color={C.patina}>继续承担</Soft></div>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.35}}>参照：债务人对债权人享有<Soft color={C.patina}>抵销权、撤销权</Soft>而未行使 → 第三担保人可在相应范围内<Soft color={C.patina}>拒绝承担</Soft></div>
          </Panel>
        </Enter>
        <Enter delay={130} from="right" marker="amount-change-rule" style={{position: 'absolute', left: 1094, top: 250, width: 682, height: 300}}>
          <Panel tone={C.sealred} watermark={<Coins size={110} color={C.sealred} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '12px 18px'}}>
            <PanelTab tone={C.sealred} icon={<Coins size={24} color={C.ivory} strokeWidth={2.2} />}>主债额变动</PanelTab>
            <IconChip icon={<Coins size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.sealred} title="增加债额：" style={{flex: 1}}>
              未经<Soft color={C.sealred}>书面同意</Soft> → 对<Soft color={C.sealred}>增加部分</Soft>不再承担
            </IconChip>
            <IconChip icon={<Coins size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.patina} title="减少债额：" style={{flex: 1}}>
              对<Soft color={C.patina}>剩余部分</Soft>继续承担担保责任
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={180} from="up" style={{position: 'absolute', left: 0, top: 564, width: 1776, height: 204}}>
          <Panel tone={C.brass} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.brass} icon={<Scale size={24} color={C.ivory} strokeWidth={2.2} />}>第三担保人的抗辩与追偿</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>债务人享有抗辩权 → 担保人可以<Soft color={C.brass}>抗辩债权人</Soft>；债务人放弃抗辩 → 担保人仍可主张；但<Soft color={C.warn}>明知</Soft>有抗辩权仍担保的 → 不得再主张</div>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>承担担保责任后有权向债务人<Soft color={C.brass}>追偿</Soft>；债务人破产而债权人未申报债权 → 担保人可基于<Soft color={C.brass}>将来的追偿权</Soft>预先行使申报；债权人既未申报又未通知致无法预追的 → 担保人在可预追范围内<Soft color={C.sealred}>免除担保责任</Soft></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};


export const JointGuaranteeScene = () => {
  /* data-final-knowledge="joint-guarantee-basics" data-final-knowledge="call-order-rules" data-final-knowledge="waiver-freedom-rule" data-final-knowledge="third-guarantor-aftermath" */
  return (
    <Shell code="04" kicker="共同担保 · 顺序弃权后果" title="共同担保">
      <div
        data-layout="joint-hall-with-concurrence-and-recourse-lanes"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="joint-guarantors-grant-the-creditor-one-claim-and-two-or-more-security-rights,ordered-calls-run-agreement-first-then-free-choice-then-debtor-property-first-in-mixed-guarantees,waiving-the-debtors-property-frees-third-guarantors-within-the-lost-priority,paying-third-guarantors-step-into-creditor-rights-and-share-with-fellows-only-under-agreement-or-one-document"
        data-focal-rule="one-claim-many-guarantees-call-agreement-first-free-choice-second-debtor-property-first-in-mixes-and-waiver-frees-within-lost-priority"
        data-focal-channels="contrast,connector,icon,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="joint-guarantee-basics" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 230}}>
          <Panel tone={C.brass} watermark={<Users size={110} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.brass} icon={<Users size={24} color={C.ivory} strokeWidth={2.2} />}>共同担保 · 含义与三形态</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}><Soft color={C.brass}>2个或以上担保人</Soft>为同一债权提供担保；债权人享有<Soft color={C.brass}>主债权</Soft>＋<Soft color={C.brass}>2项或以上担保权</Soft></div>
            <div style={{display: 'flex', gap: 8, flexWrap: 'wrap'}}>
              <Chip tone={C.patina} toneBg={C.patinaPale} ink={C.patina}>① 共同人保（共同保证）</Chip>
              <Chip tone={C.patina} toneBg={C.patinaPale} ink={C.patina}>② 共同物保</Chip>
              <Chip tone={C.sealred} toneBg={C.sealredPale} ink={C.sealred}>③ 混合担保（人保＋物保）</Chip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={40} from="right" marker="call-order-rules" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 230}}>
          <Panel tone={C.patina} watermark={<Gavel size={110} color={C.patina} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 5, padding: '12px 18px'}}>
            <PanelTab tone={C.patina} icon={<Gavel size={24} color={C.ivory} strokeWidth={2.2} />}>承担顺序与份额界定</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.35}}>有约定 → <Soft color={C.patina}>从其约定</Soft>；无约定：</div>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.35}}>共同保证、共同物保 → 债权人可请求<Soft color={C.warn}>任何一个</Soft>担保人（只有可以、没有应当）</div>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.35}}>混合担保 → <Soft color={C.warn}>应当先</Soft>就<Soft color={C.warn}>债务人</Soft>提供的担保物行使担保物权；第三担保人对债权人承担<Soft color={C.patina}>连带</Soft>担保责任</div>
          </Panel>
        </Enter>
        <Enter delay={90} from="left" marker="waiver-freedom-rule" style={{position: 'absolute', left: 0, top: 244, width: 866, height: 220}}>
          <Panel tone={C.sealred} watermark={<Ban size={110} color={C.sealred} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.sealred} icon={<Ban size={24} color={C.ivory} strokeWidth={2.2} />}>弃权与免责 · 债务人物保特殊</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>混合担保中债权人<Soft color={C.sealred}>放弃债务人</Soft>提供的担保物权 → <Soft color={C.sealred}>第三担保人</Soft>在债权人丧失<Under color={C.sealred} delay={160}>优先受偿</Under>权益范围内<Seal delay={200} size={20} tone={C.sealred}>免除担保责任</Seal></div>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>放弃<Soft color={C.patina}>第三人</Soft>提供的担保物权 → 对其他担保责任<Soft color={C.patina}>没有影响</Soft></div>
          </Panel>
        </Enter>
        <Enter delay={130} from="right" marker="third-guarantor-aftermath" style={{position: 'absolute', left: 910, top: 244, width: 866, height: 220}}>
          <Panel tone={C.charcoalSoft} watermark={<Undo2 size={110} color={C.charcoalSoft} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 5, padding: '12px 18px'}}>
            <PanelTab tone={C.charcoalSoft} icon={<Undo2 size={24} color={C.ivory} strokeWidth={2.2} />}>第三担保人承担责任的后果</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.35}}>四情形同一后果：承担担保责任 / 受让债权 / 代为履行 / 无效时的过错赔偿</div>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.35}}>对债务人：享有<Soft color={C.charcoalSoft}>债权人对债务人的权利</Soft>——可<Soft color={C.charcoalSoft}>追偿</Soft>＋享有其<Soft color={C.charcoalSoft}>担保权</Soft>作追偿担保；<Ban size={20} color={C.sealred} strokeWidth={2.6} /> 不得损害债权人利益</div>
          </Panel>
        </Enter>
        <Enter delay={180} from="up" style={{position: 'absolute', left: 0, top: 478, width: 1776, height: 290}}>
          <Panel tone={C.brass} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '12px 18px'}}>
            <PanelTab tone={C.brass} icon={<Users size={24} color={C.ivory} strokeWidth={2.2} />}>担保人之间的分担请求权 · 两个法定条件</PanelTab>
            <div style={{display: 'flex', gap: 12, flex: 1, alignItems: 'center'}}>
              <IconChip icon={<FileSignature size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.brass} title="① 约定可相互分担，或承担连带共同担保：" style={{flex: 1.3}}>
                有此意思表示 → 可互相<Soft color={C.brass}>分担</Soft>
              </IconChip>
              <IconChip icon={<Users size={24} color={C.ivory} strokeWidth={2.2} />} tone={C.patina} title="② 同一合同书上签字、盖章或按指印：" style={{flex: 1.3}}>
                <Soft color={C.patina}>同一份合同</Soft>共同签署 → 可互相分担
              </IconChip>
            </div>
            <div style={{fontSize: 22, fontWeight: 900, color: C.charcoalSoft, lineHeight: 1.4}}>关系属性：担保人之间<Soft color={C.warn}>不存在</Soft>追偿权的担保关系，但可依法存在<Soft color={C.brass}>分担关系</Soft></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

/* __APPEND__ */
