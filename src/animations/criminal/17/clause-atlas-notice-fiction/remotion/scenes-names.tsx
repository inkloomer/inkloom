import {Ban, Bookmark, Copy, GraduationCap, Layers, Milestone, Users, Zap} from 'lucide-react';
import {Chip, C, Enter, IconChip, Mark, Panel, Shell, SoftHi, TabChip, ThinU} from './kit';

export const CrimeNameThreeFormsScene = () => {
  /* data-final-knowledge="form-single" data-final-knowledge="form-selective" data-final-knowledge="form-general" data-final-knowledge="selective-no-merge" data-final-knowledge="misrecognition-board" */
  return (
    <Shell code="01" kicker="第一节 · 罪名" title="罪名：单一 · 选择 · 概括">
      <div
        data-layout="three-form-seal-shelf"
        data-visual-anchor="comparison-axis"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="form-trio-shelf,misrecognition-by-objective"
        data-focal-rule="seal-forms-decide-whether-names-split-combine-or-stay-whole"
        data-focal-channels="icon,contrast,enclosure,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="form-single" style={{position: 'absolute', left: 0, top: 0, width: 420, height: 274}}>
          <Panel tone={C.night} watermark={<Milestone size={150} color={C.night} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <TabChip tone={C.night} icon={<Milestone size={24} color={C.white} strokeWidth={2.2} />}>单一罪名</TabChip>
            <IconChip icon={<Milestone size={28} color={C.white} strokeWidth={2.2} />} tone={C.night} title="一个条文一个罪名：">
              <Mark color={C.night}>不能分拆</Mark>使用
            </IconChip>
            <IconChip icon={<Copy size={28} color={C.white} strokeWidth={2.2} />} tone={C.brass} title="例：">
              第232条＝故意杀人罪
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={18} marker="form-selective" style={{position: 'absolute', left: 444, top: 0, width: 640, height: 274}}>
          <Panel tone={C.qingtian} watermark={<Layers size={150} color={C.qingtian} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.qingtian} icon={<Layers size={24} color={C.white} strokeWidth={2.2} />}>选择性罪名</TabChip>
            <IconChip icon={<Zap size={28} color={C.white} strokeWidth={2.2} />} tone={C.qingtian} title="行为选择型：">
              引诱 · 容留 · 介绍卖淫罪
            </IconChip>
            <IconChip icon={<Users size={28} color={C.white} strokeWidth={2.2} />} tone={C.brass} title="对象选择型：">
              拐卖妇女 · 儿童罪
            </IconChip>
            <IconChip icon={<Layers size={28} color={C.white} strokeWidth={2.2} />} tone={C.cinnabar} title="混合选择型：">
              非法制造 · 买卖 · 运输 · 邮寄 · 储存枪支 · 弹药 · 爆炸物罪
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={30} marker="form-general" style={{position: 'absolute', left: 1108, top: 0, width: 668, height: 274}}>
          <Panel tone={C.cinnabar} watermark={<Bookmark size={150} color={C.cinnabar} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.cinnabar} icon={<Bookmark size={24} color={C.white} strokeWidth={2.2} />}>概括罪名</TabChip>
            <IconChip icon={<Ban size={28} color={C.white} strokeWidth={2.2} />} tone={C.cinnabar} title="只能概括使用：">
              没有「恶意透支罪」——四类型全实施也只定信用卡诈骗罪一罪
            </IconChip>
            <IconChip icon={<Copy size={28} color={C.white} strokeWidth={2.2} />} tone={C.brass} title="对比记忆：">
              选择性＝可分可合 · 概括＝只合不分
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={44} marker="selective-no-merge" style={{position: 'absolute', left: 0, top: 298, width: 1050, height: 446}}>
          <Panel tone={C.brass} watermark={<Layers size={160} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 20px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <TabChip tone={C.brass} icon={<Users size={24} color={C.white} strokeWidth={2.2} />}>对象不止一个 · 仍概括使用</TabChip>
            <IconChip icon={<Users size={28} color={C.white} strokeWidth={2.2} />} tone={C.qingtian} title="既拐妇女又拐儿童：">
              只定拐卖妇女 · 儿童罪 —— 不并罚
            </IconChip>
            <IconChip icon={<Users size={28} color={C.white} strokeWidth={2.2} />} tone={C.brass} title="引诱甲 · 容留乙 · 介绍丙：">
              三人均已成年 → 只定引诱 · 容留 · 介绍卖淫罪
            </IconChip>
            <IconChip icon={<Users size={28} color={C.white} strokeWidth={2.2} />} tone={C.cinnabar} title="出售假人民币 · 购买假美元 · 运输假欧元：">
              只定出售 · 购买 · 运输假币罪
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={58} marker="misrecognition-board" style={{position: 'absolute', left: 1074, top: 298, width: 702, height: 446}}>
          <Panel tone={C.cinnabar} watermark={<GraduationCap size={160} color={C.cinnabar} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <TabChip tone={C.cinnabar} icon={<GraduationCap size={24} color={C.white} strokeWidth={2.2} />}>拐卖妇女案（2021年试题）</TabChip>
            <div style={{fontSize: 21, fontWeight: 870, color: C.ink, lineHeight: 1.55}}>
              欲拐卖男童 · 误将 <Mark color={C.cinnabar}>15周岁乙女</Mark> 当作男童予以拐卖
              <br />
              选择性对象之间的对象认识错误 → 按<Mark color={C.cinnabar}>客观</Mark>定
            </div>
            <Enter delay={70} style={{marginTop: 4}}><SoftHi style={{fontSize: 22 }}>客观上是拐卖妇女 → 按客观定罪名</SoftHi></Enter>
            <Enter delay={84} style={{marginTop: 4}}><Chip tone="cinnabar" style={{fontSize: 22 }}>结论：拐卖妇女罪既遂</Chip></Enter>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
