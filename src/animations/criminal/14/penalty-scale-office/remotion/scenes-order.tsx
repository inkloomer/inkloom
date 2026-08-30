import {GraduationCap, Landmark, Scale, Zap} from 'lucide-react';
import {Chip, C, Enter, LabelBlock, Neg, Shell, SoftHi, StaveTitle, ThinU} from './kit';

export const FineOrderMergeScene = () => (
  <Shell code="04" title="罚金·没收·执行顺序">
    <div data-layout="fine-order-merge-board" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="fine-four-modes,civil-first-order" data-focal-rule="victim-compensation-and-debts-rank-ahead-of-property-penalties" data-focal-channels="icon,contrast,enclosure,connector" style={{position: 'absolute', inset: 0}}>
      <Zap size={130} color={C.ink} style={{position: 'absolute', left: 26, bottom: 330, opacity: 0.08}} />
      <div data-final-knowledge="addon-rule-strip" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 92, backgroundColor: C.indigoSoft, border: `3px solid ${C.indigo}`, borderRadius: 8, display: 'flex', alignItems: 'center', gap: 16, padding: '0 22px'}}>
        <Enter delay={6}><LabelBlock size={24} color={C.indigo}>附加刑特点</LabelBlock></Enter>
        <Enter delay={18} style={{fontSize: 21, fontWeight: 800, color: C.inkSoft}}>可独立也可附加·一罪可多附；口诀：附主不附附——附加刑只能搭主刑</Enter>
      </div>

      <div data-final-knowledge="fine-modes-board" style={{position: 'absolute', left: 0, top: 116, width: 876, height: 380, backgroundColor: C.white, border: `4px solid ${C.calm}`, borderRadius: 8, padding: '14px 20px'}}>
        <Enter delay={26} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Landmark size={26} color={C.calm} />
          <LabelBlock size={24} color={C.calm}>罚金 · 四种适用方式</LabelBlock>
        </Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8}}>
          <div data-final-knowledge="mode-single"><Enter delay={40} style={{border: `3px solid ${C.calm}`, borderRadius: 8, padding: '8px 12px'}}>
            <div style={{fontSize: 19, fontWeight: 900, display: 'flex', alignItems: 'center', gap: 8}}><Scale size={20} color={C.calm} style={{flexShrink: 0}} />单科式：必须用·仅单独（单位受贿·单位行贿）</div>
          </Enter></div>
          <div data-final-knowledge="mode-select"><Enter delay={52} style={{border: `3px solid ${C.calm}`, borderRadius: 8, padding: '8px 12px'}}>
            <div style={{fontSize: 19, fontWeight: 900, display: 'flex', alignItems: 'center', gap: 8}}><Zap size={20} color={C.calm} style={{flexShrink: 0}} />选科式：可以不用·用则单独（故意毁坏财物）</div>
          </Enter></div>
          <div data-final-knowledge="mode-add"><Enter delay={64} style={{border: `3px solid ${C.calm}`, borderRadius: 8, padding: '8px 12px'}}>
            <div style={{fontSize: 19, fontWeight: 900, display: 'flex', alignItems: 'center', gap: 8}}><GraduationCap size={20} color={C.calm} style={{flexShrink: 0}} />并科式：必须用·仅附加（倒卖文物）</div>
          </Enter></div>
          <div data-final-knowledge="mode-mixed"><Enter delay={76} style={{border: `3px solid ${C.calm}`, borderRadius: 8, padding: '8px 12px'}}>
            <div style={{fontSize: 19, fontWeight: 900, display: 'flex', alignItems: 'center', gap: 8}}><Landmark size={20} color={C.calm} style={{flexShrink: 0}} />并科或单科式：必须用·可附可单（假冒专利）</div>
          </Enter></div>
        </div>
      </div>

      <div data-final-knowledge="confiscate-order-board" style={{position: 'absolute', left: 900, top: 116, width: 876, height: 380, backgroundColor: C.white, border: `4px solid ${C.accent}`, borderRadius: 8, padding: '14px 20px'}}>
        <Enter delay={32}><LabelBlock size={24} color={C.accent}>没收财产 · 范围与顺位（民事优先）</LabelBlock></Enter>
        <Enter delay={46} style={{marginTop: 8, fontSize: 19, fontWeight: 700, color: C.inkSoft }}>只收个人<ThinU>合法所有</ThinU>且未用于犯罪的财产；不得动家属所有·应有财产；没收全部须保留扶属必需生活费</Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8}}>
          <div data-final-knowledge="order-victim"><Enter delay={60} style={{border: `3px solid ${C.accent}`, borderRadius: 8, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 10}}>
            <span style={{backgroundColor: C.accent, color: C.white, fontWeight: 950, fontSize: 18, borderRadius: 999, width: 26, height: 26, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>1</span>
            <span style={{fontSize: 19, fontWeight: 900}}>赔偿被害人（人身损害·物质损失）</span>
          </Enter></div>
          <div data-final-knowledge="order-debt"><Enter delay={72} style={{border: `3px solid ${C.clef}`, borderRadius: 8, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 10}}>
            <span style={{backgroundColor: C.clef, color: C.ink, fontWeight: 950, fontSize: 18, borderRadius: 999, width: 26, height: 26, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>2</span>
            <span style={{fontSize: 19, fontWeight: 900}}>民事债务（正当债务·经债权人请求）</span>
          </Enter></div>
          <div data-final-knowledge="order-penalty"><Enter delay={84} style={{border: `3px solid ${C.calm}`, borderRadius: 8, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 10}}>
            <span style={{backgroundColor: C.calm, color: C.white, fontWeight: 950, fontSize: 18, borderRadius: 999, width: 26, height: 26, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>3</span>
            <span style={{fontSize: 19, fontWeight: 900}}>财产刑（罚金·没收财产）——一审法院执行</span>
          </Enter></div>
        </div>
      </div>

      <div data-final-knowledge="merge-case-floor" style={{position: 'absolute', left: 0, right: 0, top: 520, bottom: 0, backgroundColor: C.calmSoft, border: `3px solid ${C.calm}`, borderRadius: 8, padding: '12px 22px'}}>
        <Enter delay={96} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={22} color={C.calm} />
          <span style={{fontSize: 19, fontWeight: 900}}>交通肇事案：撞死狗剩·撞伤小芳·坏电瓶·欠铁牛10万 → 赔人损物损 → 还铁牛 → 执行财产刑</span>
        </Enter>
        <Enter delay={108} style={{marginTop: 8, fontSize: 19, fontWeight: 700, color: C.inkSoft }}>并罚口诀：<SoftHi style={{fontSize: 18}}>罚金碰罚金累加 · 没收碰没收部分各自执行·全部吸收部分 · 罚金碰没收分别执行</SoftHi></Enter>
      </div>
    </div>
  </Shell>
);
