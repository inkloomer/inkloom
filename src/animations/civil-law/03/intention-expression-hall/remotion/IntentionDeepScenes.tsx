import {BellOff, Coins, Drama, EyeOff, Gavel, Handshake, KeyRound, Landmark, Laugh, MessageSquare, PackageCheck, PenLine, RefreshCw, Stamp, Users, FileSignature, Scale} from 'lucide-react';
import {interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../shared/remotion-runtime';
import {C, Chip, Enter, IconChip, Panel, PanelTab, Seal, Shell, Soft, Under, prog} from './IntentionScenes';

export const ShamHiddenJestScene = () => {
  /* data-final-knowledge="sham-rule" data-final-knowledge="hidden-rule" data-final-knowledge="jest-rule" data-final-knowledge="jest-recognition-forks" */
  return (
    <Shell code="03" kicker="虚假 · 隐藏 · 戏谑" title="虚假意思表示与隐藏意思表示">
      <div
        data-layout="triple-mask-verdict-wall"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="sham-declarations-by-both-parties-are-void,hidden-declarations-follow-the-law-that-governs-them,jest-binds-nobody-who-knows-or-should-know-the-true-mind,content-place-and-manner-reveal-the-jesting-mind"
        data-focal-rule="sham-is-void-hidden-waits-for-its-own-law-and-jest-spares-the-knowing"
        data-focal-channels="contrast,icon,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="left" marker="sham-rule" style={{position: 'absolute', left: 40, top: 0, width: 832, height: 260}}>
          <Panel tone={C.wine} watermark={<Drama size={150} color={C.wine} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.wine} icon={<Drama size={24} color={C.rattanPale} strokeWidth={2.2} />}>虚假意思表示</PanelTab>
            <IconChip icon={<Drama size={28} color={C.xuan} strokeWidth={2.2} />} tone={C.wine} title="含义：">
              <Soft color={C.wine}>双方当事人</Soft>均无法效意思，却作出意思表示——如订立<Soft color={C.wine}>假合同</Soft>
            </IconChip>
            <IconChip icon={<Gavel size={28} color={C.xuan} strokeWidth={2.2} />} tone={C.wine} title="效力（民法典第 146 条第 1 款）：">
              以虚假的意思表示实施的民事法律行为 <Seal delay={120} size={19}>无效</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={28} from="right" marker="hidden-rule" style={{position: 'absolute', left: 904, top: 0, width: 832, height: 260}}>
          <Panel tone={C.indigo} watermark={<EyeOff size={150} color={C.indigo} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.indigo} icon={<EyeOff size={24} color={C.rattanPale} strokeWidth={2.2} />}>隐藏意思表示</PanelTab>
            <IconChip icon={<EyeOff size={28} color={C.xuan} strokeWidth={2.2} />} tone={C.indigo} title="含义：">
              被<Soft color={C.wine}>虚假意思表示</Soft>所掩盖的另一<Soft color={C.indigo}>真实</Soft>的意思表示
            </IconChip>
            <IconChip icon={<Gavel size={28} color={C.xuan} strokeWidth={2.2} />} tone={C.indigo} title="效力（第 146 条第 2 款）：">
              依照<Under color={C.indigo} delay={100}>有关法律规定</Under>处理
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.xuan} strokeWidth={2.2} />} tone={C.rattan} title="陷阱：">
              虚假表示必无效，但隐藏行为效力<Soft color={C.rattan}>待定</Soft>——看是否违反强行法·公序良俗
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={56} from="left" marker="jest-rule" style={{position: 'absolute', left: 40, top: 276, width: 832, height: 260}}>
          <Panel tone={C.moss} watermark={<Laugh size={150} color={C.moss} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.moss} icon={<Laugh size={24} color={C.rattanPale} strokeWidth={2.2} />}>单方虚假意思表示（戏谑）</PanelTab>
            <IconChip icon={<Laugh size={28} color={C.xuan} strokeWidth={2.2} />} tone={C.moss} title="含义（口是心非）：">
              有意思表示的外观，但内心<Soft color={C.moss}>不具有</Soft>民事效果意思
            </IconChip>
            <IconChip icon={<EyeOff size={28} color={C.xuan} strokeWidth={2.2} />} tone={C.wine} title="相对人知道或应当知道：">
              该表示<Seal delay={130} size={18}>无效</Seal> · 行为人<Soft color={C.wine}>不受约束</Soft>
            </IconChip>
            <IconChip icon={<MessageSquare size={28} color={C.xuan} strokeWidth={2.2} />} tone={C.indigo} title="反之：">
              按照<Soft color={C.indigo}>意思表示</Soft>认定
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={84} from="right" marker="jest-recognition-forks" style={{position: 'absolute', left: 904, top: 276, width: 832, height: 260}}>
          <Panel tone={C.rattan} watermark={<Laugh size={150} color={C.rattan} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.rattan} icon={<Laugh size={24} color={C.rattanPale} strokeWidth={2.2} />}>认定方式 · 三看</PanelTab>
            <IconChip icon={<MessageSquare size={28} color={C.xuan} strokeWidth={2.2} />} tone={C.indigo} title="① 内容：">
              表达内容是否<Soft color={C.indigo}>夸张 · 不合情理</Soft>
            </IconChip>
            <IconChip icon={<Users size={28} color={C.xuan} strokeWidth={2.2} />} tone={C.moss} title="② 场所：">
              <Soft color={C.moss}>公共场所</Soft>还是<Soft color={C.wine}>私密场所</Soft>作出的表达
            </IconChip>
            <IconChip icon={<Stamp size={28} color={C.xuan} strokeWidth={2.2} />} tone={C.wine} title="③ 方式：">
              是否采取了<Soft color={C.wine}>郑重</Soft>的形式
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={130} from="up" style={{position: 'absolute', left: 40, top: 540, width: 832, height: 228}}>
          <Panel tone={C.wine} watermark={<Gavel size={150} color={C.wine} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.wine} icon={<Gavel size={24} color={C.rattanPale} strokeWidth={2.2} />}>案例分析 · 汽车 A 买卖</PanelTab>
            <IconChip icon={<Drama size={26} color={C.xuan} strokeWidth={2.2} />} tone={C.wine} title="汽车 A 买卖合同：">
              甲乙均知汽车不存在 → <Soft color={C.wine}>虚假意思表示</Soft> → <Seal delay={180} size={18}>无效</Seal>
            </IconChip>
            <IconChip icon={<Coins size={26} color={C.xuan} strokeWidth={2.2} />} tone={C.indigo} title="真实意思 · 20 万元：">
              <Soft color={C.indigo}>金钱赠与</Soft>＝隐藏意思表示 → <Seal delay={220} size={17} tone={C.indigo}>合法则有效 · 非法则无效</Seal>
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 19.5, fontWeight: 900, color: C.inkSoft}}>乙已交付 20 万元——表面买卖，实为赠与</div>
          </Panel>
        </Enter>
        <Enter delay={160} from="up" style={{position: 'absolute', left: 904, top: 540, width: 832, height: 228}}>
          <Panel tone={C.moss} watermark={<Laugh size={150} color={C.moss} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.moss} icon={<MessageSquare size={24} color={C.rattanPale} strokeWidth={2.2} />}>试一试 · 著作错别字奖赏</PanelTab>
            <IconChip icon={<Users size={26} color={C.xuan} strokeWidth={2.2} />} tone={C.wine} title="私密 · 随意 · 夸张：">
              好友饭局＋赏格别墅 1 套/字 → <Seal delay={200} size={17}>戏谑行为</Seal>
            </IconChip>
            <IconChip icon={<MessageSquare size={26} color={C.xuan} strokeWidth={2.2} />} tone={C.moss} title="公开 · 郑重 · 合理：">
              电视节目＋100 元/字＋击掌为誓 → <Seal delay={240} size={17} tone={C.moss}>意思表示 ✓</Seal>
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 19.5, fontWeight: 900, color: C.inkSoft}}>三看齐用：内容·场所·方式综合认定</div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const PracticeActScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="consensual-vs-real" data-final-knowledge="formation-formula" data-final-knowledge="four-real-contracts" data-final-knowledge="loan-case-verdicts"
     data-stateful-source="loan-cash-ticket" data-stateful-terminal="loan-cash-ticket" */
  const ticketTravel = prog(frame, 230, 40);
  const ticketX = interpolate(ticketTravel, [0, 1], [1420, 620], CLAMP);
  return (
    <Shell code="04" kicker="诺成 · 实践" title="实践行为">
      <div
        data-layout="delivery-gate-with-four-contracts"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,soft-highlight"
        data-visual-grammar="consensual-acts-form-on-agreement-alone-as-the-default,real-acts-need-delivery-of-the-thing-after-agreement,delivery-opens-real-contracts-and-is-no-duty-to-perform,refusal-to-deliver-brings-culprit-contracting-liability-only"
        data-focal-rule="agreement-opens-consensual-acts-but-only-delivery-opens-real-acts"
        data-focal-channels="contrast,connector,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="consensual-vs-real" style={{position: 'absolute', left: 40, top: 0, width: 1696, height: 186}}>
          <Panel tone={C.rattan} watermark={<Handshake size={130} color={C.rattan} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 20px'}}>
            <PanelTab tone={C.rattan} icon={<Handshake size={22} color={C.rattanPale} strokeWidth={2.2} />}>诺成行为 vs 实践行为</PanelTab>
            <IconChip icon={<Handshake size={26} color={C.xuan} strokeWidth={2.2} />} tone={C.moss} title="诺成行为（不要物行为）：">
              达成<Soft color={C.moss}>合意</Soft>即可成立 —— 原则上民事法律行为均为诺成行为
            </IconChip>
            <IconChip icon={<PackageCheck size={26} color={C.xuan} strokeWidth={2.2} />} tone={C.wine} title="实践行为（要物行为）：">
              达成合意之后，还需完成<Under color={C.wine} delay={80}>标的物的交付</Under>才能成立
            </IconChip>
          </Panel>
        </Enter>
        <div data-stateful-source="loan-cash-ticket" style={{position: 'absolute', left: ticketX, top: 196, opacity: prog(frame, 190, 14) * (1 - prog(frame, 256, 14)), visibility: frame >= 274 ? 'hidden' : 'visible'}}>
          <Chip tone={C.rattan} toneBg={C.xuan}>现金票 · 借款尚未交付</Chip>
        </div>
        <span data-stateful-terminal="loan-cash-ticket" style={{position: 'absolute', left: 240, top: 196, display: 'inline-flex', alignItems: 'center', gap: 8, border: `2px solid ${C.wine}`, backgroundColor: C.winePale, padding: '5px 10px', fontSize: 19, fontWeight: 950, color: C.ink, opacity: prog(frame, 260, 14)}}>
          未交付 → 合同不成立 ✗
        </span>
        <Enter delay={50} from="left" marker="formation-formula" style={{position: 'absolute', left: 40, top: 244, width: 832, height: 186}}>
          <Panel tone={C.wine} watermark={<PackageCheck size={140} color={C.wine} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.wine} icon={<PackageCheck size={24} color={C.rattanPale} strokeWidth={2.2} />}>实践行为成立公式</PanelTab>
            <IconChip icon={<PackageCheck size={26} color={C.xuan} strokeWidth={2.2} />} tone={C.moss} title="A：">
              合意 ＋ <Under color={C.moss} delay={90}>交付</Under> ＝ 实践行为<Soft color={C.moss}>成立</Soft>
            </IconChip>
            <IconChip icon={<BellOff size={26} color={C.xuan} strokeWidth={2.2} />} tone={C.wine} title="B：">
              标的物未交付 → 实践行为<Soft color={C.wine}>不成立</Soft>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={74} from="right" marker="four-real-contracts" style={{position: 'absolute', left: 904, top: 244, width: 832, height: 186}}>
          <Panel tone={C.indigo} watermark={<KeyRound size={140} color={C.indigo} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.indigo} icon={<KeyRound size={24} color={C.rattanPale} strokeWidth={2.2} />}>我国的四种实践合同</PanelTab>
            <IconChip icon={<KeyRound size={26} color={C.xuan} strokeWidth={2.2} />} tone={C.indigo} title="四类：">
              <Soft color={C.indigo}>借</Soft>用 · <Soft color={C.indigo}>保</Soft>管 · 自然人之间<Soft color={C.indigo}>贷</Soft>款 · <Soft color={C.indigo}>定</Soft>金合同
            </IconChip>
            <IconChip icon={<Coins size={26} color={C.xuan} strokeWidth={2.2} />} tone={C.rattan} title="速记：">
              「保定借钱」—— 借保管贷定，要交付
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={120} from="up" marker="loan-case-verdicts" style={{position: 'absolute', left: 40, top: 452, width: 1696, height: 316}}>
          <Panel tone={C.moss} watermark={<Coins size={150} color={C.moss} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '11px 20px'}}>
            <PanelTab tone={C.moss} icon={<Coins size={22} color={C.rattanPale} strokeWidth={2.2} />}>案例分析 · 甲向乙书面借款（自然人之间）</PanelTab>
            <IconChip icon={<PackageCheck size={24} color={C.xuan} strokeWidth={2.2} />} tone={C.wine} title="① 合同成立？">
              未交付 → 实践合同<Seal delay={170} size={17}>不成立</Seal>
            </IconChip>
            <IconChip icon={<Handshake size={24} color={C.xuan} strokeWidth={2.2} />} tone={C.indigo} title="② 乙有交付义务？">
              交付发生在合同成立<Soft color={C.indigo}>之前</Soft>＝成立要件，而非债务 → <Seal delay={200} size={17} tone={C.wine}>无交付义务 ✗</Seal>
            </IconChip>
            <IconChip icon={<BellOff size={24} color={C.xuan} strokeWidth={2.2} />} tone={C.wine} title="③ 乙未交付的后果：">
              甲不得请求交付 · 不得诉请强制执行 · 不得追究违约责任（合同自由）
            </IconChip>
            <IconChip icon={<Scale size={24} color={C.xuan} strokeWidth={2.2} />} tone={C.moss} title="④ 乙违背诚信原则：">
              甲受损失的 → 可追究<Seal delay={250} size={17} tone={C.moss}>缔约过失责任 ✓</Seal>
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const FormalActScene = () => {
  /* data-final-knowledge="formal-vs-free" data-final-knowledge="form-scope-rule" data-final-knowledge="cure-dual-path" data-final-knowledge="negotiation-case-verdicts" */
  return (
    <Shell code="05" kicker="要式 · 不要式" title="要式行为">
      <div
        data-layout="form-gate-with-dual-paths"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,stamp,external-negation"
        data-visual-grammar="formal-acts-need-the-prescribed-form-by-law-or-agreement,civil-acts-are-form-free-by-default,missing-form-leaves-the-act-unformed-unless-performed-and-accepted,refusing-the-form-invites-culprit-contracting-liability-only"
        data-focal-rule="form-is-a-threshold-not-content-and-performance-with-acceptance-cures-it"
        data-focal-channels="contrast,connector,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={4} from="down" marker="formal-vs-free" style={{position: 'absolute', left: 40, top: 0, width: 1696, height: 186}}>
          <Panel tone={C.rattan} watermark={<Stamp size={130} color={C.rattan} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '11px 20px'}}>
            <PanelTab tone={C.rattan} icon={<Stamp size={22} color={C.rattanPale} strokeWidth={2.2} />}>要式行为 vs 不要式行为</PanelTab>
            <IconChip icon={<FileSignature size={26} color={C.xuan} strokeWidth={2.2} />} tone={C.indigo} title="要式行为：">
              依<Soft color={C.indigo}>法律规定</Soft>或<Soft color={C.indigo}>当事人约定</Soft>，应当采取特定形式的民事法律行为
            </IconChip>
            <IconChip icon={<Landmark size={26} color={C.xuan} strokeWidth={2.2} />} tone={C.moss} title="不要式行为：">
              法律与当事人均未对形式作特别要求 —— 原则上民事法律行为均属之
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={50} from="left" marker="form-scope-rule" style={{position: 'absolute', left: 40, top: 202, width: 832, height: 254}}>
          <Panel tone={C.indigo} watermark={<FileSignature size={150} color={C.indigo} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.indigo} icon={<FileSignature size={24} color={C.rattanPale} strokeWidth={2.2} />}>形式要件</PanelTab>
            <IconChip icon={<FileSignature size={26} color={C.xuan} strokeWidth={2.2} />} tone={C.indigo} title="范围：">
              不以<Soft color={C.indigo}>书面形式</Soft>为限——办理<Soft color={C.indigo}>公证 · 登记</Soft>等特定手续也是
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.xuan} strokeWidth={2.2} />} tone={C.rattan} title="性质：">
              仅具<Soft color={C.rattan}>形式意义</Soft>·不为交易带来实质性内容
            </IconChip>
            <IconChip icon={<BellOff size={26} color={C.xuan} strokeWidth={2.2} />} tone={C.wine} title="效力底线：">
              形式要件未具备 → 要式行为<Seal delay={140} size={18}>不成立</Seal>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={74} from="right" marker="cure-dual-path" style={{position: 'absolute', left: 904, top: 202, width: 832, height: 254}}>
          <Panel tone={C.moss} watermark={<RefreshCw size={150} color={C.moss} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 18px'}}>
            <PanelTab tone={C.moss} icon={<RefreshCw size={24} color={C.rattanPale} strokeWidth={2.2} />}>要式行为成立双路径</PanelTab>
            <IconChip icon={<FileSignature size={26} color={C.xuan} strokeWidth={2.2} />} tone={C.indigo} title="路径 A：">
              合意 ＋ <Soft color={C.indigo}>形式要件</Soft> ＝ 成立
            </IconChip>
            <IconChip icon={<RefreshCw size={26} color={C.xuan} strokeWidth={2.2} />} tone={C.moss} title="路径 B（履行治愈）：">
              合意 ＋ <Soft color={C.moss}>履行主要义务且对方接受</Soft> ＝ 成立
            </IconChip>
            <div style={{marginTop: 'auto', fontSize: 19.5, fontWeight: 900, color: C.inkSoft}}>一方反悔拒绝采取形式：不得追究违约责任；违背诚信致损 → 缔约过失责任</div>
          </Panel>
        </Enter>
        <Enter delay={120} from="up" marker="negotiation-case-verdicts" style={{position: 'absolute', left: 40, top: 472, width: 1696, height: 296}}>
          <Panel tone={C.wine} watermark={<Gavel size={150} color={C.wine} strokeWidth={1.6} />} style={{height: '100%', display: 'flex', flexDirection: 'column', gap: 7, padding: '11px 20px'}}>
            <PanelTab tone={C.wine} icon={<Gavel size={22} color={C.rattanPale} strokeWidth={2.2} />}>案例分析</PanelTab>
            <IconChip icon={<Stamp size={24} color={C.xuan} strokeWidth={2.2} />} tone={C.moss} title="备忘录案：">
              仅系统性总结＝<Soft color={C.moss}>形式意义</Soft>→<Seal delay={170} size={16} tone={C.moss}>要式合同 ✓</Seal> · 需明确标的 40% 面积＝<Soft color={C.wine}>实质意义</Soft>→非要式（备忘录＝预约·买卖合同＝本约）
            </IconChip>
            <IconChip icon={<PenLine size={24} color={C.xuan} strokeWidth={2.2} />} tone={C.indigo} title="磋商案一（甲反悔不签合同书）：">
              乙无权请求甲签字 · 无权追究违约责任 → 可追<Soft color={C.indigo}>缔约过失责任</Soft>
            </IconChip>
            <IconChip icon={<RefreshCw size={24} color={C.xuan} strokeWidth={2.2} />} tone={C.moss} title="磋商案二（乙交付价款·甲接受）：">
              触发「履行＋接受」→ <Seal delay={250} size={17} tone={C.moss}>合同成立 ✓ 甲须履行交付货物义务</Seal>
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
