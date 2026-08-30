import {ScrollText, ShieldCheck} from 'lucide-react';
import {Chip, C, Enter, LabelBlock, Shell} from './kit';

export const MatrixConsentRowScene = () => (
  <Shell code="05" title="反击矩阵·被害人承诺">
    <div data-layout="matrix-consent-split-board" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="counterattack-matrix-rows,consent-validity-fork" data-focal-rule="counter only unlawful pushes-consent survives only fact-mistake-free minds" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="counter-matrix-board" style={{position: 'absolute', left: 0, top: 0, width: 1050, height: 744, backgroundColor: C.white, border: `4px solid ${C.vermilion}`, borderRadius: 10, padding: '14px 20px'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <ShieldCheck size={26} color={C.vermilion} />
          <LabelBlock size={24} color={C.vermilion}>反击矩阵 · 对什么能反击？</LabelBlock>
        </Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={20} style={{border: `3px solid ${C.celadon}`, borderRadius: 8, padding: '8px 12px'}}>
            <span style={{fontSize: 19, fontWeight: 900, color: C.celadon}}>反击正当防卫 → </span><span style={{fontSize: 19, fontWeight: 700}}>不构成防卫＝故意犯罪（防卫非不法侵害）</span>
          </Enter>
          <Enter delay={32} style={{border: `3px solid ${C.celadon}`, borderRadius: 8, padding: '8px 12px'}}>
            <span style={{fontSize: 19, fontWeight: 900, color: C.celadon}}>反击紧急避险 → </span><span style={{fontSize: 19, fontWeight: 700}}>∉防卫·∉避险（住宅安宁＜身体健康）——属不法侵害</span>
          </Enter>
          <Enter delay={44} style={{border: `3px solid ${C.vermilion}`, borderRadius: 8, padding: '8px 12px'}}>
            <span style={{fontSize: 19, fontWeight: 900, color: C.vermilion}}>反击假想·事后·过当 → </span><span style={{fontSize: 19, fontWeight: 700}}>∈正当防卫（皆属不法侵害）</span>
          </Enter>
          <Enter delay={56} style={{border: `3px dashed ${C.gold}`, borderRadius: 8, padding: '8px 12px'}}>
            <span style={{fontSize: 19, fontWeight: 900, color: C.gold}}>反击偶然防卫/避险 → </span><span style={{fontSize: 19, fontWeight: 700}}>不要说→不能防卫；必要说→可以防卫</span>
          </Enter>
          <Enter delay={68} style={{border: `3px dashed ${C.night}`, borderRadius: 8, padding: '8px 12px'}}>
            <span style={{fontSize: 19, fontWeight: 900, color: C.night}}>面临正当防卫的反击 → </span><span style={{fontSize: 19, fontWeight: 700}}>原则∉紧急避险（自己招来的危险）；乙反击变事后防卫→甲可避险可防卫</span>
          </Enter>
        </div>
        <Enter delay={82} style={{marginTop: 12, fontSize: 19, fontWeight: 700, color: C.inkSoft}}>五条件速记：防卫＝侵害进行·无不得已·限度宽；避险＝危险发生·须不得已·限度严</Enter>
      </div>

      <div data-final-knowledge="consent-board" style={{position: 'absolute', left: 1074, top: 0, width: 702, height: 744, backgroundColor: C.white, border: `4px solid ${C.celadon}`, borderRadius: 10, padding: '14px 20px'}}>
        <Enter delay={12} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <ScrollText size={26} color={C.celadon} />
          <LabelBlock size={24} color={C.celadon}>被害人承诺</LabelBlock>
        </Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={26}><Chip tone="celadon" style={{fontSize: 19, whiteSpace: 'normal'}}>权限：财产·名誉·自由∈；身体轻伤内∈（小手指＝轻伤）·重伤∉——捐肝救人是保护更大法益＝有效；生命绝∉</Chip></Enter>
          <Enter delay={38}><Chip tone="celadon" style={{fontSize: 19, whiteSpace: 'normal'}}>时间：事前·现实；事后承诺无效；能力：幼儿·精神病人无效（哄小孩交压岁钱＝盗窃）</Chip></Enter>
          <Enter delay={50} style={{border: `3px solid ${C.vermilion}`, borderRadius: 8, padding: '8px 12px'}}>
            <div style={{fontSize: 19, fontWeight: 900, color: C.vermilion}}>事实认识错误 → 承诺无效（冒充丈夫∈强奸·谎称狂犬病处理狗∈毁财·骗角膜用途∈伤害）</div>
          </Enter>
          <Enter delay={62} style={{border: `3px solid ${C.celadon}`, borderRadius: 8, padding: '8px 12px'}}>
            <div style={{fontSize: 19, fontWeight: 900, color: C.celadon}}>动机错误 → 承诺有效（欺骗上床救夫∉强奸·导演骗角色∉强奸）；并存时以事实错误为准</div>
          </Enter>
          <Enter delay={74}><Chip style={{fontSize: 19, whiteSpace: 'normal'}}>乙自误：甲不知情→有效；甲知＋欺骗（含不作为）→无效；单纯利用→有效（兽医隐瞒特效药＝无效）</Chip></Enter>
          <Enter delay={86}><Chip tone="gold" style={{fontSize: 19, whiteSpace: 'normal'}}>推定承诺：无现实承诺＋合理推定（一般人标准：救轻生者·强输血）＋牺牲≤保护＋有处分权；可与紧急避险竞合（截肢保命）</Chip></Enter>
        </div>
      </div>
    </div>
  </Shell>
);
