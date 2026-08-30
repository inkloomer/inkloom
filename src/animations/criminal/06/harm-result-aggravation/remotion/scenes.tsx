import {ArrowLeftRight, Compass, Crosshair, GraduationCap, Maximize2, Zap} from 'lucide-react';
import {Chip, C, Dash, Enter, Gauge, LabelBlock, Neg, ScaleTitle, Shell, SoftHi, ThinU} from './kit';

export const HarmFactLadderScene = () => (
  <Shell code="01" title="法益侵害事实·三级刻度">
    <div data-layout="mercury-tier-column-board" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="hazard-grade-ladder,conduct-result-pairing" data-focal-rule="harm-grades-rise-from-presumed-danger-to-actual-injury" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="tier-abstract" style={{position: 'absolute', left: 0, top: 0, width: 860, height: 200, backgroundColor: C.coolSoft, border: `3px solid ${C.cool}`, borderRadius: 10, padding: '14px 20px'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Chip tone="cool" style={{fontSize: 21}}><Zap size={20} color={C.white} style={{flexShrink: 0}} /> 抽象危险犯（行为犯）</Chip>
          <span style={{fontSize: 21, fontWeight: 800, color: C.inkSoft}}>立法推定·不需法官具体判断</span>
        </Enter>
        <Enter delay={18} style={{marginTop: 10, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>只要实施行为即推定抽象危险——面粉冒充胃药销售 → <SoftHi style={{fontSize: 20}}>仍构成生产销售假药罪</SoftHi>（2010·15：可能贻误病情）</Enter>
      </div>
      <div data-final-knowledge="tier-concrete" style={{position: 'absolute', left: 0, top: 224, width: 860, height: 200, backgroundColor: C.warmSoft, border: `3px solid ${C.warm}`, borderRadius: 10, padding: '14px 20px'}}>
        <Enter delay={30} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Chip tone="warm" style={{fontSize: 21}}><Compass size={20} color={C.ink} style={{flexShrink: 0}} /> 具体危险犯</Chip>
          <span style={{fontSize: 21, fontWeight: 800, color: C.inkSoft}}>需法官具体判断</span>
        </Enter>
        <Enter delay={42} style={{marginTop: 10, display: 'flex', gap: 8, flexWrap: 'wrap'}}>
          <Chip style={{fontSize: 20, whiteSpace: 'normal'}}>放火罪</Chip>
          <Chip style={{fontSize: 20, whiteSpace: 'normal'}}>投放危险物质罪</Chip>
          <Chip style={{fontSize: 20, whiteSpace: 'normal'}}>以危险方法危害公共安全罪</Chip>
        </Enter>
      </div>
      <div data-final-knowledge="tier-actual" style={{position: 'absolute', left: 0, top: 448, width: 860, height: 200, backgroundColor: C.mercurySoft, border: `4px solid ${C.mercury}`, borderRadius: 10, padding: '14px 20px'}}>
        <Enter delay={54} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Chip tone="mercury" style={{fontSize: 21}}><Crosshair size={20} color={C.white} style={{flexShrink: 0}} /> 实害犯（结果犯）</Chip>
          <span style={{fontSize: 21, fontWeight: 800, color: C.inkSoft}}>要求实害结果</span>
        </Enter>
        <Enter delay={66} style={{marginTop: 10, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>例：生产销售劣药罪——须「对人体健康造成<ThinU>严重危害</ThinU>」</Enter>
      </div>

      <div data-final-knowledge="pair-conduct-result" style={{position: 'absolute', left: 884, top: 0, width: 892, height: 648, backgroundColor: C.white, border: `3px solid ${C.scaleDark}`, borderRadius: 10, padding: '16px 22px'}}>
        <Enter delay={12}><LabelBlock ink size={26}>行为犯 vs 结果犯 · 分水岭＝是否要求实害结果</LabelBlock></Enter>
        <div data-final-knowledge="pair-conduct-side" style={{marginTop: 16, border: `3px solid ${C.cool}`, borderRadius: 8, padding: '10px 14px'}}>
          <Enter delay={26} style={{fontSize: 22, fontWeight: 900, color: C.cool}}>行为犯：不将实害结果作为成立条件</Enter>
          <Enter delay={38} style={{marginTop: 8, display: 'flex', gap: 8, flexWrap: 'wrap'}}>
            <Chip style={{fontSize: 19, whiteSpace: 'normal'}}>生产销售假药罪</Chip>
            <Chip style={{fontSize: 19, whiteSpace: 'normal'}}>伪证罪</Chip>
            <Chip style={{fontSize: 19, whiteSpace: 'normal'}}>诬告陷害罪</Chip>
            <Chip style={{fontSize: 19, whiteSpace: 'normal'}}>黑社会性质组织罪</Chip>
          </Enter>
        </div>
        <div data-final-knowledge="pair-result-side" style={{marginTop: 14, border: `3px solid ${C.mercury}`, borderRadius: 8, padding: '10px 14px'}}>
          <Enter delay={50} style={{fontSize: 22, fontWeight: 900, color: C.mercury}}>结果犯（实害犯）：要求实害结果</Enter>
          <Enter delay={62} style={{marginTop: 8, display: 'flex', gap: 8, flexWrap: 'wrap'}}>
            <Chip style={{fontSize: 19, whiteSpace: 'normal'}}>丢失枪支不报罪</Chip>
            <Chip style={{fontSize: 19, whiteSpace: 'normal'}}>滥用职权罪</Chip>
            <Chip style={{fontSize: 19, whiteSpace: 'normal'}}>生产销售劣药罪</Chip>
          </Enter>
          <Enter delay={74} style={{marginTop: 8}}><SoftHi style={{fontSize: 20}}>所有过失犯罪都是结果犯</SoftHi></Enter>
        </div>
        <div data-final-knowledge="pair-floor-note" style={{marginTop: 14}}>
          <Enter delay={86} style={{fontSize: 21, fontWeight: 700, color: C.inkSoft}}>刻度只升不降：从推定危险到具体危险再到实害——先辨认罪名停在哪一格</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const AggravatedStructureScene = () => (
  <Shell code="02" title="结果加重犯·结构·法定性">
    <div data-layout="aggravated-structure-panels" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="base-upgrade-stack,statute-list-split" data-focal-rule="aggravation-needs-one-act-one-upgraded-result-and-statutory-text" data-focal-channels="icon,contrast,enclosure,connector" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="struct-column" style={{position: 'absolute', left: 0, top: 0, width: 566, height: 744, backgroundColor: C.white, border: `4px solid ${C.brass}`, borderRadius: 10, padding: '14px 20px'}}>
        <Enter delay={6}><LabelBlock size={25} color={C.brass}>结构三件套</LabelBlock></Enter>
        <div style={{marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={18}><Chip tone="brass" style={{fontSize: 21, whiteSpace: 'normal'}}>① 一个行为构成基本犯</Chip></Enter>
          <Dash delay={24} style={{width: 3, marginLeft: 60, height: 16, backgroundColor: C.ink}} />
          <Enter delay={28}><Chip tone="brass" style={{fontSize: 21, whiteSpace: 'normal'}}>② 该行为导致加重结果</Chip></Enter>
          <Dash delay={34} style={{width: 3, marginLeft: 60, height: 16, backgroundColor: C.ink}} />
          <Enter delay={38}><Chip tone="mercury" style={{fontSize: 21, whiteSpace: 'normal'}}><Maximize2 size={20} color={C.white} style={{flexShrink: 0}} /> ③ 刑法明文·加重处罚</Chip></Enter>
        </div>
        <div data-final-knowledge="struct-luzhishen-case" style={{marginTop: 16, backgroundColor: C.brassSoft, border: `3px solid ${C.brass}`, borderRadius: 8, padding: '10px 14px'}}>
          <Enter delay={50} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <GraduationCap size={22} color={C.mercury} />
            <span style={{fontSize: 20, fontWeight: 900}}>鲁智深拳打镇关西·只想教训未料打死</span>
          </Enter>
          <Enter delay={62} style={{marginTop: 6}}><Gauge delay={62} tone="mercury">故意伤害罪·致人死亡（对死亡持过失）</Gauge></Enter>
        </div>
        <div data-final-knowledge="struct-imaginery-pair" style={{marginTop: 16, border: `3px dashed ${C.scaleDark}`, borderRadius: 8, padding: '10px 14px'}}>
          <Enter delay={74} style={{fontSize: 20, fontWeight: 900}}>vs 想象竞合：结构相同（一行为触两罪名）</Enter>
          <Enter delay={86} style={{marginTop: 6, fontSize: 19, fontWeight: 700, color: C.inkSoft}}>分界＝有无法律特别规定：想象竞合→择一重；结果加重→定基本犯·<ThinU>法定刑升格</ThinU></Enter>
        </div>
      </div>

      <div data-final-knowledge="statute-negligent-list" style={{position: 'absolute', left: 590, top: 0, width: 566, height: 430, backgroundColor: C.white, border: `3px solid ${C.cool}`, borderRadius: 10, padding: '14px 18px'}}>
        <Enter delay={12}><LabelBlock size={24} color={C.cool}>第一类 · 对加重结果持过失</LabelBlock></Enter>
        <Enter delay={24} style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6}}>
          <Chip style={{fontSize: 19, whiteSpace: 'normal'}}>故意伤害罪致人死亡（234）</Chip>
          <Chip style={{fontSize: 19, whiteSpace: 'normal'}}>非法拘禁致人重伤·死亡（238）</Chip>
          <Chip style={{fontSize: 19, whiteSpace: 'normal'}}>暴力干涉婚姻自由致死（257）</Chip>
          <Chip style={{fontSize: 19, whiteSpace: 'normal'}}>虐待致人死亡（260）</Chip>
          <Chip style={{fontSize: 19, whiteSpace: 'normal'}}>抢夺（过失）致人重伤死亡（司法解释）</Chip>
        </Enter>
      </div>

      <div data-final-knowledge="statute-intent-list" style={{position: 'absolute', left: 1180, top: 0, width: 596, height: 430, backgroundColor: C.white, border: `3px solid ${C.mercury}`, borderRadius: 10, padding: '14px 18px'}}>
        <Enter delay={18}><LabelBlock size={24} color={C.mercury}>第二类 · 过失·故意皆可</LabelBlock></Enter>
        <Enter delay={30} style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6}}>
          <Chip style={{fontSize: 19, whiteSpace: 'normal'}}>抢劫致人重伤·死亡（263）</Chip>
          <Chip style={{fontSize: 19, whiteSpace: 'normal'}}>强奸致人重伤·死亡（236）</Chip>
          <Chip style={{fontSize: 19, whiteSpace: 'normal'}}>拐卖妇女儿童致重伤死亡（240）</Chip>
          <Chip style={{fontSize: 19, whiteSpace: 'normal'}}>放火致人重伤死亡（115）</Chip>
        </Enter>
      </div>

      <div data-final-knowledge="statute-trap-floor" style={{position: 'absolute', left: 590, right: 0, top: 454, bottom: 0, backgroundColor: C.mercurySoft, border: `3px dashed ${C.mercury}`, borderRadius: 10, display: 'flex', alignItems: 'center', gap: 14, padding: '0 22px'}}>
        <Enter delay={96}><Neg size={23}>陷阱：侮辱罪·诽谤罪·遗弃罪·强制猥亵罪均无「致人死亡加重」条文 → 不存在结果加重犯</Neg></Enter>
      </div>
    </div>
  </Shell>
);

export const CausationSourceDialScene = () => (
  <Shell code="03" title="因果·因的辨认">
    <div data-layout="purpose-concurrence-source-row" data-visual-anchor="typographic-sequence" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="purpose-act-identity,intervener-two-step" data-focal-rule="the-upgraded-result-must-flow-from-the-base-crime-s-own-conduct" data-focal-channels="icon,contrast,enclosure,connector" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 92, display: 'flex', alignItems: 'center', gap: 14}}>
        <Enter delay={6}><LabelBlock size={26} color={C.brass}>辨认原则 · 行为与目的同时存在</LabelBlock></Enter>
        <Enter delay={16} style={{fontSize: 22, fontWeight: 800, color: C.inkSoft}}><ArrowLeftRight size={22} color={C.brass} style={{flexShrink: 0, verticalAlign: '-4px'}} /> 带基本犯目的的暴力＝基本犯的实行行为；带其他目的＝其他罪的实行行为</Enter>
      </div>

      <div style={{position: 'absolute', left: 0, top: 104, width: 1050, display: 'flex', flexDirection: 'column', gap: 12}}>
        <div data-final-knowledge="case-subdue-row"><Enter delay={26} style={{display: 'flex', gap: 12, alignItems: 'center', border: `3px solid ${C.cool}`, borderRadius: 8, padding: '8px 14px', backgroundColor: C.white}}><Chip tone="cool" style={{fontSize: 19}}>制服反抗打重伤→奸淫</Chip><span style={{fontSize: 20, fontWeight: 800}}><Gauge tone="brass">强奸罪·致人重伤（加重）</Gauge></span></Enter></div>
        <div data-final-knowledge="case-anger-row"><Enter delay={40} style={{display: 'flex', gap: 12, alignItems: 'center', border: `3px solid ${C.mercury}`, borderRadius: 8, padding: '8px 14px', backgroundColor: C.white}}><Chip tone="mercury" style={{fontSize: 19}}>强奸后泄愤打重伤</Chip><span style={{fontSize: 20, fontWeight: 800}}>强奸罪＋故意伤害罪 · <ThinU>数罪并罚</ThinU></span></Enter></div>
        <div data-final-knowledge="case-bite-row"><Enter delay={54} style={{display: 'flex', gap: 12, alignItems: 'center', border: `3px solid ${C.mercury}`, borderRadius: 8, padding: '8px 14px', backgroundColor: C.white}}><Chip tone="mercury" style={{fontSize: 19}}>被咬断舌头·愤怒掐死（2007·12）</Chip><span style={{fontSize: 20, fontWeight: 800}}>强奸未遂＋故意杀人既遂 · 并罚</span></Enter></div>
        <div data-final-knowledge="case-escape-row"><Enter delay={68} style={{display: 'flex', gap: 12, alignItems: 'center', border: `3px solid ${C.mercury}`, borderRadius: 8, padding: '8px 14px', backgroundColor: C.white}}><Chip tone="mercury" style={{fontSize: 19}}>被制服·逃跑捅伤乙（2023）</Chip><span style={{fontSize: 20, fontWeight: 800}}>强奸未遂＋故意伤害既遂 · 并罚</span></Enter></div>
        <div data-final-knowledge="case-corpse-note"><Enter delay={82}><Neg size={21}>奸尸目的杀人：对象必须是活着的妇女 → 不是强奸罪的实行行为</Neg></Enter></div>
      </div>

      <div data-final-knowledge="intervener-board" style={{position: 'absolute', left: 1074, top: 104, width: 702, height: 640, backgroundColor: C.white, border: `4px solid ${C.brass}`, borderRadius: 10, padding: '14px 20px'}}>
        <Enter delay={20}><LabelBlock size={25} color={C.brass}>介入因素 · 两步走标准</LabelBlock></Enter>
        <div style={{marginTop: 14, border: `3px solid ${C.ink}`, borderRadius: 8, padding: '10px 14px'}}>
          <Enter delay={34} style={{fontSize: 21, fontWeight: 900}}>甲重伤乙后送医·途中丙违章车祸致乙死</Enter>
          <Enter delay={46} style={{marginTop: 8}}><Neg size={21}>伤害行为与死亡无因果关系</Neg></Enter>
          <Enter delay={58} style={{marginTop: 8}}><Gauge delay={58} tone="cool">甲仅构成故意伤害罪既遂</Gauge></Enter>
        </div>
        <div data-final-knowledge="intervener-floor" style={{marginTop: 16}}>
          <Enter delay={72} style={{fontSize: 20, fontWeight: 700, color: C.inkSoft}}>热源追溯：加重结果必须从基本犯的实行行为流出——换了热源，就换罪名（详见第07讲）</Enter>
        </div>
      </div>
    </div>
  </Shell>
);
