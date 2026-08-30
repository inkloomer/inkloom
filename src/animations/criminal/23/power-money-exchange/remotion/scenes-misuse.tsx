import {AlertTriangle, Banknote, Briefcase, Landmark, Repeat, Scale, Users} from 'lucide-react';
import {C, Enter, IconChip, LabelBlock, Neg, Panel, Shell, SoftHi, TabChip, ThinU, WaxStamp} from './kit';

export const MisuseFundLaneScene = () => {
  /* data-final-knowledge="conduct-strip" data-final-knowledge="privateuse-panel" data-final-knowledge="compare-floor" */
  return (
    <Shell code="03" kicker="第二节 · 挪用公款罪" title="挪用公款罪">
      <div
        data-layout="misuse-fund-lane"
        data-visual-anchor="flow-path"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="conduct-strip,privateuse-panel,compare-floor"
        data-focal-rule="removal-alone-is-the-act-use-is-a-punishment-condition-restore-intent-splits-the-crimes"
        data-focal-channels="icon,contrast,enclosure,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="conduct-strip" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 150}}>
          <Panel tone={C.indigo} watermark={<Banknote size={110} color={C.indigo} strokeWidth={1.6} />} style={{height: '100%', padding: '10px 18px', display: 'flex', flexDirection: 'column', gap: 6, justifyContent: 'center'}}>
            <TabChip tone={C.indigo} icon={<Banknote size={22} color={C.white} strokeWidth={2.2} />}>实行行为＝挪出公款（归个人使用）；使用行为＝处罚条件</TabChip>
            <div style={{display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center'}}>
              <SoftHi style={{fontSize: 19 }}>挪出来＝既遂；意志以外原因未挪出＝未遂</SoftHi>
              <Neg size={19}>挪出但未进行违法活动，或三个月内还了→不处罚、不定罪（非中止）</Neg>
            </div>
          </Panel>
        </Enter>
        <Enter delay={18} marker="privateuse-panel" style={{position: 'absolute', left: 0, top: 174, width: 888, height: 534}}>
          <Panel tone={C.patina} watermark={<Repeat size={160} color={C.patina} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.patina} icon={<Repeat size={24} color={C.white} strokeWidth={2.2} />}>归个人使用＝挪作私用（两种情形之一即私用）</TabChip>
            <IconChip icon={<Users size={26} color={C.white} strokeWidth={2.2} />} tone={C.patina} title="个人落了人情：">
              对方欠的是挪出者的人情，而不是欠挪出者单位的人情
            </IconChip>
            <IconChip icon={<Briefcase size={26} color={C.white} strokeWidth={2.2} />} tone={C.gold} title="个人落了好处：">
              谋取了个人利益
            </IconChip>
            <IconChip icon={<AlertTriangle size={26} color={C.white} strokeWidth={2.2} />} tone={C.rouge} title="挪作公用：">
              不构成挪用公款罪
            </IconChip>
            <Enter delay={60}><ThinU>以单位名义向个人挪用、谋取个人利益，仍是挪作私用</ThinU></Enter>
          </Panel>
        </Enter>
        <Enter delay={30} marker="compare-floor" style={{position: 'absolute', left: 912, right: 0, top: 174, bottom: 0}}>
          <Panel tone={C.rouge} watermark={<Scale size={150} color={C.rouge} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.rouge} icon={<Scale size={24} color={C.white} strokeWidth={2.2} />}>与贪污罪关系·挪用型总结</TabChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.indigo} title="区分＝非法占有目的：">
              贪污罪＝A＋B（不想还）；挪用公款罪＝想还而客观还不了；无法查明时定挪用公款罪
            </IconChip>
            <IconChip icon={<Landmark size={26} color={C.white} strokeWidth={2.2} />} tone={C.rouge} title="四情形→贪污：">
              携带挪用的公款潜逃；虚假发票平账、销毁账目且不归还；截取单位收入不入账；有能力归还而拒不归还
            </IconChip>
            <div style={{display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center'}}>
              <Enter delay={56}><LabelBlock color={C.ward} size={17}>挪用资金罪＝非国家工作人员</LabelBlock></Enter>
              <Enter delay={62}><LabelBlock color={C.rouge} size={17}>挪用公款罪＝国家工作人员</LabelBlock></Enter>
            </div>
            <Enter delay={68} style={{display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap'}}>
              <LabelBlock color={C.patina} size={17}>挪用特定款物罪＝A公用变B公用，无归还意图</LabelBlock>
              <WaxStamp delay={74} tone="indigo">特定款物挪作私用→挪用公款罪</WaxStamp>
            </Enter>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
