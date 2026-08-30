import {Ban, Gavel, Scale, Zap} from 'lucide-react';
import {C, Enter, IconChip, Mark, Neg, Panel, Shell, TabChip} from './kit';

/* data-visual-anchor="document-fork" data-focal-channels="icon,contrast,enclosure,spatial" */
export const InsuranceLoanFraudScene = () => {
  /* data-final-knowledge="loan-panel" data-final-knowledge="insurance-panel" */
  return (
    <Shell code="04" kicker="第七节 · 金融诈骗罪" title="贷款诈骗罪·保险诈骗罪">
      <div
        data-layout="insurance-loan-dual-filing"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-anchor="document-fork"  data-visual-grammar="loan-panel,insurance-panel"
        data-focal-channels="icon,contrast,enclosure,spatial" data-focal-rule="loan-fraud-needs-illegal-possession-purpose-and-insurance-fraud-needs-special-subject"
        
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="loan-panel" style={{position: 'absolute', left: 0, top: 0, width: 876, height: 744}}>
          <Panel tone={C.ledger} watermark={<Scale size={180} color={C.ledger} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.ledger} icon={<Scale size={24} color={C.white} strokeWidth={2.2} />}>贷款诈骗罪（第193条）</TabChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.stamp} title="主体：">
              只能由自然人构成（单位不可）——单位实施→按合同诈骗罪或贷款诈骗帮助犯
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.ledger} title="五种方式：">
              编造引进资金·虚假经济合同 · 虚假产权证明担保 · 虚假项目 · 虚假银行进账单 · 多次骗贷
            </IconChip>
            <IconChip icon={<Gavel size={26} color={C.white} strokeWidth={2.2} />} tone={C.econ} title="关键：">
              必须具有非法占有目的——借款后按时还款即使有欺骗也不构成
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={18} marker="insurance-panel" style={{position: 'absolute', left: 900, top: 0, width: 876, height: 744}}>
          <Panel tone={C.econ} watermark={<Zap size={180} color={C.econ} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.econ} icon={<Zap size={24} color={C.white} strokeWidth={2.2} />}>保险诈骗罪（第198条）</TabChip>
            <IconChip icon={<Zap size={26} color={C.white} strokeWidth={2.2} />} tone={C.econ} title="主体（特殊）：">
              投保人·被保险人·受益人；单位可构成
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.stamp} title="五种行为：">
              虚构保险标的 · 编造未发生事故 · 编造事故扩大损失 · 故意造成财产损失 · 故意造成人身伤亡
            </IconChip>
            <IconChip icon={<Gavel size={26} color={C.white} strokeWidth={2.2} />} tone={C.brass} title="鉴定人虚假证明帮助：">
              注意规定 → 保险诈骗共犯
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.pulse} title="数罪并罚：">
              故意造成事故（如纵火）＋保险诈骗 → 并罚（另有规定除外）
            </IconChip>
            <Enter delay={56}><Neg size={19}>代理人骗保险金（单位不知）→ 个人诈骗·非单位犯罪</Neg></Enter>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
