import {Ban, Bird, Coins, Fish, Hand, KeyRound, Landmark, Scale, Skull, Timer, Wallet} from 'lucide-react';
import {interpolate, useCurrentFrame} from 'remotion';
import {C, Enter, Mark, Neg, Panel, Shell, SoftHi, TabChip, ThinU, LedgerStamp} from './kit';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const MinorDamageMisuseScene = () => {
  /* data-final-knowledge="damage-rings-board" data-final-knowledge="misuse-fork-board" */
  const frame = useCurrentFrame();
  const ringScale = (index: number) => interpolate(frame, [40 + index * 16, 66 + index * 16], [0.3, 1], CLAMP);
  const birdDrop = interpolate(frame, [96, 118], [-40, 0], CLAMP);
  const birdIn = interpolate(frame, [90, 100], [0, 1], CLAMP);
  return (
    <Shell code="12" kicker="第九节 · 普通罪名" title="故意毁坏财物罪：毁坏的三层环">
      <div
        data-layout="minor-damage-rings-misuse-fork"
        data-visual-anchor="boundary"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="damage-rings-board,misuse-fork-board"
        data-focal-rule="utility-impairment-at-any-ring-completes-the-damage"
        data-focal-channels="icon,enclosure,contrast,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={3} marker="damage-rings-board" style={{position: 'absolute', left: 0, top: 0, width: 876, height: 744}}>
          <Panel tone={C.seal} watermark={<Bird size={160} color={C.seal} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px'}}>
            <TabChip tone={C.seal} icon={<Skull size={22} color={C.white} strokeWidth={2.2} />}>故意毁坏财物罪（第275条）· 效用侵害说</TabChip>
            <div style={{position: 'relative', height: 640, marginTop: 8}}>
              <div style={{position: 'absolute', left: 30, top: 210, width: 420, height: 380, borderRadius: 18, border: `4px solid ${C.slate}`, backgroundColor: C.slateSoft, scale: `${ringScale(0)}`}} />
              <div style={{position: 'absolute', left: 90, top: 270, width: 300, height: 260, borderRadius: 16, border: `4px solid ${C.yellow}`, backgroundColor: C.yellowSoft, scale: `${ringScale(1)}`}} />
              <div style={{position: 'absolute', left: 150, top: 330, width: 180, height: 140, borderRadius: 14, border: `4px solid ${C.seal}`, backgroundColor: C.sealSoft, scale: `${ringScale(2)}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4}}>
                <Skull size={30} color={C.seal} strokeWidth={2.2} />
                <span style={{fontSize: 21, fontWeight: 950, color: C.seal}}>物理性毁坏</span>
                <span style={{fontSize: 18, fontWeight: 850, color: C.inkSoft}}>砸烂物质本体</span>
              </div>
              <div style={{position: 'absolute', left: 92, top: 238, fontSize: 20, fontWeight: 930, color: C.yellow}}>功能性毁坏 · 功能丧失（客观＋主观认可）</div>
              <div style={{position: 'absolute', left: 32, top: 178, fontSize: 20, fontWeight: 930, color: C.slate}}>使所有权人丧失占有 · 也算毁坏</div>
              <div style={{position: 'absolute', left: 40, top: 380, width: 200, fontSize: 19, fontWeight: 870, color: C.ink, lineHeight: 1.4}}>
                <Fish size={22} color={C.slate} strokeWidth={2.2} /> 鱼塘放生<br />
                <Bird size={22} color={C.slate} strokeWidth={2.2} /> 放飞笼中鸟<br />
                戒指扔大海（2006）
              </div>
              <div style={{position: 'absolute', left: 480, top: 40, width: 368, border: `3px solid ${C.seal}`, padding: '10px 12px', fontSize: 20, fontWeight: 880, lineHeight: 1.5}}>
                任一环被击穿 → 效用丧失或减少 → <Mark color={C.seal}>即成立“毁坏”</Mark>，<Neg size={18}>不限</Neg>物理性变更
              </div>
              <div style={{position: 'absolute', left: 236, top: 210 + birdDrop, opacity: birdIn, display: 'flex', alignItems: 'center', gap: 6}}>
                <Bird size={24} color={C.slate} strokeWidth={2.4} />
                <span style={{fontSize: 18, fontWeight: 900, color: C.slate}}>放飞＝毁坏</span>
              </div>
              <div style={{position: 'absolute', left: 480, top: 200, width: 368, border: `3px solid ${C.lock}`, padding: '10px 12px', fontSize: 20, fontWeight: 880, lineHeight: 1.5}}>
                <b style={{color: C.lock}}>毁弃型犯罪：</b>只有毁坏意思·<Neg size={18}>无</Neg>利用意思 → <Mark color={C.lock}>故意毁坏财物罪</Mark>（对比取得型要求非法占有目的）
              </div>
            </div>
          </Panel>
        </Enter>

        <Enter delay={46} marker="misuse-fork-board" style={{position: 'absolute', left: 900, top: 0, width: 876, height: 744}}>
          <Panel tone={C.lock} watermark={<Coins size={160} color={C.lock} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px'}}>
            <TabChip tone={C.lock} icon={<Coins size={22} color={C.white} strokeWidth={2.2} />}>挪用资金罪（第272条）· 单位人员＋职务便利</TabChip>
            <div style={{position: 'relative', height: 640, marginTop: 8}}>
              <div style={{position: 'absolute', left: 250, top: 0, fontSize: 20, fontWeight: 900, color: C.inkSoft}}>挪用本单位资金归个人使用 → 三岔路</div>
              <div style={{position: 'absolute', left: 416, top: 32, width: 4, height: 30, backgroundColor: C.ghost}} />
              <div style={{position: 'absolute', left: 40, top: 66, width: 4, height: 44, backgroundColor: C.ghost, rotate: '48deg'}} />
              <div style={{position: 'absolute', left: 790, top: 66, width: 4, height: 44, backgroundColor: C.ghost, rotate: '-48deg'}} />
              <div style={{position: 'absolute', left: 0, top: 112, width: 262, border: `4px solid ${C.lock}`, padding: '10px 12px', fontSize: 20, fontWeight: 880, lineHeight: 1.45}}>
                <b style={{color: C.lock}}>归个人使用·借贷他人</b><br />数额较大＋<Mark color={C.lock}>超3个月未还</Mark>
              </div>
              <div style={{position: 'absolute', left: 306, top: 112, width: 262, border: `4px solid ${C.yellow}`, padding: '10px 12px', fontSize: 20, fontWeight: 880, lineHeight: 1.45}}>
                <b style={{color: C.yellow}}>营利活动</b><br />数额较大＋<Mark color={C.yellow}>无时间要求</Mark>
              </div>
              <div style={{position: 'absolute', left: 612, top: 112, width: 262, border: `4px solid ${C.seal}`, padding: '10px 12px', fontSize: 20, fontWeight: 880, lineHeight: 1.45}}>
                <b style={{color: C.seal}}>非法活动</b><br /><Mark color={C.seal}>无数额·无时间要求</Mark>
              </div>
              <div style={{position: 'absolute', left: 0, top: 246, width: 874, height: 3, backgroundColor: C.ghost, opacity: 0.5}} />
              <div style={{position: 'absolute', left: 0, top: 268, width: 424, border: `3px solid ${C.seal}`, backgroundColor: C.sealSoft, padding: '10px 12px', fontSize: 20, fontWeight: 880, lineHeight: 1.5}}>
                <b style={{color: C.seal}}>转化犯：</b>挪用后<Mark color={C.seal}>故意不归还</Mark> → 转化为<ThinU color={C.seal}>职务侵占罪</ThinU>
              </div>
              <div style={{position: 'absolute', left: 450, top: 268, width: 424, border: `3px solid ${C.slate}`, padding: '10px 12px', fontSize: 20, fontWeight: 880, lineHeight: 1.5}}>
                <b style={{color: C.slate}}>数罪并罚：</b>挪用资金进行非法活动构成其他犯罪 → <Mark color={C.slate}>并罚</Mark>
              </div>
              <div style={{position: 'absolute', left: 0, top: 400, width: 874, border: `3px solid ${C.lock}`, backgroundColor: C.lockSoft, padding: '10px 12px', fontSize: 20, fontWeight: 880, lineHeight: 1.5}}>
                <b style={{color: C.lock}}>从宽（刑修十一）：</b><ThinU color={C.lock}>提起公诉前</ThinU>退还 → 可以从轻或减轻；犯罪较轻的 → 可以减轻或<SoftHi style={{fontSize: 19}}>免除</SoftHi>
              </div>
              <div style={{position: 'absolute', left: 0, top: 512, width: 874, display: 'flex', alignItems: 'center', gap: 10}}>
                <LedgerStamp delay={140} tone="lock">口诀：超三月未还 · 营利无时限 · 非法无门槛</LedgerStamp>
              </div>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const MinorFundsWagesScene = () => {
  /* data-final-knowledge="special-funds-belt-board" data-final-knowledge="wages-gate-board" */
  const frame = useCurrentFrame();
  const beltX = (index: number) => interpolate(frame, [36 + index * 10, 64 + index * 10], [-230, 0], CLAMP);
  const beltIn = (index: number) => interpolate(frame, [30 + index * 10, 40 + index * 10], [0, 1], CLAMP);
  const wageX = interpolate(frame, [130, 180], [200, 700], CLAMP);
  const wageIn = interpolate(frame, [124, 134], [0, 1], CLAMP);
  const gateGlow = interpolate(frame, [152, 166], [0, 1], CLAMP);
  const kinds = [
    {label: '救灾', icon: <Ban size={24} color={C.white} strokeWidth={2.2} />},
    {label: '抢险', icon: <KeyRound size={24} color={C.white} strokeWidth={2.2} />},
    {label: '防汛', icon: <Scale size={24} color={C.white} strokeWidth={2.2} />},
    {label: '优抚', icon: <Hand size={24} color={C.white} strokeWidth={2.2} />},
    {label: '扶贫', icon: <Coins size={24} color={C.white} strokeWidth={2.2} />},
    {label: '移民', icon: <Landmark size={24} color={C.white} strokeWidth={2.2} />},
    {label: '救济', icon: <Wallet size={24} color={C.white} strokeWidth={2.2} />},
  ];
  return (
    <Shell code="13" kicker="第九节 · 普通罪名" title="特定款物传送带与欠薪红线闸">
      <div
        data-layout="minor-funds-belt-wages-gate"
        data-visual-anchor="flow-path"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="special-funds-belt-board,wages-gate-board"
        data-focal-rule="wrong-purpose-and-missing-precondition-decide-these-two-crimes"
        data-focal-channels="icon,connector,contrast,enclosure"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={3} marker="special-funds-belt-board" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 330}}>
          <Panel tone={C.brass} watermark={<Landmark size={150} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 18px'}}>
            <TabChip tone={C.brass} icon={<Landmark size={22} color={C.white} strokeWidth={2.2} />}>挪用特定款物罪（第273条）· 七类款物传送带</TabChip>
            <div style={{position: 'relative', height: 210, marginTop: 10}}>
              <div style={{position: 'absolute', left: 0, top: 118, width: 1440, height: 4, backgroundColor: C.brass, opacity: 0.5}} />
              {kinds.map((kind, index) => (
                <div key={index} style={{position: 'absolute', left: index * 206 + beltX(index), top: 34, width: 172, textAlign: 'center', opacity: beltIn(index)}}>
                  <span style={{display: 'inline-flex', width: 52, height: 52, borderRadius: 12, backgroundColor: C.brass, alignItems: 'center', justifyContent: 'center'}}>{kind.icon}</span>
                  <div style={{fontSize: 21, fontWeight: 930, color: C.brass, marginTop: 4}}>{kind.label}款物</div>
                  <div style={{width: 3, height: 22, backgroundColor: C.brass, opacity: 0.6, margin: '4px auto 0'}} />
                </div>
              ))}
              <div style={{position: 'absolute', left: 1466, top: 30, width: 282, border: `3px solid ${C.seal}`, padding: '9px 12px', fontSize: 19, fontWeight: 880, lineHeight: 1.45}}>
                改变<b style={{color: C.seal}}>专用用途</b>（仍归公用）＋情节严重 → <Mark color={C.seal}>本罪</Mark>
              </div>
              <div style={{position: 'absolute', left: 0, top: 150, fontSize: 20, fontWeight: 880, color: C.inkSoft, width: 1440}}>
                单位犯罪，只处罚<Mark color={C.brass}>直接责任人员</Mark>；口诀：<ThinU color={C.brass}>救抢防优扶移济</ThinU>
              </div>
            </div>
          </Panel>
        </Enter>

        <Enter delay={54} marker="wages-gate-board" style={{position: 'absolute', left: 0, top: 354, width: 1776, height: 390}}>
          <Panel tone={C.slate} watermark={<Ban size={150} color={C.slate} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 18px'}}>
            <TabChip tone={C.slate} icon={<Ban size={22} color={C.white} strokeWidth={2.2} />}>拒不支付劳动报酬罪（第276条之一）· 不作为＋红线闸</TabChip>
            <div style={{position: 'relative', height: 290, marginTop: 10}}>
              <div style={{position: 'absolute', left: 0, top: 30, width: 380, border: `3px solid ${C.slate}`, backgroundColor: C.vaultDeep, padding: '10px 12px', fontSize: 20, fontWeight: 880, lineHeight: 1.45}}>
                <b style={{color: C.slate}}>不作为犯罪：</b>转移财产·逃匿逃避支付，或有能力支付<Mark color={C.slate}>而不支付</Mark>，数额较大
              </div>
              <div style={{position: 'absolute', left: 384, top: 84, width: 0, height: 0, borderLeft: '13px solid ' + C.slate, borderTop: '9px solid transparent', borderBottom: '9px solid transparent'}} />
              <div style={{position: 'absolute', left: 400, top: 8, width: 520, height: 150, border: `5px double ${C.seal}`, boxShadow: `0 0 ${gateGlow * 26}px ${C.seal}${gateGlow > 0.5 ? '55' : '00'}`, backgroundColor: C.sealSoft, padding: '10px 14px'}}>
                <div style={{fontSize: 22, fontWeight: 950, color: C.seal, display: 'flex', alignItems: 'center', gap: 8}}>
                  <Ban size={26} color={C.seal} strokeWidth={2.4} /> 红线闸 · 前置条件
                </div>
                <div style={{fontSize: 20, fontWeight: 880, lineHeight: 1.5, marginTop: 4}}>经<Mark color={C.seal}>政府有关部门责令支付仍不支付</Mark>——缺此一环<Neg size={19}>绝对不构成本罪</Neg></div>
              </div>
              <div style={{position: 'absolute', left: wageX, top: 58, width: 130, height: 40, borderRadius: 20, backgroundColor: C.slate, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, opacity: wageIn}}>
                <Wallet size={22} color={C.white} strokeWidth={2.4} />
                <span style={{fontSize: 17, fontWeight: 900, color: C.white}}>欠薪</span>
              </div>
              <div style={{position: 'absolute', left: 924, top: 84, width: 0, height: 0, borderLeft: '13px solid ' + C.slate, borderTop: '9px solid transparent', borderBottom: '9px solid transparent'}} />
              <div style={{position: 'absolute', left: 942, top: 30, width: 300, border: `3px solid ${C.slate}`, backgroundColor: C.vaultDeep, padding: '10px 12px', fontSize: 20, fontWeight: 880, lineHeight: 1.45}}>
                过闸 → <b style={{color: C.slate}}>本罪成立</b>（单位犯罪：对单位判罚金＋罚直接责任人员）
              </div>
              <div style={{position: 'absolute', left: 0, top: 196, width: 1240, border: `3px solid ${C.lock}`, backgroundColor: C.lockSoft, padding: '10px 12px', fontSize: 20, fontWeight: 880, lineHeight: 1.5}}>
                <b style={{color: C.lock}}>减免出口（三件套同时满足）：</b>尚未造成严重后果＋<ThinU color={C.lock}>提起公诉前</ThinU>支付劳动报酬＋依法承担赔偿责任 → 可以减轻或免除
              </div>
              <div style={{position: 'absolute', left: 1270, top: 196}}><LedgerStamp delay={150} tone="lock">对比：挪用特定款物归个人使用 → 定挪用公款罪并从重</LedgerStamp></div>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
