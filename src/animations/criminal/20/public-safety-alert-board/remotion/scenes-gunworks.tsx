import {Ban, Bomb, Factory, PackageCheck, Pickaxe, Scale, ShieldAlert, Siren, Target, Zap} from 'lucide-react';
import {C, Enter, IconChip, Mark, Neg, Panel, Shell, SirenStamp, TabChip, ThinU} from './kit';

export const GunFactorySafetyScene = () => {
  /* data-final-knowledge="gun-identify-board" data-final-knowledge="theft-snatch-guns-board" data-final-knowledge="manufacture-trade-board" data-final-knowledge="factory-report-board" */
  return (
    <Shell code="07" kicker="第五节·第六节 · 枪支与安全生产" title="枪支犯罪补充·安全生产犯罪收尾">
      <div
        data-layout="gun-factory-safety-quad-ward"
        data-visual-anchor="flow-path"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="theft-snatch-guns-board,manufacture-trade-board"
        data-focal-rule="gun-crimes-hinge-on-actual-obtainment-and-trade-forms"
        data-focal-channels="icon,contrast,enclosure,connector"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={3} marker="gun-identify-board" style={{position: 'absolute', left: 0, top: 0, width: 884, height: 220}}>
          <Panel tone={C.siren} watermark={<Target size={140} color={C.siren} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 6}}>
            <TabChip tone={C.siren} icon={<Target size={24} color={C.white} strokeWidth={2.2} />}>枪支的认定</TabChip>
            <IconChip icon={<Target size={26} color={C.white} strokeWidth={2.2} />} tone={C.siren} title="刑法标准：">
              司法解释要求<Mark color={C.siren}>较大杀伤力</Mark>；弓弩<Neg size={20}>不是</Neg>枪支
            </IconChip>
            <IconChip icon={<Bomb size={26} color={C.white} strokeWidth={2.2} />} tone={C.night} title="扩大解释：">
              火药为动力发射弹药的大口径武器∈——<ThinU color={C.night}>土炮·大炮也属枪支</ThinU>
            </IconChip>
          </Panel>
        </Enter>

        <Enter delay={22} marker="theft-snatch-guns-board" style={{position: 'absolute', left: 900, top: 0, width: 876, height: 356}}>
          <Panel tone={C.yellow} watermark={<ShieldAlert size={160} color={C.yellow} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <TabChip tone={C.yellow} icon={<ShieldAlert size={24} color={C.white} strokeWidth={2.2} />}>盗窃、抢夺枪支、弹药、爆炸物、危险物质罪（第127条）</TabChip>
            <IconChip icon={<ShieldAlert size={26} color={C.white} strokeWidth={2.2} />} tone={C.yellow} title="危险犯·既遂＝实际取得：">
              不要求造成严重后果，但既遂须<Mark color={C.yellow}>实际取得</Mark>
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.siren} title="骗取·抢劫：">
              骗取<Neg size={20}>∉本罪</Neg>→诈骗罪；抢劫枪支→定<Neg size={20}>抢夺</Neg>（无“抢劫枪支罪”）
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.night} title="认识错误（2007年）：">
              普通盗窃故意窃得枪支→盗窃罪<Mark color={C.night}>既遂</Mark>；事后持有→非法持有枪支罪，<Neg size={20}>数罪并罚</Neg>
            </IconChip>
          </Panel>
        </Enter>

        <Enter delay={58} marker="manufacture-trade-board" style={{position: 'absolute', left: 0, top: 244, width: 884, height: 500}}>
          <Panel tone={C.night} watermark={<Factory size={160} color={C.night} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.night} icon={<Factory size={24} color={C.white} strokeWidth={2.2} />}>非法制造、买卖、运输、邮寄、储存枪支、弹药、爆炸物罪（第125条）</TabChip>
            <IconChip icon={<PackageCheck size={26} color={C.white} strokeWidth={2.2} />} tone={C.green} title="“买卖”双向：">
              包括<Mark color={C.green}>卖</Mark>也包括<Mark color={C.green}>买</Mark>（为卖而买·为自用而买均∈）
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.yellow} title="方式含物物交换：">
              枪换毒品→甲非法买卖枪支罪；乙贩卖毒品罪＋非法买卖枪支罪<Neg size={20}>数罪并罚</Neg>（2019）
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.siren} title="选择性罪名·错误看客观：">
              想买枪买到子弹→定<Mark color={C.siren}>非法买卖弹药罪</Mark>（2020）
            </IconChip>
          </Panel>
        </Enter>

        <Enter delay={100} marker="factory-report-board" style={{position: 'absolute', left: 900, top: 380, width: 876, height: 364}}>
          <Panel tone={C.green} watermark={<Pickaxe size={160} color={C.green} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <TabChip tone={C.green} icon={<Pickaxe size={24} color={C.white} strokeWidth={2.2} />}>安全生产犯罪 · 两个收尾罪名</TabChip>
            <IconChip icon={<Siren size={26} color={C.white} strokeWidth={2.2} />} tone={C.siren} title="强令、组织违章冒险作业罪（第134条2款）：">
              强令违章冒险作业·明知重大隐患不排除仍冒险组织；<Mark color={C.siren}>过失犯罪</Mark>，要求<ThinU color={C.siren}>实害结果</ThinU>
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.night} title="不报、谎报安全事故罪（第139条之一）（2024）：">
              事故后<Mark color={C.night}>负有报告职责的人员</Mark>不报·谎报，贻误抢救，情节严重
            </IconChip>
            <Enter delay={168}><SirenStamp delay={168} tone="green">危险作业罪＝故意＋具体危险；本页两罪＝过失＋实害</SirenStamp></Enter>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
