import type {CSSProperties, ReactNode} from 'react';
import {
  CircleDashed,
  Crown,
  Flag,
  HeartHandshake,
  History,
  Landmark,
  MoveHorizontal,
  Network,
  Scale,
  Trash2,
  UserCog,
  Users,
  Wrench,
} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  charcoal: '#26262A',
  charcoalDeep: '#1D1D21',
  panel: '#3A3A40',
  panelEdge: '#8B8B93',
  offwhite: '#ECEAE4',
  offwhiteDim: '#B9B8B2',
  amber: '#E5A93D',
  amberDeep: '#B9831F',
  coral: '#D05A4E',
  steel: '#7F8790',
} as const;

const prog = (frame: number, delay: number, span = 18) => interpolate(frame, [delay, delay + span], [0, 1], CLAMP);

const Enter = ({
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

const Tape = ({style}: {readonly style?: CSSProperties}) => (
  <div
    style={{
      position: 'absolute',
      backgroundColor: C.amber,
      backgroundImage: `repeating-linear-gradient(-45deg, ${C.charcoalDeep} 0 16px, ${C.amber} 16px 32px)`,
      ...style,
    }}
  />
);

const Post = ({children, tone = C.amber, text = C.charcoalDeep}: {readonly children: ReactNode; readonly tone?: string; readonly text?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 15px', backgroundColor: tone, color: text, fontSize: 22, fontWeight: 900, letterSpacing: 2, border: `2px solid ${C.charcoalDeep}`}}>
    {children}
  </span>
);

const Soft = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, padding: '2px 9px'}}>{children}</span>
);

const LimitChip = ({accent = C.amber, children, solid = false}: {readonly accent?: string; readonly children: ReactNode; readonly solid?: boolean}) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '4px 13px',
      border: `2px solid ${accent}`,
      backgroundColor: solid ? accent : `${accent}1f`,
      fontSize: 23,
      fontWeight: 880,
      color: solid ? C.charcoalDeep : C.offwhite,
    }}
  >
    {children}
  </span>
);

const Stamp = ({children, color = C.coral, delay = 0, size = 30}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number; readonly size?: number}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '10px 20px',
        border: `5px solid ${color}`,
        color,
        fontSize: size,
        fontWeight: 950,
        letterSpacing: 3,
        opacity: p,
        scale: 0.86 + p * 0.14,
        rotate: '-2deg',
      }}
    >
      {children}
    </span>
  );
};

const AmpUnderline = ({children, delay = 0}: {readonly children: ReactNode; readonly delay?: number}) => {
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
          height: 5,
          backgroundColor: C.amber,
          scale: `${prog(frame, delay, 22)} 1`,
          transformOrigin: 'left center',
        }}
      />
    </span>
  );
};

const Shell = ({children, code, kicker, title}: {readonly children: ReactNode; readonly code: string; readonly kicker: string; readonly title: string}) => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: C.charcoal, color: C.offwhite, fontFamily: 'var(--inkloom-animation-body)', overflow: 'hidden'}}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `2px solid ${C.steel}`}} />
    <Tape style={{left: 30, top: 118, width: 1716, height: 8}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 18px', backgroundColor: C.amber, border: `3px solid ${C.charcoalDeep}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.charcoalDeep, letterSpacing: 2}}>考点 05 · {code}</span>
    </div>
    <header
      style={{
        position: 'absolute',
        left: 250,
        right: 72,
        top: 34,
        height: 70,
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        alignItems: 'center',
        gap: 22,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.offwhite}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.amber, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const CauseBillboard = ({
  accent,
  delay,
  icon,
  marker,
  name,
  subtitle,
  body,
}: {
  readonly accent: string;
  readonly delay: number;
  readonly icon: ReactNode;
  readonly marker: string;
  readonly name: string;
  readonly subtitle: string;
  readonly body: ReactNode;
}) => (
  <Enter delay={delay} from="up" marker={marker} style={{width: 540, height: 500}}>
    <div style={{backgroundColor: C.panel, border: `4px solid ${C.panelEdge}`, borderTop: `14px solid ${accent}`, height: '100%', padding: '26px 30px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 20}}>
      <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
        {icon}
        <div>
          <div style={{fontSize: 33, fontWeight: 950, color: C.offwhite}}>{name}</div>
          <div style={{marginTop: 5, fontSize: 22, fontWeight: 850, color: C.offwhiteDim}}>{subtitle}</div>
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', gap: 20, fontSize: 26, fontWeight: 860, color: C.offwhite, lineHeight: 1.66}}>{body}</div>
    </div>
  </Enter>
);

export const SocialComplexityCardsScene = () => {
  /* data-final-knowledge="social-heading" data-final-knowledge="scope-limit-card" data-final-knowledge="beyond-law-chip" data-final-knowledge="human-factor-card" data-final-knowledge="social-condition-card" data-final-knowledge="system-project-chip" */
  return (
    <Shell code="01" kicker="来源一" title="社会本身的复杂">
      <div
        data-layout="three-cause-card-row"
        data-visual-anchor="concept-icon"
        data-text-treatments="label-block,soft-highlight,chip,external-negation"
        data-visual-grammar="scope-limit-cause,human-factor-cause,social-condition-cause"
        data-focal-rule="society-outgrows-what-law-alone-can-adjust"
        data-focal-channels="icon,enclosure,contrast,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="social-heading" style={{position: 'absolute', left: 560, top: 0, width: 660}}>
          <div style={{backgroundColor: C.panel, border: `3px solid ${C.panelEdge}`, padding: '12px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 33, fontWeight: 950, color: C.offwhite}}>
              三张告示：法为何<AmpUnderline delay={26}>管不全</AmpUnderline>
            </span>
          </div>
        </Enter>
        <div style={{display: 'flex', gap: 28, marginTop: 108}}>
          <CauseBillboard
            accent={C.amber}
            delay={30}
            icon={<Users size={46} color={C.amber} strokeWidth={2.3} />}
            marker="scope-limit-card"
            name="调整范围有限"
            subtitle="重要手段 · 非唯一手段"
            body={
              <>
                <span style={{display: 'block'}}>
                  <LimitChip accent={C.amber}>友谊</LimitChip> <LimitChip accent={C.amber}>恋爱</LimitChip> <LimitChip accent={C.amber}>师生</LimitChip> 等关系主要靠其他规范
                </span>
                <span data-final-knowledge="beyond-law-chip" style={{display: 'block', marginTop: 4}}>
                  <Stamp delay={110} size={26}>法外空间客观存在</Stamp>
                </span>
              </>
            }
          />
          <CauseBillboard
            accent={C.coral}
            delay={56}
            icon={<UserCog size={46} color={C.coral} strokeWidth={2.3} />}
            marker="human-factor-card"
            name="受人的因素影响"
            subtitle="人不是全知全能"
            body={
              <>
                <span style={{display: 'block'}}>
                  立法者<Soft color={C.amber}>理性有限</Soft> → 漏洞无法避免
                </span>
                <span style={{display: 'block'}}>
                  执法司法人员能力有限 → 效果<Soft color={C.coral}>打折扣</Soft>
                </span>
                <span style={{display: 'block'}}>公众法治观念仍有提升空间</span>
              </>
            }
          />
          <CauseBillboard
            accent={C.steel}
            delay={82}
            icon={<Network size={46} color={C.offwhite} strokeWidth={2.3} />}
            marker="social-condition-card"
            name="受社会因素制约"
            subtitle="法依赖外部条件"
            body={
              <>
                <span style={{display: 'block'}}>
                  受<LimitChip accent={C.steel} solid>政治</LimitChip> <LimitChip accent={C.steel} solid>经济</LimitChip> <LimitChip accent={C.steel} solid>文化</LimitChip> 影响
                </span>
                <span data-final-knowledge="system-project-chip" style={{display: 'block', marginTop: 4}}>
                  法治国家建设是<Soft color={C.steel}>系统工程</Soft>
                </span>
              </>
            }
          />
        </div>
      </div>
    </Shell>
  );
};

const TensionRow = ({
  delay,
  icon,
  link,
  marker,
  trait,
  reality,
  verdict,
}: {
  readonly delay: number;
  readonly icon: ReactNode;
  readonly link: ReactNode;
  readonly marker: string;
  readonly trait: string;
  readonly reality: string;
  readonly verdict: string;
}) => (
  <Enter delay={delay} from="left" marker={marker} style={{marginTop: 14}}>
    <div style={{backgroundColor: C.panel, border: `2px solid ${C.panelEdge}`, padding: '13px 22px', display: 'flex', alignItems: 'center', gap: 16}}>
      {icon}
      <span style={{fontSize: 26, fontWeight: 950, color: C.offwhite, width: 170}}>{trait}</span>
      {link}
      <span style={{fontSize: 24, fontWeight: 860, color: C.offwhiteDim, flex: 1}}>{reality}</span>
      <LimitChip accent={C.amber} solid>
        {verdict}
      </LimitChip>
    </div>
  </Enter>
);

export const LawOwnLimitRowsScene = () => {
  /* data-final-knowledge="limit-heading" data-final-knowledge="rigidity-row" data-final-knowledge="lag-row" data-final-knowledge="blank-row" data-final-knowledge="vagueness-row" data-final-knowledge="professional-row" data-final-knowledge="source-note" */
  const link = <MoveHorizontal size={30} color={C.amber} strokeWidth={2.6} />;
  return (
    <Shell code="02" kicker="来源二" title="法律自身的五重限制">
      <div
        data-layout="five-tension-verdict-rows"
        data-visual-anchor="typographic-sequence"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="trait-reality-tension,limit-name-verdict,abstract-stability-source"
        data-focal-rule="laws-own-traits-turn-into-its-limits"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="limit-heading" style={{position: 'absolute', left: 470, top: 0, width: 840}}>
          <div style={{backgroundColor: C.panel, border: `3px solid ${C.panelEdge}`, padding: '12px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 33, fontWeight: 950, color: C.offwhite}}>
              特征即局限：特质 vs 现实的<AmpUnderline delay={26}>五道张力</AmpUnderline>
            </span>
          </div>
        </Enter>
        <div style={{marginTop: 84}}>
          <TensionRow
            link={link}
            delay={30}
            icon={<Scale size={34} color={C.amber} strokeWidth={2.3} />}
            marker="rigidity-row"
            reality="现实的具体性"
            trait="一般性"
            verdict="僵硬性"
          />
          <TensionRow
            delay={54}
            icon={<History size={34} color={C.amber} strokeWidth={2.3} />}
            marker="lag-row"
            reality="现实的变化性"
            trait="稳定性"
            verdict="滞后性"
          />
          <TensionRow
            delay={78}
            icon={<CircleDashed size={34} color={C.coral} strokeWidth={2.3} />}
            marker="blank-row"
            reality="应调整而未调整"
            trait="体系漏洞"
            verdict="空白性"
          />
          <TensionRow
            delay={102}
            icon={<CircleDashed size={34} color={C.steel} strokeWidth={2.3} />}
            marker="vagueness-row"
            reality="多种可能理解"
            trait="语言模糊"
            verdict="模糊性"
          />
          <TensionRow
            delay={126}
            icon={<Scale size={34} color={C.steel} strokeWidth={2.3} />}
            marker="professional-row"
            reality="公众理解困难"
            trait="语言专业性"
            verdict="专业性"
          />
        </div>
        <Enter delay={180} from="up" marker="source-note" style={{position: 'absolute', left: 60, top: 664, width: 1656}}>
          <div style={{backgroundColor: C.charcoalDeep, border: `3px solid ${C.amber}`, padding: '13px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 24, fontWeight: 920, color: C.offwhite}}>
              五重限制都源于法律的<AmpUnderline delay={206}>抽象性、稳定性</AmpUnderline>等特征——特征即代价
            </span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const WrongViewGuardsScene = () => {
  /* data-final-knowledge="stance-heading" data-final-knowledge="limitation-definition-plaque" data-final-knowledge="not-defect-chip" data-final-knowledge="omnipotence-guard" data-final-knowledge="nihilism-guard" data-final-knowledge="middle-course-note" */
  return (
    <Shell code="03" kicker="立场" title="反对两个极端">
      <div
        data-layout="definition-plaque-with-guarded-pair"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,soft-highlight,chip,external-negation,stamp"
        data-visual-grammar="limitation-definition,omnipotence-guard,nihilism-guard"
        data-focal-rule="limitation-is-neither-flaw-nor-uselessness"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="stance-heading" style={{position: 'absolute', left: 560, top: 0, width: 660}}>
          <div style={{backgroundColor: C.panel, border: `3px solid ${C.panelEdge}`, padding: '12px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 33, fontWeight: 950, color: C.offwhite}}>局限性 ≠ 缺点</span>
          </div>
        </Enter>
        <Enter delay={30} marker="limitation-definition-plaque" style={{position: 'absolute', left: 240, top: 110, width: 1300}}>
          <div style={{backgroundColor: C.panel, border: `4px solid ${C.amber}`, padding: '20px 28px', textAlign: 'center'}}>
            <span style={{fontSize: 28, fontWeight: 930, color: C.offwhite}}>
              局限性＝<AmpUnderline delay={56}>注定无法突破、必然受到</AmpUnderline>的限制，<Soft color={C.amber}>不等于缺点或缺陷</Soft>
            </span>
            <span data-final-knowledge="not-defect-chip" style={{display: 'block', marginTop: 10}}>
              <LimitChip accent={C.amber} solid>
                客观必然 · 中性
              </LimitChip>
            </span>
          </div>
        </Enter>
        <Enter delay={70} from="left" marker="omnipotence-guard" style={{position: 'absolute', left: 130, top: 360, width: 700}}>
          <div style={{backgroundColor: C.panel, border: `5px solid ${C.coral}`, padding: '22px 26px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <Crown size={42} color={C.coral} strokeWidth={2.3} />
              <span style={{fontSize: 29, fontWeight: 950, color: C.offwhite}}>法律万能论</span>
              <span style={{marginLeft: 'auto', fontSize: 24, fontWeight: 900, color: C.coral}}>✕</span>
            </div>
            <div style={{marginTop: 10, fontSize: 22, fontWeight: 860, color: C.offwhiteDim}}>（法律中心论）以为法能包办一切</div>
          </div>
        </Enter>
        <Enter delay={94} from="right" marker="nihilism-guard" style={{position: 'absolute', left: 950, top: 360, width: 700}}>
          <div style={{backgroundColor: C.panel, border: `5px solid ${C.coral}`, padding: '22px 26px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <Trash2 size={42} color={C.coral} strokeWidth={2.3} />
              <span style={{fontSize: 29, fontWeight: 950, color: C.offwhite}}>法律无用论</span>
              <span style={{marginLeft: 'auto', fontSize: 24, fontWeight: 900, color: C.coral}}>✕</span>
            </div>
            <div style={{marginTop: 10, fontSize: 22, fontWeight: 860, color: C.offwhiteDim}}>（法律虚无主义）以为法一无是处</div>
          </div>
        </Enter>
        <Enter delay={150} from="up" marker="middle-course-note" style={{position: 'absolute', left: 240, top: 620, width: 1300}}>
          <div style={{backgroundColor: C.charcoalDeep, border: `3px solid ${C.amber}`, padding: '14px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 25, fontWeight: 920, color: C.offwhite, display: 'inline-flex', alignItems: 'center', gap: 12}}>
              <Scale size={32} color={C.amber} strokeWidth={2.4} />
              正确姿势：正视局限、善用<LimitChip accent={C.amber} solid>其他社会规范</LimitChip>协同治理
            </span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const InspirationMitigationBenchScene = () => {
  /* data-final-knowledge="bench-heading" data-final-knowledge="supremacy-inspiration" data-final-knowledge="morality-combine-inspiration" data-final-knowledge="leadership-inspiration" data-final-knowledge="mitigation-card" data-final-knowledge="acceptable-range-chip" */
  return (
    <Shell code="04" kicker="启发与缓解" title="工具台上见分寸">
      <div
        data-layout="inspiration-rail-with-tool-bench"
        data-visual-anchor="concept-icon"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="rule-of-law-inspirations,professional-mitigation,acceptable-range-verdict"
        data-focal-rule="professional-methods-keep-limitations-acceptable"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="bench-heading" style={{position: 'absolute', left: 470, top: 0, width: 840}}>
          <div style={{backgroundColor: C.panel, border: `3px solid ${C.panelEdge}`, padding: '12px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 33, fontWeight: 950, color: C.offwhite}}>对法治建设的三点启发</span>
          </div>
        </Enter>
        <div style={{display: 'flex', gap: 24, marginTop: 84}}>
          <Enter delay={30} from="left" marker="supremacy-inspiration" style={{flex: 1}}>
            <div style={{backgroundColor: C.panel, border: `4px solid ${C.amber}`, padding: '18px 22px', height: 180, display: 'flex', flexDirection: 'column', gap: 10}}>
              <Landmark size={40} color={C.amber} strokeWidth={2.3} />
              <span style={{fontSize: 24, fontWeight: 920, color: C.offwhite, lineHeight: 1.45}}>强调<AmpUnderline delay={56}>宪法法律至上</AmpUnderline>，但不压制其他规范</span>
            </div>
          </Enter>
          <Enter delay={54} from="up" marker="morality-combine-inspiration" style={{flex: 1}}>
            <div style={{backgroundColor: C.panel, border: `4px solid ${C.amber}`, padding: '18px 22px', height: 180, display: 'flex', flexDirection: 'column', gap: 10}}>
              <HeartHandshake size={40} color={C.amber} strokeWidth={2.3} />
              <span style={{fontSize: 24, fontWeight: 920, color: C.offwhite, lineHeight: 1.45}}>依法治国与以德治国相结合，是<AmpUnderline delay={80}>必然选择</AmpUnderline></span>
            </div>
          </Enter>
          <Enter delay={78} from="right" marker="leadership-inspiration" style={{flex: 1}}>
            <div style={{backgroundColor: C.panel, border: `4px solid ${C.amber}`, padding: '18px 22px', height: 180, display: 'flex', flexDirection: 'column', gap: 10}}>
              <Flag size={40} color={C.amber} strokeWidth={2.3} />
              <span style={{fontSize: 24, fontWeight: 920, color: C.offwhite, lineHeight: 1.45}}>坚持法治与坚持党的领导<AmpUnderline delay={104}>并不矛盾</AmpUnderline></span>
            </div>
          </Enter>
        </div>
        <Enter delay={120} from="up" marker="mitigation-card" style={{position: 'absolute', left: 130, top: 400, width: 1520}}>
          <div style={{backgroundColor: C.panel, border: `5px solid ${C.steel}`, padding: '20px 28px', display: 'flex', alignItems: 'center', gap: 22}}>
            <Wrench size={48} color={C.offwhite} strokeWidth={2.3} />
            <div>
              <div style={{fontSize: 28, fontWeight: 950, color: C.offwhite}}>局限性的缓解：专业工具台</div>
              <div style={{marginTop: 10, display: 'flex', flexWrap: 'wrap', gap: 10}}>
                <LimitChip accent={C.amber} solid>法律论证</LimitChip>
                <LimitChip accent={C.amber} solid>法律解释</LimitChip>
                <LimitChip accent={C.steel}>等专业方法</LimitChip>
              </div>
            </div>
          </div>
        </Enter>
        <Enter delay={170} from="up" style={{position: 'absolute', left: 130, top: 620, width: 1520}}>
          <div data-final-knowledge="acceptable-range-chip" style={{backgroundColor: C.charcoalDeep, border: `3px solid ${C.coral}`, padding: '14px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 25, fontWeight: 920, color: C.offwhite}}>
              可将不利影响<Soft color={C.coral}>控制在可接受范围内</Soft>
            </span>
            <span style={{marginLeft: 18}}>
              <Stamp delay={192} size={26}>考试立场</Stamp>
            </span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const LimitationsOfLaw = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-social-complexity-cards" {...SCENES.socialComplexityCards}>
      <SocialComplexityCardsScene />
    </TimelineSequence>
    <TimelineSequence name="02-law-own-limit-rows" {...SCENES.lawOwnLimitRows}>
      <LawOwnLimitRowsScene />
    </TimelineSequence>
    <TimelineSequence name="03-wrong-view-guards" {...SCENES.wrongViewGuards}>
      <WrongViewGuardsScene />
    </TimelineSequence>
    <TimelineSequence name="04-inspiration-mitigation-bench" {...SCENES.inspirationMitigationBench}>
      <InspirationMitigationBenchScene />
    </TimelineSequence>
  </AbsoluteFill>
);
