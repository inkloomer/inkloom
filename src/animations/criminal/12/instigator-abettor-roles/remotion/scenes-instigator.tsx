import type {ReactNode} from 'react';
import {Ban, Brain, GitBranch, GraduationCap, Hourglass, Megaphone, Route, ShieldAlert, Siren, TrendingUp, Coins} from 'lucide-react';
import {C, Chip, Enter, IconChip, LabelBlock, Mark, Neg, Panel, Shell, SoftHi, ThinU} from './kit';

const Totem = ({children}: {children: ReactNode}) => <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{children}</span>;

export const InstigatorEssenceScene = () => (
  <Shell code="01" title="教唆犯·核心属性与要件">
    <div data-layout="instigator-causation-lane" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="cause-two-stage-lane,subjective-intent-gate" data-focal-rule="instigator-means-intentional-causation-of-unlawful-facts" data-focal-channels="icon,connector,contrast,enclosure" style={{position: 'absolute', inset: 0}}>
      {/* data-final-knowledge="essence-board" */}
      <Panel watermark={<Megaphone size={190} color={C.ember} strokeWidth={1.5} />} style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 118, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 18}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Megaphone size={26} color={C.ember} />
          <LabelBlock size={24} color={C.ember}>教唆犯 · 核心属性</LabelBlock>
        </Enter>
        <Enter delay={14} style={{fontSize: 21, fontWeight: 900}}>故意<Mark>引起</Mark>他人制造<Mark color={C.pine}>违法事实</Mark>——关键词＝<SoftHi style={{fontSize: 20}}>引起</SoftHi></Enter>
      </Panel>

      {/* data-final-knowledge="two-stage-lane" */}
      <Panel tone={C.pine} watermark={<GitBranch size={170} color={C.pine} strokeWidth={1.5} />} style={{position: 'absolute', left: 0, top: 134, width: 876, height: 266, padding: '12px 18px'}}>
        <Enter delay={24}><LabelBlock size={22} color={C.pine}>客观要件 · 两个层次</LabelBlock></Enter>
        <div style={{marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={36} style={{fontSize: 19, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 8}}><Chip tone="pine" style={{fontSize: 17}}>成立条件</Chip>促进正犯制造<ThinU color={C.pine}>违法行为</ThinU></Enter>
          <Enter delay={48} style={{fontSize: 19, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 8}}><Chip tone="ember" style={{fontSize: 17}}>既遂条件</Chip>促进正犯制造<ThinU color={C.ember}>违法结果</ThinU></Enter>
          <Enter delay={60} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft, display: 'inline-flex', alignItems: 'center', gap: 8}}><GitBranch size={18} color={C.pine} />判断重点＝有无<SoftHi style={{fontSize: 17}}>引起与被引起</SoftHi>的关系（因果性）</Enter>
        </div>
      </Panel>

      {/* data-final-knowledge="subjective-board" */}
      <Panel tone={C.dusk} watermark={<Brain size={170} color={C.dusk} strokeWidth={1.5} />} style={{position: 'absolute', left: 900, top: 134, width: 876, height: 266, padding: '12px 18px'}}>
        <Enter delay={30} style={{display: 'flex', alignItems: 'center', gap: 8}}>
          <Brain size={22} color={C.dusk} />
          <LabelBlock size={22} color={C.dusk}>主观要件 · 必须教唆故意</LabelBlock>
        </Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={42} style={{fontSize: 18, fontWeight: 700}}><Neg size={18}>过失引起 → 不构成教唆犯</Neg>（言谈间无意激起杀意，不值得处罚）</Enter>
          <Enter delay={54} style={{fontSize: 18, fontWeight: 800}}>教唆犯只能是<Mark color={C.dusk}>故意犯</Mark>，绝不能是过失犯</Enter>
          <Enter delay={66} style={{fontSize: 17, fontWeight: 700, color: C.inkSoft, display: 'inline-flex', alignItems: 'center', gap: 6}}><GraduationCap size={17} color={C.dusk} />女友回家案：执意要醉驾男友开车撞死人 → 女友＝交通肇事罪，<Neg size={16}>不能称交通肇事罪的教唆犯</Neg>（该罪是过失犯罪）</Enter>
        </div>
      </Panel>

      <Panel tone={C.alert} style={{position: 'absolute', left: 0, top: 416, width: 1776, height: 328, padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 10}}>
        <Enter delay={78} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Ban size={22} color={C.alert} />
          <LabelBlock size={22} color={C.alert}>故意教唆实施不能犯 · 不构成教唆犯（未遂的教唆）</LabelBlock>
        </Enter>
        <div style={{display: 'flex', gap: 16, flex: 1}}>
          <div data-final-knowledge="attempt-fork-board" style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 8}}>
            <IconChip icon={<Ban size={26} color={C.paper} strokeWidth={2.2} />} tone={C.alert} title="教唆者给空枪：">
              乙不知是空枪而开枪，无实际危险 → 乙无罪；甲依<ThinU color={C.alert}>共犯从属性</ThinU> → 甲也无罪
            </IconChip>
            <IconChip icon={<Hourglass size={26} color={C.paper} strokeWidth={2.2} />} tone={C.dusk} title="教唆者给真枪（子弹卡壳）：">
              乙开枪有实质危险 → 故意杀人罪<Chip tone="dusk" style={{fontSize: 15}}>未遂</Chip>；甲＝教唆犯未遂（又称未遂的教唆犯）
            </IconChip>
          </div>
        </div>
      </Panel>
    </div>
  </Shell>
);

export const InstigationTargetMatrixScene = () => (
  <Shell code="02" title="教唆犯成立条件·六情形对照">
    <div data-layout="target-intent-six-row-grid" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,external-negation,stamp" data-visual-grammar="preexisting-intent-rows,quality-quantity-fork" data-focal-rule="preexisting-intent-decides-instigation-establishment" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Panel watermark={<Megaphone size={190} color={C.ember} strokeWidth={1.5} />} style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 744, padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 9}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Megaphone size={24} color={C.ember} />
          <LabelBlock size={22} color={C.ember}>他人已有犯意时再教唆 · 六情形定性</LabelBlock>
        </Enter>
        <div data-final-knowledge="row-same-intent"><Enter delay={12}><IconChip icon={<Ban size={26} color={C.paper} strokeWidth={2.2} />} tone={C.alert} title="① 已有同罪意图："><Neg size={18}>不构成教唆犯</Neg>——无引起与被引起关系（2013·55：乙早有杀意，甲教唆无效）</IconChip></Enter></div>
        <div data-final-knowledge="row-light-to-heavy"><Enter delay={22}><IconChip icon={<TrendingUp size={26} color={C.paper} strokeWidth={2.2} />} tone={C.ember} title="② 已有轻罪意图，教唆重罪：">构成<Mark color={C.ember}>重罪</Mark>的教唆犯</IconChip></Enter></div>
        <div data-final-knowledge="row-circumstance-aggravated"><Enter delay={32}><IconChip icon={<Siren size={26} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="③ 已有基本犯意图，教唆情节加重犯（质变）：">构成情节加重犯的教唆犯——教唆者与实行者均适用<ThinU color={C.pine}>加重法定刑</ThinU></IconChip></Enter></div>
        <div data-final-knowledge="row-amount-aggravated"><Enter delay={42}><IconChip icon={<Coins size={26} color={C.paper} strokeWidth={2.2} />} tone={C.dusk} title="④ 已有基本犯意图，教唆数额加重犯（量变）：">构成数额加重犯的<Chip tone="dusk" style={{fontSize: 15}}>帮助犯</Chip>（心理性）——仅提高犯罪数额，未教唆新行为</IconChip></Enter></div>
        <div data-final-knowledge="row-homogeneous-lighter"><Enter delay={52}><IconChip icon={<ShieldAlert size={26} color={C.paper} strokeWidth={2.2} />} tone={C.alert} title="⑤ 已有重罪意图，教唆同质轻罪："><Neg size={18}>不构成犯罪</Neg>（也不构成帮助犯）——客观上降低了法益危险</IconChip></Enter></div>
        <div data-final-knowledge="row-heterogeneous-lighter"><Enter delay={62}><IconChip icon={<Route size={26} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="⑥ 已有重罪意图，教唆异质轻罪：">构成该<Mark color={C.pine}>轻罪</Mark>的教唆犯</IconChip></Enter></div>
        <Enter delay={76} style={{marginTop: 2, fontSize: 18, fontWeight: 800, color: C.inkSoft}}>分水岭＝是否<SoftHi style={{fontSize: 17}}>教唆出了新行为或新情节</SoftHi>：质变→教唆犯；量变→帮助犯；降险→无罪</Enter>
      </Panel>
    </div>
  </Shell>
);
