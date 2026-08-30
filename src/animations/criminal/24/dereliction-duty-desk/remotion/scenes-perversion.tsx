import {Ban, Gavel, Scale, Users} from 'lucide-react';
import {C, Enter, IconChip, Neg, Panel, Shell, TabChip} from './kit';

export const PerversionJusticeScene = () => {
  /* data-final-knowledge="perversion-panel" data-final-knowledge="bribe-panel" */
  return (
    <Shell code="02" kicker="第一节 · 徇私枉法罪" title="徇私枉法罪·受贿关系">
      <div
        data-layout="perversion-bribe-dual-desk"
        data-visual-anchor="document-fork"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="perversion-panel,bribe-panel"
        data-focal-rule="perversion-of-law-requires-intent-private-motive-and-case-specific-role"
        data-focal-channels="icon,contrast,enclosure,connector"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="perversion-panel" style={{position: 'absolute', left: 0, top: 0, width: 1050, height: 744}}>
          <Panel tone={C.seal} watermark={<Gavel size={180} color={C.seal} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.seal} icon={<Gavel size={24} color={C.white} strokeWidth={2.2} />}>徇私枉法罪（第399条）</TabChip>
            <IconChip icon={<Users size={26} color={C.white} strokeWidth={2.2} />} tone={C.seal} title="主体＝司法工作人员：">
              参与案件办理的侦查、检察、审判、监管人员（治安民警不是）
            </IconChip>
            <IconChip icon={<Gavel size={26} color={C.white} strokeWidth={2.2} />} tone={C.ward} title="法官：">
              在定罪、量刑上徇私枉法
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.amber} title="检察官：">
              在批捕、审查起诉上徇私枉法
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.pulse} title="侦查人员：">
              在立案、强制措施、调查证据上徇私枉法
            </IconChip>
            <IconChip icon={<Gavel size={26} color={C.white} strokeWidth={2.2} />} tone={C.bronze} title="主观＝故意＋徇私动机：">
              为博取名声而枉法也属徇私（2023）
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={18} marker="bribe-panel" style={{position: 'absolute', left: 1074, top: 0, width: 702, height: 744}}>
          <Panel tone={C.steel} watermark={<Scale size={160} color={C.steel} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.steel} icon={<Scale size={24} color={C.white} strokeWidth={2.2} />}>受贿＋四罪 从一重</TabChip>
            <div style={{fontSize: 20, fontWeight: 800, color: C.ink, lineHeight: 1.6, marginTop: 6}}>
              司法工作人员收受贿赂，又有前三款行为（徇私枉法、民事行政枉法裁判、执行失职、执行滥用）→ 依照<Neg size={17}>处罚较重</Neg>的规定定罪处罚（第399条第4款）
            </div>
            <div style={{marginTop: 10}}><TabChip tone={C.seal} icon={<Ban size={22} color={C.white} strokeWidth={2.2} />}>口诀</TabChip></div>
            <div style={{fontSize: 19, fontWeight: 700, color: C.ink, lineHeight: 1.6, marginTop: 4}}>
              四罪受贿从一重，其余一律数罪并罚
            </div>
            <div style={{marginTop: 8, fontSize: 18, fontWeight: 700, color: C.inkSoft}}>
              民事、行政枉法裁判罪：民事、行政审判中故意违背事实和法律，情节严重
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
