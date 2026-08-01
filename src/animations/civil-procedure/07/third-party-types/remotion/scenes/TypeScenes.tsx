import {Ban, FileText, Landmark, Link2, ShieldCheck, UserPlus, UserRound, UsersRound} from 'lucide-react';
import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {PALETTE, toSourceFrame} from '../storyboard';
import {baseTextStyle, ENTER_EASING, ImpactReveal, Keyword, MaskedReveal, PartyNode, Pin, RelationAnchor, RelationArrow, RelationHeading} from '../visual-system';

export const DefinitionScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const line = interpolate(frame, [26, 92], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)});
  const tokens = [
    {icon: UserRound, title: '有独三', note: '独立请求权，主动起诉', accent: 'coral' as const},
    {icon: UsersRound, title: '无独三', note: '法律上利害关系，附着参加', accent: 'mint' as const},
    {icon: Link2, title: '撤销之诉', note: '生效裁判外的救济通道', accent: 'yellow' as const},
  ];
  return <div style={{position: 'absolute', inset: 0}}>
    <RelationHeading index="01" eyebrow="relation map" title="先看关系，再看身份" accent="mint" />
    <MaskedReveal delay={18} duration={24} style={{position: 'absolute', left: 112, top: 260, width: 690}}>
      <div style={{...baseTextStyle, fontSize: 29, lineHeight: 1.42}}>第三人不是“多出来的人”。<br /><Keyword accent="mint">先标出原被告的法律关系</Keyword>，再定位新主体。</div>
    </MaskedReveal>
    <div style={{position: 'absolute', left: 780, top: 305, width: 1010, height: 270}}>
      <div style={{position: 'absolute', left: 80, top: 104, width: 850, height: 5, backgroundColor: PALETTE.mint, scale: `${line} 1`, transformOrigin: 'left center'}} />
      <div style={{position: 'absolute', left: 42, top: 28, color: PALETTE.muted, fontFamily: 'Consolas, monospace', fontSize: 22}}>原被告之间的法律关系 / SUBJECT AXIS</div>
      <div style={{position: 'absolute', left: 0, top: 154, color: PALETTE.bone, fontSize: 30, fontWeight: 800}}>原告</div>
      <div style={{position: 'absolute', right: 0, top: 154, color: PALETTE.bone, fontSize: 30, fontWeight: 800}}>被告</div>
      <Pin left={70} top={96} color={PALETTE.coral} label="P" />
      <Pin left={918} top={96} color={PALETTE.coral} label="D" />
      <Pin left={425} top={42} color={PALETTE.yellow} label="第三人" fontSize={26} />
      <div style={{position: 'absolute', left: 432, top: 68, width: 2, height: 40, backgroundColor: PALETTE.yellow}} />
    </div>
    <div style={{position: 'absolute', left: 112, top: 650, display: 'flex', gap: 30}}>
      {tokens.map(({icon: Icon, title, note, accent}, index) => { const p = interpolate(frame, [42 + index * 14, 68 + index * 14], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING}); return <div key={title} style={{width: 530, minHeight: 194, boxSizing: 'border-box', padding: '26px 30px', backgroundColor: PALETTE.panel, border: `1px solid ${PALETTE[accent]}`, opacity: p, translate: `0px ${(1 - p) * 32}px`}}><Icon color={PALETTE[accent]} size={46} /><div style={{...baseTextStyle, marginTop: 14, fontSize: 38, fontWeight: 900}}>{title}</div><div style={{marginTop: 8, color: PALETTE.muted, fontSize: 24}}>{note}</div></div>; })}
    </div>
  </div>;
};

export const ComparisonScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const independent = interpolate(frame, [18, 75], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const dependent = interpolate(frame, [76, 133], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  return <div style={{position: 'absolute', inset: 0}}>
    <RelationHeading index="02" eyebrow="boundary test" title="请求权决定站位" accent="coral" placement="top-right" />
    <div style={{position: 'absolute', left: 110, top: 255, color: PALETTE.muted, fontFamily: 'Consolas, monospace', fontSize: 22}}>同一条原被告关系轴 / 两种进入方式</div>
    <div style={{position: 'absolute', left: 100, top: 345, width: 760, height: 390, boxSizing: 'border-box', border: `1px solid ${PALETTE.coral}`, backgroundColor: PALETTE.panel, opacity: independent}}>
      <div style={{position: 'absolute', left: 60, top: 136, width: 640, height: 4, backgroundColor: PALETTE.coral}} />
      <Pin left={40} top={121} color={PALETTE.coral} label="P" /><Pin left={690} top={121} color={PALETTE.coral} label="D" />
      <PartyNode icon={UserRound} label="有独三" note="自己提出权利主张" accent="coral" style={{left: 150, top: 46}} active />
      <RelationArrow left={200} top={258} width={360} progress={independent} accent="coral" label="起诉参加" />
    </div>
    <div style={{position: 'absolute', left: 1060, top: 345, width: 760, height: 390, boxSizing: 'border-box', border: `1px solid ${PALETTE.mint}`, backgroundColor: PALETTE.panel, opacity: dependent}}>
      <div style={{position: 'absolute', left: 60, top: 136, width: 640, height: 4, backgroundColor: PALETTE.mint}} />
      <Pin left={40} top={121} color={PALETTE.mint} label="P" /><Pin left={690} top={121} color={PALETTE.mint} label="D" />
      <PartyNode icon={UsersRound} label="无独三" note="不提出独立权利主张" accent="mint" style={{left: 150, top: 46}} active />
      <RelationArrow left={200} top={258} width={360} progress={dependent} accent="mint" label="申请 / 追加" />
    </div>
    <div style={{position: 'absolute', left: 932, top: 400, color: PALETTE.yellow, fontFamily: 'Consolas, monospace', fontSize: 18, writingMode: 'vertical-rl', letterSpacing: 3}}>CLAIM DIVIDE</div>
    <ImpactReveal delay={150} style={{position: 'absolute', left: 590, top: 795}}><div style={{...baseTextStyle, fontSize: 30, fontWeight: 800}}>独立请求权，是类型区分的第一道界线</div></ImpactReveal>
  </div>;
};

export const RightsScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const gate = interpolate(frame, [24, 92], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const conditional = interpolate(frame, [105, 160], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  return <div style={{position: 'absolute', inset: 0}}>
    <RelationHeading index="03" eyebrow="rights gate" title="无独三的权利闸门" accent="yellow" placement="left-rail" />
    <div style={{position: 'absolute', left: 205, top: 230, width: 1580, height: 560}}>
      <div style={{position: 'absolute', left: 0, top: 196, width: 170, height: 120, display: 'grid', placeItems: 'center', border: `2px solid ${PALETTE.yellow}`, backgroundColor: PALETTE.yellowSoft, color: PALETTE.bone, fontSize: 28, fontWeight: 900}}>无独三</div>
      <div style={{position: 'absolute', left: 170, top: 253, width: 130, height: 4, backgroundColor: PALETTE.yellow, scale: `${gate} 1`, transformOrigin: 'left center'}} />
      <div style={{position: 'absolute', left: 300, top: 52, width: 460, height: 408, border: `2px solid ${PALETTE.coral}`, backgroundColor: PALETTE.coralSoft, opacity: gate}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14, padding: '24px 28px', borderBottom: `1px solid ${PALETTE.coral}`}}><Ban size={42} color={PALETTE.coral} /><div style={{...baseTextStyle, fontSize: 34, fontWeight: 900}}>红色阻断区：绝对不能</div></div>
        {['管辖权异议', '放弃 / 变更诉讼请求', '撤诉'].map((label, index) => <div key={label} style={{margin: '18px 28px 0', padding: '15px 18px', borderLeft: `5px solid ${PALETTE.coral}`, backgroundColor: PALETTE.panel, color: PALETTE.bone, fontSize: 23, fontWeight: 800, opacity: interpolate(gate, [index * 0.2, index * 0.2 + 0.35], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}}>{label}</div>)}
      </div>
      <div style={{position: 'absolute', left: 810, top: 210, width: 116, height: 116, border: `7px solid ${PALETTE.yellow}`, borderRadius: '50%', rotate: `${gate * 45}deg`}}><div style={{position: 'absolute', left: 47, top: -20, width: 14, height: 36, backgroundColor: PALETTE.yellow}} /></div>
      <div style={{position: 'absolute', left: 980, top: 52, width: 580, height: 408, border: `2px solid ${PALETTE.mint}`, backgroundColor: PALETTE.mintSoft, opacity: conditional}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14, padding: '24px 28px', borderBottom: `1px solid ${PALETTE.mint}`}}><ShieldCheck size={42} color={PALETTE.mint} /><div style={{...baseTextStyle, fontSize: 34, fontWeight: 900}}>绿色通行区：条件打开</div></div>
        <div style={{margin: '28px 28px 0', padding: '18px 20px', border: `1px solid ${PALETTE.mint}`, backgroundColor: PALETTE.panel}}><div style={{color: PALETTE.mint, fontSize: 29, fontWeight: 900}}>上诉权</div><div style={{marginTop: 7, color: PALETTE.muted, fontSize: 22}}>判决承担责任</div></div>
        <div style={{margin: '18px 28px 0', padding: '18px 20px', border: `1px solid ${PALETTE.mint}`, backgroundColor: PALETTE.panel}}><div style={{color: PALETTE.mint, fontSize: 29, fontWeight: 900}}>签收调解书</div><div style={{marginTop: 7, color: PALETTE.muted, fontSize: 22}}>被确定承担义务</div></div>
      </div>
      <div style={{position: 'absolute', left: 792, top: 370, color: PALETTE.yellow, fontFamily: 'Consolas, monospace', fontSize: 22, fontWeight: 700, textAlign: 'center'}}>责任落身<br />闸门转动</div>
    </div>
    <ImpactReveal delay={175} style={{position: 'absolute', left: 230, top: 850}}><div style={{...baseTextStyle, fontSize: 27, fontWeight: 800}}>陷阱：无独三可以承认对方诉讼请求</div></ImpactReveal>
  </div>;
};

export const DistinctionScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const relationLine = interpolate(frame, [16, 82], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const answer = interpolate(frame, [100, 154], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  return <div style={{position: 'absolute', inset: 0}}>
    <RelationHeading index="04" eyebrow="identity test" title="主体在不在关系轴上" accent="mint" placement="top-right" />
    <div style={{position: 'absolute', left: 90, top: 250, width: 1740, height: 285}}>
      <div style={{position: 'absolute', left: 90, top: 128, width: 1560, height: 6, backgroundColor: PALETTE.mint, scale: `${relationLine} 1`, transformOrigin: 'left center'}} />
      <Pin left={70} top={104} color={PALETTE.coral} label="原告" /><Pin left={1632} top={104} color={PALETTE.coral} label="被告" />
      <RelationAnchor left={350} top={72} label="法律关系的一方" accent="yellow" />
      <PartyNode icon={UserRound} label="候选主体" note="沿关系轴定位" accent="yellow" style={{left: 640, top: -10}} active />
    </div>
    <div style={{position: 'absolute', left: 120, top: 565, display: 'flex', gap: 30, opacity: answer}}>
      <div style={{width: 800, minHeight: 168, boxSizing: 'border-box', padding: '32px 34px', borderLeft: `6px solid ${PALETTE.mint}`, backgroundColor: PALETTE.mintSoft}}><div style={{...baseTextStyle, fontSize: 36, fontWeight: 900}}>在轴上 → 共同原告 / 共同被告</div><div style={{marginTop: 12, color: PALETTE.muted, fontSize: 24}}>本案原被告法律关系的一方</div></div>
      <div style={{width: 800, minHeight: 168, boxSizing: 'border-box', padding: '32px 34px', borderLeft: `6px solid ${PALETTE.coral}`, backgroundColor: PALETTE.coralSoft}}><div style={{...baseTextStyle, fontSize: 36, fontWeight: 900}}>轴外但受影响 → 第三人</div><div style={{marginTop: 12, color: PALETTE.muted, fontSize: 24}}>有权利主张是有独三，否则是无独三</div></div>
    </div>
    <ImpactReveal delay={178} style={{position: 'absolute', left: 120, top: 825}}><div style={{...baseTextStyle, fontSize: 30, fontWeight: 800}}>看关系，不看“人数”：位置决定身份</div></ImpactReveal>
  </div>;
};

export const NoIndependentClaimScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const relation = interpolate(frame, [18, 84], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const routes = interpolate(frame, [92, 150], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});

  return <div style={{position: 'absolute', inset: 0}}>
    <RelationHeading index="05" eyebrow="dependent interest" title="不争标的，但受结果影响" accent="mint" />

    <div style={{position: 'absolute', left: 110, top: 315, width: 990, height: 300, border: `1px solid ${PALETTE.grid}`, backgroundColor: PALETTE.panel}}>
      <div style={{position: 'absolute', left: 70, top: 194, width: 850, height: 5, backgroundColor: PALETTE.coral, scale: `${relation} 1`, transformOrigin: 'left center'}} />
      <Pin left={50} top={179} color={PALETTE.coral} label="原告" />
      <Pin left={900} top={179} color={PALETTE.coral} label="被告" />
      <div style={{position: 'absolute', left: 314, top: 54, width: 360, minHeight: 112, boxSizing: 'border-box', padding: '22px 26px', border: `1px solid ${PALETTE.yellow}`, backgroundColor: PALETTE.yellowSoft, opacity: relation}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 16}}><FileText size={38} color={PALETTE.yellow} /><div style={{...baseTextStyle, fontSize: 32, fontWeight: 900}}>本案处理结果</div></div>
        <div style={{marginTop: 12, color: PALETTE.muted, fontSize: 22}}>原告与被告争议的诉讼标的</div>
      </div>
    </div>

    <RelationArrow left={1110} top={425} width={190} progress={relation} accent="mint" label="法律上利害关系" />
    <PartyNode icon={UsersRound} label="无独三" note="没有独立请求权" accent="mint" style={{left: 1310, top: 350}} active />

    <div style={{position: 'absolute', left: 150, top: 742, color: PALETTE.yellow, fontFamily: 'Consolas, monospace', fontSize: 22, fontWeight: 800}}>参诉方式 / ENTRY</div>

    <div style={{position: 'absolute', left: 430, top: 676, width: 380, height: 102, boxSizing: 'border-box', padding: '24px 28px', display: 'flex', alignItems: 'center', gap: 18, border: `1px solid ${PALETTE.mint}`, backgroundColor: PALETTE.mintSoft, opacity: routes}}>
      <UserPlus size={40} color={PALETTE.mint} />
      <div style={{...baseTextStyle, fontSize: 30, fontWeight: 900}}>申请参加</div>
    </div>
    <div style={{position: 'absolute', left: 430, top: 810, width: 380, height: 102, boxSizing: 'border-box', padding: '24px 28px', display: 'flex', alignItems: 'center', gap: 18, border: `1px solid ${PALETTE.yellow}`, backgroundColor: PALETTE.yellowSoft, opacity: routes}}>
      <Landmark size={40} color={PALETTE.yellow} />
      <div style={{...baseTextStyle, fontSize: 30, fontWeight: 900}}>法院依职权追加</div>
    </div>

    <RelationArrow left={820} top={697} width={440} progress={routes} accent="mint" />
    <RelationArrow left={820} top={831} width={440} progress={routes} accent="yellow" />

    <ImpactReveal delay={148} style={{position: 'absolute', left: 1280, top: 706}}>
      <div style={{width: 420, height: 206, boxSizing: 'border-box', padding: '38px 32px', border: `2px solid ${PALETTE.mint}`, backgroundColor: PALETTE.panel, textAlign: 'center'}}>
        <div style={{color: PALETTE.mint, fontFamily: 'Consolas, monospace', fontSize: 20}}>JOIN THE CASE</div>
        <div style={{...baseTextStyle, marginTop: 16, fontSize: 38, fontWeight: 900}}>参加诉讼</div>
      </div>
    </ImpactReveal>
  </div>;
};
