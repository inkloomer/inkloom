import {AbsoluteFill} from 'remotion';
import {BadgeX, BookMarked, FileCheck2, GraduationCap, ListChecks, Megaphone, Split, Target} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp, ThinU} from './theme';

export const SubjectObjectScene = () => (
  <Shell code="01" title="证明三联账：谁记账、记什么、免记什么">
    <div data-layout="subject-object-ledger" data-visual-anchor="concept-icon" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="triple-ledger-cells,exempt-shelf-row" data-focal-rule="proving-subjects-hold-claims-objects-are-facts-needing-proof-and-judged-facts-are-exempt" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', right: 30, bottom: 16, opacity: 0.06, pointerEvents: 'none'}}><Megaphone size={230} color={C.vermilion} strokeWidth={1.1} /></div>
      <div data-final-knowledge="subject-cell" style={{position: 'absolute', left: 0, top: 0, width: 576, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Megaphone size={28} color={C.vermilion} style={{flexShrink: 0}} />
          <LabelBlock color={C.vermilion} size={26}>证明主体</LabelBlock>
        </Enter>
        <div style={{border: `3px solid ${C.vermilion}`, borderRadius: 10, padding: '12px 16px', backgroundColor: 'rgba(193,75,60,0.06)'}}>
          <Enter delay={22} style={{fontSize: 24, fontWeight: 900, color: C.ink }}>带<SoftHi tone="vermilion" style={{fontSize: 23}}>诉讼主张</SoftHi>的刑诉主体</Enter>
          <Enter delay={32} style={{marginTop: 8, fontSize: 22, fontWeight: 750, color: C.mist }}>有主张 → 才有证明的担子</Enter>
        </div>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={46}><Chip tone="vermilion" style={{fontSize: 22}}>公诉人 · 当事人</Chip></Enter>
          <Enter delay={56}><Chip tone="paper" style={{fontSize: 22, border: `2px solid ${C.panelLine}`}}>法院不是证明主体——居中裁断</Chip></Enter>
        </div>
        <Enter delay={70} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.vermilion} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.mist }}>2021年题 · 主体资格单选</span>
        </Enter>
      </div>
      <div data-final-knowledge="object-cell" style={{position: 'absolute', left: 600, top: 0, width: 576, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Target size={28} color={C.jade} style={{flexShrink: 0}} />
          <LabelBlock color={C.jade} size={26}>证明对象</LabelBlock>
        </Enter>
        <div style={{border: `3px solid ${C.jade}`, borderRadius: 10, padding: '12px 16px', backgroundColor: 'rgba(63,127,106,0.06)'}}>
          <Enter delay={56} style={{fontSize: 24, fontWeight: 900, color: C.ink }}>需要证据证明的<SoftHi tone="jade" style={{fontSize: 23}}>待证事实</SoftHi></Enter>
          <Enter delay={66} style={{marginTop: 8, fontSize: 22, fontWeight: 750, color: C.mist }}>实体事实 + 程序事实都在内</Enter>
        </div>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={80}><Chip tone="jade" style={{fontSize: 22}}>犯罪构成要件事实</Chip></Enter>
          <Enter delay={90}><Chip tone="jade" style={{fontSize: 22}}>量刑情节 · 程序合法性</Chip></Enter>
        </div>
        <Enter delay={104} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.jade} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.mist }}>2022年题 · 对象范围多选</span>
        </Enter>
      </div>
      <div data-final-knowledge="exempt-shelf-cell" style={{position: 'absolute', left: 1200, top: 0, width: 576, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Enter delay={80} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <FileCheck2 size={28} color={C.indigoInk} style={{flexShrink: 0}} />
          <LabelBlock color={C.indigoInk} size={26}>免证专架</LabelBlock>
        </Enter>
        <div style={{border: `3px solid ${C.indigoInk}`, borderRadius: 10, padding: '12px 16px', backgroundColor: 'rgba(58,90,120,0.06)'}}>
          <Enter delay={96} style={{fontSize: 24, fontWeight: 900, color: C.ink }}>生效裁判认定的事实</Enter>
          <Enter delay={106} style={{marginTop: 8, fontSize: 22, fontWeight: 800, color: C.ink }}>＝ 免证事实，可直接采用</Enter>
        </div>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={120}><Chip tone="indigo" style={{fontSize: 22}}>无异议的程序事实</Chip></Enter>
          <Enter delay={130}><Chip tone="indigo" style={{fontSize: 22}}>法律法规内容 · 常识</Chip></Enter>
        </div>
        <Enter delay={144} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.indigoInk} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.mist }}>2023年题 · 免证事实判断</span>
        </Enter>
      </div>
    </div>
  </Shell>
);

export const BurdenSplitScene = () => (
  <Shell code="02" title="责任分账：谁主张，谁举证">
    <div data-layout="burden-split-rules" data-visual-anchor="role-pair" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="burden-assignment-ladder,exception-negation-row" data-focal-rule="the-prosecutor-bears-the-burden-in-public-prosecution-and-must-prove-legality-in-exclusion-proceedings" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', left: 30, bottom: 16, opacity: 0.06, pointerEvents: 'none'}}><ListChecks size={230} color={C.vermilion} strokeWidth={1.1} /></div>
      <div data-final-knowledge="burden-ladder-card" style={{position: 'absolute', left: 0, top: 0, width: 900, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <ListChecks size={30} color={C.vermilion} style={{flexShrink: 0}} />
            <LabelBlock size={28}>责任分配阶梯</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={16}><Chip tone="panel" style={{fontSize: 22}}>公诉案件为主轴</Chip></Enter>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={30} style={{border: `3px solid ${C.vermilion}`, borderRadius: 10, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Chip tone="vermilion" style={{fontSize: 22}}>公诉案件 · 证明有罪</Chip>
            <Dash delay={40} style={{width: 40, borderTop: `4px solid ${C.vermilion}`}} />
            <SoftHi tone="vermilion" style={{fontSize: 24 }}>检察院专属</SoftHi>
          </Enter>
          <Enter delay={48} style={{border: `3px solid ${C.indigoInk}`, borderRadius: 10, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Chip tone="indigo" style={{fontSize: 22}}>排非程序 · 证据合法</Chip>
            <Dash delay={58} style={{width: 40, borderTop: `4px solid ${C.indigoInk}`}} />
            <span style={{fontSize: 23, fontWeight: 900, color: C.ink }}>由<span style={{color: C.indigoInk}}>公诉人</span>举证证明</span>
          </Enter>
          <Enter delay={66} style={{border: `3px solid ${C.jade}`, borderRadius: 10, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Chip tone="jade" style={{fontSize: 22}}>自诉案件</Chip>
            <Dash delay={76} style={{width: 40, borderTop: `4px solid ${C.jade}`}} />
            <span style={{fontSize: 23, fontWeight: 900, color: C.ink }}>自诉人负担</span>
          </Enter>
        </div>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '11px 16px'}}>
          <Enter delay={88} style={{fontSize: 22, fontWeight: 800, color: C.mist }}>总口诀：凡有诉讼主张者，皆担证明责任</Enter>
        </div>
        <Enter delay={100} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.vermilion} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.mist }}>2018-2024年题 · 分配题年年有</span>
        </Enter>
      </div>
      <div data-final-knowledge="burden-exception-card" style={{position: 'absolute', left: 924, top: 0, width: 852, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <BadgeX size={30} color={C.jade} style={{flexShrink: 0}} />
            <LabelBlock color={C.jade} size={28}>不担责的主张</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={50}><Chip tone="panel" style={{fontSize: 22}}>抗辩 ≠ 主张</Chip></Enter>
        </div>
        <div style={{border: `3px solid ${C.jade}`, borderRadius: 10, padding: '14px 18px', backgroundColor: 'rgba(63,127,106,0.06)'}}>
          <Enter delay={64} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Chip tone="jade" style={{fontSize: 23}}>正当防卫 · 紧急避险</Chip>
            <span style={{fontSize: 23, fontWeight: 900, color: C.ink }}>是抗辩事由</span>
          </Enter>
          <Enter delay={76} style={{marginTop: 10, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Neg size={22}>被告人不为其承担证明责任</Neg>
          </Enter>
        </div>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={92} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <Chip tone="amber" style={{fontSize: 22}}>巨额财产来源不明</Chip>
            <span style={{fontSize: 22, fontWeight: 800, color: C.ink }}>例外：被告方须说明来源</span>
          </Enter>
          <Enter delay={102} style={{fontSize: 22, fontWeight: 750, color: C.mist }}>一带一特例，考客观题最爱混</Enter>
        </div>
        <Enter delay={116} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.jade} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.mist }}>2024-2025年题 · 抗辩与例外</span>
        </Enter>
      </div>
    </div>
  </Shell>
);

export const TrapsRecapScene = () => (
  <Shell code="03" title="易错上架：动机能佐证，臆测要下架">
    <div data-layout="traps-recap-shelf" data-visual-anchor="typographic-sequence" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="trap-sort-shelves,recap-strip" data-focal-rule="motive-facts-support-relevance-while-estimates-are-opinion-evidence-and-must-be-excluded" data-focal-channels="icon,contrast,annotation,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', left: 30, bottom: 16, opacity: 0.06, pointerEvents: 'none'}}><Split size={230} color={C.vermilion} strokeWidth={1.1} /></div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 0, height: 420, display: 'flex', gap: 14}}>
        <div data-final-knowledge="trap-relevance-shelf" style={{flex: 1, backgroundColor: C.panel, border: `3px solid ${C.jade}`, borderRadius: 14, padding: '16px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Target size={28} color={C.jade} style={{flexShrink: 0}} />
            <LabelBlock color={C.jade} size={26}>上架 · 可作证据</LabelBlock>
          </Enter>
          <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
            <Enter delay={22} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="jade" style={{fontSize: 22}}>犯罪动机</Chip>
              <span style={{fontSize: 22, fontWeight: 800, color: C.ink }}>可佐证</span>
              <ThinU color={C.jade}>关联性</ThinU>
            </Enter>
            <Enter delay={34} style={{fontSize: 22, fontWeight: 750, color: C.mist }}>品格证据一般不上架，动机例外</Enter>
          </div>
        </div>
        <div data-final-knowledge="trap-opinion-shelf" style={{flex: 1, backgroundColor: C.panel, border: `3px solid ${C.vermilion}`, borderRadius: 14, padding: '16px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <BadgeX size={28} color={C.vermilion} style={{flexShrink: 0}} />
            <LabelBlock color={C.vermilion} size={26}>下架 · 意见排除</LabelBlock>
          </Enter>
          <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
            <Enter delay={56} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="vermilion" style={{fontSize: 22}}>「估计时速一百二」</Chip>
              <Stamp delay={66} tone="vermilion">臆测排除</Stamp>
            </Enter>
            <Enter delay={76} style={{fontSize: 22, fontWeight: 750, color: C.mist }}>感知可以陈述，估算属于专业判断</Enter>
          </div>
        </div>
      </div>
      <div data-final-knowledge="recap-strip" style={{position: 'absolute', left: 0, right: 0, top: 444, height: 300, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Enter delay={100} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <BookMarked size={28} color={C.indigoInk} style={{flexShrink: 0}} />
          <LabelBlock color={C.indigoInk} size={26}>三篇合账 · 一页总览</LabelBlock>
        </Enter>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: 10}}>
          <Enter delay={116}><Chip tone="vermilion" style={{fontSize: 22}}>两把尺：关联 + 合法</Chip></Enter>
          <Enter delay={124}><Chip tone="amber" style={{fontSize: 22}}>种类看取证形态</Chip></Enter>
          <Enter delay={132}><Chip tone="jade" style={{fontSize: 22}}>分类看来源与独证</Chip></Enter>
          <Enter delay={140}><Chip tone="indigo" style={{fontSize: 22}}>排非扣违禁 · 转化只认实物</Chip></Enter>
        </div>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: 10}}>
          <Enter delay={152}><Chip tone="indigo" style={{fontSize: 22}}>证明主体带主张</Chip></Enter>
          <Enter delay={160}><Chip tone="vermilion" style={{fontSize: 22}}>公诉责任在检院</Chip></Enter>
          <Enter delay={168}><Chip tone="jade" style={{fontSize: 22}}>正当防卫不担责</Chip></Enter>
          <span style={{flex: 1}} />
          <Enter delay={176} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <GraduationCap size={24} color={C.vermilion} style={{flexShrink: 0}} />
            <span style={{fontSize: 22, fontWeight: 800, color: C.mist }}>2025年题 · 证据综合单选</span>
          </Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const BurdenLedgerDesk = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-subject-object-ledger" {...SCENES.subjectObjectLedger}><SubjectObjectScene /></TimelineSequence>
    <TimelineSequence name="02-burden-split-rules" {...SCENES.burdenSplitRules}><BurdenSplitScene /></TimelineSequence>
    <TimelineSequence name="03-traps-recap-shelf" {...SCENES.trapsRecapShelf}><TrapsRecapScene /></TimelineSequence>
  </AbsoluteFill>
);
