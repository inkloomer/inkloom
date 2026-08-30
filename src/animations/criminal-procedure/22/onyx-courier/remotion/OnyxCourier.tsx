import React from 'react';
import {
  AbsoluteFill, interpolate, useCurrentFrame, Easing, Sequence,
} from 'remotion';
import {
  Ban, BookOpen, CheckCircle2, CircleAlert, FileDigitale,
  Gavel, Globe, HandMetal, HeartPulse, Hourglass, Landmark,
  MessageSquareText, Plane, Scale, ScrollText, Send,
  ShieldAlert, ShieldCheck, Siren, Stamp, Swords, UserRound,
  UserRoundCheck, UserRoundX, Users, Workflow, XCircle,
} from 'lucide-react';
import { TimelineSequence } from '../../../../components/timeline';

/* ── Constants ── */
const FPS = 60;
const MAIN_WIDTH = 1800;
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const C = {
  onyx: '#1A1A1D',
  onyxDeep: '#0F0F11',
  onyxRidge: '#2D2D33',
  silver: '#C8CED6',
  silverSoft: '#E8ECF2',
  silverInk: '#8A919E',
  amber: '#D4A017',
  amberInk: '#9A7309',
  amberSoft: '#F5EDD3',
  azure: '#2E6B8A',
  azureInk: '#1E4A5E',
  azureSoft: '#D4E8F2',
  bone: '#F0EBE3',
  ink: '#2A2524',
  inkSoft: '#6B6370',
  cinnabar: '#B83B3B',
  cinnabarInk: '#8A2828',
  cinnabarSoft: '#F2D6D6',
  jade: '#3A8F72',
  jadeInk: '#26634D',
  jadeSoft: '#D4EDE4',
};

/* ── Shared Primitives ── */
function CourierShell({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  const frame = useCurrentFrame();
  const op = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1) });
  return (
    <AbsoluteFill style={{ backgroundColor: C.onyxDeep, fontFamily: "var(--inkloom-animation-title, 'Noto Serif SC', serif)" }}>
      {/* Silver ridge lines */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.07 }}>
        {[...Array(12)].map((_, i) => (
          <div key={`v${i}`} style={{ position: 'absolute', left: `${(i + 1) * 8}%`, top: 0, bottom: 0, width: 1, background: `linear-gradient(180deg,transparent,C.silver,transparent)` }} />
        ))}
        {[...Array(8)].map((_, i) => (
          <div key={`h${i}`} style={{ position: 'absolute', top: `${(i + 1) * 11}%`, left: 0, right: 0, height: 1, background: `linear-gradient(90deg,transparent,C.silver,transparent)` }} />
        ))}
      </div>
      {/* Radial glow */}
      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 50% 30%, ${C.azureInk}22 0%, transparent 70%)` }} />
      {/* Header */}
      <div style={{
        position: 'absolute', top: 28, left: 40, right: 40,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', opacity: op,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <Send size={24} color={C.amber} strokeWidth={2.2} />
          <span style={{ fontSize: 18, color: C.silverInk, letterSpacing: 4 }}>信使</span>
        </div>
        <h1 style={{ fontSize: 30, color: C.bone, margin: 0, fontWeight: 700 }}>{title}</h1>
        {subtitle && <span style={{ fontSize: 15, color: C.silverInk }}>{subtitle}</span>}
      </div>
      {/* Content area */}
      <div style={{ position: 'absolute', top: 80, left: 40, right: 40, bottom: PLAYER_CONTROL_SAFE_BOTTOM }}>
        {children}
      </div>
    </AbsoluteFill>
  );
}

function enter(frame: number, delay: number, dy = 16, dx = 0) {
  return {
    opacity: interpolate(frame, [delay, delay + 18], [0, 1], { extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1) }),
    transform: `translate(${interpolate(frame, [delay, delay + 18], [dx, 0], { extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1) })}px, ${interpolate(frame, [delay, delay + 18], [dy, 0], { extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1) })}px)`,
  };
}

function Chip({ label, color = C.amber, delay = 0 }: { label: string; color?: string; delay?: number }) {
  const frame = useCurrentFrame();
  return (
    <span style={{
      ...enter(frame, delay, 10, 0),
      display: 'inline-flex', alignItems: 'center', gap: 5,
      padding: '3px 11px', borderRadius: 10,
      background: color + '22', border: `1px solid ${color}55`,
      fontSize: 15, color, fontWeight: 600, lineHeight: 1.4,
    }}>{label}</span>
  );
}

function LabelBlock({ icon: Icon, label, desc, color = C.silver, delay = 0 }: { icon: React.ElementType; label: string; desc: string; color?: string; delay?: number }) {
  const frame = useCurrentFrame();
  return (
    <div style={{ ...enter(frame, delay, 12, 0), display: 'flex', alignItems: 'flex-start', gap: 10, padding: '8px 0' }}>
      <Icon size={20} color={color} strokeWidth={2} style={{ flexShrink: 0, marginTop: 1 }} />
      <div>
        <span style={{ fontSize: 17, color: C.bone, fontWeight: 600 }}>{label}</span>
        <p style={{ fontSize: 14, color: C.silverInk, margin: '2px 0 0', lineHeight: 1.5 }}>{desc}</p>
      </div>
    </div>
  );
}

function SoftHighlight({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const frame = useCurrentFrame();
  return (
    <span style={{
      ...enter(frame, delay, 8, 0),
      padding: '1px 6px', borderRadius: 4,
      background: C.azureSoft + '44',
      fontSize: 15, color: C.bone,
    }}>{children}</span>
  );
}

function ThinUnderline({ children, color = C.amber, delay = 0 }: { children: React.ReactNode; color?: string; delay?: number }) {
  const frame = useCurrentFrame();
  return (
    <span style={{
      ...enter(frame, delay, 8, 0),
      borderBottom: `2px solid ${color}`,
      paddingBottom: 1, fontSize: 16, color: C.bone, fontWeight: 600,
    }}>{children}</span>
  );
}

function ExternalNegation({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const frame = useCurrentFrame();
  return (
    <span style={{
      ...enter(frame, delay, 8, 0),
      display: 'inline-flex', alignItems: 'center', gap: 5,
    }}>
      <Ban size={15} color={C.cinnabar} strokeWidth={2.5} />
      <span style={{ fontSize: 15, color: C.cinnabar }}>{children}</span>
    </span>
  );
}

function StampMark({ text, delay = 0 }: { text: string; delay?: number }) {
  const frame = useCurrentFrame();
  const rot = interpolate(frame, [delay, delay + 12], [-8, -4], { extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic) });
  return (
    <div style={{
      ...enter(frame, delay, 6, 0),
      transform: `rotate(${rot}deg)`,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      padding: '4px 12px', borderRadius: 3,
      border: `2px solid ${C.cinnabar}`, color: C.cinnabar,
      fontSize: 13, fontWeight: 800, letterSpacing: 2,
      opacity: 0.85,
    }}>{text}</div>
  );
}

function PlateCard({ children, width, delay = 0, borderColor = C.onyxRidge }: { children: React.ReactNode; width: number; delay?: number; borderColor?: string }) {
  const frame = useCurrentFrame();
  return (
    <div style={{
      ...enter(frame, delay, 14, 0),
      width, padding: '14px 18px', borderRadius: 6,
      background: C.onyx + 'EE', border: `1px solid ${borderColor}`,
      boxShadow: `0 2px 12px ${C.onyxDeep}44`,
    }}>{children}</div>
  );
}

function Watermark() {
  return (
    <div style={{ position: 'absolute', right: 30, bottom: PLAYER_CONTROL_SAFE_BOTTOM + 20, opacity: 0.08, pointerEvents: 'none' }}>
      <Send size={120} color={C.silver} strokeWidth={0.8} />
    </div>
  );
}

/* ═════════════════════════════════
   Scene 01 — 适用对象全景
   ═════════════════════════════════ */
export function EligibilityPanoramaScene() {
  const frame = useCurrentFrame();

  const categories = [
    { icon: Siren, tag: '国恐贪', color: C.cinnabar, cond: '重国恐 · 在境外 · 及时审 · 高检核', note: '最高人民检察院核准（非最高法）', scope: '只限贪污贿赂，不含渎职', jur: '中院一审' },
    { icon: HeartPulse, tag: '病半年', color: C.jade, cond: '因病无法出庭 ≥ 6个月', note: '审理中康复 → 终止缺席转普通程序', scope: '生效后康复提异议 → 撤销原判重新审理', jur: '基层也可审' },
    { icon: UserRoundX, tag: '死无罪', color: C.azure, cond: '受理后死亡', note: '终止审理；有证据证明无罪 → 宣告无罪', scope: '', jur: '基层也可审' },
    { icon: ScrollText, tag: '死再审', color: C.amber, cond: '按审判监督程序重新审判 + 死亡', note: '原审法院按再审程序审理', scope: '', jur: '基层也可审' },
  ];

  return (
    <div data-layout="eligibility-four-quadrant" data-anchor="boundary"
         style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
      <Watermark />

      {/* Title row */}
      <div style={{ ...enter(frame, 0, 10), fontSize: 22, color: C.bone, fontWeight: 700, marginBottom: 4 }}>
        适用对象与管辖
      </div>

      {/* Four category cards — 2×2 grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, flexShrink: 0 }}>
        {categories.map((cat, i) => (
          <PlateCard key={cat.tag} width={MAIN_WIDTH / 2 - 20} delay={30 + i * 22} borderColor={cat.color + '44'}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <cat.icon size={22} color={cat.color} strokeWidth={2.2} />
              <Chip label={cat.tag} color={cat.color} delay={40 + i * 22} />
              <span style={{ ...enter(frame, 50 + i * 22, 6, 0), marginLeft: 'auto', fontSize: 13, color: cat.color, fontWeight: 700 }}>
                {cat.jur}
              </span>
            </div>
            <p style={{ ...enter(frame, 55 + i * 22, 8, 0), fontSize: 15, color: C.bone, margin: '4px 0', lineHeight: 1.55 }}>
              {cat.cond}
            </p>
            <p style={{ ...enter(frame, 65 + i * 22, 8, 0), fontSize: 13, color: C.silverInk, margin: 0, lineHeight: 1.5 }}>
              {cat.note}
            </p>
            {cat.scope && (
              <p style={{ ...enter(frame, 75 + i * 22, 8, 0), fontSize: 13, color: C.amberInk, marginTop: 4 }}>
                <ExternalNegation delay={80 + i * 22}>{cat.scope}</ExternalNegation>
              </p>
            )}
          </PlateCard>
        ))}
      </div>

      {/* Principle banner */}
      <div style={{
        ...enter(frame, 160, 10, 0),
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '10px 18px', borderRadius: 6,
        background: C.onyxRidge + 'AA', borderLeft: `3px solid ${C.amber}`,
        flexShrink: 0,
      }}>
        <CircleAlert size={18} color={C.amber} />
        <span style={{ fontSize: 15, color: C.bone }}>
          原则：<SoftHighlight>被告人到场受审</SoftHighlight>；缺席审判仅是<ExternalNegation delay={170}>例外</ExternalNegation>
        </span>
      </div>

      {/* Mnemonic */}
      <div style={{
        ...enter(frame, 190, 12, 0),
        display: 'flex', alignItems: 'center', gap: 16,
        padding: '12px 20px', borderRadius: 6,
        background: `linear-gradient(90deg, ${C.amber}11, ${C.azure}11)`,
        borderTop: `1px solid ${C.silverInk}22`, borderBottom: `1px solid ${C.silverInk}22`,
        flexShrink: 0,
      }}>
        <BookOpen size={18} color={C.amberInk} />
        <span style={{ fontSize: 14, color: C.silverInk, fontWeight: 700 }}>口诀记忆</span>
        <span style={{ fontSize: 16, color: C.bone }}>
          <ThinUnderline color={C.cinnabar} delay={200}>国恐贪</ThinUnderline>
          {' ；'}
          <ThinUnderline color={C.jade} delay={210}>病半年</ThinUnderline>
          {' ；'}
          <ThinUnderline color={C.azure} delay={220}>死无罪</ThinUnderline>
          {' ；'}
          <ThinUnderline color={C.amber} delay={230}>死再审</ThinUnderline>
        </span>
      </div>
    </div>
  );
}

/* ═════════════════════════════════
   Scene 02 — 国恐贪四条件详解
   ═════════════════════════════════ */
export function StateTerrorCorruptionScene() {
  const frame = useCurrentFrame();

  return (
    <div data-layout="stc-deep-dive-quadrant" data-anchor="concept-icon"
         style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Watermark />

      <div style={{ ...enter(frame, 0, 10), fontSize: 22, color: C.bone, fontWeight: 700 }}>
        国恐贪四条件详解
      </div>

      {/* Four conditions row */}
      <div style={{ display: 'flex', gap: 12, flexShrink: 0 }}>
        {[
          { icon: ShieldAlert, label: '重国恐', desc: '重大国家安全/恐怖活动犯罪案件', color: C.cinnabar },
          { icon: Globe, label: '在境外', desc: '犯罪嫌疑人/被告人在境外', color: C.azure },
          { icon: Hourglass, label: '及时审', desc: '需要及时进行审判（追诉时效等）', color: C.amber },
          { icon: Landmark, label: '高检核', desc: '最高人民检察院核准（≠最高人民法院）', color: C.jade },
        ].map((c, i) => (
          <PlateCard key={c.label} width={(MAIN_WIDTH - 48) / 4} delay={24 + i * 18} borderColor={c.color + '44'}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, textAlign: 'center' }}>
              <c.icon size={26} color={c.color} strokeWidth={2} />
              <Chip label={c.label} color={c.color} delay={36 + i * 18} />
              <span style={{ ...enter(frame, 44 + i * 18, 8, 0), fontSize: 13, color: C.silverInk, lineHeight: 1.45 }}>
                {c.desc}
              </span>
            </div>
          </PlateCard>
        ))}
      </div>

      {/* Scope limits & partial rules */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, flexShrink: 0 }}>
        <PlateCard width={MAIN_WIDTH / 2 - 20} delay={110} borderColor={C.cinnabar + '33'}>
          <div style={{ ...enter(frame, 110, 8, 0), fontSize: 16, color: C.cinnabar, fontWeight: 700, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
            <Ban size={17} color={C.cinnabar} /> 范围限制
          </div>
          <LabelBlock icon={FileDigitale} label="贪污贿赂可缺席" desc="含刑法分则第八章及依照第八章定罪处罚的犯罪" color={C.jade} delay={126} />
          <LabelBlock icon={XCircle} label="渎职不可缺席" desc="不属于贪污贿赂范畴，不得适用缺席审判程序" color={C.cinnabar} delay={142} />
        </PlateCard>

        <PlateCard width={MAIN_WIDTH / 2 - 20} delay={116} borderColor={C.azure + '33'}>
          <div style={{ ...enter(frame, 116, 8, 0), fontSize: 16, color: C.azure, fontWeight: 700, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
            <Users size={17} color={C.azure} /> 数罪 / 共犯规则
          </div>
          <LabelBlock icon={ScrollText} label="数罪部分符合" desc="可就该部分犯罪适用缺席审判程序" color={C.jade} delay={132} />
          <LabelBlock icon={Plane} label="共犯部分人在境外" desc="可对该部分人适用缺席审判程序（境内者不可）" color={C.amber} delay={148} />
        </PlateCard>
      </div>

      {/* Key distinction stamp */}
      <div style={{
        ...enter(frame, 178, 10, 0),
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14,
        padding: '10px 0', flexShrink: 0,
      }}>
        <StampMark text="高检核 ≠ 最高法" delay={186} />
        <span style={{ ...enter(frame, 188, 8, 0), fontSize: 14, color: C.silverInk }}>
          核准机关是<SoftHighlight>最高人民检察院</SoftHighlight>，不是最高人民法院
        </span>
      </div>

      {/* Jurisdiction summary */}
      <div style={{
        ...enter(frame, 206, 10, 0),
        display: 'flex', gap: 12, flexShrink: 0,
      }}>
        <div style={{ flex: 1, padding: '10px 16px', borderRadius: 6, background: C.cinnabar + '14', border: `1px solid ${C.cinnabar}33` }}>
          <span style={{ ...enter(frame, 214, 6, 0), fontSize: 14, color: C.cinnabar, fontWeight: 700 }}>国恐贪</span>
          <span style={{ ...enter(frame, 218, 6, 0), fontSize: 15, color: C.bone, marginLeft: 8 }}>→ 中院一审</span>
        </div>
        <div style={{ flex: 1, padding: '10px 16px', borderRadius: 6, background: C.jade + '14', border: `1px solid ${C.jade}33` }}>
          <span style={{ ...enter(frame, 220, 6, 0), fontSize: 14, color: C.jade, fontWeight: 700 }}>病半年 / 死无罪 / 死再审</span>
          <span style={{ ...enter(frame, 224, 6, 0), fontSize: 15, color: C.bone, marginLeft: 8 }}>→ 基层法院也可以审理</span>
        </div>
      </div>
    </div>
  );
}

/* ═════════════════════════════════
   Scene 03 — 程序保障链
   ═════════════════════════════════ */
export function ProceduralSafeguardsChainScene() {
  const frame = useCurrentFrame();

  const steps = [
    { icon: Send, title: '送达', items: ['司法协助方式（国际条约/外交途径）', '或所在地法律允许的其他方式', '邮寄、公告、公示、电子送达'], color: C.azure },
    { icon: ShieldCheck, title: '辩护权保障', items: ['检察院应当及时告知委托辩护权', '未委托 → 应当通知法律援助机构'], color: C.jade },
    { icon: Users, title: '近亲属参加', items: ['收到起诉书副本后、一审开庭前提出', '推选一至二人，共同委托代理人一至二人', '开庭后无权参加'], color: C.amber },
    { icon: Gavel, title: '一审程序', items: ['参照第一审普通程序', '有罪判决须证据确实充分', '罪名不符 → 终止审理；财产可一并处理'], color: C.silver },
    { icon: Scale, title: '上诉抗诉', items: ['被告人、近亲属有权上诉（近亲属单独上诉资格）', '检察院应当抗诉', '辩护人经同意可提出上诉'], color: C.cinnabar },
  ];

  return (
    <div data-layout="safeguards-horizontal-flow" data-anchor="flow-path"
         style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Watermark />

      <div style={{ ...enter(frame, 0, 10), fontSize: 22, color: C.bone, fontWeight: 700 }}>
        程序流程与权利保障
      </div>

      {/* Flow chain — horizontal cards */}
      <div style={{ display: 'flex', gap: 10, flexShrink: 0, overflow: 'hidden' }}>
        {steps.map((step, i) => (
          <PlateCard key={step.title} width={(MAIN_WIDTH - 50) / 5} delay={24 + i * 16} borderColor={step.color + '33'}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <step.icon size={18} color={step.color} strokeWidth={2.2} />
              <span style={{ ...enter(frame, 34 + i * 16, 6, 0), fontSize: 15, color: step.color, fontWeight: 700 }}>{step.title}</span>
            </div>
            {step.items.map((item, j) => (
              <p key={j} style={{ ...enter(frame, 44 + i * 16 + j * 10, 8, 0), fontSize: 13, color: C.silverInk, margin: '3px 0', lineHeight: 1.45 }}>
                · {item}
              </p>
            ))}
            {i < steps.length - 1 && (
              <Workflow size={14} color={C.onyxRidge} style={{ position: 'absolute', right: -10, top: '50%', transform: 'translateY(-50%)' }} />
            )}
          </PlateCard>
        ))}
      </div>

      {/* Key restrictions panel */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, flexShrink: 0 }}>
        <PlateCard width={MAIN_WIDTH / 2 - 20} delay={130} borderColor={C.cinnabar + '33'}>
          <div style={{ ...enter(frame, 130, 8, 0), fontSize: 15, color: C.cinnabar, fontWeight: 700, marginBottom: 8 }}>
            近亲属权利边界
          </div>
          <LabelBlock icon={CheckCircle2} label="可以发表意见、出示证据" desc="申请通知证人鉴定人出庭，进行辩论" color={C.jade} delay={146} />
          <LabelBlock icon={Ban} label="不是自行辩护" desc="只是代为维护被告人合法权益" color={C.cinnabar} delay={162} />
          <LabelBlock icon={XCircle} label="无最后陈述环节" desc="最后陈述权专属于被告人本人；辩护人可发表最后辩护意见" color={C.cinnabar} delay={178} />
        </PlateCard>

        <PlateCard width={MAIN_WIDTH / 2 - 20} delay={136} borderColor={C.azure + '33'}>
          <div style={{ ...enter(frame, 136, 8, 0), fontSize: 15, color: C.azure, fontWeight: 700, marginBottom: 8 }}>
            不来也审原则
          </div>
          <p style={{ ...enter(frame, 150, 8, 0), fontSize: 14, color: C.bone, lineHeight: 1.55, margin: 0 }}>
            传票和起诉书副本送达后，<SoftHighlight delay={158}>被告人未按要求到案</SoftHighlight>的，
            人民法院<ThinUnderline color={C.jade} delay={166}>应当开庭审理</ThinUnderline>，
            依法作出判决并对违法所得及其他涉案财产作出处理。
          </p>
        </PlateCard>
      </div>
    </div>
  );
}

/* ═════════════════════════════════
   Scene 04 — 到案后与没收衔接
   ═════════════════════════════════ */
export function AppearanceConfiscationLinkScene() {
  const frame = useCurrentFrame();

  return (
    <div data-layout="appearance-confiscation-split" data-anchor="timeline-gate"
         style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Watermark />

      <div style={{ ...enter(frame, 0, 10), fontSize: 22, color: C.bone, fontWeight: 700 }}>
        到案后处理 与 没收程序衔接
      </div>

      {/* Two appearance scenarios */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, flexShrink: 0 }}>
        <PlateCard width={MAIN_WIDTH / 2 - 20} delay={22} borderColor={C.jade + '33'}>
          <div style={{ ...enter(frame, 22, 8, 0), fontSize: 16, color: C.jade, fontWeight: 700, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
            <UserRoundCheck size={18} color={C.jade} /> 审理中到案
          </div>
          <LabelBlock icon={Siren} label="公安立即通知" desc="" color={C.silver} delay={38} />
          <LabelBlock icon={Landmark} label="裁定终止审理" desc="检察院依法提起公诉 → 法院应当重新审理" color={C.azure} delay={52} />
          <LabelBlock icon={Gavel} label="管辖规则" desc="一般由同一人民法院审理；指定管辖的应重新指定" color={C.amber} delay={66} />
        </PlateCard>

        <PlateCard width={MAIN_WIDTH / 2 - 20} delay={28} borderColor={C.cinnabar + '33'}>
          <div style={{ ...enter(frame, 28, 8, 0), fontSize: 16, color: C.cinnabar, fontWeight: 700, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
            <HandMetal size={18} color={C.cinnabar} /> 生效后到案
          </div>
          <LabelBlock icon={Gavel} label="交付执行刑罚" desc="" color={C.silver} delay={44} />
          <LabelBlock icon={MessageSquareText} label="告知异议权" desc="收到异议告知后十日以内可提异议" color={C.azure} delay={58} />
          <LabelBlock icon={ScrollText} label="异议后果" desc="撤销原判裁定 → 检察院公诉 → 重新审理；财产错误应返还赔偿" color={C.cinnabar} delay={72} />
        </PlateCard>
      </div>

      {/* Confiscation program relationship */}
      <PlateCard width={MAIN_WIDTH - 20} delay={100} borderColor={C.amber + '33'} style={{ flexShrink: 0 }}>
        <div style={{ ...enter(frame, 100, 8, 0), fontSize: 16, color: C.amber, fontWeight: 700, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
          <Swords size={18} color={C.amber} /> 与没收程序的衔接
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
          <div style={{ ...enter(frame, 114, 10, 0), padding: '10px 14px', borderRadius: 5, background: C.onyxRidge + '66' }}>
            <div style={{ fontSize: 14, color: C.cinnabar, fontWeight: 700, marginBottom: 6, display: 'flex', alignItems: 'center', gap: 6 }}>
              <Ban size={14} color={C.cinnabar} /> 不是前置程序
            </div>
            <p style={{ fontSize: 13, color: C.silverInk, margin: 0, lineHeight: 1.5 }}>
              "没收"<ExternalNegation delay={126}>不是</ExternalNegation>"缺席"的前置程序。事实清楚证据充分的，可直接提起缺席公诉。
            </p>
          </div>

          <div style={{ ...enter(frame, 120, 10, 0), padding: '10px 14px', borderRadius: 5, background: C.jade + '11' }}>
            <div style={{ fontSize: 14, color: C.jade, fontWeight: 700, marginBottom: 6 }}>缺席 → 可启动没收</div>
            <p style={{ fontSize: 13, color: C.silverInk, margin: 0, lineHeight: 1.5 }}>
              缺席撤诉/死亡 → 检察院可<SoftHighlight delay={132}>另行提出没收违法所得申请</SoftHighlight>
            </p>
          </div>

          <div style={{ ...enter(frame, 126, 10, 0), padding: '10px 14px', borderRadius: 5, background: C.azure + '11' }}>
            <div style={{ fontSize: 14, color: C.azure, fontWeight: 700, marginBottom: 6 }}>没收 → 可启动缺席</div>
            <p style={{ fontSize: 13, color: C.silverInk, margin: 0, lineHeight: 1.5 }}>
              没收裁定后认为仍有必要的，可<SoftHighlight delay={138}>另行依照刑诉法提起公诉</SoftHighlight>进行缺席审判。
            </p>
          </div>
        </div>
      </PlateCard>

      {/* Bottom terminus banner */}
      <div style={{
        ...enter(frame, 156, 10, 0),
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
        padding: '10px 20px', borderRadius: 6,
        background: `linear-gradient(90deg, ${C.onyxRidge}, ${C.onyx})`,
        borderTop: `1px solid ${C.silverInk}22`,
        flexShrink: 0,
      }}>
        <StampMark text="双向独立" delay={166} />
        <span style={{ ...enter(frame, 168, 8, 0), fontSize: 14, color: C.silverInk }}>
          缺席审判与违法所得没收程序是<ThinUnderline color={C.amber} delay={176}>两个独立的特别程序</ThinUnderline>，互不前置但可双向衔接
        </span>
      </div>
    </div>
  );
}

/* ── Main Composition ── */
export function OnyxCourier(): React.ReactElement {
  return (
    <CourierShell title="缺席审判程序" subtitle="Absentia Trial Procedure">
      <TimelineSequence
        durationInFrames={570}
        component={EligibilityPanoramaScene}
        startFrom={0}
      />
      <TimelineSequence
        durationInFrames={570}
        component={StateTerrorCorruptionScene}
        startFrom={570}
      />
      <TimelineSequence
        durationInFrames={570}
        component={ProceduralSafeguardsChainScene}
        startFrom={1140}
      />
      <TimelineSequence
        durationInFrames={630}
        component={AppearanceConfiscationLinkScene}
        startFrom={1710}
      />
    </CourierShell>
  );
}
