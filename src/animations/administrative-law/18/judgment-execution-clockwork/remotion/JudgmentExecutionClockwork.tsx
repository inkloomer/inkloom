import React from "react";
import { AbsoluteFill } from "remotion";
import { TimelineSequence } from "../../../../shared/remotion-runtime";
import { SCENES } from "./storyboard";
import { FirstInstanceGearTrioScene } from "./scene-01-trio";
import { RevocationSpecialGearTrainScene } from "./scene-02-revocation";
import { ReviewVerdictMatrixBoardScene } from "./scene-03-matrix";
import { SecondInstanceVerdictDialScene } from "./scene-04-second-instance";
import { AnnouncementPublicityPanelScene } from "./scene-05-announce";
import { ExecutionMechanismBoardScene } from "./scene-06-execution";

const SCENE_COMPONENTS = {
  "first-instance-gear-trio": FirstInstanceGearTrioScene,
  "revocation-special-gear-train": RevocationSpecialGearTrainScene,
  "review-verdict-matrix-board": ReviewVerdictMatrixBoardScene,
  "second-instance-verdict-dial": SecondInstanceVerdictDialScene,
  "announcement-publicity-panel": AnnouncementPublicityPanelScene,
  "execution-mechanism-board": ExecutionMechanismBoardScene,
} as const;

export const JudgmentExecutionClockwork: React.FC = () => (
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
