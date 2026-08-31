import type {ReactNode} from 'react';
import {Axe, Bird, Flame, TreePine, Zap} from 'lucide-react';
import {C, Chip, Enter, GateFlash, LabelBlock, Mover, Neg, Panel, Path, Shell, SoftHi, TabChip, ThinU} from './kit';

export const EnvironmentCrimesScene = () => {
  /* data-final-knowledge="forest-formula" data-final-knowledge="forest-boundary" data-final-knowledge="wildlife-lane" data-final-knowledge="pollution-gate" */
  return (
    <Shell code="11" kicker="第六节 · 环境犯罪" title="林木·野生动物·污染环境">
      <div
        data-layout="environment-crime-lanes"
        data-visual-anchor="comparison-axis"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="forest-formula,forest-boundary,wildlife-lane,pollution-gate"
        data-focal-rule="a-logger-token-forks-by-possession-purpose-while-a-specimen-token-passes-wildlife-gates-and-effluent-reaches-the-pollution-gate"
        data-focal-channels="icon,contrast,connector,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="forest-formula" style={{position: 'absolute', left: 0, top: 0, width: 1150, height: 500}}>
          <Panel tone={C.pine} watermark={<TreePine size={170} color={C.pine} strokeWidth={1.6} />} style={{height: '100%', padding: '10px 16px', display: 'flex', flexDirection: 'column', gap: 6}}>
            <TabChip tone={C.pine} icon={<TreePine size={24} color={C.white} strokeWidth={2.2} />}>针对林木的犯罪（第345条）· A/B 公式轴</TabChip>
            <div style={{display: 'flex', gap: 8}}>
              <GateFlash delay={40} tone={C.navy} style={{flex: 1, backgroundColor: C.white, border: `3px solid ${C.navy}`, padding: '5px 10px', fontSize: 20, fontWeight: 800, color: C.ink}}>盗窃罪 ＝ <b style={{color: C.navy}}>A</b>（非法占有他人林木·侵犯财产权）</GateFlash>
              <GateFlash delay={54} tone={C.pine} style={{flex: 1, backgroundColor: C.white, border: `3px solid ${C.pine}`, padding: '5px 10px', fontSize: 20, fontWeight: 800, color: C.ink}}>盗伐林木罪 ＝ <b style={{color: C.pine}}>A＋B</b>（破坏生态环境）</GateFlash>
              <GateFlash delay={68} tone={C.gold} style={{flex: 1, backgroundColor: C.white, border: `3px solid ${C.gold}`, padding: '5px 10px', fontSize: 20, fontWeight: 800, color: C.ink}}>滥伐林木罪 ＝ <b style={{color: C.gold}}>B</b>（无非法占有目的）</GateFlash>
            </div>
            <div style={{position: 'relative', height: 96}}>
              <div data-stateful-source="logger-token" style={{position: 'absolute', left: 0, top: 12}}>
                <Chip tone="night"><Axe size={20} color={C.white} strokeWidth={2.2} />持斧采伐行为</Chip>
              </div>
              <Path color={C.pine} delay={70} span={20} style={{position: 'absolute', left: 180, top: 40, width: 900, height: 4}} />
              <Mover delay={76} span={30} fromX={0} toX={330} fadeAt={140} style={{position: 'absolute', left: 14, top: 12, zIndex: 3}}>
                <Chip tone="pine"><Axe size={20} color={C.white} strokeWidth={2.2} />有非法占有目的</Chip>
              </Mover>
              <Mover delay={150} span={30} fromX={180} toX={760} fadeAt={220} style={{position: 'absolute', left: 180, top: 12, zIndex: 3}}>
                <Chip tone="gold"><Axe size={20} color={C.white} strokeWidth={2.2} />无非法占有目的</Chip>
              </Mover>
              <GateFlash delay={140} tone={C.pine} style={{position: 'absolute', left: 520, top: 48, backgroundColor: C.white, border: `3px solid ${C.pine}`, padding: '2px 10px', fontSize: 20, fontWeight: 950, color: C.pine}}>盗伐他人所有的活立木（成排成片）</GateFlash>
              <GateFlash delay={218} tone={C.gold} style={{position: 'absolute', left: 948, top: 48, width: 180, backgroundColor: C.white, border: `3px solid ${C.gold}`, padding: '2px 8px', fontSize: 19, fontWeight: 950, color: C.gold}}>滥伐：无证采伐或违反规定采伐；对象含自己所有林木（不含枯死）</GateFlash>
            </div>
            <div data-final-knowledge="forest-boundary" data-stateful-terminal="logger-token" style={{display: 'flex', flexWrap: 'wrap', gap: 7, fontSize: 20, fontWeight: 800, color: C.ink, lineHeight: 1.4}}>
              <div style={{backgroundColor: C.white, border: '2px solid rgba(35,38,31,0.25)', padding: '4px 10px'}}>
                <b style={{color: C.navy}}>只定盗窃罪（未破坏生态）：</b>已伐倒的树木；房前屋后、自留地零星树木（2017）；枯死的林木
              </div>
              <div style={{backgroundColor: C.white, border: '2px solid rgba(35,38,31,0.25)', padding: '4px 10px'}}>
                <b style={{color: C.pine}}>也属盗伐：</b>整体挖走移植；剥树皮·掘根·采种·采脂致树木死亡（未致死 → 只定盗窃罪，2025）
              </div>
              <div style={{backgroundColor: C.white, border: '2px solid rgba(35,38,31,0.25)', padding: '4px 10px'}}>
                <b style={{color: C.crimson}}>转化抢劫：</b>盗伐时为窝藏赃物、抗拒抓捕、毁灭罪证使用暴力 → 转化为抢劫罪（"打护林员案"致人重伤）
              </div>
              <div style={{backgroundColor: C.white, border: '2px solid rgba(35,38,31,0.25)', padding: '4px 10px'}}>
                <b style={{color: C.gold}}>想象竞合：</b>滥伐林木罪与故意毁坏财物罪择一重（砍倒国有林木种沉香，2020主观）
              </div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={40} marker="wildlife-lane" style={{position: 'absolute', left: 1174, top: 0, width: 602, height: 500}}>
          <Panel tone={C.torch} watermark={<Bird size={150} color={C.torch} strokeWidth={1.6} />} style={{height: '100%', padding: '10px 16px', display: 'flex', flexDirection: 'column', gap: 6}}>
            <TabChip tone={C.torch} icon={<Bird size={24} color={C.white} strokeWidth={2.2} />}>危害珍贵、濒危野生动物罪（第341条）</TabChip>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 6, fontSize: 20, fontWeight: 800, color: C.ink, lineHeight: 1.4}}>
              <Chip tone="torch">对象含人工繁殖动物（大熊猫）；以食用为目的人工大量繁殖的除外</Chip>
              <div style={{backgroundColor: C.white, border: '2px solid rgba(35,38,31,0.25)', padding: '4px 10px'}}>猎捕后立即释放（娱乐动机）→ <Neg size={19}>不构成本罪</Neg>；取器官后放生 → 属<b style={{color: C.torch}}>猎捕</b>构成本罪</div>
              <div style={{backgroundColor: C.white, border: '2px solid rgba(35,38,31,0.25)', padding: '4px 10px'}}>收购动机不问（销售/自用均可）；出售含"以营利为目的的加工利用"（扩大解释）</div>
              <div style={{backgroundColor: C.white, border: '2px solid rgba(35,38,31,0.25)', padding: '4px 10px'}}>运输：动物园送老虎外地交配、居民搬家运祖传制品 → 无法益侵害，<Neg size={19}>不构成本罪</Neg></div>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 6, fontSize: 20, fontWeight: 800, color: C.ink, lineHeight: 1.4, marginTop: 'auto'}}>
              <Chip tone="crimson">罪数：五动词实施 → 只定一个完整罪名</Chip>
              <div style={{backgroundColor: C.white, border: '2px solid rgba(35,38,31,0.25)', padding: '4px 10px'}}>爆炸·投毒·电网猎捕危害公共安全 → 与爆炸罪等想象竞合择一重</div>
              <div style={{backgroundColor: C.white, border: '2px solid rgba(35,38,31,0.25)', padding: '4px 10px'}}>猎杀后走私出境 / 走私入境后杀害 → 本罪与<b style={{color: C.crimson}}>走私珍贵动物罪并罚</b></div>
              <div style={{backgroundColor: C.white, border: '2px solid rgba(35,38,31,0.25)', padding: '4px 10px'}}>直接向走私者收购禁止进出口珍贵动物 → 定<b style={{color: C.navy}}>走私珍贵动物罪</b></div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={70} marker="pollution-gate" style={{position: 'absolute', left: 0, top: 516, right: 0, bottom: 0}}>
          <Panel tone={C.navy} watermark={<Flame size={150} color={C.navy} strokeWidth={1.6} />} style={{height: '100%', padding: '10px 16px', display: 'flex', flexDirection: 'column', gap: 6, justifyContent: 'center'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <TabChip tone={C.navy} icon={<Flame size={24} color={C.white} strokeWidth={2.2} />}>污染环境罪（第338条）· 排污闸门</TabChip>
              <span data-stateful-source="effluent-token"><Chip tone="night"><Zap size={20} color={C.white} strokeWidth={2.2} />排放·倾倒·处置有害物质</Chip></span>
              <Path color={C.navy} delay={150} span={16} style={{position: 'relative', width: 60, height: 4}} />
              <GateFlash delay={160} tone={C.navy} style={{border: `3px solid ${C.navy}`, backgroundColor: C.white, padding: '3px 10px', fontSize: 22, fontWeight: 950, color: C.navy}}>严重污染环境（既遂标准）</GateFlash>
              <span data-stateful-terminal="effluent-token" style={{fontSize: 20, fontWeight: 900, color: C.navy}}>主观＝故意</span>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 7, fontSize: 20, fontWeight: 800, color: C.ink, lineHeight: 1.4}}>
              <div style={{backgroundColor: C.white, border: '2px solid rgba(35,38,31,0.25)', padding: '4px 10px'}}>重叠的因果关系：甲乙共用一个外排口各自违法排放，查不清谁污染 → <b style={{color: C.navy}}>二因一果</b>，均既遂</div>
              <div style={{backgroundColor: C.white, border: '2px solid rgba(35,38,31,0.25)', padding: '4px 10px'}}>同时触犯投放危险物质罪 → 想象竞合择一重</div>
              <div style={{backgroundColor: C.white, border: '2px solid rgba(35,38,31,0.25)', padding: '4px 10px'}}>无危险废物经营许可证收集贮存利用处置危险废物、严重污染环境 → 污染环境罪与<b style={{color: C.gold}}>非法经营罪</b>想象竞合，择一重</div>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
