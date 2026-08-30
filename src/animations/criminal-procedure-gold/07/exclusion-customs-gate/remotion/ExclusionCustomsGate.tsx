import {AbsoluteFill} from 'remotion';
import {Copy, FileText, FileWarning, FilterX, Hourglass, Repeat, Ruler, ScanFace, Search} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp, ThinU} from './theme';

export const ExclusionGateScene = () => (
  <Shell code="01" title="排非闸口：违禁品一律扣下">
    <div data-layout="exclusion-gate-lanes" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="seizure-list-lane,stage-fork-rules" data-focal-rule="torture-derived-confessions-and-their-repeats-are-seized-while-applicants-bring-clues-at-any-stage" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', right: 30, bottom: 16, opacity: 0.07, pointerEvents: 'none'}}><FilterX size={230} color={C.ivory} strokeWidth={1.1} /></div>
      <div data-final-knowledge="seizure-list-lane" style={{position: 'absolute', left: 0, top: 0, width: 900, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <FilterX size={30} color={C.seizure} style={{flexShrink: 0}} />
            <LabelBlock color={C.seizure} size={28}>必扣清单</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={16}><Chip tone="panel" style={{fontSize: 22}}>刑讯所得 · 一票否决</Chip></Enter>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={30} style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '11px 16px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Hourglass size={24} color={C.seizure} style={{flexShrink: 0}} />
            <Chip tone="seizure" style={{fontSize: 22}}>疲劳审讯</Chip>
            <span style={{fontSize: 22, fontWeight: 750, color: C.ivoryDim }}>视为变相刑讯 → 排除</span>
          </Enter>
          <Enter delay={44} style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '11px 16px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Search size={24} color={C.seizure} style={{flexShrink: 0}} />
            <Chip tone="seizure" style={{fontSize: 22}}>威胁 · only 对本人</Chip>
            <span style={{fontSize: 22, fontWeight: 750, color: C.ivoryDim }}>威胁证人 = 另行判断，供述只看对嫌犯</span>
          </Enter>
          <Enter delay={58} style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '11px 16px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Copy size={24} color={C.seizure} style={{flexShrink: 0}} />
            <Chip tone="seizure" style={{fontSize: 22}}>暴力灌水所得</Chip>
            <Chip tone="seizure" style={{fontSize: 22}}>受污染的重复供述</Chip>
          </Enter>
        </div>
        <div style={{border: `3px solid ${C.clearance}`, borderRadius: 10, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', backgroundColor: C.clearanceSoft}}>
          <Enter delay={76} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <span style={{fontSize: 23, fontWeight: 900, color: C.clearance }}>受污染前的那次供述</span>
            <Stamp delay={86} tone="clearance">第 1 次可保留</Stamp>
            <span style={{fontSize: 22, fontWeight: 800, color: C.ivory }}>第 2-4 次全扣</span>
          </Enter>
        </div>
        <Enter delay={100} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <FileWarning size={24} color={C.seizure} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.ivoryDim }}>2017-2021年题 · 排除范围年年考</span>
        </Enter>
      </div>
      <div style={{position: 'absolute', left: 924, top: 0, width: 852, height: 744, display: 'flex', flexDirection: 'column', gap: 14}}>
        <div data-final-knowledge="application-gate-card" style={{flex: 1, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Search size={28} color={C.brass} style={{flexShrink: 0}} />
            <LabelBlock color={C.brass} size={26}>申请闸 · 怎么递</LabelBlock>
          </Enter>
          <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
            <Enter delay={56} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="brass" style={{fontSize: 22}}>须提供线索或材料</Chip>
              <span style={{fontSize: 22, fontWeight: 750, color: C.ivoryDim }}>空口喊刑讯，闸门不开</span>
            </Enter>
            <Enter delay={68} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="slate" style={{fontSize: 22}}>侦查 · 审查起诉 · 审判</Chip>
              <span style={{fontSize: 22, fontWeight: 800, color: C.ivory }}>各阶段都能申请</span>
            </Enter>
            <Enter delay={80}><Neg size={22}>「只能在侦查机关提」＝错误</Neg></Enter>
          </div>
        </div>
        <div data-final-knowledge="supervision-fork-card" style={{flex: 1, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <Enter delay={96} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <FileText size={28} color={C.clearance} style={{flexShrink: 0}} />
            <LabelBlock color={C.clearance} size={26}>监察案件的特殊措辞</LabelBlock>
          </Enter>
          <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
            <Enter delay={112} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="clearance" style={{fontSize: 22}}>检察院对监察机关</Chip>
              <SoftHi tone="clearance" style={{fontSize: 23}}>「商请」配合</SoftHi>
            </Enter>
            <Enter delay={124}><Neg size={22}>说「调取」监察在案证据＝用词错误</Neg></Enter>
            <Enter delay={134} style={{fontSize: 22, fontWeight: 750, color: C.ivoryDim }}>一字的措辞差，就是命题点</Enter>
          </div>
        </div>
      </div>
    </div>
  </Shell>
);

export const DataConversionScene = () => (
  <Shell code="02" title="电子舱单与转关货：格式即合法性">
    <div data-layout="data-conversion-desk" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="manifest-checklist-lane,conversion-fork-rules" data-focal-rule="electronic-data-needs-records-and-lists-while-administrative-evidence-converts-in-kind-but-never-in-words" data-focal-channels="icon,contrast,annotation,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', left: 30, bottom: 16, opacity: 0.07, pointerEvents: 'none'}}><FileText size={230} color={C.ivory} strokeWidth={1.1} /></div>
      <div data-final-knowledge="electronic-manifest-card" style={{position: 'absolute', left: 0, top: 0, width: 900, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <FileText size={30} color={C.slate} style={{flexShrink: 0}} />
            <LabelBlock color={C.slate} size={28}>电子数据 · 舱单三件</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={16}><Chip tone="panel" style={{fontSize: 22}}>提取四环节全合规 ABCD</Chip></Enter>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={32} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <Chip tone="slate" style={{fontSize: 22}}>提取须笔录 ＋ 清单</Chip>
            <span style={{fontSize: 22, fontWeight: 750, color: C.ivoryDim }}>缺一即手续不全</span>
          </Enter>
          <Enter delay={44} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <Chip tone="clearance" style={{fontSize: 22}}>四环节合规示例</Chip>
            <span style={{fontSize: 22, fontWeight: 750, color: C.ivoryDim }}>扣押 · 封存 · 签名 · 见证一路齐全</span>
          </Enter>
        </div>
        <div style={{border: `3px dashed ${C.seizure}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 9}}>
          <Enter delay={60} style={{display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center'}}>
            <Neg size={22}>无签名 → 不补正</Neg>
            <Neg size={22}>无来源 → 排除</Neg>
          </Enter>
          <Enter delay={72} style={{display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center'}}>
            <Neg size={22}>篡改 → 必排除</Neg>
            <span style={{fontSize: 22, fontWeight: 750, color: C.ivoryDim }}>电子数据的红线比实物更硬</span>
          </Enter>
        </div>
        <Enter delay={88} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <FileWarning size={24} color={C.slate} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.ivoryDim }}>2022-2024年题 · 电子取证两连考</span>
        </Enter>
      </div>
      <div data-final-knowledge="administrative-conversion-card" style={{position: 'absolute', left: 924, top: 0, width: 852, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Repeat size={30} color={C.brass} style={{flexShrink: 0}} />
            <LabelBlock color={C.brass} size={28}>行政证据 · 转关规则</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={50}><Chip tone="panel" style={{fontSize: 22}}>实物转 · 言词重</Chip></Enter>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={64} style={{border: `3px solid ${C.clearance}`, borderRadius: 10, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Chip tone="clearance" style={{fontSize: 22}}>实物类</Chip>
            <Dash delay={74} style={{width: 40, borderTop: `4px solid ${C.clearance}`}} />
            <span style={{fontSize: 23, fontWeight: 900, color: C.ivory }}>可直接转化用作证据</span>
          </Enter>
          <Enter delay={86} style={{border: `3px solid ${C.seizure}`, borderRadius: 10, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Chip tone="seizure" style={{fontSize: 22}}>言词类</Chip>
            <Dash delay={96} style={{width: 40, borderTop: `4px solid ${C.seizure}`}} />
            <span style={{fontSize: 23, fontWeight: 900, color: C.ivory }}>须侦查人员重新收集</span>
          </Enter>
        </div>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px'}}>
          <Enter delay={106} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <span style={{fontSize: 22, fontWeight: 800, color: C.ivoryDim }}>记法：</span>
            <ThinU color={C.brass}>货物能过户，口供不能代办</ThinU>
            <span style={{fontSize: 22, fontWeight: 750, color: C.ivoryDim }}>——转化只认实物</span>
          </Enter>
        </div>
        <Enter delay={118} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <FileWarning size={24} color={C.brass} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.ivoryDim }}>2019-2023年题 · 转化规则三考</span>
        </Enter>
      </div>
    </div>
  </Shell>
);

export const ReviewCheckpointScene = () => (
  <Shell code="03" title="审查三道卡：解释 · 数量 · 红线">
    <div data-layout="review-checkpoints" data-visual-anchor="boundary" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="checkpoint-lane-triplet,redline-contrast-pair" data-focal-rule="explainable-procedure-flaws-pass-while-count-fixed-lineups-pass-and-tampered-evidence-never-passes" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', right: 30, bottom: 16, opacity: 0.07, pointerEvents: 'none'}}><Ruler size={230} color={C.ivory} strokeWidth={1.1} /></div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 0, height: 500, display: 'flex', gap: 14}}>
        <div data-final-knowledge="survey-checkpoint-card" style={{flex: 1, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Ruler size={28} color={C.brass} style={{flexShrink: 0}} />
            <LabelBlock color={C.brass} size={26}>勘验卡 · 程序瑕疵</LabelBlock>
          </Enter>
          <div style={{display: 'flex', flexDirection: 'column', gap: 9}}>
            <Enter delay={22} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="brass" style={{fontSize: 22}}>勘验程序违法</Chip>
              <Dash delay={30} style={{width: 36, borderTop: `4px solid ${C.brass}`}} />
              <SoftHi tone="clearance" style={{fontSize: 23}}>可作合理解释</SoftHi>
            </Enter>
            <Enter delay={40} style={{fontSize: 22, fontWeight: 750, color: C.ivoryDim }}>已全程录像并注明原因——解释成立则放行</Enter>
          </div>
        </div>
        <div data-final-knowledge="lineup-checkpoint-card" style={{flex: 1, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <ScanFace size={28} color={C.clearance} style={{flexShrink: 0}} />
            <LabelBlock color={C.clearance} size={26}>辨认卡 · 数量合规</LabelBlock>
          </Enter>
          <div style={{display: 'flex', flexDirection: 'column', gap: 9}}>
            <Enter delay={56} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="clearance" style={{fontSize: 22}}>辨认数量合规</Chip>
              <Stamp delay={66} tone="clearance">即合法</Stamp>
            </Enter>
            <Enter delay={74} style={{fontSize: 22, fontWeight: 750, color: C.ivoryDim }}>人数 · 照片张数达到法定底线即过关</Enter>
          </div>
        </div>
      </div>
      <div data-final-knowledge="redline-checkpoint-card" style={{position: 'absolute', left: 0, right: 0, top: 524, height: 220, backgroundColor: C.panel, border: `3px solid ${C.seizure}`, borderRadius: 14, padding: '16px 24px', display: 'flex', alignItems: 'center', gap: 24}}>
        <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={100} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <FileWarning size={28} color={C.seizure} style={{flexShrink: 0}} />
            <LabelBlock color={C.seizure} size={26}>红线卡 · 四说法全错</LabelBlock>
          </Enter>
          <Enter delay={116} style={{fontSize: 22, fontWeight: 750, color: C.ivoryDim }}>靠推测补签名 · 事后补来源 · 容忍篡改 · 混淆瑕疵与非法——一个都不能沾</Enter>
        </div>
        <div style={{width: 3, backgroundColor: C.panelLine}} />
        <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 12, justifyContent: 'center'}}>
          <Enter delay={128} style={{display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center'}}>
            <Stamp delay={134} tone="seizure">ABCD 全选</Stamp>
            <span style={{fontSize: 22, fontWeight: 800, color: C.ivory }}>审查判断题的送命题套路</span>
          </Enter>
          <Enter delay={144} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <FileWarning size={24} color={C.seizure} style={{flexShrink: 0}} />
            <span style={{fontSize: 22, fontWeight: 800, color: C.ivoryDim }}>2020-2024年题 · 审查三卡</span>
          </Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const ExclusionCustomsGate = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-exclusion-gate-lanes" {...SCENES.exclusionGateLanes}><ExclusionGateScene /></TimelineSequence>
    <TimelineSequence name="02-data-conversion-desk" {...SCENES.dataConversionDesk}><DataConversionScene /></TimelineSequence>
    <TimelineSequence name="03-review-checkpoints" {...SCENES.reviewCheckpoints}><ReviewCheckpointScene /></TimelineSequence>
  </AbsoluteFill>
);
