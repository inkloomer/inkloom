import {BadgeCheck, Ban, FileWarning, Gavel, Hourglass, Megaphone, Scale, ScrollText, UserCheck, UserX, Users, Undo2} from 'lucide-react';
import {CLAMP} from '../../../../shared/remotion-runtime';
import {C, Chip, Enter, IconChip, Panel, PanelTab, Seal, Shell, Soft, Under} from './AgencyScenes';

export const NarrowUnauthorizedScene = () => {
  /* data-final-knowledge="unauthorized-scope" data-final-knowledge="principal-fork" data-final-knowledge="counterparty-fork" data-final-knowledge="double-revocation-verdicts" */
  return (
    <Shell code="03" kicker="狭义无权代理" title="狭义无权代理：四方权利的悬置">
      <div
        data-layout="four-rights-hanging-desk"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="unauthorized-agency-runs-without-over-or-expired-power,the-act-hangs-on-whether-it-binds-the-principal,principal-holds-ratify-refuse-and-counterparty-holds-urge-revoke,counterparty-revocation-rides-on-good-faith-and-one-notice"
        data-focal-rule="the-act-hangs-only-on-binding-the-principal-and-four-rights-wait-on-two-desks"
        data-focal-channels="contrast,connector,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="unauthorized-scope" style={{position: 'absolute', left: 40, top: 0, width: 1696, height: 190}}>
          <Panel tone={C.coral} watermark={<Hourglass size={130} color={C.coral} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 20px'}}>
            <PanelTab tone={C.coral} icon={<Hourglass size={22} color={C.coralPale} strokeWidth={2.2} />}>无权代理 · 构成情形</PanelTab>
            <IconChip icon={<UserX size={26} color={C.paper} strokeWidth={2.2} />} tone={C.coral} title="情形：">
              <Soft color={C.coral}>没有代理权</Soft> · <Soft color={C.coral}>超越代理权</Soft> · <Soft color={C.coral}>代理权终止</Soft>后代理 —— 数个委托代理人未协商<Under color={C.coral} delay={110}>擅自行使</Under>也构成（有权中的无权）
            </IconChip>
            <IconChip icon={<Users size={26} color={C.paper} strokeWidth={2.2} />} tone={C.grape} title="本质：">
              仍以<Soft color={C.grape}>被代理人的名义</Soft>与相对人实施代理行为的代理
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={36} from="left" marker="principal-fork" style={{position: 'absolute', left: 40, top: 206, width: 832, height: 264}}>
          <Panel tone={C.wave} watermark={<UserCheck size={150} color={C.wave} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.wave} icon={<UserCheck size={24} color={C.coralPale} strokeWidth={2.2} />}>被代理人 · 追认权与拒绝权</PanelTab>
            <IconChip icon={<UserCheck size={26} color={C.paper} strokeWidth={2.2} />} tone={C.wave} title="追认：">
              自始对被代理人<Seal delay={110} size={17} tone={C.wave}>有效 ✓</Seal>自始承受法律后果
            </IconChip>
            <IconChip icon={<UserX size={26} color={C.paper} strokeWidth={2.2} />} tone={C.coral} title="拒绝：">
              自始<Seal delay={140} size={17}>无效 ✗</Seal>后果在<Soft color={C.coral}>行为人与相对人</Soft>之间产生约束力
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 19.5, fontWeight: 900, color: C.inkSoft}}>电脑案：追认→丙请求甲付款 · 拒绝→丙未丧失请求权→可请求乙</div>
          </Panel>
        </Enter>
        <Enter delay={60} from="right" marker="counterparty-fork" style={{position: 'absolute', left: 904, top: 206, width: 832, height: 264}}>
          <Panel tone={C.grape} watermark={<Megaphone size={150} color={C.grape} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.grape} icon={<Megaphone size={24} color={C.coralPale} strokeWidth={2.2} />}>相对人 · 催告权与撤销权</PanelTab>
            <IconChip icon={<Megaphone size={26} color={C.paper} strokeWidth={2.2} />} tone={C.grape} title="催告权：">
              催告被代理人<Under color={C.grape} delay={90}>30 日内</Under>追认 → 逾期未答复<Seal delay={130} size={16} tone={C.grape}>视为拒绝</Seal>
            </IconChip>
            <IconChip icon={<Undo2 size={26} color={C.paper} strokeWidth={2.2} />} tone={C.coral} title="撤销权条件：">
              ① 被代理人未表示<Soft color={C.coral}>追认</Soft> ② 相对人<Soft color={C.coral}>善意</Soft>（不知且不应知道）
            </IconChip>
            <IconChip icon={<Gavel size={26} color={C.paper} strokeWidth={2.2} />} tone={C.wave} title="方式：">
              <Seal delay={170} size={16} tone={C.wave}>单方通知</Seal>·<Under color={C.wave} delay={200}>无需诉讼或仲裁</Under>（VS 意思表示不真实的撤销须诉讼仲裁）
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={110} from="up" marker="double-revocation-verdicts" style={{position: 'absolute', left: 40, top: 486, width: 1696, height: 282}}>
          <Panel tone={C.grape} watermark={<Scale size={160} color={C.grape} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 20px'}}>
            <PanelTab tone={C.grape} icon={<Scale size={22} color={C.coralPale} strokeWidth={2.2} />}>案例辨析 · 两项撤销权（劣质食用油冒充优质）</PanelTab>
            <IconChip icon={<Undo2 size={24} color={C.paper} strokeWidth={2.2} />} tone={C.coral} title="案①（乙冒充优质卖给丙）：">
              丙享<Seal delay={140} size={16} tone={C.coral}>两项</Seal>撤销权（相对人撤销权＋受欺诈人撤销权）· 甲追认后剩<Seal delay={170} size={16} tone={C.jade}>一项</Seal>——相对人撤销权因追认<Soft color={C.coral}>消灭</Soft>
            </IconChip>
            <IconChip icon={<Undo2 size={24} color={C.paper} strokeWidth={2.2} />} tone={C.grape} title="案②（丙冒充优质卖给乙）：">
              乙享<Soft color={C.grape}>受欺诈人</Soft>撤销权 · 丙享<Soft color={C.coral}>相对人</Soft>撤销权 · 甲追认→乙的受欺诈撤销权归<Soft color={C.grape}>甲</Soft>·乙可在授权范围内<Under color={C.grape} delay={200}>代理行使</Under>
            </IconChip>
            <IconChip icon={<UserX size={24} color={C.paper} strokeWidth={2.2} />} tone={C.wave} title="电脑案（甲拒绝·乙无力付款）：">
              丙<Soft color={C.wave}>撤销</Soft>合同 → 自始<Seal delay={250} size={16} tone={C.wave}>无效</Seal>
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const ApparentAgencyScene = () => {
  /* data-final-knowledge="apparent-formula" data-final-knowledge="cause-catalogue" data-final-knowledge="forgery-contrast-rule" data-final-knowledge="bear-and-chase-rule" */
  return (
    <Shell code="04" kicker="表见代理" title="表见代理：外观真实的代价">
      <div
        data-layout="apparent-cause-true-gauge-wall"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="apparent-agency-needs-apparent-cause-plus-unwary-counterparty,causes-include-seals-offices-usage-and-authorisation-letters,forged-instruments-never-count-while-forged-resolutions-may-spare,the-principal-must-bear-it-and-then-chase-the-agent"
        data-focal-rule="a-real-looking-cause-plus-an-unwary-counterparty-binds-the-principal-fully"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="apparent-formula" style={{position: 'absolute', left: 40, top: 0, width: 1696, height: 140}}>
          <Panel tone={C.coral} watermark={<BadgeCheck size={130} color={C.coral} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 20px'}}>
            <PanelTab tone={C.coral} icon={<BadgeCheck size={22} color={C.coralPale} strokeWidth={2.2} />}>表见代理 · 构成公式</PanelTab>
            <IconChip icon={<BadgeCheck size={26} color={C.paper} strokeWidth={2.2} />} tone={C.coral} title="公式：">
              <Under color={C.coral} delay={60}>表见事由</Under> ＋ 相对人<Under color={C.coral} delay={90}>不知情</Under>（不知道且不应知道行为人无代理权）
            </IconChip>
            <IconChip icon={<Users size={26} color={C.paper} strokeWidth={2.2} />} tone={C.wave} title="逻辑：">
              只有相对人<Soft color={C.wave}>不知情</Soft>，才会基于表见事由相信行为人是<Soft color={C.wave}>有权代理</Soft>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={36} from="left" marker="cause-catalogue" style={{position: 'absolute', left: 40, top: 156, width: 832, height: 250}}>
          <Panel tone={C.wave} watermark={<ScrollText size={150} color={C.wave} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.wave} icon={<ScrollText size={24} color={C.coralPale} strokeWidth={2.2} />}>表见事由 · 常见对象</PanelTab>
            <IconChip icon={<ScrollText size={26} color={C.paper} strokeWidth={2.2} />} tone={C.wave} title="客观对象：">
              <Soft color={C.wave}>公章 · 证书 · 文件</Soft>·<Soft color={C.grape}>职务</Soft>·<Soft color={C.coral}>交易习惯</Soft>·授权书
            </IconChip>
            <IconChip icon={<BadgeCheck size={26} color={C.paper} strokeWidth={2.2} />} tone={C.grape} title="考法：">
              职务＝<Soft color={C.grape}>事职相符</Soft> · 交易习惯＝<Soft color={C.coral}>最后一次辞职了</Soft>
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.paper} strokeWidth={2.2} />} tone={C.coral} title="根本要求：">
              表见事由本身必须是<Under color={C.coral} delay={140}>真实</Under>的
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={60} from="right" marker="forgery-contrast-rule" style={{position: 'absolute', left: 904, top: 156, width: 832, height: 250}}>
          <Panel tone={C.grape} watermark={<FileWarning size={150} color={C.grape} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.grape} icon={<FileWarning size={24} color={C.coralPale} strokeWidth={2.2} />}>伪造文件 · 效力区分陷阱</PanelTab>
            <IconChip icon={<Ban size={26} color={C.paper} strokeWidth={2.2} />} tone={C.coral} title="表见代理：">
              公章·证书·文件<Soft color={C.coral}>系伪造</Soft> → 绝对<Seal delay={130} size={16}>不构成表见事由</Seal>
            </IconChip>
            <IconChip icon={<BadgeCheck size={26} color={C.paper} strokeWidth={2.2} />} tone={C.wave} title="VS 公司擅自担保：">
              决议系伪造 → 相对人仍<Soft color={C.wave}>善意</Soft> → 担保<Seal delay={190} size={16} tone={C.wave}>有效 ✓</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={110} from="up" marker="bear-and-chase-rule" style={{position: 'absolute', left: 40, top: 422, width: 1696, height: 346}}>
          <Panel tone={C.grape} watermark={<Scale size={160} color={C.grape} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '13px 20px'}}>
            <PanelTab tone={C.grape} icon={<Gavel size={22} color={C.coralPale} strokeWidth={2.2} />}>案例辨析 · 效力与内部救济</PanelTab>
            <IconChip icon={<ScrollText size={24} color={C.paper} strokeWidth={2.2} />} tone={C.coral} title="张某辞职案：">
              长期业务往来＝<Soft color={C.coral}>交易习惯</Soft> → 辞职次日订约＝<Seal delay={160} size={17} tone={C.coral}>表见代理 ✓</Seal>
            </IconChip>
            <IconChip icon={<BadgeCheck size={24} color={C.paper} strokeWidth={2.2} />} tone={C.grape} title="总经理越权案：">
              乙知道张某是<Soft color={C.grape}>总经理</Soft>（职务外观）→ 200 万未经董事会＝<Seal delay={200} size={17} tone={C.grape}>表见代理 ✓</Seal>
            </IconChip>
            <IconChip icon={<UserCheck size={24} color={C.paper} strokeWidth={2.2} />} tone={C.wave} title="效力：">
              对被代理人<Soft color={C.wave}>有效</Soft>·被代理人<Under color={C.wave} delay={240}>必须</Under>承受 · <Seal delay={270} size={16} tone={C.coral}>不享有追认权与拒绝权</Seal>
            </IconChip>
            <IconChip icon={<Undo2 size={24} color={C.paper} strokeWidth={2.2} />} tone={C.coral} title="内部救济：">
              被代理人承受后 → 可向<Soft color={C.coral}>无权代理人</Soft>追偿因代理行为遭受的<Soft color={C.coral}>损失</Soft>
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
