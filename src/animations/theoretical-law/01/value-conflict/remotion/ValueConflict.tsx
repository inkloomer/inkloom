import type {CSSProperties, ReactNode} from 'react';
import {
  ChevronsDown,
  ChevronsUp,
  Crosshair,
  Bird,
  Gauge,
  Globe,
  Landmark,
  Layers,
  Scale,
  ShieldHalf,
  Sparkles,
  User,
  Users,
} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  wine: '#4A1F27',
  wineDeep: '#381319',
  nameplate: '#5E2A34',
  cream: '#F1E6CC',
  creamDim: '#DFD2B4',
  gold: '#C69B4E',
  goldSoft: '#A5823F',
  slate: '#46628C',
  copper: '#B0714B',
  ink: '#2E1A1E',
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

const MosaicPlate = ({children, tone = C.nameplate, text = C.cream}: {readonly children: ReactNode; readonly tone?: string; readonly text?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 16px', backgroundColor: tone, color: text, fontSize: 22, fontWeight: 900, letterSpacing: 2, border: `2px solid ${C.gold}`}}>
    {children}
  </span>
);

const Soft = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}30`, padding: '2px 9px'}}>{children}</span>
);

const Tessera = ({accent = C.gold, children, solid = false}: {readonly accent?: string; readonly children: ReactNode; readonly solid?: boolean}) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '4px 13px',
      border: `2px solid ${accent}`,
      backgroundColor: solid ? accent : `${accent}1c`,
      fontSize: 23,
      fontWeight: 880,
      color: solid ? C.wineDeep : C.ink,
    }}
  >
    {children}
  </span>
);

const Stamp = ({children, color = C.copper, delay = 0, size = 30}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number; readonly size?: number}) => {
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

const CopperUnderline = ({children, delay = 0}: {readonly children: ReactNode; readonly delay?: number}) => {
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
          backgroundColor: C.copper,
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
    style={{
      backgroundColor: C.wine,
      color: C.cream,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(0deg, transparent 0 47px, ${C.gold}0d 47px 48px), repeating-linear-gradient(90deg, transparent 0 47px, ${C.gold}0d 47px 48px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.gold}`}} />
    <div style={{position: 'absolute', left: 38, top: 38, right: 38, bottom: 38, border: `1px solid ${C.goldSoft}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 18px', backgroundColor: C.gold, border: `3px solid ${C.wineDeep}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.wineDeep, letterSpacing: 2}}>考点 06 · {code}</span>
    </div>
    <header
      style={{
        position: 'absolute',
        left: 250,
        right: 72,
        top: 34,
        height: 88,
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        alignItems: 'center',
        gap: 22,
        borderBottom: `3px double ${C.gold}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.cream}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.gold, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const ClashCard = ({
  delay,
  iconA,
  iconB,
  marker,
  arena,
  valueA,
  valueB,
  example,
}: {
  readonly delay: number;
  readonly iconA: ReactNode;
  readonly iconB: ReactNode;
  readonly marker: string;
  readonly arena: string;
  readonly valueA: string;
  readonly valueB: string;
  readonly example: string;
}) => (
  <Enter delay={delay} from="up" marker={marker} style={{width: 540, height: 360}}>
    <div style={{backgroundColor: C.cream, border: `4px solid ${C.goldSoft}`, height: '100%', padding: '22px 26px', display: 'flex', flexDirection: 'column', gap: 18}}>
      <MosaicPlate>{arena}</MosaicPlate>
      <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
        <div style={{flex: 1, backgroundColor: C.creamDim, border: `3px solid ${C.slate}`, padding: '14px 14px', textAlign: 'center'}}>
          {iconA}
          <div style={{marginTop: 8, fontSize: 25, fontWeight: 930, color: C.ink}}>{valueA}</div>
        </div>
        <span style={{fontSize: 34, fontWeight: 950, color: C.copper}}>⚡</span>
        <div style={{flex: 1, backgroundColor: C.creamDim, border: `3px solid ${C.slate}`, padding: '14px 14px', textAlign: 'center'}}>
          {iconB}
          <div style={{marginTop: 8, fontSize: 25, fontWeight: 930, color: C.ink}}>{valueB}</div>
        </div>
      </div>
      <div style={{marginTop: 'auto', fontSize: 22, fontWeight: 860, color: C.ink, textAlign: 'center'}}>
        例：<Soft color={C.copper}>{example}</Soft>
      </div>
    </div>
  </Enter>
);

export const ConflictArenasScene = () => {
  /* data-final-knowledge="arenas-heading" data-final-knowledge="individual-clash-card" data-final-knowledge="community-clash-card" data-final-knowledge="mixed-clash-card" data-final-knowledge="arenas-note" */
  return (
    <Shell code="01" kicker="场合" title="冲突出现的三种场合">
      <div
        data-layout="three-clash-pair-cards"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,soft-highlight,chip,thin-underline"
        data-visual-grammar="individual-clash,community-clash,mixed-clash"
        data-focal-rule="value-clashes-arise-between-three-kinds-of-holders"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="arenas-heading" style={{position: 'absolute', left: 460, top: 0, width: 860}}>
          <div style={{backgroundColor: C.cream, border: `3px solid ${C.goldSoft}`, padding: '12px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 33, fontWeight: 950, color: C.ink}}>
              价值与价值，在<CopperUnderline delay={26}>三张谈判桌</CopperUnderline>上相撞
            </span>
          </div>
        </Enter>
        <div style={{display: 'flex', gap: 28, marginTop: 92}}>
          <ClashCard
            delay={30}
            iconA={<User size={40} color={C.slate} strokeWidth={2.3} />}
            iconB={<User size={40} color={C.slate} strokeWidth={2.3} />}
            marker="individual-clash-card"
            arena="个体之间"
            valueA="个人自由"
            valueB="他人利益"
            example="我的行动自由撞上你的权益"
          />
          <ClashCard
            delay={56}
            iconA={<Globe size={40} color={C.slate} strokeWidth={2.3} />}
            iconB={<Landmark size={40} color={C.slate} strokeWidth={2.3} />}
            marker="community-clash-card"
            arena="共同体之间"
            valueA="国际人权"
            valueB="一国主权"
            example="跨国的人权主张 vs 本国主权"
          />
          <ClashCard
            delay={82}
            iconA={<User size={40} color={C.slate} strokeWidth={2.3} />}
            iconB={<Users size={40} color={C.slate} strokeWidth={2.3} />}
            marker="mixed-clash-card"
            arena="个体与共同体之间"
            valueA="个人自由"
            valueB="社会秩序"
            example="个人表达 vs 公共安宁"
          />
        </div>
        <Enter delay={140} from="up" marker="arenas-note" style={{position: 'absolute', left: 240, top: 634, width: 1300}}>
          <div style={{backgroundColor: C.nameplate, border: `3px solid ${C.gold}`, padding: '14px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 25, fontWeight: 920, color: C.cream}}>法的价值冲突，常常出现于这三种场合</span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const RankPrincipleScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="rank-heading" data-final-knowledge="rank-steps" data-final-knowledge="sacrifice-note" data-final-knowledge="scope-levels" data-final-knowledge="rank-verdict-plate" */
  const fall = prog(frame, 96, 22);
  return (
    <Shell code="02" kicker="钥匙一" title="价值位阶：保高舍低">
      <div
        data-layout="value-rank-steps-with-scope-rings"
        data-visual-anchor="typographic-sequence"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="high-low-sacrifice,three-scope-levels,name-plate-verdict"
        data-focal-rule="higher-value-prevails-only-across-ranks"
        data-focal-channels="icon,contrast,enclosure,motion,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="rank-heading" style={{position: 'absolute', left: 400, top: 0, width: 980}}>
          <div style={{backgroundColor: C.cream, border: `3px solid ${C.goldSoft}`, padding: '12px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 33, fontWeight: 950, color: C.ink}}>
              适用于<CopperUnderline delay={26}>不同位阶</CopperUnderline>价值的冲突场合
            </span>
          </div>
        </Enter>
        <div style={{position: 'absolute', left: 90, top: 110, width: 900, height: 480}}>
          <svg style={{position: 'absolute', inset: 0, width: 900, height: 480}} viewBox="0 0 900 480">
            <line x1="450" y1="60" x2="450" y2={60 + 330 * fall} stroke={C.copper} strokeWidth={5} />
            <polygon points={`450,${60 + 330 * fall} 436,${60 + 330 * fall - 24} 464,${60 + 330 * fall - 24}`} fill={C.copper} />
          </svg>
          <Enter delay={30} from="none" style={{position: 'absolute', left: 180, top: 0, width: 540}}>
            <div data-final-knowledge="rank-steps" style={{backgroundColor: C.cream, border: `4px solid ${C.gold}`, padding: '14px 22px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18}}>
              <ChevronsUp size={34} color={C.goldSoft} strokeWidth={2.6} />
              <span style={{fontSize: 29, fontWeight: 950, color: C.ink}}>高位阶价值</span>
              <span style={{marginLeft: 'auto'}}>
                <Stamp delay={60} size={26}>优先保护</Stamp>
              </span>
            </div>
          </Enter>
          <div style={{position: 'absolute', left: 380, top: 200, opacity: fall}}>
            <span style={{fontSize: 25, fontWeight: 930, color: C.copper, backgroundColor: C.nameplate, border: `2px solid ${C.gold}`, padding: '5px 16px'}}>保高 · 舍低</span>
          </div>
          <Enter delay={58} from="none" style={{position: 'absolute', left: 180, top: 396, width: 540}}>
            <div style={{backgroundColor: C.creamDim, border: `4px solid ${C.slate}`, padding: '14px 22px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18}}>
              <ChevronsDown size={34} color={C.slate} strokeWidth={2.6} />
              <span style={{fontSize: 29, fontWeight: 950, color: C.ink}}>低位阶价值</span>
              <span style={{marginLeft: 'auto', fontSize: 24, fontWeight: 900, color: C.slate}}>作出牺牲</span>
            </div>
          </Enter>
        </div>
        <Enter delay={120} marker="scope-levels" style={{position: 'absolute', left: 1060, top: 120, width: 676}}>
          <div style={{backgroundColor: C.cream, border: `4px solid ${C.goldSoft}`, padding: '20px 24px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Layers size={36} color={C.copper} strokeWidth={2.4} />
              <span style={{fontSize: 26, fontWeight: 950, color: C.ink}}>位阶排序的三个层次</span>
            </div>
            <div style={{marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10}}>
              <Tessera accent={C.gold} solid>
                具体法律中
              </Tessera>
              <Tessera accent={C.gold} solid>
                部门法中
              </Tessera>
              <Tessera accent={C.gold} solid>
                整个法律体系中
              </Tessera>
            </div>
          </div>
        </Enter>
        <Enter delay={170} from="up" marker="rank-verdict-plate" style={{position: 'absolute', left: 1060, top: 500, width: 676}}>
          <div style={{backgroundColor: C.nameplate, border: `3px solid ${C.gold}`, padding: '16px 24px'}}>
            <span style={{fontSize: 24, fontWeight: 920, color: C.cream, lineHeight: 1.5}}>
              位阶原则＝<Soft color={C.gold}>保高舍低</Soft>；同一位阶内部，才轮到比例原则出场
            </span>
          </div>
        </Enter>
        <Enter delay={200} from="left" marker="sacrifice-note" style={{position: 'absolute', left: 90, top: 640, width: 900}}>
          <div style={{border: `3px solid ${C.copper}`, backgroundColor: '#B0714B14', padding: '13px 22px', textAlign: 'center'}}>
            <span style={{fontSize: 25, fontWeight: 920, color: C.cream}}>
              牺牲低位阶价值，是<CopperUnderline delay={226}>不得已</CopperUnderline>而非偏好
            </span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const ProportionPrincipleScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="proportion-heading" data-final-knowledge="case-weighing-note" data-final-knowledge="minimal-harm-dial" data-final-knowledge="venue-contrast-pair" data-final-knowledge="proportion-mnemonic" */
  const sweep = interpolate(frame, [70, 120], [-60, 42], CLAMP);
  return (
    <Shell code="03" kicker="钥匙二" title="比例原则：伤到最小">
      <div
        data-layout="case-balance-with-minimal-harm-dial"
        data-visual-anchor="concept-icon"
        data-text-treatments="label-block,chip,soft-highlight,external-negation"
        data-visual-grammar="case-weighing,minimal-harm-rule,venue-contrast-pair"
        data-focal-rule="necessary-harm-must-shrink-to-the-minimum"
        data-focal-channels="icon,motion,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="proportion-heading" style={{position: 'absolute', left: 430, top: 0, width: 920}}>
          <div style={{backgroundColor: C.cream, border: `3px solid ${C.goldSoft}`, padding: '12px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 33, fontWeight: 950, color: C.ink}}>
              个案中的比例原则：<CopperUnderline delay={26}>损害降到最小限度</CopperUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={34} marker="case-weighing-note" style={{position: 'absolute', left: 80, top: 140, width: 860}}>
          <div style={{backgroundColor: C.cream, border: `4px solid ${C.goldSoft}`, padding: '20px 26px', display: 'flex', alignItems: 'center', gap: 18}}>
            <Scale size={50} color={C.copper} strokeWidth={2.3} />
            <div style={{fontSize: 25, fontWeight: 900, color: C.ink, lineHeight: 1.55}}>
              在具体个案中，<Soft color={C.copper}>权衡</Soft>具体价值的优先地位
              <br />
              <span style={{fontSize: 22, fontWeight: 860, color: C.ink}}>——即使必须损害其他价值</span>
            </div>
          </div>
        </Enter>
        <Enter delay={64} style={{position: 'absolute', left: 1010, top: 110, width: 726}}>
          <div data-final-knowledge="minimal-harm-dial" style={{backgroundColor: C.cream, border: `5px solid ${C.gold}`, borderRadius: 260, padding: '26px 0', textAlign: 'center', position: 'relative', height: 260}}>
            <Gauge size={44} color={C.copper} strokeWidth={2.3} style={{position: 'absolute', left: 30, top: 26}} />
            <div style={{fontSize: 27, fontWeight: 950, color: C.ink, marginTop: 16}}>损害刻度盘</div>
            <div style={{marginTop: 6, fontSize: 22, fontWeight: 860, color: C.ink}}>必须损害时 ↓</div>
            <div style={{position: 'absolute', left: '50%', top: 150, width: 8, height: 96, backgroundColor: C.copper, rotate: `${sweep}deg`, transformOrigin: 'top center', borderRadius: 4}} />
            <div style={{position: 'absolute', left: '50%', top: 150, translate: '-50% 0'}}>
              <Crosshair size={26} color={C.goldSoft} strokeWidth={2.6} />
            </div>
            <div style={{position: 'absolute', right: 34, bottom: 22, fontSize: 23, fontWeight: 950, color: C.copper}}>最小限度</div>
          </div>
        </Enter>
        <Enter delay={130} marker="venue-contrast-pair" style={{position: 'absolute', left: 80, top: 470, width: 860}}>
          <div style={{display: 'flex', gap: 18}}>
            <div style={{flex: 1, backgroundColor: C.creamDim, border: `3px solid ${C.goldSoft}`, padding: '14px 18px', textAlign: 'center'}}>
              <div style={{fontSize: 23, fontWeight: 950, color: C.ink}}>价值位阶</div>
              <div style={{marginTop: 6, fontSize: 22, fontWeight: 880, color: C.ink}}>
                不同位阶 → <Soft color={C.goldSoft}>保高舍低</Soft>
              </div>
            </div>
            <div style={{flex: 1, backgroundColor: C.cream, border: `3px solid ${C.copper}`, padding: '14px 18px', textAlign: 'center'}}>
              <div style={{fontSize: 23, fontWeight: 950, color: C.ink}}>比例原则</div>
              <div style={{marginTop: 6, fontSize: 22, fontWeight: 880, color: C.ink}}>
                同一位阶 → <Soft color={C.copper}>舍弃越少越好</Soft>
              </div>
            </div>
          </div>
        </Enter>
        <Enter delay={190} from="up" marker="proportion-mnemonic" style={{position: 'absolute', left: 80, top: 640, width: 1656}}>
          <div style={{backgroundColor: C.nameplate, border: `3px solid ${C.gold}`, padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20}}>
            <span style={{fontSize: 25, fontWeight: 930, color: C.cream}}>口诀：位阶保高舍低 · 比例越少越好</span>
            <span style={{fontSize: 22, fontWeight: 870, color: C.creamDim}}>适用场合不同，别混用</span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const ValueFieldLimitsScene = () => {
  /* data-final-knowledge="field-heading" data-final-knowledge="open-concept-note" data-final-knowledge="value-chips" data-final-knowledge="conflict-possible-chip" data-final-knowledge="freedom-supremacy-note" data-final-knowledge="three-limit-principles" */
  return (
    <Shell code="04" kicker="价值场" title="开放的价值星空">
      <div
        data-layout="open-concept-field-with-freedom-guards"
        data-visual-anchor="boundary"
        data-text-treatments="label-block,chip,soft-highlight,external-negation"
        data-visual-grammar="open-concept-field,freedom-supremacy-note,three-limit-principles"
        data-focal-rule="freedom-is-supreme-yet-bounded-by-three-principles"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="field-heading" style={{position: 'absolute', left: 460, top: 0, width: 860}}>
          <div style={{backgroundColor: C.cream, border: `3px solid ${C.goldSoft}`, padding: '12px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 33, fontWeight: 950, color: C.ink}}>
              法的价值＝法律<CopperUnderline delay={26}>能满足人的哪些需求</CopperUnderline>
            </span>
          </div>
        </Enter>
        <Enter delay={30} marker="open-concept-note" style={{position: 'absolute', left: 90, top: 110, width: 1596}}>
          <div style={{backgroundColor: C.creamDim, border: `2px solid ${C.goldSoft}`, padding: '12px 22px', display: 'flex', alignItems: 'center', gap: 14}}>
            <Sparkles size={34} color={C.copper} strokeWidth={2.3} />
            <span style={{fontSize: 24, fontWeight: 890, color: C.ink}}>
              开放概念：未穷尽内涵——除了下列常客，还有<Soft color={C.copper}>效率</Soft>等更多成员
            </span>
          </div>
        </Enter>
        <Enter delay={60} marker="value-chips" style={{position: 'absolute', left: 90, top: 200, width: 1596}}>
          <div style={{backgroundColor: C.cream, border: `4px solid ${C.gold}`, padding: '18px 26px', display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center'}}>
            <Tessera accent={C.gold} solid>
              秩序
            </Tessera>
            <Tessera accent={C.slate} solid>
              自由
            </Tessera>
            <Tessera accent={C.gold} solid>
              正义
            </Tessera>
            <Tessera accent={C.gold} solid>
              人权
            </Tessera>
            <Tessera accent={C.copper} solid>
              效率
            </Tessera>
            <span data-final-knowledge="conflict-possible-chip" style={{marginLeft: 'auto'}}>
              <Tessera accent={C.copper}>不同类型价值可能冲突：正义 vs 效率</Tessera>
            </span>
          </div>
        </Enter>
        <Enter delay={110} from="left" marker="freedom-supremacy-note" style={{position: 'absolute', left: 90, top: 340, width: 780}}>
          <div style={{backgroundColor: C.cream, border: `5px solid ${C.slate}`, padding: '22px 26px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <Bird size={44} color={C.slate} strokeWidth={2.3} />
              <span style={{fontSize: 29, fontWeight: 950, color: C.ink}}>自由：最重要的价值</span>
            </div>
            <div style={{marginTop: 10, fontSize: 24, fontWeight: 900, color: C.ink}}>
              但<Soft color={C.copper}>并非绝对</Soft>——受三种原则限制
            </div>
          </div>
        </Enter>
        <Enter delay={150} from="right" marker="three-limit-principles" style={{position: 'absolute', left: 920, top: 340, width: 766}}>
          <div style={{backgroundColor: C.cream, border: `4px solid ${C.goldSoft}`, padding: '20px 24px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <ShieldHalf size={36} color={C.copper} strokeWidth={2.4} />
              <span style={{fontSize: 25, fontWeight: 950, color: C.ink}}>限制自由的三原则</span>
            </div>
            <div style={{marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10}}>
              <Tessera accent={C.slate}>伤害原则</Tessera>
              <Tessera accent={C.slate}>法律家长主义原则</Tessera>
              <Tessera accent={C.slate}>法律道德主义原则</Tessera>
            </div>
          </div>
        </Enter>
        <Enter delay={200} from="up" style={{position: 'absolute', left: 90, top: 648, width: 1596}}>
          <div style={{backgroundColor: C.nameplate, border: `3px solid ${C.gold}`, padding: '14px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 24, fontWeight: 920, color: C.cream}}>
              位阶解决不同位阶之争，比例解决个案之衡——价值的星空因此仍有秩序
            </span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const ValueConflict = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-conflict-arenas" {...SCENES.conflictArenas}>
      <ConflictArenasScene />
    </TimelineSequence>
    <TimelineSequence name="02-rank-principle" {...SCENES.rankPrinciple}>
      <RankPrincipleScene />
    </TimelineSequence>
    <TimelineSequence name="03-proportion-principle" {...SCENES.proportionPrinciple}>
      <ProportionPrincipleScene />
    </TimelineSequence>
    <TimelineSequence name="04-value-field-limits" {...SCENES.valueFieldLimits}>
      <ValueFieldLimitsScene />
    </TimelineSequence>
  </AbsoluteFill>
);
