import {GraduationCap, MapPin, Scale, Users, Zap} from 'lucide-react';
import {Chip, C, Dash, Enter, LabelBlock, Neg, RowTitle, Shell, SoftHi, ThinU} from './kit';

export const IntervenerTwoStepScene = () => (
  <Shell code="03" title="介入因素·两步走标准">
    <div data-layout="two-step-fork-ladder" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="abnormality-then-weight-stepwise,theory-replacement-move" data-focal-rule="attribute-the-result-to-whatever-danger-actually-realized" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="theory-replace-strip" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 112, backgroundColor: C.walnutSoft, border: `3px solid ${C.walnut}`, borderRadius: 10, display: 'flex', alignItems: 'center', gap: 14, padding: '0 22px'}}>
        <Enter delay={6}><Neg size={22}>条件说「无A则无B」：理由不充分·因果链无限延伸</Neg></Enter>
        <Enter delay={18}><span style={{fontSize: 22, fontWeight: 900}}>→ 危险现实化理论：</span></Enter>
        <Enter delay={28}><SoftHi style={{fontSize: 22}}>危险现实化为结果·结果才归属于行为</SoftHi></Enter>
      </div>

      <div data-final-knowledge="step-one-board" style={{position: 'absolute', left: 0, top: 136, width: 876, height: 300, backgroundColor: C.white, border: `4px solid ${C.teal}`, borderRadius: 10, padding: '14px 20px'}}>
        <Enter delay={38} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Chip tone="teal" style={{fontSize: 23}}>第 1 步 · 介入因素是否异常？</Chip>
        </Enter>
        <Enter delay={50} style={{marginTop: 12, fontSize: 20, fontWeight: 700, color: C.inkSoft}}>判断注意「一般化 vs 具体化」：追砍情境中逃跑摔倒→不异常</Enter>
        <div style={{marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={64} style={{display: 'flex', gap: 10, alignItems: 'center', border: `3px solid ${C.teal}`, borderRadius: 8, padding: '8px 12px'}}>
            <Chip tone="teal" style={{fontSize: 20}}>不异常</Chip>
            <span style={{fontSize: 20, fontWeight: 800}}>＝引发关系 → <ThinU>先前行为与结果有因果</ThinU>（要负责）</span>
          </Enter>
          <Enter delay={78} style={{display: 'flex', gap: 10, alignItems: 'center', border: `3px dashed ${C.walnut}`, borderRadius: 8, padding: '8px 12px'}}>
            <Chip tone="lacquer" style={{fontSize: 20}}>异常</Chip>
            <span style={{fontSize: 20, fontWeight: 800}}>＝独立关系 → 先前行为不负责·进入第 2 步</span>
          </Enter>
        </div>
      </div>

      <div data-final-knowledge="step-two-board" style={{position: 'absolute', left: 900, top: 136, width: 876, height: 300, backgroundColor: C.white, border: `4px solid ${C.lacquer}`, borderRadius: 10, padding: '14px 20px'}}>
        <Enter delay={44} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Chip tone="lacquer" style={{fontSize: 23}}>第 2 步 · 谁对结果的作用大？</Chip>
        </Enter>
        <div style={{marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={58} style={{display: 'flex', gap: 10, alignItems: 'center'}}><Zap size={22} color={C.walnut} /><span style={{fontSize: 20, fontWeight: 800}}>先前行为作用大 → 归属先前行为</span></Enter>
          <Enter delay={70} style={{display: 'flex', gap: 10, alignItems: 'center'}}><MapPin size={22} color={C.lacquer} /><span style={{fontSize: 20, fontWeight: 800}}>介入因素作用大 → 归属介入因素</span></Enter>
          <Enter delay={82} style={{display: 'flex', gap: 10, alignItems: 'center'}}><Users size={22} color={C.teal} /><span style={{fontSize: 20, fontWeight: 800}}>二者都大 → 二因一果（均与结果有因果）</span></Enter>
        </div>
      </div>

      <div style={{position: 'absolute', left: 0, right: 0, top: 460, height: 128, backgroundColor: C.walnutSoft, border: `3px double ${C.ink}`, borderRadius: 10, display: 'flex', alignItems: 'center', gap: 16, padding: '0 22px'}}>
        <Enter delay={96}><LabelBlock ink size={24}>推演口诀</LabelBlock></Enter>
        <Enter delay={108} style={{fontSize: 23, fontWeight: 900}}>连锁被引发＝自己推倒的；半路插牌＝看<SoftHi style={{fontSize: 22}}>谁的推力大</SoftHi></Enter>
      </div>

      <div data-final-knowledge="two-step-quick-rows" style={{position: 'absolute', left: 0, right: 0, top: 608, bottom: 0, backgroundColor: C.white, border: `3px solid ${C.teal}`, borderRadius: 10, display: 'flex', alignItems: 'center', gap: 12, padding: '0 20px'}}>
        <Enter delay={120}><Chip tone="teal" style={{fontSize: 20, whiteSpace: 'normal'}}>追砍中逃跑摔倒 → 不异常·∈先前行为</Chip></Enter>
        <Enter delay={130}><Chip tone="lacquer" style={{fontSize: 20, whiteSpace: 'normal'}}>送医途中丙违章撞死 → 异常·介入作用大·∈丙（甲仅故意伤害既遂）</Chip></Enter>
        <Enter delay={140}><Chip style={{fontSize: 20, whiteSpace: 'normal'}}>两家牌同时倒 → 二因一果·均∈</Chip></Enter>
      </div>
    </div>
  </Shell>
);

export const IntervenerCaseRowsScene = () => (
  <Shell code="04" title="介入因素·三类案例板">
    <div data-layout="three-kind-case-rows" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="victim-third-physique-rows,suicide-exception-pair" data-focal-rule="each-intervener-kind-follows-the-same-two-step-verdict" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="kind-victim-board" style={{position: 'absolute', left: 0, top: 0, width: 1050, height: 500, backgroundColor: C.white, border: `4px solid ${C.teal}`, borderRadius: 10, padding: '14px 20px'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Users size={26} color={C.teal} />
          <LabelBlock size={25} color={C.teal}>被害人自身的行为</LabelBlock>
        </Enter>
        <div style={{marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={20}><Chip style={{fontSize: 19, whiteSpace: 'normal'}}>不遵医嘱继续劳作死亡 → 异常但作用小·归甲∈</Chip></Enter>
          <Enter delay={32}><Chip style={{fontSize: 19, whiteSpace: 'normal'}}>香灰涂伤口感染死 → 异常·作用大·归被害人∉</Chip></Enter>
          <Enter delay={44}><Chip style={{fontSize: 19, whiteSpace: 'normal'}}>昏迷醒来恍惚上马路被撞 → 不异常·归甲∈</Chip></Enter>
          <Enter delay={56}><Chip style={{fontSize: 19, whiteSpace: 'normal'}}>毁容后自杀 → 异常·作用大·甲∉故意伤害致死</Chip></Enter>
        </div>
        <div data-final-knowledge="kind-suicide-exceptions" style={{marginTop: 12, backgroundColor: C.pusherSoft, border: `3px dashed ${C.pusher}`, borderRadius: 8, padding: '10px 14px'}}>
          <Enter delay={70} style={{fontSize: 20, fontWeight: 900}}>自杀：原则与先前行为∉；两例外（长期虐待累积）→ 结果加重犯∈</Enter>
          <Enter delay={82} style={{marginTop: 6, display: 'flex', gap: 8, flexWrap: 'wrap'}}>
            <Chip tone="pusher" style={{fontSize: 19}}>暴力干涉婚姻自由致死</Chip>
            <Chip tone="pusher" style={{fontSize: 19}}>虐待致死</Chip>
          </Enter>
        </div>
      </div>

      <div data-final-knowledge="kind-third-board" style={{position: 'absolute', left: 1074, top: 0, width: 702, height: 500, backgroundColor: C.white, border: `4px solid ${C.lacquer}`, borderRadius: 10, padding: '14px 20px'}}>
        <Enter delay={12} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Users size={26} color={C.lacquer} />
          <LabelBlock size={25} color={C.lacquer}>第三人的行为</LabelBlock>
        </Enter>
        <div style={{marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={26}><Chip style={{fontSize: 19, whiteSpace: 'normal'}}>乙拒输血（宗教）身亡 → 自我答责·∉甲</Chip></Enter>
          <Enter delay={38}><Chip style={{fontSize: 19, whiteSpace: 'normal'}}>丁阻止丙抢救·有救活可能 → 归丁∉甲</Chip></Enter>
        </div>
        <div data-final-knowledge="kind-block-rescue-rule" style={{marginTop: 12, border: `3px dashed ${C.lacquer}`, borderRadius: 8, padding: '10px 14px'}}>
          <Enter delay={52} style={{fontSize: 20, fontWeight: 900}}>阻断救助转移因果的前提</Enter>
          <Enter delay={64} style={{marginTop: 6, fontSize: 19, fontWeight: 700, color: C.inkSoft}}>① 存在现实救助行为 ② 有救活可能 → 死亡归阻断者</Enter>
        </div>
        <div data-final-knowledge="kind-physique-rule" style={{marginTop: 12, backgroundColor: C.tealSoft, border: `3px solid ${C.teal}`, borderRadius: 8, padding: '10px 14px'}}>
          <Enter delay={78} style={{fontSize: 20, fontWeight: 900, color: C.teal}}>特殊体质：不必两步走→引发关系·有因果∈</Enter>
          <Enter delay={90} style={{marginTop: 6}}><Neg size={19}>有因果≠有刑事责任——还要看主观能否预见</Neg></Enter>
        </div>
      </div>

      <div style={{position: 'absolute', left: 0, right: 0, top: 524, bottom: 0, backgroundColor: C.walnutSoft, border: `3px double ${C.ink}`, borderRadius: 10, display: 'flex', alignItems: 'center', gap: 16, padding: '0 22px'}}>
        <Enter delay={104}><LabelBlock ink size={24}>一句记牢</LabelBlock></Enter>
        <Enter delay={116} style={{fontSize: 23, fontWeight: 900}}>三类插牌——被害人·第三人·特殊体质，都走「异常→比推力」的两步走</Enter>
      </div>
    </div>
  </Shell>
);
