import {Ban, Gavel, Scale, ShieldCheck, Users} from 'lucide-react';
import {C, Enter, IconChip, Mark, Panel, Shell, SoftHi, TabChip, ThinU} from './kit';

export const InterestThreeModelsScene = () => {
  /* data-final-knowledge="models-panel" data-final-knowledge="model-1" data-final-knowledge="model-2" data-final-knowledge="model-3" data-final-knowledge="rank-floor" */
  return (
    <Shell code="01" kicker="第一节 · 保护法益" title="财产法益三层次·三模型">
      <div
        data-layout="three-model-vault-board"
        data-visual-anchor="comparison-axis"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="model-1,model-2,model-3"
        data-focal-rule="legal-possession-outranks-ownership-outranks-illegal-possession"
        data-focal-channels="icon,contrast,enclosure,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="models-panel" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 88}}>
          <Panel tone={C.lock} style={{height: '100%', padding: '10px 22px', display: 'flex', alignItems: 'center', gap: 16}}>
            <TabChip tone={C.lock} icon={<Scale size={24} color={C.white} strokeWidth={2.2} />}>保护法益三层次</TabChip>
            <div style={{fontSize: 22, fontWeight: 900, color: C.ink}}>
              <Mark color={C.lock}>合法占有</Mark> ＞ <Mark color={C.brass}>所有权</Mark> ＞ <Mark color={C.seal}>非法占有</Mark> ＞ 一般人
            </div>
          </Panel>
        </Enter>
        <Enter delay={18} marker="model-1" style={{position: 'absolute', left: 0, top: 112, width: 566, height: 388}}>
          <Panel tone={C.lock} watermark={<Gavel size={160} color={C.lock} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.lock} icon={<Gavel size={24} color={C.white} strokeWidth={2.2} />}>模型1 · 第三人偷非法占有物</TabChip>
            <IconChip icon={<Gavel size={26} color={C.white} strokeWidth={2.2} />} tone={C.lock} title="甲盗乙车·丙再从甲处盗：">
              丙<Mark color={C.lock}>构成盗窃罪</Mark>
            </IconChip>
            <IconChip icon={<ShieldCheck size={26} color={C.white} strokeWidth={2.2} />} tone={C.brass} title="理由：">
              达到<Mark color={C.brass}>平稳状态</Mark>的非法占有受刑法保护·不允许黑吃黑
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.seal} title="未平稳：">
              可对其实施正当防卫挽回
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={30} marker="model-2" style={{position: 'absolute', left: 590, top: 112, width: 566, height: 388}}>
          <Panel tone={C.brass} watermark={<ShieldCheck size={160} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.brass} icon={<ShieldCheck size={24} color={C.white} strokeWidth={2.2} />}>模型2 · 所有权人偷回非法占有物</TabChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.lock} title="多数说：">
              乙偷回自己的电瓶车·<Mark color={C.lock}>不构成盗窃罪</Mark>
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.brass} title="理由：">
              非法占有<Mark color={C.seal}>不能对抗所有权人</Mark>·恢复权利无非法占有目的
            </IconChip>
            <IconChip icon={<Gavel size={26} color={C.white} strokeWidth={2.2} />} tone={C.seal} title="少数说：">
              应通过法律程序救济·保护财产秩序
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={42} marker="model-3" style={{position: 'absolute', left: 1180, top: 112, width: 596, height: 388}}>
          <Panel tone={C.seal} watermark={<Users size={160} color={C.seal} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.seal} icon={<Users size={24} color={C.white} strokeWidth={2.2} />}>模型3 · 所有权人偷回合法占有物</TabChip>
            <IconChip icon={<Gavel size={26} color={C.white} strokeWidth={2.2} />} tone={C.seal} title="多数说（官方）：">
              乙偷回借给甲的车·<Mark color={C.seal}>构成盗窃罪</Mark>
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.lock} title="理由：">
              <Mark color={C.lock}>合法占有能对抗所有权人</Mark>·偷回具有非法占有目的
            </IconChip>
            <Enter delay={56}><SoftHi style={{fontSize: 19 }}>成立盗窃罪只要求非法占有目的·不要求非法所有目的</SoftHi></Enter>
          </Panel>
        </Enter>
        <Enter delay={54} marker="rank-floor" style={{position: 'absolute', left: 0, right: 0, top: 524, bottom: 0}}>
          <Panel tone={C.brass} style={{height: '100%', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 18}}>
            <TabChip tone={C.brass} icon={<Scale size={26} color={C.white} strokeWidth={2.2} />}>偷回电瓶车案</TabChip>
            <div style={{fontSize: 22, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
              小芳从狗蛋家偷回自己的电瓶车 → 模型2 → 多数说<Mark color={C.lock}>不构成盗窃罪</Mark>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
