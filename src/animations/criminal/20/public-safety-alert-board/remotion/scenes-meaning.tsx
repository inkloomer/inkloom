import {Ban, Dog, Flame, Gavel, Scale, Siren, Users, Zap} from 'lucide-react';
import {interpolate, useCurrentFrame} from 'remotion';
import {C, Enter, IconChip, Mark, Neg, Panel, Shell, SoftHi, TabChip, ThinU} from './kit';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const MeaningFireRulersScene = () => {
  /* data-final-knowledge="ruler-fork-board" data-final-knowledge="fire-tier-board" data-final-knowledge="fire-relations-panel" data-final-knowledge="poison-scope-board" data-final-knowledge="poison-vs-fake" */
  const frame = useCurrentFrame();
  const forkX = interpolate(frame, [58, 96], [90, 452], CLAMP);
  const forkY = interpolate(frame, [58, 96], [130, 330], CLAMP);
  const forkIn = interpolate(frame, [52, 62], [0, 1], CLAMP);
  const gate1Glow = interpolate(frame, [72, 84], [0, 1], CLAMP);
  const gate2Glow = interpolate(frame, [84, 98], [0, 1], CLAMP);
  return (
    <Shell code="01" kicker="第一节 · 危险方法型犯罪" title="公共安全·两把尺·放火罪等四罪">
      <div
        data-layout="meaning-fork-triple-rail"
        data-visual-anchor="comparison-axis"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="ruler-fork-board,fire-relations-panel"
        data-focal-rule="one-poisoning-act-splits-into-three-verdicts-by-the-two-rulers"
        data-focal-channels="icon,connector,contrast,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={3} marker="ruler-fork-board" style={{position: 'absolute', left: 0, top: 0, width: 600, height: 744}}>
          <Panel tone={C.siren} watermark={<Scale size={170} color={C.siren} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px'}}>
            <TabChip tone={C.siren} icon={<Scale size={24} color={C.white} strokeWidth={2.2} />}>两把尺 · 一个投毒行为三种结局</TabChip>
            <div style={{position: 'relative', height: 640, marginTop: 8}}>
              <div style={{position: 'absolute', left: 150, top: 0, width: 300, border: `4px solid ${C.siren}`, backgroundColor: C.white, padding: '8px 12px', textAlign: 'center'}}>
                <Siren size={28} color={C.siren} strokeWidth={2.4} />
                <div style={{fontSize: 21, fontWeight: 950, color: C.siren}}>甲向锅里投毒</div>
              </div>
              <div style={{position: 'absolute', left: 296, top: 78, width: 3, height: 34, backgroundColor: C.ghost}} />
              <div style={{position: 'absolute', left: 60, top: 112, width: 470, border: `4px solid ${C.slate}`, backgroundColor: C.white, padding: '8px 12px', fontSize: 20, fontWeight: 900, color: C.slate, boxShadow: `0 0 ${gate1Glow * 24}px ${C.slate}${gate1Glow > 0.5 ? '55' : '00'}`}}>
                尺一 · 危及范围：不特定多数人？<span style={{fontWeight: 850, color: C.inkSoft}}>（死几人不看，看范围可大可小）</span>
              </div>
              <div style={{position: 'absolute', left: 60, top: 186, width: 470, border: `4px solid ${C.yellow}`, backgroundColor: C.white, padding: '8px 12px', fontSize: 20, fontWeight: 900, color: C.yellow, boxShadow: `0 0 ${gate2Glow * 24}px ${C.yellow}${gate2Glow > 0.5 ? '55' : '00'}`}}>
                尺二 · 危及内容：人身伤亡·财产损失？<span style={{fontWeight: 850, color: C.inkSoft}}>（物质性损害，精神恐慌∉）</span>
              </div>
              <div style={{position: 'absolute', left: forkX, top: forkY, width: 56, height: 40, borderRadius: 20, backgroundColor: C.siren, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: forkIn, boxShadow: '0 3px 9px rgba(37,35,28,0.4)'}}>
                <Zap size={22} color={C.white} strokeWidth={2.4} />
              </div>
              {[
                {top: 268, tone: C.slate, title: '灭门案（死3人·范围确定）：', verdict: '只构成故意杀人罪'},
                {top: 356, tone: C.lock, title: '食堂锅里投毒（死1人·范围可大）：', verdict: '构成投放危险物质罪'},
                {top: 444, tone: C.yellow, title: '面粉谎称炭疽（只有恐慌）：', verdict: '投放虚假危险物质罪·妨害社会管理秩序'},
              ].map((item, index) => (
                <div key={index} style={{position: 'absolute', left: 0, top: item.top, width: 552, border: `3px solid ${item.tone}`, backgroundColor: C.white, padding: '8px 12px', display: 'flex', gap: 10, alignItems: 'center'}}>
                  <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 10, backgroundColor: item.tone, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{index === 2 ? <Ban size={24} color={C.white} strokeWidth={2.2} /> : index === 1 ? <Siren size={24} color={C.white} strokeWidth={2.2} /> : <Users size={24} color={C.white} strokeWidth={2.2} />}</span>
                  <span style={{fontSize: 19, fontWeight: 870, lineHeight: 1.4}}><b style={{color: item.tone}}>{item.title}</b>　<ThinU color={item.tone}>{item.verdict}</ThinU></span>
                </div>
              ))}
              <div style={{position: 'absolute', left: 0, top: 546, fontSize: 20, fontWeight: 900, color: C.inkSoft}}>两尺都过＝危害公共安全；任一尺不过＝<Neg size={19}>不成立危害公共安全类罪</Neg></div>
            </div>
          </Panel>
        </Enter>

        <Enter delay={30} marker="fire-tier-board" style={{position: 'absolute', left: 624, top: 0, width: 560, height: 744}}>
          <Panel tone={C.yellow} watermark={<Flame size={170} color={C.yellow} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px'}}>
            <TabChip tone={C.yellow} icon={<Flame size={24} color={C.white} strokeWidth={2.2} />}>放火罪（第114·115条）· 两档一过失</TabChip>
            <div style={{position: 'relative', height: 640, marginTop: 8}}>
              {[
                {top: 0, h: 120, tone: C.yellow, title: '第114条 · 尚未造成严重后果', body: '放火·决水·爆炸·投放毒害性·放射性·传染病病原体等物质', penalty: '3～10年有期徒刑'},
                {top: 148, h: 150, tone: C.seal, title: '第115条 · 致人重伤·死亡或重大损失', body: '主体与四罪并列：放火·决水·爆炸·投放危险物质·以其他危险方法', penalty: '10～15年·无期·死刑'},
                {top: 326, h: 96, tone: C.slate, title: '过失犯第115条之罪（失火罪等）', body: '情节较轻的处3年以下', penalty: '3～7年有期徒刑'},
              ].map((tier, index) => (
                <div key={index} style={{position: 'absolute', left: index * 26, top: tier.top, width: 500 - index * 26, border: `4px solid ${tier.tone}`, backgroundColor: C.white, padding: '10px 12px', height: tier.h}}>
                  <div style={{fontSize: 21, fontWeight: 950, color: tier.tone}}>{tier.title}</div>
                  <div style={{fontSize: 19, fontWeight: 860, color: C.ink, lineHeight: 1.45, marginTop: 4}}>{tier.body}</div>
                  <div style={{fontSize: 20, fontWeight: 950, color: tier.tone, marginTop: 4}}>刑：{tier.penalty}</div>
                </div>
              ))}
              <div style={{position: 'absolute', left: 0, top: 446, width: 508, border: `3px solid ${C.lock}`, backgroundColor: C.white, padding: '9px 12px', display: 'flex', gap: 10, alignItems: 'center'}}>
                <Dog size={26} color={C.white} strokeWidth={2.2} />
                <span style={{fontSize: 19, fontWeight: 870, lineHeight: 1.4}}><b style={{color: C.lock}}>投放危险物质范围：</b>毒害性·放射性·传染病病原体——患狂犬病的狗扔进小区垃圾站<Mark color={C.lock}>∈</Mark></span>
              </div>
              <div style={{position: 'absolute', left: 0, top: 556, fontSize: 20, fontWeight: 900, color: C.inkSoft, lineHeight: 1.45}}>本讲四罪＝放火·爆炸·投放危险物质·以危险方法危害公共安全（第114·115条并列规定）</div>
            </div>
          </Panel>
        </Enter>

        <Enter delay={60} marker="fire-relations-panel" style={{position: 'absolute', left: 1208, top: 0, width: 568, height: 470}}>
          <Panel tone={C.seal} watermark={<Gavel size={160} color={C.seal} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px'}}>
            <TabChip tone={C.seal} icon={<Gavel size={24} color={C.white} strokeWidth={2.2} />}>四罪 vs 故意杀人罪（2023）· 唯一门槛</TabChip>
            <div style={{position: 'relative', height: 370, marginTop: 8}}>
              {[
                {top: 0, tone: C.yellow, title: '危害公共安全＋过失死亡', body: '放火罪（过失）致人死亡——烧仓库案未料烧死库管'},
                {top: 118, tone: C.seal, title: '危害公共安全＋故意死亡', body: '放火罪（故意）致人死亡——公交放火烧死多人；同时∈故意杀人罪，择一重'},
                {top: 236, tone: C.slate, title: '未危害公共安全＋故意死亡', body: '只构成故意杀人罪——独门独户烧住宅全家死亡'},
              ].map((row, index) => (
                <div key={index} style={{position: 'absolute', left: 0, top: row.top, width: 520, border: `4px solid ${row.tone}`, backgroundColor: C.white, padding: '9px 12px'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
                    <Flame size={24} color={row.tone} strokeWidth={2.4} />
                    <span style={{fontSize: 20, fontWeight: 950, color: row.tone}}>{row.title}</span>
                  </div>
                  <div style={{fontSize: 19, fontWeight: 860, color: C.ink, lineHeight: 1.45, marginTop: 4}}>{row.body}</div>
                </div>
              ))}
              <div style={{position: 'absolute', left: 0, top: 330, fontSize: 20, fontWeight: 950, color: C.seal}}>区分公式：只看<ThinU color={C.seal}>是否危害公共安全</ThinU>——危害了∈放火罪（即使故意）</div>
            </div>
          </Panel>
        </Enter>

        <Enter delay={100} marker="poison-vs-fake" style={{position: 'absolute', left: 1208, top: 494, width: 568, height: 250}}>
          <Panel tone={C.night} watermark={<Siren size={140} color={C.night} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px'}}>
            <TabChip tone={C.night} icon={<Zap size={22} color={C.white} strokeWidth={2.2} />}>真货 vs 假货 · 法益对照</TabChip>
            <div style={{position: 'relative', height: 150, marginTop: 8}}>
              <div style={{position: 'absolute', left: 0, top: 0, width: 250, border: `4px solid ${C.siren}`, backgroundColor: C.white, padding: '8px 10px', fontSize: 19, fontWeight: 880, lineHeight: 1.45}}>
                <b style={{color: C.siren}}>投放危险物质罪</b><br />真货·实际危险<br />→ 保护<Mark color={C.siren}>公共安全</Mark>
              </div>
              <div style={{position: 'absolute', left: 274, top: 0, width: 250, border: `4px solid ${C.green}`, backgroundColor: C.white, padding: '8px 10px', fontSize: 19, fontWeight: 880, lineHeight: 1.45}}>
                <b style={{color: C.green}}>投放虚假危险物质罪</b><br />假货·心理恐慌<br />→ 保护<Mark color={C.green}>社会管理秩序</Mark>
              </div>
              <div style={{position: 'absolute', left: 0, top: 118, fontSize: 19, fontWeight: 880, color: C.inkSoft}}>区分两问：投的是真货还是假货？引起的是实际危险还是心理恐慌？</div>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
