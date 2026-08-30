import {Ban, Castle, Compass, Gavel, KeyRound, Scale, Users} from 'lucide-react';
import {C, Enter, IconChip, Panel, Shell, TabChip} from './kit';

export const TrafficSellPurposeWardScene = () => {
  /* data-final-knowledge="four-acts-panel" data-final-knowledge="combine-panel2" data-final-knowledge="buy-panel" data-final-knowledge="summary-grid" */
  return (
    <Shell code="05" kicker="第三节 · 拐卖妇女、儿童罪" title="拐卖·收买·拐骗：目的定罪名">
      <div
        data-layout="traffic-sell-grid-ward"
        data-visual-anchor="comparison-axis"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="four-acts-panel,summary-grid"
        data-focal-rule="control-acts-take-their-name-from-the-purpose-held-at-the-time"
        data-focal-channels="icon,contrast,enclosure,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="four-acts-panel" style={{position: 'absolute', left: 0, top: 0, width: 1050, height: 356}}>
          <Panel tone={C.pulse} watermark={<Users size={170} color={C.pulse} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <TabChip tone={C.pulse} icon={<Users size={24} color={C.white} strokeWidth={2.2} />}>四实行行为（都带出卖目的）· 成立与既遂</TabChip>
            <IconChip icon={<Castle size={24} color={C.white} strokeWidth={2.2} />} tone={C.pulse} title="绑架（实力控制·含偷盗婴幼儿）：">
              开始即成立 · 绑到手＝既遂
            </IconChip>
            <IconChip icon={<Scale size={24} color={C.white} strokeWidth={2.2} />} tone={C.chart2} title="贩卖（前提：不存在绑架行为）：">
              开始即成立 · 卖出去＝既遂（捡弃婴后卖·收养后卖·收买后卖；2000元＝赠与∉）
            </IconChip>
            <IconChip icon={<KeyRound size={24} color={C.white} strokeWidth={2.2} />} tone={C.ward} title="收买（进货行为）：">
              开始即成立 · 买到手＝既遂
            </IconChip>
            <IconChip icon={<Compass size={24} color={C.white} strokeWidth={2.2} />} tone={C.amber} title="拐骗（欺骗·不含劫持）：">
              开始即成立 · 卖出去＝既遂（盲山案骗女大学生∈；10元车费∉出卖目的）
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={18} marker="combine-panel2" style={{position: 'absolute', left: 1074, top: 0, width: 702, height: 356}}>
          <Panel tone={C.amber} watermark={<Gavel size={160} color={C.amber} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <TabChip tone={C.amber} icon={<Gavel size={24} color={C.white} strokeWidth={2.2} />}>法定刑升格 · 罪数</TabChip>
            <IconChip icon={<Gavel size={24} color={C.white} strokeWidth={2.2} />} tone={C.pulse} title="结合犯：">
              拐卖＋强奸＝拐卖（加重）· ＋引诱强迫卖淫＝拐卖 · ＋组织运送偷越国边境＝拐卖
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.white} strokeWidth={2.2} />} tone={C.night} title="无结合犯的规定：">
              拐卖＋强制猥亵 → 数罪并罚
            </IconChip>
            <IconChip icon={<Scale size={24} color={C.white} strokeWidth={2.2} />} tone={C.ward} title="结果加重：">
              被害妇女儿童及其亲属重伤死亡——直接因果·泄愤报复致重伤单独定故意伤害并罚
            </IconChip>
            <IconChip icon={<Users size={24} color={C.white} strokeWidth={2.2} />} tone={C.brass} title="成年妇女同意：">
              放弃人身自由法益 → 行为人不构成拐卖妇女罪（多数说）
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={30} marker="buy-panel" style={{position: 'absolute', left: 0, top: 380, width: 876, height: 364}}>
          <Panel tone={C.chart2} watermark={<KeyRound size={160} color={C.chart2} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 20px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <TabChip tone={C.chart2} icon={<KeyRound size={24} color={C.white} strokeWidth={2.2} />}>收买被拐卖的妇女、儿童罪</TabChip>
            <IconChip icon={<Gavel size={24} color={C.white} strokeWidth={2.2} />} tone={C.ward} title="既遂：">
              买到手即既遂（一女二嫁→未遂；仙人跳→拐卖者构成诈骗·收买人对象不能犯无罪）
            </IconChip>
            <IconChip icon={<Scale size={24} color={C.white} strokeWidth={2.2} />} tone={C.pulse} title="罪数原则：">
              收买罪＋后罪（拘禁·伤害·强奸等）→ 数罪并罚
            </IconChip>
            <IconChip icon={<Castle size={24} color={C.white} strokeWidth={2.2} />} tone={C.amber} title="例外：">
              收买罪＋拐卖罪＝拐卖罪；新罪能被拐卖罪吞并（拘禁·强奸）只定拐卖罪·不能吞并（伤害重伤）并罚
            </IconChip>
            <IconChip icon={<Users size={24} color={C.white} strokeWidth={2.2} />} tone={C.ward} title="从宽：">
              不虐待·不阻碍解救儿童→可以从轻；按妇女意愿不阻碍返回→可以从轻或减轻
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={42} marker="summary-grid" style={{position: 'absolute', left: 900, top: 380, width: 876, height: 364}}>
          <Panel tone={C.ward} watermark={<Compass size={160} color={C.ward} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 20px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <TabChip tone={C.ward} icon={<Compass size={24} color={C.white} strokeWidth={2.2} />}>总结 · 实力控制 × 目的 ＝ 罪名</TabChip>
            <IconChip icon={<Castle size={22} color={C.white} strokeWidth={2.2} />} tone={C.ward} title="仅有拘禁目的：">
              非法拘禁罪
            </IconChip>
            <IconChip icon={<HeartIcon />} tone={C.pulse} title="奸淫目的：">
              强奸罪
            </IconChip>
            <IconChip icon={<KeyRound size={22} color={C.white} strokeWidth={2.2} />} tone={C.chart2} title="向乙的家人要钱：">
              绑架罪（向乙本人＝抢劫罪）
            </IconChip>
            <IconChip icon={<Users size={22} color={C.white} strokeWidth={2.2} />} tone={C.amber} title="出卖目的：">
              拐卖妇女罪（无出卖目的·对象是儿童＝拐骗儿童罪）——贯彻行为与目的同时存在原则
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

const HeartIcon = () => <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 22, height: 22, borderRadius: 999, border: `3px solid ${C.white}`, color: C.white, fontSize: 12, fontWeight: 950}}>奸</span>;
