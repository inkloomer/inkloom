import {Ban, Gavel, Scale, Users, Zap} from 'lucide-react';
import {C, Enter, IconChip, Neg, Panel, Shell, SoftHi, TabChip} from './kit';

export const FraudExtortionSplitScene = () => {
  /* data-final-knowledge="dispose-panel" data-final-knowledge="dispose-consciousness" data-final-knowledge="triangle-panel" data-final-knowledge="extortion-panel" */
  return (
    <Shell code="05" kicker="第七节 · 诈骗罪" title="诈骗 vs 盗窃（处分）·敲诈勒索">
      <div
        data-layout="fraud-extortion-split-vault"
        data-visual-anchor="comparison-axis"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="dispose-panel,triangle-panel"
        data-focal-rule="fraud-needs-disposition-act-and-consciousness-extortion-keeps-will-freedom"
        data-focal-channels="icon,contrast,enclosure,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="dispose-panel" style={{position: 'absolute', left: 0, top: 0, width: 1050, height: 320}}>
          <Panel tone={C.lock} watermark={<Scale size={160} color={C.lock} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.lock} icon={<Scale size={24} color={C.white} strokeWidth={2.2} />}>诈骗 vs 盗窃 · 关键＝基于认识错误处分财物</TabChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.lock} title="客观处分行为：">
              转移占有的行为（交付·转移占有）——先客观后主观审查
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.seal} title="无处分行为 → 盗窃：">
              调包案·假调虎离山案——被害人没有交付占有
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={18} marker="dispose-consciousness" style={{position: 'absolute', left: 1074, top: 0, width: 702, height: 320}}>
          <Panel tone={C.brass} watermark={<Zap size={160} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.brass} icon={<Zap size={24} color={C.white} strokeWidth={2.2} />}>主观处分意识</TabChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.seal} title="无处分意识 → 盗窃：">
              案例书中夹带案·调包零钱案
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.ward} title="处分数额认识错误：">
              不影响处分意识成立（不影响诈骗既遂）
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={30} marker="triangle-panel" style={{position: 'absolute', left: 0, top: 344, width: 1050, height: 400}}>
          <Panel tone={C.chart2} watermark={<Scale size={160} color={C.chart2} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.chart2} icon={<Scale size={24} color={C.white} strokeWidth={2.2} />}>三角关系（诈骗与盗窃的区分Ⅱ）</TabChip>
            <IconChip icon={<Users size={26} color={C.white} strokeWidth={2.2} />} tone={C.chart2} title="三角诈骗：">
              受骗人（处分人）≠被害人——如诉讼诈骗：法官受骗处分被告财产
            </IconChip>
            <IconChip icon={<Gavel size={26} color={C.white} strokeWidth={2.2} />} tone={C.lock} title="新型三角诈骗：">
              受骗人处分自己占有的被害人财产
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.ward} title="与侵占罪的区分：">
              侵占＝事先已占有（无转移占有）· 盗窃＝破坏他人占有
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={42} marker="extortion-panel" style={{position: 'absolute', left: 1074, top: 344, width: 702, height: 400}}>
          <Panel tone={C.seal} watermark={<Ban size={160} color={C.seal} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.seal} icon={<Ban size={24} color={C.white} strokeWidth={2.2} />}>敲诈勒索 · 与诈骗的关系</TabChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.amber} title="竞合：">
              恐惧心理＋认识错误并存 → 敲诈勒索与诈骗的想象竞合
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.seal} title="编造恐吓信息型：">
              被害人无恐惧只有认识错误 → 诈骗罪
            </IconChip>
            <Enter delay={56}><SoftHi style={{fontSize: 18 }}>行使权利：目的正当·手段相当·不过限 → 不构成敲诈勒索</SoftHi></Enter>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
