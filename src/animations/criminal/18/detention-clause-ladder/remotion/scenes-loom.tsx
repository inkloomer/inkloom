import {Ban, Bandage, Crosshair, EyeOff, Hand, Layers, Skull, Split, TrendingUp, Wand2} from 'lucide-react';
import {C, Chip, Enter, LabelBlock, Mark, Panel, RowChip, Shell, ThinU, Weft} from './kit';

const InlineIcon = ({icon, label}: {icon: 'skull' | 'bandage'; label: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap'}}>
    {icon === 'skull' ? <Skull size={22} color={C.alert} strokeWidth={2.4} /> : <Bandage size={22} color={C.heddle} strokeWidth={2.4} />}
    {label}
  </span>
);

export const FourBranchLoomScene = () => (
  <Shell code="04" title="四分法·经线行为类型 × 纬线主观心理">
    <div
      data-layout="warp-weft-verdict-loom"
      data-visual-anchor="comparison-axis"
      data-text-treatments="chip,label-block,soft-highlight,thin-underline"
      data-visual-grammar="conduct-axis-versus-subjective-axis,single-versus-concurrent-offences"
      data-focal-rule="one-conduct-versus-two-conducts-decides-verdict-and-joinder"
      data-focal-channels="icon,contrast,enclosure,spatial"
      style={{position: 'absolute', inset: 0}}
    >
      <Panel
        watermark={<Layers size={190} color={C.heddle} strokeWidth={1.5} />}
        tone={C.heddle}
        style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 92, padding: '10px 22px', display: 'flex', alignItems: 'center', gap: 16}}
        marker="loom-head-strip"
      >
        <Enter delay={3}><LabelBlock size={24} color={C.heddle}>四分法 · 交点织出结论</LabelBlock></Enter>
        <Enter delay={19} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Chip tone="warp" size={20}>经线＝行为类型</Chip>
          <Chip tone="weft" size={20}>纬线＝主观心理</Chip>
        </Enter>
        <Enter delay={32} style={{fontSize: 22, fontWeight: 850}}>
          先看<ThinU color={C.heddle}>几个行为</ThinU>，再看<ThinU color={C.heddle}>过失还是故意</ThinU>
        </Enter>
      </Panel>

      <Panel
        tone={C.wood}
        style={{position: 'absolute', left: 0, top: 102, width: 344, height: 76, padding: '8px 14px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 4}}
        marker="axis-label-board"
      >
        <Enter delay={41}><span style={{fontSize: 22, fontWeight: 950, color: C.warp}}>经线 ↓ 行为类型</span></Enter>
        <Enter delay={51}><span style={{fontSize: 22, fontWeight: 950, color: C.weft}}>纬线 → 主观心理</span></Enter>
      </Panel>

      <Panel
        watermark={<Split size={170} color={C.heddle} strokeWidth={1.5} />}
        tone={C.heddle}
        style={{position: 'absolute', left: 356, top: 102, width: 1420, height: 76, padding: '8px 18px', display: 'flex', gap: 16}}
        marker="weft-head-board"
      >
        <Weft delay={41} style={{flex: 1, display: 'flex', alignItems: 'center', gap: 10, borderRight: `2px dashed ${C.heddle}`}}>
          <EyeOff size={24} color={C.warp} />
          <span style={{fontSize: 22, fontWeight: 950, color: C.warp}}>纬一 · 对重伤、死亡结果持过失</span>
        </Weft>
        <Weft delay={59} style={{flex: 1, display: 'flex', alignItems: 'center', gap: 10}}>
          <Crosshair size={24} color={C.weft} />
          <span style={{fontSize: 22, fontWeight: 950, color: C.weft}}>纬二 · 对重伤、死亡结果持故意</span>
        </Weft>
      </Panel>

      <Panel
        watermark={<Hand size={170} color={C.warp} strokeWidth={1.5} />}
        tone={C.warp}
        style={{position: 'absolute', left: 0, top: 188, width: 344, height: 264, padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10}}
        marker="warp-one-head"
      >
        <Enter delay={70}><LabelBlock size={21} color={C.warp}>经线① · 非法拘禁罪的实行行为</LabelBlock></Enter>
        <Enter delay={84}><Chip tone="warp" size={20}>只有一个行为</Chip></Enter>
        <Enter delay={97}>
          <RowChip icon={<Hand size={24} color={C.silk} strokeWidth={2.2} />} tone={C.warp} title="范例：" size={21}>
            绳子勒得太紧致乙窒息死亡
          </RowChip>
        </Enter>
      </Panel>

      <Panel
        watermark={<TrendingUp size={170} color={C.warp} strokeWidth={1.5} />}
        tone={C.warp}
        style={{position: 'absolute', left: 356, top: 188, width: 710, height: 264, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 10}}
        marker="verdict-warp-one-negligence"
      >
        <Enter delay={108}><Chip tone="warp" size={19}>经线① × 过失</Chip></Enter>
        <Enter delay={122}>
          <RowChip icon={<TrendingUp size={26} color={C.silk} strokeWidth={2.2} />} tone={C.warp} title="结论：">
            非法拘禁罪<Mark color={C.warp}>致人死亡</Mark>（结果加重犯）
          </RowChip>
        </Enter>
        <Enter delay={138}>
          <RowChip icon={<Hand size={26} color={C.silk} strokeWidth={2.2} />} tone={C.moss} title="罪数：">
            一个行为，最终<Mark color={C.moss}>只定一个罪</Mark>
          </RowChip>
        </Enter>
      </Panel>

      <Panel
        watermark={<Split size={170} color={C.weft} strokeWidth={1.5} />}
        tone={C.weft}
        style={{position: 'absolute', left: 1066, top: 188, width: 710, height: 264, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 10}}
        marker="verdict-warp-one-intent"
      >
        <Enter delay={116}><Chip tone="weft" size={19}>经线① × 故意</Chip></Enter>
        <Enter delay={130}>
          <RowChip icon={<Split size={26} color={C.silk} strokeWidth={2.2} />} tone={C.weft} title="结论：">
            与<InlineIcon icon="bandage" label="故意伤害罪（重伤）" />、<InlineIcon icon="skull" label="故意杀人罪" /><Mark color={C.weft}>想象竞合</Mark>，择一重罪论处
          </RowChip>
        </Enter>
        <Enter delay={149}>
          <RowChip icon={<Hand size={26} color={C.silk} strokeWidth={2.2} />} tone={C.moss} title="罪数：">
            一个行为，最终<Mark color={C.moss}>只定一个罪</Mark>
          </RowChip>
        </Enter>
      </Panel>

      <Panel
        watermark={<Layers size={170} color={C.weft} strokeWidth={1.5} />}
        tone={C.weft}
        style={{position: 'absolute', left: 0, top: 462, width: 344, height: 264, padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10}}
        marker="warp-two-head"
      >
        <Enter delay={159}><LabelBlock size={21} color={C.weft}>经线② · 实行行为之外的暴力行为</LabelBlock></Enter>
        <Enter delay={173}><Chip tone="weft" size={20}>前后两个行为</Chip></Enter>
        <Enter delay={186}>
          <RowChip icon={<Layers size={24} color={C.silk} strokeWidth={2.2} />} tone={C.weft} title="范例：" size={21}>
            扇耳光碰巧击中太阳穴致乙死亡
          </RowChip>
        </Enter>
      </Panel>

      <Panel
        watermark={<Wand2 size={170} color={C.heddle} strokeWidth={1.5} />}
        tone={C.heddle}
        style={{position: 'absolute', left: 356, top: 462, width: 710, height: 264, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 10}}
        marker="verdict-warp-two-negligence"
      >
        <Enter delay={197}><Chip tone="heddle" size={19}>经线② × 过失</Chip></Enter>
        <Enter delay={211}>
          <RowChip icon={<Wand2 size={26} color={C.silk} strokeWidth={2.2} />} tone={C.heddle} title="结论：">
            <Mark color={C.heddle}>法律拟制</Mark>为故意伤害罪（重伤）、故意杀人罪
          </RowChip>
        </Enter>
        <Enter delay={227}>
          <RowChip icon={<Ban size={26} color={C.silk} strokeWidth={2.2} />} tone={C.alert} title="罪数：">
            最终<Mark color={C.alert}>只定一罪</Mark>，不得再并罚非法拘禁罪
          </RowChip>
        </Enter>
      </Panel>

      <Panel
        watermark={<Crosshair size={170} color={C.moss} strokeWidth={1.5} />}
        tone={C.moss}
        style={{position: 'absolute', left: 1066, top: 462, width: 710, height: 264, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 10}}
        marker="verdict-warp-two-intent"
      >
        <Enter delay={205}><Chip tone="moss" size={19}>经线② × 故意</Chip></Enter>
        <Enter delay={219}>
          <RowChip icon={<Skull size={26} color={C.silk} strokeWidth={2.2} />} tone={C.moss} title="结论：">
            正常处理，定<InlineIcon icon="bandage" label="故意伤害罪（重伤）" />或<InlineIcon icon="skull" label="故意杀人罪" />
          </RowChip>
        </Enter>
        <Enter delay={238}>
          <RowChip icon={<Layers size={26} color={C.silk} strokeWidth={2.2} />} tone={C.moss} title="罪数：">
            与非法拘禁罪<Mark color={C.moss}>数罪并罚</Mark>（多数说；少数说主张吸收）
          </RowChip>
        </Enter>
      </Panel>
    </div>
  </Shell>
);
