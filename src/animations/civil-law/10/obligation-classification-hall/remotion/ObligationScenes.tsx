import type {CSSProperties, ReactNode} from 'react';
import {Ban, Coins, Gavel, GitFork, Handshake, Link, PieChart, Scale, ScrollText} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  malachite: '#173F35',
  malachiteMid: '#245A4C',
  cream: '#F4F1E2',
  creamDim: '#E8E4D0',
  edge: '#C6BFAA',
  threadRed: '#C2453C',
  threadRedPale: '#F1DEDA',
  threadGold: '#C9A227',
  threadGoldPale: '#F0E7C9',
  ice: '#5E8FA8',
  icePale: '#DEEAF1',
  ink: '#232A26',
  inkSoft: '#6C746E',
  indigo: '#3A5578',
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

export const Path = ({color = C.threadGold, delay = 0, span = 20, style}: {readonly color?: string; readonly delay?: number; readonly span?: number; readonly style?: CSSProperties}) => {
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

export const Shell = ({children, code, kicker, title}: {readonly children: ReactNode; readonly code: string; readonly kicker: string; readonly title: string}) => {
  const sceneIndex = Math.max(0, Math.min(2, Number(code) - 1));
  return (
    <AbsoluteFill
      data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
      style={{
        backgroundColor: C.malachite,
        color: C.cream,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `repeating-linear-gradient(0deg, transparent 0 118px, rgba(255, 255, 255, 0.035) 118px 120px), repeating-linear-gradient(90deg, transparent 0 118px, rgba(0, 0, 0, 0.12) 118px 120px)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 12, background: `linear-gradient(90deg, ${C.threadRed}, ${C.threadGold}, ${C.ice})`, opacity: 0.92}} />
      <div style={{position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: '2px solid rgba(232, 228, 208, 0.32)'}} />
      <div style={{position: 'absolute', left: 60, top: 44, padding: '10px 16px', backgroundColor: C.malachiteMid, borderLeft: `8px solid ${C.threadRed}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.cream, letterSpacing: 2}}>民法 · 第10讲 · {code}</span>
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
          borderBottom: `2px solid ${C.threadGold}`,
        }}
      >
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.cream}}>{title}</h1>
        <span style={{fontSize: 22, fontWeight: 850, color: C.threadGoldPale, textAlign: 'right'}}>{kicker}</span>
      </header>
      <div style={{position: 'absolute', right: 64, bottom: 44, display: 'flex', alignItems: 'center', gap: 10, opacity: 0.85}}>
        {[0, 1, 2].map((dot) => (
          <span
            key={dot}
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: dot === sceneIndex ? C.threadRed : 'transparent',
              border: `2px solid ${C.threadRed}`,
            }}
          />
        ))}
      </div>
      <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    </AbsoluteFill>
  );
};

export const Panel = ({children, marker, tone = C.malachiteMid, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.cream, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${tone}`, borderTop: `8px solid ${tone}`, color: C.ink, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(35, 42, 38, 0.35)', ...style}}
  >
    <span style={{position: 'absolute', right: 10, top: 14, width: 26, height: 26, borderTop: `3px solid ${tone}`, borderRight: `3px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 14, bottom: 10, width: 26, height: 26, borderBottom: `3px solid ${tone}`, borderLeft: `3px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.malachiteMid, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.malachiteMid, borderLeft: `6px solid ${tone}`, color: C.cream, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.creamDim, borderLeft: `5px solid ${tone}`, padding: '5px 12px'}}>
    <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 10, backgroundColor: tone, border: `2px solid ${C.cream}`, boxShadow: `0 0 0 2px rgba(201, 162, 39, 0.45)`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.42}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Seal = ({children, delay = 0, size = 22, tone = C.threadRed}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

export const Under = ({children, color = C.threadGold, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

export const Chip = ({children, tone = C.edge, toneBg = C.creamDim, ink = C.ink}: {readonly children: ReactNode; readonly tone?: string; readonly toneBg?: string; readonly ink?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${tone}`, backgroundColor: toneBg, padding: '5px 12px', fontSize: 22, fontWeight: 900, color: ink, whiteSpace: 'nowrap'}}>{children}</span>
);

export const BasisObjectPairsScene = () => {
  /* data-final-knowledge="intended-legal-pair" data-final-knowledge="property-labour-pair" data-final-knowledge="specific-generic-pair" data-final-knowledge="failure-divide" */
  return (
    <Shell code="01" kicker="发生依据 · 标的 · 分类" title="债的分类：依据与标的">
      <div
        data-layout="three-cloth-column-pairs"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="intended-debts-come-from-contracts-and-unilateral-promises,property-debts-may-be-enforced-while-labour-debts-never-are,specific-debts-fail-when-the-thing-perishes-before-performance,generic-debts-never-fail-and-money-is-always-generic"
        data-focal-rule="property-cloth-can-be-seized-while-labour-cloth-and-generic-cloth-survive-loss"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="intended-legal-pair" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 210}}>
          <Panel tone={C.threadGold} watermark={<Handshake size={130} color={C.threadGold} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.threadGold} icon={<Handshake size={24} color={C.cream} strokeWidth={2.2} />}>按发生依据 · 意定 vs 法定</PanelTab>
            <IconChip icon={<Handshake size={24} color={C.cream} strokeWidth={2.2} />} tone={C.threadGold} title="意定之债：">
              内容由当事人<Soft color={C.threadGold}>自主决定</Soft>——<Soft color={C.threadGold}>合同</Soft>之债·<Soft color={C.threadGold}>单方允诺</Soft>之债（悬赏广告）
            </IconChip>
            <IconChip icon={<Gavel size={24} color={C.cream} strokeWidth={2.2} />} tone={C.indigo} title="法定之债：">
              内容由法律<Soft color={C.indigo}>直接规定</Soft>——<Soft color={C.indigo}>不当得利·无因管理·侵权</Soft>之债
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={30} from="right" marker="property-labour-pair" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 210}}>
          <Panel tone={C.threadRed} watermark={<Coins size={130} color={C.threadRed} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.threadRed} icon={<Coins size={24} color={C.cream} strokeWidth={2.2} />}>按给付标的 · 财物 vs 劳务</PanelTab>
            <IconChip icon={<Coins size={24} color={C.cream} strokeWidth={2.2} />} tone={C.threadRed} title="财物之债：">
              「付出财物」或「付出权利」——买卖·侵权·不当得利之债
            </IconChip>
            <IconChip icon={<Scale size={24} color={C.cream} strokeWidth={2.2} />} tone={C.indigo} title="劳务之债：">
              「付出劳务」——委托·行纪·中介合同之债
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={60} from="up" style={{position: 'absolute', left: 0, top: 226, width: 1776, height: 120}}>
          <Panel tone={C.indigo} watermark={<Gavel size={120} color={C.indigo} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '9px 18px'}}>
            <PanelTab tone={C.indigo} icon={<Gavel size={24} color={C.cream} strokeWidth={2.2} />}>区分意义 · 执行力</PanelTab>
            <span style={{fontSize: 22, fontWeight: 900, color: C.ink }}>财物之债存在<Soft color={C.threadRed}>强制执行</Soft>的可能；劳务之债涉及<Soft color={C.indigo}>人身自由</Soft>——<Seal delay={140} size={19} tone={C.indigo}>不可能强制执行</Seal></span>
          </Panel>
        </Enter>
        <Enter delay={100} from="up" marker="specific-generic-pair" style={{position: 'absolute', left: 0, top: 362, width: 1776, height: 406}}>
          <Panel tone={C.threadGold} watermark={<Scale size={150} color={C.threadGold} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 20px'}}>
            <PanelTab tone={C.threadGold} icon={<Scale size={24} color={C.cream} strokeWidth={2.2} />}>财物之债再分 · 特定 vs 种类</PanelTab>
            <div style={{display: 'flex', gap: 14}}>
              <IconChip icon={<Scale size={24} color={C.cream} strokeWidth={2.2} />} tone={C.threadRed} title="特定之债：">
                可确定标的是「<Soft color={C.threadRed}>哪一个</Soft>」——履行前标的物毁损灭失 → 发生<Soft color={C.threadRed}>履行不能</Soft>·继续履行义务<Soft color={C.threadRed}>免除</Soft>
              </IconChip>
              <IconChip icon={<Coins size={24} color={C.cream} strokeWidth={2.2} />} tone={C.indigo} title="种类之债：">
                <Soft color={C.indigo}>不能确定</Soft>是「哪一个」——<Soft color={C.indigo}>不会发生</Soft>履行不能·继续履行义务<Under color={C.indigo} delay={170}>不得免除</Under>
              </IconChip>
            </div>
            <div data-final-knowledge="failure-divide" style={{display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center'}}>
              <Chip tone={C.threadRed} toneBg={C.threadRedPale}><span style={{fontSize: 21, fontWeight: 950, color: C.threadRed }}>毁损灭失 → 特定＝履行不能</span></Chip>
              <Chip tone={C.indigo} toneBg={C.indigoPale}><span style={{fontSize: 21, fontWeight: 950, color: C.indigo }}>种类＝照常履行</span></Chip>
              <Chip tone={C.threadGold} toneBg={C.threadGoldPale}><span style={{fontSize: 21, fontWeight: 950, color: C.threadGold }}>提示：劳务之债无此区分 · 钱永远是种类之债</span></Chip>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft }}>口诀：意定<Soft color={C.threadGold}>约定</Soft>法定<Soft color={C.indigo}>规定</Soft>·财物可<Soft color={C.threadRed}>强执</Soft>劳务不可——特定<Soft color={C.threadRed}>灭即免</Soft>·种类<Soft color={C.indigo}>永不免</Soft></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const JointShareForkScene = () => {
  /* data-final-knowledge="single-majority-rule" data-final-knowledge="joint-ledger" data-final-knowledge="release-rule" data-final-knowledge="share-rule" */
  return (
    <Shell code="02" kicker="多数人之债 · 连带与按份" title="连带之债与按份之债">
      <div
        data-layout="joint-share-fork-with-recovery-loops"
        data-visual-anchor="document-fork"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="joint-creditors-split-actual-recovery-by-internal-shares,over-performing-joint-debtors-take-the-creditors-rights-and-recourse,creditor-security-ranks-ahead-of-recourse-security-when-they-coexist,release-of-one-joint-debtor-lifts-his-share-from-the-others"
        data-focal-rule="the-over-performer-wears-the-creditors-crown-but-his-gold-recourse-ranks-second"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="single-majority-rule" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 106}}>
          <Panel tone={C.malachiteMid} watermark={<GitFork size={110} color={C.malachiteMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '9px 18px'}}>
            <PanelTab tone={C.malachiteMid} icon={<GitFork size={24} color={C.cream} strokeWidth={2.2} />}>单一 vs 多数 · 共同名义例外</PanelTab>
            <span style={{fontSize: 22, fontWeight: 900, color: C.ink }}>双方均 1 人＝单一之债；一方或双方 2 人以上＝多数人之债——以「<Soft color={C.indigo}>共同名义</Soft>」（名称·商号）订约 → 认定<Seal delay={140} size={19} tone={C.indigo}>单一之债</Seal>（阳光料理案）</span>
          </Panel>
        </Enter>
        <Enter delay={40} from="left" marker="joint-ledger" style={{position: 'absolute', left: 0, top: 122, width: 1776, height: 316}}>
          <Panel tone={C.threadRed} watermark={<Link size={140} color={C.threadRed} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.threadRed} icon={<Link size={24} color={C.cream} strokeWidth={2.2} />}>连带之债 · 每人对外全部（赶走恶龙 成为恶龙）</PanelTab>
            <div style={{display: 'flex', gap: 14}}>
              <IconChip icon={<Coins size={24} color={C.cream} strokeWidth={2.2} />} tone={C.threadGold} title="连带债权：">
                部分债权人<Soft color={C.threadGold}>实际受偿</Soft>部分 → 按内部份额比例向其他债权人<Under color={C.threadGold} delay={140}>分配</Under>
              </IconChip>
              <IconChip icon={<Link size={24} color={C.cream} strokeWidth={2.2} />} tone={C.threadRed} title="连带债务（4:6 负 100 万案）：">
                甲还 100 万 → 对乙享 <Chip tone={C.threadRed} toneBg={C.threadRedPale}><span style={{fontSize: 20, fontWeight: 950, color: C.threadRed }}>60 万追偿权</span></Chip>＋承受张三对乙·李四的<Soft color={C.threadRed}>抵押权</Soft>
              </IconChip>
            </div>
            <div style={{display: 'flex', gap: 14}}>
              <IconChip icon={<Scale size={24} color={C.cream} strokeWidth={2.2} />} tone={C.indigo} title="甲还 80 万时（剩 20 万）：">
                张三对乙·李四的抵押权<Soft color={C.indigo}>先受偿</Soft>·甲的追偿权与抵押权<Soft color={C.threadRed}>后受偿</Soft>——<Under color={C.indigo} delay={200}>债权人担保优先</Under>
              </IconChip>
              <IconChip icon={<Ban size={24} color={C.cream} strokeWidth={2.2} />} tone={C.slateLike} title="抗辩延续：">
                其他连带债务人对债权人的<Soft color={C.slateLike}>抗辩</Soft>，可向超额履行的连带债务人主张
              </IconChip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={90} from="up" marker="release-rule" style={{position: 'absolute', left: 0, top: 454, width: 866, height: 314}}>
          <Panel tone={C.threadGold} watermark={<Handshake size={140} color={C.threadGold} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.threadGold} icon={<Handshake size={24} color={C.cream} strokeWidth={2.2} />}>部分免除 · 带着份额离开</PanelTab>
            <IconChip icon={<Ban size={24} color={C.cream} strokeWidth={2.2} />} tone={C.threadRed} title="免除连带债务人（3:3:4 免甲）：">
              甲应承担份额内 → 其他债务人债务<Soft color={C.threadRed}>消灭</Soft>——乙丙对张三的连带债务剩 <Chip tone={C.threadRed} toneBg={C.threadRedPale}><span style={{fontSize: 21, fontWeight: 950, color: C.threadRed }}>70 万</span></Chip>
            </IconChip>
            <IconChip icon={<Handshake size={24} color={C.cream} strokeWidth={2.2} />} tone={C.indigo} title="免除债务人债务（连带债权人甲免张三）：">
              扣除甲的<Soft color={C.indigo}>份额</Soft> → <Soft color={C.indigo}>不影响</Soft>其他连带债权人——乙丙对张三的连带债权剩 <Chip tone={C.indigo} toneBg={C.indigoPale}><span style={{fontSize: 21, fontWeight: 950, color: C.indigo }}>70 万</span></Chip>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={120} from="right" marker="share-rule" style={{position: 'absolute', left: 910, top: 454, width: 866, height: 314}}>
          <Panel tone={C.indigo} watermark={<PieChart size={140} color={C.indigo} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.indigo} icon={<PieChart size={24} color={C.cream} strokeWidth={2.2} />}>按份之债 · 各按份额</PanelTab>
            <IconChip icon={<PieChart size={24} color={C.cream} strokeWidth={2.2} />} tone={C.indigo} title="定义：">
              按份债权人或按份债务人，按照自己的<Soft color={C.indigo}>份额</Soft>对外享有债权、承担债务
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.cream} strokeWidth={2.2} />} tone={C.threadRed} title="内部规则：">
              多数人一方内部<Soft color={C.threadRed}>不存在</Soft>分配或者追偿的问题
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft }}>口诀：连带<Soft color={C.threadRed}>外全内追</Soft>·按份<Soft color={C.indigo}>各管各段</Soft>——免除<Soft color={C.threadGold}>带份额离开</Soft></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const SimpleChoiceLoomScene = () => {
  /* data-final-knowledge="simple-choice-divide" data-final-knowledge="pick-ladder" data-final-knowledge="notice-fix-rule" data-final-knowledge="impossibility-rule" */
  return (
    <Shell code="03" kicker="简单之债 vs 选择之债" title="简单之债与选择之债">
      <div
        data-layout="choice-loom-with-sliding-pick"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="simple-debts-have-one-target-while-choice-debts-have-quality-different-targets,the-pick-defaults-to-the-debtor-and-slides-to-the-other-after-cure,notice-fixes-the-target-and-it-cannot-change-without-consent,impossible-options-are-unpickable-unless-the-other-party-caused-it"
        data-focal-rule="the-choice-pick-starts-in-the-debtors-hand-and-slides-to-the-other-side-after-hesitation"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="simple-choice-divide" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 236}}>
          <Panel tone={C.threadGold} watermark={<GitFork size={130} color={C.threadGold} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.threadGold} icon={<GitFork size={24} color={C.cream} strokeWidth={2.2} />}>简单 vs 选择 · 分界线</PanelTab>
            <IconChip icon={<ScrollText size={24} color={C.cream} strokeWidth={2.2} />} tone={C.slateLike} title="简单之债：">
              只有<Soft color={C.slateLike}>一种标的</Soft>——别无选择，否则构成<Soft color={C.crimsonLike}>不履行</Soft>
            </IconChip>
            <IconChip icon={<GitFork size={24} color={C.cream} strokeWidth={2.2} />} tone={C.indigo} title="选择之债：">
              存在<Soft color={C.indigo}>多种标的</Soft>供选择——履行任何一种即构成履行
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 21, fontWeight: 900, color: C.inkSoft }}>标的须有「<Soft color={C.indigo}>质</Soft>」的不同——仅「量」的灵活＝<Soft color={C.slateLike}>简单之债</Soft></div>
          </Panel>
        </Enter>
        <Enter delay={34} from="right" marker="pick-ladder" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 236}}>
          <Panel tone={C.indigo} watermark={<GitFork size={130} color={C.indigo} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.indigo} icon={<GitFork size={24} color={C.cream} strokeWidth={2.2} />}>选择权 · 三阶归属</PanelTab>
            <IconChip icon={<GitFork size={24} color={C.cream} strokeWidth={2.2} />} tone={C.indigo} title="① 默认归属：">
              未约定或约定不明 → 归<Soft color={C.indigo}>债务人</Soft>（「<Soft color={C.threadGold}>给啥要啥</Soft>」——给付选项的一方择便履行）
            </IconChip>
            <IconChip icon={<Coins size={24} color={C.cream} strokeWidth={2.2} />} tone={C.threadRed} title="② 催告转移：">
              逾期未选·经催告后合理期限内仍未选 → 选择权转移至<Soft color={C.threadRed}>对方</Soft>（手机 A 或电脑 B 案：甲不选 → 归乙）
            </IconChip>
            <IconChip icon={<Handshake size={24} color={C.cream} strokeWidth={2.2} />} tone={C.threadGold} title="③ 确定即锁：">
              通知<Soft color={C.threadGold}>到达</Soft>对方时标的确定——非经对方同意<Under color={C.threadGold} delay={170}>不得变更</Under>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={80} from="up" marker="notice-fix-rule" style={{position: 'absolute', left: 0, top: 252, width: 1776, height: 118}}>
          <Panel tone={C.malachiteMid} watermark={<GitFork size={110} color={C.malachiteMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '9px 18px'}}>
            <PanelTab tone={C.malachiteMid} icon={<GitFork size={24} color={C.cream} strokeWidth={2.2} />}>织机定格 · 选择权滑道</PanelTab>
            <div style={{position: 'relative', flex: 1, height: 62}}>
              <Chip tone={C.indigo} toneBg={C.indigoPale}><span style={{fontSize: 21, fontWeight: 950, color: C.indigo }}>债务人手中</span></Chip>
              <Path color={C.threadGold} delay={100} span={22} style={{position: 'absolute', left: 210, top: 28, width: 300, height: 4}} />
              <Mover delay={106} span={24} fromX={0} toX={300} fadeAt={172} style={{position: 'absolute', left: 16, top: 14, zIndex: 2}}>
                <Chip tone={C.threadGold} toneBg={C.threadGoldPale}><GitFork size={20} color={C.threadGold} strokeWidth={2.4} /><span style={{fontSize: 21, fontWeight: 950, color: C.threadGold }}>选择权</span></Chip>
              </Mover>
              <div style={{position: 'absolute', left: 530, top: 16}}>
                <Chip tone={C.threadRed} toneBg={C.threadRedPale}><span style={{fontSize: 21, fontWeight: 950, color: C.threadRed }}>催告仍不选 → 滑向对方</span></Chip>
              </div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={120} from="up" marker="impossibility-rule" style={{position: 'absolute', left: 0, top: 386, width: 1776, height: 382}}>
          <Panel tone={C.crimsonLike} watermark={<Ban size={150} color={C.crimsonLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 20px'}}>
            <PanelTab tone={C.crimsonLike} icon={<Ban size={24} color={C.cream} strokeWidth={2.2} />}>选择之债的履行不能 · 手机 A 或电脑 B 案</PanelTab>
            <div style={{display: 'flex', gap: 14}}>
              <IconChip icon={<Ban size={24} color={C.cream} strokeWidth={2.2} />} tone={C.crimsonLike} title="原则：">
                标的中发生不能履行的 → 享选择权一方<Seal delay={170} size={18}>不得选择</Seal>该不能标的（电脑 B 因<Soft color={C.indigo}>洪水</Soft>毁损 → 乙不能选 B）
              </IconChip>
              <IconChip icon={<Gavel size={24} color={C.cream} strokeWidth={2.2} />} tone={C.threadRed} title="例外（拒绝就范）：">
                不能履行由<Soft color={C.threadRed}>对方造成</Soft> → 可以选择（电脑 B 因<Soft color={C.threadRed}>甲保管不善</Soft>毁损 → 乙能选 B）→ 构成履行不能·双方均有权<Seal delay={220} size={18} tone={C.threadRed}>解除合同</Seal>
              </IconChip>
            </div>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft }}>口诀：选择权<Soft color={C.indigo}>先债后对</Soft>·催告<Soft color={C.threadGold}>滑道</Soft>·确定<Soft color={C.threadRed}>即锁</Soft>——天灾<Soft color={C.indigo}>不可选</Soft>·人祸<Soft color={C.threadRed}>可选而解除</Soft></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
