import {AbsoluteFill} from 'remotion';
import {Building2, FileX, GraduationCap, Hammer, HandCoins, Link, Megaphone, Shuffle, Users} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, GhostNumeral, LabelBlock, Neg, Shell, SoftHi, Stamp, ThinU} from './theme';

export const PiercingGroundsScene = () => (
  <Shell code="01" title="锤穿面纱：滥用行为换来连带责任">
    <div data-layout="forge-strike-sequence" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="causal-strike-chain,liability-linkage" data-focal-rule="abusing-shareholder-rights-that-drain-the-company-forges-joint-liability-with-the-company-for-its-debts" data-focal-channels="icon,connector,motion,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="pierce-abuse-act" style={{position: 'absolute', left: 0, top: 0, width: 1064, height: 224, backgroundColor: C.panel, border: `3px solid ${C.ironLine}`, borderRadius: 14, padding: '14px 22px'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Users size={30} color={C.ember} style={{flexShrink: 0}} />
          <LabelBlock size={29}>李某 · 独资设立甲公司</LabelBlock>
          <Chip tone="panel" style={{fontSize: 22}}><Building2 size={22} color={C.chalk} style={{flexShrink: 0}} />一股东 · 一公司</Chip>
        </Enter>
        <Enter delay={20} style={{marginTop: 14, fontSize: 24, fontWeight: 850, color: C.chalk, display: 'flex', alignItems: 'center', gap: 10}}>
          <Hammer size={26} color={C.ember} style={{flexShrink: 0}} />
          滥用行为：把甲公司<SoftHi style={{fontSize: 23}}>全部资产</SoftHi>投入李某夫人项目
        </Enter>
      </div>
      <div data-final-knowledge="pierce-company-insolvent" style={{position: 'absolute', left: 1104, top: 0, width: 672, height: 224, backgroundColor: C.paper, borderRadius: 14, padding: '14px 22px', boxShadow: `0 8px 20px ${C.shadow}`}}>
        <Enter delay={34} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Building2 size={30} color={C.ink} style={{flexShrink: 0}} />
          <LabelBlock color={C.seal} size={29}>甲公司</LabelBlock>
          <span style={{fontSize: 22, fontWeight: 800, color: C.ink}}>面纱之内已经掏空</span>
        </Enter>
        <Enter delay={48} style={{marginTop: 14, fontSize: 24, fontWeight: 850, color: C.ink}}>
          <Neg dark size={24}>无力清偿</Neg> —— 乙公司 200 万货款到期
        </Enter>
        <Enter delay={60} style={{marginTop: 10, fontSize: 22, fontWeight: 750, color: C.ink}}>乙公司顺藤摸瓜，直接把股东李某告上法庭</Enter>
      </div>
      <div data-final-knowledge="pierce-hammer-strike" style={{position: 'absolute', left: 0, top: 250, width: 880, height: 226, backgroundColor: C.iron, borderRadius: 14, padding: '14px 22px'}}>
        <Enter delay={76} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Hammer size={30} color={C.ember} style={{flexShrink: 0}} />
          <LabelBlock size={28}>法人人格否认 · 三步落锤</LabelBlock>
        </Enter>
        <div style={{marginTop: 14, display: 'flex', alignItems: 'center', gap: 10}}>
          <Enter delay={90}><Chip tone="ember" style={{fontSize: 23}}>滥用股东权利</Chip></Enter>
          <Dash delay={100} style={{flex: 1, borderTop: `4px solid ${C.ember}`}} />
          <Enter delay={110}><Chip tone="ember" style={{fontSize: 23}}>公司无力清偿</Chip></Enter>
          <Dash delay={120} style={{flex: 1, borderTop: `4px solid ${C.ember}`}} />
          <Enter delay={130}><Chip tone="ember" style={{fontSize: 23}}>股东连带责任</Chip></Enter>
        </div>
        <Enter delay={142} style={{marginTop: 14, fontSize: 22, color: C.chalkDim, fontWeight: 750}}>面纱只在<ThinU color={C.ember}>本案个案</ThinU>中被刺破——不是摘掉公司的法人资格</Enter>
      </div>
      <div data-final-knowledge="pierce-joint-liability" style={{position: 'absolute', left: 912, top: 250, width: 864, height: 226, backgroundColor: C.panel, border: `3px solid ${C.ember}`, borderRadius: 14, padding: '14px 22px'}}>
        <Enter delay={156} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Link size={28} color={C.ember} style={{flexShrink: 0}} />
          <span style={{fontSize: 26, fontWeight: 950, color: C.chalk}}>一根铁链，锁住两个人</span>
        </Enter>
        <div style={{marginTop: 16, display: 'flex', alignItems: 'center', gap: 12}}>
          <Enter delay={170}><Chip tone="panel" style={{fontSize: 24, border: `2px solid ${C.ember}`}}><Users size={24} color={C.chalk} style={{flexShrink: 0}} />股东 李某</Chip></Enter>
          <Dash delay={178} style={{width: 56, borderTop: `5px solid ${C.ember}`}} />
          <Enter delay={186}><Chip tone="panel" style={{fontSize: 24, border: `2px solid ${C.ember}`}}><Building2 size={24} color={C.chalk} style={{flexShrink: 0}} />甲公司</Chip></Enter>
          <Dash delay={194} style={{flex: 1, borderTop: `4px dashed ${C.panelLine}`}} />
          <Enter delay={202} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <HandCoins size={26} color={C.brass} style={{flexShrink: 0}} />
            <span style={{fontSize: 23, fontWeight: 850, color: C.chalk, whiteSpace: 'nowrap'}}>乙公司 200 万</span>
          </Enter>
        </div>
        <Enter delay={212} style={{marginTop: 16, display: 'flex', justifyContent: 'flex-end'}}>
          <Stamp delay={218} tone="ember">连带责任</Stamp>
        </Enter>
      </div>
      <div data-final-knowledge="pierce-exam-verdict" style={{position: 'absolute', left: 0, right: 0, top: 502, height: 242, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={228} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.ember} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.chalk}}>2020金题 · 李某的坐席怎么摆？</span>
          </Enter>
          <Enter delay={242} style={{marginTop: 18, fontSize: 23, fontWeight: 800, color: C.chalk, lineHeight: 1.6}}>
            乙公司只告了股东李某——<SoftHi style={{fontSize: 23}}>被告没有摆错</SoftHi>，法院该怎么追加甲公司？
          </Enter>
          <Enter delay={256} style={{marginTop: 16, fontSize: 22, color: C.chalkDim, fontWeight: 750}}>答案在 02 场景：释明追加的门道</Enter>
        </div>
        <div style={{width: 430, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12}}>
          <Enter delay={266}><Chip tone="panel" style={{fontSize: 22}}>实体落点：滥用 → 无力清偿 → 连带</Chip></Enter>
          <Enter delay={276}><Chip tone="panel" style={{fontSize: 22}}>程序落点：谁当被告、法院怎么追加</Chip></Enter>
          <Enter delay={286} style={{fontSize: 22, color: C.ember, fontWeight: 850}}>一题两考，双线都要会</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const SuitStructureScene = () => (
  <Shell code="02" title="被告名单怎么摆：释明，而不代劳">
    <div data-layout="three-roster-comparison" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="roster-variant-comparison,clarification-gate" data-focal-rule="the-court-only-clarifies-and-lets-the-creditor-add-the-company-as-co-defendant-never-acting-on-its-own-motion" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="suit-clarify-rule" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 108, backgroundColor: C.paper, borderRadius: 14, padding: '14px 24px', boxShadow: `0 8px 20px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 16}}>
          <LabelBlock color={C.seal} size={29}>释明规则</LabelBlock>
          <Megaphone size={30} color={C.seal} style={{flexShrink: 0}} />
          <span style={{fontSize: 27, fontWeight: 950, color: C.ink}}>只告股东的 → 法院应<ThinU color={C.seal}>释明</ThinU>：追加公司为共同被告</span>
          <span style={{flex: 1}} />
          <Stamp delay={20} tone="seal">不依职权代劳</Stamp>
        </Enter>
      </div>
      <div data-final-knowledge="suit-refuse-dismiss" style={{position: 'absolute', left: 0, top: 132, width: 576, height: 612, backgroundColor: C.panel, border: `3px solid ${C.ember}`, borderRadius: 16, padding: '16px 20px'}}>
        <Enter delay={30} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GhostNumeral n="壹" />
          <LabelBlock size={27}>只告股东 李某</LabelBlock>
        </Enter>
        <div style={{marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={44} style={{display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}>
            <Chip tone="panel" style={{fontSize: 22}}><HandCoins size={22} color={C.chalk} style={{flexShrink: 0}} />原告 乙公司</Chip>
            <Chip tone="panel" style={{fontSize: 22}}><Users size={22} color={C.chalk} style={{flexShrink: 0}} />被告 李某</Chip>
          </Enter>
          <Enter delay={58} style={{marginTop: 4, display: 'flex', alignItems: 'center', gap: 10, backgroundColor: C.iron, borderRadius: 10, padding: '10px 14px'}}>
            <Megaphone size={24} color={C.ember} style={{flexShrink: 0}} />
            <span style={{fontSize: 23, fontWeight: 900, color: C.chalk}}>法院释明 → 请追加甲公司</span>
          </Enter>
          <Enter delay={74} style={{marginTop: 4, display: 'flex', alignItems: 'center', gap: 10}}>
            <Chip tone="panel" style={{fontSize: 22}}>原告拒绝追加</Chip>
            <Dash delay={82} style={{flex: 1, borderTop: `3px dashed ${C.panelLine}`}} />
            <FileX size={26} color={C.seal} style={{flexShrink: 0}} />
          </Enter>
          <Enter delay={92} style={{display: 'flex', justifyContent: 'center'}}>
            <Stamp delay={98} tone="seal">裁定驳回起诉</Stamp>
          </Enter>
        </div>
        <div style={{marginTop: 18, borderTop: `3px dashed ${C.panelLine}`, paddingTop: 14, display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={110} style={{fontSize: 22, fontWeight: 800, color: C.chalkDim}}>2020 题支排除区</Enter>
          <Enter delay={120}><Neg size={23}>A 依职权变更甲为被告——李某没错，无需换</Neg></Enter>
          <Enter delay={132}><Neg size={23}>B 依职权列甲为第三人——甲是直接债务人</Neg></Enter>
          <Enter delay={144}><Neg size={23}>C 依职权追加共同被告——法院只释明</Neg></Enter>
          <Enter delay={156} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <Chip tone="jade" style={{fontSize: 22}}>D 释明告知追加 ✓</Chip>
            <Stamp delay={164} tone="jade">当选</Stamp>
          </Enter>
        </div>
      </div>
      <div data-final-knowledge="suit-company-third" style={{position: 'absolute', left: 600, top: 132, width: 576, height: 612, backgroundColor: C.panel, border: `3px solid ${C.ironLine}`, borderRadius: 16, padding: '16px 20px'}}>
        <Enter delay={176} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GhostNumeral n="贰" />
          <LabelBlock size={27}>先告公司 · 后告股东</LabelBlock>
        </Enter>
        <div style={{marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={190} style={{display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}>
            <Chip tone="panel" style={{fontSize: 22}}><HandCoins size={22} color={C.chalk} style={{flexShrink: 0}} />原告 债权人</Chip>
            <Chip tone="panel" style={{fontSize: 22}}><Users size={22} color={C.chalk} style={{flexShrink: 0}} />被告 股东</Chip>
          </Enter>
          <Enter delay={204} style={{marginTop: 4, backgroundColor: C.iron, borderRadius: 10, padding: '12px 16px'}}>
            <div style={{fontSize: 24, fontWeight: 900, color: C.chalk}}>公司坐席：<SoftHi style={{fontSize: 23}}>无独立请求权第三人</SoftHi></div>
            <div style={{marginTop: 8, fontSize: 22, color: C.chalkDim, fontWeight: 750}}>案件结果与他有法律上的利害关系</div>
          </Enter>
          <Enter delay={220} style={{fontSize: 22, fontWeight: 750, color: C.chalk, lineHeight: 1.6}}>公司已在前案坐上被告席，追股东时退居<ThinU color={C.ember}>无独三</ThinU></Enter>
        </div>
        <div style={{marginTop: 20, borderTop: `3px dashed ${C.panelLine}`, paddingTop: 14}}>
          <Enter delay={234} style={{fontSize: 22, color: C.chalkDim, fontWeight: 750, lineHeight: 1.7}}>记忆锚：<ThinU color={C.brass}>先公司 → 公司是无独三</ThinU><br />被告席上只有股东一人</Enter>
        </div>
      </div>
      <div data-final-knowledge="suit-joint-defendants" style={{position: 'absolute', left: 1200, top: 132, width: 576, height: 612, backgroundColor: C.panel, border: `3px solid ${C.jade}`, borderRadius: 16, padding: '16px 20px'}}>
        <Enter delay={248} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GhostNumeral n="叁" />
          <LabelBlock size={27}>同时告公司 + 股东</LabelBlock>
        </Enter>
        <div style={{marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={262} style={{display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}>
            <Chip tone="panel" style={{fontSize: 22}}><HandCoins size={22} color={C.chalk} style={{flexShrink: 0}} />原告 债权人</Chip>
          </Enter>
          <Enter delay={276} style={{marginTop: 4, backgroundColor: C.iron, borderRadius: 10, padding: '12px 16px'}}>
            <div style={{fontSize: 24, fontWeight: 900, color: C.chalk, display: 'flex', alignItems: 'center', gap: 8}}>
              <Building2 size={26} color={C.chalk} style={{flexShrink: 0}} />
              公司 + <Users size={26} color={C.chalk} style={{flexShrink: 0}} /> 股东
            </div>
            <div style={{marginTop: 8, fontSize: 23, fontWeight: 900, color: C.chalk}}>同坐<SoftHi style={{fontSize: 23}}>共同被告</SoftHi>席</div>
          </Enter>
          <Enter delay={292} style={{fontSize: 22, fontWeight: 750, color: C.chalk, lineHeight: 1.6}}>连带责任一把查清——最省诉讼资源的坐法</Enter>
        </div>
        <div style={{marginTop: 20, borderTop: `3px dashed ${C.panelLine}`, paddingTop: 14}}>
          <Enter delay={306} style={{fontSize: 22, color: C.chalkDim, fontWeight: 750, lineHeight: 1.7}}>记忆锚：<ThinU color={C.jade}>一起告 → 共同被告</ThinU><br />法院不主动变更、不主动追加、不主动列第三人</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const TrianglePierceScene = () => (
  <Shell code="03" title="三角刺破：一条链锁三扇门">
    <div data-layout="hub-two-vaults-triangle" data-visual-anchor="concept-icon" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="hub-spoke-pierce,exception-exclusion" data-focal-rule="overreaching-shareholder-who-blurs-finances-across-two-controlled-companies-pierces-all-three-into-one-liability-whole" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="triangle-overreach-hub" style={{position: 'absolute', left: 588, top: 0, width: 600, height: 216, backgroundColor: C.iron, border: `3px solid ${C.ember}`, borderRadius: 16, padding: '14px 22px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Users size={30} color={C.ember} style={{flexShrink: 0}} />
          <LabelBlock size={28}>甲公司 · 控股 70%</LabelBlock>
          <Chip tone="ember" style={{fontSize: 22}}>始作俑者</Chip>
        </Enter>
        <Enter delay={22} style={{marginTop: 12, fontSize: 23, fontWeight: 850, color: C.chalk, display: 'flex', alignItems: 'center', gap: 10}}>
          <Hammer size={26} color={C.ember} style={{flexShrink: 0}} />
          过度支配：授意张某把乙公司资产分批搬进丙公司
        </Enter>
      </div>
      <div data-final-knowledge="triangle-fund-mixing" style={{position: 'absolute', left: 0, top: 244, width: 888, height: 264, backgroundColor: C.panel, border: `3px solid ${C.ironLine}`, borderRadius: 14, padding: '14px 22px'}}>
        <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Shuffle size={28} color={C.brass} style={{flexShrink: 0}} />
          <LabelBlock color={C.brass} size={27}>财务混同 · 两个方向</LabelBlock>
        </Enter>
        <div style={{marginTop: 14, display: 'flex', gap: 16}}>
          <div style={{flex: 1, backgroundColor: C.iron, borderRadius: 10, padding: '10px 16px'}}>
            <Enter delay={56} style={{fontSize: 23, fontWeight: 900, color: C.chalk, display: 'flex', alignItems: 'center', gap: 8}}><Building2 size={24} color={C.brass} style={{flexShrink: 0}} />纵向混同 —— 甲 ↔ 乙</Enter>
            <Enter delay={66} style={{marginTop: 8, fontSize: 22, fontWeight: 750, color: C.chalkDim}}><ThinU color={C.brass}>基础前提</ThinU>：一人公司般的支配与资产挪移</Enter>
          </div>
          <div style={{flex: 1, backgroundColor: C.iron, borderRadius: 10, padding: '10px 16px'}}>
            <Enter delay={78} style={{fontSize: 23, fontWeight: 900, color: C.chalk, display: 'flex', alignItems: 'center', gap: 8}}><Building2 size={24} color={C.brass} style={{flexShrink: 0}} />横向混同 —— 乙 ↔ 丙</Enter>
            <Enter delay={88} style={{marginTop: 8, fontSize: 22, fontWeight: 750, color: C.chalkDim}}>同一批资产两块牌子，账目难分彼此</Enter>
          </div>
        </div>
        <Enter delay={100} style={{marginTop: 14, fontSize: 22, fontWeight: 800, color: C.chalkDim}}><Neg size={22}>无纵向混同，何来横向混同</Neg>——顺序不能倒</Enter>
      </div>
      <div data-final-knowledge="triangle-innocent-shareholder" style={{position: 'absolute', left: 920, top: 244, width: 424, height: 264, backgroundColor: C.paper, borderRadius: 14, padding: '14px 20px', boxShadow: `0 8px 20px ${C.shadow}`}}>
        <Enter delay={114} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Users size={26} color={C.ink} style={{flexShrink: 0}} />
          <LabelBlock color={C.jade} size={27}>丁公司 · 30%</LabelBlock>
        </Enter>
        <Enter delay={128} style={{marginTop: 14, fontSize: 23, fontWeight: 850, color: C.ink}}><SoftHi dark style={{fontSize: 22}}>一直未发现</SoftHi>，未牵涉滥用</Enter>
        <Enter delay={140} style={{marginTop: 12, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
          <Stamp delay={146} tone="jade">仅有限责任</Stamp>
          <span style={{fontSize: 22, fontWeight: 800, color: C.ink}}>足额出资即安全</span>
        </Enter>
        <Enter delay={158} style={{marginTop: 12, fontSize: 22, fontWeight: 750, color: C.ink, lineHeight: 1.5}}>个案适用：<ThinU color={C.seal}>只抓坏人</ThinU>——善意股东、相对人不担责</Enter>
      </div>
      <div data-final-knowledge="triangle-joint-result" style={{position: 'absolute', left: 1376, top: 244, width: 400, height: 264, backgroundColor: C.ink, borderRadius: 14, padding: '14px 20px'}}>
        <Enter delay={170} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Link size={28} color={C.ember} style={{flexShrink: 0}} />
          <span style={{fontSize: 25, fontWeight: 950, color: C.chalk}}>三角刺破</span>
        </Enter>
        <Enter delay={184} style={{marginTop: 14, fontSize: 23, fontWeight: 850, color: C.chalk, lineHeight: 1.7}}>
          甲 · 乙 · 丙<ThinU color={C.ember}>一个责任整体</ThinU>
        </Enter>
        <Enter delay={198} style={{marginTop: 12, fontSize: 22, color: C.chalkDim, fontWeight: 750}}>对任一公司债务，滥用股东与各公司一律<SoftHi style={{fontSize: 21}}>连带</SoftHi></Enter>
        <Enter delay={210} style={{marginTop: 12, display: 'flex', justifyContent: 'center'}}>
          <Stamp delay={216} tone="ember">甲乙丙连带</Stamp>
        </Enter>
      </div>
      <div data-final-knowledge="triangle-recap-reverse" style={{position: 'absolute', left: 0, right: 0, top: 534, height: 210, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={226} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.ember} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.chalk}}>2025金题 · 正确答案 C：甲、乙、丙对戊连带</span>
          </Enter>
          <Enter delay={240} style={{marginTop: 14, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <Neg size={22}>A 「只能」破产受偿——死亡字眼，另有刺破救济</Neg>
          </Enter>
          <Enter delay={252} style={{marginTop: 8, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <Neg size={22}>B 拉上无辜的丁——未滥用不连带</Neg>
          </Enter>
          <Enter delay={264} style={{marginTop: 8, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <Neg size={22}>D 漏掉始作俑者甲——无纵向何来横向</Neg>
          </Enter>
        </div>
        <div style={{width: 500, borderLeft: `3px dashed ${C.panelLine}`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={278} style={{fontSize: 23, fontWeight: 900, color: C.brass}}>角度拓展 · 反向法人人格否认</Enter>
          <Enter delay={290} style={{fontSize: 22, fontWeight: 750, color: C.chalk, lineHeight: 1.6}}>甲为逃<ThinU color={C.ember}>自身</ThinU>债务把财产转进乙、丙 → 甲的债权人可请求甲乙丙连带</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const VeilPiercingForge = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-piercing-grounds-chain" {...SCENES.piercingGrounds}><PiercingGroundsScene /></TimelineSequence>
    <TimelineSequence name="02-suit-structure-roster" {...SCENES.suitStructure}><SuitStructureScene /></TimelineSequence>
    <TimelineSequence name="03-triangle-pierce-map" {...SCENES.trianglePierce}><TrianglePierceScene /></TimelineSequence>
  </AbsoluteFill>
);
