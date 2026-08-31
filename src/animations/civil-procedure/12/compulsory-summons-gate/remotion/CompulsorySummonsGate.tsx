import React from "react";
import { AbsoluteFill } from "remotion";
import { TimelineSequence } from "../../../../shared/remotion-runtime";
import { SCENES } from "./storyboard";
import { SummonsGateDecisionScene } from "./scene-01-gate";
import { FineDetentionDeskScene } from "./scene-02-fine-detention";
import { UnitMeasuresForkScene } from "./scene-03-unit-fork";

const SCENE_COMPONENTS = {
  "summons-gate-checkline": SummonsGateDecisionScene,
  "fine-detention-desk": FineDetentionDeskScene,
  "unit-measures-fork": UnitMeasuresForkScene,
} as const;

export const CompulsorySummonsGate: React.FC = () => (
  <AbsoluteFill>
    {(Object.keys(SCENES) as Array<keyof typeof SCENES>).map((key, index) => {
      const Component = SCENE_COMPONENTS[key];
      const scene = SCENES[key];
      return (
        <TimelineSequence
          key={key}
          name={`${String(index + 1).padStart(2, "0")}-${key}`}
          start={scene.start}
          duration={scene.duration}
        >
          <Component />
        </TimelineSequence>
      );
    })}
  </AbsoluteFill>
);
