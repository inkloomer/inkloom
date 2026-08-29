import {AbsoluteFill} from 'remotion';
import {Bandage, Coins, GraduationCap, HandCoins, Percent, Plus, Users, Wheat} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp, ThinU} from './theme';

export const AllocationFlowScene = () => (
  <Shell code="01" title="税后利润入仓：四道闸依次开">
    <div data-layout="four-stage-granary-flow" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="stage-progression,order-gate" data-focal-rule="after-tax-profit-flows-through-loss-cover-statutory-reserve-discretionary-reserve-then-dividend-in-fixed-order" data-focal-channels="icon,connector,motion,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="alloc-profit-source" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 104, backgroundColor: C.wood, borderRadius: 14, padding: '12px 24px'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Wheat size={32} color={C.husk} style={{flexShrink: 0}} />
          <span style={{fontSize: 27, fontWeight: 950, color: C.paper}}>福安股份 2021 税后利润</span>
          <Chip tone="rice" style={{fontSize: 25, fontWeight: 950}}>0.8 亿元</Chip>
          <Dash delay={16} style={{flex: 1, borderTop: `4px solid ${C.husk}`}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.paperDim, whiteSpace: 'nowrap'}}>上年亏损 0.4 亿待补</span>
        </Enter>
      </div>
      <div data-final-knowledge="alloc-loss-cover" style={{position: 'absolute', left: 0, top: 128, width: 424, height: 404, backgroundColor: C.paper, border: `3px solid ${C.woodLine}`, borderRadius: 14, padding: '14px 20px', boxShadow: `0 8px 20px ${C.shadow}`}}>
        <Enter delay={30} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <span style={{fontSize: 34, fontWeight: 950, color: C.teal, width: 44, textAlign: 'center'}}>①</span>
          <Bandage size={26} color={C.teal} style={{flexShrink: 0}} />
          <LabelBlock color={C.teal} size={26}>弥补亏损</LabelBlock>
        </Enter>
        <Enter delay={44} style={{marginTop: 14, fontSize: 23, fontWeight: 850, color: C.ink}}>先补上一年度的 0.4 亿窟窿</Enter>
        <Enter delay={56} style={{marginTop: 10, fontSize: 22, fontWeight: 750, color: C.ink, lineHeight: 1.6}}>入仓先填坑——补完才有<ThinU color={C.teal}>盈余</ThinU>可提</Enter>
        <div style={{marginTop: 16, backgroundColor: C.panel, borderRadius: 10, padding: '10px 14px'}}>
          <Enter delay={70} style={{fontSize: 22, fontWeight: 900, color: C.ink}}>可提盈余 = 0.8 − 0.4 = <span style={{color: C.teal}}>0.4 亿</span></Enter>
        </div>
      </div>
      <div data-final-knowledge="alloc-statutory-gate" style={{position: 'absolute', left: 452, top: 128, width: 424, height: 404, backgroundColor: C.paper, border: `3px solid ${C.seal}`, borderRadius: 14, padding: '14px 20px', boxShadow: `0 8px 20px ${C.shadow}`}}>
        <Enter delay={84} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <span style={{fontSize: 34, fontWeight: 950, color: C.seal, width: 44, textAlign: 'center'}}>②</span>
          <Percent size={26} color={C.seal} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={26}>法定公积金</LabelBlock>
        </Enter>
        <Enter delay={98} style={{marginTop: 14, fontSize: 23, fontWeight: 850, color: C.ink}}>盈余的 <SoftHi style={{fontSize: 24}}>10%</SoftHi>——<Stamp delay={106} tone="seal">应当提取</Stamp></Enter>
        <Enter delay={118} style={{marginTop: 12, fontSize: 22, fontWeight: 750, color: C.ink, lineHeight: 1.6}}>法定义务闸，公司说了不算</Enter>
        <Enter delay={130} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.ink, backgroundColor: C.panel, borderRadius: 10, padding: '10px 14px'}}>累计达注册资本 <ThinU color={C.seal}>50%</ThinU> 以上<span style={{color: C.seal, fontWeight: 950}}>可以</span>停提</Enter>
      </div>
      <div data-final-knowledge="alloc-discretionary-gate" style={{position: 'absolute', left: 904, top: 128, width: 424, height: 404, backgroundColor: C.paper, border: `3px solid ${C.teal}`, borderRadius: 14, padding: '14px 20px', boxShadow: `0 8px 20px ${C.shadow}`}}>
        <Enter delay={144} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <span style={{fontSize: 34, fontWeight: 950, color: C.teal, width: 44, textAlign: 'center'}}>③</span>
          <Users size={26} color={C.teal} style={{flexShrink: 0}} />
          <LabelBlock color={C.teal} size={26}>任意公积金</LabelBlock>
        </Enter>
        <Enter delay={158} style={{marginTop: 14, fontSize: 23, fontWeight: 850, color: C.ink, lineHeight: 1.6}}>想不想提、提多少——<SoftHi style={{fontSize: 23}}>股东会</SoftHi>说了算</Enter>
        <Enter delay={172} style={{marginTop: 12, fontSize: 22, fontWeight: 750, color: C.ink, lineHeight: 1.6}}>与分红<ThinU color={C.teal}>此消彼长</ThinU>：多存一仓，少分一勺</Enter>
        <div style={{marginTop: 16, border: `3px dashed ${C.seal}`, borderRadius: 10, padding: '10px 14px'}}>
          <Enter delay={186}><Neg dark size={22}>董事会无权决定提取</Neg></Enter>
        </div>
      </div>
      <div data-final-knowledge="alloc-dividend-flow" style={{position: 'absolute', left: 1352, top: 128, width: 424, height: 404, backgroundColor: C.paper, border: `3px solid ${C.woodLine}`, borderRadius: 14, padding: '14px 20px', boxShadow: `0 8px 20px ${C.shadow}`}}>
        <Enter delay={200} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <span style={{fontSize: 34, fontWeight: 950, color: C.wood, width: 44, textAlign: 'center'}}>④</span>
          <HandCoins size={26} color={C.wood} style={{flexShrink: 0}} />
          <LabelBlock color={C.wood} size={26}>股东分红</LabelBlock>
        </Enter>
        <Enter delay={214} style={{marginTop: 14, fontSize: 23, fontWeight: 850, color: C.ink, lineHeight: 1.6}}>最后一道渠——剩余的谷才分给股东</Enter>
        <Enter delay={228} style={{marginTop: 12, fontSize: 22, fontWeight: 750, color: C.ink, lineHeight: 1.6}}>顺序不能跳：前闸未过，<Neg dark size={22}>不得先分</Neg></Enter>
        <Enter delay={242} style={{marginTop: 16, display: 'flex', justifyContent: 'center'}}>
          <Stamp delay={248} tone="teal">法定顺序</Stamp>
        </Enter>
      </div>
      <div data-final-knowledge="alloc-exam-verdict" style={{position: 'absolute', left: 0, right: 0, top: 558, height: 186, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={258} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.husk} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>2022金题 · A 项为何正确？</span>
          </Enter>
          <Enter delay={272} style={{marginTop: 14, fontSize: 23, fontWeight: 800, color: C.paper, lineHeight: 1.6}}>0.8 亿税后利润<SoftHi dark style={{fontSize: 22}}>先补 0.4 亿亏损</SoftHi>，再提法定公积金——顺序闸不能倒</Enter>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed rgba(251,246,232,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={286}><Chip tone="panel" style={{fontSize: 22, border: '2px solid rgba(251,246,232,0.3)', color: C.paper}}>顺序：补亏 → 法定 → （任意） → 分红</Chip></Enter>
          <Enter delay={296} style={{fontSize: 22, color: C.husk, fontWeight: 850}}>算术与权限的门道，见 02 / 03 场景</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const ReserveMathScene = () => (
  <Shell code="02" title="法定公积金：先补亏，再提一成">
    <div data-layout="formula-threshold-board" data-visual-anchor="timeline-gate" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="formula-decomposition,threshold-stop-line" data-focal-rule="statutory-reserve-is-ten-percent-of-the-surplus-after-loss-cover-and-stops-voluntarily-at-half-of-registered-capital" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="math-formula-board" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 322, backgroundColor: C.paper, border: `3px solid ${C.ink}`, borderRadius: 16, padding: '16px 26px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Percent size={30} color={C.seal} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={28}>法定公积金 = 可提盈余 × 10%</LabelBlock>
        </Enter>
        <div style={{marginTop: 20, display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'nowrap'}}>
          <Enter delay={22}><Chip tone="wood" style={{fontSize: 26}}><Coins size={24} color={C.paper} style={{flexShrink: 0}} />税后 0.8 亿</Chip></Enter>
          <span style={{fontSize: 30, fontWeight: 950, color: C.ink}}>−</span>
          <Enter delay={32}><Chip tone="teal" style={{fontSize: 26}}><Bandage size={24} color={C.paper} style={{flexShrink: 0}} />补亏 0.4 亿</Chip></Enter>
          <span style={{fontSize: 30, fontWeight: 950, color: C.ink}}>=</span>
          <Enter delay={42}><Chip tone="rice" style={{fontSize: 26, border: `3px solid ${C.ink}`}}>盈余 0.4 亿</Chip></Enter>
          <span style={{fontSize: 30, fontWeight: 950, color: C.ink}}>×</span>
          <Enter delay={52}><Chip tone="seal" style={{fontSize: 26}}>10%</Chip></Enter>
          <span style={{fontSize: 30, fontWeight: 950, color: C.ink}}>=</span>
          <Enter delay={62}><div style={{display: 'inline-flex', padding: '6px 20px', border: `4px solid ${C.seal}`, color: C.seal, fontSize: 34, fontWeight: 950, rotate: '-2deg'}}>0.04 亿</div></Enter>
        </div>
        <Enter delay={76} style={{marginTop: 22, fontSize: 23, fontWeight: 800, color: C.ink, display: 'flex', alignItems: 'center', gap: 10}}>
          <Neg dark size={23}>B 项 0.08 亿</Neg>
          <span style={{fontSize: 22, fontWeight: 750}}>——错在没先补亏：0.8 × 10% 是把窟窿也计了提成基数</span>
        </Enter>
      </div>
      <div data-final-knowledge="math-wrong-0-08" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 322, backgroundColor: C.panel, border: `3px dashed ${C.seal}`, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={90} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <GraduationCap size={28} color={C.ink} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={27}>B 项勘误</LabelBlock>
          <Stamp delay={100} tone="seal">0.08 亿 ✗</Stamp>
        </Enter>
        <Enter delay={114} style={{marginTop: 16, fontSize: 23, fontWeight: 850, color: C.ink, lineHeight: 1.7}}>基数是<ThinU color={C.seal}>补亏后的盈余</ThinU>，不是全部税后利润</Enter>
        <Enter delay={128} style={{marginTop: 12, fontSize: 22, fontWeight: 750, color: C.ink, lineHeight: 1.7}}>(0.8 − 0.4) × 10% = 0.04 亿——一字之差，整题丢分</Enter>
      </div>
      <div data-final-knowledge="math-half-stop-line" style={{position: 'absolute', left: 0, top: 348, width: 1032, height: 396, backgroundColor: C.wood, borderRadius: 16, padding: '16px 26px'}}>
        <Enter delay={142} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Percent size={28} color={C.husk} style={{flexShrink: 0}} />
          <LabelBlock color={C.husk} light size={27}>50% 满仓停提线</LabelBlock>
        </Enter>
        <div style={{marginTop: 18, position: 'relative', height: 150, backgroundColor: 'rgba(251,246,232,0.14)', borderRadius: 12, border: `2px solid ${C.husk}`}}>
          <div style={{position: 'absolute', left: 0, right: 0, top: 75, borderTop: `4px dashed ${C.paper}`}} />
          <Enter delay={158} style={{position: 'absolute', right: 18, top: 30, display: 'flex', alignItems: 'center', gap: 8}}>
            <Chip tone="rice" style={{fontSize: 22}}>法定公积金累计 ≥ 注册资本 50%</Chip>
          </Enter>
          <Enter delay={172} style={{position: 'absolute', left: 18, bottom: 12, fontSize: 22, fontWeight: 900, color: C.paper}}>线下：<SoftHi dark style={{fontSize: 21}}>应当</SoftHi>提取——义务</Enter>
          <Enter delay={184} style={{position: 'absolute', right: 18, bottom: 12, fontSize: 22, fontWeight: 900, color: C.paper}}>线上：<SoftHi dark style={{fontSize: 21}}>可以</SoftHi>停提——转为自由</Enter>
        </div>
        <Enter delay={198} style={{marginTop: 18, fontSize: 22, fontWeight: 800, color: C.paper}}>「应当」与「可以」一词之差：未到线是强制闸，过了线才换成自由闸</Enter>
      </div>
      <div data-final-knowledge="math-exam-verdict" style={{position: 'absolute', left: 1064, top: 348, width: 712, height: 396, backgroundColor: C.ink, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={212} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <GraduationCap size={28} color={C.husk} style={{flexShrink: 0}} />
          <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>2022金题 · 双正确之一</span>
        </Enter>
        <Enter delay={226} style={{marginTop: 16, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <Chip tone="panel" style={{fontSize: 22, border: '2px solid rgba(251,246,232,0.3)', color: C.paper}}>A 先补亏再提法定 ✓</Chip>
          <Stamp delay={236} tone="jade">入选</Stamp>
        </Enter>
        <Enter delay={248} style={{marginTop: 12, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <Chip tone="panel" style={{fontSize: 22, border: '2px solid rgba(251,246,232,0.3)', color: C.paper}}>D 溢价款列资本公积金 ✓</Chip>
          <Stamp delay={258} tone="jade">入选</Stamp>
        </Enter>
        <Enter delay={270} style={{marginTop: 16, fontSize: 22, color: 'rgba(251,246,232,0.66)', fontWeight: 750, lineHeight: 1.7}}>正确答案 AD——一题同时考顺序、算术与来源三个抓手</Enter>
      </div>
    </div>
  </Shell>
);

export const ReserveTrioScene = () => (
  <Shell code="03" title="三仓对账：法定、任意、资本">
    <div data-layout="three-silo-comparison" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="trio-silo-comparison,authority-exclusion" data-focal-rule="discretionary-reserve-belongs-to-the-shareholders-meeting-while-premium-proceeds-belong-to-capital-reserve" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="trio-statutory-silo" style={{position: 'absolute', left: 0, top: 0, width: 576, height: 436, backgroundColor: C.paper, border: `3px solid ${C.seal}`, borderRadius: 16, padding: '16px 22px', boxShadow: `0 8px 20px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Percent size={28} color={C.seal} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={28}>法定公积金</LabelBlock>
        </Enter>
        <div style={{marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={20}><Chip tone="rice" style={{fontSize: 22, border: `2px solid ${C.seal}`}}>来源：<Bandage size={22} color={C.seal} style={{flexShrink: 0}} />补亏后盈余的 10%</Chip></Enter>
          <Enter delay={32}><Chip tone="rice" style={{fontSize: 22, border: `2px solid ${C.seal}`}}>提取：<SoftHi style={{fontSize: 21}}>应当</SoftHi>——法定义务</Chip></Enter>
          <Enter delay={44}><Chip tone="rice" style={{fontSize: 22, border: `2px solid ${C.seal}`}}>停提：累计达注册资本 50% 可停</Chip></Enter>
          <Enter delay={56}><Chip tone="rice" style={{fontSize: 22, border: `2px solid ${C.seal}`}}>用途：弥补亏损、转增资本</Chip></Enter>
        </div>
        <Enter delay={70} style={{marginTop: 16, fontSize: 22, fontWeight: 750, color: C.ink}}>公积金系<ThinU color={C.seal}>储备金</ThinU>性质——弥补亏损后的盈余才轮到它</Enter>
      </div>
      <div data-final-knowledge="trio-discretionary-silo" style={{position: 'absolute', left: 600, top: 0, width: 576, height: 436, backgroundColor: C.paper, border: `3px solid ${C.teal}`, borderRadius: 16, padding: '16px 22px', boxShadow: `0 8px 20px ${C.shadow}`}}>
        <Enter delay={84} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Users size={28} color={C.teal} style={{flexShrink: 0}} />
          <LabelBlock color={C.teal} size={28}>任意公积金</LabelBlock>
        </Enter>
        <div style={{marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={98}><Chip tone="rice" style={{fontSize: 22, border: `2px solid ${C.teal}`}}>来源：税后利润（补亏、提法定之后）</Chip></Enter>
          <Enter delay={110}><Chip tone="rice" style={{fontSize: 22, border: `2px solid ${C.teal}`}}>决定权：<SoftHi style={{fontSize: 21}}>股东会</SoftHi>自行定金额或比例</Chip></Enter>
          <Enter delay={122}><Chip tone="rice" style={{fontSize: 22, border: `2px solid ${C.teal}`}}>性质：<HandCoins size={22} color={C.teal} style={{flexShrink: 0}} />与分红此消彼长</Chip></Enter>
        </div>
        <div style={{marginTop: 16, border: `3px dashed ${C.seal}`, borderRadius: 10, padding: '10px 14px'}}>
          <Enter delay={136}><Neg dark size={22}>C 项：董事会决定提取——无权</Neg></Enter>
        </div>
      </div>
      <div data-final-knowledge="trio-capital-silo" style={{position: 'absolute', left: 1200, top: 0, width: 576, height: 436, backgroundColor: C.paper, border: `3px solid ${C.wood}`, borderRadius: 16, padding: '16px 22px', boxShadow: `0 8px 20px ${C.shadow}`}}>
        <Enter delay={150} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Plus size={28} color={C.wood} style={{flexShrink: 0}} />
          <LabelBlock color={C.wood} size={28}>资本公积金</LabelBlock>
        </Enter>
        <div style={{marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={164}><Chip tone="rice" style={{fontSize: 22, border: `2px solid ${C.wood}`}}>来源：新股<SoftHi style={{fontSize: 21}}>溢价款</SoftHi>等</Chip></Enter>
          <Enter delay={176}><Chip tone="rice" style={{fontSize: 22, border: `2px solid ${C.wood}`}}>用途：可以转增资本、弥补亏损</Chip></Enter>
        </div>
        <div style={{marginTop: 16, backgroundColor: C.panel, borderRadius: 10, padding: '12px 16px'}}>
          <Enter delay={190} style={{fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.6}}>发行价超过票面金额的部分，全部<ThinU color={C.wood}>列入资本公积金</ThinU>——国务院另有规定除外</Enter>
        </div>
      </div>
      <div data-final-knowledge="trio-option-cd-verdict" style={{position: 'absolute', left: 0, right: 0, top: 462, height: 282, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={206} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.husk} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>题支收口：C 排除，D 入选</span>
          </Enter>
          <Enter delay={220} style={{marginTop: 14, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Neg size={23}>C 董事会定任意公积金——越权</Neg>
            <Stamp delay={230} tone="seal">排除</Stamp>
          </Enter>
          <Enter delay={244} style={{marginTop: 12, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Chip tone="panel" style={{fontSize: 22, border: '2px solid rgba(251,246,232,0.3)', color: C.paper}}><Plus size={22} color={C.paper} style={{flexShrink: 0}} />D 新股溢价款 → 资本公积金 ✓</Chip>
            <Stamp delay={254} tone="jade">入选</Stamp>
          </Enter>
        </div>
        <div style={{width: 460, borderLeft: `3px dashed rgba(251,246,232,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={268} style={{fontSize: 23, fontWeight: 900, color: C.husk}}>一图记牢三仓</Enter>
          <Enter delay={280} style={{fontSize: 22, fontWeight: 750, color: C.paper, lineHeight: 1.7}}>法定=义务十之一；任意=股东会自选；资本=溢价专仓</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const ProfitReserveGranary = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-allocation-flow" {...SCENES.allocationFlow}><AllocationFlowScene /></TimelineSequence>
    <TimelineSequence name="02-reserve-math" {...SCENES.reserveMath}><ReserveMathScene /></TimelineSequence>
    <TimelineSequence name="03-reserve-trio" {...SCENES.reserveTrio}><ReserveTrioScene /></TimelineSequence>
  </AbsoluteFill>
);
