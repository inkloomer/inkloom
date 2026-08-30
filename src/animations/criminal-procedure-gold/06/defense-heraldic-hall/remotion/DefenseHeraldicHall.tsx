import {AbsoluteFill} from 'remotion';
import {BellRing, BookOpen, GraduationCap, HandHeart, IdCard, KeyRound, ShieldCheck, Sword, UserCog, Users} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp, ThinU} from './theme';

export const DutyCounselScene = () => (
  <Shell code="01" title="值班律师：提灯引路，但不持盾上阵">
    <div data-layout="duty-counsel-lantern" data-visual-anchor="concept-icon" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="role-boundary-pair,aid-lane-stack" data-focal-rule="the-duty-counsel-gives-legal-help-but-never-defends-at-trial-while-mandatory-aid-covers-possible-life-or-death-cases" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', right: 30, bottom: 16, opacity: 0.06, pointerEvents: 'none'}}><BellRing size={230} color={C.burgundy} strokeWidth={1.1} /></div>
      <div data-final-knowledge="duty-counsel-identity-card" style={{position: 'absolute', left: 0, top: 0, width: 900, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <BellRing size={30} color={C.burgundy} style={{flexShrink: 0}} />
            <LabelBlock size={28}>值班律师的身份</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={16}><SoftHi tone="burgundy" style={{fontSize: 24}}>法律帮助者 ≠ 辩护人</SoftHi></Enter>
        </div>
        <div style={{border: `3px solid ${C.forest}`, borderRadius: 10, padding: '12px 16px'}}>
          <Enter delay={30} style={{display: 'flex', flexWrap: 'wrap', gap: 8}}>
            <LabelBlock color={C.forest} size={24}>可为</LabelBlock>
            <Chip tone="forest" style={{fontSize: 22}}><KeyRound size={20} style={{flexShrink: 0}} />会见</Chip>
            <Chip tone="forest" style={{fontSize: 22}}><BookOpen size={20} style={{flexShrink: 0}} />阅卷</Chip>
            <Chip tone="forest" style={{fontSize: 22}}>提建议</Chip>
            <Chip tone="forest" style={{fontSize: 22}}>申请取保候审</Chip>
            <Chip tone="forest" style={{fontSize: 22}}>服务同案犯</Chip>
            <Chip tone="forest" style={{fontSize: 22}}>认罪案件应当签字</Chip>
          </Enter>
        </div>
        <div style={{border: `3px dashed ${C.burgundy}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 9}}>
          <Enter delay={52} style={{display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center'}}>
            <LabelBlock color={C.burgundy} size={24}>不为</LabelBlock>
            <Neg size={22}>不出庭辩护</Neg>
            <Neg size={22}>不代理被害人</Neg>
          </Enter>
          <Enter delay={64} style={{fontSize: 22, fontWeight: 750, color: C.mist }}>只服务犯罪嫌疑人 · 被告人一方</Enter>
        </div>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px'}}>
          <Enter delay={80} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <KeyRound size={24} color={C.steel2} style={{flexShrink: 0}} />
            <span style={{fontSize: 23, fontWeight: 900, color: C.ink }}>值班律师会见时</span>
            <Stamp delay={90} tone="steel">公安不得在场</Stamp>
          </Enter>
        </div>
        <Enter delay={104} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.burgundy} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.mist }}>2018-2022年题 · 六题全在划这条身份线</span>
        </Enter>
      </div>
      <div data-final-knowledge="legal-aid-lane-card" style={{position: 'absolute', left: 924, top: 0, width: 852, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <HandHeart size={30} color={C.forest} style={{flexShrink: 0}} />
            <LabelBlock color={C.forest} size={28}>法律援助三条道</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={50}><Chip tone="panel" style={{fontSize: 22}}>对号入座</Chip></Enter>
        </div>
        <div style={{border: `3px solid ${C.forest}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={64} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Chip tone="burgundy" style={{fontSize: 22}}>可能判无期 · 死刑</Chip>
            <Dash delay={74} style={{width: 40, borderTop: `4px solid ${C.forest}`}} />
            <span style={{fontSize: 23, fontWeight: 900, color: C.ink }}>应当通知法援</span>
          </Enter>
          <Enter delay={76} style={{fontSize: 22, fontWeight: 750, color: C.mist }}>没委托辩护人的，法援必须到位</Enter>
        </div>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={90} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Chip tone="steel" style={{fontSize: 22}}>经济困难申请法援</Chip>
            <span style={{fontSize: 22, fontWeight: 800, color: C.ink }}>一般要</span>
            <ThinU color={C.steel2}>核查经济状况</ThinU>
          </Enter>
          <Enter delay={100} style={{fontSize: 22, fontWeight: 750, color: C.mist }}>值班律师可先行提供帮助</Enter>
        </div>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center'}}>
          <Enter delay={114} style={{display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center'}}>
            <Chip tone="ochre" style={{fontSize: 22}}>低保 → 免核查</Chip>
            <Chip tone="ochre" style={{fontSize: 22}}>受援人鉴定 → 减免费</Chip>
          </Enter>
        </div>
        <Enter delay={128} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.forest} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.mist }}>2023-2025年题 · 法援通道三连问</span>
        </Enter>
      </div>
    </div>
  </Shell>
);

export const DefenderRosterScene = () => (
  <Shell code="02" title="辩护人名册：看指控定身份，近亲属可破例">
    <div data-layout="defender-roster-wall" data-visual-anchor="boundary" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="charge-gate-rule,roster-exception-triptych" data-focal-rule="only-counsel-facing-criminal-charges-are-defenders-and-close-relatives-can-overcome-status-bars" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', left: 30, bottom: 16, opacity: 0.06, pointerEvents: 'none'}}><Sword size={230} color={C.burgundy} strokeWidth={1.1} /></div>
      <div data-final-knowledge="charge-gate-card" style={{position: 'absolute', left: 0, top: 0, width: 880, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <IdCard size={30} color={C.burgundy} style={{flexShrink: 0}} />
            <LabelBlock size={28}>辩护人的身份闸门</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={16}><Chip tone="panel" style={{fontSize: 22}}>看「指控」不看来人</Chip></Enter>
        </div>
        <div style={{border: `3px solid ${C.burgundy}`, borderRadius: 10, padding: '14px 18px', backgroundColor: 'rgba(124,47,62,0.07)'}}>
          <Enter delay={30} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Chip tone="burgundy" style={{fontSize: 23}}>面对刑事指控的人</Chip>
            <Dash delay={40} style={{width: 44, borderTop: `4px solid ${C.burgundy}`}} />
            <span style={{fontSize: 24, fontWeight: 950, color: C.ink }}>其委托的律师 ＝</span>
            <SoftHi tone="burgundy" style={{fontSize: 25}}>辩护人</SoftHi>
          </Enter>
          <Enter delay={44} style={{marginTop: 10, fontSize: 22, fontWeight: 750, color: C.mist }}>不面对指控的委托，只是公民代理或其他关系</Enter>
        </div>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={58} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Chip tone="forest" style={{fontSize: 22}}>反诉中的被告</Chip>
            <span style={{fontSize: 22, fontWeight: 800, color: C.ink }}>面对本诉指控 → 其律师</span>
            <Stamp delay={68} tone="forest">是辩护人</Stamp>
          </Enter>
          <Enter delay={78}><Neg size={22}>把公民代理 · 值班律师都算成辩护类型＝混淆</Neg></Enter>
        </div>
        <Enter delay={92} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.burgundy} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.mist }}>2019-2020年题 · 闸门题各一道</span>
        </Enter>
      </div>
      <div data-final-knowledge="roster-exception-card" style={{position: 'absolute', left: 904, top: 0, width: 872, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Users size={30} color={C.steel2} style={{flexShrink: 0}} />
            <LabelBlock color={C.steel2} size={28}>名册与破例</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={50}><Chip tone="panel" style={{fontSize: 22}}>近亲属是万能钥匙</Chip></Enter>
        </div>
        <div style={{border: `3px solid ${C.forest}`, borderRadius: 10, padding: '12px 16px'}}>
          <Enter delay={64} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <LabelBlock color={C.forest} size={24}>可任辩护人</LabelBlock>
            <Chip tone="forest" style={{fontSize: 22}}>律师</Chip>
            <Chip tone="forest" style={{fontSize: 22}}>人民团体或单位推荐的人</Chip>
            <Chip tone="forest" style={{fontSize: 22}}>监护人 · 近亲属</Chip>
          </Enter>
        </div>
        <div style={{border: `3px solid ${C.ochre}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 9}}>
          <Enter delay={82}><LabelBlock color={C.ochre} size={24}>三类身份 · 近亲属关系可破例</LabelBlock></Enter>
          <Enter delay={92} style={{display: 'flex', flexWrap: 'wrap', gap: 8}}>
            <Chip tone="ochre" style={{fontSize: 22}}>现职检察人员</Chip>
            <Chip tone="ochre" style={{fontSize: 22}}>离任法官检察官</Chip>
            <Chip tone="ochre" style={{fontSize: 22}}>外国人 · 无国籍人</Chip>
          </Enter>
          <Enter delay={102} style={{fontSize: 22, fontWeight: 750, color: C.mist }}>平时不行；当了近亲属，就行</Enter>
        </div>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px'}}>
          <Enter delay={118} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <UserCog size={24} color={C.steel2} style={{flexShrink: 0}} />
            <span style={{fontSize: 22, fontWeight: 800, color: C.ink }}>母亲是法院庭长——儿子案件中</span>
            <Stamp delay={128} tone="steel">仍可担任辩护人</Stamp>
          </Enter>
        </div>
        <Enter delay={134} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.steel2} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.mist }}>2021-2023年题 · 破例题反复考</span>
        </Enter>
      </div>
    </div>
  </Shell>
);

export const RightsDutiesScene = () => (
  <Shell code="03" title="权利义务台：会见 · 阅卷 · 告知 · 拒辩">
    <div data-layout="rights-duties-desk" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="right-row-stack,duty-contrast-pair" data-focal-rule="counsel-rights-differ-by-lawyer-status-and-refusal-of-counsel-by-aided-defendants-needs-court-review" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', right: 30, bottom: 16, opacity: 0.06, pointerEvents: 'none'}}><ShieldCheck size={230} color={C.burgundy} strokeWidth={1.1} /></div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 0, height: 366, display: 'flex', gap: 14}}>
        <div data-final-knowledge="meet-review-lane" style={{flex: 1, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <KeyRound size={28} color={C.burgundy} style={{flexShrink: 0}} />
            <LabelBlock size={26}>会见 · 阅卷</LabelBlock>
          </Enter>
          <div style={{display: 'flex', flexDirection: 'column', gap: 9}}>
            <Enter delay={22} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
              <Chip tone="forest" style={{fontSize: 22}}>一般案件会见</Chip>
              <span style={{fontSize: 22, fontWeight: 800, color: C.ink }}>凭三证直见，无需申请</span>
            </Enter>
            <Enter delay={34} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
              <BookOpen size={24} color={C.burgundy} style={{flexShrink: 0}} />
              <span style={{fontSize: 22, fontWeight: 800, color: C.ink }}>阅卷只能找</span>
              <Chip tone="burgundy" style={{fontSize: 22}}>检察院 · 法院</Chip>
            </Enter>
            <Enter delay={46} style={{fontSize: 22, fontWeight: 750, color: C.mist }}>侦查阶段不能核实证据——只有阅卷与会见权</Enter>
          </div>
          <Enter delay={58} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <GraduationCap size={24} color={C.burgundy} style={{flexShrink: 0}} />
            <span style={{fontSize: 22, fontWeight: 800, color: C.mist }}>2014-2016年题</span>
          </Enter>
        </div>
        <div data-final-knowledge="status-difference-lane" style={{flex: 1, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Sword size={28} color={C.steel2} style={{flexShrink: 0}} />
            <LabelBlock color={C.steel2} size={26}>律师 ≠ 非律师辩护人</LabelBlock>
          </Enter>
          <div style={{display: 'flex', flexDirection: 'column', gap: 9}}>
            <Enter delay={56} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="steel" style={{fontSize: 22}}>会见</Chip>
              <ThinU color={C.steel2}>律师凭三证 · 非律师凭许可</ThinU>
            </Enter>
            <Enter delay={68} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="steel" style={{fontSize: 22}}>取证</Chip>
              <span style={{fontSize: 22, fontWeight: 800, color: C.ink }}>找被害人一方作证需检院或法院许可</span>
            </Enter>
            <Enter delay={80} style={{fontSize: 22, fontWeight: 750, color: C.mist }}>申请取保候审人人可提；告知义务只有律师担</Enter>
          </div>
          <Enter delay={92} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <GraduationCap size={24} color={C.steel2} style={{flexShrink: 0}} />
            <span style={{fontSize: 22, fontWeight: 800, color: C.mist }}>2017-2020年题 · 双轨对比</span>
          </Enter>
        </div>
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 390, height: 354, display: 'flex', gap: 14}}>
        <div data-final-knowledge="duty-notify-card" style={{flex: 1, backgroundColor: C.panel, border: `3px solid ${C.ochre}`, borderRadius: 14, padding: '16px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <Enter delay={110} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <IdCard size={28} color={C.ochre} style={{flexShrink: 0}} />
            <LabelBlock color={C.ochre} size={26}>应当告知的三类证据</LabelBlock>
          </Enter>
          <div style={{display: 'flex', flexDirection: 'column', gap: 9}}>
            <Enter delay={126}><Chip tone="ochre" style={{fontSize: 22}}>犯罪嫌疑人不在案发现场</Chip></Enter>
            <Enter delay={136}><Chip tone="ochre" style={{fontSize: 22}}>未达刑事责任年龄</Chip></Enter>
            <Enter delay={146}><Chip tone="ochre" style={{fontSize: 22}}>依法不负刑责的精神病人</Chip></Enter>
          </div>
          <Enter delay={156} style={{fontSize: 22, fontWeight: 750, color: C.mist }}>辩护律师收集到这三类 → 应当及时告知办案机关</Enter>
        </div>
        <div data-final-knowledge="duty-avoid-refuse-card" style={{flex: 1, backgroundColor: C.panel, border: `3px solid ${C.burgundy}`, borderRadius: 14, padding: '16px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <Enter delay={120} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <ShieldCheck size={28} color={C.burgundy} style={{flexShrink: 0}} />
            <LabelBlock size={26}>两条义务红线</LabelBlock>
          </Enter>
          <div style={{display: 'flex', flexDirection: 'column', gap: 9}}>
            <Enter delay={138} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="burgundy" style={{fontSize: 22}}>辩护人涉嫌干扰诉讼犯罪</Chip>
              <Dash delay={146} style={{width: 36, borderTop: `4px solid ${C.burgundy}`}} />
              <span style={{fontSize: 22, fontWeight: 800, color: C.ink }}>原办案机关需回避</span>
            </Enter>
            <Enter delay={150} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="burgundy" style={{fontSize: 22}}>法援对象当庭拒绝辩护</Chip>
              <Dash delay={158} style={{width: 36, borderTop: `4px solid ${C.burgundy}`}} />
              <span style={{fontSize: 22, fontWeight: 800, color: C.ink }}>法院审查理由，</span>
              <Neg size={22}>不当然准许</Neg>
            </Enter>
          </div>
          <Enter delay={170} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <GraduationCap size={24} color={C.burgundy} style={{flexShrink: 0}} />
            <span style={{fontSize: 22, fontWeight: 800, color: C.mist }}>2021-2023年题 · 义务两端各一题</span>
          </Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const DefenseHeraldicHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-duty-counsel-lantern" {...SCENES.dutyCounselLantern}><DutyCounselScene /></TimelineSequence>
    <TimelineSequence name="02-defender-roster-wall" {...SCENES.defenderRosterWall}><DefenderRosterScene /></TimelineSequence>
    <TimelineSequence name="03-rights-duties-desk" {...SCENES.rightsDutiesDesk}><RightsDutiesScene /></TimelineSequence>
  </AbsoluteFill>
);
