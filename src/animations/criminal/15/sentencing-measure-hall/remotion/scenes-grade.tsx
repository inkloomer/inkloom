import {ArrowDown, ArrowUp, Ban, Droplet, Gavel, GraduationCap, Scale} from 'lucide-react';
import {Chip, C, Enter, LabelBlock, Neg, Shell, SoftHi, ThinU, VatTitle} from './kit';

export const SentimentGradeScaleScene = () => (
  <Shell code="01" title="量刑情节·四档浓度">
    <div data-layout="four-grade-vat-row" data-visual-anchor="typographic-sequence" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="grade-dye-spectrum,one-notch-rule" data-focal-rule="adjust-inside-the-cell-or-step-one-vat-down-never-two" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Droplet size={130} color={C.ink} style={{position: 'absolute', left: 26, bottom: 330, opacity: 0.08}} />
      <div style={{position: 'absolute', left: 0, top: 0, width: 1776, display: 'flex', gap: 16}}>
        <div data-final-knowledge="grade-heavy-light" style={{flex: 1.2, backgroundColor: C.white, border: `3px solid ${C.indigo}`, borderRadius: 8, padding: '12px 16px'}}>
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <ArrowUp size={22} color={C.indigo} style={{flexShrink: 0}} />
            <ArrowDown size={22} color={C.mordant} style={{flexShrink: 0}} />
            <VatTitle>从重 · 从轻</VatTitle>
          </Enter>
          <Enter delay={16} style={{marginTop: 8, fontSize: 20, fontWeight: 800}}>同一<ThinU>刑格幅度内</ThinU>调整浓度</Enter>
          <Enter delay={26} style={{marginTop: 8}}><Chip tone="indigo" style={{fontSize: 19, whiteSpace: 'normal'}}>「3年以上10年以下」判 3 年＝从轻（以下不含本数）·从轻与减轻不竞合</Chip></Enter>
        </div>
        <div data-final-knowledge="grade-reduce" style={{flex: 1.2, backgroundColor: C.white, border: `3px solid ${C.turmeric}`, borderRadius: 8, padding: '12px 16px'}}>
          <Enter delay={12} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <Droplet size={22} color={C.turmeric} style={{flexShrink: 0}} />
            <VatTitle>减轻处罚</VatTitle>
          </Enter>
          <Enter delay={22} style={{marginTop: 8, fontSize: 20, fontWeight: 800}}>换<ThinU>下一个刑格</ThinU>的浅色缸——不能一跨到底</Enter>
          <Enter delay={32} style={{marginTop: 8}}><Chip tone="turmeric" style={{fontSize: 19, whiteSpace: 'normal'}}>特别减轻：无情节·特殊情况经最高人民法院核准（2024）·含主刑附加刑</Chip></Enter>
        </div>
        <div data-final-knowledge="grade-exempt" style={{flex: 1.2, backgroundColor: C.white, border: `3px solid ${C.madder}`, borderRadius: 8, padding: '12px 16px'}}>
          <Enter delay={18} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <Ban size={22} color={C.madder} style={{flexShrink: 0}} />
            <VatTitle>免除处罚</VatTitle>
          </Enter>
          <Enter delay={28} style={{marginTop: 8, fontSize: 20, fontWeight: 800}}><ThinU>有罪宣告</ThinU>但免其刑罚——前提＝有罪判决≠无罪/不起诉</Enter>
          <Enter delay={38} style={{marginTop: 8}}><Chip tone="madder" style={{fontSize: 19, whiteSpace: 'normal'}}>只免刑罚·仍可训诫·责令赔偿等非刑罚处罚</Chip></Enter>
        </div>
        <div data-final-knowledge="grade-case" style={{flex: 1, backgroundColor: C.turmericSoft, border: `3px double ${C.turmeric}`, borderRadius: 8, padding: '12px 16px'}}>
          <Enter delay={24} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <GraduationCap size={22} color={C.madder} style={{flexShrink: 0}} />
            <span style={{fontSize: 19, fontWeight: 900}}>交通肇事逃逸案</span>
          </Enter>
          <Enter delay={34} style={{marginTop: 8, fontSize: 19, fontWeight: 700, color: C.inkSoft }}>适用刑格＝「3年以上7年以下」——先定缸·再调浓淡</Enter>
        </div>
      </div>

      <div data-final-knowledge="notch-rule-strip" style={{position: 'absolute', left: 0, right: 0, top: 300, height: 140, backgroundColor: C.white, border: `3px solid ${C.mordant}`, borderRadius: 8, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10, padding: '0 22px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
          <Enter delay={48} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <Gavel size={24} color={C.mordant} />
            <LabelBlock ink size={23}>一格铁律</LabelBlock>
          </Enter>
          <Enter delay={60} style={{fontSize: 21, fontWeight: 800, color: C.inkSoft}}>减轻只能在<SoftHi style={{fontSize: 20}}>下一个量刑幅度</SoftHi>内——不能跳进下下一个缸</Enter>
        </div>
        <Enter delay={70} style={{fontSize: 20, fontWeight: 700, color: C.inkSoft}}>免除处罚 ≠ 单纯宣告有罪：免刑不免非刑罚；减轻含主刑·也含附加刑（2024）</Enter>
      </div>

      <div data-final-knowledge="case-floor-strip" style={{position: 'absolute', left: 0, right: 0, top: 464, bottom: 0, backgroundColor: C.turmericSoft, border: `3px double ${C.turmeric}`, borderRadius: 8, display: 'flex', alignItems: 'center', gap: 14, padding: '0 22px'}}>
        <Enter delay={84} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.madder} />
          <LabelBlock size={22}>色阶对照</LabelBlock>
        </Enter>
        <Enter delay={96} style={{display: 'flex', gap: 10, flexWrap: 'wrap'}}>
          <Chip tone="indigo" style={{fontSize: 19, whiteSpace: 'normal'}}>从重/从轻＝原缸调浓淡</Chip>
          <Chip tone="turmeric" style={{fontSize: 19, whiteSpace: 'normal'}}>减轻＝换下一格浅缸</Chip>
          <Chip tone="madder" style={{fontSize: 19, whiteSpace: 'normal'}}>免除＝有罪免刑</Chip>
        </Enter>
      </div>
    </div>
  </Shell>
);
