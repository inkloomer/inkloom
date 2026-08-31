import type {ReactNode} from 'react';
import {FileX, Gavel, Hand, ListOrdered, Network, Scale, ShieldX, Swords} from 'lucide-react';
import {C, Chip, Enter, GateFlash, LabelBlock, Mover, Neg, Panel, Path, Shell, SoftHi, TabChip, ThinU} from './kit';

export const MarketOrderScene = () => {
  const Lane = ({delay, tone, title, children}: {children: ReactNode; delay: number; title: string; tone: string}) => (
    <GateFlash delay={delay} tone={tone} style={{backgroundColor: C.white, border: `3px solid ${tone}`, padding: '6px 10px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 7, fontSize: 21, fontWeight: 800, color: C.ink, lineHeight: 1.4}}>
      <b style={{color: tone}}>{title}</b>
      {children}
    </GateFlash>
  );
  /* data-final-knowledge="illegal-operation-lane" data-final-knowledge="forced-trade-gate" data-final-knowledge="false-statement-lane" data-final-knowledge="contract-fraud-mirror" data-final-knowledge="pyramid-formula" */
  return (
    <Shell code="09" kicker="第八节" title="扰乱市场秩序罪">
      <div
        data-layout="market-order-gate-lane"
        data-visual-anchor="timeline-gate"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="illegal-operation-lane,forced-trade-gate,false-statement-lane,contract-fraud-mirror,pyramid-formula"
        data-focal-rule="a-coercion-token-forks-on-transaction-purpose-while-a-recruitment-fee-token-forks-on-what-counts-as-pay-basis"
        data-focal-channels="icon,connector,contrast,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="illegal-operation-lane" style={{position: 'absolute', left: 0, top: 0, width: 620, height: 762}}>
          <Panel tone={C.econ} watermark={<ListOrdered size={160} color={C.econ} strokeWidth={1.6} />} style={{height: '100%', padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <TabChip tone={C.econ} icon={<ListOrdered size={24} color={C.white} strokeWidth={2.2} />}>非法经营罪（第225条）· 四项通道</TabChip>
            <div style={{fontSize: 20, fontWeight: 900, color: C.econ}}>须行政特别许可而未经许可，不是泛指一切非法经营</div>
            <Lane delay={40} tone={C.econ} title="①专营专卖、限制买卖：">
              <Chip tone="econ">烟草 ✓</Chip>
              <Neg size={20}>食盐已不是</Neg>
              <Neg size={20}>陈化粮</Neg>
              <Neg size={20}>无证成品油</Neg>
              <Neg size={20}>个人买卖黄金</Neg>
            </Lane>
            <Lane delay={58} tone={C.ledger} title="②买卖进出口许可证、原产地证明及经营许可证、批准文件" />
            <Lane delay={76} tone={C.brass} title="③未经批准经营证券、期货、保险业务；非法从事资金支付结算业务（需央行许可证）" />
            <Lane delay={94} tone={C.stamp} title="④兜底 · 同类解释扩张：">
              <Chip tone="white">非法买卖外汇</Chip>
              <Chip tone="white">经营非法出版物</Chip>
              <Chip tone="white">擅自经营国际电信业务</Chip>
              <Chip tone="white">非法发行彩票</Chip>
              <Chip tone="white">POS机提现</Chip>
              <Chip tone="white">网络水军</Chip>
              <Chip tone="white">放高利贷</Chip>
            </Lane>
            <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 800, color: C.ink, lineHeight: 1.4}}>
              <ThinU color={C.stamp}>非法出版物（无合法著作权）→ 非法经营罪；盗版制品（盗版对象有著作权）→ 侵犯著作权罪（2009）</ThinU>
            </div>
          </Panel>
        </Enter>
        <Enter delay={40} marker="forced-trade-gate" style={{position: 'absolute', left: 644, top: 0, width: 486, height: 400}}>
          <Panel tone={C.stamp} watermark={<Swords size={150} color={C.stamp} strokeWidth={1.6} />} style={{height: '100%', padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 6}}>
            <TabChip tone={C.stamp} icon={<Swords size={24} color={C.white} strokeWidth={2.2} />}>强迫交易罪（第226条）· 目的闸门</TabChip>
            <div style={{backgroundColor: C.white, border: '2px solid rgba(32,40,36,0.25)', padding: '5px 10px', fontSize: 20, fontWeight: 800, color: C.ink, lineHeight: 1.45}}>
              以<b style={{color: C.stamp}}>暴力、威胁</b>手段：强买强卖商品；强迫提供/接受服务（含强迫借贷）；强迫参与/退出投标、拍卖；强迫转让/收购公司企业股份、债券或者其他资产；强迫参与/退出特定经营活动
            </div>
            <div style={{position: 'relative', height: 46}}>
              <div data-stateful-source="coercion-token" style={{position: 'absolute', left: 0, top: 2}}>
                <Chip tone="night"><Hand size={20} color={C.white} strokeWidth={2.2} />暴力、威胁手段</Chip>
              </div>
              <Path color={C.stamp} delay={100} span={14} style={{position: 'absolute', left: 196, top: 22, width: 44, height: 4}} />
              <GateFlash delay={112} tone={C.stamp} style={{position: 'absolute', left: 244, top: 2, border: `3px solid ${C.stamp}`, backgroundColor: C.white, padding: '2px 10px', fontSize: 22, fontWeight: 950, color: C.stamp}}>看主观目的</GateFlash>
            </div>
            <div style={{position: 'relative', height: 104}}>
              <Mover delay={118} span={26} fromX={232} fromY={4} toX={0} toY={0} style={{position: 'absolute', left: 12, top: 0, zIndex: 3}}>
                <Chip tone="econ"><Gavel size={20} color={C.white} strokeWidth={2.2} />交易目的 → 强迫交易罪</Chip>
              </Mover>
              <div data-stateful-terminal="coercion-token" style={{position: 'absolute', left: 12, top: 52, zIndex: 3}}>
                <Mover delay={140} span={26} fromX={232} fromY={-48} toX={0} toY={0}>
                  <Chip tone="stamp"><ShieldX size={20} color={C.white} strokeWidth={2.2} />非法占有目的 → 抢劫/敲诈</Chip>
                </Mover>
              </div>
            </div>
            <div style={{fontSize: 20, fontWeight: 800, color: C.ink, lineHeight: 1.4, marginTop: 'auto'}}>
              本罪与抢劫罪、敲诈勒索罪不是对立排斥：同时符合属<b style={{color: C.stamp}}>想象竞合，择一重罪</b>（店主强迫旅客高价买商品否则拿刀砍 → 定抢劫罪）；非法占有目的以借贷为名 → 抢劫罪/敲诈勒索罪
            </div>
          </Panel>
        </Enter>
        <Enter delay={66} marker="false-statement-lane" style={{position: 'absolute', left: 1154, top: 0, width: 622, height: 400}}>
          <Panel tone={C.ledger} watermark={<FileX size={140} color={C.ledger} strokeWidth={1.6} />} style={{height: '100%', padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 6, justifyContent: 'center'}}>
            <TabChip tone={C.ledger} icon={<FileX size={24} color={C.white} strokeWidth={2.2} />}>提供虚假证明文件罪（第229条）</TabChip>
            <div style={{fontSize: 20, fontWeight: 800, color: C.ink, lineHeight: 1.45}}>
              承担资产评估、验资、会计、审计、法律服务等职责的中介组织人员（<ThinU color={C.ledger}>不限行业领域、不限有无资质——不是真正身份犯</ThinU>）<SoftHi>故意</SoftHi>提供虚假证明文件，情节严重
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 7, fontSize: 20, fontWeight: 800, color: C.ink}}>
              <Chip tone="ledger">过失对应罪 → 出具证明文件重大失实罪</Chip>
              <Chip tone="ledger">犯本罪又受贿 → 择一重罪论处（一般是非国家工作人员受贿罪）</Chip>
              <Chip tone="white">例：企业提交虚假人才引进证明为他人落户 → 本罪（2023）</Chip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={90} marker="contract-fraud-mirror" style={{position: 'absolute', left: 644, top: 416, width: 1132, height: 152}}>
          <Panel tone={C.brass} watermark={<Scale size={140} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 5, justifyContent: 'center'}}>
            <TabChip tone={C.brass} icon={<Scale size={24} color={C.white} strokeWidth={2.2} />}>合同诈骗罪 · 法条关系镜</TabChip>
            <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, fontSize: 20, fontWeight: 800, color: C.ink, lineHeight: 1.4}}>
              <Chip tone="white">普通诈骗罪 A：侵犯他人财产权（一般法条）</Chip>
              <Chip tone="brass">合同诈骗罪 A＋B：B＝扰乱市场秩序（特殊法条）</Chip>
              <span>应限于比较正式的经济合同（货物买卖、借贷、运输、承包等）；欺骗一般公民签订投资协议获得10万元后潜逃 → 未达扰乱市场秩序程度，定普通诈骗罪</span>
              <Chip tone="ledger">与金融诈骗罪（贷款诈骗、保险诈骗）法条竞合 → 优先特殊法条：利用合同诈骗保险金 → 保险诈骗罪（2017）</Chip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={110} marker="pyramid-formula" style={{position: 'absolute', left: 644, top: 584, width: 1132, height: 178}}>
          <Panel tone={C.econ} watermark={<Network size={150} color={C.econ} strokeWidth={1.6} />} style={{height: '100%', padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 5}}>
            <TabChip tone={C.econ} icon={<Network size={24} color={C.white} strokeWidth={2.2} />}>组织、领导传销活动罪（第224条之一）· 计酬公式闸门</TabChip>
            <div style={{position: 'relative', height: 84}}>
              <div style={{position: 'absolute', left: 0, top: 14}}>
                <Chip tone="night"><Network size={20} color={C.white} strokeWidth={2.2} />缴纳费用获得加入资格 · 组成层级</Chip>
              </div>
              <Path color={C.econ} delay={190} span={16} style={{position: 'absolute', left: 312, top: 40, width: 76, height: 4}} />
              <Mover delay={196} span={24} fromX={-66} toX={0} style={{position: 'absolute', left: 380, top: 18, zIndex: 2}}>
                <Chip tone="econ">计酬/返利依据</Chip>
              </Mover>
              <GateFlash delay={210} tone={C.stamp} style={{position: 'absolute', left: 572, top: 2, width: 250, height: 38, boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: C.white, border: `3px solid ${C.stamp}`, fontSize: 21, fontWeight: 950, color: C.stamp}}>发展人员数量 → 传销</GateFlash>
              <GateFlash delay={224} tone={C.econ} style={{position: 'absolute', left: 572, top: 46, width: 250, height: 38, boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: C.white, border: `3px solid ${C.econ}`, fontSize: 21, fontWeight: 950, color: C.econ}}>销售业绩 → 合法销售</GateFlash>
              <div style={{position: 'absolute', left: 846, top: 4, width: 270, fontSize: 20, fontWeight: 800, color: C.ink, lineHeight: 1.4}}>"骗取财物"是间接目的：不要求有对应诈骗行为，更不要求实际骗取到财物</div>
            </div>
            <div style={{fontSize: 20, fontWeight: 800, color: C.ink, marginTop: 'auto'}}>只处罚组织者、领导者；引诱、胁迫参加者继续发展他人参加，骗取财物，扰乱经济社会秩序</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
