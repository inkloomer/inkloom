import {Ban, Bus, CarFront, Hand, Scale, Siren, Users, Zap} from 'lucide-react';
import {C, Enter, IconChip, Mark, Neg, Panel, Shell, TabChip, ThinU} from './kit';

export const InterfereDrivingPanelScene = () => {
  /* data-final-knowledge="interfere-structure-board" data-final-knowledge="competing-crimes-board" data-final-knowledge="driving-map-board" */
  return (
    <Shell code="06" kicker="第三节 · 交通型犯罪" title="妨害安全驾驶罪：抢方向盘·互殴">
      <div
        data-layout="interfere-driving-split-ward"
        data-visual-anchor="comparison-axis"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="interfere-structure-board,competing-crimes-board"
        data-focal-rule="interfere-driving-is-a-minor-crime-resolved-by-imagination-competition"
        data-focal-channels="icon,contrast,enclosure,connector"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={3} marker="interfere-structure-board" style={{position: 'absolute', left: 0, top: 0, width: 876, height: 744}}>
          <Panel tone={C.siren} watermark={<Bus size={170} color={C.siren} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.siren} icon={<Bus size={24} color={C.white} strokeWidth={2.2} />}>第133条之二 · 两款两类主体</TabChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.siren} title="背景条件：">
              <Mark color={C.siren}>行驶中</Mark>的公共交通工具
            </IconChip>
            <IconChip icon={<Hand size={26} color={C.white} strokeWidth={2.2} />} tone={C.yellow} title="第1款 乘客：">
              对驾驶人员<ThinU color={C.yellow}>使用暴力</ThinU>或<ThinU color={C.yellow}>抢控操纵装置</ThinU>（打司机·抢方向盘）
            </IconChip>
            <IconChip icon={<Users size={26} color={C.white} strokeWidth={2.2} />} tone={C.green} title="第2款 司机（2022年试题）：">
              行驶中<Mark color={C.green}>擅离职守</Mark>，与他人互殴或殴打他人
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.night} title="轻罪定位：">
              危害公共安全程度<ThinU color={C.night}>较小</ThinU>（基本刑1年以下）；达到放火·爆炸相当程度→以危险方法危害公共安全罪
            </IconChip>
          </Panel>
        </Enter>

        <Enter delay={38} marker="competing-crimes-board" style={{position: 'absolute', left: 900, top: 0, width: 876, height: 436}}>
          <Panel tone={C.yellow} watermark={<Zap size={160} color={C.yellow} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <TabChip tone={C.yellow} icon={<Zap size={24} color={C.white} strokeWidth={2.2} />}>罪数 · 与重罪的想象竞合，择一重</TabChip>
            <IconChip icon={<Zap size={24} color={C.white} strokeWidth={2.2} />} tone={C.siren} title="长时间左摇右晃：">
              本罪＋以危险方法危害公共安全罪 → <Mark color={C.siren}>想象竞合</Mark>
            </IconChip>
            <IconChip icon={<Siren size={24} color={C.white} strokeWidth={2.2} />} tone={C.siren} title="同归于尽车掉河死3人（2024）：">
              本罪＋以危险方法＋故意杀人 → 择一重
            </IconChip>
            <IconChip icon={<CarFront size={24} color={C.white} strokeWidth={2.2} />} tone={C.night} title="劫持公交车驶向目的地：">
              本罪＋劫持汽车罪 → 择一重定<Mark color={C.night}>劫持汽车罪</Mark>
            </IconChip>
            <IconChip icon={<Users size={24} color={C.white} strokeWidth={2.2} />} tone={C.green} title="短时间失控轧死行人：">
              本罪＋交通肇事罪 → 择一重定<Mark color={C.green}>交通肇事罪</Mark>
            </IconChip>
          </Panel>
        </Enter>

        <Enter delay={92} marker="driving-map-board" style={{position: 'absolute', left: 900, top: 460, width: 876, height: 284}}>
          <Panel tone={C.night} watermark={<Scale size={140} color={C.night} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <TabChip tone={C.night} icon={<Scale size={24} color={C.white} strokeWidth={2.2} />}>总结 · 驾驶中的罪名区分</TabChip>
            <IconChip icon={<Zap size={24} color={C.white} strokeWidth={2.2} />} tone={C.siren} title="故意·危险达相当程度：">
              以危险方法危害公共安全罪（高速故意逆行）
            </IconChip>
            <IconChip icon={<Bus size={24} color={C.white} strokeWidth={2.2} />} tone={C.yellow} title="故意·未达相当程度：">
              危险驾驶罪 · 妨害安全驾驶罪（醉驾·短时间抢方向盘）
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.white} strokeWidth={2.2} />} tone={C.green} title="过失：">
              交通肇事罪（具体）· 过失以危险方法危害公共安全罪（兜底）
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
