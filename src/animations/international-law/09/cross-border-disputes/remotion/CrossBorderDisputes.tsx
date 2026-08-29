import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {Anchor, Building, FileWarning, Gavel, Globe2, IdCard, Languages, Scale} from 'lucide-react';
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

const HARBOR_CODE = ['壹', '贰', '叁', '肆', '伍'];

const HarborShell = ({
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
      backgroundColor: PALETTE.mist,
      backgroundImage:
        'repeating-linear-gradient(90deg, rgba(31,110,140,0.04) 0 1px, transparent 1px 52px), radial-gradient(circle at 88% 96%, rgba(226,114,91,0.09), transparent 30%)',
      overflow: 'hidden',
    }}
  >
    <div style={{position: 'absolute', inset: 22, border: `3px solid ${PALETTE.sea}`}} />
    <div style={{position: 'absolute', inset: 30, border: `1px solid ${PALETTE.coral}55`}} />
    <header style={{position: 'absolute', left: 64, right: 64, top: 44, height: 104, display: 'flex', alignItems: 'center', gap: 24, borderBottom: `4px solid ${PALETTE.sand}`}}>
      <div style={{width: 72, height: 72, borderRadius: '36px 36px 36px 4px', border: `3px solid ${PALETTE.coral}`, backgroundColor: PALETTE.card, display: 'grid', placeItems: 'center'}}>
        <Anchor size={28} color={PALETTE.coral} />
      </div>
      <h1 className="font-animation-title" style={{fontSize: 42, lineHeight: 1.1, margin: 0, fontWeight: 800, color: PALETTE.ink}}>
        {title}
      </h1>
      <div style={{marginLeft: 'auto', textAlign: 'right'}}>
        <div style={{fontSize: 16, fontWeight: 700, letterSpacing: 4, color: PALETTE.muted}}>CORAL HARBOR EXCHANGE · 三国法</div>
        <div style={{fontSize: 18, color: PALETTE.muted, marginTop: 6}}>国际民商事争议 · {HARBOR_CODE[code]}</div>
      </div>
    </header>
    <div style={{position: 'absolute', left: 66, top: 210, width: 104, height: 640, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40}}>
      {[0, 1, 2, 3, 4].map((index) => {
        const active = index === station;
        return (
          <div
            key={index}
            style={{
              width: 62,
              height: 62,
              borderRadius: '31px 31px 31px 4px',
              border: `2px solid ${active ? PALETTE.coral : PALETTE.line}`,
              backgroundColor: active ? PALETTE.coral : PALETTE.card,
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

const Tide = ({color, text}: {readonly color: string; readonly text: string}) => (
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

const HarborStamp = ({delay, frame, text, color = PALETTE.coral}: {readonly delay: number; readonly frame: number; readonly text: string; readonly color?: string}) => (
  <span
    style={{
      ...enter(frame, delay, 10),
      display: 'inline-block',
      border: `3px solid ${color}`,
      borderRadius: '24px 6px 24px 6px',
      color,
      padding: '8px 22px',
      fontSize: 23,
      fontWeight: 800,
      letterSpacing: 2,
      rotate: '-3deg',
      backgroundColor: PALETTE.card,
    }}
  >
    {text}
  </span>
);

export const ArbitrationAgreementScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="arbitration-authority" data-final-knowledge="arbitration-law-ladder" data-final-knowledge="report-up-rule" data-final-knowledge="arbitration-place" */
  const frame = useCurrentFrame();
  return (
    <HarborShell code={0} station={0} title="涉外仲裁协议的效力认定">
      <div
        data-layout="arbitration-validity-ladder-with-report-desk"
        data-visual-anchor="flow-path"
        data-visual-grammar="validity-climbs-the-choice-of-law-ladder,invalid-rulings-climb-to-the-supreme-court"
        data-text-treatments="label-block,thin-underline,soft-highlight"
        data-focal-rule="valid-finding-law-prevails-when-two-laws-diverge"
        data-focal-channels="connector,contrast,enclosure"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{display: 'flex', gap: 26, marginTop: 20}}>
          <div
            data-final-knowledge="arbitration-authority"
            style={{...enter(frame, 14), flex: 1, border: `3px solid ${PALETTE.sea}`, borderTop: `14px solid ${PALETTE.sea}`, backgroundColor: PALETTE.card, padding: '26px 30px', fontSize: 23, lineHeight: 1.75}}
          >
            <div style={{fontSize: 26, fontWeight: 800, color: PALETTE.sea, display: 'flex', alignItems: 'center', gap: 12}}>
              <Gavel size={26} color={PALETTE.sea} />
              认定机构
            </div>
            <div style={{marginTop: 14}}>
              仲裁机构/仲裁庭与法院
              <Ink color={PALETTE.seaSoft}>都有权认定</Ink>
              <br />
              一方请求仲裁、一方请求法院 → 由
              <Under color={PALETTE.sea}>法院裁定</Under>
              <br />
              管辖法院：与仲裁协议有
              <Under color={PALETTE.sea}>实际联系</Under>
              的中院或专门法院
            </div>
          </div>
          <div
            data-final-knowledge="arbitration-law-ladder"
            style={{...enter(frame, 48), flex: 1.25, border: `3px solid ${PALETTE.coral}`, borderTop: `14px solid ${PALETTE.coral}`, backgroundColor: PALETTE.card, padding: '26px 30px'}}
          >
            <div style={{fontSize: 26, fontWeight: 800, color: PALETTE.coral}}>适用法律 · 三级阶梯</div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 16, marginTop: 16}}>
              <div style={{...enter(frame, 82), borderLeft: `8px solid ${PALETTE.coral}`, backgroundColor: 'rgba(226,114,91,0.08)', padding: '12px 18px', fontSize: 23, fontWeight: 800}}>
                ① 意思自治（须明确表示）
              </div>
              <div style={{...enter(frame, 100), borderLeft: `8px solid ${PALETTE.sea}`, backgroundColor: 'rgba(31,110,140,0.08)', padding: '12px 18px', fontSize: 23, fontWeight: 800}}>
                ② 仲裁机构所在地法 或 仲裁地法
              </div>
              <div style={{...enter(frame, 118), borderLeft: `8px solid ${PALETTE.sand}`, backgroundColor: 'rgba(201,169,107,0.1)', padding: '12px 18px', fontSize: 23, fontWeight: 800}}>
                ③ 中国法
              </div>
            </div>
            <div style={{marginTop: 16, fontSize: 21, lineHeight: 1.55}}>
              仅约定
              <Under color={PALETTE.coral}>合同适用法律</Under>
              ≠ 仲裁条款适用的法律；两法认定不同时，法院应适用
              <Ink color={PALETTE.seaSoft}>确认协议有效的法律</Ink>
            </div>
          </div>
        </div>
        <div style={{display: 'flex', gap: 26, marginTop: 26}}>
          <div
            data-final-knowledge="report-up-rule"
            style={{...enter(frame, 140), flex: 1.3, border: `3px solid ${PALETTE.sand}`, backgroundColor: 'rgba(201,169,107,0.1)', padding: '22px 30px', fontSize: 23, fontWeight: 700, lineHeight: 1.6}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.sand, display: 'flex', alignItems: 'center', gap: 12}}>
              <FileWarning size={24} color={PALETTE.sand} />
              无效认定 · 内部报核
            </div>
            <div style={{marginTop: 10}}>
              拟认定
              <Ink color={PALETTE.coralSoft}>无效</Ink>
              → 逐级上报
              <Under color={PALETTE.sand}>最高人民法院</Under>
              ，依其审核意见裁定；
              <Ink color={PALETTE.seaSoft}>有效裁定可直接作出</Ink>
            </div>
          </div>
          <div
            data-final-knowledge="arbitration-place"
            style={{...enter(frame, 168), flex: 1, border: `2px dashed ${PALETTE.sea}`, backgroundColor: 'rgba(31,110,140,0.05)', padding: '22px 28px', fontSize: 22, lineHeight: 1.6}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.sea}}>仲裁地 · 当事人约定</div>
            <div style={{marginTop: 8}}>
              可与仲裁机构所在地
              <Under color={PALETTE.sea}>不一致</Under>
              （北京仲裁委 · 首尔仲裁有效）；作用等同"法院地"，据其冲突规范定准据法
            </div>
          </div>
        </div>
      </div>
    </HarborShell>
  );
};

export const JurisdictionLevelsScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="level-principle" data-final-knowledge="level-amounts" data-final-knowledge="level-exceptions" */
  const frame = useCurrentFrame();
  return (
    <HarborShell code={1} station={1} title="涉外民商事案件的级别管辖">
      <div
        data-layout="amount-ladder-with-exception-strip"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="amount-ladders-rank-high-and-intermediate-courts,downshift-is-the-rule-concentration-the-exception"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="four-cities-five-provinces-double-the-intermediate-threshold"
        data-focal-channels="contrast,spatial,enclosure"
        style={{position: 'absolute', inset: 0}}
      >
        <div
          data-final-knowledge="level-principle"
          style={{...enter(frame, 14), marginTop: 20, border: `3px solid ${PALETTE.sea}`, backgroundColor: 'rgba(31,110,140,0.07)', padding: '20px 30px', fontSize: 24, fontWeight: 800, whiteSpace: 'nowrap'}}
        >
          原则：
          <Ink color={PALETTE.seaSoft}>下沉管辖权</Ink>
          （基层法院审理）；集中管辖是例外 —— 除外：海事海商、知识产权、生态环境损害赔偿、环境民事公益诉讼
        </div>
        <div style={{display: 'flex', gap: 26, marginTop: 40}}>
          <div
            data-final-knowledge="level-amounts"
            style={{...enter(frame, 48), flex: 1.4, border: `3px solid ${PALETTE.coral}`, borderTop: `14px solid ${PALETTE.coral}`, backgroundColor: PALETTE.card, padding: '28px 32px'}}
          >
            <div style={{fontSize: 26, fontWeight: 800, color: PALETTE.coral}}>标的额阶梯（人民币）</div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 20, marginTop: 20}}>
              <div style={{...enterX(frame, 82, 36), borderLeft: `10px solid ${PALETTE.sea}`, backgroundColor: 'rgba(31,110,140,0.07)', padding: '16px 22px'}}>
                <span style={{fontSize: 24, fontWeight: 800, color: PALETTE.sea}}>高级法院</span>
                <span style={{marginLeft: 18, fontSize: 24, fontWeight: 800}}>{'> 50 亿元'}</span>
              </div>
              <div style={{...enterX(frame, 104, 36), borderLeft: `10px solid ${PALETTE.coral}`, backgroundColor: 'rgba(226,114,91,0.07)', padding: '16px 22px'}}>
                <span style={{fontSize: 24, fontWeight: 800, color: PALETTE.coral}}>四市五省中院</span>
                <span style={{marginLeft: 18, fontSize: 24, fontWeight: 800}}>{'> 4000 万元'}</span>
                <div style={{fontSize: 20, color: PALETTE.muted, marginTop: 6}}>京津沪渝 + 山东江苏浙江福建广东</div>
              </div>
              <div style={{...enterX(frame, 126, 36), borderLeft: `10px solid ${PALETTE.sand}`, backgroundColor: 'rgba(201,169,107,0.09)', padding: '16px 22px'}}>
                <span style={{fontSize: 24, fontWeight: 800, color: PALETTE.ink}}>其他中院</span>
                <span style={{marginLeft: 18, fontSize: 24, fontWeight: 800}}>{'> 2000 万元'}</span>
              </div>
            </div>
          </div>
          <div
            data-final-knowledge="level-exceptions"
            style={{...enter(frame, 140), flex: 1, border: `2px dashed ${PALETTE.sea}`, backgroundColor: 'rgba(31,110,140,0.05)', padding: '28px 30px', fontSize: 23, lineHeight: 1.7}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.sea}}>反向核对</div>
            <div style={{marginTop: 12}}>
              中院管辖上限 = 50 亿元以下；身份关系的涉外离婚案件按
              <Under color={PALETTE.sea}>一般级别管辖</Under>
              处理，不按标的额上提
            </div>
          </div>
        </div>
      </div>
    </HarborShell>
  );
};

export const TerritorialBasicsScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="touch-point-rule" data-final-knowledge="written-agreement-rule" data-final-knowledge="exclusive-three" data-final-knowledge="exclusive-arbitration-note" */
  const frame = useCurrentFrame();
  const exclusive = [
    {text: '法人"生死决议"：设立、解散、清算及决议效力纠纷', color: PALETTE.coral},
    {text: '知识产权有效性纠纷（必须"有效性"）', color: PALETTE.sea},
    {text: '三类中外合同（合资、合作、合作勘探自然资源）且履行地在中国', color: PALETTE.sand},
  ];
  return (
    <HarborShell code={2} station={2} title="地域管辖：沾边就管、协议与专属">
      <div
        data-layout="three-gates-territorial-board"
        data-visual-anchor="document-fork"
        data-visual-grammar="touch-point-contacts-open-the-court-door,exclusive-gates-stay-shut-but-yield-to-arbitration"
        data-text-treatments="label-block,thin-underline,soft-highlight"
        data-focal-rule="contacts-anywhere-in-china-allow-jurisdiction"
        data-focal-channels="contrast,enclosure,connector"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{display: 'flex', flexDirection: 'column', gap: 22, marginTop: 18}}>
          <div
            data-final-knowledge="touch-point-rule"
            style={{...enterX(frame, 14, 44), borderLeft: `10px solid ${PALETTE.sea}`, backgroundColor: 'rgba(31,110,140,0.07)', padding: '20px 28px', fontSize: 23, lineHeight: 1.6}}
          >
            <Tide color={PALETTE.sea} text="沾边就管" />
            <div style={{marginTop: 10}}>
              被告在中国
              <Under color={PALETTE.sea}>无住所</Under>
              +
              <Ink color={PALETTE.coralSoft}>身份关系以外</Ink>
              的纠纷 → 合同签订地、合同履行地、标的物所在地、可供扣押财产所在地、侵权行为地、代表机构住所地
              <Ink color={PALETTE.seaSoft}>任一连接点</Ink>
              在中国即可管
            </div>
          </div>
          <div
            data-final-knowledge="written-agreement-rule"
            style={{...enterX(frame, 52, 44), borderLeft: `10px solid ${PALETTE.coral}`, backgroundColor: 'rgba(226,114,91,0.07)', padding: '20px 28px', fontSize: 23, lineHeight: 1.6}}
          >
            <Tide color={PALETTE.coral} text="书面协议管辖" />
            <span style={{marginLeft: 18}}>
              书面选择我国法院即可 ——
              <Ink color={PALETTE.coralSoft}>突破</Ink>
              纠纷性质 +
              <Ink color={PALETTE.coralSoft}>突破实际联系原则</Ink>
            </span>
          </div>
          <div
            style={{...enterX(frame, 90, 44), border: `3px solid ${PALETTE.sand}`, borderTop: `12px solid ${PALETTE.sand}`, backgroundColor: PALETTE.card, padding: '20px 30px'}}
          >
            <div data-final-knowledge="exclusive-three" style={{fontSize: 25, fontWeight: 800, color: PALETTE.ink}}>专属管辖三情形</div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 12, marginTop: 12}}>
              {exclusive.map((item) => (
                <div key={item.text} style={{borderLeft: `8px solid ${item.color}`, backgroundColor: 'rgba(238,244,243,0.9)', padding: '10px 18px', fontSize: 22, fontWeight: 700}}>{item.text}</div>
              ))}
            </div>
            <div data-final-knowledge="exclusive-arbitration-note" style={{marginTop: 12, fontSize: 21, fontWeight: 700, color: PALETTE.sea}}>
              专属管辖
              <Ink color={PALETTE.seaSoft}>不影响有效仲裁协议</Ink>
              （含外国仲裁机构）提起仲裁
            </div>
          </div>
        </div>
      </div>
    </HarborShell>
  );
};

export const ForumMechanicsScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="forum-non-conveniens" data-final-knowledge="parallel-lis-pendens" data-final-knowledge="parallel-suspension" data-final-knowledge="cicc-rules" */
  const frame = useCurrentFrame();
  return (
    <HarborShell code={3} station={3} title="不方便法院、平行诉讼与国际商事法庭">
      <div
        data-layout="forum-control-trio-board"
        data-visual-anchor="flow-path"
        data-visual-grammar="parallel-suits-run-until-recognition-closes-them,cicc-rules-loosen-language-and-evidence"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="five-conditions-cumulative-and-discretionary"
        data-focal-channels="contrast,connector,enclosure"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{display: 'flex', gap: 24, marginTop: 18}}>
          <div
            data-final-knowledge="forum-non-conveniens"
            style={{...enter(frame, 14), flex: 1.2, border: `3px solid ${PALETTE.sea}`, borderTop: `14px solid ${PALETTE.sea}`, backgroundColor: PALETTE.card, padding: '24px 30px', fontSize: 22, lineHeight: 1.65}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.sea}}>不方便法院 · 被告提管辖异议</div>
            <div style={{marginTop: 12}}>
              五情形
              <Ink color={PALETTE.coralSoft}>同时满足</Ink>
              ：基本事实不在境内+审理明显不便 · 无选择我国管辖协议 · 非我国专属 · 不涉主权安全公益 · 外国法院更方便
              <br />
              法院
              <Under color={PALETTE.sea}>"可以"</Under>
              驳回起诉；外国法院拒绝受理 → 当事人再诉的
              <Ink color={PALETTE.seaSoft}>我国应当受理</Ink>
            </div>
          </div>
          <div
            style={{...enter(frame, 48), flex: 1, border: `3px solid ${PALETTE.coral}`, borderTop: `14px solid ${PALETTE.coral}`, backgroundColor: PALETTE.card, padding: '24px 30px', fontSize: 22, lineHeight: 1.65}}
          >
            <div data-final-knowledge="parallel-lis-pendens" style={{fontSize: 25, fontWeight: 800, color: PALETTE.coral}}>平行诉讼 · 原则不禁止</div>
            <div style={{marginTop: 12}}>
              不得一事再诉：
              <Under color={PALETTE.coral}>排他性管辖协议</Under>
              选外国法院 + 非专属 + 不涉主权安全公益；或我国已承认外国裁判
            </div>
            <div data-final-knowledge="parallel-suspension" style={{marginTop: 12}}>
              可中止：外国法院
              <Under color={PALETTE.sea}>受理在先</Under>
              + 当事人
              <Ink color={PALETTE.seaSoft}>书面申请</Ink>
            </div>
          </div>
        </div>
        <div
          data-final-knowledge="cicc-rules"
          style={{...enter(frame, 116), marginTop: 28, border: `3px solid ${PALETTE.sand}`, borderTop: `12px solid ${PALETTE.sand}`, backgroundColor: PALETTE.card, padding: '24px 32px', fontSize: 22, lineHeight: 1.7}}
        >
          <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.ink, display: 'flex', alignItems: 'center', gap: 12}}>
            <Building size={24} color={PALETTE.sand} />
            最高院国际商事法庭（常设审判机构）
          </div>
          <div style={{marginTop: 12, display: 'flex', gap: 30}}>
            <span style={{flex: 1}}>
              <Ink color={PALETTE.sandSoft}>管辖</Ink>
              ：书面选最高院+3亿元以上 · 高院报请 · 全国重大影响
            </span>
            <span style={{flex: 1}}>
              <Ink color={PALETTE.seaSoft}>证据"一强调两突破"</Ink>
              ：必须
              <Under color={PALETTE.sea}>质证</Under>
              ；英文材料经对方同意免翻译 · 视听传输/网络取证
            </span>
            <span style={{flex: 0.8}}>
              <Ink color={PALETTE.coralSoft}>判决</Ink>
              ：少数服从多数，
              <Under color={PALETTE.coral}>少数意见可载明</Under>
            </span>
          </div>
        </div>
        <div style={{...enter(frame, 170), marginTop: 30, display: 'flex', justifyContent: 'center', whiteSpace: 'nowrap'}}>
          <HarborStamp delay={170} frame={frame} color={PALETTE.sea} text="口诀：同时 + 可以；排他 + 非专属 + 不涉主权；一强调两突破" />
        </div>
      </div>
    </HarborShell>
  );
};

export const ForeignStatusScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="language-rule" data-final-knowledge="identity-proof" data-final-knowledge="representation-rules" data-final-knowledge="poa-rules" data-final-knowledge="period-procedure" */
  const frame = useCurrentFrame();
  return (
    <HarborShell code={4} station={4} title="外国人的民事诉讼法律地位">
      <div
        data-layout="status-trio-columns-with-period-strip"
        data-visual-anchor="role-pair"
        data-visual-grammar="language-and-identity-gate-the-foreign-party,representation-rules-split-trust-from-engagement"
        data-text-treatments="label-block,thin-underline,soft-highlight"
        data-focal-rule="one-notarization-one-legalization-doubles-without-diplomatic-relations"
        data-focal-channels="contrast,enclosure,locator"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{display: 'flex', gap: 22, marginTop: 16}}>
          <div
            data-final-knowledge="language-rule"
            style={{...enter(frame, 14), flex: 1, border: `3px solid ${PALETTE.sea}`, borderTop: `12px solid ${PALETTE.sea}`, backgroundColor: PALETTE.card, padding: '22px 26px', fontSize: 21, lineHeight: 1.65}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.sea, display: 'flex', alignItems: 'center', gap: 10}}>
              <Languages size={22} color={PALETTE.sea} />
              语言文字
            </div>
            <div style={{marginTop: 10}}>
              用中国
              <Under color={PALETTE.sea}>语言文字</Under>
              审理 · 翻译费用
              <Ink color={PALETTE.coralSoft}>当事人自担</Ink>
              <br />
              对中文译本有异议 →
              <Ink color={PALETTE.seaSoft}>共同委托翻译机构</Ink>
              ，不成由法院确定
            </div>
          </div>
          <div
            data-final-knowledge="identity-proof"
            style={{...enter(frame, 40), flex: 1.25, border: `3px solid ${PALETTE.coral}`, borderTop: `12px solid ${PALETTE.coral}`, backgroundColor: PALETTE.card, padding: '22px 26px', fontSize: 21, lineHeight: 1.65}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.coral, display: 'flex', alignItems: 'center', gap: 10}}>
              <IdCard size={22} color={PALETTE.coral} />
              身份证明
            </div>
            <div style={{marginTop: 10}}>
              自然人：
              <Under color={PALETTE.coral}>护照即可</Under>
              （无须公证认证）
              <br />
              企业/组织：两份证明 + 手续
              <br />
              <Ink color={PALETTE.seaSoft}>有邦交：1 公证 + 1 认证</Ink>
              <br />
              <Ink color={PALETTE.coralSoft}>无邦交：1 公证 + 2 认证</Ink>
              （第三国转认证）· 或条约规定手续
            </div>
          </div>
          <div
            data-final-knowledge="representation-rules"
            style={{...enter(frame, 66), flex: 1.15, border: `3px solid ${PALETTE.sand}`, borderTop: `12px solid ${PALETTE.sand}`, backgroundColor: PALETTE.card, padding: '22px 26px', fontSize: 21, lineHeight: 1.65}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.ink, display: 'flex', alignItems: 'center', gap: 10}}>
              <Scale size={22} color={PALETTE.sand} />
              诉讼代理
            </div>
            <div style={{marginTop: 10}}>
              律师身份 → 只能委托
              <Under color={PALETTE.ink}>我国律师</Under>
              ；本国律师可以
              <Ink color={PALETTE.seaSoft}>非律师身份</Ink>
              代理
              <br />
              使馆官员受托代理：
              <Ink color={PALETTE.coralSoft}>个人名义 · 无豁免</Ink>
              ；代为聘请律师：
              <Ink color={PALETTE.seaSoft}>外交代表身份 · 有豁免</Ink>
            </div>
          </div>
        </div>
        <div style={{display: 'flex', gap: 24, marginTop: 24}}>
          <div
            data-final-knowledge="poa-rules"
            style={{...enter(frame, 100), flex: 1.4, border: `3px solid ${PALETTE.sea}`, backgroundColor: 'rgba(31,110,140,0.07)', padding: '20px 30px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.sea}}>授权委托书 · 按签署地定手续</div>
            <div style={{marginTop: 10}}>
              法官见证下签署 →
              <Ink color={PALETTE.seaSoft}>无须其他手续</Ink>
              ；境内其他地方 →
              <Under color={PALETTE.sea}>中国公证</Under>
              ；境外签署 →
              <Ink color={PALETTE.coralSoft}>公证 + 认证</Ink>
              或条约手续
            </div>
          </div>
          <div
            data-final-knowledge="period-procedure"
            style={{...enter(frame, 130), flex: 1, border: `2px dashed ${PALETTE.sand}`, backgroundColor: 'rgba(201,169,107,0.09)', padding: '20px 28px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.ink, display: 'flex', alignItems: 'center', gap: 10}}>
              <Globe2 size={22} color={PALETTE.sand} />
              期间与程序
            </div>
            <div style={{marginTop: 8}}>
              涉外审理
              <Under color={PALETTE.ink}>不受国内审限限制</Under>
              ；
              <Ink color={PALETTE.coralSoft}>不适用小额诉讼</Ink>
              （简易程序符合条件可用）
            </div>
          </div>
        </div>
      </div>
    </HarborShell>
  );
};

export const CrossBorderDisputes = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: PALETTE.mist, overflow: 'hidden'}}
  >
    <TimelineSequence name="01-arbitration-agreement" {...SCENES.arbitrationAgreement}>
      <ArbitrationAgreementScene />
    </TimelineSequence>
    <TimelineSequence name="02-jurisdiction-levels" {...SCENES.jurisdictionLevels}>
      <JurisdictionLevelsScene />
    </TimelineSequence>
    <TimelineSequence name="03-territorial-basics" {...SCENES.territorialBasics}>
      <TerritorialBasicsScene />
    </TimelineSequence>
    <TimelineSequence name="04-forum-mechanics" {...SCENES.forumMechanics}>
      <ForumMechanicsScene />
    </TimelineSequence>
    <TimelineSequence name="05-foreign-status" {...SCENES.foreignStatus}>
      <ForeignStatusScene />
    </TimelineSequence>
  </AbsoluteFill>
);
