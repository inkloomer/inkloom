import {CalendarClock, FileWarning, Gavel, Landmark, Scale, ShieldAlert, Stamp, UserRound} from 'lucide-react';
import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {PALETTE, toSourceFrame} from '../storyboard';
import {CropText, ImpactReveal, InkStamp, Keyword, MaskedReveal, PaperDocument, Plate, PrintArrow, PrintHeading} from '../visual-system';

export const ConceptScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const paper = interpolate(frame, [18, 72], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)});
  const overprint = interpolate(frame, [76, 132], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)});
  return <div style={{position: 'absolute', inset: 0}}>
    <PrintHeading index="01" eyebrow="overprint" title="裁判受损，另开一张纸" accent="vermilion" />
    <MaskedReveal delay={16} duration={24} style={{position: 'absolute', left: 112, top: 278, width: 540}}><div style={{...{color: PALETTE.ink, fontSize: 29, lineHeight: 1.42}, fontFamily: 'var(--inkloom-animation-body)'}}>第三人没有参加原诉，<br /><Keyword accent="vermilion">生效裁判却压到了他的权益</Keyword>。</div></MaskedReveal>
    <PaperDocument left={700} top={260} width={860} height={470} progress={paper} title="生效裁判" subtitle="原诉已封存 / RIGHTS UNDER PRINT" />
    <InkStamp left={1390} top={665} label="权益受损" accent="vermilion" progress={overprint} icon="alert" />
    <div style={{position: 'absolute', left: 700, top: 750, width: 860, height: 6, backgroundColor: PALETTE.cyan, scale: `${overprint} 1`, transformOrigin: 'left center'}} />
    <div style={{position: 'absolute', left: 700, top: 785, color: PALETTE.muted, fontFamily: 'var(--inkloom-animation-mono)', fontSize: 22}}>NEW PLATE / 第三人撤销之诉</div>
  </div>;
};

export const ConditionsScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const points = [
    {icon: UserRound, label: '资格', detail: '有独三 / 无独三', color: PALETTE.cyan, dx: -90, dy: -45},
    {icon: ShieldAlert, label: '非归责', detail: '未参加原诉', color: PALETTE.vermilion, dx: -30, dy: -15},
    {icon: Scale, label: '权益受损', detail: '生效裁判压到权益', color: PALETTE.yellow, dx: 30, dy: 15},
    {icon: Stamp, label: '裁判错误', detail: '内容存在错误', color: PALETTE.violet, dx: 90, dy: 45},
  ];
  return <div style={{position: 'absolute', inset: 0}}>
    <PrintHeading index="02" eyebrow="four plates" title="四块印版，缺一不成案" accent="violet" placement="right-rail" />
    <div style={{position: 'absolute', left: 120, top: 130, color: PALETTE.muted, fontFamily: 'var(--inkloom-animation-mono)', fontSize: 22}}>四种颜色必须在同一张起诉文书上套准 / REGISTER AS ONE</div>
    {points.map(({icon: Icon, label, detail, color, dx, dy}, index) => { const p = interpolate(frame, [28 + index * 24, 66 + index * 24], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)}); return <div key={label} style={{position: 'absolute', left: 300 + dx, top: 315 + dy, width: 1350, height: 500, boxSizing: 'border-box', border: `5px solid ${color}`, opacity: p, translate: `${(1 - p) * dx}px ${(1 - p) * dy}px`}}><div style={{position: 'absolute', left: 30 + index * 305, top: -70, width: 290, height: 140, padding: '18px 20px', boxSizing: 'border-box', backgroundColor: PALETTE.sheet, border: `2px solid ${color}`, color}}><div style={{display: 'flex', alignItems: 'center', gap: 11}}><Icon size={31} /><span style={{fontSize: 30, fontWeight: 900}}>{label}</span></div><div style={{marginTop: 9, color: PALETTE.muted, fontSize: 22}}>{detail}</div></div></div>; })}
    <div style={{position: 'absolute', left: 560, top: 455, width: 800, height: 260, boxSizing: 'border-box', padding: '36px 44px', backgroundColor: PALETTE.sheet, border: `2px solid ${PALETTE.ink}`, boxShadow: '10px 12px 0 rgba(42,37,31,0.13)'}}><CropText>COMBINED IMPRESSION</CropText><div style={{marginTop: 24, color: PALETTE.ink, fontSize: 48, fontWeight: 900}}>四项条件套准</div><div style={{marginTop: 16, color: PALETTE.muted, fontSize: 25}}>资格 + 非归责 + 权益受损 + 裁判错误</div></div>
    <ImpactReveal delay={176} style={{position: 'absolute', left: 560, top: 805}}><div style={{color: PALETTE.ink, fontSize: 28, fontWeight: 800}}>少一层，就不能形成撤销之诉</div></ImpactReveal>
  </div>;
};

export const ProcedureScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const route = interpolate(frame, [18, 145], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)});
  const stations = [
    {icon: CalendarClock, label: '6个月', detail: '知道或应当知道之日起', accent: 'yellow' as const},
    {icon: Landmark, label: '作出生效裁判的法院', detail: '不是原审一审法院', accent: 'cyan' as const},
    {icon: Gavel, label: '一审普通程序', detail: '判决不服可以上诉', accent: 'violet' as const},
  ];
  return <div style={{position: 'absolute', inset: 0}}>
    <PrintHeading index="03" eyebrow="press route" title="期限与管辖，沿输送带走" accent="cyan" placement="top-right" />
    <div style={{position: 'absolute', left: 110, top: 280, width: 1700, height: 8, backgroundColor: PALETTE.ink, scale: `${route} 1`, transformOrigin: 'left center'}} />
    {stations.map(({icon: Icon, label, detail, accent}, index) => <Plate key={label} icon={Icon} label={`STATION 0${index + 1}`} detail={label} accent={accent} left={120 + index * 600} top={360} opacity={interpolate(route, [index * 0.25, index * 0.25 + 0.3], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})} rotate={index === 1 ? '1deg' : '-1deg'} />)}
    <div style={{position: 'absolute', left: 150, top: 650, width: 1600, display: 'flex', justifyContent: 'space-between', color: PALETTE.muted, fontFamily: 'var(--inkloom-animation-meta)', fontSize: 16}}><span>KNOW / SHOULD KNOW</span><span>FINAL JUDGMENT COURT</span><span>APPEALABLE JUDGMENT</span></div>
    <ImpactReveal delay={160} style={{position: 'absolute', left: 140, top: 780}}><div style={{color: PALETTE.ink, fontSize: 29, fontWeight: 800}}>重点：由作出生效裁判的法院管辖</div></ImpactReveal>
  </div>;
};

export const ClassificationScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const transform = interpolate(frame, [18, 110], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)});
  const outcomes = interpolate(frame, [120, 175], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)});
  return <div style={{position: 'absolute', inset: 0}}>
    <PrintHeading index="04" eyebrow="final plate" title="形成之诉，改写旧裁判" accent="yellow" placement="left-rail" />
    <PaperDocument left={190} top={270} progress={transform} title="原生效文书" subtitle="旧版 / ORIGINAL PLATE" />
    <PrintArrow left={830} top={455} width={240} progress={transform} accent="vermilion" label="套印改变" />
    <div style={{position: 'absolute', left: 1100, top: 250, opacity: transform}}><PaperDocument left={0} top={0} progress={1} title="改变或撤销" subtitle="新版 / REMEDY PLATE" /></div>
    <InkStamp left={1370} top={620} label="形成之诉" accent="violet" progress={transform} />
    <div style={{position: 'absolute', left: 190, top: 785, display: 'flex', gap: 34, opacity: outcomes}}><div style={{padding: '22px 30px', backgroundColor: PALETTE.cyanSoft, borderLeft: `6px solid ${PALETTE.cyan}`, color: PALETTE.ink, fontSize: 30, fontWeight: 900}}>成立 → 改变 / 撤销</div><div style={{padding: '22px 30px', backgroundColor: PALETTE.vermilionSoft, borderLeft: `6px solid ${PALETTE.vermilion}`, color: PALETTE.ink, fontSize: 30, fontWeight: 900}}>不成立 → 驳回请求</div></div>
    <ImpactReveal delay={185} style={{position: 'absolute', right: 150, top: 800}}><div style={{color: PALETTE.ink, fontSize: 29, fontWeight: 800}}>一审判决仍可上诉</div></ImpactReveal>
  </div>;
};
