import {ArrowDownRight, Building2, Check, CircleHelp, Factory, Footprints, Gavel, ShieldX, UserRound} from 'lucide-react';
import {interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../../shared/remotion-runtime';
import {ArrowLine, ConstructivistCanvas, CutIn, INK, Treatment} from '../visual-system';

export const BurdenRiskScene = () => {
  const frame = useCurrentFrame();
  const wedge = interpolate(frame, [34, 64], [0, 1], CLAMP);
  return (
    <ConstructivistCanvas code="01" title="真伪不明，风险才落下">
      <div data-layout="constructivist-risk-wedge" data-visual-anchor="boundary" data-text-treatments="label-block,soft-highlight,stamp" data-visual-grammar="state-boundary,consequence,preassignment" data-focal-rule="unresolved-risk-drop" data-focal-channels="icon,enclosure,connector,spatial" style={{position: 'absolute', left: 68, right: 68, top: 225, bottom: 72}}>
        <CutIn delay={4} style={{position: 'absolute', left: 0, top: 18, width: 520, height: 230, backgroundColor: INK.white, border: `6px solid ${INK.black}`, padding: '28px 32px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 18, fontSize: 33, fontWeight: 950}}><Check size={50} strokeWidth={3} color={INK.green} />事实证明为真</div>
          <div style={{marginTop: 24, fontSize: 28, lineHeight: 1.5, fontWeight: 800}}>证据已经形成确信</div>
          <div style={{marginTop: 20, fontSize: 25, fontWeight: 900, color: INK.green}}>直接按证据裁判</div>
        </CutIn>
        <CutIn delay={14} style={{position: 'absolute', left: 0, top: 278, width: 520, height: 230, backgroundColor: INK.black, color: INK.white, padding: '34px 38px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 18, fontSize: 33, fontWeight: 950}}><ShieldX size={50} strokeWidth={3} color={INK.yellow} />事实证明为假</div>
          <div style={{marginTop: 24, fontSize: 28, lineHeight: 1.5, fontWeight: 800}}>反证已经形成确信</div>
          <div style={{marginTop: 20, fontSize: 25, fontWeight: 900, color: INK.yellow}}>仍然按证据裁判</div>
        </CutIn>
        <div style={{position: 'absolute', left: 574, top: 0, width: 210, height: 560, backgroundColor: INK.red, clipPath: 'polygon(0 0,100% 14%,64% 100%,18% 82%)', scale: `${wedge} 1`, transformOrigin: 'left center'}} />
        <CutIn delay={30} direction="up" style={{position: 'absolute', left: 592, top: 102, width: 178, textAlign: 'center', color: INK.white}}>
          <CircleHelp size={72} strokeWidth={3} style={{margin: '0 auto 18px'}} />
          <div style={{fontSize: 34, lineHeight: 1.25, fontWeight: 950}}>真伪<br />不明</div>
        </CutIn>
        <ArrowLine left={788} top={268} width={170} color={INK.red} delay={50} />
        <CutIn delay={58} direction="right" style={{position: 'absolute', right: 0, top: 44, width: 750, height: 438, border: `8px solid ${INK.red}`, backgroundColor: INK.white, padding: '40px 44px'}}>
          <Treatment kind="label" color={INK.red}>证明责任启动</Treatment>
          <div style={{marginTop: 34, fontSize: 35, lineHeight: 1.5, fontWeight: 950}}>法律已经预先指定<br /><Treatment kind="underline" color={INK.red} delay={70}>由哪一方承受风险</Treatment></div>
          <div style={{marginTop: 34, display: 'flex', alignItems: 'center', gap: 22, fontSize: 31, fontWeight: 900}}><Gavel size={54} strokeWidth={3} color={INK.cobalt} />负担者的事实主张被视为不成立</div>
          <div style={{position: 'absolute', right: 34, bottom: 30}}><Treatment kind="stamp" color={INK.red} delay={88}>承担不利后果</Treatment></div>
        </CutIn>
        <CutIn delay={92} style={{position: 'absolute', left: 0, right: 0, bottom: 0, height: 112, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: INK.yellow, fontSize: 34, fontWeight: 950}}>
          <Treatment kind="highlight" color={INK.white} delay={100}>事实清楚</Treatment><span style={{margin: '0 22px'}}>看证据</span><span style={{fontSize: 44}}>／</span><Treatment kind="highlight" color={INK.white} delay={104}>真伪不明</Treatment><span style={{marginLeft: 22}}>看证明责任</span>
        </CutIn>
      </div>
    </ConstructivistCanvas>
  );
};

export const AffirmativeBurdenScene = () => {
  const frame = useCurrentFrame();
  const axis = interpolate(frame, [8, 36], [0, 1], CLAMP);
  const cases = [
    {left: '借了', right: '还了', note: '各自证明自己主张的积极事实', top: 84},
    {left: '侵权事实存在', right: '免责事由存在', note: '原告证构成，被告证免责', top: 250},
    {left: '代理权存在', right: '合同已经履行', note: '主张存在或已履行的一方证明', top: 416},
  ];
  return (
    <ConstructivistCanvas code="02" title="积极事实，跟着主张者走">
      <div data-layout="claimant-opposition-axis" data-visual-anchor="comparison-axis" data-text-treatments="label-block,thin-underline,soft-highlight" data-visual-grammar="opposition,attribution,examples" data-focal-rule="affirmative-fact-follows-claimant" data-focal-channels="icon,connector,contrast,annotation" style={{position: 'absolute', left: 68, right: 68, top: 226, bottom: 72}}>
        <div style={{position: 'absolute', left: '50%', top: 0, bottom: 120, width: 8, backgroundColor: INK.black, scale: `1 ${axis}`, transformOrigin: 'center top'}} />
        <CutIn delay={4} style={{position: 'absolute', left: 0, top: 0, width: 390, height: 70, display: 'flex', alignItems: 'center', gap: 18, backgroundColor: INK.cobalt, color: INK.white, padding: '0 28px', fontSize: 31, fontWeight: 950}}><UserRound size={44} strokeWidth={3} />主张者 A</CutIn>
        <CutIn delay={4} direction="right" style={{position: 'absolute', right: 0, top: 0, width: 390, height: 70, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 18, backgroundColor: INK.red, color: INK.white, padding: '0 28px', fontSize: 31, fontWeight: 950}}>主张者 B<UserRound size={44} strokeWidth={3} /></CutIn>
        {cases.map((item, index) => (
          <div key={item.left}>
            <CutIn delay={18 + index * 20} style={{position: 'absolute', left: 38 + index * 28, top: item.top, width: 570, height: 126, backgroundColor: index % 2 ? INK.black : INK.white, color: index % 2 ? INK.white : INK.black, border: `5px solid ${INK.cobalt}`, padding: '22px 28px'}}>
              <div style={{fontSize: 33, fontWeight: 950}}>{item.left}</div>
              <div style={{marginTop: 10, fontSize: 23, fontWeight: 800, color: index % 2 ? INK.yellow : INK.cobalt}}>A 承担证明责任</div>
            </CutIn>
            <ArrowLine left={646 + index * 12} top={item.top + 58} width={160 - index * 12} color={INK.cobalt} delay={28 + index * 20} />
            <CutIn delay={24 + index * 20} direction="right" style={{position: 'absolute', right: 38 + index * 28, top: item.top, width: 570, height: 126, backgroundColor: index % 2 ? INK.white : INK.black, color: index % 2 ? INK.black : INK.white, border: `5px solid ${INK.red}`, padding: '22px 28px', textAlign: 'right'}}>
              <div style={{fontSize: 33, fontWeight: 950}}>{item.right}</div>
              <div style={{marginTop: 10, fontSize: 23, fontWeight: 800, color: index % 2 ? INK.red : INK.yellow}}>B 承担证明责任</div>
            </CutIn>
            <div style={{position: 'absolute', left: 660, right: 660, top: item.top + 92, textAlign: 'center', fontSize: 24, lineHeight: 1.2, fontWeight: 900}}>{item.note}</div>
          </div>
        ))}
        <CutIn delay={88} direction="up" style={{position: 'absolute', left: 300, right: 300, bottom: 0, height: 106, backgroundColor: INK.yellow, border: `6px solid ${INK.black}`, display: 'grid', placeItems: 'center', fontSize: 35, fontWeight: 950}}>
          谁主张<Treatment kind="underline" color={INK.red} delay={98}>积极事实</Treatment>，谁承担证明责任
        </CutIn>
      </div>
    </ConstructivistCanvas>
  );
};

export const TwoInversionsScene = () => {
  const frame = useCurrentFrame();
  const flipA = interpolate(frame, [42, 68], [0, 1], CLAMP);
  const flipB = interpolate(frame, [68, 94], [0, 1], CLAMP);
  return (
    <ConstructivistCanvas code="03" title="倒置，只翻转一个证明要件">
      <div data-layout="dual-inversion-flaps" data-visual-anchor="role-pair" data-text-treatments="label-block,external-negation,thin-underline,stamp" data-visual-grammar="presumption,transfer,contrast" data-focal-rule="single-element-inversion" data-focal-channels="icon,motion,connector,annotation" style={{position: 'absolute', left: 68, right: 68, top: 226, bottom: 72}}>
        <div style={{position: 'absolute', inset: '0 50% 0 0', backgroundColor: INK.cobalt, clipPath: 'polygon(0 0,100% 0,88% 100%,0 100%)'}} />
        <div style={{position: 'absolute', inset: '0 0 0 46%', backgroundColor: INK.red, clipPath: 'polygon(12% 0,100% 0,100% 100%,0 100%)'}} />
        <CutIn delay={4} style={{position: 'absolute', left: 42, top: 34, width: 720, color: INK.white}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 22}}><Factory size={72} strokeWidth={2.8} /><div><Treatment kind="label" color={INK.yellow}>环境污染 / 生态破坏</Treatment><div style={{marginTop: 18, fontSize: 37, fontWeight: 950}}>因果关系倒置</div></div></div>
          <div style={{marginTop: 42, fontSize: 29, lineHeight: 1.6, fontWeight: 850}}>原告证明：行为 + 损害结果</div>
        </CutIn>
        <CutIn delay={16} direction="right" style={{position: 'absolute', right: 42, top: 34, width: 720, color: INK.white, textAlign: 'right'}}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 22}}><div><Treatment kind="label" color={INK.black}>教育 / 医疗 / 动物园等</Treatment><div style={{marginTop: 18, fontSize: 37, fontWeight: 950}}>过错倒置</div></div><Building2 size={72} strokeWidth={2.8} /></div>
          <div style={{marginTop: 42, fontSize: 29, lineHeight: 1.6, fontWeight: 850}}>原告证明：行为 + 结果 + 因果</div>
        </CutIn>
        <div style={{position: 'absolute', left: 112, top: 320, width: 650, height: 200, backgroundColor: INK.white, color: INK.black, border: `7px solid ${INK.black}`, padding: '30px 34px', rotate: `${-7 + flipA * 7}deg`}}>
          <div style={{fontSize: 25, fontWeight: 900, color: INK.cobalt}}>被告接手证明</div>
          <div style={{marginTop: 24, fontSize: 38, fontWeight: 950}}><Treatment kind="negation" color={INK.red} delay={52}>不存在因果关系</Treatment></div>
          <div style={{marginTop: 20, fontSize: 25, fontWeight: 850}}>另证法定免责事由</div>
        </div>
        <div style={{position: 'absolute', right: 112, top: 320, width: 650, height: 200, backgroundColor: INK.white, color: INK.black, border: `7px solid ${INK.black}`, padding: '30px 34px', rotate: `${7 - flipB * 7}deg`, textAlign: 'right'}}>
          <div style={{fontSize: 25, fontWeight: 900, color: INK.red}}>被告接手证明</div>
          <div style={{marginTop: 24, fontSize: 38, fontWeight: 950}}><Treatment kind="negation" color={INK.red} delay={78}>自己没有过错</Treatment></div>
          <div style={{marginTop: 20, fontSize: 25, fontWeight: 850}}>另证法定免责事由</div>
        </div>
        <CutIn delay={96} direction="up" style={{position: 'absolute', left: 360, right: 360, bottom: 22, height: 114, backgroundColor: INK.yellow, border: `7px solid ${INK.black}`, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, fontSize: 32, fontWeight: 950}}>
          <ArrowDownRight size={48} strokeWidth={3} />倒置的是特定要件，不是全部证明责任
        </CutIn>
      </div>
    </ConstructivistCanvas>
  );
};

export const ThreeStepsScene = () => {
  const steps = [
    {number: '1', icon: UserRound, title: '先定谁主张', detail: '原告证构成要件\n被告证免责事由', color: INK.cobalt, left: 0, top: 356},
    {number: '2', icon: Gavel, title: '再定归责原则', detail: '无过错：三要件\n一般过错：四要件', color: INK.red, left: 520, top: 188},
    {number: '3', icon: Footprints, title: '最后查倒置', detail: '环境：因果倒置\n过错推定：过错倒置', color: INK.black, left: 1040, top: 20},
  ];
  return (
    <ConstructivistCanvas code="04" title="三步走：主体 → 要件 → 倒置">
      <div data-layout="constructivist-proof-stair" data-visual-anchor="flow-path" data-text-treatments="label-block,soft-highlight,thin-underline,stamp" data-visual-grammar="sequence,ascent,checkpoint" data-focal-rule="three-step-proof-order" data-focal-channels="icon,connector,spatial,annotation" style={{position: 'absolute', left: 68, right: 68, top: 226, bottom: 72}}>
        {steps.map((step, index) => {
          const Icon = step.icon;
          return <CutIn key={step.number} delay={8 + index * 24} direction="up" style={{position: 'absolute', left: step.left, top: step.top, width: 660, height: 286, backgroundColor: step.color, color: INK.white, clipPath: 'polygon(0 0,92% 0,100% 22%,100% 100%,0 100%)', padding: '30px 38px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 22}}><span style={{fontSize: 76, lineHeight: 1, fontWeight: 950, color: INK.yellow}}>{step.number}</span><Icon size={58} strokeWidth={3} /><div style={{fontSize: 35, fontWeight: 950}}>{step.title}</div></div>
            <div style={{marginTop: 24, whiteSpace: 'pre-line', fontSize: 29, lineHeight: 1.55, fontWeight: 850}}>{step.detail}</div>
          </CutIn>;
        })}
        <ArrowLine left={500} top={508} width={176} color={INK.yellow} delay={28} />
        <ArrowLine left={1020} top={340} width={176} color={INK.yellow} delay={52} />
        <CutIn delay={90} direction="right" style={{position: 'absolute', right: 0, bottom: 0, width: 760, height: 122, backgroundColor: INK.white, border: `7px solid ${INK.red}`, display: 'grid', placeItems: 'center', fontSize: 34, fontWeight: 950}}><Treatment kind="stamp" color={INK.red} delay={98}>顺序走完，再落风险</Treatment></CutIn>
      </div>
    </ConstructivistCanvas>
  );
};
