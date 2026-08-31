import {Ban, Coins, EyeOff, Handshake, Megaphone, Scale, Zap} from 'lucide-react';
import {interpolate, useCurrentFrame} from 'remotion';
import {C, Enter, Mark, Neg, Panel, Shell, TabChip, ThinU, LedgerStamp} from './kit';
import {CLAMP} from '../../../../shared/remotion-runtime';

const FlowNode = ({left, top, width, tone, icon, title, body}: {left: number; top: number; width: number; tone: string; icon: React.ReactNode; title: string; body: React.ReactNode}) => (
  <div style={{position: 'absolute', left, top, width, border: `3px solid ${tone}`, backgroundColor: C.white, padding: '10px 14px'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6}}>
      <span style={{flexShrink: 0, width: 40, height: 40, borderRadius: 8, backgroundColor: tone, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
      <span style={{fontSize: 22, fontWeight: 950, color: tone}}>{title}</span>
    </div>
    <div style={{fontSize: 20, fontWeight: 840, lineHeight: 1.45, color: C.ink}}>{body}</div>
  </div>
);

const HArrow = ({left, top, width, color}: {left: number; top: number; width: number; color: string}) => (
  <>
    <div style={{position: 'absolute', left, top, width: width - 12, height: 0, borderTop: `4px solid ${color}`}} />
    <div style={{position: 'absolute', left: left + width - 12, top: top - 8, width: 0, height: 0, borderLeft: `12px solid ${color}`, borderTop: '8px solid transparent', borderBottom: '8px solid transparent'}} />
  </>
);

const VDrop = ({left, top, height, color}: {left: number; top: number; height: number; color: string}) => (
  <>
    <div style={{position: 'absolute', left, top, width: 0, height: height - 10, borderLeft: `4px solid ${color}`}} />
    <div style={{position: 'absolute', left: left - 8, top: top + height - 10, width: 0, height: 0, borderTop: `12px solid ${color}`, borderLeft: '8px solid transparent', borderRight: '8px solid transparent'}} />
  </>
);

export const ExtortionFreedomSpectrumScene = () => {
  /* data-final-knowledge="spectrum-axis-board" data-final-knowledge="case-pins-board" data-final-knowledge="onspot-verdict-board" */
  const frame = useCurrentFrame();
  const pinY = (index: number) => interpolate(frame, [40 + index * 12, 58 + index * 12], [-46, 0], CLAMP);
  const pinIn = (index: number) => interpolate(frame, [34 + index * 12, 44 + index * 12], [0, 1], CLAMP);
  const cases: Array<{x: number; tone: string; tag: string; text: React.ReactNode; verdict: string}> = [
    {x: 120, tone: C.brass, tag: '情形1', text: '扇一耳光警告“给钱”', verdict: '敲诈勒索：暴力未压制反抗'},
    {x: 420, tone: C.brass, tag: '情形2', text: '“后天不给钱就放血”', verdict: '敲诈勒索：可当场也可日后取财'},
    {x: 760, tone: C.brass, tag: '情形4', text: '“现在不给，后天放血”', verdict: '敲诈勒索：有两天考虑＝有的选'},
    {x: 1060, tone: C.brass, tag: '情形5', text: '“不答应后天给钱，现在放血”', verdict: '敲诈勒索：交付在后天＝有的选'},
    {x: 1420, tone: C.seal, tag: '情形3', text: '“现在不给，现在放血”', verdict: '抢劫：没得选，只好给'},
  ];
  return (
    <Shell code="10" kicker="第六节 · 敲诈勒索罪" title="与抢劫罪的区分：意志自由光谱">
      <div
        data-layout="extortion-freedom-spectrum"
        data-visual-anchor="comparison-axis"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="spectrum-axis-board,case-pins-board"
        data-focal-rule="will-freedom-deprivation-degree-alone-splits-extortion-from-robbery"
        data-focal-channels="icon,connector,contrast,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={3} marker="spectrum-axis-board" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 250}}>
          <Panel tone={C.slate} watermark={<Scale size={140} color={C.slate} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 18px'}}>
            <TabChip tone={C.slate} icon={<Scale size={22} color={C.white} strokeWidth={2.2} />}>本质区别 · 被害人意志自由被剥夺的程度</TabChip>
            <div style={{position: 'relative', height: 140, marginTop: 8}}>
              <div style={{position: 'absolute', left: 0, top: 96, width: 1720, height: 0, borderTop: `5px solid ${C.night}`}} />
              <div style={{position: 'absolute', left: 1716, top: 86, width: 0, height: 0, borderTop: '11px solid transparent', borderBottom: '11px solid transparent', borderLeft: `18px solid ${C.night}`}} />
              <div style={{position: 'absolute', left: 0, top: 16, fontSize: 23, fontWeight: 950, color: C.slate}}>部分剥夺<span style={{fontSize: 19, fontWeight: 850, color: C.inkSoft}}>（有的选，最好给）</span></div>
              <div style={{position: 'absolute', right: 0, top: 16, fontSize: 23, fontWeight: 950, color: C.seal}}>完全剥夺<span style={{fontSize: 19, fontWeight: 850, color: C.inkSoft}}>（压制反抗，没得选只好给）</span></div>
            </div>
          </Panel>
        </Enter>

        <Enter delay={40} marker="case-pins-board" style={{position: 'absolute', left: 0, top: 274, width: 1776, height: 300}}>
          <Panel tone={C.brass} watermark={<Megaphone size={140} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 18px'}}>
            <TabChip tone={C.brass} icon={<Megaphone size={22} color={C.white} strokeWidth={2.2} />}>黑社会收保护费 · 五情形钉在光谱上</TabChip>
            <div style={{position: 'relative', height: 190, marginTop: 6}}>
              {cases.map((item, index) => (
                <div key={index} style={{position: 'absolute', left: item.x, top: 0, width: 320, translate: `0 ${pinY(index)}px`, opacity: pinIn(index)}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
                    <Megaphone size={22} color={item.tone} strokeWidth={2.2} />
                    <span style={{fontSize: 20, fontWeight: 920, color: item.tone}}>{item.tag}</span>
                  </div>
                  <div style={{fontSize: 19, fontWeight: 860, lineHeight: 1.4, marginTop: 2}}>{item.text}</div>
                  <div style={{width: 4, height: 26, backgroundColor: item.tone, marginTop: 4, marginLeft: 10}} />
                  <div style={{fontSize: 19, fontWeight: 900, color: item.tone, marginTop: 2}}>{item.verdict}</div>
                </div>
              ))}
              <div style={{position: 'absolute', left: 0, top: 158, width: 1720, height: 0, borderTop: `4px dashed ${C.ghost}`}} />
            </div>
          </Panel>
        </Enter>

        <Enter delay={120} marker="onspot-verdict-board" style={{position: 'absolute', left: 0, top: 598, width: 1776, height: 146}}>
          <Panel tone={C.lock} style={{height: '100%', padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 18}}>
            <Zap size={30} color={C.lock} strokeWidth={2.4} />
            <div style={{fontSize: 22, fontWeight: 900, lineHeight: 1.5}}>
              是否用暴力·是否当场取财<Neg size={20}>都不是</Neg>区分标准（敲诈可当场取财）——唯一标准＝<ThinU color={C.seal}>有得选（敲诈）还是没得选（抢劫）</ThinU>
            </div>
            <div style={{flexShrink: 0}}><LedgerStamp delay={170} tone="lock">口诀：任意一个“当场”不满足 → 有得选 → 敲诈勒索</LedgerStamp></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const ExerciseRightGateScene = () => {
  /* data-final-knowledge="gate-two-board" data-final-knowledge="pass-case-board" data-final-knowledge="fail-case-board" */
  const frame = useCurrentFrame();
  const gateTokenY = interpolate(frame, [64, 128], [96, 452], CLAMP);
  const gateTokenIn = interpolate(frame, [58, 68], [0, 1], CLAMP);
  const gate1Glow = interpolate(frame, [76, 90], [0, 1], CLAMP);
  const gate2Glow = interpolate(frame, [100, 114], [0, 1], CLAMP);
  return (
    <Shell code="11" kicker="第六节 · 敲诈勒索罪" title="与行使权利的区分：两道闸门">
      <div
        data-layout="exercise-right-gate-flow"
        data-visual-anchor="timeline-gate"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="gate-two-board,pass-case-board"
        data-focal-rule="a-claim-right-routed-through-both-gates-is-not-extortion"
        data-focal-channels="icon,connector,contrast,enclosure"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={3} marker="gate-two-board" style={{position: 'absolute', left: 0, top: 0, width: 700, height: 744}}>
          <Panel tone={C.lock} watermark={<Handshake size={160} color={C.lock} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px'}}>
            <TabChip tone={C.lock} icon={<Handshake size={22} color={C.white} strokeWidth={2.2} />}>判断两步走 · 顺序过闸</TabChip>
            <div style={{position: 'relative', height: 630, marginTop: 10}}>
              <div style={{position: 'absolute', left: 40, top: 0, width: 560, border: `4px solid ${C.lock}`, boxShadow: `0 0 ${gate1Glow * 26}px ${C.lock}${gate1Glow > 0.5 ? '55' : '00'}`, backgroundColor: C.vaultDeep, padding: '12px 14px'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4}}>
                  <Scale size={26} color={C.lock} strokeWidth={2.4} />
                  <span style={{fontSize: 23, fontWeight: 950, color: C.lock}}>闸一 · 非法占有目的</span>
                </div>
                <div style={{fontSize: 20, fontWeight: 860, lineHeight: 1.45}}>有<b>财产请求权</b>＝在行使权利 → <Mark color={C.lock}>没有</Mark>非法占有目的；请求权要有<b>基础</b>：事实依据＋法律依据</div>
              </div>
              <div style={{position: 'absolute', left: 316, top: 150, width: 4, height: 60, backgroundColor: C.ghost}} />
              <div style={{position: 'absolute', left: 40, top: 214, width: 560, border: `4px solid ${C.seal}`, boxShadow: `0 0 ${gate2Glow * 26}px ${C.seal}${gate2Glow > 0.5 ? '55' : '00'}`, backgroundColor: C.vaultDeep, padding: '12px 14px'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4}}>
                  <Megaphone size={26} color={C.seal} strokeWidth={2.4} />
                  <span style={{fontSize: 23, fontWeight: 950, color: C.seal}}>闸二 · 恐吓行为</span>
                </div>
                <div style={{fontSize: 20, fontWeight: 860, lineHeight: 1.45}}>以<Mark color={C.seal}>恶害</Mark>相通告，使对方产生<Mark color={C.seal}>恐惧心理</Mark>，以此威胁对方给钱</div>
              </div>
              <div style={{position: 'absolute', left: 316, top: 372, width: 4, height: 60, backgroundColor: C.ghost}} />
              <div style={{position: 'absolute', left: 130, top: 440, width: 420, border: `4px double ${C.seal}`, padding: '12px 14px', textAlign: 'center'}}>
                <span style={{fontSize: 24, fontWeight: 950, color: C.seal}}>两闸全过 → 敲诈勒索罪</span>
              </div>
              <div style={{position: 'absolute', left: 40, top: 560, fontSize: 20, fontWeight: 880, color: C.inkSoft, lineHeight: 1.5}}>任一闸不过 → 不构成本罪（摩托车被偷恐吓要回：有请求权·闸一不过<Neg size={18}>∉</Neg>）</div>
              <div style={{position: 'absolute', left: 250, top: gateTokenY, width: 120, height: 44, borderRadius: 22, backgroundColor: C.lock, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, opacity: gateTokenIn, boxShadow: '0 3px 9px rgba(28,38,32,0.4)'}}>
                <Handshake size={24} color={C.white} strokeWidth={2.4} />
                <span style={{fontSize: 18, fontWeight: 900, color: C.white}}>主张权利</span>
              </div>
            </div>
          </Panel>
        </Enter>

        <Enter delay={50} marker="pass-case-board" style={{position: 'absolute', left: 724, top: 0, width: 1052, height: 330}}>
          <Panel tone={C.lock} watermark={<Scale size={140} color={C.lock} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 18px'}}>
            <TabChip tone={C.lock} icon={<Ban size={22} color={C.white} strokeWidth={2.2} />}>闸一拦下 · 不构成（行使权利）</TabChip>
            <div style={{position: 'relative', height: 220, marginTop: 10}}>
              <div style={{position: 'absolute', left: 0, top: 0, width: 480, border: `3px solid ${C.lock}`, backgroundColor: C.lockSoft, padding: '10px 12px', fontSize: 20, fontWeight: 870, lineHeight: 1.45}}>
                <b style={{color: C.lock}}>摩托车被偷索回案：</b>3天不还就小心狗命——有请求权·无非法占有目的 → <Mark color={C.lock}>∉敲诈勒索</Mark>
              </div>
              <div style={{position: 'absolute', left: 520, top: 0, width: 480, border: `3px solid ${C.lock}`, backgroundColor: C.lockSoft, padding: '10px 12px', fontSize: 20, fontWeight: 870, lineHeight: 1.45}}>
                <b style={{color: C.lock}}>苍蝇案（2006·数额争议）：</b>发现苍蝇索精神损失费3000元——请求数额有争议，<Mark color={C.lock}>多数说：无非法占有目的</Mark> → ∉
              </div>
              <div style={{position: 'absolute', left: 0, top: 140, fontSize: 20, fontWeight: 880, color: C.inkSoft}}>共同点：手段虽带恐吓色彩，但闸一（正当请求权）先把案件拦下</div>
            </div>
          </Panel>
        </Enter>

        <Enter delay={100} marker="fail-case-board" style={{position: 'absolute', left: 724, top: 354, width: 1052, height: 390}}>
          <Panel tone={C.seal} watermark={<Megaphone size={140} color={C.seal} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 18px'}}>
            <TabChip tone={C.seal} icon={<Ban size={22} color={C.white} strokeWidth={2.2} />}>两闸全过 · 构成敲诈勒索罪</TabChip>
            <div style={{position: 'relative', height: 280, marginTop: 10}}>
              <div style={{position: 'absolute', left: 0, top: 0, width: 480, border: `3px solid ${C.seal}`, backgroundColor: C.sealSoft, padding: '10px 12px', fontSize: 20, fontWeight: 870, lineHeight: 1.45}}>
                <b style={{color: C.seal}}>青春损失费3000万案：</b>青春损失费<Neg size={18}>无法律依据</Neg>→有非法占有目的；曝光丑闻＝恶害通告 → 两闸全过
              </div>
              <div style={{position: 'absolute', left: 520, top: 0, width: 480, border: `3px solid ${C.seal}`, backgroundColor: C.sealSoft, padding: '10px 12px', fontSize: 20, fontWeight: 870, lineHeight: 1.45}}>
                <b style={{color: C.seal}}>嫖娼事实索1万案：</b>根本无权要求1万；公民有检举揭发权，但<Mark color={C.seal}>不能作为勒索财物的手段</Mark>
              </div>
                <div style={{position: 'absolute', left: 130, top: 176, display: 'flex', alignItems: 'center', gap: 12}}>
                <Megaphone size={26} color={C.seal} strokeWidth={2.2} />
                <span style={{fontSize: 21, fontWeight: 900, color: C.inkSoft}}>权利存在 ≠ 手段正当 →</span>
                <LedgerStamp delay={170} tone="seal">敲诈勒索罪</LedgerStamp>
              </div>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const ExtortionNoticeFlowScene = () => {
  /* data-final-knowledge="flow-chain-board" data-final-knowledge="branch-fail-board" data-final-knowledge="attempt-drop-board" */
  const frame = useCurrentFrame();
  const chainX = interpolate(frame, [60, 128], [50, 1480], CLAMP);
  const chainIn = interpolate(frame, [54, 64], [0, 1], CLAMP);
  const stepGlows = [0, 1, 2, 3].map((i) => interpolate(frame, [72 + i * 18, 84 + i * 18], [0, 1], CLAMP));
  const dropY1 = interpolate(frame, [150, 184], [0, 1], CLAMP);
  const dropIn1 = interpolate(frame, [144, 154], [0, 1], CLAMP);
  const dropY2 = interpolate(frame, [196, 232], [0, 1], CLAMP);
  const dropIn2 = interpolate(frame, [190, 200], [0, 1], CLAMP);
  return (
    <Shell code="09" kicker="第六节 · 敲诈勒索罪" title="敲诈勒索：恐吓的四步流程">
      <div
        data-layout="extortion-notice-flow"
        data-visual-anchor="flow-path"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="flow-chain-board,branch-fail-board"
        data-focal-rule="each-broken-step-routes-the-case-away-from-completed-extortion"
        data-focal-channels="icon,connector,contrast,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={3} marker="flow-chain-board" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 330}}>
          <Panel tone={C.seal} watermark={<Megaphone size={150} color={C.seal} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 18px'}}>
            <TabChip tone={C.seal} icon={<Megaphone size={22} color={C.white} strokeWidth={2.2} />}>行为模型 · 四步主链（带着非法占有目的）</TabChip>
            <div style={{position: 'relative', height: 220, marginTop: 10}}>
              <FlowNode left={0} top={40} width={368} tone={C.seal} icon={<Megaphone size={24} color={C.white} strokeWidth={2.2} />} title="① 以恶害相通告" body={<>鬼面具吓人<Neg size={18}>∉</Neg>＝没有通告；恶害内容<Mark color={C.seal}>合法也可</Mark>（告发受贿索5万∈）</>} />
              <FlowNode left={432} top={40} width={368} tone={C.yellow} icon={<EyeOff size={24} color={C.white} strokeWidth={2.2} />} title="② 产生恐惧心理" body={<>前提＝对方<ThinU color={C.yellow}>相信</ThinU>恶害；且须为<Mark color={C.yellow}>重大恶害</Mark></>} />
              <FlowNode left={864} top={40} width={368} tone={C.slate} icon={<Coins size={24} color={C.white} strokeWidth={2.2} />} title="③ 基于恐惧交付" body={<>交付财物与恐惧之间要有<ThinU color={C.slate}>因果驱动</ThinU></>} />
              <FlowNode left={1296} top={40} width={440} tone={C.lock} icon={<Scale size={24} color={C.white} strokeWidth={2.2} />} title="④ 取得财物 → 既遂" body={<>四步贯通＝敲诈勒索罪<Mark color={C.lock}>既遂</Mark></>} />
              <div style={{position: 'absolute', left: chainX, top: 96, width: 50, height: 50, borderRadius: 25, backgroundColor: C.seal, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: chainIn, boxShadow: '0 3px 9px rgba(28,38,32,0.4)'}}>
                <Coins size={24} color={C.white} strokeWidth={2.4} />
              </div>
              {[0, 1, 2, 3].map((i) => (
                <div key={i} style={{position: 'absolute', left: [400, 832, 1264, 1560][i] - 12, top: 92, fontSize: 15, fontWeight: 950, color: [C.seal, C.yellow, C.slate, C.lock][i], opacity: stepGlows[i]}}>✓</div>
              ))}
            </div>
          </Panel>
        </Enter>

        <Enter delay={60} marker="branch-fail-board" style={{position: 'absolute', left: 0, top: 354, width: 876, height: 390}}>
          <Panel tone={C.slate} watermark={<Ban size={140} color={C.slate} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px'}}>
            <TabChip tone={C.slate} icon={<Ban size={22} color={C.white} strokeWidth={2.2} />}>断在第①②步 · 根本不入罪</TabChip>
            <div style={{position: 'relative', height: 290, marginTop: 8}}>
              <VDrop left={140} top={0} height={54} color={C.slate} />
              <div style={{position: 'absolute', left: 118, top: dropY1 * 46, width: 44, height: 28, borderRadius: 14, backgroundColor: C.slate, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: dropIn1}}>
                <Ban size={18} color={C.white} strokeWidth={2.4} />
              </div>
              <div style={{position: 'absolute', left: 0, top: 58, width: 380, border: `3px solid ${C.slate}`, backgroundColor: C.vaultDeep, padding: '9px 12px', fontSize: 20, fontWeight: 860, lineHeight: 1.45}}>
                <b style={{color: C.slate}}>鬼面具案：</b>无恶害通告 → 恐吓<Neg size={18}>∉</Neg> → <Mark color={C.slate}>盗窃罪</Mark>
              </div>
              <VDrop left={560} top={0} height={140} color={C.yellow} />
              <div style={{position: 'absolute', left: 428, top: 144, width: 420, border: `3px solid ${C.yellow}`, backgroundColor: C.vaultDeep, padding: '9px 12px', fontSize: 20, fontWeight: 860, lineHeight: 1.45}}>
                <b style={{color: C.yellow}}>“让雷劈你”案：</b>没人相信 → 恐吓<Neg size={18}>∉</Neg><br /><b style={{color: C.yellow}}>不还手机身份证索3000元：</b><Neg size={18}>非重大恶害</Neg>→恐惧<Neg size={18}>∉</Neg>→不构成
              </div>
            </div>
          </Panel>
        </Enter>

        <Enter delay={110} marker="attempt-drop-board" style={{position: 'absolute', left: 900, top: 354, width: 876, height: 390}}>
          <Panel tone={C.seal} watermark={<Zap size={140} color={C.seal} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px'}}>
            <TabChip tone={C.seal} icon={<Zap size={22} color={C.white} strokeWidth={2.2} />}>断在第③④步 · 成立但未遂</TabChip>
            <div style={{position: 'relative', height: 290, marginTop: 8}}>
              <VDrop left={160} top={0} height={54} color={C.seal} />
              <div style={{position: 'absolute', left: 138, top: dropY2 * 46, width: 44, height: 28, borderRadius: 14, backgroundColor: C.seal, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: dropIn2}}>
                <Ban size={18} color={C.white} strokeWidth={2.4} />
              </div>
              <div style={{position: 'absolute', left: 0, top: 58, width: 400, border: `3px solid ${C.seal}`, backgroundColor: C.sealSoft, padding: '9px 12px', fontSize: 20, fontWeight: 860, lineHeight: 1.45}}>
                <b style={{color: C.seal}}>黑老大欣赏案：</b>没恐惧·欣赏而给 → 因果<Neg size={18}>断裂</Neg>
              </div>
              <VDrop left={600} top={0} height={140} color={C.seal} />
              <div style={{position: 'absolute', left: 440, top: 144, width: 408, border: `3px solid ${C.seal}`, backgroundColor: C.sealSoft, padding: '9px 12px', fontSize: 20, fontWeight: 860, lineHeight: 1.45}}>
                <b style={{color: C.seal}}>警方诱捕放钱案：</b>配合侦查非基于恐惧 → <Mark color={C.seal}>未遂</Mark>（到手也是未遂）
              </div>
              <div style={{position: 'absolute', left: 0, top: 240, fontSize: 21, fontWeight: 950, color: C.seal}}>两条支线汇入同一出口：<LedgerStamp delay={200} tone="seal">敲诈勒索罪·未遂</LedgerStamp></div>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
