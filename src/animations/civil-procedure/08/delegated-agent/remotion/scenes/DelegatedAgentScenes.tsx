import {Ban, Check, FileCheck2, FileSignature, Gavel, Handshake, KeyRound, PenLine, Scale, ShieldCheck, Stamp, UserRound, UserRoundCog, X} from 'lucide-react';
import {interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../../shared/remotion-runtime';
import {AuditNote, COLORS, Canvas, Mark, Reveal} from '../visual-system';

export const AuthorizationForkScene = () => {
  const frame = useCurrentFrame();
  const path = interpolate(frame, [16, 58], [0, 1], CLAMP);
  return (
    <Canvas code="01" title="先看授权内容，再判断能做什么">
      <div data-layout="authorization-letter-fork" data-visual-anchor="document-fork" data-text-treatments="thin-underline,soft-highlight,label-block" data-visual-grammar="source,fork,classification" data-focal-channels="icon,connector,enclosure,annotation" style={{position: 'absolute', left: 164, right: 52, top: 218, bottom: 42}}>
        <Reveal delay={2} style={{position: 'absolute', left: 60, top: 152, width: 380, height: 430, border: `6px solid ${COLORS.yellow}`, backgroundColor: COLORS.steel}}>
          <FileSignature size={132} color={COLORS.yellow} style={{position: 'absolute', left: 122, top: 76}} />
          <div style={{position: 'absolute', left: 0, right: 0, top: 245, textAlign: 'center', fontSize: 39, fontWeight: 900}}>委托授权书</div>
          <div style={{position: 'absolute', left: 0, right: 0, bottom: 54, textAlign: 'center', fontSize: 27, fontWeight: 800}}><Mark kind="underline" color={COLORS.yellow} delay={18}>授权内容</Mark>决定权限</div>
        </Reveal>
        <div style={{position: 'absolute', left: 440, top: 360, width: 330, height: 10, backgroundColor: COLORS.ivory, scale: `${path} 1`, transformOrigin: 'left center'}} />
        <div style={{position: 'absolute', left: 750, top: 190, width: 10, height: 350, backgroundColor: COLORS.ivory}} />
        <div data-focal-rule="authorization-fork" data-focal-channels="icon,connector,enclosure,annotation" style={{position: 'absolute', left: 760, right: 70, top: 74, bottom: 70}}>
          <Reveal delay={36} from="right" style={{position: 'absolute', left: 0, top: 0, width: 780, height: 220, borderLeft: `24px solid ${COLORS.cyan}`, backgroundColor: COLORS.steel, padding: '34px 44px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 22, fontSize: 42, fontWeight: 900}}><UserRoundCog size={68} color={COLORS.cyan} /><Mark kind="highlight" color="rgba(78,200,192,.17)" delay={44}>一般授权</Mark></div>
            <div style={{marginTop: 24, fontSize: 29, fontWeight: 800}}>行使程序性权利</div>
          </Reveal>
          <Reveal delay={52} from="right" style={{position: 'absolute', left: 0, bottom: 0, width: 780, height: 220, borderLeft: `24px solid ${COLORS.pink}`, backgroundColor: COLORS.steel, padding: '34px 44px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 22, fontSize: 42, fontWeight: 900}}><Scale size={68} color={COLORS.pink} /><Mark kind="underline" color={COLORS.pink} delay={60}>特别授权</Mark></div>
            <div style={{marginTop: 24, fontSize: 29, fontWeight: 800}}>处分实体权利，必须逐项明确</div>
          </Reveal>
        </div>
      </div>
      <AuditNote accent={COLORS.yellow}>委托代理权不是身份自带，而是授权书逐项给出的。</AuditNote>
    </Canvas>
  );
};

export const SpecialAuthorizationScene = () => (
  <Canvas code="02" title="“全权代理”四个字，打不开特别授权">
    <div data-layout="explicit-five-action-path" data-visual-anchor="typographic-sequence" data-text-treatments="stamp,external-negation,soft-highlight,thin-underline" data-visual-grammar="rejection,sequence,qualification" data-focal-channels="icon,annotation,enclosure,contrast" style={{position: 'absolute', left: 164, right: 52, top: 216, bottom: 42}}>
      <Reveal delay={2} style={{position: 'absolute', left: 50, top: 82, width: 430, height: 540, border: `7px solid ${COLORS.rust}`, backgroundColor: COLORS.steel}}>
        <Stamp size={92} color={COLORS.rust} style={{position: 'absolute', left: 46, top: 46}} />
        <div style={{position: 'absolute', left: 42, right: 42, top: 180, fontSize: 48, lineHeight: 1.25, fontWeight: 900}}><Mark kind="negation" color={COLORS.rust} delay={18}>全权代理</Mark></div>
        <div style={{position: 'absolute', left: 42, right: 42, top: 300, height: 5, backgroundColor: COLORS.rust}} />
        <div style={{position: 'absolute', left: 42, right: 42, bottom: 74, fontSize: 37, lineHeight: 1.4, fontWeight: 900}}>未写明具体事项<br />↓<br /><Mark kind="highlight" color="rgba(242,206,85,.72)" delay={30}>视为一般授权</Mark></div>
      </Reveal>
      <div data-focal-rule="five-explicit-actions" data-focal-channels="icon,annotation,enclosure,contrast" style={{position: 'absolute', left: 570, right: 40, top: 54, bottom: 70}}>
        <div style={{fontSize: 32, fontWeight: 900, color: COLORS.pink}}>特别授权必须逐项明确：</div>
        <div style={{marginTop: 42, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <Reveal delay={20} style={{fontSize: 42, fontWeight: 900}}><Check size={56} color={COLORS.cyan} /><Mark kind="highlight" color="rgba(240,106,145,.18)" delay={26}>承认</Mark></Reveal>
          <div style={{fontSize: 42, color: COLORS.muted}}>→</div>
          <Reveal delay={30} style={{fontSize: 42, fontWeight: 900}}><Ban size={56} color={COLORS.rust} /><Mark kind="negation" color={COLORS.rust} delay={36}>放弃</Mark></Reveal>
          <div style={{fontSize: 42, color: COLORS.muted}}>→</div>
          <Reveal delay={40} style={{fontSize: 42, fontWeight: 900}}><PenLine size={56} color={COLORS.yellow} /><Mark kind="underline" color={COLORS.yellow} delay={46}>变更诉请</Mark></Reveal>
        </div>
        <div style={{marginTop: 72, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 130}}>
          <Reveal delay={52} style={{fontSize: 44, fontWeight: 900}}><Handshake size={60} color={COLORS.cyan} /><Mark kind="highlight" color="rgba(78,200,192,.46)" delay={58}>和解</Mark></Reveal>
          <Reveal delay={64} style={{fontSize: 44, fontWeight: 900}}><Gavel size={60} color={COLORS.pink} /><Mark kind="underline" color={COLORS.pink} delay={70}>反诉 / 上诉</Mark></Reveal>
        </div>
      </div>
    </div>
    <AuditNote accent={COLORS.rust}>“全权代理”≠“五项特别授权”。</AuditNote>
  </Canvas>
);

export const MediationBoundaryScene = () => {
  const frame = useCurrentFrame();
  const path = interpolate(frame, [18, 66], [0, 1], CLAMP);
  return (
    <Canvas code="03" title="代为调解，到执行程序就必须停下">
      <div data-layout="mediation-boundary-lane" data-visual-anchor="boundary" data-text-treatments="thin-underline,external-negation,label-block" data-visual-grammar="flow,boundary,blocked-transition" data-focal-channels="icon,connector,enclosure,annotation" style={{position: 'absolute', left: 164, right: 52, top: 218, bottom: 42}}>
        <Reveal delay={2} style={{position: 'absolute', left: 52, top: 210, width: 330, height: 300, display: 'grid', placeItems: 'center', border: `6px solid ${COLORS.pink}`, backgroundColor: COLORS.steel}}><Handshake size={104} color={COLORS.pink} /><div style={{fontSize: 40, fontWeight: 900}}><Mark kind="underline" color={COLORS.pink} delay={12}>代为调解</Mark></div></Reveal>
        <div style={{position: 'absolute', left: 382, top: 356, width: 800, height: 10, backgroundColor: COLORS.cyan, scale: `${path} 1`, transformOrigin: 'left center'}} />
        <div data-focal-rule="mediation-scope" data-focal-channels="icon,connector,enclosure,annotation" style={{position: 'absolute', left: 500, top: 110, width: 650, height: 500, border: `7px dashed ${COLORS.cyan}`, backgroundColor: COLORS.steel}}>
          <div style={{position: 'absolute', left: 34, top: 28, fontSize: 26, fontWeight: 900, color: COLORS.cyan}}>授权边界内</div>
          {[['参加调解', <UserRound size={48} key="join" />], ['签署调解协议', <FileSignature size={48} key="sign" />], ['签收调解书', <FileCheck2 size={48} key="receive" />]].map(([label, icon], index) => <Reveal key={label as string} delay={30 + index * 10} style={{position: 'absolute', left: 58, top: 105 + index * 112, display: 'flex', alignItems: 'center', gap: 20, fontSize: 32, fontWeight: 900}}><span style={{width: 66, height: 66, display: 'grid', placeItems: 'center', backgroundColor: COLORS.cyan, color: COLORS.black}}>{icon}</span>{label}<Check size={38} color={COLORS.cyan} /></Reveal>)}
        </div>
        <div style={{position: 'absolute', left: 1215, top: 70, bottom: 66, width: 18, backgroundColor: COLORS.rust}} />
        <div style={{position: 'absolute', left: 1176, top: 315, width: 96, height: 96, display: 'grid', placeItems: 'center', backgroundColor: COLORS.rust, color: COLORS.black, fontSize: 62, fontWeight: 900}}>≠</div>
        <Reveal delay={66} from="right" style={{position: 'absolute', right: 40, top: 190, width: 390, height: 340, display: 'grid', placeItems: 'center', border: `6px solid ${COLORS.rust}`, backgroundColor: COLORS.black}}><KeyRound size={92} color={COLORS.rust} /><div style={{fontSize: 38, fontWeight: 900}}><Mark kind="negation" color={COLORS.rust} delay={72}>申请执行</Mark></div><div style={{fontSize: 25, color: COLORS.muted, fontWeight: 800}}>执行程序事项</div></Reveal>
      </div>
      <AuditNote accent={COLORS.pink}>调解授权不能外推出执行代理权。</AuditNote>
    </Canvas>
  );
};

export const StageBoundaryScene = () => {
  const frame = useCurrentFrame();
  const track = interpolate(frame, [10, 66], [0, 1], CLAMP);
  const key = interpolate(frame, [60, 92], [100, 0], CLAMP);
  return (
    <Canvas code="04" title="执行程序需要一项新的明确授权">
      <div data-layout="trial-to-execution-gate" data-visual-anchor="timeline-gate" data-text-treatments="soft-highlight,thin-underline,label-block" data-visual-grammar="timeline,gate,condition" data-focal-channels="icon,connector,enclosure,annotation" style={{position: 'absolute', left: 164, right: 52, top: 218, bottom: 42}}>
        <div style={{position: 'absolute', left: 80, right: 80, top: 350, height: 12, backgroundColor: COLORS.muted}} />
        <div style={{position: 'absolute', left: 80, top: 350, width: 1030, height: 12, backgroundColor: COLORS.cyan, scale: `${track} 1`, transformOrigin: 'left center'}} />
        {[{left: 110, title: '一审'}, {left: 520, title: '二审'}].map((item, index) => <Reveal key={item.title} delay={18 + index * 16} style={{position: 'absolute', left: item.left, top: 240, width: 280, height: 230, display: 'grid', placeItems: 'center', border: `6px solid ${COLORS.cyan}`, backgroundColor: COLORS.black}}><Check size={70} color={COLORS.cyan} /><div style={{fontSize: 40, fontWeight: 900}}>{item.title}</div><div style={{fontSize: 24, color: COLORS.cyan, fontWeight: 800}}>原授权范围</div></Reveal>)}
        <div data-focal-rule="execution-gate" data-focal-channels="icon,connector,enclosure,annotation" style={{position: 'absolute', left: 1010, top: 110, width: 210, height: 520, borderLeft: `22px solid ${COLORS.rust}`, borderRight: `22px solid ${COLORS.rust}`}}>{[0, 1, 2, 3, 4].map((bar) => <div key={bar} style={{position: 'absolute', left: 0, right: 0, top: 46 + bar * 91, height: 15, backgroundColor: COLORS.rust}} />)}</div>
        <Reveal delay={50} from="right" style={{position: 'absolute', right: 76, top: 170, width: 430}}><div style={{fontSize: 48, fontWeight: 900}}><Mark kind="highlight" color="rgba(216,90,64,.18)" delay={58}>执行程序</Mark></div><div style={{marginTop: 28, fontSize: 29, lineHeight: 1.45, fontWeight: 800}}>未明确授权<br />代理权到此停止</div></Reveal>
        <div style={{position: 'absolute', left: 1030, top: 650, display: 'flex', alignItems: 'center', gap: 22, translate: `0px ${key}px`, color: COLORS.yellow}}><KeyRound size={82} /><div style={{fontSize: 33, fontWeight: 900}}><Mark kind="underline" color={COLORS.yellow} delay={72}>明确授予执行代理权</Mark></div></div>
      </div>
      <AuditNote accent={COLORS.cyan}>“代为调解”≠“申请执行调解书”。</AuditNote>
    </Canvas>
  );
};
