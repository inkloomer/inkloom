import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {Baby, BookOpen, Building2, Coins, Gavel, Handshake, Heart, HeartHandshake, Home, Landmark, Lightbulb, Link2, Network, Receipt, Scale, ScrollText, Ship, Plane, ShieldAlert, ShoppingCart, UserRound, Zap} from 'lucide-react';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {PALETTE, SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const enter = (frame: number, delay: number, y = 24): CSSProperties => ({
  opacity: interpolate(frame, [delay, delay + 16], [0, 1], CLAMP),
  translate: `0px ${interpolate(frame, [delay, delay + 22], [y, 0], {...CLAMP, easing: Easing.out(Easing.cubic)})}px`,
});

const enterX = (frame: number, delay: number, x = 52): CSSProperties => ({
  opacity: interpolate(frame, [delay, delay + 16], [0, 1], CLAMP),
  translate: `${interpolate(frame, [delay, delay + 24], [x, 0], {...CLAMP, easing: Easing.out(Easing.cubic)})}px 0px`,
});

const BOARD_CODE = ['壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌'];

const LedgerShell = ({
  children,
  code,
  station,
  title,
}: {
  readonly children: ReactNode;
  readonly code: number;
  readonly station: number;
  readonly title: string;
}) => (
  <AbsoluteFill
    className="font-animation-body"
    style={{
      color: PALETTE.paperText,
      backgroundColor: PALETTE.emerald,
      backgroundImage:
        'repeating-linear-gradient(90deg, rgba(95,169,140,0.05) 0 1px, transparent 1px 96px), radial-gradient(circle at 88% 6%, rgba(95,169,140,0.12), transparent 32%)',
      overflow: 'hidden',
    }}
  >
    <div style={{position: 'absolute', inset: 22, border: `2px solid ${PALETTE.gold}`}} />
    <div style={{position: 'absolute', inset: 28, border: `1px solid ${PALETTE.line}`}} />
    <header style={{position: 'absolute', left: 64, right: 64, top: 44, height: 104, display: 'flex', alignItems: 'center', gap: 24, borderBottom: `3px solid ${PALETTE.gold}`}}>
      <div style={{width: 74, height: 74, borderRadius: 37, border: `3px solid ${PALETTE.gold}`, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.jadeSoft}}>
        <BookOpen size={30} color={PALETTE.gold} />
      </div>
      <h1 className="font-animation-title" style={{fontSize: 42, lineHeight: 1.1, margin: 0, fontWeight: 800, color: PALETTE.cream}}>
        {title}
      </h1>
      <div style={{marginLeft: 'auto', textAlign: 'right'}}>
        <div style={{fontSize: 16, fontWeight: 700, letterSpacing: 4, color: PALETTE.muted}}>EMERALD LEDGER HALL · 三国法</div>
        <div style={{fontSize: 18, color: PALETTE.muted, marginTop: 6}}>国际民商事法律适用 · {BOARD_CODE[code]}</div>
      </div>
    </header>
    <div style={{position: 'absolute', left: 66, top: 210, width: 104, height: 640, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22}}>
      {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => {
        const active = index === station;
        return (
          <div
            key={index}
            style={{
              width: 52,
              height: 52,
              borderRadius: 26,
              border: `2px solid ${active ? PALETTE.gold : PALETTE.line}`,
              backgroundColor: active ? PALETTE.gold : PALETTE.panel,
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <span className="font-animation-mono" style={{fontSize: 18, fontWeight: 700, color: active ? PALETTE.emerald : PALETTE.muted}}>{String(index + 1).padStart(2, '0')}</span>
          </div>
        );
      })}
    </div>
    <main style={{position: 'absolute', left: 210, right: 64, top: 190, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Tag = ({color, text}: {readonly color: string; readonly text: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', backgroundColor: `${color}22`, borderLeft: `6px solid ${color}`, padding: '4px 14px'}}>
    <span style={{fontSize: 22, fontWeight: 800, color}}>{text}</span>
  </span>
);

const Ink = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{backgroundColor: color, padding: '2px 10px', fontWeight: 800}}>{children}</span>
);

const Under = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{boxShadow: `inset 0 -3px ${color}`, paddingBottom: 2, fontWeight: 700}}>{children}</span>
);

const JadeStamp = ({delay, frame, text, color = PALETTE.gold}: {readonly delay: number; readonly frame: number; readonly text: string; readonly color?: string}) => (
  <span
    style={{
      ...enter(frame, delay, 10),
      display: 'inline-block',
      border: `3px solid ${color}`,
      borderRadius: 8,
      color,
      padding: '8px 22px',
      fontSize: 23,
      fontWeight: 800,
      letterSpacing: 2,
      rotate: '-3deg',
      backgroundColor: 'rgba(15,61,51,0.7)',
    }}
  >
    {text}
  </span>
);

export const AutonomyClosestScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="autonomy-gate-law-allows" data-final-knowledge="autonomy-no-actual-contact-limit" data-final-knowledge="autonomy-deadline-first-instance" data-final-knowledge="autonomy-treaty-object" data-final-knowledge="autonomy-conduct-mode" data-final-knowledge="closest-connection-catch-all" */
  const frame = useCurrentFrame();
  return (
    <LedgerShell code={0} station={0} title="意思自治与最密切联系">
      <div
        data-layout="dual-principle-ledger-spread"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="autonomy-valid-only-if-law-allows,closest-connection-is-catch-all-fallback"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="autonomy-not-limited-by-actual-contact-unless-law-provides"
        data-focal-channels="contrast,enclosure,locator"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{display: 'flex', gap: 24, marginTop: 14}}>
          <div
            data-final-knowledge="autonomy-gate-law-allows"
            style={{...enter(frame, 12), flex: 1.25, border: `3px solid ${PALETTE.jade}`, borderTop: `12px solid ${PALETTE.jade}`, backgroundColor: PALETTE.panel, padding: '20px 28px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.jade, display: 'flex', alignItems: 'center', gap: 12}}>
              <Handshake size={24} color={PALETTE.jade} />
              意思自治 · 四道门
            </div>
            <div style={{marginTop: 10}}>
              只有法律允许的，当事人法律选择才
              <Ink color={PALETTE.jadeSoft}>有效</Ink>
              ；最晚时间：
              <Under color={PALETTE.jade}>一审法庭辩论终结前</Under>
            </div>
          </div>
          <div
            data-final-knowledge="autonomy-no-actual-contact-limit"
            style={{...enter(frame, 40), flex: 1, border: `3px solid ${PALETTE.persimmon}`, borderTop: `12px solid ${PALETTE.persimmon}`, backgroundColor: PALETTE.persimmonSoft, padding: '20px 28px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.persimmon, display: 'flex', alignItems: 'center', gap: 10}}>
              <Link2 size={22} color={PALETTE.persimmon} />
              突破实际联系
            </div>
            <div style={{marginTop: 10}}>
              不受
              <Ink color={PALETTE.persimmonSoft}>实际联系原则</Ink>
              限制（法律另有规定除外）
            </div>
          </div>
        </div>
        <div style={{display: 'flex', gap: 24, marginTop: 22}}>
          <div
            data-final-knowledge="autonomy-treaty-object"
            style={{...enter(frame, 72), flex: 1, border: `3px solid ${PALETTE.gold}`, backgroundColor: PALETTE.goldSoft, padding: '18px 28px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.gold}}>国际条约可作自治对象</div>
            <div style={{marginTop: 8}}>
              含
              <Ink color={PALETTE.goldSoft}>尚未对中国生效</Ink>
              的条约；但不得损害中国社会公共利益、不违反强制性规定
            </div>
          </div>
          <div
            data-final-knowledge="autonomy-conduct-mode"
            style={{...enter(frame, 98), flex: 1, border: `3px solid ${PALETTE.line}`, backgroundColor: PALETTE.panel, padding: '18px 28px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.cream}}>行为方式达成自治 · 两条件</div>
            <div style={{marginTop: 8}}>
              各方援引
              <Under color={PALETTE.jade}>相同法律</Under>
              ＋未提出
              <Under color={PALETTE.persimmon}>法律适用异议</Under>
            </div>
          </div>
        </div>
        <div
          data-final-knowledge="closest-connection-catch-all"
          style={{...enter(frame, 140), marginTop: 26, display: 'flex', justifyContent: 'center', gap: 20, whiteSpace: 'nowrap'}}
        >
          <Network size={28} color={PALETTE.jade} />
          <JadeStamp delay={140} frame={frame} color={PALETTE.jade} text={'兜底原则：无规定时，适用最密切联系地法（《法律适用法》第2条第2款）'} />
        </div>
      </div>
    </LedgerShell>
  );
};

export const SubjectsAgencyScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="natural-person-habitual-residence" data-final-knowledge="natural-person-exception-conduct-place" data-final-knowledge="legal-person-registration-main-business" data-final-knowledge="legal-person-three-elements" data-final-knowledge="limitation-follows-foundation" data-final-knowledge="agency-internal-external" data-final-knowledge="trust-autonomy-property-place" */
  const frame = useCurrentFrame();
  return (
    <LedgerShell code={1} station={1} title="民事主体 · 时效 · 代理 · 信托">
      <div
        data-layout="three-desk-personal-status-bench"
        data-visual-anchor="role-pair"
        data-visual-grammar="natural-person-habitual-residence-rule,legal-person-registration-main-business-rule,agency-splits-internal-external"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="natural-person-uses-habitual-residence-conduct-place-when-residence-lacks"
        data-focal-channels="contrast,enclosure,locator"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{display: 'flex', gap: 20, marginTop: 12}}>
          <div
            data-final-knowledge="natural-person-habitual-residence"
            style={{...enter(frame, 12), flex: 1.15, border: `3px solid ${PALETTE.jade}`, borderTop: `12px solid ${PALETTE.jade}`, backgroundColor: PALETTE.panel, padding: '18px 26px', fontSize: 21, lineHeight: 1.65}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.jade, display: 'flex', alignItems: 'center', gap: 10}}>
              <UserRound size={22} color={PALETTE.jade} />
              自然人
            </div>
            <div style={{marginTop: 8}}>
              原则：
              <Ink color={PALETTE.jadeSoft}>经常居所地法</Ink>
              <br />
              例外：居无行有 →
              <Under color={PALETTE.jade}>行为地法</Under>
              认定有行为能力；婚姻继承按各自冲突规范；票据行为能力原则上
              <Ink color={PALETTE.goldSoft}>本国法</Ink>
            </div>
          </div>
          <div
            data-final-knowledge="legal-person-registration-main-business"
            style={{...enter(frame, 38), flex: 1.15, border: `3px solid ${PALETTE.gold}`, borderTop: `12px solid ${PALETTE.gold}`, backgroundColor: PALETTE.panel, padding: '18px 26px', fontSize: 21, lineHeight: 1.65}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.gold, display: 'flex', alignItems: 'center', gap: 10}}>
              <Building2 size={22} color={PALETTE.gold} />
              法人及分支
            </div>
            <div style={{marginTop: 8}}>
              原则：
              <Ink color={PALETTE.goldSoft}>登记地法</Ink>
              <br />
              主营业地与登记地不一致 → 可用
              <Under color={PALETTE.gold}>主营业地法</Under>
              或登记地法
            </div>
          </div>
          <div
            data-final-knowledge="limitation-follows-foundation"
            style={{...enter(frame, 64), flex: 1.15, border: `3px solid ${PALETTE.persimmon}`, borderTop: `12px solid ${PALETTE.persimmon}`, backgroundColor: PALETTE.persimmonSoft, padding: '18px 26px', fontSize: 21, lineHeight: 1.65}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.persimmon, display: 'flex', alignItems: 'center', gap: 10}}>
              <Scale size={22} color={PALETTE.persimmon} />
              时效·代理·信托
            </div>
            <div style={{marginTop: 8}}>
              时效与
              <Ink color={PALETTE.persimmonSoft}>基础关系准据法一致</Ink>
              ；委托代理、信托允许意思自治
            </div>
          </div>
        </div>
        <div style={{display: 'flex', gap: 20, marginTop: 22}}>
          <div
            data-final-knowledge="agency-internal-external"
            style={{...enter(frame, 96), flex: 1.6, border: `3px solid ${PALETTE.line}`, backgroundColor: PALETTE.panel, padding: '18px 28px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.cream}}>代理 · 内外两分</div>
            <div style={{display: 'flex', gap: 18, marginTop: 10}}>
              <div style={{flex: 1, borderLeft: `8px solid ${PALETTE.jade}`, padding: '6px 14px', backgroundColor: 'rgba(15,61,51,0.8)'}}>
                内部关系（被代理人与代理人）→
                <Under color={PALETTE.jade}>代理关系发生地法</Under>
              </div>
              <div style={{flex: 1, borderLeft: `8px solid ${PALETTE.persimmon}`, padding: '6px 14px', backgroundColor: 'rgba(15,61,51,0.8)'}}>
                外部关系（代理行为效力）→
                <Under color={PALETTE.persimmon}>代理行为地法</Under>
              </div>
            </div>
          </div>
          <div
            data-final-knowledge="trust-autonomy-property-place"
            style={{...enter(frame, 122), flex: 1, border: `3px solid ${PALETTE.route}`, backgroundColor: PALETTE.routeSoft, padding: '18px 28px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.route}}>信托</div>
            <div style={{marginTop: 8}}>
              意思自治优先 → 无选择时
              <Ink color={PALETTE.routeSoft}>财产所在地法</Ink>
              或关系发生地法
            </div>
          </div>
        </div>
        <div
          data-final-knowledge="legal-person-three-elements"
          style={{...enter(frame, 158), marginTop: 24, display: 'flex', justifyContent: 'center', gap: 18, whiteSpace: 'nowrap'}}
        >
          <JadeStamp delay={158} frame={frame} color={PALETTE.gold} text={'口诀：自然人用经居地，居无行有行为地；法人登记主营地'} />
        </div>
      </div>
    </LedgerShell>
  );
};

export const MarriageScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="marriage-ceremony-flexible" data-final-knowledge="marriage-conditions-order" data-final-knowledge="divorce-agreement-limited-autonomy" data-final-knowledge="litigation-divorce-court-law" data-final-knowledge="spousal-personal-property" data-final-knowledge="marriage-closest-connection-fallback" */
  const frame = useCurrentFrame();
  return (
    <LedgerShell code={2} station={2} title="婚姻与夫妻关系">
      <div
        data-layout="marriage-fork-ledger"
        data-visual-anchor="document-fork"
        data-visual-grammar="marriage-ceremony-one-of-many-laws,divorce-agreement-limited-autonomy,litigation-divorce-court-law"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="divorce-agreement-and-property-allow-limited-autonomy"
        data-focal-channels="contrast,enclosure,connector"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{display: 'flex', gap: 22, marginTop: 12}}>
          <div
            data-final-knowledge="marriage-ceremony-flexible"
            style={{...enter(frame, 12), flex: 1, border: `3px solid ${PALETTE.jade}`, borderTop: `12px solid ${PALETTE.jade}`, backgroundColor: PALETTE.panel, padding: '18px 26px', fontSize: 21, lineHeight: 1.65}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.jade, display: 'flex', alignItems: 'center', gap: 10}}>
              <Heart size={22} color={PALETTE.jade} />
              结婚
            </div>
            <div style={{marginTop: 8}}>
              手续：
              <Ink color={PALETTE.jadeSoft}>多法一</Ink>
              （缔结地 / 一方经居地 / 国籍国法之一即有效）
              <br />
              条件：
              <Under color={PALETTE.jade}>共居 → 共国 → 缔结地</Under>
            </div>
          </div>
          <div
            data-final-knowledge="divorce-agreement-limited-autonomy"
            style={{...enter(frame, 40), flex: 1, border: `3px solid ${PALETTE.gold}`, borderTop: `12px solid ${PALETTE.gold}`, backgroundColor: PALETTE.panel, padding: '18px 26px', fontSize: 21, lineHeight: 1.65}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.gold}}>协议离婚 · 有限自治</div>
            <div style={{marginTop: 8}}>
              可选一方
              <Ink color={PALETTE.goldSoft}>经常居所地 / 国籍国法</Ink>
              <br />
              无选择：
              <Under color={PALETTE.gold}>共居 → 共国 → 离婚手续机构地</Under>
            </div>
          </div>
          <div
            data-final-knowledge="litigation-divorce-court-law"
            style={{...enter(frame, 68), flex: 0.9, border: `3px solid ${PALETTE.persimmon}`, borderTop: `12px solid ${PALETTE.persimmon}`, backgroundColor: PALETTE.persimmonSoft, padding: '18px 26px', fontSize: 21, lineHeight: 1.65}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.persimmon, display: 'flex', alignItems: 'center', gap: 10}}>
              <Gavel size={22} color={PALETTE.persimmon} />
              诉讼离婚
            </div>
            <div style={{marginTop: 8}}>
              唯一硬性：
              <Ink color={PALETTE.persimmonSoft}>法院地法</Ink>
            </div>
          </div>
        </div>
        <div style={{display: 'flex', gap: 22, marginTop: 22}}>
          <div
            data-final-knowledge="spousal-personal-property"
            style={{...enter(frame, 100), flex: 1.55, border: `3px solid ${PALETTE.route}`, backgroundColor: PALETTE.routeSoft, padding: '18px 28px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.route}}>夫妻关系 · 人身与财产</div>
            <div style={{display: 'flex', gap: 18, marginTop: 10}}>
              <div style={{flex: 1, borderLeft: `8px solid ${PALETTE.route}`, padding: '6px 14px', backgroundColor: 'rgba(15,61,51,0.8)'}}>
                人身：
                <Under color={PALETTE.route}>共居 → 共国</Under>
                （两步走）
              </div>
              <div style={{flex: 1.4, borderLeft: `8px solid ${PALETTE.gold}`, padding: '6px 14px', backgroundColor: 'rgba(15,61,51,0.8)'}}>
                财产：有限自治（一方经居 / 国籍 / 主要财产所在地）→
                <Under color={PALETTE.gold}>共居 → 共国</Under>
              </div>
            </div>
          </div>
          <div
            data-final-knowledge="marriage-closest-connection-fallback"
            style={{...enter(frame, 128), flex: 1, border: `3px solid ${PALETTE.line}`, backgroundColor: PALETTE.panel, padding: '18px 28px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.cream}}>兜底 · 近人近财产</div>
            <div style={{marginTop: 8}}>
              无共居亦无共国 → 按
              <Ink color={PALETTE.jadeSoft}>最密切联系原则</Ink>
              确定法律
            </div>
          </div>
        </div>
        <div style={{...enter(frame, 162), marginTop: 24, display: 'flex', justifyContent: 'center'}}>
          <JadeStamp delay={162} frame={frame} color={PALETTE.gold} text={'口诀：结婚手续多法一，诉讼离婚法院地；协离财产自治地，共居共国行为地'} />
        </div>
      </div>
    </LedgerShell>
  );
};

export const SuccessionPropertyScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="statutory-immovable-location" data-final-knowledge="statutory-movable-habitual-residence" data-final-knowledge="will-form-flexible" data-final-knowledge="will-effect-dual-window" data-final-knowledge="estate-administration-location" data-final-knowledge="movable-autonomy-then-location" data-final-knowledge="transport-securities-pledge-exceptions" */
  const frame = useCurrentFrame();
  return (
    <LedgerShell code={4} station={4} title="继承与物权 · 财产两卷">
      <div
        data-layout="succession-property-twin-columns"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="statutory-succession-splits-by-property-type,will-form-one-of-many-laws,property-rights-location-rule"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="immovable-follows-location-movable-follows-autonomy-then-location"
        data-focal-channels="contrast,enclosure,locator"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{display: 'flex', gap: 22, marginTop: 12}}>
          <div
            data-final-knowledge="statutory-immovable-location"
            style={{...enter(frame, 12), flex: 1, border: `3px solid ${PALETTE.jade}`, borderTop: `12px solid ${PALETTE.jade}`, backgroundColor: PALETTE.panel, padding: '18px 26px', fontSize: 21, lineHeight: 1.65}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.jade, display: 'flex', alignItems: 'center', gap: 10}}>
              <ScrollText size={22} color={PALETTE.jade} />
              法定继承
            </div>
            <div style={{marginTop: 8}}>
              不动产 →
              <Ink color={PALETTE.jadeSoft}>所在地法</Ink>
              ；动产 → 死亡时
              <Under color={PALETTE.jade}>经居地法</Under>
              ；绝产 → 死亡时遗产所在地法
            </div>
          </div>
          <div
            data-final-knowledge="will-form-flexible"
            style={{...enter(frame, 38), flex: 1, border: `3px solid ${PALETTE.gold}`, borderTop: `12px solid ${PALETTE.gold}`, backgroundColor: PALETTE.panel, padding: '18px 26px', fontSize: 21, lineHeight: 1.65}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.gold}}>遗嘱 · 方式多法一</div>
            <div style={{marginTop: 8}}>
              立遗嘱时 / 死亡时经居地法 ·
              <Ink color={PALETTE.goldSoft}>国籍国法</Ink>
              · 遗嘱行为地法之一即
              <Under color={PALETTE.gold}>成立</Under>
            </div>
          </div>
          <div
            data-final-knowledge="will-effect-dual-window"
            style={{...enter(frame, 64), flex: 1, border: `3px solid ${PALETTE.persimmon}`, borderTop: `12px solid ${PALETTE.persimmon}`, backgroundColor: PALETTE.persimmonSoft, padding: '18px 26px', fontSize: 21, lineHeight: 1.65}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.persimmon}}>遗嘱效力 · 管理</div>
            <div style={{marginTop: 8}}>
              效力：立 / 亡时经居地或国籍国法（立时亡时皆可用）；管理 →
              <Ink color={PALETTE.persimmonSoft}>遗产所在地法</Ink>
            </div>
          </div>
        </div>
        <div style={{display: 'flex', gap: 22, marginTop: 22}}>
          <div
            data-final-knowledge="movable-autonomy-then-location"
            style={{...enter(frame, 96), flex: 1, border: `3px solid ${PALETTE.route}`, borderTop: `12px solid ${PALETTE.route}`, backgroundColor: PALETTE.panel, padding: '18px 26px', fontSize: 21, lineHeight: 1.65}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.route, display: 'flex', alignItems: 'center', gap: 10}}>
              <Home size={22} color={PALETTE.route} />
              物权 · 基本原则
            </div>
            <div style={{marginTop: 8}}>
              不动产 →
              <Ink color={PALETTE.routeSoft}>物之所在地法</Ink>
              ；动产 → 意思自治优先，无选择时法律事实发生时
              <Under color={PALETTE.route}>物之所在地法</Under>
              （看被追夺方获得之时）
            </div>
          </div>
          <div
            data-final-knowledge="transport-securities-pledge-exceptions"
            style={{...enter(frame, 122), flex: 1, border: `3px solid ${PALETTE.line}`, backgroundColor: PALETTE.panel, padding: '18px 26px', fontSize: 21, lineHeight: 1.65}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.cream}}>物权 · 三例外</div>
            <div style={{marginTop: 8}}>
              运输中动产：自治 →
              <Under color={PALETTE.gold}>目的地法</Under>
              ；有价证券：权利实现地 / 最密切联系地；权利质权：
              <Under color={PALETTE.persimmon}>设立地法</Under>
            </div>
          </div>
        </div>
        <div style={{...enter(frame, 158), marginTop: 24, display: 'flex', justifyContent: 'center'}}>
          <JadeStamp delay={158} frame={frame} color={PALETTE.gold} text={'口诀：法定不动所在地，动产死亡经居地；不动物之所在地，动产自治获得地'} />
        </div>
      </div>
    </LedgerShell>
  );
};

export const ContractTortsScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="contract-general-rule" data-final-knowledge="three-chinese-foreign-contracts" data-final-knowledge="consumer-contract-choice" data-final-knowledge="labor-contract-forbidden-choice" data-final-knowledge="tort-general-rule" data-final-knowledge="product-liability-restricted" data-final-knowledge="personality-rights-rule" data-final-knowledge="ip-infringement-court-place" */
  const frame = useCurrentFrame();
  return (
    <LedgerShell code={5} station={5} title="合同之债与侵权之债">
      <div
        data-layout="contract-tort-dual-gate"
        data-visual-anchor="flow-path"
        data-visual-grammar="contract-autonomy-then-closest,consumer-labor-restricted-choice,tort-autonomy-common-residence-conduct-place"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="consumer-and-labor-restrict-law-choice-to-protect-the-weaker"
        data-focal-channels="contrast,enclosure,connector"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{display: 'flex', gap: 20, marginTop: 12}}>
          <div
            data-final-knowledge="contract-general-rule"
            style={{...enter(frame, 12), flex: 0.85, border: `3px solid ${PALETTE.jade}`, borderTop: `12px solid ${PALETTE.jade}`, backgroundColor: PALETTE.panel, padding: '16px 24px', fontSize: 21, lineHeight: 1.6}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.jade, display: 'flex', alignItems: 'center', gap: 10}}>
              <Handshake size={22} color={PALETTE.jade} />
              合同 · 总则
            </div>
            <div style={{marginTop: 8}}>
              <Ink color={PALETTE.jadeSoft}>意思自治</Ink>
              → 最密切联系
            </div>
          </div>
          <div
            data-final-knowledge="three-chinese-foreign-contracts"
            style={{...enter(frame, 36), flex: 0.95, border: `3px solid ${PALETTE.persimmon}`, borderTop: `12px solid ${PALETTE.persimmon}`, backgroundColor: PALETTE.persimmonSoft, padding: '16px 24px', fontSize: 21, lineHeight: 1.6}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.persimmon}}>三种中外合同</div>
            <div style={{marginTop: 8}}>
              境内履行的合资 / 合作 / 合作勘探自然资源 → 只用
              <Ink color={PALETTE.persimmonSoft}>中国法</Ink>
              （专属管辖）
            </div>
          </div>
          <div
            data-final-knowledge="consumer-contract-choice"
            style={{...enter(frame, 60), flex: 1.25, border: `3px solid ${PALETTE.gold}`, borderTop: `12px solid ${PALETTE.gold}`, backgroundColor: PALETTE.panel, padding: '16px 24px', fontSize: 21, lineHeight: 1.6}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.gold, display: 'flex', alignItems: 'center', gap: 10}}>
              <ShoppingCart size={22} color={PALETTE.gold} />
              消费者合同
            </div>
            <div style={{marginTop: 8}}>
              只有
              <Ink color={PALETTE.goldSoft}>消费者</Ink>
              可选，限商品 / 服务
              <Under color={PALETTE.gold}>提供地法</Under>
              ；不选 → 看经营者：买居有营 → 消费者经居地法；买居无营 → 提供地法
            </div>
          </div>
          <div
            data-final-knowledge="labor-contract-forbidden-choice"
            style={{...enter(frame, 84), flex: 1.05, border: `3px solid ${PALETTE.route}`, borderTop: `12px solid ${PALETTE.route}`, backgroundColor: PALETTE.panel, padding: '16px 24px', fontSize: 21, lineHeight: 1.6}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.route, display: 'flex', alignItems: 'center', gap: 10}}>
              <Briefcase size={22} color={PALETTE.route} />
              劳动合同
            </div>
            <div style={{marginTop: 8}}>
              <Ink color={PALETTE.routeSoft}>禁选法</Ink>
              ；工地确定 → 工作地法，不定 → 主营业地法；派遣还可
              <Under color={PALETTE.route}>派出地</Under>
            </div>
          </div>
        </div>
        <div style={{display: 'flex', gap: 20, marginTop: 22}}>
          <div
            data-final-knowledge="tort-general-rule"
            style={{...enter(frame, 114), flex: 1, border: `3px solid ${PALETTE.jade}`, backgroundColor: PALETTE.panel, padding: '18px 26px', fontSize: 22, lineHeight: 1.65}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.jade, display: 'flex', alignItems: 'center', gap: 10}}>
              <Zap size={22} color={PALETTE.jade} />
              一般侵权
            </div>
            <div style={{marginTop: 8}}>
              <Ink color={PALETTE.jadeSoft}>自治</Ink>
              → 共同经居地 →
              <Under color={PALETTE.jade}>侵权行为地</Under>
            </div>
          </div>
          <div
            data-final-knowledge="product-liability-restricted"
            style={{...enter(frame, 138), flex: 1.35, border: `3px solid ${PALETTE.persimmon}`, backgroundColor: PALETTE.persimmonSoft, padding: '18px 26px', fontSize: 22, lineHeight: 1.65}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.persimmon}}>产品责任 · 限弱限选</div>
            <div style={{marginTop: 8}}>
              仅
              <Ink color={PALETTE.persimmonSoft}>被侵权人</Ink>
              可选，限侵权地法（主营业地 / 损害发生地）；不选 → 弱居有营 → 被侵权人经居地法，无营 → 侵权地法
            </div>
          </div>
          <div
            data-final-knowledge="personality-rights-rule"
            style={{...enter(frame, 162), flex: 0.9, border: `3px solid ${PALETTE.route}`, backgroundColor: PALETTE.routeSoft, padding: '18px 26px', fontSize: 22, lineHeight: 1.65}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.route}}>人格权</div>
            <div style={{marginTop: 8}}>
              适用
              <Under color={PALETTE.route}>被侵权人经居地法</Under>
            </div>
          </div>
        </div>
        <div style={{...enter(frame, 192), marginTop: 24, display: 'flex', justifyContent: 'center', whiteSpace: 'nowrap'}}>
          <span data-final-knowledge="ip-infringement-court-place" style={{display: 'inline-flex', alignItems: 'center', gap: 18}}>
            <Lightbulb size={26} color={PALETTE.gold} />
            <JadeStamp delay={192} frame={frame} color={PALETTE.gold} text={'知产侵权：自治只能选法院地法 → 被请求保护地法（原告主张的权利有效地）'} />
          </span>
        </div>
      </div>
    </LedgerShell>
  );
};

export const FamilyProtectionScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="parent-child-weak-protection" data-final-knowledge="support-weak-protection" data-final-knowledge="guardianship-weak-protection" data-final-knowledge="adoption-document-mode" data-final-knowledge="adoption-conditions-overlap" data-final-knowledge="adoption-effect-dissolution" */
  const frame = useCurrentFrame();
  const guard = [
    {name: '父母子女', rule: '共同经居地法 → 无共居时，一方经居 / 国籍国中选', pick: '有利于弱者', color: PALETTE.jade},
    {name: '扶养', rule: '一方经居 / 国籍国 / 主要财产所在地中选', pick: '有利于被扶养人', color: PALETTE.gold},
    {name: '监护', rule: '一方经居 / 国籍国中选', pick: '有利于被监护人', color: PALETTE.persimmon},
  ];
  return (
    <LedgerShell code={3} station={3} title="父母子女 · 扶养 · 监护 · 收养">
      <div
        data-layout="weak-party-protection-stair"
        data-visual-anchor="boundary"
        data-visual-grammar="parent-child-support-guardianship-protect-weak,adoption-procedure-and-applicable-law"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="all-three-relations-protect-the-weaker-party-first-parent-child-uses-common-residence"
        data-focal-channels="contrast,enclosure,connector"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{display: 'flex', flexDirection: 'column', gap: 16, marginTop: 12}}>
          {guard.map((item) => (
            <div
              key={item.name}
              data-final-knowledge={item.name === '父母子女' ? 'parent-child-weak-protection' : item.name === '扶养' ? 'support-weak-protection' : 'guardianship-weak-protection'}
              style={{...enterX(frame, 12 + guard.indexOf(item) * 22, 46), display: 'flex', alignItems: 'center', gap: 24, borderLeft: `10px solid ${item.color}`, backgroundColor: PALETTE.panel, padding: '16px 28px'}}
            >
              <span style={{width: 132, fontSize: 25, fontWeight: 800, color: item.color}}>{item.name}</span>
              <span style={{flex: 1, fontSize: 22, lineHeight: 1.55}}>{item.rule}</span>
              <span style={{border: `2px solid ${item.color}`, color: item.color, padding: '6px 16px', fontSize: 22, fontWeight: 800, whiteSpace: 'nowrap'}}>选{item.pick}的法律</span>
            </div>
          ))}
        </div>
        <div style={{display: 'flex', gap: 22, marginTop: 22}}>
          <div
            data-final-knowledge="adoption-document-mode"
            style={{...enter(frame, 88), flex: 1, border: `3px solid ${PALETTE.route}`, backgroundColor: PALETTE.routeSoft, padding: '18px 26px', fontSize: 21, lineHeight: 1.65}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.route, display: 'flex', alignItems: 'center', gap: 10}}>
              <HeartHandshake size={22} color={PALETTE.route} />
              收养 · 程序
            </div>
            <div style={{marginTop: 8}}>
              材料：
              <Ink color={PALETTE.routeSoft}>双认证</Ink>
              或条约证明方式；转交申请 · 亲自（夫妻可互委托）·
              <Under color={PALETTE.route}>书面</Under>
            </div>
          </div>
          <div
            data-final-knowledge="adoption-conditions-overlap"
            style={{...enter(frame, 112), flex: 1, border: `3px solid ${PALETTE.jade}`, backgroundColor: PALETTE.panel, padding: '18px 26px', fontSize: 21, lineHeight: 1.65}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.jade}}>收养 · 条件与手续</div>
            <div style={{marginTop: 8}}>
              <Ink color={PALETTE.jadeSoft}>重叠适用</Ink>
              收养人和被收养人
              <Under color={PALETTE.jade}>经常居所地法</Under>
            </div>
          </div>
          <div
            data-final-knowledge="adoption-effect-dissolution"
            style={{...enter(frame, 136), flex: 1, border: `3px solid ${PALETTE.persimmon}`, backgroundColor: PALETTE.persimmonSoft, padding: '18px 26px', fontSize: 21, lineHeight: 1.65}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.persimmon}}>收养 · 效力与解除</div>
            <div style={{marginTop: 8}}>
              效力 → 收养时
              <Under color={PALETTE.persimmon}>收养人经居地法</Under>
              ；解除 → 被收养人经居地或
              <Ink color={PALETTE.persimmonSoft}>法院地法</Ink>
            </div>
          </div>
        </div>
        <div style={{...enter(frame, 168), marginTop: 22, display: 'flex', justifyContent: 'center'}}>
          <JadeStamp delay={168} frame={frame} color={PALETTE.gold} text={'口诀：父母监扶重弱者，父母先用共居地；双认条约转亲书，条件手续重叠居'} />
        </div>
      </div>
    </LedgerShell>
  );
};

export const EnrichmentIpNegotiableScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="unjust-enrichment-rule" data-final-knowledge="ip-ownership-content" data-final-knowledge="ip-transfer-license" data-final-knowledge="ip-infringement-limited-autonomy" data-final-knowledge="instrument-conduct-place" data-final-knowledge="instrument-remission-draw-place" data-final-knowledge="instrument-others-pay-place" */
  const frame = useCurrentFrame();
  return (
    <LedgerShell code={6} station={6} title="不当得利 · 知识产权 · 票据">
      <div
        data-layout="three-rule-memo-bench"
        data-visual-anchor="typographic-sequence"
        data-visual-grammar="unjust-enrichment-autonomy-common-residence-place,ip-ownership-protection-place,instrument-conduct-place"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="ip-infringement-autonomy-limited-to-court-place-then-requested-protection-place"
        data-focal-channels="contrast,enclosure,connector"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{display: 'flex', gap: 22, marginTop: 14}}>
          <div
            data-final-knowledge="unjust-enrichment-rule"
            style={{...enter(frame, 12), flex: 1, border: `3px solid ${PALETTE.jade}`, borderTop: `12px solid ${PALETTE.jade}`, backgroundColor: PALETTE.panel, padding: '20px 28px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.jade, display: 'flex', alignItems: 'center', gap: 10}}>
              <Coins size={24} color={PALETTE.jade} />
              不当得利 · 无因管理
            </div>
            <div style={{marginTop: 10}}>
              <Ink color={PALETTE.jadeSoft}>意思自治</Ink>
              → 共同经居地法 →
              <Under color={PALETTE.jade}>发生地法</Under>
            </div>
          </div>
          <div
            data-final-knowledge="ip-ownership-content"
            style={{...enter(frame, 40), flex: 1.25, border: `3px solid ${PALETTE.gold}`, borderTop: `12px solid ${PALETTE.gold}`, backgroundColor: PALETTE.panel, padding: '20px 28px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.gold, display: 'flex', alignItems: 'center', gap: 10}}>
              <Lightbulb size={24} color={PALETTE.gold} />
              知识产权 · 三分账
            </div>
            <div style={{marginTop: 10}}>
              归属和内容 →
              <Ink color={PALETTE.goldSoft}>被请求保护地法</Ink>
              ；转让许可 →
              <Under color={PALETTE.gold}>按合同之债规则</Under>
              （协议定）
            </div>
          </div>
          <div
            data-final-knowledge="instrument-conduct-place"
            style={{...enter(frame, 68), flex: 1, border: `3px solid ${PALETTE.route}`, borderTop: `12px solid ${PALETTE.route}`, backgroundColor: PALETTE.panel, padding: '20px 28px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.route, display: 'flex', alignItems: 'center', gap: 10}}>
              <Receipt size={24} color={PALETTE.route} />
              票据 · 行为行为地
            </div>
            <div style={{marginTop: 10}}>
              票据行为 →
              <Ink color={PALETTE.routeSoft}>行为地法</Ink>
              ；支票出票记载事项经协议可用付款地法
            </div>
          </div>
        </div>
        <div style={{display: 'flex', gap: 22, marginTop: 24}}>
          <div
            data-final-knowledge="ip-infringement-limited-autonomy"
            style={{...enter(frame, 100), flex: 1, border: `3px solid ${PALETTE.persimmon}`, backgroundColor: PALETTE.persimmonSoft, padding: '18px 28px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.persimmon}}>知产侵权 · 限选</div>
            <div style={{marginTop: 8}}>
              自治
              <Ink color={PALETTE.persimmonSoft}>只能选法院地法</Ink>
              → 被请求保护地法
            </div>
          </div>
          <div
            data-final-knowledge="instrument-remission-draw-place"
            style={{...enter(frame, 124), flex: 1, border: `3px solid ${PALETTE.line}`, backgroundColor: PALETTE.panel, padding: '18px 28px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.cream}}>追索权期限</div>
            <div style={{marginTop: 8}}>
              适用
              <Under color={PALETTE.gold}>出票地法</Under>
            </div>
          </div>
          <div
            data-final-knowledge="instrument-others-pay-place"
            style={{...enter(frame, 148), flex: 1, border: `3px solid ${PALETTE.line}`, backgroundColor: PALETTE.panel, padding: '18px 28px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.cream}}>持票人责任 · 丧失保全</div>
            <div style={{marginTop: 8}}>
              其他统统
              <Under color={PALETTE.route}>付款地法</Under>
            </div>
          </div>
        </div>
        <div style={{...enter(frame, 180), marginTop: 26, display: 'flex', justifyContent: 'center'}}>
          <JadeStamp delay={180} frame={frame} color={PALETTE.jade} text={'口诀：自治共居发生地；内容归属保护地，转让许可是协议，侵权法院保护地；票据行为行为地，追索期限出票地'} />
        </div>
      </div>
    </LedgerShell>
  );
};

export const MaritimeAviationScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="ship-property-flag-state" data-final-knowledge="priority-court-place" data-final-knowledge="aircraft-property-registration" data-final-knowledge="collision-autonomy-then-flag" data-final-knowledge="collision-territorial-public-sea" data-final-knowledge="oil-pollution-damage-place" data-final-knowledge="general-average-adjustment-contribution" */
  const frame = useCurrentFrame();
  return (
    <LedgerShell code={7} station={7} title="海事与民用航空关系">
      <div
        data-layout="maritime-aviation-harbor-board"
        data-visual-anchor="role-pair"
        data-visual-grammar="ship-aircraft-property-flags,collision-routes-by-waters,general-average-adjustment-place"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="collision-territorial-uses-conduct-place-public-sea-uses-court-place"
        data-focal-channels="contrast,enclosure,connector"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{display: 'flex', gap: 20, marginTop: 12}}>
          <div
            data-final-knowledge="ship-property-flag-state"
            style={{...enter(frame, 12), flex: 1.2, border: `3px solid ${PALETTE.jade}`, borderTop: `12px solid ${PALETTE.jade}`, backgroundColor: PALETTE.panel, padding: '18px 26px', fontSize: 21, lineHeight: 1.65}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.jade, display: 'flex', alignItems: 'center', gap: 10}}>
              <Ship size={22} color={PALETTE.jade} />
              船舶物权
            </div>
            <div style={{marginTop: 8}}>
              所有权 / 抵押权 →
              <Ink color={PALETTE.jadeSoft}>船旗国法</Ink>
              ；光租前后抵押 →
              <Under color={PALETTE.jade}>原登记国法</Under>
              ；留置权 → 被留置地法
            </div>
          </div>
          <div
            data-final-knowledge="priority-court-place"
            style={{...enter(frame, 38), flex: 1, border: `3px solid ${PALETTE.persimmon}`, borderTop: `12px solid ${PALETTE.persimmon}`, backgroundColor: PALETTE.persimmonSoft, padding: '18px 26px', fontSize: 21, lineHeight: 1.65}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.persimmon}}>优先权 · 限额</div>
            <div style={{marginTop: 8}}>
              船舶 / 航空器优先权、海事赔偿限额 →
              <Ink color={PALETTE.persimmonSoft}>法院地法</Ink>
            </div>
          </div>
          <div
            data-final-knowledge="aircraft-property-registration"
            style={{...enter(frame, 64), flex: 0.95, border: `3px solid ${PALETTE.route}`, borderTop: `12px solid ${PALETTE.route}`, backgroundColor: PALETTE.panel, padding: '18px 26px', fontSize: 21, lineHeight: 1.65}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.route, display: 'flex', alignItems: 'center', gap: 10}}>
              <Plane size={22} color={PALETTE.route} />
              航空器物权
            </div>
            <div style={{marginTop: 8}}>
              原则 →
              <Ink color={PALETTE.routeSoft}>登记国法</Ink>
            </div>
          </div>
        </div>
        <div style={{display: 'flex', gap: 20, marginTop: 22}}>
          <div
            data-final-knowledge="collision-autonomy-then-flag"
            style={{...enter(frame, 94), flex: 1.35, border: `3px solid ${PALETTE.gold}`, backgroundColor: PALETTE.goldSoft, padding: '18px 28px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.gold}}>船舶碰撞 · 自治后看旗</div>
            <div style={{marginTop: 8}}>
              <Ink color={PALETTE.goldSoft}>意思自治</Ink>
              → 共同旗国法 →
              <Under color={PALETTE.gold}>旗不同看碰撞水域</Under>
            </div>
          </div>
          <div
            data-final-knowledge="collision-territorial-public-sea"
            style={{...enter(frame, 120), flex: 1.35, border: `3px solid ${PALETTE.line}`, backgroundColor: PALETTE.panel, padding: '18px 28px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.cream}}>水域分岔</div>
            <div style={{marginTop: 8}}>
              碰在领水 →
              <Under color={PALETTE.jade}>侵权行为地法</Under>
              ；碰在公海 →
              <Under color={PALETTE.persimmon}>法院地法</Under>
            </div>
          </div>
          <div
            data-final-knowledge="oil-pollution-damage-place"
            style={{...enter(frame, 144), flex: 1, border: `3px solid ${PALETTE.route}`, backgroundColor: PALETTE.routeSoft, padding: '18px 28px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.route}}>油污损害</div>
            <div style={{marginTop: 8}}>
              适用
              <Ink color={PALETTE.routeSoft}>损害结果发生地法</Ink>
            </div>
          </div>
        </div>
        <div style={{...enter(frame, 174), marginTop: 24, display: 'flex', justifyContent: 'center'}}>
          <span data-final-knowledge="general-average-adjustment-contribution" style={{display: 'inline-flex', alignItems: 'center', gap: 18, whiteSpace: 'nowrap'}}>
            <AnchorIcon />
            <JadeStamp delay={174} frame={frame} color={PALETTE.jade} text={'共同海损：理算适用理算地法；分摊自治 → 航程终止地法。口诀：船旗飞登优法院，共损理算理算地'} />
          </span>
        </div>
      </div>
    </LedgerShell>
  );
};

const AnchorIcon = () => <Landmark size={26} color={PALETTE.jade} />;

export const ApplicableLaw = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: PALETTE.emerald, overflow: 'hidden'}}
  >
    <TimelineSequence name="01-autonomy-closest" {...SCENES.autonomyClosest}>
      <AutonomyClosestScene />
    </TimelineSequence>
    <TimelineSequence name="02-subjects-agency" {...SCENES.subjectsAgency}>
      <SubjectsAgencyScene />
    </TimelineSequence>
    <TimelineSequence name="03-marriage" {...SCENES.marriage}>
      <MarriageScene />
    </TimelineSequence>
    <TimelineSequence name="04-family-protection" {...SCENES.familyProtection}>
      <FamilyProtectionScene />
    </TimelineSequence>
    <TimelineSequence name="05-succession-property" {...SCENES.successionProperty}>
      <SuccessionPropertyScene />
    </TimelineSequence>
    <TimelineSequence name="06-contract-torts" {...SCENES.contractTorts}>
      <ContractTortsScene />
    </TimelineSequence>
    <TimelineSequence name="07-enrichment-ip-negotiable" {...SCENES.enrichmentIpNegotiable}>
      <EnrichmentIpNegotiableScene />
    </TimelineSequence>
    <TimelineSequence name="08-maritime-aviation" {...SCENES.maritimeAviation}>
      <MaritimeAviationScene />
    </TimelineSequence>
  </AbsoluteFill>
);
  /* Stable-final-frame inventory: data-final-knowledge="natural-person-habitual-residence" data-final-knowledge="natural-person-exception-conduct-place" data-final-knowledge="legal-person-registration-main-business" data-final-knowledge="legal-person-three-elements" data-final-knowledge="limitation-follows-foundation" data-final-knowledge="agency-internal-external" data-final-knowledge="trust-autonomy-property-place" */
  const frame = useCurrentFrame();
  return (
    <LedgerShell code={1} station={1} title="民事主体 · 时效 · 代理 · 信托">
      <div
        data-layout="three-desk-personal-status-bench"
        data-visual-anchor="role-pair"
        data-visual-grammar="natural-person-habitual-residence-rule,legal-person-registration-main-business-rule,agency-splits-internal-external"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="natural-person-uses-habitual-residence-conduct-place-when-residence-lacks"
        data-focal-channels="contrast,enclosure,locator"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{display: 'flex', gap: 20, marginTop: 12}}>
          <div
            data-final-knowledge="natural-person-habitual-residence"
            style={{...enter(frame, 12), flex: 1.15, border: `3px solid ${PALETTE.jade}`, borderTop: `12px solid ${PALETTE.jade}`, backgroundColor: PALETTE.panel, padding: '18px 26px', fontSize: 21, lineHeight: 1.65}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.jade, display: 'flex', alignItems: 'center', gap: 10}}>
              <UserRound size={22} color={PALETTE.jade} />
              自然人
            </div>
            <div style={{marginTop: 8}}>
              原则：
              <Ink color={PALETTE.jadeSoft}>经常居所地法</Ink>
              <br />
              例外：居无行有 →
              <Under color={PALETTE.jade}>行为地法</Under>
              认定有行为能力；婚姻继承按各自冲突规范；票据行为能力原则上
              <Ink color={PALETTE.goldSoft}>本国法</Ink>
            </div>
          </div>
          <div
            data-final-knowledge="legal-person-registration-main-business"
            style={{...enter(frame, 38), flex: 1.15, border: `3px solid ${PALETTE.gold}`, borderTop: `12px solid ${PALETTE.gold}`, backgroundColor: PALETTE.panel, padding: '18px 26px', fontSize: 21, lineHeight: 1.65}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.gold, display: 'flex', alignItems: 'center', gap: 10}}>
              <Building2 size={22} color={PALETTE.gold} />
              法人及分支
            </div>
            <div style={{marginTop: 8}}>
              原则：
              <Ink color={PALETTE.goldSoft}>登记地法</Ink>
              <br />
              主营业地与登记地不一致 → 可用
              <Under color={PALETTE.gold}>主营业地法</Under>
              或登记地法
            </div>
          </div>
          <div
            data-final-knowledge="limitation-follows-foundation"
            style={{...enter(frame, 64), flex: 1.15, border: `3px solid ${PALETTE.persimmon}`, borderTop: `12px solid ${PALETTE.persimmon}`, backgroundColor: PALETTE.persimmonSoft, padding: '18px 26px', fontSize: 21, lineHeight: 1.65}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.persimmon, display: 'flex', alignItems: 'center', gap: 10}}>
              <Scale size={22} color={PALETTE.persimmon} />
              时效·代理·信托
            </div>
            <div style={{marginTop: 8}}>
              时效与
              <Ink color={PALETTE.persimmonSoft}>基础关系准据法一致</Ink>
              ；委托代理、信托允许意思自治
            </div>
          </div>
        </div>
        <div style={{display: 'flex', gap: 20, marginTop: 22}}>
          <div
            data-final-knowledge="agency-internal-external"
            style={{...enter(frame, 96), flex: 1.6, border: `3px solid ${PALETTE.line}`, backgroundColor: PALETTE.panel, padding: '18px 28px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.cream}}>代理 · 内外两分</div>
            <div style={{display: 'flex', gap: 18, marginTop: 10}}>
              <div style={{flex: 1, borderLeft: `8px solid ${PALETTE.jade}`, padding: '6px 14px', backgroundColor: 'rgba(15,61,51,0.8)'}}>
                内部关系（被代理人与代理人）→
                <Under color={PALETTE.jade}>代理关系发生地法</Under>
              </div>
              <div style={{flex: 1, borderLeft: `8px solid ${PALETTE.persimmon}`, padding: '6px 14px', backgroundColor: 'rgba(15,61,51,0.8)'}}>
                外部关系（代理行为效力）→
                <Under color={PALETTE.persimmon}>代理行为地法</Under>
              </div>
            </div>
          </div>
          <div
            data-final-knowledge="trust-autonomy-property-place"
            style={{...enter(frame, 122), flex: 1, border: `3px solid ${PALETTE.route}`, backgroundColor: PALETTE.routeSoft, padding: '18px 28px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.route}}>信托</div>
            <div style={{marginTop: 8}}>
              意思自治优先 → 无选择时
              <Ink color={PALETTE.routeSoft}>财产所在地法</Ink>
              或关系发生地法
            </div>
          </div>
        </div>
        <div
          data-final-knowledge="legal-person-three-elements"
          style={{...enter(frame, 158), marginTop: 24, display: 'flex', justifyContent: 'center', gap: 18, whiteSpace: 'nowrap'}}
        >
          <JadeStamp delay={158} frame={frame} color={PALETTE.gold} text={'口诀：自然人用经居地，居无行有行为地；法人登记主营地'} />
        </div>
      </div>
    </LedgerShell>
  );
};
