import {ShieldCheck} from 'lucide-react';
import {Chip, C, Enter, LabelBlock, Neg, Shell, ThinU} from './kit';

export const DefenseGateChecklistScene = () => (
  <Shell code="01" title="正当防卫·五道界桩">
    <div data-layout="five-stake-checklist-ring" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="five-stake-checklist,animal-four-cases" data-focal-rule="defense-justifies-only-apparent-violations-against-real-ongoing-attacks" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="system-position-strip" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 104, backgroundColor: C.goldSoft, border: `3px solid ${C.gold}`, borderRadius: 10, display: 'flex', alignItems: 'center', gap: 16, padding: '0 22px'}}>
        <Enter delay={6}><LabelBlock ink size={25}>体系地位（四星）</LabelBlock></Enter>
        <Enter delay={18} style={{fontSize: 22, fontWeight: 800, color: C.inkSoft}}>正当防卫是排除违法事由→先要有<ThinU>违法性表面特征</ThinU>；躲闪·合法追赶（2012·7）不是危害行为·无需防卫论证</Enter>
      </div>

      <div style={{position: 'absolute', left: 0, top: 128, width: 876}}>
        <div data-final-knowledge="stake-cause"><Enter delay={26} style={{border: `3px solid ${C.vermilion}`, borderRadius: 10, backgroundColor: C.white, padding: '10px 16px', marginBottom: 10}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 10}}><Chip tone="vermilion" style={{fontSize: 21}}>① 起因</Chip><span style={{fontSize: 21, fontWeight: 800}}>不法性·客观性·现实性</span></div>
          <div style={{marginTop: 6, fontSize: 19, fontWeight: 700, color: C.inkSoft}}>仅限人的行为（山洪·地震·野狗＝单纯危险→只能避险）；防卫人不限被害人；须紧急性——来不及公力救济</div>
        </Enter></div>
        <div data-final-knowledge="stake-time"><Enter delay={36} style={{border: `3px solid ${C.celadon}`, borderRadius: 10, backgroundColor: C.white, padding: '10px 16px', marginBottom: 10}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 10}}><Chip tone="celadon" style={{fontSize: 21}}>② 时间</Chip><span style={{fontSize: 21, fontWeight: 800}}>不法侵害正在进行（事后防卫＝不适时）</span></div>
        </Enter></div>
        <div data-final-knowledge="stake-mind"><Enter delay={46} style={{border: `3px solid ${C.gold}`, borderRadius: 10, backgroundColor: C.white, padding: '10px 16px', marginBottom: 10}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 10}}><Chip tone="gold" style={{fontSize: 21}}>③ 意思</Chip><span style={{fontSize: 21, fontWeight: 800}}>防卫认识（偶然防卫·五星级）</span></div>
        </Enter></div>
        <div data-final-knowledge="stake-object"><Enter delay={56} style={{border: `3px solid ${C.celadon}`, borderRadius: 10, backgroundColor: C.white, padding: '10px 16px', marginBottom: 10}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 10}}><Chip tone="celadon" style={{fontSize: 21}}>④ 对象</Chip><span style={{fontSize: 21, fontWeight: 800}}>针对不法侵害人本人</span></div>
        </Enter></div>
        <div data-final-knowledge="stake-limit"><Enter delay={66} style={{border: `3px solid ${C.vermilion}`, borderRadius: 10, backgroundColor: C.white, padding: '10px 16px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 10}}><Chip tone="vermilion" style={{fontSize: 21}}>⑤ 限度</Chip><span style={{fontSize: 21, fontWeight: 800}}>必要性＋相当性（防卫过当）</span></div>
        </Enter></div>
      </div>

      <div data-final-knowledge="animal-four-cases" style={{position: 'absolute', left: 900, top: 128, width: 876, height: 300, backgroundColor: C.white, border: `3px solid ${C.night}`, borderRadius: 10, padding: '14px 20px'}}>
        <Enter delay={40}><LabelBlock size={24} color={C.night}>动物侵害四情形 · 一图分清防与避</LabelBlock></Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={54}><Chip tone="vermilion" style={{fontSize: 19, whiteSpace: 'normal'}}>主人唆使狗咬人 → 故意不法侵害 → 反击＝正当防卫</Chip></Enter>
          <Enter delay={66}><Chip tone="vermilion" style={{fontSize: 19, whiteSpace: 'normal'}}>主人管理过失狗咬人 → 过失不法侵害 → 反击＝正当防卫</Chip></Enter>
          <Enter delay={78}><Chip tone="celadon" style={{fontSize: 19, whiteSpace: 'normal'}}>主人无过失（不可抗力）→ 单纯危险 → 反击＝紧急避险</Chip></Enter>
          <Enter delay={90}><Chip tone="celadon" style={{fontSize: 19, whiteSpace: 'normal'}}>无主野狗咬人 → 单纯危险 → 反击＝紧急避险</Chip></Enter>
        </div>
      </div>

      <div data-final-knowledge="imagined-defense-board" style={{position: 'absolute', left: 900, top: 452, width: 876, height: 292, backgroundColor: C.vermilionSoft, border: `3px dashed ${C.vermilion}`, borderRadius: 10, padding: '14px 20px'}}>
        <Enter delay={50}><LabelBlock size={24} color={C.vermilion}>假想防卫 · 好心办坏事（幽会被打案）</LabelBlock></Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={64}><Neg size={20}>绝不可能成立故意犯罪（否则就不是假想防卫）</Neg></Enter>
          <Enter delay={76}><Chip style={{fontSize: 20, whiteSpace: 'normal'}}>有过失 → 过失犯罪</Chip></Enter>
          <Enter delay={88}><Chip style={{fontSize: 20, whiteSpace: 'normal'}}>无过失 → 意外事件</Chip></Enter>
        </div>
        <Enter delay={100} style={{marginTop: 10}}><ShieldCheck size={22} color={C.vermilion} style={{flexShrink: 0, verticalAlign: '-4px'}} /><span style={{fontSize: 19, fontWeight: 700, color: C.inkSoft}}> 客观要件修饰语：故意·过失·无责任年龄·无责任能力的不法侵害均可正当防卫（多数说；先躲避·严重危及人身可直接反击）</span></Enter>
      </div>
    </div>
  </Shell>
);
