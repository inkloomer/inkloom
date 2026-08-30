import {DoorOpen, Handshake, PhoneCall, Scale, Search, Zap} from 'lucide-react';
import {Chip, C, Enter, LabelBlock, Neg, Shell, SoftHi, ThinU, VatTitle} from './kit';

export const SurrenderForkDeskScene = () => (
  <Shell code="03" title="自首·自动投案的窗口">
    <div data-layout="surrender-window-desk" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="voluntary-window-ways,plain-quasi-telly-trio" data-focal-rule="surrender-is-voluntary-surrender-before-passive-capture-plus-truthful-account" data-focal-channels="icon,contrast,enclosure,connector" style={{position: 'absolute', inset: 0}}>
      <DoorOpen size={130} color={C.ink} style={{position: 'absolute', left: 24, top: 120, opacity: 0.08}} />
      <div data-final-knowledge="window-strip" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 92, backgroundColor: C.turmericSoft, border: `3px solid ${C.turmeric}`, borderRadius: 8, display: 'flex', alignItems: 'center', gap: 14, padding: '0 22px'}}>
        <Enter delay={6}><LabelBlock ink size={23}>投案时间窗＝犯罪成立后 → 被动归案前</LabelBlock></Enter>
        <Enter delay={18} style={{fontSize: 20, fontWeight: 700, color: C.inkSoft }}>司法机关是否已掌握≠影响窗口（2021）；杀人过程中放弃并投案＝自首＋中止并存</Enter>
      </div>

      <div data-final-knowledge="ways-board" style={{position: 'absolute', left: 0, top: 116, width: 1050, height: 380, backgroundColor: C.white, border: `4px solid ${C.indigo}`, borderRadius: 8, padding: '14px 20px'}}>
        <Enter delay={26}><LabelBlock size={23} color={C.indigo}>视为自动投案的方式</LabelBlock></Enter>
        <div style={{marginTop: 10, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8}}>
          <div data-final-knowledge="way-intercept"><Enter delay={38} style={{border: `3px solid ${C.indigo}`, borderRadius: 8, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 8}}>
            <Zap size={20} color={C.indigo} style={{flexShrink: 0}} />
            <span style={{fontSize: 18, fontWeight: 800 }}>准备去投案·投案途中被捕获</span>
          </Enter></div>
          <div data-final-knowledge="way-wait"><Enter delay={48} style={{border: `3px solid ${C.indigo}`, borderRadius: 8, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 8}}>
            <PhoneCall size={20} color={C.indigo} style={{flexShrink: 0}} />
            <span style={{fontSize: 18, fontWeight: 800 }}>明知他人报案·现场等待无拒捕（上门服务案∈）</span>
          </Enter></div>
          <div data-final-knowledge="way-suspicion"><Enter delay={58} style={{border: `3px solid ${C.indigo}`, borderRadius: 8, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 8}}>
            <Search size={20} color={C.indigo} style={{flexShrink: 0}} />
            <span style={{fontSize: 18, fontWeight: 800 }}>仅形迹可疑被盘问即交代（2017·9）</span>
          </Enter></div>
          <div data-final-knowledge="way-detention"><Enter delay={68} style={{border: `3px solid ${C.indigo}`, borderRadius: 8, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 8}}>
            <Handshake size={20} color={C.indigo} style={{flexShrink: 0}} />
            <span style={{fontSize: 18, fontWeight: 800 }}>行政·司法拘留期间交代未掌握罪行（嫖娼拘中供强奸∈）</span>
          </Enter></div>
          <div data-final-knowledge="way-deliver"><Enter delay={78} style={{border: `3px solid ${C.indigo}`, borderRadius: 8, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 8}}>
            <DoorOpen size={20} color={C.indigo} style={{flexShrink: 0}} />
            <span style={{fontSize: 18, fontWeight: 800 }}>送首：亲友送归案（捆绑押送∉）</span>
          </Enter></div>
          <div data-final-knowledge="way-target"><Enter delay={88} style={{border: `3px solid ${C.indigo}`, borderRadius: 8, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 8}}>
            <Scale size={20} color={C.indigo} style={{flexShrink: 0}} />
            <span style={{fontSize: 18, fontWeight: 800 }}>对象含单位·基层组织·被害人（告诉才处理向被害人承认∈）</span>
          </Enter></div>
        </div>
        <Enter delay={98} style={{marginTop: 10}}><Neg size={19}>人赃俱获时交代＝只能坦白；电话供述后不归案∉；彻底性到审判</Neg></Enter>
      </div>

      <div data-final-knowledge="truthful-quasi-board" style={{position: 'absolute', left: 1074, top: 116, width: 702, height: 380, backgroundColor: C.white, border: `4px solid ${C.mordant}`, borderRadius: 8, padding: '14px 18px'}}>
        <Enter delay={32}><LabelBlock size={22} color={C.mordant}>如实供述 + 准自首</LabelBlock></Enter>
        <Enter delay={44} style={{marginTop: 8, fontSize: 18, fontWeight: 700, color: C.inkSoft }}>诚实供述记忆即可·<ThinU>法律辩解不影响</ThinU>（辩称正当防卫·辩称过失∈）；只需定罪量刑事实·可分别认定·翻供撤销·一审判决前又供＝恢复</Enter>
        <Enter delay={58} style={{marginTop: 8, border: `3px solid ${C.turmeric}`, borderRadius: 8, padding: '8px 12px'}}>
          <div style={{fontSize: 18, fontWeight: 900 }}>准自首＝被强制措施＋供司法机关未掌握的 B 罪·须不同种</div>
          <div style={{marginTop: 4, fontSize: 17, fontWeight: 700, color: C.inkSoft }}>密切联系例外（选择·吸收·牵连：出售假币又购假币＝同种）；A罪不成立→供什么都成立准自首</div>
        </Enter>
        <Enter delay={72} style={{marginTop: 8, fontSize: 18, fontWeight: 700, color: C.inkSoft }}>数罪各算各账；单位：领导自首视为单位·直接责任人＝个人；逃跑又回来＝情形一脱逃自首/情形二恢复＋竞合</Enter>
      </div>
    </div>
  </Shell>
);
