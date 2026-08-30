import type {CSSProperties, ReactNode} from 'react';
import {BadgeCheck, Building2, FileSignature, Gavel, Landmark, PenTool, Scale, Stamp, Users, Wallet} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  aubergine: '#332B3D',
  aubergineMid: '#463B52',
  wisteria: '#7D6B94',
  wisteriaPale: '#DFD7E8',
  pearl: '#F4F0E8',
  pearlDim: '#E5DFD2',
  pearlEdge: '#B5AD9E',
  bronze: '#9C6B2F',
  bronzePale: '#EBD9BF',
  wine: '#8E3049',
  winePale: '#EDD0D8',
  sage: '#5F7D5E',
  sagePale: '#DCE5D6',
  ink: '#282430',
  inkSoft: '#736D7E',
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
      backgroundColor: C.aubergine,
      color: C.pearl,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(0deg, transparent 0 132px, rgba(0, 0, 0, 0.14) 132px 135px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.bronze}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.bronzePale}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.aubergineMid, borderLeft: `8px solid ${C.bronze}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.pearl, letterSpacing: 2}}>民法 · 第2讲 · {code}</span>
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
        borderBottom: `2px solid ${C.bronze}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.pearl}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.bronzePale, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

export const Panel = ({children, marker, tone = C.bronze, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.pearl, border: `2px solid ${C.pearlEdge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: `8px solid ${tone}`, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.1, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.bronze, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.aubergineMid, borderLeft: `6px solid ${tone}`, color: C.pearl, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.pearlDim, borderLeft: `6px solid ${tone}`, padding: '5px 12px'}}>
    <span style={{flexShrink: 0, width: 46, height: 46, borderRadius: 9, backgroundColor: tone, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 0 rgba(0,0,0,0.18)'}}>{icon}</span>
    <span style={{fontSize: 21, fontWeight: 880, color: C.ink, lineHeight: 1.42}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Seal = ({children, delay = 0, size = 24, tone = C.wine}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '7px 15px',
        border: `5px solid ${tone}`,
        color: tone,
        backgroundColor: `${tone}12`,
        fontSize: size,
        fontWeight: 950,
        letterSpacing: 2,
        opacity: p,
        scale: 0.86 + p * 0.14,
        rotate: '-2deg',
      }}
    >
      {children}
    </span>
  );
};

export const Under = ({children, color = C.wine, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

export const Chip = ({children, tone = C.pearlEdge, toneBg = C.pearlDim, ink = C.ink}: {readonly children: ReactNode; readonly tone?: string; readonly toneBg?: string; readonly ink?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${tone}`, backgroundColor: toneBg, padding: '5px 12px', fontSize: 22, fontWeight: 900, color: ink, whiteSpace: 'nowrap'}}>{children}</span>
);

export const LiabilityDualityScene = () => {
  /* data-final-knowledge="limited-side" data-final-knowledge="unlimited-side" data-final-knowledge="essence-rule" data-final-knowledge="enterprise-case-verdicts" */
  return (
    <Shell code="01" kicker="有限责任 · 无限责任" title="有限责任与无限责任">
      <div
        data-layout="dual-liability-see-saw"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="legal-person-investors-bear-limited-liability-without-continuing-payment,non-legal-person-investors-bear-unlimited-liability-with-continuing-payment,liability-grades-belong-to-investors-not-to-the-investment-target,the-hinge-is-whether-investors-pay-when-assets-run-short"
        data-focal-rule="when-the-pot-runs-dry-whether-investors-keep-paying-decides-the-grade"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="limited-side" style={{position: 'absolute', left: 40, top: 0, width: 832, height: 376}}>
          <Panel tone={C.sage} watermark={<Landmark size={160} color={C.sage} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 12, padding: '16px 20px'}}>
            <PanelTab tone={C.sage} icon={<Landmark size={26} color={C.bronzePale} strokeWidth={2.2} />}>有限责任</PanelTab>
            <IconChip icon={<Users size={30} color={C.pearl} strokeWidth={2.2} />} tone={C.sage} title="主体：">
              法人的出资人（公司等法人组织）
            </IconChip>
            <IconChip icon={<Wallet size={30} color={C.pearl} strokeWidth={2.2} />} tone={C.sage} title="法人财产不足以偿还债务时：">
              出资人<Seal delay={100} size={20} tone={C.sage}>无需继续偿还</Seal>
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 900, color: C.inkSoft}}>以出资为限承担责任</div>
          </Panel>
        </Enter>
        <Enter delay={28} from="right" marker="unlimited-side" style={{position: 'absolute', left: 904, top: 0, width: 832, height: 376}}>
          <Panel tone={C.wine} watermark={<Users size={160} color={C.wine} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 12, padding: '16px 20px'}}>
            <PanelTab tone={C.wine} icon={<Users size={26} color={C.bronzePale} strokeWidth={2.2} />}>无限责任</PanelTab>
            <IconChip icon={<Building2 size={30} color={C.pearl} strokeWidth={2.2} />} tone={C.wine} title="主体：">
              非法人组织的出资人（合伙等）
            </IconChip>
            <IconChip icon={<Wallet size={30} color={C.pearl} strokeWidth={2.2} />} tone={C.wine} title="非法人财产不足以偿还债务时：">
              出资人<Seal delay={120} size={20}>需要继续偿还</Seal>
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 900, color: C.inkSoft}}>以全部财产担责</div>
          </Panel>
        </Enter>
        <Enter delay={70} from="up" marker="essence-rule" style={{position: 'absolute', left: 40, top: 392, width: 1696, height: 172}}>
          <Panel tone={C.bronze} watermark={<Scale size={150} color={C.bronze} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 20px'}}>
            <PanelTab tone={C.bronze} icon={<Scale size={24} color={C.bronzePale} strokeWidth={2.2} />}>责任承担的本质属性</PanelTab>
            <IconChip icon={<Users size={28} color={C.pearl} strokeWidth={2.2} />} tone={C.bronze} title="是「出资人」的责任：">
              而非「出资对象」的责任
            </IconChip>
            <IconChip icon={<Wallet size={28} color={C.pearl} strokeWidth={2.2} />} tone={C.wine} title="核心：">
              出资对象财产不足以偿还时，出资人是否<Under color={C.wine} delay={150}>继续偿还</Under>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={120} from="up" marker="enterprise-case-verdicts" style={{position: 'absolute', left: 40, top: 580, width: 1696, height: 188}}>
          <Panel tone={C.wisteria} watermark={<Gavel size={140} color={C.wisteria} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 20px'}}>
            <PanelTab tone={C.wisteria} icon={<Gavel size={24} color={C.bronzePale} strokeWidth={2.2} />}>案例分析 · A 企业财产不足以清偿债务</PanelTab>
            <IconChip icon={<Building2 size={28} color={C.pearl} strokeWidth={2.2} />} tone={C.sage} title="A 企业是公司：">
              甲、乙作为出资人不承担继续清偿责任
            </IconChip>
            <IconChip icon={<Users size={28} color={C.pearl} strokeWidth={2.2} />} tone={C.wine} title="A 企业是合伙：">
              甲、乙作为出资人承担继续清偿责任
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const RepresentationAgencyScene = () => {
  /* data-final-knowledge="nametag-fork" data-final-knowledge="signature-stamp-matrix" data-final-knowledge="formal-contract-cure" */
  return (
    <Shell code="02" kicker="法人代表 · 法人代理" title="法人代表与法人代理的区别">
      <div
        data-layout="twin-nametag-signature-desk"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="acts-in-the-persons-name-by-its-representative-are-representation,acts-by-anyone-else-are-agency-even-in-the-persons-name,signed-but-unstamped-contracts-are-valid-unless-formal,stamped-but-unsigned-contracts-stand-with-actual-performance-cure"
        data-focal-rule="the-wearer-of-the-nametag-and-the-ink-on-the-page-set-the-effect"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="nametag-fork" style={{position: 'absolute', left: 40, top: 0, width: 1696, height: 180}}>
          <Panel tone={C.bronze} watermark={<PenTool size={150} color={C.bronze} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 20px'}}>
            <PanelTab tone={C.bronze} icon={<PenTool size={24} color={C.bronzePale} strokeWidth={2.2} />}>法定代表人（别名：法人代表）</PanelTab>
            <div style={{fontSize: 20.5, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
              依法律或章程，代表法人实施<Soft color={C.bronze}>民事法律行为</Soft> · 后果由<Under color={C.bronze} delay={60}>法人承受</Under> · 通常是法人的主要负责人
            </div>
            <div style={{display: 'flex', gap: 12}}>
              <IconChip icon={<UserBadgeIcon tone={C.sage} />} tone={C.sage} title="法定代表人实施：">
                以法人名义 → <strong>代表行为</strong>
              </IconChip>
              <IconChip icon={<UserBadgeIcon tone={C.wine} />} tone={C.wine} title="法定代表人以外的任何人实施：">
                即使以法人名义 → <strong>代理行为</strong>
              </IconChip>
            </div>
          </Panel>
        </Enter>
        <div data-final-knowledge="signature-stamp-matrix" style={{position: 'absolute', left: 40, top: 196, width: 1696, height: 260}}>
          {[
            {left: 0, tone: C.sage, pale: C.sagePale, title: '有签字 · 法人未盖章', body: '有代表、代理权并签字，法人未盖章或所盖印章虚假', verdict: '合同有效', mark: <Stamp size={110} color={C.sage} strokeWidth={1.6} />, icon: <FileSignature size={26} color={C.pearl} strokeWidth={2.2} />},
            {left: 425, tone: C.bronze, pale: C.bronzePale, title: '约定应当有法人盖章', body: '视为要式合同：法人未盖章 → 合同不成立', verdict: '不成立', mark: <Stamp size={110} color={C.bronze} strokeWidth={1.6} />, icon: <Stamp size={26} color={C.pearl} strokeWidth={2.2} />},
            {left: 850, tone: C.wisteria, pale: C.wisteriaPale, title: '要式 · 已履行且对方接受', body: '合同主要义务一方已履行且对方接受 → 成立且有效', verdict: '成立 · 有效', mark: <FileSignature size={110} color={C.wisteria} strokeWidth={1.6} />, icon: <BadgeCheck size={26} color={C.pearl} strokeWidth={2.2} />},
            {left: 1275, tone: C.sage, pale: C.sagePale, title: '无法人外签字 · 有法人盖章', body: '有代表、代理权，合同没有行为人签字，但有法人盖章', verdict: '有效', mark: <FileSignature size={110} color={C.sage} strokeWidth={1.6} />, icon: <Stamp size={26} color={C.pearl} strokeWidth={2.2} />},
          ].map((card, cardIndex) => (
            <Enter key={card.title} delay={40 + cardIndex * 18} from="up" style={{position: 'absolute', left: card.left, top: 0, width: 421, height: 260}}>
              <Panel tone={card.tone} watermark={card.mark} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 16px'}}>
                <PanelTab tone={card.tone} icon={card.icon}>{card.title}</PanelTab>
                <div style={{fontSize: 19.5, fontWeight: 900, color: C.ink, lineHeight: 1.5, flex: 1}}>{card.body}</div>
                <div style={{marginTop: 'auto'}}><Seal delay={120 + cardIndex * 20} size={19} tone={card.tone}>{card.verdict}</Seal></div>
              </Panel>
            </Enter>
          ))}
        </div>
        <Enter delay={130} from="up" marker="formal-contract-cure" style={{position: 'absolute', left: 40, top: 472, width: 1696, height: 172}}>
          <Panel tone={C.wine} watermark={<BadgeCheck size={140} color={C.wine} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 20px'}}>
            <PanelTab tone={C.wine} icon={<FileSignature size={24} color={C.bronzePale} strokeWidth={2.2} />}>明确约定必须有行为人签字</PanelTab>
            <IconChip icon={<Stamp size={28} color={C.pearl} strokeWidth={2.2} />} tone={C.wine} title="原则：">
              双方约定的形式要件（要式合同）→ 只有法人公章没有签字 → 合同不成立
            </IconChip>
            <IconChip icon={<BadgeCheck size={28} color={C.pearl} strokeWidth={2.2} />} tone={C.sage} title="实际履行补正（民法典第 490 条）：">
              一方已履行主要义务且对方接受 → 成立且有效（履约行为治愈形式瑕疵）
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={180} from="up" style={{position: 'absolute', left: 40, top: 660, width: 1696, height: 108}}>
          <div style={{height: '100%', backgroundColor: C.aubergineMid, border: `2px solid ${C.bronze}`, display: 'flex', alignItems: 'center', gap: 18, padding: '0 26px'}}>
            <span style={{padding: '5px 13px', backgroundColor: C.bronze, color: C.aubergine, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>总结</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.pearl}}>
              签字管<Soft color={C.bronzePale}>行为人</Soft> · 盖章管<Soft color={C.bronzePale}>法人</Soft> · 约定要式<Soft color={C.bronzePale}>看履行</Soft> · 实际接受<Soft color={C.bronzePale}>能治愈</Soft>
            </span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

const UserBadgeIcon = ({tone}: {readonly tone: string}) => (
  <span style={{display: 'inline-flex', width: 30, height: 30, borderRadius: 15, backgroundColor: tone, color: C.pearl, fontSize: 17, fontWeight: 950, alignItems: 'center', justifyContent: 'center'}}>人</span>
);
