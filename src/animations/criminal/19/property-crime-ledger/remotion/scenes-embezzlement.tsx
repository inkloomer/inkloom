import {Ban, Coins, Hand, KeyRound, Package, Scale, ScrollText, Users, Wrench} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {C, Enter, Mark, Neg, Panel, Shell, SoftHi, TabChip, ThinU, LedgerStamp} from './kit';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const EmbezzlementTrustLedgerScene = () => {
  /* data-final-knowledge="pipeline-strip" data-final-knowledge="source-fork-board" data-final-knowledge="possession-gate-board" data-final-knowledge="illicit-fork-board" */
  const frame = useCurrentFrame();
  const line = (left: number, top: number, width: number, color: string) =>
    <div style={{position: 'absolute', left, top, width, height: 0, borderTop: `3px solid ${color}`, opacity: 0.75}} />;
  const drop = (left: number, top: number, height: number, color: string) =>
    <div style={{position: 'absolute', left, top, width: 0, height, borderLeft: `3px solid ${color}`, opacity: 0.75}} />;
  const tri = (left: number, top: number, color: string) =>
    <div style={{position: 'absolute', left, top, width: 0, height: 0, borderLeft: `12px solid ${color}`, borderTop: '8px solid transparent', borderBottom: '8px solid transparent', opacity: 0.85}} />;

  const tokenX = interpolate(frame, [76, 128], [150, 1150], {...CLAMP, easing: (p: number) => 1 - Math.pow(1 - p, 3)});
  const tokenIn = interpolate(frame, [70, 82], [0, 1], CLAMP);
  const midGlow = interpolate(frame, [96, 108], [0, 1], CLAMP);
  const stampIn = interpolate(frame, [126, 142], [0.6, 1], CLAMP);
  const bypassY = interpolate(frame, [168, 196], [0, 1], CLAMP);
  const bypassIn = interpolate(frame, [162, 172], [0, 1], CLAMP);

  return (
    <Shell code="06" kicker="第二节 · 侵占罪" title="侵占罪：变占有为所有的转捩线">
      <div
        data-layout="embezzlement-pipeline-flow"
        data-visual-anchor="flow-path"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="pipeline-strip,source-fork-board"
        data-focal-rule="embezzlement-turns-own-possession-of-others-property-into-ownership"
        data-focal-channels="icon,connector,contrast,enclosure"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={3} marker="pipeline-strip" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 170}}>
          <Panel tone={C.lock} watermark={<ScrollText size={130} color={C.lock} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 18px'}}>
            <TabChip tone={C.lock} icon={<ScrollText size={22} color={C.white} strokeWidth={2.2} />}>第270条 · 状态转捩</TabChip>
            <div style={{position: 'absolute', left: 24, right: 24, top: 62}}>
              <div style={{position: 'absolute', left: 0, top: 0, width: 470, height: 84, border: `3px solid ${C.lock}`, backgroundColor: C.vaultDeep, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10}}>
                <Hand size={26} color={C.lock} strokeWidth={2.4} />
                <span style={{fontSize: 23, fontWeight: 950, color: C.ink}}>他人所有 · <ThinU color={C.lock}>自己占有</ThinU></span>
              </div>
              {line(486, 40, 300, C.brass)}
              {tri(786, 33, C.brass)}
              <div style={{position: 'absolute', left: 520, top: 4, width: 260, fontSize: 20, fontWeight: 850, color: C.brass, textAlign: 'center'}}>变为所有＝据为己有<div style={{fontSize: 18, color: C.inkSoft}}>无权处分 · 拒不返还</div></div>
              <div style={{position: 'absolute', left: 812, top: 0, width: 250, height: 84, border: `3px solid ${C.brass}`, boxShadow: `0 0 ${midGlow * 26}px ${C.brass}${midGlow > 0.5 ? '66' : '00'}, inset 0 0 ${midGlow * 14}px ${C.brass}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10}}>
                <Coins size={26} color={C.brass} strokeWidth={2.4} />
                <span style={{fontSize: 23, fontWeight: 950, color: C.ink}}>自己所有</span>
              </div>
              <div style={{position: 'absolute', left: tokenX, top: 26, width: 56, height: 34, borderRadius: 17, backgroundColor: C.brass, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: tokenIn, boxShadow: '0 2px 6px rgba(28,38,32,0.35)'}}>
                <Coins size={22} color={C.white} strokeWidth={2.4} />
              </div>
              {line(1078, 40, 120, C.seal)}
              {tri(1198, 33, C.seal)}
              <div style={{position: 'absolute', left: 1224, top: 8, scale: `${stampIn}`}}><LedgerStamp delay={126} tone="seal">侵占罪</LedgerStamp></div>
              <div style={{position: 'absolute', left: 1400, top: -6, width: 350, fontSize: 20, fontWeight: 800, color: C.inkSoft, lineHeight: 1.5}}>
                数额较大＋<ThinU color={C.seal}>拒不退还／拒不交出</ThinU><br />本罪<Mark color={C.lock}>告诉才处理</Mark>
              </div>
            </div>
          </Panel>
        </Enter>

        <Enter delay={40} marker="source-fork-board" style={{position: 'absolute', left: 0, top: 194, width: 566, height: 550}}>
          <Panel tone={C.brass} watermark={<Package size={150} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <TabChip tone={C.brass} icon={<Package size={22} color={C.white} strokeWidth={2.2} />}>来源 · 两大类对象</TabChip>
            <div style={{position: 'relative', flex: 1}}>
              <div style={{position: 'absolute', left: 0, top: 6, width: 500, border: `3px solid ${C.brass}`, padding: '10px 12px', display: 'flex', gap: 10, alignItems: 'center'}}>
                <Hand size={26} color={C.white} strokeWidth={2.2} />
                <span style={{fontSize: 21, fontWeight: 880, lineHeight: 1.45}}><b style={{color: C.brass}}>代为保管物（自愿）</b>：主人自愿转移占有；<Mark color={C.brass}>扩大解释</Mark>含出借物·担保物</span>
              </div>
              <div style={{position: 'absolute', left: 0, top: 128, width: 500, border: `3px solid ${C.slate}`, padding: '10px 12px', display: 'flex', gap: 10, alignItems: 'center'}}>
                <KeyRound size={26} color={C.white} strokeWidth={2.2} />
                <span style={{fontSize: 21, fontWeight: 880, lineHeight: 1.45}}><b style={{color: C.slate}}>遗忘物·埋藏物（非自愿）</b>：主人非自愿脱离占有（阳台衣飘邻家∈）</span>
              </div>
              <div style={{position: 'absolute', left: 60, top: 78, width: 3, height: 50, backgroundColor: C.ghost}} />
              <div style={{position: 'absolute', left: 60, top: 116, width: 3, height: 14, backgroundColor: C.ghost}} />
              <div style={{position: 'absolute', left: 0, top: 224, fontSize: 20, fontWeight: 850, color: C.inkSoft}}>两类来源汇入同一条转捩线 → 对象＝<Mark color={C.brass}>他人所有·自己占有</Mark></div>
            </div>
          </Panel>
        </Enter>

        <Enter delay={78} marker="possession-gate-board" style={{position: 'absolute', left: 590, top: 194, width: 592, height: 550}}>
          <Panel tone={C.seal} watermark={<Users size={150} color={C.seal} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px'}}>
            <TabChip tone={C.seal} icon={<Scale size={22} color={C.white} strokeWidth={2.2} />}>占有判断闸 · 形成占有？</TabChip>
            <div style={{position: 'relative', height: 460, marginTop: 10}}>
              <div style={{position: 'absolute', left: 0, top: 0, width: 540, border: `3px solid ${C.seal}`, padding: '9px 12px', display: 'flex', gap: 10, alignItems: 'center'}}>
                <Users size={24} color={C.white} strokeWidth={2.2} />
                <span style={{fontSize: 20, fontWeight: 870, lineHeight: 1.4}}><b style={{color: C.seal}}>伴娘保管戒指案：</b>只是<Mark color={C.seal}>占有辅助者</Mark>，戒指仍由新娘占有</span>
              </div>
              <div style={{position: 'absolute', left: 0, top: 92, width: 540, border: `3px solid ${C.slate}`, padding: '9px 12px', display: 'flex', gap: 10, alignItems: 'center'}}>
                <Ban size={24} color={C.white} strokeWidth={2.2} />
                <span style={{fontSize: 20, fontWeight: 870, lineHeight: 1.4}}><b style={{color: C.slate}}>借手机案·洗车彩票案：</b>借用≠占有手机；占有车≠占有车内彩票</span>
              </div>
              <div style={{position: 'absolute', left: 120, top: 176, fontSize: 19, fontWeight: 900, color: C.seal}}>未形成占有 ↓ 绕过侵占，直落盗窃</div>
              <div style={{position: 'absolute', left: 20, top: 208, width: 480, height: 3, backgroundColor: C.seal, opacity: 0.7}} />
              <div style={{position: 'absolute', left: 496, top: 199, width: 0, height: 0, borderLeft: `12px solid ${C.seal}`, borderTop: '9px solid transparent', borderBottom: '9px solid transparent'}} />
              <div style={{position: 'absolute', left: 20 + bypassY * 300, top: 186, width: 48, height: 30, borderRadius: 15, backgroundColor: C.seal, opacity: bypassIn, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Users size={20} color={C.white} strokeWidth={2.4} />
              </div>
              <div style={{position: 'absolute', left: 20, top: 234, width: 500, border: `3px solid ${C.seal}`, backgroundColor: C.sealSoft, padding: '10px 12px'}}>
                <span style={{fontSize: 22, fontWeight: 950, color: C.seal}}>→ 盗窃罪（破坏他人占有）</span>
              </div>
              <div style={{position: 'absolute', left: 0, top: 340, width: 540, border: `3px solid ${C.lock}`, padding: '9px 12px', display: 'flex', gap: 10, alignItems: 'center'}}>
                <Hand size={24} color={C.white} strokeWidth={2.2} />
                <span style={{fontSize: 20, fontWeight: 870, lineHeight: 1.4}}><b style={{color: C.lock}}>形成占有后拒不返还：</b>乙保管汽车到期不还 → <Mark color={C.lock}>侵占罪</Mark></span>
              </div>
              <div style={{position: 'absolute', left: 20, top: 418, fontSize: 20, fontWeight: 900, color: C.lock}}>↑ 沿转捩线定侵占罪</div>
            </div>
          </Panel>
        </Enter>

        <Enter delay={116} marker="illicit-fork-board" style={{position: 'absolute', left: 1206, top: 194, width: 570, height: 550}}>
          <Panel tone={C.slate} watermark={<Wrench size={150} color={C.slate} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px'}}>
            <TabChip tone={C.slate} icon={<Ban size={22} color={C.white} strokeWidth={2.2} />}>不法原因委托 · 三分岔（多数说）</TabChip>
            <div style={{position: 'relative', height: 452, marginTop: 10}}>
              <div style={{position: 'absolute', left: 210, top: 0, fontSize: 20, fontWeight: 900, color: C.inkSoft}}>委托给乙后，乙拒不返还</div>
              <div style={{position: 'absolute', left: 262, top: 30, width: 3, height: 34, backgroundColor: C.ghost}} />
              <div style={{position: 'absolute', left: 0, top: 64, width: 176, border: `3px solid ${C.slate}`, padding: '8px 10px', fontSize: 19, fontWeight: 870, lineHeight: 1.4}}><b style={{color: C.slate}}>行贿款转交</b><br />甲无返还请求权</div>
              <div style={{position: 'absolute', left: 196, top: 64, width: 176, border: `3px solid ${C.slate}`, padding: '8px 10px', fontSize: 19, fontWeight: 870, lineHeight: 1.4}}><b style={{color: C.slate}}>窝藏赃物保管</b><br />黑吃黑</div>
              <div style={{position: 'absolute', left: 392, top: 64, width: 176, border: `3px solid ${C.lock}`, padding: '8px 10px', fontSize: 19, fontWeight: 870, lineHeight: 1.4}}><b style={{color: C.lock}}>修车（合法委托）</b><br />有返还请求权</div>
              <div style={{position: 'absolute', left: 0, top: 168, width: 372, textAlign: 'center'}}><Neg size={20}>均不构成侵占罪</Neg></div>
              <div style={{position: 'absolute', left: 400, top: 168, width: 168, textAlign: 'center', fontSize: 21, fontWeight: 950, color: C.lock}}>→ 侵占罪</div>
              <div style={{position: 'absolute', left: 0, top: 216, width: 540, height: 3, backgroundColor: C.ghost, opacity: 0.5}} />
              <div style={{position: 'absolute', left: 0, top: 238, width: 540, border: `3px solid ${C.brass}`, padding: '10px 12px', fontSize: 20, fontWeight: 870, lineHeight: 1.45}}>
                <b style={{color: C.brass}}>种类物混同：</b>多找1万元花掉<Neg size={19}>∉</Neg>——占有即混同；<Mark color={C.seal}>拒不返还</Mark>时才表明变占有为所有
              </div>
              <div style={{position: 'absolute', left: 0, top: 356, width: 540, border: `3px solid ${C.lock}`, padding: '10px 12px', fontSize: 20, fontWeight: 870, lineHeight: 1.45}}>
                <b style={{color: C.lock}}>行为方式：</b>作为＝无权处分（变卖·消费·抵押·赠与）；不作为＝<SoftHi style={{fontSize: 19}}>拒不返还</SoftHi>
              </div>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
