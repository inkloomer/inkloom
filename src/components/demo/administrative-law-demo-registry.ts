import { AdministrativePrinciplesCompass } from "../../animations/administrative-law/01/administrative-principles-compass/remotion/AdministrativePrinciplesCompass";
import {
  DURATION_FRAMES,
  FPS,
} from "../../animations/administrative-law/01/administrative-principles-compass/remotion/storyboard";
import { AdministrativeSubjectCommand } from "../../animations/administrative-law/02/administrative-subject-command/remotion/AdministrativeSubjectCommand";
import {
  DURATION_FRAMES as DURATION_FRAMES_02,
  FPS as FPS_02,
} from "../../animations/administrative-law/02/administrative-subject-command/remotion/storyboard";
import { CivilServantCareerFile } from "../../animations/administrative-law/03/civil-servant-career-file/remotion/CivilServantCareerFile";
import {
  DURATION_FRAMES as DURATION_FRAMES_03,
  FPS as FPS_03,
} from "../../animations/administrative-law/03/civil-servant-career-file/remotion/storyboard";
import { AbstractActPrintworks } from "../../animations/administrative-law/04/abstract-act-printworks/remotion/AbstractActPrintworks";
import {
  DURATION_FRAMES as DURATION_FRAMES_04,
  FPS as FPS_04,
} from "../../animations/administrative-law/04/abstract-act-printworks/remotion/storyboard";
import { ConcreteActLaboratory } from "../../animations/administrative-law/05/concrete-act-laboratory/remotion/ConcreteActLaboratory";
import {
  DURATION_FRAMES as DURATION_FRAMES_05,
  FPS as FPS_05,
} from "../../animations/administrative-law/05/concrete-act-laboratory/remotion/storyboard";
import { LicenseTransitHub } from "../../animations/administrative-law/06/license-transit-hub/remotion/LicenseTransitHub";
import {
  DURATION_FRAMES as DURATION_FRAMES_06,
  FPS as FPS_06,
} from "../../animations/administrative-law/06/license-transit-hub/remotion/storyboard";
import { PenaltyVerdictArena } from "../../animations/administrative-law/07/penalty-verdict-arena/remotion/PenaltyVerdictArena";
import {
  DURATION_FRAMES as DURATION_FRAMES_07,
  FPS as FPS_07,
} from "../../animations/administrative-law/07/penalty-verdict-arena/remotion/storyboard";
import { CompulsionSafetyInterlock } from "../../animations/administrative-law/08/compulsion-safety-interlock/remotion/CompulsionSafetyInterlock";
import {
  DURATION_FRAMES as DURATION_FRAMES_08,
  FPS as FPS_08,
} from "../../animations/administrative-law/08/compulsion-safety-interlock/remotion/storyboard";
import { TransparencyOpticsLab } from "../../animations/administrative-law/09/transparency-optics-lab/remotion/TransparencyOpticsLab";
import {
  DURATION_FRAMES as DURATION_FRAMES_09,
  FPS as FPS_09,
} from "../../animations/administrative-law/09/transparency-optics-lab/remotion/storyboard";
import { DisclosureCaseDesk } from "../../animations/administrative-law/10/disclosure-case-desk/remotion/DisclosureCaseDesk";
import {
  DURATION_FRAMES as DURATION_FRAMES_10,
  FPS as FPS_10,
} from "../../animations/administrative-law/10/disclosure-case-desk/remotion/storyboard";
import { MiscActsShowcase } from "../../animations/administrative-law/11/misc-acts-showcase/remotion/MiscActsShowcase";
import {
  DURATION_FRAMES as DURATION_FRAMES_11,
  FPS as FPS_11,
} from "../../animations/administrative-law/11/misc-acts-showcase/remotion/storyboard";
import type { DemoDefinition } from "./demo-registry";

export const ADMINISTRATIVE_LAW_STYLE_DEMOS = [
  {
    id: "administrative-law-01-administrative-principles-compass",
    slug: "administrative-principles-compass",
    title: "行政审查手册",
    direction: "Administrative Principles Field Manual",
    component: AdministrativePrinciplesCompass,
    href: "/inkloom/objective/administrative-law/01/administrative-principles-compass/",
    durationInFrames: DURATION_FRAMES,
    fps: FPS,
  },
  {
    id: "administrative-law-02-administrative-subject-command",
    slug: "administrative-subject-command",
    title: "机构指挥图",
    direction: "Institutional Command Map",
    component: AdministrativeSubjectCommand,
    href: "/inkloom/objective/administrative-law/02/administrative-subject-command/",
    durationInFrames: DURATION_FRAMES_02,
    fps: FPS_02,
  },
  {
    id: "administrative-law-03-civil-servant-career-file",
    slug: "civil-servant-career-file",
    title: "人事档案流转图",
    direction: "Career Record Office",
    component: CivilServantCareerFile,
    href: "/inkloom/objective/administrative-law/03/civil-servant-career-file/",
    durationInFrames: DURATION_FRAMES_03,
    fps: FPS_03,
  },
  {
    id: "administrative-law-04-abstract-act-printworks",
    slug: "abstract-act-printworks",
    title: "法规套色印坊",
    direction: "Legislative Printworks",
    component: AbstractActPrintworks,
    href: "/inkloom/objective/administrative-law/04/abstract-act-printworks/",
    durationInFrames: DURATION_FRAMES_04,
    fps: FPS_04,
  },
  {
    id: "administrative-law-05-concrete-act-laboratory",
    slug: "concrete-act-laboratory",
    title: "行政行为检验实验室",
    direction: "Administrative Act Laboratory",
    component: ConcreteActLaboratory,
    href: "/inkloom/objective/administrative-law/05/concrete-act-laboratory/",
    durationInFrames: DURATION_FRAMES_05,
    fps: FPS_05,
  },
  {
    id: "administrative-law-06-license-transit-hub",
    slug: "license-transit-hub",
    title: "城市通行枢纽",
    direction: "License Transit Hub",
    component: LicenseTransitHub,
    href: "/inkloom/objective/administrative-law/06/license-transit-hub/",
    durationInFrames: DURATION_FRAMES_06,
    fps: FPS_06,
  },
  {
    id: "administrative-law-07-penalty-verdict-arena",
    slug: "penalty-verdict-arena",
    title: "裁决竞技工坊",
    direction: "Penalty Verdict Arena",
    component: PenaltyVerdictArena,
    href: "/inkloom/objective/administrative-law/07/penalty-verdict-arena/",
    durationInFrames: DURATION_FRAMES_07,
    fps: FPS_07,
  },
  {
    id: "administrative-law-08-compulsion-safety-interlock",
    slug: "compulsion-safety-interlock",
    title: "安全联锁工程图",
    direction: "Compulsion Safety Interlock",
    component: CompulsionSafetyInterlock,
    href: "/inkloom/objective/administrative-law/08/compulsion-safety-interlock/",
    durationInFrames: DURATION_FRAMES_08,
    fps: FPS_08,
  },
  {
    id: "administrative-law-09-transparency-optics-lab",
    slug: "transparency-optics-lab",
    title: "透明度光学实验室",
    direction: "Transparency Optics Lab",
    component: TransparencyOpticsLab,
    href: "/inkloom/objective/administrative-law/09/transparency-optics-lab/",
    durationInFrames: DURATION_FRAMES_09,
    fps: FPS_09,
  },
  {
    id: "administrative-law-10-disclosure-case-desk",
    slug: "disclosure-case-desk",
    title: "案件收发分拣台",
    direction: "Disclosure Case Dispatch Desk",
    component: DisclosureCaseDesk,
    href: "/inkloom/objective/administrative-law/10/disclosure-case-desk/",
    durationInFrames: DURATION_FRAMES_10,
    fps: FPS_10,
  },
  {
    id: "administrative-law-11-misc-acts-showcase",
    slug: "misc-acts-showcase",
    title: "政务行为展柜",
    direction: "Civic Act Showcase Gallery",
    component: MiscActsShowcase,
    href: "/inkloom/objective/administrative-law/11/misc-acts-showcase/",
    durationInFrames: DURATION_FRAMES_11,
    fps: FPS_11,
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
} as const;
