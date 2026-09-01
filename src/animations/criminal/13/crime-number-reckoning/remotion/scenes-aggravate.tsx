import {Gavel, Landmark, RefreshCw, Scale, ScrollText, TrendingUp, Zap} from 'lucide-react';
import {useCurrentFrame} from 'remotion';
import {Chip, C, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, ThinU, Ticket, reveal} from './kit';

export const AggravateOneActUpgradeScene = () => (
  <Shell code="06" title="加重犯·一个行为·法定刑升格">
    <div data-layout="aggravate-upgrade-pipeline" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="act-merge-gate,statute-upgrade-meter,relation-pair-rows,form-shift-band" data-focal-rule="one-act-two-charges-special-rule-upgrades-statute" data-focal-channels="icon,contrast,enclosure,connector" style={{position: 'absolute', inset: 0}}>
      <Landmark size={130} color={C.ink} style={{position: 'absolute', right: 30, bottom: 240, opacity: 0.08}} />

      <div data-final-knowledge="one-act-evaluation" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 150, backgroundColor: C.scaleYellowSoft, border: `3px solid ${C.scaleYellow}`, borderRadius: 8, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10, padding: '0 20px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0}}>
            <Zap size={28} color={C.booth} />
            <LabelBlock ink size={25}>加重犯 · 一个行为，同时触犯两个罪名</LabelBlock>
          </Enter>
          <Enter delay={20} style={{display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0}}>
            <Chip tone="booth" style={{fontSize: 21}}><Gavel size={19} color={C.white} style={{flexShrink: 0}} />A罪 · 基本犯</Chip>
            <span style={{fontSize: 20, fontWeight: 900, color: C.inkSoft}}>与</span>
            <Chip tone="yellow" style={{fontSize: 21}}><TrendingUp size={19} color={C.ink} style={{flexShrink: 0}} />B罪 · 法定刑升格条件</Chip>
          </Enter>
          <Dash delay={32} style={{width: 36, height: 4, backgroundColor: C.ink, flexShrink: 0}} />
          <Enter delay={38}><SoftHi style={{fontSize: 22}}>予以加重处罚</SoftHi></Enter>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <div style={{display: 'flex', gap: 8, flexShrink: 0}}>
            <SlideChip delay={48} from={-40} label="非法侵入住宅" />
            <SlideChip delay={54} from={40} label="抢劫" />
          </div>
          <Dash delay={64} style={{width: 36, height: 4, backgroundColor: C.ink, flexShrink: 0}} />
          <div style={{display: 'flex', flexDirection: 'column', fontSize: 17, fontWeight: 800, color: C.inkSoft, lineHeight: 1.3, flexShrink: 0}}>
            <span>一个目的 · 非法取财</span>
            <span>两个举动整体评价</span>
          </div>
          <Enter delay={72} style={{flexShrink: 0}}><Chip tone="ink" style={{fontSize: 22}}><Zap size={20} color={C.white} style={{flexShrink: 0}} />入户抢劫 · 法律评价上是一个行为</Chip></Enter>
          <Enter delay={80}><Neg size={20}>自然事实两个举动 ≠ 法律上两个行为</Neg></Enter>
        </div>
      </div>

      <Connector delay={88} left={430} top={150} height={26} />
      <Connector delay={88} left={1330} top={150} height={26} />

      <div data-final-knowledge="origin-imaginary-lane" style={{position: 'absolute', left: 0, top: 176, width: 860, height: 262, backgroundColor: C.white, border: `3px solid ${C.screen}`, borderRadius: 10, padding: '14px 20px'}}>
        <Enter delay={92} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Scale size={27} color={C.screen} />
          <LabelBlock size={25} color={C.screen}>原生态 · 想象竞合</LabelBlock>
          <span style={{fontSize: 18, fontWeight: 800, color: C.inkSoft}}>无法律特殊规定时</span>
        </Enter>
        <Enter delay={104} style={{marginTop: 16, display: 'flex', alignItems: 'center', gap: 14}}>
          <Chip tone="booth" style={{fontSize: 23}}>A罪</Chip>
          <span style={{fontSize: 21, fontWeight: 900, color: C.inkSoft}}>与</span>
          <Chip tone="booth" style={{fontSize: 23}}>B罪</Chip>
          <Dash delay={116} style={{width: 56, height: 4, backgroundColor: C.screen}} />
          <span style={{fontSize: 22, fontWeight: 900, color: C.screen}}>一个行为触犯两罪</span>
        </Enter>
        <Enter delay={128} style={{marginTop: 16, display: 'flex', alignItems: 'center', gap: 14}}>
          <Dash delay={128} style={{width: 56, height: 4, backgroundColor: C.screen}} />
          <Scale size={26} color={C.screen} style={{flexShrink: 0}} />
          <span style={{fontSize: 23, fontWeight: 900, color: C.screen}}>原本是想象竞合关系</span>
        </Enter>
        <div style={{marginTop: 18}}><Enter delay={142}><Ticket tone="screen">择一重罪论处</Ticket></Enter></div>
      </div>

      <div data-final-knowledge="statute-upgrade-lane" style={{position: 'absolute', left: 884, right: 0, top: 176, height: 262, backgroundColor: C.white, border: `3px solid ${C.scaleYellow}`, borderRadius: 10, padding: '14px 20px'}}>
        <Enter delay={98} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Landmark size={27} color={C.booth} />
          <LabelBlock size={25} color={C.booth}>法律特殊规定 · 情节加重犯</LabelBlock>
          <span style={{fontSize: 18, fontWeight: 800, color: C.inkSoft}}>刑法明文</span>
        </Enter>
        <Enter delay={112} style={{marginTop: 14, display: 'flex', alignItems: 'center', gap: 14}}>
          <Chip tone="yellow" style={{fontSize: 23}}>情节加重犯 “A+B”</Chip>
          <Dash delay={124} style={{width: 56, height: 4, backgroundColor: C.scaleYellow}} />
          <span style={{fontSize: 22, fontWeight: 900}}>基本犯 · <ThinU color={C.booth}>法定刑升格</ThinU></span>
        </Enter>
        <div style={{marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <span style={{fontSize: 18, fontWeight: 800, color: C.inkSoft, width: 128, textAlign: 'right'}}>基本犯法定刑</span>
            <Enter delay={136} style={{flex: 1, height: 32, backgroundColor: C.booth, borderRadius: 5}} />
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <span style={{fontSize: 18, fontWeight: 800, color: C.booth, width: 128, textAlign: 'right'}}>升格法定刑</span>
            <div style={{flex: 1, display: 'flex', alignItems: 'center', gap: 8}}>
              <Dash delay={148} style={{flex: 1, height: 32, backgroundColor: C.scaleYellow, borderRadius: 5}} />
              <Enter delay={158}><TrendingUp size={26} color={C.booth} /></Enter>
            </div>
          </div>
        </div>
        <div style={{marginTop: 14}}><Enter delay={164}><SoftHi style={{fontSize: 21}}>加重处罚 → 适用升格后的法定刑</SoftHi></Enter></div>
      </div>

      <Connector delay={170} left={430} top={438} height={24} />
      <Connector delay={170} left={1330} top={438} height={24} />

      <div data-final-knowledge="relation-AB" style={{position: 'absolute', left: 0, top: 462, width: 860, height: 112, backgroundColor: C.screenSoft, border: `3px solid ${C.screen}`, borderRadius: 8, display: 'flex', alignItems: 'center', gap: 12, padding: '0 18px'}}>
        <Enter delay={172} style={{display: 'flex', alignItems: 'center', gap: 9, flexShrink: 0}}>
          <Scale size={25} color={C.screen} style={{flexShrink: 0}} />
          <Chip tone="booth" style={{fontSize: 21}}>A罪</Chip>
          <span style={{fontSize: 19, fontWeight: 900, color: C.inkSoft}}>与</span>
          <Chip tone="booth" style={{fontSize: 21}}>B罪</Chip>
        </Enter>
        <Enter delay={182} style={{fontSize: 22, fontWeight: 900, color: C.screen, flexShrink: 0}}>原本是想象竞合</Enter>
        <Dash delay={192} style={{width: 30, height: 4, backgroundColor: C.screen, flexShrink: 0}} />
        <Enter delay={196} style={{fontSize: 21, fontWeight: 800, color: C.inkSoft}}>法律特殊规定为情节加重犯 “A+B”</Enter>
      </div>

      <div data-final-knowledge="relation-AAB" style={{position: 'absolute', left: 884, right: 0, top: 462, height: 112, backgroundColor: C.boothSoft, border: `3px solid ${C.booth}`, borderRadius: 8, display: 'flex', alignItems: 'center', gap: 12, padding: '0 18px'}}>
        <Enter delay={178} style={{display: 'flex', alignItems: 'center', gap: 9, flexShrink: 0}}>
          <ScrollText size={25} color={C.booth} style={{flexShrink: 0}} />
          <Chip tone="booth" style={{fontSize: 21}}>A罪</Chip>
          <span style={{fontSize: 19, fontWeight: 900, color: C.inkSoft}}>与</span>
          <Chip tone="yellow" style={{fontSize: 21}}>A+B罪</Chip>
        </Enter>
        <Enter delay={188} style={{fontSize: 22, fontWeight: 900, color: C.booth, flexShrink: 0}}>法条竞合</Enter>
        <Dash delay={198} style={{width: 30, height: 4, backgroundColor: C.booth, flexShrink: 0}} />
        <Enter delay={202} style={{fontSize: 21, fontWeight: 800, color: C.inkSoft}}>特殊法优于一般法 · 以加重犯论处</Enter>
      </div>

      <div data-final-knowledge="form-shift-band" style={{position: 'absolute', left: 0, right: 0, top: 598, height: 146, backgroundColor: C.white, border: `3px dashed ${C.cone}`, borderRadius: 8, display: 'flex', alignItems: 'center', gap: 14, padding: '0 20px'}}>
        <Enter delay={206} style={{display: 'flex', flexDirection: 'column', gap: 6, flexShrink: 0}}>
          <LabelBlock size={24} color={C.booth}>基本犯与加重犯</LabelBlock>
          <span style={{fontSize: 20, fontWeight: 800, color: C.inkSoft}}>犯罪形态一致 · 法条竞合</span>
        </Enter>
        <Dash delay={216} style={{width: 40, height: 4, backgroundColor: C.ink, flexShrink: 0}} />
        <Enter delay={222} style={{flexShrink: 0}}><Chip tone="cone" style={{fontSize: 22}}>形态不一致</Chip></Enter>
        <Dash delay={232} style={{width: 40, height: 4, backgroundColor: C.cone, flexShrink: 0}} />
        <Enter delay={236} style={{display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0}}>
          <RefreshCw size={26} color={C.cone} style={{flexShrink: 0}} />
          <span style={{fontSize: 23, fontWeight: 900, color: C.cone}}>调整为想象竞合</span>
        </Enter>
        <Enter delay={246} style={{flexShrink: 0}}><Ticket tone="cone">择一重罪</Ticket></Enter>
        <Dash delay={254} style={{width: 30, height: 4, backgroundColor: C.ink, flexShrink: 0}} />
        <Enter delay={258} style={{flexShrink: 0}}><SoftHi style={{fontSize: 22}}>确保罪刑相适应</SoftHi></Enter>
      </div>
    </div>
  </Shell>
);

const SlideChip = ({delay, from, label}: {delay: number; from: number; label: string}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay, 18);
  return (
    <div style={{opacity: p, translate: `${(1 - p) * from}px 0`}}>
      <span style={{display: 'inline-flex', alignItems: 'center', padding: '3px 12px', backgroundColor: C.white, border: `2px solid ${C.ink}`, borderRadius: 6, fontSize: 20, fontWeight: 800, whiteSpace: 'nowrap'}}>{label}</span>
    </div>
  );
};

const Connector = ({delay, left, top, height}: {delay: number; left: number; top: number; height: number}) => {
  const frame = useCurrentFrame();
  const p = reveal(frame, delay);
  return <div style={{position: 'absolute', left, top, width: 4, height, backgroundColor: C.ink, transformOrigin: 'top', scale: `1 ${p}`, opacity: 0.5 * p}} />;
};
