import React from "react";
import { AbsoluteFill } from "remotion";
import { TimelineSequence } from "../../../../shared/remotion-runtime";
import { SCENES } from "./storyboard";
import { ConceptKindHarborScene } from "./scene-01-concept";
import { DualNatureMastsScene } from "./scene-02-masts";
import { ValidityTideGaugeScene } from "./scene-03-validity";
import { JurisdictionTideChartScene } from "./scene-04-jurisdiction";
import { ReviewMastSplitScene } from "./scene-05-review";
import { VerdictDockBerthsScene } from "./scene-06-verdicts";

const SCENE_COMPONENTS = {
  "concept-kind-harbor": ConceptKindHarborScene,
  "dual-nature-masts": DualNatureMastsScene,
  "validity-tide-gauge": ValidityTideGaugeScene,
  "jurisdiction-tide-chart": JurisdictionTideChartScene,
  "review-mast-split": ReviewMastSplitScene,
  "verdict-dock-berths": VerdictDockBerthsScene,
} as const;

export const ContractTwinMastHarbor: React.FC = () => (
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
