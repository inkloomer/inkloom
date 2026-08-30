import {Crosshair, Lock, PlaneTakeoff, Scale, ScrollText, Users} from 'lucide-react';
import {C, Enter, IconChip, Mark, Panel, Shell, SoftHi, TabChip, ThinU, WireStamp} from './kit';

export const SpyWireTrioScene = () => {
  /* data-final-knowledge="spy-panel" data-final-knowledge="defection-panel" data-final-knowledge="tally-floor" */
  return (
    <Shell code="01" kicker="间谍罪 · 叛逃罪" title="间谍罪与叛逃罪">
      <div
        data-layout="spy-trio-wireboard"
        data-visual-anchor="typographic-sequence"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="spy-panel,defection-panel"
        data-focal-rule="espionage-has-three-conduct-types-defection-punishes-leaving-post-during-service"
        data-focal-channels="icon,contrast,enclosure,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="spy-panel" style={{position: 'absolute', left: 0, top: 0, width: 1056, height: 448}}>
          <Panel tone={C.wire} watermark={<Users size={170} color={C.wire} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.wire} icon={<Users size={24} color={C.white} strokeWidth={2.2} />}>间谍罪（第110条）·行为方式三类</TabChip>
            <IconChip icon={<Users size={26} color={C.white} strokeWidth={2.2} />} tone={C.wire} title="参加：">
              参加间谍组织
            </IconChip>
            <IconChip icon={<ScrollText size={26} color={C.white} strokeWidth={2.2} />} tone={C.brass} title="接受：">
              接受间谍组织及其代理人的任务
            </IconChip>
            <IconChip icon={<Crosshair size={26} color={C.white} strokeWidth={2.2} />} tone={C.alert} title="指示轰击目标：">
              为敌人指示轰击目标
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={18} marker="defection-panel" style={{position: 'absolute', left: 1080, top: 0, width: 696, height: 448}}>
          <Panel tone={C.steel} watermark={<PlaneTakeoff size={160} color={C.steel} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.steel} icon={<PlaneTakeoff size={24} color={C.white} strokeWidth={2.2} />}>叛逃罪（第109条）</TabChip>
            <IconChip icon={<PlaneTakeoff size={26} color={C.white} strokeWidth={2.2} />} tone={C.steel} title="行为：">
              国家机关工作人员在履行公务期间，擅离岗位，叛逃境外或者在境外叛逃
            </IconChip>
            <IconChip icon={<Lock size={26} color={C.white} strokeWidth={2.2} />} tone={C.alert} title="从重处罚：">
              掌握国家秘密的国家工作人员叛逃的，从重处罚
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={30} marker="tally-floor" style={{position: 'absolute', left: 0, right: 0, top: 472, bottom: 0}}>
          <Panel tone={C.brass} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.brass} icon={<Scale size={24} color={C.white} strokeWidth={2.2} />}>罪数问题</TabChip>
            <div style={{display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center'}}>
              <Enter delay={44}><SoftHi style={{fontSize: 20 }}>国家机关工作人员叛逃后又参加间谍组织或者接受间谍任务的</SoftHi></Enter>
              <Enter delay={52}><Mark color={C.alert}>触犯叛逃罪（第109条）和间谍罪（第110条）</Mark></Enter>
              <Enter delay={60}><ThinU>两罪并罚规则</ThinU></Enter>
              <Enter delay={68}><WireStamp delay={68} tone="alert">数罪并罚</WireStamp></Enter>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
