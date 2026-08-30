import type {ReactNode} from 'react';
import {Baby, Ban, BookOpen, Crown, Flag, GraduationCap, Hourglass, Megaphone, ShieldAlert, Split, User, Users} from 'lucide-react';
import {C, Chip, Enter, IconChip, LabelBlock, Mark, Neg, Panel, Shell, SoftHi, Stamp, ThinU} from './kit';

const Totem = ({children}: {children: ReactNode}) => <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{children}</span>;

export const InstigatorCompletionCaseScene = () => (
  <Shell code="03" title="教唆犯既遂条件·杀老大爷案">
    <div data-layout="dual-object-case-fork" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="target-versus-accident-fork,concurrency-verdict" data-focal-rule="instigator-completes-only-when-causing-the-unlawful-result" data-focal-channels="icon,contrast,enclosure,connector" style={{position: 'absolute', inset: 0}}>
      {/* data-final-knowledge="case-head-strip" */}
      <Panel watermark={<Split size={180} color={C.ember} strokeWidth={1.5} />} style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 96, padding: '8px 20px', display: 'flex', alignItems: 'center', gap: 16}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <BookOpen size={24} color={C.ember} />
          <LabelBlock size={22} color={C.ember}>杀老大爷案 · 甲教唆乙杀丙</LabelBlock>
        </Enter>
        <Enter delay={14} style={{fontSize: 19, fontWeight: 700, color: C.inkSoft}}>乙鬼鬼祟祟被门卫老大爷纠缠，一气之下杀死老大爷逃离</Enter>
      </Panel>

      <div data-final-knowledge="principal-lens-board" style={{position: 'absolute', left: 0, top: 112, width: 876, height: 300}}>
        <Panel tone={C.pine} style={{height: '100%', padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={24}><LabelBlock size={22} color={C.pine}>先分析正犯 · 乙</LabelBlock></Enter>
          <IconChip icon={<Hourglass size={26} color={C.paper} strokeWidth={2.2} />} tone={C.dusk} title="对预定目标丙：">故意杀人罪（犯罪预备）</IconChip>
          <IconChip icon={<Flag size={26} color={C.paper} strokeWidth={2.2} />} tone={C.ember} title="对实害对象老大爷：">故意杀人罪（既遂）</IconChip>
          <Enter delay={58} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft, display: 'inline-flex', alignItems: 'center', gap: 6}}><Split size={17} color={C.pine} />一个行为触两罪＝<ThinU color={C.pine}>想象竞合</ThinU>，择一重定故意杀人罪既遂</Enter>
        </Panel>
      </div>

      <div data-final-knowledge="instigator-lens-board" style={{position: 'absolute', left: 900, top: 112, width: 876, height: 300}}>
        <Panel tone={C.ember} style={{height: '100%', padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={30}><LabelBlock size={22} color={C.ember}>后分析教唆犯 · 甲</LabelBlock></Enter>
          <IconChip icon={<Hourglass size={26} color={C.paper} strokeWidth={2.2} />} tone={C.dusk} title="对丙：">跟着正犯 → 故意杀人罪（犯罪预备）</IconChip>
          <IconChip icon={<Ban size={26} color={C.paper} strokeWidth={2.2} />} tone={C.alert} title="对老大爷：">乙自己节外生枝，与甲无关 → 甲<Neg size={17}>不用负责</Neg></IconChip>
          <Enter delay={64} style={{fontSize: 17, fontWeight: 700, color: C.inkSoft}}>教唆引起的是"杀丙"的违法行为，不是"杀老大爷"的结果</Enter>
        </Panel>
      </div>

      <div data-final-knowledge="conclusion-strip" style={{position: 'absolute', left: 0, top: 428, width: 1776, height: 128}}>
        <Panel tone={C.alert} style={{height: '100%', padding: '10px 20px', display: 'flex', flexDirection: 'column', gap: 8, justifyContent: 'center'}}>
          <Enter delay={76} style={{display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap'}}>
            <Stamp delay={80} tone="pine">甲成立教唆犯（引起违法行为）</Stamp>
            <Stamp delay={90}>甲不构成既遂（未引起违法结果）</Stamp>
            <Neg size={19}>"正犯既遂教唆犯一定既遂"的说法不准确</Neg>
          </Enter>
          <Enter delay={102} style={{fontSize: 18, fontWeight: 800}}>教唆犯既遂的核心条件＝教唆行为<SoftHi style={{fontSize: 17}}>引起正犯的违法结果</SoftHi></Enter>
        </Panel>
      </div>

      <div data-final-knowledge="milk-quiz-strip" style={{position: 'absolute', left: 0, top: 572, bottom: 0, width: 1776}}>
        <Panel tone={C.dusk} style={{height: '100%', padding: '10px 20px', display: 'flex', flexDirection: 'column', gap: 6, justifyContent: 'center'}}>
          <Enter delay={114} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <GraduationCap size={20} color={C.dusk} />
            <LabelBlock size={19} color={C.dusk}>2021真题 · 毒牛奶案（下列说法错误的是）</LabelBlock>
            <span style={{fontSize: 17, fontWeight: 700, color: C.inkSoft}}>乙唆使甲毒杀丙；丙把毒牛奶递给孩子丁，甲说"他喝过了"便走开，丁喝后死亡</span>
          </Enter>
          <Enter delay={126} style={{fontSize: 17, fontWeight: 700, display: 'flex', gap: 14, flexWrap: 'wrap'}}>
            <span>A 对 ✓ 甲对丙＝故意杀人罪<Chip tone="dusk" style={{fontSize: 14}}>未遂</Chip></span>
            <span>B 对 ✓ 甲对丁＝不作为故意杀人罪<Chip tone="ember" style={{fontSize: 14}}>既遂</Chip></span>
            <span>C 对 ✓ 乙对丙＝故意杀人罪未遂</span>
            <span><Neg size={17}>D 错误 ✓ 答案：乙对丁＝无罪</Neg>（丁之死由甲的不作为引起，乙的教唆未引起该违法结果）</span>
          </Enter>
        </Panel>
      </div>
    </div>
  </Shell>
);

export const InstigatorPunishmentScene = () => (
  <Shell code="04" title="教唆犯的处罚·第29条三款">
    <div data-layout="statute-three-clause-lane" data-visual-anchor="typographic-sequence" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="clause-sequence-lane,minor-age-escalation" data-focal-rule="instigator-sentenced-by-role-and-target-and-attempt" data-focal-channels="icon,contrast,enclosure,locator" style={{position: 'absolute', inset: 0}}>
      {/* data-final-knowledge="statute-head-strip" */}
      <Panel watermark={<Megaphone size={190} color={C.ember} strokeWidth={1.5} />} style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 258, padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 10}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
          <BookOpen size={24} color={C.ember} />
          <LabelBlock size={22} color={C.ember}>第29条第1款第1句</LabelBlock>
          <span style={{fontSize: 19, fontWeight: 800}}>"教唆他人犯罪的，应当按照他在共同犯罪中所起的<Mark>作用</Mark>处罚"</span>
        </Enter>
        <div data-final-knowledge="role-clause-board" style={{display: 'flex', flexDirection: 'column', gap: 8}}>
          <div style={{display: 'flex', gap: 10, flexWrap: 'wrap'}}>
            <Enter delay={16}><Chip tone="ember" style={{fontSize: 17}}><Crown size={16} color={C.paper} />主要作用 → 主犯</Chip></Enter>
            <Enter delay={24}><Chip tone="dusk" style={{fontSize: 17}}><User size={16} color={C.paper} />次要作用 → 从犯</Chip></Enter>
            <Enter delay={32}><Chip tone="pine" style={{fontSize: 17}}><ShieldAlert size={16} color={C.paper} />被要挟教唆 → 胁从犯也可能</Chip></Enter>
            <Enter delay={40}><Chip tone="paper" style={{fontSize: 17}}><Users size={16} color={C.dusk} />可多人教唆（甲乙共同教唆丙）</Chip></Enter>
          </div>
          <div style={{display: 'flex', gap: 10, flexWrap: 'wrap'}}>
            <Enter delay={52}><Chip tone="paper" style={{fontSize: 17}}><Megaphone size={16} color={C.ember} />对象必须特定 → 不特定＝<ThinU color={C.alert}>煽动</ThinU></Chip></Enter>
            <Enter delay={62}><Chip tone="paper" style={{fontSize: 17}}><Ban size={16} color={C.alert} />间接教唆（甲教乙去教唆丙）→ 仍构成教唆犯</Chip></Enter>
          </div>
        </div>
      </Panel>

      <div data-final-knowledge="minor-clause-board" style={{position: 'absolute', left: 0, top: 274, width: 1776, height: 234}}>
        <Panel tone={C.pine} style={{height: '100%', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={74} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <BookOpen size={22} color={C.pine} />
            <LabelBlock size={21} color={C.pine}>第29条第1款第2句 · 教唆不满十八周岁的人犯罪，应当从重处罚</LabelBlock>
          </Enter>
          <div style={{display: 'flex', gap: 10}}>
            <IconChip icon={<Baby size={24} color={C.paper} strokeWidth={2.2} />} tone={C.dusk} title="教唆17周岁者：">教唆犯 · <Chip tone="alert" style={{fontSize: 14}}>从重处罚</Chip></IconChip>
            <IconChip icon={<Baby size={24} color={C.paper} strokeWidth={2.2} />} tone={C.ember} title="教唆15周岁者（有独立作案能力）：">教唆犯（无支配力，不构成间接正犯）</IconChip>
            <IconChip icon={<Baby size={24} color={C.paper} strokeWidth={2.2} />} tone={C.alert} title="教唆8周岁者（无能力）：">教唆犯 ＋ 同时构成<Chip tone="alert" style={{fontSize: 14}}>间接正犯</Chip>（绝对支配）</IconChip>
          </div>
        </Panel>
      </div>

      <div data-final-knowledge="second-clause-board" style={{position: 'absolute', left: 0, top: 524, bottom: 0, width: 1776}}>
        <Panel tone={C.dusk} style={{height: '100%', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 8, justifyContent: 'center'}}>
          <Enter delay={104} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <BookOpen size={22} color={C.dusk} />
            <LabelBlock size={21} color={C.dusk}>第29条第2款 · 被教唆的人没有犯被教唆的罪，可以从轻或者减轻处罚</LabelBlock>
            <span style={{fontSize: 17, fontWeight: 700, color: C.inkSoft}}>适用＝被教唆者已<SoftHi style={{fontSize: 16}}>着手实行</SoftHi>但未遂/中止</span>
          </Enter>
          <Enter delay={116} style={{fontSize: 18, fontWeight: 700}}><Neg size={18}>不适用：被教唆者拒绝教唆，或数日后临时起意单独犯罪</Neg> → 教唆者根本不构成教唆犯，无未遂既遂可言</Enter>
        </Panel>
      </div>
    </div>
  </Shell>
);
