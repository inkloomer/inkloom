import {Flag, Gavel, Hourglass, Milestone, Scale} from 'lucide-react';
import {Chip, C, Enter, LabelBlock, Neg, Shell, SoftHi, StaveTitle, ThinU} from './kit';

export const DeathReviewTrackScene = () => (
  <Shell code="03" title="死缓·四岔轨道">
    <div data-layout="death-suspend-four-track" data-visual-anchor="timeline-gate" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="suspend-four-branch,restrict-reduce-gate" data-focal-rule="two-year-suspension-resolves-by-conduct-into-three-lanes" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <Hourglass size={130} color={C.ink} style={{position: 'absolute', left: 26, bottom: 320, opacity: 0.08}} />
      <div data-final-knowledge="suspend-start-strip" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 92, backgroundColor: C.accentSoft, border: `3px solid ${C.accent}`, borderRadius: 8, display: 'flex', alignItems: 'center', gap: 16, padding: '0 22px'}}>
        <Enter delay={6}><LabelBlock size={24} color={C.accent}>死缓 2 年期间</LabelBlock></Enter>
        <Enter delay={18} style={{fontSize: 21, fontWeight: 700, color: C.inkSoft}}>从<ThinU>判决确定之日</ThinU>起算·判决前羁押<Neg size={19}>不计入</Neg>；减为有期徒刑后从期满之日起算</Enter>
      </div>

      <div style={{position: 'absolute', left: 0, top: 116, width: 1776, display: 'flex', gap: 16}}>
        <div data-final-knowledge="track-no-crime" style={{flex: 1, backgroundColor: C.white, border: `3px solid ${C.calm}`, borderRadius: 8, padding: '12px 14px'}}>
          <Enter delay={26} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <Scale size={22} color={C.calm} style={{flexShrink: 0}} />
            <Chip tone="calm" style={{fontSize: 20}}>没有故意犯罪</Chip>
          </Enter>
          <Enter delay={36} style={{marginTop: 8, fontSize: 19, fontWeight: 900}}>2年期满 → 减为无期徒刑</Enter>
        </div>
        <div data-final-knowledge="track-merit" style={{flex: 1, backgroundColor: C.white, border: `3px solid ${C.calm}`, borderRadius: 8, padding: '12px 14px'}}>
          <Enter delay={32} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <Milestone size={22} color={C.calm} style={{flexShrink: 0}} />
            <Chip tone="calm" style={{fontSize: 20}}>重大立功表现</Chip>
          </Enter>
          <Enter delay={42} style={{marginTop: 8, fontSize: 19, fontWeight: 900}}>2年期满 → 减为 25 年有期徒刑</Enter>
        </div>
        <div data-final-knowledge="track-executed" style={{flex: 1, backgroundColor: C.white, border: `3px solid ${C.accent}`, borderRadius: 8, padding: '12px 14px'}}>
          <Enter delay={38} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <Gavel size={22} color={C.accent} style={{flexShrink: 0}} />
            <Chip tone="accent" style={{fontSize: 20}}>故意犯罪·情节恶劣</Chip>
          </Enter>
          <Enter delay={48} style={{marginTop: 8, fontSize: 19, fontWeight: 900}}>报最高法核准 → 执行死刑</Enter>
        </div>
        <div data-final-knowledge="track-restart" style={{flex: 1, backgroundColor: C.white, border: `3px solid ${C.indigo}`, borderRadius: 8, padding: '12px 14px'}}>
          <Enter delay={44} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <Flag size={22} color={C.indigo} style={{flexShrink: 0}} />
            <Chip tone="indigo" style={{fontSize: 20}}>故意犯罪未执行死刑</Chip>
          </Enter>
          <Enter delay={54} style={{marginTop: 8, fontSize: 19, fontWeight: 900}}>死缓期间重新计算·报最高法备案</Enter>
        </div>
      </div>

      <div data-final-knowledge="restrict-reduce-board" style={{position: 'absolute', left: 0, top: 330, width: 1050, height: 220, backgroundColor: C.white, border: `3px solid ${C.indigo}`, borderRadius: 8, padding: '14px 20px'}}>
        <Enter delay={66}><LabelBlock size={23} color={C.indigo}>可限制减刑的两类严重死缓犯</LabelBlock></Enter>
        <Enter delay={78} style={{marginTop: 10, display: 'flex', gap: 10, flexWrap: 'wrap'}}>
          <Chip tone="indigo" style={{fontSize: 20}}>累犯</Chip>
          <Chip tone="indigo" style={{fontSize: 20, whiteSpace: 'normal'}}>故意杀人·强奸·抢劫·绑架·放火·爆炸·投放危险物质 / 有组织的暴力性犯罪</Chip>
        </Enter>
      </div>

      <div data-final-knowledge="procedure-board" style={{position: 'absolute', left: 1074, top: 330, width: 702, height: 220, backgroundColor: C.white, border: `3px double ${C.ink}`, borderRadius: 8, padding: '14px 20px'}}>
        <Enter delay={70}><LabelBlock ink size={23}>程序 · 谁核准</LabelBlock></Enter>
        <Enter delay={84} style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Chip tone="accent" style={{fontSize: 20, whiteSpace: 'normal'}}>死刑立即执行 → 最高人民法院核准</Chip>
          <Chip tone="calm" style={{fontSize: 20, whiteSpace: 'normal'}}>死缓 → 高级人民法院判决或核准</Chip>
        </Enter>
      </div>
    </div>
  </Shell>
);
