import {AlertTriangle, Check, CircleHelp, FileCheck2, Gavel, Landmark, LockKeyhole, Scale, ShieldCheck, UserRound, UsersRound, X} from 'lucide-react';
import {interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../../shared/remotion-runtime';
import {AMBER, ArrowRail, CYAN, DocketCanvas, IconNode, INK, Label, Marker, MIST, MUTED, NAVY, PAPER, Reveal, CORAL, Stamp, Underline, WHITE} from '../visual-system';

export const CaveatsBoardScene = () => {
  const frame = useCurrentFrame();
  const gate = interpolate(frame, [60, 78], [0, 1], CLAMP);
  return (
    <DocketCanvas code="01" kicker="BURDEN OF PROOF / TRIGGER" title="先过触发门：真伪不明，风险才落下">
      <div data-layout="proof-trigger-gate" data-visual-anchor="boundary" data-text-treatments="label-block,soft-highlight,thin-underline,stamp" data-visual-grammar="comparison,boundary,consequence" data-focal-rule="ambiguity-triggers-burden" data-focal-channels="icon,connector,contrast,annotation" style={{position: 'absolute', inset: 0}}>
        <Reveal delay={8} style={{position: 'absolute', left: 0, top: 28, width: 486, height: 334, backgroundColor: WHITE, border: `6px solid ${CYAN}`, padding: '26px 30px'}}>
          <Label color={CYAN}>事实清楚</Label>
          <div style={{marginTop: 26, display: 'flex', alignItems: 'center', gap: 16}}><FileCheck2 size={58} strokeWidth={3} color={CYAN} /><div style={{fontSize: 36, lineHeight: 1.15, fontWeight: 950}}>证据已经指向<br /><Marker color={MIST}>存在或不存在</Marker></div></div>
          <div style={{marginTop: 30, fontSize: 25, fontWeight: 900, color: CYAN}}>法院直接以证据认定事实</div>
        </Reveal>
        <Reveal delay={18} direction="right" style={{position: 'absolute', left: 1048, top: 28, width: 546, height: 334, backgroundColor: WHITE, border: `6px solid ${CORAL}`, padding: '26px 30px'}}>
          <Label color={CORAL}>真伪不明</Label>
          <div style={{marginTop: 26, display: 'flex', alignItems: 'center', gap: 16}}><CircleHelp size={58} strokeWidth={3} color={CORAL} /><div style={{fontSize: 36, lineHeight: 1.15, fontWeight: 950}}>证据不足，事实<br /><Marker color="#f2d6cb">无法判断</Marker></div></div>
          <div style={{marginTop: 30, fontSize: 25, fontWeight: 900, color: CORAL}}>证明责任启动：谁承受不利后果？</div>
        </Reveal>
        <div style={{position: 'absolute', left: 488, top: 114, width: 560, height: 164, borderTop: `6px solid ${INK}`, borderBottom: `6px solid ${INK}`, display: 'grid', placeItems: 'center'}}>
          <Reveal delay={38} style={{textAlign: 'center'}}><Scale size={58} strokeWidth={3} color={AMBER} /><div style={{marginTop: 8, fontSize: 30, fontWeight: 950}}>证明责任不是查明事实</div><div style={{marginTop: 5, fontSize: 23, fontWeight: 850, color: MUTED}}>而是给真伪不明预先分配风险</div></Reveal>
          <div style={{position: 'absolute', left: 0, top: 0, width: 6, height: '100%', backgroundColor: INK, scale: `1 ${gate}`, transformOrigin: 'center top'}} />
        </div>
        <ArrowRail color={AMBER} delay={58} left={742} top={292} width={112} />
        <Reveal delay={86} direction="up" style={{position: 'absolute', left: 328, right: 328, top: 430, height: 116, backgroundColor: NAVY, color: PAPER, border: `6px solid ${INK}`, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18, fontSize: 31, fontWeight: 950}}>
          <AlertTriangle size={44} color={AMBER} strokeWidth={3} />
          <span>只有真伪不明，证明责任才变成不利风险</span>
        </Reveal>
      </div>
    </DocketCanvas>
  );
};

export const CourtOutsiderGateScene = () => {
  const frame = useCurrentFrame();
  const barrier = interpolate(frame, [64, 78], [0, 1], CLAMP);
  return (
    <DocketCanvas code="02" kicker="BURDEN OF PROOF / SUBJECTS" title="能取证的法院，不是证明责任主体">
      <div data-layout="party-single-burden-boundary" data-visual-anchor="boundary" data-text-treatments="label-block,thin-underline,external-negation,stamp" data-visual-grammar="exclusion,role-allocation,consequence" data-focal-rule="court-investigation-is-not-burden" data-focal-channels="icon,enclosure,connector,contrast" style={{position: 'absolute', inset: 0}}>
        <Reveal delay={8} style={{position: 'absolute', left: 0, top: 38, width: 1010, height: 460, backgroundColor: WHITE, border: `6px solid ${NAVY}`, padding: '24px 30px'}}>
          <Label color={NAVY}>证明责任场</Label>
          <div style={{marginTop: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24}}>
            <IconNode delay={28} color={CYAN} icon={UserRound} label="原告" detail="主张事实存在" style={{position: 'relative', width: 330, height: 132}} />
            <div style={{width: 250, textAlign: 'center'}}><ArrowRail color={AMBER} delay={46} left={38} top={0} width={174} /><div style={{marginTop: 62, fontSize: 29, lineHeight: 1.25, fontWeight: 950}}>同一待证事实<br /><Underline color={AMBER} delay={78}>一方承担风险</Underline></div></div>
            <IconNode delay={38} color={CORAL} icon={UserRound} label="被告" detail="主张事实不存在" style={{position: 'relative', width: 330, height: 132}} />
          </div>
          <Reveal delay={90} direction="up" style={{position: 'absolute', left: 30, right: 30, bottom: 26, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18, fontSize: 27, fontWeight: 900}}><UsersRound size={44} color={AMBER} /><span>单一事实不能让双方同时背结果责任</span></Reveal>
        </Reveal>
        <div style={{position: 'absolute', left: 1058, top: 38, width: 6, height: 460, backgroundColor: CORAL, scale: `1 ${barrier}`, transformOrigin: 'center top'}} />
        <Reveal delay={60} direction="right" style={{position: 'absolute', left: 1098, top: 38, width: 496, height: 460, backgroundColor: PAPER, border: `6px solid ${CORAL}`, padding: '24px 28px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 16}}><Landmark size={58} strokeWidth={3} color={CORAL} /><span style={{fontSize: 36, fontWeight: 950}}>法院</span><Label color={CORAL}>依职权调查</Label></div>
          <div style={{marginTop: 34, fontSize: 25, lineHeight: 1.55, fontWeight: 850, color: INK}}>可以调查涉及国家、社会、第三人利益、身份关系、程序性事项的证据。</div>
          <div style={{position: 'absolute', left: 28, right: 28, bottom: 30, borderTop: `4px solid ${CORAL}`, paddingTop: 20, display: 'flex', alignItems: 'center', gap: 14}}><X size={42} color={CORAL} strokeWidth={3.5} /><div style={{fontSize: 27, lineHeight: 1.25, fontWeight: 950}}>但法院不承担败诉风险</div></div>
        </Reveal>
        <Stamp delay={122} color={CORAL} style={{position: 'absolute', left: 490, top: 554, width: 370, textAlign: 'center', fontSize: 25}}>取证权 ≠ 证明责任</Stamp>
      </div>
    </DocketCanvas>
  );
};

export const FixedCounterproofScene = () => {
  return (
    <DocketCanvas code="03" kicker="BURDEN OF PROOF / ROUTING" title="结果责任固定，举证权利仍可反向进入">
      <div data-layout="fixed-burden-counterproof-route" data-visual-anchor="flow-path" data-text-treatments="label-block,soft-highlight,thin-underline,stamp" data-visual-grammar="preassignment,contrast,counterproof" data-focal-rule="fixed-result-burden-counterproof" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
        <Reveal delay={8} style={{position: 'absolute', left: 0, top: 26, width: 420, height: 456, backgroundColor: NAVY, color: PAPER, border: `6px solid ${INK}`, padding: '26px 28px'}}>
          <LockKeyhole size={64} color={AMBER} strokeWidth={3} />
          <div style={{marginTop: 26, fontSize: 37, lineHeight: 1.17, fontWeight: 950}}>法律 / 司法解释</div>
          <div style={{marginTop: 22, fontSize: 27, lineHeight: 1.4, fontWeight: 850, color: '#d7e3e2'}}>先把真伪不明时的<br /><Marker color="#536978">结果责任</Marker>固定下来</div>
          <Stamp delay={68} color={AMBER} style={{position: 'absolute', left: 28, bottom: 34, fontSize: 24}}>不在诉讼中转移</Stamp>
        </Reveal>
        <ArrowRail color={AMBER} delay={46} left={430} top={200} width={160} />
        <Reveal delay={52} style={{position: 'absolute', left: 600, top: 70, width: 410, height: 356, backgroundColor: WHITE, border: `6px solid ${CORAL}`, padding: '26px 28px'}}>
          <Label color={CORAL}>负担者 A</Label>
          <div style={{marginTop: 24, display: 'flex', alignItems: 'center', gap: 14}}><ShieldCheck size={54} color={CORAL} strokeWidth={3} /><span style={{fontSize: 33, fontWeight: 950}}>承担结果风险</span></div>
          <div style={{marginTop: 26, fontSize: 27, lineHeight: 1.42, fontWeight: 850}}>证据不足、真伪不明<br /><Underline color={CORAL} delay={104}>不利后果仍由 A 承受</Underline></div>
        </Reveal>
        <Reveal delay={70} direction="right" style={{position: 'absolute', left: 1060, top: 70, width: 534, height: 356, backgroundColor: MIST, border: `6px solid ${CYAN}`, padding: '26px 28px'}}>
          <Label color={CYAN}>非负担者 B</Label>
          <div style={{marginTop: 24, display: 'flex', alignItems: 'center', gap: 14}}><FileCheck2 size={54} color={CYAN} strokeWidth={3} /><span style={{fontSize: 33, fontWeight: 950}}>可以积极举证</span></div>
          <div style={{marginTop: 26, fontSize: 27, lineHeight: 1.42, fontWeight: 850}}>B 提出的证据叫<strong style={{color: CYAN}}>反证</strong><br /><Underline color={CYAN} delay={118}>动摇心证，不接管结果责任</Underline></div>
        </Reveal>
        <ArrowRail color={CYAN} delay={120} left={1016} top={232} width={38} />
        <Reveal delay={132} direction="up" style={{position: 'absolute', left: 300, right: 300, top: 514, height: 104, borderTop: `5px solid ${INK}`, borderBottom: `5px solid ${INK}`, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18, fontSize: 29, fontWeight: 950}}><LockKeyhole size={40} color={CORAL} />不转移的是结果责任；可以流动的是举证权利</Reveal>
      </div>
    </DocketCanvas>
  );
};

export const FictionVerdictScene = () => {
  const frame = useCurrentFrame();
  const split = interpolate(frame, [92, 108], [0, 1], CLAMP);
  return (
    <DocketCanvas code="04" kicker="BURDEN OF PROOF / FICTION" title="李四案：裁判拟制不等于客观事实">
      <div data-layout="fact-verdict-divergence" data-visual-anchor="role-pair" data-text-treatments="label-block,soft-highlight,thin-underline,stamp" data-visual-grammar="causal-chain,comparison,consequence" data-focal-rule="fiction-can-diverge-from-fact" data-focal-channels="icon,connector,contrast,annotation" style={{position: 'absolute', inset: 0}}>
        <Reveal delay={8} style={{position: 'absolute', left: 0, top: 24, width: 470, height: 118, backgroundColor: WHITE, border: `5px solid ${CYAN}`, padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 16}}><UserRound size={52} color={CYAN} strokeWidth={3} /><div><div style={{fontSize: 29, fontWeight: 950}}>张三起诉李四</div><div style={{marginTop: 4, fontSize: 22, fontWeight: 850, color: MUTED}}>主张：李四殴打自己</div></div></Reveal>
        <ArrowRail color={AMBER} delay={28} left={486} top={62} width={110} />
        <Reveal delay={34} style={{position: 'absolute', left: 620, top: 24, width: 510, height: 118, backgroundColor: PAPER, border: `5px solid ${AMBER}`, padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 16}}><CircleHelp size={52} color={AMBER} strokeWidth={3} /><div><div style={{fontSize: 29, fontWeight: 950}}>证据不足</div><div style={{marginTop: 4, fontSize: 22, fontWeight: 850, color: MUTED}}>李四是否殴打，真伪不明</div></div></Reveal>
        <ArrowRail color={CORAL} delay={46} left={1146} top={62} width={110} />
        <Reveal delay={52} direction="right" style={{position: 'absolute', left: 1280, top: 24, width: 314, height: 118, backgroundColor: NAVY, color: PAPER, border: `5px solid ${INK}`, padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 14}}><Gavel size={50} color={AMBER} strokeWidth={3} /><div><div style={{fontSize: 28, fontWeight: 950}}>法院适用责任</div><div style={{marginTop: 4, fontSize: 21, fontWeight: 850, color: '#d7e3e2'}}>推定主张不成立</div></div></Reveal>
        <Reveal delay={70} style={{position: 'absolute', left: 0, top: 212, width: 744, height: 278, backgroundColor: MIST, border: `6px solid ${CYAN}`, padding: '26px 30px'}}><Label color={CYAN}>客观事实</Label><div style={{marginTop: 28, display: 'flex', alignItems: 'center', gap: 16}}><Check size={56} color={CYAN} strokeWidth={3.5} /><span style={{fontSize: 39, fontWeight: 950}}>李四确实殴打了张三</span></div><div style={{marginTop: 24, fontSize: 26, fontWeight: 850, color: MUTED}}>事实可能为真，只是没有被充分证明</div></Reveal>
        <div style={{position: 'absolute', left: 744, top: 246, width: 156, height: 176, display: 'grid', placeItems: 'center', opacity: split, scale: `${0.72 + 0.28 * split}`}}><div style={{fontSize: 92, lineHeight: 1, fontWeight: 950, color: CORAL}}>≠</div><Label color={CORAL}>拟制边界</Label></div>
        <Reveal delay={86} direction="right" style={{position: 'absolute', left: 900, top: 212, width: 694, height: 278, backgroundColor: WHITE, border: `6px solid ${CORAL}`, padding: '26px 30px'}}><Label color={CORAL}>裁判拟制</Label><div style={{marginTop: 28, display: 'flex', alignItems: 'center', gap: 16}}><X size={56} color={CORAL} strokeWidth={3.5} /><span style={{fontSize: 39, fontWeight: 950}}>侵权事实不成立</span></div><div style={{marginTop: 24, fontSize: 26, fontWeight: 850, color: MUTED}}>依法把不利后果交给证明责任负担者</div></Reveal>
        <Stamp delay={126} color={AMBER} style={{position: 'absolute', left: 254, right: 254, top: 532, textAlign: 'center', fontSize: 25}}>证明责任是风险分配，不是事实改写</Stamp>
      </div>
    </DocketCanvas>
  );
};
