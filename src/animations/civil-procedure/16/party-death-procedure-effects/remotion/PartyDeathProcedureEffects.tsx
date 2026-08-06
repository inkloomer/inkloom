import type {CSSProperties, ReactNode} from 'react';
import {
  ArrowDown,
  ArrowRight,
  Ban,
  FileX,
  Gavel,
  GitBranch,
  Heart,
  Hourglass,
  Skull,
  Stamp,
  UserPlus,
  UserRound,
  UsersRound,
} from 'lucide-react';
import type {LucideIcon} from 'lucide-react';
import {AbsoluteFill, Easing, Sequence, interpolate, useCurrentFrame} from 'remotion';
import {SCENES} from './storyboard';

const P = {
  paper: '#0d1828',
  paper2: '#16243a',
  cream: '#f3ead4',
  ink: '#0a1320',
  creamInk: '#fbf4e0',
  amber: '#e3a73a',
  amberSoft: '#7d5a23',
  vermilion: '#d44a3a',
  teal: '#3aa39a',
  plum: '#a8639a',
  muted: '#8a96a8',
  line: '#3b4a64',
  paleAmber: '#3a2f1a',
  paleTeal: '#163c3a',
  paleVermilion: '#3a1c1a',
  palePlum: '#2e1f2c',
  signal: '#f2c14e',
  white: '#fbf6e6',
};

const PLAYER_CONTROL_SAFE_BOTTOM = 160;
type Style = CSSProperties & {translate?: string; scale?: string | number; rotate?: string};

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};
const ease = Easing.bezier(0.16, 1, 0.3, 1);
const progress = (frame: number, start: number, duration = 22) =>
  interpolate(frame, [start, start + duration], [0, 1], {...clamp, easing: ease});
const enter = (frame: number, start: number, dx = 0, dy = 20): Style => ({
  opacity: progress(frame, start, 18),
  translate: `${interpolate(frame, [start, start + 22], [dx, 0], {...clamp, easing: ease})}px ${interpolate(frame, [start, start + 22], [dy, 0], {...clamp, easing: ease})}px`,
});

const Text = ({children, size = 24, color = P.cream, weight = 550, style}: {children: ReactNode; size?: number; color?: string; weight?: number; style?: Style}) => (
  <div style={{fontFamily: 'var(--inkloom-animation-body)', fontSize: size, lineHeight: 1.32, color, fontWeight: weight, ...style}}>{children}</div>
);

const Label = ({children, color = P.amber}: {children: ReactNode; color?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', padding: '7px 12px 6px', background: color, color: P.ink, fontSize: 22, fontWeight: 800, letterSpacing: '.03em'}}>{children}</span>
);

const Icon = ({icon: Glyph, color = P.amber, size = 44}: {icon: LucideIcon; color?: string; size?: number}) => <Glyph size={size} strokeWidth={1.9} color={color} />;

const NightField = () => (
  <AbsoluteFill style={{backgroundColor: P.paper, backgroundImage: 'radial-gradient(circle at 20% 18%, rgba(243,234,212,.06), transparent 40%), radial-gradient(circle at 80% 78%, rgba(58,163,154,.06), transparent 42%), linear-gradient(90deg, rgba(243,234,212,.025) 1px, transparent 1px)', backgroundSize: 'auto, auto, 12px 12px'}} />
);

const SceneFrame = ({sceneId, number, question, anchor, grammar, treatments, children, titleAt = 'left'}: {sceneId: string; number: string; question: string; anchor: string; grammar: string; treatments: string; children: ReactNode; titleAt?: 'left' | 'center'}) => (
  <AbsoluteFill data-scene-id={sceneId} data-visual-anchor={anchor} data-visual-grammar={grammar} data-text-treatments={treatments} data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', color: P.cream}}>
    <NightField />
    <div style={{position: 'absolute', top: 34, left: titleAt === 'center' ? 220 : 76, right: titleAt === 'center' ? 220 : 76, display: 'flex', alignItems: 'center', justifyContent: titleAt === 'center' ? 'center' : 'space-between', zIndex: 20}}>
      <div style={{display: 'flex', alignItems: 'center', gap: 18, textAlign: titleAt}}>
        <div style={{width: 52, height: 52, display: 'grid', placeItems: 'center', background: P.vermilion, color: P.cream, fontFamily: 'var(--inkloom-animation-mono)', fontSize: 22, fontWeight: 800}}>{number}</div>
        <Text size={titleAt === 'center' ? 38 : 40} weight={800} color={P.cream}>{question}</Text>
      </div>
      {titleAt === 'left' && <Text size={17} color={P.muted} weight={700} style={{letterSpacing: '.12em'}}>DEATH · PROCEDURE FORK</Text>}
    </div>
    <div style={{position: 'absolute', left: 0, right: 0, top: 112, bottom: PLAYER_CONTROL_SAFE_BOTTOM, zIndex: 3}}>{children}</div>
    <div style={{position: 'absolute', left: 76, right: 76, bottom: 104, height: 2, background: P.cream, opacity: .18}} />
  </AbsoluteFill>
);

const Arrow = ({x1, y1, x2, y2, color = P.amber, start = 0, dashed = false, width = 4}: {x1: number; y1: number; x2: number; y2: number; color?: string; start?: number; dashed?: boolean; width?: number}) => {
  const frame = useCurrentFrame();
  const t = progress(frame, start, 30);
  return (
    <svg width="1920" height="818" viewBox="0 0 1920 818" style={{position: 'absolute', inset: 0, overflow: 'visible', pointerEvents: 'none'}}>
      <defs><marker id={`head-${x1}-${y1}-${x2}-${y2}`} markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill={color} /></marker></defs>
      <path d={`M ${x1} ${y1} L ${x1 + (x2 - x1) * t} ${y1 + (y2 - y1) * t}`} fill="none" stroke={color} strokeWidth={width} strokeDasharray={dashed ? '13 11' : undefined} markerEnd={t > .94 ? `url(#head-${x1}-${y1}-${x2}-${y2})` : undefined} />
    </svg>
  );
};

const SignalPlate = ({label, sublabel, color = P.amber, icon: Glyph, style}: {label: string; sublabel?: string; color?: string; icon?: LucideIcon; style?: Style}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 15, padding: '15px 18px', border: `2px solid ${color}`, background: P.paper2, boxShadow: `7px 7px 0 ${color}33`, ...style}}>
    {Glyph ? <Icon icon={Glyph} color={color} size={42} /> : null}
    <div><Text size={27} color={color} weight={800}>{label}</Text>{sublabel ? <Text size={22} color={P.muted} style={{marginTop: 4}}>{sublabel}</Text> : null}</div>
  </div>
);

const Token = ({icon: Glyph, label, color = P.amber, style, source, terminal}: {icon: LucideIcon; label: string; color?: string; style?: Style; source?: string; terminal?: string}) => (
  <div data-stateful-source={source} data-stateful-terminal={terminal} style={{width: 168, minHeight: 110, padding: '16px 14px 12px', background: P.paper2, border: `2px solid ${color}`, boxShadow: `8px 8px 0 ${color}33`, display: 'grid', placeItems: 'center', ...style}}>
    <Glyph size={38} color={color} strokeWidth={2.2} />
    <Text size={22} weight={800} color={color} style={{marginTop: 8, textAlign: 'center'}}>{label}</Text>
  </div>
);

export const PreSuitDeathScene = () => {
  /* Static audit inventory: data-final-knowledge="defendant-dies-before-suit" data-final-knowledge="no-defendant-no-filing-condition" data-final-knowledge="pre-acceptance-non-acceptance" data-final-knowledge="post-acceptance-dismiss-action" data-final-knowledge="nonacceptance-and-dismissal-are-procedural-rulings" data-stateful-source="defendant-token" data-stateful-terminal="defendant-token" <UserRound <Skull <Ban <FileX <ArrowRight */
  const frame = useCurrentFrame();
  const tokenOpacity = interpolate(frame, [10, 24], [0, 1], clamp);
  const terminalOpacity = interpolate(frame, [150, 165], [0, 1], clamp);
  return (
    <SceneFrame
      sceneId="pre-suit-death"
      number="01"
      question="起诉前被告已经死了，为什么连立案都过不去？"
      anchor="boundary"
      grammar="death-gate,defendant-clarity-test,two-stage-exit"
      treatments="label-block,stamp,thin-underline"
    >
      <div data-layout="defendant-clarity-gate-with-two-stage-exit-rails" data-visual-anchor="boundary" data-visual-grammar="death-gate,defendant-clarity-test,two-stage-exit" data-text-treatments="label-block,stamp,thin-underline" data-focal-rule="no-defendant-breaks-filing-condition-and-triggers-procedural-exit" data-focal-channels="icon,enclosure,connector" />
      <div style={{position: 'absolute', left: 80, top: 138, ...enter(frame, 4, 0, 18)}}>
        <Text size={20} color={P.amber} weight={800} style={{letterSpacing: '.12em'}}>PRE-SUIT · 起诉前死亡</Text>
        <Text size={28} color={P.cream} weight={800} style={{marginTop: 8}}>被告这一边空缺，连起诉条件都不成立</Text>
      </div>

      <Token icon={UserRound} label="被告" color={P.amber} source="defendant-token" style={{position: 'absolute', left: 110, top: 360, opacity: tokenOpacity}} />
      <div data-final-knowledge="defendant-dies-before-suit" style={{position: 'absolute', left: 320, top: 350, ...enter(frame, 36, 0, 16)}}>
        <SignalPlate icon={Skull} label="起诉前死亡" sublabel="对方已不在人世" color={P.vermilion} />
      </div>

      <Arrow x1={280} y1={400} x2={320} y2={400} color={P.amber} start={28} />
      <Arrow x1={520} y1={400} x2={780} y2={400} color={P.vermilion} start={70} />

      <div data-final-knowledge="no-defendant-no-filing-condition" style={{position: 'absolute', left: 750, top: 320, width: 380, ...enter(frame, 100, 0, 18)}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14, padding: '20px 24px', background: P.ink, border: `3px solid ${P.vermilion}`}}>
          <Ban size={48} color={P.vermilion} />
          <div>
            <Text size={22} color={P.muted}>被告明确？</Text>
            <Text size={32} color={P.vermilion} weight={900}>不满足</Text>
            <Text size={20} color={P.cream} style={{marginTop: 4}}>无明确被告 → 不符合起诉条件</Text>
          </div>
        </div>
      </div>

      <Arrow x1={1135} y1={400} x2={1190} y2={290} color={P.amber} start={120} />
      <Arrow x1={1135} y1={400} x2={1190} y2={510} color={P.amber} start={132} />

      <div data-final-knowledge="pre-acceptance-non-acceptance" style={{position: 'absolute', left: 1180, top: 200, width: 660, padding: '20px 24px', background: P.paleVermilion, borderTop: `8px solid ${P.vermilion}`, ...enter(frame, 142, 22, 0)}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
          <FileX size={42} color={P.vermilion} />
          <div>
            <Text size={22} color={P.muted}>受理前发现</Text>
            <Text size={32} color={P.vermilion} weight={900}>裁定不予受理</Text>
          </div>
        </div>
        <Text size={22} color={P.cream} style={{marginTop: 10}}>程序上直接挡回 · 不得进入实体审理</Text>
      </div>

      <div data-final-knowledge="post-acceptance-dismiss-action" style={{position: 'absolute', left: 1180, top: 430, width: 660, padding: '20px 24px', background: P.paleVermilion, borderTop: `8px solid ${P.vermilion}`, ...enter(frame, 152, 22, 0)}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
          <FileX size={42} color={P.vermilion} />
          <div>
            <Text size={22} color={P.muted}>受理后发现</Text>
            <Text size={32} color={P.vermilion} weight={900}>裁定驳回起诉</Text>
          </div>
        </div>
        <Text size={22} color={P.cream} style={{marginTop: 10}}>已立卷宗但程序不立 · 同样不得进入实体审理</Text>
      </div>

      <div data-stateful-terminal="defendant-token" style={{position: 'absolute', left: 1180, top: 660, width: 660, padding: '16px 24px', background: P.vermilion, color: P.cream, opacity: terminalOpacity, display: 'flex', alignItems: 'center', gap: 14}}>
        <Stamp size={36} color={P.cream} />
        <div>
          <Text size={22} color={P.cream} weight={850}>两种结果同属程序性裁定</Text>
          <Text size={20} color={P.cream} style={{marginTop: 4}}>未经实体审理 · 条件齐备可再次起诉</Text>
        </div>
      </div>

      <div data-final-knowledge="nonacceptance-and-dismissal-are-procedural-rulings" style={{position: 'absolute', left: 110, top: 590, width: 1000, padding: '16px 22px', background: P.ink, border: `2px solid ${P.amber}`, ...enter(frame, 200, 0, 16)}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <ArrowRight size={28} color={P.amber} />
          <Text size={22} color={P.cream} weight={800}>被告已死 → 起诉状先撞"<span style={{color: P.vermilion, fontWeight: 900}}>无明确被告</span>"这道门 → 立案与受理阶段被分别裁定挡回</Text>
        </div>
      </div>
    </SceneFrame>
  );
};

export const DuringSuitGeneralScene = () => {
  /* Static audit inventory: data-final-knowledge="general-case-triggers-suspension" data-final-knowledge="suspension-waits-for-successor" data-final-knowledge="successor-continues-and-party-is-changed" data-final-knowledge="no-successor-or-waiver-triggers-termination" data-stateful-source="general-case-token" data-stateful-terminal="general-case-token" <UserRound <Skull <Hourglass <UserPlus <Ban */
  const frame = useCurrentFrame();
  return (
    <SceneFrame
      sceneId="during-suit-general"
      number="02"
      question="诉讼走到一半，一方当事人死了，程序为什么先停下来等继承人？"
      anchor="flow-path"
      grammar="death-event,suspension-rail,successor-fork,party-replacement"
      treatments="soft-highlight,label-block,stamp"
    >
      <div data-layout="general-case-suspension-with-successor-fork" data-visual-anchor="flow-path" data-visual-grammar="death-event,suspension-rail,successor-fork,party-replacement" data-text-treatments="soft-highlight,label-block,stamp" data-focal-rule="general-case-death-suspends-and-forks-on-whether-a-successor-continues" data-focal-channels="connector,enclosure,icon" />

      <div style={{position: 'absolute', left: 80, top: 138, ...enter(frame, 4, 0, 18)}}>
        <Text size={20} color={P.teal} weight={800} style={{letterSpacing: '.12em'}}>DURING-SUIT · 一般案件</Text>
        <Text size={28} color={P.cream} weight={800} style={{marginTop: 8}}>诉讼标的可以继承 → 程序先停、等继承人表态</Text>
      </div>

      <Token icon={UserRound} label="一般案件当事人" color={P.amber} source="general-case-token" style={{position: 'absolute', left: 80, top: 350, ...enter(frame, 18, -18, 0)}} />
      <Arrow x1={250} y1={405} x2={360} y2={405} color={P.amber} start={36} />
      <div data-final-knowledge="general-case-triggers-suspension" data-final-knowledge="defendant-dies-before-suit" style={{position: 'absolute', left: 340, top: 360, ...enter(frame, 42, 0, 14)}}>
        <SignalPlate icon={Skull} label="诉讼中死亡" sublabel="可继承的财产关系" color={P.vermilion} />
      </div>
      <Arrow x1={580} y1={405} x2={680} y2={405} color={P.teal} start={56} />

      <div data-final-knowledge="suspension-waits-for-successor" style={{position: 'absolute', left: 670, top: 350, ...enter(frame, 60, 0, 16)}}>
        <SignalPlate icon={Hourglass} label="诉讼中止" sublabel="等待继承人表明是否继续" color={P.teal} />
      </div>

      <Arrow x1={920} y1={405} x2={1040} y2={405} color={P.teal} start={88} />

      <div style={{position: 'absolute', left: 1030, top: 220, width: 220, ...enter(frame, 102, 0, 14)}}>
        <Label color={P.amber}><GitBranch size={20} color={P.ink} style={{marginRight: 8, verticalAlign: '-3px'}} /> 继承人</Label>
      </div>
      <Arrow x1={1250} y1={260} x2={1250} y2={360} color={P.teal} start={120} dashed />
      <Arrow x1={1250} y1={540} x2={1250} y2={620} color={P.vermilion} start={126} />

      <div data-final-knowledge="successor-continues-and-party-is-changed" style={{position: 'absolute', left: 1300, top: 240, width: 540, padding: '20px 24px', background: P.paleTeal, borderLeft: `9px solid ${P.teal}`, ...enter(frame, 130, 22, 0)}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
          <UserPlus size={48} color={P.teal} />
          <div>
            <Text size={22} color={P.muted}>愿意继续</Text>
            <Text size={32} color={P.teal} weight={900}>变更当事人</Text>
          </div>
        </div>
        <Text size={22} color={P.cream} style={{marginTop: 12}}>继承人承受原当事人诉讼地位</Text>
        <Text size={22} color={P.cream} style={{marginTop: 4}}>案件在原诉讼阶段继续推进</Text>
      </div>

      <div data-final-knowledge="no-successor-or-waiver-triggers-termination" style={{position: 'absolute', left: 1300, top: 540, width: 540, padding: '20px 24px', background: P.paleVermilion, borderLeft: `9px solid ${P.vermilion}`, ...enter(frame, 142, 22, 0)}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
          <Ban size={48} color={P.vermilion} />
          <div>
            <Text size={22} color={P.muted}>放弃继承 / 无继承人</Text>
            <Text size={32} color={P.vermilion} weight={900}>诉讼终结</Text>
          </div>
        </div>
        <Text size={22} color={P.cream} style={{marginTop: 12}}>无承受主体 · 案件不能再走</Text>
        <Text size={22} color={P.cream} style={{marginTop: 4}}>以裁定方式结案 · 不再实体审理</Text>
      </div>

      <div data-stateful-terminal="general-case-token" style={{position: 'absolute', left: 80, top: 620, width: 1140, padding: '16px 22px', background: P.teal, color: P.ink, ...enter(frame, 200, 0, 18)}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
          <Stamp size={36} color={P.ink} />
          <Text size={24} color={P.ink} weight={900}>关键：身份与财产分离 —— 标的物可继承 ⇒ 程序可换人；标的物不可继承 ⇒ 程序直接终结</Text>
        </div>
      </div>
    </SceneFrame>
  );
};

export const DuringSuitIdentityScene = () => {
  /* Static audit inventory: data-final-knowledge="identity-relationship-skips-succession" data-final-knowledge="subject-disappearance-kills-the-claim" data-final-knowledge="direct-court-termination-on-identity-death" data-stateful-source="identity-case-token" data-stateful-terminal="identity-case-token" <Heart <Skull <Gavel <Ban <UsersRound */
  const frame = useCurrentFrame();
  return (
    <SceneFrame
      sceneId="during-suit-identity"
      number="03"
      question="身份关系案件里，一方死了为什么没有「换人继续」这条路？"
      anchor="comparison-axis"
      grammar="identity-relationship-skip,subject-disappearance,direct-termination"
      treatments="external-negation,stamp,label-block"
    >
      <div data-layout="identity-relationship-direct-termination-courtroom" data-visual-anchor="comparison-axis" data-visual-grammar="identity-relationship-skip,subject-disappearance,direct-termination" data-text-treatments="external-negation,stamp,label-block" data-focal-rule="identity-relationship-cannot-be-inherited-so-termination-is-immediate" data-focal-channels="enclosure,icon,contrast" />

      <div style={{position: 'absolute', left: 80, top: 138, ...enter(frame, 4, 0, 18)}}>
        <Text size={20} color={P.plum} weight={800} style={{letterSpacing: '.12em'}}>DURING-SUIT · 身份关系</Text>
        <Text size={28} color={P.cream} weight={800} style={{marginTop: 8}}>离婚 · 三费 · 解除收养 —— 诉讼标的随人走、不可继承</Text>
      </div>

      {/* Left: Identity relationship cases */}
      <div style={{position: 'absolute', left: 60, top: 200, width: 870, height: 520, padding: '28px 32px', background: P.palePlum, border: `3px solid ${P.plum}`, ...enter(frame, 14, -22, 0)}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
          <UsersRound size={56} color={P.plum} />
          <div>
            <Text size={22} color={P.muted} style={{letterSpacing: '.04em'}}>身份关系案件</Text>
            <Text size={38} color={P.plum} weight={900}>离婚 · 赡养费 · 扶养费 · 抚养费 · 解除收养</Text>
          </div>
        </div>

        <div data-final-knowledge="identity-relationship-skips-succession" style={{position: 'absolute', left: 32, top: 168, display: 'flex', alignItems: 'center', gap: 14, padding: '12px 18px', background: P.plum, color: P.cream, ...enter(frame, 60, 0, 12)}}>
          <Ban size={32} color={P.cream} />
          <Text size={24} color={P.cream} weight={900}>不可继承 · 没有"变更当事人"</Text>
        </div>

        <Token icon={Heart} label="身份关系" color={P.plum} source="identity-case-token" style={{position: 'absolute', left: 60, top: 270, ...enter(frame, 80, 0, 16)}} />
        <div data-final-knowledge="defendant-dies-before-suit" data-final-knowledge="subject-disappearance-kills-the-claim" style={{position: 'absolute', left: 280, top: 280, ...enter(frame, 100, 0, 14)}}>
          <SignalPlate icon={Skull} label="一方死亡" sublabel="身份关系标的随主体消灭" color={P.vermilion} />
        </div>

        <Arrow x1={230} y1={325} x2={280} y2={325} color={P.plum} start={120} />
        <Arrow x1={580} y1={325} x2={680} y2={325} color={P.vermilion} start={136} />

        <div data-final-knowledge="direct-court-termination-on-identity-death" style={{position: 'absolute', left: 660, top: 280, width: 200, padding: '20px 22px', background: P.vermilion, color: P.cream, ...enter(frame, 150, 22, 0)}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Gavel size={44} color={P.cream} />
            <Text size={30} color={P.cream} weight={900}>直接裁定</Text>
          </div>
          <Text size={26} color={P.cream} weight={900} style={{marginTop: 10}}>诉讼终结</Text>
        </div>
      </div>

      {/* Right: contrast panel */}
      <div style={{position: 'absolute', right: 60, top: 200, width: 410, height: 520, padding: '24px 28px', background: P.ink, border: `3px solid ${P.amber}`, ...enter(frame, 28, 22, 0)}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Stamp size={36} color={P.amber} />
          <Text size={26} color={P.amber} weight={900}>为何不"换人继续"？</Text>
        </div>
        <Text size={22} color={P.cream} weight={800} style={{marginTop: 16}}>身份关系依附于特定主体</Text>
        <Text size={22} color={P.muted} style={{marginTop: 8}}>离婚关系中的"夫妻"、赡养关系中的"父母子女"、收养关系中的"养父母与养子女"，都不可能由继承人来替代。</Text>

        <div style={{position: 'absolute', left: 24, right: 24, bottom: 28, padding: '16px 18px', background: P.plum}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <Ban size={26} color={P.cream} />
            <Text size={22} color={P.cream} weight={900}>主体消灭 → 标的消灭</Text>
          </div>
          <Text size={20} color={P.cream} style={{marginTop: 6}}>法院<span style={{fontWeight: 900}}>不必</span>等继承人表态 · 直接裁定终结</Text>
        </div>
      </div>

      <div data-stateful-terminal="identity-case-token" style={{position: 'absolute', left: 60, right: 60, top: 740, ...enter(frame, 230, 0, 16), display: 'flex', alignItems: 'center', gap: 14, padding: '16px 22px', background: P.plum, color: P.cream}}>
        <ArrowDown size={32} color={P.cream} />
        <Text size={22} color={P.cream} weight={900}>身份关系案件：死亡 ⇒ 标的消灭 ⇒ 裁定终结（不经中止、不换当事人）</Text>
      </div>
    </SceneFrame>
  );
};

export const PartyDeathProcedureEffects = () => (
  <AbsoluteFill style={{backgroundColor: P.paper}}>
    <Sequence from={SCENES.preSuitDeath.start} durationInFrames={SCENES.preSuitDeath.duration}><PreSuitDeathScene /></Sequence>
    <Sequence from={SCENES.duringSuitGeneral.start} durationInFrames={SCENES.duringSuitGeneral.duration}><DuringSuitGeneralScene /></Sequence>
    <Sequence from={SCENES.duringSuitIdentity.start} durationInFrames={SCENES.duringSuitIdentity.duration}><DuringSuitIdentityScene /></Sequence>
  </AbsoluteFill>
);
