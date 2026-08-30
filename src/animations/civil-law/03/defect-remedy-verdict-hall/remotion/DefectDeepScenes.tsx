import {Ban, Coins, EyeOff, Flame, Gavel, Hourglass, KeyRound, Scale, Search, Split, Stamp, Timer, Undo2, Users} from 'lucide-react';
import {CLAMP} from '../../../../shared/remotion-runtime';
import {C, Chip, Enter, IconChip, Panel, PanelTab, Seal, Shell, Soft, Under} from './DefectScenes';

export const VoidableRightsScene = () => {
  /* data-final-knowledge="voidable-meaning" data-final-knowledge="holder-and-nature" data-final-knowledge="exercise-mode-rule" data-final-knowledge="rescission-periods" */
  return (
    <Shell code="03" kicker="可撤销 · 撤销权" title="可撤销的民事法律行为">
      <div
        data-layout="retractable-lever-period-panel"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="voidable-acts-bind-until-rescinded-then-void-from-the-start,only-the-party-with-untrue-intent-holds-the-formative-right,rescission-needs-litigation-or-arbitration-notice-counts-as-none,short-clocks-run-one-year-ninety-days-and-the-cap-is-five-years"
        data-focal-rule="untrue-intent-holds-the-lever-but-only-courts-and-clocks-can-pull-it"
        data-focal-channels="contrast,connector,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="voidable-meaning" style={{position: 'absolute', left: 40, top: 0, width: 832, height: 190}}>
          <Panel tone={C.vermilion} watermark={<Undo2 size={140} color={C.vermilion} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.vermilion} icon={<Undo2 size={24} color={C.honeyPale} strokeWidth={2.2} />}>含义</PanelTab>
            <IconChip icon={<Undo2 size={26} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="可撤销：">
              因<Soft color={C.vermilion}>意思表示不真实</Soft>，一方可以撤销其法律效力
            </IconChip>
            <div style={{display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center'}}>
              <Chip tone={C.vermilion} toneBg={C.vermilionPale} ink={C.vermilion}>欺诈</Chip>
              <Chip tone={C.vermilion} toneBg={C.vermilionPale} ink={C.vermilion}>胁迫</Chip>
              <Chip tone={C.vermilion} toneBg={C.vermilionPale} ink={C.vermilion}>重大误解</Chip>
              <Chip tone={C.vermilion} toneBg={C.vermilionPale} ink={C.vermilion}>显失公平</Chip>
              <span style={{fontSize: 19.5, fontWeight: 900, color: C.inkSoft}}>四种不真实情形</span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={28} from="right" marker="holder-and-nature" style={{position: 'absolute', left: 904, top: 0, width: 832, height: 190}}>
          <Panel tone={C.plum} watermark={<Scale size={140} color={C.plum} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.plum} icon={<Scale size={24} color={C.honeyPale} strokeWidth={2.2} />}>撤销权人 · 性质 · 效力</PanelTab>
            <IconChip icon={<Scale size={26} color={C.paper} strokeWidth={2.2} />} tone={C.plum} title="撤销权人：">
              行为人中<Under color={C.plum} delay={80}>意思表示不真实</Under>的一方
            </IconChip>
            <IconChip icon={<Gavel size={26} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="性质＝形成权：">
              必须<Soft color={C.vermilion}>行使</Soft>才发生撤销效果 · 撤销后<Seal delay={140} size={17}>自始无效</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={60} from="left" marker="exercise-mode-rule" style={{position: 'absolute', left: 40, top: 206, width: 832, height: 200}}>
          <Panel tone={C.wine} watermark={<Gavel size={140} color={C.wine} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.wine} icon={<Gavel size={24} color={C.honeyPale} strokeWidth={2.2} />}>行使方式 · 陷阱</PanelTab>
            <IconChip icon={<Gavel size={26} color={C.paper} strokeWidth={2.2} />} tone={C.jade} title="正确方式：">
              以<Under color={C.jade} delay={90}>提起诉讼</Under>或<Under color={C.jade} delay={110}>申请仲裁</Under>的方式行使
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="单方通知：">
              视为撤销权<Seal delay={150} size={17}>未行使 ✗</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={84} from="right" marker="rescission-periods" style={{position: 'absolute', left: 904, top: 206, width: 832, height: 200}}>
          <Panel tone={C.honey} watermark={<Timer size={140} color={C.honey} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.honey} icon={<Timer size={24} color={C.honeyPale} strokeWidth={2.2} />}>撤销期间速览</PanelTab>
            <IconChip icon={<Timer size={26} color={C.paper} strokeWidth={2.2} />} tone={C.honey} title="短期（各不相同）：">
              欺诈·显失公平 1 年 · 重大误解 90 日 · 胁迫自终止起 1 年
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="最长（统一）：">
              自行为<Under color={C.vermilion} delay={120}>发生之日</Under>起 5 年未行使 → <Seal delay={160} size={17}>撤销权消灭</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={120} from="up" style={{position: 'absolute', left: 40, top: 410, width: 1696, height: 358}}>
          <Panel tone={C.jade} watermark={<Timer size={150} color={C.jade} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 20px'}}>
            <PanelTab tone={C.jade} icon={<Timer size={22} color={C.honeyPale} strokeWidth={2.2} />}>撤销期间综合对照表</PanelTab>
            <IconChip icon={<Timer size={26} color={C.paper} strokeWidth={2.2} />} tone={C.jade} title="欺诈 · 显失公平：">
              自<Soft color={C.jade}>知道或应当知道</Soft>撤销事由之日起 <Seal delay={150} size={18} tone={C.jade}>1 年</Seal>
            </IconChip>
            <IconChip icon={<Timer size={26} color={C.paper} strokeWidth={2.2} />} tone={C.honey} title="重大误解：">
              自知道或应当知道之日起 <Seal delay={190} size={18} tone={C.honey}>90 日</Seal>
            </IconChip>
            <IconChip icon={<Timer size={26} color={C.paper} strokeWidth={2.2} />} tone={C.plum} title="胁迫：">
              自<Soft color={C.plum}>胁迫行为终止之日</Soft>起 <Seal delay={230} size={18} tone={C.plum}>1 年</Seal>
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="最长撤销期间（红线）：">
              自行为发生之日起 <Seal delay={270} size={18}>5 年</Seal>未行使 → 撤销权消灭
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const FraudMistakeScene = () => {
  /* data-final-knowledge="fraud-meaning" data-final-knowledge="mistake-meaning" data-final-knowledge="trade-matter-forks" data-final-knowledge="qualification-exclusion-rule" */
  return (
    <Shell code="04" kicker="欺诈 · 重大误解" title="可撤销事由之一：欺诈与重大误解">
      <div
        data-layout="twin-fraud-mistake-forks"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="fraud-needs-intentional-lies-or-concealment-on-trade-matters,mistake-covers-errors-of-price-terms-object-and-nature,qualification-concealment-and-error-are-never-fraud-nor-mistake,surrounding-environment-lies-outside-the-mistake-catalogue"
        data-focal-rule="intentional-trade-lies-are-fraud-while-honest-errors-of-the-catalogue-are-mistake"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="fraud-meaning" style={{position: 'absolute', left: 40, top: 0, width: 832, height: 230}}>
          <Panel tone={C.vermilion} watermark={<EyeOff size={150} color={C.vermilion} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.vermilion} icon={<EyeOff size={24} color={C.honeyPale} strokeWidth={2.2} />}>欺诈</PanelTab>
            <IconChip icon={<EyeOff size={26} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="定义：">
              <Under color={C.vermilion} delay={70}>故意告知</Under>虚假情况 / <Under color={C.vermilion} delay={95}>故意隐瞒</Under>真实情况 → 对方作出不真实意思表示
            </IconChip>
            <IconChip icon={<Gavel size={26} color={C.paper} strokeWidth={2.2} />} tone={C.plum} title="瓷碗案：">
              乙隐瞒瓷碗为<Soft color={C.vermilion}>文物</Soft> → <Seal delay={150} size={17}>构成欺诈</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={28} from="right" marker="mistake-meaning" style={{position: 'absolute', left: 904, top: 0, width: 832, height: 230}}>
          <Panel tone={C.jade} watermark={<Search size={150} color={C.jade} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.jade} icon={<Search size={24} color={C.honeyPale} strokeWidth={2.2} />}>重大误解</PanelTab>
            <IconChip icon={<Search size={26} color={C.paper} strokeWidth={2.2} />} tone={C.jade} title="定义：">
              对<Soft color={C.jade}>重要事项</Soft>的误解 · 对方<Under color={C.jade} delay={90}>并未欺骗或隐瞒</Under>
            </IconChip>
            <IconChip icon={<Gavel size={26} color={C.paper} strokeWidth={2.2} />} tone={C.jade} title="瓷碗案：">
              甲乙<Soft color={C.jade}>均不知</Soft>是文物 → <Seal delay={150} size={17} tone={C.jade}>构成重大误解</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={70} from="up" marker="trade-matter-forks" style={{position: 'absolute', left: 40, top: 246, width: 1696, height: 272}}>
          <Panel tone={C.honey} watermark={<Split size={150} color={C.honey} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 20px'}}>
            <PanelTab tone={C.honey} icon={<Split size={22} color={C.honeyPale} strokeWidth={2.2} />}>事由边界 · 必须落在交易事项上</PanelTab>
            <div style={{flex: 1, display: 'flex', gap: 14}}>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 8}}>
                <IconChip icon={<EyeOff size={26} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="欺诈事由＝交易事项：">
                  隐瞒<Soft color={C.vermilion}>重大事故</Soft>→构成 ✓ · 隐瞒<Soft color={C.plum}>前妻共有</Soft>→不构成 ✗（与交易无关）
                </IconChip>
                <IconChip icon={<Gavel size={26} color={C.paper} strokeWidth={2.2} />} tone={C.plum} title="名画案：">
                  乙谎称赝品 → <Seal delay={200} size={16}>欺诈 ✓</Seal>
                </IconChip>
              </div>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 8}}>
                <IconChip icon={<Search size={26} color={C.paper} strokeWidth={2.2} />} tone={C.jade} title="误解事由：">
                  <Soft color={C.jade}>错误</Soft>＝写错看错价格单位·第三人传达错误 ／ <Soft color={C.jade}>误解</Soft>＝交易性质·交易对象·交易标的
                </IconChip>
                <IconChip icon={<Gavel size={26} color={C.paper} strokeWidth={2.2} />} tone={C.jade} title="名画案：">
                  甲自以为赝品 → <Seal delay={230} size={16} tone={C.jade}>重大误解 ✓</Seal>
                </IconChip>
              </div>
            </div>
            <IconChip icon={<Ban size={26} color={C.paper} strokeWidth={2.2} />} tone={C.plum} title="学区房案：">
              乙谎称学区房→<Seal delay={270} size={16}>欺诈 ✓</Seal> · 甲自以为→<Seal delay={290} size={16} tone={C.plum}>不构成重大误解 ✗</Seal>（周边环境不属于三类事由）
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={120} from="up" marker="qualification-exclusion-rule" style={{position: 'absolute', left: 40, top: 534, width: 1696, height: 234}}>
          <Panel tone={C.plum} watermark={<Ban size={140} color={C.plum} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '11px 20px'}}>
            <PanelTab tone={C.plum} icon={<Ban size={22} color={C.honeyPale} strokeWidth={2.2} />}>主体资格瑕疵 · 排他规则</PanelTab>
            <IconChip icon={<Ban size={24} color={C.paper} strokeWidth={2.2} />} tone={C.plum} title="三种主体资格欠缺：">
              不具相应<Soft color={C.plum}>民事行为能力</Soft> · 处于<Soft color={C.plum}>无权代理</Soft>状态 · 处于<Soft color={C.plum}>无权处分</Soft>状态
            </IconChip>
            <IconChip icon={<Scale size={24} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="排他规则：">
              隐瞒·欺骗自己无资格 → <Seal delay={190} size={16}>不构成欺诈</Seal> · 对方误信其有资格 → <Seal delay={210} size={16} tone={C.plum}>不构成重大误解</Seal>
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 19.5, fontWeight: 900, color: C.inkSoft}}>钻戒三连：精神病·归李四·无代理权——欺骗与误信均不构成（各有制度另行处理）</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const DuressFairnessScene = () => {
  /* data-final-knowledge="duress-meaning" data-final-knowledge="freedom-not-to-deal" data-final-knowledge="third-party-forks" data-final-knowledge="unconscionability-rule" */
  return (
    <Shell code="05" kicker="胁迫 · 显失公平" title="可撤销事由之二·三：胁迫与显失公平">
      <div
        data-layout="threat-advantage-dual-bench"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="duress-forces-deal-by-threatening-life-honour-or-property,duress-presupposes-the-freedom-not-to-deal,third-party-fraud-asks-the-counterparty-but-third-party-duress-never-asks,unconscionability-needs-exploiting-advantage-or-distress-not-just-bad-terms"
        data-focal-rule="threats-forcing-a-deal-and-exploited-distress-both-open-rescission"
        data-focal-channels="contrast,icon,connector,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="duress-meaning" style={{position: 'absolute', left: 40, top: 0, width: 832, height: 264}}>
          <Panel tone={C.vermilion} watermark={<Flame size={150} color={C.vermilion} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.vermilion} icon={<Flame size={24} color={C.honeyPale} strokeWidth={2.2} />}>胁迫</PanelTab>
            <IconChip icon={<Flame size={26} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="定义：">
              以<Soft color={C.vermilion}>生命健康·荣誉·名誉·财产</Soft>等造成损失相<Under color={C.vermilion} delay={90}>要挟</Under> → 迫使对方作出<Soft color={C.vermilion}>违背真实</Soft>的意思表示
            </IconChip>
            <IconChip icon={<Users size={26} color={C.paper} strokeWidth={2.2} />} tone={C.plum} title="表现与本质：">
              <Soft color={C.plum}>心理威胁</Soft>＋<Soft color={C.plum}>身体强制</Soft>（强迫签字画押）——本质＝<Under color={C.plum} delay={150}>强迫成交</Under>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={28} from="right" marker="freedom-not-to-deal" style={{position: 'absolute', left: 904, top: 0, width: 832, height: 264}}>
          <Panel tone={C.jade} watermark={<Scale size={150} color={C.jade} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.jade} icon={<Scale size={24} color={C.honeyPale} strokeWidth={2.2} />}>逻辑前提 · 不成交自由</PanelTab>
            <IconChip icon={<Scale size={26} color={C.paper} strokeWidth={2.2} />} tone={C.jade} title="前提：">
              胁迫的成立，以对方享有「<Soft color={C.jade}>不成交自由</Soft>」为基础
            </IconChip>
            <IconChip icon={<Flame size={26} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="签字案：">
              「不签弄死你」→ 乙本有<Soft color={C.vermilion}>不签字的自由</Soft> → <Seal delay={160} size={16}>构成胁迫 ✓</Seal>
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.paper} strokeWidth={2.2} />} tone={C.plum} title="还钱案：">
              「不还钱弄死你」→ 乙<Soft color={C.plum}>本就应当还钱</Soft> → <Seal delay={200} size={16} tone={C.plum}>不构成 ✗</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={70} from="up" marker="third-party-forks" style={{position: 'absolute', left: 40, top: 280, width: 1696, height: 220}}>
          <Panel tone={C.plum} watermark={<Users size={140} color={C.plum} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 20px'}}>
            <PanelTab tone={C.plum} icon={<Users size={22} color={C.honeyPale} strokeWidth={2.2} />}>第三人欺诈 vs 第三人胁迫</PanelTab>
            <div style={{flex: 1, display: 'flex', gap: 14}}>
              <IconChip icon={<EyeOff size={26} color={C.paper} strokeWidth={2.2} />} tone={C.honey} title="第三人欺诈：">
                需<Under color={C.honey} delay={120}>相对人知道或应当知道</Under>该欺诈 → 才有撤销权；乙不知情 → 甲可凭<Soft color={C.honey}>重大误解</Soft>撤销
              </IconChip>
              <IconChip icon={<Flame size={26} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="第三人胁迫：">
                <Under color={C.vermilion} delay={150}>不问</Under>相对人是否知情 → <Seal delay={190} size={16}>一定可撤销</Seal>
              </IconChip>
            </div>
            <IconChip icon={<Scale size={26} color={C.paper} strokeWidth={2.2} />} tone={C.plum} title="第三人责任：">
              构成<Soft color={C.plum}>侵权</Soft>→损害赔偿 · 被欺诈胁迫方也有过错→<Soft color={C.plum}>过失相抵</Soft> · 名画丙案：丙赔✓·胁迫撤销✓·欺诈因乙不知情✗·重大误解✓
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={120} from="up" marker="unconscionability-rule" style={{position: 'absolute', left: 40, top: 516, width: 1696, height: 248}}>
          <Panel tone={C.jade} watermark={<Scale size={150} color={C.jade} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 20px'}}>
            <PanelTab tone={C.jade} icon={<Scale size={22} color={C.honeyPale} strokeWidth={2.2} />}>显失公平</PanelTab>
            <IconChip icon={<Scale size={26} color={C.paper} strokeWidth={2.2} />} tone={C.jade} title="定义：">
              利用<Soft color={C.jade}>自己的优势</Soft>或<Soft color={C.vermilion}>对方的危难</Soft> → 对方<Under color={C.vermilion} delay={120}>别无选择·只能就范</Under>·订立明显不利合同
            </IconChip>
            <IconChip icon={<Gavel size={26} color={C.paper} strokeWidth={2.2} />} tone={C.honey} title="末班车案：">
              收 200 元（正常 30 元）→ <Seal delay={180} size={17} tone={C.jade}>显失公平 ✓</Seal> 甲可撤销·索回多收的钱
            </IconChip>
            <IconChip icon={<Users size={26} color={C.paper} strokeWidth={2.2} />} tone={C.plum} title="醉酒签约 · 误区：">
              <Soft color={C.plum}>利用醉酒</Soft>订立明显不利合同＝显失公平 · 误认合同性质签字＝<Soft color={C.vermilion}>重大误解</Soft> · 不能仅凭<Soft color={C.vermilion}>明显不利</Soft>就认定显失公平
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const PendingFinalScene = () => {
  /* data-final-knowledge="pending-cause-rule" data-final-knowledge="four-pending-types" data-final-knowledge="final-void-rule" data-final-knowledge="restitution-interest-ledger" */
  return (
    <Shell code="06" kicker="效力待定 · 最终无效" title="效力待定与最终无效">
      <div
        data-layout="pending-ledger-with-restitution-lane"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="insufficient-right-pending-covers-limited-capacity-disposal-agency-and-debt-transfer,pending-acts-hang-undecided-until-recognised-or-refused,rescinded-and-void-acts-both-end-void-with-restitution,cash-return-pays-lpr-with-fault-and-deposit-rate-without"
        data-focal-rule="short-of-right-the-act-hangs-and-void-ends-in-two-way-restitution"
        data-focal-channels="connector,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="pending-cause-rule" style={{position: 'absolute', left: 40, top: 0, width: 832, height: 220}}>
          <Panel tone={C.plum} watermark={<KeyRound size={140} color={C.plum} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.plum} icon={<KeyRound size={24} color={C.honeyPale} strokeWidth={2.2} />}>效力待定 · 产生原因</PanelTab>
            <IconChip icon={<KeyRound size={26} color={C.paper} strokeWidth={2.2} />} tone={C.plum} title="权利不足：">
              <Soft color={C.plum}>限制民事行为能力</Soft> · <Soft color={C.plum}>无权处分</Soft> · <Soft color={C.plum}>无权代理</Soft>
            </IconChip>
            <IconChip icon={<Hourglass size={26} color={C.paper} strokeWidth={2.2} />} tone={C.honey} title="状态与归宿：">
              成立时<Under color={C.honey} delay={110}>悬而未决</Under> → 待他人<Soft color={C.honey}>追认</Soft>或<Soft color={C.vermilion}>拒绝</Soft>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={28} from="right" marker="four-pending-types" style={{position: 'absolute', left: 904, top: 0, width: 832, height: 220}}>
          <Panel tone={C.honey} watermark={<Split size={140} color={C.honey} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.honey} icon={<Split size={24} color={C.honeyPale} strokeWidth={2.2} />}>四种类型 · 待定事项</PanelTab>
            <IconChip icon={<KeyRound size={24} color={C.paper} strokeWidth={2.2} />} tone={C.plum} title="① 限制行为能力超越：">
              有无<Soft color={C.plum}>约束力</Soft>待定 · ② <Soft color={C.plum}>无权代理</Soft>：约束谁待定
            </IconChip>
            <IconChip icon={<Undo2 size={24} color={C.paper} strokeWidth={2.2} />} tone={C.jade} title="③ 无权处分：">
              <Soft color={C.jade}>物权能否变动</Soft>待定（质押合同一定有效）· ④ <Soft color={C.honey}>债务转让</Soft>：能否转让待定
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={70} from="left" marker="final-void-rule" style={{position: 'absolute', left: 40, top: 236, width: 832, height: 220}}>
          <Panel tone={C.vermilion} watermark={<Gavel size={140} color={C.vermilion} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.vermilion} icon={<Gavel size={24} color={C.honeyPale} strokeWidth={2.2} />}>最终无效</PanelTab>
            <IconChip icon={<Gavel size={26} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="汇合：">
              无效→最终无效 · 可撤销被<Soft color={C.vermilion}>撤销后</Soft>→也归于无效 · 不能生效→<Under color={C.vermilion} delay={130}>参照</Under>无效后果
            </IconChip>
            <IconChip icon={<Stamp size={26} color={C.paper} strokeWidth={2.2} />} tone={C.plum} title="登记审批不改变定性：">
              办了登记·获了批准 → 依然是<Seal delay={160} size={16}>无效或可撤销</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={98} from="right" marker="restitution-interest-ledger" style={{position: 'absolute', left: 904, top: 236, width: 832, height: 220}}>
          <Panel tone={C.jade} watermark={<Coins size={140} color={C.jade} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.jade} icon={<Coins size={24} color={C.honeyPale} strokeWidth={2.2} />}>返还财产 · 利息</PanelTab>
            <IconChip icon={<Undo2 size={26} color={C.paper} strokeWidth={2.2} />} tone={C.jade} title="返还：">
              取得的财产应<Soft color={C.jade}>返还</Soft> · 双方互负返还→<Under color={C.jade} delay={110}>同时履行抗辩权</Under>
            </IconChip>
            <IconChip icon={<Coins size={26} color={C.paper} strokeWidth={2.2} />} tone={C.honey} title="现金利息：">
              <Soft color={C.vermilion}>有过错＝1 年期 LPR</Soft> · <Soft color={C.jade}>无过错＝同期存款基准利率</Soft>
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 19.5, fontWeight: 900, color: C.inkSoft}}>用标的物→付使用费 · 主动提出利息与使用费抵销＝可以</div>
          </Panel>
        </Enter>
        <Enter delay={140} from="up" style={{position: 'absolute', left: 40, top: 472, width: 1696, height: 296}}>
          <Panel tone={C.charcoalMid} watermark={<Coins size={150} color={C.honey} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '13px 20px'}}>
            <PanelTab tone={C.vermilion} icon={<Coins size={22} color={C.honeyPale} strokeWidth={2.2} />}>赔偿损失</PanelTab>
            <IconChip icon={<Coins size={26} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="规则：">
              <Soft color={C.vermilion}>有过错</Soft>的一方赔偿对方损失 · 双方都有过错→<Soft color={C.plum}>各自承担</Soft>相应责任
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.paper} strokeWidth={2.2} />} tone={C.plum} title="法律性质：">
              「<Under color={C.plum} delay={120}>缔约过失责任</Under>」
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.paper} strokeWidth={2.2} />} tone={C.vermilion} title="上限红线：">
              不超过合同<Soft color={C.jade}>有效并履行时</Soft>无过错方可获得的<Soft color={C.jade}>利益</Soft>
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 19.5, fontWeight: 900, color: C.inkSoft}}>三条瑕疵线在此汇合：违法→无效 · 不真实→可撤销 · 权利不足→待定</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
