import type {CSSProperties, ReactNode} from 'react';
import {
  Baby,
  Ban,
  Coins,
  Gavel,
  Home,
  Hourglass,
  Landmark,
  Layers,
  Link,
  Scale,
  Search,
  Split,
  Undo2,
  UserRound,
  Users,
} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  sand: '#8A7355',
  sandDeep: '#6E5A41',
  sandMid: '#9C866A',
  cream: '#F7F3E8',
  creamDim: '#EDE6D4',
  coffee: '#3B3126',
  coffeeSoft: '#7A6D5C',
  warn: '#B5432F',
  warnPale: '#F3DDD5',
  signal: '#C99229',
  signalPale: '#F4E8CB',
  pine: '#5E7F5A',
  pinePale: '#E1EAD9',
  indigo: '#3D5A80',
  indigoPale: '#DFE7F1',
  edge: '#D8CBB2',
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
  const sceneIndex = Math.max(0, Math.min(4, Number(code) - 1));
  return (
    <AbsoluteFill
      data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
      style={{
        backgroundColor: C.sand,
        color: C.cream,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `repeating-linear-gradient(90deg, transparent 0 148px, rgba(255, 255, 255, 0.05) 148px 151px), radial-gradient(circle at 15% 80%, rgba(255, 255, 255, 0.08) 0%, transparent 40%)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 12, background: `repeating-linear-gradient(45deg, ${C.signal} 0 26px, ${C.coffee} 26px 52px)`, opacity: 0.9}} />
      <div style={{position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: '2px solid rgba(247, 243, 232, 0.32)'}} />
      <div style={{position: 'absolute', left: 60, top: 44, padding: '10px 16px', backgroundColor: C.sandDeep, borderLeft: `8px solid ${C.signal}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.cream, letterSpacing: 2}}>民法 · 第19讲 · {code}</span>
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
          borderBottom: `2px solid ${C.signal}`,
        }}
      >
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.cream}}>{title}</h1>
        <span style={{fontSize: 22, fontWeight: 850, color: C.signalPale, textAlign: 'right'}}>{kicker}</span>
      </header>
      <div style={{position: 'absolute', right: 64, bottom: 44, display: 'flex', alignItems: 'center', gap: 9, opacity: 0.9}}>
        {[0, 1, 2, 3, 4].map((dot) => (
          <span
            key={dot}
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: dot === sceneIndex ? C.warn : 'transparent',
              border: `2px solid ${C.signal}`,
            }}
          />
        ))}
      </div>
      <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    </AbsoluteFill>
  );
};

export const Panel = ({children, marker, tone = C.signal, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.cream, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${tone}`, color: C.coffee, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(110, 90, 65, 0.4)', ...style}}
  >
    <span style={{position: 'absolute', right: 10, top: 10, width: 26, height: 26, borderTop: `3px solid ${tone}`, borderRight: `3px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 14, bottom: 10, width: 26, height: 26, borderBottom: `3px solid ${tone}`, borderLeft: `3px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.signal, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.sandDeep, borderLeft: `6px solid ${tone}`, color: C.cream, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children, style}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.creamDim, borderLeft: `5px solid ${tone}`, padding: '5px 12px', ...style}}>
    <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 22, backgroundColor: tone, border: `2px solid ${C.cream}`, boxShadow: '0 0 0 2px rgba(201, 146, 41, 0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.coffee, lineHeight: 1.42}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Seal = ({children, delay = 0, size = 22, tone = C.warn}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

export const Under = ({children, color = C.signal, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

export const Chip = ({children, tone = C.edge, toneBg = C.creamDim, ink = C.coffee}: {readonly children: ReactNode; readonly tone?: string; readonly toneBg?: string; readonly ink?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${tone}`, backgroundColor: toneBg, padding: '5px 12px', fontSize: 22, fontWeight: 900, color: ink, whiteSpace: 'nowrap'}}>{children}</span>
);


export const EmploymentLiabilityScene = () => {
  /* data-final-knowledge="employer-substitute" data-final-knowledge="dispatch-liability" data-final-knowledge="helper-damage-rules" data-final-knowledge="contractor-ordering-rule" */
  return (
    <Shell code="01" kicker="用工责任 · 用工责任谱系" title="用工责任谱系：雇主·派遣·帮工·定作">
      <div
        data-layout="employment-lane-with-recourse-splits"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="employers-substitute-for-employees-and-recourse-only-for-intent-or-gross-negligence,dispatched-workers-harm-the-user-bears-all-while-a-faulty-dispatcher-joins-within-its-fault,helpers-harm-others-through-the-aided-host-unless-help-was-refused-and-recourse-follows-fault,independent-contractors-bear-the-harm-while-a-faulty-ordering-party-joins-within-its-fault"
        data-focal-rule="substitution-covers-employees-and-helpers-contractors-stand-alone-and-faulty-dispatchers-or-ordering-parties-join-only-within-their-fault"
        data-focal-channels="connector,contrast,icon,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="employer-substitute" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 218}}>
          <Panel tone={C.indigo} watermark={<UserRound size={110} color={C.indigo} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '12px 18px'}}>
            <PanelTab tone={C.indigo} icon={<UserRound size={24} color={C.cream} strokeWidth={2.2} />}>雇主责任 · 替代责任</PanelTab>
            <IconChip icon={<UserRound size={24} color={C.cream} strokeWidth={2.2} />} tone={C.indigo} title="对外：" style={{flex: 0.9}}>
              雇员执行职务致人损害 → 由<Soft color={C.indigo}>雇主承担替代责任</Soft>，雇员对受害人不承担责任
            </IconChip>
            <IconChip icon={<Undo2 size={24} color={C.cream} strokeWidth={2.2} />} tone={C.warn} title="对内追偿：" style={{flex: 0.9}}>
              雇员有<Soft color={C.warn}>故意或重大过失</Soft>的，雇主赔偿后有权<Under color={C.warn} delay={150}>追偿</Under>
            </IconChip>
            <div style={{fontSize: 22, fontWeight: 900, color: C.coffeeSoft}}>职务行为看<Soft color={C.indigo}>外观</Soft>——是否具有职务目的</div>
          </Panel>
        </Enter>
        <Enter delay={40} from="right" marker="dispatch-liability" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 218}}>
          <Panel tone={C.pine} watermark={<Users size={110} color={C.pine} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '12px 18px'}}>
            <PanelTab tone={C.pine} icon={<Users size={24} color={C.cream} strokeWidth={2.2} />}>劳务派遣 · 全责＋过错部分连带</PanelTab>
            <IconChip icon={<Users size={24} color={C.cream} strokeWidth={2.2} />} tone={C.pine} title="接受派遣方：" style={{flex: 0.9}}>
              承担<Soft color={C.pine}>全部侵权责任</Soft>
            </IconChip>
            <IconChip icon={<Link size={24} color={C.cream} strokeWidth={2.2} />} tone={C.warn} title="派遣方有过错：" style={{flex: 1.1}}>
              在<Soft color={C.warn}>过错范围</Soft>内承担<Soft color={C.warn}>连带责任</Soft>；先行赔付后，超额部分向接受派遣方<Under color={C.pine} delay={190}>追偿</Under>（张三致损1000元，未培训的甲公司赔400元）
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={90} from="left" marker="helper-damage-rules" style={{position: 'absolute', left: 0, top: 232, width: 866, height: 330}}>
          <Panel tone={C.signal} watermark={<Coins size={100} color={C.signal} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.signal} icon={<Users size={24} color={C.cream} strokeWidth={2.2} />}>无偿帮工</PanelTab>
            <IconChip icon={<Gavel size={24} color={C.cream} strokeWidth={2.2} />} tone={C.warn} title="帮工致人损害：" style={{flex: 1}}>
              由<Soft color={C.signal}>被帮工人</Soft>承担赔偿责任；帮工人<Soft color={C.warn}>故意或重大过失</Soft> → 赔偿后可<Under color={C.warn} delay={160}>追偿</Under>；被帮工人<Soft color={C.pine}>明确拒绝</Soft>帮工 → <Soft color={C.pine}>不承担</Soft>
            </IconChip>
            <IconChip icon={<UserRound size={24} color={C.cream} strokeWidth={2.2} />} tone={C.indigo} title="帮工人自身受损：" style={{flex: 1.1}}>
              被帮工人与帮工人按各自过错承担<Soft color={C.indigo}>按份责任</Soft>；明确拒绝 → 不担责，但可在<Soft color={C.signal}>受益范围</Soft>内适当<Soft color={C.signal}>补偿</Soft>
            </IconChip>
            <IconChip icon={<Split size={24} color={C.cream} strokeWidth={2.2} />} tone={C.warn} title="第三人致帮工人受损：" style={{flex: 0.9}}>
              <Soft color={C.coffee}>不真正连带</Soft>——可请求第三人赔偿，也可请求被帮工人适当补偿
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={140} from="right" marker="contractor-ordering-rule" style={{position: 'absolute', left: 910, top: 232, width: 866, height: 330}}>
          <Panel tone={C.warn} watermark={<Gavel size={110} color={C.warn} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.warn} icon={<Gavel size={24} color={C.cream} strokeWidth={2.2} />}>定作人责任 · 承揽与雇佣之辨</PanelTab>
            <IconChip icon={<Gavel size={24} color={C.cream} strokeWidth={2.2} />} tone={C.warn} title="承揽致损：" style={{flex: 0.9}}>
              原则由<Soft color={C.warn}>承揽人</Soft>承担全部责任；定作人有<Soft color={C.warn}>指示、选任过错</Soft> → 过错范围内<Soft color={C.warn}>连带</Soft>，超额可<Under color={C.pine} delay={200}>追偿</Under>
            </IconChip>
            <IconChip icon={<Split size={24} color={C.cream} strokeWidth={2.2} />} tone={C.indigo} title="区分要点：" style={{flex: 1.4}}>
              承揽：不能随意改变工作、<Soft color={C.indigo}>自备工具</Soft>、一次性履行；雇佣：可安排、<Soft color={C.indigo}>雇主提供工具</Soft>、连续性履行
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={200} from="up" style={{position: 'absolute', left: 0, top: 576, width: 1776, height: 192}}>
          <Panel tone={C.indigo} watermark={<Landmark size={110} color={C.indigo} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.indigo} icon={<Landmark size={24} color={C.cream} strokeWidth={2.2} />}>雇员工伤 · 两条通道</PanelTab>
            <div style={{display: 'flex', gap: 14, flex: 1, alignItems: 'center'}}>
              <IconChip icon={<Landmark size={24} color={C.cream} strokeWidth={2.2} />} tone={C.pine} title="应参加工伤保险统筹的单位：" style={{flex: 1.2}}>
                劳动者因工伤事故遭受人身损害 → 按<Soft color={C.pine}>工伤保险</Soft>途径处理
              </IconChip>
              <IconChip icon={<UserRound size={24} color={C.cream} strokeWidth={2.2} />} tone={C.warn} title="个人之间劳务关系：" style={{flex: 1.2}}>
                提供劳务一方因劳务受损 → 根据双方<Soft color={C.warn}>各自过错</Soft>承担<Soft color={C.warn}>相应责任</Soft>
              </IconChip>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};


export const PollutionPresumptionScene = () => {
  /* data-final-knowledge="no-fault-causation-shift" data-final-knowledge="multi-polluter-cases" data-final-knowledge="third-party-ultimate-liability" data-final-knowledge="ecological-repair-claims" */
  return (
    <Shell code="02" kicker="环境污染 · 因果推定" title="环境污染责任">
      <div
        data-layout="pollution-causeway-with-burden-gates"
        data-visual-anchor="boundary"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="pollution-liability-is-no-fault-and-only-broken-causation-excuses,victims-prove-act-and-harm-while-polluters-must-disprove-causation,multiple-polluters-split-into-direct-indirect-partial-interactive-and-sequential-cases,third-party-causation-keeps-the-polluter-liable-with-final-recourse-against-the-third-party"
        data-focal-rule="no-fault-liability-shifts-causation-onto-the-polluter-and-multiple-polluters-fork-into-five-combination-outcomes-with-third-party-recourse-at-the-end"
        data-focal-channels="contrast,icon,connector,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="no-fault-causation-shift" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 176}}>
          <Panel tone={C.pine} watermark={<Scale size={110} color={C.pine} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.pine} icon={<Scale size={24} color={C.cream} strokeWidth={2.2} />}>归责与举证 · 无过错＋因果关系推定</PanelTab>
            <div style={{display: 'flex', gap: 14, flex: 1, alignItems: 'center'}}>
              <IconChip icon={<Scale size={24} color={C.cream} strokeWidth={2.2} />} tone={C.pine} title="归责原则：" style={{flex: 0.9}}>
                <Soft color={C.pine}>无过错责任</Soft>；唯一法定免责＝证明污染与损害之间<Soft color={C.pine}>不存在因果关系</Soft>
              </IconChip>
              <IconChip icon={<Users size={24} color={C.cream} strokeWidth={2.2} />} tone={C.indigo} title="受害人举证：" style={{flex: 1.1}}>
                只需证明<Soft color={C.indigo}>污染行为</Soft>和<Soft color={C.indigo}>损害后果</Soft>——<Ban size={20} color={C.pine} strokeWidth={2.6} /> 无需证明因果关系与过错
              </IconChip>
              <IconChip icon={<Search size={24} color={C.cream} strokeWidth={2.2} />} tone={C.warn} title="致害人举证：" style={{flex: 1.1}}>
                须举反证证明<Soft color={C.warn}>不存在因果关系</Soft>，否则法律予以<Under color={C.warn} delay={200}>推定</Under>
              </IconChip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={50} from="up" marker="multi-polluter-cases" style={{position: 'absolute', left: 0, top: 190, width: 1776, height: 320}}>
          <Panel tone={C.signal} watermark={<Split size={120} color={C.signal} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.signal} icon={<Split size={24} color={C.cream} strokeWidth={2.2} />}>两个以上污染者 · 五情形</PanelTab>
            <div style={{display: 'flex', flexDirection: 'column', gap: 5, flex: 1}}>
              <IconChip icon={<Link size={22} color={C.cream} strokeWidth={2.2} />} tone={C.warn} title="① 直接结合（每个行为都足以造成全部损害）：">
                <Soft color={C.warn}>连带责任</Soft>
              </IconChip>
              <IconChip icon={<Link size={22} color={C.cream} strokeWidth={2.2} />} tone={C.pine} title="② 间接结合（每个行为都不足以全部）：">
                <Soft color={C.pine}>按份责任</Soft>
              </IconChip>
              <IconChip icon={<Layers size={22} color={C.cream} strokeWidth={2.2} />} tone={C.signal} title="③ 部分连带（部分行为足以全损）：">
                该部分承担<Soft color={C.warn}>全部责任</Soft>；其他人就致损部分<Soft color={C.warn}>连带</Soft>
              </IconChip>
              <IconChip icon={<Split size={22} color={C.cream} strokeWidth={2.2} />} tone={C.indigo} title="④ 相互作用（物质反应生成新污染物）：">
                各侵权人<Soft color={C.warn}>连带</Soft>
              </IconChip>
              <IconChip icon={<Hourglass size={22} color={C.cream} strokeWidth={2.2} />} tone={C.pine} title="⑤ 先后污染：">
                证明他人已<Soft color={C.pine}>先行致损</Soft>的，在相应范围内<Soft color={C.pine}>不承担或减轻</Soft>
              </IconChip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={110} from="left" marker="third-party-ultimate-liability" style={{position: 'absolute', left: 0, top: 524, width: 1080, height: 244}}>
          <Panel tone={C.warn} watermark={<Undo2 size={110} color={C.warn} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '12px 18px'}}>
            <PanelTab tone={C.warn} icon={<Undo2 size={24} color={C.cream} strokeWidth={2.2} />}>第三人原因 · 不真正连带</PanelTab>
            <IconChip icon={<Users size={24} color={C.cream} strokeWidth={2.2} />} tone={C.indigo} title="外部：" style={{flex: 1}}>
              受害人可向<Soft color={C.indigo}>污染者</Soft>索赔，也可向<Soft color={C.indigo}>第三人</Soft>索赔
            </IconChip>
            <IconChip icon={<Undo2 size={24} color={C.cream} strokeWidth={2.2} />} tone={C.warn} title="内部：" style={{flex: 1}}>
              污染者赔偿后有权向第三人<Under color={C.warn} delay={200}>追偿</Under>——<Seal delay={240} size={20}>终局责任在第三人</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={150} from="right" marker="ecological-repair-claims" style={{position: 'absolute', left: 1094, top: 524, width: 682, height: 244}}>
          <Panel tone={C.pine} watermark={<Coins size={110} color={C.pine} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '12px 18px'}}>
            <PanelTab tone={C.pine} icon={<Coins size={24} color={C.cream} strokeWidth={2.2} />}>生态环境损害 · 公益索赔</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>能修复而期限内<Soft color={C.pine}>未修复</Soft>的，国家规定的机关或法律规定的组织可自行或委托他人修复，费用由<Soft color={C.warn}>侵权人负担</Soft></div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.coffeeSoft}}>机关和组织有权请求侵权人<Under color={C.pine} delay={220}>赔偿相关损失和费用</Under></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};


export const FallingObjectScene = () => {
  /* data-final-knowledge="thrown-object-nested-shares" data-final-knowledge="dangerous-drop-chain" data-final-knowledge="detachment-presumption" data-final-knowledge="collapse-and-obstruction-ladder" */
  return (
    <Shell code="03" kicker="物件致损 · 掉落与倒塌" title="物品掉落与物件致损">
      <div
        data-layout="hazard-ladder-with-presumption-rungs"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="unknowable-thrown-objects-spread-proportional-compensation-over-possible-owners-with-recourse,dangerous-acts-that-drop-objects-untraceably-chain-everyone-who-cannot-exclude-himself,detached-fittings-bind-owners-managers-and-users-under-presumed-fault-with-supplementary-property-service,collapse-binds-builder-and-contractor-while-stacks-trees-pits-and-road-spills-run-presumed-fault-ladders"
        data-focal-rule="uncertainty-decides-the-ladder-nested-shares-for-thrown-objects-chains-for-dangerous-acts-and-presumed-fault-for-detached-and-collapsed-things"
        data-focal-channels="contrast,icon,connector,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="thrown-object-nested-shares" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 252}}>
          <Panel tone={C.warn} watermark={<Home size={110} color={C.warn} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.warn} icon={<Home size={24} color={C.cream} strokeWidth={2.2} />}>高空坠物 · 具体侵权人不明</PanelTab>
            <IconChip icon={<Users size={24} color={C.cream} strokeWidth={2.2} />} tone={C.warn} title="按份嵌套：" style={{flex: 1.2}}>
              有过错的<Soft color={C.warn}>建筑物管理人</Soft>与<Soft color={C.warn}>可能加害的业主</Soft>承担<Soft color={C.warn}>按份责任</Soft>；可能加害业主内部<Soft color={C.signal}>按份补偿</Soft>
            </IconChip>
            <IconChip icon={<Undo2 size={24} color={C.cream} strokeWidth={2.2} />} tone={C.pine} title="追偿：" style={{flex: 0.8}}>
              赔付后查明具体加害人的，有权向<Soft color={C.pine}>责任人追偿</Soft>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={40} from="right" marker="dangerous-drop-chain" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 252}}>
          <Panel tone={C.sandDeep} watermark={<Link size={110} color={C.sandDeep} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.sandDeep} icon={<Link size={24} color={C.cream} strokeWidth={2.2} />}>共同危险掉落 · 因果不明</PanelTab>
            <IconChip icon={<Link size={24} color={C.cream} strokeWidth={2.2} />} tone={C.warn} title="规则：" style={{flex: 1}}>
              2人以上实施危险行为，部分行为致物品掉落，行为人无法确定 → 不能证明<Soft color={C.warn}>无因果关系</Soft>的，承担<Seal delay={180} size={20}>连带赔偿责任</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={80} from="left" marker="detachment-presumption" style={{position: 'absolute', left: 0, top: 266, width: 866, height: 252}}>
          <Panel tone={C.indigo} watermark={<Search size={110} color={C.indigo} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.indigo} icon={<Search size={24} color={C.cream} strokeWidth={2.2} />}>脱落、坠落 · 无不确定性</PanelTab>
            <IconChip icon={<Search size={24} color={C.cream} strokeWidth={2.2} />} tone={C.indigo} title="所有人/管理人/使用人：" style={{flex: 1}}>
              承担<Soft color={C.indigo}>过错推定</Soft>责任
            </IconChip>
            <IconChip icon={<Layers size={24} color={C.cream} strokeWidth={2.2} />} tone={C.signal} title="物业服务企业：" style={{flex: 1}}>
              未采取安全措施的 → <Soft color={C.signal}>补充责任</Soft>；承担责任后可向其他责任人<Under color={C.pine} delay={180}>追偿</Under>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={120} from="right" marker="collapse-and-obstruction-ladder" style={{position: 'absolute', left: 910, top: 266, width: 866, height: 252}}>
          <Panel tone={C.pine} watermark={<Ban size={110} color={C.pine} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 5, padding: '12px 18px'}}>
            <PanelTab tone={C.pine} icon={<Ban size={24} color={C.cream} strokeWidth={2.2} />}>倒塌与其他物件 · 一览</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>倒塌：责任人不明 → <Soft color={C.pine}>建设单位与施工单位连带</Soft>（证明无质量缺陷除外），赔后可<Under color={C.pine} delay={200}>追偿</Under></div>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>堆放物→<Soft color={C.indigo}>堆放人</Soft>；林木折断→<Soft color={C.indigo}>所有人管理人</Soft>；公共施工→<Soft color={C.indigo}>施工人</Soft>（免责＝<Soft color={C.pine}>明显标志＋安全措施</Soft>）；地下设施→<Soft color={C.indigo}>管理人</Soft>（免责＝尽到<Soft color={C.pine}>管理职责</Soft>）——均为<Soft color={C.indigo}>过错推定</Soft></div>
          </Panel>
        </Enter>
        <Enter delay={170} from="up" style={{position: 'absolute', left: 0, top: 532, width: 1776, height: 236}}>
          <Panel tone={C.signal} watermark={<Coins size={110} color={C.signal} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '12px 18px'}}>
            <PanelTab tone={C.signal} icon={<Coins size={24} color={C.cream} strokeWidth={2.2} />}>公共道路妨碍通行 · 双层责任</PanelTab>
              <IconChip icon={<Ban size={24} color={C.cream} strokeWidth={2.2} />} tone={C.warn} title="堆放、倾倒、遗撒的行为人：" style={{flex: 0.8}}>
                承担<Soft color={C.warn}>侵权责任</Soft>
              </IconChip>
              <IconChip icon={<Search size={24} color={C.cream} strokeWidth={2.2} />} tone={C.indigo} title="公共道路管理人：" style={{flex: 1.1}}>
                <Soft color={C.indigo}>过错推定</Soft>——不能证明尽到<Soft color={C.indigo}>清理、防护、警示</Soft>义务的，承担<Soft color={C.signal}>相应的责任</Soft>
              </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};


export const AnimalGuardianScene = () => {
  /* data-final-knowledge="animal-victim-ladder" data-final-knowledge="guardian-liability" data-final-knowledge="entrusted-custodian-split" data-final-knowledge="education-institution-ladder" */
  return (
    <Shell code="04" kicker="饲养动物 · 监护与教育机构" title="动物损害与监护人责任">
      <div
        data-layout="animal-ladder-with-custody-lanes"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="animal-harm-is-no-fault-with-a-victim-ladder-from-exoneration-to-absolute-liability,guardians-answer-for-wards-with-reduction-for-care-and-payment-first-from-the-wards-property,entrusted-custodians-join-within-their-fault-and-recourse-runs-differently-for-paid-and-free-care,schools-presume-fault-for-the-incapable-require-proof-for-the-capable-and-supplement-against-third-parties"
        data-focal-rule="both-animals-and-wards-run-no-fault-ladders-and-the-escape-hatches-shrink-from-reduction-to-none-as-danger-and-fault-grow"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="animal-victim-ladder" style={{position: 'absolute', left: 0, top: 0, width: 1080, height: 266}}>
          <Panel tone={C.signal} watermark={<Scale size={110} color={C.signal} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 5, padding: '12px 18px'}}>
            <PanelTab tone={C.signal} icon={<Scale size={24} color={C.cream} strokeWidth={2.2} />}>饲养动物 · 无过错＋免责阶梯</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>第一责任人＝<Soft color={C.signal}>饲养人、管理人</Soft>（遗弃、逃逸动物的原饲养人<Soft color={C.warn}>也需承担</Soft>）</div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 4, flex: 1}}>
              <span style={{fontSize: 22, fontWeight: 880}}>受害人<Soft color={C.pine}>故意</Soft> → 免责；违规未采取安全措施 → <Soft color={C.signal}>减轻</Soft></span>
              <span style={{fontSize: 22, fontWeight: 880}}>受害人<Soft color={C.signal}>重大过失</Soft> → 减轻；违规未拴绳 → <Soft color={C.warn}>不得减免（全责）</Soft></span>
              <span style={{fontSize: 22, fontWeight: 880}}><Soft color={C.warn}>禁止饲养的烈性犬</Soft> → <Seal delay={220} size={20}>没有免责事由的绝对全责</Seal></span>
              <span style={{fontSize: 22, fontWeight: 880}}>动物园 → 能证明<Soft color={C.pine}>尽到管理职责</Soft>的不承担（过错推定）</span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={40} from="right" style={{position: 'absolute', left: 1094, top: 0, width: 682, height: 266}}>
          <Panel tone={C.warn} watermark={<Split size={110} color={C.warn} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.warn} icon={<Split size={24} color={C.cream} strokeWidth={2.2} />}>第三人过错致动物伤人</PanelTab>
            <IconChip icon={<Users size={24} color={C.cream} strokeWidth={2.2} />} tone={C.indigo} title="不真正连带：" style={{flex: 1.1}}>
              可向<Soft color={C.indigo}>饲养人、管理人</Soft>请求赔偿，也可向<Soft color={C.indigo}>第三人</Soft>请求赔偿
            </IconChip>
            <IconChip icon={<Undo2 size={24} color={C.cream} strokeWidth={2.2} />} tone={C.pine} title="追偿：" style={{flex: 0.9}}>
              饲养人、管理人赔偿后，有权向<Soft color={C.pine}>第三人追偿</Soft>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={90} from="left" marker="guardian-liability" style={{position: 'absolute', left: 0, top: 280, width: 1080, height: 252}}>
          <Panel tone={C.indigo} watermark={<Baby size={110} color={C.indigo} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 5, padding: '12px 18px'}}>
            <PanelTab tone={C.indigo} icon={<Baby size={24} color={C.cream} strokeWidth={2.2} />}>监护人责任 · 无过错＋可减轻</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>行为时为<Soft color={C.indigo}>被监护人</Soft>即够；赔付时是否成年<Soft color={C.indigo}>在所不问</Soft>；监护人<Soft color={C.indigo}>尽到监护职责</Soft>可<Under color={C.indigo} delay={160}>适当减轻</Under>；被监护人有财产 → <Soft color={C.signal}>先从其财产支付</Soft>（本人并非责任人）</div>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>诉讼：被监护人列为<Soft color={C.warn}>共同被告</Soft>；<Ban size={20} color={C.warn} strokeWidth={2.6} /> 不得判监护人<Soft color={C.warn}>补充责任</Soft>或被监护人先担责</div>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>父母双方<Soft color={C.warn}>连带</Soft>，超额可相互<Under color={C.pine} delay={220}>追偿</Under>；未形成抚养教育关系的<Soft color={C.pine}>继父母不承担</Soft></div>
          </Panel>
        </Enter>
        <Enter delay={130} from="right" marker="entrusted-custodian-split" style={{position: 'absolute', left: 1094, top: 280, width: 682, height: 252}}>
          <Panel tone={C.pine} watermark={<Users size={110} color={C.pine} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 5, padding: '12px 18px'}}>
            <PanelTab tone={C.pine} icon={<Users size={24} color={C.cream} strokeWidth={2.2} />}>监护受托人 · 过错范围连带</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>对外仍是<Soft color={C.indigo}>监护人</Soft>全部担责；受托人<Soft color={C.warn}>有过错</Soft> → <Soft color={C.warn}>过错范围内连带</Soft></div>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>有偿委托：受托人<Soft color={C.warn}>有过错</Soft>即可被追偿；无偿委托：须<Soft color={C.warn}>故意或重大过失</Soft></div>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>无偿委托中受托人仅<Soft color={C.signal}>一般过失</Soft> → 对外连带后可向监护人<Under color={C.pine} delay={240}>追偿</Under></div>
          </Panel>
        </Enter>
        <Enter delay={180} from="up" marker="education-institution-ladder" style={{position: 'absolute', left: 0, top: 546, width: 1776, height: 222}}>
          <Panel tone={C.warn} watermark={<Layers size={110} color={C.warn} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.warn} icon={<Layers size={24} color={C.cream} strokeWidth={2.2} />}>教育机构 · 三档责任</PanelTab>
            <div style={{display: 'flex', gap: 14, flex: 1, alignItems: 'center'}}>
              <IconChip icon={<Search size={24} color={C.cream} strokeWidth={2.2} />} tone={C.warn} title="无民事行为能力人受损：" style={{flex: 1}}>
                <Soft color={C.warn}>过错推定</Soft>——机构自证尽到职责方可免责
              </IconChip>
              <IconChip icon={<Gavel size={24} color={C.cream} strokeWidth={2.2} />} tone={C.indigo} title="限制民事行为能力人受损：" style={{flex: 1}}>
                <Soft color={C.indigo}>一般过错</Soft>——受害方证明机构<Soft color={C.indigo}>未尽职责</Soft>
              </IconChip>
              <IconChip icon={<Layers size={24} color={C.cream} strokeWidth={2.2} />} tone={C.signal} title="第三人侵权：" style={{flex: 1.1}}>
                <Soft color={C.warn}>第三人直接担责</Soft>；机构未尽管理职责 → <Soft color={C.signal}>相应的补充责任</Soft>，赔付后向第三人<Under color={C.pine} delay={260}>追偿</Under>
              </IconChip>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};


export const CrossroadsScene = () => {
  /* data-final-knowledge="traffic-driver-principle" data-final-knowledge="medical-fault-lanes" data-final-knowledge="product-joint-claims" data-final-knowledge="network-provider-duty" */
  return (
    <Shell code="05" kicker="交通 · 医疗 · 产品 · 网络" title="交通事故、医疗、产品与网络侵权">
      <div
        data-layout="four-way-crossroads-with-verdict-boards"
        data-visual-anchor="document-fork"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="traffic-harm-pays-insurance-first-and-assigns-the-driver-with-preserved-owner-fault,medical-liability-needs-proven-fault-with-statutory-presumptions-and-defense-lanes,product-defects-bind-producer-and-seller-jointly-to-victims-who-may-claim-without-contract,network-providers-who-knew-or-should-have-known-and-did-nothing-answer-jointly"
        data-focal-rule="four-crossroads-share-one-shape-insurance-or-no-fault-first-then-fault-or-principles-with-recourse-running-to-the-ultimatewrongdoer"
        data-focal-channels="icon,contrast,connector,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="traffic-driver-principle" style={{position: 'absolute', left: 0, top: 0, width: 900, height: 380}}>
          <Panel tone={C.indigo} watermark={<Gavel size={110} color={C.indigo} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.indigo} icon={<Gavel size={24} color={C.cream} strokeWidth={2.2} />}>交通事故 · 保险先赔＋驾驶人责任</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>先<Soft color={C.indigo}>交强险、商业险</Soft>赔付，不足部分才<Soft color={C.indigo}>侵权赔偿</Soft></div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 4, flex: 1}}>
              <span style={{fontSize: 22, fontWeight: 880}}>租借/共有车第三人使用 → <Soft color={C.warn}>使用人担责</Soft>；所有人<Soft color={C.warn}>有过错</Soft>承担相应责任</span>
              <span style={{fontSize: 22, fontWeight: 880}}>已交付未登记买卖 → <Soft color={C.warn}>受让人</Soft>担责；<Soft color={C.warn}>拼装报废车</Soft>转让 → 转让人受让人<Soft color={C.warn}>连带</Soft>（是否明知在所不问）</span>
              <span style={{fontSize: 22, fontWeight: 880}}>盗抢 → <Soft color={C.warn}>盗抢者</Soft>担责（盗抢后出借 → 连带）；保险垫付抢救费可<Under color={C.pine} delay={200}>追偿</Under></span>
              <span style={{fontSize: 22, fontWeight: 880}}>逃逸 → <Soft color={C.indigo}>保险公司</Soft>限额内赔；未参保/超限额 → <Soft color={C.indigo}>道路救助基金垫付</Soft>，垫付后<Under color={C.pine} delay={230}>追偿</Under></span>
              <span style={{fontSize: 22, fontWeight: 880}}>例外：职务驾驶归<Soft color={C.warn}>雇主</Soft>；部分共有人驾驶 → 共有人<Soft color={C.warn}>连带</Soft>；培训中 → <Soft color={C.warn}>驾校</Soft>；同意套牌 → <Soft color={C.warn}>连带</Soft></span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={44} from="right" marker="medical-fault-lanes" style={{position: 'absolute', left: 914, top: 0, width: 862, height: 380}}>
          <Panel tone={C.pine} watermark={<Scale size={110} color={C.pine} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 5, padding: '12px 18px'}}>
            <PanelTab tone={C.pine} icon={<Scale size={24} color={C.cream} strokeWidth={2.2} />}>医疗损害 · 过错＋法定推定</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>原则＝<Soft color={C.pine}>过错认定</Soft>，患者对过错负<Soft color={C.pine}>证明责任</Soft>（可申请鉴定）</div>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>可直接认定过错的推定事由：<Soft color={C.warn}>违法诊疗</Soft>（违反诊疗规范）、<Soft color={C.warn}>隐匿拒绝提供或伪造篡改违法销毁病历</Soft>、违反<Soft color={C.warn}>当时医疗水平</Soft>的诊疗义务</div>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>免责：<Soft color={C.pine}>患者或近亲属不配合</Soft>（机构也有过错的仍担相应责任）；紧急情况下已尽<Soft color={C.pine}>合理诊疗义务</Soft>；限于<Soft color={C.pine}>当时医疗水平</Soft>难以诊疗</div>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>未尽<Soft color={C.warn}>说明、征得书面同意</Soft>义务（病情、措施、风险、替代方案 → 患者本人，不宜则近亲属）造成损害 → 承担赔偿责任；紧急经<Soft color={C.indigo}>负责人批准</Soft>可立即施救</div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>药品、消毒产品、器械缺陷或不合格血液：<Soft color={C.warn}>不真正连带</Soft>——可向持有人/生产者/血液机构或<Soft color={C.warn}>医疗机构</Soft>索赔，医疗机构赔付后<Under color={C.pine} delay={280}>追偿</Under></div>
          </Panel>
        </Enter>
        <Enter delay={100} from="left" marker="product-joint-claims" style={{position: 'absolute', left: 0, top: 394, width: 900, height: 268}}>
          <Panel tone={C.signal} watermark={<Split size={110} color={C.signal} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.signal} icon={<Split size={24} color={C.cream} strokeWidth={2.2} />}>产品责任 · 无过错不真正连带</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>缺陷致损 → 可向<Soft color={C.warn}>生产者</Soft>或<Soft color={C.warn}>销售者</Soft>请求赔偿（<Soft color={C.signal}>不真正连带</Soft>）；<Ban size={20} color={C.warn} strokeWidth={2.6} /> 无需合同关系；<Ban size={20} color={C.warn} strokeWidth={2.6} /> 不问过错；赔偿范围<Soft color={C.warn}>包括产品本身损失</Soft></div>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>投入流通后发现缺陷 → 及时<Soft color={C.indigo}>停止销售、警示、召回</Soft>并负担必要费用；未及时补救致<Soft color={C.warn}>损害扩大</Soft> → 对扩大部分也担责</div>
            <div style={{fontSize: 22, fontWeight: 880, lineHeight: 1.4}}>运输者、仓储者等第三人过错致缺陷 → 生产者销售者赔付后向<Soft color={C.pine}>过错方追偿</Soft></div>
          </Panel>
        </Enter>
        <Enter delay={140} from="right" marker="network-provider-duty" style={{position: 'absolute', left: 914, top: 394, width: 862, height: 268}}>
          <Panel tone={C.warn} watermark={<Ban size={110} color={C.warn} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.warn} icon={<Ban size={24} color={C.cream} strokeWidth={2.2} />}>网络侵权 · 服务提供者过错连带</PanelTab>
            <IconChip icon={<Users size={24} color={C.cream} strokeWidth={2.2} />} tone={C.warn} title="规则：" style={{flex: 1.2}}>
              用户利用网络实施侵权 → 用户担责；网络服务提供者<Soft color={C.warn}>知道或应当知道</Soft>且<Soft color={C.warn}>未采取必要措施</Soft>的 → 与用户承担<Seal delay={240} size={20}>连带侵权责任</Seal>
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.coffeeSoft}}>过错的认定＝知道/应当知道＋未采取必要措施</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

/* __APPEND__ */
