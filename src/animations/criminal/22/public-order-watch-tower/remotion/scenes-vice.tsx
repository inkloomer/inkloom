import {Film, Hand, MessageCircle, Scale, Send, UserPlus, Users} from 'lucide-react';
import {C, Enter, IconChip, LabelBlock, Panel, Shell, SoftHi, TabChip, ThinU} from './kit';

export const ViceBrocadeRoomScene = () => {
  /* data-final-knowledge="prostitution-panel" data-final-knowledge="obscenity-panel" */
  return (
    <Shell code="08" kicker="第八九节" title="卖淫类犯罪·淫秽物品犯罪">
      <div
        data-layout="vice-brocade-room"
        data-visual-anchor="boundary"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="prostitution-panel,obscenity-panel"
        data-focal-rule="organizing-needs-management-control-obscenity-crimes-split-by-profit-purpose"
        data-focal-channels="icon,contrast,enclosure,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="prostitution-panel" style={{position: 'absolute', left: 0, top: 0, width: 964, height: 744}}>
          <Panel tone={C.crimson} watermark={<Users size={170} color={C.crimson} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.crimson} icon={<Users size={24} color={C.white} strokeWidth={2.2} />}>卖淫类犯罪（第358条、第359条）</TabChip>
            <IconChip icon={<Users size={26} color={C.white} strokeWidth={2.2} />} tone={C.crimson} title="组织卖淫罪：">
              对卖淫者具有管理性和控制性（区别于介绍卖淫）；被组织者实施卖淫→既遂
            </IconChip>
            <IconChip icon={<Hand size={26} color={C.white} strokeWidth={2.2} />} tone={C.navy} title="强迫卖淫罪：">
              逼良为娼／不让从良／强迫在特定时间地点卖淫；强迫仅与自己性交并支付对价→强奸罪
            </IconChip>
            <IconChip icon={<UserPlus size={26} color={C.white} strokeWidth={2.2} />} tone={C.gold} title="协助组织卖淫罪：">
              帮助行为正犯化，独立罪名；招募、运送、保镖、打手、管账；一般服务性劳务不认定
            </IconChip>
            <IconChip icon={<MessageCircle size={26} color={C.white} strokeWidth={2.2} />} tone={C.pine} title="引诱、容留、介绍卖淫罪：">
              引诱＝使本无意愿者卖淫；容留＝提供场所；介绍＝牵线搭桥；另有引诱幼女卖淫罪
            </IconChip>
            <Enter delay={76}><ThinU>卖淫＝钱色交易；权色交易不算卖淫；组织被特定人包养→不是组织卖淫罪</ThinU></Enter>
          </Panel>
        </Enter>
        <Enter delay={18} marker="obscenity-panel" style={{position: 'absolute', left: 988, right: 0, top: 0, bottom: 0}}>
          <Panel tone={C.navy} watermark={<Film size={170} color={C.navy} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.navy} icon={<Film size={24} color={C.white} strokeWidth={2.2} />}>淫秽物品犯罪·违禁品罪数总结</TabChip>
            <IconChip icon={<Film size={26} color={C.white} strokeWidth={2.2} />} tone={C.crimson} title="传播淫秽物品牟利罪：">
              传播目的＋牟利目的；网上裸聊、淫秽直播＝电子信息＝淫秽物品
            </IconChip>
            <IconChip icon={<Send size={26} color={C.white} strokeWidth={2.2} />} tone={C.pine} title="传播淫秽物品罪：">
              只要传播目的；走私淫秽物品罪＝传播目的或牟利目的（二选一）
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.gold} title="传播方式：">
              让不特定人或多数人感知；陈列也是传播；裸体人陈列→不属于传播淫秽物品
            </IconChip>
            <Enter delay={68} style={{display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center'}}>
              <LabelBlock color={C.navy} size={16}>盗窃假币、淫秽物品、文物、毒品后又出售→数罪并罚</LabelBlock>
              <LabelBlock color={C.crimson} size={16}>盗窃枪支又出售→只定盗窃枪支罪</LabelBlock>
            </Enter>
            <Enter delay={74}><SoftHi style={{fontSize: 17 }}>欲盗普通财物却盗到违禁品：盗窃罪＋相应罪名→数罪并罚</SoftHi></Enter>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
