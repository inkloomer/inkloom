import {Ban, FileText, GraduationCap, KeyRound, Landmark, Scale, Users} from 'lucide-react';
import {Chip, C, Dash, Enter, GateTitle, LabelBlock, Neg, Shell, SoftHi, Stamp, ThinU} from './kit';

export const StatusCrimeDualityScene = () => (
  <Shell code="01" title="真正与不真正身份犯">
    <div data-layout="dual-badge-status-board" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="badge-status-pairing,conviction-range-split" data-focal-rule="conviction-identity-unlocks-the-crime-sentencing-identity-only-tilts-the-penalty" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="badge-true-status" style={{position: 'absolute', left: 0, top: 0, width: 876, height: 468, backgroundColor: C.badge, border: `4px solid ${C.brass}`, borderRadius: 12, padding: '16px 22px'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <KeyRound size={30} color={C.brass} />
          <LabelBlock size={27} color={C.brass}>真正身份犯 · 定罪身份（构成身份）</LabelBlock>
        </Enter>
        <Enter delay={18} style={{marginTop: 12, fontSize: 23, fontWeight: 800}}>只有具备特殊身份，才能<ThinU>构成犯罪</ThinU></Enter>
        <Enter delay={28} style={{marginTop: 12, display: 'flex', gap: 10, flexWrap: 'wrap'}}>
          <Chip style={{fontSize: 20, whiteSpace: 'normal'}}>刑讯逼供罪 → 司法工作人员</Chip>
          <Chip style={{fontSize: 20, whiteSpace: 'normal'}}>贪污罪 → 国家工作人员</Chip>
        </Enter>
        <div data-final-knowledge="badge-true-rule-time" style={{marginTop: 14, backgroundColor: C.denySoft, border: `3px dashed ${C.deny}`, borderRadius: 8, padding: '10px 14px'}}>
          <Enter delay={44} style={{fontSize: 22, fontWeight: 900}}>规则① 时间：必须在<ThinU>开始犯罪时</ThinU>就具有</Enter>
          <Enter delay={56} style={{marginTop: 8}}><Neg size={21}>黑社会组织者·犯罪集团首要分子＝犯罪过程中形成 → 不是定罪身份（2020）</Neg></Enter>
        </div>
        <div data-final-knowledge="badge-true-rule-scope" style={{marginTop: 12, backgroundColor: C.permitSoft, border: `3px solid ${C.permit}`, borderRadius: 8, padding: '10px 14px'}}>
          <Enter delay={68} style={{fontSize: 22, fontWeight: 900}}>规则② 范围：只针对<ThinU>实行犯</ThinU>所要求</Enter>
          <Enter delay={80} style={{marginTop: 8, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>共犯（帮助·教唆）不要求定罪身份——官妻是普通公民：不能当贪污罪实行犯·但可当教唆犯·帮助犯</Enter>
        </div>
      </div>

      <div data-final-knowledge="badge-quasi-status" style={{position: 'absolute', left: 900, top: 0, width: 876, height: 468, backgroundColor: C.badge, border: `4px solid ${C.lanyard}`, borderRadius: 12, padding: '16px 22px'}}>
        <Enter delay={12} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Scale size={30} color={C.lanyard} />
          <LabelBlock size={27} color={C.lanyard}>不真正身份犯 · 量刑身份（加减身份）</LabelBlock>
        </Enter>
        <Enter delay={24} style={{marginTop: 12, fontSize: 23, fontWeight: 800}}>身份<ThinU>不影响</ThinU>犯罪成立 · <SoftHi style={{fontSize: 22}}>但影响量刑</SoftHi></Enter>
        <div style={{marginTop: 16, border: `3px solid ${C.lanyard}`, borderRadius: 8, padding: '12px 16px'}}>
          <Enter delay={40} style={{fontSize: 22, fontWeight: 800}}>例：诬告陷害罪＝一般主体</Enter>
          <Enter delay={52} style={{marginTop: 8, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>国家机关工作人员犯该罪 → <ThinU>从重处罚</ThinU>（身份只加重刑罚）</Enter>
        </div>
        <Enter delay={66} style={{marginTop: 16, display: 'flex', gap: 10, flexWrap: 'wrap'}}>
          <Chip tone="brass" style={{fontSize: 21}}>定罪看钥匙 · 量刑看砝码</Chip>
        </Enter>
      </div>

      <div data-final-knowledge="badge-subject-floor" style={{position: 'absolute', left: 0, right: 0, top: 492, bottom: 0, backgroundColor: C.panel, border: `3px solid ${C.board}`, borderRadius: 12, display: 'flex', alignItems: 'center', gap: 16, padding: '0 22px'}}>
        <Enter delay={96}><LabelBlock ink size={25}>行为主体的门槛</LabelBlock></Enter>
        <Enter delay={108} style={{fontSize: 22, fontWeight: 800}}>只要求客观上存在自然人＋<SoftHi style={{fontSize: 21}}>侵害法益能力（违法能力）</SoftHi></Enter>
        <span style={{flex: 1}} />
        <Enter delay={118} style={{fontSize: 21, fontWeight: 700, color: C.inkSoft}}>责任能力与制造违法事实无关——精神病患者·13岁的人也是行为主体，责任问题归排除责任阶段</Enter>
      </div>
    </div>
  </Shell>
);

export const PublicOfficialDialScene = () => (
  <Shell code="02" title="国家工作人员·从事公务">
    <div data-layout="duty-dial-case-lanes" data-visual-anchor="concept-icon" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="duty-standard-dial,case-lane-verdicts" data-focal-rule="public-official-is-defined-by-public-duty-not-by-payroll-status" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="dial-wrong-standard" style={{position: 'absolute', left: 0, top: 0, width: 860, height: 118, backgroundColor: C.denySoft, border: `3px dashed ${C.deny}`, borderRadius: 12, display: 'flex', alignItems: 'center', gap: 14, padding: '0 20px'}}>
        <Enter delay={6}><Neg size={24}>错误标准：有无正式编制（临时工≠不是）</Neg></Enter>
      </div>

      <div data-final-knowledge="dial-right-standard" style={{position: 'absolute', left: 0, top: 138, width: 860, height: 322, backgroundColor: C.badge, border: `4px solid ${C.brass}`, borderRadius: 12, padding: '14px 20px'}}>
        <Enter delay={18} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Landmark size={28} color={C.brass} />
          <LabelBlock size={26} color={C.brass}>正确标准（刑法第93条）· 是否从事公务</LabelBlock>
        </Enter>
        <Enter delay={30} style={{marginTop: 12, display: 'flex', gap: 10, flexWrap: 'wrap'}}>
          <Chip tone="brass" style={{fontSize: 21, whiteSpace: 'normal'}}>公共管理性：关系多数人·不特定人利益</Chip>
          <Chip tone="brass" style={{fontSize: 21, whiteSpace: 'normal'}}>行政职责性：属行政职务·担行政责任</Chip>
        </Enter>
        <Enter delay={44} style={{marginTop: 14, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={44} style={{display: 'flex', gap: 10, alignItems: 'center'}}><Chip tone="permit" style={{fontSize: 20}}>财务处会计 ∈ 国家工作人员</Chip></Enter>
          <Enter delay={54} style={{display: 'flex', gap: 10, alignItems: 'center'}}><Chip tone="deny" style={{fontSize: 20}}>大学教授 ∉（技术劳动）</Chip></Enter>
          <Enter delay={64} style={{display: 'flex', gap: 10, alignItems: 'center'}}><Chip tone="permit" style={{fontSize: 20}}>村干部协助政府从事公务 ∈</Chip></Enter>
        </Enter>
      </div>

      <div data-final-knowledge="case-vice-director" style={{position: 'absolute', left: 884, top: 0, width: 892, height: 460, backgroundColor: C.badge, border: `3px double ${C.ink}`, borderRadius: 12, padding: '14px 20px'}}>
        <Enter delay={24} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={28} color={C.deny} />
          <LabelBlock size={26}>2016·62 · 副院长收钱案</LabelBlock>
        </Enter>
        <div data-final-knowledge="case-monday" style={{marginTop: 12, border: `3px solid ${C.brass}`, borderRadius: 8, padding: '10px 14px'}}>
          <Enter delay={40} style={{fontSize: 22, fontWeight: 900}}>周一 · 洽谈采购收钱</Enter>
          <Enter delay={50} style={{marginTop: 6, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>事务性质＝公务 → 身份＝国家工作人员</Enter>
          <Enter delay={60} style={{marginTop: 6}}><Stamp delay={60} tone="brass">受贿罪</Stamp></Enter>
        </div>
        <div data-final-knowledge="case-tuesday" style={{marginTop: 12, border: `3px solid ${C.lanyard}`, borderRadius: 8, padding: '10px 14px'}}>
          <Enter delay={72} style={{fontSize: 22, fontWeight: 900}}>周二 · 坐门诊开处方收钱</Enter>
          <Enter delay={82} style={{marginTop: 6, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>事务性质＝技术劳动 → 身份＝非国家工作人员</Enter>
          <Enter delay={92} style={{marginTop: 6}}><Stamp delay={92} tone="deny">非国家工作人员受贿罪</Stamp></Enter>
        </div>
      </div>

      <div data-final-knowledge="dial-crime-lanes" style={{position: 'absolute', left: 0, right: 0, top: 484, bottom: 0, backgroundColor: C.panel, border: `3px solid ${C.board}`, borderRadius: 12, padding: '12px 20px'}}>
        <Enter delay={104} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <FileText size={24} color={C.board} />
          <LabelBlock ink size={24}>身份决定罪名 · 三条对照道</LabelBlock>
        </Enter>
        <div style={{marginTop: 10, display: 'flex', gap: 14}}>
          <Enter delay={114} style={{flex: 1, border: `3px solid ${C.brass}`, borderRadius: 8, padding: '8px 12px'}}>
            <Chip tone="brass" style={{fontSize: 20}}>贪钱</Chip>
            <div style={{marginTop: 6, fontSize: 20, fontWeight: 800}}>国家工作人员 → 贪污罪</div>
            <div style={{fontSize: 20, fontWeight: 800, color: C.inkSoft}}>非国家工作人员 → 职务侵占罪</div>
          </Enter>
          <Enter delay={124} style={{flex: 1, border: `3px solid ${C.brass}`, borderRadius: 8, padding: '8px 12px'}}>
            <Chip tone="brass" style={{fontSize: 20}}>收钱</Chip>
            <div style={{marginTop: 6, fontSize: 20, fontWeight: 800}}>国家工作人员 → 受贿罪</div>
            <div style={{fontSize: 20, fontWeight: 800, color: C.inkSoft}}>非国家工作人员 → 非国家工作人员受贿罪</div>
          </Enter>
          <Enter delay={134} style={{flex: 1, border: `3px solid ${C.brass}`, borderRadius: 8, padding: '8px 12px'}}>
            <Chip tone="brass" style={{fontSize: 20}}>挪钱</Chip>
            <div style={{marginTop: 6, fontSize: 20, fontWeight: 800}}>国家工作人员 → 挪用公款罪</div>
            <div style={{fontSize: 20, fontWeight: 800, color: C.inkSoft}}>非国家工作人员 → 挪用资金罪</div>
          </Enter>
        </div>
      </div>
    </div>
  </Shell>
);
