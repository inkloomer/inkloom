import type {ReactNode} from 'react';
import {Coins, FileWarning, Landmark, Percent, Plane, Scale, TrendingUp} from 'lucide-react';
import {C, Chip, Enter, GateFlash, LabelBlock, Mover, Neg, Panel, Path, Shell, SoftHi, TabChip, ThinU} from './kit';

export const TaxRebateFundScene = () => {
  /* data-final-knowledge="rebate-fork" data-final-knowledge="invoice-pair" data-final-knowledge="fundraising-axis" */
  return (
    <Shell code="07" kicker="第六节·第四节" title="骗取出口退税·虚开发票·集资类犯罪">
      <div
        data-layout="tax-rebate-split-fork"
        data-visual-anchor="document-fork"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="rebate-fork,invoice-pair,fundraising-axis"
        data-focal-rule="a-refund-token-splits-at-the-paid-tax-line-into-evasion-and-rebate-convictions-while-fundraising-funds-fork-on-the-illegal-possession-purpose"
        data-focal-channels="icon,connector,contrast,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="rebate-fork" style={{position: 'absolute', left: 0, top: 0, width: 940, height: 762}}>
          <Panel tone={C.stamp} watermark={<Plane size={160} color={C.stamp} strokeWidth={1.6} />} style={{height: '100%', padding: '10px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.stamp} icon={<Plane size={24} color={C.white} strokeWidth={2.2} />}>骗取出口退税罪（第204条）· 退款分流</TabChip>
            <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10, fontSize: 21, fontWeight: 800, color: C.ink}}>
              <Chip tone="stamp">假报出口或其他欺骗手段</Chip>
              <Path color={C.stamp} delay={50} span={16} style={{position: 'relative', width: 56, height: 4}} />
              <span style={{display: 'inline-flex', flexWrap: 'wrap', backgroundColor: C.white, border: '2px solid rgba(32,40,36,0.25)', padding: '4px 10px', fontSize: 20, fontWeight: 800, color: C.ink, maxWidth: 560}}>骗取国家出口退税款，数额较大 → 五年以下有期徒刑或者拘役，并处骗取税款一倍以上五倍以下罚金</span>
            </div>
            <div style={{position: 'relative', height: 330, border: `2px dashed ${C.ghost}`, backgroundColor: C.white}}>
              <div data-stateful-source="rebate-token" style={{position: 'absolute', left: 18, top: 12}}>
                <Chip tone="night"><Coins size={22} color={C.white} strokeWidth={2.2} />先缴税 100 万元，再骗回 120 万元</Chip>
              </div>
              <Path color={C.stamp} delay={90} span={18} vertical thickness={5} style={{position: 'absolute', left: 108, top: 52, height: 118}} />
              <div style={{position: 'absolute', left: 60, top: 158, width: 100, height: 4, backgroundColor: C.stamp, opacity: 0.55}} />
              <div style={{position: 'absolute', left: 60, top: 100, width: 340, height: 4, backgroundColor: C.stamp, opacity: 0.55}} />
              <div style={{position: 'absolute', left: 60, top: 216, width: 340, height: 4, backgroundColor: C.stamp, opacity: 0.55}} />
              <GateFlash delay={120} tone={C.econ} style={{position: 'absolute', left: 412, top: 74, width: 490, boxSizing: 'border-box', backgroundColor: C.white, border: `3px solid ${C.econ}`, padding: '6px 10px', fontSize: 21, fontWeight: 800, color: C.ink}}>
                <b style={{color: C.econ}}>骗回所缴纳的 100 万部分 → 按逃税罪定罪处罚</b>（纳税人缴纳税款后骗取所缴税款）
              </GateFlash>
              <GateFlash delay={134} tone={C.stamp} style={{position: 'absolute', left: 412, top: 190, width: 490, boxSizing: 'border-box', backgroundColor: C.white, border: `3px solid ${C.stamp}`, padding: '6px 10px', fontSize: 21, fontWeight: 800, color: C.ink}}>
                <b style={{color: C.stamp}}>超过所缴税款的 20 万部分 → 按骗取出口退税罪处罚</b>
              </GateFlash>
              <Mover delay={96} span={30} fromX={0} fromY={0} toX={352} toY={44} fadeAt={186} style={{position: 'absolute', left: 130, top: 96, zIndex: 3}}>
                <Chip tone="econ"><Coins size={20} color={C.white} strokeWidth={2.2} />100 万</Chip>
              </Mover>
              <Mover delay={110} span={30} fromX={0} fromY={0} toX={352} toY={104} fadeAt={200} style={{position: 'absolute', left: 130, top: 154, zIndex: 3}}>
                <Chip tone="stamp"><Coins size={20} color={C.white} strokeWidth={2.2} />20 万</Chip>
              </Mover>
              <div style={{position: 'absolute', left: 380, top: 288, width: 520}}>
                <LabelBlock size={22} color={C.ledger}>第2款：想象竞合 → 数罪并罚（刑法典唯一特例）</LabelBlock>
              </div>
            </div>
            <div data-stateful-terminal="rebate-token" style={{marginTop: 'auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10}}>
              <LabelBlock size={25} color={C.stamp}>一个骗回行为触犯两罪，依法数罪并罚</LabelBlock>
              <span style={{fontSize: 21, fontWeight: 800, color: C.inkSoft}}>100 万 → 逃税罪 ＋ 20 万 → 骗取出口退税罪</span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={36} marker="invoice-pair" style={{position: 'absolute', left: 964, top: 0, width: 812, height: 300}}>
          <Panel tone={C.brass} watermark={<FileWarning size={140} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', padding: '10px 16px', display: 'flex', flexDirection: 'column', gap: 7, justifyContent: 'center'}}>
            <TabChip tone={C.brass} icon={<FileWarning size={24} color={C.white} strokeWidth={2.2} />}>虚开发票罪（205之一）vs 虚开增值税专用发票罪（205）</TabChip>
            <div style={{display: 'flex', gap: 10}}>
              <div style={{flex: 1, border: `3px solid ${C.brass}`, backgroundColor: C.white, padding: '6px 10px', fontSize: 20, fontWeight: 800, color: C.ink, lineHeight: 1.42}}>
                <b style={{color: C.brass}}>虚开发票罪：</b>发票指<SoftHi>普通发票</SoftHi>（增值税专用发票可评价为普通发票）；保护法益＝发票的<ThinU color={C.brass}>公共信用</ThinU>；带非法使用目的实施虚开行为——虚开是唯一实行行为
              </div>
              <div style={{flex: 1, border: `3px solid ${C.ledger}`, backgroundColor: C.white, padding: '6px 10px', fontSize: 20, fontWeight: 800, color: C.ink, lineHeight: 1.42}}>
                <b style={{color: C.ledger}}>虚开增值税专用发票罪：</b>进入增值税缴纳流程——购买方支付<SoftHi>进项税额</SoftHi>给销售方，销售方开具增值税专用发票，凭票抵扣税款
              </div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={60} marker="fundraising-axis" style={{position: 'absolute', left: 964, top: 316, width: 812, height: 446}}>
          <Panel tone={C.econ} watermark={<TrendingUp size={150} color={C.econ} strokeWidth={1.6} />} style={{height: '100%', padding: '10px 16px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <TabChip tone={C.econ} icon={<Percent size={24} color={C.white} strokeWidth={2.2} />}>集资类犯罪 · 非法占有目的分岔</TabChip>
            <div style={{display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}>
              <Chip tone="night"><Landmark size={20} color={C.white} strokeWidth={2.2} />吸收资金</Chip>
              <Path color={C.econ} delay={150} span={16} style={{position: 'relative', width: 46, height: 4}} />
              <GateFlash delay={162} tone={C.econ} style={{border: `3px solid ${C.econ}`, backgroundColor: C.econSoft, padding: '3px 10px', fontSize: 22, fontWeight: 950, color: C.econ}}>有无非法占有目的？</GateFlash>
            </div>
            <div style={{display: 'flex', gap: 8, fontSize: 20, fontWeight: 800, color: C.ink}}>
              <div style={{flex: 1, border: `3px solid ${C.stamp}`, backgroundColor: C.white, padding: '5px 9px', lineHeight: 1.4}}>
                <b style={{color: C.stamp}}>有 → 集资诈骗罪</b>（以非法集资方式实施的诈骗罪）；集资后不用于生产经营、携带集资款逃匿 → 视为具有非法占有目的
              </div>
              <div style={{flex: 1, border: `3px solid ${C.econ}`, backgroundColor: C.white, padding: '5px 9px', lineHeight: 1.4}}>
                <b style={{color: C.econ}}>无 → 非法吸收公众存款罪</b>：非法性·公开性·利诱性（还本付息给付回报）·公众性（不特定对象）·存款性（想用于放贷等金融活动；用于正当生产经营仅属吸收资金）
              </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 5, fontSize: 20, fontWeight: 800, color: C.ink, lineHeight: 1.4}}>
              <div style={{backgroundColor: C.white, border: '2px solid rgba(32,40,36,0.25)', padding: '4px 10px'}}>向亲友或单位内部人员吸收资金 → 不属于向社会公众；明知其又向不特定对象吸收而放任 → 属于（2014）</div>
              <div style={{backgroundColor: C.white, border: '2px solid rgba(32,40,36,0.25)', padding: '4px 10px'}}>擅自发行股票、公司、企业债券罪：向社会不特定对象发行；针对特定对象人数超过 200 人 → 也构成</div>
              <div style={{backgroundColor: C.white, border: '2px solid rgba(32,40,36,0.25)', padding: '4px 10px'}}>通过传销手段实施 → 与组织、领导传销活动罪属牵连犯，择一重罪论处</div>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
