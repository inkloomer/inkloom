import {Ban, Bomb, Coins, Radio, Scale, ShieldCheck, Siren, Swords, Users, Zap} from 'lucide-react';
import {C, Enter, IconChip, Mark, Neg, Panel, Shell, SirenStamp, SoftHi, TabChip, ThinU} from './kit';

export const TerrorAlertWardScene = () => {
  /* data-final-knowledge="org-crime-board" data-final-knowledge="aid-crime-board" data-final-knowledge="prepare-crime-board" */
  return (
    <Shell code="05" kicker="第四节 · 恐怖型犯罪" title="恐怖型犯罪：组织·帮助·准备">
      <div
        data-layout="terror-alert-tri-ward"
        data-visual-anchor="boundary"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="org-crime-board,aid-crime-board"
        data-focal-rule="terror-crimes-punish-organization-and-aid-before-any-attack"
        data-focal-channels="icon,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={3} marker="org-crime-board" style={{position: 'absolute', left: 0, top: 0, width: 590, height: 744}}>
          <Panel tone={C.siren} watermark={<Siren size={170} color={C.siren} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.siren} icon={<Siren size={24} color={C.white} strokeWidth={2.2} />}>组织、领导、参加恐怖组织罪（第120条）</TabChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.siren} title="与黑社会性质组织的区别：">
              恐怖组织有<Mark color={C.siren}>政治目的</Mark>；黑社会组织<Neg size={20}>没有</Neg>
            </IconChip>
            <IconChip icon={<Users size={26} color={C.white} strokeWidth={2.2} />} tone={C.green} title="成立门槛：">
              只要求组织·领导·参加，<ThinU color={C.green}>不要求</ThinU>实施恐怖活动
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.night} title="罪数：">
              又实施其他犯罪（爆炸·杀人等）→ <Mark color={C.night}>数罪并罚</Mark>
            </IconChip>
          </Panel>
        </Enter>

        <Enter delay={30} marker="aid-crime-board" style={{position: 'absolute', left: 614, top: 0, width: 582, height: 744}}>
          <Panel tone={C.yellow} watermark={<Swords size={160} color={C.yellow} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.yellow} icon={<Swords size={24} color={C.white} strokeWidth={2.2} />}>帮助恐怖活动罪（第120条之一）</TabChip>
            <IconChip icon={<Coins size={26} color={C.white} strokeWidth={2.2} />} tone={C.yellow} title="资助＝仅物质性：">
              <ThinU color={C.yellow}>不包括精神性</ThinU>资助
            </IconChip>
            <IconChip icon={<ShieldCheck size={26} color={C.white} strokeWidth={2.2} />} tone={C.siren} title="帮助行为正犯化：">
              定罪<Neg size={20}>不需</Neg>共犯从属性；教唆资助→本罪<Mark color={C.siren}>教唆犯</Mark>
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.green} title="既遂＝资助被接收：">
              招募的人员被恐怖组织接收 → <Mark color={C.green}>既遂</Mark>（不要求实施恐袭）
            </IconChip>
            <Enter delay={130}><SoftHi style={{fontSize: 20 }}>同类：资助危害国家安全犯罪活动罪（第107条）也是帮助行为正犯化，接收即既遂</SoftHi></Enter>
          </Panel>
        </Enter>

        <Enter delay={72} marker="prepare-crime-board" style={{position: 'absolute', left: 1220, top: 0, width: 556, height: 744}}>
          <Panel tone={C.night} watermark={<Bomb size={160} color={C.night} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.night} icon={<Bomb size={24} color={C.white} strokeWidth={2.2} />}>准备实施恐怖活动罪（第120条之二）</TabChip>
            <IconChip icon={<Zap size={26} color={C.white} strokeWidth={2.2} />} tone={C.night} title="预备行为正犯化：">
              准备凶器危险物品·组织参加培训·与境外联络·策划
            </IconChip>
            <IconChip icon={<Radio size={26} color={C.white} strokeWidth={2.2} />} tone={C.yellow} title="预备犯门槛＝现实危险：">
              只要求<Mark color={C.yellow}>抽象缓和</Mark>危险：已联系讲师·备好场地∈
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.siren} title="无现实危险∉：">
              查阅资料∉；为买凶器打工挣钱<Neg size={20}>∉预备犯</Neg>
            </IconChip>
            <Enter delay={160}><SirenStamp delay={160} tone="green">同时构成其他犯罪 → 择一重</SirenStamp></Enter>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
