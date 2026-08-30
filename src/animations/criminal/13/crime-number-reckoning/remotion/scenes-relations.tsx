import {GraduationCap, Scale, ScrollText, Zap} from 'lucide-react';
import {Chip, C, Enter, LabelBlock, LaneTitle, Neg, Shell, SoftHi, ThinU} from './kit';

export const OneActThreeRelationsScene = () => (
  <Shell code="01" title="一个行为·三种罪名关系">
    <div data-layout="three-lane-relation-yard" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="relation-trio-lanes,necessity-test-strip" data-focal-rule="count-conduct-first-then-test-necessity-to-pick-the-lane" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Zap size={130} color={C.ink} style={{position: 'absolute', right: 26, bottom: 300, opacity: 0.08}} />
      <div data-final-knowledge="street-case-banner" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 100, backgroundColor: C.scaleYellowSoft, border: `3px solid ${C.scaleYellow}`, borderRadius: 8, display: 'flex', alignItems: 'center', gap: 14, padding: '0 22px'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Zap size={24} color={C.booth} />
          <LabelBlock ink size={24}>卖唱案 · 第一步永远先数行为</LabelBlock>
        </Enter>
        <Enter delay={18} style={{fontSize: 21, fontWeight: 700, color: C.inkSoft}}>强迫听歌不给钱就打 → 一个行为同时触犯强迫交易罪与抢劫罪（中立关系）→ <SoftHi style={{fontSize: 20}}>想象竞合·择一重定抢劫</SoftHi></Enter>
      </div>

      <div style={{position: 'absolute', left: 0, top: 124, width: 1776, display: 'flex', gap: 20}}>
        <div data-final-knowledge="lane-opposite" style={{flex: 1, backgroundColor: C.white, border: `3px solid ${C.cone}`, borderRadius: 8, padding: '14px 16px'}}>
          <Enter delay={28} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <Neg size={26} />
            <LaneTitle>A 与 -A</LaneTitle>
          </Enter>
          <Enter delay={38} style={{marginTop: 8, fontSize: 20, fontWeight: 900, color: C.cone}}>对立排斥关系</Enter>
          <Enter delay={48} style={{marginTop: 6, fontSize: 19, fontWeight: 700, color: C.inkSoft}}>一个行为针对一个对象·不可能同时触犯两罪</Enter>
          <Enter delay={60} style={{marginTop: 10}}><Chip style={{fontSize: 19, whiteSpace: 'normal'}}>骗乙回头再拿走财物 → 要么诈骗要么盗窃·定盗窃罪</Chip></Enter>
        </div>
        <div data-final-knowledge="lane-inclusive" style={{flex: 1, backgroundColor: C.white, border: `3px solid ${C.screen}`, borderRadius: 8, padding: '14px 16px'}}>
          <Enter delay={34} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <ScrollText size={26} color={C.screen} />
            <LaneTitle>A 与 A+B</LaneTitle>
          </Enter>
          <Enter delay={44} style={{marginTop: 8, fontSize: 20, fontWeight: 900, color: C.screen}}>包容评价 · 法条竞合</Enter>
          <Enter delay={54} style={{marginTop: 6, fontSize: 19, fontWeight: 700, color: C.inkSoft}}>触犯 A+B 必然触犯 A → <ThinU>特殊法优于一般法</ThinU></Enter>
          <Enter delay={66} style={{marginTop: 10}}><Chip tone="screen" style={{fontSize: 19, whiteSpace: 'normal'}}>欲盗普通财物实盗枪支 → 盗窃枪支罪包容为盗窃罪·定盗窃罪既遂</Chip></Enter>
        </div>
        <div data-final-knowledge="lane-neutral" style={{flex: 1, backgroundColor: C.white, border: `3px solid ${C.booth}`, borderRadius: 8, padding: '14px 16px'}}>
          <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <Scale size={26} color={C.booth} />
            <LaneTitle>A 与 B</LaneTitle>
          </Enter>
          <Enter delay={50} style={{marginTop: 8, fontSize: 20, fontWeight: 900, color: C.booth}}>中立关系 · 可能想象竞合</Enter>
          <Enter delay={60} style={{marginTop: 6, fontSize: 19, fontWeight: 700, color: C.inkSoft}}>互不相干·无触犯必然性 → <ThinU>择一重罪</ThinU></Enter>
          <Enter delay={72} style={{marginTop: 10}}><Chip tone="ink" style={{fontSize: 19, whiteSpace: 'normal'}}>偷救命药案：盗窃×故意杀人 → 想象竞合定故意杀人</Chip></Enter>
        </div>
      </div>

      <div style={{position: 'absolute', left: 0, top: 420, width: 1050}}>
        <div data-final-knowledge="misuse-negatives"><Enter delay={84} style={{border: `3px dashed ${C.cone}`, borderRadius: 8, backgroundColor: C.white, padding: '10px 16px', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 10}}>
          <Neg size={22} />
          <span style={{fontSize: 20, fontWeight: 800}}>误区一：把中立当成对立——强迫交易×抢劫是中立·否则放纵卖唱式抢劫</span>
        </Enter></div>
        <div data-final-knowledge="misuse-negatives-2"><Enter delay={96} style={{border: `3px dashed ${C.cone}`, borderRadius: 8, backgroundColor: C.white, padding: '10px 16px', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 10}}>
          <ScrollText size={22} color={C.cone} style={{flexShrink: 0}} />
          <span style={{fontSize: 20, fontWeight: 800}}>误区二：把中立当成包容——诈骗×招摇撞骗法益不同·应想象竞合定诈骗·防轻判</span>
        </Enter></div>
        <div data-final-knowledge="misuse-negatives-3"><Enter delay={108} style={{border: `3px dashed ${C.cone}`, borderRadius: 8, backgroundColor: C.white, padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 10}}>
          <Scale size={22} color={C.cone} style={{flexShrink: 0}} />
          <span style={{fontSize: 20, fontWeight: 800}}>误区三：把包容当成对立——抢劫可包容为盗窃（不要求秘密）·打错人抢走车定盗窃</span>
        </Enter></div>
      </div>

      <div data-final-knowledge="dynamic-shift-board" style={{position: 'absolute', left: 1074, top: 420, width: 702, height: 324, backgroundColor: C.white, border: `3px solid ${C.screen}`, borderRadius: 8, padding: '14px 18px'}}>
        <Enter delay={90} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={26} color={C.screen} />
          <LabelBlock size={23} color={C.screen}>动态调整 · 形态不一致时</LabelBlock>
        </Enter>
        <Enter delay={102} style={{marginTop: 8, fontSize: 19, fontWeight: 700, color: C.inkSoft}}>法条竞合两罪·若特殊罪与一般罪犯罪形态不一致致罪刑失衡 → 调整为想象竞合·择一重</Enter>
        <Enter delay={116} style={{marginTop: 8}}><Chip tone="screen" style={{fontSize: 19, whiteSpace: 'normal'}}>杀人中止 vs 伤害既遂：中止可能更轻 → 择一重判</Chip></Enter>
      </div>
    </div>
  </Shell>
);
