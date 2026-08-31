import {Ban, BookmarkCheck, Hand, Layers, Lock, ScrollText, Skull, Wand2} from 'lucide-react';
import {C, Enter, LabelBlock, Mark, Neg, Panel, RowChip, Shell, SoftHi, Stamp, ThinU} from './kit';

export const FictionConversionGateScene = () => (
  <Shell code="03" title="第2款第2句·法律拟制与第二行为的转化">
    <div
      data-layout="second-act-conversion-gate"
      data-visual-anchor="timeline-gate"
      data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
      data-visual-grammar="second-act-outside-conduct,fiction-versus-notice-split"
      data-focal-rule="fiction-requires-a-second-violent-act-causing-death-by-negligence"
      data-focal-channels="icon,enclosure,contrast,spatial"
      style={{position: 'absolute', inset: 0}}
    >
      {/* data-final-knowledge="clause-two-strip" data-final-knowledge="one-versus-two-board" data-final-knowledge="fiction-formula-board" data-final-knowledge="doctrine-split-board" data-final-knowledge="joinder-board" */}
      <Panel
        watermark={<ScrollText size={190} color={C.weft} strokeWidth={1.5} />}
        tone={C.weft}
        style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 92, padding: '10px 22px', display: 'flex', alignItems: 'center', gap: 18}}
        marker="clause-two-strip"
      >
        <Enter delay={3} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <ScrollText size={26} color={C.weft} />
          <LabelBlock size={24} color={C.weft}>第2款第2句</LabelBlock>
        </Enter>
        <Enter delay={17} style={{fontSize: 22, fontWeight: 800}}>
          使用暴力<ThinU color={C.weft}>致人伤残、死亡</ThinU>的，依照故意伤害罪、故意杀人罪的规定定罪处罚
        </Enter>
        <Enter delay={35}><SoftHi tone="weft" size={22}>暴力行为＝拘禁行为之外的第二个行为</SoftHi></Enter>
      </Panel>

      <Panel
        watermark={<Hand size={180} color={C.warp} strokeWidth={1.5} />}
        tone={C.warp}
        style={{position: 'absolute', left: 0, top: 102, width: 868, height: 310, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 9}}
        marker="one-versus-two-board"
      >
        <Enter delay={46}><LabelBlock size={22} color={C.warp}>关键区分 · 一个行为还是两个行为</LabelBlock></Enter>
        <Enter delay={64}>
          <RowChip icon={<Hand size={26} color={C.silk} strokeWidth={2.2} />} tone={C.warp} title="第2款第1句：">
            结果加重犯，只有非法拘禁罪的<Mark color={C.warp}>实行行为</Mark>这一个行为
          </RowChip>
        </Enter>
        <Enter delay={81}>
          <RowChip icon={<Layers size={26} color={C.silk} strokeWidth={2.2} />} tone={C.weft} title="第2款第2句：">
            暴力行为在非法拘禁罪的行为之外，属于<Mark color={C.weft}>第二个行为</Mark>
          </RowChip>
        </Enter>
        <Enter delay={99}>
          <RowChip icon={<Lock size={26} color={C.silk} strokeWidth={2.2} />} tone={C.heddle} title="扇耳光案（泄愤）：">
            甲扇耳光是为泄愤而非拘禁乙，<ThinU color={C.heddle}>不是实行行为</ThinU>，属第二个行为
          </RowChip>
        </Enter>
      </Panel>

      <Panel
        watermark={<Wand2 size={180} color={C.weft} strokeWidth={1.5} />}
        tone={C.weft}
        style={{position: 'absolute', left: 892, top: 102, width: 884, height: 310, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 9}}
        marker="fiction-formula-board"
      >
        <Enter delay={52} style={{display: 'flex', alignItems: 'center', gap: 9}}>
          <Wand2 size={24} color={C.weft} />
          <LabelBlock size={22} color={C.weft}>拟制公式 · 按多数说讲解</LabelBlock>
        </Enter>
        <Enter delay={70}>
          <RowChip icon={<Wand2 size={26} color={C.silk} strokeWidth={2.2} />} tone={C.weft} title="公式：">
            <Lock size={22} color={C.weft} strokeWidth={2.4} /> 非法拘禁罪 + 过失致人死亡 = 故意杀人罪
          </RowChip>
        </Enter>
        <Enter delay={90} style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Stamp delay={90} tone="weft">法律拟制</Stamp>
          <span style={{fontSize: 22, fontWeight: 800, color: C.inkSoft}}>又称转化犯，特事特办</span>
        </Enter>
        <Enter delay={107}>
          <RowChip icon={<Skull size={26} color={C.silk} strokeWidth={2.2} />} tone={C.alert} title="「因」的限定：">
            致伤残、死亡的「因」<Neg size={21}>不能是</Neg>非法拘禁罪的实行行为，否则成立结果加重犯
          </RowChip>
        </Enter>
      </Panel>

      <Panel
        watermark={<BookmarkCheck size={180} color={C.heddle} strokeWidth={1.5} />}
        tone={C.heddle}
        style={{position: 'absolute', left: 0, top: 422, width: 1776, height: 156, padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 8}}
        marker="doctrine-split-board"
      >
        <Enter delay={125}><LabelBlock size={21} color={C.heddle}>条文性质 · 两说对照</LabelBlock></Enter>
        <div style={{display: 'flex', gap: 16}}>
          <Enter delay={139} style={{flex: 1}}>
            <RowChip icon={<Wand2 size={26} color={C.silk} strokeWidth={2.2} />} tone={C.weft} title="多数说 · 法律拟制：">
              「致人伤残、死亡」指<Mark color={C.weft}>过失</Mark>，拟制为故意伤害罪、故意杀人罪（转化犯）
            </RowChip>
          </Enter>
          <Enter delay={157} style={{flex: 1}}>
            <RowChip icon={<BookmarkCheck size={26} color={C.silk} strokeWidth={2.2} />} tone={C.warp} title="少数说 · 注意规定：">
              「致人伤残、死亡」指<Mark color={C.warp}>故意</Mark>，按正常规则以故意伤害罪、故意杀人罪论处
            </RowChip>
          </Enter>
        </div>
      </Panel>

      <Panel
        watermark={<Layers size={180} color={C.moss} strokeWidth={1.5} />}
        tone={C.moss}
        style={{position: 'absolute', left: 0, top: 588, width: 1776, height: 156, padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 8}}
        marker="joinder-board"
      >
        <Enter delay={171}><LabelBlock size={21} color={C.moss}>罪数 · 禁止重复评价与禁止遗漏评价</LabelBlock></Enter>
        <div style={{display: 'flex', gap: 16}}>
          <Enter delay={186} style={{flex: 1}}>
            <RowChip icon={<Ban size={26} color={C.silk} strokeWidth={2.2} />} tone={C.alert} title="过失（拟制）：">
              拟制已评价非法拘禁罪，<Neg size={21}>不能再数罪并罚</Neg>（禁止重复评价）
            </RowChip>
          </Enter>
          <Enter delay={203} style={{flex: 1}}>
            <RowChip icon={<Layers size={26} color={C.silk} strokeWidth={2.2} />} tone={C.moss} title="故意重伤、杀人：">
              正常处理，与非法拘禁罪<Mark color={C.moss}>数罪并罚</Mark>（多数说：禁止遗漏评价）
            </RowChip>
          </Enter>
        </div>
      </Panel>
    </div>
  </Shell>
);
