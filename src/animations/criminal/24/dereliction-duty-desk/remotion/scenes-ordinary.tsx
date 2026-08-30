import {Ban, Gavel, Scale, Users} from 'lucide-react';
import {C, Enter, IconChip, Neg, Panel, Shell, SoftHi, TabChip} from './kit';

export const OrdinaryCrimesScene = () => {
  /* data-final-knowledge="release-panel" data-final-knowledge="nonttransfer-panel" */
  return (
    <Shell code="03" kicker="第二节 · 普通罪名" title="私放在押人员罪·徇私舞弊不移交刑事案件罪">
      <div
        data-layout="ordinary-crimes-dual-desk"
        data-visual-anchor="role-pair"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="release-panel,nonttransfer-panel"
        data-focal-rule="release-needs-intent-and-detained-person-nontransfer-needs-admin-role-and-severe-circumstances"
        data-focal-channels="icon,contrast,enclosure,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="release-panel" style={{position: 'absolute', left: 0, top: 0, width: 876, height: 744}}>
          <Panel tone={C.steel} watermark={<Gavel size={170} color={C.steel} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.steel} icon={<Users size={24} color={C.white} strokeWidth={2.2} />}>私放在押人员罪（第400条）</TabChip>
            <IconChip icon={<Users size={26} color={C.white} strokeWidth={2.2} />} tone={C.steel} title="主体＝司法工作人员：">
              刑事诉讼中的侦查、检察、审判、监管人员
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.steel} title="对象＝在押人员：">
              犯罪嫌疑人、被告人、罪犯
            </IconChip>
            <IconChip icon={<Gavel size={26} color={C.white} strokeWidth={2.2} />} tone={C.pulse} title="主观＝故意：">
              <Neg size={17}>过失对应的罪＝失职致使在押人员脱逃罪</Neg>
            </IconChip>
            <Enter delay={56}><SoftHi style={{fontSize: 19 }}>罪数：私放后又杀害证人→私放在押人员罪与故意杀人罪的帮助犯，想象竞合，择一重罪论处</SoftHi></Enter>
          </Panel>
        </Enter>
        <Enter delay={18} marker="nonttransfer-panel" style={{position: 'absolute', left: 900, top: 0, width: 876, height: 744}}>
          <Panel tone={C.seal} watermark={<Ban size={170} color={C.seal} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.seal} icon={<Ban size={24} color={C.white} strokeWidth={2.2} />}>徇私舞弊不移交刑事案件罪（第402条）</TabChip>
            <IconChip icon={<Users size={26} color={C.white} strokeWidth={2.2} />} tone={C.seal} title="主体＝行政执法人员：">
              市场监管、税务、监察等；警察行政身份可构成，刑事侦查身份属于徇私枉法罪
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.ward} title="行为＝不作为：">
              不移交司法机关，情节严重；积极举动：以罚代刑、毁灭证据
            </IconChip>
            <IconChip icon={<Gavel size={26} color={C.white} strokeWidth={2.2} />} tone={C.pulse} title="主观＝故意＋徇私动机：">
              2023试题：环保执法发现污染环境罪而不移交，构成本罪
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
