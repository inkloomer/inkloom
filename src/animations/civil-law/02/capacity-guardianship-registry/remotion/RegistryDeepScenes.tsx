import {Ban, Coins, Gavel, Hand, Heart, Landmark, ListOrdered, ScrollText, Users, Vote} from 'lucide-react';
import {interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';
import {C, Chip, Enter, Plate, Seal, Shell, Soft, Under, prog} from './RegistryScenes';

export const GuardianshipWillScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="guardian-bench" data-final-knowledge="natural-guardian-rule" data-final-knowledge="testamentary-double-gate" data-final-knowledge="pact-guardian-rules"
     data-stateful-source="pact-agreement-ticket" data-stateful-terminal="pact-agreement-ticket" */
  const ticketTravel = prog(frame, 300, 40);
  const ticketX = interpolate(ticketTravel, [0, 1], [1430, 700], CLAMP);
  const ticketY = interpolate(ticketTravel, [0, 1], [110, 458], CLAMP);
  return (
    <Shell code="03" kicker="监护 · 人伦与意愿" title="监护的确立（上）：当然 · 遗嘱 · 协商">
      <div
        data-layout="guardian-bench-with-will-forks"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,stamp,soft-highlight,thin-underline"
        data-visual-grammar="guardians-owe-protection-restraint-and-representation,natural-parents-are-guardians-of-right-not-merit,testamentary-guardianship-needs-both-parent-and-guardian-status,intentional-guardianship-pacts-take-effect-on-losing-capacity"
        data-focal-rule="who-needs-a-guardian-and-which-will-based-route-appoints-one"
        data-focal-channels="connector,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="guardian-bench" style={{position: 'absolute', left: 40, top: 0, width: 1090, height: 120}}>
          <div style={{height: '100%', backgroundColor: C.rice, border: `3px solid ${C.verdigris}`, display: 'flex', alignItems: 'center', gap: 14, padding: '0 20px'}}>
            <Hand size={32} color={C.verdigris} strokeWidth={2.4} />
            <div style={{display: 'flex', flexDirection: 'column', gap: 7}}>
              <div style={{fontSize: 22, fontWeight: 950, color: C.ink}}>
                需要监护＝<Soft color={C.cinnabar}>限制 / 无</Soft>行为能力人 · 监护人义务＝<Under color={C.verdigris} delay={40}>保护 · 约束</Under> ＋ 享有代理权
              </div>
              <div style={{fontSize: 20.5, fontWeight: 900, color: C.inkSoft}}>确立前提＝需要监护的人「没有监护人」（而非监护人不履职）</div>
            </div>
          </div>
        </Enter>
        <Enter delay={20} from="down" style={{position: 'absolute', left: 1146, top: 0, width: 590, height: 120}}>
          <div style={{height: '100%', backgroundColor: C.riceDim, border: `3px solid ${C.amber}`, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 7, padding: '0 18px'}}>
            <div style={{fontSize: 20.5, fontWeight: 950, color: C.ink}}>
              资格：近亲属 · 其他个人 · 有关组织（<Soft color={C.amber}>须经同意</Soft>）
            </div>
            <div style={{fontSize: 20, fontWeight: 900, color: C.ink, lineHeight: 1.45}}>
              有资格无<Under color={C.cinnabar} delay={60}>监护能力</Under>＝不得担任 · <Seal delay={110} size={17} tone={C.indigo}>乙判刑仍为监护人·可撤销</Seal>
            </div>
          </div>
        </Enter>
        <Enter delay={40} from="left" marker="natural-guardian-rule" style={{position: 'absolute', left: 40, top: 136, width: 832, height: 310}}>
          <div style={{height: '100%', backgroundColor: C.rice, border: `3px solid ${C.verdigris}`, display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 18px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <Heart size={28} color={C.verdigris} strokeWidth={2.4} />
              <Plate tone={C.verdigris}>当然监护 `人伦`</Plate>
            </div>
            <div style={{fontSize: 21, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
              <Under color={C.verdigris} delay={70}>未成年人的父母</Under>＝当然监护人——理所应当成立，无需任何程序
            </div>
            <div style={{fontSize: 20.5, fontWeight: 900, color: C.ink, lineHeight: 1.55, display: 'flex', flexDirection: 'column', gap: 6}}>
              <span>· 父母离婚：无论是否共同生活，均为当然监护人</span>
              <span>· 生父母与继父母离婚：继父母<Soft color={C.verdigris}>愿意担任</Soft> → 仍为监护人</span>
              <span>· 成年人：<Soft color={C.cinnabar}>没有</Soft>当然监护人</span>
            </div>
            <div style={{marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 10, fontSize: 20, fontWeight: 900, color: C.ink}}>
              <span>甲父案：丙已有当然监护人（其母乙）→</span>
              <Seal delay={130} size={17}>甲父主张无据 ✗</Seal>
            </div>
          </div>
        </Enter>
        <Enter delay={64} from="right" marker="testamentary-double-gate" style={{position: 'absolute', left: 904, top: 136, width: 832, height: 310}}>
          <div style={{height: '100%', backgroundColor: C.rice, border: `3px solid ${C.indigo}`, display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 18px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <ScrollText size={28} color={C.indigo} strokeWidth={2.4} />
              <Plate tone={C.indigo}>遗嘱监护 `意愿`</Plate>
            </div>
            <div style={{fontSize: 21, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
              父母担任监护人 → 可通过<Under color={C.indigo} delay={80}>遗嘱</Under>指定监护人
            </div>
            <div style={{fontSize: 20.5, fontWeight: 900, color: C.ink, lineHeight: 1.55, backgroundColor: C.indigoPale, border: `2px solid ${C.indigo}`, padding: '9px 13px'}}>
              双条件门（<Soft color={C.cinnabar}>缺一不可</Soft>）：A 身份＝被监护人的<Soft color={C.indigo}>父母</Soft> × B 具备<Soft color={C.indigo}>监护人</Soft>资格
            </div>
            <div style={{fontSize: 20, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
              被指定人不愿担任 → 适用<Soft color={C.amber}>其他</Soft>监护人设立规则
            </div>
            <div style={{marginTop: 'auto', display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center', fontSize: 20, fontWeight: 900, color: C.ink}}>
              <Chip tone={C.cinnabar} toneBg={C.cinnabarPale} ink={C.cinnabar}>出国父母 → 非监护人·无权</Chip>
              <Chip tone={C.cinnabar} toneBg={C.cinnabarPale} ink={C.cinnabar}>舅舅 → 非父母·无权</Chip>
            </div>
          </div>
        </Enter>
        <Enter delay={110} from="up" marker="pact-guardian-rules" style={{position: 'absolute', left: 40, top: 462, width: 1696, height: 260}}>
          <div style={{height: '100%', backgroundColor: C.rice, border: `3px solid ${C.amber}`, display: 'flex', gap: 0, padding: '12px 18px'}}>
            <span style={{writingMode: 'vertical-rl', fontSize: 22, fontWeight: 950, color: C.amber, letterSpacing: 4, flexShrink: 0}}>协商监护</span>
            <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 9, paddingLeft: 14}}>
              <div style={{fontSize: 21.5, fontWeight: 950, color: C.ink}}>
                「为自己」＝<Soft color={C.amber}>意定监护</Soft>：完全行为能力成年人事先书面协商（近亲属 · 其他愿意个人 · 组织）
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, fontSize: 20.5, fontWeight: 900, color: C.ink}}>
                <span>解除：<Under color={C.verdigris} delay={150}>丧失能力前</Under>双方均可解除 · 丧失后监护人<Under color={C.cinnabar} delay={170}>无正当理由不得解除</Under></span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, fontSize: 20.5, fontWeight: 900, color: C.ink}}>
                <Chip tone={C.cinnabar} toneBg={C.cinnabarPale} ink={C.cinnabar}>婚外情人协议 → 违背公序良俗 · 无效 ✗</Chip>
                <span style={{color: C.inkSoft}}>保姆丁案：非近亲属亦可担任 ✓</span>
              </div>
              <div style={{fontSize: 21.5, fontWeight: 950, color: C.ink, lineHeight: 1.5}}>
                「为子女」：父母作为当然监护人协商 —— 生效前提＝委托方<Under color={C.cinnabar} delay={200}>丧失完全行为能力</Under>（仅丧失人身自由→未生效）
              </div>
            </div>
            <span data-stateful-terminal="pact-agreement-ticket" style={{alignSelf: 'flex-end', display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${C.amber}`, backgroundColor: C.riceDim, padding: '5px 10px', fontSize: 19, fontWeight: 950, color: C.ink, opacity: prog(frame, 336, 14), flexShrink: 0}}>
              📜 书面协议 · 效力已核 ✓
            </span>
          </div>
        </Enter>
        <div data-stateful-source="pact-agreement-ticket" style={{position: 'absolute', left: ticketX, top: ticketY, opacity: prog(frame, 270, 14) * (1 - prog(frame, 352, 14)), visibility: frame >= 370 ? 'hidden' : 'visible'}}>
          <Chip tone={C.amber} toneBg={C.rice}>协议票 · 甲与保姆丁订立监护协议</Chip>
        </div>
      </div>
    </Shell>
  );
};

export const GuardianshipOrderScene = () => {
  /* data-final-knowledge="minor-ladder" data-final-knowledge="adult-ladder" data-final-knowledge="designation-desk" data-final-knowledge="organ-fallback" */
  return (
    <Shell code="04" kicker="监护 · 亲疏与兜底" title="监护的确立（下）：顺序 · 指定 · 机关">
      <div
        data-layout="dual-order-ladder-with-desk"
        data-visual-anchor="ladder-sequence"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="minor-order-runs-grandparents-then-siblings-then-consenting-others,adult-order-runs-spouse-parents-children-then-kin,designation-needs-a-real-guardianship-dispute,registry-desk-organ-fills-in-when-nobody-qualifies"
        data-focal-rule="statutory-order-first-and-a-real-dispute-opens-the-designation-desk"
        data-focal-channels="spatial,connector,contrast,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="minor-ladder" style={{position: 'absolute', left: 40, top: 0, width: 832, height: 360}}>
          <div style={{height: '100%', backgroundColor: C.rice, border: `3px solid ${C.verdigris}`, display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 18px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <ListOrdered size={28} color={C.verdigris} strokeWidth={2.4} />
              <Plate tone={C.verdigris}>顺序监护 · 未成年人</Plate>
            </div>
            {[
              {rank: '①', text: '祖父母 · 外祖父母'},
              {rank: '②', text: '兄 · 姐（成年）'},
              {rank: '③', text: '其他愿意担任的个人 / 组织——须经居委会 · 村委会 · 民政部门同意'},
            ].map((step, stepIndex) => (
              <div key={step.rank} style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <span style={{width: 38, height: 38, borderRadius: 19, backgroundColor: C.verdigris, color: C.rice, fontSize: 21, fontWeight: 950, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontFamily: 'var(--inkloom-animation-mono)'}}>{stepIndex + 1}</span>
                <span style={{fontSize: 21, fontWeight: 900, color: C.ink, lineHeight: 1.4}}>{step.text}</span>
              </div>
            ))}
            <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 900, color: C.inkSoft}}>父母在 → 当然监护，不进入顺序</div>
          </div>
        </Enter>
        <Enter delay={28} from="right" marker="adult-ladder" style={{position: 'absolute', left: 904, top: 0, width: 832, height: 360}}>
          <div style={{height: '100%', backgroundColor: C.rice, border: `3px solid ${C.indigo}`, display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 18px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <Users size={28} color={C.indigo} strokeWidth={2.4} />
              <Plate tone={C.indigo}>顺序监护 · 成年人</Plate>
            </div>
            {[
              {rank: '①', text: '配偶'},
              {rank: '②', text: '父母 · 子女'},
              {rank: '③', text: '其他近亲属'},
              {rank: '④', text: '其他愿意担任的个人 / 组织——须经居委会 · 村委会 · 民政部门同意'},
            ].map((step, stepIndex) => (
              <div key={step.rank} style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <span style={{width: 38, height: 38, borderRadius: 19, backgroundColor: C.indigo, color: C.rice, fontSize: 21, fontWeight: 950, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontFamily: 'var(--inkloom-animation-mono)'}}>{stepIndex + 1}</span>
                <span style={{fontSize: 21, fontWeight: 900, color: C.ink, lineHeight: 1.4}}>{step.text}</span>
              </div>
            ))}
            <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 900, color: C.inkSoft}}>顺序在先者担任 · 成年人亦无当然监护人</div>
          </div>
        </Enter>
        <Enter delay={100} from="up" marker="designation-desk" style={{position: 'absolute', left: 40, top: 376, width: 1090, height: 276}}>
          <div style={{height: '100%', backgroundColor: C.rice, border: `3px solid ${C.amber}`, display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 18px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <Vote size={28} color={C.amber} strokeWidth={2.4} />
              <Plate tone={C.amber}>指定监护 · 争议</Plate>
              <span style={{fontSize: 20, fontWeight: 900, color: C.inkSoft}}>前提＝对谁当监护人<Under color={C.cinnabar} delay={120}>存在争议</Under>（无争议→无指定）</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 10, fontSize: 20.5, fontWeight: 900, color: C.ink}}>
              <Chip tone={C.cinnabar} toneBg={C.cinnabarPale} ink={C.cinnabar}>离婚争抚养 → 抚养权 ≠ 监护权</Chip>
              <Seal delay={180} size={17}>不可申请指定 ✗</Seal>
            </div>
            <div style={{display: 'flex', gap: 12}}>
              <div style={{flex: 1, backgroundColor: C.riceDim, border: `2px solid ${C.amber}`, padding: '9px 13px', fontSize: 20.5, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
                <span style={{color: C.amber}}>一步走</span>：直接请求人民<Soft color={C.amber}>法院</Soft>指定监护人
              </div>
              <div style={{flex: 1.3, backgroundColor: C.riceDim, border: `2px solid ${C.amber}`, padding: '9px 13px', fontSize: 20.5, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
                <span style={{color: C.amber}}>两步走</span>：先由居委会 · 村委会 · 民政部门指定 → 不服：<Under delay={220} color={C.cinnabar}>30 日内</Under>申请法院重新指定 · 30 日后＝按变更监护关系处理
              </div>
            </div>
          </div>
        </Enter>
        <Enter delay={130} from="up" marker="organ-fallback" style={{position: 'absolute', left: 1146, top: 376, width: 590, height: 276}}>
          <div style={{height: '100%', backgroundColor: C.riceDim, border: `3px dashed ${C.indigo}`, display: 'flex', flexDirection: 'column', gap: 10, padding: '13px 18px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <Landmark size={28} color={C.indigo} strokeWidth={2.4} />
              <Plate tone={C.indigo}>机关监护 · 兜底</Plate>
            </div>
            <div style={{fontSize: 20.5, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
              适用条件：需要监护的人<Soft color={C.cinnabar}>没有</Soft>依法具有监护资格的人
            </div>
            <div style={{fontSize: 21, fontWeight: 900, color: C.ink, lineHeight: 1.6}}>
              机关监护人：<Under color={C.indigo} delay={160}>民政部门</Under> · 被监护人住所地的居委会 · 村委会
            </div>
          </div>
        </Enter>
        <Enter delay={170} from="up" style={{position: 'absolute', left: 40, top: 668, width: 1696, height: 100}}>
          <div style={{height: '100%', backgroundColor: C.pineMid, border: `2px solid ${C.amber}`, display: 'flex', alignItems: 'center', gap: 18, padding: '0 26px'}}>
            <span style={{padding: '4px 13px', backgroundColor: C.amber, color: C.pine, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>确立口诀</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.rice}}>
              人伦<Soft color={C.amberPale}>当然</Soft> → 意愿<Soft color={C.amberPale}>遗嘱·协商</Soft> → 亲疏<Soft color={C.amberPale}>顺序</Soft> → 争议<Soft color={C.amberPale}>指定</Soft> → 兜底<Soft color={C.amberPale}>机关</Soft>
            </span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const GuardianshipDutyScene = () => {
  /* data-final-knowledge="duty-pillars" data-final-knowledge="removal-grounds" data-final-knowledge="removal-claimants" data-final-knowledge="restoration-gate" */
  return (
    <Shell code="05" kicker="职责 · 撤销 · 恢复" title="监护职责与资格的撤销、恢复">
      <div
        data-layout="duty-pillars-with-verdict-wall"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,stamp,external-negation,thin-underline"
        data-visual-grammar="guardianship-duties-core-is-respecting-the-wards-autonomy,diligent-care-and-loyalty-guard-the-wards-property,removal-needs-fault-grounds-and-a-court-ruling,support-payments-survive-and-deliberate-crime-bars-restoration"
        data-focal-rule="duty-first-then-court-removal-on-fault-and-a-narrow-door-of-restoration"
        data-focal-channels="icon,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="duty-pillars" style={{position: 'absolute', left: 40, top: 0, width: 832, height: 300}}>
          <div style={{height: '100%', backgroundColor: C.rice, border: `3px solid ${C.verdigris}`, display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 18px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <Heart size={28} color={C.verdigris} strokeWidth={2.4} />
              <Plate tone={C.verdigris}>监护职责</Plate>
              <span style={{fontSize: 20, fontWeight: 900, color: C.inkSoft}}>1监 2护 3代理</span>
            </div>
            <div style={{fontSize: 21.5, fontWeight: 950, color: C.ink}}>
              首要核心＝<Under color={C.verdigris} delay={60}>尊重</Under>被监护人的<Soft color={C.verdigris}>自治权</Soft>
            </div>
            <div style={{fontSize: 20.5, fontWeight: 900, color: C.ink, lineHeight: 1.55, backgroundColor: C.riceDim, border: `2px solid ${C.amber}`, padding: '9px 13px'}}>
              <span style={{color: C.amber}}>勤勉义务</span>：谨慎管理·注意义务 → 致被监护人财产损失应<Seal delay={120} size={17}>赔偿损失</Seal>
            </div>
            <div style={{marginTop: 'auto', fontSize: 20.5, fontWeight: 900, color: C.ink, lineHeight: 1.55, backgroundColor: C.cinnabarPale, border: `2px solid ${C.cinnabar}`, padding: '9px 13px'}}>
              <span style={{color: C.cinnabar}}>忠诚义务</span>：除为维护<Soft color={C.verdigris}>被监护人利益</Soft>外，<span style={{color: C.cinnabar}}>不得处分</span>其财产
            </div>
          </div>
        </Enter>
        <Enter delay={28} from="right" marker="removal-grounds" style={{position: 'absolute', left: 904, top: 0, width: 832, height: 300}}>
          <div style={{height: '100%', backgroundColor: C.rice, border: `3px solid ${C.cinnabar}`, display: 'flex', flexDirection: 'column', gap: 8, padding: '13px 18px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <Gavel size={28} color={C.cinnabar} strokeWidth={2.4} />
              <Plate tone={C.cinnabar}>撤销事由</Plate>
              <span style={{fontSize: 20, fontWeight: 900, color: C.inkSoft}}>干不了 ＋ 干不好</span>
            </div>
            <div style={{fontSize: 20.5, fontWeight: 900, color: C.ink, lineHeight: 1.5, display: 'flex', flexDirection: 'column', gap: 6}}>
              <span>① 实施<Soft color={C.cinnabar}>严重损害</Soft>被监护人身心健康的行为</span>
              <span>② 怠于履行 / 无法履行且拒绝<Under color={C.cinnabar} delay={90}>委托</Under>他人 → 被监护人处于<Soft color={C.cinnabar}>危困状态</Soft></span>
              <span>③ 实施<Soft color={C.cinnabar}>严重侵害</Soft>被监护人合法权益的其他行为</span>
            </div>
            <div style={{marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 10, fontSize: 20, fontWeight: 900, color: C.ink}}>
              <span>有权撤销的机关＝</span>
              <Seal delay={140} size={18}>法院（民政部门只能申请）</Seal>
            </div>
          </div>
        </Enter>
        <Enter delay={90} from="left" marker="removal-claimants" style={{position: 'absolute', left: 40, top: 316, width: 832, height: 268}}>
          <div style={{height: '100%', backgroundColor: C.riceDim, border: `3px solid ${C.indigo}`, display: 'flex', flexDirection: 'column', gap: 8, padding: '13px 18px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <Plate tone={C.indigo}>撤销权人</Plate>
              <span style={{fontSize: 20, fontWeight: 900, color: C.inkSoft}}>不告不理 · 申请启动</span>
            </div>
            <div style={{fontSize: 20.5, fontWeight: 900, color: C.ink, lineHeight: 1.55}}>
              ① 其他依法具有<Soft color={C.indigo}>监护资格</Soft>的人员
            </div>
            <div style={{fontSize: 20.5, fontWeight: 900, color: C.ink, lineHeight: 1.55}}>
              ② 有关组织：居委会 · 村委会 / 学校 · 医疗机构 / 妇联 · 残联 · 未保组织 · 老年人组织
            </div>
            <div style={{marginTop: 'auto', fontSize: 20.5, fontWeight: 900, color: C.ink, lineHeight: 1.5, backgroundColor: C.rice, border: `2px solid ${C.indigo}`, padding: '8px 12px'}}>
              ③ <span style={{color: C.indigo}}>民政部门</span>＝<Under color={C.cinnabar} delay={150}>第一责任人</Under>——他人未及时申请 → 民政兜底向法院申请
            </div>
          </div>
        </Enter>
        <Enter delay={120} from="right" marker="restoration-gate" style={{position: 'absolute', left: 904, top: 316, width: 832, height: 268}}>
          <div style={{height: '100%', backgroundColor: C.rice, border: `3px solid ${C.amber}`, display: 'flex', flexDirection: 'column', gap: 8, padding: '13px 18px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <Plate tone={C.amber}>恢复资格 · 窄门</Plate>
              <span style={{fontSize: 20, fontWeight: 900, color: C.inkSoft}}>身份 + 事由 双重条件</span>
            </div>
            <div style={{fontSize: 20.5, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
              身份：仅<Under color={C.amber} delay={150}>父母 ↔ 子女</Under>（对不含完全行为能力的一方）有恢复可能
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 10, fontSize: 20.5, fontWeight: 900, color: C.ink}}>
              <Ban size={24} color={C.cinnabar} strokeWidth={2.6} />
              <span>对被监护人<Soft color={C.cinnabar}>故意犯罪</Soft> → <span style={{color: C.cinnabar}}>绝对不得恢复</span> ⛔</span>
            </div>
            <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 900, color: C.ink, lineHeight: 1.5, backgroundColor: C.riceDim, border: `2px solid ${C.amber}`, padding: '8px 12px'}}>
              后果：资格消灭 · 按<Soft color={C.verdigris}>最有利于被监护人</Soft>原则指定新监护人 · 抚养费·赡养费·扶养费<Soft color={C.cinnabar}>继续履行</Soft> 💸 · 恢复需尊重限制行为能力被监护人的<Soft color={C.amber}>真实意愿</Soft>
            </div>
          </div>
        </Enter>
        <Enter delay={160} from="up" style={{position: 'absolute', left: 40, top: 600, width: 1696, height: 100}}>
          <div style={{height: '100%', backgroundColor: C.pineMid, border: `2px solid ${C.amber}`, display: 'flex', alignItems: 'center', gap: 18, padding: '0 26px'}}>
            <span style={{padding: '4px 13px', backgroundColor: C.amber, color: C.pine, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>一堂总诀</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.rice}}>
              监＝<Soft color={C.amberPale}>尊重自治</Soft> · 护＝<Soft color={C.amberPale}>勤勉＋忠诚</Soft> · 撤＝<Soft color={C.amberPale}>法院裁</Soft> · 复＝<Soft color={C.amberPale}>父母子女·窄门</Soft>
            </span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};
