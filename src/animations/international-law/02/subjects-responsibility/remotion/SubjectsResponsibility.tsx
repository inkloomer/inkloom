import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {
  Ban,
  Building,
  Coins,
  FileSignature,
  Gavel,
  Handshake,
  Landmark,
  Scale,
  ScrollText,
  Shield,
  ShieldOff,
  Stamp,
  Users,
  Vote,
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

const SEAL_CODE = ['壹', '贰', '叁', '肆', '伍', '陆', '柒'];

const ChamberShell = ({
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
      backgroundColor: PALETTE.midnight,
      backgroundImage:
        'repeating-linear-gradient(135deg, rgba(255,255,255,0.025) 0 2px, transparent 2px 26px), radial-gradient(circle at 88% 4%, rgba(201,162,75,0.14), transparent 30%)',
      overflow: 'hidden',
    }}
  >
    <div style={{position: 'absolute', inset: 22, border: `2px solid ${PALETTE.line}`}} />
    <div style={{position: 'absolute', inset: 28, border: `1px solid ${PALETTE.brass}55`}} />
    <header
      style={{
        position: 'absolute',
        left: 64,
        right: 64,
        top: 44,
        height: 104,
        display: 'flex',
        alignItems: 'center',
        gap: 24,
        backgroundColor: PALETTE.porcelain,
        borderTop: `6px solid ${PALETTE.brass}`,
        padding: '0 26px',
      }}
    >
      <div
        style={{
          width: 70,
          height: 70,
          border: `3px solid ${PALETTE.vermilion}`,
          borderRadius: 35,
          display: 'grid',
          placeItems: 'center',
          color: PALETTE.vermilion,
        }}
      >
        <span style={{fontSize: 28, fontWeight: 800}}>{SEAL_CODE[code]}</span>
      </div>
      <h1 className="font-animation-title" style={{fontSize: 42, lineHeight: 1.1, margin: 0, fontWeight: 800, color: PALETTE.ink}}>
        {title}
      </h1>
      <div style={{marginLeft: 'auto', textAlign: 'right'}}>
        <div style={{fontSize: 16, fontWeight: 700, letterSpacing: 4, color: PALETTE.muted}}>ENVOY ASSEMBLY · 三国法</div>
        <div style={{fontSize: 18, color: PALETTE.muted, marginTop: 6}}>国际法主体与法律责任</div>
      </div>
    </header>
    <div style={{position: 'absolute', left: 66, top: 210, width: 104, height: 640, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40}}>
      {[0, 1, 2, 3, 4, 5, 6].map((index) => {
        const active = index === station;
        return (
          <div
            key={index}
            style={{
              width: 58,
              height: 58,
              borderRadius: 29,
              border: `2px solid ${active ? PALETTE.brass : PALETTE.line}`,
              backgroundColor: active ? PALETTE.brass : PALETTE.panel,
              display: 'grid',
              placeItems: 'center',
              color: active ? PALETTE.midnight : PALETTE.muted,
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

const Plaque = ({color, text}: {readonly color: string; readonly text: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', backgroundColor: `${color}22`, borderLeft: `6px solid ${color}`, padding: '4px 14px'}}>
    <span style={{fontSize: 22, fontWeight: 800, color}}>{text}</span>
  </span>
);

const Glow = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{backgroundColor: color, padding: '2px 10px', fontWeight: 800}}>{children}</span>
);

const Under = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{boxShadow: `inset 0 -3px ${color}`, paddingBottom: 2, fontWeight: 700}}>{children}</span>
);

const GavelStamp = ({
  color = PALETTE.vermilion,
  delay,
  frame,
  rotate = -5,
  size = 23,
  text,
}: {
  readonly color?: string;
  readonly delay: number;
  readonly frame: number;
  readonly rotate?: number;
  readonly size?: number;
  readonly text: string;
}) => (
  <span
    style={{
      ...enter(frame, delay, 10),
      display: 'inline-block',
      border: `3px solid ${color}`,
      borderRadius: 6,
      color,
      padding: '6px 18px',
      fontSize: size,
      fontWeight: 800,
      letterSpacing: 2,
      rotate: `${rotate}deg`,
      backgroundColor: 'rgba(28,34,51,0.55)',
    }}
  >
    {text}
  </span>
);

export const ImmunityScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="immunity-act" data-final-knowledge="immunity-waiver" data-final-knowledge="immunity-commercial" data-final-knowledge="immunity-labor" data-final-knowledge="immunity-damages" data-final-knowledge="immunity-property" data-final-knowledge="immunity-ip" data-final-knowledge="execution-immunity" data-final-knowledge="execution-property" data-final-knowledge="immunity-caption" */
  const frame = useCurrentFrame();
  const list = [
    {tag: '商', text: '商业活动产生的纠纷（含需法院审查的仲裁事项）', id: 'immunity-commercial', delay: 96},
    {tag: '劳', text: '中国境内履行的劳动合同纠纷', id: 'immunity-labor', delay: 108},
    {tag: '赔', text: '中国境内行为导致的损害赔偿诉讼', id: 'immunity-damages', delay: 120},
    {tag: '财', text: '涉及外国国家财产权益或义务的纠纷', id: 'immunity-property', delay: 132},
    {tag: '知', text: '受中国法保护的知识产权归属、侵权纠纷', id: 'immunity-ip', delay: 144},
  ];
  return (
    <ChamberShell code={0} station={0} title="外国国家豁免：管辖与执行两道门">
      <div
        data-layout="dual-immunity-gate-with-exclusion-list"
        data-visual-anchor="boundary"
        data-visual-grammar="sovereign-acts-pass-the-jurisdiction-gate,five-commercial-disputes-hit-the-vermilion-bar"
        data-text-treatments="label-block,soft-highlight,external-negation"
        data-focal-rule="commercial-labor-damages-property-ip-have-no-immunity"
        data-focal-channels="enclosure,contrast,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <div
          data-final-knowledge="immunity-act"
          style={{...enter(frame, 14), position: 'absolute', left: 0, top: 20, width: 780, height: 350, border: `3px solid ${PALETTE.jade}`, backgroundColor: PALETTE.panel, padding: '24px 30px'}}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
            <Shield size={30} color={PALETTE.jade} />
            <span style={{fontSize: 32, fontWeight: 800, color: PALETTE.jade}}>管理（统治）行为</span>
          </div>
          <div style={{marginTop: 18, fontSize: 27, fontWeight: 800}}>
            享有 <Glow color={PALETTE.jadeSoft}>管辖豁免权</Glow>
          </div>
          <div data-final-knowledge="immunity-waiver" style={{...enter(frame, 60), marginTop: 22, border: `2px solid ${PALETTE.brass}`, backgroundColor: PALETTE.brassSoft, padding: '16px 22px'}}>
            <div style={{fontSize: 23, fontWeight: 800, color: PALETTE.brass}}>但可以放弃 · 三条件</div>
            <div style={{fontSize: 24, marginTop: 10}}>
              <Under color={PALETTE.brass}>自愿 · 特定 · 明确</Under>
              <span style={{fontSize: 22, color: PALETTE.muted}}>（明示或"诉"行为）</span>
            </div>
          </div>
          <div style={{marginTop: 20, fontSize: 22, color: PALETTE.muted, display: 'flex', alignItems: 'center', gap: 10}}>
            <Ban size={22} color={PALETTE.vermilion} />
            仅为主张豁免而应诉，不算"诉"行为
          </div>
        </div>
        <div
          style={{...enter(frame, 78), position: 'absolute', left: 866, top: 20, width: 780, height: 350, border: `3px dashed ${PALETTE.vermilion}`, backgroundColor: 'rgba(212,85,63,0.07)', padding: '22px 30px'}}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16}}>
            <ShieldOff size={28} color={PALETTE.vermilion} />
            <span style={{fontSize: 30, fontWeight: 800, color: PALETTE.vermilion}}>不享有管辖豁免 · 商劳赔财知</span>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
            {list.map((item) => (
              <div
                key={item.id}
                data-final-knowledge={item.id}
                style={{...enterX(frame, item.delay, 36), display: 'flex', alignItems: 'center', gap: 14, backgroundColor: PALETTE.panel, border: `2px solid ${PALETTE.line}`, padding: '10px 18px'}}
              >
                <span style={{width: 40, height: 40, border: `2px solid ${PALETTE.vermilion}`, color: PALETTE.vermilion, display: 'grid', placeItems: 'center', fontSize: 22, fontWeight: 800}}>{item.tag}</span>
                <span style={{fontSize: 22, fontWeight: 700}}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div
          data-final-knowledge="execution-immunity"
          style={{...enter(frame, 176), position: 'absolute', left: 0, top: 402, width: 1010, height: 170, border: `3px solid ${PALETTE.brass}`, borderTop: `10px solid ${PALETTE.brass}`, backgroundColor: PALETTE.panel, padding: '18px 28px'}}
        >
          <div style={{fontSize: 28, fontWeight: 800, color: PALETTE.brass}}>执行豁免 · 更高的门槛</div>
          <div style={{marginTop: 14, fontSize: 24, lineHeight: 1.45}}>
            除非国家
            <Under color={PALETTE.brass}>明示或默示放弃</Under>
            ，或为执行
            <Glow color={PALETTE.brassSoft}>已生效法院裁判</Glow>
          </div>
        </div>
        <div
          data-final-knowledge="execution-property"
          style={{...enter(frame, 206), position: 'absolute', left: 1064, top: 402, width: 582, height: 170, border: `3px solid ${PALETTE.vermilion}`, backgroundColor: 'rgba(212,85,63,0.07)', padding: '18px 26px'}}
        >
          <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.vermilion}}>可执行财产仅限</div>
          <div style={{marginTop: 12, fontSize: 23, lineHeight: 1.4}}>
            <Glow color={PALETTE.vermSoft}>用于商业活动且与诉讼有联系</Glow>
            的财产
          </div>
        </div>
        <div
          data-final-knowledge="immunity-caption"
          style={{...enter(frame, 246), position: 'absolute', left: 0, top: 600, width: 1646, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, backgroundColor: PALETTE.brassSoft, borderTop: `3px solid ${PALETTE.brass}`, fontSize: 26, fontWeight: 800, color: PALETTE.brass, whiteSpace: 'nowrap'}}
        >
          我国立场：<Glow color="rgba(201,162,75,0.3)">限制豁免</Glow>，不是绝对豁免
        </div>
      </div>
    </ChamberShell>
  );
};

export const RecognitionScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="recognition-subject" data-final-knowledge="recognition-quality" data-final-knowledge="recognize-new-state" data-final-knowledge="recognize-new-gov" data-final-knowledge="implied-four" data-final-knowledge="irrevocable-state" data-final-knowledge="revoke-old-gov" */
  const frame = useCurrentFrame();
  const implied = ['外交关系', '领事关系', '政治性条约', '投票支持加入仅对国家开放的国际组织'];
  return (
    <ChamberShell code={1} station={1} title="国际法上的承认：新国家还是新政府">
      <div
        data-layout="sovereign-recognition-fork"
        data-visual-anchor="document-fork"
        data-visual-grammar="recognition-forks-on-territorial-change,four-implied-conducts-enter-the-roll"
        data-text-treatments="label-block,thin-underline,stamp"
        data-focal-rule="territorial-change-decides-state-or-government"
        data-focal-channels="connector,enclosure,contrast"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{...enter(frame, 14), position: 'absolute', left: 0, top: 10, width: 1646, height: 92, border: `2px solid ${PALETTE.line}`, backgroundColor: PALETTE.panel, display: 'flex', alignItems: 'center', gap: 34, padding: '0 30px'}}>
          <span data-final-knowledge="recognition-subject" style={{fontSize: 25, fontWeight: 800}}>
            主体：<Under color={PALETTE.brass}>国家、政府间国际组织</Under>
          </span>
          <span data-final-knowledge="recognition-quality" style={{fontSize: 25, fontWeight: 800}}>
            性质：<Glow color={PALETTE.jadeSoft}>单方行为</Glow>
          </span>
          <span style={{fontSize: 22, color: PALETTE.muted, marginLeft: 'auto'}}>不产生法律意义的承认：共同参加国际会议、非政治性条约</span>
        </div>
        <div
          data-final-knowledge="recognize-new-state"
          style={{...enter(frame, 60), position: 'absolute', left: 0, top: 136, width: 780, height: 250, border: `3px solid ${PALETTE.jade}`, borderTop: `12px solid ${PALETTE.jade}`, backgroundColor: PALETTE.panel, padding: '22px 30px'}}
        >
          <div style={{fontSize: 32, fontWeight: 800, color: PALETTE.jade}}>承认新国家</div>
          <div style={{marginTop: 16, fontSize: 25}}>
            关键：存在
            <Glow color={PALETTE.jadeSoft}>领土变更</Glow>
          </div>
          <div style={{marginTop: 16, fontSize: 22, color: PALETTE.muted}}>合并、分离、分立、独立等情形</div>
        </div>
        <div
          data-final-knowledge="recognize-new-gov"
          style={{...enter(frame, 78), position: 'absolute', left: 866, top: 136, width: 780, height: 250, border: `3px solid ${PALETTE.brass}`, borderTop: `12px solid ${PALETTE.brass}`, backgroundColor: PALETTE.panel, padding: '22px 30px'}}
        >
          <div style={{fontSize: 32, fontWeight: 800, color: PALETTE.brass}}>承认新政府</div>
          <div style={{marginTop: 16, fontSize: 25}}>
            关键：
            <Under color={PALETTE.brass}>无领土变更</Under>
            （社会革命、政变）
          </div>
          <div style={{marginTop: 16, fontSize: 22, color: PALETTE.muted}}>只换政权，不换领土</div>
        </div>
        <div
          data-final-knowledge="implied-four"
          style={{...enter(frame, 120), position: 'absolute', left: 0, top: 420, width: 1010, height: 200, border: `2px solid ${PALETTE.line}`, backgroundColor: PALETTE.panel, padding: '18px 28px'}}
        >
          <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.brass}}>法律方式：明示 / 默示 —— 默示四途径</div>
          <div style={{display: 'flex', gap: 18, marginTop: 18}}>
            {implied.map((text, index) => (
              <span key={text} style={{...enter(frame, 146 + index * 14), flex: index < 3 ? 1 : 2.1, border: `2px solid ${PALETTE.brass}`, color: PALETTE.brass, backgroundColor: PALETTE.brassSoft, padding: '10px 14px', fontSize: 22, fontWeight: 700, display: 'grid', placeItems: 'center', textAlign: 'center'}}>
                {text}
              </span>
            ))}
          </div>
        </div>
        <div style={{position: 'absolute', left: 1064, top: 420, width: 582, height: 200, display: 'flex', flexDirection: 'column', gap: 20}}>
          <div data-final-knowledge="irrevocable-state" style={{...enter(frame, 214), border: `3px solid ${PALETTE.vermilion}`, backgroundColor: 'rgba(212,85,63,0.07)', padding: '14px 24px', fontSize: 24, fontWeight: 800, flex: 1, display: 'flex', alignItems: 'center', gap: 14}}>
            <Stamp size={26} color={PALETTE.vermilion} />
            承认新国家 → 无法撤回
          </div>
          <div data-final-knowledge="revoke-old-gov" style={{...enter(frame, 236), border: `3px solid ${PALETTE.jade}`, backgroundColor: 'rgba(63,163,124,0.07)', padding: '14px 24px', fontSize: 24, fontWeight: 800, flex: 1, display: 'flex', alignItems: 'center', gap: 14}}>
            <Handshake size={26} color={PALETTE.jade} />
            承认新政府 → 撤销对旧政府的承认
          </div>
        </div>
      </div>
    </ChamberShell>
  );
};

export const SuccessionScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="succession-treaty" data-final-knowledge="succession-property" data-final-knowledge="succession-debt" data-final-knowledge="debt-definition" data-final-knowledge="debt-merger" data-final-knowledge="debt-separation" data-final-knowledge="debt-independence" */
  const frame = useCurrentFrame();
  const debtRules = [
    {text: '合并 → 全部继承', color: PALETTE.jade, id: 'debt-merger', delay: 176},
    {text: '分离、分立 → 比例继承', color: PALETTE.brass, id: 'debt-separation', delay: 194},
    {text: '殖民地独立 → 不予继承', color: PALETTE.vermilion, id: 'debt-independence', delay: 212},
  ];
  return (
    <ChamberShell code={2} station={2} title="国际法上的继承：条约、财产、债务">
      <div
        data-layout="three-inheritance-lanes"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="three-succession-lanes-run-side-by-side,debt-fate-splits-into-three-rules"
        data-text-treatments="soft-highlight,label-block,thin-underline"
        data-focal-rule="only-territory-boundary-treaties-and-non-odious-debts-pass"
        data-focal-channels="contrast,enclosure,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <div
          data-final-knowledge="succession-treaty"
          style={{...enter(frame, 14), position: 'absolute', left: 0, top: 40, width: 520, height: 580, border: `3px solid ${PALETTE.brass}`, borderTop: `12px solid ${PALETTE.brass}`, backgroundColor: PALETTE.panel, padding: '24px 30px'}}
        >
          <FileSignature size={32} color={PALETTE.brass} />
          <div style={{fontSize: 32, fontWeight: 800, color: PALETTE.brass, marginTop: 10}}>条约</div>
          <div style={{marginTop: 24, fontSize: 25, lineHeight: 1.5}}>
            只有义务继承
            <Glow color={PALETTE.brassSoft}>领土划界类</Glow>
            条约
          </div>
          <div style={{marginTop: 22, fontSize: 22, color: PALETTE.muted, lineHeight: 1.5}}>其他条约：不予继承（除非另有协议）</div>
        </div>
        <div
          data-final-knowledge="succession-property"
          style={{...enter(frame, 40), position: 'absolute', left: 562, top: 40, width: 520, height: 580, border: `3px solid ${PALETTE.jade}`, borderTop: `12px solid ${PALETTE.jade}`, backgroundColor: PALETTE.panel, padding: '24px 30px'}}
        >
          <Landmark size={32} color={PALETTE.jade} />
          <div style={{fontSize: 32, fontWeight: 800, color: PALETTE.jade, marginTop: 10}}>财产、档案</div>
          <div style={{marginTop: 24, fontSize: 25, lineHeight: 1.5}}>
            <Under color={PALETTE.jade}>领土实际生存原则</Under>
          </div>
          <div style={{marginTop: 18, fontSize: 22, color: PALETTE.muted, lineHeight: 1.5}}>即与土地最密切联系原则</div>
        </div>
        <div
          style={{...enter(frame, 66), position: 'absolute', left: 1124, top: 40, width: 522, height: 580, border: `3px solid ${PALETTE.vermilion}`, borderTop: `12px solid ${PALETTE.vermilion}`, backgroundColor: PALETTE.panel, padding: '22px 28px'}}
        >
          <Coins size={30} color={PALETTE.vermilion} />
          <div data-final-knowledge="succession-debt" style={{fontSize: 32, fontWeight: 800, color: PALETTE.vermilion, marginTop: 8}}>债务</div>
          <div data-final-knowledge="debt-definition" style={{...enter(frame, 108), marginTop: 14, border: `2px solid ${PALETTE.line}`, padding: '12px 16px', fontSize: 21, lineHeight: 1.45}}>
            仅限
            <Glow color={PALETTE.vermSoft}>国家非恶债</Glow>
            ：中央政府 · 对其他国际法主体 · 平等条约所负债务
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: 14, marginTop: 18}}>
            {debtRules.map((rule) => (
              <div key={rule.id} data-final-knowledge={rule.id} style={{...enterX(frame, rule.delay, 36), borderLeft: `8px solid ${rule.color}`, backgroundColor: `${rule.color}1c`, padding: '12px 18px', fontSize: 23, fontWeight: 800, color: rule.color}}>
                {rule.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </ChamberShell>
  );
};

export const OrganizationsScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="intergov-basis" data-final-knowledge="intergov-subject" data-final-knowledge="ngo-basis" data-final-knowledge="ngo-subject" data-final-knowledge="distinction-note" data-final-knowledge="specialized-relation" */
  const frame = useCurrentFrame();
  return (
    <ChamberShell code={3} station={3} title="政府间 VS 非政府间国际组织">
      <div
        data-layout="twin-organization-ledgers"
        data-visual-anchor="role-pair"
        data-visual-grammar="two-organization-ledgers-share-one-legal-basis-axis,specialized-agencies-stand-beside-not-under-the-un"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="legal-basis-not-membership-draws-the-line"
        data-focal-channels="contrast,spatial,enclosure"
        style={{position: 'absolute', inset: 0}}
      >
        <div
          style={{...enter(frame, 14), position: 'absolute', left: 0, top: 30, width: 780, height: 380, border: `3px solid ${PALETTE.jade}`, borderTop: `12px solid ${PALETTE.jade}`, backgroundColor: PALETTE.panel, padding: '24px 32px'}}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
            <Building size={30} color={PALETTE.jade} />
            <span style={{fontSize: 32, fontWeight: 800, color: PALETTE.jade}}>政府间国际组织</span>
          </div>
          <div data-final-knowledge="intergov-basis" style={{...enter(frame, 48), marginTop: 26, fontSize: 25}}>
            成立依据：
            <Under color={PALETTE.jade}>政府间协议</Under>
          </div>
          <div data-final-knowledge="intergov-subject" style={{...enter(frame, 78), marginTop: 24, fontSize: 25}}>
            国际法主体：
            <Glow color={PALETTE.jadeSoft}>是</Glow>
          </div>
        </div>
        <div
          style={{...enter(frame, 32), position: 'absolute', left: 866, top: 30, width: 780, height: 380, border: `3px solid ${PALETTE.vermilion}`, borderTop: `12px solid ${PALETTE.vermilion}`, backgroundColor: PALETTE.panel, padding: '24px 32px'}}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
            <Users size={30} color={PALETTE.vermilion} />
            <span style={{fontSize: 32, fontWeight: 800, color: PALETTE.vermilion}}>非政府间国际组织</span>
          </div>
          <div data-final-knowledge="ngo-basis" style={{...enter(frame, 62), marginTop: 26, fontSize: 25}}>
            成立依据：
            <Under color={PALETTE.vermilion}>相关国家的国内法</Under>
          </div>
          <div data-final-knowledge="ngo-subject" style={{...enter(frame, 92), marginTop: 24, fontSize: 25}}>
            国际法主体：
            <Glow color={PALETTE.vermSoft}>否</Glow>
          </div>
        </div>
        <div
          data-final-knowledge="distinction-note"
          style={{...enter(frame, 124), position: 'absolute', left: 0, top: 448, width: 780, height: 190, border: `2px solid ${PALETTE.line}`, backgroundColor: PALETTE.panel, padding: '20px 28px'}}
        >
          <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.brass}}>分界线在哪？</div>
          <div style={{marginTop: 14, fontSize: 23, lineHeight: 1.5}}>
            不在于
            <Under color={PALETTE.vermilion}>成员构成</Under>
            ，而在于依据是国际法还是
            <Glow color={PALETTE.brassSoft}>国内法</Glow>
          </div>
        </div>
        <div
          data-final-knowledge="specialized-relation"
          style={{...enter(frame, 150), position: 'absolute', left: 866, top: 448, width: 780, height: 190, border: `3px solid ${PALETTE.brass}`, backgroundColor: PALETTE.brassSoft, padding: '20px 28px'}}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Handshake size={26} color={PALETTE.brass} />
            <span style={{fontSize: 24, fontWeight: 800, color: PALETTE.brass}}>联合国专门机构</span>
          </div>
          <div style={{marginTop: 12, fontSize: 22, lineHeight: 1.5, color: PALETTE.paperText}}>
            经
            <Under color={PALETTE.brass}>特别协定</Under>
            与联合国合作 → 独立的国际法主体，
            <Glow color="rgba(212,85,63,0.24)">不是联合国的附属机构</Glow>
          </div>
        </div>
      </div>
    </ChamberShell>
  );
};

export const UnOrgansScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="assembly-deliberation" data-final-knowledge="assembly-binding" data-final-knowledge="assembly-not-legislature" data-final-knowledge="council-composition" data-final-knowledge="council-binding" data-final-knowledge="selection-secretary" data-final-knowledge="selection-judge" */
  const frame = useCurrentFrame();
  return (
    <ChamberShell code={4} station={4} title="联合国大会与安全理事会">
      <div
        data-layout="twin-organ-panels-with-selection-strip"
        data-visual-anchor="role-pair"
        data-visual-grammar="assembly-and-council-divide-their-powers,two-selection-rituals-close-the-bench"
        data-text-treatments="label-block,thin-underline,external-negation"
        data-focal-rule="council-decides-with-force-assembly-recommends"
        data-focal-channels="contrast,enclosure,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <div
          style={{...enter(frame, 14), position: 'absolute', left: 0, top: 24, width: 780, height: 388, border: `3px solid ${PALETTE.brass}`, borderTop: `12px solid ${PALETTE.brass}`, backgroundColor: PALETTE.panel, padding: '22px 30px'}}
        >
          <div style={{fontSize: 30, fontWeight: 800, color: PALETTE.brass}}>联合国大会</div>
          <div data-final-knowledge="assembly-deliberation" style={{...enter(frame, 46), marginTop: 18, fontSize: 23, lineHeight: 1.5}}>
            <Plaque color={PALETTE.brass} text="审议权" />
            <span style={{marginLeft: 12}}>宪章范围内任何问题</span>
          </div>
          <div style={{...enter(frame, 66), marginTop: 12, fontSize: 22, color: PALETTE.muted, display: 'flex', alignItems: 'center', gap: 10}}>
            <Ban size={20} color={PALETTE.vermilion} />
            安理会正在审议的除外
          </div>
          <div data-final-knowledge="assembly-binding" style={{...enter(frame, 90), marginTop: 16, fontSize: 23, lineHeight: 1.5}}>
            <Glow color={PALETTE.jadeSoft}>内部事务决议有拘束力</Glow>
            ；其他仅建议性质
          </div>
          <div data-final-knowledge="assembly-not-legislature" style={{...enter(frame, 116), marginTop: 16, fontSize: 23}}>
            不是联合国的
            <Under color={PALETTE.vermilion}>立法机关</Under>
          </div>
        </div>
        <div
          style={{...enter(frame, 32), position: 'absolute', left: 866, top: 24, width: 780, height: 388, border: `3px solid ${PALETTE.vermilion}`, borderTop: `12px solid ${PALETTE.vermilion}`, backgroundColor: PALETTE.panel, padding: '22px 30px'}}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
            <Gavel size={28} color={PALETTE.vermilion} />
            <span style={{fontSize: 30, fontWeight: 800, color: PALETTE.vermilion}}>安全理事会</span>
          </div>
          <div data-final-knowledge="council-composition" style={{...enter(frame, 62), marginTop: 18, fontSize: 24}}>
            15 理事国 =
            <Glow color={PALETTE.vermSoft}>5 常任</Glow>
            + 10 非常任
          </div>
          <div data-final-knowledge="council-binding" style={{...enter(frame, 92), marginTop: 18, fontSize: 23, lineHeight: 1.55}}>
            决议有
            <Under color={PALETTE.vermilion}>约束力和执行力</Under>
            ，特殊情况可
            <Glow color={PALETTE.vermSoft}>武力执行</Glow>
          </div>
          <div style={{...enter(frame, 122), marginTop: 16, fontSize: 23}}>
            联合国
            <Glow color={PALETTE.brassSoft}>唯一有权采取行动</Glow>
            的机构
          </div>
        </div>
        <div
          style={{...enter(frame, 150), position: 'absolute', left: 0, top: 440, width: 1646, height: 190, border: `3px solid ${PALETTE.jade}`, backgroundColor: 'rgba(63,163,124,0.08)', padding: '18px 30px'}}
        >
          <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.jade}}>两种人员的产生 · 口诀</div>
          <div style={{display: 'flex', gap: 24, marginTop: 16}}>
            <div data-final-knowledge="selection-secretary" style={{...enter(frame, 176), flex: 1, border: `2px solid ${PALETTE.line}`, backgroundColor: PALETTE.midnight, padding: '14px 22px'}}>
              <div style={{fontSize: 24, fontWeight: 800}}>秘书长 · 先后选</div>
              <div style={{fontSize: 22, marginTop: 8, color: PALETTE.paperText}}>
                <Under color={PALETTE.jade}>先</Under>
                安理会推荐 →
                <Under color={PALETTE.jade}>后</Under>
                大会简单多数通过
              </div>
            </div>
            <div data-final-knowledge="selection-judge" style={{...enter(frame, 200), flex: 1, border: `2px solid ${PALETTE.line}`, backgroundColor: PALETTE.midnight, padding: '14px 22px'}}>
              <div style={{fontSize: 24, fontWeight: 800}}>国际法官 · 平行选</div>
              <div style={{fontSize: 22, marginTop: 8, color: PALETTE.paperText}}>
                大会（2/3 以上）与安理会（9 票以上）
                <Glow color={PALETTE.jadeSoft}>各自投票</Glow>
                均特别多数
              </div>
            </div>
          </div>
        </div>
      </div>
    </ChamberShell>
  );
};

export const CouncilVoteScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="procedural-nine" data-final-knowledge="substantive-nine" data-final-knowledge="great-power-unity" data-final-knowledge="abstain-not-veto" data-final-knowledge="double-veto" data-final-knowledge="substantive-list" data-final-knowledge="procedural-judges" data-final-knowledge="party-vote-rule" */
  const frame = useCurrentFrame();
  const substantive = ['需采取行动的决议', '推荐秘书长', '吸纳新会员', '开除会员国'];
  return (
    <ChamberShell code={5} station={5} title="安理会表决：程序性与实质性">
      <div
        data-layout="roll-call-vote-gate-with-double-veto"
        data-visual-anchor="flow-path"
        data-visual-grammar="matters-pass-the-nine-vote-gate,great-power-unity-guards-substantive-matters"
        data-text-treatments="stamp,soft-highlight,thin-underline"
        data-focal-rule="nine-votes-plus-great-power-unity"
        data-focal-channels="connector,contrast,enclosure"
        style={{position: 'absolute', inset: 0}}
      >
        <div
          data-final-knowledge="procedural-nine"
          style={{...enter(frame, 14), position: 'absolute', left: 0, top: 20, width: 780, height: 180, border: `3px solid ${PALETTE.jade}`, backgroundColor: 'rgba(63,163,124,0.08)', padding: '20px 28px'}}
        >
          <Plaque color={PALETTE.jade} text="程序性事项" />
          <div style={{marginTop: 16, fontSize: 27, fontWeight: 800}}>
            <Glow color={PALETTE.jadeSoft}>9 个以上同意票</Glow>
            即通过
          </div>
        </div>
        <div
          style={{...enter(frame, 40), position: 'absolute', left: 866, top: 20, width: 780, height: 180, border: `3px solid ${PALETTE.vermilion}`, backgroundColor: 'rgba(212,85,63,0.08)', padding: '20px 28px'}}
        >
          <div data-final-knowledge="substantive-nine" style={{fontSize: 25, fontWeight: 800}}>
            <Plaque color={PALETTE.vermilion} text="实质性事项" />
            <span style={{marginLeft: 14}}>9 票以上 +</span>
          </div>
          <div data-final-knowledge="great-power-unity" style={{...enter(frame, 78), marginTop: 12, fontSize: 25, fontWeight: 800}}>
            <Glow color={PALETTE.vermSoft}>大国一致</Glow>
            ：任一常任理事国未投否决票
          </div>
        </div>
        <div
          data-final-knowledge="abstain-not-veto"
          style={{...enter(frame, 108), position: 'absolute', left: 0, top: 226, width: 780, height: 96, border: `2px solid ${PALETTE.brass}`, backgroundColor: PALETTE.brassSoft, display: 'flex', alignItems: 'center', gap: 14, padding: '0 26px', fontSize: 24, fontWeight: 800, color: PALETTE.brass}}
        >
          <Vote size={26} color={PALETTE.brass} />
          弃权、缺席 ≠ 否决
        </div>
        <div
          data-final-knowledge="double-veto"
          style={{...enter(frame, 130), position: 'absolute', left: 866, top: 226, width: 780, height: 96, border: `3px solid ${PALETTE.vermilion}`, backgroundColor: 'rgba(212,85,63,0.1)', display: 'flex', alignItems: 'center', gap: 16, padding: '0 26px'}}
        >
          <span style={{fontSize: 24, fontWeight: 800, color: PALETTE.vermilion}}>双重否决权：</span>
          <span style={{fontSize: 23}}>
            先否决
            <Under color={PALETTE.vermilion}>事项定性</Under>
            ，再否决
            <Glow color={PALETTE.vermSoft}>实质通过</Glow>
          </span>
        </div>
        <div
          data-final-knowledge="substantive-list"
          style={{...enter(frame, 162), position: 'absolute', left: 0, top: 348, width: 1010, height: 210, border: `2px solid ${PALETTE.line}`, backgroundColor: PALETTE.panel, padding: '18px 28px'}}
        >
          <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.vermilion}}>当然的实质性事项</div>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 16}}>
            {substantive.map((text, index) => (
              <span key={text} style={{...enter(frame, 190 + index * 14), border: `2px solid ${PALETTE.vermilion}`, color: PALETTE.paperText, backgroundColor: 'rgba(212,85,63,0.12)', padding: '10px 18px', fontSize: 22, fontWeight: 700}}>
                {text}
              </span>
            ))}
          </div>
        </div>
        <div style={{position: 'absolute', left: 1064, top: 348, width: 582, height: 210, display: 'flex', flexDirection: 'column', gap: 18}}>
          <div data-final-knowledge="procedural-judges" style={{...enter(frame, 222), flex: 1, border: `3px solid ${PALETTE.jade}`, backgroundColor: 'rgba(63,163,124,0.08)', display: 'flex', alignItems: 'center', gap: 14, padding: '0 24px', fontSize: 23, fontWeight: 800}}>
            当然的程序性事项：表决国际法官
          </div>
          <div data-final-knowledge="party-vote-rule" style={{...enter(frame, 248), flex: 1.3, border: `2px solid ${PALETTE.line}`, backgroundColor: PALETTE.panel, padding: '12px 24px', fontSize: 22, lineHeight: 1.45}}>
            理事国为
            <Under color={PALETTE.brass}>争端当事国</Under>
            ：原则上不得投票；决议含
            <Glow color={PALETTE.brassSoft}>采取行动</Glow>
            内容 → 有权投票
          </div>
        </div>
      </div>
    </ChamberShell>
  );
};

export const ResponsibilityScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="responsibility-individual" data-final-knowledge="space-liability" data-final-knowledge="nuclear-liability" data-final-knowledge="attribution-organs" data-final-knowledge="attribution-entities" data-final-knowledge="attribution-destined" data-final-knowledge="attribution-insurgents" data-final-knowledge="attribution-individuals" data-final-knowledge="defenses-strip" */
  const frame = useCurrentFrame();
  const attributions = [
    {text: '国家机关（中央/地方 · 国内/驻外）', id: 'attribution-organs', delay: 138},
    {text: '经授权行使政府权力的实体', id: 'attribution-entities', delay: 154},
    {text: '交他国支配的机关 → 归支配国', id: 'attribution-destined', delay: 170},
    {text: '叛乱运动机关 → 归其新国家', id: 'attribution-insurgents', delay: 186},
    {text: '个人：元首、总理、外长、使节国外私人行为也归因；其他人看是否履行职务', id: 'attribution-individuals', delay: 202},
  ];
  return (
    <ChamberShell code={6} station={6} title="国际法律责任：发展、归因与免责">
      <div
        data-layout="three-responsibility-bands"
        data-visual-anchor="flow-path"
        data-visual-grammar="liability-expands-downward-into-attribution,immunity-defenses-close-the-bottom-band"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="war-crime-double-punishment-and-absolute-liability"
        data-focal-channels="contrast,enclosure,locator"
        style={{position: 'absolute', inset: 0}}
      >
        <div
          style={{...enter(frame, 14), position: 'absolute', left: 0, top: 16, width: 1646, height: 168, border: `3px solid ${PALETTE.vermilion}`, backgroundColor: 'rgba(212,85,63,0.08)', padding: '16px 28px'}}
        >
          <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.vermilion}}>制度的发展 · 客体两条绝对责任线</div>
          <div style={{display: 'flex', gap: 22, marginTop: 14}}>
            <div data-final-knowledge="responsibility-individual" style={{...enterX(frame, 44, 40), flex: 1.2, border: `2px solid ${PALETTE.line}`, backgroundColor: PALETTE.panel, padding: '12px 20px', fontSize: 22, lineHeight: 1.45}}>
              战争罪
              <Glow color={PALETTE.vermSoft}>"双罚原则"</Glow>
              → 主体扩大到
              <Under color={PALETTE.vermilion}>个人</Under>
              （仅战争罪）
            </div>
            <div data-final-knowledge="space-liability" style={{...enterX(frame, 66, 40), flex: 1, border: `2px solid ${PALETTE.jade}`, backgroundColor: 'rgba(63,163,124,0.1)', padding: '12px 20px', fontSize: 22, fontWeight: 700}}>
              外空行为致地面损害：绝对责任 + 全部责任
            </div>
            <div data-final-knowledge="nuclear-liability" style={{...enterX(frame, 88, 40), flex: 1, border: `2px solid ${PALETTE.brass}`, backgroundColor: PALETTE.brassSoft, padding: '12px 20px', fontSize: 22, fontWeight: 700}}>
              核污染：绝对责任 + 补充责任
            </div>
          </div>
        </div>
        <div
          style={{...enter(frame, 112), position: 'absolute', left: 0, top: 208, width: 1646, height: 300, border: `3px solid ${PALETTE.brass}`, backgroundColor: PALETTE.panel, padding: '16px 28px'}}
        >
          <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.brass}}>行为归因于国家 · 五条通道</div>
          <div style={{display: 'flex', flexDirection: 'column', gap: 10, marginTop: 14}}>
            {attributions.map((item) => (
              <div key={item.id} data-final-knowledge={item.id} style={{...enterX(frame, item.delay, 36), borderLeft: `8px solid ${PALETTE.brass}`, backgroundColor: 'rgba(201,162,75,0.1)', padding: '9px 18px', fontSize: 22, fontWeight: 700}}>
                {item.text}
              </div>
            ))}
          </div>
        </div>
        <div
          data-final-knowledge="defenses-strip"
          style={{...enter(frame, 236), position: 'absolute', left: 0, top: 532, width: 1646, height: 128, border: `3px solid ${PALETTE.jade}`, backgroundColor: 'rgba(63,163,124,0.08)', padding: '14px 28px'}}
        >
          <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.jade}}>免责 · 排除行为不当性（国际法另有规定除外）</div>
          <div style={{display: 'flex', gap: 18, marginTop: 12, fontSize: 21, fontWeight: 700}}>
            <span style={{border: `2px solid ${PALETTE.jade}`, padding: '8px 14px'}}>同意：事先自愿明确 · 不违反强行法</span>
            <span style={{border: `2px solid ${PALETTE.jade}`, padding: '8px 14px'}}>对抗：针对性 · 适度性</span>
            <span style={{border: `2px solid ${PALETTE.jade}`, padding: '8px 14px'}}>不可抗力与偶然事故</span>
            <span style={{border: `2px solid ${PALETTE.jade}`, padding: '8px 14px'}}>危难与紧急状态 · 不违反强行法</span>
          </div>
        </div>
      </div>
    </ChamberShell>
  );
};

export const SubjectsResponsibility = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: PALETTE.midnight, overflow: 'hidden'}}
  >
    <TimelineSequence name="01-immunity" {...SCENES.immunity}>
      <ImmunityScene />
    </TimelineSequence>
    <TimelineSequence name="02-recognition" {...SCENES.recognition}>
      <RecognitionScene />
    </TimelineSequence>
    <TimelineSequence name="03-succession" {...SCENES.succession}>
      <SuccessionScene />
    </TimelineSequence>
    <TimelineSequence name="04-organizations" {...SCENES.organizations}>
      <OrganizationsScene />
    </TimelineSequence>
    <TimelineSequence name="05-un-organs" {...SCENES.unOrgans}>
      <UnOrgansScene />
    </TimelineSequence>
    <TimelineSequence name="06-council-vote" {...SCENES.councilVote}>
      <CouncilVoteScene />
    </TimelineSequence>
    <TimelineSequence name="07-responsibility" {...SCENES.responsibility}>
      <ResponsibilityScene />
    </TimelineSequence>
  </AbsoluteFill>
);
