import {BookOpenCheck, FileCheck2, Gavel, PauseCircle, RefreshCw, ShieldCheck, UserRound, UserRoundCog, X} from 'lucide-react';
import {interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../../shared/remotion-runtime';
import {COLORS, Canvas, CaptionRail, Mark, Reveal} from '../visual-system';

export const SourceOfAuthorityScene = () => {
  const frame = useCurrentFrame();
  const route = interpolate(frame, [16, 58], [0, 1], CLAMP);
  return (
    <Canvas scene="01" title="谁授予代理权？">
      <div data-layout="direct-authority-flow" data-visual-anchor="flow-path" data-text-treatments="thin-underline,soft-highlight,label-block" data-visual-grammar="flow,source,target" data-focal-channels="icon,connector,enclosure,annotation" style={{position: 'absolute', inset: '238px 72px 148px'}}>
        <Reveal delay={2} style={{position: 'absolute', left: 70, top: 150, width: 360, height: 360, display: 'grid', placeItems: 'center', border: `6px solid ${COLORS.navy}`, backgroundColor: COLORS.white}}>
          <BookOpenCheck size={126} color={COLORS.navy} strokeWidth={1.7} />
          <div style={{position: 'absolute', bottom: 50, fontSize: 42, fontWeight: 900}}><Mark kind="underline" color={COLORS.coral} delay={12}>法律规定</Mark></div>
        </Reveal>
        <div style={{position: 'absolute', left: 430, top: 325, width: 430, height: 10, backgroundColor: COLORS.coral, scale: `${route} 1`, transformOrigin: 'left center'}} />
        <div style={{position: 'absolute', left: 552, top: 260, padding: '12px 18px', backgroundColor: COLORS.paper, fontSize: 28, fontWeight: 900}}><Mark kind="highlight" color="rgba(217,90,60,.16)" delay={28}>无需授权书</Mark></div>
        <Reveal delay={38} style={{position: 'absolute', left: 840, top: 112, width: 380, height: 430, display: 'grid', placeItems: 'center', backgroundColor: COLORS.ink, color: COLORS.white, borderBottom: `18px solid ${COLORS.coral}`}}>
          <UserRoundCog size={128} color={COLORS.coral} strokeWidth={1.7} />
          <div style={{position: 'absolute', bottom: 70, fontSize: 40, fontWeight: 900}}>法定代理人</div>
          <div style={{position: 'absolute', bottom: 28, fontSize: 25, fontWeight: 800, color: COLORS.paperDeep}}>法律规定的全权代理</div>
        </Reveal>
        <div data-focal-rule="legal-source" data-focal-channels="icon,connector,enclosure,annotation" style={{position: 'absolute', right: 42, top: 112, width: 430, height: 430, display: 'grid', placeItems: 'center', border: `8px double ${COLORS.teal}`, borderRadius: '50%', backgroundColor: COLORS.white}}>
          <ShieldCheck size={126} color={COLORS.teal} strokeWidth={1.7} />
          <div style={{position: 'absolute', bottom: 74, textAlign: 'center', fontSize: 35, fontWeight: 900}}>无诉讼行为能力的<br />当事人</div>
        </div>
        <div style={{position: 'absolute', left: 1220, top: 325, width: 248, height: 10, backgroundColor: COLORS.teal, scale: `${route} 1`, transformOrigin: 'left center'}} />
      </div>
      <CaptionRail accent={COLORS.teal}>法定代理：法律直接授权，不以委托授权书为前提。</CaptionRail>
    </Canvas>
  );
};

export const PartyIdentityScene = () => {
  const frame = useCurrentFrame();
  const effect = interpolate(frame, [38, 76], [0, 1], CLAMP);
  return (
    <Canvas scene="02" title="谁行动？法律效果归谁？">
      <div data-layout="action-effect-handoff" data-visual-anchor="role-pair" data-text-treatments="label-block,soft-highlight" data-visual-grammar="causal,handoff,identity" data-focal-channels="icon,connector,annotation,motion" style={{position: 'absolute', inset: '238px 72px 148px'}}>
        <Reveal delay={2} style={{position: 'absolute', left: 90, top: 92, width: 560, height: 500, border: `6px solid ${COLORS.coral}`, backgroundColor: COLORS.white}}>
          <div style={{position: 'absolute', left: 34, top: 28, fontSize: 28, fontWeight: 900, color: COLORS.coral}}>WHO ACTS?</div>
          <UserRoundCog size={160} color={COLORS.coral} style={{position: 'absolute', left: 194, top: 100}} />
          <div style={{position: 'absolute', left: 0, right: 0, top: 286, textAlign: 'center', fontSize: 43, fontWeight: 900}}>法定代理人行动</div>
          <div style={{position: 'absolute', left: 62, right: 62, bottom: 48, display: 'flex', justifyContent: 'space-between', fontSize: 28, fontWeight: 900}}><span>起诉</span><span>应诉</span><span>举证</span></div>
        </Reveal>
        <div style={{position: 'absolute', left: 650, top: 334, width: 500, height: 12, backgroundColor: COLORS.yellow, scale: `${effect} 1`, transformOrigin: 'left center'}} />
        <FileCheck2 size={86} color={COLORS.yellow} style={{position: 'absolute', left: 850, top: 270, opacity: effect}} />
        <div data-focal-rule="party-identity" data-focal-channels="icon,connector,annotation,motion" style={{position: 'absolute', right: 70, top: 92, width: 580, height: 500, border: `8px solid ${COLORS.teal}`, backgroundColor: COLORS.ink, color: COLORS.white}}>
          <div style={{position: 'absolute', left: 34, top: 28, fontSize: 28, fontWeight: 900, color: COLORS.teal}}>WHO OWNS THE EFFECT?</div>
          <UserRound size={160} color={COLORS.teal} style={{position: 'absolute', left: 210, top: 96}} />
          <div style={{position: 'absolute', left: 0, right: 0, top: 282, textAlign: 'center', fontSize: 44, fontWeight: 900}}><Mark kind="highlight" color="rgba(11,143,120,.55)" delay={54}>以当事人名义</Mark></div>
          <div style={{position: 'absolute', left: 0, right: 0, bottom: 54, textAlign: 'center', fontSize: 29, fontWeight: 800}}>法律效果归于当事人</div>
        </div>
      </div>
      <CaptionRail accent={COLORS.yellow}>代理人完成诉讼行为，但不会因此变成当事人。</CaptionRail>
    </Canvas>
  );
};

export const JudgmentTargetScene = () => {
  const frame = useCurrentFrame();
  const route = interpolate(frame, [14, 58], [0, 1], CLAMP);
  return (
    <Canvas scene="03" title="裁判到底给谁？">
      <div data-layout="verdict-target-route" data-visual-anchor="flow-target" data-text-treatments="soft-highlight,external-negation,label-block" data-visual-grammar="routing,targeting,exclusion" data-focal-channels="icon,connector,locator,annotation" style={{position: 'absolute', inset: '238px 72px 148px'}}>
        <Reveal delay={2} style={{position: 'absolute', left: 90, top: 130, width: 360, height: 390, display: 'grid', placeItems: 'center', backgroundColor: COLORS.navy, color: COLORS.white}}><Gavel size={136} /><div style={{position: 'absolute', bottom: 54, fontSize: 42, fontWeight: 900}}>人民法院</div></Reveal>
        <div style={{position: 'absolute', left: 450, top: 316, width: 650, height: 12, backgroundColor: COLORS.teal, scale: `${route} 1`, transformOrigin: 'left center'}} />
        <FileCheck2 size={122} color={COLORS.teal} style={{position: 'absolute', left: 710, top: 248, opacity: route}} />
        <div data-focal-rule="judgment-target" data-focal-channels="icon,connector,locator,annotation" style={{position: 'absolute', right: 90, top: 82, width: 520, height: 520, borderRadius: '50%', border: `10px solid ${COLORS.teal}`, display: 'grid', placeItems: 'center', backgroundColor: COLORS.white}}>
          <ShieldCheck size={150} color={COLORS.teal} />
          <div style={{position: 'absolute', bottom: 84, fontSize: 43, fontWeight: 900}}><Mark kind="highlight" color="rgba(11,143,120,.16)" delay={50}>当事人</Mark></div>
        </div>
        <Reveal delay={62} style={{position: 'absolute', left: 760, top: 510, display: 'flex', alignItems: 'center', gap: 18, fontSize: 30, fontWeight: 900}}><UserRoundCog size={58} color={COLORS.graphite} /><Mark kind="negation" color={COLORS.coral} delay={66}>裁判对象：法定代理人</Mark></Reveal>
      </div>
      <CaptionRail accent={COLORS.teal}>裁判针对当事人，而不是法定代理人。</CaptionRail>
    </Canvas>
  );
};

export const DeathConsequencesScene = () => (
  <Canvas scene="04" title="谁死亡，诉讼后果完全不同">
    <div data-layout="death-consequence-split" data-visual-anchor="comparison-axis" data-text-treatments="label-block,thin-underline" data-visual-grammar="comparison,branching,continuation" data-focal-channels="icon,connector,contrast,annotation" style={{position: 'absolute', inset: '238px 72px 148px'}}>
      <div style={{position: 'absolute', left: '50%', top: 30, bottom: 36, width: 5, backgroundColor: COLORS.ink}} />
      <Reveal delay={2} style={{position: 'absolute', left: 70, top: 40, width: 700}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 20, fontSize: 42, fontWeight: 900}}><UserRound size={68} />当事人死亡</div>
        <div data-focal-rule="party-death" data-focal-channels="icon,connector,contrast,annotation" style={{marginTop: 42, borderTop: `12px solid ${COLORS.coral}`, paddingTop: 54, display: 'flex', justifyContent: 'space-between'}}>
          {[['中止', <PauseCircle size={54} key="pause" />], ['变更', <RefreshCw size={54} key="change" />], ['终结', <X size={54} key="end" />]].map(([label, icon]) => <div key={label as string} style={{width: 190, height: 190, display: 'grid', placeItems: 'center', backgroundColor: COLORS.white, boxShadow: `10px 10px 0 ${COLORS.paperDeep}`, fontSize: 34, fontWeight: 900}}><span style={{color: COLORS.coral}}>{icon}</span>{label}</div>)}
        </div>
      </Reveal>
      <Reveal delay={22} from="right" style={{position: 'absolute', right: 40, top: 40, width: 700}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 20, fontSize: 42, fontWeight: 900}}><UserRoundCog size={68} />法定代理人死亡</div>
        <div data-focal-rule="agent-replacement" data-focal-channels="icon,connector,motion,annotation" style={{marginTop: 42, borderTop: `12px solid ${COLORS.teal}`, paddingTop: 48, display: 'flex', alignItems: 'center', gap: 26}}>
          <UserRoundCog size={112} color={COLORS.graphite} />
          <RefreshCw size={86} color={COLORS.teal} />
          <UserRoundCog size={112} color={COLORS.teal} />
          <div style={{fontSize: 35, lineHeight: 1.35, fontWeight: 900}}><Mark kind="underline" color={COLORS.teal} delay={52}>更换代理人</Mark><br />继续诉讼</div>
        </div>
      </Reveal>
    </div>
    <CaptionRail accent={COLORS.coral}>代理人死亡，不等于当事人死亡。</CaptionRail>
  </Canvas>
);
