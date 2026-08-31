import {Ban, Bird, Coins, HardHat, Hand, Landmark, Scale, Skull, Timer, Wallet} from 'lucide-react';
import {C, Enter, IconChip, LedgerStamp, Mark, Neg, Panel, Shell, SoftHi, TabChip, ThinU} from './kit';

export const MinorCrimesCompletionScene = () => {
  /* data-final-knowledge="damage-board" data-final-knowledge="misuse-funds-board" data-final-knowledge="special-funds-board" data-final-knowledge="wages-board" */
  return (
    <Shell code="10" kicker="第九节 · 普通罪名" title="普通罪名：毁坏·挪用·欠薪">
      <div
        data-layout="minor-crimes-completion-quad"
        data-visual-anchor="comparison-axis"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="damage-board,misuse-funds-board"
        data-focal-rule="each-minor-crime-turns-on-its-own-threshold-element"
        data-focal-channels="icon,contrast,enclosure,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={3} marker="damage-board" style={{position: 'absolute', left: 0, top: 0, width: 884, height: 470}}>
          <Panel tone={C.seal} watermark={<Bird size={160} color={C.seal} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.seal} icon={<Skull size={24} color={C.white} strokeWidth={2.2} />}>故意毁坏财物罪（第275条）</TabChip>
            <IconChip icon={<Skull size={26} color={C.white} strokeWidth={2.2} />} tone={C.seal} title="物理性毁坏：">
              对财物<Mark color={C.seal}>物质本体</Mark>损毁（砸烂）
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.brass} title="功能性毁坏：">
              使功能丧失——客观功能·一般人<ThinU color={C.brass}>主观认可</ThinU>的功能
            </IconChip>
            <IconChip icon={<Bird size={26} color={C.white} strokeWidth={2.2} />} tone={C.lock} title="使所有权人丧失占有：">
              放飞笼中鸟 · 鱼塘放生 · 戒指扔大海（2006年第60题）
            </IconChip>
            <Enter delay={90}><SoftHi style={{fontSize: 20 }}>“毁坏”采效用侵害说：效用丧失或减少即可</SoftHi></Enter>
          </Panel>
        </Enter>

        <Enter delay={20} marker="misuse-funds-board" style={{position: 'absolute', left: 900, top: 0, width: 876, height: 470}}>
          <Panel tone={C.lock} watermark={<Coins size={160} color={C.lock} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <TabChip tone={C.lock} icon={<Coins size={24} color={C.white} strokeWidth={2.2} />}>挪用资金罪（第272条）· 单位人员＋职务便利</TabChip>
            <IconChip icon={<Timer size={26} color={C.white} strokeWidth={2.2} />} tone={C.lock} title="归个人使用或借贷他人：">
              <Mark color={C.lock}>数额较大</Mark>＋<Mark color={C.lock}>超过3个月未还</Mark>
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.brass} title="营利活动：">
              数额较大，<ThinU color={C.brass}>无时间要求</ThinU>
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.seal} title="非法活动：">
              <Mark color={C.seal}>无数额·无时间要求</Mark>；进行非法活动构成他罪→数罪并罚
            </IconChip>
            <Enter delay={110}><SoftHi style={{fontSize: 20 }}>挪用后故意不归还 → 转化为职务侵占罪；提起公诉前退还 → 可以从轻减轻</SoftHi></Enter>
          </Panel>
        </Enter>

        <Enter delay={60} marker="special-funds-board" style={{position: 'absolute', left: 0, top: 494, width: 884, height: 452}}>
          <Panel tone={C.brass} watermark={<Landmark size={160} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.brass} icon={<Landmark size={24} color={C.white} strokeWidth={2.2} />}>挪用特定款物罪（第273条）</TabChip>
            <IconChip icon={<Landmark size={26} color={C.white} strokeWidth={2.2} />} tone={C.brass} title="单位犯罪：">
              只处罚<Mark color={C.brass}>直接责任人员</Mark>
            </IconChip>
            <IconChip icon={<Hand size={26} color={C.white} strokeWidth={2.2} />} tone={C.lock} title="行为＝改变专用用途：">
              <Mark color={C.lock}>公款公用</Mark>（挪给其他公用）——非“公款私用”
            </IconChip>
            <IconChip icon={<Coins size={26} color={C.white} strokeWidth={2.2} />} tone={C.slate} title="七类款物：">
              救灾·抢险·防汛·优抚·扶贫·移民·救济（救抢防优扶移济）
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.seal} title="对比挪用公款罪：">
              挪用特定款物<Mark color={C.seal}>归个人使用</Mark> → 定挪用公款罪并<Neg size={20}>从重处罚</Neg>
            </IconChip>
          </Panel>
        </Enter>

        <Enter delay={96} marker="wages-board" style={{position: 'absolute', left: 900, top: 494, width: 876, height: 452}}>
          <Panel tone={C.slate} watermark={<HardHat size={160} color={C.slate} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.slate} icon={<HardHat size={24} color={C.white} strokeWidth={2.2} />}>拒不支付劳动报酬罪（第276条之一）</TabChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.slate} title="不作为犯罪：">
              转移财产·逃匿逃避支付，或<Mark color={C.slate}>有能力支付而不支付</Mark>，数额较大
            </IconChip>
            <IconChip icon={<Landmark size={26} color={C.white} strokeWidth={2.2} />} tone={C.seal} title="前置条件（绝对红线）：">
              <Mark color={C.seal}>经政府有关部门责令支付仍不支付</Mark>——缺此<Neg size={21}>绝对不构成本罪</Neg>
            </IconChip>
            <IconChip icon={<Wallet size={26} color={C.white} strokeWidth={2.2} />} tone={C.lock} title="从宽三件套：">
              尚未造成严重后果＋<ThinU color={C.lock}>提起公诉前</ThinU>支付＋承担赔偿责任 → 可以减轻或免除
            </IconChip>
            <Enter delay={160}><LedgerStamp delay={160} tone="lock">单位犯罪：对单位判罚金＋处罚直接责任人员</LedgerStamp></Enter>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
