import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {BookOpen, Feather as FeatherPen, Library, Stamp, TriangleAlert} from 'lucide-react';
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

const DESK_CODE = ['壹', '贰', '叁', '肆', '伍', '陆'];

const TreatyShell = ({
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
      color: PALETTE.ink,
      backgroundColor: PALETTE.desk,
      backgroundImage:
        'repeating-linear-gradient(0deg, rgba(35,64,92,0.035) 0 1px, transparent 1px 64px), radial-gradient(circle at 90% 10%, rgba(165,107,60,0.1), transparent 30%)',
      overflow: 'hidden',
    }}
  >
    <div style={{position: 'absolute', inset: 22, border: `3px double ${PALETTE.steel}`}} />
    <div style={{position: 'absolute', inset: 30, border: `1px solid ${PALETTE.copper}55`}} />
    <header style={{position: 'absolute', left: 64, right: 64, top: 44, height: 104, display: 'flex', alignItems: 'center', gap: 24, borderBottom: `3px solid ${PALETTE.copper}`}}>
      <div style={{width: 76, height: 76, border: `3px solid ${PALETTE.steel}`, borderRadius: 8, rotate: '-3deg', display: 'grid', placeItems: 'center', backgroundColor: PALETTE.card}}>
        <FeatherPen size={30} color={PALETTE.steel} />
      </div>
      <h1 className="font-animation-title" style={{fontSize: 42, lineHeight: 1.1, margin: 0, fontWeight: 800, color: PALETTE.ink}}>
        {title}
      </h1>
      <div style={{marginLeft: 'auto', textAlign: 'right'}}>
        <div style={{fontSize: 16, fontWeight: 700, letterSpacing: 4, color: PALETTE.muted}}>STEEL-INK TREATY DESK · 三国法</div>
        <div style={{fontSize: 18, color: PALETTE.muted, marginTop: 6}}>条约法 · {DESK_CODE[code]}</div>
      </div>
    </header>
    <div style={{position: 'absolute', left: 66, top: 210, width: 104, height: 640, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40}}>
      {[0, 1, 2, 3, 4, 5].map((index) => {
        const active = index === station;
        return (
          <div
            key={index}
            style={{
              width: 66,
              height: 66,
              border: `2px solid ${active ? PALETTE.copper : PALETTE.line}`,
              borderRadius: 8,
              rotate: active ? '0deg' : '2deg',
              backgroundColor: active ? PALETTE.copper : PALETTE.card,
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <span className="font-animation-mono" style={{fontSize: 18, fontWeight: 700, color: active ? PALETTE.card : PALETTE.muted}}>{String(index + 1).padStart(2, '0')}</span>
          </div>
        );
      })}
    </div>
    <main style={{position: 'absolute', left: 210, right: 64, top: 190, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const InkTag = ({color, text}: {readonly color: string; readonly text: string}) => (
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

const WaxSeal = ({delay, frame, text, color = PALETTE.crimson}: {readonly delay: number; readonly frame: number; readonly text: string; readonly color?: string}) => (
  <span
    style={{
      ...enter(frame, delay, 8),
      display: 'inline-block',
      border: `3px solid ${color}`,
      borderRadius: 8,
      color,
      padding: '8px 20px',
      fontSize: 23,
      fontWeight: 800,
      letterSpacing: 2,
      rotate: '-4deg',
      backgroundColor: PALETTE.card,
    }}
  >
    {text}
  </span>
);

export const ConclusionElementsScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="element-subject" data-final-knowledge="element-full-powers" data-final-knowledge="element-consent" data-final-knowledge="element-jus-cogens" */
  const frame = useCurrentFrame();
  return (
    <TreatyShell code={0} station={0} title="条约成立的实质要件">
      <div
        data-layout="four-element-registry-sheet"
        data-visual-anchor="typographic-sequence"
        data-visual-grammar="four-elements-file-down-the-registry-sheet,five-exempt-offices-are-principals-only"
        data-text-treatments="label-block,thin-underline,soft-highlight"
        data-focal-rule="full-powers-exempt-only-for-principal-officeholders"
        data-focal-channels="contrast,enclosure,locator"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{display: 'flex', flexDirection: 'column', gap: 34, marginTop: 40}}>
          <div
            data-final-knowledge="element-subject"
            style={{...enterX(frame, 14, 40), borderLeft: `10px solid ${PALETTE.steel}`, backgroundColor: PALETTE.card, padding: '24px 28px', fontSize: 25, fontWeight: 700}}
          >
            <InkTag color={PALETTE.steel} text="要件一 · 主体" />
            <span style={{marginLeft: 16}}>国际法主体 —— 跨国公司等不是缔约主体</span>
          </div>
          <div
            data-final-knowledge="element-full-powers"
            style={{...enterX(frame, 48, 40), borderLeft: `10px solid ${PALETTE.copper}`, backgroundColor: PALETTE.card, padding: '24px 28px', fontSize: 24, lineHeight: 1.7}}
          >
            <InkTag color={PALETTE.copper} text="要件二 · 缔约代表" />
            <div style={{marginTop: 10}}>
              原则须有缔约权并出示
              <Under color={PALETTE.copper}>全权证书</Under>
              ；五类人
              <Ink color={PALETTE.copperSoft}>无须出具</Ink>
              ：国家元首、政府首脑、外交部长、使馆馆长、派驻国际组织或会议的代表 ——
              <Ink color={PALETTE.crimsonSoft}>仅限正职</Ink>
            </div>
          </div>
          <div
            data-final-knowledge="element-consent"
            style={{...enterX(frame, 82, 40), borderLeft: `10px solid ${PALETTE.steel}`, backgroundColor: PALETTE.card, padding: '24px 28px', fontSize: 25, fontWeight: 700}}
          >
            <InkTag color={PALETTE.steel} text="要件三 · 意思表示" />
            <span style={{marginLeft: 16}}>
              自由同意；错误、诈欺、贿赂、强迫 →
              <Ink color={PALETTE.crimsonSoft}>条约无效</Ink>
            </span>
          </div>
          <div
            data-final-knowledge="element-jus-cogens"
            style={{...enterX(frame, 116, 40), borderLeft: `10px solid ${PALETTE.crimson}`, backgroundColor: 'rgba(169,58,70,0.06)', padding: '24px 28px', fontSize: 24, lineHeight: 1.7}}
          >
            <InkTag color={PALETTE.crimson} text="要件四 · 内容" />
            <div style={{marginTop: 10}}>
              不违反国际
              <Under color={PALETTE.crimson}>强行法</Under>
              ；违反者无效但
              <Ink color={PALETTE.crimsonSoft}>并非均自始无效</Ink>
              ：缔结时即抵触 → 自始无效；缔结后新强行规则产生 → 失效
            </div>
          </div>
        </div>
        <div style={{...enter(frame, 156), marginTop: 72, display: 'flex', justifyContent: 'center', gap: 40, whiteSpace: 'nowrap'}}>
          <WaxSeal delay={156} frame={frame} color={PALETTE.steel} text="书面与否不影响条约效力" />
          <WaxSeal delay={176} frame={frame} color={PALETTE.copper} text="批准是国家的权利而非义务" />
        </div>
      </div>
    </TreatyShell>
  );
};

export const ConclusionProcedureScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="procedure-new-treaty" data-final-knowledge="procedure-join-treaty" data-final-knowledge="important-category" data-final-knowledge="procedure-priority" */
  const frame = useCurrentFrame();
  return (
    <TreatyShell code={1} station={1} title="缔约程序：谁决定、谁来签">
      <div
        data-layout="decision-signature-matrix"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="important-and-ordinary-treaties-split-the-decision-desk,signatures-shift-between-president-premier-and-minister"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="important-treaties-need-standing-committee-decision"
        data-focal-channels="contrast,spatial,enclosure"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{display: 'flex', gap: 24, marginTop: 16}}>
          <div
            style={{...enter(frame, 14), flex: 1.15, border: `3px solid ${PALETTE.crimson}`, borderTop: `14px solid ${PALETTE.crimson}`, backgroundColor: PALETTE.card, padding: '20px 28px'}}
          >
            <div data-final-knowledge="procedure-new-treaty" style={{fontSize: 26, fontWeight: 800, color: PALETTE.crimson}}>缔结"新"条约</div>
            <div style={{marginTop: 16, display: 'flex', flexDirection: 'column', gap: 14, fontSize: 23, lineHeight: 1.5}}>
              <div style={{...enter(frame, 48), borderLeft: `8px solid ${PALETTE.steel}`, padding: '8px 16px', backgroundColor: 'rgba(46,94,140,0.07)'}}>
                <InkTag color={PALETTE.steel} text="签署" />
                <span style={{marginLeft: 12}}>国内程序：无</span>
              </div>
              <div style={{...enter(frame, 72), borderLeft: `8px solid ${PALETTE.crimson}`, padding: '8px 16px', backgroundColor: 'rgba(169,58,70,0.07)'}}>
                <InkTag color={PALETTE.crimson} text="批准 · 重要类" />
                <div style={{marginTop: 6}}>
                  <Ink color={PALETTE.crimsonSoft}>人大常委会决定</Ink>
                  ，
                  <Under color={PALETTE.crimson}>国家主席</Under>
                  签批准书
                </div>
              </div>
              <div style={{...enter(frame, 96), borderLeft: `8px solid ${PALETTE.steel}`, padding: '8px 16px', backgroundColor: 'rgba(46,94,140,0.07)'}}>
                <InkTag color={PALETTE.steel} text="核准 · 非重要类" />
                <div style={{marginTop: 6}}>
                  <Ink color={PALETTE.steelSoft}>国务院决定</Ink>
                  ，
                  <Under color={PALETTE.steel}>总理或外长</Under>
                  签核准书
                </div>
              </div>
            </div>
          </div>
          <div
            style={{...enter(frame, 44), flex: 1, border: `3px solid ${PALETTE.steel}`, borderTop: `14px solid ${PALETTE.steel}`, backgroundColor: PALETTE.card, padding: '20px 28px'}}
          >
            <div data-final-knowledge="procedure-join-treaty" style={{fontSize: 26, fontWeight: 800, color: PALETTE.steel}}>进入"老"条约</div>
            <div style={{marginTop: 16, display: 'flex', flexDirection: 'column', gap: 14, fontSize: 23, lineHeight: 1.5}}>
              <div style={{...enter(frame, 78), borderLeft: `8px solid ${PALETTE.crimson}`, padding: '8px 16px', backgroundColor: 'rgba(169,58,70,0.07)'}}>
                <InkTag color={PALETTE.crimson} text="加入 · 重要类" />
                <div style={{marginTop: 6}}>
                  <Ink color={PALETTE.crimsonSoft}>人大常委会决定</Ink>
                  ，
                  <Under color={PALETTE.crimson}>外长</Under>
                  签加入书
                </div>
              </div>
              <div style={{...enter(frame, 102), borderLeft: `8px solid ${PALETTE.steel}`, padding: '8px 16px', backgroundColor: 'rgba(46,94,140,0.07)'}}>
                <InkTag color={PALETTE.steel} text="加入 · 非重要类" />
                <div style={{marginTop: 6}}>
                  <Ink color={PALETTE.steelSoft}>国务院决定</Ink>
                  ，
                  <Under color={PALETTE.steel}>外长</Under>
                  签
                </div>
              </div>
              <div style={{...enter(frame, 126), borderLeft: `8px solid ${PALETTE.steel}`, padding: '8px 16px', backgroundColor: 'rgba(46,94,140,0.07)'}}>
                <InkTag color={PALETTE.steel} text="接受" />
                <div style={{marginTop: 6}}>
                  <Ink color={PALETTE.steelSoft}>国务院决定</Ink>
                  ，
                  <Under color={PALETTE.steel}>外长</Under>
                  签接受书
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-final-knowledge="important-category"
          style={{...enter(frame, 156), marginTop: 24, border: `3px solid ${PALETTE.copper}`, backgroundColor: PALETTE.copperSoft, padding: '16px 28px', fontSize: 23, fontWeight: 700, lineHeight: 1.55}}
        >
          "重要类"口诀：
          <Ink color="rgba(165,107,60,0.28)">和好领界法不同，引渡协助要批准</Ink>
          （友好合作与和平条约 · 领土划界 · 司法协助与引渡 · 与我国法律不同规定的 · 议定或须经批准的）
        </div>
        <div
          data-final-knowledge="procedure-priority"
          style={{...enter(frame, 186), marginTop: 18, border: `2px dashed ${PALETTE.steel}`, backgroundColor: 'rgba(46,94,140,0.05)', padding: '14px 28px', fontSize: 22, fontWeight: 700, display: 'flex', gap: 14, alignItems: 'center', whiteSpace: 'nowrap'}}
        >
          <TriangleAlert size={22} color={PALETTE.steel} />
          接受拘束方式：先看条约本身规定，无规定从国内法；条约规定签署即拘束的，不得以须经批准为由拒绝履行
        </div>
      </div>
    </TreatyShell>
  );
};

export const RegistrationReservationScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="registration-rule" data-final-knowledge="reservation-timing" data-final-knowledge="reservation-four-cases" data-final-knowledge="reservation-pair-rules" */
  const frame = useCurrentFrame();
  const cases = [
    {text: '明文允许保留的条款', rule: '无须接受 · 自然生效', color: PALETTE.steel},
    {text: '谈判国数目有限且涉及宗旨', rule: '全体接受才能生效', color: PALETTE.crimson},
    {text: '国际组织章程', rule: '有权机关接受生效', color: PALETTE.copper},
  ];
  return (
    <TreatyShell code={2} station={2} title="条约登记与条约的保留">
        <div
          data-layout="registry-strip-with-reservation-fork"
          data-visual-anchor="document-fork"
          data-visual-grammar="four-reservation-cases-yield-four-effects,pairwise-rules-split-reserving-opposing-and-accepting-states"
          data-text-treatments="label-block,soft-highlight,thin-underline"
          data-focal-rule="reservation-timing-bound-to-own-entry-into-force"
          data-focal-channels="contrast,enclosure,spatial"
          style={{position: 'absolute', inset: 0}}
        >
        <div
          data-final-knowledge="registration-rule"
          style={{...enter(frame, 14), position: 'absolute', left: 0, top: 12, width: 1646, height: 88, border: `2px solid ${PALETTE.line}`, backgroundColor: PALETTE.card, display: 'flex', alignItems: 'center', gap: 34, padding: '0 30px', fontSize: 23, fontWeight: 700}}
        >
          <Library size={26} color={PALETTE.steel} />
          <span>登记机构：联合国秘书处</span>
          <span>
            未登记
            <Ink color={PALETTE.steelSoft}>不影响生效</Ink>
            ，只影响
            <Under color={PALETTE.crimson}>联合国机关援引</Under>
            ；非联合国机构援引不受限
          </span>
        </div>
        <div
          data-final-knowledge="reservation-timing"
          style={{...enter(frame, 48), position: 'absolute', left: 0, top: 118, width: 1646, height: 84, border: `3px solid ${PALETTE.copper}`, backgroundColor: PALETTE.copperSoft, display: 'flex', alignItems: 'center', gap: 20, padding: '0 30px', fontSize: 23, fontWeight: 700}}
        >
          <Stamp size={24} color={PALETTE.copper} />
          保留 = 单方声明；只能在条约
          <Under color={PALETTE.copper}>尚未对本国生效时</Under>
          作出（条约本身可已生效或未生效）
        </div>
        <div style={{position: 'absolute', left: 0, top: 226, width: 1010}}>
          <div data-final-knowledge="reservation-four-cases" style={{display: 'flex', flexDirection: 'column', gap: 16}}>
            {cases.map((item, index) => (
              <div key={item.text} style={{...enterX(frame, 84 + index * 20, 40), display: 'flex', alignItems: 'center', gap: 16, borderLeft: `10px solid ${item.color}`, backgroundColor: PALETTE.card, padding: '13px 20px'}}>
                <span style={{flex: 1.1, fontSize: 22, fontWeight: 800, color: item.color}}>{item.text}</span>
                <span style={{flex: 1, fontSize: 22, fontWeight: 700}}>{item.rule}</span>
              </div>
            ))}
          </div>
        </div>
        <div
          data-final-knowledge="reservation-pair-rules"
          style={{...enter(frame, 152), position: 'absolute', left: 1064, top: 226, width: 582, height: 274, border: `3px solid ${PALETTE.steel}`, backgroundColor: 'rgba(46,94,140,0.06)', padding: '16px 24px', fontSize: 21, lineHeight: 1.62}}
        >
          <div style={{fontSize: 23, fontWeight: 800, color: PALETTE.steel}}>其他情形 · 两两之间</div>
          <div style={{marginTop: 10}}>
            保留国—接受国：按
            <Under color={PALETTE.steel}>保留范围改变条款</Under>
          </div>
          <div style={{marginTop: 8}}>
            保留国—反对国：保留
            <Ink color={PALETTE.steelSoft}>所涉规定视为不存在</Ink>
            ，其他条款正常适用
          </div>
          <div style={{marginTop: 8}}>
            接受国—反对国：适用
            <Under color={PALETTE.steel}>条约本身规定</Under>
          </div>
        </div>
        <div style={{...enter(frame, 200), position: 'absolute', left: 0, top: 536, width: 1646, height: 54, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(169,58,70,0.08)', borderTop: `3px solid ${PALETTE.crimson}`, fontSize: 23, fontWeight: 800, color: PALETTE.crimson, whiteSpace: 'nowrap'}}>
          条约规定禁止保留的条款不得保留；"须全体适用" ≠ 不允许保留，而是须全体接受才生效
        </div>
        </div>
      </TreatyShell>
  );
};

export const TreatyEffectScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="pacta-direct-apply" data-final-knowledge="pacta-transform-apply" data-final-knowledge="third-state-rights" data-final-knowledge="third-state-duties" */
  const frame = useCurrentFrame();
  return (
    <TreatyShell code={3} station={3} title="条约的效力：必守与第三国">
      <div
        data-layout="pacta-sunta-columns-with-third-state-strip"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="direct-and-transformed-apply-split-the-pacta-sunta-duty,third-state-rights-need-no-objection-duties-need-writing"
        data-text-treatments="label-block,thin-underline,soft-highlight"
        data-focal-rule="third-state-obligations-need-written-express-consent"
        data-focal-channels="contrast,enclosure,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{display: 'flex', gap: 24, marginTop: 14}}>
          <div
            data-final-knowledge="pacta-direct-apply"
            style={{...enter(frame, 14), flex: 1, border: `3px solid ${PALETTE.steel}`, borderTop: `14px solid ${PALETTE.steel}`, backgroundColor: PALETTE.card, padding: '30px 30px', fontSize: 25, lineHeight: 1.7}}
          >
            <div style={{fontSize: 26, fontWeight: 800, color: PALETTE.steel}}>直接适用</div>
            <div style={{marginTop: 12}}>
              "必守"只要求冲突时保证条约
              <Under color={PALETTE.steel}>优先适用</Under>
            </div>
            <div style={{marginTop: 12, fontSize: 21, color: PALETTE.muted}}>缔约国仍有权制定与条约冲突的国内法</div>
          </div>
          <div
            data-final-knowledge="pacta-transform-apply"
            style={{...enter(frame, 40), flex: 1, border: `3px solid ${PALETTE.copper}`, borderTop: `14px solid ${PALETTE.copper}`, backgroundColor: PALETTE.card, padding: '30px 30px', fontSize: 25, lineHeight: 1.7}}
          >
            <div style={{fontSize: 26, fontWeight: 800, color: PALETTE.copper}}>转化适用</div>
            <div style={{marginTop: 12}}>
              "必守"要求转化后的国内法与条约内容
              <Under color={PALETTE.copper}>一致</Under>
            </div>
            <div style={{marginTop: 12, fontSize: 21, color: PALETTE.muted}}>如何适用由缔约国自行决定 · 根本违约/情势变约可终止</div>
          </div>
        </div>
        <div style={{display: 'flex', gap: 24, marginTop: 44}}>
          <div
            data-final-knowledge="third-state-duties"
            style={{...enter(frame, 92), flex: 1, border: `3px solid ${PALETTE.crimson}`, backgroundColor: 'rgba(169,58,70,0.07)', padding: '24px 30px', fontSize: 24, lineHeight: 1.7}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.crimson}}>为第三国设定义务</div>
            <div style={{marginTop: 10}}>
              须第三国
              <Ink color={PALETTE.crimsonSoft}>书面 + 明示接受</Ink>
              才有效
            </div>
          </div>
          <div
            data-final-knowledge="third-state-rights"
            style={{...enter(frame, 118), flex: 1, border: `3px solid ${PALETTE.steel}`, backgroundColor: 'rgba(46,94,140,0.07)', padding: '24px 30px', fontSize: 24, lineHeight: 1.7}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.steel}}>为第三国设定权利</div>
            <div style={{marginTop: 10}}>
              第三国
              <Ink color={PALETTE.steelSoft}>不反对即有效</Ink>
              ；取消权利义务原则上须经第三国同意
            </div>
          </div>
        </div>
        <div style={{...enter(frame, 152), marginTop: 76, display: 'flex', justifyContent: 'center', whiteSpace: 'nowrap'}}>
          <WaxSeal delay={152} frame={frame} color={PALETTE.copper} text="条约原则上适用于缔约国全部领土" />
        </div>
      </div>
    </TreatyShell>
  );
};

export const InterpretationScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="interpretation-authoritative-text" data-final-knowledge="interpretation-rules" */
  const frame = useCurrentFrame();
  const rules = [
    {text: '有效性解释', detail: '上下文与通常含义 · 目的与宗旨 · 善意解释', color: PALETTE.steel},
    {text: '第三方解释', detail: '秉承中立立场', color: PALETTE.copper},
    {text: '缔约国解释', detail: '允许"吃亏"，禁止"占便宜"', color: PALETTE.crimson},
  ];
  return (
    <TreatyShell code={4} station={4} title="条约的解释：只考善意解释">
      <div
        data-layout="three-rules-interpretation-board"
        data-visual-anchor="typographic-sequence"
        data-visual-grammar="three-interpreters-take-three-stands,authoritative-text-gates-all-reading"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="only-authentic-texts-interpret-the-treaty"
        data-focal-channels="contrast,enclosure,locator"
        style={{position: 'absolute', inset: 0}}
      >
        <div
          data-final-knowledge="interpretation-authoritative-text"
          style={{...enter(frame, 14), marginTop: 22, border: `3px solid ${PALETTE.copper}`, backgroundColor: PALETTE.copperSoft, padding: '22px 30px', fontSize: 26, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 18}}
        >
          <BookOpen size={30} color={PALETTE.copper} />
          两种以上文字文本：只能以
          <Ink color="rgba(165,107,60,0.3)">作准文本</Ink>
          解释
        </div>
        <div data-final-knowledge="interpretation-rules" style={{display: 'flex', flexDirection: 'column', gap: 46, marginTop: 60}}>
          {rules.map((rule, index) => (
            <div key={rule.text} style={{...enterX(frame, 56 + index * 26, 44), display: 'flex', alignItems: 'center', gap: 26, borderLeft: `10px solid ${rule.color}`, backgroundColor: PALETTE.card, padding: '30px 30px'}}>
              <span style={{width: 200, fontSize: 27, fontWeight: 800, color: rule.color}}>{rule.text}</span>
              <span style={{fontSize: 26, fontWeight: 700}}>{rule.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </TreatyShell>
  );
};

export const ConflictAmendmentScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="conflict-succession-rule" data-final-knowledge="amendment-binding-scope" data-final-knowledge="amendment-new-member" data-final-knowledge="conflict-vs-amendment" */
  const frame = useCurrentFrame();
  return (
    <TreatyShell code={5} station={5} title="条约的冲突与多边条约的修正">
      <div
        data-layout="conflict-amendment-twin-boards"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="later-treaty-replaces-only-when-parties-grow,amendment-binds-only-its-acceptors"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="two-treaties-conflict-one-treaty-many-texts-amendment"
        data-focal-channels="contrast,enclosure,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{display: 'flex', gap: 24, marginTop: 16}}>
          <div
            data-final-knowledge="conflict-succession-rule"
            style={{...enter(frame, 14), flex: 1, border: `3px solid ${PALETTE.steel}`, borderTop: `14px solid ${PALETTE.steel}`, backgroundColor: PALETTE.card, padding: '20px 28px', fontSize: 23, lineHeight: 1.65}}
          >
            <div style={{fontSize: 26, fontWeight: 800, color: PALETTE.steel}}>条约冲突（两个以上条约）</div>
            <div style={{marginTop: 14}}>
              先适用
              <Under color={PALETTE.steel}>条约本身的有效规定</Under>
            </div>
            <div style={{marginTop: 12}}>
              先后两条约当事国不完全相同时：只有后约当事国
              <Ink color={PALETTE.steelSoft}>≥ 先约</Ink>
              ，后约取代先约的规定才
              <Under color={PALETTE.steel}>有效</Under>
            </div>
            <div style={{marginTop: 12, fontSize: 21, color: PALETTE.muted}}>与联合国宪章义务冲突时，宪章义务优先</div>
          </div>
          <div
            style={{...enter(frame, 44), flex: 1, border: `3px solid ${PALETTE.copper}`, borderTop: `14px solid ${PALETTE.copper}`, backgroundColor: PALETTE.card, padding: '20px 28px', fontSize: 23, lineHeight: 1.65}}
          >
            <div data-final-knowledge="amendment-binding-scope" style={{fontSize: 26, fontWeight: 800, color: PALETTE.copper}}>多边条约修正（一个条约多文本）</div>
            <div style={{marginTop: 14}}>
              修正本只约束
              <Under color={PALETTE.copper}>接受修正本</Under>
              的成员
            </div>
            <div data-final-knowledge="amendment-new-member" style={{marginTop: 12}}>
              新加入国可
              <Ink color={PALETTE.copperSoft}>选择适用文本</Ink>
              ；无意思表示 → 视为接受修正本
            </div>
            <div style={{marginTop: 12}}>
              均接受 → 适用
              <Under color={PALETTE.copper}>修正本</Under>
              ；接受与不接受之间 → 适用
              <Ink color={PALETTE.steelSoft}>原条约</Ink>
            </div>
          </div>
        </div>
        <div
          data-final-knowledge="conflict-vs-amendment"
          style={{...enter(frame, 100), marginTop: 28, border: `3px solid ${PALETTE.crimson}`, backgroundColor: 'rgba(169,58,70,0.07)', padding: '18px 30px', fontSize: 24, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 44, whiteSpace: 'nowrap'}}
        >
          <span>
            涉及
            <Ink color={PALETTE.steelSoft}>两个以上条约</Ink>
            → 条约冲突
          </span>
          <span>
            涉及
            <Ink color={PALETTE.copperSoft}>一个条约两个以上文本</Ink>
            → 条约修正
          </span>
        </div>
        <div style={{...enter(frame, 140), marginTop: 24, display: 'flex', justifyContent: 'center'}}>
          <WaxSeal delay={140} frame={frame} color={PALETTE.steel} text="登记：联合国秘书处 · 未登记只影响联合国机关援引" />
        </div>
      </div>
    </TreatyShell>
  );
};

export const LawOfTreaties = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: PALETTE.desk, overflow: 'hidden'}}
  >
    <TimelineSequence name="01-conclusion-elements" {...SCENES.conclusionElements}>
      <ConclusionElementsScene />
    </TimelineSequence>
    <TimelineSequence name="02-conclusion-procedure" {...SCENES.conclusionProcedure}>
      <ConclusionProcedureScene />
    </TimelineSequence>
    <TimelineSequence name="03-registration-reservation" {...SCENES.registrationReservation}>
      <RegistrationReservationScene />
    </TimelineSequence>
    <TimelineSequence name="04-treaty-effect" {...SCENES.treatyEffect}>
      <TreatyEffectScene />
    </TimelineSequence>
    <TimelineSequence name="05-interpretation" {...SCENES.interpretation}>
      <InterpretationScene />
    </TimelineSequence>
    <TimelineSequence name="06-conflict-amendment" {...SCENES.conflictAmendment}>
      <ConflictAmendmentScene />
    </TimelineSequence>
  </AbsoluteFill>
);
