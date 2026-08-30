import {Ban, Eye, FileText, Globe, Lock, Mail, Scale} from 'lucide-react';
import {C, Enter, IconChip, LabelBlock, Neg, Panel, Shell, SoftHi, TabChip, ThinU, WireStamp} from './kit';

export const SecretsCrimesCompareScene = () => {
  /* data-final-knowledge="leak-panel" data-final-knowledge="obtain-panel" data-final-knowledge="tally-floor" */
  return (
    <Shell code="03" kicker="故意泄露国家秘密罪 · 非法获取国家秘密罪" title="国家秘密类犯罪·罪名比较">
      <div
        data-layout="secrets-compare-quad"
        data-visual-anchor="comparison-axis"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="leak-panel,obtain-panel"
        data-focal-rule="distinguish-by-recipient-scope-overlapping-legal-interest-no-cumulative-punishment"
        data-focal-channels="icon,contrast,enclosure,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="leak-panel" style={{position: 'absolute', left: 0, top: 0, width: 888, height: 452}}>
          <Panel tone={C.steel} watermark={<Globe size={170} color={C.steel} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.steel} icon={<Globe size={24} color={C.white} strokeWidth={2.2} />}>与故意泄露国家秘密罪（第398条）：区别在接受方范围</TabChip>
            <IconChip icon={<Globe size={26} color={C.white} strokeWidth={2.2} />} tone={C.steel} title="为境外窃取、刺探、收买、非法提供国家秘密、情报罪：">
              要求为境外机构、人员
            </IconChip>
            <IconChip icon={<Mail size={26} color={C.white} strokeWidth={2.2} />} tone={C.ward} title="故意泄露国家秘密罪：">
              只要求故意泄露，泄露给谁不作要求（境内、境外均可）；国家机关工作人员和非国家机关工作人员均可构成
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.alert} title="泄露给境外机构、人员时：">
              按照为境外非法提供国家秘密罪论处
            </IconChip>
            <Enter delay={56} style={{display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap'}}>
              <SoftHi style={{fontSize: 19 }}>互联网发送给境外机构→为境外非法提供国家秘密罪</SoftHi>
              <SoftHi style={{fontSize: 19 }}>只是在网上公布→故意泄露国家秘密罪</SoftHi>
            </Enter>
          </Panel>
        </Enter>
        <Enter delay={18} marker="obtain-panel" style={{position: 'absolute', left: 912, top: 0, width: 888, height: 452}}>
          <Panel tone={C.wire} watermark={<Eye size={170} color={C.wire} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.wire} icon={<Eye size={24} color={C.white} strokeWidth={2.2} />}>与非法获取国家秘密罪（第282条）</TabChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.pulse} title="主观界限：">
              非法获取国家秘密罪主观上不能是为境外机构、组织、人员获取，否则成立为境外窃取、刺探、收买、非法提供国家秘密、情报罪
            </IconChip>
            <IconChip icon={<FileText size={26} color={C.white} strokeWidth={2.2} />} tone={C.wire} title="获取后又提供给境外：">
              侵害的法益具有同一性，仅以为境外窃取、刺探、收买、非法提供国家秘密罪论处，不再数罪并罚
            </IconChip>
            <IconChip icon={<Lock size={26} color={C.white} strokeWidth={2.2} />} tone={C.brass} title="获取后又故意泄露：">
              重罪吸收轻罪
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={30} marker="tally-floor" style={{position: 'absolute', left: 0, right: 0, top: 476, bottom: 0}}>
          <Panel tone={C.brass} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 8, justifyContent: 'center'}}>
            <TabChip tone={C.brass} icon={<Scale size={24} color={C.white} strokeWidth={2.2} />}>罪数小结</TabChip>
            <div style={{display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center'}}>
              <Enter delay={44}><LabelBlock color={C.steel} size={20}>参加间谍组织＋窃取提供→只定间谍罪</LabelBlock></Enter>
              <Enter delay={52}><LabelBlock color={C.wire} size={20}>获取＋提供给境外→法益同一性，不并罚</LabelBlock></Enter>
              <Enter delay={60}><ThinU>获取＋故意泄露→重罪吸收轻罪</ThinU></Enter>
              <Enter delay={68}><Neg size={19}>非法获取国家秘密罪不能以境外为目的</Neg></Enter>
              <Enter delay={76}><WireStamp delay={76} tone="alert">缩小解释</WireStamp></Enter>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
