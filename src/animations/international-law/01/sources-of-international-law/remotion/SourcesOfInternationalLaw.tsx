import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {
  ArrowDown,
  ArrowLeftRight,
  ArrowRight,
  Banknote,
  Building2,
  FileText,
  Gavel,
  Handshake,
  Landmark,
  ListX,
  Plane,
  Repeat,
  Scale,
  ScrollText,
  Search,
  ShieldBan,
  Stamp as StampIcon,
  User,
  X,
} from 'lucide-react';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {PALETTE, SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const enter = (frame: number, delay: number, y = 24): CSSProperties => ({
  opacity: interpolate(frame, [delay, delay + 16], [0, 1], CLAMP),
  translate: `0px ${interpolate(frame, [delay, delay + 22], [y, 0], {...CLAMP, easing: Easing.out(Easing.cubic)})}px`,
});

const enterX = (frame: number, delay: number, x = 56): CSSProperties => ({
  opacity: interpolate(frame, [delay, delay + 16], [0, 1], CLAMP),
  translate: `${interpolate(frame, [delay, delay + 24], [x, 0], {...CLAMP, easing: Easing.out(Easing.cubic)})}px 0px`,
});

const EYEBROW = 'INTERNATIONAL LAW · FOLIO';

const STATIONS = ['01', '02', '03', '04', '05'];
const STATION_CODE = ['壹', '贰', '叁', '肆', '伍'];

const spineTop = (station: number) => 262 + station * 104;

const Spine = ({station}: {readonly station: number}) => (
  <div style={{position: 'absolute', left: 56, top: 210, width: 116, height: 640}}>
    <div style={{position: 'absolute', left: 57, top: 30, width: 2, height: 512, backgroundColor: PALETTE.line}} />
    {STATIONS.map((code, index) => {
      const active = index === station;
      return (
        <div
          key={code}
          style={{
            position: 'absolute',
            left: 26,
            top: spineTop(index) - 210,
            width: 64,
            height: 64,
            border: `2px solid ${active ? PALETTE.seal : PALETTE.line}`,
            backgroundColor: active ? PALETTE.seal : PALETTE.paper,
            display: 'grid',
            placeItems: 'center',
            color: active ? PALETTE.paper : PALETTE.muted,
          }}
        >
          <span className="font-animation-mono" style={{fontSize: 18, fontWeight: 700, letterSpacing: 1}}>{code}</span>
        </div>
      );
    })}
  </div>
);

const FolioShell = ({
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
      backgroundColor: PALETTE.parchment,
      backgroundImage:
        'radial-gradient(circle at 14% 0%, rgba(150,118,46,0.12), transparent 34%), linear-gradient(rgba(34,48,63,0.045) 1px, transparent 1px)',
      backgroundSize: 'auto, 100% 88px',
      overflow: 'hidden',
    }}
  >
    <div style={{position: 'absolute', inset: 22, border: `3px solid ${PALETTE.line}`}} />
    <div style={{position: 'absolute', inset: 30, border: '1px solid rgba(34,48,63,0.28)'}} />
    <header style={{position: 'absolute', left: 64, right: 64, top: 44, height: 108, display: 'flex', alignItems: 'center', gap: 26}}>
      <div
        style={{
          width: 76,
          height: 76,
          border: `3px solid ${PALETTE.seal}`,
          borderRadius: 6,
          display: 'grid',
          placeItems: 'center',
          color: PALETTE.seal,
          backgroundColor: PALETTE.paper,
        }}
      >
        <span style={{fontSize: 30, fontWeight: 800}}>{STATION_CODE[code]}</span>
      </div>
      <h1 className="font-animation-title" style={{fontSize: 44, lineHeight: 1.12, margin: 0, fontWeight: 800}}>
        {title}
      </h1>
      <div style={{marginLeft: 'auto', textAlign: 'right'}}>
        <div style={{fontSize: 16, fontWeight: 700, letterSpacing: 4, color: PALETTE.muted}}>{EYEBROW}</div>
        <div style={{fontSize: 18, color: PALETTE.muted, marginTop: 6}}>三国法 · 杨帆</div>
      </div>
    </header>
    <Spine station={station} />
    <main style={{position: 'absolute', left: 210, right: 64, top: 190, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const LabelBlock = ({color, soft, text}: {readonly color: string; readonly soft: string; readonly text: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 10, backgroundColor: soft, borderLeft: `6px solid ${color}`, padding: '4px 14px'}}>
    <span style={{fontSize: 22, fontWeight: 800, color}}>{text}</span>
  </span>
);

const SoftHighlight = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{backgroundColor: color, padding: '2px 10px', fontWeight: 800}}>{children}</span>
);

const ThinUnderline = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{boxShadow: `inset 0 -3px ${color}`, paddingBottom: 2, fontWeight: 700}}>{children}</span>
);

const SealStamp = ({
  color = PALETTE.seal,
  delay,
  frame,
  rotate = -6,
  size = 24,
  text,
}: {
  readonly color?: string;
  readonly delay: number;
  readonly frame: number;
  readonly rotate?: number;
  readonly size?: number;
  readonly text: string;
}) => (
  <span
    style={{
      ...enter(frame, delay, 10),
      display: 'inline-block',
      border: `3px solid ${color}`,
      borderRadius: 6,
      color,
      padding: '6px 18px',
      fontSize: size,
      fontWeight: 800,
      letterSpacing: 3,
      rotate: `${rotate}deg`,
      backgroundColor: 'rgba(251,248,240,0.85)',
    }}
  >
    {text}
  </span>
);

const ArrowX = ({
  color,
  delay,
  frame,
  left,
  top,
  width,
}: {
  readonly color: string;
  readonly delay: number;
  readonly frame: number;
  readonly left: number;
  readonly top: number;
  readonly width: number;
}) => {
  const progress = interpolate(frame, [delay, delay + 22], [0, 1], {...CLAMP, easing: Easing.out(Easing.cubic)});
  return (
    <div style={{position: 'absolute', left, top, width, height: 40}}>
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 17,
          width: Math.max(0, width - 26),
          height: 5,
          backgroundColor: color,
          scale: `${progress} 1`,
          transformOrigin: 'left center',
        }}
      />
      <ArrowRight size={30} strokeWidth={2.4} style={{position: 'absolute', right: 0, top: 4, color, opacity: interpolate(progress, [0.8, 1], [0, 1], CLAMP)}} />
    </div>
  );
};

const ArrowDownY = ({
  color,
  delay,
  frame,
  height,
  left,
  top,
}: {
  readonly color: string;
  readonly delay: number;
  readonly frame: number;
  readonly height: number;
  readonly left: number;
  readonly top: number;
}) => {
  const progress = interpolate(frame, [delay, delay + 22], [0, 1], {...CLAMP, easing: Easing.out(Easing.cubic)});
  return (
    <div style={{position: 'absolute', left, top, width: 40, height}}>
      <div
        style={{
          position: 'absolute',
          left: 17,
          top: 0,
          width: 5,
          height: Math.max(0, height - 26),
          backgroundColor: color,
          scale: `1 ${progress}`,
          transformOrigin: 'center top',
        }}
      />
      <ArrowDown size={30} strokeWidth={2.4} style={{position: 'absolute', left: 4, bottom: 0, color, opacity: interpolate(progress, [0.8, 1], [0, 1], CLAMP)}} />
    </div>
  );
};

export const SourcesScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="sources-treaty" data-final-knowledge="sources-custom" data-final-knowledge="sources-principle" data-final-knowledge="sources-only-three" data-final-knowledge="exclusion-precedent" data-final-knowledge="exclusion-doctrine" data-final-knowledge="exclusion-resolution" data-final-knowledge="exclusion-domestic" */
  const frame = useCurrentFrame();
  const cards = [
    {title: '国际条约', condition: '只约束缔约国', chip: '成文化', icon: FileText, color: PALETTE.navy, soft: PALETTE.navySoft, delay: 34},
    {title: '国际习惯', condition: '原则上约束所有国际法主体', chip: '非成文化', icon: Repeat, color: PALETTE.seal, soft: PALETTE.sealSoft, delay: 48},
    {title: '一般法律原则', condition: '约束所有国际法主体', chip: '非成文化', icon: Scale, color: PALETTE.seal, soft: PALETTE.sealSoft, delay: 62},
  ];
  const exclusions = [
    {text: '司法判例', id: 'exclusion-precedent', delay: 88},
    {text: '学说', id: 'exclusion-doctrine', delay: 100},
    {text: '国际组织决议', id: 'exclusion-resolution', delay: 112},
    {text: '一国涉外法律', id: 'exclusion-domestic', delay: 124},
  ];
  return (
    <FolioShell code={0} station={0} title="渊源只有三项：条约、习惯、一般法律原则">
      <div
        data-layout="three-source-vault-with-exclusion-strip"
        data-visual-anchor="boundary"
        data-visual-grammar="three-sources-enter-the-gold-vault,rejected-materials-stay-behind-the-dashed-boundary"
        data-text-treatments="label-block,soft-highlight,external-negation"
        data-focal-rule="only-three-sources-of-international-law"
        data-focal-channels="enclosure,contrast,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 20,
            width: 860,
            height: 640,
            border: `3px double ${PALETTE.gold}`,
            backgroundColor: PALETTE.paper,
            padding: '26px 34px',
            ...enter(frame, 14),
          }}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 14, marginBottom: 26}}>
            <Landmark size={30} color={PALETTE.gold} />
            <span style={{fontSize: 32, fontWeight: 800, color: PALETTE.gold}}>国际法的渊源 · 仅此三项</span>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: 24}}>
            {cards.map((card) => (
              <div
                key={card.title}
                data-final-knowledge={card.title === '国际条约' ? 'sources-treaty' : card.title === '国际习惯' ? 'sources-custom' : 'sources-principle'}
                style={{
                  ...enter(frame, card.delay),
                  display: 'flex',
                  alignItems: 'center',
                  gap: 20,
                  borderLeft: `10px solid ${card.color}`,
                  backgroundColor: card.soft,
                  padding: '22px 26px',
                }}
              >
                <card.icon size={34} color={card.color} />
                <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                  <span style={{fontSize: 32, fontWeight: 800}}>{card.title}</span>
                  <span style={{fontSize: 23, color: PALETTE.ink}}>
                    {card.title === '国际条约' ? (
                      <>
                        只约束
                        <ThinUnderline color={PALETTE.navy}>缔约国</ThinUnderline>
                      </>
                    ) : (
                      card.condition
                    )}
                  </span>
                </div>
                <span style={{marginLeft: 'auto', border: `2px solid ${card.color}`, color: card.color, padding: '5px 16px', fontSize: 22, fontWeight: 800}}>{card.chip}</span>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            left: 950,
            top: 20,
            width: 696,
            height: 640,
            border: `3px dashed ${PALETTE.seal}`,
            backgroundColor: 'rgba(178,58,46,0.05)',
            padding: '26px 34px',
            ...enter(frame, 74),
          }}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24}}>
            <X size={30} color={PALETTE.seal} strokeWidth={3} />
            <span style={{fontSize: 30, fontWeight: 800, color: PALETTE.seal}}>不是渊源 · 排除区</span>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: 22}}>
            {exclusions.map((item) => (
              <div
                key={item.id}
                data-final-knowledge={item.id}
                style={{
                  ...enterX(frame, item.delay, 40),
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  backgroundColor: PALETTE.paper,
                  border: `2px solid ${PALETTE.line}`,
                  padding: '18px 24px',
                }}
              >
                <X size={24} color={PALETTE.seal} strokeWidth={3.4} />
                <span style={{fontSize: 25, fontWeight: 700, color: PALETTE.ink}}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div
          data-final-knowledge="sources-only-three"
          style={{
            ...enter(frame, 150),
            position: 'absolute',
            left: 0,
            top: 676,
            width: 1646,
            height: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
            backgroundColor: PALETTE.goldSoft,
            borderTop: `3px solid ${PALETTE.gold}`,
            whiteSpace: 'nowrap',
          }}
        >
          <span style={{fontSize: 26, fontWeight: 800}}>
            渊源只包括三项：<SoftHighlight color="rgba(150,118,46,0.22)">国际条约 · 国际习惯 · 一般法律原则</SoftHighlight>
          </span>
        </div>
      </div>
    </FolioShell>
  );
};

export const CustomFormationScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="custom-practice" data-final-knowledge="custom-forms" data-final-knowledge="custom-binding" data-final-knowledge="objector-exception" data-final-knowledge="objector-start" data-final-knowledge="objector-consistent" data-final-knowledge="objector-both" data-final-knowledge="evidence-strip" */
  const frame = useCurrentFrame();
  return (
    <FolioShell code={1} station={1} title="国际习惯：反复实践与持续反对者">
      <div
        data-layout="practice-loop-into-binding-flow"
        data-visual-anchor="flow-path"
        data-visual-grammar="repeated-practice-crystallizes-into-custom,persistent-objector-gate-requires-both-keys"
        data-text-treatments="thin-underline,label-block,stamp"
        data-focal-rule="persistent-objector-requires-start-and-consistency"
        data-focal-channels="connector,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <div
          data-final-knowledge="custom-practice"
          style={{
            ...enter(frame, 14),
            position: 'absolute',
            left: 0,
            top: 40,
            width: 360,
            height: 420,
            border: `3px solid ${PALETTE.navy}`,
            backgroundColor: PALETTE.paper,
            padding: '24px 26px',
          }}
        >
          <Repeat size={30} color={PALETTE.navy} />
          <div style={{fontSize: 30, fontWeight: 800, marginTop: 10}}>反复实践</div>
          <div style={{fontSize: 23, color: PALETTE.muted, marginTop: 8}}>各国长期、反复、一致的行为</div>
          <div style={{position: 'relative', marginTop: 22, height: 200}}>
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                style={{
                  ...enter(frame, 34 + index * 14, 14),
                  position: 'absolute',
                  left: index * 22,
                  top: 130 - index * 38,
                  width: 220,
                  height: 52,
                  border: `2px solid ${PALETTE.navy}`,
                  backgroundColor: index === 3 ? PALETTE.navySoft : PALETTE.paper,
                  display: 'grid',
                  placeItems: 'center',
                  fontSize: 21,
                  fontWeight: 700,
                  color: PALETTE.navy,
                }}
              >
                国家实践 {String(index + 1).padStart(2, '0')}
              </div>
            ))}
          </div>
        </div>
        <ArrowX color={PALETTE.gold} delay={92} frame={frame} left={368} top={230} width={62} />
        <div
          data-final-knowledge="custom-forms"
          style={{
            ...enter(frame, 108),
            position: 'absolute',
            left: 446,
            top: 120,
            width: 330,
            height: 260,
            border: `3px solid ${PALETTE.gold}`,
            backgroundColor: PALETTE.goldSoft,
            padding: '24px 26px',
          }}
        >
          <ScrollText size={30} color={PALETTE.gold} />
          <div style={{fontSize: 30, fontWeight: 800, marginTop: 10}}>形成国际习惯</div>
          <div style={{marginTop: 14}}>
            <ThinUnderline color={PALETTE.gold}>非成文化</ThinUnderline>
          </div>
          <div style={{fontSize: 22, color: PALETTE.ink, marginTop: 14}}>由实践中逐渐生成</div>
        </div>
        <ArrowX color={PALETTE.gold} delay={128} frame={frame} left={784} top={230} width={62} />
        <div
          style={{
            ...enter(frame, 146),
            position: 'absolute',
            left: 862,
            top: 20,
            width: 784,
            height: 560,
            border: `3px solid ${PALETTE.seal}`,
            backgroundColor: PALETTE.paper,
            padding: '24px 30px',
          }}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
            <StampIcon size={30} color={PALETTE.seal} />
            <span style={{fontSize: 32, fontWeight: 800}}>一旦形成 → 拘束力</span>
          </div>
          <div
            data-final-knowledge="custom-binding"
            style={{marginTop: 16, backgroundColor: PALETTE.sealSoft, padding: '14px 20px', fontSize: 25, fontWeight: 800}}
          >
            原则上约束所有国际法主体
          </div>
          <div data-final-knowledge="objector-exception" style={{marginTop: 22}}>
            <LabelBlock color={PALETTE.seal} soft={PALETTE.sealSoft} text="例外 · 持续的反对者除外" />
          </div>
          <div style={{display: 'flex', gap: 24, marginTop: 20}}>
            <div
              data-final-knowledge="objector-start"
              style={{...enter(frame, 196), flex: 1, border: `2px solid ${PALETTE.navy}`, backgroundColor: PALETTE.navySoft, padding: '16px 20px'}}
            >
              <div style={{fontSize: 22, fontWeight: 800, color: PALETTE.navy}}>要件一</div>
              <div style={{fontSize: 25, marginTop: 8}}>
                <ThinUnderline color={PALETTE.navy}>自始</ThinUnderline> 反对
              </div>
            </div>
            <div
              data-final-knowledge="objector-consistent"
              style={{...enter(frame, 216), flex: 1, border: `2px solid ${PALETTE.navy}`, backgroundColor: PALETTE.navySoft, padding: '16px 20px'}}
            >
              <div style={{fontSize: 22, fontWeight: 800, color: PALETTE.navy}}>要件二</div>
              <div style={{fontSize: 25, marginTop: 8}}>
                <ThinUnderline color={PALETTE.navy}>持续一贯</ThinUnderline> 地反对
              </div>
            </div>
          </div>
          <div data-final-knowledge="objector-both" style={{marginTop: 24}}>
            <SealStamp delay={244} frame={frame} text="两项同时具备 · 缺一不可" />
          </div>
        </div>
        <div
          data-final-knowledge="evidence-strip"
          style={{
            ...enter(frame, 280),
            position: 'absolute',
            left: 0,
            top: 620,
            width: 1646,
            height: 90,
            border: `2px solid ${PALETTE.gold}`,
            borderLeft: `10px solid ${PALETTE.gold}`,
            backgroundColor: PALETTE.paper,
            display: 'flex',
            alignItems: 'center',
            gap: 22,
            padding: '0 30px',
          }}
        >
          <Search size={28} color={PALETTE.gold} />
          <span style={{fontSize: 26, fontWeight: 800}}>
            习惯存在的证据：定要拿出
            <SoftHighlight color="rgba(150,118,46,0.22)">“官方”</SoftHighlight>
            的文件和实践
          </span>
          <span style={{fontSize: 22, color: PALETTE.muted, marginLeft: 'auto'}}>国家内部 · 国家间 · 国际组织和机构</span>
        </div>
      </div>
    </FolioShell>
  );
};

export const CustomVsConventionScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="habit-owner" data-final-knowledge="habit-force" data-final-knowledge="habit-exception" data-final-knowledge="comparison-axis" data-final-knowledge="convention-owner" data-final-knowledge="convention-force" data-final-knowledge="convention-source" */
  const frame = useCurrentFrame();
  return (
    <FolioShell code={2} station={2} title="国际习惯 VS 国际惯例">
      <div
        data-layout="split-ledger-comparison-lane"
        data-visual-anchor="role-pair"
        data-visual-grammar="two-ledgers-aligned-on-a-shared-axis,binding-force-diverges-at-the-practice-owner"
        data-text-treatments="soft-highlight,thin-underline,label-block"
        data-focal-rule="practice-owner-decides-binding-force"
        data-focal-channels="contrast,spatial,enclosure"
        style={{position: 'absolute', inset: 0}}
      >
        <div
          style={{
            ...enter(frame, 14),
            position: 'absolute',
            left: 0,
            top: 40,
            width: 780,
            height: 560,
            border: `3px solid ${PALETTE.navy}`,
            borderTop: `12px solid ${PALETTE.navy}`,
            backgroundColor: PALETTE.paper,
            padding: '26px 32px',
          }}
        >
          <div style={{fontSize: 34, fontWeight: 800, color: PALETTE.navy}}>国际习惯</div>
          <div data-final-knowledge="habit-owner" style={{...enter(frame, 44), display: 'flex', alignItems: 'center', gap: 14, marginTop: 24}}>
            <LabelBlock color={PALETTE.navy} soft={PALETTE.navySoft} text="实践主体" />
            <span style={{fontSize: 28, fontWeight: 800}}>国家</span>
          </div>
          <div style={{fontSize: 22, color: PALETTE.muted, marginTop: 10}}>国家反复实践的产物</div>
          <div data-final-knowledge="habit-force" style={{...enter(frame, 76), marginTop: 30}}>
            <div style={{fontSize: 22, fontWeight: 700, color: PALETTE.muted}}>约束力</div>
            <div style={{marginTop: 8, fontSize: 34, fontWeight: 800}}>
              <SoftHighlight color="rgba(51,86,111,0.18)">强制性</SoftHighlight>
            </div>
          </div>
          <div data-final-knowledge="habit-exception" style={{...enter(frame, 106), marginTop: 26, fontSize: 24}}>
            仅
            <ThinUnderline color={PALETTE.navy}>持续的反对者</ThinUnderline>
            除外
          </div>
        </div>
        <div
          data-final-knowledge="comparison-axis"
          style={{
            ...enter(frame, 124, 18),
            position: 'absolute',
            left: 796,
            top: 280,
            width: 54,
            height: 54,
            borderRadius: 27,
            backgroundColor: PALETTE.gold,
            color: PALETTE.paper,
            display: 'grid',
            placeItems: 'center',
            fontSize: 22,
            fontWeight: 800,
          }}
        >
          VS
        </div>
        <div style={{position: 'absolute', left: 822, top: 90, width: 2, height: 440, backgroundColor: PALETTE.line}} />
        <div
          style={{
            ...enter(frame, 30),
            position: 'absolute',
            left: 866,
            top: 40,
            width: 780,
            height: 560,
            border: `3px solid ${PALETTE.seal}`,
            borderTop: `12px solid ${PALETTE.seal}`,
            backgroundColor: PALETTE.paper,
            padding: '26px 32px',
          }}
        >
          <div style={{fontSize: 34, fontWeight: 800, color: PALETTE.seal}}>国际惯例</div>
          <div data-final-knowledge="convention-owner" style={{...enter(frame, 58), display: 'flex', alignItems: 'center', gap: 14, marginTop: 24}}>
            <LabelBlock color={PALETTE.seal} soft={PALETTE.sealSoft} text="实践主体" />
            <span style={{fontSize: 28, fontWeight: 800}}>私法主体</span>
          </div>
          <div style={{fontSize: 22, color: PALETTE.muted, marginTop: 10}}>私法主体反复实践的产物</div>
          <div data-final-knowledge="convention-force" style={{...enter(frame, 90), marginTop: 30}}>
            <div style={{fontSize: 22, fontWeight: 700, color: PALETTE.muted}}>约束力</div>
            <div style={{marginTop: 8, fontSize: 34, fontWeight: 800}}>
              <SoftHighlight color="rgba(178,58,46,0.16)">任意性</SoftHighlight>
            </div>
          </div>
          <div data-final-knowledge="convention-source" style={{...enter(frame, 120), marginTop: 26, fontSize: 24, display: 'flex', alignItems: 'center', gap: 12}}>
            <Handshake size={26} color={PALETTE.seal} />
            <span>
              约束力来自
              <ThinUnderline color={PALETTE.seal}>当事人选用</ThinUnderline>
            </span>
          </div>
        </div>
        <div
          style={{
            ...enter(frame, 152),
            position: 'absolute',
            left: 0,
            top: 640,
            width: 1646,
            height: 60,
            display: 'grid',
            placeItems: 'center',
            backgroundColor: PALETTE.goldSoft,
            borderTop: `3px solid ${PALETTE.gold}`,
            fontSize: 26,
            fontWeight: 800,
          }}
        >
          分界在实践主体：国家 → 强制性，私法主体 → 任意性
        </div>
      </div>
    </FolioShell>
  );
};

export const CounterSanctionsScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="decree-desk" data-final-knowledge="target-person" data-final-knowledge="target-org" data-final-knowledge="linked-person" data-final-knowledge="linked-org" data-final-knowledge="measure-exit" data-final-knowledge="measure-property" data-final-knowledge="measure-trade" data-final-knowledge="measure-other" data-final-knowledge="measure-combo" */
  const frame = useCurrentFrame();
  return (
    <FolioShell code={3} station={3} title="反外国制裁法：决定、对象与措施">
      <div
        data-layout="decree-fork-into-measure-cards"
        data-visual-anchor="document-fork"
        data-visual-grammar="decree-issues-from-the-state-council-desk,linked-parties-fork-below-the-target,three-measure-cards-stack-in-any-combination"
        data-text-treatments="label-block,stamp,soft-highlight"
        data-focal-rule="counter-measures-combine-without-mutual-exclusion"
        data-focal-channels="connector,enclosure,contrast"
        style={{position: 'absolute', inset: 0}}
      >
        <div
          data-final-knowledge="decree-desk"
          style={{
            ...enter(frame, 14),
            position: 'absolute',
            left: 0,
            top: 10,
            width: 560,
            height: 130,
            border: `3px solid ${PALETTE.navy}`,
            backgroundColor: PALETTE.paper,
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            padding: '0 28px',
          }}
        >
          <Building2 size={38} color={PALETTE.navy} />
          <div>
            <div style={{fontSize: 22, fontWeight: 700, color: PALETTE.muted}}>决定机关</div>
            <div style={{fontSize: 30, fontWeight: 800}}>国务院有关部门</div>
          </div>
          <div style={{marginLeft: 'auto'}}>
            <SealStamp delay={56} frame={frame} size={20} text="最终决定" />
          </div>
        </div>
        <div style={{...enter(frame, 84), position: 'absolute', left: 620, top: 34, fontSize: 24, fontWeight: 800, color: PALETTE.gold}}>反制对象 ↓ 谁可以被列入</div>
        <ArrowDownY color={PALETTE.navy} delay={96} frame={frame} height={54} left={240} top={144} />
        <div
          data-final-knowledge="target-person"
          style={{
            ...enter(frame, 112),
            position: 'absolute',
            left: 0,
            top: 210,
            width: 780,
            height: 300,
            border: `3px solid ${PALETTE.navy}`,
            borderTop: `12px solid ${PALETTE.navy}`,
            backgroundColor: PALETTE.paper,
            padding: '20px 28px',
          }}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
            <User size={30} color={PALETTE.navy} />
            <span style={{fontSize: 30, fontWeight: 800, color: PALETTE.navy}}>对象 · 个人</span>
          </div>
          <div data-final-knowledge="linked-person" style={{...enter(frame, 156), marginTop: 18, fontSize: 23, display: 'flex', flexDirection: 'column', gap: 12}}>
            <span>▸ 其<SoftHighlight color="rgba(51,86,111,0.18)">配偶和直系亲属</SoftHighlight></span>
            <span>▸ 其个人担任<ThinUnderline color={PALETTE.navy}>高级管理人员</ThinUnderline>的组织</span>
            <span>▸ 由其<ThinUnderline color={PALETTE.navy}>实际控制</ThinUnderline>或者参与设立、运营的组织</span>
          </div>
        </div>
        <ArrowDownY color={PALETTE.seal} delay={110} frame={frame} height={54} left={1230} top={144} />
        <div
          data-final-knowledge="target-org"
          style={{
            ...enter(frame, 128),
            position: 'absolute',
            left: 866,
            top: 210,
            width: 780,
            height: 300,
            border: `3px solid ${PALETTE.seal}`,
            borderTop: `12px solid ${PALETTE.seal}`,
            backgroundColor: PALETTE.paper,
            padding: '20px 28px',
          }}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
            <Building2 size={30} color={PALETTE.seal} />
            <span style={{fontSize: 30, fontWeight: 800, color: PALETTE.seal}}>对象 · 组织</span>
          </div>
          <div data-final-knowledge="linked-org" style={{...enter(frame, 172), marginTop: 18, fontSize: 23, display: 'flex', flexDirection: 'column', gap: 12}}>
            <span>▸ 其<SoftHighlight color="rgba(178,58,46,0.16)">高级管理人员</SoftHighlight>或者<SoftHighlight color="rgba(178,58,46,0.16)">实际控制人</SoftHighlight></span>
            <span>▸ 由其<ThinUnderline color={PALETTE.seal}>实际控制</ThinUnderline>或者参与设立、运营的组织</span>
          </div>
        </div>
        <div
          style={{
            ...enter(frame, 236),
            position: 'absolute',
            left: 0,
            top: 548,
            width: 1646,
            height: 176,
            border: `3px solid ${PALETTE.gold}`,
            backgroundColor: PALETTE.goldSoft,
            padding: '18px 28px',
          }}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 18}}>
            <span style={{fontSize: 28, fontWeight: 800, color: PALETTE.gold}}>反制措施</span>
            <span data-final-knowledge="measure-combo" style={{...enter(frame, 286), border: `3px solid ${PALETTE.seal}`, borderRadius: 6, color: PALETTE.seal, padding: '4px 16px', fontSize: 22, fontWeight: 800, letterSpacing: 2, rotate: '-4deg', backgroundColor: PALETTE.paper}}>
              可单独或并用
            </span>
            <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 22, fontWeight: 700, color: PALETTE.seal}}>
              <X size={20} strokeWidth={3} />
              各项措施之间不存在互斥
            </span>
          </div>
          <div style={{display: 'flex', gap: 22, marginTop: 20}}>
            <div data-final-knowledge="measure-exit" style={{...enter(frame, 262), flex: 1, backgroundColor: PALETTE.paper, border: `2px solid ${PALETTE.line}`, padding: '12px 18px', display: 'flex', alignItems: 'center', gap: 12}}>
              <Plane size={24} color={PALETTE.navy} />
              <span style={{fontSize: 23, fontWeight: 700}}>出入境措施</span>
            </div>
            <div data-final-knowledge="measure-property" style={{...enter(frame, 276), flex: 1, backgroundColor: PALETTE.paper, border: `2px solid ${PALETTE.line}`, padding: '12px 18px', display: 'flex', alignItems: 'center', gap: 12}}>
              <Banknote size={24} color={PALETTE.navy} />
              <span style={{fontSize: 23, fontWeight: 700}}>财产性措施</span>
            </div>
            <div data-final-knowledge="measure-trade" style={{...enter(frame, 290), flex: 1, backgroundColor: PALETTE.paper, border: `2px solid ${PALETTE.line}`, padding: '12px 18px', display: 'flex', alignItems: 'center', gap: 12}}>
              <ArrowLeftRight size={24} color={PALETTE.navy} />
              <span style={{fontSize: 23, fontWeight: 700}}>禁止或限制交易</span>
            </div>
            <div data-final-knowledge="measure-other" style={{...enter(frame, 304), flex: 1, backgroundColor: PALETTE.paper, border: `2px solid ${PALETTE.line}`, padding: '12px 18px', display: 'flex', alignItems: 'center', gap: 12}}>
              <ListX size={24} color={PALETTE.navy} />
              <span style={{fontSize: 23, fontWeight: 700}}>其他必要措施</span>
            </div>
          </div>
        </div>
      </div>
    </FolioShell>
  );
};

export const BlockadeChainScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="chain-identify" data-final-knowledge="chain-blockade" data-final-knowledge="chain-counter" data-final-knowledge="chain-relief" data-final-knowledge="not-recognize" data-final-knowledge="not-execute" data-final-knowledge="not-comply" data-final-knowledge="relief-sue" data-final-knowledge="relief-liability" data-final-knowledge="chain-mnemonic" */
  const frame = useCurrentFrame();
  const stations = [
    {title: '识别', body: <>国务院有关部门<ThinUnderline color={PALETTE.navy}>识别并公告</ThinUnderline></>, icon: Search, id: 'chain-identify', color: PALETTE.navy, delay: 14},
    {title: '阻断', body: <><SoftHighlight color="rgba(178,58,46,0.16)">“三不”原则</SoftHighlight>阻断效力</>, icon: ShieldBan, id: 'chain-blockade', color: PALETTE.seal, delay: 34},
    {title: '反制', body: <><SoftHighlight color="rgba(150,118,46,0.22)">恶意实体清单</SoftHighlight>制度</>, icon: ListX, id: 'chain-counter', color: PALETTE.gold, delay: 54},
    {title: '救济', body: <>中国<ThinUnderline color={PALETTE.navy}>法院起诉索赔</ThinUnderline></>, icon: Gavel, id: 'chain-relief', color: PALETTE.navy, delay: 74},
  ];
  const gates = [
    {title: '不承认', body: <>司法、行政、仲裁机构<ThinUnderline color={PALETTE.seal}>不得承认</ThinUnderline>其效力</>, id: 'not-recognize', delay: 156},
    {title: '不执行', body: <><ThinUnderline color={PALETTE.seal}>不得执行或协助执行</ThinUnderline>；确需执行须申请获批，已执行可发<SoftHighlight color="rgba(178,58,46,0.16)">禁执令</SoftHighlight></>, id: 'not-execute', delay: 178},
    {title: '不遵守', body: <>不得在合同中<ThinUnderline color={PALETTE.seal}>援引</ThinUnderline>；不得以之为由主张<SoftHighlight color="rgba(178,58,46,0.16)">不可抗力免责</SoftHighlight></>, id: 'not-comply', delay: 200},
  ];
  return (
    <FolioShell code={4} station={4} title="反外国不当域外管辖：识别到救济">
      <div
        data-layout="four-stage-chain-with-three-not-gates"
        data-visual-anchor="flow-path"
        data-visual-grammar="four-stages-run-identification-to-relief,three-not-gates-block-foreign-jurisdiction,malicious-list-closes-the-remedy-loop"
        data-text-treatments="stamp,thin-underline,label-block"
        data-focal-rule="full-chain-identify-blockade-counter-relief"
        data-focal-channels="locator,connector,contrast"
        style={{position: 'absolute', inset: 0}}
      >
        {stations.map((station, index) => (
          <div key={station.id}>
            <div
              data-final-knowledge={station.id}
              style={{
                ...enter(frame, station.delay),
                position: 'absolute',
                left: index * 440,
                top: 40,
                width: 360,
                height: 200,
                border: `3px solid ${station.color}`,
                borderTop: `12px solid ${station.color}`,
                backgroundColor: PALETTE.paper,
                padding: '20px 24px',
              }}
            >
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <station.icon size={30} color={station.color} />
                <span style={{fontSize: 32, fontWeight: 800, color: station.color}}>{station.title}</span>
              </div>
              <div style={{fontSize: 23, marginTop: 14, lineHeight: 1.4}}>{station.body}</div>
            </div>
            {index < 3 ? <ArrowX color={PALETTE.gold} delay={station.delay + 26} frame={frame} left={index * 440 + 368} top={124} width={64} /> : null}
          </div>
        ))}
        {gates.map((gate) => (
          <div
            key={gate.id}
            data-final-knowledge={gate.id}
            style={{
              ...enter(frame, gate.delay),
              position: 'absolute',
              left: 440,
              top: gate.id === 'not-recognize' ? 300 : gate.id === 'not-execute' ? 416 : 532,
              width: 440,
              height: 108,
              borderLeft: `10px solid ${PALETTE.seal}`,
              backgroundColor: PALETTE.sealSoft,
              padding: '12px 20px',
            }}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.seal}}>{gate.title}</div>
            <div style={{fontSize: 21, marginTop: 6, lineHeight: 1.35}}>{gate.body}</div>
          </div>
        ))}
        <div
          style={{
            ...enter(frame, 226),
            position: 'absolute',
            left: 900,
            top: 300,
            width: 746,
            height: 324,
            border: `3px solid ${PALETTE.navy}`,
            backgroundColor: PALETTE.paper,
            padding: '22px 28px',
          }}
        >
          <div style={{fontSize: 28, fontWeight: 800, color: PALETTE.navy}}>救济与追责</div>
          <div data-final-knowledge="relief-sue" style={{...enter(frame, 262), marginTop: 18, fontSize: 23, lineHeight: 1.45}}>
            合法权益受损的中国公民或组织，可在中国
            <ThinUnderline color={PALETTE.navy}>法院起诉索赔</ThinUnderline>
          </div>
          <div data-final-knowledge="relief-liability" style={{...enter(frame, 288), marginTop: 18, fontSize: 23, lineHeight: 1.45}}>
            违规执行外国不当域外管辖措施的，承担
            <SoftHighlight color="rgba(178,58,46,0.16)">民事、行政乃至刑事责任</SoftHighlight>
          </div>
          <div style={{marginTop: 24}}>
            <SealStamp delay={318} frame={frame} color={PALETTE.gold} size={22} text="恶意实体清单 → 索赔与追责" />
          </div>
        </div>
        <div
          data-final-knowledge="chain-mnemonic"
          style={{
            ...enter(frame, 356),
            position: 'absolute',
            left: 0,
            top: 656,
            width: 1646,
            height: 56,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
            backgroundColor: PALETTE.goldSoft,
            borderTop: `3px solid ${PALETTE.gold}`,
            fontSize: 26,
            fontWeight: 800,
            whiteSpace: 'nowrap',
          }}
        >
          全链条：<SoftHighlight color="rgba(150,118,46,0.22)">识别 → 阻断 → 反制 → 救济</SoftHighlight>；三不：不承认、不执行、不遵守
        </div>
      </div>
    </FolioShell>
  );
};

export const SourcesOfInternationalLaw = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: PALETTE.parchment, overflow: 'hidden'}}
  >
    <TimelineSequence name="01-sources" {...SCENES.sources}>
      <SourcesScene />
    </TimelineSequence>
    <TimelineSequence name="02-custom-formation" {...SCENES.customFormation}>
      <CustomFormationScene />
    </TimelineSequence>
    <TimelineSequence name="03-custom-vs-convention" {...SCENES.customVsConvention}>
      <CustomVsConventionScene />
    </TimelineSequence>
    <TimelineSequence name="04-counter-sanctions" {...SCENES.counterSanctions}>
      <CounterSanctionsScene />
    </TimelineSequence>
    <TimelineSequence name="05-blockade-chain" {...SCENES.blockadeChain}>
      <BlockadeChainScene />
    </TimelineSequence>
  </AbsoluteFill>
);
