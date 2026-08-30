import {Ban, DoorClosed, GraduationCap, ShieldCheck, Users, Zap} from 'lucide-react';
import {Chip, C, Enter, LabelBlock, Neg, RingTitle, Shell, SoftHi, ThinU} from './kit';

export const ParoleGateQuadsScene = () => (
  <Shell code="02" title="假释·闸口与禁区">
    <div data-layout="parole-gate-quads" data-visual-anchor="boundary" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="gate-ban-pairs,grade-time-table" data-focal-rule="parole-opens-only-for-felons-who-reformed-and-served-the-floor" data-focal-channels="icon,contrast,enclosure,connector" style={{position: 'absolute', inset: 0}}>
      <DoorClosed size={130} color={C.ink} style={{position: 'absolute', left: 24, bottom: 330, opacity: 0.08}} />
      <div style={{position: 'absolute', left: 0, top: 0, width: 876}}>
        <div style={{display: 'flex', gap: 12}}>
          <div data-final-knowledge="gate-object" style={{flex: 1, backgroundColor: C.white, border: `3px solid ${C.moss}`, borderRadius: 8, padding: '10px 14px'}}>
            <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 8}}><ShieldCheck size={20} color={C.moss} style={{flexShrink: 0}} /><Chip tone="moss" style={{fontSize: 20}}>对象</Chip></Enter>
            <Enter delay={14} style={{marginTop: 6, fontSize: 19, fontWeight: 800, color: C.inkSoft }}>无期·有期徒刑；<Neg size={18}>管制·拘役不能假释</Neg></Enter>
          </div>
          <div data-final-knowledge="gate-banned" style={{flex: 1.3, backgroundColor: C.white, border: `3px solid ${C.brand}`, borderRadius: 8, padding: '10px 14px'}}>
            <Enter delay={12} style={{display: 'flex', alignItems: 'center', gap: 8}}><Ban size={20} color={C.brand} style={{flexShrink: 0}} /><Chip tone="brand" style={{fontSize: 20}}>绝对禁止两类人</Chip></Enter>
            <Enter delay={22} style={{marginTop: 6, fontSize: 18, fontWeight: 700, color: C.inkSoft }}>累犯；8种罪（烧杀淫掠·绑组暴投）且判10年以上/无期</Enter>
          </div>
        </div>
        <div data-final-knowledge="gate-combo-table" style={{marginTop: 12, backgroundColor: C.white, border: `3px solid ${C.bark}`, borderRadius: 8, padding: '10px 14px'}}>
          <Enter delay={32} style={{fontSize: 19, fontWeight: 900, marginBottom: 8 }}>数罪并罚三情形（判10年以上才触发禁区）</Enter>
          <div style={{display: 'flex', flexDirection: 'column', gap: 6}}>
            <Enter delay={42} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft, display: 'flex', alignItems: 'center', gap: 8 }}><Zap size={16} color={C.moss} style={{flexShrink: 0 }} />8种(&lt;10年)＋非8种 → 并罚≥10年 → <span style={{fontWeight: 900, color: C.moss }}>可以假释</span>（抢8+盗7=13∈）</Enter>
            <Enter delay={52} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft, display: 'flex', alignItems: 'center', gap: 8 }}><Zap size={16} color={C.brand} style={{flexShrink: 0 }} />8种(≥10年)＋其他 → <span style={{fontWeight: 900, color: C.brand }}>不得假释</span>（抢11+盗7=13∉）</Enter>
            <Enter delay={62} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft, display: 'flex', alignItems: 'center', gap: 8 }}><Zap size={16} color={C.brand} style={{flexShrink: 0 }} />两个8种(&lt;10年) → <span style={{fontWeight: 900, color: C.brand }}>不得假释</span>（抢8+强7=13∉）</Enter>
          </div>
        </div>
      </div>

      <div data-final-knowledge="substance-board" style={{position: 'absolute', left: 900, top: 0, width: 876, height: 380, backgroundColor: C.white, border: `4px solid ${C.bark}`, borderRadius: 8, padding: '14px 20px'}}>
        <Enter delay={18}><LabelBlock size={23} color={C.bark}>实质条件 · 悔改的证明题</LabelBlock></Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8}}>
          <div data-final-knowledge="substance-three-crimes"><Enter delay={30} style={{border: `3px solid ${C.brand}`, borderRadius: 8, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <Users size={20} color={C.brand} style={{flexShrink: 0 }} />
            <span style={{fontSize: 18, fontWeight: 700, color: C.inkSoft }}>职务犯罪·金融破坏金融诈骗·黑社会——不积极退赃退赔赔偿 → <Neg size={17}>不认定悔改·不予假释</Neg></span>
          </Enter></div>
          <div data-final-knowledge="substance-property"><Enter delay={42} style={{border: `3px solid ${C.brand}`, borderRadius: 8, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <GraduationCap size={20} color={C.brand} style={{flexShrink: 0 }} />
            <span style={{fontSize: 18, fontWeight: 700, color: C.inkSoft }}>不缴纳罚金案：财产刑确有能力而不履行 → <Neg size={17}>一般不予假释</Neg></span>
          </Enter></div>
          <div data-final-knowledge="substance-appeal"><Enter delay={54} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft, display: 'flex', alignItems: 'center', gap: 8 }}><Ban size={18} color={C.moss} style={{flexShrink: 0 }} />正当申诉≠不认罪悔罪·依法保护；考验期必须社区矫正；死缓犯：两类人不得假释·其他人可以</Enter></div>
        </div>
      </div>

      <div data-final-knowledge="grade-time-board" style={{position: 'absolute', left: 0, right: 0, top: 404, bottom: 0, backgroundColor: C.white, border: `3px double ${C.ink}`, borderRadius: 8, padding: '12px 22px'}}>
        <Enter delay={74}><LabelBlock ink size={22}>已执行刑期 · 考验期（起算：判决执行日·生效日·死缓期满日｜羁押：有期折抵·无期死缓不折）</LabelBlock></Enter>
        <div style={{marginTop: 8, display: 'flex', gap: 12, flexWrap: 'wrap'}}>
          <Enter delay={86}><Chip tone="moss" style={{fontSize: 18, whiteSpace: 'normal'}}>有期：执行 1/2 以上｜考验期＝剩余刑期（假释之日起）</Chip></Enter>
          <Enter delay={96}><Chip tone="bark" style={{fontSize: 18, whiteSpace: 'normal' }}>无期：执行 13 年以上｜考验期 10 年</Chip></Enter>
          <Enter delay={106}><Chip tone="brand" style={{fontSize: 18, whiteSpace: 'normal'}}>普通死缓：执行 15 年以上｜减无期考验10年·减有期考验剩余刑期</Chip></Enter>
          <Enter delay={116}><Chip tone="saw" style={{fontSize: 18, whiteSpace: 'normal'}}>例外：特殊情况经最高人民法院核准不受限；假释一般不得再减刑</Chip></Enter>
        </div>
      </div>
    </div>
  </Shell>
);
