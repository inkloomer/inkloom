import {Ban, Coins, Crosshair, Home, Landmark, Repeat, Scale, ShieldAlert, Skull, Train, Users, Zap} from 'lucide-react';
import {C, Enter, IconChip, LedgerStamp, Mark, Neg, Panel, Shell, TabChip, ThinU} from './kit';

export const RobberyAggravationBoardScene = () => {
  /* data-final-knowledge="aggravation-header" data-final-knowledge="home-board" data-final-knowledge="transit-board" data-final-knowledge="bank-board" data-final-knowledge="repeat-board" data-final-knowledge="injury-board" data-final-knowledge="impersonate-board" data-final-knowledge="gun-board" data-final-knowledge="military-board" */
  return (
    <Shell code="08" kicker="第五节 · 抢劫罪" title="抢劫罪：八个法定刑升格条件">
      <div
        data-layout="robbery-aggravation-octo-board"
        data-visual-anchor="comparison-axis"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="home-board,injury-board"
        data-focal-rule="aggravation-cells-lift-penalty-only-when-every-element-matches"
        data-focal-channels="icon,contrast,enclosure,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={3} marker="aggravation-header" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 64}}>
          <Panel tone={C.seal} style={{height: '100%', padding: '8px 18px', display: 'flex', alignItems: 'center', gap: 16}}>
            <TabChip tone={C.seal} icon={<Zap size={24} color={C.white} strokeWidth={2.2} />}>法定刑升格</TabChip>
            <span style={{fontSize: 22, fontWeight: 850, color: C.ink}}>具备以下情形 → 加重处罚（<ThinU color={C.seal}>十年有期徒刑至死刑</ThinU>）</span>
            <LedgerStamp delay={20} tone="seal">八项逐一核对</LedgerStamp>
          </Panel>
        </Enter>

        <Enter delay={18} marker="home-board" style={{position: 'absolute', left: 0, top: 80, width: 884, height: 322}}>
          <Panel tone={C.lock} watermark={<Home size={150} color={C.lock} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <TabChip tone={C.lock} icon={<Home size={24} color={C.white} strokeWidth={2.2} />}>① 入户抢劫</TabChip>
            <IconChip icon={<Home size={26} color={C.white} strokeWidth={2.2} />} tone={C.lock} title="“户”双特征：">
              <Mark color={C.lock}>家庭生活</Mark>功能＋<Mark color={C.lock}>相对隔离</Mark>场所；集体宿舍·旅店房间·临时工棚<Neg size={20}>∉</Neg>
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.seal} title="入户目的：">
              须带<b>人身或财产犯罪目的</b>入户；合法入户后户内抢劫＝“在户内抢劫”<Neg size={20}>∉入户</Neg>
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.brass} title="暴力在户内＋主客观一致：">
              户内实施强制手段；误认仓库实为住宅<Neg size={20}>∉</Neg>
            </IconChip>
          </Panel>
        </Enter>

        <Enter delay={32} marker="transit-board" style={{position: 'absolute', left: 900, top: 80, width: 432, height: 322}}>
          <Panel tone={C.slate} watermark={<Train size={140} color={C.slate} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <TabChip tone={C.slate} icon={<Train size={24} color={C.white} strokeWidth={2.2} />}>② 公共交通工具</TabChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.seal} title="不含小型出租车：">
              单位班车·校车等大中型 → <Mark color={C.slate}>视为∈</Mark>
            </IconChip>
            <IconChip icon={<Train size={26} color={C.white} strokeWidth={2.2} />} tone={C.slate} title="运营状态：">
              身体进入内抢或拦截后不进入均可
            </IconChip>
          </Panel>
        </Enter>

        <Enter delay={46} marker="bank-board" style={{position: 'absolute', left: 1344, top: 80, width: 432, height: 322}}>
          <Panel tone={C.brass} watermark={<Landmark size={140} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <TabChip tone={C.brass} icon={<Landmark size={24} color={C.white} strokeWidth={2.2} />}>③ 银行等金融机构</TabChip>
            <IconChip icon={<Coins size={26} color={C.white} strokeWidth={2.2} />} tone={C.brass} title="对象＝经营资金：">
              办公用品<Neg size={20}>∉</Neg>；大厅储户现金<Neg size={20}>∉</Neg>
            </IconChip>
            <IconChip icon={<Landmark size={26} color={C.white} strokeWidth={2.2} />} tone={C.lock} title="运钞车：">
              抢劫正在使用中的运钞车 → <Mark color={C.lock}>视为∈</Mark>
            </IconChip>
          </Panel>
        </Enter>

        <Enter delay={60} marker="repeat-board" style={{position: 'absolute', left: 0, top: 418, width: 432, height: 326}}>
          <Panel tone={C.slate} watermark={<Repeat size={140} color={C.slate} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <TabChip tone={C.slate} icon={<Repeat size={24} color={C.white} strokeWidth={2.2} />}>④ 多次抢劫</TabChip>
            <IconChip icon={<Repeat size={26} color={C.white} strokeWidth={2.2} />} tone={C.slate} title="3次以上：">
              且每次均构成抢劫罪
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.brass} title="同一犯意同一地点连续多人：">
              公交车上连抢三位乘客＝<Mark color={C.brass}>一次</Mark>
            </IconChip>
          </Panel>
        </Enter>

        <Enter delay={74} marker="injury-board" style={{position: 'absolute', left: 444, top: 418, width: 884, height: 326}}>
          <Panel tone={C.seal} watermark={<Skull size={150} color={C.seal} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <TabChip tone={C.seal} icon={<Skull size={24} color={C.white} strokeWidth={2.2} />}>⑤ 致人重伤、死亡（结果加重犯）</TabChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.seal} title="实行行为限定：">
              带<Mark color={C.seal}>非法占有目的</Mark>的暴力（同时存在原则）；过失·故意致重伤死亡均∈
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.slate} title="既遂后另起行为：">
              逃跑时为摆脱将主人打成重伤 → 抢劫罪＋故意伤害罪<Neg size={20}>并罚</Neg>
            </IconChip>
            <IconChip icon={<Users size={26} color={C.white} strokeWidth={2.2} />} tone={C.lock} title="“人”的范围：">
              被害人·前来阻止的人·打击错误中的第三人
            </IconChip>
          </Panel>
        </Enter>

        <Enter delay={88} marker="impersonate-board" style={{position: 'absolute', left: 1344, top: 418, width: 432, height: 326}}>
          <Panel tone={C.lock} watermark={<ShieldAlert size={140} color={C.lock} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <TabChip tone={C.lock} icon={<ShieldAlert size={24} color={C.white} strokeWidth={2.2} />}>⑥ 冒充军警</TabChip>
            <IconChip icon={<ShieldAlert size={26} color={C.white} strokeWidth={2.2} />} tone={C.lock} title="足以使一般人相信：">
              穿制服·带枪支·出证件综合判断
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.seal} title="真实身份∉：">
              军警利用自身真实身份抢劫 → <Neg size={20}>不认定</Neg>
            </IconChip>
          </Panel>
        </Enter>

        <Enter delay={102} marker="gun-board" style={{position: 'absolute', left: 0, top: 756, width: 884, height: 190}}>
          <Panel tone={C.brass} watermark={<Crosshair size={130} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 6}}>
            <TabChip tone={C.brass} icon={<Crosshair size={24} color={C.white} strokeWidth={2.2} />}>⑦ 持枪抢劫</TabChip>
            <IconChip icon={<Crosshair size={26} color={C.white} strokeWidth={2.2} />} tone={C.brass} title="枪＋使用或显示：">
              <Mark color={C.brass}>真枪</Mark>（仿真枪∉·空枪∈）；携带枪支抢夺定抢劫后<Neg size={20}>不得再评价枪</Neg>（禁止重复评价）
            </IconChip>
          </Panel>
        </Enter>

        <Enter delay={116} marker="military-board" style={{position: 'absolute', left: 900, top: 756, width: 876, height: 190}}>
          <Panel tone={C.lock} watermark={<Scale size={130} color={C.lock} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 6}}>
            <TabChip tone={C.lock} icon={<Ban size={24} color={C.white} strokeWidth={2.2} />}>⑧ 军用物资·抢险救灾救济物资</TabChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.lock} title="对象认识错误：">
              欲抢救灾物资实得军用物资——<Mark color={C.lock}>同一构成要件内错误</Mark>，不影响升格适用
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
