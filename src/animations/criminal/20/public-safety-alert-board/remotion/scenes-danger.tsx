import {Ban, Gavel, Scale, Users, Zap} from 'lucide-react';
import {C, Chip, Enter, IconChip, Mark, Neg, Panel, Shell, SoftHi, TabChip, ThinU} from './kit';

export const DangerMethodsFloorScene = () => {
  /* data-final-knowledge="five-points-panel" data-final-knowledge="seven-ways-panel" data-final-knowledge="destruction-panel" */
  return (
    <Shell code="02" kicker="第一节 · 以危险方法危害公共安全罪" title="以危险方法危害公共安全罪·破坏型犯罪">
      <div
        data-layout="danger-methods-tri-vault"
        data-visual-anchor="main center"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-anchor="boundary" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="five-points-panel,seven-ways-panel"
        data-focal-channels="icon,contrast,enclosure,connector" data-focal-rule="danger-methods-is-a-supplementary-crime-requiring-specific-danger-equal-to-arson"
        data-focal-channels="panel-headings,way-verdicts"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="five-points-panel" style={{position: 'absolute', left: 0, top: 0, width: 876, height: 744}}>
          <Panel tone={C.siren} watermark={<Zap size={180} color={C.siren} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.siren} icon={<Zap size={24} color={C.white} strokeWidth={2.2} />}>五要点 · 兜底≠降格</TabChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.siren} title="① 危险性质＝具体危险：">
              盗窃消防栓铜芯只有抽象危险 → 仅盗窃罪（2023）
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.night} title="② 危险内容＝物质性损害：">
              面粉谎称炭疽→投放虚假危险物质罪（心理恐慌∉）
            </IconChip>
            <IconChip icon={<Users size={26} color={C.white} strokeWidth={2.2} />} tone={C.night} title="③ 危险样态＝危及多数人：">
              刀刺多名学生→数个故意伤害罪∉本罪
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.yellow} title="④ 危险程度＝与放火罪相同：">
              高速路小火堆→达不到放火程度也达不到本罪
            </IconChip>
            <IconChip icon={<Gavel size={26} color={C.white} strokeWidth={2.2} />} tone={C.green} title="⑤ 适用顺序＝补充罪名：">
              能定其他罪优先（劫持火车→破坏交通工具罪·盗井盖→破坏交通设施罪）
            </IconChip>
            <Enter delay={56}><SoftHi style={{fontSize: 19 }}>七情形口诀：电器井煤邪病驾（电网·器材·矿井·瓦斯·邪教·传染病·危险驾驶）</SoftHi></Enter>
          </Panel>
        </Enter>
        <Enter delay={18} marker="seven-ways-panel" style={{position: 'absolute', left: 900, top: 0, width: 876, height: 234}}>
          <Panel tone={C.yellow} watermark={<Zap size={150} color={C.yellow} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <TabChip tone={C.yellow} icon={<Zap size={24} color={C.white} strokeWidth={2.2} />}>七情形（司法解释）</TabChip>
            <Enter delay={36} style={{fontSize: 20, fontWeight: 800, color: C.ink, lineHeight: 1.6, display: 'flex', flexWrap: 'wrap', gap: 8}}>
              <Chip tone="siren" style={{fontSize: 19}}>私拉电网</Chip>
              <Chip tone="siren" style={{fontSize: 19}}>破坏消防器材</Chip>
              <Chip tone="siren" style={{fontSize: 19}}>破坏矿井通风</Chip>
              <Chip tone="siren" style={{fontSize: 19}}>瓦斯下令下井</Chip>
              <Chip tone="siren" style={{fontSize: 19}}>邪教自焚自爆</Chip>
              <Chip tone="siren" style={{fontSize: 19}}>故意传播病原体</Chip>
              <Chip tone="siren" style={{fontSize: 19}}>危险驾驶</Chip>
            </Enter>
          </Panel>
        </Enter>
        <Enter delay={30} marker="destruction-panel" style={{position: 'absolute', left: 900, top: 258, width: 876, height: 486}}>
          <Panel tone={C.night} watermark={<Scale size={160} color={C.night} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.night} icon={<Scale size={24} color={C.white} strokeWidth={2.2} />}>破坏型犯罪（交通工具·设施·电力）</TabChip>
            <IconChip icon={<Zap size={24} color={C.white} strokeWidth={2.2} />} tone={C.siren} title="破坏交通工具罪：">
              破坏刹车→∈（足以倾覆）；破坏座椅∉；卸全部车轮∉（已躺地）
            </IconChip>
            <IconChip icon={<Gavel size={24} color={C.white} strokeWidth={2.2} />} tone={C.green} title="破坏交通设施罪：">
              撒钉子·放大石头∈（通行功能丧失）；盗井盖→想象竞合择一重
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.white} strokeWidth={2.2} />} tone={C.night} title="破坏电力设备罪：">
              对象＝已交付使用的设备（不要求通电）；未交付使用→故意毁坏财物罪
            </IconChip>
            <Enter delay={56}><SoftHi style={{fontSize: 18 }}>飞机滑行中开安全门∉（不足以倾覆）·马上起飞或已起飞∈</SoftHi></Enter>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
