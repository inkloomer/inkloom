import {AbsoluteFill} from 'remotion';
import {Bell, FileText, GraduationCap, HandCoins, Landmark, Scale, Stamp, UserMinus, UserPlus, Users} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp as StoneStamp, ThinU} from './theme';

export const ExpulsionScene = () => (
  <Shell code="01" title="拔碑：除名到达生效">
    <div data-layout="expulsion-timeline-desk" data-visual-anchor="timeline-gate" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="expulsion-effective-on-arrival,pre-exit-debt-continuity" data-focal-rule="removal-takes-effect-when-the-notice-arrives-and-debts-born-before-exit-still-bind-the-removed-partner" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="exp-timeline-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 322, backgroundColor: C.panel, border: `3px solid ${C.banner}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <UserMinus size={30} color={C.seal} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={26}>草原狼商店 · 乙的时间线</LabelBlock>
        </Enter>
        <div style={{marginTop: 18, position: 'relative', height: 170}}>
          <div style={{position: 'absolute', left: 10, right: 10, top: 78, height: 5, backgroundColor: C.panelLine}} />
          {[
            {x: 10, tag: '2020-3 签约采购 100 万', tone: 'banner' as const, d: 24},
            {x: 380, tag: '2020-4 乙未出资被除名', tone: 'seal' as const, d: 42},
            {x: 720, tag: '债务到期无力清偿', tone: 'stone' as const, d: 60},
          ].map((n) => (
            <div key={n.tag} style={{position: 'absolute', left: n.x, top: 0, width: 300}}>
              <Enter delay={n.d}><Chip tone={n.tone} style={{fontSize: 19}}>{n.tag}</Chip></Enter>
              <div style={{position: 'absolute', left: 12, top: 70, width: 14, height: 14, borderRadius: 7, backgroundColor: n.tone === 'banner' ? C.banner : n.tone === 'seal' ? C.seal : C.granite}} />
            </div>
          ))}
        </div>
        <Enter delay={78} style={{marginTop: 4, fontSize: 22, fontWeight: 900, color: C.stone}}>除名通知<SoftHi style={{fontSize: 21}}>到达生效</SoftHi>——乙自接到通知之日退伙、丧失资格（A ✓）</Enter>
      </div>
      <div data-final-knowledge="exp-debt-desk" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 322, backgroundColor: C.stone, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={92} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <HandCoins size={28} color={C.ink} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={25}>拔碑不勾账 · 退伙前债务仍连带</LabelBlock>
        </Enter>
        <Enter delay={110} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>债务发生在 2020-3（<ThinU color={C.seal}>退伙之前</ThinU>）</span>
          <span>乙仍对盛鑫公司<ThinU color={C.seal}>承担连带责任</ThinU>（C ✗）</span>
        </Enter>
      </div>
      <div data-final-knowledge="exp-recap-verdict" style={{position: 'absolute', left: 0, right: 0, top: 348, height: 396, backgroundColor: C.ink, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={126} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.banner} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.stone}}>除名生效规则 · 两种退伙对照</span>
          </Enter>
          <div style={{marginTop: 14, display: 'flex', flexDirection: 'column', gap: 12}}>
            <Enter delay={146} style={{fontSize: 21, fontWeight: 800, color: C.stone, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="seal" style={{fontSize: 20}}>除名退伙</Chip><span>一致决议＋书面通知 → <ThinU color={C.banner}>接到通知之日</ThinU>生效</span>
            </Enter>
            <Enter delay={166} style={{fontSize: 21, fontWeight: 800, color: C.stone, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="banner" style={{fontSize: 20, color: C.ink}}>当然退伙</Chip><span>人死、财空、资格无 → 事由<ThinU color={C.banner}>实际发生之日</ThinU>生效</span>
            </Enter>
            <Enter delay={186} style={{fontSize: 21, fontWeight: 750, color: 'rgba(232,228,212,0.66)', lineHeight: 1.7}}>对照记忆（2025金题）：公司股东失权是<ThinU color={C.banner}>发出主义</ThinU>，合伙除名是<ThinU color={C.banner}>到达主义</ThinU>——两门别推混</Enter>
          </div>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={206} style={{fontSize: 23, fontWeight: 900, color: C.banner}}>2022金题 · 答案 AD</Enter>
          <Enter delay={222} style={{fontSize: 21, fontWeight: 750, color: 'rgba(232,228,212,0.7)', lineHeight: 1.8}}>B 项说戊入伙要乙同意——乙已拔碑离场，见 02 场景；D 项戊的连带也在那一格</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const AdmissionScene = () => (
  <Shell code="02" title="立碑：新合伙人入伙的两连问">
    <div data-layout="admission-gate-desk" data-visual-anchor="role-pair" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="unanimous-admission-rule,pre-admission-debt-joinder" data-focal-rule="a-new-partner-joins-by-unanimous-consent-of-current-partners-and-inherits-liability-for-debts-born-before-admission" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="adm-consent-desk" style={{position: 'absolute', left: 0, top: 0, width: 864, height: 470, backgroundColor: C.panel, border: `3px solid ${C.sky}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <UserPlus size={30} color={C.sky} style={{flexShrink: 0}} />
          <LabelBlock color={C.sky} size={26}>第一问 · 谁点头才能立碑？</LabelBlock>
        </Enter>
        <Enter delay={24} style={{marginTop: 14, fontSize: 23, fontWeight: 900, color: C.stone, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>新合伙人入伙须<SoftHi style={{fontSize: 22}}>全体现任合伙人一致同意</SoftHi></span>
          <span style={{fontSize: 21, fontWeight: 750, color: C.stoneDim, lineHeight: 1.7}}>乙 2020-4 已被除名退伙——不再是合伙人，<ThinU color={C.sky}>他的同意根本不在清点范围</ThinU>（B ✗）</span>
        </Enter>
        <div style={{marginTop: 14, backgroundColor: C.panel, borderRadius: 10, padding: '12px 16px', border: `2px solid ${C.panelLine}`}}>
          <Enter delay={46} style={{fontSize: 21, fontWeight: 750, color: C.stone, lineHeight: 1.7}}>2021-3 甲丙丁一致同意吸收戊 → 合法入伙 → 2021-4 完成变更登记，碑上刻名</Enter>
        </div>
      </div>
      <div data-final-knowledge="adm-debt-desk" style={{position: 'absolute', left: 896, top: 0, width: 880, height: 470, backgroundColor: C.stone, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={62} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <HandCoins size={30} color={C.ink} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={26}>第二问 · 入伙前的债背不背？</LabelBlock>
        </Enter>
        <Enter delay={80} style={{marginTop: 14, fontSize: 23, fontWeight: 900, color: C.ink, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>背——入伙<ThinU color={C.seal}>前</ThinU>发生的债务，新合伙人与其他人一样<SoftHi dark style={{fontSize: 22}}>连带</SoftHi>（D ✓）</span>
          <span style={{fontSize: 21, fontWeight: 750, color: C.ink, lineHeight: 1.7}}>100 万货款生于 2020-3，戊 2021 年才立碑，仍要担</span>
        </Enter>
        <div style={{marginTop: 14, border: `3px dashed ${C.seal}`, borderRadius: 10, padding: '12px 16px'}}>
          <Enter delay={102} style={{fontSize: 21, fontWeight: 800, color: C.ink, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Stamp size={22} color={C.seal} style={{flexShrink: 0}} />立碑前先查账——入伙尽调是自助，法律不豁免</Enter>
        </div>
      </div>
      <div data-final-knowledge="adm-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 496, height: 248, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={120} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.banner} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.stone}}>对称记忆 · 退伙人 vs 入伙人</span>
          </Enter>
          <div style={{marginTop: 14, display: 'flex', flexDirection: 'column', gap: 12}}>
            <Enter delay={140} style={{fontSize: 22, fontWeight: 800, color: C.stone, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="seal" style={{fontSize: 20}}>拔碑的乙</Chip><span>退伙前债务仍连带（Q60 C ✗）</span>
            </Enter>
            <Enter delay={160} style={{fontSize: 22, fontWeight: 800, color: C.stone, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="sky" style={{fontSize: 20}}>立碑的戊</Chip><span>入伙前债务即连带（Q60 D ✓）</span>
            </Enter>
          </div>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={182} style={{fontSize: 23, fontWeight: 900, color: C.banner}}>一句话</Enter>
          <Enter delay={198} style={{fontSize: 22, fontWeight: 750, color: C.stone, lineHeight: 1.8}}>走了的带旧账，<ThinU color={C.banner}>来了的也背旧账</ThinU>——合伙的债，前后任都躲不掉</Enter>
          <Enter delay={218}><StoneStamp delay={224} tone="banner">AD 双正确</StoneStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const InheritanceScene = () => (
  <Shell code="03" title="继承资格与结算：不清算、不公告">
    <div data-layout="inheritance-settlement-desk" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="qualification-gated-inheritance,settlement-not-liquidation" data-focal-rule="inheriting-a-seat-needs-the-charter-qualification-and-settlement-replaces-liquidation-while-removal-needs-no-announcement" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="inh-qualification-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 320, backgroundColor: C.stone, border: `3px solid ${C.ink}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Scale size={30} color={C.ink} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={26}>2025金题 · 丙死亡，戊想继承</LabelBlock>
        </Enter>
        <Enter delay={24} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>合伙协议约定：合伙人须<SoftHi dark style={{fontSize: 21}}>博士学位</SoftHi></span>
          <span>戊只有本科——资格不符，<ThinU color={C.seal}>不能取得合伙人资格</ThinU>（A ✓）</span>
          <span>合伙企业应向戊<ThinU color={C.seal}>退还丙的财产份额</ThinU>——按退伙时财产状况<SoftHi dark style={{fontSize: 21}}>结算</SoftHi>，<Neg size={21}>无需清算（B ✗）</Neg></span>
        </Enter>
      </div>
      <div data-final-knowledge="inh-settlement-desk" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 320, backgroundColor: C.panel, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={46} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <GraduationCap size={26} color={C.banner} style={{flexShrink: 0}} />
          <Landmark size={26} color={C.banner} style={{flexShrink: 0}} />
          <LabelBlock size={25}>结算 ≠ 清算</LabelBlock>
        </Enter>
        <div style={{marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={64} style={{fontSize: 21, fontWeight: 750, color: C.stone, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="banner" style={{fontSize: 20, color: C.ink}}>结算</Chip>按退伙时财产状况算个退伙包</Enter>
          <Enter delay={82} style={{fontSize: 21, fontWeight: 750, color: C.stone, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="seal" style={{fontSize: 20}}>清算</Chip>解散后注销前的法定程序</Enter>
          <Enter delay={100} style={{fontSize: 20, fontWeight: 750, color: C.stoneDim, lineHeight: 1.6}}>退伙不导致解散——一走一算，铺子照开</Enter>
        </div>
      </div>
      <div data-final-knowledge="inh-removal-notice-desk" style={{position: 'absolute', left: 0, right: 0, top: 346, height: 214, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={118} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Bell size={28} color={C.banner} style={{flexShrink: 0}} />
            <span style={{fontSize: 23, fontWeight: 900, color: C.stone}}>除名要公告吗？——不要（D ✗）</span>
          </Enter>
          <Enter delay={136} style={{marginTop: 10, fontSize: 21, fontWeight: 750, color: 'rgba(232,228,212,0.7)', lineHeight: 1.8}}>除名是合伙人内部关系，不影响债权人；接到通知到达即生效，无需公告广而告之</Enter>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8}}>
          <Enter delay={156} style={{fontSize: 21, fontWeight: 800, color: C.stone, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="banner" style={{fontSize: 20, color: C.ink}}>对照</Chip>减资公告 30 日——那是动债权人蛋糕的事</Enter>
          <Enter delay={174}><StoneStamp delay={180} tone="jade">2025金题 答案 AC</StoneStamp></Enter>
        </div>
      </div>
      <div data-final-knowledge="inh-example-desk" style={{position: 'absolute', left: 0, right: 0, top: 586, height: 158, backgroundColor: C.panel, borderRadius: 14, padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={190} style={{fontSize: 21, fontWeight: 750, color: C.stone, lineHeight: 1.8}}>结算示例：资产 100 万、负债 30 万，份额 30% 无损失 → 退伙包 <Chip tone="banner" style={{fontSize: 20, color: C.ink}}>21 万</Chip>；若该担损失 10 万 → 只退 <Chip tone="banner" style={{fontSize: 20, color: C.ink}}>11 万</Chip></Enter>
        </div>
        <div style={{width: 380, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
          <Enter delay={206} style={{fontSize: 20, fontWeight: 800, color: C.stoneDim, whiteSpace: 'nowrap'}}>公式：份额 ×（资产−负债）− 应担损失</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const BoundaryStoneGateHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-expulsion" {...SCENES.expulsion}><ExpulsionScene /></TimelineSequence>
    <TimelineSequence name="02-admission" {...SCENES.admission}><AdmissionScene /></TimelineSequence>
    <TimelineSequence name="03-inheritance" {...SCENES.inheritance}><InheritanceScene /></TimelineSequence>
  </AbsoluteFill>
);
