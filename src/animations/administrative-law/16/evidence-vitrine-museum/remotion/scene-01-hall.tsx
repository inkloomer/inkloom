import React from "react";
import { useCurrentFrame } from "remotion";
import { BrassPlaque, ExhibitCard, GalleryShell, Vitrine, enter } from "./theme";

export const EightEvidenceVitrineHallScene: React.FC = () => {
  /* Static audit inventory: data-final-knowledge="kind-document" data-final-knowledge="kind-physical" data-final-knowledge="kind-audiovisual" data-final-knowledge="kind-electronic" data-final-knowledge="kind-testimony" data-final-knowledge="kind-statement" data-final-knowledge="kind-appraisal" data-final-knowledge="kind-scene-notes" data-final-knowledge="kind-special-sources" */
  const f = useCurrentFrame();
  const cases = [
    { name: "书证", rows: ["可提供非原件；有关部门保管的非原件必须盖章", "专业资料文献应附说明"], knowledge: "kind-document" },
    { name: "物证", rows: ["可提供原物复制件或证明该物证的照片录像", "种类物数量较多可只提供一部分"], knowledge: "kind-physical" },
    { name: "视听资料", rows: ["可提供复制件；注明制作方法、时间、制作人、证明对象", "声音资料应附文字记录"], knowledge: "kind-audiovisual" },
    { name: "电子数据", rows: ["二进制数字、计算机生成识别；光盘/SD卡/U盘/磁盘存放", "可在虚拟空间无限制快速传播"], knowledge: "kind-electronic" },
    { name: "证人证言", rows: ["基本情况＋签名盖章＋日期＋附身份证明文件", "出庭必要费用与误工损失由败诉方承担"], knowledge: "kind-testimony" },
    { name: "当事人陈述", rows: ["谈话笔录", "询问人、被询问人签名或盖章"], knowledge: "kind-statement" },
    { name: "鉴定意见", rows: ["鉴定人签名＋鉴定部门盖章（和）", "当事人要求出庭的，鉴定人应出庭"], knowledge: "kind-appraisal" },
    { name: "现场笔录", rows: ["执法人员和当事人签名；拒签应注明原因，在场人可签名", "对合法性/真实性有异议时执法人员应出庭"], knowledge: "kind-scene-notes" },
  ];
  return (
    <GalleryShell code="01" title="证据种类展厅" subtitle="八类证据逐一入柜 · 外文域外单独入镜">
      <div
        data-layout="eight-vitrine-hall"
        data-visual-anchor="flow-target"
        data-visual-grammar="eight-evidence-cases-light-up-in-taxonomic-order,special-sources-get-their-own-entry-vitrine"
        data-text-treatments="label-block,thin-underline,chip"
        data-focal-rule="八类证据的提交规则"
        data-focal-channels="spatial,enclosure,contrast"
        style={{ position: "absolute", inset: 6, display: "flex", flexDirection: "column", gap: 12 }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, flex: 1 }}>
          {cases.slice(0, 4).map((c, i) => (
            <div key={c.knowledge} data-final-knowledge={c.knowledge} style={{ display: "flex", ...enter(f, 6 + i * 8, 0, 14) }}>
              <Vitrine style={{ flex: 1, padding: "12px 14px", display: "flex", flexDirection: "column", gap: 7 }}>
                <BrassPlaque style={{ alignSelf: "flex-start", fontSize: 18 }}>{String(i + 1).padStart(2, "0")} {c.name}</BrassPlaque>
                {c.rows.map((row, j) => (
                  <ExhibitCard key={j} style={{ fontSize: 18.5, fontWeight: 700, lineHeight: 1.42, padding: "8px 10px" }}>
                    {row}
                  </ExhibitCard>
                ))}
              </Vitrine>
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, flex: 1 }}>
          {cases.slice(4).map((c, i) => (
            <div key={c.knowledge} data-final-knowledge={c.knowledge} style={{ display: "flex", ...enter(f, 38 + i * 8, 0, 14) }}>
              <Vitrine style={{ flex: 1, padding: "12px 14px", display: "flex", flexDirection: "column", gap: 7 }}>
                <BrassPlaque style={{ alignSelf: "flex-start", fontSize: 18 }}>{String(i + 5).padStart(2, "0")} {c.name}</BrassPlaque>
                {c.rows.map((row, j) => (
                  <ExhibitCard key={j} style={{ fontSize: 18.5, fontWeight: 700, lineHeight: 1.42, padding: "8px 10px" }}>
                    {row}
                  </ExhibitCard>
                ))}
              </Vitrine>
            </div>
          ))}
          <div
            data-final-knowledge="kind-special-sources"
            style={{ display: "flex", ...enter(f, 70) }}
          >
            <Vitrine glow style={{ flex: 1, padding: "12px 14px", display: "flex", flexDirection: "column", gap: 7 }}>
              <BrassPlaque style={{ alignSelf: "flex-start", fontSize: 18 }}>特展 09 外文与域外证据</BrassPlaque>
              <ExhibitCard style={{ fontSize: 18.5, fontWeight: 700, lineHeight: 1.42, padding: "8px 10px" }}>
                外文证据：翻译机构中文译本，机构盖章<b>或</b>翻译人员签名
              </ExhibitCard>
              <ExhibitCard style={{ fontSize: 18.5, fontWeight: 700, lineHeight: 1.42, padding: "8px 10px" }}>
                域外证据：所在国<b>公证</b>＋使领馆<b>认证</b>；港澳台按有关规定办理证明手续
              </ExhibitCard>
            </Vitrine>
          </div>
        </div>
      </div>
    </GalleryShell>
  );
};
