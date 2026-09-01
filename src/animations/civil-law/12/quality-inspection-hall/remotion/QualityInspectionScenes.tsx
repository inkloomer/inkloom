import type {CSSProperties, ReactNode} from 'react';
import {ArrowRight, Ban, Coins, Flame, Gavel, Handshake, Hourglass, Scale, ScanSearch, ScrollText, Truck} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  quartz: '#7A7590',
  quartzMid: '#8B86A0',
  quartzPale: '#E0DEEA',
  cream: '#F4F1E6',
  creamDim: '#E9E4D3',
  edge: '#C6BFAA',
  coral: '#C05B4A',
  coralPale: '#F2DDD8',
  inkBlue: '#2F5D8A',
  inkBluePale: '#DEE6F0',
  jade: '#4E7A64',
  jadePale: '#DDEBE4',
  ink: '#262230',
  inkSoft: '#74708A',
  indigoLike: '#3A5578',
  billowLike: '#DEE6F0',
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

export const Mover = ({children, delay = 0, span = 30, fromX = 0, toX = 0, fadeAt, style}: {
  readonly children: ReactNode;
  readonly delay?: number;
  readonly fadeAt?: number;
  readonly fromX?: number;
  readonly span?: number;
  readonly toX?: number;
  readonly style?: CSSProperties;
}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, span);
  return (
    <div
      style={{
        ...style,
        opacity: fadeAt === undefined ? p : interpolate(frame, [delay, delay + 6, fadeAt, fadeAt + 10], [0, 1, 1, 0], CLAMP),
        translate: `${interpolate(frame, [delay, delay + span], [fromX, toX], CLAMP)}px`,
      }}
    >
      {children}
    </div>
  );
};

export const Path = ({color = C.coral, delay = 0, span = 20, style}: {readonly color?: string; readonly delay?: number; readonly span?: number; readonly style?: CSSProperties}) => {
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
  const sceneIndex = Math.max(0, Math.min(3, Number(code) - 1));
  return (
    <AbsoluteFill
      data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
      style={{
        backgroundColor: C.quartz,
        color: C.cream,
        fontFamily: 'var(--inkloom-animation-body)',
        overflow: 'hidden',
        backgroundImage: `repeating-linear-gradient(0deg, transparent 0 144px, rgba(224, 222, 234, 0.05) 144px 147px), repeating-linear-gradient(90deg, transparent 0 144px, rgba(0, 0, 0, 0.12) 144px 147px)`,
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, right: 0, height: 12, background: `linear-gradient(90deg, ${C.coral}, ${C.inkBlue}, ${C.jade})`, opacity: 0.92}} />
      <div style={{position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: '2px solid rgba(224, 222, 234, 0.3)'}} />
      <div style={{position: 'absolute', left: 60, top: 44, padding: '10px 16px', backgroundColor: C.quartzMid, borderLeft: `8px solid ${C.coral}`}}>
        <span style={{fontSize: 21, fontWeight: 950, color: C.quartzPale, letterSpacing: 2}}>民法 · 第12讲 · {code}</span>
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
          borderBottom: `2px solid ${C.coral}`,
        }}
      >
        <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.quartzPale}}>{title}</h1>
        <span style={{fontSize: 22, fontWeight: 850, color: C.coralPale, textAlign: 'right'}}>{kicker}</span>
      </header>
      <div style={{position: 'absolute', right: 64, bottom: 44, display: 'flex', alignItems: 'center', gap: 10, opacity: 0.85}}>
        {[0, 1, 2, 3].map((dot) => (
          <span
            key={dot}
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: dot === sceneIndex ? C.coral : 'transparent',
              border: `2px solid ${C.coral}`,
            }}
          />
        ))}
      </div>
      <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    </AbsoluteFill>
  );
};

export const Panel = ({children, marker, tone = C.quartzMid, watermark, style}: {readonly children: ReactNode; readonly marker?: string; readonly tone?: string; readonly watermark?: ReactNode; readonly style?: CSSProperties}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.cream, border: `2px solid ${C.edge}`, borderLeft: `10px solid ${tone}`, borderTop: `8px solid ${tone}`, color: C.ink, position: 'relative', overflow: 'hidden', boxShadow: '0 3px 0 rgba(38, 34, 48, 0.35)', ...style}}
  >
    <span style={{position: 'absolute', right: 10, top: 14, width: 26, height: 26, borderTop: `3px solid ${tone}`, borderRight: `3px solid ${tone}`, opacity: 0.5}} />
    <span style={{position: 'absolute', left: 14, bottom: 10, width: 26, height: 26, borderBottom: `3px solid ${tone}`, borderLeft: `3px solid ${tone}`, opacity: 0.5}} />
    {watermark ? <span style={{position: 'absolute', right: -16, bottom: -20, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

export const PanelTab = ({children, tone = C.quartzMid, icon}: {readonly children: ReactNode; readonly tone?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 9, padding: '4px 14px', backgroundColor: C.quartzMid, borderLeft: `6px solid ${tone}`, color: C.quartzPale, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

export const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.creamDim, borderLeft: `5px solid ${tone}`, padding: '5px 12px'}}>
    <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 10, backgroundColor: tone, border: `2px solid ${C.cream}`, boxShadow: `0 0 0 2px rgba(192, 91, 74, 0.4)`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.42}}>
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
        rotate: '-2deg',
      }}
    >
      {children}
    </span>
  );
};

export const Under = ({children, color = C.coral, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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

export const FruitIpScene = () => {
  /* data-final-knowledge="fruit-possession-rule" data-final-knowledge="modification-exception" data-final-knowledge="ip-default-rule" data-final-knowledge="ip-exceptions" */
  return (
    <Shell code="01" kicker="孳息收取 · 知识产权" title="买卖物的孳息与知识产权">
      <div
        data-layout="possession-strip-with-ip-split"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="sale-fruit-follows-possession-not-ownership,possession-modification-flips-back-to-general-ownership-rule,ip-does-not-transfer-with-ownership-by-default,exhibition-right-and-agreement-are-the-only-ip-exceptions"
        data-focal-rule="fruit-coins-slide-to-whoever-holds-possession-not-to-the-title-holder"
        data-focal-channels="contrast,connector,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="fruit-possession-rule" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 220}}>
          <Panel tone={C.jade} watermark={<Coins size={130} color={C.jade} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.jade} icon={<Coins size={24} color={C.cream} strokeWidth={2.2} />}>孳息收取 · 不看所有看占有</PanelTab>
            <IconChip icon={<Coins size={24} color={C.cream} strokeWidth={2.2} />} tone={C.jade} title="原则：">
              孳息归<Soft color={C.jade}>原物所有权人</Soft>——买卖物是例外
            </IconChip>
            <div style={{display: 'flex', gap: 10, flexWrap: 'wrap', fontSize: 20, fontWeight: 900, color: C.ink }}>
              <Chip tone={C.jade} toneBg={C.jadePale}><span style={{fontSize: 19, fontWeight: 950, color: C.jade }}>交付前产生的孳息 → 出卖人</span></Chip>
              <Chip tone={C.indigoLike} toneBg={C.billowLike}><span style={{fontSize: 19, fontWeight: 950, color: C.indigoLike }}>交付后产生的孳息 → 买受人</span></Chip>
            </div>
            <div style={{marginTop: 'auto', fontSize: 21, fontWeight: 950, color: C.jade }}>口诀：不看<Soft color={C.coral}>所有</Soft>看<Soft color={C.jade}>占有</Soft>——房屋案：交付→乙收租·未交付→甲收租</div>
          </Panel>
        </Enter>
        <Enter delay={34} from="right" marker="modification-exception" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 220}}>
          <Panel tone={C.indigoLike} watermark={<Scale size={120} color={C.indigoLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.indigoLike} icon={<Scale size={24} color={C.coralPale} strokeWidth={2.2} />}>占有改定 · 回归一般规则</PanelTab>
            <IconChip icon={<Scale size={24} color={C.coralPale} strokeWidth={2.2} />} tone={C.indigoLike} title="宠物狗案：">
              占有改定完成后 → 法律关系转化为<Soft color={C.indigoLike}>保管关系</Soft>
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 21, fontWeight: 900, color: C.inkSoft }}>保管物孳息 → 归<Soft color={C.jade}>所有权人乙</Soft>（不再是买卖·用一般规则）</div>
          </Panel>
        </Enter>
        <Enter delay={70} from="up" marker="ip-default-rule" style={{position: 'absolute', left: 0, top: 236, width: 1776, height: 148}}>
          <Panel tone={C.inkBlue} watermark={<ScrollText size={120} color={C.inkBlue} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 18px'}}>
            <PanelTab tone={C.inkBlue} icon={<ScrollText size={24} color={C.cream} strokeWidth={2.2} />}>知识产权 · 原则不随所有权转移</PanelTab>
            <div style={{fontSize: 21, fontWeight: 900, color: C.ink }}>标的物<Soft color={C.inkBlue}>所有权转移</Soft>给买受人 → 附属的知识产权<Soft color={C.coral}>并不转移</Soft></div>
            <div style={{marginTop: 'auto', display: 'flex', gap: 12, flexWrap: 'wrap', fontSize: 20, fontWeight: 900, color: C.ink }}>
              <Chip tone={C.indigoLike} toneBg={C.billowLike}><span style={{fontSize: 19, fontWeight: 950, color: C.indigoLike }}>画卖给乙·著作权→甲</span></Chip>
              <Chip tone={C.jade} toneBg={C.jadePale}><span style={{fontSize: 19, fontWeight: 950, color: C.jade }}>展览权→乙（法定例外·随所有权转移）</span></Chip>
              <Chip tone={C.coral} toneBg={C.coralPale}><span style={{fontSize: 19, fontWeight: 950, color: C.coral }}>甲死→著作权→小甲·展览权仍→乙</span></Chip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={110} from="up" marker="ip-exceptions" style={{position: 'absolute', left: 0, top: 400, width: 1776, height: 368}}>
          <Panel tone={C.jade} watermark={<ScrollText size={150} color={C.jade} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 20px'}}>
            <PanelTab tone={C.jade} icon={<ScrollText size={24} color={C.cream} strokeWidth={2.2} />}>知识产权转移 · 两个例外</PanelTab>
            <IconChip icon={<Handshake size={24} color={C.cream} strokeWidth={2.2} />} tone={C.indigoLike} title="例外① 当事人另有约定：">
              买卖约定之外另行达成知识产权<Soft color={C.indigoLike}>转让合意</Soft>
            </IconChip>
            <IconChip icon={<ScrollText size={24} color={C.cream} strokeWidth={2.2} />} tone={C.jade} title="例外② 展览权（法定）：">
              作品原件的<Soft color={C.jade}>展览权</Soft>随所有权<Under color={C.jade} delay={170}>转移</Under>而转移
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 900, color: C.inkSoft }}>口诀：孳息<Soft color={C.jade}>看占有</Soft>·占有改定<Soft color={C.indigoLike}>回归一般</Soft>·知识产权<Soft color={C.coral}>不跟走</Soft>——展览权·约定<Soft color={C.jade}>例外走</Soft></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const InspectionGateScene = () => {
  /* data-final-knowledge="delivery-duty" data-final-knowledge="period-rules" data-final-knowledge="signing-presumption" data-final-knowledge="computer-verdicts" */
  const frame = useCurrentFrame();
  const gateLit = frame > 170;
  const gateBroken = frame > 330;
  return (
    <Shell code="02" kicker="品质瑕疵 · 异议期间" title="品质瑕疵异议期间">
      <div
        data-layout="inspection-gate-chain-with-computer-verdicts"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="agreed-short-period-covers-appearance-only-not-hidden-defects,no-agreement-cap-is-two-years-with-signing-presumption,signing-presumption-covers-appearance-not-hidden,written-notes-on-the-delivery-note-break-the-presumption"
        data-focal-rule="delivery-note-travels-the-gate-and-only-a-written-note-breaks-the-appearance-presumption"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="delivery-duty" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 132}}>
          <Panel tone={C.coral} watermark={<ScanSearch size={104} color={C.coral} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '9px 18px'}}>
            <PanelTab tone={C.coral} icon={<ScanSearch size={24} color={C.cream} strokeWidth={2.2} />}>出卖人的主要给付义务</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', gap: 14, fontSize: 21, fontWeight: 900, color: C.ink}}>
              <Chip tone={C.indigoLike} toneBg={C.billowLike}><span style={{fontSize: 20, fontWeight: 950, color: C.indigoLike}}>义务① 移转所有权</span></Chip>
              <Chip tone={C.jade} toneBg={C.jadePale}><span style={{fontSize: 20, fontWeight: 950, color: C.jade}}>义务② 交付标的物</span></Chip>
              <ArrowRight size={26} color={C.coral} strokeWidth={2.6} />
              <span>任何一项未履行 → 承担<Soft color={C.coral}>违约责任</Soft>（网商交承运人运输：所有权已转甲·未交付仍可追违约）</span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={40} from="right" marker="period-rules" style={{position: 'absolute', left: 0, top: 148, width: 1776, height: 258}}>
          <Panel tone={C.inkBlue} watermark={<Hourglass size={124} color={C.inkBlue} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '10px 18px'}}>
            <PanelTab tone={C.inkBlue} icon={<Hourglass size={24} color={C.cream} strokeWidth={2.2} />}>品质瑕疵异议期间 · 有约定 / 无约定</PanelTab>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, flex: 1}}>
              <div style={{border: `2px solid ${C.edge}`, borderLeft: `6px solid ${C.inkBlue}`, backgroundColor: C.creamDim, padding: '9px 14px', display: 'flex', flexDirection: 'column', gap: 7}}>
                <span style={{fontSize: 21, fontWeight: 950, color: C.inkBlue}}>有约定 · 约定期间过短</span>
                <span style={{fontSize: 20, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>约定<Soft color={C.jade}>依然有效</Soft> → 但只视为<Soft color={C.inkBlue}>外观瑕疵</Soft>的异议期间</span>
                <span style={{fontSize: 20, fontWeight: 880, color: C.ink, lineHeight: 1.5}}><Soft color={C.coral}>隐蔽瑕疵</Soft> → 另按<Soft color={C.indigoLike}>合理期间</Soft>提出异议</span>
                <span style={{fontSize: 20, fontWeight: 900, color: C.inkSoft, marginTop: 'auto'}}>约定撞上法定 → <Soft color={C.coral}>就长不就短</Soft></span>
              </div>
              <div style={{border: `2px solid ${C.edge}`, borderLeft: `6px solid ${C.jade}`, backgroundColor: C.creamDim, padding: '9px 14px', display: 'flex', flexDirection: 'column', gap: 7}}>
                <span style={{fontSize: 21, fontWeight: 950, color: C.jade}}>无约定</span>
                <span style={{fontSize: 20, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>发现或应当发现不符的<Soft color={C.indigoLike}>合理期间</Soft>内提出 → 最长<Soft color={C.coral}>不超2年</Soft></span>
                <span style={{fontSize: 20, fontWeight: 900, color: C.inkSoft, marginTop: 'auto'}}>收到之日起<Soft color={C.coral}>2年内</Soft>未提 → 之后<Soft color={C.coral}>不得再提</Soft></span>
              </div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={80} from="left" marker="signing-presumption" style={{position: 'absolute', left: 0, top: 422, width: 1776, height: 150}}>
          <Panel tone={C.jade} watermark={<Ban size={104} color={C.jade} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '10px 18px'}}>
            <div style={{width: 872, display: 'flex', flexDirection: 'column', gap: 8}}>
              <PanelTab tone={C.jade} icon={<ScrollText size={24} color={C.cream} strokeWidth={2.2} />}>单据签收推定规则</PanelTab>
              <span style={{fontSize: 20, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>签收载明<Soft color={C.inkBlue}>数量、型号、规格</Soft>的送货单、确认单 → 除有<Soft color={C.coral}>相反证据</Soft>外，推定已对<Soft color={C.inkBlue}>外观瑕疵</Soft>检验并<Soft color={C.jade}>认可</Soft>，不得再就外观提异议</span>
            </div>
            <div style={{flex: 1, alignSelf: 'stretch', border: `2px dashed ${C.edge}`, position: 'relative', overflow: 'hidden'}}>
              <span style={{position: 'absolute', left: 16, top: 6, fontSize: 16, fontWeight: 900, color: C.inkSoft}}>签收单过门 · 推定链</span>
              <div style={{position: 'absolute', left: 24, right: 150, top: 86, height: 4, backgroundColor: C.edge}} />
              <div style={{position: 'absolute', left: 268, top: 32, width: 10, height: 84, borderRadius: 5, backgroundColor: gateBroken ? C.coral : gateLit ? C.jade : C.edge}} />
              <span style={{position: 'absolute', left: 238, top: 8, fontSize: 16, fontWeight: 900, color: gateBroken ? C.coral : gateLit ? C.jade : C.inkSoft}}>推定门</span>
              <Mover delay={90} span={48} fromX={16} toX={196} style={{position: 'absolute', left: 0, top: 58}}>
                <Chip tone={C.jade} toneBg={C.jadePale}><ScanSearch size={20} color={C.jade} strokeWidth={2.4} /><span style={{fontSize: 18, fontWeight: 950, color: C.jade}}>签收单</span></Chip>
              </Mover>
              <div style={{position: 'absolute', right: 14, top: 44}}><Seal delay={200} tone={C.jade} size={19}>推定外观认可</Seal></div>
              <Mover delay={300} span={40} fromX={560} toX={318} style={{position: 'absolute', left: 0, top: 12}}>
                <Chip tone={C.coral} toneBg={C.coralPale}><Ban size={20} color={C.coral} strokeWidth={2.4} /><span style={{fontSize: 18, fontWeight: 950, color: C.coral}}>单上另有备注</span></Chip>
              </Mover>
              <span style={{position: 'absolute', left: 470, top: 104, fontSize: 17, fontWeight: 950, color: C.coral, opacity: prog(frame, 346, 12)}}>备注 → 打破推定 · 仍可异议</span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={120} from="up" marker="computer-verdicts" style={{position: 'absolute', left: 0, top: 588, width: 1776, height: 180}}>
          <Panel tone={C.quartzMid} watermark={<Gavel size={112} color={C.quartzMid} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '9px 18px'}}>
            <PanelTab tone={C.coral} icon={<Gavel size={24} color={C.cream} strokeWidth={2.2} />}>300台电脑 · 三问判定</PanelTab>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14, flex: 1}}>
              <div style={{border: `2px solid ${C.edge}`, backgroundColor: C.creamDim, padding: '7px 12px', display: 'flex', flexDirection: 'column', gap: 5}}>
                <span style={{fontSize: 19, fontWeight: 900, color: C.ink}}>① 次日发现只有295台 → 能否异议？</span>
                <div style={{marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 10}}>
                  <Seal delay={210} tone={C.coral} size={19}>不能</Seal>
                  <span style={{fontSize: 18, fontWeight: 880, color: C.inkSoft}}>签字即推定<Soft color={C.inkBlue}>已清点数量</Soft></span>
                </div>
              </div>
              <div style={{border: `2px solid ${C.edge}`, backgroundColor: C.creamDim, padding: '7px 12px', display: 'flex', flexDirection: 'column', gap: 5}}>
                <span style={{fontSize: 19, fontWeight: 900, color: C.ink}}>② 签字时备注3天内清点外观 → 能否？</span>
                <div style={{marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 10}}>
                  <Seal delay={250} tone={C.jade} size={19}>能</Seal>
                  <span style={{fontSize: 18, fontWeight: 880, color: C.inkSoft}}>备注<Soft color={C.coral}>打破推定</Soft></span>
                </div>
              </div>
              <div style={{border: `2px solid ${C.edge}`, backgroundColor: C.creamDim, padding: '7px 12px', display: 'flex', flexDirection: 'column', gap: 5}}>
                <span style={{fontSize: 19, fontWeight: 900, color: C.ink}}>③ 1周后发现电路隐蔽瑕疵 → 能否？</span>
                <div style={{marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 10}}>
                  <Seal delay={290} tone={C.jade} size={19}>能</Seal>
                  <span style={{fontSize: 18, fontWeight: 880, color: C.inkSoft}}>推定<Soft color={C.inkBlue}>不及隐蔽瑕疵</Soft></span>
                </div>
              </div>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const RiskDirectScene = () => {
  /* data-final-knowledge="direct-snap-rule" data-final-knowledge="fire-verdict" data-final-knowledge="delay-acceptance-rules" data-final-knowledge="third-party-extension" */
  const frame = useCurrentFrame();
  const snapReady = frame > 140;
  return (
    <Shell code="03" kicker="风险承担 · 直接易手" title="风险承担 · 直接易手">
      <div
        data-layout="direct-handover-lanes-with-delay-exception"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="contract-plus-delivery-snap-risk-regardless-of-order-or-title,delayed-acceptance-shifts-risk-to-the-refusing-buyer,seller-cured-goods-block-the-delay-acceptance-snap,delivery-to-buyer-appointed-third-party-uses-same-rule"
        data-focal-rule="risk-coin-snaps-across-the-handover-line-only-when-contract-and-delivery-both-exist"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="direct-snap-rule" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 300}}>
          <Panel tone={C.coral} watermark={<Scale size={130} color={C.coral} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '10px 18px'}}>
            <PanelTab tone={C.coral} icon={<Scale size={24} color={C.cream} strokeWidth={2.2} />}>直接易手 · 风险转移两要件</PanelTab>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', fontSize: 20, fontWeight: 900, color: C.ink}}>
              <Chip tone={C.indigoLike} toneBg={C.billowLike}><span style={{fontSize: 19, fontWeight: 950, color: C.indigoLike}}>要件① 买卖合同关系成立</span></Chip>
              <Chip tone={C.jade} toneBg={C.jadePale}><span style={{fontSize: 19, fontWeight: 950, color: C.jade}}>要件② 标的物直接占有转移（交货）</span></Chip>
              <ArrowRight size={24} color={C.coral} strokeWidth={2.6} />
              <span style={{fontSize: 19, fontWeight: 900, color: C.inkSoft}}>有约定从约定；两要件<Soft color={C.coral}>不问时间顺序</Soft>·<Soft color={C.coral}>不考虑所有权</Soft>是否转移</span>
            </div>
            <div style={{flex: 1, border: `2px dashed ${C.edge}`, position: 'relative', overflow: 'hidden', backgroundColor: C.creamDim}}>
              <span style={{position: 'absolute', left: 24, top: 8, fontSize: 18, fontWeight: 950, color: C.indigoLike}}>出卖人 · 承担风险</span>
              <span style={{position: 'absolute', right: 24, top: 8, fontSize: 18, fontWeight: 950, color: C.coral}}>买受人 · 承担风险</span>
              <div style={{position: 'absolute', left: 868, top: 30, bottom: 8, width: 0, borderLeft: `3px dashed ${C.coral}`}} />
              <span style={{position: 'absolute', left: 812, top: 36, fontSize: 16, fontWeight: 900, color: C.coral, backgroundColor: C.cream, padding: '0 6px'}}>风险过渡点</span>
              <Mover delay={150} span={44} fromX={620} toX={1040} style={{position: 'absolute', top: 92, left: 0}}>
                <Chip tone={C.coral} toneBg={C.coralPale}><Coins size={20} color={C.coral} strokeWidth={2.4} /><span style={{fontSize: 18, fontWeight: 950, color: C.coral}}>风险</span></Chip>
              </Mover>
              <span style={{position: 'absolute', left: 24, bottom: 8, fontSize: 17, fontWeight: 900, color: C.inkSoft, opacity: snapReady ? 1 : 0.35}}>合同成立 ✓ 交货 ✓ → 风险越过过渡点归买受人</span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={40} from="up" marker="fire-verdict" style={{position: 'absolute', left: 0, top: 316, width: 580, height: 452}}>
          <Panel tone={C.coral} watermark={<Flame size={120} color={C.coral} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '11px 16px'}}>
            <PanelTab tone={C.coral} icon={<Flame size={24} color={C.cream} strokeWidth={2.2} />}>火灾案 · 保留所有权</PanelTab>
            <IconChip icon={<Coins size={22} color={C.cream} strokeWidth={2.2} />} tone={C.indigoLike} title="案情：">租赁期间甲把设备卖乙·付清前<Soft color={C.indigoLike}>保留所有权</Soft>·乙厂房火灾设备焚毁</IconChip>
            <IconChip icon={<Scale size={22} color={C.cream} strokeWidth={2.2} />} tone={C.jade} title="判定：">已<Soft color={C.jade}>交付</Soft>+合同成立 → 风险已转<Soft color={C.coral}>乙</Soft>（不管所有权保留）</IconChip>
            <div style={{marginTop: 'auto', display: 'flex', justifyContent: 'center'}}><Seal delay={220} tone={C.coral} size={22}>乙仍应支付剩余价款</Seal></div>
          </Panel>
        </Enter>
        <Enter delay={70} from="up" marker="delay-acceptance-rules" style={{position: 'absolute', left: 598, top: 316, width: 580, height: 452}}>
          <Panel tone={C.inkBlue} watermark={<Hourglass size={120} color={C.inkBlue} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '11px 16px'}}>
            <PanelTab tone={C.inkBlue} icon={<Hourglass size={24} color={C.cream} strokeWidth={2.2} />}>迟延受领 · 例外变数</PanelTab>
            <div style={{border: `2px dashed ${C.edge}`, backgroundColor: C.creamDim, position: 'relative', height: 110, overflow: 'hidden'}}>
              <div style={{position: 'absolute', left: 24, right: 24, top: 74, height: 4, backgroundColor: C.edge}} />
              <div style={{position: 'absolute', left: 252, top: 26, width: 10, height: 70, borderRadius: 5, backgroundColor: frame > 130 ? C.coral : C.edge}} />
              <span style={{position: 'absolute', left: 208, top: 2, fontSize: 15, fontWeight: 900, color: frame > 130 ? C.coral : C.inkSoft}}>风险转移门</span>
              <Mover delay={60} span={42} fromX={20} toX={180} style={{position: 'absolute', top: 46, left: 0}}>
                <Chip tone={C.coral} toneBg={C.coralPale}><Coins size={18} color={C.coral} strokeWidth={2.4} /><span style={{fontSize: 17, fontWeight: 950, color: C.coral}}>拒收·风险转乙</span></Chip>
              </Mover>
              <span style={{position: 'absolute', left: 300, top: 46, fontSize: 15, fontWeight: 900, color: C.inkSoft, opacity: prog(frame, 140, 12)}}>门开 → 风险越过</span>
            </div>
            <IconChip icon={<Hourglass size={22} color={C.cream} strokeWidth={2.2} />} tone={C.coral} title="无正当理由拒收：">交货日拒收·当晚火灾 → 构成<Soft color={C.coral}>迟延受领</Soft> → 风险转<Soft color={C.coral}>乙</Soft> → <Seal tone={C.coral} size={17}>应支付</Seal></IconChip>
            <IconChip icon={<Scale size={22} color={C.cream} strokeWidth={2.2} />} tone={C.jade} title="设备不符约定：">拒收有理 → <Soft color={C.jade}>不构成</Soft>迟延受领 → 风险<Soft color={C.jade}>不转移</Soft> → <Seal tone={C.jade} size={17}>不支付</Seal></IconChip>
          </Panel>
        </Enter>
        <Enter delay={100} from="up" marker="third-party-extension" style={{position: 'absolute', left: 1196, top: 316, width: 580, height: 452}}>
          <Panel tone={C.jade} watermark={<Truck size={120} color={C.jade} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '11px 16px'}}>
            <PanelTab tone={C.jade} icon={<Truck size={24} color={C.cream} strokeWidth={2.2} />}>向第三人交付 · 规则扩展</PanelTab>
            <div style={{border: `2px dashed ${C.edge}`, backgroundColor: C.creamDim, position: 'relative', height: 120, overflow: 'hidden'}}>
              <div style={{position: 'absolute', left: 24, right: 24, top: 88, height: 4, backgroundColor: C.edge}} />
              <div style={{position: 'absolute', left: 26, top: 52, opacity: prog(frame, 190, 14)}}><Chip tone={C.indigoLike} toneBg={C.billowLike}><span style={{fontSize: 16, fontWeight: 950, color: C.indigoLike}}>出卖人</span></Chip></div>
              <div style={{position: 'absolute', left: 210, top: 52, opacity: prog(frame, 220, 14)}}><Chip tone={C.jade} toneBg={C.jadePale}><Truck size={16} color={C.jade} strokeWidth={2.4} /><span style={{fontSize: 16, fontWeight: 950, color: C.jade}}>承运人·受托人</span></Chip></div>
              <div style={{position: 'absolute', left: 418, top: 52, opacity: prog(frame, 250, 14)}}><Chip tone={C.coral} toneBg={C.coralPale}><span style={{fontSize: 16, fontWeight: 950, color: C.coral}}>买受人</span></Chip></div>
              <Mover delay={250} span={60} fromX={50} toX={420} fadeAt={330} style={{position: 'absolute', top: 14, left: 0}}>
                <Chip tone={C.jade} toneBg={C.jadePale}><Coins size={16} color={C.jade} strokeWidth={2.4} /><span style={{fontSize: 16, fontWeight: 950, color: C.jade}}>货物照走</span></Chip>
              </Mover>
            </div>
            <IconChip icon={<Truck size={22} color={C.cream} strokeWidth={2.2} />} tone={C.jade} title="规则：">向<Soft color={C.jade}>买受人委托</Soft>的第三人交货 → 同样适用<Soft color={C.jade}>直接易手</Soft>风险规则</IconChip>
            <IconChip icon={<Scale size={22} color={C.cream} strokeWidth={2.2} />} tone={C.indigoLike} title="要件不变：">仍是<Soft color={C.indigoLike}>合同成立+占有转移</Soft>，与亲自交付无异</IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const RiskIndirectScene = () => {
  /* data-final-knowledge="clear-destination-rule" data-final-knowledge="unclear-transit-rules" data-final-knowledge="parallel-principle" data-final-knowledge="ledger-summary" */
  const frame = useCurrentFrame();
  return (
    <Shell code="04" kicker="风险承担 · 间接易手" title="风险承担 · 间接易手">
      <div
        data-layout="indirect-ledger-with-parallel-principle"
        data-visual-anchor="timeline-gate"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="clear-destination-blocks-risk-until-delivery-at-that-point,unclear-destination-snaps-risk-at-carrier-handover,transit-goods-snap-risk-at-contract-formation-unless-agreed-otherwise,risk-bearing-never-blocks-parallel-breach-claims"
        data-focal-rule="goods-chip-meets-a-carrier-gate-that-opens-early-or-late-depending-on-destination-clarity"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="clear-destination-rule" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 252}}>
          <Panel tone={C.indigoLike} watermark={<Truck size={110} color={C.indigoLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '9px 16px'}}>
            <PanelTab tone={C.indigoLike} icon={<Truck size={24} color={C.cream} strokeWidth={2.2} />}>代办托运 · 目的地明确</PanelTab>
            <div style={{border: `2px dashed ${C.edge}`, backgroundColor: C.creamDim, position: 'relative', height: 80, overflow: 'hidden'}}>
              <div style={{position: 'absolute', left: 20, right: 20, top: 56, height: 4, backgroundColor: C.edge}} />
              <div style={{position: 'absolute', left: 240, top: 12, width: 9, height: 58, borderRadius: 4, backgroundColor: C.coral}} />
              <span style={{position: 'absolute', left: 186, top: 0, fontSize: 14, fontWeight: 900, color: C.coral}}>风险不转 ✗</span>
              <div style={{position: 'absolute', left: 660, top: 12, width: 9, height: 58, borderRadius: 4, backgroundColor: frame > 300 ? C.jade : C.edge}} />
              <span style={{position: 'absolute', left: 606, top: 0, fontSize: 14, fontWeight: 900, color: frame > 300 ? C.jade : C.inkSoft}}>运抵交付 ✓</span>
              <Mover delay={90} span={54} fromX={20} toX={120} style={{position: 'absolute', top: 34, left: 0}}>
                <Chip tone={C.indigoLike} toneBg={C.billowLike}><Coins size={16} color={C.indigoLike} strokeWidth={2.4} /><span style={{fontSize: 15, fontWeight: 950, color: C.indigoLike}}>货物</span></Chip>
              </Mover>
              <Mover delay={310} span={54} fromX={120} toX={520} fadeAt={380} style={{position: 'absolute', top: 34, left: 0}}>
                <Chip tone={C.indigoLike} toneBg={C.billowLike}><Coins size={16} color={C.indigoLike} strokeWidth={2.4} /><span style={{fontSize: 15, fontWeight: 950, color: C.indigoLike}}>货物</span></Chip>
              </Mover>
              <span style={{position: 'absolute', left: 266, top: 36, fontSize: 14, fontWeight: 900, color: C.inkSoft}}>货交承运人</span>
            </div>
            <IconChip icon={<Scale size={22} color={C.cream} strokeWidth={2.2} />} tone={C.indigoLike} title="风险：">运抵该地<Soft color={C.indigoLike}>交付买受人时</Soft>才转移——旅游鞋案：明确收货地·途中毁损·乙<Soft color={C.indigoLike}>不付价金</Soft></IconChip>
            <IconChip icon={<Coins size={22} color={C.cream} strokeWidth={2.2} />} tone={C.jade} title="所有权：">货交承运人时<Soft color={C.jade}>已转移</Soft>（指示交付）</IconChip>
          </Panel>
        </Enter>
        <Enter delay={34} from="right" marker="unclear-transit-rules" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 252}}>
          <Panel tone={C.coral} watermark={<Truck size={110} color={C.coral} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '9px 16px'}}>
            <PanelTab tone={C.coral} icon={<Truck size={24} color={C.cream} strokeWidth={2.2} />}>代办托运 · 目的地不明确</PanelTab>
            <div style={{border: `2px dashed ${C.edge}`, backgroundColor: C.creamDim, position: 'relative', height: 80, overflow: 'hidden'}}>
              <div style={{position: 'absolute', left: 20, right: 20, top: 56, height: 4, backgroundColor: C.edge}} />
              <div style={{position: 'absolute', left: 240, top: 12, width: 9, height: 58, borderRadius: 4, backgroundColor: frame > 150 ? C.jade : C.edge}} />
              <span style={{position: 'absolute', left: 176, top: 0, fontSize: 14, fontWeight: 900, color: frame > 150 ? C.jade : C.inkSoft}}>交承运人 ✓ 风险即转</span>
              <Mover delay={90} span={50} fromX={20} toX={170} style={{position: 'absolute', top: 34, left: 0}}>
                <Chip tone={C.coral} toneBg={C.coralPale}><Coins size={16} color={C.coral} strokeWidth={2.4} /><span style={{fontSize: 15, fontWeight: 950, color: C.coral}}>货物</span></Chip>
              </Mover>
              <span style={{position: 'absolute', left: 300, top: 34, fontSize: 14, fontWeight: 900, color: C.inkSoft}}>无明确目的地 → 交运即过门</span>
            </div>
            <IconChip icon={<Scale size={22} color={C.cream} strokeWidth={2.2} />} tone={C.coral} title="风险：">出卖人<Soft color={C.coral}>货交承运人</Soft>时即转<Soft color={C.coral}>买受人</Soft>——设备案：交运后毁损·乙<Soft color={C.coral}>应付款</Soft></IconChip>
            <IconChip icon={<Coins size={22} color={C.cream} strokeWidth={2.2} />} tone={C.indigoLike} title="所有权：">同样货交承运人时<Soft color={C.indigoLike}>转移</Soft></IconChip>
          </Panel>
        </Enter>
        <Enter delay={70} from="up" style={{position: 'absolute', left: 0, top: 268, width: 866, height: 240}}>
          <Panel tone={C.inkBlue} watermark={<Coins size={110} color={C.inkBlue} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '9px 16px'}}>
            <PanelTab tone={C.inkBlue} icon={<Coins size={24} color={C.cream} strokeWidth={2.2} />}>在途货物买卖</PanelTab>
            <div style={{border: `2px dashed ${C.edge}`, backgroundColor: C.creamDim, position: 'relative', height: 70, overflow: 'hidden'}}>
              <div style={{position: 'absolute', left: 20, right: 20, top: 50, height: 4, backgroundColor: C.edge}} />
              <Mover delay={110} span={54} fromX={20} toX={330} style={{position: 'absolute', top: 24, left: 0}}>
                <Chip tone={C.inkBlue} toneBg={C.billowLike}><Truck size={16} color={C.inkBlue} strokeWidth={2.4} /><span style={{fontSize: 15, fontWeight: 950, color: C.inkBlue}}>在途货物</span></Chip>
              </Mover>
              <div style={{position: 'absolute', left: 450, top: 8, opacity: prog(frame, 170, 14)}}><Seal tone={C.inkBlue} size={16}>合同成立生效</Seal></div>
              <span style={{position: 'absolute', left: 450, top: 44, fontSize: 15, fontWeight: 950, color: C.coral, opacity: prog(frame, 190, 14)}}>成立瞬间 → 风险即转买受人</span>
            </div>
            <IconChip icon={<Scale size={22} color={C.cream} strokeWidth={2.2} />} tone={C.inkBlue} title="原则：">合同<Soft color={C.inkBlue}>成立生效</Soft>时风险即转<Soft color={C.coral}>买受人</Soft>（除另有约定）</IconChip>
            <span style={{fontSize: 19, fontWeight: 900, color: C.inkSoft}}>例外：成立时风险<Soft color={C.coral}>已发生</Soft> → 买受人<Soft color={C.jade}>不承担</Soft></span>
          </Panel>
        </Enter>
        <Enter delay={100} from="up" marker="parallel-principle" style={{position: 'absolute', left: 910, top: 268, width: 866, height: 240}}>
          <Panel tone={C.coral} watermark={<Gavel size={110} color={C.coral} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '9px 16px'}}>
            <PanelTab tone={C.coral} icon={<Gavel size={24} color={C.cream} strokeWidth={2.2} />}>风险承担 与 违约责任并行</PanelTab>
            <span style={{fontSize: 20, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>买受人承担<Soft color={C.coral}>风险</Soft>，<Soft color={C.coral}>不影响</Soft>其要求出卖人就<Soft color={C.inkBlue}>履行不符合约定</Soft>承担<Soft color={C.coral}>违约责任</Soft></span>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, flex: 1}}>
              <div style={{border: `2px solid ${C.jade}`, backgroundColor: C.jadePale, padding: '6px 12px', display: 'flex', flexDirection: 'column', gap: 4, opacity: prog(frame, 200, 14)}}>
                <span style={{fontSize: 18, fontWeight: 950, color: C.jade}}>线① 风险承担</span>
                <span style={{fontSize: 17, fontWeight: 880, color: C.ink}}>房屋已交付 → 乙承担泥石流毁损风险</span>
              </div>
              <div style={{border: `2px solid ${C.coral}`, backgroundColor: C.coralPale, padding: '6px 12px', display: 'flex', flexDirection: 'column', gap: 4, opacity: prog(frame, 240, 14)}}>
                <span style={{fontSize: 18, fontWeight: 950, color: C.coral}}>线② 违约责任</span>
                <span style={{fontSize: 17, fontWeight: 880, color: C.ink}}>逾期1年交房 → 乙仍可主张迟延违约金</span>
              </div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={130} from="up" marker="ledger-summary" style={{position: 'absolute', left: 0, top: 524, width: 1776, height: 244}}>
          <Panel tone={C.jade} watermark={<Scale size={130} color={C.jade} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '10px 18px'}}>
            <PanelTab tone={C.jade} icon={<Scale size={24} color={C.cream} strokeWidth={2.2} />}>间接易手 · 台账总结</PanelTab>
            <div style={{display: 'grid', gridTemplateRows: '44px 1fr 1fr 1fr', flex: 1, border: `2px solid ${C.edge}`}}>
              <div style={{display: 'grid', gridTemplateColumns: '360px 1fr 260px 260px', backgroundColor: C.quartzMid}}>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 19, fontWeight: 950, color: C.quartzPale, borderRight: `2px solid ${C.edge}`}}>间接易手类型</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 19, fontWeight: 950, color: C.quartzPale, borderRight: `2px solid ${C.edge}`}}>交付地点</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 19, fontWeight: 950, color: C.quartzPale, borderRight: `2px solid ${C.edge}`}}>风险</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 19, fontWeight: 950, color: C.quartzPale}}>所有权</span>
              </div>
              <div style={{display: 'grid', gridTemplateColumns: '360px 1fr 260px 260px', borderTop: `2px solid ${C.edge}`, opacity: prog(frame, 240, 14)}}>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 900, color: C.ink, borderRight: `2px solid ${C.edge}`}}>代办托运·货交承运人</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 900, color: C.ink, borderRight: `2px solid ${C.edge}`}}>目的地明确</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 950, color: C.coral, borderRight: `2px solid ${C.edge}`}}>不转移</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 950, color: C.jade}}>转移</span>
              </div>
              <div style={{display: 'grid', gridTemplateColumns: '360px 1fr 260px 260px', borderTop: `2px solid ${C.edge}`, backgroundColor: C.creamDim, opacity: prog(frame, 280, 14)}}>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 900, color: C.ink, borderRight: `2px solid ${C.edge}`}}>代办托运·货交承运人</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 900, color: C.ink, borderRight: `2px solid ${C.edge}`}}>目的地不明确</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 950, color: C.jade, borderRight: `2px solid ${C.edge}`}}>转移</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 950, color: C.jade}}>转移</span>
              </div>
              <div style={{display: 'grid', gridTemplateColumns: '360px 1fr 260px 260px', borderTop: `2px solid ${C.edge}`, opacity: prog(frame, 320, 14)}}>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 900, color: C.ink, borderRight: `2px solid ${C.edge}`}}>在途货物买卖</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 900, color: C.ink, borderRight: `2px solid ${C.edge}`}}>合同成立时</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 950, color: C.jade, borderRight: `2px solid ${C.edge}`}}>转移</span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 950, color: C.jade}}>转移</span>
              </div>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
