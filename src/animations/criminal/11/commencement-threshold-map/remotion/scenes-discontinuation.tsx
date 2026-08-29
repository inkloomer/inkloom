import {Car, CheckCheck, CircleDashed, CircleSlash, GraduationCap, HandHeart, Siren, Stethoscope} from 'lucide-react';
import {C, Chip, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp, ThinU} from './theme';

const Verdict = ({kind, text, delay}: {kind: 'stop' | 'fail' | 'done' | 'prep'; text: string; delay: number}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8}}>
    {kind === 'stop' && <HandHeart size={22} color={C.green} style={{flexShrink: 0}} />}
    {kind === 'fail' && <CircleSlash size={22} color={C.warm} style={{flexShrink: 0}} />}
    {kind === 'done' && <CheckCheck size={22} color={C.flash} style={{flexShrink: 0}} />}
    {kind === 'prep' && <CircleDashed size={22} color={C.prep} style={{flexShrink: 0}} />}
    <Stamp delay={delay} tone={kind === 'stop' ? 'green' : kind === 'fail' ? 'flash' : kind === 'prep' ? 'prep' : 'chalk'}>{text}</Stamp>
  </span>
);

export const AutomatismFrankFormulaScene = () => (
  <Shell code="10" title="自动性：弗兰克公式">
    <div data-layout="frank-formula-two-step" data-visual-anchor="typographic-sequence" data-text-treatments="chip,label-block,soft-highlight,stamp" data-visual-grammar="formula-verdict,two-step-check" data-focal-rule="voluntariness-asks-able-to-reach-the-goal-but-will-not" data-focal-channels="icon,contrast,spatial,annotation" style={{position: 'absolute', inset: 0}}>
      <Enter delay={6} style={{position: 'absolute', left: 0, right: 0, top: 0, backgroundColor: C.ink, borderRadius: 12, padding: '10px 20px', display: 'flex', gap: 14, alignItems: 'center', fontSize: 22, color: C.chalk, fontWeight: 800}}>
        <span style={{color: C.flash, fontWeight: 950}}>刑法第24条</span>
        自动放弃犯罪或自动有效地防止犯罪结果发生——无损害<Stamp delay={14} tone="chalk">免除处罚</Stamp>，有损害<Stamp delay={18} tone="chalk">减轻处罚</Stamp>
      </Enter>
      <div style={{position: 'absolute', left: 0, right: 0, top: 84, display: 'flex', gap: 16}}>
        <div data-final-knowledge="frank-stop-side" style={{flex: 1, backgroundColor: C.paper, border: `3px solid ${C.green}`, borderRadius: 14, padding: '14px 20px'}}>
          <Enter delay={24}>
            <div style={{fontSize: 34, fontWeight: 950}}>「能达目的而不欲」</div>
            <div style={{marginTop: 8}}><Verdict kind="stop" text="犯罪中止" delay={34} /></div>
          </Enter>
        </div>
        <div data-final-knowledge="frank-fail-side" style={{flex: 1, backgroundColor: C.paper, border: `3px solid ${C.warm}`, borderRadius: 14, padding: '14px 20px'}}>
          <Enter delay={40}>
            <div style={{fontSize: 34, fontWeight: 950}}>「欲达目的而不能」</div>
            <div style={{marginTop: 8}}><Verdict kind="fail" text="犯罪未遂" delay={50} /></div>
          </Enter>
        </div>
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 250, display: 'flex', gap: 16}}>
        <div data-final-knowledge="frank-step-possibility" style={{flex: 1, backgroundColor: C.track, borderRadius: 12, padding: '12px 18px'}}>
          <Enter delay={66} style={{fontSize: 23, color: C.white, fontWeight: 900}}>第①步 · 能不能继续犯罪</Enter>
          <Enter delay={76} style={{marginTop: 6, fontSize: 22, color: C.chalk, fontWeight: 700}}>以社会一般人为准（客观说·多数说）；先判这步，再判下一步</Enter>
        </div>
        <div data-final-knowledge="frank-step-voluntary" style={{flex: 1, backgroundColor: C.track, borderRadius: 12, padding: '12px 18px'}}>
          <Enter delay={88} style={{fontSize: 23, color: C.white, fontWeight: 900}}>第②步 · 放弃是否自动</Enter>
          <Enter delay={98} style={{marginTop: 6, fontSize: 22, color: C.chalk, fontWeight: 700}}>主观说（多数）：能继续而放弃→推定自动；限定主观说（少数）：还须真诚悔过</Enter>
        </div>
      </div>
      <div data-final-knowledge="frank-three-cases" style={{position: 'absolute', left: 0, right: 0, top: 392, display: 'flex', gap: 14}}>
        <Enter delay={116} style={{flex: 1, backgroundColor: C.paper, border: `3px solid ${C.ink}`, borderRadius: 12, padding: '10px 14px', fontSize: 22, fontWeight: 700}}>
          拦路强奸，嫌颜值低离去<div style={{marginTop: 6}}>一般人认为能继续 → <Verdict kind="stop" text="中止" delay={128} /></div>
        </Enter>
        <Enter delay={130} style={{flex: 1, backgroundColor: C.paper, border: `3px solid ${C.ink}`, borderRadius: 12, padding: '10px 14px', fontSize: 22, fontWeight: 700}}>
          欲强奸，发现是亲妹妹而放弃<div style={{marginTop: 6}}>一般人无法继续 → <Verdict kind="fail" text="未遂" delay={142} /></div>
        </Enter>
        <Enter delay={144} style={{flex: 1, backgroundColor: C.paper, border: `3px solid ${C.ink}`, borderRadius: 12, padding: '10px 14px', fontSize: 22, fontWeight: 700}}>
          杀妻遇幼子拦阻（杀妻遇子案）<div style={{marginTop: 6}}>路人视角仍能继续 → <Verdict kind="stop" text="中止" delay={156} /></div>
        </Enter>
      </div>
      <div data-final-knowledge="frank-common-traps" style={{position: 'absolute', left: 0, right: 0, top: 540, height: 174, backgroundColor: C.ink, borderRadius: 14, padding: '14px 24px'}}>
        <Enter delay={170} style={{fontSize: 22, fontWeight: 900, color: C.chalk}}>常考两情形：</Enter>
        <Enter delay={180} style={{marginTop: 10, display: 'flex', gap: 14, flexWrap: 'wrap'}}>
          <Chip style={{fontSize: 22}}>遇到普通熟人而放弃 → <Verdict kind="stop" text="中止" delay={188} /></Chip>
          <Chip style={{fontSize: 22}}>遇到近亲属而放弃 → <Verdict kind="fail" text="未遂" delay={194} /></Chip>
          <Chip style={{fontSize: 22}}><Siren size={20} color={C.negDark} style={{flexShrink: 0}} />害怕当场被抓（很可能被抓）→ <Verdict kind="fail" text="未遂" delay={200} /></Chip>
          <Chip style={{fontSize: 22}}>害怕日后被抓 → <Verdict kind="stop" text="中止" delay={206} /></Chip>
        </Enter>
        <Enter delay={218} style={{marginTop: 12, fontSize: 21, color: C.chalkDim, fontWeight: 700}}>
          <GraduationCap size={20} color={C.flash} style={{display: 'inline', verticalAlign: -3, marginRight: 6}} />2024年试题：行人呼救即放弃＝害怕当场被抓 → 未遂；金库激光线＝当场被抓 → 未遂，摄像头＝日后被抓 → 中止
        </Enter>
      </div>
    </div>
  </Shell>
);

export const MistakeSpecificObjectScene = () => (
  <Shell code="11" title="认识错误与特定对象">
    <div data-layout="mistake-ladder-panels" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="mistake-ladder,specific-object-rules" data-focal-rule="mistaken-about-ability-to-continue-is-judged-by-what-the-actor-believed" data-focal-channels="icon,contrast,annotation,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="mistake-panel" style={{position: 'absolute', left: 0, top: 0, width: 872, height: 744, backgroundColor: C.paper, border: `3px solid ${C.ink}`, borderRadius: 16, padding: '16px 22px'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <LabelBlock ink size={26} color={C.warm}>认识错误</LabelBlock>
          <span style={{fontSize: 22, color: C.prep, fontWeight: 800}}>对「能不能继续」搞错了 → <ThinU>看主观：怎么想就怎么定</ThinU></span>
        </Enter>
        <div style={{marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={24} style={{backgroundColor: 'rgba(179,58,38,0.08)', borderRadius: 10, padding: '10px 14px', fontSize: 22, fontWeight: 700}}>
            脚步声案（2006年）：误以为主人回家，被迫逃离 → 以为不能 → <Verdict kind="fail" text="未遂" delay={34} />
          </Enter>
          <Enter delay={44} style={{backgroundColor: 'rgba(63,125,78,0.10)', borderRadius: 10, padding: '10px 14px', fontSize: 22, fontWeight: 700}}>
            投毒后怜悯送医（毒药本不致死）→ 以为能继续而放弃 → <Verdict kind="stop" text="中止" delay={54} />
          </Enter>
          <Enter delay={64} style={{backgroundColor: 'rgba(46,110,158,0.08)', borderRadius: 10, padding: '10px 14px', fontSize: 22, fontWeight: 700}}>
            被害人欺骗：谎称有性病 → 以为无法继续 → <Verdict kind="fail" text="未遂" delay={74} />
          </Enter>
          <Enter delay={84} style={{backgroundColor: 'rgba(46,110,158,0.08)', borderRadius: 10, padding: '10px 14px', fontSize: 22, fontWeight: 700}}>
            欺骗未影响「能否继续」的判断 → 错误<ThinU>不重要</ThinU>，主动放弃 → <Verdict kind="stop" text="中止" delay={94} />
          </Enter>
          <Enter delay={104} style={{display: 'flex', alignItems: 'center', gap: 10, fontSize: 22, fontWeight: 700}}>
            <Neg dark size={22}>被骗仅暂缓、未放弃犯意</Neg> —— 只是暂时性停顿，不是中止
          </Enter>
        </div>
      </div>
      <div data-final-knowledge="specific-object-panel" style={{position: 'absolute', left: 904, top: 0, width: 872, height: 744, backgroundColor: C.paper, border: `3px solid ${C.ink}`, borderRadius: 16, padding: '16px 22px'}}>
        <Enter delay={12} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <LabelBlock ink size={26} color={C.cool}>特定对象不存在</LabelBlock>
          <span style={{fontSize: 22, color: C.prep, fontWeight: 800}}>以为只能被迫放弃；已产生紧迫危险的定未遂</span>
        </Enter>
        <div style={{marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={30} style={{backgroundColor: 'rgba(46,110,158,0.08)', borderRadius: 10, padding: '10px 14px', fontSize: 22, fontWeight: 700}}>
            特定物：盗窃目标巨额现金不在场，失望离去 → <Verdict kind="fail" text="盗窃未遂" delay={40} />
          </Enter>
          <Enter delay={50} style={{backgroundColor: 'rgba(46,110,158,0.08)', borderRadius: 10, padding: '10px 14px', fontSize: 22, fontWeight: 700}}>
            认错人案：雇凶认错人即收枪 → 对眼前人已有紧迫危险 → <Verdict kind="fail" text="未遂" delay={60} />
          </Enter>
          <Enter delay={70} style={{backgroundColor: 'rgba(63,125,78,0.10)', borderRadius: 10, padding: '10px 14px', fontSize: 22, fontWeight: 700}}>
            杀父仇人案·谎称「主谋是丙」→ 对杀乙无认识错误，能继续而放弃 → <Verdict kind="stop" text="中止" delay={80} />
          </Enter>
          <Enter delay={90} style={{backgroundColor: 'rgba(179,58,38,0.08)', borderRadius: 10, padding: '10px 14px', fontSize: 22, fontWeight: 700}}>
            杀父仇人案·谎称「乙不是我杀的」→ 以为特定对象不存在，被迫放弃 → <Verdict kind="fail" text="未遂" delay={100} />
          </Enter>
        </div>
      </div>
      <Enter delay={200} style={{position: 'absolute', left: 0, right: 0, top: 700, fontSize: 23, fontWeight: 900, color: C.ink, textAlign: 'center'}}>
        一条主线：错误落在「能不能继续」上，才按<SoftHi dark style={{fontSize: 23}}>主观心态</SoftHi>定性
      </Enter>
    </div>
  </Shell>
);

export const DiscontinuationConductScene = () => (
  <Shell code="12" title="中止行为：终了与未终了">
    <div data-layout="terminated-untimed-quadrants" data-visual-anchor="boundary" data-text-treatments="chip,label-block,soft-highlight,external-negation,stamp" data-visual-grammar="terminated-untimed-quadrants,remedy-requirement" data-focal-rule="discontinuation-conduct-differs-by-whether-the-actuating-conduct-has-run-its-course" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Enter delay={6} style={{position: 'absolute', left: 0, right: 0, top: 0, display: 'flex', gap: 14, alignItems: 'center', fontSize: 22, fontWeight: 800}}>
        <span style={{backgroundColor: C.ink, color: C.chalk, borderRadius: 10, padding: '8px 16px'}}>判定：能导致既遂结果的实行行为，是否已经实行完毕</span>
        <Neg size={22}>实行终了 ≠ 犯罪既遂（既遂还要求实害结果）</Neg>
      </Enter>
      <div style={{position: 'absolute', left: 0, right: 0, top: 78, display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 14, height: 560}}>
        <div data-final-knowledge="conduct-untimed-fail" style={{backgroundColor: C.track, borderRadius: 14, padding: '14px 18px'}}>
          <Enter delay={24}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <CircleDashed size={24} color={C.chalk} />
              <LabelBlock size={24}>未实行终了（举刀未砍）＋ 被捕</LabelBlock>
            </div>
            <div style={{marginTop: 10, fontSize: 23, color: C.white, fontWeight: 900}}>未进入防止阶段，只能看放弃</div>
            <div style={{marginTop: 8}}><Verdict kind="fail" text="未实行终了·未遂" delay={36} /></div>
          </Enter>
        </div>
        <div data-final-knowledge="conduct-untimed-stop" style={{backgroundColor: C.paper, border: `3px solid ${C.green}`, borderRadius: 14, padding: '14px 18px'}}>
          <Enter delay={44}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <HandHeart size={24} color={C.green} />
              <LabelBlock ink size={24} color={C.green}>未实行终了 ＋ 自动放弃</LabelBlock>
            </div>
            <div style={{marginTop: 10, fontSize: 22, color: C.ink, fontWeight: 700, lineHeight: 1.45}}>放弃须<ThinU>真实、彻底</ThinU>：<Neg dark size={20}>暂时停顿·等机会再干≠中止</Neg></div>
            <div style={{marginTop: 6, fontSize: 22, color: C.ink, fontWeight: 700}}><Neg dark size={20}>财产犯罪中转换犯罪对象≠中止</Neg></div>
          </Enter>
        </div>
        <div data-final-knowledge="conduct-timed-fail" style={{backgroundColor: C.track, borderRadius: 14, padding: '14px 18px'}}>
          <Enter delay={84}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <CircleDashed size={24} color={C.chalk} />
              <LabelBlock size={24}>实行终了（砍出致命伤）＋ 被捕</LabelBlock>
            </div>
            <div style={{marginTop: 10, fontSize: 23, color: C.white, fontWeight: 900}}>行为已完毕，结果未发生</div>
            <div style={{marginTop: 8}}><Verdict kind="fail" text="实行终了·未遂" delay={96} /></div>
          </Enter>
        </div>
        <div data-final-knowledge="conduct-timed-stop" style={{backgroundColor: C.paper, border: `3px solid ${C.flash}`, borderRadius: 14, padding: '14px 18px'}}>
          <Enter delay={104}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <Stethoscope size={24} color={C.warm} />
              <LabelBlock ink size={24} color={C.warm}>实行终了 ＋ 积极防止</LabelBlock>
            </div>
            <div style={{marginTop: 10, fontSize: 22, color: C.ink, fontWeight: 700, lineHeight: 1.45}}>防止措施要两看：<Chip tone="flash" style={{fontSize: 20, color: C.ink}}>可能性</Chip><Chip tone="flash" style={{fontSize: 20, color: C.ink}}>真挚努力</Chip></div>
            <div style={{marginTop: 6, fontSize: 22, color: C.ink, fontWeight: 700}}>反例：捅伤后放纸巾离去，邻居救活 → 措施无可能性 → <Verdict kind="fail" text="未遂" delay={116} /></div>
          </Enter>
        </div>
      </div>
      <Enter delay={140} style={{position: 'absolute', left: 0, right: 0, top: 660, fontSize: 23, fontWeight: 900, color: C.ink, textAlign: 'center'}}>
        四格一句话：未终了看<SoftHi dark style={{fontSize: 23}}>自动放弃</SoftHi>，已终了看<SoftHi dark style={{fontSize: 23}}>有效防止</SoftHi>
      </Enter>
    </div>
  </Shell>
);

export const EffectivenessMatrixScene = () => (
  <Shell code="13" title="有效性：四种结局">
    <div data-layout="effectiveness-four-outcomes" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,stamp" data-visual-grammar="outcome-matrix,causation-note" data-focal-rule="effectiveness-requires-the-pursued-result-never-occurs" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Enter delay={6} style={{position: 'absolute', left: 0, right: 0, top: 0, display: 'flex', gap: 14, alignItems: 'center', fontSize: 22, fontWeight: 800}}>
        <span style={{backgroundColor: C.ink, color: C.chalk, borderRadius: 10, padding: '8px 16px'}}>有效性专指「实行终了的中止」＝实际有效</span>
        <span style={{fontSize: 22, fontWeight: 700}}>结果仍发生 → 绝不成立中止：原则<Stamp delay={14}>既遂</Stamp>；例外：犯罪行为与结果<ThinU>无因果关系</ThinU>→中止</span>
      </Enter>
      <div style={{position: 'absolute', left: 0, right: 0, top: 88, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14}}>
        <div data-final-knowledge="matrix-stop" style={{backgroundColor: C.paper, border: `3px solid ${C.green}`, borderRadius: 14, padding: '14px 18px'}}>
          <Enter delay={24} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Chip tone="green">可能√ ＋ 实际√</Chip>
            <Verdict kind="stop" text="中止" delay={34} />
          </Enter>
          <Enter delay={40} style={{marginTop: 8, fontSize: 22, color: C.ink, fontWeight: 700}}><Stethoscope size={20} color={C.green} style={{display: 'inline', verticalAlign: -3, marginRight: 6}} />捅伤后送医，救活</Enter>
        </div>
        <div data-final-knowledge="matrix-attempt" style={{backgroundColor: C.paper, border: `3px solid ${C.warm}`, borderRadius: 14, padding: '14px 18px'}}>
          <Enter delay={52} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Chip tone="warm">可能× ＋ 实际√</Chip>
            <Verdict kind="fail" text="未遂" delay={62} />
          </Enter>
          <Enter delay={68} style={{marginTop: 8, fontSize: 22, color: C.ink, fontWeight: 700}}>扔包卫生纸离去，邻居救活——措施无可能性</Enter>
        </div>
        <div data-final-knowledge="matrix-completion" style={{backgroundColor: C.paper, border: `3px solid ${C.prep}`, borderRadius: 14, padding: '14px 18px'}}>
          <Enter delay={80} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Chip tone="prep">可能√ ＋ 实际×</Chip>
            <Verdict kind="done" text="既遂" delay={90} />
          </Enter>
          <Enter delay={96} style={{marginTop: 8, fontSize: 22, color: C.ink, fontWeight: 700}}>送医抢救无效死亡——结果已发生</Enter>
        </div>
        <div data-final-knowledge="matrix-intervening" style={{backgroundColor: C.paper, border: `3px solid ${C.flash}`, borderRadius: 14, padding: '14px 18px'}}>
          <Enter delay={108} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Chip tone="flash">可能√ ＋（介入因素）×</Chip>
            <Verdict kind="stop" text="中止" delay={118} />
          </Enter>
          <Enter delay={124} style={{marginTop: 8, fontSize: 22, color: C.ink, fontWeight: 700}}>送医途中车祸致死——死亡非杀人行为导致（见 14 场景）</Enter>
        </div>
      </div>
      <div data-final-knowledge="matrix-causation-note" style={{position: 'absolute', left: 0, right: 0, top: 520, height: 152, backgroundColor: C.ink, borderRadius: 14, padding: '14px 24px'}}>
        <Enter delay={148} style={{fontSize: 22, fontWeight: 900, color: C.chalk}}>多数说：不要求「防止措施」与「结果未发生」有因果关系——</Enter>
        <Enter delay={160} style={{marginTop: 10, display: 'flex', gap: 16, flexWrap: 'wrap'}}>
          <Chip style={{fontSize: 22}}>毒药本不致死仍送医 → <Verdict kind="stop" text="中止" delay={168} /></Chip>
          <Chip style={{fontSize: 22}}>打120迎救护车，邻居先送医脱险 → 有真挚努力 → <Verdict kind="stop" text="中止" delay={176} /></Chip>
        </Enter>
      </div>
      <Enter delay={190} style={{position: 'absolute', left: 0, right: 0, top: 690, fontSize: 23, fontWeight: 900, color: C.ink, textAlign: 'center'}}>
        危害结果＝<SoftHi dark style={{fontSize: 23}}>行为性质所决定、追求或放任的结果</SoftHi>，重伤不等于死亡结果发生
      </Enter>
    </div>
  </Shell>
);

export const InterveningTwoStepsScene = () => (
  <Shell code="14" title="介入因素：两步走">
    <div data-layout="intervening-two-step-cases" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,external-negation,stamp" data-visual-grammar="two-step-causation,case-verdicts" data-focal-rule="intervening-factors-break-causation-when-abnormal-and-dominant-over-the-rescue" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', left: 0, right: 0, top: 0, display: 'flex', gap: 16}}>
        <div data-final-knowledge="step-abnormality" style={{flex: 1, backgroundColor: C.track, borderRadius: 14, padding: '14px 18px'}}>
          <Enter delay={6} style={{fontSize: 24, color: C.white, fontWeight: 900}}>第一步 · 异常性</Enter>
          <Enter delay={16} style={{marginTop: 6, fontSize: 22, color: C.chalk, fontWeight: 700}}>介入因素异常 → 与先前犯罪行为呈独立关系</Enter>
        </div>
        <div data-final-knowledge="step-force" style={{flex: 1, backgroundColor: C.track, borderRadius: 14, padding: '14px 18px'}}>
          <Enter delay={30} style={{fontSize: 24, color: C.white, fontWeight: 900}}>第二步 · 作用力</Enter>
          <Enter delay={40} style={{marginTop: 6, fontSize: 22, color: C.chalk, fontWeight: 700}}>谁对结果作用大；介入因素<SoftHi style={{fontSize: 21}}>阻断救助行为</SoftHi>→作用大→有因果</Enter>
        </div>
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 148, display: 'flex', flexDirection: 'column', gap: 14}}>
        <div data-final-knowledge="case-2014-crash" style={{backgroundColor: C.paper, border: `3px solid ${C.ink}`, borderRadius: 14, padding: '12px 18px'}}>
          <Enter delay={56} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <GraduationCap size={24} color={C.warm} style={{flexShrink: 0}} />
            <span style={{fontSize: 22, fontWeight: 900}}>2014年第53题 · 刺重伤乙后送医，途中自己酿成车祸，乙被撞死</span>
          </Enter>
          <Enter delay={68} style={{marginTop: 6, display: 'flex', alignItems: 'center', gap: 10, fontSize: 22, fontWeight: 700, flexWrap: 'wrap'}}>
            <Car size={22} color={C.warm} style={{flexShrink: 0}} />车祸异常＋阻断救助、直接致死 → 死亡与杀人行为无因果 → <Neg dark size={21}>非既遂</Neg>；非意志以外原因致死 → <Neg dark size={21}>非未遂</Neg> → <Verdict kind="stop" text="故意杀人中止" delay={80} />＋交通肇事罪并罚
          </Enter>
        </div>
        <div data-final-knowledge="case-2015-jump" style={{backgroundColor: C.paper, border: `3px solid ${C.ink}`, borderRadius: 14, padding: '12px 18px'}}>
          <Enter delay={94} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <GraduationCap size={24} color={C.warm} style={{flexShrink: 0}} />
            <span style={{fontSize: 22, fontWeight: 900}}>2015年第6题 · 毒蛇咬伤后送医，乙跳车逃走中毒死亡（送医本不死）</span>
          </Enter>
          <Enter delay={106} style={{marginTop: 6, display: 'flex', alignItems: 'center', gap: 10, fontSize: 22, fontWeight: 700, flexWrap: 'wrap'}}>
            乙跳车异常＋阻断救助 → 死亡与先前行为无因果 → <Verdict kind="stop" text="犯罪中止" delay={118} />
          </Enter>
        </div>
        <div data-final-knowledge="case-2020-fall" style={{backgroundColor: C.paper, border: `3px solid ${C.danger}`, borderRadius: 14, padding: '12px 18px'}}>
          <Enter delay={132} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <GraduationCap size={24} color={C.danger} style={{flexShrink: 0}} />
            <span style={{fontSize: 22, fontWeight: 900}}>2020年试题 · 重伤垂危，抱起送医时滑倒，垂危＋摔倒共同致死</span>
          </Enter>
          <Enter delay={144} style={{marginTop: 6, display: 'flex', alignItems: 'center', gap: 10, fontSize: 22, fontWeight: 700, flexWrap: 'wrap'}}>
            摔倒异常→二因一果；不异常→先前行为有因果 → 无论哪种 → <Verdict kind="done" text="既遂·不能成立中止" delay={156} />
          </Enter>
        </div>
      </div>
      <Enter delay={180} style={{position: 'absolute', left: 0, right: 0, top: 700, fontSize: 23, fontWeight: 900, color: C.ink, textAlign: 'center'}}>
        口诀：<SoftHi dark style={{fontSize: 23}}>先看异不异常，再比谁的作用大</SoftHi>；阻断救助者胜
      </Enter>
    </div>
  </Shell>
);

export const DiscontinuationPenaltyScene = () => (
  <Shell code="15" title="中止的处罚：损害范围">
    <div data-layout="damage-scope-rules" data-visual-anchor="flow-target" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="damage-scope,causal-attribution" data-focal-rule="punishment-hinges-on-punishable-damage-caused-by-the-prior-crime" data-focal-channels="icon,contrast,annotation,spatial" style={{position: 'absolute', inset: 0}}>
      <Enter delay={6} style={{position: 'absolute', left: 0, right: 0, top: 0, backgroundColor: C.ink, borderRadius: 12, padding: '10px 20px', display: 'flex', gap: 14, alignItems: 'center', fontSize: 22, color: C.chalk, fontWeight: 800}}>
        <span style={{color: C.flash, fontWeight: 950}}>刑法第24条第2款</span>
        没有造成损害 → <Stamp delay={14} tone="chalk">免除处罚</Stamp>；造成损害 → <Stamp delay={18} tone="chalk">减轻处罚</Stamp>
      </Enter>
      <div data-final-knowledge="penalty-scope-panel" style={{position: 'absolute', left: 0, top: 96, width: 872, height: 560, backgroundColor: C.paper, border: `3px solid ${C.ink}`, borderRadius: 16, padding: '16px 22px'}}>
        <Enter delay={24} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <LabelBlock ink size={25} color={C.warm}>什么算「损害」</LabelBlock>
          <span style={{fontSize: 22, fontWeight: 700}}>不是既遂结果，而是<ThinU>刑法要处罚的危害结果</ThinU></span>
        </Enter>
        <div style={{marginTop: 14, display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={40} style={{backgroundColor: 'rgba(232,161,60,0.18)', borderRadius: 10, padding: '10px 14px', fontSize: 22, fontWeight: 700}}>
            强制猥亵后放弃强奸 → 猥亵是要处罚的结果 → 造成损害 → <Stamp delay={50}>减轻处罚</Stamp>
          </Enter>
          <Enter delay={60} style={{backgroundColor: 'rgba(63,125,78,0.12)', borderRadius: 10, padding: '10px 14px', fontSize: 22, fontWeight: 700}}>
            抢劫中致轻微伤后放弃 → 轻微伤不属要处罚的结果 → 未造成损害 → <Stamp delay={70} tone="green">免除处罚</Stamp>
          </Enter>
        </div>
      </div>
      <div data-final-knowledge="penalty-causation-panel" style={{position: 'absolute', left: 904, top: 96, width: 872, height: 560, backgroundColor: C.paper, border: `3px solid ${C.ink}`, borderRadius: 16, padding: '16px 22px'}}>
        <Enter delay={84} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <LabelBlock ink size={25} color={C.cool}>损害算谁的</LabelBlock>
          <span style={{fontSize: 22, fontWeight: 700}}>仅指<ThinU>先前犯罪行为</ThinU>导致；中止行为造成的另算</span>
        </Enter>
        <div style={{marginTop: 14, display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={100} style={{backgroundColor: 'rgba(232,161,60,0.18)', borderRadius: 10, padding: '10px 14px', fontSize: 22, fontWeight: 700}}>
            盗机器后放回，机器已毁坏 → 毁坏是先前盗窃造成 → <Stamp delay={110}>减轻处罚</Stamp>
          </Enter>
          <Enter delay={120} style={{backgroundColor: 'rgba(63,125,78,0.12)', borderRadius: 10, padding: '10px 14px', fontSize: 22, fontWeight: 700}}>
            放回赃物砸死保安 → 死亡由中止行为造成 → 盗窃<Stamp delay={130} tone="green">免除</Stamp>＋另定过失致人死亡罪
          </Enter>
          <Enter delay={140} style={{backgroundColor: 'rgba(63,125,78,0.12)', borderRadius: 10, padding: '10px 14px', fontSize: 22, fontWeight: 700}}>
            送医途中车祸致死 → 死亡非杀人行为导致 → 杀人<Stamp delay={150} tone="green">免除</Stamp>＋交通肇事罪并罚
          </Enter>
        </div>
      </div>
      <Enter delay={176} style={{position: 'absolute', left: 0, right: 0, top: 700, fontSize: 23, fontWeight: 900, color: C.ink, textAlign: 'center'}}>
        两问定处罚：<SoftHi dark style={{fontSize: 23}}>损害是否值得处罚 · 损害是不是先前犯罪造成的</SoftHi>
      </Enter>
    </div>
  </Shell>
);
