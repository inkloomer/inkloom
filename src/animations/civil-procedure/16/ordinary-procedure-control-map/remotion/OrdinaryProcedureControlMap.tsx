import type {CSSProperties, ReactNode} from 'react';
import {
  ArrowDown,
  ArrowRight,
  Ban,
  BookOpenCheck,
  CalendarClock,
  Check,
  CircleAlert,
  Clock3,
  FileCheck2,
  FilePenLine,
  FileText,
  Gavel,
  Hourglass,
  Landmark,
  Link2,
  Scale,
  ShieldCheck,
  Stamp,
  UserRound,
  UsersRound,
} from 'lucide-react';
import type {LucideIcon} from 'lucide-react';
import {AbsoluteFill, Easing, Sequence, interpolate, useCurrentFrame} from 'remotion';
import {SCENES} from './storyboard';

const P = {
  paper: '#f3ead8',
  paper2: '#fffaf0',
  ink: '#18222b',
  navy: '#244866',
  red: '#a33d32',
  gold: '#c28b2c',
  teal: '#317c78',
  plum: '#72506c',
  muted: '#6f756f',
  line: '#b9aa91',
  paleBlue: '#dce9e7',
  paleRed: '#f0d8d0',
  paleGold: '#efe0b8',
  palePlum: '#e7dce4',
  white: '#fffdf7',
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

const Text = ({children, size = 24, color = P.ink, weight = 550, style}: {children: ReactNode; size?: number; color?: string; weight?: number; style?: Style}) => (
  <div style={{fontFamily: 'var(--animation-body, sans-serif)', fontSize: size, lineHeight: 1.32, color, fontWeight: weight, ...style}}>{children}</div>
);

const Label = ({children, color = P.navy}: {children: ReactNode; color?: string}) => (
  <span style={{display: 'inline-flex', padding: '7px 12px 6px', background: color, color: P.white, fontSize: 22, fontWeight: 750, letterSpacing: '.03em'}}>{children}</span>
);

const Icon = ({icon: Glyph, color = P.navy, size = 44}: {icon: LucideIcon; color?: string; size?: number}) => <Glyph size={size} strokeWidth={1.9} color={color} />;

const PaperTexture = () => (
  <AbsoluteFill style={{backgroundColor: P.paper, backgroundImage: 'radial-gradient(circle at 18% 12%, rgba(255,255,255,.7), transparent 34%), linear-gradient(90deg, rgba(80,57,35,.035) 1px, transparent 1px)', backgroundSize: 'auto, 12px 12px'}} />
);

const SceneFrame = ({sceneId, number, question, anchor, grammar, treatments, children, titleAt = 'left'}: {sceneId: string; number: string; question: string; anchor: string; grammar: string; treatments: string; children: ReactNode; titleAt?: 'left' | 'center'}) => (
  <AbsoluteFill data-scene-id={sceneId} data-visual-anchor={anchor} data-visual-grammar={grammar} data-text-treatments={treatments} data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', color: P.ink}}>
    <PaperTexture />
    <div style={{position: 'absolute', top: 34, left: titleAt === 'center' ? 220 : 76, right: titleAt === 'center' ? 220 : 76, display: 'flex', alignItems: 'center', justifyContent: titleAt === 'center' ? 'center' : 'space-between', zIndex: 20}}>
      <div style={{display: 'flex', alignItems: 'center', gap: 18, textAlign: titleAt}}>
        <div style={{width: 52, height: 52, display: 'grid', placeItems: 'center', background: P.red, color: P.white, fontFamily: 'var(--animation-mono, monospace)', fontSize: 22, fontWeight: 800}}>{number}</div>
        <Text size={titleAt === 'center' ? 39 : 42} weight={800}>{question}</Text>
      </div>
      {titleAt === 'left' && <Text size={17} color={P.muted} weight={700} style={{letterSpacing: '.12em'}}>一审普通程序 · CASE CONTROL</Text>}
    </div>
    <div style={{position: 'absolute', left: 0, right: 0, top: 112, bottom: PLAYER_CONTROL_SAFE_BOTTOM, zIndex: 3}}>{children}</div>
    <div style={{position: 'absolute', left: 76, right: 76, bottom: 104, height: 2, background: P.ink, opacity: .18}} />
  </AbsoluteFill>
);

const Arrow = ({x1, y1, x2, y2, color = P.navy, start = 0, dashed = false, width = 4}: {x1: number; y1: number; x2: number; y2: number; color?: string; start?: number; dashed?: boolean; width?: number}) => {
  const frame = useCurrentFrame();
  const t = progress(frame, start, 30);
  return (
    <svg width="1920" height="818" viewBox="0 0 1920 818" style={{position: 'absolute', inset: 0, overflow: 'visible', pointerEvents: 'none'}}>
      <defs><marker id={`head-${x1}-${y1}-${x2}-${y2}`} markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill={color} /></marker></defs>
      <path d={`M ${x1} ${y1} L ${x1 + (x2 - x1) * t} ${y1 + (y2 - y1) * t}`} fill="none" stroke={color} strokeWidth={width} strokeDasharray={dashed ? '13 11' : undefined} markerEnd={t > .94 ? `url(#head-${x1}-${y1}-${x2}-${y2})` : undefined} />
    </svg>
  );
};

const CourtSeal = ({label, sublabel, color = P.navy, icon = Landmark, style}: {label: string; sublabel?: string; color?: string; icon?: LucideIcon; style?: Style}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 15, padding: '15px 18px', border: `2px solid ${color}`, background: P.paper2, boxShadow: `7px 7px 0 ${color}22`, ...style}}>
    <Icon icon={icon} color={color} size={42} />
    <div><Text size={27} color={color} weight={800}>{label}</Text>{sublabel && <Text size={22} color={P.muted} style={{marginTop: 4}}>{sublabel}</Text>}</div>
  </div>
);

const Docket = ({label, color = P.gold, style, source, terminal}: {label: string; color?: string; style?: Style; source?: string; terminal?: string}) => (
  <div data-stateful-source={source} data-stateful-terminal={terminal} style={{width: 176, minHeight: 102, padding: '18px 16px 14px', background: P.white, border: `2px solid ${color}`, boxShadow: `10px 10px 0 ${color}28`, ...style}}>
    <FileText size={34} color={color} strokeWidth={2} />
    <Text size={23} weight={800} style={{marginTop: 8}}>{label}</Text>
  </div>
);

export const FilingGateScene = () => {
  /* Static audit inventory: data-final-knowledge="plaintiff-direct-interest" data-final-knowledge="defendant-identifiable" data-final-knowledge="claim-specific" data-final-knowledge="court-scope-jurisdiction" data-final-knowledge="pre-acceptance-non-acceptance" data-final-knowledge="post-acceptance-dismiss-action" data-final-knowledge="merits-dismiss-claim" data-stateful-source="filing-docket" <Landmark <CalendarClock */
  const frame = useCurrentFrame();
  const docketX = interpolate(frame, [5, 42, 110], [95, 310, 795], clamp);
  return (
    <SceneFrame sceneId="filing-gate" number="01" question="起诉先过哪四道门？失败发生在哪一阶段？" anchor="boundary" grammar="four-gates,stage-exits,court-intake" treatments="label-block,thin-underline,stamp">
      <div data-layout="courthouse-portico-with-four-intake-gates-and-three-stage-exits" data-visual-anchor="boundary" data-visual-grammar="four-gates,stage-exits,court-intake" data-text-treatments="label-block,thin-underline,stamp" data-focal-rule="four-filing-conditions-before-three-stage-specific-exits" data-focal-channels="icon,enclosure,motion" />
      <div style={{position: 'absolute', left: 72, top: 300, width: 1780, height: 235, borderTop: `14px solid ${P.navy}`, borderBottom: `5px solid ${P.navy}`, background: 'rgba(255,253,247,.6)'}}>
        <div style={{position: 'absolute', top: -62, left: 610, width: 560, height: 62, background: P.navy, clipPath: 'polygon(50% 0,100% 100%,0 100%)'}} />
        {[
          ['plaintiff-direct-interest', UserRound, '原告适格', '与本案有直接利害关系'],
          ['defendant-identifiable', UsersRound, '被告明确', '只须明确，不要求适格'],
          ['claim-specific', FilePenLine, '请求具体', '请求、事实和理由具体'],
          ['court-scope-jurisdiction', Landmark, '主管＋管辖', '法院主管且受诉法院有管辖'],
        ].map(([id, glyph, title, detail], i) => (
          <div key={String(id)} data-final-knowledge={String(id)} style={{position: 'absolute', left: 245 + i * 375, top: 25, width: 278, height: 180, borderLeft: `7px solid ${i === 0 ? P.gold : P.navy}`, padding: '18px 18px', background: P.paper2, ...enter(frame, 18 + i * 18, 0, 24)}}>
            <Icon icon={glyph as LucideIcon} color={i === 0 ? P.gold : P.navy} /><Text size={30} weight={800} style={{marginTop: 10}}>{String(title)}</Text><Text size={22} color={P.muted} style={{marginTop: 7}}>{String(detail)}</Text>
          </div>
        ))}
      </div>
      <Docket label="起诉状" source="filing-docket" style={{position: 'absolute', left: docketX, top: 355, zIndex: 10}} />
      <div data-final-knowledge="file-within-seven-days" style={{position: 'absolute', left: 790, top: 555, width: 365, ...enter(frame, 112, 0, 18)}}><CourtSeal icon={CalendarClock} label="四门全过" sublabel="7日内立案并通知当事人" color={P.teal} /></div>
      <div data-stateful-terminal="filing-docket" style={{position: 'absolute', left: 894, top: 680, width: 150, padding: '10px 14px', background: P.teal, color: P.white, opacity: progress(frame, 125, 18), textAlign: 'center', fontSize: 22, fontWeight: 800}}>已立案案卷</div>
      <Arrow x1={960} y1={535} x2={960} y2={556} color={P.teal} start={106} />
      {[
        ['pre-acceptance-non-acceptance', 96, '受理前发现', '裁定不予受理', '可上诉'],
        ['post-acceptance-dismiss-action', 1268, '受理后发现', '裁定驳回起诉', '可上诉'],
        ['merits-dismiss-claim', 1268, '实体审理后', '判决驳回诉讼请求', '请求实体上不获支持'],
      ].map(([id, left, stage, result, note], i) => (
        <div key={id} data-final-knowledge={id} style={{position: 'absolute', left: Number(left), top: i === 2 ? 620 : 554, width: i === 0 ? 430 : 500, padding: '17px 20px', background: i === 2 ? P.paleGold : P.paleRed, borderLeft: `8px solid ${i === 2 ? P.gold : P.red}`, ...enter(frame, 135 + i * 16, i === 0 ? -24 : 24, 0)}}>
          <Text size={22} color={P.muted}>{stage}</Text><Text size={29} color={i === 2 ? P.gold : P.red} weight={850}>{result}</Text><Text size={22} color={P.muted}>{note}</Text>
        </div>
      ))}
    </SceneFrame>
  );
};

export const RepeatSuitTestScene = () => {
  /* Static audit inventory: data-final-knowledge="same-parties" data-final-knowledge="same-subject-matter" data-final-knowledge="same-claim-or-substantive-denial" data-final-knowledge="non-merits-refiling" data-final-knowledge="support-new-circumstances" data-final-knowledge="six-month-restrictions" data-stateful-source="later-suit-docket" <UserRound <Link2 */
  const frame = useCurrentFrame();
  return (
    <SceneFrame sceneId="repeat-suit-test" number="02" question="什么情况下，后诉才真正撞上“一事不再理”？" anchor="flow-path" grammar="three-input-confluence,conflict-barrier,exception-bypass" treatments="soft-highlight,external-negation,label-block" titleAt="center">
      <div data-layout="three-ribbons-converge-on-repeat-suit-barrier-with-exception-arc" data-visual-anchor="flow-path" data-visual-grammar="three-input-confluence,conflict-barrier,exception-bypass" data-text-treatments="soft-highlight,external-negation,label-block" data-focal-rule="all-three-identities-must-converge" data-focal-channels="connector,enclosure,contrast" />
      <Docket label="后诉案卷" source="later-suit-docket" style={{position: 'absolute', left: 82, top: 320, ...enter(frame, 4, -20, 0)}} />
      {[
        ['same-parties', UserRound, '当事人相同', 235, P.navy],
        ['same-subject-matter', Link2, '诉讼标的相同', 382, P.plum],
        ['same-claim-or-substantive-denial', FileCheck2, '请求相同，或后诉请求实质否定前诉裁判结果', 529, P.red],
      ].map(([id, glyph, label, top, color], i) => (
        <div key={id} data-final-knowledge={id} style={{position: 'absolute', left: 360, top: Number(top), width: 700, height: i === 2 ? 104 : 90, display: 'flex', alignItems: 'center', gap: 18, padding: '13px 22px', background: P.paper2, borderBottom: `6px solid ${color}`, ...enter(frame, 20 + i * 24, -30, 0)}}>
          <Icon icon={glyph as LucideIcon} color={String(color)} /><Text size={i === 2 ? 25 : 30} weight={800}>{String(label)}</Text>
        </div>
      ))}
      <Arrow x1={1060} y1={280} x2={1250} y2={400} color={P.navy} start={52} />
      <Arrow x1={1060} y1={427} x2={1250} y2={427} color={P.plum} start={68} />
      <Arrow x1={1060} y1={581} x2={1250} y2={454} color={P.red} start={84} />
      <div data-final-knowledge="all-three-required" style={{position: 'absolute', left: 1245, top: 282, width: 560, height: 290, background: P.red, color: P.white, padding: '26px 30px', clipPath: 'polygon(0 0,100% 0,100% 100%,0 100%,7% 50%)', ...enter(frame, 110, 26, 0)}}>
        <Ban size={52} strokeWidth={1.8} /><Text size={34} color={P.white} weight={900} style={{marginTop: 12}}>三项同时满足</Text><Text size={26} color={P.white} style={{marginTop: 12}}>未受理：裁定不予受理<br />已受理：裁定驳回起诉</Text>
      </div>
      <div data-final-knowledge="conflicting-judgment-risk" style={{position: 'absolute', left: 1280, top: 590, width: 485, display: 'flex', alignItems: 'center', gap: 15, ...enter(frame, 130, 0, 14)}}><CircleAlert size={44} color={P.red} /><Text size={24} color={P.red} weight={800}>目的：避免重复审理与冲突判决</Text></div>
      <svg width="1920" height="818" style={{position: 'absolute', inset: 0, pointerEvents: 'none'}}><path d="M 270 690 C 620 780, 1120 780, 1520 675" fill="none" stroke={P.teal} strokeWidth="6" strokeDasharray="16 12" strokeDashoffset={interpolate(frame, [135, 170], [900, 0], clamp)} /></svg>
      <div style={{position: 'absolute', left: 350, top: 675, display: 'flex', gap: 24}}>
        {[
          ['non-merits-refiling', '未实体处理', '不予受理／驳回起诉／撤诉后，符合条件可再诉'],
          ['support-new-circumstances', '新情况、新理由', '赡养费、扶养费、抚养费按新案受理'],
          ['six-month-restrictions', '身份关系 6个月', '不准离婚等＋撤诉离婚：原告无新情况新理由不得再诉'],
        ].map(([id, title, detail], i) => <div key={id} data-final-knowledge={id} style={{width: i === 2 ? 540 : 400, minHeight: 118, padding: '14px 17px', background: P.paleBlue, borderTop: `5px solid ${i === 2 ? P.gold : P.teal}`, ...enter(frame, 150 + i * 12, 0, 15)}}><Text size={24} color={i === 2 ? P.gold : P.teal} weight={850}>{title}</Text><Text size={22} style={{marginTop: 5}}>{detail}</Text></div>)}
      </div>
      <div data-stateful-terminal="later-suit-docket" style={{position: 'absolute', right: 82, top: 728, padding: '8px 12px', background: P.teal, color: P.white, fontSize: 22, fontWeight: 800, opacity: progress(frame, 170, 16)}}>例外旁路：重新受理</div>
    </SceneFrame>
  );
};

export const WithdrawalAbsenceScene = () => {
  /* Static audit tokens: <UserRound <UsersRound <Gavel */
  const frame = useCurrentFrame();
  return (
    <SceneFrame sceneId="withdrawal-absence" number="03" question="同样是不到庭，为什么有时按撤诉、有时缺席判决？" anchor="role-pair" grammar="two-courtroom-stages,actor-condition,result" treatments="label-block,stamp,external-negation">
      <div data-layout="paired-courtroom-stages-for-withdrawal-and-default-judgment" data-visual-anchor="role-pair" data-visual-grammar="two-courtroom-stages,actor-condition,result" data-text-treatments="label-block,stamp,external-negation" data-focal-rule="identify-the-claim-owner-before-applying-absence-consequence" data-focal-channels="icon,connector,contrast" />
      <div style={{position: 'absolute', left: 80, top: 80, width: 820, height: 655, background: P.paleGold, border: `3px solid ${P.gold}`, padding: 28, ...enter(frame, 6, -30, 0)}}>
        <Label color={P.gold}>A · 撤诉舞台</Label>
        <div data-final-knowledge="plaintiff-of-the-claim" style={{position: 'absolute', left: 45, top: 120, width: 250}}><CourtSeal icon={UserRound} label="“诉”的原告" sublabel="原告／有独三／反诉原告" color={P.gold} /></div>
        <Arrow x1={375} y1={282} x2={610} y2={282} color={P.gold} start={38} />
        <div data-final-knowledge="court-rules-on-withdrawal" style={{position: 'absolute', left: 500, top: 110, width: 270}}><CourtSeal icon={Gavel} label="法院裁定" sublabel="决定是否准许撤诉" color={P.red} /></div>
        <div data-final-knowledge="deemed-withdrawal-behavior" style={{position: 'absolute', left: 45, top: 360, width: 720, padding: '20px 22px', background: P.white, borderLeft: `9px solid ${P.gold}`, ...enter(frame, 70, 0, 20)}}>
          <Text size={25} weight={850}>按撤诉处理</Text><Text size={23} style={{marginTop: 9}}>拒不到庭 · 未经许可中途退庭 · 不预交受理费</Text><Text size={22} color={P.muted} style={{marginTop: 8}}>无民事行为能力原告的法定代理人，经传票无正当理由不到庭，也可以按撤诉处理。</Text>
        </div>
        <div style={{position: 'absolute', left: 45, top: 550, display: 'flex', gap: 12, alignItems: 'center'}}><Stamp size={36} color={P.red} /><Text size={22} color={P.red} weight={800}>法庭辩论终结后申请，被告不同意时，法院可以不准许</Text></div>
      </div>
      <div style={{position: 'absolute', right: 80, top: 80, width: 840, height: 655, background: P.paleBlue, border: `3px solid ${P.teal}`, padding: 28, ...enter(frame, 18, 30, 0)}}>
        <Label color={P.teal}>B · 缺席审判舞台</Label>
        <div data-final-knowledge="default-judgment-targets" style={{position: 'absolute', left: 42, top: 118, width: 290}}><CourtSeal icon={UsersRound} label="可缺席对象" sublabel="非必须到庭被告／无独三／反诉被告" color={P.teal} /></div>
        <div style={{position: 'absolute', left: 348, top: 120, width: 164, ...enter(frame, 48, 0, 18)}}><Docket label="传票" color={P.navy} /></div>
        <Arrow x1={1510} y1={282} x2={1690} y2={282} color={P.teal} start={58} />
        <div data-final-knowledge="summons-no-justification-or-unauthorized-exit" style={{position: 'absolute', right: 42, top: 118, width: 250}}><CourtSeal icon={Gavel} label="缺席判决" sublabel="传票＋无正当理由不到庭／中途退庭" color={P.red} /></div>
        <div data-final-knowledge="withdrawal-denied-plaintiff-default" style={{position: 'absolute', left: 42, top: 385, width: 750, padding: '22px 24px', background: P.white, border: `3px solid ${P.red}`, ...enter(frame, 102, 0, 22)}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 15}}><CircleAlert size={40} color={P.red} /><Text size={28} color={P.red} weight={900}>原告的特殊出口</Text></div>
          <Text size={24} style={{marginTop: 12}}>申请撤诉未获准许＋经传票无正当理由不到庭 → 对原告缺席判决</Text>
        </div>
        <div style={{position: 'absolute', left: 42, bottom: 38, display: 'flex', gap: 14, alignItems: 'center'}}><Ban size={34} color={P.teal} /><Text size={22} color={P.muted}>必须到庭的被告不能直接缺席判决</Text></div>
      </div>
    </SceneFrame>
  );
};

export const ProceduralObstaclesScene = () => {
  /* Static audit inventory: data-final-knowledge="postpone-hearing-litigation-continues" data-final-knowledge="postponement-decision" data-final-knowledge="suspension-future-uncertain" data-final-knowledge="suspension-order" data-final-knowledge="termination-no-need-to-continue" data-final-knowledge="termination-order" <Clock3 <Hourglass <Ban */
  const frame = useCurrentFrame();
  return (
    <SceneFrame sceneId="procedural-obstacles" number="04" question="障碍出现后，程序是推迟、等待，还是彻底结束？审限如何延长？" anchor="document-fork" grammar="obstacle-strength-fork,terminal-state,approval-timeline" treatments="label-block,thin-underline,stamp">
      <div data-layout="obstacle-river-fork-above-first-instance-time-limit-approval-axis" data-visual-anchor="document-fork" data-visual-grammar="obstacle-strength-fork,terminal-state,approval-timeline" data-text-treatments="label-block,thin-underline,stamp" data-focal-rule="obstacle-state-selects-route-while-time-extension-needs-escalating-approval" data-focal-channels="connector,spatial,icon" />
      <div style={{position: 'absolute', left: 90, top: 95, width: 235, ...enter(frame, 4, -20, 0)}}><CourtSeal icon={FileText} label="进行中的诉讼" sublabel="遇到程序障碍" color={P.navy} /></div>
      <Arrow x1={330} y1={220} x2={520} y2={220} color={P.navy} start={22} />
      {[
        ['postpone-hearing-litigation-continues', 'postponement-decision', Clock3, '延期审理', '临时障碍', '庭审推迟，诉讼继续', '决定', P.gold, 525],
        ['suspension-future-uncertain', 'suspension-order', Hourglass, '诉讼中止', '走向不确定', '等继承人／代理人／承受人、不可抗力或另一案结果', '裁定', P.plum, 985],
        ['termination-no-need-to-continue', 'termination-order', Ban, '诉讼终结', '无需继续', '死亡后无继承主体，或身份关系诉讼标的消灭', '裁定', P.red, 1445],
      ].map(([mainId, docId, glyph, title, cue, detail, doc, color, left], i) => (
        <div key={String(mainId)} style={{position: 'absolute', left: Number(left), top: 80, width: 375, height: 410, padding: '22px 24px', background: P.paper2, borderTop: `10px solid ${color}`, boxShadow: `9px 9px 0 ${color}20`, ...enter(frame, 38 + i * 28, 0, 28)}}>
          <div data-final-knowledge={String(mainId)}><Icon icon={glyph as LucideIcon} color={String(color)} size={48} /><Text size={32} weight={900} style={{marginTop: 12}}>{String(title)}</Text><Text size={24} color={String(color)} weight={800} style={{marginTop: 7}}>{String(cue)}</Text><Text size={22} style={{marginTop: 14}}>{String(detail)}</Text></div>
          <div data-final-knowledge={String(docId)} style={{position: 'absolute', left: 24, bottom: 22}}><Label color={String(color)}>{String(doc)}</Label></div>
        </div>
      ))}
      <Arrow x1={520} y1={220} x2={525} y2={220} color={P.gold} start={35} />
      <Arrow x1={520} y1={220} x2={985} y2={220} color={P.plum} start={48} dashed />
      <Arrow x1={520} y1={220} x2={1445} y2={220} color={P.red} start={61} />
      <div data-final-knowledge="death-successor-boundary" style={{position: 'absolute', left: 665, top: 515, width: 1100, display: 'flex', alignItems: 'center', gap: 16, padding: '12px 18px', background: P.paleRed, borderLeft: `7px solid ${P.red}`, ...enter(frame, 125, 0, 16)}}><UserRound size={34} color={P.red} /><Text size={23} weight={750}>一般死亡：先中止等继承 → 无继承主体才终结；身份关系死亡：诉讼标的消灭，直接终结</Text></div>
      <div style={{position: 'absolute', left: 88, right: 88, top: 610, height: 170, background: P.ink, color: P.white, padding: '22px 34px'}}>
        <div style={{position: 'absolute', left: 34, top: 20, width: 310}}><Text size={22} color={P.paleGold}>一审审限从何时起算？</Text><Text size={30} color={P.white} weight={900}>立案之日起</Text></div>
        <div data-final-knowledge="first-instance-time-limit-six-months" style={{position: 'absolute', left: 390, top: 28, width: 310, display: 'flex', alignItems: 'center', gap: 14}}><CalendarClock size={48} color={P.gold} /><div><Text size={34} color={P.gold} weight={900}>6个月内审结</Text><Text size={22} color={P.white}>法定第一段</Text></div></div>
        <Arrow x1={790} y1={695} x2={960} y2={695} color={P.gold} start={145} />
        <div data-final-knowledge="president-approved-six-month-extension" style={{position: 'absolute', left: 930, top: 28, width: 385, display: 'flex', alignItems: 'center', gap: 14}}><Stamp size={48} color={P.gold} /><div><Text size={29} color={P.gold} weight={900}>本院院长批准</Text><Text size={23} color={P.white}>特殊情况，再延长6个月</Text></div></div>
        <Arrow x1={1360} y1={695} x2={1510} y2={695} color={P.red} start={162} />
        <div data-final-knowledge="higher-court-approved-further-extension" style={{position: 'absolute', left: 1490, top: 28, width: 300, display: 'flex', alignItems: 'center', gap: 13}}><Landmark size={48} color={P.red} /><div><Text size={28} color={P.white} weight={900}>仍需延长</Text><Text size={23} color={P.paleRed}>报上级法院批准</Text></div></div>
      </div>
    </SceneFrame>
  );
};

export const JudgmentDocumentsScene = () => {
  /* Static audit inventory: data-final-knowledge="judgment-substantive-claim" data-final-knowledge="order-procedure-and-partial-merits" data-final-knowledge="decision-procedure" data-final-knowledge="appealable-non-acceptance" data-final-knowledge="appealable-dismiss-action" data-final-knowledge="appealable-jurisdiction-objection" <FileCheck2 <FileText <Gavel */
  const frame = useCurrentFrame();
  return (
    <SceneFrame sceneId="judgment-documents" number="05" question="判决、裁定、决定各管什么？判决错了从哪条路纠正？" anchor="flow-path" grammar="document-functions,error-fork,appeal-dock" treatments="label-block,thin-underline,stamp" titleAt="center">
      <div data-layout="three-document-presses-feed-a-two-route-correction-switchyard" data-visual-anchor="flow-path" data-visual-grammar="document-functions,error-fork,appeal-dock" data-text-treatments="label-block,thin-underline,stamp" data-focal-rule="document-function-first-then-correction-route" data-focal-channels="icon,connector,spatial" />
      {[
        ['judgment-substantive-claim', FileCheck2, '判决', '实体请求', '诉讼请求能否支持', P.teal, 130],
        ['order-procedure-and-partial-merits', FileText, '裁定', '程序＋部分实体', '程序事项，也处理部分实体问题', P.plum, 695],
        ['decision-procedure', Gavel, '决定', '程序推进', '回避、强制措施、延期审理等', P.gold, 1260],
      ].map(([id, glyph, title, job, detail, color, left], i) => (
        <div key={String(id)} data-final-knowledge={String(id)} style={{position: 'absolute', left: Number(left), top: 80, width: 510, height: 215, background: P.paper2, border: `3px solid ${color}`, padding: '22px 25px', ...enter(frame, 8 + i * 18, 0, 24)}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 18}}><Icon icon={glyph as LucideIcon} color={String(color)} size={50} /><Text size={36} weight={900}>{String(title)}</Text><Label color={String(color)}>{String(job)}</Label></div><Text size={23} style={{marginTop: 18}}>{String(detail)}</Text>
        </div>
      ))}
      <div style={{position: 'absolute', left: 125, top: 350, width: 1660, height: 6, background: P.line, scale: `${progress(frame, 55, 36)} 1`, transformOrigin: 'left'}} />
      <div style={{position: 'absolute', left: 130, top: 410, width: 760, height: 275, background: P.paleGold, padding: '25px 28px', borderLeft: `10px solid ${P.gold}`, ...enter(frame, 72, -22, 0)}}>
        <div data-final-knowledge="clerical-error-corrected-by-order"><Text size={24} color={P.muted}>判决书瑕疵</Text><Text size={31} weight={900}>笔误／文字／计算错误</Text><div style={{display: 'flex', alignItems: 'center', gap: 16, marginTop: 28}}><ArrowRight size={42} color={P.gold} /><Label color={P.gold}>下达裁定书补正</Label></div></div>
      </div>
      <div style={{position: 'absolute', right: 130, top: 410, width: 760, height: 275, background: P.paleRed, padding: '25px 28px', borderLeft: `10px solid ${P.red}`, ...enter(frame, 88, 22, 0)}}>
        <div data-final-knowledge="substantive-error-appeal-or-supervision"><Text size={24} color={P.muted}>判决实质错误</Text><Text size={31} weight={900}>事实认定／法律适用错误</Text><div style={{display: 'flex', gap: 18, marginTop: 24}}><Label color={P.red}>已上诉 → 二审纠正</Label><Label color={P.ink}>未上诉生效 → 审判监督</Label></div></div>
      </div>
      <div style={{position: 'absolute', left: 250, right: 250, top: 720, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <Text size={25} color={P.plum} weight={900}>可上诉的裁定，只有三个：</Text>
        {[
          ['appealable-non-acceptance', '不予受理'],
          ['appealable-dismiss-action', '驳回起诉'],
          ['appealable-jurisdiction-objection', '管辖权异议'],
        ].map(([id, label], i) => <div key={id} data-final-knowledge={id} style={{width: 310, display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px', background: P.plum, color: P.white, ...enter(frame, 126 + i * 14, 0, 15)}}><BookOpenCheck size={34} /><Text size={26} color={P.white} weight={850}>{label}</Text></div>)}
      </div>
    </SceneFrame>
  );
};

export const JudgmentEffectsScene = () => {
  const frame = useCurrentFrame();
  return (
    <SceneFrame sceneId="judgment-effects" number="06" question="一份生效判决，何时有执行力、形成力或既判力？" anchor="comparison-axis" grammar="central-judgment,condition-chambers,scope-orbit" treatments="soft-highlight,label-block,external-negation">
      <div data-layout="effective-judgment-radiates-into-three-condition-chambers-and-scope-orbit" data-visual-anchor="comparison-axis" data-visual-grammar="central-judgment,condition-chambers,scope-orbit" data-text-treatments="soft-highlight,label-block,external-negation" data-focal-rule="each-effect-has-its-own-entry-condition-and-scope" data-focal-channels="enclosure,connector,contrast" />
      <div style={{position: 'absolute', left: 790, top: 255, width: 340, height: 265, display: 'grid', placeItems: 'center', background: P.ink, clipPath: 'polygon(50% 0,100% 22%,92% 82%,50% 100%,8% 82%,0 22%)', ...enter(frame, 5, 0, 15)}}><div style={{textAlign: 'center'}}><FileCheck2 size={64} color={P.gold} /><Text size={34} color={P.white} weight={900}>生效判决</Text></div></div>
      <Arrow x1={835} y1={386} x2={555} y2={245} color={P.teal} start={28} />
      <Arrow x1={960} y1={520} x2={960} y2={650} color={P.plum} start={42} />
      <Arrow x1={1085} y1={386} x2={1365} y2={245} color={P.red} start={56} />
      <div data-final-knowledge="enforcement-three-conditions" style={{position: 'absolute', left: 80, top: 80, width: 590, height: 260, background: P.paleBlue, borderTop: `9px solid ${P.teal}`, padding: '22px 25px', ...enter(frame, 64, -22, 0)}}><div style={{display: 'flex', alignItems: 'center', gap: 16}}><ShieldCheck size={48} color={P.teal} /><Text size={34} color={P.teal} weight={900}>执行力</Text></div><Text size={25} weight={800} style={{marginTop: 18}}>给付之诉 ＋ 原告胜诉 ＋ 明确给付内容</Text><Text size={22} color={P.muted} style={{marginTop: 10}}>三项同时满足，才可作为强制执行根据</Text></div>
      <div data-final-knowledge="res-judicata-binds-parties-and-court" style={{position: 'absolute', right: 80, top: 80, width: 590, height: 260, background: P.paleRed, borderTop: `9px solid ${P.red}`, padding: '22px 25px', ...enter(frame, 80, 22, 0)}}><div style={{display: 'flex', alignItems: 'center', gap: 16}}><Ban size={48} color={P.red} /><Text size={34} color={P.red} weight={900}>既判力</Text></div><Text size={25} weight={800} style={{marginTop: 18}}>当事人不得再诉，法院不得作冲突判断</Text><Text size={22} color={P.muted} style={{marginTop: 10}}>主体原则相对；法定承受者、决议诉讼等有扩张例外</Text></div>
      <div data-final-knowledge="formation-two-conditions" style={{position: 'absolute', left: 625, top: 610, width: 670, height: 190, background: P.palePlum, borderLeft: `9px solid ${P.plum}`, padding: '22px 28px', ...enter(frame, 96, 0, 22)}}><div style={{display: 'flex', alignItems: 'center', gap: 16}}><Scale size={46} color={P.plum} /><Text size={34} color={P.plum} weight={900}>形成力</Text></div><Text size={25} weight={800} style={{marginTop: 13}}>形成之诉 ＋ 原告胜诉 → 直接变更或消灭法律关系</Text></div>
      <div data-final-knowledge="operative-part-not-reasons" style={{position: 'absolute', left: 90, top: 390, width: 590, padding: '18px 22px', background: P.paper2, borderLeft: `7px solid ${P.red}`, ...enter(frame, 112, 0, 18)}}><Text size={25} weight={850}>客观范围：判决主文有，判决理由没有</Text><Text size={22} color={P.muted}>部分请求判决，原则上产生全部既判力</Text></div>
      <div data-final-knowledge="subjective-relative-and-exceptions" style={{position: 'absolute', right: 90, top: 390, width: 590, padding: '18px 22px', background: P.paper2, borderLeft: `7px solid ${P.red}`, ...enter(frame, 124, 0, 18)}}><Text size={25} weight={850}>主观范围：原则上只约束当事人</Text><Text size={22} color={P.muted}>权利义务承受者、决议诉讼其他股东等可扩张</Text></div>
      <div data-final-knowledge="effective-judgment-time-boundary" style={{position: 'absolute', left: 735, top: 535, width: 450, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14}}><Clock3 size={35} color={P.gold} /><Text size={24} color={P.gold} weight={900}>标准时：判决生效时；之后新事实不受拘束</Text></div>
    </SceneFrame>
  );
};

export const MarriageValidityBoundaryScene = () => {
  const frame = useCurrentFrame();
  return (
    <SceneFrame sceneId="marriage-validity-boundary" number="07" question="一方死亡后，婚姻无效确认为何继续，离婚诉讼为何终结？" anchor="comparison-axis" grammar="validity-continuation,disposition-lock,divorce-termination" treatments="external-negation,stamp,thin-underline,label-block" titleAt="center">
      <div data-layout="one-death-boundary-splits-validity-confirmation-from-divorce-termination" data-visual-anchor="comparison-axis" data-visual-grammar="validity-continuation,disposition-lock,divorce-termination" data-text-treatments="external-negation,stamp,thin-underline,label-block" data-focal-rule="validity-status-remains-judiciable-but-divorce-object-disappears" data-focal-channels="enclosure,contrast,motion" />
      <div style={{position: 'absolute', left: 890, top: 72, width: 140, height: 670, background: P.ink, clipPath: 'polygon(44% 0,58% 0,68% 16%,55% 31%,66% 48%,48% 66%,58% 84%,45% 100%,35% 100%,42% 82%,31% 65%,46% 47%,35% 30%,48% 15%)'}} />
      <div style={{position: 'absolute', left: 48, top: 75, width: 790, height: 670, padding: '30px 34px', background: P.paleBlue, borderTop: `10px solid ${P.teal}`, ...enter(frame, 8, -30, 0)}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 18}}><ShieldCheck size={54} color={P.teal} /><Text size={38} color={P.teal} weight={900}>确认婚姻无效</Text></div>
        <Text size={23} color={P.muted} style={{marginTop: 9}}>判断婚姻自始是否有效，不由当事人处分</Text>
        <div data-final-knowledge="no-withdrawal-on-validity" style={{position: 'absolute', left: 34, top: 145, display: 'flex', gap: 14, alignItems: 'center'}}><Ban size={38} color={P.red} /><Label color={P.red}>不得撤诉</Label></div>
        <div data-final-knowledge="no-mediation-or-settlement-on-validity" style={{position: 'absolute', left: 275, top: 145, display: 'flex', gap: 14, alignItems: 'center'}}><Ban size={38} color={P.red} /><Label color={P.red}>不得调解／和解</Label></div>
        <div data-final-knowledge="judgment-required" style={{position: 'absolute', left: 34, top: 235, width: 710, padding: '20px 22px', background: P.white, borderLeft: `8px solid ${P.teal}`}}><div style={{display: 'flex', alignItems: 'center', gap: 15}}><Gavel size={42} color={P.teal} /><Text size={29} color={P.teal} weight={900}>婚姻效力只能判决</Text></div><Text size={22} style={{marginTop: 8}}>财产分割、子女抚养可以另行调解</Text></div>
        <div style={{position: 'absolute', left: 34, top: 375, width: 710, display: 'flex', gap: 18}}><CourtSeal icon={UsersRound} label="起诉主体随无效事由而变" sublabel="重婚涉财产：合法婚姻当事人可作有独三" color={P.navy} /></div>
        <div data-final-knowledge="death-still-accept-and-continue" style={{position: 'absolute', left: 34, bottom: 30, width: 710, display: 'flex', alignItems: 'center', gap: 18, padding: '18px 20px', background: P.teal, ...enter(frame, 88, 0, 20)}}><ArrowRight size={45} color={P.white} /><Text size={26} color={P.white} weight={900}>一方或双方死亡后仍可受理；诉讼中死亡仍继续确认效力</Text></div>
      </div>
      <div style={{position: 'absolute', right: 48, top: 75, width: 790, height: 670, padding: '30px 34px', background: P.paleRed, borderTop: `10px solid ${P.red}`, ...enter(frame, 20, 30, 0)}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 18}}><UserRound size={54} color={P.red} /><Text size={38} color={P.red} weight={900}>离婚诉讼</Text></div>
        <Text size={23} color={P.muted} style={{marginTop: 9}}>以尚存婚姻关系为诉讼标的</Text>
        <div data-final-knowledge="divorce-pre-death-nonacceptance-or-dismissal" style={{position: 'absolute', left: 34, top: 160, width: 710, padding: '20px 22px', background: P.white, borderLeft: `8px solid ${P.red}`}}><Text size={25} weight={850}>起诉前对方已死亡</Text><Text size={22} style={{marginTop: 8}}>受理前发现 → 不予受理；受理后发现 → 驳回起诉</Text></div>
        <div data-final-knowledge="divorce-during-suit-termination" style={{position: 'absolute', left: 34, top: 305, width: 710, display: 'flex', alignItems: 'center', gap: 18, padding: '20px 22px', background: P.red, ...enter(frame, 102, 0, 20)}}><Ban size={46} color={P.white} /><div><Text size={29} color={P.white} weight={900}>诉讼中一方死亡 → 诉讼终结</Text><Text size={22} color={P.white}>婚姻关系自然解除，诉讼标的消灭</Text></div></div>
        <div data-final-knowledge="divorce-waits-for-validity-judgment" style={{position: 'absolute', left: 34, bottom: 30, width: 710, padding: '18px 20px', background: P.paleGold, borderLeft: `8px solid ${P.gold}`}}><Text size={24} color={P.gold} weight={900}>无效之诉与离婚之诉并存</Text><Text size={22} style={{marginTop: 6}}>离婚先等待无效判决；确认无效后驳回离婚请求，财产、子女事项继续审理</Text></div>
      </div>
      <div style={{position: 'absolute', left: 850, top: 12, width: 220, textAlign: 'center'}}><Text size={24} color={P.red} weight={900}>死亡边界</Text><ArrowDown size={40} color={P.red} /></div>
    </SceneFrame>
  );
};

export const OrdinaryProcedureControlMap = () => (
  <AbsoluteFill style={{backgroundColor: P.paper}}>
    <Sequence from={SCENES.filingGate.start} durationInFrames={SCENES.filingGate.duration}><FilingGateScene /></Sequence>
    <Sequence from={SCENES.repeatSuitTest.start} durationInFrames={SCENES.repeatSuitTest.duration}><RepeatSuitTestScene /></Sequence>
    <Sequence from={SCENES.withdrawalAbsence.start} durationInFrames={SCENES.withdrawalAbsence.duration}><WithdrawalAbsenceScene /></Sequence>
    <Sequence from={SCENES.proceduralObstacles.start} durationInFrames={SCENES.proceduralObstacles.duration}><ProceduralObstaclesScene /></Sequence>
    <Sequence from={SCENES.judgmentDocuments.start} durationInFrames={SCENES.judgmentDocuments.duration}><JudgmentDocumentsScene /></Sequence>
    <Sequence from={SCENES.judgmentEffects.start} durationInFrames={SCENES.judgmentEffects.duration}><JudgmentEffectsScene /></Sequence>
    <Sequence from={SCENES.marriageValidityBoundary.start} durationInFrames={SCENES.marriageValidityBoundary.duration}><MarriageValidityBoundaryScene /></Sequence>
  </AbsoluteFill>
);
