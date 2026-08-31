import {Ban, Bike, Dog, Grab, Scale, ScrollText, ShieldAlert, Timer, Zap} from 'lucide-react';
import {C, Enter, IconChip, LedgerStamp, Mark, Neg, Panel, Shell, SoftHi, TabChip, ThinU} from './kit';

export const SnatchViolenceLaneScene = () => {
  /* data-final-knowledge="snatch-structure-board" data-final-knowledge="myth-split-board" data-final-knowledge="weapon-clause-board" data-final-knowledge="carry-gate-board" data-final-knowledge="judicial-interpret-board" */
  return (
    <Shell code="07" kicker="第四节 · 抢夺罪" title="抢夺罪：对物暴力·对人有危险">
      <div
        data-layout="snatch-violence-lane"
        data-visual-anchor="flow-path"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="snatch-structure-board,weapon-clause-board"
        data-focal-rule="snatch-is-violence-against-property-endangering-the-victim"
        data-focal-channels="icon,contrast,enclosure,connector"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={3} marker="snatch-structure-board" style={{position: 'absolute', left: 0, top: 0, width: 1050, height: 336}}>
          <Panel tone={C.seal} watermark={<Grab size={160} color={C.seal} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.seal} icon={<Grab size={24} color={C.white} strokeWidth={2.2} />}>行为结构 · 第267条</TabChip>
            <IconChip icon={<Zap size={26} color={C.white} strokeWidth={2.2} />} tone={C.seal} title="本质＝对物暴力：">
              <ThinU color={C.seal}>“抢”有暴力·“夺”是夺取</ThinU>；对人实施暴力→抢劫罪
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.lock} title="人身危险性门槛：">
              被害人<Mark color={C.lock}>紧密占有</Mark>时，夺取手段才有危险（拎包被夺∈抢夺）
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.slate} title="非紧密占有 → 盗窃罪：">
              包摔出5米捡走∈；悄悄割断背带∈（对人身<Neg size={20}>无危险</Neg>）
            </IconChip>
          </Panel>
        </Enter>

        <Enter delay={34} marker="myth-split-board" style={{position: 'absolute', left: 1074, top: 0, width: 702, height: 336}}>
          <Panel tone={C.slate} watermark={<ShieldAlert size={150} color={C.slate} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.slate} icon={<ShieldAlert size={24} color={C.white} strokeWidth={2.2} />}>两个误区 · 都非必要条件</TabChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.slate} title="公开秘密非标准：">
              深夜<Mark color={C.slate}>秘密</Mark>扯走脖挂手机勒出红印 → 仍构成抢夺罪
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.slate} title="乘人不备非必要：">
              乙警惕抱紧提包仍被当面夺走 → 仍构成抢夺罪
            </IconChip>
            <Enter delay={92}><SoftHi style={{fontSize: 20 }}>三罪是位阶关系：盗窃⊂抢夺⊂抢劫，可包容评价</SoftHi></Enter>
          </Panel>
        </Enter>

        <Enter delay={84} marker="weapon-clause-board" style={{position: 'absolute', left: 0, top: 360, width: 1050, height: 384}}>
          <Panel tone={C.brass} watermark={<Dog size={160} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.brass} icon={<ScrollText size={24} color={C.white} strokeWidth={2.2} />}>第267条第2款 · 携带凶器抢夺＝法律拟制</TabChip>
            <IconChip icon={<ShieldAlert size={26} color={C.white} strokeWidth={2.2} />} tone={C.seal} title="性质上的凶器：">
              禁止个人携带的<Mark color={C.seal}>违禁品</Mark>——枪支 · 爆炸物 · 管制刀具
            </IconChip>
            <IconChip icon={<Dog size={26} color={C.white} strokeWidth={2.2} />} tone={C.brass} title="用法上的凶器：">
              看<Mark color={C.brass}>杀伤力＋畏惧感</Mark>：菜刀·砖块·藏獒∈；汽车（街上川流不息畏惧感低）<Neg size={20}>∉</Neg>
            </IconChip>
            <Enter delay={176}><SoftHi style={{fontSize: 20 }}>牵藏獒抢夺定抢劫罪；若没有本款，携带凶器抢夺仍定抢夺罪</SoftHi></Enter>
          </Panel>
        </Enter>

        <Enter delay={128} marker="carry-gate-board" style={{position: 'absolute', left: 1074, top: 360, width: 702, height: 384}}>
          <Panel tone={C.lock} watermark={<Bike size={150} color={C.lock} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.lock} icon={<Grab size={24} color={C.white} strokeWidth={2.2} />}>「携带」的四点要求</TabChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.lock} title="不要求：">
              随身携带（可第三人携）· 显示 · 暗示有凶器
            </IconChip>
            <IconChip icon={<Timer size={26} color={C.white} strokeWidth={2.2} />} tone={C.brass} title="随时使用可能性：">
              手枪锁在密码行李箱中抢夺 → <Neg size={20}>∉</Neg>（拿不出来）
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.seal} title="对人使用意图：">
              买菜刀回家做饭∉；一般人<Mark color={C.seal}>不会拎砖头逛街</Mark>→推断∈
            </IconChip>
          </Panel>
        </Enter>

        <Enter delay={208} marker="judicial-interpret-board" style={{position: 'absolute', left: 0, right: 0, top: 768, height: 176}}>
          <Panel tone={C.seal} watermark={<Bike size={130} color={C.seal} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <TabChip tone={C.seal} icon={<ScrollText size={24} color={C.white} strokeWidth={2.2} />}>司法解释两点</TabChip>
            <div style={{display: 'flex', gap: 14}}>
              <Enter delay={224} style={{flex: 1}}>
                <IconChip icon={<Bike size={26} color={C.white} strokeWidth={2.2} />} tone={C.seal} title="飞车抢夺三情形：">
                  强行夺取·逼挤撞击·放任轻伤以上——<Mark color={C.seal}>注意规定</Mark>，按抢劫构成要件判断即可
                </IconChip>
              </Enter>
              <Enter delay={240} style={{flex: 1}}>
                <IconChip icon={<Zap size={26} color={C.white} strokeWidth={2.2} />} tone={C.brass} title="结果加重犯：">
                  抢夺<Mark color={C.brass}>过失</Mark>致人重伤、死亡 → 定抢夺罪加重处罚（扯包倒地碰石身亡）
                </IconChip>
              </Enter>
            </div>
            <Enter delay={254}><LedgerStamp delay={254} tone="seal">都属注意规定·不需特别记忆</LedgerStamp></Enter>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
