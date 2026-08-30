import {Ban, Gavel, LockOpen, Scale, Zap} from 'lucide-react';
import {C, Enter, IconChip, Neg, Panel, Shell, TabChip} from './kit';

export const UnlawfulDetentionWardScene = () => {
  /* data-final-knowledge="detain-panel" data-final-knowledge="deceive-panel" data-final-knowledge="aggravate-panel" data-final-knowledge="fiction-panel" */
  return (
    <Shell code="03" kicker="第三节 · 非法拘禁罪" title="非法拘禁罪：欺骗·加重·拟制">
      <div
        data-layout="detention-quad-ward"
        data-visual-anchor="boundary"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="detain-panel,deceive-panel"
        data-focal-rule="deception-that-blocks-exit-constitutes-detention-and-second-paragraph-is-a-legal-fiction"
        data-focal-channels="icon,contrast,enclosure,connector"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="detain-panel" style={{position: 'absolute', left: 0, top: 0, width: 566, height: 356}}>
          <Panel tone={C.ward} watermark={<LockOpen size={160} color={C.ward} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.ward} icon={<LockOpen size={24} color={C.white} strokeWidth={2.2} />}>拘禁行为 · 剥夺人身自由</TabChip>
            <IconChip icon={<Zap size={26} color={C.white} strokeWidth={2.2} />} tone={C.pulse} title="报假案骗警察拘留：">
              间接正犯（并触犯诬告陷害罪）
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.chart2} title="高速行驶恐吓：">
              乘客基于恐惧无法下车
            </IconChip>
            <IconChip icon={<LockOpen size={26} color={C.white} strokeWidth={2.2} />} tone={C.amber} title="错关同学不开门：">
              不作为的非法拘禁罪
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={18} marker="deceive-panel" style={{position: 'absolute', left: 590, top: 0, width: 1186, height: 356}}>
          <Panel tone={C.chart2} watermark={<Scale size={170} color={C.chart2} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.chart2} icon={<Scale size={24} color={C.white} strokeWidth={2.2} />}>欺骗问题 · 两条结论</TabChip>
            <IconChip icon={<Zap size={26} color={C.white} strokeWidth={2.2} />} tone={C.pulse} title="结论一·构成：">
              欺骗导致被害人认为自己出不去（电梯假停电 · 故意不降落案）
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.ward} title="结论二·不构成：">
              被害人认为自己能出去·只是不想出去（假称体检 · 强奸预备中止的送回家）
            </IconChip>
            <Enter delay={40}><Neg size={19}>机长案：欺骗使乘客认为无法降落 → 构成非法拘禁罪</Neg></Enter>
          </Panel>
        </Enter>
        <Enter delay={30} marker="aggravate-panel" style={{position: 'absolute', left: 0, top: 380, width: 876, height: 364}}>
          <Panel tone={C.pulse} watermark={<Zap size={170} color={C.pulse} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 20px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <TabChip tone={C.pulse} icon={<Zap size={24} color={C.white} strokeWidth={2.2} />}>第2款第1句 · 结果加重犯（一个行为）</TabChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.pulse} title="因＝实行行为：">
              绳子勒太紧窒息死 → 非法拘禁罪致人死亡
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.chart2} title="介入两步走：">
              无力还债跳楼自杀（异常∉因果）· 逃跑坠亡（不异常∈因果）
            </IconChip>
            <IconChip icon={<Gavel size={26} color={C.white} strokeWidth={2.2} />} tone={C.amber} title="主观过失；故意重伤：">
              反扭胳膊致重伤＝拘禁实行行为×伤害 → 想象竞合定故意伤害
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={42} marker="fiction-panel" style={{position: 'absolute', left: 900, top: 380, width: 876, height: 364}}>
          <Panel tone={C.amber} watermark={<Ban size={170} color={C.amber} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 20px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <TabChip tone={C.amber} icon={<Ban size={24} color={C.white} strokeWidth={2.2} />}>第2款第2句 · 法律拟制（两个行为）</TabChip>
            <IconChip icon={<Zap size={26} color={C.white} strokeWidth={2.2} />} tone={C.amber} title="拟制公式：">
              非法拘禁罪＋过失致人死亡＝故意杀人罪（不再并罚）
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.night} title="因＝拘禁实行行为之外的暴力：">
              拘禁后扇耳光泄愤·碰巧打中太阳穴死 → 拟制为故意杀人罪
            </IconChip>
            <IconChip icon={<Gavel size={26} color={C.white} strokeWidth={2.2} />} tone={C.pulse} title="故意重伤杀人：">
              正常处理——拘禁罪＋故意杀人罪多数说并罚（2021·2022主观）
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
