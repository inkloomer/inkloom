import type {CSSProperties, ReactNode} from 'react';
import {
  Baby,
  Ban,
  Coins,
  Gavel,
  HandHeart,
  Heart,
  Hourglass,
  Landmark,
  Split,
  Stamp,
  Undo2,
  UserRound,
  Users,
} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  celadon: '#1E3668',
  celadonDeep: '#16294F',
  porcelain: '#FBFCF9',
  porcelainDim: '#EFF3EC',
  cobalt: '#2B4C8C',
  cobaltDeep: '#1E3668',
  cobaltPale: '#DCE5F4',
  iron: '#46443C',
  ironSoft: '#8B897C',
  vermilion: '#C2453A',
  vermilionPale: '#F7DFDA',
  jade: '#6E9A85',
  jadePale: '#DFECE3',
  gold: '#B48A3C',
  goldPale: '#F3E9CF',
  edge: '#C9D3C6',
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
  const sceneIndex = Math.max(0, Math.min(3, Number(code) - 1));
  return (
    <AbsoluteFill
      data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
      style={{
        backgroundColor: C.celadon,
        color: C.porcelain,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `radial-gradient(circle at 18% 22%, rgba(255, 255, 255, 0.12) 0%, transparent 42%), repeating-linear-gradient(0deg, transparent 0 132px, rgba(255, 255, 255, 0.045) 132px 134px)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 12, background: `linear-gradient(90deg, ${C.cobalt}, ${C.vermilion}, ${C.jade})`, opacity: 0.94}} />
      <div style={{position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: `3px double rgba(243, 233, 207, 0.42)`}} />
      <div style={{position: 'absolute', left: 60, top: 44, padding: '10px 16px', backgroundColor: C.cobaltDeep, borderLeft: `8px solid ${C.gold}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.porcelain, letterSpacing: 2}}>民法 · 第20讲 · {code}</span>
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
          borderBottom: `2px solid ${C.cobalt}`,
        }}
      >
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.porcelain}}>{title}</h1>
        <span style={{fontSize: 22, fontWeight: 850, color: C.goldPale, textAlign: 'right'}}>{kicker}</span>
      </header>
      <div style={{position: 'absolute', right: 64, bottom: 44, display: 'flex', alignItems: 'center', gap: 10, opacity: 0.9}}>
        {[0, 1, 2, 3].map((dot) => (
          <span
            key={dot}
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: dot === sceneIndex ? C.vermilion : 'transparent',
              border: `2px solid ${C.gold}`,
            }}
          />
        ))}
      </div>
      <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    </AbsoluteFill>
  );
};

export const Panel = ({children, marker, tone = C.cobalt, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.porcelain, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${tone}`, color: C.iron, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(30, 54, 104, 0.28)', ...style}}
  >
    <span style={{position: 'absolute', right: 10, top: 10, width: 26, height: 26, borderTop: `3px solid ${tone}`, borderRight: `3px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 14, bottom: 10, width: 26, height: 26, borderBottom: `3px solid ${tone}`, borderLeft: `3px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.08, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.cobalt, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.cobaltDeep, borderLeft: `6px solid ${tone}`, color: C.porcelain, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children, style}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.porcelainDim, borderLeft: `5px solid ${tone}`, padding: '5px 12px', ...style}}>
    <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 22, backgroundColor: tone, border: `2px solid ${C.porcelain}`, boxShadow: '0 0 0 2px rgba(43, 76, 140, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.iron, lineHeight: 1.42}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Seal = ({children, delay = 0, size = 22, tone = C.vermilion}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

export const Under = ({children, color = C.cobalt, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

export const Chip = ({children, tone = C.edge, toneBg = C.porcelainDim, ink = C.iron}: {readonly children: ReactNode; readonly tone?: string; readonly toneBg?: string; readonly ink?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${tone}`, backgroundColor: toneBg, padding: '5px 12px', fontSize: 22, fontWeight: 900, color: ink, whiteSpace: 'nowrap'}}>{children}</span>
);


export const KinshipSupportLadderScene = () => {
  /* data-final-knowledge="parent-child-support" data-final-knowledge="grandparent-support" data-final-knowledge="elder-sibling-support" data-final-knowledge="younger-sibling-support" */
  return (
    <Shell code="01" kicker="亲属关系 · 抚养赡养扶养" title="亲属间的抚养、赡养与扶养义务">
      <div
        data-layout="four-rung-kinship-duty-ladder"
        data-visual-anchor="timeline-gate"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="parents-support-minors-and-adult-children-unable-to-live-independently,grandparents-support-minor-grandchildren-only-when-the-middle-generation-fails,elder-siblings-support-minor-younger-siblings-only-when-parents-fail,younger-siblings-support-elder-siblings-they-were-raised-by-when-those-lack-capacity"
        data-focal-rule="each-ladder-rung-carries-its-own-capacity-and-failure-gate-and-the-younger-sibling-rung-alone-requires-having-been-raised-by-the-elder"
        data-focal-channels="icon,connector,contrast,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={40} from="left" marker="parent-child-support" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 152}}>
          <Panel tone={C.cobalt} watermark={<Baby size={110} color={C.cobalt} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 18px'}}>
            <PanelTab tone={C.cobalt} icon={<Baby size={24} color={C.porcelain} strokeWidth={2.2} />}>第一档 · 父母 → 子女</PanelTab>
            <div style={{display: 'flex', gap: 12, flex: 1, alignItems: 'center'}}>
              <IconChip icon={<Baby size={24} color={C.porcelain} strokeWidth={2.2} />} tone={C.cobalt} title="未成年子女：" style={{flex: 0.8}}>
                法定<Soft color={C.cobalt}>抚养义务</Soft>
              </IconChip>
              <IconChip icon={<Hourglass size={24} color={C.porcelain} strokeWidth={2.2} />} tone={C.jade} title="不能独立生活的成年子女：" style={{flex: 1.6}}>
                ① 尚在校接受<Soft color={C.jade}>高中及以下</Soft>学历教育；② 因丧失、部分丧失<Soft color={C.jade}>劳动能力</Soft>等<Under color={C.cobalt} delay={130}>非因主观原因</Under>无法维持正常生活
              </IconChip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={90} from="left" marker="grandparent-support" style={{position: 'absolute', left: 0, top: 166, width: 1776, height: 152}}>
          <Panel tone={C.jade} watermark={<Users size={110} color={C.jade} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 18px'}}>
            <PanelTab tone={C.jade} icon={<Users size={24} color={C.porcelain} strokeWidth={2.2} />}>第二档 · 祖父母、外祖父母 → 孙子女、外孙子女（隔代·中间死亡）</PanelTab>
            <div style={{display: 'flex', gap: 12, flex: 1, alignItems: 'center'}}>
              <Chip tone={C.jade} toneBg={C.jadePale} ink={C.jade}>① 自身有<Under color={C.jade} delay={150}>负担能力</Under></Chip>
              <Chip tone={C.jade} toneBg={C.jadePale} ink={C.jade}>② 孙辈未成年</Chip>
              <IconChip icon={<Ban size={24} color={C.porcelain} strokeWidth={2.2} />} tone={C.vermilion} title="③ 前置条件：" style={{flex: 1.4}}>
                其父母已经<Soft color={C.vermilion}>死亡</Soft>或者<Soft color={C.vermilion}>无力抚养</Soft>
              </IconChip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={140} from="left" marker="elder-sibling-support" style={{position: 'absolute', left: 0, top: 332, width: 1776, height: 152}}>
          <Panel tone={C.gold} watermark={<Users size={110} color={C.gold} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 18px'}}>
            <PanelTab tone={C.gold} icon={<Users size={24} color={C.porcelain} strokeWidth={2.2} />}>第三档 · 兄、姐 → 弟、妹（平辈·父母管不了）</PanelTab>
            <div style={{display: 'flex', gap: 12, flex: 1, alignItems: 'center'}}>
              <Chip tone={C.gold} toneBg={C.goldPale} ink={C.gold}>① 自身有<Under color={C.gold} delay={170}>负担能力</Under></Chip>
              <Chip tone={C.gold} toneBg={C.goldPale} ink={C.gold}>② 弟、妹未成年</Chip>
              <IconChip icon={<Ban size={24} color={C.porcelain} strokeWidth={2.2} />} tone={C.vermilion} title="③ 前置条件：" style={{flex: 1.4}}>
                父母已经<Soft color={C.vermilion}>死亡</Soft>或者<Soft color={C.vermilion}>无力抚养</Soft>
              </IconChip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={190} from="left" marker="younger-sibling-support" style={{position: 'absolute', left: 0, top: 498, width: 1776, height: 152}}>
          <Panel tone={C.vermilion} watermark={<HandHeart size={110} color={C.vermilion} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 18px'}}>
            <PanelTab tone={C.vermilion} icon={<HandHeart size={24} color={C.porcelain} strokeWidth={2.2} />}>第四档 · 弟、妹 → 兄、姐（反向·扶养长大的回报）</PanelTab>
            <div style={{display: 'flex', gap: 12, flex: 1, alignItems: 'center'}}>
              <Chip tone={C.vermilion} toneBg={C.vermilionPale} ink={C.vermilion}>① 自身有负担能力</Chip>
              <IconChip icon={<Hourglass size={24} color={C.porcelain} strokeWidth={2.2} />} tone={C.cobalt} title="② 兄、姐状况：" style={{flex: 1.3}}>
                缺乏<Soft color={C.cobalt}>劳动能力</Soft>且缺乏<Soft color={C.cobalt}>生活来源</Soft>
              </IconChip>
              <IconChip icon={<Heart size={24} color={C.porcelain} strokeWidth={2.2} />} tone={C.vermilion} title="③ 前提事实：" style={{flex: 1.2}}>
                弟、妹是由兄、姐<Under color={C.vermilion} delay={200}>扶养长大</Under>的
              </IconChip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={260} from="up" style={{position: 'absolute', left: 0, top: 664, width: 1776, height: 104}}>
          <Panel tone={C.cobalt} watermark={<Landmark size={100} color={C.cobalt} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '10px 18px'}}>
            <PanelTab tone={C.cobalt} icon={<Coins size={22} color={C.porcelain} strokeWidth={2.2} />}>记忆表</PanelTab>
            <span style={{fontSize: 23, fontWeight: 900}}>父母→子女：未成年或不能独立生活　·　祖←孙：中间一辈管不了　·　兄姐→弟妹：父母管不了　·　弟妹→兄姐：由兄姐扶养长大</span>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};


export const MarriageFormationGateScene = () => {
  /* data-final-knowledge="formation-and-backdating" data-final-knowledge="bigamy-void-seal" data-final-knowledge="forbidden-kin-seal" data-final-knowledge="underage-healable-seal" */
  const frame = useCurrentFrame();
  return (
    <Shell code="02" kicker="结婚 · 无效婚姻" title="婚姻的成立与无效">
      <div
        data-layout="formation-gate-with-three-invalidity-seals"
        data-visual-anchor="boundary"
        data-text-treatments="label-block,stamp,chip,soft-highlight"
        data-visual-grammar="marriage-forms-through-registration-and-backdating-covers-both-substantive-requirements,bigamy-voids-only-the-second-marriage-and-stays-void-after-divorce-or-death,direct-line-and-three-generation-collateral-kin-marry-void,underage-marriage-heals-when-both-reach-marriage-age-by-application-time"
        data-focal-rule="registration-completes-marriage-and-backdating-runs-to-the-substantive-requirements-while-bigamy-and-forbidden-kin-stay-void-but-underage-heals"
        data-focal-channels="icon,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 112}}>
          <Panel tone={C.vermilion} watermark={<Heart size={110} color={C.vermilion} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 18, padding: '10px 18px'}}>
            <PanelTab tone={C.vermilion} icon={<Heart size={24} color={C.porcelain} strokeWidth={2.2} />}>结婚 · 实质要件</PanelTab>
            <span style={{fontSize: 23, fontWeight: 880}}>男女双方以结为夫妻、缔结婚姻关系的意思表示为内容的双方<Soft color={C.vermilion}>民事法律行为</Soft></span>
            <Chip tone={C.cobalt} toneBg={C.cobaltPale} ink={C.cobalt}>① 双方自愿</Chip>
            <Chip tone={C.cobalt} toneBg={C.cobaltPale} ink={C.cobalt}>② 男<span style={{fontSize: 30, fontWeight: 950}}>22周岁</span> / 女<span style={{fontSize: 30, fontWeight: 950}}>20周岁</span></Chip>
          </Panel>
        </Enter>
        <Enter delay={40} from="up" marker="formation-and-backdating" style={{position: 'absolute', left: 0, top: 126, width: 1776, height: 168}}>
          <Panel tone={C.cobalt} watermark={<Stamp size={110} color={C.cobalt} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 18px'}}>
            <PanelTab tone={C.cobalt} icon={<Stamp size={24} color={C.porcelain} strokeWidth={2.2} />}>婚姻关系的成立 · 登记与补办</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', gap: 14, flex: 1}}>
              <Chip tone={C.cobalt} toneBg={C.cobaltPale} ink={C.cobalt}><Landmark size={22} color={C.cobalt} strokeWidth={2.2} />办理<Under color={C.cobalt} delay={120}>结婚登记</Under>并取得结婚证 → 确立婚姻关系</Chip>
              <span style={{fontSize: 22, fontWeight: 900, color: C.goldPale}}>补办登记 →</span>
              <Chip tone={C.jade} toneBg={C.jadePale} ink={C.jade}>效力追溯至双方均符合<Soft color={C.jade}>实质要件</Soft>之时</Chip>
              <Chip tone={C.gold} toneBg={C.goldPale} ink={C.gold}>甲23岁乙19岁同居，2018年补办 → 追溯至乙<span style={{fontSize: 28, fontWeight: 950}}>满20周岁</span>时</Chip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={90} from="up" marker="bigamy-void-seal" style={{position: 'absolute', left: 0, top: 308, width: 574, height: 460}}>
          <Panel tone={C.vermilion} watermark={<Ban size={120} color={C.vermilion} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 16px'}}>
            <PanelTab tone={C.vermilion} icon={<Ban size={24} color={C.porcelain} strokeWidth={2.2} />}>无效事由① 重婚</PanelTab>
            <IconChip icon={<Ban size={24} color={C.porcelain} strokeWidth={2.2} />} tone={C.vermilion} title="规则：" style={{flex: 1}}>
              有配偶者与他人结婚，其<Soft color={C.vermilion}>第二个婚姻</Soft>认定为<Seal delay={160} size={21}>无效</Seal>——第一个婚姻不受影响
            </IconChip>
            <IconChip icon={<Hourglass size={24} color={C.porcelain} strokeWidth={2.2} />} tone={C.cobalt} title="不可补正：" style={{flex: 1}}>
              重婚后，合法婚姻当事人已经<Soft color={C.cobalt}>离婚</Soft>或者配偶已经<Soft color={C.cobalt}>死亡</Soft>的，第二个婚姻<Seal delay={200} size={20}>依然无效</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={120} from="up" marker="forbidden-kin-seal" style={{position: 'absolute', left: 588, top: 308, width: 600, height: 460}}>
          <Panel tone={C.cobalt} watermark={<Users size={120} color={C.cobalt} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 16px'}}>
            <PanelTab tone={C.cobalt} icon={<Users size={24} color={C.porcelain} strokeWidth={2.2} />}>无效事由② 禁止结婚的亲属关系</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880}}><Soft color={C.vermilion}>直系血亲</Soft>、<Soft color={C.vermilion}>三代以内旁系血亲</Soft>结婚 → <Seal delay={200} size={20}>无效</Seal></div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 4, flex: 1, justifyContent: 'center'}}>
              <span style={{fontSize: 22, fontWeight: 880}}><Chip tone={C.cobalt} toneBg={C.cobaltPale} ink={C.cobalt}>同源父母</Chip> 兄弟姐妹 → 二代旁系 · 禁止</span>
              <span style={{fontSize: 22, fontWeight: 880}}><Chip tone={C.cobalt} toneBg={C.cobaltPale} ink={C.cobalt}>同源祖父母</Chip> 堂/表兄妹 → 三代旁系 · 禁止</span>
              <span style={{fontSize: 22, fontWeight: 880}}><Chip tone={C.jade} toneBg={C.jadePale} ink={C.jade}>同源曾祖父母</Chip> → 四代旁系 · <Soft color={C.jade}>允许结婚</Soft></span>
            </div>
            <div style={{fontSize: 22, fontWeight: 900, color: C.ironSoft}}>推算：自己算第一代，从同源祖先起算</div>
          </Panel>
        </Enter>
        <Enter delay={150} from="up" marker="underage-healable-seal" style={{position: 'absolute', left: 1202, top: 308, width: 574, height: 460}}>
          <Panel tone={C.jade} watermark={<Hourglass size={120} color={C.jade} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 16px'}}>
            <PanelTab tone={C.jade} icon={<Hourglass size={24} color={C.porcelain} strokeWidth={2.2} />}>无效事由③ 未到法定婚龄</PanelTab>
            <IconChip icon={<Hourglass size={24} color={C.porcelain} strokeWidth={2.2} />} tone={C.cobalt} title="申请时规则：" style={{flex: 1}}>
              以「结婚时一方未达婚龄」申请无效，若申请时该方<Soft color={C.jade}>已达婚龄</Soft> → 法院<Seal delay={220} size={20} tone={C.jade}>不予支持</Seal>
            </IconChip>
            <IconChip icon={<Undo2 size={24} color={C.porcelain} strokeWidth={2.2} />} tone={C.jade} title="瑕疵治愈：" style={{flex: 1}}>
              婚龄瑕疵<Soft color={C.jade}>可补正</Soft>——转化为有效婚姻；与重婚、禁止亲属的<Soft color={C.vermilion}>不可补正</Soft>相对
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};


export const InvalidityProcedureScene = () => {
  /* data-final-knowledge="nullity-applicants" data-final-knowledge="hearing-rules" data-final-knowledge="nullity-versus-divorce-order" data-final-knowledge="party-arrangement" */
  return (
    <Shell code="03" kicker="无效婚姻 · 程序规则" title="婚姻无效之诉的程序">
      <div
        data-layout="applicant-lane-with-hearing-rule-fork"
        data-visual-anchor="document-fork"
        data-text-treatments="label-block,chip,thin-underline,soft-highlight"
        data-visual-grammar="only-the-court-hears-nullity-claims-from-parties-or-statutory-interested-persons,nullity-hearing-bars-mediation-and-withdrawal-while-property-and-child-care-may-mediate,the-nullity-case-is-heard-first-and-suspends-the-divorce-case,a-valid-finding-resumes-divorce-while-a-void-finding-ends-it-but-property-and-child-care-continue"
        data-focal-rule="nullity-claims-run-only-to-the-court-and-are-heard-first-suspending-divorce-while-valid-findings-resume-and-void-findings-redirect-to-property-and-child-care"
        data-focal-channels="connector,contrast,icon,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="nullity-applicants" style={{position: 'absolute', left: 0, top: 0, width: 900, height: 560}}>
          <Panel tone={C.cobalt} watermark={<Landmark size={130} color={C.cobalt} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.cobalt} icon={<Landmark size={24} color={C.porcelain} strokeWidth={2.2} />}>申请机关与申请人</PanelTab>
            <IconChip icon={<Landmark size={24} color={C.porcelain} strokeWidth={2.2} />} tone={C.vermilion} title="申请机关：">
              必须且只能向<Soft color={C.vermilion}>法院</Soft>提出
            </IconChip>
            <IconChip icon={<Users size={24} color={C.porcelain} strokeWidth={2.2} />} tone={C.cobalt} title="当事人：" style={{flex: 1}}>
              无效婚姻的<Soft color={C.cobalt}>双方</Soft>当事人
            </IconChip>
            <IconChip icon={<Users size={24} color={C.porcelain} strokeWidth={2.2} />} tone={C.gold} title="法定利害关系人：" style={{flex: 2.1}}>
              以<Under color={C.gold} delay={140}>重婚</Under>为由 → 当事人的<Soft color={C.gold}>近亲属及基层组织</Soft>；以<Under color={C.gold} delay={170}>未到法定婚龄</Under>为由 → 未达婚龄者的<Soft color={C.gold}>近亲属</Soft>；以<Under color={C.gold} delay={200}>禁止结婚的亲属关系</Under>为由 → 当事人的<Soft color={C.gold}>近亲属</Soft>
            </IconChip>
            <IconChip icon={<Hourglass size={24} color={C.porcelain} strokeWidth={2.2} />} tone={C.jade} title="当事人死亡：" style={{flex: 1}}>
              一方或双方死亡后，生存一方或<Soft color={C.jade}>利害关系人</Soft>仍有权请求确认婚姻无效——<Seal delay={220} size={20}>死之前无效</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={44} from="right" marker="hearing-rules" style={{position: 'absolute', left: 914, top: 0, width: 862, height: 268}}>
          <Panel tone={C.jade} watermark={<Gavel size={110} color={C.jade} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.jade} icon={<Gavel size={24} color={C.porcelain} strokeWidth={2.2} />}>审理规则 · 一分为二</PanelTab>
            <div style={{display: 'flex', gap: 12, flex: 1}}>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 6, backgroundColor: C.porcelainDim, borderLeft: `6px solid ${C.vermilion}`, padding: '8px 12px'}}>
                <span style={{fontSize: 23, fontWeight: 950, color: C.vermilion}}>婚姻效力认定</span>
                <span style={{fontSize: 22, fontWeight: 880}}><Ban size={20} color={C.vermilion} strokeWidth={2.6} /> <Soft color={C.vermilion}>不适用</Soft>调解</span>
                <span style={{fontSize: 22, fontWeight: 880}}><Ban size={20} color={C.vermilion} strokeWidth={2.6} /> <Soft color={C.vermilion}>不得</Soft>撤诉</span>
              </div>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 6, backgroundColor: C.porcelainDim, borderLeft: `6px solid ${C.jade}`, padding: '8px 12px'}}>
                <span style={{fontSize: 23, fontWeight: 950, color: C.jade}}>财产分割 · 子女抚养</span>
                <span style={{fontSize: 22, fontWeight: 880}}>可以<Soft color={C.jade}>调解</Soft></span>
              </div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={80} from="right" marker="nullity-versus-divorce-order" style={{position: 'absolute', left: 914, top: 282, width: 862, height: 278}}>
          <Panel tone={C.gold} watermark={<Split size={110} color={C.gold} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.gold} icon={<Split size={24} color={C.porcelain} strokeWidth={2.2} />}>无效之诉 与 离婚之诉 · 先后顺序</PanelTab>
            <IconChip icon={<Split size={24} color={C.porcelain} strokeWidth={2.2} />} tone={C.gold} title="分别受理：">
              法院应将离婚案件<Soft color={C.gold}>中止审理</Soft>，先行审理<Soft color={C.vermilion}>婚姻无效</Soft>之诉
            </IconChip>
            <IconChip icon={<Undo2 size={24} color={C.porcelain} strokeWidth={2.2} />} tone={C.jade} title="认定有效：">
              <Seal delay={200} size={20} tone={C.jade}>继续审理</Seal>离婚案件
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.porcelain} strokeWidth={2.2} />} tone={C.vermilion} title="认定无效：">
              离婚案件<Soft color={C.vermilion}>不再审理</Soft>；但涉及<Soft color={C.jade}>财产分割</Soft>和<Soft color={C.jade}>子女抚养</Soft>的，该部分<Under color={C.jade} delay={260}>继续审理</Under>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={260} from="up" marker="party-arrangement" style={{position: 'absolute', left: 0, top: 574, width: 1776, height: 194}}>
          <Panel tone={C.cobalt} watermark={<Users size={110} color={C.cobalt} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.cobalt} icon={<Users size={24} color={C.porcelain} strokeWidth={2.2} />}>当事人排列</PanelTab>
            <div style={{display: 'flex', gap: 14, flex: 1, alignItems: 'center'}}>
              <IconChip icon={<Users size={24} color={C.porcelain} strokeWidth={2.2} />} tone={C.cobalt} title="利害关系人起诉：" style={{flex: 1.1}}>
                利害关系人为<Soft color={C.cobalt}>原告</Soft>，婚姻关系当事人双方列为<Soft color={C.cobalt}>被告</Soft>；一方死亡 → 生存一方列为被告
              </IconChip>
              <IconChip icon={<Landmark size={24} color={C.porcelain} strokeWidth={2.2} />} tone={C.vermilion} title="重婚涉及财产：" style={{flex: 1}}>
                准许<Soft color={C.vermilion}>合法婚姻</Soft>当事人作为有<Soft color={C.vermilion}>独立请求权</Soft>的第三人参加诉讼
              </IconChip>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};


export const RevocableMarriageScene = () => {
  /* data-final-knowledge="revocation-grounds-and-holder" data-final-knowledge="duress-countdown" data-final-knowledge="concealment-countdown" data-final-knowledge="invalidity-aftermath" */
  return (
    <Shell code="04" kicker="可撤销婚姻 · 后果" title="可撤销婚姻与无效后果">
      <div
        data-layout="twin-revocation-columns-with-aftermath-strip"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,stamp,chip,soft-highlight"
        data-visual-grammar="duress-and-concealed-serious-illness-are-the-only-revocable-defects,the-duressed-year-runs-from-coercion-end-and-escapes-the-five-year-cap,the-concealed-illness-year-runs-from-knowledge-and-dies-after-five-years,void-or-revoked-marriages-divide-property-favoring-the-innocent-spouse-with-damages"
        data-focal-rule="only-duress-and-concealed-illness-revoke-a-marriage-and-their-countdowns-differ-on-both-start-point-and-five-year-cap"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 96}}>
          <Panel tone={C.vermilion} watermark={<Undo2 size={100} color={C.vermilion} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '10px 18px'}}>
            <PanelTab tone={C.vermilion} icon={<Undo2 size={24} color={C.porcelain} strokeWidth={2.2} />}>可撤销婚姻 · 仅两项事由</PanelTab>
            <Chip tone={C.vermilion} toneBg={C.vermilionPale} ink={C.vermilion}>① 受<Under color={C.vermilion} delay={110}>胁迫</Under>（含被限制人身自由）</Chip>
            <Chip tone={C.cobalt} toneBg={C.cobaltPale} ink={C.cobalt}>② 一方患<Under color={C.cobalt} delay={140}>重大疾病</Under>，登记前未如实告知（消极隐瞒）</Chip>
            <Chip tone={C.gold} toneBg={C.goldPale} ink={C.gold}>撤销权人：受胁迫方 / 被隐瞒方　·　只能向法院申请</Chip>
          </Panel>
        </Enter>
        <Enter delay={40} from="left" marker="duress-countdown" style={{position: 'absolute', left: 0, top: 110, width: 866, height: 330}}>
          <Panel tone={C.vermilion} watermark={<Hourglass size={120} color={C.vermilion} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.vermilion} icon={<Hourglass size={24} color={C.porcelain} strokeWidth={2.2} />}>胁迫 · 撤销期间</PanelTab>
            <IconChip icon={<Hourglass size={24} color={C.porcelain} strokeWidth={2.2} />} tone={C.vermilion} title="起算与长度：" style={{flex: 1}}>
              胁迫行为<Soft color={C.vermilion}>终止之日</Soft>起<span style={{fontSize: 30, fontWeight: 950, color: C.vermilion}}>1年</span>内；被非法限制人身自由的，自<Soft color={C.vermilion}>恢复人身自由</Soft>之日起<span style={{fontSize: 30, fontWeight: 950, color: C.vermilion}}>1年</span>内
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.porcelain} strokeWidth={2.2} />} tone={C.jade} title="特殊排除：" style={{flex: 0.9}}>
              被胁迫方的撤销权<Under color={C.jade} delay={180}>不适用</Under>「自结婚登记之日起5年内行使」的限制——登记后5年未行使<Seal delay={220} size={20} tone={C.jade}>不消灭</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={70} from="right" marker="concealment-countdown" style={{position: 'absolute', left: 910, top: 110, width: 866, height: 330}}>
          <Panel tone={C.cobalt} watermark={<Hourglass size={120} color={C.cobalt} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.cobalt} icon={<Hourglass size={24} color={C.porcelain} strokeWidth={2.2} />}>隐瞒重大疾病 · 撤销期间</PanelTab>
            <IconChip icon={<Hourglass size={24} color={C.porcelain} strokeWidth={2.2} />} tone={C.cobalt} title="起算与长度：" style={{flex: 1}}>
              自<Soft color={C.cobalt}>知道</Soft>或者<Soft color={C.cobalt}>应当知道</Soft>撤销事由之日起<span style={{fontSize: 30, fontWeight: 950, color: C.cobalt}}>1年</span>内
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.porcelain} strokeWidth={2.2} />} tone={C.vermilion} title="最长除斥期间：" style={{flex: 0.9}}>
              自办理<Soft color={C.cobalt}>结婚登记</Soft>之日起<span style={{fontSize: 30, fontWeight: 950, color: C.vermilion}}>5年</span>内未行使的，撤销权<Seal delay={220} size={20}>消灭</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={110} from="up" style={{position: 'absolute', left: 0, top: 454, width: 1776, height: 118}}>
          <Panel tone={C.gold} watermark={<Landmark size={100} color={C.gold} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 5, padding: '10px 18px'}}>
            <PanelTab tone={C.gold} icon={<Landmark size={22} color={C.porcelain} strokeWidth={2.2} />}>登记程序瑕疵 · 冒名顶替</PanelTab>
            <div style={{fontSize: 22, fontWeight: 880}}>让双胞胎弟弟冒充办理结婚登记 → 性质<Soft color={C.gold}>不属于</Soft>可撤销婚姻的法定事由，婚姻<Soft color={C.jade}>有效</Soft>；主张撤销登记的，法院告知其依法申请行政<Under color={C.cobalt} delay={200}>复议</Under>或者提起行政<Under color={C.cobalt} delay={230}>诉讼</Under></div>
          </Panel>
        </Enter>
        <Enter delay={170} from="up" marker="invalidity-aftermath" style={{position: 'absolute', left: 0, top: 586, width: 1776, height: 182}}>
          <Panel tone={C.cobalt} watermark={<Coins size={110} color={C.cobalt} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 18px'}}>
            <PanelTab tone={C.cobalt} icon={<Coins size={24} color={C.porcelain} strokeWidth={2.2} />}>婚姻无效、被撤销的后果</PanelTab>
            <div style={{display: 'flex', gap: 14, flex: 1, alignItems: 'center'}}>
              <IconChip icon={<Coins size={24} color={C.porcelain} strokeWidth={2.2} />} tone={C.cobalt} title="财产分割：" style={{flex: 1.1}}>
                同居期间所得财产无约定的，按照顾<Soft color={C.cobalt}>无过错方</Soft>的原则分割
              </IconChip>
              <IconChip icon={<Heart size={24} color={C.porcelain} strokeWidth={2.2} />} tone={C.vermilion} title="重婚特殊保护：" style={{flex: 1.1}}>
                不得侵害<Soft color={C.vermilion}>合法婚姻</Soft>当事人的财产权益
              </IconChip>
              <IconChip icon={<Gavel size={24} color={C.porcelain} strokeWidth={2.2} />} tone={C.gold} title="赔偿损失：" style={{flex: 0.9}}>
                <Soft color={C.gold}>无过错方</Soft>有权请求过错方<Under color={C.gold} delay={260}>损害赔偿</Under>
              </IconChip>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};


