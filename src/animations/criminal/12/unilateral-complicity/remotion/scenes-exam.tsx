import type {ReactNode} from 'react';
import {Ban, ClipboardCheck, EyeOff, Hand, Split, Swords, Users} from 'lucide-react';
import {C, Enter, Neg, FixStamp, FrameLabel, GlowHi, PlateChip, Shell, ThinU, Totem} from './kit';

const SoftHi = ({children}: {children: ReactNode}) => (
  <span style={{backgroundColor: C.safelightAmberSoft, padding: '2px 8px', borderRadius: 3, fontWeight: 900}}>{children}</span>
);

const RouteHiInline = ({children}: {children: ReactNode}) => (
  <span style={{backgroundColor: C.safelightAmberSoft, padding: '1px 7px', borderRadius: 3, fontWeight: 900}}>{children}</span>
);

export const UnilateralExecutionCaseScene = () => (
  <Shell code="05" title="片面实行：提前打晕案">
    <div data-layout="execution-double-bay" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="knockout-case-bay,theory-verdict-rows" data-focal-rule="secret-execution-picks-perpetrator-or-concurrent-crimes" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><Swords size={250} color={C.developRed} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="case-bay" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 110, backgroundColor: C.panel, border: `3px solid ${C.mirrorSilver}`, borderRadius: 5, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 16}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <EyeOff size={26} color={C.developRed} />
          <FrameLabel size={22} color={C.developRed}>片面实行 · 案情</FrameLabel>
        </Enter>
        <Enter delay={14} style={{fontSize: 20, fontWeight: 800}}>甲得知乙欲强奸妇女，便<SoftHi>提前将妇女打晕</SoftHi>（轻伤）后退出；乙顺利强奸，但<Neg size={19}>不知甲帮忙</Neg></Enter>
      </div>

      <div data-final-knowledge="affirmation-bay" style={{position: 'absolute', left: 0, top: 126, width: 876, height: 420, backgroundColor: C.panel, border: `3px solid ${C.fixerGreen}`, borderRadius: 5, padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 11}}>
        <Enter delay={26} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Swords size={26} color={C.fixerGreen} />
          <FrameLabel size={22} color={C.fixerGreen}>肯定说（多数说）</FrameLabel>
        </Enter>
        <Enter delay={38} style={{fontSize: 19, fontWeight: 800}}>甲有参与意识 → 应对乙制造的<RouteHiInline>违法事实</RouteHiInline>负责</Enter>
        <Enter delay={50} style={{display: 'flex', gap: 10, flexWrap: 'wrap'}}>
          <PlateChip tone="green" style={{fontSize: 17}}>甲＝片面实行犯（正犯）</PlateChip>
          <PlateChip tone="silver" style={{fontSize: 17}}>乙＝单独犯罪</PlateChip>
        </Enter>
        <Enter delay={62} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft, marginTop: 'auto'}}>暗中动手的人和明着动手的人，在违法层面一起评价</Enter>
      </div>

      <div data-final-knowledge="negation-bay" style={{position: 'absolute', left: 900, top: 126, width: 876, height: 420, backgroundColor: C.panel, border: `3px solid ${C.developRed}`, borderRadius: 5, padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 11}}>
        <Enter delay={32} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Ban size={26} color={C.developRed} />
          <FrameLabel size={22} color={C.developRed}>否定说（少数说）</FrameLabel>
        </Enter>
        <Enter delay={44} style={{fontSize: 19, fontWeight: 800}}>成立共同实行犯的核心门槛＝<Neg size={18}>相互</Neg>的意思联络</Enter>
        <Enter delay={56} style={{display: 'flex', flexDirection: 'column', gap: 8}}>
          <span style={{fontSize: 19, fontWeight: 700}}>① 甲<Neg size={17}>不构成</Neg>片面实行犯 → 单独的<ThinU color={C.developRed}>故意伤害罪</ThinU></span>
          <span style={{fontSize: 19, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8}}><Hand size={20} color={C.safelightAmber} />② 否定说仍承认片面帮助犯 → 甲同时构成片面<ThinU color={C.safelightAmber}>帮助犯</ThinU></span>
          <span style={{fontSize: 19, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8}}><Split size={20} color={C.mirrorSilver} />③ 两罪构成<GlowHi style={{fontSize: 17}}>想象竞合</GlowHi>，择一重罪论处</span>
        </Enter>
      </div>

      <div data-final-knowledge="quiz-strip" style={{position: 'absolute', left: 0, top: 562, right: 0, bottom: 0, backgroundColor: C.panel, border: `3px dashed ${C.safelightAmber}`, borderRadius: 5, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 14}}>
        <Enter delay={78} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Users size={24} color={C.safelightAmber} />
          <FrameLabel size={21} color={C.safelightAmber}>记忆钩子<PlateChip tone="paper" style={{fontSize: 15, marginLeft: 8}}>2017年54题同型</PlateChip></FrameLabel>
        </Enter>
        <Enter delay={88} style={{fontSize: 18, fontWeight: 700}}>暗中打晕被害人帮同伙 → 肯定说定片面实行犯；否定说定伤害罪＋片面帮助犯的想象竞合</Enter>
      </div>
    </div>
  </Shell>
);

export const ExamTwoCasesScene = () => (
  <Shell code="06" title="两道真题：片面共犯的实战">
    <div data-layout="exam-dual-docket" data-visual-anchor="typographic-sequence" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="dual-exam-docket,overlimit-baseline-strip" data-focal-rule="theory-choice-changes-helper-verdict" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><ClipboardCheck size={250} color={C.mirrorSilver} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="exam-2017-docket" style={{position: 'absolute', left: 0, top: 0, width: 876, height: 566, backgroundColor: C.panel, border: `3px solid ${C.mirrorSilver}`, borderRadius: 5, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 10}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <ClipboardCheck size={24} color={C.mirrorSilver} />
          <FrameLabel size={21}>题1<PlateChip tone="paper" style={{fontSize: 15, marginLeft: 8}}>2017年第54题</PlateChip></FrameLabel>
        </Enter>
        <Enter delay={12} style={{fontSize: 18, fontWeight: 700}}>甲知道乙将去丙家抢劫，暗中先赶到丙家将丙打昏（轻伤）后离去；乙到后发现丙已昏迷，以为疾病发作，盗窃既遂</Enter>
        <Enter delay={24} style={{display: 'flex', flexDirection: 'column', gap: 8}}>
          <span style={{fontSize: 18, fontWeight: 800, backgroundColor: C.fixerGreenSoft, border: `2px solid ${C.fixerGreen}`, borderRadius: 4, padding: '7px 12px', display: 'inline-flex', alignItems: 'center', gap: 8}}><Swords size={20} color={C.fixerGreen} />肯定说：甲的暴力能与盗窃事实<RouteHiInline>挂钩</RouteHiInline> → 甲＝抢劫罪的片面<RouteHiInline>实行犯</RouteHiInline></span>
          <span style={{fontSize: 18, fontWeight: 800, backgroundColor: C.developRedSoft, border: `2px solid ${C.developRed}`, borderRadius: 4, padding: '7px 12px', display: 'inline-flex', alignItems: 'center', gap: 8}}><Ban size={20} color={C.developRed} />否定说：不能挂钩 → 单独故意伤害罪＋片面帮助犯 → <Split size={20} color={C.developRed} />想象竞合</span>
          <span style={{fontSize: 18, fontWeight: 800, backgroundColor: C.safelightAmberSoft, border: `2px solid ${C.safelightAmber}`, borderRadius: 4, padding: '7px 12px', display: 'inline-flex', alignItems: 'center', gap: 8}}><Users size={20} color={C.safelightAmber} />乙：均构成盗窃罪既遂（单独犯罪）</span>
        </Enter>
        <span style={{marginTop: 'auto', display: 'inline-flex'}}><FixStamp delay={44} tone="green">两说并答</FixStamp></span>
      </div>

      <div data-final-knowledge="exam-2019-docket" style={{position: 'absolute', left: 900, top: 0, width: 876, height: 566, backgroundColor: C.panel, border: `3px solid ${C.safelightAmber}`, borderRadius: 5, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 10}}>
        <Enter delay={8} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <ClipboardCheck size={24} color={C.safelightAmber} />
          <FrameLabel size={21} color={C.safelightAmber}>题2<PlateChip tone="paper" style={{fontSize: 15, marginLeft: 8}}>2019年试题</PlateChip></FrameLabel>
        </Enter>
        <Enter delay={18} style={{fontSize: 18, fontWeight: 700}}>乙请甲望风（见主人回家电话告知）；甲见丙回家，为帮乙取得财物，<ThinU color={C.developRed}>暴力阻拦打成重伤</ThinU>；乙盗窃既遂且不知外面的事</Enter>
        <Enter delay={30} style={{fontSize: 18, fontWeight: 800, backgroundColor: C.safelightAmberSoft, border: `2px solid ${C.safelightAmber}`, borderRadius: 4, padding: '7px 12px', display: 'inline-flex', alignItems: 'center', gap: 8}}><Hand size={20} color={C.safelightAmber} />基础属性：甲乙事先存在共同犯罪 → 甲一开始就是<RouteHiInline>帮助犯</RouteHiInline>（非片面帮助）；多干的暴力＝<RouteHiInline>实行过限</RouteHiInline>，乙不负责</Enter>
        <Enter delay={42} style={{display: 'flex', flexDirection: 'column', gap: 8}}>
          <span style={{fontSize: 18, fontWeight: 800, backgroundColor: C.fixerGreenSoft, border: `2px solid ${C.fixerGreen}`, borderRadius: 4, padding: '7px 12px', display: 'inline-flex', alignItems: 'center', gap: 8}}><Swords size={20} color={C.fixerGreen} />肯定说：甲＝抢劫罪的片面实行犯（致人重伤）</span>
          <span style={{fontSize: 18, fontWeight: 800, backgroundColor: C.developRedSoft, border: `2px solid ${C.developRed}`, borderRadius: 4, padding: '7px 12px', display: 'inline-flex', alignItems: 'center', gap: 8}}><Ban size={20} color={C.developRed} />否定说：甲＝故意伤害罪＋盗窃罪帮助犯 → 想象竞合择一重</span>
          <span style={{fontSize: 18, fontWeight: 800, backgroundColor: C.mirrorSilverSoft, border: `2px solid ${C.mirrorSilver}`, borderRadius: 4, padding: '7px 12px', display: 'inline-flex', alignItems: 'center', gap: 8}}><Users size={20} color={C.mirrorSilver} />乙：两说下均为盗窃罪实行犯，对过限暴力<Neg size={16}>不负责</Neg></span>
        </Enter>
      </div>

      <div data-final-knowledge="recap-strip" style={{position: 'absolute', left: 0, top: 582, right: 0, bottom: 0, backgroundColor: C.panel, border: `3px solid ${C.mirrorSilver}`, borderRadius: 5, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 14}}>
        <Enter delay={60} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <EyeOff size={24} color={C.mirrorSilver} />
          <FrameLabel size={21}>答题模板</FrameLabel>
        </Enter>
        <Enter delay={70} style={{fontSize: 18, fontWeight: 800}}>暗中动手者：肯定说＝片面实行犯；否定说＝单独轻罪＋片面帮助犯的想象竞合；不知情的实行方恒为单独犯罪</Enter>
      </div>
    </div>
  </Shell>
);
