import {Ban, Bike, Dog, Grab, KeyRound, ScrollText, ShieldAlert, Zap} from 'lucide-react';
import {interpolate, useCurrentFrame} from 'remotion';
import {C, Enter, Mark, Neg, Panel, Shell, SoftHi, TabChip, ThinU, LedgerStamp} from './kit';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const SnatchViolenceLaneScene = () => {
  /* data-final-knowledge="violence-stair-board" data-final-knowledge="case-pin-board" data-final-knowledge="weapon-gate-board" */
  const frame = useCurrentFrame();
  const climbX = interpolate(frame, [96, 140], [110, 400], CLAMP);
  const climbTop = interpolate(frame, [96, 140], [452, 318], CLAMP);
  const climbIn = interpolate(frame, [90, 100], [0, 1], CLAMP);
  const snatchGlow = interpolate(frame, [130, 144], [0, 1], CLAMP);
  const weaponY = interpolate(frame, [190, 246], [26, 236], CLAMP);
  const weaponIn = interpolate(frame, [184, 194], [0, 1], CLAMP);
  const gateGlow = interpolate(frame, [216, 230], [0, 1], CLAMP);
  return (
    <Shell code="07" kicker="第四节 · 抢夺罪" title="抢夺罪：暴力三阶与凶器拟制闸">
      <div
        data-layout="snatch-stair-gate-flow"
        data-visual-anchor="flow-path"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="violence-stair-board,weapon-gate-board"
        data-focal-rule="snatch-occupies-the-middle-rung-of-the-violence-stair"
        data-focal-channels="icon,connector,contrast,enclosure"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={3} marker="violence-stair-board" style={{position: 'absolute', left: 0, top: 0, width: 1050, height: 744}}>
          <Panel tone={C.seal} watermark={<Grab size={170} color={C.seal} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px'}}>
            <TabChip tone={C.seal} icon={<Grab size={22} color={C.white} strokeWidth={2.2} />}>手段暴力程度 · 三阶位阶（A⊂A+B，包容评价·非对立排斥）</TabChip>
            <div style={{position: 'relative', height: 646, marginTop: 8}}>
              <div style={{position: 'absolute', left: 0, bottom: 8, width: 300, height: 130, border: `3px solid ${C.slate}`, backgroundColor: C.vaultDeep, padding: '10px 12px'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 8}}><Ban size={24} color={C.slate} strokeWidth={2.4} /><span style={{fontSize: 22, fontWeight: 950, color: C.slate}}>盗窃罪</span></div>
                <div style={{fontSize: 19, fontWeight: 850, marginTop: 6, lineHeight: 1.4}}>对物<b>平和</b>手段<br />对人身<Neg size={18}>无危险</Neg></div>
              </div>
              <div style={{position: 'absolute', left: 330, bottom: 148, width: 330, height: 190, border: `4px solid ${C.seal}`, boxShadow: `0 0 ${snatchGlow * 26}px ${C.seal}${snatchGlow > 0.5 ? '66' : '00'}, inset 0 0 ${snatchGlow * 14}px ${C.seal}22`, backgroundColor: C.sealSoft, padding: '10px 12px'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 8}}><Grab size={26} color={C.seal} strokeWidth={2.4} /><span style={{fontSize: 24, fontWeight: 950, color: C.seal}}>抢夺罪</span><LedgerStamp delay={60} tone="seal">本讲</LedgerStamp></div>
                <div style={{fontSize: 19, fontWeight: 870, marginTop: 6, lineHeight: 1.45}}>对物<b>暴力</b>·夺取财物<br />对人<ThinU color={C.seal}>有危险</ThinU>（紧密占有时）</div>
              </div>
              <div style={{position: 'absolute', left: climbX, top: climbTop, width: 52, height: 52, borderRadius: 26, backgroundColor: C.seal, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: climbIn, boxShadow: '0 2px 8px rgba(28,38,32,0.4)'}}>
                <Grab size={26} color={C.white} strokeWidth={2.4} />
              </div>
              <div style={{position: 'absolute', left: climbX + 60, top: climbTop - 4, fontSize: 17, fontWeight: 900, color: C.seal, opacity: climbIn}}>紧密占有·有危险</div>
              <div style={{position: 'absolute', left: 700, bottom: 358, width: 316, height: 130, border: `3px solid ${C.night}`, backgroundColor: C.vaultDeep, padding: '10px 12px'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 8}}><Zap size={24} color={C.night} strokeWidth={2.4} /><span style={{fontSize: 22, fontWeight: 950, color: C.night}}>抢劫罪</span></div>
                <div style={{fontSize: 19, fontWeight: 850, marginTop: 6, lineHeight: 1.4}}>对人<b>暴力</b><br />压制人的反抗</div>
              </div>
              <div style={{position: 'absolute', left: 262, bottom: 96, width: 0, height: 0, borderLeft: '13px solid ' + C.ghost, borderTop: '9px solid transparent', borderBottom: '9px solid transparent'}} />
              <div style={{position: 'absolute', left: 632, bottom: 236, width: 0, height: 0, borderLeft: '13px solid ' + C.ghost, borderTop: '9px solid transparent', borderBottom: '9px solid transparent'}} />
              <div style={{position: 'absolute', left: 0, bottom: 322, width: 1010, fontSize: 19, fontWeight: 850, color: C.inkSoft, lineHeight: 1.5}}>
                公开·秘密<Neg size={18}>非</Neg>区分标准（深夜秘密扯走脖挂手机勒出红印→仍∈抢夺）；乘人不备<Neg size={18}>非</Neg>必要条件（乙警惕抱紧仍被当面夺走→∈抢夺）
              </div>
              <div style={{position: 'absolute', left: 0, top: 0, width: 1010, display: 'flex', gap: 12}}>
                <div style={{flex: 1, border: `3px solid ${C.lock}`, padding: '8px 12px', fontSize: 19, fontWeight: 870, lineHeight: 1.45}}>
                  <b style={{color: C.lock}}>紧密占有 → 落在抢夺阶：</b>拎包逛街被从后面夺下<br /><span style={{color: C.inkSoft}}>手段对人身有危险</span>
                </div>
                <div style={{flex: 1, border: `3px solid ${C.slate}`, padding: '8px 12px', fontSize: 19, fontWeight: 870, lineHeight: 1.45}}>
                  <b style={{color: C.slate}}>松弛占有 → 落回盗窃阶：</b>包摔出5米捡走·悄悄割断背带<br /><span style={{color: C.inkSoft}}>对人身<Neg size={17}>无危险</Neg>＝平和手段·公开盗窃∈</span>
                </div>
              </div>
            </div>
          </Panel>
        </Enter>

        <Enter delay={46} marker="case-pin-board" style={{position: 'absolute', left: 1074, top: 0, width: 702, height: 250}}>
          <Panel tone={C.yellow} watermark={<Bike size={130} color={C.yellow} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <TabChip tone={C.yellow} icon={<ScrollText size={22} color={C.white} strokeWidth={2.2} />}>司法解释两点（都属注意规定）</TabChip>
            <div style={{fontSize: 20, fontWeight: 870, lineHeight: 1.5}}>
              <b style={{color: C.yellow}}>① 飞车抢夺三情形 → 按抢劫要件直接判断：</b>不放手强行夺取·逼挤撞击逼倒·放任轻伤以上
            </div>
            <div style={{fontSize: 20, fontWeight: 870, lineHeight: 1.5}}>
              <b style={{color: C.seal}}>② 结果加重犯：</b>抢夺<Mark color={C.seal}>过失</Mark>致人重伤、死亡 → 定抢夺罪加重处罚
            </div>
          </Panel>
        </Enter>

        <Enter delay={90} marker="weapon-gate-board" style={{position: 'absolute', left: 1074, top: 274, width: 702, height: 470}}>
          <Panel tone={C.night} watermark={<Dog size={150} color={C.night} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px'}}>
            <TabChip tone={C.night} icon={<ShieldAlert size={22} color={C.white} strokeWidth={2.2} />}>第267条第2款 · 携带凶器抢夺 → 拟制闸</TabChip>
            <div style={{position: 'relative', height: 380, marginTop: 8}}>
              <div style={{position: 'absolute', left: 0, top: 0, width: 646, border: `3px solid ${C.slate}`, padding: '8px 12px', fontSize: 19, fontWeight: 870, lineHeight: 1.45}}>
                <b style={{color: C.slate}}>凶器二类：</b>性质上＝枪支·爆炸物·管制刀具；用法上＝<Mark color={C.slate}>杀伤力＋畏惧感</Mark>（菜刀·砖块·藏獒∈；汽车在大街畏惧感低<Neg size={18}>∉</Neg>）
              </div>
              <div style={{position: 'absolute', left: 306, top: 96, width: 3, height: 26, backgroundColor: C.ghost}} />
              <div style={{position: 'absolute', left: 0, top: 122, width: 646, border: `3px solid ${C.yellow}`, boxShadow: `0 0 ${gateGlow * 24}px ${C.yellow}${gateGlow > 0.5 ? '55' : '00'}`, padding: '8px 12px', fontSize: 19, fontWeight: 870, lineHeight: 1.45}}>
                <b style={{color: C.yellow}}>携带门槛：</b>不要求随身·显示·暗示；要求<Mark color={C.yellow}>随时使用可能性</Mark>（密码箱里的枪<Neg size={18}>∉</Neg>）＋<Mark color={C.yellow}>对人使用意图</Mark>（买菜刀做饭<Neg size={18}>∉</Neg>·拎砖逛街∈）
              </div>
              <div style={{position: 'absolute', left: 610, top: weaponY, width: 48, height: 30, borderRadius: 15, backgroundColor: C.night, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: weaponIn}}>
                <Dog size={20} color={C.white} strokeWidth={2.4} />
              </div>
              <div style={{position: 'absolute', left: 306, top: 218, width: 3, height: 26, backgroundColor: C.ghost}} />
              <div style={{position: 'absolute', left: 130, top: 244, display: 'flex', alignItems: 'center', gap: 12}}>
                <KeyRound size={26} color={C.night} strokeWidth={2.2} />
                <span style={{fontSize: 21, fontWeight: 900, color: C.inkSoft}}>越过两道门 →</span>
                <LedgerStamp delay={150} tone="seal">拟制为抢劫罪</LedgerStamp>
              </div>
              <div style={{position: 'absolute', left: 0, top: 316, fontSize: 19, fontWeight: 850, color: C.inkSoft, lineHeight: 1.5}}>
                本款是<ThinU color={C.seal}>法律拟制</ThinU>而非注意规定：没有它，携带凶器抢夺仍定抢夺罪（对比：携带凶器盗窃→仍盗窃）
              </div>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
