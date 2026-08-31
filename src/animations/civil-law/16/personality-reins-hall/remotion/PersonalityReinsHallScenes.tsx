import type {CSSProperties, ReactNode} from 'react';
import {
  Ban,
  Coins,
  FileSignature,
  Gavel,
  HeartHandshake,
  Image,
  Scissors,
  Undo2,
  Users,
} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  amber: '#71522A',
  amberDeep: '#574020',
  amberMid: '#8A6A3C',
  cream: '#F8F2E2',
  creamDim: '#EDE4CE',
  roast: '#332A1E',
  roastSoft: '#7E7160',
  honey: '#C9992F',
  honeyPale: '#F3E6C4',
  saddle: '#8A5A33',
  saddlePale: '#F0DFCF',
  verdigris: '#5E8271',
  verdigrisPale: '#DFEAE2',
  plumgray: '#7C6B7A',
  plumgrayPale: '#EAE2E9',
  edge: '#D5C8AC',
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
  const sceneIndex = Math.max(0, Math.min(1, Number(code) - 1));
  return (
    <AbsoluteFill
      data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
      style={{
        backgroundColor: C.amber,
        color: C.cream,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `radial-gradient(circle at 80% 15%, rgba(248, 242, 226, 0.08) 0%, transparent 42%), repeating-linear-gradient(90deg, transparent 0 136px, rgba(255, 255, 255, 0.045) 136px 138px)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 12, background: `linear-gradient(90deg, ${C.saddle}, ${C.honey}, ${C.verdigris})`, opacity: 0.94}} />
      <div style={{position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: '2px solid rgba(248, 242, 226, 0.3)'}} />
      <div style={{position: 'absolute', left: 60, top: 44, padding: '10px 16px', backgroundColor: C.amberDeep, borderLeft: `8px solid ${C.honey}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.cream, letterSpacing: 2}}>民法 · 第16讲 · {code}</span>
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
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.cream}}>{title}</h1>
        <span style={{fontSize: 22, fontWeight: 850, color: C.honeyPale, textAlign: 'right'}}>{kicker}</span>
      </header>
      <div style={{position: 'absolute', right: 64, bottom: 44, display: 'flex', alignItems: 'center', gap: 10, opacity: 0.9}}>
        {[0, 1].map((dot) => (
          <span
            key={dot}
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: dot === sceneIndex ? C.saddle : 'transparent',
              border: `2px solid ${C.honey}`,
            }}
          />
        ))}
      </div>
      <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    </AbsoluteFill>
  );
};

export const Panel = ({children, marker, tone = C.honey, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.cream, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${tone}`, color: C.roast, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(87, 64, 32, 0.4)', ...style}}
  >
    <span style={{position: 'absolute', right: 10, top: 10, width: 26, height: 26, borderTop: `3px solid ${tone}`, borderRight: `3px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 14, bottom: 10, width: 26, height: 26, borderBottom: `3px solid ${tone}`, borderLeft: `3px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.honey, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.amberDeep, borderLeft: `6px solid ${tone}`, color: C.cream, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children, style}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.creamDim, borderLeft: `5px solid ${tone}`, padding: '5px 12px', ...style}}>
    <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 22, backgroundColor: tone, border: `2px solid ${C.cream}`, boxShadow: '0 0 0 2px rgba(201, 153, 47, 0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.roast, lineHeight: 1.42}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Seal = ({children, delay = 0, size = 22, tone = C.saddle}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

export const Under = ({children, color = C.honey, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

export const Chip = ({children, tone = C.edge, toneBg = C.creamDim, ink = C.roast}: {readonly children: ReactNode; readonly tone?: string; readonly toneBg?: string; readonly ink?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${tone}`, backgroundColor: toneBg, padding: '5px 12px', fontSize: 22, fontWeight: 900, color: ink, whiteSpace: 'nowrap'}}>{children}</span>
);


export const PortraitLicenseScene = () => {
  /* data-final-knowledge="adverse-interpretation" data-final-knowledge="no-term-termination" data-final-knowledge="fixed-term-termination" data-final-knowledge="name-reference-rule" */
  return (
    <Shell code="01" kicker="肖像许可 · 解释与解除" title="肖像使用许可合同">
      <div
        data-layout="license-lane-with-termination-forks"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="ambiguous-portrait-terms-are-read-against-the-user,no-or-unclear-term-lets-either-side-terminate-anytime-with-reasonable-notice,a-fixed-term-needs-just-cause-to-terminate-and-damages-unless-not-attributable-to-the-portrait-holder,name-and-likewise-licenses-follow-the-portrait-rules-by-reference"
        data-focal-rule="license-disputes-run-against-the-user-and-termination-rules-fork-on-whether-the-term-was-fixed-while-names-follow-by-reference"
        data-focal-channels="connector,contrast,icon,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="adverse-interpretation" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 116}}>
          <Panel tone={C.honey} watermark={<Image size={110} color={C.honey} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 18, padding: '10px 18px'}}>
            <PanelTab tone={C.honey} icon={<Image size={24} color={C.cream} strokeWidth={2.2} />}>不利解释原则</PanelTab>
            <span style={{fontSize: 23, fontWeight: 880}}>对肖像使用条款的理解有争议 → 作出<Soft color={C.saddle}>不利于使用权人</Soft>的解释</span>
            <Chip tone={C.honey} toneBg={C.honeyPale} ink={C.amberDeep}>保护肖像权人为原则</Chip>
          </Panel>
        </Enter>
        <Enter delay={44} from="left" marker="no-term-termination" style={{position: 'absolute', left: 0, top: 130, width: 866, height: 300}}>
          <Panel tone={C.verdigris} watermark={<Undo2 size={110} color={C.verdigris} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '12px 18px'}}>
            <PanelTab tone={C.verdigris} icon={<Undo2 size={24} color={C.cream} strokeWidth={2.2} />}>期限没有约定或约定不明确</PanelTab>
            <IconChip icon={<Scissors size={24} color={C.cream} strokeWidth={2.2} />} tone={C.verdigris} title="解除权：" style={{flex: 1}}>
              任何一方均可<Soft color={C.verdigris}>随时解除</Soft>肖像许可使用合同
            </IconChip>
            <IconChip icon={<FileSignature size={24} color={C.cream} strokeWidth={2.2} />} tone={C.honey} title="限制：" style={{flex: 1}}>
              应当在<Soft color={C.honey}>合理期限之前通知对方</Soft>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={80} from="right" marker="fixed-term-termination" style={{position: 'absolute', left: 910, top: 130, width: 866, height: 300}}>
          <Panel tone={C.saddle} watermark={<Scissors size={110} color={C.saddle} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '12px 18px'}}>
            <PanelTab tone={C.saddle} icon={<Scissors size={24} color={C.cream} strokeWidth={2.2} />}>期限有明确约定</PanelTab>
            <IconChip icon={<Scissors size={24} color={C.cream} strokeWidth={2.2} />} tone={C.saddle} title="肖像权人解除：" style={{flex: 1}}>
              有<Soft color={C.saddle}>正当理由</Soft>（如想退出娱乐圈平静生活；对方超范围使用）→ 可解除，且应在合理期限之前<Soft color={C.saddle}>通知对方</Soft>
            </IconChip>
            <IconChip icon={<Coins size={24} color={C.cream} strokeWidth={2.2} />} tone={C.saddle} title="赔偿与否：" style={{flex: 1.3}}>
              造成对方损失 → 除<Soft color={C.saddle}>不可归责于肖像权人</Soft>的事由外，应当<Seal delay={210} size={20}>赔偿损失</Seal>——「想退出娱乐圈」需赔；「对方超范围使用」不需赔
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={140} from="up" marker="name-reference-rule" style={{position: 'absolute', left: 0, top: 444, width: 1776, height: 130}}>
          <Panel tone={C.plumgray} watermark={<Users size={110} color={C.plumgray} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '12px 18px'}}>
            <PanelTab tone={C.plumgray} icon={<Users size={24} color={C.cream} strokeWidth={2.2} />}>参照适用</PanelTab>
            <span style={{fontSize: 23, fontWeight: 880}}>对<Soft color={C.plumgray}>姓名等</Soft>的许可使用 → <Under color={C.honey} delay={150}>参照适用</Under>肖像许可使用的有关规定</span>
          </Panel>
        </Enter>
        <Enter delay={180} from="up" style={{position: 'absolute', left: 0, top: 588, width: 1776, height: 180}}>
          <Panel tone={C.honey} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.honey} icon={<Gavel size={24} color={C.cream} strokeWidth={2.2} />}>明星甲 5 年许可合同 · 两问对照</PanelTab>
            <div style={{display: 'flex', gap: 14, flex: 1, alignItems: 'center'}}>
              <IconChip icon={<Scissors size={22} color={C.cream} strokeWidth={2.2} />} tone={C.saddle} title="想退出娱乐圈：" style={{flex: 1}}>
                有正当理由可解除；<Soft color={C.saddle}>需要赔偿</Soft>（可归责于甲）
              </IconChip>
              <IconChip icon={<Ban size={22} color={C.cream} strokeWidth={2.2} />} tone={C.verdigris} title="乙公司超范围使用：" style={{flex: 1}}>
                有正当理由可解除；<Soft color={C.verdigris}>不需要赔偿</Soft>（不可归责于甲）
              </IconChip>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};



export const BodyDonationScene = () => {
  /* data-final-knowledge="organ-donation-autonomy" data-final-knowledge="posthumous-joint-decision" */
  return (
    <Shell code="02" kicker="对身体支配 · 器官捐献" title="器官捐献的自主决定">
      <div
        data-layout="donation-lane-with-consent-asymmetry-gates"
        data-visual-anchor="boundary"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="capacitous-persons-decide-organ-donation-freely-with-writing-or-will,a-refusal-needs-no-writing-while-consent-demands-form,after-death-spouse-adult-children-and-parents-jointly-decide-only-in-written-form,donation-covers-cells-tissues-organs-and-cadavers-without-payment"
        data-focal-rule="donation-consent-forms-an-asymmetric-boundary-yes-demands-writing-or-will-while-no-needs-nothing-and-death-passes-the-pen-to-the-family-trio-in-writing"
        data-focal-channels="icon,contrast,connector,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 116}}>
          <Panel tone={C.honey} watermark={<HeartHandshake size={110} color={C.honey} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 18, padding: '10px 18px'}}>
            <PanelTab tone={C.honey} icon={<HeartHandshake size={24} color={C.cream} strokeWidth={2.2} />}>器官捐献 · 对象与前提</PanelTab>
            <span style={{fontSize: 23, fontWeight: 880}}>完全民事行为能力人自主决定<Soft color={C.honey}>无偿捐献</Soft>人体<Soft color={C.honey}>细胞、组织、器官、遗体</Soft></span>
            <Chip tone={C.honey} toneBg={C.honeyPale} ink={C.amberDeep}>捐献自主 · 无偿</Chip>
          </Panel>
        </Enter>
        <Enter delay={40} from="left" marker="organ-donation-autonomy" style={{position: 'absolute', left: 0, top: 130, width: 866, height: 440}}>
          <Panel tone={C.honey} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.honey} icon={<FileSignature size={24} color={C.cream} strokeWidth={2.2} />}>生前 · 同意与拒绝不对称</PanelTab>
            <IconChip icon={<FileSignature size={24} color={C.cream} strokeWidth={2.2} />} tone={C.honey} title="同意捐献：" style={{flex: 1.1}}>
              应以<Soft color={C.honey}>书面形式</Soft>或<Soft color={C.honey}>订立遗嘱</Soft>作出同意捐献的意思表示
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.cream} strokeWidth={2.2} />} tone={C.verdigris} title="不同意捐献：" style={{flex: 1.1}}>
              <Soft color={C.verdigris}>无需采取</Soft>书面或者订立遗嘱方式
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.coffeeSoft}}>同意要式 · 拒绝不要式——形式门槛只拦「同意」一侧</div>
          </Panel>
        </Enter>
        <Enter delay={80} from="right" marker="posthumous-joint-decision" style={{position: 'absolute', left: 910, top: 130, width: 866, height: 440}}>
          <Panel tone={C.plumgray} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.plumgray} icon={<Users size={24} color={C.cream} strokeWidth={2.2} />}>身后 · 共同决定</PanelTab>
            <IconChip icon={<Users size={24} color={C.cream} strokeWidth={2.2} />} tone={C.plumgray} title="共同决定人：" style={{flex: 1.1}}>
              生前<Soft color={C.plumgray}>未表示</Soft>同意或不同意的，死亡后由其<Soft color={C.plumgray}>配偶、成年子女、父母</Soft>共同决定捐献
            </IconChip>
            <IconChip icon={<FileSignature size={24} color={C.cream} strokeWidth={2.2} />} tone={C.saddle} title="形式要求：" style={{flex: 1.1}}>
              决定捐献的意思表示应当采用<Seal delay={220} size={20} tone={C.plumgray}>书面形式</Seal>
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.coffeeSoft}}>三类人＋共同决定＋书面形式——缺一不可</div>
          </Panel>
        </Enter>
        <Enter delay={140} from="up" style={{position: 'absolute', left: 0, top: 584, width: 1776, height: 184}}>
          <Panel tone={C.verdigris} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.verdigris} icon={<Gavel size={24} color={C.cream} strokeWidth={2.2} />}>对照记忆</PanelTab>
            <div style={{display: 'flex', gap: 14, flex: 1, alignItems: 'center'}}>
              <IconChip icon={<FileSignature size={22} color={C.cream} strokeWidth={2.2} />} tone={C.honey} title="本人生前同意：" style={{flex: 1}}>
                书面形式 或 遗嘱
              </IconChip>
              <IconChip icon={<Ban size={22} color={C.cream} strokeWidth={2.2} />} tone={C.verdigris} title="本人生前拒绝：" style={{flex: 1}}>
                无需任何形式
              </IconChip>
              <IconChip icon={<Users size={22} color={C.cream} strokeWidth={2.2} />} tone={C.plumgray} title="死后家属决定：" style={{flex: 1}}>
                配偶＋成年子女＋父母 共同＋书面
              </IconChip>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const ClinicalTrialScene = () => {
  /* data-final-knowledge="clinical-trial-rules" */
  return (
    <Shell code="03" kicker="对身体支配 · 临床试验" title="临床试验的四道闸">
      <div
        data-layout="trial-gate-sequence-with-fee-ban-strip"
        data-visual-anchor="timeline-gate"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="trials-pass-approval-ethics-and-written-consent-gates-in-order,disclosure-covers-purpose-use-and-risks-to-subjects-or-guardians,trial-fees-are-banned-for-subjects,consent-asymmetry-runs-through-donation-and-trial-gates-alike"
        data-focal-rule="a-trial-must-clear-approval-ethics-and-informed-written-consent-gates-in-order-while-fees-stay-banned"
        data-focal-channels="connector,icon,contrast,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 420}}>
          <Panel tone={C.verdigris} watermark={<Gavel size={130} color={C.verdigris} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 10, padding: '14px 20px'}}>
            <PanelTab tone={C.verdigris} icon={<Gavel size={24} color={C.cream} strokeWidth={2.2} />}>为医学事业发展进行临床试验 · 依次过闸</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', gap: 10, flex: 1}}>
              <IconChip icon={<Gavel size={24} color={C.cream} strokeWidth={2.2} />} tone={C.verdigris} title="① 主管批准：" style={{flex: 1}}>
                依法经相关主管部门<Soft color={C.verdigris}>批准</Soft>
              </IconChip>
              <span style={{fontSize: 26, fontWeight: 950, color: C.saddle}}>→</span>
              <IconChip icon={<Users size={24} color={C.cream} strokeWidth={2.2} />} tone={C.plumgray} title="② 伦理审查：" style={{flex: 1}}>
                经<Soft color={C.plumgray}>伦理委员会</Soft>审查<Soft color={C.plumgray}>同意</Soft>
              </IconChip>
              <span style={{fontSize: 26, fontWeight: 950, color: C.saddle}}>→</span>
              <IconChip icon={<FileSignature size={24} color={C.cream} strokeWidth={2.2} />} tone={C.honey} title="③ 说明＋书面同意：" style={{flex: 1.4}}>
                向<Soft color={C.honey}>受试者或其监护人</Soft>告知试验<Soft color={C.honey}>目的、用途</Soft>和可能产生的<Soft color={C.honey}>风险</Soft>等详细情况，并经其<Under color={C.honey} delay={220}>书面同意</Under>
              </IconChip>
            </div>
            <IconChip icon={<Ban size={24} color={C.cream} strokeWidth={2.2} />} tone={C.saddle} title="④ 费用禁止：" style={{flex: 0.8}}>
              <Seal delay={280} size={21}>不得向受试者收取试验费用</Seal>
            </IconChip>
          </Panel>
        </div>
        <Enter delay={160} from="up" style={{position: 'absolute', left: 0, top: 434, width: 1776, height: 334}}>
          <Panel tone={C.honey} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '14px 20px'}}>
            <PanelTab tone={C.honey} icon={<Ban size={24} color={C.cream} strokeWidth={2.2} />}>同意的形式与顺序 · 全讲贯通</PanelTab>
            <div style={{display: 'flex', flexDirection: 'column', gap: 8, flex: 1, justifyContent: 'center'}}>
              <span style={{fontSize: 23, fontWeight: 900}}>器官捐献：同意＝书面/遗嘱，拒绝＝无形式要求</span>
              <span style={{fontSize: 23, fontWeight: 900}}>死后捐献：配偶·成年子女·父母 共同决定＋书面</span>
              <span style={{fontSize: 23, fontWeight: 900}}>临床试验：批准＋伦理同意＋告知后书面同意＋禁收费</span>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.coffeeSoft}}>一条主线：对身体支配的每一道门都以「同意的形式与顺序」为核心</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

