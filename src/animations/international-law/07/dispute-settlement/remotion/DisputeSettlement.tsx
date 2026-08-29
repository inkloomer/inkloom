import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {Gavel, Scale, Search, ShieldAlert, Waves} from 'lucide-react';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {PALETTE, SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const enter = (frame: number, delay: number, y = 24): CSSProperties => ({
  opacity: interpolate(frame, [delay, delay + 16], [0, 1], CLAMP),
  translate: `0px ${interpolate(frame, [delay, delay + 22], [y, 0], {...CLAMP, easing: Easing.out(Easing.cubic)})}px`,
});

const enterX = (frame: number, delay: number, x = 52): CSSProperties => ({
  opacity: interpolate(frame, [delay, delay + 16], [0, 1], CLAMP),
  translate: `${interpolate(frame, [delay, delay + 24], [x, 0], {...CLAMP, easing: Easing.out(Easing.cubic)})}px 0px`,
});

const BENCH_CODE = ['壹', '贰', '叁', '肆'];

const BenchShell = ({
  children,
  code,
  station,
  title,
}: {
  readonly children: ReactNode;
  readonly code: number;
  readonly station: number;
  readonly title: string;
}) => (
  <AbsoluteFill
    className="font-animation-body"
    style={{
      color: PALETTE.ink,
      backgroundColor: PALETTE.marble,
      backgroundImage:
        'repeating-linear-gradient(180deg, rgba(50,48,42,0.03) 0 2px, transparent 2px 40px), radial-gradient(circle at 50% 0%, rgba(47,111,106,0.09), transparent 32%)',
      overflow: 'hidden',
    }}
  >
    <div style={{position: 'absolute', inset: 22, border: `3px solid ${PALETTE.teal}`}} />
    <div style={{position: 'absolute', inset: 30, border: `1px solid ${PALETTE.gold}77`}} />
    <header style={{position: 'absolute', left: 64, right: 64, top: 44, height: 104, display: 'flex', alignItems: 'center', gap: 24, borderBottom: `4px solid ${PALETTE.gold}`}}>
      <div style={{width: 72, height: 72, borderRadius: 36, border: `3px solid ${PALETTE.gold}`, backgroundColor: PALETTE.card, display: 'grid', placeItems: 'center'}}>
        <Scale size={30} color={PALETTE.gold} />
      </div>
      <h1 className="font-animation-title" style={{fontSize: 42, lineHeight: 1.1, margin: 0, fontWeight: 800, color: PALETTE.ink}}>
        {title}
      </h1>
      <div style={{marginLeft: 'auto', textAlign: 'right'}}>
        <div style={{fontSize: 16, fontWeight: 700, letterSpacing: 4, color: PALETTE.muted}}>PEACE PALACE BENCH · 三国法</div>
        <div style={{fontSize: 18, color: PALETTE.muted, marginTop: 6}}>国际争端的解决 · {BENCH_CODE[code]}</div>
      </div>
    </header>
    <div style={{position: 'absolute', left: 66, top: 210, width: 104, height: 640, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40}}>
      {[0, 1, 2, 3].map((index) => {
        const active = index === station;
        return (
          <div
            key={index}
            style={{
              width: 62,
              height: 62,
              borderRadius: 31,
              border: `2px solid ${active ? PALETTE.gold : PALETTE.line}`,
              backgroundColor: active ? PALETTE.gold : PALETTE.card,
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <span className="font-animation-mono" style={{fontSize: 18, fontWeight: 700, color: active ? PALETTE.card : PALETTE.muted}}>{String(index + 1).padStart(2, '0')}</span>
          </div>
        );
      })}
    </div>
    <main style={{position: 'absolute', left: 210, right: 64, top: 190, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Plaque = ({color, text}: {readonly color: string; readonly text: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', backgroundColor: `${color}22`, borderLeft: `6px solid ${color}`, padding: '4px 14px'}}>
    <span style={{fontSize: 22, fontWeight: 800, color}}>{text}</span>
  </span>
);

const Ink = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{backgroundColor: color, padding: '2px 10px', fontWeight: 800}}>{children}</span>
);

const Under = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{boxShadow: `inset 0 -3px ${color}`, paddingBottom: 2, fontWeight: 700}}>{children}</span>
);

const GoldStamp = ({delay, frame, text, color = PALETTE.garnet}: {readonly delay: number; readonly frame: number; readonly text: string; readonly color?: string}) => (
  <span
    style={{
      ...enter(frame, delay, 10),
      display: 'inline-block',
      border: `3px solid ${color}`,
      borderRadius: 8,
      color,
      padding: '8px 20px',
      fontSize: 23,
      fontWeight: 800,
      letterSpacing: 2,
      rotate: '-4deg',
      backgroundColor: PALETTE.card,
    }}
  >
    {text}
  </span>
);

export const CoerciveMeansScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="forced-illegal" data-final-knowledge="blockade-un-council" data-final-knowledge="retorsion-reprisal" */
  const frame = useCurrentFrame();
  return (
    <BenchShell code={0} station={0} title="强制性解决方式：合法性的三档">
      <div
        data-layout="three-tier-legality-board"
        data-visual-anchor="typographic-sequence"
        data-visual-grammar="coercive-means-sort-into-three-legality-tiers,retorsion-reprisal-split-on-legality-of-first-act"
        data-text-treatments="stamp,thin-underline,soft-highlight"
        data-focal-rule="prior-act-legality-decides-retorsion-or-reprisal"
        data-focal-channels="contrast,enclosure,locator"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{display: 'flex', flexDirection: 'column', gap: 64, marginTop: 64}}>
          <div
            data-final-knowledge="forced-illegal"
            style={{...enterX(frame, 14, 44), borderLeft: `10px solid ${PALETTE.garnet}`, backgroundColor: 'rgba(156,64,56,0.07)', padding: '38px 32px', fontSize: 26, fontWeight: 700}}
          >
            <Plaque color={PALETTE.garnet} text="不合法" />
            <span style={{marginLeft: 18}}>
              战争或武装冲突 ·
              <Under color={PALETTE.garnet}>干涉</Under>
              （违反不干涉内政原则）
            </span>
          </div>
          <div
            data-final-knowledge="blockade-un-council"
            style={{...enterX(frame, 48, 44), borderLeft: `10px solid ${PALETTE.gold}`, backgroundColor: 'rgba(168,129,47,0.08)', padding: '38px 32px', fontSize: 26, fontWeight: 700}}
          >
            <Plaque color={PALETTE.gold} text="有条件合法" />
            <span style={{marginLeft: 18}}>
              平时封锁 —— 只有以
              <Ink color={PALETTE.goldSoft}>安理会决议</Ink>
              为基础并采取行动才合法
            </span>
          </div>
          <div
            data-final-knowledge="retorsion-reprisal"
            style={{...enterX(frame, 82, 44), borderLeft: `10px solid ${PALETTE.teal}`, backgroundColor: 'rgba(47,111,106,0.07)', padding: '38px 32px'}}
          >
            <Plaque color={PALETTE.teal} text="不违法但不提倡" />
            <div style={{display: 'flex', gap: 22, marginTop: 14}}>
              <div style={{...enter(frame, 112), flex: 1, border: `2px solid ${PALETTE.teal}`, backgroundColor: PALETTE.card, padding: '22px 22px', fontSize: 24, fontWeight: 700}}>
                反报：针对
                <Under color={PALETTE.teal}>不违法</Under>
                行为的对等反措施
              </div>
              <div style={{...enter(frame, 132), flex: 1, border: `2px solid ${PALETTE.garnet}`, backgroundColor: PALETTE.card, padding: '22px 22px', fontSize: 24, fontWeight: 700}}>
                报复：针对
                <Under color={PALETTE.garnet}>违法</Under>
                行为的对等反措施
              </div>
            </div>
          </div>
        </div>
        <div style={{...enter(frame, 168), marginTop: 96, display: 'flex', justifyContent: 'center', whiteSpace: 'nowrap'}}>
          <GoldStamp delay={168} frame={frame} color={PALETTE.teal} text="反报与报复的分界：先行为是否违法" />
        </div>
      </div>
    </BenchShell>
  );
};

export const PoliticalMeansScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="negotiate-pair" data-final-knowledge="mediate-pair" data-final-knowledge="inquire-pair" */
  const frame = useCurrentFrame();
  const pairs = [
    {a: '谈判', b: '协商', diff: '谈判仅限争端当事国；协商可邀请中立国参加', id: 'negotiate-pair', color: PALETTE.teal, delay: 44},
    {a: '斡旋', b: '调停', diff: '斡旋只促使谈判；调停参与谈判并提出解决方案', id: 'mediate-pair', color: PALETTE.gold, delay: 84},
    {a: '调查', b: '和解', diff: '调查只查事实问题；和解解决事实 + 法律双重问题', id: 'inquire-pair', color: PALETTE.garnet, delay: 124},
  ];
  return (
    <BenchShell code={1} station={1} title="政治性解决方式：三对方法">
      <div
        data-layout="three-method-pair-ledger"
        data-visual-anchor="role-pair"
        data-visual-grammar="three-method-pairs-line-the-bench,each-pair-splits-on-third-party-degree"
        data-text-treatments="label-block,thin-underline,soft-highlight"
        data-focal-rule="third-party-involvement-degree-distinguishes-each-pair"
        data-focal-channels="contrast,spatial,enclosure"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{display: 'flex', flexDirection: 'column', gap: 70, marginTop: 90}}>
          {pairs.map((pair) => (
            <div
              key={pair.id}
              data-final-knowledge={pair.id}
              style={{...enterX(frame, 14 + pairs.indexOf(pair) * 32, 46), borderLeft: `10px solid ${pair.color}`, backgroundColor: PALETTE.card, padding: '44px 34px'}}
            >
              <div style={{display: 'flex', alignItems: 'center', gap: 20}}>
                <span style={{fontSize: 36, fontWeight: 800, color: pair.color}}>{pair.a}</span>
                <span style={{fontSize: 20, color: PALETTE.muted}}>VS</span>
                <span style={{fontSize: 36, fontWeight: 800, color: pair.color}}>{pair.b}</span>
                <span style={{marginLeft: 'auto', fontSize: 26, fontWeight: 700, textAlign: 'right'}}>{pair.diff}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{...enter(frame, 180), marginTop: 120, display: 'flex', justifyContent: 'center', whiteSpace: 'nowrap'}}>
          <GoldStamp delay={180} frame={frame} color={PALETTE.gold} text="斡旋调停看介入程度 · 调查看解决事项范围 · 均不承担法律后果" />
        </div>
      </div>
    </BenchShell>
  );
};

export const IcjJurisdictionScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="icj-contentious" data-final-knowledge="icj-advisory" data-final-knowledge="ad-hoc-judge-rule" */
  const frame = useCurrentFrame();
  return (
    <BenchShell code={2} station={2} title="国际法院：诉讼管辖与咨询管辖">
      <div
        data-layout="dual-jurisdiction-benches"
        data-visual-anchor="role-pair"
        data-visual-grammar="contentious-and-advisory-benches-split-the-court,ad-hoc-judges-replace-nationality-recusal"
        data-text-treatments="label-block,thin-underline,soft-highlight"
        data-focal-rule="only-pre-tenure-involvement-forces-recusal"
        data-focal-channels="contrast,enclosure,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{display: 'flex', gap: 24, marginTop: 18}}>
          <div
            data-final-knowledge="icj-contentious"
            style={{...enter(frame, 14), flex: 1.35, border: `3px solid ${PALETTE.teal}`, borderTop: `14px solid ${PALETTE.teal}`, backgroundColor: PALETTE.card, padding: '44px 34px', fontSize: 25, lineHeight: 1.85}}
          >
            <div style={{fontSize: 27, fontWeight: 800, color: PALETTE.teal, display: 'flex', alignItems: 'center', gap: 12}}>
              <Scale size={26} color={PALETTE.teal} />
              诉讼管辖 · 六要点
            </div>
            <div style={{marginTop: 14}}>
              主体：
              <Ink color={PALETTE.tealSoft}>国家</Ink>
              ·
              <Under color={PALETTE.teal}>双方同意</Under>
              ；判决有拘束力
              <br />
              执行权在
              <Ink color={PALETTE.goldSoft}>安理会</Ink>
              <br />
              不适用
              <Under color={PALETTE.garnet}>国籍回避</Under>
              ，适用
              <Ink color={PALETTE.tealSoft}>"专案法官"制度</Ink>
              <br />
              唯一回避理由：
              <Under color={PALETTE.garnet}>就任前曾参与该争端</Under>
            </div>
          </div>
          <div
            data-final-knowledge="icj-advisory"
            style={{...enter(frame, 48), flex: 1, border: `3px solid ${PALETTE.gold}`, borderTop: `14px solid ${PALETTE.gold}`, backgroundColor: PALETTE.card, padding: '44px 34px', fontSize: 25, lineHeight: 1.85}}
          >
            <div style={{fontSize: 27, fontWeight: 800, color: PALETTE.gold, display: 'flex', alignItems: 'center', gap: 12}}>
              <Gavel size={26} color={PALETTE.gold} />
              咨询管辖 · 两要点
            </div>
            <div style={{marginTop: 14}}>
              主体：
              <Ink color={PALETTE.goldSoft}>联合国机构</Ink>
              （秘书长不行）
              <br />
              咨询意见
              <Under color={PALETTE.garnet}>没有拘束力</Under>
            </div>
          </div>
        </div>
        <div
          data-final-knowledge="ad-hoc-judge-rule"
          style={{...enter(frame, 96), marginTop: 64, border: `3px solid ${PALETTE.garnet}`, backgroundColor: 'rgba(156,64,56,0.06)', padding: '38px 34px', fontSize: 25, fontWeight: 700, lineHeight: 1.8}}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 12, fontSize: 24, fontWeight: 800, color: PALETTE.garnet}}>
            <ShieldAlert size={24} color={PALETTE.garnet} />
            国籍不回避 · 专案法官
          </div>
          <div style={{marginTop: 10}}>
            法官中有当事国公民 →
            <Ink color={PALETTE.garnetSoft}>另一当事国可申请增加本国国籍专案法官</Ink>
            ；只有"就任前曾参与争端"才须回避
          </div>
        </div>
      </div>
    </BenchShell>
  );
};

export const TribunalComparisonScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="arbitration-court" data-final-knowledge="itlos-three-points" data-final-knowledge="sea-dispute-mirror" */
  const frame = useCurrentFrame();
  return (
    <BenchShell code={3} station={3} title="仲裁与国际海洋法法庭">
      <div
        data-layout="arbitration-and-tribunal-benches"
        data-visual-anchor="flow-path"
        data-visual-grammar="arbitration-and-tribunal-bench-beside-the-court,sea-disputes-mirror-between-two-forums"
        data-text-treatments="label-block,thin-underline,soft-highlight"
        data-focal-rule="tribunal-only-hears-sea-disputes-but-not-exclusively"
        data-focal-channels="contrast,enclosure,connector"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{display: 'flex', gap: 24, marginTop: 18}}>
          <div
            data-final-knowledge="arbitration-court"
            style={{...enter(frame, 14), flex: 1, border: `3px solid ${PALETTE.gold}`, borderTop: `14px solid ${PALETTE.gold}`, backgroundColor: PALETTE.card, padding: '48px 34px', fontSize: 25, lineHeight: 1.9}}
          >
            <div style={{fontSize: 27, fontWeight: 800, color: PALETTE.gold, display: 'flex', alignItems: 'center', gap: 12}}>
              <Scale size={26} color={PALETTE.gold} />
              仲裁 · 国际常设仲裁法院
            </div>
            <div style={{marginTop: 14}}>
              <Ink color={PALETTE.goldSoft}>1900 年 · 海牙</Ink>
              —— 法律解决方式之一
            </div>
          </div>
          <div
            data-final-knowledge="itlos-three-points"
            style={{...enter(frame, 48), flex: 1.4, border: `3px solid ${PALETTE.teal}`, borderTop: `14px solid ${PALETTE.teal}`, backgroundColor: PALETTE.card, padding: '48px 34px', fontSize: 25, lineHeight: 1.95}}
          >
            <div style={{fontSize: 27, fontWeight: 800, color: PALETTE.teal, display: 'flex', alignItems: 'center', gap: 12}}>
              <Waves size={26} color={PALETTE.teal} />
              国际海洋法法庭 · 三要点
            </div>
            <div style={{marginTop: 14}}>
              只能审理
              <Under color={PALETTE.teal}>海洋争端</Under>
              <br />
              主体：国家 +
              <Ink color={PALETTE.tealSoft}>自然人和法人</Ink>
              <br />
              <Under color={PALETTE.teal}>双方同意</Under>
              方能管辖
            </div>
          </div>
        </div>
        <div
          data-final-knowledge="sea-dispute-mirror"
          style={{...enter(frame, 100), marginTop: 84, border: `3px solid ${PALETTE.garnet}`, backgroundColor: 'rgba(156,64,56,0.06)', padding: '34px 30px', fontSize: 26, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18, whiteSpace: 'nowrap'}}
        >
          <Search size={26} color={PALETTE.garnet} />
          海洋法法庭
          <span style={{color: PALETTE.garnet}}>只能审</span>
          海洋争端；但海洋争端
          <span style={{color: PALETTE.garnet}}>并非只能</span>
          由它审 —— 国际法院也有权审理
        </div>
        <div style={{...enter(frame, 146), marginTop: 90, display: 'flex', justifyContent: 'center', whiteSpace: 'nowrap'}}>
          <GoldStamp delay={146} frame={frame} color={PALETTE.teal} text="法律解决：仲裁 · 国际法院（诉讼/咨询）· 海洋法法庭" />
        </div>
      </div>
    </BenchShell>
  );
};

export const DisputeSettlement = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: PALETTE.marble, overflow: 'hidden'}}
  >
    <TimelineSequence name="01-coercive-means" {...SCENES.coerciveMeans}>
      <CoerciveMeansScene />
    </TimelineSequence>
    <TimelineSequence name="02-political-means" {...SCENES.politicalMeans}>
      <PoliticalMeansScene />
    </TimelineSequence>
    <TimelineSequence name="03-icj-jurisdiction" {...SCENES.icjJurisdiction}>
      <IcjJurisdictionScene />
    </TimelineSequence>
    <TimelineSequence name="04-tribunal-comparison" {...SCENES.tribunalComparison}>
      <TribunalComparisonScene />
    </TimelineSequence>
  </AbsoluteFill>
);
