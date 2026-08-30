import {Ban, Gavel, Hourglass, Scale, Users, Zap} from 'lucide-react';
import {C, Chip, Enter, IconChip, Mark, Neg, Panel, Shell, SoftHi, TabChip, ThinU} from './kit';

export const TrafficAccidentWardScene = () => {
  /* data-final-knowledge="elements-panel" data-final-knowledge="escape-panel" data-final-knowledge="death-escape-panel" */
  return (
    <Shell code="03" kicker="第三节 · 交通型犯罪" title="交通肇事罪：成立·逃逸·因逃逸致人死亡">
      <div
        data-layout="traffic-accident-tri-ward"
        data-visual-anchor="main center"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-anchor="timeline-gate" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="elements-panel,escape-panel"
        data-focal-channels="icon,contrast,enclosure,connector" data-focal-rule="traffic-accident-needs-negligence-in-public-traffic-and-escape-needs-awareness"
        data-focal-channels="panel-headings,escape-steps"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="elements-panel" style={{position: 'absolute', left: 0, top: 0, width: 876, height: 356}}>
          <Panel tone={C.siren} watermark={<Zap size={160} color={C.siren} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.siren} icon={<Zap size={24} color={C.white} strokeWidth={2.2} />}>成立条件（基础刑3年以下）</TabChip>
            <IconChip icon={<Users size={26} color={C.white} strokeWidth={2.2} />} tone={C.ward} title="主体不限于驾驶者：">
              乘车人指使司机违章→同罪；公共交通领域含公路·水上（铁路·飞行另有罪）
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.amber} title="实害结果：">
              死1人 / 重伤3人 / 重伤1人＋严重情节（酒驾·毒驾·无照·超载·逃逸）
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.pulse} title="规范保护范围：">
              未年检车无故障撞死横穿者 → 死亡∉规范保护结果 → 不构成
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={18} marker="escape-panel" style={{position: 'absolute', left: 900, top: 0, width: 876, height: 356}}>
          <Panel tone={C.amber} watermark={<Scale size={160} color={C.amber} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.amber} icon={<Hourglass size={24} color={C.white} strokeWidth={2.2} />}>肇事后逃逸（升格3-7年）</TabChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.amber} title="逃逸＝为逃避法律追究而逃跑：">
              前提＝明知发生事故；不知撞人继续开 → 不构成逃逸
            </IconChip>
            <Enter delay={44}><Neg size={19}>逃逸已作成立条件后不能再作升格条件（禁止重复评价）</Neg></Enter>
          </Panel>
        </Enter>
        <Enter delay={30} marker="death-escape-panel" style={{position: 'absolute', left: 0, right: 0, top: 380, bottom: 0}}>
          <Panel tone={C.night} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.night} icon={<Gavel size={24} color={C.white} strokeWidth={2.2} />}>因逃逸致人死亡（升格7-15年）· 不作为犯三步走</TabChip>
            <div style={{display: 'flex', gap: 12, flexWrap: 'wrap'}}>
              <Enter delay={44}><Chip tone="siren" style={{fontSize: 19, whiteSpace: 'normal'}}>应为：先行行为（肇事）产生救助义务</Chip></Enter>
              <Enter delay={52}><Chip tone="siren" style={{fontSize: 19, whiteSpace: 'normal'}}>能为：被打无法救助→∉</Chip></Enter>
              <Enter delay={60}><Chip tone="siren" style={{fontSize: 19, whiteSpace: 'normal'}}>不为：结果避免可能性（救不活→∉）</Chip></Enter>
              <Enter delay={68}><Chip tone="siren" style={{fontSize: 19, whiteSpace: 'normal'}}>等价：单纯逃逸＝遗弃程度·隐藏伤者＝不作为杀人</Chip></Enter>
            </div>
            <Enter delay={76} style={{fontSize: 19, fontWeight: 700, color: C.inkSoft, lineHeight: 1.5}}>
              死得越早对被告人越有利：无法查明死亡时间 → 认定甲直接撞死 → 交通肇事逃逸∉因逃逸致人死亡
            </Enter>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
