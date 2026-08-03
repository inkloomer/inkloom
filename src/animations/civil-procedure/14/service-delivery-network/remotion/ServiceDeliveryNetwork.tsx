import type {CSSProperties, ReactNode} from 'react';
import {Ban, Building2, CalendarDays, Camera, Check, Contact, FileCheck2, FileText, House, Landmark, Mail, Megaphone, Send, Signature, Smartphone, UserRoundCheck, UsersRound, Video} from 'lucide-react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const C = {paper: '#f4f0e8', white: '#fffefa', ink: '#181c22', blue: '#1665a7', cyan: '#1aa6ad', green: '#34755a', red: '#d14a3e', yellow: '#e6b83d', violet: '#7352a3', gray: '#636a72', paleBlue: '#dbeaf4', paleCyan: '#d8eeee', paleRed: '#f5dedb', paleYellow: '#f7edc9'};
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Reveal = ({children, delay, from = 'up', style}: {children: ReactNode; delay: number; from?: 'left' | 'right' | 'up'; style?: CSSProperties}) => {
  const frame = useCurrentFrame();
  const origin = {left: '40px 0px', right: '-40px 0px', up: '0px 28px'}[from];
  return <div style={{...style, opacity: interpolate(frame, [delay, delay + 20], [0, 1], {...CLAMP, easing: Easing.bezier(0.16, 1, 0.3, 1)}), translate: interpolate(frame, [delay, delay + 20], [origin, '0px 0px'], CLAMP)}}>{children}</div>;
};

const Shell = ({children, code, title}: {children: ReactNode; code: string; title: string}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.paper, color: C.ink, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(24,28,34,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(24,28,34,.045) 1px, transparent 1px)', backgroundSize: '72px 72px'}}/>
    <div style={{position: 'absolute', left: 0, top: 0, width: 30, height: '100%', backgroundColor: C.blue}}/>
    <div style={{position: 'absolute', left: 78, top: 48, fontFamily: 'var(--inkloom-animation-mono)', fontSize: 18, color: C.blue, fontWeight: 850}}>SERVICE ROUTING / {code}</div>
    <Reveal delay={0} style={{position: 'absolute', left: 78, top: 79, fontSize: 58, fontWeight: 950}}>{title}</Reveal>
    <div style={{position: 'absolute', left: 78, right: 78, top: 168, height: 5, backgroundColor: C.ink}}/>
    <div style={{position: 'absolute', left: 0, right: 0, top: 184, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

const Document = ({label = '诉讼文书', style}: {label?: string; style?: CSSProperties}) => <div style={{width: 174, height: 120, padding: '16px 18px', boxSizing: 'border-box', backgroundColor: C.blue, color: C.white, boxShadow: `10px 10px 0 ${C.yellow}`, ...style}}><Send size={34}/><div style={{marginTop: 8, fontSize: 22, fontWeight: 950}}>{label}</div></div>;
const Arrow = ({color, left, progress, top, width}: {color: string; left: number; progress: number; top: number; width: number}) => <div style={{position: 'absolute', left, top, width, height: 9, backgroundColor: color, scale: `${progress} 1`, transformOrigin: 'left center'}}><div style={{position: 'absolute', right: -2, top: -10, borderTop: '15px solid transparent', borderBottom: '15px solid transparent', borderLeft: `22px solid ${color}`}}/></div>;
const Result = ({children, color, icon}: {children: ReactNode; color: string; icon: ReactNode}) => <div style={{display: 'flex', alignItems: 'center', gap: 18, padding: '20px 24px', borderLeft: `12px solid ${color}`, backgroundColor: C.white, fontSize: 27, fontWeight: 900}}>{icon}{children}</div>;

export const DirectRecipientsScene = () => {
  const frame = useCurrentFrame();
  const toDesk = interpolate(frame, [20, 62], [0, 1], CLAMP);
  const toReceipt = interpolate(frame, [76, 124], [0, 1], CLAMP);
  return <Shell code="01" title="直接送达：收件人和交付地点必须同时匹配">
    <div data-layout="recipient-address-matching-desk" data-visual-anchor="role-pair" data-visual-grammar="recipient,location,authorization" data-text-treatments="label-block,soft-highlight,external-negation" data-focal-rule="direct-service-needs-an-authorized-recipient-and-an-allowed-place" data-focal-channels="icon,connector,spatial" style={{position: 'absolute', inset: 0}}>
      <Reveal delay={6} from="left" style={{position: 'absolute', left: 102, top: 255}}><div data-stateful-source="service-document"><Document/></div></Reveal>
      <Arrow color={C.blue} left={302} top={316} width={220} progress={toDesk}/>
      <div style={{position: 'absolute', left: 546, top: 74, width: 730, height: 500, border: `7px solid ${C.ink}`, backgroundColor: C.white}}>
        <div style={{height: 70, backgroundColor: C.ink, color: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18, fontSize: 29, fontWeight: 950}}><Signature size={40}/>直接送达匹配台</div>
        <Reveal delay={36} style={{position: 'absolute', left: 34, top: 100, width: 300}}><div style={{display: 'flex', alignItems: 'center', gap: 16, fontSize: 31, fontWeight: 950}}><Contact size={52} color={C.blue}/>谁能签收</div><div style={{marginTop: 20, fontSize: 25, lineHeight: 1.65}}>本人<br/>同住成年家属<br/>法定代表人 / 负责人<br/>代理人 / 指定代收人</div></Reveal>
        <div style={{position: 'absolute', left: 360, top: 96, bottom: 32, width: 4, backgroundColor: C.yellow}}/>
        <Reveal delay={58} style={{position: 'absolute', left: 402, top: 100, width: 280}}><div style={{display: 'flex', alignItems: 'center', gap: 16, fontSize: 31, fontWeight: 950}}><House size={52} color={C.cyan}/>在哪里交</div><div style={{marginTop: 20, fontSize: 26, lineHeight: 1.75}}>住处<br/>法院领取<br/>住处以外</div></Reveal>
        <Reveal delay={88} style={{position: 'absolute', left: 34, right: 34, bottom: 24}}><div style={{padding: '14px 18px', backgroundColor: C.paleRed, borderLeft: `10px solid ${C.red}`, fontSize: 23, fontWeight: 850}}>离婚诉讼：不得交给兼为另一方当事人的同住成年家属</div></Reveal>
      </div>
      <Arrow color={C.green} left={1308} top={316} width={170} progress={toReceipt}/>
      <Reveal delay={104} from="right" style={{position: 'absolute', left: 1500, top: 178}}><div data-stateful-terminal="service-document" style={{width: 305, height: 270, padding: 28, backgroundColor: C.paleCyan, border: `6px solid ${C.green}`, textAlign: 'center'}}><UserRoundCheck size={72} color={C.green}/><div style={{fontSize: 34, fontWeight: 950, marginTop: 18}}>合法受领</div><div style={{fontSize: 24, marginTop: 16}}>对象 + 地点都匹配</div></div></Reveal>
      <div data-final-knowledge="authorized-recipient" style={{position: 'absolute', left: 570, top: 596, width: 510}}><Result color={C.blue} icon={<UsersRound size={42} color={C.blue}/>}>法定受领主体</Result></div>
      <div data-final-knowledge="authorized-place" style={{position: 'absolute', left: 1110, top: 596, width: 510}}><Result color={C.cyan} icon={<Landmark size={42} color={C.cyan}/>}>住处 / 法院 / 住处以外</Result></div>
    </div>
  </Shell>;
};

export const RefusalServiceScene = () => {
  const frame = useCurrentFrame();
  const entry = interpolate(frame, [24, 68], [0, 1], CLAMP);
  const proof = interpolate(frame, [76, 126], [0, 1], CLAMP);
  return <Shell code="02" title="只有明确拒签，留置送达通道才会打开">
    <div data-layout="refusal-proof-release-gate" data-visual-anchor="boundary" data-visual-grammar="condition,proof,legal-effect" data-text-treatments="external-negation,stamp,label-block" data-focal-rule="refusal-opens-the-gate-but-proof-completes-service" data-focal-channels="icon,connector,motion" style={{position: 'absolute', inset: 0}}>
      <Reveal delay={6} from="left" style={{position: 'absolute', left: 96, top: 246}}><div data-stateful-source="refused-document"><Document/></div></Reveal>
      <Arrow color={C.red} left={296} top={307} width={228} progress={entry}/>
      <div style={{position: 'absolute', left: 548, top: 92, width: 310, height: 470, backgroundColor: C.paleRed, border: `7px solid ${C.red}`, display: 'grid', placeItems: 'center', textAlign: 'center'}}><Signature size={82} color={C.red}/><div style={{fontSize: 38, fontWeight: 950}}>明确拒签</div><div style={{fontSize: 24, padding: '0 34px'}}>仅仅不在家<br/>不等于拒绝签收</div><Ban size={52} color={C.red}/></div>
      <Arrow color={C.blue} left={884} top={307} width={220} progress={proof}/>
      <div style={{position: 'absolute', left: 1130, top: 70, width: 430, height: 510, border: `7px solid ${C.ink}`, backgroundColor: C.white}}><div style={{height: 72, display: 'grid', placeItems: 'center', backgroundColor: C.ink, color: C.white, fontSize: 29, fontWeight: 950}}>留置证明闸门</div><Reveal delay={74} style={{margin: '42px 30px 0'}}><Result color={C.blue} icon={<UsersRound size={44} color={C.blue}/>}>见证并签名</Result></Reveal><Reveal delay={96} style={{margin: '28px 30px 0'}}><Result color={C.cyan} icon={<Camera size={44} color={C.cyan}/>}>拍照 / 录像记录</Result></Reveal><div style={{position: 'absolute', left: 34, right: 34, bottom: 28, height: 8, backgroundColor: C.blue, scale: `${proof} 1`, transformOrigin: 'left'}}/></div>
      <Reveal delay={118} from="right" style={{position: 'absolute', left: 1622, top: 210}}><div data-stateful-terminal="refused-document" data-final-knowledge="leave-service-effective" style={{width: 220, height: 260, padding: 24, backgroundColor: C.green, color: C.white, textAlign: 'center'}}><FileCheck2 size={62}/><div style={{fontSize: 31, fontWeight: 950, marginTop: 20}}>视为送达</div><Check size={48} style={{marginTop: 18}}/></div></Reveal>
      <div data-final-knowledge="mediation-order-excluded" style={{position: 'absolute', left: 630, top: 598, width: 520}}><Result color={C.red} icon={<Ban size={42} color={C.red}/>}>调解书不能留置</Result></div>
      <div data-final-knowledge="payment-order-allowed" style={{position: 'absolute', left: 1180, top: 598, width: 470}}><Result color={C.green} icon={<FileText size={42} color={C.green}/>}>支付令可以留置</Result></div>
    </div>
  </Shell>;
};

const RouteLane = ({color, delay, detail, icon: Icon, title, top}: {color: string; delay: number; detail: string; icon: typeof Mail; title: string; top: number}) => {
  const frame = useCurrentFrame();
  const travel = interpolate(frame, [delay, delay + 58], [0, 1], CLAMP);
  return <div style={{position: 'absolute', left: 330, right: 96, top, height: 145}}><div style={{position: 'absolute', inset: 0, backgroundColor: C.white, clipPath: 'polygon(0 0, 94% 0, 100% 50%, 94% 100%, 0 100%)', borderLeft: `12px solid ${color}`}}/><Reveal delay={delay - 10} style={{position: 'absolute', left: 34, top: 28, display: 'flex', alignItems: 'center', gap: 18}}><Icon size={52} color={color}/><div><div style={{fontSize: 31, fontWeight: 950}}>{title}</div><div style={{fontSize: 23, color: C.gray, marginTop: 8}}>{detail}</div></div></Reveal><div style={{position: 'absolute', left: 520, top: 68, width: 300, height: 7, backgroundColor: color, scale: `${travel} 1`, transformOrigin: 'left'}}/></div>;
};

export const ConfirmedRoutesScene = () => <Shell code="03" title="直接送达困难：每条替代路径都有自己的凭据">
  <div data-layout="alternate-service-routing-ribbons" data-visual-anchor="flow-path" data-visual-grammar="condition,routing,confirmation" data-text-treatments="thin-underline,label-block,stamp" data-focal-rule="each-alternate-route-ends-in-its-own-date-or-authority-proof" data-focal-channels="icon,connector,spatial" style={{position: 'absolute', inset: 0}}>
    <Reveal delay={4} style={{position: 'absolute', left: 88, top: 252}}><div data-stateful-source="alternate-document"><Document label="送达困难"/></div></Reveal>
    <div style={{position: 'absolute', left: 270, top: 82, bottom: 80, width: 10, backgroundColor: C.ink}}/>
    <RouteLane top={30} delay={28} icon={Smartphone} title="电子送达" detail="经同意 + 能确认收悉" color={C.cyan}/>
    <RouteLane top={214} delay={58} icon={Mail} title="邮寄送达" detail="直接送达有困难" color={C.blue}/>
    <RouteLane top={398} delay={88} icon={Building2} title="委托 / 转交" detail="其他法院；军队、监狱、教育机构" color={C.violet}/>
    <div data-stateful-terminal="alternate-document" style={{position: 'absolute', left: 1465, top: 578, width: 330, padding: '18px 22px', backgroundColor: C.paleYellow, borderBottom: `6px solid ${C.yellow}`, fontSize: 23, fontWeight: 850}}>三条路径，各自形成送达凭据</div>
    <Reveal delay={66} from="right" style={{position: 'absolute', left: 1390, top: 68}}><div data-final-knowledge="electronic-proof" style={{width: 360, padding: '14px 18px', backgroundColor: C.cyan, color: C.white, fontSize: 24, fontWeight: 900}}>到达特定系统之日</div></Reveal>
    <Reveal delay={96} from="right" style={{position: 'absolute', left: 1390, top: 252}}><div data-final-knowledge="mail-proof" style={{width: 360, padding: '14px 18px', backgroundColor: C.blue, color: C.white, fontSize: 24, fontWeight: 900}}>挂号信回执收件日</div></Reveal>
    <Reveal delay={126} from="right" style={{position: 'absolute', left: 1390, top: 436}}><div data-final-knowledge="transfer-proof" style={{width: 360, padding: '14px 18px', backgroundColor: C.violet, color: C.white, fontSize: 24, fontWeight: 900}}>交给法定机关</div></Reveal>
  </div>
</Shell>;

export const PublicNoticeBoundaryScene = () => {
  const frame = useCurrentFrame();
  const gateOne = interpolate(frame, [28, 68], [0, 1], CLAMP);
  const gateTwo = interpolate(frame, [70, 112], [0, 1], CLAMP);
  return <Shell code="04" title="公告送达：必须先穿过最后手段的两道门">
    <div data-layout="public-notice-double-threshold" data-visual-anchor="boundary" data-visual-grammar="threshold,exception,deadline" data-text-treatments="external-negation,soft-highlight,stamp" data-focal-rule="public-notice-needs-unknown-whereabouts-or-exhausted-routes-before-time-runs" data-focal-channels="icon,enclosure,contrast" style={{position: 'absolute', inset: 0}}>
      <Reveal delay={4} from="left" style={{position: 'absolute', left: 90, top: 246}}><div data-stateful-source="notice-document"><Document/></div></Reveal>
      <Arrow color={C.red} left={286} top={307} width={168} progress={gateOne}/>
      <div style={{position: 'absolute', left: 480, top: 94, width: 340, height: 455, border: `8px solid ${C.red}`, backgroundColor: C.paleRed, textAlign: 'center', padding: 30}}><Contact size={72} color={C.red}/><div style={{fontSize: 35, fontWeight: 950, marginTop: 22}}>第一道门</div><div style={{fontSize: 27, marginTop: 28, lineHeight: 1.55}}>受送达人<br/><b>下落不明</b></div><div style={{position: 'absolute', left: 34, right: 34, bottom: 32, height: 10, backgroundColor: C.red, scale: `${gateOne} 1`, transformOrigin: 'left'}}/></div>
      <Arrow color={C.red} left={846} top={307} width={158} progress={gateTwo}/>
      <div style={{position: 'absolute', left: 1030, top: 94, width: 340, height: 455, border: `8px solid ${C.ink}`, backgroundColor: C.white, textAlign: 'center', padding: 30}}><Send size={72} color={C.blue}/><div style={{fontSize: 35, fontWeight: 950, marginTop: 22}}>第二道门</div><div style={{fontSize: 27, marginTop: 28, lineHeight: 1.55}}>穷尽其他方式<br/><b>仍无法送达</b></div><div style={{position: 'absolute', left: 34, right: 34, bottom: 32, height: 10, backgroundColor: C.blue, scale: `${gateTwo} 1`, transformOrigin: 'left'}}/></div>
      <Reveal delay={106} from="right" style={{position: 'absolute', left: 1430, top: 88}}><div data-stateful-terminal="notice-document" data-final-knowledge="notice-deadline" style={{width: 380, height: 240, padding: 30, backgroundColor: C.paleCyan, border: `7px solid ${C.cyan}`}}><Megaphone size={62} color={C.cyan}/><div style={{fontSize: 35, fontWeight: 950, marginTop: 16}}>公告送达</div><div style={{fontSize: 28, marginTop: 18}}><CalendarDays size={34} style={{verticalAlign: 'middle'}}/> 国内 30 日 / 境外 60 日</div></div></Reveal>
      <Reveal delay={128} from="right" style={{position: 'absolute', left: 1430, top: 380}}><div data-final-knowledge="notice-prohibitions" style={{width: 380, height: 170, padding: 28, backgroundColor: C.ink, color: C.white}}><div style={{display: 'flex', alignItems: 'center', gap: 16, color: C.yellow, fontSize: 26, fontWeight: 950}}><Ban size={42}/>禁止公告</div><div style={{fontSize: 29, marginTop: 22}}>支付令 / 简易程序</div></div></Reveal>
      <div data-final-knowledge="notice-thresholds" style={{position: 'absolute', left: 574, top: 590, width: 700}}><Result color={C.red} icon={<Video size={42} color={C.red}/>}>不是“送达不顺”就能公告，必须满足法定门槛</Result></div>
    </div>
  </Shell>;
};

export const ServiceDeliveryNetwork = () => <AbsoluteFill>
  <TimelineSequence name="01-direct-recipients" {...SCENES.directRecipients}><DirectRecipientsScene/></TimelineSequence>
  <TimelineSequence name="02-refusal-service" {...SCENES.refusalService}><RefusalServiceScene/></TimelineSequence>
  <TimelineSequence name="03-confirmed-routes" {...SCENES.confirmedRoutes}><ConfirmedRoutesScene/></TimelineSequence>
  <TimelineSequence name="04-public-notice-boundary" {...SCENES.publicNoticeBoundary}><PublicNoticeBoundaryScene/></TimelineSequence>
</AbsoluteFill>;
