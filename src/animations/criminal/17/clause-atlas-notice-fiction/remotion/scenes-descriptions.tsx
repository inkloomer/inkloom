import {BookOpen, Landmark, Link2, ScrollText} from 'lucide-react';
import {C, Enter, IconChip, Mark, Panel, Shell, TabChip} from './kit';

export const CrimeDescriptionFourScene = () => {
  /* data-final-knowledge="carve-simple" data-final-knowledge="carve-detailed" data-final-knowledge="carve-cite" data-final-knowledge="carve-blank" data-final-knowledge="self-admin-fork" data-final-knowledge="method-floor" */
  return (
    <Shell code="02" kicker="第一节 · 罪状" title="罪状：四种类型">
      <div
        data-layout="four-carve-quartet"
        data-visual-anchor="typographic-sequence"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="carve-quartet,self-vs-admin-fork"
        data-focal-rule="four-crime-descriptions-differ-by-what-they-reference"
        data-focal-channels="icon,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="carve-simple" style={{position: 'absolute', left: 0, top: 0, width: 426, height: 288}}>
          <Panel tone={C.night} watermark={<ScrollText size={150} color={C.night} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <TabChip tone={C.night} icon={<ScrollText size={24} color={C.white} strokeWidth={2.2} />}>简单罪状</TabChip>
            <IconChip icon={<ScrollText size={28} color={C.white} strokeWidth={2.2} />} tone={C.night} title="仅罪名式描述：">
              第232条「故意杀人的」
            </IconChip>
            <IconChip icon={<Landmark size={28} color={C.white} strokeWidth={2.2} />} tone={C.qingtian} title="要点：">
              <Mark color={C.qingtian}>不违反</Mark>罪刑法定原则的明确性要求
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={16} marker="carve-detailed" style={{position: 'absolute', left: 450, top: 0, width: 426, height: 288}}>
          <Panel tone={C.qingtian} watermark={<BookOpen size={150} color={C.qingtian} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <TabChip tone={C.qingtian} icon={<BookOpen size={24} color={C.white} strokeWidth={2.2} />}>叙明罪状</TabChip>
            <IconChip icon={<BookOpen size={28} color={C.white} strokeWidth={2.2} />} tone={C.qingtian} title="详细描述：">
              行为类型逐一写明
            </IconChip>
            <IconChip icon={<Landmark size={28} color={C.white} strokeWidth={2.2} />} tone={C.brass} title="地位：">
              最常见的罪状形式
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={26} marker="carve-cite" style={{position: 'absolute', left: 900, top: 0, width: 426, height: 288}}>
          <Panel tone={C.brass} watermark={<Link2 size={150} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <TabChip tone={C.brass} icon={<Link2 size={24} color={C.white} strokeWidth={2.2} />}>引证罪状</TabChip>
            <IconChip icon={<Link2 size={28} color={C.white} strokeWidth={2.2} />} tone={C.brass} title="引用刑法自身条文：">
              第115条第2款「过失犯前款罪的」引用第1款
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={36} marker="carve-blank" style={{position: 'absolute', left: 1350, top: 0, width: 426, height: 288}}>
          <Panel tone={C.cinnabar} watermark={<Landmark size={150} color={C.cinnabar} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <TabChip tone={C.cinnabar} icon={<Landmark size={24} color={C.white} strokeWidth={2.2} />}>空白罪状</TabChip>
            <IconChip icon={<Landmark size={28} color={C.white} strokeWidth={2.2} />} tone={C.cinnabar} title="引用行政法条文：">
              第345条第2款「违反森林法的规定」
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={48} marker="self-admin-fork" style={{position: 'absolute', left: 0, top: 312, width: 1776, height: 180}}>
          <Panel tone={C.cinnabar} style={{height: '100%', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 24}}>
            <TabChip tone={C.cinnabar} icon={<Landmark size={26} color={C.white} strokeWidth={2.2} />}>一分到底（2022年试题）</TabChip>
            <div style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
              引证罪状引用的是<Mark color={C.qingtian}>刑法自身条文</Mark>
              <br />
              空白罪状引用的是<Mark color={C.cinnabar}>行政法条文</Mark>
            </div>
          </Panel>
        </Enter>
        <Enter delay={60} marker="method-floor" style={{position: 'absolute', left: 0, top: 516, width: 1776, height: 228}}>
          <Panel tone={C.qingtian} watermark={<ScrollText size={150} color={C.qingtian} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 20}}>
            <TabChip tone={C.qingtian} icon={<BookOpen size={26} color={C.white} strokeWidth={2.2} />}>判断方法</TabChip>
            <div style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.6}}>
              问一句「这条<Mark color={C.qingtian}>引用了谁</Mark>」
              <br />
              引自己＝引证 · 引行政法规＝空白 · 什么都不引看详略（简略＝简单 · 详尽＝叙明）
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
