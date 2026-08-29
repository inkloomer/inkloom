import React from "react";
import { AbsoluteFill } from "remotion";
import { TimelineSequence } from "../../../../shared/remotion-runtime";
import { SCENES } from "./storyboard";
import { EightEvidenceVitrineHallScene } from "./scene-01-hall";
import { DigitalVsAnalogCompareScene } from "./scene-02-digital-analog";
import { BurdenOfProofLedgerScene } from "./scene-03-burden";
import { DeadlineAndSupplementVitrineScene } from "./scene-04-deadline";
import { EvidenceCollectionDeskScene } from "./scene-05-collection";
import { CrossExamAndVerdictHallScene } from "./scene-06-verdict";

const SCENE_COMPONENTS = {
  "eight-evidence-vitrine-hall": EightEvidenceVitrineHallScene,
  "digital-vs-analog-compare": DigitalVsAnalogCompareScene,
  "burden-of-proof-ledger": BurdenOfProofLedgerScene,
  "deadline-and-supplement-vitrine": DeadlineAndSupplementVitrineScene,
  "evidence-collection-desk": EvidenceCollectionDeskScene,
  "cross-exam-and-verdict-hall": CrossExamAndVerdictHallScene,
} as const;

export const EvidenceVitrineMuseum: React.FC = () => (
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
