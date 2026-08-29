import type {CSSProperties, ReactNode} from 'react';
import {Building2, CircleDashed, CirclePlay, DoorClosed, Flag, GraduationCap, Landmark, Mail, Megaphone, Users, X, Zap} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const C = {
  field: '#EFE7D6',
  track: '#C05B3D',
  chalk: '#F3E9D2',
  chalkDim: 'rgba(243,233,210,0.55)',
  ink: '#201B14',
  paper: '#FBF6EA',
  prep: '#6E675A',
  flash: '#E8A13C',
  warm: '#B33A26',
  cool: '#2E6E9E',
  white: '#FFFDF7',
  danger: '#8C2F1F',
  negDark: '#FFB4A0',
  ghost: 'rgba(255,253,247,0.35)',
  panelWhite: 'rgba(255,253,247,0.10)',
} as const;

const PLAYER_CONTROL_SAFE_BOTTOM = 168;

const reveal = (frame: number, delay: number, span = 16) => interpolate(frame, [delay, delay + span], [0, 1], CLAMP);

const Enter = ({children, delay = 0, y = 22, style}: {children: ReactNode; delay?: number; y?: number; style?: CSSProperties}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  return <div style={{opacity: p, translate: `0 ${(1 - p) * y}px`, ...style}}>{children}</div>;
};

const Dash = ({children, delay = 0, style}: {children: ReactNode; delay?: number; style?: CSSProperties}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  return <div style={{scale: `${p} 1`, transformOrigin: 'left', ...style}}>{children}</div>;
};

const Chip = ({children, tone = 'chalk', style}: {children: ReactNode; tone?: 'chalk' | 'warm' | 'cool' | 'ink' | 'prep'; style?: CSSProperties}) => {
  const bg = tone === 'chalk' ? 'rgba(243,233,210,0.16)' : C[tone];
  const color = tone === 'chalk' ? C.chalk : C.white;
  return <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 13px', backgroundColor: bg, color, fontSize: 22, fontWeight: 800, borderRadius: 8, whiteSpace: 'nowrap', ...style}}>{children}</span>;
};

const LabelBlock = ({children, color = C.flash, ink = false, size = 28, style}: {children: ReactNode; color?: string; ink?: boolean; size?: number; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, borderLeft: `6px solid ${color}`, padding: '2px 12px', color: ink ? C.ink : C.white, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

const SoftHi = ({children, dark = false, style}: {children: ReactNode; dark?: boolean; style?: CSSProperties}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: dark ? 'rgba(232,161,60,0.30)' : 'rgba(232,161,60,0.24)', padding: '4px 12px', borderRadius: 8, color: dark ? C.ink : C.white, fontSize: 24, fontWeight: 900, whiteSpace: 'nowrap', ...style}}>{children}</span>
);

const ThinU = ({children, color = C.ink}: {children: ReactNode; color?: string}) => (
  <span style={{position: 'relative', display: 'inline-block', color}}>{children}<span style={{position: 'absolute', left: 0, right: 0, bottom: -4, height: 3, backgroundColor: color, opacity: 0.8}} /></span>
);

const Neg = ({children, dark = false, size = 26}: {children: ReactNode; dark?: boolean; size?: number}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, color: dark ? C.danger : C.negDark, fontSize: size, fontWeight: 900, whiteSpace: 'nowrap'}}>
    <X size={size + 4} strokeWidth={3.5} />
    <span>{children}</span>
  </span>
);

const Stamp = ({children, delay = 0, tone = 'flash'}: {children: ReactNode; delay?: number; tone?: 'flash' | 'prep' | 'chalk'}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  const bg = tone === 'flash' ? C.flash : tone === 'prep' ? C.prep : 'transparent';
  const color = tone === 'chalk' ? C.chalk : C.ink;
  return <span style={{display: 'inline-flex', padding: '3px 12px', border: `3px solid ${tone === 'chalk' ? C.chalk : tone === 'prep' ? C.prep : C.flash}`, backgroundColor: bg, color, fontSize: 22, fontWeight: 950, rotate: '-2deg', opacity: p, scale: 0.9 + p * 0.1, whiteSpace: 'nowrap'}}>{children}</span>;
};

const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.field, color: C.ink, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(90deg, rgba(32,27,20,0.05) 0 3px, transparent 3px 190px)'}} />
    <div style={{position: 'absolute', left: 72, top: 42, fontSize: 17, fontWeight: 900, letterSpacing: 3, color: C.prep}}>CRIMINAL LAW · ATTEMPT THRESHOLD / {code}</div>
    <div style={{position: 'absolute', left: 72, top: 70, fontSize: 46, fontWeight: 950}}>{title}</div>
    <div style={{position: 'absolute', left: 72, right: 72, top: 138, height: 5, backgroundColor: C.ink}} />
    <main style={{position: 'absolute', left: 72, right: 72, top: 168, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
    <div style={{position: 'absolute', left: 72, right: 72, bottom: 40, display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, color: C.prep}}>
      <span>刑法 · 第11讲 犯罪形态</span>
      <span>ON YOUR MARKS — GUN — RUN</span>
    </div>
  </AbsoluteFill>
);

export const StageBoundaryScene = () => {
  const frame = useCurrentFrame();
  return <Shell code="01" title="区分标准：分界点在着手">
    <div data-layout="straightaway-phase-gate" data-visual-anchor="timeline-gate" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="stage-progression,threshold-test" data-focal-rule="commencement-is-the-boundary-when-danger-becomes-imminent" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="boundary-prep-zone" style={{position: 'absolute', left: 0, top: 0, width: 540, height: 264, backgroundColor: C.track, borderRadius: 18, border: `3px dashed ${C.chalkDim}`}}>
        <Enter delay={6} style={{position: 'absolute', left: 20, top: 18}}>
          <LabelBlock color={C.prep} size={30}><CircleDashed size={32} color={C.chalk} />预备阶段</LabelBlock>
        </Enter>
        <Enter delay={16} style={{position: 'absolute', left: 24, top: 82, fontSize: 22, color: C.chalk, fontWeight: 700}}>各就位——距离法益损害还有一段路</Enter>
        <Enter delay={26} style={{position: 'absolute', left: 24, top: 126, display: 'flex', gap: 10, flexWrap: 'wrap'}}>
          <Chip>准备工具</Chip><Chip>埋伏等待</Chip><Chip>前往现场</Chip>
        </Enter>
        <Enter delay={38} style={{position: 'absolute', left: 24, top: 196}}><Chip tone="prep">犯罪预备</Chip></Enter>
      </div>
      <div data-final-knowledge="boundary-start-gate" style={{position: 'absolute', left: 640, top: 0, width: 200, height: 264}}>
        <Dash delay={44} style={{position: 'absolute', left: 92, top: 10, width: 12, height: 244, backgroundColor: C.chalk}} />
        <Enter delay={48} style={{position: 'absolute', left: 24, top: 46, width: 152, textAlign: 'center'}}>
          <CirclePlay size={46} color={C.flash} strokeWidth={2.6} />
          <div style={{marginTop: 8, backgroundColor: C.white, color: C.ink, fontSize: 42, fontWeight: 950, padding: '4px 18px', borderRadius: 10}}>着手</div>
          <div style={{marginTop: 10, fontSize: 22, color: C.chalk, fontWeight: 800}}>发令枪响</div>
        </Enter>
      </div>
      <div data-final-knowledge="boundary-run-zone" style={{position: 'absolute', left: 940, right: 0, top: 0, height: 264, backgroundColor: C.track, borderRadius: 18}}>
        <Enter delay={58} style={{position: 'absolute', left: 28, top: 18}}>
          <LabelBlock color={C.flash} size={30}>实行阶段</LabelBlock>
        </Enter>
        <div style={{position: 'absolute', left: 30, top: 108, display: 'flex', gap: 18}}>
          {[0, 1, 2, 3, 4, 5].map((i) => <Dash key={i} delay={64 + i * 7} style={{width: 52, height: 10, backgroundColor: C.chalk, borderRadius: 5}} />)}
        </div>
        <Enter delay={70} style={{position: 'absolute', left: 28, top: 152, fontSize: 22, color: C.chalk, fontWeight: 700}}>危险已经迫近法益——开始实行</Enter>
        <Enter delay={78} style={{position: 'absolute', right: 24, top: 18}}><Chip tone="ink" style={{backgroundColor: C.white, color: C.ink}}>犯罪未遂</Chip></Enter>
      </div>
      <div data-final-knowledge="boundary-danger-standard" style={{position: 'absolute', left: 0, right: 0, top: 288, height: 148, backgroundColor: C.paper, border: `3px solid ${C.ink}`, borderRadius: 14, padding: '16px 26px'}}>
        <Enter delay={84}><LabelBlock ink color={C.warm} size={26}>着手的判断标准</LabelBlock></Enter>
        <Enter delay={94} style={{marginTop: 10, display: 'flex', alignItems: 'center', gap: 14, fontSize: 30, fontWeight: 850}}>
          <span>行为对法益造成</span>
          <Chip tone="ink" style={{backgroundColor: C.ink, fontSize: 24}}>现实</Chip>
          <Chip tone="ink" style={{backgroundColor: C.ink, fontSize: 24}}>紧迫</Chip>
          <Chip tone="ink" style={{backgroundColor: C.ink, fontSize: 24}}>直接</Chip>
          <span>的危险</span>
          <span style={{height: 4, flex: 1, backgroundColor: C.ink, opacity: 0.25}} />
          <SoftHi style={{fontSize: 28}}><CirclePlay size={28} color={C.ink} />若是，即着手</SoftHi>
        </Enter>
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 460, height: 284, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px'}}>
        <Enter delay={130} style={{display: 'flex', alignItems: 'center', gap: 12, fontSize: 23, fontWeight: 900, color: C.chalk}}>
          <GraduationCap size={30} color={C.flash} />
          2019年真题 · 甲欲毒杀乙，向乙邮寄毒药——何时着手？
        </Enter>
        <div style={{marginTop: 12, display: 'flex', gap: 20}}>
          <div data-final-knowledge="boundary-exam-sent" style={{flex: 1, backgroundColor: 'rgba(243,233,210,0.08)', border: '2px solid rgba(243,233,210,0.35)', borderRadius: 10, padding: '12px 18px'}}>
            <Enter delay={144}><Chip style={{fontSize: 26, fontWeight: 900}}>寄出时</Chip></Enter>
            <Enter delay={154} style={{marginTop: 8, fontSize: 22, color: 'rgba(243,233,210,0.85)'}}>危险尚未迫近——毒药还在途中</Enter>
            <Enter delay={164} style={{marginTop: 10}}><Neg dark={false} size={28}>不是着手</Neg></Enter>
          </div>
          <div data-final-knowledge="boundary-exam-received" style={{flex: 1, backgroundColor: 'rgba(243,233,210,0.08)', border: '2px solid rgba(243,233,210,0.35)', borderRadius: 10, padding: '12px 18px'}}>
            <Enter delay={176}><Chip style={{fontSize: 26, fontWeight: 900}}>收到时</Chip></Enter>
            <Enter delay={184} style={{marginTop: 8, fontSize: 22, color: 'rgba(243,233,210,0.85)'}}>危险已经紧迫——毒药到了支配范围</Enter>
            <Enter delay={192} style={{marginTop: 10}}><Stamp delay={196}>是着手</Stamp></Enter>
          </div>
        </div>
        <div data-final-knowledge="boundary-exam-exception-note">
          <Enter delay={206} style={{marginTop: 14, fontSize: 22, color: C.chalkDim}}>
            例外：<ThinU color={C.chalk}>炸弹等在途已有危险</ThinU> —— 寄出时即着手（见 03 特殊问题）
          </Enter>
        </div>
      </div>
    </div>
  </Shell>;
};

const BlocksChip = ({children}: {children: ReactNode}) => (
  <Chip tone="chalk" style={{border: `2px dashed ${C.chalkDim}`, borderRadius: 8}}>
    <CircleDashed size={20} color={C.chalk} />
    {children}
  </Chip>
);

const GhostNumeral = ({n}: {n: string}) => <span style={{fontSize: 40, fontWeight: 950, color: C.ghost, width: 34, lineHeight: 1}}>{n}</span>;

export const ExamCommencementMapScene = () => (
  <Shell code="02" title="易考情形：六条跑道的发令线">
    <div data-layout="dual-family-lane-board" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="family-lane-comparison,per-lane-threshold-shift" data-focal-rule="each-crime-fires-when-force-reaches-the-body-or-intent-reaches-the-other-side" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', left: 0, top: 0, width: 872, height: 560, backgroundColor: C.track, borderRadius: 18, padding: '16px 20px'}}>
        <div data-final-knowledge="map-family-violent">
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Zap size={30} color={C.flash} />
            <LabelBlock size={28}>暴力·侵入型</LabelBlock>
            <span style={{fontSize: 22, color: C.chalk, fontWeight: 700}}>对人身开始强制，或侵入住宅</span>
          </Enter>
        </div>
        <div data-final-knowledge="map-lane-robbery" style={{marginTop: 12, backgroundColor: C.panelWhite, borderRadius: 12, padding: '10px 14px'}}>
          <Enter delay={24} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GhostNumeral n="1" />
            <LabelBlock size={27}>抢劫罪</LabelBlock>
            <BlocksChip>各就位：准备凶器、诱骗上车</BlocksChip>
            <Dash delay={34} style={{flex: 1, borderTop: `3px dashed ${C.chalkDim}`}} />
            <Flag size={24} color={C.chalk} />
          </Enter>
          <Enter delay={44} style={{marginTop: 10, marginLeft: 46, display: 'flex', alignItems: 'center', gap: 12}}>
            <CirclePlay size={24} color={C.flash} />
            <SoftHi>对人使用暴力·胁迫·强制手段时</SoftHi>
            <span style={{flex: 1}} />
            <GraduationCap size={22} color={C.flash} />
            <span style={{fontSize: 22, color: C.chalk, fontWeight: 800, whiteSpace: 'nowrap'}}>2024真题：埋伏哨兵未得手</span>
            <Stamp delay={56} tone="chalk">预备</Stamp>
          </Enter>
        </div>
        <div data-final-knowledge="map-lane-rape" style={{marginTop: 10, backgroundColor: C.panelWhite, borderRadius: 12, padding: '10px 14px'}}>
          <Enter delay={70} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GhostNumeral n="2" />
            <LabelBlock size={27}>强奸罪</LabelBlock>
            <BlocksChip>各就位：埋伏、尾随</BlocksChip>
            <Dash delay={80} style={{flex: 1, borderTop: `3px dashed ${C.chalkDim}`}} />
            <Flag size={24} color={C.chalk} />
          </Enter>
          <Enter delay={90} style={{marginTop: 10, marginLeft: 46, display: 'flex', alignItems: 'center', gap: 12}}>
            <CirclePlay size={24} color={C.flash} />
            <SoftHi>对妇女实施暴力·胁迫·强制手段时</SoftHi>
          </Enter>
          <Enter delay={102} style={{marginTop: 8, marginLeft: 46, display: 'flex', alignItems: 'center', gap: 10}}>
            <GraduationCap size={22} color={C.flash} />
            <span style={{fontSize: 22, color: C.chalk, fontWeight: 800, whiteSpace: 'nowrap'}}>2006真题：埋伏未等到</span>
            <Stamp delay={110} tone="chalk">预备</Stamp>
            <span style={{flex: 1}} />
            <Chip style={{fontSize: 22}}>认定标准——而非奸淫时</Chip>
          </Enter>
        </div>
        <div data-final-knowledge="map-lane-burglary" style={{marginTop: 10, backgroundColor: C.panelWhite, borderRadius: 12, padding: '10px 14px'}}>
          <Enter delay={126} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GhostNumeral n="3" />
            <LabelBlock size={27}>盗窃罪·入户</LabelBlock>
            <DoorClosed size={26} color={C.chalk} />
            <BlocksChip>各就位：翻墙、潜至屋外</BlocksChip>
            <Dash delay={134} style={{flex: 1, borderTop: `3px dashed ${C.chalkDim}`}} />
            <Flag size={24} color={C.chalk} />
          </Enter>
          <Enter delay={144} style={{marginTop: 8, marginLeft: 46, display: 'flex', alignItems: 'center', gap: 10}}>
            <Neg size={24}>翻院墙——不算着手（仍在各就位）</Neg>
          </Enter>
          <Enter delay={158} style={{marginTop: 8, marginLeft: 46, display: 'flex', alignItems: 'center', gap: 10}}>
            <CirclePlay size={22} color={C.flash} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.white, whiteSpace: 'nowrap'}}>屋里没人：撬门时 ＝ 着手</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.white, whiteSpace: 'nowrap', marginLeft: 40}}>屋里有人：进门后才算着手</span>
          </Enter>
          <Enter delay={174} style={{marginTop: 8, marginLeft: 46, fontSize: 22, color: C.chalk, fontWeight: 800}}>
            题干没特别交代时，<ThinU color={C.chalk}>默认标准：屋没人</ThinU>
          </Enter>
        </div>
      </div>
      <div style={{position: 'absolute', left: 904, top: 0, width: 872, height: 560, backgroundColor: C.track, borderRadius: 18, padding: '16px 20px'}}>
        <div data-final-knowledge="map-family-communicated">
          <Enter delay={12} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Megaphone size={30} color={C.flash} />
            <LabelBlock size={28} color={C.cool}>意思传达型</LabelBlock>
            <span style={{fontSize: 22, color: C.chalk, fontWeight: 700}}>犯罪意思传达到对方</span>
          </Enter>
        </div>
        <div data-final-knowledge="map-lane-fraud" style={{marginTop: 12, backgroundColor: C.panelWhite, borderRadius: 12, padding: '10px 14px'}}>
          <Enter delay={198} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GhostNumeral n="4" />
            <LabelBlock size={27} color={C.cool}>诈骗罪</LabelBlock>
            <BlocksChip>各就位：伪造证件、编写话术</BlocksChip>
            <Dash delay={206} style={{flex: 1, borderTop: `3px dashed ${C.chalkDim}`}} />
            <Flag size={24} color={C.chalk} />
          </Enter>
          <Enter delay={216} style={{marginTop: 10, marginLeft: 46, display: 'flex', alignItems: 'center', gap: 12}}>
            <CirclePlay size={24} color={C.flash} />
            <SoftHi>开始向被害人实施诈骗——开始要钱时（多数说）</SoftHi>
          </Enter>
          <Enter delay={230} style={{marginTop: 8, marginLeft: 46, display: 'flex', alignItems: 'center', gap: 10}}>
            <GraduationCap size={22} color={C.flash} />
            <span style={{fontSize: 22, color: C.chalk, fontWeight: 800, whiteSpace: 'nowrap'}}>2024年主观题：电话诈骗，话术铺垫后开始要钱</span>
            <Stamp delay={238} tone="chalk">着手</Stamp>
          </Enter>
        </div>
        <div data-final-knowledge="map-lane-insurance" style={{marginTop: 10, backgroundColor: C.panelWhite, borderRadius: 12, padding: '10px 14px'}}>
          <Enter delay={254} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GhostNumeral n="5" />
            <LabelBlock size={27} color={C.cool}>保险诈骗罪</LabelBlock>
            <BlocksChip>各就位：制造保险事故</BlocksChip>
            <Dash delay={262} style={{flex: 1, borderTop: `3px dashed ${C.chalkDim}`}} />
            <Flag size={24} color={C.chalk} />
          </Enter>
          <Enter delay={272} style={{marginTop: 10, marginLeft: 46, display: 'flex', alignItems: 'center', gap: 12}}>
            <CirclePlay size={24} color={C.flash} />
            <SoftHi><Building2 size={22} color={C.ink} />向保险公司提出索赔时</SoftHi>
            <span style={{flex: 1}} />
            <Neg size={22}>打电话询问索赔——不是着手</Neg>
          </Enter>
        </div>
        <div data-final-knowledge="map-lane-accusation" style={{marginTop: 10, backgroundColor: C.panelWhite, borderRadius: 12, padding: '10px 14px'}}>
          <Enter delay={290} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GhostNumeral n="6" />
            <LabelBlock size={27} color={C.cool}>诬告陷害罪</LabelBlock>
            <BlocksChip>各就位：写诬告材料</BlocksChip>
            <Dash delay={298} style={{flex: 1, borderTop: `3px dashed ${C.chalkDim}`}} />
            <Flag size={24} color={C.chalk} />
          </Enter>
          <Enter delay={308} style={{marginTop: 10, marginLeft: 46, display: 'flex', alignItems: 'center', gap: 12}}>
            <CirclePlay size={24} color={C.flash} />
            <SoftHi><Landmark size={22} color={C.ink} />向有关机关告发时</SoftHi>
          </Enter>
        </div>
      </div>
      <div data-final-knowledge="map-shared-rule" style={{position: 'absolute', left: 0, right: 0, top: 584, height: 160, backgroundColor: C.paper, border: `3px solid ${C.ink}`, borderRadius: 14, padding: '18px 26px'}}>
        <Enter delay={318}>
          <LabelBlock ink color={C.warm} size={28}>同一条跑道——发令线因罪而异</LabelBlock>
        </Enter>
        <Enter delay={328} style={{marginTop: 14, display: 'flex', gap: 18, alignItems: 'center'}}>
          <Chip tone="warm"><Zap size={20} color={C.white} />暴力·侵入型：枪响在 开始对人强制 或 侵入住宅 时</Chip>
          <Chip tone="cool"><Megaphone size={20} color={C.white} />意思传达型：枪响在 犯罪意思到达对方 时</Chip>
        </Enter>
      </div>
    </div>
  </Shell>
);

const RelayNode = ({label, delay}: {label: string; delay: number}) => (
  <Enter delay={delay} style={{backgroundColor: C.ink, color: C.white, fontSize: 24, fontWeight: 900, padding: '10px 18px', borderRadius: 10, whiteSpace: 'nowrap'}}>{label}</Enter>
);

export const SpecialCasesLaneScene = () => (
  <Shell code="03" title="特殊问题：隔离犯与间接正犯">
    <div data-layout="dual-special-rule-boards" data-visual-anchor="role-pair" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="time-space-threshold,proxy-standard-transfer" data-focal-rule="isolated-crime-delays-the-gun-by-in-transit-danger-and-indirect-perpetrator-fires-with-the-proxy" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="special-isolated-board" style={{position: 'absolute', left: 0, top: 0, width: 920, height: 620, backgroundColor: C.paper, border: `3px solid ${C.ink}`, borderRadius: 16, padding: '18px 26px'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Mail size={30} color={C.ink} />
          <LabelBlock ink color={C.warm} size={28}>隔离犯</LabelBlock>
          <Chip tone="ink" style={{backgroundColor: C.ink, fontSize: 22}}>行为与结果存在时空间隔（如邮寄毒药）</Chip>
          <span style={{flex: 1}} />
          <span style={{fontSize: 22, color: C.prep, fontWeight: 800, whiteSpace: 'nowrap'}}>发令时刻可以延迟</span>
        </Enter>
        <Enter delay={20} style={{marginTop: 16, fontSize: 25, fontWeight: 850}}>
          着手标准：<ThinU>看邮寄物在途中有无危险</ThinU>
        </Enter>
        <div data-final-knowledge="special-isolated-dangerous-route" style={{marginTop: 16, backgroundColor: 'rgba(179,58,38,0.10)', borderLeft: `6px solid ${C.warm}`, borderRadius: 10, padding: '14px 18px'}}>
          <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Chip tone="warm">途中有危险</Chip>
            <Dash delay={48} style={{flex: 1, borderTop: `3px dashed ${C.warm}`}} />
            <CirclePlay size={26} color={C.warm} />
            <SoftHi dark>寄出时 ＝ 着手</SoftHi>
          </Enter>
          <Enter delay={58} style={{marginTop: 12, display: 'flex', alignItems: 'center', gap: 10, fontSize: 22, color: C.ink, fontWeight: 700}}>
            <GraduationCap size={22} color={C.warm} />
            例2 炭疽热病毒粉——途中一旦泄漏即有传播危险
          </Enter>
          <Enter delay={66} style={{marginTop: 8, marginLeft: 32, fontSize: 22, color: C.prep, fontWeight: 700}}>
            如炸弹——自带爆炸危险，寄出即危险
          </Enter>
        </div>
        <div data-final-knowledge="special-isolated-safe-route" style={{marginTop: 14, backgroundColor: 'rgba(46,110,158,0.10)', borderLeft: `6px solid ${C.cool}`, borderRadius: 10, padding: '14px 18px'}}>
          <Enter delay={78} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Chip tone="cool">途中无危险</Chip>
            <Dash delay={86} style={{flex: 1, borderTop: `3px dashed ${C.cool}`}} />
            <CirclePlay size={26} color={C.cool} />
            <SoftHi dark>收到打开时 ＝ 着手</SoftHi>
          </Enter>
          <Enter delay={96} style={{marginTop: 12, display: 'flex', alignItems: 'center', gap: 10, fontSize: 22, color: C.ink, fontWeight: 700}}>
            <GraduationCap size={22} color={C.cool} />
            例1 有毒饼干——乙收到时才算着手
          </Enter>
          <Enter delay={106} style={{marginTop: 8, marginLeft: 32, fontSize: 22, color: C.prep, fontWeight: 700}}>
            收到但不打开 → 打开时才算着手
          </Enter>
        </div>
      </div>
      <div data-final-knowledge="special-indirect-board" style={{position: 'absolute', left: 952, top: 0, width: 824, height: 620, backgroundColor: C.paper, border: `3px solid ${C.ink}`, borderRadius: 16, padding: '18px 26px'}}>
        <Enter delay={12} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Users size={30} color={C.ink} />
          <LabelBlock ink color={C.cool} size={28}>间接正犯</LabelBlock>
          <Chip tone="ink" style={{backgroundColor: C.ink, fontSize: 22}}>利用他人实施犯罪</Chip>
          <span style={{fontSize: 22, color: C.prep, fontWeight: 800, whiteSpace: 'nowrap'}}>发令人换位</span>
        </Enter>
        <Enter delay={26} style={{marginTop: 16, fontSize: 25, fontWeight: 850}}>
          判断标准：<ThinU>以被利用人为标准</ThinU>
        </Enter>
        <div data-final-knowledge="special-indirect-case" style={{marginTop: 14, border: `2px dashed ${C.prep}`, borderRadius: 10, padding: '14px 18px'}}>
          <Enter delay={40} style={{fontSize: 23, fontWeight: 900}}>案例：甲指使小孩入室盗窃乙家</Enter>
          <Enter delay={54} style={{marginTop: 12, display: 'flex', alignItems: 'center', gap: 10}}>
            <Neg dark size={24}>甲指使时——不算着手</Neg>
          </Enter>
          <Enter delay={68} style={{marginTop: 10, display: 'flex', alignItems: 'center', gap: 10}}>
            <CirclePlay size={24} color={C.warm} />
            <span style={{fontSize: 24, fontWeight: 900}}>小孩着手实施时——甲才算着手</span>
          </Enter>
          <Enter delay={84} style={{marginTop: 12, display: 'flex', alignItems: 'center', gap: 10}}>
            <CircleDashed size={24} color={C.prep} />
            <Stamp delay={90} tone="prep">小孩途中被拐卖 → 甲＝盗窃罪间接正犯的犯罪预备</Stamp>
          </Enter>
        </div>
        <div style={{marginTop: 20, display: 'flex', alignItems: 'center', gap: 8}}>
          <RelayNode label="甲·利用人" delay={104} />
          <div style={{flex: 1}}>
            <Enter delay={112} style={{fontSize: 22, color: C.prep, fontWeight: 800, textAlign: 'center'}}>指使</Enter>
            <Dash delay={116} style={{borderTop: `3px dashed ${C.prep}`}} />
          </div>
          <RelayNode label="小孩·被利用人" delay={122} />
          <div style={{flex: 1}}>
            <Enter delay={130} style={{fontSize: 22, color: C.warm, fontWeight: 900, textAlign: 'center'}}>着手实施</Enter>
            <Dash delay={134} style={{borderTop: `4px solid ${C.warm}`}} />
          </div>
          <RelayNode label="乙家" delay={140} />
        </div>
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 648, height: 96, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6}}>
        <div style={{width: 120, height: 4, backgroundColor: C.ink}} />
        <Enter delay={190} style={{fontSize: 24, fontWeight: 900, color: C.ink}}>
          两条特殊跑道：发令时刻可以延迟（在途危险），发令人可以换位（以被利用人着手为准）
        </Enter>
      </div>
    </div>
  </Shell>
);

export const CommencementThresholdMap = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-stage-boundary" {...SCENES.stageBoundary}><StageBoundaryScene /></TimelineSequence>
    <TimelineSequence name="02-exam-commencement-map" {...SCENES.examCommencementMap}><ExamCommencementMapScene /></TimelineSequence>
    <TimelineSequence name="03-special-cases-lane" {...SCENES.specialCasesLane}><SpecialCasesLaneScene /></TimelineSequence>
  </AbsoluteFill>
);
