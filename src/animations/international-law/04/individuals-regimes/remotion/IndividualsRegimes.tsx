import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {
  BookLock,
  Building,
  FileCheck,
  Fingerprint,
  IdCard,
  Plane,
  Scale,
  ShieldCheck,
  Stamp,
  UserX,
} from 'lucide-react';
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

const LEDGER_CODE = ['壹', '贰', '叁', '肆', '伍'];

const RegistryShell = ({
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
      backgroundColor: PALETTE.ledger,
      backgroundImage:
        'repeating-linear-gradient(0deg, rgba(38,48,43,0.04) 0 1px, transparent 1px 56px), radial-gradient(circle at 92% 6%, rgba(58,107,156,0.10), transparent 30%)',
      overflow: 'hidden',
    }}
  >
    <div style={{position: 'absolute', inset: 22, border: `2px solid ${PALETTE.line}`}} />
    <div style={{position: 'absolute', inset: 28, border: '1px dashed rgba(38,48,43,0.3)'}} />
    <header style={{position: 'absolute', left: 64, right: 64, top: 44, height: 104, display: 'flex', alignItems: 'center', gap: 24, borderBottom: `3px double ${PALETTE.ink}`}}>
      <div style={{width: 70, height: 88, border: `3px solid ${PALETTE.pink}`, borderRadius: 6, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.card}}>
        <span style={{fontSize: 26, fontWeight: 800, color: PALETTE.pink}}>{LEDGER_CODE[code]}</span>
      </div>
      <h1 className="font-animation-title" style={{fontSize: 42, lineHeight: 1.1, margin: 0, fontWeight: 800, color: PALETTE.ink}}>
        {title}
      </h1>
      <div style={{marginLeft: 'auto', textAlign: 'right'}}>
        <div style={{fontSize: 16, fontWeight: 700, letterSpacing: 4, color: PALETTE.muted}}>CIVIL REGISTRY · 三国法</div>
        <div style={{fontSize: 18, color: PALETTE.muted, marginTop: 6}}>国际法上的个人</div>
      </div>
    </header>
    <div style={{position: 'absolute', left: 66, top: 210, width: 104, height: 640, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40}}>
      {[0, 1, 2, 3, 4].map((index) => {
        const active = index === station;
        return (
          <div
            key={index}
            style={{
              width: 66,
              height: 88,
              border: `2px solid ${active ? PALETTE.pink : PALETTE.line}`,
              borderRadius: 6,
              backgroundColor: active ? PALETTE.pink : PALETTE.card,
              display: 'grid',
              placeItems: 'center',
              color: active ? PALETTE.card : PALETTE.muted,
            }}
          >
            <span className="font-animation-mono" style={{fontSize: 18, fontWeight: 700}}>{String(index + 1).padStart(2, '0')}</span>
          </div>
        );
      })}
    </div>
    <main style={{position: 'absolute', left: 210, right: 64, top: 190, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Tab = ({color, text}: {readonly color: string; readonly text: string}) => (
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

const PinkStamp = ({delay, frame, text}: {readonly delay: number; readonly frame: number; readonly text: string}) => (
  <span
    style={{
      ...enter(frame, delay, 10),
      display: 'inline-block',
      border: `3px solid ${PALETTE.pink}`,
      borderRadius: 6,
      color: PALETTE.pink,
      padding: '6px 18px',
      fontSize: 23,
      fontWeight: 800,
      letterSpacing: 2,
      rotate: '-5deg',
      backgroundColor: 'rgba(246,248,243,0.9)',
    }}
  >
    {text}
  </span>
);

export const NationalityScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="birth-jus-sanguinis" data-final-knowledge="birth-jus-soli" data-final-knowledge="naturalization-rule" data-final-knowledge="auto-loss" data-final-knowledge="loss-restriction" data-final-knowledge="conflict-positive" data-final-knowledge="conflict-negative" data-final-knowledge="dual-note" */
  const frame = useCurrentFrame();
  return (
    <RegistryShell code={0} station={0} title="国籍法：取得、丧失与冲突解决">
      <div
        data-layout="registry-gain-loss-columns-with-conflict-strip"
        data-visual-anchor="flow-path"
        data-visual-grammar="birth-and-application-cards-file-into-the-gain-column,settled-abroad-plus-foreign-nationality-triggers-auto-loss"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="public-officials-and-soldiers-cannot-renounce"
        data-focal-channels="contrast,enclosure,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <div
          style={{...enter(frame, 14), position: 'absolute', left: 0, top: 16, width: 780, height: 380, border: `3px solid ${PALETTE.jade}`, borderTop: `12px solid ${PALETTE.jade}`, backgroundColor: PALETTE.card, padding: '20px 30px'}}
        >
          <div style={{fontSize: 27, fontWeight: 800, color: PALETTE.jade}}>取得</div>
          <div data-final-knowledge="birth-jus-sanguinis" style={{...enter(frame, 44), marginTop: 14, border: `2px solid ${PALETTE.line}`, padding: '12px 20px', fontSize: 22, lineHeight: 1.5}}>
            <Tab color={PALETTE.jade} text="血统主义" />
            <span style={{marginLeft: 12}}>父母一方为中国公民 → 原则取得中国籍</span>
            <div style={{marginTop: 8, fontSize: 21, color: PALETTE.muted}}>
              例外（同时满足）：父母
              <Under color={PALETTE.pink}>定居外国</Under>
              + 出生即具外国国籍
            </div>
          </div>
          <div data-final-knowledge="birth-jus-soli" style={{...enter(frame, 70), marginTop: 14, border: `2px solid ${PALETTE.line}`, padding: '12px 20px', fontSize: 22, lineHeight: 1.5}}>
            <Tab color={PALETTE.jade} text="出生地主义" />
            <span style={{marginLeft: 12}}>
              父母
              <Under color={PALETTE.jade}>无国籍或国籍不明</Under>
              + 定居中国
            </span>
          </div>
          <div data-final-knowledge="naturalization-rule" style={{...enter(frame, 96), marginTop: 14, border: `2px solid ${PALETTE.line}`, padding: '12px 20px', fontSize: 22, lineHeight: 1.5}}>
            <Tab color={PALETTE.blue} text="申请入籍" />
            <span style={{marginLeft: 12}}>
              <Ink color={PALETTE.blueSoft}>公安部审批</Ink>
              ，且不得再保留外国国籍
            </span>
          </div>
        </div>
        <div
          style={{...enter(frame, 40), position: 'absolute', left: 866, top: 16, width: 780, height: 380, border: `3px solid ${PALETTE.pink}`, borderTop: `12px solid ${PALETTE.pink}`, backgroundColor: PALETTE.card, padding: '20px 30px'}}
        >
          <div style={{fontSize: 27, fontWeight: 800, color: PALETTE.pink}}>丧失</div>
          <div data-final-knowledge="auto-loss" style={{...enter(frame, 70), marginTop: 14, border: `3px solid ${PALETTE.pink}`, backgroundColor: PALETTE.pinkSoft, padding: '14px 22px', fontSize: 23, lineHeight: 1.5, fontWeight: 700}}>
            自动丧失（两项
            <Under color={PALETTE.pink}>同时满足</Under>
            ）：定居外国 + 自愿加入或取得外国国籍
          </div>
          <div style={{...enter(frame, 100), marginTop: 14, fontSize: 22, lineHeight: 1.55}}>
            申请丧失：
            <Ink color={PALETTE.blueSoft}>公安部审批</Ink>
          </div>
          <div data-final-knowledge="loss-restriction" style={{...enter(frame, 128), marginTop: 12}}>
            <PinkStamp delay={128} frame={frame} text="国家工作人员、现役军人不得退出" />
          </div>
        </div>
        <div
          style={{...enter(frame, 160), position: 'absolute', left: 0, top: 424, width: 1010, height: 150, border: `3px solid ${PALETTE.blue}`, backgroundColor: 'rgba(58,107,156,0.08)', padding: '16px 28px'}}
        >
          <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.blue}}>国籍冲突解决</div>
          <div style={{marginTop: 12, fontSize: 22, lineHeight: 1.55}}>
            <div data-final-knowledge="conflict-positive">积极冲突（多籍）：<Under color={PALETTE.blue}>中国籍 → 经常居住地 → 最密切联系地</Under></div>
            <div data-final-knowledge="conflict-negative" style={{marginTop: 8}}>消极冲突（无籍）：经常居住地</div>
          </div>
        </div>
        <div
          data-final-knowledge="dual-note"
          style={{...enter(frame, 190), position: 'absolute', left: 1064, top: 424, width: 582, height: 150, border: `2px dashed ${PALETTE.jade}`, backgroundColor: 'rgba(46,125,91,0.06)', padding: '16px 26px', fontSize: 22, lineHeight: 1.55}}
        >
          <div style={{fontSize: 23, fontWeight: 800, color: PALETTE.jade}}>双重国籍辨析</div>
          <div style={{marginTop: 8}}>
            "有没有"和"承不承认"是两个问题：未定居者取得外国籍不自动丧失中国籍，但
            <Ink color={PALETTE.jadeSoft}>中国只承认其中国国籍</Ink>
          </div>
        </div>
      </div>
    </RegistryShell>
  );
};

export const EntryExitScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="visa-categories" data-final-knowledge="visa-free-three" data-final-knowledge="refusal-no-reason" data-final-knowledge="three-illegals" data-final-knowledge="exit-restriction-contrast" data-final-knowledge="deportation-contrast" */
  const frame = useCurrentFrame();
  return (
    <RegistryShell code={1} station={1} title="出境入境管理法：签证、三非与强制出境">
      <div
        data-layout="dual-entry-exit-columns-with-stamp-strip"
        data-visual-anchor="document-fork"
        data-visual-grammar="visa-refusal-needs-no-reason,deportation-splits-removal-from-expulsion"
        data-text-treatments="label-block,soft-highlight,stamp"
        data-focal-rule="criminal-cases-block-exit-directly-civil-needs-court"
        data-focal-channels="contrast,enclosure,connector"
        style={{position: 'absolute', inset: 0}}
      >
        <div
          style={{...enter(frame, 14), position: 'absolute', left: 0, top: 16, width: 780, height: 330, border: `3px solid ${PALETTE.blue}`, borderTop: `12px solid ${PALETTE.blue}`, backgroundColor: PALETTE.card, padding: '18px 30px'}}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Plane size={26} color={PALETTE.blue} />
            <span style={{fontSize: 26, fontWeight: 800, color: PALETTE.blue}}>入境 · 签证</span>
          </div>
          <div data-final-knowledge="visa-categories" style={{...enter(frame, 42), marginTop: 12, fontSize: 22, lineHeight: 1.5}}>
            外交、礼遇、公务、普通四大类；普通签证按
            <Under color={PALETTE.blue}>入境目的</Under>
            分 13 类
          </div>
          <div data-final-knowledge="visa-free-three" style={{...enter(frame, 68), marginTop: 12, fontSize: 22, lineHeight: 1.55}}>
            <Tab color={PALETTE.jade} text="免签三情形" />
            <div style={{marginTop: 6}}>有免签协议 · 持中国居留证 · 过境不越界不超时</div>
          </div>
          <div data-final-knowledge="refusal-no-reason" style={{...enter(frame, 98), marginTop: 12, fontSize: 22, lineHeight: 1.55}}>
            <Tab color={PALETTE.pink} text="拒签四情形" />
            <div style={{marginTop: 6}}>
              强制出境未过年限 · 有"病" · 可能有"害" · 材料有问题 ——
              <Ink color={PALETTE.pinkSoft}>一律无须说明理由</Ink>
            </div>
          </div>
        </div>
        <div
          style={{...enter(frame, 40), position: 'absolute', left: 866, top: 16, width: 780, height: 330, border: `3px solid ${PALETTE.jade}`, borderTop: `12px solid ${PALETTE.jade}`, backgroundColor: PALETTE.card, padding: '18px 30px'}}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <FileCheck size={26} color={PALETTE.jade} />
            <span style={{fontSize: 26, fontWeight: 800, color: PALETTE.jade}}>打击"三非"</span>
          </div>
          <div data-final-knowledge="three-illegals" style={{...enter(frame, 68), marginTop: 12, fontSize: 22, lineHeight: 1.6}}>
            <Tab color={PALETTE.blue} text="非法入境" />
            邀请函件出具者对真实性负责
            <div style={{marginTop: 8}}>
              <Tab color={PALETTE.jade} text="非法居留" />
              住宿登记
              <Under color={PALETTE.jade}>24 小时</Under>
              内
            </div>
            <div style={{marginTop: 8}}>
              <Tab color={PALETTE.pink} text="非法工作" />
              须有工作类证照；留学生经学校同意加注可勤工助学
            </div>
          </div>
        </div>
        <div
          data-final-knowledge="exit-restriction-contrast"
          style={{...enter(frame, 130), position: 'absolute', left: 0, top: 372, width: 1010, height: 150, border: `3px solid ${PALETTE.blue}`, backgroundColor: 'rgba(58,107,156,0.08)', padding: '16px 28px'}}
        >
          <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.blue}}>限制出境：涉刑 VS 涉民</div>
          <div style={{marginTop: 12, fontSize: 22, lineHeight: 1.6}}>
            涉"刑"：
            <Ink color={PALETTE.pinkSoft}>边检可直接限制出境</Ink>
            ；涉"民"：必须
            <Under color={PALETTE.blue}>法院决定</Under>
            不准出境
            <br />
            拖欠劳动报酬：省级以上部门决定 · 定居国外的中国公民凭
            <Sand>护照</Sand>
            证明身份
          </div>
        </div>
        <div
          data-final-knowledge="deportation-contrast"
          style={{...enter(frame, 158), position: 'absolute', left: 1064, top: 372, width: 582, height: 150, border: `3px solid ${PALETTE.pink}`, backgroundColor: PALETTE.pinkSoft, padding: '16px 26px', fontSize: 22, lineHeight: 1.6}}
        >
          <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.pink}}>强制出境对比</div>
          <div style={{marginTop: 10}}>
            遣送出境：县级以上公安或边检 ·
            <Under color={PALETTE.pink}>1—5 年</Under>
            不得入境
            <br />
            驱逐出境：
            <Ink color="rgba(58,107,156,0.18)">公安部最终决定 · 10 年</Ink>
            ，不可诉
          </div>
        </div>
      </div>
    </RegistryShell>
  );
};

const Sand = ({children}: {readonly children: ReactNode}) => (
  <span style={{borderBottom: '3px solid rgba(194,94,110,0.55)', fontWeight: 800}}>{children}</span>
);

export const ExtraditionRefusalScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="extradition-basis" data-final-knowledge="refusal-mnemonic" data-final-knowledge="political-crime-exceptions" data-final-knowledge="ongoing-prosecution-note" */
  const frame = useCurrentFrame();
  const exceptions = ['战争罪', '危害人类罪', '劫机罪', '侵害外交代表罪'];
  return (
    <RegistryShell code={2} station={2} title="引渡：应当拒绝的情形">
      <div
        data-layout="refusal-mnemonic-board-with-exception-cards"
        data-visual-anchor="typographic-sequence"
        data-visual-grammar="eight-refusal-grounds-recite-in-couplets,four-crimes-cannot-wear-the-political-badge"
        data-text-treatments="stamp,soft-highlight,thin-underline"
        data-focal-rule="political-crime-label-unavailable-for-four-international-crimes"
        data-focal-channels="contrast,enclosure,locator"
        style={{position: 'absolute', inset: 0}}
      >
        <div
          data-final-knowledge="extradition-basis"
          style={{...enter(frame, 14), position: 'absolute', left: 0, top: 20, width: 1646, height: 88, border: `2px solid ${PALETTE.line}`, backgroundColor: PALETTE.card, display: 'flex', alignItems: 'center', gap: 30, padding: '0 30px', fontSize: 23, fontWeight: 700}}
        >
          <span>主体：国家</span>
          <span>对象：犯罪嫌疑人或罪犯</span>
          <span>
            基础：
            <Ink color={PALETTE.blueSoft}>条约或互惠承诺</Ink>
          </span>
        </div>
        <div
          data-final-knowledge="refusal-mnemonic"
          style={{...enter(frame, 52), position: 'absolute', left: 0, top: 134, width: 1010, height: 300, border: `3px solid ${PALETTE.pink}`, borderTop: `12px solid ${PALETTE.pink}`, backgroundColor: PALETTE.card, padding: '20px 30px'}}
        >
          <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.pink}}>应当拒绝引渡 · 口诀</div>
          <div style={{marginTop: 18, fontSize: 27, fontWeight: 800, lineHeight: 1.8}}>
            <Sand>国民</Sand>
            <Sand>双重</Sand>
            <Sand>政治犯</Sand>
            ，
            <br />
            <Under color={PALETTE.pink}>审完</Under>
            <Under color={PALETTE.pink}>过期</Under>
            <Under color={PALETTE.pink}>军事犯</Under>
            ，
            <br />
            <Under color={PALETTE.pink}>酷刑</Under>
            <Under color={PALETTE.pink}>程序</Under>
            <Under color={PALETTE.pink}>缺席判</Under>
          </div>
        </div>
        <div
          data-final-knowledge="political-crime-exceptions"
          style={{...enter(frame, 88), position: 'absolute', left: 1064, top: 134, width: 582, height: 300, border: `3px solid ${PALETTE.blue}`, backgroundColor: 'rgba(58,107,156,0.07)', padding: '18px 26px'}}
        >
          <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.blue}}>不得视为政治犯的四罪</div>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 14}}>
            {exceptions.map((text, index) => (
              <span key={text} style={{...enter(frame, 118 + index * 12), border: `2px solid ${PALETTE.blue}`, padding: '8px 16px', fontSize: 22, fontWeight: 700, backgroundColor: PALETTE.card}}>
                {text}
              </span>
            ))}
          </div>
          <div style={{marginTop: 16, fontSize: 21, lineHeight: 1.55, color: PALETTE.ink}}>
            不能以政治犯为由拒绝，但被请求国
            <Ink color={PALETTE.blueSoft}>仍可以拒绝</Ink>
            引渡（适用"或引渡或起诉"）
          </div>
        </div>
        <div
          data-final-knowledge="ongoing-prosecution-note"
          style={{...enter(frame, 170), position: 'absolute', left: 0, top: 462, width: 1646, height: 92, border: `2px dashed ${PALETTE.pink}`, backgroundColor: 'rgba(194,94,110,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 40, fontSize: 23, fontWeight: 800, whiteSpace: 'nowrap'}}
        >
          <span>已经终止刑诉 → 应当拒绝</span>
          <span>正在刑诉 → 可以拒绝</span>
          <span>转引渡：非经原引出国同意不得转引渡 · 罪名特定</span>
        </div>
      </div>
    </RegistryShell>
  );
};

export const ExtraditionProcessScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="process-contact" data-final-knowledge="process-out-review" data-final-knowledge="process-promise-split" data-final-knowledge="process-execute" data-final-knowledge="convention-note" */
  const frame = useCurrentFrame();
  return (
    <RegistryShell code={3} station={3} title="引渡程序：机关链条与引入承诺">
      <div
        data-layout="extradition-desk-chain-with-promise-fork"
        data-visual-anchor="flow-path"
        data-visual-grammar="extradition-files-move-from-foreign-ministry-to-police,promise-commitments-fork-to-two-supreme-organs"
        data-text-treatments="label-block,thin-underline,soft-highlight"
        data-focal-rule="limit-prosecution-goes-supreme-procuratorate-limit-sentencing-goes-supreme-court"
        data-focal-channels="connector,contrast,enclosure"
        style={{position: 'absolute', inset: 0}}
      >
        <div
          data-final-knowledge="process-contact"
          style={{...enter(frame, 14), position: 'absolute', left: 0, top: 30, width: 360, height: 200, border: `3px solid ${PALETTE.blue}`, borderTop: `12px solid ${PALETTE.blue}`, backgroundColor: PALETTE.card, padding: '20px 26px'}}
        >
          <Building size={28} color={PALETTE.blue} />
          <div style={{fontSize: 28, fontWeight: 800, marginTop: 8}}>外交部</div>
          <div style={{fontSize: 22, marginTop: 8, color: PALETTE.muted}}>联系机关</div>
        </div>
        <div
          data-final-knowledge="process-out-review"
          style={{...enter(frame, 56), position: 'absolute', left: 420, top: 30, width: 560, height: 200, border: `3px solid ${PALETTE.jade}`, borderTop: `12px solid ${PALETTE.jade}`, backgroundColor: PALETTE.card, padding: '20px 26px'}}
        >
          <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.jade}}>引出 · 决策</div>
          <div style={{marginTop: 12, fontSize: 23, lineHeight: 1.55}}>
            （最高法指定的）
            <Under color={PALETTE.jade}>高院裁定</Under>
            <br />
            <Under color={PALETTE.jade}>最高法复核</Under>
          </div>
        </div>
        <div
          data-final-knowledge="process-execute"
          style={{...enter(frame, 98), position: 'absolute', left: 1040, top: 30, width: 606, height: 200, border: `3px solid ${PALETTE.pink}`, borderTop: `12px solid ${PALETTE.pink}`, backgroundColor: PALETTE.card, padding: '20px 26px'}}
        >
          <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.pink}}>公安机关</div>
          <div style={{marginTop: 12, fontSize: 23, lineHeight: 1.55}}>执行机关</div>
        </div>
        <div
          data-final-knowledge="process-promise-split"
          style={{...enter(frame, 136), position: 'absolute', left: 0, top: 268, width: 1010, height: 240, border: `3px solid ${PALETTE.blue}`, backgroundColor: 'rgba(58,107,156,0.07)', padding: '18px 30px'}}
        >
          <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.blue}}>引入承诺 · 分头承诺</div>
          <div style={{display: 'flex', gap: 22, marginTop: 16}}>
            <div style={{...enter(frame, 164), flex: 1, border: `3px solid ${PALETTE.jade}`, backgroundColor: PALETTE.jadeSoft, padding: '14px 22px', fontSize: 23, fontWeight: 800}}>
              限制追诉 →
              <Ink color="rgba(46,125,91,0.22)">最高检</Ink>
            </div>
            <div style={{...enter(frame, 186), flex: 1, border: `3px solid ${PALETTE.pink}`, backgroundColor: PALETTE.pinkSoft, padding: '14px 22px', fontSize: 23, fontWeight: 800}}>
              限制量刑 →
              <Ink color="rgba(58,107,156,0.22)">最高法</Ink>
            </div>
          </div>
        </div>
        <div
          data-final-knowledge="convention-note"
          style={{...enter(frame, 210), position: 'absolute', left: 1064, top: 268, width: 582, height: 240, border: `2px dashed ${PALETTE.jade}`, backgroundColor: 'rgba(46,125,91,0.05)', padding: '18px 26px', fontSize: 22, lineHeight: 1.6}}
        >
          <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.jade}}>两公约（反腐 / 打击跨国有组织犯罪）</div>
          <div style={{marginTop: 10}}>
            可作为但不必然产生引渡义务 · 缔约国有
            <Under color={PALETTE.jade}>接收引渡材料</Under>
            的义务
            <br />
            本国国民不引渡 → 承担
            <Ink color={PALETTE.jadeSoft}>或起诉或执行</Ink>
            义务
          </div>
        </div>
        <div style={{...enter(frame, 246), position: 'absolute', left: 0, top: 536, width: 1646, height: 54, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(58,107,156,0.1)', borderTop: `3px solid ${PALETTE.blue}`, fontSize: 24, fontWeight: 800, color: PALETTE.blue, whiteSpace: 'nowrap'}}>
          口诀：外交部联系 · 高院裁最高法核 · 公安执行 · 限追诉最高检 · 限量刑最高法
        </div>
      </div>
    </RegistryShell>
  );
};

export const ProtectionAsylumScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="protection-conditions" data-final-knowledge="protection-basis" data-final-knowledge="asylum-elements" data-final-knowledge="asylum-no-right" data-final-knowledge="diplomatic-asylum" */
  const frame = useCurrentFrame();
  const conditions = ['国家不当行为侵害权利', '国籍继续：保护结束前持续拥有保护国国籍', '用尽当地救济（前提）'];
  const elements = ['准许受迫害外国人入境并居留', '拒绝将其引渡'];
  return (
    <RegistryShell code={4} station={4} title="外交保护 VS 庇护">
      <div
        data-layout="personal-territorial-jurisdiction-pair"
        data-visual-anchor="role-pair"
        data-visual-grammar="protection-and-asylum-split-on-jurisdiction-basis,diplomatic-asylum-stays-outside-the-law"
        data-text-treatments="label-block,thin-underline,soft-highlight"
        data-focal-rule="exhaustion-of-local-remedies-precedes-protection"
        data-focal-channels="contrast,enclosure,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <div
          style={{...enter(frame, 14), position: 'absolute', left: 0, top: 24, width: 780, height: 452, border: `3px solid ${PALETTE.blue}`, borderTop: `12px solid ${PALETTE.blue}`, backgroundColor: PALETTE.card, padding: '22px 30px'}}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
            <ShieldCheck size={28} color={PALETTE.blue} />
            <span style={{fontSize: 30, fontWeight: 800, color: PALETTE.blue}}>外交保护</span>
          </div>
          <div data-final-knowledge="protection-basis" style={{...enter(frame, 44), marginTop: 14, fontSize: 22, lineHeight: 1.5}}>
            法律基础：
            <Under color={PALETTE.blue}>属人管辖权</Under>
            · 对象：境外的本国人 · 无须受害者请求
          </div>
          <div data-final-knowledge="protection-conditions" style={{...enter(frame, 74), marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12}}>
            {conditions.map((text, index) => (
              <div key={text} style={{...enterX(frame, 96 + index * 18, 36), borderLeft: `8px solid ${PALETTE.blue}`, backgroundColor: 'rgba(58,107,156,0.08)', padding: '12px 18px', fontSize: 22, fontWeight: 700}}>
                条件{index + 1} · {text}
              </div>
            ))}
          </div>
        </div>
        <div
          style={{...enter(frame, 40), position: 'absolute', left: 866, top: 24, width: 780, height: 452, border: `3px solid ${PALETTE.jade}`, borderTop: `12px solid ${PALETTE.jade}`, backgroundColor: PALETTE.card, padding: '22px 30px'}}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
            <IdCard size={28} color={PALETTE.jade} />
            <span style={{fontSize: 30, fontWeight: 800, color: PALETTE.jade}}>庇护</span>
          </div>
          <div style={{...enter(frame, 70), marginTop: 14, fontSize: 22, lineHeight: 1.5}}>
            法律基础：
            <Under color={PALETTE.jade}>属地管辖权</Under>
            · 对象：本国境内的外国人
          </div>
          <div data-final-knowledge="asylum-elements" style={{...enter(frame, 100), marginTop: 14, display: 'flex', gap: 14}}>
            {elements.map((text) => (
              <span key={text} style={{flex: 1, border: `2px solid ${PALETTE.jade}`, backgroundColor: PALETTE.jadeSoft, padding: '10px 14px', fontSize: 21, fontWeight: 700}}>
                构成要件 · {text}
              </span>
            ))}
          </div>
          <div data-final-knowledge="asylum-no-right" style={{...enter(frame, 136), marginTop: 14, fontSize: 21, lineHeight: 1.55}}>
            <Tab color={PALETTE.pink} text="无权庇护" />
            <span style={{marginLeft: 12}}>
              战争罪、危害人类罪、劫机罪、侵害外交代表罪等国际罪犯（仍可拒引渡，但不能以政治犯为由）
            </span>
          </div>
        </div>
        <div
          data-final-knowledge="diplomatic-asylum"
          style={{...enter(frame, 176), position: 'absolute', left: 0, top: 500, width: 1646, height: 130, border: `3px solid ${PALETTE.pink}`, backgroundColor: PALETTE.pinkSoft, padding: '16px 30px'}}
        >
          <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.pink, display: 'flex', alignItems: 'center', gap: 12}}>
            <UserX size={24} color={PALETTE.pink} />
            外交庇护（域外庇护）不符合现代国际法
          </div>
          <div style={{marginTop: 10, fontSize: 22, lineHeight: 1.55}}>
            在驻在国使馆、领馆、船舶、飞机内庇护 → 不合法；但使领馆
            <Under color={PALETTE.pink}>不得侵犯</Under>
            ，驻在国不得采取强制措施 ·
            <Ink color="rgba(58,107,156,0.2)">引渡、庇护是国家的权利而非义务</Ink>
          </div>
        </div>
      </div>
    </RegistryShell>
  );
};

export const IndividualsRegimes = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: PALETTE.ledger, overflow: 'hidden'}}
  >
    <TimelineSequence name="01-nationality" {...SCENES.nationality}>
      <NationalityScene />
    </TimelineSequence>
    <TimelineSequence name="02-entry-exit" {...SCENES.entryExit}>
      <EntryExitScene />
    </TimelineSequence>
    <TimelineSequence name="03-extradition-refusal" {...SCENES.extraditionRefusal}>
      <ExtraditionRefusalScene />
    </TimelineSequence>
    <TimelineSequence name="04-extradition-process" {...SCENES.extraditionProcess}>
      <ExtraditionProcessScene />
    </TimelineSequence>
    <TimelineSequence name="05-protection-asylum" {...SCENES.protectionAsylum}>
      <ProtectionAsylumScene />
    </TimelineSequence>
  </AbsoluteFill>
);
