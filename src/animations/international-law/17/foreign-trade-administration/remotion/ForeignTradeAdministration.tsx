import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {ArrowRight, Ban, Factory, Landmark, ListChecks, Scale, ScrollText, ShieldAlert, ShieldCheck, UserCheck} from 'lucide-react';
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

const GATE_CODES = ['甲', '乙', '丙', '丁', '戊', '己'];

const MineralShell = ({
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
      backgroundColor: PALETTE.sand,
      backgroundImage:
        'repeating-linear-gradient(45deg, rgba(74,46,29,0.035) 0 2px, transparent 2px 40px), radial-gradient(circle at 88% 8%, rgba(58,107,140,0.1), transparent 32%)',
      overflow: 'hidden',
    }}
  >
    <div style={{position: 'absolute', inset: 22, border: `2px solid ${PALETTE.azurite}`}} />
    <div style={{position: 'absolute', inset: 28, border: `1px solid ${PALETTE.line}`}} />
    <header style={{position: 'absolute', left: 64, right: 64, top: 44, height: 104, display: 'flex', alignItems: 'center', gap: 24, borderBottom: `3px solid ${PALETTE.azurite}`}}>
      <div style={{width: 74, height: 74, borderRadius: 37, border: `3px dashed ${PALETTE.cinnabar}`, backgroundColor: PALETTE.panel, display: 'grid', placeItems: 'center'}}>
        <Landmark size={30} color={PALETTE.cinnabar} />
      </div>
      <h1 className="font-animation-title" style={{fontSize: 42, lineHeight: 1.1, margin: 0, fontWeight: 800, color: PALETTE.ink}}>
        {title}
      </h1>
      <div style={{marginLeft: 'auto', textAlign: 'right'}}>
        <div style={{fontSize: 16, fontWeight: 700, letterSpacing: 4, color: PALETTE.muted}}>DUNHUANG MINERAL BULLETIN · 三国法</div>
        <div style={{fontSize: 18, color: PALETTE.muted, marginTop: 6}}>对外贸易管理 · 关牍{GATE_CODES[code]}</div>
      </div>
    </header>
    <div style={{position: 'absolute', left: 66, top: 200, width: 104, height: 620, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
      {[0, 1, 2, 3, 4, 5].map((index) => {
        const active = index === station;
        return (
          <div
            key={index}
            style={{
              width: 58,
              height: 58,
              borderRadius: 8,
              border: `2px dashed ${active ? PALETTE.cinnabar : PALETTE.line}`,
              backgroundColor: active ? PALETTE.cinnabar : PALETTE.panel,
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <span className="font-animation-mono" style={{fontSize: 18, fontWeight: 700, color: active ? PALETTE.panel : PALETTE.muted}}>{String(index + 1).padStart(2, '0')}</span>
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

const Chip = ({children, color = PALETTE.azurite}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 6, border: `1px solid ${PALETTE.line}`, borderLeft: `5px solid ${color}`, backgroundColor: PALETTE.panel, padding: '5px 12px', fontSize: 22, lineHeight: 1.35}}>
    {children}
  </span>
);

const MineralStamp = ({delay, frame, text, color = PALETTE.cinnabar}: {readonly delay: number; readonly frame: number; readonly text: string; readonly color?: string}) => (
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
      backgroundColor: 'rgba(247,239,223,0.92)',
    }}
  >
    {text}
  </span>
);

/* Concept tokens: recurring pictograms recorded in visual-direction.json conceptTokens. */
const TokMinistry = ({size = 19}: {readonly size?: number}) => (
  <Landmark size={size} strokeWidth={2.4} color={PALETTE.cinnabar} style={{display: 'inline-block', verticalAlign: '-3px'}} />
);
const TokIndustry = ({size = 19}: {readonly size?: number}) => (
  <Factory size={size} strokeWidth={2.4} color={PALETTE.azurite} style={{display: 'inline-block', verticalAlign: '-3px'}} />
);
const TokReview = ({size = 19}: {readonly size?: number}) => (
  <Scale size={size} strokeWidth={2.4} color={PALETTE.malachite} style={{display: 'inline-block', verticalAlign: '-3px'}} />
);

export const ForeignTradeLawScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="ftl-scope" data-final-knowledge="trader-exceptions" data-final-knowledge="new-institutions" */
  const frame = useCurrentFrame();
  const exceptions = [
    {name: '国营贸易经营者', rule: '经授权', color: PALETTE.azurite},
    {name: '对外劳务合作者', rule: '审批制', color: PALETTE.malachite},
    {name: '对外工程承包者', rule: '备案制', color: PALETTE.cinnabar},
  ];
  return (
    <MineralShell code={0} station={0} title="《对外贸易法》：门禁与例外">
      <div
        data-layout="trader-gate-with-exception-shelves"
        data-visual-anchor="boundary"
        data-visual-grammar="foreign-trade-open-by-registration-with-three-licensed-gates,single-customs-territories-stay-outside,new-revision-adds-negative-list-and-countermeasures"
        data-text-treatments="label-block,chip,thin-underline,soft-highlight"
        data-focal-rule="traders-need-no-special-procedure-by-default"
        data-focal-channels="enclosure,contrast,locator,icon"
        style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}
      >
        <div style={{display: 'flex', gap: 20, marginTop: 4}}>
          <div
            data-final-knowledge="ftl-scope"
            style={{...enter(frame, 12), flex: 1.2, border: `3px solid ${PALETTE.azurite}`, borderTop: `12px solid ${PALETTE.azurite}`, backgroundColor: PALETTE.panel, padding: '22px 26px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 26, fontWeight: 800, color: PALETTE.azurite}}>适用范围 · 2025修订版</div>
            <div style={{marginTop: 10}}>
              客体：货物进出口、技术进出口、
              <Ink color={PALETTE.azuriteSoft}>国际服务贸易</Ink>
              <br />
              地域：不适用于中国
              <Under color={PALETTE.cinnabar}>单独关税区</Under>
              （港澳台）
            </div>
          </div>
          <div
            data-final-knowledge="new-institutions"
            style={{...enterX(frame, 44, 44), flex: 1, border: `3px solid ${PALETTE.malachite}`, borderTop: `12px solid ${PALETTE.malachite}`, backgroundColor: PALETTE.panel, padding: '22px 26px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 26, fontWeight: 800, color: PALETTE.malachite}}>新增制度</div>
            <div style={{marginTop: 10}}>
              服务贸易
              <Ink color={PALETTE.malachiteSoft}>负面清单</Ink>
              管理；加强外贸
              <Under color={PALETTE.malachite}>知识产权</Under>
              保护；贸易禁限等
              <Ink color={PALETTE.malachiteSoft}>反制措施</Ink>
            </div>
          </div>
        </div>
        <div
          data-final-knowledge="trader-exceptions"
          style={{...enter(frame, 100), border: `3px solid ${PALETTE.ink}`, backgroundColor: PALETTE.panel, padding: '22px 28px'}}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap'}}>
            <Tag color={PALETTE.ink} text="外贸经营者" />
            <span style={{fontSize: 23}}>
              个人和组织均可；
              <Ink color={PALETTE.azuriteSoft}>原则上无特殊手续</Ink>
              <UserCheck size={20} color={PALETTE.azurite} style={{display: 'inline-block', verticalAlign: '-3px'}} />
              （依法登记即可）
            </span>
          </div>
          <div style={{display: 'flex', gap: 18, marginTop: 14}}>
            {exceptions.map((exception) => (
              <div key={exception.name} style={{...enterX(frame, 130 + exceptions.indexOf(exception) * 16, 30), flex: 1, borderLeft: `8px solid ${exception.color}`, backgroundColor: 'rgba(240,227,206,0.9)', padding: '12px 16px'}}>
                <div style={{fontSize: 23, fontWeight: 800, color: exception.color}}>{exception.name}</div>
                <div style={{fontSize: 22, marginTop: 4}}>
                  <Under color={exception.color}>{exception.rule}</Under>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{...enter(frame, 190), display: 'flex', justifyContent: 'center', whiteSpace: 'nowrap'}}>
          <MineralStamp delay={190} frame={frame} text={'口诀：个人组织皆可外贸 —— 国营授权 · 劳务审批 · 工程备案'} />
        </div>
      </div>
    </MineralShell>
  );
};

export const ExportControlScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="control-scope" data-final-knowledge="three-lists" data-final-knowledge="end-user-management" data-final-knowledge="military-dual-condition" */
  const frame = useCurrentFrame();
  const lists = [
    {name: '出口管制清单', rule: '列入即需申领出口许可证', color: PALETTE.cinnabar},
    {name: '临时管制清单', rule: '一般不超过 2 年', color: PALETTE.azurite},
    {name: '禁止出口清单', rule: '管制物项、地区和对象', color: PALETTE.ink},
  ];
  return (
    <MineralShell code={1} station={1} title="《出口管制法》：清单与许可">
      <div
        data-layout="control-list-shelves-with-watchtower"
        data-visual-anchor="typographic-sequence"
        data-visual-grammar="listed-items-need-export-licences,end-users-cannot-divert-to-third-parties,military-exports-need-franchise-and-licence"
        data-text-treatments="label-block,chip,thin-underline,soft-highlight"
        data-focal-rule="final-user-may-not-resell-or-change-use"
        data-focal-channels="enclosure,contrast,locator,icon"
        style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}
      >
        <div
          data-final-knowledge="control-scope"
          style={{...enter(frame, 12), display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', marginTop: 4}}
        >
          <Tag color={PALETTE.cinnabar} text="适用范围" />
          <Chip color={PALETTE.cinnabar}>两用物项</Chip>
          <Chip color={PALETTE.cinnabar}>军品</Chip>
          <Chip color={PALETTE.cinnabar}>核</Chip>
          <span style={{fontSize: 22}}>
            等管制物项相关的
            <Ink color={PALETTE.cinnabarSoft}>货物、技术和服务</Ink>
            ；管理部门＝国务院、中央军委
            <Under color={PALETTE.azurite}>有关部门</Under>
            <TokMinistry />
          </span>
        </div>
        <div style={{display: 'flex', gap: 20}}>
          {lists.map((list) => (
            <div
              key={list.name}
              data-final-knowledge="three-lists"
              style={{...enterX(frame, 60 + lists.indexOf(list) * 20, 42), flex: 1, borderTop: `12px solid ${list.color}`, backgroundColor: PALETTE.panel, padding: '22px 24px', fontSize: 22, lineHeight: 1.65}}
            >
              <div style={{fontSize: 24, fontWeight: 800, color: list.color, display: 'flex', alignItems: 'center', gap: 10}}>
                <ListChecks size={22} color={list.color} />
                {list.name}
              </div>
              <div style={{marginTop: 8}}>{list.rule}</div>
            </div>
          ))}
        </div>
        <div style={{display: 'flex', gap: 20}}>
          <div
            data-final-knowledge="end-user-management"
            style={{...enter(frame, 150), flex: 1.25, border: `3px solid ${PALETTE.azurite}`, backgroundColor: PALETTE.panel, padding: '20px 26px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.azurite, display: 'flex', alignItems: 'center', gap: 10}}>
              <UserCheck size={22} color={PALETTE.azurite} />
              最终用户与最终用途风险管理
            </div>
            <div style={{marginTop: 8}}>
              评估＋核查；违反管理要求→列入
              <Ink color={PALETTE.cinnabarSoft}>管控名单</Ink>
              ，禁止或限制向其出口；最终用户
              <Under color={PALETTE.cinnabar}>不得擅自转卖第三方</Under>
            </div>
          </div>
          <div
            data-final-knowledge="military-dual-condition"
            style={{...enter(frame, 184), flex: 1, border: `3px solid ${PALETTE.malachite}`, backgroundColor: PALETTE.panel, padding: '20px 26px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.malachite, display: 'flex', alignItems: 'center', gap: 10}}>
              <ShieldCheck size={22} color={PALETTE.malachite} />
              军品出口 · 双条件
            </div>
            <div style={{marginTop: 8}}>
              主体具有
              <Ink color={PALETTE.malachiteSoft}>出口专营资格</Ink>
              ＋个案申领
              <Under color={PALETTE.malachite}>出口许可证</Under>
            </div>
          </div>
        </div>
        <div style={{...enter(frame, 230), display: 'flex', justifyContent: 'center', whiteSpace: 'nowrap'}}>
          <MineralStamp delay={230} frame={frame} color={PALETTE.azurite} text={'列入清单即需许可证 —— 军品＝专营资格＋个案许可证'} />
        </div>
      </div>
    </MineralShell>
  );
};

export const DumpingConditionsScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="dumping-formula" data-final-knowledge="normal-value-order" data-final-knowledge="injury-causation" data-final-knowledge="split-case-rule" */
  const frame = useCurrentFrame();
  return (
    <MineralShell code={2} station={2} title="反倾销：三条件与公式">
      <div
        data-layout="dumping-scale-formula"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="dumping-is-export-price-below-normal-value,normal-value-follows-two-step-order,causation-needs-one-cause-not-the-only-cause"
        data-text-treatments="label-block,soft-highlight,thin-underline,chip"
        data-focal-rule="multi-country-investigations-split-by-default"
        data-focal-channels="contrast,enclosure,locator,icon"
        style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}
      >
        <div
          data-final-knowledge="dumping-formula"
          style={{...enter(frame, 12), border: `3px solid ${PALETTE.cinnabar}`, backgroundColor: PALETTE.panel, padding: '22px 28px', display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap', marginTop: 4}}
        >
          <Tag color={PALETTE.cinnabar} text="① 倾销" />
          <span style={{fontSize: 26, fontWeight: 800, whiteSpace: 'nowrap'}}>
            出口价格
            <Under color={PALETTE.cinnabar}>&lt;</Under>
            正常价值
          </span>
          <span data-final-knowledge="normal-value-order" style={{fontSize: 22, lineHeight: 1.6}}>
            正常价值按
            <Ink color={PALETTE.azuriteSoft}>顺序</Ink>
            确定：Ⅰ 出口国
            <Under color={PALETTE.azurite}>可比售价</Under>
            →Ⅱ 出口到第三国可比售价 或
            <Ink color={PALETTE.azuriteSoft}>原产国构成价</Ink>
          </span>
        </div>
        <div style={{display: 'flex', gap: 20}}>
          <div
            data-final-knowledge="injury-causation"
            style={{...enterX(frame, 70, 44), flex: 1, border: `3px solid ${PALETTE.azurite}`, borderTop: `12px solid ${PALETTE.azurite}`, backgroundColor: PALETTE.panel, padding: '20px 26px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.azurite}}>② 损害 · 三态</div>
            <div style={{marginTop: 8}}>
              <Ink color={PALETTE.azuriteSoft}>实质损害</Ink>
              、实质损害威胁、对建立国内产业
              <Under color={PALETTE.azurite}>实质阻碍</Under>
              <TokIndustry />
            </div>
          </div>
          <div
            data-final-knowledge="injury-causation"
            style={{...enterX(frame, 100, 44), flex: 1, border: `3px solid ${PALETTE.malachite}`, borderTop: `12px solid ${PALETTE.malachite}`, backgroundColor: PALETTE.panel, padding: '20px 26px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.malachite}}>③ 因果关系</div>
            <div style={{marginTop: 8}}>
              倾销是损害的
              <Ink color={PALETTE.malachiteSoft}>一个原因</Ink>
              （非唯一原因）
            </div>
          </div>
        </div>
        <div
          data-final-knowledge="split-case-rule"
          style={{...enter(frame, 150), display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap'}}
        >
          <Tag color={PALETTE.cinnabar} text="多国产品" />
          <span style={{fontSize: 22, lineHeight: 1.55}}>
            原则上
            <Ink color={PALETTE.cinnabarSoft}>分案处理</Ink>
            、分别确定影响；只有满足
            <Under color={PALETTE.cinnabar}>法定条件</Under>
            才能并案
            <Ink color={PALETTE.cinnabarSoft}>累积评估</Ink>
            ——「应当累积评估」的说法过于绝对，错误
          </span>
        </div>
        <div style={{...enter(frame, 200), display: 'flex', justifyContent: 'center', whiteSpace: 'nowrap'}}>
          <MineralStamp delay={200} frame={frame} color={PALETTE.malachite} text={'三条件缺一不可：倾销 · 损害 · 因果关系'} />
        </div>
      </div>
    </MineralShell>
  );
};

export const RemedyProcedureScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="investigation-origin" data-final-knowledge="procedure-pipeline" data-final-knowledge="anti-dumping-tax-rules" data-final-knowledge="price-commitment-rules" */
  const frame = useCurrentFrame();
  const stations = ['商务部发起调查', '初步裁定', '临时措施', '终局裁定', '措施落地'];
  return (
    <MineralShell code={3} station={3} title="两反一保程序：一条流水线">
      <div
        data-layout="remedy-relay-pipeline"
        data-visual-anchor="flow-path"
        data-visual-grammar="mofcom-investigates-on-application-or-ex-officio,preliminary-ruling-opens-provisional-measures,final-ruling-picks-commitment-or-duty"
        data-text-treatments="label-block,chip,thin-underline,soft-highlight"
        data-focal-rule="commitment-and-anti-dumping-duty-never-combine"
        data-focal-channels="connector,contrast,enclosure,icon"
        style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}
      >
        <div
          data-final-knowledge="investigation-origin"
          style={{...enter(frame, 12), display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', marginTop: 4}}
        >
          <Tag color={PALETTE.cinnabar} text="调查机关＝商务部" />
          <TokMinistry />
          <Chip color={PALETTE.azurite}>两反一保：申请发起 或 商务部主动发起</Chip>
          <Chip color={PALETTE.malachite}>申请人＝国内产业 <TokIndustry />（非国内企业）</Chip>
        </div>
        <div
          data-final-knowledge="procedure-pipeline"
          style={{...enter(frame, 60), border: `3px solid ${PALETTE.azurite}`, backgroundColor: PALETTE.panel, padding: '22px 26px'}}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'nowrap'}}>
            {stations.map((station, index) => (
              <div key={station} style={{display: 'flex', alignItems: 'center', gap: 8}}>
                <div style={{border: `2px solid ${PALETTE.line}`, backgroundColor: 'rgba(240,227,206,0.9)', padding: '12px 14px', fontSize: 22, fontWeight: 700, whiteSpace: 'nowrap'}}>{station}</div>
                {index < stations.length - 1 ? <ArrowRight size={22} color={PALETTE.azurite} /> : null}
              </div>
            ))}
          </div>
          <div style={{marginTop: 12, fontSize: 22, lineHeight: 1.6}}>
            初裁→临时反倾销措施：征收
            <Ink color={PALETTE.azuriteSoft}>临时税</Ink>
            或要求
            <Under color={PALETTE.azurite}>担保</Under>
            ；终裁不征税或不追溯征税→税
            <Ink color={PALETTE.malachiteSoft}>退回</Ink>
            、担保
            <Ink color={PALETTE.malachiteSoft}>解除</Ink>
            ；追溯征税→「
            <Under color={PALETTE.cinnabar}>多退少不补</Under>
            」
          </div>
        </div>
        <div style={{display: 'flex', gap: 20}}>
          <div
            data-final-knowledge="anti-dumping-tax-rules"
            style={{...enterX(frame, 130, 42), flex: 1, border: `3px solid ${PALETTE.cinnabar}`, borderTop: `12px solid ${PALETTE.cinnabar}`, backgroundColor: PALETTE.panel, padding: '20px 24px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.cinnabar}}>反倾销税 · 四点</div>
            <div style={{marginTop: 8}}>
              <Under color={PALETTE.cinnabar}>进口经营者</Under>
              缴纳（海关执行）；原则上
              <Ink color={PALETTE.cinnabarSoft}>不追溯</Ink>
              ；一般不超过
              <Ink color={PALETTE.cinnabarSoft}>5 年</Ink>
              ；税额≤倾销幅度、按出口经营者
              <Under color={PALETTE.cinnabar}>分别确定</Under>
            </div>
          </div>
          <div
            data-final-knowledge="price-commitment-rules"
            style={{...enterX(frame, 160, 42), flex: 1, border: `3px solid ${PALETTE.malachite}`, borderTop: `12px solid ${PALETTE.malachite}`, backgroundColor: PALETTE.panel, padding: '20px 24px', fontSize: 22, lineHeight: 1.7}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.malachite}}>价格承诺 · 四点</div>
            <div style={{marginTop: 8}}>
              <Under color={PALETTE.malachite}>出口经营者</Under>
              作出；商务部
              <Ink color={PALETTE.malachiteSoft}>可以接受可以拒绝</Ink>
              ；初裁之前
              <Under color={PALETTE.cinnabar}>不能寻求或接受</Under>
              ；与反倾销税
              <Ink color={PALETTE.cinnabarSoft}>不能并用</Ink>
            </div>
          </div>
        </div>
        <div style={{...enter(frame, 210), display: 'flex', justifyContent: 'center', whiteSpace: 'nowrap'}}>
          <MineralStamp delay={210} frame={frame} text={'商务部复审非必经 → 不服可行政复议或行政诉讼'} />
        </div>
      </div>
    </MineralShell>
  );
};

export const SubsidySafeguardScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="countervailing-essentials" data-final-knowledge="safeguard-essentials" */
  const frame = useCurrentFrame();
  return (
    <MineralShell code={4} station={4} title="反补贴与保障措施：双卡">
      <div
        data-layout="twin-remedy-cards"
        data-visual-anchor="role-pair"
        data-visual-grammar="subsidy-needs-specific-financial-benefit,safeguard-needs-surging-imports-and-serious-injury,safeguard-has-no-judicial-review"
        data-text-treatments="label-block,chip,thin-underline,soft-highlight"
        data-focal-rule="commitment-subject-expands-to-exporting-government"
        data-focal-channels="contrast,enclosure,locator,icon"
        style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}
      >
        <div style={{display: 'flex', gap: 22, marginTop: 4}}>
          <div
            data-final-knowledge="countervailing-essentials"
            style={{...enterX(frame, 14, 46), flex: 1, borderTop: `14px solid ${PALETTE.azurite}`, backgroundColor: PALETTE.panel, padding: '22px 26px', fontSize: 22, lineHeight: 1.75}}
          >
            <div style={{fontSize: 26, fontWeight: 800, color: PALETTE.azurite, display: 'flex', alignItems: 'center', gap: 10}}>
              <ShieldAlert size={24} color={PALETTE.azurite} />
              反补贴 · 专向补贴三件套
            </div>
            <div style={{marginTop: 12}}>
              出口国政府（直接或间接）提供
              <Ink color={PALETTE.azuriteSoft}>财政资助</Ink>
              （现金或非现金）
              <br />
              接受者获得
              <Under color={PALETTE.azurite}>利益</Under>
              ；
              <Ink color={PALETTE.azuriteSoft}>专向性</Ink>
              ＝部分企业或产业获得
              <br />
              损害与因果
              <Under color={PALETTE.malachite}>同反倾销</Under>
              ；程序同反倾销
              <br />
              区别：承诺主体＝
              <Ink color={PALETTE.cinnabarSoft}>出口国政府 或 出口经营者</Ink>
            </div>
          </div>
          <div
            data-final-knowledge="safeguard-essentials"
            style={{...enterX(frame, 46, 46), flex: 1, borderTop: `14px solid ${PALETTE.cinnabar}`, backgroundColor: PALETTE.panel, padding: '22px 26px', fontSize: 22, lineHeight: 1.75}}
          >
            <div style={{fontSize: 26, fontWeight: 800, color: PALETTE.cinnabar, display: 'flex', alignItems: 'center', gap: 10}}>
              <ShieldAlert size={24} color={PALETTE.cinnabar} />
              保障措施 · 要点
            </div>
            <div style={{marginTop: 12}}>
              条件：进口数量
              <Ink color={PALETTE.cinnabarSoft}>绝对或相对增加</Ink>
              →
              <Under color={PALETTE.cinnabar}>严重损害</Under>
              或严重损害威胁＋因果
              <br />
              措施：提高关税或
              <Ink color={PALETTE.cinnabarSoft}>数量限制</Ink>
              <br />
              期限：一般≤
              <Ink color={PALETTE.cinnabarSoft}>4 年</Ink>
              ，特殊≤
              <Under color={PALETTE.cinnabar}>10 年</Under>
              <br />
              <Ban size={20} color={PALETTE.cinnabar} style={{display: 'inline-block', verticalAlign: '-3px'}} />
              不区分来源国；超 1 年应
              <Ink color={PALETTE.malachiteSoft}>逐步放宽</Ink>
              ；初裁非必经、
              <Under color={PALETTE.cinnabar}>无司法审查</Under>
              <TokReview />
            </div>
          </div>
        </div>
        <div style={{...enter(frame, 150), display: 'flex', justifyContent: 'center', whiteSpace: 'nowrap'}}>
          <MineralStamp delay={150} frame={frame} color={PALETTE.azurite} text={'保障措施可以针对公平贸易行为 —— 这是它与两反的根本分野'} />
        </div>
      </div>
    </MineralShell>
  );
};

export const RemedyComparisonScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="remedy-comparison-lanes" */
  const frame = useCurrentFrame();
  const rows = [
    {dim: '目的', anti: '针对不公平贸易行为', safe: '可针对公平贸易行为', color: PALETTE.cinnabar},
    {dim: '损害', anti: '实质损害 / 威胁 / 实质阻碍', safe: '严重损害 / 严重损害威胁', color: PALETTE.azurite},
    {dim: '措施', anti: '关税＋价格承诺（特有）', safe: '关税＋数量限制（特有）', color: PALETTE.malachite},
    {dim: '针对性', anti: '必须针对特定来源', safe: '禁止针对特定来源', color: PALETTE.cinnabar},
    {dim: '期限', anti: '不超过 5 年，期内不能变', safe: '4 年（特殊 10 年），逐步放宽', color: PALETTE.azurite},
    {dim: '磋商', anti: '倾销：通知即可；补贴：合理机会', safe: '充分机会', color: PALETTE.malachite},
    {dim: '司法审查', anti: '可提起行政诉讼', safe: '不得提起行政诉讼', color: PALETTE.cinnabar},
  ];
  return (
    <MineralShell code={5} station={5} title="两反一保：七维对比">
      <div
        data-layout="three-lane-remedy-comparison"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="antidumping-countervailing-share-one-column-vs-safeguard,consultation-intensity-escalates-notice-reasonable-full,judicial-review-excludes-safeguard-alone"
        data-text-treatments="label-block,chip,thin-underline,soft-highlight"
        data-focal-rule="only-safeguard-forbids-judicial-review"
        data-focal-channels="contrast,enclosure,locator,icon"
        style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}
      >
        <div style={{display: 'flex', gap: 16, marginTop: 4}}>
          <div style={{flex: 0.62}} />
          <div style={{...enter(frame, 10), flex: 1.4}}><Tag color={PALETTE.azurite} text="反倾销 · 反补贴" /></div>
          <div style={{...enter(frame, 22), flex: 1}}><Tag color={PALETTE.cinnabar} text="保障措施" /></div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 14}}>
          {rows.map((row) => (
            <div key={row.dim} style={{...enterX(frame, 40 + rows.indexOf(row) * 16, 34), display: 'flex', gap: 16, alignItems: 'stretch'}}>
              <div style={{flex: 0.62, display: 'flex', alignItems: 'center'}}>
                <span style={{fontSize: 23, fontWeight: 800, color: PALETTE.ink}}>{row.dim}</span>
              </div>
              <div style={{flex: 1.4, borderLeft: `6px solid ${row.color}`, backgroundColor: PALETTE.panel, padding: '10px 16px', fontSize: 22, lineHeight: 1.5, display: 'flex', alignItems: 'center'}}>{row.anti}</div>
              <div style={{flex: 1, borderLeft: `6px solid ${PALETTE.cinnabar}`, backgroundColor: PALETTE.panel, padding: '10px 16px', fontSize: 22, lineHeight: 1.5, display: 'flex', alignItems: 'center'}}>{row.safe}</div>
            </div>
          ))}
        </div>
        <div style={{...enter(frame, 190), display: 'flex', justifyContent: 'center', whiteSpace: 'nowrap'}}>
          <MineralStamp delay={190} frame={frame} text={'共同措施＝关税；承诺＝两反特有；数量限制＝保障特有'} />
        </div>
      </div>
    </MineralShell>
  );
};

export const ForeignTradeAdministration = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: PALETTE.sand, overflow: 'hidden'}}
  >
    <TimelineSequence name="01-foreign-trade-law" {...SCENES.foreignTradeLaw}>
      <ForeignTradeLawScene />
    </TimelineSequence>
    <TimelineSequence name="02-export-control" {...SCENES.exportControl}>
      <ExportControlScene />
    </TimelineSequence>
    <TimelineSequence name="03-dumping-conditions" {...SCENES.dumpingConditions}>
      <DumpingConditionsScene />
    </TimelineSequence>
    <TimelineSequence name="04-remedy-procedure" {...SCENES.remedyProcedure}>
      <RemedyProcedureScene />
    </TimelineSequence>
    <TimelineSequence name="05-subsidy-safeguard" {...SCENES.subsidySafeguard}>
      <SubsidySafeguardScene />
    </TimelineSequence>
    <TimelineSequence name="06-remedy-comparison" {...SCENES.remedyComparison}>
      <RemedyComparisonScene />
    </TimelineSequence>
  </AbsoluteFill>
);
