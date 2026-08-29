import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {Flame, Handshake, Radio, Scale, Siren} from 'lucide-react';
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

const BULLETIN_CODE = ['壹', '贰', '叁', '肆'];

const BulletinShell = ({
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
      backgroundColor: PALETTE.field,
      backgroundImage:
        'repeating-linear-gradient(0deg, rgba(239,234,216,0.03) 0 1px, transparent 1px 48px), radial-gradient(circle at 12% 0%, rgba(194,74,56,0.12), transparent 30%)',
      overflow: 'hidden',
    }}
  >
    <div style={{position: 'absolute', inset: 22, border: `2px solid ${PALETTE.khaki}`}} />
    <div style={{position: 'absolute', inset: 28, border: '1px dashed rgba(239,234,216,0.3)'}} />
    <header style={{position: 'absolute', left: 64, right: 64, top: 44, height: 104, display: 'flex', alignItems: 'center', gap: 24, borderBottom: `5px double ${PALETTE.khaki}`}}>
      <div style={{width: 74, height: 74, border: `3px solid ${PALETTE.censor}`, backgroundColor: PALETTE.panel, display: 'grid', placeItems: 'center'}}>
        <Radio size={30} color={PALETTE.censor} />
      </div>
      <h1 className="font-animation-title" style={{fontSize: 42, lineHeight: 1.1, margin: 0, fontWeight: 800, color: PALETTE.bulletin}}>
        {title}
      </h1>
      <div style={{marginLeft: 'auto', textAlign: 'right'}}>
        <div style={{fontSize: 16, fontWeight: 700, letterSpacing: 4, color: PALETTE.muted}}>FIELD BULLETIN · 三国法</div>
        <div style={{fontSize: 18, color: PALETTE.muted, marginTop: 6}}>战争与武装冲突 · {BULLETIN_CODE[code]}</div>
      </div>
    </header>
    <div style={{position: 'absolute', left: 66, top: 210, width: 104, height: 640, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40}}>
      {[0, 1, 2, 3].map((index) => {
        const active = index === station;
        return (
          <div
            key={index}
            style={{
              width: 68,
              height: 68,
              border: `2px solid ${active ? PALETTE.censor : PALETTE.line}`,
              backgroundColor: active ? PALETTE.censor : PALETTE.panel,
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <span className="font-animation-mono" style={{fontSize: 18, fontWeight: 700, color: active ? PALETTE.bulletin : PALETTE.muted}}>{String(index + 1).padStart(2, '0')}</span>
          </div>
        );
      })}
    </div>
    <main style={{position: 'absolute', left: 210, right: 64, top: 190, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Wire = ({color, text}: {readonly color: string; readonly text: string}) => (
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

const CensorStamp = ({delay, frame, text, color = PALETTE.censor}: {readonly delay: number; readonly frame: number; readonly text: string; readonly color?: string}) => (
  <span
    style={{
      ...enter(frame, delay, 10),
      display: 'inline-block',
      border: `3px solid ${color}`,
      color,
      padding: '8px 22px',
      fontSize: 23,
      fontWeight: 800,
      letterSpacing: 4,
      rotate: '-3deg',
      backgroundColor: 'rgba(46,42,34,0.7)',
    }}
  >
    {text}
  </span>
);

export const WarDefinitionScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="intent-marker" data-final-knowledge="neutrality-duties" data-final-knowledge="neutrality-no-support" */
  const frame = useCurrentFrame();
  return (
    <BulletinShell code={0} station={0} title="战争与武装冲突：意思表示为标志">
      <div
        data-layout="intent-marker-board-with-neutrality-strip"
        data-visual-anchor="boundary"
        data-visual-grammar="war-start-and-end-hang-on-declarations,neutrality-owes-forbearance-prevention-tolerance"
        data-text-treatments="label-block,thin-underline,soft-highlight"
        data-focal-rule="armed-conflict-itself-is-not-the-marker"
        data-focal-channels="contrast,enclosure,locator"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{display: 'flex', gap: 26, marginTop: 30}}>
          <div
            data-final-knowledge="intent-marker"
            style={{...enter(frame, 14), flex: 1, border: `3px solid ${PALETTE.khaki}`, borderTop: `14px solid ${PALETTE.khaki}`, backgroundColor: PALETTE.panel, padding: '34px 32px', fontSize: 24, lineHeight: 1.8}}
          >
            <div style={{fontSize: 27, fontWeight: 800, color: PALETTE.khaki}}>战争开始</div>
            <div style={{marginTop: 14}}>
              交战意思 = <Ink color={PALETTE.khakiSoft}>宣战</Ink> 或
              <Under color={PALETTE.khaki}>第三方的承认</Under>
            </div>
            <div style={{marginTop: 26, fontSize: 27, fontWeight: 800, color: PALETTE.olive}}>战争结束</div>
            <div style={{marginTop: 14}}>
              缔结
              <Ink color={PALETTE.oliveSoft}>和平条约</Ink>
              或发表结束的
              <Under color={PALETTE.olive}>单方/联合声明</Under>
            </div>
            <div style={{marginTop: 24, fontSize: 21, color: PALETTE.muted}}>意思表示不要求书面形式；仅"武装冲突"不构成战争标志</div>
          </div>
          <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 26}}>
            <div
              data-final-knowledge="neutrality-duties"
              style={{...enter(frame, 50), border: `3px solid ${PALETTE.olive}`, backgroundColor: 'rgba(122,132,80,0.1)', padding: '30px 32px'}}
            >
              <div style={{fontSize: 26, fontWeight: 800, color: PALETTE.olive, display: 'flex', alignItems: 'center', gap: 12}}>
                <Handshake size={26} color={PALETTE.olive} />
                战时中立国三义务
              </div>
              <div style={{marginTop: 16, fontSize: 25, fontWeight: 800, letterSpacing: 6}}>
                不作为 · 防止 · 容忍
              </div>
            </div>
            <div
              data-final-knowledge="neutrality-no-support"
              style={{...enter(frame, 86), border: `3px solid ${PALETTE.censor}`, backgroundColor: 'rgba(194,74,56,0.08)', padding: '30px 32px', fontSize: 23, lineHeight: 1.7}}
            >
              <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.censor, display: 'flex', alignItems: 'center', gap: 12}}>
                <Siren size={24} color={PALETTE.censor} />
                "不作为"的底线
              </div>
              <div style={{marginTop: 12}}>
                不得向交战国提供任何
                <Under color={PALETTE.censor}>军事或资金支持</Under>
                —— 哪怕对交战
                <Ink color={PALETTE.censorSoft}>双方同等</Ink>
                的支持也禁止
              </div>
            </div>
          </div>
        </div>
      </div>
    </BulletinShell>
  );
};

export const WarConsequencesScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="consequence-relations" data-final-knowledge="consequence-treaties" data-final-knowledge="consequence-trade" data-final-knowledge="consequence-property" data-final-knowledge="conflict-no-effect" */
  const frame = useCurrentFrame();
  return (
    <BulletinShell code={1} station={1} title="战争开始的法律后果">
      <div
        data-layout="four-consequence-bands-with-conflict-caveat"
        data-visual-anchor="flow-path"
        data-visual-grammar="four-consequence-bands-descend-from-relations-to-property,armed-conflict-yields-none-of-them"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="territory-treaties-survive-friendship-treaties-die"
        data-focal-channels="contrast,enclosure,locator"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{display: 'flex', flexDirection: 'column', gap: 22, marginTop: 20}}>
          <div
            data-final-knowledge="consequence-relations"
            style={{...enterX(frame, 14, 44), borderLeft: `10px solid ${PALETTE.khaki}`, backgroundColor: PALETTE.panel, padding: '18px 28px', fontSize: 23, fontWeight: 700}}
          >
            <Wire color={PALETTE.khaki} text="外交领事关系" />
            <span style={{marginLeft: 18}}>
              断绝；但使领馆与人员特权豁免持续
              <Under color={PALETTE.khaki}>合理时间</Under>
            </span>
          </div>
          <div
            data-final-knowledge="consequence-treaties"
            style={{...enterX(frame, 48, 44), border: `3px solid ${PALETTE.line}`, backgroundColor: PALETTE.panel, padding: '20px 30px', fontSize: 23, lineHeight: 1.7}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.bulletin}}>条约关系三分</div>
            <div style={{marginTop: 10, display: 'flex', gap: 18, flexWrap: 'wrap'}}>
              <span style={{border: `2px solid ${PALETTE.olive}`, backgroundColor: 'rgba(122,132,80,0.14)', padding: '8px 16px', fontSize: 22, fontWeight: 700}}>领土条约：继续有效</span>
              <span style={{border: `2px solid ${PALETTE.censor}`, backgroundColor: 'rgba(194,74,56,0.14)', padding: '8px 16px', fontSize: 22, fontWeight: 700}}>友好关系政治条约：废止</span>
              <span style={{border: `2px solid ${PALETTE.khaki}`, backgroundColor: 'rgba(180,155,98,0.14)', padding: '8px 16px', fontSize: 22, fontWeight: 700}}>其他条约：暂停适用</span>
            </div>
            <div style={{marginTop: 12, fontSize: 21, color: PALETTE.muted}}>多边条约有约定从约定，否则冲突条款暂停；战争规范条约开始适用</div>
          </div>
          <div
            data-final-knowledge="consequence-trade"
            style={{...enterX(frame, 82, 44), borderLeft: `10px solid ${PALETTE.censor}`, backgroundColor: PALETTE.panel, padding: '18px 28px', fontSize: 23, fontWeight: 700}}
          >
            <Wire color={PALETTE.censor} text="经贸往来" />
            <span style={{marginLeft: 18}}>禁止</span>
          </div>
          <div
            data-final-knowledge="consequence-property"
            style={{...enterX(frame, 116, 44), border: `3px solid ${PALETTE.line}`, backgroundColor: PALETTE.panel, padding: '20px 30px', fontSize: 23, lineHeight: 1.7}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.bulletin}}>敌产与敌国公民</div>
            <div style={{marginTop: 10}}>
              可没收的仅限敌国在本国境内的
              <Ink color={PALETTE.censorSoft}>公产</Ink>
              （使馆财产档案除外）；其他公产、私产只限制使用
              <Under color={PALETTE.khaki}>不得没收</Under>
              ；对敌国公民适用人道主义原则
            </div>
          </div>
        </div>
        <div
          data-final-knowledge="conflict-no-effect"
          style={{...enter(frame, 156), marginTop: 26, border: `3px dashed ${PALETTE.censor}`, backgroundColor: 'rgba(194,74,56,0.06)', padding: '18px 30px', fontSize: 24, fontWeight: 800, textAlign: 'center', whiteSpace: 'nowrap'}}
        >
          以上是"战争"开始的后果 —— 仅"武装冲突"不产生这些法律后果
        </div>
      </div>
    </BulletinShell>
  );
};

export const CombatLimitsScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="banned-weapons" data-final-knowledge="mine-exception" data-final-knowledge="three-prohibitions" data-final-knowledge="perfidy-rule" */
  const frame = useCurrentFrame();
  const weapons = ['极度残酷的武器', '毒气', '生化武器', '杀伤人员的地雷', '核武器'];
  return (
    <BulletinShell code={2} station={2} title="作战手段和方法的限制（海牙体系）">
      <div
        data-layout="weapons-grid-with-perfidy-strip"
        data-visual-anchor="typographic-sequence"
        data-visual-grammar="five-weapon-bans-line-the-ammunition-shelf,perfidy-banned-but-ruses-allowed"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="anti-personnel-mines-banned-vehicle-mines-allowed"
        data-focal-channels="contrast,enclosure,locator"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{display: 'flex', gap: 24, marginTop: 22}}>
          <div
            data-final-knowledge="banned-weapons"
            style={{...enter(frame, 14), flex: 1.3, border: `3px solid ${PALETTE.censor}`, borderTop: `14px solid ${PALETTE.censor}`, backgroundColor: PALETTE.panel, padding: '26px 30px'}}
          >
            <div style={{fontSize: 26, fontWeight: 800, color: PALETTE.censor, display: 'flex', alignItems: 'center', gap: 12}}>
              <Flame size={26} color={PALETTE.censor} />
              禁止的武器
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 18}}>
              {weapons.map((text, index) => (
                <span key={text} style={{...enter(frame, 46 + index * 12), border: `2px solid ${PALETTE.censor}`, padding: '10px 18px', fontSize: 22, fontWeight: 700, backgroundColor: 'rgba(194,74,56,0.1)'}}>{text}</span>
              ))}
            </div>
          </div>
          <div
            data-final-knowledge="mine-exception"
            style={{...enter(frame, 52), flex: 1, border: `3px solid ${PALETTE.khaki}`, backgroundColor: 'rgba(180,155,98,0.1)', padding: '26px 30px', fontSize: 23, lineHeight: 1.7}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.khaki}}>地雷的禁止范围</div>
            <div style={{marginTop: 12}}>
              禁止
              <Ink color={PALETTE.censorSoft}>杀伤人员的地雷</Ink>
              ；不禁止
              <Under color={PALETTE.khaki}>针对车辆的地雷</Under>
            </div>
          </div>
        </div>
        <div
          data-final-knowledge="three-prohibitions"
          style={{...enter(frame, 100), marginTop: 28, border: `3px solid ${PALETTE.line}`, backgroundColor: PALETTE.panel, padding: '24px 30px', fontSize: 23, lineHeight: 1.75}}
        >
          <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.bulletin}}>三类禁止的作战方法</div>
          <div style={{marginTop: 12}}>
            <Ink color={PALETTE.censorSoft}>不分皂白</Ink>
            （不区分对象）·
            <Ink color={PALETTE.censorSoft}>改变环境</Ink>
            ·
            <Ink color={PALETTE.censorSoft}>背信弃义</Ink>
            （假装谈判投降、假装伤病、假装平民、冒用联合国或非交战国标志）
          </div>
        </div>
        <div
          data-final-knowledge="perfidy-rule"
          style={{...enter(frame, 148), marginTop: 26, display: 'flex', justifyContent: 'center', gap: 26, alignItems: 'center', whiteSpace: 'nowrap'}}
        >
          <CensorStamp delay={148} frame={frame} text="背信弃义：禁止" />
          <CensorStamp delay={168} frame={frame} color={PALETTE.olive} text={'诈术（各种"假装"）：允许'} />
        </div>
      </div>
    </BulletinShell>
  );
};

export const GenevaIccScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="geneva-humanity" data-final-knowledge="pow-repatriation" data-final-knowledge="icc-four-points" data-final-knowledge="icc-crimes" data-final-knowledge="icc-jurisdiction" */
  const frame = useCurrentFrame();
  const crimes = ['灭绝种族罪', '战争罪', '危害人类罪', '侵略罪'];
  const bases = ['一方或多方是缔约国', '犯罪在缔约国境内实施', '被告是缔约国国民', '非缔约国的接受'];
  return (
    <BulletinShell code={3} station={3} title="日内瓦保护与国际刑事法院">
      <div
        data-layout="geneva-panel-with-icc-registry"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="geneva-shields-the-weak-icc-punishes-individuals,four-jurisdiction-bases-open-the-court-door"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="icc-punishes-war-criminals-not-all-international-criminals"
        data-focal-channels="contrast,enclosure,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{display: 'flex', gap: 24, marginTop: 22}}>
          <div
            data-final-knowledge="geneva-humanity"
            style={{...enter(frame, 14), flex: 1, border: `3px solid ${PALETTE.olive}`, borderTop: `14px solid ${PALETTE.olive}`, backgroundColor: PALETTE.panel, padding: '30px 32px', fontSize: 23, lineHeight: 1.75}}
          >
            <div style={{fontSize: 26, fontWeight: 800, color: PALETTE.olive, display: 'flex', alignItems: 'center', gap: 12}}>
              <Handshake size={26} color={PALETTE.olive} />
              日内瓦体系 · 保护弱者
            </div>
            <div style={{marginTop: 16}}>
              人道主义原则：不侵害人身与财产权利，不侮辱
              <Under color={PALETTE.olive}>人格尊严与宗教信仰</Under>
              —— 战时平时对平民、战俘都适用
            </div>
            <div data-final-knowledge="pow-repatriation" style={{...enter(frame, 60), marginTop: 20, border: `2px solid ${PALETTE.khaki}`, backgroundColor: 'rgba(180,155,98,0.1)', padding: '16px 20px', fontSize: 23, fontWeight: 800}}>
              战争/武装冲突结束 → 战俘
              <Ink color={PALETTE.khakiSoft}>立即释放并遣返，不得迟延</Ink>
            </div>
          </div>
          <div
            data-final-knowledge="icc-four-points"
            style={{...enter(frame, 48), flex: 1.25, border: `3px solid ${PALETTE.censor}`, borderTop: `14px solid ${PALETTE.censor}`, backgroundColor: PALETTE.panel, padding: '30px 32px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 26, fontWeight: 800, color: PALETTE.censor, display: 'flex', alignItems: 'center', gap: 12}}>
              <Scale size={26} color={PALETTE.censor} />
              国际刑事法院（海牙 · 常设独立）
            </div>
            <div data-final-knowledge="icc-crimes" style={{marginTop: 14}}>
              惩罚
              <Ink color={PALETTE.censorSoft}>战争罪犯</Ink>
              （个人 · 范围小于国际罪犯）：
              <div style={{display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 10}}>
                {crimes.map((text, index) => (
                  <span key={text} style={{...enter(frame, 92 + index * 12), border: `2px solid ${PALETTE.censor}`, padding: '8px 16px', fontSize: 21, fontWeight: 700, backgroundColor: 'rgba(194,74,56,0.1)'}}>{text}</span>
                ))}
              </div>
            </div>
            <div data-final-knowledge="icc-jurisdiction" style={{...enter(frame, 140), marginTop: 18, fontSize: 21, lineHeight: 1.6}}>
              管辖四依据：
              <Under color={PALETTE.censor}>缔约国一方 · 境内实施 · 被告国民 · 非缔约国接受</Under>
            </div>
          </div>
        </div>
        <div style={{...enter(frame, 190), marginTop: 30, display: 'flex', justifyContent: 'center', gap: 24, whiteSpace: 'nowrap'}}>
          <CensorStamp delay={190} frame={frame} color={PALETTE.olive} text="海牙体系：限制作战手段" />
          <CensorStamp delay={206} frame={frame} color={PALETTE.khaki} text="日内瓦体系：保护受难者" />
        </div>
      </div>
    </BulletinShell>
  );
};

export const WarArmedConflict = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: PALETTE.field, overflow: 'hidden'}}
  >
    <TimelineSequence name="01-war-definition" {...SCENES.warDefinition}>
      <WarDefinitionScene />
    </TimelineSequence>
    <TimelineSequence name="02-war-consequences" {...SCENES.warConsequences}>
      <WarConsequencesScene />
    </TimelineSequence>
    <TimelineSequence name="03-combat-limits" {...SCENES.combatLimits}>
      <CombatLimitsScene />
    </TimelineSequence>
    <TimelineSequence name="04-geneva-icc" {...SCENES.genevaIcc}>
      <GenevaIccScene />
    </TimelineSequence>
  </AbsoluteFill>
);
