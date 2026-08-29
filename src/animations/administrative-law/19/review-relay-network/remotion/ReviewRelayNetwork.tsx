import React from "react";
import { AbsoluteFill } from "remotion";
import { TimelineSequence } from "../../../../shared/remotion-runtime";
import { SCENES } from "./storyboard";
import { DefendantRelayStationScene } from "./scene-01-defendant";
import { JurisdictionDeadlineRoutesScene } from "./scene-02-routes";
import { TrialObjectBurdenLedgerScene } from "./scene-03-ledger";
import { VerdictTypeTerminalScene } from "./scene-04-terminal";

const SCENE_COMPONENTS = {
  "defendant-relay-station": DefendantRelayStationScene,
  "jurisdiction-deadline-routes": JurisdictionDeadlineRoutesScene,
  "trial-object-burden-ledger": TrialObjectBurdenLedgerScene,
  "verdict-type-terminal": VerdictTypeTerminalScene,
} as const;

export const ReviewRelayNetwork: React.FC = () => (
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
