import type {ReactNode} from 'react';
import {Ban, Camera, CircleCheck, Eye, EyeOff, House, Megaphone, Swords, Users} from 'lucide-react';
import {C, Enter, Neg, FixStamp, FrameLabel, GlowHi, PlateChip, Shell, ThinU, Totem} from './kit';

const SoftHi = ({children}: {children: ReactNode}) => (
  <span style={{backgroundColor: C.safelightAmberSoft, padding: '2px 8px', borderRadius: 3, fontWeight: 900}}>{children}</span>
);

export const UnilateralLookoutDebateScene = () => (
  <Shell code="03" title="片面望风：无异常也算帮助吗">
    <div data-layout="lookout-balance-stand" data-visual-anchor="boundary" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="lookout-debate-bay,actual-effect-threshold" data-focal-rule="lookout-help-needs-actual-effect" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><House size={250} color={C.mirrorSilver} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="lookout-head" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 104, backgroundColor: C.panel, border: `3px solid ${C.mirrorSilver}`, borderRadius: 5, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 16}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <House size={26} color={C.mirrorSilver} />
          <FrameLabel size={22}>案情</FrameLabel>
        </Enter>
        <Enter delay={14} style={{fontSize: 20, fontWeight: 800}}>乙<SoftHi>暗中</SoftHi>为甲入户盗窃望风，望风期间<Neg size={19}>无任何异常</Neg> → 乙是否构成片面的帮助犯？</Enter>
      </div>

      <div style={{position: 'absolute', left: 0, top: 120, width: 1776, height: 416, display: 'flex', gap: 16}}>
        <div data-final-knowledge="minority-bay" style={{flex: 1, backgroundColor: C.panel, border: `3px solid ${C.safelightAmber}`, borderRadius: 5, padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={24} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <Eye size={26} color={C.safelightAmber} />
            <FrameLabel size={22} color={C.safelightAmber}>少数说 · 构成</FrameLabel>
          </Enter>
          <Enter delay={36} style={{fontSize: 20, fontWeight: 800}}>望风期间虽无异常，但主人<ThinU color={C.safelightAmber}>可能回家</ThinU></Enter>
          <Enter delay={48} style={{fontSize: 19, fontWeight: 700}}>→ 具有<RouteHiInline>可能的</RouteHiInline>物理性帮助作用</Enter>
          <span style={{marginTop: 'auto', display: 'inline-flex'}}><FixStamp delay={60} tone="green">构成片面的帮助犯</FixStamp></span>
        </div>
        <div data-final-knowledge="majority-bay" style={{flex: 1, backgroundColor: C.panel, border: `3px solid ${C.developRed}`, borderRadius: 5, padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={30} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <EyeOff size={26} color={C.developRed} />
            <FrameLabel size={22} color={C.developRed}>多数说 · 不构成</FrameLabel>
          </Enter>
          <Enter delay={42} style={{fontSize: 20, fontWeight: 800}}>物理性帮助行为必须发挥<ThinU color={C.developRed}>实际</ThinU>的作用</Enter>
          <Enter delay={54} style={{fontSize: 19, fontWeight: 700}}>→ 无异常时<Neg size={18}>既无物理性</Neg>也<Neg size={18}>无心理性</Neg>帮助作用</Enter>
          <span style={{marginTop: 'auto', display: 'inline-flex'}}><FixStamp delay={66} tone="red">不构成片面的帮助犯</FixStamp></span>
        </div>
      </div>

      <div data-final-knowledge="threshold-strip" style={{position: 'absolute', left: 0, top: 552, right: 0, bottom: 0, backgroundColor: C.panel, border: `3px solid ${C.mirrorSilver}`, borderRadius: 5, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 16}}>
        <Enter delay={78}><CircleCheck size={24} color={C.fixerGreen} /></Enter>
        <Enter delay={86} style={{fontSize: 19, fontWeight: 800}}>分水岭：帮助作用是「<SoftHi>实际发挥</SoftHi>」还是「<GlowHi style={{fontSize: 17}}>停留于可能</GlowHi>」——多数说要求实际效果</Enter>
      </div>
    </div>
  </Shell>
);

const RouteHiInline = ({children}: {children: ReactNode}) => (
  <span style={{backgroundColor: C.safelightAmberSoft, padding: '1px 7px', borderRadius: 3, fontWeight: 900}}>{children}</span>
);

export const UnilateralInstigationCaseScene = () => (
  <Shell code="04" title="片面教唆：通奸照片案">
    <div data-layout="instigation-photo-lane" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="photo-planted-lane,theory-verdict-rows" data-focal-rule="secret-instigation-sparks-crime-unseen" data-focal-channels="icon,connector,contrast,enclosure" style={{position: 'absolute', inset: 0}}>
      <Totem><Camera size={250} color={C.developRed} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="case-lane" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 118, backgroundColor: C.panel, border: `3px solid ${C.mirrorSilver}`, borderRadius: 5, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 16}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Camera size={26} color={C.developRed} />
          <FrameLabel size={22} color={C.developRed}>片面教唆 · 案情</FrameLabel>
        </Enter>
        <Enter delay={14} style={{fontSize: 20, fontWeight: 800}}>甲<SoftHi>偷偷</SoftHi>将乙的妻子与丙通奸的照片放在乙路过的地方 → 乙偶然发现，以为是丙弄丢的，火冒三丈<ThinU color={C.developRed}>杀了丙</ThinU></Enter>
        <Enter delay={26}><EyeOff size={24} color={C.inkSoft} /></Enter>
      </div>

      <div data-final-knowledge="affirmation-row" style={{position: 'absolute', left: 0, top: 134, width: 1776, height: 200, backgroundColor: C.panel, border: `3px solid ${C.fixerGreen}`, borderRadius: 5, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 10}}>
        <Enter delay={34} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Megaphone size={26} color={C.fixerGreen} />
          <FrameLabel size={22} color={C.fixerGreen}>肯定说</FrameLabel>
        </Enter>
        <Enter delay={46} style={{fontSize: 19, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 10}}>
          <PlateChip tone="green" style={{fontSize: 17}}>甲＝片面的教唆犯</PlateChip>
          <span>对实行方（乙）的犯罪承担教唆责任</span>
        </Enter>
        <Enter delay={56} style={{fontSize: 19, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 10}}>
          <Users size={22} color={C.mirrorSilver} />
          <PlateChip tone="silver" style={{fontSize: 17}}>乙＝单独犯罪</PlateChip>
          <span>此处的共同犯罪属于<RouteHiInline>单向性</RouteHiInline>构成</span>
        </Enter>
      </div>

      <div data-final-knowledge="negation-row" style={{position: 'absolute', left: 0, top: 350, width: 1776, height: 190, backgroundColor: C.panel, border: `3px solid ${C.developRed}`, borderRadius: 5, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 10}}>
        <Enter delay={66} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Ban size={26} color={C.developRed} />
          <FrameLabel size={22} color={C.developRed}>否定说</FrameLabel>
        </Enter>
        <Enter delay={78} style={{fontSize: 19, fontWeight: 800}}>教唆方<Neg size={18}>不构成</Neg>片面的教唆犯，应单独处理</Enter>
        <Enter delay={88} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft, marginTop: 'auto'}}>（当今否定说也转而承认肯定说的结论；观点展示时仍需写出本说）</Enter>
      </div>

      <div data-final-knowledge="contrast-strip" style={{position: 'absolute', left: 0, top: 556, right: 0, bottom: 0, backgroundColor: C.panel, border: `3px dashed ${C.safelightAmber}`, borderRadius: 5, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 14}}>
        <Enter delay={96} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Swords size={24} color={C.safelightAmber} />
          <FrameLabel size={21} color={C.safelightAmber}>两说落点</FrameLabel>
        </Enter>
        <Enter delay={104} style={{fontSize: 19, fontWeight: 800}}>分歧只在<SoftHi>暗中教唆的甲</SoftHi>：肯定说让他担片面教唆之责；否定说让他单独评价——乙始终构成单独的故意杀人罪</Enter>
      </div>
    </div>
  </Shell>
);
