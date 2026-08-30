import {Gavel, Hand, Link, Scale, Shield, Siren} from 'lucide-react';
import {C, Enter, IconChip, Neg, Panel, Shell, SoftHi, TabChip, ThinU} from './kit';

export const OfficialDutyBoardScene = () => {
  /* data-final-knowledge="duty-panel" data-final-knowledge="police-panel" */
  return (
    <Shell code="01" kicker="第一节 · 妨害公务类犯罪" title="妨害公务罪与袭警罪">
      <div
        data-layout="official-duty-board"
        data-visual-anchor="role-pair"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="duty-panel,police-panel"
        data-focal-rule="obstruction-targets-ongoing-duties-police-assault-requires-violent-attack-not-threat"
        data-focal-channels="icon,contrast,enclosure,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="duty-panel" style={{position: 'absolute', left: 0, top: 0, width: 936, height: 744}}>
          <Panel tone={C.navy} watermark={<Shield size={170} color={C.navy} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.navy} icon={<Shield size={24} color={C.white} strokeWidth={2.2} />}>妨害公务罪（第277条第1款）</TabChip>
            <IconChip icon={<Shield size={26} color={C.white} strokeWidth={2.2} />} tone={C.navy} title="妨害的对象＝正在执行的公务：">
              警察调解完甲乙纠纷并签字后，甲心里不平再踹警察致轻伤→不构成本罪，构成故意伤害罪
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.ward} title="罪数·原则＝数罪并罚：">
              实施某种犯罪，又实施妨害公务罪，应数罪并罚
            </IconChip>
            <IconChip icon={<Link size={26} color={C.white} strokeWidth={2.2} />} tone={C.gold} title="例外·结合犯＝前罪加重处罚：">
              两种前罪：走私、贩卖、运输、制造毒品犯罪；组织、运送他人偷越国（边）境罪
            </IconChip>
            <Enter delay={60}><ThinU>以暴力、威胁方法阻碍国家机关工作人员依法执行职务</ThinU></Enter>
          </Panel>
        </Enter>
        <Enter delay={18} marker="police-panel" style={{position: 'absolute', left: 960, right: 0, top: 0, bottom: 0}}>
          <Panel tone={C.crimson} watermark={<Siren size={170} color={C.crimson} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.crimson} icon={<Siren size={24} color={C.white} strokeWidth={2.2} />}>袭警罪（第277条第5款）</TabChip>
            <IconChip icon={<Siren size={26} color={C.white} strokeWidth={2.2} />} tone={C.crimson} title="对象＝正在依法执行职务的人民警察：">
              不包括警务辅助人员；警察非工作时间遇紧急情况依法履职，暴力袭击也构成
            </IconChip>
            <IconChip icon={<Hand size={26} color={C.white} strokeWidth={2.2} />} tone={C.torch} title="行为方式＝暴力袭击：">
              撕咬、掌掴、踢打、抱摔、投掷物品，造成轻微伤以上后果；打砸、抢夺警械足以危及人身安全
            </IconChip>
            <IconChip icon={<Gavel size={26} color={C.white} strokeWidth={2.2} />} tone={C.gold} title="升格法定刑：">
              使用枪支、管制刀具或者驾驶机动车撞击等手段，严重危及其人身安全→三年以上七年以下
            </IconChip>
            <Enter delay={64} style={{display: 'flex', gap: 10, flexWrap: 'wrap'}}>
              <Neg size={19}>不包括以暴力相威胁→可构成妨害公务罪</Neg>
              <SoftHi style={{fontSize: 18 }}>轻微肢体冲突、一般性抗拒、言语攻击不属于</SoftHi>
            </Enter>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
