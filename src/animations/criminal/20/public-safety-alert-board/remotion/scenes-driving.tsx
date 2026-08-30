import {Ban, Gavel, Scale, Zap} from 'lucide-react';
import {C, Chip, Enter, IconChip, Panel, Shell, SoftHi, TabChip} from './kit';

export const DrivingGunsSafetyScene = () => {
  /* data-final-knowledge="driving-panel" data-final-knowledge="guns-panel" data-final-knowledge="safety-panel" */
  return (
    <Shell code="04" kicker="第三节·第四节·第六节" title="危险驾驶·枪支犯罪·安全生产犯罪">
      <div
        data-layout="driving-guns-safety-tri-ward"
        data-visual-anchor="main center"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="driving-panel,guns-panel"
        data-focal-channels="icon,contrast,enclosure,connector" data-focal-rule="dangerous-driving-is-intentional-specific-danger-and-safety-crimes-are-negligent-actual-harm"
        data-focal-channels="panel-headings,drink-table"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="driving-panel" style={{position: 'absolute', left: 0, top: 0, width: 1050, height: 356}}>
          <Panel tone={C.pulse} watermark={<Zap size={160} color={C.pulse} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <TabChip tone={C.pulse} icon={<Zap size={24} color={C.white} strokeWidth={2.2} />}>危险驾驶罪（故意·具体危险·拘役）</TabChip>
            <IconChip icon={<Ban size={24} color={C.white} strokeWidth={2.2} />} tone={C.pulse} title="四情形：">
              追逐竞驶 · 醉酒驾驶 · 校车客车严重超员超速 · 违规运输危化品
            </IconChip>
            <IconChip icon={<Scale size={24} color={C.white} strokeWidth={2.2} />} tone={C.chart2} title="醉驾80mg门槛：">
              80-150无严重情节→无罪 · 150以上→有罪 · 80+严重情节（毒驾·高速·载客）→有罪
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.white} strokeWidth={2.2} />} tone={C.ward} title="道路不限公路：">
              广场·公共停车场∈；仅单位内部车∉（公共性判断）
            </IconChip>
            <Enter delay={56}><SoftHi style={{fontSize: 18 }}>急救伤病紧急驾驶（2022）→ 紧急避险·不构成</SoftHi></Enter>
          </Panel>
        </Enter>
        <Enter delay={18} marker="guns-panel" style={{position: 'absolute', left: 1074, top: 0, width: 702, height: 356}}>
          <Panel tone={C.chart2} watermark={<Gavel size={160} color={C.chart2} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <TabChip tone={C.chart2} icon={<Gavel size={24} color={C.white} strokeWidth={2.2} />}>枪支类犯罪</TabChip>
            <IconChip icon={<Ban size={24} color={C.white} strokeWidth={2.2} />} tone={C.pulse} title="持有vs储存：">
              数量少量＝持有·大量＝储存；携带进公共场所＝携带型
            </IconChip>
            <IconChip icon={<Scale size={24} color={C.white} strokeWidth={2.2} />} tone={C.ward} title="出租出借枪支罪：">
              公务用枪→出借即罪；配置枪→出借造成严重后果才罪；质押枪→非法出借
            </IconChip>
            <IconChip icon={<Gavel size={24} color={C.white} strokeWidth={2.2} />} tone={C.amber} title="丢失枪支不报：">
              严重危险＋不报告＝真正不作为犯
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={30} marker="safety-panel" style={{position: 'absolute', left: 0, right: 0, top: 380, bottom: 0}}>
          <Panel tone={C.ward} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.ward} icon={<Gavel size={24} color={C.white} strokeWidth={2.2} />}>安全生产领域 · 危险犯→故意 · 实害→过失</TabChip>
            <div style={{display: 'flex', gap: 14}}>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 6}}>
                <Enter delay={44}><IconChip icon={<Zap size={22} color={C.white} strokeWidth={2.2} />} tone={C.pulse} title="危险作业罪（具体危险·故意）：">
                  生产中违反安全管理规定→现实危险
                </IconChip></Enter>
                <Enter delay={54}><IconChip icon={<Gavel size={22} color={C.white} strokeWidth={2.2} />} tone={C.amber} title="重大责任事故罪（过失）：">
                  操作·作业有问题→实害结果
                </IconChip></Enter>
              </div>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 6}}>
                <Enter delay={64}><IconChip icon={<Scale size={22} color={C.white} strokeWidth={2.2} />} tone={C.chart2} title="重大劳动安全事故罪：">
                  设备·安全生产条件不符合→实害
                </IconChip></Enter>
                <Enter delay={74}><IconChip icon={<Ban size={22} color={C.white} strokeWidth={2.2} />} tone={C.night} title="记忆规律：">
                  危险犯（具体危险）→故意犯罪 · 实害结果→过失犯罪（2025）
                </IconChip></Enter>
              </div>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
