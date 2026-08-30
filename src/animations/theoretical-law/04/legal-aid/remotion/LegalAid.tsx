import type {CSSProperties, ReactNode} from 'react';
import {Ban, Clock, FileCheck, Handshake, Scale, ScrollText, UserCheck, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  aid: '#2E3833',
  aidDeep: '#232B27',
  panel: '#F0EBDA',
  panelDim: '#E1DCC7',
  edge: '#5E7168',
  ink: '#22302A',
  inkSoft: '#516260',
  gold: '#C0983E',
  terminate: '#B04834',
  remedy: '#4E7D74',
  paper: '#F6F1E0',
} as const;

const prog = (frame: number, delay: number, span = 18) => interpolate(frame, [delay, delay + span], [0, 1], CLAMP);

const Enter = ({
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

const Shell = ({children, code, kicker, title}: {readonly children: ReactNode; readonly code: string; readonly kicker: string; readonly title: string}) => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{
      backgroundColor: C.aid,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `radial-gradient(1100px 460px at 50% -8%, rgba(192, 152, 62, 0.12), transparent 72%), repeating-linear-gradient(90deg, transparent 0 172px, rgba(35, 43, 39, 0.55) 172px 175px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.gold}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.aidDeep, borderLeft: `8px solid ${C.terminate}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 78 · {code}</span>
    </div>
    <header
      style={{
        position: 'absolute',
        left: 250,
        right: 72,
        top: 34,
        height: 88,
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        alignItems: 'center',
        gap: 22,
        borderBottom: `2px solid ${C.gold}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.gold, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone, watermark}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string; readonly watermark?: ReactNode}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.remedy}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.remedy}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.remedy}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.remedy}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

const AidTab = ({children, bar = C.terminate, icon}: {readonly children: ReactNode; readonly bar?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.aidDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

const AidStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(35, 43, 39, 0.94)', border: `2px solid ${C.gold}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Mark = ({children, color = C.terminate}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

const ClockSeal = ({children, tone = C.gold, delay = 0}: {readonly children: ReactNode; readonly tone?: string; readonly delay?: number}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span style={{display: 'inline-block', padding: '4px 12px', border: `5px solid ${tone}`, color: tone, backgroundColor: `${tone}12`, fontSize: 22, fontWeight: 950, letterSpacing: 2, opacity: p, rotate: '-2deg'}}>{children}</span>
  );
};

const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.panelDim, borderLeft: `6px solid ${tone}`, padding: '8px 12px'}}>
    <span style={{flexShrink: 0, width: 50, height: 50, borderRadius: 10, backgroundColor: tone, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 0 rgba(0,0,0,0.18)'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.45}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const FeaturesObjectsScene = () => {
  /* data-final-knowledge="aid-features-objects" */
  const features = ['主体的明确性：政府作为责任主体', '工作的统一性：四统一（统一受理·统一审查·统一指派·统一监督）', '服务的无偿性：完全无偿', '对象的广泛性：经济困难者＋法律特别规定的特殊对象', '形式的丰富性：诉讼＋非诉讼法律援助服务', '主体的多样性：律师·法律援助机构工作人员·社会团体（工会·妇联·共青团）等'];
  return (
    <Shell code="01" kicker="特征 · 对象" title="法律援助的特征与对象">
      <div
        data-layout="features-plus-objects"
        data-visual-anchor="main center"
        data-text-treatments="feature-chips,scope-rows"
        data-visual-grammar="features-column,objects-column"
        data-focal-rule="four-unifications-and-free-service"
        data-focal-channels="six-features,no-economic-review"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="aid-features-objects" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 724}}>
          <Panel tone={C.remedy} watermark={<Handshake size={190} color={C.remedy} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <AidTab bar={C.remedy} icon={<Handshake size={26} color={C.paper} strokeWidth={2.2} />}>法律援助特征（六特征）</AidTab>
            {features.map((line, index) => (
              <div key={line} style={{fontSize: 21, fontWeight: 860, color: C.ink, lineHeight: 1.45, backgroundColor: C.panelDim, borderLeft: `5px solid ${C.remedy}`, padding: '7px 11px'}}>
                <span style={{color: C.remedy, fontWeight: 950, marginRight: 6}}>{index + 1}.</span>
                {line}
              </div>
            ))}
          </Panel>
        </Enter>
        <Enter delay={30} from="right" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 724}}>
          <Panel tone={C.gold} watermark={<Users size={190} color={C.gold} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <AidTab bar={C.gold} icon={<Users size={26} color={C.paper} strokeWidth={2.2} />}>法律援助对象 · 经济困难</AidTab>
            <div style={{fontSize: 21, fontWeight: 860, color: C.ink, lineHeight: 1.5}}>
              刑事：嫌疑人·被告人因经济困难或其他原因没有委托辩护人，本人及近亲属可申请；民事·行政：请求国家赔偿·社保救助·抚恤金·赡养抚养扶养费·劳动关系劳动报酬·无民事行为能力认定·事故人身损害赔偿·环境污染生态破坏赔偿等
            </div>
            <IconChip icon={<FileCheck size={28} color={C.paper} strokeWidth={2.2} />} tone={C.remedy} title="不受经济困难限制（第 32 条·申请就给）：">
              英烈近亲属维护人格权益 · 见义勇为主张民事权益 · 再审改判无罪请求国家赔偿 · 虐待遗弃家暴受害人主张权益
            </IconChip>
            <IconChip icon={<UserCheck size={28} color={C.paper} strokeWidth={2.2} />} tone={C.gold} title="免予核查经济困难状况（第 42 条）：">
              无固定生活来源的未成年人·老年人·残疾人 · 社会救助·司法救助·优抚对象 · 请求劳动报酬或工伤赔偿的进城务工人员
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const AppointmentImplementationScene = () => {
  /* data-final-knowledge="appointment-implementation" */
  const appointed = ['未成年人', '视力·听力·言语残疾人', '不能完全辨认自己行为的成年人', '可能被判处无期徒刑·死刑的人', '申请法律援助的死刑复核案件被告人', '缺席审判案件的被告人', '法律法规规定的其他人员', '强制医疗案件被申请人或被告人（应通知）；其他普通程序刑事案件（可通知）'];
  const forms = [
    {title: '法律咨询：', body: '解答援助制度与简单法律问题，不需要审查经济条件', tone: C.remedy},
    {title: '代理（五种）：', body: '刑事代理 · 民事代理 · 行政代理 · 非诉讼代理（仲裁代理＋调解）· 强制医疗案件代理', tone: C.gold},
    {title: '刑事辩护：', body: '法律援助律师担任嫌疑人·被告人的辩护人参加刑事诉讼', tone: C.remedy},
    {title: '值班律师法律帮助：', body: '在法院·看守所等场所为没有辩护人的嫌疑人·被告人提供法律咨询·程序选择建议·申请变更强制措施·对案件处理提出意见', tone: C.gold},
  ] as const;
  return (
    <Shell code="02" kicker="指定辩护 · 实施形式" title="指定辩护与实施形式">
      <div
        data-layout="appointment-plus-forms"
        data-visual-anchor="main center"
        data-text-treatments="appointment-rows,form-chips"
        data-visual-grammar="appointment-panel,forms-panel"
        data-focal-rule="notify-appointment-list-and-duty-lawyer-help"
        data-focal-channels="appointed-defense-list,duty-lawyer-help"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="appointment-implementation" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 600}}>
          <Panel tone={C.terminate} watermark={<UserCheck size={190} color={C.terminate} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <AidTab bar={C.terminate} icon={<UserCheck size={26} color={C.paper} strokeWidth={2.2} />}>指定辩护（应当通知法律援助机构指派律师）</AidTab>
            {appointed.map((line, index) => (
              <div key={line} style={{fontSize: 21, fontWeight: 860, color: C.ink, lineHeight: 1.42, backgroundColor: `${C.terminate}10`, borderLeft: `5px solid ${C.terminate}`, padding: '6px 10px'}}>
                <span style={{color: C.terminate, fontWeight: 950, marginRight: 5}}>{index + 1}.</span>
                {line}
              </div>
            ))}
          </Panel>
        </Enter>
        <Enter delay={30} from="right" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 600}}>
          <Panel tone={C.remedy} watermark={<ScrollText size={190} color={C.remedy} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <AidTab bar={C.remedy} icon={<ScrollText size={26} color={C.paper} strokeWidth={2.2} />}>实施形式（四种）</AidTab>
            {forms.map((form) => (
              <IconChip key={form.title} icon={<ScrollText size={26} color={C.paper} strokeWidth={2.2} />} tone={form.tone} title={form.title}>
                {form.body}
              </IconChip>
            ))}
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const ProcedureRemedyScene = () => {
  /* data-final-knowledge="procedure-remedy" */
  const terminates = ['欺骗等不正当手段获得援助', '故意隐瞒重要事实或提供虚假证据', '利用法律援助从事违法活动', '经济状况变化不再符合条件', '案件终止审理或被撤销', '自行委托律师或其他代理人', '有正当理由要求终止', '法律法规规定的其他情形'];
  return (
    <Shell code="03" kicker="程序 · 指派 · 终止 · 救济" title="实施程序、终止与救济">
      <div
        data-layout="procedure-plus-terminate"
        data-visual-anchor="main center"
        data-text-treatments="procedure-rows,terminate-seals"
        data-visual-grammar="procedure-panel,terminate-panel,remedy-strip"
        data-focal-rule="seven-day-review-three-day-appointment-and-remedy-route"
        data-focal-channels="time-limits,remedy-route"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="procedure-remedy" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 428}}>
          <Panel tone={C.remedy} watermark={<Clock size={180} color={C.remedy} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <AidTab bar={C.remedy} icon={<Clock size={26} color={C.paper} strokeWidth={2.2} />}>实施程序</AidTab>
            <IconChip icon={<Clock size={28} color={C.paper} strokeWidth={2.2} />} tone={C.remedy} title="申请与审查：">
              诉讼事项向<Mark color={C.remedy}>办案机关所在地</Mark>、非诉讼事项向<Mark color={C.remedy}>争议处理机关所在地或事由发生地</Mark>援助机构申请；<ClockSeal tone={C.remedy} delay={140}>7 日内</ClockSeal>审查决定；给予的<Mark color={C.gold}>3 日内</Mark>指派；不给予的书面告知并说明理由
            </IconChip>
            <IconChip icon={<Ban size={28} color={C.paper} strokeWidth={2.2} />} tone={C.gold} title="先行提供援助：">
              距法定时效期限届满不足 7 日需及时提起诉讼仲裁行政复议 · 需立即申请财产保全·证据保全·先予执行；受援人应及时补办手续
            </IconChip>
            <IconChip icon={<UserCheck size={28} color={C.paper} strokeWidth={2.2} />} tone={C.remedy} title="指派要求：">
              无期徒刑·死刑及死刑复核案件应指派<Mark color={C.remedy}>具有 3 年以上相关执业经历</Mark>的律师；未成年人案件指派<Mark color={C.remedy}>熟悉未成年人身心特点</Mark>的律师
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={30} from="right" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 428}}>
          <Panel tone={C.terminate} watermark={<Ban size={180} color={C.terminate} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <AidTab bar={C.terminate} icon={<Ban size={26} color={C.paper} strokeWidth={2.2} />}>终止法律援助（八情形）</AidTab>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6}}>
              {terminates.map((line, index) => (
                <div key={line} style={{fontSize: 20, fontWeight: 850, color: C.ink, lineHeight: 1.4, backgroundColor: `${C.terminate}10`, borderLeft: `4px solid ${C.terminate}`, padding: '6px 9px'}}>
                  {index + 1}. {line}
                </div>
              ))}
            </div>
          </Panel>
        </Enter>
        <Enter delay={120} from="up" style={{position: 'absolute', left: 0, top: 452, width: 1776}}>
          <AidStrip style={{height: 156}}>
            <Scale size={44} color={C.remedy} strokeWidth={2.2} />
            <span style={{padding: '4px 13px', backgroundColor: C.terminate, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>点睛</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper, lineHeight: 1.65}}>
              救济：对不予·终止援助决定有异议 → 向<Mark color={C.paper}>设立该援助机构的司法行政部门</Mark>提出 →
              <ClockSeal tone={C.remedy} delay={180}>5 日内审查</ClockSeal>维持或责令改正 → 不服可<Mark color={C.paper}>行政复议或行政诉讼</Mark>
              <br />
              法院·律所·律师对诉讼费·律师费的减免<Mark color={C.paper}>不属于法律援助</Mark>；法律援助<Mark color={C.paper}>完全无偿</Mark>
            </span>
          </AidStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const LegalAid = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-features-objects" {...SCENES.featuresObjects}>
      <FeaturesObjectsScene />
    </TimelineSequence>
    <TimelineSequence name="02-appointment-implementation" {...SCENES.appointmentImplementation}>
      <AppointmentImplementationScene />
    </TimelineSequence>
    <TimelineSequence name="03-procedure-remedy" {...SCENES.procedureRemedy}>
      <ProcedureRemedyScene />
    </TimelineSequence>
  </AbsoluteFill>
);
