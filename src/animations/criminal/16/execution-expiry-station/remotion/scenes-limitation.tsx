import {Ban, Clock, GraduationCap, Hourglass, Landmark, Scale, Users, Zap} from 'lucide-react';
import {Chip, C, Enter, LabelBlock, Neg, RingTitle, Shell, SoftHi, ThinU} from './kit';

export const LimitationPeriodLadderScene = () => (
  <Shell code="04" title="追诉时效·期限与计算">
    <div data-layout="limitation-period-ladder" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="term-grade-ladder,layer-max-rule" data-focal-rule="limitation-runs-from-crime-completion-to-trial-by-tier-maximum" data-focal-channels="icon,contrast,enclosure,connector" style={{position: 'absolute', inset: 0}}>
      <Hourglass size={130} color={C.ink} style={{position: 'absolute', right: 30, top: 140, opacity: 0.08}} />
      <div style={{position: 'absolute', left: 0, top: 0, width: 900}}>
        <div data-final-knowledge="term-ladder" style={{backgroundColor: C.white, border: `3px solid ${C.bark}`, borderRadius: 8, padding: '14px 18px'}}>
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10}}>
            <Clock size={22} color={C.bark} style={{flexShrink: 0}} />
            <LabelBlock size={23} color={C.bark}>期限表 · 按法定最高刑分档</LabelBlock>
          </Enter>
          <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
            <div data-final-knowledge="term-5"><Enter delay={18} style={{display: 'flex', alignItems: 'center', gap: 10, border: `3px solid ${C.moss}`, borderRadius: 8, padding: '8px 12px'}}>
              <Chip tone="moss" style={{fontSize: 18, width: 210, justifyContent: 'center'}}>法定最高刑不满5年</Chip>
              <span style={{fontSize: 19, fontWeight: 900 }}>时效 5 年</span>
            </Enter></div>
            <div data-final-knowledge="term-10"><Enter delay={28} style={{display: 'flex', alignItems: 'center', gap: 10, border: `3px solid ${C.moss}`, borderRadius: 8, padding: '8px 12px'}}>
              <Chip tone="moss" style={{fontSize: 18, width: 210, justifyContent: 'center'}}>5年以上不满10年</Chip>
              <span style={{fontSize: 19, fontWeight: 900 }}>时效 10 年</span>
            </Enter></div>
            <div data-final-knowledge="term-15"><Enter delay={38} style={{display: 'flex', alignItems: 'center', gap: 10, border: `3px solid ${C.saw}`, borderRadius: 8, padding: '8px 12px'}}>
              <Chip tone="saw" style={{fontSize: 18, width: 210, justifyContent: 'center'}}>10年以上有期徒刑</Chip>
              <span style={{fontSize: 19, fontWeight: 900 }}>时效 15 年</span>
            </Enter></div>
            <div data-final-knowledge="term-20"><Enter delay={48} style={{display: 'flex', alignItems: 'center', gap: 10, border: `3px solid ${C.brand}`, borderRadius: 8, padding: '8px 12px'}}>
              <Chip tone="brand" style={{fontSize: 18, width: 210, justifyContent: 'center'}}>无期·死刑</Chip>
              <span style={{fontSize: 19, fontWeight: 900 }}>时效 20 年＋<ThinU>特别追诉</ThinU></span>
            </Enter></div>
          </div>
        </div>
        <div data-final-knowledge="theft-tiers" style={{marginTop: 12, backgroundColor: C.white, border: `3px dashed ${C.bark}`, borderRadius: 8, padding: '10px 14px'}}>
          <Enter delay={60} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft }}>「法定最高刑」＝<ThinU>量刑档次</ThinU>的最高刑：盗窃较大→3年档·时效5；巨大→10年档·时效15；特别巨大→无期档·时效20</Enter>
        </div>
      </div>

      <div style={{position: 'absolute', left: 924, top: 0, width: 852}}>
        <div data-final-knowledge="special-prosecute-board" style={{backgroundColor: C.brandSoft, border: `3px solid ${C.brand}`, borderRadius: 8, padding: '12px 16px'}}>
          <Enter delay={14} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <Landmark size={22} color={C.brand} style={{flexShrink: 0}} />
            <LabelBlock size={22} color={C.brand}>特别追诉 · 南京碎尸案（2024 真凶落网）</LabelBlock>
          </Enter>
          <Enter delay={26} style={{marginTop: 8, fontSize: 18, fontWeight: 700, color: C.inkSoft }}>无期·死刑档 20 年后认为必须追诉 → 报<ThinU>最高人民检察院</ThinU>核准；其他档次时效一过<Neg size={17}>没有救济</Neg></Enter>
        </div>
        <div data-final-knowledge="special-cases-board" style={{marginTop: 12, backgroundColor: C.white, border: `3px solid ${C.moss}`, borderRadius: 8, padding: '12px 16px'}}>
          <Enter delay={38} style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8}}>
            <Users size={20} color={C.moss} style={{flexShrink: 0}} />
            <LabelBlock size={22} color={C.moss}>三个特殊 · 各算各的账</LabelBlock>
          </Enter>
          <div style={{display: 'flex', flexDirection: 'column', gap: 6}}>
            <Enter delay={50} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft, display: 'flex', alignItems: 'center', gap: 8 }}><Scale size={17} color={C.moss} style={{flexShrink: 0 }} />单位犯罪一律 5 年（法定刑只有罚金）·直接责任人按自然人算</Enter>
            <Enter delay={60} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft, display: 'flex', alignItems: 'center', gap: 8 }}><Users size={17} color={C.moss} style={{flexShrink: 0 }} />共同犯罪分别计算（主犯20年仍追·从犯15年已过∉）</Enter>
            <Enter delay={70} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft, display: 'flex', alignItems: 'center', gap: 8 }}><Zap size={17} color={C.moss} style={{flexShrink: 0 }} />想象竞合·牵连：轻罪已过重罪未过 → 只追重罪</Enter>
          </div>
        </div>
        <div data-final-knowledge="compute-board" style={{marginTop: 12, backgroundColor: C.white, border: `3px double ${C.ink}`, borderRadius: 8, padding: '12px 16px'}}>
          <Enter delay={82} style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6}}>
            <GraduationCap size={20} color={C.bark} style={{flexShrink: 0}} />
            <span style={{fontSize: 19, fontWeight: 900 }}>起算＝犯罪成立之日 · 截止＝审判之日</span>
          </Enter>
          <Enter delay={94} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft }}>故意犯→行为/危险即成立；过失犯→实害结果才成立；<ThinU>连续犯·继续犯从行为终了之日</ThinU>（2025·非法持枪）</Enter>
        </div>
      </div>
    </div>
  </Shell>
);
