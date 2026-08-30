import {GraduationCap, Scale, Users} from 'lucide-react';
import {Chip, C, Dash, Enter, LabelBlock, Neg, RowTitle, Shell, SoftHi, ThinU} from './kit';

export const UnascertainableFogScene = () => (
  <Shell code="05" title="无法查明·雾区推演">
    <div data-layout="fog-split-verdict-board" data-visual-anchor="boundary" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="joint-all-responsibility,doubt-favor-early-death" data-focal-rule="joint-crime-holds-all-single-crime-picks-the-earlier-death" data-focal-channels="icon,contrast,enclosure,connector" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="fog-joint-board" style={{position: 'absolute', left: 0, top: 0, width: 876, height: 380, backgroundColor: C.white, border: `4px solid ${C.teal}`, borderRadius: 10, padding: '14px 20px'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Users size={26} color={C.teal} />
          <LabelBlock size={25} color={C.teal}>共同犯罪 · 部分实行全部负责</LabelBlock>
        </Enter>
        <Enter delay={20} style={{marginTop: 10, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>两人共谋开枪·一枪致命但无法查明谁打的</Enter>
        <Enter delay={32} style={{marginTop: 8}}><Chip tone="teal" style={{fontSize: 20, whiteSpace: 'normal'}}>无须查明——二人均与结果有因果·都对死亡负责</Chip></Enter>
      </div>

      <div data-final-knowledge="fog-single-board" style={{position: 'absolute', left: 900, top: 0, width: 876, height: 380, backgroundColor: C.white, border: `4px solid ${C.lacquer}`, borderRadius: 10, padding: '14px 20px'}}>
        <Enter delay={12} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Scale size={26} color={C.lacquer} />
          <LabelBlock size={25} color={C.lacquer}>单独（或非共犯）· 存疑有利于被告</LabelBlock>
        </Enter>
        <Enter delay={26} style={{marginTop: 10}}><SoftHi style={{fontSize: 23}}>口诀：死得越早·对被告人越有利</SoftHi></Enter>
        <Enter delay={38} style={{marginTop: 10, fontSize: 20, fontWeight: 700, color: C.inkSoft}}>非共犯二人：分别独立分析→列可能情形→择有利认定</Enter>
      </div>

      <div data-final-knowledge="fog-case-rows" style={{position: 'absolute', left: 0, right: 0, top: 404, width: 1776, height: 216, backgroundColor: C.white, border: `3px solid ${C.walnut}`, borderRadius: 10, padding: '12px 20px'}}>
        <div style={{display: 'flex', gap: 14}}>
          <Enter delay={52} style={{flex: 1, border: `3px solid ${C.walnut}`, borderRadius: 8, padding: '8px 12px'}}>
            <div style={{fontSize: 20, fontWeight: 900}}>砍杀后放火毁尸·死亡时间不明</div>
            <div style={{marginTop: 6, fontSize: 19, fontWeight: 700, color: C.inkSoft}}>认定火灾前砍杀致死 → 故意杀人既遂＋放火罪（不构成致人死亡）</div>
          </Enter>
          <Enter delay={64} style={{flex: 1, border: `3px solid ${C.walnut}`, borderRadius: 8, padding: '8px 12px'}}>
            <div style={{fontSize: 20, fontWeight: 900}}>连环碾轧案（2015·53·2017·52）</div>
            <div style={{marginTop: 6, fontSize: 19, fontWeight: 700, color: C.inkSoft}}>认定乙轧之前已死 → 甲∈肇事·乙∉肇事</div>
          </Enter>
          <Enter delay={76} style={{flex: 1, border: `3px solid ${C.walnut}`, borderRadius: 8, padding: '8px 12px'}}>
            <div style={{fontSize: 20, fontWeight: 900}}>甲乙互不知情同时开枪·谁打头不明</div>
            <div style={{marginTop: 6, fontSize: 19, fontWeight: 700, color: C.inkSoft}}>两种情形择有利 → 甲乙均定故意杀人未遂</div>
          </Enter>
        </div>
      </div>

      <div style={{position: 'absolute', left: 0, right: 0, top: 644, bottom: 0, display: 'flex', alignItems: 'center', gap: 14, padding: '0 8px'}}>
        <Enter delay={92} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.lacquer} />
          <span style={{fontSize: 22, fontWeight: 900}}>雾区两扇门：共犯一起扛 · 单独拣有利——雾里数牌，先数倒得最早的那张</span>
        </Enter>
      </div>
    </div>
  </Shell>
);
