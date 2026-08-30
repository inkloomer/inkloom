import {AbsoluteFill} from 'remotion';
import {Ban, Eye, Gavel, Globe, GraduationCap, Languages, PenLine, Scale, ScrollText, Shield, TrendingDown} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp, ThinU} from './theme';

export const PrinciplePillarsScene = () => (
  <Shell code="01" title="原则三柱：程序法定 · 权利保障 · 专属定罪">
    <div data-layout="chalk-principle-pillars" data-visual-anchor="concept-icon" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="pillar-triad-set,identity-timeline" data-focal-rule="statutory-procedure-has-legislative-and-judicial-faces-defense-rights-center-on-counsel-and-only-the-court-convicts" data-focal-channels="icon,contrast,spatial,annotation" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', right: 30, bottom: 16, opacity: 0.08, pointerEvents: 'none'}}><ScrollText size={230} color={C.chalk} strokeWidth={1.1} /></div>
      <div data-final-knowledge="pillar-statutory-procedure" style={{position: 'absolute', left: 0, top: 0, width: 576, height: 556, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 13}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <ScrollText size={30} color={C.butter} style={{flexShrink: 0}} />
          <LabelBlock color={C.butter} size={28}>程序法定</LabelBlock>
          <span style={{flex: 1}} />
          <Stamp delay={16} tone="butter">两层面</Stamp>
        </Enter>
        <Enter delay={26}><Chip tone="butter" style={{fontSize: 22}}>立法原则 · 预先规定程序</Chip></Enter>
        <Enter delay={38}><Chip tone="sky" style={{fontSize: 22}}>司法原则 · 以法律为准绳</Chip></Enter>
        <div style={{marginTop: 4, border: `2px dashed ${C.panelLine}`, borderRadius: 10, padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 9}}>
          <Enter delay={52} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <span style={{fontSize: 23, fontWeight: 900, color: C.chalk, width: 96}}>大陆法系</span>
            <Chip tone="panel" style={{fontSize: 22}}>罪刑法定 ＋ 程序法定</Chip>
          </Enter>
          <Enter delay={64} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <span style={{fontSize: 23, fontWeight: 900, color: C.chalk, width: 96}}>英美法系</span>
            <Chip tone="panel" style={{fontSize: 22}}><ThinU>正当程序</ThinU>体现程序法定</Chip>
          </Enter>
          <Enter delay={76}><Neg size={22}>判例制度 ≠ 不实行程序法定</Neg></Enter>
        </div>
        <div style={{flex: 1}} />
        <Enter delay={92} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.butter} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.chalkDim}}>2015-2-64 · ABD</span>
        </Enter>
      </div>
      <div data-final-knowledge="pillar-rights-protection" style={{position: 'absolute', left: 600, top: 0, width: 576, height: 556, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 13}}>
        <Enter delay={30} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Shield size={30} color={C.sage} style={{flexShrink: 0}} />
          <LabelBlock color={C.sage} size={28}>保障诉讼权利</LabelBlock>
        </Enter>
        <Enter delay={42} style={{display: 'flex', justifyContent: 'center', padding: '6px 0'}}>
          <SoftHi tone="sage" style={{fontSize: 27}}>核心 ＝ 辩护权盾牌</SoftHi>
        </Enter>
        <Enter delay={54}><Chip tone="panel" style={{fontSize: 22}}>宪法＋刑诉法「尊重保障人权」具体化</Chip></Enter>
        <Enter delay={66}><Chip tone="panel" style={{fontSize: 22}}>享权利 · 同时担诉讼义务</Chip></Enter>
        <div style={{marginTop: 4, border: `2px dashed ${C.panelLine}`, borderRadius: 10, padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 9}}>
          <Enter delay={80}><Neg size={22}>公诉被害人：无起诉权 · 无上诉权</Neg></Enter>
          <Enter delay={92} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <Chip tone="sage" style={{fontSize: 22}}>自诉人</Chip>
            <span style={{fontSize: 22, fontWeight: 800, color: C.chalk}}>起诉权 · 上诉权完整</span>
          </Enter>
        </div>
        <div style={{flex: 1}} />
        <Enter delay={106} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.sage} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.chalkDim}}>2016-2-65 · ABC</span>
        </Enter>
      </div>
      <div data-final-knowledge="pillar-exclusive-conviction" style={{position: 'absolute', left: 1200, top: 0, width: 576, height: 556, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 13}}>
        <Enter delay={54} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Gavel size={30} color={C.sky} style={{flexShrink: 0}} />
          <LabelBlock color={C.sky} size={28}>法院专属定罪权</LabelBlock>
        </Enter>
        <Enter delay={66} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <SoftHi tone="sky" style={{fontSize: 25}}>只有法院能定罪</SoftHi>
          <span style={{fontSize: 22, fontWeight: 850, color: C.chalk}}>控方担证明责任</span>
        </Enter>
        <div style={{marginTop: 4, border: `2px dashed ${C.panelLine}`, borderRadius: 10, padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 10}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <Chip tone="sky" style={{fontSize: 22}}>犯罪嫌疑人</Chip>
            <Dash delay={86} style={{width: 40, borderTop: `3px dashed ${C.panelLine}`}} />
            <Chip tone="sanguine" style={{fontSize: 22}}>被告人</Chip>
            <span style={{fontSize: 22, fontWeight: 750, color: C.chalkDim}}><ThinU color={C.chalkDim}>以提起公诉为界</ThinU></span>
          </div>
          <Enter delay={90} style={{display: 'flex', alignItems: 'center', gap: 8, marginLeft: 4}}>
            <span style={{fontSize: 22, fontWeight: 800, color: C.chalkDim}}>立案</span>
            <Dash delay={96} style={{width: 30, borderTop: `3px solid ${C.panelLine}`}} />
            <span style={{fontSize: 22, fontWeight: 800, color: C.chalkDim}}>侦查</span>
            <Dash delay={102} style={{width: 30, borderTop: `3px solid ${C.panelLine}`}} />
            <span style={{fontSize: 22, fontWeight: 800, color: C.chalkDim}}>提起公诉</span>
            <Dash delay={108} style={{width: 30, borderTop: `3px solid ${C.panelLine}`}} />
            <span style={{fontSize: 22, fontWeight: 800, color: C.chalkDim}}>审判 · 生效裁判</span>
          </Enter>
          <Enter delay={98}><Neg size={22}>缄默 ≠ 可以推定有罪</Neg></Enter>
          <Enter delay={108}><Neg size={22}>证据「只能」来源于嫌犯/被告＝片面</Neg></Enter>
          <Enter delay={118}><Chip tone="panel" style={{fontSize: 22}}>来源多样：证人 · 被害人 · 鉴定 · 电子数据</Chip></Enter>
        </div>
        <div style={{flex: 1}} />
        <Enter delay={128} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.sky} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.chalkDim}}>2025金题-1-5-2 · ABD</span>
        </Enter>
      </div>
      <div data-final-knowledge="pillars-verdict-strip" style={{position: 'absolute', left: 0, right: 0, top: 580, height: 164, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '14px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 14}}>
        <Enter delay={160} style={{display: 'flex', alignItems: 'center', gap: 16}}>
          <LabelBlock size={26}>一句话定案</LabelBlock>
          <Chip tone="butter" style={{fontSize: 23}}>程序法定＝立法＋司法</Chip>
          <Chip tone="sage" style={{fontSize: 23}}>权利核心＝辩护权</Chip>
          <Chip tone="sky" style={{fontSize: 23}}>定罪权专属法院</Chip>
        </Enter>
        <Enter delay={180} style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Neg size={22}>绝对化词（只能 / 不实行 / 均应）多为错误选项</Neg>
          <span style={{flex: 1}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.chalkDim}}>逐字读题，再对号入柱</span>
        </Enter>
      </div>
    </div>
  </Shell>
);

export const SupervisionLeniencyScene = () => (
  <Shell code="02" title="监督有边界，从宽有闸门">
    <div data-layout="supervision-leniency-board" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="boundary-gate-rows,condition-action-pairs" data-focal-rule="prosecutorial-supervision-watches-without-replacing-and-leniency-requires-voluntary-guilt-admission-while-proof-standard-never-drops" data-focal-channels="icon,connector,contrast,annotation" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', left: 30, bottom: 16, opacity: 0.08, pointerEvents: 'none'}}><PenLine size={230} color={C.chalk} strokeWidth={1.1} /></div>
      <div data-final-knowledge="supervision-boundary-column" style={{position: 'absolute', left: 0, top: 0, width: 660, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Eye size={30} color={C.butter} style={{flexShrink: 0}} />
          <LabelBlock color={C.butter} size={28}>法律监督</LabelBlock>
          <span style={{flex: 1}} />
          <Chip tone="panel" style={{fontSize: 22}}>贯穿诉讼全程</Chip>
        </Enter>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={24}><span style={{fontSize: 24, fontWeight: 900, color: C.chalk}}>提前介入侦查</span></Enter>
          <Enter delay={34} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Stamp delay={40} tone="sage">是监督</Stamp>
            <Neg size={22}>不是代替侦查</Neg>
            <ThinU color={C.butter}>介而不代</ThinU>
          </Enter>
          <Enter delay={50} style={{fontSize: 22, fontWeight: 750, color: C.chalkDim}}>不侵犯公安机关的侦查权</Enter>
        </div>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={62}><span style={{fontSize: 24, fontWeight: 900, color: C.chalk}}>庭审监督</span></Enter>
          <Enter delay={72} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Chip tone="sage" style={{fontSize: 22}}>庭后提出纠正</Chip>
            <Neg size={22}>公诉人不能当庭纠正</Neg>
          </Enter>
          <Enter delay={86} style={{fontSize: 22, fontWeight: 750, color: C.chalkDim}}>批捕与否，只看逮捕条件</Enter>
        </div>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={98}><span style={{fontSize: 24, fontWeight: 900, color: C.chalk}}>立案监督 · 侦查指导</span></Enter>
          <Enter delay={108}><Chip tone="panel" style={{fontSize: 22}}>均属监督范畴，AB 正确</Chip></Enter>
          <Enter delay={120} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <GraduationCap size={24} color={C.butter} style={{flexShrink: 0}} />
            <span style={{fontSize: 22, fontWeight: 800, color: C.chalkDim}}>2016-2017年题</span>
          </Enter>
        </div>
      </div>
      <div style={{position: 'absolute', left: 684, top: 0, width: 1092, height: 744, display: 'flex', flexDirection: 'column', gap: 14}}>
        <div data-final-knowledge="leniency-condition-gate" style={{backgroundColor: C.panel, border: `3px solid ${C.sage}`, borderRadius: 14, padding: '14px 20px'}}>
          <Enter delay={130} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <PenLine size={30} color={C.sage} style={{flexShrink: 0}} />
            <LabelBlock color={C.sage} size={28}>认罪认罚从宽</LabelBlock>
            <span style={{flex: 1}} />
            <Chip tone="butter" style={{fontSize: 22}}>刑事诉讼基本原则</Chip>
          </Enter>
          <Enter delay={146} style={{marginTop: 12, display: 'flex', alignItems: 'center', gap: 12}}>
            <Chip tone="sage" style={{fontSize: 23}}>自愿</Chip>
            <span style={{fontSize: 25, fontWeight: 950, color: C.chalk}}>＋</span>
            <Chip tone="sage" style={{fontSize: 23}}>真诚悔罪</Chip>
            <Dash delay={156} style={{width: 48, borderTop: `4px solid ${C.sage}`}} />
            <SoftHi tone="butter" style={{fontSize: 25}}>方可从宽</SoftHi>
            <span style={{flex: 1}} />
            <Neg size={22}>不自愿＝不得适用</Neg>
          </Enter>
        </div>
        <div data-final-knowledge="leniency-rule-cards" style={{flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14}}>
          <Enter delay={168} style={{backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 12, padding: '12px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <TrendingDown size={26} color={C.sanguine} style={{flexShrink: 0}} />
              <LabelBlock color={C.sanguine} size={24}>从宽幅度</LabelBlock>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Stamp delay={180} tone="sanguine">可以从宽</Stamp>
              <Neg size={22}>不是「应当」从宽</Neg>
            </div>
          </Enter>
          <Enter delay={186} style={{backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 12, padding: '12px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
            <LabelBlock color={C.butter} size={24}>适用阶段</LabelBlock>
            <div style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <span style={{fontSize: 22, fontWeight: 850, color: C.chalk}}><ThinU color={C.butter}>关键看审判阶段</ThinU>是否认罪认罚</span>
              <Neg size={22}>审判阶段不认＝不得适用</Neg>
            </div>
          </Enter>
          <Enter delay={204} style={{backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 12, padding: '12px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <Scale size={26} color={C.sky} style={{flexShrink: 0}} />
              <LabelBlock color={C.sky} size={24}>证明标准</LabelBlock>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Chip tone="sky" style={{fontSize: 22}}>程序可从简</Chip>
              <Neg size={22}>证明标准不降低</Neg>
            </div>
          </Enter>
          <Enter delay={222} style={{backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 12, padding: '12px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
            <LabelBlock size={24}>定罪独立</LabelBlock>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
              <Chip tone="panel" style={{fontSize: 22}}>定罪仍须依证据</Chip>
              <Neg size={22}>与无罪推定无关</Neg>
            </div>
          </Enter>
        </div>
        <div data-final-knowledge="leniency-exam-strip" style={{backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 12, padding: '12px 18px', display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={240} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={26} color={C.sage} style={{flexShrink: 0}} />
            <span style={{fontSize: 22, fontWeight: 800, color: C.chalkDim}}>2019-2021年题 · 八题浓缩</span>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={250}><Chip tone="panel" style={{fontSize: 22}}>值班律师派驻 ≠ 公检法分工</Chip></Enter>
          <Enter delay={260}><Chip tone="panel" style={{fontSize: 22}}>体现独立价值 · 地位提升</Chip></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const StatuteBarBorderNotesScene = () => (
  <Shell code="03" title="第16条的边界与涉外的四条规矩">
    <div data-layout="statute-bar-border-notes" data-visual-anchor="boundary" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="statute-bar-fork,rule-note-stack" data-focal-rule="statutory-non-prosecution-bar-is-a-closed-list-and-foreign-procedure-follows-counsel-translation-and-document-rules" data-focal-channels="icon,enclosure,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', right: 30, bottom: 16, opacity: 0.08, pointerEvents: 'none'}}><Ban size={230} color={C.chalk} strokeWidth={1.1} /></div>
      <div data-final-knowledge="statute-bar-column" style={{position: 'absolute', left: 0, top: 0, width: 900, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Ban size={30} color={C.sanguine} style={{flexShrink: 0}} />
            <LabelBlock color={C.sanguine} size={28}>法定情形不追责（第16条）</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={18} style={{fontSize: 22, fontWeight: 800, color: C.chalkDim}}>「是坏人，但法律算了」</Enter>
        </div>
        <div style={{display: 'flex', gap: 14}}>
          <Enter delay={32} style={{flex: 1.25, border: `3px solid ${C.sage}`, borderRadius: 10, padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <LabelBlock color={C.sage} size={24}>条内 · 法定情形</LabelBlock>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 8}}>
              <Chip tone="sage" style={{fontSize: 22}}>情节显著轻微 · 危害不大</Chip>
              <Chip tone="sage" style={{fontSize: 22}}>时效届满</Chip>
              <Chip tone="sage" style={{fontSize: 22}}>特赦</Chip>
              <Chip tone="sage" style={{fontSize: 22}}>嫌疑人 · 被告人死亡</Chip>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap'}}>
              <Chip tone="panel" style={{fontSize: 22}}>撤案</Chip>
              <Chip tone="panel" style={{fontSize: 22}}>不起诉</Chip>
              <Chip tone="panel" style={{fontSize: 22}}>终止审理</Chip>
              <Chip tone="panel" style={{fontSize: 22}}>宣告无罪</Chip>
            </div>
          </Enter>
          <Enter delay={52} style={{flex: 1, border: `3px dashed ${C.sanguine}`, borderRadius: 10, padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 9, justifyContent: 'center'}}>
            <Neg size={22}>不含：酌定不起诉</Neg>
            <Neg size={22}>不含：存疑不起诉</Neg>
            <Neg size={22}>不含：依法判无罪</Neg>
          </Enter>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={72} style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '11px 16px', display: 'flex', alignItems: 'center', gap: 12}}>
            <Chip tone="butter" style={{fontSize: 22}}>公诉中发现系纯自诉</Chip>
            <span style={{fontSize: 22, fontWeight: 800, color: C.chalk}}>且未告诉</span>
            <Dash delay={84} style={{width: 44, borderTop: `4px solid ${C.butter}`}} />
            <Chip tone="sage" style={{fontSize: 22}}>裁定终止审理</Chip>
          </Enter>
          <Enter delay={96} style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '11px 16px', display: 'flex', alignItems: 'center', gap: 12}}>
            <Chip tone="butter" style={{fontSize: 22}}>意外事件 · 无犯罪事实</Chip>
            <Dash delay={106} style={{width: 44, borderTop: `4px solid ${C.butter}`}} />
            <Chip tone="sage" style={{fontSize: 22}}>撤销案件</Chip>
            <Neg size={22}>与第16条无关</Neg>
          </Enter>
          <Enter delay={118} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <GraduationCap size={24} color={C.sanguine} style={{flexShrink: 0}} />
            <span style={{fontSize: 22, fontWeight: 800, color: C.chalkDim}}>2021-2022年题 · 情形对号入座</span>
          </Enter>
        </div>
      </div>
      <div data-final-knowledge="extraterritorial-rule-stack" style={{position: 'absolute', left: 924, top: 0, width: 852, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Globe size={30} color={C.sky} style={{flexShrink: 0}} />
            <LabelBlock color={C.sky} size={28}>涉外刑事诉讼</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={50}><Chip tone="panel" style={{fontSize: 22}}>四条通行规矩</Chip></Enter>
        </div>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '11px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={64} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Shield size={24} color={C.sky} style={{flexShrink: 0}} />
            <span style={{fontSize: 23, fontWeight: 900, color: C.chalk, width: 76}}>辩护人</span>
            <Chip tone="sky" style={{fontSize: 22}}>只能委托中国执业律师</Chip>
          </Enter>
          <Enter delay={76} style={{fontSize: 22, fontWeight: 750, color: C.chalkDim, marginLeft: 36}}>外籍近亲属可辩护 · 会见向高院申请</Enter>
        </div>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '11px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={88} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Languages size={24} color={C.sky} style={{flexShrink: 0}} />
            <span style={{fontSize: 23, fontWeight: 900, color: C.chalk, width: 76}}>语言</span>
            <Chip tone="sky" style={{fontSize: 22}}>应当提供翻译</Chip>
            <Neg size={22}>无翻译的供述可排除</Neg>
          </Enter>
          <Enter delay={100} style={{display: 'flex', alignItems: 'center', gap: 12, marginLeft: 36}}>
            <span style={{fontSize: 23, fontWeight: 900, color: C.chalk, width: 76}}>文书</span>
            <Chip tone="panel" style={{fontSize: 22}}>使用中文文本</Chip>
            <Chip tone="panel" style={{fontSize: 22}}>译本不加盖公章</Chip>
          </Enter>
        </div>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '11px 16px', display: 'flex', alignItems: 'center', gap: 12}}>
          <Enter delay={112} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Gavel size={24} color={C.sky} style={{flexShrink: 0}} />
            <span style={{fontSize: 23, fontWeight: 900, color: C.chalk, width: 76}}>外国判决</span>
            <Chip tone="panel" style={{fontSize: 22}}><ThinU color={C.butter}>无既判力</ThinU></Chip>
            <Neg size={22}>认定事实不得直接作证据</Neg>
          </Enter>
        </div>
        <Enter delay={126} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.sky} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.chalkDim}}>2023-2025年题 · 规矩逐条对号</span>
        </Enter>
      </div>
    </div>
  </Shell>
);

export const PrinciplesChalkboardHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-principle-pillars" {...SCENES.principlePillars}><PrinciplePillarsScene /></TimelineSequence>
    <TimelineSequence name="02-supervision-leniency-board" {...SCENES.supervisionLeniencyBoard}><SupervisionLeniencyScene /></TimelineSequence>
    <TimelineSequence name="03-statute-bar-border-notes" {...SCENES.statuteBarBorderNotes}><StatuteBarBorderNotesScene /></TimelineSequence>
  </AbsoluteFill>
);
