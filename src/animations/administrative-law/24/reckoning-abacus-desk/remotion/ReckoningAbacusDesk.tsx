import React from "react";
import { AbsoluteFill } from "remotion";
import { TimelineSequence } from "../../../../shared/remotion-runtime";
import { SCENES } from "./storyboard";
import { ImputationAbacusFrameScene } from "./scene-01-imputation-frame";
import { AdministrativeClaimDeskScene } from "./scene-02-claim-desk";
import { JudicialCompensationGateScene } from "./scene-03-judicial-gate";
import { IndemnityBeadsLedgerScene } from "./scene-04-indemnity-ledger";

const SCENE_COMPONENTS = {
  "imputation-abacus-frame": ImputationAbacusFrameScene,
  "administrative-claim-desk": AdministrativeClaimDeskScene,
  "judicial-compensation-gate": JudicialCompensationGateScene,
  "indemnity-beads-ledger": IndemnityBeadsLedgerScene,
} as const;

export const ReckoningAbacusDesk: React.FC = () => (
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
