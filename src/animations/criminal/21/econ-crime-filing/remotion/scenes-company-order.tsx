import type {ReactNode} from 'react';
import {Briefcase, Building2, Coins, HandCoins, Landmark, Scale, Split, Users} from 'lucide-react';
import {C, Chip, Enter, GateFlash, LabelBlock, Mover, Neg, Panel, Path, Shell, SoftHi, TabChip, ThinU} from './kit';

export const CompanyOrderScene = () => {
  /* data-final-knowledge="bribe-contrast" data-final-knowledge="bribe-giving-lane" data-final-knowledge="friend-profit-chain" data-final-knowledge="same-business-plaque" */
  return (
    <Shell code="05" kicker="第三节" title="妨害对公司、企业的管理秩序罪">
      <div
        data-layout="company-order-bribe-flow"
        data-visual-anchor="flow-path"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="bribe-contrast,bribe-giving-lane,friend-profit-chain,same-business-plaque"
        data-focal-rule="bribe-tokens-flow-from-giver-to-holder-through-the-seek-benefit-gate-while-profit-token-detours-b-c-a-and-returns-as-embezzlement"
        data-focal-channels="icon,connector,contrast,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="bribe-contrast" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 190}}>
          <Panel tone={C.econ} watermark={<HandCoins size={150} color={C.econ} strokeWidth={1.6} />} style={{height: '100%', padding: '8px 16px', display: 'flex', flexDirection: 'column', gap: 6, justifyContent: 'center'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <TabChip tone={C.econ} icon={<HandCoins size={24} color={C.white} strokeWidth={2.2} />}>受贿对比轴 · 是否要求"为他人谋取利益"</TabChip>
              <span data-stateful-source="bribe-token"><Chip tone="stamp"><Coins size={20} color={C.white} strokeWidth={2.2} />请托人交付财物</Chip></span>
              <Path color={C.stamp} delay={40} span={20} style={{position: 'relative', width: 90, height: 4}} />
              <GateFlash delay={62} tone={C.econ} style={{border: `3px solid ${C.econ}`, backgroundColor: C.econSoft, padding: '4px 12px', fontSize: 22, fontWeight: 950, color: C.econ}}>为他人谋取利益？</GateFlash>
            </div>
            <div style={{display: 'flex', gap: 16}}>
              <div style={{flex: 1, border: `3px solid ${C.ledger}`, backgroundColor: C.white, padding: '6px 12px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, fontSize: 21, fontWeight: 800, color: C.ink}}>
                <Users size={22} color={C.ledger} strokeWidth={2.2} /><b style={{color: C.ledger}}>受贿罪 · 国家工作人员：</b>索取贿赂<SoftHi>不要求</SoftHi>为他人谋取利益；只有收受贿赂<SoftHi>要求</SoftHi>谋取利益
              </div>
              <div data-stateful-terminal="bribe-token" style={{flex: 1, border: `3px solid ${C.econ}`, backgroundColor: C.white, padding: '6px 12px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, fontSize: 21, fontWeight: 800, color: C.ink}}>
                <Building2 size={22} color={C.econ} strokeWidth={2.2} /><b style={{color: C.econ}}>非国家工作人员受贿罪（第163条）：</b>公司企业其他单位工作人员——不管是索取还是收受贿赂，都<SoftHi>要求</SoftHi>为他人谋取利益，数额较大；既包括正当利益也包括不正当利益，只要求许诺
              </div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={40} marker="bribe-giving-lane" style={{position: 'absolute', left: 0, top: 204, width: 1776, height: 158}}>
          <Panel tone={C.stamp} watermark={<Split size={140} color={C.stamp} strokeWidth={1.6} />} style={{height: '100%', padding: '8px 16px', display: 'flex', flexDirection: 'column', gap: 6, justifyContent: 'center'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <TabChip tone={C.stamp} icon={<Split size={24} color={C.white} strokeWidth={2.2} />}>对非国家工作人员行贿罪（第164条）· 行贿方向分岔</TabChip>
              <span style={{fontSize: 21, fontWeight: 800, color: C.ink}}>两个行贿罪都要求为谋取<SoftHi>不正当利益</SoftHi></span>
            </div>
            <div style={{position: 'relative', height: 84}}>
              <div style={{position: 'absolute', left: 0, top: 16}}><Chip tone="night"><HandCoins size={20} color={C.white} strokeWidth={2.2} />给予财物</Chip></div>
              <Path color={C.stamp} delay={80} span={24} style={{position: 'absolute', left: 140, top: 40, width: 1000, height: 4}} />
              <Mover delay={86} span={30} fromX={0} toX={620} fadeAt={122} style={{position: 'absolute', left: 20, top: 14, zIndex: 2}}>
                <Chip tone="stamp"><Coins size={20} color={C.white} strokeWidth={2.2} />财物</Chip>
              </Mover>
              <GateFlash delay={104} tone={C.ledger} style={{position: 'absolute', left: 196, top: 44, width: 480, height: 40, boxSizing: 'border-box', display: 'flex', alignItems: 'center', gap: 8, backgroundColor: C.white, border: `3px solid ${C.ledger}`, padding: '2px 10px', fontSize: 21, fontWeight: 950, color: C.ledger}}><Landmark size={20} color={C.ledger} strokeWidth={2.2} />对国家工作人员 → 行贿罪（第389条）</GateFlash>
              <GateFlash delay={116} tone={C.stamp} style={{position: 'absolute', left: 688, top: 0, width: 452, height: 40, boxSizing: 'border-box', display: 'flex', alignItems: 'center', gap: 8, backgroundColor: C.white, border: `3px solid ${C.stamp}`, padding: '2px 10px', fontSize: 21, fontWeight: 950, color: C.stamp}}><Building2 size={20} color={C.stamp} strokeWidth={2.2} />对非国家工作人员 → 第164条</GateFlash>
              <GateFlash delay={128} tone={C.brass} style={{position: 'absolute', left: 688, top: 44, width: 700, height: 40, boxSizing: 'border-box', display: 'flex', alignItems: 'center', gap: 8, backgroundColor: C.white, border: `3px solid ${C.brass}`, padding: '2px 10px', fontSize: 21, fontWeight: 950, color: C.brass}}><Landmark size={20} color={C.brass} strokeWidth={2.2} />对外国公职人员、国际公共组织官员行贿罪（谋取不正当的商业利益）</GateFlash>
              <div style={{position: 'absolute', left: 1400, top: 0, width: 364, display: 'flex', flexDirection: 'column', gap: 8}}>
                <Neg size={20}>因被勒索给予财物，没有获得不正当利益 → 不构成（类推解释）</Neg>
                <span style={{fontSize: 20, fontWeight: 900, color: C.brass}}>外国公职人员在我国境内受贿 → 非国家工作人员受贿罪</span>
              </div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={70} marker="friend-profit-chain" style={{position: 'absolute', left: 0, top: 376, width: 1010, height: 386}}>
          <Panel tone={C.brass} watermark={<Briefcase size={150} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', padding: '10px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.brass} icon={<Briefcase size={24} color={C.white} strokeWidth={2.2} />}>为亲友非法牟利罪（第166条）· 交易流转链</TabChip>
            <div style={{position: 'relative', height: 108}}>
              <div style={{position: 'absolute', left: 0, top: 18}}><Chip tone="night"><Building2 size={20} color={C.white} strokeWidth={2.2} />B公司</Chip></div>
              <Path color={C.brass} delay={140} span={20} style={{position: 'absolute', left: 108, top: 46, width: 240, height: 4}} />
              <Mover delay={146} span={26} fromX={0} toX={240} fadeAt={174} style={{position: 'absolute', left: 20, top: 16, zIndex: 2}}>
                <Chip tone="brass"><Coins size={20} color={C.white} strokeWidth={2.2} />电子产品订单</Chip>
              </Mover>
              <div style={{position: 'absolute', left: 356, top: 0}}><Chip tone="brass"><Users size={20} color={C.white} strokeWidth={2.2} />C公司（亲友赵某）</Chip></div>
              <Path color={C.brass} delay={186} span={20} style={{position: 'absolute', left: 560, top: 46, width: 200, height: 4}} />
              <Mover delay={192} span={24} fromX={0} toX={200} fadeAt={218} style={{position: 'absolute', left: 470, top: 52, zIndex: 2}}>
                <Chip tone="stamp"><Coins size={20} color={C.white} strokeWidth={2.2} />高价转卖</Chip>
              </Mover>
              <div style={{position: 'absolute', left: 766, top: 18}}><Chip tone="night"><Building2 size={20} color={C.white} strokeWidth={2.2} />A公司（国有）受损</Chip></div>
              <div style={{position: 'absolute', left: 0, top: 74, fontSize: 20, fontWeight: 900, color: C.inkSoft}}>原 B → A，变为 B → C → A：A 公司的公共财产损失转化为 C 公司的利润</div>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 8, fontSize: 21, fontWeight: 800, color: C.ink}}>
              <b style={{color: C.brass}}>三情形：</b>
              <Chip tone="brass">盈利业务交由亲友经营</Chip>
              <Chip tone="brass">明显高于市场价采购 · 明显低于市场价销售</Chip>
              <Chip tone="brass">采购、接受不合格商品服务</Chip>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10, marginTop: 'auto'}}>
              <LabelBlock size={24} color={C.stamp}>与贪污罪想象竞合，择一重罪论处</LabelBlock>
              <span style={{fontSize: 21, fontWeight: 800, color: C.ink}}>国有公司、企业、事业单位的工作人员利用职务便利；其他公司企业工作人员（修十二增设）致利益遭重大损失依前款处罚</span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={90} marker="same-business-plaque" style={{position: 'absolute', left: 1034, top: 376, width: 742, height: 386}}>
          <Panel tone={C.ledger} watermark={<Scale size={150} color={C.ledger} strokeWidth={1.6} />} style={{height: '100%', padding: '10px 16px', display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'center'}}>
            <TabChip tone={C.ledger} icon={<Scale size={24} color={C.white} strokeWidth={2.2} />}>非法经营同类营业罪（第165条）</TabChip>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 8, fontSize: 22, fontWeight: 800, color: C.ink}}>
              <Chip tone="ledger"><Users size={20} color={C.white} strokeWidth={2.2} />董事、监事、高级管理人员</Chip>
              <Chip tone="econ">国有公司、企业（第1款）</Chip>
              <Chip tone="ledger">其他公司、企业（修十二增设第2款）</Chip>
            </div>
            <div style={{fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.5}}>
              利用职务便利，<SoftHi>自己经营或者为他人经营</SoftHi>与其所任职公司、企业<ThinU color={C.ledger}>同类</ThinU>的营业，获取非法利益：
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 8}}>
              <Chip tone="white">数额巨大 → 三年以下有期徒刑或者拘役，并处或者单处罚金</Chip>
              <Chip tone="white">数额特别巨大 → 三年以上七年以下有期徒刑，并处罚金</Chip>
            </div>
            <div style={{fontSize: 21, fontWeight: 900, color: C.ledger}}>致公司、企业利益遭受重大损失的，依照前款的规定处罚</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
