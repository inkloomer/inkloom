import {AbsoluteFill} from 'remotion';
import {Bell, FileBadge, FlaskConical, GraduationCap, MapPin, MessageSquareQuote, PenLine, Radio, ScanFace, Timer, Trash2} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp, ThinU} from './theme';

export const InterrogationRowScene = () => (
  <Shell code="01" title="讯问">
    <div data-layout="interrogation-row" data-visual-anchor="boundary" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="venue-rule-row,rights-checklist-row" data-focal-rule="interrogation-venue-turns-on-custody-status-and-rights-notices-never-drop-while-handwritten-statements-are-permitted" data-focal-channels="icon,contrast,connector,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', right: 30, bottom: 16, opacity: 0.07, pointerEvents: 'none'}}><MessageSquareQuote size={230} color={C.parchment} strokeWidth={1.1} /></div>
      <div data-final-knowledge="venue-rule-card" style={{position: 'absolute', left: 0, top: 0, width: 900, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <MapPin size={30} color={C.steel} style={{flexShrink: 0}} />
            <LabelBlock color={C.steel} size={28}>讯问地点</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={16}><Chip tone="panel" style={{fontSize: 22}}>看是否羁押</Chip></Enter>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={30} style={{border: `3px solid ${C.steel}`, borderRadius: 10, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Chip tone="steel" style={{fontSize: 22}}>羁押</Chip>
            <Dash delay={38} style={{width: 36, borderTop: `4px solid ${C.steel}`}} />
            <span style={{fontSize: 23, fontWeight: 900, color: C.parchment }}>在看守所内讯问</span>
          </Enter>
          <Enter delay={44} style={{border: `3px solid ${C.brass}`, borderRadius: 10, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Chip tone="brass" style={{fontSize: 22}}>不羁押</Chip>
            <Dash delay={52} style={{width: 36, borderTop: `4px solid ${C.brass}`}} />
            <span style={{fontSize: 23, fontWeight: 900, color: C.parchment }}>指定地点或者住处讯问</span>
          </Enter>
          <Enter delay={58} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <Chip tone="moss" style={{fontSize: 22}}>拘留不等待鉴定</Chip>
            <Chip tone="moss" style={{fontSize: 22 }}>近亲属任代理人：可经法院准许</Chip>
          </Enter>
        </div>
        <Enter delay={72} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.brass} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.parchmentDim }}>2016-2022年题 · 讯问地点与鉴定时点</span>
        </Enter>
      </div>
      <div data-final-knowledge="rights-checklist-card" style={{position: 'absolute', left: 924, top: 0, width: 852, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Bell size={30} color={C.moss} style={{flexShrink: 0}} />
            <LabelBlock color={C.moss} size={28}>讯问人员与权利告知</LabelBlock>
          </Enter>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={54} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <MessageSquareQuote size={24} color={C.moss} style={{flexShrink: 0}} />
            <Chip tone="moss" style={{fontSize: 22}}>讯问人员可换</Chip>
            <span style={{fontSize: 22, fontWeight: 800, color: C.parchment }}>权利告知不能少</span>
          </Enter>
          <Enter delay={66} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <PenLine size={24} color={C.brass} style={{flexShrink: 0}} />
            <Chip tone="brass" style={{fontSize: 22}}>请求自行书写供述</Chip>
            <Stamp delay={74} tone="brass">应当许可</Stamp>
          </Enter>
          <Enter delay={82} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Timer size={24} color={C.steel} style={{flexShrink: 0}} />
            <Chip tone="steel" style={{fontSize: 22}}>8 小时上限</Chip>
            <span style={{fontSize: 22, fontWeight: 750, color: C.parchmentDim }}>同一次讯问的时间红线</span>
          </Enter>
        </div>
        <div style={{border: `3px dashed ${C.tag}`, borderRadius: 10, padding: '12px 16px'}}>
          <Enter delay={96}><Neg size={22}>换人 ≠ 免告知——告知义务跟人走</Neg></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const AppraisalLineupScene = () => (
  <Shell code="02" title="鉴定 · 辨认">
    <div data-layout="appraisal-lineup-bench" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="appraisal-verdict-pair,lineup-mnemonic-rail" data-focal-rule="appraisal-opinions-are-mere-evidence-judged-by-the-court-and-identification-runs-individually-with-ten-photos" data-focal-channels="icon,contrast,annotation,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', left: 30, bottom: 16, opacity: 0.07, pointerEvents: 'none'}}><FlaskConical size={230} color={C.parchment} strokeWidth={1.1} /></div>
      <div data-final-knowledge="appraisal-card" style={{position: 'absolute', left: 0, top: 0, width: 880, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <FlaskConical size={30} color={C.brass} style={{flexShrink: 0}} />
            <LabelBlock color={C.brass} size={28}>鉴定意见</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={16}><Chip tone="panel" style={{fontSize: 22 }}>证据种类之一</Chip></Enter>
        </div>
        <div style={{border: `3px solid ${C.brass}`, borderRadius: 10, padding: '14px 18px', backgroundColor: 'rgba(200,162,88,0.08)'}}>
          <Enter delay={30} style={{fontSize: 25, fontWeight: 950, color: C.parchment }}>鉴定意见<ThinU color={C.brass}>只是证据</ThinU></Enter>
          <Enter delay={40} style={{marginTop: 10, fontSize: 23, fontWeight: 900, color: C.parchment }}>取舍权在<span style={{color: C.brass }}>法官</span></Enter>
        </div>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <Enter delay={56} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Chip tone="tag" style={{fontSize: 22 }}>拘留不等待鉴定</Chip>
            <span style={{fontSize: 22, fontWeight: 750, color: C.parchmentDim }}>鉴定未毕不阻强制措施</span>
          </Enter>
        </div>
        <Enter delay={70} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.brass} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.parchmentDim }}>2017年题 · 鉴定意见地位</span>
        </Enter>
      </div>
      <div data-final-knowledge="lineup-mnemonic-card" style={{position: 'absolute', left: 904, top: 0, width: 872, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <ScanFace size={30} color={C.moss} style={{flexShrink: 0}} />
            <LabelBlock color={C.moss} size={28}>辨认口诀</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={50}><Chip tone="panel" style={{fontSize: 22 }}>四句齐记</Chip></Enter>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={64} style={{border: `3px solid ${C.moss}`, borderRadius: 10, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <ScanFace size={24} color={C.moss} style={{flexShrink: 0}} />
            <Chip tone="moss" style={{fontSize: 22 }}>犯罪嫌疑人只能被认</Chip>
            <span style={{fontSize: 21, fontWeight: 750, color: C.parchmentDim }}>不能充当辨认人</span>
          </Enter>
          <Enter delay={76} style={{border: `3px solid ${C.brass}`, borderRadius: 10, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Chip tone="brass" style={{fontSize: 22 }}>对象：人 · 物 · 所 · 尸</Chip>
            <span style={{fontSize: 21, fontWeight: 750, color: C.parchmentDim }}>场所尸体也在列</span>
          </Enter>
          <Enter delay={88} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Chip tone="steel" style={{fontSize: 22 }}>个别进行</Chip>
            <Chip tone="steel" style={{fontSize: 22 }}>照片十张</Chip>
            <span style={{fontSize: 21, fontWeight: 750, color: C.parchmentDim }}>混杂辨认的数量要求</span>
          </Enter>
        </div>
        <Enter delay={102} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.moss} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.parchmentDim }}>2018-2023年题 · 辨认程序四连</span>
        </Enter>
      </div>
    </div>
  </Shell>
);

export const TechSurveillanceScene = () => (
  <Shell code="03" title="技术侦查 · 核准追诉">
    <div data-layout="tech-surveillance-gate" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="three-partition-rule,reenact-approach-rail" data-focal-rule="technical-investigation-separates-decision-from-execution-and-prosecutor-approved-reinvestigation-bars-prosecution-only" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', right: 30, bottom: 16, opacity: 0.07, pointerEvents: 'none'}}><Radio size={230} color={C.parchment} strokeWidth={1.1} /></div>
      <div data-final-knowledge="three-partition-card" style={{position: 'absolute', left: 0, top: 0, width: 900, height: 400, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Radio size={30} color={C.steel} style={{flexShrink: 0}} />
            <LabelBlock color={C.steel} size={28}>技术侦查 · 三区分</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={16}><Chip tone="panel" style={{fontSize: 22 }}>逐条对号</Chip></Enter>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={30} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Chip tone="steel" style={{fontSize: 22 }}>决定与实施分离</Chip>
            <Chip tone="steel" style={{fontSize: 22 }}>范围不限四类案件</Chip>
            <Chip tone="steel" style={{fontSize: 22 }}>无关材料销毁</Chip>
          </Enter>
          <Enter delay={44} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Trash2 size={24} color={C.tag} style={{flexShrink: 0}} />
            <span style={{fontSize: 22, fontWeight: 800, color: C.parchment }}>与本案无关的材料：</span>
            <SoftHi tone="tag" style={{fontSize: 23 }}>必须销毁</SoftHi>
          </Enter>
        </div>
      </div>
      <div data-final-knowledge="evidence-reapproval-card" style={{position: 'absolute', left: 924, top: 0, width: 852, height: 400, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <FileBadge size={30} color={C.moss} style={{flexShrink: 0}} />
            <LabelBlock color={C.moss} size={26}>技侦证据的使用</LabelBlock>
          </Enter>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={56} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <Chip tone="moss" style={{fontSize: 22 }}>可用而不必转化</Chip>
            <Chip tone="moss" style={{fontSize: 22 }}>涉密可保护</Chip>
          </Enter>
          <Enter delay={68} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <Chip tone="tag" style={{fontSize: 22 }}>变更对象 · 变更种类</Chip>
            <Stamp delay={78} tone="tag">一律重新报批</Stamp>
          </Enter>
        </div>
      </div>
      <div data-final-knowledge="approach-rail-card" style={{position: 'absolute', left: 0, right: 0, top: 424, height: 320, backgroundColor: C.panel, border: `3px solid ${C.tag}`, borderRadius: 14, padding: '16px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={92} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <FileBadge size={30} color={C.tag} style={{flexShrink: 0}} />
            <LabelBlock color={C.tag} size={28}>核准追诉 · 最高检核准</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={102}><Chip tone="panel" style={{fontSize: 22 }}>核准前后的三件事</Chip></Enter>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <Enter delay={116}><Chip tone="moss" style={{fontSize: 23 }}>侦查照常进行</Chip></Enter>
          <Dash delay={124} style={{width: 36, borderTop: `4px solid ${C.moss}`}} />
          <Enter delay={130}><Chip tone="brass" style={{fontSize: 23 }}>强制措施可以上</Chip></Enter>
          <Dash delay={138} style={{width: 36, borderTop: `4px solid ${C.tag}`}} />
          <Enter delay={144}><Chip tone="tag" style={{fontSize: 23 }}>起诉禁止</Chip></Enter>
          <span style={{flex: 1}} />
          <Enter delay={152}><Stamp delay={160} tone="brass">不停侦 · 不起诉</Stamp></Enter>
        </div>
        <Enter delay={174} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.brass} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.parchmentDim }}>2024-2025年题 · 技侦与核准追诉各一</span>
        </Enter>
      </div>
    </div>
  </Shell>
);

export const InvestigationFieldKit = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-interrogation-row" {...SCENES.interrogationRow}><InterrogationRowScene /></TimelineSequence>
    <TimelineSequence name="02-appraisal-lineup-bench" {...SCENES.appraisalLineupBench}><AppraisalLineupScene /></TimelineSequence>
    <TimelineSequence name="03-tech-surveillance-gate" {...SCENES.techSurveillanceGate}><TechSurveillanceScene /></TimelineSequence>
  </AbsoluteFill>
);
