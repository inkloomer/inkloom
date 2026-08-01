import {Check, FileSignature, Gavel, MessageSquareText, MicOff, Search, Stamp, UserRound, Users, X} from 'lucide-react';
import type {ReactNode} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../../shared/remotion-runtime';
import {SIGNAL, SignalCanvas, SignalIn, SignalPath, SignalText} from '../visual-system';

const OrbitNode = ({left, top, color, icon, title, detail, delay}: {left: number; top: number; color: string; icon: ReactNode; title: string; detail: string; delay: number}) => (
  <SignalIn delay={delay} style={{position: 'absolute', left, top, width: 420, minHeight: 150, borderRadius: 76, backgroundColor: SIGNAL.white, border: `4px solid ${color}`, display: 'flex', alignItems: 'center', gap: 22, padding: '22px 28px'}}>
    <div style={{width: 82, height: 82, flex: '0 0 auto', borderRadius: '50%', display: 'grid', placeItems: 'center', backgroundColor: color, color: SIGNAL.white}}>{icon}</div>
    <div><div style={{fontSize: 30, fontWeight: 950}}>{title}</div><div style={{marginTop: 8, fontSize: 23, lineHeight: 1.35, fontWeight: 750, color: SIGNAL.muted}}>{detail}</div></div>
  </SignalIn>
);

export const AdmissionOccasionsScene = () => {
  const frame = useCurrentFrame();
  const center = interpolate(frame, [50, 72], [0, 1], CLAMP);
  return (
    <SignalCanvas code="01" title="只有三条通道进入“自认”">
      <div data-layout="court-signal-radial-input" data-visual-anchor="flow-path" data-text-treatments="label-block,thin-underline,external-negation" data-visual-grammar="convergence,boundary,rejection" data-focal-rule="three-valid-admission-channels" data-focal-channels="icon,connector,enclosure,annotation" style={{position: 'absolute', left: 184, right: 72, top: 190, bottom: 72}}>
        <svg viewBox="0 0 1664 790" style={{position: 'absolute', inset: 0, width: '100%', height: '100%'}}>
          <SignalPath d="M420 124 C640 124 680 250 808 334" color={SIGNAL.teal} delay={18} />
          <SignalPath d="M420 352 C620 352 660 352 808 352" color={SIGNAL.blue} delay={34} />
          <SignalPath d="M420 580 C640 580 680 454 808 370" color={SIGNAL.magenta} delay={50} />
        </svg>
        <OrbitNode left={0} top={36} color={SIGNAL.teal} icon={<Gavel size={46} strokeWidth={2.7} />} title="庭审中" detail="法庭上的明确承认" delay={4} />
        <OrbitNode left={0} top={264} color={SIGNAL.blue} icon={<Search size={46} strokeWidth={2.7} />} title="法院组织的程序" detail="证据交换 · 调查 · 询问" delay={20} />
        <OrbitNode left={0} top={492} color={SIGNAL.magenta} icon={<FileSignature size={46} strokeWidth={2.7} />} title="书面材料" detail="起诉状 · 答辩状 · 代理词" delay={36} />
        <div style={{position: 'absolute', left: 736, top: 244, width: 300, height: 230, borderRadius: '50%', border: `8px solid ${SIGNAL.graphite}`, backgroundColor: SIGNAL.yellow, display: 'grid', placeItems: 'center', textAlign: 'center', scale: center}}>
          <MessageSquareText size={66} strokeWidth={2.7} />
          <div style={{marginTop: -38, fontSize: 44, fontWeight: 950}}>自认</div>
          <div style={{marginTop: -44, fontSize: 22, fontWeight: 900}}>进入裁判记录</div>
        </div>
        <SignalIn delay={68} style={{position: 'absolute', right: 0, top: 98, width: 480, height: 180, borderRadius: 90, border: `4px dashed ${SIGNAL.magenta}`, backgroundColor: SIGNAL.white, padding: '28px 36px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 18, fontSize: 29, fontWeight: 950}}><MicOff size={48} color={SIGNAL.magenta} />庭外录音</div>
          <div style={{marginTop: 18, fontSize: 26, fontWeight: 850}}><SignalText kind="negation" color={SIGNAL.magenta} delay={78}>不进入自认通道</SignalText></div>
        </SignalIn>
        <SignalIn delay={80} style={{position: 'absolute', right: 0, top: 420, width: 480, height: 180, borderRadius: 90, border: `4px dashed ${SIGNAL.magenta}`, backgroundColor: SIGNAL.white, padding: '28px 36px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 18, fontSize: 29, fontWeight: 950}}><MicOff size={48} color={SIGNAL.magenta} />庭后私下承认</div>
          <div style={{marginTop: 18, fontSize: 26, fontWeight: 850}}><SignalText kind="negation" color={SIGNAL.magenta} delay={90}>同样不构成自认</SignalText></div>
        </SignalIn>
        <SignalIn delay={96} style={{position: 'absolute', left: 482, right: 520, bottom: 0, textAlign: 'center', fontSize: 29, fontWeight: 950}}>
          <SignalText kind="wave" color={SIGNAL.teal} delay={102}>场合之外，再“承认”也不算诉讼法上的自认</SignalText>
        </SignalIn>
      </div>
    </SignalCanvas>
  );
};

export const AdmissionEffectScene = () => {
  const frame = useCurrentFrame();
  const fork = interpolate(frame, [16, 48], [0, 1], CLAMP);
  return (
    <SignalCanvas code="02" title="承认事实，不等于承认请求">
      <div data-layout="fact-request-signal-fork" data-visual-anchor="comparison-axis" data-text-treatments="label-block,soft-highlight,thin-underline,stamp" data-visual-grammar="shared-input,divergence,outcome" data-focal-rule="admission-versus-acknowledgment" data-focal-channels="icon,connector,contrast,annotation" style={{position: 'absolute', left: 184, right: 72, top: 190, bottom: 72}}>
        <SignalIn delay={2} style={{position: 'absolute', left: 582, top: 10, width: 500, height: 126, borderRadius: 70, backgroundColor: SIGNAL.graphite, color: SIGNAL.white, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, fontSize: 32, fontWeight: 950}}>
          <MessageSquareText size={52} color={SIGNAL.yellow} />一方作出承认
        </SignalIn>
        <svg viewBox="0 0 1664 790" style={{position: 'absolute', inset: 0, width: '100%', height: '100%'}}>
          <path d="M832 136 L832 205 L420 300" fill="none" stroke={SIGNAL.teal} strokeWidth="9" pathLength="1" strokeDasharray="1" strokeDashoffset={1 - fork} strokeLinecap="round" />
          <path d="M832 136 L832 205 L1244 300" fill="none" stroke={SIGNAL.magenta} strokeWidth="9" pathLength="1" strokeDasharray="1" strokeDashoffset={1 - fork} strokeLinecap="round" />
        </svg>
        <SignalIn delay={28} style={{position: 'absolute', left: 20, top: 278, width: 690, height: 390, borderRadius: '150px 28px 28px 150px', backgroundColor: SIGNAL.white, border: `5px solid ${SIGNAL.teal}`, padding: '42px 52px 36px 86px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 20}}><div style={{width: 86, height: 86, borderRadius: '50%', backgroundColor: SIGNAL.teal, color: SIGNAL.white, display: 'grid', placeItems: 'center'}}><Stamp size={48} /></div><div><SignalText kind="label" color={SIGNAL.teal}>自认</SignalText><div style={{marginTop: 12, fontSize: 33, fontWeight: 950}}>承认不利事实</div></div></div>
          <div style={{marginTop: 34, fontSize: 29, lineHeight: 1.55, fontWeight: 850}}>对方免于举证<br />法院可将该事实作为裁判依据</div>
          <div style={{marginTop: 28, fontSize: 29, fontWeight: 950}}><SignalText kind="wave" color={SIGNAL.teal} delay={52}>事实成立</SignalText><span style={{margin: '0 18px', color: SIGNAL.muted}}>但</span><SignalText kind="negation" color={SIGNAL.magenta} delay={62}>不当然败诉</SignalText></div>
        </SignalIn>
        <SignalIn delay={44} style={{position: 'absolute', right: 20, top: 278, width: 690, height: 390, borderRadius: '28px 150px 150px 28px', backgroundColor: SIGNAL.white, border: `5px solid ${SIGNAL.magenta}`, padding: '42px 86px 36px 52px', textAlign: 'right'}}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 20}}><div><SignalText kind="label" color={SIGNAL.magenta}>认诺</SignalText><div style={{marginTop: 12, fontSize: 33, fontWeight: 950}}>承认诉讼请求</div></div><div style={{width: 86, height: 86, borderRadius: '50%', backgroundColor: SIGNAL.magenta, color: SIGNAL.white, display: 'grid', placeItems: 'center'}}><Gavel size={48} /></div></div>
          <div style={{marginTop: 34, fontSize: 29, lineHeight: 1.55, fontWeight: 850}}>不是单纯确认事实<br />而是接受对方的请求</div>
          <div style={{marginTop: 30, fontSize: 32, fontWeight: 950}}><SignalText kind="stamp" color={SIGNAL.magenta} delay={76}>请求成立 · 认诺人败诉</SignalText></div>
        </SignalIn>
        <SignalIn delay={88} style={{position: 'absolute', left: 520, right: 520, bottom: 0, textAlign: 'center', fontSize: 28, fontWeight: 950}}><SignalText kind="highlight" color={SIGNAL.yellow} delay={96}>记对象：事实 vs 诉讼请求</SignalText></SignalIn>
      </div>
    </SignalCanvas>
  );
};

const PersonDot = ({left, top, color, label, delay}: {left: number; top: number; color: string; label: string; delay: number}) => (
  <SignalIn delay={delay} style={{position: 'absolute', left, top, width: 150, textAlign: 'center'}}>
    <div style={{width: 86, height: 86, margin: '0 auto', borderRadius: '50%', border: `5px solid ${color}`, backgroundColor: SIGNAL.white, display: 'grid', placeItems: 'center'}}><UserRound size={44} color={color} strokeWidth={2.7} /></div>
    <div style={{marginTop: 8, fontSize: 22, fontWeight: 900}}>{label}</div>
  </SignalIn>
);

export const AdmissionVetoScene = () => {
  const frame = useCurrentFrame();
  const gate = interpolate(frame, [72, 94], [0, 1], CLAMP);
  return (
    <SignalCanvas code="03" title="部分人自认，效力如何扩散">
      <div data-layout="joint-litigation-response-network" data-visual-anchor="role-pair" data-text-treatments="label-block,thin-underline,external-negation,stamp" data-visual-grammar="local-effect,group-response,veto" data-focal-rule="necessary-joint-veto" data-focal-channels="icon,connector,enclosure,annotation" style={{position: 'absolute', left: 184, right: 72, top: 190, bottom: 72}}>
        <div style={{position: 'absolute', left: 0, top: 8, width: 700, height: 640, borderRadius: 46, backgroundColor: 'rgba(251,255,253,.82)', border: `4px solid ${SIGNAL.teal}`, padding: '28px 34px'}}>
          <SignalIn delay={2} style={{display: 'flex', alignItems: 'center', gap: 18, fontSize: 34, fontWeight: 950}}><Users size={52} color={SIGNAL.teal} /><SignalText kind="label" color={SIGNAL.teal}>普通共同诉讼</SignalText></SignalIn>
          <PersonDot left={44} top={148} color={SIGNAL.teal} label="甲：自认" delay={14} />
          <PersonDot left={272} top={148} color={SIGNAL.muted} label="乙" delay={24} />
          <PersonDot left={500} top={148} color={SIGNAL.muted} label="丙" delay={34} />
          <svg viewBox="0 0 700 640" style={{position: 'absolute', inset: 0, width: '100%', height: '100%'}}><SignalPath d="M119 300 L119 422" color={SIGNAL.teal} delay={28} /></svg>
          <SignalIn delay={42} style={{position: 'absolute', left: 44, bottom: 62, width: 300, height: 112, borderRadius: 56, backgroundColor: SIGNAL.yellow, display: 'grid', placeItems: 'center', textAlign: 'center', fontSize: 27, fontWeight: 950}}>只对甲<br />发生效力</SignalIn>
          <SignalIn delay={50} style={{position: 'absolute', right: 38, bottom: 74, width: 270, fontSize: 24, lineHeight: 1.5, fontWeight: 850, color: SIGNAL.muted}}>效力不沿共同诉讼关系扩散</SignalIn>
        </div>
        <div style={{position: 'absolute', right: 0, top: 8, width: 880, height: 640, borderRadius: 46, backgroundColor: 'rgba(251,255,253,.9)', border: `4px solid ${SIGNAL.magenta}`, padding: '28px 34px'}}>
          <SignalIn delay={12} style={{display: 'flex', alignItems: 'center', gap: 18, fontSize: 34, fontWeight: 950}}><Users size={52} color={SIGNAL.magenta} /><SignalText kind="label" color={SIGNAL.magenta}>必要共同诉讼</SignalText></SignalIn>
          <PersonDot left={52} top={148} color={SIGNAL.teal} label="甲：自认" delay={24} />
          <PersonDot left={290} top={148} color={SIGNAL.magenta} label="乙：表态" delay={34} />
          <PersonDot left={528} top={148} color={SIGNAL.blue} label="丙：表态" delay={44} />
          <svg viewBox="0 0 880 640" style={{position: 'absolute', inset: 0, width: '100%', height: '100%'}}>
            <SignalPath d="M127 302 C127 360 365 350 365 416" color={SIGNAL.teal} delay={42} />
            <SignalPath d="M365 302 L365 416" color={SIGNAL.magenta} delay={48} />
            <SignalPath d="M603 302 C603 360 365 350 365 416" color={SIGNAL.blue} delay={54} />
          </svg>
          <div style={{position: 'absolute', left: 330, top: 382, width: 72, height: 72, borderRadius: '50%', backgroundColor: SIGNAL.graphite, color: SIGNAL.white, display: 'grid', placeItems: 'center', fontSize: 28, fontWeight: 950}}>?</div>
          <SignalIn delay={62} style={{position: 'absolute', left: 40, bottom: 54, width: 358, height: 130, borderRadius: 65, border: `4px solid ${SIGNAL.magenta}`, backgroundColor: SIGNAL.white, padding: '24px 28px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14, fontSize: 27, fontWeight: 950}}><X size={42} color={SIGNAL.magenta} /><SignalText kind="negation" color={SIGNAL.magenta} delay={74}>有人明确否认</SignalText></div>
            <div style={{marginTop: 10, fontSize: 24, fontWeight: 900}}>全体自认不生效</div>
          </SignalIn>
          <div style={{position: 'absolute', left: 414, bottom: 54, width: 8, height: 130, backgroundColor: SIGNAL.magenta, scale: `1 ${gate}`, transformOrigin: 'center top'}} />
          <SignalIn delay={78} style={{position: 'absolute', right: 32, bottom: 54, width: 400, height: 130, borderRadius: 65, border: `4px solid ${SIGNAL.teal}`, backgroundColor: SIGNAL.white, padding: '20px 28px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14, fontSize: 25, fontWeight: 950}}><Check size={42} color={SIGNAL.teal} />说明询问后仍不表态</div>
            <div style={{marginTop: 10, fontSize: 24, fontWeight: 900}}>视为全体自认</div>
          </SignalIn>
        </div>
        <SignalIn delay={98} style={{position: 'absolute', left: 520, right: 520, bottom: -4, textAlign: 'center', fontSize: 27, fontWeight: 950}}><SignalText kind="stamp" color={SIGNAL.magenta} delay={104}>必要共同诉讼：一票否决</SignalText></SignalIn>
      </div>
    </SignalCanvas>
  );
};

export const ConditionalAdmissionScene = () => {
  const frame = useCurrentFrame();
  const fork = interpolate(frame, [28, 56], [0, 1], CLAMP);
  return (
    <SignalCanvas code="04" title="附条件自认，先看是不是同一法律关系">
      <div data-layout="conditional-admission-relation-fork" data-visual-anchor="flow-path" data-text-treatments="label-block,thin-underline,soft-highlight,external-negation" data-visual-grammar="conditional-input,relation-test,split-outcome" data-focal-rule="conditional-admission-legal-relation" data-focal-channels="icon,connector,contrast,annotation" style={{position: 'absolute', left: 184, right: 72, top: 190, bottom: 72}}>
        <SignalIn delay={2} style={{position: 'absolute', left: 532, top: 0, width: 600, height: 118, borderRadius: 59, backgroundColor: SIGNAL.graphite, color: SIGNAL.white, display: 'grid', placeItems: 'center', fontSize: 34, fontWeight: 950}}>
          承认事实 <span style={{color: SIGNAL.yellow}}>+</span> 附加条件
        </SignalIn>
        <svg viewBox="0 0 1664 790" style={{position: 'absolute', inset: 0, width: '100%', height: '100%'}}>
          <path d="M832 118 L832 206 L402 290" fill="none" stroke={SIGNAL.teal} strokeWidth="9" pathLength="1" strokeDasharray="1" strokeDashoffset={1 - fork} strokeLinecap="round" />
          <path d="M832 118 L832 206 L1262 290" fill="none" stroke={SIGNAL.magenta} strokeWidth="9" pathLength="1" strokeDasharray="1" strokeDashoffset={1 - fork} strokeLinecap="round" />
        </svg>
        <SignalIn delay={30} style={{position: 'absolute', left: 28, top: 266, width: 690, height: 360, borderRadius: '122px 26px 26px 26px', backgroundColor: SIGNAL.white, border: `5px solid ${SIGNAL.teal}`, padding: '32px 40px'}}>
          <SignalText kind="label" color={SIGNAL.teal}>同一法律关系</SignalText>
          <div style={{marginTop: 28, display: 'flex', alignItems: 'center', gap: 18, fontSize: 31, fontWeight: 950}}><MessageSquareText size={48} color={SIGNAL.teal} />借款成立，但主张已经还款</div>
          <div style={{marginTop: 32, fontSize: 34, fontWeight: 950}}><SignalText kind="wave" color={SIGNAL.teal} delay={48}>统一认定</SignalText></div>
          <div style={{marginTop: 22, fontSize: 25, lineHeight: 1.45, fontWeight: 850}}><SignalText kind="negation" color={SIGNAL.magenta} delay={58}>不得只截取“借款成立”</SignalText></div>
        </SignalIn>
        <SignalIn delay={42} style={{position: 'absolute', right: 28, top: 266, width: 690, height: 360, borderRadius: '26px 122px 26px 26px', backgroundColor: SIGNAL.white, border: `5px solid ${SIGNAL.magenta}`, padding: '32px 40px', textAlign: 'right'}}>
          <SignalText kind="label" color={SIGNAL.magenta}>不同法律关系</SignalText>
          <div style={{marginTop: 28, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 18, fontSize: 31, fontWeight: 950}}>承认借款 <span style={{color: SIGNAL.muted}}>+</span> 另主张其他事实<FileSignature size={48} color={SIGNAL.magenta} /></div>
          <div style={{marginTop: 32, fontSize: 34, fontWeight: 950}}><SignalText kind="wave" color={SIGNAL.magenta} delay={62}>分别认定</SignalText></div>
          <div style={{marginTop: 22, fontSize: 25, lineHeight: 1.45, fontWeight: 850}}>承认部分构成自认；条件部分成为新的事实主张</div>
        </SignalIn>
        <SignalIn delay={82} style={{position: 'absolute', left: 420, right: 420, bottom: 2, textAlign: 'center', fontSize: 28, fontWeight: 950}}><SignalText kind="highlight" color={SIGNAL.yellow} delay={90}>部分自认：承认部分才发生自认效力</SignalText></SignalIn>
      </div>
    </SignalCanvas>
  );
};

export const WithdrawalCompromiseScene = () => {
  const frame = useCurrentFrame();
  const gate = interpolate(frame, [54, 78], [0, 1], CLAMP);
  return (
    <SignalCanvas code="05" title="撤销与调解妥协，不能混为一谈">
      <div data-layout="withdrawal-compromise-boundary" data-visual-anchor="boundary" data-text-treatments="label-block,stamp,thin-underline,external-negation" data-visual-grammar="time-limit,permission-gate,protected-compromise" data-focal-rule="admission-withdrawal-and-compromise" data-focal-channels="icon,connector,enclosure,annotation" style={{position: 'absolute', left: 184, right: 72, top: 190, bottom: 72}}>
        <SignalIn delay={2} style={{position: 'absolute', left: 0, top: 16, width: 760, height: 610, borderRadius: 48, backgroundColor: 'rgba(251,255,253,.9)', border: `5px solid ${SIGNAL.teal}`, padding: '30px 36px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 18, fontSize: 34, fontWeight: 950}}><Gavel size={52} color={SIGNAL.teal} /><SignalText kind="label" color={SIGNAL.teal}>撤销自认</SignalText></div>
          <div style={{marginTop: 30, fontSize: 28, fontWeight: 900}}>时点：<SignalText kind="wave" color={SIGNAL.teal} delay={18}>法庭辩论终结前</SignalText></div>
          <div style={{position: 'absolute', left: 64, top: 204, width: 500, height: 8, backgroundColor: SIGNAL.line}}><div style={{position: 'absolute', left: 0, top: -18, width: 42, height: 42, borderRadius: '50%', backgroundColor: SIGNAL.teal}} /><div style={{position: 'absolute', right: -8, top: -18, width: 42, height: 42, borderRadius: '50%', backgroundColor: SIGNAL.magenta, scale: `${gate}`, transformOrigin: 'center'}} /></div>
          <div style={{position: 'absolute', left: 64, top: 236, fontSize: 22, fontWeight: 850}}>作出自认</div><div style={{position: 'absolute', left: 510, top: 236, fontSize: 22, fontWeight: 850}}>辩论终结</div>
          <div style={{marginTop: 110, fontSize: 27, fontWeight: 950}}>满足任一项，法院应当准许：</div>
          <div style={{marginTop: 24, display: 'flex', gap: 20}}>
            <div style={{width: 318, minHeight: 130, borderRadius: 28, backgroundColor: SIGNAL.white, border: `4px solid ${SIGNAL.teal}`, padding: '22px 24px', fontSize: 26, lineHeight: 1.35, fontWeight: 900}}><Check size={38} color={SIGNAL.teal} /> 对方当事人同意</div>
            <div style={{width: 318, minHeight: 130, borderRadius: 28, backgroundColor: SIGNAL.white, border: `4px solid ${SIGNAL.magenta}`, padding: '22px 24px', fontSize: 26, lineHeight: 1.35, fontWeight: 900}}><Check size={38} color={SIGNAL.magenta} /> 受胁迫或重大误解</div>
          </div>
          <div style={{marginTop: 24, fontSize: 24, fontWeight: 850}}>准许撤销，应作出口头或书面裁定</div>
        </SignalIn>
        <SignalIn delay={22} style={{position: 'absolute', right: 0, top: 16, width: 760, height: 610, borderRadius: 48, backgroundColor: SIGNAL.graphite, color: SIGNAL.white, padding: '30px 36px'}}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 18, fontSize: 34, fontWeight: 950}}><SignalText kind="label" color={SIGNAL.yellow}>调解 / 和解妥协</SignalText><Users size={52} color={SIGNAL.yellow} /></div>
          <div style={{marginTop: 46, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, fontSize: 34, fontWeight: 950}}><MessageSquareText size={52} color={SIGNAL.yellow} />为达成协议而认可事实</div>
          <div style={{marginTop: 56, height: 8, backgroundColor: SIGNAL.yellow}} />
          <div style={{marginTop: 42, fontSize: 32, lineHeight: 1.45, textAlign: 'center', fontWeight: 950}}><SignalText kind="negation" color={SIGNAL.magenta} delay={52}>不得在后续诉讼中作为不利根据</SignalText></div>
          <div style={{marginTop: 46, textAlign: 'center', fontSize: 24, lineHeight: 1.45, color: SIGNAL.line, fontWeight: 850}}>例外：法律另有规定，或者当事人均同意</div>
          <div style={{marginTop: 50, textAlign: 'center', fontSize: 27, fontWeight: 950}}><SignalText kind="stamp" color={SIGNAL.yellow} delay={72}>不是可供对方直接援引的自认</SignalText></div>
        </SignalIn>
        <SignalIn delay={90} style={{position: 'absolute', left: 520, right: 520, bottom: 0, textAlign: 'center', fontSize: 27, fontWeight: 950}}><SignalText kind="highlight" color={SIGNAL.yellow} delay={98}>一边是撤销门槛，一边是妥协保护</SignalText></SignalIn>
      </div>
    </SignalCanvas>
  );
};
