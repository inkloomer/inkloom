import {
  Ban,
  Briefcase,
  CheckCircle2,
  Clock,
  Eye,
  FileText,
  Gavel,
  Landmark,
  Languages,
  Microscope,
  Pause,
  Play,
  RotateCcw,
  Search,
  ShieldCheck,
  Siren,
  UserRound,
  Users,
  XCircle,
} from 'lucide-react';
import {interpolate, useCurrentFrame} from 'remotion';
import {PALETTE, toSourceFrame} from '../storyboard';
import {
  ENTER_EASING,
  FlowArrow,
  GateChip,
  IconNode,
  ImpactReveal,
  Enter,
  Keyword,
  KeywordFocus,
  MaskedReveal,
  SceneHeading,
  StaggerEnter,
  baseTextStyle,
} from '../visual-system';

/* ========== 01 范围：中立期待分叉 ========== */
export const ScopeScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const p1 = interpolate(frame, [16, 55], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p2 = interpolate(frame, [70, 120], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p3 = interpolate(frame, [140, 190], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const line = interpolate(frame, [50, 95], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="01" eyebrow="适用范围" title="中立期待 · 分叉判断" accent="teal" />

      <MaskedReveal delay={10} duration={22} style={{position: 'absolute', left: 120, top: 236}}>
        <div style={{...baseTextStyle, fontSize: 38, fontWeight: 900, lineHeight: 1.22}}>
          先问：是否 <Keyword accent="teal">期待中立</Keyword>？再决定进不进回避
        </div>
      </MaskedReveal>

      <div
        style={{
          position: 'absolute',
          left: 560,
          top: 340,
          opacity: p1,
          display: 'flex',
          alignItems: 'center',
          gap: 18,
        }}
      >
        <IconNode icon={ShieldCheck} label="中立期待" detail="制度入口" accent="teal" style={{width: 360, minHeight: 120}} />
      </div>

      <div style={{position: 'absolute', left: 720, top: 480, width: 140, height: 50, opacity: p1}}>
        <div style={{width: 4, height: 40, margin: '0 auto', backgroundColor: PALETTE.teal, scale: `1 ${line}`, transformOrigin: 'top center'}} />
      </div>

      <div style={{position: 'absolute', left: 100, top: 540, display: 'flex', gap: 28}}>
        <div
          style={{
            width: 900,
            minHeight: 300,
            boxSizing: 'border-box',
            padding: '24px 28px',
            backgroundColor: PALETTE.paper,
            border: `3px solid ${PALETTE.teal}`,
            borderRadius: 14,
            opacity: p2,
            ...baseTextStyle,
          }}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18}}>
            <CheckCircle2 size={36} color={PALETTE.teal} strokeWidth={2.3} />
            <div style={{fontSize: 30, fontWeight: 900, color: PALETTE.teal}}>适用 · 期待中立</div>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14}}>
            <IconNode icon={Gavel} label="审判人员" detail="含人民陪审员" accent="teal" compact style={{width: '100%'}} />
            <IconNode icon={FileText} label="法官助理 / 书记员" detail="司法辅助" accent="teal" compact style={{width: '100%'}} />
            <IconNode icon={Microscope} label="司法技术人员" detail="技术辅助" accent="teal" compact style={{width: '100%'}} />
            <IconNode icon={Languages} label="翻译 · 鉴定 · 勘验" detail="诉讼辅助" accent="teal" compact style={{width: '100%'}} />
          </div>
        </div>

        <div
          style={{
            width: 780,
            minHeight: 300,
            boxSizing: 'border-box',
            padding: '24px 28px',
            backgroundColor: PALETTE.paper,
            border: `3px solid ${PALETTE.gold}`,
            borderRadius: 14,
            opacity: p3,
            ...baseTextStyle,
          }}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18}}>
            <XCircle size={36} color={PALETTE.gold} strokeWidth={2.3} />
            <div style={{fontSize: 30, fontWeight: 900, color: PALETTE.gold}}>不适用 · 不期待中立</div>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: 14}}>
            <IconNode icon={Eye} label="证人" detail="不可替代" accent="gold" style={{width: '100%', minHeight: 100}} />
            <IconNode icon={Briefcase} label="代理人/专家辅助人" detail="站在一方·不期待中立" accent="gold" style={{width: '100%', minHeight: 100}} />
          </div>
        </div>
      </div>
    </div>
  );
};

/* ========== 02 申请时间线 ========== */
export const TimingScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const p1 = interpolate(frame, [16, 55], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p2 = interpolate(frame, [70, 120], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p3 = interpolate(frame, [140, 190], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const rail = interpolate(frame, [50, 120], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="02" eyebrow="申请时间" title="开始审理 → 辩论终结前" accent="blue" />

      <MaskedReveal delay={10} duration={22} style={{position: 'absolute', left: 120, top: 236}}>
        <div style={{...baseTextStyle, fontSize: 38, fontWeight: 900, lineHeight: 1.22}}>
          通常在开始审理时提出 · 事后知道可延至 <Keyword accent="red">辩论终结前</Keyword>
        </div>
      </MaskedReveal>

      {/* 时间轴 */}
      <div style={{position: 'absolute', left: 160, top: 420, width: 1600, opacity: p1}}>
        <div style={{position: 'relative', height: 10, backgroundColor: PALETTE.line, borderRadius: 6}}>
          <div
            style={{
              width: `${rail * 100}%`,
              height: '100%',
              backgroundColor: PALETTE.blue,
              borderRadius: 6,
              transformOrigin: 'left center',
            }}
          />
        </div>

        <div style={{position: 'absolute', left: 0, top: -20, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12}}>
          <div style={{width: 18, height: 18, borderRadius: 999, backgroundColor: PALETTE.teal, border: `3px solid ${PALETTE.paper}`}} />
          <IconNode icon={Clock} label="开始审理" detail="通常提出时点" accent="teal" compact style={{width: 300}} />
        </div>

        <div style={{position: 'absolute', left: 560, top: 40, opacity: p2}}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              padding: '18px 24px',
              backgroundColor: PALETTE.blueSoft,
              border: `2px solid ${PALETTE.blue}`,
              borderRadius: 10,
              ...baseTextStyle,
              fontSize: 24,
              fontWeight: 850,
              color: PALETTE.blue,
            }}
          >
            <Eye size={32} strokeWidth={2.3} />
            事后才知回避事由
          </div>
        </div>

        <div style={{position: 'absolute', right: 0, top: -20, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, opacity: p2}}>
          <div style={{width: 18, height: 18, borderRadius: 999, backgroundColor: PALETTE.red, border: `3px solid ${PALETTE.paper}`}} />
          <IconNode icon={Gavel} label="辩论终结" detail="最迟界限" accent="red" compact style={{width: 280}} />
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 200,
          top: 700,
          display: 'flex',
          gap: 28,
          opacity: p3,
          translate: `0px ${interpolate(frame, [140, 190], [22, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}px`,
        }}
      >
        <IconNode icon={CheckCircle2} label="窗口内可申请" detail="开始审理→辩论终结前" accent="teal" style={{width: 520, minHeight: 130}} />
        <IconNode icon={Ban} label="辩论终结后" detail="一般不得再申请" accent="red" style={{width: 480, minHeight: 130}} />
        <IconNode icon={FileText} label="须说明理由" detail="口头/书面均可" accent="blue" style={{width: 480, minHeight: 130}} />
      </div>
    </div>
  );
};

/* ========== 03 申请后决定前：暂停 + 紧急例外 ========== */
export const PendingEffectScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const p1 = interpolate(frame, [16, 55], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p2 = interpolate(frame, [80, 130], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p3 = interpolate(frame, [155, 210], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const line = interpolate(frame, [50, 100], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="03" eyebrow="审查期间效力" title="申请后 · 决定前 · 暂停" accent="gold" />

      <MaskedReveal delay={10} duration={22} style={{position: 'absolute', left: 120, top: 236}}>
        <div style={{...baseTextStyle, fontSize: 38, fontWeight: 900, lineHeight: 1.22}}>
          提出回避申请后 · 作出决定前 · 被申请人 <Keyword accent="red">暂停工作</Keyword>
        </div>
      </MaskedReveal>

      <div
        style={{
          position: 'absolute',
          left: 140,
          top: 380,
          width: 1640,
          height: 200,
          boxSizing: 'border-box',
          padding: '28px 32px',
          backgroundColor: PALETTE.paper,
          border: `2px solid ${PALETTE.line}`,
          borderRadius: 14,
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          opacity: p1,
        }}
      >
        <IconNode icon={FileText} label="提出申请" detail="启动审查" accent="gold" style={{width: 320, minHeight: 130}} />
        <div style={{width: 180, position: 'relative', height: 80}}>
          <FlowArrow left={10} top={18} width={140} progress={line} accent="red" label="决定前" />
        </div>
        <IconNode icon={Pause} label="暂停工作" detail="被申请回避人员" accent="red" style={{width: 360, minHeight: 130}} />
        <div style={{width: 48, height: 4, backgroundColor: PALETTE.line, opacity: p2}} />
        <div style={{opacity: p2}}>
          <IconNode icon={Search} label="等待决定" detail="审查进行中" accent="gold" style={{width: 320, minHeight: 130}} />
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 140,
          top: 640,
          width: 1640,
          boxSizing: 'border-box',
          padding: '28px 34px',
          backgroundColor: PALETTE.paper,
          border: `3px solid ${PALETTE.gold}`,
          borderRadius: 14,
          display: 'flex',
          alignItems: 'center',
          gap: 24,
          opacity: p3,
          translate: `0px ${interpolate(frame, [155, 210], [22, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}px`,
        }}
      >
        <Siren size={52} color={PALETTE.gold} strokeWidth={2.3} />
        <div style={{...baseTextStyle, flex: 1}}>
          <div style={{fontSize: 32, fontWeight: 900, color: PALETTE.gold}}>紧急措施例外</div>
          <div style={{marginTop: 10, fontSize: 24, fontWeight: 750, color: PALETTE.muted}}>需采取紧急措施时 · 不因回避申请而停止</div>
        </div>
        <GateChip label="例外" accent="gold" />
        <IconNode icon={Play} label="可继续处置" detail="仅限紧急事项" accent="gold" compact style={{width: 320}} />
      </div>
    </div>
  );
};

/* ========== 04 决定主体三车道映射 ========== */
export const DecisionScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const lanes = [0, 1, 2].map((i) =>
    interpolate(frame, [20 + i * 40, 60 + i * 40], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: ENTER_EASING,
    }),
  );
  const line = interpolate(frame, [40, 90], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});

  const mappings = [
    {
      fromIcon: Gavel,
      from: '审判人员',
      detail: '含人民陪审员',
      toIcon: Landmark,
      to: '院长决定',
      accent: 'teal' as const,
    },
    {
      fromIcon: Users,
      from: '其他人员',
      detail: '法助·书记员·技术·翻译·鉴定·勘验',
      toIcon: UserRound,
      to: '审判长/独任审判员',
      accent: 'gold' as const,
    },
    {
      fromIcon: Landmark,
      from: '院长本人',
      detail: '任审判长/独任员',
      toIcon: Users,
      to: '审判委员会',
      accent: 'red' as const,
    },
  ];

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="04" eyebrow="决定主体" title="身份 → 决定者 三车道" accent="teal" />

      <MaskedReveal delay={10} duration={22} style={{position: 'absolute', left: 120, top: 236}}>
        <div style={{...baseTextStyle, fontSize: 38, fontWeight: 900, lineHeight: 1.22}}>
          先锁定被申请人身份 · 再映射 <Keyword accent="teal">决定主体</Keyword>
        </div>
      </MaskedReveal>

      <div style={{position: 'absolute', left: 140, top: 360, width: 1640, display: 'flex', flexDirection: 'column', gap: 22}}>
        {mappings.map((m, index) => (
          <div
            key={m.from}
            style={{
              height: 140,
              boxSizing: 'border-box',
              padding: '0 28px',
              backgroundColor: PALETTE.paper,
              border: `2px solid ${PALETTE[m.accent]}`,
              borderRadius: 14,
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              opacity: lanes[index],
              translate: `0px ${interpolate(frame, [20 + index * 40, 60 + index * 40], [18, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}px`,
              boxShadow: '0 14px 34px rgba(23, 32, 29, 0.07)',
            }}
          >
            <IconNode icon={m.fromIcon} label={m.from} detail={m.detail} accent={m.accent} style={{width: 560, minHeight: 100}} />
            <div style={{width: 180, position: 'relative', height: 70}}>
              <FlowArrow left={10} top={12} width={140} progress={line} accent={m.accent} />
            </div>
            <IconNode icon={m.toIcon} label={m.to} detail="决定主体" accent={m.accent} style={{width: 560, minHeight: 100}} />
          </div>
        ))}
      </div>
    </div>
  );
};

/* ========== 05 救济：申请人可复议 vs 被申请人不能 ========== */
export const RemedyScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const p1 = interpolate(frame, [16, 55], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p2 = interpolate(frame, [75, 125], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p3 = interpolate(frame, [150, 200], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const line = interpolate(frame, [50, 100], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="05" eyebrow="救济路径" title="申请人可复议一次" accent="red" />

      <MaskedReveal delay={10} duration={22} style={{position: 'absolute', left: 120, top: 236}}>
        <div style={{...baseTextStyle, fontSize: 38, fontWeight: 900, lineHeight: 1.22}}>
          驳回回避申请 · 申请人可 <Keyword accent="red">复议一次</Keyword> · 被申请人不能复议
        </div>
      </MaskedReveal>

      <div style={{position: 'absolute', left: 100, top: 360, display: 'flex', gap: 28}}>
        <div
          style={{
            width: 880,
            minHeight: 360,
            boxSizing: 'border-box',
            padding: '28px 30px',
            backgroundColor: PALETTE.paper,
            border: `3px solid ${PALETTE.red}`,
            borderRadius: 14,
            opacity: p1,
            ...baseTextStyle,
          }}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22}}>
            <UserRound size={40} color={PALETTE.red} strokeWidth={2.2} />
            <div style={{fontSize: 32, fontWeight: 900, color: PALETTE.red}}>申请人路径</div>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
            <IconNode icon={XCircle} label="驳回决定" detail="不服" accent="red" compact style={{width: 260}} />
            <div style={{width: 120, position: 'relative', height: 70}}>
              <FlowArrow left={4} top={12} width={90} progress={line} accent="red" />
            </div>
            <IconNode icon={RotateCcw} label="复议一次" detail="仅此一次" accent="red" compact style={{width: 280}} />
          </div>
          <div style={{marginTop: 22, display: 'flex', alignItems: 'center', gap: 14}}>
            <IconNode icon={Play} label="复议期间" detail="不停止工作" accent="gold" style={{width: '100%', minHeight: 110}} />
          </div>
        </div>

        <div
          style={{
            width: 820,
            minHeight: 360,
            boxSizing: 'border-box',
            padding: '28px 30px',
            backgroundColor: PALETTE.paper,
            border: `3px solid ${PALETTE.blue}`,
            borderRadius: 14,
            opacity: p2,
            ...baseTextStyle,
          }}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22}}>
            <Gavel size={40} color={PALETTE.blue} strokeWidth={2.2} />
            <div style={{fontSize: 32, fontWeight: 900, color: PALETTE.blue}}>被申请人路径</div>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
            <IconNode icon={Ban} label="对回避决定本身" detail="不得申请复议" accent="blue" style={{width: '100%', minHeight: 120}} />
            <IconNode icon={ShieldCheck} label="决定生效后" detail="换人·程序继续" accent="teal" style={{width: '100%', minHeight: 120}} />
          </div>
        </div>
      </div>

      <ImpactReveal delay={175} style={{position: 'absolute', left: 320, top: 800, opacity: p3}}>
        <div
          style={{
            ...baseTextStyle,
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            padding: '16px 28px',
            backgroundColor: PALETTE.goldSoft,
            border: `2px solid ${PALETTE.gold}`,
            borderRadius: 10,
            fontSize: 28,
            fontWeight: 850,
          }}
        >
          <RotateCcw size={34} color={PALETTE.gold} />
          救济口诀：申请人可复议 · 被申请人不能复议 · 复议 ≠ 上诉
        </div>
      </ImpactReveal>
    </div>
  );
};

/* ========== 06 难点：审查期暂停 ≠ 复议期不停 ========== */
export const PauseVsContinueScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const p1 = interpolate(frame, [16, 55], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p2 = interpolate(frame, [80, 130], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p3 = interpolate(frame, [160, 220], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const line = interpolate(frame, [55, 110], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="06" eyebrow="核心对照" title="审查期暂停 ≠ 复议期不停" accent="purple" />

      <MaskedReveal delay={10} duration={22} style={{position: 'absolute', left: 120, top: 236}}>
        <div style={{...baseTextStyle, fontSize: 38, fontWeight: 900, lineHeight: 1.22}}>
          两段效力必须拆开记 · 切勿 <KeywordFocus accent="purple" delay={36}>混成一段</KeywordFocus>
        </div>
      </MaskedReveal>

      {/* 时间因果链 */}
      <div
        style={{
          position: 'absolute',
          left: 100,
          top: 360,
          width: 1720,
          height: 180,
          boxSizing: 'border-box',
          padding: '24px 28px',
          backgroundColor: PALETTE.paper,
          border: `2px solid ${PALETTE.line}`,
          borderRadius: 14,
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          opacity: p1,
        }}
      >
        <IconNode icon={FileText} label="申请" detail="提出回避" accent="gold" compact style={{width: 240}} />
        <div style={{width: 100, position: 'relative', height: 70}}>
          <FlowArrow left={4} top={12} width={75} progress={line} accent="red" />
        </div>
        <IconNode icon={Pause} label="审查期" detail="暂停工作" accent="red" compact style={{width: 260}} />
        <div style={{width: 100, position: 'relative', height: 70}}>
          <FlowArrow left={4} top={12} width={75} progress={line} accent="gold" />
        </div>
        <IconNode icon={Gavel} label="决定" detail="准许 / 驳回" accent="gold" compact style={{width: 260}} />
        <div style={{width: 100, position: 'relative', height: 70}}>
          <FlowArrow left={4} top={12} width={75} progress={line} accent="blue" />
        </div>
        <IconNode icon={RotateCcw} label="复议期" detail="仅驳回时" accent="blue" compact style={{width: 260}} />
        <div style={{width: 36, height: 4, backgroundColor: PALETTE.line}} />
        <IconNode icon={Play} label="不停工" detail="继续履职" accent="blue" compact style={{width: 240}} />
      </div>

      {/* 双车道对照 */}
      <div
        style={{
          position: 'absolute',
          left: 100,
          top: 600,
          display: 'flex',
          gap: 28,
          opacity: p2,
        }}
      >
        <div
          style={{
            width: 840,
            boxSizing: 'border-box',
            padding: '28px 30px',
            backgroundColor: PALETTE.redSoft,
            border: `3px solid ${PALETTE.red}`,
            borderRadius: 14,
            display: 'flex',
            alignItems: 'center',
            gap: 22,
            ...baseTextStyle,
          }}
        >
          <Pause size={56} color={PALETTE.red} strokeWidth={2.3} />
          <div>
            <div style={{fontSize: 34, fontWeight: 900, color: PALETTE.red}}>审查期 · 暂停</div>
            <div style={{marginTop: 10, fontSize: 22, fontWeight: 750, color: PALETTE.muted}}>申请后 → 决定前（紧急措施除外）</div>
          </div>
        </div>
        <div
          style={{
            width: 840,
            boxSizing: 'border-box',
            padding: '28px 30px',
            backgroundColor: PALETTE.blueSoft,
            border: `3px solid ${PALETTE.blue}`,
            borderRadius: 14,
            display: 'flex',
            alignItems: 'center',
            gap: 22,
            ...baseTextStyle,
          }}
        >
          <Play size={56} color={PALETTE.blue} strokeWidth={2.3} />
          <div>
            <div style={{fontSize: 34, fontWeight: 900, color: PALETTE.blue}}>复议期 · 不停</div>
            <div style={{marginTop: 10, fontSize: 22, fontWeight: 750, color: PALETTE.muted}}>对驳回复议期间 · 被申请人继续工作</div>
          </div>
        </div>
      </div>

      <ImpactReveal delay={190} style={{position: 'absolute', left: 360, top: 820, opacity: p3}}>
        <div
          style={{
            ...baseTextStyle,
            display: 'flex',
            alignItems: 'center',
            gap: 18,
            padding: '18px 30px',
            backgroundColor: PALETTE.purpleSoft,
            border: `2px solid ${PALETTE.purple}`,
            borderRadius: 10,
            fontSize: 30,
            fontWeight: 900,
          }}
        >
          <ShieldCheck size={38} color={PALETTE.purple} />
          口诀：审查停 · 复议不停
        </div>
      </ImpactReveal>
    </div>
  );
};
