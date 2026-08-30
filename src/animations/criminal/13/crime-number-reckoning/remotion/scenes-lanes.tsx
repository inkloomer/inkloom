import {CircleDashed, Gavel, Hourglass, Scale, Users, Zap} from 'lucide-react';
import {Chip, C, Enter, LabelBlock, LaneTitle, Neg, Shell, SoftHi, ThinU, Ticket} from './kit';

export const ContinueAggravateLaneScene = () => (
  <Shell code="02" title="继续犯·加重犯">
    <div data-layout="continuing-aggravate-duo-board" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="continuing-one-crime,aggravate-weight-dial" data-focal-rule="aggravation-is-one-act-legally-weighed-on-the-base-crime" data-focal-channels="icon,contrast,enclosure,connector" style={{position: 'absolute', inset: 0}}>
      <Scale size={130} color={C.ink} style={{position: 'absolute', left: 24, bottom: 320, opacity: 0.08}} />
      <div data-final-knowledge="continuing-board" style={{position: 'absolute', left: 0, top: 0, width: 700, height: 480, backgroundColor: C.white, border: `4px solid ${C.screen}`, borderRadius: 8, padding: '14px 18px'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Hourglass size={26} color={C.screen} />
          <LabelBlock size={24} color={C.screen}>继续犯（持续犯）· 只定一罪</LabelBlock>
        </Enter>
        <Enter delay={20} style={{marginTop: 8, fontSize: 20, fontWeight: 700, color: C.inkSoft}}>行为与不法状态一直持续：非法拘禁·窝藏·<ThinU>持有型犯罪</ThinU></Enter>
        <div data-final-knowledge="continuing-join-rule" style={{marginTop: 12, backgroundColor: C.screenSoft, border: `3px solid ${C.screen}`, borderRadius: 8, padding: '10px 14px'}}>
          <Enter delay={36} style={{fontSize: 19, fontWeight: 900, color: C.screen, display: 'flex', alignItems: 'center', gap: 8}}><Users size={20} color={C.screen} style={{flexShrink: 0}} />特殊：既遂后·行为终了前参与 → 承继共犯</Enter>
          <Enter delay={48} style={{marginTop: 4, fontSize: 18, fontWeight: 700, color: C.inkSoft}}>一般犯罪既遂后参与＝妨害司法罪；非法拘禁既遂后加入＝承继共犯</Enter>
        </div>
      </div>

      <div data-final-knowledge="aggravate-board" style={{position: 'absolute', left: 724, top: 0, width: 1052, height: 480, backgroundColor: C.white, border: `4px solid ${C.scaleYellow}`, borderRadius: 8, padding: '14px 18px'}}>
        <Enter delay={12} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Scale size={26} color={C.booth} />
          <LabelBlock size={24} color={C.booth}>加重犯 · 一个行为·法定刑升格</LabelBlock>
        </Enter>
        <Enter delay={26} style={{marginTop: 8, display: 'flex', gap: 8, flexWrap: 'wrap'}}>
          <Chip tone="yellow" style={{fontSize: 19, whiteSpace: 'normal'}}>结果加重：抢劫致死</Chip>
          <Chip tone="yellow" style={{fontSize: 19, whiteSpace: 'normal'}}>情节加重：入户抢劫</Chip>
          <Chip tone="yellow" style={{fontSize: 19, whiteSpace: 'normal'}}>数额加重：数额特别巨大</Chip>
          <Chip tone="yellow" style={{fontSize: 19, whiteSpace: 'normal'}}>对象加重：抢劫军用物资</Chip>
        </Enter>
        <div style={{marginTop: 12, display: 'flex', gap: 12}}>
          <div style={{flex: 1, border: `3px solid ${C.booth}`, borderRadius: 8, padding: '8px 12px'}}>
            <Enter delay={40} style={{fontSize: 18, fontWeight: 900}}>法律评价＝一个行为</Enter>
            <Enter delay={50} style={{marginTop: 4, fontSize: 17, fontWeight: 700, color: C.inkSoft}}>入户抢劫自然上是两举动·基于同一目的整体评价为一个行为</Enter>
          </div>
          <div style={{flex: 1, border: `3px solid ${C.booth}`, borderRadius: 8, padding: '8px 12px'}}>
            <Enter delay={62} style={{fontSize: 18, fontWeight: 900}}>原生态＝想象竞合·法律特殊规定</Enter>
            <Enter delay={72} style={{marginTop: 4, fontSize: 17, fontWeight: 700, color: C.inkSoft}}>A×B 原择一重；规定为 A+B 后·与 A 是法条竞合→特殊优于一般</Enter>
          </div>
        </div>
        <Enter delay={84} style={{marginTop: 10}}><SoftHi style={{fontSize: 19}}>表述重心在加重部分：入户抢劫重心＝入户·强奸致人重伤重心＝致人重伤</SoftHi></Enter>
      </div>

      <div data-final-knowledge="form-shift-board" style={{position: 'absolute', left: 0, right: 0, top: 504, bottom: 0, backgroundColor: C.white, border: `3px solid ${C.cone}`, borderRadius: 8, padding: '14px 22px'}}>
        <Enter delay={96}><LabelBlock ink size={23}>形态不一致 → 从法条竞合调整为想象竞合（罪刑相适应）</LabelBlock></Enter>
        <div style={{marginTop: 10, display: 'flex', gap: 14}}>
          <Enter delay={108} style={{flex: 1, border: `3px solid ${C.screen}`, borderRadius: 8, padding: '8px 12px'}}>
            <div style={{fontSize: 19, fontWeight: 900, display: 'flex', alignItems: 'center', gap: 8}}><CircleDashed size={20} color={C.screen} style={{flexShrink: 0}} />基本既遂＋加重未遂/中止</div>
            <div style={{marginTop: 4, fontSize: 18, fontWeight: 700, color: C.inkSoft }}>当众强奸转移灌木丛完成：基本既遂·当众加重中止 → 想象竞合择一重；盗3万只取3千同理</div>
          </Enter>
          <Enter delay={122} style={{flex: 1, border: `3px solid ${C.cone}`, borderRadius: 8, padding: '8px 12px'}}>
            <div style={{fontSize: 19, fontWeight: 900, display: 'flex', alignItems: 'center', gap: 8}}><Gavel size={20} color={C.cone} style={{flexShrink: 0}} />基本未遂/中止＋加重既遂</div>
            <div style={{marginTop: 4, fontSize: 18, fontWeight: 700, color: C.inkSoft }}>为强奸致重伤即被抓：定加重既遂·适用升格法定刑·再按未遂从宽；入户抢劫即被抓同理</div>
          </Enter>
        </div>
      </div>
    </div>
  </Shell>
);
