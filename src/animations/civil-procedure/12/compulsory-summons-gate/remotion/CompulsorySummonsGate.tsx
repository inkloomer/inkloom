import React from "react";
import { AbsoluteFill } from "remotion";
import { TimelineSequence } from "../../../../shared/remotion-runtime";
import { SCENES } from "./storyboard";
import { SummonsGateDecisionScene } from "./scene-01-gate";
import { MeasuresComparisonLedgerScene } from "./scene-02-ledger";
import { FinesDetentionScaleScene } from "./scene-03-scale";

const SCENE_COMPONENTS = {
  "summons-gate-decision": SummonsGateDecisionScene,
  "measures-comparison-ledger": MeasuresComparisonLedgerScene,
  "fines-detention-scale": FinesDetentionScaleScene,
} as const;

export const CompulsorySummonsGate: React.FC = () => (
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
