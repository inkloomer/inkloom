import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {TwoClassificationMethodsScene, RingleaderRelationsScene} from './scenes-rank';
import {RingleaderPunishmentScene, AccessoryCoercedRolesScene} from './scenes-punish';

export const PunishmentRoleClassification = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-two-classification-methods" {...SCENES.twoClassificationMethods}><TwoClassificationMethodsScene /></TimelineSequence>
    <TimelineSequence name="02-ringleader-relations" {...SCENES.ringleaderRelations}><RingleaderRelationsScene /></TimelineSequence>
    <TimelineSequence name="03-ringleader-punishment" {...SCENES.ringleaderPunishment}><RingleaderPunishmentScene /></TimelineSequence>
    <TimelineSequence name="04-accessory-coerced-roles" {...SCENES.accessoryCoercedRoles}><AccessoryCoercedRolesScene /></TimelineSequence>
  </AbsoluteFill>
);
