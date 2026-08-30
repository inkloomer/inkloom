import {Ban, Clock, Pause, RotateCcw, Scale, ShieldCheck} from 'lucide-react';
import {Chip, C, Enter, LabelBlock, Neg, RingTitle, Shell, SoftHi, ThinU} from './kit';

export const ExtensionInterruptionTrackScene = () => (
  <Shell code="05" title="时效的延长·中断·两高权力">
    <div data-layout="extension-interruption-track" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="pause-vs-restart-track,supreme-powers-table" data-focal-rule="escape-or-refusal-pauses-the-clock-new-crime-restarts-it" data-focal-channels="icon,contrast,enclosure,connector" style={{position: 'absolute', inset: 0}}>
      <Pause size={130} color={C.ink} style={{position: 'absolute', left: 26, bottom: 330, opacity: 0.08}} />
      <div style={{position: 'absolute', left: 0, top: 0, width: 1050}}>
        <div style={{display: 'flex', gap: 12}}>
          <div data-final-knowledge="extend-board" style={{flex: 1, backgroundColor: C.white, border: `4px solid ${C.brand}`, borderRadius: 8, padding: '12px 16px'}}>
            <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 8}}>
              <Pause size={22} color={C.brand} style={{flexShrink: 0}} />
              <LabelBlock size={22} color={C.brand}>延长 · 表停不走</LabelBlock>
            </Enter>
            <div style={{marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6}}>
              <div data-final-knowledge="extend-escape"><Enter delay={18} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft, display: 'flex', alignItems: 'center', gap: 8 }}><Ban size={16} color={C.brand} style={{flexShrink: 0 }} />立案/受理后<ThinU>逃避侦查审判</ThinU>→ 不受时效限制（误以为无罪去打工∉逃避）</Enter></div>
              <div data-final-knowledge="extend-complaint"><Enter delay={28} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft, display: 'flex', alignItems: 'center', gap: 8 }}><ShieldCheck size={16} color={C.brand} style={{flexShrink: 0 }} />被害人在<ThinU>追诉期限内</ThinU>控告·应立案而不立案 → 不受限（过期限才报案∈受限）</Enter></div>
              <div data-final-knowledge="extend-new-crime"><Enter delay={38} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft }}>新罪仍受时效限制——各算各的账</Enter></div>
            </div>
          </div>
          <div data-final-knowledge="interrupt-board" style={{flex: 1, backgroundColor: C.white, border: `4px solid ${C.moss}`, borderRadius: 8, padding: '12px 16px'}}>
            <Enter delay={12} style={{display: 'flex', alignItems: 'center', gap: 8}}>
              <RotateCcw size={22} color={C.moss} style={{flexShrink: 0}} />
              <LabelBlock size={22} color={C.moss}>中断 · 回拨重走</LabelBlock>
            </Enter>
            <div style={{marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6}}>
              <div data-final-knowledge="interrupt-rule"><Enter delay={24} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft }}>追诉期内又犯新罪 → 前罪时效从犯后罪之日重新起算（A罪15年·第8年犯B罪→A重新走15年）</Enter></div>
              <div data-final-knowledge="interrupt-notes"><Enter delay={34} style={{fontSize: 17, fontWeight: 700, color: C.inkSoft }}>共犯互不影响·牵连被目的罪中断·后罪到期只追前罪·与延长并存只适用延长·后罪须我国管辖·新旧法从旧兼从轻</Enter></div>
            </div>
          </div>
        </div>
        <div data-final-knowledge="example-floor" style={{marginTop: 12, backgroundColor: C.sawSoft, border: `3px solid ${C.saw}`, borderRadius: 8, padding: '10px 16px'}}>
          <Enter delay={46} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft, display: 'flex', alignItems: 'center', gap: 10 }}>
            <Clock size={20} color={C.bark} style={{flexShrink: 0}} />
            <span>2000.1 抢劫（15年）→ 2005.1 盗窃（5年）→ 抢劫从 2005.1 重算；2012.1 盗窃已过·<SoftHi style={{fontSize: 17}}>只追抢劫</SoftHi></span>
          </Enter>
        </div>
      </div>

      <div data-final-knowledge="supreme-powers-board" style={{position: 'absolute', left: 1074, top: 0, width: 702, height: 744, backgroundColor: C.white, border: `4px double ${C.ink}`, borderRadius: 8, padding: '14px 18px'}}>
        <Enter delay={20} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Scale size={24} color={C.bark} style={{flexShrink: 0}} />
          <LabelBlock size={23}>两高的特殊权力</LabelBlock>
        </Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 10}}>
          <div data-final-knowledge="power-reduce"><Enter delay={32} style={{border: `3px solid ${C.saw}`, borderRadius: 8, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <Chip tone="saw" style={{fontSize: 17}}>特别减轻</Chip>
            <span style={{fontSize: 17, fontWeight: 700, color: C.inkSoft }}>无法定情节欲减轻 → <ThinU>最高人民法院</ThinU>核准（第63条）</span>
          </Enter></div>
          <div data-final-knowledge="power-parole"><Enter delay={44} style={{border: `3px solid ${C.saw}`, borderRadius: 8, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <Chip tone="saw" style={{fontSize: 17}}>特别假释</Chip>
            <span style={{fontSize: 17, fontWeight: 700, color: C.inkSoft }}>特殊情况不受执行刑期限制 → <ThinU>最高人民法院</ThinU>核准</span>
          </Enter></div>
          <div data-final-knowledge="power-prosecute"><Enter delay={56} style={{border: `3px solid ${C.moss}`, borderRadius: 8, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <Chip tone="moss" style={{fontSize: 17}}>特别追诉</Chip>
            <span style={{fontSize: 17, fontWeight: 700, color: C.inkSoft }}>无期死刑20年后必须追诉 → <ThinU>最高人民检察院</ThinU>核准</span>
          </Enter></div>
          <div data-final-knowledge="power-minor"><Enter delay={68} style={{border: `3px solid ${C.moss}`, borderRadius: 8, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <Chip tone="moss" style={{fontSize: 17 }}>12-14周岁追诉</Chip>
            <span style={{fontSize: 17, fontWeight: 700, color: C.inkSoft }}>故意杀人·伤害致死或以特别残忍手段致人重伤严重残疾·情节恶劣 → <ThinU>最高人民检察院</ThinU>核准追诉</span>
          </Enter></div>
        </div>
        <Enter delay={82} style={{marginTop: 12, fontSize: 18, fontWeight: 700, color: C.inkSoft }}>记忆：司法减假归法院·追诉大权归检院</Enter>
      </div>
    </div>
  </Shell>
);
