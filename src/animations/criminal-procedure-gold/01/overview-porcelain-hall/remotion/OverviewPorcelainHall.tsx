import {AbsoluteFill} from 'remotion';
import {Coins, DraftingCompass, Eye, Feather, Gavel, Gauge, GraduationCap, Landmark, Megaphone, Scale, Shield, Unlink, UserCheck, Wrench} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp, ThinU} from './theme';

export const TwinValueScene = () => (
  <Shell code="01" title="程序对实体：一把工具，也是一缕独立的光">
    <div data-layout="twin-vase-value-screen" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="twin-vase-contrast,example-chip-flow" data-focal-rule="procedural-institutions-carry-both-instrumental-value-helping-substantive-law-and-independent-value-of-procedural-justice-itself" data-focal-channels="icon,contrast,connector,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="value-twin-rule" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 104, backgroundColor: C.paper, border: `3px solid ${C.cobalt}`, borderRadius: 14, padding: '12px 24px', boxShadow: `0 8px 22px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Wrench size={32} color={C.cobalt} style={{flexShrink: 0}} />
          <LabelBlock size={30}>程序对实体</LabelBlock>
          <span style={{fontSize: 28, fontWeight: 900, color: C.ink}}>＝</span>
          <SoftHi tone="cobalt" style={{fontSize: 26}}>工具价值</SoftHi>
          <span style={{fontSize: 28, fontWeight: 900, color: C.ink}}>＋</span>
          <SoftHi tone="celadon" style={{fontSize: 26}}>独立价值</SoftHi>
          <span style={{flex: 1}} />
          <Stamp delay={20} tone="seal">同一制度可兼具</Stamp>
        </Enter>
        <Enter delay={26} style={{marginTop: 8, fontSize: 22, fontWeight: 800, color: C.mist}}>判断先行：先问该行为是不是「程序制度」——是，才有价值归属可谈</Enter>
      </div>
      <div data-final-knowledge="value-tool-vase" style={{position: 'absolute', left: 0, top: 128, width: 866, height: 356, backgroundColor: C.paper, border: `3px solid ${C.cobalt}`, borderRadius: 16, padding: '16px 22px', boxShadow: `0 8px 22px ${C.shadow}`}}>
        <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Wrench size={30} color={C.cobalt} style={{flexShrink: 0}} />
          <LabelBlock size={28}>工具价值 · 帮助刑法实现</LabelBlock>
          <span style={{flex: 1}} />
          <Chip tone="panel" style={{fontSize: 22}}>程序保障实体落地</Chip>
        </Enter>
        <Enter delay={58} style={{marginTop: 18, display: 'flex', alignItems: 'center', gap: 12}}>
          <Chip tone="cobalt" style={{fontSize: 23}}>核准追诉</Chip>
          <Dash delay={68} style={{width: 56, borderTop: `4px solid ${C.cobalt}`}} />
          <span style={{fontSize: 23, fontWeight: 800, color: C.ink}}>程序启动使<ThinU>超过 20 年仍可追诉</ThinU></span>
        </Enter>
        <Enter delay={82} style={{marginTop: 14, display: 'flex', alignItems: 'center', gap: 12}}>
          <Chip tone="cobalt" style={{fontSize: 23}}>证明标准</Chip>
          <Dash delay={92} style={{width: 56, borderTop: `4px solid ${C.cobalt}`}} />
          <span style={{fontSize: 23, fontWeight: 800, color: C.ink}}>「事实清楚、证据确实充分」服务定罪量刑</span>
        </Enter>
        <Enter delay={106} style={{marginTop: 18, display: 'flex', alignItems: 'center', gap: 14}}>
          <ThinU color={C.cobalt}>看程序是否推动实体之实现</ThinU>
          <Chip tone="panel" style={{fontSize: 22}}>工具价值＝保障刑法实施</Chip>
        </Enter>
      </div>
      <div data-final-knowledge="value-independent-vase" style={{position: 'absolute', left: 890, top: 128, width: 886, height: 356, backgroundColor: C.paper, border: `3px solid ${C.celadon}`, borderRadius: 16, padding: '16px 22px', boxShadow: `0 8px 22px ${C.shadow}`}}>
        <Enter delay={116} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Feather size={30} color={C.celadon} style={{flexShrink: 0}} />
          <LabelBlock color={C.celadon} size={28}>独立价值 · 程序正义本身</LabelBlock>
          <span style={{flex: 1}} />
          <Chip tone="panel" style={{fontSize: 22}}>不依附裁判结果</Chip>
        </Enter>
        <Enter delay={132} style={{marginTop: 18, display: 'flex', alignItems: 'center', gap: 12}}>
          <Chip tone="celadon" style={{fontSize: 23}}>未成年人特别程序</Chip>
          <Dash delay={142} style={{width: 56, borderTop: `4px solid ${C.celadon}`}} />
          <span style={{fontSize: 23, fontWeight: 800, color: C.ink}}>程序设置本身即<ThinU color={C.celadon}>特殊保护</ThinU></span>
        </Enter>
        <Enter delay={154} style={{marginTop: 14, display: 'flex', alignItems: 'center', gap: 12}}>
          <Chip tone="celadon" style={{fontSize: 23}}>和解 · 撤诉</Chip>
          <Dash delay={164} style={{width: 56, borderTop: `4px solid ${C.celadon}`}} />
          <span style={{fontSize: 23, fontWeight: 800, color: C.ink}}>程序行为直接<ThinU color={C.celadon}>影响量刑处理</ThinU></span>
        </Enter>
        <Enter delay={178} style={{marginTop: 18, display: 'flex', alignItems: 'center', gap: 14}}>
          <ThinU color={C.celadon}>看程序自身是否承载正义</ThinU>
          <Chip tone="panel" style={{fontSize: 22}}>独立价值＝程序自尊</Chip>
        </Enter>
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 508, height: 236, backgroundColor: C.cobaltDeep, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div data-final-knowledge="value-verdict-desk" style={{flex: 1}}>
          <Enter delay={190} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.gilt} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: '#F4F8FB'}}>真题 · 检察院排非体现什么价值？（2022）</span>
          </Enter>
          <Enter delay={206} style={{marginTop: 16, display: 'flex', alignItems: 'center', gap: 14}}>
            <Chip tone="panel" style={{fontSize: 23}}><Feather size={22} color={C.celadon} style={{flexShrink: 0}} />A 独立价值</Chip>
            <Chip tone="panel" style={{fontSize: 23}}><Wrench size={22} color={C.cobalt} style={{flexShrink: 0}} />B 工具价值</Chip>
            <Stamp delay={220} tone="celadon">AB 兼选</Stamp>
          </Enter>
          <Enter delay={228} style={{marginTop: 14, fontSize: 22, fontWeight: 750, color: 'rgba(244,248,251,0.78)'}}>同一「排除非法证据」制度：既查清事实，也保障程序正义——两头都算数</Enter>
        </div>
        <div data-final-knowledge="value-standard-note" style={{width: 600, borderLeft: '3px dashed rgba(244,248,251,0.35)', paddingLeft: 24, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12}}>
          <Enter delay={206} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <LabelBlock color={C.gilt} light size={24}>判断标准</LabelBlock>
            <Chip tone="panel" style={{fontSize: 22}}>程序制度</Chip>
            <span style={{fontSize: 24, fontWeight: 900, color: '#F4F8FB'}}>→ 两价值皆可评</span>
          </Enter>
          <Enter delay={222}><Neg light size={23}>实体制度（如追诉期限）不参与价值评价</Neg></Enter>
          <Enter delay={234} style={{fontSize: 22, fontWeight: 750, color: 'rgba(244,248,251,0.78)'}}>追问「效率价值」不是价值类型答案——排除</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const ValueTriadScene = () => (
  <Shell code="02" title="理念与价值：公正居核心，效率看提速省资源">
    <div data-layout="porcelain-triad-cabinet" data-visual-anchor="concept-icon" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="concept-cabinet-set,verdict-lane-contrast" data-focal-rule="justice-sits-at-the-core-of-the-three-values-and-efficiency-means-speeding-up-and-saving-resources-not-every-simplified-procedure" data-focal-channels="icon,contrast,annotation,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="triad-cabinet-head" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 96, backgroundColor: C.paper, border: `3px solid ${C.gilt}`, borderRadius: 14, padding: '12px 24px', display: 'flex', alignItems: 'center', gap: 14, boxShadow: `0 8px 22px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Scale size={32} color={C.gilt} style={{flexShrink: 0}} />
          <LabelBlock size={30}>三大价值</LabelBlock>
          <Chip tone="cobalt" style={{fontSize: 23}}><Landmark size={22} style={{flexShrink: 0}} />秩序</Chip>
          <Chip tone="cobalt" style={{fontSize: 23}}><Scale size={22} style={{flexShrink: 0}} />公正</Chip>
          <Chip tone="cobalt" style={{fontSize: 23}}><Coins size={22} style={{flexShrink: 0}} />效益</Chip>
          <Stamp delay={18} tone="seal">公正居核心</Stamp>
          <span style={{fontSize: 23, fontWeight: 800, color: C.ink}}>强制措施遵循<SoftHi tone="gilt" style={{fontSize: 22}}>比例原则</SoftHi>属公正</span>
        </Enter>
      </div>
      <div data-final-knowledge="triad-order-cell" style={{position: 'absolute', left: 0, top: 120, width: 576, height: 188, backgroundColor: C.paper, border: `3px solid ${C.cobalt}`, borderRadius: 14, padding: '14px 20px', boxShadow: `0 6px 18px ${C.shadow}`}}>
        <Enter delay={34} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Landmark size={28} color={C.cobalt} style={{flexShrink: 0}} />
          <LabelBlock size={26}>秩序</LabelBlock>
        </Enter>
        <Enter delay={48} style={{marginTop: 14}}><Chip tone="panel" style={{fontSize: 23}}>规范国家刑事司法权的行使</Chip></Enter>
        <Enter delay={60} style={{marginTop: 12, fontSize: 22, fontWeight: 750, color: C.mist}}>2015-2-22 B 项 · 表述正确</Enter>
      </div>
      <div data-final-knowledge="triad-justice-cell" style={{position: 'absolute', left: 600, top: 120, width: 576, height: 188, backgroundColor: C.paper, border: `3px solid ${C.gilt}`, borderRadius: 14, padding: '14px 20px', boxShadow: `0 6px 18px ${C.shadow}`}}>
        <Enter delay={48} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Scale size={28} color={C.gilt} style={{flexShrink: 0}} />
          <LabelBlock color={C.gilt} size={26}>公正</LabelBlock>
          <Stamp delay={60} tone="gilt">核心地位</Stamp>
        </Enter>
        <Enter delay={62} style={{marginTop: 14}}><Chip tone="panel" style={{fontSize: 23}}>公正在刑事诉讼价值中居于核心</Chip></Enter>
        <Enter delay={74} style={{marginTop: 12, fontSize: 22, fontWeight: 750, color: C.mist}}>2015-2-22 A、D 项 · 表述正确</Enter>
      </div>
      <div data-final-knowledge="triad-benefit-cell" style={{position: 'absolute', left: 1200, top: 120, width: 576, height: 188, backgroundColor: C.paper, border: `3px solid ${C.seal}`, borderRadius: 14, padding: '14px 20px', boxShadow: `0 6px 18px ${C.shadow}`}}>
        <Enter delay={62} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Coins size={28} color={C.seal} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={26}>效益</LabelBlock>
        </Enter>
        <Enter delay={76} style={{marginTop: 14, display: 'flex', alignItems: 'center', gap: 10}}>
          <Wrench size={22} color={C.cobalt} style={{flexShrink: 0}} />
          <Feather size={22} color={C.celadon} style={{flexShrink: 0}} />
          <span style={{fontSize: 23, fontWeight: 850, color: C.ink}}>兼具工具与独立两重价值</span>
        </Enter>
        <Enter delay={90} style={{marginTop: 12}}><Neg size={22}>说「效益仅属工具价值」即错误</Neg></Enter>
      </div>
      <div data-final-knowledge="triad-efficiency-lane" style={{position: 'absolute', left: 0, right: 0, top: 332, height: 240, backgroundColor: C.wash, border: `3px solid ${C.washLine}`, borderRadius: 14, padding: '14px 22px'}}>
        <Enter delay={104} style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Gauge size={30} color={C.cobalt} style={{flexShrink: 0}} />
          <LabelBlock size={28}>效率理念</LabelBlock>
          <ThinU>提速 · 省资源</ThinU>
          <span style={{flex: 1}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.mist}}>2019金题 · BC 当选</span>
        </Enter>
        <div style={{marginTop: 12, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12}}>
          <Enter delay={122} style={{backgroundColor: C.celadonSoft, borderLeft: `6px solid ${C.celadon}`, borderRadius: 10, padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 12}}>
            <Chip tone="celadon" style={{fontSize: 22}}>✓ 不逮捕直接起诉</Chip>
            <span style={{fontSize: 22, fontWeight: 750, color: C.ink}}>省去审查批捕环节</span>
          </Enter>
          <Enter delay={134} style={{backgroundColor: C.celadonSoft, borderLeft: `6px solid ${C.celadon}`, borderRadius: 10, padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 12}}>
            <Chip tone="celadon" style={{fontSize: 22}}>✓ 庭前核实证人身份</Chip>
            <span style={{fontSize: 22, fontWeight: 750, color: C.ink}}>省庭审质证时间</span>
          </Enter>
          <Enter delay={146} style={{backgroundColor: C.sealSoft, borderLeft: `6px solid ${C.seal}`, borderRadius: 10, padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 12}}>
            <Neg size={22}>附条件不起诉</Neg>
            <span style={{fontSize: 22, fontWeight: 750, color: C.ink}}>考验观察 · 降低效率</span>
          </Enter>
          <Enter delay={158} style={{backgroundColor: C.sealSoft, borderLeft: `6px solid ${C.seal}`, borderRadius: 10, padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 12}}>
            <Neg size={22}>宣判前重开量刑辩论</Neg>
            <span style={{fontSize: 22, fontWeight: 750, color: C.ink}}>为公正牺牲效率</span>
          </Enter>
        </div>
      </div>
      <div data-final-knowledge="triad-openness-verdict" style={{position: 'absolute', left: 0, right: 0, top: 596, height: 148, backgroundColor: C.cobaltDeep, borderRadius: 14, padding: '16px 24px', display: 'flex', alignItems: 'center', gap: 28}}>
        <Enter delay={180} style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Eye size={30} color={C.gilt} style={{flexShrink: 0}} />
          <span style={{fontSize: 25, fontWeight: 900, color: '#F4F8FB'}}>程序公开透明＝<ThinU color="#F4F8FB">监督前提</ThinU></span>
          <Stamp delay={196} tone="celadon">B 正确</Stamp>
        </Enter>
        <span style={{flex: 1}} />
        <Enter delay={210} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <span style={{fontSize: 22, fontWeight: 800, color: 'rgba(244,248,251,0.82)'}}>绝对化词</span>
          <Chip tone="panel" style={{fontSize: 22}}>只要</Chip>
          <Chip tone="panel" style={{fontSize: 22}}>均应</Chip>
          <Chip tone="panel" style={{fontSize: 22}}>会限制</Chip>
          <span style={{fontSize: 22, fontWeight: 800, color: 'rgba(244,248,251,0.82)'}}>多为错误选项</span>
        </Enter>
      </div>
    </div>
  </Shell>
);

export const FunctionStructureScene = () => (
  <Shell code="03" title="职能三分与控辩式构造：三方只在审判">
    <div data-layout="function-structure-stage-hall" data-visual-anchor="role-pair" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="role-assignment-stage,chain-progression,separation-map" data-focal-rule="three-functions-belong-to-their-roles-and-a-complete-three-party-structure-exists-only-at-trial-while-prosecution-and-adjudication-stay-separated" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="function-triad-stage" style={{position: 'absolute', left: 0, top: 0, width: 900, height: 744, backgroundColor: C.paper, border: `3px solid ${C.cobalt}`, borderRadius: 16, padding: '18px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: `0 8px 22px ${C.shadow}`}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Gavel size={30} color={C.cobalt} style={{flexShrink: 0}} />
            <LabelBlock size={30}>三大诉讼职能</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={16}><Chip tone="panel" style={{fontSize: 22}}>角色不同 · 目的不同 · 职能不同</Chip></Enter>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 14}}>
          <Enter delay={30} style={{backgroundColor: C.wash, borderRadius: 10, padding: '12px 16px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Megaphone size={28} color={C.seal} style={{flexShrink: 0}} />
              <LabelBlock color={C.seal} size={26}>控诉</LabelBlock>
              <Chip tone="paper" style={{fontSize: 22, border: `2px solid ${C.washLine}`}}>检察院 · 公诉</Chip>
              <Chip tone="paper" style={{fontSize: 22, border: `2px solid ${C.washLine}`}}>被害人 · 辅助控诉</Chip>
              <Chip tone="paper" style={{fontSize: 22, border: `2px solid ${C.washLine}`}}>自诉人 · 独立控诉</Chip>
            </div>
            <div style={{marginTop: 8, marginLeft: 40, fontSize: 22, fontWeight: 750, color: C.mist}}>公诉与自诉中，控诉职能的承担者不同</div>
          </Enter>
          <Enter delay={52} style={{backgroundColor: C.wash, borderRadius: 10, padding: '12px 16px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Shield size={28} color={C.celadon} style={{flexShrink: 0}} />
              <LabelBlock color={C.celadon} size={26}>辩护</LabelBlock>
              <Chip tone="paper" style={{fontSize: 22, border: `2px solid ${C.washLine}`}}>被告人</Chip>
              <Chip tone="paper" style={{fontSize: 22, border: `2px solid ${C.washLine}`}}>辩护人</Chip>
              <span style={{fontSize: 22, fontWeight: 800, color: C.ink}}>认罪案件仍有<ThinU color={C.celadon}>量刑对抗</ThinU></span>
            </div>
            <div style={{marginTop: 8, marginLeft: 40, fontSize: 22, fontWeight: 750, color: C.mist}}>辩护职能由被追诉方行使</div>
          </Enter>
          <Enter delay={74} style={{backgroundColor: C.wash, borderRadius: 10, padding: '12px 16px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Gavel size={28} color={C.cobalt} style={{flexShrink: 0}} />
              <LabelBlock size={26}>审判</LabelBlock>
              <Chip tone="paper" style={{fontSize: 22, border: `2px solid ${C.washLine}`}}>法院 · 居中裁断</Chip>
              <span style={{fontSize: 22, fontWeight: 800, color: C.ink}}>证据经<ThinU>法庭质证</ThinU>方可用作定案根据</span>
            </div>
            <div style={{marginTop: 8, marginLeft: 40, fontSize: 22, fontWeight: 750, color: C.mist}}>审判职能专属法院</div>
          </Enter>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={96} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Eye size={24} color={C.gilt} style={{flexShrink: 0}} />
            <Neg size={23}>排非＝法律监督，不是控诉职能</Neg>
          </Enter>
          <Enter delay={108} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <UserCheck size={24} color={C.celadon} style={{flexShrink: 0}} />
            <Neg size={23}>证人＝客观陈述，无控辩审职能</Neg>
          </Enter>
          <Enter delay={120} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Megaphone size={24} color={C.seal} style={{flexShrink: 0}} />
            <span style={{fontSize: 23, fontWeight: 850, color: C.ink}}>检察院提出有利量刑证据，<SoftHi tone="cobalt" style={{fontSize: 22}}>仍是控诉职能</SoftHi></span>
          </Enter>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={136} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={26} color={C.gilt} style={{flexShrink: 0}} />
            <span style={{fontSize: 22, fontWeight: 800, color: C.mist}}>2019金题-1-5-2 · AD 正确</span>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={146}><Chip tone="cobalt" style={{fontSize: 22}}>排非=监督 · 证人=中立 · 检院=控诉</Chip></Enter>
        </div>
      </div>
      <div data-final-knowledge="structure-chain-ladder" style={{position: 'absolute', left: 924, top: 0, width: 852, height: 272, backgroundColor: C.wash, border: `3px solid ${C.washLine}`, borderRadius: 14, padding: '14px 20px'}}>
        <Enter delay={130} style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <DraftingCompass size={28} color={C.cobalt} style={{flexShrink: 0}} />
          <LabelBlock size={26}>构造从何而来</LabelBlock>
          <span style={{flex: 1}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.mist}}>逐级决定 · 不跨级</span>
        </Enter>
        <Enter delay={144} style={{marginTop: 12, display: 'flex', alignItems: 'center', gap: 10}}>
          <Chip tone="cobalt" style={{fontSize: 23}}>价值</Chip>
          <Dash delay={152} style={{width: 46, borderTop: `4px solid ${C.cobalt}`}} />
          <Chip tone="cobalt" style={{fontSize: 23}}>目的</Chip>
          <Dash delay={160} style={{width: 46, borderTop: `4px solid ${C.cobalt}`}} />
          <Chip tone="cobalt" style={{fontSize: 23}}>构造</Chip>
          <span style={{flex: 1}} />
          <Neg size={20}>「价值直接决定构造」＝跨级即错</Neg>
        </Enter>
        <div style={{marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={172} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Chip tone="paper" style={{fontSize: 22, border: `2px solid ${C.washLine}`}}>职权主义</Chip>
            <Dash delay={180} style={{flex: 1, borderTop: `3px dashed ${C.washLine}`}} />
            <span style={{fontSize: 22, fontWeight: 800, color: C.ink}}>法官主导 · 追求<ThinU>实体真实</ThinU></span>
          </Enter>
          <Enter delay={188} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Chip tone="paper" style={{fontSize: 22, border: `2px solid ${C.washLine}`}}>当事人主义</Chip>
            <Dash delay={196} style={{flex: 1, borderTop: `3px dashed ${C.washLine}`}} />
            <span style={{fontSize: 22, fontWeight: 800, color: C.ink}}>控辩对抗 · 侧重<ThinU>程序保障</ThinU></span>
          </Enter>
          <Enter delay={204} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Chip tone="paper" style={{fontSize: 22, border: `2px solid ${C.washLine}`}}>混合式</Chip>
            <Dash delay={212} style={{flex: 1, borderTop: `3px dashed ${C.washLine}`}} />
            <span style={{fontSize: 22, fontWeight: 800, color: C.ink}}>职权主义吸收当事人主义</span>
            <Neg size={20}>说法反向即错</Neg>
          </Enter>
        </div>
      </div>
      <div data-final-knowledge="structure-separation-map" style={{position: 'absolute', left: 924, top: 296, width: 852, height: 448, backgroundColor: C.cobaltDeep, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={220} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Unlink size={28} color={C.gilt} style={{flexShrink: 0}} />
            <LabelBlock color={C.gilt} light size={26}>控审分离</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={230} style={{fontSize: 22, fontWeight: 800, color: 'rgba(244,248,251,0.82)'}}>三方构造只在审判阶段</Enter>
        </div>
        <div style={{display: 'flex', gap: 16}}>
          <Enter delay={244} style={{flex: 1, backgroundColor: 'rgba(244,248,251,0.08)', border: '2px solid rgba(244,248,251,0.30)', borderRadius: 10, padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <span style={{fontSize: 23, fontWeight: 900, color: '#F4F8FB'}}>侦查</span>
            <Chip tone="panel" style={{fontSize: 22}}>控 · 辩</Chip>
            <Neg light size={22}>无审判方</Neg>
          </Enter>
          <Enter delay={254} style={{flex: 1, backgroundColor: 'rgba(244,248,251,0.08)', border: '2px solid rgba(244,248,251,0.30)', borderRadius: 10, padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <span style={{fontSize: 23, fontWeight: 900, color: '#F4F8FB'}}>审查起诉</span>
            <Chip tone="panel" style={{fontSize: 22}}>控 · 辩</Chip>
            <span style={{fontSize: 22, fontWeight: 750, color: 'rgba(244,248,251,0.78)'}}>只有控辩关系</span>
          </Enter>
          <Enter delay={264} style={{flex: 1.2, backgroundColor: 'rgba(244,248,251,0.12)', border: `3px solid ${C.gilt}`, borderRadius: 10, padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <span style={{fontSize: 23, fontWeight: 900, color: '#F4F8FB'}}>审判</span>
            <Chip tone="panel" style={{fontSize: 22}}>控 · 辩 · 审</Chip>
            <Stamp delay={276} tone="celadon">完整三方</Stamp>
          </Enter>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Enter delay={252} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <LabelBlock color={C.gilt} light size={24}>三表现</LabelBlock>
            <Chip tone="panel" style={{fontSize: 22}}>不告不理</Chip>
            <Chip tone="panel" style={{fontSize: 22}}>独立裁判</Chip>
            <Chip tone="panel" style={{fontSize: 22}}>相互建议</Chip>
          </Enter>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Enter delay={284}><Neg light size={22}>检察院的监督建议（羁押必要性审查 / 减刑纠正）≠ 控审关系</Neg></Enter>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Enter delay={292} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={26} color={C.gilt} style={{flexShrink: 0}} />
            <span style={{fontSize: 22, fontWeight: 800, color: 'rgba(244,248,251,0.82)'}}>2020金题 · BC 正确：法院建议变更罪名 / 独立裁判并决定强制医疗</span>
          </Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const OverviewPorcelainHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-twin-value-screen" {...SCENES.twinValueScreen}><TwinValueScene /></TimelineSequence>
    <TimelineSequence name="02-value-triad-cabinet" {...SCENES.valueTriadCabinet}><ValueTriadScene /></TimelineSequence>
    <TimelineSequence name="03-function-structure-stage" {...SCENES.functionStructureStage}><FunctionStructureScene /></TimelineSequence>
  </AbsoluteFill>
);
