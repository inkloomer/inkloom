import {AbsoluteFill} from 'remotion';
import {FileText, GraduationCap, Landmark, Scale, ShieldCheck, Stamp, UserMinus, Users} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp as PlatformStamp, ThinU} from './theme';

export const RemovalArrivalScene = () => (
  <Shell code="01" title="异议不阻生效：齐某的除名与解散">
    <div data-layout="removal-dissolution-desk" data-visual-anchor="timeline-gate" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="removal-binds-on-arrival,objection-cannot-block-dissolution" data-focal-rule="removal-binds-on-arrival-and-objection-only-opens-a-suit-window-while-the-removed-partner-cannot-block-dissolution" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="rm-arrival-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 300, backgroundColor: C.panel, border: `3px solid ${C.stop}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <UserMinus size={30} color={C.stop} style={{flexShrink: 0}} />
          <LabelBlock color={C.stop} size={26}>齐某 · 多次投诉致损 → 一致决议除名</LabelBlock>
        </Enter>
        <Enter delay={26} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.board, lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>除名采<SoftHi style={{fontSize: 21}}>到达生效</SoftHi>——接到除名通知之日即退伙、丧失资格（A ✓）</span>
          <span style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <Neg size={21}>B「排除异议后才生效」——异议的救济只是 30 日内起诉，不阻生效</Neg>
          </span>
        </Enter>
      </div>
      <div data-final-knowledge="rm-dissolution-desk" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 300, backgroundColor: C.board, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={48} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <FileText size={28} color={C.ink} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={25}>齐某对解散决议提异议？</LabelBlock>
        </Enter>
        <Enter delay={66} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>他已被除名——<ThinU color={C.seal}>不再是合伙人</ThinU></span>
          <span>其余合伙人就是<SoftHi dark style={{fontSize: 21}}>全体合伙人</SoftHi>，解散决议生效（C ✗）</span>
        </Enter>
      </div>
      <div data-final-knowledge="rm-liquidator-desk" style={{position: 'absolute', left: 0, right: 0, top: 326, height: 300, backgroundColor: C.panel, border: `3px solid ${C.signal}`, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={86} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Users size={28} color={C.signal} style={{flexShrink: 0}} />
            <LabelBlock size={25}>清算人三产生（D ✓）</LabelBlock>
          </Enter>
          <div style={{marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8}}>
            <Enter delay={106} style={{fontSize: 21, fontWeight: 750, color: C.board, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="panel" style={{fontSize: 20, border: `2px solid ${C.panelLine}`}}>① 全体合伙人担任</Chip></Enter>
            <Enter delay={122} style={{fontSize: 21, fontWeight: 750, color: C.board, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="panel" style={{fontSize: 20, border: `2px solid ${C.panelLine}`}}>② 过半数指定部分合伙人</Chip><Chip tone="panel" style={{fontSize: 20, border: `2px solid ${C.panelLine}`}}>③ 委托第三人</Chip></Enter>
          </div>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={140} style={{fontSize: 21, fontWeight: 750, color: C.board, lineHeight: 1.7}}>15 日内未确定 → 利害关系人可申请<ThinU color={C.signal}>法院指定</ThinU></Enter>
          <Enter delay={158}><PlatformStamp delay={164} tone="signal">2021金题 AD</PlatformStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const NoticeScene = () => (
  <Shell code="02" title="已知债权人也要通知：10日＋60日">
    <div data-layout="notice-deadline-desk" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="notice-and-announcement-rule,known-creditor-notice" data-focal-rule="the-liquidator-must-notify-known-creditors-within-ten-days-and-announce-within-sixty-days" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="nt-deadline-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 300, backgroundColor: C.board, border: `3px solid ${C.seal}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Landmark size={30} color={C.seal} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={26}>清算人双时限（A ✗）</LabelBlock>
        </Enter>
        <Enter delay={26} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Chip tone="seal" style={{fontSize: 21}}>10 日内通知债权人</Chip><Chip tone="seal" style={{fontSize: 21}}>60 日内公告</Chip></span>
          <span style={{fontSize: 21, fontWeight: 750, color: C.ink, lineHeight: 1.7}}>赵某拿着 1000 万判决，是已知债权人——「已知就不用再通知」错误，通知义务照样跑不掉</span>
        </Enter>
      </div>
      <div data-final-knowledge="nt-liquidator-desk" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 300, backgroundColor: C.panel, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={48} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Users size={28} color={C.signal} style={{flexShrink: 0}} />
          <LabelBlock size={25}>C ✗ · 清算人非必须全体担任</LabelBlock>
        </Enter>
        <Enter delay={66} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.board, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>过半数同意可指定<ThinU color={C.signal}>部分合伙人</ThinU></span>
          <span>或委托<ThinU color={C.signal}>第三人</ThinU>担任清算人</span>
        </Enter>
      </div>
      <div data-final-knowledge="nt-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 326, height: 418, backgroundColor: C.ink, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={90} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.signal} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.board }}>清算核心流程四步</span>
          </Enter>
          <div style={{marginTop: 14, display: 'flex', flexDirection: 'column', gap: 12}}>
            <Enter delay={110} style={{fontSize: 21, fontWeight: 750, color: C.board, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="signal" style={{fontSize: 20, color: C.ink}}>① 清产核资</Chip><Chip tone="signal" style={{fontSize: 20, color: C.ink}}>② 通知＋公告债权人</Chip></Enter>
            <Enter delay={128} style={{fontSize: 21, fontWeight: 750, color: C.board, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="signal" style={{fontSize: 20, color: C.ink}}>③ 清偿债务</Chip><Chip tone="signal" style={{fontSize: 20, color: C.ink}}>④ 注销登记</Chip></Enter>
          </div>
          <Enter delay={148} style={{marginTop: 12, fontSize: 21, fontWeight: 750, color: 'rgba(233,226,206,0.66)', lineHeight: 1.7}}>两个时限数字题高频：10 日通知 / 60 日公告；对比简易减资公告 30 日——别串</Enter>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={168}><PlatformStamp delay={174} tone="signal">2021金题 AD（上一场景）</PlatformStamp></Enter>
          <Enter delay={194} style={{fontSize: 21, fontWeight: 750, color: 'rgba(233,226,206,0.7)', lineHeight: 1.7}}>2024金题的 A 项正是把「已知债权人免通知」当成了正确说法</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const LiabilityScene = () => (
  <Shell code="03" title="未清偿也可注销：责任分层不灭失">
    <div data-layout="liability-deregister-desk" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="post-deregistration-liability,cap-by-subscription" data-focal-rule="deregistration-is-a-procedural-end-not-a-liability-end-and-lps-never-face-unlimited-joint-liability" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="li-split-desk" style={{position: 'absolute', left: 0, top: 0, width: 864, height: 470, backgroundColor: C.board, border: `3px solid ${C.mint}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Scale size={30} color={C.mint} style={{flexShrink: 0}} />
          <LabelBlock color={C.mint} size={26}>责任分层（B ✗）</LabelBlock>
        </Enter>
        <div style={{marginTop: 14, display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={26} style={{fontSize: 22, fontWeight: 850, color: C.ink, lineHeight: 1.8, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Chip tone="stop" style={{fontSize: 20}}>普人 张某</Chip>无限连带——注销后仍连带</Enter>
          <Enter delay={46} style={{fontSize: 22, fontWeight: 850, color: C.ink, lineHeight: 1.8, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Chip tone="mint" style={{fontSize: 20, color: C.ink}}>限人 王某 李某</Chip>以<ThinU color={C.mint}>认缴出资额</ThinU>为限，不连带</Enter>
          <Enter delay={66} style={{fontSize: 21, fontWeight: 750, color: C.ink, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Neg size={20}>C 清算人必须三人共同担任——非必须</Neg></Enter>
        </div>
      </div>
      <div data-final-knowledge="li-deregister-desk" style={{position: 'absolute', left: 896, top: 0, width: 880, height: 470, backgroundColor: C.panel, border: `3px solid ${C.signal}`, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={86} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <ShieldCheck size={30} color={C.signal} style={{flexShrink: 0}} />
          <LabelBlock size={26}>D ✓ · 未清偿完毕也可注销</LabelBlock>
        </Enter>
        <Enter delay={106} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.board, lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>注销后<SoftHi style={{fontSize: 21}}>原普通合伙人</SoftHi>对存续期间债务仍无限连带</span>
          <span>赵某可继续向张某主张——程序终点≠<ThinU color={C.signal}>责任终点</ThinU></span>
        </Enter>
      </div>
      <div data-final-knowledge="li-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 496, height: 248, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={128} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.signal} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.board }}>背诵卡 · 责任不灭失</span>
          </Enter>
          <Enter delay={146} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: 'rgba(233,226,206,0.8)', lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 8}}>
            <span>· 注销后原普人：存续期间债务仍无限连带</span>
            <span>· 限人：以认缴出资额为限，不承担无限连带</span>
          </Enter>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={168}><PlatformStamp delay={174} tone="signal">正确答案 D</PlatformStamp></Enter>
          <Enter delay={196} style={{fontSize: 21, fontWeight: 750, color: 'rgba(233,226,206,0.7)', lineHeight: 1.7}}>02 章就此收官——合伙企业法全程「人合性」贯穿始终</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const TerminalStationWindDown = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-removal-arrival" {...SCENES.removalArrival}><RemovalArrivalScene /></TimelineSequence>
    <TimelineSequence name="02-notice" {...SCENES.notice}><NoticeScene /></TimelineSequence>
    <TimelineSequence name="03-liability" {...SCENES.liability}><LiabilityScene /></TimelineSequence>
  </AbsoluteFill>
);
