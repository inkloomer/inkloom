import {AbsoluteFill} from 'remotion';
import {Coins, FileText, GraduationCap, Scale, Stamp, TrendingDown, Users} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp as KitchenStamp, ThinU} from './theme';

export const IdentityScene = () => (
  <Shell code="01" title="一个灶主：家庭出资不改招牌">
    <div data-layout="identity-family-desk" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="identity-invariance-rule,management-mode-neutral-rule" data-focal-rule="sole-proprietorship-stays-sole-whatever-the-funding-source-or-management-mode" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="idn-family-desk" style={{position: 'absolute', left: 0, top: 0, width: 864, height: 470, backgroundColor: C.flameSoft, border: `3px solid ${C.flame}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Coins size={30} color={C.flame} style={{flexShrink: 0}} />
          <LabelBlock color={C.flame} size={26}>A ✗ · 家庭共有财产出资</LabelBlock>
        </Enter>
        <Enter delay={24} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.plate, lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>设立登记时声明家庭共有财产出资 → 依法以家庭共有财产<ThinU color={C.flame}>承担无限责任</ThinU></span>
          <span style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Stamp size={22} color={C.flame} style={{flexShrink: 0}} />组织属性不变</span>
          <span>仍是<SoftHi dark style={{fontSize: 21}}>个人独资企业</SoftHi>，不会变成普通合伙企业</span>
        </Enter>
      </div>
      <div data-final-knowledge="idn-management-desk" style={{position: 'absolute', left: 896, top: 0, width: 880, height: 470, backgroundColor: C.panel, border: `3px solid ${C.scallion}`, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={44} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Users size={30} color={C.scallion} style={{flexShrink: 0}} />
          <LabelBlock color={C.scallion} size={26}>B ✗ · 让儿子管店 = 家庭出资？</LabelBlock>
        </Enter>
        <Enter delay={62} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.plate, lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>投资人可<SoftHi style={{fontSize: 21}}>自行管理</SoftHi>，也可<SoftHi style={{fontSize: 21}}>委托或聘用</SoftHi>他人管理</span>
          <span>管理模式<ThinU color={C.scallion}>不影响</ThinU>企业性质与出资来源</span>
        </Enter>
      </div>
      <div data-final-knowledge="idn-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 496, height: 248, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={84} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.broth} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.plate}}>背诵卡 · 身份两问</span>
          </Enter>
          <Enter delay={102} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: 'rgba(240,230,208,0.8)', lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 8}}>
            <span>· 谁出钱（个人 or 家庭共有）？→ 只影响责任财产范围</span>
            <span>· 谁掌勺（自管 or 委托）？→ 只影响管理，不改身份</span>
          </Enter>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={122}><KitchenStamp delay={128} tone="flame">一个自然人设立</KitchenStamp></Enter>
          <Enter delay={152} style={{fontSize: 21, fontWeight: 750, color: 'rgba(240,230,208,0.7)', lineHeight: 1.7}}>受托人负忠实勤勉义务，类比公司董监高；越权时保护善意相对人</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const FiveYearScene = () => (
  <Shell code="02" title="熄灶五年：责任的尾巴">
    <div data-layout="five-year-timeline-desk" data-visual-anchor="timeline-gate" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="five-year-tail-rule,claim-extinction-rule" data-focal-rule="post-dissolution-liability-survives-five-years-then-expires-if-unclaimed" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="fy-timeline-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 300, backgroundColor: C.panel, border: `3px solid ${C.broth}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <TrendingDown size={30} color={C.broth} style={{flexShrink: 0}} />
          <LabelBlock size={26}>李甲解散企业 · 责任时间轴</LabelBlock>
        </Enter>
        <div style={{marginTop: 18, position: 'relative', height: 150}}>
          <div style={{position: 'absolute', left: 10, right: 10, top: 70, height: 5, backgroundColor: C.panelLine}} />
          {[
            {x: 10, tag: '解散之日', tone: 'flame' as const, d: 24},
            {x: 380, tag: '5年内：可请求偿还存续期间债务', tone: 'broth' as const, d: 44},
            {x: 720, tag: '5年未请求 → 责任消灭', tone: 'panel' as const, d: 64},
          ].map((n) => (
            <div key={n.tag} style={{position: 'absolute', left: n.x, top: 0, width: 300}}>
              <Enter delay={n.d}><Chip tone={n.tone} style={{fontSize: 19}}>{n.tag}</Chip></Enter>
              <div style={{position: 'absolute', left: 12, top: 70, width: 14, height: 14, borderRadius: 7, backgroundColor: n.tone === 'flame' ? C.flame : n.tone === 'broth' ? C.broth : C.wokLine}} />
            </div>
          ))}
        </div>
        <Enter delay={80} style={{marginTop: 4, fontSize: 22, fontWeight: 900, color: C.plate}}>解散后 5 年内，李甲对存续期间债务<ThinU color={C.broth}>仍应承担偿还责任</ThinU>（C ✓）</Enter>
      </div>
      <div data-final-knowledge="fy-compare-desk" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 300, backgroundColor: C.panel, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={96} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Scale size={28} color={C.broth} style={{flexShrink: 0}} />
          <LabelBlock size={25}>对照 · 合伙除名 vs 独资解散</LabelBlock>
        </Enter>
        <div style={{marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={114} style={{fontSize: 21, fontWeight: 750, color: C.plate, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="broth" style={{fontSize: 20, color: C.ink}}>合伙除名</Chip>到达生效，无 5 年限制表述</Enter>
          <Enter delay={132} style={{fontSize: 21, fontWeight: 750, color: C.plate, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="flame" style={{fontSize: 20, color: C.ink }}>独资解散</Chip>5 年尾巴，未请求则消灭</Enter>
        </div>
      </div>
      <div data-final-knowledge="fy-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 326, height: 418, backgroundColor: C.ink, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={150} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.broth} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.plate}}>背诵卡 · 数字题</span>
          </Enter>
          <div style={{marginTop: 14, display: 'flex', flexDirection: 'column', gap: 12}}>
            <Enter delay={170} style={{fontSize: 22, fontWeight: 800, color: C.plate, lineHeight: 1.8, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="broth" style={{fontSize: 20, color: C.ink }}>5 年</Chip><span>解散后责任存续期</span>
            </Enter>
            <Enter delay={190} style={{fontSize: 22, fontWeight: 800, color: C.plate, lineHeight: 1.8, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="flame" style={{fontSize: 20, color: C.ink }}>0 门槛</Chip><span>个人独资企业无最低注册资本</span>
            </Enter>
            <Enter delay={210} style={{fontSize: 22, fontWeight: 800, color: C.plate, lineHeight: 1.8, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="scallion" style={{fontSize: 20, color: C.ink }}>1 人</Chip><span>一个自然人投资（法人不行）</span>
            </Enter>
          </div>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12}}>
          <Enter delay={230} style={{fontSize: 23, fontWeight: 900, color: C.broth }}>为什么有尾巴？</Enter>
          <Enter delay={246} style={{fontSize: 22, fontWeight: 750, color: C.plate, lineHeight: 1.8}}>独资企业无法人资格，灶熄了火、账没灭——<ThinU color={C.broth}>无限责任跟着人走 5 年</ThinU>，防金蝉脱壳逃债</Enter>
          <Enter delay={266}><KitchenStamp delay={272} tone="broth">正确答案 C</KitchenStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const InheritanceScene = () => (
  <Shell code="03" title="传家灶：继承的三条路">
    <div data-layout="inheritance-roads-desk" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="inheritance-multiroad-rule,absolute-word-trap" data-focal-rule="joint-inheritance-offers-three-roads-and-never-mandates-splitting" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="inh-roads-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 330, backgroundColor: C.panel, border: `3px solid ${C.scallion}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <FileText size={30} color={C.scallion} style={{flexShrink: 0}} />
          <LabelBlock color={C.scallion} size={26}>李乙、李丙共同继承 · 三条路任选</LabelBlock>
        </Enter>
        <div style={{marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={28} style={{fontSize: 22, fontWeight: 800, color: C.plate, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Chip tone="scallion" style={{fontSize: 20, color: C.ink }}>路①</Chip>变更为<SoftHi style={{fontSize: 21}}>普通合伙企业</SoftHi>（两人变合伙人）</Enter>
          <Enter delay={48} style={{fontSize: 22, fontWeight: 800, color: C.plate, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Chip tone="scallion" style={{fontSize: 20, color: C.ink }}>路②</Chip>协商<SoftHi style={{fontSize: 21}}>一人继承</SoftHi>，另一人拿补偿</Enter>
          <Enter delay={68} style={{fontSize: 22, fontWeight: 800, color: C.plate, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Chip tone="scallion" style={{fontSize: 20, color: C.ink }}>路③</Chip><SoftHi style={{fontSize: 21 }}>分立为两家</SoftHi>个人独资企业</Enter>
        </div>
      </div>
      <div data-final-knowledge="inh-trap-desk" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 330, backgroundColor: C.ink, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={90} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <GraduationCap size={28} color={C.broth} style={{flexShrink: 0}} />
          <span style={{fontSize: 24, fontWeight: 900, color: C.plate }}>D ✗ · 「必须分立」过于绝对</span>
        </Enter>
        <Enter delay={110} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.plate, lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>继承方式多样——三条路任选其一</span>
          <span style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Stamp size={22} color={C.scallion} style={{flexShrink: 0}} />「必须」两字=送分陷阱</span>
        </Enter>
      </div>
      <div data-final-knowledge="inh-recap-desk" style={{position: 'absolute', left: 0, right: 0, top: 356, height: 388, backgroundColor: C.ink, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={134} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.broth} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.plate }}>2017-3-30 · 全题收束</span>
          </Enter>
          <div style={{marginTop: 14, display: 'flex', flexDirection: 'column', gap: 12}}>
            <Enter delay={156} style={{fontSize: 21, fontWeight: 800, color: C.plate, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="seal" style={{fontSize: 20}}>A</Chip><span>家庭出资→仍独资，非合伙</span>
              <Chip tone="seal" style={{fontSize: 20}}>B</Chip><span>委托管理≠家庭出资</span>
            </Enter>
            <Enter delay={178} style={{fontSize: 21, fontWeight: 800, color: C.plate, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="jade" style={{fontSize: 20, color: C.ink }}>C ✓</Chip><span>解散后 5 年责任尾巴</span>
              <Chip tone="seal" style={{fontSize: 20}}>D</Chip><span>必须分立=绝对化错误</span>
            </Enter>
          </div>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12}}>
          <Enter delay={200} style={{fontSize: 23, fontWeight: 900, color: C.broth }}>一句话总括</Enter>
          <Enter delay={216} style={{fontSize: 22, fontWeight: 750, color: C.plate, lineHeight: 1.8}}>一个自然人、一种身份、<ThinU color={C.broth}>一条 5 年尾巴、三条继承路</ThinU>——个人独资企业法全在这一句里</Enter>
          <Enter delay={238}><KitchenStamp delay={244} tone="scallion">正确答案 C</KitchenStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const SoleProprietorKitchenLegacy = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-identity" {...SCENES.identity}><IdentityScene /></TimelineSequence>
    <TimelineSequence name="02-five-year" {...SCENES.fiveYear}><FiveYearScene /></TimelineSequence>
    <TimelineSequence name="03-inheritance" {...SCENES.inheritance}><InheritanceScene /></TimelineSequence>
  </AbsoluteFill>
);
