import type {ReactNode} from 'react';
import {Ban, Eye, EyeOff, Hand, Megaphone, Swords, Users} from 'lucide-react';
import {C, Enter, Neg, FixStamp, FrameLabel, GlowHi, PlateChip, Shell, ThinU, Totem} from './kit';

const SoftHi = ({children}: {children: ReactNode}) => (
  <span style={{backgroundColor: C.safelightAmberSoft, padding: '2px 8px', borderRadius: 3, fontWeight: 900}}>{children}</span>
);

export const UnilateralOverviewScene = () => (
  <Shell code="01" title="片面共犯：单方面构成的共同犯罪">
    <div data-layout="mirror-overview-split" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="mutual-vs-unilateral-split,three-type-band" data-focal-rule="unilateral-complicity-needs-one-sided-awareness" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><EyeOff size={250} color={C.mirrorSilver} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="overview-head" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 100, backgroundColor: C.panel, border: `3px solid ${C.mirrorSilver}`, borderRadius: 5, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 18}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Users size={26} color={C.mirrorSilver} />
          <FrameLabel size={23}>正常共同犯罪</FrameLabel>
        </Enter>
        <Enter delay={12} style={{fontSize: 21, fontWeight: 800}}>构成要件＝<SoftHi>相互构成</SoftHi>（彼此知情）</Enter>
        <Enter delay={22} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <EyeOff size={26} color={C.developRed} />
          <FrameLabel size={23} color={C.developRed}>片面的共同犯罪</FrameLabel>
        </Enter>
        <Enter delay={32} style={{fontSize: 21, fontWeight: 800}}>＝<ThinU color={C.developRed}>单方面</ThinU>构成共同犯罪</Enter>
      </div>

      <div data-final-knowledge="mutual-split" style={{position: 'absolute', left: 0, top: 116, width: 1776, height: 320, display: 'flex', gap: 16}}>
        <Enter delay={40} style={{flex: 1, backgroundColor: C.panel, border: `3px solid ${C.mirrorSilver}`, borderRadius: 5, padding: '14px 20px', display: 'flex', flexDirection: 'column', gap: 11}}>
          <span style={{display: 'flex', alignItems: 'center', gap: 10}}><Eye size={26} color={C.mirrorSilver} /><FrameLabel size={22}>相互构成</FrameLabel></span>
          <span style={{fontSize: 20, fontWeight: 800}}>双方都有参与意识 · 存在意思联络</span>
          <span style={{fontSize: 19, fontWeight: 700, color: C.inkSoft}}>你知我，我知你，一起动手</span>
          <span style={{fontSize: 18, fontWeight: 700, backgroundColor: C.mirrorSilverSoft, border: `2px solid ${C.mirrorSilver}`, borderRadius: 4, padding: '7px 12px', display: 'inline-flex', alignItems: 'center', gap: 8}}><Users size={20} color={C.mirrorSilver} />共同正犯 · 承继共犯皆属此类</span>
          <span style={{marginTop: 'auto', display: 'inline-flex'}}><FixStamp delay={56} tone="silver">彼此知情</FixStamp></span>
        </Enter>
        <Enter delay={52} style={{flex: 1, backgroundColor: C.panel, border: `3px solid ${C.developRed}`, borderRadius: 5, padding: '14px 20px', display: 'flex', flexDirection: 'column', gap: 11}}>
          <span style={{display: 'flex', alignItems: 'center', gap: 10}}><EyeOff size={26} color={C.developRed} /><FrameLabel size={22} color={C.developRed}>片面构成</FrameLabel></span>
          <span style={{fontSize: 20, fontWeight: 800}}>一方暗中参与，实行方<Neg size={19}>不知情</Neg></span>
          <span style={{fontSize: 19, fontWeight: 700, color: C.inkSoft}}>我知你并暗中使劲；你不知我</span>
          <span style={{fontSize: 18, fontWeight: 700, backgroundColor: C.developRedSoft, border: `2px solid ${C.developRed}`, borderRadius: 4, padding: '7px 12px', display: 'inline-flex', alignItems: 'center', gap: 8}}><EyeOff size={20} color={C.developRed} />暗中帮助 · 暗中教唆 · 暗中实行</span>
          <span style={{marginTop: 'auto', display: 'inline-flex'}}><FixStamp delay={66} tone="red">单向知情</FixStamp></span>
        </Enter>
      </div>

      <div data-final-knowledge="three-type-band" style={{position: 'absolute', left: 0, top: 452, right: 0, bottom: 0, backgroundColor: C.panel, border: `3px solid ${C.safelightAmber}`, borderRadius: 5, padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 16}}>
        <Enter delay={78}><FrameLabel size={22} color={C.safelightAmber}>三种类型</FrameLabel></Enter>
        <Enter delay={88} style={{display: 'flex', alignItems: 'center', gap: 8, fontSize: 20, fontWeight: 800}}><Hand size={24} color={C.safelightAmber} />片面帮助</Enter>
        <Enter delay={96} style={{display: 'flex', alignItems: 'center', gap: 8, fontSize: 20, fontWeight: 800}}><Megaphone size={24} color={C.safelightAmber} />片面教唆</Enter>
        <Enter delay={104} style={{display: 'flex', alignItems: 'center', gap: 8, fontSize: 20, fontWeight: 800}}><Swords size={24} color={C.safelightAmber} />片面实行</Enter>
        <Enter delay={112} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft}}>每种类型都存在「肯定说 / 否定说」之争</Enter>
      </div>
    </div>
  </Shell>
);

export const UnilateralHelpCaseScene = () => (
  <Shell code="02" title="片面帮助：暗中绊倒案">
    <div data-layout="help-two-theory-lens" data-visual-anchor="role-pair" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="trip-case-board,affirmation-negation-lenses" data-focal-rule="secret-help-binds-or-exempts-the-helper" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><Hand size={250} color={C.safelightAmber} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="case-board" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 120, backgroundColor: C.panel, border: `3px solid ${C.mirrorSilver}`, borderRadius: 5, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 16}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <EyeOff size={26} color={C.safelightAmber} />
          <FrameLabel size={22} color={C.safelightAmber}>片面帮助 · 案情</FrameLabel>
        </Enter>
        <Enter delay={14} style={{fontSize: 20, fontWeight: 800}}>甲欲杀丙，见乙在追杀丙，便<SoftHi>暗中设置绳索将丙绊倒</SoftHi>（轻微伤）；乙顺利杀了丙，<ThinU color={C.developRed}>乙不知道甲帮了自己</ThinU></Enter>
      </div>

      <div data-final-knowledge="affirmation-lens" style={{position: 'absolute', left: 0, top: 136, width: 876, height: 400, backgroundColor: C.panel, border: `3px solid ${C.fixerGreen}`, borderRadius: 5, padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 11}}>
        <Enter delay={26} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Users size={26} color={C.fixerGreen} />
          <FrameLabel size={22} color={C.fixerGreen}>肯定说</FrameLabel>
        </Enter>
        <Enter delay={38} style={{fontSize: 19, fontWeight: 800}}>成立共同犯罪的条件：不要求相互有意思联络，不要求均有参与意识</Enter>
        <Enter delay={50} style={{fontSize: 19, fontWeight: 800}}>只要一方有参与意识 → 即可成立单方面的共同犯罪，并对另一方的违法事实负责</Enter>
        <Enter delay={62} style={{display: 'flex', gap: 10, marginTop: 'auto', flexWrap: 'wrap'}}>
          <PlateChip tone="green" style={{fontSize: 17}}>甲＝片面的帮助犯（对乙的违法事实负责）</PlateChip>
          <PlateChip tone="silver" style={{fontSize: 17}}>乙＝单独的故意杀人罪</PlateChip>
        </Enter>
      </div>

      <div data-final-knowledge="negation-lens" style={{position: 'absolute', left: 900, top: 136, width: 876, height: 400, backgroundColor: C.panel, border: `3px solid ${C.developRed}`, borderRadius: 5, padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 11}}>
        <Enter delay={32} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Ban size={26} color={C.developRed} />
          <FrameLabel size={22} color={C.developRed}>否定说</FrameLabel>
        </Enter>
        <Enter delay={44} style={{fontSize: 19, fontWeight: 800}}>成立共同犯罪的前提：必须有<Neg size={18}>相互</Neg>的参与意识（意思联络）</Enter>
        <Enter delay={56} style={{fontSize: 19, fontWeight: 800}}>暗中帮助方只对<Neg size={18}>自己</Neg>的行为负责 → 甲仅致丙轻微伤，不构成犯罪</Enter>
        <Enter delay={68} style={{display: 'flex', gap: 10, marginTop: 'auto', flexWrap: 'wrap'}}>
          <PlateChip tone="red" style={{fontSize: 17}}>甲＝不构成犯罪（只绊出轻微伤）</PlateChip>
          <PlateChip tone="silver" style={{fontSize: 17}}>乙＝单独的故意杀人罪</PlateChip>
        </Enter>
      </div>

      <div data-final-knowledge="status-strip" style={{position: 'absolute', left: 0, top: 552, right: 0, bottom: 0, backgroundColor: C.panel, border: `3px dashed ${C.safelightAmber}`, borderRadius: 5, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 16}}>
        <Enter delay={80} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Eye size={24} color={C.safelightAmber} />
          <FrameLabel size={21} color={C.safelightAmber}>观点现状</FrameLabel>
        </Enter>
        <Enter delay={90} style={{fontSize: 19, fontWeight: 700}}>否定说因「无罪结论不合理」，当今也转而<SoftHi>承认</SoftHi>肯定说的结论；但考试若考片面帮助犯的观点展示，仍需展示<ThinU color={C.safelightAmber}>否定说</ThinU></Enter>
      </div>
    </div>
  </Shell>
);
