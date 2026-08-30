import {Building2, Eye, Gavel, Hand, Scale, Users} from 'lucide-react';
import {C, Enter, IconChip, LabelBlock, Mark, Neg, Panel, Shell, SoftHi, TabChip, ThinU, WaxStamp} from './kit';

export const EmbezzlementVerdictScene = () => {
  /* data-final-knowledge="completed-panel" data-final-knowledge="accomplice-panel" data-final-knowledge="boundary-floor" */
  return (
    <Shell code="02" kicker="第一节 · 贪污罪" title="贪污罪·认定问题">
      <div
        data-layout="embezzlement-verdict-table"
        data-visual-anchor="role-pair"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="completed-panel,accomplice-panel"
        data-focal-rule="completion-differs-by-act-type-accomplice-liability-follows-the-executor-role"
        data-focal-channels="icon,contrast,enclosure,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="completed-panel" style={{position: 'absolute', left: 0, top: 0, width: 780, height: 744}}>
          <Panel tone={C.indigo} watermark={<Scale size={170} color={C.indigo} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.indigo} icon={<Scale size={24} color={C.white} strokeWidth={2.2} />}>既遂标准</TabChip>
            <IconChip icon={<Eye size={26} color={C.white} strokeWidth={2.2} />} tone={C.indigo} title="窃取、骗取：">
              要求取得控制公共财物（建立自己的占有）
            </IconChip>
            <IconChip icon={<Hand size={26} color={C.white} strokeWidth={2.2} />} tone={C.ward} title="侵吞：">
              要求行使所有权
            </IconChip>
            <IconChip icon={<Gavel size={26} color={C.white} strokeWidth={2.2} />} tone={C.gold} title="2014年主观题：">
              副厂长甲骗购零件，乙先垫付26万元但化工厂未付款——甲收到钱也不构成既遂，因为公家没有损失，该钱是乙的钱
            </IconChip>
            <Enter delay={56} style={{display: 'flex', gap: 10, flexWrap: 'wrap'}}>
              <SoftHi style={{fontSize: 19 }}>既遂数额＝公家损失数额</SoftHi>
              <Neg size={19}>既遂后捐给公益，不影响既遂</Neg>
            </Enter>
          </Panel>
        </Enter>
        <Enter delay={18} marker="accomplice-panel" style={{position: 'absolute', left: 804, top: 0, width: 992, height: 448}}>
          <Panel tone={C.rouge} watermark={<Users size={160} color={C.rouge} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.rouge} icon={<Users size={24} color={C.white} strokeWidth={2.2} />}>共犯与身份</TabChip>
            <IconChip icon={<Users size={26} color={C.white} strokeWidth={2.2} />} tone={C.rouge} title="甲帮助＋乙实行：">
              乙＝贪污罪实行犯，甲＝贪污罪帮助犯（例1假发票案）
            </IconChip>
            <IconChip icon={<Hand size={26} color={C.white} strokeWidth={2.2} />} tone={C.ward} title="甲实行＋乙帮助：">
              甲＝财产犯罪实行犯，乙＝财产犯罪帮助犯；乙不构成贪污罪（例2低保户案）
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.patina} title="双方均实行：">
              财产犯罪的共同犯罪与贪污罪的共同犯罪，想象竞合，择一重罪论处（例3银行骗贷案）
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={30} marker="boundary-floor" style={{position: 'absolute', left: 804, right: 0, top: 472, bottom: 0}}>
          <Panel tone={C.gold} watermark={<Building2 size={140} color={C.gold} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.gold} icon={<Building2 size={24} color={C.white} strokeWidth={2.2} />}>罪名界限·处罚</TabChip>
            <div style={{display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center'}}>
              <Enter delay={44}><LabelBlock color={C.indigo} size={18}>贪污罪＝国家工作人员</LabelBlock></Enter>
              <Enter delay={50}><LabelBlock color={C.ward} size={18}>职务侵占罪＝非国家工作人员</LabelBlock></Enter>
            </div>
            <div style={{display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center'}}>
              <Enter delay={56}><LabelBlock color={C.rouge} size={18}>贪污罪＝个人犯罪</LabelBlock></Enter>
              <Enter delay={62}><LabelBlock color={C.patina} size={18}>私分国有资产罪＝单位犯罪（以单位名义集体私分）</LabelBlock></Enter>
            </div>
            <Enter delay={68} style={{display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap'}}>
              <ThinU>贪污罪与私分国有资产罪两罪区分</ThinU>
              <WaxStamp delay={72} tone="rouge">死缓→终身监禁，不得减刑、假释</WaxStamp>
            </Enter>
            <Enter delay={78}><Mark color={C.gold}>第383条</Mark></Enter>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
