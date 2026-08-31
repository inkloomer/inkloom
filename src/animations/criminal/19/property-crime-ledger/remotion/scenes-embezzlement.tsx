import {Ban, BookOpen, Coins, Hand, KeyRound, Package, Scale, ScrollText, Users} from 'lucide-react';
import {C, Enter, IconChip, LedgerStamp, Mark, Neg, Panel, Shell, SoftHi, TabChip, ThinU} from './kit';

export const EmbezzlementTrustLedgerScene = () => {
  /* data-final-knowledge="statute-270-strip" data-final-knowledge="object-ledger" data-final-knowledge="possession-cases-board" data-final-knowledge="illicit-trust-board" data-final-knowledge="conduct-mode-board" */
  return (
    <Shell code="06" kicker="第二节 · 侵占罪" title="侵占罪：他人所有·自己占有">
      <div
        data-layout="embezzlement-trust-quad-ledger"
        data-visual-anchor="document-fork"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="object-ledger,possession-cases-board"
        data-focal-rule="embezzlement-turns-own-possession-of-others-property-into-ownership"
        data-focal-channels="icon,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={3} marker="statute-270-strip" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 96}}>
          <Panel tone={C.lock} watermark={<ScrollText size={150} color={C.lock} strokeWidth={1.6} />} style={{height: '100%', padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 16}}>
            <TabChip tone={C.lock} icon={<ScrollText size={24} color={C.white} strokeWidth={2.2} />}>第270条</TabChip>
            <span style={{fontSize: 22, fontWeight: 800, color: C.ink}}>
              将<ThinU color={C.lock}>代为保管的他人财物</ThinU>或<ThinU color={C.lock}>遗忘物、埋藏物</ThinU>非法占为己有，数额较大，<ThinU color={C.seal}>拒不退还／拒不交出</ThinU>
            </span>
            <LedgerStamp delay={26} tone="lock">告诉才处理</LedgerStamp>
          </Panel>
        </Enter>

        <Enter delay={30} marker="object-ledger" style={{position: 'absolute', left: 0, top: 118, width: 566, height: 626}}>
          <Panel tone={C.brass} watermark={<Package size={160} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.brass} icon={<Package size={24} color={C.white} strokeWidth={2.2} />}>行为对象 · 两大类</TabChip>
            <IconChip icon={<Hand size={26} color={C.white} strokeWidth={2.2} />} tone={C.brass} title="代为保管物（自愿）：">
              主人自愿转移占有；<Mark color={C.brass}>扩大解释</Mark>含出借物、担保物
            </IconChip>
            <IconChip icon={<KeyRound size={26} color={C.white} strokeWidth={2.2} />} tone={C.slate} title="遗忘物、埋藏物（非自愿）：">
              主人<Mark color={C.slate}>非自愿</Mark>脱离占有（阳台衣服飘落邻家∈）
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.lock} title="构造对比：">
              侵占＝事先<Mark color={C.lock}>已占有</Mark>·侵害所有权；盗窃＝破坏他人占有
            </IconChip>
          </Panel>
        </Enter>

        <Enter delay={64} marker="possession-cases-board" style={{position: 'absolute', left: 590, top: 118, width: 592, height: 626}}>
          <Panel tone={C.seal} watermark={<Users size={160} color={C.seal} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.seal} icon={<Users size={24} color={C.white} strokeWidth={2.2} />}>占有判断 · 未形成占有→盗窃罪</TabChip>
            <IconChip icon={<Users size={26} color={C.white} strokeWidth={2.2} />} tone={C.seal} title="伴娘保管戒指案：">
              仅是<Mark color={C.seal}>占有辅助者</Mark>，戒指仍由新娘占有 → 盗窃罪
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.slate} title="借用手机案：">
              借用未形成占有，悄悄拿走 → <Neg size={20}>非侵占</Neg>，构成盗窃罪
            </IconChip>
            <IconChip icon={<Coins size={26} color={C.white} strokeWidth={2.2} />} tone={C.brass} title="洗车彩票案：">
              占有车≠占有车内物品，彩票仍由车主占有 → 盗窃罪
            </IconChip>
          </Panel>
        </Enter>

        <Enter delay={120} marker="illicit-trust-board" style={{position: 'absolute', left: 1206, top: 118, width: 570, height: 386}}>
          <Panel tone={C.slate} watermark={<BookOpen size={150} color={C.slate} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.slate} icon={<BookOpen size={24} color={C.white} strokeWidth={2.2} />}>不法原因委托 · 多数说</TabChip>
            <IconChip icon={<Coins size={26} color={C.white} strokeWidth={2.2} />} tone={C.slate} title="委托给付（行贿款）：">
              多数说：甲丧失返还请求权 → <Neg size={20}>不构成侵占罪</Neg>
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.slate} title="委托保管赃物：">
              黑吃黑，无返还请求权 → <Neg size={20}>不构成</Neg>
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.lock} title="合法原因委托（修车）：">
              有返还请求权，拒不归还 → <Mark color={C.lock}>构成侵占罪</Mark>
            </IconChip>
          </Panel>
        </Enter>

        <Enter delay={190} marker="conduct-mode-board" style={{position: 'absolute', left: 1206, top: 528, width: 570, height: 216}}>
          <Panel tone={C.lock} watermark={<Hand size={140} color={C.lock} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <TabChip tone={C.lock} icon={<Hand size={24} color={C.white} strokeWidth={2.2} />}>行为方式 · 变占有为所有</TabChip>
            <IconChip icon={<Coins size={26} color={C.white} strokeWidth={2.2} />} tone={C.brass} title="作为＝无权处分：">
              变卖 · 消费 · 抵押 · 赠与
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.seal} title="不作为＝拒不返还：">
              <SoftHi style={{fontSize: 20 }}>种类物混同：多找1万元花掉∉，拒不返还才∈</SoftHi>
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
