import type {ReactNode} from 'react';
import {BadgeCheck, Baby, CircleDot, Eye, Flame, GraduationCap, Hand, Mountain, Ruler, Scale, ShieldAlert, TreePine} from 'lucide-react';
import {C, Chip, Dash, Enter, LabelBlock, Neg, RingDisc, RingTitle, Seal, Shell, SoftHi, ThinU} from './kit';

const Totem = ({children}: {children: ReactNode}) => <span style={{position: 'absolute', right: -38, bottom: -58, opacity: 0.09, display: 'inline-flex', pointerEvents: 'none'}}>{children}</span>;

const GateArrow = ({delay}: {delay: number}) => (
  <Enter delay={delay} style={{display: 'flex', alignItems: 'center', alignSelf: 'center', flexShrink: 0}}>
    <Dash delay={delay} style={{width: 22, height: 0, borderTop: `5px solid ${C.bark}`}} />
    <span style={{width: 0, height: 0, borderLeft: `12px solid ${C.bark}`, borderTop: '9px solid transparent', borderBottom: '9px solid transparent'}} />
  </Enter>
);

export const CulpabilityGateLineScene = () => (
  <Shell code="01" title="核心原理·责任审查闸线">
    <div data-layout="culpability-gate-line-flow" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="culpability-gate-sequence,blame-to-forgive-fork" data-focal-rule="no-blame-without-passing-all-responsibility-gates" data-focal-channels="icon,connector,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><TreePine size={250} color={C.bark} strokeWidth={1.3} /></Totem>
      <div style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 128, display: 'flex', gap: 20}}>
        <div data-final-knowledge="principle-board" style={{flex: 1, backgroundColor: C.white, border: `3px solid ${C.bark}`, borderRadius: 8, padding: '10px 16px'}}>
          <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <RingDisc size={30} tone="heartwood" />
            <RingTitle>责任的本质＝<SoftHi style={{fontSize: 26}}>可谴责性</SoftHi></RingTitle>
          </Enter>
          <Enter delay={14} style={{marginTop: 8, fontSize: 20, fontWeight: 700, color: C.inkSoft}}>行为人制造违法事实后，必须审查其是否具有可谴责性——正常情况下<ThinU>应受谴责</ThinU></Enter>
        </div>
        <div data-final-knowledge="forgiveness-board" style={{flex: 1, backgroundColor: C.vermilionSoft, border: `3px dashed ${C.vermilion}`, borderRadius: 8, padding: '10px 16px'}}>
          <Enter delay={8}><LabelBlock size={25} color={C.vermilion}>排除责任事由＝宽恕事由 · 责任阻却事由</LabelBlock></Enter>
          <Enter delay={20} style={{marginTop: 8, display: 'flex', alignItems: 'center', gap: 14}}>
            <Chip tone="white" style={{fontSize: 20}}>无法谴责</Chip>
            <Chip tone="white" style={{fontSize: 20}}>不承担刑事责任</Chip>
            <Seal delay={26}>宣告无罪</Seal>
          </Enter>
        </div>
      </div>

      <div style={{position: 'absolute', left: 0, top: 152, width: 1776, height: 380, display: 'flex', alignItems: 'stretch', gap: 0}}>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', flexShrink: 0, width: 150}}>
          <Enter delay={34}><Chip tone="ink" style={{fontSize: 21, whiteSpace: 'normal', padding: '10px 12px'}}>违法事实<br />已成立</Chip></Enter>
        </div>
        <GateArrow delay={38} />
        <div data-final-knowledge="gate-age" style={{flex: 1, backgroundColor: C.white, border: `3px solid ${C.heartwood}`, borderRadius: 8, padding: '12px 14px', display: 'flex', flexDirection: 'column'}}>
          <Enter delay={44} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <CircleDot size={26} color={C.heartwood} />
            <LabelBlock size={23} color={C.heartwood}>闸① 责任年龄</LabelBlock>
          </Enter>
          <Enter delay={56} style={{marginTop: 8, fontSize: 19, fontWeight: 700, color: C.inkSoft}}>达到刑法谴责所须的年龄</Enter>
          <Enter delay={68} style={{marginTop: 10}}><Neg size={19}>未达 → 无法谴责 → 无罪</Neg></Enter>
          <Enter delay={76} style={{marginTop: 'auto', borderTop: `2px dashed ${C.ghost}`, paddingTop: 6, fontSize: 17, fontWeight: 800, color: C.inkSoft}}>→ 第一节 · 三档年轮刻度</Enter>
        </div>
        <GateArrow delay={50} />
        <div data-final-knowledge="gate-capacity" style={{flex: 1, backgroundColor: C.white, border: `3px solid ${C.heartwood}`, borderRadius: 8, padding: '12px 14px', display: 'flex', flexDirection: 'column'}}>
          <Enter delay={56} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <Eye size={24} color={C.heartwood} />
            <Hand size={24} color={C.heartwood} />
            <LabelBlock size={23} color={C.heartwood}>闸② 责任能力</LabelBlock>
          </Enter>
          <Enter delay={68} style={{marginTop: 8, fontSize: 19, fontWeight: 700, color: C.inkSoft}}>辨认＋控制同时具备</Enter>
          <Enter delay={80} style={{marginTop: 10}}><Neg size={19}>丧失 → 不负刑事责任</Neg></Enter>
          <Enter delay={88} style={{marginTop: 'auto', borderTop: `2px dashed ${C.ghost}`, paddingTop: 6, fontSize: 17, fontWeight: 800, color: C.inkSoft}}>→ 第二节 · 心材三级检验</Enter>
        </div>
        <GateArrow delay={62} />
        <div data-final-knowledge="gate-legality" style={{flex: 1, backgroundColor: C.white, border: `3px solid ${C.steel}`, borderRadius: 8, padding: '12px 14px', display: 'flex', flexDirection: 'column'}}>
          <Enter delay={68} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <Scale size={26} color={C.steel} />
            <LabelBlock size={23} color={C.steel}>闸③ 违法性认识可能</LabelBlock>
          </Enter>
          <Enter delay={80} style={{marginTop: 8, fontSize: 19, fontWeight: 700, color: C.inkSoft}}>有无可能认识到刑法禁止</Enter>
          <Enter delay={92} style={{marginTop: 10}}><Neg size={19}>连认识可能都没有 → 排除责任</Neg></Enter>
          <Enter delay={100} style={{marginTop: 'auto', borderTop: `2px dashed ${C.ghost}`, paddingTop: 6, fontSize: 17, fontWeight: 800, color: C.inkSoft}}>→ 第三节 · 认识错误分岔</Enter>
        </div>
        <GateArrow delay={74} />
        <div data-final-knowledge="gate-expectation" style={{flex: 1, backgroundColor: C.white, border: `3px solid ${C.steel}`, borderRadius: 8, padding: '12px 14px', display: 'flex', flexDirection: 'column'}}>
          <Enter delay={80} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <Mountain size={26} color={C.steel} />
            <LabelBlock size={23} color={C.steel}>闸④ 期待可能性</LabelBlock>
          </Enter>
          <Enter delay={92} style={{marginTop: 8, fontSize: 19, fontWeight: 700, color: C.inkSoft }}>能否期待作出合法行为</Enter>
          <Enter delay={104} style={{marginTop: 10}}><Neg size={19}>无法期待 → 排除责任</Neg></Enter>
          <Enter delay={112} style={{marginTop: 'auto', borderTop: `2px dashed ${C.ghost}`, paddingTop: 6, fontSize: 17, fontWeight: 800, color: C.inkSoft}}>→ 第四节 · 岩缝斜木</Enter>
        </div>
        <GateArrow delay={86} />
        <div data-final-knowledge="verdict-board" style={{flex: 0.9, backgroundColor: C.pineSoft, border: `3px solid ${C.pine}`, borderRadius: 8, padding: '12px 14px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10}}>
          <Enter delay={98} style={{fontSize: 21, fontWeight: 900, color: C.pine, textAlign: 'center'}}>四闸全过<br />谴责成立</Enter>
          <Enter delay={110}><Seal delay={110} tone="pine">负刑事责任</Seal></Enter>
        </div>
      </div>

      <div data-final-knowledge="focus-strip" style={{position: 'absolute', left: 0, right: 0, top: 556, bottom: 0, backgroundColor: C.waxSoft, border: `3px solid ${C.heartwood}`, borderRadius: 8, padding: '12px 22px', display: 'flex', alignItems: 'center', gap: 16}}>
        <Enter delay={120}><LabelBlock ink size={24}>本讲审查重点</LabelBlock></Enter>
        <Enter delay={130} style={{fontSize: 21, fontWeight: 800}}>重点＝<SoftHi style={{fontSize: 20}}>责任年龄</SoftHi>（三档年龄刻度）</Enter>
        <Enter delay={140} style={{fontSize: 21, fontWeight: 800}}>难点＝<SoftHi style={{fontSize: 20}}>法律认识错误</SoftHi>（违法性认识可能性）</Enter>
      </div>
    </div>
  </Shell>
);

const BAND_TONES = [
  {size: 520, border: C.pine},
  {size: 390, border: C.heartwood},
  {size: 260, border: C.vermilion},
  {size: 170, border: C.bark},
];

export const AgeRingGradesScene = () => (
  <Shell code="02" title="责任年龄·年轮总刻度">
    <div data-layout="age-ring-radial-scale" data-visual-anchor="timeline-gate" data-text-treatments="chip,label-block,soft-highlight,thin-underline,stamp" data-visual-grammar="age-threshold-rings,mitigation-outer-band" data-focal-rule="age-threshold-rings-define-responsibility-grades" data-focal-channels="icon,locator,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><TreePine size={250} color={C.bark} strokeWidth={1.3} /></Totem>
      <div style={{position: 'absolute', left: 0, top: 40, width: 620, height: 500}}>
        <div style={{position: 'absolute', left: 310, top: 260, translate: '-50% -50%'}}>
          {BAND_TONES.map((band, index) => (
            <Enter key={band.size} delay={index * 12} y={10} style={{position: 'absolute', left: '50%', top: '50%', translate: '-50% -50%'}}>
              <span style={{display: 'block', width: band.size, height: band.size, borderRadius: '50%', border: `5px solid ${band.border}`, backgroundColor: index >= 2 ? (index === 2 ? C.vermilionSoft : C.waxSoft) : C.sapwood}} />
            </Enter>
          ))}
          <Enter delay={54} style={{position: 'absolute', left: '50%', top: '50%', translate: '-50% -50%'}}>
            <div data-final-knowledge="ring-none-band" style={{width: 170, textAlign: 'center'}}>
              <div style={{fontSize: 18, fontWeight: 950, color: C.ink}}>完全无责任年龄</div>
              <div style={{fontSize: 16, fontWeight: 800, color: C.vermilion, marginTop: 2, whiteSpace: 'nowrap'}}>不满12周岁</div>
              <div style={{fontSize: 16, fontWeight: 800, color: C.vermilion, whiteSpace: 'nowrap'}}>全部犯罪不负</div>
            </div>
          </Enter>
        </div>
        <Enter delay={60} style={{position: 'absolute', left: 310, top: 130, translate: '-50% 0'}}>
          <div data-final-knowledge="ring-extreme-band"><Chip tone="vermilion" style={{fontSize: 19}}><ShieldAlert size={18} color={C.white} />12–14 · 极罪核准（17条3款）</Chip></div>
        </Enter>
        <Enter delay={70} style={{position: 'absolute', left: 310, top: 65, translate: '-50% 0'}}>
          <div data-final-knowledge="ring-eight-band"><Chip tone="steel" style={{fontSize: 19}}><Flame size={18} color={C.white} />14–16 · 八种重罪（17条2款）</Chip></div>
        </Enter>
        <Enter delay={80} style={{position: 'absolute', left: 310, top: 0, translate: '-50% 0'}}>
          <div data-final-knowledge="ring-full-band"><Chip tone="pine" style={{fontSize: 19}}><BadgeCheck size={18} color={C.white} />16岁以上 · 完全责任年龄（17条1款）</Chip></div>
        </Enter>
        <Enter delay={90} style={{position: 'absolute', left: 310, top: 462, translate: '-50% 0', fontSize: 17, fontWeight: 800, color: C.inkSoft, whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', gap: 8}}><CircleDot size={18} color={C.heartwood} />自髓心向外数轮 · 每过一圈＝已满该周岁</Enter>
      </div>

      <div data-final-knowledge="birthday-board" style={{position: 'absolute', left: 648, top: 0, width: 1128, height: 256, backgroundColor: C.white, border: `3px solid ${C.bark}`, borderRadius: 8, padding: '12px 18px'}}>
        <Enter delay={96} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.bark} />
          <LabelBlock size={24} color={C.bark}>满周岁的界限 · 生日第二天才算满（2016·3）</LabelBlock>
        </Enter>
        <div style={{marginTop: 14, display: 'flex', alignItems: 'center', gap: 0, flexWrap: 'wrap'}}>
          <Enter delay={108}><Chip tone="white" style={{fontSize: 19, whiteSpace: 'normal', padding: '8px 12px'}}>甲 1990-08-08 出生</Chip></Enter>
          <Enter delay={118} style={{display: 'flex', alignItems: 'center'}}><Dash delay={118} style={{width: 24, height: 0, borderTop: `4px solid ${C.bark}`}} /><span style={{width: 0, height: 0, borderLeft: '10px solid ' + C.bark, borderTop: '7px solid transparent', borderBottom: '7px solid transparent'}} /></Enter>
          <Enter delay={126}><Neg size={19}>2002-08-08 生日当天 → 仍不满12周岁</Neg></Enter>
        </div>
        <div style={{marginTop: 10, display: 'flex', alignItems: 'center', gap: 0}}>
          <Enter delay={132} style={{fontSize: 19, fontWeight: 800, color: C.inkSoft}}>周岁按<SoftHi style={{fontSize: 18}}>过了生日第二天</SoftHi>起算，而非生日当天</Enter>
          <Enter delay={142} style={{display: 'flex', alignItems: 'center', marginLeft: 18}}><Dash delay={142} style={{width: 24, height: 0, borderTop: `4px solid ${C.pine}`}} /><span style={{width: 0, height: 0, borderLeft: '10px solid ' + C.pine, borderTop: '7px solid transparent', borderBottom: '7px solid transparent'}} /></Enter>
          <Enter delay={150}><Chip tone="pine" style={{fontSize: 19, whiteSpace: 'normal', padding: '8px 12px'}}>2002-08-09 第二天 → 已满12周岁</Chip></Enter>
        </div>
      </div>

      <div data-final-knowledge="bone-age-board" style={{position: 'absolute', left: 648, top: 276, width: 1128, height: 280, backgroundColor: C.white, border: `3px solid ${C.steel}`, borderRadius: 8, padding: '12px 18px'}}>
        <Enter delay={104} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Ruler size={24} color={C.steel} />
          <LabelBlock size={24} color={C.steel}>骨龄鉴定 · 不报年龄时替你数轮</LabelBlock>
        </Enter>
        <div style={{marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={118} style={{fontSize: 20, fontWeight: 700}}>犯罪嫌疑人<SoftHi style={{fontSize: 19}}>不讲自己年龄</SoftHi> → 司法机关可以进行<ThinU color={C.steel}>骨龄鉴定</ThinU>（2016·3）</Enter>
          <Enter delay={130} style={{fontSize: 20, fontWeight: 700}}>鉴定意见证明已满12周岁 → <Chip tone="pine" style={{fontSize: 19}}>应负相应的刑事责任</Chip></Enter>
          <Enter delay={142} style={{fontSize: 20, fontWeight: 700, color: C.inkSoft}}>这种鉴定<ThinU>不要求查明</ThinU>具体的出生日期（几月几日）</Enter>
        </div>
      </div>

      <div data-final-knowledge="mitigation-strip" style={{position: 'absolute', left: 0, right: 0, top: 576, bottom: 0, backgroundColor: C.pineSoft, border: `3px solid ${C.pine}`, borderRadius: 8, padding: '10px 22px', display: 'flex', alignItems: 'center', gap: 18}}>
        <Enter delay={150}><LabelBlock ink size={24}>减轻责任年龄</LabelBlock></Enter>
        <Enter delay={160} style={{fontSize: 20, fontWeight: 800}}>已满12不满18周岁 → <Chip tone="pine" style={{fontSize: 19}}>应当从轻或者减轻（17条4款）</Chip></Enter>
        <Enter delay={172} style={{fontSize: 20, fontWeight: 800}}>已满75周岁 → <Chip tone="steel" style={{fontSize: 19}}>故意：可以从轻减轻</Chip> <Chip tone="pine" style={{fontSize: 19}}>过失：应当从轻减轻（17条之一）</Chip></Enter>
      </div>
    </div>
  </Shell>
);
