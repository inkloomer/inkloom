import {AbsoluteFill} from 'remotion';
import {Coins, FileText, GraduationCap, HandCoins, Scale, Stamp, TrendingDown, UserX, Users} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp as PassStamp, ThinU} from './theme';

export const AuthorityLaneScene = () => (
  <Shell code="01" title="掌勺越权：对外的账，照算">
    <div data-layout="authority-pass-lane" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="unauthorized-execution-validity,objection-scope-rule" data-focal-rule="unauthorized-execution-still-binds-the-firm-against-bona-fide-parties-while-only-fellow-executors-may-object" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="auth-unauthorized-desk" style={{position: 'absolute', left: 0, top: 0, width: 864, height: 500, backgroundColor: C.panel, border: `3px solid ${C.chef}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Stamp size={30} color={C.chef} style={{flexShrink: 0}} />
          <LabelBlock color={C.chef} size={26}>越权出单 · 对外效力不变</LabelBlock>
        </Enter>
        <div style={{marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={24} style={{fontSize: 21, fontWeight: 750, color: C.ticket, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="chef" style={{fontSize: 20}}>黄某单独签约</Chip>思如公司不知情 → 合同<SoftHi style={{fontSize: 20}}>对安馨企业有效</SoftHi>（49C ✓ / 50A ✓）</Enter>
          <Enter delay={44} style={{fontSize: 21, fontWeight: 750, color: C.ticket, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="herb" style={{fontSize: 20}}>甲乙共同决议</Chip>与 B 签协议 → 有效，企业担责（50B ✓）</Enter>
          <Enter delay={64} style={{fontSize: 21, fontWeight: 750, color: C.ticket, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="steel" style={{fontSize: 20, color: C.ink}}>非执行人丙签约</Chip>善意丁 → 仍有效（51D ✓），无需追认（51C ✗）</Enter>
        </div>
        <Enter delay={84} style={{marginTop: 10}}><Neg size={21}>内部协议不能对抗善意相对人——越权致损找签单人追偿</Neg></Enter>
      </div>
      <div data-final-knowledge="auth-objection-desk" style={{position: 'absolute', left: 896, top: 0, width: 880, height: 500, backgroundColor: C.chart, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={20} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Users size={28} color={C.ink} style={{flexShrink: 0}} />
          <LabelBlock color={C.chef} size={26}>叫单权 · 只在执行人之间</LabelBlock>
        </Enter>
        <div style={{marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={38} style={{fontSize: 21, fontWeight: 750, color: C.ink, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="chef" style={{fontSize: 20}}>执行人 ↔ 执行人</Chip>有异议权：分管采购的赵某可对钱某叫停（52A ✓）；洪某异议黄某；对甲的单只有乙能叫（50C ✓）</Enter>
          <Enter delay={58} style={{fontSize: 21, fontWeight: 750, color: C.ink, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="steel" style={{fontSize: 20, color: C.ink}}>非执行人</Chip>只有 监督 · 知情 · 撤销委托 三件套（49B ✗）</Enter>
        </div>
        <div style={{marginTop: 14, border: `3px dashed ${C.chef}`, borderRadius: 10, padding: '12px 16px'}}>
          <Enter delay={78} style={{fontSize: 21, fontWeight: 800, color: C.ink, lineHeight: 1.7}}>异议时点分岔：<ThinU color={C.chef}>尚未执行完</ThinU> → 暂停该项事务；<ThinU color={C.danger}>已执行完毕</ThinU> → 不影响合同效力，不得解除（49D ✗），致损向执行人追偿</Enter>
        </div>
        <Enter delay={94} style={{marginTop: 10, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}><Stamp delay={100} tone="chef">撤销委托 · 人人有份</Stamp><span style={{fontSize: 20, fontWeight: 750, color: C.ink}}>不按约定执行 → 其他合伙人可撤销其执行权（49A ✓ / 51A ✓）</span></Enter>
      </div>
      <div data-final-knowledge="auth-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 526, height: 218, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={110} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.brass} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.ticket}}>背诵卡 · 一条对外线＋一条对内线</span>
          </Enter>
          <Enter delay={128} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: 'rgba(247,242,228,0.8)', lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 8}}>
            <span>· 对外：谁签都算数（善意保护），账回头算</span>
            <span>· 对内：叫单只许掌勺之间，旁人只能换掌勺</span>
          </Enter>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed rgba(247,242,228,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={148}><PassStamp delay={154} tone="herb">2021 AC · 2023 ABC / AD</PassStamp></Enter>
          <Enter delay={172} style={{fontSize: 21, fontWeight: 750, color: 'rgba(247,242,228,0.66)', lineHeight: 1.7}}>2024金题 52A 也是这条线：越权意向，分管者可异议</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const SevenMattersScene = () => (
  <Shell code="02" title="全票菜单：七件大事与家常菜">
    <div data-layout="seven-matters-menu-board" data-visual-anchor="concept-icon" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="unanimous-matters-menu,ordinary-vote-majority" data-focal-rule="only-the-seven-listed-matters-demand-unanimous-consent-while-ordinary-business-passes-by-majority-of-one-person-one-vote" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="seven-menu-board" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 470, backgroundColor: C.chart, border: `3px solid ${C.chef}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <FileText size={30} color={C.chef} style={{flexShrink: 0}} />
          <LabelBlock color={C.chef} size={27}>全票菜单 · 七件大事（一致同意）</LabelBlock>
        </Enter>
        <div style={{marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={26} style={{fontSize: 21, fontWeight: 750, color: C.ink, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="chef" style={{fontSize: 20}}>三属性</Chip>改变名称 · 改变地点 · 改变经营范围</Enter>
          <Enter delay={44} style={{fontSize: 21, fontWeight: 750, color: C.ink, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="chef" style={{fontSize: 20}}>三资产</Chip>处分不动产 · 转让知识产权和财产权 · 以企业名义为他人担保</Enter>
          <Enter delay={62} style={{fontSize: 21, fontWeight: 750, color: C.ink, lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="chef" style={{fontSize: 20}}>一人事</Chip>聘外人任经营管理人员</Enter>
        </div>
        <Enter delay={82} style={{marginTop: 14, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}><Stamp delay={88} tone="chef">一致同意才上桌</Stamp><span style={{fontSize: 20, fontWeight: 750, color: C.ink}}>普通合伙人份额出质也在此列：须其他合伙人一致同意（50D ✗ 仅甲乙同意无效）</span></Enter>
      </div>
      <div data-final-knowledge="seven-ordinary-board" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 470, backgroundColor: C.panel, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={100} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Coins size={28} color={C.brass} style={{flexShrink: 0}} />
          <LabelBlock size={25}>家常菜 · 一般经营事项</LabelBlock>
        </Enter>
        <div style={{marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={118} style={{fontSize: 21, fontWeight: 750, color: C.ticket, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="brass" style={{fontSize: 20, color: C.ink}}>购销 · 包装 · 选供应商</Chip>都不在全票菜单</Enter>
          <Enter delay={134} style={{fontSize: 21, fontWeight: 750, color: C.ticket, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Neg size={20}>51B / 54C「须一致同意才有效」——错</Neg></Enter>
          <Enter delay={150} style={{fontSize: 21, fontWeight: 750, color: C.ticket, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Neg size={20}>52D「全体共同表决确定」——错</Neg></Enter>
        </div>
        <div style={{marginTop: 14, backgroundColor: C.panel, borderRadius: 10, padding: '12px 16px', border: `2px solid ${C.panelLine}`}}>
          <Enter delay={168} style={{fontSize: 21, fontWeight: 800, color: C.ticket, lineHeight: 1.7}}>表决规则：<ThinU color={C.brass}>一人一票、过半数</ThinU>即可——办法由合伙协议约定，没约定就按此默认</Enter>
        </div>
      </div>
      <div data-final-knowledge="seven-exam-strip" style={{position: 'absolute', left: 0, right: 0, top: 496, height: 248, backgroundColor: C.ink, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1}}>
          <Enter delay={182} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <GraduationCap size={28} color={C.brass} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.ticket}}>快问快答 · 哪些要全票？</span>
          </Enter>
          <Enter delay={200} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: 'rgba(247,242,228,0.8)', lineHeight: 2, display: 'flex', flexDirection: 'column', gap: 8}}>
            <span>· 卖店铺房子 → 全票　· 给朋友担保 → 全票</span>
            <span>· 进一批包装纸 → 家常菜，过半数</span>
          </Enter>
        </div>
        <div style={{width: 470, borderLeft: `3px dashed rgba(247,242,228,0.3)`, paddingLeft: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10}}>
          <Enter delay={222}><PassStamp delay={228} tone="brass">全票菜 ≠ 家常菜</PassStamp></Enter>
          <Enter delay={250} style={{fontSize: 21, fontWeight: 750, color: 'rgba(247,242,228,0.66)', lineHeight: 1.7}}>51B/54C 的「未同意即无效」和 52D 的「全体表决」都是把家常菜错上了全票单</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const ExpulsionDeskScene = () => (
  <Shell code="03" title="摘帽台：除名事由与四共红线">
    <div data-layout="expulsion-four-commons-desk" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="expulsion-consensus-rule,four-common-principle" data-focal-rule="competing-ventures-gross-negligence-and-unauthorized-disposal-justify-unanimous-expulsion-while-dumping-all-losses-on-one-partner-is-void" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="exp-causes-desk" style={{position: 'absolute', left: 0, top: 0, width: 1032, height: 302, backgroundColor: C.chart, border: `3px solid ${C.chef}`, borderRadius: 16, padding: '16px 24px', boxShadow: `0 10px 26px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <UserX size={30} color={C.chef} style={{flexShrink: 0}} />
          <LabelBlock color={C.chef} size={26}>摘帽事由 · 其他合伙人一致同意</LabelBlock>
        </Enter>
        <div style={{marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={26} style={{fontSize: 21, fontWeight: 750, color: C.ink, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="chef" style={{fontSize: 20}}>52B</Chip>赵某旁边开共业汽修厂——<ThinU color={C.chef}>竞业</ThinU>致损风险 → 可除名</Enter>
          <Enter delay={44} style={{fontSize: 21, fontWeight: 750, color: C.ink, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="chef" style={{fontSize: 20}}>53B</Chip>甲擅自 6 万卖掉洗衣设备——<ThinU color={C.chef}>越权处分</ThinU>不当行为 → 可除名</Enter>
          <Enter delay={62} style={{fontSize: 21, fontWeight: 750, color: C.ink, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Chip tone="chef" style={{fontSize: 20}}>54D</Chip>乙高价签瑕疵包装合同巨额亏损——<ThinU color={C.chef}>重大过失</ThinU> → 可除名</Enter>
        </div>
        <Enter delay={82} style={{marginTop: 10}}><Neg size={21}>52C「视为自动退伙」——除名要走法定程序，不自动发生</Neg></Enter>
      </div>
      <div data-final-knowledge="exp-four-commons-board" style={{position: 'absolute', left: 1064, top: 0, width: 712, height: 302, backgroundColor: C.panel, border: `3px solid ${C.chef}`, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={100} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Scale size={28} color={C.chef} style={{flexShrink: 0}} />
          <LabelBlock color={C.chef} size={25}>四共红线 · 摘帽也救不了</LabelBlock>
        </Enter>
        <Enter delay={118} style={{marginTop: 12, fontSize: 21, fontWeight: 800, color: C.ticket, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>共同出资 · 共同经营</span>
          <span>共享利润 · 共担风险</span>
          <span>决议让乙一人担<ThinU color={C.danger}>全部亏损</ThinU> → <SoftHi style={{fontSize: 20}}>无效</SoftHi>（54A ✓）</span>
        </Enter>
        <Enter delay={140} style={{marginTop: 6, fontSize: 20, fontWeight: 750, color: C.ticketDim, lineHeight: 1.6}}>2/3 修改协议的程序合规，<Neg size={20}>救不了实体违法（54B ✗）</Neg></Enter>
      </div>
      <div data-final-knowledge="exp-valuation-desk" style={{position: 'absolute', left: 0, top: 328, width: 1032, height: 416, backgroundColor: C.panel, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={158} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Coins size={28} color={C.brass} style={{flexShrink: 0}} />
          <LabelBlock size={25}>顺手记 · 非货币出资作价</LabelBlock>
        </Enter>
        <Enter delay={176} style={{marginTop: 12, fontSize: 22, fontWeight: 800, color: C.ticket, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 8}}>
          <span>丙的洗衣设备三人协商作价 8 万——<SoftHi style={{fontSize: 21}}>合法</SoftHi>，非货币出资可协商也可评估，<Neg size={21}>不必评估</Neg></span>
          <span>甲辩称「实际价值低于 6 万所以没损害」——设备是经营重要物资，<ThinU color={C.chef}>价高也不能免责</ThinU>（53D ✗）</span>
          <span>甲的合同对善意丁有效（53C ✗），丁取得设备；甲的账，除名＋追偿慢慢算</span>
        </Enter>
      </div>
      <div data-final-knowledge="exp-profit-desk" style={{position: 'absolute', left: 1064, top: 328, width: 712, height: 416, backgroundColor: C.ink, borderRadius: 16, padding: '16px 24px'}}>
        <Enter delay={198} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <GraduationCap size={26} color={C.brass} style={{flexShrink: 0}} />
          <HandCoins size={26} color={C.brass} style={{flexShrink: 0}} />
          <LabelBlock color={C.brass} light size={25}>附赠 · 利润分配四级阶梯</LabelBlock>
        </Enter>
        <Enter delay={216} style={{marginTop: 12, fontSize: 21, fontWeight: 800, color: C.ticket, lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 6}}>
          <span>① 合伙协议约定 → ② 协商</span>
          <span>③ 按<SoftHi style={{fontSize: 20}}>实缴比例</SoftHi> → ④ 平均</span>
          <span style={{fontSize: 20, fontWeight: 750, color: 'rgba(247,242,228,0.66)'}}>2025金题：认缴 400:600、实缴 300:300 → <ThinU color={C.brass}>按 300:300 分（B ✓）</ThinU>，认缴与份额都不是依据</span>
        </Enter>
        <Enter delay={240} style={{marginTop: 8}}><Neg size={20}>也不得约定部分合伙人独享利润——四共的另一面</Neg></Enter>
      </div>
    </div>
  </Shell>
);

export const KitchenPassAuthorityWall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-authority-lane" {...SCENES.authorityLane}><AuthorityLaneScene /></TimelineSequence>
    <TimelineSequence name="02-seven-matters" {...SCENES.sevenMatters}><SevenMattersScene /></TimelineSequence>
    <TimelineSequence name="03-expulsion-desk" {...SCENES.expulsionDesk}><ExpulsionDeskScene /></TimelineSequence>
  </AbsoluteFill>
);
