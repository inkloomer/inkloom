import {Brain, Boxes, Handshake, Home, PackageCheck, Pill, Scale, Stethoscope} from 'lucide-react';
import {C, Enter, IconChip, LabelBlock, Neg, Panel, Shell, SoftHi, TabChip, ThinU} from './kit';

export const DrugDispatchLaneScene = () => {
  /* data-final-knowledge="traffic-panel" data-final-knowledge="holding-panel" */
  return (
    <Shell code="07" kicker="第七节 · 毒品犯罪" title="走私贩卖运输制造毒品·非法持有·容留">
      <div
        data-layout="drug-dispatch-lane"
        data-visual-anchor="flow-path"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="traffic-panel,holding-panel"
        data-focal-rule="selling-is-gratuitous-transfer-free-possession-is-fallback-holding-crime"
        data-focal-channels="icon,contrast,enclosure,connector"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="traffic-panel" style={{position: 'absolute', left: 0, top: 0, width: 964, height: 744}}>
          <Panel tone={C.pine} watermark={<Pill size={170} color={C.pine} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.pine} icon={<Pill size={24} color={C.white} strokeWidth={2.2} />}>走私、贩卖、运输、制造毒品罪（第347条）·选择性罪名</TabChip>
            <IconChip icon={<Handshake size={26} color={C.white} strokeWidth={2.2} />} tone={C.pine} title="贩卖＝有偿转让：">
              不要求牟利目的（低价转售也构成）；无偿赠与不构成；物物交换构成（2024）
            </IconChip>
            <IconChip icon={<PackageCheck size={26} color={C.white} strokeWidth={2.2} />} tone={C.gold} title="既遂＝卖掉毒品：">
              不要求收到货款
            </IconChip>
            <IconChip icon={<Brain size={26} color={C.white} strokeWidth={2.2} />} tone={C.navy} title="主观：">
              只要求认识到毒品的成分作用，不要求认识到毒品名称、种类
            </IconChip>
            <IconChip icon={<Stethoscope size={26} color={C.white} strokeWidth={2.2} />} tone={C.crimson} title="麻精药品：">
              医疗目的→不构成毒品犯罪（妨害药品管理罪／非法经营罪）；向吸毒者有偿提供→贩卖毒品罪；贩卖给毒犯→贩卖毒品罪
            </IconChip>
            <Enter delay={76}><ThinU>居间介绍＝帮助犯想象竞合；居间倒卖＝贩卖毒品罪实行犯</ThinU></Enter>
          </Panel>
        </Enter>
        <Enter delay={18} marker="holding-panel" style={{position: 'absolute', left: 988, right: 0, top: 0, bottom: 0}}>
          <Panel tone={C.navy} watermark={<Boxes size={170} color={C.navy} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.navy} icon={<Boxes size={24} color={C.white} strokeWidth={2.2} />}>非法持有毒品罪（第348条）·容留他人吸毒罪（第354条）</TabChip>
            <IconChip icon={<Boxes size={26} color={C.white} strokeWidth={2.2} />} tone={C.navy} title="非法持有：">
              数量较大（海洛因10克）；兜底罪名——因走私、贩卖、运输而持有→只定相应罪名
            </IconChip>
            <IconChip icon={<Handshake size={26} color={C.white} strokeWidth={2.2} />} tone={C.gold} title="间接持有：">
              委托他人代为保管，双方均构成非法持有毒品罪
            </IconChip>
            <IconChip icon={<Home size={26} color={C.white} strokeWidth={2.2} />} tone={C.pine} title="容留他人吸毒罪：">
              允许他人在自己管理的场所吸毒或提供场所；共有场所一人吸毒另一人不阻止→不属于
            </IconChip>
            <Enter delay={68} style={{display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center'}}>
              <LabelBlock color={C.crimson} size={17}>贩卖＋容留→数罪并罚（2017）</LabelBlock>
              <SoftHi style={{fontSize: 17 }}>为吸食而购买→不构成贩卖、不构成共犯</SoftHi>
            </Enter>
            <Enter delay={74}><Neg size={17}>吸毒本身不构成犯罪</Neg></Enter>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
