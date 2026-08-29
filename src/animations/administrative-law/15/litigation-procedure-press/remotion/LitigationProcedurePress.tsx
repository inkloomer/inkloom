import React from "react";
import { AbsoluteFill } from "remotion";
import { TimelineSequence } from "../../../../shared/remotion-runtime";
import { SCENES } from "./storyboard";
import { SuitDeadlineMatrixScene } from "./scene-01-suit-deadline";
import { AcceptanceVerdictComposeScene } from "./scene-02-acceptance";
import { RemedyTypeDrawerScene } from "./scene-03-remedy";
import { TrialOrdinaryComposeLockupScene } from "./scene-04-ordinary";
import { SummaryProcedureQuoinScene } from "./scene-05-summary";
import { SecondInstanceKeylineScene } from "./scene-06-second-instance";
import { WithdrawalAbsenceSortingScene } from "./scene-07-withdrawal";
import { AdvanceExecutionDovetailScene } from "./scene-08-advance";
import { MediationRuleLockScene } from "./scene-09-mediation";
import { CourtAppearanceAndCrossTypeScene } from "./scene-10-appearance-cross";

const SCENE_COMPONENTS = {
  "suit-deadline-matrix": SuitDeadlineMatrixScene,
  "acceptance-verdict-compose": AcceptanceVerdictComposeScene,
  "remedy-type-drawer": RemedyTypeDrawerScene,
  "trial-ordinary-compose-lockup": TrialOrdinaryComposeLockupScene,
  "summary-procedure-quoin": SummaryProcedureQuoinScene,
  "second-instance-keyline": SecondInstanceKeylineScene,
  "withdrawal-absence-sorting": WithdrawalAbsenceSortingScene,
  "advance-execution-dovetail": AdvanceExecutionDovetailScene,
  "mediation-rule-lock": MediationRuleLockScene,
  "court-appearance-and-cross-type": CourtAppearanceAndCrossTypeScene,
} as const;

export const LitigationProcedurePress: React.FC = () => (
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
