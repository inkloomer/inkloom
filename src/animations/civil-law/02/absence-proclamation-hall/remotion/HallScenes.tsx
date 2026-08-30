import type {CSSProperties, ReactNode} from 'react';
import {Briefcase, Clock, FileSearch, Gavel, Home, Key, Megaphone, Scale} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const PLAYER_CONTROL_SAFE_BOTTOM = 160;

export const C = {
  ash: '#37322E',
  ashMid: '#4A443D',
  fog: '#8B8378',
  fogPale: '#DED7CA',
  bone: '#F2ECDD',
  boneDim: '#E4DCC9',
  boneEdge: '#B8AE9B',
  rust: '#A65134',
  rustPale: '#EDD3C4',
  moss: '#5E7D54',
  mossPale: '#DCE5D2',
  plum: '#6B4E6E',
  plumPale: '#E2D3E2',
  ink: '#2A2723',
  inkSoft: '#736C61',
} as const;

export const prog = (frame: number, delay: number, span = 18) => interpolate(frame, [delay, delay + span], [0, 1], CLAMP);

export const Enter = ({
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

export const Shell = ({children, code, kicker, title}: {readonly children: ReactNode; readonly code: string; readonly kicker: string; readonly title: string}) => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{
      backgroundColor: C.ash,
      color: C.bone,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(0deg, transparent 0 126px, rgba(0, 0, 0, 0.14) 126px 129px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.fog}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.fogPale}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.ashMid, borderLeft: `8px solid ${C.rust}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.bone, letterSpacing: 2}}>民法 · 第2讲 · {code}</span>
    </div>
    <header
      style={{
        position: 'absolute',
        left: 290,
        right: 72,
        top: 34,
        height: 88,
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        alignItems: 'center',
        gap: 22,
        borderBottom: `2px solid ${C.fog}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.bone}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.fogPale, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

export const Plank = ({children, tone = C.rust}: {readonly children: ReactNode; readonly tone?: string}) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '5px 14px',
      backgroundColor: tone,
      border: `2px solid ${C.fog}`,
      boxShadow: `0 2px 0 ${C.ash}`,
      color: C.bone,
      fontSize: 22,
      fontWeight: 900,
      letterSpacing: 2,
    }}
  >
    {children}
  </span>
);

export const Seal = ({children, delay = 0, size = 24, tone = C.rust}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '7px 15px',
        border: `5px solid ${tone}`,
        color: tone,
        backgroundColor: `${tone}10`,
        fontSize: size,
        fontWeight: 950,
        letterSpacing: 2,
        opacity: p,
        scale: 0.86 + p * 0.14,
        rotate: '-3deg',
      }}
    >
      {children}
    </span>
  );
};

export const Under = ({children, color = C.rust, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
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
          height: 4,
          backgroundColor: color,
          scale: `${prog(frame, delay, 22)} 1`,
          transformOrigin: 'left center',
        }}
      />
    </span>
  );
};

export const Soft = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2b`, padding: '2px 9px'}}>{children}</span>
);

export const Chip = ({children, tone = C.boneEdge, toneBg = C.boneDim, ink = C.ink}: {readonly children: ReactNode; readonly tone?: string; readonly toneBg?: string; readonly ink?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${tone}`, backgroundColor: toneBg, padding: '5px 12px', fontSize: 22, fontWeight: 900, color: ink, whiteSpace: 'nowrap'}}>{children}</span>
);

export const MissingPersonScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="missing-definition" data-final-knowledge="petitioner-scope" data-final-knowledge="notice-flow" data-final-knowledge="verdict-rule"
     data-stateful-source="missing-poster-ticket" data-stateful-terminal="missing-poster-ticket" */
  const ticketTravel = prog(frame, 250, 44);
  const ticketX = interpolate(ticketTravel, [0, 1], [260, 1130], CLAMP);
  return (
    <Shell code="01" kicker="宣告失踪" title="宣告失踪：寻人公告与财产代管">
      <div
        data-layout="missing-person-proclamation-bench"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="declaration-needs-two-years-absence-and-an-interested-applicant,identity-and-property-interested-parties-may-petition-the-local-court,three-month-public-notice-precedes-the-missing-verdict,missing-declaration-only-appoints-a-custodian-without-changing-relations"
        data-focal-rule="two-years-gone-three-months-notice-then-a-custodian-not-a-new-life"
        data-focal-channels="connector,motion,contrast,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="missing-definition" style={{position: 'absolute', left: 40, top: 0, width: 1696, height: 96}}>
          <div style={{height: '100%', backgroundColor: C.bone, border: `3px solid ${C.fog}`, display: 'flex', alignItems: 'center', gap: 16, padding: '0 22px'}}>
            <FileSearch size={32} color={C.rust} strokeWidth={2.4} />
            <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
              <div style={{fontSize: 23, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
                宣告失踪＝下落不明<Under delay={40}>满法定期间</Under> → 利害关系人申请 → 法院宣告
              </div>
              <div style={{fontSize: 20.5, fontWeight: 900, color: C.inkSoft}}>制度目的：设立<Soft color={C.rust}>财产代管人</Soft>，让陷于停滞的财产法律关系得以正常运行</div>
            </div>
          </div>
        </Enter>
        <div data-final-knowledge="notice-flow" style={{position: 'absolute', left: 40, top: 112, width: 1696, height: 124}}>
          {[
            {left: 0, w: 520, tone: C.moss, icon: <FileSearch size={26} color={C.moss} strokeWidth={2.4} />, title: '① 申请席', text: '利害关系人 → 失踪人住所地基层法院', tag: '不告不理'},
            {left: 588, w: 520, tone: C.plum, icon: <Megaphone size={26} color={C.plum} strokeWidth={2.4} />, title: '② 公告栏', text: '法院发出寻找下落不明人公告', tag: '公告期 3 个月'},
            {left: 1176, w: 520, tone: C.rust, icon: <Gavel size={26} color={C.rust} strokeWidth={2.4} />, title: '③ 判决席', text: '公告期满仍下落不明 → 失踪宣告判决', tag: '公告期满'},
          ].map((step, stepIndex) => (
            <Enter key={step.title} delay={30 + stepIndex * 22} from="up" style={{position: 'absolute', left: step.left, top: 0, width: step.w, height: 124}}>
              <div style={{height: '100%', backgroundColor: C.bone, border: `3px solid ${step.tone}`, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 6, padding: '0 16px'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 9}}>
                  {step.icon}
                  <span style={{fontSize: 22, fontWeight: 950, color: C.ink}}>{step.title}</span>
                  <Chip tone={step.tone} toneBg={C.boneDim}>{step.tag}</Chip>
                </div>
                <span style={{fontSize: 20, fontWeight: 900, color: C.inkSoft, lineHeight: 1.4}}>{step.text}</span>
              </div>
            </Enter>
          ))}
          <div style={{position: 'absolute', left: 528, top: 58, width: 52, height: 4, backgroundColor: C.fog}} />
          <div style={{position: 'absolute', left: 1116, top: 58, width: 52, height: 4, backgroundColor: C.fog}} />
        </div>
        <Enter delay={100} from="up" marker="petitioner-scope" style={{position: 'absolute', left: 40, top: 252, width: 1696, height: 220}}>
          <div style={{height: '100%', backgroundColor: C.bone, border: `3px solid ${C.fog}`, display: 'flex', gap: 0, padding: '12px 18px'}}>
            <span style={{writingMode: 'vertical-rl', fontSize: 22, fontWeight: 950, color: C.ink, letterSpacing: 4, flexShrink: 0}}>利害关系人</span>
            <div style={{flex: 1, display: 'flex', gap: 14, paddingLeft: 14}}>
              <div style={{flex: 1.15, backgroundColor: C.boneDim, border: `2px solid ${C.moss}`, padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 7}}>
                <span style={{fontSize: 21, fontWeight: 950, color: C.ink}}>身份利害关系人</span>
                <span style={{fontSize: 20, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>· 近亲属：配偶·父母·子女 / 祖父母·外祖父母·孙子女·外孙子女·兄弟姐妹</span>
                <span style={{fontSize: 20, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>· 尽了<Soft color={C.moss}>主要赡养义务</Soft>的丧偶儿媳 · 丧偶女婿</span>
                <span style={{fontSize: 20, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>· 代位继承人</span>
              </div>
              <div style={{flex: 1, backgroundColor: C.boneDim, border: `2px solid ${C.plum}`, padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 7}}>
                <span style={{fontSize: 21, fontWeight: 950, color: C.ink}}>财产关系人</span>
                <span style={{fontSize: 20, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>· 原则：有民事权利义务关系的债权人·债务人·合伙人 → <Soft color={C.moss}>可以</Soft>申请</span>
                <span style={{fontSize: 20, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>· 例外：<Under color={C.plum} delay={130}>不申请也不影响</Under>其权利行使·义务履行的 → <Soft color={C.rust}>不可以</Soft></span>
              </div>
            </div>
          </div>
        </Enter>
        <Enter delay={150} from="up" marker="verdict-rule" style={{position: 'absolute', left: 40, top: 488, width: 1696, height: 180}}>
          <div style={{height: '100%', backgroundColor: C.boneDim, border: `3px solid ${C.rust}`, display: 'flex', alignItems: 'center', gap: 20, padding: '0 24px'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: 10, flex: 1}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <Plank tone={C.rust}>后果界限</Plank>
                <Chip tone={C.rust} toneBg={C.rustPale} ink={C.rust}>失踪后果轻</Chip>
              </div>
              <div style={{fontSize: 22, fontWeight: 900, color: C.ink, lineHeight: 1.55}}>
                首要后果＝设立<Soft color={C.rust}>财产代管人</Soft>：既<Under color={C.rust} delay={170}>不变更</Under>财产关系，也<Under color={C.rust} delay={190}>不变更</Under>身份关系——婚姻一方被宣告失踪，仅可构成<Soft color={C.plum}>离婚的法定事由</Soft>
              </div>
            </div>
            <span data-stateful-terminal="missing-poster-ticket" style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${C.fog}`, backgroundColor: C.bone, padding: '6px 12px', fontSize: 21, fontWeight: 950, color: C.ink, opacity: prog(frame, 330, 14), flexShrink: 0}}>
              🔔 失踪宣告落槌 ✓ 只设代管人
            </span>
          </div>
        </Enter>
        <Enter delay={200} from="up" style={{position: 'absolute', left: 40, top: 684, width: 1696, height: 84}}>
          <div style={{height: '100%', backgroundColor: C.ashMid, border: `2px solid ${C.fog}`, display: 'flex', alignItems: 'center', gap: 18, padding: '0 26px'}}>
            <span style={{padding: '4px 13px', backgroundColor: C.fog, color: C.ash, fontSize: 21, fontWeight: 900, letterSpacing: 2}}>时限口诀</span>
            <Clock size={26} color={C.fogPale} strokeWidth={2.4} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.bone}}>
              下落不明满<Soft color={C.rustPale}>2 年</Soft> → 申请 → 公告<Soft color={C.rustPale}>3 个月</Soft> → 期满仍下落不明 → 宣告失踪（2Y＋3M）
            </span>
          </div>
        </Enter>
        <div data-stateful-source="missing-poster-ticket" style={{position: 'absolute', left: ticketX, top: 132, opacity: prog(frame, 220, 14) * (1 - prog(frame, 316, 14)), visibility: frame >= 334 ? 'hidden' : 'visible'}}>
          <Chip tone={C.rust} toneBg={C.bone}>寻人启事票 · 下落不明已满 2 年</Chip>
        </div>
      </div>
    </Shell>
  );
};

export const PropertyCustodianScene = () => {
  /* data-final-knowledge="custodian-role" data-final-knowledge="disposal-boundary" data-final-knowledge="liability-rule" data-final-knowledge="house-case-verdicts" */
  return (
    <Shell code="02" kicker="财产代管" title="财产代管人：代管职责与处分边界">
      <div
        data-layout="custodian-desk-with-dual-boundary"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,stamp,soft-highlight,thin-underline"
        data-visual-grammar="custodian-exercises-claims-and-performs-debts-as-a-party,custodian-may-dispose-only-for-custody-duties,custodian-liability-requires-intent-or-gross-negligence,missing-declaration-changes-neither-property-nor-status-relations"
        data-focal-rule="a-party-not-a-proxy-dispose-only-for-duty-and-answer-for-fault"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="custodian-role" style={{position: 'absolute', left: 40, top: 0, width: 832, height: 280}}>
          <div style={{height: '100%', backgroundColor: C.bone, border: `3px solid ${C.moss}`, display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 18px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <Key size={30} color={C.moss} strokeWidth={2.4} />
              <Plank tone={C.moss}>代管职责</Plank>
            </div>
            <div style={{fontSize: 21.5, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
              行使失踪人的<Soft color={C.moss}>债权</Soft> · 履行失踪人的<Soft color={C.moss}>债务</Soft>
            </div>
            <div style={{fontSize: 21, fontWeight: 900, color: C.ink, lineHeight: 1.55}}>
              因代管职责涉诉 → 以<Under color={C.moss} delay={60}>自己名义</Under>为<Soft color={C.plum}>原告 / 被告</Soft>（是当事人本身，不是代理人）
            </div>
            <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 900, color: C.inkSoft}}>性质：≠ 财产保管人</div>
          </div>
        </Enter>
        <Enter delay={24} from="right" marker="disposal-boundary" style={{position: 'absolute', left: 904, top: 0, width: 832, height: 280}}>
          <div style={{height: '100%', backgroundColor: C.bone, border: `3px solid ${C.rust}`, display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 18px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <Briefcase size={30} color={C.rust} strokeWidth={2.4} />
              <Plank tone={C.rust}>处分权边界</Plank>
            </div>
            <div style={{fontSize: 21.5, fontWeight: 900, color: C.ink, lineHeight: 1.55, backgroundColor: C.mossPale, border: `2px solid ${C.moss}`, padding: '9px 13px'}}>
              出于<Under color={C.moss} delay={70}>代管职责需要</Under> → <span style={{color: C.moss}}>有权处分</span> ✓
            </div>
            <div style={{fontSize: 21.5, fontWeight: 900, color: C.ink, lineHeight: 1.55, backgroundColor: C.rustPale, border: `2px solid ${C.rust}`, padding: '9px 13px'}}>
              与代管职责<Soft color={C.rust}>无关</Soft> → <span style={{color: C.rust}}>无权处分</span> ✗
            </div>
            <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 900, color: C.inkSoft}}>「有权处分」的前提一定＝出于职责需要</div>
          </div>
        </Enter>
        <Enter delay={60} from="left" marker="liability-rule" style={{position: 'absolute', left: 40, top: 296, width: 832, height: 260}}>
          <div style={{height: '100%', backgroundColor: C.boneDim, border: `3px solid ${C.plum}`, display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 18px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <Scale size={30} color={C.plum} strokeWidth={2.4} />
              <Plank tone={C.plum}>违反职责的后果</Plank>
            </div>
            <div style={{fontSize: 21, fontWeight: 900, color: C.ink, lineHeight: 1.55}}>
              ① 失踪人的其他利害关系人可请求法院<Under color={C.plum} delay={100}>变更</Under>财产代管人
            </div>
            <div style={{fontSize: 21, fontWeight: 900, color: C.ink, lineHeight: 1.55}}>
              ② 因<Soft color={C.rust}>故意 / 重大过失</Soft>致代管财产损害 → 承担<Seal delay={150} size={18}>赔偿责任</Seal>
            </div>
            <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 900, color: C.inkSoft}}>代管＝无偿 → 责任条件宽（类推无因管理 · 无偿合同）</div>
          </div>
        </Enter>
        <Enter delay={84} from="right" marker="house-case-verdicts" style={{position: 'absolute', left: 904, top: 296, width: 832, height: 260}}>
          <div style={{height: '100%', backgroundColor: C.boneDim, border: `3px solid ${C.fog}`, display: 'flex', flexDirection: 'column', gap: 8, padding: '13px 18px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <Home size={30} color={C.ink} strokeWidth={2.4} />
              <Plank tone={C.fog}>夫妻房屋案 · 三问</Plank>
            </div>
            <div style={{fontSize: 20.5, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
              ① 婚姻关系存续？→ <Seal delay={130} size={17} tone={C.moss}>存续 ✓ 不变身份</Seal>
            </div>
            <div style={{fontSize: 20.5, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
              ② 房屋 A 仍共有？→ <Seal delay={170} size={17} tone={C.moss}>仍共有 ✓ 不变财产</Seal>
            </div>
            <div style={{marginTop: 'auto', fontSize: 20.5, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
              ③ 乙卖给丙：出于职责＝<Soft color={C.moss}>有权处分</Soft> · 与职责无关＝<Soft color={C.rust}>无权处分</Soft>
            </div>
          </div>
        </Enter>
        <Enter delay={140} from="up" style={{position: 'absolute', left: 40, top: 572, width: 1696, height: 172}}>
          <div style={{height: '100%', backgroundColor: C.ashMid, border: `2px solid ${C.fog}`, display: 'flex', alignItems: 'center', gap: 20, padding: '0 26px'}}>
            <span style={{padding: '6px 14px', backgroundColor: C.fog, color: C.ash, fontSize: 22, fontWeight: 900, letterSpacing: 2, flexShrink: 0}}>界限总诀</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.bone, lineHeight: 1.6}}>
              宣告失踪＝只请一位<Soft color={C.rustPale}>管家</Soft>：财产关系<Soft color={C.rustPale}>照旧</Soft> · 身份关系<Soft color={C.rustPale}>照旧</Soft> · 被宣告失踪仅是<Soft color={C.rustPale}>离婚事由</Soft>之一
            </span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};
