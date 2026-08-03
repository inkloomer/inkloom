import type {CSSProperties, ReactNode} from 'react';
import {CalendarDays, Camera, Contact, FileCheck2, House, Landmark, Mail, Megaphone, Send, Signature, Smartphone} from 'lucide-react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const C = {paper: '#eee9df', white: '#fffdf8', ink: '#20242a', blue: '#2d639e', teal: '#278f88', red: '#c84943', tan: '#c6b69b', gray: '#697078'};
const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const Reveal = ({children, delay, from = 'up', style}: {children: ReactNode; delay: number; from?: 'left' | 'right' | 'up'; style?: CSSProperties}) => {
  const frame = useCurrentFrame();
  const origin = {left: '34px 0px', right: '-34px 0px', up: '0px 30px'}[from];
  return <div style={{...style, opacity: interpolate(frame, [delay, delay + 18], [0, 1], {...CLAMP, easing: Easing.bezier(0.16, 1, 0.3, 1)}), translate: interpolate(frame, [delay, delay + 18], [origin, '0px 0px'], CLAMP)}}>{children}</div>;
};

const Shell = ({code, title, children}: {code: string; title: string; children: ReactNode}) => (
  <AbsoluteFill data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM} style={{overflow: 'hidden', backgroundColor: C.paper, color: C.ink, fontFamily: 'var(--inkloom-animation-body)'}}>
    <div style={{position: 'absolute', left: 36, top: 36, right: 36, bottom: 36, border: `2px solid ${C.tan}`, backgroundColor: 'rgba(255,253,248,0.42)'}} />
    <div style={{position: 'absolute', left: 80, top: 50, fontFamily: 'var(--inkloom-animation-mono)', fontSize: 18, color: C.blue, fontWeight: 800}}>SERVICE DOSSIER / {code}</div>
    <Reveal delay={0} style={{position: 'absolute', left: 80, top: 84, fontSize: 58, fontWeight: 900, letterSpacing: 0}}>{title}</Reveal>
    <div style={{position: 'absolute', left: 80, right: 80, top: 174, borderTop: `3px solid ${C.ink}`}} />
    <div style={{position: 'absolute', left: 0, right: 0, top: 194, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</div>
  </AbsoluteFill>
);

const ServiceDocument = ({style}: {style?: CSSProperties}) => <div style={{width: 150, height: 98, padding: '14px 18px', backgroundColor: C.blue, color: C.white, boxSizing: 'border-box', boxShadow: `8px 8px 0 ${C.tan}`, ...style}}><Send size={28}/><div style={{marginTop: 6, fontSize: 19, fontWeight: 900}}>诉讼文书</div></div>;

export const DirectRecipientsScene = () => {
  const frame = useCurrentFrame();
  const flow = interpolate(frame, [26, 116], [0, 1], CLAMP);
  return <Shell code="01" title="直接送达：交给谁，在哪里交？">
    <div data-layout="recipient-and-place-pairing" data-visual-anchor="role-pair" data-text-treatments="label-block,soft-highlight" data-visual-grammar="recipient,location,authorization" data-focal-rule="direct-service-matches-an-authorized-recipient-with-an-allowed-location" data-focal-channels="icon,connector,spatial" style={{position: 'absolute', left: 98, right: 98, top: 0, bottom: 0}}>
      <svg width="1724" height="700" style={{position: 'absolute', inset: 0}}><path d="M 420 350 H 820" stroke={C.blue} strokeWidth="8" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - flow}/><path d="M 900 350 H 1305" stroke={C.teal} strokeWidth="8" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - flow}/></svg>
      <Reveal delay={8} from="left" style={{position: 'absolute', left: 28, top: 160}}><ServiceDocument /></Reveal>
      <Reveal delay={38} style={{position: 'absolute', left: 510, top: 80, width: 470, height: 520, padding: '34px', border: `4px solid ${C.blue}`, backgroundColor: C.white}}><Contact size={66} color={C.blue}/><div style={{marginTop: 20, fontSize: 35, fontWeight: 900}}>受领主体</div><div style={{marginTop: 20, fontSize: 25, lineHeight: 1.65}}>本人 / 同住成年家属<br/>法定代表人、主要负责人<br/>诉讼代理人 / 指定代收人</div><div style={{marginTop: 24, paddingBottom: 7, borderBottom: `3px solid ${C.blue}`, fontSize: 22}}>离婚案：不得交给另一方当事人签收</div></Reveal>
      <Reveal delay={76} from="right" style={{position: 'absolute', right: 28, top: 80, width: 470, height: 520, padding: '34px', border: `4px solid ${C.teal}`}}><House size={66} color={C.teal}/><div style={{marginTop: 20, fontSize: 35, fontWeight: 900}}>交付地点</div><div style={{marginTop: 25, fontSize: 27, lineHeight: 1.7}}>住处送达<br/><span style={{color: C.teal, fontWeight: 900}}>到法院领取</span><br/>住处以外送达</div><div style={{marginTop: 22, display: 'flex', alignItems: 'center', gap: 12, fontSize: 22, color: C.gray}}><Landmark size={28}/>到院拒签：注明后视为送达</div></Reveal>
    </div>
  </Shell>;
};

export const RefusalServiceScene = () => {
  const frame = useCurrentFrame();
  const fork = interpolate(frame, [42, 124], [0, 1], CLAMP);
  return <Shell code="02" title="拒绝签收，才会进入留置送达">
    <div data-layout="refusal-to-service-document-fork" data-visual-anchor="document-fork" data-text-treatments="external-negation,stamp" data-visual-grammar="condition,proof,legal-effect" data-focal-rule="refusal-to-sign-opens-the-leave-service-path-which-requires-proof-and-creates-service-effect" data-focal-channels="icon,connector,motion" style={{position: 'absolute', left: 96, right: 96, top: 0, bottom: 0}}>
      <svg width="1728" height="690" style={{position: 'absolute', inset: 0}}><path d="M 390 350 H 670 L 920 185 M 670 350 L 920 515" fill="none" stroke={C.red} strokeWidth="8" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - fork}/><path d="M 1180 185 H 1450 M 1180 515 H 1450" stroke={C.teal} strokeWidth="8" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - fork}/></svg>
      <Reveal delay={8} style={{position: 'absolute', left: 60, top: 220, width: 340, height: 250, padding: '30px', backgroundColor: C.white, border: `4px solid ${C.red}`}}><Signature size={64} color={C.red}/><div style={{marginTop: 24, fontSize: 33, fontWeight: 900}}>拒绝签收</div><div style={{marginTop: 15, fontSize: 22, color: C.gray}}>当事人不在家，不等于拒收</div></Reveal>
      <Reveal delay={50} style={{position: 'absolute', left: 940, top: 72, width: 340, height: 220, padding: '28px', borderLeft: `12px solid ${C.blue}`}}><Landmark size={52} color={C.blue}/><div style={{marginTop: 16, fontSize: 28, fontWeight: 900}}>见证并签名</div><div style={{marginTop: 10, fontSize: 22, color: C.gray}}>基层组织或单位代表在场</div></Reveal>
      <Reveal delay={76} style={{position: 'absolute', left: 940, top: 410, width: 340, height: 220, padding: '28px', borderLeft: `12px solid ${C.blue}`}}><Camera size={52} color={C.blue}/><div style={{marginTop: 16, fontSize: 28, fontWeight: 900}}>拍照、摄像记录</div><div style={{marginTop: 10, fontSize: 22, color: C.gray}}>记录送达过程</div></Reveal>
      <Reveal delay={112} from="right" style={{position: 'absolute', right: 44, top: 225, width: 300, height: 240, padding: '28px', backgroundColor: C.teal, color: C.white}}><FileCheck2 size={58}/><div style={{marginTop: 22, fontSize: 34, fontWeight: 900}}>视为送达</div><div style={{marginTop: 20, fontSize: 22}}>调解书不能留置<br/>支付令可以留置</div></Reveal>
    </div>
  </Shell>;
};

export const ConfirmedRoutesScene = () => {
  const frame = useCurrentFrame();
  const travel = interpolate(frame, [24, 142], [0, 1], CLAMP);
  const routes = [
    {top: 46, icon: Smartphone, title: '电子送达', detail: '同意 + 能确认收悉', date: '到达特定系统之日', color: C.teal},
    {top: 210, icon: Mail, title: '邮寄送达', detail: '直接送达有困难', date: '挂号信回执收件日', color: C.blue},
    {top: 374, icon: Landmark, title: '委托 / 转交', detail: '其他法院；军队、监狱、教育机构', date: '只能交给法定机关', color: C.red},
  ];
  return <Shell code="03" title="送达困难后，日期和路径各有凭据">
    <div data-layout="conditioned-service-route-ribbons" data-visual-anchor="flow-path" data-text-treatments="thin-underline,label-block" data-visual-grammar="condition,routing,confirmation" data-focal-rule="each-alternate-service-route-has-its-own-prerequisite-and-date-or-authority-proof" data-focal-channels="icon,connector,spatial" style={{position: 'absolute', left: 94, right: 94, top: 0, bottom: 0}}>
      <div style={{position: 'absolute', left: 80, top: 82, bottom: 82, width: 10, backgroundColor: C.tan}} /><div style={{position: 'absolute', left: 80, top: 82, width: 10, height: 470, backgroundColor: C.blue, scale: `1 ${travel}`, transformOrigin: 'center top'}} />
      <Reveal delay={6} style={{position: 'absolute', left: 20, top: 14}}><ServiceDocument /></Reveal>
      {routes.map(({top, icon: Icon, title, detail, date, color}, index) => <Reveal key={title} delay={24 + index * 32} from="right" style={{position: 'absolute', left: 210, right: 54, top, height: 132, display: 'flex', alignItems: 'center', gap: 30, padding: '22px 30px', backgroundColor: index === 0 ? C.white : 'transparent', borderBottom: `3px solid ${color}`}}><Icon size={54} color={color}/><div style={{width: 250, fontSize: 32, fontWeight: 900}}>{title}</div><div style={{width: 390, fontSize: 24, color: C.gray}}>{detail}</div><div style={{padding: '10px 16px', border: `2px solid ${color}`, color, fontSize: 23, fontWeight: 800}}>{date}</div></Reveal>)}
      <div style={{position: 'absolute', left: 212, bottom: 18, fontSize: 23, color: C.gray}}>电子送达的判决书、裁定书、调解书均可送达；需要纸质文书的，法院应提供。</div>
    </div>
  </Shell>;
};

export const PublicNoticeBoundaryScene = () => <Shell code="04" title="公告送达是最后手段，不是送达失败就能用">
  <div data-layout="last-resort-notice-boundary" data-visual-anchor="boundary" data-text-treatments="external-negation,soft-highlight" data-visual-grammar="threshold,exception,deadline" data-focal-rule="public-notice-requires-unknown-whereabouts-or-exhausted-methods-and-has-strict-30-or-60-day-effects" data-focal-channels="icon,enclosure,contrast" style={{position: 'absolute', left: 94, right: 94, top: 0, bottom: 0}}>
    <Reveal delay={8} style={{position: 'absolute', left: 80, top: 62, width: 640, height: 470, padding: '38px', backgroundColor: C.white, border: `5px solid ${C.red}`}}><Megaphone size={70} color={C.red}/><div style={{marginTop: 24, fontSize: 42, fontWeight: 900}}>先过两道门</div><div style={{marginTop: 30, display: 'grid', gap: 18, fontSize: 29}}><div style={{padding: '13px 18px', borderLeft: `8px solid ${C.red}`}}>受送达人下落不明</div><div style={{padding: '13px 18px', borderLeft: `8px solid ${C.red}`}}>穷尽其他方式仍无法送达</div></div><div style={{marginTop: 34, fontSize: 23, color: C.gray}}>仅有“出差”或一时无人签收，不等于可以公告</div></Reveal>
    <Reveal delay={48} from="right" style={{position: 'absolute', right: 80, top: 62, width: 640, height: 220, padding: '34px', borderTop: `12px solid ${C.teal}`}}><CalendarDays size={54} color={C.teal}/><div style={{position: 'absolute', left: 130, top: 38, fontSize: 44, fontWeight: 900}}>30 日 / 60 日</div><div style={{position: 'absolute', left: 130, top: 105, fontSize: 25, color: C.gray}}>国内公告 30 日；境内无住所 60 日视为送达</div></Reveal>
    <Reveal delay={84} from="right" style={{position: 'absolute', right: 80, top: 348, width: 640, height: 184, padding: '32px', backgroundColor: C.ink, color: C.white}}><div style={{fontSize: 27, color: '#f4c15c', fontWeight: 900}}>禁止进入公告路径</div><div style={{marginTop: 22, fontSize: 31}}>支付令 &nbsp; / &nbsp; 简易程序</div><div style={{marginTop: 14, fontSize: 22, color: '#d5d7d6'}}>两者均不能公告送达</div></Reveal>
  </div>
</Shell>;

export const ServiceDeliveryNetwork = () => <AbsoluteFill>
  <TimelineSequence name="01-direct-recipients" {...SCENES.directRecipients}><DirectRecipientsScene /></TimelineSequence>
  <TimelineSequence name="02-refusal-service" {...SCENES.refusalService}><RefusalServiceScene /></TimelineSequence>
  <TimelineSequence name="03-confirmed-routes" {...SCENES.confirmedRoutes}><ConfirmedRoutesScene /></TimelineSequence>
  <TimelineSequence name="04-public-notice-boundary" {...SCENES.publicNoticeBoundary}><PublicNoticeBoundaryScene /></TimelineSequence>
</AbsoluteFill>;
