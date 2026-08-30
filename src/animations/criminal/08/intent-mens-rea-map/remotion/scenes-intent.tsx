import {CircleDashed, Compass, GraduationCap, Zap} from 'lucide-react';
import {Chip, C, Dash, Enter, DialTitle, LabelBlock, Neg, Shell, SoftHi, ThinU, Tuner} from './kit';

export const IntentConsistencyScene = () => (
  <Shell code="01" title="犯罪故意·主客观相一致">
    <div data-layout="dual-factor-consistency-board" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="factor-pairing,object-determines-mind" data-focal-rule="intent-is-knowing-plus-willing-anchored-by-objective-elements" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 120, display: 'flex', gap: 20}}>
        <div data-final-knowledge="factor-know" style={{flex: 1, backgroundColor: C.cream, border: `3px solid ${C.cabinet}`, borderRadius: 8, padding: '12px 16px'}}>
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <Compass size={26} color={C.teal} />
            <DialTitle>认识因素</DialTitle>
            <Chip tone="teal" style={{fontSize: 22}}>明知</Chip>
          </Enter>
        </div>
        <div data-final-knowledge="factor-will" style={{flex: 1, backgroundColor: C.cream, border: `3px solid ${C.cabinet}`, borderRadius: 8, padding: '12px 16px'}}>
          <Enter delay={12} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <Zap size={26} color={C.tube} />
            <DialTitle>意志因素</DialTitle>
            <Chip tone="tube" style={{fontSize: 22}}>故犯（希望·放任）</Chip>
          </Enter>
        </div>
        <div data-final-knowledge="factor-trap" style={{flex: 1.4, backgroundColor: C.redSoft, border: `3px dashed ${C.red}`, borderRadius: 8, padding: '12px 16px'}}>
          <Enter delay={18}><Neg size={21}>生活故意≠刑法故意：打火机照明引火灾＝失火罪</Neg></Enter>
          <Enter delay={28} style={{marginTop: 6}}><Neg size={21}>闯红灯撞死人：违反交规≠对死亡有故意→交通肇事</Neg></Enter>
        </div>
      </div>

      <div data-final-knowledge="consistency-content" style={{position: 'absolute', left: 0, top: 144, width: 876, height: 300, backgroundColor: C.white, border: `3px solid ${C.cabinet}`, borderRadius: 8, padding: '14px 20px'}}>
        <Enter delay={34}><LabelBlock size={25} color={C.cabinet}>内容一致 · 要认识到什么（客观决定主观）</LabelBlock></Enter>
        <Enter delay={46} style={{marginTop: 10, display: 'flex', gap: 8, flexWrap: 'wrap'}}>
          <Chip style={{fontSize: 20, whiteSpace: 'normal'}}>① 自身特征（传播性病罪→知自己患病）</Chip>
          <Chip style={{fontSize: 20, whiteSpace: 'normal'}}>② 行为危险性</Chip>
          <Chip style={{fontSize: 20, whiteSpace: 'normal'}}>③ 对象存在（猥亵儿童→知是或可能是不满14岁）</Chip>
          <Chip style={{fontSize: 20, whiteSpace: 'normal'}}>④ 危害结果</Chip>
        </Enter>
        <div style={{marginTop: 12, backgroundColor: C.tealSoft, border: `3px solid ${C.teal}`, borderRadius: 8, padding: '10px 14px'}}>
          <Enter delay={62} style={{fontSize: 20, fontWeight: 900, color: C.teal}}>法定对象越具体·越不需要认识到：误鸦片当海洛因∈·误李四当张三杀＝既遂·误假欧元当假美元∈</Enter>
        </div>
      </div>

      <div data-final-knowledge="consistency-time" style={{position: 'absolute', left: 900, top: 144, width: 876, height: 300, backgroundColor: C.white, border: `3px solid ${C.cabinet}`, borderRadius: 8, padding: '14px 20px'}}>
        <Enter delay={40}><LabelBlock size={25} color={C.cabinet}>时间一致 · 行为与故意同时存在（以实行行为时为准）</LabelBlock></Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={54}><Chip style={{fontSize: 19, whiteSpace: 'normal'}}>预谋杀人后意外撞死→行为时无故意：交通肇事＋杀人预备·想象竞合</Chip></Enter>
          <Enter delay={66}><Chip style={{fontSize: 19, whiteSpace: 'normal'}}>投毒时知他人可能误喝→间接故意·杀人既遂</Chip></Enter>
          <Enter delay={78}><Chip style={{fontSize: 19, whiteSpace: 'normal'}}>伤害时无非法占有目的→故意伤害＋侵占·并罚</Chip></Enter>
        </div>
      </div>

      <div data-final-knowledge="intent-kind-strip" style={{position: 'absolute', left: 0, right: 0, top: 468, bottom: 0, backgroundColor: C.tubeSoft, border: `3px solid ${C.tube}`, borderRadius: 8, padding: '14px 22px'}}>
        <Enter delay={92} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <GraduationCap size={24} color={C.cabinet} />
          <LabelBlock ink size={23}>两类特殊故意</LabelBlock>
        </Enter>
        <Enter delay={104} style={{marginTop: 8, display: 'flex', gap: 10, flexWrap: 'wrap'}}>
          <Chip tone="tube" style={{fontSize: 20, whiteSpace: 'normal'}}>概括故意：确定发生·不确定对象数量（电话亭投毒·扔炸弹）→ 死谁算谁</Chip>
          <Chip tone="teal" style={{fontSize: 20, whiteSpace: 'normal'}}>择一故意：两个结果必发生一个（端茶案·一枪穿两人·警犬案）→ 想象竞合择一重</Chip>
        </Enter>
      </div>
    </div>
  </Shell>
);

export const FaultSpectrumScene = () => (
  <Shell code="02" title="罪过形式·六格刻度盘">
    <div data-layout="six-band-fault-dial" data-visual-anchor="typographic-sequence" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="fault-spectrum-grades,boundary-fork-pairs" data-focal-rule="fault-grades-split-by-knowing-willing-and-possibility" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', left: 0, top: 0, width: 1776, display: 'flex', gap: 12}}>
        <div data-final-knowledge="band-direct-intent" style={{flex: 1, backgroundColor: C.white, border: `3px solid ${C.red}`, borderRadius: 8, padding: '10px 12px'}}>
          <Enter delay={6}><Chip tone="red" style={{fontSize: 20}}>直接故意</Chip></Enter>
          <Enter delay={14} style={{marginTop: 8, fontSize: 18, fontWeight: 700, color: C.inkSoft}}>认识：明知必然/可能</Enter>
          <Enter delay={20} style={{marginTop: 4, fontSize: 18, fontWeight: 900}}>意志：希望（赞成票）</Enter>
        </div>
        <div data-final-knowledge="band-indirect-intent" style={{flex: 1, backgroundColor: C.white, border: `3px solid ${C.tube}`, borderRadius: 8, padding: '10px 12px'}}>
          <Enter delay={22}><Chip tone="tube" style={{fontSize: 20}}>间接故意</Chip></Enter>
          <Enter delay={30} style={{marginTop: 8, fontSize: 18, fontWeight: 700, color: C.inkSoft}}>认识：明知可能</Enter>
          <Enter delay={36} style={{marginTop: 4, fontSize: 18, fontWeight: 900}}>意志：放任（弃权票）</Enter>
        </div>
        <div data-final-knowledge="band-confident-negligence" style={{flex: 1, backgroundColor: C.white, border: `3px solid ${C.teal}`, borderRadius: 8, padding: '10px 12px'}}>
          <Enter delay={38}><Chip tone="teal" style={{fontSize: 20}}>过于自信过失</Chip></Enter>
          <Enter delay={46} style={{marginTop: 8, fontSize: 18, fontWeight: 700, color: C.inkSoft}}>认识：已预见·本可避免</Enter>
          <Enter delay={52} style={{marginTop: 4, fontSize: 18, fontWeight: 900}}>意志：不想（反对票）</Enter>
        </div>
        <div data-final-knowledge="band-careless-negligence" style={{flex: 1, backgroundColor: C.white, border: `3px solid ${C.teal}`, borderRadius: 8, padding: '10px 12px'}}>
          <Enter delay={54}><Chip tone="teal" style={{fontSize: 20}}>疏忽大意过失</Chip></Enter>
          <Enter delay={62} style={{marginTop: 8, fontSize: 18, fontWeight: 700, color: C.inkSoft}}>认识：应预见·没预见</Enter>
          <Enter delay={68} style={{marginTop: 4, fontSize: 18, fontWeight: 900}}>意志：不想</Enter>
        </div>
        <div data-final-knowledge="band-accident" style={{flex: 1, backgroundColor: C.white, border: `3px solid ${C.silver}`, borderRadius: 8, padding: '10px 12px'}}>
          <Enter delay={70}><Chip tone="night" style={{fontSize: 20}}>意外事件</Chip></Enter>
          <Enter delay={78} style={{marginTop: 8, fontSize: 18, fontWeight: 700, color: C.inkSoft}}>认识：无法预见</Enter>
          <Enter delay={84} style={{marginTop: 4, fontSize: 18, fontWeight: 900}}>意志：不想</Enter>
        </div>
        <div data-final-knowledge="band-force-majeure" style={{flex: 1, backgroundColor: C.white, border: `3px solid ${C.silver}`, borderRadius: 8, padding: '10px 12px'}}>
          <Enter delay={86}><Chip tone="night" style={{fontSize: 20}}>不可抗力</Chip></Enter>
          <Enter delay={94} style={{marginTop: 8, fontSize: 18, fontWeight: 700, color: C.inkSoft}}>认识：已预见·无法避免</Enter>
          <Enter delay={100} style={{marginTop: 4, fontSize: 18, fontWeight: 900}}>意志：不想</Enter>
        </div>
      </div>

      <div data-final-knowledge="fork-boundary-rows" style={{position: 'absolute', left: 0, top: 172, width: 1050, height: 360, backgroundColor: C.white, border: `3px solid ${C.cabinet}`, borderRadius: 8, padding: '14px 20px'}}>
        <Enter delay={98}><LabelBlock size={24} color={C.cabinet}>四条分界线</LabelBlock></Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={110} style={{fontSize: 20, fontWeight: 700}}><ThinU>间接 vs 过于自信</ThinU>：态度——放任 vs 不想；外部看<SoftHi style={{fontSize: 19}}>有无避免措施</SoftHi>（吓唬人把握分寸＝过于自信·急刹车甩死扒门者＝间接故意）</Enter>
          <Enter delay={122} style={{fontSize: 20, fontWeight: 700}}><ThinU>疏忽 vs 过于自信</ThinU>：是否<SoftHi style={{fontSize: 19}}>已经预见</SoftHi>（纱布遗留＝有预见能力但没预见＝疏忽）</Enter>
          <Enter delay={134} style={{fontSize: 20, fontWeight: 700}}><ThinU>疏忽 vs 意外</ThinU>：有无<SoftHi style={{fontSize: 19}}>预见可能性</SoftHi>（倒车未看＝疏忽·查明后小孩窜出＝意外）</Enter>
          <Enter delay={146} style={{fontSize: 20, fontWeight: 700}}><ThinU>过于自信 vs 不可抗力</ThinU>：有无<SoftHi style={{fontSize: 19}}>结果避免可能性</SoftHi>——判断时点＝<Neg size={19}>过失行为时</Neg>而非危险临界时（下车买烟未熄火·儿驾车撞人＝过于自信）</Enter>
        </div>
      </div>

      <div data-final-knowledge="spectrum-case-board" style={{position: 'absolute', left: 1074, top: 172, width: 702, height: 360, backgroundColor: C.white, border: `3px solid ${C.tube}`, borderRadius: 8, padding: '14px 18px'}}>
        <Enter delay={102}><LabelBlock size={23} color={C.tube}>误杀儿子案（2004·12）</LabelBlock></Enter>
        <Enter delay={116} style={{marginTop: 10, fontSize: 20, fontWeight: 700, color: C.inkSoft}}>毒妻·为防儿中毒出门接·儿自行回家同死</Enter>
        <Enter delay={130} style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Chip tone="red" style={{fontSize: 20, whiteSpace: 'normal'}}>对小芳 → 直接故意</Chip>
          <Chip tone="teal" style={{fontSize: 20, whiteSpace: 'normal'}}>对儿子 → 采取避免措施＝不想发生 → 过于自信的过失</Chip>
        </Enter>
        <Enter delay={146} style={{marginTop: 12}}><Tuner delay={146} tone="teal">位阶：故意可包容评价为过失·反之不可</Tuner></Enter>
      </div>

      <div style={{position: 'absolute', left: 0, right: 0, top: 556, bottom: 0, backgroundColor: C.nightSoft, border: `3px solid ${C.cabinet}`, borderRadius: 8, display: 'flex', alignItems: 'center', gap: 14, padding: '0 22px'}}>
        <Enter delay={156}><LabelBlock ink size={23}>故意 vs 过失</LabelBlock></Enter>
        <Enter delay={166} style={{fontSize: 20, fontWeight: 700, color: C.inkSoft}}>过失犯罪必须发生实害结果·无未完成形态·无共同犯罪·处罚是例外；故意犯罪的成立一般不要求实害·有既未遂·有共犯</Enter>
      </div>
    </div>
  </Shell>
);
