import {AbsoluteFill} from 'remotion';
import {Banknote, Building, Building2, GraduationCap, HandCoins, Landmark, Scissors, Wallet} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp, ThinU} from './theme';

export const BranchStatusScene = () => (
  <Shell code="01" title="分公司是夹层，不是另一座钱柜">
    <div data-layout="one-wallet-compartment-map" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="containment-map,contrast-pair" data-focal-rule="a-branch-is-a-compartment-of-the-head-office-wallet-one-legal-person-shares-property-and-bears-liability" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="status-head-office-vault" style={{position: 'absolute', left: 0, top: 0, width: 1072, height: 468, backgroundColor: C.panel, border: `3px solid ${C.brass}`, borderRadius: 16, padding: '14px 20px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Landmark size={34} color={C.brass} style={{flexShrink: 0}} />
            <LabelBlock size={30}>总公司 · 植根</LabelBlock>
          </Enter>
          <Enter delay={14}><Chip tone="brass" style={{fontSize: 22}}>一个法人 · 一座钱柜</Chip></Enter>
          <span style={{flex: 1}} />
          <Enter delay={150} style={{fontSize: 22, fontWeight: 800, color: C.riceDim, whiteSpace: 'nowrap'}}>甲、乙分公司的钱都姓「总」</Enter>
        </div>
        <div data-final-knowledge="status-shared-property">
          <Enter delay={26} style={{marginTop: 12}}>
            <Chip tone="panel" style={{border: `2px solid ${C.brass}`, fontSize: 24}}><Wallet size={24} color={C.brass} style={{flexShrink: 0}} />财产共享 · 责任共担</Chip>
          </Enter>
        </div>
        <div data-final-knowledge="status-branch-compartment" style={{marginTop: 14, display: 'flex', gap: 16}}>
          {[
            {name: '甲分公司', tag: '南方省 · 农产品加工', delay: 44},
            {name: '乙分公司', tag: '拓宽市场新设', delay: 56},
          ].map((drawer) => (
            <div key={drawer.name} style={{flex: 1, backgroundColor: C.wood, border: `3px dashed ${C.brass}`, borderRadius: 12, padding: '10px 16px'}}>
              <Enter delay={drawer.delay} style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <Building2 size={26} color={C.rice} style={{flexShrink: 0}} />
                <span style={{fontSize: 27, fontWeight: 900, color: C.rice, whiteSpace: 'nowrap'}}>{drawer.name}</span>
                <Chip tone="panel" style={{fontSize: 22}}>夹层</Chip>
              </Enter>
              <Enter delay={drawer.delay + 10} style={{marginTop: 8, fontSize: 22, color: C.riceDim, fontWeight: 700}}>{drawer.tag}</Enter>
            </div>
          ))}
        </div>
        <div style={{marginTop: 14, display: 'flex', alignItems: 'center', gap: 16}}>
          <Enter delay={74}><Neg dark={false} size={25}>无独立法人资格</Neg></Enter>
          <Enter delay={82}><Chip tone="panel" style={{fontSize: 22}}>总公司的附属机构</Chip></Enter>
          <Dash delay={90} style={{flex: 1, borderTop: `3px dashed ${C.panelLine}`}} />
        </div>
        <div data-final-knowledge="status-general-authority" style={{marginTop: 16, backgroundColor: C.wood, borderRadius: 12, padding: '12px 16px'}}>
          <Enter delay={104} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'nowrap'}}>
            <span style={{fontSize: 24, fontWeight: 850, color: C.rice, whiteSpace: 'nowrap'}}>负责人在其经营范围内</span>
            <SoftHi dark style={{fontSize: 24}}><ThinU color={C.ink}>概括授权</ThinU></SoftHi>
            <span style={{fontSize: 24, fontWeight: 850, color: C.rice, whiteSpace: 'nowrap'}}>→ 当然可植根公司名义对外签约</span>
          </Enter>
        </div>
      </div>
      <div data-final-knowledge="status-subsidiary-vault" style={{position: 'absolute', left: 1104, top: 0, width: 672, height: 468, backgroundColor: C.paper, border: `3px solid ${C.ink}`, borderRadius: 16, padding: '14px 20px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={120} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Building size={32} color={C.ink} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={30}>子公司</LabelBlock>
          <Stamp delay={132} tone="jade">独立法人</Stamp>
        </Enter>
        <Enter delay={146} style={{marginTop: 16, fontSize: 25, fontWeight: 850, color: C.ink}}>另一座独立钱柜——自己开、自己担</Enter>
        <Enter delay={158} style={{marginTop: 12, fontSize: 23, fontWeight: 750, color: C.ink, display: 'flex', alignItems: 'center', gap: 10}}>
          <span style={{height: 4, width: 26, backgroundColor: C.seal}} />母公司、子公司<ThinU>各自担责</ThinU>
        </Enter>
        <div style={{marginTop: 18, border: `2px dashed ${C.seal}`, borderRadius: 10, padding: '12px 16px'}}>
          <Enter delay={172} style={{fontSize: 22, fontWeight: 850, color: C.seal, whiteSpace: 'nowrap'}}>对比记忆</Enter>
          <Enter delay={182} style={{marginTop: 8, display: 'flex', flexDirection: 'column', gap: 8, fontSize: 23, fontWeight: 800, color: C.ink}}>
            <span>分公司＝<ThinU color={C.seal}>同一座柜的夹层</ThinU> · 责任打通</span>
            <span>子公司＝<ThinU color={C.jade}>另一座柜</ThinU> · 责任隔离</span>
          </Enter>
        </div>
      </div>
      <div data-final-knowledge="status-exam-note" style={{position: 'absolute', left: 0, right: 0, top: 496, height: 248, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={200} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.brass} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.rice}}>2017-3-25 · 总公司债权人，能不能执行分公司的财产？</span>
          </Enter>
          <Enter delay={214} style={{marginTop: 22, display: 'flex', alignItems: 'center', gap: 16}}>
            <Chip tone="panel" style={{fontSize: 24, border: `2px solid ${C.panelLine}`}}>分公司财产属总公司</Chip>
            <Dash delay={222} style={{width: 90, borderTop: `4px solid ${C.brass}`}} />
            <SoftHi dark style={{fontSize: 27}}>同一座钱柜 → <ThinU color={C.rice}>能互相执行</ThinU></SoftHi>
          </Enter>
          <Enter delay={230} style={{marginTop: 20, fontSize: 22, color: C.riceDim, fontWeight: 750}}>反过来，分公司的债权人也能追到总公司的财产</Enter>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12}}>
          <Enter delay={240} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <LabelBlock color={C.brass} size={24}>落点</LabelBlock>
            <span style={{fontSize: 24, fontWeight: 950, color: C.rice}}>总分公司系一家</span>
          </Enter>
          <Enter delay={250}><Chip tone="panel" style={{fontSize: 22}}>附属机构 · 财产共享 · 责任共担</Chip></Enter>
          <Enter delay={260} style={{fontSize: 22, color: C.brass, fontWeight: 850}}>选非题：割裂血脉的选项 → 当选（见 03）</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const ExecutionDrawScene = () => (
  <Shell code="02" title="执行顺序：一个钱包分夹层，逐层取出">
    <div data-layout="sequential-draw-counter" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,stamp" data-visual-grammar="stage-progression,resource-draw-sequence" data-focal-rule="creditors-draw-from-the-debtor-branch-first-then-the-head-office-then-sister-branches-until-fully-satisfied" data-focal-channels="icon,connector,motion,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="exec-creditor-claim" style={{position: 'absolute', left: 0, top: 0, width: 1180, height: 96, backgroundColor: C.paper, borderRadius: 14, padding: '14px 22px', boxShadow: `0 8px 20px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <HandCoins size={32} color={C.seal} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={29}>乙分公司的债权人</LabelBlock>
          <span style={{fontSize: 25, fontWeight: 850, color: C.ink}}>乙分欠债——<ThinU>其直接管理的财产不能清偿时</ThinU>，启动取银</span>
        </Enter>
      </div>
      <div style={{position: 'absolute', left: 0, top: 122, width: 1180}}>
        <div data-final-knowledge="exec-draw-branch-yi" style={{backgroundColor: C.panel, border: `3px solid ${C.woodLine}`, borderRadius: 12, padding: '10px 18px'}}>
          <Enter delay={30} style={{display: 'flex', alignItems: 'center', gap: 14}}>
            <span style={{fontSize: 30, fontWeight: 950, color: C.brass, width: 44, textAlign: 'center'}}>一</span>
            <Building2 size={28} color={C.brass} style={{flexShrink: 0}} />
            <span style={{fontSize: 27, fontWeight: 900, color: C.rice, whiteSpace: 'nowrap'}}>乙分公司直接管理的财产</span>
            <Dash delay={42} style={{flex: 1, borderTop: `3px dashed ${C.panelLine}`}} />
            <Chip tone="brass" style={{fontSize: 22}}>第一顺位</Chip>
          </Enter>
          <Enter delay={52} style={{marginTop: 6, marginLeft: 58, fontSize: 22, color: C.riceDim, fontWeight: 700}}>先拉欠债的那层夹层</Enter>
        </div>
        <div data-final-knowledge="exec-draw-head" style={{marginTop: 14, backgroundColor: C.panel, border: `3px solid ${C.woodLine}`, borderRadius: 12, padding: '10px 18px'}}>
          <Enter delay={74} style={{display: 'flex', alignItems: 'center', gap: 14}}>
            <span style={{fontSize: 30, fontWeight: 950, color: C.brass, width: 44, textAlign: 'center'}}>二</span>
            <Landmark size={28} color={C.brass} style={{flexShrink: 0}} />
            <span style={{fontSize: 27, fontWeight: 900, color: C.rice, whiteSpace: 'nowrap'}}>总公司直接管理的其他财产</span>
            <Dash delay={86} style={{flex: 1, borderTop: `3px dashed ${C.panelLine}`}} />
            <Chip tone="brass" style={{fontSize: 22}}>第二顺位</Chip>
          </Enter>
          <Enter delay={96} style={{marginTop: 6, marginLeft: 58, fontSize: 22, color: C.riceDim, fontWeight: 700}}>夹层不够，动柜身</Enter>
        </div>
        <div data-final-knowledge="exec-draw-branch-jia" style={{marginTop: 14, backgroundColor: C.panel, border: `3px solid ${C.woodLine}`, borderRadius: 12, padding: '10px 18px'}}>
          <Enter delay={118} style={{display: 'flex', alignItems: 'center', gap: 14}}>
            <span style={{fontSize: 30, fontWeight: 950, color: C.brass, width: 44, textAlign: 'center'}}>三</span>
            <Building2 size={28} color={C.brass} style={{flexShrink: 0}} />
            <span style={{fontSize: 27, fontWeight: 900, color: C.rice, whiteSpace: 'nowrap'}}>甲分公司直接管理的财产</span>
            <Dash delay={130} style={{flex: 1, borderTop: `3px dashed ${C.panelLine}`}} />
            <Chip tone="brass" style={{fontSize: 22}}>第三顺位</Chip>
          </Enter>
          <Enter delay={140} style={{marginTop: 6, marginLeft: 58, fontSize: 22, color: C.riceDim, fontWeight: 700}}>再不够，动隔壁夹层</Enter>
        </div>
      </div>
      <div data-final-knowledge="exec-vault-cross-section" style={{position: 'absolute', left: 0, top: 508, width: 1180, height: 236, backgroundColor: C.wood, border: `3px solid ${C.woodLine}`, borderRadius: 14, padding: '14px 22px'}}>
        <Enter delay={160} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Wallet size={26} color={C.brass} style={{flexShrink: 0}} />
          <LabelBlock color={C.brass} size={26}>同一座钱柜 · 取银动线</LabelBlock>
          <span style={{fontSize: 22, color: C.riceDim, fontWeight: 750}}>夹层与柜身的钱，债权人都能取</span>
        </Enter>
        <div style={{marginTop: 14, display: 'flex', alignItems: 'center', gap: 10}}>
          <Enter delay={176} style={{display: 'flex', alignItems: 'center', gap: 8, backgroundColor: C.panel, border: `2px solid ${C.brass}`, borderRadius: 10, padding: '8px 14px'}}>
            <Building2 size={24} color={C.rice} style={{flexShrink: 0}} />
            <span style={{fontSize: 23, fontWeight: 900, color: C.rice, whiteSpace: 'nowrap'}}>乙分夹层</span>
          </Enter>
          <Dash delay={186} style={{flex: 1, borderTop: `4px solid ${C.brass}`}} />
          <Enter delay={196} style={{display: 'flex', alignItems: 'center', gap: 8, backgroundColor: C.panel, border: `2px solid ${C.brass}`, borderRadius: 10, padding: '8px 14px'}}>
            <Landmark size={24} color={C.rice} style={{flexShrink: 0}} />
            <span style={{fontSize: 23, fontWeight: 900, color: C.rice, whiteSpace: 'nowrap'}}>柜身·总公司</span>
          </Enter>
          <Dash delay={206} style={{flex: 1, borderTop: `4px solid ${C.brass}`}} />
          <Enter delay={216} style={{display: 'flex', alignItems: 'center', gap: 8, backgroundColor: C.panel, border: `2px solid ${C.brass}`, borderRadius: 10, padding: '8px 14px'}}>
            <Building2 size={24} color={C.rice} style={{flexShrink: 0}} />
            <span style={{fontSize: 23, fontWeight: 900, color: C.rice, whiteSpace: 'nowrap'}}>甲分夹层</span>
          </Enter>
          <Dash delay={226} style={{flex: 0.7, borderTop: `4px solid ${C.jade}`}} />
          <Enter delay={234} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <Banknote size={26} color={C.jade} style={{flexShrink: 0}} />
            <span style={{fontSize: 23, fontWeight: 950, color: C.rice, whiteSpace: 'nowrap'}}>受偿</span>
          </Enter>
        </div>
        <Enter delay={246} style={{marginTop: 12, fontSize: 22, color: C.riceDim, fontWeight: 750}}>动线自上而下逐层推进——上一层不够，才动下一层</Enter>
      </div>
      <div data-final-knowledge="exec-full-recovery" style={{position: 'absolute', left: 1212, top: 0, width: 564, height: 420, backgroundColor: C.panel, border: `3px solid ${C.brass}`, borderRadius: 16, padding: '16px 22px'}}>
        <Enter delay={140} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Wallet size={30} color={C.brass} style={{flexShrink: 0}} />
          <LabelBlock size={28}>一个钱包分夹层</LabelBlock>
        </Enter>
        <Enter delay={154} style={{marginTop: 16, fontSize: 25, fontWeight: 850, color: C.rice, display: 'flex', alignItems: 'center', gap: 10}}>
          <Banknote size={26} color={C.brass} style={{flexShrink: 0}} />
          <SoftHi dark style={{fontSize: 24}}>逐层取出</SoftHi>
          <span>——</span>
          <ThinU color={C.brass}>最终均可受偿</ThinU>
        </Enter>
        <div style={{marginTop: 16, display: 'flex', alignItems: 'center', gap: 12}}>
          <Enter delay={168}><Chip tone="panel" style={{fontSize: 22}}>三层财产同属一柜</Chip></Enter>
          <Dash delay={176} style={{flex: 1, borderTop: `3px dashed ${C.panelLine}`}} />
        </div>
        <div style={{marginTop: 18, display: 'flex', justifyContent: 'center'}}>
          <Enter delay={186}><Stamp delay={192} tone="jade">债权人利益无损</Stamp></Enter>
        </div>
      </div>
      <div data-final-knowledge="exec-exam-source" style={{position: 'absolute', left: 1212, top: 448, width: 564, height: 296, backgroundColor: C.ink, borderRadius: 14, padding: '16px 22px'}}>
        <Enter delay={204} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <GraduationCap size={28} color={C.brass} style={{flexShrink: 0}} />
          <span style={{fontSize: 23, fontWeight: 900, color: C.rice}}>2017-3-25 · 题支验证</span>
        </Enter>
        <div style={{marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={216} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <Chip tone="panel" style={{fontSize: 22}}>B 总公司的债权人 → 执行各分公司财产</Chip>
            <Stamp delay={226} tone="jade">正确</Stamp>
          </Enter>
          <Enter delay={238} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <Chip tone="panel" style={{fontSize: 22}}>C 甲分的债权人 → 执行总公司财产</Chip>
            <Stamp delay={248} tone="jade">正确</Stamp>
          </Enter>
        </div>
        <Enter delay={260} style={{marginTop: 14, fontSize: 22, color: C.riceDim, fontWeight: 750}}>《民诉执行规定》：乙分 → 总 → 甲分，逐层受偿</Enter>
      </div>
    </div>
  </Shell>
);

export const ExamTrapScene = () => (
  <Shell code="03" title="选非题：割裂血脉的选项，当选">
    <div data-layout="verdict-stamp-desk" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="option-verdict-triage,trap-word-contrast" data-focal-rule="options-that-sever-the-shared-wallet-are-the-answer-in-select-the-wrong-question-unless-the-word-direct-restores-the-order" data-focal-channels="contrast,icon,annotation,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="trap-select-wrong-rule" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 108, backgroundColor: C.paper, borderRadius: 14, padding: '14px 24px', boxShadow: `0 8px 20px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 16}}>
          <LabelBlock color={C.seal} size={29}>选非口令</LabelBlock>
          <Scissors size={30} color={C.seal} style={{flexShrink: 0}} />
          <span style={{fontSize: 28, fontWeight: 950, color: C.ink}}>「割裂血脉」的选项</span>
          <Stamp delay={18} tone="seal">当选</Stamp>
          <span style={{flex: 1}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.riceDim}}>问「错误的」——三对一错，只挑错</span>
        </Enter>
      </div>
      <div data-final-knowledge="trap-abc-rejected" style={{position: 'absolute', left: 0, right: 0, top: 132, height: 176, display: 'flex', gap: 24}}>
        {[
          {letter: 'A', text: '负责人有概括授权，可以总公司名义签约', delay: 30},
          {letter: 'B', text: '总公司的债权人，可执行各分公司的财产', delay: 42},
          {letter: 'C', text: '甲分的债权人，可执行总公司的财产', delay: 54},
        ].map((t) => (
          <div key={t.letter} style={{flex: 1, backgroundColor: C.panel, border: `3px solid ${C.woodLine}`, borderRadius: 12, padding: '12px 18px'}}>
            <Enter delay={t.delay} style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <Chip tone="rice" style={{fontSize: 24, fontWeight: 950}}>{t.letter}</Chip>
              <Stamp delay={t.delay + 10} tone="jade">表述正确</Stamp>
              <Neg dark={false} size={23}>不当选</Neg>
            </Enter>
            <Enter delay={t.delay + 18} style={{marginTop: 10, fontSize: 22, fontWeight: 750, color: C.rice, lineHeight: 1.5}}>{t.text}</Enter>
          </div>
        ))}
      </div>
      <div data-final-knowledge="trap-option-d-scissors" style={{position: 'absolute', left: 0, top: 332, width: 1024, height: 412, backgroundColor: C.paper, border: `4px solid ${C.seal}`, borderRadius: 16, padding: '18px 26px', boxShadow: `0 12px 30px ${C.shadow}`}}>
        <Enter delay={96} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Chip tone="seal" style={{fontSize: 26, fontWeight: 950}}>D</Chip>
          <HandCoins size={28} color={C.seal} style={{flexShrink: 0}} />
          <span style={{fontSize: 24, fontWeight: 850, color: C.ink}}>乙分公司的债权人，<ThinU color={C.seal}>不得</ThinU>主张强制执行甲分公司财产</span>
        </Enter>
        <Enter delay={116} style={{marginTop: 18, display: 'flex', alignItems: 'center', gap: 14}}>
          <Scissors size={30} color={C.seal} style={{flexShrink: 0}} />
          <span style={{fontSize: 27, fontWeight: 950, color: C.seal}}>「不得」二字——割裂血脉</span>
        </Enter>
        <Enter delay={130} style={{marginTop: 10, fontSize: 23, fontWeight: 750, color: C.ink}}>同一座钱柜，<SoftHi style={{fontSize: 22}}>财产共享 · 责任共担</SoftHi>——说「不得」就错了</Enter>
        <div style={{marginTop: 22, display: 'flex', alignItems: 'center', gap: 18}}>
          <Enter delay={148}><div style={{display: 'inline-flex', padding: '8px 26px', border: `4px solid ${C.seal}`, color: C.seal, fontSize: 42, fontWeight: 950, rotate: '-4deg'}}>当 选</div></Enter>
          <Enter delay={160} style={{fontSize: 24, fontWeight: 850, color: C.ink}}>本题选「错误」的一项 → D</Enter>
        </div>
        <Enter delay={172} style={{marginTop: 24, borderTop: `3px dashed ${C.paperDim}`, paddingTop: 14, fontSize: 22, fontWeight: 750, color: C.ink, lineHeight: 1.6}}>
          依据《民诉执行规定》：乙分 → 总 → 甲分，逐层取出、均可受偿——「不得」正与此相悖
        </Enter>
      </div>
      <div data-final-knowledge="trap-direct-word-fix" style={{position: 'absolute', left: 1056, top: 332, width: 720, height: 412, backgroundColor: C.ink, borderRadius: 14, padding: '18px 24px'}}>
        <Enter delay={176} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <GraduationCap size={28} color={C.brass} style={{flexShrink: 0}} />
          <span style={{fontSize: 24, fontWeight: 900, color: C.rice}}>陷阱修复 · 换词就换考点</span>
        </Enter>
        <Enter delay={190} style={{marginTop: 16, fontSize: 24, fontWeight: 850, color: C.rice, lineHeight: 1.6}}>
          若加「直接」二字：<ThinU color={C.brass}>不得【直接】主张</ThinU>执行甲分财产
        </Enter>
        <Enter delay={204} style={{marginTop: 12, fontSize: 23, fontWeight: 750, color: C.riceDim}}>→ 转为考查执行顺序（见 02 场景）</Enter>
        <Enter delay={218} style={{marginTop: 12, display: 'flex', alignItems: 'center', gap: 12}}>
          <Chip tone="panel" style={{fontSize: 22, border: `2px solid ${C.panelLine}`}}>加上「直接」＝表述正确</Chip>
          <Stamp delay={226} tone="brass">可执行，但讲顺序</Stamp>
        </Enter>
        <Enter delay={240} style={{marginTop: 18, fontSize: 22, color: C.riceDim, fontWeight: 750, lineHeight: 1.6}}>命题人在「割裂」与「顺序」之间只动一两个词——逐字读题支再落章</Enter>
      </div>
    </div>
  </Shell>
);

export const BranchWalletLedger = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-branch-status-map" {...SCENES.branchStatus}><BranchStatusScene /></TimelineSequence>
    <TimelineSequence name="02-execution-draw-order" {...SCENES.executionDraw}><ExecutionDrawScene /></TimelineSequence>
    <TimelineSequence name="03-exam-trap-verdict" {...SCENES.examTrap}><ExamTrapScene /></TimelineSequence>
  </AbsoluteFill>
);
