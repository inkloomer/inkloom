import {ArrowLeftRight, Coins, Handshake, Landmark, RefreshCw, Scale, Users} from 'lucide-react';
import {C, Enter, IconChip, Neg, Panel, Shell, SoftHi, TabChip, ThinU} from './kit';

export const BriberyTradeDeskScene = () => {
  /* data-final-knowledge="interest-strip" data-final-knowledge="trade-panel" data-final-knowledge="method-panel" */
  return (
    <Shell code="04" kicker="第三节 · 受贿罪" title="受贿罪·交易结构">
      <div
        data-layout="bribery-trade-desk"
        data-visual-anchor="document-fork"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="interest-strip,trade-panel,method-panel"
        data-focal-rule="bribery-is-money-for-power-exchange-priced-by-non-purchasability-of-official-acts"
        data-focal-channels="icon,contrast,enclosure,connector"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="interest-strip" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 150}}>
          <Panel tone={C.gold} watermark={<Handshake size={110} color={C.gold} strokeWidth={1.6} />} style={{height: '100%', padding: '10px 18px', display: 'flex', flexDirection: 'column', gap: 6, justifyContent: 'center'}}>
            <TabChip tone={C.gold} icon={<Handshake size={22} color={C.white} strokeWidth={2.2} />}>保护法益：职务行为的不可收买性（多数说）</TabChip>
            <div style={{display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center'}}>
              <SoftHi style={{fontSize: 19 }}>少数说＝职务行为的公正性</SoftHi>
              <SoftHi style={{fontSize: 19 }}>打信息差案：多数说定受贿罪，与诈骗罪想象竞合，择一重罪论处</SoftHi>
            </div>
          </Panel>
        </Enter>
        <Enter delay={18} marker="trade-panel" style={{position: 'absolute', left: 0, top: 174, width: 964, height: 534}}>
          <Panel tone={C.indigo} watermark={<ArrowLeftRight size={160} color={C.indigo} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.indigo} icon={<ArrowLeftRight size={24} color={C.white} strokeWidth={2.2} />}>实行行为＝交易行为（权钱交易，形成对价关系）</TabChip>
            <IconChip icon={<Landmark size={26} color={C.white} strokeWidth={2.2} />} tone={C.indigo} title="卖方＝国家工作人员：">
              出卖的是职务行为；单纯收钱、单纯办事都不是实行行为
            </IconChip>
            <IconChip icon={<Users size={26} color={C.white} strokeWidth={2.2} />} tone={C.ward} title="买方＝请托人：">
              用钱财购买职务行为
            </IconChip>
            <IconChip icon={<Coins size={26} color={C.white} strokeWidth={2.2} />} tone={C.gold} title="贿赂＝财物＋财产性利益：">
              房屋装修、旅游、嫖资属于财产性利益；写论文、谋取晋升机会、为子女找工作不是受贿
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.patina} title="利用＝无A则无B：">
              请托人不是看中职务行为就不会给钱；办事与收钱因时间长、数量小难以认定对价的，不认定为受贿
            </IconChip>
            <Enter delay={64}><Neg size={19}>职务＝公务；坐诊看病是纯粹技术劳动→构成非国家工作人员受贿罪</Neg></Enter>
          </Panel>
        </Enter>
        <Enter delay={30} marker="method-panel" style={{position: 'absolute', left: 988, right: 0, top: 174, bottom: 0}}>
          <Panel tone={C.patina} watermark={<RefreshCw size={150} color={C.patina} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.patina} icon={<RefreshCw size={24} color={C.white} strokeWidth={2.2} />}>职务便利·交易方式</TabChip>
            <IconChip icon={<Landmark size={26} color={C.white} strokeWidth={2.2} />} tone={C.indigo} title="直接型：">
              利用职务本身直接为请托人谋取利益
            </IconChip>
            <IconChip icon={<Users size={26} color={C.white} strokeWidth={2.2} />} tone={C.ward} title="间接型：">
              利用职务的影响力让第三人办事，影响力须达到制约性程度
            </IconChip>
            <IconChip icon={<Coins size={26} color={C.white} strokeWidth={2.2} />} tone={C.gold} title="事前型·事后型：">
              事前有约定即成立权钱交易；办事时无收钱意图，事后基于已办成的事收钱形成对价，成立受贿
            </IconChip>
            <IconChip icon={<RefreshCw size={26} color={C.white} strokeWidth={2.2} />} tone={C.rouge} title="变相受贿：">
              低价卖房、收受干股、合作投资名义未出资、赌博输钱、特定关系人挂名领薪、名为借用实为受贿
            </IconChip>
            <Enter delay={72}><ThinU>谋取的利益，正当利益与不正当利益均可</ThinU></Enter>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
