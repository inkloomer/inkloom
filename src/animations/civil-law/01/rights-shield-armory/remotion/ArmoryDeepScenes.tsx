import {Ban, Gavel, Hand, Home, Key, Megaphone, Scale, ScrollText, Shield, Timer, Zap} from 'lucide-react';
import {interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';
import {Boss, C, Chip, Enter, Seal, Shell, Soft, Under, prog} from './ArmoryScenes';

export const ReturnNuisanceDangerScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="ground-fork" data-final-knowledge="mortgage-ban" data-final-knowledge="one-year-expiry" data-final-knowledge="target-rule" data-final-knowledge="nuisance-targets" data-final-knowledge="fault-contrast"
     data-stateful-source="laptop-return-claim" data-stateful-terminal="laptop-return-claim" */
  const ticketTravel = prog(frame, 240, 40);
  const ticketX = interpolate(ticketTravel, [0, 1], [1120, 560], CLAMP);
  const ticketY = interpolate(ticketTravel, [0, 1], [240, 344], CLAMP);
  return (
    <Shell code="07" kicker="返还 · 妨害 · 危险" title="返还原物与排妨除危：依据与对象分叉">
      <div
        data-layout="fork-bench-with-dual-targets"
        data-visual-anchor="document-fork"
        data-text-treatments="label-block,stamp,external-negation,thin-underline"
        data-visual-grammar="property-return-grounds-on-present-right-possessory-return-on-past-holding,mortgage-and-servitude-lack-possession-so-never-ground-return,possessory-return-expires-one-year-after-dispossession,return-targets-only-unauthorised-possessors-direct-or-indirect,nuisance-targets-both-actors-and-controlling-bystanders,proprietary-requests-ignore-fault-unlike-damage-claims"
        data-focal-rule="ask-the-ground-first-then-pick-the-proper-target"
        data-focal-channels="connector,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" style={{position: 'absolute', left: 488, top: 0, width: 800, height: 60}}>
          <div style={{height: '100%', backgroundColor: C.navyMid, border: `2px solid ${C.brass}`, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12}}>
            <Gavel size={28} color={C.brassPale} strokeWidth={2.4} />
            <span style={{fontSize: 24, fontWeight: 950, color: C.parchment, letterSpacing: 1}}>返还 · 排妨 · 除危 → 先问 ①凭什么要 ②向谁要</span>
          </div>
        </Enter>
        <div style={{position: 'absolute', left: 886, top: 60, width: 4, height: 14, backgroundColor: C.brass}} />
        <div style={{position: 'absolute', left: 456, top: 74, width: 864, height: 4, backgroundColor: C.brass}} />
        <div style={{position: 'absolute', left: 454, top: 74, width: 4, height: 14, backgroundColor: C.brass}} />
        <div style={{position: 'absolute', left: 1318, top: 74, width: 4, height: 14, backgroundColor: C.brass}} />
        <div data-final-knowledge="ground-fork" style={{position: 'absolute', left: 40, top: 88, width: 1696, height: 248}}>
          <Enter delay={30} from="left" style={{position: 'absolute', left: 0, top: 0, width: 832, height: 248}}>
            <div style={{height: '100%', backgroundColor: C.parchment, border: `3px solid ${C.steel}`, display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 18px'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <Home size={28} color={C.steel} strokeWidth={2.4} />
                <Boss tone={C.steel}>物权路径（看现在）</Boss>
              </div>
              <div style={{fontSize: 23, fontWeight: 900, color: C.ink}}>
                依据＝<Under color={C.steel} delay={60}>现在仍享有物权</Under> → 可主张 返还原物 · 排除妨害 · 消除危险
              </div>
              <Enter delay={80} from="up" marker="mortgage-ban" style={{flex: 1}}>
                <div style={{height: '100%', border: `3px dashed ${C.crimson}`, backgroundColor: C.crimsonPale, display: 'flex', alignItems: 'center', gap: 10, padding: '0 14px'}}>
                  <Ban size={26} color={C.crimson} strokeWidth={2.6} />
                  <span style={{fontSize: 21, fontWeight: 900, color: C.ink, lineHeight: 1.4, flex: 1}}>
                    抵押权 · 地役权：虽是物权，但<Soft color={C.crimson}>不占有标的物</Soft> → 不得作返还原物的依据
                  </span>
                  <Seal delay={140} size={19}>✗ 不得作返还依据</Seal>
                </div>
              </Enter>
            </div>
          </Enter>
          <Enter delay={46} from="right" style={{position: 'absolute', left: 864, top: 0, width: 832, height: 248}}>
            <div style={{height: '100%', backgroundColor: C.parchment, border: `3px solid ${C.crimson}`, display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 18px'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <Hand size={28} color={C.crimson} strokeWidth={2.4} />
                <Boss tone={C.crimson}>占有路径（看过去）</Boss>
              </div>
              <div style={{fontSize: 23, fontWeight: 900, color: C.ink}}>
                依据＝<Under delay={70}>曾经占有而被侵占</Under> → 主张占有返还原物
              </div>
              <Enter delay={96} from="up" marker="one-year-expiry" style={{flex: 1}}>
                <div style={{height: '100%', border: `3px solid ${C.brass}`, backgroundColor: C.parchmentDim, display: 'flex', alignItems: 'center', gap: 10, padding: '0 14px'}}>
                  <Timer size={26} color={C.brass} strokeWidth={2.6} />
                  <span style={{fontSize: 21, fontWeight: 900, color: C.ink, lineHeight: 1.4, flex: 1}}>
                    占有返还请求权：自侵占发生之日起 <span style={{fontSize: 27, fontWeight: 950, color: C.crimson}}>1 年内</span> 主张
                  </span>
                  <Seal delay={150} size={19}>逾期 → 消灭 ✗</Seal>
                </div>
              </Enter>
            </div>
          </Enter>
        </div>
        <Enter delay={120} from="up" marker="target-rule" style={{position: 'absolute', left: 40, top: 352, width: 1696, height: 132}}>
          <div style={{height: '100%', backgroundColor: C.parchment, border: `3px solid ${C.brass}`, display: 'flex', alignItems: 'stretch', gap: 14, padding: '10px 16px'}}>
            <span style={{writingMode: 'vertical-rl', fontSize: 22, fontWeight: 950, color: C.crimson, letterSpacing: 4, flexShrink: 0}}>对象规则</span>
            <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10, fontSize: 22, fontWeight: 900, color: C.ink}}>
                <span>返还原物 → 只向<Soft color={C.crimson}>无权占有人</Soft>主张：</span>
                <Chip tone={C.steel} toneBg={C.steelPale}>直接占有人 ✓</Chip>
                <Chip tone={C.steel} toneBg={C.steelPale}>间接占有人 ✓</Chip>
                <span style={{fontSize: 20, color: C.inkSoft}}>· 对请求权人无拒绝返还的权利</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <span data-stateful-terminal="laptop-return-claim" style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${C.brass}`, backgroundColor: C.parchmentDim, padding: '5px 10px', fontSize: 21, fontWeight: 950, color: C.ink, opacity: prog(frame, 292, 14)}}>
                  💻 甲→乙 ✓ 间接占有 · 甲→丙 ✓ 直接占有
                </span>
                <Seal delay={310} size={19} tone={C.moss}>甲凭所有权向乙 · 丙都能要回 ✓</Seal>
              </div>
            </div>
          </div>
        </Enter>
        <Enter delay={160} from="up" marker="nuisance-targets" style={{position: 'absolute', left: 40, top: 500, width: 1696, height: 116}}>
          <div style={{height: '100%', backgroundColor: C.parchment, border: `3px solid ${C.steel}`, display: 'flex', alignItems: 'stretch', gap: 14, padding: '10px 16px'}}>
            <span style={{writingMode: 'vertical-rl', fontSize: 22, fontWeight: 950, color: C.steel, letterSpacing: 4, flexShrink: 0}}>排妨除危</span>
            <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10, fontSize: 22, fontWeight: 900, color: C.ink}}>
                <span>排除妨害 · 消除危险 → 对两类人主张：</span>
                <Chip tone={C.steel} toneBg={C.steelPale}>行为妨害人＝惹事的人</Chip>
                <Chip tone={C.moss} toneBg={C.mossPale}>状态妨害人＝管事的人</Chip>
                <span style={{fontSize: 20, color: C.inkSoft}}>· 有法律上控制能力</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, fontSize: 21, fontWeight: 900, color: C.ink}}>
                <span>KTV 案：乙深夜练歌＝行为妨害人 · 甲（房东）出租＝状态妨害人</span>
                <Seal delay={240} size={19} tone={C.moss}>丙对二者均可主张 ✓</Seal>
              </div>
            </div>
          </div>
        </Enter>
        <Enter delay={200} from="up" marker="fault-contrast" style={{position: 'absolute', left: 40, top: 632, width: 1696, height: 136}}>
          <div style={{height: '100%', backgroundColor: C.parchment, border: `3px solid ${C.crimson}`, display: 'flex', alignItems: 'stretch', gap: 14, padding: '10px 16px'}}>
            <span style={{writingMode: 'vertical-rl', fontSize: 22, fontWeight: 950, color: C.crimson, letterSpacing: 4, flexShrink: 0}}>过错分界</span>
            <Gavel size={34} color={C.crimson} strokeWidth={2.4} style={{flexShrink: 0, alignSelf: 'center'}} />
            <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 9}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
                <Chip tone={C.steel} toneBg={C.steelPale}>返还原物 · 排除妨害 · 消除危险 → 不问过错</Chip>
                <span style={{fontSize: 24, fontWeight: 950, color: C.inkSoft}}>VS</span>
                <Chip tone={C.crimson} toneBg={C.crimsonPale} ink={C.crimson}>侵权损害赔偿 → 原则上以过错为条件</Chip>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, fontSize: 21, fontWeight: 900, color: C.ink}}>
                <span>地震案：大树被震倒压坏院墙、鸡被砸死</span>
                <Seal delay={280} size={19} tone={C.moss}>无过错仍可：要鸡 ✓ 拖树 ✓ 加固 ✓</Seal>
                <span style={{fontSize: 20, color: C.inkSoft}}>· 损害赔偿另行按过错论</span>
              </div>
            </div>
          </div>
        </Enter>
        <div data-stateful-source="laptop-return-claim" style={{position: 'absolute', left: ticketX, top: ticketY, opacity: prog(frame, 210, 14) * (1 - prog(frame, 324, 14)), visibility: frame >= 340 ? 'hidden' : 'visible'}}>
          <Chip tone={C.brass} toneBg={C.parchment}>案例票 · 甲的电脑被乙偷去、转租给丙</Chip>
        </div>
      </div>
    </Shell>
  );
};

export const DefenceFormativeScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="shield-bench" data-final-knowledge="no-breach-rule" data-final-knowledge="formation-gate" data-final-knowledge="exercise-modes" data-final-knowledge="exclusive-period"
     data-stateful-source="formation-notice" data-stateful-terminal="formation-notice" */
  const ticketTravel = prog(frame, 220, 40);
  const ticketX = interpolate(ticketTravel, [0, 1], [420, 130], CLAMP);
  return (
    <Shell code="08" kicker="抗辩 · 形成" title="抗辩权与形成权：盾牌台与形成门">
      <div
        data-layout="shield-bench-and-formation-gate"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,stamp,soft-highlight,thin-underline"
        data-visual-grammar="defence-shields-against-claims-without-breach-of-contract,defences-need-assertion-and-may-be-waived,formative-rights-reshape-relations-by-single-will,formative-rights-need-exercise-through-ordered-notice-or-silence,exclusive-periods-are-invariant-and-extinguish-formation"
        data-focal-rule="shield-then-reshape-one-will-and-one-clock-govern-formation"
        data-focal-channels="connector,motion,contrast,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={8} from="left" marker="shield-bench" style={{position: 'absolute', left: 40, top: 0, width: 832, height: 150}}>
          <div style={{height: '100%', backgroundColor: C.parchment, border: `3px solid ${C.steel}`, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10, padding: '12px 18px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <Shield size={30} color={C.steel} strokeWidth={2.4} />
              <Boss tone={C.steel}>抗辩权 ＝ 盾</Boss>
              <span style={{fontSize: 21, fontWeight: 900, color: C.inkSoft}}>对抗请求权的权利</span>
            </div>
            <div style={{fontSize: 22, fontWeight: 900, color: C.ink, lineHeight: 1.45}}>
              请求权的义务人，以<Soft color={C.steel}>请求权依据以外的事由</Soft><Under color={C.steel} delay={40}>拒绝</Under>对方请求的权利
            </div>
          </div>
        </Enter>
        <Enter delay={40} from="left" marker="no-breach-rule" style={{position: 'absolute', left: 40, top: 170, width: 832, height: 330}}>
          <div style={{height: '100%', backgroundColor: C.parchment, border: `3px solid ${C.brass}`, display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 18px'}}>
            <div style={{fontSize: 23, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              行使<Under delay={70}>抗辩权</Under> → 未如约履行 ＝ <Soft color={C.moss}>不构成违约</Soft>
            </div>
            <div style={{display: 'flex', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone={C.moss} toneBg={C.mossPale}>① 不承担违约责任</Chip>
              <Chip tone={C.moss} toneBg={C.mossPale}>② 债权人不得解除合同</Chip>
            </div>
            <div style={{fontSize: 20, fontWeight: 900, color: C.inkSoft, letterSpacing: 1}}>机器设备案 · 对照</div>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <Chip tone={C.crimson} toneBg={C.crimsonPale} ink={C.crimson}>到期未付款 · 货无问题</Chip>
              <Seal delay={120} size={18}>违约 ✗ 无抗辩权</Seal>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <Chip tone={C.steel} toneBg={C.steelPale}>货不合格 · 拒付货款</Chip>
              <Seal delay={150} size={18} tone={C.moss}>先履行抗辩权 ✓ 不违约</Seal>
            </div>
          </div>
        </Enter>
        <Enter delay={90} from="left" style={{position: 'absolute', left: 40, top: 520, width: 832, height: 100}}>
          <div style={{height: '100%', backgroundColor: C.navyMid, border: `2px solid ${C.brass}`, display: 'flex', alignItems: 'center', gap: 14, padding: '0 18px'}}>
            <span style={{padding: '5px 12px', backgroundColor: C.brass, color: C.navy, fontSize: 20, fontWeight: 900, letterSpacing: 2, flexShrink: 0}}>两点提示</span>
            <span style={{fontSize: 21, fontWeight: 900, color: C.parchment, lineHeight: 1.5}}>
              需权利人<Under color={C.brassPale} delay={120}>行使</Under>（法院不主动援引）· 属民事权利，<Soft color={C.brassPale}>可以放弃</Soft>
            </span>
          </div>
        </Enter>
        <Enter delay={20} from="right" marker="formation-gate" style={{position: 'absolute', left: 904, top: 0, width: 832, height: 170}}>
          <div style={{height: '100%', backgroundColor: C.parchment, border: `3px solid ${C.crimson}`, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 9, padding: '12px 18px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <Zap size={30} color={C.crimson} strokeWidth={2.4} />
              <Boss tone={C.crimson}>形成权 ＝ 单方改写</Boss>
            </div>
            <div style={{fontSize: 22, fontWeight: 900, color: C.ink, lineHeight: 1.4}}>
              以<Soft color={C.crimson}>单方意志</Soft>决定法律关系的<Under delay={50}>存续 · 变更 · 消灭</Under>，无需对方同意
            </div>
            <div style={{display: 'flex', gap: 8, flexWrap: 'wrap'}}>
              <Chip tone={C.crimson} toneBg={C.crimsonPale} ink={C.crimson}>解除权</Chip>
              <Chip tone={C.crimson} toneBg={C.crimsonPale} ink={C.crimson}>追认权</Chip>
              <Chip tone={C.crimson} toneBg={C.crimsonPale} ink={C.crimson}>撤销权</Chip>
              <Chip tone={C.crimson} toneBg={C.crimsonPale} ink={C.crimson}>抵销权</Chip>
              <Chip tone={C.crimson} toneBg={C.crimsonPale} ink={C.crimson}>选择权</Chip>
            </div>
          </div>
        </Enter>
        <Enter delay={60} from="right" marker="exclusive-period" style={{position: 'absolute', left: 904, top: 186, width: 832, height: 130}}>
          <div style={{height: '100%', backgroundColor: C.parchmentDim, border: `3px solid ${C.brass}`, display: 'flex', alignItems: 'center', gap: 14, padding: '0 18px'}}>
            <Timer size={30} color={C.brass} strokeWidth={2.4} style={{flexShrink: 0}} />
            <div style={{display: 'flex', flexDirection: 'column', gap: 7, flex: 1}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <span style={{fontSize: 23, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>除斥期间</span>
                <Chip tone={C.brass} toneBg={C.parchment}>不变期间</Chip>
                <span style={{fontSize: 20, fontWeight: 900, color: C.inkSoft}}>无中止 · 无中断</span>
              </div>
              <div style={{fontSize: 21, fontWeight: 900, color: C.ink, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
                <span>来源＝法律规定 / 当事人约定 · 届满 →</span>
                <Seal delay={110} size={18}>形成权消灭 ✗</Seal>
              </div>
            </div>
          </div>
        </Enter>
        <Enter delay={100} from="right" marker="exercise-modes" style={{position: 'absolute', left: 904, top: 332, width: 832, height: 288}}>
          <div style={{height: '100%', backgroundColor: C.parchment, border: `3px solid ${C.steel}`, display: 'flex', flexDirection: 'column', gap: 10, padding: '14px 18px'}}>
            <div style={{fontSize: 23, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>行使方式 · 三条通道</div>
            <div style={{flex: 1, display: 'flex', alignItems: 'center', gap: 12, borderLeft: `5px solid ${C.steel}`, paddingLeft: 14}}>
              <ScrollText size={26} color={C.steel} strokeWidth={2.4} />
              <span style={{fontSize: 21.5, fontWeight: 900, color: C.ink, lineHeight: 1.4}}><span style={{color: C.steel}}>法定方式</span>：法律要求须经诉讼 · 仲裁行使的 → 依法定方式行使</span>
            </div>
            <div style={{flex: 1, display: 'flex', alignItems: 'center', gap: 12, borderLeft: `5px solid ${C.crimson}`, paddingLeft: 14}}>
              <Megaphone size={26} color={C.crimson} strokeWidth={2.4} />
              <span style={{fontSize: 21.5, fontWeight: 900, color: C.ink, lineHeight: 1.4}}><span style={{color: C.crimson}}>单方通知</span>：到达对方即生效——「咱俩的合同解除了」</span>
            </div>
            <div style={{flex: 1, display: 'flex', alignItems: 'center', gap: 12, borderLeft: `5px solid ${C.brass}`, paddingLeft: 14}}>
              <span style={{fontSize: 26, flexShrink: 0}}>🤫</span>
              <span style={{fontSize: 21.5, fontWeight: 900, color: C.ink, lineHeight: 1.4}}><span style={{color: C.brass}}>默示</span>：受遗赠人到期不作表示 → <Soft color={C.crimson}>视为放弃</Soft></span>
            </div>
          </div>
        </Enter>
        <Enter delay={140} from="up" style={{position: 'absolute', left: 40, top: 636, width: 1696, height: 132}}>
          <div style={{height: '100%', backgroundColor: C.navyMid, border: `2px solid ${C.brass}`, display: 'flex', alignItems: 'center', gap: 20, padding: '0 22px'}}>
            <span style={{padding: '6px 14px', backgroundColor: C.brass, color: C.navy, fontSize: 22, fontWeight: 900, letterSpacing: 2, flexShrink: 0}}>矛盾总诀</span>
            <div style={{position: 'relative', width: 900, height: 100, flexShrink: 0}}>
              <span data-stateful-terminal="formation-notice" style={{position: 'absolute', left: 0, top: 26, display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${C.brass}`, backgroundColor: C.parchmentDim, padding: '6px 12px', fontSize: 21, fontWeight: 950, color: C.ink, opacity: prog(frame, 262, 14)}}>
                ⚡ 法律关系改写 · 合同解除 ✓
              </span>
              <div data-stateful-source="formation-notice" style={{position: 'absolute', left: ticketX, top: 26, opacity: prog(frame, 190, 14) * (1 - prog(frame, 268, 14)), visibility: frame >= 284 ? 'hidden' : 'visible'}}>
                <Chip tone={C.brass} toneBg={C.parchment}>📩 通知票 · 乙向甲发出解除通知</Chip>
              </div>
            </div>
            <span style={{fontSize: 24, fontWeight: 900, color: C.parchment, lineHeight: 1.5}}>
              矛＝<Soft color={C.brassPale}>求人办事</Soft> · 盾＝<Soft color={C.brassPale}>拒绝办事</Soft> · ⚡＝<Soft color={C.brassPale}>单方改写</Soft>
            </span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const SelfHelpTripleScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="necessity-stand" data-final-knowledge="defence-stand" data-final-knowledge="selfhelp-stand" data-final-knowledge="simaguang-verdicts" data-final-knowledge="melon-verdict" data-final-knowledge="key-verdict"
     data-stateful-source="rescue-hammer" data-stateful-terminal="rescue-hammer" */
  const ticketTravel = prog(frame, 230, 40);
  const ticketX = interpolate(ticketTravel, [0, 1], [640, 200], CLAMP);
  const ticketY = interpolate(ticketTravel, [0, 1], [420, 498], CLAMP);
  return (
    <Shell code="09" kicker="私力三武台" title="紧急避险 · 正当防卫 · 自助保护">
      <div
        data-layout="triple-stand-defence-wall"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="necessity-sacrifices-the-smaller-interest-to-save-the-larger,necessity-losses-are-borne-by-the-danger-causer-or-beneficiary,defence-caps-at-necessary-limits-and-excess-brings-liability,self-help-seizes-only-to-preserve-relief-and-must-reach-public-remedies"
        data-focal-rule="who-pays-the-loss-and-whether-the-force-stayed-necessary"
        data-focal-channels="icon,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={8} from="up" marker="necessity-stand" style={{position: 'absolute', left: 40, top: 0, width: 544, height: 480}}>
          <div style={{height: '100%', backgroundColor: C.parchment, border: `3px solid ${C.moss}`, display: 'flex', flexDirection: 'column', gap: 10, padding: '15px 18px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <Scale size={30} color={C.moss} strokeWidth={2.4} />
              <Boss tone={C.moss}>紧急避险</Boss>
            </div>
            <div style={{fontSize: 21.5, fontWeight: 900, color: C.ink, lineHeight: 1.45}}>
              为避免<Soft color={C.moss}>较大权益</Soft>受损，不得已<Soft color={C.crimson}>牺牲较小权益</Soft>
            </div>
            <div style={{display: 'flex', gap: 8, flexWrap: 'wrap'}}>
              <Chip tone={C.moss} toneBg={C.mossPale}>情况紧急 · 别无选择</Chip>
              <Chip tone={C.moss} toneBg={C.mossPale}>保全 ＞ 牺牲</Chip>
            </div>
            <div style={{fontSize: 20, fontWeight: 900, color: C.inkSoft, letterSpacing: 1}}>三种后果 · 谁赔</div>
            <div style={{fontSize: 20.5, fontWeight: 900, color: C.ink, lineHeight: 1.5, display: 'flex', flexDirection: 'column', gap: 8}}>
              <span>① 危险引起人 → 赔偿</span>
              <span>② 无归责人 → 受益人适当补偿</span>
              <span>③ 避险不当 → 按过错适当赔偿</span>
            </div>
          </div>
        </Enter>
        <Enter delay={28} from="up" marker="defence-stand" style={{position: 'absolute', left: 608, top: 0, width: 544, height: 480}}>
          <div style={{height: '100%', backgroundColor: C.parchment, border: `3px solid ${C.steel}`, display: 'flex', flexDirection: 'column', gap: 10, padding: '15px 18px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <Shield size={30} color={C.steel} strokeWidth={2.4} />
              <Boss tone={C.steel}>正当防卫</Boss>
            </div>
            <div style={{fontSize: 21.5, fontWeight: 900, color: C.ink, lineHeight: 1.45}}>
              对<Soft color={C.steel}>不法侵害人</Soft>造成损害，制止不法侵害
            </div>
            <div style={{display: 'flex', gap: 8, flexWrap: 'wrap'}}>
              <Chip tone={C.steel} toneBg={C.steelPale}>不得超过必要限度</Chip>
            </div>
            <div style={{fontSize: 21.5, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
              <Under color={C.steel} delay={80}>防卫过当</Under>＝造成<Soft color={C.crimson}>不应有的损失</Soft>
            </div>
            <div style={{fontSize: 20, fontWeight: 900, color: C.ink, lineHeight: 1.5, backgroundColor: C.parchmentDim, border: `2px solid ${C.brass}`, padding: '8px 12px'}}>
              仅方式 · 强度不相当而无不应有损失 → <span style={{color: C.moss}}>不构成过当</span>
            </div>
            <div style={{marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 10}}>
              <span style={{fontSize: 20.5, fontWeight: 900, color: C.inkSoft}}>过当范围内</span>
              <Seal delay={140} size={19}>承担赔偿责任</Seal>
            </div>
          </div>
        </Enter>
        <Enter delay={48} from="up" marker="selfhelp-stand" style={{position: 'absolute', left: 1176, top: 0, width: 544, height: 480}}>
          <div style={{height: '100%', backgroundColor: C.parchment, border: `3px solid ${C.crimson}`, display: 'flex', flexDirection: 'column', gap: 10, padding: '15px 18px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <Key size={30} color={C.crimson} strokeWidth={2.4} />
              <Boss tone={C.crimson}>自助保护</Boss>
            </div>
            <div style={{fontSize: 21.5, fontWeight: 900, color: C.ink, lineHeight: 1.45}}>
              权利受侵害 ＋ 来不及公力救济 → 对侵害人<Soft color={C.crimson}>人身 · 财产</Soft>予以强制
            </div>
            <div style={{fontSize: 20, fontWeight: 900, color: C.inkSoft, letterSpacing: 1}}>三个要件</div>
            <div style={{fontSize: 20.5, fontWeight: 900, color: C.ink, lineHeight: 1.5, display: 'flex', flexDirection: 'column', gap: 8}}>
              <span>① 前提＝受他人侵害</span>
              <span>② 时机＝紧急，来不及公力救济</span>
              <span>③ 限度＝以保留保护机会为限</span>
            </div>
            <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 900, color: C.ink, lineHeight: 1.5, backgroundColor: C.parchmentDim, border: `2px solid ${C.brass}`, padding: '8px 12px'}}>
              尽快起诉 · 报警＝<Under color={C.brass} delay={130}>法律要求</Under>，非构成要件
            </div>
          </div>
        </Enter>
        <Enter delay={110} from="up" marker="simaguang-verdicts" style={{position: 'absolute', left: 40, top: 500, width: 832, height: 268}}>
          <div style={{height: '100%', backgroundColor: C.parchment, border: `3px solid ${C.brass}`, display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 18px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <span style={{fontSize: 23, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>卷宗 · 司马光砸缸三连判</span>
              <span data-stateful-terminal="rescue-hammer" style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${C.brass}`, backgroundColor: C.parchmentDim, padding: '5px 10px', fontSize: 20, fontWeight: 950, color: C.ink, opacity: prog(frame, 288, 14)}}>
                🔨 砸缸救人 ✓
              </span>
            </div>
            <div style={{fontSize: 21, fontWeight: 900, color: C.ink, lineHeight: 1.45, display: 'flex', flexDirection: 'column', gap: 8, flex: 1, justifyContent: 'space-evenly'}}>
              <span>① 乙推甲入缸 → <span style={{color: C.moss}}>危险引起人</span> · 赔偿</span>
              <span>② 雪滑自己跌入缸 → <span style={{color: C.moss}}>无归责人</span> · 受益人适当补偿</span>
              <span>③ 缸里没水还砸 → <span style={{color: C.crimson}}>避险不当</span> · 按过错适当赔偿</span>
            </div>
          </div>
        </Enter>
        <Enter delay={150} from="up" marker="melon-verdict" style={{position: 'absolute', left: 904, top: 500, width: 832, height: 128}}>
          <div style={{height: '100%', backgroundColor: C.parchment, border: `3px solid ${C.steel}`, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8, padding: '10px 16px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10, fontSize: 21, fontWeight: 900, color: C.ink}}>
              <Chip tone={C.steel} toneBg={C.steelPale}>🍉 AK47 西瓜案</Chip>
              <span>甲偷西瓜 · 乙抄枪扫射 → 甲仅惊吓 ＋ 擦伤</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <Seal delay={230} size={19} tone={C.moss}>不构成防卫过当 ✓</Seal>
              <span style={{fontSize: 20, fontWeight: 900, color: C.inkSoft}}>未造成「不应有的损失」</span>
            </div>
          </div>
        </Enter>
        <Enter delay={190} from="up" marker="key-verdict" style={{position: 'absolute', left: 904, top: 644, width: 832, height: 124}}>
          <div style={{height: '100%', backgroundColor: C.parchment, border: `3px solid ${C.crimson}`, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8, padding: '10px 16px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10, fontSize: 21, fontWeight: 900, color: C.ink}}>
              <Chip tone={C.crimson} toneBg={C.crimsonPale} ink={C.crimson}>🔑 夺钥匙案</Chip>
              <span>甲超速撞伤乙 · 欲驾车离开 → 乙夺走车钥匙</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <Seal delay={260} size={19} tone={C.moss}>构成自助 ✓ 不侵权</Seal>
              <span style={{fontSize: 20, fontWeight: 900, color: C.inkSoft, display: 'inline-flex', alignItems: 'center', gap: 6}}>
                <Ban size={20} color={C.inkSoft} strokeWidth={2.6} /> 无需赔偿 · 夺钥匙后及时报警
              </span>
            </div>
          </div>
        </Enter>
        <div data-stateful-source="rescue-hammer" style={{position: 'absolute', left: ticketX, top: ticketY, opacity: prog(frame, 200, 14) * (1 - prog(frame, 282, 14)), visibility: frame >= 298 ? 'hidden' : 'visible'}}>
          <Chip tone={C.brass} toneBg={C.parchment}>案例票 · 司马光砸缸救人</Chip>
        </div>
      </div>
    </Shell>
  );
};
