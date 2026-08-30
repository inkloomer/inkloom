import {Ban, CalendarClock, FileText, Gavel, GitFork, Hourglass, Lock, Play, Scale, Split, Stamp} from 'lucide-react';
import {CLAMP} from '../../../../shared/remotion-runtime';
import {C, Enter, IconChip, Panel, PanelTab, Seal, Shell, Soft, Under} from './ActivationScenes';

export const ConditionForkScene = () => {
  /* data-final-knowledge="condition-concept" data-final-knowledge="suspensive-resolutive-fork" data-final-knowledge="fabrication-rule" data-final-knowledge="peacock-case-verdicts" */
  return (
    <Shell code="03" kicker="附条件" title="附条件的民事法律行为">
      <div
        data-layout="twin-fork-formation-punish-wall"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="conditions-are-lawful-facts-yet-unhappened-and-uncertain,suspensive-conditions-start-effect-while-resolutive-end-it,malicious-prevention-counts-as-fulfilment-and-facilitation-as-failure,unlawful-facts-as-conditions-void-the-act"
        data-focal-rule="uncertain-lawful-facts-fork-the-effect-and-malice-flips-the-outcome"
        data-focal-channels="contrast,connector,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="condition-concept" style={{position: 'absolute', left: 40, top: 0, width: 1696, height: 190}}>
          <Panel tone={C.gilt} watermark={<GitFork size={130} color={C.gilt} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 20px'}}>
            <PanelTab tone={C.gilt} icon={<GitFork size={22} color={C.giltPale} strokeWidth={2.2} />}>条件的概念</PanelTab>
            <IconChip icon={<GitFork size={26} color={C.moon} strokeWidth={2.2} />} tone={C.teal} title="条件：">
              现在<Soft color={C.teal}>尚未发生</Soft>、且未来<Soft color={C.teal}>未必会发生</Soft>的<Under color={C.teal} delay={60}>合法事实</Under>
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.moon} strokeWidth={2.2} />} tone={C.wine} title="违法条件的后果：">
              约定以<Soft color={C.wine}>违法事实</Soft>的发生作为条件 → 民事法律行为<Seal delay={110} size={18}>无效</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={36} from="left" marker="suspensive-resolutive-fork" style={{position: 'absolute', left: 40, top: 206, width: 832, height: 254}}>
          <Panel tone={C.teal} watermark={<Split size={150} color={C.teal} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.teal} icon={<Split size={24} color={C.giltPale} strokeWidth={2.2} />}>条件的分类</PanelTab>
            <IconChip icon={<Play size={26} color={C.moon} strokeWidth={2.2} />} tone={C.teal} title="延缓条件（停止·生效条件）：">
              「若出国，房出租给你」——成立时<Soft color={C.teal}>未生效</Soft>，成就时<Seal delay={120} size={17} tone={C.teal}>生效</Seal>
            </IconChip>
            <IconChip icon={<Hourglass size={26} color={C.moon} strokeWidth={2.2} />} tone={C.wine} title="解除条件（终止·失效条件）：">
              「若回国，出租房返还」——成立时<Soft color={C.moon ? C.ink : C.ink}>生效</Soft>，成就时<Seal delay={150} size={17}>效力终止</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={60} from="right" marker="fabrication-rule" style={{position: 'absolute', left: 904, top: 206, width: 832, height: 254}}>
          <Panel tone={C.rust} watermark={<Scale size={150} color={C.rust} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.rust} icon={<Scale size={24} color={C.giltPale} strokeWidth={2.2} />}>成就拟制 · 民法典第 159 条</PanelTab>
            <IconChip icon={<Ban size={26} color={C.moon} strokeWidth={2.2} />} tone={C.rust} title="恶意阻止（成就对自己不利）：">
              不正当阻止条件成就 → 视为条件<Seal delay={120} size={17} tone={C.rust}>已经成就</Seal>
            </IconChip>
            <IconChip icon={<Stamp size={26} color={C.moon} strokeWidth={2.2} />} tone={C.wine} title="恶意促成（成就对自己有利）：">
              不正当促成条件成就 → 视为条件<Seal delay={150} size={17}>不成就</Seal>
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 900, color: C.inkSoft}}>口诀：<Under color={C.rust} delay={180}>惩罚恶意，反向拟制</Under>——你怕什么偏来什么</div>
          </Panel>
        </Enter>
        <Enter delay={110} from="up" marker="peacock-case-verdicts" style={{position: 'absolute', left: 40, top: 476, width: 1696, height: 292}}>
          <Panel tone={C.indigo} watermark={<Gavel size={160} color={C.indigo} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 20px'}}>
            <PanelTab tone={C.indigo} icon={<Gavel size={22} color={C.giltPale} strokeWidth={2.2} />}>案例辨析 · 考上北大送跑车 ＋ 喜鹊买房</PanelTab>
            <IconChip icon={<Ban size={24} color={C.moon} strokeWidth={2.2} />} tone={C.rust} title="跑车案（甲锁乙致缺考 ‖ 乙黑客改成绩）：">
              甲不正当<Soft color={C.rust}>阻止</Soft>→视为<Seal delay={160} size={16} tone={C.rust}>已考上·须送车</Seal> · 乙不正当<Soft color={C.wine}>促成</Soft>→视为<Seal delay={190} size={16}>未考上·可不送车</Seal>
            </IconChip>
            <IconChip icon={<GitFork size={24} color={C.moon} strokeWidth={2.2} />} tone={C.teal} title="喜鹊案①（7 点喜鹊飞来就买）：">
              事实具<Soft color={C.teal}>不确定性</Soft>＋不违法＋发生则合同生效 → <Seal delay={220} size={17} tone={C.teal}>延缓条件 ✓</Seal>
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.moon} strokeWidth={2.2} />} tone={C.indigo} title="喜鹊案②（可否拟制喜鹊飞来？）：">
              赶走喜鹊的是甲不知情的儿子——乙并未作用于条件 → <Seal delay={250} size={17} tone={C.indigo}>不可拟制 ✗</Seal>
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const TermGateScene = () => {
  /* data-final-knowledge="term-concept" data-final-knowledge="initial-terminal-fork" data-final-knowledge="whole-vs-single-binding" data-final-knowledge="due-date-verdicts" */
  return (
    <Shell code="04" kicker="附期限" title="附期限的民事法律行为">
      <div
        data-layout="dual-term-gate-with-boundary-lane"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="terms-are-facts-certain-to-arrive-unlike-uncertain-conditions,initial-terms-open-effect-while-terminal-terms-close-it,initial-terms-bind-the-whole-act-and-due-terms-bind-single-duties,a-due-date-presumes-the-act-already-effective"
        data-focal-rule="certainty-makes-a-term-and-what-it-binds-splits-initial-from-due"
        data-focal-channels="contrast,connector,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="term-concept" style={{position: 'absolute', left: 40, top: 0, width: 1696, height: 190}}>
          <Panel tone={C.gilt} watermark={<CalendarClock size={130} color={C.gilt} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 20px'}}>
            <PanelTab tone={C.gilt} icon={<CalendarClock size={22} color={C.giltPale} strokeWidth={2.2} />}>期限的概念 · 与条件的区别</PanelTab>
            <IconChip icon={<CalendarClock size={26} color={C.moon} strokeWidth={2.2} />} tone={C.teal} title="期限：">
              现在<Soft color={C.teal}>尚未发生</Soft>、但未来<Soft color={C.teal}>必然会发生</Soft>的事实
            </IconChip>
            <IconChip icon={<Split size={26} color={C.moon} strokeWidth={2.2} />} tone={C.rust} title="核心区别：">
              期限没有<Soft color={C.teal}>不确定性</Soft>（必定发生）· 条件具有<Soft color={C.rust}>不确定性</Soft>——有不确定性一律是<Under color={C.rust} delay={110}>条件</Under>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={36} from="left" marker="initial-terminal-fork" style={{position: 'absolute', left: 40, top: 206, width: 832, height: 254}}>
          <Panel tone={C.teal} watermark={<Play size={150} color={C.teal} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.teal} icon={<Play size={24} color={C.giltPale} strokeWidth={2.2} />}>期限的分类</PanelTab>
            <IconChip icon={<Play size={26} color={C.moon} strokeWidth={2.2} />} tone={C.teal} title="始期（开始期限）：">
              「明年 8 月 1 日，房出租给你」——届满时<Seal delay={120} size={17} tone={C.teal}>生效</Seal>（成立时未生效）
            </IconChip>
            <IconChip icon={<Hourglass size={26} color={C.moon} strokeWidth={2.2} />} tone={C.wine} title="终期（结束期限）：">
              「明年 8 月 1 日，出租房返还」——届满时<Seal delay={150} size={17}>效力终止</Seal>（成立时生效）
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 19.5, fontWeight: 900, color: C.inkSoft}}>统称：效力条件 · 效力期限——直连生效与失效</div>
          </Panel>
        </Enter>
        <Enter delay={60} from="right" marker="whole-vs-single-binding" style={{position: 'absolute', left: 904, top: 206, width: 832, height: 254}}>
          <Panel tone={C.indigo} watermark={<Lock size={150} color={C.indigo} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.indigo} icon={<Lock size={24} color={C.giltPale} strokeWidth={2.2} />}>始期 vs 履行期限</PanelTab>
            <IconChip icon={<Lock size={26} color={C.moon} strokeWidth={2.2} />} tone={C.indigo} title="始期：">
              约束行为<Soft color={C.indigo}>效力</Soft>——<Under color={C.indigo} delay={90}>整体约束力</Under>（未届满 → 行为整体未生效）
            </IconChip>
            <IconChip icon={<CalendarClock size={26} color={C.moon} strokeWidth={2.2} />} tone={C.moss} title="履行期限：">
              约束<Soft color={C.indigo}>特定义务的履行</Soft>——<Under color={C.indigo} delay={130}>个别约束力</Under>（未届满 → 某一义务无需履行）
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 19.5, fontWeight: 900, color: C.inkSoft}}>履行期限的约束力，以行为<Soft color={C.indigo}>生效</Soft>为前提</div>
          </Panel>
        </Enter>
        <Enter delay={110} from="up" marker="due-date-verdicts" style={{position: 'absolute', left: 40, top: 476, width: 1696, height: 292}}>
          <Panel tone={C.wine} watermark={<Gavel size={160} color={C.wine} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 20px'}}>
            <PanelTab tone={C.wine} icon={<Gavel size={22} color={C.giltPale} strokeWidth={2.2} />}>案例辨析</PanelTab>
            <IconChip icon={<Split size={24} color={C.moon} strokeWidth={2.2} />} tone={C.rust} title="喜鹊案回顾：">
              有<Soft color={C.rust}>不确定性</Soft> → 是<Seal delay={160} size={17} tone={C.rust}>条件</Seal>，不是期限
            </IconChip>
            <IconChip icon={<FileText size={24} color={C.moon} strokeWidth={2.2} />} tone={C.teal} title="房屋案（8 月 10 日订约·8 月 20 日过户·9 月 20 日付款）：">
              过户义务已履行 → 合同<Soft color={C.teal}>已经生效</Soft> → 9 月 20 日＝<Seal delay={200} size={17} tone={C.teal}>履行期限 ✓</Seal>（非始期）
            </IconChip>
            <IconChip icon={<Scale size={24} color={C.moon} strokeWidth={2.2} />} tone={C.indigo} title="判断口诀：">
              期限届满 → 行为<Soft color={C.indigo}>生效</Soft>＝始期 · 期限届满 → <Soft color={C.indigo}>特定义务履行</Soft>＝履行期限
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
