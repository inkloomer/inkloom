import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {PunishmentRoleClassification} from './PunishmentRoleClassification';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="PunishmentRoleClassification" component={withAnimationTypography(PunishmentRoleClassification, getAnimationTypographyConfiguration('punishment-role-classification'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
