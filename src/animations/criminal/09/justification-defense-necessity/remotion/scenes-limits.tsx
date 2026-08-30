import {ShieldCheck, Zap} from 'lucide-react';
import {Chip, C, Enter, LabelBlock, Neg, Shell, SoftHi, ThinU} from './kit';

export const DefenseLimitsSpecialScene = () => (
  <Shell code="03" title="限度·特殊防卫·追小偷">
    <div data-layout="limit-special-chase-triptych" data-visual-anchor="boundary" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="necessity-first-order,special-defense-boundary" data-focal-rule="necessity outranks proportionality and special defense needs violent peril" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="limit-board" style={{position: 'absolute', left: 0, top: 0, width: 700, height: 480, backgroundColor: C.white, border: `4px solid ${C.vermilion}`, borderRadius: 10, padding: '14px 18px'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Zap size={24} color={C.vermilion} />
          <LabelBlock size={24} color={C.vermilion}>限度 · 两位标准</LabelBlock>
        </Enter>
        <Enter delay={18} style={{marginTop: 10, fontSize: 20, fontWeight: 800}}>① 必要性（第一位）：制止侵害的必要手段＝不过当（行为时·一般人视角）</Enter>
        <Enter delay={30} style={{marginTop: 6, fontSize: 20, fontWeight: 800}}>② 相当性（第二位）：比例原则——侵害越严重·防卫级别可越高</Enter>
        <div style={{marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={44}><Chip tone="celadon" style={{fontSize: 19, whiteSpace: 'normal'}}>半夜孤立无援遭强奸·毒死歹徒 → 必要性优先＝正当防卫</Chip></Enter>
          <Enter delay={56}><Chip tone="vermilion" style={{fontSize: 19, whiteSpace: 'normal'}}>小偷卡在窗外·主人砍成重伤 → 防卫过当</Chip></Enter>
        </div>
        <div data-final-knowledge="excess-conditions" style={{marginTop: 12, border: `3px dashed ${C.vermilion}`, borderRadius: 8, padding: '10px 14px'}}>
          <Enter delay={70} style={{fontSize: 19, fontWeight: 900}}>防卫过当＝过当结果（客观）＋至少过失（主观）→ 减轻·免除处罚</Enter>
          <Enter delay={82} style={{marginTop: 4, fontSize: 18, fontWeight: 700, color: C.inkSoft}}>手段过当但只造成轻伤 → 无过当结果·不构成；无过失＝意外事件</Enter>
        </div>
      </div>

      <div data-final-knowledge="special-defense-board" style={{position: 'absolute', left: 724, top: 0, width: 1052, height: 480, backgroundColor: C.white, border: `4px solid ${C.gold}`, borderRadius: 10, padding: '14px 18px'}}>
        <Enter delay={12} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <ShieldCheck size={24} color={C.gold} />
          <LabelBlock size={24} color={C.gold}>特殊防卫（第20条第3款）· 最厉害的正当防卫</LabelBlock>
        </Enter>
        <Enter delay={26} style={{marginTop: 8, fontSize: 20, fontWeight: 700, color: C.inkSoft}}>对正在进行的行凶·杀人·抢劫·强奸·绑架及其他严重危及人身安全的暴力犯罪 → 致伤亡<ThinU>不过当</ThinU></Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={40}><Chip tone="gold" style={{fontSize: 19, whiteSpace: 'normal'}}>行凶＝严重危及人身安全的暴力行为·不要求携带凶器</Chip></Enter>
          <Enter delay={52}><Chip tone="gold" style={{fontSize: 19, whiteSpace: 'normal'}}>杀人抢劫强奸绑架＝犯罪行为（非罪名）·须暴力手段严重危及人身（含抢劫枪支·绑架式拐卖）</Chip></Enter>
          <Enter delay={64}><Chip tone="gold" style={{fontSize: 19, whiteSpace: 'normal'}}>兜底：与杀人抢劫相当·有重伤死亡紧迫危险（劫机·放火·爆炸）</Chip></Enter>
          <Enter delay={76}><Neg size={19}>不能特殊防卫（只能一般防卫）：不喂婴儿·投毒杀人·麻醉抢劫·携凶器抢夺——非暴力或非当场暴力</Neg></Enter>
          <Enter delay={88} style={{fontSize: 19, fontWeight: 700, color: C.inkSoft}}>属性＝正常规定：仍需适时·必要·相当——死亡也是必要且相当的</Enter>
        </div>
      </div>

      <div data-final-knowledge="chase-board" style={{position: 'absolute', left: 0, right: 0, top: 504, bottom: 0, backgroundColor: C.white, border: `3px solid ${C.night}`, borderRadius: 10, padding: '14px 22px'}}>
        <Enter delay={98}><LabelBlock ink size={24}>大总结 · 追小偷的三张脸</LabelBlock></Enter>
        <div style={{marginTop: 10, display: 'flex', gap: 14}}>
          <Enter delay={110} style={{flex: 1, border: `3px solid ${C.celadon}`, borderRadius: 8, padding: '8px 12px'}}>
            <div style={{fontSize: 19, fontWeight: 900}}>追财：夺回财物</div>
            <div style={{marginTop: 4, fontSize: 18, fontWeight: 700, color: C.inkSoft}}>途中摔死＝合法无因果；追上夺回＝正当防卫</div>
          </Enter>
          <Enter delay={122} style={{flex: 1, border: `3px solid ${C.celadon}`, borderRadius: 8, padding: '8px 12px'}}>
            <div style={{fontSize: 19, fontWeight: 900}}>扭送：控制人身自由</div>
            <div style={{marginTop: 4, fontSize: 18, fontWeight: 700, color: C.inkSoft}}>合法·但不能夹带泄愤伤害（默认形态）</div>
          </Enter>
          <Enter delay={134} style={{flex: 1, border: `3px solid ${C.vermilion}`, borderRadius: 8, padding: '8px 12px'}}>
            <div style={{fontSize: 19, fontWeight: 900}}>不法侵害：伤害侮辱</div>
            <div style={{marginTop: 4, fontSize: 18, fontWeight: 700, color: C.inkSoft}}>紧追殴打致摔倒死＝两步走不异常→有因果</div>
          </Enter>
          <Enter delay={146} style={{flex: 1, border: `3px solid ${C.gold}`, borderRadius: 8, padding: '8px 12px'}}>
            <div style={{fontSize: 19, fontWeight: 900}}>小偷跳河：被迫∈救助义务</div>
            <div style={{marginTop: 4, fontSize: 18, fontWeight: 700, color: C.inkSoft}}>自陷风险∉；追捕者自死·小偷逃跑无危险∉因果</div>
          </Enter>
        </div>
      </div>
    </div>
  </Shell>
);
