import {AbsoluteFill} from 'remotion';
import {CircleDollarSign, FileClock, Gavel, Globe, GraduationCap, HandCoins, Landmark, PackageOpen, UserRound, Users} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp, ThinU} from './theme';

export const PlaintiffHallScene = () => (
  <Shell code="01" title="东厢·原告资格：谁来递状">
    <div data-layout="plaintiff-eligibility-hall" data-visual-anchor="role-pair" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="eligibility-role-pair,divergent-path-contrast" data-focal-rule="the-victim-sues-personally-and-close-relatives-sue-when-the-victim-died-while-state-compensation-takes-another-path" data-focal-channels="icon,contrast,connector,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', right: 30, bottom: 16, opacity: 0.06, pointerEvents: 'none'}}><UserRound size={230} color={C.teal} strokeWidth={1.1} /></div>
      <div data-final-knowledge="plaintiff-eligibility-card" style={{position: 'absolute', left: 0, top: 0, width: 900, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <HandCoins size={30} color={C.teal} style={{flexShrink: 0}} />
            <LabelBlock size={28}>附带民事 · 原告资格</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={16}><Chip tone="panel" style={{fontSize: 22}}>两把交椅</Chip></Enter>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={30} style={{border: `3px solid ${C.teal}`, borderRadius: 10, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <UserRound size={26} color={C.teal} style={{flexShrink: 0}} />
            <Chip tone="teal" style={{fontSize: 22}}>被害人本人</Chip>
            <span style={{fontSize: 22, fontWeight: 800, color: C.ink }}>第一顺位递状人</span>
          </Enter>
          <Enter delay={44} style={{border: `3px solid ${C.olive}`, borderRadius: 10, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Users size={26} color={C.olive} style={{flexShrink: 0}} />
            <Chip tone="olive" style={{fontSize: 22}}>被害人死亡 → 近亲属</Chip>
            <Stamp delay={54} tone="olive">可作原告</Stamp>
          </Enter>
          <Enter delay={58} style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '11px 16px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Chip tone="sand" style={{fontSize: 22}}>被害人包括单位</Chip>
            <span style={{fontSize: 22, fontWeight: 750, color: C.mist }}>法人 · 其他组织受害同样可诉</span>
          </Enter>
        </div>
        <Enter delay={68} style={{fontSize: 22, fontWeight: 750, color: C.mist }}>丙已亡故——其近亲属顶位起诉，资格完整</Enter>
      </div>
      <div data-final-knowledge="divergent-path-card" style={{position: 'absolute', left: 924, top: 0, width: 852, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Landmark size={30} color={C.coral} style={{flexShrink: 0}} />
            <LabelBlock color={C.coral} size={28}>分岔路 · 国家赔偿</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={50}><Chip tone="panel" style={{fontSize: 22}}>另走一扇门</Chip></Enter>
        </div>
        <div style={{border: `3px dashed ${C.coral}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 9}}>
          <Enter delay={64} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <Chip tone="coral" style={{fontSize: 22}}>甲妻诉附民</Chip>
            <Neg size={22}>不予受理</Neg>
          </Enter>
          <Enter delay={76} style={{fontSize: 22, fontWeight: 800, color: C.ink }}>损失源于国家机关行为 → 应走<ThinU color={C.coral}>国家赔偿</ThinU></Enter>
        </div>
        <div style={{border: `3px solid ${C.sand}`, borderRadius: 10, padding: '12px 16px', backgroundColor: C.sandSoft}}>
          <Enter delay={90} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Landmark size={24} color="#8F7434" style={{flexShrink: 0}} />
            <span style={{fontSize: 23, fontWeight: 900, color: '#8F7434' }}>国家赔偿路径</span>
            <Stamp delay={100} tone="sand">B 正确</Stamp>
          </Enter>
        </div>
        <Enter delay={112} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.teal} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.mist }}>2020年题 · 附民与国家赔偿分野</span>
        </Enter>
      </div>
    </div>
  </Shell>
);

export const LossScopeScene = () => (
  <Shell code="02" title="西厢·受理闸：只放物质损失两型">
    <div data-layout="loss-scope-gate" data-visual-anchor="boundary" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="scope-gate-fork,rejected-lane-contrast" data-focal-rule="only-material-losses-from-bodily-injury-or-property-damage-pass-the-attached-suit-gate" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', left: 30, bottom: 16, opacity: 0.06, pointerEvents: 'none'}}><CircleDollarSign size={230} color={C.teal} strokeWidth={1.1} /></div>
      <div data-final-knowledge="scope-gate-card" style={{position: 'absolute', left: 0, top: 0, width: 900, height: 744, backgroundColor: C.panel, border: `3px solid ${C.teal}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <CircleDollarSign size={30} color={C.teal} style={{flexShrink: 0}} />
            <LabelBlock size={28}>受理闸 · 放行两型</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={16}><Chip tone="panel" style={{fontSize: 22}}>犯罪行为所致</Chip></Enter>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 14}}>
          <Enter delay={32} style={{border: `3px solid ${C.teal}`, borderRadius: 10, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 14, backgroundColor: 'rgba(61,107,107,0.06)'}}>
            <Chip tone="teal" style={{fontSize: 24}}>人身伤害型</Chip>
            <span style={{fontSize: 22, fontWeight: 800, color: C.ink }}>医疗费 · 护理费 · 误工损失</span>
          </Enter>
          <Enter delay={46} style={{border: `3px solid ${C.olive}`, borderRadius: 10, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 14, backgroundColor: 'rgba(122,132,80,0.07)'}}>
            <Chip tone="olive" style={{fontSize: 24}}>财物毁坏型</Chip>
            <span style={{fontSize: 22, fontWeight: 800, color: C.ink }}>毁坏 · 灭失的直接损失</span>
          </Enter>
          <Enter delay={54} style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '11px 16px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <FileClock size={24} color={C.sand} style={{flexShrink: 0}} />
            <Chip tone="sand" style={{fontSize: 22}}>提起时限</Chip>
            <span style={{fontSize: 22, fontWeight: 800, color: C.ink }}>立案后第一审判决宣告前</span>
          </Enter>
        </div>
        <Enter delay={62} style={{fontSize: 22, fontWeight: 800, color: C.mist }}>两型共用一把尺：物质损失、与犯罪有因果</Enter>
      </div>
      <div data-final-knowledge="rejected-lane-card" style={{position: 'absolute', left: 924, top: 0, width: 852, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Gavel size={30} color={C.coral} style={{flexShrink: 0}} />
            <LabelBlock color={C.coral} size={28}>拦下 · 不受理</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={50}><Chip tone="panel" style={{fontSize: 22}}>选非题高频</Chip></Enter>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={64}><Neg size={22}>精神损害抚慰金不入附民闸</Neg></Enter>
          <Enter delay={74}><Neg size={22}>非法占有 · 处置型财产损失另行追缴退赔</Neg></Enter>
          <Enter delay={84}><Neg size={22}>借款纠纷等民事争议走民诉</Neg></Enter>
        </div>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px'}}>
          <Enter delay={98} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <span style={{fontSize: 22, fontWeight: 800, color: C.mist }}>记法：</span>
            <ThinU color={C.coral}>闸门只认「犯罪造成的物质损失」九个字</ThinU>
          </Enter>
        </div>
        <Enter delay={110} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.teal} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.mist }}>2021-2023年题 · 受理范围三连</span>
        </Enter>
      </div>
    </div>
  </Shell>
);

export const PublicInterestScene = () => (
  <Shell code="03" title="跨院联办·公益之诉与随案移送">
    <div data-layout="public-interest-track" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="merge-track-rule,escort-chain-steps" data-focal-rule="incidental-public-interest-suits-follow-the-criminal-court-and-seized-items-move-with-the-case-file" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', right: 30, bottom: 16, opacity: 0.06, pointerEvents: 'none'}}><Globe size={230} color={C.teal} strokeWidth={1.1} /></div>
      <div data-final-knowledge="merge-track-card" style={{position: 'absolute', left: 0, top: 0, width: 900, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Globe size={30} color={C.olive} style={{flexShrink: 0}} />
            <LabelBlock color={C.olive} size={28}>附带民事公益诉讼</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={16}><Chip tone="panel" style={{fontSize: 22}}>跨院联办</Chip></Enter>
        </div>
        <div style={{border: `3px solid ${C.olive}`, borderRadius: 10, padding: '14px 18px', backgroundColor: 'rgba(122,132,80,0.07)'}}>
          <Enter delay={30} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Chip tone="olive" style={{fontSize: 22}}>由审理刑事案件的法院管辖</Chip>
            <Stamp delay={40} tone="olive">刑民一院</Stamp>
          </Enter>
          <Enter delay={50} style={{marginTop: 8, fontSize: 22, fontWeight: 750, color: C.mist }}>不用另跑民庭——同一合院并案审理</Enter>
        </div>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <Enter delay={66} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Gavel size={24} color={C.teal} style={{flexShrink: 0}} />
            <span style={{fontSize: 22, fontWeight: 800, color: C.ink }}>提起主体：</span>
            <Chip tone="teal" style={{fontSize: 22 }}>检察机关</Chip>
            <span style={{fontSize: 22, fontWeight: 750, color: C.mist }}>（公告后无适格主体起诉）</span>
          </Enter>
        </div>
        <Enter delay={80} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.olive} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.mist }}>2024年题 · 公益之诉管辖单选</span>
        </Enter>
      </div>
      <div data-final-knowledge="escort-chain-card" style={{position: 'absolute', left: 924, top: 0, width: 852, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <PackageOpen size={30} color={C.teal} style={{flexShrink: 0}} />
            <LabelBlock color={C.teal} size={28}>涉案财物 · 随案护送</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={50}><Chip tone="panel" style={{fontSize: 22 }}>以 U 盘为例</Chip></Enter>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
          <Enter delay={64}><Chip tone="teal" style={{fontSize: 23 }}>依法扣押</Chip></Enter>
          <Dash delay={72} style={{width: 44, borderTop: `4px solid ${C.teal}`}} />
          <Enter delay={80}><Chip tone="teal" style={{fontSize: 23 }}>随案移送</Chip></Enter>
          <Dash delay={88} style={{width: 44, borderTop: `4px solid ${C.teal}`}} />
          <Enter delay={96}><Stamp delay={104} tone="teal">法庭出示</Stamp></Enter>
        </div>
        <div style={{border: `3px dashed ${C.coral}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={112}><Neg size={22}>留在办案机关「代管」≠ 移送</Neg></Enter>
          <Enter delay={122} style={{fontSize: 22, fontWeight: 750, color: C.mist }}>证据实物不到位，庭审出示就没有着落</Enter>
        </div>
        <Enter delay={134} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.teal} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.mist }}>2025年题 · 涉案财物处理</span>
        </Enter>
      </div>
    </div>
  </Shell>
);

export const AttachedSuitCourtyard = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-plaintiff-eligibility-hall" {...SCENES.plaintiffEligibilityHall}><PlaintiffHallScene /></TimelineSequence>
    <TimelineSequence name="02-loss-scope-gate" {...SCENES.lossScopeGate}><LossScopeScene /></TimelineSequence>
    <TimelineSequence name="03-public-interest-track" {...SCENES.publicInterestTrack}><PublicInterestScene /></TimelineSequence>
  </AbsoluteFill>
);
