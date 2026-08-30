import type {CSSProperties, ReactNode} from 'react';
import {Ban, EyeOff, FileWarning, Gavel, Handshake, HeartCrack, Scale, ScrollText, ShieldCheck, Split} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  charcoal: '#2B2B2E',
  charcoalMid: '#3D3D42',
  vermilion: '#C13A2A',
  vermilionPale: '#F0D5CD',
  honey: '#C98F2C',
  honeyPale: '#EFDFB4',
  jade: '#3E7D5E',
  jadePale: '#D6E7DC',
  plum: '#6B4E6E',
  plumPale: '#E2D3E2',
  wine: '#8E3049',
  winePale: '#EDD0D8',
  paper: '#F3F0E8',
  paperDim: '#E6E2D6',
  paperEdge: '#B7B2A6',
  ink: '#26262B',
  inkSoft: '#71707A',
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
      backgroundColor: C.charcoal,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(0deg, transparent 0 128px, rgba(0, 0, 0, 0.14) 128px 131px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.vermilion}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.vermilionPale}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.charcoalMid, borderLeft: `8px solid ${C.honey}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>民法 · 第3讲 · {code}</span>
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
        borderBottom: `2px solid ${C.honey}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.honeyPale, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

export const Panel = ({children, marker, tone = C.honey, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.paper, border: `2px solid ${C.paperEdge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: `8px solid ${tone}`, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.1, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.honey, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '4px 14px', backgroundColor: C.charcoalMid, borderLeft: `6px solid ${tone}`, color: C.paper, fontSize: 21, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.paperDim, borderLeft: `6px solid ${tone}`, padding: '5px 12px'}}>
    <span style={{flexShrink: 0, width: 46, height: 46, borderRadius: 9, backgroundColor: tone, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 0 rgba(0,0,0,0.18)'}}>{icon}</span>
    <span style={{fontSize: 21, fontWeight: 880, color: C.ink, lineHeight: 1.42}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Seal = ({children, delay = 0, size = 24, tone = C.vermilion}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

export const Under = ({children, color = C.vermilion, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

export const Chip = ({children, tone = C.paperEdge, toneBg = C.paperDim, ink = C.ink}: {readonly children: ReactNode; readonly tone?: string; readonly toneBg?: string; readonly ink?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${tone}`, backgroundColor: toneBg, padding: '5px 12px', fontSize: 21, fontWeight: 900, color: ink, whiteSpace: 'nowrap'}}>{children}</span>
);

export const VoidCoreScene = () => {
  /* data-final-knowledge="void-definition" data-final-knowledge="partial-invalidity-rule" data-final-knowledge="collusion-rule" data-final-knowledge="immoral-and-exemption-rules" */
  return (
    <Shell code="01" kicker="无效的民事法律行为" title="无效的民事法律行为">
      <div
        data-layout="void-grounds-verdict-wall"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="void-acts-never-take-effect-from-the-start-certainly-and-automatically,partial-invalidity-keeps-the-lawful-part-alive,collusion-with-malice-and-immoral-acts-are-void,improper-exemption-clauses-are-void"
        data-focal-rule="fundamental-unlawfulness-kills-the-act-from-the-start-and-keeps-the-clean-part"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="void-definition" style={{position: 'absolute', left: 40, top: 0, width: 832, height: 314}}>
          <Panel tone={C.vermilion} watermark={<Gavel size={160} color={C.vermilion} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.vermilion} icon={<Gavel size={24} color={C.honeyPale} strokeWidth={2.2} />}>无效的定义 · 全部与部分</PanelTab>
            <IconChip icon={<Gavel size={26} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="无效：">
              具有<Soft color={C.vermilion}>根本性违法事由</Soft> → <Under color={C.vermilion} delay={70}>自始</Under>·<Under color={C.vermilion} delay={95}>当然</Under>·<Under color={C.vermilion} delay={120}>确定地</Under>不发生所追求效果
            </IconChip>
            <IconChip icon={<Split size={26} color={C.paper} strokeWidth={2.2} />} tone={C.plum} title="全部无效：">
              无效事由使整个行为<Soft color={C.plum}>均具违法性</Soft> → 全部无效
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.paper} strokeWidth={2.2} />} tone={C.jade} title="部分无效（婚前协议案）：">
              财产约定<Seal delay={150} size={17} tone={C.jade}>有效 ✓</Seal> · 3 年内不得离婚<Seal delay={180} size={17}>无效 ✗</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={28} from="right" marker="collusion-rule" style={{position: 'absolute', left: 904, top: 0, width: 832, height: 314}}>
          <Panel tone={C.plum} watermark={<Handshake size={160} color={C.plum} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.plum} icon={<Handshake size={24} color={C.honeyPale} strokeWidth={2.2} />}>恶意串通 · 要件二则</PanelTab>
            <IconChip icon={<Gavel size={26} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="效力：">
              恶意串通，损害国家·集体·他人利益 → <Seal delay={100} size={18}>无效</Seal>
            </IconChip>
            <IconChip icon={<EyeOff size={26} color={C.paper} strokeWidth={2.2} />} tone={C.plum} title="主观要件：">
              双方<Under color={C.plum} delay={130}>知道</Under>自己的行为会<Soft color={C.plum}>损害第三人</Soft>利益
            </IconChip>
            <IconChip icon={<HeartCrack size={26} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="客观要件（核心）：">
              行为具有<Soft color={C.vermilion}>不正常性</Soft>——弄虚作假·行贿受贿·不合常理
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.paper} strokeWidth={2.2} />} tone={C.jade} title="对照：">
              送礼求抵押案＝<Seal delay={220} size={16}>无效 ✗</Seal> · 丙高价买房案＝<Seal delay={250} size={16} tone={C.jade}>有效 ✓ 无不正常性</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={70} from="up" marker="immoral-and-exemption-rules" style={{position: 'absolute', left: 40, top: 330, width: 1696, height: 330}}>
          <Panel tone={C.honey} watermark={<ScrollText size={160} color={C.honey} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 20px'}}>
            <PanelTab tone={C.honey} icon={<ScrollText size={24} color={C.honeyPale} strokeWidth={2.2} />}>违背公序良俗 · 不当免责条款 —— 均＝无效</PanelTab>
            <div style={{flex: 1, display: 'flex', gap: 14}}>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 8}}>
                <IconChip icon={<HeartCrack size={26} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="违背公序良俗：">
                  民事法律行为违背公序良俗 → <Seal delay={160} size={17}>无效</Seal>
                </IconChip>
                <IconChip icon={<FileWarning size={26} color={C.paper} strokeWidth={2.2} />} tone={C.plum} title="格式条款（提供方）：">
                  不合理地<Under color={C.plum} delay={200}>免除·减轻</Under>其责任、<Under color={C.plum} delay={220}>加重</Under>对方责任
                </IconChip>
              </div>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 8}}>
                <IconChip icon={<Ban size={26} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="人身损害免责：">
                  约定对造成对方<Soft color={C.vermilion}>人身损害</Soft>的免责条款 → 无效
                </IconChip>
                <IconChip icon={<Ban size={26} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="财产损失免责：">
                  因<Soft color={C.vermilion}>故意或重大过失</Soft>造成对方财产损失的免责条款 → 无效
                </IconChip>
              </div>
            </div>
            <div style={{marginTop: 'auto', fontSize: 19.5, fontWeight: 900, color: C.inkSoft}}>另有：违反强制性规定（效力性）· 无行为能力人独立实施 → 均无效</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const MandatoryRulesScene = () => {
  /* data-final-knowledge="validity-mode-rule" data-final-knowledge="managerial-mode-rule" data-final-knowledge="three-refined-cases" data-final-knowledge="presale-verdicts" */
  return (
    <Shell code="02" kicker="违反强制性规定" title="效力性强制规定与管理性强制规定">
      <div
        data-layout="dual-mode-rule-desk-with-case"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="validity-rules-ban-the-deal-itself-and-void-it,managerial-rules-ban-its-preconditions-and-spare-the-deal,three-refined-cases-mostly-validate-management-breaches,uncorrected-pre-sale-licensing-voids-unless-self-inflicted"
        data-focal-rule="banning-the-deal-itself-voids-it-banning-its-preconditions-spares-it"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="validity-mode-rule" style={{position: 'absolute', left: 40, top: 0, width: 832, height: 254}}>
          <Panel tone={C.vermilion} watermark={<Ban size={150} color={C.vermilion} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.vermilion} icon={<Ban size={24} color={C.honeyPale} strokeWidth={2.2} />}>效力性强制规定 · 毒品模式</PanelTab>
            <IconChip icon={<Gavel size={26} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="效力：">
              违反法律·行政法规的<Soft color={C.vermilion}>效力性强制规定</Soft> → <Seal delay={110} size={18}>无效</Seal>
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="认定：">
              法律<Under color={C.vermilion} delay={140}>禁止实施</Under>某种民事法律行为——强制的是「<Soft color={C.vermilion}>交易本身</Soft>」（禁止毒品买卖）
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={28} from="right" marker="managerial-mode-rule" style={{position: 'absolute', left: 904, top: 0, width: 832, height: 254}}>
          <Panel tone={C.jade} watermark={<ShieldCheck size={150} color={C.jade} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.jade} icon={<ShieldCheck size={24} color={C.honeyPale} strokeWidth={2.2} />}>管理性强制规定 · 凉皮模式</PanelTab>
            <IconChip icon={<ShieldCheck size={26} color={C.paper} strokeWidth={2.2} />} tone={C.jade} title="效力：">
              违反<Soft color={C.jade}>管理性强制规定</Soft> → <Seal delay={110} size={18} tone={C.jade}>依然有效</Seal>
            </IconChip>
            <IconChip icon={<FileWarning size={26} color={C.paper} strokeWidth={2.2} />} tone={C.jade} title="认定：">
              未禁止交易，但要求「<Soft color={C.jade}>应当办理有关手续</Soft>」——强制的是「<Soft color={C.jade}>交易前提</Soft>」（未办营业执照不得营业）
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={70} from="up" marker="three-refined-cases" style={{position: 'absolute', left: 40, top: 270, width: 832, height: 380}}>
          <Panel tone={C.honey} watermark={<FileWarning size={150} color={C.honey} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.honey} icon={<FileWarning size={24} color={C.honeyPale} strokeWidth={2.2} />}>管理性规定的三类具体化</PanelTab>
            <IconChip icon={<Scale size={26} color={C.paper} strokeWidth={2.2} />} tone={C.jade} title="① 未缴税款·出让金：">
              「未缴税款或土地出让金不得转让」→ 转让合同<Seal delay={150} size={17} tone={C.jade}>有效 ✓</Seal>
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.paper} strokeWidth={2.2} />} tone={C.jade} title="② 特定条件方可交易：">
              对方无审查义务或无法了解其是否符合条件 → <Seal delay={190} size={17} tone={C.jade}>有效 ✓</Seal>
            </IconChip>
            <IconChip icon={<FileWarning size={26} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="③ 「未办手续则无效」之约定：">
              原则上＝<Soft color={C.vermilion}>效力性强制规定</Soft>
            </IconChip>
            <IconChip icon={<Gavel size={26} color={C.paper} strokeWidth={2.2} />} tone={C.plum} title="③ 之例外：">
              能办而<Under color={C.plum} delay={220}>未办理</Under>，又以此主张无效 → <Seal delay={260} size={17} tone={C.plum}>不予支持</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={100} from="up" marker="presale-verdicts" style={{position: 'absolute', left: 904, top: 270, width: 832, height: 380}}>
          <Panel tone={C.plum} watermark={<Gavel size={150} color={C.plum} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.plum} icon={<Gavel size={24} color={C.honeyPale} strokeWidth={2.2} />}>案例辨析 · 商品房预售许可证</PanelTab>
            <IconChip icon={<FileWarning size={26} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="① 无证且起诉前仍未取得：">
              商品房买卖合同 → <Seal delay={150} size={18}>无效</Seal>
            </IconChip>
            <IconChip icon={<ShieldCheck size={26} color={C.paper} strokeWidth={2.2} />} tone={C.jade} title="② 能办证而未办，以此主张无效：">
              <Seal delay={200} size={18} tone={C.plum}>不予支持</Seal>
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 900, color: C.ink, backgroundColor: C.paperDim, border: `2px solid ${C.honey}`, padding: '9px 13px'}}>
              对照：毒品禁<Soft color={C.vermilion}>交易本身</Soft> → 无效 · 凉皮禁<Soft color={C.jade}>交易前提</Soft> → 有效
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
