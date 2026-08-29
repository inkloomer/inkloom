import {ArrowLeftRight, Ban, Compass, Crosshair, GraduationCap, Maximize2, Milestone, Minimize2, ShieldCheck} from 'lucide-react';
import {Chip, C, Dash, Enter, LabelBlock, Neg, Seal, Shell, SoftHi, StoneTitle, ThinU} from './kit';

export const TechniqueRangeScene = () => (
  <Shell code="01" title="解释技巧：五支箭的落点">
    <div data-layout="crossbow-range-lane" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="shot-landing-map,range-width-dial" data-focal-rule="five-techniques-shift-meaning-within-or-beyond-the-verbal-range" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="range-wall" style={{position: 'absolute', left: 0, top: 0, width: 1340, height: 88, backgroundColor: C.wall, borderRadius: 12, backgroundImage: `repeating-linear-gradient(90deg, ${C.brick} 0 3px, transparent 3px 84px), repeating-linear-gradient(0deg, ${C.brick} 0 3px, transparent 3px 42px)`}}>
        <Enter delay={4} style={{position: 'absolute', left: 22, top: 20, display: 'flex', alignItems: 'center', gap: 12}}>
          <Crosshair size={30} color={C.chalk} />
          <LabelBlock color={C.chalk} size={28}>文义射程 · 法条用语的字面含义范围</LabelBlock>
        </Enter>
        <div style={{position: 'absolute', left: 22, right: 22, top: 74, display: 'flex', gap: 6}}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => <div key={i} style={{width: 3, height: 10, backgroundColor: C.chalkDim}} />)}
        </div>
      </div>
      <div data-final-knowledge="range-beyond" style={{position: 'absolute', left: 1364, right: 0, top: 0, height: 88, backgroundColor: C.wallDark, borderRadius: 12, borderLeft: '4px dashed ' + C.vermilion}}>
        <Enter delay={10} style={{position: 'absolute', left: 22, top: 26, display: 'flex', alignItems: 'center', gap: 10}}>
          <span style={{fontSize: 28, fontWeight: 950, color: C.chalk, whiteSpace: 'nowrap'}}>射程之外</span>
          <span style={{fontSize: 21, fontWeight: 800, color: C.vermilion, whiteSpace: 'nowrap'}}>越墙即出界</span>
        </Enter>
      </div>

      <div data-final-knowledge="tech-narrow" style={{position: 'absolute', left: 0, top: 140, width: 400, height: 220, backgroundColor: C.paper, border: `3px solid ${C.ink}`, borderRadius: 10, padding: '16px 18px'}}>
        <Enter delay={20} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Minimize2 size={28} color={C.azure} />
          <StoneTitle>缩小解释</StoneTitle>
        </Enter>
        <Enter delay={30} style={{marginTop: 10, fontSize: 22, fontWeight: 700, color: C.inkSoft}}>含义比字面更窄——字面含义的<span style={{fontWeight: 950, color: C.ink}}>子集</span></Enter>
        <Enter delay={40} style={{marginTop: 14}}><Chip style={{fontSize: 21, whiteSpace: 'normal'}}>「情报」→ 仅限关系国家安全的情报</Chip></Enter>
        <span style={{position: 'absolute', right: 14, top: 10, fontSize: 30, fontWeight: 950, color: C.ghost}}>①</span>
      </div>

      <div data-final-knowledge="tech-plain" style={{position: 'absolute', left: 448, top: 140, width: 400, height: 220, backgroundColor: C.paper, border: `3px solid ${C.ink}`, borderRadius: 10, padding: '16px 18px'}}>
        <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Milestone size={28} color={C.gold} />
          <StoneTitle>平义解释</StoneTitle>
        </Enter>
        <Enter delay={50} style={{marginTop: 10, fontSize: 22, fontWeight: 700, color: C.inkSoft}}>按用语<span style={{fontWeight: 950, color: C.ink}}>最平常的字面含义</span>——不扩大也不缩小</Enter>
        <Enter delay={60} style={{marginTop: 14}}><Chip style={{fontSize: 21, whiteSpace: 'normal'}}>「公私财物」→ 他人的财物（含单位）</Chip></Enter>
        <span style={{position: 'absolute', right: 14, top: 10, fontSize: 30, fontWeight: 950, color: C.ghost}}>②</span>
      </div>

      <div data-final-knowledge="tech-expand" style={{position: 'absolute', left: 896, top: 140, width: 400, height: 220, backgroundColor: C.paper, border: `3px solid ${C.gold}`, borderRadius: 10, padding: '16px 18px'}}>
        <Enter delay={60} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Maximize2 size={28} color={C.gold} />
          <StoneTitle>扩大解释</StoneTitle>
        </Enter>
        <Enter delay={70} style={{marginTop: 10, fontSize: 22, fontWeight: 700, color: C.inkSoft}}>含义大于字面——<ThinU>仍处射程范围内</ThinU></Enter>
        <Enter delay={80} style={{marginTop: 14}}><Chip style={{fontSize: 21, whiteSpace: 'normal'}}>「信件」→ 包含电子邮件</Chip></Enter>
        <span style={{position: 'absolute', right: 14, top: 10, fontSize: 30, fontWeight: 950, color: C.ghost}}>③</span>
      </div>

      <div data-final-knowledge="tech-analogy" style={{position: 'absolute', left: 1364, right: 0, top: 140, height: 220, backgroundColor: C.vermilionSoft, border: `3px solid ${C.vermilion}`, borderRadius: 10, padding: '16px 18px'}}>
        <Enter delay={88} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Ban size={28} color={C.vermilion} />
          <StoneTitle>类推解释</StoneTitle>
        </Enter>
        <Enter delay={98} style={{marginTop: 10, fontSize: 22, fontWeight: 700, color: C.inkSoft}}>把<span style={{fontWeight: 950}}>不符合规定</span>的情形解释为<span style={{fontWeight: 950}}>符合规定</span></Enter>
        <Enter delay={110} style={{marginTop: 10}}><Neg size={23}>不利于被告人 → 绝对禁止</Neg></Enter>
        <div data-final-knowledge="tech-analogy-exception">
          <Enter delay={122} style={{marginTop: 10, display: 'flex', alignItems: 'center', gap: 8}}>
            <ShieldCheck size={22} color={C.gold} />
            <span style={{fontSize: 22, fontWeight: 800, color: C.ink}}>有利于被告人 → 不禁止</span>
          </Enter>
        </div>
      </div>

      <div data-final-knowledge="tech-reverse" style={{position: 'absolute', left: 0, top: 384, width: 1340, height: 128, backgroundColor: C.azureSoft, border: `3px solid ${C.azure}`, borderRadius: 10, padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 20}}>
        <Enter delay={130} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <ArrowLeftRight size={28} color={C.azure} />
          <StoneTitle>反义解释</StoneTitle>
        </Enter>
        <Dash delay={142} style={{width: 3, alignSelf: 'stretch', backgroundColor: 'rgba(47,93,124,0.35)'}} />
        <Enter delay={148} style={{fontSize: 23, fontWeight: 800}}>由用语的<span style={{fontWeight: 950, color: C.azure}}>正面表述</span>推导出<span style={{fontWeight: 950, color: C.azure}}>反面含义</span>（A → -A）</Enter>
        <span style={{flex: 1}} />
        <Enter delay={162} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Chip>满16周岁应担责</Chip>
          <span style={{fontSize: 24, fontWeight: 950, color: C.azure}}>⇒</span>
          <Chip tone="azure"><ThinU color={C.white}>不满16周岁不担责</ThinU></Chip>
        </Enter>
      </div>

      <div style={{position: 'absolute', left: 0, top: 536, width: 1340, height: 96, backgroundColor: C.goldSoft, border: `3px solid ${C.gold}`, borderRadius: 10, display: 'flex', alignItems: 'center', gap: 18, padding: '0 24px'}}>
        <Enter delay={168}><LabelBlock ink size={26}>五支箭 · 一堵墙</LabelBlock></Enter>
        <Enter delay={178} style={{fontSize: 24, fontWeight: 800}}>解释技巧＝<SoftHi style={{fontSize: 23}}>生产结论</SoftHi>的手法——落点在墙内还是墙外，结论已经不同</Enter>
      </div>
    </div>
  </Shell>
);

export const AnalogyExamStripScene = () => (
  <Shell code="02" title="扩大还是类推：两条界线 · 六连真题">
    <div data-layout="boundary-fork-exam-strip" data-visual-anchor="boundary" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="two-bound-limit,exam-stamp-sequence" data-focal-rule="expansion-stays-in-range-analogy-leaps-beyond-forecast" data-focal-channels="icon,enclosure,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="limit-scope" style={{position: 'absolute', left: 0, top: 0, width: 660, height: 552, backgroundColor: C.paper, border: `3px solid ${C.ink}`, borderRadius: 12, padding: '18px 22px'}}>
        <Enter delay={6}><LabelBlock size={29}>扩大解释 vs 类推解释</LabelBlock></Enter>
        <Enter delay={16} style={{marginTop: 18, display: 'flex', alignItems: 'center', gap: 10}}>
          <Crosshair size={26} color={C.ink} />
          <LabelBlock size={26} color={C.azure}>界线一 · 词义射程</LabelBlock>
        </Enter>
        <div data-final-knowledge="limit-scope-rows" style={{marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={28} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <Maximize2 size={22} color={C.gold} />
            <Chip tone="gold" style={{fontSize: 23}}>扩大 · 射程范围内</Chip>
          </Enter>
          <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <Ban size={22} color={C.vermilion} />
            <Neg size={24}>类推 · 射程范围外</Neg>
          </Enter>
        </div>
        <Enter delay={56} style={{marginTop: 20, display: 'flex', alignItems: 'center', gap: 10}}>
          <Compass size={26} color={C.ink} />
          <LabelBlock size={26} color={C.azure}>界线二 · 预测可能性</LabelBlock>
        </Enter>
        <div data-final-knowledge="limit-forecast-rows" style={{marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={68}><Chip tone="gold" style={{fontSize: 23}}>扩大 · 没有超出国民预测可能性</Chip></Enter>
          <Enter delay={80}><Neg size={24}>类推 · 明显超出预测可能性</Neg></Enter>
        </div>
        <div data-final-knowledge="limit-verdict">
          <Enter delay={96} style={{position: 'absolute', left: 22, right: 22, bottom: 18, border: `2px dashed ${C.ink}`, borderRadius: 8, padding: '12px 14px', fontSize: 22, fontWeight: 800}}>
            一秒判：一般人凭语感还<ThinU>想得到</ThinU>→ 扩大；<ThinU>想不到</ThinU> → 类推
          </Enter>
        </div>
      </div>

      <div style={{position: 'absolute', left: 684, right: 0, top: 0, height: 552}}>
        <Enter delay={12} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <GraduationCap size={30} color={C.vermilion} />
          <LabelBlock size={28}>六连真题 · 一秒定判</LabelBlock>
          <Chip style={{fontSize: 20}}>2015-2024 高频</Chip>
        </Enter>
        <div style={{marginTop: 14, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14}}>
          <div data-final-knowledge="exam-item-1" style={{position: 'relative', backgroundColor: C.paper, border: `2px solid ${C.ink}`, borderRadius: 10, padding: '12px 16px', minHeight: 132}}>
            <Enter delay={104} style={{fontSize: 22, fontWeight: 800, width: 380}}>遗弃罪「负有扶养义务的人」→ 包含家庭成员以外的人</Enter>
            <Enter delay={114} style={{position: 'absolute', right: 12, top: 12}}><Seal delay={114} tone="gold">扩大</Seal></Enter>
          </div>
          <div data-final-knowledge="exam-item-2" style={{position: 'relative', backgroundColor: C.paper, border: `2px solid ${C.ink}`, borderRadius: 10, padding: '12px 16px', minHeight: 132}}>
            <Enter delay={120} style={{fontSize: 22, fontWeight: 800, width: 380}}>「金融机构」→ 包含运钞车、ATM机</Enter>
            <Enter delay={130} style={{position: 'absolute', right: 12, top: 12}}><Seal delay={130} tone="gold">扩大</Seal></Enter>
          </div>
          <div data-final-knowledge="exam-item-3" style={{position: 'relative', backgroundColor: C.paper, border: `2px solid ${C.ink}`, borderRadius: 10, padding: '12px 16px', minHeight: 132}}>
            <Enter delay={136} style={{fontSize: 22, fontWeight: 800, width: 380}}>组织卖淫「组织他人卖淫」→ 含男性向女性卖淫</Enter>
            <Enter delay={146} style={{position: 'absolute', right: 12, top: 12}}><Seal delay={146} tone="gold">扩大</Seal></Enter>
          </div>
          <div data-final-knowledge="exam-item-4" style={{position: 'relative', backgroundColor: C.paper, border: `2px solid ${C.ink}`, borderRadius: 10, padding: '12px 16px', minHeight: 132}}>
            <Enter delay={152} style={{fontSize: 22, fontWeight: 800, width: 380}}>「信用卡」→ 包含借记卡（储蓄卡）·立法解释</Enter>
            <Enter delay={162} style={{position: 'absolute', right: 12, top: 12}}><Seal delay={162} tone="gold">扩大</Seal></Enter>
          </div>
          <div data-final-knowledge="exam-item-5" style={{position: 'relative', backgroundColor: C.paper, border: '2px solid ' + C.ink, borderRadius: 10, padding: '12px 16px', minHeight: 132}}>
            <Enter delay={172} style={{fontSize: 22, fontWeight: 800, width: 360}}>劫持汽车罪「汽车」→ 大型拖拉机 ＝ 扩大</Enter>
            <Enter delay={182} style={{fontSize: 22, fontWeight: 800, width: 360, marginTop: 6}}>→ 火车·地铁 ＝ 类推（脱离基本特征）</Enter>
            <Enter delay={188} style={{position: 'absolute', right: 12, top: 12, display: 'flex', flexDirection: 'column', gap: 8}}>
              <Seal delay={188} tone="gold">扩大</Seal>
              <Seal delay={194} tone="vermilion">类推</Seal>
            </Enter>
          </div>
          <div data-final-knowledge="exam-item-6" style={{position: 'relative', backgroundColor: C.paper, border: `2px solid ${C.vermilion}`, borderRadius: 10, padding: '12px 16px', minHeight: 132}}>
            <Enter delay={204} style={{fontSize: 22, fontWeight: 800, width: 380}}>盗窃骨灰 → 认定为盗窃「尸体」</Enter>
            <Enter delay={214} style={{position: 'absolute', right: 12, top: 12}}><Seal delay={214} tone="vermilion">类推</Seal></Enter>
          </div>
        </div>
      </div>

      <div data-final-knowledge="exam-floor" style={{position: 'absolute', left: 0, right: 0, top: 576, bottom: 0, backgroundColor: C.goldSoft, border: `3px solid ${C.gold}`, borderRadius: 12, display: 'flex', alignItems: 'center', gap: 16, padding: '0 24px'}}>
        <Enter delay={232}><LabelBlock ink size={26}>口诀</LabelBlock></Enter>
        <Enter delay={242} style={{fontSize: 24, fontWeight: 800}}>扩大＝射程内的合理延伸 · 类推＝射程外的造法</Enter>
        <span style={{flex: 1}} />
        <Enter delay={252} style={{display: 'flex', alignItems: 'center', gap: 8}}>
          <ShieldCheck size={24} color={C.gold} />
          <span style={{fontSize: 22, fontWeight: 800}}>对被告人有利的类推 · 不禁止</span>
        </Enter>
      </div>
    </div>
  </Shell>
);
