import {Ban, DoorClosed, GraduationCap, Hourglass, KeyRound, ShieldCheck, Users} from 'lucide-react';
import {Chip, C, Enter, LabelBlock, Neg, Shell, SoftHi, ThinU, VatTitle} from './kit';

export const RecidivistGateQuadsScene = () => (
  <Shell code="02" title="累犯·四闸合验">
    <div data-layout="recidivist-gate-quads" data-visual-anchor="boundary" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="ordinary-four-gates,special-three-crimes" data-focal-rule="recidivism-needs-intent-adult-felony-grade-and-five-years" data-focal-channels="icon,contrast,enclosure,connector" style={{position: 'absolute', inset: 0}}>
      <KeyRound size={130} color={C.ink} style={{position: 'absolute', right: 28, bottom: 330, opacity: 0.08}} />
      <div style={{position: 'absolute', left: 0, top: 0, width: 1050}}>
        <div style={{display: 'flex', gap: 12}}>
          <div data-final-knowledge="gate-intent" style={{flex: 1, backgroundColor: C.white, border: `3px solid ${C.madder}`, borderRadius: 8, padding: '10px 14px'}}>
            <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 8}}><Ban size={20} color={C.madder} style={{flexShrink: 0}} /><Chip tone="madder" style={{fontSize: 20}}>① 主观</Chip></Enter>
            <Enter delay={14} style={{marginTop: 6, fontSize: 19, fontWeight: 800, color: C.inkSoft }}>前后罪都必须是故意犯罪</Enter>
          </div>
          <div data-final-knowledge="gate-age" style={{flex: 1, backgroundColor: C.white, border: `3px solid ${C.turmeric}`, borderRadius: 8, padding: '10px 14px'}}>
            <Enter delay={12} style={{display: 'flex', alignItems: 'center', gap: 8}}><Users size={20} color={C.turmeric} style={{flexShrink: 0}} /><Chip tone="turmeric" style={{fontSize: 20}}>② 年龄</Chip></Enter>
            <Enter delay={20} style={{marginTop: 6, fontSize: 19, fontWeight: 800, color: C.inkSoft }}>前后罪都已满 18（首罪未满＝∉）</Enter>
          </div>
        </div>
        <div style={{marginTop: 12, display: 'flex', gap: 12}}>
          <div data-final-knowledge="gate-grade" style={{flex: 1, backgroundColor: C.white, border: `3px solid ${C.indigo}`, borderRadius: 8, padding: '10px 14px'}}>
            <Enter delay={18} style={{display: 'flex', alignItems: 'center', gap: 8}}><ShieldCheck size={20} color={C.indigo} style={{flexShrink: 0}} /><Chip tone="indigo" style={{fontSize: 20}}>③ 刑度</Chip></Enter>
            <Enter delay={26} style={{marginTop: 6, fontSize: 19, fontWeight: 800, color: C.inkSoft }}>前后罪都应判有期徒刑以上（危险驾驶最高拘役∉·危险驾驶案）</Enter>
          </div>
          <div data-final-knowledge="gate-time" style={{flex: 1, backgroundColor: C.white, border: `3px solid ${C.mordant}`, borderRadius: 8, padding: '10px 14px'}}>
            <Enter delay={24} style={{display: 'flex', alignItems: 'center', gap: 8}}><Hourglass size={20} color={C.mordant} style={{flexShrink: 0}} /><Chip tone="mordant" style={{fontSize: 20, color: C.white}}>④ 时间</Chip></Enter>
            <Enter delay={32} style={{marginTop: 6, fontSize: 19, fontWeight: 800, color: C.inkSoft }}>前罪主刑执行完毕或赦免后 5 年内（释放当日再犯∈·含特赦）</Enter>
          </div>
        </div>
        <div data-final-knowledge="front-crime-scope" style={{marginTop: 12, backgroundColor: C.white, border: `3px dashed ${C.mordant}`, borderRadius: 8, padding: '10px 14px'}}>
          <Enter delay={40} style={{fontSize: 19, fontWeight: 900}}>「前罪刑罚」＝主刑执行完毕：不含拘役·管制·附加刑（是否执行完毕在所不问）</Enter>
          <Enter delay={52} style={{marginTop: 6, display: 'flex', flexDirection: 'column', gap: 4}}>
            <span style={{fontSize: 18, fontWeight: 700, color: C.inkSoft }}>假释：考验期内犯新罪∉（并罚）；期满后∈·5年从<ThinU>假释期满之日</ThinU>起算</span>
            <span style={{fontSize: 18, fontWeight: 700, color: C.inkSoft }}>缓刑：考验期内∉·期满后再犯也∉（成功缓刑＝不再执行≠执行完毕）</span>
          </Enter>
        </div>
      </div>

      <div data-final-knowledge="special-board" style={{position: 'absolute', left: 1074, top: 0, width: 702, height: 400, backgroundColor: C.white, border: `4px solid ${C.indigo}`, borderRadius: 8, padding: '14px 18px'}}>
        <Enter delay={30} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <DoorClosed size={24} color={C.indigo} style={{flexShrink: 0}} />
          <LabelBlock size={23} color={C.indigo}>特殊累犯 · 三类罪任一类</LabelBlock>
        </Enter>
        <Enter delay={42} style={{marginTop: 8, display: 'flex', gap: 8, flexWrap: 'wrap'}}>
          <Chip tone="indigo" style={{fontSize: 19}}>危害国家安全</Chip>
          <Chip tone="indigo" style={{fontSize: 19}}>恐怖活动</Chip>
          <Chip tone="indigo" style={{fontSize: 19}}>黑社会性质组织</Chip>
        </Enter>
        <Enter delay={54} style={{marginTop: 8, fontSize: 18, fontWeight: 700, color: C.inkSoft }}>前后罪不要求同类；<ThinU>不要求刑度·不要求5年</ThinU>（任何时候）；缓刑期满∉·数罪中拘役未执行∉</Enter>
      </div>

      <div data-final-knowledge="consequence-board" style={{position: 'absolute', left: 1074, top: 424, width: 702, height: 320, backgroundColor: C.madderSoft, border: `3px solid ${C.madder}`, borderRadius: 8, padding: '14px 18px'}}>
        <Enter delay={60}><LabelBlock size={23} color={C.madder}>累犯的法律后果 · 四条</LabelBlock></Enter>
        <Enter delay={72} style={{marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6}}>
          <span style={{fontSize: 19, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 8}}><GraduationCap size={18} color={C.madder} style={{flexShrink: 0}} />应当从重处罚</span>
          <span style={{fontSize: 19, fontWeight: 800 }}>不能适用缓刑 · 不能适用假释</span>
          <span style={{fontSize: 19, fontWeight: 800 }}>死缓犯 → 可以限制减刑</span>
        </Enter>
      </div>
    </div>
  </Shell>
);
