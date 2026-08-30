import {Ban, Castle, Gavel, GraduationCap, Users} from 'lucide-react';
import {Chip, C, Dash, Enter, GateTitle, LabelBlock, Neg, Shell, SoftHi, Stamp, ThinU} from './kit';

export const UnitCrossingRulesScene = () => (
  <Shell code="05" title="串线规则·处罚·单位没了">
    <div data-layout="crossing-penalty-dissolve-board" data-visual-anchor="boundary" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="crossing-redline-pair,penalty-dissolve-split" data-focal-rule="crossing-to-individual-crime-only-from-pure-natural-person-crimes" data-focal-channels="icon,contrast,enclosure,connector" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="crossing-allowed" style={{position: 'absolute', left: 0, top: 0, width: 876, height: 330, backgroundColor: C.permitSoft, border: `4px solid ${C.permit}`, borderRadius: 12, padding: '14px 20px'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <LabelBlock size={26} color={C.permit}>允许串线 · 单位实施纯正自然人犯罪</LabelBlock>
        </Enter>
        <Enter delay={18} style={{marginTop: 10, fontSize: 22, fontWeight: 900}}>直接追究<ThinU>直接责任人</ThinU>的个人犯罪</Enter>
        <Enter delay={30} style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Chip style={{fontSize: 20, whiteSpace: 'normal'}}>单位决议盗电 → 直接责任人＝盗窃罪</Chip>
          <Chip style={{fontSize: 20, whiteSpace: 'normal'}}>单位贷款诈骗 → 直接责任人＝贷款诈骗罪（2011·12）</Chip>
          <Chip style={{fontSize: 20, whiteSpace: 'normal'}}>单位帮助自然人 → 直接责任人＝帮助犯（化工厂案）</Chip>
        </Enter>
      </div>

      <div data-final-knowledge="crossing-forbidden" style={{position: 'absolute', left: 900, top: 0, width: 876, height: 330, backgroundColor: C.denySoft, border: `4px solid ${C.deny}`, borderRadius: 12, padding: '14px 20px'}}>
        <Enter delay={12} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Ban size={26} color={C.deny} />
          <LabelBlock size={26} color={C.deny}>禁止串线 · 不纯正单位犯罪未达标</LabelBlock>
        </Enter>
        <Enter delay={26} style={{marginTop: 10, fontSize: 22, fontWeight: 900}}>未达单位定罪数额 → <ThinU>也不能</ThinU>定直接责任人的个人犯罪</Enter>
        <div style={{marginTop: 12, border: `3px dashed ${C.deny}`, borderRadius: 8, padding: '10px 14px'}}>
          <Enter delay={40} style={{fontSize: 21, fontWeight: 700, color: C.inkSoft}}>走私普通货物：甲单位 15万（单位标准20万·个人标准10万）→ 单位不构成·也不追个人（2019）</Enter>
        </div>
        <Enter delay={52} style={{marginTop: 12}}><SoftHi style={{fontSize: 22}}>红线规则：单位与个人标准独立·不能从单位串线到个人</SoftHi></Enter>
      </div>

      <div data-final-knowledge="penalty-split" style={{position: 'absolute', left: 0, top: 354, width: 876, height: 236, backgroundColor: C.badge, border: `3px solid ${C.brass}`, borderRadius: 12, padding: '14px 20px'}}>
        <Enter delay={62} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Gavel size={26} color={C.brass} />
          <LabelBlock size={25} color={C.brass}>处罚 · 原则双罚制</LabelBlock>
        </Enter>
        <Enter delay={74} style={{marginTop: 10, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>既罚单位·也罚个人（主管人员＋直接责任人）；个人只罚<ThinU>参与犯罪</ThinU>的人</Enter>
        <Enter delay={86} style={{marginTop: 8}}><Chip tone="brass" style={{fontSize: 20, whiteSpace: 'normal'}}>对单位只能判罚金——不能没收财产（2010·53）</Chip></Enter>
        <Enter delay={98} style={{marginTop: 8}}><Chip tone="deny" style={{fontSize: 20, whiteSpace: 'normal'}}>例外单罚制：只罚个人——处罚单位会株连无辜职员</Chip></Enter>
      </div>

      <div data-final-knowledge="dissolve-rows" style={{position: 'absolute', left: 900, top: 354, width: 876, height: 236, backgroundColor: C.badge, border: `3px solid ${C.board}`, borderRadius: 12, padding: '14px 20px'}}>
        <Enter delay={68} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Castle size={26} color={C.board} />
          <LabelBlock ink size={25}>单位犯罪后「没了」</LabelBlock>
        </Enter>
        <div style={{marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10}}>
          <div data-final-knowledge="dissolve-true-row">
            <Enter delay={82} style={{display: 'flex', alignItems: 'center', gap: 10, border: `3px solid ${C.deny}`, borderRadius: 8, padding: '8px 12px'}}>
              <Chip tone="deny" style={{fontSize: 20}}>真没了</Chip>
              <span style={{fontSize: 20, fontWeight: 700, color: C.inkSoft}}>撤销·注销·吊照·破产 →</span>
              <span style={{fontSize: 20, fontWeight: 900}}>直接追直接责任人（2015·54 D）</span>
            </Enter>
          </div>
          <div data-final-knowledge="dissolve-false-row">
            <Enter delay={94} style={{display: 'flex', alignItems: 'center', gap: 10, border: `3px solid ${C.permit}`, borderRadius: 8, padding: '8px 12px'}}>
              <Chip tone="permit" style={{fontSize: 20}}>假没了</Chip>
              <span style={{fontSize: 20, fontWeight: 700, color: C.inkSoft}}>被合并入新单位 →</span>
              <span style={{fontSize: 20, fontWeight: 900}}>仍追原单位的单位犯罪（2018）</span>
            </Enter>
          </div>
        </div>
      </div>

      <div data-final-knowledge="crossing-floor" style={{position: 'absolute', left: 0, right: 0, top: 614, bottom: 0, backgroundColor: C.panel, border: `3px double ${C.ink}`, borderRadius: 12, display: 'flex', alignItems: 'center', gap: 16, padding: '0 22px'}}>
        <Enter delay={106} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={26} color={C.deny} />
          <LabelBlock size={24}>2015·卷二·54 速判</LabelBlock>
        </Enter>
        <Enter delay={118} style={{fontSize: 21, fontWeight: 800}}>A 对（既遂标准应相同）· B 错（自然人构成犯罪）· C 错（个人意志→个人犯罪）· D 对（吊照＝真没了）</Enter>
      </div>
    </div>
  </Shell>
);
