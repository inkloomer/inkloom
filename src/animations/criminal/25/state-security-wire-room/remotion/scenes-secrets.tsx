import {Ban, FileText, Lock, Scale, Users} from 'lucide-react';
import {C, Enter, IconChip, LabelBlock, Neg, Panel, Shell, SoftHi, TabChip, WireStamp} from './kit';

export const SecretsDefineBenchScene = () => {
  /* data-final-knowledge="define-strip" data-final-knowledge="fork-panel" */
  return (
    <Shell code="02" kicker="为境外窃取、刺探、收买、非法提供国家秘密、情报罪" title="国家秘密类犯罪·缩小解释">
      <div
        data-layout="secrets-define-bench"
        data-visual-anchor="document-fork"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="define-strip,fork-panel"
        data-focal-rule="intelligence-narrows-to-national-security-matters-knowing-spynet-yields-espionage-only"
        data-focal-channels="icon,contrast,enclosure,connector"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="define-strip" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 148}}>
          <Panel tone={C.brass} watermark={<Lock size={110} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', padding: '10px 18px', display: 'flex', flexDirection: 'column', gap: 6, justifyContent: 'center'}}>
            <TabChip tone={C.brass} icon={<Lock size={22} color={C.white} strokeWidth={2.2} />}>“情报”须作缩小解释（第111条）</TabChip>
            <div style={{fontSize: 20, fontWeight: 800, color: C.ink, lineHeight: 1.5}}>
              只包括<SoftHi style={{fontSize: 19 }}>关系国家安全和利益、尚未公开或依照有关规定不应公开</SoftHi>的事项；不包括一般的情报
            </div>
          </Panel>
        </Enter>
        <Enter delay={18} marker="fork-panel" style={{position: 'absolute', left: 0, right: 0, top: 172, bottom: 0}}>
          <Panel tone={C.wire} watermark={<FileText size={170} color={C.wire} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.wire} icon={<Users size={24} color={C.white} strokeWidth={2.2} />}>本罪与间谍罪：明知与否的分岔</TabChip>
            <IconChip icon={<Users size={26} color={C.white} strokeWidth={2.2} />} tone={C.wire} title="既参加间谍组织，又窃取、刺探、收买、非法提供：">
              只定间谍罪
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.brass} title="明知对方是间谍组织而为其提供：">
              属于“接受间谍组织的任务”，只定间谍罪
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.pulse} title="不明知对方是间谍组织而为其提供：">
              定为境外窃取、刺探、收买、非法提供国家秘密、情报罪
            </IconChip>
            <Enter delay={56} style={{display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap'}}>
              <LabelBlock color={C.alert} size={20}>2011年第5题</LabelBlock>
              <SoftHi style={{fontSize: 19 }}>甲没有认识到对方是境外机构，为对方非法提供国家秘密</SoftHi>
              <Neg size={19}>不成立为境外非法提供国家秘密罪（缺乏故意）</Neg>
              <WireStamp delay={70} tone="steel">成立故意泄露国家秘密罪</WireStamp>
            </Enter>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
