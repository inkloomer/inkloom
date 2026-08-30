import {Ban, Gavel, Scale, Users, Zap} from 'lucide-react';
import {C, Enter, IconChip, Mark, OfficialStamp, Panel, Shell, SoftHi, TabChip, ThinU} from './kit';

export const AbuseNegligenceSplitScene = () => {
  /* data-final-knowledge="abuse-panel" data-final-knowledge="negligence-panel" data-final-knowledge="compare-floor" */
  return (
    <Shell code="01" kicker="第一节 · 重点罪名" title="滥用职权罪与玩忽职守罪">
      <div
        data-layout="abuse-negligence-dual-desk"
        data-visual-anchor="comparison-axis"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="abuse-panel,negligence-panel"
        data-focal-rule="abuse-is-intentional-negligence-is-negligent-both-need-major-loss"
        data-focal-channels="icon,contrast,enclosure,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="abuse-panel" style={{position: 'absolute', left: 0, top: 0, width: 876, height: 440}}>
          <Panel tone={C.seal} watermark={<Gavel size={160} color={C.seal} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.seal} icon={<Zap size={24} color={C.white} strokeWidth={2.2} />}>滥用职权罪 · 故意</TabChip>
            <IconChip icon={<Zap size={26} color={C.white} strokeWidth={2.2} />} tone={C.seal} title="擅权：">
              故意不正确履行职责
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.seal} title="弃权：">
              故意不履行应当履行的职责（不作为，袖手旁观案2023）
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.amber} title="越权：">
              超越职权处理事项
            </IconChip>
            <Enter delay={56}><SoftHi style={{fontSize: 19 }}>实害结果：致使公共财产、国家和人民利益遭受重大损失</SoftHi></Enter>
          </Panel>
        </Enter>
        <Enter delay={18} marker="negligence-panel" style={{position: 'absolute', left: 900, top: 0, width: 876, height: 440}}>
          <Panel tone={C.steel} watermark={<Scale size={160} color={C.steel} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.steel} icon={<Scale size={24} color={C.white} strokeWidth={2.2} />}>玩忽职守罪 · 过失</TabChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.steel} title="不履行职责：">
              不作为方式（应当预见但疏忽大意）
            </IconChip>
            <IconChip icon={<Gavel size={26} color={C.white} strokeWidth={2.2} />} tone={C.steel} title="不正确履行：">
              粗心大意履行职责
            </IconChip>
            <Enter delay={48}><SoftHi style={{fontSize: 19 }}>2019：警察以为报警是恶作剧不出警→玩忽职守罪（过失）</SoftHi></Enter>
          </Panel>
        </Enter>
        <Enter delay={30} marker="compare-floor" style={{position: 'absolute', left: 0, right: 0, top: 464, bottom: 0}}>
          <Panel tone={C.bronze} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.bronze} icon={<Users size={24} color={C.white} strokeWidth={2.2} />}>对比总结</TabChip>
            <div style={{display: 'flex', gap: 12, flexWrap: 'wrap'}}>
              <Enter delay={44}><Mark color={C.seal}>滥用＝故意</Mark></Enter>
              <Enter delay={52}><Mark color={C.steel}>玩忽＝过失</Mark></Enter>
              <Enter delay={56}><ThinU>故意/过失是两罪唯一分界</ThinU></Enter>
              <Enter delay={60} style={{fontSize: 19, fontWeight: 700, color: C.inkSoft}}>易错陷阱：不作为的滥用职权≠玩忽职守（袖手旁观案：弃权＝滥用）</Enter>
              <Enter delay={68} style={{fontSize: 19, fontWeight: 700, color: C.inkSoft}}>国有公司企业事业单位人员→另有罪名（第168条）</Enter>
              <Enter delay={76}><OfficialStamp delay={76} tone="bronze">重大损失</OfficialStamp></Enter>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
