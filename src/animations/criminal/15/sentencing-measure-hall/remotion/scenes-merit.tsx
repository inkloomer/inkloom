import {Award, Ban, GraduationCap, Lightbulb, Search, Zap} from 'lucide-react';
import {Chip, C, Enter, LabelBlock, Neg, Shell, SoftHi, ThinU} from './kit';

export const MeritCaptureDeskScene = () => (
  <Shell code="04" title="立功·五种功与边界">
    <div data-layout="merit-boundary-desk" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="merit-five-ways,boundary-negation-rows" data-focal-rule="merit-saves-resources-and-needs-new-post-crime-information" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Award size={130} color={C.ink} style={{position: 'absolute', right: 30, top: 130, opacity: 0.08}} />
      <div data-final-knowledge="five-ways-board" style={{position: 'absolute', left: 0, top: 0, width: 876, height: 330, backgroundColor: C.white, border: `4px solid ${C.calm}`, borderRadius: 8, padding: '14px 20px'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Award size={24} color={C.calm} />
          <LabelBlock size={23} color={C.calm}>五种立功方式 · 1-4 节约司法资源·5 利国利社</LabelBlock>
        </Enter>
        <div style={{marginTop: 10, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8}}>
          <div data-final-knowledge="way-expose"><Enter delay={20} style={{border: `3px solid ${C.calm}`, borderRadius: 8, padding: '8px 10px', display: 'flex', alignItems: 'center', gap: 8}}><Zap size={20} color={C.calm} style={{flexShrink: 0}} /><span style={{fontSize: 18, fontWeight: 800}}>揭发他人犯罪</span></Enter></div>
          <div data-final-knowledge="way-capture"><Enter delay={28} style={{border: `3px solid ${C.calm}`, borderRadius: 8, padding: '8px 10px', display: 'flex', alignItems: 'center', gap: 8}}><Search size={20} color={C.calm} style={{flexShrink: 0}} /><span style={{fontSize: 18, fontWeight: 800 }}>协助抓捕犯罪人</span></Enter></div>
          <div data-final-knowledge="way-stop"><Enter delay={36} style={{border: `3px solid ${C.calm}`, borderRadius: 8, padding: '8px 10px', display: 'flex', alignItems: 'center', gap: 8}}><Ban size={20} color={C.calm} style={{flexShrink: 0}} /><span style={{fontSize: 18, fontWeight: 800 }}>阻止他人犯罪</span></Enter></div>
          <div data-final-knowledge="way-clue"><Enter delay={44} style={{border: `3px solid ${C.calm}`, borderRadius: 8, padding: '8px 10px', display: 'flex', alignItems: 'center', gap: 8}}><Lightbulb size={20} color={C.calm} style={{flexShrink: 0}} /><span style={{fontSize: 18, fontWeight: 800 }}>提供犯罪线索（须未掌握·查证属实）</span></Enter></div>
          <div data-final-knowledge="way-contribute" style={{gridColumn: 'span 2'}}><Enter delay={52} style={{border: `3px solid ${C.turmeric}`, borderRadius: 8, padding: '8px 10px', display: 'flex', alignItems: 'center', gap: 8}}><GraduationCap size={20} color={C.turmeric} style={{flexShrink: 0}} /><span style={{fontSize: 18, fontWeight: 800 }}>重大贡献：发明专利（独立·为主·不含实用新型外观）·舍己救人·抢险抗灾——到案后含服刑期间</span></Enter></div>
        </div>
        <Enter delay={62} style={{marginTop: 8, fontSize: 18, fontWeight: 700, color: C.inkSoft }}>1-4 项时间：多数说＝<ThinU>到案后</ThinU>·少数说＝犯罪后</Enter>
      </div>

      <div data-final-knowledge="boundary-board" style={{position: 'absolute', left: 900, top: 0, width: 876, height: 330, backgroundColor: C.white, border: `4px solid ${C.madder}`, borderRadius: 8, padding: '14px 20px'}}>
        <Enter delay={12}><LabelBlock size={23} color={C.madder}>边界 · 哪些不算</LabelBlock></Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6}}>
          <div data-final-knowledge="bound-noncrime"><Enter delay={24} style={{display: 'flex', alignItems: 'center', gap: 8}}><Neg size={19} /><span style={{fontSize: 18, fontWeight: 700 }}>揭发正当防卫·紧急避险·轻微伤——非「制造违法事实」意义的犯罪（13岁强奸∈·告诉才处理∉节约不了资源）</span></Enter></div>
          <div data-final-knowledge="bound-comrade"><Enter delay={34} style={{display: 'flex', alignItems: 'center', gap: 8}}><Neg size={19} /><span style={{fontSize: 18, fontWeight: 700 }}>揭发同案犯的共同犯罪罪行＝自首的供述要件·∉立功；同案犯的其他罪∈·协助抓捕同案犯∈</span></Enter></div>
          <div data-final-knowledge="bound-basic-info"><Enter delay={44} style={{display: 'flex', alignItems: 'center', gap: 8}}><Neg size={19} /><span style={{fontSize: 18, fontWeight: 700 }}>提供姓名住址体貌·犯罪前中掌握的联络方式（投名状案∉）——须犯罪后新信息</span></Enter></div>
          <div data-final-knowledge="bound-source"><Enter delay={54} style={{display: 'flex', alignItems: 'center', gap: 8}}><Neg size={19} /><span style={{fontSize: 18, fontWeight: 700 }}>暴力胁迫贿买（向国家工作人员）获取线索∉·制造犯罪∉·亲友羁押后转告∉·本人职务线索∉；羁押前亲友告知∈·同监犯线索∈</span></Enter></div>
        </div>
      </div>

      <div data-final-knowledge="duality-board" style={{position: 'absolute', left: 0, right: 0, top: 354, bottom: 0, backgroundColor: C.white, border: `3px double ${C.ink}`, borderRadius: 8, padding: '14px 22px'}}>
        <Enter delay={70}><LabelBlock ink size={23}>出卖兄弟的账本 · 自首与立功的竞合/并列</LabelBlock></Enter>
        <div style={{marginTop: 10, display: 'flex', gap: 14}}>
          <Enter delay={82} style={{flex: 1, border: `3px solid ${C.indigo}`, borderRadius: 8, padding: '8px 12px'}}>
            <div style={{fontSize: 18, fontWeight: 900 }}>对向犯 → 竞合·择一有利（一般认定自首）</div>
            <div style={{marginTop: 4, fontSize: 17, fontWeight: 700, color: C.inkSoft }}>行贿供受贿·购枪供卖家：必须供出才完整供述→一件事两重身份（2019·2023）</div>
          </Enter>
          <Enter delay={94} style={{flex: 1, border: `3px solid ${C.calm}`, borderRadius: 8, padding: '8px 12px'}}>
            <div style={{fontSize: 18, fontWeight: 900 }}>其他犯罪 → 并列·同时享受</div>
            <div style={{marginTop: 4, fontSize: 17, fontWeight: 700, color: C.inkSoft }}>持毒供卖家·贩毒供上家：不供也成立→多干一件事（2023）</div>
          </Enter>
        </div>
      </div>
    </div>
  </Shell>
);
