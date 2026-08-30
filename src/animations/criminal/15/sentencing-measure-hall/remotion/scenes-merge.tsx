import {BrickWall, Clock, GraduationCap, Hourglass, Scale, Users, Zap} from 'lucide-react';
import {Chip, C, Enter, LabelBlock, Neg, Shell, SoftHi, ThinU, VatTitle} from './kit';

export const MergeProbationTrackScene = () => (
  <Shell code="05" title="数罪并罚·缓刑">
    <div data-layout="merge-probation-track-yard" data-visual-anchor="timeline-gate" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="merge-three-principles,probation-success-fail-fork" data-focal-rule="missed-crime-merges-old-new-new-crime-may-break-the-cap" data-focal-channels="icon,contrast,enclosure,connector" style={{position: 'absolute', inset: 0}}>
      <Hourglass size={130} color={C.ink} style={{position: 'absolute', left: 26, bottom: 330, opacity: 0.08}} />
      <div data-final-knowledge="merge-board" style={{position: 'absolute', left: 0, top: 0, width: 1050, height: 380, backgroundColor: C.white, border: `4px solid ${C.indigo}`, borderRadius: 8, padding: '14px 20px'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Scale size={24} color={C.indigo} />
          <LabelBlock size={23} color={C.indigo}>并罚三原则 · 附加刑仍须执行</LabelBlock>
        </Enter>
        <div style={{marginTop: 10, display: 'flex', gap: 10}}>
          <div data-final-knowledge="merge-absorb" style={{flex: 1, border: `3px solid ${C.indigo}`, borderRadius: 8, padding: '8px 12px'}}>
            <div style={{fontSize: 18, fontWeight: 900, color: C.indigo, display: 'flex', alignItems: 'center', gap: 6}}><Zap size={18} color={C.indigo} style={{flexShrink: 0}} />吸收：死吸全·无吸全·有吸拘</div>
          </div>
          <div data-final-knowledge="merge-limit" style={{flex: 1.3, border: `3px solid ${C.turmeric}`, borderRadius: 8, padding: '8px 12px'}}>
            <div style={{fontSize: 18, fontWeight: 900, display: 'flex', alignItems: 'center', gap: 6}}><Hourglass size={18} color={C.turmeric} style={{flexShrink: 0}} />限制加重：有期 20/25（35年界）·拘役1年·管制3年</div>
          </div>
          <div data-final-knowledge="merge-parallel" style={{flex: 1.1, border: `3px solid ${C.madder}`, borderRadius: 8, padding: '8px 12px'}}>
            <div style={{fontSize: 18, fontWeight: 900, color: C.madder, display: 'flex', alignItems: 'center', gap: 6}}><BrickWall size={18} color={C.madder} style={{flexShrink: 0}} />并科：管制不能被吸收·最后执行</div>
          </div>
        </div>
        <Enter delay={34} style={{marginTop: 10, fontSize: 18, fontWeight: 700, color: C.inkSoft }}>附加刑同种累加（剥政1+3＝4·罚金5+10＝15万）·异种分别执行（罚金×没收∉互吸）</Enter>
        <Enter delay={46} style={{marginTop: 8, display: 'flex', gap: 10, flexWrap: 'wrap'}}>
          <Chip tone="indigo" style={{fontSize: 18, whiteSpace: 'normal'}}>漏罪 → 先并后减（旧账一起算·不超上限）</Chip>
          <Chip tone="madder" style={{fontSize: 18, whiteSpace: 'normal'}}>新罪 → 先减后并（可能突破上限·倒挂时按下限23年执行）</Chip>
          <Chip tone="turmeric" style={{fontSize: 18, whiteSpace: 'normal'}}>既漏又新 → 先并后减再并</Chip>
        </Enter>
      </div>

      <div data-final-knowledge="probation-board" style={{position: 'absolute', left: 1074, top: 0, width: 702, height: 380, backgroundColor: C.white, border: `4px solid ${C.calm}`, borderRadius: 8, padding: '14px 18px'}}>
        <Enter delay={12}><LabelBlock size={23} color={C.calm}>缓刑 · 暂缓执行的留观缸</LabelBlock></Enter>
        <div style={{marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6}}>
          <Enter delay={26} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft, display: 'flex', alignItems: 'center', gap: 8 }}><Users size={18} color={C.calm} style={{flexShrink: 0}} />对象：3年以下有期·拘役（并罚决定3年以下也可）；累犯·首要分子∉</Enter>
          <Enter delay={38} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft, display: 'flex', alignItems: 'center', gap: 8 }}><Clock size={18} color={C.calm} style={{flexShrink: 0}} />考验期从判决确定之日·羁押不折抵；只适用于主刑；可附禁止令·必须社区矫正</Enter>
          <Enter delay={50} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft, display: 'flex', alignItems: 'center', gap: 8 }}><GraduationCap size={18} color={C.calm} style={{flexShrink: 0}} />18周岁·孕妇·75周岁满足条件＝应当宣告（累犯仍∉）</Enter>
          <Enter delay={62} style={{fontSize: 18, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 8 }}><Scale size={18} color={C.mordant} style={{flexShrink: 0 }} />成功＝不再执行（≠执行完毕→不构成累犯）</Enter>
        </div>
      </div>

      <div data-final-knowledge="revoke-floor" style={{position: 'absolute', left: 0, right: 0, top: 404, bottom: 0, backgroundColor: C.white, border: `3px double ${C.ink}`, borderRadius: 8, padding: '14px 22px'}}>
        <Enter delay={74}><LabelBlock ink size={23}>撤销缓刑三情形</LabelBlock></Enter>
        <div style={{marginTop: 8, display: 'flex', gap: 12}}>
          <Enter delay={86} style={{flex: 1, border: `3px solid ${C.indigo}`, borderRadius: 8, padding: '8px 12px'}}>
            <div style={{fontSize: 18, fontWeight: 900 }}>漏罪（考验期内发现）</div>
            <div style={{marginTop: 4, fontSize: 17, fontWeight: 700, color: C.inkSoft }}>撤销→数罪并罚（考验期不算已执行·无「减」）；符合条件可再缓刑；<ThinU>期满后才发现＝不能撤</ThinU>·另行起诉</div>
          </Enter>
          <Enter delay={98} style={{flex: 1, border: `3px solid ${C.madder}`, borderRadius: 8, padding: '8px 12px'}}>
            <div style={{fontSize: 18, fontWeight: 900 }}>又犯新罪（考验期内）</div>
            <div style={{marginTop: 4, fontSize: 17, fontWeight: 700, color: C.inkSoft }}>并罚后即使3年以下也不能再缓刑；期满后犯新罪＝不撤·也不构成累犯</div>
          </Enter>
          <Enter delay={110} style={{flex: 1, border: `3px solid ${C.turmeric}`, borderRadius: 8, padding: '8px 12px'}}>
            <div style={{fontSize: 18, fontWeight: 900 }}>违反规定·情节严重</div>
            <div style={{marginTop: 4, fontSize: 17, fontWeight: 700, color: C.inkSoft }}>撤销缓刑·执行原判刑罚</div>
          </Enter>
        </div>
      </div>
    </div>
  </Shell>
);
