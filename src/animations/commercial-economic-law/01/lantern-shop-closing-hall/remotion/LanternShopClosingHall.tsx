import {AbsoluteFill} from 'remotion';
import {Bell, FileWarning, GraduationCap, HandCoins, Landmark, Scale, Stamp, Users} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp as DoorStamp, ThinU} from './theme';

export const ClosingLaneScene = () => (
  <Shell code="01" title="关铺三部曲：散伙、盘点、摘幌">
    <div data-layout="three-step-closing-lane" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation" data-visual-grammar="death-trilogy-progression,liquidation-duty-scope" data-focal-rule="dissolution-requires-a-two-thirds-resolution-and-liquidation-duties-belong-to-directors-never-supervisors" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="close-step-dissolve" style={{position: 'absolute', left: 0, top: 0, width: 576, height: 356, backgroundColor: C.panel, border: `3px solid ${C.lantern}`, borderRadius: 16, padding: '16px 22px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Stamp size={28} color={C.lantern} style={{flexShrink: 0}} />
          <LabelBlock size={26}>第一步 · 解散</LabelBlock>
        </Enter>
        <Enter delay={22} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.paper, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>股东会作出解散决议</span>
          <span>七件大事之一：<SoftHi style={{fontSize: 21}}>2/3 以上表决权</SoftHi>（A ✓）</span>
        </Enter>
        <Enter delay={40} style={{marginTop: 8, fontSize: 21, fontWeight: 750, color: C.paperDim, lineHeight: 1.7}}>先定「关铺的意志」，再动柜台</Enter>
      </div>
      <div data-final-knowledge="close-step-liquidate" style={{position: 'absolute', left: 600, top: 0, width: 576, height: 356, backgroundColor: C.panel, border: `3px solid ${C.plankLine}`, borderRadius: 16, padding: '16px 22px'}}>
        <Enter delay={54} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Scale size={28} color={C.paper} style={{flexShrink: 0}} />
          <LabelBlock color={C.plank} light size={26}>第二步 · 清算</LabelBlock>
        </Enter>
        <div style={{marginTop: 14, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={70} style={{fontSize: 21, fontWeight: 800, color: C.paper, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="jade" style={{fontSize: 20}}>清算义务人＝董事</Chip>甲在列</Enter>
          <Enter delay={84} style={{fontSize: 21, fontWeight: 750, color: C.paper, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Neg size={20}>B 监事乙也是义务人——不是</Neg></Enter>
          <Enter delay={98} style={{fontSize: 21, fontWeight: 750, color: C.paper, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="panel" style={{fontSize: 20, border: `2px solid ${C.panelLine}`}}>清算组：章程或股东会选任</Chip></Enter>
          <Enter delay={112} style={{fontSize: 21, fontWeight: 750, color: C.paper, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Neg size={20}>C 乙共同组成清算组——无职责不参与</Neg></Enter>
        </div>
      </div>
      <div data-final-knowledge="close-step-deregister" style={{position: 'absolute', left: 1200, top: 0, width: 576, height: 356, backgroundColor: C.panel, border: `3px solid ${C.plankLine}`, borderRadius: 16, padding: '16px 22px'}}>
        <Enter delay={126} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Landmark size={28} color={C.paper} style={{flexShrink: 0}} />
          <LabelBlock color={C.plank} light size={26}>第三步 · 注销</LabelBlock>
        </Enter>
        <Enter delay={142} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.paper, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>清偿债务安排妥当</span>
          <span>→ 办理<SoftHi style={{fontSize: 21}}>注销登记</SoftHi>，幌子才摘得下</span>
        </Enter>
        <Enter delay={162} style={{marginTop: 8, fontSize: 21, fontWeight: 750, color: C.paperDim, lineHeight: 1.7}}>顺序不能跳：没清点完柜台就摘幌，债主会找上门</Enter>
      </div>
      <div data-final-knowledge="close-exam-verdict" style={{position: 'absolute', left: 0, right: 0, top: 382, height: 362, backgroundColor: C.ink, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={176} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.lantern} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>2024金题 · 正确答案 A</span>
          </Enter>
          <Enter delay={194} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.paper, lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 10}}>
            <span>· 清算义务人只写董事的名字，<ThinU color={C.lantern}>监事不上花名册</ThinU></span>
            <span>· 清算组默认由董事组成，章程或股东会另行选任除外</span>
          </Enter>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={214} style={{fontSize: 23, fontWeight: 900, color: C.lantern}}>与叶洋公司的官司怎么办？</Enter>
          <Enter delay={230} style={{fontSize: 22, fontWeight: 750, color: C.paper, lineHeight: 1.8}}>打官司照打——详见 02 场景：解散清算<ThinU color={C.lantern}>不中止</ThinU>诉讼</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const CourtTrackScene = () => (
  <Shell code="02" title="官司照打：两条清算轨道的分岔">
    <div data-layout="dual-track-court-board" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline" data-visual-grammar="dissolution-vs-bankruptcy-track,representative-continuity" data-focal-rule="dissolution-liquidation-never-stays-litigation-while-bankruptcy-acceptance-freezes-directors-and-suits" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="ct-dissolution-track" style={{position: 'absolute', left: 0, top: 0, width: 864, height: 470, backgroundColor: C.paper, border: `3px solid ${C.jade}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Users size={30} color={C.ink} style={{flexShrink: 0}} />
          <LabelBlock color={C.jade} size={27}>解散清算 · 本案轨道</LabelBlock>
        </Enter>
        <div style={{marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={24} style={{fontSize: 22, fontWeight: 850, color: C.ink, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Chip tone="jade" style={{fontSize: 21}}>诉讼不中止</Chip>照常开庭（D ✗）</Enter>
          <Enter delay={40} style={{fontSize: 22, fontWeight: 750, color: C.ink, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Chip tone="panel" style={{fontSize: 20, border: `2px solid ${C.inkLine ?? C.panelLine}`}}>清算组成立前</Chip>原法定代表人代表应诉</Enter>
          <Enter delay={56} style={{fontSize: 22, fontWeight: 750, color: C.ink, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Chip tone="panel" style={{fontSize: 20, border: `2px solid ${C.inkLine ?? C.panelLine}`}}>清算组成立后</Chip>负责人代表公司</Enter>
        </div>
      </div>
      <div data-final-knowledge="ct-bankruptcy-track" style={{position: 'absolute', left: 896, top: 0, width: 880, height: 470, backgroundColor: C.panel, border: `3px solid ${C.seal}`, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={72} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <FileWarning size={30} color={C.seal} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={27}>破产清算 · 对照轨道</LabelBlock>
        </Enter>
        <div style={{marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={90} style={{fontSize: 22, fontWeight: 850, color: C.paper, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Chip tone="seal" style={{fontSize: 21}}>受理时诉讼中止</Chip>董监高停止工作</Enter>
          <Enter delay={108} style={{fontSize: 22, fontWeight: 750, color: C.paperDim, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Chip tone="panel" style={{fontSize: 20, border: `2px solid ${C.panelLine}`}}>管理人接管</Chip>财产与诉讼事务移交</Enter>
          <Enter delay={126} style={{fontSize: 21, fontWeight: 750, color: C.paperDim, lineHeight: 1.7}}>两条轨道一个分岔口：受理的是「破产」，灯才灭；只是「解散」，灯还亮着继续打官司</Enter>
        </div>
      </div>
      <div data-final-knowledge="ct-exam-verdict" style={{position: 'absolute', left: 0, right: 0, top: 496, height: 248, backgroundColor: C.ink, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={142} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.lantern} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>背下来 · 一根分岔线</span>
          </Enter>
          <Enter delay={160} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.paper, lineHeight: 1.8}}>被「受理破产」才中止；自己决议「解散」清偿的，诉讼、应诉一切照旧——<ThinU color={C.lantern}>D 项说中止，正是踩了这条线</ThinU></Enter>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={180}><Chip tone="lantern" style={{fontSize: 21, color: C.ink}}>解散清算：不中止</Chip></Enter>
          <Enter delay={194}><Chip tone="seal" style={{fontSize: 21}}>破产清算：中止＋停工</Chip></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const SimpleDeregisterScene = () => (
  <Shell code="03" title="简易注销：不盘点直接摘幌，先立保状">
    <div data-layout="pledge-deregister-desk" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="pledge-substitutes-liquidation,false-pledge-joint-liability" data-focal-rule="simplified-deregistration-skips-liquidation-only-on-a-clean-debt-pledge-and-a-false-pledge-drags-shareholders-into-joint-liability" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="dg-premise-desk" style={{position: 'absolute', left: 0, top: 0, width: 1064, height: 286, backgroundColor: C.paper, border: `3px solid ${C.ink}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <HandCoins size={30} color={C.ink} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={27}>云柔公司欠甲公司 100 万 · 想走简易注销？</LabelBlock>
        </Enter>
        <Enter delay={24} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>前提三件套：<SoftHi dark style={{fontSize: 21}}>无未结清债务</SoftHi>＋<SoftHi dark style={{fontSize: 21}}>股东会解散决议</SoftHi>（A ✓）＋<SoftHi dark style={{fontSize: 21}}>全体股东承诺</SoftHi>（B ✓）</span>
          <span>公示系统公告<Chip tone="seal" style={{fontSize: 20}}>不少于 20 日</Chip>，无异议方可申请</span>
        </Enter>
      </div>
      <div data-final-knowledge="dg-notice-gate" style={{position: 'absolute', left: 1096, top: 0, width: 680, height: 286, backgroundColor: C.panel, border: `3px solid ${C.lantern}`, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={44} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Bell size={28} color={C.lantern} style={{flexShrink: 0}} />
          <LabelBlock size={25}>要不要通知甲公司？</LabelBlock>
        </Enter>
        <Enter delay={60} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.paper, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>不用——适用前提就是<ThinU color={C.lantern}>债务已清偿完毕</ThinU></span>
          <span style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Neg size={21}>C 应提前通知——错</Neg></span>
        </Enter>
      </div>
      <div data-final-knowledge="dg-false-pledge-board" style={{position: 'absolute', left: 0, right: 0, top: 312, height: 432, backgroundColor: C.ink, borderRadius: 16, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={80} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <FileWarning size={28} color={C.seal} style={{flexShrink: 0}} />
            <LabelBlock color={C.seal} size={26}>保状立假了 · 后果连锁</LabelBlock>
          </Enter>
          <div style={{marginTop: 16, display: 'flex', flexDirection: 'column', gap: 14}}>
            <Enter delay={100} style={{fontSize: 22, fontWeight: 800, color: C.paper, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
              <span>未清偿 100 万就注销 → 承诺内容不实</span>
              <span>甲公司有权要求张某、王某<SoftHi style={{fontSize: 21}}>对注销前债务连带担责</SoftHi>（D ✓）</span>
            </Enter>
            <Enter delay={122} style={{marginTop: 4}}><Neg size={21}>注销 ≠ 简化责任——幌子摘了，账追人</Neg></Enter>
          </div>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={142} style={{fontSize: 23, fontWeight: 900, color: C.lantern, display: 'flex', alignItems: 'center', gap: 10}}><GraduationCap size={24} color={C.lantern} style={{flexShrink: 0}} />再记一条</Enter>
          <Enter delay={158} style={{fontSize: 22, fontWeight: 750, color: C.paper, lineHeight: 1.8}}>全体投资人承诺书<ThinU color={C.lantern}>替代不了股东会决议</ThinU>——决议照开、承诺照立，两样都要</Enter>
          <Enter delay={180}><DoorStamp delay={186} tone="jade">2024金题 答案 ABD</DoorStamp></Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const LanternShopClosingHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-closing-lane" {...SCENES.closingLane}><ClosingLaneScene /></TimelineSequence>
    <TimelineSequence name="02-court-track" {...SCENES.courtTrack}><CourtTrackScene /></TimelineSequence>
    <TimelineSequence name="03-simple-deregister" {...SCENES.simpleDeregister}><SimpleDeregisterScene /></TimelineSequence>
  </AbsoluteFill>
);
