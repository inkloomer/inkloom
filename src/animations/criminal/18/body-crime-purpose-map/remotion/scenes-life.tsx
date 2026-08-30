import {Ban, Gavel, GraduationCap, HeartPulse, Scale, Skull, Users} from 'lucide-react';
import {C, Enter, IconChip, Mark, Neg, Panel, Shell, SoftHi, TabChip, ThinU} from './kit';

export const LifeBodyWardScene = () => {
  /* data-final-knowledge="euthanasia-panel" data-final-knowledge="suicide-table" data-final-knowledge="hurt-elements" data-final-knowledge="three-crime-split" data-final-knowledge="crime-number-floor" */
  return (
    <Shell code="01" kicker="第一节 · 侵犯生命、身体的犯罪" title="故意杀人罪与故意伤害罪">
      <div
        data-layout="life-body-triple-ward"
        data-visual-anchor="main center"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="euthanasia-panel,suicide-table,hurt-elements"
        data-focal-rule="life-consent-is-void-and-harm-requires-light-injury-intent-and-possibility"
        data-focal-channels="panel-headings,table-verdicts"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="euthanasia-panel" style={{position: 'absolute', left: 0, top: 0, width: 566, height: 380}}>
          <Panel tone={C.pulse} watermark={<Skull size={160} color={C.pulse} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <TabChip tone={C.pulse} icon={<Skull size={24} color={C.white} strokeWidth={2.2} />}>安乐死案（2014·15）</TabChip>
            <IconChip icon={<Ban size={28} color={C.white} strokeWidth={2.2} />} tone={C.pulse} title="承诺放弃生命＝无效：">
              绝症患者请医生注射毒针 → 甲与医生构成故意杀人罪
            </IconChip>
            <IconChip icon={<Gavel size={28} color={C.white} strokeWidth={2.2} />} tone={C.ward} title="法条：">
              第232条 故意杀人的，处死刑·无期·十年以上
            </IconChip>
            <IconChip icon={<Gavel size={28} color={C.white} strokeWidth={2.2} />} tone={C.amber} title="承诺让甲杀乙·重伤乙：">
              承诺无效 → 甲构成故意杀人罪·故意伤害罪的<Mark color={C.amber}>实行犯</Mark>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={18} marker="suicide-table" style={{position: 'absolute', left: 590, top: 0, width: 1186, height: 380}}>
          <Panel tone={C.chart2} watermark={<Users size={170} color={C.chart2} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <TabChip tone={C.chart2} icon={<Users size={24} color={C.white} strokeWidth={2.2} />}>自杀 · 自伤问题总结</TabChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.pulse} title="欺骗·强迫他人自杀（有支配力）：">
              故意杀人罪的<Mark color={C.pulse}>间接正犯</Mark>（相约自杀为名诱骗·教唆幼儿）
            </IconChip>
            <IconChip icon={<Users size={26} color={C.white} strokeWidth={2.2} />} tone={C.chart2} title="教唆·帮助他人自杀（无支配力）：">
              观点一无罪（共犯从属性）· 观点二多数说有罪（生命绝对保护）
            </IconChip>
            <IconChip icon={<HeartPulse size={26} color={C.white} strokeWidth={2.2} />} tone={C.ward} title="教唆·帮助他人自伤（无支配力）：">
              无罪（共犯从属性）——但构成保险诈骗罪教唆犯的按其罪
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={30} marker="hurt-elements" style={{position: 'absolute', left: 0, top: 404, width: 876, height: 340}}>
          <Panel tone={C.ward} watermark={<HeartPulse size={170} color={C.ward} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 20px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <TabChip tone={C.ward} icon={<HeartPulse size={24} color={C.white} strokeWidth={2.2} />}>故意伤害罪 · 成立条件</TabChip>
            <IconChip icon={<Users size={26} color={C.white} strokeWidth={2.2} />} tone={C.ward} title="行为主体：">
              轻伤→已满16周岁 · 重伤死亡→已满12周岁
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.pulse} title="自伤不构成本罪：">
              战时自伤＝战时自伤罪；毁坏假肢假牙→故意毁坏财物罪
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.amber} title="伤害结果分级：">
              轻微伤→治安处罚 · 轻伤→刑法 · 重伤＝肢体残疾·丧失器官机能
            </IconChip>
            <IconChip icon={<Gavel size={26} color={C.white} strokeWidth={2.2} />} tone={C.pulse} title="成立条件（双要件）：">
              主观有造成<Mark color={C.ward}>轻伤</Mark>的意图＋客观有造成轻伤的一般可能性
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={42} marker="three-crime-split" style={{position: 'absolute', left: 900, top: 404, width: 876, height: 340}}>
          <Panel tone={C.amber} watermark={<Scale size={170} color={C.amber} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 20px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <TabChip tone={C.amber} icon={<Scale size={24} color={C.white} strokeWidth={2.2} />}>三罪区分 · 罪数</TabChip>
            <IconChip icon={<Skull size={26} color={C.white} strokeWidth={2.2} />} tone={C.pulse} title="杀人 vs 伤害致死：">
              对死亡结果是<Mark color={C.pulse}>故意</Mark>还是<Mark color={C.ward}>过失</Mark>——看打击部位·凶器·是否有节制
            </IconChip>
            <IconChip icon={<Zap size={26} color={C.white} strokeWidth={2.2} />} tone={C.amber} title="不计后果不顾死伤：">
              概括故意 → 按实际结果定（死亡＝杀人 · 伤害＝伤害）
            </IconChip>
            <IconChip icon={<ThinUWrap />} tone={C.chart2} title="罪数与常见错误：">
              杀人⊃伤害＝法条竞合 · 航空安全等罪＋重伤＝想象竞合择一重 · 推搡倒地心脏病死＝过失致人死亡（不能由结果反推行为）
            </IconChip>

          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

const ThinUWrap = () => <Scale size={26} color={C.white} strokeWidth={2.2} />;
