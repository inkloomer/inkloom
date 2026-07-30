import {
  Building2,
  FileCheck2,
  FileText,
  Gavel,
  Home,
  Landmark,
  LockKeyhole,
  MapPinned,
  ShipWheel,
  UserRound,
  Users,
  Ban,
  CheckCircle2,
  ArrowRight,
  ArrowDown,
  Scale,
  MessageCircleOff,
  Link2,
  CircleDot,
} from 'lucide-react';
import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {accentColor, accentSoftColor, PALETTE, toSourceFrame, type Accent} from '../storyboard';
import {
  baseTextStyle,
  FadeSlide,
  FlowArrow,
  IconNode,
  ImpactReveal,
  Keyword,
  MaskedReveal,
  RuleChip,
  SceneHeading,
  StepBadge,
} from '../visual-system';

const reveal = (frame: number, start: number, end: number) =>
  interpolate(frame, [start, end], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.45, 0, 0.2, 1),
  });

/** 01 连接点：案件如何定位法院 */
export const OrientationScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const pathProgress = reveal(frame, 36, 110);
  const tokenX = interpolate(frame, [42, 112], [300, 1080], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.45, 0, 0.25, 1),
  });
  const impact = interpolate(frame, [108, 122, 145], [0, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const hold = reveal(frame, 125, 155);
  const tokenOpacity = interpolate(frame, [42, 54, 108, 118], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="01" eyebrow="先找入口" title="地域管辖在找什么？" accent="red" />

      <MaskedReveal delay={16} duration={28} style={{position: 'absolute', left: 112, top: 268}}>
        <div style={{...baseTextStyle, fontSize: 52, fontWeight: 900, lineHeight: 1.22}}>
          不是找「法院在哪」
          <br />
          而是找案件与法院的
          <Keyword accent="red">连接点</Keyword>
        </div>
      </MaskedReveal>

      <FadeSlide delay={24} style={{position: 'absolute', left: 112, top: 520}}>
        <IconNode icon={FileText} label="民事案件" detail="已确定由法院主管" accent="red" />
      </FadeSlide>

      <FlowArrow left={440} top={560} width={640} progress={pathProgress} accent="red" label="沿着连接点定位" />

      <div
        style={{
          position: 'absolute',
          left: tokenX,
          top: 548,
          zIndex: 4,
          display: 'flex',
          width: 200,
          height: 72,
          alignItems: 'center',
          gap: 12,
          boxSizing: 'border-box',
          padding: '10px 14px',
          backgroundColor: PALETTE.paper,
          border: `2px solid ${PALETTE.red}`,
          borderRadius: 8,
          boxShadow: `0 12px 32px rgba(200, 63, 53, ${0.08 + impact * 0.12})`,
          scale: `${1 - impact * 0.06} ${1 + impact * 0.06}`,
          opacity: tokenOpacity,
        }}
      >
        <FileText size={30} color={PALETTE.red} strokeWidth={2.2} />
        <div style={{...baseTextStyle, fontSize: 22, fontWeight: 850}}>案件</div>
      </div>

      <ImpactReveal delay={110} style={{position: 'absolute', left: 1120, top: 500}}>
        <IconNode icon={MapPinned} label="有管辖权的法院" detail="可以受理此案" accent="teal" wide />
      </ImpactReveal>

      <ImpactReveal delay={128} style={{position: 'absolute', left: 220, top: 760, width: 1480}}>
        <div
          style={{
            ...baseTextStyle,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 18,
            padding: '18px 28px',
            backgroundColor: PALETTE.paper,
            border: `2px solid ${PALETTE.red}`,
            borderRadius: 10,
            boxShadow: '0 12px 28px rgba(23, 32, 29, 0.07)',
            fontSize: 26,
            fontWeight: 850,
            opacity: 0.45 + hold * 0.55,
          }}
        >
          连接点可能是
          <RuleChip accent="blue">当事人所在地</RuleChip>
          <RuleChip accent="gold">法律事实地</RuleChip>
          <RuleChip accent="red">法定专属地</RuleChip>
          <RuleChip accent="teal">协议约定地</RuleChip>
        </div>
      </ImpactReveal>
    </div>
  );
};

/** 02 一般地域：双方一样就被告 / 被告特殊就原告 */
export const GeneralScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const principlePath = reveal(frame, 22, 88);
  const exceptionPath = reveal(frame, 110, 178);
  const ruleHold = reveal(frame, 190, 235);

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="02" eyebrow="一般地域" title="看「人」：当事人所在地" accent="blue" />

      <FadeSlide delay={14} style={{position: 'absolute', left: 112, top: 268}}>
        <div
          style={{
            ...baseTextStyle,
            width: 820,
            minHeight: 360,
            boxSizing: 'border-box',
            padding: '26px 28px',
            backgroundColor: PALETTE.blueSoft,
            border: `2px solid ${PALETTE.blue}`,
            borderRadius: 12,
            boxShadow: '0 14px 32px rgba(23, 32, 29, 0.07)',
          }}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 14, color: PALETTE.blue, fontSize: 24, fontWeight: 900}}>
            <Users size={30} strokeWidth={2.3} />
            双方情况一样 → 原则
          </div>
          <div style={{marginTop: 28, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16}}>
            <IconNode icon={UserRound} label="原告" detail="提起诉讼" accent="blue" compact />
            <div style={{opacity: principlePath, display: 'grid', placeItems: 'center', flex: '0 0 auto'}}>
              <div style={{...baseTextStyle, color: PALETTE.blue, fontSize: 16, fontWeight: 850, marginBottom: 6}}>原告就被告</div>
              <ArrowRight size={40} color={PALETTE.blue} strokeWidth={2.6} />
            </div>
            <div style={{opacity: principlePath, scale: `${0.92 + principlePath * 0.08}`}}>
              <IconNode icon={Home} label="被告住所地" detail="通常的连接点" accent="blue" />
            </div>
          </div>
          <div style={{marginTop: 24, color: PALETTE.muted, fontSize: 18, fontWeight: 750, lineHeight: 1.4}}>
            监禁、注销户籍、双方均离开住所等「双方一样」情形，仍走此路
          </div>
        </div>
      </FadeSlide>

      <FadeSlide delay={100} from="right" style={{position: 'absolute', left: 988, top: 268}}>
        <div
          style={{
            ...baseTextStyle,
            width: 820,
            minHeight: 360,
            boxSizing: 'border-box',
            padding: '26px 28px',
            backgroundColor: PALETTE.goldSoft,
            border: `2px solid ${PALETTE.gold}`,
            borderRadius: 12,
            boxShadow: '0 14px 32px rgba(23, 32, 29, 0.07)',
          }}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 14, color: PALETTE.gold, fontSize: 24, fontWeight: 900}}>
            <UserRound size={30} strokeWidth={2.3} />
            被告一方特殊 → 例外
          </div>
          <div style={{marginTop: 28, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16}}>
            <IconNode icon={UserRound} label="被告特殊" detail="监禁 / 下落不明等" accent="gold" compact />
            <div style={{opacity: exceptionPath, display: 'grid', placeItems: 'center', flex: '0 0 auto'}}>
              <div style={{...baseTextStyle, color: PALETTE.gold, fontSize: 16, fontWeight: 850, marginBottom: 6}}>被告就原告</div>
              <ArrowRight size={40} color={PALETTE.gold} strokeWidth={2.6} />
            </div>
            <div style={{opacity: exceptionPath, scale: `${0.92 + exceptionPath * 0.08}`}}>
              <IconNode icon={Home} label="原告住所地" detail="方便原告起诉" accent="gold" />
            </div>
          </div>
          <div style={{marginTop: 24, color: PALETTE.muted, fontSize: 18, fontWeight: 750, lineHeight: 1.4}}>
            身份关系诉讼、被告被监禁等，坚持被告地不方便时改走此路
          </div>
        </div>
      </FadeSlide>

      <ImpactReveal delay={188} style={{position: 'absolute', left: 220, top: 720, width: 1480}}>
        <div
          style={{
            ...baseTextStyle,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
            padding: '22px 32px',
            backgroundColor: PALETTE.paper,
            border: `2px solid ${PALETTE.blue}`,
            borderRadius: 12,
            boxShadow: '0 14px 34px rgba(23, 32, 29, 0.08)',
            fontSize: 28,
            fontWeight: 850,
            opacity: 0.4 + ruleHold * 0.6,
          }}
        >
          <CheckCircle2 size={36} color={PALETTE.blue} strokeWidth={2.3} />
          两条路径都是
          <Keyword accent="blue">一般地域管辖</Keyword>
          — 不是「特殊地域」
        </div>
      </ImpactReveal>
    </div>
  );
};

const specialRows: Array<{
  label: string;
  icon: typeof Gavel;
  accent: Accent;
  target: string;
  note: string;
}> = [
  {label: '侵权纠纷', icon: Gavel, accent: 'red', target: '侵权行为地', note: '或被告住所地'},
  {label: '合同纠纷', icon: FileCheck2, accent: 'gold', target: '合同履行地', note: '或被告住所地'},
  {label: '公司诉讼', icon: Building2, accent: 'teal', target: '公司住所地', note: '特殊地域 · 可协议改变'},
];

/** 03 特殊地域：事实所在地 */
export const SpecialScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const hubProgress = reveal(frame, 18, 70);

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="03" eyebrow="特殊地域" title="看「事实」：法律事实所在地" accent="gold" />

      <FadeSlide delay={12} style={{position: 'absolute', left: 112, top: 290}}>
        <div
          style={{
            ...baseTextStyle,
            width: 360,
            minHeight: 520,
            boxSizing: 'border-box',
            padding: '32px 28px',
            backgroundColor: PALETTE.goldSoft,
            border: `2px solid ${PALETTE.gold}`,
            borderRadius: 12,
            boxShadow: '0 16px 36px rgba(23, 32, 29, 0.08)',
            opacity: 0.5 + hubProgress * 0.5,
          }}
        >
          <MapPinned size={56} color={PALETTE.gold} strokeWidth={2.1} />
          <div style={{marginTop: 24, fontSize: 32, fontWeight: 900, lineHeight: 1.2}}>法律事实</div>
          <div style={{marginTop: 12, color: PALETTE.muted, fontSize: 20, fontWeight: 700, lineHeight: 1.45}}>
            引起权利义务
            <br />
            发生、变更、消灭
            <br />
            的地点
          </div>
          <div style={{marginTop: 36, paddingTop: 22, borderTop: `2px solid ${PALETTE.gold}`}}>
            <div style={{color: PALETTE.gold, fontSize: 18, fontWeight: 850}}>连接点从「人」</div>
            <div style={{marginTop: 8, fontSize: 30, fontWeight: 900}}>转向「事」</div>
          </div>
          <div style={{marginTop: 28, color: PALETTE.muted, fontSize: 17, fontWeight: 700, lineHeight: 1.4}}>
            看到特殊案型，再找与事实最密切的地点
          </div>
        </div>
      </FadeSlide>

      {specialRows.map((row, index) => {
        const rowProgress = reveal(frame, 36 + index * 30, 92 + index * 30);
        const top = 290 + index * 175;
        return (
          <div key={row.label}>
            <FlowArrow left={500} top={top + 48} width={170} progress={rowProgress} accent={row.accent} />
            <div
              style={{
                position: 'absolute',
                left: 710,
                top,
                opacity: rowProgress,
                translate: `${(1 - rowProgress) * 36}px 0px`,
              }}
            >
              <div
                style={{
                  ...baseTextStyle,
                  display: 'flex',
                  width: 1080,
                  minHeight: 140,
                  alignItems: 'center',
                  gap: 26,
                  boxSizing: 'border-box',
                  padding: '20px 28px',
                  backgroundColor: PALETTE.paper,
                  border: `2px solid ${accentColor(row.accent)}`,
                  borderRadius: 12,
                  boxShadow: '0 12px 28px rgba(23, 32, 29, 0.07)',
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    width: 68,
                    height: 68,
                    placeItems: 'center',
                    color: accentColor(row.accent),
                    backgroundColor: accentSoftColor(row.accent),
                    borderRadius: 8,
                    flex: '0 0 auto',
                  }}
                >
                  <row.icon size={38} strokeWidth={2.2} />
                </div>
                <div style={{flex: '1 1 0', minWidth: 0}}>
                  <div style={{fontSize: 30, fontWeight: 900}}>{row.label}</div>
                  <div style={{marginTop: 8, color: PALETTE.muted, fontSize: 18, fontWeight: 700}}>{row.note}</div>
                </div>
                <ArrowRight size={34} color={accentColor(row.accent)} strokeWidth={2.4} />
                <div style={{color: accentColor(row.accent), fontSize: 28, fontWeight: 900, minWidth: 220, textAlign: 'right'}}>
                  {row.target}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const exclusiveRows = [
  {label: '不动产纠纷', detail: '不动产所在地', icon: Home, scope: '物权 + 四类合同'},
  {label: '港口作业', detail: '港口所在地', icon: ShipWheel, scope: '作业纠纷'},
  {label: '继承遗产', detail: '死亡时住所地\n主要遗产所在地', icon: Landmark, scope: '遗产案件'},
];

/** 04 专属管辖：锁定 + 商品房排除 */
export const ExclusiveScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const lockProgress = reveal(frame, 16, 72);
  const warnProgress = reveal(frame, 190, 240);

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="04" eyebrow="专属管辖" title="法定锁定：不能随便选" accent="red" />

      <FadeSlide delay={12} style={{position: 'absolute', left: 112, top: 280}}>
        <div
          style={{
            ...baseTextStyle,
            width: 320,
            minHeight: 560,
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 22,
            padding: '36px 24px',
            backgroundColor: PALETTE.redSoft,
            border: `3px solid ${PALETTE.red}`,
            borderRadius: 12,
            scale: `${0.92 + lockProgress * 0.08}`,
            boxShadow: '0 16px 40px rgba(200, 63, 53, 0.12)',
          }}
        >
          <LockKeyhole size={68} color={PALETTE.red} strokeWidth={2} />
          <div style={{fontSize: 40, fontWeight: 950, color: PALETTE.red}}>专属</div>
          <div style={{textAlign: 'center', color: PALETTE.muted, fontSize: 20, fontWeight: 750, lineHeight: 1.45}}>
            只能由
            <br />
            法定法院管辖
          </div>
          <div
            style={{
              marginTop: 12,
              padding: '12px 16px',
              backgroundColor: PALETTE.paper,
              borderRadius: 8,
              border: `1.5px solid ${PALETTE.red}`,
              textAlign: 'center',
              fontSize: 18,
              fontWeight: 850,
              color: PALETTE.red,
              lineHeight: 1.35,
            }}
          >
            协议 / 法定管辖
            <br />
            均不能突破
          </div>
        </div>
      </FadeSlide>

      {exclusiveRows.map((row, index) => {
        const rowProgress = reveal(frame, 44 + index * 28, 98 + index * 28);
        const cueStart = 150 + index * 12;
        const cueFrame = Math.max(0, frame - cueStart);
        const cuePhase = (cueFrame % 120) / 120;
        const cueOpacity = reveal(frame, cueStart, cueStart + 18) * interpolate(cuePhase, [0, 0.08, 0.72, 0.84, 1], [0, 1, 1, 0, 0], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
        });
        const top = 280 + index * 160;
        return (
          <div key={row.label}>
            <FlowArrow left={460} top={top + 52} width={140} progress={rowProgress} accent="red" />
            <div
              style={{
                position: 'absolute',
                left: 640,
                top,
                opacity: rowProgress,
                translate: `${(1 - rowProgress) * 32}px 0px`,
              }}
            >
              <div
                style={{
                  ...baseTextStyle,
                  display: 'flex',
                  width: 680,
                  minHeight: 128,
                  alignItems: 'center',
                  gap: 20,
                  boxSizing: 'border-box',
                  padding: '18px 24px',
                  backgroundColor: PALETTE.paper,
                  border: `2px solid ${PALETTE.red}`,
                  borderRadius: 12,
                  boxShadow: '0 12px 28px rgba(23, 32, 29, 0.07)',
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    width: 60,
                    height: 60,
                    placeItems: 'center',
                    color: PALETTE.red,
                    backgroundColor: PALETTE.redSoft,
                    borderRadius: 8,
                    flex: '0 0 auto',
                  }}
                >
                  <row.icon size={34} strokeWidth={2.2} />
                </div>
                <div style={{flex: 1}}>
                  <div style={{fontSize: 26, fontWeight: 900}}>{row.label}</div>
                  <div style={{marginTop: 6, color: PALETTE.muted, fontSize: 17, fontWeight: 700}}>{row.scope}</div>
                </div>
                <div style={{position: 'relative', minWidth: 230, padding: '10px 12px 15px 42px', color: PALETTE.red, backgroundColor: PALETTE.redSoft, borderRadius: 8}}>
                  <MapPinned size={27} strokeWidth={2.3} style={{position: 'absolute', left: 10, top: 12}} />
                  <div style={{fontSize: 19, fontWeight: 900, textAlign: 'right', lineHeight: 1.35, whiteSpace: 'pre-line'}}>{row.detail}</div>
                  <div style={{position: 'absolute', left: 12, right: 12, bottom: 7, height: 2, overflow: 'hidden', backgroundColor: 'rgba(200, 63, 53, 0.22)', borderRadius: 999}}>
                    <div
                      style={{
                        position: 'absolute',
                        left: `${cuePhase * 100}%`,
                        top: -2,
                        width: 34,
                        height: 6,
                        translate: '-50% 0',
                        opacity: cueOpacity,
                        backgroundColor: PALETTE.red,
                        borderRadius: 999,
                        boxShadow: `0 0 10px ${PALETTE.red}`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <ImpactReveal delay={185} style={{position: 'absolute', left: 1380, top: 300}}>
        <div
          style={{
            ...baseTextStyle,
            width: 420,
            minHeight: 520,
            boxSizing: 'border-box',
            padding: '28px 26px',
            backgroundColor: PALETTE.paper,
            border: `3px dashed ${PALETTE.gold}`,
            borderRadius: 12,
            opacity: 0.5 + warnProgress * 0.5,
            boxShadow: '0 14px 32px rgba(23, 32, 29, 0.07)',
          }}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 12, color: PALETTE.gold, fontSize: 24, fontWeight: 900}}>
            <Ban size={32} strokeWidth={2.3} />
            不包括
          </div>
          <div style={{marginTop: 22, fontSize: 30, fontWeight: 900, lineHeight: 1.35}}>
            普通商品房
            <br />
            商铺买卖合同
          </div>
          <div style={{marginTop: 28, paddingTop: 22, borderTop: `2px solid ${PALETTE.line}`}}>
            <div style={{color: PALETTE.red, fontSize: 18, fontWeight: 850, marginBottom: 12}}>不动产专属仅含</div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
              <RuleChip accent="red">不动产物权纠纷</RuleChip>
              <RuleChip accent="gold">农地承包 / 房屋租赁</RuleChip>
              <RuleChip accent="gold">建设工程施工</RuleChip>
              <RuleChip accent="gold">政策性房屋买卖</RuleChip>
            </div>
          </div>
        </div>
      </ImpactReveal>
    </div>
  );
};

const agreementTargets: Array<{label: string; icon: typeof MapPinned}> = [
  {label: '被告住所地', icon: Home},
  {label: '合同履行地', icon: MapPinned},
  {label: '合同签订地', icon: FileCheck2},
  {label: '原告住所地', icon: UserRound},
  {label: '标的物所在地', icon: CircleDot},
];

/** 05 协议管辖：书面 + 实际联系 + 两条红线 */
export const AgreementScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const pathProgress = reveal(frame, 24, 88);
  const redlineProgress = reveal(frame, 150, 200);
  const cueStart = 170;
  const cueFrame = Math.max(0, frame - cueStart);
  const cuePhase = (cueFrame % 110) / 110;
  const cueOpacity =
    reveal(frame, cueStart, cueStart + 16) *
    interpolate(cuePhase, [0, 0.08, 0.7, 0.85, 1], [0, 1, 1, 0, 0], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });

  return (
    <div style={{position: 'absolute', inset: 0}}>
      {/* 标题：关键词双通道强调，避免普通大标题纯字 */}
      <MaskedReveal delay={4} duration={24} style={{position: 'absolute', left: 92, top: 68}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 20}}>
          <div
            style={{
              ...baseTextStyle,
              display: 'grid',
              width: 54,
              height: 54,
              placeItems: 'center',
              color: PALETTE.teal,
              border: `2px solid ${PALETTE.teal}`,
              fontSize: 20,
              fontWeight: 800,
            }}
          >
            05
          </div>
          <div>
            <div style={{...baseTextStyle, color: PALETTE.teal, fontSize: 20, fontWeight: 800, letterSpacing: 1}}>协议管辖</div>
            <div style={{...baseTextStyle, marginTop: 5, fontSize: 44, fontWeight: 900, lineHeight: 1.08, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Keyword accent="teal">可以约定</Keyword>
              <span style={{color: PALETTE.muted, fontWeight: 800}}>，但</span>
              <Keyword accent="red">不能越过红线</Keyword>
            </div>
          </div>
        </div>
      </MaskedReveal>

      {/* 左：书面协议 */}
      <FadeSlide delay={12} style={{position: 'absolute', left: 112, top: 270}}>
        <div
          style={{
            ...baseTextStyle,
            width: 360,
            minHeight: 380,
            boxSizing: 'border-box',
            padding: '26px 24px',
            backgroundColor: PALETTE.tealSoft,
            border: `3px solid ${PALETTE.teal}`,
            borderRadius: 14,
            boxShadow: '0 14px 32px rgba(23, 32, 29, 0.08)',
          }}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
            <div
              style={{
                display: 'grid',
                width: 64,
                height: 64,
                placeItems: 'center',
                color: PALETTE.teal,
                backgroundColor: PALETTE.paper,
                border: `2px solid ${PALETTE.teal}`,
                borderRadius: 10,
              }}
            >
              <FileText size={36} strokeWidth={2.2} />
            </div>
            <div>
              <div style={{fontSize: 30, fontWeight: 950, color: PALETTE.teal}}>书面协议</div>
              <div style={{marginTop: 4, height: 4, width: 92, backgroundColor: PALETTE.teal, borderRadius: 999}} />
            </div>
          </div>

          <div style={{marginTop: 22, display: 'flex', flexDirection: 'column', gap: 12}}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '12px 14px',
                backgroundColor: PALETTE.paper,
                borderRadius: 10,
                border: `1.5px solid ${PALETTE.teal}`,
              }}
            >
              <FileCheck2 size={24} color={PALETTE.teal} strokeWidth={2.3} />
              <span style={{fontSize: 18, fontWeight: 850, color: PALETTE.ink}}>合同 / 财产权益</span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '12px 14px',
                backgroundColor: PALETTE.redSoft,
                borderRadius: 10,
                border: `1.5px solid ${PALETTE.red}`,
              }}
            >
              <MessageCircleOff size={24} color={PALETTE.red} strokeWidth={2.3} />
              <span style={{fontSize: 18, fontWeight: 900, color: PALETTE.red}}>口头协议 · 无效</span>
            </div>
          </div>

          <div
            style={{
              marginTop: 20,
              paddingTop: 16,
              borderTop: `2px dashed ${PALETTE.teal}`,
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <Link2 size={22} color={PALETTE.teal} strokeWidth={2.3} />
              <span style={{fontSize: 18, fontWeight: 850, color: PALETTE.teal}}>可改特殊地域</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <Ban size={22} color={PALETTE.red} strokeWidth={2.3} />
              <span style={{fontSize: 20, fontWeight: 950, color: PALETTE.red}}>不能突破红线</span>
            </div>
          </div>
        </div>
      </FadeSlide>

      <FlowArrow left={500} top={420} width={110} progress={pathProgress} accent="teal" label="选择地点" />

      {/* 中：实际联系地点 */}
      <div
        style={{
          position: 'absolute',
          left: 640,
          top: 270,
          width: 720,
          opacity: pathProgress,
        }}
      >
        <div
          style={{
            ...baseTextStyle,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 16,
            padding: '8px 14px',
            backgroundColor: PALETTE.tealSoft,
            border: `1.5px solid ${PALETTE.teal}`,
            borderRadius: 999,
          }}
        >
          <MapPinned size={22} color={PALETTE.teal} strokeWidth={2.3} />
          <span style={{color: PALETTE.teal, fontSize: 18, fontWeight: 900}}>与争议有</span>
          <Keyword accent="teal">实际联系</Keyword>
          <span style={{color: PALETTE.teal, fontSize: 18, fontWeight: 900}}>的地点</span>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14}}>
          {agreementTargets.map((target, index) => {
            const targetProgress = reveal(frame, 40 + index * 12, 84 + index * 12);
            const Icon = target.icon;
            return (
              <div
                key={target.label}
                style={{
                  opacity: targetProgress,
                  translate: `0px ${(1 - targetProgress) * 18}px`,
                  ...baseTextStyle,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  minHeight: 68,
                  padding: '12px 16px',
                  backgroundColor: PALETTE.paper,
                  border: `2px solid ${PALETTE.teal}`,
                  borderRadius: 12,
                  boxShadow: '0 8px 20px rgba(23, 32, 29, 0.05)',
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    width: 40,
                    height: 40,
                    placeItems: 'center',
                    color: PALETTE.teal,
                    backgroundColor: PALETTE.tealSoft,
                    borderRadius: 8,
                    flex: '0 0 auto',
                  }}
                >
                  <Icon size={22} strokeWidth={2.3} />
                </div>
                <div>
                  <div style={{fontSize: 21, fontWeight: 900, color: PALETTE.ink}}>{target.label}</div>
                  <div style={{marginTop: 4, height: 3, width: 48, backgroundColor: PALETTE.teal, borderRadius: 999}} />
                </div>
              </div>
            );
          })}
          <div
            style={{
              opacity: reveal(frame, 100, 130),
              ...baseTextStyle,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              minHeight: 68,
              padding: '12px 16px',
              backgroundColor: PALETTE.goldSoft,
              border: `2px dashed ${PALETTE.gold}`,
              borderRadius: 12,
            }}
          >
            <div
              style={{
                display: 'grid',
                width: 40,
                height: 40,
                placeItems: 'center',
                color: PALETTE.gold,
                backgroundColor: PALETTE.paper,
                borderRadius: 8,
                flex: '0 0 auto',
              }}
            >
              <Link2 size={22} strokeWidth={2.3} />
            </div>
            <div>
              <div style={{fontSize: 20, fontWeight: 950, color: PALETTE.gold}}>等实际联系地</div>
              <div style={{marginTop: 4, height: 3, width: 56, backgroundColor: PALETTE.gold, borderRadius: 999}} />
            </div>
          </div>
        </div>
      </div>

      {/* 右：择一起诉 + 无效条件 */}
      <ImpactReveal delay={100} style={{position: 'absolute', left: 1400, top: 270}}>
        <div
          style={{
            ...baseTextStyle,
            width: 400,
            minHeight: 380,
            boxSizing: 'border-box',
            padding: '24px 22px',
            backgroundColor: PALETTE.paper,
            border: `3px solid ${PALETTE.teal}`,
            borderRadius: 14,
            boxShadow: '0 14px 32px rgba(23, 32, 29, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            gap: 18,
          }}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <div
              style={{
                display: 'grid',
                width: 48,
                height: 48,
                placeItems: 'center',
                color: PALETTE.teal,
                backgroundColor: PALETTE.tealSoft,
                borderRadius: 10,
              }}
            >
              <Users size={28} strokeWidth={2.3} />
            </div>
            <div>
              <div style={{fontSize: 18, fontWeight: 900, color: PALETTE.teal}}>约定多处时</div>
              <div style={{marginTop: 4, height: 3, width: 64, backgroundColor: PALETTE.teal, borderRadius: 999}} />
            </div>
          </div>

          <div style={{fontSize: 26, fontWeight: 950, lineHeight: 1.45, color: PALETTE.ink}}>
            <span style={{display: 'inline-flex', alignItems: 'center', gap: 8}}>
              <UserRound size={26} color={PALETTE.teal} strokeWidth={2.3} />
              <Keyword accent="teal">原告</Keyword>
              <span style={{color: PALETTE.muted, fontWeight: 800}}>可向</span>
            </span>
            <br />
            <Keyword accent="teal">其中一个</Keyword>
            <span style={{marginLeft: 8, color: PALETTE.teal, borderBottom: `4px solid ${PALETTE.teal}`}}>起诉</span>
          </div>

          <div
            style={{
              marginTop: 'auto',
              padding: '16px 16px',
              backgroundColor: PALETTE.goldSoft,
              border: `2px solid ${PALETTE.gold}`,
              borderRadius: 12,
            }}
          >
            <div style={{display: 'flex', alignItems: 'center', gap: 10, color: PALETTE.gold, fontSize: 17, fontWeight: 900}}>
              <Ban size={22} strokeWidth={2.4} />
              起诉时不能确定
            </div>
            <div style={{marginTop: 10, fontSize: 24, fontWeight: 950, color: PALETTE.gold, lineHeight: 1.25}}>
              管辖协议
              <Keyword accent="gold">无效</Keyword>
            </div>
          </div>
        </div>
      </ImpactReveal>

      {/* 底部双红线：图标 + 徽章 + 扫光轨迹 */}
      <ImpactReveal delay={145} style={{position: 'absolute', left: 112, top: 700, width: 1696}}>
        <div
          style={{
            ...baseTextStyle,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 28,
            opacity: 0.45 + redlineProgress * 0.55,
          }}
        >
          {[
            {badge: '红线一', title: '不得违反级别管辖', icon: Scale},
            {badge: '红线二', title: '不得违反专属管辖', icon: LockKeyhole},
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.badge}
                style={{
                  position: 'relative',
                  boxSizing: 'border-box',
                  padding: '22px 26px',
                  backgroundColor: PALETTE.redSoft,
                  border: `3px solid ${PALETTE.red}`,
                  borderRadius: 14,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 18,
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    width: 64,
                    height: 64,
                    placeItems: 'center',
                    color: PALETTE.paper,
                    backgroundColor: PALETTE.red,
                    borderRadius: 12,
                    flex: '0 0 auto',
                  }}
                >
                  <Icon size={34} strokeWidth={2.2} />
                </div>
                <div style={{flex: 1, minWidth: 0}}>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '4px 12px',
                      backgroundColor: PALETTE.paper,
                      border: `1.5px solid ${PALETTE.red}`,
                      borderRadius: 999,
                      color: PALETTE.red,
                      fontSize: 16,
                      fontWeight: 950,
                    }}
                  >
                    <Ban size={16} strokeWidth={2.5} />
                    {item.badge}
                  </div>
                  <div style={{marginTop: 10, fontSize: 28, fontWeight: 950, color: PALETTE.red, lineHeight: 1.2}}>
                    {item.title}
                  </div>
                  <div
                    style={{
                      position: 'relative',
                      marginTop: 12,
                      height: 4,
                      backgroundColor: 'rgba(200, 63, 53, 0.22)',
                      borderRadius: 999,
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        left: `${cuePhase * 100}%`,
                        top: -2,
                        width: 42,
                        height: 8,
                        translate: '-50% 0',
                        opacity: cueOpacity,
                        backgroundColor: PALETTE.red,
                        borderRadius: 999,
                        boxShadow: `0 0 12px ${PALETTE.red}`,
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ImpactReveal>
    </div>
  );
};

/** 06 合同纠纷三步走：专属 → 协议 → 法定 */
export const ThreeStepScene = () => {
  const frame = toSourceFrame(useCurrentFrame());

  const step1 = reveal(frame, 16, 60);
  const gate1 = reveal(frame, 70, 105);
  const step2 = reveal(frame, 115, 160);
  const gate2 = reveal(frame, 170, 205);
  const step3 = reveal(frame, 215, 265);
  const defendant = reveal(frame, 270, 315);
  const perform = reveal(frame, 310, 360);
  const hold = reveal(frame, 355, 390);

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="06" eyebrow="技术流" title="合同纠纷：专属 → 协议 → 法定" accent="blue" />

      <div style={{position: 'absolute', left: 112, top: 255, width: 1696, display: 'flex', alignItems: 'stretch', gap: 0}}>
        <div
          style={{
            flex: '1 1 0',
            opacity: step1,
            translate: `0px ${(1 - step1) * 28}px`,
            scale: `${0.94 + step1 * 0.06}`,
          }}
        >
          <div
            style={{
              ...baseTextStyle,
              height: '100%',
              minHeight: 140,
              boxSizing: 'border-box',
              padding: '20px 22px',
              backgroundColor: accentSoftColor('red'),
              border: `2px solid ${accentColor('red')}`,
              borderRadius: 12,
              boxShadow: '0 12px 28px rgba(23, 32, 29, 0.07)',
            }}
          >
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <StepBadge number="01" accent="red" />
              <div>
                <div style={{fontSize: 28, fontWeight: 950, color: accentColor('red')}}>专属管辖</div>
                <div style={{marginTop: 4, color: PALETTE.muted, fontSize: 17, fontWeight: 750}}>有则直接锁定，不再往下</div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            flex: '0 0 100',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: gate1,
            gap: 6,
          }}
        >
          <div style={{...baseTextStyle, color: PALETTE.red, fontSize: 15, fontWeight: 850, whiteSpace: 'nowrap'}}>无专属</div>
          <ArrowRight size={34} color={PALETTE.red} strokeWidth={2.6} />
        </div>

        <div
          style={{
            flex: '1 1 0',
            opacity: step2,
            translate: `0px ${(1 - step2) * 28}px`,
            scale: `${0.94 + step2 * 0.06}`,
          }}
        >
          <div
            style={{
              ...baseTextStyle,
              height: '100%',
              minHeight: 140,
              boxSizing: 'border-box',
              padding: '20px 22px',
              backgroundColor: accentSoftColor('teal'),
              border: `2px solid ${accentColor('teal')}`,
              borderRadius: 12,
              boxShadow: '0 12px 28px rgba(23, 32, 29, 0.07)',
            }}
          >
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <StepBadge number="02" accent="teal" />
              <div>
                <div style={{fontSize: 28, fontWeight: 950, color: accentColor('teal')}}>协议管辖</div>
                <div style={{marginTop: 4, color: PALETTE.muted, fontSize: 17, fontWeight: 750}}>有效则按协议，不再往下</div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            flex: '0 0 120',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: gate2,
            gap: 6,
          }}
        >
          <div style={{...baseTextStyle, color: PALETTE.teal, fontSize: 15, fontWeight: 850, whiteSpace: 'nowrap'}}>无有效协议</div>
          <ArrowRight size={34} color={PALETTE.teal} strokeWidth={2.6} />
        </div>

        <div
          style={{
            flex: '1 1 0',
            opacity: step3,
            translate: `0px ${(1 - step3) * 28}px`,
            scale: `${0.94 + step3 * 0.06}`,
          }}
        >
          <div
            style={{
              ...baseTextStyle,
              height: '100%',
              minHeight: 140,
              boxSizing: 'border-box',
              padding: '20px 22px',
              backgroundColor: accentSoftColor('blue'),
              border: `2px solid ${accentColor('blue')}`,
              borderRadius: 12,
              boxShadow: '0 12px 28px rgba(23, 32, 29, 0.07)',
            }}
          >
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <StepBadge number="03" accent="blue" />
              <div>
                <div style={{fontSize: 28, fontWeight: 950, color: accentColor('blue')}}>法定管辖</div>
                <div style={{marginTop: 4, color: PALETTE.muted, fontSize: 17, fontWeight: 750}}>被告地 + 履行地</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 桥接：三步之后进入法定展开 */}
      <div
        style={{
          position: 'absolute',
          left: 112,
          top: 415,
          width: 1696,
          opacity: step3,
          display: 'flex',
          alignItems: 'center',
          gap: 18,
        }}
      >
        <div style={{flex: 1, height: 2, backgroundColor: PALETTE.blue, opacity: 0.35}} />
        <div
          style={{
            ...baseTextStyle,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            padding: '8px 18px',
            minWidth: interpolate(hold, [0, 1], [320, 600]),
            minHeight: 42,
            position: 'relative',
            color: PALETTE.blue,
            backgroundColor: PALETTE.blueSoft,
            border: `1.5px solid ${PALETTE.blue}`,
            borderRadius: 999,
            fontSize: 17,
            fontWeight: 900,
            whiteSpace: 'nowrap',
          }}
        >
          <span style={{position: 'absolute', display: 'flex', alignItems: 'center', gap: 10, opacity: 1 - hold}}>
            <ArrowDown size={22} strokeWidth={2.6} />
            进入第三步：两地并行判断
          </span>
          <span style={{position: 'absolute', display: 'flex', alignItems: 'center', gap: 10, opacity: hold}}>
            <CheckCircle2 size={22} strokeWidth={2.6} />
            专属优先 → 协议次之 → 法定兜底
          </span>
        </div>
        <div style={{flex: 1, height: 2, backgroundColor: PALETTE.blue, opacity: 0.35}} />
      </div>

      <div
        style={{
          position: 'absolute',
          left: 112,
          top: 475,
          width: 1696,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 28,
        }}
      >
        <div
          style={{
            ...baseTextStyle,
            boxSizing: 'border-box',
            padding: '28px 30px',
            backgroundColor: PALETTE.paper,
            border: `2px solid ${PALETTE.blue}`,
            borderRadius: 12,
            opacity: defendant,
            translate: `${(1 - defendant) * -28}px 0px`,
            boxShadow: '0 12px 28px rgba(23, 32, 29, 0.07)',
            minHeight: 280,
          }}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
            <div
              style={{
                display: 'grid',
                width: 68,
                height: 68,
                placeItems: 'center',
                color: PALETTE.blue,
                backgroundColor: PALETTE.blueSoft,
                borderRadius: 10,
              }}
            >
              <Home size={38} strokeWidth={2.2} />
            </div>
            <div>
              <div style={{fontSize: 30, fontWeight: 950, color: PALETTE.blue}}>被告住所地</div>
              <div style={{marginTop: 6, color: PALETTE.muted, fontSize: 18, fontWeight: 750}}>恒有管辖权 · 先挑出来</div>
            </div>
          </div>
          <div style={{marginTop: 28, padding: '18px 20px', backgroundColor: PALETTE.blueSoft, borderRadius: 10, fontSize: 22, fontWeight: 800, lineHeight: 1.45}}>
            无论履行地如何判断，被告住所地法院一定有管辖权
          </div>
        </div>

        <div
          style={{
            ...baseTextStyle,
            boxSizing: 'border-box',
            padding: '28px 30px',
            backgroundColor: PALETTE.paper,
            border: `2px solid ${PALETTE.gold}`,
            borderRadius: 12,
            opacity: perform,
            translate: `${(1 - perform) * 28}px 0px`,
            boxShadow: '0 12px 28px rgba(23, 32, 29, 0.07)',
            minHeight: 280,
          }}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20}}>
            <div
              style={{
                display: 'grid',
                width: 68,
                height: 68,
                placeItems: 'center',
                color: PALETTE.gold,
                backgroundColor: PALETTE.goldSoft,
                borderRadius: 10,
              }}
            >
              <MapPinned size={38} strokeWidth={2.2} />
            </div>
            <div>
              <div style={{fontSize: 30, fontWeight: 950, color: PALETTE.gold}}>合同履行地</div>
              <div style={{marginTop: 6, color: PALETTE.muted, fontSize: 18, fontWeight: 750}}>再判断是否有管辖权</div>
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
            <RuleChip accent="gold">有约定 → 以约定履行地为准</RuleChip>
            <RuleChip accent="red">未履行且约定地非一方住所 → 无管辖权</RuleChip>
            <RuleChip accent="blue">无约定 / 不明 → 法定推定</RuleChip>
          </div>
        </div>
      </div>

    </div>
  );
};
