import type {ReactNode} from 'react';
import {
  ArrowDown,
  BookOpen,
  Building2,
  Check,
  CircleDollarSign,
  Clock3,
  Eye,
  FileCheck2,
  Gauge,
  Handshake,
  Landmark,
  LockKeyhole,
  Megaphone,
  MessageSquareText,
  Scale,
  ShieldCheck,
  UserCheck,
  Users,
  X,
} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const C = {
  paper: '#F4F0E6',
  ink: '#18201D',
  red: '#C94F45',
  teal: '#16766F',
  gold: '#E0B547',
  blue: '#315C8A',
  muted: '#D8D1C2',
  white: '#FFFDF7',
  green: '#39735B',
} as const;

const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const enter = (frame: number, start: number, distance = 24) => ({
  opacity: interpolate(frame, [start, start + 16], [0, 1], CLAMP),
  translate: `0 ${interpolate(frame, [start, start + 16], [distance, 0], CLAMP)}px`,
});

const draw = (frame: number, start: number, end: number) =>
  interpolate(frame, [start, end], [0, 1], CLAMP);

const Shell = ({
  code,
  title,
  kicker,
  children,
}: {
  code: string;
  title: string;
  kicker: string;
  children: ReactNode;
}) => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{background: C.paper, color: C.ink, overflow: 'hidden'}}
  >
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage:
          'linear-gradient(#18201D0A 1px,transparent 1px),linear-gradient(90deg,#18201D0A 1px,transparent 1px)',
        backgroundSize: '48px 48px',
      }}
    />
    <header
      style={{
        position: 'absolute',
        left: 72,
        right: 72,
        top: 42,
        height: 94,
        display: 'grid',
        gridTemplateColumns: '110px 1fr auto',
        alignItems: 'center',
        borderBottom: `3px solid ${C.ink}`,
      }}
    >
      <b style={{fontSize: 24, color: C.red}}>专题一 / {code}</b>
      <h1 style={{margin: 0, fontSize: 48, lineHeight: 1, fontWeight: 950, letterSpacing: 0}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 800, color: C.teal}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 160, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>
      {children}
    </main>
  </AbsoluteFill>
);

const principleItems = [
  {name: '合法行政', cue: '合法', note: '权从法来', color: C.blue},
  {name: '合理行政', cue: '合理', note: '裁量有度', color: C.teal},
  {name: '程序正当', cue: '程序正', note: '过程正当', color: C.red},
  {name: '诚实守信', cue: '诚实', note: '信息与信赖', color: C.green},
  {name: '高效便民', cue: '高效', note: '效率与便利', color: '#8B6424'},
  {name: '权责统一', cue: '权责明', note: '有权必有责', color: '#574B8A'},
] as const;

const PrincipleCard = ({index, frame}: {index: number; frame: number}) => {
  const item = principleItems[index];
  const angle = index * (Math.PI / 3) - Math.PI / 2;
  const x = 888 + Math.cos(angle) * 680 - 137;
  const y = 397 + Math.sin(angle) * 302 - 61;
  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: 274,
        minHeight: 122,
        padding: '18px 20px',
        background: C.white,
        border: `4px solid ${item.color}`,
        boxShadow: `8px 8px 0 ${C.muted}`,
        ...enter(frame, 36 + index * 9),
      }}
    >
      <div style={{fontSize: 18, fontWeight: 950, color: item.color}}>原则 {index + 1}</div>
      <b style={{display: 'block', fontSize: 31, marginTop: 3}}>{item.name}</b>
      <span style={{fontSize: 22, fontWeight: 750, color: item.color}}>{item.note}</span>
    </div>
  );
};

export const PrinciplesOverviewScene = () => {
  const frame = useCurrentFrame();
  const lineProgress = draw(frame, 20, 82);
  return (
    <Shell code="01" title="六项原则，是六种审查视角" kicker="先抓首字，再判断归属">
      <div
        data-layout="mnemonic-radial-compass"
        data-visual-anchor="flow-path"
        data-visual-grammar="mnemonic-to-six-principles,administrative-act-to-classification"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="principles-overview"
        data-focal-channels="spatial,connector,icon"
        style={{position: 'absolute', inset: 0}}
      >
        <div
          data-final-knowledge="overview-mnemonic"
          style={{
            position: 'absolute',
            left: 148,
            right: 148,
            top: 10,
            height: 74,
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            background: C.ink,
            color: C.white,
            border: `3px solid ${C.ink}`,
            ...enter(frame, 4, -18),
          }}
        >
          {principleItems.map((item, index) => (
            <div
              key={item.cue}
              style={{
                display: 'grid',
                placeItems: 'center',
                fontSize: 26,
                fontWeight: 950,
                color: index === 2 || index === 5 ? C.gold : C.white,
                borderRight: index < 5 ? '1px solid #FFFDF744' : undefined,
              }}
            >
              {item.cue}
            </div>
          ))}
        </div>
        <svg width="1776" height="760" style={{position: 'absolute', inset: 0}} aria-hidden="true">
          {principleItems.map((_, index) => {
            const angle = index * (Math.PI / 3) - Math.PI / 2;
            const x2 = 888 + Math.cos(angle) * 562;
            const y2 = 397 + Math.sin(angle) * 246;
            return (
              <line
                key={index}
                x1="888"
                y1="397"
                x2={x2}
                y2={y2}
                stroke={index === 2 ? C.red : C.teal}
                strokeWidth="6"
                strokeDasharray={`${lineProgress * 620} 620`}
              />
            );
          })}
        </svg>
        <div
          data-final-knowledge="overview-classification"
          style={{
            position: 'absolute',
            left: 720,
            top: 256,
            width: 336,
            height: 282,
            borderRadius: '50%',
            background: C.ink,
            color: C.white,
            display: 'grid',
            placeContent: 'center',
            textAlign: 'center',
            boxShadow: `0 0 0 16px ${C.gold}66`,
            ...enter(frame, 12),
          }}
        >
          <Landmark size={70} style={{margin: '0 auto 14px'}} />
          <b style={{fontSize: 38}}>题干中的行政行为</b>
          <span style={{fontSize: 24, marginTop: 8, color: C.gold}}>先判断归属哪一原则</span>
        </div>
        <div data-final-knowledge="overview-principle-1"><PrincipleCard index={0} frame={frame} /></div>
        <div data-final-knowledge="overview-principle-2"><PrincipleCard index={1} frame={frame} /></div>
        <div data-final-knowledge="overview-principle-3"><PrincipleCard index={2} frame={frame} /></div>
        <div data-final-knowledge="overview-principle-4"><PrincipleCard index={3} frame={frame} /></div>
        <div data-final-knowledge="overview-principle-5"><PrincipleCard index={4} frame={frame} /></div>
        <div data-final-knowledge="overview-principle-6"><PrincipleCard index={5} frame={frame} /></div>
      </div>
    </Shell>
  );
};

export const LegalityBoundaryScene = () => {
  const frame = useCurrentFrame();
  const gateProgress = draw(frame, 26, 62);
  return (
    <Shell code="02" title="合法行政：一条优先线，一道授权门" kicker="法律优先 / 法律保留">
      <div
        data-layout="law-ceiling-and-authorization-gate"
        data-visual-anchor="boundary"
        data-visual-grammar="valid-law-above-agency,authorization-gate-blocks-extra-power"
        data-text-treatments="external-negation,label-block,thin-underline"
        data-focal-rule="legality-boundary"
        data-focal-channels="enclosure,connector,icon"
        style={{position: 'absolute', inset: 0}}
      >
        <div
          data-final-knowledge="legality-valid-law"
          style={{
            position: 'absolute',
            left: 70,
            right: 70,
            top: 8,
            height: 108,
            background: C.ink,
            color: C.white,
            display: 'grid',
            gridTemplateColumns: '150px 1fr 310px',
            alignItems: 'center',
            padding: '0 34px',
            borderBottom: `10px solid ${C.gold}`,
            ...enter(frame, 6, -20),
          }}
        >
          <BookOpen size={58} />
          <b style={{fontSize: 36}}>现行有效的法律</b>
          <span style={{fontSize: 26, fontWeight: 900, color: C.gold}}>行政机关必须遵守</span>
        </div>

        <section
          data-final-knowledge="legality-priority"
          style={{
            position: 'absolute',
            left: 82,
            top: 180,
            width: 610,
            height: 420,
            background: C.white,
            borderLeft: `14px solid ${C.blue}`,
            padding: '42px 46px',
            ...enter(frame, 22),
          }}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 20}}>
            <ShieldCheck size={64} color={C.blue} />
            <div>
              <span style={{fontSize: 20, fontWeight: 950, color: C.blue}}>不得抵触</span>
              <h2 style={{fontSize: 42, margin: 0}}>法律优先</h2>
            </div>
          </div>
          <div style={{height: 4, background: C.blue, margin: '32px 0 26px', width: `${gateProgress * 100}%`}} />
          <p style={{fontSize: 28, lineHeight: 1.55, margin: 0, fontWeight: 750}}>
            行政机关必须遵守
            <span style={{background: '#E0B54766', padding: '0 8px'}}>现行有效</span>
            的法律
          </p>
        </section>

        <div style={{position: 'absolute', left: 805, top: 164, width: 900, height: 458}}>
          <div
            data-final-knowledge="legality-authorization"
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: 330,
              height: 148,
              display: 'grid',
              placeContent: 'center',
              textAlign: 'center',
              background: C.teal,
              color: C.white,
              border: `4px solid ${C.ink}`,
              ...enter(frame, 36),
            }}
          >
            <FileCheck2 size={48} style={{margin: '0 auto 9px'}} />
            <b style={{fontSize: 30}}>法律授权</b>
          </div>
          <ArrowDown
            size={68}
            color={C.teal}
            style={{position: 'absolute', left: 132, top: 145, opacity: gateProgress}}
          />
          <div
            data-final-knowledge="legality-reservation"
            style={{
              position: 'absolute',
              left: 0,
              top: 220,
              width: 550,
              height: 220,
              border: `12px solid ${C.teal}`,
              borderTop: `54px solid ${C.teal}`,
              background: C.white,
              padding: '34px 36px',
              ...enter(frame, 52),
            }}
          >
            <LockKeyhole size={52} color={C.teal} style={{float: 'left', marginRight: 18}} />
            <h2 style={{fontSize: 40, margin: '0 0 18px'}}>法律保留</h2>
            <p style={{fontSize: 27, lineHeight: 1.45, margin: 0, fontWeight: 750}}>应当依照法律授权活动</p>
          </div>
          <div
            data-final-knowledge="legality-no-extra-power"
            style={{
              position: 'absolute',
              right: 0,
              top: 250,
              width: 300,
              padding: '26px 24px',
              background: '#FFF5F3',
              border: `4px solid ${C.red}`,
              color: C.red,
              textAlign: 'center',
              ...enter(frame, 70, 0),
            }}
          >
            <X size={52} style={{margin: '0 auto 10px'}} />
            <b style={{fontSize: 29}}>不得法外设定权力</b>
          </div>
        </div>
      </div>
    </Shell>
  );
};

export const ReasonablenessScaleScene = () => {
  const frame = useCurrentFrame();
  return (
    <Shell code="03" title="合理行政：裁量依次通过三类检查" kicker="公平 · 相关因素 · 比例三阶">
      <div
        data-layout="fairness-axis-relevance-sieve-proportionality-stairs"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="fairness-split-to-relevance-sieve,relevance-sieve-to-proportionality-stairs"
        data-text-treatments="label-block,soft-highlight,stamp"
        data-focal-rule="reasonableness-filter"
        data-focal-channels="contrast,connector,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <section style={{position: 'absolute', left: 10, top: 28, width: 480, bottom: 24}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
            <Scale size={58} color={C.blue} />
            <h2 style={{fontSize: 36, margin: 0}}>公正、公平</h2>
          </div>
          <div
            data-final-knowledge="fairness-equal"
            style={{marginTop: 36, padding: '26px 28px', background: C.blue, color: C.white, ...enter(frame, 10)}}
          >
            <b style={{fontSize: 30}}>同等情况</b>
            <div style={{fontSize: 25, marginTop: 10}}>同等对待</div>
          </div>
          <div style={{height: 54, width: 5, margin: '0 auto', background: C.ink}} />
          <div
            data-final-knowledge="fairness-different"
            style={{padding: '26px 28px', background: C.white, border: `4px solid ${C.gold}`, ...enter(frame, 24)}}
          >
            <b style={{fontSize: 30}}>不同情况</b>
            <div style={{fontSize: 25, marginTop: 10}}>差别对待</div>
          </div>
        </section>

        <section
          data-final-knowledge="relevant-factors"
          style={{
            position: 'absolute',
            left: 550,
            top: 58,
            width: 410,
            height: 565,
            background: C.ink,
            color: C.white,
            clipPath: 'polygon(0 0,100% 0,83% 100%,17% 100%)',
            padding: '36px 46px',
            textAlign: 'center',
            ...enter(frame, 34),
          }}
        >
          <span style={{fontSize: 19, color: C.gold, fontWeight: 950}}>立法授权目的</span>
          <h2 style={{fontSize: 36, margin: '9px 0 28px'}}>相关因素筛</h2>
          <div style={{padding: 20, background: C.teal, fontSize: 24, fontWeight: 850}}>
            <Check size={32} style={{verticalAlign: 'middle'}} /> 只考虑相关因素
          </div>
          <div style={{fontSize: 42, margin: '16px 0'}}>↓</div>
          <div style={{padding: 20, border: `3px solid ${C.red}`, color: '#FF9B92', fontSize: 24, fontWeight: 850}}>
            <X size={32} style={{verticalAlign: 'middle'}} /> 不考虑无关因素
          </div>
        </section>

        <section style={{position: 'absolute', left: 1015, right: 10, top: 10, bottom: 18}}>
          <div style={{position: 'absolute', left: 0, top: 0, fontSize: 21, fontWeight: 950, color: C.red}}>比例原则 / 三阶递进</div>
          <div
            data-final-knowledge="proportionality-purpose"
            style={{position: 'absolute', left: 0, top: 58, width: 680, padding: '22px 28px', background: C.blue, color: C.white, ...enter(frame, 48)}}
          >
            <b style={{fontSize: 31}}>1 合目的性</b>
            <span style={{fontSize: 24, marginLeft: 26}}>手段必须符合法律目的</span>
          </div>
          <div
            data-final-knowledge="proportionality-suitability"
            style={{position: 'absolute', left: 70, top: 216, width: 610, padding: '22px 28px', background: C.teal, color: C.white, ...enter(frame, 66)}}
          >
            <b style={{fontSize: 31}}>2 适当性</b>
            <div style={{fontSize: 24, marginTop: 9}}>能够达到目的，或者至少有助于目的达成</div>
          </div>
          <div
            data-final-knowledge="proportionality-minimum-harm"
            style={{position: 'absolute', left: 140, top: 394, width: 540, padding: '24px 28px', background: C.gold, border: `4px solid ${C.ink}`, ...enter(frame, 84)}}
          >
            <b style={{fontSize: 31}}>3 损害最小</b>
            <div style={{fontSize: 24, lineHeight: 1.4, marginTop: 9, fontWeight: 750}}>多种手段可选时，选择侵害相对人权益最小者</div>
          </div>
          <div style={{position: 'absolute', left: 25, top: 142, width: 4, height: 414, background: C.red}} />
          {[146, 304, 482].map((top) => (
            <div key={top} style={{position: 'absolute', left: 13, top, width: 28, height: 28, borderRadius: '50%', background: C.red}} />
          ))}
        </section>
      </div>
    </Shell>
  );
};

export const DueProcessTimelineScene = () => {
  const frame = useCurrentFrame();
  const timelineProgress = draw(frame, 24, 90);
  return (
    <Shell code="04" title="程序正当：决定形成前后都有可见约束" kicker="回避 / 参与 / 公开">
      <div
        data-layout="recusal-rail-participation-timeline-publicity-curtain"
        data-visual-anchor="timeline-gate"
        data-visual-grammar="recusal-guardrail,before-during-after,publicity-default-with-three-exceptions"
        data-text-treatments="label-block,external-negation,thin-underline"
        data-focal-rule="due-process-life-cycle"
        data-focal-channels="spatial,connector,icon"
        style={{position: 'absolute', inset: 0}}
      >
        <aside
          data-final-knowledge="recusal-two-types"
          style={{
            position: 'absolute',
            left: 0,
            top: 22,
            width: 330,
            bottom: 20,
            background: C.red,
            color: C.white,
            padding: '34px 30px',
            ...enter(frame, 6, -20),
          }}
        >
          <ShieldCheck size={62} />
          <h2 style={{fontSize: 38, margin: '20px 0 34px'}}>回避</h2>
          <div style={{borderTop: '3px solid #FFFDF777', paddingTop: 22, fontSize: 28, fontWeight: 900}}>任职回避</div>
          <div style={{marginTop: 20, borderTop: '3px solid #FFFDF777', paddingTop: 22, fontSize: 28, fontWeight: 900}}>公务回避</div>
        </aside>

        <section style={{position: 'absolute', left: 390, right: 0, top: 16, height: 420}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
            <Users size={52} color={C.teal} />
            <h2 style={{fontSize: 36, margin: 0}}>公众参与：决定的三个阶段</h2>
          </div>
          <div style={{position: 'absolute', left: 55, right: 55, top: 150, height: 8, background: C.muted}}>
            <div style={{width: `${timelineProgress * 100}%`, height: '100%', background: C.teal}} />
          </div>
          <div
            data-final-knowledge="participation-before"
            style={{position: 'absolute', left: 0, top: 92, width: 390, ...enter(frame, 24)}}
          >
            <div style={{width: 62, height: 62, borderRadius: '50%', background: C.blue, color: C.white, display: 'grid', placeItems: 'center', fontSize: 27, fontWeight: 950}}>前</div>
            <h3 style={{fontSize: 31, margin: '18px 0 8px'}}>告知相对人</h3>
            <div style={{fontSize: 23, color: C.blue, fontWeight: 850}}>先让相对人知悉</div>
          </div>
          <div
            data-final-knowledge="participation-during"
            style={{position: 'absolute', left: 430, top: 92, width: 400, ...enter(frame, 46)}}
          >
            <div style={{width: 62, height: 62, borderRadius: '50%', background: C.teal, color: C.white, display: 'grid', placeItems: 'center', fontSize: 27, fontWeight: 950}}>中</div>
            <h3 style={{fontSize: 31, margin: '18px 0 8px'}}>听取陈述、申辩</h3>
            <div style={{fontSize: 23, color: C.teal, fontWeight: 850}}>或者举行听证</div>
          </div>
          <div
            data-final-knowledge="participation-after"
            style={{position: 'absolute', left: 865, top: 92, width: 440, ...enter(frame, 68)}}
          >
            <div style={{width: 62, height: 62, borderRadius: '50%', background: C.gold, color: C.ink, display: 'grid', placeItems: 'center', fontSize: 27, fontWeight: 950}}>后</div>
            <h3 style={{fontSize: 31, margin: '18px 0 8px'}}>行政机关说明理由</h3>
            <div style={{fontSize: 23, color: '#765314', fontWeight: 850}}>告知相对人复议或者起诉权</div>
          </div>
        </section>

        <section
          data-final-knowledge="publicity-rule"
          style={{
            position: 'absolute',
            left: 390,
            right: 0,
            bottom: 18,
            height: 246,
            background: C.blue,
            color: C.white,
            display: 'grid',
            gridTemplateColumns: '285px 1fr',
            alignItems: 'center',
            padding: '28px 34px',
            ...enter(frame, 88),
          }}
        >
          <div>
            <Eye size={58} />
            <h2 style={{fontSize: 35, margin: '12px 0 0'}}>行政公开</h2>
            <div style={{fontSize: 23, color: C.gold, fontWeight: 900}}>实施行政管理原则上公开</div>
          </div>
          <div>
            <div style={{fontSize: 20, fontWeight: 950, marginBottom: 13}}>依法不公开的例外</div>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14}}>
              {['国家秘密', '依法保护的商业秘密', '依法保护的个人隐私'].map((label) => (
                <div key={label} style={{padding: '20px 16px', background: C.white, color: C.ink, fontSize: 22, fontWeight: 850, borderTop: `6px solid ${C.red}`}}>{label}</div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Shell>
  );
};

export const GoodFaithVaultScene = () => {
  const frame = useCurrentFrame();
  const connectorProgress = draw(frame, 30, 70);
  return (
    <Shell code="05" title="诚实守信：信息真实，既有信赖受保护" kicker="信息真实 / 信赖保护">
      <div
        data-layout="truth-document-and-reliance-protection-file"
        data-visual-anchor="flow-target"
        data-visual-grammar="agency-information-to-truth-seal,reliance-elements-to-two-protection-methods"
        data-text-treatments="stamp,label-block,soft-highlight"
        data-focal-rule="good-faith-protection"
        data-focal-channels="enclosure,icon,connector"
        style={{position: 'absolute', inset: 0}}
      >
        <section
          data-final-knowledge="truth-information"
          style={{position: 'absolute', left: 12, top: 72, width: 500, height: 500, ...enter(frame, 8)}}
        >
          <div style={{position: 'absolute', left: 0, top: 0, width: 170, height: 170, borderRadius: '50%', background: C.blue, color: C.white, display: 'grid', placeItems: 'center'}}>
            <Building2 size={82} />
          </div>
          <div style={{position: 'absolute', left: 128, top: 105, width: 360, padding: '32px 34px', background: C.white, border: `4px solid ${C.ink}`, boxShadow: `12px 12px 0 ${C.muted}`}}>
            <FileCheck2 size={52} color={C.teal} />
            <h2 style={{fontSize: 38, margin: '14px 0 22px'}}>公布的信息</h2>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 10}}>
              {['全面', '准确', '真实'].map((word) => (
                <span key={word} style={{padding: '12px 18px', background: C.teal, color: C.white, fontSize: 27, fontWeight: 950}}>{word}</span>
              ))}
            </div>
          </div>
        </section>

        <svg width="1776" height="760" style={{position: 'absolute', inset: 0}} aria-hidden="true">
          <path d="M520 350 C610 350 620 350 710 350" fill="none" stroke={C.gold} strokeWidth="10" strokeDasharray={`${connectorProgress * 260} 260`} />
          <path d="M690 330 L725 350 L690 370" fill="none" stroke={C.gold} strokeWidth="10" opacity={connectorProgress} />
        </svg>

        <section style={{position: 'absolute', left: 720, right: 10, top: 26, bottom: 24, border: `8px solid ${C.ink}`, background: C.muted, padding: '28px 34px'}}>
          <div
            data-final-knowledge="reliance-principle"
            style={{display: 'flex', alignItems: 'center', gap: 18, ...enter(frame, 30)}}
          >
            <Handshake size={60} color={C.red} />
            <div>
              <span style={{fontSize: 19, fontWeight: 950, color: C.red}}>诚实守信的第二支</span>
              <h2 style={{fontSize: 42, margin: 0}}>信赖保护</h2>
            </div>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: '1fr 100px 1fr', alignItems: 'center', gap: 20, marginTop: 36}}>
            <div
              data-final-knowledge="reliance-elements"
              style={{height: 360, background: C.white, borderTop: `12px solid ${C.red}`, padding: '28px 30px', ...enter(frame, 48)}}
            >
              <div style={{fontSize: 20, color: C.red, fontWeight: 950}}>构成要件</div>
              <div style={{display: 'flex', alignItems: 'center', gap: 16, marginTop: 28}}>
                <FileCheck2 size={46} color={C.red} />
                <b style={{fontSize: 30}}>1. 授益行为</b>
              </div>
              <div style={{display: 'flex', alignItems: 'flex-start', gap: 16, marginTop: 32}}>
                <UserCheck size={46} color={C.red} />
                <div style={{fontSize: 28, lineHeight: 1.45, fontWeight: 800}}>2. 有信赖利益<br/><span style={{background: '#E0B54766'}}>且该利益值得保护</span></div>
              </div>
            </div>
            <div style={{height: 5, background: C.ink, position: 'relative'}}>
              <div style={{position: 'absolute', right: -2, top: -12, borderLeft: `24px solid ${C.ink}`, borderTop: '14px solid transparent', borderBottom: '14px solid transparent'}} />
            </div>
            <div
              data-final-knowledge="reliance-methods"
              style={{height: 360, background: C.teal, color: C.white, padding: '28px 30px', ...enter(frame, 68)}}
            >
              <div style={{fontSize: 20, color: C.gold, fontWeight: 950}}>保护方式</div>
              <div style={{marginTop: 28, padding: '24px 22px', border: `3px solid ${C.white}`, fontSize: 30, fontWeight: 900}}>存续保护</div>
              <div style={{display: 'grid', placeItems: 'center', height: 54, fontSize: 28}}>或</div>
              <div style={{padding: '24px 22px', border: `3px solid ${C.gold}`, color: C.gold, fontSize: 30, fontWeight: 900}}>财产保护</div>
            </div>
          </div>
        </section>
      </div>
    </Shell>
  );
};

export const EfficiencyResponsibilityScene = () => {
  const frame = useCurrentFrame();
  return (
    <Shell code="06" title="高效便民与权责统一：服务向前，责任跟上" kicker="两股方向不同的行政力量">
      <div
        data-layout="service-current-and-power-responsibility-engine"
        data-visual-anchor="role-pair"
        data-visual-grammar="efficiency-to-public,power-means-to-agency-liability,three-exam-signals"
        data-text-treatments="label-block,stamp,thin-underline"
        data-focal-rule="efficiency-responsibility"
        data-focal-channels="contrast,icon,connector"
        style={{position: 'absolute', inset: 0}}
      >
        <section style={{position: 'absolute', left: 0, top: 6, width: 820, bottom: 18}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 18}}>
            <Gauge size={58} color={C.teal} />
            <h2 style={{fontSize: 40, margin: 0}}>高效便民</h2>
          </div>
          <div style={{position: 'absolute', left: 42, top: 110, width: 12, height: 470, background: C.teal}} />
          <div
            data-final-knowledge="efficiency-deadline-duty"
            style={{position: 'absolute', left: 95, top: 92, width: 660, padding: '24px 28px', background: C.white, borderLeft: `10px solid ${C.teal}`, ...enter(frame, 10)}}
          >
            <Clock3 size={44} color={C.teal} style={{float: 'left', marginRight: 18}} />
            <b style={{fontSize: 30}}>行政效率</b>
            <div style={{fontSize: 24, marginTop: 9}}>遵守法定时限，积极履行法定职责</div>
          </div>
          <div
            data-final-knowledge="efficiency-convenience"
            style={{position: 'absolute', left: 95, top: 290, width: 660, padding: '24px 28px', background: C.teal, color: C.white, ...enter(frame, 30)}}
          >
            <Users size={44} style={{float: 'left', marginRight: 18}} />
            <b style={{fontSize: 30}}>便利当事人</b>
            <div style={{fontSize: 24, marginTop: 9}}>方便公民、法人和其他组织</div>
          </div>
          <div
            data-final-knowledge="efficiency-exam-signal"
            style={{position: 'absolute', left: 95, top: 492, width: 660, padding: '22px 28px', background: C.gold, border: `4px solid ${C.ink}`, fontSize: 25, fontWeight: 900, ...enter(frame, 48)}}
          >
            统一办理、联合办理 → 高效便民
          </div>
        </section>

        <section style={{position: 'absolute', left: 875, right: 0, top: 6, bottom: 18, background: C.ink, color: C.white, padding: '30px 34px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 18}}>
            <Scale size={58} color={C.gold} />
            <h2 style={{fontSize: 40, margin: 0}}>权责统一</h2>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 70px 1fr', alignItems: 'center', gap: 18, marginTop: 30}}>
            <div
              data-final-knowledge="power-effectiveness"
              style={{height: 190, padding: '24px', border: `4px solid ${C.gold}`, ...enter(frame, 18)}}
            >
              <b style={{fontSize: 29, color: C.gold}}>行政效能</b>
              <div style={{fontSize: 23, lineHeight: 1.45, marginTop: 12}}>法律、法规赋予实现目的所需的相应执法手段</div>
            </div>
            <div style={{fontSize: 46, textAlign: 'center', color: C.gold}}>⇄</div>
            <div
              data-final-knowledge="power-liability"
              style={{height: 190, padding: '24px', border: `4px solid ${C.red}`, ...enter(frame, 36)}}
            >
              <b style={{fontSize: 29, color: '#FF9B92'}}>行政责任</b>
              <div style={{fontSize: 23, lineHeight: 1.45, marginTop: 12}}>行政机关违法或者不当行使职权，依法承担法律责任</div>
            </div>
          </div>
          <div style={{fontSize: 20, fontWeight: 950, color: C.gold, marginTop: 30}}>题干出现这些信号，联想到权责统一</div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14, marginTop: 14}}>
            <div data-final-knowledge="responsibility-signal-compensation" style={{padding: '18px 16px', background: C.white, color: C.ink, ...enter(frame, 54)}}>
              <CircleDollarSign size={38} color={C.red} />
              <b style={{display: 'block', fontSize: 23, marginTop: 8}}>主动赔偿</b>
              <span style={{fontSize: 21}}>违法行政造成损失</span>
            </div>
            <div data-final-knowledge="responsibility-signal-accountability" style={{padding: '18px 16px', background: C.white, color: C.ink, ...enter(frame, 66)}}>
              <UserCheck size={38} color={C.red} />
              <b style={{display: 'block', fontSize: 23, marginTop: 8}}>责任追究</b>
              <span style={{fontSize: 21}}>主要负责人、直接责任人员</span>
            </div>
            <div data-final-knowledge="responsibility-signal-supervision" style={{padding: '18px 16px', background: C.white, color: C.ink, ...enter(frame, 78)}}>
              <Eye size={38} color={C.red} />
              <b style={{display: 'block', fontSize: 23, marginTop: 8}}>依法监督</b>
              <span style={{fontSize: 21}}>行政机关行使权力</span>
            </div>
          </div>
        </section>
      </div>
    </Shell>
  );
};

const examCases = [
  {
    signal: '行政许可：统一办理、联合办理',
    verdict: '错误',
    correct: '体现高效便民',
    reject: '不是程序正当',
    icon: Gauge,
  },
  {
    signal: '非因法定事由并经法定程序，不得撤销、变更生效决定',
    verdict: '正确',
    correct: '诚实守信中的信赖保护',
    reject: '结论成立',
    icon: Handshake,
  },
  {
    signal: '参与审查申请材料者不能参加听证会',
    verdict: '错误',
    correct: '可以参加，但不能担任听证主持人',
    reject: '“不能参加”说法过宽',
    icon: MessageSquareText,
  },
  {
    signal: '非法使用食品添加剂：一律按法定最高标准处罚',
    verdict: '错误',
    correct: '违反合理行政中的比例原则',
    reject: '不是权责统一',
    icon: Scale,
  },
] as const;

const ExamCaseCard = ({index, frame}: {index: number; frame: number}) => {
  const item = examCases[index];
  const Icon = item.icon;
  const top = index % 2 === 0 ? 32 : 404;
  const markerTop = index % 2 === 0 ? 366 : 374;
  return (
    <div style={{position: 'absolute', left: 18 + index * 438, top, width: 402}}>
      <div
        style={{
          minHeight: 292,
          background: index === 1 ? C.ink : C.white,
          color: index === 1 ? C.white : C.ink,
          border: `4px solid ${index === 1 ? C.ink : C.teal}`,
          padding: '20px 22px',
          ...enter(frame, 16 + index * 18, index % 2 === 0 ? -22 : 22),
        }}
      >
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Icon size={42} color={index === 1 ? C.gold : C.teal} />
          <span style={{padding: '8px 14px', background: item.verdict === '正确' ? C.green : C.red, color: C.white, fontSize: 23, fontWeight: 950}}>{item.verdict}</span>
        </div>
        <div style={{fontSize: 23, lineHeight: 1.38, fontWeight: 800, marginTop: 14, minHeight: 66}}>{item.signal}</div>
        <div style={{fontSize: 25, lineHeight: 1.35, fontWeight: 950, color: index === 1 ? C.gold : C.teal, marginTop: 14}}>{item.correct}</div>
        <div style={{fontSize: 21, marginTop: 9, color: index === 1 ? C.white : C.red, fontWeight: 750}}>{item.reject}</div>
      </div>
      <div style={{position: 'absolute', left: 180, top: markerTop - top, width: 30, height: 30, borderRadius: '50%', background: C.red, border: `6px solid ${C.paper}`}} />
    </div>
  );
};

export const ExamTriageScene = () => {
  const frame = useCurrentFrame();
  const routeProgress = draw(frame, 14, 92);
  return (
    <Shell code="07" title="考场分诊：四个表述，沿信号校正归属" kicker="判断题不是看关键词，是看法律关系">
      <div
        data-layout="four-stop-diagnostic-route"
        data-visual-anchor="flow-path"
        data-visual-grammar="statement-to-verdict-to-correct-principle,four-distinct-misclassification-repairs"
        data-text-treatments="stamp,external-negation,soft-highlight"
        data-focal-rule="exam-triage"
        data-focal-channels="motion,connector,contrast"
        style={{position: 'absolute', inset: 0}}
      >
        <svg width="1776" height="760" style={{position: 'absolute', inset: 0}} aria-hidden="true">
          <path d="M60 385 H1710" stroke={C.ink} strokeWidth="12" fill="none" />
          <path d="M60 385 H1710" stroke={C.gold} strokeWidth="12" fill="none" strokeDasharray={`${routeProgress * 1650} 1650`} />
        </svg>
        <div data-final-knowledge="exam-case-1"><ExamCaseCard index={0} frame={frame} /></div>
        <div data-final-knowledge="exam-case-2"><ExamCaseCard index={1} frame={frame} /></div>
        <div data-final-knowledge="exam-case-3"><ExamCaseCard index={2} frame={frame} /></div>
        <div data-final-knowledge="exam-case-4"><ExamCaseCard index={3} frame={frame} /></div>
        <div
          data-final-knowledge="exam-responsibility-rule"
          style={{
            position: 'absolute',
            left: 478,
            right: 478,
            top: 330,
            height: 110,
            display: 'grid',
            placeItems: 'center',
            textAlign: 'center',
            background: C.red,
            color: C.white,
            border: `6px solid ${C.paper}`,
            fontSize: 24,
            lineHeight: 1.35,
            fontWeight: 900,
            padding: '0 24px',
            ...enter(frame, 94, 0),
          }}
        >
          权责统一题通常附加“责任”信号：赔偿、责任追究、依法监督
        </div>
      </div>
    </Shell>
  );
};

export const AdministrativePrinciplesCompass = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-overview" start={SCENES['six-principles-overview'].start} duration={SCENES['six-principles-overview'].duration}>
      <PrinciplesOverviewScene />
    </TimelineSequence>
    <TimelineSequence name="02-legality" start={SCENES['legality-boundary'].start} duration={SCENES['legality-boundary'].duration}>
      <LegalityBoundaryScene />
    </TimelineSequence>
    <TimelineSequence name="03-reasonableness" start={SCENES['reasonableness-scale'].start} duration={SCENES['reasonableness-scale'].duration}>
      <ReasonablenessScaleScene />
    </TimelineSequence>
    <TimelineSequence name="04-process" start={SCENES['due-process-timeline'].start} duration={SCENES['due-process-timeline'].duration}>
      <DueProcessTimelineScene />
    </TimelineSequence>
    <TimelineSequence name="05-good-faith" start={SCENES['good-faith-vault'].start} duration={SCENES['good-faith-vault'].duration}>
      <GoodFaithVaultScene />
    </TimelineSequence>
    <TimelineSequence name="06-efficiency" start={SCENES['efficiency-responsibility'].start} duration={SCENES['efficiency-responsibility'].duration}>
      <EfficiencyResponsibilityScene />
    </TimelineSequence>
    <TimelineSequence name="07-triage" start={SCENES['exam-triage'].start} duration={SCENES['exam-triage'].duration}>
      <ExamTriageScene />
    </TimelineSequence>
  </AbsoluteFill>
);
