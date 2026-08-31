import type {CSSProperties, ReactNode} from 'react';
import {Ban, BookCheck, Brain, Car, FileText, FileWarning, Footprints, Gavel, Hand, Key, Landmark, Lightbulb, Lock, RotateCcw, Scale, ScanSearch, Send, Truck, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  copper: '#4E3018',
  copperMid: '#6E4A28',
  parchment: '#F5F0E2',
  parchmentDim: '#EAE2CE',
  edge: '#C8BFA8',
  patina: '#4E7A6A',
  patinaPale: '#DCE9E4',
  key: '#B08A3E',
  keyPale: '#F0E4C8',
  brick: '#9C4A30',
  brickPale: '#F0DEDA',
  ink: '#2B2419',
  inkSoft: '#6F6656',
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

export const Path = ({color = C.key, delay = 0, span = 20, style}: {readonly color?: string; readonly delay?: number; readonly span?: number; readonly style?: CSSProperties}) => {
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

export const Gate = ({children, delay = 0, tone = C.patina, style}: {readonly children: ReactNode; readonly delay?: number; readonly tone?: string; readonly style?: CSSProperties}) => {
  const frame = useCurrentFrame();
  const lit = prog(frame, delay, 12);
  return (
    <div
      style={{
        ...style,
        borderColor: tone,
        boxShadow: `0 0 ${lit * 22}px ${tone}${lit > 0.5 ? '66' : '00'}, inset 0 0 ${lit * 14}px ${tone}22`,
        backgroundColor: C.parchment,
        border: `3px solid ${tone}`,
        opacity: interpolate(frame, [delay - 26, delay - 8], [0, 1], CLAMP),
      }}
    >
      {children}
    </div>
  );
};

export const Shell = ({children, code, kicker, title}: {readonly children: ReactNode; readonly code: string; readonly kicker: string; readonly title: string}) => {
  const sceneIndex = Math.max(0, Math.min(2, Number(code) - 1));
  return (
    <AbsoluteFill
      data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
      style={{
        backgroundColor: C.copper,
        color: C.parchment,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `repeating-linear-gradient(135deg, transparent 0 148px, rgba(255, 255, 255, 0.04) 148px 151px), repeating-linear-gradient(45deg, transparent 0 148px, rgba(0, 0, 0, 0.12) 148px 151px)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 12, background: `linear-gradient(90deg, ${C.brick}, ${C.key}, ${C.patina})`, opacity: 0.92}} />
      <div style={{position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: '2px solid rgba(220, 233, 228, 0.32)'}} />
      <div style={{position: 'absolute', left: 60, top: 44, padding: '10px 16px', backgroundColor: C.copperMid, borderLeft: `8px solid ${C.key}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.patinaPale, letterSpacing: 2}}>民法 · 第6讲 · {code}</span>
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
          borderBottom: `2px solid ${C.key}`,
        }}
      >
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.patinaPale}}>{title}</h1>
        <span style={{fontSize: 22, fontWeight: 850, color: C.keyPale, textAlign: 'right'}}>{kicker}</span>
      </header>
      <div style={{position: 'absolute', right: 64, bottom: 44, display: 'flex', alignItems: 'center', gap: 10, opacity: 0.85}}>
        {[0, 1, 2].map((dot) => (
          <span
            key={dot}
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: dot === sceneIndex ? C.patina : 'transparent',
              border: `2px solid ${C.patina}`,
            }}
          />
        ))}
      </div>
      <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    </AbsoluteFill>
  );
};

export const Panel = ({children, marker, tone = C.copperMid, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.parchment, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${tone}`, color: C.ink, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(43, 36, 25, 0.35)', ...style}}
  >
    <span style={{position: 'absolute', right: 10, top: 10, width: 26, height: 26, borderTop: `3px solid ${tone}`, borderRight: `3px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 14, bottom: 10, width: 26, height: 26, borderBottom: `3px solid ${tone}`, borderLeft: `3px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.copperMid, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.copperMid, borderLeft: `6px solid ${tone}`, color: C.patinaPale, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.parchmentDim, borderLeft: `5px solid ${tone}`, padding: '5px 12px'}}>
    <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 10, backgroundColor: tone, border: `2px solid ${C.parchment}`, boxShadow: `0 0 0 2px rgba(176, 138, 62, 0.5)`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.42}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Seal = ({children, delay = 0, size = 22, tone = C.brick}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

export const Under = ({children, color = C.key, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

export const Chip = ({children, tone = C.edge, toneBg = C.parchmentDim, ink = C.ink}: {readonly children: ReactNode; readonly tone?: string; readonly toneBg?: string; readonly ink?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${tone}`, backgroundColor: toneBg, padding: '5px 12px', fontSize: 22, fontWeight: 900, color: ink, whiteSpace: 'nowrap'}}>{children}</span>
);

export const RegistryRulesScene = () => {
  /* data-final-knowledge="review-rule" data-final-knowledge="ledger-precedence" data-final-knowledge="applicant-liability" data-final-knowledge="agency-liability" */
  return (
    <Shell code="01" kicker="登记 · 规则与赔偿" title="不动产登记规则">
      <div
        data-layout="certificate-ledger-pair-with-liability-lanes"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="the-registration-office-review-documents-and-may-inspect-on-site,when-certificate-and-ledger-disagree-the-ledger-prevails,false-materials-make-the-applicant-pay-damages,registration-errors-make-the-agency-pay-then-recover-from-the-wrongdoer"
        data-focal-rule="the-ledger-prevails-over-the-certificate-unless-proven-wrong"
        data-focal-channels="contrast,icon,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="review-rule" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 112}}>
          <Panel tone={C.copperMid} watermark={<Landmark size={110} color={C.copperMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '10px 18px'}}>
            <PanelTab tone={C.copperMid} icon={<Landmark size={24} color={C.patinaPale} strokeWidth={2.2} />}>不动产登记规则</PanelTab>
            <IconChip icon={<ScanSearch size={24} color={C.patinaPale} strokeWidth={2.2} />} tone={C.patina} title="形式审查：">
              登记机关办理登记，以<Soft color={C.patina}>书面审查</Soft>为常态
            </IconChip>
            <IconChip icon={<Footprints size={24} color={C.patinaPale} strokeWidth={2.2} />} tone={C.key} title="实地查看：">
              <Soft color={C.key}>必要时</Soft>可以进行实地查看
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={36} from="up" marker="ledger-precedence" style={{position: 'absolute', left: 0, top: 128, width: 1776, height: 208}}>
          <Panel tone={C.patina} watermark={<BookCheck size={140} color={C.patina} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.patina} icon={<BookCheck size={24} color={C.patinaPale} strokeWidth={2.2} />}>权属证书与登记簿不一致</PanelTab>
            <div style={{position: 'relative', height: 92}}>
              <div style={{position: 'absolute', left: 0, top: 8}}>
                <Chip tone={C.key} toneBg={C.keyPale}><FileText size={22} color={C.key} strokeWidth={2.4} /><span style={{fontSize: 23, fontWeight: 950}}>不动产权属证书</span></Chip>
              </div>
              <Path color={C.patina} delay={80} span={22} style={{position: 'absolute', left: 240, top: 34, width: 420, height: 4}} />
              <Mover delay={86} span={26} fromX={0} toX={420} fadeAt={150} style={{position: 'absolute', left: 16, top: 8}}>
                <Chip tone={C.key} toneBg={C.keyPale}><span style={{fontSize: 22, fontWeight: 950}}>证书记载事项</span></Chip>
              </Mover>
              <div style={{position: 'absolute', left: 668, top: 0}}>
                <Chip tone={C.patina} toneBg={C.patinaPale}><BookCheck size={24} color={C.patina} strokeWidth={2.4} /><span style={{fontSize: 25, fontWeight: 950, color: C.patina}}>不动产登记簿</span></Chip>
              </div>
              <div style={{position: 'absolute', left: 920, top: 4}}>
                <Seal delay={130} size={24}>以不动产登记簿为准</Seal>
              </div>
              <div style={{position: 'absolute', right: 0, top: 10, width: 300}}>
                <Chip tone={C.brick} toneBg={C.brickPale}>但书：除有证据证明登记簿<Soft color={C.brick}>确有错误</Soft></Chip>
              </div>
            </div>
            <div style={{fontSize: 22, fontWeight: 900, color: C.inkSoft}}>证书让位于登记簿——登记簿是物权归属的<Under color={C.patina} delay={160}>法定根据</Under></div>
          </Panel>
        </Enter>
        <Enter delay={70} from="up" marker="applicant-liability" style={{position: 'absolute', left: 0, top: 352, width: 1776, height: 180}}>
          <Panel tone={C.brick} watermark={<FileWarning size={140} color={C.brick} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 18px'}}>
            <PanelTab tone={C.brick} icon={<FileWarning size={24} color={C.patinaPale} strokeWidth={2.2} />}>登记的赔偿责任 · 两条流向</PanelTab>
            <div style={{position: 'relative', height: 52}}>
              <div style={{position: 'absolute', left: 0, top: 0}}>
                <Chip tone={C.brick} toneBg={C.brickPale}><FileWarning size={22} color={C.brick} strokeWidth={2.4} /><span style={{fontSize: 22, fontWeight: 950}}>当事人提供虚假材料</span></Chip>
              </div>
              <Path color={C.brick} delay={120} span={20} style={{position: 'absolute', left: 320, top: 24, width: 560, height: 4}} />
              <Mover delay={126} span={24} fromX={0} toX={560} fadeAt={196} style={{position: 'absolute', left: 326, top: 2}}>
                <Chip tone={C.brick} toneBg={C.brickPale}><span style={{fontSize: 22, fontWeight: 950}}>造成他人损害</span></Chip>
              </Mover>
              <div style={{position: 'absolute', left: 900, top: 0}}>
                <Seal delay={200} size={22}>当事人承担赔偿责任</Seal>
              </div>
            </div>
            <div data-final-knowledge="agency-liability" style={{position: 'relative', height: 62}}>
              <div style={{position: 'absolute', left: 0, top: 0}}>
                <Chip tone={C.copperMid} toneBg={C.parchmentDim}><Landmark size={22} color={C.copperMid} strokeWidth={2.4} /><span style={{fontSize: 22, fontWeight: 950}}>登记错误致人损害</span></Chip>
              </div>
              <Path color={C.copperMid} delay={190} span={20} style={{position: 'absolute', left: 270, top: 24, width: 380, height: 4}} />
              <Mover delay={196} span={24} fromX={0} toX={380} fadeAt={266} style={{position: 'absolute', left: 276, top: 2}}>
                <Chip tone={C.copperMid} toneBg={C.parchmentDim}><span style={{fontSize: 22, fontWeight: 950}}>登记机构</span></Chip>
              </Mover>
              <div style={{position: 'absolute', left: 660, top: 0}}>
                <Seal delay={266} size={22} tone={C.copperMid}>登记机构承担赔偿责任</Seal>
              </div>
              <div style={{position: 'absolute', right: 0, top: 6, display: 'flex', alignItems: 'center', gap: 10}}>
                <RotateCcw size={26} color={C.brick} strokeWidth={2.4} />
                <span style={{fontSize: 22, fontWeight: 900, color: C.ink}}>赔偿后<Under color={C.brick} delay={290}>追偿</Under>——向造成登记错误的人</span>
              </div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={120} from="up" style={{position: 'absolute', left: 0, top: 548, width: 1776, height: 220}}>
          <Panel tone={C.patina} watermark={<Scale size={130} color={C.patina} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.patina} icon={<Gavel size={24} color={C.patinaPale} strokeWidth={2.2} />}>记忆锚</PanelTab>
            <div style={{display: 'flex', gap: 14}}>
              <IconChip icon={<ScanSearch size={24} color={C.patinaPale} strokeWidth={2.2} />} tone={C.patina} title="审查：">
                形式审查为常态 · <Soft color={C.patina}>必要时</Soft>实地查看
              </IconChip>
              <IconChip icon={<BookCheck size={24} color={C.patinaPale} strokeWidth={2.2} />} tone={C.key} title="冲突：">
                证书 vs 登记簿 → <Soft color={C.key}>登记簿为准</Soft>
              </IconChip>
              <IconChip icon={<FileWarning size={24} color={C.patinaPale} strokeWidth={2.2} />} tone={C.brick} title="赔偿：">
                虚假材料→<Soft color={C.brick}>当事人</Soft>；登记错误→<Soft color={C.brick}>机构赔后追偿</Soft>
              </IconChip>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft}}>口诀：假材料<Soft color={C.brick}>申请人赔</Soft>，登错了<Soft color={C.copperMid}>机构先赔再追偿</Soft></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const ActualDeliveryScene = () => {
  /* data-final-knowledge="delivery-types" data-final-knowledge="subjective-limb" data-final-knowledge="objective-limb" data-final-knowledge="symbolic-delivery" */
  return (
    <Shell code="02" kicker="交付 · 现实与拟制" title="现实交付与拟制交付">
      <div
        data-layout="dual-requirement-split-with-symbol-lane"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="delivery-changes-mobile-ownership-and-creates-pledge-rights,actual-delivery-needs-intent-of-change-and-direct-possession,seizing-it-through-a-child-lacks-the-intent-so-nothing-passes,handing-over-a-symbol-like-a-key-counts-as-delivery-of-the-thing"
        data-focal-rule="a-goods-token-passes-the-intent-gate-then-the-possession-gate-to-reach-the-property-change"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="delivery-types" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 108}}>
          <Panel tone={C.copperMid} watermark={<Truck size={110} color={C.copperMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '10px 18px'}}>
            <PanelTab tone={C.copperMid} icon={<Truck size={24} color={C.patinaPale} strokeWidth={2.2} />}>交付发生变动的物权 · 两种类型</PanelTab>
            <Chip tone={C.patina} toneBg={C.patinaPale}><span style={{fontSize: 23, fontWeight: 950, color: C.patina}}>① 动产所有权的转移</span></Chip>
            <Chip tone={C.brick} toneBg={C.brickPale}><Lock size={22} color={C.brick} strokeWidth={2.4} /><span style={{fontSize: 23, fontWeight: 950, color: C.brick}}>② 动产质权的设立</span></Chip>
            <span style={{fontSize: 22, fontWeight: 900, color: C.inkSoft}}>现实交付＝基于<Soft color={C.copperMid}>物权变动的意思</Soft>·完成<Soft color={C.copperMid}>直接占有</Soft>的转移</span>
          </Panel>
        </Enter>
        <div data-final-knowledge="subjective-limb" style={{position: 'absolute', left: 0, top: 124, width: 866, height: 200}}>
          <Gate delay={100} tone={C.patina} style={{position: 'absolute', left: 300, top: 44, width: 250, height: 112, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4, borderRadius: 12}}>
            <Brain size={30} color={C.patina} strokeWidth={2.2} />
            <span style={{fontSize: 25, fontWeight: 950, color: C.patina}}>付 · 物权变动的意思</span>
            <span style={{fontSize: 21, fontWeight: 900, color: C.inkSoft}}>主观要件</span>
          </Gate>
          <div style={{position: 'absolute', left: 16, top: 66}}>
            <Chip tone={C.key} toneBg={C.keyPale}><Key size={22} color={C.key} strokeWidth={2.4} /><span style={{fontSize: 23, fontWeight: 950}}>标的物</span></Chip>
          </div>
          <Mover delay={60} span={34} fromX={0} toX={288} fadeAt={140} style={{position: 'absolute', left: 16, top: 66, zIndex: 2}}>
            <Chip tone={C.key} toneBg={C.keyPale}><Key size={22} color={C.key} strokeWidth={2.4} /><span style={{fontSize: 23, fontWeight: 950}}>标的物</span></Chip>
          </Mover>
          <Path color={C.key} delay={54} span={20} style={{position: 'absolute', left: 130, top: 97, width: 168, height: 4}} />
          <div style={{position: 'absolute', left: 570, top: 60, display: 'flex', alignItems: 'center', gap: 10}}>
            <Seal delay={150} size={21} tone={C.patina}>意思通过 ✓</Seal>
          </div>
          <div style={{position: 'absolute', left: 16, top: 176, right: 16}}>
            <IconChip icon={<Ban size={24} color={C.patinaPale} strokeWidth={2.2} />} tone={C.brick} title="诱使 8 岁孩子取出电脑：">
              甲并无<Soft color={C.brick}>交付意思</Soft>→ 不构成交付 → <Seal delay={210} size={18}>乙未取得所有权 ✗</Seal>
            </IconChip>
          </div>
        </div>
        <div data-final-knowledge="objective-limb" style={{position: 'absolute', left: 910, top: 124, width: 866, height: 200}}>
          <Gate delay={170} tone={C.key} style={{position: 'absolute', left: 300, top: 44, width: 250, height: 112, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4, borderRadius: 12}}>
            <Hand size={30} color={C.key} strokeWidth={2.2} />
            <span style={{fontSize: 25, fontWeight: 950, color: C.key}}>交 · 直接占有转移</span>
            <span style={{fontSize: 21, fontWeight: 900, color: C.inkSoft}}>客观要件</span>
          </Gate>
          <div style={{position: 'absolute', left: 16, top: 66}}>
            <Chip tone={C.patina} toneBg={C.patinaPale}><span style={{fontSize: 23, fontWeight: 950}}>已过「付」关</span></Chip>
          </div>
          <Mover delay={140} span={34} fromX={0} toX={288} fadeAt={220} style={{position: 'absolute', left: 16, top: 66, zIndex: 2}}>
            <Chip tone={C.patina} toneBg={C.patinaPale}><span style={{fontSize: 23, fontWeight: 950}}>标的物</span></Chip>
          </Mover>
          <Path color={C.patina} delay={134} span={20} style={{position: 'absolute', left: 196, top: 97, width: 102, height: 4}} />
          <div style={{position: 'absolute', left: 570, top: 60, display: 'flex', alignItems: 'center', gap: 10}}>
            <Seal delay={220} size={21} tone={C.key}>占有到手 ✓</Seal>
          </div>
          <div style={{position: 'absolute', left: 16, top: 176, right: 16}}>
            <IconChip icon={<Ban size={24} color={C.patinaPale} strokeWidth={2.2} />} tone={C.brick} title="鸡蛋尚未拿稳即放手·摔碎：">
              乙未取得<Soft color={C.brick}>直接占有</Soft>→ 甲未完成交付 → <Seal delay={260} size={18}>碎蛋是甲的 ✗</Seal>
            </IconChip>
          </div>
        </div>
        <Enter delay={90} from="up" style={{position: 'absolute', left: 0, top: 340, width: 1776, height: 128}}>
          <Panel tone={C.patina} watermark={<Truck size={120} color={C.patina} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 18, padding: '10px 18px'}}>
            <Chip tone={C.patina} toneBg={C.patinaPale}><span style={{fontSize: 24, fontWeight: 950, color: C.patina}}>物权变动</span></Chip>
            <span style={{fontSize: 23, fontWeight: 900, color: C.ink}}>＝ 两关皆过：<Seal delay={170} size={20} tone={C.patina}>动产所有权转移 ✓</Seal><Seal delay={200} size={20} tone={C.brick}><Lock size={18} color={C.brick} strokeWidth={2.4} /> 动产质权设立 ✓</Seal></span>
          </Panel>
        </Enter>
        <div data-final-knowledge="symbolic-delivery" style={{position: 'absolute', left: 0, top: 484, width: 1776, height: 284}}>
          <Enter delay={120} from="up" style={{position: 'absolute', inset: 0}}>
            <Panel tone={C.key} watermark={<Car size={150} color={C.key} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
              <PanelTab tone={C.key} icon={<Key size={24} color={C.patinaPale} strokeWidth={2.2} />}>拟制交付 · 象征物的现实交付视为本身的现实交付</PanelTab>
              <div style={{position: 'relative', height: 110}}>
                <div style={{position: 'absolute', left: 0, top: 20}}>
                  <Chip tone={C.key} toneBg={C.keyPale}><Key size={24} color={C.key} strokeWidth={2.4} /><span style={{fontSize: 24, fontWeight: 950}}>汽车钥匙</span></Chip>
                </div>
                <Path color={C.key} delay={200} span={22} style={{position: 'absolute', left: 170, top: 52, width: 250, height: 4}} />
                <Mover delay={206} span={26} fromX={0} toX={250} fadeAt={280} style={{position: 'absolute', left: 16, top: 20, zIndex: 2}}>
                  <Chip tone={C.key} toneBg={C.keyPale}><Key size={24} color={C.key} strokeWidth={2.4} /><span style={{fontSize: 24, fontWeight: 950}}>汽车钥匙</span></Chip>
                </Mover>
                <div style={{position: 'absolute', left: 428, top: 10}}>
                  <Chip tone={C.copperMid} toneBg={C.parchmentDim}><span style={{fontSize: 22, fontWeight: 950}}>象征物交付</span></Chip>
                </div>
                <div style={{position: 'absolute', left: 640, top: 14, fontSize: 28, fontWeight: 950, color: C.key}}>
                  <Enter delay={280} from="none"><span>⇒ 视为</span></Enter>
                </div>
                <div style={{position: 'absolute', left: 760, top: 10}}>
                  <Chip tone={C.patina} toneBg={C.patinaPale}><Car size={24} color={C.patina} strokeWidth={2.4} /><span style={{fontSize: 23, fontWeight: 950, color: C.patina}}>汽车本身的现实交付</span></Chip>
                </div>
                <div style={{position: 'absolute', left: 1120, top: 4}}>
                  <Seal delay={330} size={22} tone={C.patina}>乙取得汽车所有权 ✓</Seal>
                </div>
              </div>
              <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft}}>甲将汽车 A 卖乙并交付钥匙——钥匙是<Soft color={C.key}>象征物</Soft>，完成拟制交付即完成现实交付</div>
            </Panel>
          </Enter>
        </div>
      </div>
    </Shell>
  );
};

export const ConstructiveDeliveryScene = () => {
  /* data-final-knowledge="constructive-meaning" data-final-knowledge="simple-lane" data-final-knowledge="assignment-lane" data-final-knowledge="instructed-lane" */
  return (
    <Shell code="03" kicker="观念交付 · 三兄弟" title="观念交付的三种类型">
      <div
        data-layout="three-constructive-lanes-with-date-strip"
        data-visual-anchor="document-fork"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="constructive-delivery-changes-property-by-consent-alone,simple-delivery-agrees-over-the-thing-already-held-for-me,possession-assignment-keeps-direct-possession-and-must-say-it-is-yours,instructed-delivery-transfers-the-return-claim-against-the-third-party"
        data-focal-rule="possession-may-never-move-while-consent-alone-carries-the-property-change"
        data-focal-channels="contrast,connector,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="constructive-meaning" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 104}}>
          <Panel tone={C.copperMid} watermark={<Lightbulb size={110} color={C.copperMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '9px 18px'}}>
            <PanelTab tone={C.copperMid} icon={<Lightbulb size={24} color={C.patinaPale} strokeWidth={2.2} />}>观念交付 · 含义</PanelTab>
            <span style={{fontSize: 23, fontWeight: 900, color: C.ink}}>动产标的物的<Soft color={C.copperMid}>占有外观不发生任何改变</Soft>，仅凭当事人的<Soft color={C.brick}>意思</Soft>，引起动产物权变动的交付</span>
          </Panel>
        </Enter>
        <Enter delay={36} from="left" marker="simple-lane" style={{position: 'absolute', left: 0, top: 120, width: 578, height: 440}}>
          <Panel tone={C.patina} watermark={<Key size={140} color={C.patina} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 16px'}}>
            <PanelTab tone={C.patina} icon={<Key size={24} color={C.patinaPale} strokeWidth={2.2} />}>① 简易交付</PanelTab>
            <div style={{position: 'relative', height: 118}}>
              <div style={{position: 'absolute', right: 8, top: 30, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4}}>
                <Chip tone={C.key} toneBg={C.keyPale}><Key size={22} color={C.key} strokeWidth={2.4} /><span style={{fontSize: 22, fontWeight: 950}}>动产</span></Chip>
                <span style={{fontSize: 20, fontWeight: 900, color: C.inkSoft}}>已先行转移于对方占有</span>
              </div>
              <Mover delay={110} span={22} fromX={0} fromY={-70} toX={150} toY={0} style={{position: 'absolute', left: 60, top: 34, zIndex: 2}}>
                <Chip tone={C.brick} toneBg={C.brickPale}><span style={{fontSize: 23, fontWeight: 950, color: C.brick}}>合意</span></Chip>
              </Mover>
              <div style={{position: 'absolute', left: 8, top: 84}}>
                <Seal delay={160} size={20} tone={C.patina}>物权变动 ✓</Seal>
              </div>
            </div>
            <IconChip icon={<Key size={24} color={C.patinaPale} strokeWidth={2.2} />} tone={C.patina} title="变动时间：">
              买卖·质押合同<Under color={C.patina} delay={180}>达成之时</Under>
            </IconChip>
            <div style={{marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 6}}>
              <span style={{fontSize: 21, fontWeight: 900, color: C.inkSoft}}>例：租的充电宝后来交钱买下</span>
              <span style={{fontSize: 22, fontWeight: 950, color: C.patina}}>口诀：我把<Soft color={C.patina}>你手里的我的动产</Soft>，处分给你</span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={66} from="up" marker="assignment-lane" style={{position: 'absolute', left: 594, top: 120, width: 578, height: 440}}>
          <Panel tone={C.brick} watermark={<Lock size={140} color={C.brick} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 16px'}}>
            <PanelTab tone={C.brick} icon={<Lock size={24} color={C.patinaPale} strokeWidth={2.2} />}>② 占有改定</PanelTab>
            <div style={{position: 'relative', height: 128}}>
              <div style={{position: 'absolute', left: 8, top: 26, display: 'flex', alignItems: 'center', gap: 8}}>
                <Chip tone={C.key} toneBg={C.keyPale}><Key size={22} color={C.key} strokeWidth={2.4} /><span style={{fontSize: 22, fontWeight: 950}}>动产（原地不动）</span></Chip>
              </div>
              <div style={{position: 'absolute', left: 8, top: 82, fontSize: 20, fontWeight: 900, color: C.inkSoft}}>转让人保留<Soft color={C.copperMid}>直接占有</Soft></div>
              <Path color={C.brick} delay={120} span={20} style={{position: 'absolute', left: 250, top: 46, width: 180, height: 4}} />
              <Mover delay={126} span={24} fromX={0} toX={180} style={{position: 'absolute', left: 256, top: 24, zIndex: 2}}>
                <Chip tone={C.brick} toneBg={C.brickPale}><span style={{fontSize: 22, fontWeight: 950, color: C.brick}}>所有权转移</span></Chip>
              </Mover>
              <div style={{position: 'absolute', right: 4, top: 0}}>
                <span style={{fontSize: 21, fontWeight: 950, color: C.brick}}>「它是你的了」合意</span>
              </div>
            </div>
            <IconChip icon={<Ban size={24} color={C.patinaPale} strokeWidth={2.2} />} tone={C.brick} title="两个禁止：">
              「<Soft color={C.brick}>愿买愿卖</Soft>」的合意<Under color={C.brick} delay={150}>不能引起</Under>占有改定
            </IconChip>
            <IconChip icon={<Lock size={24} color={C.patinaPale} strokeWidth={2.2} />} tone={C.copperMid} title="质权严格例外：">
              不得依占有改定设立<Soft color={C.copperMid}>动产质权</Soft>——视为<Seal delay={190} size={18}>质物未交付·物权不变动</Seal>
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 950, color: C.brick}}>口诀：我把<Soft color={C.brick}>我手里的动产</Soft>，处分给你</div>
          </Panel>
        </Enter>
        <Enter delay={96} from="right" marker="instructed-lane" style={{position: 'absolute', left: 1188, top: 120, width: 588, height: 440}}>
          <Panel tone={C.copperMid} watermark={<Send size={140} color={C.copperMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 16px'}}>
            <PanelTab tone={C.copperMid} icon={<Send size={24} color={C.patinaPale} strokeWidth={2.2} />}>③ 指示交付</PanelTab>
            <div style={{position: 'relative', height: 150}}>
              <div style={{position: 'absolute', left: 8, top: 6, fontSize: 20, fontWeight: 900, color: C.inkSoft}}>转让人</div>
              <div style={{position: 'absolute', right: 8, top: 6, fontSize: 20, fontWeight: 900, color: C.inkSoft}}>受让人</div>
              <Path color={C.copperMid} delay={130} span={22} style={{position: 'absolute', left: 70, top: 40, width: 420, height: 4}} />
              <Mover delay={136} span={26} fromX={0} toX={420} style={{position: 'absolute', left: 76, top: 18, zIndex: 2}}>
                <Chip tone={C.copperMid} toneBg={C.parchmentDim}><span style={{fontSize: 22, fontWeight: 950}}>返还请求权让与</span></Chip>
              </Mover>
              <div style={{position: 'absolute', left: 180, top: 92, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4}}>
                <Chip tone={C.key} toneBg={C.keyPale}><Key size={22} color={C.key} strokeWidth={2.4} /><span style={{fontSize: 22, fontWeight: 950}}>动产（第三人占有）</span></Chip>
                <span style={{fontSize: 20, fontWeight: 900, color: C.inkSoft}}>↓ 通知占有人</span>
              </div>
              <Mover delay={200} span={20} fromX={0} fromY={-40} toX={0} toY={0} style={{position: 'absolute', left: 180, top: 60, zIndex: 2}}>
                <Chip tone={C.patina} toneBg={C.patinaPale}><span style={{fontSize: 21, fontWeight: 950, color: C.patina}}>通知</span></Chip>
              </Mover>
            </div>
            <IconChip icon={<Send size={24} color={C.patinaPale} strokeWidth={2.2} />} tone={C.patina} title="通知到达：">
              占有人对<Soft color={C.patina}>受让人</Soft>承担返还义务；未通知→仅对<Soft color={C.copperMid}>转让人</Soft>
            </IconChip>
            <IconChip icon={<Key size={24} color={C.patinaPale} strokeWidth={2.2} />} tone={C.key} title="变动时间：">
              <Under color={C.key} delay={230}>返还请求权让与合意</Under>达成之时
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 950, color: C.copperMid}}>口诀：我把<Soft color={C.copperMid}>他手里的我的动产</Soft>，处分给你</div>
          </Panel>
        </Enter>
        <Enter delay={140} from="up" style={{position: 'absolute', left: 0, top: 576, width: 1776, height: 192}}>
          <Panel tone={C.brick} watermark={<Lock size={140} color={C.brick} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 18px'}}>
            <PanelTab tone={C.brick} icon={<Lock size={24} color={C.patinaPale} strokeWidth={2.2} />}>时间轴 · 质权不得占有改定</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Chip tone={C.edge} toneBg={C.parchmentDim}>12月10日 · 质押合同</Chip>
              <span style={{fontSize: 24, fontWeight: 950, color: C.inkSoft}}>→</span>
              <Chip tone={C.edge} toneBg={C.parchmentDim}>12月15日 · 约定交付日</Chip>
              <span style={{fontSize: 24, fontWeight: 950, color: C.inkSoft}}>→</span>
              <Chip tone={C.brick} toneBg={C.brickPale}>12月20日 · 约定替乙保管（占有改定）</Chip>
              <span style={{fontSize: 24, fontWeight: 950, color: C.brick}}>→</span>
              <Chip tone={C.patina} toneBg={C.patinaPale}>12月25日 · 现实交付</Chip>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 18, marginTop: 'auto'}}>
              <Seal delay={200} size={20}>12月20日 质权未设立 ✗</Seal>
              <span style={{fontSize: 22, fontWeight: 900, color: C.ink}}>占有改定不能设立质权——</span>
              <Seal delay={240} size={20} tone={C.patina}>12月25日 现实交付方取得质权 ✓</Seal>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
