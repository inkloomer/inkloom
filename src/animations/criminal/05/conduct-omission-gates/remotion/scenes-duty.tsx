import {Compass, GraduationCap, LockOpen, ScrollText, Users, Zap} from 'lucide-react';
import {Chip, C, Dash, Enter, LabelBlock, Neg, PatrolTitle, Shell, SoftHi, ThinU} from './kit';

export const DutyStreamSourcesScene = () => (
  <Shell code="04" title="作为义务·应为（二分说）">
    <div data-layout="duty-source-two-shores" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="danger-stream-blocking,two-shore-duty-split" data-focal-rule="duty-comes-from-guarding-the-danger-source-or-protecting-the-object" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 92, display: 'flex', alignItems: 'center', gap: 14}}>
        <Enter delay={6}><LabelBlock size={26} color={C.rescue}>应为 · 实质二分说：危险流袭来，刑法要你阻断</LabelBlock></Enter>
        <Enter delay={16} style={{fontSize: 21, fontWeight: 700, color: C.inkSoft}}>传统「形式四分说」过于形式化——法考立场：<SoftHi style={{fontSize: 20}}>实质二分说</SoftHi></Enter>
      </div>

      <div data-final-knowledge="shore-guard-source" style={{position: 'absolute', left: 0, top: 104, width: 876, height: 640, backgroundColor: C.white, border: `4px solid ${C.water}`, borderRadius: 10, padding: '14px 20px'}}>
        <Enter delay={24} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Zap size={28} color={C.water} />
          <LabelBlock size={26} color={C.water}>对危险源的监管义务</LabelBlock>
        </Enter>
        <div data-final-knowledge="shore-danger-things" style={{marginTop: 12, border: `3px solid ${C.sand}`, borderRadius: 8, padding: '10px 14px'}}>
          <Enter delay={38} style={{fontSize: 21, fontWeight: 900}}>危险物：凶狗·设施·机动车·危房</Enter>
          <Enter delay={48} style={{marginTop: 6, fontSize: 20, fontWeight: 700, color: C.inkSoft}}>主人拦凶狗·设施负责人管理·车主拦无照醉驾·房东告知危房</Enter>
        </div>
        <div data-final-knowledge="shore-others-acts" style={{marginTop: 12, border: `3px solid ${C.sand}`, borderRadius: 8, padding: '10px 14px'}}>
          <Enter delay={60} style={{fontSize: 21, fontWeight: 900}}>他人危险行为（须有监护·监管关系）</Enter>
          <Enter delay={70} style={{marginTop: 6, display: 'flex', flexDirection: 'column', gap: 6}}>
            <Chip tone="permit" style={{fontSize: 19, whiteSpace: 'normal'}}>父母→年幼子女∈ · 家属→狂躁症∈ · 军官→士兵·阿姨→小朋友∈</Chip>
            <Chip tone="warn" style={{fontSize: 19, whiteSpace: 'normal'}}>成年兄妹·夫妻∉：妻子对丈夫受贿无阻止义务·不构成不作为帮助犯</Chip>
          </Enter>
        </div>
        <div data-final-knowledge="shore-own-prior-act" style={{marginTop: 12, border: `3px solid ${C.sand}`, borderRadius: 8, padding: '10px 14px'}}>
          <Enter delay={82} style={{fontSize: 21, fontWeight: 900}}>自己先行行为</Enter>
          <Enter delay={92} style={{marginTop: 6, fontSize: 20, fontWeight: 700, color: C.inkSoft}}>饭店中毒→救助·产品隐患→召回·黑夜高速违停→救助·激怒癫痫者致死→不作为故意杀人；电炉引火不扑灭→不作为放火（2021）</Enter>
          <Enter delay={104} style={{marginTop: 6, fontSize: 20, fontWeight: 700, color: C.inkSoft}}>正当防卫过当风险（多数说：有防止义务）·紧急避险·犯罪行为 → 也可成先行行为；分手·递刀观赏 → <Neg size={19}>不产生义务</Neg></Enter>
        </div>
      </div>

      <div data-final-knowledge="shore-protect-object" style={{position: 'absolute', left: 900, top: 104, width: 876, height: 640, backgroundColor: C.white, border: `4px solid ${C.rescue}`, borderRadius: 10, padding: '14px 20px'}}>
        <Enter delay={30} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Users size={28} color={C.rescue} />
          <LabelBlock size={26} color={C.rescue}>对法益对象的保护义务</LabelBlock>
        </Enter>
        <div data-final-knowledge="shore-specific-relation" style={{marginTop: 12, border: `3px solid ${C.sand}`, borderRadius: 8, padding: '10px 14px'}}>
          <Enter delay={44} style={{fontSize: 21, fontWeight: 900}}>特定关系</Enter>
          <Enter delay={54} style={{marginTop: 6, display: 'flex', flexDirection: 'column', gap: 6}}>
            <Chip tone="permit" style={{fontSize: 19, whiteSpace: 'normal'}}>法律：消防报警义务≠保护义务·路人见火不报警无刑法义务</Chip>
            <Chip tone="permit" style={{fontSize: 19, whiteSpace: 'normal'}}>亲属：父母子女互有义务·离婚判决未生效仍存续（2024）·带邻居小孩＝临时监护∈（2010·52）·男女朋友∉</Chip>
            <Chip tone="permit" style={{fontSize: 19, whiteSpace: 'normal'}}>职务业务：警察·消防员·医生·救生员；非警察身份（卫生局长）∉</Chip>
            <Chip tone="permit" style={{fontSize: 19, whiteSpace: 'normal'}}>合同：店员答应看管手机→盗窃罪不作为帮助犯</Chip>
            <Chip tone="rescue" style={{fontSize: 19, whiteSpace: 'normal'}}>自愿救助＋依赖：捡弃婴·钟点工超时·井底绳拉到半空∈；未拉·未抓到∉</Chip>
          </Enter>
        </div>
        <div data-final-knowledge="shore-specific-domain" style={{marginTop: 12, border: `3px solid ${C.sand}`, borderRadius: 8, padding: '10px 14px'}}>
          <Enter delay={116} style={{fontSize: 21, fontWeight: 900}}>特定领域（主人·客人）＋ 控制力 ＋ 依赖</Enter>
          <Enter delay={126} style={{marginTop: 6, display: 'flex', flexDirection: 'column', gap: 6}}>
            <Chip tone="warn" style={{fontSize: 19, whiteSpace: 'normal'}}>宿舍同住（同为管理者）→ 甲∉</Chip>
            <Chip tone="permit" style={{fontSize: 19, whiteSpace: 'normal'}}>嫖娼在女方家→女方∈·酒店看谁开房·共吸毒在谁家谁∈</Chip>
            <Chip tone="permit" style={{fontSize: 19, whiteSpace: 'normal'}}>出租车·大巴司机：业务＋领域→阻止义务（2024）</Chip>
          </Enter>
        </div>
        <div data-final-knowledge="shore-priority-note" style={{marginTop: 12, backgroundColor: C.warnSoft, border: `3px dashed ${C.warn}`, borderRadius: 8, padding: '8px 14px'}}>
          <Enter delay={138} style={{fontSize: 20, fontWeight: 800}}>多个义务人：第一顺位不救助甚至侵害 → 不强求第二顺位（妻打母·夫不拦∉）</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const AbilityErrorGateScene = () => (
  <Shell code="05" title="能为·不为·主观与等价性">
    <div data-layout="ability-error-gate-strip" data-visual-anchor="timeline-gate" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="should-can-not-chain,error-type-fork" data-focal-rule="factual-mistake-kills-intent-legal-mistake-does-not" data-focal-channels="icon,contrast,enclosure,connector" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 96, display: 'flex', alignItems: 'center', gap: 16}}>
        <Enter delay={6}><LabelBlock size={26} color={C.rescue}>成立链条</LabelBlock></Enter>
        <Enter delay={16} style={{display: 'flex', gap: 12, alignItems: 'center'}}>
          <Chip tone="rescue" style={{fontSize: 23}}><ScrollText size={22} color={C.ink} style={{flexShrink: 0}} /> 应为（义务）</Chip>
          <span style={{fontSize: 24, fontWeight: 950, color: C.rescue}}>→</span>
          <Chip tone="rescue" style={{fontSize: 23}}>能为（作为可能性）</Chip>
          <span style={{fontSize: 24, fontWeight: 950, color: C.rescue}}>→</span>
          <Chip tone="rescue" style={{fontSize: 23}}>不为（不履行）</Chip>
          <span style={{fontSize: 24, fontWeight: 950, color: C.rescue}}>→</span>
          <Chip tone="wood" style={{fontSize: 23}}>主观故意·过失</Chip>
        </Enter>
      </div>

      <div data-final-knowledge="gate-ability" style={{position: 'absolute', left: 0, top: 120, width: 566, height: 268, backgroundColor: C.white, border: `3px solid ${C.water}`, borderRadius: 10, padding: '14px 18px'}}>
        <Enter delay={26}><PatrolTitle>能为 · 作为可能性</PatrolTitle></Enter>
        <Enter delay={38} style={{marginTop: 8, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>自身能力＋客观条件——带人游泳自己脚抽筋·无能力不救∉</Enter>
        <div data-final-knowledge="gate-avoid-possibility" style={{marginTop: 10, border: `3px dashed ${C.warn}`, borderRadius: 8, padding: '8px 12px'}}>
          <Enter delay={50} style={{fontSize: 20, fontWeight: 900, color: C.warn}}>不为的前提：结果避免可能性</Enter>
          <Enter delay={60} style={{marginTop: 4, fontSize: 19, fontWeight: 700, color: C.inkSoft}}>撞成濒死必死·不救→只构成过失致人死亡；逃逸无救不属于「因逃逸致人死亡」升格</Enter>
        </div>
      </div>

      <div data-final-knowledge="gate-error-fork" style={{position: 'absolute', left: 590, top: 120, width: 566, height: 268, backgroundColor: C.white, border: `4px solid ${C.rescue}`, borderRadius: 10, padding: '14px 18px'}}>
        <Enter delay={32}><LabelBlock size={24} color={C.rescue}>两种认识错误</LabelBlock></Enter>
        <div style={{marginTop: 10, border: `3px solid ${C.permit}`, borderRadius: 8, padding: '8px 12px'}}>
          <Enter delay={44} style={{fontSize: 20, fontWeight: 900}}>事实认识错误（误认溺水儿子为陌生人）</Enter>
          <Enter delay={54} style={{fontSize: 19, fontWeight: 700, color: C.inkSoft}}>→ 排除故意·有过失成立过失的不作为犯</Enter>
        </div>
        <div style={{marginTop: 10, border: `3px solid ${C.warn}`, borderRadius: 8, padding: '8px 12px'}}>
          <Enter delay={66} style={{fontSize: 20, fontWeight: 900, color: C.warn}}>法律认识错误（误认为无需救养子）</Enter>
          <Enter delay={76} style={{fontSize: 19, fontWeight: 700, color: C.inkSoft}}>→ 不知法不免责·仍成立故意的不作为犯</Enter>
        </div>
      </div>

      <div data-final-knowledge="gate-equivalence" style={{position: 'absolute', left: 1180, top: 120, width: 596, height: 268, backgroundColor: C.white, border: `3px solid ${C.sand}`, borderRadius: 10, padding: '14px 18px'}}>
        <Enter delay={38}><PatrolTitle>等价性与形态</PatrolTitle></Enter>
        <Enter delay={50} style={{marginTop: 8, fontSize: 20, fontWeight: 700, color: C.inkSoft}}>不作为要达到与作为<ThinU>相同评价</ThinU>：饿一小时∉·饿三天∈</Enter>
        <Enter delay={62} style={{marginTop: 8}}><Chip tone="rescue" style={{fontSize: 20, whiteSpace: 'normal'}}>饿婴三天被邻居救活 → 不作为故意杀人·未遂</Chip></Enter>
      </div>

      <div data-final-knowledge="gate-exam-floor" style={{position: 'absolute', left: 0, right: 0, top: 412, bottom: 0, backgroundColor: C.sandSoft, border: `3px double ${C.ink}`, borderRadius: 10, padding: '14px 22px'}}>
        <Enter delay={86} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={26} color={C.warn} />
          <LabelBlock ink size={24}>2015·卷二·52 · 答案 ACD</LabelBlock>
        </Enter>
        <div style={{marginTop: 10, display: 'flex', gap: 10, flexWrap: 'wrap'}}>
          <Enter delay={98}><Chip tone="permit" style={{fontSize: 19, whiteSpace: 'normal'}}>A 对：父（特定关系）＋救生员（职务业务）均故意不救→都成立</Chip></Enter>
          <Enter delay={108}><Chip tone="warn" style={{fontSize: 19, whiteSpace: 'normal'}}>B 错：误认无义务＝法律认识错误→故意的不作为犯</Chip></Enter>
          <Enter delay={118}><Chip tone="permit" style={{fontSize: 19, whiteSpace: 'normal'}}>C 对：救女友未救母——义务冲突可去违法·仍先成立不作为犯</Chip></Enter>
          <Enter delay={128}><Chip tone="permit" style={{fontSize: 19, whiteSpace: 'normal'}}>D 对：投毒乙＝作为·毒咖啡递丙未阻止＝先行行为＋不作为</Chip></Enter>
        </div>
        <Enter delay={140} style={{marginTop: 10, fontSize: 20, fontWeight: 700, color: C.inkSoft}}>丈夫不阻止妻子打母亲 → 不构成（第一顺位在场）；同时落水救一舍一 → 义务冲突在排除违法阶段处理</Enter>
      </div>
    </div>
  </Shell>
);
