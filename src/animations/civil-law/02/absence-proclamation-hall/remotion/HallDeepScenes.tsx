import {Ban, Car, Gavel, Ghost, Heart, Landmark, ScrollText, Timer, UserCheck, Users, UserX} from 'lucide-react';
import {interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';
import {C, Chip, Enter, Plank, Seal, Shell, Soft, Under, prog} from './HallScenes';

export const DeathDeclarationScene = () => {
  /* data-final-knowledge="period-gate" data-final-knowledge="petitioner-ladder" data-final-knowledge="scope-contrast" data-final-knowledge="old-jia-verdicts" */
  return (
    <Shell code="03" kicker="宣告死亡 · 条件" title="宣告死亡：期间之门与申请阶梯">
      <div
        data-layout="dual-period-gate-with-petition-ladder"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="four-years-or-two-years-or-proven-impossible-opens-the-gate,death-petitioners-face-stricter-tiers-than-missing-petitioners,subrogated-heirs-need-a-fallback-condition-to-petition,property-creditors-are-default-barred-unless-protection-fails"
        data-focal-rule="heavier-consequence-demands-stricter-periods-and-stricter-petitioners"
        data-focal-channels="contrast,connector,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="period-gate" style={{position: 'absolute', left: 40, top: 0, width: 1696, height: 150}}>
          <div style={{height: '100%', backgroundColor: C.bone, border: `3px solid ${C.rust}`, display: 'flex', alignItems: 'center', gap: 18, padding: '0 22px'}}>
            <Timer size={34} color={C.rust} strokeWidth={2.4} />
            <div style={{display: 'flex', gap: 14, flex: 1}}>
              <Chip tone={C.rust} toneBg={C.rustPale} ink={C.rust}>原则：下落不明满 4 年</Chip>
              <Chip tone={C.plum} toneBg={C.plumPale} ink={C.plum}>意外事件：满 2 年</Chip>
              <Chip tone={C.moss} toneBg={C.mossPale}>意外＋有关机关证明不可能生存 → 不需要期间经过</Chip>
            </div>
            <span style={{fontSize: 20, fontWeight: 900, color: C.inkSoft, flexShrink: 0}}>起算规则与宣告失踪相同</span>
          </div>
        </Enter>
        <Enter delay={36} from="left" marker="petitioner-ladder" style={{position: 'absolute', left: 40, top: 166, width: 832, height: 320}}>
          <div style={{height: '100%', backgroundColor: C.bone, border: `3px solid ${C.fog}`, display: 'flex', flexDirection: 'column', gap: 8, padding: '13px 18px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <Users size={28} color={C.ink} strokeWidth={2.4} />
              <Plank tone={C.fog}>利害关系人 · 申请阶梯</Plank>
              <span style={{fontSize: 19, fontWeight: 900, color: C.inkSoft}}>后果重 → 条件严</span>
            </div>
            <div style={{fontSize: 20.5, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
              ① 被申请人的<Soft color={C.rust}>配偶 · 父母 · 子女</Soft>
            </div>
            <div style={{fontSize: 20.5, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
              ② 尽主要赡养义务的<Soft color={C.rust}>丧偶儿媳 · 丧偶女婿</Soft>
            </div>
            <div style={{fontSize: 20.5, fontWeight: 900, color: C.ink, lineHeight: 1.55, backgroundColor: C.boneDim, border: `2px solid ${C.fog}`, padding: '8px 12px'}}>
              ③ 其他近亲属 · 代位继承人——须<Under color={C.plum} delay={110}>二选一</Under>：配偶·父母·子女均已死亡或下落不明 ／ 不申请宣告死亡就<Soft color={C.plum}>不能保护</Soft>其合法权益
            </div>
            <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
              财产关系人：原则<Soft color={C.rust}>不是</Soft>利害关系人 · 例外＝不申请就不能保护其权益
            </div>
          </div>
        </Enter>
        <Enter delay={64} from="right" marker="scope-contrast" style={{position: 'absolute', left: 904, top: 166, width: 832, height: 320}}>
          <div style={{height: '100%', backgroundColor: C.bone, border: `3px solid ${C.plum}`, display: 'flex', flexDirection: 'column', gap: 8, padding: '13px 18px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <UserX size={28} color={C.plum} strokeWidth={2.4} />
              <Plank tone={C.plum}>范围对比 · 失踪 vs 死亡</Plank>
            </div>
            {[
              {who: '配偶 · 父母 · 子女', miss: '可以', death: '可以', tone: C.moss},
              {who: '好儿媳 · 好女婿', miss: '可以', death: '可以', tone: C.moss},
              {who: '其他近亲属 · 代位继承人', miss: '可以', death: '须附加条件', tone: C.plum},
              {who: '财产利害关系人', miss: '原则可以', death: '原则不可以（相反）', tone: C.rust},
            ].map((row) => (
              <div key={row.who} style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <span style={{fontSize: 20, fontWeight: 900, color: C.ink, flex: 1.3}}>{row.who}</span>
                <Chip tone={C.fog} toneBg={C.boneDim}>{row.miss}</Chip>
                <Chip tone={row.tone} toneBg={C.boneDim}>{row.death}</Chip>
              </div>
            ))}
            <div style={{marginTop: 'auto', fontSize: 19.5, fontWeight: 900, color: C.inkSoft}}>记忆：财产关系人两制度立场正好相反</div>
          </div>
        </Enter>
        <Enter delay={120} from="up" marker="old-jia-verdicts" style={{position: 'absolute', left: 40, top: 502, width: 1696, height: 148}}>
          <div style={{height: '100%', backgroundColor: C.boneDim, border: `3px solid ${C.moss}`, display: 'flex', gap: 16, padding: '10px 18px'}}>
            <span style={{writingMode: 'vertical-rl', fontSize: 21, fontWeight: 950, color: C.moss, letterSpacing: 3, flexShrink: 0}}>老甲案</span>
            <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', gap: 6, fontSize: 20.5, fontWeight: 900, color: C.ink}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <span>① 大甲（子）申请 →</span>
                <Seal delay={200} size={17} tone={C.moss}>有权 ✓ 法定利害关系人</Seal>
                <span>② 乙（丧偶儿媳尽主要赡养）→</span>
                <Seal delay={230} size={17} tone={C.moss}>有权 ✓</Seal>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <span>③ A（代位继承人）→</span>
                <Seal delay={260} size={17} tone={C.rust}>原则无权 ✗</Seal>
                <span>④ A 面临失学（不申请无法保护）→</span>
                <Seal delay={290} size={17} tone={C.moss}>例外有权 ✓</Seal>
              </div>
            </div>
          </div>
        </Enter>
        <Enter delay={170} from="up" style={{position: 'absolute', left: 40, top: 666, width: 1696, height: 102}}>
          <div style={{height: '100%', backgroundColor: C.ashMid, border: `2px solid ${C.fog}`, display: 'flex', alignItems: 'center', gap: 18, padding: '0 26px'}}>
            <Landmark size={26} color={C.fogPale} strokeWidth={2.4} />
            <span style={{fontSize: 22, fontWeight: 900, color: C.bone, lineHeight: 1.5}}>
              公告期：原则<Soft color={C.rustPale}>1 年</Soft> · 意外＋不可能生存<Soft color={C.rustPale}>3 个月</Soft> ‖ 死亡时间：原则＝<Under color={C.rustPale} delay={210}>判决作出之日</Under> · 意外宣告＝<Soft color={C.rustPale}>意外发生之日</Soft>（渡海案：意外之日视为死亡日）
            </span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};

export const DeathEffectsScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="primary-effects" data-final-knowledge="pre-rescission-rule" data-final-knowledge="dead-side-rule" data-final-knowledge="alive-side-rule"
     data-stateful-source="homecoming-ticket" data-stateful-terminal="homecoming-ticket" */
  const ticketTravel = prog(frame, 240, 40);
  const ticketX = interpolate(ticketTravel, [0, 1], [600, 1130], CLAMP);
  return (
    <Shell code="04" kicker="宣告死亡 · 后果" title="宣告死亡：按死人算与按活人算">
      <div
        data-layout="dead-or-alive-fork-bench"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,stamp,external-negation,thin-underline"
        data-visual-grammar="declaration-terminates-marriage-and-opens-succession,before-rescission-the-verdict-stays-effective,inheritance-and-marriage-count-the-person-dead,other-acts-count-the-person-alive-and-still-protected"
        data-focal-rule="until-rescission-the-verdict-stands-splitting-effects-into-dead-and-alive-sides"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="primary-effects" style={{position: 'absolute', left: 40, top: 0, width: 832, height: 150}}>
          <div style={{height: '100%', backgroundColor: C.bone, border: `3px solid ${C.rust}`, display: 'flex', alignItems: 'center', gap: 14, padding: '0 20px'}}>
            <Heart size={32} color={C.rust} strokeWidth={2.4} />
            <div style={{display: 'flex', flexDirection: 'column', gap: 7}}>
              <span style={{fontSize: 23, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>宣告死亡的首要后果</span>
              <span style={{fontSize: 22, fontWeight: 900, color: C.ink}}>
                与配偶的婚姻关系<Under color={C.rust} delay={50}>即告终止</Under> · 遗产的<Under color={C.rust} delay={80}>继承开始</Under>
              </span>
            </div>
          </div>
        </Enter>
        <Enter delay={30} from="down" marker="pre-rescission-rule" style={{position: 'absolute', left: 904, top: 0, width: 832, height: 150}}>
          <div style={{height: '100%', backgroundColor: C.boneDim, border: `3px solid ${C.plum}`, display: 'flex', alignItems: 'center', gap: 14, padding: '0 20px'}}>
            <ScrollText size={32} color={C.plum} strokeWidth={2.4} />
            <span style={{fontSize: 21, fontWeight: 900, color: C.ink, lineHeight: 1.55}}>
              撤销申请前，死亡宣告判决<Under color={C.plum} delay={70}>依然有效</Under>——且撤销后果<Soft color={C.rust}>不自动发生</Soft>：财产不自动返还 · 婚姻不自行恢复
            </span>
          </div>
        </Enter>
        <Enter delay={90} from="left" marker="dead-side-rule" style={{position: 'absolute', left: 40, top: 156, width: 832, height: 244}}>
          <div style={{height: '100%', backgroundColor: C.rustPale, border: `3px solid ${C.rust}`, display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 18px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <ScrollText size={28} color={C.rust} strokeWidth={2.4} />
              <Plank tone={C.rust}>A 类 · 按死人算</Plank>
            </div>
            <div style={{fontSize: 21.5, fontWeight: 900, color: C.ink, lineHeight: 1.6}}>
              <Soft color={C.rust}>继承开始</Soft>、<Soft color={C.rust}>婚姻终止</Soft>的后果——按<Under color={C.rust} delay={130}>死人</Under>算
            </div>
            <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 900, color: C.ink, lineHeight: 1.55}}>
              归来案：甲归来但未撤销 → ① 甲乙婚姻<Seal delay={160} size={17}>不存在 ✗</Seal> ② 乙丙登记结婚<Seal delay={190} size={17} tone={C.moss}>有效 ✓</Seal>
            </div>
          </div>
        </Enter>
        <Enter delay={120} from="right" marker="alive-side-rule" style={{position: 'absolute', left: 904, top: 156, width: 832, height: 244}}>
          <div style={{height: '100%', backgroundColor: C.mossPale, border: `3px solid ${C.moss}`, display: 'flex', flexDirection: 'column', gap: 9, padding: '13px 18px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <Ghost size={28} color={C.moss} strokeWidth={2.4} />
              <Plank tone={C.moss}>B 类 · 按活人算</Plank>
              <span data-stateful-terminal="homecoming-ticket" style={{display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${C.moss}`, backgroundColor: C.bone, padding: '4px 10px', fontSize: 19, fontWeight: 950, color: C.ink, opacity: prog(frame, 296, 14)}}>
                🏠 归来按活人 ✓
              </span>
            </div>
            <div style={{fontSize: 21.5, fontWeight: 900, color: C.ink, lineHeight: 1.6}}>
              继承、婚姻<Soft color={C.moss}>以外</Soft>的一切后果——按<Under color={C.moss} delay={150}>活人</Under>算
            </div>
            <div style={{marginTop: 'auto', fontSize: 20, fontWeight: 900, color: C.ink, lineHeight: 1.55}}>
              人身 · 财产依然<Soft color={C.moss}>受保护</Soft> · 宣告期间订立的合同 · 遗嘱等民事法律行为效力<Soft color={C.moss}>不受影响</Soft>
            </div>
          </div>
        </Enter>
        <Enter delay={180} from="up" style={{position: 'absolute', left: 40, top: 452, width: 1696, height: 108}}>
          <div style={{height: '100%', backgroundColor: C.bone, border: `3px solid ${C.fog}`, display: 'flex', alignItems: 'center', gap: 16, padding: '0 24px'}}>
            <UserCheck size={30} color={C.moss} strokeWidth={2.4} />
            <span style={{fontSize: 22, fontWeight: 900, color: C.ink, lineHeight: 1.55}}>
              一句总括：被宣告「死亡」的人其实活着 → 判决只引爆了<Soft color={C.rust}>婚姻与继承</Soft>两根引线，其余生活照常进行，撤销须<Under color={C.plum} delay={220}>本人或利害关系人申请</Under>
            </span>
          </div>
        </Enter>
        <Enter delay={230} from="up" style={{position: 'absolute', left: 40, top: 576, width: 1696, height: 90}}>
          <div style={{height: '100%', backgroundColor: C.ashMid, border: `2px solid ${C.fog}`, display: 'flex', alignItems: 'center', gap: 18, padding: '0 26px'}}>
            <span style={{padding: '4px 13px', backgroundColor: C.fog, color: C.ash, fontSize: 21, fontWeight: 900, letterSpacing: 2}>活人口诀</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.bone}}>
              婚姻继承＝<Soft color={C.rustPale}>按死人</Soft> · 其他一切＝<Soft color={C.rustPale}>按活人</Soft> · 撤销之前＝<Soft color={C.rustPale}>判决有效</Soft>
            </span>
          </div>
        </Enter>
        <div data-stateful-source="homecoming-ticket" style={{position: 'absolute', left: ticketX, top: 408, opacity: prog(frame, 210, 14) * (1 - prog(frame, 282, 14)), visibility: frame >= 300 ? 'hidden' : 'visible'}}>
          <Chip tone={C.moss} toneBg={C.bone}>归来票 · 甲活着回来了</Chip>
        </div>
      </div>
    </Shell>
  );
};

export const RescissionVerdictScene = () => {
  /* data-final-knowledge="rescission-gate" data-final-knowledge="restitution-lanes" data-final-knowledge="marriage-restore-rule" data-final-knowledge="malicious-concealment-verdicts" */
  return (
    <Shell code="05" kicker="撤销 · 返还 · 赔偿" title="死亡宣告的撤销：返还阶梯与恶意之罚">
      <div
        data-layout="rescission-wall-with-restitution-lanes"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="rescission-needs-survival-and-an-interested-application,restitution-runs-against-those-who-took-under-succession-law,original-thing-back-or-proper-compensation-when-gone,malicious-concealment-pays-interest-full-damages-and-no-marriage-return"
        data-focal-rule="only-succession-law-takers-return-and-malice-upgrades-everything-owed"
        data-focal-channels="icon,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="rescission-gate" style={{position: 'absolute', left: 40, top: 0, width: 1696, height: 110}}>
          <div style={{height: '100%', backgroundColor: C.bone, border: `3px solid ${C.moss}`, display: 'flex', alignItems: 'center', gap: 16, padding: '0 22px'}}>
            <Gavel size={32} color={C.moss} strokeWidth={2.4} />
            <div style={{display: 'flex', flexDirection: 'column', gap: 6}}>
              <div style={{fontSize: 22, fontWeight: 950, color: C.ink}}>
                撤销条件：实体＝被宣告人<Under color={C.moss} delay={40}>并未死亡</Under> · 程序＝<Soft color={C.moss}>本人或利害关系人</Soft>申请（本人也算利害关系人）
              </div>
              <div data-final-knowledge="marriage-restore-rule" style={{fontSize: 20.5, fontWeight: 900, color: C.ink}}>
                婚姻：原则自撤销之日<Soft color={C.moss}>自行恢复</Soft> · 例外＝配偶<Soft color={C.rust}>再婚</Soft>（纵又离婚也不恢复）或向<Under color={C.plum} delay={90}>婚姻登记机关</Under>书面声明不愿恢复
              </div>
            </div>
          </div>
        </Enter>
        <Enter delay={40} from="left" marker="restitution-lanes" style={{position: 'absolute', left: 40, top: 126, width: 1090, height: 330}}>
          <div style={{height: '100%', backgroundColor: C.bone, border: `3px solid ${C.rust}`, display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <Car size={28} color={C.rust} strokeWidth={2.4} />
              <Plank tone={C.rust}>财产返还 · 三连问</Plank>
            </div>
            <div style={{fontSize: 20.5, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
              ① 谁来还：依<Soft color={C.rust}>继承编</Soft>取得之人（继承人 · 受遗赠人）——直接取得 / 间接取得（每一环节均依继承编）
            </div>
            <div style={{fontSize: 20.5, fontWeight: 900, color: C.ink, lineHeight: 1.5, backgroundColor: C.rustPale, border: `2px solid ${C.rust}`, padding: '7px 12px'}}>
              非依继承编取得（受赠 · 抵债 · 买卖）→ <span style={{color: C.rust}}>不负返还义务</span> · 范围＝<Soft color={C.rust}>宣告死亡时的遗产</Soft>
            </div>
            <div style={{display: 'flex', gap: 10, flex: 1}}>
              <div style={{flex: 1, backgroundColor: C.mossPale, border: `2px solid ${C.moss}`, padding: '7px 12px', fontSize: 20, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
                原物在（实体在 <span style={{color: C.moss}}>或</span> 价值在）→ <span style={{color: C.moss}}>返还原物</span>
              </div>
              <div style={{flex: 1, backgroundColor: C.boneDim, border: `2px solid ${C.plum}`, padding: '7px 12px', fontSize: 20, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
                原物不在（实体·价值均无）→ <span style={{color: C.plum}}>适当补偿</span>
              </div>
            </div>
            <div style={{marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 10, fontSize: 19.5, fontWeight: 900, color: C.ink, flexWrap: 'wrap'}}>
              <Chip tone={C.rust} toneBg={C.rustPale} ink={C.rust}>卖丙 30 万 → 乙返 30 万价金</Chip>
              <Chip tone={C.plum} toneBg={C.boneDim}>赠与丙 → 乙适当补偿</Chip>
              <span style={{color: C.inkSoft}}>丙均不担责</span>
            </div>
          </div>
        </Enter>
        <Enter delay={70} from="right" marker="malicious-concealment-verdicts" style={{position: 'absolute', left: 1146, top: 126, width: 590, height: 330}}>
          <div style={{height: '100%', backgroundColor: C.rustPale, border: `3px dashed ${C.rust}`, display: 'flex', flexDirection: 'column', gap: 9, padding: '12px 16px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <Ban size={28} color={C.rust} strokeWidth={2.6} />
              <Plank tone={C.rust}>恶意陷人于宣告死亡</Plank>
            </div>
            <div style={{fontSize: 20, fontWeight: 900, color: C.ink, lineHeight: 1.5}}>
              明知未死亡却<Soft color={C.rust}>故意隐瞒</Soft>，为继承遗产致使被宣告死亡
            </div>
            <div style={{fontSize: 20, fontWeight: 900, color: C.ink, lineHeight: 1.55}}>
              后果＝<Under color={C.rust} delay={120}>侵权损害赔偿</Under>：返还遗产<Soft color={C.rust}>及孳息</Soft> · 损失<Soft color={C.rust}>全额赔偿</Soft>
            </div>
            <div style={{marginTop: 'auto', backgroundColor: C.bone, border: `2px solid ${C.fog}`, padding: '8px 12px', fontSize: 19.5, fontWeight: 900, color: C.ink, lineHeight: 1.55}}>
              一般返还：最大＝<Soft color={C.moss}>原物</Soft> · 无法返还→适当补偿<br />
              恶意隐瞒：最大＝<Soft color={C.rust}>原物＋孳息</Soft> · 无法返还→<Soft color={C.rust}>赔偿损失</Soft>
            </div>
          </div>
        </Enter>
        <Enter delay={130} from="up" style={{position: 'absolute', left: 40, top: 472, width: 1696, height: 190}}>
          <div style={{height: '100%', backgroundColor: C.boneDim, border: `3px solid ${C.fog}`, display: 'flex', gap: 16, padding: '10px 18px'}}>
            <span style={{writingMode: 'vertical-rl', fontSize: 21, fontWeight: 950, color: C.fog, letterSpacing: 3, flexShrink: 0}}>兄弟案对照</span>
            <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', gap: 6, fontSize: 20.5, fontWeight: 900, color: C.ink}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
                <Chip tone={C.moss} toneBg={C.mossPale}>无恶意</Chip>
                <span>① 100 万存款利息 →</span>
                <Seal delay={220} size={17} tone={C.moss}>不还 ✓ 一般返还不及孳息</Seal>
                <span>② 50 万汽车（已赠丙）→</span>
                <Seal delay={250} size={17} tone={C.plum}>仅适当补偿</Seal>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
                <Chip tone={C.rust} toneBg={C.rustPale} ink={C.rust}>有恶意</Chip>
                <span>① 存款利息 →</span>
                <Seal delay={280} size={17}>须返还 ✗ 原物＋孳息</Seal>
                <span>② 汽车价值 →</span>
                <Seal delay={310} size={17}>全额赔偿 ✗</Seal>
              </div>
            </div>
          </div>
        </Enter>
        <Enter delay={190} from="up" style={{position: 'absolute', left: 40, top: 678, width: 1696, height: 90}}>
          <div style={{height: '100%', backgroundColor: C.ashMid, border: `2px solid ${C.fog}`, display: 'flex', alignItems: 'center', gap: 18, padding: '0 26px'}}>
            <span style={{padding: '4px 13px', backgroundColor: C.fog, color: C.ash, fontSize: 21, fontWeight: 900, letterSpacing: 2}}>程序关系</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.bone}}>
              失踪<Soft color={C.rustPale}>非</Soft>死亡必经程序 · 只告失踪→<Soft color={C.rustPale}>只能失踪</Soft> · 都告→<Soft color={C.rustPale}>宣告死亡</Soft>（不告不理·告啥理啥）
            </span>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};
