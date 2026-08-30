import {Anchor, Scale} from 'lucide-react';
import {Chip, C, Enter, LabelBlock, Neg, Shell, SoftHi, ThinU} from './kit';

export const NecessityEscapeSideScene = () => (
  <Shell code="04" title="紧急避险·退一步的正当化">
    <div data-layout="necessity-shore-balance-board" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="retreat-supplement-rule,interest-weighing-scale" data-focal-rule="necessity-is-last-resort-weighing-like-against-like" data-focal-channels="icon,contrast,enclosure,connector" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="plank-case-banner" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 104, backgroundColor: C.vermilionSoft, border: `3px solid ${C.vermilion}`, borderRadius: 10, display: 'flex', alignItems: 'center', gap: 16, padding: '0 22px'}}>
        <Enter delay={6}><LabelBlock size={25} color={C.vermilion}>海上木板案（泰坦尼克）</LabelBlock></Enter>
        <Enter delay={18} style={{fontSize: 22, fontWeight: 800}}>木板只浮一人·杰克打罗丝下水 → <SoftHi style={{fontSize: 21}}>不构成紧急避险·构成故意杀人罪</SoftHi>——生命法益之间不能画等号</Enter>
      </div>

      <div data-final-knowledge="danger-source-board" style={{position: 'absolute', left: 0, top: 128, width: 876, height: 300, backgroundColor: C.white, border: `3px solid ${C.celadon}`, borderRadius: 10, padding: '14px 20px'}}>
        <Enter delay={26} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Anchor size={26} color={C.celadon} />
          <LabelBlock size={24} color={C.celadon}>起因 · 现实危险的来源</LabelBlock>
        </Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={40}><Chip tone="celadon" style={{fontSize: 19, whiteSpace: 'normal'}}>自然灾害·野生动物（躲野狗闯宅∈避险）</Chip></Enter>
          <Enter delay={52}><Chip tone="celadon" style={{fontSize: 19, whiteSpace: 'normal'}}>他人不法侵害（被追砍闯宅∈避险）</Chip></Enter>
          <Enter delay={64}><Neg size={19}>他人合法行为的危险∉（小偷躲警察夺车∉）；负有职责者对职务危险∉（消防员·警察）</Neg></Enter>
          <Enter delay={76}><Chip style={{fontSize: 19, whiteSpace: 'normal'}}>可为国家·公共法益而避险（消防员闯院灭火·警察踩麦田抓贼）；假想避险＝过失/意外</Chip></Enter>
        </div>
      </div>

      <div data-final-knowledge="retreat-supplement-board" style={{position: 'absolute', left: 900, top: 128, width: 876, height: 300, backgroundColor: C.white, border: `3px solid ${C.gold}`, borderRadius: 10, padding: '14px 20px'}}>
        <Enter delay={32}><LabelBlock size={24} color={C.gold}>不得已 · 补充性手段</LabelBlock></Enter>
        <Enter delay={46} style={{marginTop: 8, fontSize: 20, fontWeight: 700, color: C.inkSoft}}>没有其他合理方法才允许——vs 防卫：反击是<ThinU>优先手段</ThinU>·原则上无躲避义务</Enter>
        <Enter delay={58} style={{marginTop: 8}}><Chip tone="gold" style={{fontSize: 19, whiteSpace: 'normal'}}>受强制的避险（刀逼抢银行救子）→ ∈紧急避险·不构成胁从犯</Chip></Enter>
        <Enter delay={70} style={{marginTop: 8}}><Chip style={{fontSize: 19, whiteSpace: 'normal'}}>偶然避险两说：不要说→避险成立·毁坏财物罪无；必要说→不成立→毁坏财物罪<ThinU>未遂</ThinU>（制造了好结果）</Chip></Enter>
      </div>

      <div data-final-knowledge="interest-scale-board" style={{position: 'absolute', left: 0, right: 0, top: 452, bottom: 0, backgroundColor: C.white, border: `3px solid ${C.vermilion}`, borderRadius: 10, padding: '14px 22px'}}>
        <Enter delay={84} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Scale size={26} color={C.vermilion} />
          <LabelBlock size={24} color={C.vermilion}>限度 · 法益衡量：保护的 ≥ 损害的</LabelBlock>
          <span style={{fontSize: 20, fontWeight: 800, color: C.inkSoft}}>生命 ＞ 身体健康 ＞ 人身自由 ＞ 财产；无「国家＞公共＞个人」的绝对序（可为国家牺牲个人·可为个人牺牲公共）</span>
        </Enter>
        <div style={{marginTop: 12, display: 'flex', gap: 14}}>
          <Enter delay={98} style={{flex: 1, border: `3px solid ${C.celadon}`, borderRadius: 8, padding: '8px 12px'}}>
            <div style={{fontSize: 19, fontWeight: 900, color: C.celadon}}>财产法益可以画等号</div>
            <div style={{marginTop: 4, fontSize: 18, fontWeight: 700, color: C.inkSoft }}>牺牲同价值财物保另一财物 → 紧急避险（非过当）</div>
          </Enter>
          <Enter delay={110} style={{flex: 1, border: `3px solid ${C.vermilion}`, borderRadius: 8, padding: '8px 12px'}}>
            <div style={{fontSize: 19, fontWeight: 900, color: C.vermilion}}>生命法益绝不能画等号</div>
            <div style={{marginTop: 4, fontSize: 18, fontWeight: 700, color: C.inkSoft }}>牺牲一人救多数——原则∉；例外：牺牲地位被特定化（被劫持撞楼乘客）→ ∈</div>
          </Enter>
        </div>
      </div>
    </div>
  </Shell>
);
