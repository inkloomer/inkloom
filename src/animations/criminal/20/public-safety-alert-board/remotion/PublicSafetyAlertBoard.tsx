import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {DangerMethodsFloorScene} from './scenes-danger';
import {DrivingGunsSafetyScene} from './scenes-driving';
import {MeaningFireRulersScene} from './scenes-meaning';
import {TrafficAccidentWardScene} from './scenes-traffic';
import {TerrorAlertWardScene} from './scenes-terror';
import {InterfereDrivingPanelScene} from './scenes-interfere';
import {GunFactorySafetyScene} from './scenes-gunworks';

export const PublicSafetyAlertBoard = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-meaning-fire-rulers" {...SCENES.meaningFireRulers}><MeaningFireRulersScene /></TimelineSequence>
    <TimelineSequence name="02-danger-methods-floor" {...SCENES.dangerMethodsFloor}><DangerMethodsFloorScene /></TimelineSequence>
    <TimelineSequence name="03-traffic-accident-ward" {...SCENES.trafficAccidentWard}><TrafficAccidentWardScene /></TimelineSequence>
    <TimelineSequence name="04-driving-guns-safety" {...SCENES.drivingGunsSafety}><DrivingGunsSafetyScene /></TimelineSequence>
    <TimelineSequence name="05-terror-alert-ward" {...SCENES.terrorAlertWard}><TerrorAlertWardScene /></TimelineSequence>
    <TimelineSequence name="06-interfere-driving-panel" {...SCENES.interfereDrivingPanel}><InterfereDrivingPanelScene /></TimelineSequence>
    <TimelineSequence name="07-gun-factory-safety" {...SCENES.gunFactorySafety}><GunFactorySafetyScene /></TimelineSequence>
  </AbsoluteFill>
);
