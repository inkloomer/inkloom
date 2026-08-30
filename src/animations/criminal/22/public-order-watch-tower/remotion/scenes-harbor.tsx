import {Ban, Coins, DoorOpen, FileText, Flag, Home, Package, Scale, Users} from 'lucide-react';
import {C, Enter, IconChip, LabelBlock, Neg, Panel, Shell, SoftHi, TabChip, ThinU} from './kit';

export const JusticeHarborQuayScene = () => {
  /* data-final-knowledge="harbor-panel" data-final-knowledge="conceal-panel" data-final-knowledge="escape-panel" */
  return (
    <Shell code="06" kicker="第二节 · 妨害司法罪" title="窝藏包庇·掩饰隐瞒·脱逃">
      <div
        data-layout="justice-harbor-quay"
        data-visual-anchor="flow-target"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="harbor-panel,conceal-panel,escape-panel"
        data-focal-rule="harboring-targets-fugitives-concealment-limits-to-non-offenders-escape-needs-custody"
        data-focal-channels="icon,contrast,enclosure,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="harbor-panel" style={{position: 'absolute', left: 0, top: 0, width: 592, height: 744}}>
          <Panel tone={C.navy} watermark={<Home size={160} color={C.navy} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.navy} icon={<Home size={24} color={C.white} strokeWidth={2.2} />}>窝藏、包庇罪（第310条）</TabChip>
            <IconChip icon={<Home size={26} color={C.white} strokeWidth={2.2} />} tone={C.navy} title="窝藏＝帮助犯罪的人逃匿：">
              “帮助”扩大解释，包括实行行为、教唆行为
            </IconChip>
            <IconChip icon={<FileText size={26} color={C.white} strokeWidth={2.2} />} tone={C.pine} title="包庇＝作假证明包庇：">
              对象＝犯罪的人（含犯罪嫌疑人、被告人）；抽象危险犯
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.crimson} title="期待可能性：">
              犯罪人本人、共同犯罪人之间窝藏包庇→不构成
            </IconChip>
            <Enter delay={64}><SoftHi style={{fontSize: 17 }}>一条龙服务：窝藏包庇＋洗钱／掩饰隐瞒／帮助毁灭证据／伪证→重罪吸收轻罪</SoftHi></Enter>
          </Panel>
        </Enter>
        <Enter delay={18} marker="conceal-panel" style={{position: 'absolute', left: 616, top: 0, width: 592, height: 744}}>
          <Panel tone={C.gold} watermark={<Package size={160} color={C.gold} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.gold} icon={<Package size={24} color={C.white} strokeWidth={2.2} />}>掩饰、隐瞒犯罪所得罪（第312条）</TabChip>
            <IconChip icon={<Users size={26} color={C.white} strokeWidth={2.2} />} tone={C.navy} title="主体＝本犯以外的人：">
              事前有通谋→上游犯罪的共犯；本犯处理赃物＝不可罚的事后行为
            </IconChip>
            <IconChip icon={<Coins size={26} color={C.white} strokeWidth={2.2} />} tone={C.gold} title="对象＝犯罪所得及收益：">
              虚拟财物、违禁品算；犯罪工具、人的身体不算；挪用公款所挪款项不算
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.pine} title="上游犯罪要求：">
              上游犯罪事实查证属实即可；上游未达定罪数额→不构成本罪
            </IconChip>
            <Enter delay={68}><Neg size={17}>黑吃黑：违背本犯人意愿夺取→构成财产犯罪</Neg></Enter>
          </Panel>
        </Enter>
        <Enter delay={30} marker="escape-panel" style={{position: 'absolute', left: 1232, right: 0, top: 0, bottom: 0}}>
          <Panel tone={C.crimson} watermark={<DoorOpen size={160} color={C.crimson} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.crimson} icon={<DoorOpen size={24} color={C.white} strokeWidth={2.2} />}>脱逃罪（第316条）</TabChip>
            <IconChip icon={<Users size={26} color={C.white} strokeWidth={2.2} />} tone={C.crimson} title="主体＝依法被关押的罪犯、犯罪嫌疑人、被告人：">
              被监察机关留置→是；行政拘留、缓刑、假释、取保候审→不是
            </IconChip>
            <IconChip icon={<Flag size={26} color={C.white} strokeWidth={2.2} />} tone={C.navy} title="既遂＝摆脱监管实力控制：">
              逃出监狱但处于被追捕中→未遂；摆脱追捕大隐于市→既遂
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.gold} title="共犯：">
              商议共同脱逃，一人既遂→部分实行、全部负责，均既遂（2018）
            </IconChip>
            <Enter delay={70}><ThinU>拒不执行判决、裁定罪（第313条）：不作为犯，有能力执行而拒不执行、情节严重</ThinU></Enter>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
