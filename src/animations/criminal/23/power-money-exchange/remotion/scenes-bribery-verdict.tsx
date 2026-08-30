import {Coins, GitMerge, Gavel, Plus, Scale} from 'lucide-react';
import {C, Enter, IconChip, LabelBlock, Neg, Panel, Shell, SoftHi, TabChip, ThinU, WaxStamp} from './kit';

export const BriberyVerdictFloorScene = () => {
  /* data-final-knowledge="intent-panel" data-final-knowledge="number-floor" */
  return (
    <Shell code="05" kicker="第三节 · 受贿罪" title="受贿罪·罪数问题">
      <div
        data-layout="bribery-verdict-floor"
        data-visual-anchor="boundary"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="intent-panel,number-floor"
        data-focal-rule="amount-needs-subjective-objective-agreement-bribery-plus-duty-crime-cumulates-by-default"
        data-focal-channels="icon,contrast,enclosure,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="intent-panel" style={{position: 'absolute', left: 0, top: 0, width: 888, height: 744}}>
          <Panel tone={C.indigo} watermark={<Gavel size={170} color={C.indigo} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.indigo} icon={<Gavel size={24} color={C.white} strokeWidth={2.2} />}>主观故意·既遂</TabChip>
            <IconChip icon={<Gavel size={26} color={C.white} strokeWidth={2.2} />} tone={C.indigo} title="无受贿故意：">
              收受财物后及时退还、上交的，不构成受贿罪；因被查处而为掩饰犯罪退还的，仍构成
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.ward} title="数额主客观相一致：">
              3万／20万／300万；以为茶叶盒藏3万而收下，主观无故意→不构成受贿罪
            </IconChip>
            <IconChip icon={<Coins size={26} color={C.white} strokeWidth={2.2} />} tone={C.gold} title="既遂标准：">
              带着受贿故意接受财物、取得控制财物；只要求事实取得控制，不要求民法上取得所有权（收房未过户也既遂）
            </IconChip>
            <Enter delay={60}><ThinU>数额巨大财物未遂＋数额较大财物既遂→想象竞合，择一重刑论处</ThinU></Enter>
          </Panel>
        </Enter>
        <Enter delay={18} marker="number-floor" style={{position: 'absolute', left: 912, right: 0, top: 0, bottom: 0}}>
          <Panel tone={C.rouge} watermark={<GitMerge size={160} color={C.rouge} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.rouge} icon={<GitMerge size={24} color={C.white} strokeWidth={2.2} />}>罪数边界</TabChip>
            <IconChip icon={<Plus size={26} color={C.white} strokeWidth={2.2} />} tone={C.rouge} title="原则·受贿＋渎职＝数罪并罚：">
              收钱＋办事是两个行为；如受贿＋为境外非法提供国家秘密罪、＋私放在押人员罪、＋挪用公款罪
            </IconChip>
            <IconChip icon={<GitMerge size={26} color={C.white} strokeWidth={2.2} />} tone={C.gold} title="例外·四罪从一重：">
              司法工作人员收受贿赂，又犯徇私枉法罪、民事行政枉法裁判罪、执行失职罪、执行滥用职权罪→依照处罚较重的规定定罪处罚
            </IconChip>
            <IconChip icon={<Coins size={26} color={C.white} strokeWidth={2.2} />} tone={C.patina} title="与贪污罪区分＝财物来源：">
              受贿收的是行贿人的个人钱财；贪污的是公共财物
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.indigo} title="与敲诈勒索罪、诈骗罪：">
              中立关系，想象竞合；给钱后虚假承诺只定受贿罪，给钱前虚假承诺定诈骗罪与受贿罪想象竞合
            </IconChip>
            <Enter delay={68} style={{display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap'}}>
              <LabelBlock color={C.rouge} size={18}>副乡长送公款给县长：甲贪污＋行贿想象竞合</LabelBlock>
              <WaxStamp delay={74} tone="rouge">乙＝贪污罪教唆犯＋受贿罪，想象竞合</WaxStamp>
            </Enter>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
