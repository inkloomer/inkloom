import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {CrimeNameThreeFormsScene} from './scenes-names';
import {CrimeDescriptionFourScene} from './scenes-descriptions';
import {NoticeFictionForkScene} from './scenes-fork';
import {FictionNineAtlasScene} from './scenes-atlas';

export const ClauseAtlasNoticeFiction = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-crime-name-three-forms" {...SCENES.crimeNameThreeForms}><CrimeNameThreeFormsScene /></TimelineSequence>
    <TimelineSequence name="02-crime-description-four" {...SCENES.crimeDescriptionFour}><CrimeDescriptionFourScene /></TimelineSequence>
    <TimelineSequence name="03-notice-fiction-fork" {...SCENES.noticeFictionFork}><NoticeFictionForkScene /></TimelineSequence>
    <TimelineSequence name="04-fiction-nine-atlas" {...SCENES.fictionNineAtlas}><FictionNineAtlasScene /></TimelineSequence>
  </AbsoluteFill>
);
