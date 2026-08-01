import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {OccupationalEmbezzlementFlowchart} from './OccupationalEmbezzlementFlowchart';
import {DURATION_FRAMES, FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="OccupationalEmbezzlementFlowchart" component={withAnimationTypography(OccupationalEmbezzlementFlowchart, getAnimationTypographyConfiguration('occupational-embezzlement-flowchart'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
