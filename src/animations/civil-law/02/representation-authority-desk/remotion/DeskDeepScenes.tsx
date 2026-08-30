import {ArrowLeftRight, Building2, FileCheck, Gavel, Lock, Network, Scale, ShieldAlert, Split, User, Users} from 'lucide-react';
import {interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';
import {C, Chip, Enter, IconChip, Panel, PanelTab, Seal, Shell, Soft, Under, prog} from './DeskScenes';

export const RepresentativeActScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="nominal-fork" data-final-knowledge="zhang-loan-verdicts"
     data-stateful-source="representative-chair-ticket" data-stateful-terminal="representative-chair-ticket" */
  const ticketTravel = prog(frame, 240, 40);
  const ticketX = interpolate(ticketTravel, [0, 1], [520, 1130], CLAMP);
  return (
    <Shell code="03" kicker="代表行为 · 个人行为" title="法定代表人的代表行为与个人行为的区分">
      <div
        data-layout="nominal-fork-with-borrowing-verdicts"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,stamp,external-negation,thin-underline"
        data-visual-grammar="acts-in-the-persons-name-bind-the-person-as-representation,acts-in-ones-own-name-bind-the-representative-personally,loan-commitments-by-the-representative-stay-with-the-company,personal-guarantees-bind-that-representative-alone"
        data-focal-rule="the-name-on-the-act-decides-who-owes-and-personal-debts-do-not-follow-the-successor"
        data-focal-channels="contrast,connector,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="nominal-fork" style={{position: 'absolute', left: 40, top: 0, width: 1696, height: 180}}>
          <Panel tone={C.bronze} watermark={<Split size={150} color={C.bronze} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 20px'}}>
            <PanelTab tone={C.bronze} icon={<Split size={24} color={C.bronzePale} strokeWidth={2.2} />}>区分标准：实施名义</PanelTab>
            <div style={{display: 'flex', gap: 12, flex: 1}}>
              <IconChip icon={<Building2 size={30} color={C.pearl} strokeWidth={2.2} />} tone={C.sage} title="以法人名义实施：">
                性质＝<strong>代表行为</strong> → 后果由<Under color={C.sage} delay={80}>法人承担</Under>
              </IconChip>
              <IconChip icon={<User size={30} color={C.pearl} strokeWidth={2.2} />} tone={C.wine} title="以自己名义实施：">
                性质＝<strong>个人行为</strong> → 后果由<Under color={C.wine} delay={110}>代表人个人承担</Under>
              </IconChip>
            </div>
          </Panel>
        </Enter>
        <div data-stateful-source="representative-chair-ticket" style={{position: 'absolute', left: ticketX, top: 192, opacity: prog(frame, 200, 14) * (1 - prog(frame, 266, 14)), visibility: frame >= 284 ? 'hidden' : 'visible'}}>
          <Chip tone={C.bronze} toneBg={C.pearl}>张某卸任 · 王某继任法定代表人</Chip>
        </div>
        <span data-stateful-terminal="representative-chair-ticket" style={{position: 'absolute', left: 1150, top: 192, display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${C.wine}`, backgroundColor: C.winePale, padding: '5px 10px', fontSize: 19, fontWeight: 950, color: C.ink, opacity: prog(frame, 270, 14)}}>
          个人债务不随继任转移 ✗
        </span>
        <Enter delay={80} from="up" marker="zhang-loan-verdicts" style={{position: 'absolute', left: 40, top: 240, width: 1696, height: 330}}>
          <Panel tone={C.wisteria} watermark={<Gavel size={170} color={C.wisteria} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 20px'}}>
            <PanelTab tone={C.wisteria} icon={<Gavel size={24} color={C.bronzePale} strokeWidth={2.2} />}>案例分析 · 张某借款</PanelTab>
            <div style={{fontSize: 19.5, fontWeight: 900, color: C.inkSoft, lineHeight: 1.45}}>
              案情：甲公司法定代表人张某向乙公司借款 100 万元·约定「甲公司法定代表人承担连带还款责任」·到期前张某卸任、王某继任·到期未还
            </div>
            <IconChip icon={<Building2 size={28} color={C.pearl} strokeWidth={2.2} />} tone={C.sage} title="① 乙公司请求甲公司偿还借款：">
              借款意思表示＝<Soft color={C.sage}>代表行为</Soft> → <Seal delay={170} size={18} tone={C.sage}>有权 ✓ 甲公司偿还</Seal>
            </IconChip>
            <IconChip icon={<User size={28} color={C.pearl} strokeWidth={2.2} />} tone={C.wine} title="② 请求原法定代表人张某承担连带还款责任：">
              连带承诺＝<Soft color={C.wine}>个人行为</Soft> → <Seal delay={210} size={18}>能 ✓ 张某个人承担</Seal>
            </IconChip>
            <IconChip icon={<Users size={28} color={C.pearl} strokeWidth={2.2} />} tone={C.wisteria} title="③ 请求现法定代表人王某承担连带还款责任：">
              张某的个人行为 → <Seal delay={250} size={18} tone={C.wisteria}>不能 ✗ 王某无需承担</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={150} from="up" style={{position: 'absolute', left: 40, top: 586, width: 1696, height: 120}}>
          <div style={{height: '100%', backgroundColor: C.aubergineMid, border: `2px solid ${C.bronze}`, display: 'flex', alignItems: 'center', gap: 18, padding: '0 26px'}}>
            <span style={{padding: '5px 13px', backgroundColor: C.bronze, color: C.aubergine, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>总结</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.pearl}}>
              借款<Soft color={C.bronzePale}>看公司</Soft> · 连带<Soft color={C.bronzePale}>看签字的人</Soft> · 个人债务<Soft color={C.bronzePale}>不随继任转移</Soft>
            </span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const UltraViresScene = () => {
  /* data-final-knowledge="vi-principle-bench" data-final-knowledge="charter-vs-statute-gate" data-final-knowledge="exempt-guarantee-shelf" data-final-knowledge="mortgage-case-verdicts" */
  return (
    <Shell code="04" kicker="越权代表 · 公司担保" title="越权代表">
      <div
        data-layout="ultra-vires-gate-with-exemption-shelf"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="bona-fide-counterparties-keep-ultra-vires-contracts-valid,bad-faith-counterparties-void-them-with-culpable-compensation,charter-breaches-presume-good-faith-while-statute-breaches-presume-bad,four-exempt-guarantees-need-no-resolution-and-stay-valid"
        data-focal-rule="counterparty-good-faith-keeps-the-deal-and-the-source-of-excess-sets-the-presumption"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="vi-principle-bench" style={{position: 'absolute', left: 40, top: 0, width: 1696, height: 190}}>
          <Panel tone={C.wine} watermark={<ShieldAlert size={150} color={C.wine} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 20px'}}>
            <PanelTab tone={C.wine} icon={<ShieldAlert size={24} color={C.bronzePale} strokeWidth={2.2} />}>法定代表人超越权限 · 以法人名义订立合同</PanelTab>
            <div style={{flex: 1, display: 'flex', gap: 12}}>
              <IconChip icon={<User size={28} color={C.pearl} strokeWidth={2.2} />} tone={C.sage} title="相对人善意：">
                代表行为<Under color={C.sage} delay={80}>有效</Under> · 法人承担合同责任
              </IconChip>
              <IconChip icon={<User size={28} color={C.pearl} strokeWidth={2.2} />} tone={C.wine} title="相对人恶意：">
                合同<Under color={C.wine} delay={110}>无效</Under> · 法人承担过错赔偿责任（缔约过失责任）
              </IconChip>
              <IconChip icon={<Scale size={28} color={C.pearl} strokeWidth={2.2} />} tone={C.bronze} title="法人承担后：">
                有权向越权的法定代表人<Under color={C.bronze} delay={140}>追偿</Under>
              </IconChip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={50} from="up" marker="charter-vs-statute-gate" style={{position: 'absolute', left: 40, top: 206, width: 1696, height: 200}}>
          <Panel tone={C.wisteria} watermark={<FileCheck size={150} color={C.wisteria} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 20px'}}>
            <PanelTab tone={C.wisteria} icon={<FileCheck size={24} color={C.bronzePale} strokeWidth={2.2} />}>两种越权代表</PanelTab>
            <IconChip icon={<FileCheck size={28} color={C.pearl} strokeWidth={2.2} />} tone={C.sage} title="违反「章程规定」（内部规章制度）：">
              无证据时推定相对人<Soft color={C.sage}>善意</Soft> → 合同有效 —— 案例：越权购房合同有效
            </IconChip>
            <div data-final-knowledge="mortgage-case-verdicts">
              <IconChip icon={<Lock size={28} color={C.pearl} strokeWidth={2.2} />} tone={C.wine} title="违反「法律规定」（公司法第 15 条：为他人债务提供担保须经公司决议）：">
                无证据时推定相对人<Soft color={C.wine}>恶意</Soft> → 担保合同无效 —— 案例：甲公司可拒绝承担担保责任
              </IconChip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={110} from="up" marker="exempt-guarantee-shelf" style={{position: 'absolute', left: 40, top: 422, width: 1696, height: 230}}>
          <Panel tone={C.sage} watermark={<Lock size={150} color={C.sage} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 20px'}}>
            <PanelTab tone={C.sage} icon={<Lock size={24} color={C.bronzePale} strokeWidth={2.2} />}>公司为他人债务提供担保无需决议的情形</PanelTab>
            <div style={{flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8}}>
              <IconChip icon={<Building2 size={26} color={C.pearl} strokeWidth={2.2} />} tone={C.sage} title="① 金融机构／担保公司：">
                金融机构开立保函·担保公司提供担保（其分支机构未经授权除外＝无权代理）
              </IconChip>
              <IconChip icon={<Building2 size={26} color={C.pearl} strokeWidth={2.2} />} tone={C.sage} title="② 全资子公司：">
                公司为其全资子公司开展经营活动提供担保
              </IconChip>
              <IconChip icon={<FileCheck size={26} color={C.pearl} strokeWidth={2.2} />} tone={C.sage} title="③ 股东签字同意：">
                由单独或共同持有公司 2/3 以上有表决权的股东签字同意
              </IconChip>
              <IconChip icon={<User size={26} color={C.pearl} strokeWidth={2.2} />} tone={C.sage} title="④ 一人公司：">
                一人公司为其股东提供担保
              </IconChip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={170} from="up" style={{position: 'absolute', left: 40, top: 668, width: 1696, height: 100}}>
          <div style={{height: '100%', backgroundColor: C.aubergineMid, border: `2px solid ${C.bronze}`, display: 'flex', alignItems: 'center', gap: 18, padding: '0 26px'}}>
            <span style={{padding: '5px 13px', backgroundColor: C.bronze, color: C.aubergine, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>总结</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.pearl}}>
              违反章程规定<Soft color={C.bronzePale}>推定善意</Soft> · 违反法律规定<Soft color={C.bronzePale}>推定恶意</Soft> · 四类担保<Soft color={C.bronzePale}>无需决议</Soft>
            </span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const BranchSplitScene = () => {
  /* data-final-knowledge="branch-nature-rule" data-final-knowledge="connected-liability-web" data-final-knowledge="split-ledger-rules" data-final-knowledge="bank-split-verdicts" */
  return (
    <Shell code="05" kicker="法人分支机构 · 法人分立" title="法人分支机构与法人分立的债权、债务承受">
      <div
        data-layout="branch-web-with-split-ledger"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="branches-act-in-own-name-yet-owe-no-separate-personality,debts-flow-freely-between-head-office-and-branch-assets,split-successors-take-creditors-as-agreed-or-jointly,internal-split-agreements-bind-insiders-only-for-recourse"
        data-focal-rule="branches-share-one-purse-and-splits-face-creditors-jointly-absent-external-agreement"
        data-focal-channels="connector,spatial,contrast,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="branch-nature-rule" style={{position: 'absolute', left: 40, top: 0, width: 832, height: 264}}>
          <Panel tone={C.bronze} watermark={<Network size={150} color={C.bronze} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.bronze} icon={<Network size={24} color={C.bronzePale} strokeWidth={2.2} />}>法人分支机构（如：分公司）</PanelTab>
            <IconChip icon={<Network size={26} color={C.pearl} strokeWidth={2.2} />} tone={C.bronze} title="概念：">
              法人的派出营业机构
            </IconChip>
            <IconChip icon={<FileCheck size={26} color={C.pearl} strokeWidth={2.2} />} tone={C.sage} title="名称与活动：">
              有自己的名称 · 可以以自己的名称从事民事活动
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.pearl} strokeWidth={2.2} />} tone={C.wine} title="法律地位与责任：">
              没有法人资格 · 财产·权利·义务·责任最终归属于法人
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={28} from="right" marker="connected-liability-web" style={{position: 'absolute', left: 904, top: 0, width: 832, height: 264}}>
          <Panel tone={C.wisteria} watermark={<ArrowLeftRight size={150} color={C.wisteria} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 18px'}}>
            <PanelTab tone={C.wisteria} icon={<ArrowLeftRight size={24} color={C.bronzePale} strokeWidth={2.2} />}>核心原则：责任连通</PanelTab>
            <IconChip icon={<ArrowLeftRight size={26} color={C.pearl} strokeWidth={2.2} />} tone={C.wisteria} title="法人债务：">
              可以由分支机构财产偿还
            </IconChip>
            <IconChip icon={<ArrowLeftRight size={26} color={C.pearl} strokeWidth={2.2} />} tone={C.wisteria} title="分支机构债务：">
              可以由法人财产、其他分支机构财产偿还
            </IconChip>
            <IconChip icon={<Gavel size={26} color={C.pearl} strokeWidth={2.2} />} tone={C.sage} title="案例分析（甲公司 A、B 分公司）：">
              互欠均可申请执行对方财产 ✓
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={70} from="up" marker="split-ledger-rules" style={{position: 'absolute', left: 40, top: 274, width: 1696, height: 236}}>
          <Panel tone={C.wine} watermark={<Split size={150} color={C.wine} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 20px'}}>
            <PanelTab tone={C.wine} icon={<Split size={24} color={C.bronzePale} strokeWidth={2.2} />}>法人分立（一个法人分立为 2 个以上法人）· 债权债务由分立后各法人享有、承担</PanelTab>
            <IconChip icon={<FileCheck size={26} color={C.pearl} strokeWidth={2.2} />} tone={C.sage} title="有外部约定：">
              与外部债权人·债务人有约定 → 从其约定（有外部效力）
            </IconChip>
            <IconChip icon={<Users size={26} color={C.pearl} strokeWidth={2.2} />} tone={C.wine} title="没有外部约定：">
              对外按连带关系处理 —— 享有全部债权·承担全部债务（保护交易安全的底线）
            </IconChip>
            <IconChip icon={<Lock size={26} color={C.pearl} strokeWidth={2.2} />} tone={C.wisteria} title="内部约定：">
              不得对外部债权人·债务人主张 · 仅内部效力 · 作对外连带后的内部追偿依据
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={130} from="up" marker="bank-split-verdicts" style={{position: 'absolute', left: 40, top: 520, width: 1696, height: 248}}>
          <Panel tone={C.bronze} watermark={<Gavel size={150} color={C.bronze} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '11px 20px'}}>
            <PanelTab tone={C.bronze} icon={<Gavel size={24} color={C.bronzePale} strokeWidth={2.2} />}>案例分析 · 甲公司欠 A 银行 100 万元后分立为乙、丙</PanelTab>
            <IconChip icon={<FileCheck size={25} color={C.pearl} strokeWidth={2.2} />} tone={C.sage} title="① 乙丙与 A 银行约定由乙承担：">
              外部约定 → 银行<Seal delay={200} size={17} tone={C.wine}>不能请求丙 ✗</Seal>
            </IconChip>
            <IconChip icon={<Lock size={25} color={C.pearl} strokeWidth={2.2} />} tone={C.wisteria} title="② 仅乙丙内部约定由乙承担：">
              内部约定无外部效力·对外连带 → 银行<Seal delay={230} size={17} tone={C.sage}>能请求丙 ✓</Seal>
            </IconChip>
            <IconChip icon={<ArrowLeftRight size={25} color={C.pearl} strokeWidth={2.2} />} tone={C.bronze} title="③ 丙偿还后向乙追偿：">
              内部约定＝追偿依据 → <Seal delay={260} size={17} tone={C.sage}>可以追偿 ✓</Seal>
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
