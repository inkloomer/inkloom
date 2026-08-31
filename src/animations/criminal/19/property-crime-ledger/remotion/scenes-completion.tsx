import {Ban, Car, EyeOff, Home, Package, Scale, ShoppingBag, Users} from 'lucide-react';
import {C, Enter, IconChip, LedgerStamp, Mark, Neg, Panel, Shell, SoftHi, TabChip, ThinU} from './kit';

export const CompletionControlLatticeScene = () => {
  /* data-final-knowledge="control-standard-board" data-final-knowledge="small-items-board" data-final-knowledge="large-items-board" data-final-knowledge="hidden-spot-board" */
  return (
    <Shell code="11" kicker="第十节 · 财产犯罪的既遂" title="既遂标准：取得控制说">
      <div
        data-layout="completion-control-lattice"
        data-visual-anchor="typographic-sequence"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="control-standard-board,small-items-board"
        data-focal-rule="completion-requires-placing-property-in-ones-actual-control"
        data-focal-channels="icon,contrast,enclosure,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={3} marker="control-standard-board" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 108}}>
          <Panel tone={C.lock} watermark={<Scale size={140} color={C.lock} strokeWidth={1.6} />} style={{height: '100%', padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 18}}>
            <TabChip tone={C.lock} icon={<Scale size={24} color={C.white} strokeWidth={2.2} />}>既遂标准 · 取得控制说</TabChip>
            <span style={{fontSize: 22, fontWeight: 850, color: C.ink}}>
              盗窃·诈骗·敲诈勒索·抢劫·抢夺：建立<ThinU color={C.lock}>自己的占有</ThinU>——将财物置于<ThinU color={C.lock}>实际控制范围</ThinU>，排除主人支配
            </span>
          </Panel>
        </Enter>

        <Enter delay={26} marker="small-items-board" style={{position: 'absolute', left: 0, top: 132, width: 1050, height: 402}}>
          <Panel tone={C.brass} watermark={<ShoppingBag size={160} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <TabChip tone={C.brass} icon={<ShoppingBag size={24} color={C.white} strokeWidth={2.2} />}>小件物品 · 装进口袋＝个人专属领域</TabChip>
            <IconChip icon={<ShoppingBag size={26} color={C.white} strokeWidth={2.2} />} tone={C.brass} title="大街·公交车·商场：">
              装进口袋＝<Mark color={C.brass}>既遂</Mark>（普通公民<Neg size={20}>没有</Neg>搜身权）
            </IconChip>
            <IconChip icon={<Home size={26} color={C.white} strokeWidth={2.2} />} tone={C.seal} title="入户盗窃：">
              主人对小偷<Mark color={C.seal}>有搜身·控制权</Mark> → 装口袋<Neg size={20}>不算</Neg>既遂
            </IconChip>
            <IconChip icon={<Users size={26} color={C.white} strokeWidth={2.2} />} tone={C.lock} title="保姆·客人在主人家：">
              主人<Neg size={20}>不能</Neg>对保姆·客人搜身 → 装口袋＝<Mark color={C.lock}>既遂</Mark>
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.slate} title="超市布控例外：">
              一直受监控且已布控 → <ThinU color={C.slate}>拿出收银台</ThinU>才既遂
            </IconChip>
          </Panel>
        </Enter>

        <Enter delay={64} marker="large-items-board" style={{position: 'absolute', left: 1074, top: 132, width: 702, height: 402}}>
          <Panel tone={C.slate} watermark={<Package size={150} color={C.slate} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <TabChip tone={C.slate} icon={<Package size={24} color={C.white} strokeWidth={2.2} />}>大件物品 · 突破控制圈才算</TabChip>
            <IconChip icon={<Package size={26} color={C.white} strokeWidth={2.2} />} tone={C.slate} title="家电商场偷冰箱：">
              拖出专卖柜台<Neg size={20}>≠</Neg>；<Mark color={C.slate}>拖出商场大门</Mark>＝既遂
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.brass} title="工厂仓库看门禁：">
              门禁严格→<ThinU color={C.brass}>出大门</ThinU>；形同虚设→<ThinU color={C.brass}>出仓库门</ThinU>即既遂
            </IconChip>
            <IconChip icon={<Car size={26} color={C.white} strokeWidth={2.2} />} tone={C.seal} title="汽车：">
              <Mark color={C.seal}>开走（移动）</Mark>才既遂；被发现制止→未遂
            </IconChip>
          </Panel>
        </Enter>

        <Enter delay={120} marker="hidden-spot-board" style={{position: 'absolute', left: 0, right: 0, top: 558, height: 388}}>
          <Panel tone={C.lock} watermark={<EyeOff size={150} color={C.lock} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <TabChip tone={C.lock} icon={<EyeOff size={24} color={C.white} strokeWidth={2.2} />}>隐蔽地点 ＝ 实际控制范围（可保持相当空间距离）</TabChip>
            <div style={{display: 'flex', gap: 14}}>
              <Enter delay={136} style={{flex: 1}}>
                <IconChip icon={<Package size={26} color={C.white} strokeWidth={2.2} />} tone={C.lock} title="行李箱扔村头草丛：">
                  预定隐蔽点＝<Mark color={C.lock}>既遂</Mark>；扔进长江＝<Neg size={20}>未遂</Neg>
                </IconChip>
              </Enter>
              <Enter delay={150} style={{flex: 1}}>
                <IconChip icon={<EyeOff size={26} color={C.white} strokeWidth={2.2} />} tone={C.brass} title="深夜院墙外僻静处（多数说）：">
                  很少人路过＝实际控制 → <Mark color={C.brass}>既遂</Mark>
                </IconChip>
              </Enter>
              <Enter delay={164} style={{flex: 1}}>
                <IconChip icon={<Users size={26} color={C.white} strokeWidth={2.2} />} tone={C.lock} title="既遂排斥未遂：">
                  既遂后被别人捡走<Neg size={20}>不能变回</Neg>未遂；保姆藏戒指于夹缝＝既遂
                </IconChip>
              </Enter>
            </div>
            <Enter delay={182}><LedgerStamp delay={182} tone="lock">既遂一旦成立，不能再变回未遂</LedgerStamp></Enter>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
