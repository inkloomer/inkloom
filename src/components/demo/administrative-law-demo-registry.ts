import {
  DURATION_FRAMES,
  FPS,
} from "../../animations/administrative-law/01/administrative-principles-compass/remotion/storyboard";
import {
  DURATION_FRAMES as DURATION_FRAMES_02,
  FPS as FPS_02,
} from "../../animations/administrative-law/02/administrative-subject-command/remotion/storyboard";
import {
  DURATION_FRAMES as DURATION_FRAMES_03,
  FPS as FPS_03,
} from "../../animations/administrative-law/03/civil-servant-career-file/remotion/storyboard";
import {
  DURATION_FRAMES as DURATION_FRAMES_04,
  FPS as FPS_04,
} from "../../animations/administrative-law/04/abstract-act-printworks/remotion/storyboard";
import {
  DURATION_FRAMES as DURATION_FRAMES_05,
  FPS as FPS_05,
} from "../../animations/administrative-law/05/concrete-act-laboratory/remotion/storyboard";
import {
  DURATION_FRAMES as DURATION_FRAMES_06,
  FPS as FPS_06,
} from "../../animations/administrative-law/06/license-transit-hub/remotion/storyboard";
import {
  DURATION_FRAMES as DURATION_FRAMES_07,
  FPS as FPS_07,
} from "../../animations/administrative-law/07/penalty-verdict-arena/remotion/storyboard";
import {
  DURATION_FRAMES as DURATION_FRAMES_08,
  FPS as FPS_08,
} from "../../animations/administrative-law/08/compulsion-safety-interlock/remotion/storyboard";
import {
  DURATION_FRAMES as DURATION_FRAMES_09,
  FPS as FPS_09,
} from "../../animations/administrative-law/09/transparency-optics-lab/remotion/storyboard";
import {
  DURATION_FRAMES as DURATION_FRAMES_10,
  FPS as FPS_10,
} from "../../animations/administrative-law/10/disclosure-case-desk/remotion/storyboard";
import {
  DURATION_FRAMES as DURATION_FRAMES_11,
  FPS as FPS_11,
} from "../../animations/administrative-law/11/misc-acts-showcase/remotion/storyboard";
import {
  DURATION_FRAMES as DURATION_FRAMES_12,
  FPS as FPS_12,
} from "../../animations/administrative-law/12/linkage-rail-switch/remotion/storyboard";
import {
  DURATION_FRAMES as DURATION_FRAMES_13,
  FPS as FPS_13,
} from "../../animations/administrative-law/13/litigant-hierarchy-beacon/remotion/storyboard";
import {
  DURATION_FRAMES as DURATION_FRAMES_14,
  FPS as FPS_14,
} from "../../animations/administrative-law/14/acceptance-security-gate/remotion/storyboard";
import type { DemoDefinition } from "./demo-registry";
import {lazyDemo} from './lazy-demo';

export const ADMINISTRATIVE_LAW_STYLE_DEMOS = [
  {
    id: "administrative-law-01-administrative-principles-compass",
    slug: "administrative-principles-compass",
    title: "行政审查手册",
    direction: "Administrative Principles Field Manual",
    component: lazyDemo(() => import('../../animations/administrative-law/01/administrative-principles-compass/remotion/AdministrativePrinciplesCompass').then((m) => ({default: m.AdministrativePrinciplesCompass}))),
    href: "/inkloom/objective/administrative-law/01/administrative-principles-compass/",
    durationInFrames: DURATION_FRAMES,
    fps: FPS,
  },
  {
    id: "administrative-law-02-administrative-subject-command",
    slug: "administrative-subject-command",
    title: "机构指挥图",
    direction: "Institutional Command Map",
    component: lazyDemo(() => import('../../animations/administrative-law/02/administrative-subject-command/remotion/AdministrativeSubjectCommand').then((m) => ({default: m.AdministrativeSubjectCommand}))),
    href: "/inkloom/objective/administrative-law/02/administrative-subject-command/",
    durationInFrames: DURATION_FRAMES_02,
    fps: FPS_02,
  },
  {
    id: "administrative-law-03-civil-servant-career-file",
    slug: "civil-servant-career-file",
    title: "人事档案流转图",
    direction: "Career Record Office",
    component: lazyDemo(() => import('../../animations/administrative-law/03/civil-servant-career-file/remotion/CivilServantCareerFile').then((m) => ({default: m.CivilServantCareerFile}))),
    href: "/inkloom/objective/administrative-law/03/civil-servant-career-file/",
    durationInFrames: DURATION_FRAMES_03,
    fps: FPS_03,
  },
  {
    id: "administrative-law-04-abstract-act-printworks",
    slug: "abstract-act-printworks",
    title: "法规套色印坊",
    direction: "Legislative Printworks",
    component: lazyDemo(() => import('../../animations/administrative-law/04/abstract-act-printworks/remotion/AbstractActPrintworks').then((m) => ({default: m.AbstractActPrintworks}))),
    href: "/inkloom/objective/administrative-law/04/abstract-act-printworks/",
    durationInFrames: DURATION_FRAMES_04,
    fps: FPS_04,
  },
  {
    id: "administrative-law-05-concrete-act-laboratory",
    slug: "concrete-act-laboratory",
    title: "行政行为检验实验室",
    direction: "Administrative Act Laboratory",
    component: lazyDemo(() => import('../../animations/administrative-law/05/concrete-act-laboratory/remotion/ConcreteActLaboratory').then((m) => ({default: m.ConcreteActLaboratory}))),
    href: "/inkloom/objective/administrative-law/05/concrete-act-laboratory/",
    durationInFrames: DURATION_FRAMES_05,
    fps: FPS_05,
  },
  {
    id: "administrative-law-06-license-transit-hub",
    slug: "license-transit-hub",
    title: "城市通行枢纽",
    direction: "License Transit Hub",
    component: lazyDemo(() => import('../../animations/administrative-law/06/license-transit-hub/remotion/LicenseTransitHub').then((m) => ({default: m.LicenseTransitHub}))),
    href: "/inkloom/objective/administrative-law/06/license-transit-hub/",
    durationInFrames: DURATION_FRAMES_06,
    fps: FPS_06,
  },
  {
    id: "administrative-law-07-penalty-verdict-arena",
    slug: "penalty-verdict-arena",
    title: "裁决竞技工坊",
    direction: "Penalty Verdict Arena",
    component: lazyDemo(() => import('../../animations/administrative-law/07/penalty-verdict-arena/remotion/PenaltyVerdictArena').then((m) => ({default: m.PenaltyVerdictArena}))),
    href: "/inkloom/objective/administrative-law/07/penalty-verdict-arena/",
    durationInFrames: DURATION_FRAMES_07,
    fps: FPS_07,
  },
  {
    id: "administrative-law-08-compulsion-safety-interlock",
    slug: "compulsion-safety-interlock",
    title: "安全联锁工程图",
    direction: "Compulsion Safety Interlock",
    component: lazyDemo(() => import('../../animations/administrative-law/08/compulsion-safety-interlock/remotion/CompulsionSafetyInterlock').then((m) => ({default: m.CompulsionSafetyInterlock}))),
    href: "/inkloom/objective/administrative-law/08/compulsion-safety-interlock/",
    durationInFrames: DURATION_FRAMES_08,
    fps: FPS_08,
  },
  {
    id: "administrative-law-09-transparency-optics-lab",
    slug: "transparency-optics-lab",
    title: "金石墨拓图鉴",
    direction: "Bronze Rubbing Atlas",
    component: lazyDemo(() => import('../../animations/administrative-law/09/transparency-optics-lab/remotion/TransparencyOpticsLab').then((m) => ({default: m.TransparencyOpticsLab}))),
    href: "/inkloom/objective/administrative-law/09/transparency-optics-lab/",
    durationInFrames: DURATION_FRAMES_09,
    fps: FPS_09,
  },
  {
    id: "administrative-law-10-disclosure-case-desk",
    slug: "disclosure-case-desk",
    title: "黄铜天文钟观测台",
    direction: "Marine Chronometer Observatory",
    component: lazyDemo(() => import('../../animations/administrative-law/10/disclosure-case-desk/remotion/DisclosureCaseDesk').then((m) => ({default: m.DisclosureCaseDesk}))),
    href: "/inkloom/objective/administrative-law/10/disclosure-case-desk/",
    durationInFrames: DURATION_FRAMES_10,
    fps: FPS_10,
  },
  {
    id: "administrative-law-11-misc-acts-showcase",
    slug: "misc-acts-showcase",
    title: "皮影戏台",
    direction: "Administrative Power Prism",
    component: lazyDemo(() => import('../../animations/administrative-law/11/misc-acts-showcase/remotion/MiscActsShowcase').then((m) => ({default: m.MiscActsShowcase}))),
    href: "/inkloom/objective/administrative-law/11/misc-acts-showcase/",
    durationInFrames: DURATION_FRAMES_11,
    fps: FPS_11,
  },
  {
    id: "administrative-law-12-linkage-rail-switch",
    slug: "linkage-rail-switch",
    title: "水闸航道图",
    direction: "Canal Lock Waterway",
    component: lazyDemo(() => import('../../animations/administrative-law/12/linkage-rail-switch/remotion/LinkageRailSwitch').then((m) => ({default: m.LinkageRailSwitch}))),
    href: "/inkloom/objective/administrative-law/12/linkage-rail-switch/",
    durationInFrames: DURATION_FRAMES_12,
    fps: FPS_12,
  },
  {
    id: "administrative-law-13-litigant-hierarchy-beacon",
    slug: "litigant-hierarchy-beacon",
    title: "围棋棋谱盘",
    direction: "Go Board Kifu",
    component: lazyDemo(() => import('../../animations/administrative-law/13/litigant-hierarchy-beacon/remotion/LitigantHierarchyBeacon').then((m) => ({default: m.LitigantHierarchyBeacon}))),
    href: "/inkloom/objective/administrative-law/13/litigant-hierarchy-beacon/",
    durationInFrames: DURATION_FRAMES_13,
    fps: FPS_13,
  },
  {
    id: "administrative-law-14-acceptance-security-gate",
    slug: "acceptance-security-gate",
    title: "铜蒸馏工坊",
    direction: "Copper Still Distillery",
    component: lazyDemo(() => import('../../animations/administrative-law/14/acceptance-security-gate/remotion/AcceptanceSecurityGate').then((m) => ({default: m.AcceptanceSecurityGate}))),
    href: "/inkloom/objective/administrative-law/14/acceptance-security-gate/",
    durationInFrames: DURATION_FRAMES_14,
    fps: FPS_14,
  },
] as const satisfies readonly DemoDefinition[];

export const ADMINISTRATIVE_LAW_DEMO_ADDED_AT = {
  "administrative-law-01-administrative-principles-compass":
    "2026-08-13T12:00:00+08:00",
  "administrative-law-02-administrative-subject-command":
    "2026-08-13T13:00:00+08:00",
  "administrative-law-03-civil-servant-career-file":
    "2026-08-13T14:00:00+08:00",
  "administrative-law-04-abstract-act-printworks": "2026-08-13T15:00:00+08:00",
  "administrative-law-05-concrete-act-laboratory": "2026-08-13T16:00:00+08:00",
  "administrative-law-06-license-transit-hub": "2026-08-13T17:00:00+08:00",
  "administrative-law-07-penalty-verdict-arena": "2026-08-13T21:00:00+08:00",
  "administrative-law-08-compulsion-safety-interlock":
    "2026-08-13T22:30:00+08:00",
  "administrative-law-09-transparency-optics-lab": "2026-08-13T23:30:00+08:00",
  "administrative-law-10-disclosure-case-desk": "2026-08-14T00:30:00+08:00",
  "administrative-law-11-misc-acts-showcase": "2026-08-14T09:30:00+08:00",
  "administrative-law-12-linkage-rail-switch": "2026-08-14T10:30:00+08:00",
  "administrative-law-13-litigant-hierarchy-beacon":
    "2026-08-14T12:00:00+08:00",
  "administrative-law-14-acceptance-security-gate": "2026-08-14T13:30:00+08:00",
} as const;
