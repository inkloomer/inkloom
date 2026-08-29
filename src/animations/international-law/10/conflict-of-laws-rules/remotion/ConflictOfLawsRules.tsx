import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {ArrowRight, Compass, Gavel, HelpCircle, Scale, Search, ShieldBan} from 'lucide-react';
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

const BOARD_CODE = ['壹', '贰', '叁', '肆', '伍'];

const RoutingShell = ({
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
      color: PALETTE.paperText,
      backgroundColor: PALETTE.aubergine,
      backgroundImage:
        'repeating-linear-gradient(135deg, rgba(217,160,63,0.04) 0 2px, transparent 2px 34px), radial-gradient(circle at 90% 8%, rgba(111,160,107,0.1), transparent 30%)',
      overflow: 'hidden',
    }}
  >
    <div style={{position: 'absolute', inset: 22, border: `2px solid ${PALETTE.amber}`}} />
    <div style={{position: 'absolute', inset: 28, border: `1px solid ${PALETTE.line}`}} />
    <header style={{position: 'absolute', left: 64, right: 64, top: 44, height: 104, display: 'flex', alignItems: 'center', gap: 24, borderBottom: `3px solid ${PALETTE.amber}`}}>
      <div style={{width: 74, height: 74, borderRadius: 37, border: `3px dashed ${PALETTE.amber}`, display: 'grid', placeItems: 'center'}}>
        <Compass size={30} color={PALETTE.amber} />
      </div>
      <h1 className="font-animation-title" style={{fontSize: 42, lineHeight: 1.1, margin: 0, fontWeight: 800, color: PALETTE.bulletin}}>
        {title}
      </h1>
      <div style={{marginLeft: 'auto', textAlign: 'right'}}>
        <div style={{fontSize: 16, fontWeight: 700, letterSpacing: 4, color: PALETTE.muted}}>AUBERGINE ROUTING BOARD · 三国法</div>
        <div style={{fontSize: 18, color: PALETTE.muted, marginTop: 6}}>冲突规范 · {BOARD_CODE[code]}</div>
      </div>
    </header>
    <div style={{position: 'absolute', left: 66, top: 210, width: 104, height: 640, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40}}>
      {[0, 1, 2, 3, 4].map((index) => {
        const active = index === station;
        return (
          <div
            key={index}
            style={{
              width: 62,
              height: 62,
              borderRadius: 31,
              border: `2px dashed ${active ? PALETTE.amber : PALETTE.line}`,
              backgroundColor: active ? PALETTE.amber : PALETTE.panel,
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <span className="font-animation-mono" style={{fontSize: 18, fontWeight: 700, color: active ? PALETTE.aubergine : PALETTE.muted}}>{String(index + 1).padStart(2, '0')}</span>
          </div>
        );
      })}
    </div>
    <main style={{position: 'absolute', left: 210, right: 64, top: 190, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Tag = ({color, text}: {readonly color: string; readonly text: string}) => (
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

const AmberStamp = ({delay, frame, text, color = PALETTE.amber}: {readonly delay: number; readonly frame: number; readonly text: string; readonly color?: string}) => (
  <span
    style={{
      ...enter(frame, delay, 10),
      display: 'inline-block',
      border: `3px solid ${color}`,
      borderRadius: 8,
      color,
      padding: '8px 22px',
      fontSize: 23,
      fontWeight: 800,
      letterSpacing: 2,
      rotate: '-3deg',
      backgroundColor: 'rgba(42,33,48,0.7)',
    }}
  >
    {text}
  </span>
);

export const ConceptTypesScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="rule-not-jurisdiction" data-final-knowledge="four-rule-types" data-final-knowledge="lex-causa" */
  const frame = useCurrentFrame();
  const types = [
    {name: '单边', rule: '一个连结点，且已明示国别', color: PALETTE.amber},
    {name: '双边', rule: '一个连结点，结合案情才能确定国别', color: PALETTE.route},
    {name: '重叠适用', rule: '两个以上连结点，须同时适用', color: PALETTE.reroute},
    {name: '选择适用', rule: '两个以上连结点，只须择一（有条件 / 无条件）', color: PALETTE.amber},
  ];
  return (
    <RoutingShell code={0} station={0} title="冲突规范与准据法：两个基本概念">
      <div
        data-layout="concept-board-with-four-type-shelf"
        data-visual-anchor="typographic-sequence"
        data-visual-grammar="four-rule-types-shelve-by-connecting-point-count,lex-causa-is-substantive-law-found-by-routing"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="conflict-rules-choose-law-jurisdiction-rules-choose-court"
        data-focal-channels="contrast,enclosure,locator"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{display: 'flex', gap: 24, marginTop: 20}}>
          <div
            data-final-knowledge="rule-not-jurisdiction"
            style={{...enter(frame, 14), flex: 1, border: `3px solid ${PALETTE.amber}`, backgroundColor: 'rgba(217,160,63,0.08)', padding: '26px 30px', fontSize: 23, lineHeight: 1.7}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.amber}}>冲突规范 = 法律适用规范</div>
            <div style={{marginTop: 12}}>
              国际私法
              <Ink color={PALETTE.amberSoft}>特有规范</Ink>
              ；≠ 管辖权规范
              <br />
              管辖权规范解决能不能"管"，冲突规范解决"管"了之后如何
              <Under color={PALETTE.amber}>"判"</Under>
            </div>
          </div>
          <div
            data-final-knowledge="lex-causa"
            style={{...enter(frame, 44), flex: 1, border: `3px solid ${PALETTE.route}`, backgroundColor: 'rgba(111,160,107,0.08)', padding: '26px 30px', fontSize: 23, lineHeight: 1.7}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.route}}>准据法 = 实体法</div>
            <div style={{marginTop: 12}}>
              经冲突规范
              <Ink color={PALETTE.routeSoft}>指引找来</Ink>
              判决案件的实体法
              <br />
              目标国存在
              <Under color={PALETTE.route}>区际法律冲突</Under>
              → 适用与其有
              <Ink color={PALETTE.routeSoft}>最密切联系区域</Ink>
              的法律
            </div>
          </div>
        </div>
        <div
          data-final-knowledge="four-rule-types"
          style={{...enter(frame, 90), marginTop: 30, border: `3px solid ${PALETTE.line}`, backgroundColor: PALETTE.panel, padding: '24px 30px'}}
        >
          <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.bulletin}}>冲突规范四种类 · 按连结点数量与适用方式</div>
          <div style={{display: 'flex', gap: 18, marginTop: 16}}>
            {types.map((item) => (
              <div key={item.name} style={{...enterX(frame, 120 + types.indexOf(item) * 16, 36), flex: 1, borderLeft: `8px solid ${item.color}`, backgroundColor: 'rgba(42,33,48,0.8)', padding: '14px 16px'}}>
                <div style={{fontSize: 24, fontWeight: 800, color: item.color}}>{item.name}</div>
                <div style={{marginTop: 8, fontSize: 20, lineHeight: 1.5}}>{item.rule}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </RoutingShell>
  );
};

export const CharacterizationScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="characterization-court-law" data-final-knowledge="characterization-split" */
  const frame = useCurrentFrame();
  return (
    <RoutingShell code={1} station={1} title="定性（识别）：法院地法定性">
      <div
        data-layout="characterization-split-board"
        data-visual-anchor="role-pair"
        data-visual-grammar="identification-is-court-law-territory,multiple-relations-split-their-applicable-laws"
        data-text-treatments="label-block,thin-underline,soft-highlight"
        data-focal-rule="fact-finding-is-not-identification"
        data-focal-channels="contrast,enclosure,locator"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{display: 'flex', gap: 26, marginTop: 44}}>
          <div
            data-final-knowledge="characterization-court-law"
            style={{...enter(frame, 14), flex: 1.2, border: `3px solid ${PALETTE.amber}`, borderTop: `14px solid ${PALETTE.amber}`, backgroundColor: PALETTE.panel, padding: '34px 32px', fontSize: 24, lineHeight: 1.8}}
          >
            <div style={{fontSize: 27, fontWeight: 800, color: PALETTE.amber, display: 'flex', alignItems: 'center', gap: 12}}>
              <Gavel size={26} color={PALETTE.amber} />
              定性（识别）
            </div>
            <div style={{marginTop: 16}}>
              法院对案件
              <Ink color={PALETTE.amberSoft}>性质予以确定</Ink>
              的过程
              <br />
              适用
              <Under color={PALETTE.amber}>法院地法</Under>
              <br />
              事实调查过程
              <Ink color={PALETTE.rerouteSoft}>不是识别</Ink>
            </div>
          </div>
          <div
            data-final-knowledge="characterization-split"
            style={{...enter(frame, 48), flex: 1, border: `3px solid ${PALETTE.route}`, borderTop: `14px solid ${PALETTE.route}`, backgroundColor: PALETTE.panel, padding: '34px 32px', fontSize: 24, lineHeight: 1.8}}
          >
            <div style={{fontSize: 27, fontWeight: 800, color: PALETTE.route}}>识别分割制</div>
            <div style={{marginTop: 16}}>
              案件涉及两个以上
              <Ink color={PALETTE.routeSoft}>涉外民事关系</Ink>
              → 应当
              <Under color={PALETTE.route}>分别确定</Under>
              应适用的法律
            </div>
          </div>
        </div>
      </div>
    </RoutingShell>
  );
};

export const RenvoiScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="renvoi-transmission" data-final-knowledge="renvoi-remission" data-final-knowledge="renvoi-indirect" data-final-knowledge="renvoi-prohibited" */
  const frame = useCurrentFrame();
  const routes = [
    {name: '转致', path: '甲 → 乙 → 丙', color: PALETTE.amber, id: 'renvoi-transmission', delay: 56},
    {name: '直接反致', path: '甲 ← 乙', color: PALETTE.route, id: 'renvoi-remission', delay: 86},
    {name: '间接反致', path: '甲 → 乙 → 丙 → 甲', color: PALETTE.reroute, id: 'renvoi-indirect', delay: 116},
  ];
  return (
    <RoutingShell code={2} station={2} title="反致：三种路线与我国立场">
      <div
        data-layout="three-renvoi-route-lanes"
        data-visual-anchor="flow-path"
        data-visual-grammar="three-renvoi-routes-travel-between-states,china-blocks-all-renvoi-with-one-stop-rule"
        data-text-treatments="label-block,thin-underline,soft-highlight"
        data-focal-rule="china-prohibits-renvoi-one-stop-to-lex-causa"
        data-focal-channels="connector,contrast,enclosure"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{display: 'flex', flexDirection: 'column', gap: 30, marginTop: 30}}>
          {routes.map((route) => (
            <div
              key={route.id}
              data-final-knowledge={route.id}
              style={{...enterX(frame, 14 + routes.indexOf(route) * 26, 46), display: 'flex', alignItems: 'center', gap: 28, borderLeft: `10px solid ${route.color}`, backgroundColor: PALETTE.panel, padding: '22px 30px'}}
            >
              <span style={{width: 150, fontSize: 27, fontWeight: 800, color: route.color}}>{route.name}</span>
              <span className="font-animation-mono" style={{fontSize: 26, fontWeight: 700, letterSpacing: 3}}>{route.path}</span>
            </div>
          ))}
        </div>
        <div
          data-final-knowledge="renvoi-prohibited"
          style={{...enter(frame, 160), marginTop: 48, display: 'flex', justifyContent: 'center', gap: 22, whiteSpace: 'nowrap'}}
        >
          <ShieldBan size={30} color={PALETTE.reroute} />
          <AmberStamp delay={160} frame={frame} color={PALETTE.reroute} text={'我国立场：禁止转反致 —— 「一站式」直达准据法'} />
        </div>
      </div>
    </RoutingShell>
  );
};

export const ForeignLawAscertainmentScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="ascertainment-subject" data-final-knowledge="unascertainable-consequence" data-final-knowledge="ascertainment-channels" data-final-knowledge="ascertainment-review" */
  const frame = useCurrentFrame();
  return (
    <RoutingShell code={3} station={3} title="外国法的查明">
      <div
        data-layout="ascertainment-quadrant-board"
        data-visual-anchor="document-fork"
        data-visual-grammar="who-chooses-decides-who-ascertains,unascertainable-foreign-law-falls-back-to-chinese-law"
        data-text-treatments="label-block,thin-underline,soft-highlight"
        data-focal-rule="choice-by-parties-means-parties-ascertain"
        data-focal-channels="contrast,enclosure,connector"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{display: 'flex', gap: 24, marginTop: 16}}>
          <div
            data-final-knowledge="ascertainment-subject"
            style={{...enter(frame, 14), flex: 1.2, border: `3px solid ${PALETTE.amber}`, borderTop: `12px solid ${PALETTE.amber}`, backgroundColor: PALETTE.panel, padding: '20px 28px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.amber}}>查明主体 · 看谁选的</div>
            <div style={{marginTop: 10}}>
              当事人选的 →
              <Ink color={PALETTE.amberSoft}>当事人查明</Ink>
              ；非当事人选的 →
              <Under color={PALETTE.amber}>审案机关</Under>
              （法院、仲裁机构、行政机关）查明
            </div>
          </div>
          <div
            data-final-knowledge="unascertainable-consequence"
            style={{...enter(frame, 44), flex: 1, border: `3px solid ${PALETTE.reroute}`, borderTop: `12px solid ${PALETTE.reroute}`, backgroundColor: 'rgba(194,90,80,0.08)', padding: '20px 28px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.reroute, display: 'flex', alignItems: 'center', gap: 10}}>
              <HelpCircle size={22} color={PALETTE.reroute} />
              无法查明 → 适用中国法
            </div>
            <div style={{marginTop: 10}}>
              认定（其一）：当事人逾期
              <Ink color={PALETTE.rerouteSoft}>未提供</Ink>
              ；审案机关
              <Ink color={PALETTE.rerouteSoft}>用尽途径</Ink>
              仍无法获得
            </div>
          </div>
        </div>
        <div
          data-final-knowledge="ascertainment-channels"
          style={{...enter(frame, 84), marginTop: 24, border: `3px solid ${PALETTE.route}`, backgroundColor: 'rgba(111,160,107,0.08)', padding: '22px 30px', fontSize: 22, lineHeight: 1.7}}
        >
          <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.route, display: 'flex', alignItems: 'center', gap: 12}}>
            <Search size={24} color={PALETTE.route} />
            查明途径 · 口诀"当家机协(合)使领馆，使领馆经最高院"
          </div>
          <div style={{marginTop: 10}}>
            当事人 · 专家 · 查明机构 · 协定途径 · 双方使领馆；受案法院非最高院的，须经
            <Under color={PALETTE.route}>最高法院</Under>
            向使领馆发委托
          </div>
          <div style={{marginTop: 8, fontSize: 21, color: PALETTE.muted}}>
            费用：有约定从约定，无约定
            <Ink color={PALETTE.routeSoft}>酌情定</Ink>
            ；提交内容 = 法律/判例全文 + 来源效力说明 + 资质与无利害关系
            <Under color={PALETTE.route}>书面声明</Under>
          </div>
        </div>
        <div
          data-final-knowledge="ascertainment-review"
          style={{...enter(frame, 128), marginTop: 24, border: `3px solid ${PALETTE.line}`, backgroundColor: PALETTE.panel, padding: '22px 30px', fontSize: 22, lineHeight: 1.7}}
        >
          <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.bulletin, display: 'flex', alignItems: 'center', gap: 12}}>
            <Scale size={24} color={PALETTE.bulletin} />
            审查认定 · 决定权都在法院
          </div>
          <div style={{marginTop: 10}}>
            法庭上
            <Ink color={PALETTE.amberSoft}>出示并听取意见</Ink>
            ；专家/机构
            <Under color={PALETTE.amber}>"可以"</Under>
            出庭或在线发表意见（权利非义务）；裁判文书
            <Ink color={PALETTE.amberSoft}>载明查明过程</Ink>
            ；无异议法院"可以"确认；生效裁判已认定的外国法
            <Ink color={PALETTE.routeSoft}>应确认</Ink>
            （除非相反证据）
          </div>
        </div>
      </div>
    </RoutingShell>
  );
};

export const PublicPolicyScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="public-policy-exclusion" data-final-knowledge="public-policy-fallback" */
  const frame = useCurrentFrame();
  return (
    <RoutingShell code={4} station={4} title="公共秩序保留">
      <div
        data-layout="policy-exclusion-gate-with-fallback"
        data-visual-anchor="boundary"
        data-visual-grammar="public-order-gate-excludes-foreign-law,excluded-foreign-law-falls-back-to-chinese-law"
        data-text-treatments="stamp,thin-underline,soft-highlight"
        data-focal-rule="exclusion-results-in-chinese-law"
        data-focal-channels="contrast,enclosure,connector"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{display: 'flex', gap: 26, marginTop: 40}}>
          <div
            data-final-knowledge="public-policy-exclusion"
            style={{...enter(frame, 14), flex: 1.2, border: `3px solid ${PALETTE.reroute}`, borderTop: `14px solid ${PALETTE.reroute}`, backgroundColor: PALETTE.panel, padding: '38px 34px', fontSize: 24, lineHeight: 1.85}}
          >
            <div style={{fontSize: 27, fontWeight: 800, color: PALETTE.reroute, display: 'flex', alignItems: 'center', gap: 12}}>
              <ShieldBan size={26} color={PALETTE.reroute} />
              排除之门
            </div>
            <div style={{marginTop: 16}}>
              我国称
              <Ink color={PALETTE.rerouteSoft}>"社会公共利益"</Ink>
              （英美法系称"公共政策"）；外国法适用将违反法院地公共秩序 → 法院有权
              <Under color={PALETTE.reroute}>限制或排除</Under>
              其适用
            </div>
          </div>
          <div
            data-final-knowledge="public-policy-fallback"
            style={{...enter(frame, 48), flex: 1, border: `3px solid ${PALETTE.route}`, borderTop: `14px solid ${PALETTE.route}`, backgroundColor: 'rgba(111,160,107,0.08)', padding: '38px 34px', fontSize: 24, lineHeight: 1.85}}
          >
            <div style={{fontSize: 27, fontWeight: 800, color: PALETTE.route, display: 'flex', alignItems: 'center', gap: 12}}>
              <ArrowRight size={26} color={PALETTE.route} />
              排除之后
            </div>
            <div style={{marginTop: 16}}>
              被排除的外国法不再适用 → 法院应适用
              <Ink color={PALETTE.routeSoft}>中国法</Ink>
              解决纠纷
            </div>
            <div style={{marginTop: 22}}>
              <AmberStamp delay={90} frame={frame} color={PALETTE.route} text="制度也写进了部分国际公约" />
            </div>
          </div>
        </div>
      </div>
    </RoutingShell>
  );
};

export const ConflictOfLawsRules = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: PALETTE.aubergine, overflow: 'hidden'}}
  >
    <TimelineSequence name="01-concept-types" {...SCENES.conceptTypes}>
      <ConceptTypesScene />
    </TimelineSequence>
    <TimelineSequence name="02-characterization" {...SCENES.characterization}>
      <CharacterizationScene />
    </TimelineSequence>
    <TimelineSequence name="03-renvoi" {...SCENES.renvoi}>
      <RenvoiScene />
    </TimelineSequence>
    <TimelineSequence name="04-foreign-law-ascertainment" {...SCENES.foreignLawAscertainment}>
      <ForeignLawAscertainmentScene />
    </TimelineSequence>
    <TimelineSequence name="05-public-policy" {...SCENES.publicPolicy}>
      <PublicPolicyScene />
    </TimelineSequence>
  </AbsoluteFill>
);
