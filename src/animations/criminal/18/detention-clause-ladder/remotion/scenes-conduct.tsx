import {Ban, DoorOpen, Footprints, Lock, ScanEye, ScrollText, ShieldQuestion, Unlock} from 'lucide-react';
import {C, Chip, Enter, LabelBlock, Neg, Panel, RowChip, Shell, SoftHi, ThinU} from './kit';

export const ConductDeceptionGateScene = () => (
  <Shell code="01" title="构成要件·拘禁行为与欺骗的分水岭">
    <div
      data-layout="deprivation-conduct-gate"
      data-visual-anchor="boundary"
      data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation"
      data-visual-grammar="conduct-form-triad,deception-cognition-fork"
      data-focal-rule="deception-only-divides-on-victim-perceived-exit"
      data-focal-channels="icon,enclosure,contrast,annotation"
      style={{position: 'absolute', inset: 0}}
    >
      <Panel
        watermark={<ScrollText size={190} color={C.warp} strokeWidth={1.5} />}
        style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 104, padding: '12px 22px', display: 'flex', alignItems: 'center', gap: 20}}
        marker="statute-strip"
      >
        <Enter delay={3} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <ScrollText size={26} color={C.warp} />
          <LabelBlock size={24} color={C.warp}>第238条第1款</LabelBlock>
        </Enter>
        <Enter delay={18} style={{fontSize: 22, fontWeight: 800}}>
          非法拘禁他人或者以其他方法非法剥夺他人<ThinU color={C.warp}>人身自由</ThinU>的
        </Enter>
        <Enter delay={36} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Unlock size={26} color={C.weft} />
          <SoftHi tone="weft" size={22}>核心＝非法「剥夺」人身自由</SoftHi>
        </Enter>
      </Panel>

      <Panel
        watermark={<ShieldQuestion size={180} color={C.moss} strokeWidth={1.5} />}
        tone={C.moss}
        style={{position: 'absolute', left: 0, top: 116, width: 868, height: 300, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 9}}
        marker="conduct-form-board"
      >
        <Enter delay={45} style={{display: 'flex', alignItems: 'center', gap: 9}}>
          <LabelBlock size={22} color={C.moss}>拘禁行为 · 非法剥夺人身自由的三种形态</LabelBlock>
        </Enter>
        <Enter delay={63}>
          <RowChip icon={<ShieldQuestion size={26} color={C.silk} strokeWidth={2.2} />} tone={C.moss} title="报假案骗警察刑拘他人：">
            构成非法拘禁罪的<ThinU color={C.moss}>间接正犯</ThinU>，同时触犯诬告陷害罪
          </RowChip>
        </Enter>
        <Enter delay={81}>
          <RowChip icon={<Footprints size={26} color={C.silk} strokeWidth={2.2} />} tone={C.warp} title="高速驾驶使乘客不敢下车：">
            乘客基于<Mark color={C.warp}>恐惧心理</Mark>无法下车，构成
          </RowChip>
        </Enter>
        <Enter delay={99}>
          <RowChip icon={<DoorOpen size={26} color={C.silk} strokeWidth={2.2} />} tone={C.heddle} title="错关同学后故意不开门：">
            构成<Mark color={C.heddle}>不作为</Mark>的非法拘禁罪
          </RowChip>
        </Enter>
      </Panel>

      <Panel
        watermark={<ScanEye size={180} color={C.weft} strokeWidth={1.5} />}
        tone={C.weft}
        style={{position: 'absolute', left: 892, top: 116, width: 884, height: 300, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 10}}
        marker="deception-fork-board"
      >
        <Enter delay={51} style={{display: 'flex', alignItems: 'center', gap: 9}}>
          <ScanEye size={24} color={C.weft} />
          <LabelBlock size={22} color={C.weft}>欺骗问题 · 唯一分水岭</LabelBlock>
        </Enter>
        <Enter delay={69}>
          <RowChip icon={<Lock size={26} color={C.silk} strokeWidth={2.2} />} tone={C.moss} title="认为自己出不去：">
            欺骗行为使被害人<ThinU color={C.moss}>失去人身自由</ThinU>，构成非法拘禁罪
          </RowChip>
        </Enter>
        <Enter delay={90}>
          <RowChip icon={<Ban size={26} color={C.silk} strokeWidth={2.2} />} tone={C.alert} title="只是不想出去：">
            被害人认为自己<ThinU color={C.alert}>能出去</ThinU>，仅基于动机留下，不构成
          </RowChip>
        </Enter>
      </Panel>

      <Panel
        watermark={<Lock size={180} color={C.moss} strokeWidth={1.5} />}
        tone={C.moss}
        style={{position: 'absolute', left: 0, top: 428, width: 868, height: 316, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 10}}
        marker="verdict-establish-board"
      >
        <Enter delay={114}><LabelBlock size={22} color={C.moss}>结论一 · 欺骗导致「认为自己出不去」→ 构成</LabelBlock></Enter>
        <Enter delay={132}>
          <RowChip icon={<Lock size={26} color={C.silk} strokeWidth={2.2} />} tone={C.moss} title="电梯断电案：">
            甲关闭电源并谎称停电检修 → 甲构成非法拘禁罪
          </RowChip>
        </Enter>
        <Enter delay={150}>
          <RowChip icon={<Lock size={26} color={C.silk} strokeWidth={2.2} />} tone={C.warp} title="故意不降落案：">
            机长欺骗乘客天气不好无法降落 → 机长构成非法拘禁罪
          </RowChip>
        </Enter>
      </Panel>

      <Panel
        watermark={<Ban size={180} color={C.alert} strokeWidth={1.5} />}
        tone={C.alert}
        style={{position: 'absolute', left: 892, top: 428, width: 884, height: 316, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 10}}
        marker="verdict-none-board"
      >
        <Enter delay={120}><LabelBlock size={22} color={C.alert}>结论二 · 只是「不想出去」→ 不构成</LabelBlock></Enter>
        <Enter delay={138}>
          <RowChip icon={<Ban size={26} color={C.silk} strokeWidth={2.2} />} tone={C.alert} title="体检房间案：">
            房门没锁，乙为体检而留在房内 → 甲不构成非法拘禁罪
          </RowChip>
        </Enter>
        <Enter delay={156}>
          <RowChip icon={<Ban size={26} color={C.silk} strokeWidth={2.2} />} tone={C.heddle} title="谎称送回家案：">
            乙要求停车，甲便停车 → 强奸罪预备阶段的中止，甲不构成非法拘禁罪
          </RowChip>
        </Enter>
        <Enter delay={177} style={{fontSize: 22, fontWeight: 850, display: 'flex', alignItems: 'center', gap: 8}}>
          <Chip tone="weft" size={19}>但书</Chip>
          <Neg size={22}>甲若不让乙下车</Neg>→ 构成非法拘禁罪
        </Enter>
      </Panel>
    </div>
  </Shell>
);
