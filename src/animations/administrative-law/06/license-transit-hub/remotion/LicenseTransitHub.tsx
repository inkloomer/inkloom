import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { TimelineSequence } from "../../../../shared/remotion-runtime";
import { SCENES } from "./storyboard";
const C = {
  night: "#102A43",
  blue: "#1677B8",
  cyan: "#20A4A6",
  amber: "#F4A261",
  red: "#D1495B",
  green: "#2A9D72",
  cream: "#FFF8E8",
  paper: "#F1F5F3",
  white: "#FFFFFF",
  gray: "#627D88",
};
const PLAYER_CONTROL_SAFE_BOTTOM = 160;
const enter = (f: number, d = 0) => ({
  opacity: interpolate(f, [d, d + 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }),
  translate: `0 ${interpolate(f, [d, d + 22], [30, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px`,
});
const Shell = ({
  code,
  title,
  children,
}: {
  code: string;
  title: string;
  children: React.ReactNode;
}) => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    className="font-animation-body"
    style={{
      backgroundColor: C.cream,
      color: C.night,
      overflow: "hidden",
      backgroundImage:
        "linear-gradient(rgba(16,42,67,.055) 1px,transparent 1px),linear-gradient(90deg,rgba(16,42,67,.055) 1px,transparent 1px)",
      backgroundSize: "48px 48px",
    }}
  >
    <header
      style={{
        position: "absolute",
        left: 64,
        right: 64,
        top: 42,
        height: 104,
        display: "flex",
        alignItems: "center",
        gap: 30,
        borderBottom: `5px solid ${C.night}`,
      }}
    >
      <div style={{ fontSize: 20, fontWeight: 900, color: C.blue }}>
        LICENSE HUB
        <br />
        GATE {code}
      </div>
      <h1
        className="font-animation-title"
        style={{ fontSize: 47, lineHeight: 1.08, margin: 0 }}
      >
        {title}
      </h1>
      <span
        style={{
          marginLeft: "auto",
          background: C.night,
          color: C.white,
          padding: "12px 20px",
          fontSize: 23,
          fontWeight: 900,
        }}
      >
        行政许可
      </span>
    </header>
    <main
      style={{
        position: "absolute",
        left: 64,
        right: 64,
        top: 172,
        bottom: PLAYER_CONTROL_SAFE_BOTTOM,
      }}
    >
      {children}
    </main>
  </AbsoluteFill>
);
const Badge = ({
  children,
  c = C.blue,
}: {
  children: React.ReactNode;
  c?: string;
}) => (
  <span
    style={{
      display: "inline-block",
      padding: "7px 14px",
      background: c,
      color: C.white,
      fontSize: 22,
      fontWeight: 900,
    }}
  >
    {children}
  </span>
);
const Note = ({
  title,
  text,
  c = C.blue,
}: {
  title: string;
  text: string;
  c?: string;
}) => (
  <div
    style={{ padding: 22, borderLeft: `10px solid ${c}`, background: C.white }}
  >
    <b style={{ fontSize: 29, color: c }}>{title}</b>
    <div style={{ fontSize: 22, lineHeight: 1.45, marginTop: 10 }}>{text}</div>
  </div>
);

export const LicenseEntryGatesScene = () => {
  const f = useCurrentFrame();
  /* data-final-knowledge="gate-0" data-final-knowledge="gate-1" data-final-knowledge="gate-2" data-final-knowledge="gate-3" */ const gates =
    [
      [
        "外部性",
        "看相对人身份",
        "机关内部审批、上下级请示批准、内部执法资格认证均 OUT",
      ],
      ["依申请", "无申请则无许可", "必须由公民、法人或其他组织提出申请"],
      ["授益性", "取得活动资格或能力", "行政机关依法审查后准予从事特定活动"],
      ["要式性", "受理与决定均书面", "许可没有口头申请，格式文本不得收费"],
    ];
  return (
    <Shell code="01" title="四道进站闸机：先确认它是不是行政许可">
      <div
        data-layout="four-entry-turnstiles"
        data-visual-anchor="flow-path"
        data-visual-grammar="application-crosses-four-license-identification-gates,failure-at-externality-or-request-gate-routes-the-matter-out"
        data-text-treatments="label-block,external-negation,thin-underline"
        data-focal-rule="license-definition-features"
        data-focal-channels="connector,contrast,spatial"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 24,
        }}
      >
        {gates.map((g, i) => (
          <div
            key={g[0]}
            data-final-knowledge={`gate-${i}`}
            style={{
              height: 520,
              padding: 26,
              background: C.white,
              borderTop: `16px solid ${[C.blue, C.cyan, C.green, C.amber][i]}`,
              ...enter(f, 8 + i * 16),
            }}
          >
            <div style={{ fontSize: 19, color: C.gray }}>
              TURNSTILE 0{i + 1}
            </div>
            <h2 style={{ fontSize: 37 }}>{g[0]}</h2>
            <Badge c={[C.blue, C.cyan, C.green, C.amber][i]}>{g[1]}</Badge>
            <p style={{ fontSize: 24, lineHeight: 1.55 }}>{g[2]}</p>
          </div>
        ))}
      </div>
    </Shell>
  );
};
export const FiveLicensePlatformsScene = () => {
  const f = useCurrentFrame();
  /* data-final-knowledge="platform-0" data-final-knowledge="platform-1" data-final-knowledge="platform-2" data-final-knowledge="platform-3" data-final-knowledge="platform-4" */ const a =
    [
      [
        "一般许可",
        "安全、宏观调控、生态与生命财产",
        "形式1人；实质2人以上",
        C.blue,
      ],
      [
        "特许",
        "有限资源、公共资源、公益行业准入",
        "招标、拍卖；谁优谁得",
        C.amber,
      ],
      [
        "认可",
        "公共服务职业的信誉、条件、技能",
        "公民考试不得强训/指定教材；组织考核",
        C.green,
      ],
      [
        "核准",
        "重要设备产品按技术标准检验检疫",
        "专业人员2人以上，5日内；不准须书面说明标准",
        C.red,
      ],
      [
        "登记",
        "企业等设立，确认主体资格",
        "通常形式审查当场登记；实质审查2人以上",
        C.cyan,
      ],
    ];
  return (
    <Shell code="02" title="五类许可站台：事项性质决定专属程序">
      <div
        data-layout="five-radial-transit-platforms"
        data-visual-anchor="flow-target"
        data-visual-grammar="five-license-types-radiate-from-one-classification-hub,each-type-links-its-subject-matter-to-a-distinct-procedure"
        data-text-treatments="label-block,soft-highlight,stamp"
        data-focal-rule="five-statutory-license-types"
        data-focal-channels="connector,enclosure,contrast"
        style={{ position: "absolute", inset: 26 }}
      >
        <div
          style={{
            position: "absolute",
            left: 720,
            top: 250,
            width: 300,
            height: 170,
            borderRadius: "50%",
            background: C.night,
            color: C.white,
            display: "grid",
            placeItems: "center",
            fontSize: 35,
            fontWeight: 900,
          }}
        >
          许可事项
          <br />
          分流枢纽
        </div>
        {a.map((x, i) => {
          const p = [
            [20, 0],
            [590, 0],
            [1180, 0],
            [240, 430],
            [1010, 430],
          ][i];
          return (
            <div
              key={x[0]}
              data-final-knowledge={`platform-${i}`}
              style={{
                position: "absolute",
                left: p[0],
                top: p[1],
                width: i < 3 ? 520 : 500,
                padding: 22,
                background: C.white,
                border: `5px solid ${x[3]}`,
                ...enter(f, 8 + i * 14),
              }}
            >
              <h2 style={{ fontSize: 32, color: x[3], margin: "0 0 8px" }}>
                {x[0]}
              </h2>
              <div style={{ fontSize: 22 }}>{x[1]}</div>
              <div
                style={{
                  fontSize: 22,
                  marginTop: 12,
                  padding: 12,
                  background: C.paper,
                }}
              >
                {x[2]}
              </div>
            </div>
          );
        })}
      </div>
    </Shell>
  );
};
export const TransferQuotaExpiryTagsScene = () => {
  const f = useCurrentFrame();
  return (
    <Shell code="03" title="三轴行李牌：转让、数量与期限分别检查">
      <div
        data-layout="three-baggage-tag-classifiers"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="license-carries-independent-transfer-quota-and-expiry-tags,limited-quota-and-fixed-term-tags-trigger-special-priority-and-renewal-rules"
        data-text-treatments="stamp,thin-underline,soft-highlight"
        data-focal-rule="other-license-classifications"
        data-focal-channels="contrast,annotation,spatial"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 35,
        }}
      >
        <div data-final-knowledge="transfer-tag">
          <Note
            title="可否转让"
            text="采矿证可转让；律师证不可转让。不是所有许可都禁止转让。"
            c={C.blue}
          />
        </div>
        <div data-final-knowledge="quota-tag">
          <Note
            title="发放数量"
            text="特许有数量限制：竞争、谁优谁得；一般许可有数量限制：原则按受理顺序，先到先得。"
            c={C.amber}
          />
        </div>
        <div
          data-final-knowledge="expiry-tag"
          style={{
            padding: 25,
            background: C.white,
            border: `6px solid ${C.red}`,
            ...enter(f, 34),
          }}
        >
          <h2 style={{ fontSize: 35, color: C.red }}>附期限许可</h2>
          <p style={{ fontSize: 24, lineHeight: 1.5 }}>
            届满前 <b>30日</b>{" "}
            申请延续（法、法规、规章可另定）；机关须在届满前决定，逾期视为
            <b>准予延续</b>。
          </p>
        </div>
      </div>
    </Shell>
  );
};
export const RulemakingAuthorityTowerScene = () => {
  const f = useCurrentFrame();
  /* data-final-knowledge="authority-0" data-final-knowledge="authority-1" data-final-knowledge="authority-2" data-final-knowledge="authority-3" data-final-knowledge="local-prohibitions" data-final-knowledge="specification-limit" */ const floors =
    [
      ["法律 / 行政法规 / 地方性法规", "可设经常性许可", C.green],
      [
        "国务院决定",
        "全国临时许可；必要且无法律、行政法规；实施后及时立法或制定行政法规",
        C.blue,
      ],
      [
        "省政府规章",
        "地方临时许可；无法律、行政法规、地方性法规且急需；满1年继续须提请地方性法规",
        C.amber,
      ],
      ["市规章 / 部委规章 / 规范性文件", "无设定权", C.red],
    ];
  return (
    <Shell code="04" title="设定权楼层：从无到有只能由有权文件开门">
      <div
        data-layout="four-level-rulemaking-authority-tower"
        data-visual-anchor="boundary"
        data-visual-grammar="higher-norm-levels-may-create-licenses-while-lower-files-cannot,local-creation-power-stops-at-three-national-unity-boundaries"
        data-text-treatments="external-negation,label-block,thin-underline"
        data-focal-rule="creation-versus-specification"
        data-focal-channels="spatial,contrast,enclosure"
        style={{
          display: "grid",
          gridTemplateColumns: "1.25fr .75fr",
          gap: 35,
        }}
      >
        <div>
          {floors.map((x, i) => (
            <div
              key={x[0]}
              data-final-knowledge={`authority-${i}`}
              style={{
                marginBottom: 14,
                padding: "17px 24px",
                background: C.white,
                borderLeft: `14px solid ${x[2]}`,
                ...enter(f, 8 + i * 13),
              }}
            >
              <b style={{ fontSize: 28 }}>{x[0]}</b>
              <span style={{ fontSize: 22, marginLeft: 25 }}>{x[1]}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gap: 18 }}>
          <Note
            title="地方三条禁区"
            text="不得设国家统一资格资质；不得设企业设立登记及前置许可；不得限制外地经营、服务、商品进入。"
            c={C.red}
          />
          <Note
            title="规定权只可从粗到细"
            text="不得增设许可，也不得增设违反上位法的条件。地方加“驾驶证满6个月”等条件即违法。"
            c={C.cyan}
          />
        </div>
      </div>
    </Shell>
  );
};
export const EconomicLicenseBypassScene = () => {
  const f = useCurrentFrame();
  /* data-final-knowledge="bypass-province" data-final-knowledge="bypass-council" data-final-knowledge="bypass-result" */ return (
    <Shell code="05" title="停止实施旁路：只为行政法规设定的经济事务开放">
      <div
        data-layout="economic-license-bypass-route"
        data-visual-anchor="flow-path"
        data-visual-grammar="provincial-government-identifies-a-substitutable-economic-license,state-council-approval-opens-a-local-stop-implementation-bypass"
        data-text-treatments="stamp,external-negation,soft-highlight"
        data-focal-rule="economic-license-stop-procedure"
        data-focal-channels="connector,motion,contrast"
        style={{ display: "flex", alignItems: "center", gap: 25 }}
      >
        {[
          ["省级政府判断", "市场调节 / 行业自律 / 事后监督可解决"],
          ["报国务院批准", "不是省政府自行停止"],
          ["本行政区域停止实施", "仅限行政法规设定的有关经济事务"],
        ].map((x, i) => (
          <React.Fragment key={x[0]}>
            <Note title={x[0]} text={x[1]} c={[C.blue, C.amber, C.green][i]} />
            {i < 2 && <div style={{ fontSize: 55, color: C.red }}>→</div>}
          </React.Fragment>
        ))}
      </div>
    </Shell>
  );
};
export const ImplementationControlTowerScene = () => {
  const f = useCurrentFrame();
  return (
    <Shell code="06" title="实施主体调度塔：授权取得身份，委托只是帮手">
      <div
        data-layout="authority-delegation-control-tower"
        data-visual-anchor="role-pair"
        data-visual-grammar="authorization-transfers-administrative-subject-status-to-a-public-affairs-organization,delegation-keeps-status-with-the-principal-and-uses-another-agency-as-helper"
        data-text-treatments="label-block,external-negation,stamp"
        data-focal-rule="implementation-subjects"
        data-focal-channels="spatial,connector,contrast"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 32,
        }}
      >
        <div data-final-knowledge="implement-organ">
          <Note
            title="行政机关"
            text="有许可权的行政机关，在法定职权范围内自行实施。"
            c={C.blue}
          />
        </div>
        <div data-final-knowledge="authorized-organization">
          <Note
            title="被授权组织"
            text="依据法律、法规；对象为公共事务管理组织；授权后取得行政主体资格。"
            c={C.green}
          />
        </div>
        <div data-final-knowledge="delegated-organ">
          <Note
            title="被委托机关"
            text="许可权主体只能委托其他行政机关；受托者无主体资格；委托对象和内容须公告。"
            c={C.red}
          />
        </div>
      </div>
    </Shell>
  );
};
export const ConvenienceTransferConcourseScene = () => {
  const f = useCurrentFrame();
  /* data-final-knowledge="route-0" data-final-knowledge="route-1" data-final-knowledge="route-2" data-final-knowledge="route-3" */ const routes =
    [
      [
        "一个机关内多机构",
        "一个机构统一受理，一个窗口对外",
        "权力不变",
        C.blue,
      ],
      [
        "集中许可",
        "国务院批准，省政府决定一个机关行使其他机关许可权",
        "权力所有权转移",
        C.red,
      ],
      [
        "联合许可",
        "本级政府组织有关部门在许可大厅联合办理",
        "权力不转移",
        C.amber,
      ],
      [
        "统一许可",
        "一个部门受理并转告各部门分别提意见后统一办理",
        "权力不转移",
        C.green,
      ],
    ];
  return (
    <Shell code="07" title="便民换乘大厅：窗口可以合并，权力未必转移">
      <div
        data-layout="four-concourse-transfer-routes"
        data-visual-anchor="flow-path"
        data-visual-grammar="service-windows-consolidate-through-four-different-routing-models,only-centralized-licensing-transfers-power-ownership"
        data-text-treatments="thin-underline,label-block,soft-highlight"
        data-focal-rule="convenience-measures"
        data-focal-channels="connector,spatial,contrast"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: 26,
        }}
      >
        {routes.map((x, i) => (
          <div
            key={x[0]}
            data-final-knowledge={`route-${i}`}
            style={{
              padding: 25,
              background: C.white,
              borderTop: `12px solid ${x[3]}`,
              ...enter(f, 8 + i * 14),
            }}
          >
            <h2 style={{ fontSize: 31 }}>{x[0]}</h2>
            <p style={{ fontSize: 23 }}>{x[1]}</p>
            <Badge c={x[3]}>{x[2]}</Badge>
          </div>
        ))}
      </div>
    </Shell>
  );
};
export const ApplicationProcessingLineScene = () => {
  const f = useCurrentFrame();
  /* data-final-knowledge="process-0" data-final-knowledge="process-1" data-final-knowledge="process-2" data-final-knowledge="process-3" data-final-knowledge="process-4" */ const steps =
    [
      [
        "申请",
        "可委托，须亲自到场除外；书面含信函、电报、传真、电子邮件等；不得索要无关材料；格式文本免费",
      ],
      [
        "受理",
        "受理/不受理须专用章+日期书面凭证；可当场更正须允许；材料欠缺当场或5日内一次告知，逾期视为受理",
      ],
      ["审查", "形式审查1人以上；实质审查2人以上"],
      [
        "决定",
        "能当场则当场；否则20日，可经负责人延10日；准予决定公开，不予不公开；无地域限制的法律/行政法规许可全国有效",
      ],
      ["交付", "决定后10日内颁发、送达、贴标签或盖印；并非所有许可都发许可证"],
    ];
  return (
    <Shell code="08" title="一般程序流水线：申请到交付，每站都有刚性凭证">
      <div
        data-layout="five-station-application-processing-line"
        data-visual-anchor="flow-path"
        data-visual-grammar="written-application-moves-through-receipt-review-decision-and-delivery,each-station-produces-a-distinct-document-personnel-or-time-requirement"
        data-text-treatments="label-block,thin-underline,soft-highlight"
        data-focal-rule="general-license-procedure"
        data-focal-channels="connector,motion,annotation"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5,1fr)",
          gap: 18,
        }}
      >
        {steps.map((x, i) => (
          <div
            key={x[0]}
            data-final-knowledge={`process-${i}`}
            style={{
              padding: 20,
              background: C.white,
              borderBottom: `14px solid ${[C.blue, C.cyan, C.amber, C.green, C.red][i]}`,
              ...enter(f, 8 + i * 14),
            }}
          >
            <div style={{ fontSize: 19, color: C.gray }}>STATION 0{i + 1}</div>
            <h2 style={{ fontSize: 31 }}>{x[0]}</h2>
            <p style={{ fontSize: 22, lineHeight: 1.45 }}>{x[1]}</p>
          </div>
        ))}
      </div>
    </Shell>
  );
};
export const HearingTheaterScene = () => {
  const f = useCurrentFrame();
  /* data-final-knowledge="hearing-ex-officio" data-final-knowledge="hearing-on-request" data-final-knowledge="hearing-recusal" */ return (
    <Shell code="09" title="听证剧场：启动、回避、公开与笔录共同锁定决定">
      <div
        data-layout="hearing-theater-stage-and-audience"
        data-visual-anchor="role-pair"
        data-visual-grammar="hearing-enters-by-ex-officio-or-party-request-route,recused-host-public-stage-and-exclusive-record-constrain-the-final-decision"
        data-text-treatments="stamp,external-negation,label-block"
        data-focal-rule="hearing-procedure"
        data-focal-channels="enclosure,spatial,contrast"
        style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 35 }}
      >
        <div style={{ display: "grid", gap: 18 }}>
          <Note
            title="依职权启动"
            text="法、法规、规章规定应听证；涉及公共利益的重大许可须公告并举行。"
          />
          <Note
            title="依申请启动"
            text="直接涉及申请人与他人重大利益关系：告知权利；申请人或利害关系人要求即应举行。"
            c={C.green}
          />
          <Note
            title="主持人回避"
            text="参与过许可审查或有直接利害关系者不得主持。"
            c={C.red}
          />
        </div>
        <div
          data-final-knowledge="hearing-stage"
          style={{
            padding: 30,
            background: C.night,
            color: C.white,
            ...enter(f, 24),
          }}
        >
          <h2 style={{ fontSize: 38 }}>公开听证</h2>
          <p style={{ fontSize: 23 }}>
            国家秘密、商业秘密、个人隐私除外；费用由行政机关承担。
          </p>
          <div
            style={{
              marginTop: 30,
              padding: 24,
              background: C.white,
              color: C.night,
              fontSize: 24,
              lineHeight: 1.5,
            }}
          >
            制作笔录 → 参加人确认签字/盖章 → 行政机关必须根据笔录决定；笔录具有
            <b>排他效力</b>。
          </div>
        </div>
      </div>
    </Shell>
  );
};
export const DeadlineControlBoardScene = () => {
  const f = useCurrentFrame();
  /* data-final-knowledge="clock-0" data-final-knowledge="clock-1" data-final-knowledge="clock-2" data-final-knowledge="clock-3" data-final-knowledge="clock-4" data-final-knowledge="clock-5" */ const clocks =
    [
      ["补正告知", "5日内一次告知；逾期视为受理"],
      ["一般决定", "20日 + 经负责人批准延10日"],
      ["联合/统一/集中", "45日 + 经本级政府负责人批准延15日"],
      ["听证", "申请5日；20日内组织；举行前7日通知"],
      ["证照交付", "决定后10日内"],
      ["延续", "届满30日前申请；届满前决定；逾期同意"],
    ];
  return (
    <Shell code="10" title="期限控制盘：数字相近，法律后果完全不同">
      <div
        data-layout="six-clock-deadline-control-board"
        data-visual-anchor="timeline-gate"
        data-visual-grammar="six-clocks-bind-different-procedural-events-to-different-durations,expiry-of-selected-clocks-produces-acceptance-or-renewal-by-legal-fiction"
        data-text-treatments="stamp,soft-highlight,thin-underline"
        data-focal-rule="license-deadlines"
        data-focal-channels="icon,contrast,annotation"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 25,
        }}
      >
        {clocks.map((x, i) => (
          <div
            key={x[0]}
            data-final-knowledge={`clock-${i}`}
            style={{
              padding: 23,
              borderRadius: 100,
              background: C.white,
              border: `6px solid ${[C.blue, C.cyan, C.amber, C.red, C.green, C.night][i]}`,
              ...enter(f, 8 + i * 12),
            }}
          >
            <b style={{ fontSize: 29 }}>{x[0]}</b>
            <div style={{ fontSize: 22, marginTop: 8 }}>{x[1]}</div>
          </div>
        ))}
      </div>
    </Shell>
  );
};
export const SupervisionMaintenanceDockScene = () => {
  const f = useCurrentFrame();
  /* data-final-knowledge="resource-correction" data-final-knowledge="service-correction" data-final-knowledge="safety-correction" */ return (
    <Shell code="11" title="监督维修坞：实施中违法先区分改正与吊销">
      <div
        data-layout="three-maintenance-bays-and-revocation-alert"
        data-visual-anchor="document-fork"
        data-visual-grammar="ongoing-license-breaches-enter-three-correction-bays,serious-post-license-illegality-routes-to-revocation-as-penalty"
        data-text-treatments="external-negation,label-block,stamp"
        data-focal-rule="supervision-responses"
        data-focal-channels="connector,contrast,enclosure"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 30,
        }}
      >
        <Note
          title="资源利用义务"
          text="未依法履行开发利用义务：责令限期改正。"
          c={C.blue}
        />
        <Note
          title="市场准入特许义务"
          text="未履行低廉收费、普遍服务、持续服务：责令限期改正。"
          c={C.amber}
        />
        <Note
          title="重要安全隐患"
          text="责令停建、停用，并立即改正，不是限期改正。责令改正属于行政强制措施。"
          c={C.red}
        />
        <div
          data-final-knowledge="license-revocation-penalty"
          style={{
            position: "absolute",
            left: 420,
            right: 420,
            bottom: 10,
            padding: 20,
            background: C.night,
            color: C.white,
            fontSize: 25,
            textAlign: "center",
          }}
        >
          许可实施后严重违法 → 可以吊销许可证/执照，性质是行政处罚
        </div>
      </div>
    </Shell>
  );
};
export const FourExitTracksScene = () => {
  const f = useCurrentFrame();
  /* data-final-knowledge="exit-0" data-final-knowledge="exit-1" data-final-knowledge="exit-2" data-final-knowledge="exit-3" */ const exits =
    [
      [
        "撤销",
        "许可获得过程违法",
        "自己、法院、上级、被越权机关均可撤销",
        "欺骗取得：不赔+处罚；安全类3年禁申；审查中未遂则不受理/不许可+警告+安全类1年禁申",
        C.red,
      ],
      [
        "吊销",
        "合法取得后实施严重违法",
        "行政处罚",
        "许可本身原来合法",
        C.amber,
      ],
      [
        "撤回",
        "合法许可因依据或客观情况变化",
        "废止效力并补偿",
        "被许可人获得和实施均不违法",
        C.green,
      ],
      [
        "注销",
        "许可已无法继续效力",
        "程序性盖注销章/撕毁",
        "撤销、吊销、撤回、死亡、届满不延后均注销",
        C.blue,
      ],
    ];
  return (
    <Shell code="12" title="四条退出轨道：看违法发生在何时、许可为何失效">
      <div
        data-layout="four-license-exit-tracks"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="timing-and-cause-select-revocation-penalty-withdrawal-or-cancellation-track,each-track-produces-a-different-liability-compensation-or-procedural-consequence"
        data-text-treatments="label-block,external-negation,thin-underline"
        data-focal-rule="four-license-termination-concepts"
        data-focal-channels="spatial,contrast,annotation"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 20,
        }}
      >
        {exits.map((x, i) => (
          <div
            key={x[0]}
            data-final-knowledge={`exit-${i}`}
            style={{
              padding: 20,
              background: C.white,
              borderTop: `15px solid ${x[4]}`,
              ...enter(f, 8 + i * 14),
            }}
          >
            <h2 style={{ fontSize: 35, color: x[4] }}>{x[0]}</h2>
            <Badge c={x[4]}>{x[1]}</Badge>
            <p style={{ fontSize: 22 }}>{x[2]}</p>
            <div style={{ padding: 12, background: C.paper, fontSize: 22 }}>
              {x[3]}
            </div>
          </div>
        ))}
      </div>
    </Shell>
  );
};
export const CompensationSettlementCounterScene = () => {
  const f = useCurrentFrame();
  /* data-final-knowledge="compensation-procedure" data-final-knowledge="comp-0" data-final-knowledge="comp-1" data-final-knowledge="comp-2" */ return (
    <Shell code="13" title="撤回补偿结算台：先由机关处理，再按三层标准计付">
      <div
        data-layout="compensation-settlement-waterfall"
        data-visual-anchor="timeline-gate"
        data-visual-grammar="agency-first-handles-compensation-before-remedy-review,statutory-standard-precedes-actual-loss-and-special-concession-investment-standards"
        data-text-treatments="stamp,thin-underline,soft-highlight"
        data-focal-rule="withdrawal-compensation"
        data-focal-channels="spatial,connector,contrast"
        style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 35 }}
      >
        <Note
          title="程序入口"
          text="行政机关先行处理；不答复或不服补偿决定，可申请复议或提起诉讼。"
          c={C.blue}
        />
        <div>
          {[
            ["① 法定标准", "单行法有规定，从其规定", C.green],
            ["② 实际损失", "单行法无规定，一般在实际损失范围内", C.amber],
            ["③ 特许实际投入", "特许被撤回，一般按实际投入损失", C.red],
          ].map((x, i) => (
            <div
              key={x[0]}
              data-final-knowledge={`comp-${i}`}
              style={{
                width: `${100 - i * 10}%`,
                padding: 20,
                marginBottom: 18,
                background: x[2],
                color: C.white,
                fontSize: 24,
                ...enter(f, 15 + i * 18),
              }}
            >
              <b style={{ fontSize: 30 }}>{x[0]}</b>　{x[1]}
            </div>
          ))}
        </div>
      </div>
    </Shell>
  );
};
export const FeeTreasuryPipelineScene = () => {
  const f = useCurrentFrame();
  /* data-final-knowledge="free-form" data-final-knowledge="fee-exception" data-final-knowledge="no-tying" data-final-knowledge="treasury-only" */ return (
    <Shell code="14" title="收费国库管线：收费权、资金流向和搭售要求三重封堵">
      <div
        data-layout="fee-to-treasury-one-way-pipeline"
        data-visual-anchor="flow-path"
        data-visual-grammar="only-law-or-administrative-regulation-may-open-the-fee-valve,all-collected-money-flows-one-way-to-the-treasury-without-return-or-tying"
        data-text-treatments="external-negation,stamp,label-block"
        data-focal-rule="license-fee-rules"
        data-focal-channels="connector,contrast,motion"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 22,
        }}
      >
        <Note title="格式文本" text="绝对免费，没有例外。" c={C.red} />
        <Note
          title="实施与监督"
          text="原则不收费；只有法律、行政法规可以规定例外。地方性法规、规章均无权。"
          c={C.blue}
        />
        <Note
          title="禁止搭售"
          text="不得要求购买指定商品、接受有偿服务。"
          c={C.amber}
        />
        <Note
          title="单向入库"
          text="收费全部上缴国库；财政不得返还或变相返还给实施机关。"
          c={C.green}
        />
      </div>
    </Shell>
  );
};

export const LicenseTransitHub = () => (
  <AbsoluteFill>
    <TimelineSequence
      name="01"
      start={SCENES["license-entry-gates"].start}
      duration={SCENES["license-entry-gates"].duration}
    >
      <LicenseEntryGatesScene />
    </TimelineSequence>
    <TimelineSequence
      name="02"
      start={SCENES["five-license-platforms"].start}
      duration={SCENES["five-license-platforms"].duration}
    >
      <FiveLicensePlatformsScene />
    </TimelineSequence>
    <TimelineSequence
      name="03"
      start={SCENES["transfer-quota-expiry-tags"].start}
      duration={SCENES["transfer-quota-expiry-tags"].duration}
    >
      <TransferQuotaExpiryTagsScene />
    </TimelineSequence>
    <TimelineSequence
      name="04"
      start={SCENES["rulemaking-authority-tower"].start}
      duration={SCENES["rulemaking-authority-tower"].duration}
    >
      <RulemakingAuthorityTowerScene />
    </TimelineSequence>
    <TimelineSequence
      name="05"
      start={SCENES["economic-license-bypass"].start}
      duration={SCENES["economic-license-bypass"].duration}
    >
      <EconomicLicenseBypassScene />
    </TimelineSequence>
    <TimelineSequence
      name="06"
      start={SCENES["implementation-control-tower"].start}
      duration={SCENES["implementation-control-tower"].duration}
    >
      <ImplementationControlTowerScene />
    </TimelineSequence>
    <TimelineSequence
      name="07"
      start={SCENES["convenience-transfer-concourse"].start}
      duration={SCENES["convenience-transfer-concourse"].duration}
    >
      <ConvenienceTransferConcourseScene />
    </TimelineSequence>
    <TimelineSequence
      name="08"
      start={SCENES["application-processing-line"].start}
      duration={SCENES["application-processing-line"].duration}
    >
      <ApplicationProcessingLineScene />
    </TimelineSequence>
    <TimelineSequence
      name="09"
      start={SCENES["hearing-theater"].start}
      duration={SCENES["hearing-theater"].duration}
    >
      <HearingTheaterScene />
    </TimelineSequence>
    <TimelineSequence
      name="10"
      start={SCENES["deadline-control-board"].start}
      duration={SCENES["deadline-control-board"].duration}
    >
      <DeadlineControlBoardScene />
    </TimelineSequence>
    <TimelineSequence
      name="11"
      start={SCENES["supervision-maintenance-dock"].start}
      duration={SCENES["supervision-maintenance-dock"].duration}
    >
      <SupervisionMaintenanceDockScene />
    </TimelineSequence>
    <TimelineSequence
      name="12"
      start={SCENES["four-exit-tracks"].start}
      duration={SCENES["four-exit-tracks"].duration}
    >
      <FourExitTracksScene />
    </TimelineSequence>
    <TimelineSequence
      name="13"
      start={SCENES["compensation-settlement-counter"].start}
      duration={SCENES["compensation-settlement-counter"].duration}
    >
      <CompensationSettlementCounterScene />
    </TimelineSequence>
    <TimelineSequence
      name="14"
      start={SCENES["fee-treasury-pipeline"].start}
      duration={SCENES["fee-treasury-pipeline"].duration}
    >
      <FeeTreasuryPipelineScene />
    </TimelineSequence>
  </AbsoluteFill>
);
