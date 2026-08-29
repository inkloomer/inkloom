import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {Ban, CircleDollarSign, FileCheck, Gavel, Languages, Scale, Search, ShieldCheck, Timer, Video} from 'lucide-react';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {PALETTE, SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const flapIn = (frame: number, delay: number): CSSProperties => ({
  opacity: interpolate(frame, [delay, delay + 14], [0, 1], CLAMP),
  scale: `1 ${interpolate(frame, [delay, delay + 20], [0.5, 1], {...CLAMP, easing: Easing.out(Easing.cubic)})}`,
  transformOrigin: '50% 0%',
});

const slideIn = (frame: number, delay: number): CSSProperties => ({
  opacity: interpolate(frame, [delay, delay + 16], [0, 1], CLAMP),
  translate: `0px ${interpolate(frame, [delay, delay + 22], [26, 0], {...CLAMP, easing: Easing.out(Easing.cubic)})}px`,
});

const STATION_TITLES = ['文书送达', '调取证据', '判决认可执行', '仲裁与保全', '共同规则'];

const BoardShell = ({
  children,
  station,
  title,
}: {
  readonly children: ReactNode;
  readonly station: number;
  readonly title: string;
}) => (
  <AbsoluteFill
    className="font-animation-body"
    style={{
      color: PALETTE.paperText,
      backgroundColor: PALETTE.night,
      backgroundImage:
        'repeating-linear-gradient(0deg, rgba(240,178,74,0.03) 0 2px, transparent 2px 88px), radial-gradient(circle at 85% 0%, rgba(111,194,176,0.08), transparent 34%)',
      overflow: 'hidden',
    }}
  >
    <div style={{position: 'absolute', left: 64, right: 64, top: 40, display: 'flex', alignItems: 'center', gap: 22}}>
      <div style={{backgroundColor: PALETTE.amber, color: PALETTE.night, borderRadius: 10, padding: '10px 20px', fontSize: 22, fontWeight: 900, letterSpacing: 4, whiteSpace: 'nowrap'}}>区际司法协助</div>
      <h1 className="font-animation-title" style={{fontSize: 44, lineHeight: 1.1, margin: 0, fontWeight: 800, color: PALETTE.paperText}}>
        {title}
      </h1>
      <div style={{marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12}}>
        {STATION_TITLES.map((label, index) => (
          <div key={label} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6}}>
            <div style={{width: 52, height: 9, borderRadius: 5, backgroundColor: index === station ? PALETTE.amber : PALETTE.line}} />
            <span className="font-animation-mono" style={{fontSize: 16, fontWeight: 700, color: index === station ? PALETTE.amber : PALETTE.muted}}>{String(index + 1).padStart(2, '0')}</span>
          </div>
        ))}
      </div>
    </div>
    <div style={{position: 'absolute', left: 64, right: 64, top: 148, height: 3, backgroundColor: PALETTE.line}} />
    <div style={{position: 'absolute', left: 64, width: 220, top: 146, height: 5, backgroundColor: PALETTE.amber}} />
    <main style={{position: 'absolute', left: 64, right: 64, top: 182, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const RegionBadge = ({label, color}: {readonly label: string; readonly color: string}) => (
  <span style={{backgroundColor: color, color: PALETTE.night, borderRadius: 8, padding: '10px 20px', fontSize: 25, fontWeight: 900, letterSpacing: 3, whiteSpace: 'nowrap', alignSelf: 'center'}}>{label}</span>
);

const FlapCell = ({children, flex = 1, accent}: {readonly children: ReactNode; readonly flex?: number; readonly accent?: string}) => (
  <div
    style={{
      flex,
      border: `1px solid ${accent ?? PALETTE.line}`,
      borderRadius: 10,
      padding: '16px 24px',
      fontSize: 22,
      lineHeight: 1.65,
      boxShadow: 'inset 0 -16px 20px -16px rgba(0,0,0,0.6)',
      backgroundColor: accent ? 'rgba(255,255,255,0.02)' : PALETTE.flap,
    }}
  >
    {children}
  </div>
);

const Ink = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{backgroundColor: color, padding: '2px 10px', fontWeight: 800}}>{children}</span>
);

const Under = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{boxShadow: `inset 0 -3px ${color}`, paddingBottom: 2, fontWeight: 700}}>{children}</span>
);

const VerdictChip = ({text, color}: {readonly text: string; readonly color: string}) => (
  <span style={{border: `3px solid ${color}`, borderRadius: 8, color, padding: '8px 18px', fontSize: 22, fontWeight: 900, letterSpacing: 2, whiteSpace: 'nowrap', backgroundColor: PALETTE.night}}>{text}</span>
);

const BoardStamp = ({delay, frame, text, color = PALETTE.amber}: {readonly delay: number; readonly frame: number; readonly text: string; readonly color?: string}) => (
  <span
    style={{
      ...slideIn(frame, delay),
      display: 'inline-block',
      border: `3px solid ${color}`,
      borderRadius: 8,
      color,
      padding: '10px 24px',
      fontSize: 23,
      fontWeight: 800,
      letterSpacing: 2,
      rotate: '-2deg',
      backgroundColor: 'rgba(12,18,32,0.78)',
    }}
  >
    {text}
  </span>
);

export const DocumentServiceScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="hk-service-lane" data-final-knowledge="mo-service-lane" data-final-knowledge="tw-service-lane" data-final-knowledge="service-deadline-two-months" */
  const frame = useCurrentFrame();
  const lanes = [
    {id: 'hk-service-lane', region: '涉港', color: PALETTE.amber, soft: PALETTE.amberSoft, pair: '内地高院 ↔ 香港高等法院', extra: '内地最高院 → 香港高等法院', mode: '单向委托'},
    {id: 'mo-service-lane', region: '涉澳', color: PALETTE.mo, soft: PALETTE.moSoft, pair: '内地高院或最高法授权的中院 / 基层法院 ↔ 澳门终审法院', extra: '内地最高院 ↔ 澳门终审法院', mode: '可相互送达'},
    {id: 'tw-service-lane', region: '涉台', color: PALETTE.tw, soft: PALETTE.twSoft, pair: '大陆高院 ↔ 台湾地区有关法院', extra: '内地（大陆）原则上由高院对口', mode: '高院对口'},
  ];
  return (
    <BoardShell station={0} title="区际文书委托送达">
      <div
        data-layout="night-splitflap-service-lanes"
        data-visual-anchor="flow-path"
        data-visual-grammar="three-regional-service-lanes-between-courts,uniform-two-month-service-deadline"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="mainland-supreme-court-one-way-to-hong-kong-mutual-with-macau"
        data-focal-channels="connector,contrast,enclosure"
        style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: 6}}
      >
        <div style={{display: 'flex', flexDirection: 'column', gap: 26, flex: 1}}>
          {lanes.map((lane) => (
            <div
              key={lane.id}
              data-final-knowledge={lane.id}
              style={{...flapIn(frame, 12 + lanes.indexOf(lane) * 28), flex: 1, display: 'flex', alignItems: 'stretch', gap: 20}}
            >
              <RegionBadge label={lane.region} color={lane.color} />
              <FlapCell flex={2.6}>
                <span style={{fontSize: 25, fontWeight: 800, color: lane.color}}>{lane.pair}</span>
                <div style={{marginTop: 10}}>{lane.extra}</div>
              </FlapCell>
              <div style={{flex: '0 0 190px', display: 'flex'}}>
                <div style={{flex: 1, border: `2px dashed ${lane.color}`, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: lane.soft}}>
                  <span style={{fontSize: 22, fontWeight: 800, color: lane.color, textAlign: 'center', lineHeight: 1.5}}>{lane.mode}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          data-final-knowledge="service-deadline-two-months"
          style={{...flapIn(frame, 150), display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 22, whiteSpace: 'nowrap', borderTop: `3px solid ${PALETTE.line}`, paddingTop: 22}}
        >
          <Timer size={30} color={PALETTE.amber} />
          <BoardStamp delay={150} frame={frame} color={PALETTE.amber} text={'区际委托送达期限：一律 2 个月（港 · 澳 · 台相同）'} />
        </div>
      </div>
    </BoardShell>
  );
};

export const EvidenceTakingScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="evidence-desks-hk-mo" data-final-knowledge="evidence-deadline-6-3-months" data-final-knowledge="evidence-common-rules" data-final-knowledge="macau-special-arrangements" */
  const frame = useCurrentFrame();
  return (
    <BoardShell station={1} title="涉港澳委托调取证据">
      <div
        data-layout="night-desk-split-with-rule-bands"
        data-visual-anchor="role-pair"
        data-visual-grammar="hk-uses-secretariat-mo-uses-final-court,evidence-deadline-splits-6-and-3-months"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="only-litigation-related-evidence-and-consent-based-participation"
        data-focal-channels="contrast,enclosure,connector"
        style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: 6}}
      >
        <div style={{display: 'flex', gap: 22, flex: 1.15}}>
          <div
            data-final-knowledge="evidence-desks-hk-mo"
            style={{...flapIn(frame, 12), flex: 1, display: 'flex', flexDirection: 'column', gap: 18}}
          >
            <div style={{display: 'flex', alignItems: 'stretch', gap: 18, flex: 1}}>
              <RegionBadge label="涉港" color={PALETTE.amber} />
              <FlapCell flex={1}>
                <span style={{fontSize: 24, fontWeight: 800, color: PALETTE.amber}}>内地高院 ↔ 香港政务司行政署</span>
                <div style={{marginTop: 8}}>委托书须加盖香港高等法院印章；内地最高法 → 行政署</div>
              </FlapCell>
            </div>
            <div style={{display: 'flex', alignItems: 'stretch', gap: 18, flex: 1}}>
              <RegionBadge label="涉澳" color={PALETTE.mo} />
              <FlapCell flex={1}>
                <span style={{fontSize: 24, fontWeight: 800, color: PALETTE.mo}}>高院及授权中院 / 基层法院 ↔ 澳门终审法院</span>
                <div style={{marginTop: 8}}>内地最高法 ↔ 澳门终审法院</div>
              </FlapCell>
            </div>
          </div>
          <div
            data-final-knowledge="evidence-deadline-6-3-months"
            style={{...flapIn(frame, 44), flex: '0 0 300px', display: 'flex', flexDirection: 'column', gap: 18}}
          >
            <div style={{flex: 1, border: `3px solid ${PALETTE.amber}`, borderRadius: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: PALETTE.amberSoft}}>
              <span className="font-animation-mono" style={{fontSize: 46, fontWeight: 900, color: PALETTE.amber}}>6 个月</span>
              <span style={{fontSize: 20, color: PALETTE.paperText, marginTop: 6}}>涉港取证期限</span>
            </div>
            <div style={{flex: 1, border: `3px solid ${PALETTE.mo}`, borderRadius: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: PALETTE.moSoft}}>
              <span className="font-animation-mono" style={{fontSize: 46, fontWeight: 900, color: PALETTE.mo}}>3 个月</span>
              <span style={{fontSize: 20, color: PALETTE.paperText, marginTop: 6}}>涉澳取证期限</span>
            </div>
          </div>
        </div>
        <div
          data-final-knowledge="evidence-common-rules"
          style={{...flapIn(frame, 86), display: 'flex', alignItems: 'stretch', gap: 20}}
        >
          <RegionBadge label="相同" color={PALETTE.ok} />
          <FlapCell flex={1}>
            <span style={{fontSize: 23, fontWeight: 800, color: PALETTE.ok}}>三不分：</span>
            只调取<Ink color={PALETTE.okSoft}>与诉讼有关</Ink>的证据 · 委托方请求时受托方<Under color={PALETTE.ok}>&quot;可以&quot;</Under>允许其司法人员出席并直接取证 · 同意的应当通知取证<Under color={PALETTE.amber}>时间、地点</Under>
          </FlapCell>
        </div>
        <div
          data-final-knowledge="macau-special-arrangements"
          style={{...flapIn(frame, 122), display: 'flex', alignItems: 'stretch', gap: 20}}
        >
          <RegionBadge label="澳特" color={PALETTE.mo} />
          <FlapCell flex={1}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, fontSize: 23, fontWeight: 800, color: PALETTE.mo}}>
              <Video size={22} color={PALETTE.mo} />
              涉澳四件套
            </div>
            <div style={{marginTop: 8}}>
              授权中院 / 基层直接对接终审法院 · <Ink color={PALETTE.moSoft}>网络平台</Ink>电子转递（不能才邮寄）· 法院印章与法官签名<Under color={PALETTE.mo}>同等效力</Under> · 音视频取证（须证人 / 鉴定人同意，受托方&quot;可以&quot;协助）
            </div>
          </FlapCell>
        </div>
      </div>
    </BoardShell>
  );
};

export const JudgmentEnforcementScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="hk-judgment-channel" data-final-knowledge="mo-judgment-channel" data-final-knowledge="tw-judgment-channel" data-final-knowledge="concurrent-application-rule" data-final-knowledge="tw-2025-special-rules" */
  const frame = useCurrentFrame();
  const lanes = [
    {
      id: 'hk-judgment-channel',
      region: '涉港',
      color: PALETTE.amber,
      basis: '2017 婚姻家事 + 2019 民商事安排',
      desks: '内地：申请人 / 被申请人住所地、经居地、财产所在地中院；香港：婚姻家事 → 区域法院，其他 → 高等法院',
      both: '能',
      bothNote: '分别执行总额不超判决数额',
    },
    {
      id: 'mo-judgment-channel',
      region: '涉澳',
      color: PALETTE.mo,
      basis: '2006 双边安排',
      desks: '内地：被申请人住所地、经居地或财产所在地中院；澳门：中级法院认可 → 初级法院执行',
      both: '不能',
      bothNote: '但可向另一地请求财产保全',
    },
    {
      id: 'tw-judgment-channel',
      region: '涉台',
      color: PALETTE.tw,
      basis: '2025 最高院司法解释（单边文件）',
      desks: '大陆：申请人 / 被申请人住所地、经居地、财产所在地中院或专门法院',
      both: '/',
      bothNote: '',
    },
  ];
  return (
    <BoardShell station={2} title="区际法院判决的认可与执行">
      <div
        data-layout="night-three-lane-arrangement-board"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="hk-mo-tw-judgment-channels-split-by-arrangement,macau-recognition-then-first-court-execution"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="concurrent-two-region-allowed-except-macau-judgments-procedure-follows-requested-law"
        data-focal-channels="contrast,enclosure,connector"
        style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: 6}}
      >
        <div style={{display: 'flex', flexDirection: 'column', gap: 20, flex: 1.5}}>
          {lanes.map((lane) => (
            <div
              key={lane.id}
              data-final-knowledge={lane.id}
              style={{...flapIn(frame, 12 + lanes.indexOf(lane) * 30), flex: 1, display: 'flex', alignItems: 'stretch', gap: 18}}
            >
              <RegionBadge label={lane.region} color={lane.color} />
              <FlapCell flex={0.9}>
                <div style={{fontSize: 19, fontWeight: 700, letterSpacing: 2, color: PALETTE.muted}}>依据</div>
                <div style={{marginTop: 6, fontSize: 22, fontWeight: 800, color: lane.color}}>{lane.basis}</div>
              </FlapCell>
              <FlapCell flex={2.2}>
                <div style={{fontSize: 19, fontWeight: 700, letterSpacing: 2, color: PALETTE.muted}}>机构</div>
                <div style={{marginTop: 6}}>{lane.desks}</div>
              </FlapCell>
              <div style={{flex: '0 0 210px', border: `3px solid ${lane.both === '能' ? PALETTE.ok : lane.both === '不能' ? PALETTE.signal : PALETTE.line}`, borderRadius: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: lane.both === '能' ? PALETTE.okSoft : lane.both === '不能' ? PALETTE.signalSoft : 'rgba(255,255,255,0.02)'}}>
                <span style={{fontSize: 28, fontWeight: 900, color: lane.both === '能' ? PALETTE.ok : lane.both === '不能' ? PALETTE.signal : PALETTE.muted}}>同时两地 {lane.both}</span>
                {lane.bothNote ? <span style={{fontSize: 18, color: PALETTE.paperText, marginTop: 6, textAlign: 'center', padding: '0 10px'}}>{lane.bothNote}</span> : null}
              </div>
            </div>
          ))}
        </div>
        <div style={{display: 'flex', gap: 20}}>
          <div
            data-final-knowledge="concurrent-application-rule"
            style={{...flapIn(frame, 120), flex: 1.1, border: `3px solid ${PALETTE.signal}`, borderRadius: 10, backgroundColor: PALETTE.signalSoft, padding: '16px 24px', fontSize: 21, lineHeight: 1.65}}
          >
            <div style={{fontSize: 23, fontWeight: 800, color: PALETTE.signal, display: 'flex', alignItems: 'center', gap: 10}}>
              <Ban size={22} color={PALETTE.signal} />
              同时向内地几个中院申请
            </div>
            <div style={{marginTop: 8}}>
              原则都不允许 → 由
              <Under color={PALETTE.amber}>最先立案</Under>
              的法院受理。口诀：
              <Ink color={PALETTE.signalSoft}>同时两地澳判不能，同时内地都不能</Ink>
            </div>
          </div>
          <div
            data-final-knowledge="tw-2025-special-rules"
            style={{...flapIn(frame, 146), flex: 1, border: `3px solid ${PALETTE.tw}`, borderRadius: 10, backgroundColor: PALETTE.panel, padding: '16px 24px', fontSize: 21, lineHeight: 1.65}}
          >
            <div style={{fontSize: 23, fontWeight: 800, color: PALETTE.tw}}>涉台 2025 新规</div>
            <div style={{marginTop: 8}}>
              持台湾居民居住证 → 授权委托书
              <Ink color={PALETTE.twSoft}>免公证</Ink>
              ；材料不符一次性告知补正；可认可
              <Under color={PALETTE.tw}>部分判项</Under>
            </div>
          </div>
          <div
            style={{...flapIn(frame, 168), flex: 0.8, border: `3px solid ${PALETTE.line}`, borderRadius: 10, backgroundColor: PALETTE.panel, padding: '16px 24px', fontSize: 21, lineHeight: 1.65}}
          >
            <div style={{fontSize: 23, fontWeight: 800, color: PALETTE.paperText}}>程序与救济</div>
            <div style={{marginTop: 8}}>
              期间程序方式依
              <Under color={PALETTE.amber}>被请求方法律</Under>
              ；救济：内地上一级
              <Ink color={PALETTE.amberSoft}>复议</Ink>
              ，港澳上诉
            </div>
          </div>
        </div>
      </div>
    </BoardShell>
  );
};

export const ArbitralAwardScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="arbitral-award-channels" data-final-knowledge="arbitral-preservation-scope" data-final-knowledge="arbitral-preservation-desks" */
  const frame = useCurrentFrame();
  const rows = [
    {tag: '涉港', color: PALETTE.amber, text: '2020 安排：内地被申请人住所地 / 财产所在地中院 ↔ 香港高等法院', both: '同时两地：能'},
    {tag: '涉澳', color: PALETTE.mo, text: '2008 安排：澳门中级法院认可 → 初级法院执行', both: '同时两地：能'},
    {tag: '涉台', color: PALETTE.tw, text: '2015 最高法司法解释（单边）：大陆中院或专门法院', both: ''},
  ];
  return (
    <BoardShell station={3} title="区际仲裁裁决的认可执行与保全">
      <div
        data-layout="night-award-preservation-band"
        data-visual-anchor="document-fork"
        data-visual-grammar="hk-mo-tw-arbitral-award-channels,preservation-covers-property-evidence-conduct"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="macau-recognition-intermediate-execution-first-court-no-duplicate-mainland-applications"
        data-focal-channels="contrast,enclosure,connector"
        style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: 6}}
      >
        <div style={{display: 'flex', flexDirection: 'column', gap: 18, flex: 1.25}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 14, fontSize: 25, fontWeight: 800, color: PALETTE.amber}}>
            <Scale size={26} color={PALETTE.amber} />
            仲裁裁决 · 三通道
          </div>
          {rows.map((row) => (
            <div key={row.tag} style={{...flapIn(frame, 14 + rows.indexOf(row) * 26), flex: 1, display: 'flex', alignItems: 'center', gap: 18}}>
              <span style={{flex: '0 0 96px', textAlign: 'center', backgroundColor: row.color, color: PALETTE.night, borderRadius: 8, padding: '8px 0', fontSize: 22, fontWeight: 900}}>{row.tag}</span>
              <FlapCell flex={1} accent={row.color}>
                <span style={{fontSize: 22}}>{row.text}</span>
              </FlapCell>
              {row.both ? (
                <VerdictChip text={row.both} color={PALETTE.ok} />
              ) : (
                <span style={{flex: '0 0 40px'}} />
              )}
            </div>
          ))}
        </div>
        <div style={{display: 'flex', gap: 20, flex: 1}}>
          <div
            data-final-knowledge="arbitral-preservation-scope"
            style={{...flapIn(frame, 110), flex: 1, border: `3px solid ${PALETTE.mo}`, borderRadius: 10, backgroundColor: PALETTE.moSoft, padding: '18px 26px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.mo, display: 'flex', alignItems: 'center', gap: 10}}>
              <ShieldCheck size={24} color={PALETTE.mo} />
              仲裁保全 · 范围与程序
            </div>
            <div style={{marginTop: 10}}>
              <Ink color={PALETTE.moSoft}>财产 · 证据 · 行为</Ink>
              保全三类；程序依
              <Under color={PALETTE.mo}>被请求方</Under>
              法律规定
            </div>
          </div>
          <div
            data-final-knowledge="arbitral-preservation-desks"
            style={{...flapIn(frame, 138), flex: 1.3, border: `3px solid ${PALETTE.tw}`, borderRadius: 10, backgroundColor: PALETTE.panel, padding: '18px 26px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.tw}}>保全机构 · 三地对照</div>
            <div style={{marginTop: 10}}>
              内地：被申请人住所地 / 财产 / 证据所在地
              <Ink color={PALETTE.twSoft}>中院</Ink>
              ，
              <Ink color={PALETTE.signalSoft}>不得同时</Ink>
              向内地多个法院申请；香港：
              <Under color={PALETTE.amber}>高等法院</Under>
              ；澳门：
              <Under color={PALETTE.mo}>初级法院</Under>
            </div>
          </div>
        </div>
        <div style={{...flapIn(frame, 168), display: 'flex', justifyContent: 'center'}}>
          <BoardStamp delay={168} frame={frame} color={PALETTE.amber} text={'口诀：认可中级，执行初级'} />
        </div>
      </div>
    </BoardShell>
  );
};

export const CommonRulesScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="exclusive-jurisdiction-effect" data-final-knowledge="assistance-fees" data-final-knowledge="chinese-translation-rule" data-final-knowledge="recognized-award-equal-effect" */
  const frame = useCurrentFrame();
  return (
    <BoardShell station={4} title="司法协助的共同规则">
      <div
        data-layout="night-rule-band-triptych"
        data-visual-anchor="typographic-sequence"
        data-visual-grammar="exclusive-jurisdiction-blocks-recognition-only,fees-and-translation-split-by-assistance-type"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="exclusive-jurisdiction-cannot-refuse-service-evidence-arbitral-assistance"
        data-focal-channels="contrast,enclosure,connector"
        style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: 6}}
      >
        <div
          data-final-knowledge="exclusive-jurisdiction-effect"
          style={{...flapIn(frame, 12), flex: 1.1, display: 'flex', alignItems: 'stretch', gap: 20}}
        >
          <div style={{flex: '0 0 230px', border: `3px solid ${PALETTE.signal}`, borderRadius: 10, backgroundColor: PALETTE.signalSoft, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8}}>
            <Gavel size={30} color={PALETTE.signal} />
            <span style={{fontSize: 25, fontWeight: 900, color: PALETTE.signal}}>专属管辖</span>
          </div>
          <FlapCell flex={1}>
            <div style={{display: 'flex', alignItems: 'center', gap: 16, fontSize: 23}}>
              <VerdictChip text="能" color={PALETTE.signal} />
              <span>拒绝承认（认可）<Under color={PALETTE.signal}>法院判决</Under>的理由</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 16, fontSize: 23, marginTop: 12}}>
              <VerdictChip text="不能" color={PALETTE.ok} />
              <span>拒绝其他协助：文书送达 · 调取证据 · 承认执行仲裁裁决</span>
            </div>
          </FlapCell>
        </div>
        <div
          data-final-knowledge="assistance-fees"
          style={{...flapIn(frame, 52), flex: 1, display: 'flex', alignItems: 'stretch', gap: 20}}
        >
          <div style={{flex: '0 0 230px', border: `3px solid ${PALETTE.amber}`, borderRadius: 10, backgroundColor: PALETTE.amberSoft, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8}}>
            <CircleDollarSign size={30} color={PALETTE.amber} />
            <span style={{fontSize: 25, fontWeight: 900, color: PALETTE.amber}}>费用</span>
          </div>
          <FlapCell flex={1}>
            <span style={{fontSize: 23, fontWeight: 800, color: PALETTE.amber}}>执行裁决 / 判决</span>
            <span> → 应支付</span>
            <Ink color={PALETTE.amberSoft}>执行费用</Ink>
            <div style={{marginTop: 10}}>
              <span style={{fontSize: 23, fontWeight: 800, color: PALETTE.amber}}>文书送达 / 调取证据</span>
              <span> → 无须特别费用，但承担法院</span>
              <Under color={PALETTE.amber}>实际产生之特别费用</Under>
            </div>
          </FlapCell>
        </div>
        <div style={{display: 'flex', alignItems: 'stretch', gap: 20, flex: 1.1}}>
          <div
            data-final-knowledge="chinese-translation-rule"
            style={{...flapIn(frame, 92), flex: 1.25, display: 'flex', alignItems: 'stretch', gap: 20}}
          >
            <div style={{flex: '0 0 230px', border: `3px solid ${PALETTE.mo}`, borderRadius: 10, backgroundColor: PALETTE.moSoft, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8}}>
              <Languages size={30} color={PALETTE.mo} />
              <span style={{fontSize: 25, fontWeight: 900, color: PALETTE.mo}}>中文译本</span>
            </div>
            <FlapCell flex={1}>
              原则：应提交
              <Ink color={PALETTE.moSoft}>中文译本</Ink>
              ；例外：外国法院依
              <Under color={PALETTE.mo}>国际条约</Under>
              请求可附条约规定文字文本
              <div style={{marginTop: 8, fontSize: 20, color: PALETTE.muted}}>港澳台法院不享有该条约例外</div>
            </FlapCell>
          </div>
          <div
            data-final-knowledge="recognized-award-equal-effect"
            style={{...flapIn(frame, 118), flex: 1, border: `3px solid ${PALETTE.tw}`, borderRadius: 10, backgroundColor: PALETTE.twSoft, padding: '18px 26px', fontSize: 22, lineHeight: 1.7, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}
          >
            <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.tw, display: 'flex', alignItems: 'center', gap: 10}}>
              <FileCheck size={24} color={PALETTE.tw} />
              认可的效力
            </div>
            <div style={{marginTop: 10}}>
              经裁定认可的台湾地区法院判决，与大陆法院
              <Under color={PALETTE.tw}>生效判决同等效力</Under>
            </div>
          </div>
        </div>
      </div>
    </BoardShell>
  );
};

export const InterregionalAssistance = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: PALETTE.night, overflow: 'hidden'}}
  >
    <TimelineSequence name="01-document-service" {...SCENES.documentService}>
      <DocumentServiceScene />
    </TimelineSequence>
    <TimelineSequence name="02-evidence-taking" {...SCENES.evidenceTaking}>
      <EvidenceTakingScene />
    </TimelineSequence>
    <TimelineSequence name="03-judgment-enforcement" {...SCENES.judgmentEnforcement}>
      <JudgmentEnforcementScene />
    </TimelineSequence>
    <TimelineSequence name="04-arbitral-award" {...SCENES.arbitralAward}>
      <ArbitralAwardScene />
    </TimelineSequence>
    <TimelineSequence name="05-common-rules" {...SCENES.commonRules}>
      <CommonRulesScene />
    </TimelineSequence>
  </AbsoluteFill>
);
