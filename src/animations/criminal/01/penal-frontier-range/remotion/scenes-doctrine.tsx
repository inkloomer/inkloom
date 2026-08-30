import {Ban, BookOpen, BrickWall, Compass, Crosshair, DoorClosed, FileText, Flag, Gavel, Hourglass, Landmark, Scale, ScrollText, ShieldCheck, Users} from 'lucide-react';
import {Chip, C, Dash, Enter, LabelBlock, Neg, Seal, Shell, SoftHi, StoneTitle, ThinU} from './kit';

export const ReasonsRelationshipBenchScene = () => (
  <Shell code="03" title="解释理由：四块论证牌 · 双引擎关系">
    <div data-layout="reason-quartet-bench" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="reason-quartet,produce-justify-pairing" data-focal-rule="techniques-produce-verdicts-reasons-justify-them" data-focal-channels="icon,enclosure,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="reason-grammatical" style={{position: 'absolute', left: 0, top: 0, width: 426, height: 268, backgroundColor: C.paper, border: `3px solid ${C.azure}`, borderRadius: 10, padding: '14px 16px'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <BookOpen size={28} color={C.azure} />
          <StoneTitle>文理解释</StoneTitle>
        </Enter>
        <Enter delay={16} style={{marginTop: 10, fontSize: 22, fontWeight: 700, color: C.inkSoft}}>依据：文法·语法——是否<ThinU>讲得通</ThinU></Enter>
        <Enter delay={26} style={{marginTop: 12}}><Chip style={{fontSize: 21, whiteSpace: 'normal'}}>副乡长冒充市长 ＝「冒充」国家机关工作人员 ✓</Chip></Enter>
        <Enter delay={36} style={{marginTop: 10}}><Chip style={{fontSize: 21, whiteSpace: 'normal'}}>丈夫强行与妻子性交 ＝「强奸妇女」✓</Chip></Enter>
      </div>

      <div data-final-knowledge="reason-systemic" style={{position: 'absolute', left: 450, top: 0, width: 426, height: 268, backgroundColor: C.paper, border: `3px solid ${C.gold}`, borderRadius: 10, padding: '14px 16px'}}>
        <Enter delay={22} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <BrickWall size={28} color={C.gold} />
          <StoneTitle>体系解释</StoneTitle>
        </Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={32}><Chip tone="gold" style={{fontSize: 20, whiteSpace: 'normal'}}>一词多义：强奸「胁迫」＞抢劫「胁迫」</Chip></Enter>
          <Enter delay={40}><Chip tone="gold" style={{fontSize: 20, whiteSpace: 'normal'}}>多词一义：出售＝销售＝倒卖＝贩卖＝有偿转让</Chip></Enter>
          <Enter delay={48}><Chip tone="gold" style={{fontSize: 20, whiteSpace: 'normal'}}>兜底条款：按前列项的共同特征解释</Chip></Enter>
        </div>
      </div>

      <div data-final-knowledge="reason-natural" style={{position: 'absolute', left: 900, top: 0, width: 426, height: 268, backgroundColor: C.paper, border: `3px solid ${C.vermilion}`, borderRadius: 10, padding: '14px 16px'}}>
        <Enter delay={38} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Gavel size={28} color={C.vermilion} />
          <StoneTitle>当然解释</StoneTitle>
        </Enter>
        <Enter delay={48} style={{marginTop: 8, fontSize: 22, fontWeight: 800}}>举轻以明重 · 举重以明轻</Enter>
        <Enter delay={58} style={{marginTop: 8, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>前提：两事项<ThinU>性质相同</ThinU>、仅程度不同</Enter>
        <Enter delay={68} style={{marginTop: 8}}><Neg size={22}>性质不同（宠物≠婴儿）→ 不得当然推理</Neg></Enter>
      </div>

      <div data-final-knowledge="reason-teleological" style={{position: 'absolute', left: 1350, top: 0, width: 426, height: 268, backgroundColor: C.paper, border: `3px solid ${C.azure}`, borderRadius: 10, padding: '14px 16px'}}>
        <Enter delay={54} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Flag size={28} color={C.azure} />
          <StoneTitle>目的解释</StoneTitle>
        </Enter>
        <Enter delay={64} style={{marginTop: 10, fontSize: 22, fontWeight: 700, color: C.inkSoft}}>依据：罪名的<span style={{fontWeight: 950, color: C.ink}}>保护目的</span></Enter>
        <Enter delay={74} style={{marginTop: 12}}><Chip style={{fontSize: 21, whiteSpace: 'normal'}}>诬告陷害保护人身权利 → 同意被诬告＝放弃保护 → 不构成</Chip></Enter>
      </div>

      <div data-final-knowledge="engine-technique" style={{position: 'absolute', left: 0, top: 292, width: 876, height: 268, backgroundColor: C.azureSoft, border: `3px solid ${C.azure}`, borderRadius: 12, padding: '18px 24px'}}>
        <Enter delay={96} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Crosshair size={30} color={C.azure} />
          <LabelBlock size={28} color={C.azure}>解释技巧</LabelBlock>
        </Enter>
        <Enter delay={106} style={{marginTop: 16, fontSize: 26, fontWeight: 900}}>负责 <SoftHi style={{fontSize: 25}}>生产结论</SoftHi></Enter>
        <Enter delay={116} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.inkSoft}}>相互排斥——不能既扩大又缩小，一箭只有一个落点</Enter>
      </div>

      <div data-final-knowledge="engine-reason" style={{position: 'absolute', left: 900, top: 292, width: 876, height: 268, backgroundColor: C.goldSoft, border: `3px solid ${C.gold}`, borderRadius: 12, padding: '18px 24px'}}>
        <Enter delay={110} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <BookOpen size={30} color={C.gold} />
          <LabelBlock ink size={28}>解释理由</LabelBlock>
        </Enter>
        <Enter delay={120} style={{marginTop: 16, fontSize: 26, fontWeight: 900}}>负责 <Chip tone="ink" style={{fontSize: 24}}>提供论证</Chip></Enter>
        <Enter delay={130} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.inkSoft}}>相互并存——理由越多越好，可以叠用</Enter>
      </div>

      <div data-final-knowledge="engine-floor" style={{position: 'absolute', left: 0, right: 0, top: 584, bottom: 0, backgroundColor: C.vermilionSoft, border: `3px solid ${C.vermilion}`, borderRadius: 12, display: 'flex', alignItems: 'center', gap: 20, padding: '0 24px'}}>
        <Enter delay={136}><LabelBlock size={27} color={C.vermilion}>底线</LabelBlock></Enter>
        <Enter delay={146}><Neg size={24}>缺理由的结论 → 不得采纳</Neg></Enter>
        <Enter delay={156} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Ban size={26} color={C.vermilion} />
          <span style={{fontSize: 24, fontWeight: 900, color: C.vermilionDeep}}>类推技巧 → 绝对不得采纳（罪刑法定）</span>
        </Enter>
        <span style={{flex: 1}} />
        <Enter delay={166} style={{fontSize: 22, fontWeight: 800, color: C.inkSoft}}>相辅相成 · 相互制约</Enter>
      </div>
    </div>
  </Shell>
);

export const NullaPoenaGateScene = () => (
  <Shell code="04" title="罪刑法定：一堵墙 · 两扇门">
    <div data-layout="twin-gate-wall" data-visual-anchor="boundary" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="clause-gate-pair,exception-gold-thread" data-focal-rule="no-crime-without-statute-protects-liberty-as-the-core" data-focal-channels="icon,enclosure,locator,contrast" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="gate-wall-band" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 64, backgroundColor: C.wall, borderRadius: 10, backgroundImage: `repeating-linear-gradient(90deg, ${C.brick} 0 3px, transparent 3px 84px)`}}>
        <Enter delay={4} style={{position: 'absolute', left: 20, top: 12, display: 'flex', alignItems: 'center', gap: 12}}>
          <Landmark size={30} color={C.chalk} />
          <LabelBlock color={C.chalk} size={27}>罪刑法定 · 《刑法》第3条</LabelBlock>
        </Enter>
        <Enter delay={10} style={{position: 'absolute', right: 20, top: 18, fontSize: 21, fontWeight: 800, color: C.chalkDim}}>民主与自由砌成的城墙</Enter>
      </div>

      <div data-final-knowledge="gate-positive" style={{position: 'absolute', left: 0, top: 88, width: 600, height: 184, backgroundColor: C.paper, border: `3px solid ${C.ink}`, borderRadius: 10, padding: '14px 18px'}}>
        <Enter delay={16} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <DoorClosed size={28} color={C.azure} />
          <span style={{fontSize: 24, fontWeight: 950}}>第一扇门 · 法律明文规定为犯罪行为</span>
        </Enter>
        <Enter delay={28} style={{marginTop: 12, fontSize: 23, fontWeight: 800}}>→ 依照法律<ThinU>定罪处刑</ThinU></Enter>
        <Enter delay={40} style={{marginTop: 12}}><Chip tone="azure" style={{fontSize: 22}}>保护法益机能——防范有罪办成无罪</Chip></Enter>
      </div>

      <div data-final-knowledge="gate-negative" style={{position: 'absolute', left: 624, top: 88, width: 600, height: 184, backgroundColor: C.goldSoft, border: `4px solid ${C.gold}`, borderRadius: 10, padding: '14px 18px'}}>
        <Enter delay={36} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <DoorClosed size={28} color={C.gold} />
          <span style={{fontSize: 24, fontWeight: 950}}>第二扇门 · 法律没有明文规定为犯罪行为</span>
        </Enter>
        <Enter delay={48} style={{marginTop: 12, fontSize: 23, fontWeight: 900}}>→ <SoftHi style={{fontSize: 24}}>不得定罪处刑</SoftHi></Enter>
        <Enter delay={60} style={{marginTop: 12, display: 'flex', alignItems: 'center', gap: 12}}>
          <Chip tone="gold" style={{fontSize: 22}}>保障人权机能</Chip>
          <Seal delay={66} tone="gold">★ 真正核心</Seal>
        </Enter>
      </div>

      <div data-final-knowledge="pillar-democracy" style={{position: 'absolute', left: 1248, top: 88, width: 252, height: 184, backgroundColor: C.paper, border: `3px solid ${C.wall}`, borderRadius: 10, padding: '14px 16px'}}>
        <Enter delay={60} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Users size={26} color={C.wall} />
          <span style={{fontSize: 25, fontWeight: 950}}>民主主义</span>
        </Enter>
        <Enter delay={70} style={{marginTop: 10, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>只有民主产生的<span style={{fontWeight: 950, color: C.ink}}>立法机关</span>才有权规定犯罪与刑罚</Enter>
      </div>

      <div data-final-knowledge="pillar-liberty" style={{position: 'absolute', left: 1524, top: 88, width: 252, height: 184, backgroundColor: C.paper, border: `3px solid ${C.wall}`, borderRadius: 10, padding: '14px 16px'}}>
        <Enter delay={72} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Compass size={26} color={C.wall} />
          <span style={{fontSize: 25, fontWeight: 950}}>自由主义</span>
        </Enter>
        <Enter delay={82} style={{marginTop: 10, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>法律应当具有<span style={{fontWeight: 950, color: C.ink}}>预测可能性</span>，保障行动自由</Enter>
      </div>

      <Dash delay={92} style={{position: 'absolute', left: 450, top: 288, width: 876, borderTop: `4px dashed ${C.gold}`}}>
        <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, position: 'absolute', left: 318, top: -16, backgroundColor: C.field, padding: '0 10px'}}>
          <ShieldCheck size={22} color={C.gold} />
          <span style={{fontSize: 21, fontWeight: 900, color: C.gold}}>有利于被告人 · 例外金线</span>
        </span>
      </Dash>

      <div data-final-knowledge="content-written" style={{position: 'absolute', left: 0, top: 304, width: 426, height: 396, backgroundColor: C.paper, border: `3px solid ${C.ink}`, borderRadius: 10, padding: '16px 18px'}}>
        <Enter delay={104} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <FileText size={28} color={C.ink} />
          <StoneTitle>成文的</StoneTitle>
        </Enter>
        <Enter delay={114} style={{marginTop: 14}}><Chip style={{fontSize: 22}}>法律主义——立法机关专属</Chip></Enter>
        <Enter delay={124} style={{marginTop: 12}}><Neg size={22}>行政机关（国务院）无权制定刑法</Neg></Enter>
        <Enter delay={134} style={{marginTop: 12}}><Neg size={22}>司法机关无权制定刑法</Neg></Enter>
        <Enter delay={144} style={{marginTop: 12}}><Neg size={22}>禁止习惯法——缺乏明确性</Neg></Enter>
      </div>

      <div data-final-knowledge="content-prior" style={{position: 'absolute', left: 450, top: 304, width: 426, height: 396, backgroundColor: C.paper, border: `3px solid ${C.gold}`, borderRadius: 10, padding: '16px 18px'}}>
        <Enter delay={118} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Hourglass size={28} color={C.gold} />
          <StoneTitle>事前的</StoneTitle>
        </Enter>
        <Enter delay={128} style={{marginTop: 14}}><Chip tone="gold" style={{fontSize: 22}}>禁止溯及既往（禁止事后法）</Chip></Enter>
        <div style={{marginTop: 14, border: `3px dashed ${C.gold}`, borderRadius: 8, padding: '10px 12px'}}>
          <Enter delay={138} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <ShieldCheck size={22} color={C.gold} />
            <span style={{fontSize: 21, fontWeight: 900}}>例外：有利于被告人的溯及 → 不禁止</span>
          </Enter>
        </div>
      </div>

      <div data-final-knowledge="content-strict" style={{position: 'absolute', left: 900, top: 304, width: 426, height: 396, backgroundColor: C.paper, border: `3px solid ${C.gold}`, borderRadius: 10, padding: '16px 18px'}}>
        <Enter delay={132} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Ban size={28} color={C.vermilion} />
          <StoneTitle>严格的</StoneTitle>
        </Enter>
        <Enter delay={142} style={{marginTop: 14}}><Chip tone="vermilion" style={{fontSize: 22}}>禁止不利于被告人的类推解释</Chip></Enter>
        <div style={{marginTop: 14, border: `3px dashed ${C.gold}`, borderRadius: 8, padding: '10px 12px'}}>
          <Enter delay={152} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <ShieldCheck size={22} color={C.gold} />
            <span style={{fontSize: 21, fontWeight: 900}}>例外：有利于被告人的类推 → 不禁止</span>
          </Enter>
        </div>
      </div>

      <div data-final-knowledge="content-certain" style={{position: 'absolute', left: 1350, top: 304, width: 426, height: 396, backgroundColor: C.paper, border: `3px solid ${C.ink}`, borderRadius: 10, padding: '16px 18px'}}>
        <Enter delay={146} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <ScrollText size={28} color={C.ink} />
          <StoneTitle>确定的</StoneTitle>
        </Enter>
        <Enter delay={156} style={{marginTop: 12}}><Chip style={{fontSize: 21, whiteSpace: 'normal'}}>明确性：简单罪状（「故意杀人的」）不违反</Chip></Enter>
        <Enter delay={166} style={{marginTop: 10}}><Neg size={21}>绝对禁止绝对不定刑·绝对不定期刑</Neg></Enter>
        <Enter delay={176} style={{marginTop: 10, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>禁止处罚不当罚——谦抑·补充；刑民＝<ThinU>高低位阶</ThinU>而非对立</Enter>
        <Enter delay={186} style={{marginTop: 12, display: 'flex', alignItems: 'center', gap: 8}}>
          <Scale size={22} color={C.gold} />
          <span style={{fontSize: 21, fontWeight: 900}}>禁止残虐刑罚——含罪刑相适应</span>
        </Enter>
      </div>
    </div>
  </Shell>
);
