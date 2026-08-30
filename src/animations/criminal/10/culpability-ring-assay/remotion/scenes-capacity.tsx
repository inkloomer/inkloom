import type {ReactNode} from 'react';
import {Activity, Bomb, Brain, Clock, Ear, Eye, FlaskConical, GitBranch, Hand, Hourglass, Syringe, TreePine, Wine} from 'lucide-react';
import {C, Chip, Enter, LabelBlock, Neg, Seal, Shell, SoftHi, ThinU} from './kit';

const Totem = ({children}: {children: ReactNode}) => <span style={{position: 'absolute', right: -38, bottom: -58, opacity: 0.09, display: 'inline-flex', pointerEvents: 'none'}}>{children}</span>;

const WoodState = ({kind}: {kind: 'solid' | 'half' | 'hollow'}) => (
  <span style={{position: 'relative', display: 'inline-block', width: 30, height: 30, flexShrink: 0, border: '3px solid ' + C.heartwood, borderRadius: '50%'}}>
    {kind === 'solid' ? <span style={{position: 'absolute', inset: 3, backgroundColor: C.heartwood, borderRadius: '50%'}} /> : null}
    {kind === 'half' ? <span style={{position: 'absolute', inset: 3, backgroundColor: C.heartwood, borderRadius: '50%', opacity: 0.35}} /> : null}
  </span>
);

export const CapacityCoreGradesScene = () => (
  <Shell code="05" title="责任能力·心材三级">
    <div data-layout="capacity-wood-grade-table" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="capacity-grade-contrast,special-group-rows" data-focal-rule="responsibility-capacity-needs-both-recognition-and-control" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><TreePine size={250} color={C.bark} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="concept-board" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 118, backgroundColor: C.white, border: `3px solid ${C.bark}`, borderRadius: 8, padding: '10px 18px', display: 'flex', alignItems: 'center', gap: 18}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 8}}>
          <Eye size={26} color={C.heartwood} />
          <LabelBlock size={25} color={C.heartwood}>责任能力＝辨认能力</LabelBlock>
          <span style={{fontSize: 24, fontWeight: 950}}>＋</span>
          <Hand size={26} color={C.heartwood} />
          <LabelBlock size={25} color={C.heartwood}>控制能力</LabelBlock>
        </Enter>
        <Enter delay={16} style={{fontSize: 21, fontWeight: 800}}><SoftHi style={{fontSize: 20}}>同时具备</SoftHi>才有责任能力</Enter>
        <Enter delay={28}><Neg size={20}>不具备 → 即使制造法益侵害事实：无法谴责 → 不承担刑事责任（2023）</Neg></Enter>
      </div>

      <div style={{position: 'absolute', left: 0, top: 134, width: 1776, height: 258, display: 'flex', gap: 16}}>
        <div data-final-knowledge="grade-full" style={{flex: 1, backgroundColor: C.white, border: `3px solid ${C.pine}`, borderRadius: 8, padding: '12px 16px'}}>
          <Enter delay={38} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <WoodState kind="solid" />
            <LabelBlock size={24} color={C.pine}>完全责任能力</LabelBlock>
          </Enter>
          <Enter delay={50} style={{marginTop: 10, fontSize: 20, fontWeight: 700}}>完全有辨认＋控制能力</Enter>
          <Enter delay={62} style={{marginTop: 10}}><Seal delay={62} tone="pine">应负刑事责任</Seal></Enter>
        </div>
        <div data-final-knowledge="grade-limited" style={{flex: 1, backgroundColor: C.white, border: `3px solid ${C.heartwood}`, borderRadius: 8, padding: '12px 16px'}}>
          <Enter delay={56} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <WoodState kind="half" />
            <LabelBlock size={24} color={C.heartwood}>相对责任能力</LabelBlock>
          </Enter>
          <Enter delay={68} style={{marginTop: 10, fontSize: 20, fontWeight: 700}}>尚未完全丧失辨认＋控制能力（又称限定·限制责任能力）</Enter>
          <Enter delay={80} style={{marginTop: 10, display: 'flex', gap: 10, flexWrap: 'wrap'}}>
            <Chip tone="wax" style={{fontSize: 19}}>应负刑事责任</Chip>
            <Chip tone="pine" style={{fontSize: 19}}>可以从宽处罚</Chip>
          </Enter>
        </div>
        <div data-final-knowledge="grade-none" style={{flex: 1.15, backgroundColor: C.vermilionSoft, border: `3px solid ${C.vermilion}`, borderRadius: 8, padding: '12px 16px'}}>
          <Enter delay={74} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <WoodState kind="hollow" />
            <LabelBlock size={24} color={C.vermilion}>完全无责任能力</LabelBlock>
          </Enter>
          <Enter delay={86} style={{marginTop: 8, fontSize: 20, fontWeight: 700}}>完全丧失辨认＋控制能力</Enter>
          <Enter delay={98} style={{marginTop: 8}}><Neg size={20}>不负刑事责任</Neg></Enter>
          <Enter delay={110} style={{marginTop: 6, fontSize: 18, fontWeight: 700, color: C.inkSoft}}>应当责令家属或监护人严加看管和医疗；必要时由政府<ThinU color={C.vermilion}>强制医疗</ThinU></Enter>
        </div>
      </div>

      <div style={{position: 'absolute', left: 0, top: 408, width: 1776, height: 336, display: 'flex', gap: 14}}>
        <div data-final-knowledge="special-intermittent" style={{flex: 1, backgroundColor: C.white, border: `3px solid ${C.steel}`, borderRadius: 8, padding: '10px 14px'}}>
          <Enter delay={122} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <Brain size={22} color={C.steel} />
            <LabelBlock size={21} color={C.steel}>间歇性精神病人</LabelBlock>
          </Enter>
          <Enter delay={134} style={{marginTop: 8, fontSize: 18, fontWeight: 700}}>精神正常时＝完全有责任能力 → <Chip tone="pine" style={{fontSize: 17}}>应当负刑事责任</Chip></Enter>
          <Enter delay={146} style={{marginTop: 6, fontSize: 18, fontWeight: 700}}><Neg size={18}>法条没有"可以从宽处罚"（18条2款）</Neg></Enter>
          <Enter delay={158} style={{marginTop: 6, fontSize: 18, fontWeight: 700}}>丧失责任能力时 → 不负（2020）</Enter>
          <Enter delay={170} style={{marginTop: 6, fontSize: 18, fontWeight: 700}}>心理疾病≠精神病：抑郁症 → <Chip tone="wax" style={{fontSize: 17}}>完全责任能力</Chip>(2011·4)</Enter>
        </div>
        <div data-final-knowledge="special-deaf-blind" style={{flex: 1, backgroundColor: C.white, border: `3px solid ${C.steel}`, borderRadius: 8, padding: '10px 14px'}}>
          <Enter delay={128} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <Ear size={22} color={C.steel} />
            <LabelBlock size={21} color={C.steel}>又聋又哑的人 · 盲人</LabelBlock>
          </Enter>
          <Enter delay={140} style={{marginTop: 8, fontSize: 18, fontWeight: 700}}>残疾人地位≠精神病人；精神正常 → <Chip tone="pine" style={{fontSize: 17}}>完全责任能力·应当负</Chip>(2017·3)</Enter>
          <Enter delay={152} style={{marginTop: 6, fontSize: 18, fontWeight: 700}}>但可<ThinU color={C.steel}>从轻·减轻·免除</ThinU>处罚</Enter>
          <Enter delay={164} style={{marginTop: 6, fontSize: 18, fontWeight: 700}}><Neg size={18}>必须"又聋又哑"才可以减免</Neg></Enter>
        </div>
        <div data-final-knowledge="special-drunk" style={{flex: 1, backgroundColor: C.white, border: `3px solid ${C.steel}`, borderRadius: 8, padding: '10px 14px'}}>
          <Enter delay={134} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <Wine size={22} color={C.steel} />
            <LabelBlock size={21} color={C.steel}>醉酒的人</LabelBlock>
          </Enter>
          <Enter delay={146} style={{marginTop: 8, fontSize: 18, fontWeight: 700}}>生理性醉酒 → <Chip tone="pine" style={{fontSize: 17}}>完全责任能力·应当负</Chip>(18条4款)</Enter>
          <Enter delay={158} style={{marginTop: 6, fontSize: 18, fontWeight: 700}}><Neg size={18}>没有可以从轻·减轻的规定（2017·3）</Neg></Enter>
          <Enter delay={170} style={{marginTop: 6, fontSize: 18, fontWeight: 700}}>病理性醉酒（酒精中毒→幻觉妄想）＝精神病 → 完全无责任能力·不负</Enter>
        </div>
        <div data-final-knowledge="special-drug" style={{flex: 1.1, backgroundColor: C.white, border: `3px solid ${C.steel}`, borderRadius: 8, padding: '10px 14px'}}>
          <Enter delay={140} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <Syringe size={22} color={C.steel} />
            <LabelBlock size={21} color={C.steel}>吸毒的人</LabelBlock>
          </Enter>
          <Enter delay={152} style={{marginTop: 8, fontSize: 18, fontWeight: 700}}>吸毒状态仍＝<Chip tone="wax" style={{fontSize: 17}}>完全责任能力</Chip></Enter>
          <Enter delay={164} style={{marginTop: 6, fontSize: 18, fontWeight: 700}}>非明知（首次幻觉）→ 无故意 → <ThinU color={C.steel}>过失犯罪</ThinU>：幻觉中点窗帘＝失火罪</Enter>
          <Enter delay={176} style={{marginTop: 6, fontSize: 18, fontWeight: 700}}>明知会幻觉而利用 → 故意犯罪</Enter>
          <Enter delay={188} style={{marginTop: 6, fontSize: 18, fontWeight: 700, color: C.inkSoft}}>原理：吸毒只影响<SoftHi style={{fontSize: 17}}>犯罪故意</SoftHi>，不影响责任能力（2016·3）</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const ActResponsibilitySimultaneityScene = () => (
  <Shell code="06" title="行为与责任同时存在">
    <div data-layout="simultaneity-ring-timeline" data-visual-anchor="timeline-gate" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation" data-visual-grammar="act-time-vs-result-time,cause-freedom-exception" data-focal-rule="blame-only-what-had-capacity-when-acting" data-focal-channels="icon,connector,contrast,locator" style={{position: 'absolute', inset: 0}}>
      <Totem><TreePine size={250} color={C.bark} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="principle-board" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 108, backgroundColor: C.white, border: `3px solid ${C.bark}`, borderRadius: 8, padding: '8px 18px', display: 'flex', alignItems: 'center', gap: 18}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Clock size={26} color={C.heartwood} />
          <LabelBlock size={25} color={C.heartwood}>行为与责任同时存在原则</LabelBlock>
        </Enter>
        <Enter delay={14} style={{fontSize: 21, fontWeight: 800}}>实施行为时应<SoftHi style={{fontSize: 20}}>同时具有</SoftHi>责任要件（责任年龄·责任能力），才能谴责该行为</Enter>
        <Enter delay={26} style={{fontSize: 19, fontWeight: 800, color: C.inkSoft}}>检验"行为那一圈"的木质，不检验"结果那一圈"</Enter>
      </div>

      <div data-final-knowledge="act-time-board" style={{position: 'absolute', left: 0, top: 124, width: 876, height: 276, backgroundColor: C.white, border: `3px solid ${C.heartwood}`, borderRadius: 8, padding: '10px 16px'}}>
        <Enter delay={34} style={{display: 'flex', alignItems: 'center', gap: 8}}>
          <Activity size={22} color={C.heartwood} />
          <LabelBlock size={22} color={C.heartwood}>行为时 ● 须有 · 结果时 ○ 不要求</LabelBlock>
        </Enter>
        <div style={{marginTop: 10, display: 'flex', alignItems: 'center', gap: 0}}>
          <Enter delay={46}><Chip tone="pine" style={{fontSize: 19}}>行为时·有责任能力</Chip></Enter>
          <Enter delay={54} style={{display: 'flex', alignItems: 'center'}}><span style={{display: 'block', width: 70, height: 0, borderTop: `4px dashed ${C.bark}`}} /><span style={{width: 0, height: 0, borderLeft: '10px solid ' + C.bark, borderTop: '7px solid transparent', borderBottom: '7px solid transparent'}} /></Enter>
          <Enter delay={60}><Chip tone="white" style={{fontSize: 19}}>结果时·不要求</Chip></Enter>
        </div>
        <Enter delay={72} style={{marginTop: 10, fontSize: 19, fontWeight: 700}}><ThinU>寄毒酒案</ThinU>：精神正常时邮寄毒酒 → 发作期间被害人喝死 → 故意杀人<Chip tone="pine" style={{fontSize: 17}}>既遂</Chip>(2015·2)</Enter>
      </div>

      <div data-final-knowledge="causation-board" style={{position: 'absolute', left: 900, top: 124, width: 876, height: 276, backgroundColor: C.white, border: `3px solid ${C.steel}`, borderRadius: 8, padding: '10px 16px'}}>
        <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 8}}>
          <GitBranch size={22} color={C.steel} />
          <LabelBlock size={22} color={C.steel}>既遂判断 · 看行为与结果有无因果关系</LabelBlock>
        </Enter>
        <Enter delay={52} style={{marginTop: 8, fontSize: 19, fontWeight: 700}}><ThinU>见血崩溃案</ThinU>：正常时第一刀＋发病后第二刀，二因一果 → 有因果 → <Chip tone="pine" style={{fontSize: 17}}>故意杀人既遂</Chip>(2016·3)</Enter>
        <Enter delay={64} style={{marginTop: 6, fontSize: 19, fontWeight: 700}}><ThinU>巩固题1</ThinU>：仅砍伤手指后发病再砍死 → 前行为无致命危险 → 无因果 → <Neg size={19}>仅故意杀人未遂</Neg></Enter>
        <Enter delay={76} style={{marginTop: 6, fontSize: 19, fontWeight: 700}}><ThinU>巩固题2</ThinU>：发病后抢走财物 → 抢劫行为<Neg size={19}>不负刑事责任</Neg>(2015·2)</Enter>
      </div>

      <div data-final-knowledge="omission-rows" style={{position: 'absolute', left: 0, top: 416, width: 876, height: 328, backgroundColor: C.white, border: `3px solid ${C.heartwood}`, borderRadius: 8, padding: '10px 16px'}}>
        <Enter delay={82}><LabelBlock size={22} color={C.heartwood}>行为范围 · 作为＋不作为（2016·3）</LabelBlock></Enter>
        <Enter delay={94} style={{marginTop: 8, fontSize: 19, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6}}><Bomb size={19} color={C.vermilion} /><span><ThinU>未成年安炸弹案</ThinU>：13岁安装·14岁爆炸 → 14岁时负有<SoftHi style={{fontSize: 18}}>拆除义务</SoftHi> → 不作为的爆炸罪（2015·2）</span></Enter>
        <Enter delay={106} style={{marginTop: 6, fontSize: 19, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6}}><FlaskConical size={19} color={C.vermilion} /><span><ThinU>生日投毒案</ThinU>：12岁生日当天投毒 · 第二天见死不救 → 不作为的故意杀人罪</span></Enter>
        <Enter delay={118} style={{marginTop: 6, fontSize: 18, fontWeight: 700, color: C.inkSoft}}>到14/13岁次日已满责任年龄，不救助＝不作为刑罚谴责的对象</Enter>
      </div>

      <div data-final-knowledge="exception-board" style={{position: 'absolute', left: 900, top: 416, width: 876, height: 328, backgroundColor: C.waxSoft, border: `3px solid ${C.heartwood}`, borderRadius: 8, padding: '10px 16px'}}>
        <Enter delay={88} style={{display: 'flex', alignItems: 'center', gap: 8}}>
          <Hourglass size={22} color={C.heartwood} />
          <LabelBlock size={22} color={C.heartwood}>例外 · 原因自由行为</LabelBlock>
        </Enter>
        <Enter delay={100} style={{marginTop: 6, fontSize: 18, fontWeight: 700}}>有能力时<SoftHi style={{fontSize: 17}}>故意·过失自陷</SoftHi>丧失责任能力状态，并在该状态下侵害法益 → 主流观点<Seal delay={112} tone="pine">应负刑事责任</Seal></Enter>
        <Enter delay={116} style={{marginTop: 6, fontSize: 18, fontWeight: 700}}>理由：原因行为时有<ThinU color={C.heartwood}>意志自由·选择自由</ThinU></Enter>
        <Enter delay={128} style={{marginTop: 6, fontSize: 18, fontWeight: 800}}>着手时点＝<Chip tone="vermilion" style={{fontSize: 17}}>结果行为时</Chip>，不是饮酒等原因行为时</Enter>
        <Enter delay={140} style={{marginTop: 6, fontSize: 17, fontWeight: 700, color: C.inkSoft}}>欲强奸自陷→却抢劫：强奸预备＋抢劫不负；一开始就想抢劫→抢劫既遂；认错人→对象错误∈同一要件→既遂</Enter>
      </div>
    </div>
  </Shell>
);
