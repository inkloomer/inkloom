import React from "react";
import { AbsoluteFill } from "remotion";
import { TimelineSequence } from "../../../../shared/remotion-runtime";
import { SCENES } from "./storyboard";
import { FeeDrawerTriadScene } from "./scene-01-fee";
import { OralFormGateScene } from "./scene-02-oral";
import { AnnouncementShelfScene } from "./scene-03-announcement";
import { SealDrawerQuartetScene } from "./scene-04-seal";
import { SignatureHerbLedgerScene } from "./scene-05-signature";
import { RecordingHeadcountLockScene } from "./scene-06-recording";
import { ExclusionTierStairScene } from "./scene-07-exclusion";
import { NumberScalePenaltyScene } from "./scene-08-numbers-penalty";
import { NumberScaleSuitReviewScene } from "./scene-09-numbers-suit";
import { NumberScaleRemainderScene } from "./scene-10-numbers-rest";

const SCENE_COMPONENTS = {
  "fee-drawer-triad": FeeDrawerTriadScene,
  "oral-form-gate": OralFormGateScene,
  "announcement-shelf": AnnouncementShelfScene,
  "seal-drawer-quartet": SealDrawerQuartetScene,
  "signature-herb-ledger": SignatureHerbLedgerScene,
  "recording-headcount-lock": RecordingHeadcountLockScene,
  "exclusion-tier-stair": ExclusionTierStairScene,
  "number-scale-penalty": NumberScalePenaltyScene,
  "number-scale-suit-review": NumberScaleSuitReviewScene,
  "number-scale-remainder": NumberScaleRemainderScene,
} as const;

export const KeyDetailsApothecary: React.FC = () => (
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
