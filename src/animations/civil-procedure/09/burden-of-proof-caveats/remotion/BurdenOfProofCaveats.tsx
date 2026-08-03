import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {CaveatsBoardScene, CourtOutsiderGateScene, FictionVerdictScene} from './scenes/CaveatScenes';

export const BurdenOfProofCaveats = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-caveats-board" {...SCENES.caveatsBoard}><CaveatsBoardScene /></TimelineSequence>
    <TimelineSequence name="02-fiction-verdict" {...SCENES.fictionVerdict}><FictionVerdictScene /></TimelineSequence>
    <TimelineSequence name="03-court-outsider-gate" {...SCENES.courtOutsiderGate}><CourtOutsiderGateScene /></TimelineSequence>
  </AbsoluteFill>
);
