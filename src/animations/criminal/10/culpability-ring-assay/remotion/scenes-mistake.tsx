import type {ReactNode} from 'react';
import {GraduationCap, Mountain, Route, Scale, Search, TreePine, Users} from 'lucide-react';
import {C, Chip, Enter, LabelBlock, Neg, Seal, Shell, SoftHi, ThinU} from './kit';

const Totem = ({children}: {children: ReactNode}) => <span style={{position: 'absolute', right: -38, bottom: -58, opacity: 0.09, display: 'inline-flex', pointerEvents: 'none'}}>{children}</span>;

export const MistakeFactLawForkScene = () => (
  <Shell code="07" title="认识错误·事实/法律分岔">
    <div data-layout="mistake-fact-law-fork" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="two-layer-cognition-fork,order-fact-then-law" data-focal-rule="fact-mistake-kills-intent-law-mistake-may-excuse" data-focal-channels="icon,connector,contrast,enclosure" style={{position: 'absolute', inset: 0}}>
      <Totem><TreePine size={250} color={C.bark} strokeWidth={1.3} /></Totem>
      <div style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 96, backgroundColor: C.white, border: `3px solid ${C.bark}`, borderRadius: 8, padding: '8px 18px', display: 'flex', alignItems: 'center', gap: 16}}>
        <Enter delay={2}><Chip tone="ink" style={{fontSize: 21}}>干一件事 · 两层认知</Chip></Enter>
        <Enter delay={12} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <span style={{width: 0, height: 0, borderTop: '12px solid transparent', borderBottom: '12px solid transparent', borderLeft: '16px solid ' + C.bark}} />
          <Chip tone="vermilion" style={{fontSize: 20}}>① 认识"在干什么"＝事实判断</Chip>
        </Enter>
        <Enter delay={22} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <span style={{width: 0, height: 0, borderTop: '12px solid transparent', borderBottom: '12px solid transparent', borderLeft: '16px solid ' + C.bark}} />
          <Chip tone="steel" style={{fontSize: 20}}>② 认识"刑法是否禁止"＝法律评价</Chip>
        </Enter>
      </div>

      <div data-final-knowledge="fork-fact-board" style={{position: 'absolute', left: 0, top: 112, width: 876, height: 268, backgroundColor: C.white, border: `3px solid ${C.vermilion}`, borderRadius: 8, padding: '10px 16px'}}>
        <Enter delay={32} style={{display: 'flex', alignItems: 'center', gap: 8}}>
          <Search size={24} color={C.vermilion} />
          <LabelBlock size={23} color={C.vermilion}>事实认识错误 · 针对构成要件的事实</LabelBlock>
        </Enter>
        <Enter delay={44} style={{marginTop: 8, display: 'flex', gap: 8, flexWrap: 'wrap'}}>
          <Chip tone="vermilion" style={{fontSize: 18}}>危害行为</Chip>
          <Chip tone="vermilion" style={{fontSize: 18}}>行为对象</Chip>
          <Chip tone="vermilion" style={{fontSize: 18}}>危害结果</Chip>
        </Enter>
        <Enter delay={56} style={{marginTop: 10, fontSize: 19, fontWeight: 800}}>后果：排除犯罪故意 → 不成立故意犯罪</Enter>
        <Enter delay={68} style={{marginTop: 6, fontSize: 18, fontWeight: 700, color: C.inkSoft}}>"不知者不为罪"的"不知"＝不知<SoftHi style={{fontSize: 17}}>构成要件事实</SoftHi></Enter>
      </div>

      <div data-final-knowledge="fork-law-board" style={{position: 'absolute', left: 900, top: 112, width: 876, height: 268, backgroundColor: C.white, border: `3px solid ${C.steel}`, borderRadius: 8, padding: '10px 16px'}}>
        <Enter delay={38} style={{display: 'flex', alignItems: 'center', gap: 8}}>
          <Scale size={24} color={C.steel} />
          <LabelBlock size={23} color={C.steel}>法律认识错误 · 针对刑法的禁止性</LabelBlock>
        </Enter>
        <Enter delay={50} style={{marginTop: 8, fontSize: 18, fontWeight: 700, color: C.inkSoft}}>又称<ThinU color={C.steel}>违法性认识错误 · 禁止性认识错误</ThinU></Enter>
        <Enter delay={62} style={{marginTop: 10, fontSize: 19, fontWeight: 800}}>后果：<Chip tone="wax" style={{fontSize: 18}}>可能排除责任</Chip>（不是必然）</Enter>
        <Enter delay={74} style={{marginTop: 6, fontSize: 19, fontWeight: 900}}>核心判断条件＝有无<SoftHi style={{fontSize: 18}}>违法性认识可能</SoftHi></Enter>
      </div>

      <div data-final-knowledge="order-board" style={{position: 'absolute', left: 0, top: 396, width: 1776, height: 148, backgroundColor: C.waxSoft, border: `3px solid ${C.heartwood}`, borderRadius: 8, padding: '10px 18px', display: 'flex', gap: 18, alignItems: 'center'}}>
        <Enter delay={84} style={{width: 560, flexShrink: 0}}>
          <LabelBlock size={22} color={C.heartwood}>审查顺序</LabelBlock>
          <div style={{marginTop: 6, fontSize: 18, fontWeight: 700}}>事实错误∈主观要件板块 · 法律错误∈排除责任板块；<ThinU>先审事实 → 后审法律</ThinU>；事实错误已排除犯罪 → 不再审法律；真正的法律错误大前提＝<Chip tone="vermilion" style={{fontSize: 16}}>没有事实错误</Chip></div>
        </Enter>
        <Enter delay={96} style={{flex: 1, borderLeft: `3px dashed ${C.heartwood}`, paddingLeft: 18}}>
          <LabelBlock size={21} color={C.vermilion}>区分误区</LabelBlock>
          <div style={{marginTop: 6, fontSize: 18, fontWeight: 700}}>对<ThinU>行政法</ThinU>的认识错误，若导致对<SoftHi style={{fontSize: 17}}>构成要件行为对象</SoftHi>的认识错误＝<Neg size={18}>事实认识错误</Neg>（抓癞蛤蟆案 · 天津大妈射击摊案 → 无故意·无罪）</div>
        </Enter>
        <Enter delay={108} style={{width: 380, flexShrink: 0, borderLeft: `3px dashed ${C.heartwood}`, paddingLeft: 18}}>
          <LabelBlock size={21} color={C.steel}>幻觉犯（幻想犯）</LabelBlock>
          <div style={{marginTop: 6, fontSize: 18, fontWeight: 700}}>误以为有违法性，实际没有 → <Chip tone="steel" style={{fontSize: 16}}>按无罪处理</Chip></div>
        </Enter>
      </div>

      <div data-final-knowledge="natural-crime-board" style={{position: 'absolute', left: 0, top: 560, width: 876, height: 184, backgroundColor: C.white, border: `3px solid ${C.heartwood}`, borderRadius: 8, padding: '10px 16px'}}>
        <Enter delay={118} style={{display: 'flex', alignItems: 'center', gap: 8}}>
          <GraduationCap size={22} color={C.heartwood} />
          <LabelBlock size={21} color={C.heartwood}>自然犯 · 一般有违法性认识可能 → 不排除责任</LabelBlock>
        </Enter>
        <div style={{marginTop: 6, display: 'flex', flexDirection: 'column', gap: 4}}>
          <Enter delay={130} style={{fontSize: 17, fontWeight: 700}}>古今中外都规定为犯罪（放火·故意杀人·强奸·非法拘禁），不需援引行政法</Enter>
          <Enter delay={140} style={{fontSize: 17, fontWeight: 700}}>误以为征得幼女同意不违法 → <Chip tone="vermilion" style={{fontSize: 16}}>强奸罪</Chip>(2002·4)；误以为不禁止拘禁吸毒者 → <Chip tone="vermilion" style={{fontSize: 16}}>非法拘禁罪</Chip>(2015·55)</Enter>
        </div>
      </div>

      <div data-final-knowledge="statutory-crime-board" style={{position: 'absolute', left: 900, top: 560, width: 876, height: 184, backgroundColor: C.white, border: `3px solid ${C.steel}`, borderRadius: 8, padding: '10px 16px'}}>
        <Enter delay={124} style={{display: 'flex', alignItems: 'center', gap: 8}}>
          <GraduationCap size={22} color={C.steel} />
          <LabelBlock size={21} color={C.steel}>法定犯（行政犯）· 可能缺乏违法性认识可能</LabelBlock>
        </Enter>
        <div style={{marginTop: 6, display: 'flex', flexDirection: 'column', gap: 4}}>
          <Enter delay={136} style={{fontSize: 17, fontWeight: 700}}>需援引行政法规范（非法持有枪支·危害珍贵野生动物）；核心原因＝听信<SoftHi style={{fontSize: 16}}>有权机关的正式答复</SoftHi> → <Chip tone="pine" style={{fontSize: 16}}>排除责任</Chip>（法院咨询案：答复合法 → 非法经营不成立）</Enter>
          <Enter delay={148} style={{fontSize: 17, fontWeight: 700}}><Neg size={17}>听信一般公民（律师·法学专家·中学语文教师）不算数</Neg> → 不影响故意犯罪成立（2015·55）</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const ExpectationPossibilityScene = () => (
  <Shell code="08" title="期待可能性·岩缝斜木">
    <div data-layout="expectation-cliff-slope" data-visual-anchor="boundary" data-text-treatments="chip,label-block,soft-highlight,thin-underline,stamp" data-visual-grammar="expectation-boundary-slope,near-kin-forgiveness" data-focal-rule="law-spares-what-could-not-act-lawfully" data-focal-channels="icon,connector,contrast,enclosure" style={{position: 'absolute', inset: 0}}>
      <Totem><TreePine size={250} color={C.bark} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="concept-board" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 118, backgroundColor: C.white, border: `3px solid ${C.bark}`, borderRadius: 8, padding: '10px 18px', display: 'flex', alignItems: 'center', gap: 18}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Mountain size={26} color={C.heartwood} />
          <LabelBlock size={25} color={C.heartwood}>期待可能性</LabelBlock>
        </Enter>
        <Enter delay={14} style={{fontSize: 21, fontWeight: 800}}>从行为时的具体情况看，<SoftHi style={{fontSize: 20}}>可以期待行为人作出合法行为</SoftHi></Enter>
        <Enter delay={26} style={{fontSize: 21, fontWeight: 800}}><ThinU color={C.vermilion}>不能期待</ThinU> → 排除责任事由</Enter>
      </div>

      <div data-final-knowledge="slope-diagram" style={{position: 'absolute', left: 0, top: 134, width: 1776, height: 250, backgroundColor: C.white, border: `3px solid ${C.heartwood}`, borderRadius: 8, padding: '10px 20px'}}>
        <div style={{position: 'absolute', left: 20, right: 20, top: 26, display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={36}><Chip tone="ink" style={{fontSize: 20}}>行为人</Chip></Enter>
          <Enter delay={44} style={{flex: 1, display: 'flex', alignItems: 'center'}}>
            <span style={{flex: 1, height: 0, borderTop: `5px solid ${C.pine}`}} />
            <span style={{width: 0, height: 0, borderLeft: '12px solid ' + C.pine, borderTop: '9px solid transparent', borderBottom: '9px solid transparent'}} />
          </Enter>
          <Enter delay={52} style={{display: 'inline-flex', alignItems: 'center', gap: 8}}><Route size={20} color={C.pine} /><Chip tone="pine" style={{fontSize: 19}}>大路平坦 · 能走合法之路</Chip></Enter>
          <Enter delay={60} style={{display: 'flex', alignItems: 'center'}}>
            <span style={{width: 40, height: 0, borderTop: `5px solid ${C.pine}`}} />
            <span style={{width: 0, height: 0, borderLeft: '12px solid ' + C.pine, borderTop: '9px solid transparent', borderBottom: '9px solid transparent'}} />
          </Enter>
          <Enter delay={60}><Seal delay={60} tone="pine">谴责成立</Seal></Enter>
        </div>
        <div style={{position: 'absolute', left: 20, right: 20, top: 130, display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={70}><Chip tone="ink" style={{fontSize: 20}}>行为人</Chip></Enter>
          <Enter delay={78}><span style={{display: 'inline-block', width: 300, height: 56, backgroundColor: C.waxSoft, border: `3px solid ${C.vermilion}`, clipPath: 'polygon(0 100%, 100% 0, 100% 100%)'}} /></Enter>
          <Enter delay={84} style={{flex: 1, display: 'flex', alignItems: 'center'}}>
            <span style={{flex: 1, height: 0, borderTop: `4px dashed ${C.vermilion}`}} />
            <span style={{width: 0, height: 0, borderLeft: '12px solid ' + C.vermilion, borderTop: '9px solid transparent', borderBottom: '9px solid transparent'}} />
          </Enter>
          <Enter delay={86} style={{fontSize: 20, fontWeight: 900, color: C.vermilion, whiteSpace: 'nowrap'}}>岩缝绝壁 · 无法期待作出合法行为</Enter>
          <Enter delay={94}><Seal delay={94}>排除责任</Seal></Enter>
        </div>
      </div>

      <div data-final-knowledge="son-harbor-case" style={{position: 'absolute', left: 0, top: 400, width: 876, height: 200, backgroundColor: C.white, border: `3px solid ${C.bark}`, borderRadius: 8, padding: '10px 16px'}}>
        <Enter delay={104} style={{display: 'flex', alignItems: 'center', gap: 8}}>
          <Users size={22} color={C.bark} />
          <LabelBlock size={21} color={C.bark}>窝藏儿子案</LabelBlock>
        </Enter>
        <Enter delay={116} style={{marginTop: 8, fontSize: 19, fontWeight: 700}}>16岁的狗蛋偷了一万元，父亲老狗蛋明知仍将其藏匿</Enter>
        <Enter delay={128} style={{marginTop: 6, fontSize: 19, fontWeight: 800}}>法律无法期待父亲出卖儿子 → <Chip tone="pine" style={{fontSize: 17}}>可不追究窝藏罪</Chip></Enter>
      </div>

      <div data-final-knowledge="corpse-case" style={{position: 'absolute', left: 900, top: 400, width: 876, height: 200, backgroundColor: C.white, border: `3px solid ${C.bark}`, borderRadius: 8, padding: '10px 16px'}}>
        <Enter delay={110} style={{display: 'flex', alignItems: 'center', gap: 8}}>
          <GraduationCap size={22} color={C.bark} />
          <LabelBlock size={21} color={C.bark}>碎尸指使案</LabelBlock>
        </Enter>
        <Enter delay={122} style={{marginTop: 8, fontSize: 19, fontWeight: 700}}>甲杀人后指使乙碎尸 → 乙构成<Chip tone="vermilion" style={{fontSize: 17}}>帮助毁灭证据罪</Chip></Enter>
        <Enter delay={134} style={{marginTop: 6, fontSize: 19, fontWeight: 800}}>甲<Neg size={19}>不构成该罪的教唆犯</Neg>：不能期待犯罪人保全证据</Enter>
      </div>

      <div style={{position: 'absolute', left: 0, right: 0, top: 616, bottom: 0, display: 'flex', gap: 16}}>
        <div data-final-knowledge="common-cases-board" style={{flex: 1.4, backgroundColor: C.pineSoft, border: `3px solid ${C.pine}`, borderRadius: 8, padding: '10px 16px'}}>
          <Enter delay={142}><LabelBlock size={21} color={C.pine}>缺乏期待可能性的常考情形</LabelBlock></Enter>
          <Enter delay={154} style={{marginTop: 6, fontSize: 18, fontWeight: 700}}><ThinU>近亲属间</ThinU>窝藏·包庇 → 可以不追究刑事责任 / 应当从宽处罚</Enter>
          <Enter delay={164} style={{marginTop: 4, fontSize: 18, fontWeight: 700}}><ThinU>盗窃者本人</ThinU>将赃物卖到地下市场 → 销赃行为<Neg size={18}>不定掩饰隐瞒犯罪所得罪</Neg></Enter>
        </div>
        <div data-final-knowledge="quiz-row" style={{flex: 1, backgroundColor: C.white, border: `3px solid ${C.steel}`, borderRadius: 8, padding: '10px 16px'}}>
          <Enter delay={148} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <GraduationCap size={20} color={C.steel} />
            <LabelBlock size={20} color={C.steel}>巩固选择（2020金题）</LabelBlock>
          </Enter>
          <Enter delay={160} style={{marginTop: 6, fontSize: 18, fontWeight: 700}}>间歇性精神病人不能辨认·控制时实施严重危害行为 → <Chip tone="pine" style={{fontSize: 17}}>B 不负刑事责任</Chip></Enter>
        </div>
      </div>
    </div>
  </Shell>
);
