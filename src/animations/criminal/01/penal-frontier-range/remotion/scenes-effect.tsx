import {Ban, FileText, Globe, Hourglass, MapPin, Plane, Scale, ScrollText, ShieldCheck, Ship, Users} from 'lucide-react';
import {Chip, C, Dash, Enter, LabelBlock, Neg, Seal, Shell, SoftHi, StoneTitle, ThinU} from './kit';

export const SpaceJurisdictionMapScene = () => (
  <Shell code="05" title="空间效力：四向关防">
    <div data-layout="frontier-map-quadrant" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="jurisdiction-routes,territory-core-anchor" data-focal-rule="jurisdiction-follows-territory-person-protection-universality" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="domain-core" style={{position: 'absolute', left: 0, top: 0, width: 620, height: 458, backgroundColor: C.paper, border: `3px solid ${C.ink}`, borderRadius: 12, padding: '16px 18px'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <MapPin size={30} color={C.vermilion} />
          <StoneTitle>我国领域</StoneTitle>
        </Enter>
        <Enter delay={18} style={{marginTop: 12, display: 'flex', gap: 10}}>
          <Chip tone="azure" style={{fontSize: 22}}>领土</Chip>
          <Chip tone="azure" style={{fontSize: 22}}>领水</Chip>
          <Chip tone="azure" style={{fontSize: 22}}>领空</Chip>
        </Enter>
        <div data-final-knowledge="domain-flag-state" style={{marginTop: 14, border: `3px solid ${C.azure}`, borderRadius: 8, padding: '10px 12px'}}>
          <Enter delay={30} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <Ship size={24} color={C.azure} />
            <Plane size={24} color={C.azure} />
            <LabelBlock size={24} color={C.azure}>旗国主义</LabelBlock>
          </Enter>
          <Enter delay={40} style={{marginTop: 8, fontSize: 21, fontWeight: 700}}>我国船舶·航空器——<ThinU>停放何处均属领域</ThinU></Enter>
        </div>
        <Enter delay={52} style={{marginTop: 12}}><Neg size={21}>例外：国际列车·国际长途汽车不属于</Neg></Enter>
        <div data-final-knowledge="domain-act-result" style={{marginTop: 12, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>
          <Enter delay={62}>「地」的认定：行为地或结果地——<ThinU>一项在内即可</ThinU></Enter>
        </div>
      </div>

      <Dash delay={80} style={{position: 'absolute', left: 620, top: 52, width: 80, borderTop: '4px dashed ' + C.azure}} />
      <Dash delay={96} style={{position: 'absolute', left: 620, top: 174, width: 80, borderTop: '4px dashed ' + C.azure}} />
      <Dash delay={112} style={{position: 'absolute', left: 620, top: 296, width: 80, borderTop: '4px dashed ' + C.azure}} />
      <Dash delay={128} style={{position: 'absolute', left: 620, top: 418, width: 80, borderTop: '4px dashed ' + C.azure}} />

      <div data-final-knowledge="route-territorial" style={{position: 'absolute', left: 700, top: 0, width: 1076, height: 104, backgroundColor: C.azureSoft, border: `3px solid ${C.azure}`, borderRadius: 10, padding: '12px 18px'}}>
        <Enter delay={84} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <MapPin size={26} color={C.azure} />
          <LabelBlock size={26} color={C.azure}>属地管辖（第6条）</LabelBlock>
          <span style={{fontSize: 22, fontWeight: 800}}>在中国境内犯罪——含船舶·航空器内犯罪</span>
        </Enter>
        <Enter delay={94} style={{marginTop: 8, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>行为或结果一项发生在领域内，即属境内犯罪</Enter>
      </div>

      <div data-final-knowledge="route-personal" style={{position: 'absolute', left: 700, top: 122, width: 1076, height: 104, backgroundColor: C.paper, border: `3px solid ${C.gold}`, borderRadius: 10, padding: '12px 18px'}}>
        <Enter delay={100} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Users size={26} color={C.gold} />
          <LabelBlock size={26} color={C.gold}>属人管辖（第7条）</LabelBlock>
          <span style={{fontSize: 22, fontWeight: 800}}>我国公民在境外犯我国刑法之罪</span>
        </Enter>
        <Enter delay={110} style={{marginTop: 8, display: 'flex', gap: 12}}>
          <Chip tone="gold" style={{fontSize: 20}}>最高刑3年以下 → 可以不予追究</Chip>
          <Chip tone="vermilion" style={{fontSize: 20}}>国家工作人员·军人 → 一律追究</Chip>
        </Enter>
      </div>

      <div data-final-knowledge="route-protective" style={{position: 'absolute', left: 700, top: 244, width: 1076, height: 104, backgroundColor: C.vermilionSoft, border: `3px solid ${C.vermilion}`, borderRadius: 10, padding: '12px 18px'}}>
        <Enter delay={116} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <ShieldCheck size={26} color={C.vermilion} />
          <LabelBlock size={26} color={C.vermilion}>保护管辖（第8条）</LabelBlock>
          <span style={{fontSize: 22, fontWeight: 800}}>外国人在境外对我国国家·公民犯罪</span>
        </Enter>
        <Enter delay={126} style={{marginTop: 8, display: 'flex', gap: 12, alignItems: 'center'}}>
          <Chip tone="vermilion" style={{fontSize: 20}}>最低刑3年以上有期徒刑</Chip>
          <Scale size={22} color={C.vermilion} />
          <Chip tone="vermilion" style={{fontSize: 20}}>双重犯罪——犯罪地也定罪</Chip>
        </Enter>
      </div>

      <div data-final-knowledge="route-universal" style={{position: 'absolute', left: 700, top: 366, width: 1076, height: 92, backgroundColor: C.paper, border: `3px solid ${C.ink}`, borderRadius: 10, padding: '12px 18px'}}>
        <Enter delay={132} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Globe size={26} color={C.ink} />
          <LabelBlock size={26}>普遍管辖（第9条）</LabelBlock>
          <span style={{fontSize: 22, fontWeight: 800}}>国际犯罪</span>
        </Enter>
        <Enter delay={142} style={{marginTop: 8, fontSize: 21, fontWeight: 700}}>满足条件时，定罪量刑适用<span style={{fontWeight: 950}}>我国刑法</span>——而非国际公约</Enter>
      </div>

      <div data-final-knowledge="map-summary" style={{position: 'absolute', left: 0, right: 0, top: 482, bottom: 0, backgroundColor: C.goldSoft, border: `3px solid ${C.gold}`, borderRadius: 12, display: 'flex', alignItems: 'center', gap: 24, padding: '0 24px'}}>
        <Enter delay={170}><LabelBlock ink size={27}>四向关防</LabelBlock></Enter>
        <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={180} style={{display: 'flex', gap: 12}}>
            <Chip tone="azure" style={{fontSize: 22}}>属地看地</Chip>
            <Chip tone="gold" style={{fontSize: 22}}>属人看人</Chip>
            <Chip tone="vermilion" style={{fontSize: 22}}>保护看被害</Chip>
            <Chip tone="ink" style={{fontSize: 22}}>普遍看罪型</Chip>
          </Enter>
          <Enter delay={192} style={{fontSize: 21, fontWeight: 700, color: C.inkSoft}}>按 <ThinU>案发地点 → 主体身份 → 被害对象 → 罪型来源</ThinU> 逐层排查</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const TimeEffectDialScene = () => (
  <Shell code="06" title="时间效力：从旧兼从轻">
    <div data-layout="old-new-currency-dial" data-visual-anchor="timeline-gate" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="old-new-currency-rule,pending-scope-gate" data-focal-rule="apply-old-law-unless-the-new-law-is-lighter" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="dial-main-rule" style={{position: 'absolute', left: 0, top: 0, width: 880, height: 296, backgroundColor: C.goldSoft, border: `4px solid ${C.gold}`, borderRadius: 12, padding: '18px 24px'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Hourglass size={32} color={C.gold} />
          <LabelBlock size={29}>从旧兼从轻</LabelBlock>
        </Enter>
        <Enter delay={18} style={{marginTop: 16, fontSize: 24, fontWeight: 900}}>原则：适用<span style={{fontWeight: 950, color: C.gold}}>行为时</span>的旧法</Enter>
        <div style={{marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={32}><Chip style={{fontSize: 22, whiteSpace: 'normal'}}>新法不更有利 → 仍适用旧法</Chip></Enter>
          <Enter delay={44} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <ShieldCheck size={24} color={C.gold} />
            <Chip tone="gold" style={{fontSize: 22, whiteSpace: 'normal'}}>新法更有利（对被告）→ 适用新法——不禁止有利溯及</Chip>
          </Enter>
        </div>
      </div>

      <div data-final-knowledge="dial-pending-scope" style={{position: 'absolute', left: 904, top: 0, width: 872, height: 296, backgroundColor: C.paper, border: `3px solid ${C.ink}`, borderRadius: 12, padding: '18px 22px'}}>
        <Enter delay={74} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <FileText size={28} color={C.ink} />
          <LabelBlock size={26} color={C.azure}>适用范围</LabelBlock>
        </Enter>
        <Enter delay={86} style={{marginTop: 16, fontSize: 24, fontWeight: 900}}>仅适用于<ThinU>未决犯</ThinU>——尚未判决的案件</Enter>
        <Enter delay={96} style={{marginTop: 12, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>新旧法之间择一条适用，不改变已生效的判决</Enter>
      </div>

      <div data-final-knowledge="dial-retrial-exception" style={{position: 'absolute', left: 0, top: 320, width: 1050, height: 180, backgroundColor: C.vermilionSoft, border: `3px solid ${C.vermilion}`, borderRadius: 12, padding: '16px 22px'}}>
        <Enter delay={112} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Ban size={28} color={C.vermilion} />
          <LabelBlock size={26} color={C.vermilion}>例外 · 再审案件</LabelBlock>
        </Enter>
        <Enter delay={124} style={{marginTop: 12, fontSize: 23, fontWeight: 900}}>按审判监督程序发回再审 → <Seal delay={132} tone="vermilion">一律适用行为时法</Seal></Enter>
        <Enter delay={144} style={{marginTop: 10, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>只有从旧 · 没有从轻——否则出一次新法，所有旧案都得重判一次</Enter>
      </div>

      <div data-final-knowledge="dial-judicial-table" style={{position: 'absolute', left: 1074, top: 320, width: 702, height: 180, backgroundColor: C.paper, border: `3px solid ${C.azure}`, borderRadius: 12, padding: '16px 20px'}}>
        <Enter delay={156} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <ScrollText size={26} color={C.azure} />
          <LabelBlock size={25} color={C.azure}>司法解释的时间效力</LabelBlock>
        </Enter>
        <Enter delay={166} style={{marginTop: 12, fontSize: 21, fontWeight: 800}}>行为时无·审判时有 → 按司法解释处理</Enter>
        <Enter delay={176} style={{marginTop: 8, display: 'flex', alignItems: 'center', gap: 8}}>
          <Scale size={22} color={C.azure} />
          <span style={{fontSize: 21, fontWeight: 800}}>行为时有·审判时新 → 按<SoftHi style={{fontSize: 20}}>从旧兼从轻</SoftHi>处理</span>
        </Enter>
      </div>

      <div data-final-knowledge="dial-floor" style={{position: 'absolute', left: 0, right: 0, top: 524, bottom: 0, backgroundColor: C.azureSoft, border: `3px solid ${C.azure}`, borderRadius: 12, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 16, padding: '0 24px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 18}}>
          <Enter delay={192}><LabelBlock size={27} color={C.azure}>新旧之间</LabelBlock></Enter>
          <Enter delay={200}><SoftHi style={{fontSize: 25}}>择轻而从</SoftHi></Enter>
          <Enter delay={208} style={{fontSize: 23, fontWeight: 800}}>以被告人利益为归宿——这就是不禁止有利溯及的本质</Enter>
        </div>
        <Enter delay={216} style={{display: 'flex', gap: 12}}>
          <Chip tone="azure" style={{fontSize: 21}}>未决犯 → 从旧兼从轻</Chip>
          <Chip tone="vermilion" style={{fontSize: 21}}>再审 → 只有从旧</Chip>
          <Chip style={{fontSize: 21}}>司法解释 → 按上表两行处理</Chip>
        </Enter>
      </div>
    </div>
  </Shell>
);
