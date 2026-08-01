import {
  BookOpenCheck,
  Check,
  Combine,
  FileSignature,
  Files,
  Gavel,
  GitMerge,
  Handshake,
  Landmark,
  Layers3,
  Link2,
  Scale,
  Scissors,
  Split,
  Users,
  UsersRound,
  UserCheck,
} from 'lucide-react';
import {PALETTE} from '../storyboard';
import {
  Enter,
  LabelBlock,
  MaskedReveal,
  PaperSlip,
  SceneHeader,
  SoftHighlight,
  Stamp,
  StaggerEnter,
  StitchSpine,
  ThinUnderline,
  ThreadConnector,
} from '../visual-system';

const frameStyle = {
  position: 'absolute' as const,
  inset: 0,
};

const partyChip = (label: string, accent: string) => (
  <div style={{width: 126, padding: '14px 12px', background: PALETTE.paper, border: `2px solid ${accent}`, textAlign: 'center', fontSize: 24, fontWeight: 900}}>{label}</div>
);

export const DefinitionScene = () => (
  <section
    data-layout="many-parties-one-bench"
    data-visual-anchor="role-pair"
    data-text-treatments="soft-highlight,label-block,thin-underline"
    data-visual-grammar="aggregation,role-pair,adjudication"
    data-focal-channels="icon,connector,enclosure,spatial"
    data-focal-rule="一方或双方人数众多，在同一诉讼程序中共同进行诉讼"
    style={frameStyle}
  >
    <SceneHeader index="01" kicker="CASE BINDERY / DEFINITION" title={<>把多人案件装进<SoftHighlight>同一程序</SoftHighlight></>} />

    <Enter delay={18} from="left" style={{position: 'absolute', left: 150, top: 300, width: 460}}>
      <PaperSlip accent={PALETTE.cobalt} style={{height: 460}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
          <div style={{width: 64, height: 64, display: 'grid', placeItems: 'center', background: PALETTE.cobalt, color: PALETTE.paper}}><Users size={36} strokeWidth={2.2} /></div>
          <div><div style={{fontSize: 30, fontWeight: 900}}>共同的一方</div><div style={{fontSize: 22, color: PALETTE.muted, marginTop: 5}}>一方或双方人数众多</div></div>
        </div>
        <StaggerEnter baseDelay={34} duration={28} step={8} gap={16} style={{flexWrap: 'wrap', marginTop: 44}}>
          {partyChip('当事人 A', PALETTE.cobalt)}
          {partyChip('当事人 B', PALETTE.cobalt)}
          {partyChip('当事人 C', PALETTE.cobalt)}
          {partyChip('……', PALETTE.cobalt)}
        </StaggerEnter>
        <div style={{marginTop: 36, fontSize: 26, fontWeight: 800}}><ThinUnderline>人数结构</ThinUnderline>先改变</div>
      </PaperSlip>
    </Enter>

    <ThreadConnector left={640} top={500} width={240} label="共同进入" />

    <Enter delay={58} from="right" style={{position: 'absolute', left: 920, top: 318, width: 780}}>
      <div style={{position: 'relative', height: 426, background: PALETTE.paper, border: `3px solid ${PALETTE.ink}`, padding: '56px 62px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 30}}>
          <div style={{width: 110, height: 110, display: 'grid', placeItems: 'center', color: PALETTE.paper, background: PALETTE.thread}}><Files size={60} strokeWidth={2} /></div>
          <div>
            <LabelBlock>共同诉讼</LabelBlock>
            <div style={{fontFamily: 'var(--inkloom-animation-title)', fontSize: 48, lineHeight: 1.25, fontWeight: 900, marginTop: 18}}>多个当事人<br />同在一个诉讼程序</div>
          </div>
        </div>
        <div style={{position: 'absolute', left: 62, right: 62, bottom: 44, display: 'flex', alignItems: 'center', gap: 18, fontSize: 25, color: PALETTE.muted}}>
          <Landmark size={34} color={PALETTE.cobalt} />
          <span>程序容器只有一个，内部关系仍需继续判断</span>
        </div>
      </div>
    </Enter>
  </section>
);

export const OrdinaryScene = () => {
  const lanes = [
    ['甲 ↔ 乙', '标的 A'],
    ['丙 ↔ 丁', '标的 B'],
    ['戊 ↔ 己', '标的 C'],
  ];
  return (
    <section
      data-layout="loose-folio-lanes"
      data-visual-anchor="flow-path"
      data-text-treatments="label-block,thin-underline,stamp"
      data-visual-grammar="parallelism,conditional-merge,independence"
      data-focal-channels="icon,connector,contrast,annotation"
      data-focal-rule="同种类标的的数个可分之诉，经法院判断与当事人同意才可合并"
      style={frameStyle}
    >
      <SceneHeader index="02" kicker="LOOSE FOLIOS / ORDINARY" title={<>普通共同诉讼：<ThinUnderline>同种类，不是同一个</ThinUnderline></>} />

      <MaskedReveal delay={20} style={{position: 'absolute', left: 132, top: 292, width: 850, height: 505}}>
        <div style={{display: 'flex', flexDirection: 'column', gap: 22}}>
          {lanes.map(([pair, subject], index) => (
            <div key={pair} style={{position: 'relative', height: 126, display: 'flex', alignItems: 'center', background: PALETTE.paper, border: `1px solid ${PALETTE.rule}`, boxShadow: '7px 7px 0 rgba(23,24,19,.07)'}}>
              <div style={{width: 102, alignSelf: 'stretch', display: 'grid', placeItems: 'center', background: index === 1 ? PALETTE.green : PALETTE.cobalt, color: PALETTE.paper}}><Files size={42} /></div>
              <div style={{width: 300, paddingLeft: 30, fontSize: 30, fontWeight: 900}}>{pair}</div>
              <div style={{height: 3, flex: 1, background: PALETTE.rule}} />
              <div style={{padding: '0 30px', fontSize: 25, fontWeight: 800, color: PALETTE.muted}}>{subject}</div>
              <Scissors size={28} color={PALETTE.thread} style={{position: 'absolute', right: 18, top: -15, background: PALETTE.canvas}} />
            </div>
          ))}
        </div>
      </MaskedReveal>

      <ThreadConnector left={1010} top={492} width={180} color={PALETTE.mustard} label="满足两道条件" />

      <Enter delay={62} from="right" style={{position: 'absolute', left: 1240, top: 280, width: 520}}>
        <PaperSlip accent={PALETTE.mustard} style={{height: 520}}>
          <div style={{display: 'flex', gap: 18, alignItems: 'center'}}><Handshake size={44} color={PALETTE.green} /><LabelBlock color={PALETTE.green}>可合并审理</LabelBlock></div>
          <div style={{marginTop: 34, display: 'flex', flexDirection: 'column', gap: 18}}>
            <div style={{fontSize: 28, fontWeight: 900}}>① 法院认为可以合并</div>
            <div style={{fontSize: 28, fontWeight: 900}}>② <SoftHighlight color={PALETTE.mustardSoft}>当事人同意</SoftHighlight></div>
          </div>
          <div style={{height: 1, background: PALETTE.rule, margin: '34px 0 26px'}} />
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <div style={{fontSize: 27, fontWeight: 900}}>行为相互独立</div>
            <Stamp>互不影响</Stamp>
          </div>
        </PaperSlip>
      </Enter>
    </section>
  );
};

export const NecessaryScene = () => (
  <section
    data-layout="single-bound-volume"
    data-visual-anchor="concept-icon"
    data-text-treatments="soft-highlight,stamp,label-block"
    data-visual-grammar="shared-object,mandatory-binding,recognized-act"
    data-focal-channels="icon,enclosure,connector,motion"
    data-focal-rule="同一诉讼标的决定必须合并审理并作合一判决"
    style={frameStyle}
  >
    <SceneHeader index="03" kicker="BOUND VOLUME / NECESSARY" title={<>必要共同诉讼：多人围绕<SoftHighlight color={PALETTE.threadSoft}>同一标的</SoftHighlight></>} />

    <Enter delay={18} style={{position: 'absolute', left: 180, top: 312, width: 1580, height: 470}}>
      <div style={{position: 'relative', height: '100%', background: PALETTE.paper, border: `3px solid ${PALETTE.ink}`, boxShadow: '14px 14px 0 rgba(23,24,19,.10)'}}>
        <StitchSpine left={760} top={30} height={410} />
        <div style={{position: 'absolute', left: 70, top: 70, width: 620}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 24}}>
            <BookOpenCheck size={78} color={PALETTE.thread} strokeWidth={1.8} />
            <div>
              <LabelBlock color={PALETTE.thread}>只有一个诉</LabelBlock>
              <div style={{fontSize: 42, fontWeight: 900, marginTop: 18}}>同一诉讼标的</div>
            </div>
          </div>
          <div style={{display: 'flex', gap: 15, marginTop: 52}}>{partyChip('共同人 A', PALETTE.thread)}{partyChip('共同人 B', PALETTE.thread)}{partyChip('共同人 C', PALETTE.thread)}</div>
        </div>
        <div style={{position: 'absolute', left: 850, top: 64, right: 62}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 22}}><GitMerge size={54} color={PALETTE.cobalt} /><div style={{fontSize: 34, fontWeight: 900}}>必须合并审理</div><Stamp>合一判决</Stamp></div>
          <div style={{height: 3, background: PALETTE.cobalt, margin: '34px 0'}} />
          <div style={{fontSize: 28, lineHeight: 1.55, fontWeight: 800}}>一人的诉讼行为</div>
          <div style={{display: 'flex', alignItems: 'center', gap: 20, marginTop: 20}}>
            <Check size={42} color={PALETTE.green} />
            <div style={{fontSize: 30, fontWeight: 900}}><SoftHighlight color={PALETTE.greenSoft}>经其他共同诉讼人承认后</SoftHighlight>生效</div>
          </div>
        </div>
      </div>
    </Enter>
  </section>
);

export const ComparisonScene = () => (
  <section
    data-layout="loose-versus-sewn-axis"
    data-visual-anchor="comparison-axis"
    data-text-treatments="thin-underline,label-block,soft-highlight"
    data-visual-grammar="comparison,divergence,effect-scope"
    data-focal-channels="icon,contrast,spatial,annotation"
    data-focal-rule="区分轴是同种类标的与同一标的，而不是当事人人数"
    style={frameStyle}
  >
    <SceneHeader index="04" kicker="BINDING TEST / COMPARISON" title={<>先看<ThinUnderline color={PALETTE.thread}>诉讼标的</ThinUnderline>，再决定装订方式</>} />
    <div style={{position: 'absolute', left: 152, right: 152, top: 286, height: 506}}>
      <div style={{position: 'absolute', left: '50%', top: 0, bottom: 0, width: 3, background: PALETTE.ink}} />
      <Scale size={58} style={{position: 'absolute', left: '50%', top: -30, translate: '-50% 0', color: PALETTE.mustard, background: PALETTE.canvas}} />

      <Enter delay={18} from="left" style={{position: 'absolute', left: 0, top: 42, width: 690}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 22}}><Files size={52} color={PALETTE.cobalt} /><LabelBlock color={PALETTE.cobalt}>普通 · 散页</LabelBlock></div>
        <div style={{fontSize: 40, fontWeight: 900, marginTop: 30}}><SoftHighlight color={PALETTE.cobaltSoft}>同种类</SoftHighlight>的若干独立标的</div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 15, marginTop: 42}}>
          {['可分之诉', '法院认为可以 + 当事人同意', '各自行为互不影响'].map((item, index) => <div key={item} style={{display: 'flex', alignItems: 'center', gap: 16, fontSize: 27, fontWeight: 800}}><span style={{width: 34, color: PALETTE.cobalt, fontWeight: 900}}>0{index + 1}</span><span>{item}</span></div>)}
        </div>
      </Enter>

      <Enter delay={46} from="right" style={{position: 'absolute', right: 0, top: 42, width: 690}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 22}}><BookOpenCheck size={52} color={PALETTE.thread} /><LabelBlock color={PALETTE.thread}>必要 · 成册</LabelBlock></div>
        <div style={{fontSize: 40, fontWeight: 900, marginTop: 30}}><SoftHighlight color={PALETTE.threadSoft}>同一</SoftHighlight>诉讼标的</div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 15, marginTop: 42}}>
          {['本质上只有一个诉', '必须合并 + 合一判决', '一人行为经其他人承认'].map((item, index) => <div key={item} style={{display: 'flex', alignItems: 'center', gap: 16, fontSize: 27, fontWeight: 800}}><span style={{width: 34, color: PALETTE.thread, fontWeight: 900}}>0{index + 1}</span><span>{item}</span></div>)}
        </div>
      </Enter>
    </div>
  </section>
);

export const ExamplesScene = () => {
  const groups = [
    {title: '共同责任', color: PALETTE.thread, icon: Link2, items: ['挂靠', '借章/账户', '劳务派遣', '代理连带', '连带保证', '共同侵权']},
    {title: '共同身份', color: PALETTE.cobalt, icon: Users, items: ['个体工商户', '全体合伙人', '行为能力人 + 监护人']},
    {title: '权利整体', color: PALETTE.green, icon: Layers3, items: ['追索赡养费', '遗产继承', '共有财产权']},
    {title: '主体延续', color: PALETTE.mustard, icon: GitMerge, items: ['企业分立', '注销未清算']},
  ];
  return (
    <section
      data-layout="four-mechanism-index"
      data-visual-anchor="document-fork"
      data-text-treatments="label-block,soft-highlight,thin-underline"
      data-visual-grammar="classification,grouping,shared-liability"
      data-focal-channels="icon,enclosure,contrast,annotation"
      data-focal-rule="十四种高频情形可按共同责任、共同身份、权利整体与主体延续来归类"
      style={frameStyle}
    >
      <SceneHeader index="05" kicker="CASE INDEX / 14 PATTERNS" title={<>十四种情形，不要死背成<SoftHighlight>一长串</SoftHighlight></>} />
      <div style={{position: 'absolute', left: 132, right: 120, top: 270, bottom: 142}}>
        {groups.map((group, index) => {
          const Icon = group.icon;
          const positions = [
            {left: 0, top: 22, width: 760},
            {left: 840, top: 0, width: 720},
            {left: 90, top: 302, width: 720},
            {left: 900, top: 286, width: 660},
          ][index];
          return (
            <Enter key={group.title} delay={18 + index * 22} from={index % 2 ? 'right' : 'left'} style={{position: 'absolute', ...positions}}>
              <div style={{position: 'relative', minHeight: 220, padding: '26px 30px 24px 112px', background: PALETTE.paper, borderTop: `6px solid ${group.color}`, boxShadow: '8px 8px 0 rgba(23,24,19,.08)'}}>
                <div style={{position: 'absolute', left: 24, top: 28, width: 64, height: 64, display: 'grid', placeItems: 'center', color: PALETTE.paper, background: group.color}}><Icon size={38} /></div>
                <div style={{fontSize: 30, fontWeight: 900}}><ThinUnderline color={group.color}>{group.title}</ThinUnderline></div>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '12px 16px', marginTop: 26}}>
                  {group.items.map((item) => <span key={item} style={{fontSize: 23, lineHeight: 1.2, fontWeight: 800, padding: '7px 10px', borderLeft: `4px solid ${group.color}`, background: group.color === PALETTE.mustard ? PALETTE.mustardSoft : PALETTE.canvas}}>{item}</span>)}
                </div>
              </div>
            </Enter>
          );
        })}
      </div>
    </section>
  );
};

export const RecapScene = () => (
  <section
    data-layout="subject-matter-binding-decision"
    data-visual-anchor="flow-path"
    data-text-treatments="soft-highlight,label-block,stamp"
    data-visual-grammar="decision,branching,legal-effect"
    data-focal-channels="icon,connector,enclosure,motion"
    data-focal-rule="从诉讼标的是同种类还是同一出发即可推出合并与内部效力"
    style={frameStyle}
  >
    <SceneHeader index="06" kicker="FINAL PRESS / RECAP" title={<>一条判断线，装订整个<SoftHighlight color={PALETTE.greenSoft}>共同诉讼</SoftHighlight></>} />

    <Enter delay={18} style={{position: 'absolute', left: 160, top: 392, width: 360}}>
      <PaperSlip accent={PALETTE.ink} style={{height: 230, display: 'grid', placeItems: 'center', textAlign: 'center'}}>
        <Gavel size={56} color={PALETTE.mustard} />
        <div style={{fontSize: 34, fontWeight: 900}}>诉讼标的？</div>
      </PaperSlip>
    </Enter>

    <ThreadConnector left={540} top={438} width={235} color={PALETTE.cobalt} label="同种类" />
    <ThreadConnector left={540} top={594} width={235} color={PALETTE.thread} label="同一" />

    <Enter delay={54} from="right" style={{position: 'absolute', left: 830, top: 318, width: 820}}>
      <div style={{display: 'flex', flexDirection: 'column', gap: 28}}>
        <div style={{position: 'relative', height: 190, display: 'flex', alignItems: 'center', gap: 30, padding: '28px 36px', background: PALETTE.paper, border: `3px solid ${PALETTE.cobalt}`}}>
          <Split size={62} color={PALETTE.cobalt} />
          <div style={{flex: 1}}><LabelBlock color={PALETTE.cobalt}>普通共同诉讼</LabelBlock><div style={{fontSize: 28, fontWeight: 900, marginTop: 18}}>可以合并 · 须当事人同意 · 行为独立</div></div>
          <Stamp color={PALETTE.cobalt}>数个诉</Stamp>
        </div>
        <div style={{position: 'relative', height: 190, display: 'flex', alignItems: 'center', gap: 30, padding: '28px 36px', background: PALETTE.paper, border: `3px solid ${PALETTE.thread}`}}>
          <Combine size={62} color={PALETTE.thread} />
          <div style={{flex: 1}}><LabelBlock color={PALETTE.thread}>必要共同诉讼</LabelBlock><div style={{fontSize: 28, fontWeight: 900, marginTop: 18}}>必须合并 · 合一判决 · 承认后生效</div></div>
          <Stamp>一个诉</Stamp>
        </div>
      </div>
    </Enter>
  </section>
);

export const RelationsScene = () => (
  <section
    data-layout="recognition-gate-effect-spread"
    data-visual-anchor="flow-path"
    data-text-treatments="label-block,stamp,thin-underline"
    data-visual-grammar="act,recognition-gate,effect-scope"
    data-focal-channels="icon,connector,enclosure,motion"
    data-focal-rule="一人的诉讼行为经其他共同诉讼人承认后，对其他共同诉讼人生效"
    style={frameStyle}
  >
    <SceneHeader
      index="07"
      kicker="RECOGNITION THREAD / EFFECT"
      title={<>承认，是效力传导的<ThinUnderline color={PALETTE.green}>开关</ThinUnderline></>}
    />

    <Enter delay={16} from="left" style={{position: 'absolute', left: 128, top: 324, width: 420}}>
      <PaperSlip accent={PALETTE.cobalt} style={{height: 404}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
          <div style={{width: 64, height: 64, display: 'grid', placeItems: 'center', background: PALETTE.cobalt, color: PALETTE.paper}}>
            <FileSignature size={36} strokeWidth={2.2} />
          </div>
          <div><div style={{fontSize: 30, fontWeight: 900}}>共同诉讼人 A</div><div style={{fontSize: 22, color: PALETTE.muted, marginTop: 5}}>作出一项诉讼行为</div></div>
        </div>
        <div style={{marginTop: 54, padding: '24px 26px', border: `2px solid ${PALETTE.cobalt}`, background: PALETTE.cobaltSoft}}>
          <LabelBlock color={PALETTE.cobalt}>行为凭单</LabelBlock>
          <div style={{marginTop: 20, fontSize: 32, lineHeight: 1.3, fontWeight: 900}}>一人的诉讼行为</div>
        </div>
      </PaperSlip>
    </Enter>

    <ThreadConnector left={574} top={496} width={198} color={PALETTE.cobalt} delay={44} label="送达其他共同诉讼人" />

    <Enter delay={62} style={{position: 'absolute', left: 786, top: 300, width: 474}}>
      <div style={{position: 'relative', height: 452, background: PALETTE.paper, border: `3px solid ${PALETTE.green}`, padding: '42px 40px', boxShadow: '11px 11px 0 rgba(43,118,95,.14)'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
          <div style={{width: 64, height: 64, display: 'grid', placeItems: 'center', background: PALETTE.green, color: PALETTE.paper}}>
            <UserCheck size={36} strokeWidth={2.2} />
          </div>
          <div><div style={{fontSize: 30, fontWeight: 900}}>其他共同诉讼人</div><div style={{fontSize: 22, color: PALETTE.muted, marginTop: 5}}>承认该诉讼行为</div></div>
        </div>
        <div style={{height: 2, margin: '42px 0 34px', background: PALETTE.rule}} />
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <div>
            <div style={{fontSize: 24, color: PALETTE.muted, fontWeight: 800}}>效力门槛</div>
            <div style={{marginTop: 8, fontSize: 36, fontWeight: 900}}>经其他人承认</div>
          </div>
          <Stamp color={PALETTE.green}>承认</Stamp>
        </div>
        <div style={{position: 'absolute', left: 0, right: 0, bottom: 0, height: 14, background: PALETTE.green}} />
      </div>
    </Enter>

    <ThreadConnector left={1286} top={496} width={190} color={PALETTE.green} delay={104} label="承认后传导" />

    <Enter delay={122} from="right" style={{position: 'absolute', left: 1490, top: 324, width: 300}}>
      <PaperSlip accent={PALETTE.thread} style={{height: 404, textAlign: 'center'}}>
        <UsersRound size={72} color={PALETTE.thread} strokeWidth={1.8} />
        <div style={{marginTop: 28, fontSize: 31, lineHeight: 1.25, fontWeight: 900}}>对其他共同<br />诉讼人</div>
        <div style={{height: 2, margin: '28px 12px', background: PALETTE.rule}} />
        <Stamp>生效</Stamp>
      </PaperSlip>
    </Enter>
  </section>
);
