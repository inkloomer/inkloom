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
