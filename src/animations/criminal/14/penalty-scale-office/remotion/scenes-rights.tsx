import {Ban, FileText, Plane, ScrollText, Users} from 'lucide-react';
import {Chip, C, Enter, LabelBlock, Neg, Shell, SoftHi, StaveTitle, ThinU} from './kit';

export const RightsDeportNonpenalScene = () => (
  <Shell code="05" title="剥政·驱逐·非刑罚措施">
    <div data-layout="rights-deport-nonpenal-triptych" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="rights-start-four-ways,dirty-vs-clean-split" data-focal-rule="political-rights-start-by-host-penalty-and-64-takes-dirty-not-clean" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <ScrollText size={130} color={C.ink} style={{position: 'absolute', right: 26, bottom: 320, opacity: 0.08}} />
      <div data-final-knowledge="rights-board" style={{position: 'absolute', left: 0, top: 0, width: 876, height: 500, backgroundColor: C.white, border: `4px solid ${C.indigo}`, borderRadius: 8, padding: '14px 20px'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <ScrollText size={26} color={C.indigo} />
          <LabelBlock size={24} color={C.indigo}>剥夺政治权利 · 必附两类＋起算四情形</LabelBlock>
        </Enter>
        <Enter delay={20} style={{marginTop: 8, fontSize: 19, fontWeight: 700, color: C.inkSoft }}>必附：主刑死刑·无期徒刑者；危害国家安全犯罪分子（独立适用与附加适用不能并存）</Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8}}>
          <div data-final-knowledge="rights-start-control"><Enter delay={34} style={{border: `3px solid ${C.calm}`, borderRadius: 8, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 10}}>
            <Users size={20} color={C.calm} style={{flexShrink: 0}} />
            <span style={{fontSize: 19, fontWeight: 800}}>附加管制 → 刑期与管制相同·<ThinU>同步起算同步执行</ThinU></span>
          </Enter></div>
          <div data-final-knowledge="rights-start-detention"><Enter delay={46} style={{border: `3px solid ${C.calm}`, borderRadius: 8, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 10}}>
            <Users size={20} color={C.calm} style={{flexShrink: 0}} />
            <span style={{fontSize: 19, fontWeight: 800}}>附加拘役·有期 → 1-5年·从执行完毕/假释之日起算（执行期间剥夺但不计刑期·拘役无假释）</span>
          </Enter></div>
          <div data-final-knowledge="rights-start-death"><Enter delay={58} style={{border: `3px solid ${C.accent}`, borderRadius: 8, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 10}}>
            <Ban size={20} color={C.accent} style={{flexShrink: 0}} />
            <span style={{fontSize: 19, fontWeight: 800}}>附加死刑·无期 → 终身剥夺</span>
          </Enter></div>
        </div>
        <Enter delay={72} style={{marginTop: 10, fontSize: 18, fontWeight: 700, color: C.inkSoft }}>诀窍：「管」字带官→同步；「拘」字隔离→出来再算；减刑时剥政可酌减·不少于1年</Enter>
      </div>

      <div data-final-knowledge="deport-board" style={{position: 'absolute', left: 900, top: 0, width: 876, height: 220, backgroundColor: C.white, border: `4px solid ${C.calm}`, borderRadius: 8, padding: '14px 20px'}}>
        <Enter delay={12} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Plane size={26} color={C.calm} />
          <LabelBlock size={24} color={C.calm}>驱逐出境 · 只适用于外国人</LabelBlock>
        </Enter>
        <Enter delay={26} style={{marginTop: 8, display: 'flex', gap: 10, flexWrap: 'wrap'}}>
          <Chip tone="calm" style={{fontSize: 19, whiteSpace: 'normal'}}>独立适用：情节轻·无需主刑</Chip>
          <Chip tone="calm" style={{fontSize: 19, whiteSpace: 'normal'}}>附加适用：主刑执行完毕后驱逐</Chip>
        </Enter>
      </div>

      <div data-final-knowledge="nonpenal-board" style={{position: 'absolute', left: 900, top: 244, width: 876, height: 256, backgroundColor: C.white, border: `3px solid ${C.clef}`, borderRadius: 8, padding: '14px 20px'}}>
        <Enter delay={18} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Ban size={26} color={C.accent} />
          <LabelBlock size={23} color={C.accent}>从业禁止（第37条之一）三要素</LabelBlock>
        </Enter>
        <Enter delay={32} style={{marginTop: 8, fontSize: 19, fontWeight: 700, color: C.inkSoft }}>利用职业便利/违背职业义务犯罪 → 禁止 3-5 年</Enter>
        <Enter delay={44} style={{marginTop: 6, display: 'flex', flexDirection: 'column', gap: 6}}>
          <Chip tone="accent" style={{fontSize: 18, whiteSpace: 'normal'}}>起算＝主刑执行完毕/假释之日——不含剥政执行完毕（2016·9）</Chip>
          <Chip style={{fontSize: 18, whiteSpace: 'normal'}}>违反→公安处罚·情节严重→拒不执行判决裁定罪</Chip>
        </Enter>
      </div>

      <div data-final-knowledge="dirty-clean-floor" style={{position: 'absolute', left: 0, right: 0, top: 524, bottom: 0, backgroundColor: C.calmSoft, border: `3px double ${C.ink}`, borderRadius: 8, padding: '12px 22px'}}>
        <Enter delay={88} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <FileText size={24} color={C.calm} />
          <LabelBlock ink size={23}>第64条三措施 vs 没收财产 · 收脏物 ≠ 收净财</LabelBlock>
        </Enter>
        <Enter delay={100} style={{marginTop: 8, display: 'flex', gap: 10, flexWrap: 'wrap'}}>
          <Chip tone="calm" style={{fontSize: 18, whiteSpace: 'normal'}}>追缴（尚存）·责令退赔（已挥霍）·返还被害人；违法所得按行为时·收益按案发时（赌输的不算）</Chip>
          <Chip tone="accent" style={{fontSize: 18, whiteSpace: 'normal'}}>供犯罪所用本人财物＝有通常性才没收：黑头套∈·皮鞋∉·100万SUV∉·多次醉驾∈</Chip>
        </Enter>
      </div>
    </div>
  </Shell>
);
