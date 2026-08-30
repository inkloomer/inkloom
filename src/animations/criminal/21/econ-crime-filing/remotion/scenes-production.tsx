import {Ban, Gavel, Scale, Zap} from 'lucide-react';
import {C, Enter, IconChip, Panel, Shell, TabChip} from './kit';

/* data-visual-anchor="comparison-axis" data-focal-channels="icon,contrast,enclosure,spatial" */
export const ProductionSmugglingScene = () => {
  /* data-final-knowledge="product-panel" data-final-knowledge="smuggling-panel" */
  return (
    <Shell code="01" kicker="第一节·第二节" title="生产销售伪劣·走私犯罪">
      <div
        data-layout="production-smuggling-dual-filing"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-anchor="comparison-axis"  data-visual-grammar="product-panel,smuggling-panel"
        data-focal-channels="icon,contrast,enclosure,spatial" data-focal-rule="product-crimes-require-mixed-quality-and-smuggling-requires-evasion-of-customs"
        
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="product-panel" style={{position: 'absolute', left: 0, top: 0, width: 876, height: 744}}>
          <Panel tone={C.econ} watermark={<Scale size={180} color={C.econ} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.econ} icon={<Scale size={24} color={C.white} strokeWidth={2.2} />}>生产、销售伪劣产品罪（第140条）</TabChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.econ} title="成立条件：">
              掺杂掺假·以假充真·以次充好·不合格冒合格 + 销售金额5万元以上
            </IconChip>
            <IconChip icon={<Gavel size={26} color={C.white} strokeWidth={2.2} />} tone={C.brass} title="货物尚未销售：">
              货值金额15万元以上 → 未遂
            </IconChip>
            <IconChip icon={<Gavel size={26} color={C.white} strokeWidth={2.2} />} tone={C.pulse} title="食品犯罪：">
              生产销售有毒有害食品罪（行为犯·有毒有害非食品原料掺入）·不符合安全标准的食品罪（具体危险·足以造成严重食物中毒）
            </IconChip>
            <IconChip icon={<Gavel size={26} color={C.white} strokeWidth={2.2} />} tone={C.stamp} title="药品犯罪：">
              生产销售·提供假药→行为犯；劣药→结果犯（对人体健康造成严重危害）
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={18} marker="smuggling-panel" style={{position: 'absolute', left: 900, top: 0, width: 876, height: 744}}>
          <Panel tone={C.ledger} watermark={<Gavel size={180} color={C.ledger} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.ledger} icon={<Gavel size={24} color={C.white} strokeWidth={2.2} />}>走私犯罪</TabChip>
            <IconChip icon={<Gavel size={26} color={C.white} strokeWidth={2.2} />} tone={C.ledger} title="走私普通货物·物品罪：">
              逃避海关监管·偷逃应缴税额较大（一年内曾走私又走私→加重）
            </IconChip>
            <IconChip icon={<Gavel size={26} color={C.white} strokeWidth={2.2} />} tone={C.econ} title="走私禁止进出口货物：">
              珍贵动物及其制品·国家禁止进出口的珍稀植物·有毒物质等
            </IconChip>
            <IconChip icon={<Zap size={26} color={C.white} strokeWidth={2.2} />} tone={C.stamp} title="间接走私：">
              直接向走私人非法收购走私货物·在内海领海运输收购贩卖
            </IconChip>
            <IconChip icon={<Zap size={26} color={C.white} strokeWidth={2.2} />} tone={C.brass} title="走私与走私之后的罪：">
              在境内销售走私货物→销售货物本身是走私行为的延伸·不另定罪
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
