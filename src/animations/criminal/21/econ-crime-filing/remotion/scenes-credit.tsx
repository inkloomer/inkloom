import {Ban, CreditCard, Scale, Zap} from 'lucide-react';
import {C, Enter, IconChip, Mark, Neg, Panel, Shell, SoftHi, TabChip, ThinU} from './kit';

/* data-visual-anchor="typographic-sequence" data-focal-channels="icon,contrast,enclosure,connector" */
export const CreditCardFraudScene = () => {
  /* data-final-knowledge="cc-basics-panel" data-final-knowledge="cc-types-panel" data-final-knowledge="cc-machine-panel" */
  return (
    <Shell code="02" kicker="第五节 · 🌟信用卡诈骗罪" title="信用卡诈骗罪（五星级罪名）">
      <div
        data-layout="credit-card-tri-filing"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-anchor="typographic-sequence"  data-visual-grammar="cc-basics-panel,cc-types-panel"
        data-focal-channels="icon,contrast,enclosure,connector" data-focal-rule="credit-card-fraud-is-a-flat-rule-regardless-of-machine-or-human-usage"
        
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="cc-basics-panel" style={{position: 'absolute', left: 0, top: 0, width: 876, height: 356}}>
          <Panel tone={C.econ} watermark={<CreditCard size={160} color={C.econ} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.econ} icon={<CreditCard size={24} color={C.white} strokeWidth={2.2} />}>前提知识</TabChip>
            <IconChip icon={<CreditCard size={26} color={C.white} strokeWidth={2.2} />} tone={C.econ} title="「信用卡」＝银行卡：">
              含透支的信用卡＋不含透支的储蓄卡借记卡（立法解释一刀切）
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.stamp} title="司法解释一刀切：">
              对人使用·对机器使用 → 一律定信用卡诈骗罪（勿按原理区分）
            </IconChip>
            <IconChip icon={<Zap size={26} color={C.white} strokeWidth={2.2} />} tone={C.brass} title="盗窃信用卡并使用：">
              第196条第3款 → 定盗窃罪（拟制·对人使用是拟制·对机器是注意）
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={18} marker="cc-types-panel" style={{position: 'absolute', left: 900, top: 0, width: 876, height: 356}}>
          <Panel tone={C.ledger} watermark={<CreditCard size={160} color={C.ledger} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.ledger} icon={<CreditCard size={24} color={C.white} strokeWidth={2.2} />}>四种行为类型</TabChip>
            <IconChip icon={<CreditCard size={26} color={C.white} strokeWidth={2.2} />} tone={C.pulse} title="①使用伪造的/骗领的信用卡：">
              伪造→伪造金融票证罪＋使用→牵连犯择一重定信用卡诈骗
            </IconChip>
            <IconChip icon={<CreditCard size={26} color={C.white} strokeWidth={2.2} />} tone={C.ward} title="②使用作废的信用卡：">
              含失效·挂失·作废
            </IconChip>
            <IconChip icon={<CreditCard size={26} color={C.white} strokeWidth={2.2} />} tone={C.brass} title="③冒用他人信用卡：">
              捡拾·骗得·代保管均可（盗窃得的→盗窃罪）
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.stamp} title="④恶意透支：">
              以非法占有为目的·超限额期限透支·经催收仍不归还
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={30} marker="cc-machine-panel" style={{position: 'absolute', left: 0, right: 0, top: 380, bottom: 0}}>
          <Panel tone={C.night} style={{height: '100%', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 20}}>
            <TabChip tone={C.night} icon={<Zap size={26} color={C.white} strokeWidth={2.2} />}>AJM取款案</TabChip>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              在ATM机上安装读卡器→窃取信息→伪造卡→使用 → 三罪牵连犯
              <br />
              最终定<Mark color={C.econ}>信用卡诈骗罪</Mark>（一罪）·司法解释对人机使用一刀切
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
