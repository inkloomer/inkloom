import type {ReactNode} from 'react';
import {FileWarning, Gavel, Landmark, Scale, ShieldX, Stamp, Users} from 'lucide-react';
import {C, Chip, Enter, GateFlash, LabelBlock, Mover, Neg, Panel, Path, Shell, SoftHi, TabChip, ThinU} from './kit';

export const LawsuitExecutionScene = () => {
  /* data-final-knowledge="fake-suit-flow" data-final-knowledge="suit-completion-gate" data-final-knowledge="suit-count-floor" data-final-knowledge="refuse-execution-lane" */
  return (
    <Shell code="09" kicker="第二节 · 妨害司法罪收尾" title="虚假诉讼罪·拒不执行判决裁定罪">
      <div
        data-layout="lawsuit-execution-flow"
        data-visual-anchor="flow-path"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="fake-suit-flow,suit-completion-gate,suit-count-floor,refuse-execution-lane"
        data-focal-rule="a-fabricated-lawsuit-token-passes-the-court-gates-into-completion-then-forks-into-count-rules-while-the-execution-token-stops-at-the-refusal-gate"
        data-focal-channels="icon,connector,contrast,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="fake-suit-flow" style={{position: 'absolute', left: 0, top: 0, width: 1050, height: 540}}>
          <Panel tone={C.navy} watermark={<FileWarning size={160} color={C.navy} strokeWidth={1.6} />} style={{height: '100%', padding: '10px 16px', display: 'flex', flexDirection: 'column', gap: 6}}>
            <TabChip tone={C.navy} icon={<FileWarning size={24} color={C.white} strokeWidth={2.2} />}>虚假诉讼罪（第307条之一）· 诉讼流</TabChip>
            <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, fontSize: 21, fontWeight: 800, color: C.ink}}>
              <span data-stateful-source="suit-token"><Chip tone="night"><Stamp size={20} color={C.white} strokeWidth={2.2} />捏造的事实</Chip></span>
              <Path color={C.navy} delay={46} span={16} style={{position: 'relative', width: 50, height: 4}} />
              <Chip tone="navy">提起虚假的民事诉讼</Chip>
              <Neg size={20}>仲裁不属于诉讼</Neg>
              <Neg size={20}>行政诉讼不算</Neg>
              <ThinU color={C.navy}>执行程序属于诉讼的一部分</ThinU>
            </div>
            <div style={{display: 'flex', gap: 8}}>
              <div style={{flex: 1, backgroundColor: C.white, border: `3px solid ${C.navy}`, padding: '6px 10px', fontSize: 20, fontWeight: 800, color: C.ink, lineHeight: 1.42}}>
                <b style={{color: C.navy}}>完全假 vs 部分假（欠条30万改80万）：</b><SoftHi>多数说</SoftHi>"虚假"要求完全假 → 不构成本罪；<SoftHi>少数说</SoftHi>只要求部分假 → 构成本罪
              </div>
              <div style={{flex: 1, backgroundColor: C.white, border: `3px solid ${C.gold}`, padding: '6px 10px', fontSize: 20, fontWeight: 800, color: C.ink, lineHeight: 1.42}}>
                <div><b style={{color: C.gold}}>隐瞒债务已全部清偿仍起诉还债：</b>该隐瞒事实构成虚假诉讼罪</div>
                <div>该种隐瞒事实<b style={{color: C.gold}}>视为捏造事实</b></div>
              </div>
            </div>
            <div data-final-knowledge="suit-completion-gate" data-stateful-terminal="suit-token" style={{position: 'relative', height: 128, flexShrink: 0, backgroundColor: C.white, border: `2px dashed ${C.ghost}`}}>
              <GateFlash delay={78} tone={C.navy} style={{position: 'absolute', left: 14, top: 14, backgroundColor: C.white, border: `3px solid ${C.navy}`, padding: '5px 12px', fontSize: 22, fontWeight: 950, color: C.navy}}>法院受理后 · 既遂闸门</GateFlash>
              <Path color={C.navy} delay={92} span={14} style={{position: 'absolute', left: 300, top: 40, width: 120, height: 4}} />
              <GateFlash delay={104} tone={C.pine} style={{position: 'absolute', left: 424, top: 14, width: 280, backgroundColor: C.white, border: `3px solid ${C.pine}`, padding: '5px 10px', fontSize: 20, fontWeight: 800, color: C.pine}}>①采取财产保全或行为保全措施</GateFlash>
              <GateFlash delay={118} tone={C.pine} style={{position: 'absolute', left: 424, top: 74, width: 280, backgroundColor: C.white, border: `3px solid ${C.pine}`, padding: '5px 10px', fontSize: 20, fontWeight: 800, color: C.pine}}>②开庭审理</GateFlash>
              <Mover delay={52} span={28} fromX={0} toX={330} fadeAt={122} style={{position: 'absolute', left: 20, top: 60, zIndex: 3}}>
                <Chip tone="navy"><Stamp size={20} color={C.white} strokeWidth={2.2} />虚假诉状</Chip>
              </Mover>
              <div style={{position: 'absolute', right: 10, top: 8, width: 292, display: 'flex', flexDirection: 'column', gap: 6, fontSize: 20, fontWeight: 800, color: C.ink, lineHeight: 1.38}}>
                <div><b style={{color: C.pine}}>妨害司法秩序或者严重侵害他人合法权益</b>＝既遂条件</div>
                <div><SoftHi>多数说</SoftHi>满足任一条件即既遂（2023）；少数说：法院受理便既遂</div>
              </div>
            </div>
            <div data-final-knowledge="suit-count-floor" style={{display: 'flex', flexDirection: 'column', gap: 5, flexShrink: 0, fontSize: 20, fontWeight: 800, color: C.ink, lineHeight: 1.42, marginTop: 'auto'}}>
              <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8}}>
                <Chip tone="navy">罪数①：</Chip>
                <span>以非法占有为目的提起虚假民事诉讼，法官受骗判决胜诉 → 一个行为同时触犯虚假诉讼罪和<SoftHi>诈骗罪</SoftHi>，想象竞合择一重</span>
              </div>
              <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8}}>
                <Chip tone="crimson">罪数②（2021）：</Chip>
                <span>与法官勾结：针对司法秩序法益触犯虚假诉讼罪、<SoftHi>民事枉法裁判罪</SoftHi>；针对被害人财产触犯<SoftHi>盗窃罪</SoftHi>（非法转移占有）——想象竞合，择一重罪论处</span>
              </div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={40} marker="refuse-execution-lane" style={{position: 'absolute', left: 1074, top: 0, width: 702, height: 470}}>
          <Panel tone={C.crimson} watermark={<Gavel size={150} color={C.crimson} strokeWidth={1.6} />} style={{height: '100%', padding: '10px 16px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <TabChip tone={C.crimson} icon={<Gavel size={24} color={C.white} strokeWidth={2.2} />}>拒不执行判决、裁定罪（第313条）</TabChip>
            <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, fontSize: 21, fontWeight: 800, color: C.ink}}>
              <span data-stateful-source="execution-token"><Chip tone="night"><Scale size={20} color={C.white} strokeWidth={2.2} />判决、裁定生效</Chip></span>
              <Path color={C.crimson} delay={70} span={16} vertical thickness={5} style={{position: 'relative', width: 4, height: 34}} />
              <GateFlash delay={84} tone={C.crimson} style={{border: `3px solid ${C.crimson}`, backgroundColor: C.white, padding: '4px 10px', fontSize: 22, fontWeight: 950, color: C.crimson}}>有能力执行而拒不执行 · 情节严重</GateFlash>
            </div>
            <div data-stateful-terminal="execution-token" style={{display: 'flex', flexDirection: 'column', gap: 6, flexShrink: 0, fontSize: 20, fontWeight: 800, color: C.ink, lineHeight: 1.42}}>
              <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8}}>
                <Chip tone="crimson">情形一：</Chip><span>通过<SoftHi>隐瞒、转移、毁损</SoftHi>财产，拒不执行</span>
              </div>
              <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8}}>
                <Chip tone="crimson">情形二：</Chip><span>故意<SoftHi>放弃债权</SoftHi>、故意<SoftHi>延长到期债权</SoftHi>，拒不执行</span>
              </div>
            </div>
            <div style={{marginTop: 'auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10}}>
              <LabelBlock size={23} color={C.crimson}>本罪是不作为犯</LabelBlock>
              <span style={{fontSize: 20, fontWeight: 900, color: C.crimson}}>应为 ＋ 能为 ＋ 不为 ＋ 情节严重</span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={70} style={{position: 'absolute', left: 0, top: 556, right: 0, bottom: 0}}>
          <Panel tone={C.gold} watermark={<Landmark size={150} color={C.gold} strokeWidth={1.6} />} style={{height: '100%', padding: '10px 16px', display: 'flex', flexDirection: 'column', gap: 6, justifyContent: 'center'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <TabChip tone={C.gold} icon={<Users size={24} color={C.white} strokeWidth={2.2} />}>对比记忆</TabChip>
              <span style={{fontSize: 21, fontWeight: 900, color: C.ink}}>虚假诉讼罪是<u>作为犯</u>（捏造事实提起诉讼）；拒不执行判决、裁定罪是<u>不作为犯</u>（应为能为而不为）</span>
              <span style={{flex: 1}} />
              <Enter delay={110}><span style={{display: 'inline-flex'}}><Chip tone="gold"><ShieldX size={20} color={C.ink} strokeWidth={2.2} />两罪共同保护司法秩序</Chip></span></Enter>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
