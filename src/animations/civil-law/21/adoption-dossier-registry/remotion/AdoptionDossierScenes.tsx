import type {CSSProperties, ReactNode} from 'react';
import {
  ArrowDown,
  Baby,
  BadgeCheck,
  Ban,
  Cake,
  CircleSlash,
  ClipboardCheck,
  Coins,
  Eye,
  FileHeart,
  Gavel,
  HandHeart,
  Handshake,
  HeartHandshake,
  HeartPulse,
  Home,
  Landmark,
  ListOrdered,
  MessageSquareText,
  MoveHorizontal,
  Network,
  Scissors,
  ShieldAlert,
  Stamp,
  Undo2,
  Unlink,
  UserCheck,
  UserPlus,
  Users,
} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  tea: '#3F5D4C',
  teaDeep: '#31483C',
  teaMid: '#4D6F5C',
  manila: '#F3E5C3',
  manilaDim: '#E9D8B2',
  carbon: '#39362C',
  carbonSoft: '#6F6B59',
  cinnabar: '#B03A2A',
  cinnabarPale: '#F5DFD6',
  wheat: '#B5862E',
  wheatPale: '#F1E6C4',
  sage: '#6D8060',
  sagePale: '#E3EAD7',
  cream: '#FAF6EB',
  edge: '#D2C49E',
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
        backgroundColor: C.tea,
        color: C.cream,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `repeating-linear-gradient(38deg, transparent 0 96px, rgba(255, 255, 255, 0.045) 96px 99px), repeating-linear-gradient(-52deg, transparent 0 96px, rgba(0, 0, 0, 0.14) 96px 99px)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 12, background: `linear-gradient(90deg, ${C.cinnabar}, ${C.wheat}, ${C.sage})`, opacity: 0.92}} />
      <div style={{position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: '2px solid rgba(243, 229, 195, 0.32)'}} />
      <div style={{position: 'absolute', left: 60, top: 44, padding: '10px 16px', backgroundColor: C.teaDeep, borderLeft: `8px solid ${C.wheat}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.manila, letterSpacing: 2}}>民法 · 第21讲 · {code}</span>
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
          borderBottom: `2px solid ${C.wheat}`,
        }}
      >
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.manila}}>{title}</h1>
        <span style={{fontSize: 22, fontWeight: 850, color: C.wheatPale, textAlign: 'right'}}>{kicker}</span>
      </header>
      <div style={{position: 'absolute', right: 64, bottom: 44, display: 'flex', alignItems: 'center', gap: 10, opacity: 0.85}}>
        {[0, 1, 2].map((dot) => (
          <span
            key={dot}
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: dot === sceneIndex ? C.cinnabar : 'transparent',
              border: `2px solid ${C.cinnabar}`,
            }}
          />
        ))}
      </div>
      <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    </AbsoluteFill>
  );
};

export const Panel = ({children, marker, tone = C.wheat, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.cream, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${tone}`, color: C.carbon, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(49, 72, 60, 0.4)', ...style}}
  >
    <span style={{position: 'absolute', right: 10, top: 10, width: 26, height: 26, borderTop: `3px solid ${tone}`, borderRight: `3px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 14, bottom: 10, width: 26, height: 26, borderBottom: `3px solid ${tone}`, borderLeft: `3px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.wheat, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.teaDeep, borderLeft: `6px solid ${tone}`, color: C.manila, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.manilaDim, borderLeft: `5px solid ${tone}`, padding: '5px 12px'}}>
    <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 22, backgroundColor: tone, border: `2px solid ${C.cream}`, boxShadow: '0 0 0 2px rgba(181, 134, 46, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.carbon, lineHeight: 1.42}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Seal = ({children, delay = 0, size = 22, tone = C.cinnabar}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

export const Under = ({children, color = C.wheat, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

export const Chip = ({children, tone = C.edge, toneBg = C.manilaDim, ink = C.carbon}: {readonly children: ReactNode; readonly tone?: string; readonly toneBg?: string; readonly ink?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${tone}`, backgroundColor: toneBg, padding: '5px 12px', fontSize: 22, fontWeight: 900, color: ink, whiteSpace: 'nowrap'}}>{children}</span>
);

export const ConditionTriptychScene = () => {
  /* data-final-knowledge="adoption-essence" data-final-knowledge="adoptee-placer-conditions" data-final-knowledge="adopter-conditions" data-final-knowledge="exemption-strips" */
  return (
    <Shell code="01" kicker="收养的条件 · 主体与例外" title="收养的条件">
      <div
        data-layout="three-folder-condition-triptych-with-exemption-strip"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="adoption-is-an-identity-act-formed-through-an-adoption-agreement,the-adoptee-must-be-a-minor-and-placers-need-hardship-consent-or-an-institution,adopters-need-health-and-conduct-standards-child-count-age-30-and-gender-gap-40,kin-adoption-orphan-disability-and-step-parent-adoption-waive-condition-limits"
        data-focal-rule="adoptee-placer-and-adopter-conditions-stand-on-the-comparison-axis-unless-an-exemption-strip-waives-the-limit"
        data-focal-channels="icon,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="adoption-essence" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 116}}>
          <Panel tone={C.teaMid} watermark={<FileHeart size={110} color={C.teaMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 18px'}}>
            <PanelTab tone={C.teaMid} icon={<FileHeart size={24} color={C.manila} strokeWidth={2.2} />}>核心定义</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, paddingRight: 12}}>
              <div style={{fontSize: 25, fontWeight: 880, lineHeight: 1.5}}>
                <Chip tone={C.teaMid} toneBg={C.sagePale} ink={C.teaDeep}>收养</Chip>
                ＝ 送养人与收养人订立<Under color={C.cinnabar} delay={80}>收养协议</Under>，将被收养人交收养人收养的<Soft color={C.cinnabar}>身份行为</Soft>
              </div>
              <Chip tone={C.wheat} toneBg={C.wheatPale}>收养协议 · 双方合意</Chip>
            </div>
          </Panel>
        </Enter>
        <LineH delay={46} tone={C.wheat} thickness={5} span={26} style={{left: 8, top: 122, width: 1760, height: 5}} />
        <Enter delay={70} from="left" marker="adoptee-placer-conditions" style={{position: 'absolute', left: 0, top: 134, width: 380, height: 440}}>
          <Panel tone={C.sage} watermark={<Baby size={120} color={C.sage} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 10, padding: '12px 16px'}}>
            <PanelTab tone={C.sage} icon={<Baby size={24} color={C.cream} strokeWidth={2.2} />}>被收养人</PanelTab>
            <div style={{marginTop: 'auto', marginBottom: 'auto'}}>
              <IconChip icon={<Baby size={24} color={C.cream} strokeWidth={2.2} />} tone={C.sage} title="年龄条件：">
                <span style={{display: 'block', fontSize: 22, fontWeight: 880}}>必须为</span>
                <span style={{display: 'block', fontSize: 30, fontWeight: 950, color: C.cinnabar}}>未成年人</span>
              </IconChip>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.carbonSoft}}>年龄条件要求是必须为未成年人</div>
          </Panel>
        </Enter>
        <Enter delay={96} from="left" style={{position: 'absolute', left: 404, top: 134, width: 600, height: 440}}>
          <Panel tone={C.teaMid} watermark={<HandHeart size={120} color={C.teaMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 16px'}}>
            <PanelTab tone={C.teaMid} icon={<HandHeart size={24} color={C.cream} strokeWidth={2.2} />}>送养人 · 三类</PanelTab>
            <IconChip icon={<Users size={24} color={C.cream} strokeWidth={2.2} />} tone={C.wheat} title="生父母：">
              须有<Soft color={C.cinnabar}>特殊困难</Soft>且<Soft color={C.cinnabar}>无力抚养</Soft>
            </IconChip>
            <IconChip icon={<HeartHandshake size={24} color={C.cream} strokeWidth={2.2} />} tone={C.sage} title="配偶一方死亡：">
              死亡一方的父母有<Under color={C.sage} delay={140}>优先抚养</Under>的权利
            </IconChip>
            <IconChip icon={<ShieldAlert size={24} color={C.cream} strokeWidth={2.2} />} tone={C.cinnabar} title="生父母外的监护人：">
              孤儿的监护人须征得<Soft color={C.cinnabar}>抚养义务人</Soft>同意；父母均不具备完全民事行为能力且可能<Soft color={C.cinnabar}>严重危害</Soft>的可送养
            </IconChip>
            <IconChip icon={<Landmark size={24} color={C.cream} strokeWidth={2.2} />} tone={C.teaMid} title="儿童福利机构：">
              抚养的查找不到生父母的未成年人
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={122} from="right" marker="adopter-conditions" style={{position: 'absolute', left: 1037, top: 134, width: 739, height: 440}}>
          <Panel tone={C.wheat} watermark={<UserCheck size={120} color={C.wheat} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 16px'}}>
            <PanelTab tone={C.wheat} icon={<UserCheck size={24} color={C.cream} strokeWidth={2.2} />}>收养人 · 六项条件</PanelTab>
            <IconChip icon={<HeartPulse size={24} color={C.cream} strokeWidth={2.2} />} tone={C.sage} title="健康状况：">
              未患有<Soft color={C.cinnabar}>不应当收养</Soft>子女的疾病
            </IconChip>
            <IconChip icon={<BadgeCheck size={24} color={C.cream} strokeWidth={2.2} />} tone={C.sage} title="品行状况：">
              无不利于健康成长的<Soft color={C.cinnabar}>违法犯罪记录</Soft>
            </IconChip>
            <IconChip icon={<Users size={24} color={C.cream} strokeWidth={2.2} />} tone={C.teaMid} title="自身子女：">
              <span style={{fontSize: 30, fontWeight: 950, color: C.cinnabar}}>无子女</span>或只有<span style={{fontSize: 30, fontWeight: 950, color: C.cinnabar}}>1名</span>子女
            </IconChip>
            <IconChip icon={<ListOrdered size={24} color={C.cream} strokeWidth={2.2} />} tone={C.teaMid} title="收养数量：">
              无子女的最多<span style={{fontSize: 30, fontWeight: 950, color: C.cinnabar}}>2名</span>；有子女的只能<span style={{fontSize: 30, fontWeight: 950, color: C.cinnabar}}>1名</span>
            </IconChip>
            <IconChip icon={<Cake size={24} color={C.cream} strokeWidth={2.2} />} tone={C.wheat} title="年龄：">
              年满<span style={{fontSize: 30, fontWeight: 950, color: C.cinnabar}}>30周岁</span>
            </IconChip>
            <IconChip icon={<MoveHorizontal size={24} color={C.cream} strokeWidth={2.2} />} tone={C.cinnabar} title="性别差异：">
              无配偶者收养异性，相差<span style={{fontSize: 30, fontWeight: 950, color: C.cinnabar}}>40周岁</span>以上
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={244} from="up" marker="exemption-strips" style={{position: 'absolute', left: 0, top: 582, width: 1776, height: 186}}>
          <Panel tone={C.cinnabar} watermark={<CircleSlash size={130} color={C.cinnabar} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.cinnabar} icon={<CircleSlash size={24} color={C.cream} strokeWidth={2.2} />}>收养条件的例外 · 解除限制</PanelTab>
            <div style={{display: 'flex', gap: 14, flex: 1}}>
              <div style={{flex: 1.15, display: 'flex', flexDirection: 'column', gap: 6}}>
                <IconChip icon={<Network size={24} color={C.cream} strokeWidth={2.2} />} tone={C.teaMid} title="三代以内旁系同辈血亲（过继）：">
                  豁免<Soft color={C.cinnabar}>特殊困难</Soft>与<Soft color={C.cinnabar}>40周岁</Soft>限制
                </IconChip>
                <div style={{fontSize: 22, fontWeight: 900, color: C.carbonSoft, paddingLeft: 60}}>华侨收养的，额外豁免<Soft color={C.cinnabar}>无子女或只有1名子女</Soft>的限制</div>
              </div>
              <div style={{flex: 1.05, display: 'flex', flexDirection: 'column', gap: 6}}>
                <IconChip icon={<Baby size={24} color={C.cream} strokeWidth={2.2} />} tone={C.sage} title="孤儿、残疾未成年人、查找不到生父母的：">
                  豁免<Soft color={C.cinnabar}>子女数量</Soft>与<Soft color={C.cinnabar}>收养名额</Soft>限制
                </IconChip>
              </div>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 6}}>
                <IconChip icon={<UserPlus size={24} color={C.cream} strokeWidth={2.2} />} tone={C.wheat} title="继父母收养继子女（变继为养）：">
                  仅需经<Soft color={C.cinnabar}>生父母同意</Soft>
                </IconChip>
                <div style={{fontSize: 22, fontWeight: 900, color: C.carbonSoft, paddingLeft: 60}}>除此之外不受<Soft color={C.cinnabar}>任何条件</Soft>（数量、年龄）的限制</div>
              </div>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const FormationConsentGateScene = () => {
  /* data-final-knowledge="consent-three-decisions" data-final-knowledge="registration-gate" data-final-knowledge="formation-effects" data-final-knowledge="care-vs-adoption" */
  return (
    <Shell code="02" kicker="收养的成立 · 合意与登记" title="收养的成立">
      <div
        data-layout="consent-registration-gate-with-effect-lanes"
        data-visual-anchor="boundary"
        data-text-treatments="label-block,chip,thin-underline,stamp"
        data-visual-grammar="joint-placement-joint-adoption-and-consent-of-children-over-8-form-the-agreement,registration-with-county-or-higher-civil-affairs-creates-the-relation-on-registration-day,pre-registration-publication-and-adoption-assessment-guard-children-with-untraceable-parents,formation-confers-parent-child-effects-and-extinguishes-birth-family-rights"
        data-focal-rule="three-consent-decisions-flow-into-county-registration-which-creates-the-relation-on-registration-day-and-splits-the-effects"
        data-focal-channels="icon,connector,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="consent-three-decisions" style={{position: 'absolute', left: 0, top: 0, width: 1040, height: 262}}>
          <Panel tone={C.teaMid} watermark={<HandHeart size={120} color={C.teaMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.teaMid} icon={<HandHeart size={24} color={C.cream} strokeWidth={2.2} />}>达成收养合意 · 三类决定</PanelTab>
            <div style={{display: 'flex', gap: 10, alignItems: 'stretch', flex: 1}}>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6, width: 34}}>
                <span style={{width: 4, flex: 1, backgroundColor: C.wheat, borderRadius: 2, transformOrigin: 'center top', scaleY: prog(useCurrentFrame(), 40, 40)}} />
                <ArrowDown size={20} color={C.wheat} strokeWidth={2.6} opacity={prog(useCurrentFrame(), 76, 16)} />
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 10, flex: 1}}>
                <IconChip icon={<HandHeart size={24} color={C.cream} strokeWidth={2.2} />} tone={C.teaMid} title="① 送养的决定：">
                  生父母须<Soft color={C.cinnabar}>共同送养</Soft>；一方不明或查找不到的，可<Soft color={C.cinnabar}>单方送养</Soft>
                </IconChip>
                <IconChip icon={<Users size={24} color={C.cream} strokeWidth={2.2} />} tone={C.wheat} title="② 收养的决定：">
                  有配偶者收养子女，须夫妻<Soft color={C.cinnabar}>共同收养</Soft>
                </IconChip>
                <IconChip icon={<MessageSquareText size={24} color={C.cream} strokeWidth={2.2} />} tone={C.sage} title="③ 被收养人的意见：">
                  收养年满<span style={{fontSize: 30, fontWeight: 950, color: C.cinnabar}}>8周岁</span>以上未成年人，应当征得其<Soft color={C.cinnabar}>同意</Soft>
                </IconChip>
              </div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={40} from="right" marker="care-vs-adoption" style={{position: 'absolute', left: 1054, top: 0, width: 722, height: 262}}>
          <Panel tone={C.sage} watermark={<Home size={120} color={C.sage} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.sage} icon={<Home size={24} color={C.cream} strokeWidth={2.2} />}>概念辨析 · 抚养与收养</PanelTab>
            <IconChip icon={<Home size={24} color={C.cream} strokeWidth={2.2} />} tone={C.sage} title="抚养：">
              孤儿或生父母无力抚养的子女，可以由生父母的<Soft color={C.wheat}>亲属、朋友</Soft>抚养
            </IconChip>
            <IconChip icon={<CircleSlash size={24} color={C.cream} strokeWidth={2.2} />} tone={C.cinnabar} title="边界：">
              抚养人与被抚养人的关系<Seal delay={150} size={21}>不适用收养制度的规定</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <LineV delay={130} tone={C.wheat} thickness={5} span={22} style={{left: 508, top: 266, width: 5, height: 48}} />
        <Mover delay={150} span={26} fromY={0} toY={182} fadeAt={206} style={{position: 'absolute', left: 380, top: 196, zIndex: 3}}>
          <div data-stateful-source="adoption-consent">
            <Chip tone={C.teaMid} toneBg={C.sagePale} ink={C.teaDeep}><HandHeart size={22} color={C.teaMid} strokeWidth={2.4} />收养合意</Chip>
          </div>
        </Mover>
        <Mover delay={296} span={22} fromY={0} toY={44} fadeAt={348} style={{position: 'absolute', left: 820, top: 548, zIndex: 3}}>
          <Chip tone={C.cinnabar} toneBg={C.cinnabarPale} ink={C.cinnabar}><Stamp size={22} color={C.cinnabar} strokeWidth={2.4} />登记之日</Chip>
        </Mover>
        <Enter delay={152} from="up" marker="registration-gate" style={{position: 'absolute', left: 0, top: 324, width: 1776, height: 214}}>
          <Panel tone={C.cinnabar} watermark={<Stamp size={130} color={C.cinnabar} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.cinnabar} icon={<Stamp size={24} color={C.cream} strokeWidth={2.2} />}>办理收养登记 · 形式要件门槛</PanelTab>
            <div style={{display: 'flex', alignItems: 'stretch', gap: 18, flex: 1}}>
              <div style={{flex: 1.05, display: 'flex', flexDirection: 'column', gap: 8}}>
                <IconChip icon={<Eye size={24} color={C.cream} strokeWidth={2.2} />} tone={C.teaMid} title="特殊公告：">
                  收养<Soft color={C.cinnabar}>查找不到生父母</Soft>的未成年人 → 登记前予以<Soft color={C.cinnabar}>公告</Soft>
                </IconChip>
                <IconChip icon={<ClipboardCheck size={24} color={C.cream} strokeWidth={2.2} />} tone={C.sage} title="前置评估：">
                  县级以上政府民政部门应当依法进行<Soft color={C.cinnabar}>收养评估</Soft>
                </IconChip>
              </div>
              <div data-stateful-terminal="adoption-consent" style={{flex: 1.25, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, backgroundColor: C.manila, border: `3px solid ${C.cinnabar}`, padding: '8px 14px'}}>
                <Landmark size={44} color={C.cinnabar} strokeWidth={2} />
                <div style={{display: 'flex', flexDirection: 'column', gap: 4}}>
                  <span style={{fontSize: 23, fontWeight: 950, color: C.carbon}}>向<Under color={C.cinnabar} delay={200}>县级以上</Under>政府民政部门登记</span>
                  <span style={{fontSize: 23, fontWeight: 950, color: C.carbon}}>收养关系自<Seal delay={230} size={22}>登记之日</Seal>起成立</span>
                </div>
              </div>
              <div style={{flex: 0.9, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '10px 16px', border: `3px dashed ${C.cinnabar}`, backgroundColor: C.cinnabarPale}}>
                  <span style={{fontSize: 23, fontWeight: 950, color: C.carbon}}>未办理收养登记</span>
                  <Seal delay={280} size={24}>收养在法律上不成立</Seal>
                </div>
              </div>
            </div>
          </Panel>
        </Enter>
        <LineV delay={300} tone={C.sage} thickness={5} span={22} style={{left: 888, top: 542, width: 5, height: 38}} />
        <Enter delay={318} from="up" marker="formation-effects" style={{position: 'absolute', left: 0, top: 590, width: 1776, height: 178}}>
          <Panel tone={C.wheat} watermark={<Home size={110} color={C.wheat} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.wheat} icon={<Users size={24} color={C.cream} strokeWidth={2.2} />}>收养的效力 · 双向亲属效果</PanelTab>
            <div style={{display: 'flex', gap: 18, flex: 1}}>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 8}}>
                <IconChip icon={<Users size={24} color={C.cream} strokeWidth={2.2} />} tone={C.teaMid} title="养父母与养子女：">
                  适用《民法典》关于<Soft color={C.wheat}>父母子女</Soft>关系的规定
                </IconChip>
                <IconChip icon={<HandHeart size={24} color={C.cream} strokeWidth={2.2} />} tone={C.teaMid} title="养子女与养父母近亲属：">
                  适用关于<Soft color={C.wheat}>子女与父母的近亲属</Soft>关系的规定
                </IconChip>
              </div>
              <div style={{width: 4, backgroundColor: C.edge, borderRadius: 2}} />
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 8}}>
                <IconChip icon={<Unlink size={24} color={C.cream} strokeWidth={2.2} />} tone={C.cinnabar} title="养子女与生父母及近亲属：">
                  权利义务关系，因收养关系的成立而<Seal delay={360} size={21}>消除</Seal>
                </IconChip>
                <div style={{fontSize: 22, fontWeight: 900, color: C.carbonSoft, paddingLeft: 60}}>收养关系成立 → 与生父母的权利义务关系消除</div>
              </div>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const TerminationForkScene = () => {
  /* data-final-knowledge="agreement-termination" data-final-knowledge="termination-right" data-final-knowledge="kinship-aftermath" data-final-knowledge="property-aftermath" */
  const frame = useCurrentFrame();
  return (
    <Shell code="03" kicker="收养的解除 · 方式与后果" title="收养的解除">
      <div
        data-layout="termination-fork-with-twin-aftermath-lanes"
        data-visual-anchor="document-fork"
        data-text-treatments="label-block,stamp,external-negation,soft-highlight"
        data-visual-grammar="agreement-termination-needs-consent-of-children-over-8-and-a-court-on-failure,abuse-or-abandonment-gives-the-placer-a-unilateral-termination-right,termination-ends-adoptive-kin-rights-and-restores-or-renegotiates-birth-family-ties,property-aftermath-compensates-raising-costs-except-abuse-and-owes-living-expenses"
        data-focal-rule="two-termination-sources-converge-at-the-termination-seal-then-fork-into-kinship-and-property-aftermath-lanes"
        data-focal-channels="contrast,connector,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="agreement-termination" style={{position: 'absolute', left: 0, top: 0, width: 520, height: 300}}>
          <Panel tone={C.teaMid} watermark={<Handshake size={120} color={C.teaMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 16px'}}>
            <PanelTab tone={C.teaMid} icon={<Handshake size={24} color={C.cream} strokeWidth={2.2} />}>协商解除</PanelTab>
            <IconChip icon={<Handshake size={24} color={C.cream} strokeWidth={2.2} />} tone={C.teaMid} title="一般协议：">
              收养人、送养人<Soft color={C.cinnabar}>协议解除</Soft>；养子女年满<span style={{fontSize: 30, fontWeight: 950, color: C.cinnabar}}>8周岁</span>以上，应征得<Soft color={C.cinnabar}>本人</Soft>同意
            </IconChip>
            <IconChip icon={<Gavel size={24} color={C.cream} strokeWidth={2.2} />} tone={C.wheat} title="恶化解除：">
              养父母与<Soft color={C.cinnabar}>成年</Soft>养子女关系恶化、无法共同生活 → 协议解除；不能达成协议 → 向<Under color={C.wheat} delay={130}>法院起诉</Under>
            </IconChip>
            <IconChip icon={<Stamp size={24} color={C.cream} strokeWidth={2.2} />} tone={C.cinnabar} title="解除登记：">
              到<Soft color={C.cinnabar}>民政部门</Soft>办理解除收养关系登记
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={36} from="left" marker="termination-right" style={{position: 'absolute', left: 0, top: 314, width: 520, height: 288}}>
          <Panel tone={C.cinnabar} watermark={<ShieldAlert size={110} color={C.cinnabar} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 16px'}}>
            <PanelTab tone={C.cinnabar} icon={<ShieldAlert size={24} color={C.cream} strokeWidth={2.2} />}>解除权解除</PanelTab>
            <IconChip icon={<ShieldAlert size={24} color={C.cream} strokeWidth={2.2} />} tone={C.cinnabar} title="法定事由：">
              收养人<Soft color={C.cinnabar}>不履行抚养义务</Soft>，有<Soft color={C.cinnabar}>虐待、遗弃</Soft>等侵害未成年养子女合法权益行为
            </IconChip>
            <IconChip icon={<Gavel size={24} color={C.cream} strokeWidth={2.2} />} tone={C.wheat} title="后果：">
              <Seal delay={150} size={21}>送养人有权单方要求解除</Seal>；不能达成协议的可起诉
            </IconChip>
          </Panel>
        </Enter>
        <LineH delay={88} tone={C.teaMid} thickness={5} span={14} head={false} style={{left: 524, top: 150, width: 32, height: 5}} />
        <LineV delay={100} tone={C.teaMid} thickness={5} span={24} head={false} origin="top" style={{left: 554, top: 150, width: 5, height: 182}} />
        <LineH delay={104} tone={C.cinnabar} thickness={5} span={14} head={false} style={{left: 524, top: 420, width: 32, height: 5}} />
        <LineV delay={116} tone={C.cinnabar} thickness={5} span={16} head={false} origin="top" style={{left: 554, top: 334, width: 5, height: 86}} />
        <LineH delay={130} tone={C.cinnabar} thickness={5} span={12} style={{left: 556, top: 330, width: 24, height: 5}} />
        <Enter delay={112} from="none" style={{position: 'absolute', left: 588, top: 258, width: 148, height: 148}}>
          <div style={{width: '100%', height: '100%', borderRadius: 74, border: `6px double ${C.cinnabar}`, backgroundColor: C.cinnabarPale, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4, opacity: prog(frame, 112, 16), scale: 0.8 + prog(frame, 112, 16) * 0.2}}>
            <Scissors size={46} color={C.cinnabar} strokeWidth={2.2} />
            <span style={{fontSize: 20, fontWeight: 950, color: C.cinnabar, whiteSpace: 'nowrap'}}>解除收养关系</span>
          </div>
        </Enter>
        <LineH delay={150} tone={C.cinnabar} thickness={5} span={14} head={false} style={{left: 740, top: 330, width: 46, height: 5}} />
        <LineV delay={162} tone={C.cinnabar} thickness={5} span={20} head={false} origin="bottom" style={{left: 784, top: 148, width: 5, height: 186}} />
        <LineV delay={172} tone={C.cinnabar} thickness={5} span={22} head={false} origin="top" style={{left: 784, top: 335, width: 5, height: 200}} />
        <LineH delay={186} tone={C.cinnabar} thickness={5} span={14} style={{left: 786, top: 148, width: 38, height: 5}} />
        <LineH delay={196} tone={C.cinnabar} thickness={5} span={14} style={{left: 786, top: 535, width: 38, height: 5}} />
        <Enter delay={204} from="right" marker="kinship-aftermath" style={{position: 'absolute', left: 826, top: 0, width: 950, height: 330}}>
          <Panel tone={C.sage} watermark={<Unlink size={120} color={C.sage} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.sage} icon={<Unlink size={24} color={C.cream} strokeWidth={2.2} />}>亲属法律关系后果</PanelTab>
            <IconChip icon={<Unlink size={24} color={C.cream} strokeWidth={2.2} />} tone={C.cinnabar} title="与养父母家庭：">
              解除后，养子女与养父母及其他近亲属间的权利义务关系<Seal delay={260} size={21}>即行消除</Seal>
            </IconChip>
            <IconChip icon={<Undo2 size={24} color={C.cream} strokeWidth={2.2} />} tone={C.sage} title="未成年养子女：">
              与生父母及其他近亲属的权利义务关系<Soft color={C.sage}>自行恢复</Soft>
            </IconChip>
            <IconChip icon={<Users size={24} color={C.cream} strokeWidth={2.2} />} tone={C.wheat} title="成年养子女：">
              是否恢复，可以<Soft color={C.wheat}>协商确定</Soft>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={236} from="right" marker="property-aftermath" style={{position: 'absolute', left: 826, top: 346, width: 950, height: 288}}>
          <Panel tone={C.wheat} watermark={<Coins size={120} color={C.wheat} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '12px 18px'}}>
            <PanelTab tone={C.wheat} icon={<Coins size={24} color={C.cream} strokeWidth={2.2} />}>财产法律关系后果</PanelTab>
            <IconChip icon={<Coins size={24} color={C.cream} strokeWidth={2.2} />} tone={C.wheat} title="未成年·生父母要求解除：">
              养父母可要求生父母<Soft color={C.wheat}>适当补偿</Soft>收养期间支出的抚养费
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.cream} strokeWidth={2.2} />} tone={C.cinnabar} title="除外与不得请求：">
              养父母<Soft color={C.cinnabar}>虐待、遗弃</Soft>养子女而解除的除外；<Ban size={22} color={C.cinnabar} strokeWidth={2.6} /> 不得请求偿付收养期间所承担的<Soft color={C.cinnabar}>监护人责任</Soft>
            </IconChip>
            <IconChip icon={<Coins size={24} color={C.cream} strokeWidth={2.2} />} tone={C.teaMid} title="成年养子女：">
              对<Soft color={C.cinnabar}>缺乏劳动能力</Soft>又<Soft color={C.cinnabar}>缺乏生活来源</Soft>的养父母给付<Soft color={C.wheat}>生活费</Soft>；因虐待遗弃养父母而解除的，养父母可要求<Soft color={C.wheat}>补偿</Soft>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={320} from="up" style={{position: 'absolute', left: 0, top: 648, width: 1776, height: 120}}>
          <Panel tone={C.cinnabar} watermark={<ShieldAlert size={110} color={C.cinnabar} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 18px'}}>
            <PanelTab tone={C.cinnabar} icon={<Gavel size={24} color={C.cream} strokeWidth={2.2} />}>总结 · 抚养费请求权的成立要件（满足其一）</PanelTab>
            <div style={{display: 'flex', gap: 16, flex: 1, alignItems: 'center'}}>
              <div style={{flex: 1, display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.manilaDim, borderLeft: `6px solid ${C.wheat}`, padding: '6px 14px', fontSize: 23, fontWeight: 900}}>
                <span style={{fontSize: 30, fontWeight: 950, color: C.cinnabar}}>A</span>
                养子女<Soft color={C.cinnabar}>成年</Soft>后对养父母有<Soft color={C.cinnabar}>虐待、遗弃</Soft>行为
              </div>
              <div style={{flex: 1.2, display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.manilaDim, borderLeft: `6px solid ${C.sage}`, padding: '6px 14px', fontSize: 23, fontWeight: 900}}>
                <span style={{fontSize: 30, fontWeight: 950, color: C.cinnabar}}>B</span>
                由<Soft color={C.sage}>生父母</Soft>要求解除收养关系；但养父母因<Ban size={22} color={C.cinnabar} strokeWidth={2.6} /><Soft color={C.cinnabar}>虐待、遗弃</Soft>养子女而解除的除外
              </div>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

