import React from "react";
import { AbsoluteFill } from "remotion";
import { TimelineSequence } from "../../../../shared/remotion-runtime";
import { SCENES } from "./storyboard";
import { ProposerAndCivilCompareScene } from "./scene-01-proposer";
import { ThreeStepBeamPathScene } from "./scene-02-beam";
import { MnemonicLightSignalScene } from "./scene-03-signal";

const SCENE_COMPONENTS = {
  "proposer-and-civil-compare": ProposerAndCivilCompareScene,
  "three-step-beam-path": ThreeStepBeamPathScene,
  "mnemonic-light-signal": MnemonicLightSignalScene,
} as const;

export const LighthouseWatchNetwork: React.FC = () => (
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
