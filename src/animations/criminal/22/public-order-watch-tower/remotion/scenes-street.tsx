import {AlertTriangle, ArrowDown, Gavel, GitMerge, Hand, Scale, Users} from 'lucide-react';
import {C, Enter, IconChip, Neg, Panel, Shell, SoftHi, TabChip, ThinU} from './kit';

export const StreetSquatStageScene = () => {
  /* data-final-knowledge="brawl-panel" data-final-knowledge="provocation-panel" data-final-knowledge="throwing-panel" */
  return (
    <Shell code="03" kicker="第一节 · “小混混”型犯罪" title="聚众斗殴·寻衅滋事·高空抛物">
      <div
        data-layout="street-squat-stage"
        data-visual-anchor="comparison-axis"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="brawl-panel,provocation-panel,throwing-panel"
        data-focal-rule="crowd-violence-converts-on-injury-throwing-is-deliberate-and-severity-based"
        data-focal-channels="icon,contrast,enclosure,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="brawl-panel" style={{position: 'absolute', left: 0, top: 0, width: 592, height: 744}}>
          <Panel tone={C.crimson} watermark={<Users size={160} color={C.crimson} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.crimson} icon={<Users size={24} color={C.white} strokeWidth={2.2} />}>聚众斗殴罪（第292条）</TabChip>
            <IconChip icon={<Users size={26} color={C.white} strokeWidth={2.2} />} tone={C.crimson} title="聚众＋斗殴：">
              处罚首要分子和积极参加者
            </IconChip>
            <IconChip icon={<Gavel size={26} color={C.white} strokeWidth={2.2} />} tone={C.navy} title="转化规定：">
              聚众斗殴，致人重伤、死亡的→故意伤害罪、故意杀人罪
            </IconChip>
            <Enter delay={56}><ThinU>聚众扰乱社会秩序罪（第290条）：组织聚集众人；暴力故意致人重伤、死亡→并罚</ThinU></Enter>
            <Enter delay={62}><Neg size={18}>“跳楼秀”不构成聚众扰乱社会秩序罪</Neg></Enter>
          </Panel>
        </Enter>
        <Enter delay={18} marker="provocation-panel" style={{position: 'absolute', left: 616, top: 0, width: 592, height: 744}}>
          <Panel tone={C.torch} watermark={<AlertTriangle size={160} color={C.torch} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.torch} icon={<AlertTriangle size={24} color={C.white} strokeWidth={2.2} />}>寻衅滋事罪（第293条）</TabChip>
            <IconChip icon={<Hand size={26} color={C.white} strokeWidth={2.2} />} tone={C.crimson} title="随意殴打他人，情节恶劣">
            </IconChip>
            <IconChip icon={<Users size={26} color={C.white} strokeWidth={2.2} />} tone={C.navy} title="追逐、拦截、辱骂、恐吓他人，情节恶劣">
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.gold} title="强拿硬要或任意损毁、占用公私财物，情节严重">
            </IconChip>
            <IconChip icon={<AlertTriangle size={26} color={C.white} strokeWidth={2.2} />} tone={C.torch} title="公共场所起哄闹事，造成秩序严重混乱">
            </IconChip>
            <Enter delay={64}><SoftHi style={{fontSize: 18 }}>新观点：与故意伤害罪等可想象竞合，择一重罪论处</SoftHi></Enter>
          </Panel>
        </Enter>
        <Enter delay={30} marker="throwing-panel" style={{position: 'absolute', left: 1232, right: 0, top: 0, bottom: 0}}>
          <Panel tone={C.pine} watermark={<ArrowDown size={160} color={C.pine} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.pine} icon={<ArrowDown size={24} color={C.white} strokeWidth={2.2} />}>高空抛物罪（第291条之二）</TabChip>
            <IconChip icon={<ArrowDown size={26} color={C.white} strokeWidth={2.2} />} tone={C.pine} title="从高空向下抛掷物品：">
              高度约二层楼或3米即算；山、树、巨轮、热气球上抛物均可；地面向上抛不属于
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.gold} title="情节犯＋故意：">
              不要求实害结果；过失导致物品坠落不构成本罪
            </IconChip>
            <IconChip icon={<GitMerge size={26} color={C.white} strokeWidth={2.2} />} tone={C.navy} title="同时构成其他犯罪：">
              依照处罚较重的规定定罪处罚；抛硫酸→以危险方法危害公共安全罪；扔燃烧蜂窝煤→放火罪优先（2022）
            </IconChip>
            <Enter delay={70}><Neg size={18}>扔酒瓶子未危及多数人→只构成高空抛物罪</Neg></Enter>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
