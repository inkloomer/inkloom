import {Ban, Flame, Gavel, Scale, Zap} from 'lucide-react';
import {C, Enter, IconChip, Mark, Neg, Panel, Shell, SoftHi, TabChip, ThinU} from './kit';

export const MeaningFireRulersScene = () => {
  /* data-final-knowledge="rulers-panel" data-final-knowledge="fire-relations-panel" data-final-knowledge="poison-vs-fake" */
  return (
    <Shell code="01" kicker="第一节 · 危险方法型犯罪" title="公共安全·两把尺·放火罪等四罪">
      <div
        data-layout="meaning-fire-dual-board"
        data-visual-anchor="main center"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="rulers-panel,fire-relations-panel"
        data-focal-channels="icon,contrast,enclosure,spatial" data-focal-rule="public-safety-needs-uncertain-majority-scope-and-material-damage-content"
        data-focal-channels="panel-headings,relation-tables"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="rulers-panel" style={{position: 'absolute', left: 0, top: 0, width: 876, height: 356}}>
          <Panel tone={C.siren} watermark={<Flame size={160} color={C.siren} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.siren} icon={<Flame size={24} color={C.white} strokeWidth={2.2} />}>公共安全 · 两把尺</TabChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.siren} title="尺一 · 危及范围：">
              灭门案死3人但范围确定→只定故意杀人；食堂锅里投毒死1人→投放危险物质罪（范围可大可小）
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.night} title="尺二 · 危及内容：">
              只限<Mark color={C.siren}>物质性损害</Mark>（人身伤亡·财产损失）；面粉谎称炭疽→投放虚假危险物质罪∉公共安全
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={18} marker="fire-relations-panel" style={{position: 'absolute', left: 900, top: 0, width: 876, height: 356}}>
          <Panel tone={C.amber} watermark={<Gavel size={160} color={C.amber} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.amber} icon={<Gavel size={24} color={C.white} strokeWidth={2.2} />}>放火等四罪 vs 故意杀人罪（2023）</TabChip>
            <IconChip icon={<Flame size={26} color={C.white} strokeWidth={2.2} />} tone={C.siren} title="危害公共安全＋过失死亡：">
              结果加重犯——放火罪（过失）致人死亡（烧仓库案）
            </IconChip>
            <IconChip icon={<Flame size={26} color={C.white} strokeWidth={2.2} />} tone={C.amber} title="危害公共安全＋故意死亡：">
              结果加重犯——放火罪（故意）致人死亡（公交车放火案）
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.night} title="未危害公共安全＋故意死亡：">
              只构成故意杀人罪（独门独户烧住宅案）
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={30} marker="poison-vs-fake" style={{position: 'absolute', left: 0, right: 0, top: 380, bottom: 0}}>
          <Panel tone={C.night} style={{height: '100%', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 20}}>
            <TabChip tone={C.night} icon={<Zap size={26} color={C.white} strokeWidth={2.2} />}>投放危险物质 vs 投放虚假危险物质</TabChip>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              投危险物质罪→保护<Mark color={C.siren}>公共安全</Mark>（投真货·实际危险：狂犬病狗扔垃圾站∈）
              <br />
              投虚假危险物质罪→保护<Mark color={C.ward}>社会管理秩序</Mark>（投假货·心理恐慌∉公共安全）
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
