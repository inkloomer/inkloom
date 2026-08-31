import {Crosshair, EyeOff, Hand, Lock, ScrollText, Split, TrendingUp, Zap} from 'lucide-react';
import {C, Chip, Enter, LabelBlock, Mark, Neg, Panel, RowChip, Shell, SoftHi, Stamp, ThinU} from './kit';

export const AggravatedResultChainScene = () => (
  <Shell code="02" title="第2款第1句·结果加重犯的因果链">
    <div
      data-layout="causation-chain-lane"
      data-visual-anchor="flow-path"
      data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
      data-visual-grammar="conduct-cause-requirement,intervention-abnormality-fork"
      data-focal-rule="aggravated-result-requires-conduct-cause-plus-negligence"
      data-focal-channels="icon,connector,contrast,enclosure"
      style={{position: 'absolute', inset: 0}}
    >
      {/* data-final-knowledge="clause-strip" data-final-knowledge="cause-board" data-final-knowledge="intervention-board" data-final-knowledge="negligence-board" data-final-knowledge="intent-board" */}
      <Panel
        watermark={<ScrollText size={190} color={C.warp} strokeWidth={1.5} />}
        style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 104, padding: '12px 22px', display: 'flex', alignItems: 'center', gap: 18}}
        marker="clause-strip"
      >
        <Enter delay={3} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <ScrollText size={26} color={C.warp} />
          <LabelBlock size={24} color={C.warp}>第2款第1句</LabelBlock>
        </Enter>
        <Enter delay={18} style={{fontSize: 22, fontWeight: 800}}>
          犯前款罪，<ThinU color={C.warp}>致人重伤、死亡</ThinU>的，加重法定刑
        </Enter>
        <Enter delay={36} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <SoftHi tone="warp" size={22}>本罪的结果加重犯</SoftHi>
          <Chip tone="warp" size={20}>非法拘禁罪（过失）致人重伤、死亡</Chip>
          <Stamp delay={51} tone="warp">结果加重犯</Stamp>
        </Enter>
      </Panel>

      <Panel
        watermark={<Hand size={180} color={C.moss} strokeWidth={1.5} />}
        tone={C.moss}
        style={{position: 'absolute', left: 0, top: 116, width: 868, height: 290, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 10}}
        marker="cause-board"
      >
        <Enter delay={60}><LabelBlock size={22} color={C.moss}>「因」的要求 · 必须是本罪的实行行为</LabelBlock></Enter>
        <Enter delay={78}>
          <RowChip icon={<Hand size={26} color={C.silk} strokeWidth={2.2} />} tone={C.moss} title="判断标准：">
            <ThinU color={C.moss}>行为与故意或目的同时存在原则</ThinU>
          </RowChip>
        </Enter>
        <Enter delay={96}>
          <RowChip icon={<Lock size={26} color={C.silk} strokeWidth={2.2} />} tone={C.warp} title="绳子勒得太紧案：">
            捆绑行为是拘禁的<Mark color={C.warp}>实行行为</Mark>，乙窒息死亡 → 构成非法拘禁罪致人死亡
          </RowChip>
        </Enter>
      </Panel>

      <Panel
        watermark={<Zap size={180} color={C.weft} strokeWidth={1.5} />}
        tone={C.weft}
        style={{position: 'absolute', left: 892, top: 116, width: 884, height: 290, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 10}}
        marker="intervention-board"
      >
        <Enter delay={66} style={{display: 'flex', alignItems: 'center', gap: 9}}>
          <Zap size={24} color={C.weft} />
          <LabelBlock size={21} color={C.weft}>「因」与「果」要有因果关系 · 看介入因素</LabelBlock>
        </Enter>
        <Enter delay={84}>
          <RowChip icon={<Zap size={26} color={C.silk} strokeWidth={2.2} />} tone={C.alert} title="异常介入（跳楼自杀）：">
            乙为躲债跳楼身亡，<Neg size={21}>无因果关系</Neg> → 不构成非法拘禁罪致人死亡
          </RowChip>
        </Enter>
        <Enter delay={105}>
          <RowChip icon={<Zap size={26} color={C.silk} strokeWidth={2.2} />} tone={C.moss} title="不异常介入（逃跑跌落）：">
            乙挣脱后逃跑时不慎坠楼身亡，<Mark color={C.moss}>有因果关系</Mark> → 构成非法拘禁罪致人死亡
          </RowChip>
        </Enter>
      </Panel>

      <Panel
        watermark={<EyeOff size={180} color={C.warp} strokeWidth={1.5} />}
        tone={C.warp}
        style={{position: 'absolute', left: 0, top: 418, width: 868, height: 326, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 10}}
        marker="negligence-board"
      >
        <Enter delay={126} style={{display: 'flex', alignItems: 'center', gap: 9}}>
          <EyeOff size={24} color={C.warp} />
          <LabelBlock size={22} color={C.warp}>主观 · 对加重结果持过失心理</LabelBlock>
        </Enter>
        <Enter delay={144}>
          <RowChip icon={<EyeOff size={26} color={C.silk} strokeWidth={2.2} />} tone={C.warp} title="过失：">
            成立非法拘禁罪致人重伤、死亡（<ThinU color={C.warp}>结果加重犯</ThinU>）
          </RowChip>
        </Enter>
        <Enter delay={162}>
          <RowChip icon={<TrendingUp size={26} color={C.silk} strokeWidth={2.2} />} tone={C.moss} title="罪数：">
            一个行为，最终<Mark color={C.moss}>只定一个罪</Mark>
          </RowChip>
        </Enter>
      </Panel>

      <Panel
        watermark={<Crosshair size={180} color={C.weft} strokeWidth={1.5} />}
        tone={C.weft}
        style={{position: 'absolute', left: 892, top: 418, width: 884, height: 326, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 10}}
        marker="intent-board"
      >
        <Enter delay={132} style={{display: 'flex', alignItems: 'center', gap: 9}}>
          <Crosshair size={24} color={C.weft} />
          <LabelBlock size={22} color={C.weft}>主观 · 对加重结果持故意心理</LabelBlock>
        </Enter>
        <Enter delay={150}>
          <RowChip icon={<Crosshair size={26} color={C.silk} strokeWidth={2.2} />} tone={C.weft} title="故意（放任）：">
            <Neg size={21}>不属于</Neg>非法拘禁罪致人重伤、死亡
          </RowChip>
        </Enter>
        <Enter delay={168}>
          <RowChip icon={<Split size={26} color={C.silk} strokeWidth={2.2} />} tone={C.heddle} title="反扭胳膊致重伤案：">
            伤害行为也是拘禁的实行行为，一个行为同时触犯两罪，<Mark color={C.heddle}>想象竞合</Mark>择一重，定故意伤害罪（重伤）
          </RowChip>
        </Enter>
      </Panel>
    </div>
  </Shell>
);
