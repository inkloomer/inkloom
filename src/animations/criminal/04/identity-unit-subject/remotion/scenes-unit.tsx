import {Ban, Castle, FileText, GraduationCap, LockOpen, Users} from 'lucide-react';
import {Chip, C, Dash, Enter, GateTitle, LabelBlock, Neg, Shell, SoftHi, Stamp, ThinU} from './kit';

export const UnitCrimeGateScene = () => (
  <Shell code="03" title="单位犯罪·成立条件">
    <div data-layout="unit-classify-gate-board" data-visual-anchor="boundary" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="crime-classify-strip,unit-gate-conditions" data-focal-rule="a-unit-acts-only-through-collective-will-and-own-benefit-gates" data-focal-channels="icon,enclosure,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="classify-strip" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 128, backgroundColor: C.panel, border: `3px solid ${C.board}`, borderRadius: 12, display: 'flex', alignItems: 'center', gap: 14, padding: '0 20px'}}>
        <Enter delay={6}><LabelBlock ink size={25}>分类</LabelBlock></Enter>
        <Enter delay={16} style={{display: 'flex', gap: 10, flexWrap: 'wrap'}}>
          <Chip tone="permit" style={{fontSize: 20, whiteSpace: 'normal'}}>纯正单位犯罪：只能单位——单位行贿罪·单位受贿罪</Chip>
          <Chip tone="brass" style={{fontSize: 20, whiteSpace: 'normal'}}>不纯正：单位个人都可——生产销售伪劣产品罪</Chip>
          <Chip tone="deny" style={{fontSize: 20, whiteSpace: 'normal'}}>纯正自然人犯罪：只能个人——行贿罪·受贿罪</Chip>
        </Enter>
      </div>
      <Enter delay={26} style={{position: 'absolute', left: 0, right: 0, top: 140, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>
        口诀：金融诈骗 8 罪中只有 3 个纯正自然人犯罪——<ThinU>贷款 · 信用卡 · 有价证券</ThinU>
      </Enter>

      <div data-final-knowledge="gate-subject" style={{position: 'absolute', left: 0, top: 186, width: 876, height: 268, backgroundColor: C.badge, border: `4px solid ${C.brass}`, borderRadius: 12, padding: '14px 20px'}}>
        <Enter delay={34} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Castle size={28} color={C.brass} />
          <LabelBlock size={26} color={C.brass}>主体条件 · 法人资格</LabelBlock>
        </Enter>
        <Enter delay={46} style={{marginTop: 12, display: 'flex', gap: 10, flexWrap: 'wrap'}}>
          <Chip style={{fontSize: 20, whiteSpace: 'normal'}}>国有单位：不要求法人资格</Chip>
          <Chip style={{fontSize: 20, whiteSpace: 'normal'}}>私营单位：要求法人资格（合伙 ✗）</Chip>
        </Enter>
        <div data-final-knowledge="gate-branch-two-keys" style={{marginTop: 12, border: `3px solid ${C.lanyard}`, borderRadius: 8, padding: '10px 14px'}}>
          <Enter delay={60} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <LockOpen size={22} color={C.lanyard} />
            <span style={{fontSize: 21, fontWeight: 900}}>分支机构·内设机构（无独立法人资格）的两把钥匙</span>
          </Enter>
          <Enter delay={72} style={{marginTop: 8, display: 'flex', gap: 10, flexWrap: 'wrap'}}>
            <Chip tone="brass" style={{fontSize: 20}}>① 以自己名义犯罪</Chip>
            <Chip tone="brass" style={{fontSize: 20}}>② 违法所得归该机构</Chip>
          </Enter>
          <Enter delay={84} style={{marginTop: 8, fontSize: 20, fontWeight: 700, color: C.inkSoft}}>分公司具备两要件 → 也能成为主体；子公司有独立法人资格 → 能</Enter>
        </div>
      </div>

      <div data-final-knowledge="gate-mind" style={{position: 'absolute', left: 900, top: 186, width: 876, height: 268, backgroundColor: C.badge, border: `4px solid ${C.permit}`, borderRadius: 12, padding: '14px 20px'}}>
        <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Users size={28} color={C.permit} />
          <LabelBlock size={26} color={C.permit}>主观条件 · 单位整体意志</LabelBlock>
        </Enter>
        <Enter delay={52} style={{marginTop: 12, display: 'flex', gap: 10, flexWrap: 'wrap'}}>
          <Chip tone="permit" style={{fontSize: 20, whiteSpace: 'normal'}}>决策机构形成（董事会决议）</Chip>
          <Chip tone="permit" style={{fontSize: 20, whiteSpace: 'normal'}}>领导依职权决策</Chip>
        </Enter>
        <Enter delay={64} style={{marginTop: 12, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>罪过形式：故意·过失皆可（工程重大安全事故罪等）；实施者仍是自然人</Enter>
        <div data-final-knowledge="gate-veil" style={{marginTop: 12, backgroundColor: C.denySoft, border: `3px dashed ${C.deny}`, borderRadius: 8, padding: '10px 14px'}}>
          <Enter delay={78} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <Ban size={22} color={C.deny} />
            <span style={{fontSize: 21, fontWeight: 900, color: C.deny}}>揭开单位的面纱 → 按个人犯罪论处</span>
          </Enter>
          <Enter delay={90} style={{marginTop: 6, fontSize: 20, fontWeight: 700, color: C.inkSoft}}>设立时主要目的＝犯罪 / 设立后主要活动＝犯罪——「单位」只是个人犯罪的马甲</Enter>
        </div>
      </div>

      <div data-final-knowledge="gate-factory-case" style={{position: 'absolute', left: 0, right: 0, top: 478, bottom: 0, backgroundColor: C.panel, border: `3px double ${C.ink}`, borderRadius: 12, padding: '12px 20px'}}>
        <Enter delay={100} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={26} color={C.deny} />
          <LabelBlock size={24}>化工厂协助杀人案 · 领导层决议借氰化钾给狗蛋</LabelBlock>
        </Enter>
        <Enter delay={112} style={{marginTop: 10, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <Neg size={22}>单位帮助自然人实施纯正自然人犯罪 → 不能对单位以帮助犯论处</Neg>
        </Enter>
        <Enter delay={124} style={{marginTop: 8, display: 'flex', alignItems: 'center', gap: 12}}>
          <span style={{fontSize: 22, fontWeight: 800}}>只追究其直接责任人 → 构成狗蛋</span>
          <Stamp delay={132} tone="deny">故意杀人罪 · 帮助犯</Stamp>
        </Enter>
      </div>
    </div>
  </Shell>
);

export const FourModelCrossingScene = () => (
  <Shell code="04" title="单位犯罪·四模型十字口">
    <div data-layout="will-benefit-crossing-matrix" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="will-benefit-matrix,sole-unit-verdict" data-focal-rule="only-unit-will-plus-unit-benefit-makes-a-unit-crime" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', left: 0, top: 0, width: 300, height: 560}}>
        <Enter delay={6} style={{position: 'absolute', left: 0, top: 96, fontSize: 22, fontWeight: 900, color: C.board}}>意志 →</Enter>
        <Enter delay={8} style={{position: 'absolute', left: 0, top: 150, fontSize: 24, fontWeight: 950}}><Users size={26} color={C.permit} style={{flexShrink: 0, verticalAlign: '-5px'}} /> 单位意志</Enter>
        <Enter delay={10} style={{position: 'absolute', left: 0, top: 430, fontSize: 24, fontWeight: 950}}><Users size={26} color={C.deny} style={{flexShrink: 0, verticalAlign: '-5px'}} /> 个人意志</Enter>
        <Enter delay={12} style={{position: 'absolute', left: 210, top: 30, fontSize: 22, fontWeight: 900, color: C.board}}>↓ 利益</Enter>
        <Enter delay={14} style={{position: 'absolute', left: 118, top: 56, fontSize: 21, fontWeight: 800}}>本单位利益</Enter>
        <Enter delay={16} style={{position: 'absolute', left: 118, top: 344, fontSize: 21, fontWeight: 800}}>个人利益</Enter>
      </div>

      <div data-final-knowledge="matrix-model1" style={{position: 'absolute', left: 310, top: 96, width: 716, height: 224, backgroundColor: C.permitSoft, border: `4px solid ${C.permit}`, borderRadius: 12, padding: '14px 18px'}}>
        <Enter delay={22} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <LabelBlock size={25} color={C.permit}>模型① 单位意志＋本单位利益</LabelBlock>
          <Stamp delay={30} tone="permit">单位犯罪</Stamp>
        </Enter>
        <Enter delay={40} style={{marginTop: 10, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>例：董事会决议向官员行贿为公司谋利 → <SoftHi style={{fontSize: 20}}>单位行贿罪</SoftHi></Enter>
      </div>

      <div data-final-knowledge="matrix-model2" style={{position: 'absolute', left: 1036, top: 96, width: 740, height: 224, backgroundColor: C.badge, border: `3px solid ${C.deny}`, borderRadius: 12, padding: '14px 18px'}}>
        <Enter delay={46} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <LabelBlock size={25} color={C.deny}>模型② 单位意志＋个人利益</LabelBlock>
          <Stamp delay={54} tone="deny">个人犯罪</Stamp>
        </Enter>
        <Enter delay={64} style={{marginTop: 10, fontSize: 20, fontWeight: 700, color: C.inkSoft}}>例：为董事长孩子升学行贿；领导层私分应收款100万 → 贪污罪（个人）·不构成私分国有资产罪</Enter>
      </div>

      <div data-final-knowledge="matrix-model3" style={{position: 'absolute', left: 310, top: 336, width: 716, height: 224, backgroundColor: C.badge, border: `3px solid ${C.deny}`, borderRadius: 12, padding: '14px 18px'}}>
        <Enter delay={70} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <LabelBlock size={25} color={C.deny}>模型③ 个人意志＋本单位利益</LabelBlock>
          <Stamp delay={78} tone="deny">个人犯罪</Stamp>
        </Enter>
        <Enter delay={88} style={{marginTop: 10, fontSize: 20, fontWeight: 700, color: C.inkSoft}}>例：副总私自掏钱为公司行贿；经理为单位利益拒不执行判决（2015·54）→ 个人犯罪</Enter>
      </div>

      <div data-final-knowledge="matrix-model4" style={{position: 'absolute', left: 1036, top: 336, width: 740, height: 224, backgroundColor: C.badge, border: `3px solid ${C.deny}`, borderRadius: 12, padding: '14px 18px'}}>
        <Enter delay={94} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <LabelBlock size={25} color={C.deny}>模型④ 个人意志＋个人利益</LabelBlock>
          <Stamp delay={102} tone="deny">个人犯罪</Stamp>
        </Enter>
        <Enter delay={112} style={{marginTop: 10, fontSize: 20, fontWeight: 700, color: C.inkSoft}}>例：经理李某盗用公司名义走私；副总未经授权为自己行贿 → 个人犯罪</Enter>
      </div>

      <div data-final-knowledge="matrix-accomplice-note" style={{position: 'absolute', left: 0, right: 0, top: 584, bottom: 0, backgroundColor: C.panel, border: `3px solid ${C.board}`, borderRadius: 12, display: 'flex', alignItems: 'center', gap: 16, padding: '0 22px'}}>
        <Enter delay={124}><LabelBlock ink size={24}>共犯规则</LabelBlock></Enter>
        <Enter delay={134}><Neg size={22}>单位犯罪≠成员间·单位与成员间的共同犯罪</Neg></Enter>
        <Enter delay={144} style={{fontSize: 21, fontWeight: 800}}>单位之间 · 单位与外部自然人 → 可以成立共同犯罪</Enter>
      </div>
    </div>
  </Shell>
);
