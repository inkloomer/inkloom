import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {Building2, Crown, DoorClosed, Landmark, Mail, ScrollText, Shield, Stamp, UserX} from 'lucide-react';
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

const SEAL_CODE = ['壹', '贰', '叁', '肆', '伍', '陆'];

const ChanceryShell = ({
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
      backgroundColor: PALETTE.iris,
      backgroundImage:
        'repeating-linear-gradient(45deg, rgba(91,75,138,0.03) 0 3px, transparent 3px 30px), radial-gradient(circle at 8% 8%, rgba(138,61,98,0.08), transparent 30%)',
      overflow: 'hidden',
    }}
  >
    <div style={{position: 'absolute', inset: 22, border: `2px solid ${PALETTE.violet}`}} />
    <div style={{position: 'absolute', inset: 28, border: `1px solid ${PALETTE.plum}66`}} />
    <header style={{position: 'absolute', left: 64, right: 64, top: 44, height: 104, display: 'flex', alignItems: 'center', gap: 24, borderBottom: `4px solid ${PALETTE.violet}`}}>
      <div style={{width: 72, height: 72, border: `3px solid ${PALETTE.plum}`, borderRadius: '50% 50% 50% 0', display: 'grid', placeItems: 'center', backgroundColor: PALETTE.card, rotate: '-45deg'}}>
        <span style={{fontSize: 26, fontWeight: 800, color: PALETTE.plum, rotate: '45deg'}}>{SEAL_CODE[code]}</span>
      </div>
      <h1 className="font-animation-title" style={{fontSize: 42, lineHeight: 1.1, margin: 0, fontWeight: 800, color: PALETTE.ink}}>
        {title}
      </h1>
      <div style={{marginLeft: 'auto', textAlign: 'right'}}>
        <div style={{fontSize: 16, fontWeight: 700, letterSpacing: 4, color: PALETTE.muted}}>IRIS CHANCERY · 三国法</div>
        <div style={{fontSize: 18, color: PALETTE.muted, marginTop: 6}}>外交关系与领事关系法</div>
      </div>
    </header>
    <div style={{position: 'absolute', left: 66, top: 210, width: 104, height: 640, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40}}>
      {[0, 1, 2, 3, 4, 5].map((index) => {
        const active = index === station;
        return (
          <div
            key={index}
            style={{
              width: 58,
              height: 58,
              border: `2px solid ${active ? PALETTE.plum : PALETTE.line}`,
              borderRadius: '50% 50% 50% 0',
              rotate: '-45deg',
              backgroundColor: active ? PALETTE.plum : PALETTE.card,
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <span className="font-animation-mono" style={{fontSize: 17, fontWeight: 700, color: active ? PALETTE.card : PALETTE.muted, rotate: '45deg'}}>{String(index + 1).padStart(2, '0')}</span>
          </div>
        );
      })}
    </div>
    <main style={{position: 'absolute', left: 210, right: 64, top: 190, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Ribbon = ({color, text}: {readonly color: string; readonly text: string}) => (
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

const Wax = ({delay, frame, text, color = PALETTE.plum}: {readonly delay: number; readonly frame: number; readonly text: string; readonly color?: string}) => (
  <span
    style={{
      ...enter(frame, delay, 10),
      display: 'inline-block',
      border: `3px solid ${color}`,
      borderRadius: '50% 42% 50% 42%',
      color,
      padding: '14px 22px',
      fontSize: 22,
      fontWeight: 800,
      letterSpacing: 2,
      backgroundColor: PALETTE.card,
    }}
  >
    {text}
  </span>
);

export const MissionComparisonScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="embassy-row" data-final-knowledge="consulate-row" data-final-knowledge="outside-district-consent" */
  const frame = useCurrentFrame();
  const rows = [
    {label: '交涉对象', embassy: '接受国中央政府', consulate: '接受国相应地方政府'},
    {label: '职务范围', embassy: '不受限（全能）', consulate: '商务文化 · 侨民保护（非政治）'},
    {label: '工作地域', embassy: '接受国全境', consulate: '领馆辖区'},
    {label: '特权与豁免', embassy: '宽', consulate: '窄'},
  ];
  return (
    <ChanceryShell code={0} station={0} title="外交关系 VS 领事关系">
      <div
        data-layout="four-row-mission-comparison-ledger"
        data-visual-anchor="role-pair"
        data-visual-grammar="embassy-and-consulate-align-on-four-comparison-rows,district-work-needs-receiving-state-consent"
        data-text-treatments="label-block,thin-underline,soft-highlight"
        data-focal-rule="embassy-is-all-capable-consulate-is-district-bound"
        data-focal-channels="contrast,spatial,enclosure"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{display: 'flex', gap: 0, marginTop: 20}}>
          <div style={{width: 300, ...enter(frame, 14), fontSize: 24, fontWeight: 800, color: PALETTE.muted, display: 'flex', alignItems: 'flex-end', paddingBottom: 18}}>对比维度</div>
          <div style={{flex: 1, ...enter(frame, 28), fontSize: 30, fontWeight: 800, color: PALETTE.violet, display: 'flex', alignItems: 'center', gap: 12, paddingBottom: 14}}>
            <Landmark size={30} color={PALETTE.violet} />
            使馆 · 外交关系
          </div>
          <div style={{flex: 1, ...enter(frame, 44), fontSize: 30, fontWeight: 800, color: PALETTE.sage, display: 'flex', alignItems: 'center', gap: 12, paddingBottom: 14}}>
            <Building2 size={30} color={PALETTE.sage} />
            领馆 · 领事关系
          </div>
        </div>
        <div style={{marginTop: 30, display: 'flex', flexDirection: 'column', gap: 44}}>
          {rows.map((row, index) => (
            <div key={row.label} style={{display: 'flex', gap: 0, borderBottom: `2px solid ${PALETTE.line}`, paddingBottom: 26}}>
              <div data-final-knowledge={index === 0 ? 'embassy-row' : index === 1 ? 'consulate-row' : undefined} style={{width: 300, fontSize: 25, fontWeight: 800, color: PALETTE.plum, ...enter(frame, 70 + index * 20)}}>{row.label}</div>
              <div style={{flex: 1, fontSize: 26, fontWeight: 700, ...enter(frame, 82 + index * 20)}}>{row.embassy}</div>
              <div style={{flex: 1, fontSize: 26, fontWeight: 700, ...enter(frame, 94 + index * 20)}}>{row.consulate}</div>
            </div>
          ))}
        </div>
        <div
          data-final-knowledge="outside-district-consent"
          style={{...enter(frame, 176), marginTop: 52, border: `3px solid ${PALETTE.plum}`, backgroundColor: PALETTE.plumSoft, padding: '22px 28px', fontSize: 25, fontWeight: 700}}
        >
          <Under color={PALETTE.plum}>领馆和领事官员</Under>
          在领馆范围外从事公务活动，须经
          <Ink color="rgba(91,75,138,0.2)">接受国同意</Ink>
        </div>
      </div>
    </ChanceryShell>
  );
};

export const EnvoyStructureScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="envoy-levels" data-final-knowledge="envoy-same-duties" data-final-knowledge="central-organs" */
  const frame = useCurrentFrame();
  const levels = [
    {name: '大使馆', chief: '大使', target: '向国家元首派出', color: PALETTE.violet},
    {name: '公使馆', chief: '公使', target: '向国家元首派出', color: PALETTE.violet},
    {name: '代办处', chief: '代办', target: '向外交部长派出', color: PALETTE.plum},
  ];
  return (
    <ChanceryShell code={1} station={1} title="外交机关：使馆的三级与馆长">
      <div
        data-layout="three-envoy-crests-with-central-organs-strip"
        data-visual-anchor="concept-icon"
        data-tokens="Crown"
        data-visual-grammar="three-envoy-crests-rank-by-accredited-principal,central-organs-stay-behind-the-missions"
        data-text-treatments="label-block,thin-underline,soft-highlight"
        data-focal-rule="same-duties-different-courtesies"
        data-focal-channels="enclosure,contrast,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{display: 'flex', gap: 26, marginTop: 26}}>
          {levels.map((level, index) => (
            <div
              key={level.name}
              data-final-knowledge={index === 0 ? 'envoy-levels' : undefined}
              style={{...enter(frame, 20 + index * 24), flex: 1, border: `3px solid ${level.color}`, borderTop: `14px solid ${level.color}`, backgroundColor: PALETTE.card, padding: '56px 30px', textAlign: 'center'}}
            >
              <Crown size={44} color={level.color} />
              <div style={{fontSize: 36, fontWeight: 800, color: level.color, marginTop: 16}}>{level.name}</div>
              <div style={{marginTop: 18, fontSize: 26, fontWeight: 700}}>{level.chief}</div>
              <div style={{marginTop: 12, fontSize: 23, color: PALETTE.muted}}>{level.target}</div>
            </div>
          ))}
        </div>
        <div
          data-final-knowledge="envoy-same-duties"
          style={{...enter(frame, 116), marginTop: 56, border: `3px solid ${PALETTE.sage}`, backgroundColor: PALETTE.sageSoft, padding: '24px 30px', fontSize: 26, fontWeight: 800, textAlign: 'center'}}
        >
          三级使馆职务相同（
          <Ink color="rgba(78,125,107,0.22)">全能</Ink>
          ），礼遇不同 · 馆长缔结条约
          <Under color={PALETTE.sage}>无须出具全权证书</Under>
        </div>
        <div
          data-final-knowledge="central-organs"
          style={{...enter(frame, 150), marginTop: 40, border: `2px solid ${PALETTE.line}`, backgroundColor: PALETTE.card, padding: '22px 30px', fontSize: 24, lineHeight: 1.7}}
        >
          <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.violet}}>中央外交机关</div>
          <div style={{marginTop: 10}}>
            国家元首 · 政府 · 外交部门 —— 常驻使馆与
            <Under color={PALETTE.violet}>临时特别使团</Under>
            都属于外交代表机关；设立大使馆、公使馆、代办处均构成
            <Ink color={PALETTE.violetSoft}>国际法意义的承认</Ink>
          </div>
        </div>
      </div>
    </ChanceryShell>
  );
};

export const StaffProtocolScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="staff-classes" data-final-knowledge="persona-non-grata" data-final-knowledge="nomination-mnemonic" data-final-knowledge="duty-start-rules" */
  const frame = useCurrentFrame();
  const staff = [
    {name: '外交人员', members: '馆长、参赞、武官、外交秘书、随员', label: '不受欢迎', color: PALETTE.plum},
    {name: '行政人员', members: '会计、翻译等', label: '不被接受', color: PALETTE.violet},
    {name: '服务人员', members: '司机、厨师等', label: '不被接受', color: PALETTE.violet},
  ];
  return (
    <ChanceryShell code={2} station={2} title="人员的派遣、称谓与职务开始">
      <div
        data-layout="staff-class-table-with-nomination-gate"
        data-visual-anchor="typographic-sequence"
        data-visual-grammar="three-staff-classes-carry-two-verdict-labels,nomination-gate-guards-four-person-types"
        data-text-treatments="label-block,stamp,thin-underline"
        data-focal-rule="persona-non-grata-needs-no-reason"
        data-focal-channels="contrast,enclosure,locator"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{display: 'flex', flexDirection: 'column', gap: 16, marginTop: 16}}>
          {staff.map((row, index) => (
            <div
              key={row.name}
              data-final-knowledge={index === 0 ? 'staff-classes' : undefined}
              style={{...enterX(frame, 14 + index * 22, 44), display: 'flex', alignItems: 'center', gap: 20, borderLeft: `10px solid ${row.color}`, backgroundColor: PALETTE.card, padding: '14px 24px'}}
            >
              <span style={{width: 130, fontSize: 25, fontWeight: 800, color: row.color}}>{row.name}</span>
              <span style={{flex: 1, fontSize: 22}}>{row.members}</span>
              <span style={{border: `2px solid ${row.color}`, color: row.color, padding: '6px 16px', fontSize: 22, fontWeight: 800, backgroundColor: PALETTE.iris}}>{row.label}</span>
            </div>
          ))}
        </div>
        <div
          data-final-knowledge="persona-non-grata"
          style={{...enter(frame, 92), marginTop: 20, border: `3px solid ${PALETTE.plum}`, backgroundColor: PALETTE.plumSoft, padding: '16px 28px', fontSize: 23, lineHeight: 1.55, display: 'flex', alignItems: 'center', gap: 24}}
        >
          <UserX size={28} color={PALETTE.plum} />
          <span>
            宣布"不受欢迎 / 不被接受"
            <Under color={PALETTE.plum}>无须说明理由</Under>
            ；派遣国应酌情将"不受欢迎"者
            <Ink color="rgba(91,75,138,0.2)">召回或终止职务</Ink>
          </span>
        </div>
        <div style={{display: 'flex', gap: 24, marginTop: 22}}>
          <div
            data-final-knowledge="nomination-mnemonic"
            style={{...enter(frame, 130), flex: 1, border: `3px solid ${PALETTE.violet}`, backgroundColor: 'rgba(91,75,138,0.08)', padding: '18px 28px'}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.violet}}>须先行"提名"征得同意 · 口诀</div>
            <div style={{marginTop: 12}}>
              <Wax delay={158} frame={frame} color={PALETTE.violet} text="长官特使派外人" />
            </div>
            <div style={{marginTop: 12, fontSize: 21, color: PALETTE.muted, lineHeight: 1.5}}>
              馆长 · 武官 · 特别使团 · 非派遣国国籍人员（接受国还可撤销同意）
            </div>
          </div>
          <div
            data-final-knowledge="duty-start-rules"
            style={{...enter(frame, 156), flex: 1, border: `3px solid ${PALETTE.sage}`, backgroundColor: PALETTE.sageSoft, padding: '18px 28px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.sage}}>职务开始</div>
            使馆馆长：递交
            <Under color={PALETTE.sage}>国书</Under>
            <br />
            领馆馆长：接受国颁发
            <Under color={PALETTE.sage}>领事证书</Under>
            <br />
            其他人员：到任
            <Ink color="rgba(78,125,107,0.22)">自动开始</Ink>
          </div>
        </div>
      </div>
    </ChanceryShell>
  );
};

export const PremisesImmunityScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="embassy-premises" data-final-knowledge="consulate-premises" data-final-knowledge="requisition-contrast" data-final-knowledge="mailbag-contrast" data-final-knowledge="tax-note" */
  const frame = useCurrentFrame();
  return (
    <ChanceryShell code={3} station={3} title="使领馆的特权与豁免">
      <div
        data-layout="premises-gate-pair-with-mailbag-strip"
        data-visual-anchor="boundary"
        data-visual-grammar="embassy-premises-close-absolutely-consulate-premises-keep-emergency-lane,mailbag-protected-strictly-then-loosely"
        data-text-treatments="label-block,thin-underline,soft-highlight"
        data-focal-rule="embassy-premises-are-absolutely-inviolable"
        data-focal-channels="contrast,enclosure,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{display: 'flex', gap: 24, marginTop: 16}}>
          <div
            data-final-knowledge="embassy-premises"
            style={{...enter(frame, 14), flex: 1, border: `3px solid ${PALETTE.violet}`, borderTop: `14px solid ${PALETTE.violet}`, backgroundColor: PALETTE.card, padding: '20px 28px'}}
          >
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <DoorClosed size={26} color={PALETTE.violet} />
              <span style={{fontSize: 27, fontWeight: 800, color: PALETTE.violet}}>使馆馆舍 · 绝对不可侵犯</span>
            </div>
            <div style={{marginTop: 14, fontSize: 22, lineHeight: 1.6}}>
              非经
              <Under color={PALETTE.violet}>馆长同意</Under>
              不得进入；含工作、休息区域及
              <Ink color={PALETTE.violetSoft}>私人官邸</Ink>
            </div>
            <div style={{marginTop: 14, fontSize: 22, fontWeight: 700}}>
              既不得被
              <Under color={PALETTE.plum}>征用</Under>
              ，也不得被
              <Under color={PALETTE.plum}>征收</Under>
            </div>
          </div>
          <div
            data-final-knowledge="consulate-premises"
            style={{...enter(frame, 44), flex: 1, border: `3px solid ${PALETTE.sage}`, borderTop: `14px solid ${PALETTE.sage}`, backgroundColor: PALETTE.card, padding: '20px 28px'}}
          >
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Shield size={26} color={PALETTE.sage} />
              <span style={{fontSize: 27, fontWeight: 800, color: PALETTE.sage}}>领馆馆舍 · 有限不可侵犯</span>
            </div>
            <div style={{marginTop: 14, fontSize: 22, lineHeight: 1.6}}>
              仅
              <Under color={PALETTE.sage}>工作区域</Under>
              须经馆长同意；紧急时可
              <Ink color={PALETTE.sageSoft}>推定同意</Ink>
              采取保护行动（馆长明确拒绝除外）
            </div>
            <div style={{marginTop: 14, fontSize: 22, fontWeight: 700}}>
              可被
              <Under color={PALETTE.sage}>征用</Under>
              （补偿），不得被征收
            </div>
          </div>
        </div>
        <div style={{display: 'flex', gap: 24, marginTop: 22}}>
          <div
            data-final-knowledge="mailbag-contrast"
            style={{...enter(frame, 96), flex: 1.4, border: `3px solid ${PALETTE.plum}`, backgroundColor: PALETTE.plumSoft, padding: '18px 28px', fontSize: 22, lineHeight: 1.6}}
          >
            <div style={{display: 'flex', alignItems: 'center', gap: 12, fontSize: 24, fontWeight: 800, color: PALETTE.plum}}>
              <Mail size={24} color={PALETTE.plum} />
              邮袋对比
            </div>
            <div style={{marginTop: 10}}>
              外交邮袋：
              <Ink color="rgba(91,75,138,0.22)">不得开拆或扣留</Ink>
              ；领馆邮袋：重大理由可
              <Under color={PALETTE.plum}>授权代表在场开拆</Under>
              ，拒拆则退回
            </div>
            <div style={{marginTop: 8, fontSize: 21, color: PALETTE.muted}}>
              无线电发报机：均须经接受国许可 · 信差人身不可侵犯限于
              <Under color={PALETTE.plum}>执行职务</Under>
              时
            </div>
          </div>
          <div
            data-final-knowledge="tax-note"
            style={{...enter(frame, 124), flex: 1, border: `2px solid ${PALETTE.line}`, backgroundColor: PALETTE.card, padding: '18px 28px', fontSize: 22, lineHeight: 1.6}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.violet}}>免税 ≠ 免费</div>
            <div style={{marginTop: 10}}>
              免纳捐税、关税；物业费、水电燃气费等
              <Ink color={PALETTE.violetSoft}>特定服务收费不免除</Ink>
            </div>
          </div>
        </div>
      </div>
    </ChanceryShell>
  );
};

export const PersonalImmunitiesScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="criminal-jurisdiction-immunity" data-final-knowledge="civil-four-exceptions" data-final-knowledge="consular-official-rule" data-final-knowledge="special-mission-note" */
  const frame = useCurrentFrame();
  const exceptions = ['私有不动产物权诉讼', '私人身份参与继承诉讼', '公务范围外专业或商业活动', '主动起诉而被反诉'];
  return (
    <ChanceryShell code={4} station={4} title="外交人员与领事官员的特权与豁免">
      <div
        data-layout="immunity-verdict-board-with-exception-grid"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="criminal-jurisdiction-immunity-divides-from-criminal-liability,four-civil-exceptions-open-the-court-door"
        data-text-treatments="label-block,stamp,thin-underline"
        data-focal-rule="fully-immune-from-jurisdiction-not-from-liability"
        data-focal-channels="contrast,enclosure,locator"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{display: 'flex', gap: 24, marginTop: 14}}>
          <div
            data-final-knowledge="criminal-jurisdiction-immunity"
            style={{...enter(frame, 14), flex: 1.2, border: `3px solid ${PALETTE.plum}`, backgroundColor: PALETTE.plumSoft, padding: '18px 28px', fontSize: 22, lineHeight: 1.6}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.plum}}>刑事：管辖豁免 ≠ 刑事责任豁免</div>
            <div style={{marginTop: 10}}>
              外交人员享有
              <Ink color="rgba(91,75,138,0.22)">完全刑事管辖豁免</Ink>
              （接受国不得审判），但刑事责任通过
              <Under color={PALETTE.plum}>外交途径</Under>
              追究
              <br />
              完全免除作证义务 · 豁免只能由
              <Under color={PALETTE.plum}>派遣国明示放弃</Under>
            </div>
          </div>
          <div
            data-final-knowledge="consular-official-rule"
            style={{...enter(frame, 44), flex: 1, border: `3px solid ${PALETTE.sage}`, backgroundColor: PALETTE.sageSoft, padding: '18px 28px', fontSize: 22, lineHeight: 1.6}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.sage}}>领事官员</div>
            <div style={{marginTop: 10}}>
              执行
              <Under color={PALETTE.sage}>职务行为</Under>
              不受司法行政管辖；有无管辖权、作证义务看是否涉职务
              <br />
              严重罪行或已裁判执行 → 可
              <Ink color="rgba(78,125,107,0.25)">羁押</Ink>
            </div>
          </div>
        </div>
        <div
          data-final-knowledge="civil-four-exceptions"
          style={{...enter(frame, 96), marginTop: 22, border: `3px solid ${PALETTE.violet}`, backgroundColor: PALETTE.card, padding: '18px 30px'}}
        >
          <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.violet}}>接受国有权管辖的四类民事/行政案件</div>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 14}}>
            {exceptions.map((text, index) => (
              <span key={text} style={{...enter(frame, 128 + index * 14), border: `2px solid ${PALETTE.violet}`, padding: '10px 18px', fontSize: 22, fontWeight: 700, backgroundColor: PALETTE.iris}}>
                {['一', '二', '三', '四'][index]} · {text}
              </span>
            ))}
          </div>
        </div>
        <div
          data-final-knowledge="special-mission-note"
          style={{...enter(frame, 180), marginTop: 22, border: `2px dashed ${PALETTE.plum}`, backgroundColor: 'rgba(138,61,98,0.06)', padding: '16px 28px', fontSize: 22, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 18, whiteSpace: 'nowrap'}}
        >
          <ScrollText size={24} color={PALETTE.plum} />
          特别使团：性质属外交人员 · 特权豁免约等同于领馆和领事官员 · 适用"不受欢迎"制度
        </div>
      </div>
    </ChanceryShell>
  );
};

export const MissionDutiesScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="duty-respect-law" data-final-knowledge="duty-no-interference" data-final-knowledge="duty-premises-use" data-final-knowledge="duty-channel" data-final-knowledge="duty-no-commerce" */
  const frame = useCurrentFrame();
  const duties = [
    {text: '尊重接受国的法律规章', id: 'duty-respect-law'},
    {text: '不得干涉接受国内政（介入党派斗争、参加反政府游行等）', id: 'duty-no-interference'},
    {text: '馆舍不得用于与职务不符的用途（如外交庇护）', id: 'duty-premises-use'},
    {text: '洽谈公务应经接受国外交部或约定程序办理', id: 'duty-channel'},
    {text: '不应为私人利益从事任何专业或商业活动', id: 'duty-no-commerce'},
  ];
  return (
    <ChanceryShell code={5} station={5} title="使馆及豁免人员的义务">
      <div
        data-layout="five-duty-steps-ladder"
        data-visual-anchor="typographic-sequence"
        data-visual-grammar="five-obligations-descend-as-numbered-steps,commerce-ban-explains-the-civil-exception"
        data-text-treatments="label-block,thin-underline,soft-highlight"
        data-focal-rule="premises-must-not-shield-foreign-asylum"
        data-focal-channels="locator,contrast,enclosure"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{display: 'flex', flexDirection: 'column', gap: 26, marginTop: 44}}>
          {duties.map((duty, index) => (
            <div
              key={duty.id}
              data-final-knowledge={duty.id}
              style={{...enterX(frame, 20 + index * 22, 46), display: 'flex', alignItems: 'center', gap: 26, borderLeft: `10px solid ${PALETTE.violet}`, backgroundColor: PALETTE.card, padding: '22px 28px'}}
            >
              <span style={{width: 64, height: 64, border: `3px solid ${PALETTE.plum}`, borderRadius: '50%', display: 'grid', placeItems: 'center', fontSize: 27, fontWeight: 800, color: PALETTE.plum}}>{index + 1}</span>
              <span style={{fontSize: 26, fontWeight: 700}}>{duty.text}</span>
            </div>
          ))}
        </div>
        <div style={{...enter(frame, 150), marginTop: 44, border: `3px solid ${PALETTE.sage}`, backgroundColor: PALETTE.sageSoft, padding: '14px 28px', fontSize: 22, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 14, whiteSpace: 'nowrap'}}>
          <Stamp size={22} color={PALETTE.sage} />
          正因禁止私人商业活动，"公务范围外专业或商业活动"纠纷接受国法院才有权管辖
        </div>
      </div>
    </ChanceryShell>
  );
};

export const DiplomaticConsular = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: PALETTE.iris, overflow: 'hidden'}}
  >
    <TimelineSequence name="01-mission-comparison" {...SCENES.missionComparison}>
      <MissionComparisonScene />
    </TimelineSequence>
    <TimelineSequence name="02-envoy-structure" {...SCENES.envoyStructure}>
      <EnvoyStructureScene />
    </TimelineSequence>
    <TimelineSequence name="03-staff-protocol" {...SCENES.staffProtocol}>
      <StaffProtocolScene />
    </TimelineSequence>
    <TimelineSequence name="04-premises-immunity" {...SCENES.premisesImmunity}>
      <PremisesImmunityScene />
    </TimelineSequence>
    <TimelineSequence name="05-personal-immunities" {...SCENES.personalImmunities}>
      <PersonalImmunitiesScene />
    </TimelineSequence>
    <TimelineSequence name="06-mission-duties" {...SCENES.missionDuties}>
      <MissionDutiesScene />
    </TimelineSequence>
  </AbsoluteFill>
);
