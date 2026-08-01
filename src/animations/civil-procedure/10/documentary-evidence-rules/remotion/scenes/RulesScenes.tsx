import {BadgeCheck, Copy, FileMinus, FileText, FileX, Files, FolderLock, Gavel, Landmark, Scissors, ShieldCheck, Signature, UserRound} from 'lucide-react';
import {ArrowHead, Highlight, REGISTRY, RegistryCanvas, RegistryLabel, Reveal, RuleLine, Seal, Underline} from '../visual-system';

export const AuthenticityRuleScene = () => {
  return (
    <RegistryCanvas code="01" title="文书真实性：公文推定，私文证明" folio="A-10">
      <div data-layout="registry-two-channel-assay" data-visual-anchor="role-pair" data-text-treatments="label-block,soft-highlight,stamp" data-visual-grammar="comparison,authorization,presumption" data-focal-rule="public-documents-are-presumed-private-documents-require-proof" data-focal-channels="icon,contrast,enclosure,annotation" style={{position: 'absolute', left: 94, right: 80, top: 198, bottom: 72}}>
        <Reveal delay={4} style={{position: 'absolute', left: 0, top: 0, width: 792, height: 650, backgroundColor: REGISTRY.forest, color: REGISTRY.white, padding: '34px 40px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 18}}><Landmark size={54} color={REGISTRY.brass} strokeWidth={2.2} /><RegistryLabel tone="brass">公文书证</RegistryLabel></div>
          <div style={{marginTop: 30, fontSize: 36, lineHeight: 1.35, fontWeight: 800}}>国家机关或社会管理组织</div>
          <div style={{marginTop: 14, fontSize: 28, fontWeight: 700, color: '#d6e4de'}}>必须在<Highlight delay={26}>职权范围内</Highlight>制作</div>
          <div style={{position: 'absolute', left: 40, right: 40, top: 300, height: 3, backgroundColor: REGISTRY.sage}} />
          <div style={{position: 'absolute', left: 40, right: 40, top: 348, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <FileText size={90} color={REGISTRY.white} strokeWidth={1.8} />
            <div style={{fontSize: 28, color: '#d6e4de'}}>记载事项</div>
            <Seal color={REGISTRY.brass} delay={48}>推定为真实</Seal>
          </div>
          <div style={{position: 'absolute', left: 40, right: 40, bottom: 42, fontSize: 23, color: '#d6e4de'}}>有相反证据足以推翻的除外</div>
        </Reveal>

        <Reveal delay={16} from="right" style={{position: 'absolute', right: 0, top: 0, width: 792, height: 650, backgroundColor: REGISTRY.paper, border: `3px solid ${REGISTRY.navy}`, padding: '34px 40px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 18}}><Signature size={54} color={REGISTRY.navy} strokeWidth={2.2} /><RegistryLabel tone="navy">私文书证</RegistryLabel></div>
          <div style={{marginTop: 30, fontSize: 36, lineHeight: 1.35, fontWeight: 800}}>公文书证以外的文书</div>
          <div style={{marginTop: 14, fontSize: 28, fontWeight: 700, color: REGISTRY.sage}}>由<Underline color={REGISTRY.navy} delay={36}>主张方承担证明责任</Underline></div>
          <div style={{position: 'absolute', left: 40, right: 40, top: 300, height: 3, backgroundColor: '#ccd8d1'}} />
          <div style={{position: 'absolute', left: 40, right: 40, top: 338, display: 'flex', alignItems: 'center', gap: 28}}>
            <BadgeCheck size={72} color={REGISTRY.seal} strokeWidth={2.1} />
            <div><div style={{fontSize: 27, fontWeight: 780}}>签名 / 盖章 / 捺印</div><div style={{marginTop: 10, fontSize: 22, color: REGISTRY.sage}}>形式真实 → 内容真实的推定入口</div></div>
          </div>
          <div style={{position: 'absolute', left: 40, right: 40, bottom: 42, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <span style={{fontSize: 24, fontWeight: 750}}>具备形式真实性</span><Seal delay={72}>推定为真实</Seal>
          </div>
        </Reveal>
        <Reveal delay={92} from="none" style={{position: 'absolute', left: 422, top: 674, width: 900, minHeight: 94, backgroundColor: REGISTRY.white, border: `3px solid ${REGISTRY.seal}`, display: 'grid', placeItems: 'center', textAlign: 'center', padding: '14px 26px', zIndex: 4, fontFamily: '"Segoe UI", "Microsoft YaHei", sans-serif', fontSize: 25, fontWeight: 800}}>
          形式真实性争议用“证明”<br />内容真实性争议用“推定”
        </Reveal>
      </div>
    </RegistryCanvas>
  );
};

export const DocumentOrderScene = () => {
  return (
    <RegistryCanvas code="02" title="文书提出命令：控制者不交，后果分级" folio="B-10">
      <div data-layout="court-order-consequence-rail" data-visual-anchor="timeline-gate" data-text-treatments="label-block,thin-underline,stamp" data-visual-grammar="sequence,control,consequence,branch" data-focal-rule="refusal-presumes-document-content-destruction-presumes-fact-and-liability" data-focal-channels="icon,connector,spatial,contrast" style={{position: 'absolute', left: 94, right: 80, top: 198, bottom: 72}}>
        <Reveal delay={4} style={{position: 'absolute', left: 0, top: 8, width: 410, height: 214, backgroundColor: REGISTRY.navy, color: REGISTRY.white, padding: '28px 32px'}}>
          <UserRound size={50} color={REGISTRY.brass} strokeWidth={2.2} />
          <div style={{marginTop: 14, fontSize: 29, fontWeight: 820}}>责任承担者申请</div>
          <div style={{marginTop: 8, fontSize: 22, color: '#d7e0ea'}}>书证由对方控制</div>
        </Reveal>
        <RuleLine left={410} top={112} width={146} color={REGISTRY.navy} delay={20} />
        <ArrowHead left={550} top={104} color={REGISTRY.navy} delay={34} />
        <Reveal delay={28} from="right" style={{position: 'absolute', left: 570, top: 8, width: 430, height: 214, backgroundColor: REGISTRY.forest, color: REGISTRY.white, padding: '28px 32px'}}>
          <Gavel size={50} color={REGISTRY.brass} strokeWidth={2.2} />
          <div style={{marginTop: 14, fontSize: 29, fontWeight: 820}}>法院责令提交</div>
          <div style={{marginTop: 8, fontSize: 22, color: '#d6e4de'}}>申请理由成立</div>
        </Reveal>
        <RuleLine left={1000} top={112} width={304} color={REGISTRY.forest} delay={44} />
        <ArrowHead left={1304} top={104} color={REGISTRY.forest} delay={58} />
        <Reveal delay={50} from="right" style={{position: 'absolute', right: 0, top: 8, width: 430, height: 214, border: `4px solid ${REGISTRY.brass}`, backgroundColor: REGISTRY.paper, padding: '28px 32px'}}>
          <FolderLock size={50} color={REGISTRY.brass} strokeWidth={2.2} />
          <div style={{marginTop: 14, fontSize: 29, fontWeight: 820}}>对方控制书证</div>
          <div style={{marginTop: 8, fontSize: 22, color: REGISTRY.sage}}>进入履行结果分流</div>
        </Reveal>

        <RuleLine left={1450} top={222} width={66} color={REGISTRY.brass} delay={68} vertical />
        <RuleLine left={384} top={288} width={1068} color={REGISTRY.brass} delay={78} />
        <RuleLine left={384} top={288} width={206} color={REGISTRY.brass} delay={88} vertical />
        <RuleLine left={1452} top={288} width={206} color={REGISTRY.brass} delay={88} vertical />
        <ArrowHead left={375} top={490} color={REGISTRY.brass} delay={98} direction="down" />
        <ArrowHead left={1443} top={490} color={REGISTRY.brass} delay={98} direction="down" />

        <Reveal delay={94} style={{position: 'absolute', left: 0, bottom: 0, width: 760, height: 302, backgroundColor: REGISTRY.paper, borderTop: `7px solid ${REGISTRY.navy}`, padding: '30px 36px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 18}}><FileMinus size={56} color={REGISTRY.navy} strokeWidth={2.2} /><RegistryLabel tone="navy">无正当理由拒不提交</RegistryLabel></div>
          <div style={{marginTop: 34, fontSize: 30, fontWeight: 780}}>推定申请人主张的</div>
          <div style={{marginTop: 8, fontSize: 40, fontWeight: 900}}><Underline color={REGISTRY.navy} delay={118}>书证内容为真实</Underline></div>
        </Reveal>
        <Reveal delay={108} from="right" style={{position: 'absolute', right: 0, bottom: 0, width: 760, height: 302, backgroundColor: REGISTRY.seal, color: REGISTRY.white, borderTop: `7px solid ${REGISTRY.forest}`, padding: '30px 36px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 18}}><FileX size={56} strokeWidth={2.2} /><RegistryLabel tone="forest">为妨碍使用而毁损</RegistryLabel></div>
          <div style={{marginTop: 30, fontSize: 30, fontWeight: 780}}>推定申请人主张的</div>
          <div style={{marginTop: 8, fontSize: 40, fontWeight: 900}}>事实为真实</div>
          <div style={{marginTop: 18, fontSize: 25, fontWeight: 800, color: '#ffe0dc'}}>并追究妨碍诉讼责任</div>
        </Reveal>
      </div>
    </RegistryCanvas>
  );
};

export const BestEvidenceScene = () => {
  return (
    <RegistryCanvas code="03" title="最佳证据规则：原件优先，困难时开放替代" folio="C-10">
      <div data-layout="original-document-fallback-fan" data-visual-anchor="document-fork" data-text-treatments="soft-highlight,label-block,stamp" data-visual-grammar="priority,boundary,substitution" data-focal-rule="originals-are-required-unless-submission-is-difficult" data-focal-channels="icon,enclosure,connector,annotation" style={{position: 'absolute', left: 94, right: 80, top: 198, bottom: 72}}>
        <Reveal delay={4} style={{position: 'absolute', left: 0, top: 32, width: 480, height: 560, backgroundColor: REGISTRY.forest, color: REGISTRY.white, padding: '38px 42px'}}>
          <ShieldCheck size={62} color={REGISTRY.brass} strokeWidth={2.2} />
          <div style={{marginTop: 24, fontSize: 24, color: '#d6e4de', fontFamily: '"Segoe UI", sans-serif'}}>PRIMARY ROUTE</div>
          <div style={{marginTop: 12, fontSize: 46, lineHeight: 1.25, fontWeight: 850}}>书证应当<br />提交<Highlight delay={24}>原件</Highlight></div>
          <div style={{position: 'absolute', left: 42, right: 42, bottom: 46}}><Seal color={REGISTRY.brass} delay={42}>原则路径</Seal></div>
        </Reveal>
        <RuleLine left={480} top={312} width={180} color={REGISTRY.forest} delay={34} />
        <ArrowHead left={654} top={304} color={REGISTRY.forest} delay={48} />
        <Reveal delay={42} from="right" style={{position: 'absolute', left: 680, top: 152, width: 380, height: 320, backgroundColor: REGISTRY.paper, border: `4px solid ${REGISTRY.brass}`, display: 'grid', placeItems: 'center', textAlign: 'center'}}>
          <FileText size={96} color={REGISTRY.brass} strokeWidth={1.8} />
          <div style={{fontSize: 34, fontWeight: 850, marginTop: -54}}>提交原件有困难？</div>
          <div style={{fontSize: 23, color: REGISTRY.sage, marginTop: -58}}>只有通过此门，替代路径才开放</div>
        </Reveal>
        <RuleLine left={1060} top={312} width={161} color={REGISTRY.seal} delay={64} />
        <ArrowHead left={1221} top={304} color={REGISTRY.seal} delay={78} />
        <Reveal delay={74} from="right" style={{position: 'absolute', right: 0, top: 32, width: 510, height: 560, backgroundColor: REGISTRY.paper, border: `3px solid ${REGISTRY.seal}`, padding: '34px 38px'}}>
          <div style={{fontSize: 25, fontFamily: '"Segoe UI", sans-serif', fontWeight: 800, color: REGISTRY.seal}}>FALLBACK SET</div>
          <div style={{marginTop: 12, fontSize: 34, fontWeight: 850}}>可以提交替代文本</div>
          <div style={{marginTop: 34, display: 'grid', gap: 20}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 22, padding: '18px 20px', backgroundColor: '#e4ece7'}}><Copy size={44} color={REGISTRY.navy} /><span style={{fontSize: 30, fontWeight: 820}}>复制品</span></div>
            <div style={{display: 'flex', alignItems: 'center', gap: 22, padding: '18px 20px', backgroundColor: '#e4ece7'}}><Files size={44} color={REGISTRY.navy} /><span style={{fontSize: 30, fontWeight: 820}}>副本</span></div>
            <div style={{display: 'flex', alignItems: 'center', gap: 22, padding: '18px 20px', backgroundColor: '#e4ece7'}}><Scissors size={44} color={REGISTRY.navy} /><span style={{fontSize: 30, fontWeight: 820}}>节录本</span></div>
          </div>
        </Reveal>
        <Reveal delay={110} from="none" style={{position: 'absolute', left: 582, bottom: 0, width: 568, minHeight: 92, backgroundColor: REGISTRY.navy, color: REGISTRY.white, display: 'grid', placeItems: 'center', fontFamily: '"Segoe UI", "Microsoft YaHei", sans-serif', fontSize: 27, fontWeight: 820}}>
          原件优先，不是绝对禁止替代
        </Reveal>
      </div>
    </RegistryCanvas>
  );
};
