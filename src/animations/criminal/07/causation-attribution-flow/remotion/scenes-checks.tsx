import {Zap} from 'lucide-react';
import {Chip, C, Dash, Enter, LabelBlock, Neg, RowTitle, Shell, SoftHi, ThinU} from './kit';

export const CauseGateThreeUsesScene = () => (
  <Shell code="01" title="因果的用处·「因」的关卡">
    <div data-layout="cause-uses-gate-berm" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="three-uses-strip,danger-permit-gates" data-focal-rule="the-cause-must-be-conduct-creating-legally-disallowed-danger" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 118, display: 'flex', gap: 20}}>
        <div data-final-knowledge="use-attempt" style={{flex: 1, backgroundColor: C.domino, border: `3px solid ${C.walnut}`, borderRadius: 8, padding: '12px 16px'}}>
          <Enter delay={6}><LabelBlock ink size={23}>用处一 · 故意犯罪</LabelBlock></Enter>
          <Enter delay={16} style={{marginTop: 8, fontSize: 21, fontWeight: 800}}>因果关系是<ThinU>既遂条件</ThinU>·非成立条件</Enter>
        </div>
        <div data-final-knowledge="use-aggravated" style={{flex: 1, backgroundColor: C.domino, border: `3px solid ${C.walnut}`, borderRadius: 8, padding: '12px 16px'}}>
          <Enter delay={10}><LabelBlock ink size={23}>用处二 · 结果加重犯</LabelBlock></Enter>
          <Enter delay={20} style={{marginTop: 8, fontSize: 21, fontWeight: 800}}>基本行为与加重结果<ThinU>无因果→不成立</ThinU></Enter>
        </div>
        <div data-final-knowledge="use-negligent" style={{flex: 1, backgroundColor: C.domino, border: `3px solid ${C.walnut}`, borderRadius: 8, padding: '12px 16px'}}>
          <Enter delay={14}><LabelBlock ink size={23}>用处三 · 过失犯罪</LabelBlock></Enter>
          <Enter delay={24} style={{marginTop: 8, fontSize: 21, fontWeight: 800}}>以实害结果为前提→<ThinU>只有成立·没有既遂</ThinU></Enter>
        </div>
      </div>
      <Enter delay={30} style={{position: 'absolute', left: 0, top: 132, display: 'flex', gap: 12, alignItems: 'center'}}>
        <LabelBlock size={24} color={C.walnut}>审查顺序</LabelBlock>
        <Chip tone="walnut" style={{fontSize: 21}}>先查「因」</Chip>
        <span style={{fontSize: 22, fontWeight: 950}}>→</span>
        <Chip tone="walnut" style={{fontSize: 21}}>再查「果」</Chip>
        <span style={{fontSize: 22, fontWeight: 950}}>→</span>
        <Chip tone="walnut" style={{fontSize: 21}}>后查因果关系</Chip>
      </Enter>

      <div data-final-knowledge="gate-no-danger" style={{position: 'absolute', left: 0, top: 196, width: 876, height: 340, backgroundColor: C.white, border: `4px solid ${C.lacquer}`, borderRadius: 10, padding: '14px 20px'}}>
        <Enter delay={38} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Zap size={26} color={C.lacquer} />
          <LabelBlock size={25} color={C.lacquer}>关卡A · 没有制造危险 → 不是危害行为</LabelBlock>
        </Enter>
        <div style={{marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={52}><Neg size={21}>劝精神正常的乙雷雨进森林采蘑菇·被雷击死（2006·13）→ 劝说＝生活行为·无因果</Neg></Enter>
          <Enter delay={64}><Neg size={21}>送溜冰鞋盼摔伤·乙摔伤（2013·5）→ 赠送＝生活行为·无因果</Neg></Enter>
          <Enter delay={76}><Neg size={21}>抢劫后逃跑·警察追捕闯红灯被撞死（2019）→ 单纯逃跑无危险·只定抢劫罪·不构成致人死亡</Neg></Enter>
        </div>
        <Enter delay={90} style={{marginTop: 10, fontSize: 20, fontWeight: 700, color: C.inkSoft}}>不是危害行为 → 不必再判断因果关系·直接出罪</Enter>
      </div>

      <div data-final-knowledge="gate-not-permitted" style={{position: 'absolute', left: 900, top: 196, width: 876, height: 340, backgroundColor: C.white, border: `4px solid ${C.teal}`, borderRadius: 10, padding: '14px 20px'}}>
        <Enter delay={44} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Zap size={26} color={C.teal} />
          <LabelBlock size={25} color={C.teal}>关卡B · 只制造了法律允许的危险（过失场合）</LabelBlock>
        </Enter>
        <Enter delay={58} style={{marginTop: 10, fontSize: 20, fontWeight: 700, color: C.inkSoft}}>过失的危害行为＝违反<ThinU>注意义务</ThinU>·制造法律<ThinU>不允许</ThinU>的危险</Enter>
        <div style={{marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={72}><Chip tone="teal" style={{fontSize: 20, whiteSpace: 'normal'}}>正常右拐被烟头击中失控撞死丙（2015·53）→ 遵守注意义务·死亡归乙</Chip></Enter>
          <Enter delay={84}><Chip tone="teal" style={{fontSize: 20, whiteSpace: 'normal'}}>追小偷扭送·小偷撞车身亡（2010·3）→ 合法追赶·无因果</Chip></Enter>
          <Enter delay={96}><Chip tone="teal" style={{fontSize: 20, whiteSpace: 'normal'}}>地库下坡轧死躺地者（2022）→ 信赖原则·无罪·不必进主观阶段</Chip></Enter>
        </div>
      </div>

      <div style={{position: 'absolute', left: 0, right: 0, top: 560, bottom: 0, backgroundColor: C.walnutSoft, border: `3px solid ${C.walnut}`, borderRadius: 10, display: 'flex', alignItems: 'center', gap: 16, padding: '0 22px'}}>
        <Enter delay={110}><LabelBlock ink size={24}>口诀</LabelBlock></Enter>
        <Enter delay={120} style={{fontSize: 23, fontWeight: 900}}>推骨牌前先看第一张牌立没立稳——<SoftHi style={{fontSize: 22}}>没有危险·就没有「因」</SoftHi></Enter>
      </div>
    </div>
  </Shell>
);

export const EffectGateThreeChecksScene = () => (
  <Shell code="02" title="「果」的关卡·现实·规范·管辖">
    <div data-layout="effect-checks-fog-board" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="reality-norm-jurisdiction-checks,dual-cause-overlay" data-focal-rule="only-real-results-inside-the-norm-s-reach-and-own-duty-are-attributable" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="check-reality" style={{position: 'absolute', left: 0, top: 0, width: 566, height: 500, backgroundColor: C.white, border: `4px solid ${C.lacquer}`, borderRadius: 10, padding: '14px 18px'}}>
        <Enter delay={6}><LabelBlock size={24} color={C.lacquer}>① 现实发生的结果（≠危险状态·≠假设）</LabelBlock></Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={20}><Chip style={{fontSize: 19, whiteSpace: 'normal'}}>破坏刹车·当夜泥石流冲走→死亡属假设·杀人未遂</Chip></Enter>
          <Enter delay={32}><Chip style={{fontSize: 19, whiteSpace: 'normal'}}>丁致致命伤后悔送医·高某撞死（2007·1）→ 丁中止·高某交通肇事</Chip></Enter>
          <Enter delay={44}><Chip style={{fontSize: 19, whiteSpace: 'normal'}}>沙漠钻孔案：投毒是假定·钻孔缺水是现实→归小美</Chip></Enter>
          <Enter delay={56}><Chip tone="teal" style={{fontSize: 19, whiteSpace: 'normal'}}>死刑犯父亲抢先按开关→甲与死亡有因果（阻断行刑）</Chip></Enter>
        </div>
      </div>

      <div data-final-knowledge="check-norm" style={{position: 'absolute', left: 590, top: 0, width: 566, height: 500, backgroundColor: C.white, border: `4px solid ${C.teal}`, borderRadius: 10, padding: '14px 18px'}}>
        <Enter delay={12}><LabelBlock size={24} color={C.teal}>② 规范保护范围内的结果</LabelBlock></Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={26}><Chip style={{fontSize: 19, whiteSpace: 'normal'}}>肇事罪护道路安全→路人拿走货物＝丙侵占·肇事者无因果（2015·1）</Chip></Enter>
          <Enter delay={38}><Chip style={{fontSize: 19, whiteSpace: 'normal'}}>伤害罪护身体健康→财物被偷＝乙盗窃·伤害者无因果（2016·2）</Chip></Enter>
          <Enter delay={50}><Chip style={{fontSize: 19, whiteSpace: 'normal'}}>醉驾井盖案：轧飞井盖砸人超出酒驾规范→不归酒驾（2019）</Chip></Enter>
          <Enter delay={62}><Chip style={{fontSize: 19, whiteSpace: 'normal'}}>隧道未减速撞行人：防的是追尾·行人＝自陷风险→不构成肇事</Chip></Enter>
        </div>
      </div>

      <div data-final-knowledge="check-jurisdiction" style={{position: 'absolute', left: 1180, top: 0, width: 596, height: 500, backgroundColor: C.white, border: `4px solid ${C.walnut}`, borderRadius: 10, padding: '14px 18px'}}>
        <Enter delay={18}><LabelBlock size={24} color={C.walnut}>③ 管辖范围内的结果</LabelBlock></Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={32}><Chip style={{fontSize: 19, whiteSpace: 'normal'}}>交警瞎指挥致追尾→防撞是交警职责·归交警</Chip></Enter>
          <Enter delay={44}><Chip style={{fontSize: 19, whiteSpace: 'normal'}}>交警拆手电筒又拿掉·后车追尾→归交警乙</Chip></Enter>
          <Enter delay={56} style={{fontSize: 19, fontWeight: 700, color: C.inkSoft}}>结果判断两层：事实判断＋价值评价（<ThinU>客观归责理论</ThinU>）</Enter>
        </div>
      </div>

      <div data-final-knowledge="dual-cause-overlay" style={{position: 'absolute', left: 0, right: 0, top: 524, bottom: 0, backgroundColor: C.tealSoft, border: `3px solid ${C.teal}`, borderRadius: 10, padding: '12px 22px'}}>
        <Enter delay={70} style={{display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap'}}>
          <LabelBlock ink size={23}>双重因果 · 两份现实化的因果</LabelBlock>
          <Chip tone="teal" style={{fontSize: 19, whiteSpace: 'normal'}}>重叠：5mg＋5mg 同时叠加致命→均有因果</Chip>
          <Chip tone="teal" style={{fontSize: 19, whiteSpace: 'normal'}}>二重：10mg＋10mg 择一致命→均有因果</Chip>
          <Neg size={20}>假设因果：只有一份现实化（另一行为的危险未现实化）</Neg>
        </Enter>
      </div>
    </div>
  </Shell>
);
