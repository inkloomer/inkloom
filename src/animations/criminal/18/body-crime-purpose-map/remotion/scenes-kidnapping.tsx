import {Ban, Castle, Compass, Gavel, KeyRound, Scale, Users} from 'lucide-react';
import {C, Enter, IconChip, Neg, Panel, Shell, TabChip} from './kit';

export const KidnappingPurposeWardScene = () => {
  /* data-final-knowledge="purpose-panel" data-final-knowledge="hostage-panel" data-final-knowledge="debt-panel" data-final-knowledge="combine-panel" */
  return (
    <Shell code="04" kicker="第三节 · 绑架罪" title="绑架罪：目的二·人质·结合犯">
      <div
        data-layout="kidnapping-purpose-quad-ward"
        data-visual-anchor="document-fork"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="purpose-panel,hostage-panel"
        data-focal-rule="kidnapping-needs-third-party-purpose-and-control-of-a-qualified-hostage"
        data-focal-channels="icon,contrast,enclosure,connector"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="purpose-panel" style={{position: 'absolute', left: 0, top: 0, width: 876, height: 356}}>
          <Panel tone={C.pulse} watermark={<KeyRound size={160} color={C.pulse} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.pulse} icon={<KeyRound size={24} color={C.white} strokeWidth={2.2} />}>目的二 · 向第三人提出不法要求</TabChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.pulse} title="既遂（多数说）：">
              单一行为犯——实际控制合格人质即既遂·不要求实施勒索
            </IconChip>
            <IconChip icon={<Compass size={26} color={C.white} strokeWidth={2.2} />} tone={C.chart2} title="合格人质：">
              行为时·一般人角度会使第三人担忧（只要求一般可能性·妻子不肯给钱仍既遂）
            </IconChip>
            <IconChip icon={<Castle size={26} color={C.white} strokeWidth={2.2} />} tone={C.amber} title="三罪区分（目的二）：">
              非法拘禁无目的二 · 拐卖＝出卖目的 · 抢劫＝向被绑人要钱
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={18} marker="hostage-panel" style={{position: 'absolute', left: 900, top: 0, width: 876, height: 356}}>
          <Panel tone={C.chart2} watermark={<Users size={160} color={C.chart2} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.chart2} icon={<Users size={24} color={C.white} strokeWidth={2.2} />}>未遂 · 错绑 · 索债</TabChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.pulse} title="未实际控制 / 控制非合格人质：">
              绑架未遂（×非法拘禁既遂想象竞合）；情报全错→仅非法拘禁
            </IconChip>
            <IconChip icon={<Gavel size={26} color={C.white} strokeWidth={2.2} />} tone={C.ward} title="第238条第3款索债＝注意规定：">
              拘禁债务人向其索债·拘禁债务人向共同财产亲属索债 → 非法拘禁罪
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.pulse} title="向共同财产之外的亲友索债 / 无事实根据的债务：">
              具有非法占有目的 → 绑架罪
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={30} marker="combine-panel" style={{position: 'absolute', left: 0, top: 380, width: 1776, height: 364}}>
          <Panel tone={C.amber} watermark={<Gavel size={170} color={C.amber} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <TabChip tone={C.amber} icon={<Gavel size={24} color={C.white} strokeWidth={2.2} />}>第239条第2款 · 结合犯与实行行为的分界（杀害·伤害时间＝着手到释放前）</TabChip>
            <div style={{display: 'flex', gap: 14}}>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 7}}>
                <Enter delay={44}><IconChip icon={<Gavel size={24} color={C.white} strokeWidth={2.2} />} tone={C.pulse} title="实行行为之外的暴力：">
                  杀人→绑架罪＋故意杀人罪＝绑架罪（加重·结合犯）；故意重伤同理
                </IconChip></Enter>
                <Enter delay={54}><IconChip icon={<Ban size={24} color={C.white} strokeWidth={2.2} />} tone={C.night} title="故意重伤·杀人（正常）：">
                  拘禁罪＋故意杀人罪——多数说并罚（人身自由与生命法益不同）
                </IconChip></Enter>
              </div>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 7}}>
                <Enter delay={64}><IconChip icon={<Castle size={24} color={C.white} strokeWidth={2.2} />} tone={C.amber} title="实行行为内故意重伤：">
                  结果加重犯「绑架罪（故意）致人重伤」——为制服反抗打成重伤
                </IconChip></Enter>
                <Enter delay={74}><IconChip icon={<Scale size={24} color={C.white} strokeWidth={2.2} />} tone={C.ward} title="实行行为内过失死亡：">
                  绑架×过失致人死亡想象竞合·择一重定绑架（绳子绑太紧·毛巾塞嘴窒息）
                </IconChip></Enter>
              </div>
            </div>
            <Enter delay={84} style={{marginTop: 4}}><Neg size={19}>释放后追上撞死 → 人质已恢复自由∉被绑架人 → 与绑架罪并罚（2020）</Neg></Enter>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
