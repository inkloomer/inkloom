import React from "react";
import { AbsoluteFill } from "remotion";
import { TimelineSequence } from "../../../../shared/remotion-runtime";
import { SCENES } from "./storyboard";
import { PartyAndDefendantTraysScene } from "./scene-01-party";
import { AcceptanceScreeningBathScene } from "./scene-02-acceptance";
import { BurdenDevelopingPanScene } from "./scene-03-burden";
import { VerdictFourTroughsScene } from "./scene-04-verdicts";

const SCENE_COMPONENTS = {
  "party-and-defendant-trays": PartyAndDefendantTraysScene,
  "acceptance-screening-bath": AcceptanceScreeningBathScene,
  "burden-developing-pan": BurdenDevelopingPanScene,
  "verdict-four-troughs": VerdictFourTroughsScene,
} as const;

export const DisclosureDarkroomStudio: React.FC = () => (
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
