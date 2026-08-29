import {AbsoluteFill} from 'remotion';
import {Coins, FileX, GraduationCap, Landmark, Lightbulb, ScrollText, Split, Users, Vote, Zap} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp, ThinU} from './theme';

export const ClassShareScene = () => (
  <Shell code="01" title="类别股：章程写明，公开前后两重天">
    <div data-layout="charter-issue-window" data-visual-anchor="boundary" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="charter-mandate-rule,issue-window-boundary" data-focal-rule="special-voting-class-shares-require-a-charter-clause-issue-only-before-public-offering-and-shrink-to-one-vote-per-share-when-electing-supervisors" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="cls-charter-gate" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 210, backgroundColor: C.paper, border: `3px solid ${C.ink}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 8px 20px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <ScrollText size={30} color={C.ink} style={{flexShrink: 0}} />
          <LabelBlock color={C.dai} size={28}>第一道闸 · 公司章程</LabelBlock>
          <Stamp delay={18} tone="jade">A 项 ✓ 须先改章程</Stamp>
        </Enter>
        <Enter delay={32} style={{marginTop: 14, fontSize: 23, fontWeight: 850, color: C.ink, lineHeight: 1.7}}>每一类别股的<SoftHi style={{fontSize: 22}}>股份数与权利义务</SoftHi>，章程必须载明——特别表决权不能口头发行</Enter>
      </div>
      <div data-final-knowledge="cls-issue-window" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 210, backgroundColor: C.panel, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={46} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Landmark size={28} color={C.dai} style={{flexShrink: 0}} />
          <LabelBlock color={C.dai} size={26}>第二道闸 · 公开发行时点</LabelBlock>
        </Enter>
        <Enter delay={60} style={{marginTop: 14, fontSize: 22, fontWeight: 850, color: C.ink, lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>公开发行<ThinU color={C.jade}>前</ThinU>：可以发行特别表决权股（B 项表意相反 ✗）</span>
          <span>公开发行<ThinU color={C.crimson}>后</ThinU>：<Neg size={21}>不得再签发——控制权怕频繁变化</Neg></span>
        </Enter>
      </div>
      <div data-final-knowledge="cls-vote-split" style={{position: 'absolute', left: 0, top: 236, width: 1064, height: 300, backgroundColor: C.paper, border: `3px solid ${C.dai}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 8px 20px ${C.shadow}`}}>
        <Enter delay={76} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Split size={30} color={C.dai} style={{flexShrink: 0}} />
          <LabelBlock color={C.dai} size={28}>特别表决权的适用分流</LabelBlock>
        </Enter>
        <div style={{marginTop: 16, display: 'flex', gap: 18}}>
          <div style={{flex: 1, backgroundColor: C.panel, borderRadius: 12, padding: '12px 18px'}}>
            <Enter delay={92} style={{fontSize: 23, fontWeight: 900, color: C.ink, display: 'flex', alignItems: 'center', gap: 10}}><Vote size={24} color={C.jade} style={{flexShrink: 0}} />选董事</Enter>
            <Enter delay={104} style={{marginTop: 8, display: 'flex', alignItems: 'center', gap: 10}}><Chip tone="jade" style={{fontSize: 22}}>可用特别表决权</Chip></Enter>
            <Enter delay={116} style={{marginTop: 8, fontSize: 21, fontWeight: 750, color: C.ink}}>C 项 ✓——经营人选人不受限</Enter>
          </div>
          <div style={{flex: 1, backgroundColor: C.panel, borderRadius: 12, padding: '12px 18px', border: `3px dashed ${C.crimson}`}}>
            <Enter delay={130} style={{fontSize: 23, fontWeight: 900, color: C.ink, display: 'flex', alignItems: 'center', gap: 10}}><Users size={24} color={C.crimson} style={{flexShrink: 0}} />选监事 · 审委会成员</Enter>
            <Enter delay={142} style={{marginTop: 8, display: 'flex', alignItems: 'center', gap: 10}}><Chip tone="crimson" style={{fontSize: 22}}>每股表决权数相同</Chip></Enter>
            <Enter delay={154} style={{marginTop: 8, fontSize: 21, fontWeight: 750, color: C.ink}}>D 项 ✗——防监督失灵</Enter>
          </div>
        </div>
      </div>
      <div data-final-knowledge="cls-exam-recap" style={{position: 'absolute', left: 1096, top: 236, width: 680, height: 300, backgroundColor: C.ink, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={168} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <GraduationCap size={28} color={C.gold} style={{flexShrink: 0}} />
          <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>2024金题 · 背下来</span>
        </Enter>
        <Enter delay={184} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.paper, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 10}}>
          <span><Chip tone="gold" style={{fontSize: 21, color: C.ink}}>特别表决权股</Chip> 与 <Chip tone="gold" style={{fontSize: 21, color: C.ink}}>转让受限股</Chip></span>
          <span>公开发行前<span style={{color: '#9FD8AF'}}>可以</span>发行，发行后<span style={{color: '#FFB4A0'}}>不得</span>签发</span>
        </Enter>
        <Enter delay={202} style={{marginTop: 12, fontSize: 21, fontWeight: 750, color: 'rgba(251,249,240,0.66)', lineHeight: 1.7}}>正确答案 AC——先章程、再时点、后分流</Enter>
      </div>
    </div>
  </Shell>
);

export const AuthorizedCapitalScene = () => (
  <Shell code="02" title="增资双径：股东会与董事会的两张票匣">
    <div data-layout="dual-path-vote-desk" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="dual-capital-path,supermajority-threshold" data-focal-rule="authorized-capital-lets-a-two-thirds-board-issue-money-only-shares-while-nonmonetary-subscriptions-still-need-a-shareholders-resolution" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="cap-general-path" style={{position: 'absolute', left: 0, top: 0, width: 864, height: 404, backgroundColor: C.paper, border: `3px solid ${C.ink}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 8px 20px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Users size={30} color={C.ink} style={{flexShrink: 0}} />
          <LabelBlock color={C.dai} size={28}>一般增资 · 股东会路径</LabelBlock>
        </Enter>
        <div style={{marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={22}><Chip tone="dai" style={{fontSize: 23}}><Vote size={22} color={C.paper} style={{flexShrink: 0}} />出席股东 2/3 以上表决权</Chip></Enter>
          <Enter delay={36}><Chip tone="panel" style={{fontSize: 22, border: `2px solid ${C.inkLine}`}}>认股人：货币 或 非货币出资均可</Chip></Enter>
        </div>
        <Enter delay={50} style={{marginTop: 14, fontSize: 22, fontWeight: 750, color: C.ink, lineHeight: 1.7}}>非货币进来要股东会点头——防<ThinU color={C.crimson}>定价不当</ThinU>坑原股东</Enter>
      </div>
      <div data-final-knowledge="cap-authorized-path" style={{position: 'absolute', left: 896, top: 0, width: 880, height: 404, backgroundColor: C.panel, border: `3px solid ${C.dai}`, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={64} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Vote size={30} color={C.dai} style={{flexShrink: 0}} />
          <LabelBlock color={C.dai} size={28}>授权资本制 · 董事会路径</LabelBlock>
        </Enter>
        <div style={{marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={80}><Chip tone="dai" style={{fontSize: 23}}>董事会决议：全体董事 2/3 以上通过</Chip></Enter>
          <Enter delay={94} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <Chip tone="panel" style={{fontSize: 22, border: `2px solid ${C.inkLine}`}}>只能货币出资</Chip>
            <Chip tone="panel" style={{fontSize: 22, border: `2px solid ${C.inkLine}`}}>3 年内</Chip>
            <Chip tone="panel" style={{fontSize: 22, border: `2px solid ${C.inkLine}`}}>≤ 已发行 50%</Chip>
          </Enter>
        </div>
        <Enter delay={110} style={{marginTop: 14, fontSize: 22, fontWeight: 750, color: C.ink, lineHeight: 1.7}}>授权决议本身是内部分工——一般事项<ThinU color={C.dai}>过半数</ThinU>即可，不因唐某反对而无效（A ✗）</Enter>
      </div>
      <div data-final-knowledge="cap-case-verdict" style={{position: 'absolute', left: 0, top: 430, width: 1064, height: 314, backgroundColor: C.ink, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={124} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <GraduationCap size={28} color={C.gold} style={{flexShrink: 0}} />
          <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>本案验票 · 2024金题</span>
        </Enter>
        <div style={{marginTop: 14, display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={140} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Chip tone="gold" style={{fontSize: 22, color: C.ink}}>董事会 5 人，4/5 同意 ≥ 2/3</Chip>
            <Stamp delay={150} tone="jade">发行决议有效 · B ✗</Stamp>
          </Enter>
          <Enter delay={164} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Chip tone="gold" style={{fontSize: 22, color: C.ink}}>王某现金认购 200 万股</Chip>
            <Stamp delay={174} tone="jade">可获得 · D ✗</Stamp>
          </Enter>
        </div>
      </div>
      <div data-final-knowledge="cap-patent-fork" style={{position: 'absolute', left: 1096, top: 430, width: 680, height: 314, backgroundColor: C.paper, border: `3px solid ${C.gold}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 8px 20px ${C.shadow}`}}>
        <Enter delay={188} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Lightbulb size={30} color={C.ink} style={{flexShrink: 0}} />
          <LabelBlock color={C.crimson} size={26}>张某拿专利作价出资</LabelBlock>
        </Enter>
        <Enter delay={204} style={{marginTop: 14, fontSize: 23, fontWeight: 900, color: C.ink, lineHeight: 1.7}}>授权资本制只收<SoftHi style={{fontSize: 22}}>货币</SoftHi>——专利作价必须<ThinU color={C.crimson}>经股东会决议</ThinU></Enter>
        <Enter delay={220} style={{marginTop: 10, display: 'flex', justifyContent: 'flex-end'}}><Stamp delay={226} tone="crimson">C ✓ 当选</Stamp></Enter>
      </div>
    </div>
  </Shell>
);

export const ReserveMisuseScene = () => (
  <Shell code="03" title="公积金填出资：无效决议与加速到期">
    <div data-layout="misuse-acceleration-bench" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="ultra-vires-invalidation,acceleration-trigger" data-focal-rule="capital-reserve-cannot-discharge-a-shareholders-contribution-and-bankruptcy-acceptance-accelerates-the-unmatured-duty" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="mis-invalid-resolution" style={{position: 'absolute', left: 0, top: 0, width: 1064, height: 286, backgroundColor: C.paper, border: `3px solid ${C.crimson}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 8px 20px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <FileX size={30} color={C.crimson} style={{flexShrink: 0}} />
          <LabelBlock color={C.crimson} size={28}>股东会决议：资本公积金填补艾某出资</LabelBlock>
        </Enter>
        <Enter delay={24} style={{marginTop: 14, fontSize: 23, fontWeight: 850, color: C.ink, lineHeight: 1.7}}>公积金法定用途：<SoftHi style={{fontSize: 22}}>弥补亏损 · 扩大经营 · 转增注册资本</SoftHi>——不含代股东缴出资</Enter>
        <Enter delay={42} style={{marginTop: 10, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <Neg size={23}>填出资＝豁免出资义务，损害债权人</Neg>
          <Stamp delay={52} tone="crimson">内容违法 · 无效</Stamp>
        </Enter>
      </div>
      <div data-final-knowledge="mis-invalidation-fork" style={{position: 'absolute', left: 1096, top: 0, width: 680, height: 286, backgroundColor: C.panel, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={66} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Users size={28} color={C.dai} style={{flexShrink: 0}} />
          <LabelBlock color={C.dai} size={26}>无效 ≠ 可撤销</LabelBlock>
        </Enter>
        <div style={{marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={80} style={{fontSize: 22, fontWeight: 750, color: C.ink, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="crimson" style={{fontSize: 21}}>无效</Chip>内容违法；股东董监高均可告</Enter>
          <Enter delay={94} style={{fontSize: 22, fontWeight: 750, color: C.ink, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="dai" style={{fontSize: 21}}>可撤销</Chip>违章程或程序违法；原告限股东</Enter>
        </div>
        <Enter delay={108} style={{marginTop: 12}}><Neg size={22}>C 项：管理人请求撤销——双重不适格</Neg></Enter>
      </div>
      <div data-final-knowledge="mis-acceleration" style={{position: 'absolute', left: 0, top: 312, width: 1064, height: 432, backgroundColor: C.ink, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={122} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Zap size={30} color={C.gold} style={{flexShrink: 0}} />
          <LabelBlock light color={C.gold} size={28}>2025年8月 · 破产受理</LabelBlock>
        </Enter>
        <Enter delay={140} style={{marginTop: 16, fontSize: 24, fontWeight: 950, color: C.paper, lineHeight: 1.7}}>期限利益以公司持续经营为前提——破产受理，出资义务<SoftHi dark style={{fontSize: 23}}>加速到期</SoftHi></Enter>
        <div style={{marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={158} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Chip tone="gold" style={{fontSize: 22, color: C.ink}}>艾某 300 万未缴足</Chip>
            <Dash delay={168} style={{flex: 1, borderTop: `4px solid ${C.gold}`}} />
            <Stamp delay={176} tone="jade">向管理人缴足 · D ✓</Stamp>
          </Enter>
          <Enter delay={190} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Neg size={22}>A 项：章程缴资日期未到——破产面前等不起</Neg>
          </Enter>
          <Enter delay={204} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Neg size={22}>B 项：公积金转出资决议——本就无效，免不了债</Neg>
          </Enter>
        </div>
      </div>
      <div data-final-knowledge="mis-recap" style={{position: 'absolute', left: 1096, top: 312, width: 680, height: 432, backgroundColor: C.paper, border: `3px solid ${C.ink}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 8px 20px ${C.shadow}`}}>
        <Enter delay={218} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Coins size={28} color={C.ink} style={{flexShrink: 0}} />
          <LabelBlock color={C.dai} size={26}>背下来 · 三条归纳</LabelBlock>
        </Enter>
        <div style={{marginTop: 14, display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={234} style={{fontSize: 21, fontWeight: 750, color: C.ink, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="dai" style={{fontSize: 20}}>转增</Chip>仅内部科目调整，债权不受影响</Enter>
          <Enter delay={248} style={{fontSize: 21, fontWeight: 750, color: C.ink, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="crimson" style={{fontSize: 20}}>填出资</Chip>＝豁免义务，不得以公积金代偿</Enter>
          <Enter delay={262} style={{fontSize: 21, fontWeight: 750, color: C.ink, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="jade" style={{fontSize: 20}}>加速到期</Chip>不能清偿到期债务 / 破产清算</Enter>
        </div>
        <Enter delay={278} style={{marginTop: 14, fontSize: 21, fontWeight: 750, color: C.ink, lineHeight: 1.6}}>补亏损的顺序：先用任意或法定公积金，仍不足才轮到资本公积金</Enter>
      </div>
    </div>
  </Shell>
);

export const CapitalRegimeVoteHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-class-share" {...SCENES.classShare}><ClassShareScene /></TimelineSequence>
    <TimelineSequence name="02-authorized-capital" {...SCENES.authorizedCapital}><AuthorizedCapitalScene /></TimelineSequence>
    <TimelineSequence name="03-reserve-misuse" {...SCENES.reserveMisuse}><ReserveMisuseScene /></TimelineSequence>
  </AbsoluteFill>
);
