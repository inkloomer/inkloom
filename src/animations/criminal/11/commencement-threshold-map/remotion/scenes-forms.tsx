import {CheckCheck, CircleDashed, CirclePlay, Flag, GraduationCap, HandHeart, Zap} from 'lucide-react';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp, ThinU} from './theme';

export const FormsOverviewScene = () => (
  <Shell code="04" title="四种形态：一张赛道总览">
    <div data-layout="four-forms-stage-map" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,stamp" data-visual-grammar="overview-progression,exclusion-rules" data-focal-rule="crime-forms-are-terminal-and-mutually-exclusive-stages-of-one-intentional-crime" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <Enter delay={6} style={{position: 'absolute', left: 0, right: 0, top: 0, display: 'flex', gap: 14, alignItems: 'center'}}>
        <Chip tone="ink" style={{backgroundColor: C.ink, fontSize: 22}}>只有故意犯罪才有形态——过失犯罪无既遂未遂</Chip>
        <Chip tone="ink" style={{backgroundColor: C.ink, fontSize: 22}}>终局性形态，不是暂时性停顿</Chip>
        <Chip tone="ink" style={{backgroundColor: C.ink, fontSize: 22}}>同一犯罪只能占一个——相互排斥</Chip>
      </Enter>
      <div style={{position: 'absolute', left: 0, right: 0, top: 84, height: 300, backgroundColor: C.track, borderRadius: 18}}>
        <div style={{position: 'absolute', left: 0, right: 0, top: 98, height: 4, backgroundColor: C.chalkDim}} />
        <div data-final-knowledge="overview-stage-map" style={{position: 'absolute', inset: 0}}>
          <div data-final-knowledge="overview-prep-form" style={{position: 'absolute', left: 24, top: 22, width: 360}}>
            <Enter delay={30}>
              <LabelBlock size={26} color={C.prep}><CircleDashed size={26} color={C.chalk} />预备阶段</LabelBlock>
              <div style={{marginTop: 12, backgroundColor: C.panelWhite, borderRadius: 10, padding: '10px 14px'}}>
                <div style={{fontSize: 24, fontWeight: 900, color: C.white}}><CircleDashed size={22} color={C.chalk} style={{display: 'inline', verticalAlign: -3, marginRight: 8}} />犯罪预备</div>
                <div style={{fontSize: 22, color: C.chalk, marginTop: 6}}>因意志以外原因未能着手</div>
              </div>
            </Enter>
          </div>
          <Enter delay={52} style={{position: 'absolute', left: 300, top: 150}}>
            <Chip style={{fontSize: 22}}>预备阶段中止：自动放弃</Chip>
          </Enter>
          <div data-final-knowledge="overview-attempt-form" style={{position: 'absolute', left: 664, top: 22, width: 360}}>
            <Enter delay={72}>
              <LabelBlock size={26}><CirclePlay size={26} color={C.chalk} />实行阶段（着手之后）</LabelBlock>
              <div style={{marginTop: 12, backgroundColor: C.panelWhite, borderRadius: 10, padding: '10px 14px'}}>
                <div style={{fontSize: 24, fontWeight: 900, color: C.white}}><Zap size={22} color={C.chalk} style={{display: 'inline', verticalAlign: -3, marginRight: 8}} />犯罪未遂</div>
                <div style={{fontSize: 22, color: C.chalk, marginTop: 6}}>意志以外原因未得逞</div>
              </div>
            </Enter>
          </div>
          <Enter delay={92} style={{position: 'absolute', left: 980, top: 150}}>
            <Chip style={{fontSize: 22}}>实行阶段中止：自动放弃＋有效防止</Chip>
          </Enter>
          <div data-final-knowledge="overview-completion-form" style={{position: 'absolute', right: 24, top: 22, width: 330}}>
            <Enter delay={116}>
              <LabelBlock size={26} color={C.flash}><Flag size={26} color={C.chalk} />终点：既遂</LabelBlock>
              <div style={{marginTop: 12, backgroundColor: C.panelWhite, borderRadius: 10, padding: '10px 14px'}}>
                <div style={{fontSize: 24, fontWeight: 900, color: C.white}}><CheckCheck size={22} color={C.flash} style={{display: 'inline', verticalAlign: -3, marginRight: 8}} />实害结果发生</div>
                <div style={{fontSize: 22, color: C.chalk, marginTop: 6}}>由实行行为在实行阶段导致</div>
              </div>
            </Enter>
          </div>
          <div data-final-knowledge="overview-discontinue-forms" style={{position: 'absolute', left: 310, bottom: 14}}>
            <Enter delay={134} style={{display: 'flex', gap: 12, alignItems: 'center'}}>
              <HandHeart size={26} color={C.flash} />
              <span style={{fontSize: 22, color: C.chalk, fontWeight: 800}}>犯罪中止能出现在预备、实行两个阶段——看「是否自动」</span>
            </Enter>
          </div>
        </div>
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 416, height: 150, backgroundColor: C.paper, border: `3px solid ${C.ink}`, borderRadius: 14, padding: '14px 26px'}}>
        <Enter delay={156}>
          <LabelBlock ink color={C.warm} size={25}>同一犯罪只定格一次</LabelBlock>
        </Enter>
        <Enter delay={168} style={{marginTop: 10, display: 'flex', gap: 16, alignItems: 'center', fontSize: 24, fontWeight: 800}}>
          <span>预备</span><Stamp delay={174} tone="prep">排斥</Stamp>
          <span>未遂</span><Stamp delay={180} tone="prep">排斥</Stamp>
          <span>中止</span><Stamp delay={186} tone="prep">排斥</Stamp>
          <span>既遂</span>
          <span style={{flex: 1}} />
          <span style={{fontSize: 22, color: C.prep, fontWeight: 700}}>谁先呈现终局形态，就排除其余</span>
        </Enter>
      </div>
      <Enter delay={200} style={{position: 'absolute', left: 0, right: 0, top: 590, fontSize: 23, fontWeight: 900, color: C.ink, textAlign: 'center'}}>
        全讲一张图：<SoftHi dark style={{fontSize: 23}}>着手定分界 · 自动性定中止 · 结果定既遂</SoftHi>
      </Enter>
    </div>
  </Shell>
);

const PrepGate = ({n, title, sub, cases, delay, knowledge}: {n: string; title: string; sub: string; cases: React.ReactNode; delay: number; knowledge: string}) => (
  <div data-final-knowledge={knowledge} style={{position: 'absolute', top: 120, width: 560, height: 440, backgroundColor: C.track, borderRadius: 16, padding: '16px 20px', left: (n === '1' ? 0 : n === '2' ? 608 : 1216)}}>
    <Enter delay={delay} style={{display: 'flex', alignItems: 'center', gap: 12}}>
      <span style={{fontSize: 40, fontWeight: 950, color: C.ghost}}>{n}</span>
      <LabelBlock size={26}>{title}</LabelBlock>
    </Enter>
    <Enter delay={delay + 10} style={{marginTop: 10, fontSize: 22, color: C.chalk, fontWeight: 700}}>{sub}</Enter>
    <Enter delay={delay + 20} style={{marginTop: 14}}>{cases}</Enter>
  </div>
);

const CaseRow = ({good, children}: {good: boolean; children: React.ReactNode}) => (
  <div style={{marginTop: 8, backgroundColor: C.panelWhite, borderRadius: 8, padding: '6px 10px', fontSize: 22, color: C.chalk, fontWeight: 700, lineHeight: 1.35}}>
    {good ? <span style={{color: C.flash, marginRight: 6}}>✓</span> : <Neg size={20}>{''}</Neg>}
    {children}
  </div>
);

export const PreparationGatesScene = () => (
  <Shell code="05" title="犯罪预备：三道门">
    <div data-layout="triple-gate-preparation" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="gate-checklist,concept-isolation" data-focal-rule="preparation-requires-intent-to-commence-plus-dangerous-preparatory-act-plus-failure-beyond-will" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <Enter delay={6} style={{position: 'absolute', left: 0, right: 0, top: 0, backgroundColor: C.ink, borderRadius: 12, padding: '10px 20px', display: 'flex', gap: 14, alignItems: 'center', fontSize: 22, color: C.chalk, fontWeight: 800}}>
        <span style={{color: C.flash, fontWeight: 950}}>刑法第22条</span>
        为了犯罪，准备工具、制造条件的，是犯罪预备——预备犯可以比照既遂犯<Stamp delay={14} tone="chalk">从轻·减轻·免除</Stamp>
      </Enter>
      <PrepGate
        n="1"
        title="主观：为了着手实行犯罪"
        sub={'「为了犯罪」＝为了着手实行；为预备犯罪再做的准备不是预备行为'}
        delay={26}
        knowledge="prep-gate-intent"
        cases={<>
          <CaseRow good={true}>为实行抢劫而购买凶器——属于预备行为</CaseRow>
          <CaseRow good={false}>打工挣钱买刀（打工买刀案）——只是为预备犯罪做准备</CaseRow>
          <CaseRow good={false}>乘出租车去五金店——为买凶器做的准备</CaseRow>
        </>}
      />
      <PrepGate
        n="2"
        title="客观：实施了预备行为"
        sub={'对法益已造成一定危险，且尚未达到紧迫程度'}
        delay={56}
        knowledge="prep-gate-act"
        cases={<>
          <CaseRow good={false}>对室友说「想放他血」——犯意流露，无任何危险</CaseRow>
          <CaseRow good={true}>进而买刀准备——转化为预备行为</CaseRow>
          <div style={{marginTop: 10, fontSize: 22, color: C.chalkDim, fontWeight: 700}}>分界＝对法益的<ThinU color={C.chalk}>危险程度</ThinU></div>
        </>}
      />
      <PrepGate
        n="3"
        title="原因：意志以外未能着手"
        sub={'被迫停在下刀之前——才定格为犯罪预备'}
        delay={86}
        knowledge="prep-gate-cause"
        cases={<>
          <div style={{marginTop: 8, fontSize: 22, color: C.chalk, fontWeight: 700, lineHeight: 1.4}}>预备阶段有两个可能形态：</div>
          <div style={{marginTop: 8, display: 'flex', gap: 10, flexWrap: 'wrap'}}>
            <Chip tone="prep">被迫放弃 → 犯罪预备</Chip>
            <Chip tone="green">自动放弃 → 预备阶段中止</Chip>
          </div>
        </>}
      />
      <Enter delay={150} style={{position: 'absolute', left: 0, right: 0, top: 590, display: 'flex', gap: 14, alignItems: 'center', justifyContent: 'center', fontSize: 23, fontWeight: 900}}>
        <span>概念隔离：</span>
        <Chip tone="ink" style={{backgroundColor: C.ink, fontSize: 22}}>预备犯＝人</Chip>
        <Chip tone="ink" style={{backgroundColor: C.ink, fontSize: 22}}>犯罪预备＝终局形态</Chip>
        <Chip tone="ink" style={{backgroundColor: C.ink, fontSize: 22}}>预备行为＝具体准备</Chip>
      </Enter>
    </div>
  </Shell>
);

export const PreparationStageForkScene = () => (
  <Shell code="06" title="预备阶段：被迫与自动的岔路">
    <div data-layout="prep-stage-auto-fork" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,external-negation,stamp" data-visual-grammar="auto-fork,exam-application" data-focal-rule="stopping-in-the-preparatory-stage-is-preparation-when-forced-and-discontinuation-when-voluntary" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', left: 0, top: 60, width: 380, height: 300, backgroundColor: C.track, borderRadius: 16, display: 'grid', placeItems: 'center'}}>
        <Enter delay={6} style={{textAlign: 'center'}}>
          <CircleDashed size={44} color={C.chalk} />
          <div style={{fontSize: 28, fontWeight: 900, color: C.white, marginTop: 10}}>在预备阶段停下</div>
          <div style={{fontSize: 22, color: C.chalk, marginTop: 8}}>工具已备、条件已造</div>
        </Enter>
      </div>
      <div style={{position: 'absolute', left: 380, top: 200, width: 300, display: 'flex', flexDirection: 'column', gap: 70}}>
        <Dash delay={20} style={{borderTop: `4px solid ${C.prep}`, width: '100%'}} />
        <Dash delay={34} style={{borderTop: `4px solid ${C.green}`, width: '100%'}} />
      </div>
      <div data-final-knowledge="fork-preparation-branch" style={{position: 'absolute', left: 700, top: 70, width: 1044}}>
        <Enter delay={44} style={{backgroundColor: C.paper, border: `3px solid ${C.prep}`, borderRadius: 14, padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 14}}>
          <CircleDashed size={30} color={C.prep} style={{flexShrink: 0}} />
          <div style={{fontSize: 25, fontWeight: 900, flex: 1}}>因意志以外原因被迫放弃</div>
          <Stamp delay={56} tone="prep">犯罪预备</Stamp>
        </Enter>
      </div>
      <div data-final-knowledge="fork-discontinue-branch" style={{position: 'absolute', left: 700, top: 250, width: 1044}}>
        <Enter delay={58} style={{backgroundColor: C.paper, border: `3px solid ${C.green}`, borderRadius: 14, padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 14}}>
          <HandHeart size={30} color={C.green} style={{flexShrink: 0}} />
          <div style={{fontSize: 25, fontWeight: 900, flex: 1}}>自动放弃——具备自动性</div>
          <Stamp delay={70} tone="green">预备阶段犯罪中止</Stamp>
        </Enter>
      </div>
      <div data-final-knowledge="fork-exam-2010" style={{position: 'absolute', left: 0, right: 0, top: 430, height: 240, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px'}}>
        <Enter delay={96} style={{display: 'flex', alignItems: 'center', gap: 12, fontSize: 23, fontWeight: 900, color: C.chalk}}>
          <GraduationCap size={30} color={C.flash} />
          2010年第5题 · 妻子乙做有毒饭菜等丈夫回家，期间决定不等了，倒掉饭菜
        </Enter>
        <Enter delay={110} style={{marginTop: 12, display: 'flex', alignItems: 'center', gap: 14, fontSize: 24, color: C.chalk, fontWeight: 800}}>
          <span>停止点：还在预备阶段（未着手）</span>
          <span style={{height: 4, flex: 1, backgroundColor: C.chalkDim}} />
          <span>心态：主动打消念头</span>
        </Enter>
        <Enter delay={124} style={{marginTop: 14}}>
          <SoftHi style={{fontSize: 26}}>结论：预备阶段的犯罪中止（自动放弃）</SoftHi>
          <span style={{marginLeft: 18, fontSize: 22, color: C.chalkDim, fontWeight: 700}}>若因丈夫提前回家被迫倒掉 → 犯罪预备</span>
        </Enter>
      </div>
      <Enter delay={146} style={{position: 'absolute', left: 0, right: 0, top: 690, fontSize: 23, fontWeight: 900, color: C.ink, textAlign: 'center'}}>
        核心关键一句话：<SoftHi dark style={{fontSize: 23}}>放弃是被迫还是自动</SoftHi>
      </Enter>
    </div>
  </Shell>
);

export const AttemptElementsScene = () => (
  <Shell code="07" title="犯罪未遂：着手与未得逞">
    <div data-layout="attempt-elements-duo" data-visual-anchor="timeline-gate" data-text-treatments="chip,label-block,soft-highlight,thin-underline,stamp" data-visual-grammar="dual-elements,case-application" data-focal-rule="attempt-needs-commencement-plus-failure-beyond-the-will" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <Enter delay={6} style={{position: 'absolute', left: 0, right: 0, top: 0, backgroundColor: C.ink, borderRadius: 12, padding: '10px 20px', display: 'flex', gap: 14, alignItems: 'center', fontSize: 22, color: C.chalk, fontWeight: 800}}>
        <span style={{color: C.flash, fontWeight: 950}}>刑法第23条</span>
        已经着手实行犯罪，由于意志以外的原因未得逞的，是犯罪未遂——比照既遂犯<Stamp delay={14} tone="chalk">从轻·减轻</Stamp>
      </Enter>
      <div data-final-knowledge="attempt-element-commence" style={{position: 'absolute', left: 0, top: 120, width: 860, height: 180, backgroundColor: C.track, borderRadius: 16, padding: '16px 22px'}}>
        <Enter delay={26} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <CirclePlay size={32} color={C.flash} />
          <LabelBlock size={27}>条件一：已经着手</LabelBlock>
          <span style={{fontSize: 22, color: C.chalk, fontWeight: 700}}>进入实行阶段（认定见 01–03 场景）</span>
        </Enter>
      </div>
      <div data-final-knowledge="attempt-element-failure" style={{position: 'absolute', left: 916, top: 120, width: 860, height: 180, backgroundColor: C.track, borderRadius: 16, padding: '16px 22px'}}>
        <Enter delay={56} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <LabelBlock size={27} color={C.cool}>条件二：意志以外原因未得逞</LabelBlock>
        </Enter>
        <Enter delay={68} style={{marginTop: 10, display: 'flex', gap: 12, flexWrap: 'wrap'}}>
          <Chip style={{fontSize: 22}}>未得逞 → 排除既遂</Chip>
          <Chip style={{fontSize: 22}}>意志以外 → 排除中止</Chip>
        </Enter>
      </div>
      <div data-final-knowledge="attempt-case-bulldozer" style={{position: 'absolute', left: 0, right: 0, top: 330, height: 340, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px'}}>
        <Enter delay={96} style={{display: 'flex', alignItems: 'center', gap: 12, fontSize: 23, fontWeight: 900, color: C.chalk}}>
          <GraduationCap size={30} color={C.flash} />
          综合应用 · 推土机强奸案：狗剩铲起小美运至僻静处，小美自己爬出，狗剩道歉离去
        </Enter>
        <div style={{marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={110} style={{display: 'flex', alignItems: 'center', gap: 12, fontSize: 23, color: C.chalk, fontWeight: 800}}>
            <Chip tone="warm">第①步</Chip>铲进斗里狂奔——对人实施强制手段 → <SoftHi style={{fontSize: 22}}>已经着手</SoftHi>
          </Enter>
          <Enter delay={124} style={{display: 'flex', alignItems: 'center', gap: 12, fontSize: 23, color: C.chalk, fontWeight: 800}}>
            <Chip tone="warm">第②步</Chip>小美自己爬出——<Neg size={22}>非狗剩自动放弃</Neg>，属意志以外原因
          </Enter>
          <Enter delay={138} style={{display: 'flex', alignItems: 'center', gap: 12, fontSize: 23, color: C.chalk, fontWeight: 800}}>
            <Chip tone="warm">第③步</Chip>奸淫未得逞 → <Stamp delay={146}>强奸罪·犯罪未遂</Stamp>
          </Enter>
        </div>
      </div>
      <Enter delay={164} style={{position: 'absolute', left: 0, right: 0, top: 690, fontSize: 23, fontWeight: 900, color: C.ink, textAlign: 'center'}}>
        「未得逞」看<SoftHi dark style={{fontSize: 23}}>案件性质非既遂</SoftHi>，「意志以外」看<SoftHi dark style={{fontSize: 23}}>心态非中止</SoftHi>
      </Enter>
    </div>
  </Shell>
);
