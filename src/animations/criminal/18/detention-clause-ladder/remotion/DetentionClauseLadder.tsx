import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {ConductDeceptionGateScene} from './scenes-conduct';
import {AggravatedResultChainScene} from './scenes-aggravated';
import {FictionConversionGateScene} from './scenes-fiction';
import {FourBranchLoomScene} from './scenes-loom';
import {DebtDetentionNoticeScene} from './scenes-debt';

export const DetentionClauseLadder = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-conduct-deception-gate" {...SCENES.conductDeceptionGate}><ConductDeceptionGateScene /></TimelineSequence>
    <TimelineSequence name="02-aggravated-result-chain" {...SCENES.aggravatedResultChain}><AggravatedResultChainScene /></TimelineSequence>
    <TimelineSequence name="03-fiction-conversion-gate" {...SCENES.fictionConversionGate}><FictionConversionGateScene /></TimelineSequence>
    <TimelineSequence name="04-four-branch-loom" {...SCENES.fourBranchLoom}><FourBranchLoomScene /></TimelineSequence>
    <TimelineSequence name="05-debt-detention-notice" {...SCENES.debtDetentionNotice}><DebtDetentionNoticeScene /></TimelineSequence>
  </AbsoluteFill>
);
