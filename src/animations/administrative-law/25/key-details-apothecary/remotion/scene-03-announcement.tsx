import React from "react";
import { useCurrentFrame } from "remotion";
import { CabinetShell, CinnabarSeal, DrawerFace, HerbSlip, IndexTag, ThinUnderline, T, enter } from "./theme";

export const AnnouncementShelfScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="announcement-penalty-drawer" data-final-knowledge="announcement-license-drawer" data-final-knowledge="announcement-litigation-drawer" data-final-knowledge="announcement-adverse-effect-rule" data-final-knowledge="announcement-social-impact-exception" data-stateful-source="herb-slip-announcement-stream" data-stateful-terminal="herb-slip-announcement-stream" */
  const f = useCurrentFrame();
  const penalty = [
    "委托机关与受委托组织应将委托书向社会公布",
    "下放乡镇政府、街道办事处的处罚权决定应当公布",
    "具有一定社会影响的处罚决定应依法公开；被变更、撤销、确认违法或无效的，3 日内撤回并说明理由",
    "行政处罚裁量基准应当向社会公布",
    "电子技术监控设备的设置地点应当向社会公布",
  ];
  const license = [
    "受委托行政机关与委托实施许可的内容应予公告",
    "涉及公共利益的重大许可事项应公告并举行听证",
    "听证 7 日前通知时间与地点，必要时予以公告",
  ];
  const litigation = [
    "被告无正当理由拒不到庭或中途退庭，法院可予以公告",
    "行政机关拒绝履行判决、裁定、调解书，一审法院可予以公告",
  ];
  const others = [
    { tag: "公务员", text: "录用公务员应当发布招考公告" },
    { tag: "具体行政行为", text: "公告告知的，自公告规定期限届满之日起计算" },
    { tag: "行政强制", text: "强制拆除违法建筑设施，应由行政机关予以公告" },
  ];
  return (
    <CabinetShell code="03" title="公告清单货架" subtitle="七类事项 · 三格上架 · 不利影响不入架">
      <div
        data-layout="announcement-three-drawer-shelf"
        data-visual-anchor="boundary"
        data-visual-grammar="seven-announcement-domains-file-into-three-index-drawers,penalty-drawer-carries-the-densest-publication-duties,adverse-effect-decisions-stay-outside-the-publication-shelf,social-impact-penalty-decisions-re-enter-as-active-disclosure"
        data-text-treatments="label-block,thin-underline,external-negation,stamp"
        data-focal-rule="不利影响决定送达即可，原则上不公开"
        data-focal-channels="contrast,enclosure,spatial"
        style={{ position: "absolute", inset: 6, display: "flex", flexDirection: "column", gap: 16 }}
      >
        <div data-stateful-terminal="herb-slip-announcement-stream" style={{ flex: 1, display: "flex", gap: 18 }}>
          <div
            data-final-knowledge="announcement-penalty-drawer"
            style={{ width: 700, display: "flex", flexDirection: "column", gap: 12, ...enter(f, 6, -26, 0) }}
          >
            <DrawerFace label="行政处罚" tone="cinnabar" />
            {penalty.map((item, i) => (
              <HerbSlip
                key={item}
                data-stateful-source="herb-slip-announcement-stream"
                style={{ alignItems: "center", fontSize: 22, lineHeight: 1.45, fontWeight: 700, ...enter(f, 22 + i * 11, -14, 0) }}
              >
                <span
                  style={{
                    minWidth: 30,
                    height: 28,
                    borderRadius: 3,
                    background: "#241c15",
                    color: "#f3ead7",
                    display: "grid",
                    placeItems: "center",
                    fontSize: 15,
                    fontWeight: 950,
                    fontFamily: "var(--inkloom-animation-mono, monospace)",
                    flexShrink: 0,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </HerbSlip>
            ))}
          </div>
          <div
            data-final-knowledge="announcement-license-drawer"
            style={{ width: 520, display: "flex", flexDirection: "column", gap: 12, ...enter(f, 14, 0, 26) }}
          >
            <DrawerFace label="行政许可" tone="indigo" />
            {license.map((item, i) => (
              <HerbSlip
                key={item}
                data-stateful-source="herb-slip-announcement-stream"
                style={{ alignItems: "center", fontSize: 22, lineHeight: 1.45, fontWeight: 700, ...enter(f, 30 + i * 11, 0, 16) }}
              >
                {item}
              </HerbSlip>
            ))}
            <div style={{ fontSize: 21, fontWeight: 950, color: T.brass, letterSpacing: 2, marginTop: 6, ...enter(f, 66, 0, 10) }}>
              行政诉讼
            </div>
            {litigation.map((item, i) => (
              <HerbSlip
                key={item}
                data-stateful-source="herb-slip-announcement-stream"
                style={{ alignItems: "center", fontSize: 22, lineHeight: 1.45, fontWeight: 700, ...enter(f, 74 + i * 11, 0, 16) }}
              >
                {item}
              </HerbSlip>
            ))}
          </div>
          <div
            data-final-knowledge="announcement-litigation-drawer"
            style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12, ...enter(f, 22, 26, 0) }}
          >
            <DrawerFace label="行政复议" tone="mugwort" />
            <HerbSlip
              data-stateful-source="herb-slip-announcement-stream"
              style={{ alignItems: "center", fontSize: 22, lineHeight: 1.45, fontWeight: 700, ...enter(f, 38, 14, 0) }}
            >
              按被申请复议行为的公开情况，按时将复议决定书向社会公开
            </HerbSlip>
            <div style={{ fontSize: 21, fontWeight: 950, color: T.brass, letterSpacing: 2, marginTop: 6, ...enter(f, 66, 0, 10) }}>
              其他领域
            </div>
            {others.map((o, i) => (
              <HerbSlip
                key={o.tag}
                data-stateful-source="herb-slip-announcement-stream"
                style={{
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 6,
                  fontSize: 22,
                  lineHeight: 1.45,
                  fontWeight: 700,
                  ...enter(f, 74 + i * 11, 14, 0),
                }}
              >
                <IndexTag label={o.tag} tone={T.indigoDeep} style={{ fontSize: 21 }} />
                <span>{o.text}</span>
              </HerbSlip>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 22,
            padding: "14px 20px",
            background: "rgba(27,18,11,0.74)",
            border: "2px solid #7a5639",
            borderRadius: 5,
            ...enter(f, 120, 0, 18),
          }}
        >
          <CinnabarSeal label="不公开" delay={128} rotation={-2} />
          <div
            data-final-knowledge="announcement-adverse-effect-rule"
            style={{ fontSize: 22, lineHeight: 1.5, fontWeight: 800, color: "#efe3cd" }}
          >
            不予许可、不予公开信息、撤销许可等
            <ThinUnderline tone={T.cinnabar}>不利影响决定</ThinUnderline>
            ，送达当事人即可；公开会构成二次伤害
          </div>
          <div
            data-final-knowledge="announcement-social-impact-exception"
            style={{
              marginLeft: "auto",
              fontSize: 22,
              lineHeight: 1.5,
              fontWeight: 800,
              color: "#efe3cd",
              textAlign: "right",
              borderLeft: `2px solid ${T.mugwort}`,
              paddingLeft: 20,
            }}
          >
            但具有一定社会影响的
            <ThinUnderline tone={T.mugwort}>行政处罚决定</ThinUnderline>
            属于主动公开信息
          </div>
        </div>
      </div>
    </CabinetShell>
  );
};
