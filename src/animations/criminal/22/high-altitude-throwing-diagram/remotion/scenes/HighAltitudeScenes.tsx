import type {ReactNode} from 'react';
import {AlertTriangle, ArrowDown, ArrowUp, Building2, CircleX, Flame, Package, Scale, ShieldCheck, Target, TestTube2} from 'lucide-react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';

const C = {paper: '#F3F0E9', ink: '#1C2025', muted: '#69727A', graphite: '#B9B4AA', cobalt: '#2457A6', green: '#B2D235', coral: '#E85C4A', violet: '#7456A8'} as const;
const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};
const ease = Easing.bezier(0.16, 1, 0.3, 1);
const reveal = (frame: number, delay: number, duration = 24) => interpolate(frame, [delay, delay + duration], [0, 1], {...clamp, easing: ease});

const Section = ({children, scene, kicker, title}: {readonly children: ReactNode; readonly scene: string; readonly kicker: string; readonly title: string}) => (
  <AbsoluteFill style={{backgroundColor: C.paper, color: C.ink, fontFamily: 'Arial, "Microsoft YaHei", sans-serif'}}>
    <div style={{position: 'absolute', left: 70, right: 70, top: 48, height: 3, backgroundColor: C.cobalt}} />
    <div style={{position: 'absolute', left: 86, top: 72, fontSize: 18, color: C.cobalt, fontWeight: 800}}>{scene} / VERTICAL INSPECTION</div>
    <div style={{position: 'absolute', left: 86, top: 112, fontSize: 24, color: C.muted}}>{kicker}</div>
    <div style={{position: 'absolute', left: 86, top: 150, fontSize: 56, fontWeight: 900}}>{title}</div>
    <div style={{position: 'absolute', left: 70, right: 70, bottom: 48, height: 2, backgroundColor: C.graphite}} />
    {children}
  </AbsoluteFill>
);

const Chip = ({children, color = C.ink}: {readonly children: ReactNode; readonly color?: string}) => <div style={{display: 'inline-flex', alignItems: 'center', gap: 12, border: `2px solid ${color}`, padding: '11px 18px', color, fontSize: 25, fontWeight: 800, backgroundColor: `${color}10`}}>{children}</div>;

export const VerticalDirectionScene = () => {
  const frame = useCurrentFrame();
  const drop = reveal(frame, 46, 50);
  const rise = reveal(frame, 106, 42);
  return <Section scene="01" kicker="先确认物体从哪里开始、向哪里运动" title="高空 = 相对高度 + 向下抛掷">
    <div data-layout="building-section-direction-test" data-visual-anchor="boundary" data-text-treatments="label-block,thin-underline,external-negation" data-visual-grammar="direction,threshold,exclusion" data-focal-channels="icon,connector,locator,contrast" data-focal-rule="高空抛物要求从高处向下抛物" style={{position: 'absolute', left: 126, right: 126, top: 282, bottom: 82}}>
      <div style={{position: 'absolute', left: 160, top: 18, width: 720, height: 580, borderLeft: `9px solid ${C.graphite}`, borderRight: `9px solid ${C.graphite}`, borderTop: `9px solid ${C.graphite}`, background: 'repeating-linear-gradient(0deg, transparent 0 116px, #D9D5CC 117px 120px)'}}>
        <Building2 size={74} color={C.graphite} style={{position: 'absolute', left: -92, top: 188}} />
        <div style={{position: 'absolute', left: 38, top: 220, fontSize: 22, color: C.muted}}>建筑物剖面</div>
        <div style={{position: 'absolute', left: 24, top: 330, width: 672, height: 4, backgroundColor: C.cobalt, opacity: 0.9}} />
        <div style={{position: 'absolute', left: 32, top: 292, fontSize: 24, color: C.cobalt, fontWeight: 900, backgroundColor: C.paper, padding: '0 12px'}}>二层楼 / 约 3 米基准线</div>
        <Package size={54} color={C.coral} style={{position: 'absolute', left: 312, top: 54, translate: `0px ${interpolate(drop, [0, 1], [0, 280])}px`, opacity: drop}} />
        <ArrowDown size={54} color={C.coral} style={{position: 'absolute', left: 312, top: 112, opacity: drop}} />
        <Package size={54} color={C.violet} style={{position: 'absolute', left: 520, top: 398, translate: `0px ${interpolate(rise, [0, 1], [0, -250])}px`, opacity: rise}} />
        <ArrowUp size={54} color={C.violet} style={{position: 'absolute', left: 520, top: 336, opacity: rise}} />
      </div>
      <div style={{position: 'absolute', right: 90, top: 88, display: 'flex', flexDirection: 'column', gap: 22, opacity: reveal(frame, 20)}}>
        <Chip color={C.coral}><ArrowDown size={30} /> 从高处向下：属于</Chip>
        <Chip color={C.violet}><ArrowUp size={30} /> 地面向上再下落：不属于</Chip>
        <Chip color={C.cobalt}>井口、树上、巨轮、热气球：均可</Chip>
      </div>
    </div>
  </Section>;
};

export const SeriousnessGateScene = () => {
  const frame = useCurrentFrame();
  const gate = reveal(frame, 92, 40);
  return <Section scene="02" kicker="属于高空抛物，不等于当然入罪" title="情节严重才通过入罪门">
    <div data-layout="risk-factor-convergence" data-visual-anchor="timeline-gate" data-text-treatments="soft-highlight,thin-underline,stamp" data-visual-grammar="accumulation,causal-gate,sufficiency" data-focal-channels="icon,connector,enclosure,motion" data-focal-rule="情节严重是高空抛物罪的入罪门槛" style={{position: 'absolute', left: 120, right: 120, top: 292, bottom: 84}}>
      <div style={{position: 'absolute', left: 90, top: 78, display: 'flex', gap: 24, opacity: reveal(frame, 10)}}>
        <Chip color={C.cobalt}><Package size={34} /> 重量 / 数量</Chip><Chip color={C.coral}><AlertTriangle size={34} /> 高度 / 危险程度</Chip><Chip color={C.violet}>时间 / 地点 / 损失</Chip>
      </div>
      <div style={{position: 'absolute', left: 220, top: 205, width: 700, height: 5, backgroundColor: C.graphite, scale: `${reveal(frame, 38, 48)} 1`, transformOrigin: 'left'}} />
      <div style={{position: 'absolute', left: 882, top: 176, opacity: reveal(frame, 72)}}><ArrowDown size={62} color={C.ink} /></div>
      <div style={{position: 'absolute', right: 100, top: 112, width: 390, height: 220, border: `4px solid ${C.green}`, backgroundColor: `${C.green}16`, opacity: gate, scale: gate}}>
        <ShieldCheck size={82} color={C.green} style={{position: 'absolute', left: 154, top: 26}} />
        <div style={{position: 'absolute', left: 0, right: 0, bottom: 33, textAlign: 'center', color: C.green, fontSize: 36, fontWeight: 900}}>高空抛物罪</div>
      </div>
      <div style={{position: 'absolute', left: 298, bottom: 32, fontSize: 30, color: C.muted, opacity: reveal(frame, 126)}}>情节犯 · 不要求已经造成实害结果</div>
    </div>
  </Section>;
};

export const IntentExclusionScene = () => {
  const frame = useCurrentFrame();
  return <Section scene="03" kicker="物体坠落的原因，决定主观要件" title="故意进入，过失退出">
    <div data-layout="intent-inspection-rail" data-visual-anchor="typographic-sequence" data-text-treatments="label-block,external-negation,stamp" data-visual-grammar="sequence,negation,classification" data-focal-channels="icon,contrast,annotation,spatial" data-focal-rule="高空抛物罪要求故意，过失坠落不构成本罪" style={{position: 'absolute', left: 126, right: 126, top: 296, bottom: 84}}>
      <div style={{position: 'absolute', left: 168, right: 168, top: 82, height: 6, backgroundColor: C.graphite}} />
      <div style={{position: 'absolute', left: 124, top: 46, opacity: reveal(frame, 12)}}><Target size={72} color={C.cobalt} /><div style={{fontSize: 30, fontWeight: 900, marginTop: 14}}>直接 / 间接故意</div><div style={{fontSize: 22, color: C.muted, marginTop: 8}}>知道并希望或放任坠落</div></div>
      <div style={{position: 'absolute', left: 820, top: 46, opacity: reveal(frame, 42)}}><CircleX size={72} color={C.coral} /><div style={{fontSize: 30, fontWeight: 900, color: C.coral, marginTop: 14}}>过失导致坠落</div><div style={{fontSize: 22, color: C.muted, marginTop: 8}}>结果发生仍不满足主观要件</div></div>
      <div style={{position: 'absolute', left: 620, top: 28, height: 120, width: 4, backgroundColor: C.ink, opacity: reveal(frame, 64)}} />
      <div style={{position: 'absolute', left: 500, bottom: 44, opacity: reveal(frame, 90)}}><Chip color={C.cobalt}><ShieldCheck size={34} /> 故意 → 继续审查情节严重</Chip></div>
      <div style={{position: 'absolute', right: 200, bottom: 44, opacity: reveal(frame, 110)}}><Chip color={C.coral}><CircleX size={34} /> 过失 → 排除本罪</Chip></div>
    </div>
  </Section>;
};

export const ConcurrenceChoiceScene = () => {
  const frame = useCurrentFrame();
  const branch = reveal(frame, 52, 42);
  return <Section scene="04" kicker="同一抛掷行为同时触及其他犯罪时" title="想象竞合：沿重罪出口落地">
    <div data-layout="descending-offence-branch" data-visual-anchor="document-fork" data-text-treatments="soft-highlight,label-block,stamp" data-visual-grammar="branching,overlap,priority" data-focal-channels="icon,connector,contrast,spatial" data-focal-rule="同时构成其他犯罪，依处罚较重规定择一重罪" style={{position: 'absolute', left: 124, right: 124, top: 300, bottom: 80}}>
      <div style={{position: 'absolute', left: 260, top: 34, opacity: reveal(frame, 10)}}><Package size={84} color={C.coral} /><div style={{fontSize: 29, fontWeight: 900, marginTop: 12}}>一次高空抛掷</div></div>
      <div style={{position: 'absolute', left: 420, top: 76, width: 760, height: 6, backgroundColor: C.ink, scale: `${branch} 1`, transformOrigin: 'left'}} />
      <div style={{position: 'absolute', left: 850, top: 52, opacity: branch}}><ArrowDown size={62} color={C.ink} /></div>
      <div style={{position: 'absolute', left: 740, right: 130, top: 166, display: 'flex', justifyContent: 'space-between', opacity: branch}}>
        <Chip color={C.coral}><Flame size={34} /> 火灾危险 → 放火罪</Chip><Chip color={C.violet}><TestTube2 size={34} /> 硫酸 → 危害公共安全罪</Chip><Chip color={C.cobalt}><Target size={34} /> 故意砸死 → 故意杀人罪</Chip>
      </div>
      <div style={{position: 'absolute', left: 690, bottom: 36, opacity: reveal(frame, 118)}}><div style={{border: `4px solid ${C.green}`, padding: '18px 42px', fontSize: 37, fontWeight: 900, color: C.green, backgroundColor: `${C.green}16`}}><Scale size={42} style={{verticalAlign: 'middle', marginRight: 16}} />依处罚较重规定择一重罪</div></div>
    </div>
  </Section>;
};
