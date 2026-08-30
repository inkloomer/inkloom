import {AbsoluteFill} from 'remotion';
import {Compass, FileSearch, Footprints, GitCompare, GraduationCap, Landmark, Layers, MapPin, Network, Ship, Siren, Train} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp, ThinU} from './theme';

export const FilingAuthorityScene = () => (
  <Shell code="01" title="立案三分流：谁家孩子谁家抱">
    <div data-layout="filing-authority-split" data-visual-anchor="boundary" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="three-way-filing-split,proxy-teller-fork" data-focal-rule="smuggling-belongs-to-police-with-procuratorial-intake-above-provincial-level-while-graft-goes-to-supervision-and-limited-suits-may-be-filed-by-proxy" data-focal-channels="icon,contrast,connector,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="filing-three-way-split" style={{position: 'absolute', left: 0, top: 0, width: 880, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <LabelBlock size={28}>立案三分流</LabelBlock>
          <span style={{flex: 1}} />
          <Chip tone="panel" style={{fontSize: 22}}>各管一段 · 对号入座</Chip>
        </Enter>
        <div style={{border: `2px solid ${C.teal}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 9}}>
          <Enter delay={24} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Siren size={26} color={C.teal} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.ink}}>公安</span>
            <Chip tone="teal" style={{fontSize: 22}}>一般刑事案件</Chip>
            <Chip tone="teal" style={{fontSize: 22}}>走私犯罪 → 公安侦查</Chip>
          </Enter>
          <Enter delay={38} style={{display: 'flex', alignItems: 'center', gap: 10, marginLeft: 38, flexWrap: 'wrap'}}>
            <span style={{fontSize: 22, fontWeight: 800, color: C.mist}}>检察院经</span>
            <ThinU color={C.teal}>省级以上决定</ThinU>
            <span style={{fontSize: 22, fontWeight: 800, color: C.mist}}>方可介入：</span>
            <Chip tone="panel" style={{fontSize: 22}}>自侦</Chip>
            <Chip tone="panel" style={{fontSize: 22}}>或指定下级</Chip>
          </Enter>
        </div>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <Enter delay={56} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <FileSearch size={26} color={C.navy} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.ink}}>检察院</span>
            <Chip tone="navy" style={{fontSize: 22}}>司法工作人员利用职权</Chip>
            <span style={{fontSize: 22, fontWeight: 800, color: C.mist}}>非贪腐职务犯罪 → 检院侦查</span>
          </Enter>
        </div>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <Enter delay={74} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Landmark size={26} color={C.sand} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.ink}}>监察委</span>
            <Chip tone="sand" style={{fontSize: 22}}>贪污贿赂等职务犯罪</Chip>
            <span style={{fontSize: 22, fontWeight: 800, color: C.mist}}>→ 监察调查，不走刑诉立案</span>
          </Enter>
        </div>
        <Enter delay={92} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.navy} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.mist}}>2021-2023年题 · 三家分界线反复考</span>
        </Enter>
      </div>
      <div data-final-knowledge="filing-proxy-suit-card" style={{position: 'absolute', left: 904, top: 0, width: 872, height: 356, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <LabelBlock color={C.teal} size={28}>自诉也能代告</LabelBlock>
          <span style={{flex: 1}} />
          <Chip tone="panel" style={{fontSize: 22}}>被害人无能力告诉时</Chip>
        </Enter>
        <Enter delay={56} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <Chip tone="panel" style={{fontSize: 22}}>被害人死亡 · 无行为能力等</Chip>
          <Dash delay={66} style={{width: 44, borderTop: `4px solid ${C.teal}`}} />
          <Chip tone="teal" style={{fontSize: 22}}>法定代理人</Chip>
          <Chip tone="teal" style={{fontSize: 22}}>近亲属</Chip>
          <span style={{fontSize: 23, fontWeight: 900, color: C.ink}}>可代为自诉</span>
        </Enter>
        <Enter delay={80} style={{fontSize: 22, fontWeight: 750, color: C.mist}}>告诉才处理与轻微自诉案——告的权利不随人灭</Enter>
      </div>
      <div data-final-knowledge="filing-limitation-card" style={{position: 'absolute', left: 904, top: 380, width: 872, height: 364, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Enter delay={100} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <LabelBlock size={28}>追诉时效的分叉</LabelBlock>
          <span style={{flex: 1}} />
          <ThinU color={C.coral}>看是否逃避侦查</ThinU>
        </Enter>
        <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={118} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Chip tone="teal" style={{fontSize: 22}}>未逃避侦查</Chip>
            <span style={{fontSize: 22, fontWeight: 800, color: C.ink}}>照常计算时效 → 已过 =</span>
            <Stamp delay={128} tone="coral">法定不起诉</Stamp>
          </Enter>
          <Enter delay={140} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Chip tone="coral" style={{fontSize: 22}}>逃避侦查</Chip>
            <span style={{fontSize: 22, fontWeight: 800, color: C.ink}}>追诉时效</span>
            <SoftHi tone="coral" style={{fontSize: 22}}>不受限</SoftHi>
            <Neg size={22}>说「一律过时效」即错</Neg>
          </Enter>
        </div>
        <Enter delay={156} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.navy} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.mist}}>2016年题 · 时效与不起诉联动</span>
        </Enter>
      </div>
    </div>
  </Shell>
);

export const TrialJurisdictionScene = () => (
  <Shell code="02" title="审判管辖：先纵后横两把尺">
    <div data-layout="trial-jurisdiction-ladder" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="two-key-sequence,escalation-rules" data-focal-rule="vertical-first-then-horizontal-level-before-territory-with-whole-case-escalation-and-net-crimes-nearly-anywhere" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="trial-two-keys-head" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 108, backgroundColor: '#FBF7EC', border: `3px solid ${C.navy}`, borderRadius: 14, padding: '12px 24px', display: 'flex', alignItems: 'center', gap: 16, boxShadow: `0 8px 22px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <LabelBlock size={30}>先纵后横</LabelBlock>
          <Layers size={30} color={C.navy} style={{flexShrink: 0}} />
          <Chip tone="navy" style={{fontSize: 23}}>纵——级别管辖</Chip>
          <Dash delay={18} style={{width: 56, borderTop: `4px solid ${C.navy}`}} />
          <MapPin size={30} color={C.teal} style={{flexShrink: 0}} />
          <Chip tone="teal" style={{fontSize: 23}}>横——地区管辖</Chip>
        </Enter>
        <span style={{flex: 1}} />
        <Enter delay={30} style={{fontSize: 23, fontWeight: 850, color: C.ink}}>级别不够中院，地区看<ThinU>犯罪地</ThinU></Enter>
      </div>
      <div data-final-knowledge="trial-level-card" style={{position: 'absolute', left: 0, top: 132, width: 866, height: 612, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Enter delay={44} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Layers size={30} color={C.navy} style={{flexShrink: 0}} />
          <LabelBlock color={C.navy} size={28}>级别管辖</LabelBlock>
        </Enter>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 9}}>
          <Enter delay={60} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Chip tone="navy" style={{fontSize: 22}}>一人数罪 · 共同犯罪</Chip>
            <span style={{fontSize: 22, fontWeight: 800, color: C.ink}}>一罪属上级法院 →</span>
            <SoftHi tone="navy" style={{fontSize: 23}}>全案上级管辖</SoftHi>
          </Enter>
          <Enter delay={74}><Stamp delay={80} tone="navy">就高不就低</Stamp></Enter>
        </div>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 9}}>
          <Enter delay={92} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <FileSearch size={24} color={C.navy} style={{flexShrink: 0}} />
            <span style={{fontSize: 23, fontWeight: 900, color: C.ink}}>检院处分权：</span>
            <Chip tone="panel" style={{fontSize: 22}}>可撤诉</Chip>
            <Chip tone="panel" style={{fontSize: 22}}>可指令下级起诉</Chip>
          </Enter>
          <Enter delay={106} style={{fontSize: 22, fontWeight: 750, color: C.mist}}>指控权在检院手里，去向由它定</Enter>
        </div>
        <Enter delay={120} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.navy} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.mist}}>2019-2020年题 · 就高原则必考</span>
        </Enter>
      </div>
      <div data-final-knowledge="trial-territory-card" style={{position: 'absolute', left: 890, top: 132, width: 886, height: 612, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Enter delay={64} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <MapPin size={30} color={C.teal} style={{flexShrink: 0}} />
          <LabelBlock color={C.teal} size={28}>地区管辖</LabelBlock>
        </Enter>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 9}}>
          <Enter delay={80} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <span style={{fontSize: 23, fontWeight: 900, color: C.ink}}>一般案件：</span>
            <ThinU color={C.teal}>犯罪地法院为主</ThinU>
            <span style={{fontSize: 22, fontWeight: 800, color: C.mist}}>· 被告人居住地为辅</span>
          </Enter>
          <Enter delay={94} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Network size={24} color={C.teal} style={{flexShrink: 0}} />
            <Chip tone="teal" style={{fontSize: 22}}>信息网络犯罪</Chip>
            <span style={{fontSize: 22, fontWeight: 800, color: C.ink}}>犯罪地或居住地均可——</span>
            <SoftHi tone="sand" style={{fontSize: 22}}>沾边就管</SoftHi>
          </Enter>
        </div>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 9}}>
          <Enter delay={112} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <span style={{fontSize: 23, fontWeight: 900, color: C.ink}}>门当户对：</span>
            <span style={{fontSize: 22, fontWeight: 800, color: C.ink}}>起诉与审判</span>
            <ThinU color={C.navy}>同级对应</ThinU>
          </Enter>
          <Enter delay={126} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Siren size={24} color={C.teal} style={{flexShrink: 0}} />
            <span style={{fontSize: 22, fontWeight: 800, color: C.ink }}>侦查 · 司法协助 → 找</span>
            <Chip tone="teal" style={{fontSize: 22}}>公安部</Chip>
          </Enter>
        </div>
        <Enter delay={142} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.navy} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.mist}}>2022-2024年题 · 网络管辖沾边就管</span>
        </Enter>
      </div>
    </div>
  </Shell>
);

export const SpecialVenueScene = () => (
  <Shell code="03" title="特殊地段与并案：航线各记各的锚点">
    <div data-layout="special-venue-ledger" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="special-venue-grid,merge-remand-rule" data-focal-rule="special-venues-anchor-on-vessel-territory-train-and-escape-while-second-instance-must-remand-to-merge-revealed-crimes" data-focal-channels="icon,contrast,annotation,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="venue-special-grid" style={{position: 'absolute', left: 0, top: 0, width: 940, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <LabelBlock size={28}>特殊地域 · 四张锚点卡</LabelBlock>
          <span style={{flex: 1}} />
          <Chip tone="panel" style={{fontSize: 22}}>对卡入座</Chip>
        </Enter>
        <div style={{flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, alignContent: 'center'}}>
          <Enter delay={24} style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <Ship size={24} color={C.navy} style={{flexShrink: 0}} />
              <span style={{fontSize: 23, fontWeight: 900, color: C.ink}}>公海中国船舶</span>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 6}}>
              <Chip tone="navy" style={{fontSize: 22}}>初泊地</Chip>
              <Chip tone="navy" style={{fontSize: 22}}>入境地</Chip>
            </div>
            <span style={{fontSize: 22, fontWeight: 750, color: C.mist }}>另有犯罪地 · 登船地 · 居住地</span>
          </Enter>
          <Enter delay={38} style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <Compass size={24} color={C.teal} style={{flexShrink: 0}} />
              <span style={{fontSize: 23, fontWeight: 900, color: C.ink}}>公民域外犯罪</span>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 6}}>
              <Chip tone="teal" style={{fontSize: 22}}>登陆地</Chip>
              <Chip tone="teal" style={{fontSize: 22}}>入境地</Chip>
            </div>
            <span style={{fontSize: 22, fontWeight: 750, color: C.mist }}>离境前居住地 · 现居住地亦可</span>
          </Enter>
          <Enter delay={52} style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <Train size={24} color={C.navy} style={{flexShrink: 0}} />
              <span style={{fontSize: 23, fontWeight: 900, color: C.ink }}>国内列车</span>
            </div>
            <span style={{fontSize: 22, fontWeight: 800, color: C.ink }}>非运行中被抓 →</span>
            <span style={{fontSize: 22, fontWeight: 750, color: C.mist }}>乘务公安对应的法院管辖</span>
          </Enter>
          <Enter delay={66} style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <Footprints size={24} color={C.coral} style={{flexShrink: 0}} />
              <span style={{fontSize: 23, fontWeight: 900, color: C.ink }}>脱逃又犯新罪</span>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 6}}>
              <Chip tone="coral" style={{fontSize: 22}}>服刑地</Chip>
              <Chip tone="coral" style={{fontSize: 22}}>新罪犯罪地</Chip>
            </div>
            <span style={{fontSize: 22, fontWeight: 750, color: C.mist }}>发现并抓获之地管辖并案</span>
          </Enter>
        </div>
        <Enter delay={84} style={{fontSize: 22, fontWeight: 800, color: C.mist }}>口诀：犯 · 居 · 登打底；船舶加初泊 · 入境，域外加离境前</Enter>
      </div>
      <div style={{position: 'absolute', left: 964, top: 0, width: 812, height: 744, display: 'flex', flexDirection: 'column', gap: 14}}>
        <div data-final-knowledge="venue-merge-remand-card" style={{flex: 1, backgroundColor: C.panel, border: `3px solid ${C.coral}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <Enter delay={100} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GitCompare size={30} color={C.coral} style={{flexShrink: 0}} />
            <LabelBlock color={C.coral} size={28}>二审遇漏罪</LabelBlock>
            <span style={{flex: 1}} />
            <Chip tone="panel" style={{fontSize: 22}}>保审级利益</Chip>
          </Enter>
          <Enter delay={118} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Chip tone="coral" style={{fontSize: 22}}>决定并案</Chip>
            <Dash delay={128} style={{width: 44, borderTop: `4px solid ${C.coral}`}} />
            <SoftHi tone="coral" style={{fontSize: 24}}>发回重审</SoftHi>
          </Enter>
          <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
            <Enter delay={138}><Neg size={22}>不得在二审直接并案审理</Neg></Enter>
            <Enter delay={148} style={{fontSize: 22, fontWeight: 750, color: C.mist }}>由一审并案——漏罪未判同此理</Enter>
          </div>
        </div>
        <div data-final-knowledge="venue-net-procedure-card" style={{flex: 1, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <Enter delay={160} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Network size={30} color={C.teal} style={{flexShrink: 0}} />
            <LabelBlock color={C.teal} size={28}>网络犯罪程序三件</LabelBlock>
          </Enter>
          <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
            <Enter delay={176} style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Chip tone="teal" style={{fontSize: 22}}>证据可抽样收集</Chip>
              <span style={{fontSize: 22, fontWeight: 750, color: C.mist }}>海量数据不必逐个取证</span>
            </Enter>
            <Enter delay={188} style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Chip tone="teal" style={{fontSize: 22}}>远程询问应录音录像</Chip>
              <span style={{fontSize: 22, fontWeight: 750, color: C.mist }}>跨屏取证留全记录</span>
            </Enter>
            <Enter delay={200} style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <Chip tone="teal" style={{fontSize: 22}}>帮助犯可并案侦查</Chip>
              <span style={{fontSize: 22, fontWeight: 750, color: C.mist }}>上下游一案办</span>
            </Enter>
          </div>
          <Enter delay={214} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <GraduationCap size={24} color={C.navy} style={{flexShrink: 0}} />
            <span style={{fontSize: 22, fontWeight: 800, color: C.mist }}>2024-2025年题 · 网络新规三连</span>
          </Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const JurisdictionSeaChart = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-filing-authority-split" {...SCENES.filingAuthoritySplit}><FilingAuthorityScene /></TimelineSequence>
    <TimelineSequence name="02-trial-jurisdiction-ladder" {...SCENES.trialJurisdictionLadder}><TrialJurisdictionScene /></TimelineSequence>
    <TimelineSequence name="03-special-venue-ledger" {...SCENES.specialVenueLedger}><SpecialVenueScene /></TimelineSequence>
  </AbsoluteFill>
);
