import type {CSSProperties, ReactNode} from 'react';
import {
  Ban,
  Coins,
  Fingerprint,
  Gavel,
  Heart,
  EyeOff,
  Image,
  Landmark,
  Shield,
  UserRound,
  Users,
} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  turq: '#1E3D3A',
  turqDeep: '#162E2C',
  turqMid: '#2C504B',
  linen: '#F5F0E4',
  linenDim: '#EAE3D2',
  pine: '#22352E',
  pineSoft: '#77897F',
  coral: '#D0785C',
  coralPale: '#F6E0D6',
  brass: '#C2A15A',
  brassPale: '#F1E8CF',
  sage: '#7C9A83',
  sagePale: '#E2EBDF',
  violet: '#7B5E8C',
  violetPale: '#EBE1F0',
  edge: '#CFC7B0',
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

export const LineV = ({
  delay = 0,
  tone,
  thickness = 4,
  span = 20,
  head = true,
  origin = 'top',
  style,
}: {
  readonly delay?: number;
  readonly tone: string;
  readonly thickness?: number;
  readonly span?: number;
  readonly head?: boolean;
  readonly origin?: 'bottom' | 'top';
  readonly style?: CSSProperties;
}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, span);
  return (
    <span style={{position: 'absolute', ...style}}>
      <span style={{position: 'absolute', inset: 0, backgroundColor: tone, borderRadius: thickness / 2, transformOrigin: origin === 'top' ? 'center top' : 'center bottom', scaleY: p}} />
      {head ? (
        <span
          style={{
            position: 'absolute',
            ...(origin === 'top'
              ? {bottom: -9, left: '50%', translate: '-50% 0', borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: `10px solid ${tone}`}
              : {top: -9, left: '50%', translate: '-50% 0', borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderBottom: `10px solid ${tone}`}),
            opacity: p,
          }}
        />
      ) : null}
    </span>
  );
};

export const Shell = ({children, code, kicker, title}: {readonly children: ReactNode; readonly code: string; readonly kicker: string; readonly title: string}) => {
  const sceneIndex = Math.max(0, Math.min(2, Number(code) - 1));
  return (
    <AbsoluteFill
      data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
      style={{
        backgroundColor: C.turq,
        color: C.linen,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `radial-gradient(circle at 78% 20%, rgba(245, 240, 228, 0.07) 0%, transparent 42%), repeating-linear-gradient(90deg, transparent 0 140px, rgba(255, 255, 255, 0.04) 140px 142px)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 12, background: `linear-gradient(90deg, ${C.coral}, ${C.brass}, ${C.sage})`, opacity: 0.94}} />
      <div style={{position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: '2px solid rgba(245, 240, 228, 0.3)'}} />
      <span style={{position: 'absolute', left: 34, top: 34, width: 12, height: 12, backgroundColor: C.brass, opacity: 0.9}} />
      <span style={{position: 'absolute', right: 34, top: 34, width: 12, height: 12, backgroundColor: C.brass, opacity: 0.9}} />
      <span style={{position: 'absolute', left: 34, bottom: 34, width: 12, height: 12, backgroundColor: C.brass, opacity: 0.9}} />
      <span style={{position: 'absolute', right: 34, bottom: 34, width: 12, height: 12, backgroundColor: C.brass, opacity: 0.9}} />
      <div style={{position: 'absolute', left: 60, top: 44, padding: '10px 16px', backgroundColor: C.turqDeep, borderLeft: `8px solid ${C.brass}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.linen, letterSpacing: 2}}>民法 · 第17讲 · {code}</span>
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
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.linen}}>{title}</h1>
        <span style={{fontSize: 22, fontWeight: 850, color: C.brassPale, textAlign: 'right'}}>{kicker}</span>
      </header>
      <div style={{position: 'absolute', right: 64, bottom: 44, display: 'flex', alignItems: 'center', gap: 10, opacity: 0.9}}>
        {[0, 1, 2].map((dot) => (
          <span
            key={dot}
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: dot === sceneIndex ? C.coral : 'transparent',
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
    style={{backgroundColor: C.linen, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${tone}`, color: C.pine, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(22, 46, 44, 0.42)', ...style}}
  >
    <span style={{position: 'absolute', right: 10, top: 10, width: 26, height: 26, borderTop: `3px solid ${tone}`, borderRight: `3px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 14, bottom: 10, width: 26, height: 26, borderBottom: `3px solid ${tone}`, borderLeft: `3px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.brass, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.turqDeep, borderLeft: `6px solid ${tone}`, color: C.linen, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children, style}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.linenDim, borderLeft: `5px solid ${tone}`, padding: '5px 12px', ...style}}>
    <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 22, backgroundColor: tone, border: `2px solid ${C.linen}`, boxShadow: '0 0 0 2px rgba(194, 161, 90, 0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.pine, lineHeight: 1.42}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Seal = ({children, delay = 0, size = 22, tone = C.coral}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

export const Chip = ({children, tone = C.edge, toneBg = C.linenDim, ink = C.pine}: {readonly children: ReactNode; readonly tone?: string; readonly toneBg?: string; readonly ink?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${tone}`, backgroundColor: toneBg, padding: '5px 12px', fontSize: 22, fontWeight: 900, color: ink, whiteSpace: 'nowrap'}}>{children}</span>
);


export const VitalityRightsScene = () => {
  /* data-final-knowledge="life-and-health-harm" data-final-knowledge="body-harm-scope" data-final-knowledge="harassment-rules" data-final-knowledge="vitality-rack-summary" */
  return (
    <Shell code="01" kicker="生命 · 健康 · 身体 · 性骚扰" title="生命、健康、身体与性骚扰侵权">
      <div
        data-layout="four-vitality-rack-with-unit-duty-strip"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="life-harm-needs-fault-cause-death-while-health-harm-breaks-normal-function-of-body-and-mind,body-harm-breaks-bodily-integrity-or-restricts-movement-and-unremovable-prosthetics-count-as-body,harassment-is-unwanted-verbal-or-conduct-based-and-employers-must-prevent-and-stop-abuse-of-power,each-vitality-right-carries-its-own-fault-object-and-special-problem-on-one-rack"
        data-focal-rule="four-vitality-rungs-fault-cause-death-break-function-break-integrity-unwanted-conduct-with-units-answering-for-power-harassment"
        data-focal-channels="icon,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="life-and-health-harm" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 210}}>
          <Panel tone={C.coral} watermark={<Heart size={110} color={C.coral} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.coral} icon={<Heart size={24} color={C.linen} strokeWidth={2.2} />}>生命侵权 与 健康侵权</PanelTab>
            <IconChip icon={<Heart size={24} color={C.linen} strokeWidth={2.2} />} tone={C.coral} title="生命侵权：" style={{flex: 0.9}}>
              因<Soft color={C.coral}>过错</Soft>不法致他人<Soft color={C.coral}>死亡</Soft>
            </IconChip>
            <IconChip icon={<Shield size={24} color={C.linen} strokeWidth={2.2} />} tone={C.sage} title="健康侵权：" style={{flex: 1}}>
              因过错不法破坏他人<Soft color={C.sage}>身心机能</Soft>的正常发挥——含<Under color={C.sage} delay={150}>身体健康与心理健康</Under>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={40} from="right" marker="body-harm-scope" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 210}}>
          <Panel tone={C.brass} watermark={<UserRound size={110} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.brass} icon={<UserRound size={24} color={C.linen} strokeWidth={2.2} />}>身体侵权 · 两种情形＋人工组件</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>① 因过错不法破坏他人<Soft color={C.brass}>身体完整性</Soft>；② 不法<Soft color={C.warn}>限制行动自由</Soft>——如<Soft color={C.warn}>非法拘禁</Soft>、<Soft color={C.warn}>非法搜查</Soft>他人身体</div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.coffeeSoft}}>人工组件：无法自行<Soft color={C.brass}>随意拆卸</Soft>、需<Soft color={C.brass}>专业人员</Soft>拆卸的，<Seal delay={200} size={20}>也是身体</Seal></div>
          </Panel>
        </Enter>
        <Enter delay={90} from="up" marker="harassment-rules" style={{position: 'absolute', left: 0, top: 224, width: 1776, height: 200}}>
          <Panel tone={C.violet} watermark={<Ban size={110} color={C.violet} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.violet} icon={<Ban size={24} color={C.linen} strokeWidth={2.2} />}>性骚扰侵权 · 认定与单位防范</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}><Soft color={C.violet}>违背</Soft>他人意愿，以<Soft color={C.violet}>言语、行为</Soft>等方式实施性骚扰 → 受害人有权依法请求行为人承担<Soft color={C.violet}>民事责任</Soft></div>
            <IconChip icon={<Users size={24} color={C.linen} strokeWidth={2.2} />} tone={C.coral} title="单位义务：" style={{flex: 1}}>
              各单位应采取<Soft color={C.coral}>合理措施</Soft>防止和制止利用<Soft color={C.coral}>职权、从属关系</Soft>实施的性骚扰；未尽保护 → <Seal delay={220} size={20}>单位也可能承担侵权责任</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={150} from="up" marker="vitality-rack-summary" style={{position: 'absolute', left: 0, top: 438, width: 1776, height: 330}}>
          <Panel tone={C.brass} watermark={<Gavel size={120} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.brass} icon={<Gavel size={24} color={C.linen} strokeWidth={2.2} />}>四权对照 · 一表贯通</PanelTab>
            <div style={{display: 'flex', flexDirection: 'column', gap: 6, flex: 1, justifyContent: 'center'}}>
              <IconChip icon={<Heart size={22} color={C.linen} strokeWidth={2.2} />} tone={C.coral} title="生命：">
                因过错不法致人死亡
              </IconChip>
              <IconChip icon={<Shield size={22} color={C.linen} strokeWidth={2.2} />} tone={C.sage} title="健康：">
                因过错不法损害健康状况（身体＋心理）
              </IconChip>
              <IconChip icon={<UserRound size={22} color={C.linen} strokeWidth={2.2} />} tone={C.brass} title="身体：">
                破坏完整性或限制行动自由；难以拆卸的人工组件为身体
              </IconChip>
              <IconChip icon={<Ban size={22} color={C.linen} strokeWidth={2.2} />} tone={C.violet} title="性骚扰：">
                违背意愿＋言语行为；上级性骚扰未尽保护的单位同为侵权
              </IconChip>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};


export const NamePortraitScene = () => {
  /* data-final-knowledge="name-scope-and-elements" data-final-knowledge="portrait-definition-and-forms" data-final-knowledge="portrait-fair-use-lanes" data-final-knowledge="photo-three-rights-triangle" */
  return (
    <Shell code="02" kicker="姓名名称 · 肖像" title="姓名侵权与肖像侵权">
      <div
        data-layout="name-portrait-gallery-with-fair-use-lanes"
        data-visual-anchor="document-fork"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="protected-names-cover-current-former-and-famous-alternate-names-that-confuse-the-public,name-harm-needs-interference-impersonation-or-theft-of-seals-and-signatures,portraits-are-reproductions-linking-viewers-to-the-person-and-voice-follows-portrait-rules,photo-ownership-turns-on-delivery-while-unauthorized-sale-stays-authorised-disposition-yet-torts-the-portrait"
        data-focal-rule="names-protect-identity-through-interference-impersonation-and-theft-while-portraits-protect-likeness-unless-fair-use-and-photo-rights-split-three-ways"
        data-focal-channels="contrast,icon,connector,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="name-scope-and-elements" style={{position: 'absolute', left: 0, top: 0, width: 900, height: 330}}>
          <Panel tone={C.brass} watermark={<Shield size={110} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.brass} icon={<Shield size={24} color={C.linen} strokeWidth={2.2} />}>姓名、名称侵权</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>保护范围：<Soft color={C.brass}>现用姓名</Soft>＋<Soft color={C.brass}>曾用名</Soft>＋有<Soft color={C.brass}>一定社会知名度</Soft>的笔名、艺名、网名、字号、简称——前提是足以造成公众<Soft color={C.warn}>混淆</Soft></div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 4, flex: 1}}>
              <IconChip icon={<Ban size={22} color={C.linen} strokeWidth={2.2} />} tone={C.coral} title="① 干涉：">
                干涉他人的姓名、名称<Soft color={C.coral}>自由</Soft>
              </IconChip>
              <IconChip icon={<Coins size={22} color={C.linen} strokeWidth={2.2} />} tone={C.coral} title="② 盗用：">
                <Soft color={C.coral}>伪造</Soft>他人印章、<Soft color={C.coral}>模仿</Soft>他人签字
              </IconChip>
              <IconChip icon={<UserRound size={22} color={C.linen} strokeWidth={2.2} />} tone={C.violet} title="③ 假冒：">
                <Soft color={C.violet}>冒名顶替</Soft>他人上大学
              </IconChip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={40} from="right" marker="portrait-definition-and-forms" style={{position: 'absolute', left: 914, top: 0, width: 862, height: 330}}>
          <Panel tone={C.coral} watermark={<Image size={110} color={C.coral} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.coral} icon={<Image size={24} color={C.linen} strokeWidth={2.2} />}>肖像侵权 · 定义与行为形态</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>肖像＝人的<Soft color={C.coral}>身体形象</Soft>在其他载体上的<Soft color={C.coral}>再现</Soft>，本质是他人能借此与本人<Under color={C.coral} delay={140}>建立连接</Under>；<Soft color={C.warn}>声音</Soft>参照适用肖像权保护</div>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>侵权形态：① <Soft color={C.warn}>丑化、污损</Soft>或利用信息技术手段<Soft color={C.warn}>伪造</Soft>肖像（无例外）；② 未经<Soft color={C.warn}>同意</Soft>擅自<Soft color={C.warn}>制作、使用、公开</Soft>（法定合理使用除外）</div>
          </Panel>
        </Enter>
        <Enter delay={90} from="left" marker="portrait-fair-use-lanes" style={{position: 'absolute', left: 0, top: 344, width: 900, height: 240}}>
          <Panel tone={C.sage} watermark={<Shield size={100} color={C.sage} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 5, padding: '12px 18px'}}>
            <PanelTab tone={C.sage} icon={<Shield size={24} color={C.linen} strokeWidth={2.2} />}>肖像的合理使用 · 四条通道</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>① 个人学习、艺术欣赏、教学科研，在<Soft color={C.sage}>必要范围</Soft>内使用<Soft color={C.sage}>已公开</Soft>的肖像；② <Soft color={C.sage}>新闻报道</Soft>、展示<Soft color={C.sage}>特定公共环境</Soft>不可避免地使用</div>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>③ 国家机关依法履职在<Soft color={C.sage}>必要范围</Soft>内使用；④ 为维护<Soft color={C.sage}>公共利益</Soft>或肖像权人<Soft color={C.sage}>合法权益</Soft>的其他行为</div>
          </Panel>
        </Enter>
        <Enter delay={130} from="right" marker="photo-three-rights-triangle" style={{position: 'absolute', left: 914, top: 344, width: 862, height: 240}}>
          <Panel tone={C.violet} watermark={<Coins size={100} color={C.violet} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 5, padding: '12px 18px'}}>
            <PanelTab tone={C.violet} icon={<Coins size={24} color={C.linen} strokeWidth={2.2} />}>一张照片 · 三权交叉</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>本人＝<Soft color={C.violet}>肖像权人</Soft>；拍摄者＝<Soft color={C.violet}>著作权人</Soft>；照片<Soft color={C.warn}>所有权按交付</Soft>：未交付归拍摄者，已交付归本人</div>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>拍摄者擅自出卖 → 对本人构成<Soft color={C.warn}>肖像侵权</Soft>，但出卖仍属<Soft color={C.pine}>有权处分</Soft>，第三人<Soft color={C.pine}>继受取得</Soft>所有权；著作权除<Soft color={C.warn}>展览权</Soft>外<Soft color={C.warn}>不转移</Soft>；第三人擅自用于<Soft color={C.warn}>营利</Soft> → 对本人肖像侵权</div>
          </Panel>
        </Enter>
        <Enter delay={180} from="up" style={{position: 'absolute', left: 0, top: 598, width: 1776, height: 170}}>
          <Panel tone={C.brass} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '12px 18px'}}>
            <PanelTab tone={C.brass} icon={<Gavel size={24} color={C.linen} strokeWidth={2.2} />}>速记</PanelTab>
            <span style={{fontSize: 23, fontWeight: 900, lineHeight: 1.5}}>姓名三要件＝干涉＋盗用＋假冒 · 肖像两形态＝丑化伪造（无例外）＋擅自制作使用公开（合理使用除外） · 照片三权看交付</span>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};


export const ReputationPrivacyScene = () => {
  /* data-final-knowledge="reputation-honor-rules" data-final-knowledge="privacy-acts-and-concurrence" data-final-knowledge="personal-information-rules" data-final-knowledge="enforcement-means" */
  return (
    <Shell code="03" kicker="名誉荣誉 · 隐私个人信息 · 执行" title="名誉、隐私、个人信息与执行手段">
      <div
        data-layout="reputation-privacy-bench-with-concurrence-and-enforcement"
        data-visual-anchor="boundary"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="reputation-harm-needs-insult-or-defamation-that-lowers-social-appraisal-while-honor-covers-forfeit-or-slight,privacy-covers-tranquility-and-private-spaces-acts-information-against-peeping-disclosure-and-disturbance,portrait-and-reputation-claims-concur-with-privacy-only-when-private-information-or-defamation-joins,personal-information-must-identify-and-anonymized-data-exits-while-consent-rules-demand-quiet-withdrawal-and-fresh-consent"
        data-focal-rule="reputation-needs-lowered-appraisal-privacy-shields-tranquility-and-secrets-concurrence-turns-on-content-and-personal-information-lives-on-identifiability-and-consent"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="reputation-honor-rules" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 240}}>
          <Panel tone={C.coral} watermark={<Users size={110} color={C.coral} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.coral} icon={<Users size={24} color={C.linen} strokeWidth={2.2} />}>名誉侵权 与 荣誉侵权</PanelTab>
            <IconChip icon={<Users size={24} color={C.linen} strokeWidth={2.2} />} tone={C.coral} title="名誉侵权·两要件缺一不可：" style={{flex: 1.1}}>
              ① 实施<Soft color={C.coral}>侮辱、诽谤</Soft>等违背公序良俗的行为；② 造成社会评价<Soft color={C.coral}>降低</Soft>
            </IconChip>
            <IconChip icon={<Shield size={24} color={C.linen} strokeWidth={2.2} />} tone={C.brass} title="荣誉侵权：" style={{flex: 1}}>
              荣誉＝对<Soft color={C.brass}>光荣称号</Soft>的权利（劳模、优秀教师）；典型＝<Soft color={C.warn}>非法剥夺</Soft>、<Soft color={C.warn}>诋毁贬损</Soft>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={40} from="right" marker="privacy-acts-and-concurrence" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 240}}>
          <Panel tone={C.violet} watermark={<EyeOff size={110} color={C.violet} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 5, padding: '12px 18px'}}>
            <PanelTab tone={C.violet} icon={<EyeOff size={24} color={C.linen} strokeWidth={2.2} />}>隐私侵权 · 范围与三行为＋竞合</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>隐私＝<Soft color={C.violet}>私人生活安宁</Soft>＋不愿为他人知晓的私密<Soft color={C.violet}>空间、活动、信息</Soft></div>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>行为：① <Soft color={C.warn}>窥探</Soft>；② 擅自<Soft color={C.warn}>公开</Soft>（日记、裸照）；③ <Soft color={C.warn}>侵扰</Soft>私生活安宁</div>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>竞合：公开隐私致名誉损害——有<Soft color={C.warn}>侮辱诽谤</Soft> → 名誉＋隐私竞合；无侮辱诽谤 → <Soft color={C.pine}>仅隐私侵权</Soft>；肖像内容含隐私信息 → 肖像＋隐私同构</div>
          </Panel>
        </Enter>
        <Enter delay={90} from="left" marker="personal-information-rules" style={{position: 'absolute', left: 0, top: 254, width: 1080, height: 324}}>
          <Panel tone={C.sage} watermark={<Fingerprint size={110} color={C.sage} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 5, padding: '12px 18px'}}>
            <PanelTab tone={C.sage} icon={<Fingerprint size={24} color={C.linen} strokeWidth={2.2} />}>个人信息 · 识别性与同意规则</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>个人信息＝能够<Soft color={C.sage}>识别</Soft>特定主体的信息（姓名、电话等）；<Soft color={C.warn}>匿名化处理</Soft>后<Seal delay={180} size={20} tone={C.sage}>不是个人信息</Seal></div>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>权能：保有、控制，并向控制者依法<Soft color={C.sage}>查阅、抄录、复制</Soft></div>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>撤回同意：个人有权撤回，处理者应提供<Soft color={C.sage}>便捷方式</Soft>；撤回<Soft color={C.pine}>不影响</Soft>撤回前已进行的处理效力；<Ban size={20} color={C.warn} strokeWidth={2.6} /> 不得因不同意或撤回而<Soft color={C.warn}>拒绝提供产品服务</Soft>（<Soft color={C.warn}>必需</Soft>除外）</div>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>再次同意：向其他处理者<Soft color={C.warn}>提供</Soft> → 取得<Soft color={C.warn}>单独同意</Soft>；接收方<Soft color={C.warn}>变更目的方式</Soft> → 重新取得<Soft color={C.warn}>个人同意</Soft></div>
          </Panel>
        </Enter>
        <Enter delay={130} from="right" marker="enforcement-means" style={{position: 'absolute', left: 1094, top: 254, width: 682, height: 324}}>
          <Panel tone={C.brass} watermark={<Gavel size={110} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '12px 18px'}}>
            <PanelTab tone={C.brass} icon={<Gavel size={24} color={C.linen} strokeWidth={2.2} />}>人格保护的特殊手段</PanelTab>
            <IconChip icon={<Landmark size={24} color={C.linen} strokeWidth={2.2} />} tone={C.violet} title="法院强制措施：" style={{flex: 1}}>
              法院可采取<Soft color={C.violet}>强制性措施</Soft>保护人格权
            </IconChip>
            <IconChip icon={<Coins size={24} color={C.linen} strokeWidth={2.2} />} tone={C.coral} title="非财产责任的执行：" style={{flex: 1.6}}>
              拒不承担<Soft color={C.coral}>消除影响、恢复名誉、赔礼道歉</Soft>等责任 → 法院可在媒体上<Under color={C.coral} delay={220}>发布公告</Under>或<Under color={C.coral} delay={250}>公布生效裁判文书</Under>等方式执行，费用由<Soft color={C.warn}>行为人负担</Soft>
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

/* __APPEND__ */
