import {Ban, Gavel, Scale, Zap} from 'lucide-react';
import {C, Enter, IconChip, Mark, Neg, Panel, Shell, SoftHi, TabChip} from './kit';

/* data-visual-anchor="boundary" data-focal-channels="icon,contrast,enclosure,connector" */
export const MoneyLaunderingTaxScene = () => {
  /* data-final-knowledge="launder-panel" data-final-knowledge="tax-panel" */
  return (
    <Shell code="03" kicker="第四节·第六节" title="洗钱罪·逃税罪">
      <div
        data-layout="launder-tax-dual-filing"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-anchor="boundary"  data-visual-grammar="launder-panel,tax-panel"
        data-focal-channels="icon,contrast,enclosure,connector" data-focal-rule="laundering-needs-seven-upstream-crimes-and-tax-evasion-has-administrative-relief"
        
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="launder-panel" style={{position: 'absolute', left: 0, top: 0, width: 876, height: 744}}>
          <Panel tone={C.ledger} watermark={<Scale size={180} color={C.ledger} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.ledger} icon={<Scale size={24} color={C.white} strokeWidth={2.2} />}>洗钱罪（第191条）</TabChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.ledger} title="七种上游犯罪口诀：">
              <Mark color={C.ledger}>贪金走破黑毒恐</Mark>（贪污贿赂·金融·走私·破坏金融管理·黑社会·毒品·恐怖）
            </IconChip>
            <IconChip icon={<Zap size={26} color={C.white} strokeWidth={2.2} />} tone={C.econ} title="五种行为：">
              提供资金账户 · 转换为现金票据 · 转账转移 · 跨境转移 · 其他方法掩饰隐瞒
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.stamp} title="要点：">
              上游犯罪尚未既遂也可构成洗钱；单位可构成本罪
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={18} marker="tax-panel" style={{position: 'absolute', left: 900, top: 0, width: 876, height: 744}}>
          <Panel tone={C.econ} watermark={<Zap size={180} color={C.econ} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.econ} icon={<Zap size={24} color={C.white} strokeWidth={2.2} />}>逃税罪（第201条）</TabChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.econ} title="行为：">
              欺骗·隐瞒手段虚假申报或不申报
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.brass} title="数额：">
              较大＋占应纳税额10%以上
            </IconChip>
            <IconChip icon={<Gavel size={26} color={C.white} strokeWidth={2.2} />} tone={C.stamp} title="免责条款（行政处罚前置）：">
              补缴应纳税款＋缴纳滞纳金＋已受行政处罚 → 不予追究刑事责任
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.stamp} title="除外：">
              五年内曾因逃税受刑事处罚或二次以上行政处罚的 → 不得免责
            </IconChip>
            <IconChip icon={<Zap size={26} color={C.white} strokeWidth={2.2} />} tone={C.ward} title="多次累计：">
              未经处理的按累计数额计算
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
