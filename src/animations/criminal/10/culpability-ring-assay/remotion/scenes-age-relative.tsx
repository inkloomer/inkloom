import type {ReactNode} from 'react';
import {Ban, BookOpen, ClipboardCheck, Fingerprint, Flag, Flame, Gavel, GraduationCap, HeartPulse, Landmark, Package, ShieldAlert, TreePine, UserX, Users, Waves} from 'lucide-react';
import {C, Chip, Enter, LabelBlock, Neg, Seal, Shell, SoftHi, ThinU} from './kit';

const Totem = ({children}: {children: ReactNode}) => <span style={{position: 'absolute', right: -38, bottom: -58, opacity: 0.09, display: 'inline-flex', pointerEvents: 'none'}}>{children}</span>;

const ChainArrow = ({delay, tag}: {delay: number; tag?: string}) => (
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexShrink: 0, width: 46}}>
    {tag ? <Enter delay={delay} style={{fontSize: 17, fontWeight: 950, color: C.bark, marginBottom: 2}}>{tag}</Enter> : null}
    <Enter delay={delay} style={{display: 'flex', alignItems: 'center'}}>
      <span style={{display: 'block', width: 20, height: 0, borderTop: `5px solid ${C.bark}`}} />
      <span style={{width: 0, height: 0, borderLeft: '11px solid ' + C.bark, borderTop: '8px solid transparent', borderBottom: '8px solid transparent'}} />
    </Enter>
  </div>
);

export const AgeTwelveFourteenScene = () => (
  <Shell code="03" title="12至14周岁·极罪核准链">
    <div data-layout="extreme-crime-gate-chain" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,external-negation,stamp" data-visual-grammar="gate-chain-and-or,prosecution-approval-gate" data-focal-rule="extreme-crimes-need-death-or-cruel-maiming-plus-supreme-approval" data-focal-channels="icon,connector,contrast,enclosure" style={{position: 'absolute', inset: 0}}>
      <Totem><TreePine size={250} color={C.bark} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="statute-head" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 118, backgroundColor: C.white, border: `3px solid ${C.vermilion}`, borderRadius: 8, padding: '10px 18px', display: 'flex', alignItems: 'center', gap: 18}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <BookOpen size={26} color={C.vermilion} />
          <Chip tone="vermilion" style={{fontSize: 23}}>刑法第17条第3款</Chip>
          <Chip tone="wax" style={{fontSize: 20}}>《刑法修正案(十一)》增设</Chip>
        </Enter>
        <Enter delay={16} style={{fontSize: 22, fontWeight: 800}}>已满<SoftHi style={{fontSize: 21}}>12</SoftHi>不满<SoftHi style={{fontSize: 21}}>14</SoftHi>周岁，犯<ThinU color={C.vermilion}>故意杀人、故意伤害罪</ThinU>：</Enter>
        <Enter delay={30}><Neg size={20}>这里的"罪"是犯罪行为，不限于两个罪名</Neg></Enter>
      </div>

      <div style={{position: 'absolute', left: 0, top: 140, width: 1776, height: 264, display: 'flex', alignItems: 'stretch'}}>
        <div data-final-knowledge="gate-crime" style={{flex: 1.15, backgroundColor: C.white, border: `3px solid ${C.heartwood}`, borderRadius: 8, padding: '12px 14px'}}>
          <Enter delay={38} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <Gavel size={22} color={C.heartwood} />
            <LabelBlock size={23} color={C.heartwood}>① 罪行</LabelBlock>
          </Enter>
          <Enter delay={50} style={{marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-start'}}>
            <Chip tone="vermilion" style={{fontSize: 20}}>故意杀人</Chip>
            <Chip tone="vermilion" style={{fontSize: 20}}>故意伤害罪</Chip>
          </Enter>
          <Enter delay={62} style={{marginTop: 8, fontSize: 18, fontWeight: 700, color: C.inkSoft}}>抢劫·强奸·绑架中故意杀人 ∈ 故意杀人</Enter>
        </div>
        <ChainArrow delay={56} tag="且" />
        <div data-final-knowledge="gate-result" style={{flex: 1.7, backgroundColor: C.white, border: `3px solid ${C.heartwood}`, borderRadius: 8, padding: '12px 14px'}}>
          <Enter delay={62} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <HeartPulse size={22} color={C.heartwood} />
            <LabelBlock size={23} color={C.heartwood}>② 结果要件 · 二选一</LabelBlock>
          </Enter>
          <Enter delay={74} style={{marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-start'}}>
            <Chip tone="wax" style={{fontSize: 20, whiteSpace: 'normal'}}>致人死亡</Chip>
            <Chip tone="wax" style={{fontSize: 20, whiteSpace: 'normal'}}>以特别残忍手段致人重伤＋造成严重残疾</Chip>
          </Enter>
          <Enter delay={86} style={{marginTop: 8, fontSize: 18, fontWeight: 800, color: C.vermilion}}>重伤与严重残疾是"并且"关系</Enter>
        </div>
        <ChainArrow delay={80} tag="且" />
        <div data-final-knowledge="gate-circumstance" style={{flex: 0.75, backgroundColor: C.white, border: `3px solid ${C.steel}`, borderRadius: 8, padding: '12px 14px'}}>
          <Enter delay={86} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <Flag size={22} color={C.steel} />
            <LabelBlock size={23} color={C.steel}>③ 情节</LabelBlock>
          </Enter>
          <Enter delay={98} style={{marginTop: 8}}><Chip tone="steel" style={{fontSize: 20, whiteSpace: 'normal', padding: '8px 12px'}}>恶劣</Chip></Enter>
          <Enter delay={110} style={{marginTop: 8, fontSize: 18, fontWeight: 700, color: C.inkSoft}}>两种罪都要求</Enter>
        </div>
        <ChainArrow delay={104} tag="且" />
        <div data-final-knowledge="gate-prosecution" style={{flex: 1.05, backgroundColor: C.white, border: `3px solid ${C.steel}`, borderRadius: 8, padding: '12px 14px'}}>
          <Enter delay={110} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <Landmark size={24} color={C.steel} />
            <LabelBlock size={23} color={C.steel}>④ 程序</LabelBlock>
          </Enter>
          <Enter delay={122} style={{marginTop: 8}}><Chip tone="steel" style={{fontSize: 20, whiteSpace: 'normal', padding: '8px 12px'}}>经最高检核准追诉</Chip></Enter>
        </div>
        <ChainArrow delay={128} />
        <div style={{flex: 0.85, backgroundColor: C.pineSoft, border: `3px solid ${C.pine}`, borderRadius: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10}}>
          <Enter delay={138} style={{fontSize: 20, fontWeight: 900, color: C.pine, textAlign: 'center'}}>四环齐备</Enter>
          <Enter delay={148}><Seal delay={148} tone="pine">应当负刑事责任</Seal></Enter>
        </div>
      </div>

      <div data-final-knowledge="scope-board" style={{position: 'absolute', left: 0, top: 424, width: 876, height: 320, backgroundColor: C.white, border: `3px solid ${C.bark}`, borderRadius: 8, padding: '12px 18px'}}>
        <Enter delay={150} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.bark} />
          <LabelBlock size={24} color={C.bark}>范围界定 · 是"犯罪行为"不是"两个罪名"</LabelBlock>
        </Enter>
        <Enter delay={164} style={{marginTop: 12, fontSize: 20, fontWeight: 800}}>在<SoftHi style={{fontSize: 19}}>抢劫、强奸、绑架</SoftHi>中故意杀人的，均属于第17条第3款中的故意杀人</Enter>
        <Enter delay={178} style={{marginTop: 12}}><Neg size={20}>绑架中"撕票"→ 绑架罪本身不追，杀人是故意杀人→追</Neg></Enter>
      </div>

      <div data-final-knowledge="result-note-board" style={{position: 'absolute', left: 900, top: 424, width: 876, height: 320, backgroundColor: C.white, border: `3px solid ${C.steel}`, borderRadius: 8, padding: '12px 18px'}}>
        <Enter delay={156}><LabelBlock size={24} color={C.steel}><ClipboardCheck size={22} color={C.steel} style={{marginRight: 8}} />结果要件 · 程序要点</LabelBlock></Enter>
        <div style={{marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={170} style={{fontSize: 20, fontWeight: 700}}>要求造成<ThinU color={C.steel}>实害结果</ThinU></Enter>
          <Enter delay={182} style={{fontSize: 20, fontWeight: 700}}>重伤 <Chip tone="vermilion" style={{fontSize: 18}}>并且</Chip> 严重残疾，缺一不可</Enter>
          <Enter delay={194} style={{fontSize: 20, fontWeight: 700}}>必须经<Chip tone="steel" style={{fontSize: 19}}>最高检核准追诉</Chip>——程序兜底</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

const EIGHT_CRIMES = ['放火', '杀人', '强奸', '抢劫', '伤害(重伤·死亡)', '贩毒', '爆炸', '投毒'];

export const AgeFourteenSixteenScene = () => (
  <Shell code="04" title="14至16周岁·八罪检索盘">
    <div data-layout="eight-crime-sieve-rows" data-visual-anchor="typographic-sequence" data-text-treatments="chip,label-block,soft-highlight,external-negation,stamp" data-visual-grammar="eight-crime-token-band,inclusion-exclusion-rows" data-focal-rule="eight-crimes-are-conduct-not-offense-names-with-help-excluded" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><TreePine size={250} color={C.bark} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="eight-crime-band" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 160, backgroundColor: C.white, border: `3px solid ${C.vermilion}`, borderRadius: 8, padding: '10px 18px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
          <Enter delay={2}><Flame size={26} color={C.vermilion} /></Enter>
          <Enter delay={2}><Chip tone="vermilion" style={{fontSize: 22}}>刑法第17条第2款 · 八种重罪</Chip></Enter>
          <Enter delay={14}><Chip tone="wax" style={{fontSize: 21}}>口诀：烧杀淫掠，伤贩爆投</Chip></Enter>
          <Enter delay={24} style={{fontSize: 19, fontWeight: 800, color: C.inkSoft}}>全部是<ThinU color={C.vermilion}>故意犯罪</ThinU>·严重犯罪</Enter>
        </div>
        <div style={{marginTop: 10, display: 'flex', gap: 8, flexWrap: 'wrap'}}>
          {EIGHT_CRIMES.map((crime, index) => (
            <Enter key={crime} delay={34 + index * 8}>
              <Chip tone={index < 4 ? 'vermilion' : 'steel'} style={{fontSize: 20}}>{crime}</Chip>
            </Enter>
          ))}
        </div>
      </div>

      <div data-final-knowledge="exclusion-board" style={{position: 'absolute', left: 0, top: 176, width: 876, height: 220, backgroundColor: C.vermilionSoft, border: `3px dashed ${C.vermilion}`, borderRadius: 8, padding: '10px 16px'}}>
        <Enter delay={92}><LabelBlock size={23} color={C.vermilion}>八罪里不包括</LabelBlock></Enter>
        <div style={{marginTop: 8, display: 'flex', flexWrap: 'wrap', gap: 6}}>
          {[['失火罪', Flame], ['绑架罪', UserX], ['拐卖妇女儿童罪', Users], ['决水罪', Waves], ['走私·制造·运输毒品罪', Package]].map(([item, IconComponent], index) => (
            <Enter key={item} delay={102 + index * 7} style={{display: 'inline-flex', alignItems: 'center', gap: 4}}>
              <IconComponent size={18} color={C.vermilion} />
              <Neg size={19}>{item}</Neg>
            </Enter>
          ))}
        </div>
      </div>

      <div data-final-knowledge="attached-case-board" style={{position: 'absolute', left: 0, top: 412, width: 876, height: 332, backgroundColor: C.white, border: `3px solid ${C.bark}`, borderRadius: 8, padding: '10px 16px'}}>
        <Enter delay={142} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={22} color={C.bark} />
          <LabelBlock size={22} color={C.bark}>常见考法 · 一不负＋一要负</LabelBlock>
        </Enter>
        <div style={{marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6}}>
          <Enter delay={154} style={{fontSize: 18, fontWeight: 700}}><ThinU>绑票案</ThinU>：15岁绑架撕票 → 绑架<Chip tone="vermilion" style={{fontSize: 16}}>不负</Chip> 故意杀人<Chip tone="pine" style={{fontSize: 16}}>要负</Chip>(2020)</Enter>
          <Enter delay={164} style={{fontSize: 18, fontWeight: 700}}><ThinU>拐卖＋强奸</ThinU>：拐卖不负 · 强奸要负</Enter>
          <Enter delay={174} style={{fontSize: 18, fontWeight: 700}}><ThinU>强迫卖淫＋强奸</ThinU>：强迫卖淫不负 · 强奸要负</Enter>
          <Enter delay={184} style={{fontSize: 18, fontWeight: 700}}><ThinU>妨害公务＋重伤</ThinU>：妨害公务不负 · 故意伤害(重伤)要负</Enter>
        </div>
        <div data-final-knowledge="help-row" style={{marginTop: 10, backgroundColor: C.pineSoft, border: `3px solid ${C.pine}`, borderRadius: 6, padding: '6px 12px'}}>
          <Enter delay={196} style={{fontSize: 19, fontWeight: 900, color: C.pine, display: 'flex', alignItems: 'center', gap: 8}}><Ban size={19} color={C.pine} />实施八种罪的帮助行为 → 不负刑事责任（2009·2 / 2010·4）</Enter>
        </div>
      </div>

      <div data-final-knowledge="conduct-scope-board" style={{position: 'absolute', left: 900, top: 176, width: 876, height: 330, backgroundColor: C.white, border: `3px solid ${C.heartwood}`, borderRadius: 8, padding: '10px 16px'}}>
        <Enter delay={98}><LabelBlock size={23} color={C.heartwood}>八种罪＝八种犯罪行为 · 不限于八个罪名</LabelBlock></Enter>
        <Enter delay={110} style={{marginTop: 8, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
          <BookOpen size={20} color={C.steel} />
          <Chip tone="steel" style={{fontSize: 18}}>法条竞合</Chip>
          <span style={{fontSize: 19, fontWeight: 700}}>抢劫枪支·弹药·爆炸物·危险物质 ∈ 抢劫</span>
        </Enter>
        <Enter delay={120} style={{marginTop: 8, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
          <Fingerprint size={20} color={C.heartwood} />
          <Chip tone="wax" style={{fontSize: 18}}>法律拟制＝特事特办</Chip>
          <span style={{fontSize: 18, fontWeight: 700, color: C.inkSoft}}>原本不符合此罪要件，法律硬按此罪论处</span>
        </Enter>
        <Enter delay={130} style={{marginTop: 8, fontSize: 19, fontWeight: 800}}>拟制故意杀人（5个）：非法拘禁 · 聚众斗殴 · 刑讯逼供 · 暴力取证 · 虐待被监管人 过失致人死亡 → 定<ThinU color={C.vermilion}>故意杀人罪</ThinU></Enter>
        <Enter delay={140} style={{marginTop: 6, fontSize: 18, fontWeight: 700, color: C.inkSoft}}>例：15岁参与聚众斗殴，过失致人死亡 → 定故意杀人罪</Enter>
        <Enter delay={150} style={{marginTop: 8, fontSize: 19, fontWeight: 800}}>拟制抢劫（3个）：携带凶器抢夺 · 事后转化抢劫 · 聚众"打砸抢"毁坏抢夺财物 → 定<ThinU color={C.vermilion}>抢劫罪</ThinU></Enter>
        <Enter delay={160} style={{marginTop: 6, fontSize: 18, fontWeight: 700, color: C.inkSoft}}>例：15岁携带凶器抢夺提包 → 定抢劫罪（2009·2）</Enter>
      </div>

      <div data-final-knowledge="transformed-exception-board" style={{position: 'absolute', left: 900, top: 522, width: 876, height: 222, backgroundColor: C.steelSoft, border: `3px solid ${C.steel}`, borderRadius: 8, padding: '10px 16px'}}>
        <Enter delay={168} style={{display: 'flex', alignItems: 'center', gap: 8}}>
          <ShieldAlert size={22} color={C.steel} />
          <LabelBlock size={22} color={C.steel}>事后转化抢劫的特殊例外（2010·4）</LabelBlock>
        </Enter>
        <Enter delay={180} style={{marginTop: 8, fontSize: 19, fontWeight: 700}}>14–16岁：先盗窃·诈骗·抢夺，为窝藏赃物·抗拒抓捕·毁灭罪证而当场使用暴力 → <Neg size={19}>不按事后转化抢劫处理</Neg></Enter>
        <Enter delay={192} style={{marginTop: 6, fontSize: 19, fontWeight: 700}}>暴力构成<Chip tone="vermilion" style={{fontSize: 18}}>故意伤害(重伤)</Chip>或<Chip tone="vermilion" style={{fontSize: 18}}>故意杀人</Chip> → 按这两罪处理</Enter>
      </div>
    </div>
  </Shell>
);
