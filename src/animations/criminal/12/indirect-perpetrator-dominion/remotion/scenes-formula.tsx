import type {ReactNode} from 'react';
import {Anchor, BadgeCheck, Ban, Brain, Hand, Megaphone, Wind} from 'lucide-react';
import {C, Chip, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp, ThinU} from './kit';

const Totem = ({children}: {children: ReactNode}) => <span style={{position: 'absolute', right: -38, bottom: -58, opacity: 0.08, display: 'inline-flex', pointerEvents: 'none'}}>{children}</span>;

export const DominionFormulaScene = () => (
  <Shell code="01" title="间接正犯·引起与支配">
    <div data-layout="dominion-formula-lane" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="cause-then-dominate-lane,subjective-intent-lock" data-focal-rule="dominion-plus-causation-makes-indirect-perpetrator" data-focal-channels="icon,connector,contrast,enclosure" style={{position: 'absolute', inset: 0}}>
      <Totem><Wind size={250} color={C.lineIndigo} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="formula-lane" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 190, display: 'flex', alignItems: 'stretch', gap: 0}}>
        <div style={{flex: 1, backgroundColor: C.paper, border: `3px solid ${C.kiteJade}`, borderRadius: 8, padding: '12px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8}}>
          <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <Megaphone size={28} color={C.kiteJade} />
            <span style={{fontSize: 26, fontWeight: 950, color: C.kiteJade}}>教唆犯</span>
          </Enter>
          <Enter delay={12} style={{fontSize: 20, fontWeight: 800}}>= <SoftHi style={{fontSize: 19}}>引起</SoftHi>他人制造违法事实</Enter>
        </div>
        <div style={{flex: 1.2, backgroundColor: C.paper, border: `3px solid ${C.lineIndigo}`, borderRadius: 8, padding: '12px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8}}>
          <Enter delay={18} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <Anchor size={28} color={C.lineIndigo} />
            <span style={{fontSize: 26, fontWeight: 950, color: C.lineIndigo}}>间接正犯</span>
          </Enter>
          <Enter delay={28} style={{fontSize: 20, fontWeight: 800}}>= 引起 + <ThinU color={C.lineIndigo}>支配</ThinU>（对他人有支配力）</Enter>
        </div>
      </div>

      <div data-final-knowledge="elements-board" style={{position: 'absolute', left: 0, top: 206, width: 876, height: 230, backgroundColor: C.paper, border: `3px solid ${C.kiteJade}`, borderRadius: 8, padding: '12px 18px'}}>
        <Enter delay={38}><LabelBlock size={23} color={C.kiteJade}>成立要件</LabelBlock></Enter>
        <div style={{marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={50} style={{fontSize: 20, fontWeight: 800}}>客观要件＝<SoftHi style={{fontSize: 19}}>引起 ＋ 支配</SoftHi></Enter>
          <Enter delay={62} style={{fontSize: 20, fontWeight: 800}}>主观要件＝<Chip tone="jade" style={{fontSize: 18}}>故意</Chip></Enter>
        </div>
      </div>

      <div data-final-knowledge="subjective-board" style={{position: 'absolute', left: 900, top: 206, width: 876, height: 230, backgroundColor: C.paper, border: `3px solid ${C.lineIndigo}`, borderRadius: 8, padding: '12px 18px'}}>
        <Enter delay={44} style={{display: 'flex', alignItems: 'center', gap: 8}}>
          <Brain size={22} color={C.lineIndigo} />
          <LabelBlock size={22} color={C.lineIndigo}>主观要件 · 只能是故意犯罪</LabelBlock>
        </Enter>
        <Enter delay={56} style={{marginTop: 8, fontSize: 18, fontWeight: 700, color: C.inkSoft}}>「指使·利用·支配」这些行为本身只能是故意为之</Enter>
        <Enter delay={68} style={{marginTop: 6}}><Neg size={18}>双方均疏忽大意 → 各自医疗事故罪，绝无"医疗事故罪的间接正犯"</Neg></Enter>
      </div>

      <div data-final-knowledge="common-ground-strip" style={{position: 'absolute', left: 0, right: 0, top: 452, bottom: 0, backgroundColor: C.kiteJadeSoft, border: `3px solid ${C.kiteJade}`, borderRadius: 8, padding: '12px 22px', display: 'flex', alignItems: 'center', gap: 16}}>
        <Enter delay={80}><LabelBlock ink size={23}>与教唆犯的相同点</LabelBlock></Enter>
        <Enter delay={90} style={{fontSize: 20, fontWeight: 800}}>二者都<SoftHi style={{fontSize: 19}}>引起他人</SoftHi>制造违法事实</Enter>
        <Enter delay={100} style={{fontSize: 20, fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: 8}}><Ban size={20} color={C.alertRed} />分水岭只看一件事：有无<Stamp delay={106} tone="line">支配力</Stamp></Enter>
      </div>
    </div>
  </Shell>
);

export const DominionThreeSourcesScene = () => (
  <Shell code="02" title="支配力的三个来源">
    <div data-layout="three-source-fan" data-visual-anchor="concept-icon" data-text-treatments="chip,label-block,soft-highlight,thin-underline,stamp" data-visual-grammar="three-source-fan,tool-nature-band" data-focal-rule="dominion-flows-from-coercion-deceit-or-office" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><Anchor size={250} color={C.lineIndigo} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="sources-head-strip" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 100, backgroundColor: C.paper, border: `3px solid ${C.lineIndigo}`, borderRadius: 8, padding: '8px 18px', display: 'flex', alignItems: 'center', gap: 16}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Anchor size={24} color={C.lineIndigo} />
          <LabelBlock size={23} color={C.lineIndigo}>支配力三来源</LabelBlock>
        </Enter>
        <Enter delay={14} style={{fontSize: 20, fontWeight: 800}}>能支配他人者，主要经由<SoftHi style={{fontSize: 19}}>强制 · 欺骗 · 法定身份</SoftHi>三条通道</Enter>
      </div>

      <div style={{position: 'absolute', left: 0, top: 116, width: 1776, height: 380, display: 'flex', gap: 18}}>
        <div data-final-knowledge="coercion-card" style={{flex: 1, backgroundColor: C.paper, border: `3px solid ${C.alertRed}`, borderRadius: 8, padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={24} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, borderRadius: 8, backgroundColor: C.alertRedSoft}}>
              <Hand size={24} color={C.alertRed} />
            </span>
            <LabelBlock size={23} color={C.alertRed}>① 强制手段</LabelBlock>
          </Enter>
          <Enter delay={36} style={{fontSize: 19, fontWeight: 700}}>迫使无责任年龄者 · 强迫他人 · 强迫被害人自损</Enter>
          <Enter delay={46} style={{marginTop: 'auto'}}><Stamp delay={46} tone="alert">沦为犯罪工具</Stamp></Enter>
        </div>
        <div data-final-knowledge="deception-card" style={{flex: 1, backgroundColor: C.paper, border: `3px solid ${C.apricot}`, borderRadius: 8, padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={30} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, borderRadius: 8, backgroundColor: C.apricotSoft}}>
              <Megaphone size={24} color={C.apricot} />
            </span>
            <LabelBlock size={23} color={C.apricot}>② 欺骗手段</LabelBlock>
          </Enter>
          <Enter delay={42} style={{fontSize: 19, fontWeight: 700}}>引诱无责任能力者 · 利用过失 · 利用故意 · 骗被害人自损</Enter>
          <Enter delay={52} style={{marginTop: 'auto'}}><Stamp delay={52} tone="line">缺乏辨认能力</Stamp></Enter>
        </div>
        <div data-final-knowledge="identity-card" style={{flex: 1, backgroundColor: C.paper, border: `3px solid ${C.kiteJade}`, borderRadius: 8, padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={36} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, borderRadius: 8, backgroundColor: C.kiteJadeSoft}}>
              <BadgeCheck size={24} color={C.kiteJade} />
            </span>
            <LabelBlock size={23} color={C.kiteJade}>③ 法定身份</LabelBlock>
          </Enter>
          <Enter delay={48} style={{fontSize: 19, fontWeight: 700}}>有身份者利用无身份者 → 有身份者构成间接正犯</Enter>
          <Enter delay={58} style={{marginTop: 'auto'}}><Stamp delay={58} tone="jade">依照法律规定</Stamp></Enter>
        </div>
      </div>

      <div data-final-knowledge="tool-nature-strip" style={{position: 'absolute', left: 0, right: 0, top: 512, bottom: 0, backgroundColor: C.lineIndigoSoft, border: `3px solid ${C.lineIndigo}`, borderRadius: 8, padding: '12px 22px', display: 'flex', alignItems: 'center', gap: 16}}>
        <Enter delay={70}><LabelBlock ink size={23}>支配的本质</LabelBlock></Enter>
        <Enter delay={80} style={{fontSize: 20, fontWeight: 800}}>被支配者沦为<SoftHi style={{fontSize: 19}}>犯罪工具</SoftHi>——小孩 · 精神病患者 · 不知情者 · 被强迫者</Enter>
        <Enter delay={90} style={{fontSize: 19, fontWeight: 700, color: C.inkSoft}}>利用工具的人 = 间接正犯</Enter>
      </div>
    </div>
  </Shell>
);
