import {Ban, CalendarClock, CloudRain, Coins, Gavel, Handshake, Hourglass, Megaphone, PauseCircle, Play, Scale, Search, Split, Timer, Undo2, Users} from 'lucide-react';
import {CLAMP} from '../../../../shared/remotion-runtime';
import {C, Enter, IconChip, Panel, PanelTab, Seal, Shell, Soft, Under} from './LimitationScenes';

export const ExpiryEffectScene = () => {
  /* data-final-knowledge="passive-apply-rule" data-final-knowledge="late-plea-forks" data-final-knowledge="no-retraction-rule" data-final-knowledge="partial-performance-rule" */
  return (
    <Shell code="02" kicker="届满后果" title="诉讼时效期间届满的法律后果">
      <div
        data-layout="passive-court-desk-with-waiver-strip"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="courts-apply-limitation-only-on-the-debtors-plea,late-pleas-in-appeal-and-retrial-are-rejected-sans-new-evidence,performance-or-promise-after-expiry-bars-retraction,partial-performance-partially-bars-retraction"
        data-focal-rule="only-the-debtor-raises-the-clock-defence-and-performance-seals-it"
        data-focal-channels="contrast,icon,connector,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="passive-apply-rule" style={{position: 'absolute', left: 40, top: 0, width: 832, height: 254}}>
          <Panel tone={C.dial} watermark={<Gavel size={150} color={C.dial} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.dial} icon={<Gavel size={24} color={C.dialPale} strokeWidth={2.2} />}>法院被动适用</PanelTab>
            <IconChip icon={<Gavel size={26} color={C.paper} strokeWidth={2.2} />} tone={C.dial} title="前提：">
              必须以债务人提起<Under color={C.dial} delay={70}>时效抗辩</Under>为条件
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.paper} strokeWidth={2.2} />} tone={C.oxblood} title="未提出抗辩：">
              法院<Under color={C.oxblood} delay={120}>不应</Under>主动释明·主动适用
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={28} from="right" marker="late-plea-forks" style={{position: 'absolute', left: 904, top: 0, width: 832, height: 254}}>
          <Panel tone={C.oxblood} watermark={<Ban size={150} color={C.oxblood} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.oxblood} icon={<Ban size={24} color={C.dialPale} strokeWidth={2.2} />}>迟到的抗辩</PanelTab>
            <IconChip icon={<Gavel size={26} color={C.paper} strokeWidth={2.2} />} tone={C.oxblood} title="二审提出：">
              一审未提·二审提 → 原则上<Seal delay={110} size={16}>不予支持</Seal>（例外：<Soft color={C.pine}>新证据</Soft>能证明已过时效）
            </IconChip>
            <IconChip icon={<Gavel size={26} color={C.paper} strokeWidth={2.2} />} tone={C.oxblood} title="再审提出：">
              原审未提·再审提 → <Seal delay={160} size={16}>不予支持</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={60} from="left" marker="no-retraction-rule" style={{position: 'absolute', left: 40, top: 270, width: 832, height: 220}}>
          <Panel tone={C.pine} watermark={<Handshake size={150} color={C.pine} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.pine} icon={<Handshake size={24} color={C.dialPale} strokeWidth={2.2} />}>履行或同意履行 · 不得反悔</PanelTab>
            <IconChip icon={<Handshake size={26} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="两种行为：">
              作出<Soft color={C.pine}>同意履行</Soft>义务的意思表示 · 已经<Soft color={C.pine}>自愿履行</Soft>
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.paper} strokeWidth={2.2} />} tone={C.oxblood} title="后果：">
              <Under color={C.oxblood} delay={140}>不得反悔</Under>——不得再主张时效抗辩
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={84} from="right" marker="partial-performance-rule" style={{position: 'absolute', left: 904, top: 270, width: 832, height: 220}}>
          <Panel tone={C.slate} watermark={<Scale size={150} color={C.slate} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.slate} icon={<Scale size={24} color={C.dialPale} strokeWidth={2.2} />}>考试考部分</PanelTab>
            <IconChip icon={<Scale size={26} color={C.paper} strokeWidth={2.2} />} tone={C.slate} title="全部履行：">
              全部履行或同意全部履行 → <Soft color={C.slate}>全部</Soft>不得反悔
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.paper} strokeWidth={2.2} />} tone={C.dial} title="部分履行：">
              部分履行或同意部分履行 → <Soft color={C.dial}>该部分</Soft>不得反悔
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={120} from="up" style={{position: 'absolute', left: 40, top: 506, width: 1696, height: 262}}>
          <Panel tone={C.dial} watermark={<Timer size={150} color={C.dial} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 20px'}}>
            <PanelTab tone={C.dial} icon={<Timer size={22} color={C.dialPale} strokeWidth={2.2} />}>总结</PanelTab>
            <IconChip icon={<Timer size={26} color={C.paper} strokeWidth={2.2} />} tone={C.dial} title="届满 ≠ 义务消灭：">
              债还在——只是给了债务人一个<Soft color={C.oxblood}>抗辩权</Soft>
            </IconChip>
            <IconChip icon={<Gavel size={26} color={C.paper} strokeWidth={2.2} />} tone={C.slate} title="抗辩权：">
              须<Soft color={C.slate}>自己提</Soft>·法院不帮忙；提了就<Under color={C.slate} delay={160}>驳回</Under>，没提就<Soft color={C.slate}>照判</Soft>
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.paper} strokeWidth={2.2} />} tone={C.oxblood} title="履行后翻悔：">
              法院<Seal delay={220} size={17}>不支持</Seal>（诚信原则）
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const StartPointsScene = () => {
  /* data-final-knowledge="premise-rule" data-final-knowledge="cognition-rule" data-final-knowledge="five-dial-rules" data-final-knowledge="divorce-case-verdicts" */
  return (
    <Shell code="03" kicker="起算" title="诉讼时效的起算">
      <div
        data-layout="dual-key-ladder-with-five-dials"
        data-visual-anchor="ladder-sequence"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="the-clock-starts-only-when-the-claim-exists,knowing-person-and-fact-both-sets-the-dial,fixed-instalments-and-open-terms-each-dial-differently,wards-and-minor-victims-dial-from-special-days"
        data-focal-rule="the-dial-winds-from-a-born-claim-and-a-mind-that-knows-person-and-fact"
        data-focal-channels="contrast,connector,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="premise-rule" style={{position: 'absolute', left: 40, top: 0, width: 832, height: 214}}>
          <Panel tone={C.dial} watermark={<Play size={140} color={C.dial} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.dial} icon={<Play size={24} color={C.dialPale} strokeWidth={2.2} />}>前提 · 请求权成立</PanelTab>
            <div data-final-knowledge="divorce-case-verdicts" style={{display: 'contents'}}>
              <IconChip icon={<Play size={26} color={C.paper} strokeWidth={2.2} />} tone={C.dial} title="首要前提：">
                请求权<Under color={C.dial} delay={70}>成立</Under>——没有请求权就没有起算
              </IconChip>
              <IconChip icon={<Gavel size={26} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="离婚损害赔偿案：">
                离婚时才主张 → 请求权<Soft color={C.pine}>刚刚成立</Soft> → 时效<Seal delay={140} size={16} tone={C.pine}>刚刚起算·未届满 ✓</Seal>
              </IconChip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={28} from="right" marker="cognition-rule" style={{position: 'absolute', left: 904, top: 0, width: 832, height: 214}}>
          <Panel tone={C.slate} watermark={<Search size={140} color={C.slate} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.slate} icon={<Search size={24} color={C.dialPale} strokeWidth={2.2} />}>认知条件 · 人事结合</PanelTab>
            <IconChip icon={<Search size={26} color={C.paper} strokeWidth={2.2} />} tone={C.slate} title="知道或应当知道：">
              事——<Soft color={C.slate}>权利受侵害</Soft>（程度·损失数额）＋ 人——<Soft color={C.slate}>具体义务人</Soft>
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.paper} strokeWidth={2.2} />} tone={C.oxblood} title="综合要求：">
              「人」「事」<Under color={C.oxblood} delay={140}>均知道</Under> → 时效方才<Seal delay={170} size={16}>起算</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={70} from="up" marker="five-dial-rules" style={{position: 'absolute', left: 40, top: 230, width: 1696, height: 372}}>
          <Panel tone={C.pine} watermark={<CalendarClock size={160} color={C.pine} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '12px 20px'}}>
            <PanelTab tone={C.pine} icon={<CalendarClock size={22} color={C.dialPale} strokeWidth={2.2} />}>五种起算的具体规定</PanelTab>
            <IconChip icon={<CalendarClock size={24} color={C.paper} strokeWidth={2.2} />} tone={C.dial} title="① 约定履行期限：">
              自<Under color={C.dial} delay={90}>履行期限届满</Under>之日起算
            </IconChip>
            <IconChip icon={<CalendarClock size={24} color={C.paper} strokeWidth={2.2} />} tone={C.slate} title="② 同一债务分期履行：">
              自<Under color={C.slate} delay={120}>最后一期届满</Under>之日起算
            </IconChip>
            <IconChip icon={<Search size={24} color={C.paper} strokeWidth={2.2} />} tone={C.oxblood} title="③ 未定期限的债权：">
              给宽限期→自<Soft color={C.oxblood}>宽限期届满</Soft>之日 · 明确表示<Soft color={C.oxblood}>不履行</Soft>→自表示之日（要钱没有）
            </IconChip>
            <IconChip icon={<Search size={24} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="④ 被监护人对法定代理人：">
              自<Soft color={C.pine}>法定代理终止</Soft>之日 · 例外：新监护人<Soft color={C.pine}>知道或应当知道</Soft>侵害事实之日
            </IconChip>
            <IconChip icon={<Search size={24} color={C.paper} strokeWidth={2.2} />} tone={C.oxblood} title="⑤ 未成年人遭性侵害：">
              自受害人年满<Seal delay={230} size={17}>18 周岁</Seal>之日起算
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={130} from="up" style={{position: 'absolute', left: 40, top: 618, width: 1696, height: 150}}>
          <Panel tone={C.oxblood} watermark={<CalendarClock size={140} color={C.oxblood} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 20px'}}>
            <PanelTab tone={C.oxblood} icon={<CalendarClock size={22} color={C.dialPale} strokeWidth={2.2} />}>起算口诀</PanelTab>
            <IconChip icon={<CalendarClock size={26} color={C.paper} strokeWidth={2.2} />} tone={C.oxblood} title="速记：">
              有期<Soft color={C.oxblood}>届满起</Soft> · 分期<Soft color={C.oxblood}>最后一期</Soft> · 未定<Soft color={C.oxblood}>看宽限</Soft> · 监护<Soft color={C.oxblood}>终止</Soft> · 未成年<Soft color={C.oxblood}>满十八</Soft>
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const SuspensionScene = () => {
  /* data-final-knowledge="suspension-concept" data-final-knowledge="cause-catalogue" data-final-knowledge="busy-work-verdict" data-final-knowledge="window-and-refill-rule" */
  return (
    <Shell code="04" kicker="中止" title="诉讼时效的中止">
      <div
        data-layout="six-month-window-pause-bench"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="objective-obstacles-pause-the-clock-until-cleared,force-majeure-and-other-obstacles-pause-the-clock,busy-work-is-never-an-obstacle,only-the-last-six-months-open-the-pause-and-six-months-refill"
        data-focal-rule="only-objective-obstacles-in-the-last-six-months-halt-and-refill-the-clock"
        data-focal-channels="contrast,connector,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="suspension-concept" style={{position: 'absolute', left: 40, top: 0, width: 1696, height: 140}}>
          <Panel tone={C.dial} watermark={<PauseCircle size={130} color={C.dial} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 20px'}}>
            <PanelTab tone={C.dial} icon={<PauseCircle size={22} color={C.dialPale} strokeWidth={2.2} />}>中止的概念</PanelTab>
            <IconChip icon={<PauseCircle size={26} color={C.paper} strokeWidth={2.2} />} tone={C.dial} title="中止：">
              因<Soft color={C.dial}>权利人不能行使权利</Soft>的<Under color={C.dial} delay={70}>客观障碍</Under> → 暂停计算 → 障碍消除后<Soft color={C.pine}>继续计算</Soft>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={36} from="left" marker="cause-catalogue" style={{position: 'absolute', left: 40, top: 156, width: 832, height: 290}}>
          <Panel tone={C.slate} watermark={<CloudRain size={150} color={C.slate} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.slate} icon={<CloudRain size={24} color={C.dialPale} strokeWidth={2.2} />}>中止事由 · 客观障碍</PanelTab>
            <IconChip icon={<CloudRain size={26} color={C.paper} strokeWidth={2.2} />} tone={C.slate} title="① 不可抗力：">
              遭受<Soft color={C.slate}>不可抗力</Soft>
            </IconChip>
            <IconChip icon={<Hourglass size={26} color={C.paper} strokeWidth={2.2} />} tone={C.slate} title="② 其他障碍：">
              无·限行为能力人<Soft color={C.slate}>没有法定代理人</Soft>（或代理人死亡·丧失行为能力·丧失代理权）· 继承开始未确定<Soft color={C.slate}>继承人·遗产管理人</Soft>
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.paper} strokeWidth={2.2} />} tone={C.oxblood} title="③ 被控制：">
              权利人被义务人或其他人<Soft color={C.oxblood}>控制</Soft>无法主张权利 · 其他障碍
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={60} from="right" marker="busy-work-verdict" style={{position: 'absolute', left: 904, top: 156, width: 832, height: 290}}>
          <Panel tone={C.oxblood} watermark={<Ban size={150} color={C.oxblood} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.oxblood} icon={<Ban size={24} color={C.dialPale} strokeWidth={2.2} />}>案例辨析 · 忙于工作</PanelTab>
            <IconChip icon={<Gavel size={26} color={C.paper} strokeWidth={2.2} />} tone={C.oxblood} title="砸车案：">
              乙「忙于工作·无暇顾及」3 年 → <Seal delay={130} size={17}>未发生中止 ✗</Seal>
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.paper} strokeWidth={2.2} />} tone={C.slate} title="理由：">
              「无暇顾及」并非<Soft color={C.oxblood}>客观障碍</Soft>
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 19.5, fontWeight: 900, color: C.inkSoft}}>主观上的懒·忙·忘了——绝对不构成中止事由</div>
          </Panel>
        </Enter>
        <Enter delay={110} from="up" marker="window-and-refill-rule" style={{position: 'absolute', left: 40, top: 462, width: 1696, height: 306}}>
          <Panel tone={C.pine} watermark={<Timer size={160} color={C.pine} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 20px'}}>
            <PanelTab tone={C.pine} icon={<Timer size={22} color={C.dialPale} strokeWidth={2.2} />}>时间窗口 · 最后 6 个月</PanelTab>
            <IconChip icon={<Timer size={26} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="先决条件：">
              中止事由的影响必须存在于诉讼时效期间的<Under color={C.pine} delay={100}>最后 6 个月</Under>
            </IconChip>
            <IconChip icon={<Timer size={26} color={C.paper} strokeWidth={2.2} />} tone={C.dial} title="发生于之前·持续入内：">
              中止时间＝最后 6 个月的<Seal delay={180} size={17} tone={C.dial}>第 1 天</Seal>·消除后剩余<Seal delay={210} size={17} tone={C.dial}>补足 6 个月</Seal>
            </IconChip>
            <IconChip icon={<Timer size={26} color={C.paper} strokeWidth={2.2} />} tone={C.slate} title="发生于最后 6 个月之内：">
              中止时间＝<Seal delay={250} size={17} tone={C.slate}>发生时</Seal>·消除后剩余<Seal delay={280} size={17} tone={C.slate}>补足 6 个月</Seal>
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 19.5, fontWeight: 900, color: C.inkSoft}}>速记：只看最后半年——消除之后，一律补足半年</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const InterruptionScene = () => {
  /* data-final-knowledge="interruption-concept" data-final-knowledge="sue-cause-ledger" data-final-knowledge="demand-consent-ledger" data-final-knowledge="special-three-lane" */
  return (
    <Shell code="05" kicker="中断" title="诉讼时效的中断">
      <div
        data-layout="three-causes-ledger-with-special-lane"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="breaking-the-idle-state-voids-elapsed-time-and-restarts,suing-means-seeking-any-authority-and-filing-stops-the-clock,demand-and-consent-restart-from-the-next-day,assignment-notice-subrogation-and-joint-holders-extend-the-break"
        data-focal-rule="three-levers-break-the-idle-state-and-restart-the-dial"
        data-focal-channels="connector,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="interruption-concept" style={{position: 'absolute', left: 40, top: 0, width: 1696, height: 120}}>
          <Panel tone={C.dial} watermark={<Gavel size={130} color={C.dial} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 20px'}}>
            <PanelTab tone={C.dial} icon={<Gavel size={22} color={C.dialPale} strokeWidth={2.2} />}>中断的概念</PanelTab>
            <IconChip icon={<Gavel size={26} color={C.paper} strokeWidth={2.2} />} tone={C.oxblood} title="中断：">
              不行使状态被<Under color={C.oxblood} delay={60}>打破</Under> → 经过期间<Soft color={C.oxblood}>归于无效</Soft> → 诉讼时效<Soft color={C.pine}>重新计算</Soft>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={36} from="left" marker="sue-cause-ledger" style={{position: 'absolute', left: 40, top: 136, width: 832, height: 314}}>
          <Panel tone={C.oxblood} watermark={<Gavel size={150} color={C.oxblood} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.oxblood} icon={<Gavel size={24} color={C.dialPale} strokeWidth={2.2} />}>事由① 起诉（广义 · 找机关）</PanelTab>
            <IconChip icon={<Gavel size={26} color={C.paper} strokeWidth={2.2} />} tone={C.oxblood} title="泛指：">
              通过<Soft color={C.oxblood}>有关机关</Soft>保护权利——民事诉讼·仲裁·调解·<Soft color={C.oxblood}>报案控告</Soft>等
            </IconChip>
            <IconChip icon={<Play size={26} color={C.paper} strokeWidth={2.2} />} tone={C.dial} title="中断日：">
              <Soft color={C.dial}>提出申请之日</Soft>中断——与机关是否<Under color={C.dial} delay={120}>受理无关</Under>
            </IconChip>
            <IconChip icon={<Undo2 size={26} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="重新计算：">
              受理→<Soft color={C.pine}>程序终结</Soft>之日 · 撤回→<Soft color={C.pine}>撤回之次日</Soft> · 不受理→<Soft color={C.pine}>知道决定之日</Soft>
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 19.5, fontWeight: 900, color: C.inkSoft}}>撤诉不影响中断的效力</div>
          </Panel>
        </Enter>
        <Enter delay={60} from="right" marker="demand-consent-ledger" style={{position: 'absolute', left: 904, top: 136, width: 832, height: 314}}>
          <Panel tone={C.slate} watermark={<Megaphone size={150} color={C.slate} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.slate} icon={<Megaphone size={24} color={C.dialPale} strokeWidth={2.2} />}>事由② 请求 · 事由③ 同意</PanelTab>
            <IconChip icon={<Megaphone size={26} color={C.paper} strokeWidth={2.2} />} tone={C.slate} title="请求：">
              直接请求<Soft color={C.slate}>义务人或其代理人</Soft>履行——今日请求·今日中断·<Under color={C.slate} delay={130}>明日重新计算</Under>
            </IconChip>
            <IconChip icon={<Split size={26} color={C.paper} strokeWidth={2.2} />} tone={C.slate} title="部分请求：">
              中断效力<Soft color={C.slate}>及于剩余债权</Soft>（例外：<Soft color={C.oxblood}>明示放弃</Soft>剩余债权）
            </IconChip>
            <IconChip icon={<Handshake size={26} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="同意＝重申债务存在：">
              分期履行·部分履行·<Soft color={C.pine}>提供担保</Soft>·请求延期·清偿计划——今日同意·<Under color={C.pine} delay={220}>明日重新计算</Under>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={110} from="up" marker="special-three-lane" style={{position: 'absolute', left: 40, top: 466, width: 1696, height: 302}}>
          <Panel tone={C.pine} watermark={<Split size={160} color={C.pine} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 20px'}}>
            <PanelTab tone={C.pine} icon={<Split size={22} color={C.dialPale} strokeWidth={2.2} />}>中断的三种特殊情况</PanelTab>
            <IconChip icon={<Users size={24} color={C.paper} strokeWidth={2.2} />} tone={C.slate} title="① 连带债权债务：">
              对<Soft color={C.slate}>一人</Soft>发生中断事由 → 对<Soft color={C.slate}>其他连带人</Soft>也发生中断效力
            </IconChip>
            <IconChip icon={<Split size={24} color={C.paper} strokeWidth={2.2} />} tone={C.dial} title="② 债的移转：">
              债权转让→自<Under color={C.dial} delay={140}>转让通知到达</Under>债务人之日中断 · 债务承担→自<Under color={C.dial} delay={170}>意思表示到达债权人</Under>之日中断（同意与否与中断无关）
            </IconChip>
            <IconChip icon={<Gavel size={24} color={C.paper} strokeWidth={2.2} />} tone={C.oxblood} title="③ 代位权诉讼：">
              对<Soft color={C.oxblood}>债权人的债权</Soft>和<Soft color={C.oxblood}>债务人的债权</Soft>均发生中断效力
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
