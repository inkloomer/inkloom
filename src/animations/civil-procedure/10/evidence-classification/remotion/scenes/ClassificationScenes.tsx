import {Check, CircleDot, FileCheck2, FileQuestion, Puzzle, ScanSearch, ShieldCheck, UserRoundCheck, UserRoundMinus, X} from 'lucide-react';
import {interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../../shared/remotion-runtime';
import {ArrowHead, Highlight, LAB, Label, LabCanvas, Reveal, Stamp, Trace, Underline} from '../visual-system';

const FACT_CELLS = [
  {left: 0, top: 0}, {left: 114, top: 0},
  {left: 0, top: 114}, {left: 114, top: 114},
];

export const DirectIndirectScene = () => {
  const frame = useCurrentFrame();
  return (
    <LabCanvas code="01" title="直接证据与间接证据" cue="唯一标尺：内容完整性">
      <div data-layout="forensic-dual-aperture" data-visual-anchor="comparison-axis" data-text-treatments="label-block,soft-highlight,thin-underline" data-visual-grammar="comparison,coverage,connector" data-focal-rule="content-completeness-determines-directness" data-focal-channels="icon,contrast,connector,spatial" style={{position: 'absolute', left: 66, right: 66, top: 198, bottom: 72}}>
        <Reveal delay={4} style={{position: 'absolute', left: 0, top: 0, width: 824, height: 646, border: `2px solid ${LAB.mist}`, backgroundColor: 'rgba(255,255,255,0.92)', padding: '34px 42px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 16}}><ScanSearch size={50} color={LAB.cyan} strokeWidth={2.4} /><Label tone="cyan">直接证据</Label><span style={{fontSize: 30, fontWeight: 800}}>完整命中</span></div>
          <div style={{position: 'absolute', left: 70, top: 150, width: 230, height: 230}}>
            {FACT_CELLS.map((cell, index) => (
              <div key={index} style={{position: 'absolute', left: cell.left, top: cell.top, width: 104, height: 104, backgroundColor: index === 3 ? LAB.amber : LAB.cyan, opacity: interpolate(frame, [18 + index * 8, 28 + index * 8], [0, 1], CLAMP), display: 'grid', placeItems: 'center', color: LAB.white}}>
                {index === 3 ? <Check size={42} color={LAB.ink} strokeWidth={3} /> : <CircleDot size={36} strokeWidth={2.4} />}
              </div>
            ))}
          </div>
          <Trace left={324} top={256} width={174} delay={44} />
          <ArrowHead left={493} top={248} delay={58} />
          <div style={{position: 'absolute', right: 56, top: 166, width: 244, height: 204, border: `4px solid ${LAB.ink}`, display: 'grid', placeItems: 'center', textAlign: 'center'}}>
            <FileCheck2 size={68} color={LAB.cyan} strokeWidth={2.2} />
            <div style={{fontSize: 28, fontWeight: 850, marginTop: -26}}>待证事实</div>
            <div style={{fontSize: 22, fontWeight: 750, color: LAB.steel, marginTop: -32}}>内容可完整证明</div>
          </div>
          <div style={{position: 'absolute', left: 42, right: 42, bottom: 42, paddingTop: 24, borderTop: `2px solid ${LAB.mist}`, fontSize: 28, fontWeight: 760}}>
            一份证据的内容，能够<Highlight delay={66}>完整证明</Highlight>待证事实
          </div>
        </Reveal>

        <Reveal delay={16} from="right" style={{position: 'absolute', right: 0, top: 0, width: 824, height: 646, border: `2px solid ${LAB.mist}`, backgroundColor: LAB.ink, color: LAB.white, padding: '34px 42px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 16}}><Puzzle size={50} color={LAB.amber} strokeWidth={2.4} /><Label tone="amber">间接证据</Label><span style={{fontSize: 30, fontWeight: 800}}>只见片段</span></div>
          <div style={{position: 'absolute', left: 70, top: 150, width: 230, height: 230}}>
            {FACT_CELLS.map((cell, index) => (
              <div key={index} style={{position: 'absolute', left: cell.left, top: cell.top, width: 104, height: 104, border: `3px dashed ${index === 0 ? LAB.amber : LAB.steel}`, backgroundColor: index === 0 ? LAB.amber : 'transparent', opacity: interpolate(frame, [32 + index * 7, 42 + index * 7], [0, 1], CLAMP), display: 'grid', placeItems: 'center', color: LAB.ink}}>
                {index === 0 ? <Puzzle size={42} strokeWidth={2.6} /> : null}
              </div>
            ))}
          </div>
          <Trace left={324} top={256} width={174} color={LAB.amber} delay={56} dashed />
          <ArrowHead left={493} top={248} color={LAB.amber} delay={70} />
          <div style={{position: 'absolute', right: 56, top: 166, width: 244, height: 204, border: `4px solid ${LAB.white}`, display: 'grid', placeItems: 'center', textAlign: 'center'}}>
            <FileQuestion size={68} color={LAB.amber} strokeWidth={2.2} />
            <div style={{fontSize: 28, fontWeight: 850, marginTop: -26}}>待证事实</div>
            <div style={{fontSize: 22, fontWeight: 750, color: LAB.mist, marginTop: -32}}>只证明部分片段</div>
          </div>
          <div style={{position: 'absolute', left: 42, right: 42, bottom: 42, paddingTop: 24, borderTop: `2px solid ${LAB.steel}`, fontSize: 28, fontWeight: 760}}>
            一份证据的内容，只覆盖事实的<Underline color={LAB.amber} delay={80}>部分或片段</Underline>
          </div>
        </Reveal>
        <Reveal delay={92} from="none" style={{position: 'absolute', left: 300, top: 672, width: 1180, height: 86, border: `3px solid ${LAB.coral}`, backgroundColor: LAB.white, display: 'grid', placeItems: 'center', fontSize: 27, fontWeight: 850, zIndex: 3}}>
          与来源、证明力大小无关
        </Reveal>
      </div>
    </LabCanvas>
  );
};

export const BurdenEvidenceScene = () => {
  return (
    <LabCanvas code="02" title="本证与反证：先找责任，再看提出者" cue="原告/被告不是判断标准">
      <div data-layout="burden-routing-console" data-visual-anchor="flow-path" data-text-treatments="label-block,thin-underline,stamp" data-visual-grammar="sequence,attribution,fork" data-focal-rule="burden-holder-and-producer-determine-evidence-role" data-focal-channels="icon,connector,spatial,annotation" style={{position: 'absolute', left: 66, right: 66, top: 198, bottom: 72}}>
        <Reveal delay={4} style={{position: 'absolute', left: 0, top: 0, width: 480, height: 570, backgroundColor: LAB.ink, color: LAB.white, padding: '38px 42px'}}>
          <CircleDot size={58} color={LAB.amber} strokeWidth={2.5} />
          <div style={{marginTop: 24, fontSize: 23, fontWeight: 800, color: LAB.mist}}>STEP 01</div>
          <div style={{marginTop: 10, fontSize: 40, lineHeight: 1.25, fontWeight: 820}}>这份证据要证明的<br /><span style={{color: LAB.amber}}>待证事实</span>是什么？</div>
          <div style={{position: 'absolute', left: 42, right: 42, bottom: 44, fontSize: 24, lineHeight: 1.5, color: LAB.mist}}>先锁定证明对象，才能继续判断。</div>
        </Reveal>
        <Trace left={480} top={274} width={128} delay={24} />
        <ArrowHead left={602} top={266} delay={38} />
        <Reveal delay={28} from="right" style={{position: 'absolute', left: 620, top: 0, width: 500, height: 570, border: `3px solid ${LAB.cyan}`, backgroundColor: LAB.glass, padding: '38px 42px'}}>
          <ShieldCheck size={58} color={LAB.cyan} strokeWidth={2.5} />
          <div style={{marginTop: 24, fontSize: 23, fontWeight: 800, color: LAB.steel}}>STEP 02</div>
          <div style={{marginTop: 10, fontSize: 40, lineHeight: 1.25, fontWeight: 820}}>谁对该事实承担<br /><Underline delay={52}>证明责任</Underline>？</div>
          <div style={{position: 'absolute', left: 42, right: 42, bottom: 44, fontSize: 24, lineHeight: 1.5, color: LAB.steel}}>责任归属是本证、反证的轴心。</div>
        </Reveal>
        <Trace left={1120} top={274} width={118} color={LAB.coral} delay={52} />
        <ArrowHead left={1232} top={266} color={LAB.coral} delay={66} />
        <Reveal delay={58} from="right" style={{position: 'absolute', right: 0, top: 0, width: 500, height: 570, border: `3px solid ${LAB.coral}`, backgroundColor: LAB.glass, padding: '38px 42px'}}>
          <ScanSearch size={58} color={LAB.coral} strokeWidth={2.5} />
          <div style={{marginTop: 24, fontSize: 23, fontWeight: 800, color: LAB.steel}}>STEP 03</div>
          <div style={{marginTop: 10, fontSize: 40, lineHeight: 1.25, fontWeight: 820}}>这份证据<br />是谁提出的？</div>
          <div style={{position: 'absolute', left: 42, right: 42, bottom: 44, fontSize: 24, lineHeight: 1.5, color: LAB.steel}}>把提出者与责任承担者对照。</div>
        </Reveal>

        <Trace left={1468} top={570} width={54} color={LAB.coral} delay={82} vertical />
        <Trace left={1040} top={624} width={714} color={LAB.coral} delay={92} />
        <Reveal delay={98} style={{position: 'absolute', left: 872, bottom: 0, width: 424, height: 116, backgroundColor: LAB.cyan, color: LAB.white, display: 'flex', alignItems: 'center', gap: 18, padding: '20px 28px'}}>
          <UserRoundCheck size={48} strokeWidth={2.5} />
          <div><div style={{fontSize: 32, fontWeight: 900}}>同一人 → 本证</div><div style={{fontSize: 21, fontWeight: 700}}>责任承担者提出</div></div>
        </Reveal>
        <Reveal delay={108} from="right" style={{position: 'absolute', right: 0, bottom: 0, width: 424, height: 116, backgroundColor: LAB.coral, color: LAB.white, display: 'flex', alignItems: 'center', gap: 18, padding: '20px 28px'}}>
          <UserRoundMinus size={48} strokeWidth={2.5} />
          <div><div style={{fontSize: 32, fontWeight: 900}}>不同人 → 反证</div><div style={{fontSize: 21, fontWeight: 700}}>非责任承担者提出</div></div>
        </Reveal>
        <div style={{position: 'absolute', left: 0, bottom: 14, width: 790, fontSize: 29, fontWeight: 780}}>
          <Stamp delay={122}>先定证明责任，再定本证反证</Stamp>
        </div>
      </div>
    </LabCanvas>
  );
};

export const SingleCaseTrapScene = () => {
  return (
    <LabCanvas code="03" title="不能单独定案，不等于间接证据" cue="识别单向命题">
      <div data-layout="one-way-inference-gate" data-visual-anchor="typographic-sequence" data-text-treatments="soft-highlight,external-negation,stamp" data-visual-grammar="implication,exclusion,alternative-cause" data-focal-rule="inability-to-decide-alone-does-not-prove-indirectness" data-focal-channels="icon,connector,annotation,contrast" style={{position: 'absolute', left: 66, right: 66, top: 198, bottom: 72}}>
        <Reveal delay={4} style={{position: 'absolute', left: 0, top: 18, width: 520, height: 224, backgroundColor: LAB.ink, color: LAB.white, display: 'grid', placeItems: 'center', textAlign: 'center'}}>
          <Puzzle size={58} color={LAB.amber} strokeWidth={2.4} />
          <div style={{fontSize: 38, fontWeight: 850, marginTop: -34}}>间接证据</div>
          <div style={{fontSize: 23, color: LAB.mist, marginTop: -34}}>内容只覆盖事实片段</div>
        </Reveal>
        <Trace left={520} top={126} width={344} color={LAB.cyan} delay={22} />
        <ArrowHead left={858} top={118} color={LAB.cyan} delay={38} />
        <Reveal delay={34} from="right" style={{position: 'absolute', left: 880, top: 18, width: 650, height: 224, border: `4px solid ${LAB.cyan}`, backgroundColor: LAB.white, display: 'grid', placeItems: 'center', textAlign: 'center'}}>
          <FileQuestion size={58} color={LAB.cyan} strokeWidth={2.4} />
          <div style={{fontSize: 38, fontWeight: 850, marginTop: -34}}>不能单独定案</div>
          <div style={{fontSize: 23, color: LAB.steel, marginTop: -34}}>这一方向成立</div>
        </Reveal>
        <Reveal delay={62} style={{position: 'absolute', right: 0, top: 80, width: 190, height: 100, backgroundColor: LAB.cyan, color: LAB.white, display: 'grid', placeItems: 'center', fontSize: 28, fontWeight: 900}}>
          正确 <Check size={34} strokeWidth={3} />
        </Reveal>

        <Reveal delay={72} from="right" style={{position: 'absolute', right: 0, bottom: 30, width: 520, height: 224, backgroundColor: LAB.coral, color: LAB.white, display: 'grid', placeItems: 'center', textAlign: 'center'}}>
          <X size={58} strokeWidth={3} />
          <div style={{fontSize: 36, fontWeight: 850, marginTop: -34}}>都是间接证据？</div>
          <div style={{fontSize: 23, marginTop: -34}}>逆推不成立</div>
        </Reveal>
        <Trace left={864} top={574} width={344} color={LAB.coral} delay={88} />
        <ArrowHead left={848} top={566} color={LAB.coral} delay={104} direction="left" />
        <Reveal delay={94} style={{position: 'absolute', left: 0, bottom: 30, width: 840, height: 224, border: `4px solid ${LAB.amber}`, backgroundColor: LAB.white, padding: '34px 42px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 18}}><ShieldCheck size={52} color={LAB.amber} strokeWidth={2.5} /><span style={{fontSize: 34, fontWeight: 850}}>还有另一种原因</span></div>
          <div style={{marginTop: 24, fontSize: 30, fontWeight: 760}}>证据内容完整，但<Highlight delay={112}>证明力较小，需要补强</Highlight></div>
          <div style={{marginTop: 22, fontSize: 23, color: LAB.steel}}>所以“不能单独定案”不能反推出“间接证据”。</div>
        </Reveal>
        <Reveal delay={104} from="none" style={{position: 'absolute', left: 682, top: 274, width: 512, height: 92, backgroundColor: LAB.ink, color: LAB.white, display: 'grid', placeItems: 'center', fontSize: 28}}>
          <Stamp color={LAB.amber} delay={112}>只看内容完整性</Stamp>
        </Reveal>
      </div>
    </LabCanvas>
  );
};

export const ProofThresholdScene = () => {
  return (
    <LabCanvas code="04" title="本证要过门槛，反证只需动摇心证" cue="证明责任决定证明标准">
      <div data-layout="proof-standard-dual-lanes" data-visual-anchor="comparison-axis" data-text-treatments="label-block,soft-highlight,thin-underline,stamp" data-visual-grammar="comparison,threshold,consequence" data-focal-rule="proof-burden-sets-threshold" data-focal-channels="icon,contrast,connector,annotation" style={{position: 'absolute', left: 66, right: 66, top: 198, bottom: 72}}>
        <Reveal delay={4} style={{position: 'absolute', left: 0, top: 0, width: 850, height: 532, backgroundColor: LAB.ink, color: LAB.white, padding: '34px 40px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 16}}><UserRoundCheck size={52} color={LAB.amber} strokeWidth={2.6} /><Label tone="amber">承担证明责任</Label></div>
          <div style={{marginTop: 28, fontSize: 30, lineHeight: 1.25, fontWeight: 850}}>提交的证据叫 <Highlight color={LAB.amber}>本证</Highlight></div>
          <div style={{position: 'absolute', left: 38, top: 158, width: 238, height: 210, border: `3px solid ${LAB.cyan}`, display: 'grid', placeItems: 'center', textAlign: 'center'}}>
            <FileCheck2 size={62} color={LAB.cyan} strokeWidth={2.5} />
            <div style={{fontSize: 28, fontWeight: 900}}>证明待证事实</div>
            <div style={{fontSize: 22, color: LAB.mist, marginTop: 6}}>由责任承担者提出</div>
          </div>
          <Trace left={280} top={258} width={60} color={LAB.amber} delay={34} />
          <ArrowHead left={332} top={250} color={LAB.amber} delay={48} />
          <div style={{position: 'absolute', left: 370, top: 136, width: 430, height: 274, border: `4px solid ${LAB.amber}`, backgroundColor: 'rgba(255,255,255,0.08)', padding: '28px 30px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}><ShieldCheck size={54} color={LAB.amber} strokeWidth={2.6} /><Label tone="amber">证明标准门槛</Label></div>
            <div style={{marginTop: 28, fontSize: 30, fontWeight: 900}}><Underline color={LAB.amber} delay={70}>达到标准</Underline> 才能采信</div>
            <div style={{position: 'absolute', left: 30, right: 30, bottom: 46, height: 16, backgroundColor: LAB.steel}}><div style={{width: '88%', height: '100%', backgroundColor: LAB.amber, transformOrigin: 'left center', scale: '0.9 1'}} /></div>
            <div style={{position: 'absolute', left: 30, right: 30, bottom: 14, fontSize: 22, color: LAB.mist}}>未达门槛 → 承担不利后果</div>
          </div>
          <div style={{position: 'absolute', left: 38, right: 38, bottom: 28, paddingTop: 20, borderTop: `3px solid ${LAB.coral}`, fontSize: 27, fontWeight: 850, color: LAB.white}}><X size={30} color={LAB.coral} strokeWidth={3} style={{verticalAlign: 'middle', marginRight: 10}} />证明不足，风险落回责任承担者</div>
        </Reveal>

        <Reveal delay={18} from="right" style={{position: 'absolute', right: 0, top: 0, width: 850, height: 532, backgroundColor: LAB.glass, color: LAB.ink, border: `3px solid ${LAB.coral}`, padding: '34px 40px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 16}}><UserRoundMinus size={52} color={LAB.coral} strokeWidth={2.6} /><Label tone="coral">不承担证明责任</Label></div>
          <div style={{marginTop: 28, fontSize: 30, lineHeight: 1.25, fontWeight: 850}}>提交的证据叫 <Highlight color={LAB.mist}>反证</Highlight></div>
          <div style={{position: 'absolute', left: 38, top: 158, width: 238, height: 210, border: `3px solid ${LAB.cyan}`, display: 'grid', placeItems: 'center', textAlign: 'center'}}>
            <FileQuestion size={62} color={LAB.cyan} strokeWidth={2.5} />
            <div style={{fontSize: 28, fontWeight: 900}}>动摇对方心证</div>
            <div style={{fontSize: 22, color: LAB.steel, marginTop: 6}}>提出是权利，不是义务</div>
          </div>
          <Trace left={280} top={258} width={60} color={LAB.cyan} delay={48} />
          <ArrowHead left={332} top={250} color={LAB.cyan} delay={62} />
          <div style={{position: 'absolute', left: 370, top: 136, width: 430, height: 274, border: `4px solid ${LAB.cyan}`, backgroundColor: LAB.white, padding: '28px 30px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}><CircleDot size={54} color={LAB.cyan} strokeWidth={2.6} /><Label tone="cyan">反证作用</Label></div>
            <div style={{marginTop: 28, fontSize: 30, fontWeight: 900}}><Underline color={LAB.cyan} delay={84}>无需达到证明标准</Underline></div>
            <div style={{marginTop: 26, fontSize: 25, lineHeight: 1.45, fontWeight: 800, color: LAB.steel}}>只要让事实回到真伪不明，就能影响判断。</div>
          </div>
          <div style={{position: 'absolute', left: 38, right: 38, bottom: 28, paddingTop: 20, borderTop: `3px solid ${LAB.cyan}`, fontSize: 27, fontWeight: 850}}><ShieldCheck size={30} color={LAB.cyan} strokeWidth={3} style={{verticalAlign: 'middle', marginRight: 10}} />结果责任不会转移</div>
        </Reveal>

        <Reveal delay={112} from="up" style={{position: 'absolute', left: 280, top: 572, width: 1228, height: 92, backgroundColor: LAB.amber, color: LAB.ink, border: `4px solid ${LAB.ink}`, display: 'grid', placeItems: 'center', fontSize: 31, fontWeight: 900}}>
          <Stamp color={LAB.ink} delay={122}>本证要达标；反证只需动摇心证</Stamp>
        </Reveal>
      </div>
    </LabCanvas>
  );
};

export const OutOfScopeEvidenceScene = () => {
  return (
    <LabCanvas code="05" title="先找证明对象：无关事实不进本案证据场" cue="关联性是第一道门">
      <div data-layout="proof-object-scope-gate" data-visual-anchor="boundary" data-text-treatments="label-block,soft-highlight,external-negation,stamp" data-visual-grammar="scope-gate,fork,exclusion" data-focal-rule="irrelevant-fact-is-not-evidence" data-focal-channels="icon,connector,enclosure,contrast" style={{position: 'absolute', left: 66, right: 66, top: 198, bottom: 72}}>
        <Reveal delay={4} style={{position: 'absolute', left: 0, top: 58, width: 390, height: 520, backgroundColor: LAB.ink, color: LAB.white, padding: '36px 34px'}}>
          <FileQuestion size={64} color={LAB.amber} strokeWidth={2.6} />
          <div style={{marginTop: 28}}><Label tone="amber">材料出现</Label></div>
          <div style={{marginTop: 26, fontSize: 38, lineHeight: 1.2, fontWeight: 900}}>它要证明什么？</div>
          <div style={{marginTop: 28, fontSize: 26, lineHeight: 1.5, color: LAB.mist, fontWeight: 780}}>先定位待证事实，才能继续判断本证或反证。</div>
          <div style={{position: 'absolute', left: 34, right: 34, bottom: 34, borderTop: `3px solid ${LAB.amber}`, paddingTop: 20, fontSize: 25, fontWeight: 850}}>第一步：确定证明对象</div>
        </Reveal>
        <Trace left={392} top={306} width={68} color={LAB.cyan} delay={28} />
        <ArrowHead left={454} top={298} color={LAB.cyan} delay={42} />

        <Reveal delay={20} from="right" style={{position: 'absolute', left: 470, top: 0, width: 560, height: 560, backgroundColor: LAB.white, color: LAB.ink, border: `4px solid ${LAB.cyan}`, padding: '34px 38px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 14}}><ScanSearch size={54} color={LAB.cyan} strokeWidth={2.5} /><Label tone="cyan">本案证明对象</Label></div>
          <div style={{marginTop: 30, fontSize: 33, fontWeight: 900}}>属于本案待证事实</div>
          <div style={{position: 'absolute', left: 38, right: 38, top: 190, height: 180, border: `3px solid ${LAB.ink}`, display: 'grid', placeItems: 'center', textAlign: 'center'}}>
            <ShieldCheck size={58} color={LAB.cyan} strokeWidth={2.5} />
            <div style={{fontSize: 31, fontWeight: 900}}>与诉讼请求或抗辩相关</div>
            <div style={{fontSize: 23, color: LAB.steel, marginTop: 8}}>进入证明责任判断</div>
          </div>
          <div style={{position: 'absolute', left: 38, right: 38, bottom: 34, paddingTop: 20, borderTop: `3px solid ${LAB.cyan}`, fontSize: 25, lineHeight: 1.35, fontWeight: 820}}>关联成立 → 再问由谁承担责任、由谁提出证据</div>
        </Reveal>
        <Trace left={1034} top={220} width={74} color={LAB.coral} delay={72} />
        <ArrowHead left={1102} top={212} color={LAB.coral} delay={86} />

        <Reveal delay={42} from="right" style={{position: 'absolute', right: 0, top: 0, width: 668, height: 260, backgroundColor: LAB.white, color: LAB.ink, border: `4px solid ${LAB.coral}`, padding: '30px 34px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 14}}><X size={56} color={LAB.coral} strokeWidth={3} /><Label tone="coral">无关事实</Label></div>
          <div style={{marginTop: 24, fontSize: 32, fontWeight: 900}}><Highlight color="#f5d7d3">与案件没有关联性</Highlight></div>
          <div style={{marginTop: 24, fontSize: 25, color: LAB.steel, fontWeight: 800}}>不属于本案证明对象，不进入责任分配。</div>
        </Reveal>
        <Reveal delay={76} from="up" style={{position: 'absolute', right: 0, top: 300, width: 668, height: 260, backgroundColor: LAB.ink, color: LAB.white, padding: '32px 34px'}}>
          <div style={{fontSize: 25, color: LAB.amber, fontWeight: 850}}>分类被拒绝</div>
          <div style={{marginTop: 22, fontSize: 34, lineHeight: 1.25, fontWeight: 900}}>既不是本证，也不是反证</div>
          <div style={{marginTop: 24, fontSize: 25, lineHeight: 1.4, color: LAB.mist, fontWeight: 800}}>因为它根本不是本案的证据。</div>
          <div style={{position: 'absolute', left: 34, bottom: 26}}><Stamp color={LAB.coral} delay={104}>先排除无关事实</Stamp></div>
        </Reveal>

        <Reveal delay={126} from="up" style={{position: 'absolute', left: 236, top: 602, width: 1320, height: 88, backgroundColor: LAB.amber, color: LAB.ink, border: `4px solid ${LAB.ink}`, display: 'grid', placeItems: 'center', fontSize: 30, fontWeight: 900}}>
          不是先问谁提出，而是先问：它是不是本案的证明对象？
        </Reveal>
      </div>
    </LabCanvas>
  );
};
