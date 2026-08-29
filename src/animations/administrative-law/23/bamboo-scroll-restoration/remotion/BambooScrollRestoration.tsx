import React from "react";
import { AbsoluteFill } from "remotion";
import { TimelineSequence } from "../../../../shared/remotion-runtime";
import { SCENES } from "./storyboard";
import { ReviewAuthorityBambooWallScene } from "./scene-01-authority-wall";
import { ProcedureSlipsLaneScene } from "./scene-02-procedure-lane";
import { SummarySlipsDrawerScene } from "./scene-03-summary-drawer";
import { SpecialSlipsConservationScene } from "./scene-04-special-tubes";
import { IncidentalReviewDeskScene } from "./scene-05-incidental-desk";

const SCENE_COMPONENTS = {
  "review-authority-bamboo-wall": ReviewAuthorityBambooWallScene,
  "procedure-slips-lane": ProcedureSlipsLaneScene,
  "summary-slips-drawer": SummarySlipsDrawerScene,
  "special-slips-conservation": SpecialSlipsConservationScene,
  "incidental-review-desk": IncidentalReviewDeskScene,
} as const;

export const BambooScrollRestoration: React.FC = () => (
  <AbsoluteFill>
    {(Object.keys(SCENES) as Array<keyof typeof SCENES>).map((key, index) => {
      const Component = SCENE_COMPONENTS[key];
      const scene = SCENES[key];
      return (
        <TimelineSequence
          key={key}
          name={String(index + 1).padStart(2, "0")}
          start={scene.start}
          duration={scene.duration}
        >
          <Component />
        </TimelineSequence>
      );
    })}
  </AbsoluteFill>
);
