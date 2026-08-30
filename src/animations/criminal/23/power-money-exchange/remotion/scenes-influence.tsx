import {Ban, MessageCircle, Repeat, Scale, Target, User, Users} from 'lucide-react';
import {C, Enter, IconChip, LabelBlock, Neg, Panel, Shell, SoftHi, TabChip, ThinU, WaxStamp} from './kit';

export const InfluenceTrioMapScene = () => {
  /* data-final-knowledge="offer-panel" data-final-knowledge="mediate-panel" data-final-knowledge="influence-panel" */
  return (
    <Shell code="06" kicker="第四五六节" title="行贿罪·斡旋受贿·利用影响力受贿罪">
      <div
        data-layout="influence-trio-map"
        data-visual-anchor="comparison-axis"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="offer-panel,mediate-panel,influence-panel"
        data-focal-rule="improper-benefit-needs-objective-existence-for-offering-but-not-for-mediation"
        data-focal-channels="icon,contrast,enclosure,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="offer-panel" style={{position: 'absolute', left: 0, top: 0, width: 592, height: 560}}>
          <Panel tone={C.indigo} watermark={<User size={150} color={C.indigo} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.indigo} icon={<User size={24} color={C.white} strokeWidth={2.2} />}>行贿罪（第389条）</TabChip>
            <IconChip icon={<Target size={26} color={C.white} strokeWidth={2.2} />} tone={C.indigo} title="为谋取不正当利益：">
              主观目的＋客观存在不正当利益，缺一不可；不公平竞争优势也属不正当
            </IconChip>
            <IconChip icon={<User size={26} color={C.white} strokeWidth={2.2} />} tone={C.ward} title="主动给钱：">
              给出去即既遂，不要求实际获得不正当利益
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.rouge} title="被勒索给钱：">
              没有获得不正当利益的，不是行贿（消极的构成要件要素）
            </IconChip>
            <Enter delay={56}><ThinU>行贿数额＝受贿数额</ThinU></Enter>
          </Panel>
        </Enter>
        <Enter delay={18} marker="mediate-panel" style={{position: 'absolute', left: 616, top: 0, width: 592, height: 560}}>
          <Panel tone={C.gold} watermark={<Repeat size={150} color={C.gold} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.gold} icon={<Repeat size={24} color={C.white} strokeWidth={2.2} />}>斡旋受贿（第388条·以受贿论处）</TabChip>
            <IconChip icon={<Users size={26} color={C.white} strokeWidth={2.2} />} tone={C.gold} title="主体＝国家工作人员（斡旋者）：">
              利用本人职权或者地位形成的便利条件，通过其他国家工作人员的职务行为
            </IconChip>
            <IconChip icon={<MessageCircle size={26} color={C.white} strokeWidth={2.2} />} tone={C.patina} title="只要求许诺斡旋：">
              不要求实际斡旋、不要求终端办事人许诺办事、不要求办成事
            </IconChip>
            <IconChip icon={<Target size={26} color={C.white} strokeWidth={2.2} />} tone={C.rouge} title="谋取不正当利益：">
              只是主观要求，不要求客观存在（多数说）
            </IconChip>
            <Enter delay={64}><SoftHi style={{fontSize: 18 }}>上找下→普通受贿；同级找同级、下找上→斡旋受贿</SoftHi></Enter>
          </Panel>
        </Enter>
        <Enter delay={30} marker="influence-panel" style={{position: 'absolute', left: 1232, right: 0, top: 0, height: 560}}>
          <Panel tone={C.patina} watermark={<Users size={150} color={C.patina} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.patina} icon={<Users size={24} color={C.white} strokeWidth={2.2} />}>利用影响力受贿罪</TabChip>
            <IconChip icon={<Users size={26} color={C.white} strokeWidth={2.2} />} tone={C.patina} title="主体三类：">
              国家工作人员的近亲属或关系密切人；离职的国家工作人员；离职者的近亲属或关系密切人
            </IconChip>
            <IconChip icon={<MessageCircle size={26} color={C.white} strokeWidth={2.2} />} tone={C.indigo} title="成立条件：">
              实施游说行为＋终端办事人许诺为请托人谋取不正当利益＋索取或收受财物
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.gold} title="保护法益：">
              终端办事人职务行为的不可收买性与公正性
            </IconChip>
            <Enter delay={64}><Neg size={18}>终端办事人拒绝办事或未许诺→不构成本罪（可能构成诈骗罪）</Neg></Enter>
          </Panel>
        </Enter>
        <Enter delay={42} style={{position: 'absolute', left: 0, right: 0, top: 584, bottom: 0}}>
          <Panel tone={C.rouge} watermark={<Scale size={120} color={C.rouge} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 6, justifyContent: 'center'}}>
            <TabChip tone={C.rouge} icon={<Scale size={22} color={C.white} strokeWidth={2.2} />}>谋取不正当利益的总结</TabChip>
            <div style={{display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center'}}>
              <Enter delay={54}><LabelBlock color={C.indigo} size={18}>行贿罪：主观目的＋客观存在</LabelBlock></Enter>
              <Enter delay={60}><LabelBlock color={C.gold} size={18}>斡旋受贿：只要主观目的</LabelBlock></Enter>
              <Enter delay={66}><LabelBlock color={C.patina} size={18}>利用影响力受贿：主观目的＋终端许诺时可能存在</LabelBlock></Enter>
              <Enter delay={72}><WaxStamp delay={72} tone="rouge">行贿两头要，斡旋只要头，影响力要头也要“可能”</WaxStamp></Enter>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
