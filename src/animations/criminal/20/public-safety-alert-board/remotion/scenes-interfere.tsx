import {Ban, Bus, CarFront, Hand, Scale, Siren, Users, Zap} from 'lucide-react';
import {interpolate, useCurrentFrame} from 'remotion';
import {C, Enter, Mark, Neg, Panel, Shell, TabChip, ThinU} from './kit';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const InterfereDrivingPanelScene = () => {
  /* data-final-knowledge="bus-duel-board" data-final-knowledge="crime-node-board" data-final-knowledge="fanout-board" data-final-knowledge="driving-map-board" */
  const frame = useCurrentFrame();
  const pushP = interpolate(frame, [60, 100], [0, 1], CLAMP);
  const duelGlow = interpolate(frame, [92, 108], [0, 1], CLAMP);
  const nodeGlow = interpolate(frame, [104, 120], [0, 1], CLAMP);
  const fanIn = [0, 1, 2, 3].map((i) => interpolate(frame, [140 + i * 16, 160 + i * 16], [0, 1], CLAMP));
  const fanY = [0, 1, 2, 3].map((i) => interpolate(frame, [140 + i * 16, 176 + i * 16], [0, 1], CLAMP));
  return (
    <Shell code="06" kicker="第三节 · 交通型犯罪" title="妨害安全驾驶罪：车厢对峙与竞合扇出">
      <div
        data-layout="interfere-bus-fanout"
        data-visual-anchor="flow-path"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="bus-duel-board,fanout-board"
        data-focal-rule="minor-crime-fans-out-to-heavier-crimes-by-imagination-competition"
        data-focal-channels="icon,connector,contrast,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={3} marker="bus-duel-board" style={{position: 'absolute', left: 0, top: 0, width: 880, height: 520}}>
          <Panel tone={C.siren} watermark={<Bus size={190} color={C.siren} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px'}}>
            <TabChip tone={C.siren} icon={<Bus size={24} color={C.white} strokeWidth={2.2} />}>第133条之二 · 行驶中的公共交通工具</TabChip>
            <div style={{position: 'relative', height: 400, marginTop: 12}}>
              <div style={{position: 'absolute', left: 0, top: 10, width: 820, height: 260, border: `5px solid ${C.night}`, borderRadius: 26, backgroundColor: C.boardDeep, boxShadow: `0 0 ${duelGlow * 26}px ${C.siren}${duelGlow > 0.5 ? '44' : '00'}`}}>
                <div style={{position: 'absolute', left: 24, top: 70, width: 220, height: 120, border: `4px solid ${C.green}`, borderRadius: 12, backgroundColor: C.white, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4}}>
                  <Users size={34} color={C.green} strokeWidth={2.4} />
                  <span style={{fontSize: 23, fontWeight: 950, color: C.green}}>司机</span>
                </div>
                <div style={{position: 'absolute', right: 24, top: 70, width: 220, height: 120, border: `4px solid ${C.yellow}`, borderRadius: 12, backgroundColor: C.white, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4}}>
                  <Hand size={34} color={C.yellow} strokeWidth={2.4} />
                  <span style={{fontSize: 23, fontWeight: 950, color: C.yellow}}>乘客</span>
                </div>
                <div style={{position: 'absolute', left: 268, top: 96, width: 284 * pushP, height: 0, borderTop: `6px solid ${C.yellow}`}} />
                <div style={{position: 'absolute', left: 552, top: 88, width: 0, height: 0, borderLeft: `14px solid ${C.yellow}`, borderTop: '9px solid transparent', borderBottom: '9px solid transparent', opacity: pushP}} />
                <div style={{position: 'absolute', left: 274, top: 30, fontSize: 20, fontWeight: 900, color: C.yellow, width: 272, textAlign: 'center'}}>乘客：暴力打司机·抢控方向盘</div>
                <div style={{position: 'absolute', left: 268, top: 160, width: 284 * pushP, height: 0, borderTop: `6px dashed ${C.green}`}} />
                <div style={{position: 'absolute', left: 254, top: 153, width: 0, height: 0, borderRight: `14px solid ${C.green}`, borderTop: '9px solid transparent', borderBottom: '9px solid transparent', opacity: pushP}} />
                <div style={{position: 'absolute', left: 274, top: 186, fontSize: 20, fontWeight: 900, color: C.green, width: 272, textAlign: 'center'}}>司机：擅离职守·互殴殴打（2022）</div>
              </div>
              <div style={{position: 'absolute', left: 0, top: 296, fontSize: 21, fontWeight: 880, color: C.ink, width: 820, lineHeight: 1.55}}>
                双向对峙任一方 → 干扰正常行驶·危及公共安全 → 基本刑仅<Mark color={C.siren}>1年以下</Mark>＝<ThinU color={C.siren}>轻罪</ThinU>
              </div>
            </div>
          </Panel>
        </Enter>

        <Enter delay={44} marker="crime-node-board" style={{position: 'absolute', left: 0, top: 544, width: 880, height: 200}}>
          <Panel tone={C.night} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.night} icon={<Scale size={22} color={C.white} strokeWidth={2.2} />}>轻罪定位 · 与放火爆炸相当程度时升级</TabChip>
            <div style={{fontSize: 21, fontWeight: 880, lineHeight: 1.5, color: C.ink}}>
              危害程度<Mark color={C.night}>较小</Mark>→本罪；达到<ThinU color={C.seal}>与放火罪·爆炸罪相当</ThinU>→以危险方法危害公共安全罪
            </div>
            <div style={{fontSize: 20, fontWeight: 850, lineHeight: 1.5, color: C.inkSoft}}>
              速查：故意·达相当＝以危险方法｜故意·未达＝危险驾驶·妨害安全驾驶｜过失＝交通肇事（具体）·过失以危险方法（兜底）
            </div>
          </Panel>
        </Enter>

        <Enter delay={86} marker="fanout-board" style={{position: 'absolute', left: 904, top: 0, width: 872, height: 744}}>
          <Panel tone={C.yellow} watermark={<Zap size={170} color={C.yellow} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px'}}>
            <TabChip tone={C.yellow} icon={<Zap size={22} color={C.white} strokeWidth={2.2} />}>竞合扇出 · 本罪与重罪想象竞合，择一重</TabChip>
            <div style={{position: 'relative', height: 640, marginTop: 10}}>
              <div style={{position: 'absolute', left: 296, top: 0, width: 250, border: `4px solid ${C.siren}`, boxShadow: `0 0 ${nodeGlow * 28}px ${C.siren}${nodeGlow > 0.5 ? '66' : '00'}, inset 0 0 ${nodeGlow * 14}px ${C.siren}22`, backgroundColor: C.sealSoft, padding: '10px 12px', textAlign: 'center'}}>
                <Siren size={30} color={C.siren} strokeWidth={2.4} />
                <div style={{fontSize: 21, fontWeight: 950, color: C.siren}}>妨害安全驾驶罪</div>
              </div>
              {[
                {top: 168, tone: C.seal, title: '长时间左摇右晃', body: '→ 以危险方法危害公共安全罪', icon: <Zap size={24} color={C.seal} strokeWidth={2.2} />},
                {top: 296, tone: C.night, title: '同归于尽·车掉河死3人（2024）', body: '→ 以危险方法＋故意杀人罪，择一重', icon: <Users size={24} color={C.night} strokeWidth={2.2} />},
                {top: 424, tone: C.slate, title: '劫持公交车驶向目的地', body: '→ 劫持汽车罪（择一重定此罪）', icon: <CarFront size={24} color={C.slate} strokeWidth={2.2} />},
                {top: 552, tone: C.lock, title: '短时失控轧死行人', body: '→ 交通肇事罪（择一重定此罪）', icon: <Ban size={24} color={C.lock} strokeWidth={2.2} />},
              ].map((item, index) => (
                <div key={index}>
                  <div style={{position: 'absolute', left: 418, top: 96, width: 3, height: item.top - 96, backgroundColor: C.ghost, opacity: 0.6}} />
                  <div style={{position: 'absolute', left: 0, top: item.top + (1 - fanY[index]) * -46, width: 824, border: `3px solid ${item.tone}`, padding: '10px 12px', display: 'flex', gap: 10, alignItems: 'center', opacity: fanIn[index], translate: `0 ${(1 - fanY[index]) * -40}px`}}>
                    <span style={{flexShrink: 0, width: 46, height: 46, borderRadius: 9, backgroundColor: item.tone, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{item.icon}</span>
                    <span style={{fontSize: 20, fontWeight: 880, lineHeight: 1.4}}><b style={{color: item.tone}}>{item.title}</b>　{item.body}</span>
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
