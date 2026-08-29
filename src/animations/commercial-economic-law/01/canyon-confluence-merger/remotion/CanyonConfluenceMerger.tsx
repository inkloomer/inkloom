import {AbsoluteFill} from 'remotion';
import {Bell, Coins, FileText, GraduationCap, Landmark, LifeBuoy, Percent, Scale, Users, Vote} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp, ThinU} from './theme';

export const SimplifiedMergerScene = () => (
  <Shell code="01" title="简易合并：主河道吞下支流">
    <div data-layout="parent-child-merger-gate" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="parent-threshold-rule,board-decision-simplification" data-focal-rule="a-parent-holding-ninety-percent-plus-absorbs-its-subsidiary-through-a-board-resolution-without-a-subsidiary-shareholders-vote" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="mer-parent-threshold" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 250, backgroundColor: C.panel, border: `3px solid ${C.river}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Percent size={30} color={C.river} style={{flexShrink: 0}} />
          <LabelBlock size={27}>汇流闸门 · 持股 90% 以上</LabelBlock>
        </Enter>
        <div style={{marginTop: 14, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'nowrap'}}>
          <Enter delay={22}><Chip tone="river" style={{fontSize: 24, fontWeight: 900}}>天枫公司</Chip></Enter>
          <span style={{fontSize: 23, fontWeight: 900, color: C.ivory}}>持有 明华公司 92% →</span>
          <Dash delay={34} style={{width: 80, borderTop: `5px solid ${C.river}`}} />
          <Enter delay={42}><Stamp delay={48} tone="jade">达标 · 简易合并</Stamp></Enter>
        </div>
        <Enter delay={60} style={{marginTop: 16, fontSize: 22, fontWeight: 750, color: C.ivoryDim, lineHeight: 1.7}}>主河道吃掉支流——被吞并一侧的程序可以简化</Enter>
      </div>
      <div data-final-knowledge="mer-board-decision" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 250, backgroundColor: C.ivory, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={74} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <FileText size={28} color={C.ink} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={25}>明华这一侧 · 谁签字？</LabelBlock>
        </Enter>
        <Enter delay={90} style={{marginTop: 12, fontSize: 22, fontWeight: 850, color: C.ink, lineHeight: 1.7}}>无需股东会决议 → 由<ThinU color={C.seal}>董事会决议</ThinU></Enter>
        <Enter delay={106} style={{marginTop: 8, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.7}}>未设董事会 → 执行事务董事<SoftHi dark style={{fontSize: 21}}>张某</SoftHi>一锤定音</Enter>
        <Enter delay={122} style={{marginTop: 8}}><Neg dark size={21}>B 需提交股东会——错</Neg></Enter>
      </div>
      <div data-final-knowledge="mer-exam-note" style={{position: 'absolute', left: 0, right: 0, top: 276, height: 200, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={136} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.survey} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.ivory}}>简化的只是程序，不是整件事</span>
          </Enter>
          <Enter delay={152} style={{marginTop: 12, fontSize: 22, fontWeight: 750, color: 'rgba(241,235,220,0.68)', lineHeight: 1.8}}>被合并方免开股东会；合并方、通知、回购权一件不少——往下两格逐条看</Enter>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed rgba(241,235,220,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={168}><Chip tone="survey" style={{fontSize: 22, color: C.ink}}>2025金题 · 三处破绽一处正解</Chip></Enter>
          <Enter delay={180}><Chip tone="panel" style={{fontSize: 21, border: `2px solid rgba(241,235,220,0.3)`, color: C.ivory}}>A 天枫股东会 · B 明华决议 · C 通知</Chip></Enter>
        </div>
      </div>
      <div data-final-knowledge="mer-conflict-recall" style={{position: 'absolute', left: 0, right: 0, top: 502, height: 242, backgroundColor: C.rock, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={194} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Scale size={28} color={C.survey} style={{flexShrink: 0}} />
            <LabelBlock size={25}>陷阱对照 · 别混两张流程图</LabelBlock>
          </Enter>
          <div style={{marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10}}>
            <Enter delay={210} style={{fontSize: 21, fontWeight: 750, color: C.ivory, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="buoy" style={{fontSize: 20}}>关联回避</Chip>只用于 自我交易 · 商业机会 · 竞业</Enter>
            <Enter delay={224} style={{fontSize: 21, fontWeight: 750, color: C.ivory, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="river" style={{fontSize: 20}}>简易合并</Chip>母公司 90%+，股东会决议无实义 → 董事会决议</Enter>
          </div>
        </div>
        <div style={{width: 460, borderLeft: `3px dashed rgba(241,235,220,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={240} style={{fontSize: 22, fontWeight: 800, color: C.ivory, lineHeight: 1.8}}>两条河有各自的闸——<ThinU color={C.survey}>认河不认闸</ThinU></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const SurvivorVoteScene = () => (
  <Shell code="02" title="合并方的闸：七件大事要 2/3">
    <div data-layout="two-thirds-vote-dial" data-visual-anchor="timeline-gate" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="supermajority-seven-matters,vote-share-shortfall" data-focal-rule="the-surviving-company-still-needs-a-two-thirds-shareholders-vote-to-merge-and-fifty-five-percent-falls-short" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="surv-seven-matters" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 240, backgroundColor: C.ivory, border: `3px solid ${C.ink}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Landmark size={30} color={C.ink} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={27}>合并 · 修改章程 · 增减资本 …（七件大事）</LabelBlock>
        </Enter>
        <Enter delay={24} style={{marginTop: 16, fontSize: 24, fontWeight: 900, color: C.ink, lineHeight: 1.7}}>合并方天枫这一侧：股东会<SoftHi dark style={{fontSize: 23}}>2/3 以上表决权</SoftHi>——不能按人头糊弄</Enter>
        <Enter delay={42} style={{marginTop: 10, fontSize: 22, fontWeight: 750, color: C.ink, lineHeight: 1.7}}>简易合并只简化被合并方，<ThinU color={C.seal}>合并方的闸原样在</ThinU></Enter>
      </div>
      <div data-final-knowledge="surv-vote-dial" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 240, backgroundColor: C.panel, border: `3px solid ${C.buoy}`, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={58} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Vote size={28} color={C.buoy} style={{flexShrink: 0}} />
          <LabelBlock color={C.buoy} size={25}>天枫水尺 · 谁同意了？</LabelBlock>
        </Enter>
        <div style={{marginTop: 14, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={74} style={{fontSize: 22, fontWeight: 800, color: C.ivory, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="survey" style={{fontSize: 20, color: C.ink}}>甲 25%</Chip><Chip tone="survey" style={{fontSize: 20, color: C.ink}}>乙 30%</Chip><span>= 55% ＜ 2/3</span></Enter>
          <Enter delay={92} style={{marginTop: 4}}><Neg size={22}>A 「甲乙同意即可」——差丙那票，未达线</Neg></Enter>
        </div>
      </div>
      <div data-final-knowledge="surv-recap" style={{position: 'absolute', left: 0, right: 0, top: 266, height: 478, backgroundColor: C.ink, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={106} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.survey} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.ivory}}>闸位速记 · 谁开哪道闸</span>
          </Enter>
          <div style={{marginTop: 16, display: 'flex', flexDirection: 'column', gap: 14}}>
            <Enter delay={124} style={{fontSize: 22, fontWeight: 800, color: C.ivory, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="river" style={{fontSize: 21}}>被合并方 明华</Chip>
              <span>简易合并 → 张某董事会决议（B ✗）</span>
            </Enter>
            <Enter delay={142} style={{fontSize: 22, fontWeight: 800, color: C.ivory, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="river" style={{fontSize: 21}}>合并方 天枫</Chip>
              <span>股东会 2/3 → 甲乙 55% 不够（A ✗）</span>
            </Enter>
            <Enter delay={160} style={{fontSize: 22, fontWeight: 800, color: C.ivory, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="buoy" style={{fontSize: 21}}>少数股东 林某 8%</Chip>
              <span>通知＋回购权 → 见 03 场景（C/D）</span>
            </Enter>
          </div>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed rgba(241,235,220,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={180} style={{fontSize: 22, fontWeight: 800, color: C.ivory, lineHeight: 1.8}}>一句口诀：<ThinU color={C.survey}>谁的河谁的闸；简易只简被吞侧</ThinU></Enter>
          <Enter delay={196} style={{fontSize: 21, fontWeight: 750, color: 'rgba(241,235,220,0.66)', lineHeight: 1.7}}>母公司 92% 达标，是明华侧免开股东会的唯一原因</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const MinorityNoticeScene = () => (
  <Shell code="03" title="岸边救生梯：通知与回购权">
    <div data-layout="notice-buyout-desk" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="notice-right-preserved,buyout-parity-rule" data-focal-rule="simplified-procedure-never-cancels-notice-or-the-buyout-right-because-the-outcome-equals-a-shareholder-approved-merger" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="min-notice-board" style={{position: 'absolute', left: 0, top: 0, width: 864, height: 322, backgroundColor: C.panel, border: `3px solid ${C.buoy}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Bell size={30} color={C.buoy} style={{flexShrink: 0}} />
          <LabelBlock color={C.buoy} size={27}>第一档 · 通知不能省</LabelBlock>
        </Enter>
        <Enter delay={24} style={{marginTop: 14, fontSize: 23, fontWeight: 850, color: C.ivory, lineHeight: 1.8}}>简易合并简化的是<ThinU color={C.buoy}>决议机制</ThinU>——知情权<SoftHi style={{fontSize: 22}}>一点不能剥夺</SoftHi></Enter>
        <Enter delay={44} style={{marginTop: 8}}><Chip tone="buoy" style={{fontSize: 21}}>应通知林某（C 「无需通知」✗）</Chip></Enter>
      </div>
      <div data-final-knowledge="min-buyout-board" style={{position: 'absolute', left: 896, top: 0, width: 880, height: 322, backgroundColor: C.ivory, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={60} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <LifeBuoy size={30} color={C.ink} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={27}>第二档 · 回购救生梯</LabelBlock>
        </Enter>
        <Enter delay={78} style={{marginTop: 14, fontSize: 23, fontWeight: 850, color: C.ink, lineHeight: 1.8}}>简易合并的结果 ＝ 股东会决议合并 → 异议股东<ThinU color={C.seal}>有权合理价格回购</ThinU></Enter>
        <Enter delay={98} style={{marginTop: 8, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <Stamp delay={104} tone="buoy">D ✓ 当选</Stamp>
          <span style={{fontSize: 22, fontWeight: 800, color: C.ink}}>程序走捷径，权利不缩水</span>
        </Enter>
      </div>
      <div data-final-knowledge="min-recap-verdict" style={{position: 'absolute', left: 0, right: 0, top: 348, height: 396, backgroundColor: C.ink, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={116} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.survey} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.ivory}}>2025金题 · 全卷收束</span>
          </Enter>
          <div style={{marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12}}>
            <Enter delay={134} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Neg size={21}>A 甲乙 55% 未达 2/3</Neg></Enter>
            <Enter delay={150} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Neg size={21}>B 明华侧董事会决议即可</Neg></Enter>
            <Enter delay={166} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Neg size={21}>C 必须通知林某</Neg></Enter>
            <Enter delay={182} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Chip tone="jade" style={{fontSize: 21}}>D 林某有权回购 ✓</Chip><Stamp delay={190} tone="jade">正确答案 D</Stamp></Enter>
          </div>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed rgba(241,235,220,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={200} style={{fontSize: 23, fontWeight: 900, color: C.survey}}>速记三连</Enter>
          <Enter delay={214} style={{fontSize: 22, fontWeight: 750, color: C.ivory, lineHeight: 1.8}}>90% 开简化闸；2/3 守合并闸；<ThinU color={C.survey}>救生梯永远挂着</ThinU></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const CanyonConfluenceMerger = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-simplified-merger" {...SCENES.simplifiedMerger}><SimplifiedMergerScene /></TimelineSequence>
    <TimelineSequence name="02-survivor-vote" {...SCENES.survivorVote}><SurvivorVoteScene /></TimelineSequence>
    <TimelineSequence name="03-minority-notice" {...SCENES.minorityNotice}><MinorityNoticeScene /></TimelineSequence>
  </AbsoluteFill>
);
