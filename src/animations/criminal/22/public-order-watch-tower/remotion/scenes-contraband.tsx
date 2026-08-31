import type {ReactNode} from 'react';
import {BookCheck, Coins, Repeat, Scale, Swords} from 'lucide-react';
import {C, Chip, Enter, GateFlash, LabelBlock, Mover, Neg, Panel, Path, Shell, SoftHi, TabChip, ThinU} from './kit';

export const ContrabandWordingScene = () => {
  const Flow = ({x, w, label, tone, delay, children}: {children: ReactNode; delay: number; label: string; tone: string; w: number; x: number}) => (
    <GateFlash delay={delay} tone={tone} style={{position: 'absolute', left: x, top: 6, width: w, minHeight: 74, boxSizing: 'border-box', backgroundColor: C.white, border: `3px solid ${tone}`, padding: '4px 9px', display: 'flex', flexDirection: 'column', gap: 2}}>
      <span style={{fontSize: 19, fontWeight: 950, color: tone}}>{label}</span>
      <span style={{fontSize: 19, fontWeight: 800, color: C.ink, lineHeight: 1.3}}>{children}</span>
    </GateFlash>
  );
  /* data-final-knowledge="theft-sale-table" data-final-knowledge="smuggle-sale-table" data-final-knowledge="wording-common-rule" data-final-knowledge="buy-sell-split" data-final-knowledge="completion-types" */
  return (
    <Shell code="12" kicker="第六节大总结" title="违禁品罪数·'贩卖销售出售倒卖买卖'">
      <div
        data-layout="contraband-wording-boards"
        data-visual-anchor="comparison-axis"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="theft-sale-table,smuggle-sale-table,wording-common-rule,buy-sell-split,completion-types"
        data-focal-rule="a-contraband-token-forks-into-theft-and-smuggle-tables-with-different-count-outcomes-while-a-wording-token-splits-sell-only-versus-buy-and-sell"
        data-focal-channels="icon,contrast,connector,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="theft-sale-table" style={{position: 'absolute', left: 0, top: 0, width: 1050, height: 344}}>
          <Panel tone={C.navy} watermark={<Coins size={150} color={C.navy} strokeWidth={1.6} />} style={{height: '100%', padding: '10px 16px', display: 'flex', flexDirection: 'column', gap: 5}}>
            <TabChip tone={C.navy} icon={<Coins size={24} color={C.white} strokeWidth={2.2} />}>大总结① 盗窃违禁品 ＋ 又销售（前后两行为）</TabChip>
            <div style={{position: 'relative', height: 128}}>
              <div data-stateful-source="contraband-token" style={{position: 'absolute', left: 0, top: 16}}>
                <Chip tone="night"><Swords size={20} color={C.white} strokeWidth={2.2} />盗窃到违禁品</Chip>
              </div>
              <Path color={C.navy} delay={56} span={20} style={{position: 'absolute', left: 170, top: 42, width: 830, height: 4}} />
              <Mover delay={62} span={30} fromX={0} toX={790} fadeAt={140} style={{position: 'absolute', left: 14, top: 16, zIndex: 3}}>
                <Chip tone="navy"><Coins size={20} color={C.white} strokeWidth={2.2} />假币 · 淫秽物品 · 文物 · 毒品 · 枪支</Chip>
              </Mover>
              <div data-stateful-terminal="contraband-token" style={{position: 'absolute', inset: 0, pointerEvents: 'none'}}>
              <Flow x={180} w={200} tone={C.navy} delay={100} label="假币 / 淫秽物品 / 文物 / 毒品">盗窃罪＋出售假币罪等 → <b style={{color: C.crimson}}>数罪并罚</b></Flow>
              <Flow x={396} w={250} tone={C.crimson} delay={114} label="枪支（例外）">盗窃枪支罪＋非法买卖枪支罪 → 只定<b style={{color: C.crimson}}>盗窃枪支罪</b></Flow>
              <Flow x={662} w={340} tone={C.gold} delay={128} label="对象认识错误">欲盗普通财物到手是违禁品又出售 → 盗窃罪（违禁品可包容评价为普通财物）＋相应罪名 → <b style={{color: C.crimson}}>并罚</b></Flow>
              </div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={30} marker="smuggle-sale-table" style={{position: 'absolute', left: 1074, top: 0, width: 702, height: 344}}>
          <Panel tone={C.torch} watermark={<Scale size={140} color={C.torch} strokeWidth={1.6} />} style={{height: '100%', padding: '10px 16px', display: 'flex', flexDirection: 'column', gap: 5}}>
            <TabChip tone={C.torch} icon={<Scale size={24} color={C.white} strokeWidth={2.2} />}>大总结① 走私 ＋ 又销售（规律相反）</TabChip>
            <div style={{display: 'flex', flexDirection: 'column', gap: 5, fontSize: 20, fontWeight: 800, color: C.ink, lineHeight: 1.38}}>
              <div style={{backgroundColor: C.white, border: '2px solid rgba(35,38,31,0.25)', padding: '4px 10px'}}>假币·淫秽物品·文物（走私＋销售）→ 只定前面的<b style={{color: C.torch}}>走私犯罪</b>，不另罚（文物：入境不定走私文物罪；出境定走私文物罪）</div>
              <div style={{backgroundColor: C.white, border: '2px solid rgba(35,38,31,0.25)', padding: '4px 10px'}}>毒品（走私＋贩卖）→ 定<b style={{color: C.torch}}>走私、贩卖毒品罪</b>（选择性罪名），不并罚</div>
              <div style={{backgroundColor: C.white, border: '2px solid rgba(35,38,31,0.25)', padding: '4px 10px'}}>枪支（走私＋买卖）→ <b style={{color: C.crimson}}>两罪并罚（例外！）</b></div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={60} marker="wording-common-rule" style={{position: 'absolute', left: 0, top: 360, width: 1050, height: 402}}>
          <Panel tone={C.pine} watermark={<BookCheck size={160} color={C.pine} strokeWidth={1.6} />} style={{height: '100%', padding: '10px 16px', display: 'flex', flexDirection: 'column', gap: 6}}>
            <TabChip tone={C.pine} icon={<BookCheck size={24} color={C.white} strokeWidth={2.2} />}>大总结② "贩卖·销售·出售·倒卖·买卖" 共同点</TabChip>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 7, fontSize: 20, fontWeight: 800, color: C.ink, lineHeight: 1.4}}>
              <div style={{backgroundColor: C.white, border: '2px solid rgba(35,38,31,0.25)', padding: '4px 10px'}}>客观要求<b style={{color: C.pine}}>有偿转让</b>；有偿不限于金钱，可物物交换（1克毒品换10袋大米）</div>
              <div style={{backgroundColor: C.white, border: '2px solid rgba(35,38,31,0.25)', padding: '4px 10px'}}>主观<b style={{color: C.pine}}>不要求营利目的</b>——赔本卖也是卖；无偿转让是"送"不是"卖"</div>
              <div style={{backgroundColor: C.white, border: '2px solid rgba(35,38,31,0.25)', padding: '4px 10px'}}>毒害性物质换放射性物质 → 均构成非法买卖危险物质罪（2014）；枪换子弹 → 非法买卖枪支、弹药罪</div>
            </div>
            <div data-final-knowledge="buy-sell-split" style={{position: 'relative', height: 128}}>
              <div style={{position: 'absolute', left: 0, top: 8}}>
                <Chip tone="night"><Repeat size={20} color={C.white} strokeWidth={2.2} />出卖行为</Chip>
              </div>
              <Path color={C.pine} delay={170} span={16} style={{position: 'absolute', left: 130, top: 30, width: 60, height: 4}} />
              <Mover delay={176} span={22} fromX={0} toX={56} fadeAt={216} style={{position: 'absolute', left: 14, top: 8, zIndex: 3}}>
                <Chip tone="pine">字义</Chip>
              </Mover>
              <GateFlash delay={210} tone={C.pine} style={{position: 'absolute', left: 196, top: 0, width: 380, backgroundColor: C.white, border: `3px solid ${C.pine}`, padding: '4px 10px', fontSize: 20, fontWeight: 800, color: C.ink}}><b style={{color: C.pine}}>贩卖/销售/倒卖＝只罚"卖"</b>：先买进后卖出 ✓ 单纯卖出 ✓；倒卖文物（新司法解释）无买进仅卖出也构成</GateFlash>
              <GateFlash delay={226} tone={C.crimson} style={{position: 'absolute', left: 196, top: 64, width: 380, backgroundColor: C.white, border: `3px solid ${C.crimson}`, padding: '4px 10px', fontSize: 20, fontWeight: 800, color: C.ink}}><b style={{color: C.crimson}}>不罚自用购买</b>；为出售而购买 → 一般作为出售的<b style={{color: C.crimson}}>预备</b>处理（为贩卖而购毒品＝贩卖毒品罪预备）</GateFlash>
              <GateFlash delay={242} tone={C.navy} style={{position: 'absolute', left: 596, top: 0, width: 430, backgroundColor: C.white, border: `3px solid ${C.navy}`, padding: '4px 10px', fontSize: 20, fontWeight: 800, color: C.ink}}><b style={{color: C.navy}}>买卖＝既罚"卖"也罚"买"</b>：买包括为卖出而买进，也包括<b style={{color: C.navy}}>为自己使用而买进</b>——非法买卖枪支弹药罪、非法买卖危险物质罪、买卖国家机关公文证件印章罪、买卖身份证件罪</GateFlash>
              <div style={{position: 'absolute', left: 596, top: 84, width: 430, fontSize: 20, fontWeight: 800, color: C.ink, lineHeight: 1.4}}>
                <b style={{color: C.crimson}}>复杂物物交换（2014）：</b>吸毒者甲用毒害性物质换乙的毒品：甲→非法买卖危险物质罪（购毒自用不构成贩卖）；乙→非法买卖危险物质罪＋贩卖毒品罪，<b style={{color: C.crimson}}>两行为并罚</b>
              </div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={90} marker="completion-types" style={{position: 'absolute', left: 1074, top: 360, width: 702, height: 402}}>
          <Panel tone={C.gold} watermark={<Coins size={150} color={C.gold} strokeWidth={1.6} />} style={{height: '100%', padding: '10px 16px', display: 'flex', flexDirection: 'column', gap: 6}}>
            <TabChip tone={C.gold} icon={<BookCheck size={24} color={C.white} strokeWidth={2.2} />}>既遂条件两类</TabChip>
            <div style={{backgroundColor: C.white, border: `3px solid ${C.gold}`, padding: '6px 10px', fontSize: 20, fontWeight: 800, color: C.ink, lineHeight: 1.42, flexShrink: 0}}>
              <div><b style={{color: C.gold}}>第一类：出售是既遂条件。</b>生产、销售伪劣产品罪 → 只有销售金额5万元才既遂</div>
              <div>仅生产未售出（库存额15万元）→ 犯罪未遂</div>
            </div>
            <div style={{backgroundColor: C.white, border: `3px solid ${C.pine}`, padding: '6px 10px', fontSize: 20, fontWeight: 800, color: C.ink, lineHeight: 1.42, flexShrink: 0}}>
              <b style={{color: C.pine}}>第二类：出售不是既遂条件。</b>制作·复制·出版·贩卖·传播淫秽物品牟利罪（2018）、走私·贩卖·运输·制造毒品罪、出售·购买·运输假币罪——选择性罪名各行为均可独立既遂：完成<b style={{color: C.pine}}>其中一个行为</b>即既遂，不要求后续卖出
            </div>
            <div style={{marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 10}}>
              <LabelBlock size={22} color={C.pine}>选择性罪名 → 完成任一行为即既遂</LabelBlock>
              <LabelBlock size={22} color={C.gold}>单一结果犯 → 须达销售金额</LabelBlock>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
