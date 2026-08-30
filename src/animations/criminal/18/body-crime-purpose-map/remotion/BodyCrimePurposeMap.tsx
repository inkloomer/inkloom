import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {LifeBodyWardScene} from './scenes-life';
import {SexualAutonomyWardScene} from './scenes-sexual';
import {UnlawfulDetentionWardScene} from './scenes-detention';
import {KidnappingPurposeWardScene} from './scenes-kidnapping';
import {TrafficSellPurposeWardScene} from './scenes-traffic';

export const BodyCrimePurposeMap = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-life-body-ward" {...SCENES.lifeBodyWard}><LifeBodyWardScene /></TimelineSequence>
    <TimelineSequence name="02-sexual-autonomy-ward" {...SCENES.sexualAutonomyWard}><SexualAutonomyWardScene /></TimelineSequence>
    <TimelineSequence name="03-unlawful-detention-ward" {...SCENES.unlawfulDetentionWard}><UnlawfulDetentionWardScene /></TimelineSequence>
    <TimelineSequence name="04-kidnapping-purpose-ward" {...SCENES.kidnappingPurposeWard}><KidnappingPurposeWardScene /></TimelineSequence>
    <TimelineSequence name="05-traffic-sell-purpose-ward" {...SCENES.trafficSellPurposeWard}><TrafficSellPurposeWardScene /></TimelineSequence>
  </AbsoluteFill>
);
