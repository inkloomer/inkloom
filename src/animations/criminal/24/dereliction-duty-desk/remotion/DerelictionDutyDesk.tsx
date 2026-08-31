import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {AbuseNegligenceSplitScene} from './scenes-abuse';
import {AidEscapeClassificationScene} from './scenes-aid-escape';
import {OrdinaryCrimesScene} from './scenes-ordinary';
import {PerversionJusticeScene} from './scenes-perversion';
import {RescueFooddrugTailScene} from './scenes-rescue-fooddrug';

export const DerelictionDutyDesk = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-abuse-negligence-split" {...SCENES.abuseNegligenceSplit}><AbuseNegligenceSplitScene /></TimelineSequence>
    <TimelineSequence name="02-perversion-justice" {...SCENES.perversionJustice}><PerversionJusticeScene /></TimelineSequence>
    <TimelineSequence name="03-ordinary-crimes" {...SCENES.ordinaryCrimes}><OrdinaryCrimesScene /></TimelineSequence>
    <TimelineSequence name="04-aid-escape-classification" {...SCENES.aidEscapeClassification}><AidEscapeClassificationScene /></TimelineSequence>
    <TimelineSequence name="05-rescue-fooddrug-tail" {...SCENES.rescueFooddrugTail}><RescueFooddrugTailScene /></TimelineSequence>
  </AbsoluteFill>
);
