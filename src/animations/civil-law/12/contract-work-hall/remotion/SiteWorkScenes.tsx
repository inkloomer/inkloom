import type {CSSProperties, ReactNode} from 'react';
import {Ban, Coins, Gavel, Hammer, HardHat, Hourglass, Key, Scale, ScrollText, Stamp, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';
import {C, Enter, Mover, Panel, PanelTab, IconChip, Seal, Shell, Under, Soft, Chip, prog, PLAYER_CONTROL_SAFE_BOTTOM} from './ContractWorkScenes';

export const SiteTypesScene = () => {
  /* data-final-knowledge="site-types-forms" */
  const frame = useCurrentFrame();
  return (
    <Shell code="03" kicker="建设工程 · 类型" title="发包分包转包三型">
      <div
        data-layout="three-type-site-map"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="survey-design-and-construction-contracts-are-written-formal-special-contracting,award-runs-owner-to-contractor-while-subcontract-passes-part-and-assignment-passes-all,subcontract-needs-consent-and-structure-work-stays-personal,general-contracting-rules-apply-unless-conflicted"
        data-focal-rule="work-orders-flow-owner-to-contractor-then-split-into-part-or-whole-hops-with-legality-labels"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="site-types-forms" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 220}}>
          <Panel tone={C.copper} watermark={<HardHat size={120} color={C.copper} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '10px 18px'}}>
            <PanelTab tone={C.copper} icon={<HardHat size={24} color={C.cream} strokeWidth={2.2} />}>建设工程合同 · 概念与形式</PanelTab>
            <span style={{fontSize: 20, fontWeight: 900, color: C.ink}}><Soft color={C.copper}>承包人</Soft>进行工程建设·<Soft color={C.copper}>发包人</Soft>支付价款 → 含<Soft color={C.indigoLike}>勘察·设计·施工</Soft>合同 → <Seal delay={160} tone={C.indigoLike} size={17}>要式·书面</Seal></span>
            <span style={{fontSize: 19, fontWeight: 900, color: C.inkSoft}}>特殊的承揽合同：承揽一般规则不冲突即可<Soft color={C.moss}>适用</Soft></span>
          </Panel>
        </Enter>
        <Enter delay={40} from="right" style={{position: 'absolute', left: 0, top: 236, width: 1776, height: 516}}>
          <Panel tone={C.indigoLike} watermark={<Users size={140} color={C.indigoLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '11px 18px'}}>
            <PanelTab tone={C.indigoLike} icon={<Users size={24} color={C.cream} strokeWidth={2.2} />}>订立三型 · 工作流向</PanelTab>
            <div style={{border: `2px dashed ${C.edge}`, backgroundColor: C.creamDim, position: 'relative', height: 180, overflow: 'hidden'}}>
              <div style={{position: 'absolute', left: 24, right: 24, top: 88, height: 4, backgroundColor: C.edge}} />
              <div style={{position: 'absolute', left: 30, top: 58}}><Chip tone={C.copper} toneBg={C.copperPale}><HardHat size={16} color={C.copper} strokeWidth={2.4} /><span style={{fontSize: 15, fontWeight: 950, color: C.copper}}>发包人甲</span></Chip></div>
              <div style={{position: 'absolute', left: 300, top: 58}}><Chip tone={C.indigoLike} toneBg={C.billowLike}><Hammer size={16} color={C.indigoLike} strokeWidth={2.4} /><span style={{fontSize: 15, fontWeight: 950, color: C.indigoLike}}>承包人乙</span></Chip></div>
              <Mover delay={70} span={50} fromX={170} toX={270} fadeAt={130} style={{position: 'absolute', top: 64, left: 0}}>
                <Chip tone={C.moss} toneBg={C.mossPale}><ScrollText size={15} color={C.moss} strokeWidth={2.4} /><span style={{fontSize: 14, fontWeight: 950, color: C.moss}}>发包 甲→乙 ✓</span></Chip>
              </Mover>
              <div style={{position: 'absolute', left: 620, top: 22}}><Chip tone={C.moss} toneBg={C.cream}><Hammer size={15} color={C.moss} strokeWidth={2.4} /><span style={{fontSize: 14, fontWeight: 950, color: C.moss}}>丙·一部分</span></Chip></div>
              <Mover delay={150} span={50} fromX={390} toX={560} fadeAt={210} style={{position: 'absolute', top: 28, left: 0}}>
                <Chip tone={C.gold} toneBg={C.goldPale}><ScrollText size={14} color={C.gold} strokeWidth={2.4} /><span style={{fontSize: 13, fontWeight: 950, color: C.gold}}>分包（部分）乙→丙</span></Chip>
              </Mover>
              <div style={{position: 'absolute', left: 620, top: 118}}><Chip tone={C.brick} toneBg={C.brickPale}><Ban size={15} color={C.brick} strokeWidth={2.4} /><span style={{fontSize: 14, fontWeight: 950, color: C.brick}}>丙·全部</span></Chip></div>
              <Mover delay={230} span={50} fromX={390} toX={560} fadeAt={290} style={{position: 'absolute', top: 124, left: 0}}>
                <Chip tone={C.brick} toneBg={C.brickPale}><Ban size={14} color={C.brick} strokeWidth={2.4} /><span style={{fontSize: 13, fontWeight: 950, color: C.brick}}>转包（全部）✗ 一律无效</span></Chip>
              </Mover>
              <span style={{position: 'absolute', right: 24, top: 20, fontSize: 16, fontWeight: 900, color: C.inkSoft, opacity: prog(frame, 300, 14)}}>分包=部分·转包=全部</span>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, flex: 1}}>
              <div style={{border: `2px solid ${C.gold}`, backgroundColor: C.goldPale, padding: '8px 14px', display: 'flex', flexDirection: 'column', gap: 5}}>
                <span style={{fontSize: 18, fontWeight: 950, color: C.gold}}>分包 合法要件</span>
                <span style={{fontSize: 16, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>经发包人<Soft color={C.gold}>同意</Soft>·主体结构<Soft color={C.gold}>自行完成</Soft>·分包单位有资质·<Soft color={C.brick}>禁止再分包</Soft></span>
              </div>
              <div style={{border: `2px solid ${C.brick}`, backgroundColor: C.brickPale, padding: '8px 14px', display: 'flex', flexDirection: 'column', gap: 5}}>
                <span style={{fontSize: 18, fontWeight: 950, color: C.brick, display: 'flex', alignItems: 'center', gap: 8}}><Ban size={18} color={C.brick} strokeWidth={2.4} />转包</span>
                <span style={{fontSize: 16, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>承包人把工作<Soft color={C.brick}>全部</Soft>交第三人 → 转包合同<Soft color={C.brick}>一律无效</Soft></span>
              </div>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const SiteVoidScene = () => {
  /* data-final-knowledge="site-void-causes" */
  const frame = useCurrentFrame();
  return (
    <Shell code="04" kicker="建设工程 · 无效事由" title="工地无效红线图">
      <div
        data-layout="void-cause-notice-board"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="missing-planning-permit-voids-unless-cured-before-suit-and-self-held-excuses-fail,split-award-and-uncured-qualification-void-with-cure-by-completion,unauthorized-unqualified-structural-or-reauctioned-subcontracts-fail,assignment-contracts-are-always-void"
        data-focal-rule="void-stamps-pin-five-award-faults-and-five-subcontract-faults-while-assignment-burns-wholly"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="site-void-causes" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 752}}>
          <Panel tone={C.brick} watermark={<Ban size={140} color={C.brick} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '11px 16px'}}>
            <PanelTab tone={C.brick} icon={<Ban size={24} color={C.cream} strokeWidth={2.2} />}>发包无效 · 五宗</PanelTab>
            {[
              {t: '① 未取得规划许可证等审批手续', s: '起诉前取得 → 除外；能办不办主张无效 → 不予支持', op: 80, icon: 'Stamp'},
              {t: '② 支解发包', s: '应一个承包人完成的工程硬拆给数人', op: 150},
              {t: '③ 无资质·超越资质', s: '竣工前取得相应资质 → 合同有效', op: 220},
              {t: '④ 无资质实际施工人挂靠有资质企业', s: '借用名义订立 → 无效', op: 290},
              {t: '⑤ 必须招标而未招标·中标无效', s: '程序红线 → 无效', op: 360, icon: 'Gavel'},
            ].map((row) => (
              <div key={row.t} style={{border: `2px solid ${C.edge}`, borderLeft: `6px solid ${C.brick}`, backgroundColor: C.creamDim, padding: '7px 12px', display: 'flex', flexDirection: 'column', gap: 3, opacity: prog(frame, row.op, 14)}}>
                <span style={{fontSize: 17, fontWeight: 950, color: C.brick}}>{row.icon === 'Stamp' ? <Stamp size={15} color={C.brick} strokeWidth={2.4} style={{verticalAlign: '-2px', marginRight: 6}} /> : row.icon === 'Gavel' ? <Gavel size={15} color={C.brick} strokeWidth={2.4} style={{verticalAlign: '-2px', marginRight: 6}} /> : null}{row.t}</span>
                <span style={{fontSize: 15, fontWeight: 880, color: C.inkSoft}}>{row.s}</span>
              </div>
            ))}
          </Panel>
        </Enter>
        <Enter delay={70} from="right" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 752}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: 22, height: '100%'}}>
            <Panel tone={C.brick} watermark={<Stamp size={130} color={C.brick} strokeWidth={1.6} />} style={{flex: 1, height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 16px'}}>
              <PanelTab tone={C.brick} icon={<Stamp size={24} color={C.cream} strokeWidth={2.2} />}>分包无效 · 五宗</PanelTab>
              <span style={{fontSize: 17, fontWeight: 880, color: C.ink, lineHeight: 1.6, opacity: prog(frame, 100, 14)}}>①未经发包人<Soft color={C.brick}>同意</Soft>擅自分包 ②全部工程支解后以分包名义<Soft color={C.brick}>转包</Soft> ③<Soft color={C.brick}>主体结构</Soft>必须自行完成 ④分包给<Soft color={C.brick}>无资质</Soft>单位（竣工前取得→有效） ⑤分包单位<Soft color={C.brick}>再分包</Soft></span>
            </Panel>
            <Panel tone={C.brick} watermark={<Gavel size={120} color={C.brick} strokeWidth={1.6} />} style={{flex: 1, height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 16px'}}>
              <PanelTab tone={C.brick} icon={<Gavel size={24} color={C.cream} strokeWidth={2.2} />}>转包 · 效力判决</PanelTab>
              <div style={{marginTop: 'auto', display: 'flex', justifyContent: 'center'}}><Seal delay={260} tone={C.brick} size={22}>转包合同 一律无效</Seal></div>
              <div style={{marginTop: 'auto', fontSize: 17, fontWeight: 900, color: C.inkSoft, textAlign: 'center'}}>质量合格仍可折价补偿 → 见下一景</div>
            </Panel>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const SitePriceScene = () => {
  /* data-final-knowledge="site-price-bidding" data-final-knowledge="site-schedule-retention" */
  const frame = useCurrentFrame();
  return (
    <Shell code="05" kicker="折价补偿 · 备案 · 工期质保" title="无效之后的算账台">
      <div
        data-layout="settlement-desk-with-schedule-ruler"
        data-visual-anchor="timeline-gate"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="qualified-acceptance-earns-reference-based-compensation-on-the-performed-contract-or-the-last-signed,failed-repair-reports-deny-compensation-while-repair-costs-stay-own-burden-when-cured,the-filed-bid-contract-governs-settlement-and-price-cutting-sidel-deals-are-void,schedule-extension-needs-visa-or-reasoned-claim-and-retention-runs-from-acceptance-or-report-plus-ninety-days"
        data-focal-rule="compensation-chips-rail-by-acceptance-verdict-while-the-ruler-marks-ninety-days-and-two-years"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="site-price-bidding" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 752}}>
          <Panel tone={C.gold} watermark={<Coins size={140} color={C.gold} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '11px 16px'}}>
            <PanelTab tone={C.gold} icon={<Coins size={24} color={C.cream} strokeWidth={2.2} />}>合同无效 · 工程款怎么算</PanelTab>
            <div style={{border: `2px solid ${C.moss}`, backgroundColor: C.mossPale, padding: '8px 14px', display: 'flex', flexDirection: 'column', gap: 4, opacity: prog(frame, 80, 14)}}>
              <span style={{fontSize: 18, fontWeight: 950, color: C.moss}}>竣工验收合格</span>
              <span style={{fontSize: 16, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>→ 参照<Soft color={C.moss}>实际履行</Soft>的合同<Soft color={C.moss}>折价补偿</Soft>；数份合同均无效·难确定实际履行 → 参照<Soft color={C.moss}>最后签订</Soft>的合同</span>
            </div>
            <div style={{border: `2px solid ${C.brick}`, backgroundColor: C.brickPale, padding: '8px 14px', display: 'flex', flexDirection: 'column', gap: 4, opacity: prog(frame, 160, 14)}}>
              <span style={{fontSize: 18, fontWeight: 950, color: C.brick}}>竣工验收不合格</span>
              <span style={{fontSize: 16, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>修复后合格 → 可折价补偿·但修复费<Soft color={C.brick}>自理</Soft>；修复后仍不合格 → <Soft color={C.brick}>无权</Soft>请求折价补偿（可请求<Soft color={C.brick}>损害赔偿</Soft>）</span>
            </div>
            <div style={{border: `2px solid ${C.indigoLike}`, backgroundColor: C.billowLike, padding: '8px 14px', display: 'flex', flexDirection: 'column', gap: 4, opacity: prog(frame, 240, 14)}}>
              <span style={{fontSize: 18, fontWeight: 950, color: C.indigoLike, display: 'flex', alignItems: 'center', gap: 8}}><Gavel size={18} color={C.indigoLike} strokeWidth={2.4} />招投标工程</span>
              <span style={{fontSize: 16, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>另行合同与<Soft color={C.indigoLike}>备案中标合同</Soft>实质内容不一致 → 以<Soft color={C.indigoLike}>备案中标合同</Soft>结算（最高效力）；变相降低工程价款的配套协议<Soft color={C.brick}>无效</Soft></span>
            </div>
            <div style={{marginTop: 'auto', display: 'flex', justifyContent: 'center'}}><Seal delay={320} tone={C.gold} size={19}>验收合格就有折价补偿·备案中标最高</Seal></div>
          </Panel>
        </Enter>
        <Enter delay={70} from="right" marker="site-schedule-retention" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 752}}>
          <Panel tone={C.copper} watermark={<Hourglass size={140} color={C.copper} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '11px 16px'}}>
            <PanelTab tone={C.copper} icon={<Hourglass size={24} color={C.cream} strokeWidth={2.2} />}>工期顺延 与 质量保证金</PanelTab>
            <div style={{border: `2px solid ${C.edge}`, backgroundColor: C.creamDim, padding: '8px 12px', display: 'flex', flexDirection: 'column', gap: 4, opacity: prog(frame, 90, 14)}}>
              <span style={{fontSize: 18, fontWeight: 950, color: C.copper}}>工期顺延 · 四条认定</span>
              <span style={{fontSize: 15, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>①经发包人/监理人<Soft color={C.copper}>签证确认</Soft> ②申请且事由符合约定 → <Soft color={C.moss}>视为顺延</Soft> ③未按期提但<Soft color={C.moss}>合理抗辩</Soft> → 视为顺延 ④质量争议鉴定合格 → <Soft color={C.moss}>鉴定期间顺延</Soft></span>
            </div>
            <div style={{border: `2px dashed ${C.edge}`, backgroundColor: C.creamDim, position: 'relative', height: 120, overflow: 'hidden', opacity: prog(frame, 200, 14)}}>
              <div style={{position: 'absolute', left: 20, right: 20, top: 76, height: 4, backgroundColor: C.edge}} />
              <div style={{position: 'absolute', left: 20, top: 68, width: 4, height: 20, backgroundColor: C.copper}} />
              <div style={{position: 'absolute', left: 300, top: 68, width: 4, height: 20, backgroundColor: C.gold}} />
              <span style={{position: 'absolute', left: 16, top: 92, fontSize: 13, fontWeight: 900, color: C.copper}}>起点：约定 / 竣工验收日 / 提交报告90日后</span>
              <span style={{position: 'absolute', left: 330, top: 40, fontSize: 13, fontWeight: 900, color: C.gold}}>长度：约定 / 2年</span>
              <Mover delay={240} span={50} fromX={20} toX={170} style={{position: 'absolute', top: 28, left: 0}}>
                <Chip tone={C.copper} toneBg={C.copperPale}><Coins size={15} color={C.copper} strokeWidth={2.4} /><span style={{fontSize: 14, fontWeight: 950, color: C.copper}}>质量保证金</span></Chip>
              </Mover>
            </div>
            <IconChip icon={<Key size={22} color={C.cream} strokeWidth={2.2} />} tone={C.indigoLike} title="甲大学案：">无约定 → 竣工验收起<Soft color={C.indigoLike}>2年</Soft>；怠于验收 → 提交报告<Soft color={C.copper}>90日</Soft>起算；约定3年 → 从其<Soft color={C.gold}>约定</Soft></IconChip>
            <div style={{marginTop: 'auto', fontSize: 17, fontWeight: 900, color: C.inkSoft}}>保证金返还<Under color={C.copper} delay={300}>不影响</Under>承包人的工程<Soft color={C.gold}>保修义务</Soft>（义务独立）</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const SitePriorityScene = () => {
  /* data-final-knowledge="site-priority-rules" data-final-knowledge="site-litigation-rules" */
  const frame = useCurrentFrame();
  return (
    <Shell code="06" kicker="优先权 · 诉讼格局" title="优先受偿的金字塔">
      <div
        data-layout="priority-pyramid-with-litigation-desks"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="contractor-holds-eighteen-month-priority-from-due-payment-over-actual-expenses-only,homebuyer-refund-beats-priority-which-beats-mortgage-while-interest-and-penalty-rank-ordinary,quality-suits-ignore-privity-with-joint-liability-and-fee-suits-use-subrogation-capped-at-unpaid-sums,waving-priority-that-hurts-workers-is-void-and-counterclaims-merge"
        data-focal-rule="claim-chips-stack-the-pyramid-homebuyer-over-priority-over-mortgage-over-ordinary"
        data-focal-channels="connector,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="site-priority-rules" style={{position: 'absolute', left: 0, top: 0, width: 1030, height: 752}}>
          <Panel tone={C.gold} watermark={<Scale size={140} color={C.gold} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '11px 16px'}}>
            <PanelTab tone={C.gold} icon={<Scale size={24} color={C.cream} strokeWidth={2.2} />}>建设工程优先权 · 规则与顺位</PanelTab>
            <div style={{display: 'flex', flexDirection: 'column', gap: 8, opacity: prog(frame, 70, 14)}}>
              <span style={{fontSize: 17, fontWeight: 900, color: C.ink}}><Key size={16} color={C.gold} strokeWidth={2.4} style={{verticalAlign: '-2px'}} /> 主体 = <Soft color={C.gold}>承包人</Soft>（装修工程承包人扩展·发包人非所有权人除外）；期限 <Seal delay={140} tone={C.gold} size={16}>18个月</Seal> 自<Soft color={C.gold}>应当给付</Soft>价款之日起</span>
              <span style={{fontSize: 17, fontWeight: 900, color: C.ink}}>范围 = <Soft color={C.gold}>实际支出费用</Soft>（报酬·材料款）；<Soft color={C.brick}>利息·违约金·赔偿金不优先</Soft></span>
              <span style={{fontSize: 17, fontWeight: 900, color: C.ink}}>约定放弃/限制·损害<Soft color={C.brick}>建筑工人利益</Soft> → <Soft color={C.brick}>无效</Soft></span>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 7, flex: 1, justifyContent: 'center'}}>
              {[
                {w: '34%', tone: C.brick, label: '① 商品房消费者价款返还（烂尾无交付可能）', op: 200},
                {w: '52%', tone: C.gold, label: '② 优先权·限实际支出（乙800万）', op: 250},
                {w: '70%', tone: C.indigoLike, label: '③ 抵押权（建行3000万）', op: 300},
                {w: '92%', tone: C.inkSoft, label: '④ 普通债权按比例（乙200万+丙500万）', coins: true, op: 350},
              ].map((row) => (
                <div key={row.label} style={{width: row.w, border: `2px solid ${row.tone}`, backgroundColor: `${row.tone}1a`, padding: '7px 12px', opacity: prog(frame, row.op, 14)}}>
                  <span style={{fontSize: 15, fontWeight: 950, color: row.tone}}>{row.coins ? <Coins size={15} color={row.tone} strokeWidth={2.4} style={{verticalAlign: '-2px', marginRight: 6}} /> : null}{row.label}</span>
                </div>
              ))}
            </div>
            <div style={{marginTop: 'auto', display: 'flex', justifyContent: 'center'}}><Seal delay={400} tone={C.gold} size={19}>消费者 &gt; 优先权（实际支出）&gt; 抵押权</Seal></div>
          </Panel>
        </Enter>
        <Enter delay={70} from="right" marker="site-litigation-rules" style={{position: 'absolute', left: 1060, top: 0, width: 716, height: 752}}>
          <Panel tone={C.indigoLike} watermark={<Gavel size={130} color={C.indigoLike} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 9, padding: '11px 16px'}}>
            <PanelTab tone={C.indigoLike} icon={<Gavel size={24} color={C.cream} strokeWidth={2.2} />}>两类诉讼 · 格局</PanelTab>
            <div style={{border: `2px solid ${C.brick}`, backgroundColor: C.brickPale, padding: '8px 12px', display: 'flex', flexDirection: 'column', gap: 4, opacity: prog(frame, 100, 14)}}>
              <span style={{fontSize: 18, fontWeight: 950, color: C.brick}}>质量诉讼 · 不考虑相对性</span>
              <span style={{fontSize: 15, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>承包人原因 → 告承包人；分包人原因 → 承包人·分包人<Soft color={C.brick}>共同被告·连带</Soft>（承包人赔后向分包人<Soft color={C.indigoLike}>追偿</Soft>）；挂靠 → 出借方借用方<Soft color={C.brick}>连带赔偿</Soft></span>
            </div>
            <div style={{border: `2px solid ${C.gold}`, backgroundColor: C.goldPale, padding: '8px 12px', display: 'flex', flexDirection: 'column', gap: 4, opacity: prog(frame, 220, 14)}}>
              <span style={{fontSize: 18, fontWeight: 950, color: C.gold}}>工程款诉讼 · 代位权</span>
              <span style={{fontSize: 15, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>丙告乙·乙告甲 = 原债之诉；<Soft color={C.gold}>丙告甲 = 代位权之诉</Soft> → 承包人列为<Soft color={C.indigoLike}>第三人</Soft>·发包人在<Soft color={C.gold}>欠付工程款范围内</Soft>担责（就低不就高）</span>
            </div>
            <div style={{marginTop: 'auto', display: 'flex', justifyContent: 'center'}}><Seal delay={330} tone={C.indigoLike} size={18}>质量反诉 · 可以合并审理</Seal></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
