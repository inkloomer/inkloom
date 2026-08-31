import type {CSSProperties, ReactNode} from 'react';
import {Crown, FileSignature, Gavel, Handshake, Heart, Home, PieChart, Scale, ScrollText, Users, UsersRound} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  turmeric: '#6E5316',
  turmericMid: '#85682A',
  cream: '#F6F2E2',
  creamDim: '#ECE7D2',
  edge: '#C9C2AB',
  indigo: '#3A5578',
  indigoPale: '#DEE6F0',
  seal: '#A3402E',
  sealPale: '#F0DEDA',
  ink: '#2B2718',
  inkSoft: '#71695A',
  slateLike: '#48525C',
  goldLike: '#8C6D2F',
  goldPaleLike: '#EFE3C2',
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

export const Path = ({color = C.turmericMid, delay = 0, span = 20, style}: {readonly color?: string; readonly delay?: number; readonly span?: number; readonly style?: CSSProperties}) => {
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
        backgroundColor: C.turmeric,
        color: C.cream,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `repeating-linear-gradient(0deg, transparent 0 150px, rgba(255, 255, 255, 0.04) 150px 153px), repeating-linear-gradient(90deg, transparent 0 150px, rgba(0, 0, 0, 0.11) 150px 153px)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 12, background: `linear-gradient(90deg, ${C.seal}, ${C.turmericMid}, ${C.indigo})`, opacity: 0.92}} />
      <div style={{position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: '2px solid rgba(236, 231, 210, 0.32)'}} />
      <div style={{position: 'absolute', left: 60, top: 44, padding: '10px 16px', backgroundColor: C.turmericMid, borderLeft: `8px solid ${C.indigo}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.cream, letterSpacing: 2}}>民法 · 第7讲 · {code}</span>
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
          borderBottom: `2px solid ${C.indigo}`,
        }}
      >
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.cream}}>{title}</h1>
        <span style={{fontSize: 22, fontWeight: 850, color: C.indigoPale, textAlign: 'right'}}>{kicker}</span>
      </header>
      <div style={{position: 'absolute', right: 64, bottom: 44, display: 'flex', alignItems: 'center', gap: 10, opacity: 0.85}}>
        {[0, 1, 2].map((dot) => (
          <span
            key={dot}
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: dot === sceneIndex ? C.indigo : 'transparent',
              border: `2px solid ${C.indigo}`,
            }}
          />
        ))}
      </div>
      <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    </AbsoluteFill>
  );
};

export const Panel = ({children, marker, tone = C.turmericMid, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.cream, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${tone}`, color: C.ink, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(43, 39, 24, 0.35)', ...style}}
  >
    <span style={{position: 'absolute', right: 10, top: 10, width: 26, height: 26, borderTop: `3px solid ${tone}`, borderRight: `3px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 14, bottom: 10, width: 26, height: 26, borderBottom: `3px solid ${tone}`, borderLeft: `3px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.turmericMid, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.turmericMid, borderLeft: `6px solid ${tone}`, color: C.cream, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.creamDim, borderLeft: `5px solid ${tone}`, padding: '5px 12px'}}>
    <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 10, backgroundColor: tone, border: `2px solid ${C.cream}`, boxShadow: `0 0 0 2px rgba(58, 85, 120, 0.45)`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.42}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Seal = ({children, delay = 0, size = 22, tone = C.seal}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
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

export const Under = ({children, color = C.indigo, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

export const TwinOwnershipTypesScene = () => {
  /* data-final-knowledge="co-ownership-definition" data-final-knowledge="share-type-limb" data-final-knowledge="joint-type-limb" data-final-knowledge="sorting-rules" */
  return (
    <Shell code="01" kicker="共有概述 · 两大类型" title="按份共有与共同共有">
      <div
        data-layout="twin-ownership-cards-with-sorting-strip"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="co-ownership-shares-one-ownership-of-one-thing-among-two-or-more,share-co-ownership-rests-on-quotas-without-identity-requirements,joint-ownership-rests-on-a-common-relationsuch-as-spouse-or-family,without-agreement-a-common-relation-means-joint-otherwise-by-share"
        data-focal-rule="a-common-relation-makes-joint-ownership-while-everything-else-is-by-share"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="co-ownership-definition" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 106}}>
          <Panel tone={C.turmericMid} watermark={<Users size={110} color={C.turmericMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '9px 18px'}}>
            <PanelTab tone={C.turmericMid} icon={<Users size={24} color={C.cream} strokeWidth={2.2} />}>共有 · 定义</PanelTab>
            <span style={{fontSize: 23, fontWeight: 900, color: C.ink }}>指<Soft color={C.indigo}>2 个</Soft>或以上共有人，对<Soft color={C.indigo}>一个</Soft>共有物，分享<Soft color={C.indigo}>一个</Soft>所有权</span>
          </Panel>
        </Enter>
        <Enter delay={30} from="left" marker="share-type-limb" style={{position: 'absolute', left: 0, top: 122, width: 866, height: 300}}>
          <Panel tone={C.indigo} watermark={<PieChart size={140} color={C.indigo} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.indigo} icon={<PieChart size={24} color={C.cream} strokeWidth={2.2} />}>按份共有</PanelTab>
            <IconChip icon={<PieChart size={24} color={C.cream} strokeWidth={2.2} />} tone={C.indigo} title="含义：">
              共有人根据各自的<Soft color={C.indigo}>共有份额</Soft>所形成的共有
            </IconChip>
            <IconChip icon={<Users size={24} color={C.cream} strokeWidth={2.2} />} tone={C.slateLike} title="产生前提：">
              <Soft color={C.slateLike}>不以</Soft>特定<Soft color={C.slateLike}>身份关系</Soft>为前提
            </IconChip>
            <div style={{display: 'flex', gap: 10}}>
              <Chip tone={C.indigo} toneBg={C.indigoPale}><span style={{fontSize: 21, fontWeight: 950, color: C.indigo }}>共有物 · 属于大家的</span></Chip>
              <Chip tone={C.goldLike} toneBg={C.goldPaleLike}><span style={{fontSize: 21, fontWeight: 950, color: C.goldLike }}>共有份额 · 属于自己的</span></Chip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={60} from="right" marker="joint-type-limb" style={{position: 'absolute', left: 910, top: 122, width: 866, height: 300}}>
          <Panel tone={C.seal} watermark={<UsersRound size={140} color={C.seal} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
            <PanelTab tone={C.seal} icon={<UsersRound size={24} color={C.cream} strokeWidth={2.2} />}>共同共有</PanelTab>
            <IconChip icon={<UsersRound size={24} color={C.cream} strokeWidth={2.2} />} tone={C.seal} title="含义：">
              基于<Soft color={C.seal}>共同关系</Soft>形成、<Soft color={C.seal}>无共有份额</Soft>的共有
            </IconChip>
            <IconChip icon={<Heart size={24} color={C.cream} strokeWidth={2.2} />} tone={C.turmericMid} title="五类口诀「夫家遗伙居」：">
              <Soft color={C.turmericMid}>夫妻 · 家庭 · 遗产继承 · 合伙 · 同居</Soft>关系
            </IconChip>
            <div style={{display: 'flex', gap: 10}}>
              <Chip tone={C.seal} toneBg={C.sealPale}><span style={{fontSize: 21, fontWeight: 950, color: C.seal }}>只存在共有物一种财产</span></Chip>
              <Chip tone={C.seal} toneBg={C.sealPale}><span style={{fontSize: 21, fontWeight: 950, color: C.seal }}>无共有份额概念</span></Chip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={100} from="up" marker="sorting-rules" style={{position: 'absolute', left: 0, top: 438, width: 1776, height: 330}}>
          <Panel tone={C.indigo} watermark={<Scale size={150} color={C.indigo} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 20px'}}>
            <PanelTab tone={C.indigo} icon={<Scale size={24} color={C.cream} strokeWidth={2.2} />}>辨别与份额确定</PanelTab>
            <IconChip icon={<Handshake size={24} color={C.cream} strokeWidth={2.2} />} tone={C.turmericMid} title="首选规则：">
              当事人<Soft color={C.turmericMid}>有约定</Soft>的，从其约定
            </IconChip>
            <div style={{display: 'flex', gap: 14}}>
              <IconChip icon={<UsersRound size={24} color={C.cream} strokeWidth={2.2} />} tone={C.seal} title="无约定时·有共同关系：">
                视为<Soft color={C.seal}>共同共有</Soft>
              </IconChip>
              <IconChip icon={<PieChart size={24} color={C.cream} strokeWidth={2.2} />} tone={C.indigo} title="无共同关系：">
                视为<Soft color={C.indigo}>按份共有</Soft>
              </IconChip>
            </div>
            <div style={{marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', fontSize: 22, fontWeight: 900, color: C.ink }}>
              <span style={{color: C.inkSoft }}>按份共有份额三层递进：</span>
              <Chip tone={C.indigo} toneBg={C.indigoPale}>有约定 → 从约定</Chip>
              <span style={{fontSize: 24, fontWeight: 950, color: C.inkSoft }}>→</span>
              <Chip tone={C.indigo} toneBg={C.indigoPale}>无约定 → 按出资额</Chip>
              <span style={{fontSize: 24, fontWeight: 950, color: C.inkSoft }}>→</span>
              <Chip tone={C.seal} toneBg={C.sealPale}><span style={{fontSize: 22, fontWeight: 950, color: C.seal }}>出资额无法确定 → 视为等额</span></Chip>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const InternalRelationsScene = () => {
  /* data-final-knowledge="disposal-chain" data-final-knowledge="unauthorised-chain" data-final-knowledge="share-transfer-chain" data-final-knowledge="priority-limits" */
  return (
    <Shell code="02" kicker="内部关系 · 处分与份额转让" title="共有的内部关系">
      <div
        data-layout="disposal-and-share-transfer-chains"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="disposal-needs-two-thirds-consent-by-share-or-unanimous-consent-jointly,unauthorised-disposal-is-unauthorised-with-a-valid-contract,share-transfer-needs-no-consent-yet-triggers-the-outward-priority-right,priority-fails-inward-or-on-inheritance-and-exercise-follows-quotas"
        data-focal-rule="a-share-chip-leaves-freely-outward-but-meets-the-priority-crown-at-the-gate"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="disposal-chain" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 116}}>
          <Panel tone={C.turmericMid} watermark={<Scale size={110} color={C.turmericMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 14, padding: '9px 18px'}}>
            <PanelTab tone={C.turmericMid} icon={<Scale size={24} color={C.cream} strokeWidth={2.2} />}>处分·重大修缮·变更性质或用途</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
              <Chip tone={C.indigo} toneBg={C.indigoPale}><PieChart size={22} color={C.indigo} strokeWidth={2.4} /><span style={{fontSize: 22, fontWeight: 950, color: C.indigo }}>按份：占份额 2/3 以上同意</span></Chip>
              <Chip tone={C.seal} toneBg={C.sealPale}><UsersRound size={22} color={C.seal} strokeWidth={2.4} /><span style={{fontSize: 22, fontWeight: 950, color: C.seal }}>共同：全体同意</span></Chip>
              <span style={{fontSize: 21, fontWeight: 900, color: C.inkSoft }}>有约定从约定｜夫妻日常生活需要：<Soft color={C.turmericMid}>任何一方</Soft>可决定</span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={40} from="left" marker="unauthorised-chain" style={{position: 'absolute', left: 0, top: 132, width: 1776, height: 224}}>
          <Panel tone={C.seal} watermark={<FileSignature size={130} color={C.seal} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.seal} icon={<FileSignature size={24} color={C.cream} strokeWidth={2.2} />}>链条一 · 共有人擅自处分共有物</PanelTab>
            <div style={{position: 'relative', height: 74}}>
              <div style={{position: 'absolute', left: 0, top: 18}}>
                <Chip tone={C.seal} toneBg={C.sealPale}><span style={{fontSize: 22, fontWeight: 950, color: C.seal }}>擅自处分</span></Chip>
              </div>
              <Path color={C.seal} delay={110} span={20} style={{position: 'absolute', left: 150, top: 48, width: 200, height: 4}} />
              <Mover delay={116} span={22} fromX={0} toX={200} fadeAt={176} style={{position: 'absolute', left: 20, top: 18, zIndex: 2}}>
                <Chip tone={C.seal} toneBg={C.sealPale}><span style={{fontSize: 22, fontWeight: 950, color: C.seal }}>擅自处分</span></Chip>
              </Mover>
              <div style={{position: 'absolute', left: 366, top: 12}}><Seal delay={170} size={21}>性质＝无权处分</Seal></div>
              <div style={{position: 'absolute', left: 660, top: 6, display: 'flex', flexDirection: 'column', gap: 4, fontSize: 21, fontWeight: 900, color: C.ink }}>
                <span>① 债权合同<Soft color={C.indigo}>有效</Soft>　② 物权变动：经其他共有人<Soft color={C.indigo}>同意</Soft>或受让人<Soft color={C.indigo}>善意取得</Soft></span>
                <span>③ 此处<Seal delay={200} size={17}>不存在</Seal>按份共有人的优先购买权问题</span>
              </div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={80} from="up" marker="share-transfer-chain" style={{position: 'absolute', left: 0, top: 372, width: 1776, height: 396}}>
          <Panel tone={C.indigo} watermark={<Crown size={140} color={C.indigo} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.indigo} icon={<Crown size={24} color={C.cream} strokeWidth={2.2} />}>链条二 · 按份共有人转让共有份额</PanelTab>
            <div style={{position: 'relative', height: 118}}>
              <div style={{position: 'absolute', left: 0, top: 30}}>
                <Chip tone={C.indigo} toneBg={C.indigoPale}><PieChart size={22} color={C.indigo} strokeWidth={2.4} /><span style={{fontSize: 22, fontWeight: 950, color: C.indigo }}>30% 份额</span></Chip>
              </div>
              <span style={{position: 'absolute', left: 170, top: 34, fontSize: 21, fontWeight: 900, color: C.inkSoft }}>转让<Under color={C.indigo} delay={110}>无需</Under>其他共有人同意＝<Soft color={C.indigo}>有权处分</Soft></span>
              <Path color={C.indigo} delay={150} span={22} style={{position: 'absolute', left: 660, top: 62, width: 420, height: 4}} />
              <Mover delay={156} span={24} fromX={0} toX={420} fadeAt={226} style={{position: 'absolute', left: 20, top: 30, zIndex: 2}}>
                <Chip tone={C.indigo} toneBg={C.indigoPale}><PieChart size={22} color={C.indigo} strokeWidth={2.4} /><span style={{fontSize: 22, fontWeight: 950, color: C.indigo }}>30% 份额</span></Chip>
              </Mover>
              <div style={{position: 'absolute', left: 1096, top: 8, border: `3px solid ${C.turmericMid}`, borderRadius: 12, padding: '8px 16px', backgroundColor: C.paper, boxShadow: '0 0 16px rgba(133, 104, 42, 0.3)'}}>
                <span style={{fontSize: 22, fontWeight: 950, color: C.turmericMid }}><Crown size={22} color={C.turmericMid} strokeWidth={2.4} /> 对外转让 → 优先购买权</span>
              </div>
              <div style={{position: 'absolute', left: 1096, top: 66, fontSize: 21, fontWeight: 900, color: C.inkSoft }}>其他共有人可主张<Soft color={C.turmericMid}>优先购买</Soft></div>
            </div>
            <div data-final-knowledge="priority-limits" style={{display: 'flex', gap: 12, flexWrap: 'wrap'}}>
              <Chip tone={C.seal} toneBg={C.sealPale}><span style={{fontSize: 21, fontWeight: 950, color: C.seal }}>排除① 对内转让 → 不得主张</span></Chip>
              <Chip tone={C.seal} toneBg={C.sealPale}><span style={{fontSize: 21, fontWeight: 950, color: C.seal }}>排除② 继承·遗赠 → 不得主张</span></Chip>
              <Chip tone={C.indigo} toneBg={C.indigoPale}><span style={{fontSize: 21, fontWeight: 950, color: C.indigo }}>前提：同等条件</span></Chip>
              <Chip tone={C.indigo} toneBg={C.indigoPale}><span style={{fontSize: 21, fontWeight: 950, color: C.indigo }}>2 人以上协商不成 → 按共有份额比例行使（3/7＋4/7 按份受让）</span></Chip>
            </div>
            <div style={{marginTop: 'auto', display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', fontSize: 21, fontWeight: 900, color: C.ink }}>
              <span style={{color: C.inkSoft }}>侵害优先购买权的后果：</span>
              <span>其他共有人可请求<Soft color={C.seal}>赔偿损失</Soft></span>
              <span>但<Seal delay={230} size={17}>不得主张</Seal>份额转让合同<Soft color={C.seal}>无效</Soft></span>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const CaseForkExternalScene = () => {
  /* data-final-knowledge="house-verdicts" data-final-knowledge="share-verdicts" data-final-knowledge="external-joint-rule" data-final-knowledge="comparison-strip" */
  return (
    <Shell code="03" kicker="3:3:4 案 · 外部关系" title="案例分叉与外部关系">
      <div
        data-layout="case-fork-with-joint-liability-strip"
        data-visual-anchor="document-fork"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="the-house-question-forks-into-unauthorised-disposal-and-good-faith,the-share-question-forks-into-free-transfer-and-priority-right,creditors-and-debtors-of-the-owned-thing-are-joint,the-external-relation-binds-every-co-owner-together"
        data-focal-rule="one-board-two-forks-house-sales-need-good-faith-while-share-sales-are-free-but-crowned"
        data-focal-channels="connector,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 106}}>
          <Panel tone={C.turmericMid} watermark={<PieChart size={110} color={C.turmericMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '9px 18px'}}>
            <PanelTab tone={C.turmericMid} icon={<PieChart size={24} color={C.cream} strokeWidth={2.2} />}>案例棋局</PanelTab>
            <span style={{fontSize: 23, fontWeight: 900, color: C.ink }}>甲、乙、丙<Soft color={C.indigo}>按 3:3:4</Soft> 共有房屋 A——甲的两步棋各自走向何方？</span>
            <div style={{marginLeft: 'auto', display: 'flex', gap: 8}}>
              <Chip tone={C.indigo} toneBg={C.indigoPale}><span style={{fontSize: 20, fontWeight: 950, color: C.indigo }}>甲 3/10</span></Chip>
              <Chip tone={C.indigo} toneBg={C.indigoPale}><span style={{fontSize: 20, fontWeight: 950, color: C.indigo }}>乙 3/10</span></Chip>
              <Chip tone={C.indigo} toneBg={C.indigoPale}><span style={{fontSize: 20, fontWeight: 950, color: C.indigo }}>丙 4/10</span></Chip>
            </div>
          </Panel>
        </Enter>
        <div style={{position: 'absolute', left: 0, top: 122, width: 1776, height: 424}}>
          <Enter delay={36} from="left" marker="house-verdicts" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 424}}>
            <Panel tone={C.seal} watermark={<Home size={140} color={C.seal} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
              <PanelTab tone={C.seal} icon={<Home size={24} color={C.cream} strokeWidth={2.2} />}>问① 甲未经乙丙同意·将房屋 A 卖给丁</PanelTab>
              <IconChip icon={<FileSignature size={24} color={C.cream} strokeWidth={2.2} />} tone={C.seal} title="① 丁能否取得所有权：">
                <Soft color={C.seal}>不一定</Soft>——擅自处分共有物＝<Soft color={C.seal}>无权处分</Soft>，丁需符合<Soft color={C.indigo}>善意取得</Soft>方可拿房
              </IconChip>
              <IconChip icon={<Crown size={24} color={C.cream} strokeWidth={2.2} />} tone={C.slateLike} title="② 乙丙有无优先购买权：">
                <Seal delay={170} size={20}>否</Seal>——处分<Soft color={C.slateLike}>共有物</Soft>时，不适用份额优先购买权
              </IconChip>
              <div style={{marginTop: 'auto', fontSize: 21, fontWeight: 900, color: C.inkSoft }}>逻辑：卖的是「大家的物」→ 无权处分链</div>
            </Panel>
          </Enter>
          <Enter delay={66} from="right" marker="share-verdicts" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 424}}>
            <Panel tone={C.indigo} watermark={<PieChart size={140} color={C.indigo} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 18px'}}>
              <PanelTab tone={C.indigo} icon={<PieChart size={24} color={C.cream} strokeWidth={2.2} />}>问② 甲未经乙丙同意·转让 30% 份额给丁</PanelTab>
              <IconChip icon={<PieChart size={24} color={C.cream} strokeWidth={2.2} />} tone={C.indigo} title="① 丁能否取得份额：">
                <Seal delay={150} size={20} tone={C.indigo}>能</Seal>——份额属个人财产，转让份额＝<Soft color={C.indigo}>有权处分</Soft>
              </IconChip>
              <IconChip icon={<Crown size={24} color={C.cream} strokeWidth={2.2} />} tone={C.turmericMid} title="② 乙丙有无优先购买权：">
                <Seal delay={180} size={20} tone={C.turmericMid}>有</Seal>——份额<Soft color={C.turmericMid}>对外转让</Soft>时，其他共有人享有<Soft color={C.turmericMid}>优先购买权</Soft>
              </IconChip>
              <div style={{marginTop: 'auto', fontSize: 21, fontWeight: 900, color: C.inkSoft }}>逻辑：卖的是「自己的份额」→ 自由转让链＋优先购买拦截</div>
            </Panel>
          </Enter>
        </div>
        <Enter delay={110} from="up" style={{position: 'absolute', left: 0, top: 562, width: 1776, height: 206}}>
          <Panel tone={C.turmericMid} watermark={<Users size={130} color={C.turmericMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '10px 18px'}}>
            <PanelTab tone={C.turmericMid} icon={<Users size={24} color={C.cream} strokeWidth={2.2} />}>外部关系 · 因共有物产生的对外债权债务</PanelTab>
            <div data-final-knowledge="external-joint-rule" style={{display: 'flex', gap: 14}}>
              <IconChip icon={<Handshake size={24} color={C.cream} strokeWidth={2.2} />} tone={C.indigo} title="债权：">
                共有人<Soft color={C.indigo}>连带享有</Soft>因共有物产生的债权
              </IconChip>
              <IconChip icon={<UsersRound size={24} color={C.cream} strokeWidth={2.2} />} tone={C.seal} title="债务：">
                共有人<Soft color={C.seal}>连带承担</Soft>因共有物产生的债务
              </IconChip>
            </div>
            <div data-final-knowledge="comparison-strip" style={{marginTop: 'auto', display: 'flex', gap: 12, flexWrap: 'wrap', fontSize: 20, fontWeight: 900, color: C.ink }}>
              <Chip tone={C.seal} toneBg={C.sealPale}><span style={{fontSize: 20, fontWeight: 950, color: C.seal }}>转让共有物：需 2/3 同意 · 无权处分 · 合同有效 · 善意取得可取</span></Chip>
              <Chip tone={C.indigo} toneBg={C.indigoPale}><span style={{fontSize: 20, fontWeight: 950, color: C.indigo }}>转让份额：无需同意 · 有权处分 · 对外转让有优先购买权</span></Chip>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
