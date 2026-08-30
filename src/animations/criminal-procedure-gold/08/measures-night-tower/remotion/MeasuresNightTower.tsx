import {AbsoluteFill} from 'remotion';
import {ArrowLeftRight, BookLock, CircleCheckBig, FileClock, Gauge, LockKeyhole, Radar, Radio, Scale} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp, ThinU} from './theme';

export const PrincipleBeaconScene = () => (
  <Shell code="01" title="塔台四灯：法定 · 比例 · 变更 · 必要">
    <div data-layout="principle-beacon-grid" data-visual-anchor="concept-icon" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="four-beacon-grid,change-release-fork" data-focal-rule="measures-follow-legality-proportionality-adaptability-and-necessity-with-changes-and-releases-both-along-adaptability" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', right: 30, bottom: 16, opacity: 0.07, pointerEvents: 'none'}}><Gauge size={230} color={C.ivory} strokeWidth={1.1} /></div>
      <div data-final-knowledge="beacon-grid-card" style={{position: 'absolute', left: 0, top: 0, width: 900, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Gauge size={30} color={C.runway} style={{flexShrink: 0}} />
            <LabelBlock size={28}>强制措施的塔台四灯</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={16}><Chip tone="panel" style={{fontSize: 22}}>四灯齐照，缺一即错</Chip></Enter>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14}}>
          <Enter delay={30} style={{border: `3px solid ${C.sky}`, borderRadius: 12, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12}}>
            <BookLock size={26} color={C.sky} style={{flexShrink: 0}} />
            <div style={{display: 'flex', flexDirection: 'column', gap: 4}}>
              <span style={{fontSize: 24, fontWeight: 950, color: C.ivory }}>法定性</span>
              <span style={{fontSize: 21, fontWeight: 750, color: C.ivoryDim }}>种类 · 条件 · 程序由法律规定</span>
            </div>
          </Enter>
          <Enter delay={42} style={{border: `3px solid ${C.radar}`, borderRadius: 12, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12}}>
            <Scale size={26} color={C.radar} style={{flexShrink: 0}} />
            <div style={{display: 'flex', flexDirection: 'column', gap: 4}}>
              <span style={{fontSize: 24, fontWeight: 950, color: C.ivory }}>比例性</span>
              <span style={{fontSize: 21, fontWeight: 750, color: C.ivoryDim }}>强度与危险程度相当</span>
            </div>
          </Enter>
          <Enter delay={54} style={{border: `3px solid ${C.runway}`, borderRadius: 12, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12}}>
            <ArrowLeftRight size={26} color={C.runway} style={{flexShrink: 0}} />
            <div style={{display: 'flex', flexDirection: 'column', gap: 4}}>
              <span style={{fontSize: 24, fontWeight: 950, color: C.ivory }}>变更性</span>
              <span style={{fontSize: 21, fontWeight: 750, color: C.ivoryDim }}>情况变了措施跟着调</span>
            </div>
          </Enter>
          <Enter delay={66} style={{border: `3px solid ${C.alert}`, borderRadius: 12, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12}}>
            <CircleCheckBig size={26} color={C.alert} style={{flexShrink: 0}} />
            <div style={{display: 'flex', flexDirection: 'column', gap: 4}}>
              <span style={{fontSize: 24, fontWeight: 950, color: C.ivory }}>必要性</span>
              <span style={{fontSize: 21, fontWeight: 750, color: C.ivoryDim }}>不用强制即不得强制</span>
            </div>
          </Enter>
        </div>
        <Enter delay={84} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <FileClock size={24} color={C.runway} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.ivoryDim }}>2016-2019年题 · 四原则各考一轮</span>
        </Enter>
      </div>
      <div style={{position: 'absolute', left: 924, top: 0, width: 852, height: 744, display: 'flex', flexDirection: 'column', gap: 14}}>
        <div data-final-knowledge="change-release-fork-card" style={{flex: 1, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <ArrowLeftRight size={28} color={C.runway} style={{flexShrink: 0}} />
            <LabelBlock color={C.runway} size={26}>变更 vs 解除 · 判别</LabelBlock>
          </Enter>
          <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
            <Enter delay={56} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="runway" style={{fontSize: 22}}>换一种措施（取保 → 监居）</Chip>
              <Stamp delay={64} tone="runway">措施变更</Stamp>
            </Enter>
            <Enter delay={74} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="radar" style={{fontSize: 22}}>撤案 · 不起诉 → 停止继续</Chip>
              <Stamp delay={82} tone="radar">措施解除</Stamp>
            </Enter>
            <Enter delay={92} style={{fontSize: 22, fontWeight: 750, color: C.ivoryDim }}>两者都是变更性原则的体现</Enter>
          </div>
        </div>
        <div data-final-knowledge="principle-trap-card" style={{flex: 1, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <Enter delay={108} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <CircleCheckBig size={28} color={C.alert} style={{flexShrink: 0}} />
            <LabelBlock color={C.alert} size={26}>选非题警示</LabelBlock>
          </Enter>
          <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
            <Enter delay={124}><Neg size={22}>四项全错也照选——「不正确的是」要看清问法</Neg></Enter>
            <Enter delay={134} style={{fontSize: 22, fontWeight: 750, color: C.ivoryDim }}>把比例性说成「越严越好」必错；把必要性丢掉必错</Enter>
          </div>
        </div>
      </div>
    </div>
  </Shell>
);

export const BailResidenceScene = () => (
  <Shell code="02" title="取保与监居：两块仪表分开读">
    <div data-layout="bail-residence-gauges" data-visual-anchor="role-pair" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="dual-gauge-panels,violation-consequence-row" data-focal-rule="bail-violations-forfeit-the-bond-while-residential-surveillance-runs-on-designated-places-only-for-special-crimes" data-focal-channels="icon,contrast,connector,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', left: 30, bottom: 16, opacity: 0.07, pointerEvents: 'none'}}><LockKeyhole size={230} color={C.ivory} strokeWidth={1.1} /></div>
      <div data-final-knowledge="bail-gauge-card" style={{position: 'absolute', left: 0, top: 0, width: 880, height: 744, backgroundColor: C.panel, border: `3px solid ${C.radar}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <LockKeyhole size={30} color={C.radar} style={{flexShrink: 0}} />
            <LabelBlock color={C.radar} size={28}>取保候审 · 仪表盘</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={16}><Chip tone="panel" style={{fontSize: 22}}>居住地执行</Chip></Enter>
        </div>
        <div style={{border: `3px dashed ${C.alert}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 9}}>
          <Enter delay={30} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <Chip tone="alert" style={{fontSize: 22}}>违反义务</Chip>
            <Dash delay={40} style={{width: 36, borderTop: `4px solid ${C.alert}`}} />
            <span style={{fontSize: 22, fontWeight: 800, color: C.ivory }}>没收保证金 ＋ 责令重新交纳</span>
          </Enter>
          <Enter delay={50} style={{fontSize: 22, fontWeight: 750, color: C.ivoryDim }}>期间累计计算——不因换保证方式清零</Enter>
        </div>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center'}}>
          <Enter delay={64} style={{display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center'}}>
            <Chip tone="radar" style={{fontSize: 22}}>住址变动 24 小时报告</Chip>
            <Chip tone="radar" style={{fontSize: 22}}>保证方式择一：人保或保证金</Chip>
          </Enter>
        </div>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <Enter delay={80} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <span style={{fontSize: 22, fontWeight: 800, color: C.ivory }}>法院可以</span>
            <SoftHi tone="radar" style={{fontSize: 22 }}>变更保证方式</SoftHi>
            <Neg size={21}>不能自夺并执行拘留权</Neg>
          </Enter>
        </div>
        <Enter delay={94} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <FileClock size={24} color={C.radar} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.ivoryDim }}>2017-2023年题 · 保证金与义务联动</span>
        </Enter>
      </div>
      <div data-final-knowledge="residence-gauge-card" style={{position: 'absolute', left: 904, top: 0, width: 872, height: 744, backgroundColor: C.panel, border: `3px solid ${C.sky}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Radar size={30} color={C.sky} style={{flexShrink: 0}} />
            <LabelBlock color={C.sky} size={28}>监视居住 · 面板</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={50}><Chip tone="panel" style={{fontSize: 22}}>公安机关执行</Chip></Enter>
        </div>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={64} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <Chip tone="sky" style={{fontSize: 22}}>国恐案件</Chip>
            <span style={{fontSize: 22, fontWeight: 800, color: C.ivory }}>住处执行有碍侦查 →</span>
            <ThinU color={C.sky}>指定居所</ThinU>
          </Enter>
          <Enter delay={74} style={{fontSize: 22, fontWeight: 750, color: C.ivoryDim }}>地点由办案机关决定；普通犯罪不得指定</Enter>
        </div>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center'}}>
          <Enter delay={88} style={{display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center'}}>
            <Chip tone="radar" style={{fontSize: 22}}>普通犯罪律师会见无需批准</Chip>
            <Chip tone="radar" style={{fontSize: 22}}>可电子监控</Chip>
            <Chip tone="radar" style={{fontSize: 22}}>证件上交 · 暂扣</Chip>
          </Enter>
        </div>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <Enter delay={104} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <span style={{fontSize: 22, fontWeight: 800, color: C.ivory }}>重病就医</span>
            <Dash delay={112} style={{width: 36, borderTop: `4px solid ${C.sky}`}} />
            <span style={{fontSize: 22, fontWeight: 800, color: C.ivory }}>可批准外出 · 撤案须作出</span>
            <SoftHi tone="sky" style={{fontSize: 22 }}>解除决定</SoftHi>
          </Enter>
        </div>
        <Enter delay={118} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <FileClock size={24} color={C.sky} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.ivoryDim }}>2019-2024年题 · 指定居所三连考</span>
        </Enter>
      </div>
    </div>
  </Shell>
);

export const DetentionStripScene = () => (
  <Shell code="03" title="拘传与拘留：滑行即计时">
    <div data-layout="detention-clearance-strip" data-visual-anchor="timeline-gate" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="clock-strip-progression,cross-region-rule-pair" data-focal-rule="summons-needs-a-warrant-but-flagrant-detention-does-not-and-all-clock-runs-start-at-twenty-four-hours" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', right: 30, bottom: 16, opacity: 0.07, pointerEvents: 'none'}}><LockKeyhole size={230} color={C.ivory} strokeWidth={1.1} /></div>
      <div data-final-knowledge="clock-strip-card" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 300, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <FileClock size={30} color={C.runway} style={{flexShrink: 0}} />
            <LabelBlock color={C.runway} size={28}>24 小时三同步</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={16}><Chip tone="panel" style={{fontSize: 22}}>拘留后起算</Chip></Enter>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <Enter delay={30}><Chip tone="runway" style={{fontSize: 23}}>送看守所</Chip></Enter>
          <Enter delay={40}><Chip tone="runway" style={{fontSize: 23}}>讯问</Chip></Enter>
          <Enter delay={50}><Chip tone="runway" style={{fontSize: 23}}>通知家属</Chip></Enter>
          <Dash delay={58} style={{flex: 1, borderTop: `4px dashed ${C.panelLine}`}} />
          <Enter delay={64}><Stamp delay={70} tone="runway">至迟 24 小时</Stamp></Enter>
        </div>
        <Enter delay={82} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
          <Radio size={22} color={C.runway} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 750, color: C.ivoryDim }}>送看前可在办案场所讯问；异地抓捕应通知当地公安机关</span>
        </Enter>
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 324, height: 420, display: 'flex', gap: 14}}>
        <div data-final-knowledge="summons-lane-card" style={{flex: 1, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <Enter delay={96} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <CircleCheckBig size={28} color={C.sky} style={{flexShrink: 0}} />
            <LabelBlock color={C.sky} size={26}>拘传 · 有证才可</LabelBlock>
          </Enter>
          <div style={{display: 'flex', flexDirection: 'column', gap: 9}}>
            <Enter delay={112} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="sky" style={{fontSize: 22}}>拘传须出示拘传证</Chip>
              <Neg size={21}>无证拘传＝违法</Neg>
            </Enter>
            <Enter delay={122} style={{fontSize: 22, fontWeight: 750, color: C.ivoryDim }}>强制措施只对嫌犯本人；不得变相关押</Enter>
          </div>
        </div>
        <div data-final-knowledge="flagrant-detention-card" style={{flex: 1, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <Enter delay={100} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <LockKeyhole size={28} color={C.alert} style={{flexShrink: 0}} />
            <LabelBlock color={C.alert} size={26}>先行拘留 · 可无证</LabelBlock>
          </Enter>
          <div style={{display: 'flex', flexDirection: 'column', gap: 9}}>
            <Enter delay={116} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="alert" style={{fontSize: 22}}>现行犯 · 重大嫌疑</Chip>
              <Stamp delay={126} tone="alert">紧急无证拘留</Stamp>
            </Enter>
            <Enter delay={134} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="alert" style={{fontSize: 22}}>紧急情况</Chip>
              <span style={{fontSize: 22, fontWeight: 800, color: C.ivory }}>可无证搜查 · 戒毒所内可讯问</span>
            </Enter>
          </div>
        </div>
      </div>
    </div>
  </Shell>
);

export const ArrestHoldshortScene = () => (
  <Shell code="04" title="逮捕与羁押审查：三灯全绿才放行">
    <div data-layout="arrest-holdshort-bay" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="three-light-gate,review-bay-column" data-focal-rule="arrest-needs-evidence-punishment-and-danger-together-and-post-arrest-review-belongs-to-the-arrest-prosecution-unit" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', left: 30, bottom: 16, opacity: 0.07, pointerEvents: 'none'}}><Radar size={230} color={C.ivory} strokeWidth={1.1} /></div>
      <div data-final-knowledge="three-light-gate-card" style={{position: 'absolute', left: 0, top: 0, width: 900, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Radar size={30} color={C.alert} style={{flexShrink: 0}} />
            <LabelBlock color={C.alert} size={28}>逮捕 · 三灯缺一不可</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={16}><Chip tone="panel" style={{fontSize: 22}}>证据 / 刑罚 / 危险性</Chip></Enter>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={30} style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '11px 16px', display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <Chip tone="alert" style={{fontSize: 22}}>有证据证明犯罪事实</Chip>
            <Chip tone="alert" style={{fontSize: 22}}>可能判处徒刑以上</Chip>
            <Chip tone="alert" style={{fontSize: 22}}>社会危险</Chip>
          </Enter>
          <Enter delay={44} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <span style={{fontSize: 22, fontWeight: 800, color: C.ivoryDim }}>社会危险三象：</span>
            <Chip tone="runway" style={{fontSize: 22}}>再犯</Chip>
            <Chip tone="runway" style={{fontSize: 22}}>严重暴力</Chip>
            <Chip tone="runway" style={{fontSize: 22}}>报复打击可能</Chip>
            <Neg size={21}>能交保证金不属危险</Neg>
          </Enter>
          <Enter delay={58} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <Chip tone="sky" style={{fontSize: 22}}>被拘留者报捕时限</Chip>
            <Stamp delay={68} tone="sky">7 日</Stamp>
            <span style={{fontSize: 22, fontWeight: 800, color: C.ivory }}>捕后 24 小时内讯问</span>
          </Enter>
        </div>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '11px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={84} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <Neg size={22}>认罪认罚 ≠ 必然不捕</Neg>
            <Neg size={22}>不批捕后不得另行侦查提意见</Neg>
          </Enter>
          <Enter delay={94} style={{fontSize: 22, fontWeight: 750, color: C.ivoryDim }}>检察院可直接逮捕漏犯；唯一扶养人不属应当讯问情形</Enter>
        </div>
        <Enter delay={106} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <FileClock size={24} color={C.alert} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.ivoryDim }}>2016-2025年题 · 逮捕条件必考</span>
        </Enter>
      </div>
      <div style={{position: 'absolute', left: 924, top: 0, width: 852, height: 744, display: 'flex', flexDirection: 'column', gap: 14}}>
        <div data-final-knowledge="custody-review-card" style={{flex: 1, backgroundColor: C.panel, border: `3px solid ${C.radar}`, borderRadius: 14, padding: '16px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Radar size={28} color={C.radar} style={{flexShrink: 0}} />
            <LabelBlock color={C.radar} size={26}>羁押必要性审查</LabelBlock>
          </Enter>
          <div style={{display: 'flex', flexDirection: 'column', gap: 9}}>
            <Enter delay={56} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="radar" style={{fontSize: 22}}>只针对被逮捕者</Chip>
              <Chip tone="radar" style={{fontSize: 22}}>捕诉部门办理</Chip>
            </Enter>
            <Enter delay={66} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="panel" style={{fontSize: 22, border: `2px solid ${C.panelLine}`}}>可依职权启动</Chip>
              <Chip tone="panel" style={{fontSize: 22, border: `2px solid ${C.panelLine}`}}>涉隐私不公开</Chip>
            </Enter>
            <Enter delay={76} style={{fontSize: 22, fontWeight: 750, color: C.ivoryDim }}>对法院只是建议，不是要求</Enter>
          </div>
        </div>
        <div data-final-knowledge="release-change-card" style={{flex: 1, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <Enter delay={92} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <ArrowLeftRight size={28} color={C.runway} style={{flexShrink: 0}} />
            <LabelBlock color={C.runway} size={26}>释放与变更</LabelBlock>
          </Enter>
          <div style={{display: 'flex', flexDirection: 'column', gap: 9}}>
            <Enter delay={108} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="runway" style={{fontSize: 22}}>判缓刑未生效 · 超审限</Chip>
              <Dash delay={116} style={{width: 36, borderTop: `4px solid ${C.runway}`}} />
              <span style={{fontSize: 22, fontWeight: 800, color: C.ivory }}>应释放或变更</span>
            </Enter>
            <Enter delay={126} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Neg size={22}>怀孕 · 疾病不属「应当」变更</Neg>
            </Enter>
            <Enter delay={134} style={{fontSize: 22, fontWeight: 750, color: C.ivoryDim }}>只有被逮捕且符合法定情形才必须放或变</Enter>
          </div>
        </div>
      </div>
    </div>
  </Shell>
);

export const MeasuresNightTower = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-principle-beacon-grid" {...SCENES.principleBeaconGrid}><PrincipleBeaconScene /></TimelineSequence>
    <TimelineSequence name="02-bail-residence-gauges" {...SCENES.bailResidenceGauges}><BailResidenceScene /></TimelineSequence>
    <TimelineSequence name="03-detention-clearance-strip" {...SCENES.detentionClearanceStrip}><DetentionStripScene /></TimelineSequence>
    <TimelineSequence name="04-arrest-holdshort-bay" {...SCENES.arrestHoldshortBay}><ArrestHoldshortScene /></TimelineSequence>
  </AbsoluteFill>
);
