import {BrickWall, DoorClosed, Gavel, Hourglass, Landmark, Maximize2, Users} from 'lucide-react';
import {Chip, C, Enter, LabelBlock, Neg, Shell, SoftHi, StaveTitle, ThinU} from './kit';

export const MainPenaltyLadderScene = () => (
  <Shell code="01" title="主刑·五级音阶">
    <div data-layout="five-stave-ladder-board" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="penalty-grade-stave,duo-rule-strip" data-focal-rule="main-penalties-climb-from-limited-freedom-to-life" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Maximize2 size={130} color={C.ink} style={{position: 'absolute', right: 30, top: 120, opacity: 0.08}} />
      <div data-final-knowledge="stave-rules" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 96, backgroundColor: C.indigoSoft, border: `3px solid ${C.indigo}`, borderRadius: 8, display: 'flex', alignItems: 'center', gap: 16, padding: '0 22px'}}>
        <Enter delay={6}><LabelBlock size={24} color={C.indigo}>主刑两特点</LabelBlock></Enter>
        <Enter delay={18} style={{fontSize: 22, fontWeight: 800}}>只能<ThinU>独立适用</ThinU>·一个罪只能配<SoftHi style={{fontSize: 21}}>一个主刑</SoftHi></Enter>
      </div>

      <div style={{position: 'absolute', left: 0, top: 120, width: 1776, display: 'flex', alignItems: 'flex-end', gap: 16}}>
        <div data-final-knowledge="stave-step-control" style={{flex: 1, height: 150, backgroundColor: C.white, border: `3px solid ${C.calm}`, borderRadius: 8, padding: '10px 12px'}}>
          <Enter delay={12} style={{display: 'flex', alignItems: 'center', gap: 8}}><Users size={20} color={C.calm} style={{flexShrink: 0}} /><Chip tone="calm" style={{fontSize: 21}}>管制</Chip></Enter>
          <Enter delay={20} style={{marginTop: 6, fontSize: 18, fontWeight: 800, color: C.inkSoft}}>限制自由刑</Enter>
          <Enter delay={26} style={{marginTop: 4, fontSize: 18, fontWeight: 900}}>3月-2年-并罚3年</Enter>
          <Enter delay={32} style={{marginTop: 4, fontSize: 16, fontWeight: 700, color: C.inkSoft}}>不关押·社区矫正·同工同酬</Enter>
        </div>
        <div data-final-knowledge="stave-step-detention" style={{flex: 1, height: 200, backgroundColor: C.white, border: `3px solid ${C.calm}`, borderRadius: 8, padding: '10px 12px'}}>
          <Enter delay={22} style={{display: 'flex', alignItems: 'center', gap: 8}}><DoorClosed size={20} color={C.calm} style={{flexShrink: 0}} /><Chip tone="calm" style={{fontSize: 21}}>拘役</Chip></Enter>
          <Enter delay={30} style={{marginTop: 6, fontSize: 18, fontWeight: 800, color: C.inkSoft}}>短期自由刑</Enter>
          <Enter delay={36} style={{marginTop: 4, fontSize: 18, fontWeight: 900}}>1月-6月-并罚1年</Enter>
          <Enter delay={42} style={{marginTop: 4, fontSize: 16, fontWeight: 700, color: C.inkSoft}}>公安·看守所·可酌量给报酬</Enter>
        </div>
        <div data-final-knowledge="stave-step-fixed" style={{flex: 1, height: 250, backgroundColor: C.white, border: `3px solid ${C.indigo}`, borderRadius: 8, padding: '10px 12px'}}>
          <Enter delay={32} style={{display: 'flex', alignItems: 'center', gap: 8}}><BrickWall size={20} color={C.indigo} style={{flexShrink: 0}} /><Chip tone="indigo" style={{fontSize: 21}}>有期徒刑</Chip></Enter>
          <Enter delay={40} style={{marginTop: 6, fontSize: 18, fontWeight: 800, color: C.inkSoft}}>长期自由刑</Enter>
          <Enter delay={46} style={{marginTop: 4, fontSize: 18, fontWeight: 900}}>6月-15年-并罚20/25年</Enter>
          <Enter delay={52} style={{marginTop: 4, fontSize: 16, fontWeight: 700, color: C.inkSoft}}>监狱·强制劳动·羁押1抵1</Enter>
        </div>
        <div data-final-knowledge="stave-step-life" style={{flex: 1, height: 300, backgroundColor: C.white, border: `3px solid ${C.indigo}`, borderRadius: 8, padding: '10px 12px'}}>
          <Enter delay={42} style={{display: 'flex', alignItems: 'center', gap: 8}}><Hourglass size={20} color={C.indigo} style={{flexShrink: 0}} /><Chip tone="indigo" style={{fontSize: 21}}>无期徒刑</Chip></Enter>
          <Enter delay={50} style={{marginTop: 6, fontSize: 18, fontWeight: 800, color: C.inkSoft}}>长期自由刑</Enter>
          <Enter delay={56} style={{marginTop: 4, fontSize: 18, fontWeight: 900}}>终身·必附剥政终身</Enter>
          <Enter delay={62} style={{marginTop: 4, fontSize: 16, fontWeight: 700, color: C.inkSoft}}>监狱·自由刑中最严厉</Enter>
        </div>
        <div data-final-knowledge="stave-step-death" style={{flex: 1, height: 350, backgroundColor: C.white, border: `3px solid ${C.accent}`, borderRadius: 8, padding: '10px 12px'}}>
          <Enter delay={52} style={{display: 'flex', alignItems: 'center', gap: 8}}><Gavel size={20} color={C.accent} style={{flexShrink: 0}} /><Chip tone="accent" style={{fontSize: 21}}>死刑</Chip></Enter>
          <Enter delay={60} style={{marginTop: 6, fontSize: 18, fontWeight: 800, color: C.inkSoft}}>生命刑</Enter>
          <Enter delay={66} style={{marginTop: 4, fontSize: 18, fontWeight: 900}}>立即执行·缓期2年</Enter>
          <Enter delay={72} style={{marginTop: 4, fontSize: 16, fontWeight: 700, color: C.inkSoft}}>最高法核准·三类人不适用</Enter>
        </div>
      </div>

      <div data-final-knowledge="stave-duo-strip" style={{position: 'absolute', left: 0, right: 0, top: 520, bottom: 0, backgroundColor: C.calmSoft, border: `3px solid ${C.calm}`, borderRadius: 8, display: 'flex', alignItems: 'center', gap: 16, padding: '0 22px'}}>
        <Enter delay={64} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Landmark size={24} color={C.calm} />
          <LabelBlock size={23} color={C.calm}>速记阶梯</LabelBlock>
        </Enter>
        <Enter delay={76} style={{fontSize: 21, fontWeight: 800, color: C.inkSoft}}>期限口诀 3-2-3（管制）·1-6-1（拘役）·6月-15年（有期）；起算均从<ThinU>判决执行之日</ThinU>；羁押折抵：管制1抵2·拘役有期1抵1</Enter>
      </div>
    </div>
  </Shell>
);
