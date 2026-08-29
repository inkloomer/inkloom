import {Banknote, CheckCheck, CircleDashed, CirclePlay, CircleSlash, GraduationCap, HandHeart, Scale, Users} from 'lucide-react';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp, ThinU} from './theme';

const Verdict = ({kind, text, delay}: {kind: 'stop' | 'fail' | 'done'; text: string; delay: number}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8}}>
    {kind === 'stop' && <HandHeart size={22} color={C.green} style={{flexShrink: 0}} />}
    {kind === 'fail' && <CircleSlash size={22} color={C.warm} style={{flexShrink: 0}} />}
    {kind === 'done' && <CheckCheck size={22} color={C.flash} style={{flexShrink: 0}} />}
    <Stamp delay={delay} tone={kind === 'stop' ? 'green' : 'flash'}>{text}</Stamp>
  </span>
);

export const CompletionElementsScene = () => (
  <Shell code="16" title="既遂认定：阶段与因果">
    <div data-layout="completion-stage-cases" data-visual-anchor="timeline-gate" data-text-treatments="chip,label-block,soft-highlight,thin-underline,stamp" data-visual-grammar="stage-premature-result,case-pair" data-focal-rule="completion-requires-the-result-in-the-execution-stage-caused-by-execution-conduct" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', left: 0, right: 0, top: 0, height: 180, backgroundColor: C.track, borderRadius: 16}}>
        <div data-final-knowledge="completion-stage-rule" style={{position: 'absolute', inset: 0, padding: '14px 22px'}}>
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 14}}>
            <CircleDashed size={28} color={C.chalk} />
            <LabelBlock size={26}>预备阶段</LabelBlock>
            <Dash delay={14} style={{flex: 1, borderTop: `3px dashed ${C.chalkDim}`}} />
            <CirclePlay size={30} color={C.flash} style={{flexShrink: 0}} />
            <LabelBlock size={26}>实行阶段</LabelBlock>
            <Dash delay={22} style={{flex: 1, borderTop: `5px solid ${C.chalk}`}} />
            <CheckCheck size={30} color={C.flash} style={{flexShrink: 0}} />
            <LabelBlock size={26} color={C.flash}>既遂结果在此发生</LabelBlock>
          </Enter>
          <Enter delay={30} style={{marginTop: 12, display: 'flex', gap: 12}}>
            <Chip style={{fontSize: 22}}>既遂结果出现在实行阶段</Chip>
            <Chip style={{fontSize: 22}}>导致原因必须是实行行为</Chip>
          </Enter>
        </div>
      </div>
      <div data-final-knowledge="completion-premature-case" style={{position: 'absolute', left: 0, top: 204, width: 872, backgroundColor: C.paper, border: `3px solid ${C.ink}`, borderRadius: 14, padding: '14px 20px'}}>
        <Enter delay={48} style={{fontSize: 22, fontWeight: 900}}>
          <GraduationCap size={24} color={C.warm} style={{display: 'inline', verticalAlign: -4, marginRight: 6}} />提前发生实害结果 · 毒酒案：甲备好毒酒出门，乙偶然喝下死亡
        </Enter>
        <Enter delay={60} style={{marginTop: 8, display: 'flex', alignItems: 'center', gap: 10, fontSize: 22, fontWeight: 700, flexWrap: 'wrap'}}>
          放毒酒仍是<Chip tone="prep" style={{fontSize: 21}}>预备行为</Chip>→ 故意杀人<Stamp delay={70} tone="prep">犯罪预备</Stamp>＋过失致人死亡 → 想象竞合<Stamp delay={78}>择一重</Stamp>
        </Enter>
        <Enter delay={88} style={{marginTop: 6, fontSize: 22, color: C.prep, fontWeight: 700}}>
          <Neg dark size={21}>预备行为偶然导致结果 ≠ 犯罪既遂</Neg>
        </Enter>
      </div>
      <div data-final-knowledge="completion-sacrifice-case" style={{position: 'absolute', left: 904, top: 204, width: 872, backgroundColor: C.paper, border: `3px solid ${C.ink}`, borderRadius: 14, padding: '14px 20px'}}>
        <Enter delay={100} style={{fontSize: 22, fontWeight: 900}}>
          <GraduationCap size={24} color={C.warm} style={{display: 'inline', verticalAlign: -4, marginRight: 6}} />丢卒保车 · 跟踪妇女欲抢劫，妇女丢包逃跑，甲捡走财物并打人
        </Enter>
        <Enter delay={112} style={{marginTop: 8, display: 'flex', alignItems: 'center', gap: 10, fontSize: 22, fontWeight: 700, flexWrap: 'wrap'}}>
          抢劫停在预备 → <Stamp delay={120} tone="prep">抢劫预备</Stamp>；捡财不还＝侵占 → <Stamp delay={128} tone="flash">侵占既遂</Stamp> → 数罪并罚
        </Enter>
      </div>
      <Enter delay={150} style={{position: 'absolute', left: 0, right: 0, top: 460, fontSize: 23, fontWeight: 900, color: C.ink, textAlign: 'center'}}>
        实害结果必须长在<SoftHi dark style={{fontSize: 23}}>实行阶段、由实行行为导致</SoftHi>
      </Enter>
      <Enter delay={166} style={{position: 'absolute', left: 0, right: 0, top: 530, fontSize: 23, fontWeight: 900, color: C.ink, textAlign: 'center'}}>
        因果链断裂 → 到不了终点（见下一场景：四罪因果链）
      </Enter>
      <div style={{position: 'absolute', left: 0, right: 0, top: 600, display: 'flex', justifyContent: 'center'}}>
        <Enter delay={180} style={{width: 240, height: 6, backgroundColor: C.ink}} />
      </div>
    </div>
  </Shell>
);

export const CausationChainsScene = () => (
  <Shell code="17" title="四罪因果链与断裂">
    <div data-layout="four-crime-chain-lanes" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="chain-break,lane-comparison" data-focal-rule="completion-fails-when-the-crimes-causal-chain-breaks-before-acquisition" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <Enter delay={6} style={{position: 'absolute', left: 0, right: 0, top: 0, fontSize: 22, fontWeight: 800, display: 'flex', gap: 12, alignItems: 'center'}}>
        <span style={{backgroundColor: C.ink, color: C.chalk, borderRadius: 10, padding: '6px 14px'}}>四罪各有固定链条——结果必须由最后一环导致；链条断裂 → 未遂</span>
      </Enter>
      <div style={{position: 'absolute', left: 0, right: 0, top: 66, display: 'flex', flexDirection: 'column', gap: 12}}>
        <div data-final-knowledge="chain-fraud" style={{backgroundColor: C.track, borderRadius: 12, padding: '10px 16px'}}>
          <Enter delay={22} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <LabelBlock size={24} color={C.cool}>诈骗</LabelBlock>
            {['欺骗行为', '认识错误', '处分财物', '取得财物'].map((s, i) => (
              <span key={s} style={{display: 'inline-flex', alignItems: 'center', gap: 10}}>
                {i > 0 && <span style={{color: C.chalkDim, fontWeight: 900}}>→</span>}
                <Chip style={{fontSize: 21}}>{s}</Chip>
              </span>
            ))}
            <span style={{flex: 1}} />
            <Neg size={20}>怜悯给钱（非基于错误）</Neg>
            <Verdict kind="fail" text="未遂" delay={34} />
          </Enter>
        </div>
        <div data-final-knowledge="chain-extortion" style={{backgroundColor: C.track, borderRadius: 12, padding: '10px 16px'}}>
          <Enter delay={46} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <LabelBlock size={24} color={C.cool}>敲诈勒索</LabelBlock>
            {['恐吓行为', '恐惧心理', '处分财物', '取得财物'].map((s, i) => (
              <span key={s} style={{display: 'inline-flex', alignItems: 'center', gap: 10}}>
                {i > 0 && <span style={{color: C.chalkDim, fontWeight: 900}}>→</span>}
                <Chip style={{fontSize: 21}}>{s}</Chip>
              </span>
            ))}
            <span style={{flex: 1}} />
            <Neg size={20}>毫无惧意给钱·报警诱捕</Neg>
            <Verdict kind="fail" text="未遂" delay={58} />
          </Enter>
        </div>
        <div data-final-knowledge="chain-robbery" style={{backgroundColor: C.track, borderRadius: 12, padding: '10px 16px'}}>
          <Enter delay={70} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <LabelBlock size={24}>抢劫</LabelBlock>
            {['暴力胁迫', '压制反抗', '交付财物', '取得财物'].map((s, i) => (
              <span key={s} style={{display: 'inline-flex', alignItems: 'center', gap: 10}}>
                {i > 0 && <span style={{color: C.chalkDim, fontWeight: 900}}>→</span>}
                <Chip style={{fontSize: 21}}>{s}</Chip>
              </span>
            ))}
            <span style={{flex: 1}} />
            <Neg size={20}>逃跑时钱包自己掉落</Neg>
            <Verdict kind="fail" text="未遂＋侵占并罚" delay={82} />
          </Enter>
        </div>
        <div data-final-knowledge="chain-rape" style={{backgroundColor: C.track, borderRadius: 12, padding: '10px 16px'}}>
          <Enter delay={94} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <LabelBlock size={24} color={C.warm}>强奸</LabelBlock>
            {['强制行为', '压制反抗', '奸淫'].map((s, i) => (
              <span key={s} style={{display: 'inline-flex', alignItems: 'center', gap: 10}}>
                {i > 0 && <span style={{color: C.chalkDim, fontWeight: 900}}>→</span>}
                <Chip style={{fontSize: 21}}>{s}</Chip>
              </span>
            ))}
            <span style={{flex: 1}} />
            <span style={{fontSize: 21, color: C.chalk, fontWeight: 800}}>认出后自愿发生（惭愧退出）</span>
            <Verdict kind="stop" text="中止" delay={106} />
          </Enter>
        </div>
      </div>
      <div data-final-knowledge="chain-rule-strip" style={{position: 'absolute', left: 0, right: 0, top: 500, height: 150, backgroundColor: C.paper, border: `3px solid ${C.ink}`, borderRadius: 14, padding: '14px 24px'}}>
        <Enter delay={130} style={{fontSize: 22, fontWeight: 900, display: 'flex', alignItems: 'center', gap: 12}}>
          <Scale size={24} color={C.warm} style={{flexShrink: 0}} />
          断链的本质：结果不是「基于错误/恐惧/无法反抗」的处分或奸淫造成的
        </Enter>
        <Enter delay={142} style={{marginTop: 10, fontSize: 22, fontWeight: 700}}>
          逐罪对号：没骗到→<ThinU>不给</ThinU>；没吓到→<ThinU>不交</ThinU>；没压制→<ThinU>不掉</ThinU>；没压制反抗→<ThinU>不成立奸淫既遂</ThinU>
        </Enter>
      </div>
      <Enter delay={164} style={{position: 'absolute', left: 0, right: 0, top: 690, fontSize: 23, fontWeight: 900, color: C.ink, textAlign: 'center'}}>
        既遂要求 <SoftHi dark style={{fontSize: 23}}>实行行为 → 最后一环 → 结果</SoftHi> 全程贯通
      </Enter>
    </div>
  </Shell>
);

export const ObjectTransferScene = () => (
  <Shell code="18" title="对象转移：财产与人事">
    <div data-layout="transfer-property-personal-pair" data-visual-anchor="role-pair" data-text-treatments="chip,label-block,soft-highlight,thin-underline,stamp" data-visual-grammar="transfer-pair,penalty-contrast" data-focal-rule="property-interests-are-substitutable-while-personal-interests-are-exclusive" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="transfer-property-panel" style={{position: 'absolute', left: 0, top: 0, width: 872, height: 620, backgroundColor: C.paper, border: `3px solid ${C.green}`, borderRadius: 16, padding: '16px 22px'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Banknote size={30} color={C.green} style={{flexShrink: 0}} />
          <LabelBlock ink size={27} color={C.green}>转移财产法益对象</LabelBlock>
        </Enter>
        <Enter delay={20} style={{marginTop: 12, fontSize: 22, fontWeight: 700, lineHeight: 1.5}}>
          例：入室本想盗现金，改拿珠宝；偷乙手机改偷丙手机
        </Enter>
        <Enter delay={34} style={{marginTop: 14, display: 'flex', gap: 12, alignItems: 'center'}}>
          <span style={{fontSize: 24, fontWeight: 900}}>只定一个</span>
          <Stamp delay={42} tone="green">盗窃既遂</Stamp>
          <span style={{fontSize: 23, fontWeight: 900}}>，不并罚</span>
        </Enter>
        <Enter delay={56} style={{marginTop: 14, display: 'flex', gap: 10, flexWrap: 'wrap'}}>
          <Chip tone="green" style={{fontSize: 22, backgroundColor: C.green}}>财产法益可替代</Chip>
          <Chip tone="green" style={{fontSize: 22, backgroundColor: C.green}}>不具人身属性</Chip>
        </Enter>
      </div>
      <div data-final-knowledge="transfer-personal-panel" style={{position: 'absolute', left: 904, top: 0, width: 872, height: 620, backgroundColor: C.paper, border: `3px solid ${C.warm}`, borderRadius: 16, padding: '16px 22px'}}>
        <Enter delay={24} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Users size={30} color={C.warm} style={{flexShrink: 0}} />
          <LabelBlock ink size={27} color={C.warm}>转移人身法益对象</LabelBlock>
        </Enter>
        <Enter delay={38} style={{marginTop: 12, fontSize: 22, fontWeight: 700, lineHeight: 1.5}}>
          例：按倒乙后改强奸丙——两个对象两笔账
        </Enter>
        <Enter delay={52} style={{marginTop: 14, display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap'}}>
          <span style={{fontSize: 24, fontWeight: 900}}>对乙</span>
          <Verdict kind="stop" text="强奸中止" delay={60} />
          <span style={{fontSize: 24, fontWeight: 900}}>对丙</span>
          <Stamp delay={68}>强奸既遂</Stamp>
          <span style={{fontSize: 23, fontWeight: 900}}>→ 数罪并罚</span>
        </Enter>
        <Enter delay={80} style={{marginTop: 14, display: 'flex', gap: 10}}>
          <Chip tone="warm" style={{fontSize: 22}}>人身法益专属</Chip>
        </Enter>
      </div>
      <Enter delay={110} style={{position: 'absolute', left: 0, right: 0, top: 660, fontSize: 23, fontWeight: 900, color: C.ink, textAlign: 'center'}}>
        一句话：<SoftHi dark style={{fontSize: 23}}>财可换人不可换</SoftHi>——财产一个既遂了账，人身分别定罪并罚
      </Enter>
    </div>
  </Shell>
);

export const FormsExclusionScene = () => (
  <Shell code="19" title="形态排斥：终局性判断">
    <div data-layout="exclusion-gate-lanes" data-visual-anchor="boundary" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="exclusion-rules,terminal-gate" data-focal-rule="terminal-form-is-fixed-when-conduct-ends-and-intent-vanishes" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="exclusion-terminal-gate" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 120, backgroundColor: C.ink, borderRadius: 14, padding: '12px 24px', display: 'flex', alignItems: 'center', gap: 20}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <span style={{fontSize: 24, fontWeight: 900, color: C.chalk}}>终局形态定格＝</span>
          <Chip style={{fontSize: 22}}>客观：犯罪行为彻底结束</Chip>
          <span style={{color: C.flash, fontSize: 26, fontWeight: 950}}>＋</span>
          <Chip style={{fontSize: 22}}>主观：犯罪意图彻底消除</Chip>
        </Enter>
        <span style={{flex: 1}} />
        <Enter delay={18} style={{fontSize: 22, color: C.chalk, fontWeight: 800, whiteSpace: 'nowrap'}}>同一犯罪只占一个形态——先到先定格</Enter>
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 144, display: 'flex', flexDirection: 'column', gap: 12}}>
        <div data-final-knowledge="exclusion-done-over-stop" style={{backgroundColor: C.track, borderRadius: 12, padding: '10px 16px'}}>
          <Enter delay={34} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <LabelBlock size={24}>既遂排斥中止</LabelBlock>
            <span style={{fontSize: 22, color: C.chalk, fontWeight: 700, flex: 1}}>盗窃既遂后悄悄送还——事后悔过不是中止</span>
            <Stamp delay={46} tone="chalk">仍既遂</Stamp>
          </Enter>
        </div>
        <div data-final-knowledge="exclusion-done-over-fail" style={{backgroundColor: C.track, borderRadius: 12, padding: '10px 16px'}}>
          <Enter delay={58} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <LabelBlock size={24}>既遂排斥未遂</LabelBlock>
            <span style={{fontSize: 22, color: C.chalk, fontWeight: 700, flex: 1}}>得手的箱子扔墙外被路人捡走——不再另立未遂</span>
            <Stamp delay={70} tone="chalk">仍既遂</Stamp>
          </Enter>
        </div>
        <div data-final-knowledge="exclusion-stop-over-fail" style={{backgroundColor: C.paper, border: `3px solid ${C.green}`, borderRadius: 12, padding: '10px 16px'}}>
          <Enter delay={82} style={{display: 'flex', flexDirection: 'column', gap: 6}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
              <LabelBlock ink size={24} color={C.green}>中止排斥未遂</LabelBlock>
              <span style={{fontSize: 22, fontWeight: 700}}>受骗真以为无需用强而离开 → 犯意消除，已定格中止；晚上提药赴约被捕</span>
              <Stamp delay={94} tone="green">仍中止</Stamp>
            </div>
            <div style={{fontSize: 22, fontWeight: 700}}>
              对照：声称给钱诱其收刀，犯意未消、行为未结束 → 不成立中止，被踢掉刀制服时定格 <Stamp delay={106}>未遂</Stamp>
            </div>
          </Enter>
        </div>
        <div data-final-knowledge="exclusion-fail-over-stop" style={{backgroundColor: C.paper, border: `3px solid ${C.warm}`, borderRadius: 12, padding: '10px 16px'}}>
          <Enter delay={120} style={{display: 'flex', flexDirection: 'column', gap: 6}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
              <LabelBlock ink size={24} color={C.warm}>未遂排斥中止</LabelBlock>
              <span style={{fontSize: 22, fontWeight: 700}}>以为必死而离开 → 行为结束、犯意消除，定格未遂；事后送医救活</span>
              <Stamp delay={132} tone="flash">仍未遂</Stamp>
            </div>
            <div style={{fontSize: 22, fontWeight: 700}}>
              对照：伤后停在原地<ThinU>观望</ThinU>、开煤气在门外<ThinU>等待</ThinU> → 犯意未消 → 事后救活 <Stamp delay={144} tone="green">成立中止</Stamp>
            </div>
          </Enter>
        </div>
      </div>
      <Enter delay={166} style={{position: 'absolute', left: 0, right: 0, top: 700, fontSize: 23, fontWeight: 900, color: C.ink, textAlign: 'center'}}>
        2022金题：D 敲诈后主动放弃并退款 = <SoftHi dark style={{fontSize: 23}}>切断因果＋有效防止 → 中止</SoftHi>
      </Enter>
    </div>
  </Shell>
);

export const RepeatAttacksScene = () => (
  <Shell code="20" title="重复侵害：间隔与终局">
    <div data-layout="repeat-interval-timeline" data-visual-anchor="timeline-gate" data-text-treatments="chip,label-block,soft-highlight,thin-underline,stamp" data-visual-grammar="interval-assessment,overall-review" data-focal-rule="repeat-attacks-merge-when-intervals-are-short-and-settle-when-overnight" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <Enter delay={6} style={{position: 'absolute', left: 0, right: 0, top: 0, display: 'flex', alignItems: 'center', gap: 14, fontSize: 22, fontWeight: 800}}>
        <span style={{backgroundColor: C.ink, color: C.chalk, borderRadius: 10, padding: '8px 16px'}}>连续重复相同侵害行为——核心标准：两次行为<ThinU>时间上是否紧密</ThinU></span>
      </Enter>
      <div style={{position: 'absolute', left: 0, right: 0, top: 84, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16}}>
        <div data-final-knowledge="repeat-long-interval" style={{backgroundColor: C.paper, border: `3px solid ${C.warm}`, borderRadius: 14, padding: '14px 20px'}}>
          <Enter delay={24}>
            <div style={{fontSize: 25, fontWeight: 900}}>间隔长（相隔一天/一夜）</div>
            <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8, fontSize: 22, fontWeight: 700}}>
              <span>第一晚撬保险柜未开 → <Stamp delay={36} tone="flash">未遂（已终局）</Stamp></span>
              <span>第二晚主动放弃 → <Stamp delay={44} tone="green">中止（也终局）</Stamp></span>
              <span style={{color: C.prep}}>两行为各自终局：不并罚，从重 → 按<Stamp delay={52}>未遂</Stamp>论处</span>
            </div>
          </Enter>
        </div>
        <div data-final-knowledge="repeat-short-interval" style={{backgroundColor: C.paper, border: `3px solid ${C.green}`, borderRadius: 14, padding: '14px 20px'}}>
          <Enter delay={60}>
            <div style={{fontSize: 25, fontWeight: 900}}>间隔短（连开两枪）</div>
            <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8, fontSize: 22, fontWeight: 700}}>
              <span>第一枪未响未终局，第二枪放弃 → <SoftHi dark style={{fontSize: 22}}>整体考察</SoftHi></span>
              <span>以最后呈现的形态定性 → <Stamp delay={72} tone="green">中止</Stamp></span>
              <span style={{color: C.prep}}>封闭空间换手段（砸头改掐脖）同理：放弃即中止</span>
            </div>
          </Enter>
        </div>
      </div>
      <div data-final-knowledge="repeat-gold-question" style={{position: 'absolute', left: 0, right: 0, top: 440, height: 230, backgroundColor: C.ink, borderRadius: 14, padding: '14px 24px'}}>
        <Enter delay={98} style={{display: 'flex', alignItems: 'center', gap: 12, fontSize: 22, fontWeight: 900, color: C.chalk}}>
          <GraduationCap size={28} color={C.flash} />
          2022年回忆版金题 · 哪个构成犯罪中止？——答案 D
        </Enter>
        <div style={{marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={112} style={{fontSize: 22, color: C.chalk, fontWeight: 700}}>A 投毒四次已致死 → 结果发生 → <Stamp delay={120} tone="chalk">既遂</Stamp>　B 以为妻死离开，后送医救活 → <Stamp delay={126} tone="chalk">未遂（未遂排斥中止）</Stamp></Enter>
          <Enter delay={132} style={{fontSize: 22, color: C.chalk, fontWeight: 700}}>C 制出80g毒品后扔水里 → 事后悔过 → <Stamp delay={140} tone="chalk">既遂（既遂排斥中止）</Stamp></Enter>
          <Enter delay={146} style={{fontSize: 22, color: C.white, fontWeight: 900}}>D 敲诈后告知不用打钱并退款 → 切断恐吓与交付的因果＋有效防止 → <Stamp delay={154} tone="green">中止 ✓</Stamp></Enter>
        </div>
      </div>
      <Enter delay={176} style={{position: 'absolute', left: 0, right: 0, top: 690, fontSize: 23, fontWeight: 900, color: C.ink, textAlign: 'center'}}>
        判节奏：<SoftHi dark style={{fontSize: 23}}>短间隔整体看，隔夜各自定，从重不并罚</SoftHi>
      </Enter>
    </div>
  </Shell>
);
