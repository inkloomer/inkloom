import {AbsoluteFill} from 'remotion';
import {Bell, FileText, GraduationCap, Landmark, Scale, ShieldCheck, Stamp, UserCheck, Users} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp as SlipStamp, ThinU} from './theme';

export const TwoSlipsScene = () => (
  <Shell code="01" title="两种玉牌：份额与财产份额">
    <div data-layout="two-slip-compare" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,stamp" data-visual-grammar="identity-property-split,inheritation-condition-rule" data-focal-rule="a-general-partners-slip-carries-personal-attributes-so-inheritance-needs-consent-while-a-property-slip-filters-them-out" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="slip-general-desk" style={{position: 'absolute', left: 0, top: 0, width: 864, height: 470, backgroundColor: C.panel, border: `3px solid ${C.seal}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Users size={30} color={C.seal} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={26}>普通合伙人 · 杨某的份额</LabelBlock>
          <Chip tone="seal" style={{fontSize: 20}}>财产＋人身属性</Chip>
        </Enter>
        <Enter delay={24} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.slab, lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>继承不是当然的——须<SoftHi style={{fontSize: 21}}>「你情我愿资格有」</SoftHi>三条件（A ✗）</span>
          <span style={{fontSize: 21, fontWeight: 750, color: C.slabDim}}>① 合伙协议有约定或全体同意　② 继承人愿意　③ 继承人具备资格</span>
        </Enter>
      </div>
      <div data-final-knowledge="slip-limited-desk" style={{position: 'absolute', left: 896, top: 0, width: 880, height: 470, backgroundColor: C.slab, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={44} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <ShieldCheck size={30} color={C.jade2} style={{flexShrink: 0}} />
          <LabelBlock color={C.jade2} size={26}>有限合伙人 · 段郭黄周的财产份额</LabelBlock>
          <Chip tone="jade" style={{fontSize: 20}}>纯财产属性</Chip>
        </Enter>
        <Enter delay={62} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>过滤人身属性，类似<ThinU color={C.jade2}>遗产</ThinU>——继承人有权继承</span>
          <span>份额流转也因「无人合性」而宽松（见 02 场景）</span>
        </Enter>
      </div>
      <div data-final-knowledge="slip-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 496, height: 248, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={84} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.gold} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.slab}}>背诵卡 · 一字之差</span>
          </Enter>
          <Enter delay={102} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: 'rgba(223,242,234,0.8)', lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 8}}>
            <span>· 份额＝身份牌：带走它要过三道门</span>
            <span>· 财产份额＝资产牌：按遗产走</span>
          </Enter>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={122}><SlipStamp delay={128} tone="seal">2019金题 · A 项死在三道门</SlipStamp></Enter>
          <Enter delay={152} style={{fontSize: 21, fontWeight: 750, color: 'rgba(223,242,234,0.66)', lineHeight: 1.7}}>段某被执行引出的优先购买线 → 见 03 场景</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const LimitedTracksScene = () => (
  <Shell code="02" title="有限份额三轨道：内转、外转、出质">
    <div data-layout="limited-tracks-board" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="free-transfer-tracks,notice-only-rule" data-focal-rule="limited-partner-slips-move-freely-inside-notice-only-outside-and-pledge-without-consent" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="lim-track-inside" style={{position: 'absolute', left: 0, top: 0, width: 576, height: 470, backgroundColor: C.panel, border: `3px solid ${C.jade2}`, borderRadius: 16, padding: '16px 22px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <UserCheck size={28} color={C.jade2} style={{flexShrink: 0}} />
          <LabelBlock color={C.jade2} size={25}>轨道① · 对内转让</LabelBlock>
        </Enter>
        <Enter delay={24} style={{marginTop: 14, fontSize: 23, fontWeight: 900, color: C.slab, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>黄某 → 周某：<SoftHi style={{fontSize: 21}}>随时自由转</SoftHi>（D ✓）</span>
          <span style={{fontSize: 21, fontWeight: 750, color: C.slabDim}}>不出合伙人圈子，人合性无扰</span>
        </Enter>
      </div>
      <div data-final-knowledge="lim-track-outside" style={{position: 'absolute', left: 600, top: 0, width: 576, height: 470, backgroundColor: C.panel, border: `3px solid ${C.sky}`, borderRadius: 16, padding: '16px 22px'}}>
        <Enter delay={44} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Bell size={28} color={C.sky} style={{flexShrink: 0}} />
          <LabelBlock color={C.sky} size={25}>轨道② · 对外转让</LabelBlock>
        </Enter>
        <Enter delay={62} style={{marginTop: 14, fontSize: 23, fontWeight: 900, color: C.slab, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>提前 <Chip tone="sky" style={{fontSize: 20}}>30 日</Chip>通知其他合伙人（C ✓）</span>
          <span style={{fontSize: 21, fontWeight: 750, color: C.slabDim, lineHeight: 1.7}}>其他合伙人<ThinU color={C.sky}>无优先购买权</ThinU>；未通知也只是管理性规范，<Neg size={20}>不导致无效</Neg>（2021金题 C ✗）</span>
        </Enter>
      </div>
      <div data-final-knowledge="lim-track-pledge" style={{position: 'absolute', left: 1200, top: 0, width: 576, height: 470, backgroundColor: C.panel, border: `3px solid ${C.gold}`, borderRadius: 16, padding: '16px 22px'}}>
        <Enter delay={84} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Stamp size={28} color={C.gold} style={{flexShrink: 0}} />
          <LabelBlock color={C.gold} size={25}>轨道③ · 出质</LabelBlock>
        </Enter>
        <Enter delay={102} style={{marginTop: 14, fontSize: 23, fontWeight: 900, color: C.slab, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>丁擅自质押给元德：<SoftHi style={{fontSize: 21}}>质押自由，无需同意</SoftHi>（2021金题 D ✗）</span>
          <span style={{fontSize: 21, fontWeight: 750, color: C.slabDim}}>对比：普通合伙人份额出质须其他合伙人<ThinU color={C.gold}>一致同意</ThinU></span>
        </Enter>
      </div>
      <div data-final-knowledge="lim-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 496, height: 248, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={122} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.gold} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.slab}}>口诀 · 限人份额三轨道</span>
          </Enter>
          <Enter delay={140} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: 'rgba(223,242,234,0.8)', lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 8}}>
            <span>· 对内随便转 · 对外告一声 · 出质不请示</span>
            <span>· 优先购买权？限人转份额时<ThinU color={C.gold}>没有这一说</ThinU></span>
          </Enter>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={162} style={{fontSize: 22, fontWeight: 750, color: 'rgba(223,242,234,0.7)', lineHeight: 1.8}}>还有一条冷知识：有限合伙人以<ThinU color={C.gold}>薪酬出资＝劳务出资</ThinU>，禁止（2021金题 A ✗）；合伙协议<ThinU color={C.gold}>签章即生效</ThinU>，未登记只是不能对抗善意相对人（B ✓）</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const GeneralTracksScene = () => (
  <Shell code="03" title="普通份额两轨道与执行优先线">
    <div data-layout="general-tracks-desk" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="inside-notice-outside-consent,execution-preemption-line" data-focal-rule="general-partner-slips-move-inside-by-notice-and-outside-only-by-unanimous-consent-with-preemption-while-execution-keeps-the-same-line" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="gen-tracks-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 332, backgroundColor: C.panel, border: `3px solid ${C.seal}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Users size={30} color={C.seal} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={26}>普通合伙人 · 甲的份额（2024金题）</LabelBlock>
        </Enter>
        <div style={{marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={26} style={{fontSize: 22, fontWeight: 800, color: C.slab, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="jade" style={{fontSize: 20}}>对内 → 乙</Chip>只破坏财产面，人合性无扰：只需<ThinU color={C.jade2}>通知</ThinU>，<Neg size={20}>丙无优先购买权（A ✗）</Neg>、<Neg size={20}>无需一致同意（B ✗）</Neg></Enter>
          <Enter delay={48} style={{fontSize: 22, fontWeight: 800, color: C.slab, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="seal" style={{fontSize: 20}}>对外 → 外人</Chip>须<SoftHi style={{fontSize: 21}}>全体一致同意</SoftHi>，其他合伙人有优先购买权</Enter>
        </div>
        <Enter delay={70} style={{marginTop: 10, fontSize: 21, fontWeight: 750, color: C.slabDim, lineHeight: 1.7}}>同一题的赠笔：变更经营范围＋增资都是七件大事，甲反对 → 决议不生效 → <ThinU color={C.gold}>甲无需缴纳 50 万（C ✓ / D ✗）</ThinU></Enter>
      </div>
      <div data-final-knowledge="gen-execution-desk" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 332, backgroundColor: C.slab, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={86} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Scale size={28} color={C.ink} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={25}>强制执行 · 同一条优先线</LabelBlock>
        </Enter>
        <Enter delay={104} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span style={{display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="seal" style={{fontSize: 20}}>2019金题 B ✗</Chip>段某（限人）份额被执行 → 其他合伙人<ThinU color={C.jade2}>有优先购买权</ThinU></span>
          <span style={{fontSize: 21, fontWeight: 750, color: C.ink, lineHeight: 1.7}}>记忆锚：强执＝强制对外流转 → 与对外转让同权重，保人合性</span>
        </Enter>
      </div>
      <div data-final-knowledge="gen-recap-desk" style={{position: 'absolute', left: 0, right: 0, top: 358, height: 386, backgroundColor: C.ink, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={122} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.gold} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.slab}}>总表 · 三种份额 · 四条规则</span>
          </Enter>
          <div style={{marginTop: 14, display: 'flex', flexDirection: 'column', gap: 12}}>
            <Enter delay={142} style={{fontSize: 21, fontWeight: 800, color: C.slab, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="gold" style={{fontSize: 20, color: C.ink}}>普人对内</Chip><span>通知即可，无优先</span>
              <Chip tone="gold" style={{fontSize: 20, color: C.ink}}>普人对外</Chip><span>一致同意＋优先购买</span>
            </Enter>
            <Enter delay={164} style={{fontSize: 21, fontWeight: 800, color: C.slab, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="sky" style={{fontSize: 20, color: C.ink}}>限人对内/对外/出质</Chip><span>自由 / 30日通知 / 自由——全无优先</span>
            </Enter>
            <Enter delay={186} style={{fontSize: 21, fontWeight: 800, color: C.slab, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="seal" style={{fontSize: 20}}>强执</Chip><span>其他合伙人一律有优先购买权</span>
            </Enter>
          </div>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12}}>
          <Enter delay={208} style={{fontSize: 23, fontWeight: 900, color: C.gold}}>分层记忆</Enter>
          <Enter delay={222} style={{fontSize: 22, fontWeight: 750, color: C.slab, lineHeight: 1.8}}>先问<ThinU color={C.gold}>谁的身份牌</ThinU>（普人有人合、限人纯财产），再问<ThinU color={C.gold}>往哪个方向流</ThinU>（对内宽、对外严、强执保优先）——答案就落在总表里</Enter>
          <Enter delay={244}><SlipStamp delay={250} tone="gold">2019 CD · 2021 B · 2024 C</SlipStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const ShareSlipTransitVault = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-two-slips" {...SCENES.twoSlips}><TwoSlipsScene /></TimelineSequence>
    <TimelineSequence name="02-limited-tracks" {...SCENES.limitedTracks}><LimitedTracksScene /></TimelineSequence>
    <TimelineSequence name="03-general-tracks" {...SCENES.generalTracks}><GeneralTracksScene /></TimelineSequence>
  </AbsoluteFill>
);
