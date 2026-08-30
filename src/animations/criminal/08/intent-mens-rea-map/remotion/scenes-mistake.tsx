import {ArrowLeftRight, CircleDashed, MapPin, Scale, Zap} from 'lucide-react';
import {Chip, C, Dash, Enter, DialTitle, LabelBlock, Neg, Shell, SoftHi, ThinU, Tuner} from './kit';

export const MistakeTwoStepScene = () => (
  <Shell code="03" title="对象错误 vs 打击错误·两步走">
    <div data-layout="mistake-two-step-quadrant" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="mind-then-identity-steps,isolated-models-row" data-focal-rule="classify-the-mistake-by-mind-toward-the-victim-then-identity-awareness" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="step-mind-board" style={{position: 'absolute', left: 0, top: 0, width: 876, height: 300, backgroundColor: C.white, border: `4px solid ${C.teal}`, borderRadius: 8, padding: '14px 20px'}}>
        <Enter delay={6}><Chip tone="teal" style={{fontSize: 22}}>第 1 步 · 对实害对象及结果持什么心理？</Chip></Enter>
        <div style={{marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={20} style={{display: 'flex', gap: 10, alignItems: 'center', border: `3px solid ${C.red}`, borderRadius: 8, padding: '8px 12px'}}>
            <CircleDashed size={24} color={C.red} style={{flexShrink: 0}} />
            <span style={{fontSize: 21, fontWeight: 800}}>过失 → 直接定＝<Tuner delay={26} tone="red">打击错误</Tuner></span>
          </Enter>
          <Enter delay={40} style={{display: 'flex', gap: 10, alignItems: 'center', border: `3px solid ${C.teal}`, borderRadius: 8, padding: '8px 12px'}}>
            <Zap size={24} color={C.teal} />
            <span style={{fontSize: 21, fontWeight: 800}}>故意（含间接）→ 进入第 2 步</span>
          </Enter>
        </div>
        <div data-final-knowledge="step-one-three-cases" style={{marginTop: 12, display: 'flex', flexDirection: 'column', gap: 6}}>
          <Enter delay={56}><Chip style={{fontSize: 19, whiteSpace: 'normal'}}>打偏中丙·对丙过失 → 打击错误</Chip></Enter>
          <Enter delay={68}><Chip style={{fontSize: 19, whiteSpace: 'normal'}}>放任打偏中丙·无身份错认 → 无认识错误·杀人既遂</Chip></Enter>
          <Enter delay={80}><Chip style={{fontSize: 19, whiteSpace: 'normal'}}>误丙当乙打死·直接故意 → 进入第2步</Chip></Enter>
        </div>
      </div>

      <div data-final-knowledge="step-identity-board" style={{position: 'absolute', left: 900, top: 0, width: 876, height: 300, backgroundColor: C.white, border: `4px solid ${C.red}`, borderRadius: 8, padding: '14px 20px'}}>
        <Enter delay={12}><Chip tone="red" style={{fontSize: 22}}>第 2 步 · 行为时对实害对象身份有无认识错误？</Chip></Enter>
        <div style={{marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={30} style={{display: 'flex', gap: 10, alignItems: 'center', border: `3px solid ${C.red}`, borderRadius: 8, padding: '8px 12px'}}>
            <MapPin size={24} color={C.red} />
            <span style={{fontSize: 21, fontWeight: 800}}>有 →＝<Tuner delay={36} tone="red">对象错误</Tuner></span>
          </Enter>
          <Enter delay={52} style={{fontSize: 20, fontWeight: 700, color: C.inkSoft}}>杀人罪对象＝「他人」：姓名身份错认＝<ThinU>动机错误·不影响既遂</ThinU>；绑架「人质」等特定对象→影响既遂</Enter>
        </div>
        <div data-final-knowledge="step-method-negatives" style={{marginTop: 12, backgroundColor: C.redSoft, border: `3px dashed ${C.red}`, borderRadius: 8, padding: '10px 14px'}}>
          <Enter delay={72}><Neg size={20}>不通用：视线法（渔网案）·主客观原因法（写错门牌）·结果时心理法（装炸弹案）</Neg></Enter>
          <Enter delay={84} style={{marginTop: 4, fontSize: 19, fontWeight: 700, color: C.inkSoft}}>考察重点＝实际发生的事实；故意判断时点＝<ThinU>行为时</ThinU></Enter>
        </div>
      </div>

      <div data-final-knowledge="isolated-models-board" style={{position: 'absolute', left: 0, right: 0, top: 324, bottom: 0, backgroundColor: C.white, border: `3px solid ${C.cabinet}`, borderRadius: 8, padding: '14px 22px'}}>
        <Enter delay={96}><LabelBlock ink size={24}>隔离犯三模型 · 寄毒酒（行为与结果有时空间隔）</LabelBlock></Enter>
        <div style={{marginTop: 10, display: 'flex', gap: 14}}>
          <Enter delay={108} style={{flex: 1, border: `3px solid ${C.teal}`, borderRadius: 8, padding: '10px 14px'}}>
            <div style={{fontSize: 20, fontWeight: 900}}>模型① 快递员投错给丙</div>
            <div style={{marginTop: 6, fontSize: 19, fontWeight: 700, color: C.inkSoft}}>对丙＝过失/意外 → 打击错误</div>
          </Enter>
          <Enter delay={120} style={{flex: 1, border: `3px solid ${C.tube}`, borderRadius: 8, padding: '10px 14px'}}>
            <div style={{fontSize: 20, fontWeight: 900}}>模型② 乙妻误喝</div>
            <div style={{marginTop: 6, fontSize: 19, fontWeight: 700, color: C.inkSoft}}>间接故意·无身份错认 → 无认识错误·既遂</div>
          </Enter>
          <Enter delay={132} style={{flex: 1, border: `3px solid ${C.red}`, borderRadius: 8, padding: '10px 14px'}}>
            <div style={{fontSize: 20, fontWeight: 900}}>模型③ 错认211住户是乙（实为丙）</div>
            <div style={{marginTop: 6, fontSize: 19, fontWeight: 700, color: C.inkSoft}}>直接故意·有身份错认 → 对象错误（认错身份≠没有故意）</div>
          </Enter>
        </div>
        <Enter delay={146} style={{marginTop: 12, fontSize: 20, fontWeight: 700, color: C.inkSoft}}>教唆犯案：实行犯误丁当丙＝对象错误；教唆犯甲对丁持过失＝打击错误·教唆时无身份错认</Enter>
      </div>
    </div>
  </Shell>
);


export const HitErrorTwoTheoriesScene = () => (
  <Shell code="04" title="打击错误两说·狭义因果错误">
    <div data-layout="theory-duel-narrow-cause-rows" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="theory-pair-verdicts,cause-flow-mismatch-rows" data-focal-rule="hit-error-weighs-rights-protection-against-liberty-protection" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="theory-concrete-board" style={{position: 'absolute', left: 0, top: 0, width: 876, height: 320, backgroundColor: C.white, border: `4px solid ${C.teal}`, borderRadius: 8, padding: '14px 20px'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Scale size={26} color={C.teal} />
          <LabelBlock size={25} color={C.teal}>具体符合说 · 侧重实事求是·保障人权</LabelBlock>
        </Enter>
        <Enter delay={20} style={{marginTop: 10, fontSize: 21, fontWeight: 800}}>对预想目标＝未遂；对实害对象＝<ThinU>过失致死</ThinU></Enter>
        <Enter delay={34} style={{marginTop: 8}}><Tuner delay={34} tone="teal">想象竞合 → 择一重定故意犯罪未遂</Tuner></Enter>
        <Enter delay={48} style={{marginTop: 10, fontSize: 19, fontWeight: 700, color: C.inkSoft}}>一伤一死：未遂＋过失致死 → 定未遂</Enter>
      </div>

      <div data-final-knowledge="theory-legal-board" style={{position: 'absolute', left: 900, top: 0, width: 876, height: 320, backgroundColor: C.white, border: `4px solid ${C.red}`, borderRadius: 8, padding: '14px 20px'}}>
        <Enter delay={12} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Scale size={26} color={C.red} />
          <LabelBlock size={25} color={C.red}>法定符合说 · 侧重保护法益·严惩凶手</LabelBlock>
        </Enter>
        <Enter delay={26} style={{marginTop: 10, fontSize: 21, fontWeight: 800}}>把过失拟制为故意：对预想目标＝未遂；对实害对象＝<ThinU>既遂</ThinU></Enter>
        <Enter delay={40} style={{marginTop: 8}}><Tuner delay={40} tone="red">想象竞合 → 择一重定故意犯罪既遂</Tuner></Enter>
        <Enter delay={54} style={{marginTop: 10, fontSize: 19, fontWeight: 700, color: C.inkSoft}}>一死一死：两说都定既遂；前提＝<ThinU>已着手</ThinU>才两说有争议；对象错误·因果关系错误两说无分歧</Enter>
      </div>

      <div data-final-knowledge="narrow-cause-board" style={{position: 'absolute', left: 0, right: 0, top: 344, bottom: 0, backgroundColor: C.white, border: `3px solid ${C.cabinet}`, borderRadius: 8, padding: '14px 22px'}}>
        <Enter delay={68} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <ArrowLeftRight size={26} color={C.cabinet} />
          <LabelBlock ink size={24}>狭义因果关系错误 · 以为是A死法·实际是B死法 → 看客观有无因果</LabelBlock>
        </Enter>
        <div style={{marginTop: 10, display: 'flex', gap: 14}}>
          <Enter delay={82} style={{flex: 1, backgroundColor: C.redSoft, border: `3px solid ${C.red}`, borderRadius: 8, padding: '10px 14px'}}>
            <div style={{fontSize: 20, fontWeight: 900}}>人参果案：毒果卡喉噎死（2023）</div>
            <div style={{marginTop: 6, fontSize: 19, fontWeight: 700, color: C.inkSoft}}>毒药未起作用 → 无因果 → 故意杀人未遂</div>
          </Enter>
          <Enter delay={94} style={{flex: 1, backgroundColor: C.tealSoft, border: `3px solid ${C.teal}`, borderRadius: 8, padding: '10px 14px'}}>
            <div style={{fontSize: 20, fontWeight: 900}}>推下井案：想淹死·实际摔死（2011·53）</div>
            <div style={{marginTop: 6, fontSize: 19, fontWeight: 700, color: C.inkSoft}}>有因果·流程错误不重要 → 故意杀人既遂</div>
          </Enter>
          <Enter delay={106} style={{flex: 1, backgroundColor: C.white, border: `3px solid ${C.cabinet}`, borderRadius: 8, padding: '10px 14px'}}>
            <div style={{fontSize: 20, fontWeight: 900}}>变质鱼丸案：投毒没吃·误吃鱼丸死</div>
            <div style={{marginTop: 6, fontSize: 19, fontWeight: 700, color: C.inkSoft}}>杀人未遂＋过失致死（另一行为）→ 数罪并罚</div>
          </Enter>
        </div>
      </div>
    </div>
  </Shell>
);
