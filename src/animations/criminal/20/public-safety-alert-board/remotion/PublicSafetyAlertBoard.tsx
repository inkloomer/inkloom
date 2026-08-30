import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {DangerMethodsFloorScene} from './scenes-danger';
import {DrivingGunsSafetyScene} from './scenes-driving';
import {MeaningFireRulersScene} from './scenes-meaning';
import {TrafficAccidentWardScene} from './scenes-traffic';

export const PublicSafetyAlertBoard = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-meaning-fire-rulers" {...SCENES.meaningFireRulers}><MeaningFireRulersScene /></TimelineSequence>
    <TimelineSequence name="02-danger-methods-floor" {...SCENES.dangerMethodsFloor}><DangerMethodsFloorScene /></TimelineSequence>
    <TimelineSequence name="03-traffic-accident-ward" {...SCENES.trafficAccidentWard}><TrafficAccidentWardScene /></TimelineSequence>
    <TimelineSequence name="04-driving-guns-safety" {...SCENES.drivingGunsSafety}><DrivingGunsSafetyScene /></TimelineSequence>
  </AbsoluteFill>
);
