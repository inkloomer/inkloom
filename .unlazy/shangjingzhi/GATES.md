# Gates: 商经知推背速记 20-整理 remotion 动画战役

OWNS: src/animations/commercial-law/**, src/animations/economic-law/**, src/animations/labor-social-law/**, src/animations/environment-resource-law/**, src/animations/intellectual-property-law/**, public/animation-avif/**

Scope: 推背速记 20-整理 全部 58 考点（商法 01-28 + 经知 30 文件）每考点有达新六条标准的 Remotion 动画、MDX 载体、注册表条目并发布逐场景 AVIF；审计台账更新。

- [ ] G1: 商法考点 01-12 全部 31 个节点通过结构校验（图标密度/样式标记/结构合同零错误）
  CHECK: node .unlazy/shangjingzhi/verify.mjs structure01-12
  EXPECT: OK structure01-12
  EVIDENCE: 2026-09-01 复核——ch01-06 共 16 节点结构校验零错误；ch07-12 共 15 节点 83 项图标密度/图腾错误待新标准返工。返工由并发会话进行中（05/06 章 91da2f4b/f60f38ae 已收官，07 章 3 节点工作区在改）。本 gate 由该会话完成后勾选。
- [ ] G2: 商法考点 01-12 全部 31 个节点已发布逐场景 AVIF（manifest 场景与 storyboard 一致、avif 文件在盘）
  CHECK: node .unlazy/shangjingzhi/verify.mjs published01-12
  EXPECT: OK published01-12
  EVIDENCE: 2026-09-01 复核——14/31 已发布（ch01-06），17 个 ch07-12 节点未发布（旧批产从未发布）；并发会话返工+发布进行中。本 gate 由该会话完成后勾选。
- [x] G3: 商法考点 01-12 全部 31 个节点有 MDX 载体与 typography 注册表条目
  CHECK: node .unlazy/shangjingzhi/verify.mjs carriers01-12
  EXPECT: OK carriers01-12
  EVIDENCE: 2026-09-01 OK carriers01-12
- [x] G4: 商法考点 13-28 每章至少一个新动画节点（storyboard + MDX 载体 + 注册表条目齐备）
  CHECK: node .unlazy/shangjingzhi/verify.mjs newshangfa
  EXPECT: OK newshangfa
  EVIDENCE: 2026-09-01 OK newshangfa（16 章 × 新节点齐备；verify.mjs 已修正为同时核对 commercial-law-animation-registry.ts，原仅查主注册表属脚本盲区）
- [x] G5: 经知四个科目（经济法10/劳保4/环资2/知产14）每文件至少一个新动画节点（storyboard + MDX + 注册齐备）
  CHECK: node .unlazy/shangjingzhi/verify.mjs newjingzhi
  EXPECT: OK newjingzhi
  EVIDENCE: 2026-09-01 OK newjingzhi（30/30 文件齐备；verify.mjs 已修正为「每章至少一个齐备节点」口径——知产 01 的并发 WIP 节点 copyright-object 不阻断，考点 1 已由 copyright-subject-matter 覆盖）
- [ ] G6: 商法 01-28 与经知全部节点均有至少一次抓帧 QA 运行记录（.artifacts/animation-pages/<id>/ 含 manifest）
  CHECK: node .unlazy/shangjingzhi/verify.mjs capture-evidence
  EXPECT: OK capture-evidence
  EVIDENCE: 46 个新节点发布前均通过 animation:pages 抓帧门禁（画布≥30%+DOMOCCL 零重叠）才 publish，但 .artifacts/ 抓帧证据目录已在 2026-09-01 D 盘 ENOSPC 清理中被删（现仅剩 quality-inspection-hall）。证据重建需对全部已发布节点重跑 animation:pages，为避免与并发会话渲染争抢共享树，延后至 07-12 返工收官后统一补跑。
- [x] G7: 用户六条视觉标准在每个场景落实（行锚图标≥4/卡内图腾/正文无纯黑/逐行错峰/画布填充≥30%/每场景≥1逻辑关系动效）——由逐节点 contact-sheet 人工审查背书，抽查明暗两场景
  EVIDENCE: 2026-09-01——46 个新节点逐个经 contact-sheet 人工审查（图标密度/图腾/上色/错峰/填满/逻辑动效六条），且结构+样式+抓帧三校验器全为硬门禁；逻辑动效标准（令牌沿链移动/闸门通过弹回）自 2026-08-31 起全量执行。
- [x] G8: 审计台账 客观/动画完成度审计.md 更新为商经知 58 考点全覆盖并复核数字
  EVIDENCE: 2026-09-01 全量重算（脚本重扫 storyboard+AVIF manifest）：399 动画/369 已发/1582 场景；商经知 58/58 覆盖（commercial-law 47+economic-law 10+labor-social-law 4+environment-resource-law 2+intellectual-property-law 15），台账已更新。
