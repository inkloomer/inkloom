import React from "react";
import { AbsoluteFill } from "remotion";
import { TimelineSequence } from "../../../../shared/remotion-runtime";
import { SCENES } from "./storyboard";
import { FiveThreadLoomWallScene } from "./scene-01-loom-wall";
import { ConflictShuttleLaneScene } from "./scene-02-shuttle";
import { ReferralGateUnresolvedScene } from "./scene-03-gate";

const SCENE_COMPONENTS = {
  "five-thread-loom-wall": FiveThreadLoomWallScene,
  "conflict-shuttle-lane": ConflictShuttleLaneScene,
  "referral-gate-unresolved": ReferralGateUnresolvedScene,
} as const;

export const ApplicationSilkLoom: React.FC = () => (
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
