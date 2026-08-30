import type {ReactNode} from 'react';
import {Ban, DoorOpen, Flag, HeartPulse, Hourglass, KeyRound, Wrench} from 'lucide-react';
import {C, Chip, Enter, IconChip, LabelBlock, Mark, Neg, Panel, Shell, SoftHi, Stamp, ThinU} from './kit';

const Totem = ({children}: {children: ReactNode}) => <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{children}</span>;

export const AbettorEssenceScene = () => (
  <Shell code="05" title="帮助犯·概念与成立两闸">
    <div data-layout="aid-eligibility-boundary" data-visual-anchor="boundary" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="boost-connect-two-gates,no-risk-rows" data-focal-rule="help-must-carry-risk-and-reach-the-perpetrator" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      {/* data-final-knowledge="concept-board" */}
      <Panel watermark={<Wrench size={190} color={C.ember} strokeWidth={1.5} />} style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 130, padding: '10px 20px', display: 'flex', flexDirection: 'column', gap: 6, justifyContent: 'center'}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <Wrench size={24} color={C.ember} />
          <LabelBlock size={23} color={C.ember}>帮助犯 ＝ 故意促进他人制造违法事实</LabelBlock>
          <span style={{fontSize: 20, fontWeight: 900}}>关键词＝<SoftHi style={{fontSize: 19}}>促进</SoftHi></span>
        </Enter>
        <Enter delay={14} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft}}>乙要杀人，甲提供凶器；乙持凶器杀人 → 乙＝直接实行犯，甲＝帮助犯</Enter>
      </Panel>

      <div data-final-knowledge="two-gates-board" style={{position: 'absolute', left: 0, top: 146, width: 1776, height: 150}}>
        <Panel tone={C.pine} style={{height: '100%', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 8, justifyContent: 'center'}}>
          <Enter delay={26}><LabelBlock size={22} color={C.pine}>成立条件 · 两道闸缺一不可</LabelBlock></Enter>
          <div style={{display: 'flex', gap: 14, flexWrap: 'wrap'}}>
            <Enter delay={38}><Chip tone="pine" style={{fontSize: 19}}>① 可能的促进作用＝本身有法益侵害的危险性·可能性</Chip></Enter>
            <Enter delay={48}><Chip tone="ember" style={{fontSize: 19}}>② 连接到（作用于）正犯的违法行为</Chip></Enter>
          </div>
        </Panel>
      </div>

      <div data-final-knowledge="no-risk-rows-board" style={{position: 'absolute', left: 0, top: 312, width: 1776, height: 208}}>
        <Panel tone={C.alert} style={{height: '100%', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 8, justifyContent: 'center'}}>
          <Enter delay={60} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <Ban size={22} color={C.alert} />
            <LabelBlock size={21} color={C.alert}>无促进作用 → 不构成帮助犯</LabelBlock>
          </Enter>
          <IconChip icon={<HeartPulse size={26} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="保姆照料案：">
            甲绑架丙让保姆照料丙 → 照料有益于丙，<Neg size={17}>无危险性</Neg> → 不构成绑架罪帮助犯
          </IconChip>
          <IconChip icon={<KeyRound size={26} color={C.paper} strokeWidth={2.2} />} tone={C.alert} title="模型1 无效钥匙案：">
            提供根本无法用的钥匙 → 不具法益侵害危险性 → <Neg size={17}>不构成帮助犯</Neg>
          </IconChip>
        </Panel>
      </div>

      <div data-final-knowledge="unlinked-model-board" style={{position: 'absolute', left: 0, top: 536, bottom: 0, width: 1776}}>
        <Panel tone={C.dusk} style={{height: '100%', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 8, justifyContent: 'center'}}>
          <Enter delay={92} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <DoorOpen size={22} color={C.dusk} />
            <LabelBlock size={21} color={C.dusk}>模型2 未连接案（帮助未遂）</LabelBlock>
          </Enter>
          <Enter delay={104} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft}}>乙拿有用钥匙去甲家，路上被偷 / 错放信箱；甲未拿到，自己盗窃既遂</Enter>
          <Enter delay={116} style={{fontSize: 19, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <Stamp delay={120} tone="dusk">乙不构成帮助犯</Stamp>
            <span style={{fontSize: 17, fontWeight: 700, color: C.inkSoft}}>帮助行为因<ThinU color={C.dusk}>意志以外</ThinU>原因未连接到正犯行为的危险流</span>
          </Enter>
        </Panel>
      </div>
    </div>
  </Shell>
);

export const AbettorCompletionModelsScene = () => (
  <Shell code="06" title="帮助犯既遂·五模型阶梯">
    <div data-layout="five-model-stage-ladder" data-visual-anchor="timeline-gate" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="contribution-stage-ladder,naming-pairs" data-focal-rule="abettor-completes-by-actual-contribution-to-the-result" data-focal-channels="icon,contrast,enclosure,locator" style={{position: 'absolute', inset: 0}}>
      {/* data-final-knowledge="completion-head-strip" */}
      <Panel watermark={<Flag size={190} color={C.ember} strokeWidth={1.5} />} style={{position: 'absolute', left: 0, top: 0, width: 1030, height: 744, padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 9}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
          <KeyRound size={24} color={C.ember} />
          <LabelBlock size={22} color={C.ember}>既遂核心＝帮助行为与正犯结果有<Mark>因果性</Mark>（发挥实际贡献）</LabelBlock>
        </Enter>
        <div data-final-knowledge="model-three-board" style={{display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={14}><IconChip icon={<Hourglass size={26} color={C.paper} strokeWidth={2.2} />} tone={C.dusk} title="模型3 维持至预备阶段：">钥匙被偷，甲用别的办法既遂 → 乙＝帮助犯·<Chip tone="dusk" style={{fontSize: 15}}>犯罪预备</Chip>（实务一般不定罪处罚）</IconChip></Enter>
          <Enter delay={24} style={{fontSize: 16, fontWeight: 700, color: C.inkSoft, paddingLeft: 8}}>练习：乙给了有用钥匙，甲到丙家见门开着直接走进去窃得 → 乙＝帮助犯·犯罪预备（帮助作用只维持到预备阶段）</Enter>
        </div>
        <div data-final-knowledge="model-four-board">
          <Enter delay={36}><IconChip icon={<DoorOpen size={26} color={C.paper} strokeWidth={2.2} />} tone={C.alert} title="模型4 维持至实行但无实际贡献：">提供钥匙案——甲操作不当打不开，情急破门窃得 → 乙＝帮助犯·<Chip tone="alert" style={{fontSize: 15}}>未遂</Chip></IconChip></Enter>
        </div>
        <div data-final-knowledge="model-five-board">
          <Enter delay={48}><IconChip icon={<Flag size={26} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="模型5 顺利使用：">甲用乙的钥匙打开门盗窃既遂 → 乙＝帮助犯·<Chip tone="pine" style={{fontSize: 15}}>既遂</Chip>（维持到着手且有实际贡献）</IconChip></Enter>
        </div>
        <Enter delay={62} style={{fontSize: 18, fontWeight: 800, color: C.inkSoft}}>阶梯读法：帮助作用维持到哪个阶段 × 有无<SoftHi style={{fontSize: 17}}>实际贡献</SoftHi> → 决定预备 / 未遂 / 既遂</Enter>
      </Panel>

      <div data-final-knowledge="naming-board" style={{position: 'absolute', left: 1054, top: 0, width: 722, height: 744}}>
        <Panel tone={C.dusk} style={{height: '100%', padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 9, justifyContent: 'center'}}>
          <Enter delay={74}><LabelBlock size={21} color={C.dusk}>称谓辨析 · 同一事实的不同叫法</LabelBlock></Enter>
          <IconChip icon={<Ban size={24} color={C.paper} strokeWidth={2.2} />} tone={C.alert} title="帮助不可能有用：">帮助者无罪——只称"<ThinU color={C.alert}>帮助未遂</ThinU>"，不能称帮助犯未遂</IconChip>
          <IconChip icon={<Hourglass size={24} color={C.paper} strokeWidth={2.2} />} tone={C.ember} title="帮助可能有用但未促既遂：">帮助犯·未遂——"<ThinU color={C.ember}>帮助犯未遂</ThinU>"＝"<ThinU color={C.ember}>未遂的帮助犯</ThinU>"</IconChip>
          <IconChip icon={<Ban size={24} color={C.paper} strokeWidth={2.2} />} tone={C.alert} title="教唆不可能有危险的行为：">教唆者无罪——"<ThinU color={C.alert}>未遂的教唆</ThinU>"，不能称未遂的教唆犯</IconChip>
          <IconChip icon={<Hourglass size={24} color={C.paper} strokeWidth={2.2} />} tone={C.dusk} title="教唆可能有危险且正犯未遂：">教唆犯·未遂——"<ThinU color={C.dusk}>教唆犯未遂</ThinU>"＝"<ThinU color={C.dusk}>未遂的教唆犯</ThinU>"</IconChip>
        </Panel>
      </div>
    </div>
  </Shell>
);
