import type {ReactNode} from 'react';
import {Ban, BookOpen, ClipboardCheck, Flag, GraduationCap, Hand, Hourglass, Link, Route} from 'lucide-react';
import {C, Chip, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp, ThinU} from './kit';

const Totem = ({children}: {children: ReactNode}) => <span style={{position: 'absolute', right: -38, bottom: -58, opacity: 0.08, display: 'inline-flex', pointerEvents: 'none'}}>{children}</span>;

export const FormStageDependenceScene = () => (
  <Shell code="07" title="犯罪形态的从属性">
    <div data-layout="stage-escalation-timeline" data-visual-anchor="timeline-gate" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="stage-escalation-rail,discontinuation-independence" data-focal-rule="accessory-stage-follows-the-perpetrator-stage" data-focal-channels="icon,connector,contrast,locator" style={{position: 'absolute', inset: 0}}>
      <Totem><Route size={250} color={C.lineIndigo} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="form-head-strip" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 96, backgroundColor: C.paper, border: `3px solid ${C.kiteJade}`, borderRadius: 8, padding: '8px 18px', display: 'flex', alignItems: 'center', gap: 16}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Route size={24} color={C.kiteJade} />
          <LabelBlock size={23} color={C.kiteJade}>犯罪形态的从属性</LabelBlock>
        </Enter>
        <Enter delay={14} style={{fontSize: 20, fontWeight: 800}}>教唆犯·帮助犯的犯罪形态，同样<SoftHi style={{fontSize: 19}}>取决于实行犯</SoftHi></Enter>
      </div>

      <div data-final-knowledge="stage-rule-board" style={{position: 'absolute', left: 0, top: 112, width: 876, height: 296, backgroundColor: C.paper, border: `3px solid ${C.lineIndigo}`, borderRadius: 8, padding: '12px 18px'}}>
        <Enter delay={24}><LabelBlock size={22} color={C.lineIndigo}>阶段规则</LabelBlock></Enter>
        <div style={{marginTop: 12, display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={36} style={{fontSize: 19, fontWeight: 800}}>实行犯尚在<Chip tone="line" style={{fontSize: 17}}>预备阶段</Chip> → 共犯只能在预备阶段定形态</Enter>
          <Enter delay={48} style={{fontSize: 19, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 6}}>实行犯进入<Chip tone="alert" style={{fontSize: 17}}>实行阶段</Chip> → 共犯·其他实行犯都在实行阶段定形态<Hourglass size={17} color={C.lineIndigo} style={{marginLeft: 2}} /></Enter>
        </div>
      </div>

      <div data-final-knowledge="discontinuation-board" style={{position: 'absolute', left: 900, top: 112, width: 876, height: 296, backgroundColor: C.paper, border: `3px dashed ${C.apricot}`, borderRadius: 8, padding: '12px 18px'}}>
        <Enter delay={30} style={{display: 'flex', alignItems: 'center', gap: 8}}>
          <Hand size={22} color={C.apricot} />
          <LabelBlock size={22} color={C.apricot}>例外 · 犯罪中止的独立性</LabelBlock>
        </Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6}}>
          <Enter delay={42} style={{fontSize: 18, fontWeight: 700}}>某一共犯的中止效力<Neg size={18}>不能惠及其他共犯人</Neg></Enter>
          <Enter delay={54} style={{fontSize: 17, fontWeight: 700, color: C.inkSoft}}>底层：从宽依据是人身危险性降低，而它属于<ThinU color={C.apricot}>人身专属</ThinU>特征</Enter>
          <Enter delay={66} style={{fontSize: 17, fontWeight: 800}}>成立要求：亲力亲为＝有中止行为且<SoftHi style={{fontSize: 16}}>消除贡献</SoftHi></Enter>
        </div>
      </div>

      <div data-final-knowledge="twin-case-strip" style={{position: 'absolute', left: 0, right: 0, top: 424, bottom: 0, backgroundColor: C.paper, border: `3px solid ${C.kiteJade}`, borderRadius: 8, padding: '12px 22px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap'}}>
          <Enter delay={78} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <BookOpen size={20} color={C.kiteJade} />
            <LabelBlock size={21} color={C.kiteJade}>案例推演</LabelBlock>
          </Enter>
          <Enter delay={88} style={{fontSize: 17, fontWeight: 700, color: C.inkSoft}}>毒药案：乙扔掉毒药＝预备阶段中止（效力只及自己）；李某＝意志以外原因 → <Chip tone="line" style={{fontSize: 15}}>犯罪预备</Chip></Enter>
          <Enter delay={100} style={{fontSize: 17, fontWeight: 700, color: C.inkSoft}}>望风案：乙望风被抓·甲在内既遂 → 乙有心理性贡献 → 也<Chip tone="jade" style={{fontSize: 15}}>既遂</Chip></Enter>
        </div>
        <Enter delay={112} style={{marginTop: 10, fontSize: 19, fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: 10}}><Flag size={20} color={C.kiteJade} />共同既遂规律：一人既遂 → 大伙<Stamp delay={118} tone="jade">都既遂</Stamp>（除非在既遂前主动脱离）</Enter>
      </div>
    </div>
  </Shell>
);

export const FormCaseQuizScene = () => (
  <Shell code="08" title="形态对照表·真题">
    <div data-layout="six-row-table-quiz" data-visual-anchor="boundary" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="six-row-consequence-table,quiz-verdict-rows" data-focal-rule="accessory-fate-mirrors-perpetrator-progress" data-focal-channels="icon,contrast,enclosure,locator" style={{position: 'absolute', inset: 0}}>
      <Totem><ClipboardCheck size={250} color={C.lineIndigo} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="six-row-board" style={{position: 'absolute', left: 0, top: 0, width: 1030, height: 744, backgroundColor: C.paper, border: `3px solid ${C.lineIndigo}`, borderRadius: 8, padding: '12px 18px'}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 8}}>
          <ClipboardCheck size={22} color={C.lineIndigo} />
          <LabelBlock size={22} color={C.lineIndigo}>甲教唆/帮助乙犯罪 · 乙的表现 → 甲的结论</LabelBlock>
        </Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 7}}>
          <Enter delay={14} style={{fontSize: 17, fontWeight: 700, display: 'flex', gap: 10, alignItems: 'center'}}><Ban size={16} color={C.alertRed} /><Chip tone="paper" style={{fontSize: 15, minWidth: 140, justifyContent: 'center'}}>乙根本未去</Chip><span>甲<Neg size={16}>无罪</Neg></span></Enter>
          <Enter delay={24} style={{fontSize: 17, fontWeight: 700, display: 'flex', gap: 10, alignItems: 'center'}}><Hourglass size={16} color={C.lineIndigo} /><Chip tone="paper" style={{fontSize: 15, minWidth: 140, justifyContent: 'center'}}>乙预备阶段中止</Chip><span>甲＝<Chip tone="line" style={{fontSize: 14}}>犯罪预备</Chip>；甲若有中止行为且消除贡献 → <Chip tone="jade" style={{fontSize: 14}}>中止</Chip></span></Enter>
          <Enter delay={34} style={{fontSize: 17, fontWeight: 700, display: 'flex', gap: 10, alignItems: 'center'}}><Route size={16} color={C.lineIndigo} /><Chip tone="paper" style={{fontSize: 15, minWidth: 140, justifyContent: 'center'}}>乙预备阶段预备</Chip><span>甲＝<Chip tone="line" style={{fontSize: 14}}>犯罪预备</Chip></span></Enter>
          <Enter delay={44} style={{fontSize: 17, fontWeight: 700, display: 'flex', gap: 10, alignItems: 'center'}}><Hourglass size={16} color={C.alertRed} /><Chip tone="paper" style={{fontSize: 15, minWidth: 140, justifyContent: 'center'}}>乙实行阶段中止</Chip><span>甲＝<Chip tone="alert" style={{fontSize: 14}}>犯罪未遂</Chip>；甲若有中止行为且消除贡献 → 中止</span></Enter>
          <Enter delay={54} style={{fontSize: 17, fontWeight: 700, display: 'flex', gap: 10, alignItems: 'center'}}><Route size={16} color={C.alertRed} /><Chip tone="paper" style={{fontSize: 15, minWidth: 140, justifyContent: 'center'}}>乙实行阶段未遂</Chip><span>甲＝<Chip tone="alert" style={{fontSize: 14}}>犯罪未遂</Chip></span></Enter>
          <Enter delay={64} style={{fontSize: 17, fontWeight: 700, display: 'flex', gap: 10, alignItems: 'center'}}><Flag size={16} color={C.kiteJade} /><Chip tone="paper" style={{fontSize: 15, minWidth: 140, justifyContent: 'center'}}>乙既遂</Chip><span>甲有贡献 → <Chip tone="jade" style={{fontSize: 14}}>既遂</Chip>；甲中止且消除贡献 → 中止·对既遂<Neg size={15}>不负责</Neg></span></Enter>
        </div>
        <Enter delay={76} style={{marginTop: 10, fontSize: 17, fontWeight: 700, color: C.inkSoft, display: 'inline-flex', alignItems: 'center', gap: 8}}><Link size={16} color={C.kiteJade} />读法：<ThinU>被迫落到哪一档</ThinU>是默认值；只有自己<SoftHi style={{fontSize: 16}}>亲力亲为消除贡献</SoftHi>才能改写为中止</Enter>
      </div>

      <div style={{position: 'absolute', left: 1054, top: 0, width: 722, height: 744, display: 'flex', flexDirection: 'column', gap: 14}}>
        <div data-final-knowledge="quiz-strip-2022" style={{flex: 1, backgroundColor: C.paper, border: `3px solid ${C.kiteJade}`, borderRadius: 8, padding: '10px 16px'}}>
          <Enter delay={86} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <GraduationCap size={20} color={C.kiteJade} />
            <LabelBlock size={19} color={C.kiteJade}>2022 · 押赴家中取钱案</LabelBlock>
          </Enter>
          <Enter delay={96} style={{marginTop: 6, fontSize: 16, fontWeight: 700, color: C.inkSoft }}>甲有事离开·乙独自前往后放弃 → 乙＝实行阶段<Chip tone="jade" style={{fontSize: 14}}>中止</Chip>；甲＝<Chip tone="alert" style={{fontSize: 14}}>未遂</Chip>（乙的中止对甲＝意志以外原因）</Enter>
          <Enter delay={106} style={{marginTop: 4, fontSize: 15, fontWeight: 700, color: C.inkSoft}}>2022 · 途中肚疼离开案：乙着手后放弃 → 乙中止；甲虽在预备阶段离开，乙着手后甲形态只能在实行阶段找 → 甲＝未遂</Enter>
        </div>
        <div data-final-knowledge="quiz-strip-2024" style={{flex: 1, backgroundColor: C.paper, border: `3px solid ${C.apricot}`, borderRadius: 8, padding: '10px 16px'}}>
          <Enter delay={112} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <GraduationCap size={20} color={C.apricot} />
            <LabelBlock size={19} color={C.apricot}>2024 · 踩点悔悟案</LabelBlock>
          </Enter>
          <Enter delay={122} style={{marginTop: 6, fontSize: 16, fontWeight: 700}}>甲踩点遇同学·向丙坦白计划·次日与丙一起报警抓乙 → 甲＝预备阶段<Chip tone="jade" style={{fontSize: 14}}>犯罪中止</Chip>：抓捕乙比"明确告知"更实质地<SoftHi style={{fontSize: 14}}>降低人身危险性</SoftHi></Enter>
          <Enter delay={132} style={{marginTop: 4, fontSize: 15, fontWeight: 700, color: C.inkSoft}}>乙（帮助犯）＝<Chip tone="line" style={{fontSize: 14}}>犯罪预备</Chip>：实行犯甲预备阶段中止，乙只能跟到预备阶段</Enter>
        </div>
      </div>
    </div>
  </Shell>
);
